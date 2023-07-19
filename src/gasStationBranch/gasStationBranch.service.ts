import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GasStationBranch } from './models/gasStationBranch.model';
import { CreateGasStationBranchDto } from './dto/create-gasStationBranch.dto';
import { UpdateGasStationBranchDto } from './dto/update-gasStationBranch.dto';

@Injectable()
export class GasStationBranchService {
  constructor(
    @InjectModel(GasStationBranch)
    private gasStationBranchRepo: typeof GasStationBranch,
  ) {}

  async createGasStationBranch(
    createGasStationBranchDto: CreateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.create(
      createGasStationBranchDto,
    );
    return gasStationBranch;
  }

  async getAllGasStationBranch(): Promise<GasStationBranch[]> {
    const companies = await this.gasStationBranchRepo.findAll({
      include: { all: true },
    });
    return companies;
  }

  async getGasStationBranchById(id: number): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.findOne({
      where: { id },
    });
    // const gasStationBranch = await this.gasStationBranchRepo.findByPk(id);
    return gasStationBranch;
  }

  async getGasStationBranchByName(
    branch_name: string,
  ): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.findOne({
      where: { branch_name },
    });
    return gasStationBranch;
  }

  async deleteGasStationBranchById(id: number): Promise<number> {
    return this.gasStationBranchRepo.destroy({ where: { id } });
  }

  async updateGasStationBranch(
    id: number,
    updateGasStationBranchDto: UpdateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    const gasStationBranch = await this.gasStationBranchRepo.update(
      updateGasStationBranchDto,
      {
        where: { id },
        returning: true,
      },
    );

    return gasStationBranch[1][0].dataValues;
  }
}
