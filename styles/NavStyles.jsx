import styled from "styled-components";

export const NavStyles = styled.nav`
  height: 6rem;
  width: 100%;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3%;
  position: fixed;
  background: ${(props) =>
    props.tema === "light" ? "var(--secondary_color)" : "var(--primary_color)"};
  /* border-bottom: 1px solid
    ${(props) =>
    props.tema === "light" ? "var(--border_light)" : "var(--border_dark)"}; */
  top: 0;
  user-select: none;
  margin: 0;
  z-index: 998;

  img {
    width: 10rem;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
  }

  .logo {
    position: absolute;
    top: 1.7rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .scrolled {
    position: absolute;
    transition: 0.3s;
    top: 0.8rem;
    left: 50%;
    transform: translate(-50%, -3rem);
  }

  @media (max-width: 700px) {
    height: 3rem;
    width: 100%;
    padding: 1rem 4%;
    img {
      width: 6rem;
    }

    .logo {
      top: 0.8rem;
    }
  }
`;

export const NavItems = styled.div`
  width: 7rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
    color: ${(props) =>
      props.tema === "light"
        ? "var(--primary_color)"
        : "var(--secondary_color)"};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: 0.3s;
  }

  span {
    background: var(--terciary_color);
    color: white;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
    pointer-events: none;
  }

  @media (max-width: 700px) {
    width: 5rem;
    svg {
      width: 1.3rem;
      height: 1.3rem;
      font-weight: 900;
    }

    span {
      width: 0.8rem;
      height: 0.8rem;
      right: 3%;
      top: 20%;
      font-size: 0.6rem;
    }

    .menu-icon {
      display: none;
    }
  }
`;

export const NavItems2 = styled.div`
  width: 11rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h3 {
    font-size: 1rem;
    padding: 0.25rem;
  }

  svg {
    font-size: 1.5rem;
    color: ${(props) =>
      props.tema === "light"
        ? "var(--primary_color)"
        : "var(--secondary_color)"};
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    transition: 0.3s;
  }

  span {
    background: var(--terciary_color);
    color: white;
    width: 1rem;
    height: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-size: 0.75rem;
    position: absolute;
    margin-bottom: 1.5rem;
    margin-left: 1.5rem;
    pointer-events: none;
  }

  @media (max-width: 700px) {
    width: 8rem;
    svg {
      width: 1.3rem;
      height: 1.3rem;
      font-weight: 900;
    }

    span {
      width: 0.8rem;
      height: 0.8rem;
      right: 3%;
      top: 20%;
      font-size: 0.6rem;
    }

    .menu-icon {
      display: none;
    }
  }
`;
