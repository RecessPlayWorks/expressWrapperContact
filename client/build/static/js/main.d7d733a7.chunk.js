(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{36:function(e,n,t){e.exports=t(68)},50:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(22),l=t.n(i),s=t(3),m=t(4);t(11),t(69);function o(){var e=Object(s.a)(["\ngrid-row: 1;\ngrid-column: 1;\nborder: 1px solid #222;\nborder-width: 0px;\nborder-bottom-width: 1px;\ndisplay: flex;\njustify-content: flex-start;\nalign-items: center;\npadding: 2rem 2%;\n  img {\n    width: 3vw;\n    margin: auto;\n    margin-left: 20%;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    filter: grayscale(100%);\n    &:hover {\n      filter: grayscale(10%);\n    }           \n"]);return o=function(){return e},e}m.a.header(o()),t(50);var c=t(10),d=t.n(c),u=t(26),h=t(27),g=t(28),p=t(29),f=t(34),v=t(30),b=t(6),w=t(35),y=t(31),E=t.n(y);function j(){var e=Object(s.a)(["\n    background: grey;\n    width: 100%;\n    height: 100%;\n    display: grid;\n        fieldset {\n            margin: auto;\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-template-rows: repeat(4, 1fr);\n            width: 80%;\n        }\n        & input {\n            width: 100%;\n            height: 5vh;\n            &.name {\n                font-size: 2rem;\n            }\n            &.email {\n                font-size: 1.8rem;\n            }\n            &.message {\n                height: 15vh;\n                font-size: 2rem;\n            }\n        }\n    & button {\n        width: 22vw;\n        height: 3vh;\n        margin: auto;\n        background: #269e6c;\n        color: #fff;\n        font-size: 0.8rem;\n    }\n"]);return j=function(){return e},e}var x=m.a.form(j()),O=function(e){function n(e){var t;return Object(g.a)(this,n),(t=Object(f.a)(this,Object(v.a)(n).call(this,e))).state={email:"",name:"",message:""},t.changeHandler=t.changeHandler.bind(Object(b.a)(t)),t.submitHandler=t.submitHandler.bind(Object(b.a)(t)),t}return Object(w.a)(n,e),Object(p.a)(n,[{key:"changeHandler",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"submitHandler",value:function(){var e=Object(u.a)(d.a.mark((function e(n){var t,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),t=this.state,a=t.email,r=t.name,i=t.message,e.prev=2,e.next=5,E.a.post("/api/form",{name:r,email:a,message:i});case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.email,t=e.name,a=e.message;return r.a.createElement(x,{onSubmit:this.submitHandler},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Test Mail Form"),r.a.createElement("label",{htmlFor:"name"},"name"),r.a.createElement("input",{onChange:this.changeHandler,className:"name",name:"name",type:"text",placeholder:"name",value:t}),r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{onChange:this.changeHandler,className:"email",name:"email",type:"email",placeholder:"email",value:n}),r.a.createElement("label",{htmlFor:"message"},"message"),r.a.createElement("input",{onChange:this.changeHandler,className:"message",name:"message",type:"textarea",placeholder:"message",value:a})),r.a.createElement("button",{type:"submit"},"Send Email"))}}]),n}(a.Component);function k(){var e=Object(s.a)(["\n  background: #F2EEEA;\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 100vw;\n  grid-template-rows: 8vh 92vh;\n  overflow: hidden;\n  & main {\n    grid-row: 2;\n    grid-column: 1;\n    display: grid;\n    grid-template-columns:34vw 66vw;\n    grid-template-rows: 50vh 42vh;\n    .section-right {\n      grid-row: 1/3;\n      grid-column: 2;\n      display: grid;\n      border: 1px solid #222;\n      border-width: 0px;\n      border-left-width: 1px;\n    }\n    .section-left-bot {\n      padding: 10%;\n      grid-row: 2/3;\n      grid-column: 1;\n      display: grid;\n    }    \n  }\n"]);return k=function(){return e},e}var H=m.a.div(k());var C=function(){return r.a.createElement(H,{className:"app-js-div App"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement(O,null))};l.a.render(r.a.createElement(C,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.d7d733a7.chunk.js.map