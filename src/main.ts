import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import { resolve } from 'path';

dotenv.config({ path: resolve(__dirname, '../backend/.env') });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000;
  console.log('Listening on port:', port);

  app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    }),
  );


  console.log('Este es la ruta del frontend: ', process.env.FRONTEND)
  app.setGlobalPrefix('api/v2');
  await app.listen(port);
}

bootstrap();


