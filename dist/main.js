/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand-Regular.ttf */ "./src/Quicksand-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand-Medium.ttf */ "./src/Quicksand-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./Quicksand-Bold.ttf */ "./src/Quicksand-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant-table.jpg */ "./src/restaurant-table.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: \"Quicksand-Regular\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Quicksand-Medium\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Quicksand-Bold\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('truetype');\r\n}\r\n\r\nhtml, body, #content {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: \"Quicksand-Bold\";\r\n}\r\n\r\nbody {\r\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\r\n    background-size: cover;\r\n    background-attachment: fixed\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between; \r\n}\r\n\r\n.header, .main, .footer {\r\n    display: flex;\r\n}\r\n\r\n.header, .footer {\r\n    padding: 20px;\r\n    background-color: #58181F\r\n}\r\n\r\n.header {\r\n    padding: 0px;\r\n    justify-content: space-between;\r\n    border-bottom: black solid 3px;\r\n}\r\n\r\n.footer {\r\n    border-top: black solid 2px;\r\n    justify-content: center;\r\n}\r\n\r\n.footerText {\r\n    color: black;\r\n}\r\n\r\n.headerTitle, .menuItemText {\r\n    color: white;\r\n}\r\n\r\n.headerTitle {\r\n    font-size: 50px;\r\n    padding: 20px;\r\n    margin: 0px;\r\n}\r\n\r\n.block {\r\n    background-color: #FFE4E3;\r\n}\r\n\r\n.menuItemText {\r\n    margin: 0px;\r\n    width: 60px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    /* gap: 20%; */\r\n}\r\n\r\n.divider {\r\n    display: flex;\r\n    height: 100%;\r\n    border-right: black solid 2px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.menuItem {\r\n    display: flex;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    height: 100%;\r\n    /* border: black solid 3px;\r\n    border-bottom: none;\r\n    border-top: none; */\r\n    align-items: center;\r\n}\r\n\r\n.menuItem:hover {\r\n    background-color: #3E1116;\r\n}\r\n\r\n.main {\r\n    flex-direction: column;\r\n    align-self: center;\r\n    width: 600px;\r\n    gap: 20px;\r\n    font-family: \"Quicksand-Medium\";\r\n}\r\n\r\n.menuTitle {\r\n    font-size: 40px;\r\n}\r\n\r\n.menuHr {\r\n    width: 80%;\r\n    margin: -2px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.block img {\r\n    width: 80%;\r\n}\r\n\r\n.blockImage {\r\n    border: #58181F solid 5px;\r\n}\r\n\r\n.block{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: #58181F solid 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.07), \r\n                0 2px 4px rgba(0,0,0,0.07), \r\n                0 4px 8px rgba(0,0,0,0.07), \r\n                0 8px 16px rgba(0,0,0,0.07),\r\n                0 16px 32px rgba(0,0,0,0.07), \r\n                0 32px 64px rgba(0,0,0,0.07);\r\n}\r\n\r\n#img-table {\r\n    width: 100%;\r\n}\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,gCAAgC;IAChC,+DAAsD;AAC1D;;AAEA;IACI,+BAA+B;IAC/B,+DAAqD;AACzD;;AAEA;IACI,6BAA6B;IAC7B,+DAAmD;AACvD;;AAEA;IACI,SAAS;IACT,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,yDAA+C;IAC/C,sBAAsB;IACtB;AACJ;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb;AACJ;;AAEA;IACI,YAAY;IACZ,8BAA8B;IAC9B,8BAA8B;AAClC;;AAEA;IACI,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,aAAa;IACb,WAAW;AACf;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,6BAA6B;IAC7B,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ;;uBAEmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,YAAY;IACZ,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;IACb;;;;;4CAKwC;AAC5C;;AAEA;IACI,WAAW;AACf","sourcesContent":["@font-face {\r\n    font-family: \"Quicksand-Regular\";\r\n    src: url('./Quicksand-Regular.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Quicksand-Medium\";\r\n    src: url('./Quicksand-Medium.ttf') format('truetype');\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Quicksand-Bold\";\r\n    src: url('./Quicksand-Bold.ttf') format('truetype');\r\n}\r\n\r\nhtml, body, #content {\r\n    margin: 0;\r\n    height: 100%;\r\n    font-family: \"Quicksand-Bold\";\r\n}\r\n\r\nbody {\r\n    background-image: url(\"./restaurant-table.jpg\");\r\n    background-size: cover;\r\n    background-attachment: fixed\r\n}\r\n\r\n#content {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between; \r\n}\r\n\r\n.header, .main, .footer {\r\n    display: flex;\r\n}\r\n\r\n.header, .footer {\r\n    padding: 20px;\r\n    background-color: #58181F\r\n}\r\n\r\n.header {\r\n    padding: 0px;\r\n    justify-content: space-between;\r\n    border-bottom: black solid 3px;\r\n}\r\n\r\n.footer {\r\n    border-top: black solid 2px;\r\n    justify-content: center;\r\n}\r\n\r\n.footerText {\r\n    color: black;\r\n}\r\n\r\n.headerTitle, .menuItemText {\r\n    color: white;\r\n}\r\n\r\n.headerTitle {\r\n    font-size: 50px;\r\n    padding: 20px;\r\n    margin: 0px;\r\n}\r\n\r\n.block {\r\n    background-color: #FFE4E3;\r\n}\r\n\r\n.menuItemText {\r\n    margin: 0px;\r\n    width: 60px;\r\n    text-align: center;\r\n}\r\n\r\n\r\n.menu {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    /* gap: 20%; */\r\n}\r\n\r\n.divider {\r\n    display: flex;\r\n    height: 100%;\r\n    border-right: black solid 2px;\r\n    margin: 0px;\r\n    padding: 0px;\r\n}\r\n\r\n.menuItem {\r\n    display: flex;\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    height: 100%;\r\n    /* border: black solid 3px;\r\n    border-bottom: none;\r\n    border-top: none; */\r\n    align-items: center;\r\n}\r\n\r\n.menuItem:hover {\r\n    background-color: #3E1116;\r\n}\r\n\r\n.main {\r\n    flex-direction: column;\r\n    align-self: center;\r\n    width: 600px;\r\n    gap: 20px;\r\n    font-family: \"Quicksand-Medium\";\r\n}\r\n\r\n.menuTitle {\r\n    font-size: 40px;\r\n}\r\n\r\n.menuHr {\r\n    width: 80%;\r\n    margin: -2px;\r\n    border: 1px solid black;\r\n}\r\n\r\n.block img {\r\n    width: 80%;\r\n}\r\n\r\n.blockImage {\r\n    border: #58181F solid 5px;\r\n}\r\n\r\n.block{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: #58181F solid 5px;\r\n    padding: 20px;\r\n    box-shadow: 0 1px 2px rgba(0,0,0,0.07), \r\n                0 2px 4px rgba(0,0,0,0.07), \r\n                0 4px 8px rgba(0,0,0,0.07), \r\n                0 8px 16px rgba(0,0,0,0.07),\r\n                0 16px 32px rgba(0,0,0,0.07), \r\n                0 32px 64px rgba(0,0,0,0.07);\r\n}\r\n\r\n#img-table {\r\n    width: 100%;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainContactComponent": () => (/* binding */ mainContactComponent)
/* harmony export */ });
function mainContactComponent() {
    const main = document.createElement("div");
    main.className = "main";
    const block = document.createElement("div");
    block.className = "block";
    const h1MainText = document.createElement("h1");
    h1MainText.textContent = "Contact Information";
    block.appendChild(h1MainText);

    const pMainText1 = document.createElement("p");
    pMainText1.textContent = "Phone: (608) 912-8880";
    block.appendChild(pMainText1);

    const pMainText2 = document.createElement("p");
    pMainText2.textContent = "Address: 4581 Williams Lane, Wichita KS";
    block.appendChild(pMainText2);

    const pMainText3 = document.createElement("p");
    pMainText3.textContent = "Open: Fri-Sat, 18-23";
    block.appendChild(pMainText3);

    main.appendChild(block);
    return main;
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainHomeComponent": () => (/* binding */ mainHomeComponent)
/* harmony export */ });
/* harmony import */ var _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pizza.jpg */ "./src/pizza.jpg");


