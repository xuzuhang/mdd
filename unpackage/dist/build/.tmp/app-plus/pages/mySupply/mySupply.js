(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mySupply/mySupply"],{"048e":function(e,t,a){"use strict";a.r(t);var n=a("58be"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);t["default"]=i.a},4410:function(e,t,a){},"58be":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a("5852"));function r(e){return e&&e.__esModule?e:{default:e}}var s={onLoad:function(e){var t=this;e.return&&(this.returnIndex=!0),this.$myhttp.get(this.websiteUrl+"/my","",function(e){t.rank=e.data.data.shop.rank}),this.loadRelease(),this.loadUndercarriage()},onBackPress:function(){if(this.returnIndex)return e.redirectTo({url:"../tabs/tabs"}),!0},data:function(){return{refreshLock:!0,rank:1,returnIndex:!1,inRelease:{arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},Undercarriage:{arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},tabactive:1}},methods:{allRefresh:function(){var t=this;if(this.refreshLock){if(this.refreshLock=!1,this.rank<5)return e.showModal({title:"提示",content:"该功能只对VIP开放，是否要升级VIP?",cancelText:"否",confirmText:"是",success:function(t){t.confirm?e.navigateTo({url:"../vip/index"}):t.cancel}}),void setTimeout(function(){t.refreshLock=!0},1500);this.$myhttp.post(this.websiteUrl+"/supplies/refreshall","",function(a){console.log(n(a," at pages/mySupply/mySupply.vue:211")),0==a.data.code?(a.data.data.completed?7==t.rank?e.showToast({icon:"success",title:"刷新成功！"}):e.showToast({icon:"none",title:"全部刷新成功，共消耗"+a.data.data.points+"积分！"}):e.showModal({title:"提示",content:"积分不够，只刷新了"+a.data.data.refreshed+"条，消耗"+a.data.data.points+"积分，是否去赚积分？",cancelText:"否",confirmText:"是",success:function(t){t.confirm?e.navigateTo({url:"../my/integral"}):t.cancel}}),t.inRelease={arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},t.loadRelease()):e.showToast({icon:"none",title:a.data.message})},this),setTimeout(function(){t.refreshLock=!0},1500)}},refreshSupply:function(t){var a=this;this.refreshLock&&(this.refreshLock=!1,this.$myhttp.post(this.websiteUrl+"/supplies/"+t.id+"/refresh","",function(t){console.log(n(t," at pages/mySupply/mySupply.vue:271")),0==t.data.code?(7==a.rank?e.showToast({icon:"success",title:"刷新成功！"}):e.showToast({icon:"none",title:"刷新成功，消耗5积分！"}),a.inRelease={arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},a.loadRelease()):410==t.data.code?e.showModal({title:"提示",content:"积分不够，无法刷新 是否去赚积分?",cancelText:"否",confirmText:"是",success:function(t){t.confirm?e.navigateTo({url:"../my/integral"}):t.cancel&&console.log(n("用户点击取消"," at pages/mySupply/mySupply.vue:306"))}}):e.showToast({icon:"none",title:t.data.message})},this),setTimeout(function(){a.refreshLock=!0},1500))},tosupply:function(){e.navigateTo({url:"../release/retrieval?type=supply"})},todetails:function(t,a){e.navigateTo({url:"../detailSupply/detailSupply?id="+t+"&info="+JSON.stringify(a)})},toedit:function(t){e.setStorage({key:"mylistloc",data:JSON.stringify(t),success:function(){e.navigateTo({url:"supply"})}})},deteleSale:function(t,a,i){var r=this;e.showModal({title:"提示",content:"确定要把"+i+"删除么",success:function(i){i.confirm&&r.$myhttp.delete(r.websiteUrl+"/supplies/"+t,{},function(t){console.log(n(t," at pages/mySupply/mySupply.vue:351")),r.Undercarriage.arrs.splice(a,1),r.Undercarriage.start-=1,r.Undercarriage.Total-=1,e.showToast({icon:"success",title:"删除成功"})})}})},upSale:function(t,a,n){var i=this;e.showModal({title:"提示",content:"确定要把"+n+"上架么",success:function(n){n.confirm&&i.$myhttp.put(i.websiteUrl+"/supplies/"+t+"/onsale",{onSale:!0},function(t){i.Undercarriage.arrs.splice(a,1),i.Undercarriage.start-=1,i.Undercarriage.Total-=1,i.inRelease={arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},i.loadRelease(),e.showToast({icon:"success",title:"上架成功"})})}})},downSale:function(t,a,n){var i=this;e.showModal({title:"提示",content:"确定要把"+n+"下架么",success:function(n){n.confirm&&i.$myhttp.put(i.websiteUrl+"/supplies/"+t+"/onsale",{onSale:!1},function(t){i.inRelease.arrs.splice(a,1),i.inRelease.start-=1,i.inRelease.Total-=1,i.Undercarriage={arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},i.loadUndercarriage(),e.showToast({icon:"success",title:"下架成功"})})}})},loadUndercarriage:function(){var e=this;this.Undercarriage.loading||(this.Undercarriage.loading=!0,0===this.Undercarriage.Total||this.Undercarriage.Total!=this.Undercarriage.arrs.length?(this.Undercarriage.loadingText="上拉加载更多",this.$myhttp.get(this.websiteUrl+"/supplies?start="+this.Undercarriage.start+"&length="+this.Undercarriage.length+"&onsale=false","",function(t){t=t.data.data;if(e.Undercarriage.Total=t.totalCount,t.items.length){var a=t.items;if(a.forEach(function(t){t.details=e.$store.state.categories[t.categoryId],t.time=(0,i.default)(t.refreshTime),t.specificationsArr=[];for(var a=JSON.parse(t.specifications),n=a.length>=4?4:a.length,r=0;r<n;r++){var s="",l="",o="";l=a[r].value instanceof Array?a[r].value[0]==a[r].value[1]?a[r].value[0]:a[r].value[0]+l+"-"+a[r].value[1]:a[r].value,a[r].unit&&(o=a[r].unit),s=a[r].name+": "+l+o,t.specificationsArr.push(s)}}),e.Undercarriage.start+=e.Undercarriage.length,e.Undercarriage.arrs=e.Undercarriage.arrs.concat(a),0!==e.Undercarriage.Total&&e.Undercarriage.Total==e.Undercarriage.arrs.length)return void(e.Undercarriage.loadingText="已全部加载完毕");console.log(n(e.Undercarriage.arrs," at pages/mySupply/mySupply.vue:478"))}else e.Undercarriage.loadingText="已全部加载完毕";e.Undercarriage.times++,e.Undercarriage.loading=!1},this)):this.Undercarriage.loadingText="已全部加载完毕")},loadRelease:function(){var e=this;this.inRelease.loading||(this.inRelease.loading=!0,0===this.inRelease.Total||this.inRelease.Total!=this.inRelease.arrs.length?(this.inRelease.loadingText="上拉加载更多",this.$myhttp.get(this.websiteUrl+"/supplies?start="+this.inRelease.start+"&length="+this.inRelease.length+"&onsale=true","",function(t){t=t.data.data;if(e.inRelease.Total=t.totalCount,t.items.length){var a=t.items;if(a.forEach(function(t){t.details=e.$store.state.categories[t.categoryId],t.time=(0,i.default)(t.refreshTime),t.specificationsArr=[];for(var a=JSON.parse(t.specifications),n=a.length>=4?4:a.length,r=0;r<n;r++){var s="",l="",o="";l=a[r].value instanceof Array?a[r].value[0]==a[r].value[1]?a[r].value[0]:a[r].value[0]+l+"-"+a[r].value[1]:a[r].value,a[r].unit&&(o=a[r].unit),s=a[r].name+": "+l+o,t.specificationsArr.push(s)}}),e.inRelease.start+=e.inRelease.length,e.inRelease.arrs=e.inRelease.arrs.concat(a),console.log(n(e.inRelease.arrs," at pages/mySupply/mySupply.vue:533")),0!==e.inRelease.Total&&e.inRelease.Total==e.inRelease.arrs.length)return void(e.inRelease.loadingText="已全部加载完毕");console.log(n(e.inRelease.arrs," at pages/mySupply/mySupply.vue:540"))}else e.inRelease.loadingText="已全部加载完毕";e.inRelease.times++,e.inRelease.loading=!1},this)):this.inRelease.loadingText="已全部加载完毕")},swiperchange:function(e){this.tabactive=e.detail.current+1}},onPullDownRefresh:function(){1==this.tabactive?(this.inRelease={arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},this.loadRelease()):(this.Undercarriage={arrs:[],Total:0,start:0,length:6,loadingText:"已全部加载完毕",times:0,loading:!1},this.loadUndercarriage()),e.stopPullDownRefresh()}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"63bc":function(e,t,a){"use strict";a.r(t);var n=a("83db"),i=a("048e");for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);a("97ff");var s=a("2877"),l=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=l.exports},"83db":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=(e._self._c,e.__map(e.inRelease.arrs,function(t,a){var n=t.price.toFixed(2);return{$orig:e.__get_orig(t),g0:n}})),n=e.__map(e.Undercarriage.arrs,function(t,a){var n=t.price.toFixed(2);return{$orig:e.__get_orig(t),g1:n}});e._isMounted||(e.e0=function(t){e.tabactive=1},e.e1=function(t){e.tabactive=2}),e.$mp.data=Object.assign({},{$root:{l0:a,l1:n}})},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})},"97ff":function(e,t,a){"use strict";var n=a("4410"),i=a.n(n);i.a},f72d:function(e,t,a){"use strict";(function(e){a("30b7"),a("921b");n(a("66fd"));var t=n(a("63bc"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])}},[["f72d","common/runtime","common/vendor"]]]);