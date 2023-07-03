import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSectorDto } from '../dto/create-sector.dto';
import { UpdateSectorDto } from '../dto/update-sector.dto';
import { Sector } from '../entities/sector.entity';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(Sector) private readonly sectorRepo: Repository<Sector>,
  ) {}

  create(createSectorDto: CreateSectorDto) {
    return this.sectorRepo.save(createSectorDto);
  }
  findAll() {
    return this.sectorRepo.find();
  }

  findOne(id: string) {
    return this.sectorRepo.findOne({ where: { id } });
  }

  update(id: string, updateSectorDto: UpdateSectorDto) {
    return this.sectorRepo.update(id, updateSectorDto);
  }

  remove(id: string) {
    return `This action removes a #${id} contribuyente`;
  }
}
