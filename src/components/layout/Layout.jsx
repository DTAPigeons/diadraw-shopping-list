import React from 'react';
import { Main } from './Main';
import { Header } from './Header';
import { Footer } from './Footer';

export function Layout(props){
    return(
        <div className="Layout">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
}