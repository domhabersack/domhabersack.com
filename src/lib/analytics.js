export function triggerEvent() {
  return function(eventName, options) {
    return window.plausible?.(eventName, options)
  }
}
