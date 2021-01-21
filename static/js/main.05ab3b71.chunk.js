(this["webpackJsonpreact-mentoring"]=this["webpackJsonpreact-mentoring"]||[]).push([[0],{39:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),s=n.n(a),i=n(31),r=n.n(i),o=(n(39),n(10)),l=n.n(o),j=n(13),u=n(14),h=n(15),d=n(17),m=n(16),b=n(11),p=n.n(b),g=(n(59),n.p+"static/media/logo.720eeeb0.svg"),O=n.p+"static/media/settings.f3f15426.svg",f=n(8);var v=function(e){var t=e.isLoggedIn;return Object(c.jsx)("header",{className:"header",children:Object(c.jsxs)("div",{className:"header__wrapper",children:[Object(c.jsx)(f.b,{className:"header__logo",to:"/",children:Object(c.jsx)("img",{className:"header__logo-img",src:g,alt:"netflix"})}),Object(c.jsxs)("nav",{className:"header__nav",children:[Object(c.jsx)(f.b,{className:"header__link",to:"/settings",children:Object(c.jsx)("img",{className:"header__settings-img",src:O,alt:"settings"})}),"undefined"!==t&&Object(c.jsx)(f.b,{className:"header__link",to:t?"/logout":"/login",children:t?"Log out":"Log In"})]})]})})},x=(n(65),n(66),n(2)),_=n(33);n(67);var y=function(e){var t=e.film,n=t.name,a=t.description,s=t.source;return Object(c.jsxs)("section",{className:"main-film-section",children:[Object(c.jsxs)("div",{className:"main-film-section__video-info",children:[Object(c.jsx)("h3",{children:n}),Object(c.jsx)("h5",{children:a}),Object(c.jsx)("button",{children:"Watch"})]}),Object(c.jsx)("div",{className:"main-film-section__video",children:Object(c.jsx)("iframe",{title:"top-film-title",width:"500px",height:"250px",src:"https://www.youtube.com/embed/".concat(s,"?autoplay=1&mute=1")})})]})};n(68);function N(e){var t=e.picture;return Object(c.jsxs)("div",{className:"picture-card",style:{backgroundImage:'url("'.concat(t.photoSource,'")')},children:[Object(c.jsx)("h3",{className:"picture-card__name",children:t.name}),Object(c.jsx)("h6",{className:"picture-card__description",children:t.description})]})}n(69);function k(e){var t=e.categories;return Object(c.jsx)("section",{className:"categories-section",children:t.map((function(e){return Object(c.jsxs)("div",{className:"categories-section_section",children:[Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("div",{className:"categories-section__cards",children:e.items.map((function(e){return Object(c.jsx)(N,{picture:e},e.name)}))})]},e.name)}))})}n(70);var w="https://my-json-server.typicode.com/Chizhevsky/my-fake-server-for-films",I=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={topFilm:null,categories:null},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,n,c,a,s,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.a.get("".concat(w,"/top-film")),n=p.a.get("".concat(w,"/categories")),e.next=4,p.a.all([t,n]);case 4:c=e.sent,a=Object(_.a)(c,2),s=a[0].data,i=a[1].data,this.setState({topFilm:s,categories:i});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return Object(c.jsxs)("main",{className:"home-page-main",children:[this.state.topFilm&&Object(c.jsx)(y,{film:this.state.topFilm}),(null===(e=this.state.categories)||void 0===e?void 0:e.length)>0&&Object(c.jsx)(k,{categories:this.state.categories})]})}}]),n}(s.a.Component);var L=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"LogIn page"})})};var F=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h1",{children:"Settings page"})})};var S=function(){return Object(c.jsxs)(x.c,{children:[Object(c.jsx)(x.a,{path:"/settings",children:Object(c.jsx)(F,{})}),Object(c.jsx)(x.a,{path:"/login",children:Object(c.jsx)(L,{})}),Object(c.jsx)(x.a,{path:"/",children:Object(c.jsx)(I,{})})]})},C=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(u.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={auth:null},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.props),e.next=3,p.a.get("".concat(w,"/auth"));case 3:t=e.sent,n=t.data,this.setState({auth:n});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e;return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{isLoggedIn:null===(e=this.state.auth)||void 0===e?void 0:e.isLoggedIn}),Object(c.jsx)(S,{})]})}}]),n}(s.a.Component);r.a.render(Object(c.jsx)(f.a,{basename:"/react-mentoring",children:Object(c.jsx)(C,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.05ab3b71.chunk.js.map