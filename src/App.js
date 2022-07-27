import { Component } from 'react';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'

import ListUser from './component/ListUser';
import AddUser from './component/AddUser';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

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
                 User API
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/add-user'} className="nav-link">
                    Add User
                  </Link>
                </Nav>

                <Nav>
                  <Link to={'/list-user'} className="nav-link">
                    List User
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
                    path="/list-user"
                    element={<ListUser />} 
                  />
                  <Route
                    exact
                    path="/add-user"
                    element={<AddUser />} 
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
