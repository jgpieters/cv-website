import * as React from "react";
//@ts-ignore
import Icon from '@iconify/react';
//@ts-ignore
import logoJavascript from '@iconify/icons-simple-icons/javascript';
//@ts-ignore
import typescriptIcon from '@iconify/icons-simple-icons/typescript';
//@ts-ignore
import nodeJs from '@iconify/icons-fa-brands/node-js';
//@ts-ignore
import reactIcon from '@iconify/icons-fa-brands/react';
//@ts-ignore
import css3Alt from '@iconify/icons-fa-brands/css3-alt';
//@ts-ignore
import htmlFive from '@iconify/icons-fa-brands/html5';
//@ts-ignore
import javaIcon from '@iconify/icons-fa-brands/java';
//@ts-ignore
import grailsIcon from '@iconify/icons-whh/grails';
//@ts-ignore
import outlineForward from '@iconify/icons-ic/outline-forward';
//@ts-ignore
import mysqltwoIcon from '@iconify/icons-whh/mysqltwo';
//@ts-ignore
import oracleIcon from '@iconify/icons-simple-icons/oracle';
//@ts-ignore
import awsIcon from '@iconify/icons-fa-brands/aws';


type StackconProps = {
    type: string,
    href?: string,
    size?: number
}

type StackIconState = {
}

export default class SocialMediaIcon extends React.Component<StackconProps, StackIconState> {

    openLink(href: string) {
        window.open(href, '_blank')
    }

    render() {
        let { type, href, size } = this.props
        return (<div onClick={() => this.openLink(href || "")} className={"stack-icon"}><Icon style={{ fontSize: size }} icon={icons[type]} /></div>)
    }
}

interface iconsInterface {
    javascript: any,
    nodejs: any,
    react: any,
    css3: any,
    html5: any,
    java: any,
    typescript: any,
    grails: any,
    mysql: any,
    oracle: any,
    aws: any
    [key: string]: any;
}

const icons: iconsInterface = {
    javascript: logoJavascript,
    nodejs: nodeJs,
    react: reactIcon,
    css3: css3Alt,
    html5: htmlFive,
    java: javaIcon,
    typescript: typescriptIcon,
    grails: grailsIcon,
    scrum: outlineForward,
    mysql: mysqltwoIcon,
    oracle: oracleIcon,
    aws: awsIcon
}