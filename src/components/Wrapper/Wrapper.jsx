import React, { useState } from "react";
import classes from "./Wrapper.module.css";
import Square from "../Square/Square";
const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Wrapper = () => {
  const [side, setSide] = useState(true);
  return (
    <section className={classes.wrapper}>
      {indexes.map((index) => (
        <Square key={index} id={index} side={side} setSide={setSide} />
      ))}
    </section>
  );
};

export default Wrapper;
