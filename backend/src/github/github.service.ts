import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}

  getAllCommits(
    user: string,
    repository: string,
  ): Observable<AxiosResponse<any>> {
    return this.httpService.get(
      `https://api.github.com/repos/${user}/${repository}/commits`,
    );
  }
}
