import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  app.useLogger(app.get(Logger));

  app.enableCors();

  if (process.env.NODE_ENV !== 'production') {
    const config = new DocumentBuilder()
      .setTitle('API Yduqs Portais')
      .setDescription('Documentação da API')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(4000);
  console.log(`🚀 Application is running on: http://localhost:4000`);
  if (process.env.NODE_ENV !== 'production') {
    console.log(`📜 Swagger UI: http://localhost:4000/api`);
  }
}
bootstrap();
