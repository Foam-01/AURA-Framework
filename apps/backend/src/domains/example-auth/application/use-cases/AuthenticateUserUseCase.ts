import { UseCase } from '@aura/domain';

export interface AuthenticateInputDto {
  email: string;
  pass: string;
}

export interface AuthenticateOutputDto {
  token: string;
  userId: string;
}

export interface IdentityRepositoryInterface {
  verifyUserPassword(email: string, pass: string): Promise<AuthenticateOutputDto | null>;
}

export class AuthenticateUserUseCase implements UseCase<AuthenticateInputDto, AuthenticateOutputDto> {
  constructor(private readonly identityRepo: IdentityRepositoryInterface) {}

  async execute(input: AuthenticateInputDto): Promise<AuthenticateOutputDto> {
    const result = await this.identityRepo.verifyUserPassword(input.email, input.pass);
    if (!result) {
      throw new Error('Invalid credentials');
    }
    return result;
  }
}
