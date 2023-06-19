import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { User } from 'src/users/entities/user.entity';

import { UsersService } from 'src/users/services/users.service';
import { AuthPayload } from '../interfaces/auth.interface';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
  public async validateUser(username: string, password: string) {
    const user = await this.userService.findBy({
      key: 'usuario',
      value: username,
    });

    if (user) {
      const match = await bcrypt.compare(password, user.contrasena);
      if (match) return user;
    }
    return null;
  }
  public async signJWT({
    payload,
    secret,
    expires,
  }: {
    payload: jwt.JwtPayload;
    secret: string;
    expires: number | string;
  }) {
    return jwt.sign(payload, secret, { expiresIn: expires });
  }

  public async generateJWT(user: User) {
    const getUser = await this.userService.findOne(user.id);

    const payload: AuthPayload = {
      role: getUser.rol,
      sub: String(getUser.id),
    };

    return {
      accessToken: await this.signJWT({
        payload,
        secret: process.env.JWT_SECRET,
        expires: '4h',
      }),
      user,
    };
  }
}
