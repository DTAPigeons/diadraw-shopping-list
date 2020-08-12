import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from '../item-list/ItemList';
import React from 'react';

export function ShoppingList(params) {
    const dispatch = useDispatch();

    const shoppingList = useSelector(state=> state.shoppingListReducer.shoppingList);

    return(
        <>
        <h2>To buy:</h2>
        <br/>
        {shoppingList && <ItemList items={shoppingList.filter(item=>!item.bought)}></ItemList>}
        <br/>
        <h2>Bought:</h2>
        {shoppingList && <ItemList items={shoppingList.filter(item=>item.bought)}></ItemList>}
        </>
    )
}