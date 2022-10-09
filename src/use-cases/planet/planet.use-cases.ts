import { Injectable } from '@nestjs/common';
import { Planet } from '../../core/entitities/planet.entity';
import { IDataServices } from '../../core/abstract/data.abstract';

@Injectable()
export class PlanetUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllPlanet(): Promise<Planet[]> {
    return this.dataServices.planets.getAll();
  }

  getPlanetByOrderFromSun(orderFromSun: number): Promise<Planet> {
    return this.dataServices.planets.get(orderFromSun);
  }
}