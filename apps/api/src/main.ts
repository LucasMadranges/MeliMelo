import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ExpressAdapter } from '@nestjs/platform-express'

async function bootstrap() {
    const app = await NestFactory.create(AppModule, new ExpressAdapter(), {
        cors: true,
        logger: ['error', 'warn', 'log'],
    })

    const config = new DocumentBuilder()
        .setTitle('MeliMelo - API Docs')
        .setDescription('Documentation API pour MeliMelo')
        .setVersion('1.0')
        .build()
    const documentFactory = () => SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, documentFactory)

    await app.listen(process.env.PORT ?? 4000)
}
bootstrap()
