(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e,t){n.exports=t(30)},22:function(n,e,t){},30:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(3),i=t.n(o),c=(t(22),t(8)),s=t(9),u=t(13),l=t(10),m=t(14),h=t(1),d=t(2);function f(){var n=Object(h.a)(["\n    text-align: center;\n    display: inline-block;\n    border-radius: .5em;\n    border-width: .25rem;\n    padding: 3em;\n    margin: 1em;\t\n\n    -moz-osx-font-smoothing:grayscale\n    backface-visibility:hidden\n    \n    transition: transform 0.25s ease\n\n    :hover, :focus {\n        transform: scale(1.05)\n    }\n    :active {\n        transform: scale(0.9);\n    }\n\n    box-shadow: 4px 4px 8px 0px rgba( 0, 0, 0, 0.2 );\n    cursor: pointer;\n    background: rgba(255, 215, 170, .5);\n    z-index: 0;\n"]);return f=function(){return n},n}var p=d.a.section(f()),b=function(n){var e=n.name,t=n.email,r=n.id,o=n.username;return a.a.createElement(p,null,a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),a.a.createElement("div",null,a.a.createElement("h2",null,e),a.a.createElement("p",null,o),a.a.createElement("p",null,t)))};function g(){var n=Object(h.a)(["\n    text-align: center;\n"]);return g=function(){return n},n}var v=d.a.section(g()),w=function(n){var e=n.robots,t=e.map(function(n,t){return a.a.createElement(b,{key:t,id:e[t].id,name:e[t].name,username:e[t].username,email:e[t].email})});return a.a.createElement(v,null,t)};function x(){var n=Object(h.a)(["\n    padding: 1em;\n    border: solid 1px rgb(128, 42, 21);\n    background: rgba(255, 215, 170, 0.6);\n    font-size: 1.25em;\n"]);return x=function(){return n},n}var E=d.a.input(x()),y=function(n){n.searchField;var e=n.searchChange;return a.a.createElement(E,{type:"search",placeholder:"Search robots...",onChange:e})};function j(){var n=Object(h.a)(["\n    padding: 1em;\n    overflow-y: scroll;\n    position: fixed;\n    bottom: 10px;\n    top: 230px;\n    width: ",";\n    height: ",";\n    z-index: 0;\n"]);return j=function(){return n},n}var k=d.a.section(j(),function(n){return n.width||"500px"},function(n){return n.height||"500px"});function O(){var n=Object(h.a)(["\n    text-align: center;\n    padding-bottom: 1em;\n"]);return O=function(){return n},n}function C(){var n=Object(h.a)(["\n    color: #000;\n    text-weight: bold;\n    font-size: 6em;\n    display: block;\n    text-align: center;\n    margin-top: .2em;\n    margin-bottom: .3em;\n"]);return C=function(){return n},n}var F=d.a.h1(C()),S=d.a.section(O()),z=function(n){function e(){var n;return Object(c.a)(this,e),(n=Object(u.a)(this,Object(l.a)(e).call(this))).onSearchChange=function(e){n.setState({searchField:e.target.value})},n.catchEmpty=function(n){n.length||n.push({id:99999999,name:"Oh Nos!",username:"There were no results",email:"Try Searching Again :("})},n.state={robots:[],searchField:""},n}return Object(m.a)(e,n),Object(s.a)(e,[{key:"componentDidMount",value:function(){var n=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(n){return n.json()}).then(function(e){return n.setState({robots:e})})}},{key:"render",value:function(){var n=this.state,e=n.robots,t=n.searchField,r=e.filter(function(n){return n.name.toLowerCase().includes(t.toLowerCase())});return this.catchEmpty(r),a.a.createElement("div",{className:"top"},a.a.createElement(F,null,"RoboFriends"),a.a.createElement(S,null,a.a.createElement(y,{searchChange:this.onSearchChange,searchField:t})),a.a.createElement(k,{height:"80%",width:"100%"},a.a.createElement(w,{robots:r})))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.2183febe.chunk.js.map