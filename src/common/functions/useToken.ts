import { AuthTokenResult, IUseToken } from 'src/auth/interfaces/auth.interface';
import * as jwt from 'jsonwebtoken';
export function useToken(token: string): IUseToken | string {
  try {
    const decode = jwt.decode(token) as AuthTokenResult;
    const currentDate = new Date();
    const expireDate = new Date(decode.exp);
    return {
      role: decode.role,
      sub: decode.sub,
      isExpired: +expireDate <= +currentDate / 1000 ? true : false,
    };
  } catch (error) {
    return 'token not invalid';
  }
}
