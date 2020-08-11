import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CATALOG } from '../../../core/redux/actions/catalog-actions/action-types';
import { ITEM_SELECTED, UPDATE_LIST_ITEM } from '../../../core/redux/actions/update-list-item-actions/action-types';
import { ItemList } from '../item-list/ItemList';
import React from 'react';

export function UpdateShopingListItem({item}){
    const dispatch = useDispatch();

    const catalog = useSelector(state=> state.catalogReducer.catalog);
    const selectedItem = useSelector(state => state.updateListItemReducer.selectedItem);
    const updated = useSelector(state => state.updateListItemReducer.updated);
    const [statusMessage, setStatusMessage] = useState("");

    useEffect(() => {
        dispatch({type: FETCH_CATALOG});
        
    }, [dispatch]);

    const onClick = (item)=>{
        dispatch({type: ITEM_SELECTED, payload: item});
    }

    const onSubmit = (event) =>{
        event.persist();
        if(!selectedItem|| !selectedItem.name || selectedItem.name==""){
            setStatusMessage("Invalid Item");
            return;
        }

        dispatch({type: UPDATE_LIST_ITEM, payload: selectedItem})
    }

    const onInputChange = (event) =>{
        event.persist();

        dispatch({type: ITEM_SELECTED, payload: {...selectedItem, name: event.target.value}});
    }

    const checkIfUpdated = () =>{
        if(updated){
            setStatusMessage("Greate Success!");
        }
    }

    return(
        <>
        <span>{statusMessage}</span>
        <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} value={selectedItem.name}/>
        <button className="btn btn-success" onClick={onSubmit}>Save Item</button>
        {console.log(Object.entries(catalog))}
        <br/>
        <ItemList items={Object.entries(catalog)} onclick={onClick}></ItemList>
        </>
    )
}