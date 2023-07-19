import { Module } from '@nestjs/common';
import { GasStationBranchController } from './gasStationBranch.controller';
import { GasStationBranchService } from './gasStationBranch.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStationBranch } from './models/gasStationBranch.model';

@Module({
  imports: [SequelizeModule.forFeature([GasStationBranch])],
  controllers: [GasStationBranchController],
  providers: [GasStationBranchService],
})
export class GasStationBranchModule {}
