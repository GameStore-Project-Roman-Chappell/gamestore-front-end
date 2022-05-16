import React, { setState, useState, Component } from "react";
import GameRestock from "./GameRestock";
import ConsoleRestock from "./ConsoleRestock";
import ShirtRestock from "./ShirtRestock";

export default function Restock() {
 

  return (
    <div className='restockForm'>

    <ConsoleRestock />
    <GameRestock />
    <ShirtRestock />

      <a href='/'>Back to Home</a>
    </div>
  );
}
