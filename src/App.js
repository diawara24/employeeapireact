import { Component } from 'react';
import axios from 'axios';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import ListEmployee from './component/ListEmployee';
import AddEmployee from './component/AddEmployee';

import { BrowserRouter as Router, Switch, Routes, Route, Link } from 'react-router-dom'

class App extends Component{
  render(){
    return (
      <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="dark" variant="dark">
              <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">
                 Employee API
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/add-employe'} className="nav-link">
                    Add Employe
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/list-employe'} className="nav-link">
                    List Employe
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route
                    exact
                    path="/list-employe"
                    element={<ListEmployee />} 
                  />
                  <Route
                    exact
                    path="/add-employe"
                    element={<AddEmployee />} 
                  />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
    );
  }
}

export default App;