function mainHomeComponent() {
    const main = document.createElement("div");
    main.className = "main";

    const block = document.createElement("div");
    block.className = "block";
    const h1MainText = document.createElement("h1");
    h1MainText.textContent = "Vestibulum non auctor felis.";
    block.appendChild(h1MainText);

    const blockImage = document.createElement("div");
    blockImage.className = "blockImage";
    const imagePizza = new Image();
    imagePizza.src = _pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
    block.appendChild(imagePizza);


    const pMainText1 = document.createElement("p");
    pMainText1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    block.appendChild(pMainText1);

    const pMainText2 = document.createElement("p");
    pMainText2.textContent = "Morbi quis consequat velit, vel consequat odio. In ac vestibulum lacus, sit amet sollicitudin ipsum. Pellentesque vel sollicitudin libero. Quisque tempus sem est, et euismod metus euismod ut. Sed ut eros enim. Etiam interdum turpis tortor, et lobortis felis gravida et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse vitae neque sollicitudin, rutrum nisl.";
    block.appendChild(pMainText2);
    

    const pMainText3 = document.createElement("p");
    pMainText3.textContent = "-Noelle Lucas";
    block.appendChild(pMainText3);
    main.appendChild(block);
    return main;
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainMenuComponent": () => (/* binding */ mainMenuComponent)
/* harmony export */ });
function mainMenuComponent() {
    const main = document.createElement("div");
    main.className = "main";

    const hr = document.createElement("hr");
    hr.className = "menuHr";


    const block = document.createElement("div");
    block.className = "block";

    const h1MainText = document.createElement("h1");
    h1MainText.className = "menuTitle";
    h1MainText.textContent = "Menu";
    block.appendChild(h1MainText);
    block.appendChild(hr.cloneNode());


    const h1MenuItem1 = document.createElement("h1");
    h1MenuItem1.textContent = "Maecenas facilisis";
    block.appendChild(h1MenuItem1);
    const pMenuItem1Desc = document.createElement("p");
    pMenuItem1Desc.textContent = "Morbi volutpat velit at sem venenatis consectetur. Praesent ut vehicula nunc, non dictum lacus. Aenean ultrices, massa ac blandit fermentum.";
    block.appendChild(pMenuItem1Desc);
    const pMenuItem1Price = document.createElement("h1");
    pMenuItem1Price.textContent = "35€";
    block.appendChild(pMenuItem1Price);
    block.appendChild(hr.cloneNode());


    const h1MenuItem2 = document.createElement("h1");
    h1MenuItem2.textContent = "Proin vestibulum";
    block.appendChild(h1MenuItem2);

    const pMenuItem2Desc = document.createElement("p");
    pMenuItem2Desc.textContent = "Nulla facilisi. In maximus odio nibh, sed feugiat justo elementum non. Aliquam vitae interdum erat, in accumsan velit. Suspendisse ultrices.";
    block.appendChild(pMenuItem2Desc);
    const pMenuItem2Price = document.createElement("h1");
    pMenuItem2Price.textContent = "20€";
    block.appendChild(pMenuItem2Price);

    block.appendChild(hr.cloneNode());


    const h1MenuItem3 = document.createElement("h1");
    h1MenuItem3.textContent = "Morbi pharetra";
    block.appendChild(h1MenuItem3);

    const pMenuItem3Desc = document.createElement("p");
    pMenuItem3Desc.textContent = "Quisque faucibus, arcu sed iaculis hendrerit, diam nibh faucibus neque, vel pretium diam dolor quis odio. Donec sed nisi ultricies.";
    block.appendChild(pMenuItem3Desc);
    const pMenuItem3Price = document.createElement("h1");
    pMenuItem3Price.textContent = "55€";
    block.appendChild(pMenuItem3Price);

    block.appendChild(hr.cloneNode());




    main.appendChild(block);
    return main;
}



