'use strict';

(function () {
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

  const getRandomWizard = function () {
    let generatedWizards = [];

    for (let i = 0; i < 4; i++) {
      let object = {
        name: `${window.util.getRandomItem(NAMES)} ${window.util.getRandomItem(SURNAMES)}`,
        coatColor: window.util.getRandomItem(window.util.coatColors),
        eyesColor: window.util.getRandomItem(window.util.eyesColors)
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

  const arrayRandomWizards = getRandomWizard();

  createWizards(arrayRandomWizards);
}());
