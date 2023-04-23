import { useState, useEffect } from "react";

import { FiSearch } from "react-icons/fi";
import { SiOpenai } from "react-icons/si";

import styled from "styled-components";

const Buscador = ({ tema }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <EstilosBuscador tema={tema}>
      <div className={scrolled ? "buscador-scrolled" : "buscador"}>
        <p>
          <FiSearch></FiSearch> Buscar
        </p>

        <SiOpenai className="gpt-icon"></SiOpenai>
      </div>
    </EstilosBuscador>
  );
};

export default Buscador;

const EstilosBuscador = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .buscador {
    width: 80%;
    height: 3rem;
    margin-top: 9rem;
    background: ${(props) =>
      props.tema === "light"
        ? "var(--buscador-light)"
        : "var(--buscador-dark)"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.8rem;
    transition: 0.3s;
    color: ${(props) =>
      props.tema === "dark" ? "var(--bgInput_light)" : "var(--bgInput_dark)"};
  }

  .gpt-icon {
    width: 1.2rem;
    height: 1.2rem;
    opacity: 0.8;
  }
  .buscador-scrolled {
    width: 94%;
    height: 3rem;
    margin-top: 0;
    background: ${(props) =>
      props.tema === "light"
        ? "var(--buscador-light)"
        : "var(--buscador-dark)"};
    display: flex;
    align-items: center;
    padding: 0 1rem;
    justify-content: space-between;
    transition: 0.3s;
    color: ${(props) =>
      props.tema === "dark" ? "var(--bgInput_light)" : "var(--bgInput_dark)"};
  }

  p svg {
    transform: translateY(0.1rem);
  }

  @media (max-width: 700px) {
    p {
      font-size: 0.6rem;
      display: flex;
      flex-direction: row;
      gap: 0.2rem;
    }

    p svg {
      display: flex;
      align-items: center;
      justify-content: center;
      transform: translateY(0.05rem);
    }

    .buscador {
      width: 100%;
      height: 1.7rem;
      top: 3rem;
      margin-top: 0;
      padding: 0 0.5rem;
      left: 50%;
      transform: translateX(-50%);
      position: fixed;
      background: ${(props) =>
        props.tema === "light"
          ? "var(--buscador-light)"
          : "var(--buscador-dark)"};
      z-index: 998;
      display: flex;
      backdrop-filter: blur(3px);
      align-items: center;
      transition: 0.3s;
      color: ${(props) =>
        props.tema === "dark"
          ? "var(--bgInput_light)"
          : "var(--bgInput_light)"};
    }

    .buscador-scrolled {
      width: 56vw;
      height: 1.7rem;
      backdrop-filter: blur(3px);
      top: 0.6rem;
      padding: 0 0.5rem;
      left: 36%;
      transform: translateX(-41%);
      position: fixed;
      background: ${(props) =>
        props.tema === "light"
          ? "var(--buscador-light)"
          : "var(--buscador-dark)"};
      z-index: 998;
      display: flex;
      align-items: center;
      transition: 0.3s;
      color: ${(props) =>
        props.tema === "dark" ? "var(--bgInput_light)" : "var(--bgInput_dark)"};
    }

    .gpt-icon {
      width: 0.8rem;
      height: 0.8rem;
    }
  }
`;
