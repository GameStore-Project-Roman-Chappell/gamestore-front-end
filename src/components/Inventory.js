import React from 'react';
import ConsoleInventory from './InventorySection/ConsoleInventory';
import GameInventory from './InventorySection/GameInventory';
import ShirtInventory from './InventorySection/ShirtInventory';

export default function Inventory() {
    return (
        <div>
            <ConsoleInventory />
            <GameInventory />
            <ShirtInventory />
        </div>
    )
}