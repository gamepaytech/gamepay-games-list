import { PrismaService } from './common/prisma.service';
export declare class AppService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getHello(): string;
}
