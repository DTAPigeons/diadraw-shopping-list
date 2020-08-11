import React from 'react';
import './Main.css';
import { UpdateShopingListItem } from '../../shopping-list/update-shopping-list-item/UpdateShopingLIstItem';



  export function Main(props){
      return(
          <div className="main">
          <UpdateShopingListItem></UpdateShopingListItem>
          </div>
      )
  }