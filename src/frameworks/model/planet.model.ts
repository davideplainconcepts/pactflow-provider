import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { SurfaceTemperature } from 'src/core/entitities/planet.entity';

export type PlanetDocument = Planet & Document;

@Schema()
export class Planet {
  @Prop({ required: true, unique: true })
  id: string;

  @Prop()
  name: string;

  @Prop({ required: true, unique: true })
  orderFromSun: number;
 
  @Prop()
  hasRings: boolean

  @Prop()
  mainAtmosphere: string[];

  @Prop({ type: Object })
  surfaceTemperatureC: SurfaceTemperature;

}

export const PlanetSchema = SchemaFactory.createForClass(Planet);