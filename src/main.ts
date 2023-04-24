import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: false });
  app.use('/uploads', express.static(join(__dirname, '..', 'uploads')));

  app.enableCors({ credentials: true, origin: true });

  const config = new DocumentBuilder()
    .setTitle('Cloud Storage App')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-docs', app, document);

  await app.listen(7777);
}
bootstrap();
