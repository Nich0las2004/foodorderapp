import { Fragment, useState, useEffect } from "react";
import classes from "./Product.module.css";

const Product = (props) => {
  const [productsNum, setProductsNum] = useState(props.count);

  return productsNum > 0 && (
    <Fragment>
      <div className={classes.productsInfo}>
        {/* left part */}
        <div className={classes.toLeft}>
          <h2>{props.name}</h2>
          <div className={classes.toLeftCenter}>
            <p className={classes.price}>${props.price}</p>
            <button className={classes.foodCount} type="button">
              &#10005; {productsNum}
            </button>
          </div>
        </div>
        {/* right part */}
        <div className={classes.modalBtns}>
          <button
            onClick={() => {
              setProductsNum(productsNum - 1);
              props.updateTotalPrice(props.price, -1);
            }}
            className={classes.btn1}
          >
            &#x2212;
          </button>
          <button
            onClick={() => {
              setProductsNum(productsNum + 1);
              props.updateTotalPrice(props.price, 1);
            }}
            className={classes.btn2}
          >
            &#43;
          </button>
        </div>
      </div>
      <hr className={classes.line}></hr>
    </Fragment>
  );
};

export default Product;
