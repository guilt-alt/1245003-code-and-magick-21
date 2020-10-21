'use strict';

(function () {
  const CLOUD_WIDTH = 420;
  const CLOUD_HEIGHT = 270;
  const CLOUD_X = 100;
  const CLOUD_Y = 10;
  const GAP = 10;

  const BAR_WIDTH = 40;
  const BAR_MAX_HEIGTH = -150;
  const BAR_X = 140;
  const BAR_Y = 250;
  const BAR_GAP = 50;
  const Font = {
    FAMILY: `PT Mono`,
    SIZE: `16px`,
    COLOR: `#000`
  };

  const renderCloud = function name(ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  const getMaxElement = function (arr) {
    let maxElement = arr[0];

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }

    return maxElement;
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, `rgba(0, 0, 0, 0.7)`);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, `#fff`);

    ctx.font = `${Font.FAMILY} ${Font.SIZE}`;
    ctx.fillStyle = Font.COLOR;
    ctx.fillText(`Ура вы победили!`, 120, 40);
    ctx.fillText(`Список результатов:`, 120, 60);

    const maxTime = getMaxElement(times);

    for (let i = 0; i < names.length; i++) {
      if (names[i] === `Вы`) {
        ctx.fillStyle = `rgba(255, 0, 0, 1)`;
      } else {
        ctx.fillStyle = `hsl(240 ${100 * Math.random()}% 50%)`;
      }

      const BAR_HEIGTH = (BAR_MAX_HEIGTH * times[i]) / maxTime;
      const NAMES_Y = times[i].toFixed() * (-BAR_MAX_HEIGTH) / maxTime;
      const COLUMN_X = BAR_X + (BAR_GAP + BAR_WIDTH) * i;

      ctx.fillRect(COLUMN_X, BAR_Y, BAR_WIDTH, BAR_HEIGTH);
      ctx.fillStyle = Font.COLOR;
      ctx.fillText(names[i], COLUMN_X, 265);
      ctx.fillText(times[i].toFixed(), COLUMN_X, BAR_Y - NAMES_Y - GAP / 2);
    }
  };
}());
