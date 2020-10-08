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

const getRandomItem = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

const getRandomWizard = function () {
  let object = {};
  let generatedWizards = [];

  for (let i = 0; i < 4; i++) {
    object = {
      name: getRandomItem(NAMES) + ` ` + getRandomItem(SURNAMES),
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

const userDialog = document.querySelector(`.setup`);

userDialog.classList.remove(`hidden`);

const arrayRandomWizards = getRandomWizard();

createWizards(arrayRandomWizards);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
