import * as React from "react";
import { Col } from 'reactstrap';

type TestimonialProps = {
    testimonial: { text: string, author: string, company: string, imgsrc: string }
}

type TestimonialState = {
}

export default class Testimonial extends React.Component<TestimonialProps, TestimonialState> {

    render() {

        const { text, author, company, imgsrc } = this.props.testimonial

        return (<Col xs={"12"} sm={"12"} md={"6"} lg={"6"} xl={"4"}><div className={"testimonial"}>
            <p>"{text}"</p>
            <img src={imgsrc} />
            <div className={"name"}>
                <div className="author">{author}</div>
                <div className="company">{company}</div>
            </div>
            <div className={"clearfix"}></div>
        </div>
        </Col>)
    }
}