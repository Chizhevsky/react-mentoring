(this["webpackJsonpreact-mentoring"]=this["webpackJsonpreact-mentoring"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n(1),a=n.n(s),i=n(31),r=n.n(i),o=(n(39),n(10)),l=n.n(o),j=n(13),h=n(14),u=n(15),d=n(17),m=n(16),b=n(11),f=n.n(b),p=(n(59),n.p+"static/media/logo.720eeeb0.svg"),v=n.p+"static/media/settings.f3f15426.svg",O=n(8);var g=function(e){var t=e.isLoggedIn;return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"header__wrapper",children:[Object(c.jsx)(O.b,{className:"header__logo",to:"/",children:Object(c.jsx)("img",{className:"header__logo-img",src:p,alt:"netflix"})}),Object(c.jsxs)("nav",{className:"header__nav",children:[Object(c.jsx)(O.b,{className:"header__link",to:"/settings",children:Object(c.jsx)("img",{className:"header__settings-img",src:v,alt:"settings"})}),"undefiend"!==t&&Object(c.jsx)(O.b,{className:"header__link",to:t?"logout":"login",children:t?"Log out":"Log In"})]})]})})},x=(n(65),n(66),n(2)),y=n(33);n(67);var _=function(e){return Object(c.jsxs)("section",{className:"main-film-section",children:[Object(c.jsxs)("div",{className:"main-film-section__video-info",children:[Object(c.jsx)("h3",{children:e.film.name}),Object(c.jsx)("h5",{children:e.film.description}),Object(c.jsx)("button",{children:"Watch"})]}),Object(c.jsx)("div",{className:"main-film-section__video",children:Object(c.jsx)("iframe",{title:"top-film-title",width:"500px",height:"250px",src:"https://www.youtube.com/embed/".concat(e.film.source,"?autoplay=1&mute=1")})})]})};n(68);function N(e){var t=e.picture;return Object(c.jsxs)("div",{className:"picture-card",style:{backgroundImage:"url(".concat(t.photoSource,")")},children:[Object(c.jsx)("h3",{className:"picture-card__name",children:t.name}),Object(c.jsx)("h6",{className:"picture-card__description",children:t.description})]})}n(69);function k(e){var t=e.categories;return Object(c.jsx)("section",{className:"categories-section",children:t.map((function(e){return Object(c.jsxs)("div",{className:"categories-section_section",children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("div",{className:"categories-section__cards",children:e.items.map((function(e){return Object(c.jsx)(N,{picture:e},e.name)}))})]},e.name)}))})}n(70);var w=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={topFilm:null,categories:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,s,a,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=f.a.get("https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/top-film"),n=f.a.get("https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/categories"),e.next=4,f.a.all([t,n]);case 4:c=e.sent,s=Object(y.a)(c,2),a=s[0].data,i=s[1].data,this.setState({topFilm:a,categories:i});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return Object(c.jsxs)("main",{className:"home-page-main",children:[this.state.topFilm&&Object(c.jsx)(_,{film:this.state.topFilm}),(null===(e=this.state.categories)||void 0===e?void 0:e.length)>0&&Object(c.jsx)(k,{categories:this.state.categories})]})}}]),n}(a.a.Component);var I=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"LogIn page"})})};var L=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Settings page"})})};var C=function(){return Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{exact:!0,path:"/",children:Object(c.jsx)(w,{})}),Object(c.jsx)(x.a,{path:"/settings",children:Object(c.jsx)(L,{})}),Object(c.jsx)(x.a,{path:"/login",children:Object(c.jsx)(I,{})})]})},F=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(h.a)(this,n);for(var c=arguments.length,s=new Array(c),a=0;a<c;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={auth:null},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films/auth");case 2:t=e.sent,n=t.data,this.setState({auth:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return Object(c.jsxs)("div",{children:[Object(c.jsx)(g,{isLoggedIn:null===(e=this.state.auth)||void 0===e?void 0:e.isLoggedIn}),Object(c.jsx)(C,{})]})}}]),n}(a.a.Component);r.a.render(Object(c.jsx)(O.a,{children:Object(c.jsx)(F,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.2eb6091b.chunk.js.map