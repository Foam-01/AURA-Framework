export abstract class BaseEntity<TProps> {
  protected readonly _id: string;
  protected readonly props: TProps;
  protected readonly createdAt: Date;
  protected updatedAt: Date;

  constructor(props: TProps, id?: string, createdAt?: Date, updatedAt?: Date) {
    this._id = id ?? crypto.randomUUID();
    this.props = props;
    this.createdAt = createdAt ?? new Date();
    this.updatedAt = updatedAt ?? new Date();
  }

  get id(): string {
    return this._id;
  }

  public equals(object?: BaseEntity<TProps>): boolean {
    if (object === null || object === undefined) {
      return false;
    }
    if (this === object) {
      return true;
    }
    return this._id === object._id;
  }
}
