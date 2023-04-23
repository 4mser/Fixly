import '../styles/globals.css'
import { Provider, createClient } from 'urql'
import Nav from '../components/Nav'
import { StateContext } from '../lib/context'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { useState } from 'react'
import Bg from '../components/Bg'
import Menu from '../components/Menu'


const client = createClient({url: process.env.NEXT_PUBLIC_BACKEND_API})

export default function App({ Component, pageProps }) {

  const [tema, setTema] = useState('dark');

  const handleTemaChange = () => {
    if (tema === 'dark') {
      setTema('light');
    } else {
      setTema('dark');
    }
  }

  const [MenuOpen, setMenuOpen] = useState('open')

  const handleMenuChange = () => {
    if (MenuOpen === 'closed') {
      setMenuOpen('open')
    } else {
      setMenuOpen('closed')
    }
  }

  return (
    <UserProvider>
      <StateContext>
        <Provider value={client}>
          <Menu tema={tema} menuOpen={MenuOpen}></Menu>
          <Bg tema={tema}></Bg>
          <Nav 
            tema={tema} onTemaChange={handleTemaChange} 
            menuOpen={MenuOpen} menuToggle={handleMenuChange}>
          </Nav>
          <Component tema={tema} {...pageProps} />
        </Provider>
      </StateContext>
    </UserProvider>
  )
}
