const MODAL_SHOWN_CLASS = 'modal--shown';

const listernersBuffer = {};

const modalNode = document.querySelector('.modal');
const modalInnerNode = document.querySelector('.modal__inner');
const closeModalNode = document.querySelector('.modal__close');
const writeUsNameFieldNode = document.querySelector('.modal .write-is__field');
let openModalPromoNode = document.querySelector('.promo__order-call');
let openModalHeaderNode = document.querySelector('.header__order-call');

const replaceWithButton = (element) => {
  if (!element) {
    return;
  }

  const newButtonNode = document.createElement('button');
  newButtonNode.type = 'button';
  newButtonNode.classList.add('button');

  const elementClasses = element.classList;
  const elementTextContent = element.textContent;

  if (elementClasses) {
    elementClasses.forEach((elementClass) => newButtonNode.classList.add(elementClass));
  }

  newButtonNode.textContent = elementTextContent;

  element.replaceWith(newButtonNode);
};

const openModal = () => {
  modalNode.classList.add(MODAL_SHOWN_CLASS);

  writeUsNameFieldNode.focus();

  listernersBuffer.onCloseModalClick = onCloseModalClick();
  listernersBuffer.onEscKeydown = onEscKeydown();
  listernersBuffer.onNotModalAreaClick = onNotModalAreaClick();
  listernersBuffer.onModalInnerClick = onModalInnerClick();

  closeModalNode.addEventListener('click', listernersBuffer.onCloseModalClick);
  window.addEventListener('keydown', listernersBuffer.onEscKeydown);
  modalNode.addEventListener('click', listernersBuffer.onNotModalAreaClick);
  modalInnerNode.addEventListener('click', listernersBuffer.onModalInnerClick);
};

const closeModal = () => {
  modalNode.classList.remove(MODAL_SHOWN_CLASS);

  closeModalNode.removeEventListener('click', listernersBuffer.onCloseModalClick);
  window.removeEventListener('keydown', listernersBuffer.onEscKeydown);
  modalNode.removeEventListener('click', listernersBuffer.onNotModalAreaClick);
  modalInnerNode.removeEventListener('click', listernersBuffer.onModalInnerClick);
};

const onOpenModalClick = () => {
  return (evt) => {
    evt.preventDefault();
    openModal();
  };
};

const onCloseModalClick = () => {
  return (evt) => {
    evt.preventDefault();
    closeModal();
  };
};


const onEscKeydown = () => {
  return (evt) => {
    if (evt.key === 'Esc' || evt.key === 'Escape') {
      evt.preventDefault();
      closeModal();
    }
  };
};

const onNotModalAreaClick = () => {
  return (evt) => {
    if (evt.target !== modalInnerNode) {
      evt.preventDefault();
      closeModal();
    }
  };
};

const onModalInnerClick = () => {
  return (evt) => {
    evt.stopPropagation();
  };
};

export const replaceOpenModalLinksWithButtons = () => {
  replaceWithButton(openModalHeaderNode);
  replaceWithButton(openModalPromoNode);

  openModalPromoNode = document.querySelector('.promo__order-call');
  openModalHeaderNode = document.querySelector('.header__order-call');
};

export const setModalListeners = () => {
  if (openModalPromoNode) {
    openModalPromoNode.addEventListener('click', onOpenModalClick());
  }

  if (openModalHeaderNode) {
    openModalHeaderNode.addEventListener('click', onOpenModalClick());
  }
};
