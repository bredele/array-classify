


/**
 * Group list of objects given a sorting callback.
 *
 * @param {Array} arr
 * @param {Function} cb
 * @api public
 */

module.exports = (arr, cb) => {
  let list = [...arr]
  const result = []
  while (list.length) {
    const {alike, remaining} = group(list, cb)
    result.push(alike)
    list = remaining
  }
  return result
}


/**
 * Traverse list of objects and return group
 * of object as well as remaining objects.
 *
 * @param {Array} list
 * @param {Function} cb
 * @return {Object}
 * @api private
 */

function group (list, cb) {
  const alike = []
  const remaining = []
  const a = list.shift()
  list.map(b => {
    const bool = cb(a, b)
    if (bool) alike.push(b)
    else remaining.push(b)
  })
  return {
    alike: alike.length > 0 ? [a, ...alike]: a,
    remaining: remaining
  }
}
