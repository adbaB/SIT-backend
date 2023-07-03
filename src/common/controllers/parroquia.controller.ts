import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateParroquiaDto } from '../dto/createParroquia.dto';
import { UpdateParroquiaDto } from '../dto/update-parroquia.dto';
import { ParroquiaService } from '../services';

@Controller('parroquia')
export class ParroquiaController {
  constructor(private readonly parroquiaService: ParroquiaService) {}
  @Post()
  create(@Body() createParroquiaDto: CreateParroquiaDto) {
    return this.parroquiaService.create(createParroquiaDto);
  }
  @Get()
  findAll() {
    return this.parroquiaService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parroquiaService.findOne(id);
  }
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateParroquiaDto: UpdateParroquiaDto,
  ) {
    return this.parroquiaService.update(id, updateParroquiaDto);
  }
}
