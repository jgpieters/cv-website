import * as React from "react";
import { Container, Row, Col, Button } from 'reactstrap';
import BreakText from "../generic/BreakText"
import { handleLink } from "../../utils/FrontendUtils"

type link = { href?: string, hash?: string }
type button = { link: link, text: string }

type HomeProps = {
    title: string,
    text: string,
    imgsrc: string,
    button1?: button,
    button2?: button,
    anchor: string
}

type HomeState = {
}

export default class Home extends React.Component<HomeProps, HomeState> {

    render() {
        const { title, text, imgsrc, anchor, button1, button2 } = this.props
        return (<Container className={"home-section"} id={anchor}>
            <Row>
                <Col sm={"12"} md={"8"} lg={"6"}>
                    <h1>{title}</h1>
                    <p><BreakText>{text}</BreakText></p>
                    <div className={"online-version"}>
                        {button1 ?
                            <Button className={"primary-button"} style={{
                                backgroundColor: "white", color: "#1c63fb", border: 0, "&:hover": {
                                    background: "#efefef"
                                },
                            }} onClick={() => { handleLink(button1.link) }}>{button1.text}</Button>
                            : null}

                        {button2 ? <Button onClick={() => { handleLink(button2.link) }} style={{ marginLeft: 10 }}>{button2.text}</Button> : null}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={{ size: 10, offset: 1 }} className={"online-version"}>
                    <img src={imgsrc} />
                </Col>
                <Col sm={{ size: 6, offset: 0 }} className={"printable-version"}>
                    <img src={imgsrc} />
                </Col>
            </Row>
        </Container >)
    }
}