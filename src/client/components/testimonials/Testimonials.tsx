import * as React from "react";
import Testimonial from "./Testimonial";
import { Container, Row } from 'reactstrap';

type TestimonialsProps = {
    testimonials: Array<{ text: string, author: string, company: string, imgsrc: string }>
}

type TestimonialsState = {
}

export default class Testimonials extends React.Component<TestimonialsProps, TestimonialsState> {

    render() {
        const { testimonials } = this.props
        return (
            <Row>
                {testimonials.map((item, index) => (
                    <Testimonial key={index} testimonial={item} />
                ))}
            </Row>
        )
    }
}