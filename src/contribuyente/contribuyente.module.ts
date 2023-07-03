import { Module } from '@nestjs/common';
import { ContribuyenteService } from './services/contribuyente.service';
import { ContribuyenteController } from './controllers/contribuyente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contribuyente } from './entities/contribuyente.entity';
import { Parroquia } from 'src/common/entities/parroquia.entity';
import { Sector } from 'src/common/entities/sector.entity';
import { CommonModule } from 'src/common/common.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Contribuyente, Parroquia, Sector]),
    CommonModule,
  ],
  controllers: [ContribuyenteController],
  providers: [ContribuyenteService],
})
export class ContribuyenteModule {}
