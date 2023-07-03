import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsSectorIdValidConstraint } from './is-sector-id-valid.constraint';

export function IsSectorIdValid(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsSectorIdValidConstraint,
    });
  };
}
