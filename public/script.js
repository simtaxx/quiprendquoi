(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _this=void 0;navigator.clipboard&&document.querySelectorAll("[data-clipboard]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Copier",a.parentNode.append(b),b.addEventListener("click",copyToClipboard.bind(_this,a,b))});function copyToClipboard(a,b){var c=window.location.href.substring(window.location.href.lastIndexOf("/")+1);navigator.clipboard.writeText(a.getAttribute("data-clipboard")+c).then(function(){b.innerHTML="Copi\xE9 !",setTimeout(function(){return b.innerHTML="Copier"},2e3)})["catch"](function(a){return console.warn(a)})}

},{}],2:[function(require,module,exports){
"use strict";function notifyNewElement(a){if("Notification"in window)if("granted"===Notification.permission)new Notification(a);else"denied"!==Notification.permission&&Notification.requestPermission(function(a){"permission"in Notification||(Notification.permission=a)})}(function(){var a=0,b=window.location.href.substring(window.location.href.lastIndexOf("/")+1);setInterval(function(){fetch("http://bastiencalou.fr:3000/party/".concat(b)).then(function(a){return a.json()}).then(function(b){console.log(a),0===a?a=b.items.length:a<b.items.length?(notifyNewElement("Un nouvel \xE9l\xE9ment a \xE9t\xE9 ajout\xE9"),window.location.reload()):a>b.items.length&&(notifyNewElement("Un \xE9l\xE9ment a \xE9t\xE9 supprim\xE9"),window.location.reload())})},5e3)})();

},{}],3:[function(require,module,exports){
"use strict";"undefined"!=typeof party&&localStorage.setItem(location.href,party.name);

},{}],4:[function(require,module,exports){
"use strict";var _this=void 0;navigator.share?(console.log("work share"),document.querySelectorAll("[data-share-url]").forEach(function(a){var b=document.createElement("button");b.innerHTML="Partager",a.parentNode.append(b),b.addEventListener("click",shareInfo.bind(_this,a,b))})):console.log("share doesnt work");function shareInfo(a){var b=window.location.href.substring(window.location.href.lastIndexOf("/")+1);navigator.share({url:a.getAttribute("data-share-url")+b,title:a.getAttribute("data-share-title"),text:"".concat(a.getAttribute("data-share-text")," vous invite \xE0 rejoindre un \xE9v\xE8nement")})}

},{}],5:[function(require,module,exports){
"use strict";var urlInput=document.getElementById("url"),idPage=window.location.href.substring(window.location.href.lastIndexOf("/")+1);urlInput.value="https://quiprendquoii.herokuapp.com/party/".concat(idPage);

},{}],6:[function(require,module,exports){
"use strict";var shareButton=document.getElementById("url");shareButton.addEventListener("click",function(){navigator.vibrate(100)});

},{}]},{},[1,2,3,4,5,6]);
