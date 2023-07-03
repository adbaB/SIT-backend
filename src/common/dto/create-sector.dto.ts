import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';

export class CreateSectorDto {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  idZona: number;
  @IsNotEmpty()
  @IsString()
  descripcion: string;
  @IsNumber()
  @IsNotEmpty()
  zonaCatastral: number;
  @IsOptional()
  @IsBoolean()
  estado: boolean;
}
