(function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/business-lines__initial/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"5caa":function(e){e.exports=JSON.parse('{"data":[{"id":1,"title":"tes1","category":"1","date":"1995-12-11T21:00:00.000Z","status":"opened"},{"id":2,"title":"ghs","category":"3","date":"1995-12-15T21:00:00.000Z","status":"closed"}]}')},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BContainer",[n("HomePage")],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BContainer",{attrs:{fluid:""}},[n("TableMolecule",{attrs:{items:e.items,fields:e.fields}})],1)},i=[],u=n("5530"),l=(n("d81d"),n("b64b"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BContainer",{attrs:{fluid:""}},[n("BRow",{staticClass:"mx-auto",attrs:{sm:"12"}},[n("SearchAtom",{attrs:{"on-change":e.onChange,placeholder:"Write smth here"}})],1),n("BRow",{attrs:{sm:"12"}},[n("BTable",{attrs:{stripped:"",items:e.computedBySearchItems,fields:e.fields}})],1)],1)}),s=[],p=(n("ac1f"),n("841c"),n("4de4"),n("d3b7"),n("caad"),n("2532"),n("a15b"),n("07ac"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BFormInput",{attrs:{placeholder:e.placeholder},on:{input:function(t){return e.onChange(t)}}})}),d=[],f=n("4797"),h=r["a"].extend({name:"SearchAtom",props:{placeholder:{type:String,required:!1},onChange:{type:Function,required:!0}},components:{BFormInput:f["a"]}}),m=h,b=n("2877"),y=Object(b["a"])(m,p,d,!1,null,"79d745cf",null),g=y.exports,v=n("1bbb"),O=n("a15b7"),j=n("29a1"),x=r["a"].extend({name:"TableMolecule",props:{fields:{type:[],required:!0},items:{type:[],required:!0}},components:{SearchAtom:g,BContainer:v["a"],BRow:O["a"],BTable:j["a"]},data:function(){return{search:""}},methods:{onChange:function(e){this.search=e}},computed:{computedBySearchItems:function(){var e=this;return""===this.search?this.items:this.items.filter((function(t){return Object.values(t).join("").includes(e.search)}))}}}),_=x,w=Object(b["a"])(_,l,s,!1,null,null,null),B=w.exports,S=n("5caa"),C=S.data.map((function(e){return Object(u["a"])(Object(u["a"])({},e),{},{date:new Date(e.date).toLocaleDateString()})})),T=Object.keys(S.data[0]).map((function(e){return{key:e,sortable:!0}})),P=r["a"].extend({name:"TablePage",components:{BContainer:v["a"],TableMolecule:B},data:function(){return{items:C,fields:T}}}),M=P,k=Object(b["a"])(M,c,i,!1,null,null,null),$=k.exports,q=r["a"].extend({name:"App",components:{HomePage:$,BContainer:v["a"]}}),A=q,E=Object(b["a"])(A,a,o,!1,null,null,null),I=E.exports;n("f9e3"),n("2dd8");r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(I)}}).$mount("#app")}});
//# sourceMappingURL=app.cb49b681.js.map