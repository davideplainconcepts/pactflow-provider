import { Module } from '@nestjs/common';
import {
  PlanetController,
} from './controllers/planet.controller';
import {
  AppController,
} from './controllers/app.controller';
import { DataServicesModule } from './service/data-service.module';
import { PlanetUseCasesModule } from './use-cases/planet/planet.use-cases.module'


@Module({
  imports: [
    DataServicesModule,
    PlanetUseCasesModule,
  ],
  controllers: [
    AppController,
    PlanetController
  ],
  providers: [],
})
export class AppModule {}