/***/ }),

/***/ "./src/Quicksand-Bold.ttf":
/*!********************************!*\
  !*** ./src/Quicksand-Bold.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4c3d23174e1f233b946d.ttf";

/***/ }),

/***/ "./src/Quicksand-Medium.ttf":
/*!**********************************!*\
  !*** ./src/Quicksand-Medium.ttf ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb896a79553a58953cbf.ttf";

/***/ }),

/***/ "./src/Quicksand-Regular.ttf":
/*!***********************************!*\
  !*** ./src/Quicksand-Regular.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "109d09e5f7c827d891ab.ttf";

/***/ }),

/***/ "./src/favicon.svg":
/*!*************************!*\
  !*** ./src/favicon.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8660b7161bbcc5a1ac91.svg";

/***/ }),

/***/ "./src/pizza.jpg":
/*!***********************!*\
  !*** ./src/pizza.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48e7ae3c23a6963a449b.jpg";

/***/ }),

/***/ "./src/restaurant-table.jpg":
/*!**********************************!*\
  !*** ./src/restaurant-table.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4e1989ee1338f275d04e.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _favicon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./favicon.svg */ "./src/favicon.svg");

 





function initHome() {
    const favicon = document.createElement("link");
    favicon.setAttribute("rel", "icon");
    favicon.setAttribute("href", _favicon_svg__WEBPACK_IMPORTED_MODULE_4__);
    document.head.appendChild(favicon);

    const content = document.querySelector("#content");
    
    const header = document.createElement("div");
    header.className = "header";

    const h1HeaderTitle = document.createElement("h1");
    h1HeaderTitle.className = "headerTitle";
    h1HeaderTitle.textContent = "Candle";
    header.appendChild(h1HeaderTitle);

    const divHeaderMenu = document.createElement("div");
    divHeaderMenu.className = "menu";

    const divDivider = document.createElement("div");
    divDivider.className = "divider";
    divHeaderMenu.appendChild(divDivider.cloneNode());

    const divHeaderMenuHome = document.createElement("div");
    divHeaderMenuHome.className = "menuItem";
    divHeaderMenuHome.id = "menuHome";
    const pHeaderMenuHome = document.createElement("p");
    pHeaderMenuHome.textContent = "Home";
    pHeaderMenuHome.className = "menuItemText";
    divHeaderMenuHome.appendChild(pHeaderMenuHome);
    divHeaderMenu.appendChild(divHeaderMenuHome);
    divHeaderMenu.appendChild(divDivider.cloneNode());
    

    const divHeaderMenuMenu = document.createElement("div");
    divHeaderMenuMenu.className = "menuItem";
    divHeaderMenuMenu.id = "menuMenu"
    const pHeaderMenuMenu = document.createElement("p");
    pHeaderMenuMenu.textContent = "Menu";
    pHeaderMenuMenu.className = "menuItemText";
    divHeaderMenuMenu.appendChild(pHeaderMenuMenu);
    divHeaderMenu.appendChild(divHeaderMenuMenu);
    divHeaderMenu.appendChild(divDivider.cloneNode());

    const divHeaderMenuContact = document.createElement("div");
    divHeaderMenuContact.className = "menuItem";
    divHeaderMenuContact.id = "menuContact";
    const pHeaderMenuContact = document.createElement("p");
    pHeaderMenuContact.textContent = "Contact";
    pHeaderMenuContact.className = "menuItemText";
    divHeaderMenuContact.appendChild(pHeaderMenuContact);    
    divHeaderMenu.appendChild(divHeaderMenuContact);

    header.appendChild(divHeaderMenu);
    
    content.appendChild(header);



    content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__.mainHomeComponent)());


    const footer = document.createElement("div");
    footer.className = "footer";
    const pFooterText = document.createElement("p");
    pFooterText.className = "footerText";
    pFooterText.textContent = "Developed by topihenrik";
    footer.appendChild(pFooterText);
    content.appendChild(footer);

    return;
}

