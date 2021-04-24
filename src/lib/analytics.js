export function triggerEvent(eventName, options) {
  return window.plausible?.(eventName, options)
}
