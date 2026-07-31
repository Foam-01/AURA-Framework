export interface IRepository<TEntity> {
  findById(id: string): Promise<TEntity | null>;
  findAll(): Promise<TEntity[]>;
  save(entity: TEntity): Promise<void>;
  delete(id: string): Promise<void>;
}
