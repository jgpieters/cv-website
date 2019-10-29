import * as React from "react";
import StackItem from "./StackItem"
import { Row } from 'reactstrap';

type link = { href?: string, hash?: string }
type StackListProps = {
    list: Array<{
        name: string,
        text: string,
        type: string,
        link?: link
    }>
}

type StackListState = {
}

export default class StackList extends React.Component<StackListProps, StackListState> {

    render() {
        const { list } = this.props
        return (
            <Row className={"stack"}>
                {list.map((item, index) => (<StackItem key={index} {...item} />))}
            </Row>
        )
    }
}