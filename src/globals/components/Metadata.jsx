import React from "react"

import { Helmet } from "react-helmet"

function Metadata({ site, dir, mode }) {
  const title
  return (
    <Helmet htmlAttributes={{ dir: dir }} style={{ writingMode: mode }}>
      <title>{title}</title>
    </Helmet>
  )
}

export default Metadata
