!function(n){var t={};function e(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return n[o].call(c.exports,c,c.exports,e),c.l=!0,c.exports}e.m=n,e.c=t,e.d=function(n,t,o){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:o})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var c in n)e.d(o,c,function(t){return n[t]}.bind(null,c));return o},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(module,exports,__webpack_require__){"use strict";eval("\n\n// service worker registration - remove if you're not going to use it\n\nif ('serviceWorker' in navigator) {\n  window.addEventListener('load', function() {\n    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {\n      // Registration was successful\n      console.log('ServiceWorker registration successful with scope: ', registration.scope);\n    }, function(err) {\n      // registration failed :(\n      console.log('ServiceWorker registration failed: ', err);\n    });\n  });\n}\n\n// place your code below\n\nconst addButton = document.getElementById(\"add-button\");\nconst inputTask = document.getElementById(\"input-task\");\nconst todoTask = document.getElementById(\"tasks-todo\");\nconst doneButton = document.getElementById('done=button');\nconst todoElement = document.getElementById('todoElement');\nlet task;\n\n\n\nconst addTask = () => {\n  task = inputTask.value;\n  todoTask.innerHTML += `<div class=\"container-todo__element\" id=\"toodoElement\">\n  <p class=\"container-todo__element-text\">${task}</p>\n  <button class='container-todo__element-undone'>X</button>\n  <button class='container-todo__element-done' id=\"done-button\">OK</button>\n</div>`\n}\n\nconst doneTask = (el) =>{\n  console.log(this.el);\n}\n\naddButton.addEventListener(\"click\", addTask);\ndoneButton.addEventListener(\"click\", doneTask);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvbWFpbi5qcz85MjkxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLEtBQUs7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb24gLSByZW1vdmUgaWYgeW91J3JlIG5vdCBnb2luZyB0byB1c2UgaXRcblxuaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3Rlcignc2VydmljZXdvcmtlci5qcycpLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyBSZWdpc3RyYXRpb24gd2FzIHN1Y2Nlc3NmdWxcbiAgICAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlV29ya2VyIHJlZ2lzdHJhdGlvbiBzdWNjZXNzZnVsIHdpdGggc2NvcGU6ICcsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAvLyByZWdpc3RyYXRpb24gZmFpbGVkIDooXG4gICAgICBjb25zb2xlLmxvZygnU2VydmljZVdvcmtlciByZWdpc3RyYXRpb24gZmFpbGVkOiAnLCBlcnIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuLy8gcGxhY2UgeW91ciBjb2RlIGJlbG93XG5cbmNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkLWJ1dHRvblwiKTtcbmNvbnN0IGlucHV0VGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtdGFza1wiKTtcbmNvbnN0IHRvZG9UYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrcy10b2RvXCIpO1xuY29uc3QgZG9uZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lPWJ1dHRvbicpO1xuY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kb0VsZW1lbnQnKTtcbmxldCB0YXNrO1xuXG5cblxuY29uc3QgYWRkVGFzayA9ICgpID0+IHtcbiAgdGFzayA9IGlucHV0VGFzay52YWx1ZTtcbiAgdG9kb1Rhc2suaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXRvZG9fX2VsZW1lbnRcIiBpZD1cInRvb2RvRWxlbWVudFwiPlxuICA8cCBjbGFzcz1cImNvbnRhaW5lci10b2RvX19lbGVtZW50LXRleHRcIj4ke3Rhc2t9PC9wPlxuICA8YnV0dG9uIGNsYXNzPSdjb250YWluZXItdG9kb19fZWxlbWVudC11bmRvbmUnPlg8L2J1dHRvbj5cbiAgPGJ1dHRvbiBjbGFzcz0nY29udGFpbmVyLXRvZG9fX2VsZW1lbnQtZG9uZScgaWQ9XCJkb25lLWJ1dHRvblwiPk9LPC9idXR0b24+XG48L2Rpdj5gXG59XG5cbmNvbnN0IGRvbmVUYXNrID0gKGVsKSA9PntcbiAgY29uc29sZS5sb2codGhpcy5lbCk7XG59XG5cbmFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVGFzayk7XG5kb25lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkb25lVGFzayk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n")}]);