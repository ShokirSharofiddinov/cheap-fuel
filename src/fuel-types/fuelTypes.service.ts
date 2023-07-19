import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FuelTypes } from './models/fuelTypes.model';
import { CreateFuelTypesDto } from './dto/create-fuelTypes.dto';
import { UpdateFuelTypesDto } from './dto/update-fuelTypes.dto';

@Injectable()
export class FuelTypesService {
  constructor(
    @InjectModel(FuelTypes) private fuelTypesRepo: typeof FuelTypes,
  ) {}

  async createFuelTypes(
    createFuelTypesDto: CreateFuelTypesDto,
  ): Promise<FuelTypes> {
    const fuelTypes = await this.fuelTypesRepo.create(createFuelTypesDto);
    return fuelTypes;
  }

  async getAllFuelTypes(): Promise<FuelTypes[]> {
    const companies = await this.fuelTypesRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getFuelTypesById(id: number): Promise<FuelTypes> {
    const fuelTypes = await this.fuelTypesRepo.findOne({ where: { id } });
    // const fuelTypes = await this.fuelTypesRepo.findByPk(id);
    return fuelTypes;
  }

  async getFuelTypesByName(
    name: string,
  ): Promise<FuelTypes> {
    const fuelTypes = await this.fuelTypesRepo.findOne({
      where: { name },
    });
    return fuelTypes;
  }

  async deleteFuelTypesById(id: number): Promise<number> {
    return this.fuelTypesRepo.destroy({ where: { id } });
  }

  async updateFuelTypes(
    id: number,
    updateFuelTypesDto: UpdateFuelTypesDto,
  ): Promise<FuelTypes> {
    const fuelTypes = await this.fuelTypesRepo.update(updateFuelTypesDto, {
      where: { id },
      returning: true,
    });

    return fuelTypes[1][0].dataValues;
  }
}
