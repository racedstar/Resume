import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const{Title, Link, Description, Range} = this.props;
        return (            
            <div>
                <h3>{Title}</h3>
                <strong>網址：</strong><a target="_blank" href={Link}>{Link}</a>
                <p><strong>描述：</strong></p>
                <p className="indent">{Description}</p>
                <p><strong>參與範圍：</strong>{Range}</p>
            </div>
        );
    }
}

export default Projects;