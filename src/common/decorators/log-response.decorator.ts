import { Logger, Inject } from '@nestjs/common';
export function LogResponse() {
  const injectLogger = Inject(Logger);
  return (
    target: any,
    propertyKey: string,
    propertyDescriptor: PropertyDescriptor,
  ) => {
    injectLogger(target, 'logger');
    const orinalMethod = propertyDescriptor.value;
    propertyDescriptor.value = async function (...arg: any[]) {
      const value = await orinalMethod.apply(this, arg);
      const logger: Logger = this.logger;
      logger.log(`${propertyKey}: ${value}`);
      return value;
    };
    return propertyDescriptor;
  };
}
