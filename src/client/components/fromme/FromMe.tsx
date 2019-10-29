import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import BreakText from "../generic/BreakText";

type FromMeProps = {
    title: string,
    text: string,
    name: string,
    occupation: string,
    signaturesrc?: string,
    imgsrc: string,
    anchor: string
}

type FromMeState = {
}

export default class FromMe extends React.Component<FromMeProps, FromMeState> {

    render() {
        const { title, text, imgsrc, name, occupation, signaturesrc } = this.props
        return (<Container fluid className={"from-me page-break"}>
            <Row>
                <Col xs="12" md="4" lg="6" className={"online-version"}> <div className={"from-me-image"} >
                    <div className="image-background" style={{ background: "url('" + imgsrc + "')" }}></div>

                </div></Col>
                <Col xs="12" md="8" lg="6">
                    <div className={"from-me-text"}>
                        <h2>{title}</h2>
                        <p><BreakText>{text}</BreakText></p>
                        <div className={"from-me-signature"}>
                            <div className={"from-me-signature-name"}>
                                {name}
                            </div>
                            <div className={"from-me-signature-function"}>
                                {occupation}
                            </div>
                            {signaturesrc ? <img src={signaturesrc} /> : null}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>)
    }
}