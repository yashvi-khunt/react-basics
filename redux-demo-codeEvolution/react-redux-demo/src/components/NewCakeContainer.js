import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer() {
  const [number, setNumber] = useState(1);
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of Cakes - {numOfCakes} </h2>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={() => dispatch(buyCake(number))}>
        Buy {number} Cake
      </button>
    </div>
  );
}

export default NewCakeContainer;
