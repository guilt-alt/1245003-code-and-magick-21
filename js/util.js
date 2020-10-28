'use strict';

(function () {
  const userDialog = document.querySelector(`.setup`);
  const form = userDialog.querySelector(`form`);
  const wizardCoat = userDialog.querySelector(`.setup-wizard .wizard-coat`);
  const wizardEyes = userDialog.querySelector(`.setup-wizard .wizard-eyes`);
  const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);
  const userNameInput = userDialog.querySelector(`.setup-user-name`);
  const dialogHandle = userDialog.querySelector(`.upload`);

  const getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    userDialog,
    form,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    userNameInput,
    dialogHandle,
    getRandomItem
  };
}());
