(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(8),i=a(1),c=a(2),m=a(4),o=a(3),u=a(5),p=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Type,a=e.Val;return"link"===e.ValType?n.a.createElement("li",null,n.a.createElement("strong",null,t),"\uff1a",n.a.createElement("a",{href:a},a)):n.a.createElement("li",null,n.a.createElement("strong",null,t),"\uff1a ",a)}}]),t}(l.Component),s=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Title,a=e.Val;return"\u5de5\u4f5c\u5167\u5bb9"===t?n.a.createElement("div",null,n.a.createElement("li",null,n.a.createElement("strong",null,t),"\uff1a "),n.a.createElement("ul",null,a.map(function(e){return n.a.createElement("li",null,e)}))):n.a.createElement("div",null,n.a.createElement("li",null,n.a.createElement("strong",null,t),"\uff1a ",a))}}]),t}(l.Component),E=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Title,a=e.imgFolder,l=e.imgFile,r=e.Link,i=e.Description,c=e.Range,m=e.Difficult;return n.a.createElement("div",null,n.a.createElement("h3",null,t),n.a.createElement("strong",null,"\u7db2\u5740\uff1a"),n.a.createElement("a",{target:"_blank",href:r},r),n.a.createElement("p",null,n.a.createElement("strong",null,"\u63cf\u8ff0\uff1a")),n.a.createElement("p",{className:"indent"},i),n.a.createElement("p",null,n.a.createElement("strong",null,"\u53c3\u8207\u958b\u767c\u53ca\u7dad\u8b77\u7bc4\u570d\uff1a"),c),n.a.createElement("div",null,n.a.createElement("strong",null,"\u56f0\u96e3\u9ede\uff1a"),n.a.createElement("ul",null,m.map(function(e){return n.a.createElement("p",null,e.title,"\uff1a",e.content)}))),n.a.createElement("div",{id:"".concat(a,"-imgDiv"),className:"imgDiv"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null),n.a.createElement("tbody",null,l.map(function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{href:"img/".concat(a,"/").concat(e.fileName,".jpg"),target:"_blank"},n.a.createElement("img",{src:"img/".concat(a,"/").concat(e.fileName,".jpg")}))),n.a.createElement("td",null,n.a.createElement("p",null,e.Narrative)))})))))}}]),t}(l.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(o.a)(t)).call.apply(e,[this].concat(n)))).mouseOver=function(e){var t=e.target.id,a=document.getElementById(t).src,l=document.createElement("img");l.id="tooltip",l.src=a,document.body.appendChild(l);var n=document.getElementById("tooltip");n.style.width="800px",-1!=t.indexOf("4")||-1!=t.indexOf("5")?n.style.left=e.pageX-820+"px":n.style.left=e.pageX+20+"px",-1!=t.indexOf("petManager")?n.style.top=e.pageY-400+"px":n.style.top=e.pageY+"px",n.style.position="absolute"},a.mouseOut=function(){document.getElementById("tooltip").remove()},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.Title,a=e.imgFolder,l=e.imgFile,r=e.URL,i=e.Tools,c=e.Description,m=e.Other;return n.a.createElement("div",null,n.a.createElement("h3",null,t),n.a.createElement("p",null,n.a.createElement("span",null,"\u7db2\u5740\uff1a")," ",n.a.createElement("a",{target:"_blank",href:r},r)),n.a.createElement("ul",null,m.map(function(e){return n.a.createElement("li",null,e)})),n.a.createElement("p",null,n.a.createElement("span",null,"\u4f7f\u7528\u6280\u8853\u53ca\u6846\u67b6\uff1a"),i),n.a.createElement("p",null,n.a.createElement("span",null,"\u7c21\u4ecb\uff1a"),c),n.a.createElement("div",{id:"".concat(a,"-imgDiv"),className:"imgDiv"},n.a.createElement("table",{className:"table table-striped"},n.a.createElement("thead",null),n.a.createElement("tbody",null,l.map(function(e){return n.a.createElement("tr",null,n.a.createElement("td",null,n.a.createElement("a",{href:"img/".concat(a,"/").concat(e.fileName,".jpg"),target:"_blank"},n.a.createElement("img",{src:"img/".concat(a,"/").concat(e.fileName,".jpg")}))),n.a.createElement("td",null,n.a.createElement("p",null,e.Narrative)))})))))}}]),t}(l.Component),g=a(6),d=(a(14),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=g.PersonalInformation,t=g.Exp,a=g.Summary,l=g.Projects,r=g.Demo;return n.a.createElement("div",null,n.a.createElement("h1",null,"\u90dd\u5049\u7fd4"),n.a.createElement("div",{className:"personalInformation"},n.a.createElement("div",{className:"information"},n.a.createElement("h2",null,"\u57fa\u672c\u8cc7\u6599"),n.a.createElement("ul",null,e.map(function(e){return n.a.createElement(p,e)}))),n.a.createElement("div",null,n.a.createElement("img",{src:"img/01.jpg"}))),n.a.createElement("div",{className:"summary"},n.a.createElement("h2",null,"\u81ea\u50b3"),a.map(function(e){return n.a.createElement("p",null,e)})),n.a.createElement("div",{className:"exp"},n.a.createElement("h2",null,"\u7d93\u6b77"),t.map(function(e){return n.a.createElement(s,e)})),n.a.createElement("div",{className:"projects"},n.a.createElement("h2",null,"\u5c08\u6848"),l.map(function(e){return n.a.createElement(E,e)})),n.a.createElement("div",{className:"demo"},n.a.createElement("h2",null,"\u4f5c\u54c1"),r.map(function(e){return n.a.createElement(f,e)})))}}]),t}(l.Component));Object(r.render)(n.a.createElement(d,null),document.getElementById("root"))},6:function(e){e.exports={PersonalInformation:[{Type:"\u6027\u5225",Val:"\u7537",ValType:"string"},{Type:"\u51fa\u751f\u5e74\u6708\u65e5",Val:"1991/02/11",ValType:"string"},{Type:"E-Mail",Val:"racedstar@gmail.com",ValType:"string"},{Type:"Github",Val:"https://github.com/racedstar",ValType:"link"},{Type:"Phone",Val:"+886-908-619-211",ValType:"string"},{Type:"\u6700\u9ad8\u5b78\u6b77",Val:"\u6a39\u5fb7\u79d1\u6280\u5927\u5b78 \u8cc7\u8a0a\u7ba1\u7406 \u78a9\u58eb(2017/01\u7562)",ValType:"string"},{Type:"\u6280\u80fd",Val:"C#\u3001ASP.NET\u3001javascript\u3001jQuery\u3001SQL(MS SQL)\u3001Git",ValType:"string"}],Exp:[{Title:"\u516c\u53f8",Val:"\u54c8\u746a\u661f\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8"},{Title:"\u8077\u4f4d",Val:"\u5be6\u7fd2\u7d44"},{Title:"\u6642\u9593",Val:"2013/10~2016/05"},{Title:"\u5de5\u4f5c\u5167\u5bb9",Val:["\u8cc7\u6599\u79fb\u8f49","\u5c08\u6848\u99d0\u9ede","\u5ba2\u6236\u554f\u984c\u56de\u5831\u7a97\u53e3","\u7db2\u7ad9\u958b\u767c\u53ca\u7dad\u8b77","\u8cc7\u6599\u5eab\u7dad\u8b77","\u5e36\u65b0\u9032\u5be6\u7fd2\u751f\u9069\u61c9\u5de5\u4f5c\u74b0\u5883\u8207\u5167\u5bb9"]}],Summary:["\u65bc\u78a9\u58eb\u671f\u9593\u5728\u54c8\u746a\u661f\u79d1\u6280\u80a1\u4efd\u6709\u9650\u516c\u53f8\u5be6\u7fd2\uff0c\u6642\u9593\u7d04\u70ba\u5169\u5e74\u534a\uff0c\u53c3\u8207\u4e86\u516d\u500b\u5c08\u6848\uff0c\u64c1\u6709\u5728\u516c\u5bb6\u6a5f\u95dc\u99d0\u9ede\u7d93\u9a57\uff0c\u719f\u6089\u8207\u516c\u5bb6\u6a5f\u95dc\u4eba\u54e1\u4ea4\u6d41\u3002","\u6709\u53c3\u8207\u958b\u767c\u53ca\u7dad\u8b77\u8cc7\u6599\u5eab\u8207\u7a0b\u5f0f\u78bc\u7684\u5c08\u6848\u5171\u6709\u4e09\u500b\uff0c \u5206\u5225\u70ba\u81fa\u7063\u6e2f\u52d9\u516c\u53f8\u3001\u81fa\u7063\u6e2f\u52d9\u6e2f\u52e4\u516c\u53f8\u8207\u884c\u653f\u9662\u6027\u5e73\u8655-\u6027\u5e73\u5c0f\u5b78\u5802\uff0c\u958b\u767c\u53ca\u7dad\u8b77\u7686\u4f7f\u7528ASP.NET(C#)Web From\u53caMS SQL\u3002\u4e5f\u56e0\u516c\u5bb6\u6a5f\u95dc\u7db2\u7ad9\u7686\u9700\u7533\u8acb\u7121\u969c\u7919\u6a19\u7ae0\uff0c\u6545\u4e5f\u719f\u6089\u7533\u8acb\u7121\u969c\u7919\u7db2\u7ad9\u6a19\u7ae0\u6d41\u7a0b\u3002","\u672a\u4f86\u671f\u8a31\u81ea\u5df1\u80fd\u5728\u7db2\u9801\u6280\u8853\u9762\u7e7c\u7e8c\u6709\u6240\u7cbe\u9032\uff0c\u76ee\u524d\u6b63\u5728\u7814\u7a76 ASP.NET MVC Framework \u4e26\u88fd\u4f5c\u7db2\u7ad9\uff0c\u672a\u4f86\u5e0c\u671b\u80fd\u6311\u6230\u4f7f\u7528\u6b63\u5f0f\u4f7f\u7528 MVC Framework \u958b\u767c\u5546\u696d\u5c08\u6848\u3002"],Projects:[{Title:"\u81fa\u7063\u6e2f\u52d9\u516c\u53f8 - \u5168\u7403\u7db2\u5efa\u7f6e\u6848",imgFolder:"twport",imgFile:[{fileName:"01",Narrative:"\u6e2f\u52d9\u5168\u7403\u7db2\u9996\u9801\uff0c\u5176\u9996\u9801\u8996\u89ba\u5716\u4ee5\u76f8\u7c3f\u6a21\u7d44\u7dad\u8b77\u5167\u5bb9\uff0c\u524d\u7aef\u9801\u9762\u914d\u5408 fancybox \u4ee5\u5448\u73fe\u5716\u7247\u8f2a\u64ad\uff0c\u4e0b\u65b9\u5404\u985e\u5225\u6a21\u7d44\u4e5f\u90fd\u6709\u5176\u5c0d\u61c9\u7684\u7cfb\u7d71\u505a\u8cc7\u6599\u7dad\u8b77\u3002"},{fileName:"02",Narrative:"\u6e2f\u52d9\u5168\u7403\u7db2\u8a0a\u606f\u6a21\u7d44\uff0c\u64c1\u6709\u95dc\u9375\u5b57\u641c\u5c0b\u529f\u80fd\uff0c\u4e14\u5728\u6587\u7ae0\u8d85\u904e\u671f\u9650\u5f8c\u81ea\u52d5\u5c07\u6587\u7ae0\u4e0b\u67b6\uff0c\u4e14\u4fdd\u7559\u65bc\u6b77\u53f2\u5340\u4e2d\u4f9b\u6c11\u773e\u67e5\u8a62\u3002"},{fileName:"03",Narrative:"\u6e2f\u52d9\u5168\u7403\u7db2\u96fb\u5b50\u8cc0\u5361\u6a21\u7d44\uff0c\u6703\u54e1\u767b\u5165\u5f8c\u53ef\u9078\u64c7\u96fb\u5b50\u8cc0\u5361\u8f38\u5165\u60f3\u5bc4\u9001\u5c0d\u8c61\u7684\u96fb\u5b50\u4fe1\u7bb1\u53ca\u5167\u5bb9\uff0c\u5373\u53ef\u767c\u9001\u96fb\u5b50\u8cc0\u5361\u3002"},{fileName:"04",Narrative:"\u6e2f\u52d9\u5168\u7403\u7db2\u82f1\u6587\u7248\u9996\u9801\uff0c\u70ba\u8cab\u5fb9\u516c\u53f8\u7db2\u7ad9\u4e00\u81f4\u6027\uff0c\u6545\u4f7f\u7528\u7684\u7248\u9762\u5927\u90e8\u5206\u7686\u8207\u4e2d\u6587\u7db2\u76f8\u540c\u3002\u800c\u529f\u80fd\u6027\u7684\u95dc\u9375\u5b57\u7ffb\u8b6f\u7686\u7531\u5f8c\u53f0\u7684\u8a9e\u7cfb\u7cfb\u7d71\u7dad\u8b77\u3002"}],Link:"http://www.twport.com.tw/",Description:["\u81fa\u7063\u6e2f\u52d9\u516c\u53f8 \u7684\u5168\u7403\u7db2\u7ffb\u65b0\u5efa\u7f6e\u6848\uff0c\u662f\u4e00\u500b\u5c07\u6e2f\u52d9\u516c\u53f8\u4e0b\u4e94\u9593\u5206\u516c\u53f8\u539f\u672c\u5206\u5c6c\u7684\u5168\u7403\u8cc7\u8a0a\u7db2\u6539\u70ba\u7d71\u4e00\u5efa\u7f6e\u7dad\u8b77\u7684\u5c08\u6848\u3002","\u81fa\u7063\u6e2f\u52d9\u5168\u7403\u8cc7\u8a0a\u7db2\u6bcf\u9593\u5206\u516c\u53f8\u7686\u6709\u5efa\u7f6e\u5167\u7db2\u4ee5\u53ca\u5916\u7db2\uff0c\u8981\u767c\u5e03\u5404\u985e\u8a0a\u606f\u5167\u5bb9\u7686\u5f9e\u5167\u7db2\u767c\u5e03\u5f8c\u7d93\u7531\u4e3b\u7ba1\u5be9\u6838\u5f8c\u624d\u80fd\u767c\u5e03\u7f6e\u5916\u7db2\uff0c\u4ee5\u907f\u514d\u932f\u8aa4\u8a0a\u606f\u80fd\u5920\u76f4\u63a5\u767c\u5e03\u81f3\u5916\u7db2\u8b93\u6c11\u773e\u770b\u898b\u7684\u72c0\u6cc1\u3002","\u6bcf\u9593\u5206\u516c\u53f8\u7686\u6709\u4e09\u7a2e\u4e0d\u540c\u8a9e\u7cfb\u7684\u7ad9\u53f0\u53ca\u4e00\u500b\u5152\u7ae5\u7db2\uff0c\u4e5f\u90fd\u64c1\u6709\u6625\u590f\u79cb\u51ac\u56db\u7a2e\u4e0d\u540c\u7248\u9762\uff0c\u4f9b\u7db2\u7ad9\u5207\u63db\u3002","\u4e14\u70ba\u4f7f\u5404\u500b\u516c\u53f8\u7684\u9801\u9762\u5177\u5099\u4e00\u81f4\u6027\uff0c\u6545\u5c07\u5404\u516c\u53f8\u7684\u529f\u80fd\u6a21\u7d44\u5316\u70ba\u767c\u5e03\u516c\u544a/\u65b0\u805e\u7a3f\u4f7f\u7528\u7684\u8a0a\u606f\u6a21\u7d44\u3001\u767c\u5e03\u6d3b\u52d5\u6210\u679c\u7684 \u76f8\u7c3f\u3001\u5f71\u97f3\u6a21\u7d44\u3001 \u524d\u5217\u6a21\u7d44\u7121\u6cd5\u6eff\u8db3\u9700\u6c42\u6642\u4f7f\u7528 \u4e5f\u914d\u6709\u81ea\u8a02\u7db2\u9801\u6a21\u7d44\u4f86\u6eff\u8db3\u4f7f\u7528\u8005\u9700\u6c42\u3002"],Range:"\u8a0a\u606f\u767c\u5e03\u6a21\u7d44\u3001\u76f8\u7c3f\u6a21\u7d44\u3001\u81ea\u8a02\u7db2\u9801\u6a21\u7d44\u3001\u7121\u969c\u7919\u6aa2\u6e2c\u3001\u8cc7\u5b89\u6aa2\u6e2c\u3001\u99d0\u9ede\u3002",Difficult:[{title:"\u4e00\u7a3f\u591a\u8cbc",content:"\u7531\u65bc\u6e2f\u52d9\u516c\u53f8\u64c1\u6709\u4e94\u9593\u5206\u516c\u53f8\uff0c\u4f46\u6709\u6642\u4e94\u9593\u516c\u53f8\u6703\u9700\u8981\u767c\u5e03\u540c\u4e00\u5247\u6d88\u606f\uff0c\u6240\u4ee5\u5c31\u6709\u9700\u6c42\u5f9e\u67d0\u4e00\u9593\u516c\u53f8\u767c\u51fa\u4f86\u7684\u6d88\u606f\uff0c\u7d93\u904e\u5176\u4ed6\u9593\u516c\u53f8\u7684\u4e3b\u7ba1\u5be9\u6838\u5f8c\u4e5f\u80fd\u767c\u5e03\u5230\u8a72\u9593\u5206\u516c\u53f8"},{title:"\u7db2\u9801\u7121\u969c\u7919",content:"\u516c\u5bb6\u90e8\u9580\u5c08\u6848\u90fd\u9700\u8981\u901a\u904e\u7121\u969c\u7919\u5be9\u6838\uff0c\u7121\u969c\u7919\u5be9\u6838\u7684\u56f0\u96e3\u9ede\u662f\u7db2\u7ad9\u5fc5\u9808\u5728noscript\u7684\u72c0\u614b\u4e0b\uff0c\u6240\u6709\u529f\u80fd\u90fd\u6b63\u5e38\u904b\u4f5c\uff0c\u4ee5\u53ca\u5176\u5716\u7247\u5fc5\u9808\u90fd\u5f97\u6709\u66ff\u4ee3\u6587\u5b57\u7b49\u8aaa\u660e\uff0c\u9019\u90e8\u5206\u9664\u4e86\u6211\u5011\u5fc5\u9808\u6aa2\u67e5\u5916\uff0c\u7db2\u7ad9\u4e0a\u7a3f\u8005\u4e5f\u5f97\u5fc5\u9808\u914d\u5408\u624d\u80fd\u9054\u5230\u3002"},{title:"\u8cc7\u5b89\u4fee\u6b63",content:"\u516c\u5bb6\u90e8\u9580\u5c08\u6848\u90fd\u9700\u8981\u901a\u904e\u8cc7\u5b89\u8edf\u9ad4\u6aa2\u6e2c\uff0c\u6bcf\u5e74\u6aa2\u6e2c\u7528\u7684\u8edf\u9ad4\u4e0d\u898b\u5f97\u4e00\u6a23\uff0c\u800c\u6211\u5011\u5fc5\u9808\u5c07\u5c08\u6848\u88ab\u6383\u51fa\u4f86\u7684\u6240\u6709\u8cc7\u5b89\u554f\u984c\u7d66\u5168\u90e8\u4fee\u6b63\u3002"}]},{Title:"\u81fa\u7063\u6e2f\u52d9\u6e2f\u52e4\u516c\u53f8 - \u5168\u7403\u7db2\u5efa\u7f6e\u6848",imgFolder:"tipc",imgFile:[{fileName:"01",Narrative:"\u6e2f\u52e4\u5168\u7403\u7db2\u9996\u9801\uff0c\u5176\u9996\u9801\u8996\u89ba\u5716\u4ee5\u76f8\u7c3f\u6a21\u7d44\u7dad\u8b77\u5167\u5bb9\uff0c\u524d\u7aef\u9801\u9762\u914d\u5408 fancybox \u4ee5\u5448\u73fe\u5716\u7247\u8f2a\u64ad\uff0c\u4e0b\u65b9\u5404\u985e\u5225\u6a21\u7d44\u4e5f\u90fd\u6709\u5176\u5c0d\u61c9\u7684\u7cfb\u7d71\u505a\u8cc7\u6599\u7dad\u8b77\u3002"},{fileName:"02",Narrative:"\u6e2f\u52e4\u5168\u7403\u7db2\u81ea\u8a02\u9801\u9762\u6a21\u7d44\uff0c\u4e0a\u7a3f\u8005\u4f7f\u7528\u4f7f\u7528CKEditor\u505a\u5167\u6587\u7684\u7de8\u8f2f\uff0c\u4e14\u53ef\u8b93\u67b6\u69cb\u7ba1\u7406\u8005\u65b0\u589e\u66f4\u591a\u7684\u9801\u7c3d\u3002"},{fileName:"03",Narrative:"\u6e2f\u52e4\u5168\u7403\u7db2\u8a0a\u606f\u6a21\u7d44\uff0c\u64c1\u6709\u95dc\u9375\u5b57\u641c\u5c0b\u529f\u80fd\uff0c\u4e14\u5728\u6587\u7ae0\u8d85\u904e\u671f\u9650\u5f8c\u81ea\u52d5\u5c07\u6587\u7ae0\u4e0b\u67b6\uff0c\u4e14\u4fdd\u7559\u65bc\u6b77\u53f2\u5340\u4e2d\u4f9b\u6c11\u773e\u67e5\u8a62\u3002"}],Link:"https://www.tipcmarine.com.tw/",Description:["\u81fa\u7063\u6e2f\u52d9\u6e2f\u52e4\u70ba\u81fa\u7063\u6e2f\u52d9\u5b50\u516c\u53f8\uff0c\u5efa\u7f6e\u7cfb\u7d71\u8207\u81fa\u7063\u6e2f\u52d9\u5168\u7403\u8cc7\u8a0a\u7db2\u76f8\u540c\uff0c\u64c1\u6709\u4e2d\u82f1\u6587\u5169\u500b\u7ad9\u81fa\uff0c\u4e14\u540c\u6a23\u7528\u6709\u6625\u590f\u79cb\u51ac\u56db\u500b\u7248\u578b\u3002","\u7cfb\u7d71\u96d6\u8207\u81fa\u7063\u6e2f\u52d9\u516c\u53f8\u76f8\u540c\uff0c\u4f46\u4f7f\u7528\u7684\u8cc7\u6599\u5eab\u4e0d\u4e00\u6a23\u4ee5\u53ca\u6539\u9996\u9801\u7248\u9762\u4e5f\u9700\u8981\u53e6\u505a\u4fee\u6539\uff0c\u4e14\u9084\u6709\u65b0\u589e\u9996\u9801\u6a21\u7d44\u53ca\u65b0\u589e\u71b1\u9580\u95dc\u9375\u5b57\u7b49\u8a2d\u5b9a\u529f\u80fd\u3002"],Range:"\u7ad9\u53f0\u5efa\u7f6e\u3001\u5168\u7ad9\u7dad\u8b77\u3001\u7121\u969c\u7919\u6aa2\u6e2c\u3001\u8cc7\u5b89\u6aa2\u6e2c\u3001\u65b0\u589e\u90e8\u5206\u9996\u9801\u6a21\u7d44\u3001\u99d0\u9ede\u3002",Difficult:[{title:"\u8907\u88fd\u8cc7\u6599\u5eab",content:"\u7531\u65bc\u6e2f\u52e4\u516c\u53f8\u7684\u7cfb\u7d71\u8207\u6e2f\u52d9\u516c\u53f8\u76f8\u540c\uff0c\u4f46\u8cc7\u6599\u5b58\u653e\u7684\u8cc7\u6599\u5eab\u537b\u4e0d\u4e00\u6a23\uff0c\u6240\u4ee5\u6211\u5f97\u5f9e\u6e2f\u52d9\u516c\u53f8\u90a3\u908a\u8907\u88fd\u4e00\u4efd\u8cc7\u6599\u5eab\u51fa\u4f86\uff0c\u4e26\u4e14\u5c07\u5927\u90e8\u4efd\u8cc7\u6599\u6e05\u7a7a\uff0c\u800c\u56f0\u96e3\u7684\u9ede\u5728\u65bc\u8cc7\u6599\u5eab\u5167\u6709\u4fdd\u5b58\u4e00\u4e9b\u7cfb\u7d71\u4e0a\u7684\u8a2d\u5b9a\uff0c\u5fc5\u9808\u5f97\u5c0d\u7cfb\u7d71\u67b6\u69cb\u975e\u5e38\u719f\u6089\u624d\u80fd\u64cd\u4f5c\u3002"},{title:"\u7ad9\u81fa\u5efa\u7f6e",content:"\u7531\u65bc\u6b64\u5c08\u6848\u4e8b\u6e2f\u52d9\u516c\u53f8\u5efa\u7f6e\u5b8c\u4e00\u5e74\u591a\u5f8c\u624d\u6709\u7684\u5c08\u6848\uff0c\u4e14\u6e2f\u52e4\u516c\u53f8\u7684\u627f\u8fa6\u4eba\u54e1\u8207\u6e2f\u52d9\u516c\u53f8\u4e0d\u540c\uff0c\u4f46\u7576\u6642\u6e2f\u52d9\u516c\u53f8\u7684\u5c08\u6848\u7dad\u8b77\u5e7e\u4e4e\u5df2\u7d93\u7531\u6211\u4e00\u4eba\u5305\u8fa6\uff0c \u6545\u6e2f\u52e4\u516c\u53f8\u5c08\u6848\u5f9e\u8cc7\u6599\u5eab\u7684\u79fb\u8f49\u3001\u7ad9\u81fa\u7684\u5efa\u7f6e\u81f3\u6700\u5f8c\u7684\u99d0\u9ede\u8207\u627f\u8fa6\u4eba\u54e1\u6e9d\u901a\u53ca\u6e2c\u8a66\u4e5f\u90fd\u662f\u7531\u6211\u4e00\u4eba\u5b8c\u6210\u3002"}]},{Title:"\u884c\u653f\u9662\u6027\u5e73\u8655-\u6027\u5e73\u5c0f\u5b78\u5802",imgFolder:"school",imgFile:[{fileName:"01",Narrative:"\u6027\u5e73\u5c0f\u5b78\u5802-\u9996\u9801\uff0c\u6700\u65b0\u6d88\u606f\u8207\u516c\u4f48\u6b04\u986f\u793a\u756b\u9762"},{fileName:"02",Narrative:"\u6027\u5e73\u5c0f\u5b78\u5802\u904a\u6232\u9078\u64c7\u756b\u9762\uff0c\u76ee\u524d\u5171\u6709\u56db\u6b3e\u4e0d\u540c\u985e\u578b\u7684\u904a\u6232\u4f9b\u9078\u64c7\u3002\u82e5\u60f3\u65b0\u589e\u904a\u6232\u7ba1\u7406\u8005\u53ef\u5f9e\u5f8c\u81fa\u65b0\u589e\u3002"},{fileName:"03",Narrative:"\u5feb\u554f\u5feb\u7b54\u904a\u6232\u756b\u9762\uff0c\u95d6\u95dc\u8005\u9808\u57283\u5206\u9418(180\u79d2)\u5167\u7b54\u5c0d10\u984c\u984c\u76ee(\u662f\u975e\u6216\u9078\u64c7\u96a8\u6a5f\u51fa\u984c)\u3002"},{fileName:"04",Narrative:"\u6027\u5e73\u5ba3\u50b3\u8eca\u904a\u6232\u756b\u9762\uff0c\u95d6\u95dc\u8005\u9808\u8fc5\u901f\u700f\u89bd\u984c\u76ee\uff0c\u5229\u7528\u6ed1\u9f20\u9ede\u9078\u6216\u9375\u76e4\u65b9\u5411\u9375\u8b8a\u63db\u8eca\u9053\uff0c\u4ee5\u56de\u7b54\u662f\u975e\u9078\u9805\uff0c\u56de\u7b54\u5b8c\u621010\u984c\u554f\u984c"},{fileName:"05",Narrative:"\u4e5d\u5bae\u683c\u904a\u6232\u756b\u9762\uff0c\u95d6\u95dc\u8005\u6309\u4e0b\u300cSTART\u300d\u3001\u300cSTOP\u300d\u96a8\u6a5f\u9078\u984c\uff0c\u7b54\u5c0d\u984c\u76ee\u5b8c\u62103\u689d\u9023\u7dda\u3002"}],Link:"https://www.gender.ey.gov.tw/school/",Description:"\u884c\u653f\u9662\u6027\u5e73\u8655\u900f\u904e\u7db2\u8def\u4ee5\u5bd3\u6559\u65bc\u6a02\u65b9\u5f0f\u5f15\u5c0e\u5b78\u751f\u53ca\u793e\u6703\u5927\u773e\u95dc\u5fc3\u6027\u5225\u5e73\u7b49\u76f8\u95dc\u8b70\u984c\uff0c\u540c\u6642\u63d0\u5347\u6027\u5225\u5e73\u7b49\u610f\u8b58\uff0c\u5e0c\u671b\u85c9\u7531\u95d6\u95dc\u904a\u6232\u65b9\u5f0f\uff0c\u5ba3\u5c0e\u5bb6\u4e8b\u5206\u64d4\u3001\u60c5\u611f\u6559\u80b2\u53ca\u6027\u5225\u5e73\u7b49\u89c0\u5ff5\u3002",Range:"\u8a0a\u606f\u767c\u5e03\u6a21\u7d44\u3001\u904a\u6232\u5c0f\u6c7d\u8eca\u5f8c\u81fa\u7dad\u8b77\u3002",Difficult:[{title:"\u524d\u5f8c\u7aef\u5206\u96e2\u958b\u767c",content:"\u9019\u662f\u6211\u7b2c\u4e00\u6b21\u7d14\u958b\u767c\u5f8c\u7aef\uff0c\u800c\u540c\u4e8b\u958b\u767c\u524d\u7aef\u3002\u7576\u6642\u6240\u9700\u6e9d\u901a\u7684\u4e8b\u9805\u6bd4\u904e\u53bb\u55ae\u4eba\u958b\u767c\u55ae\u4e00\u6a21\u7d44\u9084\u8981\u591a\uff0c\u4f46\u4e5f\u8b93\u6211\u5b78\u7fd2\u5230\u540c\u4e8b\u958b\u767c\u6642\u7684\u601d\u7dad\u3002"},{title:"\u6559\u80b2\u65b0\u4eba",content:"\u5e36\u9818\u65b0\u9032\u5be6\u7fd2\u751f\u9069\u61c9\u516c\u53f8\u958b\u767c\u6a21\u5f0f\uff0c\u4ee5\u53ca\u5e36\u9818\u65b0\u4eba\u5982\u4f55\u8207\u8a2d\u8a08\u5e2b\u5011\u5408\u4f5c\u3002"}]}],Demo:[{Title:"Croppie\u5716\u7247\u88c1\u5207\u5957\u4ef6 demo",imgFolder:"croppie",imgFile:[{fileName:"01",Narrative:"\u53ef\u62d6\u66f3\u591a\u5f35\u5716\u7247\u81f3\u700f\u89bd\u5668\uff0c\u4e26\u4f7f\u7528Croppie\u5be6\u73fe\u5716\u7247\u526a\u88c1\u3001\u65cb\u8f49\u529f\u80fd\u53ca\u4e0b\u8f09\u3002"}],URL:"https://racedstar.github.io/Croopie-Demo/index.html",Tools:"HTML5\u3001jQuery\u3001Croppie",Description:"Croppie\u662f\u4e00\u500b\u5feb\u901f\u4e14\u5bb9\u6613\u4f7f\u7528\u7684jQuery\u7684\u5716\u50cf\u5916\u639b\u3002\u80fd\u5920\u8fc5\u901f\u7684\u505a\u51fa\u985e\u4f3c\u65bcFaceBook\u7684\u5927\u982d\u7167\u88c1\u526a\u529f\u80fd\u3002",Other:[]},{Title:"\u6a94\u6848\u5206\u4eab\u7db2\u7ad9",imgFolder:"RS",imgFile:[{fileName:"01",Narrative:""},{fileName:"02",Narrative:""},{fileName:"03",Narrative:""},{fileName:"04",Narrative:""},{fileName:"05",Narrative:""}],URL:"http://220.132.95.43/",Tools:"ASP.NET MVC\u3001Entity Framework\u3001jQuery\u3001ajax\u3001fancybox3\u3001bootstrap4",Description:"\u64c1\u6709\u7c21\u6613\u7684\u6703\u54e1\u767b\u5165\u7cfb\u7d71\ufe50\u53ef\u4f9b\u4e0a\u50b3\u5716\u7247\u3001\u6587\u4ef6\u53ca\u58d3\u7e2e\u6a94\uff0c\u4ea6\u6709\u76f8\u7c3f\u7cfb\u7d71\u3002\u76f8\u7c3f\u8207\u5716\u7247\u70ba\u4e00\u5c0d\u591a\u529f\u80fd\uff0c\u5148\u81f3\u5716\u7247\u7cfb\u7d71\u4e0a\u50b3\u5f8c\uff0c\u4e00\u5f35\u5716\u7247\u53ef\u4f9b\u591a\u500b\u76f8\u7c3f\u4f7f\u7528\u3002",Other:["\u6e2c\u8a66\u7528\u5e33\u865f: test","\u6e2c\u8a66\u7528\u5bc6\u78bc: test1234"]},{Title:"\u5bf5\u7269\u7f8e\u5bb9\u7ba1\u7406",imgFolder:"petManager",imgFile:[{fileName:"01",Narrative:""},{fileName:"02",Narrative:""},{fileName:"03",Narrative:""},{fileName:"04",Narrative:""},{fileName:"05",Narrative:""}],URL:"http://220.132.95.43:8081/",Tools:"ASP.NET MVC\u3001Entity Framework\u3001jQuery\u3001ajax\u3001fancybox3\u3001bootstrap4",Description:"\u53ef\u65b0\u589e\u98fc\u4e3b\u3001\u5bf5\u7269\uff0c\u4e5f\u53ef\u4ee5\u81ea\u8a02\u54c1\u7a2e\u8207\u7269\u7a2e\u53ca\u7f8e\u5bb9\u9805\u76ee\u7b49\u3002\u98fc\u4e3b\u8207\u5bf5\u7269\u70ba\u4e00\u5c0d\u591a\u95dc\u4fc2\uff0c\u4e00\u540d\u98fc\u4e3b\u53ef\u64c1\u6709\u591a\u96bb\u5bf5\u7269\u3002\u7d50\u5e33\u529f\u80fd\u9700\u5148\u8a2d\u7f6e\u7f8e\u5bb9\u9805\u76ee\uff0c\u53ea\u6709\u55ae\u7d14\u7684\u6578\u5b57\u7d00\u9304\uff0c\u4e26\u6c92\u6709\u6d89\u53ca\u5230\u91d1\u6d41\u7b49\u5be6\u4f5c\u3002",Other:[]}]}},9:function(e,t,a){e.exports=a(16)}},[[9,2,1]]]);
//# sourceMappingURL=main.00a238b8.chunk.js.map