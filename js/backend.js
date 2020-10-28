'use strict';

(function () {
  const SEND_URL = `https://21.javascript.pages.academy/code-and-magick`;
  const LOAD_URL = `https://21.javascript.pages.academy/code-and-magick/data`;
  const STATUS_CODE = {
    OK: 200
  };
  const TIMEOUT_IN_MS = 1000;

  const errorServerFragment = (onError) => {
    const node = document.createElement(`div`);
    node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: red;`;
    node.style.position = `absolute`;
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = `30px`;

    node.textContent = onError;
    document.body.insertAdjacentElement(`afterbegin`, node);
  };

  const errorHandler = (xhr, onLoad, onError) => {
    xhr.responseType = `json`;

    xhr.timeout = TIMEOUT_IN_MS;

    xhr.addEventListener(`load`, () => {
      if (xhr.status === STATUS_CODE.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
      }
    });

    xhr.addEventListener(`error`, () => {
      onError(`Произошла ошибка соеденения`);
    });

    xhr.addEventListener(`timeout`, () => {
      onError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
    });
  };

  const load = (onLoad, onError) => {
    const xhr = new XMLHttpRequest();
    errorHandler(xhr, onLoad, onError);
    xhr.open(`GET`, LOAD_URL);
    xhr.send();
  };

  const save = (data, onSuccess, onError) => {
    const xhr = new XMLHttpRequest();

    errorHandler(xhr, onSuccess, onError);
    xhr.open(`POST`, SEND_URL);
    xhr.send(data);
  };

  window.backend = {
    save,
    load,
    errorServerFragment
  };
}());
