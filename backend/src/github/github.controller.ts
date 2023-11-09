import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { GithubService } from './github.service';
import { firstValueFrom } from 'rxjs';
import { CommitHistory } from './interfaces/github.interfaces';
import { AxiosResponse } from 'axios';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}

  @Get()
  async getAllCommits(
    @Query('user') user: string,
    @Query('repository') repository: string,
  ): Promise<CommitHistory[]> {
    try {
      const { data } = (await firstValueFrom(
        this.githubService.getAllCommits(user, repository),
      )) as AxiosResponse<CommitHistory[]>;
      return data;
    } catch (error: unknown) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error:
            'The project you are tring to fetch was not found. Make sure the user and the repository are correct.',
        },
        HttpStatus.NOT_FOUND,
        {
          cause: error,
        },
      );
    }
  }
}
