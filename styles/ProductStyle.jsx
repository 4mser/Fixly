import styled from "styled-components";

export const ProductStyles = styled.div`
  @media (max-width: 700px) {
    width: 38vw;
    height: 15rem;
    margin-left: 1rem;
    border-radius: 2px;
    overflow: hidden;
    display: flex;
    box-shadow: ${(props) =>
      props.tema === "light" ? "0 2px 15px var(--box_shadow)" : ""};
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${(props) => (props.tema === "light" ? "" : "")};

    .image {
      width: 100%;
      height: 50vw;
      overflow: hidden;
    }

    .image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s;
    }

    .image img:hover {
      transform: scale(1.2);
    }
  }
`;

export const ProductInfo2 = styled.div`
  @media (max-width: 700px) {
    height: 17vw;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;

    .info-div {
      width: 80%;
      padding: 0.5rem;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .info-div h2 {
      color: ${(props) =>
        props.tema === "light"
          ? "var(--primary_color)"
          : "var(--secondary_color)"};
      font-size: 2vw;
      font-weight: 300;
    }

    .info-div h3 {
      color: ${(props) =>
        props.tema === "light"
          ? "var(--terciary_color)"
          : "var(--secondary_color)"};
      font-size: 2.8vw;
    }

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${(props) =>
        props.tema === "light"
          ? "var(--primary_color)"
          : "var(--secondary_color)"};
    }

    .icon svg:hover {
      cursor: pointer;
      opacity: 0.5;
    }

    .icon svg {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;
