import { Fragment } from "react";
import classes from "./DummyText.module.css";

const DummyText = () => {
  return (
    <Fragment>
      <div className={classes.textContainer}>
        <div className={classes.wholeText}>
          <h1 className={classes.textHeader}>
            Delicious Food, Delivered To You
          </h1>
          <p className={classes.textPartOne}>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious lunch or dinner at home.
          </p>
          <p className={classes.textPartTwo}>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by experienced chefs!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default DummyText;
