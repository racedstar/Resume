import React, { Component } from 'react';

class Education extends Component {
    render() {
        const {Title, School, Deptartment, Time} = this.props;
        return (
            <ul>
                <li>學位： {Title}</li>
                <li>學校： {School}</li>
                <li>科系： {Deptartment}</li>
                <li>時間： {Time}</li>
            </ul>
        );
    }
}

export default Education;