(this.webpackJsonptracemovies=this.webpackJsonptracemovies||[]).push([[0],{156:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},166:function(e,t,a){},206:function(e,t,a){e.exports=a(380)},211:function(e,t,a){},243:function(e,t,a){},267:function(e,t,a){},380:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),l=(a(211),a(139)),i=a(36),s=a(20),m=a.n(s),u=a(37),d=a(13),v=a(115),p=a.n(v),f=p.a.create({baseURL:"https://api.themoviedb.org/3"}),E=(a(156),a(404)),h=a(392),b=r.a.createElement(E.a,{style:{fontSize:24},spin:!0}),g="https://images.tmdb.org/t/p/original/";var w=function(e){var t=e.title,a=e.fetchUrl,c=e.isLargeRow,o=e.dark,l=Object(n.useState)([]),i=Object(d.a)(l,2),s=i[0],v=i[1],p=Object(n.useState)(!0),E=Object(d.a)(p,2),w=E[0],y=E[1];return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(a);case 2:return t=e.sent,v(t.data.results),y(!1),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:o?"dark":"white"},t),r.a.createElement("div",{className:"row__posters"},w?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{indicator:b}))):s.map((function(e){return r.a.createElement(r.a.Fragment,null,null!==e.poster_path?r.a.createElement("img",{key:e.id,onClick:function(){return t=(null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.original_name),a=e.id,n=e.first_air_date,void(window.location.href=n?"/tracemovies/#/serie/"+t+"/"+a:"/tracemovies/#/movie/"+t+"/"+a);var t,a,n},className:"row__poster ".concat(c&&"row__posterLarge"),src:c?"".concat(g).concat(e.poster_path):"".concat(g).concat(null===e||void 0===e?void 0:e.backdrop_path),alt:e.name}):null)}))))},y="95fce0ee486a7e07be590380ef474a9f",_={fetchTrending:"/trending/all/week?api_key=".concat(y,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(y,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(y,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(y,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(y,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(y,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(y,"&with_genres=10749"),fetchDocumentaries:"/discover/movie?api_key=".concat(y,"&with_genres=99"),fetchUpcoming:"/movie/upcoming?api_key=".concat(y,"&language=en-US"),fetchLatest:"/movie/popular?api_key=".concat(y,"&languge=en-US&page=1")};a(158);var k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=t[1];function o(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e}return Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(_.fetchNetflixOriginals);case 2:return t=e.sent,c(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r.a.createElement("header",{className:"banner",style:{backgroundPosition:"center",backgroundSize:"cover",backgroundImage:'url(\n                   "https://images.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'"\n               )')}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},o((null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name),30)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner__button",onClick:function(){return e=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),t=a.id,n=a.first_air_date,void(window.location.href=n?"/tracemovies/#/serie/"+e+"/"+t:"/tracemovies/#/movie/"+e+"/"+t);var e,t,n}},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("h1",{className:"banner__description"},o(null===a||void 0===a?void 0:a.overview,150))),r.a.createElement("div",{className:"banner--fadeBottom"}))},O=a(119),j=a(120);a(243);var N=function(e){var t=e.dark;return r.a.createElement("div",{className:"footer"},r.a.createElement("p",{className:t?"dark":"white"},"Made with ",r.a.createElement(O.a,{icon:j.a,className:"loveIcon"})," by Paschal"))};a(159);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement(w,{isLargeRow:!0,title:"Trending Now",fetchUrl:_.fetchTrending}),r.a.createElement(w,{title:"NETFLIX ORIGINAL",isLargeRow:!0,fetchUrl:_.fetchNetflixOriginals}),r.a.createElement(w,{isLargeRow:!0,title:"Action Movies",fetchUrl:_.fetchActionMovies}),r.a.createElement(w,{title:"Comedy movies",fetchUrl:_.fetchComedyMovies}),r.a.createElement(w,{title:"Horror Movies",fetchUrl:_.fetchHorrorMovies}),r.a.createElement(w,{title:"Romance Movies",fetchUrl:_.fetchRomanceMovies}),r.a.createElement(w,{title:"Documentaries",fetchUrl:_.fetchDocumentaries}),r.a.createElement(w,{isLargeRow:!0,title:"Upcoming Movies",fetchUrl:_.fetchUpcoming}),r.a.createElement(w,{isLargeRow:!0,title:"Top Rated",fetchUrl:_.fetchTopRated}),r.a.createElement(N,null))},x=a(121),L=a(122),M=a.n(L),R=a(79),U=a(393),I=a(402),C=a(403);a(160);var z=function(e){var t=Object(n.useState)(""),a=Object(d.a)(t,2),c=a[0],o=(a[1],Object(n.useState)([])),l=Object(d.a)(o,2),i=l[0],s=(l[1],"95fce0ee486a7e07be590380ef474a9f"),m=e.match.params.movieId,u=e.match.params.movieName,v="/movie/".concat(m,"?api_key=").concat(s,"&language=en-US"),p="/movie/".concat(m,"/recommendations?api_key=").concat(s,"&language=en-US&page=1");function f(e,t){window.location.href=t?"/tracemovies/#/download/TV/"+e:"/tracemovies/#/files/movie/"+e+"%20720p"}Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY=0})),function(){window.removeEventListener("scroll")}}),[v,u]);var E=Math.floor(null===i||void 0===i?void 0:i.vote_average);return r.a.createElement("div",null,c?r.a.createElement(x.a,{videoId:c,opts:{height:"390",width:"100%",playerVars:{autoplay:!1}}}):r.a.createElement("div",{className:"banner",style:{backgroundSize:"cover",backgroundPosition:"center",height:"390px",width:"100%",backgroundImage:'url(\n                   "https://images.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'"\n               )')}}),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"".concat("https://images.tmdb.org/t/p/original/").concat(i.poster_path),alt:i.name,className:"movieImg",key:i.id}),r.a.createElement("div",{className:"movieDescription"},r.a.createElement("p",null,"Title: ",r.a.createElement("span",null,i.title)," "),r.a.createElement("p",null,"Release date: ",r.a.createElement("span",null,i.release_date)," "),r.a.createElement("p",null,"Duration:  ",r.a.createElement("span",null,i.runtime," mins ")," "),r.a.createElement("p",null,"Rating: ",i.vote_average," ",r.a.createElement(U.a,{name:"read-only",size:"large",max:10,value:E,readOnly:!0})),r.a.createElement("p",null,"Overview: ",r.a.createElement("span",null," ",i.overview)," "),r.a.createElement("div",null,r.a.createElement(R.a,{type:"primary",onClick:function(){return f((null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.original_name),i.first_air_date)},style:{margin:"5px"},icon:r.a.createElement(I.a,null),size:"large"},"Download"),r.a.createElement(R.a,{type:"primary",danger:!0,onClick:function(){return f((null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.original_name),i.first_air_date)},style:{margin:"2px"},icon:r.a.createElement(C.a,null),size:"large"},"Stream Online")))),r.a.createElement("br",null),r.a.createElement("div",{className:"recommended"},r.a.createElement(w,{isLargeRow:!0,dark:!0,title:"Recommended for you",fetchUrl:p})),r.a.createElement(N,{dark:!0}))},T=(a(166),a(267),a(399)),D=T.a.Search;var A=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(d.a)(o,2),i=l[0],s=l[1],m=Object(n.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],f=Object(n.useState)(""),E=Object(d.a)(f,2),h=E[0],b=E[1];return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?(c(!0),p(!0)):(c(!1),p(!1))})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:"nav ".concat(a&&"nav__black")},r.a.createElement("a",{href:"/tracemovies/#/"},r.a.createElement("h2",{className:"nav__logo"},"TraceMovies")),r.a.createElement("div",{className:"nav__avatar"},r.a.createElement(O.a,{onClick:function(){s(!i)},icon:j.b,className:"searchIcon ".concat(v&&"hideSearchIcon")}),r.a.createElement("a",{href:"/tracemovies/#/movies"},r.a.createElement("button",{className:"nav__btn"},"MOVIES")))),r.a.createElement("div",{className:" ".concat(i&&"show__search")},i?r.a.createElement("div",{className:"wrap"},r.a.createElement("div",{className:"search"},r.a.createElement(D,{placeholder:"input search text",enterButton:"Search",size:"large",onSearch:function(){return window.location.href="/tracemovies/#/search/"+h,void s(!1)},onChange:function(e){var t=e.target.value;b(t)}}))):null))},q=p.a.create({baseURL:"https://trace-backend.herokuapp.com"}),P=a(396),V=a(397),B=a(398),Y=a(395),F=r.a.createElement(E.a,{style:{fontSize:24},spin:!0}),H=V.a.Option,G=P.a.Title;var W=function(e){var t=Object(n.useState)([]),a=Object(d.a)(t,2),c=a[0],o=(a[1],e.match.params.query),l="/search/multi?query=".concat(o,"&api_key=").concat("95fce0ee486a7e07be590380ef474a9f","&language=en-US&page=1&include_adult=true"),i=Object(n.useState)(!1),s=Object(d.a)(i,2),v=s[0],p=(s[1],Object(n.useState)(!1)),f=Object(d.a)(p,2),E=f[0],b=f[1],g=Object(n.useState)(""),y=Object(d.a)(g,2),O=y[0],j=y[1],S=Object(n.useState)(""),x=Object(d.a)(S,2),L=x[0],M=x[1],U=Object(n.useState)(""),I=Object(d.a)(U,2),C=I[0],z=I[1],D=Object(n.useState)(""),A=Object(d.a)(D,2),P=(A[0],A[1]),W=Object(n.useState)(""),J=Object(d.a)(W,2),Z=J[0],X=J[1];function $(){return($=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==O){e.next=4;break}X("email cannot be blanck"),e.next=14;break;case 4:if(""!==L){e.next=8;break}X("movie name cannot be blanck"),e.next=14;break;case 8:return b(!1),e.next=11,q.post("/post/request",{email:O,name:L,type:C});case 11:t=e.sent,P(t),B.a.success({content:"Movie submited.. we will Email you once this movie has been added."});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY=0})),function(){window.removeEventListener("scroll")}}),[l]),r.a.createElement("div",{className:"App"},r.a.createElement(k,null),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},r.a.createElement(G,{style:{color:"white"},level:2},"Results for ",o," "),r.a.createElement("hr",null),v?0!==(null===c||void 0===c?void 0:c.length)?r.a.createElement(w,{dark:!0,isLargeRow:!0,fetchUrl:l}):r.a.createElement("h3",{style:{color:"white",marginTop:"20px",height:"15vh"}},"Sorry we couldn't find the movie ",o,". click on the button below to request for this movie . ",r.a.createElement(R.a,{onClick:function(){b(!0)},type:"primary"},"Request for Movies"),r.a.createElement(B.a,{title:"Movie Request",visible:E,onOk:function(){return $.apply(this,arguments)},onCancel:function(){b(!1)}},r.a.createElement(Y.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{size:"default"},size:"default"},""===Z?null:r.a.createElement("p",{style:{color:"red"}},Z),r.a.createElement(Y.a.Item,{label:"Your Email"},r.a.createElement(T.a,{onChange:function(e){var t=e.target.value;j(t)}})),r.a.createElement(Y.a.Item,{label:"Movie Name"},r.a.createElement(T.a,{onChange:function(e){var t=e.target.value;M(t)}})),r.a.createElement(Y.a.Item,{label:"Movie Type"},r.a.createElement(V.a,{defaultValue:"Movie",style:{width:"100%"},onChange:function(e){z(e)}},r.a.createElement(H,{value:"movie"},"Movie"),r.a.createElement(H,{value:"serie"},"series")))))):r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{indicator:F})))),r.a.createElement("div",{className:"recommended"},r.a.createElement(w,{isLargeRow:!0,title:"Recommended for you",fetchUrl:_.fetchActionMovies})),r.a.createElement(N,null))},J=a(144),Z=a(59);var X=function(e){var t=e.image,a=e.movie;return r.a.createElement(Z.a,{lg:6,md:8,xs:12},r.a.createElement("div",{style:{position:"relative"}},r.a.createElement("img",{onClick:function(){return e=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),t=a.id,n=a.first_air_date,void(window.location.href=n?"/tracemovies/#/serie/"+e+"/"+t:"/tracemovies/#/movie/"+e+"/"+t);var e,t,n},style:{width:"100%",height:"320px"},alt:t,src:t})))},$=a(98),K=P.a.Title,Q=r.a.createElement(E.a,{style:{fontSize:24},spin:!0});var ee=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),a=t[0],c=(t[1],Object(n.useState)([])),o=Object(d.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)(0),v=Object(d.a)(s,2),p=v[0],f=v[1],E=Object(n.useState)(!1),b=Object(d.a)(E,2),g=b[0],w=b[1];function y(e,t){return(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e}function _(e){return k.apply(this,arguments)}function k(){return(k=Object(u.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){i([].concat(Object(J.a)(l),Object(J.a)(e.results))),f(e.page)}));case 3:w(!1);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){"".concat("https://api.themoviedb.org/3","/movie/upcoming?api_key=").concat("95fce0ee486a7e07be590380ef474a9f","&language=en-US&page=1");return window.addEventListener("scroll",(function(){window.scrollY=0})),function(){window.removeEventListener("scroll")}}),[]),r.a.createElement("div",null,r.a.createElement("header",{className:"banner",style:{backgroundPosition:"center",backgroundSize:"cover",backgroundImage:'url(\n                    "https://images.tmdb.org/t/p/original/'.concat(null===a||void 0===a?void 0:a.backdrop_path,'"\n                )')}},r.a.createElement("div",{className:"banner__contents"},r.a.createElement("h1",{className:"banner__title"},y((null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.name)||(null===a||void 0===a?void 0:a.original_name),30)),r.a.createElement("div",{className:"banner_buttons"},r.a.createElement("button",{className:"banner__button",onClick:function(){return e=(null===a||void 0===a?void 0:a.title)||(null===a||void 0===a?void 0:a.original_name),t=a.id,n=a.first_air_date,void(window.location.href=n?"/tracemovies/#/serie/"+e+"/"+t:"/tracemovies/#/movie/"+e+"/"+t);var e,t,n}},"Play"),r.a.createElement("button",{className:"banner__button"},"My List")),r.a.createElement("h1",{className:"banner__description"},y(null===a||void 0===a?void 0:a.overview,150))),r.a.createElement("div",{className:"banner--fadeBottom"})),r.a.createElement("div",{style:{width:"85%",margin:"1rem auto"}},r.a.createElement(K,{level:2},"Movies by latest"),r.a.createElement("hr",null),r.a.createElement($.a,{gutter:[16,16]},null===l||void 0===l?void 0:l.map((function(e,t){return r.a.createElement(r.a.Fragment,{key:t},r.a.createElement(X,{movie:e,image:e.poster_path&&"".concat("https://images.tmdb.org/t/p/original/").concat(e.poster_path)}))})))),g?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{indicator:Q}))):null,r.a.createElement("br",null),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{onClick:function(){_("".concat("https://api.themoviedb.org/3","/movie/upcoming?api_key=").concat("95fce0ee486a7e07be590380ef474a9f","&language=en-US&page=").concat(p+1))}},"load more")),r.a.createElement(N,{dark:!0}))};var te=function(e){var t,a=Object(n.useState)(""),c=Object(d.a)(a,2),o=c[0],l=c[1],i=Object(n.useState)([]),s=Object(d.a)(i,2),v=s[0],p=s[1],E="95fce0ee486a7e07be590380ef474a9f",h=e.match.params.movieId,b=e.match.params.movieName,g="/tv/".concat(h,"?api_key=").concat(E,"&language=en-US"),y="/tv/".concat(h,"/recommendations?api_key=").concat(E,"&language=en-US&page=1");Object(n.useEffect)((function(){function e(){return(e=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.get(g);case 2:return t=e.sent,p(t.data),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(){return(t=Object(u.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M()(b||"").then((function(e){var t=new URLSearchParams(new URL(e).search);l(t.get("v"))})).catch((function(e){return console.log(b)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){t.apply(this,arguments)}()}),[g,b]);var _=Math.floor(v.vote_average);return r.a.createElement("div",null,o?r.a.createElement(x.a,{videoId:o,opts:{height:"390",width:"100%",playerVars:{autoplay:!1}}}):r.a.createElement("div",{className:"banner",style:{backgroundSize:"cover",backgroundPosition:"center",height:"390px",width:"100%",backgroundImage:'url(\n                   "https://images.tmdb.org/t/p/original/'.concat(null===v||void 0===v?void 0:v.backdrop_path,'"\n               )')}}),r.a.createElement("div",{className:"container"},r.a.createElement("img",{src:"".concat("https://images.tmdb.org/t/p/original/").concat(v.poster_path),alt:v.name,className:"movieImg",key:v.id}),r.a.createElement("div",{className:"movieDescription"},r.a.createElement("p",null,"Title: ",r.a.createElement("span",null,v.name)," "),r.a.createElement("p",null,"Release date: ",r.a.createElement("span",null,v.first_air_date)," "),r.a.createElement("p",null,"Number of seasons: ",r.a.createElement("span",null,v.number_of_seasons," ")," "),r.a.createElement("p",null,"Rating: ",v.vote_average,"  ",r.a.createElement(U.a,{name:"read-only",max:10,size:"large",value:_,readOnly:!0})),r.a.createElement("p",null,"Overview: ",r.a.createElement("span",null," ",v.overview)," "),r.a.createElement("div",null,null===(t=v.seasons)||void 0===t?void 0:t.map((function(e){return r.a.createElement(R.a,{type:"primary",onClick:function(){return function(e,t,a){t?a&&!1===isNaN(a)?window.location.href="/tracemovies/#/files/TV/"+e+"%20S0".concat(a):window.location.href="/tracemovies/#/files/TV/"+e:window.location.href="/tracemovies/#/download/movie/"+e}(null===v||void 0===v?void 0:v.name,null===v||void 0===v?void 0:v.first_air_date,e.name.charAt(7))},style:{margin:"5px"},icon:r.a.createElement(I.a,null),size:"large"},"Download ",e.name)}))),r.a.createElement("br",null))),r.a.createElement("br",null),r.a.createElement("div",{className:"recommended"},r.a.createElement(w,{isLargeRow:!0,dark:!0,title:"Recommended for you",fetchUrl:y})),r.a.createElement(N,{dark:!0}))},ae=a(394),ne=a(400),re=V.a.Option,ce=r.a.createElement(E.a,{style:{fontSize:24},spin:!0});var oe=function(e){var t=e.match.params.movieType,a=e.match.params.movieName,c=Object(n.useState)([]),o=Object(d.a)(c,2),l=o[0],i=(o[1],Object(n.useState)(!0)),s=Object(d.a)(i,2),v=s[0],p=(s[1],Object(n.useState)(!1)),f=Object(d.a)(p,2),E=f[0],b=f[1],g=Object(n.useState)(""),w=Object(d.a)(g,2),y=w[0],_=w[1],k=Object(n.useState)(""),O=Object(d.a)(k,2),j=O[0],N=O[1],S=Object(n.useState)(""),x=Object(d.a)(S,2),L=x[0],M=x[1],U=Object(n.useState)(""),C=Object(d.a)(U,2),z=(C[0],C[1]),D=Object(n.useState)(""),A=Object(d.a)(D,2),P=A[0],F=A[1];function H(){return(H=Object(u.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==y){e.next=4;break}F("email cannot be blanck"),e.next=14;break;case 4:if(""!==j){e.next=8;break}F("movie name cannot be blanck"),e.next=14;break;case 8:return e.next=10,q.post("/post/request",{name:j,email:y,type:L});case 10:t=e.sent,b(!1),z(t),B.a.success({content:"Movie submited.. we will Email you once this movie has been added."});case 14:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY=0})),function(){window.removeEventListener("scroll")}}),[a,t]),r.a.createElement("div",{style:{marginTop:"70px",padding:"5px"}},v?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{indicator:ce}))):0!==(null===l||void 0===l?void 0:l.length)?null===l||void 0===l?void 0:l.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{style:{width:"100%",marginBottom:"5px"}},r.a.createElement("p",null,"FILE NAME: ",e.title," "),r.a.createElement("p",null,"SIZE: ",e.size," "),r.a.createElement("p",null,"UPLOADER: ",e.uploader,"  "),r.a.createElement("p",null,"LEECH: ",e.leech," "),r.a.createElement("p",null,"SEEDERS: ",e.seed," "),r.a.createElement(R.a,{onClick:function(){return t=e.href,void(window.location.href="/tracemovies/#/download"+t);var t},type:"primary",danger:!0,icon:r.a.createElement(I.a,null),size:"large"},"Download this file")))})):r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{status:"404",title:"404",subTitle:"file not found, this movie is not out yet or doesn't exit anymore. you can click on the button below to report a broken link and request for this movie to be uploaded. thanks.",extra:r.a.createElement(R.a,{onClick:function(){b(!0)},type:"primary"},"Request for Movies")}),r.a.createElement(B.a,{title:"Movie Request",visible:E,onOk:function(){return H.apply(this,arguments)},onCancel:function(){b(!1)}},r.a.createElement(Y.a,{labelCol:{span:4},wrapperCol:{span:14},layout:"horizontal",initialValues:{size:"default"},size:"default"},""===P?null:r.a.createElement("p",{style:{color:"red"}},P),r.a.createElement(Y.a.Item,{label:"Your Email"},r.a.createElement(T.a,{onChange:function(e){var t=e.target.value;_(t)}})),r.a.createElement(Y.a.Item,{label:"Movie Name"},r.a.createElement(T.a,{onChange:function(e){var t=e.target.value;N(t)}})),r.a.createElement(Y.a.Item,{label:"Movie Type"},r.a.createElement(V.a,{defaultValue:"Movie",style:{width:"100%"},onChange:function(e){M(e)}},r.a.createElement(re,{value:"movie"},"Movie"),r.a.createElement(re,{value:"serie"},"series")))))))},le=a(401),ie=r.a.createElement(E.a,{style:{fontSize:24},spin:!0});var se=function(e){var t=e.match.params.torrent,a=e.match.params.movieID,c=e.match.params.movieName,o=Object(n.useState)([]),l=Object(d.a)(o,2),i=l[0],s=(l[1],Object(n.useState)(!0)),m=Object(d.a)(s,2),u=m[0];return m[1],Object(n.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY=0})),function(){window.removeEventListener("scroll")}}),[a,t,c]),r.a.createElement("div",{style:{marginTop:"70px",marginBottom:"5px",padding:"5px"}},r.a.createElement(le.a,{message:"Instructions",description:"if the download doesn't start after you clicked the button below then make sure you have UTorrent installed in your device before clicking on the download button. this movie will start downloading through utorrrent once u click on the download button below... Enjoy",type:"info",showIcon:!0,closable:!0}),r.a.createElement("br",null),u?r.a.createElement("div",{className:"spinnerdiv"},r.a.createElement("div",{className:"spinner"},r.a.createElement(h.a,{indicator:ie}))):r.a.createElement(ae.a,{style:{width:"100%",marginBottom:"5px"}},r.a.createElement("p",null,"FILE NAME: ",i.title," "),r.a.createElement("p",null,"SIZE: ",i.size," "),r.a.createElement("p",null,"UPLOADER: ",i.uploaded,"  "),r.a.createElement("p",null,"LEECH: ",i.leechers," "),r.a.createElement("p",null,"SEEDERS: ",i.seeders," "),r.a.createElement("p",null,"LANGUAGE: ",i.language," "),r.a.createElement("p",null,"DOWNLOADS: ",i.downloads," "),r.a.createElement("a",{href:i.download.magnet},r.a.createElement(R.a,{type:"primary",danger:!0,icon:r.a.createElement(I.a,null),size:"large"},"click here to start Downloading"))),r.a.createElement("br",null),r.a.createElement(w,{dark:!0,isLargeRow:!0,title:"you may also like",fetchUrl:_.fetchComedyMovies}))};var me=function(){return r.a.createElement(l.a,null,r.a.createElement(A,null),r.a.createElement(i.a,{exact:!0,path:"/",component:S}),r.a.createElement(i.a,{path:"/movie/:movieName/:movieId",component:z}),r.a.createElement(i.a,{path:"/search/:query",component:W}),r.a.createElement(i.a,{path:"/movies",component:ee}),r.a.createElement(i.a,{path:"/serie/:movieName/:movieId",component:te}),r.a.createElement(i.a,{path:"/files/:movieType/:movieName",component:oe}),r.a.createElement(i.a,{path:"/download/:torrent/:movieID/:movieName",component:se}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[206,1,2]]]);
//# sourceMappingURL=main.e73ce0a5.chunk.js.map