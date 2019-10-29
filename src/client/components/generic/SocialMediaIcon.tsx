import * as React from "react";
//@ts-ignore
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
//@ts-ignore
import { faNpm, faLinkedin, faSoundcloud, faGithub } from '@fortawesome/free-brands-svg-icons'


type SocialMediaIconProps = {
    type: string,
    href: string
}

type SocialMediaIconState = {
}

export default class SocialMediaIcon extends React.Component<SocialMediaIconProps, SocialMediaIconState> {

    opneLink(href: string) {
        window.open(href, '_blank')
    }

    render() {
        let { type, href } = this.props
        return (<div onClick={() => this.opneLink(href)} className={"footer-icon"}><FontAwesomeIcon icon={icons[type]} /></div>)
    }
}

interface iconsInterface {
    npm: any,
    linkedin: any,
    soundcloud: any,
    github: any,
    [key: string]: any;
}

const icons: iconsInterface = {
    npm: faNpm,
    linkedin: faLinkedin,
    soundcloud: faSoundcloud,
    github: faGithub
}