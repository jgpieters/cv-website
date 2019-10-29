import * as React from "react";
import ProjectItem from "./ProjectItem"

type ProjectListProps = {
    list: Array<{
        company: string,
        description: string,
        role: string,
        start: string,
        end: string,
        stack: Array<string>,
        imgsrc?: string
    }>
}

type ProjectListState = {
}

export default class ProjectList extends React.Component<ProjectListProps, ProjectListState> {

    render() {
        const { list } = this.props
        return (
            <div className={"project-list"}>
                {list.map((item, index) => (<ProjectItem key={index} {...item} />))}
            </div>
        )
    }
}