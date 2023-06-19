import { Controller, Post, Body } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { loginDto } from '../dto/auth-body.dto';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('login')
  async login(@Body() userData: loginDto) {
    const userValidate = await this.authService.validateUser(
      userData.username,
      userData.password,
    );
    if (!userValidate) {
      throw new UnauthorizedException('Data not Valid');
    }
    const jwt = await this.authService.generateJWT(userValidate);

    return jwt;
  }
}
