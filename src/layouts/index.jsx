import React, { useState, useEffect, createContext } from "react"
import { parse } from "query-string"
import "../globals/styles/all.css"
//import Metadata from "../globals/components/Metadata"
//import value from "../globals/data/sites.json"

const Sites = createContext()
const defaultSite = {
  dir: "rtl",
  name: "spanish",
  mode: "horizontal-tb",
}

export default function ({ children, location }) {
  const [inSite, setInSite] = useState(defaultSite),
    { search } = typeof window !== `undefined` ? location : { pathname: "" },
    { site } = parse(search)
  /*
  useEffect(() => {
    setInSite(findSiteByRoute(site))
  }, [search])
  */
  console.log(search, site, location)
  return <Sites.Provider value={{ site: "hola" }}>{children}</Sites.Provider>
}
//      <Metadata site={site} mode={value} dir={} />
