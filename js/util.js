'use strict';

(function () {
  const EYES_COLORS = [
    `black`,
    `red`,
    `blue`,
    `yellow`,
    `green`,
  ];

  const COAT_COLORS = [
    `rgb(101, 137, 164)`,
    `rgb(241, 43, 107)`,
    `rgb(146, 100, 161)`,
    `rgb(56, 159, 117)`,
    `rgb(215, 210, 55)`,
    `rgb(0, 0, 0)`
  ];

  const userDialog = document.querySelector(`.setup`);
  const wizardCoat = userDialog.querySelector(`.setup-wizard .wizard-coat`);
  const wizardEyes = userDialog.querySelector(`.setup-wizard .wizard-eyes`);
  const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);
  const userNameInput = userDialog.querySelector(`.setup-user-name`);
  const dialogHandle = userDialog.querySelector(`.upload`);

  const getRandomItem = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

  window.util = {
    eyesColors: EYES_COLORS,
    coatColors: COAT_COLORS,
    userDialog,
    wizardCoat,
    wizardEyes,
    wizardFireball,
    userNameInput,
    dialogHandle,
    getRandomItem
  };
}());
