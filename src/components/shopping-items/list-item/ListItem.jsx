import React from 'react';
import './ListItem.css';
import Paper from '@material-ui/core/Paper';

export function ListItem({item, onClick}){
    return(
        <Paper elevation={1}>
         <div className="list-item" onClick={()=>onClick(item)}>
            <span>{item.name}</span>
        </div>
        </Paper>

    )
}