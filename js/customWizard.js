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

  const FIREBALL_COLOR = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  const userDialog = window.util.userDialog;
  const form = window.util.form;
  const wizardCoat = window.util.wizardCoat;
  const wizardEyes = window.util.wizardEyes;
  const wizardFireball = window.util.wizardFireball;

  const setWizardCoat = function () {
    const wizardCoatInput = userDialog.querySelector(`input[name=coat-color]`);
    wizardCoat.style.fill = window.util.getRandomItem(COAT_COLORS);
    wizardCoatInput.value = wizardCoat.style.fill;
    return;
  };

  const setWizardEyes = function () {
    const wizardEyesInput = userDialog.querySelector(`input[name=eyes-color]`);
    wizardEyes.style.fill = window.util.getRandomItem(EYES_COLORS);
    wizardEyesInput.value = wizardEyes.style.fill;
    return;
  };

  const setWizardFireball = function () {
    const wizardFireballInput = userDialog.querySelector(`input[name=fireball-color`);
    const color = window.util.getRandomItem(FIREBALL_COLOR);
    wizardFireball.style.backgroundColor = color;
    wizardFireballInput.value = color;
    return;
  };

  const customWizardSave = function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add(`hidden`);
    });
    evt.preventDefault();
  };

  window.customWizard = {
    setWizardCoat,
    setWizardEyes,
    setWizardFireball,
    customWizardSave
  };
}());
