import { PartialType } from '@nestjs/mapped-types';
import { CreateParroquiaDto } from './createParroquia.dto';

export class UpdateParroquiaDto extends PartialType(CreateParroquiaDto) {}
