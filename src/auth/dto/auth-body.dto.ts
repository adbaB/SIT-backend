import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class loginDto {
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;
}
