import React, { Component } from 'react';

class Demo extends Component {
    render() {
        const {Title, Url, Tools, Description, Other} = this.props;
        return (
            <div>
                <h2>{Title}</h2>
                <p><span>網址：</span> <a href={Url}>{Url}</a></p>
                <ul>
                    {
                        Other.map((value) => (
                            <li>{value}</li>
                        ))
                    }
                </ul>
                <p><span>使用技術及框架：</span>{Tools}</p>
                <p><span>簡介：</span></p>
                <p>{Description}</p>
            </div>
        );
    }
}

export default Demo;