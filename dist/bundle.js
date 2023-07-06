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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Roboto-Regular.ttf */ "./src/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Roboto-Bold.ttf */ "./src/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Roboto-BoldItalic.ttf */ "./src/Roboto-BoldItalic.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-dark: #68abb4;
  --primary-light: #c0c0c0;
  --secondary-light: #fefefe;
  }

@font-face {
  font-family: Roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: Roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  font-weight: bold;
}

@font-face {
  font-family: Roboto;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  font-weight: bold, italic;
}

html {
  position: relative;
  min-height: 100%;
  }

body {
  background: linear-gradient(310deg, #273035 10%, #475761);
  color: var(--primary-dark);
  font-family: 'Roboto', sans-serif;
  line-height: 1.6;
  margin: 0;
  /*margin-bottom: 100px;*/
  }

h4 {
  font-size: 1.1em;
  margin: 8px 10px;
  }

input {
  padding: 4px;
  width: 80%;
  margin: 5px;
}


#title-holder {
  background-color: var(--primary-dark);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1.65em;
  height: 7em;
  }

#title {
  color: #ffffff;
  margin-left: 1em;
  }


/*Modal*/
#modal{
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgb(0,0,0,0.4);
  
}

label[for=input-finished]{
  display: inline-block;
  padding: 0px;
  width: 140px;
  margin: 0px;
}

#input-finished{
  padding: 0px;
  width: 45px;
  margin: 0px;
}

#book-entry {
  background-color: #6E7887;
  color: white;
  font-size: 1.12em;
  margin: 10% auto;
  padding: 20px;
  width: 20em;
  min-height: 21em;
  border-radius: 5px;
}


modal-opener {
  font-size: 8em;
  display: flex;
  flex-direction: column;
  width: 2.19em;
  height: 2.76em;
  margin: 15px 15px;
  background: #ffffff00;
  color: rgb(255, 255, 255);
  padding-top: 5.45%;
  border: 5px solid rgba(24, 21, 21, 0);
  border-radius: 5px;
  align-self: center;
  position: relative;
  box-shadow: 0 0 0 5px rgb(255, 255, 255);
  opacity: 0.5;
  transition: transform 250ms, opacity 400ms;
}

modal-opener:hover {
  /*box-shadow: 0 0 0 5px rgb(255, 255, 255), 6px 7px 2px 1px rgba(7, 7, 7, 0.377);
  text-shadow: 6px 7px 2px 1px rgba(7, 7, 7, 0.377);*/
  transform: scale(1.02);
  opacity: 1;

}


#catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0px 1em;
}

.book-card {
  display: flex;
  flex-direction: column;
  width: 20em;
  min-height: 23em;
  margin: 15px 15px;
  background: linear-gradient(50deg, #2f7f9e 10%, #75ddd8);
  color: var(--secondary-light);
  padding: 0px;
  border-radius: 5px;
  position: relative;
  box-shadow: 3px 4px 2px 1px rgba(31, 30, 30, 0.281);
}

.card-header {
  display: flex;
  align-content: stretch;
  justify-content: space-between;
  background-color: #e7e7e721;
  border-radius: 5px 5px 0px 0px;
  min-height: 5em;
}

.author-name {
  margin-top: 1em;
}

.has-read {
  margin: 8px 10px;
  display: flex;
}

.has-read > h4 {
  margin: 0px;
}

.switch {
  position: relative;
  display: inline-block;
  margin-left: 8px;
  margin-top: 4px;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .3s;
  transition: .3s;
  border-radius: 22px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .3s;
  transition: .3s;
  border-radius: 50%;
}


input:checked + .slider {
  background-color: #834444;
}

input:focus + .slider {
  box-shadow: 0 0 1px #1160bb;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.book-title {
  color: #ffffff;
  text-shadow: 1px 2px #2e2e2e6e;
  font-size: 1.7em;
  font-style: italic;
  font-weight: bold;
  margin:auto;
  text-align: center;
  height: auto;
  padding: 8px;
  line-height: 1.2em;
}

.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2em;
  width: 100%;
  background-color: #753A3A;
  border-radius: 0px 0px 5px 5px;
  position: absolute;
  bottom: 0px;
}

