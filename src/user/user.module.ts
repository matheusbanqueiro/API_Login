import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Import the module containing PrismaService

@Module({
  imports: [PrismaModule], // Import the PrismaModule here
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
