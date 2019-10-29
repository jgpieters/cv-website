import * as React from "react";
import { Container, Row, Col } from 'reactstrap';
import SocialMediaIcon from "../generic/SocialMediaIcon"
import ContactForm from "../generic/ContactForm"
import { handleLink } from "../../utils/FrontendUtils"
import BreakText from "../generic/BreakText"

type link = { href?: string, hash?: string }
type FooterProps = {
    text: {
        title: string,
        description: string,
    }
    navigation: Array<{ text: string, link: link }>,
    socialNetworks: Array<{ type: string, href: string }>
}

type FooterState = {
}

export default class Footer extends React.Component<FooterProps, FooterState> {

    render() {
        const { text, navigation, socialNetworks } = this.props
        return (<div className={"footer-wrapper"}><Container className={"online-version"}>
            <Row>
                <Col xs="12" sm="12" md="12" lg="4">
                    <div className={"footer-text footer-margin"}>
                        <h3>{text.title}</h3>
                        <p><BreakText>{text.description}</BreakText></p>
                    </div>
                </Col>
                <Col xs="12" sm="5" md="5" lg={{ size: 2, offset: 1 }} >
                    <div className={"footer-navigation footer-margin noselect"}>
                        <h3>Navigation</h3>
                        {navigation.map((navigationItem, index) => (
                            <div key={index} className={"footer-navigation-link"}><span onClick={() => handleLink(navigationItem.link)}>{navigationItem.text}</span></div>
                        ))}
                    </div></Col>
                <Col xs="12" sm="7" md="7" lg={{ size: 4, offset: 1 }} className="noselect">
                    <h3>Contact</h3>
                    <div className={"footer-contact-form footer-margin "}>
                        <ContactForm />
                    </div>
                </Col>
            </Row>
            <Row className={"footer-social-media-row"}>
                <Col xs="12">
                    <hr />
                    <div className={"footer-social-networks"}>

                        {socialNetworks.map((socialNetwork, index) => (
                            <div key={index} className={"footer-social-networks-item"}><SocialMediaIcon {...socialNetwork}></SocialMediaIcon></div>
                        ))}
                    </div><hr /></Col>
            </Row>
            <Row className={"footer-credits"}>
                <Col xs="12">
                    <div className={"footer-credits"}>
                        Copyright ©2019 All rights reserved | The design is inspired by a template made by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
                    </div></Col>
            </Row>




        </Container></div >)
    }
}