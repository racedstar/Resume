import React, { Component } from 'react';

class Projects extends Component {
    render() {
        const{Title, imgFolder, imgFile, Link, Description, Range, Difficult} = this.props;
        return (            
            <div>
                <h3>{Title}</h3>
                <strong>網址：</strong><a target="_blank" href={Link}>{Link}</a>
                <p><strong>描述：</strong></p>
                <p className="indent">{Description}</p>
                <p><strong>參與開發及維護範圍：</strong>{Range}</p>
                <div>
                    <strong>困難點：</strong>
                    <ul>
                        {Difficult.map((value) => (
                            <p>{value.title}：{value.content}</p>
                        ))}
                    </ul>
                </div>
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

export default Projects;