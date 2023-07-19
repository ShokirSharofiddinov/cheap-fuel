import { Module } from '@nestjs/common';
import { GasStFuMoController } from './gasStFuMo.controller';
import { GasStFuMoService } from './gasStFuMo.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStFuMo } from './models/gasStFuMo.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStFuMo])],
  controllers: [GasStFuMoController],
  providers: [GasStFuMoService],
})
export class GasStFuMoModule {}
