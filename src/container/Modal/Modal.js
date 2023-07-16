import { Fragment, useState, useEffect } from "react";
import classes from "./Modal.module.css";
import Product from "./Product/Product";

const Modal = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);

  const allProducts = [
    {
      price: 22.99,
      name: "Sushi",
      count: props.products[0],
      id: 1,
    },
    {
      price: 16.5,
      name: "Schnitzel",
      count: props.products[1],
      id: 2,
    },
    {
      price: 12.99,
      name: "Barbecue Burger",
      count: props.products[2],
      id: 3,
    },
    {
      price: 18.99,
      name: "Green Bowl",
      count: props.products[3],
      id: 4,
    },
  ];

  const fullPrice =
    props.products[0] * allProducts[0]["price"] +
    props.products[1] * allProducts[1]["price"] +
    props.products[2] * allProducts[2]["price"] +
    props.products[3] * allProducts[3]["price"];

  useEffect(() => {
    setTotalPrice(fullPrice)
  }, [])

  const updateTotalPrice = (productPrice, countChange) => {
    setTotalPrice(totalPrice + productPrice * countChange);
  };

  return (
    <Fragment>
      <div className={classes.backdrop}>
        <div className={classes.modal}>
          {allProducts.map((product) => {
            if (product.count != 0)
              return (
                <Product
                  updateTotalPrice={updateTotalPrice}
                  key={product.id}
                  count={product.count}
                  price={product.price}
                  name={product.name}
                />
              );
          })}
          <div className={classes.totalPrice}>
            <h2>Total Amount</h2>
            {/* <h2>${fullPrice.toFixed(2)}</h2> */}
            <h2>${totalPrice.toFixed(2)}</h2>
          </div>
          <button
            className={classes.closeBtn}
            onClick={() => {
              props.closeModal(false);
            }}
          >
            Close
          </button>
          <button
            className={classes.orderBtn}
            onClick={() => console.log("Ordering...")}
          >
            Order
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
