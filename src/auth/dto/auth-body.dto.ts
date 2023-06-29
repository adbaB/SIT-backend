import { IsAlphanumeric, IsNotEmpty } from 'class-validator';
import { AuthBody } from '../interfaces/auth.interface';

export class loginDto implements AuthBody {
  @IsAlphanumeric()
  @IsNotEmpty()
  username: string;
  @IsAlphanumeric()
  @IsNotEmpty()
  password: string;
}
