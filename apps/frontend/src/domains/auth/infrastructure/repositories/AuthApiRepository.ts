import { IAuthRepository, LoginInputDto, LoginOutputDto } from '../../application/use-cases/LoginUseCase';

export class AuthApiRepository implements IAuthRepository {
  constructor(private readonly apiEndpoint: string = '/api/v1/auth') {}

  async login(credentials: LoginInputDto): Promise<LoginOutputDto> {
    const response = await fetch(`${this.apiEndpoint}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      throw new Error('Authentication failed');
    }
    return response.json();
  }
}
