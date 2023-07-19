import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStation } from './models/gasStation.model';
import { CreateGasStationDto } from './dto/create-gasStation.dto';
import { UpdateGasStationDto } from './dto/update-gasStation.dto';

@Injectable()
export class GasStationService {
  constructor(
    @InjectModel(GasStation) private gasStationRepo: typeof GasStation,
  ) {}

  async createGasStation(
    createGasStationDto: CreateGasStationDto,
  ): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.create(createGasStationDto);
    return gasStation;
  }

  async getAllGasStation(): Promise<GasStation[]> {
    const companies = await this.gasStationRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getGasStationById(id: number): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.findOne({ where: { id } });
    // const gasStation = await this.gasStationRepo.findByPk(id);
    return gasStation;
  }

  async getGasStationByName(
    main_gas_station_name: string,
  ): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.findOne({
      where: { main_gas_station_name },
    });
    return gasStation;
  }

  async deleteGasStationById(id: number): Promise<number> {
    return this.gasStationRepo.destroy({ where: { id } });
  }

  async updateGasStation(
    id: number,
    updateGasStationDto: UpdateGasStationDto,
  ): Promise<GasStation> {
    const gasStation = await this.gasStationRepo.update(updateGasStationDto, {
      where: { id },
      returning: true,
    });

    return gasStation[1][0].dataValues;
  }
}
