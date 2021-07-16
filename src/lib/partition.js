export default function partition(array, callback) {
  const matches = []
  const nonMatches = []

  // push each element into array depending on return value of `callback`
  array.forEach(element => (callback(element) ? matches : nonMatches).push(element))

  return [matches, nonMatches]
}
