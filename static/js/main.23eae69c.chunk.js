(this["webpackJsonpdoggy-daycare"]=this["webpackJsonpdoggy-daycare"]||[]).push([[0],{34:function(e,t,n){},35:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(27),r=n.n(i),s=(n(34),n.p,n(35),n(14)),o=n(2),j=n(8),u=n(9),l=n(11),d=n(10),b=n(28),h=n.n(b),m=new(function(){function e(){Object(j.a)(this,e)}return Object(u.a)(e,[{key:"getAll",value:function(){return h.a.get("https://api.jsonbin.io/b/6087d9c3f6655022c46d0b41").then((function(e){return localStorage.setItem("data",JSON.stringify(e.data)),e.data}))}},{key:"getCurrentData",value:function(){return JSON.parse(localStorage.getItem("data"))}}]),e}()),O=n(1),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var c;return Object(j.a)(this,n),(c=t.call(this,e)).getDataFromLocalStorage=function(){var e=m.getCurrentData();c.setState({items:e}),console.log(c.state.items)},c.itemToItem=function(e){var t=e.name,n=e.age,a=e.breed,i=e.sex,r=e.img;return Object(O.jsx)(p,{name:t,age:n,breed:a,sex:i,image:r,showItemsDescription:c.handleClick},t)},c.handleClick=function(e,t){},c.state={items:[]},c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.getAndSaveDataFromApi()}},{key:"getAndSaveDataFromApi",value:function(){var e=this;m.getAll().then((function(t){e.getDataFromLocalStorage()}))}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"itemList",children:this.state.items.map(this.itemToItem)})}}]),n}(a.a.Component),p=function(e){var t=e.name,n=e.age,c=e.image,a=e.breed,i=e.sex,r=e.showItemsDescription;return Object(O.jsxs)("div",{className:"item",onClick:function(){return r(t)},children:[Object(O.jsx)("img",{src:c}),Object(O.jsxs)("h3",{children:[t," "]}),Object(O.jsxs)("div",{className:"itemDetails",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"BREED"}),Object(O.jsx)("h5",{children:a})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"AGE"}),Object(O.jsxs)("h5",{children:[n," "]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("p",{children:"SEX"}),Object(O.jsx)("h5",{children:i})]})]}),Object(O.jsx)("button",{children:"Look at me!"})]})},f=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"homePage",children:["welcome",Object(O.jsx)(s.b,{to:"/register",children:Object(O.jsx)("button",{children:"REGISTER"})})]})}}]),n}(a.a.Component),x=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"RegisterPage",children:Object(O.jsx)(g,{})})}}]),n}(a.a.Component),v=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"homePage",children:"details about item"})}}]),n}(a.a.Component);var y=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(s.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)(o.a,{exact:!0,path:"/welcome",component:f}),Object(O.jsx)(o.a,{path:"/register",component:x}),Object(O.jsx)(o.a,{path:"/details",component:v})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(y,{})}),document.getElementById("root")),k()}},[[63,1,2]]]);
//# sourceMappingURL=main.23eae69c.chunk.js.map