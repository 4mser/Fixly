import styled from "styled-components";

//Color Icons

import {
  CiDeliveryTruck,
  CiHome,
  CiPalette,
  CiMobile1,
  CiMicrochip,
} from "react-icons/ci";

const Menu = ({ tema, menuOpen }) => {
  return (
    <EstilosMenu tema={tema} menuOpen={menuOpen}>
      <div className="btn-menu">
        <CiHome></CiHome>
        <p>Inicio</p>
      </div>

      <div className="btn-menu">
        <CiPalette></CiPalette>
        <p>Categorías</p>
      </div>

      <div className="btn-menu">
        <CiDeliveryTruck></CiDeliveryTruck>
        <p>Repartos</p>
      </div>

      <div className="btn-menu">
        <CiMicrochip></CiMicrochip>
        <p>AI</p>
      </div>

      <div className="btn-menu">
        <CiMobile1></CiMobile1>
        <p>Contacto</p>
      </div>
    </EstilosMenu>
  );
};

export default Menu;

const EstilosMenu = styled.div`
  @media (min-width: 700px) {
    width: 100%;
    height: ${(props) => (props.menuOpen === "open" ? "0rem" : "6rem")};
    position: fixed;
    background: ${(props) =>
      props.tema === "dark" ? "var(--cards_dark)" : "var(--menu_light)"};
    border-right: 1px solid
      ${(props) =>
        props.tema === "dark" ? "var(--border_dark)" : "var(--border_light)"};

    left: 0;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
    align-items: center;
    flex-direction: row;
    padding: 0 7%;
    z-index: 999;
    transition: 0.3s;
    top: ${(props) => (props.menuOpen === "open" ? "6rem" : "6rem")};

    svg {
      width: 2rem;
      height: 1.8rem;
      color: ${(props) =>
        props.tema === "dark"
          ? "var(--secondary_color)"
          : "var(--icons_light)"};
    }

    .btn-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      p {
        font-size: 0.7rem;
        color: ${(props) =>
          props.tema === "dark" ? "#ffffffe2" : "var(--icons_light)"};
        margin-top: 0.2rem;
      }
    }
  }

  @media (max-width: 700px) {
    width: 100%;
    height: 3rem;
    background: ${(props) =>
      props.tema === "dark" ? "var(--cards_dark)" : "white"};
    border-top: 1px solid
      ${(props) =>
        props.tema === "dark" ? "var(--border_dark)" : "var(--border_light)"};
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    z-index: 998;
    padding: 0 2rem;
    align-items: center;
    flex-direction: row;

    svg {
      width: 2rem;
      height: 1.2rem;
      color: ${(props) =>
        props.tema === "dark" ? "var(--secondary_color)" : "var(--primary)"};
    }

    .btn-menu {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      p {
        font-size: 0.5rem;
        color: ${(props) =>
          props.tema === "dark" ? "#ffffffe2" : "var(--cards_dark)"};
        margin-top: 0.2rem;
      }
    }
  }
`;
