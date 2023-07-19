import { Module } from '@nestjs/common';
import { FuelTypesController } from './fuelTypes.controller';
import { FuelTypesService } from './fuelTypes.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { FuelTypes } from './models/fuelTypes.model';

@Module({
  imports: [SequelizeModule.forFeature([FuelTypes])],
  controllers: [FuelTypesController],
  providers: [FuelTypesService],
})
export class FuelTypesModule {}
