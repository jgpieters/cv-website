import * as React from "react";
import { FormGroup, Label, Input, Button } from 'reactstrap';
import { CONTACT } from "../../constants/Anchor"

type SectionProps = {

}

type SectionState = {
    name: string,
    email: string,
    message: string
}

export default class Section extends React.Component<SectionProps, SectionState> {

    state = {
        name: "",
        email: "",
        message: ""
    }

    handleChange = (e: { target: { name: string, value: string } }) => {
        //@ts-ignore
        this.setState({ [e.target.name]: e.target.value });
    }

    async sendMessage() {
        const { name, email, message } = this.state;
        const url = "/mail"
        const data = { name, email, message }
        const jsonString = JSON.stringify(data)
        console.log("Data: " + jsonString)
        console.log(data)
        fetch(url, {
            method: 'POST',
            body: jsonString,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            this.setState({ name: "", email: "", message: "" })
        })
    }

    render() {
        const { name, email, message } = this.state;

        return (<div className={"contact-form"} id={CONTACT} >
            <FormGroup>
                <Input type="text" name="name" placeholder="name" value={name} onChange={this.handleChange} />
                <Input type="email" name="email" placeholder="email" value={email} onChange={this.handleChange} />
                <Input type="textarea" name="message" rows={4} placeholder="message" value={message} id="exampleText" noresize onChange={this.handleChange} />
                <Button primary onClick={() => this.sendMessage()}>Send message</Button>
            </FormGroup>
        </div>)
    }
}