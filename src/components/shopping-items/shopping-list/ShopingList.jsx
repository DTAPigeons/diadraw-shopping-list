import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { Link } from 'react-router-dom';
import { selectShoppingItemAction, deleteShoppingListItemAction, markItemAsBoughtAction, clearSelectionAction } from '../../../core/redux/actions/shopping-list-actions/actions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { ListItem } from '../list-item/ListItem';
import { createListItemComponent } from '../../../core/component-helpers/component-generator';

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

    const listItemChild = (item, key)=>{
        return createListItemComponent(item, key, onClick);
    }

    return(
        <>
        {selectedItem && <Paper component='div' variant='outlined'> {selectedItem.name}</Paper> }
        {(selectedItem && !selectedItem.bought) && <Link to={'/add/'+selectedItem.id}><Button variant="contained" color="primary">Edit</Button></Link>}
        {selectedItem && <Button variant="contained" color="primary" onClick={onDelete}>Delete</Button>}
        {(selectedItem && !selectedItem.bought) && <Button variant="contained" color="primary" onClick={onMarkAsBought}>Mark As Bought</Button>}
        <Link to="/add"><Button variant="contained" color="primary">+</Button></Link>
        <h2>To buy:</h2>
        <br/>
        {shoppingList && <ItemList items={shoppingList.filter(item=>!item.bought)} childComponent={listItemChild}></ItemList>}
        <br/>
        <h2>Bought:</h2>
        {shoppingList && <ItemList items={shoppingList.filter(item=>item.bought)} childComponent={listItemChild}></ItemList>}
        </>
    )
}