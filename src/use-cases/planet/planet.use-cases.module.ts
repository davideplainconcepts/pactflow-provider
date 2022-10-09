import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../service/data-service.module';
import { PlanetFactoryService } from './planet-factory.service';
import { PlanetUseCases } from './planet.use-cases';

@Module({
  imports: [DataServicesModule,],
  providers: [PlanetUseCases, PlanetFactoryService],
  exports: [PlanetUseCases, PlanetFactoryService],
})
export class PlanetUseCasesModule {}