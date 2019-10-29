import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./components/home/Home"
import Navbar from "./components/navbar/Navbarnew"
import Section from "./components/generic/Section"
import Footer from "./components/footer/Footer"
import { HOME, PROJECTS, STACK, PICTURES, FROMME, CONTACT, TESTIMONIALS } from "./constants/Anchor"
import Testimonials from "./components/testimonials/Testimonials";
import FromMe from "./components/fromme/FromMe"
import StackList from "./components/stack/StackList"
import ProjectsList from "./components/projects/ProjectList"
import Pictures from "./components/pictures/Pictures"
import "./style.css";

const data = require("./data/data.json")

const App = () => {

    return (
        <div className="App">
            <Navbar logo={data.navigation.logo} />
            <Home {...data.home} anchor={HOME}></Home>
            <Section {...data.stack} anchor={STACK} className="page-break">
                <StackList list={data.stack.list} />
            </Section>
            <Section className="online-version" {...data.pictures} anchor={PICTURES} backgroundColor="white"><Pictures list={data.pictures.list}></Pictures></Section>
            <Section className="page-break" {...data.projects} anchor={PROJECTS}><ProjectsList list={data.projects.list} /></Section>
            <FromMe {...data.fromme}
                anchor={FROMME}></FromMe>
            <Section className="page-break online-version"
                title={data.testimonials.title}
                anchor={TESTIMONIALS}><Testimonials testimonials={data.testimonials.list} /></Section>
            <Footer {...data.footer}></Footer>
        </div >
    )
};

ReactDOM.render(
    <App />,
    document.getElementById("root"),
);

