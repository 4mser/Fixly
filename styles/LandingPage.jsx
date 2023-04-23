import styled from "styled-components";

export const LandingPage = styled.div`
  width: 100%;
  height: 18rem;
  /* background-color: var(--primary_color); */
  display: flex;
  color: ${(props) =>
    props.tema === "light" ? "var(--primary_color)" : "var(--secondary_color)"};
  flex-direction: column;
  align-items: center;
  padding: 8rem 2rem;
  img {
    width: 100%;
    cursor: pointer;
  }

  h2 {
    padding: 0.5rem 0;
  }

  @media (max-width: 700px) {
    padding: 8rem 2rem;
    height: 32vh;
  }
`;
export const ChatGpt = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 1.8rem;
  }

  h1 span {
    color: var(--terciary_color);
  }

  h2 {
    width: 80%;
    font-size: 0.8rem;
    margin-bottom: 0.8rem;
    font-weight: 400;
    opacity: 0.7;
  }

  .chatbot:hover {
    box-shadow: 0 5px 15px var(--shadow);
    transform: scale(1.02);
  }

  div {
    width: 45rem;
    height: 4rem;
    overflow: hidden;
    padding: 2rem;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid var(--border);
    box-shadow: 0 0 10px var(--border_light);
    transition: 0.5s ease;
    user-select: none;
    background: ${(props) =>
      props.tema === "light" ? "var(--bgInput_light)" : "var(--bgInput_dark)"};
  }

  input {
    width: 90%;
    border: none;
    background: none;
  }

  input:focus {
    outline: none;
    color: ${(props) => (props.tema === "light" ? "black" : "white")};
  }

  svg {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 700px) {
    height: auto;

    h1 {
      font-size: 5vw;
    }

    div {
      width: 100%;
      height: 3rem;
      padding: 1rem;
    }

    h2 {
      font-size: 2.5vw;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    .chatbot {
      height: 2.5rem;
    }
    .chatbot:hover {
      transform: none;
      box-shadow: none;
    }
  }
`;
