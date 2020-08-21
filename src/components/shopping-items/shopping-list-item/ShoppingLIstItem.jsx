import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from '../list-item/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import { Grid, IconButton } from '@material-ui/core';
import { updateListItemAction } from '../../../core/redux/actions/update-list-item-actions/actions';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { deleteShoppingListItemAction } from '../../../core/redux/actions/shopping-list-actions/actions';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export function ShoppingListItem({item}){
    const dispatch = useDispatch();
    const editToggled = useSelector(state=> state.shoppingListReducer.editToggled);

    const switchBoughtStatus = () =>{
        item.bought = !item.bought;
        dispatch(updateListItemAction(item))
    }

    const deleteItem = () =>{
        dispatch(deleteShoppingListItemAction(item));
    }

    const onDeleteClicked = () =>{
        const alertOptions = { 
        title: 'Delete?',
        message: ('Do you want to delete '+item.name),
        buttons: [
          {
            label: 'Yes',
            onClick: () => {deleteItem()}
          },
          {
            label: 'No',
            onClick: () => { return}
          }
        ]}

        confirmAlert(alertOptions);
    }

    return(
        <>
        <Grid container justify='flex-start'>
        <Grid item>
        <Checkbox className="check-box" checked={item.bought} inputProps={{ 'aria-label': 'primary checkbox' }} onChange={switchBoughtStatus}/>
        </Grid>
        <Grid item>
        <ListItem item={item} onClick={(item)=>{return;}}/>
        </Grid>
        <Grid item>
        { (editToggled && !item.bought) && <Link to={'/add/'+item.id}><EditIcon/></Link>}
        </Grid>
        <Grid item>
        { editToggled && 
        <IconButton aria-label="delete" onClick={onDeleteClicked}>
        <HighlightOffIcon/>
        </IconButton>}        
        </Grid>
        </Grid>           
        </>
    )
}