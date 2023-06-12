import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { RecibosService } from '../services/recibos.service';
import { CreateReciboDto } from '../dto/create-recibo.dto';
import { UpdateReciboDto } from '../dto/update-recibo.dto';
import { FindReciboDto } from '../dto/find-recibo-query.dto';
import { PaginationQueryDto } from '../dto/paginatio-query.dto';

@Controller('recibos')
export class RecibosController {
  constructor(private readonly recibosService: RecibosService) {}

  @Post()
  create(@Body() createReciboDto: CreateReciboDto) {
    return this.recibosService.create(createReciboDto);
  }

  @Get()
  findAll(@Query() query: FindReciboDto) {
    return this.recibosService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recibosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReciboDto: UpdateReciboDto) {
    return this.recibosService.update(+id, updateReciboDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recibosService.remove(+id);
  }
}
