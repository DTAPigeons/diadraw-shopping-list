import React from 'react';

const styles ={
    backgroundColor: 'lightgray',
    height: '70px',
    width: '100%',
    position: 'fixed',
    top: 0,
    textAlign: 'left'
}

export function Header(props){
    return(
        <>
    <div className="Header" style={styles}>
    <h1> Shopping List</h1>
    </div> 
    </>
    );
    
}