import { Fragment, useState } from "react";
import classes from "./NavButton.module.css";
import Modal from "../../container/Modal/Modal";
import CartIcon from "../CartIcon/CartIcon";

const NavButton = (props) => {
  const [openModal, setOpenModal] = useState(false)

  const productsCount = props.firstFoodValue+props.secondFoodValue+props.thirdFoodValue+props.fourthFoodValue

  return (
    <Fragment>
      <button onClick={() => {setOpenModal(true)}} type="button" className={classes.cartBtn}>
        <div className={classes.text}>
          <CartIcon />Your Cart <span className={classes.count}>{productsCount}</span>
        </div>
      </button>
      {openModal && <Modal closeModal={setOpenModal} products={[props.firstFoodValue, props.secondFoodValue, props.thirdFoodValue, props.fourthFoodValue]}  />}
    </Fragment>
  );
};

export default NavButton;