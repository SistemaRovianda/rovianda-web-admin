import { AbstractControl, ValidatorFn } from '@angular/forms';

export const ALPHA_WITH_SPACE_REGEX = /^[a-zA-ZÀ-ž\s]+$/;

export const alphaWithSpaceValidator: ValidatorFn = ({
  value,
}: AbstractControl) => {
  if (!value) return null;

  return ALPHA_WITH_SPACE_REGEX.test(value) ? null : { alphaWithSpace: true };
};
