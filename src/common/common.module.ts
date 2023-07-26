import { Global, Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contribuyente } from 'src/contribuyente/entities/contribuyente.entity';
import { Parroquia } from './entities/parroquia.entity';
import { Sector } from './entities/sector.entity';
import { ErrorHandlerService } from './services/handlerError.service';
import { ParroquiaController } from './controllers/parroquia.controller';
import { ParroquiaService } from './services';
import { SectorController } from './controllers/sector.controller';
import { SectorService } from './services/sector.service';
import { IsParroquiaIdValidConstraint } from 'src/common/validations/is-parroquia-id-valid.constraint';
import { IsSectorIdValidConstraint } from './validations/is-sector-id-valid.constraint';
import { PublicImageController } from './controllers/public-image.controller';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Sector, Parroquia, Contribuyente])],
  providers: [
    ErrorHandlerService,
    Logger,
    ParroquiaService,
    SectorService,
    IsParroquiaIdValidConstraint,
    IsSectorIdValidConstraint,
  ],
  controllers: [ParroquiaController, SectorController, PublicImageController],
  exports: [
    ErrorHandlerService,
    IsParroquiaIdValidConstraint,
    IsSectorIdValidConstraint,
    SectorService,
    ParroquiaService,
  ],
})
export class CommonModule {}
