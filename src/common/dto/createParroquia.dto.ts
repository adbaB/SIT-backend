import { IsBoolean, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateParroquiaDto {
  @IsNotEmpty()
  descripcion: string;
  @IsBoolean()
  @IsOptional()
  estado: boolean;
}
