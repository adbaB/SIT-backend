import { SetMetadata } from '@nestjs/common';
import { PUBLIC_KEY } from 'src/common/constants';
export function PublicAccess() {
  return SetMetadata(PUBLIC_KEY, true);
}
