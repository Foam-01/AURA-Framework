import { Module } from "@nestjs/common";
import { AuthController } from "./presentation/controllers/auth.controller";
import { LoginUseCase } from "./application/use-cases/login.usecase";

@Module({
  controllers: [AuthController],
  providers: [LoginUseCase],
})
export class AuthModule {}
