import React, { Component } from 'react';

class PersonalInformation extends Component {
    render() {
        const{Type, Val, ValType} = this.props;
        if(ValType === "link"){
            return(
            <li><strong>{Type}</strong>：<a href={Val}>{Val}</a></li>
            )
        }
        return (            
            <li>
                <strong>{Type}</strong>： {Val}
            </li>
        );
    }
}

export default PersonalInformation;