import { useStateContext } from "../lib/context";
import {
  CartWrapper,
  CartStyle,
  Card,
  CardInfo,
  EmptyStyle,
  Checkout,
  Cards,
} from "../styles/CartStyles";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Quantity2 } from "../styles/ProductDetail";

const Cart = () => {
  //Animation variants

  const cards = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };
  const { cartItems, setShowCart, onAdd, onRemove, totalPrice } =
    useStateContext();

  return (
    <CartWrapper
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      onClick={() => setShowCart(false)}
    >
      <CartStyle
        initial={{ x: "50%" }}
        animate={{ x: "0%" }}
        transition={{ type: "tween" }}
        exit={{ x: "50%" }}
        onClick={(e) => e.stopPropagation()}
      >
        {cartItems.length < 1 && (
          <EmptyStyle
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2>No tienes nada agregado aún</h2>
          </EmptyStyle>
        )}

        <Cards variants={cards} initial="hidden" animate="show" layout>
          {cartItems.length >= 1 &&
            cartItems.map((item) => {
              return (
                <Card layout variants={card} key={item.slug}>
                  <img
                    src={item.image.data.attributes.formats.thumbnail.url}
                    alt={item.title}
                  />
                  <CardInfo>
                    <h3>${item.price.toLocaleString("es-CL")}</h3>
                    <h4>{item.title}</h4>
                    <Quantity2>
                      <span>Cantidad</span>
                      <div className="mas-menos">
                        <button onClick={() => onRemove(item)}>
                          <AiFillMinusCircle></AiFillMinusCircle>
                        </button>
                        <p>{item.quantity}</p>
                        <button onClick={() => onAdd(item, 1)}>
                          <AiFillPlusCircle></AiFillPlusCircle>
                        </button>
                      </div>
                    </Quantity2>
                  </CardInfo>
                </Card>
              );
            })}
        </Cards>
        {cartItems.length >= 1 && (
          <Checkout>
            <h3>Subtotal: ${totalPrice.toLocaleString("es-CL")}</h3>
            <button>Comprar</button>
          </Checkout>
        )}
      </CartStyle>
    </CartWrapper>
  );
};

export default Cart;
