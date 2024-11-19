"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const dataSource = app.get(typeorm_1.DataSource);
    console.log('Registered Entities:', dataSource.entityMetadatas.map(meta => meta.name));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Blockchain Price Tracker & Alert System')
        .setDescription('API documentation for Blockchain Price Tracker & Alert System')
        .setVersion('1.0')
        .addTag('users')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map