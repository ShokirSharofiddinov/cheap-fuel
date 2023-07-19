import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { GasStationService } from './gasStation.service';
import { CreateGasStationDto } from './dto/create-gasStation.dto';
import { GasStation } from './models/gasStation.model';
import { UpdateGasStationDto } from './dto/update-gasStation.dto';

@Controller('gasStation')
export class GasStationController {
  constructor(private readonly gasStationService: GasStationService) {}

  @Post('create')
  async createGasStation(@Body() createGasStationDto: CreateGasStationDto) {
    const gasStation = await this.gasStationService.createGasStation(createGasStationDto);
    return gasStation;
  }

  @Get('all')
  async getAllGasStation(): Promise<GasStation[]> {
    return this.gasStationService.getAllGasStation();
  }

  @Get(':id')
  async getGasStationById(@Param('id') id: string): Promise<GasStation> {
    return this.gasStationService.getGasStationById(+id);
  }

  // @Get(':name')
  // async getGasStationByName(@Param('name') name: string): Promise<GasStation> {
  //   return this.gasStationService.getGasStationById(name);
  // }

  @Delete(':id')
  async deleteGasStationById(@Param('id') id: string): Promise<number> {
    return this.gasStationService.deleteGasStationById(+id);
  }

  @Put(':id')
  async updateGasStation(
    @Param('id') id: string,
    @Body() updateGasStationDto: UpdateGasStationDto,
  ): Promise<GasStation> {
    return this.gasStationService.updateGasStation(+id, updateGasStationDto);
  }
}
