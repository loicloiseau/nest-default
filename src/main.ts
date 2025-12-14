import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  // Configure OpenAPI / Swagger documentation
  const swagger_options = new DocumentBuilder()
    .setTitle(process.env.API_TITLE ?? 'Example API')
    .setDescription(process.env.API_DESCRIPTION ?? 'The API description')
    .setVersion(process.env.API_VERSION ?? '1.0')
    .addBearerAuth()
    .build();
  const swagger_document = SwaggerModule.createDocument(app, swagger_options);
  SwaggerModule.setup('swagger/ui', app, swagger_document, {
    yamlDocumentUrl: 'swagger/yaml',
    jsonDocumentUrl: 'swagger/json',
    swaggerUiEnabled: true,
  });

  // Configure Logger
  app.useLogger(app.get(Logger));

  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
