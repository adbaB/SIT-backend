import { Global, Module, Logger } from '@nestjs/common';
import { ErrorHandlerService } from './services/handlerError.service';

@Global()
@Module({
  imports: [],
  providers: [ErrorHandlerService, Logger],
  exports: [ErrorHandlerService],
})
export class CommonModule {}
