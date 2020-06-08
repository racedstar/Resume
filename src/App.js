import React, { Component } from 'react';

import PersonalInformationComponent from './PersonalInformation';
import ExpComponent from './Exp';
import ProjectsComponent from './Projects';
import DemoComponent from './Demo';

import ResumeData from './Resume.json'
import './Resume.css';

class App extends Component {
    render() {
        const { PersonalInformation, Exp, Summary, Projects, Demo} = ResumeData;
        return (
            <div>
                <h1>郝偉翔</h1>
                <div id="personalInformation" className="contentArea">                    
                    <div className="information">
                        <h2>基本資料</h2>
                        <ul>
                            {
                                PersonalInformation.map((value) => (
                                    <PersonalInformationComponent {...value} />
                                ))
                            }
                        </ul>
                    </div>
                    <div>
                        <img src="img/01.png"></img>
                    </div>
                </div>
                <div id="summary" className="contentArea">
                    <h2>自傳</h2>
                    {Summary.map((value) => (
                        <p>{value}</p>
                    ))}
                </div>
                <div id="exp" className="contentArea">
                    <h2>經歷</h2>
                    {
                        Exp.map((value) => (
                            <ExpComponent {...value} />
                        ))
                    }
                </div>
                <div id="projects" className="contentArea">
                    <h2>專案</h2>
                    {
                        Projects.map((value) => (
                            <ProjectsComponent {...value} />
                        ))
                    }
                </div>
                <div id="demo" className="contentArea">
                    <h2>作品</h2>
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