.delete-img {
  height: 1em;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --primary-dark: #68abb4;\n  --primary-light: #c0c0c0;\n  --secondary-light: #fefefe;\n  }\n\n@font-face {\n  font-family: Roboto;\n  src: url(Roboto-Regular.ttf);\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(Roboto-Bold.ttf);\n  font-weight: bold;\n}\n\n@font-face {\n  font-family: Roboto;\n  src: url(Roboto-BoldItalic.ttf);\n  font-weight: bold, italic;\n}\n\nhtml {\n  position: relative;\n  min-height: 100%;\n  }\n\nbody {\n  background: linear-gradient(310deg, #273035 10%, #475761);\n  color: var(--primary-dark);\n  font-family: 'Roboto', sans-serif;\n  line-height: 1.6;\n  margin: 0;\n  /*margin-bottom: 100px;*/\n  }\n\nh4 {\n  font-size: 1.1em;\n  margin: 8px 10px;\n  }\n\ninput {\n  padding: 4px;\n  width: 80%;\n  margin: 5px;\n}\n\n\n#title-holder {\n  background-color: var(--primary-dark);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  font-size: 1.65em;\n  height: 7em;\n  }\n\n#title {\n  color: #ffffff;\n  margin-left: 1em;\n  }\n\n\n/*Modal*/\n#modal{\n  display: none;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgb(0,0,0,0.4);\n  \n}\n\nlabel[for=input-finished]{\n  display: inline-block;\n  padding: 0px;\n  width: 140px;\n  margin: 0px;\n}\n\n#input-finished{\n  padding: 0px;\n  width: 45px;\n  margin: 0px;\n}\n\n#book-entry {\n  background-color: #6E7887;\n  color: white;\n  font-size: 1.12em;\n  margin: 10% auto;\n  padding: 20px;\n  width: 20em;\n  min-height: 21em;\n  border-radius: 5px;\n}\n\n\nmodal-opener {\n  font-size: 8em;\n  display: flex;\n  flex-direction: column;\n  width: 2.19em;\n  height: 2.76em;\n  margin: 15px 15px;\n  background: #ffffff00;\n  color: rgb(255, 255, 255);\n  padding-top: 5.45%;\n  border: 5px solid rgba(24, 21, 21, 0);\n  border-radius: 5px;\n  align-self: center;\n  position: relative;\n  box-shadow: 0 0 0 5px rgb(255, 255, 255);\n  opacity: 0.5;\n  transition: transform 250ms, opacity 400ms;\n}\n\nmodal-opener:hover {\n  /*box-shadow: 0 0 0 5px rgb(255, 255, 255), 6px 7px 2px 1px rgba(7, 7, 7, 0.377);\n  text-shadow: 6px 7px 2px 1px rgba(7, 7, 7, 0.377);*/\n  transform: scale(1.02);\n  opacity: 1;\n\n}\n\n\n#catalog {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  padding: 0px 1em;\n}\n\n.book-card {\n  display: flex;\n  flex-direction: column;\n  width: 20em;\n  min-height: 23em;\n  margin: 15px 15px;\n  background: linear-gradient(50deg, #2f7f9e 10%, #75ddd8);\n  color: var(--secondary-light);\n  padding: 0px;\n  border-radius: 5px;\n  position: relative;\n  box-shadow: 3px 4px 2px 1px rgba(31, 30, 30, 0.281);\n}\n\n.card-header {\n  display: flex;\n  align-content: stretch;\n  justify-content: space-between;\n  background-color: #e7e7e721;\n  border-radius: 5px 5px 0px 0px;\n  min-height: 5em;\n}\n\n.author-name {\n  margin-top: 1em;\n}\n\n.has-read {\n  margin: 8px 10px;\n  display: flex;\n}\n\n.has-read > h4 {\n  margin: 0px;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  margin-left: 8px;\n  margin-top: 4px;\n  width: 40px;\n  height: 20px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .3s;\n  transition: .3s;\n  border-radius: 22px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 15px;\n  width: 15px;\n  left: 3px;\n  bottom: 3px;\n  background-color: white;\n  -webkit-transition: .3s;\n  transition: .3s;\n  border-radius: 50%;\n}\n\n\ninput:checked + .slider {\n  background-color: #834444;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #1160bb;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(20px);\n  -ms-transform: translateX(20px);\n  transform: translateX(20px);\n}\n\n.book-title {\n  color: #ffffff;\n  text-shadow: 1px 2px #2e2e2e6e;\n  font-size: 1.7em;\n  font-style: italic;\n  font-weight: bold;\n  margin:auto;\n  text-align: center;\n  height: auto;\n  padding: 8px;\n  line-height: 1.2em;\n}\n\n.delete {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 2em;\n  width: 100%;\n  background-color: #753A3A;\n  border-radius: 0px 0px 5px 5px;\n  position: absolute;\n  bottom: 0px;\n}\n\n.delete-img {\n  height: 1em;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Book {
    constructor(
        title = 'Empty',
        author = 'Empty',
        pages = '0',
        date = 'Empty',
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.date = date;
        this.isRead = isRead;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Book);

/***/ }),

/***/ "./src/initial-layout.js":
/*!*******************************!*\
  !*** ./src/initial-layout.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const initDOMSetup = () => {
    // Create the modal element
    const modalDiv = document.createElement("div");
    modalDiv.id = "modal";

    // Create the book-entry element
    const bookEntryDiv = document.createElement("div");
    bookEntryDiv.id = "book-entry";

    // Create the input-fields element
    const inputFieldsDiv = document.createElement("div");
    inputFieldsDiv.id = "input-fields";

    // Create the title input field
    const inputTitle = document.createElement("input");
    inputTitle.type = "text";
    inputTitle.id = "input-title";
    inputTitle.name = "input-title";
    inputTitle.placeholder = "Title";
    inputFieldsDiv.appendChild(inputTitle);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the author input field
    const inputAuthor = document.createElement("input");
    inputAuthor.type = "text";
    inputAuthor.id = "input-author";
    inputAuthor.name = "input-author";
    inputAuthor.placeholder = "Author";
    inputFieldsDiv.appendChild(inputAuthor);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the pages input field
    const inputPages = document.createElement("input");
    inputPages.type = "number";
    inputPages.id = "input-pages";
    inputPages.name = "input-pages";
    inputPages.placeholder = "Page count";
    inputPages.setAttribute("oninput", "this.value = this.value.replace(/[^0-9]/g, '').replace(/(\\..*)\\./g,'$1');");
    inputFieldsDiv.appendChild(inputPages);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the date published label
    const datePublishedLabel = document.createElement("label");
    datePublishedLabel.htmlFor = "input-date";
    datePublishedLabel.textContent = "Date published:";
    inputFieldsDiv.appendChild(datePublishedLabel);

    // Create the date published input field
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.id = "input-date";
    inputDate.name = "input-date";
    inputDate.placeholder = "Date published";
    inputFieldsDiv.appendChild(inputDate);
    inputFieldsDiv.appendChild(document.createElement("br"));

    // Create the "Finished reading?" label
    const finishedReadingLabel = document.createElement("label");
    finishedReadingLabel.htmlFor = "input-finished";
    finishedReadingLabel.textContent = "Finished reading?";
    inputFieldsDiv.appendChild(finishedReadingLabel);

    // Create the "Finished reading?" checkbox
    const inputFinished = document.createElement("input");
    inputFinished.type = "checkbox";
    inputFinished.id = "input-finished";
    inputFinished.name = "input-finished";
    inputFieldsDiv.appendChild(inputFinished);

    // Append the input-fields element to the book-entry element
    bookEntryDiv.appendChild(inputFieldsDiv);

    // Create the modal-btn-holder element
    const modalBtnHolderDiv = document.createElement("div");
    modalBtnHolderDiv.id = "modal-btn-holder";

    // Create the "Add Book" button
    const addBtn = document.createElement("button");
    addBtn.name = "add-btn";
    addBtn.type = "button";
    addBtn.id = "add-btn";
    addBtn.className = "button";
    addBtn.textContent = "Add Book";
    modalBtnHolderDiv.appendChild(addBtn);

    // Create the "Cancel" button
    const cancelBtn = document.createElement("button");
    cancelBtn.name = "cancel-btn";
    cancelBtn.id = "cancel-btn";
    cancelBtn.type = "button";
    cancelBtn.className = "button";
    cancelBtn.textContent = "Cancel";
    modalBtnHolderDiv.appendChild(cancelBtn);

    // Append the modal-btn-holder element to the book-entry element
    bookEntryDiv.appendChild(modalBtnHolderDiv);

    // Append the book-entry element to the modal element
    modalDiv.appendChild(bookEntryDiv);

    // Get the catalog element
    const catalogDiv = document.createElement("div");
    catalogDiv.id = "catalog";
    document.body.appendChild(catalogDiv);

    // Create the "Add Book" button in the catalog
    const modalOpenerBtn = document.createElement("button");
    modalOpenerBtn.name = "modal-opener";
    modalOpenerBtn.type = "button";
    modalOpenerBtn.id = "modal-opener";
    modalOpenerBtn.textContent = "+";
    catalogDiv.appendChild(modalOpenerBtn);

    // Append the modal element to the document body
    document.body.appendChild(modalDiv);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initDOMSetup);

/***/ }),

