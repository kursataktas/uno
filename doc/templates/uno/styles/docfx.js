<<<<<<< HEAD
const active="active",expanded="in",filtered="filtered",show="show",hide="hide",collapsed="collapsed";function renderAffix(){var e,t=function(){const e=$($.map(["h1","h2","h3","h4"],function(e){return".article article "+e}).join(", ")),i=[];e.each(function(e,t){if(t.id){var n={name:(n=$(t).text())&&n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),href:"#"+t.id,items:[]};if(i.length){var r=i[i.length-1];if(t.tagName===r.type)r.siblings.push(n);else if(t.tagName[1]>r.type[1])i.push({type:t.tagName,siblings:[n]});else{for(;t.tagName[1]<i[i.length-1].type[1];)a();t.tagName===i[i.length-1].type?i[i.length-1].siblings.push(n):i.push({type:t.tagName,siblings:[n]})}}else i.push({type:t.tagName,siblings:[n]})}});for(;1<i.length;)a();function a(){var e=i.pop(),t=i[i.length-1];const n=t.siblings[t.siblings.length-1];$.each(e.siblings,function(e,t){n.items.push(t)})}{var t;if(0<i.length)return 1===(t=i.pop().siblings).length?t[0].items:t}return}();t&&0<t.length&&(e='<h5 class="title">In This Article</h5>',e+=formList(t,["nav","bs-docs-sidenav"]),$("#affix").empty().append(e),$("footer").is(":visible")&&$(".sideaffix").css("bottom","70px"),$("#affix a").on("click",function(e){var t=$('[data-spy="scroll"]').data()["bs.scrollspy"],e=e.target.hash;t&&e&&t.activate(e)}),e=(t=$(".contribution")).get(0).outerHTML,t.remove(),$(".sideaffix").append(e))}function setAlertHeight(){var e=Math.max.apply(null,$(".col-md-6 div.alert").map(function(){return $(this).outerHeight()}).get());$(".alert").css("height",e)}function updateAlertHeightOnResize(){$(window).on("resize",function(){$(".alert").css("height","auto"),setAlertHeight()})}function renderAlerts(){$(".NOTE, .TIP").addClass("alert alert-info"),$(".WARNING").addClass("alert alert-warning"),$(".IMPORTANT, .CAUTION").addClass("alert alert-danger"),setAlertHeight()}function renderBreadcrumb(){const n=[];$("#navbar a.active").each(function(e,t){n.push({href:t.href,name:t.innerHTML})}),$("#toc a.active").each(function(e,t){n.push({href:t.href,name:t.innerHTML})});var e=formList(n,"breadcrumb");$("#breadcrumb").html(e)}function renderFooter(){function e(){return $(document).height()-($(window).height()+$(window).scrollTop())<1}function t(){$(".sidetoc").removeClass("shiftup"),$(".sideaffix").removeClass("shiftup")}function n(){$(".sidetoc").addClass("shiftup"),$(".sideaffix").addClass("shiftup")}e()?(n(),$("footer").show()):(t(),$("footer").hide()),$(window).on("scroll",()=>{e()?(n(),$("footer").fadeIn()):(t(),$("footer").fadeOut())})}function renderLinks(){"true"===$("meta[property='docfx:newtab']").attr("content")&&$(document.links).filter(function(){return this.hostname!==window.location.hostname}).attr("target","_blank")}function setNavbarHeight(){var e=$("#header-container").outerHeight(),e=window.innerHeight-e;$("#navbar").css("max-height",e)}function initializeNavbar(){const n=document.querySelector("header > .navbar");if(document.body.classList.contains("front-page")){let e,t=!1;window.addEventListener("scroll",function(){e=window.scrollY,t||(window.requestAnimationFrame(function(){100<=e?n.classList.add("scrolled"):n.classList.remove("scrolled"),t=!1}),t=!0)})}const e=new XMLHttpRequest;const r=document.getElementById("navbar");let i=!1;e.open("get","https://platform.uno/wp-json/wp/v2/menu",!0),void 0!==n&&(e.onload=function(){200===e.status&&e.responseText&&(r.innerHTML=JSON.parse(e.responseText),i=!0,$(document).trigger("wordpressMenuHasLoaded"))},e.onerror=function(e){},e.send()),$(document).ajaxComplete(function(e,t,n){"toc.html"===n.url&&i&&(r.getElementsByClassName("navbar-nav")[0].className+=" hidden")}),setNavbarHeight()}function updateLogo(){var e=window.innerWidth,t=document.getElementById("logo");e<980?(e=new URL("UnoLogoSmall.png",t.src).href,t.src=e):(e=new URL("uno-logo.svg",t.src).href,t.src=e)}function updateLogoOnResize(){$(window).on("resize",function(){updateLogo()})}function updateNavbarHeightOnResize(){$(window).on("resize",function(){setNavbarHeight()})}function renderNavbar(){if(void 0===$("#navbar ul")[0]){let t=$("meta[property='docfx\\:navrel']").attr("content");if(t){t=t.replace(/\\/g,"/");let o=$("meta[property='docfx\\:tocrel']").attr("content")||"";o=o&&o.replace(/\\/g,"/"),$.get(t,function(e){$(e).find("#toc>ul").appendTo("#navbar");e=t.lastIndexOf("/");let i="";-1<e&&(i=t.substr(0,e+1)),$("#navbar>ul").addClass("navbar-nav");const a=getAbsolutePath(window.location.pathname);$("#navbar").find("a[href]").each(function(e,t){var n=$(t).attr("href");if(isRelativePath(n)){n=i+n,$(t).attr("href",n);let e=!1;var r=t.name;r?getDirectory(getAbsolutePath(i+r))===getDirectory(getAbsolutePath(o))&&(e=!0):getAbsolutePath(n)===a&&"dropdown"!==$(t).attr("data-toggle")&&(e=!0),e&&$(t).addClass(active)}}),renderNavbar()})}}else $("#navbar ul a.active").parents("li").addClass(active),renderBreadcrumb()}function renderLogo(){$("img.svg").each(function(){const n=jQuery(this),r=n.attr("id"),i=n.attr("class");var e=n.attr("src");jQuery.get(e,function(e){let t=$(e).find("svg");void 0!==r&&(t=t.attr("id",r)),t=(t=void 0!==i?t.attr("class",i+" replaced-svg"):t).removeAttr("xmlns:a"),n.replaceWith(t)},"xml")})}function setTocHeight(){var e,t,n;$(window).width()<767?(n=$("#header-container").outerHeight(),e=$("#breadcrumb").outerHeight(),t=$(".btn.toc-toggle.collapse").outerHeight(),n=window.innerHeight-(n+e+t+65+parseInt($(".sidenav").css("padding-top"))),$(".sidetoc").css("max-height",n)):$(".sidetoc").css("max-height","none")}function updateTocHeightOnResize(){$(window).on("resize",function(){setTocHeight()})}function setSidenavTop(){var e=$("#header-container").outerHeight(),t=$("#breadcrumb").outerHeight(),n=$(".btn.toc-toggle.collapse").outerHeight(),r=e+t,e=e+t+$(".sidefilter").outerHeight(),t=r+n+30,n=r;$(".sidenav").css("top",r),$(".sidefilter").css("top",r),$(".sidetoc").css("top",e),$(window).width()<767?$(".body-content .article").attr("style","margin-top:"+(t+5)+"px !important"):$(".body-content .article").attr("style","margin-top:"+(n+5)+"px !important")}function updateSidenavTopOnResize(){$(window).on("resize",function(){setSidenavTop()})}function renderSidebar(){var e=$("#sidetoggle .sidetoc")[0],t=$("footer"),r=$(".sidetoc");if(void 0===e){let n=$("meta[property='docfx\\:tocrel']").attr("content");n&&(n=n.replace(/\\/g,"/"),$("#sidetoc").load(n+" #sidetoggle > div",function(){var e=n.lastIndexOf("/");let r="";-1<e&&(r=n.substr(0,e+1));const i=getAbsolutePath(window.location.pathname);$("#sidetoc").find("a[href]").each(function(e,t){var n=$(t).attr("href");isRelativePath(n)&&(n=r+n,$(t).attr("href",n)),getAbsolutePath(t.href)===i&&$(t).addClass(active),$(t).breakWord()}),renderSidebar();e=$("body");const t=$("#search-results");0!==t.length&&($("#search").show(),e.trigger("searchEvent")),e.on("mouseup",function(e){t.is(e.target)||0!==t.has(e.target).length||t.hide()})}))}else{$(".toc .nav > li > .expand-stub").on("click",function(e){$(e.target).parent().toggleClass(expanded)}),$(".toc .nav > li > .expand-stub + a:not([href])").on("click",function(e){$(e.target).parent().toggleClass(expanded)}),$("#toc_filter_input").on("input",function(){const s=this.value;var e;""===s?$("#toc li").removeClass(filtered).removeClass(hide):((e=$("#toc li>a")).filter(function(e,t){return 0===$(t).siblings().length}).each(function(e,t){let n=$(t).attr("title");var r,i,t=$(t).parent(),a=t.parents("ul>li");for(let e=0;e<a.length;e++){var o=$(a[e]).children("a").attr("title");o&&(n=o+"."+n)}r=n,!(i=s)||r&&-1<r.toLowerCase().indexOf(i.toLowerCase())?(t.addClass(show),t.removeClass(hide)):(t.addClass(hide),t.removeClass(show))}),e.filter(function(e,t){return 0<$(t).siblings().length}).each(function(e,t){t=$(t).parent();0<t.find("li.show").length?(t.addClass(show),t.addClass(filtered),t.removeClass(hide)):(t.addClass(hide),t.removeClass(show),t.removeClass(filtered))}))}),t.is(":visible")&&r.addClass("shiftup");let n=0;$("#toc a.active").parents("li").each(function(e,t){$(t).addClass(active).addClass(expanded),$(t).children("a").addClass(active),n+=$(t).position().top}),r.scrollTop(n-50),t.is(":visible")&&r.addClass("shiftup"),-1<window.location.href.indexOf("articles/intro.html")&&850<$(window).width()&&$(".nav.level1 li:eq(1)").addClass(expanded),renderBreadcrumb(),setSidenavTop(),setTocHeight()}}function renderTabs(){const a={id:"data-bi-id",name:"data-bi-name",type:"data-bi-type"},o=(Object.defineProperty(e.prototype,"tabIds",{get:function(){return this.a.getAttribute("data-tab").split(" ")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"condition",{get:function(){return this.a.getAttribute("data-condition")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return!this.li.hasAttribute("hidden")},set:function(e){e?(this.li.removeAttribute("hidden"),this.li.removeAttribute("aria-hidden")):(this.li.setAttribute("hidden","hidden"),this.li.setAttribute("aria-hidden","true"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selected",{get:function(){return!this.section.hasAttribute("hidden")},set:function(e){e?(this.a.setAttribute("aria-selected","true"),this.a.tabIndex=0,this.section.removeAttribute("hidden"),this.section.removeAttribute("aria-hidden")):(this.a.setAttribute("aria-selected","false"),this.a.tabIndex=-1,this.section.setAttribute("hidden","hidden"),this.section.setAttribute("aria-hidden","true"))},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.a.focus()},e);function e(e,t,n){this.li=e,this.a=t,this.section=n}{var t=document.body;const i=function(){var e=r(),e=e.tabs;return void 0!==e&&""!==e?e.split(","):[]}(),d=t.querySelectorAll(".tabGroup"),u={groups:[],selectedTabs:[]};for(let e=0;e<d.length;e++){var n=function(e){var t={independent:e.hasAttribute("data-tab-group-independent"),tabs:[]};let n=e.firstElementChild.firstElementChild;for(;n;){var r=n.firstElementChild,i=(r.setAttribute(a.name,"tab"),r.getAttribute("data-tab").replace(/\+/g," ")),i=(r.setAttribute("data-tab",i),e.querySelector('[id="'+r.getAttribute("aria-controls")+'"]')),r=new o(n,r,i);t.tabs.push(r),n=n.nextElementSibling}return e.setAttribute(a.name,"tab-group"),e.tabGroup=t}(d.item(e));n.independent||(s(n,u),u.groups.push(n))}t.addEventListener("click",function(e){{var n=u;const o=function(e){if(!(e.target instanceof HTMLElement))return null;e=e.target.closest("a[data-tab]");if(null===e)return null;var t=e.getAttribute("data-tab").split(" "),n=e.parentElement.parentElement.parentElement.tabGroup;return void 0!==n?{tabIds:t,group:n,anchor:e}:null}(e);if(null!==o){e.preventDefault(),o.anchor.href="javascript:",setTimeout(function(){return o.anchor.href="#"+o.anchor.getAttribute("aria-controls")});var r=o.tabIds,i=o.group,t=o.anchor.getBoundingClientRect().top;if(i.independent)for(let e=0,t=i.tabs;e<t.length;e++){var a=t[e];a.selected=c(a.tabIds,r)}else{if(c(n.selectedTabs,r))return;i=i.tabs.filter(function(e){return e.selected})[0].tabIds[0];n.selectedTabs.splice(n.selectedTabs.indexOf(i),1,r[0]);for(let e=0,t=n.groups;e<t.length;e++)s(t[e],n);l(n)}i=o.anchor.getBoundingClientRect().top;i!==t&&e instanceof MouseEvent&&window.scrollTo(0,window.pageYOffset+i-t)}}}),0!==u.groups.length&&(function(n){for(let e=0,t=n;e<t.length;e++){var r=t[e],r=document.querySelector('.tabGroup > ul > li > a[data-tab="'+r+'"]:not([hidden])');if(null===r)return;r.dispatchEvent(new CustomEvent("click",{bubbles:!0}))}}(i),l(u)),u}function s(i,a){let n=!1,r;for(let e=0,t=i.tabs;e<t.length;e++){var o=t[e];o.visible=null===o.condition||-1!==a.selectedTabs.indexOf(o.condition),o.visible&&(r=r||o),o.selected=o.visible&&c(a.selectedTabs,o.tabIds),n=n||o.selected}if(!n){for(let n=0,r=i.tabs;n<r.length;n++)for(let e=0,t=r[n].tabIds;e<t.length;e++){var s=t[e],s=a.selectedTabs.indexOf(s);-1!==s&&a.selectedTabs.splice(s,1)}i=r;i.selected=!0,a.selectedTabs.push(i.tabIds[0])}}function l(e){var t=r(),e=(t.tabs=e.selectedTabs.join(),location.protocol+"//"+location.host+location.pathname+"?"+function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&""!==e[n]&&null!==e[n]&&void 0!==e[n]&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(t)+location.hash);location.href!==e&&history.replaceState({},document.title,e)}function r(e){var t;const n=/\+/g;function r(e){return decodeURIComponent(e.replace(n," "))}for(var i=/([^&=]+)=?([^&]*)/g,a=(e=(e=void 0===e?"":e).substring(1),{});t=i.exec(e);)a[r(t[1])]=r(t[2]);return a}function c(n,r){for(let e=0,t=n;e<t.length;e++){var i=t[e];for(let e=0,t=r;e<t.length;e++)if(i===t[e])return!0}return!1}}function renderTables(){$("table").addClass("table table-bordered table-striped table-condensed").wrap('<div class="table-responsive"></div>')}function highlight(){$("pre code").each(function(e,t){hljs.highlightBlock(t)}),$("pre code[highlight-lines]").each(function(e,t){if(""!==t.innerHTML){var n,r=t.innerHTML.split("\n"),i=t.getAttribute("highlight-lines");if(i){for(n of i.split(",").map(Number)){var a=n.match(/^(\d+)\-(\d+)?$/);let e=0,t=0;if(a)e=+a[1],t=+a[2],(isNaN(t)||t>r.length)&&(t=r.length);else{if(isNaN(n))continue;e=+n,t=e}e<=0||t<=0||e>t||e>r.length||(r[e-1]='<span class="line-highlight">'+r[e-1],r[t-1]=r[t-1]+"</span>")}t.innerHTML=r.join("\n")}}})}function enableSearch(){let i;const a=$("meta[property='docfx\\:rel']").attr("content");var e;if(void 0!==a)try{var t=new Worker(a+"styles/search-worker.js");if(t||window.worker){var n=t;const d=$.Deferred();n.onmessage=function(e){switch(e.data.e){case"index-ready":d.resolve();break;case"query-ready":c(e.data.d)}},d.promise().done(function(){$("body").on("query-ready",function(){l(n,i)}),l(n,i)})}else{const u=lunr(function(){this.ref("href"),this.field("title",{boost:50}),this.field("keywords",{boost:20})});lunr.tokenizer.seperator=/[\s\-\.]+/;let n={};var r=new XMLHttpRequest,o=a+"index.json";o&&(r.open("GET",o),r.onload=function(){if(200===this.status)for(var e in n=JSON.parse(this.responseText))n.hasOwnProperty(e)&&u.add(n[e])},r.send());$("body").on("queryReady",function(){var e=u.search(i);const t=[];e.forEach(function(e){e=n[e.ref];t.push({href:e.href,title:e.title,keywords:e.keywords})}),c(t)})}s(),$(window).on("resize",()=>s()),$(document).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&$(this).collapse(hide)}),null!=(e=url("?q"))&&e.split("%20").forEach(function(e){""!==e&&($(".data-searchable *").mark(e),$("article *").mark(e))}),$("body").on("searchEvent",function(){$("#search-results>.sr-items").html("<p>No results found</p>");var e=$("#search-query");e.on("input",function(e){return"Enter"!==e.key}),e.on("keyup",function(e){$("#search-results").show(),i=""+e.target.value,$("body").trigger("query-ready"),$("#search-results>.search-list").text('Search Results for "'+i+'"')}).off("keydown")})}catch(e){console.error(e)}function s(){var e=$("#autocollapse");null===e.height()&&setTimeout(s,300),e.removeClass(collapsed),60<e.height()&&e.addClass(collapsed)}function l(e,t){t&&3<=t.length?e.postMessage({q:t+"*"}):e.postMessage({q:""})}function c(e){0===e.length?$("#search-results>.sr-items").html("<p>No results found</p>"):($("#search-results>.sr-items").empty().append(e.slice(0,20).map(function(e){!function(e,t){var e=e.split(/\/+/),n=t.split(/\/+/);let r=e.length-1;var i=[];for(let e=0;e<n.length;e++)".."===n[e]?r--:"."!==n[e]&&i.push(n[e]);e.slice(0,r).concat(i).join("/")}(window.location.href,a+e.href);var t=a+e.href+"?q="+i,n=e.title,e=(e=e.keywords,r=i.split(/\s+/g),50<(r=e.indexOf(r[0]))?"..."+e.slice(r-50,r+50)+"...":r<=50?e.slice(0,r+50)+"...":void 0),r=$("<a>").attr("class","sr-item").attr("href",t),t=$("<div>").attr("class","item-title").text(n),n=$("<div>").attr("class","item-brief").text(e);return r.append(t).append(n),r})),i.split(/\s+/).forEach(function(e){""!==e&&(e=e.replace(/\*/g,""),$("#search-results>.sr-items *").mark(e))}))}}function getAbsolutePath(e){e=$('<a href="'+e+'"></a>')[0];return e.host+e.pathname}function isRelativePath(e){return void 0!==e&&""!==e&&"/"!==e[0]&&!isAbsolutePath(e)}function isAbsolutePath(e){return/^(?:[a-z]+:)?\/\//i.test(e)}function getDirectory(e){var t;return!e||-1===(t=e.lastIndexOf("/"))?"":-1<t?e.substr(0,t):void 0}function formList(e,t){let c=1;return function t(n,r){if(!n||!n.items)return null;const i=n.items.length;if(0===i)return null;let a='<ul class="level'+c+" "+(r||"")+'">';c++;for(let e=0;e<i;e++){const o=n.items[e],s=o.href,l=o.name;l&&(a=(a+=s?'<li><a href="'+s+'">'+l+"</a>":"<li>"+l)+(t(o,r)||"")+"</li>")}a+="</ul>";return a}({items:e},[].concat(t).join(" "))}function breakPlainText(e){return e&&e.replace(/([a-z])([A-Z])|(\.)(\w)/g,"$1$3<wbr>$2$4")}function breakWord(){return this.html()===this.text()&&this.html(function(e,t){return breakPlainText(t)}),this}function workAroundFixedHeaderForAnchors(){const r=!(!history||!history.pushState),i=/^#[^ ]+$/;function e(e,t){var n;i.test(e)&&(n=document.getElementById(e.slice(1)))&&(n=n.getBoundingClientRect(),n=window.pageYOffset+n.top-$("header").first().height(),window.scrollTo(window.pageXOffset,n),r)&&t&&history.pushState({},document.title,location.pathname+e)}function t(){e(window.location.hash,!1)}$(window).on("hashchange",()=>t()),t(),$(document).on("ready",function(){$("body").scrollspy({offset:150})})}function breakText(){$(".xref").addClass("text-break"),$(".text-break").each(function(){$(this).breakWord()})}Object.assign($.fn,{breakWord:breakWord}),workAroundFixedHeaderForAnchors(),highlight(),enableSearch(),renderTables(),renderAlerts(),updateAlertHeightOnResize(),renderLinks(),renderSidebar(),renderAffix(),renderNavbar(),renderLogo(),updateLogo(),updateLogoOnResize(),updateNavbarHeightOnResize(),updateTocHeightOnResize(),updateSidenavTopOnResize(),renderFooter(),breakText(),renderTabs(),updateLogo(),window.refresh=function(e){void 0!==e&&void 0!==e.content||console.error("Null Argument"),$("article.content").html(e.content),highlight(),renderTables(),renderAlerts(),renderAffix(),renderTabs()},$(document).on("wordpressMenuHasLoaded",function(){var t=window.location.pathname,n="/docs/articles/",r=document.getElementById("menu-menu-principal").getElementsByTagName("a");for(let e=0;e<r.length;e++)r[e].href.includes(n)&&t.includes(n)&&!r[e].href.includes("#")&&$(r[e]).addClass("activepath");var e=window.location.search;e&&(e=e.split("=").slice(-1)[0],$("#search-query").val(decodeURI(e)))}),anchors.options={placement:"right",visible:"hover",icon:"#"},anchors.add("article h2:not(.no-anchor), article h3:not(.no-anchor), article h4:not(.no-anchor)");
=======
const active="active",expanded="in",filtered="filtered",show="show",hide="hide",collapsed="collapsed";function renderAffix(){var e=function(){const e=$($.map(["h1","h2","h3","h4"],function(e){return".article article "+e}).join(", ")),r=[];e.each(function(e,t){if(t.id){var n={name:(n=$(t).text())&&n.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),href:"#"+t.id,items:[]};if(r.length){const i=r[r.length-1];if(t.tagName===i.type)i.siblings.push(n);else if(t.tagName[1]>i.type[1])r.push({type:t.tagName,siblings:[n]});else{for(;t.tagName[1]<r[r.length-1].type[1];)o();t.tagName===r[r.length-1].type?r[r.length-1].siblings.push(n):r.push({type:t.tagName,siblings:[n]})}}else r.push({type:t.tagName,siblings:[n]})}});for(;1<r.length;)o();function o(){var e=r.pop(),t=r[r.length-1];const n=t.siblings[t.siblings.length-1];$.each(e.siblings,function(e,t){n.items.push(t)})}{var t;if(0<r.length)return 1===(t=r.pop().siblings).length?t[0].items:t}return}();if(e&&0<e.length){var t='<h5 class="title">In This Article</h5>';t+=formList(e,["nav","bs-docs-sidenav"]),$("#affix").empty().append(t),$("footer").is(":visible")&&$(".sideaffix").css("bottom","70px"),$("#affix a").on("click",function(e){const t=$('[data-spy="scroll"]').data()["bs.scrollspy"];e=e.target.hash;t&&e&&t.activate(e)});const n=$(".contribution");e=n.get(0).outerHTML;n.remove(),$(".sideaffix").append(e)}}function setAlertHeight(){var e=Math.max.apply(null,$(".col-md-6 div.alert").map(function(){return $(this).outerHeight()}).get());$(".alert").css("height",e)}function updateAlertHeightOnResize(){$(window).on("resize",function(){$(".alert").css("height","auto"),setAlertHeight()})}function renderAlerts(){$(".NOTE, .TIP").addClass("alert alert-info"),$(".WARNING").addClass("alert alert-warning"),$(".IMPORTANT, .CAUTION").addClass("alert alert-danger"),setAlertHeight()}function renderBreadcrumb(){const n=[];$("#navbar a.active").each(function(e,t){n.push({href:t.href,name:t.innerHTML})}),$("#toc a.active").each(function(e,t){n.push({href:t.href,name:t.innerHTML})});var e=formList(n,"breadcrumb");$("#breadcrumb").html(e)}function renderFooter(){function e(){return $(document).height()-($(window).height()+$(window).scrollTop())<1}function t(){$(".sidetoc").removeClass("shiftup"),$(".sideaffix").removeClass("shiftup")}function n(){$(".sidetoc").addClass("shiftup"),$(".sideaffix").addClass("shiftup")}e()?(n(),$("footer").show()):(t(),$("footer").hide()),$(window).on("scroll",()=>{e()?(n(),$("footer").fadeIn()):(t(),$("footer").fadeOut())})}function renderLinks(){"true"===$("meta[property='docfx:newtab']").attr("content")&&$(document.links).filter(function(){return this.hostname!==window.location.hostname}).attr("target","_blank")}function initializeNavbar(){const n=document.querySelector("header > .navbar");if(document.body.classList.contains("front-page")){let e,t=!1;window.addEventListener("scroll",function(){e=window.scrollY,t||(window.requestAnimationFrame(function(){100<=e?n.classList.add("scrolled"):n.classList.remove("scrolled"),t=!1}),t=!0)})}const e=new XMLHttpRequest;const r=document.getElementById("navbar");let o=!1;e.open("get","https://platform.uno/wp-json/wp/v2/menu",!0),void 0!==n&&(e.onload=function(){200===e.status&&e.responseText&&(r.innerHTML=JSON.parse(e.responseText),o=!0,$(document).trigger("wordpressMenuHasLoaded"))},e.onerror=function(e){},e.send()),$(document).ajaxComplete(function(e,t,n){if("toc.html"===n.url&&o){const i=r.getElementsByClassName("navbar-nav");i[0].className+=" hidden"}})}function updateLogo(){var e=window.innerWidth;const t=document.getElementById("logo");e<1113?(e=new URL("UnoLogoSmall.png",t.src).href,t.src=e):(e=new URL("uno-logo.svg",t.src).href,t.src=e)}function updateLogoOnResize(){$(window).on("resize",function(){updateLogo()})}function renderNavbar(){if(void 0===$("#navbar ul")[0]){let t=$("meta[property='docfx\\:navrel']").attr("content");if(t){t=t.replace(/\\/g,"/");let a=$("meta[property='docfx\\:tocrel']").attr("content")||"";a=a&&a.replace(/\\/g,"/"),$.get(t,function(e){$(e).find("#toc>ul").appendTo("#navbar");e=t.lastIndexOf("/");let r="";-1<e&&(r=t.substr(0,e+1)),$("#navbar>ul").addClass("navbar-nav");const o=getAbsolutePath(window.location.pathname);$("#navbar").find("a[href]").each(function(e,t){var n=$(t).attr("href");if(isRelativePath(n)){n=r+n,$(t).attr("href",n);let e=!1;var i=t.name;i?getDirectory(getAbsolutePath(r+i))===getDirectory(getAbsolutePath(a))&&(e=!0):getAbsolutePath(n)===o&&"dropdown"!==$(t).attr("data-toggle")&&(e=!0),e&&$(t).addClass(active)}}),renderNavbar()})}}else $("#navbar ul a.active").parents("li").addClass(active),renderBreadcrumb()}function renderLogo(){$("img.svg").each(function(){const n=jQuery(this),i=n.attr("id"),r=n.attr("class");var e=n.attr("src");jQuery.get(e,function(e){let t=$(e).find("svg");void 0!==i&&(t=t.attr("id",i)),t=(t=void 0!==r?t.attr("class",r+" replaced-svg"):t).removeAttr("xmlns:a"),n.replaceWith(t)},"xml")})}function setTocHeight(){var e,t,n;$(window).width()<767?(n=$("#header-container").outerHeight(),e=$("#breadcrumb").outerHeight(),t=$(".btn.toc-toggle.collapse").outerHeight(),n=window.innerHeight-(n+e+t+65+parseInt($(".sidenav").css("padding-top"))),$(".sidetoc").css("max-height",n)):$(".sidetoc").css("max-height","none")}function updateTocHeightOnResize(){$(window).on("resize",function(){setTocHeight()})}function setSidenavTop(){var e=$("#header-container").outerHeight(),t=$("#breadcrumb").outerHeight(),n=$(".btn.toc-toggle.collapse").outerHeight(),i=e+t,e=e+t+$(".sidefilter").outerHeight(),t=i+n+30,n=i;$(".sidenav").css("top",i),$(".sidefilter").css("top",i),$(".sidetoc").css("top",e),$(window).width()<767?$(".body-content .article").attr("style","margin-top:"+(t+5)+"px !important"):$(".body-content .article").attr("style","margin-top:"+(n+5)+"px !important")}function updateSidenavTopOnResize(){$(window).on("resize",function(){setSidenavTop()})}function renderSidebar(){var e=$("#sidetoggle .sidetoc")[0];const t=$("footer"),i=$(".sidetoc");if(void 0===e){let o=$("meta[property='docfx\\:tocrel']").attr("content");o&&(o=o.replace(/\\/g,"/"),$("#sidetoc").load(o+" #sidetoggle > div",function(){var e=o.lastIndexOf("/");let i="";-1<e&&(i=o.substr(0,e+1));const r=getAbsolutePath(window.location.pathname),t=($("#sidetoc").find("a[href]").each(function(e,t){var n=$(t).attr("href");isRelativePath(n)&&(n=i+n,$(t).attr("href",n)),getAbsolutePath(t.href)===r&&$(t).addClass(active),$(t).breakWord()}),renderSidebar(),$("body")),n=$("#search-results");0!==n.length&&($("#search").show(),t.trigger("searchEvent")),t.on("mouseup",function(e){n.is(e.target)||0!==n.has(e.target).length||n.hide()})}))}else{$(".toc .nav > li > .expand-stub").on("click",function(e){$(e.target).parent().toggleClass(expanded)}),$(".toc .nav > li > .expand-stub + a:not([href])").on("click",function(e){$(e.target).parent().toggleClass(expanded)}),$("#toc_filter_input").on("input",function(){const s=this.value;if(""===s)$("#toc li").removeClass(filtered).removeClass(hide);else{const e=$("#toc li>a");e.filter(function(e,t){return 0===$(t).siblings().length}).each(function(e,t){let n=$(t).attr("title");const i=$(t).parent();var r,o=i.parents("ul>li");for(let e=0;e<o.length;e++){var a=$(o[e]).children("a").attr("title");a&&(n=a+"."+n)}t=n,!(r=s)||t&&-1<t.toLowerCase().indexOf(r.toLowerCase())?(i.addClass(show),i.removeClass(hide)):(i.addClass(hide),i.removeClass(show))}),e.filter(function(e,t){return 0<$(t).siblings().length}).each(function(e,t){const n=$(t).parent();0<n.find("li.show").length?(n.addClass(show),n.addClass(filtered),n.removeClass(hide)):(n.addClass(hide),n.removeClass(show),n.removeClass(filtered))})}}),t.is(":visible")&&i.addClass("shiftup");let n=0;$("#toc a.active").parents("li").each(function(e,t){$(t).addClass(active).addClass(expanded),$(t).children("a").addClass(active),n+=$(t).position().top}),i.scrollTop(n-50),t.is(":visible")&&i.addClass("shiftup"),-1<window.location.href.indexOf("articles/intro.html")&&850<$(window).width()&&$(".nav.level1 li:eq(1)").addClass(expanded),renderBreadcrumb(),setSidenavTop(),setTocHeight()}}function renderTabs(){const o={id:"data-bi-id",name:"data-bi-name",type:"data-bi-type"},a=(Object.defineProperty(e.prototype,"tabIds",{get:function(){return this.a.getAttribute("data-tab").split(" ")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"condition",{get:function(){return this.a.getAttribute("data-condition")},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visible",{get:function(){return!this.li.hasAttribute("hidden")},set:function(e){e?(this.li.removeAttribute("hidden"),this.li.removeAttribute("aria-hidden")):(this.li.setAttribute("hidden","hidden"),this.li.setAttribute("aria-hidden","true"))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selected",{get:function(){return!this.section.hasAttribute("hidden")},set:function(e){e?(this.a.setAttribute("aria-selected","true"),this.a.tabIndex=0,this.section.removeAttribute("hidden"),this.section.removeAttribute("aria-hidden")):(this.a.setAttribute("aria-selected","false"),this.a.tabIndex=-1,this.section.setAttribute("hidden","hidden"),this.section.setAttribute("aria-hidden","true"))},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.a.focus()},e);function e(e,t,n){this.li=e,this.a=t,this.section=n}{var t=document.body;const r=function(){const e=i(),t=e.tabs;return void 0!==t&&""!==t?t.split(","):[]}(),s=t.querySelectorAll(".tabGroup"),u={groups:[],selectedTabs:[]};for(let e=0;e<s.length;e++){var n=function(e){const t={independent:e.hasAttribute("data-tab-group-independent"),tabs:[]};let n=e.firstElementChild.firstElementChild;for(;n;){const r=n.firstElementChild;r.setAttribute(o.name,"tab");var i=r.getAttribute("data-tab").replace(/\+/g," "),i=(r.setAttribute("data-tab",i),e.querySelector('[id="'+r.getAttribute("aria-controls")+'"]')),i=new a(n,r,i);t.tabs.push(i),n=n.nextElementSibling}return e.setAttribute(o.name,"tab-group"),e.tabGroup=t}(s.item(e));n.independent||(l(n,u),u.groups.push(n))}t.addEventListener("click",function(e){{var n=u;const r=function(e){if(!(e.target instanceof HTMLElement))return null;const t=e.target.closest("a[data-tab]");if(null===t)return null;var e=t.getAttribute("data-tab").split(" "),n=t.parentElement.parentElement.parentElement.tabGroup;return void 0!==n?{tabIds:e,group:n,anchor:t}:null}(e);if(null!==r){e.preventDefault(),r.anchor.href="javascript:",setTimeout(function(){return r.anchor.href="#"+r.anchor.getAttribute("aria-controls")});const o=r.tabIds,a=r.group;var t=r.anchor.getBoundingClientRect().top;if(a.independent)for(let e=0,t=a.tabs;e<t.length;e++){const s=t[e];s.selected=d(s.tabIds,o)}else{if(d(n.selectedTabs,o))return;var i=a.tabs.filter(function(e){return e.selected})[0].tabIds[0];n.selectedTabs.splice(n.selectedTabs.indexOf(i),1,o[0]);for(let e=0,t=n.groups;e<t.length;e++)l(t[e],n);c(n)}i=r.anchor.getBoundingClientRect().top;i!==t&&e instanceof MouseEvent&&window.scrollTo(0,window.pageYOffset+i-t)}return}}),0!==u.groups.length&&(function(n){for(let e=0,t=n;e<t.length;e++){var i=t[e];const r=document.querySelector('.tabGroup > ul > li > a[data-tab="'+i+'"]:not([hidden])');if(null===r)return;r.dispatchEvent(new CustomEvent("click",{bubbles:!0}))}}(r),c(u)),u}function l(e,r){let i=!1,o;for(let t=0,n=e.tabs;t<n.length;t++){let e=n[t];e.visible=null===e.condition||-1!==r.selectedTabs.indexOf(e.condition),e.visible&&(o=o||e),e.selected=e.visible&&d(r.selectedTabs,e.tabIds),i=i||e.selected}if(!i){for(let n=0,i=e.tabs;n<i.length;n++)for(let e=0,t=i[n].tabIds;e<t.length;e++){var a=t[e],a=r.selectedTabs.indexOf(a);-1!==a&&r.selectedTabs.splice(a,1)}const t=o;t.selected=!0,r.selectedTabs.push(t.tabIds[0])}}function c(e){const t=i();t.tabs=e.selectedTabs.join();e=location.protocol+"//"+location.host+location.pathname+"?"+function(e){const t=[];for(var n in e)e.hasOwnProperty(n)&&""!==e[n]&&null!==e[n]&&void 0!==e[n]&&t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n]));return t.join("&")}(t)+location.hash;location.href!==e&&history.replaceState({},document.title,e)}function i(e){var t;const n=/\+/g,i=/([^&=]+)=?([^&]*)/g;function r(e){return decodeURIComponent(e.replace(n," "))}e=(e=void 0===e?"":e).substring(1);const o={};for(;t=i.exec(e);)o[r(t[1])]=r(t[2]);return o}function d(n,i){for(let e=0,t=n;e<t.length;e++){var r=t[e];for(let e=0,t=i;e<t.length;e++)if(r===t[e])return!0}return!1}}function renderTables(){$("table").addClass("table table-bordered table-striped table-condensed").wrap('<div class="table-responsive"></div>')}function highlight(){$("pre code").each(function(e,t){hljs.highlightBlock(t)}),$("pre code[highlight-lines]").each(function(e,t){if(""!==t.innerHTML){const r=t.innerHTML.split("\n"),o=t.getAttribute("highlight-lines");if(o){let e=o.split(",");var n;for(n of e.map(Number)){var i=n.match(/^(\d+)\-(\d+)?$/);let e=0,t=0;if(i)e=+i[1],t=+i[2],(isNaN(t)||t>r.length)&&(t=r.length);else{if(isNaN(n))continue;e=+n,t=e}e<=0||t<=0||e>t||e>r.length||(r[e-1]='<span class="line-highlight">'+r[e-1],r[t-1]=r[t-1]+"</span>")}t.innerHTML=r.join("\n")}}})}function enableSearch(){let o;const a=$("meta[property='docfx\\:rel']").attr("content");if(void 0!==a)try{var e=new Worker(a+"styles/search-worker.js");if(e||window.worker){var t=e;const s=$.Deferred();t.onmessage=function(e){switch(e.data.e){case"index-ready":s.resolve();break;case"query-ready":r(e.data.d)}},s.promise().done(function(){$("body").on("query-ready",function(){i(t,o)}),i(t,o)})}else{const l=lunr(function(){this.ref("href"),this.field("title",{boost:50}),this.field("keywords",{boost:20})});lunr.tokenizer.seperator=/[\s\-\.]+/;let n={};const c=new XMLHttpRequest,d=a+"index.json";d&&(c.open("GET",d),c.onload=function(){if(200===this.status)for(var e in n=JSON.parse(this.responseText))n.hasOwnProperty(e)&&l.add(n[e])},c.send());$("body").on("queryReady",function(){const e=l.search(o),t=[];e.forEach(function(e){e=n[e.ref];t.push({href:e.href,title:e.title,keywords:e.keywords})}),r(t)})}n(),$(window).on("resize",()=>n()),$(document).on("click",".navbar-collapse.in",function(e){$(e.target).is("a")&&$(this).collapse(hide)});{const u=url("?q");if(null!=u){const h=u.split("%20");h.forEach(function(e){""!==e&&($(".data-searchable *").mark(e),$("article *").mark(e))})}}$("body").on("searchEvent",function(){$("#search-results>.sr-items").html("<p>No results found</p>");const e=$("#search-query");e.on("input",function(e){return"Enter"!==e.key}),e.on("keyup",function(e){$("#search-results").show(),o=""+e.target.value,$("body").trigger("query-ready"),$("#search-results>.search-list").text('Search Results for "'+o+'"')}).off("keydown")})}catch(e){console.error(e)}function n(){const e=$("#autocollapse");null===e.height()&&setTimeout(n,300),e.removeClass(collapsed),60<e.height()&&e.addClass(collapsed)}function i(e,t){t&&3<=t.length?e.postMessage({q:t+"*"}):e.postMessage({q:""})}function r(e){0===e.length?$("#search-results>.sr-items").html("<p>No results found</p>"):($("#search-results>.sr-items").empty().append(e.slice(0,20).map(function(e){!function(e,t){const n=e.split(/\/+/);var i=t.split(/\/+/);let r=n.length-1;const o=[];for(let e=0;e<i.length;e++)".."===i[e]?r--:"."!==i[e]&&o.push(i[e]);n.slice(0,r).concat(o).join("/")}(window.location.href,a+e.href);var t=a+e.href+"?q="+o,n=e.title,e=(e=e.keywords,r=o.split(/\s+/g),50<(r=e.indexOf(r[0]))?"..."+e.slice(r-50,r+50)+"...":r<=50?e.slice(0,r+50)+"...":void 0);const i=$("<a>").attr("class","sr-item").attr("href",t);var r=$("<div>").attr("class","item-title").text(n),t=$("<div>").attr("class","item-brief").text(e);return i.append(r).append(t),i})),o.split(/\s+/).forEach(function(e){""!==e&&(e=e.replace(/\*/g,""),$("#search-results>.sr-items *").mark(e))}))}}function getAbsolutePath(e){e=$('<a href="'+e+'"></a>')[0];return e.host+e.pathname}function isRelativePath(e){return void 0!==e&&""!==e&&"/"!==e[0]&&!isAbsolutePath(e)}function isAbsolutePath(e){return/^(?:[a-z]+:)?\/\//i.test(e)}function getDirectory(e){if(!e)return"";var t=e.lastIndexOf("/");return-1===t?"":-1<t?e.substr(0,t):void 0}function formList(e,t){let c=1;return function t(n,i){if(!n||!n.items)return null;const r=n.items.length;if(0===r)return null;let o='<ul class="level'+c+" "+(i||"")+'">';c++;for(let e=0;e<r;e++){const a=n.items[e],s=a.href,l=a.name;l&&(o=(o+=s?'<li><a href="'+s+'">'+l+"</a>":"<li>"+l)+(t(a,i)||"")+"</li>")}o+="</ul>";return o}({items:e},[].concat(t).join(" "))}function breakPlainText(e){return e&&e.replace(/([a-z])([A-Z])|(\.)(\w)/g,"$1$3<wbr>$2$4")}function breakWord(){return this.html()===this.text()&&this.html(function(e,t){return breakPlainText(t)}),this}function workAroundFixedHeaderForAnchors(){const o=!(!history||!history.pushState),a=/^#[^ ]+$/;function e(e,t){let n,i,r;a.test(e)&&((n=document.getElementById(e.slice(1)))&&(i=n.getBoundingClientRect(),r=window.pageYOffset+i.top-$("header").first().height(),window.scrollTo(window.pageXOffset,r),o&&t&&history.pushState({},document.title,location.pathname+e)),n)}function t(){e(window.location.hash,!1)}$(window).on("hashchange",()=>t()),t(),$(document).on("ready",function(){$("body").scrollspy({offset:150})})}function breakText(){$(".xref").addClass("text-break");const e=$(".text-break");e.each(function(){$(this).breakWord()})}Object.assign($.fn,{breakWord:breakWord}),workAroundFixedHeaderForAnchors(),highlight(),enableSearch(),renderTables(),renderAlerts(),updateAlertHeightOnResize(),renderLinks(),renderSidebar(),renderAffix(),renderNavbar(),renderLogo(),updateLogo(),updateLogoOnResize(),updateTocHeightOnResize(),updateSidenavTopOnResize(),renderFooter(),breakText(),renderTabs(),updateLogo(),window.refresh=function(e){void 0!==e&&void 0!==e.content||console.error("Null Argument"),$("article.content").html(e.content),highlight(),renderTables(),renderAlerts(),renderAffix(),renderTabs()},$(document).on("wordpressMenuHasLoaded",function(){const t=window.location.pathname;var n="/docs/articles/";const e=document.getElementById("menu-menu-principal"),i=e.getElementsByTagName("a");for(let e=0;e<i.length;e++)i[e].href.includes(n)&&t.includes(n)&&!i[e].href.includes("#")&&$(i[e]).addClass("activepath");const r=window.location.search;if(r){const a=r.split("=");var o=a.slice(-1)[0];$("#search-query").val(decodeURI(o))}}),anchors.options={placement:"right",visible:"hover",icon:"#"},anchors.add("article h2:not(.no-anchor), article h3:not(.no-anchor), article h4:not(.no-anchor)");
>>>>>>> 83a7ce7cdd (fix: docs markdown tab)
