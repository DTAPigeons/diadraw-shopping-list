import React from 'react';
import './Main.css';
import { UpdateShopingListItem } from '../../shopping-items/update-shopping-list-item/UpdateShopingLIstItem';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { ShoppingList } from '../../shopping-items/shopping-list/ShopingList';



  export function Main(props){
      return(
          <div className="main">
          <Switch>
            <Route exact  path="/">
                <ShoppingList/>
            </Route>
            <Route exact path="/add">
              <UpdateShopingListItem/>
            </Route>
          </Switch>
          </div>
      )
  }