import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

interface GasStationAttr {
  main_gas_station_name: string;
}

@Table({ tableName: 'gasStation' })
export class GasStation extends Model<GasStation, GasStationAttr> {
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
  main_gas_station_name: string;
}
