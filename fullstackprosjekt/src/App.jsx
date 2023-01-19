import logo from './logo.svg';
import './App.css';
import AppRoutes from './AppRoutes';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import React, { Component } from 'react'
import { SendInn } from './components/SendInn';

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
    <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </Layout>
    );
  }
}



