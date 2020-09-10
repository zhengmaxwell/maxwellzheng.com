import React, { Component } from 'react';
import Header from './HeaderComponent';
import Education from './EducationComponent';
import Experiences from './ExperiencesComponent';
import Skills from './SkillsComponent';
import Contact from './ContactComponent';
import Projects from './ProjectsComponent';


export default class Main extends Component {

    render() {
        return (
            <div>
                <Header/>
                <Education/>
                <Experiences/>
                <Skills/>
                <Projects/>
                <Contact/>
            </div>
        )
    }
}