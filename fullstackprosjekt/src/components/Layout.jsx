import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import './home.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div style={{height: '100vh', backgroundColor: '#f5f5f5'}}>
        <NavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
