import React from "react"
import * as routerPaths from "../../utility/router/paths"
import styles from "./Navigation.module.scss"
import { Container, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

export interface NavbarProps {}

const Navigation: React.FC<NavbarProps> = props => {
    return (
        <Navbar bg="light" variant="light" sticky="top" className={styles.navbar}>
            <Container>
                <LinkContainer to={routerPaths.agileBoardPath}>
                    <Navbar.Brand>Agile board</Navbar.Brand>
                </LinkContainer>
                <Nav className="ms-auto">
                    <LinkContainer to={routerPaths.loginPath}>
                        <Nav.Link>Login</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Navigation
