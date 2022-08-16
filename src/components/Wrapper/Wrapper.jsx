import React, { useEffect, useState } from "react";
import classes from "./Wrapper.module.css";
import Square from "../Square/Square";
import Modal from "react-modal";
const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    padding: "5rem",
    // backgroundColor: "rgba(0,0,0,0.6)",
    transform: "translate(-50%, -50%)",
    fontSize: "3rem",
  },
};
const Wrapper = () => {
  const checkWin = () => {
    for (let i = 1; i <= 9; i++) {
      if (arr[i - 1] !== "") {
        //? Horizontal
        if (
          arr[i - 1] === arr[i] &&
          arr[i] === arr[i + 1] &&
          (+i + 2) % 3 === 0
        )
          setWin(true);

        //? Vertical
        if (arr[i - 1] === arr[i + 2] && arr[i - 1] === arr[i + 5])
          setWin(true);

        //? Cross
        if (i === 1) {
          if (arr[0] === arr[4] && arr[0] === arr[8]) setWin(true);
        }
        if (i === 3) {
          if (arr[2] === arr[4] && arr[2] === arr[6]) setWin(true);
        }
      }
    }
  };
  const [win, setWin] = useState(false);
  const [side, setSide] = useState(true);
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);

  useEffect(() => {
    checkWin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arr]);

  //? Modal
  Modal.setAppElement("#root");
  const handleClose = () => {
    setWin(false);
    setSide(true);
    setArr(["", "", "", "", "", "", "", "", ""]);
  };
  return (
    <>
      <Modal isOpen={win} style={customStyles} onRequestClose={handleClose}>
        <p>{!side ? "'X' Side Won" : "'O' Side Won"}</p>
      </Modal>
      <div
        className={classes["x-side"]}
        style={
          side ? { backgroundColor: "#5077be" } : { backgroundColor: "#e0eafb" }
        }
      >
        'X' Side
      </div>
      <section className={classes.wrapper}>
        {indexes.map((index) => (
          <Square
            key={index}
            id={index}
            side={side}
            setSide={setSide}
            arr={arr}
            setArr={setArr}
          />
        ))}
      </section>
      <div
        className={classes["o-side"]}
        style={
          !side
            ? { backgroundColor: "#5077be" }
            : { backgroundColor: "#e0eafb" }
        }
      >
        <p>'O' Side</p>
      </div>
    </>
  );
};

export default Wrapper;
