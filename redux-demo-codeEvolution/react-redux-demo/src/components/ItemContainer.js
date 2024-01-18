import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIcecream } from "../redux";

function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item} </h2>
      <button onClick={props.buyItem}>Buy {props.type}</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.icecream.numOfIcecreams;

  return {
    item: itemState,
    type: ownProps.cake ? "Cake" : "Icecream",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream());

  return { buyItem: dispatchFunction };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
