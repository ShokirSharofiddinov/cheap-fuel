import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';

interface FuelTypesAttr {
  name: string;
}

@Table({ tableName: 'fuelTypes' })
export class FuelTypes extends Model<FuelTypes, FuelTypesAttr> {
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
  name: string;
}
