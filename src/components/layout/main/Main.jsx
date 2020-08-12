import React from 'react';
import './Main.css';
import { UpdateShopingListItem } from '../../shopping-items/update-shopping-list-item/UpdateShopingLIstItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";



  export function Main(props){
      return(
          <div className="main">
          <Switch>
              <Route path="/add">
              <UpdateShopingListItem/>
              </Route>
          </Switch>
          </div>
      )
  }