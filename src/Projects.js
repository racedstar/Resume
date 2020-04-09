import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const{Title, Link, Description} = this.props;
        return (
            <div>
                <h3>{Title}<a target="_blank" href={Link}>({Link})</a></h3>
                <p>{Description}</p>
            </div>
        );
    }
}

export default Projects;