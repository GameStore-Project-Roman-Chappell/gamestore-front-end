import React from "react";
import GtaV from "../assets/gtav.jpg";
import Horizon from "../assets/horizonWest.jpg";
import XboxX from "../assets/xboxX.jpeg";
import Ps5 from "../assets/ps5.jpg";
import NintendoSwitch from "../assets/nintendoSwitch.jpg";
import Kirby from "../assets/kirbyLand.jpg";
import LegoStar from "../assets/legoStar.jpg";
import eldenRing from "../assets/eldenRing.jpg";
import kingdomShirt from "../assets/kingdomShirt.jpg";
import fortniteShirt from "../assets/fortniteShirt.jpg";
import zeldaShirt from "../assets/zeldaShirt.jpg";
import dragonShirt from "../assets/dragonShirt.jpg";
import kombatShirt from "../assets/kombatShirt.jpg";
import kirbyShirt from "../assets/kirbyShirt.jpg";
import sonicShirt from "../assets/sonicShirt.jpg";
import wwe from "../assets/wwe.jpg";

export default function Shop() {
  return (
    <div className='shop'>


      <div className='popular'>
        <a href="/gameOrder" className='popularTitle'>Popular Games</a>
        <div className='popularGames'>
          <img alt='Gta cover art' src={GtaV}></img>
          <img alt='Horizon cover art' src={Horizon}></img>
          <img alt='Kirby cover art' src={Kirby}></img>
          <img alt='Lego Star Wars cover art' src={LegoStar}></img>
          <img alt="Elden Ring Cover Art" src={eldenRing}></img>
          <img alt="WWE cover art" src={wwe}></img>
        </div>
      </div>

    <div className="consoles">
        <a href="consoleOrder" className="consoleTitle">Consoles</a>
        <div className="consolesSale">
            <img alt="Xbox Series X" src={XboxX}></img>
            <img alt="PS5 Console" src={Ps5}></img>
            <img alt="Nintendo Switch" src={NintendoSwitch}></img>
        </div>
    </div>

    <div className="shirts">
        <a href="shirtOrder" className='shirtTitle'>T-Shirts</a>
        <div className="shirtSale">
            <img alt="Kingdom Hearts Shirt" src={kingdomShirt}></img>
            <img alt="Fortnite Shirt" src={fortniteShirt}></img>
            <img alt="Zelda Shirt" src={zeldaShirt}></img>
            <img alt="Dragon Ball Z Shirt" src={dragonShirt}></img>
            <img alt="Mortal Kombat shirt" src={kombatShirt}></img>
            <img alt="kirby shirt" src={kirbyShirt}></img>
            <img alt="Sonic Shirt" src={sonicShirt}></img>
        </div>
    </div>


    </div>
  );
}
