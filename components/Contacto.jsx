import styled from "styled-components"
import {FaLayerGroup, FaWhatsapp, FaRegHeart} from 'react-icons/fa'
import {SiOpenai} from 'react-icons/si'

const Contacto = () => {
    return (
        <ContactoStyled>
            <C2>
                
                <MiniMenu>
                    <C3 className="icons-mini-menu">
                        <div className="wsp-icon">
                            <FaWhatsapp></FaWhatsapp>
                        </div>

                        <div className="openai-icon">
                            <SiOpenai></SiOpenai>
                        </div>

                        <div className="like-icon">
                            <FaRegHeart></FaRegHeart>
                        </div>
                    </C3>
                </MiniMenu>
                
            </C2>
        </ContactoStyled>
    )
}

export default Contacto

const ContactoStyled = styled.div`
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 1;
`

const C2 = styled.div`

    width: 12rem;
    height: 12rem;
    right: 2rem;
    bottom: 1.5rem;
    position: absolute;
`

const C3 = styled.div`
    color: white;
    opacity: 0;
    position: absolute;
    transition: .3s;
    
    svg {
        width: 1.5rem;
        height: 1.5rem;
        margin: .5rem;
    }

    

    .openai-icon,
    .like-icon,
    .wsp-icon {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        border: 2px solid white;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: .3s;
    }

    .wsp-icon {
        transform: translate(-5rem, 1.8rem);
    }

    .wsp-icon:hover {
        transform: translate(-5rem, 1.8rem) scale(1.1);

    }


    .openai-icon {
        transform: translate(-3.5rem, -3.3rem);
    }

    .openai-icon:hover {
        transform: translate(-3.5rem, -3.3rem) scale(1.1);

    }

    .like-icon {
        transform: translate(2rem, -4.7rem);
    }

    .like-icon:hover {
        transform: translate(2rem, -4.7rem) scale(1.1);
    }


`

const MiniMenu = styled.div`
    width: 5rem;
    height: 5rem;
    border: 2px solid white;
    border-radius: 50%;
    bottom: 0;
    position: absolute;
    cursor: pointer;
    right: 0;

    :hover .icons-mini-menu{
        opacity: 1;
    }

`
