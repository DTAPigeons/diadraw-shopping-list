import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FETCH_CATALOG } from '../../../core/redux/actions/catalog-actions/action-types';
import { ITEM_SELECTED } from '../../../core/redux/actions/update-list-item-actions/action-types';
import { ItemList } from '../item-list/ItemList';
import React from 'react';

export function UpdateShopingListItem({item}){
    const dispatch = useDispatch();

    const catalog = useSelector(state=> state.catalogReducer.catalog);
    const selectedItem = useSelector(state => state.updateListItemReducer.selectedItem);

    useEffect(() => {
        dispatch({type: FETCH_CATALOG})
    }, [dispatch]);

    const onClick = (item)=>{
        dispatch({type: ITEM_SELECTED, payload: item})
    }

    const onInputChange = (event) =>{
        event.persist();

        dispatch({type: ITEM_SELECTED, payload: {...selectedItem, name: event.target.value}});
    }

    return(
        <>
        <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} value={selectedItem.name}/>
        {console.log(Object.entries(catalog))}
        <br/>
        <ItemList items={Object.entries(catalog)} onclick={onClick}></ItemList>
        </>
    )
}