(this["webpackJsonpcours-react"]=this["webpackJsonpcours-react"]||[]).push([[0],{56:function(e,t,i){},57:function(e,t,i){"use strict";i.r(t);var c=i(1),n=i.n(c),a=i(25),s=i.n(a),r=i(11),u=i(2),o=i(0),l=function(){return Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:"./img/logo.png",alt:"logo"})})},j=function(){return Object(o.jsxs)("div",{className:"navigation",children:[Object(o.jsx)(r.b,{exact:!0,to:"/",activeClassName:"nav-active",children:"Accueil"}),Object(o.jsx)(r.b,{exact:!0,to:"about",activeClassName:"nav-active",children:"A propos"})]})},d=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)("h1",{children:"A propos"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ex consequatur rerum eaque sint tenetur pariatur vero ipsa dignissimos, temporibus recusandae, provident accusantium corrupti repudiandae nobis. Praesentium ipsam, voluptatum quisquam fugiat architecto maiores qui quis eaque in accusamus labore commodi. Alias illo tenetur fugit magnam labore, nisi, officiis doloribus vel similique velit dolorem dolor voluptate assumenda impedit unde exercitationem maxime!"}),Object(o.jsx)("br",{}),Object(o.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt unde asperiores perspiciatis nobis, sint est ad commodi quae inventore neque iusto earum exercitationem, blanditiis ullam enim sed quos vitae non aliquam voluptates ab debitis magnam quis! Ducimus animi eius nihil?"})]})},b=i(9),m=i(27),O=i.n(m),p=function(e){var t,i=e.country;return Object(o.jsx)("div",{children:Object(o.jsxs)("li",{className:"card",children:[Object(o.jsx)("img",{src:i.flag,alt:"flag"}),Object(o.jsx)("div",{className:"data-container",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:i.name}),Object(o.jsx)("li",{children:i.capital}),Object(o.jsxs)("li",{children:["Pop. ",(t=i.population,t.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))]})]})})]})})},x=function(){var e=Object(c.useState)([]),t=Object(b.a)(e,2),i=t[0],n=t[1],a=Object(c.useState)([]),s=Object(b.a)(a,2),r=s[0],u=s[1],l=Object(c.useState)(!0),j=Object(b.a)(l,2),d=j[0],m=j[1],x=Object(c.useState)(40),h=Object(b.a)(x,2),v=h[0],f=h[1],g=Object(c.useState)(""),q=Object(b.a)(g,2),N=q[0],A=q[1];return Object(c.useEffect)((function(){d&&O.a.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag").then((function(e){n(e.data),m(!1)}));!function(){var e=Object.keys(i).map((function(e){return i[e]})).sort((function(e,t){return t.population-e.population}));e.length=v,u(e)}()}),[i,d,v]),Object(o.jsxs)("div",{className:"countries",children:[Object(o.jsxs)("div",{className:"sort-container",children:[Object(o.jsx)("input",{type:"range",min:"1",max:"250",value:v,onChange:function(e){return f(e.target.value)}}),Object(o.jsx)("ul",{children:["Africa","America","Asia","Europe","Oceania"].map((function(e){return Object(o.jsxs)("li",{children:[Object(o.jsx)("input",{type:"radio",value:e,id:e,checked:e===N,onChange:function(e){return A(e.target.value)}}),Object(o.jsx)("label",{htmlFor:e,children:e})]},e)}))})]}),Object(o.jsx)("div",{className:"cancel",children:N&&Object(o.jsx)("h5",{onClick:function(){return A("")},children:"Retirer les filtres de s\xe9lection"})}),Object(o.jsx)("ul",{className:"countries-list",children:r.filter((function(e){return e.region.includes(N)})).map((function(e){return Object(o.jsx)(p,{country:e},e.name)}))})]})},h=function(){return Object(o.jsxs)("div",{className:"absolute-center",children:[Object(o.jsx)(l,{}),Object(o.jsx)(j,{}),Object(o.jsx)("h1",{children:"Page d'accueil"}),Object(o.jsx)(x,{})]})},v=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(j,{}),Object(o.jsx)("h1",{children:"Page introuvable"})]})},f=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(r.a,{children:Object(o.jsxs)(u.c,{children:[Object(o.jsx)(u.a,{exact:!0,path:"/",component:h}),Object(o.jsx)(u.a,{exact:!0,path:"/about",component:d}),Object(o.jsx)(u.a,{component:v})]})})})};i(56);s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.576ffd7e.chunk.js.map