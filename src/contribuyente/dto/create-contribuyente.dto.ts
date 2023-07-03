import {
  IsAlphanumeric,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { Parroquia } from 'src/common/entities/parroquia.entity';
import { Sector } from 'src/common/entities/sector.entity';
import { IsSectorIdValid } from 'src/common/validations/is-sector-id-valid';
import { IsParroquiaIdValid } from '../../common/validations/is-parroquia-id-valid';
import { Estado, TypeContribuyente } from '../entities/contribuyente.entity';

export class CreateContribuyenteDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  numeroIdentificacion: string;
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsEnum(TypeContribuyente)
  typeContribuyente: TypeContribuyente;
  @IsNotEmpty()
  direccion: string;
  @IsNotEmpty()
  @IsUUID('all')
  @IsParroquiaIdValid()
  parroquia: Parroquia;
  @IsNotEmpty()
  @IsUUID('all')
  @IsSectorIdValid()
  sector: Sector;
  @IsNotEmpty()
  telefono: string;
  @IsNotEmpty()
  @IsEmail()
  correo: string;
  @IsOptional()
  @IsEnum(Estado)
  estado: Estado;
}
