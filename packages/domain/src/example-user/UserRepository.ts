import { Repository } from '../core/Repository';
import { UserEntity } from './UserEntity';

export interface UserRepository extends Repository<UserEntity> {
  findByEmail(email: string): Promise<UserEntity | null>;
}
