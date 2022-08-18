import React, { useEffect, useState } from "react";
import classes from "./Wrapper.module.css";
import Square from "../Square/Square";
import Modal from "react-modal";
const indexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const customStyles = {
  content: {
    top: "5rem",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    fontSize: "3rem",
    // backgroundColor: "#32ff7e",
    backgroundColor: "#17c0eb",
    width: "100%",
    textAlign: "center",
    height: "7rem",
  },
};
const Wrapper = () => {
  const checkWin = (arr) => {
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
  const [tie, setTie] = useState(false);
  const [arr, setArr] = useState(["", "", "", "", "", "", "", "", ""]);

  const [xScore, setXScore] = useState(0);
  const [oScore, setOScore] = useState(0);

  useEffect(() => {
    checkWin(arr);
    if (arr.every((element) => element !== "")) {
      setTie(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [arr]);

  //? Modal
  Modal.setAppElement("#root");
  const handleClose = () => {
    if (win) {
      !side
        ? setXScore((prevScore) => prevScore + 1)
        : setOScore((prevScore) => prevScore + 1);
    }
    setWin(false);
    setTie(false);
    setSide(true);
    setArr(["", "", "", "", "", "", "", "", ""]);
  };

  const handleReset = () => {
    setWin(false);
    setTie(false);
    setSide(true);
    setArr(["", "", "", "", "", "", "", "", ""]);
  };

  return (
    <>
      <Modal
        isOpen={win || tie}
        style={customStyles}
        onRequestClose={handleClose}
      >
        <p>{win && (!side ? "'X' Side Won" : "'O' Side Won")}</p>
        <p>{tie && !win && "It's a Tie!"}</p>
      </Modal>
      <div className={classes["btn-wrapper"]}>
        <button
          className={classes["btn-new"]}
          onClick={() => {
            handleClose();
            setOScore(0);
            setXScore(0);
          }}
        >
          New Game
        </button>
        <button className={classes["btn-reset"]} onClick={handleReset}>
          Reset
        </button>
      </div>
      <div
        className={classes["x-side"]}
        style={
          side
            ? { backgroundColor: "#5077be", color: "#fff" }
            : { backgroundColor: "#e0eafb", color: "#3d3d3d" }
        }
      >
        <p>'X' Side</p>
        <p>{xScore}</p>
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
            ? { backgroundColor: "#5077be", color: "#fff" }
            : { backgroundColor: "#e0eafb", color: "#3d3d3d" }
        }
      >
        <p>'O' Side</p>
        <p>{oScore}</p>
      </div>
    </>
  );
};

export default Wrapper;
