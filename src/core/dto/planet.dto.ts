import {
  IsString,
  IsNotEmpty,
  IsDate,
  IsNumberString,
  IsBooleanString,
  IsArray,
  IsObject,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { SurfaceTemperature } from '../entitities/planet.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlanetDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  @ApiProperty()
  orderFromSun: number;

  @IsBooleanString()
  @IsNotEmpty()
  @ApiProperty()
  hasRings: boolean;

  @IsArray()
  @IsNotEmpty()
  @ApiProperty()
  mainAtmosphere: string[];

  @IsObject()
  @IsNotEmpty()
  @ApiProperty()
  surfaceTemperatureC: SurfaceTemperature;
}

export class UpdatePlanetDto extends PartialType(CreatePlanetDto) {}
