import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilesModule } from './files/files.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { FileEntity } from './files/entities/file.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'lallah.db.elephantsql.com',
      username: 'mxsfoftt',
      password: 'h4rItN5e2m_Ik9zsXMFJVY4h8wMKL2vo',
      database: 'mxsfoftt',
      entities: [UserEntity, FileEntity],
      synchronize: true,
      retryDelay: 1000,
    }),
    UsersModule,
    FilesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
