document.addEventListener("DOMContentLoaded",function(){function e(e,t,o){e&&e.classList[o?"add":"remove"](t)}function t(t,a){if(t in n&&(a||t!==r)&&(r.length||t!==n.video)){switch(t){case n.video:o.src={type:"video",title:"View From A Blue Moon",sources:[{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4",type:"video/mp4"}],poster:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg",tracks:[{kind:"captions",label:"English",srclang:"en",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt",default:!0},{kind:"captions",label:"French",srclang:"fr",src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt"}]};break;case n.audio:o.src={type:"audio",title:"Kishi Bashi &ndash; &ldquo;It All Began With A Burst&rdquo;",sources:[{src:"https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3",type:"audio/mp3"},{src:"https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg",type:"audio/ogg"}]};break;case n.youtube:o.src={type:"video",title:"View From A Blue Moon",sources:[{src:"https://www.youtube.com/watch?v=bTqVqk7FSmY",type:"youtube"}]};break;case n.vimeo:o.src={type:"video",title:"View From A Blue Moon",sources:[{src:"https://vimeo.com/76979871",type:"vimeo"}]}}r=t,Array.from(i).forEach(function(t){return e(t.parentElement,"active",!1)}),e(document.querySelector('[data-source="'+t+'"]'),"active",!0),Array.from(document.querySelectorAll(".plyr__cite")).forEach(function(e){e.setAttribute("hidden","")}),document.querySelector(".plyr__cite--"+t).removeAttribute("hidden")}}window.shr&&window.shr.setup({count:{classname:"button__count"}});document.addEventListener("focusout",function(e){e.target.classList.remove("tab-focus")}),document.addEventListener("keydown",function(e){9===e.keyCode&&window.setTimeout(function(){document.activeElement.classList.add("tab-focus")},0)});var o=new window.Plyr("#player",{debug:!0,title:"View From A Blue Moon",iconUrl:"../dist/plyr.svg",tooltips:{controls:!0},captions:{active:!0},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","fullscreen","pip","airplay"]});window.player=o;var i=document.querySelectorAll("[data-source]"),n={video:"video",audio:"audio",youtube:"youtube",vimeo:"vimeo"},r=window.location.hash.replace("#",""),a=window.history&&window.history.pushState;if(Array.from(i).forEach(function(e){e.addEventListener("click",function(){var o=e.getAttribute("data-source");t(o),a&&window.history.pushState({type:o},"","#"+o)})}),window.addEventListener("popstate",function(e){e.state&&"type"in e.state&&t(e.state.type)}),a){var s=!r.length;s&&(r=n.video),r in n&&window.history.replaceState({type:r},"",s?"":"#"+r),r!==n.video&&t(r,!0)}}),"plyr.io"===window.location.host&&(!function(e,t,o,i,n,r,a){e.GoogleAnalyticsObject=n,e.ga=e.ga||function(){(e.ga.q=e.ga.q||[]).push(arguments)},e.ga.l=1*new Date,r=t.createElement(o),a=t.getElementsByTagName(o)[0],r.async=1,r.src="//www.google-analytics.com/analytics.js",a.parentNode.insertBefore(r,a)}(window,document,"script",0,"ga"),window.ga("create","UA-40881672-11","auto"),window.ga("send","pageview"));

//# sourceMappingURL=demo.js.map
