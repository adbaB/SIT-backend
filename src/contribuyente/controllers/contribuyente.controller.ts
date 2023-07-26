import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  Query,
} from '@nestjs/common';
import { Response } from 'express';
import { ContribuyenteService } from '../services/contribuyente.service';
import { CreateContribuyenteDto } from '../dto/create-contribuyente.dto';
import { UpdateContribuyenteDto } from '../dto/update-contribuyente.dto';
import { ReportService } from 'src/report/services/reports.service';
import * as moment from 'moment';
import { Estado } from '../entities/contribuyente.entity';
import {
  DefaultValuePipe,
  ParseEnumPipe,
  ParseIntPipe,
} from '@nestjs/common/pipes';
import { FindEstado } from '../enum/findEstado';

@Controller('contribuyente')
export class ContribuyenteController {
  constructor(
    private readonly contribuyenteService: ContribuyenteService,
    private readonly reportsService: ReportService,
  ) {}

  @Post()
  create(@Body() createContribuyenteDto: CreateContribuyenteDto) {
    return this.contribuyenteService.create(createContribuyenteDto);
  }

  @Get()
  findAll(
    @Query(
      'estado',
      new DefaultValuePipe(FindEstado.All),
      new ParseEnumPipe(FindEstado),
    )
    estado?: Estado,
    @Query('limit', new DefaultValuePipe(50), ParseIntPipe) limit?: number,
    @Query('page', new DefaultValuePipe(0), ParseIntPipe) page?: number,
  ) {
    return this.contribuyenteService.findAll(estado, page, limit);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contribuyenteService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContribuyenteDto: UpdateContribuyenteDto,
  ) {
    return this.contribuyenteService.update(+id, updateContribuyenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contribuyenteService.remove(+id);
  }

  @Get('report/certificado-inscripcion')
  async getPdfDashboard(
    @Res({ passthrough: true }) res: Response,
    @Query('id') id: string,
  ) {
    const data = await this.contribuyenteService.findOne(+id);
    const html = await this.reportsService.renderTemplate(
      'certificado-inscripcion',
      {
        ruc: data.ruc,
        cedula: data.numeroIdentificacion,
        nombre: data.nombre,
        direccion: data.direccion,
        typeContribuyente: data.typeContribuyente,
        fecha: moment(data.createAt).format('DD/MM/YYYY'),
      },
    );
    const pdf = await this.reportsService.createPdf(html, {
      landscape: true,
      printBackground: true,
    });
    res.contentType('application/pdf');
    res.send(pdf);
  }
}
