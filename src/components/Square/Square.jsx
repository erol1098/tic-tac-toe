import React from "react";
import classes from "./Square.module.css";
const Square = ({ id, side, setSide }) => {
  const handleSelect = (e) => {
    if (e.target.textContent === "") {
      side ? (e.target.textContent = "X") : (e.target.textContent = "O");
      setSide((prevSide) => !prevSide);
    }

    console.log(e.target.id);
  };

  return <p className={classes.square} id={id} onClick={handleSelect}></p>;
};

export default Square;
