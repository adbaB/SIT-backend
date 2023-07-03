import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as moment from 'moment';

import { CreateContribuyenteDto } from '../dto/create-contribuyente.dto';
import { UpdateContribuyenteDto } from '../dto/update-contribuyente.dto';
import { Contribuyente } from '../entities/contribuyente.entity';

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

  findAll() {
    return `This action returns all contribuyente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contribuyente`;
  }

  update(id: number, updateContribuyenteDto: UpdateContribuyenteDto) {
    return `This action updates a #${id} contribuyente`;
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
