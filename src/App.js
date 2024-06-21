import Menu from './Component/Menu'
import Navbar from './Component/Navbar'
import styled from 'styled-components'
import "./App.css"
import { ThemeProvider } from 'styled-components'
import { LightTheme } from './Utils/Theme'
import { DarkTheme } from './Utils/Theme'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Video from './Page/Video'
import SignIn from './Page/SignIn'

const Container = styled.div` 
display:flex
`
const Main = styled.div` 
flex:7;
background-color:${({ theme }) => theme.bg}
`
const Wrapper = styled.div` 
padding:20px 100px
`


function App() {
  const [darkMode, setDarkMode] = useState(true)
  return (
    <ThemeProvider theme={darkMode ? LightTheme : DarkTheme} >
      <Container>
        <BrowserRouter>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/video/:id' element={<Video />} />
                <Route path='/signin' element={<SignIn />} />
              </Routes>
            </Wrapper>
          </Main>
        </BrowserRouter>
      </Container>
    </ThemeProvider >
  );
}

export default App;
