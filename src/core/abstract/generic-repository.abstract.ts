export abstract class IGenericRepository<T> {
    abstract getAll(): Promise<T[]>;
  
    abstract get(orderFromSun: any): Promise<T>;
}