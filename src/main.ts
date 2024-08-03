import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const frontendUrl = process.env.FRONTEND_URL;
  console.log('Configuring CORS with origin:', frontendUrl);

  app.use(
    cors({
      origin: frontendUrl,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    }),
  );

  app.setGlobalPrefix('api/v2');
  const port = process.env.PORT || 3000;
  console.log('Listening on port:', port);
  await app.listen(port);
}

