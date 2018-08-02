export const sortByKey = (items, key = "run_time") => {
  return items.sort(function compare(a, b) {
    const aKey = a[key]
    const bKey = b[key]
    if (aKey < bKey) {
      return -1
    }
    if (aKey > bKey) {
      return 1
    }
    return 0
  })
}

export const titleCase = (str) => {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())
}
