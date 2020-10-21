'use strict';

(function () {
  const MIN_LENGTH = 2;
  const MAX_LENGTH = 25;

  const userNameInput = window.util.userNameInput;

  const nameValidation = function () {
    const valueLength = userNameInput.value.length;

    if (valueLength < MIN_LENGTH) {
      userNameInput.setCustomValidity(`Ещё ${MIN_LENGTH - valueLength} симв.`);
    } else if (valueLength > MAX_LENGTH) {
      userNameInput.setCustomValidity(`Удалите лишние ${valueLength - MAX_LENGTH} симв.`);
    } else {
      userNameInput.setCustomValidity(``);
    }

    userNameInput.reportValidity();
  };

  window.validation = {
    nameValidation
  };
}());
