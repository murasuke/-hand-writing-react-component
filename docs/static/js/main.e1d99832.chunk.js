(this["webpackJsonphand-writing"]=this["webpackJsonphand-writing"]||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var i=n(1),c=n.n(i),r=n(5),a=n.n(r),o=n(2),l=n(3),s=n(0),j=function(e){var t=Object(i.useRef)(null),n=Object(i.useState)(!1),c=Object(l.a)(n,2),r=c[0],a=c[1];Object(i.useEffect)((function(){var n=t.current.getContext("2d");n&&(n.clearRect(0,0,e.width,e.height),e.onUpdateCanvas&&e.onUpdateCanvas(t.current))}),[e.clear]);var o=function(){var n=t.current.getContext("2d");return n.lineWidth=e.lineWidth,n.lineCap=e.lineCap,n.strokeStyle=e.lineColor,n},j=function(){a(!1),e.onUpdateCanvas&&e.onUpdateCanvas(t.current)};return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("canvas",{ref:t,width:e.width,height:e.height,onMouseDown:function(e){var t=e.nativeEvent,n=t.offsetX,i=t.offsetY;a(!0);var c=o();c.beginPath(),c.moveTo(n,i)},onMouseMove:function(e){if(r){var t=e.nativeEvent,n=t.offsetX,i=t.offsetY,c=o();c.lineTo(n,i),c.stroke()}},onMouseUp:j,onMouseLeave:j})})};j.defaultProps={width:500,height:300,lineWidth:10,lineColor:"rgb(100, 100, 100)",lineCap:"round"};var d=j;var u=function(){var e=c.a.useState(null),t=Object(l.a)(e,2),n=t[0],i=t[1],r=c.a.useState({lineWidth:7,lineColor:"#5555bb",clear:!1}),a=Object(l.a)(r,2),j=a[0],u=a[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{children:"HandWriting(\u624b\u66f8\u304d)\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u5229\u7528\u30b5\u30f3\u30d7\u30eb"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"HandWriting\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("label",{htmlFor:"lineWidth",children:"\u7dda\u306e\u592a\u3055\uff1a"}),Object(s.jsx)("select",{name:"lineWidth",value:j.lineWidth,onChange:function(e){u((function(t){return Object(o.a)(Object(o.a)({},t),{},{lineWidth:parseInt(e.target.value,10)})}))},children:[1,2,3,5,7,10,14,20].map((function(e){return Object(s.jsx)("option",{value:e,children:e},e)}))}),"\xa0\xa0",Object(s.jsx)("label",{htmlFor:"lineColor",children:"\u8272\uff1a"}),Object(s.jsx)("input",{name:"lineColor",type:"color",value:j.lineColor,onChange:function(e){u((function(t){return Object(o.a)(Object(o.a)({},t),{},{lineColor:e.target.value})}))}}),"\xa0\xa0",Object(s.jsx)("button",{onClick:function(){u((function(e){return Object(o.a)(Object(o.a)({},e),{},{clear:!e.clear})}))},children:"\u30af\u30ea\u30a2"})]}),Object(s.jsx)(d,Object(o.a)({onUpdateCanvas:function(e){i(e.toDataURL("image/png"))}},j))]}),Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"\u624b\u66f8\u304d\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u66f4\u65b0\u30a4\u30d9\u30f3\u30c8\u30b5\u30f3\u30d7\u30eb(img\u30bf\u30b0\u306b\u53cd\u6620)"}),Object(s.jsx)("img",{id:"newImg",alt:"",src:n})]}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{type:"button",onClick:function(){var e=document.createElement("a");e.href=n,e.download="handwriting.png",e.click(),e.remove()},children:"\u624b\u66f8\u304d\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u753b\u50cf\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9"})})]})};a.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(u,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.e1d99832.chunk.js.map