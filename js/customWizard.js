'use strict';

(function () {
  const FIREBALL_COLOR = [
    `#ee4830`,
    `#30a8ee`,
    `#5ce6c0`,
    `#e848d5`,
    `#e6e848`
  ];

  const userDialog = window.util.userDialog;
  const wizardCoat = window.util.wizardCoat;
  const wizardEyes = window.util.wizardEyes;
  const wizardFireball = window.util.wizardFireball;

  const setWizardCoat = function () {
    const wizardCoatInput = userDialog.querySelector(`input[name=coat-color]`);
    wizardCoat.style.fill = window.util.getRandomItem(window.util.coatColors);
    wizardCoatInput.value = wizardCoat.style.fill;
    return;
  };

  const setWizardEyes = function () {
    const wizardEyesInput = userDialog.querySelector(`input[name=eyes-color]`);
    wizardEyes.style.fill = window.util.getRandomItem(window.util.eyesColors);
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

  window.customWizard = {
    setWizardCoat,
    setWizardEyes,
    setWizardFireball
  };
}());
