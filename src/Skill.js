import React, { Component } from 'react';

class Skill extends Component {
    render() {
        const{Title, Tools} = this.props;
        return (
            <div>
                <h3>{Title}</h3>
                <ul>
                    {                        
                        Tools.map((value) => (
                            <li>{value}</li>
                        ))                      
                    }
                </ul>
            </div>
        );
    }
}

export default Skill;