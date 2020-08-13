import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { Link } from 'react-router-dom';
import { selectShoppingItemAction, deleteShoppingListItemAction, markItemAsBoughtAction, clearSelectionAction } from '../../../core/redux/actions/shopping-list-actions/actions';

export function ShoppingList(props) {
    const dispatch = useDispatch();

    const shoppingList = useSelector(state=> state.shoppingListReducer.shoppingList);
    const selectedItem = useSelector(state=> state.shoppingListReducer.selectedItem);

    useEffect(() => {
        return () => {
            dispatch(clearSelectionAction());
        };
    }, [dispatch]);

    const onClick = (item) =>{
        dispatch(selectShoppingItemAction(item));
    }

    const onDelete = ()=>{
        dispatch(deleteShoppingListItemAction(selectedItem));
    }

    const onMarkAsBought = ()=>{
        dispatch(markItemAsBoughtAction(selectedItem));
    }

    return(
        <>
        {selectedItem && <span> {selectedItem.name} </span>}
        {(selectedItem && !selectedItem.bought) && <Link to={'/add/'+selectedItem.id}><button className="btn btn-success">Edit</button></Link>}
        {selectedItem && <button className="btn btn-success" onClick={onDelete}>Delete</button>}
        {(selectedItem && !selectedItem.bought) && <button className="btn btn-success" onClick={onMarkAsBought}>Mark As Bought</button>}
        <Link to="/add"><button className="btn btn-success">+</button></Link>
        <h2>To buy:</h2>
        <br/>
        {shoppingList && <ItemList items={shoppingList.filter(item=>!item.bought)} onclick={onClick}></ItemList>}
        <br/>
        <h2>Bought:</h2>
        {shoppingList && <ItemList items={shoppingList.filter(item=>item.bought)} onclick={onClick}></ItemList>}
        </>
    )
}