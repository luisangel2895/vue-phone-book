(function(t){function e(e){for(var c,l,o=e[0],u=e[1],s=e[2],i=0,d=[];i<o.length;i++)l=o[i],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(c in u)Object.prototype.hasOwnProperty.call(u,c)&&(t[c]=u[c]);b&&b(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(c=!1)}c&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var c={},a={app:0},r=[];function l(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=t,l.c=c,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)l.d(n,c,function(e){return t[e]}.bind(null,c));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=e,o=o.slice();for(var s=0;s<o.length;s++)e(o[s]);var b=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),a=(n("b0c0"),{id:"app",class:"container text-center"}),r=Object(c["d"])("h2",{class:"my-5"},"Add a new contact:",-1),l=Object(c["e"])("First Name: "),o=Object(c["d"])("br",null,null,-1),u=Object(c["e"])("Last Name: "),s=Object(c["d"])("br",null,null,-1),b=Object(c["e"])("Phone: "),i=Object(c["d"])("br",null,null,-1),d={class:"container"},p={id:"phoneBookItems",class:"informationTable table"},f=Object(c["d"])("tr",null,[Object(c["d"])("th",null,"Name"),Object(c["d"])("th",null,"Lastname"),Object(c["d"])("th",null,"Phone")],-1);function j(t,e,n,j,O,m){return Object(c["f"])(),Object(c["c"])("div",a,[r,Object(c["d"])("div",null,[Object(c["d"])("label",null,[l,Object(c["j"])(Object(c["d"])("input",{type:"text",class:"userFirstname","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.name=e})},null,512),[[c["i"],t.name]])]),o,Object(c["d"])("label",null,[u,Object(c["j"])(Object(c["d"])("input",{type:"text",class:"userLastname","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.lastname=e})},null,512),[[c["i"],t.lastname]])]),s,Object(c["d"])("label",null,[b,Object(c["j"])(Object(c["d"])("input",{type:"number",class:"userPhone","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.phone=e})},null,512),[[c["i"],t.phone]])]),i,Object(c["d"])("button",{class:"submitButton btn btn-primary my-5",onClick:e[3]||(e[3]=function(){return m.submit&&m.submit.apply(m,arguments)})}," Add New Contactss ")]),Object(c["d"])("div",d,[Object(c["d"])("table",p,[Object(c["d"])("tbody",null,[f,(Object(c["f"])(!0),Object(c["c"])(c["a"],null,Object(c["g"])(t.contacts,(function(t,e){return Object(c["f"])(),Object(c["c"])("tr",{key:e},[Object(c["d"])("td",null,Object(c["h"])(t.name),1),Object(c["d"])("td",null,Object(c["h"])(t.lastname),1),Object(c["d"])("td",null,Object(c["h"])(t.phone),1)])})),128))])])])])}n("4e82");var O={name:"App",data:function(){return{name:"Coder",lastname:"Byte",phone:8885559999,contacts:[]}},methods:{createContact:function(){var t={};t.name=this.name,t.lastname=this.lastname,t.phone=this.phone,this.contacts.push(t)},sortedContacts:function(){this.contacts.sort((function(t,e){return t.lastname>e.lastname?1:t.lastname<e.lastname?-1:0})),console.log(this.contacts)},submit:function(){this.createContact(),this.sortedContacts()}}},m=n("6b0d"),h=n.n(m);const y=h()(O,[["render",j]]);var v=y;n("ab8b"),n("3e48");Object(c["b"])(v).mount("#app")}});
//# sourceMappingURL=app.b6501c47.js.map