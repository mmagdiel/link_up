import React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import styled from "styled-components"

import usePhoto from "../card/usePhoto"

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  writing-mode: horizontal-tb;
  background: linear-gradient(to right, #a8ff78, #78ffd6);
`

const Card = styled.section`
  width: 320px;
  height: 400px;
  margin: 0 auto;
  border-radius: 12px;
  backdrop-filter: blur(20px);
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`
//  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
const Header = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
`
const HeaderName = styled.h1`
  font-size: 1.2em;
  font-weight: 700;
  color: #001911;
`

const HeaderDescription = styled.p`
  color: #002016;
`

const Body = styled.main``

const Links = styled.ul``

const Link = styled.li``

function Home() {
  const image = usePhoto()
  return (
    <Main>
      <Card>
        <Header>
          <GatsbyImage
            image={image}
            alt="Magdiel Márquez Hernández"
            objectPosition="50 0"
            style={{ borderRadius: "50%" }}
          />
          <HeaderName>Magdiel Márquez Hernández</HeaderName>
          <HeaderDescription>Desarrollador Web</HeaderDescription>
        </Header>
        <Body>
          <Links>
            <Link src="https://www.linkedin.com/in/mmagdiel/">Linkedin</Link>
          </Links>
        </Body>
      </Card>
    </Main>
  )
}

export default Home
