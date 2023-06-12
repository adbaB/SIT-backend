import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ErrorHandlerService {
  constructor(private readonly logger: Logger) {}
  handlerError(error: Error) {
    this.logger.error(`Error: ${error.message}`);
  }
}
