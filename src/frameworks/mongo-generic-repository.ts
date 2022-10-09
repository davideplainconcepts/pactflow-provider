import { Model } from 'mongoose';
import { IGenericRepository } from '../core/abstract/generic-repository.abstract';

export class MongoGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Model<T>;
  private _populateOnFind: string[];

  constructor(repository: Model<T>, populateOnFind: string[] = []) {
    this._repository = repository;
    this._populateOnFind = populateOnFind;
  }

  getAll(): Promise<T[]> {
    return this._repository.find().populate(this._populateOnFind).exec();
  }

  get(orderFromSun: number): Promise<T> {
    return this._repository.findOne({
        orderFromSun: orderFromSun
      }).exec()
  }
}