import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import * as moment from 'moment';

import { CreateContribuyenteDto } from '../dto/create-contribuyente.dto';
import { UpdateContribuyenteDto } from '../dto/update-contribuyente.dto';
import { Contribuyente, Estado } from '../entities/contribuyente.entity';
import { formatResponse, getSkip } from 'src/common/functions';
import { FindEstado } from '../enum/findEstado';

@Injectable()
export class ContribuyenteService {
  constructor(
    @InjectRepository(Contribuyente)
    private readonly contribuyenteRepo: Repository<Contribuyente>,
  ) {
    this.setCurrentRUC();
  }
  currentRUC: string;

  async create(createContribuyenteDto: CreateContribuyenteDto) {
    console.log(createContribuyenteDto);

    const objContribuyente = {
      ...createContribuyenteDto,
      ruc: this.currentRUC,
    };
    const response = await this.contribuyenteRepo.save(objContribuyente);
    console.log(response);
    if (!response.id) {
      throw new BadRequestException('Error en cargar el contribuyente');
    }
    await this.setCurrentRUC();
    return response;
  }
  async findAll(estado: FindEstado, page: number, limit: number) {
    const data: FindManyOptions<Contribuyente> = {};

    data.relations = { parroquia: true, sector: true };
    data.skip = getSkip(limit, page);
    data.take = limit;
    data.where = estado === FindEstado.All ? {} : { estado };
    const [contribuyentes, count] = await this.contribuyenteRepo.findAndCount(
      data,
    );
    const response = formatResponse(contribuyentes, page, limit, count);
    return response;
  }

  async findOne(id: number) {
    const contribuyente = await this.contribuyenteRepo.findOne({
      where: { id },
      relations: {
        parroquia: true,
        sector: true,
      },
    });
    if (!contribuyente) {
      throw new NotFoundException('Contribuyente no encontrado');
    }
    return contribuyente;
  }

  update(id: number, updateContribuyenteDto: UpdateContribuyenteDto) {
    return this.contribuyenteRepo.update(id, updateContribuyenteDto);
  }

  remove(id: number) {
    return `This action removes a #${id} contribuyente`;
  }

  async setCurrentRUC(): Promise<void> {
    let ruc: number | string;
    const currentDate = moment(new Date()).format('YYYYMM');
    const result = await this.contribuyenteRepo
      .createQueryBuilder()
      .select('MAX(SUBSTRING(ruc, 7))', 'max')
      .where('ruc LIKE :moment ', { moment: `%${currentDate}%` })
      .getRawOne();
    if (!result) {
      ruc = 0;
    } else {
      ruc = parseInt(result.max, 10);
    }
    ruc++;
    ruc = ruc.toString().padStart(5, '0');
    ruc = `${currentDate}${ruc}`;
    console.log(ruc);
    this.currentRUC = ruc;
  }
}
