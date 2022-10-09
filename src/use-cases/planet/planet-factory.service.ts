import { Injectable } from '@nestjs/common';
import { Planet } from 'src/core/entitities/planet.entity';
import { CreatePlanetDto } from 'src/core/dto/planet.dto';

@Injectable()
export class PlanetFactoryService {
  createNewPlanet(createPlanetDto: CreatePlanetDto) {
    const newPlanet = new Planet();
    newPlanet.name = createPlanetDto.name;
    newPlanet.hasRings = createPlanetDto.hasRings;
    newPlanet.surfaceTemperatureC = createPlanetDto.surfaceTemperatureC;
    newPlanet.mainAtmosphere = createPlanetDto.mainAtmosphere;
    newPlanet.orderFromSun = createPlanetDto.orderFromSun;
    return newPlanet;
  } 
}