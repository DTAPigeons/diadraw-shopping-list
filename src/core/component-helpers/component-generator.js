import React from 'react';
import { ListItem } from '../../components/shopping-items/list-item/ListItem';

export function createListItemComponent(item, key, onClick){
    const onClickPayload = (payloadItem) =>{
        onClick(payloadItem);
    } 
    return React.createElement(ListItem,{
        key: key,
        item: item,
        onClick: onClickPayload
    })
}