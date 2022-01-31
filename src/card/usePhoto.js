import { useStaticQuery, graphql } from "gatsby"

export default function () {
  const { file } = useStaticQuery(graphql`
      query {
        file(relativePath: { eq: "photo.jpeg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 96
              placeholder: BLURRED
              layout: FIXED
              quality: 100
            )
          }
        }
      }
    `),
    { childImageSharp } = file,
    { gatsbyImageData } = childImageSharp
  return gatsbyImageData
}
