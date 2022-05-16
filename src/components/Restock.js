import React, { setState, useState, Component } from "react";
import GameRestock from "./Restock/GameRestock";
import ConsoleRestock from "./Restock/ConsoleRestock";
import ShirtRestock from "./Restock/ShirtRestock";

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
