import {
  IsString,
  IsNotEmpty,
  IsAlphanumeric,
  IsBoolean,
} from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;
  @IsNotEmpty()
  @IsString()
  apellido: string;
  @IsNotEmpty()
  @IsAlphanumeric()
  cedula: string;
  @IsNotEmpty()
  @IsAlphanumeric()
  usuario: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  contrasena: string;
  @IsNotEmpty()
  @IsAlphanumeric()
  rol: string;
  @IsBoolean()
  estado: boolean;
}
