import * as React from "react";
import { Row, Col } from 'reactstrap';

type ProjectItemProps = {
    company: string,
    description: string,
    role: string,
    start: string,
    end: string,
    stack: Array<string>,
    url?: string,
    imgsrc?: string
}

type ProjectItemState = {
}

export default class Stack extends React.Component<ProjectItemProps, ProjectItemState> {

    render() {
        const { company, description, role, start, end, url, stack, imgsrc } = this.props
        return (<Row><Col xs={"12"} className="project-item-wrapper" >
            <div className={"project-item"}>
                <div className={"project-item-icon"}><div className={"project-item-icon-wrapper"}><img src={imgsrc} /></div></div>
                <div className={"project-item-text"}>
                    <h3>{company}</h3>
                    <div className={"text"}>
                        <p>{description}</p>
                        {url ?
                            <a href={url}>{url}</a> : null}
                    </div>
                    <div className={"project-item-text-bottom"}>
                        <span className="role">{role}</span>&nbsp; <span className="period">{start} - {end}</span>
                    </div>

                </div>

                <div className={"project-item-stack"}></div>
                <div className={"clearfix"}></div>
            </div>
        </Col></Row>)
    }
}