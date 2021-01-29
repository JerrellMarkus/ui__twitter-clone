import React from 'react'

import Main from '../Main'
import MenuBar from '../MenuBar'
import SideBar from '../SideBar'
import Footer from '../Footer/Footer'

import { Container, Wrapper } from './styles'

function layout() {
  return (
    <Container>
      <Wrapper>
        <MenuBar />
        <Main />
        <SideBar />
      </Wrapper>
    </Container>
  )
}

export default layout
