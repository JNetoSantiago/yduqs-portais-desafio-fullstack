import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaValidationExceptionFilter } from './exceptions/globalException';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('Registrando filtro global');

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new PrismaValidationExceptionFilter(httpAdapter));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
