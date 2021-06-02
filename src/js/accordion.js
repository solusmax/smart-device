import { isSmartphoneAndLesser } from './media-queries.js';
import { throttle } from './util.js';

const ACCORDION_CLOSED_CLASS = 'accordion--closed';

const accordions = document.querySelectorAll('.accordion');

export const setAccordionsListeners = () => {
  accordions.forEach((accordionNode) => {
    const accordionTitleNode = accordionNode.querySelector('.accordion__title');
    const accordionContentNode = accordionNode.querySelector('.accordion__content');
    const allAccordionContentElements = accordionContentNode.querySelectorAll('*');

    // Надпись в кнопке
    const accordionButtonTextNode = document.createElement('span');
    accordionButtonTextNode.classList.add('visually-hidden');
    accordionButtonTextNode.textContent = 'Открыть';

    // Кнопка
    const accordionButtonNode = document.createElement('button');
    accordionButtonNode.type = 'button';
    accordionButtonNode.classList.add('accordion__button');
    accordionButtonNode.append(accordionButtonTextNode);

    accordionContentNode.style.marginTop = 0;

    const disableFocusOnAccordionContentElements = () => {
      allAccordionContentElements.forEach((elementNode) => {
        elementNode.tabIndex = '-1';
      });
    };

    const enableFocusOnAccordionContentElements = () => {
      allAccordionContentElements.forEach((elementNode) => {
        elementNode.removeAttribute('tabindex');
      });
    };

    const hideAccordionContent = () => {
      const accordionContentHeight = getComputedStyle(accordionContentNode).getPropertyValue('height');

      accordionContentNode.style.marginTop = -1 * parseInt(accordionContentHeight, 10) + 'px';
    };

    const showAccordionContent = () => {
      accordionContentNode.style.marginTop = 0;
    };

    const updateAccordionContentVisibility = () => {
      if (accordionNode.classList.contains(ACCORDION_CLOSED_CLASS) && isSmartphoneAndLesser()) {
        hideAccordionContent();
        disableFocusOnAccordionContentElements();
        return;
      }

      showAccordionContent();
      enableFocusOnAccordionContentElements();
    };

    const toggleAccordion = () => accordionNode.classList.toggle(ACCORDION_CLOSED_CLASS);

    const closeAccordion = () => accordionNode.classList.add(ACCORDION_CLOSED_CLASS);

    const onAccordionButtonClick = () => {
      toggleAccordion();
      updateAccordionContentVisibility();
    };

    const onWindowResize = () => {
      updateAccordionContentVisibility();
    };

    accordionButtonNode.addEventListener('click', onAccordionButtonClick);
    window.addEventListener('resize', throttle(onWindowResize, 50));

    closeAccordion();

    if (isSmartphoneAndLesser()) {
      hideAccordionContent();
      disableFocusOnAccordionContentElements();
    }

    accordionTitleNode.append(accordionButtonNode);
  });
};
