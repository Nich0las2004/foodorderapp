import classes from "./Nav.module.css";
import { Fragment } from "react";
import NavButton from "../NavButton/NavButton";

const Nav = (props) => {
  return (
    <Fragment>
        <nav>
            <ul>
                <h1 className={classes.header}>ReactMeals</h1>
                <NavButton firstFoodValue={props.firstFoodValue} secondFoodValue={props.secondFoodValue} thirdFoodValue={props.thirdFoodValue} fourthFoodValue={props.fourthFoodValue} />
            </ul>
        </nav>
    </Fragment>
  );
};

export default Nav;
