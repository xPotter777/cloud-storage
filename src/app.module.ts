import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'lallah.db.elephantsql.com',
      port: 5432,
      username: 'mxsfoftt',
      password: 'h4rItN5e2m_Ik9zsXMFJVY4h8wMKL2vo',
      database: 'mxsfoftt',
      entities: [],
      synchronize: true,
    }),
    UsersModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
