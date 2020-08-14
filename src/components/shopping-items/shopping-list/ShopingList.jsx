import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { Link } from 'react-router-dom';
import { selectShoppingItemAction, deleteShoppingListItemAction, markItemAsBoughtAction, clearSelectionAction, toggleEditAction } from '../../../core/redux/actions/shopping-list-actions/actions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { createListItemComponent, creatShoppingListItemComponent } from '../../../core/component-helpers/component-generator';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export function ShoppingList(props) {
    const dispatch = useDispatch();

    const shoppingList = useSelector(state=> state.shoppingListReducer.shoppingList);
    const selectedItem = useSelector(state=> state.shoppingListReducer.selectedItem);

    useEffect(() => {
        return () => {
            dispatch(clearSelectionAction());
        };
    }, [dispatch]);

    const listItemChild = (item, key)=>{
        return creatShoppingListItemComponent(item, key);
    }

    const toggleEdit = ()=>{
        dispatch(toggleEditAction());
    }

    return(
        <>
        <Grid container justify='flex-end'>
        <Grid item xs={1}><Link to="/add"><Button variant="contained" color="primary">+</Button></Link></Grid>
        <Grid item xs={1}><Button variant="contained" color="primary" onClick={toggleEdit}>Edit</Button></Grid>
        <Grid item xs={12}>
        <Typography variant="h5" align="left">
        What we need:
        </Typography>
        </Grid>
        <Grid item xs={12}>
        <br/>
        {shoppingList && <ItemList items={shoppingList.filter(item=>!item.bought)} childComponent={listItemChild}></ItemList>}
        <br/>
        </Grid>
        <Grid item xs={12}>
        <Typography variant="h5" align="left">
        Bought:
        </Typography>
        </Grid>
        <Grid item xs={12}>
        {shoppingList && <ItemList items={shoppingList.filter(item=>item.bought)} childComponent={listItemChild}></ItemList>}
        </Grid>
        </Grid>
        </>
    )
}