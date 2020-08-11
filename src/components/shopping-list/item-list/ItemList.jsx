import React from 'react';
import { ShoppingListItem} from '../shopping-list-item/ShoppingListItem';

const listStyles = {
    margin: '5px',
    flexWrap: 'wrap'
};

export function ItemList({items, onclick}){
    return (
        <div className="item-list-wapper" style={listStyles}>
        { items.map(item => <ShoppingListItem key={item[1].id} item={item[1]} onclick={onclick}/>)}
        </div>
    )
}