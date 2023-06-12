import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { formatResponse, getSkip } from 'src/common/functions/';
import { Repository, Not, IsNull, Between, MoreThan, LessThan } from 'typeorm';
import { CreateReciboDto } from '../dto/create-recibo.dto';
import { FindReciboDto } from '../dto/find-recibo-query.dto';
import { PaginationQueryDto } from '../dto/paginatio-query.dto';
import { UpdateReciboDto } from '../dto/update-recibo.dto';
import { Recibo } from '../entities/recibo.entity';

@Injectable()
export class RecibosService {
  constructor(
    @InjectRepository(Recibo) private reciboRepo: Repository<Recibo>,
  ) {}
  create(createReciboDto: CreateReciboDto) {
    return 'This action adds a new recibo';
  }

  async findAll({
    Ispagado,
    fechaFinal,
    fechaInicio,
    limit = 10,
    page = 0,
  }: FindReciboDto) {
    const skip = getSkip(limit, page);
    let where = {};
    if (Ispagado) {
      where = { cajero: Not(IsNull()), ...where };
    }
    if (fechaFinal && fechaInicio) {
      where = { fecha: Between(fechaInicio, fechaFinal), ...where };
    }
    if (fechaInicio && !fechaFinal) {
      where = { fecha: MoreThan(fechaInicio), ...where };
    }
    if (!fechaInicio && fechaFinal) {
      where = { fecha: LessThan(fechaFinal) };
    }
    const data = await this.reciboRepo.findAndCount({
      where,
      take: limit,
      skip,
      order: {
        fecha: 'ASC',
      },
    });
    if (!data) {
      throw new NotFoundException(`no se encontraron baremos disponibles `);
    }
    const result = formatResponse(data[0], page, limit, data[1]);
    return result;
  }

  findOne(id: number) {
    return `This action returns a #${id} recibo`;
  }

  update(id: number, updateReciboDto: UpdateReciboDto) {
    return `This action updates a #${id} recibo`;
  }

  remove(id: number) {
    return `This action removes a #${id} recibo`;
  }
}
