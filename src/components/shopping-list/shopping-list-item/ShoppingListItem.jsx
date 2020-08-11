import React from 'react';

export function ShoppingListItem({item, onclick}){
    return(
        <div className="list-item" onclick={()=>onclick(item)}>
            <span>{item.name}</span>
        </div>
    )
}