import React, {Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Container, Row} from 'react-bootstrap';
import {Route, Switch} from 'react-router-dom';
import Header from "./layout/Header";

const routes = [
    { path: '/products', exact: true, name: 'Home', component: React.lazy(() => import('./product/ProductList'))},
    { path: '/product/create', exact: true, name: 'Dashboard', component: React.lazy(() => import('./product/ProductCreate')) },
];

// TODO : REST API CALL 200 아닐 때 공통적으로 어떻게 처리할지 확인 필요
function App() {
  return (
      <Container fluid>
          <Header />
          <Row>
              <Col></Col>
              <Col xs={8}>
                  <Suspense fallback={<div>Loading...</div>}>
                      <Switch>
                          {
                              routes.map((route, idx) => {
                                  return route.component ? (
                                      <Route
                                          key={idx}
                                          path={route.path}
                                          exact={route.exact}
                                          name={route.name}
                                          render={props => (
                                              <route.component {...props} />
                                          )} />
                                  ) : (null);
                              })
                          }
                      </Switch>
                  </Suspense>
              </Col>
              <Col></Col>
          </Row>
      </Container>
  );
}

export default App;
