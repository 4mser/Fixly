import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Product from "../components/Products";

import styled from "styled-components";

import { useQuery } from "urql";
import { PRODUCT_QUERY } from "../lib/query";

// import required modules

const ProductsHome = ({ tema }) => {
  // Fetch products from Scrapi
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const { data, fetching, error } = results;

  //Check for the data coming in
  if (fetching) return <p>Cargando...</p>;
  if (error) return <p>Oh no...{error.message}</p>;

  const products = data.products.data;

  console.log(data);

  return (
    <SwiperContainer tema={tema}>
      {/* <div className="swiper-products">
        {products.map((product) => (
          <div key={product.attributes.slug} tema={tema}>
            <Product product={product} tema={tema}></Product>
          </div>
        ))}
            <div className="ver-mas"></div>

      </div> */}
      <div className="swiper-products">
        {products.map((product, index) => (
          <div key={product.attributes.slug} tema={tema}>
            {index === products.length - 1 ? (
              <div className="ver-mas">
                <h3>Ver más</h3>
              </div>
            ) : (
              <Product product={product} tema={tema} />
            )}
          </div>
        ))}
      </div>
    </SwiperContainer>
  );
};

export default ProductsHome;

const SwiperContainer = styled.div`
  width: 100%;
  height: 19rem;

  @media (max-width: 700px) {
    .swiper-products {
      position: relative;
      overflow-x: scroll;
      height: 100%;
      display: flex;
      align-items: center;
    }

    .ver-mas {
      width: 38vw;
      height: 50vw;
      margin: 0 1rem;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background: ${(props) =>
        props.tema === "light" ? "var(--test)" : "var(--cards_dark)"};
    }

    .ver-mas h3 {
      color: ${(props) =>
        props.tema === "light" ? "var(--primary_color)" : "white"};
      font-weight: 300;
      font-size: 0.9rem;
    }

    .swiper-products::-webkit-scrollbar {
      height: 0px;
      background-color: transparent;
    }
  }
`;
