/**
 * Placeholder for future translate functionality
 */
export function translate(str, replaceStrings = null) {
  if (!str) {
    return '';
  }

  let translated = str;
  if (replaceStrings) {
    Object.keys(replaceStrings).forEach(placeholder => {
      translated = translated.replace(placeholder, replaceStrings[placeholder]);
    });
  }

  return translated;
}

export function getWindowWidth() {
  return typeof global.window !== 'undefined' ? global.window.innerWidth : 0;
}

export function getWindowHeight() {
  return typeof global.window !== 'undefined' ? global.window.innerHeight : 0;
}

// Get the highest window context that isn't cross-origin
// (When in an iframe)
export function getHighestSafeWindowContext(self = global.window.self) {
  function isCrossOriginFrame() {
    try {
      return (
        typeof global.window !== 'undefined' &&
        !global.window.top.location.hostname
      );
    } catch (e) {
      return true;
    }
  }

  return isCrossOriginFrame() ? self : getHighestSafeWindowContext(self.parent);
}
