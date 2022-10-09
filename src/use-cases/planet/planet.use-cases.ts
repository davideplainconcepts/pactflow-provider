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

  async createPlanet(book: Planet): Promise<Planet> {
    try {
      // call to our dependencies
      const createdPlanet = await this.dataServices.planets.create(book);

      return createdPlanet;
    } catch (error) {
      throw error;
    }
  }

  async deletePlanet(planetName: string):  Promise<String> {
    try {
      
      await this.dataServices.planets.delete(planetName);
      return `Planet ${planetName} was deleted`
    } catch (error) {
      throw error;
    }
  }
}

