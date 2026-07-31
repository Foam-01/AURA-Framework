import { AuthRepositoryInterface, LoginInputDto, LoginOutputDto } from '../../application/use-cases/LoginUseCase';

export class AuthApiRepository implements AuthRepositoryInterface {
  constructor(private readonly apiEndpoint: string = '/api/v1/auth') {}

  async login(credentials: LoginInputDto): Promise<LoginOutputDto> {
    // Infrastructure level HTTP call abstraction (e.g. fetch / axios adapter)
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
