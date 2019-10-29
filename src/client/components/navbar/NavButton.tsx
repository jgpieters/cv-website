import * as React from "react";

type NavButtonProps = {
    href?: string,
    anchor?: string,
    children: string
}

type NavButtonState = {
}

export default class NavBar extends React.Component<NavButtonProps, NavButtonState> {

    handleTarget() {
        const { href, anchor } = this.props
        if (href) {
            window.location.href = href
        } else if (anchor) {
            window.location.hash = "noanchor"
            window.location.hash = anchor
        }
    }

    render() {
        const { children } = this.props
        return (<div className={"nav-button"} onClick={() => this.handleTarget()}>{children}</div>)
    }
}