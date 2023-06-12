import { Inject } from '@nestjs/common';
import { ErrorHandlerService } from '../services/handlerError.service';
export function ErrorHandler() {
  const injectErrorHandlerService = Inject(ErrorHandlerService);
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    injectErrorHandlerService(target, 'errorHandlerService');
    const orinalMethod = propertyDescriptor.value;
    propertyDescriptor.value = async function (...arg: any[]) {
      try {
        return await orinalMethod.apply(this, arg);
      } catch (error: unknown) {
        if (error instanceof Error) {
          const errorHandlerService: ErrorHandlerService =
            this.errorHandlerService;
          errorHandlerService.handlerError(error);
        }
        throw error;
      }
    };
    return propertyDescriptor;
  };
}
