export const enableJs = () => {
  document.documentElement.classList.replace('no-js', 'js');
};

export const throttle = (callback, limit) => {
  let waiting = false;

  return () => {
    if (!waiting) {
      /* eslint-disable */
      callback.apply(this, arguments);
      /* eslint-enable */
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};

export const getRootCSSVariable = (variable) => parseInt(getComputedStyle(document.documentElement).getPropertyValue(variable), 10);

export const isStringEmpty = (string) => String(string).length === 0;
