(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[746],{746:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var l=n(439),a=n(791),r=n(87),o=n(689),c="Movies_Movies__C7hQW",i=n(494),u=n.n(i),s=n(148),h=n(184),f=function(){var e=(0,a.useState)([]),t=(0,l.Z)(e,2),n=t[0],i=t[1],f=(0,a.useState)(!1),p=(0,l.Z)(f,2),m=p[0],d=p[1],v=(0,r.lr)(),x=(0,l.Z)(v,2),j=x[0],g=x[1],_=(0,o.TH)(),b=j.get("name");return(0,a.useEffect)((function(){null!==b&&(d(!0),(0,s.on)(b).then((function(e){i(e.results)})).catch((function(e){console.error(e)})).finally((function(){d(!1)})))}),[b]),(0,h.jsxs)("div",{className:c,children:[(0,h.jsx)("input",{type:"text",placeholder:"search films",onChange:u()((function(e){g({name:e.target.value})}),1e3)}),m?(0,h.jsx)("p",{children:"Loading..."}):0===n.length?(0,h.jsx)("p",{children:"No films available."}):(0,h.jsx)("ul",{children:n.map((function(e){return(0,h.jsx)("li",{children:(0,h.jsxs)(r.rU,{to:"/movies/".concat(e.id),state:{from:_},children:[(0,h.jsx)("h3",{children:e.title}),e.poster_path?(0,h.jsx)("img",{src:"".concat("https://image.tmdb.org/t/p/w200/").concat(e.poster_path),alt:"Cast Member"}):(0,h.jsx)("span",{children:"Image not available"})]})},e.id)}))})]})}},494:function(e){function t(e,t,n){var l,a,r,o,c;function i(){var u=Date.now()-o;u<t&&u>=0?l=setTimeout(i,t-u):(l=null,n||(c=e.apply(r,a),r=a=null))}null==t&&(t=100);var u=function(){r=this,a=arguments,o=Date.now();var u=n&&!l;return l||(l=setTimeout(i,t)),u&&(c=e.apply(r,a),r=a=null),c};return u.clear=function(){l&&(clearTimeout(l),l=null)},u.flush=function(){l&&(c=e.apply(r,a),r=a=null,clearTimeout(l),l=null)},u}t.debounce=t,e.exports=t}}]);
//# sourceMappingURL=746.4bf3e770.chunk.js.map