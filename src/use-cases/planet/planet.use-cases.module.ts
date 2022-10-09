import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../service/data-service.module';

import { PlanetUseCases } from './planet.use-cases';

@Module({
  imports: [DataServicesModule,],
  providers: [PlanetUseCases],
  exports: [PlanetUseCases],
})
export class PlanetUseCasesModule {}