import React from "react";
import classes from "./Square.module.css";
const Square = ({ id, side, setSide, arr, setArr }) => {
  const handleSelect = (e) => {
    if (e.target.value === "") {
      setArr((prevArr) =>
        prevArr.map((element, index) => {
          if (+e.target.id === index + 1) return side ? "X" : "0";
          else return element;
        })
      );
      setSide((prevSide) => !prevSide);
    }
  };

  return (
    <input
      type="text"
      className={classes.square}
      id={id}
      onClick={handleSelect}
      value={arr[id - 1]}
      readOnly
    />
  );
};

export default Square;
