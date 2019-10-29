import * as React from "react";
import NavButton from "./NavButton"
import NavLogo from "./NavLogo"
import { HOME, PROJECTS, STACK, CONTACT } from "../../constants/Anchor"
import { Container, Row, Col } from 'reactstrap';
import DrawerMenu from "./DrawerMenu"
//@ts-ignore
import Icon from '@iconify/react';
//@ts-ignore
import menuAlt from '@iconify/icons-dashicons/menu-alt';

type NavbarProps = {
    logo: { white: string, black: string }
}

type NavbarState = {
    drawerOpen: boolean
}

export default class Navbarnew extends React.Component<NavbarProps, NavbarState> {

    state = {
        drawerOpen: false
    }

    openDrawer() {
        const bodyScrollLock = require('body-scroll-lock');
        const disableBodyScroll = bodyScrollLock.disableBodyScroll;
        const targetElement = document.querySelector("body");
        disableBodyScroll(targetElement);

        this.setState({ drawerOpen: true })
    }

    render() {
        const { logo } = this.props
        return (<Container className={"nav-bar noselect"}>
            <Row>
                <Col xs="4" sm="3"><NavLogo logo={logo} /></Col>
                <Col className="desktop" sm="9">
                    <NavButton anchor={CONTACT}>Contact</NavButton>
                    <NavButton anchor={PROJECTS}>Projects</NavButton>
                    <NavButton anchor={STACK}>Stack</NavButton>
                    <NavButton anchor={HOME}>Home</NavButton>
                </Col>
                <Col className="mobile burger" xs="8">
                    <Icon style={{ fontSize: 40, color: "white", float: "right", margin: "8px 0 0 0" }} icon={menuAlt} onClick={() => this.openDrawer()} />
                </Col>
            </Row>
            <DrawerMenu logo={logo} open={this.state.drawerOpen} />
        </Container >)
    }
}


