webpackJsonp([1],{"02ej":function(t,e,n){e=t.exports=n("FZ+f")(!1),e.push([t.i,"h1[data-v-c876d16a],h2[data-v-c876d16a]{font-weight:400}ul[data-v-c876d16a]{list-style-type:none;padding:0}li[data-v-c876d16a]{display:inline-block;margin:0 10px}a[data-v-c876d16a]{color:#42b983}",""])},Sbzp:function(t,e,n){var a=n("02ej");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n("rjj0")("39e586e7",a,!0)},YYNx:function(t,e,n){"use strict";function a(t){n("Sbzp")}Object.defineProperty(e,"__esModule",{value:!0});var i=n("xqBB"),r=n("YzLl"),s=n("VU/8"),u=a,l=s(i.a,r.a,!1,u,"data-v-c876d16a",null);e.default=l.exports},YzLl:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v("phoneBook")]),n("table",{attrs:{align:"center"}},[t._m(0),t._l(t.users,function(e,a){return n("tr",{attrs:{align:"center"}},[n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.number))]),n("td",[t._v(t._s(e.email))]),n("td",[n("button",{on:{click:function(e){t.deleteUser(a)}}},[t._v("Delete")])])])})],2),n("br"),n("br"),n("hr"),t._v("\n  ชื่อ: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputName,expression:"inputName"}],attrs:{type:"text"},domProps:{value:t.inputName},on:{input:function(e){e.target.composing||(t.inputName=e.target.value)}}}),t._v("\n  เบอร์โทร: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputNumber,expression:"inputNumber"}],attrs:{type:"text"},domProps:{value:t.inputNumber},on:{input:function(e){e.target.composing||(t.inputNumber=e.target.value)}}}),t._v("\n  Email: "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputEmail,expression:"inputEmail"}],attrs:{type:"text"},domProps:{value:t.inputEmail},on:{input:function(e){e.target.composing||(t.inputEmail=e.target.value)}}}),n("button",{on:{click:t.addUser}},[t._v("Add")])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("#")]),n("td",{attrs:{width:"200px"}},[t._v("Name")]),n("td",{attrs:{width:"200px"}},[t._v("เบอร์โทร")]),n("td",{attrs:{width:"200px"}},[t._v("email")]),n("td",{attrs:{width:"200px"}},[t._v("Delete")])])}],r={render:a,staticRenderFns:i};e.a=r},xqBB:function(t,e,n){"use strict";e.a={name:"hello",data:function(){return{inputName:"",inputNumber:"",inputEmail:"",users:[]}},methods:{addUser:function(){if(""!==this.inputName&&""!==this.inputEmail){var t=/.+@\w+\..+/g,e=/^0\d{2}-\d{3}-\d{4}$/g,n=t.test(this.inputEmail),a=e.test(this.inputNumber);n?a?this.users.push({num:this.count,name:this.inputName,number:this.inputNumber,email:this.inputEmail}):alert("Wrong phone number !!\nPlaese enter a valid phone number."):alert("Wrong email !!\nPlaese enter a valid email address.")}},deleteUser:function(t){this.users.splice(t,1)}}}}});
//# sourceMappingURL=sirirat.a0a9cacdc81ec351cd6b.js.map