import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatalogAction } from './core/redux/actions/catalog-actions/fetch-catalog-action';
import { FETCH_CATALOG } from './core/redux/actions/catalog-actions/action-types';

function App() {

  const dispatch = useDispatch();

  const catalog = useSelector(state=> state.catalogReducer.catalog);

  useEffect(() => {
    dispatch({type: FETCH_CATALOG})
  }, [dispatch]);

  return (
    <>
    {console.log(catalog)}
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;
