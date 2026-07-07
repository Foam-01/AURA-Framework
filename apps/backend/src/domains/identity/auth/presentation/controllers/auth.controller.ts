import { Controller, Post, Body } from "@nestjs/common";
import { LoginUseCase } from "../../application/use-cases/login.usecase";

@Controller("auth")
export class AuthController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  @Post("login")
  login(@Body() body: { email: string; password: string }) {
    return this.loginUseCase.execute(body.email, body.password);
  }
}
