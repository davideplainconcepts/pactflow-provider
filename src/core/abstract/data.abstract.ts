import { Planet } from '../entitities/planet.entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract planets: IGenericRepository<Planet>;
}
