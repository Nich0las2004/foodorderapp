import { useState } from "react";
import Nav from "./nav bar/Nav/Nav";
import Container from "./container/Container";

const App = () => {
  const [grandparentValue, setGrandparentValue] = useState(0);
  const [grandparentValue2, setGrandparentValue2] = useState(0);
  const [grandparentValue3, setGrandparentValue3] = useState(0);
  const [grandparentValue4, setGrandparentValue4] = useState(0);

  const handleChildValue = (value) => {
    setGrandparentValue(parseInt(grandparentValue) + parseInt(value));
  };
  const handleChildValue2 = (value) => {
    setGrandparentValue2(parseInt(grandparentValue2) + parseInt(value));
  };
  const handleChildValue3 = (value) => {
    setGrandparentValue3(parseInt(grandparentValue3) + parseInt(value));
  };
  const handleChildValue4 = (value) => {
    setGrandparentValue4(parseInt(grandparentValue4) + parseInt(value));
  };

  return (
    <div>
      <Nav firstFoodValue={grandparentValue} secondFoodValue={grandparentValue2} thirdFoodValue={grandparentValue3} fourthFoodValue={grandparentValue4} />
      <Container onChildValue={handleChildValue} onChildValue2={handleChildValue2} onChildValue3={handleChildValue3} onChildValue4={handleChildValue4} />
    </div>
  );
};

export default App;
