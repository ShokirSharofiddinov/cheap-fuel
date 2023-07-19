import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GasStation } from './gasStation/models/gasStation.model';
import { GasStationModule } from './gasStation/gasStation.module';
import { GasStationBranch } from './gasStationBranch/models/gasStationBranch.model';
import { GasStationBranchModule } from './gasStationBranch/gasStationBranch.module';
import { FuelTypes } from './fuel-types/models/fuelTypes.model';
import { FuelTypesModule } from './fuel-types/fuelTypes.module';
import { GasStFuMo } from './gas_station_fuel_type/models/gasStFuMo.model';
import { GasStFuMoModule } from './gas_station_fuel_type/gasStFuMo.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [GasStation, GasStationBranch, FuelTypes, GasStFuMo],
      autoLoadModels: true,
      logging: true,
    }),
    GasStationModule,
    GasStationBranchModule,
    FuelTypesModule,
    GasStFuMoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
