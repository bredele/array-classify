

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
