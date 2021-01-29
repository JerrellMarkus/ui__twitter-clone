import React from "react"
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Layout from './components/Layout'
import Main from './components/Main'
import Material from './components/Material/Material'
import GlobalStyles from './styles/GlobalStyles'
import Light from './styles/Light'
import Dark from './styles/Dark'
import Signup from './components/Signup'
import Basic from './components/Basic/Basic'
import InputForm from './InputForm'
import MenuBar from './components/MenuBar'
import SideBar from './components/SideBar'
import Footer from './components/Footer/Footer'

import {Container, Wrapper} from './components/Layout/styles'

function App() {
    return (
        <div className="App">
<Signup></Signup>
            <GlobalStyles/>
            <Light/>
<Dark/>
        </div>
    )
}

export default App
