(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about"],{

/***/ "./src/routes/about.html":
/*!*******************************!*\
  !*** ./src/routes/about.html ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/svelte/shared.js */ "./node_modules/svelte/shared.js");
/* src/routes/about.html generated by Svelte v2.13.5 */


const file = "src/routes/about.html";

function create_main_fragment(component, ctx) {
	var text, h1, text_1, text_2, p, text_3;

	return {
		c: function create() {
			text = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			h1 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1");
			text_1 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("About this site");
			text_2 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("\n\n");
			p = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p");
			text_3 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["createText"])("This is the 'about' page. There's not much here.");
			this.h()
		},

		l: function claim(nodes) {
			text = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			h1 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "H1", {}, false);
			var h1_nodes = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(h1);

			text_1 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(h1_nodes, "About this site");
			h1_nodes.forEach(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			text_2 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(nodes, "\n\n");

			p = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimElement"])(nodes, "P", {}, false);
			var p_nodes = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(p);

			text_3 = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["claimText"])(p_nodes, "This is the 'about' page. There's not much here.");
			p_nodes.forEach(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
			this.h();
		},

		h: function hydrate() {
			document.title = "About";
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(h1, file, 4, 0, 52);
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["addLoc"])(p, file, 6, 0, 78);
		},

		m: function mount(target, anchor) {
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, text, anchor);
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, h1, anchor);
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["append"])(h1, text_1);
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, text_2, anchor);
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["insert"])(target, p, anchor);
			Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["append"])(p, text_3);
		},

		p: _Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["noop"],

		d: function destroy(detach) {
			if (detach) {
				Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text);
				Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(h1);
				Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(text_2);
				Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"])(p);
			}
		}
	};
}

function About(options) {
	this._debugName = '<About>';
	if (!options || (!options.target && !options.root)) throw new Error("'target' is a required option");
	Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["init"])(this, options);
	this._state = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])({}, options.data);
	this._intro = true;

	this._fragment = create_main_fragment(this, this._state);

	if (options.target) {
		var nodes = Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["children"])(options.target);
		options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
		nodes.forEach(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["detachNode"]);
		this._mount(options.target, options.anchor);
	}
}

Object(_Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["assign"])(About.prototype, _Users_indra_Git_qumatic_sapper_clusterws_node_modules_svelte_shared_js__WEBPACK_IMPORTED_MODULE_0__["protoDev"]);

About.prototype._checkReadOnly = function _checkReadOnly(newState) {
};

if (true) {
	const { configure, register, reload } = __webpack_require__(/*! ./node_modules/svelte-loader/lib/hot-api.js */ "./node_modules/svelte-loader/lib/hot-api.js");

	module.hot.accept();

	if (!module.hot.data) {
		// initial load
		configure({});
		About = register("src/routes/about.html", About);
	} else {
		// hot update
		About = reload("src/routes/about.html", About);
	}
}

/* harmony default export */ __webpack_exports__["default"] = (About);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiI1YmQwYjEwM2NkNjMzZDgyYWU4MC9hYm91dC5hYm91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9