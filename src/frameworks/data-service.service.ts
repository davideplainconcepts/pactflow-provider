import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IDataServices } from '../core/abstract/data.abstract';
import { MongoGenericRepository } from './mongo-generic-repository';
import {
  Planet,
  PlanetDocument,
} from './model/planet.model';

@Injectable()
export class MongoDataServices
  implements IDataServices, OnApplicationBootstrap
{
  planets: MongoGenericRepository<Planet>;

  constructor(
    @InjectModel(Planet.name)
    private planetRepository: Model<Planet>,
  ) {}

  onApplicationBootstrap() {
    this.planets = new MongoGenericRepository<Planet>(this.planetRepository);
  }
}