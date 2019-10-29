import * as React from "react";
import { Col } from 'reactstrap';
import StackIcon from "../generic/StackIcon"
import { handleLink } from "../../utils/FrontendUtils"

type link = { href?: string, hash?: string }
type StackItemProps = {
    name: string,
    text: string,
    type: string,
    link?: link
}

type StackItemState = {
}

export default class StackItem extends React.Component<StackItemProps, StackItemState> {

    render() {
        const { name, text, type, link } = this.props
        return (<Col xs={"12"} sm={"12"} md={"4"} lg={"4"} className={"printable-stack-item"} >
            <div className={"stack-item"}>
                <div className={"stack-item-icon"}><StackIcon size={50} type={type} /></div>
                <h3>{name}</h3>
                <p>{text}</p>
                {link && link.href ?
                    <div className={"stack-item-link"} onClick={() => handleLink(link)}>{link.href}</div> : null}
            </div>
        </Col>)
    }
}