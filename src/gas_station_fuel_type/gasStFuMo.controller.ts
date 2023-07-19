import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GasStFuMoService } from './gasStFuMo.service';
import { CreateGasStFuMoDto } from './dto/create-gasStFuMo.dto';
import { GasStFuMo } from './models/gasStFuMo.model';
import { UpdateGasStFuMoDto } from './dto/update-gasStFuMo.dto';

@Controller('gasStFuMo')
export class GasStFuMoController {
  constructor(private readonly gasStFuMoService: GasStFuMoService) {}

  @Post('create')
  async createGasStFuMo(@Body() createGasStFuMoDto: CreateGasStFuMoDto) {
    const gasStFuMo = await this.gasStFuMoService.createGasStFuMo(
      createGasStFuMoDto,
    );
    return gasStFuMo;
  }

  @Get('all')
  async getAllGasStFuMo(): Promise<GasStFuMo[]> {
    return this.gasStFuMoService.getAllGasStFuMo();
  }

  @Get(':id')
  async getGasStFuMoById(@Param('id') id: string): Promise<GasStFuMo> {
    return this.gasStFuMoService.getGasStFuMoById(+id);
  }

  @Delete(':id')
  async deleteGasStFuMoById(@Param('id') id: string): Promise<number> {
    return this.gasStFuMoService.deleteGasStFuMoById(+id);
  }

  @Put(':id')
  async updateGasStFuMo(
    @Param('id') id: string,
    @Body() updateGasStFuMoDto: UpdateGasStFuMoDto,
  ): Promise<GasStFuMo> {
    return this.gasStFuMoService.updateGasStFuMo(+id, updateGasStFuMoDto);
  }
}
