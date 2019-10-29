
import * as React from "react";
import { HOME, PROJECTS, STACK, CONTACT, TESTIMONIALS, PICTURES } from "../../constants/Anchor"
import NavLogo from "./NavLogo"


type DrawerMenuProps = {
    open: boolean,
    logo: { white: string, black: string }
}

type DrawerMenuState = {
    open: boolean
}

export default class DrawerMenu extends React.Component<DrawerMenuProps, DrawerMenuState> {

    state = {
        open: false
    }

    componentDidMount() {
        this.setState({ open: this.props.open })
    }

    componentWillReceiveProps(newProps: any) {
        this.setState({ open: newProps.open })
    }

    followLink(hash: string) {
        this.enableScroll()
        window.location.hash = hash
    }

    enableScroll() {
        const bodyScrollLock = require('body-scroll-lock');
        const enableBodyScroll = bodyScrollLock.enableBodyScroll;
        const targetElement = document.querySelector("body");
        enableBodyScroll(targetElement);
        this.setState({ open: false })
    }

    render() {
        const { open } = this.state
        const logo = this.props.logo
        return (<div className="menuOverLay" style={open ? { display: "block" } : { display: "none" }} onClick={() => this.enableScroll()}>
            <div className="menu">
                <NavLogo logo={logo} black={true} size={50} />
                <br />
                <div className="item" onClick={() => this.followLink(HOME)}>Home</div>
                <div className="item" onClick={() => this.followLink(STACK)}>Stack</div>
                <div className="item" onClick={() => this.followLink(PICTURES)}>Pictures</div>
                <div className="item" onClick={() => this.followLink(PROJECTS)}>Projects</div>
                <div className="item" onClick={() => this.followLink(TESTIMONIALS)}>Testimonials</div>
                <div className="item" onClick={() => this.followLink(CONTACT)}>Contact</div>
            </div>
        </div>)
    }
}