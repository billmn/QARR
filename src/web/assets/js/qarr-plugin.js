!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){r(1),r(2),r(7),r(9),t.exports=r(11)},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(){function t(t,e){var r;for(r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t}this.QarrPlugin=function(){this.qarrplugin=null;var e={target:"#qarr-display-container"};arguments[0]&&"object"===r(arguments[0])&&(this.options=t(e,arguments[0]))},QarrPlugin.prototype.init=function(){new QarrTabs("#qarr-display-container"),$(".qarr-entry-ra-btn").on("click",function(t){t.preventDefault();var e=$(this),r={id:$(this).data("element-id"),type:$(this).data("type")};r[QARR.csrfTokenName]=QARR.csrfTokenValue,$.post(QARR.actionUrl+"qarr/elements/report-abuse",r,function(t,r,n){t.success&&e.parent().html("<span>Reported</span>")})}),$(".qarr-star:not(.static)").on("click",function(){$(".qarr-star").removeClass("selected"),$(".qarr-star").removeClass("active");var t=$(this).data("star-count");$(this).addClass("selected"),$(this).prevAll().addClass("active"),$("#qarr-rating-input").val(t)});var t=$(".qarr-pagination");[].forEach.call(t,function(t){new QarrPagination(t)}),$(".add-answer").on("click",function(t){t.preventDefault();var e={target:$(this),questionId:$(this).data("id"),authorName:$(this).data("user-name"),authorId:$(this).data("user-id")};new QarrAnswerHud(e)});var e=$(".qarr-filter-item");[].forEach.call(e,function(t){var e={target:$(t),type:$(t).data("type"),rating:$(t).data("rating"),total:$(t).data("total-entries")};new QarrStarFilterEntries(e)}),$(".qarr-entry-sort").on("change",function(t){var e=$(".qarr-loader"),r=$("#qarr-"+$(this).data("type")+"-container"),n=$(this).val(),a=$(this).data("type");e.addClass("active"),r.addClass("transition");var o={value:n,type:a,limit:QARR.limit,elementId:QARR.elementId};o[QARR.csrfTokenName]=QARR.csrfTokenValue,$.post(QARR.actionUrl+"qarr/elements/query-sort-elements",o,function(t,o,i){t.success&&(setTimeout(function(){e.removeClass("active"),r.html(t.template);var n=$(t.template).attr("id"),a=$("#"+n);$("html, body").animate({scrollTop:a.offset().top},"fast"),r.removeClass("transition"),$(".qarr-pagination").hide()},1e3),window.localStorage.setItem("qarr-sort-filter-type",a),window.localStorage.setItem("qarr-sort-filter-value",n))})})}}()},function(t,e){},,,,,function(t,e){},,function(t,e){},,function(t,e){}]);