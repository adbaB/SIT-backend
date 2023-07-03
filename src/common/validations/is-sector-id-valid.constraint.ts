import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { SectorService } from '../services';

@ValidatorConstraint({
  async: true,
})
@Injectable()
export class IsSectorIdValidConstraint implements ValidatorConstraintInterface {
  constructor(private readonly sectorService: SectorService) {}
  async validate(value: string): Promise<boolean> {
    const sector = await this.sectorService.findOne(value);
    return Boolean(sector);
  }
  defaultMessage(): string {
    return 'Id Sector is not valid';
  }
}
