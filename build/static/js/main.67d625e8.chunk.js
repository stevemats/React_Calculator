(this["webpackJsonpreact-calculator"]=this["webpackJsonpreact-calculator"]||[]).push([[0],{17:function(n,t,e){},21:function(n,t,e){"use strict";e.r(t);var r,c,a,o,i,d=e(0),l=e.n(d),s=e(9),u=e.n(s),b=(e(17),e(5)),j=e(2),p=e(3),x=p.a.div(r||(r=Object(j.a)(["\n    display: grid;\n    justify-content: center;\n    align-content: center;\n    width: 400px;\n    margin: 40px auto;\n    grid-template-columns: repeat(4, 100px);\n    grid-template-rows: minmax(120px, auto) repeat(5, 100px);\n    box-shadow: 2px 2px 10px #333;\n    border-radius: 10px;\n"]))),g=p.a.div(c||(c=Object(j.a)(["\n    grid-column: 1 / -1;\n    background-color: rgba(60, 64, 67, 0.75);\n    display: flex;\n    justify-content: space-around;\n    flex-direction: column;\n    padding: 10px;\n    word-wrap: break-word;\n    word-breakL break-all;\n    text-align: right;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n"]))),h=p.a.div(a||(a=Object(j.a)(["\n    color: rgba(255, 255, 255, 0.75);\n    font-size: 1.5 rem;\n"]))),O=p.a.div(o||(o=Object(j.a)(["\n    color: white;\n    font-size: 2.5 rem;\n"]))),k=p.a.button(i||(i=Object(j.a)(["\n    cursor: pointer;\n    font-size: 2rem;\n    border: 1px outset white;\n    outline: none;\n    background-color: rgba(255, 255, 255, 0.75);\n    &:hover {\n        background-color: rgba(255, 255, 255, 0.9);\n    }\n\n    /* EXPANDED FORM EXAMPLE */\n    ","\n    \n    ","\n    ","\n    ","\n    ","\n    ","\n"])),(function(n){var t=n.gridSpan;if(t)return"grid-column: span ".concat(t,";")}),(function(n){var t=n.gridSpan;return t&&"grid-column: span ".concat(t,";")}),(function(n){return n.operation&&"background-color: gray;"}),(function(n){return n.control&&"background-color: skyblue;"}),(function(n){return n.equals&&"border-bottom-right-radius: 10px; background-color: gray;"}),(function(n){return n.period&&"border-bottom-left-radius: 10px; background-color: skyblue;"})),f=e(1);function C(){var n=Object(d.useState)(""),t=Object(b.a)(n,2),e=t[0],r=t[1],c=Object(d.useState)(""),a=Object(b.a)(c,2),o=a[0],i=a[1],l=Object(d.useState)(""),s=Object(b.a)(l,2),u=s[0],j=s[1],p=function(n){var t=n.target.getAttribute("data");"."==t&&o.includes(".")||i(o+t)},C=function(n){if(""!==o){if(""!==e){var t=m();r(t)}else r(o);i(""),j(n.target.getAttribute("data"))}},m=function(){var n,t=parseFloat(e),r=parseFloat(o);if(!isNaN(t)&&!isNaN(r)){switch(u){case"\xf7":n=t/r;break;case"\xd7":n=t*r;break;case"+":n=t+r;break;case"-":n=t-r;break;default:return}return n}};return Object(f.jsxs)(x,{children:[Object(f.jsxs)(g,{children:[Object(f.jsxs)(h,{children:[e," ",u]}),Object(f.jsx)(O,{children:o})]}),Object(f.jsx)(k,{onClick:function(){i(""),r(""),j("")},gridSpan:2,control:!0,children:"AC"}),Object(f.jsx)(k,{onClick:function(){i(String(o).slice(0,-1))},control:!0,children:"DEL"}),Object(f.jsx)(k,{data:"\xf7",onClick:C,operation:!0,children:"\xf7"}),Object(f.jsx)(k,{data:"7",onClick:p,children:"7"}),Object(f.jsx)(k,{data:"8",onClick:p,children:"8"}),Object(f.jsx)(k,{data:"9",onClick:p,children:"9"}),Object(f.jsx)(k,{data:"\xd7",onClick:C,operation:!0,children:"\xd7"}),Object(f.jsx)(k,{data:"4",onClick:p,children:"4"}),Object(f.jsx)(k,{data:"5",onClick:p,children:"5"}),Object(f.jsx)(k,{data:"6",onClick:p,children:"6"}),Object(f.jsx)(k,{data:"+",onClick:C,operation:!0,children:"+"}),Object(f.jsx)(k,{data:"1",onClick:p,children:"1"}),Object(f.jsx)(k,{data:"2",onClick:p,children:"2"}),Object(f.jsx)(k,{data:"3",onClick:p,children:"3"}),Object(f.jsx)(k,{data:"-",onClick:C,operation:!0,children:"-"}),Object(f.jsx)(k,{data:".",period:!0,onClick:p,children:"."}),Object(f.jsx)(k,{data:"0",onClick:p,children:"0"}),Object(f.jsx)(k,{gridSpan:2,onClick:function(){var n=m();void 0!=n&&null!=n&&(i(n),r(""),j(""))},equals:!0,children:"="})]})}var m=function(){return Object(f.jsx)(C,{})},v=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,22)).then((function(t){var e=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;e(n),r(n),c(n),a(n),o(n)}))};u.a.render(Object(f.jsx)(l.a.StrictMode,{children:Object(f.jsx)(m,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.67d625e8.chunk.js.map