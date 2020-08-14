import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemSelectedAction, updateListItemAction, selectItemFromDataBaseAction, cleareUpdateItemAction, toggleCatologAction } from '../../../core/redux/actions/update-list-item-actions/actions';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createListItemComponent } from '../../../core/component-helpers/component-generator';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

export function UpdateShopingListItem(props){
    const dispatch = useDispatch();

    const catalog = useSelector(state=> state.catalogReducer.catalog);
    const selectedItem = useSelector(state => state.updateListItemReducer.selectedItem);
    const updated = useSelector(state => state.updateListItemReducer.updated);
    const [statusMessage, setStatusMessage] = useState("");
    const catalogToggled = useSelector(state=> state.updateListItemReducer.catalogToggled);

    let {id} = useParams();

    useEffect(()=>{
        if(id && !selectedItem.id){
            dispatch(selectItemFromDataBaseAction(id));
        }
        return function cleanUp(){
            if(updated){
                dispatch(cleareUpdateItemAction());
            }
            
        }
    }, [id, selectedItem.id, dispatch])

    const onClick = (item)=>{
        dispatch(itemSelectedAction({...selectedItem, name: item.name}));
    }

    const onSubmit = (event) =>{
        event.persist();
        if(!selectedItem|| !selectedItem.name || selectedItem.name==""){
            setStatusMessage("Invalid Item");
            return;
        }

        dispatch(updateListItemAction(selectedItem))
    }

    const onInputChange = (event) =>{
        event.persist();

        dispatch(itemSelectedAction( {...selectedItem, name: event.target.value}));
    }

    const catalogItemChild = (item, key)=>{
        return createListItemComponent(item, key, onClick);
    }

    const toggleCatalog = ()=>{
        dispatch(toggleCatologAction());
    }
    
    return(
        <>
        {updated && <Redirect to="/"/>}
        <span>{statusMessage}</span>
        <Grid container spacing={1} justify="space-between">
        <Grid item xs={12}>
        <Typography variant="h5" align="left">
        Add new product to shopping list
        </Typography>
        </Grid>
        <Grid item xs={11}>
        <TextField fullWidth type="text" name="name" variant="filled" id="name" onChange={onInputChange} value={selectedItem.name}/>
        </Grid>
        <Grid item xs={2}>
        <Button variant="contained" color="primary" onClick={onSubmit}>Save Item</Button>
        </Grid>
        <Grid item xs={2}>
        <Link to="/"><Button variant="contained" color="secondary">Cancel</Button></Link>
        </Grid>
        <Grid item xs={12}>
        <Button color="primary" onClick={toggleCatalog}>
        Chose product from catalog
        </Button>

        </Grid>
        {console.log(catalogToggled)}
        {catalogToggled && 
        <Grid item xs={12}>
        <ItemList items={catalog} childComponent={catalogItemChild}></ItemList>
        </Grid>
        }
        </Grid>
        </>
    )
}