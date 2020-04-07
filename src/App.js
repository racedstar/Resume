import React, { Component } from 'react';

import PersonalInformationComponent from './PersonalInformation';
import EducationComponent from './Education';
import ExpComponent from './Exp';
import SkillComponent from './Skill';
import ProjectsComponent from './Projects';
import DemoComponent from './Demo';

import ResumeData from './Resume.json'
import './Resume.css';

class App extends Component {
    render() {
        const {PersonalInformation, Exp, Summary, Skill, Projects, Education, Demo} = ResumeData;
        return (
            <div>
                <div className="personalInformation">
                    <h1>郝偉翔的個人履歷</h1>
                    <ul>
                        {
                            PersonalInformation.map((value) => (
                                <PersonalInformationComponent {...value} />
                            ))
                        }
                    </ul>
                </div>
                <div className="summary">
                    <h1>自傳</h1>
                    <p>{Summary}</p>
                </div>
                <div className="education">
                    <h1>學歷</h1>
                    {
                        Education.map((value) => (
                            <EducationComponent {...value} />
                        ))
                    }
                </div>
                <div className="exp">
                    <h1>經歷</h1>
                    {
                        Exp.map((value) => (
                            <ExpComponent {...value} />
                        ))
                    }
                </div>
                <div className="skill">
                    <h1>技能</h1>
                    {
                        Skill.map((value) => (
                            <SkillComponent {...value} />
                        ))
                    }
                </div>
                <div className="projects">
                    <h1>專案</h1>
                    {
                        Projects.map((value) => (
                            <ProjectsComponent {...value} />
                        ))
                    }
                </div>
                <div className="demo">
                    <h1>作品</h1>
                    {
                        Demo.map((value) => (
                            <DemoComponent {...value} />
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default App;