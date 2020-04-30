import React, { Component } from 'react';

class Demo extends Component {
    mouseOver = (e) => {
        let id = e.target.id;
        let imgSrc = document.getElementById(id).src;        
        let img = document.createElement('img');
        img.id = 'tooltip';
        img.src = imgSrc;
        document.body.appendChild(img);
    
        let tooltip = document.getElementById('tooltip');
        tooltip.style.width = '800px';        
        if(id.indexOf('4') != -1 || id.indexOf('5') != -1){
            tooltip.style.left = (e.pageX - 820) + "px";
        }
        else{
            tooltip.style.left = (e.pageX + 20) + "px";
        }

        if(id.indexOf('petManager') != -1){
            tooltip.style.top = (e.pageY - 400) + "px";
        }
        else{
            tooltip.style.top = (e.pageY) + "px";
        }
        tooltip.style.position = "absolute";
    }
    
    mouseOut = () => {
        document.getElementById('tooltip').remove();
    }
    render() {
        const {Title, imgFolder, imgFile, URL, Tools, Description, Other} = this.props;
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