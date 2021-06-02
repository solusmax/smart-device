import { isTabletAndBigger } from './media-queries.js';
import { throttle } from './util.js';

const promoOrderButtonNode = document.querySelector('.promo__order-call');

export const setPromoOrderButtonText = () => {
  if (!promoOrderButtonNode) {
    return;
  }

  if (isTabletAndBigger()) {
    promoOrderButtonNode.textContent = 'Получить бесплатную консультацию';
  } else {
    promoOrderButtonNode.textContent = 'Бесплатная консультация';
  }
};

const onWindowResize = () => {
  setPromoOrderButtonText();
};

export const setPromoOrderButtonListeners = () => {
  window.addEventListener('resize', throttle(onWindowResize, 50));
};
