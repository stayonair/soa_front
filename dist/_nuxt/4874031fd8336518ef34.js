(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{392:function(t,e,n){var content=n(399);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("7fb7435b",content,!0,{sourceMap:!1})},393:function(t,e,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("f2c4f6ea",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("1efda50f",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";n(21);e.a={methods:{getPostedAt:function(t){var e=Number((String(t.seconds)+String(t.nanoseconds)).substring(0,13)),n=Math.floor((new Date-e)/6e4),r=Math.floor((new Date-e)/36e5),o=Math.floor(r/24);if(0===r)return"".concat(n," minutes ago");if(0===o)return"".concat(r," hour").concat(r>1?"s":""," ago");if(o>30){var c=new Date(e);return"".concat(c.getFullYear(),"/").concat(c.getMonth()+1,"/").concat(c.getDate())}return"".concat(o," day").concat(o>1?"s":""," ago")}}}},398:function(t,e,n){"use strict";var r=n(392);n.n(r).a},399:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".icon-play__container[data-v-0a904777]{position:relative;width:4rem;height:4rem;border:.2rem solid #fafcff;border-radius:50%;margin-right:1.4rem}.icon-play[data-v-0a904777]{position:absolute;width:1.5rem;fill:#fff;left:30%}",""])},400:function(t,e,n){"use strict";var r=n(393);n.n(r).a},401:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".post_thumbnail__container[data-v-86fec77a]{width:100%;margin:0 auto}.post_thumbnail__header__wrapper[data-v-86fec77a]{color:#fafcff;background-position:50%;background-size:cover;background-repeat:no-repeat;padding:3rem 5rem;margin-bottom:1rem;width:100%;min-height:25rem;box-shadow:inset 0 0 0 25rem rgba(0,30,40,.45)}@media only screen and (max-width:480px){.post_thumbnail__header__wrapper[data-v-86fec77a]{padding:2rem 1rem;min-height:18rem}}.post_thumbnail__header__wrapper .post_thumbnail__header[data-v-86fec77a]{padding:0 2rem}.post_thumbnail__header__wrapper .post_thumbnail__header__title[data-v-86fec77a]{font-size:2rem;font-weight:300;line-height:4rem}.post_thumbnail__header__wrapper .post_thumbnail__header__tags[data-v-86fec77a]{margin-bottom:1rem}.post_thumbnail__header__wrapper .post_thumbnail__header__tag[data-v-86fec77a]{font-size:1.8rem;font-weight:200;margin-right:.4rem}.post_profile[data-v-86fec77a]{display:flex;justify-content:space-between;align-items:flex-end;font-size:1.5rem}.post_profile .post_profile__author[data-v-86fec77a]{display:flex;align-items:center;font-weight:100}.post_profile .post_profile__author_icon[data-v-86fec77a]{border-radius:50%;background-color:#fafcff;margin-right:.8rem;height:4rem;width:4rem}.post_profile .post_profile__author_name[data-v-86fec77a]{color:#333;font-weight:300;margin-right:.8rem}@media only screen and (max-width:480px){.post_profile .post_profile__author_name[data-v-86fec77a]{font-size:1rem}}.post_profile__posted_at[data-v-86fec77a]{color:#333}@media only screen and (max-width:480px){.post_profile__posted_at[data-v-86fec77a]{font-size:1rem}}.post_profile .post_thumbnail__like[data-v-86fec77a]{display:flex;align-items:flex-start}.post_profile .post_thumbnail__like .icon__heart[data-v-86fec77a]{margin-right:.5rem}.post_profile .post_thumbnail__like .icon__heart[data-v-86fec77a] svg{fill:#f34a80}.post_profile .post_thumbnail__like_number[data-v-86fec77a]{font-size:1.5rem;color:#f34a80}.post_thumbnail__nav[data-v-86fec77a]{height:2rem;margin-bottom:2rem}@media only screen and (max-width:480px){.post_thumbnail__nav[data-v-86fec77a]{margin:0}}.post_thumbnail__header__wrapper[data-v-86fec77a]{position:relative}.play_audio__icon[data-v-86fec77a]{position:absolute;right:1rem;bottom:1rem}.icon__arrow[data-v-86fec77a]{cursor:pointer}",""])},402:function(t,e,n){"use strict";n(190);var r={name:"PlayAudioIcon",components:{IconPlay:n(124).a},methods:{audioPlay:function(){this.$emit("handleAudioPlay")}}},o=(n(398),n(0)),c={name:"PostThumbnail",components:{PlayAudioIcon:Object(o.a)(r,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"play_episode"},[e("div",{staticClass:"icon-play__container",on:{click:this.audioPlay}},[e("icon-play",{staticClass:"icon-play"})],1)])},[],!1,null,"0a904777",null).exports},props:{post:{type:Object,default:function(){}}},computed:{isSinglePostPage:function(){return(this.$route.path.match(/\//g)||[]).length>1}},methods:{handleClick:function(){this.$emit("click")},goToPrevious:function(){this.$router.push("/")},handleAudioPlay:function(){this.$emit("playAudio")}}},_=(n(400),Object(o.a)(c,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post_thumbnail__wrapper"},[n("div",{staticClass:"post_thumbnail__container"},[n("div",{staticClass:"post_thumbnail"},[n("div",{staticClass:"post_thumbnail__header__wrapper",style:"background-image: url("+t.post.thumbnail_photo_url+");",on:{click:t.handleClick}},[t.isSinglePostPage?n("div",{staticClass:"post_thumbnail__nav"},[n("left-arrow-icon",{staticClass:"icon__arrow",on:{click:t.goToPrevious}})],1):t._e(),t._v(" "),n("div",{staticClass:"post_thumbnail__header__container"},[n("div",{staticClass:"post_thumbnail__header"},[n("h1",{staticClass:"post_thumbnail__header__title"},[t._v("\n              "+t._s(t.post.title)+"\n            ")])]),t._v(" "),t.isSinglePostPage?n("play-audio-icon",{staticClass:"play_audio__icon",on:{handleAudioPlay:t.handleAudioPlay}}):t._e()],1)])])])])},[],!1,null,"86fec77a",null));e.a=_.exports},406:function(t,e,n){var content=n(443);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("0354a7ae",content,!0,{sourceMap:!1})},407:function(t,e,n){var content=n(445);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("5f4fc5ea",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";var r=n(395);n.n(r).a},411:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".post_thumbnail__container[data-v-0ccc0e68]{width:100%;margin:0 auto}.post_thumbnail__header__wrapper[data-v-0ccc0e68]{color:#fafcff;background-position:50%;background-size:cover;background-repeat:no-repeat;padding:3rem 5rem;margin-bottom:1rem;width:100%;min-height:25rem;box-shadow:inset 0 0 0 25rem rgba(0,30,40,.45)}@media only screen and (max-width:480px){.post_thumbnail__header__wrapper[data-v-0ccc0e68]{padding:2rem 1rem;min-height:18rem}}.post_thumbnail__header__wrapper .post_thumbnail__header[data-v-0ccc0e68]{padding:0 2rem}.post_thumbnail__header__wrapper .post_thumbnail__header__title[data-v-0ccc0e68]{font-size:2rem;font-weight:300;line-height:4rem}.post_thumbnail__header__wrapper .post_thumbnail__header__tags[data-v-0ccc0e68]{margin-bottom:1rem}.post_thumbnail__header__wrapper .post_thumbnail__header__tag[data-v-0ccc0e68]{font-size:1.8rem;font-weight:200;margin-right:.4rem}.post_profile[data-v-0ccc0e68]{display:flex;justify-content:space-between;align-items:flex-end;font-size:1.5rem}.post_profile .post_profile__author[data-v-0ccc0e68]{display:flex;align-items:center;font-weight:100}.post_profile .post_profile__author_icon[data-v-0ccc0e68]{border-radius:50%;background-color:#fafcff;margin-right:.8rem;height:4rem;width:4rem}.post_profile .post_profile__author_name[data-v-0ccc0e68]{color:#333;font-weight:300;margin-right:.8rem}@media only screen and (max-width:480px){.post_profile .post_profile__author_name[data-v-0ccc0e68]{font-size:1rem}}.post_profile__posted_at[data-v-0ccc0e68]{color:#333}@media only screen and (max-width:480px){.post_profile__posted_at[data-v-0ccc0e68]{font-size:1rem}}.post_profile .post_thumbnail__like[data-v-0ccc0e68]{display:flex;align-items:flex-start}.post_profile .post_thumbnail__like .icon__heart[data-v-0ccc0e68]{margin-right:.5rem}.post_profile .post_thumbnail__like .icon__heart[data-v-0ccc0e68] svg{fill:#f34a80}.post_profile .post_thumbnail__like_number[data-v-0ccc0e68]{font-size:1.5rem;color:#f34a80}",""])},415:function(t,e,n){"use strict";var r={mixins:[n(397).a],props:{iconUrl:{type:String,default:""},name:{type:String,default:""},postedAt:{type:Object,default:function(){}}}},o=(n(410),n(0)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post_profile"},[n("div",{staticClass:"post_profile__author"},[n("img",{staticClass:"post_profile__author_icon",attrs:{src:t.iconUrl,alt:"icon_url"}}),t._v(" "),n("span",{staticClass:"post_profile__author_name"},[t._v("\n      @"+t._s(t.name)+"\n    ")]),t._v(" "),n("span",{staticClass:"post_profile__posted_at"},[t._v("\n      "+t._s(t.getPostedAt(t.postedAt))+"\n    ")])])])},[],!1,null,"0ccc0e68",null);e.a=component.exports},442:function(t,e,n){"use strict";var r=n(406);n.n(r).a},443:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".icon_wrapper[data-v-1eb641ae]{display:flex;align-items:center}.label[data-v-1eb641ae]{margin-left:.3rem;margin-right:1rem;width:1rem;font-size:1rem}",""])},444:function(t,e,n){"use strict";var r=n(407);n.n(r).a},445:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".icon--heart[data-v-72b1638f]{width:2.4rem;fill:none}.icon--heart--outline[data-v-72b1638f]{fill:#ff7989}",""])},446:function(t,e,n){var content=n(494);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("1b2d32c3",content,!0,{sourceMap:!1})},449:function(t,e,n){"use strict";n(21);var r={name:"IconWrapper",props:{label:{type:[String,Number],default:null}},computed:{existLabel:function(){return null!==this.label}},methods:{handleClick:function(){this.$emit("click")}}},o=(n(442),n(0)),component=Object(o.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon_wrapper__container"},[n("div",{staticClass:"icon_wrapper",on:{click:t.handleClick}},[t._t("default"),t._v(" "),t.existLabel?n("span",{staticClass:"label"},[t._v("\n      "+t._s(t.label)+"\n    ")]):t._e()],2)])},[],!1,null,"1eb641ae",null);e.a=component.exports},452:function(t,e,n){"use strict";n(444);var r=n(0),component=Object(r.a)({},function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"icon--heart",staticStyle:{"enable-background":"new 0 0 51.997 51.997"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 51.997 51.997","xml:space":"preserve"}},[e("path",{staticClass:"icon--heart--outline",attrs:{d:"M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905\n    c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478\n    c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014\n    C52.216,18.553,51.97,16.611,51.911,16.242z M49.521,21.261c-0.984,4.172-3.265,7.973-6.59,10.985L25.855,47.481L9.072,32.25\n    c-3.331-3.018-5.611-6.818-6.596-10.99c-0.708-2.997-0.417-4.69-0.416-4.701l0.015-0.101C2.725,9.139,7.806,3.826,14.158,3.826\n    c4.687,0,8.813,2.88,10.771,7.515l0.921,2.183l0.921-2.183c1.927-4.564,6.271-7.514,11.069-7.514\n    c6.351,0,11.433,5.313,12.096,12.727C49.938,16.57,50.229,18.264,49.521,21.261z"}}),this._v(" "),e("path",{attrs:{d:"M51.911,16.242C51.152,7.888,45.239,1.827,37.839,1.827c-4.93,0-9.444,2.653-11.984,6.905\n    c-2.517-4.307-6.846-6.906-11.697-6.906c-7.399,0-13.313,6.061-14.071,14.415c-0.06,0.369-0.306,2.311,0.442,5.478\n    c1.078,4.568,3.568,8.723,7.199,12.013l18.115,16.439l18.426-16.438c3.631-3.291,6.121-7.445,7.199-12.014\n    C52.216,18.553,51.97,16.611,51.911,16.242z"}})])},[],!1,null,"72b1638f",null);e.a=component.exports},493:function(t,e,n){"use strict";var r=n(446);n.n(r).a},494:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".post__container[data-v-dbdb0624]{background-color:#fafcff;margin-bottom:12rem;height:100%}.post_thumbnail[data-v-dbdb0624] {margin-bottom:3rem}@media only screen and (max-width:480px){.post_thumbnail[data-v-dbdb0624] {margin-bottom:1.5rem}}.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper{padding:2rem 10rem 5rem}@media only screen and (max-width:834px){.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper{padding:3rem}}@media only screen and (max-width:480px){.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper{padding:1.5rem}}.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper .post_thumbnail__header__container{max-width:50rem;margin:0 auto 3rem;padding:5rem}@media only screen and (max-width:834px){.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper .post_thumbnail__header__container{padding:4rem;margin-bottom:4rem}}@media only screen and (max-width:480px){.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper .post_thumbnail__header__container{padding:0}}.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper .post_thumbnail__header__container .post_thumbnail__header__tags{margin-bottom:1rem}@media only screen and (max-width:480px){.post_thumbnail[data-v-dbdb0624] .post_thumbnail__header__wrapper .post_thumbnail__header__container .post_thumbnail__header__title{font-size:2rem;font-weight:200}}.post_profile__container[data-v-dbdb0624]{display:flex;justify-content:space-between;padding:0 32rem;margin-bottom:2rem}@media only screen and (max-width:480px){.post_profile__container[data-v-dbdb0624]{padding:0 2rem;margin-bottom:1rem}}.icon_wrapper__container[data-v-dbdb0624]{display:flex}.icon_heart__container[data-v-dbdb0624]{display:flex;align-items:center}.icon_heart--active[data-v-dbdb0624]{fill:#ff7989}.icon_star[data-v-dbdb0624]{width:2.4rem}.icon_star--active[data-v-dbdb0624],.icon_star[data-v-dbdb0624] .icon--star--outline{fill:#ffc400}.post__article[data-v-dbdb0624]{margin:4rem auto 0;padding:0 5rem;max-width:60rem;font-size:1.4rem;line-height:3rem}@media only screen and (max-width:480px){.post__article[data-v-dbdb0624]{padding:0 3rem}}.post-audio__container[data-v-dbdb0624]{text-align:center;padding:3rem 0}",""])},508:function(t,e,n){"use strict";n.r(e);n(39);var r=n(8),o=(n(25),n(6)),c=n(16),_=n(19),l=n(415),d=n(402),m=n(449),h=n(452),f=n(65),v=c.b.collection("posts"),w={name:"Post",layout:"user",components:{PostProfile:l.a,PostThumbnail:d.a,IconWrapper:m.a,IconHeart:h.a,IconStar:f.a},asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.next=3,v.doc(n.id).get().then(function(t){var data=t.data(),e=JSON.parse(data.article);return data.article=e,{post:data}});case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),computed:Object(r.a)({},Object(_.c)({audio:function(t){return t.audio.audioData},authUid:function(t){return t.auth.user.uid}})),methods:Object(r.a)({},Object(_.b)("audio",["setAudioData","resetAudioData"]),{playAudio:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.setAudio();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),setAudio:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(){var data;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(data={author:{name:this.post.author.name,icon_url:this.post.author.icon_url},title:this.post.title,audio_url:this.post.audio_url},!this.audio){t.next=6;break}return t.next=4,this.resetAudio();case 4:return this.setAudioData(data),t.abrupt("return");case 6:this.setAudioData(data);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),resetAudio:function(){this.resetAudioData()},isLike:function(t,e){return t.some(function(t){return e===t})},isFavorite:function(){return!1},postLike:function(t,e,n){var r=this;t?v.doc(e).update({likes:c.c.firestore.FieldValue.arrayRemove(n)}).then(function(){r.post.likes=r.post.likes.filter(function(t){return t!==r.authUid})}):v.doc(e).update({likes:c.c.firestore.FieldValue.arrayUnion(n)}).then(function(){r.post.likes.push(r.authUid)})},addFavorite:function(){console.log("add favorite")}})},x=(n(493),n(0)),component=Object(x.a)(w,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post__wrapper"},[n("div",{staticClass:"post__container"},[n("div",{staticClass:"post"},[n("post-thumbnail",{staticClass:"post_thumbnail",attrs:{post:t.post},on:{playAudio:t.playAudio}}),t._v(" "),n("div",{staticClass:"post_profile__container"},[n("post-profile",{staticClass:"post_profile",attrs:{"icon-url":t.post.author.icon_url,name:t.post.author.name,"posted-at":t.post.posted_at}}),t._v(" "),n("div",{staticClass:"icon_wrapper__container"},[n("icon-wrapper",{staticClass:"icon_heart__container",attrs:{label:t.post.likes.length},on:{click:function(e){t.postLike(t.isLike(t.post.likes,t.authUid),t.post.id,t.authUid)}}},[n("icon-heart",{staticClass:"icon_heart",class:{"icon_heart--active":t.isLike(t.post.likes,t.authUid)}})],1),t._v(" "),n("icon-wrapper",{staticClass:"icon_star__container",on:{click:t.addFavorite}},[n("icon-star",{staticClass:"icon_star",class:{"icon_star--active":t.isFavorite()}})],1)],1)],1),t._v(" "),t._l(t.post.article,function(e,r){return n("div",{key:r,staticClass:"post__article"},[n("p",[t._v(t._s(t.$sanitize(e.data.text)))])])})],2)])])},[],!1,null,"dbdb0624",null);e.default=component.exports}}]);