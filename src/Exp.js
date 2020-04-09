import React, { Component } from 'react';

class Exp extends Component {
    render() {
        const{Title, Val} = this.props;
        if(Title === "工作內容"){
            return(
                <div>
                    <li><strong>{Title}</strong>： </li>
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
                <li><strong>{Title}</strong>： {Val}</li>
            </div>
        );
    }
}

export default Exp;