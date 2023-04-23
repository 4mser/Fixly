import {LandingPage, ChatGpt} from '../styles/LandingPage'
import {SiOpenai} from 'react-icons/si'



const LandPage = ({tema}) => {
    return (
        <LandingPage tema={tema}>
          <ChatGpt tema={tema}>
          <h1>Soluciones <span>sencillas</span> a tus problemas de bricolaje</h1>
          <h2>Utilizamos inteligencia artificial para ayudarte a buscar soluciones de bricolaje de manera rápida, autónoma y sencilla.</h2>

          <div className='chatbot' tema={tema}>
            <input type='text' placeholder='¿Qué necesito para reparar una gotera?...'></input>

            <SiOpenai></SiOpenai>
          </div>
          </ChatGpt>
        </LandingPage>
    )
}

export default LandPage