import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateParroquiaDto } from '../dto/createParroquia.dto';
import { UpdateParroquiaDto } from '../dto/update-parroquia.dto';
import { Parroquia } from '../entities/parroquia.entity';

@Injectable()
export class ParroquiaService {
  constructor(
    @InjectRepository(Parroquia)
    private readonly parroquiaRepo: Repository<Parroquia>,
  ) {}
  currentRUC: string;

  create(createParroquiaDto: CreateParroquiaDto) {
    console.log(createParroquiaDto);
    return this.parroquiaRepo.save(createParroquiaDto);
  }

  findAll() {
    return this.parroquiaRepo.find();
  }

  findOne(id: string) {
    console.log(id);
    return this.parroquiaRepo.findOne({ where: { id } });
  }

  update(id: string, updateParroquiaDto: UpdateParroquiaDto) {
    return this.parroquiaRepo.update(id, updateParroquiaDto);
  }

  remove(id: string) {
    return `This action removes a #${id} contribuyente`;
  }
}
