(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/photoFlowers/photogFlowers"],{"093b":function(t,e,o){"use strict";o.r(e);var n=o("0cad"),a=o("dea6");for(var i in a)"default"!==i&&function(t){o.d(e,t,function(){return a[t]})}(i);o("95f1");var u=o("2877"),c=Object(u["a"])(a["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},"0cad":function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];o.d(e,"a",function(){return n}),o.d(e,"b",function(){return a})},"7d14":function(t,e,o){"use strict";(function(t){o("30b7"),o("921b");n(o("66fd"));var e=n(o("093b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,o("6e42")["createPage"])},"95f1":function(t,e,o){"use strict";var n=o("ccc9"),a=o.n(n);a.a},bba4:function(t,e,o){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(o("b26c"));function i(t){return t&&t.__esModule?t:{default:t}}var u={onLoad:function(){for(var e=this,o=0;o<a.default.length;o++)this.categories[a.default[o].name]=a.default[o];t.getStorage({key:"flowers",success:function(t){e.info=JSON.parse(t.data),console.log(n(e.info," at pages/photoFlowers/photogFlowers.vue:34"))}})},data:function(){return{categories:{},info:{title:"",img:"",introduce:""}}},methods:{buyFlowers:function(){this.categories[this.info.title]?t.navigateTo({url:"../index/supplyList?id="+this.categories[this.info.title].id+"&name="+this.info.title}):t.showToast({icon:"none",title:"暂无此品类"})},chooseImg:function(){var e=this;t.chooseImage({count:1,sizeType:["compressed"],sourceType:["album","camera"],success:function(o){t.showLoading({title:"加载中"});var a=o.tempFilePaths[0];t.uploadFile({url:"https://openapi.hm8848.com/ocr/plant",filePath:a,name:"file",header:{authorization:e.$store.state.token},success:function(o){console.log(n(o," at pages/photoFlowers/photogFlowers.vue:83"));var a=JSON.parse(o.data);if("非植物"==a.data[0].name)t.showToast({icon:"none",title:"非植物"});else{var i={img:"",introduce:"",title:""};i.title=a.data[0].name,a.data[0].baike_info.image_url&&(i.img=a.data[0].baike_info.image_url,i.introduce=a.data[0].baike_info.description),e.info=i}},complete:function(){t.hideLoading()}})},fail:function(e){t.showToast({icon:"none",title:"图片上传失败"})}})}}};e.default=u}).call(this,o("6e42")["default"],o("0de9")["default"])},ccc9:function(t,e,o){},dea6:function(t,e,o){"use strict";o.r(e);var n=o("bba4"),a=o.n(n);for(var i in n)"default"!==i&&function(t){o.d(e,t,function(){return n[t]})}(i);e["default"]=a.a}},[["7d14","common/runtime","common/vendor"]]]);