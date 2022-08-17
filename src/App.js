import React from "react";
import "./App.css";
import Wrapper from "./components/Wrapper/Wrapper";
const App = () => {
  return (
    <>
      <main className="app">
        <h1>Tic Tac Toe</h1>
        <section className="container">
          <Wrapper />
        </section>
      </main>
    </>
  );
};

export default App;