function menuClickListener() {
    const menuItems = document.querySelectorAll(".menuItem");
    menuItems.forEach(item => item.addEventListener("click", function(e) {
        console.log(item.id);
        const divContent = document.querySelector("#content");
        const divMain = document.querySelector(".main");
        const divFooter = document.querySelector(".footer");
        if (item.id == "menuHome") {
            divMain.remove();
            divContent.insertBefore((0,_home__WEBPACK_IMPORTED_MODULE_1__.mainHomeComponent)(), divFooter);
        } else if (item.id == "menuMenu") {
            divMain.remove();
            divContent.insertBefore((0,_menu__WEBPACK_IMPORTED_MODULE_2__.mainMenuComponent)(), divFooter);
        } else if (item.id == "menuContact") {
            divMain.remove();
            divContent.insertBefore((0,_contact__WEBPACK_IMPORTED_MODULE_3__.mainContactComponent)(), divFooter);
        }

    }));
}

initHome();
menuClickListener();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxpQ0FBaUMseUNBQVc7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLHdEQUFpQjtBQUNyRCxVQUFVO0FBQ1Y7QUFDQSxvQ0FBb0Msd0RBQWlCO0FBQ3JELFVBQVU7QUFDVjtBQUNBLG9DQUFvQyw4REFBb0I7QUFDeEQ7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1F1aWNrc2FuZC1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vUXVpY2tzYW5kLU1lZGl1bS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL1F1aWNrc2FuZC1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vcmVzdGF1cmFudC10YWJsZS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmQtUmVndWxhclxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZC1NZWRpdW1cXFwiO1xcclxcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmQtQm9sZFxcXCI7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbmh0bWwsIGJvZHksICNjb250ZW50IHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kLUJvbGRcXFwiO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZFxcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgXFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIsIC5tYWluLCAuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciwgLmZvb3RlciB7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ODE4MUZcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBib3JkZXItYm90dG9tOiBibGFjayBzb2xpZCAzcHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXIge1xcclxcbiAgICBib3JkZXItdG9wOiBibGFjayBzb2xpZCAycHg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uZm9vdGVyVGV4dCB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlclRpdGxlLCAubWVudUl0ZW1UZXh0IHtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2sge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZFNEUzO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW1UZXh0IHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogZ2FwOiAyMCU7ICovXFxyXFxufVxcclxcblxcclxcbi5kaXZpZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IGJsYWNrIHNvbGlkIDJweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVJdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIC8qIGJvcmRlcjogYmxhY2sgc29saWQgM3B4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiBub25lOyAqL1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW06aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0UxMTE2O1xcclxcbn1cXHJcXG5cXHJcXG4ubWFpbiB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDYwMHB4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kLU1lZGl1bVxcXCI7XFxyXFxufVxcclxcblxcclxcbi5tZW51VGl0bGUge1xcclxcbiAgICBmb250LXNpemU6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51SHIge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBtYXJnaW46IC0ycHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2sgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2NrSW1hZ2Uge1xcclxcbiAgICBib3JkZXI6ICM1ODE4MUYgc29saWQgNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2t7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogIzU4MTgxRiBzb2xpZCA1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMDcpLCBcXHJcXG4gICAgICAgICAgICAgICAgMCAycHggNHB4IHJnYmEoMCwwLDAsMC4wNyksIFxcclxcbiAgICAgICAgICAgICAgICAwIDRweCA4cHggcmdiYSgwLDAsMCwwLjA3KSwgXFxyXFxuICAgICAgICAgICAgICAgIDAgOHB4IDE2cHggcmdiYSgwLDAsMCwwLjA3KSxcXHJcXG4gICAgICAgICAgICAgICAgMCAxNnB4IDMycHggcmdiYSgwLDAsMCwwLjA3KSwgXFxyXFxuICAgICAgICAgICAgICAgIDAgMzJweCA2NHB4IHJnYmEoMCwwLDAsMC4wNyk7XFxyXFxufVxcclxcblxcclxcbiNpbWctdGFibGUge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGdDQUFnQztJQUNoQywrREFBc0Q7QUFDMUQ7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsK0RBQXFEO0FBQ3pEOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLCtEQUFtRDtBQUN2RDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0kseURBQStDO0lBQy9DLHNCQUFzQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1o7O3VCQUVtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixZQUFZO0lBQ1osdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYjs7Ozs7NENBS3dDO0FBQzVDOztBQUVBO0lBQ0ksV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZC1SZWd1bGFyXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4vUXVpY2tzYW5kLVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmQtTWVkaXVtXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4vUXVpY2tzYW5kLU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZC1Cb2xkXFxcIjtcXHJcXG4gICAgc3JjOiB1cmwoJy4vUXVpY2tzYW5kLUJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLCBib2R5LCAjY29udGVudCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZC1Cb2xkXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9yZXN0YXVyYW50LXRhYmxlLmpwZ1xcXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkXFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciwgLm1haW4sIC5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyLCAuZm9vdGVyIHtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU4MTgxRlxcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGJvcmRlci1ib3R0b206IGJsYWNrIHNvbGlkIDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3RlciB7XFxyXFxuICAgIGJvcmRlci10b3A6IGJsYWNrIHNvbGlkIDJweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXJUZXh0IHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyVGl0bGUsIC5tZW51SXRlbVRleHQge1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXJUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9jayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkU0RTM7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbVRleHQge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAvKiBnYXA6IDIwJTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmRpdmlkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogYmxhY2sgc29saWQgMnB4O1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogYm9yZGVyOiBibGFjayBzb2xpZCAzcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIGJvcmRlci10b3A6IG5vbmU7ICovXFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5tZW51SXRlbTpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRTExMTY7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNjAwcHg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmQtTWVkaXVtXFxcIjtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVUaXRsZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVIciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICAgIG1hcmdpbjogLTJweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5ibG9jayBpbWcge1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4uYmxvY2tJbWFnZSB7XFxyXFxuICAgIGJvcmRlcjogIzU4MTgxRiBzb2xpZCA1cHg7XFxyXFxufVxcclxcblxcclxcbi5ibG9ja3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAjNTgxODFGIHNvbGlkIDVweDtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4wNyksIFxcclxcbiAgICAgICAgICAgICAgICAwIDJweCA0cHggcmdiYSgwLDAsMCwwLjA3KSwgXFxyXFxuICAgICAgICAgICAgICAgIDAgNHB4IDhweCByZ2JhKDAsMCwwLDAuMDcpLCBcXHJcXG4gICAgICAgICAgICAgICAgMCA4cHggMTZweCByZ2JhKDAsMCwwLDAuMDcpLFxcclxcbiAgICAgICAgICAgICAgICAwIDE2cHggMzJweCByZ2JhKDAsMCwwLDAuMDcpLCBcXHJcXG4gICAgICAgICAgICAgICAgMCAzMnB4IDY0cHggcmdiYSgwLDAsMCwwLjA3KTtcXHJcXG59XFxyXFxuXFxyXFxuI2ltZy10YWJsZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gbWFpbkNvbnRhY3RDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW4uY2xhc3NOYW1lID0gXCJtYWluXCI7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBibG9jay5jbGFzc05hbWUgPSBcImJsb2NrXCI7XHJcbiAgICBjb25zdCBoMU1haW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDFNYWluVGV4dC50ZXh0Q29udGVudCA9IFwiQ29udGFjdCBJbmZvcm1hdGlvblwiO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaDFNYWluVGV4dCk7XHJcblxyXG4gICAgY29uc3QgcE1haW5UZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcE1haW5UZXh0MS50ZXh0Q29udGVudCA9IFwiUGhvbmU6ICg2MDgpIDkxMi04ODgwXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChwTWFpblRleHQxKTtcclxuXHJcbiAgICBjb25zdCBwTWFpblRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwTWFpblRleHQyLnRleHRDb250ZW50ID0gXCJBZGRyZXNzOiA0NTgxIFdpbGxpYW1zIExhbmUsIFdpY2hpdGEgS1NcIjtcclxuICAgIGJsb2NrLmFwcGVuZENoaWxkKHBNYWluVGV4dDIpO1xyXG5cclxuICAgIGNvbnN0IHBNYWluVGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBNYWluVGV4dDMudGV4dENvbnRlbnQgPSBcIk9wZW46IEZyaS1TYXQsIDE4LTIzXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChwTWFpblRleHQzKTtcclxuXHJcbiAgICBtYWluLmFwcGVuZENoaWxkKGJsb2NrKTtcclxuICAgIHJldHVybiBtYWluO1xyXG59XHJcblxyXG5leHBvcnQge21haW5Db250YWN0Q29tcG9uZW50fTsiLCJpbXBvcnQgcGl6emFJY29uIGZyb20gXCIuL3BpenphLmpwZ1wiO1xyXG5cclxuZnVuY3Rpb24gbWFpbkhvbWVDb21wb25lbnQoKSB7XHJcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1haW4uY2xhc3NOYW1lID0gXCJtYWluXCI7XHJcblxyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmxvY2suY2xhc3NOYW1lID0gXCJibG9ja1wiO1xyXG4gICAgY29uc3QgaDFNYWluVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxTWFpblRleHQudGV4dENvbnRlbnQgPSBcIlZlc3RpYnVsdW0gbm9uIGF1Y3RvciBmZWxpcy5cIjtcclxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGgxTWFpblRleHQpO1xyXG5cclxuICAgIGNvbnN0IGJsb2NrSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmxvY2tJbWFnZS5jbGFzc05hbWUgPSBcImJsb2NrSW1hZ2VcIjtcclxuICAgIGNvbnN0IGltYWdlUGl6emEgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGltYWdlUGl6emEuc3JjID0gcGl6emFJY29uO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaW1hZ2VQaXp6YSk7XHJcblxyXG5cclxuICAgIGNvbnN0IHBNYWluVGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBNYWluVGV4dDEudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkbyBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLiBVdCBlbmltIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dCBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LiBEdWlzIGF1dGUgaXJ1cmUgZG9sb3IgaW4gcmVwcmVoZW5kZXJpdCBpbiB2b2x1cHRhdGUgdmVsaXQgZXNzZSBjaWxsdW0gZG9sb3JlIGV1IGZ1Z2lhdCBudWxsYSBwYXJpYXR1ci4gRXhjZXB0ZXVyIHNpbnQgb2NjYWVjYXQgY3VwaWRhdGF0IG5vbiBwcm9pZGVudCwgc3VudCBpbiBjdWxwYSBxdWkgb2ZmaWNpYSBkZXNlcnVudCBtb2xsaXQgYW5pbSBpZCBlc3QgbGFib3J1bS5cIjtcclxuICAgIGJsb2NrLmFwcGVuZENoaWxkKHBNYWluVGV4dDEpO1xyXG5cclxuICAgIGNvbnN0IHBNYWluVGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBNYWluVGV4dDIudGV4dENvbnRlbnQgPSBcIk1vcmJpIHF1aXMgY29uc2VxdWF0IHZlbGl0LCB2ZWwgY29uc2VxdWF0IG9kaW8uIEluIGFjIHZlc3RpYnVsdW0gbGFjdXMsIHNpdCBhbWV0IHNvbGxpY2l0dWRpbiBpcHN1bS4gUGVsbGVudGVzcXVlIHZlbCBzb2xsaWNpdHVkaW4gbGliZXJvLiBRdWlzcXVlIHRlbXB1cyBzZW0gZXN0LCBldCBldWlzbW9kIG1ldHVzIGV1aXNtb2QgdXQuIFNlZCB1dCBlcm9zIGVuaW0uIEV0aWFtIGludGVyZHVtIHR1cnBpcyB0b3J0b3IsIGV0IGxvYm9ydGlzIGZlbGlzIGdyYXZpZGEgZXQuIFZlc3RpYnVsdW0gYW50ZSBpcHN1bSBwcmltaXMgaW4gZmF1Y2lidXMgb3JjaSBsdWN0dXMgZXQgdWx0cmljZXMgcG9zdWVyZSBjdWJpbGlhIGN1cmFlOyBTdXNwZW5kaXNzZSB2aXRhZSBuZXF1ZSBzb2xsaWNpdHVkaW4sIHJ1dHJ1bSBuaXNsLlwiO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQocE1haW5UZXh0Mik7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBwTWFpblRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwTWFpblRleHQzLnRleHRDb250ZW50ID0gXCItTm9lbGxlIEx1Y2FzXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChwTWFpblRleHQzKTtcclxuICAgIG1haW4uYXBwZW5kQ2hpbGQoYmxvY2spO1xyXG4gICAgcmV0dXJuIG1haW47XHJcbn1cclxuXHJcbmV4cG9ydCB7bWFpbkhvbWVDb21wb25lbnR9OyIsImZ1bmN0aW9uIG1haW5NZW51Q29tcG9uZW50KCkge1xyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtYWluLmNsYXNzTmFtZSA9IFwibWFpblwiO1xyXG5cclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhyXCIpO1xyXG4gICAgaHIuY2xhc3NOYW1lID0gXCJtZW51SHJcIjtcclxuXHJcblxyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgYmxvY2suY2xhc3NOYW1lID0gXCJibG9ja1wiO1xyXG5cclxuICAgIGNvbnN0IGgxTWFpblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoMU1haW5UZXh0LmNsYXNzTmFtZSA9IFwibWVudVRpdGxlXCI7XHJcbiAgICBoMU1haW5UZXh0LnRleHRDb250ZW50ID0gXCJNZW51XCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChoMU1haW5UZXh0KTtcclxuICAgIGJsb2NrLmFwcGVuZENoaWxkKGhyLmNsb25lTm9kZSgpKTtcclxuXHJcblxyXG4gICAgY29uc3QgaDFNZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBoMU1lbnVJdGVtMS50ZXh0Q29udGVudCA9IFwiTWFlY2VuYXMgZmFjaWxpc2lzXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChoMU1lbnVJdGVtMSk7XHJcbiAgICBjb25zdCBwTWVudUl0ZW0xRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcE1lbnVJdGVtMURlc2MudGV4dENvbnRlbnQgPSBcIk1vcmJpIHZvbHV0cGF0IHZlbGl0IGF0IHNlbSB2ZW5lbmF0aXMgY29uc2VjdGV0dXIuIFByYWVzZW50IHV0IHZlaGljdWxhIG51bmMsIG5vbiBkaWN0dW0gbGFjdXMuIEFlbmVhbiB1bHRyaWNlcywgbWFzc2EgYWMgYmxhbmRpdCBmZXJtZW50dW0uXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChwTWVudUl0ZW0xRGVzYyk7XHJcbiAgICBjb25zdCBwTWVudUl0ZW0xUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XHJcbiAgICBwTWVudUl0ZW0xUHJpY2UudGV4dENvbnRlbnQgPSBcIjM14oKsXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChwTWVudUl0ZW0xUHJpY2UpO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQoaHIuY2xvbmVOb2RlKCkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBoMU1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICAgIGgxTWVudUl0ZW0yLnRleHRDb250ZW50ID0gXCJQcm9pbiB2ZXN0aWJ1bHVtXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChoMU1lbnVJdGVtMik7XHJcblxyXG4gICAgY29uc3QgcE1lbnVJdGVtMkRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBNZW51SXRlbTJEZXNjLnRleHRDb250ZW50ID0gXCJOdWxsYSBmYWNpbGlzaS4gSW4gbWF4aW11cyBvZGlvIG5pYmgsIHNlZCBmZXVnaWF0IGp1c3RvIGVsZW1lbnR1bSBub24uIEFsaXF1YW0gdml0YWUgaW50ZXJkdW0gZXJhdCwgaW4gYWNjdW1zYW4gdmVsaXQuIFN1c3BlbmRpc3NlIHVsdHJpY2VzLlwiO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQocE1lbnVJdGVtMkRlc2MpO1xyXG4gICAgY29uc3QgcE1lbnVJdGVtMlByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgcE1lbnVJdGVtMlByaWNlLnRleHRDb250ZW50ID0gXCIyMOKCrFwiO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQocE1lbnVJdGVtMlByaWNlKTtcclxuXHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChoci5jbG9uZU5vZGUoKSk7XHJcblxyXG5cclxuICAgIGNvbnN0IGgxTWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDFNZW51SXRlbTMudGV4dENvbnRlbnQgPSBcIk1vcmJpIHBoYXJldHJhXCI7XHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChoMU1lbnVJdGVtMyk7XHJcblxyXG4gICAgY29uc3QgcE1lbnVJdGVtM0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBNZW51SXRlbTNEZXNjLnRleHRDb250ZW50ID0gXCJRdWlzcXVlIGZhdWNpYnVzLCBhcmN1IHNlZCBpYWN1bGlzIGhlbmRyZXJpdCwgZGlhbSBuaWJoIGZhdWNpYnVzIG5lcXVlLCB2ZWwgcHJldGl1bSBkaWFtIGRvbG9yIHF1aXMgb2Rpby4gRG9uZWMgc2VkIG5pc2kgdWx0cmljaWVzLlwiO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQocE1lbnVJdGVtM0Rlc2MpO1xyXG4gICAgY29uc3QgcE1lbnVJdGVtM1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgcE1lbnVJdGVtM1ByaWNlLnRleHRDb250ZW50ID0gXCI1NeKCrFwiO1xyXG4gICAgYmxvY2suYXBwZW5kQ2hpbGQocE1lbnVJdGVtM1ByaWNlKTtcclxuXHJcbiAgICBibG9jay5hcHBlbmRDaGlsZChoci5jbG9uZU5vZGUoKSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgbWFpbi5hcHBlbmRDaGlsZChibG9jayk7XHJcbiAgICByZXR1cm4gbWFpbjtcclxufVxyXG5cclxuZXhwb3J0IHsgbWFpbk1lbnVDb21wb25lbnQgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCB7bWFpbkhvbWVDb21wb25lbnR9IGZyb20gXCIuL2hvbWVcIjsgXHJcbmltcG9ydCB7bWFpbk1lbnVDb21wb25lbnR9IGZyb20gXCIuL21lbnVcIjtcclxuaW1wb3J0IHttYWluQ29udGFjdENvbXBvbmVudH0gZnJvbSBcIi4vY29udGFjdFwiO1xyXG5pbXBvcnQgZmF2aWNvbkRhdGEgZnJvbSBcIi4vZmF2aWNvbi5zdmdcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBpbml0SG9tZSgpIHtcclxuICAgIGNvbnN0IGZhdmljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcclxuICAgIGZhdmljb24uc2V0QXR0cmlidXRlKFwicmVsXCIsIFwiaWNvblwiKTtcclxuICAgIGZhdmljb24uc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBmYXZpY29uRGF0YSk7XHJcbiAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGZhdmljb24pO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcbiAgICBcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcclxuXHJcbiAgICBjb25zdCBoMUhlYWRlclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gICAgaDFIZWFkZXJUaXRsZS5jbGFzc05hbWUgPSBcImhlYWRlclRpdGxlXCI7XHJcbiAgICBoMUhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJDYW5kbGVcIjtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoMUhlYWRlclRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBkaXZIZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpdkhlYWRlck1lbnUuY2xhc3NOYW1lID0gXCJtZW51XCI7XHJcblxyXG4gICAgY29uc3QgZGl2RGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZEaXZpZGVyLmNsYXNzTmFtZSA9IFwiZGl2aWRlclwiO1xyXG4gICAgZGl2SGVhZGVyTWVudS5hcHBlbmRDaGlsZChkaXZEaXZpZGVyLmNsb25lTm9kZSgpKTtcclxuXHJcbiAgICBjb25zdCBkaXZIZWFkZXJNZW51SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZIZWFkZXJNZW51SG9tZS5jbGFzc05hbWUgPSBcIm1lbnVJdGVtXCI7XHJcbiAgICBkaXZIZWFkZXJNZW51SG9tZS5pZCA9IFwibWVudUhvbWVcIjtcclxuICAgIGNvbnN0IHBIZWFkZXJNZW51SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcEhlYWRlck1lbnVIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XHJcbiAgICBwSGVhZGVyTWVudUhvbWUuY2xhc3NOYW1lID0gXCJtZW51SXRlbVRleHRcIjtcclxuICAgIGRpdkhlYWRlck1lbnVIb21lLmFwcGVuZENoaWxkKHBIZWFkZXJNZW51SG9tZSk7XHJcbiAgICBkaXZIZWFkZXJNZW51LmFwcGVuZENoaWxkKGRpdkhlYWRlck1lbnVIb21lKTtcclxuICAgIGRpdkhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoZGl2RGl2aWRlci5jbG9uZU5vZGUoKSk7XHJcbiAgICBcclxuXHJcbiAgICBjb25zdCBkaXZIZWFkZXJNZW51TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZIZWFkZXJNZW51TWVudS5jbGFzc05hbWUgPSBcIm1lbnVJdGVtXCI7XHJcbiAgICBkaXZIZWFkZXJNZW51TWVudS5pZCA9IFwibWVudU1lbnVcIlxyXG4gICAgY29uc3QgcEhlYWRlck1lbnVNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwSGVhZGVyTWVudU1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcclxuICAgIHBIZWFkZXJNZW51TWVudS5jbGFzc05hbWUgPSBcIm1lbnVJdGVtVGV4dFwiO1xyXG4gICAgZGl2SGVhZGVyTWVudU1lbnUuYXBwZW5kQ2hpbGQocEhlYWRlck1lbnVNZW51KTtcclxuICAgIGRpdkhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoZGl2SGVhZGVyTWVudU1lbnUpO1xyXG4gICAgZGl2SGVhZGVyTWVudS5hcHBlbmRDaGlsZChkaXZEaXZpZGVyLmNsb25lTm9kZSgpKTtcclxuXHJcbiAgICBjb25zdCBkaXZIZWFkZXJNZW51Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXZIZWFkZXJNZW51Q29udGFjdC5jbGFzc05hbWUgPSBcIm1lbnVJdGVtXCI7XHJcbiAgICBkaXZIZWFkZXJNZW51Q29udGFjdC5pZCA9IFwibWVudUNvbnRhY3RcIjtcclxuICAgIGNvbnN0IHBIZWFkZXJNZW51Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcEhlYWRlck1lbnVDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XHJcbiAgICBwSGVhZGVyTWVudUNvbnRhY3QuY2xhc3NOYW1lID0gXCJtZW51SXRlbVRleHRcIjtcclxuICAgIGRpdkhlYWRlck1lbnVDb250YWN0LmFwcGVuZENoaWxkKHBIZWFkZXJNZW51Q29udGFjdCk7ICAgIFxyXG4gICAgZGl2SGVhZGVyTWVudS5hcHBlbmRDaGlsZChkaXZIZWFkZXJNZW51Q29udGFjdCk7XHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdkhlYWRlck1lbnUpO1xyXG4gICAgXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG5cclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Ib21lQ29tcG9uZW50KCkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyXCI7XHJcbiAgICBjb25zdCBwRm9vdGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcEZvb3RlclRleHQuY2xhc3NOYW1lID0gXCJmb290ZXJUZXh0XCI7XHJcbiAgICBwRm9vdGVyVGV4dC50ZXh0Q29udGVudCA9IFwiRGV2ZWxvcGVkIGJ5IHRvcGloZW5yaWtcIjtcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChwRm9vdGVyVGV4dCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgcmV0dXJuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBtZW51Q2xpY2tMaXN0ZW5lcigpIHtcclxuICAgIGNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWVudUl0ZW1cIik7XHJcbiAgICBtZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmlkKTtcclxuICAgICAgICBjb25zdCBkaXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xyXG4gICAgICAgIGNvbnN0IGRpdk1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XHJcbiAgICAgICAgY29uc3QgZGl2Rm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXJcIik7XHJcbiAgICAgICAgaWYgKGl0ZW0uaWQgPT0gXCJtZW51SG9tZVwiKSB7XHJcbiAgICAgICAgICAgIGRpdk1haW4ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGRpdkNvbnRlbnQuaW5zZXJ0QmVmb3JlKG1haW5Ib21lQ29tcG9uZW50KCksIGRpdkZvb3Rlcik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLmlkID09IFwibWVudU1lbnVcIikge1xyXG4gICAgICAgICAgICBkaXZNYWluLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkaXZDb250ZW50Lmluc2VydEJlZm9yZShtYWluTWVudUNvbXBvbmVudCgpLCBkaXZGb290ZXIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5pZCA9PSBcIm1lbnVDb250YWN0XCIpIHtcclxuICAgICAgICAgICAgZGl2TWFpbi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZGl2Q29udGVudC5pbnNlcnRCZWZvcmUobWFpbkNvbnRhY3RDb21wb25lbnQoKSwgZGl2Rm9vdGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSkpO1xyXG59XHJcblxyXG5pbml0SG9tZSgpO1xyXG5tZW51Q2xpY2tMaXN0ZW5lcigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==