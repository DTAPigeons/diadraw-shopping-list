import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemSelectedAction, updateListItemAction, selectItemFromDataBaseAction, cleareUpdateItemAction } from '../../../core/redux/actions/update-list-item-actions/actions';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { useParams, Redirect, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { createListItemComponent } from '../../../core/component-helpers/component-generator';

export function UpdateShopingListItem(props){
    const dispatch = useDispatch();

    const catalog = useSelector(state=> state.catalogReducer.catalog);
    const selectedItem = useSelector(state => state.updateListItemReducer.selectedItem);
    const updated = useSelector(state => state.updateListItemReducer.updated);
    const [statusMessage, setStatusMessage] = useState("");
    let {id} = useParams();

    useEffect(()=>{
        if(id && !selectedItem.id){
            dispatch(selectItemFromDataBaseAction(id));
        }
        return function cleanUp(){
            dispatch(cleareUpdateItemAction());
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
        return createListItemComponent(item, key, onClick)
    }

    
    return(
        <>
        {updated && <Redirect to="/"/>}
        <span>{statusMessage}</span>

        <TextField type="text" name="name" id="name" onChange={onInputChange} value={selectedItem.name}/>
        <Button variant="contained" color="primary" onClick={onSubmit}>Save Item</Button>
        <Link to="/"><Button variant="contained" color="secondary">Cancel</Button></Link>
        <br/>
        <ItemList items={catalog} childComponent={catalogItemChild}></ItemList>
        </>
    )
}