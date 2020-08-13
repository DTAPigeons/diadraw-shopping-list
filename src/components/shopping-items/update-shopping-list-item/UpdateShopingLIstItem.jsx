import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemSelectedAction, updateListItemAction, selectItemFromDataBaseAction, cleareUpdateItemAction } from '../../../core/redux/actions/update-list-item-actions/actions';
import { ItemList } from '../item-list/ItemList';
import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

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
    }, [id, dispatch])

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


    return(
        <>
        {updated && <Redirect to="/"/>}
        <span>{statusMessage}</span>
        <input type="text" name="name" id="name" className="form-control" onChange={onInputChange} value={selectedItem.name}/>
        <button className="btn btn-success" onClick={onSubmit}>Save Item</button>
        <br/>
        <ItemList items={catalog} onclick={onClick}></ItemList>
        </>
    )
}