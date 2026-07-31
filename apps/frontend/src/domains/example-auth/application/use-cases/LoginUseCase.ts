export interface LoginInputDto {
  email: string;
  pass: string;
}

export interface LoginOutputDto {
  accessToken: string;
  user: { id: string; email: string; name: string };
}

export interface AuthRepositoryInterface {
  login(credentials: LoginInputDto): Promise<LoginOutputDto>;
}

export class LoginUseCase {
  constructor(private readonly authRepository: AuthRepositoryInterface) {}

  async execute(input: LoginInputDto): Promise<LoginOutputDto> {
    if (!input.email || !input.pass) {
      throw new Error('Email and password are required');
    }
    return this.authRepository.login(input);
  }
}
