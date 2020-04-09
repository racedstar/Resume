import React, { Component } from 'react';

class Demo extends Component {
    render() {
        const {Title, URL, Tools, Description, Other} = this.props;
        return (
            <div>
                <h3>{Title}</h3>
                <p><span>網址：</span> <a target="_blank" href={URL}>{URL}</a></p>
                <ul>
                    {
                        Other.map((value) => (
                            <li>{value}</li>
                        ))
                    }
                </ul>
                <p><span>使用技術及框架：</span>{Tools}</p>
                <p><span>簡介：</span>{Description}</p>                
            </div>
        );
    }
}

export default Demo;