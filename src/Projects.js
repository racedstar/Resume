import React, { Component } from 'react';
class Projects extends Component {
    mouseOver = (e) => {
        let id = e.target.id;
        let imgSrc = document.getElementById(id).src;        
        let img = document.createElement('img');
        img.id = 'tooltip';
        img.src = imgSrc;
        document.body.appendChild(img);

        let tooltip = document.getElementById('tooltip');
        tooltip.style.width = '800px';
        tooltip.style.left = (e.pageX + 20) + "px";
        tooltip.style.top = (e.pageY + 20) + "px";
        tooltip.style.position = "absolute";
    }

    mouseOut = () => {
        document.getElementById('tooltip').remove();
    }
    render() {
        const{Title, img, Link, Description, Range} = this.props;
        return (            
            <div>
                <h3>{Title}</h3>
                <strong>網址：</strong><a target="_blank" href={Link}>{Link}</a>
                <p><strong>描述：</strong></p>
                <p className="indent">{Description}</p>
                <p><strong>參與開發及維護範圍：</strong>{Range}</p>
                <div className="imgDiv">
                    <img id={img + "01"} src={"img/" + img + "/01.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "02"} src={"img/" + img + "/02.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "03"} src={"img/" + img + "/03.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "04"} src={"img/" + img + "/04.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "05"} src={"img/" + img + "/05.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                </div>
            </div>
        );
    }
}

export default Projects;