(this["webpackJsonpwebapp-final-project"]=this["webpackJsonpwebapp-final-project"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={prof:"Profile_prof__S0vU6",head:"Profile_head__vwu1h",intro:"Profile_intro__1_aUa",content:"Profile_content__2vKfQ",attributes:"Profile_attributes__3VEmG",weak:"Profile_weak__2r6Pv",container:"Profile_container__3V3Fq",bio:"Profile_bio__3QvIq",tags:"Profile_tags__3kXPQ",topic:"Profile_topic__XPpOn"}},function(e,t,n){e.exports={text:"Chat_text__X3MLL",inputArea:"Chat_inputArea__3bSyv",chatInput:"Chat_chatInput__2Y-lE",send:"Chat_send__2CNhK",bubble:"Chat_bubble__15NKC",outer:"Chat_outer__g2rim",history:"Chat_history__3w_wH"}},,,,function(e,t,n){e.exports={container:"FriendsList_container__22z7y",nameTime:"FriendsList_nameTime__2BFdw",other:"FriendsList_other__3Ggfn",time:"FriendsList_time__2cXDm",lastchat:"FriendsList_lastchat__2QuPc"}},,,function(e,t,n){e.exports={navbar:"Navbar_navbar__2QHtB",navItem:"Navbar_navItem__NgyC-"}},function(e,t,n){e.exports={post:"Explore_post__3_Glj",usersBox:"Explore_usersBox__BhXx_",whole:"Explore_whole__1sSkN"}},function(e,t,n){e.exports={msg:"NewPost_msg__1OW0S",tagArea:"NewPost_tagArea__FYM1X",addComment:"NewPost_addComment__3Jf2q",actions:"NewPost_actions__imaRT"}},,function(e,t,n){e.exports={whole:"Post_whole__6ALM1",post:"Post_post__2Y6VX"}},,,,,function(e,t,n){e.exports={header:"Header_header__1XZD_"}},function(e,t,n){e.exports={header:"ChatHeader_header__3MTRM",headerItem:"ChatHeader_headerItem__3EQSs",goBack:"ChatHeader_goBack__2Wlqm"}},function(e,t,n){e.exports={container:"App_container__XLEwj"}},,,,,function(e,t,n){e.exports={slider:"TopicSlider_slider__1rl1m"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(29),i=n.n(s),a=(n(38),n(3)),o=n(2),l=function(e){return(e.startsWith("data:image")?"":"/webapp-final-project")+e},j=n(16),d=n.n(j),u=n(0);var h=function(){return Object(u.jsxs)("nav",{className:d.a.navbar,children:[Object(u.jsx)("div",{className:d.a.navItem,children:Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)("img",{src:l("/assets/home.svg"),alt:"Home"})})}),Object(u.jsx)("div",{className:d.a.navItem,children:Object(u.jsx)(a.b,{to:"/explore",children:Object(u.jsx)("img",{src:l("/assets/explore.svg"),alt:"Explore"})})}),Object(u.jsx)("div",{className:d.a.navItem,children:Object(u.jsx)(a.b,{to:"/profile",children:Object(u.jsx)("img",{src:l("/assets/profile.svg"),alt:"Home"})})})]})},b=n(10),m=n(11),p={currentUserId:"junyi",users:[{id:"junyi",email:"wangcgv@bc.edu",photo:"/assets/ur1.png",name:"Junyi Wang",bio:"My name is Jy, and I am a Computer Sience major at Boston College. My main area of comp sci is website development, and I am fluent with JS, SQL, Java, and HTML",tags:["computer science","math","random"]},{id:"yufin",email:"yangalm@bc.edu",photo:"/assets/ur2.png",name:"Yufin Yang",bio:"Hi, I am Yufin and I am a Math Comp Sci double major at Bosotn College. I am currently working on learning backend development of software so any discussions are welcome. I enjoy playing FPS when bored so if you are also a shooter hmu.",tags:["computer science","math","dancing","fps"]},{id:"ryan",email:"wangchn@bc.edu",photo:"/assets/ur3.png",name:"Ryan Wang",bio:"My name is Ryan, and I am a CSGO Pro and Dota2 Pro. I like to compose music and write code in my freetime. My favorite genre of music is rap. ",tags:["music","computer science","fps"]},{id:"roger",email:"yangahq@bc.edu",photo:"/assets/ur4.png",name:"Roger Yang",bio:"Hi I am Roger, and I am a Psych major at Boston College. My area of expertise is social psychology",tags:["console gaming","psychology","computer science"]}],chats:[{id:"chat-1",from:"yufin",to:"junyi",text:"Hey Jy I am working on my Bio HW, and I am running into some trouble. Do you know 5 potential cures humans have found for curing cancer?",topic:"biology",datetime:"2020-02-09T22:45:28Z"},{id:"chat-2",from:"junyi",to:"yufin",text:"Sorry I am not familiar with biology research results. I can try referring my friend Danny to you. He might be able to help",topic:"biology",datetime:"2020-02-09T22:45:29Z"},{id:"chat-3",from:"roger",to:"junyi",text:"Hey Jy, do you know who the 5 Tigers Admiral are in the Three Kingdom?",topic:"history",datetime:"2020-02-09T22:45:26Z"},{id:"chat-4",from:"junyi",to:"roger",text:"yea, they are Guan Yu, Zhang Fei, Zhao Yun, Huang Zhong, and Ma chao",topic:"history",datetime:"2020-02-09T22:46:27Z"},{id:"chat-5",from:"roger",to:"junyi",text:"Thank you",topic:"history",datetime:"2020-02-09T22:46:40Z"},{id:"chat-6",from:"ryan",to:"junyi",text:"What is the name of the biggest dinossaur ever existed?",topic:"biology",datetime:"2020-02-09T22:46:40Z"}],posts:[{userId:"roger",text:"python: can not int variable does not have property len",datetime:"2020-05-22T11:45:27Z",topic:"computer Science",replies:[{from:"ryan",text:"try converting your integer variable to string using str(integerName), then use len"}]},{userId:"yufin",text:"Cryptography: How to decrypt bad RSA encryption using a small exponent.",topic:"computer science",datetime:"2021-04-22T11:45:27Z",replies:[{from:"Roger",text:"Check out this page: ..."}]}]};var x=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),n=0;n<1e7&&!((new Date).getTime()-t>e);n++);}(1),e?e+t:t},O=Object(c.createContext)();var f=function(e){var t=Object(c.useState)((function(){return JSON.parse(window.localStorage.getItem("store"))||p})),n=Object(m.a)(t,2),r=n[0],s=n[1];function i(e){return r.chats.find((function(t){return t.id==e}))}function a(e){return r.users.find((function(t){return t.id==e}))}return Object(c.useEffect)((function(){window.localStorage.setItem("store",JSON.stringify(r))}),[r]),Object(u.jsx)(O.Provider,{value:Object(b.a)(Object(b.a)({},r),{},{changeTag:function(e,t){var n=i(e);n.topic=t.toLowerCase(),s(Object(b.a)(Object(b.a)({},r),{},{chats:r.chats.filter((function(t){return!(t.id==e)})).concat(n)}))},getUser:a,addChat:function(e,t,n){var c={id:x(),from:r.currentUserId,to:e,text:t,topic:n.toLowerCase(),datetime:(new Date).toISOString()};s(Object(b.a)(Object(b.a)({},r),{},{chats:r.chats.concat(c)}))},getChat:i,compChats:function(e,t){return e.datetime<t.datetime},publish:function(e){var t={userId:e.from,text:e.text,datetime:e.datetime,topic:e.topic.toLowerCase(),replies:[]},n=a(e.from);n.tags.includes(e.topic)||(n.tags.push(e.topic),console.log(n.tags)),s(Object(b.a)(Object(b.a)({},r),{},{posts:r.posts.concat(t),users:r.users.filter((function(e){return!(e.id==n.id)})).concat(n)}))}}),children:e.children})},g=n(25),_=n.n(g);var v=function(e){return Object(u.jsx)("div",{className:_.a.header,children:Object(u.jsx)("div",{className:_.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("h2",{children:null==e.title?"Project name":e.title})})})})},y=n(13),N=n.n(y);var w=function(){var e=Object(c.useContext)(O),t=e.currentUserId,n=e.users,r=e.chats;function s(e){console.log(r);var t=r.filter((function(t){return t.to===e||t.from===e}))[0];return console.log(t),"undefined"===typeof t&&(t={text:"",datetime:""}),t}return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:N.a.container,children:Object(u.jsx)("ul",{children:n.filter((function(e){return e.id!=t})).map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(a.b,{to:"/chat/"+e.id,children:[Object(u.jsx)("img",{src:l(e.photo)}),Object(u.jsxs)("div",{className:N.a.other,children:[Object(u.jsxs)("div",{className:N.a.nameTime,children:[Object(u.jsx)("p",{children:e.name}),Object(u.jsx)("p",{className:N.a.time,children:s(e.id).datetime.substring(11,16)})]}),Object(u.jsx)("p",{class:N.a.lastchat,children:s(e.id).text.length>=40?s(e.id).text.substring(0,40)+"...":s(e.id).text})]})]})})}))})})})};var C=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{title:"Chat"}),Object(u.jsx)(w,{})]})},I=n(20),S=n.n(I);var T=function(e){var t=Object(c.useContext)(O).getUser;return Object(u.jsxs)("div",{className:S.a.whole,children:[Object(u.jsxs)("div",{className:S.a.post,children:[Object(u.jsx)("img",{src:l(t(e.userId).photo),alt:"icon"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.userId})}),Object(u.jsx)("p",{children:e.text})]})]}),Object(u.jsx)("ul",{className:S.a.comments,children:e.replies.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("strong",{children:[e.from,":"]})," ",e.text]})}))})]})},P=n(17),k=n.n(P);var H=function(){var e=Object(c.useContext)(O),t=e.currentUserId,n=e.posts,r=e.users,s=Object(o.f)().topic;return console.log(s),Object(u.jsxs)("div",{className:k.a.whole,children:[Object(u.jsx)(v,{title:"undefined"===typeof s?"Explore":"Explore: "+s}),function(){var e=r.filter((function(e){return e.id!==t})),n="undefined"===typeof s?e:e.filter((function(e){return e.tags.includes(s)}));return console.log(n),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"undefined"===typeof s?"Other users:":"Other users related to this topic:"}),Object(u.jsx)("div",{className:k.a.usersBox,children:n.map((function(e){return Object(u.jsxs)("div",{className:k.a.user,children:[Object(u.jsx)("img",{src:l(e.photo)}),Object(u.jsx)("p",{children:e.name})]})}))})]})}(),("undefined"==typeof s?n:n.filter((function(e){return e.topic===s}))).map((function(e){return Object(u.jsx)("div",{className:k.a.post,children:Object(u.jsx)(T,{userId:e.userId,text:e.text,replies:e.replies})})}))]})},L=n(8),A=n.n(L);var F=function(){var e=Object(c.useContext)(O),t=e.users,n=e.currentUserId,r=e.posts,s=Object(o.f)().userId,i=null==s?n:s,j=t.find((function(e){return e.id===i}));return Object(u.jsxs)("div",{className:A.a.container,children:[Object(u.jsx)(v,{title:"Profile"}),Object(u.jsxs)("div",{className:A.a.head,children:[Object(u.jsx)("img",{src:l(j.photo),alt:"bigFace"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:Object(u.jsx)("p",{children:j.id})}),Object(u.jsx)("p",{children:j.name}),Object(u.jsx)("p",{className:A.a.bio,children:j.bio})]})]}),Object(u.jsxs)("div",{className:A.a.content,children:[Object(u.jsxs)("div",{className:A.a.topics,children:[Object(u.jsx)("b",{children:Object(u.jsx)("p",{children:"Tags"})}),Object(u.jsx)("ul",{children:j.tags.map((function(e){return Object(u.jsx)("li",{className:A.a.tags,children:Object(u.jsx)(a.b,{to:"/explore/"+e,children:e})})}))})]}),Object(u.jsxs)("div",{className:A.a.recent,children:[Object(u.jsx)("b",{children:Object(u.jsx)("p",{children:"Recent posts"})}),Object(u.jsx)("ul",{children:r.filter((function(e){return e.userId===j.id})).map((function(e){return Object(u.jsx)("li",{className:A.a.questions,children:Object(u.jsx)(a.b,{children:Object(u.jsxs)("div",{children:[e.text,Object(u.jsxs)("div",{className:A.a.topic,children:["Topic: ",e.topic]})]})})})}))})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},B=n(33),M=n(26),E=n.n(M);var D=function(e){return Object(u.jsxs)("div",{className:E.a.header,children:[Object(u.jsx)("div",{children:Object(u.jsx)(a.b,{to:"/",children:Object(u.jsx)("p",{children:"\uff1c"})})}),Object(u.jsx)("div",{className:E.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("h2",{children:null==e.title?"Project name":e.title})})})]})},U=n(32),Z=n.n(U);var J=function(e){return Object(u.jsxs)("div",{className:Z.a.slider,children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"Topics"})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(t){e.changeSliderState(),e.setTopic("All")},children:"All"})}),e.topics.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(n){e.changeSliderState(),e.setTopic(t)},children:t})})}))]})]})},R=n(9),X=n.n(R);var Y=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(m.a)(s,2),j=i[0],d=i[1],h=Object(c.useState)("All"),b=Object(m.a)(h,2),p=b[0],x=b[1],f=Object(o.f)().userId,g=Object(c.useContext)(O),_=g.chats,v=g.addChat,y=g.getUser,N=g.compChats;function w(e){return Object(u.jsx)("li",{className:X.a.bubble,children:Object(u.jsxs)("div",{className:X.a.outer,children:[Object(u.jsx)(a.b,{to:"/profile/"+y(e.from).id,children:Object(u.jsx)("img",{src:l(y(e.from).photo),alt:"icon"})}),Object(u.jsx)(a.b,{to:"/newpost/"+e.id,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.from})}),Object(u.jsx)("p",{children:e.text})]})})]})})}function C(){return _.filter((function(e){return e.from===f||e.to===f})).sort(N)}function I(){d(!j)}return Object(u.jsxs)("div",{className:X.a.container,children:[Object(u.jsx)(D,{title:"Chat with "+f,changeSliderState:I,className:X.a.header}),j&&Object(u.jsx)(J,{setTopic:x,topics:function(){var e=[];return C().forEach((function(t){return e.push(t.topic)})),Object(B.a)(new Set(e))}(),changeSliderState:I}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:X.a.history,children:"All"==p?C().map((function(e){return w(e)})):C().filter((function(e){return e.topic==p})).map((function(e){return w(e)}))})})}),Object(u.jsx)("div",{className:X.a.inputArea,children:Object(u.jsxs)("form",{className:X.a.addComment,onSubmit:function(e){""!==n&&(v(f,n,"All"===p?"null":p),r("")),e.preventDefault()},children:[Object(u.jsx)("input",{className:X.a.chatInput,type:"text",placeholder:"Type a respond...",value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{className:X.a.send,type:"Send",children:"send"})]})})]})},Q=n(18),W=n.n(Q);var q=function(){var e=Object(o.f)().chatId,t=Object(c.useContext)(O),n=t.changeTag,r=t.currentUserId,s=t.getChat,i=t.getUser,j=t.publish,d=s(e),h=Object(c.useState)(d.topic),b=Object(m.a)(h,2),p=b[0],x=b[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(v,{title:"Post this paragraph"}),Object(u.jsxs)("div",{className:W.a.msg,children:[Object(u.jsx)("img",{src:l(i(d.from).photo),alt:"icon"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:d.from})}),Object(u.jsx)("p",{children:d.text})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:W.a.tagArea,children:[Object(u.jsxs)("p",{children:["Current Topic: ",d.topic]}),Object(u.jsxs)("form",{onSubmit:function(t){console.log(p),n(e,p),t.preventDefault()},className:W.a.addComment,children:[Object(u.jsx)("input",{type:"text",placeholder:"Type here to change the tag",onChange:function(e){return x(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"OK"})]})]}),Object(u.jsxs)("div",{className:W.a.actions,children:[Object(u.jsx)("button",{children:Object(u.jsx)(a.b,{to:"/chat/"+(d.from==r?d.to:d.from),children:"Cancel"})}),Object(u.jsx)("button",{children:"Save"}),Object(u.jsx)("button",{onClick:function(){j(d)},children:"Publish"})]})]})},G=n(27),K=n.n(G);var V=function(){return Object(u.jsx)(a.a,{basename:"/webapp-final-project",children:Object(u.jsx)(f,{children:Object(u.jsxs)("div",{className:K.a.container,children:[Object(u.jsx)("main",{className:K.a.content,children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/explore/:topic?",children:Object(u.jsx)(H,{})}),Object(u.jsx)(o.a,{path:"/chat/:userId",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(o.a,{path:"/profile/:userId?",children:Object(u.jsx)(F,{})}),Object(u.jsx)(o.a,{path:"/newpost/:chatId?",children:Object(u.jsx)(q,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(C,{})})]})}),Object(u.jsx)(h,{})]})})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),z()}],[[45,1,2]]]);
//# sourceMappingURL=main.55f70d74.chunk.js.map