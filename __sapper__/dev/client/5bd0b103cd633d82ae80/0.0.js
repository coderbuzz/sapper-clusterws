(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/sapper/sapper-dev-client.js":
/*!**************************************************!*\
  !*** ./node_modules/sapper/sapper-dev-client.js ***!
  \**************************************************/
/*! exports provided: connect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
let source;

function check() {
	if (false) {}

	if (module.hot.status() === 'idle') {
		module.hot.check(true).then(modules => {
			console.log(`[SAPPER] applied HMR update`);
		});
	}
}

function connect(port) {
	if (source || !window.EventSource) return;

	source = new EventSource(`http://${window.location.hostname}:${port}/__sapper__`);

	window.source = source;

	source.onopen = function(event) {
		console.log(`[SAPPER] dev client connected`);
	};

	source.onerror = function(error) {
		console.error(error);
	};

	source.onmessage = function(event) {
		const data = JSON.parse(event.data);
		if (!data) return; // just a heartbeat

		if (data.action === 'reload') {
			window.location.reload();
		}

		if (data.status === 'completed') {
			check();
		}
	};
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2FwcGVyL3NhcHBlci1kZXYtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQSxLQUFLLEtBQTZCLEVBQUUsRUFBTzs7QUFFM0M7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRU87QUFDUDs7QUFFQSxvQ0FBb0MseUJBQXlCLEdBQUcsS0FBSzs7QUFFckU7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9COztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjViZDBiMTAzY2Q2MzNkODJhZTgwLzAuMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzb3VyY2U7XG5cbmZ1bmN0aW9uIGNoZWNrKCkge1xuXHRpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcblxuXHRpZiAobW9kdWxlLmhvdC5zdGF0dXMoKSA9PT0gJ2lkbGUnKSB7XG5cdFx0bW9kdWxlLmhvdC5jaGVjayh0cnVlKS50aGVuKG1vZHVsZXMgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coYFtTQVBQRVJdIGFwcGxpZWQgSE1SIHVwZGF0ZWApO1xuXHRcdH0pO1xuXHR9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25uZWN0KHBvcnQpIHtcblx0aWYgKHNvdXJjZSB8fCAhd2luZG93LkV2ZW50U291cmNlKSByZXR1cm47XG5cblx0c291cmNlID0gbmV3IEV2ZW50U291cmNlKGBodHRwOi8vJHt3aW5kb3cubG9jYXRpb24uaG9zdG5hbWV9OiR7cG9ydH0vX19zYXBwZXJfX2ApO1xuXG5cdHdpbmRvdy5zb3VyY2UgPSBzb3VyY2U7XG5cblx0c291cmNlLm9ub3BlbiA9IGZ1bmN0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc29sZS5sb2coYFtTQVBQRVJdIGRldiBjbGllbnQgY29ubmVjdGVkYCk7XG5cdH07XG5cblx0c291cmNlLm9uZXJyb3IgPSBmdW5jdGlvbihlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9O1xuXG5cdHNvdXJjZS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuXHRcdGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuXHRcdGlmICghZGF0YSkgcmV0dXJuOyAvLyBqdXN0IGEgaGVhcnRiZWF0XG5cblx0XHRpZiAoZGF0YS5hY3Rpb24gPT09ICdyZWxvYWQnKSB7XG5cdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0fVxuXG5cdFx0aWYgKGRhdGEuc3RhdHVzID09PSAnY29tcGxldGVkJykge1xuXHRcdFx0Y2hlY2soKTtcblx0XHR9XG5cdH07XG59Il0sInNvdXJjZVJvb3QiOiIifQ==