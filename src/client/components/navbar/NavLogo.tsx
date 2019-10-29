import * as React from 'react';

type NavLogoProps = {
    logo: { white: string, black: string }
    black?: boolean,
    size?: number
}

type NavLogoState = {
}

export default class NavLogo extends React.Component<NavLogoProps, NavLogoState> {

    public static defaultProps = {
        size: 100
    };


    render() {

        const { logo, size, black } = this.props
        let logolink = logo.white
        if (black) {
            logolink = logo.black
        }

        return (<div className={"nav-logo"} onClick={() => window.location.reload()} ><img src={logolink} width={size} /></div>)
    }
}