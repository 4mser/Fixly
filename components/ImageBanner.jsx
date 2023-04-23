import styled from "styled-components";

const ImageBanner = ({ tema }) => {
  return (
    <ImageBannerStyle tema={tema}>
      <h3>
        Potenciados con IA para brindarte soluciones <span>sencillas</span> al
        instante
      </h3>
      <img src="https://www.e-point.pl/_fileserver/item/1500803"></img>
    </ImageBannerStyle>
  );
};

export default ImageBanner;

const ImageBannerStyle = styled.div`
  margin-top: 7rem;
  width: 100%;
  height: 50vh;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding: 0 16.5%;

  h3 {
    position: relative;
    font-size: 2.4vw;
    color: ${(props) =>
      props.tema === "light"
        ? "var(--primary_color)"
        : "var(--secondary_color)"};
  }

  span {
    color: var(--terciary_color);
  }

  img {
    width: 50%;
  }

  @media (max-width: 700px) {
    top: 3rem;
    width: 100%;
    position: relative;
    height: 50vw;
    margin-top: 0;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 0;

    h3 {
      position: absolute;
      color: white;
      font-size: 0.6rem;
      font-weight: 300;
      padding: 4rem 60% 0 1rem;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
