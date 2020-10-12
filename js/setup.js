'use strict';

const NAMES = [
  `Иван`,
  `Хуан Себастьян`,
  `Мария`,
  `Кристоф`,
  `Виктор`,
  `Юлия`,
  `Люпита`,
  `Вашингтон`
];

const SURNAMES = [
  `да Марья`,
  `Верон`,
  `Мирабелла`,
  `Вальц`,
  `Онопко`,
  `Топольницкая`,
  `Нионго`,
  `Ирвинг`
];

const COAT_COLORS = [
  `rgb(101, 137, 164)`,
  `rgb(241, 43, 107)`,
  `rgb(146, 100, 161)`,
  `rgb(56, 159, 117)`,
  `rgb(215, 210, 55)`,
  `rgb(0, 0, 0)`
];

const EYES_COLORS = [
  `black`,
  `red`,
  `blue`,
  `yellow`,
  `green`,
];

const FIREBALL_COLOR = [
  `#ee4830`,
  `#30a8ee`,
  `#5ce6c0`,
  `#e848d5`,
  `#e6e848`
];

const MIN_LENGTH = 2;
const MAX_LENGTH = 25;

const userDialog = document.querySelector(`.setup`);
const userDialogOpen = document.querySelector(`.setup-open`);
const userDialogClose = userDialog.querySelector(`.setup-close`);
const userNameInput = userDialog.querySelector(`.setup-user-name`);

const wizardCoat = userDialog.querySelector(`.setup-wizard .wizard-coat`);
const wizardEyes = userDialog.querySelector(`.setup-wizard .wizard-eyes`);
const wizardFireball = userDialog.querySelector(`.setup-fireball-wrap`);

const getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomWizard = function () {
  let generatedWizards = [];

  for (let i = 0; i < 4; i++) {
    let object = {
      name: `${getRandomItem(NAMES)} ${getRandomItem(SURNAMES)}`,
      coatColor: getRandomItem(COAT_COLORS),
      eyesColor: getRandomItem(EYES_COLORS)
    };
    generatedWizards.push(object);
  }

  return generatedWizards;
};

const renderWizard = function (wizards) {
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.eyesColor;

  return wizardElement;
};

const createWizards = function (arr) {
  const similarListElement = document.querySelector(`.setup-similar-list`);

  const fragment = document.createDocumentFragment();
  for (let i = 0; i < arr.length; i++) {
    fragment.appendChild(renderWizard(arr[i]));
  }

  return similarListElement.appendChild(fragment);
};

// !Валидация

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

// !События

const setWizardCoat = function () {
  const wizardCoatInput = userDialog.querySelector(`input[name=coat-color]`);
  wizardCoat.style.fill = getRandomItem(COAT_COLORS);
  wizardCoatInput.value = wizardCoat.style.fill;
};

const setWizardEyes = function () {
  const wizardEyesInput = userDialog.querySelector(`input[name=eyes-color]`);
  wizardEyes.style.fill = getRandomItem(EYES_COLORS);
  wizardEyesInput.value = wizardEyes.style.fill;
};

const setWizardFireball = function () {
  const wizardFireballInput = userDialog.querySelector(`input[name=fireball-color`);
  const color = getRandomItem(FIREBALL_COLOR);
  wizardFireball.style.backgroundColor = color;
  wizardFireballInput.value = color;
};

const onPopupEscPress = function (evt) {
  if (evt.key === `Escape` && document.activeElement !== userNameInput) {
    evt.preventDefault();
    closePopup();
  }
};

const openPopup = function () {
  userDialog.classList.remove(`hidden`);

  document.addEventListener(`keydown`, onPopupEscPress);

  userNameInput.addEventListener(`input`, nameValidation);

  wizardCoat.addEventListener(`click`, setWizardCoat);

  wizardEyes.addEventListener(`click`, setWizardEyes);

  wizardFireball.addEventListener(`click`, setWizardFireball);
};

const closePopup = function () {
  userDialog.classList.add(`hidden`);

  document.removeEventListener(`keydown`, onPopupEscPress);

  userNameInput.removeEventListener(`input`, nameValidation);

  wizardCoat.removeEventListener(`click`, setWizardCoat);

  wizardEyes.removeEventListener(`click`, setWizardEyes);

  wizardFireball.removeEventListener(`click`, setWizardFireball);
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

const arrayRandomWizards = getRandomWizard();

createWizards(arrayRandomWizards);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
