import styled from "styled-components";

export const DetailsStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  margin: 15rem 17vw;

  img {
    width: 40%;
  }

  @media (max-width: 700px) {
    margin: 18vh 0;
    flex-direction: column;

    img {
      width: 70%;
      margin-bottom: 1rem;
    
  }
`;

export const ProductInfo = styled.div`
  width: 40%;
  button {
    font-size: 1rem;
    font-weight: medium;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  h3 {
    color: ${(props) =>
      props.tema === "dark"
        ? "var(--secondary_color)"
        : "var(--primary_color)"};
  }

  p {
    color: ${(props) =>
      props.tema === "dark"
        ? "var(--secondary_color)"
        : "var(--primary_color)"};
  }

  @media (max-width: 700px) {
    width: 70%;
    margin-bottom: 1rem;
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 1rem 0;

  .mas-menos {
    width: 40%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 2rem;
    padding: 0rem 0.5rem;
  }

  p {
    width: 1rem;
    font-size: 1.6rem;
    text-align: center;
  }

  span {
    color: #e1e1e1;
    font-size: 1.5rem;
  }

  svg {
    color: #fefefe;
  }

  @media (max-width: 700px) {
    margin: 1rem 0;
    width: 100%;
    justify-content: space-between;

    p {
      font-size: 1.3rem;
    }

    span {
      font-size: 1rem;
    }

    button {
      font-size: 1.5rem;
    }
  }
`;

export const Buy = styled.button`
  width: 100%;
  background: var(--terciary_color);
  color: white;
  font-weight: 500;
  border: none;
`;


export const Quantity2 = styled.div`
  display: flex;
  align-items: center;
  justify-content:space-between;
  margin: 0;

 
  .mas-menos {
    width: 50%;
    display: flex;
    align-items: center;
  }

  button {
    background: transparent;
    border: none;
    display: flex;
    font-size: 1.2rem;
    padding: 0rem 0.5rem;
  }

  p {
    width: 1rem;
    font-size: 1.2rem;
    text-align: center;
  }

  span {
    color: #e1e1e1;
    font-size: .7rem;
  }

  svg {
    color: #fefefe;
  }

  @media (max-width: 700px) {
    margin: 0;
    width: 100%;
    justify-content: space-between;

    p {
      margin-top: 1rem;
      font-size: .8rem;
    }

    span {
      font-size: .6rem;
      margin-top: 1rem;
    }

    button {
      margin-top: 1rem;
      font-size: 1rem;
    }
  }
`;