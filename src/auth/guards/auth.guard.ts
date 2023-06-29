import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { PUBLIC_KEY } from 'src/common/constants';
import { UsersService } from 'src/users/services/users.service';
import { UnauthorizedException } from '@nestjs/common/exceptions';
import { IUseToken } from '../interfaces/auth.interface';
import { useToken } from 'src/common/functions';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly userService: UsersService,
    private readonly reflector: Reflector,
  ) {}
  async canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.get<boolean>(
      PUBLIC_KEY,
      context.getHandler(),
    );
    if (isPublic) return true;

    const req = context.switchToHttp().getRequest<Request>();
    const token = req.headers['sit-token'];

    if (!token || Array.isArray(token))
      throw new UnauthorizedException('token invalid');

    const manageToken: IUseToken | string = useToken(token);
    if (typeof manageToken === 'string')
      throw new UnauthorizedException(`${manageToken} is token invalid`);

    if (manageToken.isExpired) throw new UnauthorizedException('token expired');
    const { sub } = manageToken;
    const user = await this.userService.findOne(Number(sub));

    if (!user || !user.estado) throw new UnauthorizedException('invalid user');

    req.idUser = String(user.id);
    req.roleUser = user.rol;
    return true;
  }
}
