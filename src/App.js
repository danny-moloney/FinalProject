import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <Router>
      <div className="App">

<Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/features">Features</Nav.Link>
      <Nav.Link href="/pricing">Pricing</Nav.Link>
      <Nav.Link href="/entry">Entry</Nav.Link>
    </Nav>
  </Navbar>

  <br />
  <Switch>
    <Route path="/" component={ Content } exact/>
    <Route path="/features" component={ Header } exact/>
    <Route path="/pricing" component={ Footer } exact/>

  </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
