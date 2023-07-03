import { registerDecorator, ValidationOptions } from 'class-validator';

import { IsParroquiaIdValidConstraint } from './is-parroquia-id-valid.constraint';

export function IsParroquiaIdValid(validationOptions?: ValidationOptions) {
  return function (object: unknown, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      validator: IsParroquiaIdValidConstraint,
    });
  };
}
