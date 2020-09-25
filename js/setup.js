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

let generatedWizards = [];

const userDialog = document.querySelector(`.setup`);

userDialog.classList.remove(`hidden`);

const similarListElement = document.querySelector(`.setup-similar-list`);

const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
  .content
  .querySelector(`.setup-similar-item`);

const getRandomIndex = function (arr) {
  return Math.floor(Math.random() * arr.length);
};

const getRandomWizard = function () {
  let object = {
    name: NAMES[getRandomIndex(NAMES)] + ` ` + SURNAMES[getRandomIndex(SURNAMES)],
    coatColor: COAT_COLORS[getRandomIndex(COAT_COLORS)],
    eyesColor: EYES_COLORS[getRandomIndex(EYES_COLORS)]
  };

  return object;
};

for (let i = 0; i < 4; i++) {
  generatedWizards.push(getRandomWizard());
}

const renderWizard = function (wizards) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizards.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.eyesColor;

  return wizardElement;
};

const fragment = document.createDocumentFragment();
for (let i = 0; i < generatedWizards.length; i++) {
  fragment.appendChild(renderWizard(generatedWizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
