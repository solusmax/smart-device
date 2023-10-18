import { isValidPhoneNumber } from 'libphonenumber-js';
import { isStringEmpty } from './util';

const PHONE_VALIDATION_ERROR_MESSAGE = 'Вы ввели некорректный номер телефона.';
const ERROR_OUTLINE_STYLE = '3px solid #ff2200';

const writeUsPhoneFields = document.querySelectorAll(
  '.write-us__phone > input',
);

const reportValidationError = (field, string, style) => {
  field.style.outline = style;
  field.setCustomValidity(string);
  field.reportValidity();
};

const reportNoValidationError = (field) => reportValidationError(field, '', '');

export const setWriteUsListeners = () => {
  writeUsPhoneFields.forEach((phoneFieldNode) => {
    phoneFieldNode.addEventListener('input', () => {
      const phoneNumber = String(phoneFieldNode.value);

      if (isStringEmpty(phoneNumber)) {
        if (phoneFieldNode.validity.customError) {
          reportNoValidationError(phoneFieldNode);
        }
        return;
      }

      if (!isValidPhoneNumber(phoneNumber)) {
        reportValidationError(
          phoneFieldNode,
          PHONE_VALIDATION_ERROR_MESSAGE,
          ERROR_OUTLINE_STYLE,
        );
        return;
      }

      reportNoValidationError(phoneFieldNode);
    });
  });
};
