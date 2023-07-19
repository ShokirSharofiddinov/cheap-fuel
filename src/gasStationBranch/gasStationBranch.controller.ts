import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GasStationBranchService } from './gasStationBranch.service';
import { CreateGasStationBranchDto } from './dto/create-gasStationBranch.dto';
import { GasStationBranch } from './models/gasStationBranch.model';
import { UpdateGasStationBranchDto } from './dto/update-gasStationBranch.dto';

@Controller('gasStationBranch')
export class GasStationBranchController {
  constructor(private readonly gasStationBranchService: GasStationBranchService) {}

  @Post('create')
  async createGasStationBranch(@Body() createGasStationBranchDto: CreateGasStationBranchDto) {
    const gasStationBranch = await this.gasStationBranchService.createGasStationBranch(
      createGasStationBranchDto,
    );
    return gasStationBranch;
  }

  @Get('all')
  async getAllGasStationBranch(): Promise<GasStationBranch[]> {
    return this.gasStationBranchService.getAllGasStationBranch();
  }

  @Get(':id')
  async getGasStationBranchById(@Param('id') id: string): Promise<GasStationBranch> {
    return this.gasStationBranchService.getGasStationBranchById(+id);
  }

  // @Get(':name')
  // async getGasStationBranchByName(@Param('name') name: string): Promise<GasStationBranch> {
  //   return this.gasStationBranchService.getGasStationBranchById(name);
  // }

  @Delete(':id')
  async deleteGasStationBranchById(@Param('id') id: string): Promise<number> {
    return this.gasStationBranchService.deleteGasStationBranchById(+id);
  }

  @Put(':id')
  async updateGasStationBranch(
    @Param('id') id: string,
    @Body() updateGasStationBranchDto: UpdateGasStationBranchDto,
  ): Promise<GasStationBranch> {
    return this.gasStationBranchService.updateGasStationBranch(+id, updateGasStationBranchDto);
  }
}
