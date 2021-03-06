import { useDispatch, useSelector } from 'react-redux';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { Link } from 'react-router-dom';
import { toggleEditAction } from '../../../core/redux/actions/shopping-list-actions/actions';
import Button from '@material-ui/core/Button';
import { creatShoppingListItemComponent } from '../../../core/component-helpers/component-generator';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export function ShoppingList(props) {
    const dispatch = useDispatch();

    const shoppingList = useSelector(state=> state.shoppingListReducer.shoppingList);


    const listItemChild = (item, key)=>{
        return creatShoppingListItemComponent(item, key);
    }

    const toggleEdit = ()=>{
        dispatch(toggleEditAction());
    }

    return(
        <>
        <Grid container justify='flex-end'>
        <Grid item xs={1}><Link to="/add"><Button  id="add-item-button" variant="contained" color="primary">+</Button></Link></Grid>
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