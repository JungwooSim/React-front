import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import withRouter from "react-router-dom/withRouter";

function Header(props) {
    console.log(props);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Big의 옷쇼핑몰</Navbar.Brand>
            <Nav activeKey={props.location.pathname}>
                <Nav.Link href="/products">상품</Nav.Link>
                {/*<Nav.Link href="/product/create">create</Nav.Link>*/}
            </Nav>
        </Navbar>
    );
}

export default withRouter(Header);
