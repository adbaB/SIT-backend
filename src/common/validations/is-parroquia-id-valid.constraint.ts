import { Injectable } from '@nestjs/common';
import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { ParroquiaService } from 'src/common/services';

@ValidatorConstraint({
  async: true,
})
@Injectable()
export class IsParroquiaIdValidConstraint
  implements ValidatorConstraintInterface
{
  constructor(private parroquiaService: ParroquiaService) {}
  async validate(value: string): Promise<boolean> {
    const parroquia = await this.parroquiaService.findOne(value);
    return Boolean(parroquia);
  }
  defaultMessage?(): string {
    return 'Id Parroquia is not valid';
  }
}
