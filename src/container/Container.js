import classes from "./Container.module.css";
import { Fragment } from "react";
import meals from "../meals.jpg";
import DummyText from "./DummyText/DummyText";
import Menu from "./Menu/Menu";

const Container = (props) => {
  return (
    <Fragment>
      <div className={classes.main}>
        <DummyText />
        
        <img src={meals} className={classes.image}></img>

        <Menu onChildValue={props.onChildValue} onChildValue2={props.onChildValue2} onChildValue3={props.onChildValue3} onChildValue4={props.onChildValue4} />
      </div>
    </Fragment>
  );
};

export default Container;
