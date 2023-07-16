import { Fragment, useState } from "react";
import classes from "./Menu.module.css";

const Menu = (props) => {
    const [firstFoodCount, setFirstFoodCount] = useState(1)
    const [secondFoodCount, setSecondFoodCount] = useState(1)
    const [thirdFoodCount, setThirdFoodCount] = useState(1)
    const [fourthFoodCount, setFourthFoodCount] = useState(1)

    const firstFoodHandler = e => {
      setFirstFoodCount(e.target.value)
    }
    const secondFoodHandler = e => {
      setSecondFoodCount(e.target.value)
    }
    const thirdFoodHandler = e => {
      setThirdFoodCount(e.target.value)
    }
    const fourthFoodHandler = e => {
      setFourthFoodCount(e.target.value)
    }

    const firstClickHandler = () => {
      props.onChildValue(firstFoodCount)
    }
    const secondClickHandler = () => {
      props.onChildValue2(secondFoodCount)
    }
    const thirdClickHandler = () => {
      props.onChildValue3(thirdFoodCount)
    }
    const fourthClickHandler = () => {
      props.onChildValue4(fourthFoodCount)
    }

  return (
    <Fragment>
      <div className={classes.menu}>

        {/* First food */}

        <div className={classes.food1}>
          <div className={classes.toLeft}>
            <h2>Sushi</h2>
            <p><i>Finest fish and veggies</i></p>
            <p className={classes.price}>$22.99</p>
          </div>

          <div className={classes.toRight}>
            <div className={classes.toRightTop}>
              <label>
                <b>Amount</b>
              </label>
              <input type="number" value={firstFoodCount} onChange={firstFoodHandler} className={classes.numberInput}></input>
            </div>

            <button onClick={firstClickHandler} className={classes.addBtn}>+ Add</button>
          </div>
          
        </div>
        <hr></hr>

        {/* Second food */}

        <div className={classes.food2}>
          <div className={classes.toLeft}>
            <h2>Schnitzel</h2>
            <p><i>A german specialty!</i></p>
            <p className={classes.price}>$16.50</p>
          </div>

          <div className={classes.toRight}>
            <div className={classes.toRightTop}>
              <label>
                <b>Amount</b>
              </label>
              <input type="number" value={secondFoodCount} onChange={secondFoodHandler} className={classes.numberInput} ></input>
            </div>
            <button onClick={secondClickHandler} className={classes.addBtn} >+ Add</button>
          </div>
        </div>
        <hr></hr>

        {/* Third food */}

        <div className={classes.food3}>
          <div className={classes.toLeft}>
            <h2>Barbecue Burger</h2>
            <p><i>American, raw, meaty</i></p>
            <p className={classes.price}>$12.99</p>
          </div>

          <div className={classes.toRight}>
            <div className={classes.toRightTop}>
              <label>
                <b>Amount</b>
              </label>
              <input type="number" value={thirdFoodCount} onChange={thirdFoodHandler} className={classes.numberInput} ></input>
            </div>

            <button onClick={thirdClickHandler} className={classes.addBtn} >+ Add</button>
          </div>
        </div>
        <hr></hr>

        {/* Fourth food */}

        <div className={classes.food4}>
          <div className={classes.toLeft}>
            <h2>Green Bowl</h2>
            <p><i>Healthy...and green...</i></p>
            <p className={classes.price}>$18.99</p>
          </div>

          <div className={classes.toRight}>
            <div className={classes.toRightTop}>
              <label>
                <b>Amount</b>
              </label>
              <input type="number" value={fourthFoodCount} onChange={fourthFoodHandler} className={classes.numberInput} ></input>
            </div>
            <button onClick={fourthClickHandler} className={classes.addBtn} >+ Add</button>
          </div>
        </div>
        <hr></hr>

      </div>
    </Fragment>
  );
};

export default Menu;