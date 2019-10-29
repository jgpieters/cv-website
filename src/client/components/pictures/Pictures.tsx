import * as React from "react";
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';

type PicturesProps = {
    list: Array<{ imgsrc: string }>
}

type PicturesState = {
}

export default class Pictures extends React.Component<PicturesProps, PicturesState> {

    render() {

        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            cssEase: "ease-out"
        };

        const { list } = this.props
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md={{ size: 10, offset: 1 }}>
                        <Slider {...settings} className={"carousel"}>
                            {list.map((picture, index) => (
                                <div className={"carousel-image"} key={index}><div style={{ background: "url('" + picture.imgsrc + "')" }} className="image" ></div></div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container >
        )
    }
}

