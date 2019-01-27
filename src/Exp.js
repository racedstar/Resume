import React, { Component } from 'react';

class Exp extends Component {
    render() {
        const{Title, Val} = this.props;
        if(Title === "Description"){
            return(
                <div>
                    <li>{Title}： </li>
                    <ul>
                        {
                            Val.map((value) => (
                                <li>{value}</li>
                            ))
                        }
                    </ul>
                </div>
            )
        }
        return (
            <div>
                <li>{Title}： {Val}</li>
            </div>
        );
    }
}

export default Exp;