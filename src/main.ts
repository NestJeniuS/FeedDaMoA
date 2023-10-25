import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as config from 'config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('social')
    .setDescription('The social API description')
    .setVersion('1.0')
    .addTag('user')
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)

  const serverConfig = config.get('server')
  const port = serverConfig.port
  await app.listen(port);
  Logger.log(`Application running on port ${port}`)
}
bootstrap();
