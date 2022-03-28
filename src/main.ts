import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

require('dotenv').config();

const PORT = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(PORT);
    console.log(
      `NestJS School API has been launched at http://localhost:${PORT} !`,
    );
  } catch (err) {
    console.log('An error occurred :', err);
  }
}
bootstrap();
