export class LoginUseCase {
  async execute(email: string, password: string) {
    return {
      message: "Login placeholder executed",
      email,
      password,
    };
  }
}
