webpackJsonp([16],{544:function(n,a,t){t(766);var e=t(24)(t(739),t(794),"data-v-0af2cc59",null);n.exports=e.exports},546:function(n,a,t){"use strict";var e=t(188),A=t.n(e),i=t(91);a.a={computed:{},methods:A()({},t.i(i.c)({showLoading:"global/showLoading",hideLoading:"global/hideLoading",showToast:"global/showToast"}),{linkTo:function(n,a){if(!n)return!1;/^http/.test(n)?this.$router.push({path:"/external-link",query:{url:n}}):this.$router.push({path:n,query:a})},replaceTo:function(n,a){if(!n)return!1;/^http/.test(n)?this.$router.replace({path:"/external-link",query:{url:n}}):this.$router.replace({path:n,query:a})},alert:function(n,a,t){var e={show:!0,title:n,content:a,onHide:function(){t&&t()}};this.$store.commit("global/updateAlert",{alert:e})}}),data:function(){return{pullDownRefreshObj:{threshold:50,stop:40,txt:"刷新成功"},pullUpLoadObj:{threshold:50,txt:{more:"上滑加载更多",noMore:"没有更多了~"}}}}}},597:function(n,a){n.exports="data:image/png;base64,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"},739:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=(t(91),t(546));t(53);a.default={name:"staff",mixins:[e.a],data:function(){return{user:{avatar:"",nickname:"券宝宝四号",username:"章子怡"}}},mounted:function(){},methods:{}}},744:function(n,a,t){a=n.exports=t(525)(),a.push([n.i,'[data-v-0af2cc59]{box-sizing:border-box}body[data-v-0af2cc59],html[data-v-0af2cc59]{height:100%;width:100%;padding:0;margin:0;list-style:none;font-family:-apple-system,BlinkMacSystemFont,PingFang SC,Helvetica Neue,STHeiti,Microsoft Yahei,Tahoma,Simsun,sans-serif;background-color:#fff;color:#333;font-size:.28rem}body[data-v-0af2cc59]{overflow-x:hidden}li[data-v-0af2cc59],ul[data-v-0af2cc59]{padding:0;margin:0;list-style:none}a[data-v-0af2cc59],a[data-v-0af2cc59]:focus,a[data-v-0af2cc59]:hover{cursor:pointer;color:inherit;text-decoration:none;outline:none}button[data-v-0af2cc59],input[data-v-0af2cc59],select[data-v-0af2cc59]{outline:none;border:none}button[data-v-0af2cc59]{background:transparent}.clearfix[data-v-0af2cc59]{display:block;zoom:1}.clearfix[data-v-0af2cc59]:after{content:".";display:block;height:0;clear:both;visibility:hidden;font-size:0}div[data-v-0af2cc59]:focus{outline:none}h1[data-v-0af2cc59],h2[data-v-0af2cc59],h3[data-v-0af2cc59],h4[data-v-0af2cc59],h5[data-v-0af2cc59],h6[data-v-0af2cc59],p[data-v-0af2cc59]{margin:0}.ellipsis[data-v-0af2cc59]{white-space:nowrap}.ellipsis[data-v-0af2cc59],.lineText2[data-v-0af2cc59],.lineText3[data-v-0af2cc59],.lineText[data-v-0af2cc59]{overflow:hidden;text-overflow:ellipsis}.lineText2[data-v-0af2cc59],.lineText3[data-v-0af2cc59]{display:-webkit-box;-webkit-box-orient:vertical;box-orient:vertical}.lineText[data-v-0af2cc59]{white-space:nowrap}.lineText2[data-v-0af2cc59]{-webkit-line-clamp:2}.lineText3[data-v-0af2cc59]{-webkit-line-clamp:3}.container[data-v-0af2cc59]{height:100%;width:100%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.container .staff[data-v-0af2cc59]{margin-top:1.2rem}.container .staff .avatar[data-v-0af2cc59]{display:block;width:1.2rem;height:1.2rem;border-radius:1000rem;overflow:hidden;margin:0 auto;margin-bottom:.34rem}.container .staff .detail[data-v-0af2cc59]{font-size:.28rem;color:#333}.container .staff .detail .item[data-v-0af2cc59]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.container .staff .detail .item .label[data-v-0af2cc59]{width:1rem;line-height:.5rem;height:.5rem;text-align:justify;margin-right:.05rem}.container .staff .detail .item .label[data-v-0af2cc59]:after{content:".";width:100%;display:inline-block;overflow:hidden;height:0}.container .staff .detail .item .value[data-v-0af2cc59]{margin-left:.1rem}',"",{version:3,sources:["F:/Project/projects/project/goldtao-G/src/pages/Staff.vue"],names:[],mappings:"AAwGA,kBACE,qBAAuB,CACxB,AACD,4CAEE,YAAa,AACb,WAAY,AACZ,UAAW,AACX,SAAU,AACV,gBAAiB,AACjB,yHAAwI,AACxI,sBAAuB,AACvB,WAAY,AACZ,gBAAkB,CACnB,AACD,sBACE,iBAAmB,CACpB,AACD,wCAEE,UAAW,AACX,SAAU,AACV,eAAiB,CAClB,AACD,qEAGE,eAAgB,AAChB,cAAe,AACf,qBAAsB,AACtB,YAAc,CACf,AAMD,uEAHE,aAAc,AACd,WAAa,CAMd,AAJD,wBACE,sBAAwB,CAGzB,AACD,2BACE,cAAe,AACf,MAAQ,CACT,AACD,iCACE,YAAa,AACb,cAAe,AACf,SAAU,AACV,WAAY,AACZ,kBAAmB,AACnB,WAAa,CACd,AACD,2BACE,YAAc,CACf,AACD,2IAOE,QAAU,CACX,AACD,2BAGE,kBAAoB,CACrB,AAED,8GALE,gBAAiB,AACjB,sBAAwB,CASzB,AACD,wDAEE,oBAAqB,AACrB,4BAA6B,AAC7B,mBAAqB,CACtB,AACD,2BACE,kBAAoB,CACrB,AACD,4BACE,oBAAsB,CACvB,AACD,4BACE,oBAAsB,CACvB,AACD,4BACE,YAAa,AACb,WAAY,AACZ,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC9B,8BAA+B,AACvB,sBAAuB,AAC/B,yBAA0B,AAC1B,2BAA4B,AACpB,kBAAoB,CAC7B,AACD,mCACE,iBAAmB,CACpB,AACD,2CACE,cAAe,AACf,aAAc,AACd,cAAe,AACf,sBAAuB,AACvB,gBAAiB,AACjB,cAAe,AACf,oBAAsB,CACvB,AACD,2CACE,iBAAkB,AAClB,UAAY,CACb,AACD,iDACE,oBAAqB,AACrB,qBAAsB,AACtB,aAAc,AACd,yBAA0B,AAC1B,2BAA4B,AACpB,kBAAoB,CAC7B,AACD,wDACE,WAAY,AACZ,kBAAmB,AACnB,aAAc,AACd,mBAAoB,AACpB,mBAAqB,CACtB,AACD,8DACE,YAAa,AACb,WAAY,AACZ,qBAAsB,AACtB,gBAAiB,AACjB,QAAU,CACX,AACD,wDACE,iBAAmB,CACpB",file:"Staff.vue",sourcesContent:['/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tab\n*/\n/**\n* tabbar\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Range\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* week-calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n* loadmore\n*/\n/* 全局样式 */\n*[data-v-0af2cc59] {\n  box-sizing: border-box;\n}\nhtml[data-v-0af2cc59],\nbody[data-v-0af2cc59] {\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;\n  background-color: #fff;\n  color: #333;\n  font-size: .28rem;\n}\nbody[data-v-0af2cc59] {\n  overflow-x: hidden;\n}\nul[data-v-0af2cc59],\nli[data-v-0af2cc59] {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\na[data-v-0af2cc59],\na[data-v-0af2cc59]:focus,\na[data-v-0af2cc59]:hover {\n  cursor: pointer;\n  color: inherit;\n  text-decoration: none;\n  outline: none;\n}\ninput[data-v-0af2cc59],\nselect[data-v-0af2cc59] {\n  outline: none;\n  border: none;\n}\nbutton[data-v-0af2cc59] {\n  background: transparent;\n  border: none;\n  outline: none;\n}\n.clearfix[data-v-0af2cc59] {\n  display: block;\n  zoom: 1;\n}\n.clearfix[data-v-0af2cc59]::after {\n  content: ".";\n  display: block;\n  height: 0;\n  clear: both;\n  visibility: hidden;\n  font-size: 0;\n}\ndiv[data-v-0af2cc59]:focus {\n  outline: none;\n}\nh1[data-v-0af2cc59],\nh2[data-v-0af2cc59],\nh3[data-v-0af2cc59],\nh4[data-v-0af2cc59],\nh5[data-v-0af2cc59],\nh6[data-v-0af2cc59],\np[data-v-0af2cc59] {\n  margin: 0;\n}\n.ellipsis[data-v-0af2cc59] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/* 文本截断 */\n.lineText[data-v-0af2cc59],\n.lineText2[data-v-0af2cc59],\n.lineText3[data-v-0af2cc59] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.lineText2[data-v-0af2cc59],\n.lineText3[data-v-0af2cc59] {\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  box-orient: vertical;\n}\n.lineText[data-v-0af2cc59] {\n  white-space: nowrap;\n}\n.lineText2[data-v-0af2cc59] {\n  -webkit-line-clamp: 2;\n}\n.lineText3[data-v-0af2cc59] {\n  -webkit-line-clamp: 3;\n}\n.container[data-v-0af2cc59] {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.container .staff[data-v-0af2cc59] {\n  margin-top: 1.2rem;\n}\n.container .staff .avatar[data-v-0af2cc59] {\n  display: block;\n  width: 1.2rem;\n  height: 1.2rem;\n  border-radius: 1000rem;\n  overflow: hidden;\n  margin: 0 auto;\n  margin-bottom: .34rem;\n}\n.container .staff .detail[data-v-0af2cc59] {\n  font-size: .28rem;\n  color: #333;\n}\n.container .staff .detail .item[data-v-0af2cc59] {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.container .staff .detail .item .label[data-v-0af2cc59] {\n  width: 1rem;\n  line-height: .5rem;\n  height: .5rem;\n  text-align: justify;\n  margin-right: .05rem;\n}\n.container .staff .detail .item .label[data-v-0af2cc59]:after {\n  content: \'.\';\n  width: 100%;\n  display: inline-block;\n  overflow: hidden;\n  height: 0;\n}\n.container .staff .detail .item .value[data-v-0af2cc59] {\n  margin-left: .1rem;\n}\n'],sourceRoot:""}])},766:function(n,a,t){var e=t(744);"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);t(526)("7a3071d6",e,!0)},794:function(n,a,t){n.exports={render:function(){var n=this,a=n.$createElement,e=n._self._c||a;return e("div",{staticClass:"container"},[e("div",{staticClass:"staff"},[e("img",{staticClass:"avatar",attrs:{src:n.Gser.avatar||t(597),alt:""}}),n._v(" "),e("ul",{staticClass:"detail"},[e("li",{staticClass:"item"},[e("span",{staticClass:"label"},[n._v("昵 称")]),n._v(":\n                "),e("div",{staticClass:"value"},[n._v(n._s(n.Gser.nickname||"--"))])]),n._v(" "),e("li",{staticClass:"item"},[e("span",{staticClass:"label"},[n._v("微信号")]),n._v(":\n                "),e("div",{staticClass:"value"},[n._v(n._s(n.Gser.username||"--"))])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=16.0d60f08c0580370800a5.js.map