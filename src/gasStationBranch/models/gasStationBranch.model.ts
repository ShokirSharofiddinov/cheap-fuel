import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { GasStation } from 'src/gasStation/models/gasStation.model';

interface GasStationBranchAttr {
  gas_station_id: number;
  branch_name: string;
  address: string;
  location: string;
  phone_number: string;
}

@Table({ tableName: 'gasStationBranch' })
export class GasStationBranch extends Model<GasStationBranch, GasStationBranchAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  branch_name: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  location: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @ForeignKey(() => GasStation)
  @Column({
    type: DataType.INTEGER,
    onDelete: 'CASCADE',
  })
  gas_station_id: number;

  @BelongsTo(() => GasStation)
  gasStationBranch: GasStation;
}
