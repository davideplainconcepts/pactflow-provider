import { Controller, Get, Param} from '@nestjs/common';
import { PlanetUseCases } from 'src/use-cases/planet/planet.use-cases';

@Controller('planets')
export class PlanetController {
  constructor(
    private planetUseCases: PlanetUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.planetUseCases.getAllPlanet();
  }

  @Get(':orderFromSun')
  async getByOrderFromSun(@Param('orderFromSun') orderFromSun: number) {
    return this.planetUseCases.getPlanetByOrderFromSun(orderFromSun);
  }

}