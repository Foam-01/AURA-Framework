import { BaseEntity } from '../core/BaseEntity';

export interface UserProps {
  email: string;
  name: string;
  role: string;
  isActive: boolean;
}

export class UserEntity extends BaseEntity<UserProps> {
  get email(): string {
    return this.props.email;
  }

  get name(): string {
    return this.props.name;
  }

  get role(): string {
    return this.props.role;
  }

  get isActive(): boolean {
    return this.props.isActive;
  }

  public deactivate(): void {
    this.props.isActive = false;
    this.updatedAt = new Date();
  }
}
