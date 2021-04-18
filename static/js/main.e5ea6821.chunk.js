(this["webpackJsonplife-after-brainstation"]=this["webpackJsonplife-after-brainstation"]||[]).push([[0],{12:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},39:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var i=s(1),a=s.n(i),n=s(31),o=s.n(n),c=(s(37),s(38),s(8)),r=(s(39),s(0));var l=function(){return Object(r.jsxs)("section",{className:"main",children:[Object(r.jsx)("h2",{className:"main__heading2",children:" As the program is going to end soon, it's time to plan!!! "}),Object(r.jsx)("h2",{className:"main__heading3",children:" How are you going to reward yourselves???"}),Object(r.jsxs)("div",{className:"main__linkGroup",children:[Object(r.jsx)(c.b,{to:"./books",className:"link main__img main__img--1",children:Object(r.jsx)("p",{className:"main__imgTitle",children:"Books"})}),Object(r.jsx)(c.b,{to:"./movies",className:"link main__img main__img--2",children:Object(r.jsx)("p",{className:"main__imgTitle",children:"Movies"})})]})]})},h=s(21),d=s(13),m=s(14),j=s(16),b=s(15),g=s(10),u=s.n(g);s(12);var v=function(e){var t=e.movie;return Object(r.jsx)("section",{className:"flip-card",children:Object(r.jsxs)("div",{className:"flip-card-inner",children:[Object(r.jsx)("div",{className:"flip-card-front",children:Object(r.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(t.backdrop_path),alt:"movie poster",className:"section__poster"})}),Object(r.jsxs)("div",{className:"flip-card-back",children:[Object(r.jsx)("h3",{className:"flip-card-back__heading",children:t.title}),Object(r.jsxs)("p",{className:"flip-card-back__author rating",children:["Rating: ",t.vote_average]}),Object(r.jsx)("p",{className:"flip-card-back__desc",children:t.overview.length>200?t.overview.slice(0,100)+"...":t.overview})]})]})},t.id)},f="6796bd815ed27f8273d0ef3d6ddb25d3",p=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={genre:[],genreName:"",movieList:[],movieListByGenre:[],foundMovieListByGenre:!1},e.getGenreList=function(){u.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=".concat(f)).then((function(t){e.setState({genre:t.data.genres})})).catch((function(e){return console.log("")}))},e.getMovieList=function(){u.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(f,"&language=en-US&page=1")).then((function(t){var s=t.data.results;u.a.get("https://api.themoviedb.org/3/movie/popular?api_key=".concat(f,"&language=en-US&page=2")).then((function(t){var i=[].concat(Object(h.a)(s),Object(h.a)(t.data.results));e.setState({movieList:i});var a=e.state.movieList.filter((function(e){return e.genre_ids.includes(10751)}));e.setState({movieListByGenre:a,foundMovieListByGenre:!0,genreName:"Family"})}))})).catch((function(e){return console.log("Error in movie data",e)}))},e.handleMovieSearchByGenre=function(t,s){var i=e.state.movieList.filter((function(e){return e.genre_ids.includes(s)}));e.setState({movieListByGenre:i,foundMovieListByGenre:!0});var a=e.state.genre.find((function(e){return e.id===s}));e.setState({genreName:a.name}),window.scrollTo(0,0)},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getGenreList(),this.getMovieList()}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("section",{className:"section",children:[Object(r.jsx)("h2",{className:"section__heading2",children:"List of IMDB movie genres. Choose your favourite one!!"}),this.state.genreName?Object(r.jsxs)("h2",{className:"section__titleSecond",children:["Here are some suggestions on ",this.state.genreName," "]}):"",Object(r.jsxs)("div",{className:"wholeRegular",children:[this.state.genre?Object(r.jsx)("ul",{className:"list whole-left",children:this.state.genre.map((function(t){return Object(r.jsx)("li",{className:"item bookItem",onClick:function(s){return e.handleMovieSearchByGenre(s,t.id)},children:t.name},t.id)}))}):Object(r.jsx)("h2",{children:"Loading.."}),Object(r.jsx)("div",{className:"whole-right",children:this.state.foundMovieListByGenre?this.state.movieListByGenre.length>0?Object(r.jsx)("ul",{className:"section__list listByGenre",children:this.state.movieListByGenre.map((function(e){return Object(r.jsx)(v,{movie:e},e.id)}))}):Object(r.jsx)("h3",{className:"errorHeading",children:"Oops!!! No movie in this category. Try another one!!!"}):""})]})]})}}]),s}(a.a.Component);var O=function(e){var t=e.book;return Object(r.jsx)("section",{className:"flip-card",children:Object(r.jsxs)("div",{className:"flip-card-inner",children:[Object(r.jsx)("div",{className:"flip-card-front",children:Object(r.jsx)("img",{src:t.book_image,alt:"book poster",className:"section__poster"})}),Object(r.jsxs)("div",{className:"flip-card-back",children:[Object(r.jsx)("h3",{className:"flip-card-back__heading",children:t.title}),Object(r.jsx)("p",{className:"flip-card-back__author",children:t.author}),Object(r.jsx)("p",{className:"flip-card-back__desc",children:t.description})]})]})})},k="sPv0mm2GIlgqiP1x5OJppd3xUhHa2Otq",y=function(e){Object(j.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(d.a)(this,s);for(var i=arguments.length,a=new Array(i),n=0;n<i;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={bookCategoryList:[],bookByCategoryList:[],bookCategory:"Education",foundBookListByCategory:!1},e.getBookCatagory=function(){u.a.get("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=".concat(k)).then((function(t){var s=t.data.results.slice(27);e.setState({bookCategoryList:s})})).catch((function(e){return console.log("error",e)}))},e.getBookByCategory=function(t){u.a.get("https://api.nytimes.com/svc/books/v3/lists/current/".concat(t,".json?api-key=").concat(k)).then((function(t){e.setState({bookByCategoryList:t.data.results.books,bookCategory:t.data.results.list_name,foundBookListByCategory:!0})}))},e.handleBookSearchList=function(t,s){e.getBookByCategory(s),window.scrollTo(0,0)},e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getBookCatagory(),this.getBookByCategory("Education")}},{key:"render",value:function(){var e=this;return Object(r.jsxs)("section",{className:"section background--book",children:[Object(r.jsx)("h2",{className:"section__heading2",children:"Choose your favourite book from NY times Best sellers book category"}),this.state.bookCategory?Object(r.jsxs)("h2",{className:"section__titleSecond",children:["Here are some suggestions on ",this.state.bookCategory," "]}):"",Object(r.jsxs)("div",{className:this.state.foundBookListByCategory.length?"whole":"wholeRegular",children:[this.state.bookCategoryList?Object(r.jsx)("ul",{className:"list whole-left",children:this.state.bookCategoryList.map((function(t){return Object(r.jsx)("li",{className:"item bookItem",onClick:function(s){return e.handleBookSearchList(s,t.list_name_encoded)},children:t.list_name},t.list_name)}))}):Object(r.jsx)("h2",{children:"Loading.."}),Object(r.jsx)("div",{className:"whole-right",children:this.state.foundBookListByCategory?this.state.bookByCategoryList.length>0?Object(r.jsx)("ul",{className:"section__list listByGenre",children:this.state.bookByCategoryList.map((function(e){return Object(r.jsx)(O,{book:e},e.title)}))}):Object(r.jsx)("h3",{children:"Oops!!! No movie in this category. Try another one!!!"}):""})]})]})}}]),s}(a.a.Component),x=s(2);var _=function(){return Object(r.jsx)("div",{className:"page",children:Object(r.jsxs)(c.a,{basename:"/",children:[Object(r.jsx)("div",{className:"bg"}),Object(r.jsx)("div",{className:"bg bg2"}),Object(r.jsx)("div",{className:"bg bg3"}),Object(r.jsxs)("nav",{className:"nav",children:[Object(r.jsx)(c.b,{to:"/",className:"link nav__link",children:"Home"}),Object(r.jsx)(c.b,{to:"/books",className:"link nav__link ",children:"Books"}),Object(r.jsx)(c.b,{to:"/movies",className:"link nav__link",children:"Movies "})]}),Object(r.jsx)("h1",{className:"heading",children:" Life After BrainStation"}),Object(r.jsxs)(x.d,{children:[Object(r.jsx)(x.a,{from:"/home",to:"/"}),Object(r.jsx)(x.b,{path:"/",exact:!0,component:l}),Object(r.jsx)(x.b,{path:"/movies",component:p}),Object(r.jsx)(x.b,{path:"/books",component:y})]})]})})},N=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,65)).then((function(t){var s=t.getCLS,i=t.getFID,a=t.getFCP,n=t.getLCP,o=t.getTTFB;s(e),i(e),a(e),n(e),o(e)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(c.a,{children:Object(r.jsx)(_,{})})}),document.getElementById("root")),N()}},[[64,1,2]]]);
//# sourceMappingURL=main.e5ea6821.chunk.js.map