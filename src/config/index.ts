import { Transport } from '@nestjs/microservices';
import { CommonRedisOptions } from 'ioredis';
export const RedisTransportConfig: any = {
  transport: Transport.REDIS,
  options: {
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    username: process.env.REDIS_USERNAME || '',
    password: process.env.REDIS_PASSWORD || '',
  } as CommonRedisOptions,
};
