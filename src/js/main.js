import { enableJs } from './util.js';
import 'focus-visible';
import { setAccordionsListeners } from './accordion.js';
import { setPromoOrderButtonListeners, setPromoOrderButtonText } from './promo.js';
import { replaceOpenModalLinksWithButtons, setModalListeners } from './modal.js';
import { setWriteUsListeners } from './validation.js';

enableJs();

setPromoOrderButtonText();
setPromoOrderButtonListeners();

setAccordionsListeners();

replaceOpenModalLinksWithButtons();
setModalListeners();

setWriteUsListeners();
