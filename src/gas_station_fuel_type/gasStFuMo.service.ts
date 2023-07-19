import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStFuMo } from './models/gasStFuMo.model';
import { CreateGasStFuMoDto } from './dto/create-gasStFuMo.dto';
import { UpdateGasStFuMoDto } from './dto/update-gasStFuMo.dto';

@Injectable()
export class GasStFuMoService {
  constructor(
    @InjectModel(GasStFuMo) private gasStFuMoRepo: typeof GasStFuMo,
  ) {}

  async createGasStFuMo(
    createGasStFuMoDto: CreateGasStFuMoDto,
  ): Promise<GasStFuMo> {
    const gasStFuMo = await this.gasStFuMoRepo.create(createGasStFuMoDto);
    return gasStFuMo;
  }

  async getAllGasStFuMo(): Promise<GasStFuMo[]> {
    const companies = await this.gasStFuMoRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getGasStFuMoById(id: number): Promise<GasStFuMo> {
    const gasStFuMo = await this.gasStFuMoRepo.findOne({ where: { id } });
    // const gasStFuMo = await this.gasStFuMoRepo.findByPk(id);
    return gasStFuMo;
  }

  async deleteGasStFuMoById(id: number): Promise<number> {
    return this.gasStFuMoRepo.destroy({ where: { id } });
  }

  async updateGasStFuMo(
    id: number,
    updateGasStFuMoDto: UpdateGasStFuMoDto,
  ): Promise<GasStFuMo> {
    const gasStFuMo = await this.gasStFuMoRepo.update(updateGasStFuMoDto, {
      where: { id },
      returning: true,
    });

    return gasStFuMo[1][0].dataValues;
  }
}
