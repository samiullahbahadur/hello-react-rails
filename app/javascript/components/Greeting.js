import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);

  return (
    <div>
      <h1> {greeting} </h1>
    </div>
  );
};

export default Greeting;