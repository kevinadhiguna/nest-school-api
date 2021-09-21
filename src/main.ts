import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    await app.listen(port);
    console.log(
      `NestJS School API has been launched at port ${port} !`,
    );
  } catch (err) {
    console.log('An error occurred :', err);
  }
}
bootstrap();
