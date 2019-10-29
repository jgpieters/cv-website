import * as React from "react";
import { Container, Row, Col, Button } from 'reactstrap';

type SectionProps = {
    title: string,
    text?: string,
    backgroundColor?: string,
    children: JSX.Element[] | JSX.Element
    anchor: string,
    className?: string
}

type SectionState = {
}

export default class Section extends React.Component<SectionProps, SectionState> {

    public static defaultProps = {
        backgroundColor: "#f8f9fa"
    };

    render() {
        const { title, text, children, backgroundColor, anchor } = this.props
        return (<div className={this.props.className + " section-wrapper"} style={{ backgroundColor }} id={anchor}><Container>
            <Row>
                <Col xs="12" sm="10" md="8" lg="6" className={"section-header"}>
                    <h2>{title}</h2>
                    <hr />
                    <p>{text}</p>
                </Col>
            </Row>
            <Row>
                <Col xs="12" className={"section-content"}>
                    {children}
                </Col>
            </Row>
        </Container>
        </div>)
    }
}