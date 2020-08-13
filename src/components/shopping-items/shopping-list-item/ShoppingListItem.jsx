import React from 'react';
import './ShoppingListItem.css';
import Paper from '@material-ui/core/Paper';

export function ShoppingListItem({item, onclick}){
    return(
        <Paper elevation={1}>
         <div className="list-item" onClick={()=>onclick(item)}>
            <span>{item.name}</span>
        </div>
        </Paper>

    )
}