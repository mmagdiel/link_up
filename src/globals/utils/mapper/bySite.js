import value from "../../data/sites.json"

const yieldDefaultSiteOrFindSiteByRoute = defaultSite => route => {
  const findSite = value.sites.find(site => {
    site.name == route
  })
  console.log(findSite)
  if (findSite && Object.keys(findSite).length === 0) {
    return defaultSite
  }
  return findSite
}

export default yieldDefaultSiteOrFindSiteByRoute
