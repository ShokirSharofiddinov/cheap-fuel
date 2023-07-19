import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { FuelTypesService } from './fuelTypes.service';
import { CreateFuelTypesDto } from './dto/create-fuelTypes.dto';
import { FuelTypes } from './models/fuelTypes.model';
import { UpdateFuelTypesDto } from './dto/update-fuelTypes.dto';

@Controller('fuelTypes')
export class FuelTypesController {
  constructor(private readonly fuelTypesService: FuelTypesService) {}

  @Post('create')
  async createFuelTypes(@Body() createFuelTypesDto: CreateFuelTypesDto) {
    const fuelTypes = await this.fuelTypesService.createFuelTypes(
      createFuelTypesDto,
    );
    return fuelTypes;
  }

  @Get('all')
  async getAllFuelTypes(): Promise<FuelTypes[]> {
    return this.fuelTypesService.getAllFuelTypes();
  }

  @Get(':id')
  async getFuelTypesById(@Param('id') id: string): Promise<FuelTypes> {
    return this.fuelTypesService.getFuelTypesById(+id);
  }

  // @Get(':name')
  // async getFuelTypesByName(@Param('name') name: string): Promise<FuelTypes> {
  //   return this.fuelTypesService.getFuelTypesById(name);
  // }

  @Delete(':id')
  async deleteFuelTypesById(@Param('id') id: string): Promise<number> {
    return this.fuelTypesService.deleteFuelTypesById(+id);
  }

  @Put(':id')
  async updateFuelTypes(
    @Param('id') id: string,
    @Body() updateFuelTypesDto: UpdateFuelTypesDto,
  ): Promise<FuelTypes> {
    return this.fuelTypesService.updateFuelTypes(+id, updateFuelTypesDto);
  }
}
