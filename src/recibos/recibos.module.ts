import { Module } from '@nestjs/common';
import { RecibosService } from './services/recibos.service';
import { RecibosController } from './controllers/recibos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recibo } from './entities/recibo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Recibo])],
  controllers: [RecibosController],
  providers: [RecibosService],
})
export class RecibosModule {}
