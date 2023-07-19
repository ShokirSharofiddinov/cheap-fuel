import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { FuelTypes } from 'src/fuel-types/models/fuelTypes.model';
import { GasStation } from 'src/gasStation/models/gasStation.model';
import { GasStationBranch } from 'src/gasStationBranch/models/gasStationBranch.model';

interface GasStFuMoAttr {
  gas_station_branch_id: number;
  fuel_type_id: number;
  price: number;
  is_bor: boolean;
}

@Table({ tableName: 'gasStFuMo' })
export class GasStFuMo extends Model<GasStFuMo, GasStFuMoAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.DECIMAL,
  })
  price: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_bor: boolean;

  @ForeignKey(() => FuelTypes)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  fuel_type_id: number;

  @BelongsTo(() => FuelTypes)
  fuelTypes = FuelTypes;

  @ForeignKey(() => GasStationBranch)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  gas_station_branch_id: number;
  @BelongsTo(() => GasStationBranch)
  gasStationBranch = GasStationBranch;
}
