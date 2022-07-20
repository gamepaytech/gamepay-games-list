"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisTransportConfig = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.RedisTransportConfig = {
    transport: microservices_1.Transport.REDIS,
    options: {
        host: process.env.REDIS_HOST || 'localhost',
        port: process.env.REDIS_PORT || 6379,
        username: process.env.REDIS_USERNAME || '',
        password: process.env.REDIS_PASSWORD || '',
    },
};
//# sourceMappingURL=index.js.map