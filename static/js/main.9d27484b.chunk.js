(this.webpackJsonpdummymessenger=this.webpackJsonpdummymessenger||[]).push([[0],{10:function(e,t,a){e.exports={sideBarItem:"SideBarItem_sideBarItem__8vHkz",isCurrentPage__closed:"SideBarItem_isCurrentPage__closed__p9jAj",isCurrentPage__opened:"SideBarItem_isCurrentPage__opened__-OSEn",icon:"SideBarItem_icon__1r1Ev",icon__opened:"SideBarItem_icon__opened__2L7v0",isOpen:"SideBarItem_isOpen__1Miil"}},14:function(e,t,a){e.exports={searchInput:"ChatList_searchInput__1M19z",chatList:"ChatList_chatList__kTfDG",chatItemContainer:"ChatList_chatItemContainer__2ml_5",loading:"ChatList_loading__14HiQ",isCurrentMessengerView:"ChatList_isCurrentMessengerView__iAydA",isNotCurrentMessengerView:"ChatList_isNotCurrentMessengerView__2vkQe"}},17:function(e,t,a){e.exports={sideBar:"SideBar_sideBar__2fwcD",slideToLeft:"SideBar_slideToLeft__1buZe",toggleButton:"SideBar_toggleButton__R80kF",isOpen:"SideBar_isOpen__1on_M",isCurrentView:"SideBar_isCurrentView__ukDSV",isNotCurrentView:"SideBar_isNotCurrentView__9eiwq"}},20:function(e,t,a){e.exports={dashboard:"DashBoard_dashboard__2cfRe",slideToRight:"DashBoard_slideToRight__17lqP",isCurrentView:"DashBoard_isCurrentView__2dSL_",isNotCurrentView:"DashBoard_isNotCurrentView__14wUC"}},21:function(e,t,a){e.exports={chatItem:"ChatItem_chatItem__2BkCU",text:"ChatItem_text__3hYlu",isActive:"ChatItem_isActive__24FgT"}},25:function(e,t,a){e.exports={tabBarItem:"TabBarItem_tabBarItem__1MbIU",isCurrentTab:"TabBarItem_isCurrentTab__FU3-b",fillBar:"TabBarItem_fillBar__1ZT9V"}},34:function(e,t,a){e.exports={toggleSideBar:"ToggleSideBarButton_toggleSideBar__14AcP"}},35:function(e,t,a){e.exports={tabBar:"TabBar_tabBar__ollAj"}},36:function(e,t,a){e.exports={messenger:"Messenger_messenger__1tXXf"}},39:function(e,t,a){e.exports={avatar:"Avatar_avatar__2LfzW"}},4:function(e,t,a){e.exports={container:"MessageItem_container__3z8nV",message:"MessageItem_message__1hngD",profilePicture:"MessageItem_profilePicture__1G55h","message--user":"MessageItem_message--user__pCx89","appearAnimation--Left":"MessageItem_appearAnimation--Left__JAvGz","message--friend":"MessageItem_message--friend__-Yjma","appearAnimation--Right":"MessageItem_appearAnimation--Right__ID3-M",deleteButton:"MessageItem_deleteButton__2S5dC","deleteButton--right":"MessageItem_deleteButton--right__1Qwnf","time--user":"MessageItem_time--user__U18Oy","time--friend":"MessageItem_time--friend__7XEL8",left:"MessageItem_left__1Zogv",right:"MessageItem_right__281NC"}},41:function(e,t,a){e.exports=a(58)},57:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),s=a.n(c),o=a(3),i=a(11),l=a(8),u=a(20),m=a.n(u),g=[{name:"Channel 1",component:"ChannelOne",path:"channel1"},{name:"Channel 2",component:"Messenger",path:"messenger"},{name:"Channel 3",component:"ChannelThree",path:"channel3"}],h=a(25),_=a.n(h),d=function(e){var t=e.name,a=e.path,n=e.homepage;return r.a.createElement(i.b,{to:n+a,exact:!0,onClick:function(){},className:"".concat(_.a.tabBarItem," \n      /* set the active styles for the tab if its path */\n      ").concat(window.location.pathname===n+a&&_.a.isCurrentTab)},t)},f=r.a.createContext(),p=a(34),C=a.n(p),E=function(){return r.a.createElement(f.Consumer,null,(function(e){var t=e.setCurrentView;return r.a.createElement("button",{className:C.a.toggleSideBar,onClick:function(){return t("sideBar")}},"sidebar")}))},b=a(35),v=a.n(b),w=function(e){var t=e.setCurrentTab,a=e.currentTab,n=e.homepage;return r.a.createElement("header",{className:v.a.tabBar},r.a.createElement("nav",null,g.map((function(e){return r.a.createElement(d,Object.assign({key:e.name},e,{setCurrentTab:t,currentTab:a,homepage:n}))}))),r.a.createElement(E,null))},I=a(36),O=a.n(I),B=a(19),S=(a(50),a(59),a(24)),M=a.n(S),V=a(16),N=a.n(V);B.initializeApp({apiKey:"AIzaSyB6xS5yf1JofwEnHY6ApmUwALoi49MeIdw",authDomain:"dummymessenger-5fe99.firebaseapp.com",databaseURL:"https://dummymessenger-5fe99.firebaseio.com",projectId:"dummymessenger-5fe99",storageBucket:"dummymessenger-5fe99.appspot.com",messagingSenderId:"915877512487",appId:"1:915877512487:web:2460762b4b1ca8ebb79502",measurementId:"G-1J2D8H4CJ6"});var j=B.firestore();B.analytics();var x=a(21),y=a.n(x),P=function(e){var t=e.contact,a=e.currentChat,c=e.setCurrentChat,s=e.setCurrentMessengerView,i=Object(n.useState)(null),l=Object(o.a)(i,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){j.collection("chats").doc(t.userId).collection("messages").doc("lastMessage").get().then((function(e){var t="";Object.keys(e.data()).length>0&&(console.log("lastmessage",e.data()),(t=e.data().content).length>20&&(t=t.substring(0,20)+"...")),m(t)}),[])})),r.a.createElement("div",{className:"".concat(y.a.chatItem," ").concat(a&&t.userId===a.userId&&y.a.isActive),onClick:function(){!function(e,t,a){j.collection("chats").doc(e).collection("messages").get().then((function(n){var r=[];n.forEach((function(e){"lastMessage"!==e.id&&r.push(e.data())})),r.sort((function(e,t){return e.submissionTime-t.submissionTime})),t({chatId:e,contact:a,messages:r})})).catch((function(e){return console.log(e)}))}(t.userId,c,t),s("chatScreen")}},r.a.createElement("img",{src:t.profilePic,alt:t.name}),r.a.createElement("div",{className:y.a.text},r.a.createElement("h4",null,t.name),r.a.createElement("p",null,u)))},L=a(14),k=a.n(L),T=function(e){var t=e.contactsList,a=e.currentChat,c=e.setCurrentChat,s=e.currentMessengerView,i=e.setCurrentMessengerView,l=Object(n.useState)(""),u=Object(o.a)(l,2),m=u[0],g=u[1];return console.log("contactslist",t),r.a.createElement("div",{className:"".concat(k.a.chatList," ").concat("chatList"===s?k.a.isCurrentMessengerView:k.a.isNotCurrentMessengerView)},r.a.createElement("div",{className:k.a.searchInput},r.a.createElement("input",{type:"text",placeholder:"Search ...",value:m,onChange:function(e){return g(e.target.value)}}),r.a.createElement("img",{src:"./assets/icons/magnifying-glass.svg",alt:"search here"})),r.a.createElement("div",{className:k.a.chatItemContainer},t?function(e,t,a,n){return e.map((function(e){return r.a.createElement(P,{contact:e,setCurrentChat:t,currentChat:a,setCurrentMessengerView:n})}))}(function(e,t){return e.filter((function(e){return e.name.includes(t)}))}(t,m),c,a,i):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:k.a.loading,src:"./assets/gifs/loading.svg",alt:"loading"}))))},A=a(40),D=a(38),H=a(4),F=a.n(H),z=function(e){var t=e.author,a=e.chat,n=e.deleteMessage,c=e.currentChat,s=e.setCurrentChat;return r.a.createElement("div",{className:"".concat(F.a.container,"\n    ").concat("Alex"===t.name?F.a.right:F.a.left,"\n    ")},"Alex"===t.name?r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:F.a.profilePicture,src:t.profilePicture,alt:"".concat(t.name," ").concat(t.lastName)}),r.a.createElement("div",{className:"".concat(F.a.message," ").concat(F.a["message--user"])},a.content,r.a.createElement("button",{className:"".concat(F.a.deleteButton," ").concat(F.a["deleteButton--right"]),onClick:function(e){return n(c.chatId,a.messageId,s,c,e)}},r.a.createElement("i",{class:"icon ion-md-trash"})),r.a.createElement("span",{className:F.a["time--user"]},N()(a.submissionTime).format("HH : mm")))):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:F.a.profilePicture,src:c.contact.profilePic,alt:c.contact.name}),r.a.createElement("div",{className:"".concat(F.a.message," ").concat(F.a["message--friend"])},a.content,r.a.createElement("button",{className:F.a.deleteButton,onClick:function(e){return n(c.chatId,a.messageId,s,c,e)}},r.a.createElement("i",{class:"icon ion-md-trash"})),r.a.createElement("span",{className:F.a["time--friend"]},N()(a.submissionTime).format("HH : mm")))))},J={lastName:"Hunter",name:"Alex",number:"09123456789",profilePicture:"https://i.pinimg.com/236x/da/bd/70/dabd7011f523c7676c0770eeeff43df4.jpg"},R=a(9),U=a.n(R);function W(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function G(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?W(a,!0).forEach((function(t){Object(D.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):W(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Q=function(e,t,a,n,r){j.collection("chats").doc(e).collection("messages").doc(t).delete().then((function(){var e=n.messages.filter((function(e){return e.messageId!==t}));a(G({},n,{messages:e}))})).catch((function(e){return console.log(e)}))},Y=function(e,t,a,n){var r=M()(),c={author:0,content:e,messageId:r,submissionTime:N()().valueOf()};j.collection("chats").doc(a.chatId).collection("messages").doc(r).set(c).then((function(){!function(e,t,a,n){j.collection("chats").doc(t.chatId).collection("messages").doc("lastMessage").set(e).then((function(){a(G({},t,{messages:[].concat(Object(A.a)(t.messages),[e])}))})).catch((function(e){return console.log(e)}))}(c,a,n)})).catch((function(e){return console.log(e)}))},q=function(e){var t=e.currentChat,a=e.setCurrentChat,c=(e.contactsList,e.setContactsList,e.currentMessengerView),s=e.setCurrentMessengerView,i=Object(n.useState)(""),l=Object(o.a)(i,2),u=l[0],m=l[1];return Object(n.useEffect)((function(){m(""),t&&function(e){var t={};e.messages.length>0&&(t=e.messages.slice(-1)[0]),j.collection("chats").doc(e.chatId).collection("messages").doc("lastMessage").set(t).then((function(){console.log("the last message was updated successfully")})).catch((function(e){return console.log(e)}))}(t)}),[t]),r.a.createElement(f.Consumer,null,(function(e){return r.a.createElement("div",{className:"".concat(U.a.chatScreen,"\n        \n       ").concat("chatScreen"===c?U.a.isCurrentMessengerView:U.a.isNotCurrentMessengerView,"\n         \n          ")},t?r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:U.a.close,onClick:function(){a(null),s("chatList")}},r.a.createElement("i",{className:"icon ion-md-close"})),r.a.createElement("div",{className:U.a.messageScreen},r.a.createElement("div",{className:U.a.messageContainer},t.messages.map((function(e){return 0===e.author?r.a.createElement(z,{author:J,chat:e,deleteMessage:Q,currentChat:t,setCurrentChat:a}):r.a.createElement(z,{author:t.contact,chat:e,deleteMessage:Q,currentChat:t,setCurrentChat:a})})))),r.a.createElement("div",{className:U.a.typingArea},r.a.createElement("textarea",{placeholder:"write a message ...",onChange:function(e){return m(e.target.value)},value:u}),u&&r.a.createElement("button",{onClick:function(){Y(u,0,t,a)}},r.a.createElement("i",{className:"icon ion-md-send"})))):"welcome , please select a chat to start")}))},X=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=a[0],s=a[1],i=Object(n.useState)(null),l=Object(o.a)(i,2),u=l[0],m=l[1],g=Object(n.useState)("chatList"),h=Object(o.a)(g,2),_=h[0],d=h[1];return Object(n.useEffect)((function(){j.collection("users").get().then((function(e){var t=[];e.forEach((function(e){console.log(e.id," => ",e.data()),t.push(e.data())})),m(t)})).catch((function(e){console.log("Error getting document:",e)}))}),[]),r.a.createElement("div",{className:O.a.messenger},r.a.createElement(T,{contactsList:u,currentChat:c,setCurrentChat:s,currentMessengerView:_,setCurrentMessengerView:d}),r.a.createElement(q,{currentChat:c,contactsList:u,setCurrentChat:s,setContactsList:m,currentMessengerView:_,setCurrentMessengerView:d}))},Z=function(){return r.a.createElement("div",null,"Welcome",r.a.createElement("br",null),"Please select a part to start")},K=a(39),$=a.n(K),ee=function(){return r.a.createElement("figure",{className:$.a.avatar},r.a.createElement("img",{src:J.profilePicture,alt:"Profile"}),r.a.createElement("figcaption",null,J.name))},te=a(10),ae=a.n(te),ne=function(e){var t=e.icon,a=e.path,n=e.name,c=e.isOpen,s=e.currentPage,o=e.setCurrentPage,l=e.setCurrentView;return r.a.createElement(i.b,{to:a,exact:!0,onClick:function(){o(n),l(n)},className:"".concat(ae.a.sideBarItem," ").concat(s===n&&(c?ae.a.isCurrentPage__opened:ae.a.isCurrentPage__closed),"\n        ").concat(c&&ae.a.isOpen,"\n        ")},c&&n,r.a.createElement("span",{className:"".concat(ae.a.icon,"\n        ").concat(c?ae.a.icon__opened:ae.a.icon__closed),style:{background:" url(./assets/icons/".concat(t).concat(s===n&&c?"-violet":"",".svg)")}}))},re=a(17),ce=a.n(re),se=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(o.a)(s,2),l=i[0],u=i[1];return Object(n.useEffect)((function(){switch(window.location.pathname){case"/settings":u("Settings");break;case"/calls":u("Calls");break;default:u("Home")}}),[]),r.a.createElement(f.Consumer,null,(function(e){var t=e.currentView,n=e.setCurrentView,s=e.homepage;return r.a.createElement("aside",{className:"".concat(ce.a.sideBar," ").concat(a&&ce.a.isOpen," ").concat("sideBar"===t?ce.a.isCurrentView:ce.a.isNotCurrentView)},r.a.createElement("button",{className:ce.a.toggleButton,onClick:function(){return c(!a)}},a?r.a.createElement(r.a.Fragment,null,"\xd7"):r.a.createElement(r.a.Fragment,null,"\u2630")),r.a.createElement(ee,null),r.a.createElement(ne,{path:s,icon:"house",name:"Home",isOpen:a,currentPage:l,setCurrentPage:u,setCurrentView:n}),r.a.createElement(ne,{path:s+"settings",icon:"settings",name:"Settings",isOpen:a,currentPage:l,setCurrentPage:u,setCurrentView:n}),r.a.createElement(ne,{path:s+"calls",icon:"phone-call",name:"Calls",isOpen:a,currentPage:l,setCurrentPage:u,setCurrentView:n}))}))},oe=function(){return r.a.createElement("div",null,"this is the channelOne")},ie=function(){return r.a.createElement("div",null,"this is the ChannelThree")},le=function(e){var t=Object(n.useState)(null),a=Object(o.a)(t,2),c=(a[0],a[1]);return Object(n.useEffect)((function(){j.collection("users").get().then((function(e){var t=[];e.forEach((function(e){t.push(e.data())})),console.log("tempDatabase",t),c(t)}))}),[]),console.log(e.match),r.a.createElement(f.Consumer,null,(function(e){var t=e.currentView,a=(e.setCurrentView,e.homepage);return r.a.createElement("main",{className:"".concat(m.a.dashboard," ").concat("Home"===t?m.a.isCurrentView:m.a.isNotCurrentView)},r.a.createElement(w,{homepage:a}),r.a.createElement(l.a,{path:a,exact:!0,component:Z}),r.a.createElement(l.a,{path:a+"messenger",exact:!0,component:X}),r.a.createElement(l.a,{path:a+"channel1",exact:!0,component:oe}),r.a.createElement(l.a,{path:a+"channel3",exact:!0,component:ie}))}))},ue=function(){return r.a.createElement("div",null,r.a.createElement(E,null),"settings goes here")},me=function(){return r.a.createElement("div",null,r.a.createElement(E,null)," CallScreen goes here")};a(57);var ge=function(){var e=Object(n.useState)("sideBar"),t=Object(o.a)(e,2),a=t[0],c=t[1],s="/dummyMessenger/";return r.a.createElement(f.Provider,{value:{currentView:a,setCurrentView:c,homepage:s}},r.a.createElement(i.a,null,r.a.createElement(se,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{path:s,exact:!0,component:le}),r.a.createElement(l.a,{path:s+"channel1",exact:!0,component:le}),r.a.createElement(l.a,{path:s+"messenger",exact:!0,component:le}),r.a.createElement(l.a,{path:s+"channel3",exact:!0,component:le}),r.a.createElement(l.a,{path:s+"settings",exact:!0,component:ue}),r.a.createElement(l.a,{path:s+"calls",exact:!0,component:me}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(ge,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,a){e.exports={typingArea:"ChatScreen_typingArea__3btVq",chatScreen:"ChatScreen_chatScreen__19WYi",messageScreen:"ChatScreen_messageScreen__1Yy7r",messageContainer:"ChatScreen_messageContainer__2D5Wm",close:"ChatScreen_close__VBO2r",isCurrentMessengerView:"ChatScreen_isCurrentMessengerView__1JQmj",isNotCurrentMessengerView:"ChatScreen_isNotCurrentMessengerView__kQieG"}}},[[41,1,2]]]);
//# sourceMappingURL=main.9d27484b.chunk.js.map