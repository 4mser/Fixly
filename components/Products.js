

import Link from "next/link";
import { MdShoppingCartCheckout } from 'react-icons/md';
import { ProductStyles, ProductInfo2 } from "../styles/ProductStyle";
import { useStateContext } from "/lib/context";

export default function Product({product, tema}) {
    const {title, price, image, slug } = product.attributes;
    const { onAdd } = useStateContext(); //Obtenemos la función onAdd del contexto

    const handleBuyClick = () => {
        onAdd(product.attributes, 1); //Llamamos la función onAdd con los atributos del producto y la cantidad 1
    }

    return (
        <ProductStyles tema={tema}>
            
            <Link href={`/product/${slug}`} className="image">
                    <img src={image.data.attributes.formats.thumbnail.url}></img>
            </Link>

            <ProductInfo2 tema={tema}>
                <div className="info-div">
                    <h3>${price.toLocaleString('es-CL')}</h3>
                    <h2>{title}</h2>
                </div>

                <div className="icon">
                <MdShoppingCartCheckout onClick={handleBuyClick}></MdShoppingCartCheckout>
                </div>
            </ProductInfo2>

            

        </ProductStyles>
    )
}


