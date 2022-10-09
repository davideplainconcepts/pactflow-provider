import { Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import { CreatePlanetDto } from 'src/core/dto/planet.dto';
import { PlanetFactoryService } from 'src/use-cases/planet/planet-factory.service';
import { PlanetUseCases } from 'src/use-cases/planet/planet.use-cases';

@Controller('planets')
export class PlanetController {
  constructor(
    private planetUseCases: PlanetUseCases,
    private planetFactoryService: PlanetFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.planetUseCases.getAllPlanet();
  }

  @Get(':orderFromSun')
  async getByOrderFromSun(@Param('orderFromSun') orderFromSun: number) {
    return this.planetUseCases.getPlanetByOrderFromSun(orderFromSun);
  }

  @Post()
  async creatPlanet(@Body() planetDto: CreatePlanetDto) {
    try {
      const planet = this.planetFactoryService.createNewPlanet(planetDto);
      await this.planetUseCases.createPlanet(planet);
    } catch (error) {
      return error
    }

    return 'Succefully created planet';
  }

  @Delete(':planetName')
  async deletePlanet(planetName: string) {
    await this.planetUseCases.deletePlanet(planetName);
  }
}