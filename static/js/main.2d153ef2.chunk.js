(this.webpackJsonptestwebsite=this.webpackJsonptestwebsite||[]).push([[0],{40:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},50:function(e,t,i){},51:function(e,t,i){},52:function(e,t,i){},53:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),a=i(28),s=i.n(a),r=(i(40),i(41),i(5)),j=(i(42),i(55)),l=i(2);i(44);var o=function(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(j.a.div,{className:"background",variants:{initial:{width:"0vh",height:"0vh"},animate:{width:"200vh",height:"200vh",transition:{default:{duration:1},ease:[.6,.01,-.05,.95]},transitionEnd:{display:"none"}}},initial:"initial",animate:"animate"}),Object(l.jsx)(j.a.div,{className:"circle",variants:{initial:{width:"0vh",height:"0vh"},animate:{width:"200vh",height:"200vh",transition:{default:{delay:.1,duration:1},ease:[.6,.01,-.05,.95]},transitionEnd:{display:"none"}}},initial:"initial",animate:"animate"})]})},d=i(25),b=(i(45),Object(n.createContext)({cursorType:"",cursorChangeHandler:function(){}})),h=function(e){var t=Object(n.useState)(""),i=Object(d.a)(t,2),c=i[0],a=i[1];return Object(l.jsx)(b.Provider,{value:{cursorType:c,cursorChangeHandler:function(e){a(e)}},children:e.children})},u=i(18);function O(){var e=Object(n.useContext)(b),t=(e.cursorType,e.cursorChangeHandler),i=Object(n.useState)(!1),c=Object(d.a)(i,2),a=c[0],s=c[1];function r(){s(!1)}return Object(l.jsxs)(j.a.nav,{variants:{initial:{opacity:0},final:{opacity:1,transition:{ease:"easeIn",delay:1.5,duration:1}}},initial:"initial",animate:"final",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)("p",{children:"np."})}),Object(l.jsxs)("div",{className:"hamburger",children:[Object(l.jsx)("div",{className:a?"main":"",children:Object(l.jsx)("div",{className:a?"sidenav":"sidenavNone",children:Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{className:"text",children:"Menu"}),Object(l.jsx)(u.b,{to:"/",onClick:r,children:Object(l.jsx)("div",{className:"marque",children:Object(l.jsxs)("p",{className:"links",children:["Home",Object(l.jsx)("br",{})," Home"]})})}),Object(l.jsx)(u.b,{to:"/about",onClick:r,children:Object(l.jsx)("div",{className:"marque",children:Object(l.jsxs)("p",{className:"links",children:["About Me",Object(l.jsx)("br",{})," About Me"]})})}),Object(l.jsx)(u.b,{to:"/projects",onClick:r,children:Object(l.jsx)("div",{className:"marque",children:Object(l.jsxs)("p",{className:"links",children:["Projects",Object(l.jsx)("br",{})," Projects"]})})}),Object(l.jsx)(u.b,{to:"/contactme",onClick:r,children:Object(l.jsx)("div",{className:"marque",children:Object(l.jsxs)("p",{className:"links",children:["Contact Me",Object(l.jsx)("br",{})," Contact Me"]})})})]})})}),Object(l.jsx)("div",{onMouseEnter:function(){return t("nav")},onMouseLeave:function(){return t("")},children:Object(l.jsxs)("div",{onClick:a?r:function(){s(!0)},className:a?"menuActive":"menu",children:[Object(l.jsx)("div",{className:"line"}),Object(l.jsx)("div",{className:"line"})]})})]})]})}i(50);var x=i(17);function v(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(x.b,{children:Object(l.jsx)("title",{children:"Home Page | Nishanth Prajith"})}),Object(l.jsx)(j.a.div,{variants:{initial:{opacity:0},final:{opacity:1,transition:{ease:"easeInOut",default:{delay:4,duration:1}}}},initial:"initial",animate:"final",children:Object(l.jsx)("p",{children:"Home Page"})})]})}i(51);function m(){return Object(l.jsxs)("div",{style:{overflow:"none"},children:[Object(l.jsx)(x.a,{children:Object(l.jsx)("title",{children:"About Me Page | Nishanth Prajith"})}),Object(l.jsx)(j.a.div,{variants:{initial:{opacity:0},final:{opacity:1,transition:{ease:"easeInOut",default:{delay:1.5,duration:1}}}},initial:"initial",animate:"final",children:Object(l.jsx)("h1",{children:"About Page"})})]})}function f(){return Object(l.jsxs)("div",{style:{overflow:"none"},children:[Object(l.jsx)(x.a,{children:Object(l.jsx)("title",{children:"Projects Page | Nishanth Prajith"})}),Object(l.jsx)(j.a.div,{variants:{initial:{opacity:0},final:{opacity:1,transition:{ease:"easeInOut",default:{delay:1.5,duration:1}}}},initial:"initial",animate:"final",children:Object(l.jsx)("h1",{children:"Project Page"})})]})}function p(){return Object(l.jsxs)("div",{style:{overflow:"none"},children:[Object(l.jsx)(x.a,{children:Object(l.jsx)("title",{children:"Contact Me Page | Nishanth Prajith"})}),Object(l.jsx)(j.a.div,{variants:{initial:{opacity:0},final:{opacity:1,transition:{ease:"easeInOut",default:{delay:1.5,duration:1}}}},initial:"initial",animate:"final",children:Object(l.jsx)("h1",{children:"Contact Page"})})]})}i(52);var y=function(){var e=Object(n.useContext)(b),t=e.cursorType,i=(e.cursorChangeHandler,function(){var e=Object(n.useState)({x:null,y:null}),t=Object(d.a)(e,2),i=t[0],c=t[1];return Object(n.useEffect)((function(){var e=function(e){var t=e.clientX,i=e.clientY;c({x:t,y:i})};return document.addEventListener("mousemove",e),function(){document.removeEventListener("mousemove",e)}}),[]),i}()),c=i.x,a=i.y;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{style:{left:"".concat(c,"px"),top:"".concat(a,"px")},className:"ring "+t}),Object(l.jsx)("div",{className:"dot "+t,style:{left:"".concat(c,"px"),top:"".concat(a,"px")}})]})},N=i(56);var g=function(){var e=Object(r.f)();return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(y,{}),Object(l.jsxs)(N.a,{children:[Object(l.jsx)(O,{}),Object(l.jsxs)(r.c,{location:e,children:[Object(l.jsx)(r.a,{exact:!0,path:"/",children:Object(l.jsx)(v,{})}),Object(l.jsxs)(r.a,{path:"/about",children:[Object(l.jsx)(o,{}),Object(l.jsx)(m,{})]}),Object(l.jsxs)(r.a,{path:"/projects",children:[Object(l.jsx)(o,{}),Object(l.jsx)(f,{})]}),Object(l.jsxs)(r.a,{path:"/contactme",children:[Object(l.jsx)(o,{}),Object(l.jsx)(p,{})]})]},e.key)]}),Object(l.jsx)(P,{versionNumber:"v1.0"}),!1,console.log(false)]})},P=function(e){var t=e.versionNumber;return Object(l.jsx)("div",{className:"versionNumber",children:Object(l.jsx)("p",{children:t})})};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(h,{children:Object(l.jsx)(u.a,{children:Object(l.jsx)(g,{})})})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.2d153ef2.chunk.js.map