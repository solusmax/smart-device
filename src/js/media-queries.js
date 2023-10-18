import { getRootCSSVariable } from './util';

const TABLET_WIDTH = getRootCSSVariable('--tablet-width');
const SMARTPHONE_WIDTH = getRootCSSVariable('--smartphone-width');

export const isSmartphoneAndLesser = () =>
  window.matchMedia(`(max-width: ${TABLET_WIDTH - 1}px)`).matches;
export const isSmartphoneAndBigger = () =>
  window.matchMedia(`(min-width: ${SMARTPHONE_WIDTH}px)`).matches;
export const isTabletAndBigger = () =>
  window.matchMedia(`(min-width: ${TABLET_WIDTH}px)`).matches;
