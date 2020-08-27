export const delay = (stallTime = 10000) => {
  return new Promise(resolve => setTimeout(resolve, stallTime));
};

export const isIphoneX = () => {
  const isIPhone = /iPhone/.test(navigator.userAgent);
  const ratio = window.devicePixelRatio || 1;
  const width = Math.round(window.screen.width * ratio);
  const height = Math.round(window.screen.height * ratio);
  const IPHONE_X = {
    HEIGHT: 2436,
    WIDTH: 1125
  };
  return isIPhone && width === IPHONE_X.WIDTH && height === IPHONE_X.HEIGHT && !window.MSStream;
};
