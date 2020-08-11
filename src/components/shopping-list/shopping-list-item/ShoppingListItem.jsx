import React from 'react';
import './ShoppingListItem.css';

export function ShoppingListItem({item, onclick}){
    return(
        <div className="list-item" onClick={()=>onclick(item)}>
            <span>{item.name}</span>
        </div>
    )
}