import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GithubModule } from './github/github.module';
import configuration from './config/configuration';
import { HttpModule } from '@nestjs/axios';

@Global()
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env'],
      load: [configuration],
      isGlobal: true,
    }),
    GithubModule,
  ],
  exports: [HttpModule],
})
export class AppModule {}