/***/ "./src/Roboto-Bold.ttf":
/*!*****************************!*\
  !*** ./src/Roboto-Bold.ttf ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75371f53f06181df75f1.ttf";

/***/ }),

/***/ "./src/Roboto-BoldItalic.ttf":
/*!***********************************!*\
  !*** ./src/Roboto-BoldItalic.ttf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "60c1f67b002e61ad0fe4.ttf";

/***/ }),

/***/ "./src/Roboto-Regular.ttf":
/*!********************************!*\
  !*** ./src/Roboto-Regular.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book */ "./src/book.js");
/* harmony import */ var _initial_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initial-layout */ "./src/initial-layout.js");





(0,_initial_layout__WEBPACK_IMPORTED_MODULE_2__["default"])();

// Set up data structure

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        if (!this.isInLibrary(newBook)) {
            this.books.push(newBook);
        }
    }

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }

    removeBook(title) {
        this.books = this.books.filter((book) => book.title !== title);
    }

    isInLibrary(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library();

// UI manipulation

const removeBookFromLibrary = (e) => {
    console.log(e.target.closest('.book-card').getAttribute('index'));
    const removedIndex = e.target.closest('.book-card').getAttribute('index');
    const removedBook = library.books.splice(removedIndex, 1);
    e.target.closest('.book-card').remove();
    console.log(library.books);

    const cards = document.getElementsByClassName('book-card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].setAttribute('index', i);
    }

}

const checkboxAlert = (e) => {

    const checkedIndex = e.target.closest('.book-card').getAttribute('index');
    const isCheckedRead = library.books[checkedIndex].isRead;

    if (isCheckedRead == true){
        library.books[checkedIndex].isRead = false;
    }
    else {
        library.books[checkedIndex].isRead = true;
    }
    
    console.log(library.books[checkedIndex].isRead);

}

const addBookToDisplay = (book) => {

    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    catalog.appendChild(bookCard);

    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';
    bookCard.appendChild(cardHeader);

    const title = document.createElement('h4');
    title.className = 'book-title';
    title.innerHTML = book.title;

    const author = document.createElement('h4');
    author.className = 'author-name';
    author.innerHTML = `By: ${book.author}`;

    const pages = document.createElement('h4');
    pages.className = 'page-count';
    pages.innerHTML = `Length: ${book.pages} pages`;

    const date = document.createElement('h4');
    date.className = 'published';
    date.innerHTML = `Published: ${book.date}`;

    const isReadDiv = document.createElement('div');
    isReadDiv.className = 'has-read';

    const isReadText = document.createElement('h4');
    isReadText.innerHTML = 'Finished reading?';
    isReadDiv.appendChild(isReadText);

    const isReadBox = document.createElement('label');
    const isReadSwitch = document.createElement('input');
    const isReadSlider = document.createElement('span');
    isReadBox.className = 'switch';
    isReadSlider.className = 'slider';
    isReadSwitch.setAttribute('type', 'checkbox');
    isReadSwitch.addEventListener('click', checkboxAlert);
    isReadBox.appendChild(isReadSwitch);
    isReadBox.appendChild(isReadSlider);
    isReadDiv.appendChild(isReadBox);

    const deleteButton = document.createElement('div');
    deleteButton.className = 'delete';
    const deleteText = document.createElement('span');
    deleteText.innerHTML = "Remove";
    deleteButton.appendChild(deleteText);
    deleteButton.addEventListener('click', removeBookFromLibrary);



    bookCard.setAttribute('index', library.books.indexOf(book));    
    
    cardHeader.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(date);
    bookCard.appendChild(isReadDiv);
    bookCard.appendChild(deleteButton);

    closeModal();
    clearBookInputFields();
}

const clearBookInputFields = () => {
    document.getElementById('input-title').value = "";
    document.getElementById('input-author').value = "";
    document.getElementById('input-pages').value = "";
    document.getElementById('input-date').value = "";
    document.getElementById('input-finished').value = false;

}

// Adding book data

const getBookFromInput = () => {
    const title = document.getElementById('input-title').value;
    const author = document.getElementById('input-author').value;
    const pages = document.getElementById('input-pages').value;
    const date = document.getElementById('input-date').value;
    const hasRead = document.getElementById('input-finished').value;
    return new _book__WEBPACK_IMPORTED_MODULE_1__["default"](title, author, pages, date, hasRead);

}

const addBookToLibrary = (e) => {
    const newBook = getBookFromInput();
    library.addBook(newBook);
    addBookToDisplay(newBook);

}

const catalog = document.querySelector('#catalog');

const modal = document.getElementById('modal');
const modalOpener = document.getElementById('modal-opener');
const cancelBtn = document.getElementById('cancel-btn');
const addBtn = document.getElementById('add-btn');

const openModal = () => {
    modal.style.display = "block";
}

const closeModal = () => {
    modal.style.display = "none";
}

modalOpener.addEventListener("click", openModal);
addBtn.addEventListener("click", addBookToLibrary);
cancelBtn.addEventListener("click", closeModal);


// Automatically adding test book

const hobbit = new _book__WEBPACK_IMPORTED_MODULE_1__["default"]('The Hobbit', 'JRR Tolkien', 433, 'June 14 2004', 'not read yet');
library.addBook(hobbit);
addBookToDisplay(hobbit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMsbUhBQXFDO0FBQ2pGLDRDQUE0Qyw2R0FBa0M7QUFDOUUsNENBQTRDLHlIQUF3QztBQUNwRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWEsbUNBQW1DO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsVUFBVSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLE1B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QUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQ2ZuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUg7QUFDbkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsWUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdEgzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNLO0FBQ2tCOzs7QUFHNUMsMkRBQVk7O0FBRVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4QkFBOEIsWUFBWTs7QUFFMUM7QUFDQTtBQUNBLGlDQUFpQyxZQUFZOztBQUU3QztBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7O0FBRTdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZDQUFJOztBQUVuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYm9vay1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYm9vay1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYm9vay1jYXRhbG9nLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9zcmMvYm9vay5qcyIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9zcmMvaW5pdGlhbC1sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vYm9vay1jYXRhbG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Jvb2stY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Jvb2stY2F0YWxvZy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYm9vay1jYXRhbG9nL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ib29rLWNhdGFsb2cvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIlJvYm90by1SZWd1bGFyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIlJvYm90by1Cb2xkLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIlJvYm90by1Cb2xkSXRhbGljLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XG4gIC0tcHJpbWFyeS1kYXJrOiAjNjhhYmI0O1xuICAtLXByaW1hcnktbGlnaHQ6ICNjMGMwYzA7XG4gIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjZmVmZWZlO1xuICB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogUm9ib3RvO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBmb250LXdlaWdodDogYm9sZCwgaXRhbGljO1xufVxuXG5odG1sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB9XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzEwZGVnLCAjMjczMDM1IDEwJSwgIzQ3NTc2MSk7XG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWRhcmspO1xuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG4gIGxpbmUtaGVpZ2h0OiAxLjY7XG4gIG1hcmdpbjogMDtcbiAgLyptYXJnaW4tYm90dG9tOiAxMDBweDsqL1xuICB9XG5cbmg0IHtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgbWFyZ2luOiA4cHggMTBweDtcbiAgfVxuXG5pbnB1dCB7XG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiA1cHg7XG59XG5cblxuI3RpdGxlLWhvbGRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjY1ZW07XG4gIGhlaWdodDogN2VtO1xuICB9XG5cbiN0aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMWVtO1xuICB9XG5cblxuLypNb2RhbCovXG4jbW9kYWx7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwLjQpO1xuICBcbn1cblxubGFiZWxbZm9yPWlucHV0LWZpbmlzaGVkXXtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwcHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbiNpbnB1dC1maW5pc2hlZHtcbiAgcGFkZGluZzogMHB4O1xuICB3aWR0aDogNDVweDtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbiNib29rLWVudHJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFNzg4NztcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDEuMTJlbTtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDIwZW07XG4gIG1pbi1oZWlnaHQ6IDIxZW07XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuXG5tb2RhbC1vcGVuZXIge1xuICBmb250LXNpemU6IDhlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIuMTllbTtcbiAgaGVpZ2h0OiAyLjc2ZW07XG4gIG1hcmdpbjogMTVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDA7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gIHBhZGRpbmctdG9wOiA1LjQ1JTtcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyNCwgMjEsIDIxLCAwKTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgb3BhY2l0eTogMC41O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMsIG9wYWNpdHkgNDAwbXM7XG59XG5cbm1vZGFsLW9wZW5lcjpob3ZlciB7XG4gIC8qYm94LXNoYWRvdzogMCAwIDAgNXB4IHJnYigyNTUsIDI1NSwgMjU1KSwgNnB4IDdweCAycHggMXB4IHJnYmEoNywgNywgNywgMC4zNzcpO1xuICB0ZXh0LXNoYWRvdzogNnB4IDdweCAycHggMXB4IHJnYmEoNywgNywgNywgMC4zNzcpOyovXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XG4gIG9wYWNpdHk6IDE7XG5cbn1cblxuXG4jY2F0YWxvZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiAwcHggMWVtO1xufVxuXG4uYm9vay1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDIwZW07XG4gIG1pbi1oZWlnaHQ6IDIzZW07XG4gIG1hcmdpbjogMTVweCAxNXB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNTBkZWcsICMyZjdmOWUgMTAlLCAjNzVkZGQ4KTtcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJveC1zaGFkb3c6IDNweCA0cHggMnB4IDFweCByZ2JhKDMxLCAzMCwgMzAsIDAuMjgxKTtcbn1cblxuLmNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTdlN2U3MjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMHB4IDBweDtcbiAgbWluLWhlaWdodDogNWVtO1xufVxuXG4uYXV0aG9yLW5hbWUge1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5oYXMtcmVhZCB7XG4gIG1hcmdpbjogOHB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5oYXMtcmVhZCA+IGg0IHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5zd2l0Y2gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgbWFyZ2luLXRvcDogNHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xuICB0cmFuc2l0aW9uOiAuM3M7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG59XG5cbi5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDE1cHg7XG4gIHdpZHRoOiAxNXB4O1xuICBsZWZ0OiAzcHg7XG4gIGJvdHRvbTogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuM3M7XG4gIHRyYW5zaXRpb246IC4zcztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzNDQ0NDtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMTE2MGJiO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xufVxuXG4uYm9vay10aXRsZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAjMmUyZTJlNmU7XG4gIGZvbnQtc2l6ZTogMS43ZW07XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjphdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogOHB4O1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5cbi5kZWxldGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzUzQTNBO1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5kZWxldGUtaW1nIHtcbiAgaGVpZ2h0OiAxZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQjs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBNEI7QUFDOUI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsNENBQXlCO0VBQ3pCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQiw0Q0FBK0I7RUFDL0IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQjs7QUFFRjtFQUNFLHlEQUF5RDtFQUN6RCwwQkFBMEI7RUFDMUIsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQjs7QUFFRjtFQUNFLFlBQVk7RUFDWixVQUFVO0VBQ1YsV0FBVztBQUNiOzs7QUFHQTtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQjs7O0FBR0YsUUFBUTtBQUNSO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixVQUFVO0VBQ1YsT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztFQUNkLDRCQUE0QjtFQUM1QixnQ0FBZ0M7O0FBRWxDOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3Q0FBd0M7RUFDeEMsWUFBWTtFQUNaLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFO3FEQUNtRDtFQUNuRCxzQkFBc0I7RUFDdEIsVUFBVTs7QUFFWjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHdEQUF3RDtFQUN4RCw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsbURBQW1EO0FBQ3JEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOzs7QUFHQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQywrQkFBK0I7RUFDL0IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgLS1wcmltYXJ5LWRhcms6ICM2OGFiYjQ7XFxuICAtLXByaW1hcnktbGlnaHQ6ICNjMGMwYzA7XFxuICAtLXNlY29uZGFyeS1saWdodDogI2ZlZmVmZTtcXG4gIH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChSb2JvdG8tUmVndWxhci50dGYpO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChSb2JvdG8tQm9sZC50dGYpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFJvYm90by1Cb2xkSXRhbGljLnR0Zik7XFxuICBmb250LXdlaWdodDogYm9sZCwgaXRhbGljO1xcbn1cXG5cXG5odG1sIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICB9XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzEwZGVnLCAjMjczMDM1IDEwJSwgIzQ3NTc2MSk7XFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeS1kYXJrKTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBtYXJnaW46IDA7XFxuICAvKm1hcmdpbi1ib3R0b206IDEwMHB4OyovXFxuICB9XFxuXFxuaDQge1xcbiAgZm9udC1zaXplOiAxLjFlbTtcXG4gIG1hcmdpbjogOHB4IDEwcHg7XFxuICB9XFxuXFxuaW5wdXQge1xcbiAgcGFkZGluZzogNHB4O1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG5cXG4jdGl0bGUtaG9sZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktZGFyayk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS42NWVtO1xcbiAgaGVpZ2h0OiA3ZW07XFxuICB9XFxuXFxuI3RpdGxlIHtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gIH1cXG5cXG5cXG4vKk1vZGFsKi9cXG4jbW9kYWx7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCwwLjQpO1xcbiAgXFxufVxcblxcbmxhYmVsW2Zvcj1pbnB1dC1maW5pc2hlZF17XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwcHg7XFxuICB3aWR0aDogMTQwcHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2lucHV0LWZpbmlzaGVke1xcbiAgcGFkZGluZzogMHB4O1xcbiAgd2lkdGg6IDQ1cHg7XFxuICBtYXJnaW46IDBweDtcXG59XFxuXFxuI2Jvb2stZW50cnkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZFNzg4NztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtc2l6ZTogMS4xMmVtO1xcbiAgbWFyZ2luOiAxMCUgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICB3aWR0aDogMjBlbTtcXG4gIG1pbi1oZWlnaHQ6IDIxZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcblxcbm1vZGFsLW9wZW5lciB7XFxuICBmb250LXNpemU6IDhlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDIuMTllbTtcXG4gIGhlaWdodDogMi43NmVtO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmMDA7XFxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgcGFkZGluZy10b3A6IDUuNDUlO1xcbiAgYm9yZGVyOiA1cHggc29saWQgcmdiYSgyNCwgMjEsIDIxLCAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICBvcGFjaXR5OiAwLjU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMsIG9wYWNpdHkgNDAwbXM7XFxufVxcblxcbm1vZGFsLW9wZW5lcjpob3ZlciB7XFxuICAvKmJveC1zaGFkb3c6IDAgMCAwIDVweCByZ2IoMjU1LCAyNTUsIDI1NSksIDZweCA3cHggMnB4IDFweCByZ2JhKDcsIDcsIDcsIDAuMzc3KTtcXG4gIHRleHQtc2hhZG93OiA2cHggN3B4IDJweCAxcHggcmdiYSg3LCA3LCA3LCAwLjM3Nyk7Ki9cXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMik7XFxuICBvcGFjaXR5OiAxO1xcblxcbn1cXG5cXG5cXG4jY2F0YWxvZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgcGFkZGluZzogMHB4IDFlbTtcXG59XFxuXFxuLmJvb2stY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiAyMGVtO1xcbiAgbWluLWhlaWdodDogMjNlbTtcXG4gIG1hcmdpbjogMTVweCAxNXB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDUwZGVnLCAjMmY3ZjllIDEwJSwgIzc1ZGRkOCk7XFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gIHBhZGRpbmc6IDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaGFkb3c6IDNweCA0cHggMnB4IDFweCByZ2JhKDMxLCAzMCwgMzAsIDAuMjgxKTtcXG59XFxuXFxuLmNhcmQtaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlNzIxO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwcHggMHB4O1xcbiAgbWluLWhlaWdodDogNWVtO1xcbn1cXG5cXG4uYXV0aG9yLW5hbWUge1xcbiAgbWFyZ2luLXRvcDogMWVtO1xcbn1cXG5cXG4uaGFzLXJlYWQge1xcbiAgbWFyZ2luOiA4cHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oYXMtcmVhZCA+IGg0IHtcXG4gIG1hcmdpbjogMHB4O1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxuICBtYXJnaW4tdG9wOiA0cHg7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuLnN3aXRjaCBpbnB1dCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxufVxcblxcbi5zbGlkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjNzO1xcbiAgdHJhbnNpdGlvbjogLjNzO1xcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDE1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGxlZnQ6IDNweDtcXG4gIGJvdHRvbTogM3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC4zcztcXG4gIHRyYW5zaXRpb246IC4zcztcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG59XFxuXFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgzNDQ0NDtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzExNjBiYjtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIwcHgpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMHB4KTtcXG59XFxuXFxuLmJvb2stdGl0bGUge1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCAjMmUyZTJlNmU7XFxuICBmb250LXNpemU6IDEuN2VtO1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW46YXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG59XFxuXFxuLmRlbGV0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM3NTNBM0E7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDVweCA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDBweDtcXG59XFxuXFxuLmRlbGV0ZS1pbWcge1xcbiAgaGVpZ2h0OiAxZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY2xhc3MgQm9vayB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHRpdGxlID0gJ0VtcHR5JyxcbiAgICAgICAgYXV0aG9yID0gJ0VtcHR5JyxcbiAgICAgICAgcGFnZXMgPSAnMCcsXG4gICAgICAgIGRhdGUgPSAnRW1wdHknLFxuICAgICAgICBpc1JlYWQgPSBmYWxzZVxuICAgICkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuYXV0aG9yID0gYXV0aG9yO1xuICAgICAgICB0aGlzLnBhZ2VzID0gcGFnZXM7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgICAgIHRoaXMuaXNSZWFkID0gaXNSZWFkO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vazsiLCJcbmNvbnN0IGluaXRET01TZXR1cCA9ICgpID0+IHtcbiAgICAvLyBDcmVhdGUgdGhlIG1vZGFsIGVsZW1lbnRcbiAgICBjb25zdCBtb2RhbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbW9kYWxEaXYuaWQgPSBcIm1vZGFsXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGJvb2stZW50cnkgZWxlbWVudFxuICAgIGNvbnN0IGJvb2tFbnRyeURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYm9va0VudHJ5RGl2LmlkID0gXCJib29rLWVudHJ5XCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlucHV0LWZpZWxkcyBlbGVtZW50XG4gICAgY29uc3QgaW5wdXRGaWVsZHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RmllbGRzRGl2LmlkID0gXCJpbnB1dC1maWVsZHNcIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgdGl0bGUgaW5wdXQgZmllbGRcbiAgICBjb25zdCBpbnB1dFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0VGl0bGUudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0VGl0bGUuaWQgPSBcImlucHV0LXRpdGxlXCI7XG4gICAgaW5wdXRUaXRsZS5uYW1lID0gXCJpbnB1dC10aXRsZVwiO1xuICAgIGlucHV0VGl0bGUucGxhY2Vob2xkZXIgPSBcIlRpdGxlXCI7XG4gICAgaW5wdXRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXRUaXRsZSk7XG4gICAgaW5wdXRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgYXV0aG9yIGlucHV0IGZpZWxkXG4gICAgY29uc3QgaW5wdXRBdXRob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRBdXRob3IudHlwZSA9IFwidGV4dFwiO1xuICAgIGlucHV0QXV0aG9yLmlkID0gXCJpbnB1dC1hdXRob3JcIjtcbiAgICBpbnB1dEF1dGhvci5uYW1lID0gXCJpbnB1dC1hdXRob3JcIjtcbiAgICBpbnB1dEF1dGhvci5wbGFjZWhvbGRlciA9IFwiQXV0aG9yXCI7XG4gICAgaW5wdXRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoaW5wdXRBdXRob3IpO1xuICAgIGlucHV0RmllbGRzRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHBhZ2VzIGlucHV0IGZpZWxkXG4gICAgY29uc3QgaW5wdXRQYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dFBhZ2VzLnR5cGUgPSBcIm51bWJlclwiO1xuICAgIGlucHV0UGFnZXMuaWQgPSBcImlucHV0LXBhZ2VzXCI7XG4gICAgaW5wdXRQYWdlcy5uYW1lID0gXCJpbnB1dC1wYWdlc1wiO1xuICAgIGlucHV0UGFnZXMucGxhY2Vob2xkZXIgPSBcIlBhZ2UgY291bnRcIjtcbiAgICBpbnB1dFBhZ2VzLnNldEF0dHJpYnV0ZShcIm9uaW5wdXRcIiwgXCJ0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5yZXBsYWNlKC9bXjAtOV0vZywgJycpLnJlcGxhY2UoLyhcXFxcLi4qKVxcXFwuL2csJyQxJyk7XCIpO1xuICAgIGlucHV0RmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0UGFnZXMpO1xuICAgIGlucHV0RmllbGRzRGl2LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGRhdGUgcHVibGlzaGVkIGxhYmVsXG4gICAgY29uc3QgZGF0ZVB1Ymxpc2hlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRhdGVQdWJsaXNoZWRMYWJlbC5odG1sRm9yID0gXCJpbnB1dC1kYXRlXCI7XG4gICAgZGF0ZVB1Ymxpc2hlZExhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlIHB1Ymxpc2hlZDpcIjtcbiAgICBpbnB1dEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChkYXRlUHVibGlzaGVkTGFiZWwpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBkYXRlIHB1Ymxpc2hlZCBpbnB1dCBmaWVsZFxuICAgIGNvbnN0IGlucHV0RGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpbnB1dERhdGUudHlwZSA9IFwiZGF0ZVwiO1xuICAgIGlucHV0RGF0ZS5pZCA9IFwiaW5wdXQtZGF0ZVwiO1xuICAgIGlucHV0RGF0ZS5uYW1lID0gXCJpbnB1dC1kYXRlXCI7XG4gICAgaW5wdXREYXRlLnBsYWNlaG9sZGVyID0gXCJEYXRlIHB1Ymxpc2hlZFwiO1xuICAgIGlucHV0RmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0RGF0ZSk7XG4gICAgaW5wdXRGaWVsZHNEaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJyXCIpKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgXCJGaW5pc2hlZCByZWFkaW5nP1wiIGxhYmVsXG4gICAgY29uc3QgZmluaXNoZWRSZWFkaW5nTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgZmluaXNoZWRSZWFkaW5nTGFiZWwuaHRtbEZvciA9IFwiaW5wdXQtZmluaXNoZWRcIjtcbiAgICBmaW5pc2hlZFJlYWRpbmdMYWJlbC50ZXh0Q29udGVudCA9IFwiRmluaXNoZWQgcmVhZGluZz9cIjtcbiAgICBpbnB1dEZpZWxkc0Rpdi5hcHBlbmRDaGlsZChmaW5pc2hlZFJlYWRpbmdMYWJlbCk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiRmluaXNoZWQgcmVhZGluZz9cIiBjaGVja2JveFxuICAgIGNvbnN0IGlucHV0RmluaXNoZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgaW5wdXRGaW5pc2hlZC50eXBlID0gXCJjaGVja2JveFwiO1xuICAgIGlucHV0RmluaXNoZWQuaWQgPSBcImlucHV0LWZpbmlzaGVkXCI7XG4gICAgaW5wdXRGaW5pc2hlZC5uYW1lID0gXCJpbnB1dC1maW5pc2hlZFwiO1xuICAgIGlucHV0RmllbGRzRGl2LmFwcGVuZENoaWxkKGlucHV0RmluaXNoZWQpO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBpbnB1dC1maWVsZHMgZWxlbWVudCB0byB0aGUgYm9vay1lbnRyeSBlbGVtZW50XG4gICAgYm9va0VudHJ5RGl2LmFwcGVuZENoaWxkKGlucHV0RmllbGRzRGl2KTtcblxuICAgIC8vIENyZWF0ZSB0aGUgbW9kYWwtYnRuLWhvbGRlciBlbGVtZW50XG4gICAgY29uc3QgbW9kYWxCdG5Ib2xkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1vZGFsQnRuSG9sZGVyRGl2LmlkID0gXCJtb2RhbC1idG4taG9sZGVyXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiQWRkIEJvb2tcIiBidXR0b25cbiAgICBjb25zdCBhZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ0bi5uYW1lID0gXCJhZGQtYnRuXCI7XG4gICAgYWRkQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGFkZEJ0bi5pZCA9IFwiYWRkLWJ0blwiO1xuICAgIGFkZEJ0bi5jbGFzc05hbWUgPSBcImJ1dHRvblwiO1xuICAgIGFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIEJvb2tcIjtcbiAgICBtb2RhbEJ0bkhvbGRlckRpdi5hcHBlbmRDaGlsZChhZGRCdG4pO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBcIkNhbmNlbFwiIGJ1dHRvblxuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnRuLm5hbWUgPSBcImNhbmNlbC1idG5cIjtcbiAgICBjYW5jZWxCdG4uaWQgPSBcImNhbmNlbC1idG5cIjtcbiAgICBjYW5jZWxCdG4udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnRuLmNsYXNzTmFtZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBtb2RhbEJ0bkhvbGRlckRpdi5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBtb2RhbC1idG4taG9sZGVyIGVsZW1lbnQgdG8gdGhlIGJvb2stZW50cnkgZWxlbWVudFxuICAgIGJvb2tFbnRyeURpdi5hcHBlbmRDaGlsZChtb2RhbEJ0bkhvbGRlckRpdik7XG5cbiAgICAvLyBBcHBlbmQgdGhlIGJvb2stZW50cnkgZWxlbWVudCB0byB0aGUgbW9kYWwgZWxlbWVudFxuICAgIG1vZGFsRGl2LmFwcGVuZENoaWxkKGJvb2tFbnRyeURpdik7XG5cbiAgICAvLyBHZXQgdGhlIGNhdGFsb2cgZWxlbWVudFxuICAgIGNvbnN0IGNhdGFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhdGFsb2dEaXYuaWQgPSBcImNhdGFsb2dcIjtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhdGFsb2dEaXYpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBcIkFkZCBCb29rXCIgYnV0dG9uIGluIHRoZSBjYXRhbG9nXG4gICAgY29uc3QgbW9kYWxPcGVuZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1vZGFsT3BlbmVyQnRuLm5hbWUgPSBcIm1vZGFsLW9wZW5lclwiO1xuICAgIG1vZGFsT3BlbmVyQnRuLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIG1vZGFsT3BlbmVyQnRuLmlkID0gXCJtb2RhbC1vcGVuZXJcIjtcbiAgICBtb2RhbE9wZW5lckJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuICAgIGNhdGFsb2dEaXYuYXBwZW5kQ2hpbGQobW9kYWxPcGVuZXJCdG4pO1xuXG4gICAgLy8gQXBwZW5kIHRoZSBtb2RhbCBlbGVtZW50IHRvIHRoZSBkb2N1bWVudCBib2R5XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbERpdik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRET01TZXR1cDsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEJvb2sgZnJvbSBcIi4vYm9va1wiO1xuaW1wb3J0IGluaXRET01TZXR1cCBmcm9tICcuL2luaXRpYWwtbGF5b3V0JztcblxuXG5pbml0RE9NU2V0dXAoKTtcblxuLy8gU2V0IHVwIGRhdGEgc3RydWN0dXJlXG5cbmNsYXNzIExpYnJhcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvb2tzID0gW107XG4gICAgfVxuXG4gICAgYWRkQm9vayhuZXdCb29rKSB7XG4gICAgICAgIGlmICghdGhpcy5pc0luTGlicmFyeShuZXdCb29rKSkge1xuICAgICAgICAgICAgdGhpcy5ib29rcy5wdXNoKG5ld0Jvb2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0Qm9vayh0aXRsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ib29rcy5maW5kKChib29rKSA9PiBib29rLnRpdGxlID09PSB0aXRsZSk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQm9vayh0aXRsZSkge1xuICAgICAgICB0aGlzLmJvb2tzID0gdGhpcy5ib29rcy5maWx0ZXIoKGJvb2spID0+IGJvb2sudGl0bGUgIT09IHRpdGxlKTtcbiAgICB9XG5cbiAgICBpc0luTGlicmFyeShuZXdCb29rKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJvb2tzLnNvbWUoKGJvb2spID0+IGJvb2sudGl0bGUgPT09IG5ld0Jvb2sudGl0bGUpO1xuICAgIH1cbn1cblxuY29uc3QgbGlicmFyeSA9IG5ldyBMaWJyYXJ5KCk7XG5cbi8vIFVJIG1hbmlwdWxhdGlvblxuXG5jb25zdCByZW1vdmVCb29rRnJvbUxpYnJhcnkgPSAoZSkgPT4ge1xuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmNsb3Nlc3QoJy5ib29rLWNhcmQnKS5nZXRBdHRyaWJ1dGUoJ2luZGV4JykpO1xuICAgIGNvbnN0IHJlbW92ZWRJbmRleCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5ib29rLWNhcmQnKS5nZXRBdHRyaWJ1dGUoJ2luZGV4Jyk7XG4gICAgY29uc3QgcmVtb3ZlZEJvb2sgPSBsaWJyYXJ5LmJvb2tzLnNwbGljZShyZW1vdmVkSW5kZXgsIDEpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5ib29rLWNhcmQnKS5yZW1vdmUoKTtcbiAgICBjb25zb2xlLmxvZyhsaWJyYXJ5LmJvb2tzKTtcblxuICAgIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYm9vay1jYXJkJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNhcmRzW2ldLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBpKTtcbiAgICB9XG5cbn1cblxuY29uc3QgY2hlY2tib3hBbGVydCA9IChlKSA9PiB7XG5cbiAgICBjb25zdCBjaGVja2VkSW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCcuYm9vay1jYXJkJykuZ2V0QXR0cmlidXRlKCdpbmRleCcpO1xuICAgIGNvbnN0IGlzQ2hlY2tlZFJlYWQgPSBsaWJyYXJ5LmJvb2tzW2NoZWNrZWRJbmRleF0uaXNSZWFkO1xuXG4gICAgaWYgKGlzQ2hlY2tlZFJlYWQgPT0gdHJ1ZSl7XG4gICAgICAgIGxpYnJhcnkuYm9va3NbY2hlY2tlZEluZGV4XS5pc1JlYWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxpYnJhcnkuYm9va3NbY2hlY2tlZEluZGV4XS5pc1JlYWQgPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyhsaWJyYXJ5LmJvb2tzW2NoZWNrZWRJbmRleF0uaXNSZWFkKTtcblxufVxuXG5jb25zdCBhZGRCb29rVG9EaXNwbGF5ID0gKGJvb2spID0+IHtcblxuICAgIGNvbnN0IGJvb2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYm9va0NhcmQuY2xhc3NOYW1lID0gJ2Jvb2stY2FyZCc7XG4gICAgY2F0YWxvZy5hcHBlbmRDaGlsZChib29rQ2FyZCk7XG5cbiAgICBjb25zdCBjYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZEhlYWRlci5jbGFzc05hbWUgPSAnY2FyZC1oZWFkZXInO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGNhcmRIZWFkZXIpO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdib29rLXRpdGxlJztcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBib29rLnRpdGxlO1xuXG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBhdXRob3IuY2xhc3NOYW1lID0gJ2F1dGhvci1uYW1lJztcbiAgICBhdXRob3IuaW5uZXJIVE1MID0gYEJ5OiAke2Jvb2suYXV0aG9yfWA7XG5cbiAgICBjb25zdCBwYWdlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgcGFnZXMuY2xhc3NOYW1lID0gJ3BhZ2UtY291bnQnO1xuICAgIHBhZ2VzLmlubmVySFRNTCA9IGBMZW5ndGg6ICR7Ym9vay5wYWdlc30gcGFnZXNgO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZGF0ZS5jbGFzc05hbWUgPSAncHVibGlzaGVkJztcbiAgICBkYXRlLmlubmVySFRNTCA9IGBQdWJsaXNoZWQ6ICR7Ym9vay5kYXRlfWA7XG5cbiAgICBjb25zdCBpc1JlYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpc1JlYWREaXYuY2xhc3NOYW1lID0gJ2hhcy1yZWFkJztcblxuICAgIGNvbnN0IGlzUmVhZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGlzUmVhZFRleHQuaW5uZXJIVE1MID0gJ0ZpbmlzaGVkIHJlYWRpbmc/JztcbiAgICBpc1JlYWREaXYuYXBwZW5kQ2hpbGQoaXNSZWFkVGV4dCk7XG5cbiAgICBjb25zdCBpc1JlYWRCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlzUmVhZFN3aXRjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgaXNSZWFkU2xpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGlzUmVhZEJveC5jbGFzc05hbWUgPSAnc3dpdGNoJztcbiAgICBpc1JlYWRTbGlkZXIuY2xhc3NOYW1lID0gJ3NsaWRlcic7XG4gICAgaXNSZWFkU3dpdGNoLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xuICAgIGlzUmVhZFN3aXRjaC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoZWNrYm94QWxlcnQpO1xuICAgIGlzUmVhZEJveC5hcHBlbmRDaGlsZChpc1JlYWRTd2l0Y2gpO1xuICAgIGlzUmVhZEJveC5hcHBlbmRDaGlsZChpc1JlYWRTbGlkZXIpO1xuICAgIGlzUmVhZERpdi5hcHBlbmRDaGlsZChpc1JlYWRCb3gpO1xuXG4gICAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVsZXRlQnV0dG9uLmNsYXNzTmFtZSA9ICdkZWxldGUnO1xuICAgIGNvbnN0IGRlbGV0ZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZGVsZXRlVGV4dC5pbm5lckhUTUwgPSBcIlJlbW92ZVwiO1xuICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmRDaGlsZChkZWxldGVUZXh0KTtcbiAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW1vdmVCb29rRnJvbUxpYnJhcnkpO1xuXG5cblxuICAgIGJvb2tDYXJkLnNldEF0dHJpYnV0ZSgnaW5kZXgnLCBsaWJyYXJ5LmJvb2tzLmluZGV4T2YoYm9vaykpOyAgICBcbiAgICBcbiAgICBjYXJkSGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChhdXRob3IpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKHBhZ2VzKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChkYXRlKTtcbiAgICBib29rQ2FyZC5hcHBlbmRDaGlsZChpc1JlYWREaXYpO1xuICAgIGJvb2tDYXJkLmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBjbG9zZU1vZGFsKCk7XG4gICAgY2xlYXJCb29rSW5wdXRGaWVsZHMoKTtcbn1cblxuY29uc3QgY2xlYXJCb29rSW5wdXRGaWVsZHMgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXRpdGxlJykudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1hdXRob3InKS52YWx1ZSA9IFwiXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXBhZ2VzJykudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1kYXRlJykudmFsdWUgPSBcIlwiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1maW5pc2hlZCcpLnZhbHVlID0gZmFsc2U7XG5cbn1cblxuLy8gQWRkaW5nIGJvb2sgZGF0YVxuXG5jb25zdCBnZXRCb29rRnJvbUlucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXRpdGxlJykudmFsdWU7XG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWF1dGhvcicpLnZhbHVlO1xuICAgIGNvbnN0IHBhZ2VzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LXBhZ2VzJykudmFsdWU7XG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1kYXRlJykudmFsdWU7XG4gICAgY29uc3QgaGFzUmVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1maW5pc2hlZCcpLnZhbHVlO1xuICAgIHJldHVybiBuZXcgQm9vayh0aXRsZSwgYXV0aG9yLCBwYWdlcywgZGF0ZSwgaGFzUmVhZCk7XG5cbn1cblxuY29uc3QgYWRkQm9va1RvTGlicmFyeSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmV3Qm9vayA9IGdldEJvb2tGcm9tSW5wdXQoKTtcbiAgICBsaWJyYXJ5LmFkZEJvb2sobmV3Qm9vayk7XG4gICAgYWRkQm9va1RvRGlzcGxheShuZXdCb29rKTtcblxufVxuXG5jb25zdCBjYXRhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhdGFsb2cnKTtcblxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKTtcbmNvbnN0IG1vZGFsT3BlbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLW9wZW5lcicpO1xuY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbmNlbC1idG4nKTtcbmNvbnN0IGFkZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtYnRuJyk7XG5cbmNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcbiAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG5jb25zdCBjbG9zZU1vZGFsID0gKCkgPT4ge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cblxubW9kYWxPcGVuZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9wZW5Nb2RhbCk7XG5hZGRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZEJvb2tUb0xpYnJhcnkpO1xuY2FuY2VsQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZU1vZGFsKTtcblxuXG4vLyBBdXRvbWF0aWNhbGx5IGFkZGluZyB0ZXN0IGJvb2tcblxuY29uc3QgaG9iYml0ID0gbmV3IEJvb2soJ1RoZSBIb2JiaXQnLCAnSlJSIFRvbGtpZW4nLCA0MzMsICdKdW5lIDE0IDIwMDQnLCAnbm90IHJlYWQgeWV0Jyk7XG5saWJyYXJ5LmFkZEJvb2soaG9iYml0KTtcbmFkZEJvb2tUb0Rpc3BsYXkoaG9iYml0KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==