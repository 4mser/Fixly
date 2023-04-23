import styled from "styled-components";

//Animation
const { motion } = require("framer-motion");

export const CartWrapper = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  height: calc(100vh - 6rem);
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  background: #000000a5;

  @media (max-width: 700px) {
    height: calc(100vh - 3rem);
  }
`;

export const CartStyle = styled(motion.div)`
  width: 40%;
  color: var(--secondary_color);
  background: var(--cart_color);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  padding: 3rem 7vw;
  overflow-y: scroll;
  z-index: 1000;
  position: relative;

  @media (max-width: 700px) {
    width: 80%;
  }
`;
export const Card = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  width: 100%;
  height: 5rem;
  margin: 2rem 0;
  background: var(--shadow);

  img {
    height: 100%;
    min-width: 30%;
    object-fit: cover;
  }
`;

export const CardInfo = styled(motion.div)`
  width: 100%;
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: space-around;

  h3 {
    font-size: 0.6rem;
  }

  h4 {
    font-size: 0.6rem;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const EmptyStyle = styled(motion.div)`
  position: absolute;
  top: 0;
  width: 80%;
  height: 100%;
  text-align: center;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  h2 {
    font-size: 1rem;
    font-weight: 300;
  }

  svg {
    font-size: 3rem;
    color: #747474;
    margin-top: 1rem;
  }
`;

export const Checkout = styled(motion.div)`
  button {
    background: var(--terciary_color);
    padding: 1rem;
    width: 100%;
    color: white;
    cursor: pointer;
    margin-top: 0.8rem;
    border: none;
    transition: 0.3s ease;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  button:hover {
    transform: translateY(-0.3rem);
    box-shadow: 0 2px 10px var(--shadow);
  }
`;

export const Cards = styled(motion.div)``;
