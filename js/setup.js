'use strict';

(function () {
  const COORDS_X = 80;
  const COORDS_Y = `${50}%`;

  const userDialog = window.util.userDialog;
  const userDialogOpen = document.querySelector(`.setup-open`);
  const userDialogClose = userDialog.querySelector(`.setup-close`);
  const userNameInput = window.util.userNameInput;

  const wizardCoat = window.util.wizardCoat;
  const wizardEyes = window.util.wizardEyes;
  const wizardFireball = window.util.wizardFireball;
  const dialogHandle = window.util.dialogHandle;

  const setupSimilar = userDialog.querySelector(`.setup-similar`);

  const onPopupEscPress = function (evt) {
    if (evt.key === `Escape` && document.activeElement !== userNameInput) {
      evt.preventDefault();
      closePopup();
    }
  };

  const openPopup = function () {
    userDialog.classList.remove(`hidden`);
    setupSimilar.classList.remove(`hidden`);

    document.addEventListener(`keydown`, onPopupEscPress);

    userNameInput.addEventListener(`input`, window.validation.nameValidation);

    wizardCoat.addEventListener(`click`, window.customWizard.setWizardCoat);

    wizardEyes.addEventListener(`click`, window.customWizard.setWizardEyes);

    wizardFireball.addEventListener(`click`, window.customWizard.setWizardFireball);

    dialogHandle.addEventListener(`mousedown`, window.movePopup.dialogHandleMove);

    window.util.form.addEventListener(`submit`, window.customWizard.customWizardSave, window.backend.errorServerFragment);
  };

  const closePopup = function () {
    userDialog.classList.add(`hidden`);
    setupSimilar.classList.add(`hidden`);

    userDialog.style = `left: "${COORDS_X}";top: "${COORDS_Y}"`;

    document.removeEventListener(`keydown`, onPopupEscPress);

    userNameInput.removeEventListener(`input`, window.validation.nameValidation);

    wizardCoat.removeEventListener(`click`, window.customWizard.setWizardCoat);

    wizardEyes.removeEventListener(`click`, window.customWizard.setWizardEyes);

    wizardFireball.removeEventListener(`click`, window.customWizard.setWizardFireball);

    dialogHandle.removeEventListener(`mousedown`, window.movePopup.dialogHandleMove);

    window.util.form.removeEventListener(`submit`, window.customWizard.customWizardSave, window.backend.errorServerFragment);
  };

  userDialogOpen.addEventListener(`click`, function () {
    openPopup();
  });

  userDialogOpen.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      openPopup();
    }
  });

  userDialogClose.addEventListener(`click`, function () {
    closePopup();
  });

  userDialogClose.addEventListener(`keydown`, function (evt) {
    if (evt.key === `Enter`) {
      closePopup();
    }
  });
}());
