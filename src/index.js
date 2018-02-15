import { eventListenerOptionsSupported, noop } from './utils';

const defaultOptions = {
  passive: true,
  capture: false
};

let supportedPassiveTypes = [
  'scroll', 'wheel',
    'touchstart', 'touchmove', 'touchenter', 'touchend', 'touchleave',
    'mouseout', 'mouseleave', 'mouseup', 'mousedown', 'mousemove', 'mouseenter', 'mousewheel', 'mouseover'
];
const getDefaultPassiveOption = (passive, eventName) => {
  if (passive !== undefined) return passive;

  return supportedPassiveTypes.indexOf(eventName) === -1 ? false : defaultOptions.passive;
};

const getWritableOptions = (options) => {
  const passiveDescriptor = Object.getOwnPropertyDescriptor(options, 'passive');
    
  return passiveDescriptor && passiveDescriptor.writable !== true && passiveDescriptor.set === undefined
    ? Object.assign({}, options)
    : options;
};

const prepareSafeListener = (listener, passive) => {
  if (!passive) return listener;
  return function (e) {
    e.preventDefault = noop;
    return listener.call(this, e);
  };
};

const overwriteAddEvent = (superMethod) => {
  EventTarget.prototype.addEventListener = function (type, listener, options) {
    const usesListenerOptions = typeof options === 'object' && options !== null;
    const useCapture          = usesListenerOptions ? options.capture : options;

    options         = usesListenerOptions ? getWritableOptions(options) : {};
    options.passive = getDefaultPassiveOption(options.passive, type);
    options.capture = useCapture === undefined ? defaultOptions.capture : useCapture;
    listener        = prepareSafeListener(listener, options.passive);

    superMethod.call(this, type, listener, options);
  };
};

const supportsPassive = eventListenerOptionsSupported();

export const markEventsAsPassive = (events) => {
    if (Array.isArray(events)) {
        supportedPassiveTypes = events;
    }
    if (supportsPassive) {
        const addEvent = EventTarget.prototype.addEventListener;
        overwriteAddEvent(addEvent);
    }
};




