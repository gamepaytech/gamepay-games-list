"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("./config");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, config_1.RedisTransportConfig);
    await app.listen();
    common_1.Logger.log('Microservice Started', 'Payment');
}
bootstrap();
//# sourceMappingURL=main.js.map