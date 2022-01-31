const ommit = ["name", "link"]

const getSiteTransform = (obj, site) => {
  const array = Object.keys(obj).map(key => {
    if (key in ommit) {
      return [key, obj[key]]
    }
    return getSiteFromObjectOrCollection(obj, key, site)
  })
  return Object.fromEntries(array)
}

const getSiteFromObjectOrCollection = (obj, key, site) => {
  if (obj[key] instanceof Array) {
    return [key, obj[key].map(newObj => getSiteTransform(newObj, site))]
  }
  if (!Object.keys(obj[key]).includes(site)) {
    return [key, getSiteTransform(obj[key], site)]
  }
  return [key, obj[key][site]]
}

export { getSiteTransform }
