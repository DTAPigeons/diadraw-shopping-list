import React from 'react';
import { ListItem} from '../list-item/ListItem';

const listStyles = {
    margin: '5px',
    flexWrap: 'wrap'
};


export function ItemList({items, childComponent}){
    const childItems = items.map(item => childComponent(item, item.id));

    return (
        <div className="item-list-wapper" style={listStyles}>
        { childItems}
        </div>
    )
}