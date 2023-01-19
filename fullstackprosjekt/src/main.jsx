import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { SendInn } from "./components/SendInn";
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.css';

//const root = ReactDOM.createRoot(document.getElementById('root'));

const baseUrl = '/';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>);


