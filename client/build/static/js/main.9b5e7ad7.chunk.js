(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{32:function(e,n,a){e.exports=a(60)},37:function(e,n,a){},38:function(e,n,a){},60:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),l=a(17),i=a.n(l),m=(a(37),a(38),a(3)),s=a.n(m),c=a(18),u=a(19),o=a(20),h=a(21),d=a(28),g=a(22),p=a(2),f=a(29),b=a(23),v=a(25),E=a(24),y=a.n(E);function j(){var e=Object(b.a)(["\n    background: grey;\n    width: 100%;\n    height: 100%;\n    display: grid;\n        fieldset {\n            margin: auto;\n            display: grid;\n            grid-template-columns: 1fr;\n            grid-template-rows: repeat(4, 1fr);\n            width: 80%;\n        }\n        & input {\n            width: 100%;\n            height: 5vh;\n            &.name {\n                font-size: 2rem;\n            }\n            &.email {\n                font-size: 1.8rem;\n            }\n            &.message {\n                height: 15vh;\n                font-size: 2rem;\n            }\n        }\n    & button {\n        width: 22vw;\n        height: 3vh;\n        margin: auto;\n        background: #269e6c;\n        color: #fff;\n        font-size: 0.8rem;\n    }\n"]);return j=function(){return e},e}var w=v.a.form(j()),H=function(e){function n(e){var a;return Object(o.a)(this,n),(a=Object(d.a)(this,Object(g.a)(n).call(this,e))).state={email:"",name:"",message:""},a.changeHandler=a.changeHandler.bind(Object(p.a)(a)),a.submitHandler=a.submitHandler.bind(Object(p.a)(a)),a}return Object(f.a)(n,e),Object(h.a)(n,[{key:"changeHandler",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"submitHandler",value:function(){var e=Object(c.a)(s.a.mark((function e(n){var a,t,r,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a=this.state,t=a.email,r=a.name,l=a.message,e.prev=2,e.next=5,y.a.post("/api/form",{name:r,email:t,message:l});case 5:e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.log(e.t0);case 11:case"end":return e.stop()}}),e,this,[[2,8]])})));return function(n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,n=e.email,a=e.name,t=e.message;return r.a.createElement(w,{onSubmit:this.submitHandler},r.a.createElement("fieldset",null,r.a.createElement("legend",null,"Test Mail Form"),r.a.createElement("label",{htmlFor:"name"},"name"),r.a.createElement("input",{onChange:this.changeHandler,className:"name",name:"name",type:"text",placeholder:"name",value:a}),r.a.createElement("label",{htmlFor:"email"},"email"),r.a.createElement("input",{onChange:this.changeHandler,className:"email",name:"email",type:"email",placeholder:"email",value:n}),r.a.createElement("label",{htmlFor:"message"},"message"),r.a.createElement("input",{onChange:this.changeHandler,className:"message",name:"message",type:"textarea",placeholder:"message",value:t})),r.a.createElement("button",{type:"submit"},"Send Email"))}}]),n}(t.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"Contact Us"),r.a.createElement(H,null)))};i.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9b5e7ad7.chunk.js.map