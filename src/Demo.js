import React, { Component } from 'react';

class Demo extends Component {
    render() {
        const {Title, imgFolder, imgFile, URL, Tools, Description, Features, Other} = this.props;
        return (
            <div>
                <h3>{Title}</h3>
                <p>
                    <span>網址：</span>
                    <a target="_blank" href={URL}>{URL}</a>
                </p>
                <ul>
                    {
                        Other.map((value) => (
                            <li>{value}</li>
                        ))
                    }
                </ul>
                <p><span>使用技術及框架：</span>{Tools}</p>
                <p><span>簡介：</span>{Description}</p>
                <p><strong>系統特色：</strong></p>
                <ul>
                    {
                        Features.map((value) => (
                            <li>{value}</li>
                        ))
                    }
                </ul>
                <div id={`${imgFolder}-imgDiv`} className="imgDiv">
                    <table className="table table-striped">
                        <thead></thead>
                        <tbody>
                            {
                                imgFile.map((value) => (
                                    <tr>
                                        <td>
                                            <a href={`img/${imgFolder}/${value.fileName}.jpg`} target="_blank">
                                                <img src={`img/${imgFolder}/${value.fileName}.jpg`}></img>
                                            </a>
                                        </td>
                                        <td>
                                            <p>{value.Narrative}</p>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Demo;