/**
 * Inert stand-in for lottie-web during the prerender build.
 *
 * lottie-react imports lottie-web at module scope but only calls loadAnimation from
 * an effect, which never runs on the server. The real package touches `document` while
 * being evaluated, which crashes Node, so the prerender build aliases it to this.
 */

const noop = () => {};

const animationItem = {
  play: noop,
  stop: noop,
  pause: noop,
  destroy: noop,
  goToAndStop: noop,
  goToAndPlay: noop,
  setSpeed: noop,
  setDirection: noop,
  setSubframe: noop,
  playSegments: noop,
  addEventListener: noop,
  removeEventListener: noop,
  getDuration: () => 0,
};

const lottie = {
  loadAnimation: () => animationItem,
  destroy: noop,
  registerAnimation: noop,
  setQuality: noop,
  setLocationHref: noop,
  useWebWorker: noop,
};

export default lottie;
