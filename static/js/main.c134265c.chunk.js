(this["webpackJsonpwebapp-final-project"]=this["webpackJsonpwebapp-final-project"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={prof:"Profile_prof__2ThR3",head:"Profile_head__1tJVd",intro:"Profile_intro__3pX2z",content:"Profile_content__Pon5r",attributes:"Profile_attributes__1Ugcy",weak:"Profile_weak__3kQy8",container:"Profile_container__sidon",bio:"Profile_bio__ah1UU",tags:"Profile_tags__2ahdt",topic:"Profile_topic__eXzB-"}},function(e,t,n){e.exports={text:"Chat_text__1fPju",inputArea:"Chat_inputArea__3_7q9",chatInput:"Chat_chatInput__1KP74",send:"Chat_send__1CS3Q",bubble:"Chat_bubble__2Wovq",outer:"Chat_outer__3Hd6D",history:"Chat_history__1TnxB"}},,,,,,function(e,t,n){e.exports={navbar:"Navbar_navbar__3kA4y",navItem:"Navbar_navItem__2lRZt"}},function(e,t,n){e.exports={msg:"NewPost_msg__B2FLc",tagArea:"NewPost_tagArea__3H9zr",addComment:"NewPost_addComment__3mKud",actions:"NewPost_actions__285xW"}},,function(e,t,n){e.exports={whole:"Post_whole__1cI5n",post:"Post_post__HBBT8"}},,,,,function(e,t,n){e.exports={header:"Header_header__UEXKL"}},function(e,t,n){e.exports={header:"ChatHeader_header__1qKu5",headerItem:"ChatHeader_headerItem__1joCv",goBack:"ChatHeader_goBack__iyi81"}},function(e,t,n){e.exports={container:"App_container__7vWV2"}},,,,,function(e,t,n){e.exports={container:"FriendsList_container__1ldJ6"}},function(e,t,n){e.exports={post:"Explore_post__kNk3N"}},function(e,t,n){e.exports={slider:"TopicSlider_slider__9pCsL"}},,,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(27),i=n.n(a),s=(n(38),n(3)),o=n(2),j=function(e){return(e.startsWith("data:image")?"":"/webapp-final-project")+e},l=n(15),d=n.n(l),u=n(0);var b=function(){return Object(u.jsxs)("nav",{className:d.a.navbar,children:[Object(u.jsx)("div",{className:d.a.navItem,children:Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("img",{src:j("/assets/home.svg"),alt:"Home"})})}),Object(u.jsx)("div",{className:d.a.navItem,children:Object(u.jsx)(s.b,{to:"/explore",children:Object(u.jsx)("img",{src:j("/assets/explore.svg"),alt:"Explore"})})}),Object(u.jsx)("div",{className:d.a.navItem,children:Object(u.jsx)(s.b,{to:"/profile",children:Object(u.jsx)("img",{src:j("/assets/profile.svg"),alt:"Home"})})})]})},h=n(10),p=n(11),x={currentUserId:"junyi",users:[{id:"junyi",email:"wangcgv@bc.edu",photo:"/assets/ur1.png",name:"Junyi Wang",bio:"My name is Jy, and I am a Computer Sience major at Boston College. My main area of comp sci is website development, and I am fluent with JS, SQL, Java, and HTML",tags:["Computer Science","Math","random"]},{id:"yufin",email:"yangalm@bc.edu",photo:"/assets/ur2.png",name:"Yufin Yang",bio:"Hi, I am Yufin and I am a Math Comp Sci double major at Bosotn College. I am currently working on learning backend development of software so any discussions are welcome. I enjoy playing FPS when bored so if you are also a shooter hmu.",tags:["Computer Science","Math","Dancing","FPS"]},{id:"ryan",email:"wangchn@bc.edu",photo:"/assets/ur3.png",name:"Ryan Wang",bio:"My name is Ryan, and I am a CSGO Pro and Dota2 Pro. I like to compose music and write code in my freetime. My favorite genre of music is rap. ",tags:["Music","Computer Science","FPS"]},{id:"roger",email:"yangahq@bc.edu",photo:"/assets/ur4.png",name:"Roger Yang",bio:"Hi I am Roger, and I am a Psych major at Boston College. My area of expertise is social psychology",tags:["Console gaming","Psychology","Computer Science"]}],chats:[{id:"chat-1",from:"yufin",to:"junyi",text:"Hey Jy I am working on my Bio HW, and I am running into some trouble. Do you know 5 potential cures humans have found for curing cancer?",topic:"biology",datetime:"2020-02-09T22:45:28Z"},{id:"chat-2",from:"junyi",to:"yufin",text:"Sorry I am not familiar with biology research results. I can try referring my friend Danny to you. He might be able to help",topic:"biology",datetime:"2020-02-09T22:45:29Z"},{id:"chat-3",from:"roger",to:"junyi",text:"Hey Jy, do you know who the 5 Tigers Admiral are in the Three Kingdom?",topic:"history",datetime:"2020-02-09T22:45:26Z"},{id:"chat-4",from:"junyi",to:"roger",text:"yea, they are Guan Yu, Zhang Fei, Zhao Yun, Huang Zhong, and Ma chao",topic:"history",datetime:"2020-02-09T22:46:27Z"},{id:"chat-5",from:"roger",to:"junyi",text:"Thank you",topic:"history",datetime:"2020-02-09T22:46:40Z"}],posts:[{userId:"roger",text:"Post 1",datetime:"2020-05-22T11:45:27Z",topic:"python: can not int variable does not have property len",replies:[{from:"ryan",text:"try converting your integer variable to string using str(integerName), then use len"}]},{userId:"yufin",text:"Post 2",topic:"Cryptography: How to decrypt bad RSA encryption using a small exponent.",datetime:"2021-04-22T11:45:27Z",replies:[{from:"Roger",text:"Check out this page: ..."}]}]};var m=Object(c.createContext)();var O=function(e){var t=Object(c.useState)((function(){return JSON.parse(window.localStorage.getItem("store"))||x})),n=Object(p.a)(t,2),r=n[0],a=n[1];function i(e){return r.chats.find((function(t){return t.id==e}))}function s(e){return r.users.find((function(t){return t.id==e}))}return Object(c.useEffect)((function(){window.localStorage.setItem("store",JSON.stringify(r))}),[r]),Object(u.jsx)(m.Provider,{value:Object(h.a)(Object(h.a)({},r),{},{changeTag:function(e,t){var n=i(e);n.topic=t,a(Object(h.a)(Object(h.a)({},r),{},{chats:r.chats.filter((function(t){return!(t.id==e)})).concat(n)}))},getUser:s,addChat:function(e,t,n){var c={from:r.currentUserId,to:e,text:t,topic:n,datetime:(new Date).toISOString()};a(Object(h.a)(Object(h.a)({},r),{},{chats:r.chats.concat(c)}))},getChat:i,compChats:function(e,t){return e.datetime<t.datetime},publish:function(e){var t={userId:e.from,text:e.text,datetime:e.datetime,topic:e.topic,replies:[]},n=s(e.from);n.tags.includes(e.topic)||(n.tags.push(e.topic),console.log(n.tags)),a(Object(h.a)(Object(h.a)({},r),{},{posts:r.posts.concat(t),users:r.users.filter((function(e){return!(e.id==n.id)})).concat(n)}))}}),children:e.children})},f=n(23),g=n.n(f);var _=function(e){return Object(u.jsx)("div",{className:g.a.header,children:Object(u.jsx)("div",{className:g.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("h2",{children:null==e.title?"Project name":e.title})})})})},v=n(30),y=n.n(v);var C=function(){var e=Object(c.useContext)(m),t=e.currentUserId,n=e.users;return Object(u.jsx)("div",{children:Object(u.jsx)("div",{className:y.a.container,children:Object(u.jsx)("ul",{children:n.filter((function(e){return e.id!=t})).map((function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(s.b,{to:"/chat/"+e.id,children:[Object(u.jsx)("img",{src:j(e.photo)}),e.name]})})}))})})})};var I=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{title:"Chat"}),Object(u.jsx)(C,{})]})},N=n(18),S=n.n(N);var w=function(e){var t=Object(c.useContext)(m).getUser;return Object(u.jsxs)("div",{className:S.a.whole,children:[Object(u.jsxs)("div",{className:S.a.post,children:[Object(u.jsx)("img",{src:j(t(e.userId).photo),alt:"icon"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.userId})}),Object(u.jsx)("p",{children:e.text})]})]}),Object(u.jsx)("ul",{className:S.a.comments,children:e.replies.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsxs)("strong",{children:[e.from,":"]})," ",e.text]})}))})]})},P=n(31),T=n.n(P);var k=function(){var e=Object(c.useContext)(m).posts,t=Object(o.f)().topic;return console.log(t),Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{title:"Explore"+("undefined"!==typeof t?": "+t:"")}),("undefined"==typeof t?e:e.filter((function(e){return e.topic===t}))).map((function(e){return Object(u.jsx)("div",{className:T.a.post,children:Object(u.jsx)(w,{userId:e.userId,text:e.text,replies:e.replies})})}))]})},H=n(8),A=n.n(H);var B=function(){var e=Object(c.useContext)(m),t=e.users,n=e.currentUserId,r=e.posts,a=Object(o.f)().userId,i=null==a?n:a,l=t.find((function(e){return e.id===i}));return Object(u.jsxs)("div",{className:A.a.container,children:[Object(u.jsx)(_,{title:"Profile"}),Object(u.jsxs)("div",{className:A.a.head,children:[Object(u.jsx)("img",{src:j(l.photo),alt:"bigFace"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("b",{children:Object(u.jsx)("p",{children:l.id})}),Object(u.jsx)("p",{children:l.name}),Object(u.jsx)("p",{className:A.a.bio,children:l.bio})]})]}),Object(u.jsxs)("div",{className:A.a.content,children:[Object(u.jsxs)("div",{className:A.a.topics,children:[Object(u.jsx)("b",{children:Object(u.jsx)("p",{children:"Tags"})}),Object(u.jsx)("ul",{children:l.tags.map((function(e){return Object(u.jsx)("li",{className:A.a.tags,children:Object(u.jsx)(s.b,{to:"/explore/"+e,children:e})})}))})]}),Object(u.jsxs)("div",{className:A.a.recent,children:[Object(u.jsx)("b",{children:Object(u.jsx)("p",{children:"Recent questions"})}),Object(u.jsx)("ul",{children:r.filter((function(e){return e.userId===l.id})).map((function(e){return Object(u.jsx)("li",{className:A.a.questions,children:Object(u.jsxs)(s.b,{children:[e.text,Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:A.a.topic,children:["Topic: ",e.topic]})]})})}))})]})]}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{})]})},U=n(33),J=n(24),M=n.n(J);var F=function(e){return Object(u.jsxs)("div",{className:M.a.header,children:[Object(u.jsx)("div",{children:Object(u.jsx)(s.b,{to:"/",children:Object(u.jsx)("p",{children:"\uff1c"})})}),Object(u.jsx)("div",{className:M.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("h2",{children:null==e.title?"Project name":e.title})})})]})},Z=n(32),D=n.n(Z);var R=function(e){return Object(u.jsxs)("div",{className:D.a.slider,children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:"Topics"})}),Object(u.jsxs)("ul",{children:[Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(t){e.changeSliderState(),e.setTopic("All")},children:"All"})}),e.topics.map((function(t){return Object(u.jsx)("li",{children:Object(u.jsx)("button",{onClick:function(n){e.changeSliderState(),e.setTopic(t)},children:t})})}))]})]})},L=n(9),E=n.n(L);var W=function(){var e=Object(c.useState)(""),t=Object(p.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(!1),i=Object(p.a)(a,2),l=i[0],d=i[1],b=Object(c.useState)("All"),h=Object(p.a)(b,2),x=h[0],O=h[1],f=Object(o.f)().userId,g=Object(c.useContext)(m),_=g.chats,v=g.addChat,y=g.getUser,C=g.compChats;function I(e){return Object(u.jsx)("li",{className:E.a.bubble,children:Object(u.jsxs)("div",{className:E.a.outer,children:[Object(u.jsx)(s.b,{to:"/profile/"+y(e.from).id,children:Object(u.jsx)("img",{src:j(y(e.from).photo),alt:"icon"})}),Object(u.jsx)(s.b,{to:"/newpost/"+e.id,children:Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.from})}),Object(u.jsx)("p",{children:e.text})]})})]})})}function N(){return _.filter((function(e){return e.from===f||e.to===f})).sort(C)}function S(){d(!l)}return Object(u.jsxs)("div",{className:E.a.container,children:[Object(u.jsx)(F,{title:"Chat with "+f,changeSliderState:S,className:E.a.header}),l&&Object(u.jsx)(R,{setTopic:O,topics:function(){var e=[];return N().forEach((function(t){return e.push(t.topic)})),Object(U.a)(new Set(e))}(),changeSliderState:S}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("ul",{className:E.a.history,children:"All"==x?N().map((function(e){return I(e)})):N().filter((function(e){return e.topic==x})).map((function(e){return I(e)}))})})}),Object(u.jsx)("div",{className:E.a.inputArea,children:Object(u.jsxs)("form",{className:E.a.addComment,onSubmit:function(e){""!==n&&(v(f,n,x),r("")),e.preventDefault()},children:[Object(u.jsx)("input",{className:E.a.chatInput,type:"text",placeholder:"Type a respond...",value:n,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("button",{className:E.a.send,type:"Send",children:"send"})]})})]})},q=n(16),K=n.n(q);var Y=function(e){var t=Object(o.f)().chatId,n=Object(c.useContext)(m),r=n.changeTag,a=n.currentUserId,i=n.getChat,l=n.getUser,d=n.publish,b=i(t),h=Object(c.useState)(b.topic),x=Object(p.a)(h,2),O=x[0],f=x[1];return Object(u.jsxs)("div",{children:[Object(u.jsx)(_,{title:"Post this paragraph"}),Object(u.jsxs)("div",{className:K.a.msg,children:[Object(u.jsx)("img",{src:j(l(b.from).photo),alt:"icon"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:b.from})}),Object(u.jsx)("p",{children:b.text})]})]}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{className:K.a.tagArea,children:[Object(u.jsxs)("p",{children:["Current Topic: ",b.topic]}),Object(u.jsxs)("form",{onSubmit:function(e){console.log(O),r(t,O),e.preventDefault()},className:K.a.addComment,children:[Object(u.jsx)("input",{type:"text",placeholder:"Type here to change the tag",onChange:function(e){return f(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"OK"})]})]}),Object(u.jsxs)("div",{className:K.a.actions,children:[Object(u.jsx)("button",{children:Object(u.jsx)(s.b,{to:"/chat/"+(b.from==a?b.to:b.from),children:"Cancel"})}),Object(u.jsx)("button",{children:"Save"}),Object(u.jsx)("button",{onClick:function(){d(b)},children:"Publish"})]})]})},z=n(25),Q=n.n(z);var X=function(){return Object(u.jsx)(s.a,{basename:"/webapp-final-project",children:Object(u.jsx)(O,{children:Object(u.jsxs)("div",{className:Q.a.container,children:[Object(u.jsx)("main",{className:Q.a.content,children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/explore/:topic?",children:Object(u.jsx)(k,{})}),Object(u.jsx)(o.a,{path:"/chat/:userId",children:Object(u.jsx)(W,{})}),Object(u.jsx)(o.a,{path:"/profile/:userId?",children:Object(u.jsx)(B,{})}),Object(u.jsx)(o.a,{path:"/newpost/:chatId?",children:Object(u.jsx)(Y,{})}),Object(u.jsx)(o.a,{path:"/",children:Object(u.jsx)(I,{})})]})}),Object(u.jsx)(b,{})]})})})},G=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(X,{})}),document.getElementById("root")),G()}],[[45,1,2]]]);
//# sourceMappingURL=main.c134265c.chunk.js.map