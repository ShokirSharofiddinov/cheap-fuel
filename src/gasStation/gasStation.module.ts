import { Module } from '@nestjs/common';
import { GasStationController } from './gasStation.controller';
import { GasStationService } from './gasStation.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStation } from './models/gasStation.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStation])],
  controllers: [GasStationController],
  providers: [GasStationService],
})
export class GasStationModule {}
