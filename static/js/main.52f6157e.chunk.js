(this["webpackJsonpcredid-saison-lookup-fe"]=this["webpackJsonpcredid-saison-lookup-fe"]||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){"use strict";t.r(a);var c=t(0),s=t.n(c),n=t(10),r=t.n(n),i=(t(71),t(16)),l=(t(72),t(131)),d=t(135),j=t(55),o=t.n(j),b=t(56),u=t.n(b),h=(t(73),t(2));function m(e){return Object(h.jsx)(l.a,{position:"static",children:Object(h.jsxs)("div",{className:"navBar",children:[Object(h.jsx)("div",{className:"logo",children:"INN Lookup"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)(d.a,{variant:"h6",color:"inherit",onClick:function(){return e.setCurrPage(!0)},children:["Verify Card ",Object(h.jsx)(o.a,{})]}),Object(h.jsxs)(d.a,{variant:"h6",color:"inherit",onClick:function(){return e.setCurrPage(!1)},children:["Check Stats ",Object(h.jsx)(u.a,{})]})]})]})})}var O=t(137),x=t(136);t(79);var _=function(e){var a=Object(c.useState)(""),t=Object(i.a)(a,2),s=t[0],n=t[1];return Object(h.jsxs)("form",{onSubmit:function(a){if(a.preventDefault(),""===s)return window.alert("Please Enter a BIN/INN number first");e.callAPI(s)},noValidate:!0,autoComplete:"off",className:"root",children:[Object(h.jsx)("div",{className:"input-css",children:Object(h.jsx)(O.a,{id:"standard-search",label:"Enter BIN number",type:"number",margin:"dense",value:s,onChange:function(e){var a=e.target.value;n(a)}})}),Object(h.jsx)(x.a,{variant:"contained",type:"submit",color:"primary",children:"get details"})]})},p=(t(80),function(e){return Object(h.jsxs)(c.Fragment,{children:[console.log(e),Object(h.jsxs)("div",{className:"cardDetail",children:[Object(h.jsxs)("div",{className:"cardDetail__first",children:[Object(h.jsxs)("ul",{className:"cardDetail__row",children:[Object(h.jsxs)("li",{className:"cardDetail__row--item",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"SCHEME / NETWORK"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:e.response.scheme})]}),Object(h.jsxs)("li",{className:"cardDetail__row--item",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"TYPE"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:e.response.type})]})]}),Object(h.jsxs)("ul",{className:"cardDetail__row",children:[Object(h.jsxs)("li",{className:"cardDetail__row--item",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"BRAND"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:e.response.brand})]}),Object(h.jsxs)("li",{className:"cardDetail__row--item",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"PREPAID"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:Object(h.jsx)("span",{className:"cardDetail__row--heading",children:e.response.prepaid?"Yes":"No"})})]})]}),Object(h.jsxs)("ul",{className:"cardDetail__row",children:[Object(h.jsxs)("li",{className:"cardDetail__row--item",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"CARD NUMBER"}),Object(h.jsxs)("div",{className:"cardDetail__row--segment",children:[Object(h.jsxs)("div",{className:"cardDetail__row--subseg",children:[Object(h.jsx)("p",{className:"cardDetail__row--subhead",children:"LENGTH"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:e.response.number.length})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{className:"cardDetail__row--subhead",children:"LUHN"}),Object(h.jsx)("p",{className:"cardDetail__row--heading",children:e.response.number.length?"YES":"NO"})]})]})]}),Object(h.jsxs)("li",{className:"cardDetail__row--item",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"COUNTRY"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:e.response.country.name}),Object(h.jsxs)("p",{className:"cardDetail__row--heading",children:["(latitude:",Object(h.jsx)("span",{className:"cardDetail__row--value",children:e.response.country.latitude}),",longitude:",Object(h.jsx)("span",{className:"cardDetail__row--value",children:e.response.country.longitude})," )"]})]})]})]}),Object(h.jsx)("div",{className:"cardDetail__second",children:Object(h.jsxs)("div",{className:"cardDetail__second__internal",children:[Object(h.jsx)("p",{className:"cardDetail__row--heading",children:"BANK"}),Object(h.jsx)("p",{className:"cardDetail__row--value",children:e.response.bank.name}),Object(h.jsx)("p",{className:"cardDetail__row--link",children:e.response.bank.url}),Object(h.jsx)("p",{className:"cardDetail__row--mobile",children:e.response.bank.phone})]})})]})]})}),N=t(37),v=t.n(N);t(99);var f=function(){var e=Object(c.useState)({}),a=Object(i.a)(e,2),t=a[0],s=a[1];return Object(h.jsxs)("div",{children:[Object(h.jsx)(_,{className:"root",callAPI:function(e){v.a.get("34.70.30.55:8080/card-scheme/verify/".concat(e)).then((function(e){var a=e.data;return s(a),console.log(a)})).catch((function(){window.alert("Invalid BIN/INN")}))}}),t.success?Object(h.jsx)(p,{response:t.payload}):null]})};t(100),t(101);function g(e){var a=e.data,t=void 0===a?[]:a;return Object(h.jsx)("div",{className:"dataTable",children:Object(h.jsxs)("table",{className:"table-cus table-bordered-cus",children:[Object(h.jsx)("thead",{className:"dataTable__tablehead",children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Sno."}),Object(h.jsx)("th",{children:"BIN/INN"}),Object(h.jsx)("th",{children:"Count"})]})}),Object(h.jsx)("tbody",{children:t.map((function(e,a){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:a+1}),Object(h.jsx)("td",{children:e.bin}),Object(h.jsx)("td",{children:e.call_count})]},a)}))})]})})}var D=function(){var e=Object(c.useState)(1),a=Object(i.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)(10),r=Object(i.a)(n,2),l=r[0],d=r[1],j=Object(c.useState)({}),o=Object(i.a)(j,2),b=o[0],u=o[1],m=function(e,a){console.log(e,a),v.a.get("http://34.70.30.55:8080/card-scheme/stats?start=".concat(e,"&limit=").concat(a)).then((function(e){var a=e.data;u(a),console.log(a)})).catch((function(e){console.log(e)}))};return Object(h.jsxs)("div",{children:[Object(h.jsx)("form",{onSubmit:function(e){e.preventDefault(),t<0||l<0?window.alert("values of start and limit must be greater than 0"):m(t,l)},children:Object(h.jsxs)("div",{className:"inputForm",children:[Object(h.jsx)("div",{className:"inputField",children:Object(h.jsx)(O.a,{id:"outlined-number",label:"Start from",type:"number",InputLabelProps:{shrink:!0},name:"start",variant:"outlined",className:"inputField",value:t,onChange:function(e){var a=e.target.value;s(a)}})}),Object(h.jsx)("div",{className:"inputField",children:Object(h.jsx)(O.a,{id:"outlined-number",label:"Limit",type:"number",InputLabelProps:{shrink:!0},name:"limit",variant:"outlined",className:"inputField",value:l,onChange:function(e){var a=e.target.value;d(a)}})}),Object(h.jsx)("div",{className:"inputField",children:Object(h.jsx)(x.a,{variant:"contained",type:"submit",color:"primary",children:"get Stats"})})]})}),Object(h.jsx)(g,{data:b.payload})]})};var w=function(){var e=Object(c.useState)(!0),a=Object(i.a)(e,2),t=a[0],s=a[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(m,{setCurrPage:s}),t?Object(h.jsx)(f,{}):Object(h.jsx)(D,{})]})},C=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,139)).then((function(a){var t=a.getCLS,c=a.getFID,s=a.getFCP,n=a.getLCP,r=a.getTTFB;t(e),c(e),s(e),n(e),r(e)}))};r.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root")),C()},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},99:function(e,a,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.52f6157e.chunk.js.map