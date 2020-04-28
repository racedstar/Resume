import React, { Component } from 'react';

class Demo extends Component {
    componentDidMount(){
        this.imgCreate();
    }
    imgCreate = () => {      
        let img = this.props.img  
        let id = img + "imgDiv";
        let imgDiv = document.getElementById(id);
        let length = 5;

        if(img == "croppie"){
            length = 2;
        }

        for(let i =1; i <= length; i++){
            let imgElement = document.createElement('img');
            imgElement.id = img + i;
            imgElement.src = "img/" + img + "/0" + i + ".jpg";
            imgElement.addEventListener("mouseover", this.mouseOver);
            imgElement.addEventListener("mouseout", this.mouseOut);
            imgDiv.appendChild(imgElement);
        }
    }
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

        if(id.indexOf('croppie') != -1){
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
        const {Title, img, URL, Tools, Description, Other} = this.props;
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
                <div id={img + "imgDiv"} className="imgDiv">                    
                    {/* <img id={img + "01"} src={"img/" + img + "/01.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "02"} src={"img/" + img + "/02.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "03"} src={"img/" + img + "/03.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "04"} src={"img/" + img + "/04.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/>
                    <img id={img + "05"} src={"img/" + img + "/05.jpg"} onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}/> */}
                </div>
                <p><span>使用技術及框架：</span>{Tools}</p>
                <p><span>簡介：</span>{Description}</p>                
            </div>
        );
    }
}

export default Demo;