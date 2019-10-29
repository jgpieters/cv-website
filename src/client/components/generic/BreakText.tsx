import * as React from "react";

type BreakTextProps = {
    children: string
}

type BreakTextState = {
}

export default class BreakText extends React.Component<BreakTextProps, BreakTextState> {

    insertBreaks() {
        let { children } = this.props
        children = children.replace(/\r\n/g, '<br />');
        return children
    }

    render() {
        const text = this.insertBreaks()
        return (<span dangerouslySetInnerHTML={{ __html: text }}></span>)
    }
}