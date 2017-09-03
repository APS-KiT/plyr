"document"in self&&("classList"in document.createElement("_")?function(){"use strict";var e=document.createElement("_");if(e.classList.add("c1","c2"),!e.classList.contains("c2")){var t=function(e){var t=DOMTokenList.prototype[e];DOMTokenList.prototype[e]=function(e){var i,o=arguments.length;for(i=0;i<o;i++)e=arguments[i],t.call(this,e)}};t("add"),t("remove")}if(e.classList.toggle("c3",!1),e.classList.contains("c3")){var i=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(e,t){return 1 in arguments&&!this.contains(e)==!t?t:i.call(this,e)}}e=null}():function(e){"use strict";if("Element"in e){var t=e.Element.prototype,i=Object,o=String.prototype.trim||function(){return this.replace(/^\s+|\s+$/g,"")},n=Array.prototype.indexOf||function(e){for(var t=0,i=this.length;t<i;t++)if(t in this&&this[t]===e)return t;return-1},r=function(e,t){this.name=e,this.code=DOMException[e],this.message=t},s=function(e,t){if(""===t)throw new r("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(t))throw new r("INVALID_CHARACTER_ERR","String contains an invalid character");return n.call(e,t)},a=function(e){for(var t=o.call(e.getAttribute("class")||""),i=t?t.split(/\s+/):[],n=0,r=i.length;n<r;n++)this.push(i[n]);this._updateClassName=function(){e.setAttribute("class",this.toString())}},c=a.prototype=[],l=function(){return new a(this)};if(r.prototype=Error.prototype,c.item=function(e){return this[e]||null},c.contains=function(e){return e+="",-1!==s(this,e)},c.add=function(){var e,t=arguments,i=0,o=t.length,n=!1;do{e=t[i]+"",-1===s(this,e)&&(this.push(e),n=!0)}while(++i<o);n&&this._updateClassName()},c.remove=function(){var e,t,i=arguments,o=0,n=i.length,r=!1;do{for(e=i[o]+"",t=s(this,e);-1!==t;)this.splice(t,1),r=!0,t=s(this,e)}while(++o<n);r&&this._updateClassName()},c.toggle=function(e,t){e+="";var i=this.contains(e),o=i?!0!==t&&"remove":!1!==t&&"add";return o&&this[o](e),!0===t||!1===t?t:!i},c.toString=function(){return this.join(" ")},i.defineProperty){var u={get:l,enumerable:!0,configurable:!0};try{i.defineProperty(t,"classList",u)}catch(e){-2146823252===e.number&&(u.enumerable=!1,i.defineProperty(t,"classList",u))}}else i.prototype.__defineGetter__&&t.__defineGetter__("classList",l)}}(self)),window.loadSprite=function(e,t){function i(e,t){e.innerHTML=t,o.insertBefore(e,o.childNodes[0])}if("string"==typeof e){var o=document.body,n="string"==typeof t,r=function(){if(!n)return!1;try{return localStorage.setItem("___test","___test"),localStorage.removeItem("___test"),!0}catch(e){return!1}}();if(!n||0===document.querySelectorAll("#"+t).length){var s=document.createElement("div");if(s.setAttribute("hidden",""),n&&s.setAttribute("id",t),r){var a=localStorage.getItem("cache-"+t);if(null!==a){var c=JSON.parse(a);i(s,c.content)}}var l=new XMLHttpRequest;if(!("withCredentials"in l))return;l.open("GET",e,!0),l.onload=function(){r&&localStorage.setItem("cache-"+t,JSON.stringify({content:l.responseText})),i(s,l.responseText)},l.send()}}},function(){function e(e,t,i){if(e)if(e.classList)e.classList[i?"add":"remove"](t);else{var o=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=o+(i?" "+t:"")}}function t(t,s){if(t in n&&(s||t!==r)&&(r.length||t!==n.video)){switch(t){case n.video:i.source({type:"video",title:"View From A Blue Moon",sources:[{src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.mp4",type:"video/mp4"}],poster:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.jpg",tracks:[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.en.vtt",default:!0},{kind:"captions",label:"French",srclang:"fr",src:"https://cdn.selz.com/plyr/1.5/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"}]});break;case n.audio:i.source({type:"audio",title:"Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",sources:[{src:"https://cdn.selz.com/plyr/1.5/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",type:"audio/mp3"},{src:"https://cdn.selz.com/plyr/1.5/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",type:"audio/ogg"}]});break;case n.youtube:i.source({type:"video",title:"View From A Blue Moon",sources:[{src:"https://www.youtube.com/watch?v=bTqVqk7FSmY",type:"youtube"}]});break;case n.vimeo:i.source({type:"video",title:"View From A Blue Moon",sources:[{src:"https://vimeo.com/76979871",type:"vimeo"}]})}r=t;for(var a=o.length-1;a>=0;a--)e(o[a].parentElement,"active",!1);e(document.querySelector('[data-source="'+t+'"]').parentElement,"active",!0),[].forEach.call(document.querySelectorAll(".plyr__cite"),function(e){e.setAttribute("hidden","")}),document.querySelector(".plyr__cite--"+t).removeAttribute("hidden")}}var i=new Plyr("#player",{debug:!0,title:"View From A Blue Moon",iconUrl:"../dist/plyr.svg",tooltips:{controls:!0},captions:{defaultActive:!0},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen","pip","airplay"]});window.player=i,window.loadSprite("dist/demo.svg","demo-sprite");var o=document.querySelectorAll("[data-source]"),n={video:"video",audio:"audio",youtube:"youtube",vimeo:"vimeo"},r=window.location.hash.replace("#",""),s=window.history&&window.history.pushState;if([].forEach.call(o,function(e){e.addEventListener("click",function(){var e=this.getAttribute("data-source");t(e),s&&history.pushState({type:e},"","#"+e)})}),window.addEventListener("popstate",function(e){e.state&&"type"in e.state&&t(e.state.type)}),s){var a=!r.length;a&&(r=n.video),r in n&&history.replaceState({type:r},"",a?"":"#"+r),r!==n.video&&t(r,!0)}}(),"plyr.io"===window.location.host&&(!function(e,t,i,o,n,r,s){e.GoogleAnalyticsObject=n,e[n]=e[n]||function(){(e[n].q=e[n].q||[]).push(arguments)},e[n].l=1*new Date,r=t.createElement(i),s=t.getElementsByTagName(i)[0],r.async=1,r.src="//www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s)}(window,document,"script",0,"ga"),window.ga("create","UA-40881672-11","auto"),window.ga("send","pageview"));