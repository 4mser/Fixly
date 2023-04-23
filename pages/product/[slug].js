

import { useQuery } from "urql"
import { useRouter } from "next/router"
import { GET_PRODUCT_QUERY } from "/lib/query"
import { DetailsStyle, ProductInfo, Quantity, Buy } from "/styles/ProductDetail";
import { useStateContext } from "/lib/context";

//Icons
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai'

export default function ProductDetails({tema}) {

    //Use state
    const { qty, increaseQty, decreaseQty, onAdd, isBuyClicked } = useStateContext()

    //Fetch slug
    const router = useRouter();
    const { query } = router;
    const slug = query?.slug; // El operador "?" comprueba si query es undefined antes de acceder a "slug"

    //Fetch Graphql data
    const [results] = useQuery({
        query: GET_PRODUCT_QUERY,
        variables: { slug: slug }
    })

    const { data, fetching, error } = results

    //Check for the data coming in
    if (fetching) return <p>Loading...</p>
    if (error) return <p>Oh no... {error.message}</p>

    const { title, description, image } = data.products.data[0].attributes

    const handleBuyClick = () => {
        onAdd(data.products.data[0].attributes, qty);
    }

    return (
        <DetailsStyle tema={tema}>
            <img src={image.data.attributes.formats.thumbnail?.url} alt="" />
            <ProductInfo tema={tema}>
                <h3>{title}</h3>
                <p>{description}</p>

                <Quantity tema={tema}>
                    <span>Cantidad</span>
                    <div className="mas-menos">
                    <button><AiFillMinusCircle onClick={decreaseQty}></AiFillMinusCircle></button>
                    <p>{qty}</p>
                    <button><AiFillPlusCircle onClick={increaseQty}></AiFillPlusCircle></button>
                    </div>
                </Quantity>

                <Buy onClick={handleBuyClick} disabled={isBuyClicked}>Añadir al carrito</Buy>
                {isBuyClicked && <p>Producto añadido al carrito</p>}

            </ProductInfo>

        </DetailsStyle>
    )
}
