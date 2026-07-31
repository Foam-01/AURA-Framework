export interface LoginUserInputDto {
  email: string;
  pass: string;
}

export interface LoginUserOutputDto {
  token: string;
  userId: string;
}

export interface IAuthRepository {
  verifyCredentials(email: string, pass: string): Promise<LoginUserOutputDto | null>;
}

export class LoginUserUseCase {
  constructor(private readonly authRepo: IAuthRepository) {}

  async execute(input: LoginUserInputDto): Promise<LoginUserOutputDto> {
    const result = await this.authRepo.verifyCredentials(input.email, input.pass);
    if (!result) {
      throw new Error('Invalid credentials');
    }
    return result;
  }
}
