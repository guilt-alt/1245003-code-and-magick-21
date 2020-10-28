'use strict';

(function () {
  const WIZARDS_MAX_COUNT = 4;

  const renderWizard = function (wizards) {
    const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);

    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizards.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizards.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizards.eyesColor;

    return wizardElement;
  };

  const createWizards = function (arr) {
    const similarListElement = document.querySelector(`.setup-similar-list`);

    const fragment = document.createDocumentFragment();
    for (let i = 0; i < WIZARDS_MAX_COUNT; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }

    return similarListElement.appendChild(fragment);
  };

  window.backend.load(createWizards, window.backend.errorServerFragment);
}());
