(this.webpackJsonptracemovies=this.webpackJsonptracemovies||[]).push([[0],{125:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},137:function(e,t,a){},165:function(e,t,a){e.exports=a(271)},170:function(e,t,a){},205:function(e,t,a){},229:function(e,t,a){},271:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(14),o=a.n(c),i=(a(170),a(108)),l=a(31),s=a(17),m=a.n(s),u=a(35),d=a(15),v=a(86),p=a.n(v),f=p.a.create({baseURL:"https://api.themoviedb.org/3"}),h=(a(125),a(289)),E=a(283),g=r.a.createElement(h.a,{style:{fontSize:24},spin:!0}),b="https://images.tmdb.org/t/p/original/";var w=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,o=e.dark,i=Object(n.useState)([]),l=Object(d.a)(i,2),s=l[0],v=l[1],p=Object(n.useState)(!0),h=Object(d.a)(p,2),w=h[0],y=h[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(a);case 2:return t=e.sent,v(t.data.results),y(!1),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:o?"dark":"white"},t),r.a.createElement("div",{className:"row__posters"},w?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(E.a,{indicator:g}))):s.map((function(e){return r.a.createElement(r.a.Fragment,null,null!==e.poster_path?r.a.createElement("img",{key:e.id,onClick:function(){return t=(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name),a=e.id,n=e.first_air_date,void(window.location.href=n?"/serie/"+t+"/"+a:"/movie/"+t+"/"+a);var t,a,n},className:"row__poster ".concat(c&&"row__posterLarge"),src:c?"".concat(b).concat(e.poster_path):"".concat(b).concat(null===e||void 0===e?void 0:e.backdrop_path),alt:e.name}):null)}))))},y="95fce0ee486a7e07be590380ef474a9f",_={fetchTrending:"/trending/all/week?api_key=".concat(y,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(y,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(y,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(y,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(y,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(y,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(y,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(y,"&with_genres=99"),fetchUpcoming:"/movie/upcoming?api_key=".concat(y,"&language=en-US"),fetchLatest:"/movie/popular?api_key=".concat(y,"&languge=en-US&page=1")};a(129);var k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];function o(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e}return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(_.fetchNetflixOriginals);case 2:return t=e.sent,c(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("header",{className:"banner",style:{backgroundPosition:"center",backgroundSize:"cover",backgroundImage:'url(\n                   "https://images.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'"\n               )')}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},o((null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name),30)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner__button",onClick:function(){return e=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),t=a.id,n=a.first_air_date,void(window.location.href=n?"/serie/"+e+"/"+t:"/movie/"+e+"/"+t);var e,t,n}},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("h1",{className:"banner__description"},o(null===a||void 0===a?void 0:a.overview,150))),r.a.createElement("div",{className:"banner--fadeBottom"}))},O=a(89),N=a(90);a(205);var j=function(e){var t=e.dark;return r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:t?"dark":"white"},"Made with ",r.a.createElement(O.a,{icon:N.a,className:"loveIcon"})," by Paschal"))};a(130);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(w,{isLargeRow:!0,title:"Trending Now",fetchUrl:_.fetchTrending}),r.a.createElement(w,{title:"NETFLIX ORIGINAL",isLargeRow:!0,fetchUrl:_.fetchNetflixOriginals}),r.a.createElement(w,{isLargeRow:!0,title:"Action Movies",fetchUrl:_.fetchActionMovies}),r.a.createElement(w,{title:"Comedy movies",fetchUrl:_.fetchComedyMovies}),r.a.createElement(w,{title:"Horror Movies",fetchUrl:_.fetchHorrorMovies}),r.a.createElement(w,{title:"Romance Movies",fetchUrl:_.fetchRomanceMovies}),r.a.createElement(w,{title:"Documentaries",fetchUrl:_.fetchDocumentaries}),r.a.createElement(w,{isLargeRow:!0,title:"Upcoming Movies",fetchUrl:_.fetchUpcoming}),r.a.createElement(w,{isLargeRow:!0,title:"Top Rated",fetchUrl:_.fetchTopRated}),r.a.createElement(j,null))},x=a(91),U=a(92),R=a.n(U),L=a(157),M=a(284),I=a(291),T=a(290);a(131);var z=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)([]),l=Object(d.a)(i,2),s=l[0],v=l[1],p="95fce0ee486a7e07be590380ef474a9f",h=e.match.params.movieId,E=e.match.params.movieName,g="/movie/".concat(h,"?api_key=").concat(p,"&language=en-US"),b="/movie/".concat(h,"/recommendations?api_key=").concat(p,"&language=en-US&page=1");function y(e,t){window.location.href=t?"/download/TV/"+e:"/files/movie/"+e+"%20720p"}Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(g);case 2:return t=e.sent,v(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(E||"").then((function(e){var t=new URLSearchParams(new URL(e).search);o(t.get("v"))})).catch((function(e){return console.log(E)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[g,E]);var _=Math.floor(null===s||void 0===s?void 0:s.vote_average);return r.a.createElement("div",null,c?r.a.createElement(x.a,{videoId:c,opts:{height:"390",width:"100%",playerVars:{autoplay:!1}}}):r.a.createElement("div",{className:"banner",style:{backgroundSize:"cover",backgroundPosition:"center",height:"390px",width:"100%",backgroundImage:'url(\n                   "https://images.tmdb.org/t/p/original/'.concat(null===s||void 0===s?void 0:s.backdrop_path,'"\n               )')}}),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"".concat("https://images.tmdb.org/t/p/original/").concat(s.poster_path),alt:s.name,className:"movieImg",key:s.id}),r.a.createElement("div",{className:"movieDescription"},r.a.createElement("p",null,"Title: ",r.a.createElement("span",null,s.title)," "),r.a.createElement("p",null,"Release date: ",r.a.createElement("span",null,s.release_date)," "),r.a.createElement("p",null,"Duration:  ",r.a.createElement("span",null,s.runtime," mins ")," "),r.a.createElement("p",null,"Rating: ",s.vote_average," ",r.a.createElement(M.a,{name:"read-only",size:"large",max:10,value:_,readOnly:!0})),r.a.createElement("p",null,"Overview: ",r.a.createElement("span",null," ",s.overview)," "),r.a.createElement("div",null,r.a.createElement(L.a,{type:"primary",onClick:function(){return y((null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.original_name),s.first_air_date)},style:{margin:"5px"},icon:r.a.createElement(I.a,null),size:"large"},"Download"),r.a.createElement(L.a,{type:"primary",danger:!0,onClick:function(){return y((null===s||void 0===s?void 0:s.title)||(null===s||void 0===s?void 0:s.original_name),s.first_air_date)},style:{margin:"2px"},icon:r.a.createElement(T.a,null),size:"large"},"Stream Online")))),r.a.createElement("br",null),r.a.createElement("div",{className:"recommended"},r.a.createElement(w,{isLargeRow:!0,dark:!0,title:"Recommended for you",fetchUrl:b})),r.a.createElement(j,{dark:!0}))},C=(a(229),a(287).a.Search);var D=Object(l.e)((function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"search"},r.a.createElement(C,{placeholder:"input search text",enterButton:"Search",size:"large",onSearch:function(){window.location.href="/search/"+a},onChange:function(e){var t=e.target.value;c(t)}})))}));a(137);var A=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(d.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?(c(!0),p(!0)):(c(!1),p(!1))})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},r.a.createElement("a",{href:"/"},r.a.createElement("h2",{className:"nav__logo"},"TraceMovies")),r.a.createElement("div",{className:"nav__avatar"},r.a.createElement(O.a,{onClick:function(){s(!l)},icon:N.b,className:"searchIcon ".concat(v&&"hideSearchIcon")}),r.a.createElement("a",{href:"/movies"},r.a.createElement("button",{className:"nav__btn"},"MOVIES")))),r.a.createElement("div",{className:" ".concat(l&&"show__search")},l?r.a.createElement(D,null):null))},P=a(51);var B=function(e){var t=e.image,a=e.movie;return r.a.createElement(P.a,{lg:6,md:8,xs:12},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("img",{onClick:function(){return e=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),t=a.id,n=a.first_air_date,void(window.location.href=n?"/serie/"+e+"/"+t:"/movie/"+e+"/"+t);var e,t,n},style:{width:"100%",height:"320px"},alt:t,src:t})))},F=a(286),H=r.a.createElement(h.a,{style:{fontSize:24},spin:!0}),V=F.a.Title;var q=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],o=a[1],i=e.match.params.query,l="/search/movie?query=".concat(i,"&api_key=").concat("95fce0ee486a7e07be590380ef474a9f"),s=Object(n.useState)(!1),v=Object(d.a)(s,2),p=v[0],h=v[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(l);case 2:return t=e.sent,o(t.data.results),h(!0),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[l]),r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},r.a.createElement(V,{style:{color:"white"},level:2},"Results for ",i," "),r.a.createElement("hr",null),p?0!==(null===c||void 0===c?void 0:c.length)?r.a.createElement(w,{dark:!0,isLargeRow:!0,fetchUrl:l}):r.a.createElement("h3",{style:{color:"white",marginTop:"20px",height:"15vh"}},"Sorry we couldn't find the movie ",i," ."):r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(E.a,{indicator:H})))),r.a.createElement("div",{className:"recommended"},r.a.createElement(w,{isLargeRow:!0,title:"Recommended for you",fetchUrl:_.fetchActionMovies})),r.a.createElement(j,null))},G=a(114),W=a(76),J=F.a.Title,Z=r.a.createElement(h.a,{style:{fontSize:24},spin:!0});var X=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),i=Object(d.a)(o,2),l=i[0],s=i[1],v=Object(n.useState)(0),p=Object(d.a)(v,2),h=p[0],g=p[1],b=Object(n.useState)(!1),w=Object(d.a)(b,2),y=w[0],k=w[1];function O(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e}function N(e){return S.apply(this,arguments)}function S(){return(S=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){s([].concat(Object(G.a)(l),Object(G.a)(e.results))),g(e.page)}));case 3:k(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e="".concat("https://api.themoviedb.org/3","/movie/upcoming?api_key=").concat("95fce0ee486a7e07be590380ef474a9f","&language=en-US&page=1");function t(){return(t=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(_.fetchUpcoming);case 2:return t=e.sent,c(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}(),N(e)}),[]),r.a.createElement("div",null,r.a.createElement("header",{className:"banner",style:{backgroundPosition:"center",backgroundSize:"cover",backgroundImage:'url(\n                    "https://images.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'"\n                )')}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},O((null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name),30)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner__button",onClick:function(){return e=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),t=a.id,n=a.first_air_date,void(window.location.href=n?"/serie/"+e+"/"+t:"/movie/"+e+"/"+t);var e,t,n}},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("h1",{className:"banner__description"},O(null===a||void 0===a?void 0:a.overview,150))),r.a.createElement("div",{className:"banner--fadeBottom"})),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},r.a.createElement(J,{level:2},"Movies by latest"),r.a.createElement("hr",null),r.a.createElement(W.a,{gutter:[16,16]},null===l||void 0===l?void 0:l.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(B,{movie:e,image:e.poster_path&&"".concat("https://images.tmdb.org/t/p/original/").concat(e.poster_path)}))})))),y?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(E.a,{indicator:Z}))):null,r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{onClick:function(){N("".concat("https://api.themoviedb.org/3","/movie/upcoming?api_key=").concat("95fce0ee486a7e07be590380ef474a9f","&language=en-US&page=").concat(h+1))}},"load more")),r.a.createElement(j,{dark:!0}))};var Y=function(e){var t,a=Object(n.useState)(""),c=Object(d.a)(a,2),o=c[0],i=c[1],l=Object(n.useState)([]),s=Object(d.a)(l,2),v=s[0],p=s[1],h="95fce0ee486a7e07be590380ef474a9f",E=e.match.params.movieId,g=e.match.params.movieName,b="/tv/".concat(E,"?api_key=").concat(h,"&language=en-US"),y="/tv/".concat(E,"/recommendations?api_key=").concat(h,"&language=en-US&page=1");Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(b);case 2:return t=e.sent,p(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R()(g||"").then((function(e){var t=new URLSearchParams(new URL(e).search);i(t.get("v"))})).catch((function(e){return console.log(g)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[b,g]);var _=Math.floor(v.vote_average);return r.a.createElement("div",null,o?r.a.createElement(x.a,{videoId:o,opts:{height:"390",width:"100%",playerVars:{autoplay:!1}}}):r.a.createElement("div",{className:"banner",style:{backgroundSize:"cover",backgroundPosition:"center",height:"390px",width:"100%",backgroundImage:'url(\n                   "https://images.tmdb.org/t/p/original/'.concat(null===v||void 0===v?void 0:v.backdrop_path,'"\n               )')}}),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"".concat("https://images.tmdb.org/t/p/original/").concat(v.poster_path),alt:v.name,className:"movieImg",key:v.id}),r.a.createElement("div",{className:"movieDescription"},r.a.createElement("p",null,"Title: ",r.a.createElement("span",null,v.name)," "),r.a.createElement("p",null,"Release date: ",r.a.createElement("span",null,v.first_air_date)," "),r.a.createElement("p",null,"Number of seasons: ",r.a.createElement("span",null,v.number_of_seasons," ")," "),r.a.createElement("p",null,"Rating: ",v.vote_average,"  ",r.a.createElement(M.a,{name:"read-only",max:10,size:"large",value:_,readOnly:!0})),r.a.createElement("p",null,"Overview: ",r.a.createElement("span",null," ",v.overview)," "),r.a.createElement("div",null,null===(t=v.seasons)||void 0===t?void 0:t.map((function(e){return r.a.createElement(L.a,{type:"primary",onClick:function(){return function(e,t,a){window.location.href=t?"/files/TV/"+e+"%20S0".concat(a):"/download/movie/"+e}(null===v||void 0===v?void 0:v.name,null===v||void 0===v?void 0:v.first_air_date,e.name.charAt(7))},style:{margin:"5px"},icon:r.a.createElement(I.a,null),size:"large"},"Download ",e.name)}))),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("div",{className:"recommended"},r.a.createElement(w,{isLargeRow:!0,dark:!0,title:"Recommended for you",fetchUrl:y})),r.a.createElement(j,{dark:!0}))},$=p.a.create({baseURL:"https://trace-backend.herokuapp.com/"}),K=a(285),Q=r.a.createElement(h.a,{style:{fontSize:24},spin:!0});var ee=function(e){var t=e.match.params.movieType,a=e.match.params.movieName,c=Object(n.useState)([]),o=Object(d.a)(c,2),i=o[0],l=o[1],s=Object(n.useState)(!0),v=Object(d.a)(s,2),p=v[0],f=v[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("/movie",{params:{name:a,type:t}});case 2:n=e.sent,l(n.data.torrents),console.log(n.data),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a,t]),r.a.createElement("div",{style:{marginTop:"70px",padding:"5px"}},p?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(E.a,{indicator:Q}))):null===i||void 0===i?void 0:i.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(K.a,{style:{width:"100%",marginBottom:"5px"}},r.a.createElement("p",null,"FILE NAME: ",e.title," "),r.a.createElement("p",null,"SIZE: ",e.size," "),r.a.createElement("p",null,"UPLOADER: ",e.uploader,"  "),r.a.createElement("p",null,"LEECH: ",e.leech," "),r.a.createElement("p",null,"SEEDERS: ",e.seed," "),r.a.createElement(L.a,{onClick:function(){return t=e.href,void(window.location.href="/download"+t);var t},type:"primary",danger:!0,icon:r.a.createElement(I.a,null),size:"large"},"Download this file")))})))},te=a(288),ae=r.a.createElement(h.a,{style:{fontSize:24},spin:!0});var ne=function(e){var t=e.match.params.torrent,a=e.match.params.movieID,c=e.match.params.movieName,o=Object(n.useState)([]),i=Object(d.a)(o,2),l=i[0],s=i[1],v=Object(n.useState)(!0),p=Object(d.a)(v,2),f=p[0],h=p[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$.get("/download",{params:{torrent:t,movieId:a,movieName:c}});case 2:n=e.sent,s(n.data),console.log(n.data),h(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),console.log(t),console.log(c),console.log(a)}),[a,t,c]),r.a.createElement("div",{style:{marginTop:"70px",marginBottom:"5px",padding:"5px"}},r.a.createElement(te.a,{message:"Instructions",description:"make sure you have UTorrent installed in your device before clicking on the download button. this movie will start downloading through utorrrent once u click on the download button below... Enjoy",type:"info",showIcon:!0,closable:!0}),r.a.createElement("br",null),f?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(E.a,{indicator:ae}))):r.a.createElement(K.a,{style:{width:"100%",marginBottom:"5px"}},r.a.createElement("p",null,"FILE NAME: ",l.title," "),r.a.createElement("p",null,"SIZE: ",l.size," "),r.a.createElement("p",null,"UPLOADER: ",l.uploaded,"  "),r.a.createElement("p",null,"LEECH: ",l.leechers," "),r.a.createElement("p",null,"SEEDERS: ",l.seeders," "),r.a.createElement("p",null,"LANGUAGE: ",l.language," "),r.a.createElement("p",null,"DOWNLOADS: ",l.downloads," "),r.a.createElement("a",{href:l.download.magnet},r.a.createElement(L.a,{type:"primary",danger:!0,icon:r.a.createElement(I.a,null),size:"large"},"click here to start Downloading"))),r.a.createElement("br",null),r.a.createElement(w,{dark:!0,isLargeRow:!0,title:"you may also like",fetchUrl:_.fetchComedyMovies}))};var re=function(){return r.a.createElement(i.a,null,r.a.createElement(A,null),r.a.createElement(l.a,{exact:!0,path:"/",component:S}),r.a.createElement(l.a,{exact:!0,path:"/movie/:movieName/:movieId",component:z}),r.a.createElement(l.a,{exact:!0,path:"/search/:query",component:q}),r.a.createElement(l.a,{exact:!0,path:"/Movies",component:X}),r.a.createElement(l.a,{exact:!0,path:"/serie/:movieName/:movieId",component:Y}),r.a.createElement(l.a,{exact:!0,path:"/files/:movieType/:movieName",component:ee}),r.a.createElement(l.a,{exact:!0,path:"/download/:torrent/:movieID/:movieName",component:ne}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[165,1,2]]]);
//# sourceMappingURL=main.a612354c.chunk.js.map