import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateSectorDto } from '../dto/create-sector.dto';
import { UpdateSectorDto } from '../dto/update-sector.dto';
import { SectorService } from '../services/sector.service';

@Controller('sector')
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}
  @Post()
  create(@Body() createSectorDto: CreateSectorDto) {
    return this.sectorService.create(createSectorDto);
  }
  @Get()
  findAll() {
    return this.sectorService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sectorService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSectorDto: UpdateSectorDto) {
    return this.sectorService.update(id, updateSectorDto);
  }
}
