/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 133);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(38);
} else {}


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {}

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(42)();
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CANCEL = 'cancel';
exports.ADDON_ENABLE = 'addon.enable';
exports.ADDON_DISABLE = 'addon.disable';
exports.ADDON_TOGGLE_ENABLED = 'addon.toggle.enabled';
exports.COMMAND_SHOW = 'command.show';
exports.COMMAND_SHOW_OPEN = 'command.show.open';
exports.COMMAND_SHOW_TABOPEN = 'command.show.tabopen';
exports.COMMAND_SHOW_WINOPEN = 'command.show.winopen';
exports.COMMAND_SHOW_BUFFER = 'command.show.buffer';
exports.COMMAND_SHOW_ADDBOOKMARK = 'command.show.addbookmark';
exports.SCROLL_VERTICALLY = 'scroll.vertically';
exports.SCROLL_HORIZONALLY = 'scroll.horizonally';
exports.SCROLL_PAGES = 'scroll.pages';
exports.SCROLL_TOP = 'scroll.top';
exports.SCROLL_BOTTOM = 'scroll.bottom';
exports.SCROLL_HOME = 'scroll.home';
exports.SCROLL_END = 'scroll.end';
exports.FOLLOW_START = 'follow.start';
exports.NAVIGATE_HISTORY_PREV = 'navigate.history.prev';
exports.NAVIGATE_HISTORY_NEXT = 'navigate.history.next';
exports.NAVIGATE_LINK_PREV = 'navigate.link.prev';
exports.NAVIGATE_LINK_NEXT = 'navigate.link.next';
exports.NAVIGATE_PARENT = 'navigate.parent';
exports.NAVIGATE_ROOT = 'navigate.root';
exports.FOCUS_INPUT = 'focus.input';
exports.PAGE_SOURCE = 'page.source';
exports.PAGE_HOME = 'page.home';
exports.TAB_CLOSE = 'tabs.close';
exports.TAB_CLOSE_FORCE = 'tabs.close.force';
exports.TAB_CLOSE_RIGHT = 'tabs.close.right';
exports.TAB_REOPEN = 'tabs.reopen';
exports.TAB_PREV = 'tabs.prev';
exports.TAB_NEXT = 'tabs.next';
exports.TAB_FIRST = 'tabs.first';
exports.TAB_LAST = 'tabs.last';
exports.TAB_PREV_SEL = 'tabs.prevsel';
exports.TAB_RELOAD = 'tabs.reload';
exports.TAB_PIN = 'tabs.pin';
exports.TAB_UNPIN = 'tabs.unpin';
exports.TAB_TOGGLE_PINNED = 'tabs.pin.toggle';
exports.TAB_DUPLICATE = 'tabs.duplicate';
exports.ZOOM_IN = 'zoom.in';
exports.ZOOM_OUT = 'zoom.out';
exports.ZOOM_NEUTRAL = 'zoom.neutral';
exports.URLS_YANK = 'urls.yank';
exports.URLS_PASTE = 'urls.paste';
exports.FIND_START = 'find.start';
exports.FIND_NEXT = 'find.next';
exports.FIND_PREV = 'find.prev';
exports.MARK_SET_PREFIX = 'mark.set.prefix';
exports.MARK_JUMP_PREFIX = 'mark.jump.prefix';
exports.REPEAT_LAST = 'repeat.last';
exports.INTERNAL_OPEN_URL = 'internal.open.url';
const assertOptionalBoolean = (obj, name) => {
    if (Object.prototype.hasOwnProperty.call(obj, name) &&
        typeof obj[name] !== 'boolean') {
        throw new TypeError(`Not a boolean parameter: '${name} (${typeof obj[name]})'`);
    }
};
const assertOptionalString = (obj, name, values) => {
    if (Object.prototype.hasOwnProperty.call(obj, name)) {
        const value = obj[name];
        if (typeof value !== 'string') {
            throw new TypeError(`Not a string parameter: '${name}' (${typeof value})`);
        }
        if (values && values.length && values.indexOf(value) === -1) {
            throw new TypeError(`Invalid parameter for '${name}': '${value}'`);
        }
    }
};
const assertRequiredNumber = (obj, name) => {
    if (!Object.prototype.hasOwnProperty.call(obj, name) ||
        typeof obj[name] !== 'number') {
        throw new TypeError(`Missing number parameter: '${name}`);
    }
};
const assertRequiredString = (obj, name) => {
    if (!Object.prototype.hasOwnProperty.call(obj, name) ||
        typeof obj[name] !== 'string') {
        throw new TypeError(`Missing string parameter: '${name}`);
    }
};
exports.valueOf = (o) => {
    if (!Object.prototype.hasOwnProperty.call(o, 'type')) {
        throw new TypeError(`Missing 'type' field`);
    }
    switch (o.type) {
        case exports.COMMAND_SHOW_OPEN:
        case exports.COMMAND_SHOW_TABOPEN:
        case exports.COMMAND_SHOW_WINOPEN:
        case exports.COMMAND_SHOW_ADDBOOKMARK:
            assertOptionalBoolean(o, 'alter');
            return { type: o.type, alter: Boolean(o.alter) };
        case exports.SCROLL_VERTICALLY:
        case exports.SCROLL_HORIZONALLY:
        case exports.SCROLL_PAGES:
            assertRequiredNumber(o, 'count');
            return { type: o.type, count: Number(o.count) };
        case exports.FOLLOW_START:
            assertOptionalBoolean(o, 'newTab');
            assertOptionalBoolean(o, 'background');
            return {
                type: exports.FOLLOW_START,
                newTab: Boolean(typeof o.newTab === 'undefined' ? false : o.newTab),
                background: Boolean(typeof o.background === 'undefined' ? true : o.background),
            };
        case exports.PAGE_HOME:
            assertOptionalBoolean(o, 'newTab');
            return {
                type: exports.PAGE_HOME,
                newTab: Boolean(typeof o.newTab === 'undefined' ? false : o.newTab),
            };
        case exports.TAB_CLOSE:
            assertOptionalString(o, 'select', ['left', 'right']);
            return {
                type: exports.TAB_CLOSE,
                select: (typeof o.select === 'undefined' ? 'right' : o.select),
            };
        case exports.TAB_RELOAD:
            assertOptionalBoolean(o, 'cache');
            return {
                type: exports.TAB_RELOAD,
                cache: Boolean(typeof o.cache === 'undefined' ? false : o.cache),
            };
        case exports.URLS_PASTE:
            assertOptionalBoolean(o, 'newTab');
            return {
                type: exports.URLS_PASTE,
                newTab: Boolean(typeof o.newTab === 'undefined' ? false : o.newTab),
            };
        case exports.INTERNAL_OPEN_URL:
            assertOptionalBoolean(o, 'newTab');
            assertOptionalBoolean(o, 'newWindow');
            assertOptionalBoolean(o, 'background');
            assertRequiredString(o, 'url');
            return {
                type: exports.INTERNAL_OPEN_URL,
                url: o.url,
                newTab: Boolean(typeof o.newTab === 'undefined' ? false : o.newTab),
                newWindow: Boolean(typeof o.newWindow === 'undefined' ? false : o.newWindow),
                background: Boolean(typeof o.background === 'undefined' ? true : o.background),
            };
        case exports.CANCEL:
        case exports.ADDON_ENABLE:
        case exports.ADDON_DISABLE:
        case exports.ADDON_TOGGLE_ENABLED:
        case exports.COMMAND_SHOW:
        case exports.COMMAND_SHOW_BUFFER:
        case exports.SCROLL_TOP:
        case exports.SCROLL_BOTTOM:
        case exports.SCROLL_HOME:
        case exports.SCROLL_END:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_LINK_PREV:
        case exports.NAVIGATE_LINK_NEXT:
        case exports.NAVIGATE_PARENT:
        case exports.NAVIGATE_ROOT:
        case exports.FOCUS_INPUT:
        case exports.PAGE_SOURCE:
        case exports.TAB_CLOSE_FORCE:
        case exports.TAB_CLOSE_RIGHT:
        case exports.TAB_REOPEN:
        case exports.TAB_PREV:
        case exports.TAB_NEXT:
        case exports.TAB_FIRST:
        case exports.TAB_LAST:
        case exports.TAB_PREV_SEL:
        case exports.TAB_PIN:
        case exports.TAB_UNPIN:
        case exports.TAB_TOGGLE_PINNED:
        case exports.TAB_DUPLICATE:
        case exports.ZOOM_IN:
        case exports.ZOOM_OUT:
        case exports.ZOOM_NEUTRAL:
        case exports.URLS_YANK:
        case exports.FIND_START:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.MARK_SET_PREFIX:
        case exports.MARK_JUMP_PREFIX:
        case exports.REPEAT_LAST:
            return { type: o.type };
    }
    throw new TypeError('Unknown operation type: ' + o.type);
};
exports.isNRepeatable = (type) => {
    switch (type) {
        case exports.SCROLL_VERTICALLY:
        case exports.SCROLL_HORIZONALLY:
        case exports.SCROLL_PAGES:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_PARENT:
        case exports.TAB_CLOSE:
        case exports.TAB_CLOSE_FORCE:
        case exports.TAB_CLOSE_RIGHT:
        case exports.TAB_REOPEN:
        case exports.TAB_PREV:
        case exports.TAB_NEXT:
        case exports.TAB_DUPLICATE:
        case exports.ZOOM_IN:
        case exports.ZOOM_OUT:
        case exports.URLS_PASTE:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.REPEAT_LAST:
            return true;
    }
    return false;
};


/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const defs = [
    {
        name: 'hintchars',
        description: 'hint characters on follow mode',
        defaultValue: 'abcdefghijklmnopqrstuvwxyz',
        type: 'string',
    }, {
        name: 'smoothscroll',
        description: 'smooth scroll',
        defaultValue: false,
        type: 'boolean',
    }, {
        name: 'complete',
        description: 'which are completed at the open page',
        defaultValue: 'sbh',
        type: 'string',
    }
];
const defaultValues = {
    hintchars: 'abcdefghijklmnopqrstuvwxyz',
    smoothscroll: false,
    complete: 'sbh',
};
class Properties {
    constructor({ hintchars, smoothscroll, complete, } = {}) {
        this.hintchars = hintchars || defaultValues.hintchars;
        this.smoothscroll = smoothscroll || defaultValues.smoothscroll;
        this.complete = complete || defaultValues.complete;
    }
    static fromJSON(json) {
        return new Properties(json);
    }
    static types() {
        return {
            hintchars: 'string',
            smoothscroll: 'boolean',
            complete: 'string',
        };
    }
    static def(name) {
        return defs.find(p => p.name === name);
    }
    static defs() {
        return defs;
    }
    toJSON() {
        return {
            hintchars: this.hintchars,
            smoothscroll: this.smoothscroll,
            complete: this.complete,
        };
    }
}
exports.default = Properties;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

function addModulesToDom(id, list, options) {
  id = options.base ? id + options.base : id;

  if (!stylesInDom[id]) {
    stylesInDom[id] = [];
  }

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var part = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };
    var styleInDomById = stylesInDom[id];

    if (styleInDomById[i]) {
      styleInDomById[i].updater(part);
    } else {
      styleInDomById.push({
        updater: addStyle(part, options)
      });
    }
  }

  for (var j = list.length; j < stylesInDom[id].length; j++) {
    stylesInDom[id][j].updater();
  }

  stylesInDom[id].length = list.length;

  if (stylesInDom[id].length === 0) {
    delete stylesInDom[id];
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (id, list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  addModulesToDom(id, list, options);
  return function update(newList) {
    addModulesToDom(id, newList || [], options);
  };
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    for (var i = 0; i < modules.length; i++) {
      var item = [].concat(modules[i]);

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Key_1 = tslib_1.__importDefault(__webpack_require__(16));
const regexFromWildcard = (pattern) => {
    const regexStr = '^' + pattern.replace(/\*/g, '.*') + '$';
    return new RegExp(regexStr);
};
class BlacklistItem {
    constructor(pattern, partial, keys) {
        this.pattern = pattern;
        this.regex = regexFromWildcard(pattern);
        this.partial = partial;
        this.keys = keys;
        this.keyEntities = this.keys.map(Key_1.default.fromMapKey);
    }
    static fromJSON(json) {
        return typeof json === 'string'
            ? new BlacklistItem(json, false, [])
            : new BlacklistItem(json.url, true, json.keys);
    }
    toJSON() {
        if (!this.partial) {
            return this.pattern;
        }
        return { url: this.pattern, keys: this.keys };
    }
    matches(url) {
        return this.pattern.includes('/')
            ? this.regex.test(url.host + url.pathname)
            : this.regex.test(url.host);
    }
    includeKey(url, key) {
        if (!this.matches(url) || !this.partial) {
            return false;
        }
        return this.keyEntities.some(k => k.equals(key));
    }
}
exports.BlacklistItem = BlacklistItem;
class Blacklist {
    constructor(items) {
        this.items = items;
    }
    static fromJSON(json) {
        const items = json.map(o => BlacklistItem.fromJSON(o));
        return new Blacklist(items);
    }
    toJSON() {
        return this.items.map(item => item.toJSON());
    }
    includesEntireBlacklist(url) {
        return this.items.some(item => !item.partial && item.matches(url));
    }
    includeKey(url, key) {
        return this.items.some(item => item.includeKey(url, key));
    }
}
exports.default = Blacklist;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const operations = tslib_1.__importStar(__webpack_require__(6));
const Settings_1 = tslib_1.__importStar(__webpack_require__(15));
const Keymaps_1 = tslib_1.__importDefault(__webpack_require__(14));
const Search_1 = tslib_1.__importDefault(__webpack_require__(17));
const Properties_1 = tslib_1.__importDefault(__webpack_require__(8));
const Blacklist_1 = tslib_1.__importDefault(__webpack_require__(12));
class FormKeymaps {
    constructor(data) {
        this.data = data;
    }
    toKeymaps() {
        const keymaps = {};
        for (const name of Object.keys(this.data)) {
            const [type, argStr] = name.split('?');
            let args = {};
            if (argStr) {
                args = JSON.parse(argStr);
            }
            const key = this.data[name];
            keymaps[key] = operations.valueOf(Object.assign({ type }, args));
        }
        return Keymaps_1.default.fromJSON(keymaps);
    }
    toJSON() {
        return this.data;
    }
    buildWithOverride(op, keys) {
        const newData = Object.assign(Object.assign({}, this.data), { [op]: keys });
        return new FormKeymaps(newData);
    }
    static fromJSON(o) {
        const data = {};
        for (const op of Object.keys(o)) {
            data[op] = o[op];
        }
        return new FormKeymaps(data);
    }
    static fromKeymaps(keymaps) {
        const json = keymaps.toJSON();
        const data = {};
        for (const key of Object.keys(json)) {
            const op = json[key];
            const args = Object.assign({}, op);
            delete args.type;
            let name = op.type;
            if (Object.keys(args).length > 0) {
                name += '?' + JSON.stringify(args);
            }
            data[name] = key;
        }
        return new FormKeymaps(data);
    }
}
exports.FormKeymaps = FormKeymaps;
class FormSearch {
    constructor(defaultEngine, engines) {
        this.default = defaultEngine;
        this.engines = engines;
    }
    toSearchSettings() {
        const engines = {};
        for (const entry of this.engines) {
            engines[entry[0]] = entry[1];
        }
        return new Search_1.default(this.default, engines);
    }
    toJSON() {
        return {
            default: this.default,
            engines: this.engines,
        };
    }
    static fromJSON(o) {
        if (!Object.prototype.hasOwnProperty.call(o, 'default')) {
            throw new TypeError(`"default" field not set`);
        }
        if (!Object.prototype.hasOwnProperty.call(o, 'engines')) {
            throw new TypeError(`"engines" field not set`);
        }
        return new FormSearch(o.default, o.engines);
    }
    static fromSearch(search) {
        const engines = Object.entries(search.engines).reduce((o, [name, url]) => {
            return o.concat([[name, url]]);
        }, []);
        return new FormSearch(search.defaultEngine, engines);
    }
}
exports.FormSearch = FormSearch;
class JSONTextSettings {
    constructor(json) {
        this.json = json;
    }
    toSettings() {
        return Settings_1.default.fromJSON(JSON.parse(this.json));
    }
    toJSONText() {
        return this.json;
    }
    static fromText(o) {
        return new JSONTextSettings(o);
    }
    static fromSettings(data) {
        const json = {
            keymaps: data.keymaps.toJSON(),
            search: data.search,
            properties: data.properties,
            blacklist: data.blacklist,
        };
        return new JSONTextSettings(JSON.stringify(json, undefined, 2));
    }
}
exports.JSONTextSettings = JSONTextSettings;
class FormSettings {
    constructor(keymaps, search, properties, blacklist) {
        this.keymaps = keymaps;
        this.search = search;
        this.properties = properties;
        this.blacklist = blacklist;
    }
    buildWithKeymaps(keymaps) {
        return new FormSettings(keymaps, this.search, this.properties, this.blacklist);
    }
    buildWithSearch(search) {
        return new FormSettings(this.keymaps, search, this.properties, this.blacklist);
    }
    buildWithProperties(props) {
        return new FormSettings(this.keymaps, this.search, props, this.blacklist);
    }
    buildWithBlacklist(blacklist) {
        return new FormSettings(this.keymaps, this.search, this.properties, blacklist);
    }
    toSettings() {
        return Settings_1.default.fromJSON({
            keymaps: this.keymaps.toKeymaps().toJSON(),
            search: this.search.toSearchSettings().toJSON(),
            properties: this.properties.toJSON(),
            blacklist: this.blacklist.toJSON(),
        });
    }
    toJSON() {
        return {
            keymaps: this.keymaps.toJSON(),
            search: this.search.toJSON(),
            properties: this.properties.toJSON(),
            blacklist: this.blacklist.toJSON(),
        };
    }
    static fromJSON(o) {
        for (const name of ['keymaps', 'search', 'properties', 'blacklist']) {
            if (!Object.prototype.hasOwnProperty.call(o, name)) {
                throw new Error(`"${name}" field not set`);
            }
        }
        return new FormSettings(FormKeymaps.fromJSON(o.keymaps), FormSearch.fromJSON(o.search), Properties_1.default.fromJSON(o.properties), Blacklist_1.default.fromJSON(o.blacklist));
    }
    static fromSettings(data) {
        return new FormSettings(FormKeymaps.fromKeymaps(data.keymaps), FormSearch.fromSearch(data.search), data.properties, data.blacklist);
    }
}
exports.FormSettings = FormSettings;
var SettingSource;
(function (SettingSource) {
    SettingSource["JSON"] = "json";
    SettingSource["Form"] = "form";
})(SettingSource = exports.SettingSource || (exports.SettingSource = {}));
class SettingData {
    constructor({ source, json, form }) {
        this.source = source;
        this.json = json;
        this.form = form;
    }
    getSource() {
        return this.source;
    }
    getJSON() {
        if (!this.json) {
            throw new TypeError('json settings not set');
        }
        return this.json;
    }
    getForm() {
        if (!this.form) {
            throw new TypeError('form settings not set');
        }
        return this.form;
    }
    toJSON() {
        switch (this.source) {
            case SettingSource.JSON:
                return {
                    source: this.source,
                    json: this.json.toJSONText(),
                };
            case SettingSource.Form:
                return {
                    source: this.source,
                    form: this.form.toJSON(),
                };
        }
        throw new Error(`unknown settings source: ${this.source}`);
    }
    toSettings() {
        switch (this.source) {
            case SettingSource.JSON:
                return this.getJSON().toSettings();
            case SettingSource.Form:
                return this.getForm().toSettings();
        }
        throw new Error(`unknown settings source: ${this.source}`);
    }
    static fromJSON(o) {
        switch (o.source) {
            case SettingSource.JSON:
                return new SettingData({
                    source: o.source,
                    json: JSONTextSettings.fromText(o.json),
                });
            case SettingSource.Form:
                return new SettingData({
                    source: o.source,
                    form: FormSettings.fromJSON(o.form),
                });
        }
        throw new Error(`unknown settings source: ${o.source}`);
    }
}
exports.default = SettingData;
exports.DefaultSettingData = SettingData.fromJSON({
    source: 'json',
    json: Settings_1.DefaultSettingJSONText,
});


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const operations = tslib_1.__importStar(__webpack_require__(6));
class Keymaps {
    constructor(data) {
        this.data = data;
    }
    static fromJSON(json) {
        const entries = {};
        for (const key of Object.keys(json)) {
            entries[key] = operations.valueOf(json[key]);
        }
        return new Keymaps(entries);
    }
    combine(other) {
        return new Keymaps(Object.assign(Object.assign({}, this.data), other.data));
    }
    toJSON() {
        return this.data;
    }
    entries() {
        return Object.entries(this.data);
    }
}
exports.default = Keymaps;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Keymaps_1 = tslib_1.__importDefault(__webpack_require__(14));
const Search_1 = tslib_1.__importDefault(__webpack_require__(17));
const Properties_1 = tslib_1.__importDefault(__webpack_require__(8));
const Blacklist_1 = tslib_1.__importDefault(__webpack_require__(12));
const validate_1 = tslib_1.__importDefault(__webpack_require__(23));
class Settings {
    constructor({ keymaps, search, properties, blacklist, }) {
        this.keymaps = keymaps;
        this.search = search;
        this.properties = properties;
        this.blacklist = blacklist;
    }
    static fromJSON(json) {
        const valid = validate_1.default(json);
        if (!valid) {
            const message = validate_1.default.errors
                .map((err) => {
                return `'${err.dataPath}' ${err.message}`;
            })
                .join('; ');
            throw new TypeError(message);
        }
        const obj = json;
        const settings = Object.assign({}, exports.DefaultSetting);
        if (obj.keymaps) {
            settings.keymaps = Keymaps_1.default.fromJSON(obj.keymaps);
        }
        if (obj.search) {
            settings.search = Search_1.default.fromJSON(obj.search);
        }
        if (obj.properties) {
            settings.properties = Properties_1.default.fromJSON(obj.properties);
        }
        if (obj.blacklist) {
            settings.blacklist = Blacklist_1.default.fromJSON(obj.blacklist);
        }
        return new Settings(settings);
    }
    toJSON() {
        return {
            keymaps: this.keymaps.toJSON(),
            search: this.search.toJSON(),
            properties: this.properties.toJSON(),
            blacklist: this.blacklist.toJSON(),
        };
    }
}
exports.default = Settings;
exports.DefaultSettingJSONText = `{
  "keymaps": {
    "0": { "type": "scroll.home" },
    ":": { "type": "command.show" },
    "o": { "type": "command.show.open", "alter": false },
    "O": { "type": "command.show.open", "alter": true },
    "t": { "type": "command.show.tabopen", "alter": false },
    "T": { "type": "command.show.tabopen", "alter": true },
    "w": { "type": "command.show.winopen", "alter": false },
    "W": { "type": "command.show.winopen", "alter": true },
    "b": { "type": "command.show.buffer" },
    "a": { "type": "command.show.addbookmark", "alter": true },
    "k": { "type": "scroll.vertically", "count": -1 },
    "j": { "type": "scroll.vertically", "count": 1 },
    "h": { "type": "scroll.horizonally", "count": -1 },
    "l": { "type": "scroll.horizonally", "count": 1 },
    "<C-U>": { "type": "scroll.pages", "count": -0.5 },
    "<C-D>": { "type": "scroll.pages", "count": 0.5 },
    "<C-B>": { "type": "scroll.pages", "count": -1 },
    "<C-F>": { "type": "scroll.pages", "count": 1 },
    "gg": { "type": "scroll.top" },
    "G": { "type": "scroll.bottom" },
    "$": { "type": "scroll.end" },
    "d": { "type": "tabs.close" },
    "D": { "type": "tabs.close", "select": "left" },
    "x$": { "type": "tabs.close.right" },
    "!d": { "type": "tabs.close.force" },
    "u": { "type": "tabs.reopen" },
    "K": { "type": "tabs.prev" },
    "J": { "type": "tabs.next" },
    "gT": { "type": "tabs.prev" },
    "gt": { "type": "tabs.next" },
    "g0": { "type": "tabs.first" },
    "g$": { "type": "tabs.last" },
    "<C-6>": { "type": "tabs.prevsel" },
    "r": { "type": "tabs.reload", "cache": false },
    "R": { "type": "tabs.reload", "cache": true },
    "zp": { "type": "tabs.pin.toggle" },
    "zd": { "type": "tabs.duplicate" },
    "zi": { "type": "zoom.in" },
    "zo": { "type": "zoom.out" },
    "zz": { "type": "zoom.neutral" },
    "f": { "type": "follow.start", "newTab": false },
    "F": { "type": "follow.start", "newTab": true, "background": false },
    "m": { "type": "mark.set.prefix" },
    "'": { "type": "mark.jump.prefix" },
    "H": { "type": "navigate.history.prev" },
    "L": { "type": "navigate.history.next" },
    "[[": { "type": "navigate.link.prev" },
    "]]": { "type": "navigate.link.next" },
    "gu": { "type": "navigate.parent" },
    "gU": { "type": "navigate.root" },
    "gi": { "type": "focus.input" },
    "gf": { "type": "page.source" },
    "gh": { "type": "page.home" },
    "gH": { "type": "page.home", "newTab": true },
    "y": { "type": "urls.yank" },
    "p": { "type": "urls.paste", "newTab": false },
    "P": { "type": "urls.paste", "newTab": true },
    "/": { "type": "find.start" },
    "n": { "type": "find.next" },
    "N": { "type": "find.prev" },
    ".": { "type": "repeat.last" },
    "<S-Esc>": { "type": "addon.toggle.enabled" }
  },
  "search": {
    "default": "google",
    "engines": {
      "google": "https://google.com/search?q={}",
      "yahoo": "https://search.yahoo.com/search?p={}",
      "bing": "https://www.bing.com/search?q={}",
      "duckduckgo": "https://duckduckgo.com/?q={}",
      "twitter": "https://twitter.com/search?q={}",
      "wikipedia": "https://en.wikipedia.org/w/index.php?search={}"
    }
  },
  "properties": {
    "hintchars": "abcdefghijklmnopqrstuvwxyz",
    "smoothscroll": false,
    "complete": "sbh"
  },
  "blacklist": [
  ]
}`;
exports.DefaultSetting = Settings.fromJSON(JSON.parse(exports.DefaultSettingJSONText));


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
class Key {
    constructor({ key, shift = false, ctrl = false, alt = false, meta = false, }) {
        this.key = key;
        this.shift = shift;
        this.ctrl = ctrl;
        this.alt = alt;
        this.meta = meta;
    }
    static fromMapKey(str) {
        if (str.startsWith('<') && str.endsWith('>')) {
            const inner = str.slice(1, -1);
            const shift = inner.includes('S-');
            let base = inner.slice(inner.lastIndexOf('-') + 1);
            if (shift && base.length === 1) {
                base = base.toUpperCase();
            }
            else if (!shift && base.length === 1) {
                base = base.toLowerCase();
            }
            return new Key({
                key: base,
                shift: shift,
                ctrl: inner.includes('C-'),
                alt: inner.includes('A-'),
                meta: inner.includes('M-'),
            });
        }
        return new Key({
            key: str,
            shift: str.toLowerCase() !== str,
            ctrl: false,
            alt: false,
            meta: false,
        });
    }
    isDigit() {
        return digits.includes(this.key);
    }
    equals(key) {
        return this.key === key.key &&
            this.ctrl === key.ctrl &&
            this.meta === key.meta &&
            this.alt === key.alt &&
            this.shift === key.shift;
    }
}
exports.default = Key;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Search {
    constructor(defaultEngine, engines) {
        this.defaultEngine = defaultEngine;
        this.engines = engines;
    }
    static fromJSON(json) {
        for (const [name, url] of Object.entries(json.engines)) {
            if (!(/^[a-zA-Z0-9]+$/).test(name)) {
                throw new TypeError('Search engine\'s name must be [a-zA-Z0-9]+');
            }
            const matches = url.match(/{}/g);
            if (matches === null) {
                throw new TypeError(`No {}-placeholders in URL of "${name}"`);
            }
            else if (matches.length > 1) {
                throw new TypeError(`Multiple {}-placeholders in URL of "${name}"`);
            }
        }
        if (!Object.keys(json.engines).includes(json.default)) {
            throw new TypeError(`Default engine "${json.default}" not found`);
        }
        return new Search(json.default, json.engines);
    }
    toJSON() {
        return {
            default: this.defaultEngine,
            engines: this.engines,
        };
    }
}
exports.default = Search;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(39);
} else {}


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {}

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
  // keys multiple times.

  var unexpectedKeyCache;

  if (false) {}

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (false) { var warningMessage; }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var boundActionCreators = {};

  for (var key in actionCreators) {
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    keys.push.apply(keys, Object.getOwnPropertySymbols(object));
  }

  if (enumerableOnly) keys = keys.filter(function (sym) {
    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
  });
  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error('Dispatching while constructing your middleware is not allowed. ' + 'Other middleware would not be applied to this dispatch.');
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread2({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if (false) {}




/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(44);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;

function getStatics(component) {
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  }

  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11), __webpack_require__(47)(module)))

/***/ }),
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var validate = (function() {
  var pattern0 = new RegExp('.*');
  var refVal = [];
  return function validate(data, dataPath, parentData, parentDataProperty, rootData) {
    'use strict';
    var vErrors = null;
    var errors = 0;
    if ((data && typeof data === "object" && !Array.isArray(data))) {
      var errs__0 = errors;
      var valid1 = true;
      for (var key0 in data) {
        var isAdditional0 = !( false || key0 == 'keymaps' || key0 == 'search' || key0 == 'properties' || key0 == 'blacklist');
        if (isAdditional0) {
          valid1 = false;
          validate.errors = [{
            keyword: 'additionalProperties',
            dataPath: (dataPath || '') + "",
            schemaPath: '#/additionalProperties',
            params: {
              additionalProperty: '' + key0 + ''
            },
            message: 'should NOT have additional properties'
          }];
          return false;
          break;
        }
      }
      if (valid1) {
        var data1 = data.keymaps;
        if (data1 === undefined) {
          valid1 = true;
        } else {
          var errs_1 = errors;
          if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
            var errs__1 = errors;
            var valid2 = true;
            for (var key1 in data1) {
              if (pattern0.test(key1)) {
                var data2 = data1[key1];
                var errs_2 = errors;
                if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                  if (true) {
                    var errs__2 = errors;
                    var valid3 = true;
                    if (data2.type === undefined) {
                      valid3 = false;
                      validate.errors = [{
                        keyword: 'required',
                        dataPath: (dataPath || '') + '.keymaps[\'' + key1 + '\']',
                        schemaPath: '#/properties/keymaps/patternProperties/.*/required',
                        params: {
                          missingProperty: 'type'
                        },
                        message: 'should have required property \'type\''
                      }];
                      return false;
                    } else {
                      var errs_3 = errors;
                      if (typeof data2.type !== "string") {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.keymaps[\'' + key1 + '\'].type',
                          schemaPath: '#/properties/keymaps/patternProperties/.*/properties/type/type',
                          params: {
                            type: 'string'
                          },
                          message: 'should be string'
                        }];
                        return false;
                      }
                      var valid3 = errors === errs_3;
                    }
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.keymaps[\'' + key1 + '\']',
                    schemaPath: '#/properties/keymaps/patternProperties/.*/type',
                    params: {
                      type: 'object'
                    },
                    message: 'should be object'
                  }];
                  return false;
                }
                var valid2 = errors === errs_2;
                if (!valid2) break;
              } else valid2 = true;
            }
          } else {
            validate.errors = [{
              keyword: 'type',
              dataPath: (dataPath || '') + '.keymaps',
              schemaPath: '#/properties/keymaps/type',
              params: {
                type: 'object'
              },
              message: 'should be object'
            }];
            return false;
          }
          var valid1 = errors === errs_1;
        }
        if (valid1) {
          var data1 = data.search;
          if (data1 === undefined) {
            valid1 = true;
          } else {
            var errs_1 = errors;
            if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
              if (true) {
                var errs__1 = errors;
                var valid2 = true;
                if (data1.default === undefined) {
                  valid2 = false;
                  validate.errors = [{
                    keyword: 'required',
                    dataPath: (dataPath || '') + '.search',
                    schemaPath: '#/properties/search/required',
                    params: {
                      missingProperty: 'default'
                    },
                    message: 'should have required property \'default\''
                  }];
                  return false;
                } else {
                  var errs_2 = errors;
                  if (typeof data1.default !== "string") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.search.default',
                      schemaPath: '#/properties/search/properties/default/type',
                      params: {
                        type: 'string'
                      },
                      message: 'should be string'
                    }];
                    return false;
                  }
                  var valid2 = errors === errs_2;
                }
                if (valid2) {
                  var data2 = data1.engines;
                  if (data2 === undefined) {
                    valid2 = false;
                    validate.errors = [{
                      keyword: 'required',
                      dataPath: (dataPath || '') + '.search',
                      schemaPath: '#/properties/search/required',
                      params: {
                        missingProperty: 'engines'
                      },
                      message: 'should have required property \'engines\''
                    }];
                    return false;
                  } else {
                    var errs_2 = errors;
                    if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                      var errs__2 = errors;
                      var valid3 = true;
                      for (var key2 in data2) {
                        if (pattern0.test(key2)) {
                          var errs_3 = errors;
                          if (typeof data2[key2] !== "string") {
                            validate.errors = [{
                              keyword: 'type',
                              dataPath: (dataPath || '') + '.search.engines[\'' + key2 + '\']',
                              schemaPath: '#/properties/search/properties/engines/patternProperties/.*/type',
                              params: {
                                type: 'string'
                              },
                              message: 'should be string'
                            }];
                            return false;
                          }
                          var valid3 = errors === errs_3;
                          if (!valid3) break;
                        } else valid3 = true;
                      }
                    } else {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.search.engines',
                        schemaPath: '#/properties/search/properties/engines/type',
                        params: {
                          type: 'object'
                        },
                        message: 'should be object'
                      }];
                      return false;
                    }
                    var valid2 = errors === errs_2;
                  }
                }
              }
            } else {
              validate.errors = [{
                keyword: 'type',
                dataPath: (dataPath || '') + '.search',
                schemaPath: '#/properties/search/type',
                params: {
                  type: 'object'
                },
                message: 'should be object'
              }];
              return false;
            }
            var valid1 = errors === errs_1;
          }
          if (valid1) {
            var data1 = data.properties;
            if (data1 === undefined) {
              valid1 = true;
            } else {
              var errs_1 = errors;
              if ((data1 && typeof data1 === "object" && !Array.isArray(data1))) {
                var errs__1 = errors;
                var valid2 = true;
                if (data1.hintchars === undefined) {
                  valid2 = true;
                } else {
                  var errs_2 = errors;
                  if (typeof data1.hintchars !== "string") {
                    validate.errors = [{
                      keyword: 'type',
                      dataPath: (dataPath || '') + '.properties.hintchars',
                      schemaPath: '#/properties/properties/properties/hintchars/type',
                      params: {
                        type: 'string'
                      },
                      message: 'should be string'
                    }];
                    return false;
                  }
                  var valid2 = errors === errs_2;
                }
                if (valid2) {
                  if (data1.smoothscroll === undefined) {
                    valid2 = true;
                  } else {
                    var errs_2 = errors;
                    if (typeof data1.smoothscroll !== "boolean") {
                      validate.errors = [{
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.properties.smoothscroll',
                        schemaPath: '#/properties/properties/properties/smoothscroll/type',
                        params: {
                          type: 'boolean'
                        },
                        message: 'should be boolean'
                      }];
                      return false;
                    }
                    var valid2 = errors === errs_2;
                  }
                  if (valid2) {
                    if (data1.complete === undefined) {
                      valid2 = true;
                    } else {
                      var errs_2 = errors;
                      if (typeof data1.complete !== "string") {
                        validate.errors = [{
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.properties.complete',
                          schemaPath: '#/properties/properties/properties/complete/type',
                          params: {
                            type: 'string'
                          },
                          message: 'should be string'
                        }];
                        return false;
                      }
                      var valid2 = errors === errs_2;
                    }
                  }
                }
              } else {
                validate.errors = [{
                  keyword: 'type',
                  dataPath: (dataPath || '') + '.properties',
                  schemaPath: '#/properties/properties/type',
                  params: {
                    type: 'object'
                  },
                  message: 'should be object'
                }];
                return false;
              }
              var valid1 = errors === errs_1;
            }
            if (valid1) {
              var data1 = data.blacklist;
              if (data1 === undefined) {
                valid1 = true;
              } else {
                var errs_1 = errors;
                if (Array.isArray(data1)) {
                  var errs__1 = errors;
                  var valid1;
                  for (var i1 = 0; i1 < data1.length; i1++) {
                    var data2 = data1[i1];
                    var errs_2 = errors;
                    var errs__2 = errors;
                    var valid2 = false;
                    var errs_3 = errors;
                    if (typeof data2 !== "string") {
                      var err = {
                        keyword: 'type',
                        dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                        schemaPath: '#/properties/blacklist/items/anyOf/0/type',
                        params: {
                          type: 'string'
                        },
                        message: 'should be string'
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                    }
                    var valid3 = errors === errs_3;
                    valid2 = valid2 || valid3;
                    if (!valid2) {
                      var errs_3 = errors;
                      if ((data2 && typeof data2 === "object" && !Array.isArray(data2))) {
                        if (true) {
                          var errs__3 = errors;
                          var valid4 = true;
                          if (data2.url === undefined) {
                            valid4 = false;
                            var err = {
                              keyword: 'required',
                              dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                              schemaPath: '#/properties/blacklist/items/anyOf/1/required',
                              params: {
                                missingProperty: 'url'
                              },
                              message: 'should have required property \'url\''
                            };
                            if (vErrors === null) vErrors = [err];
                            else vErrors.push(err);
                            errors++;
                          } else {
                            var errs_4 = errors;
                            if (typeof data2.url !== "string") {
                              var err = {
                                keyword: 'type',
                                dataPath: (dataPath || '') + '.blacklist[' + i1 + '].url',
                                schemaPath: '#/properties/blacklist/items/anyOf/1/properties/url/type',
                                params: {
                                  type: 'string'
                                },
                                message: 'should be string'
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            }
                            var valid4 = errors === errs_4;
                          }
                          if (valid4) {
                            var data3 = data2.keys;
                            if (data3 === undefined) {
                              valid4 = false;
                              var err = {
                                keyword: 'required',
                                dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                                schemaPath: '#/properties/blacklist/items/anyOf/1/required',
                                params: {
                                  missingProperty: 'keys'
                                },
                                message: 'should have required property \'keys\''
                              };
                              if (vErrors === null) vErrors = [err];
                              else vErrors.push(err);
                              errors++;
                            } else {
                              var errs_4 = errors;
                              if (Array.isArray(data3)) {
                                var errs__4 = errors;
                                var valid4;
                                for (var i4 = 0; i4 < data3.length; i4++) {
                                  var errs_5 = errors;
                                  if (typeof data3[i4] !== "string") {
                                    var err = {
                                      keyword: 'type',
                                      dataPath: (dataPath || '') + '.blacklist[' + i1 + '].keys[' + i4 + ']',
                                      schemaPath: '#/properties/blacklist/items/anyOf/1/properties/keys/items/type',
                                      params: {
                                        type: 'string'
                                      },
                                      message: 'should be string'
                                    };
                                    if (vErrors === null) vErrors = [err];
                                    else vErrors.push(err);
                                    errors++;
                                  }
                                  var valid5 = errors === errs_5;
                                  if (!valid5) break;
                                }
                              } else {
                                var err = {
                                  keyword: 'type',
                                  dataPath: (dataPath || '') + '.blacklist[' + i1 + '].keys',
                                  schemaPath: '#/properties/blacklist/items/anyOf/1/properties/keys/type',
                                  params: {
                                    type: 'array'
                                  },
                                  message: 'should be array'
                                };
                                if (vErrors === null) vErrors = [err];
                                else vErrors.push(err);
                                errors++;
                              }
                              var valid4 = errors === errs_4;
                            }
                          }
                        }
                      } else {
                        var err = {
                          keyword: 'type',
                          dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                          schemaPath: '#/properties/blacklist/items/anyOf/1/type',
                          params: {
                            type: 'object'
                          },
                          message: 'should be object'
                        };
                        if (vErrors === null) vErrors = [err];
                        else vErrors.push(err);
                        errors++;
                      }
                      var valid3 = errors === errs_3;
                      valid2 = valid2 || valid3;
                    }
                    if (!valid2) {
                      var err = {
                        keyword: 'anyOf',
                        dataPath: (dataPath || '') + '.blacklist[' + i1 + ']',
                        schemaPath: '#/properties/blacklist/items/anyOf',
                        params: {},
                        message: 'should match some schema in anyOf'
                      };
                      if (vErrors === null) vErrors = [err];
                      else vErrors.push(err);
                      errors++;
                      validate.errors = vErrors;
                      return false;
                    } else {
                      errors = errs__2;
                      if (vErrors !== null) {
                        if (errs__2) vErrors.length = errs__2;
                        else vErrors = null;
                      }
                    }
                    var valid2 = errors === errs_2;
                    if (!valid2) break;
                  }
                } else {
                  validate.errors = [{
                    keyword: 'type',
                    dataPath: (dataPath || '') + '.blacklist',
                    schemaPath: '#/properties/blacklist/type',
                    params: {
                      type: 'array'
                    },
                    message: 'should be array'
                  }];
                  return false;
                }
                var valid1 = errors === errs_1;
              }
            }
          }
        }
      }
    } else {
      validate.errors = [{
        keyword: 'type',
        dataPath: (dataPath || '') + "",
        schemaPath: '#/type',
        params: {
          type: 'object'
        },
        message: 'should be object'
      }];
      return false;
    }
    validate.errors = vErrors;
    return errors === 0;
  };
})();
validate.schema = {
  "type": "object",
  "properties": {
    "keymaps": {
      "type": "object",
      "patternProperties": {
        ".*": {
          "type": "object",
          "properties": {
            "type": {
              "type": "string"
            }
          },
          "required": ["type"]
        }
      }
    },
    "search": {
      "type": "object",
      "properties": {
        "default": {
          "type": "string"
        },
        "engines": {
          "type": "object",
          "patternProperties": {
            ".*": {
              "type": "string"
            }
          }
        }
      },
      "required": ["default", "engines"]
    },
    "properties": {
      "type": "object",
      "properties": {
        "hintchars": {
          "type": "string"
        },
        "smoothscroll": {
          "type": "boolean"
        },
        "complete": {
          "type": "string"
        }
      }
    },
    "blacklist": {
      "type": "array",
      "items": {
        "anyOf": [{
          "type": "string"
        }, {
          "type": "object",
          "properties": {
            "url": {
              "type": "string"
            },
            "keys": {
              "type": "array",
              "items": {
                "type": "string"
              }
            }
          },
          "required": ["url", "keys"]
        }]
      }
    }
  },
  "additionalProperties": false
};
validate.errors = null;
module.exports = validate;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26),
    getRawTag = __webpack_require__(56),
    objectToString = __webpack_require__(57);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(54);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 27 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(1);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Context.js

var ReactReduxContext = react_default.a.createContext(null);
/* harmony default export */ var components_Context = (ReactReduxContext);
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/batch.js
// Default to a dummy "batch" implementation that just runs the callback
function defaultNoopBatch(callback) {
  callback();
}

var batch_batch = defaultNoopBatch; // Allow injecting another batching function later

var setBatch = function setBatch(newBatch) {
  return batch_batch = newBatch;
}; // Supply a getter just to skip dealing with ESM bindings

var getBatch = function getBatch() {
  return batch_batch;
};
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/Subscription.js
 // encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  var batch = getBatch(); // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?

  var current = [];
  var next = [];
  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      batch(function () {
        for (var i = 0; i < listeners.length; i++) {
          listeners[i]();
        }
      });
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);
      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;
        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription =
/*#__PURE__*/
function () {
  function Subscription(store, parentSub) {
    this.store = store;
    this.parentSub = parentSub;
    this.unsubscribe = null;
    this.listeners = nullListeners;
    this.handleChangeWrapper = this.handleChangeWrapper.bind(this);
  }

  var _proto = Subscription.prototype;

  _proto.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  _proto.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  _proto.handleChangeWrapper = function handleChangeWrapper() {
    if (this.onStateChange) {
      this.onStateChange();
    }
  };

  _proto.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  _proto.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper);
      this.listeners = createListenerCollection();
    }
  };

  _proto.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();


// CONCATENATED MODULE: ./node_modules/react-redux/es/components/Provider.js





function Provider(_ref) {
  var store = _ref.store,
      context = _ref.context,
      children = _ref.children;
  var contextValue = Object(react["useMemo"])(function () {
    var subscription = new Subscription(store);
    subscription.onStateChange = subscription.notifyNestedSubs;
    return {
      store: store,
      subscription: subscription
    };
  }, [store]);
  var previousState = Object(react["useMemo"])(function () {
    return store.getState();
  }, [store]);
  Object(react["useEffect"])(function () {
    var subscription = contextValue.subscription;
    subscription.trySubscribe();

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs();
    }

    return function () {
      subscription.tryUnsubscribe();
      subscription.onStateChange = null;
    };
  }, [contextValue, previousState]);
  var Context = context || ReactReduxContext;
  return react_default.a.createElement(Context.Provider, {
    value: contextValue
  }, children);
}

Provider.propTypes = {
  store: prop_types_default.a.shape({
    subscribe: prop_types_default.a.func.isRequired,
    dispatch: prop_types_default.a.func.isRequired,
    getState: prop_types_default.a.func.isRequired
  }),
  context: prop_types_default.a.object,
  children: prop_types_default.a.any
};
/* harmony default export */ var components_Provider = (Provider);
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(20);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);

// EXTERNAL MODULE: ./node_modules/invariant/browser.js
var browser = __webpack_require__(4);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// EXTERNAL MODULE: ./node_modules/react-redux/node_modules/react-is/index.js
var react_is = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/useIsomorphicLayoutEffect.js
 // React currently throws a warning when using useLayoutEffect on the server.
// To get around it, we can conditionally useEffect on the server (no-op) and
// useLayoutEffect in the browser. We need useLayoutEffect to ensure the store
// subscription callback always has the selector from the latest render commit
// available, otherwise a store update may happen between render and the effect,
// which may cause missed updates; we also must ensure the store subscription
// is created synchronously, otherwise a store update may occur before the
// subscription is created and an inconsistent state may be observed

var isHopefullyDomEnvironment = typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';
var useIsomorphicLayoutEffect = isHopefullyDomEnvironment ? react["useLayoutEffect"] : react["useEffect"];
// CONCATENATED MODULE: ./node_modules/react-redux/es/components/connectAdvanced.js








 // Define some constant arrays just to avoid re-creating these

var EMPTY_ARRAY = [];
var NO_SUBSCRIPTION_ARRAY = [null, null];

var stringifyComponent = function stringifyComponent(Comp) {
  try {
    return JSON.stringify(Comp);
  } catch (err) {
    return String(Comp);
  }
};

function storeStateUpdatesReducer(state, action) {
  var updateCount = state[1];
  return [action.payload, updateCount + 1];
}

var initStateUpdates = function initStateUpdates() {
  return [null, 0];
};

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
      export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
    Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
    Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory, // options object:
_ref) {
  if (_ref === void 0) {
    _ref = {};
  }

  var _ref2 = _ref,
      _ref2$getDisplayName = _ref2.getDisplayName,
      getDisplayName = _ref2$getDisplayName === void 0 ? function (name) {
    return "ConnectAdvanced(" + name + ")";
  } : _ref2$getDisplayName,
      _ref2$methodName = _ref2.methodName,
      methodName = _ref2$methodName === void 0 ? 'connectAdvanced' : _ref2$methodName,
      _ref2$renderCountProp = _ref2.renderCountProp,
      renderCountProp = _ref2$renderCountProp === void 0 ? undefined : _ref2$renderCountProp,
      _ref2$shouldHandleSta = _ref2.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref2$shouldHandleSta === void 0 ? true : _ref2$shouldHandleSta,
      _ref2$storeKey = _ref2.storeKey,
      storeKey = _ref2$storeKey === void 0 ? 'store' : _ref2$storeKey,
      _ref2$withRef = _ref2.withRef,
      withRef = _ref2$withRef === void 0 ? false : _ref2$withRef,
      _ref2$forwardRef = _ref2.forwardRef,
      forwardRef = _ref2$forwardRef === void 0 ? false : _ref2$forwardRef,
      _ref2$context = _ref2.context,
      context = _ref2$context === void 0 ? ReactReduxContext : _ref2$context,
      connectOptions = _objectWithoutPropertiesLoose(_ref2, ["getDisplayName", "methodName", "renderCountProp", "shouldHandleStateChanges", "storeKey", "withRef", "forwardRef", "context"]);

  browser_default()(renderCountProp === undefined, "renderCountProp is removed. render counting is built into the latest React Dev Tools profiling extension");
  browser_default()(!withRef, 'withRef is removed. To access the wrapped instance, use a ref on the connected component');
  var customStoreWarningMessage = 'To use a custom Redux store for specific components, create a custom React context with ' + "React.createContext(), and pass the context object to React Redux's Provider and specific components" + ' like: <Provider context={MyContext}><ConnectedComponent context={MyContext} /></Provider>. ' + 'You may also pass a {context : MyContext} option to connect';
  browser_default()(storeKey === 'store', 'storeKey has been removed and does not do anything. ' + customStoreWarningMessage);
  var Context = context;
  return function wrapWithConnect(WrappedComponent) {
    if (false) {}

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var pure = connectOptions.pure;

    function createChildSelector(store) {
      return selectorFactory(store.dispatch, selectorFactoryOptions);
    } // If we aren't running in "pure" mode, we don't want to memoize values.
    // To avoid conditionally calling hooks, we fall back to a tiny wrapper
    // that just executes the given callback immediately.


    var usePureOnlyMemo = pure ? react["useMemo"] : function (callback) {
      return callback();
    };

    function ConnectFunction(props) {
      var _useMemo = Object(react["useMemo"])(function () {
        // Distinguish between actual "data" props that were passed to the wrapper component,
        // and values needed to control behavior (forwarded refs, alternate context instances).
        // To maintain the wrapperProps object reference, memoize this destructuring.
        var forwardedRef = props.forwardedRef,
            wrapperProps = _objectWithoutPropertiesLoose(props, ["forwardedRef"]);

        return [props.context, forwardedRef, wrapperProps];
      }, [props]),
          propsContext = _useMemo[0],
          forwardedRef = _useMemo[1],
          wrapperProps = _useMemo[2];

      var ContextToUse = Object(react["useMemo"])(function () {
        // Users may optionally pass in a custom context instance to use instead of our ReactReduxContext.
        // Memoize the check that determines which context instance we should use.
        return propsContext && propsContext.Consumer && Object(react_is["isContextConsumer"])(react_default.a.createElement(propsContext.Consumer, null)) ? propsContext : Context;
      }, [propsContext, Context]); // Retrieve the store and ancestor subscription via context, if available

      var contextValue = Object(react["useContext"])(ContextToUse); // The store _must_ exist as either a prop or in context.
      // We'll check to see if it _looks_ like a Redux store first.
      // This allows us to pass through a `store` prop that is just a plain value.

      var didStoreComeFromProps = Boolean(props.store) && Boolean(props.store.getState) && Boolean(props.store.dispatch);
      var didStoreComeFromContext = Boolean(contextValue) && Boolean(contextValue.store);
      browser_default()(didStoreComeFromProps || didStoreComeFromContext, "Could not find \"store\" in the context of " + ("\"" + displayName + "\". Either wrap the root component in a <Provider>, ") + "or pass a custom React context provider to <Provider> and the corresponding " + ("React context consumer to " + displayName + " in connect options.")); // Based on the previous check, one of these must be true

      var store = didStoreComeFromProps ? props.store : contextValue.store;
      var childPropsSelector = Object(react["useMemo"])(function () {
        // The child props selector needs the store reference as an input.
        // Re-create this selector whenever the store changes.
        return createChildSelector(store);
      }, [store]);

      var _useMemo2 = Object(react["useMemo"])(function () {
        if (!shouldHandleStateChanges) return NO_SUBSCRIPTION_ARRAY; // This Subscription's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.

        var subscription = new Subscription(store, didStoreComeFromProps ? null : contextValue.subscription); // `notifyNestedSubs` is duplicated to handle the case where the component is unmounted in
        // the middle of the notification loop, where `subscription` will then be null. This can
        // probably be avoided if Subscription's listeners logic is changed to not call listeners
        // that have been unsubscribed in the  middle of the notification loop.

        var notifyNestedSubs = subscription.notifyNestedSubs.bind(subscription);
        return [subscription, notifyNestedSubs];
      }, [store, didStoreComeFromProps, contextValue]),
          subscription = _useMemo2[0],
          notifyNestedSubs = _useMemo2[1]; // Determine what {store, subscription} value should be put into nested context, if necessary,
      // and memoize that value to avoid unnecessary context updates.


      var overriddenContextValue = Object(react["useMemo"])(function () {
        if (didStoreComeFromProps) {
          // This component is directly subscribed to a store from props.
          // We don't want descendants reading from this store - pass down whatever
          // the existing context value is from the nearest connected ancestor.
          return contextValue;
        } // Otherwise, put this component's subscription instance into context, so that
        // connected descendants won't update until after this component is done


        return _extends({}, contextValue, {
          subscription: subscription
        });
      }, [didStoreComeFromProps, contextValue, subscription]); // We need to force this wrapper component to re-render whenever a Redux store update
      // causes a change to the calculated child component props (or we caught an error in mapState)

      var _useReducer = Object(react["useReducer"])(storeStateUpdatesReducer, EMPTY_ARRAY, initStateUpdates),
          _useReducer$ = _useReducer[0],
          previousStateUpdateResult = _useReducer$[0],
          forceComponentUpdateDispatch = _useReducer[1]; // Propagate any mapState/mapDispatch errors upwards


      if (previousStateUpdateResult && previousStateUpdateResult.error) {
        throw previousStateUpdateResult.error;
      } // Set up refs to coordinate values between the subscription effect and the render logic


      var lastChildProps = Object(react["useRef"])();
      var lastWrapperProps = Object(react["useRef"])(wrapperProps);
      var childPropsFromStoreUpdate = Object(react["useRef"])();
      var renderIsScheduled = Object(react["useRef"])(false);
      var actualChildProps = usePureOnlyMemo(function () {
        // Tricky logic here:
        // - This render may have been triggered by a Redux store update that produced new child props
        // - However, we may have gotten new wrapper props after that
        // If we have new child props, and the same wrapper props, we know we should use the new child props as-is.
        // But, if we have new wrapper props, those might change the child props, so we have to recalculate things.
        // So, we'll use the child props from store update only if the wrapper props are the same as last time.
        if (childPropsFromStoreUpdate.current && wrapperProps === lastWrapperProps.current) {
          return childPropsFromStoreUpdate.current;
        } // TODO We're reading the store directly in render() here. Bad idea?
        // This will likely cause Bad Things (TM) to happen in Concurrent Mode.
        // Note that we do this because on renders _not_ caused by store updates, we need the latest store state
        // to determine what the child props should be.


        return childPropsSelector(store.getState(), wrapperProps);
      }, [store, previousStateUpdateResult, wrapperProps]); // We need this to execute synchronously every time we re-render. However, React warns
      // about useLayoutEffect in SSR, so we try to detect environment and fall back to
      // just useEffect instead to avoid the warning, since neither will run anyway.

      useIsomorphicLayoutEffect(function () {
        // We want to capture the wrapper props and child props we used for later comparisons
        lastWrapperProps.current = wrapperProps;
        lastChildProps.current = actualChildProps;
        renderIsScheduled.current = false; // If the render was from a store update, clear out that reference and cascade the subscriber update

        if (childPropsFromStoreUpdate.current) {
          childPropsFromStoreUpdate.current = null;
          notifyNestedSubs();
        }
      }); // Our re-subscribe logic only runs when the store/subscription setup changes

      useIsomorphicLayoutEffect(function () {
        // If we're not subscribed to the store, nothing to do here
        if (!shouldHandleStateChanges) return; // Capture values for checking if and when this component unmounts

        var didUnsubscribe = false;
        var lastThrownError = null; // We'll run this callback every time a store subscription update propagates to this component

        var checkForUpdates = function checkForUpdates() {
          if (didUnsubscribe) {
            // Don't run stale listeners.
            // Redux doesn't guarantee unsubscriptions happen until next dispatch.
            return;
          }

          var latestStoreState = store.getState();
          var newChildProps, error;

          try {
            // Actually run the selector with the most recent store state and wrapper props
            // to determine what the child props should be
            newChildProps = childPropsSelector(latestStoreState, lastWrapperProps.current);
          } catch (e) {
            error = e;
            lastThrownError = e;
          }

          if (!error) {
            lastThrownError = null;
          } // If the child props haven't changed, nothing to do here - cascade the subscription update


          if (newChildProps === lastChildProps.current) {
            if (!renderIsScheduled.current) {
              notifyNestedSubs();
            }
          } else {
            // Save references to the new child props.  Note that we track the "child props from store update"
            // as a ref instead of a useState/useReducer because we need a way to determine if that value has
            // been processed.  If this went into useState/useReducer, we couldn't clear out the value without
            // forcing another re-render, which we don't want.
            lastChildProps.current = newChildProps;
            childPropsFromStoreUpdate.current = newChildProps;
            renderIsScheduled.current = true; // If the child props _did_ change (or we caught an error), this wrapper component needs to re-render

            forceComponentUpdateDispatch({
              type: 'STORE_UPDATED',
              payload: {
                error: error
              }
            });
          }
        }; // Actually subscribe to the nearest connected ancestor (or store)


        subscription.onStateChange = checkForUpdates;
        subscription.trySubscribe(); // Pull data from the store after first render in case the store has
        // changed since we began.

        checkForUpdates();

        var unsubscribeWrapper = function unsubscribeWrapper() {
          didUnsubscribe = true;
          subscription.tryUnsubscribe();
          subscription.onStateChange = null;

          if (lastThrownError) {
            // It's possible that we caught an error due to a bad mapState function, but the
            // parent re-rendered without this component and we're about to unmount.
            // This shouldn't happen as long as we do top-down subscriptions correctly, but
            // if we ever do those wrong, this throw will surface the error in our tests.
            // In that case, throw the error from here so it doesn't get lost.
            throw lastThrownError;
          }
        };

        return unsubscribeWrapper;
      }, [store, subscription, childPropsSelector]); // Now that all that's done, we can finally try to actually render the child component.
      // We memoize the elements for the rendered child component as an optimization.

      var renderedWrappedComponent = Object(react["useMemo"])(function () {
        return react_default.a.createElement(WrappedComponent, _extends({}, actualChildProps, {
          ref: forwardedRef
        }));
      }, [forwardedRef, WrappedComponent, actualChildProps]); // If React sees the exact same element reference as last time, it bails out of re-rendering
      // that child, same as if it was wrapped in React.memo() or returned false from shouldComponentUpdate.

      var renderedChild = Object(react["useMemo"])(function () {
        if (shouldHandleStateChanges) {
          // If this component is subscribed to store updates, we need to pass its own
          // subscription instance down to our descendants. That means rendering the same
          // Context instance, and putting a different value into the context.
          return react_default.a.createElement(ContextToUse.Provider, {
            value: overriddenContextValue
          }, renderedWrappedComponent);
        }

        return renderedWrappedComponent;
      }, [ContextToUse, renderedWrappedComponent, overriddenContextValue]);
      return renderedChild;
    } // If we're in "pure" mode, ensure our wrapper component only re-renders when incoming props have changed.


    var Connect = pure ? react_default.a.memo(ConnectFunction) : ConnectFunction;
    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;

    if (forwardRef) {
      var forwarded = react_default.a.forwardRef(function forwardConnectRef(props, ref) {
        return react_default.a.createElement(Connect, _extends({}, props, {
          forwardedRef: ref
        }));
      });
      forwarded.displayName = displayName;
      forwarded.WrappedComponent = WrappedComponent;
      return hoist_non_react_statics_cjs_default()(forwarded, WrappedComponent);
    }

    return hoist_non_react_statics_cjs_default()(Connect, WrappedComponent);
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/shallowEqual.js
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);
  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js
var redux = __webpack_require__(19);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/isPlainObject.js
/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = Object.getPrototypeOf(obj);
  if (proto === null) return true;
  var baseProto = proto;

  while (Object.getPrototypeOf(baseProto) !== null) {
    baseProto = Object.getPrototypeOf(baseProto);
  }

  return proto === baseProto;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/warning.js
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */

}
// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/verifyPlainObject.js


function verifyPlainObject(value, displayName, methodName) {
  if (!isPlainObject(value)) {
    warning(methodName + "() in " + displayName + " must return a plain object. Instead received " + value + ".");
  }
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/wrapMapToProps.js

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }

    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
} // dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
//
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..

function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
} // Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
//
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//

function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    }; // allow detectFactoryAndVerify to get ownProps


    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) {}
      return props;
    };

    return proxy;
  };
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapDispatchToProps.js


function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? wrapMapToPropsFunc(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}
function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? wrapMapToPropsConstant(function (dispatch) {
    return {
      dispatch: dispatch
    };
  }) : undefined;
}
function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? wrapMapToPropsConstant(function (dispatch) {
    return Object(redux["bindActionCreators"])(mapDispatchToProps, dispatch);
  }) : undefined;
}
/* harmony default export */ var connect_mapDispatchToProps = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mapStateToProps.js

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? wrapMapToPropsFunc(mapStateToProps, 'mapStateToProps') : undefined;
}
function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? wrapMapToPropsConstant(function () {
    return {};
  }) : undefined;
}
/* harmony default export */ var connect_mapStateToProps = ([whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/mergeProps.js


function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, {}, stateProps, {}, dispatchProps);
}
function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;
    var hasRunOnce = false;
    var mergedProps;
    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;
        if (false) {}
      }

      return mergedProps;
    };
  };
}
function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}
function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}
/* harmony default export */ var connect_mergeProps = ([whenMergePropsIsFunction, whenMergePropsIsOmitted]);
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/verifySubselectors.js


function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error("Unexpected value for " + methodName + " in " + displayName + ".");
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!Object.prototype.hasOwnProperty.call(selector, 'dependsOnOwnProps')) {
      warning("The selector for " + methodName + " of " + displayName + " did not specify a value for dependsOnOwnProps.");
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/selectorFactory.js


function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}
function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;
  var hasRunAtLeastOnce = false;
  var state;
  var ownProps;
  var stateProps;
  var dispatchProps;
  var mergedProps;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);
    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;
    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;
    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
} // TODO: Add more comments
// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutPropertiesLoose(_ref2, ["initMapStateToProps", "initMapDispatchToProps", "initMergeProps"]);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {}

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;
  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/connect/connect.js








/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error("Invalid value of type " + typeof arg + " for " + name + " argument when connecting component " + options.wrappedComponentName + ".");
  };
}

function strictEqual(a, b) {
  return a === b;
} // createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios


function createConnect(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === void 0 ? connectAdvanced : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === void 0 ? connect_mapStateToProps : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === void 0 ? connect_mapDispatchToProps : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === void 0 ? connect_mergeProps : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === void 0 ? finalPropsSelectorFactory : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps, _ref2) {
    if (_ref2 === void 0) {
      _ref2 = {};
    }

    var _ref3 = _ref2,
        _ref3$pure = _ref3.pure,
        pure = _ref3$pure === void 0 ? true : _ref3$pure,
        _ref3$areStatesEqual = _ref3.areStatesEqual,
        areStatesEqual = _ref3$areStatesEqual === void 0 ? strictEqual : _ref3$areStatesEqual,
        _ref3$areOwnPropsEqua = _ref3.areOwnPropsEqual,
        areOwnPropsEqual = _ref3$areOwnPropsEqua === void 0 ? shallowEqual : _ref3$areOwnPropsEqua,
        _ref3$areStatePropsEq = _ref3.areStatePropsEqual,
        areStatePropsEqual = _ref3$areStatePropsEq === void 0 ? shallowEqual : _ref3$areStatePropsEq,
        _ref3$areMergedPropsE = _ref3.areMergedPropsEqual,
        areMergedPropsEqual = _ref3$areMergedPropsE === void 0 ? shallowEqual : _ref3$areMergedPropsE,
        extraOptions = _objectWithoutPropertiesLoose(_ref3, ["pure", "areStatesEqual", "areOwnPropsEqual", "areStatePropsEqual", "areMergedPropsEqual"]);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');
    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',
      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return "Connect(" + name + ")";
      },
      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),
      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual
    }, extraOptions));
  };
}
/* harmony default export */ var connect_connect = (createConnect());
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useReduxContext.js



/**
 * A hook to access the value of the `ReactReduxContext`. This is a low-level
 * hook that you should usually not need to call directly.
 *
 * @returns {any} the value of the `ReactReduxContext`
 *
 * @example
 *
 * import React from 'react'
 * import { useReduxContext } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const { store } = useReduxContext()
 *   return <div>{store.getState()}</div>
 * }
 */

function useReduxContext_useReduxContext() {
  var contextValue = Object(react["useContext"])(ReactReduxContext);
  browser_default()(contextValue, 'could not find react-redux context value; please ensure the component is wrapped in a <Provider>');
  return contextValue;
}
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useStore.js



/**
 * Hook factory, which creates a `useStore` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useStore` hook bound to the specified context.
 */

function createStoreHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useStore() {
    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store;

    return store;
  };
}
/**
 * A hook to access the redux store.
 *
 * @returns {any} the redux store
 *
 * @example
 *
 * import React from 'react'
 * import { useStore } from 'react-redux'
 *
 * export const ExampleComponent = () => {
 *   const store = useStore()
 *   return <div>{store.getState()}</div>
 * }
 */

var useStore_useStore = createStoreHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useDispatch.js


/**
 * Hook factory, which creates a `useDispatch` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useDispatch` hook bound to the specified context.
 */

function createDispatchHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useStore = context === ReactReduxContext ? useStore_useStore : createStoreHook(context);
  return function useDispatch() {
    var store = useStore();
    return store.dispatch;
  };
}
/**
 * A hook to access the redux `dispatch` function.
 *
 * @returns {any|function} redux store's `dispatch` function
 *
 * @example
 *
 * import React, { useCallback } from 'react'
 * import { useDispatch } from 'react-redux'
 *
 * export const CounterComponent = ({ value }) => {
 *   const dispatch = useDispatch()
 *   const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
 *   return (
 *     <div>
 *       <span>{value}</span>
 *       <button onClick={increaseCounter}>Increase counter</button>
 *     </div>
 *   )
 * }
 */

var useDispatch = createDispatchHook();
// CONCATENATED MODULE: ./node_modules/react-redux/es/hooks/useSelector.js







var refEquality = function refEquality(a, b) {
  return a === b;
};

function useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub) {
  var _useReducer = Object(react["useReducer"])(function (s) {
    return s + 1;
  }, 0),
      forceRender = _useReducer[1];

  var subscription = Object(react["useMemo"])(function () {
    return new Subscription(store, contextSub);
  }, [store, contextSub]);
  var latestSubscriptionCallbackError = Object(react["useRef"])();
  var latestSelector = Object(react["useRef"])();
  var latestSelectedState = Object(react["useRef"])();
  var selectedState;

  try {
    if (selector !== latestSelector.current || latestSubscriptionCallbackError.current) {
      selectedState = selector(store.getState());
    } else {
      selectedState = latestSelectedState.current;
    }
  } catch (err) {
    var errorMessage = "An error occurred while selecting the store state: " + err.message + ".";

    if (latestSubscriptionCallbackError.current) {
      errorMessage += "\nThe error may be correlated with this previous error:\n" + latestSubscriptionCallbackError.current.stack + "\n\nOriginal stack trace:";
    }

    throw new Error(errorMessage);
  }

  useIsomorphicLayoutEffect(function () {
    latestSelector.current = selector;
    latestSelectedState.current = selectedState;
    latestSubscriptionCallbackError.current = undefined;
  });
  useIsomorphicLayoutEffect(function () {
    function checkForUpdates() {
      try {
        var newSelectedState = latestSelector.current(store.getState());

        if (equalityFn(newSelectedState, latestSelectedState.current)) {
          return;
        }

        latestSelectedState.current = newSelectedState;
      } catch (err) {
        // we ignore all errors here, since when the component
        // is re-rendered, the selectors are called again, and
        // will throw again, if neither props nor store state
        // changed
        latestSubscriptionCallbackError.current = err;
      }

      forceRender({});
    }

    subscription.onStateChange = checkForUpdates;
    subscription.trySubscribe();
    checkForUpdates();
    return function () {
      return subscription.tryUnsubscribe();
    };
  }, [store, subscription]);
  return selectedState;
}
/**
 * Hook factory, which creates a `useSelector` hook bound to a given context.
 *
 * @param {Function} [context=ReactReduxContext] Context passed to your `<Provider>`.
 * @returns {Function} A `useSelector` hook bound to the specified context.
 */


function createSelectorHook(context) {
  if (context === void 0) {
    context = ReactReduxContext;
  }

  var useReduxContext = context === ReactReduxContext ? useReduxContext_useReduxContext : function () {
    return Object(react["useContext"])(context);
  };
  return function useSelector(selector, equalityFn) {
    if (equalityFn === void 0) {
      equalityFn = refEquality;
    }

    browser_default()(selector, "You must pass a selector to useSelectors");

    var _useReduxContext = useReduxContext(),
        store = _useReduxContext.store,
        contextSub = _useReduxContext.subscription;

    return useSelectorWithStoreAndSubscription(selector, equalityFn, store, contextSub);
  };
}
/**
 * A hook to access the redux store's state. This hook takes a selector function
 * as an argument. The selector is called with the store state.
 *
 * This hook takes an optional equality comparison function as the second parameter
 * that allows you to customize the way the selected state is compared to determine
 * whether the component needs to be re-rendered.
 *
 * @param {Function} selector the selector function
 * @param {Function=} equalityFn the function that will be used to determine equality
 *
 * @returns {any} the selected state
 *
 * @example
 *
 * import React from 'react'
 * import { useSelector } from 'react-redux'
 *
 * export const CounterComponent = () => {
 *   const counter = useSelector(state => state.counter)
 *   return <div>{counter}</div>
 * }
 */

var useSelector_useSelector = createSelectorHook();
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(18);

// CONCATENATED MODULE: ./node_modules/react-redux/es/utils/reactBatchedUpdates.js
/* eslint-disable import/no-unresolved */

// CONCATENATED MODULE: ./node_modules/react-redux/es/index.js
/* concated harmony reexport Provider */__webpack_require__.d(__webpack_exports__, "Provider", function() { return components_Provider; });
/* concated harmony reexport connectAdvanced */__webpack_require__.d(__webpack_exports__, "connectAdvanced", function() { return connectAdvanced; });
/* concated harmony reexport ReactReduxContext */__webpack_require__.d(__webpack_exports__, "ReactReduxContext", function() { return ReactReduxContext; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect_connect; });
/* concated harmony reexport batch */__webpack_require__.d(__webpack_exports__, "batch", function() { return react_dom["unstable_batchedUpdates"]; });
/* concated harmony reexport useDispatch */__webpack_require__.d(__webpack_exports__, "useDispatch", function() { return useDispatch; });
/* concated harmony reexport createDispatchHook */__webpack_require__.d(__webpack_exports__, "createDispatchHook", function() { return createDispatchHook; });
/* concated harmony reexport useSelector */__webpack_require__.d(__webpack_exports__, "useSelector", function() { return useSelector_useSelector; });
/* concated harmony reexport createSelectorHook */__webpack_require__.d(__webpack_exports__, "createSelectorHook", function() { return createSelectorHook; });
/* concated harmony reexport useStore */__webpack_require__.d(__webpack_exports__, "useStore", function() { return useStore_useStore; });
/* concated harmony reexport createStoreHook */__webpack_require__.d(__webpack_exports__, "createStoreHook", function() { return createStoreHook; });
/* concated harmony reexport shallowEqual */__webpack_require__.d(__webpack_exports__, "shallowEqual", function() { return shallowEqual; });










setBatch(react_dom["unstable_batchedUpdates"]);


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(46);
} else {}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var h=__webpack_require__(24),n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.forward_ref"):60112,y=n?Symbol.for("react.suspense"):60113;n&&Symbol.for("react.suspense_list");
var z=n?Symbol.for("react.memo"):60115,aa=n?Symbol.for("react.lazy"):60116;n&&Symbol.for("react.fundamental");n&&Symbol.for("react.responder");n&&Symbol.for("react.scope");var A="function"===typeof Symbol&&Symbol.iterator;
function B(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
function E(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(B(85));this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,c){this.props=a;this.context=b;this.refs=D;this.updater=c||C}var H=G.prototype=new F;
H.constructor=G;h(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,c){var e,d={},g=null,l=null;if(null!=b)for(e in void 0!==b.ref&&(l=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,e)&&!L.hasOwnProperty(e)&&(d[e]=b[e]);var f=arguments.length-2;if(1===f)d.children=c;else if(1<f){for(var k=Array(f),m=0;m<f;m++)k[m]=arguments[m+2];d.children=k}if(a&&a.defaultProps)for(e in f=a.defaultProps,f)void 0===d[e]&&(d[e]=f[e]);return{$$typeof:p,type:a,key:g,ref:l,props:d,_owner:J.current}}
function ba(a,b){return{$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return"object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return"$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,c,e){if(P.length){var d=P.pop();d.result=a;d.keyPrefix=b;d.func=c;d.context=e;d.count=0;return d}return{result:a,keyPrefix:b,func:c,context:e,count:0}}
function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a)}
function S(a,b,c,e){var d=typeof a;if("undefined"===d||"boolean"===d)a=null;var g=!1;if(null===a)g=!0;else switch(d){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0}}if(g)return c(e,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var l=0;l<a.length;l++){d=a[l];var f=b+T(d,l);g+=S(d,f,c,e)}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),l=
0;!(d=a.next()).done;)d=d.value,f=b+T(d,l++),g+=S(d,f,c,e);else if("object"===d)throw c=""+a,Error(B(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,""));return g}function U(a,b,c){return null==a?0:S(a,"",b,c)}function T(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ca(a,b){a.func.call(a.context,b,a.count++)}
function da(a,b,c){var e=a.result,d=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,e,c,function(a){return a}):null!=a&&(N(a)&&(a=ba(a,d+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c)),e.push(a))}function V(a,b,c,e,d){var g="";null!=c&&(g=(""+c).replace(O,"$&/")+"/");b=Q(b,g,e,d);U(a,da,b);R(b)}function W(){var a=I.current;if(null===a)throw Error(B(321));return a}
var X={Children:{map:function(a,b,c){if(null==a)return a;var e=[];V(a,e,null,b,c);return e},forEach:function(a,b,c){if(null==a)return a;b=Q(null,null,b,c);U(a,ca,b);R(b)},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(B(143));return a}},createRef:function(){return{current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:x,render:a}},lazy:function(a){return{$$typeof:aa,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:z,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
b,c){return W().useImperativeHandle(a,b,c)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,c){return W().useReducer(a,b,c)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,Profiler:u,StrictMode:t,Suspense:y,createElement:M,cloneElement:function(a,b,c){if(null===a||void 0===a)throw Error(B(267,a));var e=h({},a.props),d=a.key,g=a.ref,l=a._owner;
if(null!=b){void 0!==b.ref&&(g=b.ref,l=J.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var f=a.type.defaultProps;for(k in b)K.call(b,k)&&!L.hasOwnProperty(k)&&(e[k]=void 0===b[k]&&void 0!==f?f[k]:b[k])}var k=arguments.length-2;if(1===k)e.children=c;else if(1<k){f=Array(k);for(var m=0;m<k;m++)f[m]=arguments[m+2];e.children=f}return{$$typeof:p,type:a.type,key:d,ref:g,props:e,_owner:l}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.12.0",
__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:J,IsSomeRendererActing:{current:!1},assign:h}},Y={default:X},Z=Y&&X||Y;module.exports=Z.default||Z;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(1),n=__webpack_require__(24),q=__webpack_require__(40);function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));var ba=null,ca={};
function da(){if(ba)for(var a in ca){var b=ca[a],c=ba.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!ea[c]){if(!b.extractEvents)throw Error(u(97,a));ea[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(fa.hasOwnProperty(h))throw Error(u(99,h));fa[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ha(k[e],g,h);e=!0}else f.registrationName?(ha(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ha(a,b,c){if(ia[a])throw Error(u(100,a));ia[a]=b;ja[a]=b.eventTypes[c].dependencies}var ea=[],fa={},ia={},ja={};function ka(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var la=!1,ma=null,na=!1,oa=null,pa={onError:function(a){la=!0;ma=a}};function qa(a,b,c,d,e,f,g,h,k){la=!1;ma=null;ka.apply(pa,arguments)}
function ra(a,b,c,d,e,f,g,h,k){qa.apply(this,arguments);if(la){if(la){var l=ma;la=!1;ma=null}else throw Error(u(198));na||(na=!0,oa=l)}}var sa=null,ua=null,va=null;function wa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=va(c);ra(d,b,void 0,a);a.currentTarget=null}function xa(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}
function ya(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var za=null;function Aa(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)wa(a,b[d],c[d]);else b&&wa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function Ba(a){null!==a&&(za=xa(za,a));a=za;za=null;if(a){ya(a,Aa);if(za)throw Error(u(95));if(na)throw a=oa,na=!1,oa=null,a;}}
var Ca={injectEventPluginOrder:function(a){if(ba)throw Error(u(101));ba=Array.prototype.slice.call(a);da()},injectEventPluginsByName:function(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!ca.hasOwnProperty(c)||ca[c]!==d){if(ca[c])throw Error(u(102,c));ca[c]=d;b=!0}}b&&da()}};
function Da(a,b){var c=a.stateNode;if(!c)return null;var d=sa(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,b,typeof c));
return c}var Ea=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ea.hasOwnProperty("ReactCurrentDispatcher")||(Ea.ReactCurrentDispatcher={current:null});Ea.hasOwnProperty("ReactCurrentBatchConfig")||(Ea.ReactCurrentBatchConfig={suspense:null});
var Fa=/^(.*)[\\\/]/,w="function"===typeof Symbol&&Symbol.for,Ga=w?Symbol.for("react.element"):60103,Ha=w?Symbol.for("react.portal"):60106,Ia=w?Symbol.for("react.fragment"):60107,Ja=w?Symbol.for("react.strict_mode"):60108,Ka=w?Symbol.for("react.profiler"):60114,La=w?Symbol.for("react.provider"):60109,Ma=w?Symbol.for("react.context"):60110,Na=w?Symbol.for("react.concurrent_mode"):60111,Oa=w?Symbol.for("react.forward_ref"):60112,Pa=w?Symbol.for("react.suspense"):60113,Qa=w?Symbol.for("react.suspense_list"):
60120,Ra=w?Symbol.for("react.memo"):60115,Sa=w?Symbol.for("react.lazy"):60116;w&&Symbol.for("react.fundamental");w&&Symbol.for("react.responder");w&&Symbol.for("react.scope");var Ta="function"===typeof Symbol&&Symbol.iterator;function Ua(a){if(null===a||"object"!==typeof a)return null;a=Ta&&a[Ta]||a["@@iterator"];return"function"===typeof a?a:null}
function Va(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function Wa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ia:return"Fragment";case Ha:return"Portal";case Ka:return"Profiler";case Ja:return"StrictMode";case Pa:return"Suspense";case Qa:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ma:return"Context.Consumer";case La:return"Context.Provider";case Oa:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case Ra:return Wa(a.type);case Sa:if(a=1===a._status?a._result:null)return Wa(a)}return null}function Xa(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=Wa(a.type);c=null;d&&(c=Wa(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Fa,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
var Ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Za=null,$a=null,ab=null;function bb(a){if(a=ua(a)){if("function"!==typeof Za)throw Error(u(280));var b=sa(a.stateNode);Za(a.stateNode,a.type,b)}}function cb(a){$a?ab?ab.push(a):ab=[a]:$a=a}function db(){if($a){var a=$a,b=ab;ab=$a=null;bb(a);if(b)for(a=0;a<b.length;a++)bb(b[a])}}function eb(a,b){return a(b)}function fb(a,b,c,d){return a(b,c,d)}function gb(){}
var hb=eb,ib=!1,jb=!1;function kb(){if(null!==$a||null!==ab)gb(),db()}new Map;var lb=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mb=Object.prototype.hasOwnProperty,nb={},ob={};
function pb(a){if(mb.call(ob,a))return!0;if(mb.call(nb,a))return!1;if(lb.test(a))return ob[a]=!0;nb[a]=!0;return!1}function qb(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function rb(a,b,c,d){if(null===b||"undefined"===typeof b||qb(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1)});var sb=/[\-:]([a-z])/g;function tb(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(sb,
tb);D[b]=new B(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(sb,tb);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0)});function ub(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}
function vb(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(rb(b,c,e,d)&&(c=null),d||null===e?pb(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
function wb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function xb(a){var b=wb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function yb(a){a._valueTracker||(a._valueTracker=xb(a))}function zb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=wb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Ab(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Bb(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ub(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Cb(a,b){b=b.checked;null!=b&&vb(a,"checked",b,!1)}
function Eb(a,b){Cb(a,b);var c=ub(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Fb(a,b.type,c):b.hasOwnProperty("defaultValue")&&Fb(a,b.type,ub(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Gb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Fb(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Hb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Ib(a,b){a=n({children:void 0},b);if(b=Hb(b.children))a.children=b;return a}
function Jb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+ub(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Kb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Lb(a,b){var c=b.value;if(null==c){c=b.defaultValue;b=b.children;if(null!=b){if(null!=c)throw Error(u(92));if(Array.isArray(b)){if(!(1>=b.length))throw Error(u(93));b=b[0]}c=b}null==c&&(c="")}a._wrapperState={initialValue:ub(c)}}
function Mb(a,b){var c=ub(b.value),d=ub(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Nb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Ob={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Pb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Pb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Rb,Sb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Ob.svg||"innerHTML"in a)a.innerHTML=b;else{Rb=Rb||document.createElement("div");Rb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Rb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Tb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Ub(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Vb={animationend:Ub("Animation","AnimationEnd"),animationiteration:Ub("Animation","AnimationIteration"),animationstart:Ub("Animation","AnimationStart"),transitionend:Ub("Transition","TransitionEnd")},Wb={},Xb={};
Ya&&(Xb=document.createElement("div").style,"AnimationEvent"in window||(delete Vb.animationend.animation,delete Vb.animationiteration.animation,delete Vb.animationstart.animation),"TransitionEvent"in window||delete Vb.transitionend.transition);function Yb(a){if(Wb[a])return Wb[a];if(!Vb[a])return a;var b=Vb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Xb)return Wb[a]=b[c];return a}var Zb=Yb("animationend"),$b=Yb("animationiteration"),ac=Yb("animationstart"),bc=Yb("transitionend"),cc="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
function ec(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function fc(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function gc(a){if(ec(a)!==a)throw Error(u(188));}
function hc(a){var b=a.alternate;if(!b){b=ec(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return gc(e),a;if(f===d)return gc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function ic(a){a=hc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
var jc,kc,lc,mc=!1,nc=[],oc=null,pc=null,qc=null,rc=new Map,sc=new Map,tc=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),vc="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function wc(a){var b=xc(a);uc.forEach(function(c){yc(c,a,b)});vc.forEach(function(c){yc(c,a,b)})}function zc(a,b,c,d){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:d}}function Ac(a,b){switch(a){case "focus":case "blur":oc=null;break;case "dragenter":case "dragleave":pc=null;break;case "mouseover":case "mouseout":qc=null;break;case "pointerover":case "pointerout":rc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":sc.delete(b.pointerId)}}
function Bc(a,b,c,d,e){if(null===a||a.nativeEvent!==e)return a=zc(b,c,d,e),null!==b&&(b=Cc(b),null!==b&&kc(b)),a;a.eventSystemFlags|=d;return a}function Dc(a,b,c,d){switch(b){case "focus":return oc=Bc(oc,a,b,c,d),!0;case "dragenter":return pc=Bc(pc,a,b,c,d),!0;case "mouseover":return qc=Bc(qc,a,b,c,d),!0;case "pointerover":var e=d.pointerId;rc.set(e,Bc(rc.get(e)||null,a,b,c,d));return!0;case "gotpointercapture":return e=d.pointerId,sc.set(e,Bc(sc.get(e)||null,a,b,c,d)),!0}return!1}
function Ec(a){var b=Fc(a.target);if(null!==b){var c=ec(b);if(null!==c)if(b=c.tag,13===b){if(b=fc(c),null!==b){a.blockedOn=b;q.unstable_runWithPriority(a.priority,function(){lc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Gc(a){if(null!==a.blockedOn)return!1;var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);if(null!==b){var c=Cc(b);null!==c&&kc(c);a.blockedOn=b;return!1}return!0}
function Ic(a,b,c){Gc(a)&&c.delete(b)}function Jc(){for(mc=!1;0<nc.length;){var a=nc[0];if(null!==a.blockedOn){a=Cc(a.blockedOn);null!==a&&jc(a);break}var b=Hc(a.topLevelType,a.eventSystemFlags,a.nativeEvent);null!==b?a.blockedOn=b:nc.shift()}null!==oc&&Gc(oc)&&(oc=null);null!==pc&&Gc(pc)&&(pc=null);null!==qc&&Gc(qc)&&(qc=null);rc.forEach(Ic);sc.forEach(Ic)}function Kc(a,b){a.blockedOn===b&&(a.blockedOn=null,mc||(mc=!0,q.unstable_scheduleCallback(q.unstable_NormalPriority,Jc)))}
function Lc(a){function b(b){return Kc(b,a)}if(0<nc.length){Kc(nc[0],a);for(var c=1;c<nc.length;c++){var d=nc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==oc&&Kc(oc,a);null!==pc&&Kc(pc,a);null!==qc&&Kc(qc,a);rc.forEach(b);sc.forEach(b);for(c=0;c<tc.length;c++)d=tc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<tc.length&&(c=tc[0],null===c.blockedOn);)Ec(c),null===c.blockedOn&&tc.shift()}
function Mc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function Nc(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Oc(a,b,c){if(b=Da(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a)}
function Pc(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Nc(b);for(b=c.length;0<b--;)Oc(c[b],"captured",a);for(b=0;b<c.length;b++)Oc(c[b],"bubbled",a)}}function Qc(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Da(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=xa(c._dispatchListeners,b),c._dispatchInstances=xa(c._dispatchInstances,a))}function Rc(a){a&&a.dispatchConfig.registrationName&&Qc(a._targetInst,null,a)}
function Sc(a){ya(a,Pc)}function Tc(){return!0}function Uc(){return!1}function E(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?Tc:Uc;this.isPropagationStopped=Uc;return this}
n(E.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=Tc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=Tc)},persist:function(){this.isPersistent=Tc},isPersistent:Uc,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=Uc;this._dispatchInstances=this._dispatchListeners=null}});E.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
E.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;Vc(c);return c};Vc(E);function Wc(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function Xc(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Vc(a){a.eventPool=[];a.getPooled=Wc;a.release=Xc}var Yc=E.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Zc=E.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),$c=E.extend({view:null,detail:null}),ad=$c.extend({relatedTarget:null});
function bd(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var cd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ed={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=ed[a])?!!b[a]:!1}function hd(){return gd}
var id=$c.extend({key:function(a){if(a.key){var b=cd[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=bd(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?dd[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:hd,charCode:function(a){return"keypress"===a.type?bd(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?bd(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),jd=0,kd=0,ld=!1,md=!1,nd=$c.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:hd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=jd;jd=a.screenX;return ld?"mousemove"===a.type?a.screenX-
b:0:(ld=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=kd;kd=a.screenY;return md?"mousemove"===a.type?a.screenY-b:0:(md=!0,0)}}),od=nd.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),pd=nd.extend({dataTransfer:null}),qd=$c.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:hd}),rd=E.extend({propertyName:null,
elapsedTime:null,pseudoElement:null}),sd=nd.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),td=[["blur","blur",0],["cancel","cancel",0],["click","click",0],["close","close",0],["contextmenu","contextMenu",0],["copy","copy",0],["cut","cut",0],["auxclick","auxClick",0],["dblclick","doubleClick",0],["dragend","dragEnd",
0],["dragstart","dragStart",0],["drop","drop",0],["focus","focus",0],["input","input",0],["invalid","invalid",0],["keydown","keyDown",0],["keypress","keyPress",0],["keyup","keyUp",0],["mousedown","mouseDown",0],["mouseup","mouseUp",0],["paste","paste",0],["pause","pause",0],["play","play",0],["pointercancel","pointerCancel",0],["pointerdown","pointerDown",0],["pointerup","pointerUp",0],["ratechange","rateChange",0],["reset","reset",0],["seeked","seeked",0],["submit","submit",0],["touchcancel","touchCancel",
0],["touchend","touchEnd",0],["touchstart","touchStart",0],["volumechange","volumeChange",0],["drag","drag",1],["dragenter","dragEnter",1],["dragexit","dragExit",1],["dragleave","dragLeave",1],["dragover","dragOver",1],["mousemove","mouseMove",1],["mouseout","mouseOut",1],["mouseover","mouseOver",1],["pointermove","pointerMove",1],["pointerout","pointerOut",1],["pointerover","pointerOver",1],["scroll","scroll",1],["toggle","toggle",1],["touchmove","touchMove",1],["wheel","wheel",1],["abort","abort",
2],[Zb,"animationEnd",2],[$b,"animationIteration",2],[ac,"animationStart",2],["canplay","canPlay",2],["canplaythrough","canPlayThrough",2],["durationchange","durationChange",2],["emptied","emptied",2],["encrypted","encrypted",2],["ended","ended",2],["error","error",2],["gotpointercapture","gotPointerCapture",2],["load","load",2],["loadeddata","loadedData",2],["loadedmetadata","loadedMetadata",2],["loadstart","loadStart",2],["lostpointercapture","lostPointerCapture",2],["playing","playing",2],["progress",
"progress",2],["seeking","seeking",2],["stalled","stalled",2],["suspend","suspend",2],["timeupdate","timeUpdate",2],[bc,"transitionEnd",2],["waiting","waiting",2]],ud={},vd={},wd=0;for(;wd<td.length;wd++){var yd=td[wd],zd=yd[0],Ad=yd[1],Bd=yd[2],Cd="on"+(Ad[0].toUpperCase()+Ad.slice(1)),Dd={phasedRegistrationNames:{bubbled:Cd,captured:Cd+"Capture"},dependencies:[zd],eventPriority:Bd};ud[Ad]=Dd;vd[zd]=Dd}
var Ed={eventTypes:ud,getEventPriority:function(a){a=vd[a];return void 0!==a?a.eventPriority:2},extractEvents:function(a,b,c,d){var e=vd[a];if(!e)return null;switch(a){case "keypress":if(0===bd(c))return null;case "keydown":case "keyup":a=id;break;case "blur":case "focus":a=ad;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=nd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
pd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=qd;break;case Zb:case $b:case ac:a=Yc;break;case bc:a=rd;break;case "scroll":a=$c;break;case "wheel":a=sd;break;case "copy":case "cut":case "paste":a=Zc;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=od;break;default:a=E}b=a.getPooled(e,b,c,d);Sc(b);return b}},Fd=q.unstable_UserBlockingPriority,
Gd=q.unstable_runWithPriority,Hd=Ed.getEventPriority,Id=10,Jd=[];
function Kd(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Fc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Mc(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=a.eventSystemFlags,h=null,k=0;k<ea.length;k++){var l=ea[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=xa(h,l))}Ba(h)}}
var Ld=!0;function F(a,b){Md(b,a,!1)}function Md(a,b,c){switch(Hd(b)){case 0:var d=Nd.bind(null,b,1);break;case 1:d=Od.bind(null,b,1);break;default:d=Pd.bind(null,b,1)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function Nd(a,b,c){ib||gb();var d=Pd,e=ib;ib=!0;try{fb(d,a,b,c)}finally{(ib=e)||kb()}}function Od(a,b,c){Gd(Fd,Pd.bind(null,a,b,c))}
function Qd(a,b,c,d){if(Jd.length){var e=Jd.pop();e.topLevelType=a;e.eventSystemFlags=b;e.nativeEvent=c;e.targetInst=d;a=e}else a={topLevelType:a,eventSystemFlags:b,nativeEvent:c,targetInst:d,ancestors:[]};try{if(b=Kd,c=a,jb)b(c,void 0);else{jb=!0;try{hb(b,c,void 0)}finally{jb=!1,kb()}}}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,Jd.length<Id&&Jd.push(a)}}
function Pd(a,b,c){if(Ld)if(0<nc.length&&-1<uc.indexOf(a))a=zc(null,a,b,c),nc.push(a);else{var d=Hc(a,b,c);null===d?Ac(a,c):-1<uc.indexOf(a)?(a=zc(d,a,b,c),nc.push(a)):Dc(d,a,b,c)||(Ac(a,c),Qd(a,b,c,null))}}function Hc(a,b,c){var d=Mc(c);d=Fc(d);if(null!==d){var e=ec(d);if(null===e)d=null;else{var f=e.tag;if(13===f){d=fc(e);if(null!==d)return d;d=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;d=null}else e!==d&&(d=null)}}Qd(a,b,c,d);return null}
function Rd(a){if(!Ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var Sd=new ("function"===typeof WeakMap?WeakMap:Map);function xc(a){var b=Sd.get(a);void 0===b&&(b=new Set,Sd.set(a,b));return b}
function yc(a,b,c){if(!c.has(a)){switch(a){case "scroll":Md(b,"scroll",!0);break;case "focus":case "blur":Md(b,"focus",!0);Md(b,"blur",!0);c.add("blur");c.add("focus");break;case "cancel":case "close":Rd(a)&&Md(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===cc.indexOf(a)&&F(a,b)}c.add(a)}}
var Td={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ud=["Webkit","ms","Moz","O"];Object.keys(Td).forEach(function(a){Ud.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Td[b]=Td[a]})});function Vd(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Td.hasOwnProperty(a)&&Td[a]?(""+b).trim():b+"px"}
function Wd(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=Vd(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var Xd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function Yd(a,b){if(b){if(Xd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function Zd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function $d(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=xc(a);b=ja[b];for(var d=0;d<b.length;d++)yc(b[d],a,c)}function ae(){}
function be(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ce(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function de(a,b){var c=ce(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ce(c)}}
function ee(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?ee(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function fe(){for(var a=window,b=be();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=be(a.document)}return b}
function ge(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var he="$",ie="/$",je="$?",ke="$!",le=null,me=null;function ne(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function oe(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var pe="function"===typeof setTimeout?setTimeout:void 0,qe="function"===typeof clearTimeout?clearTimeout:void 0;function re(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function se(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===he||c===ke||c===je){if(0===b)return a;b--}else c===ie&&b++}a=a.previousSibling}return null}var te=Math.random().toString(36).slice(2),ue="__reactInternalInstance$"+te,ve="__reactEventHandlers$"+te,we="__reactContainere$"+te;
function Fc(a){var b=a[ue];if(b)return b;for(var c=a.parentNode;c;){if(b=c[we]||c[ue]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=se(a);null!==a;){if(c=a[ue])return c;a=se(a)}return b}a=c;c=a.parentNode}return null}function Cc(a){a=a[ue]||a[we];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function xe(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function ye(a){return a[ve]||null}var ze=null,Ae=null,Be=null;
function Ce(){if(Be)return Be;var a,b=Ae,c=b.length,d,e="value"in ze?ze.value:ze.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return Be=e.slice(a,1<d?1-d:void 0)}var De=E.extend({data:null}),Ee=E.extend({data:null}),Fe=[9,13,27,32],Ge=Ya&&"CompositionEvent"in window,He=null;Ya&&"documentMode"in document&&(He=document.documentMode);
var Ie=Ya&&"TextEvent"in window&&!He,Je=Ya&&(!Ge||He&&8<He&&11>=He),Ke=String.fromCharCode(32),Le={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},Me=!1;
function Ne(a,b){switch(a){case "keyup":return-1!==Fe.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function Oe(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var Pe=!1;function Qe(a,b){switch(a){case "compositionend":return Oe(b);case "keypress":if(32!==b.which)return null;Me=!0;return Ke;case "textInput":return a=b.data,a===Ke&&Me?null:a;default:return null}}
function Re(a,b){if(Pe)return"compositionend"===a||!Ge&&Ne(a,b)?(a=Ce(),Be=Ae=ze=null,Pe=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return Je&&"ko"!==b.locale?null:b.data;default:return null}}
var Se={eventTypes:Le,extractEvents:function(a,b,c,d){var e;if(Ge)b:{switch(a){case "compositionstart":var f=Le.compositionStart;break b;case "compositionend":f=Le.compositionEnd;break b;case "compositionupdate":f=Le.compositionUpdate;break b}f=void 0}else Pe?Ne(a,c)&&(f=Le.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=Le.compositionStart);f?(Je&&"ko"!==c.locale&&(Pe||f!==Le.compositionStart?f===Le.compositionEnd&&Pe&&(e=Ce()):(ze=d,Ae="value"in ze?ze.value:ze.textContent,Pe=!0)),f=De.getPooled(f,
b,c,d),e?f.data=e:(e=Oe(c),null!==e&&(f.data=e)),Sc(f),e=f):e=null;(a=Ie?Qe(a,c):Re(a,c))?(b=Ee.getPooled(Le.beforeInput,b,c,d),b.data=a,Sc(b)):b=null;return null===e?b:null===b?e:[e,b]}},Te={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ue(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!Te[a.type]:"textarea"===b?!0:!1}
var Ve={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function We(a,b,c){a=E.getPooled(Ve.change,a,b,c);a.type="change";cb(c);Sc(a);return a}var Xe=null,Ye=null;function Ze(a){Ba(a)}function $e(a){var b=xe(a);if(zb(b))return a}function af(a,b){if("change"===a)return b}var bf=!1;Ya&&(bf=Rd("input")&&(!document.documentMode||9<document.documentMode));
function cf(){Xe&&(Xe.detachEvent("onpropertychange",df),Ye=Xe=null)}function df(a){if("value"===a.propertyName&&$e(Ye))if(a=We(Ye,a,Mc(a)),ib)Ba(a);else{ib=!0;try{eb(Ze,a)}finally{ib=!1,kb()}}}function ef(a,b,c){"focus"===a?(cf(),Xe=b,Ye=c,Xe.attachEvent("onpropertychange",df)):"blur"===a&&cf()}function ff(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return $e(Ye)}function gf(a,b){if("click"===a)return $e(b)}function hf(a,b){if("input"===a||"change"===a)return $e(b)}
var jf={eventTypes:Ve,_isInputEventSupported:bf,extractEvents:function(a,b,c,d){var e=b?xe(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=af;else if(Ue(e))if(bf)g=hf;else{g=ff;var h=ef}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=gf);if(g&&(g=g(a,b)))return We(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Fb(e,"number",e.value)}},kf={mouseEnter:{registrationName:"onMouseEnter",
dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},lf,mf={eventTypes:kf,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;
e=d.window===d?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Fc(b):null,null!==b&&(f=ec(b),b!==f||5!==b.tag&&6!==b.tag))b=null}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var h=nd;var k=kf.mouseLeave;var l=kf.mouseEnter;var m="mouse"}else if("pointerout"===a||"pointerover"===a)h=od,k=kf.pointerLeave,l=kf.pointerEnter,m="pointer";a=null==g?e:xe(g);e=null==b?e:xe(b);k=h.getPooled(k,g,c,d);k.type=m+"leave";k.target=
a;k.relatedTarget=e;d=h.getPooled(l,b,c,d);d.type=m+"enter";d.target=e;d.relatedTarget=a;h=g;m=b;if(h&&m)a:{l=h;a=m;g=0;for(b=l;b;b=Nc(b))g++;b=0;for(e=a;e;e=Nc(e))b++;for(;0<g-b;)l=Nc(l),g--;for(;0<b-g;)a=Nc(a),b--;for(;g--;){if(l===a||l===a.alternate)break a;l=Nc(l);a=Nc(a)}l=null}else l=null;a=l;for(l=[];h&&h!==a;){g=h.alternate;if(null!==g&&g===a)break;l.push(h);h=Nc(h)}for(h=[];m&&m!==a;){g=m.alternate;if(null!==g&&g===a)break;h.push(m);m=Nc(m)}for(m=0;m<l.length;m++)Qc(l[m],"bubbled",k);for(m=
h.length;0<m--;)Qc(h[m],"captured",d);if(c===lf)return lf=null,[k];lf=c;return[k,d]}};function nf(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var of="function"===typeof Object.is?Object.is:nf,pf=Object.prototype.hasOwnProperty;function qf(a,b){if(of(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!pf.call(b,c[d])||!of(a[c[d]],b[c[d]]))return!1;return!0}
var rf=Ya&&"documentMode"in document&&11>=document.documentMode,sf={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},tf=null,uf=null,vf=null,wf=!1;
function xf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(wf||null==tf||tf!==be(c))return null;c=tf;"selectionStart"in c&&ge(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return vf&&qf(vf,c)?null:(vf=c,a=E.getPooled(sf.select,uf,a,b),a.type="select",a.target=tf,Sc(a),a)}
var yf={eventTypes:sf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=xc(e);f=ja.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?xe(b):window;switch(a){case "focus":if(Ue(e)||"true"===e.contentEditable)tf=e,uf=b,vf=null;break;case "blur":vf=uf=tf=null;break;case "mousedown":wf=!0;break;case "contextmenu":case "mouseup":case "dragend":return wf=!1,xf(c,d);case "selectionchange":if(rf)break;
case "keydown":case "keyup":return xf(c,d)}return null}};Ca.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));var zf=Cc;sa=ye;ua=zf;va=xe;Ca.injectEventPluginsByName({SimpleEventPlugin:Ed,EnterLeaveEventPlugin:mf,ChangeEventPlugin:jf,SelectEventPlugin:yf,BeforeInputEventPlugin:Se});new Set;var Af=[],Bf=-1;function G(a){0>Bf||(a.current=Af[Bf],Af[Bf]=null,Bf--)}
function I(a,b){Bf++;Af[Bf]=a.current;a.current=b}var Cf={},J={current:Cf},K={current:!1},Df=Cf;function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Ff(a){G(K,a);G(J,a)}function Gf(a){G(K,a);G(J,a)}function Hf(a,b,c){if(J.current!==Cf)throw Error(u(168));I(J,b,a);I(K,c,a)}function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,Wa(b)||"Unknown",e));return n({},c,{},d)}function Jf(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||Cf;Df=J.current;I(J,b,a);I(K,K.current,a);return!0}
function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(b=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=b,G(K,a),G(J,a),I(J,b,a)):G(K,a);I(K,c,a)}
var Lf=q.unstable_runWithPriority,Mf=q.unstable_scheduleCallback,Nf=q.unstable_cancelCallback,Of=q.unstable_shouldYield,Pf=q.unstable_requestPaint,Qf=q.unstable_now,Rf=q.unstable_getCurrentPriorityLevel,Sf=q.unstable_ImmediatePriority,Tf=q.unstable_UserBlockingPriority,Uf=q.unstable_NormalPriority,Vf=q.unstable_LowPriority,Wf=q.unstable_IdlePriority,Xf={},Yf=void 0!==Pf?Pf:function(){},Zf=null,$f=null,ag=!1,bg=Qf(),cg=1E4>bg?Qf:function(){return Qf()-bg};
function dg(){switch(Rf()){case Sf:return 99;case Tf:return 98;case Uf:return 97;case Vf:return 96;case Wf:return 95;default:throw Error(u(332));}}function eg(a){switch(a){case 99:return Sf;case 98:return Tf;case 97:return Uf;case 96:return Vf;case 95:return Wf;default:throw Error(u(332));}}function fg(a,b){a=eg(a);return Lf(a,b)}function gg(a,b,c){a=eg(a);return Mf(a,b,c)}function hg(a){null===Zf?(Zf=[a],$f=Mf(Sf,ig)):Zf.push(a);return Xf}function jg(){if(null!==$f){var a=$f;$f=null;Nf(a)}ig()}
function ig(){if(!ag&&null!==Zf){ag=!0;var a=0;try{var b=Zf;fg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Zf=null}catch(c){throw null!==Zf&&(Zf=Zf.slice(a+1)),Mf(Sf,jg),c;}finally{ag=!1}}}var kg=3;function lg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function mg(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var ng={current:null},og=null,pg=null,qg=null;function rg(){qg=pg=og=null}
function sg(a,b){var c=a.type._context;I(ng,c._currentValue,a);c._currentValue=b}function tg(a){var b=ng.current;G(ng,a);a.type._context._currentValue=b}function ug(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}
function vg(a,b){og=a;qg=pg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(wg=!0),a.firstContext=null)}function xg(a,b){if(qg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)qg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===pg){if(null===og)throw Error(u(308));pg=b;og.dependencies={expirationTime:0,firstContext:b,responders:null}}else pg=pg.next=b}return a._currentValue}var yg=!1;
function zg(a){return{baseState:a,firstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Ag(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}
function Bg(a,b){return{expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null,nextEffect:null}}function Cg(a,b){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}
function Dg(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=zg(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=zg(a.memoizedState),e=c.updateQueue=zg(c.memoizedState)):d=a.updateQueue=Ag(e):null===e&&(e=c.updateQueue=Ag(d));null===e||d===e?Cg(d,b):null===d.lastUpdate||null===e.lastUpdate?(Cg(d,b),Cg(e,b)):(Cg(d,b),e.lastUpdate=b)}
function Eg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=zg(a.memoizedState):Fg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function Fg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=Ag(b));return b}
function Gg(a,b,c,d,e,f){switch(c.tag){case 1:return a=c.payload,"function"===typeof a?a.call(f,d,e):a;case 3:a.effectTag=a.effectTag&-4097|64;case 0:a=c.payload;e="function"===typeof a?a.call(f,d,e):a;if(null===e||void 0===e)break;return n({},d,e);case 2:yg=!0}return d}
function Hg(a,b,c,d,e){yg=!1;b=Fg(a,b);for(var f=b.baseState,g=null,h=0,k=b.firstUpdate,l=f;null!==k;){var m=k.expirationTime;m<e?(null===g&&(g=k,f=l),h<m&&(h=m)):(Ig(m,k.suspenseConfig),l=Gg(a,b,k,l,c,d),null!==k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=k:(b.lastEffect.nextEffect=k,b.lastEffect=k)));k=k.next}m=null;for(k=b.firstCapturedUpdate;null!==k;){var C=k.expirationTime;C<e?(null===m&&(m=k,null===g&&(f=l)),h<C&&(h=C)):(l=Gg(a,b,k,l,c,d),null!==
k.callback&&(a.effectTag|=32,k.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=k:(b.lastCapturedEffect.nextEffect=k,b.lastCapturedEffect=k)));k=k.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=l);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;Jg(h);a.expirationTime=h;a.memoizedState=l}
function Kg(a,b,c){null!==b.firstCapturedUpdate&&(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Lg(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Lg(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Lg(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;if("function"!==typeof c)throw Error(u(191,c));c.call(d)}a=a.nextEffect}}
var Mg=Ea.ReactCurrentBatchConfig,Ng=(new aa.Component).refs;function Og(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}
var Sg={isMounted:function(a){return(a=a._reactInternalFiber)?ec(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Pg(),e=Mg.suspense;d=Qg(d,a,e);e=Bg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Dg(a,e);Rg(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Pg(),d=Mg.suspense;
c=Qg(c,a,d);d=Bg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);Dg(a,d);Rg(a,c)}};function Tg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!qf(c,d)||!qf(e,f):!0}
function Ug(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=xg(f):(e=L(b)?Df:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Sg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Vg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Sg.enqueueReplaceState(b,b.state,null)}
function Wg(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Ng;var f=b.contextType;"object"===typeof f&&null!==f?e.context=xg(f):(f=L(b)?Df:J.current,e.context=Ef(a,f));f=a.updateQueue;null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;"function"===typeof f&&(Og(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==
typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Sg.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Hg(a,f,c,e,d),e.state=a.memoizedState));"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Xg=Array.isArray;
function Yg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Ng&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Zg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function $g(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=ah(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=bh(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Yg(a,b,c),d.return=a,d;d=ch(c.type,c.key,c.props,null,a.mode,d);d.ref=Yg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=dh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=eh(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function C(a,b,c){if("string"===typeof b||"number"===typeof b)return b=bh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Ga:return c=ch(b.type,b.key,b.props,null,a.mode,c),c.ref=Yg(a,null,b),c.return=a,c;case Ha:return b=dh(b,a.mode,c),b.return=a,b}if(Xg(b)||
Ua(b))return b=eh(b,a.mode,c,null),b.return=a,b;Zg(a,b)}return null}function y(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Ga:return c.key===e?c.type===Ia?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case Ha:return c.key===e?l(a,b,c,d):null}if(Xg(c)||Ua(c))return null!==e?null:m(a,b,c,d,null);Zg(a,c)}return null}function H(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Ga:return a=a.get(null===d.key?c:d.key)||null,d.type===Ia?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case Ha:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Xg(d)||Ua(d))return a=a.get(c)||null,m(b,a,d,e,null);Zg(b,d)}return null}function z(e,g,h,k){for(var l=null,m=null,r=g,x=g=0,A=null;null!==r&&x<h.length;x++){r.index>x?(A=r,r=null):A=r.sibling;var p=y(e,r,h[x],k);if(null===p){null===r&&(r=A);break}a&&
r&&null===p.alternate&&b(e,r);g=f(p,g,x);null===m?l=p:m.sibling=p;m=p;r=A}if(x===h.length)return c(e,r),l;if(null===r){for(;x<h.length;x++)r=C(e,h[x],k),null!==r&&(g=f(r,g,x),null===m?l=r:m.sibling=r,m=r);return l}for(r=d(e,r);x<h.length;x++)A=H(r,e,x,h[x],k),null!==A&&(a&&null!==A.alternate&&r.delete(null===A.key?x:A.key),g=f(A,g,x),null===m?l=A:m.sibling=A,m=A);a&&r.forEach(function(a){return b(e,a)});return l}function ta(e,g,h,k){var l=Ua(h);if("function"!==typeof l)throw Error(u(150));h=l.call(h);
if(null==h)throw Error(u(151));for(var m=l=null,r=g,x=g=0,A=null,p=h.next();null!==r&&!p.done;x++,p=h.next()){r.index>x?(A=r,r=null):A=r.sibling;var z=y(e,r,p.value,k);if(null===z){null===r&&(r=A);break}a&&r&&null===z.alternate&&b(e,r);g=f(z,g,x);null===m?l=z:m.sibling=z;m=z;r=A}if(p.done)return c(e,r),l;if(null===r){for(;!p.done;x++,p=h.next())p=C(e,p.value,k),null!==p&&(g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);return l}for(r=d(e,r);!p.done;x++,p=h.next())p=H(r,e,x,p.value,k),null!==p&&(a&&null!==
p.alternate&&r.delete(null===p.key?x:p.key),g=f(p,g,x),null===m?l=p:m.sibling=p,m=p);a&&r.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===Ia&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Ga:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===Ia:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===Ia?f.props.children:f.props,h);d.ref=Yg(a,k,f);d.return=a;a=d;break a}else{c(a,
k);break}else b(a,k);k=k.sibling}f.type===Ia?(d=eh(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=ch(f.type,f.key,f.props,null,a.mode,h),h.ref=Yg(a,d,f),h.return=a,a=h)}return g(a);case Ha:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=dh(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===
typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=bh(f,a.mode,h),d.return=a,a=d),g(a);if(Xg(f))return z(a,d,f,h);if(Ua(f))return ta(a,d,f,h);l&&Zg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var fh=$g(!0),gh=$g(!1),hh={},ih={current:hh},jh={current:hh},kh={current:hh};function lh(a){if(a===hh)throw Error(u(174));return a}
function mh(a,b){I(kh,b,a);I(jh,a,a);I(ih,hh,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Qb(null,"");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Qb(b,c)}G(ih,a);I(ih,b,a)}function nh(a){G(ih,a);G(jh,a);G(kh,a)}function oh(a){lh(kh.current);var b=lh(ih.current);var c=Qb(b,a.type);b!==c&&(I(jh,a,a),I(ih,c,a))}function ph(a){jh.current===a&&(G(ih,a),G(jh,a))}var M={current:0};
function qh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===je||c.data===ke))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function rh(a,b){return{responder:a,props:b}}
var sh=Ea.ReactCurrentDispatcher,N=Ea.ReactCurrentBatchConfig,th=0,uh=null,O=null,vh=null,wh=null,P=null,xh=null,yh=0,zh=null,Ah=0,Bh=!1,Ch=null,Gh=0;function Q(){throw Error(u(321));}function Hh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!of(a[c],b[c]))return!1;return!0}
function Ih(a,b,c,d,e,f){th=f;uh=b;vh=null!==a?a.memoizedState:null;sh.current=null===vh?Jh:Kh;b=c(d,e);if(Bh){do Bh=!1,Gh+=1,vh=null!==a?a.memoizedState:null,xh=wh,zh=P=O=null,sh.current=Kh,b=c(d,e);while(Bh);Ch=null;Gh=0}sh.current=Lh;a=uh;a.memoizedState=wh;a.expirationTime=yh;a.updateQueue=zh;a.effectTag|=Ah;a=null!==O&&null!==O.next;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;if(a)throw Error(u(300));return b}
function Mh(){sh.current=Lh;th=0;xh=P=wh=vh=O=uh=null;yh=0;zh=null;Ah=0;Bh=!1;Ch=null;Gh=0}function Nh(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};null===P?wh=P=a:P=P.next=a;return P}function Oh(){if(null!==xh)P=xh,xh=P.next,O=vh,vh=null!==O?O.next:null;else{if(null===vh)throw Error(u(310));O=vh;var a={memoizedState:O.memoizedState,baseState:O.baseState,queue:O.queue,baseUpdate:O.baseUpdate,next:null};P=null===P?wh=a:P.next=a;vh=O.next}return P}
function Ph(a,b){return"function"===typeof b?b(a):b}
function Qh(a){var b=Oh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;if(0<Gh){var d=c.dispatch;if(null!==Ch){var e=Ch.get(c);if(void 0!==e){Ch.delete(c);var f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==
d){var h=e=null,k=d,l=!1;do{var m=k.expirationTime;m<th?(l||(l=!0,h=g,e=f),m>yh&&(yh=m,Jg(yh))):(Ig(m,k.suspenseConfig),f=k.eagerReducer===a?k.eagerState:a(f,k.action));g=k;k=k.next}while(null!==k&&k!==d);l||(h=g,e=f);of(f,b.memoizedState)||(wg=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}
function Rh(a){var b=Nh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:Ph,lastRenderedState:a};a=a.dispatch=Sh.bind(null,uh,a);return[b.memoizedState,a]}function Th(a){return Qh(Ph,a)}function Uh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===zh?(zh={lastEffect:null},zh.lastEffect=a.next=a):(b=zh.lastEffect,null===b?zh.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,zh.lastEffect=a));return a}
function Vh(a,b,c,d){var e=Nh();Ah|=a;e.memoizedState=Uh(b,c,void 0,void 0===d?null:d)}function Wh(a,b,c,d){var e=Oh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&Hh(d,g.deps)){Uh(0,c,f,d);return}}Ah|=a;e.memoizedState=Uh(b,c,f,d)}function Xh(a,b){return Vh(516,192,a,b)}function Yh(a,b){return Wh(516,192,a,b)}
function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function $h(){}function ai(a,b){Nh().memoizedState=[a,void 0===b?null:b];return a}function bi(a,b){var c=Oh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Sh(a,b,c){if(!(25>Gh))throw Error(u(301));var d=a.alternate;if(a===uh||null!==d&&d===uh)if(Bh=!0,a={expirationTime:th,suspenseConfig:null,action:c,eagerReducer:null,eagerState:null,next:null},null===Ch&&(Ch=new Map),c=Ch.get(b),void 0===c)Ch.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{var e=Pg(),f=Mg.suspense;e=Qg(e,a,f);f={expirationTime:e,suspenseConfig:f,action:c,eagerReducer:null,eagerState:null,next:null};var g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&
(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var k=b.lastRenderedState,l=d(k,c);f.eagerReducer=d;f.eagerState=l;if(of(l,k))return}catch(m){}finally{}Rg(a,e)}}
var Lh={readContext:xg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},Jh={readContext:xg,useCallback:ai,useContext:xg,useEffect:Xh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Vh(4,36,a,b)},useMemo:function(a,b){var c=Nh();b=void 0===b?null:b;a=a();c.memoizedState=
[a,b];return a},useReducer:function(a,b,c){var d=Nh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Sh.bind(null,uh,a);return[d.memoizedState,a]},useRef:function(a){var b=Nh();a={current:a};return b.memoizedState=a},useState:Rh,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Rh(a),d=c[0],e=c[1];Xh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=
c}})},[a,b]);return d},useTransition:function(a){var b=Rh(!1),c=b[0],d=b[1];return[ai(function(b){d(!0);q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},Kh={readContext:xg,useCallback:bi,useContext:xg,useEffect:Yh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Wh(4,36,Zh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Wh(4,36,a,b)},useMemo:function(a,b){var c=Oh();b=void 0===b?
null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Hh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:Qh,useRef:function(){return Oh().memoizedState},useState:Th,useDebugValue:$h,useResponder:rh,useDeferredValue:function(a,b){var c=Th(a),d=c[0],e=c[1];Yh(function(){q.unstable_next(function(){var c=N.suspense;N.suspense=void 0===b?null:b;try{e(a)}finally{N.suspense=c}})},[a,b]);return d},useTransition:function(a){var b=Th(!1),c=b[0],d=b[1];return[bi(function(b){d(!0);q.unstable_next(function(){var c=
N.suspense;N.suspense=void 0===a?null:a;try{d(!1),b()}finally{N.suspense=c}})},[a,c]),c]}},ci=null,di=null,ei=!1;function fi(a,b){var c=gi(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function hi(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ii(a){if(ei){var b=di;if(b){var c=b;if(!hi(a,b)){b=re(c.nextSibling);if(!b||!hi(a,b)){a.effectTag=a.effectTag&-1025|2;ei=!1;ci=a;return}fi(ci,c)}ci=a;di=re(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,ei=!1,ci=a}}function ji(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ci=a}
function ki(a){if(a!==ci)return!1;if(!ei)return ji(a),ei=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!oe(b,a.memoizedProps))for(b=di;b;)fi(a,b),b=re(b.nextSibling);ji(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ie){if(0===b){di=re(a.nextSibling);break a}b--}else c!==he&&c!==ke&&c!==je||b++}a=a.nextSibling}di=null}}else di=ci?re(a.stateNode.nextSibling):null;return!0}
function li(){di=ci=null;ei=!1}var mi=Ea.ReactCurrentOwner,wg=!1;function R(a,b,c,d){b.child=null===a?gh(b,null,c,d):fh(b,a.child,c,d)}function ni(a,b,c,d,e){c=c.render;var f=b.ref;vg(b,e);d=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function pi(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!qi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ri(a,b,g,d,e,f);a=ch(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:qf,c(e,d)&&a.ref===b.ref))return oi(a,b,f);b.effectTag|=1;a=ah(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}
function ri(a,b,c,d,e,f){return null!==a&&qf(a.memoizedProps,d)&&a.ref===b.ref&&(wg=!1,e<f)?oi(a,b,f):si(a,b,c,d,f)}function ti(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function si(a,b,c,d,e){var f=L(c)?Df:J.current;f=Ef(b,f);vg(b,e);c=Ih(a,b,c,d,f,e);if(null!==a&&!wg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),oi(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function ui(a,b,c,d,e){if(L(c)){var f=!0;Jf(b)}else f=!1;vg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Ug(b,c,d,e),Wg(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l));var m=c.getDerivedStateFromProps,C="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;C||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l);yg=!1;var y=b.memoizedState;k=g.state=y;var H=b.updateQueue;null!==H&&(Hg(b,H,d,g,e),k=b.memoizedState);h!==d||y!==k||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),k=b.memoizedState),(h=yg||Tg(b,c,h,d,y,k,l))?(C||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&
g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?h:mg(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=xg(l):(l=L(c)?Df:J.current,l=Ef(b,l)),m=c.getDerivedStateFromProps,(C=
"function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Vg(b,g,d,l),yg=!1,k=b.memoizedState,y=g.state=k,H=b.updateQueue,null!==H&&(Hg(b,H,d,g,e),y=b.memoizedState),h!==d||k!==y||K.current||yg?("function"===typeof m&&(Og(b,c,m,d),y=b.memoizedState),(m=yg||Tg(b,c,h,d,k,y,l))?(C||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||
("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,y,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,y,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=
d,b.memoizedState=y),g.props=d,g.state=y,g.context=l,d=m):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return vi(a,b,c,d,f,e)}
function vi(a,b,c,d,e,f){ti(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Kf(b,c,!1),oi(a,b,f);d=b.stateNode;mi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=fh(b,a.child,null,f),b.child=fh(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function wi(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);mh(a,b.containerInfo)}
var xi={dehydrated:null,retryTime:0};
function yi(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1,b);if(null===a){void 0!==e.fallback&&ii(b);if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=xi;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=gh(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=ah(a,a.pendingProps,0);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=ah(d,e,d.expirationTime);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=xi;b.child=c;return d}c=fh(b,a.child,e.children,c);b.memoizedState=
null;return b.child=c}a=a.child;if(g){g=e.fallback;e=eh(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=eh(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=xi;b.child=e;return c}b.memoizedState=null;return b.child=fh(b,a,e.children,c)}
function zi(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);ug(a.return,b)}function Ai(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function Bi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&zi(a,c);else if(19===a.tag)zi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d,b);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===qh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ai(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===qh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}Ai(b,!0,c,null,f,b.lastEffect);break;case "together":Ai(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function oi(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Jg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=ah(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=ah(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function Ci(a){a.effectTag|=4}var Hi,Ii,Ji,Ki;
Hi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ii=function(){};
Ji=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;lh(ih.current);a=null;switch(c){case "input":f=Ab(g,f);d=Ab(g,d);a=[];break;case "option":f=Ib(g,f);d=Ib(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Kb(g,f);d=Kb(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=ae)}Yd(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,""+l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(ia.hasOwnProperty(h)?(null!=l&&$d(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;(b.updateQueue=e)&&Ci(b)}};Ki=function(a,b,c,d){c!==d&&Ci(b)};
function Li(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Mi(a){switch(a.tag){case 1:L(a.type)&&Ff(a);var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:nh(a);Gf(a);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return ph(a),null;case 13:return G(M,a),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return G(M,a),null;case 4:return nh(a),null;case 10:return tg(a),null;default:return null}}function Ni(a,b){return{value:a,source:b,stack:Xa(b)}}
var Oi="function"===typeof WeakSet?WeakSet:Set;function Pi(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=Xa(c));null!==c&&Wa(c.type);b=b.value;null!==a&&1===a.tag&&Wa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Qi(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ri(a,c)}}function Si(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ri(a,c)}else b.current=null}
function Ti(a,b){switch(b.tag){case 0:case 11:case 15:Ui(2,0,b);break;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:mg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break;case 3:case 5:case 6:case 4:case 17:break;default:throw Error(u(163));}}
function Ui(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if(0!==(d.tag&a)){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}0!==(d.tag&b)&&(e=d.create,d.destroy=e());d=d.next}while(d!==c)}}
function Vi(a,b,c){"function"===typeof Wi&&Wi(b);switch(b.tag){case 0:case 11:case 14:case 15:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;fg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ri(g,h)}}a=a.next}while(a!==d)})}break;case 1:Si(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Qi(b,c);break;case 5:Si(b);break;case 4:Xi(a,b,c)}}
function Yi(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;null!==b&&Yi(b)}function Zi(a){return 5===a.tag||3===a.tag||4===a.tag}
function $i(a){a:{for(var b=a.return;null!==b;){if(Zi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Tb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Zi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){var f=5===e.tag||6===e.tag;if(f){var g=f?e.stateNode:e.stateNode.instance;if(c)if(d){f=b;var h=g;g=c;8===f.nodeType?f.parentNode.insertBefore(h,g):f.insertBefore(h,g)}else b.insertBefore(g,c);else d?(h=b,8===h.nodeType?(f=h.parentNode,f.insertBefore(g,h)):(f=h,f.appendChild(g)),h=h._reactRootContainer,null!==h&&void 0!==h||null!==f.onclick||(f.onclick=ae)):b.appendChild(g)}else if(4!==
e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}
function Xi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Vi(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Vi(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function aj(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Ui(4,8,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[ve]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Cb(c,d);Zd(a,e);b=Zd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?Wd(c,h):"dangerouslySetInnerHTML"===g?Sb(c,h):"children"===g?Tb(c,h):vb(c,g,h,b)}switch(a){case "input":Eb(c,d);break;case "textarea":Mb(c,
d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Jb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Jb(c,!!d.multiple,d.defaultValue,!0):Jb(c,!!d.multiple,d.multiple?[]:"",!1))}}}break;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;break;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Lc(b.containerInfo));break;case 12:break;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,bj=cg());
if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=Vd("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=
a;a=a.child;continue}if(a===c)break a;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}cj(b);break;case 19:cj(b);break;case 17:break;case 20:break;case 21:break;default:throw Error(u(163));}}function cj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Oi);b.forEach(function(b){var d=dj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}var ej="function"===typeof WeakMap?WeakMap:Map;
function fj(a,b,c){c=Bg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){gj||(gj=!0,hj=d);Pi(a,b)};return c}
function ij(a,b,c){c=Bg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Pi(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===jj?jj=new Set([this]):jj.add(this),Pi(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var kj=Math.ceil,lj=Ea.ReactCurrentDispatcher,mj=Ea.ReactCurrentOwner,S=0,nj=8,oj=16,pj=32,qj=0,rj=1,sj=2,tj=3,uj=4,vj=5,T=S,U=null,V=null,W=0,X=qj,wj=null,xj=1073741823,yj=1073741823,zj=null,Aj=0,Bj=!1,bj=0,Cj=500,Y=null,gj=!1,hj=null,jj=null,Dj=!1,Ej=null,Fj=90,Gj=null,Hj=0,Ij=null,Jj=0;function Pg(){return(T&(oj|pj))!==S?1073741821-(cg()/10|0):0!==Jj?Jj:Jj=1073741821-(cg()/10|0)}
function Qg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=dg();if(0===(b&4))return 99===d?1073741823:1073741822;if((T&oj)!==S)return W;if(null!==c)a=lg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=lg(a,150,100);break;case 97:case 96:a=lg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==U&&a===W&&--a;return a}
function Rg(a,b){if(50<Hj)throw Hj=0,Ij=null,Error(u(185));a=Kj(a,b);if(null!==a){var c=dg();1073741823===b?(T&nj)!==S&&(T&(oj|pj))===S?Lj(a):(Z(a),T===S&&jg()):Z(a);(T&4)===S||98!==c&&99!==c||(null===Gj?Gj=new Map([[a,b]]):(c=Gj.get(a),(void 0===c||c>b)&&Gj.set(a,b)))}}
function Kj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(U===e&&(Jg(b),X===uj&&Mj(e,W)),Nj(e,b));return e}
function Oj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Pj(a,b))return b;b=a.lastPingedTime;a=a.nextKnownPendingLevel;return b>a?b:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=hg(Lj.bind(null,a));else{var b=Oj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Pg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Xf&&Nf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?hg(Lj.bind(null,a)):gg(d,Qj.bind(null,a),{timeout:10*(1073741821-b)-cg()});a.callbackNode=b}}}
function Qj(a,b){Jj=0;if(b)return b=Pg(),Rj(a,b),Z(a),null;var c=Oj(a);if(0!==c){b=a.callbackNode;if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&c===W||Tj(a,c);if(null!==V){var d=T;T|=oj;var e=Uj(a);do try{Vj();break}catch(h){Wj(a,h)}while(1);rg();T=d;lj.current=e;if(X===rj)throw b=wj,Tj(a,c),Mj(a,c),Z(a),b;if(null===V)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=X,U=null,d){case qj:case rj:throw Error(u(345));case sj:Rj(a,2<c?2:c);break;case tj:Mj(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Xj(e));if(1073741823===xj&&(e=bj+Cj-cg(),10<e)){if(Bj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Tj(a,c);break}}f=Oj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=pe(Yj.bind(null,a),e);break}Yj(a);break;case uj:Mj(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Xj(e));if(Bj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Tj(a,c);break}e=Oj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==yj?d=10*(1073741821-yj)-cg():1073741823===xj?d=0:(d=10*(1073741821-xj)-5E3,e=cg(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*kj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=pe(Yj.bind(null,a),d);break}Yj(a);break;case vj:if(1073741823!==xj&&null!==zj){f=xj;var g=zj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=cg()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Mj(a,c);a.timeoutHandle=
pe(Yj.bind(null,a),d);break}}Yj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Qj.bind(null,a)}}return null}
function Lj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if(a.finishedExpirationTime===b)Yj(a);else{if((T&(oj|pj))!==S)throw Error(u(327));Sj();a===U&&b===W||Tj(a,b);if(null!==V){var c=T;T|=oj;var d=Uj(a);do try{Zj();break}catch(e){Wj(a,e)}while(1);rg();T=c;lj.current=d;if(X===rj)throw c=wj,Tj(a,b),Mj(a,b),Z(a),c;if(null!==V)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;Yj(a);Z(a)}}return null}
function ak(){if(null!==Gj){var a=Gj;Gj=null;a.forEach(function(a,c){Rj(c,a);Z(c)});jg()}}function bk(a,b){var c=T;T|=1;try{return a(b)}finally{T=c,T===S&&jg()}}function ck(a,b){var c=T;T&=-2;T|=nj;try{return a(b)}finally{T=c,T===S&&jg()}}
function Tj(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,qe(c));if(null!==V)for(c=V.return;null!==c;){var d=c;switch(d.tag){case 1:var e=d.type.childContextTypes;null!==e&&void 0!==e&&Ff(d);break;case 3:nh(d);Gf(d);break;case 5:ph(d);break;case 4:nh(d);break;case 13:G(M,d);break;case 19:G(M,d);break;case 10:tg(d)}c=c.return}U=a;V=ah(a.current,null,b);W=b;X=qj;wj=null;yj=xj=1073741823;zj=null;Aj=0;Bj=!1}
function Wj(a,b){do{try{rg();Mh();if(null===V||null===V.return)return X=rj,wj=b,null;a:{var c=a,d=V.return,e=V,f=b;b=W;e.effectTag|=2048;e.firstEffect=e.lastEffect=null;if(null!==f&&"object"===typeof f&&"function"===typeof f.then){var g=f,h=0!==(M.current&1),k=d;do{var l;if(l=13===k.tag){var m=k.memoizedState;if(null!==m)l=null!==m.dehydrated?!0:!1;else{var C=k.memoizedProps;l=void 0===C.fallback?!1:!0!==C.unstable_avoidThisFallback?!0:h?!1:!0}}if(l){var y=k.updateQueue;if(null===y){var H=new Set;
H.add(g);k.updateQueue=H}else y.add(g);if(0===(k.mode&2)){k.effectTag|=64;e.effectTag&=-2981;if(1===e.tag)if(null===e.alternate)e.tag=17;else{var z=Bg(1073741823,null);z.tag=2;Dg(e,z)}e.expirationTime=1073741823;break a}f=void 0;e=b;var ta=c.pingCache;null===ta?(ta=c.pingCache=new ej,f=new Set,ta.set(g,f)):(f=ta.get(g),void 0===f&&(f=new Set,ta.set(g,f)));if(!f.has(e)){f.add(e);var r=dk.bind(null,c,g,e);g.then(r,r)}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return}while(null!==k);f=Error((Wa(e.type)||
"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+Xa(e))}X!==vj&&(X=sj);f=Ni(f,e);k=d;do{switch(k.tag){case 3:g=f;k.effectTag|=4096;k.expirationTime=b;var x=fj(k,g,b);Eg(k,x);break a;case 1:g=f;var A=k.type,p=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof A.getDerivedStateFromError||null!==p&&"function"===typeof p.componentDidCatch&&
(null===jj||!jj.has(p)))){k.effectTag|=4096;k.expirationTime=b;var t=ij(k,g,b);Eg(k,t);break a}}k=k.return}while(null!==k)}V=ek(V)}catch(v){b=v;continue}break}while(1)}function Uj(){var a=lj.current;lj.current=Lh;return null===a?Lh:a}function Ig(a,b){a<xj&&2<a&&(xj=a);null!==b&&a<yj&&2<a&&(yj=a,zj=b)}function Jg(a){a>Aj&&(Aj=a)}function Zj(){for(;null!==V;)V=fk(V)}function Vj(){for(;null!==V&&!Of();)V=fk(V)}
function fk(a){var b=gk(a.alternate,a,W);a.memoizedProps=a.pendingProps;null===b&&(b=ek(a));mj.current=null;return b}
function ek(a){V=a;do{var b=V.alternate;a=V.return;if(0===(V.effectTag&2048)){a:{var c=b;b=V;var d=W;var e=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:L(b.type)&&Ff(b);break;case 3:nh(b);Gf(b);e=b.stateNode;e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null);(null===c||null===c.child)&&ki(b)&&Ci(b);Ii(b);break;case 5:ph(b);d=lh(kh.current);var f=b.type;if(null!==c&&null!=b.stateNode)Ji(c,b,f,e,d),c.ref!==b.ref&&(b.effectTag|=128);else if(e){var g=
lh(ih.current);if(ki(b)){e=b;var h=e.stateNode;c=e.type;var k=e.memoizedProps,l=d;h[ue]=e;h[ve]=k;f=void 0;d=h;switch(c){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(h=0;h<cc.length;h++)F(cc[h],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Bb(d,k);F("invalid",d);$d(l,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!k.multiple};F("invalid",d);$d(l,"onChange");break;case "textarea":Lb(d,k),F("invalid",d),$d(l,"onChange")}Yd(c,k);h=null;for(f in k)k.hasOwnProperty(f)&&(g=k[f],"children"===f?"string"===typeof g?d.textContent!==g&&(h=["children",g]):"number"===typeof g&&d.textContent!==""+g&&(h=["children",""+g]):ia.hasOwnProperty(f)&&null!=g&&$d(l,f));switch(c){case "input":yb(d);Gb(d,k,!0);break;case "textarea":yb(d);Nb(d,k);break;case "select":case "option":break;default:"function"===typeof k.onClick&&
(d.onclick=ae)}f=h;e.updateQueue=f;e=null!==f?!0:!1;e&&Ci(b)}else{c=b;l=f;k=e;h=9===d.nodeType?d:d.ownerDocument;g===Ob.html&&(g=Pb(l));g===Ob.html?"script"===l?(k=h.createElement("div"),k.innerHTML="<script>\x3c/script>",h=k.removeChild(k.firstChild)):"string"===typeof k.is?h=h.createElement(l,{is:k.is}):(h=h.createElement(l),"select"===l&&(l=h,k.multiple?l.multiple=!0:k.size&&(l.size=k.size))):h=h.createElementNS(g,l);k=h;k[ue]=c;k[ve]=e;Hi(k,b,!1,!1);b.stateNode=k;l=f;c=e;var m=d,C=Zd(l,c);switch(l){case "iframe":case "object":case "embed":F("load",
k);d=c;break;case "video":case "audio":for(d=0;d<cc.length;d++)F(cc[d],k);d=c;break;case "source":F("error",k);d=c;break;case "img":case "image":case "link":F("error",k);F("load",k);d=c;break;case "form":F("reset",k);F("submit",k);d=c;break;case "details":F("toggle",k);d=c;break;case "input":Bb(k,c);d=Ab(k,c);F("invalid",k);$d(m,"onChange");break;case "option":d=Ib(k,c);break;case "select":k._wrapperState={wasMultiple:!!c.multiple};d=n({},c,{value:void 0});F("invalid",k);$d(m,"onChange");break;case "textarea":Lb(k,
c);d=Kb(k,c);F("invalid",k);$d(m,"onChange");break;default:d=c}Yd(l,d);h=void 0;g=l;var y=k,H=d;for(h in H)if(H.hasOwnProperty(h)){var z=H[h];"style"===h?Wd(y,z):"dangerouslySetInnerHTML"===h?(z=z?z.__html:void 0,null!=z&&Sb(y,z)):"children"===h?"string"===typeof z?("textarea"!==g||""!==z)&&Tb(y,z):"number"===typeof z&&Tb(y,""+z):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(ia.hasOwnProperty(h)?null!=z&&$d(m,h):null!=z&&vb(y,h,z,C))}switch(l){case "input":yb(k);
Gb(k,c,!1);break;case "textarea":yb(k);Nb(k,c);break;case "option":null!=c.value&&k.setAttribute("value",""+ub(c.value));break;case "select":d=k;d.multiple=!!c.multiple;k=c.value;null!=k?Jb(d,!!c.multiple,k,!1):null!=c.defaultValue&&Jb(d,!!c.multiple,c.defaultValue,!0);break;default:"function"===typeof d.onClick&&(k.onclick=ae)}(e=ne(f,e))&&Ci(b)}null!==b.ref&&(b.effectTag|=128)}else if(null===b.stateNode)throw Error(u(166));break;case 6:if(c&&null!=b.stateNode)Ki(c,b,c.memoizedProps,e);else{if("string"!==
typeof e&&null===b.stateNode)throw Error(u(166));d=lh(kh.current);lh(ih.current);ki(b)?(e=b,f=e.stateNode,d=e.memoizedProps,f[ue]=e,(e=f.nodeValue!==d)&&Ci(b)):(f=b,e=(9===d.nodeType?d:d.ownerDocument).createTextNode(e),e[ue]=f,b.stateNode=e)}break;case 11:break;case 13:G(M,b);e=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=d;break a}e=null!==e;f=!1;null===c?void 0!==b.memoizedProps.fallback&&ki(b):(d=c.memoizedState,f=null!==d,e||null===d||(d=c.child.sibling,null!==d&&(k=b.firstEffect,
null!==k?(b.firstEffect=d,d.nextEffect=k):(b.firstEffect=b.lastEffect=d,d.nextEffect=null),d.effectTag=8)));if(e&&!f&&0!==(b.mode&2))if(null===c&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))X===qj&&(X=tj);else{if(X===qj||X===tj)X=uj;0!==Aj&&null!==U&&(Mj(U,W),Nj(U,Aj))}if(e||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:nh(b);Ii(b);break;case 10:tg(b);break;case 9:break;case 14:break;case 17:L(b.type)&&Ff(b);break;case 19:G(M,b);e=b.memoizedState;if(null===
e)break;f=0!==(b.effectTag&64);k=e.rendering;if(null===k)if(f)Li(e,!1);else{if(X!==qj||null!==c&&0!==(c.effectTag&64))for(c=b.child;null!==c;){k=qh(c);if(null!==k){b.effectTag|=64;Li(e,!1);f=k.updateQueue;null!==f&&(b.updateQueue=f,b.effectTag|=4);null===e.lastEffect&&(b.firstEffect=null);b.lastEffect=e.lastEffect;e=d;for(f=b.child;null!==f;)d=f,c=e,d.effectTag&=2,d.nextEffect=null,d.firstEffect=null,d.lastEffect=null,k=d.alternate,null===k?(d.childExpirationTime=0,d.expirationTime=c,d.child=null,
d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null):(d.childExpirationTime=k.childExpirationTime,d.expirationTime=k.expirationTime,d.child=k.child,d.memoizedProps=k.memoizedProps,d.memoizedState=k.memoizedState,d.updateQueue=k.updateQueue,c=k.dependencies,d.dependencies=null===c?null:{expirationTime:c.expirationTime,firstContext:c.firstContext,responders:c.responders}),f=f.sibling;I(M,M.current&1|2,b);b=b.child;break a}c=c.sibling}}else{if(!f)if(c=qh(k),null!==c){if(b.effectTag|=
64,f=!0,d=c.updateQueue,null!==d&&(b.updateQueue=d,b.effectTag|=4),Li(e,!0),null===e.tail&&"hidden"===e.tailMode&&!k.alternate){b=b.lastEffect=e.lastEffect;null!==b&&(b.nextEffect=null);break}}else cg()>e.tailExpiration&&1<d&&(b.effectTag|=64,f=!0,Li(e,!1),b.expirationTime=b.childExpirationTime=d-1);e.isBackwards?(k.sibling=b.child,b.child=k):(d=e.last,null!==d?d.sibling=k:b.child=k,e.last=k)}if(null!==e.tail){0===e.tailExpiration&&(e.tailExpiration=cg()+500);d=e.tail;e.rendering=d;e.tail=d.sibling;
e.lastEffect=b.lastEffect;d.sibling=null;e=M.current;e=f?e&1|2:e&1;I(M,e,b);b=d;break a}break;case 20:break;case 21:break;default:throw Error(u(156,b.tag));}b=null}e=V;if(1===W||1!==e.childExpirationTime){f=0;for(d=e.child;null!==d;)c=d.expirationTime,k=d.childExpirationTime,c>f&&(f=c),k>f&&(f=k),d=d.sibling;e.childExpirationTime=f}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=V.firstEffect),null!==V.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=
V.firstEffect),a.lastEffect=V.lastEffect),1<V.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=V:a.firstEffect=V,a.lastEffect=V))}else{b=Mi(V,W);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=V.sibling;if(null!==b)return b;V=a}while(null!==V);X===qj&&(X=vj);return null}function Xj(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Yj(a){var b=dg();fg(99,ik.bind(null,a,b));return null}
function ik(a,b){do Sj();while(null!==Ej);if((T&(oj|pj))!==S)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Xj(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(V=U=null,W=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=T;T|=pj;mj.current=null;le=Ld;var g=fe();if(ge(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(Db){h=null;break a}var C=0,y=-1,H=-1,z=0,ta=0,r=g,x=null;b:for(;;){for(var A;;){r!==h||0!==l&&3!==r.nodeType||(y=C+l);r!==m||0!==k&&3!==r.nodeType||(H=C+k);3===r.nodeType&&(C+=r.nodeValue.length);if(null===(A=r.firstChild))break;x=r;r=A}for(;;){if(r===g)break b;x===h&&++z===l&&(y=C);x===m&&++ta===k&&(H=C);if(null!==(A=r.nextSibling))break;r=x;x=r.parentNode}r=A}h=-1===y||-1===H?null:{start:y,end:H}}else h=null}h=h||{start:0,end:0}}else h=
null;me={focusedElem:g,selectionRange:h};Ld=!1;Y=e;do try{jk()}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var p=Y.effectTag;p&16&&Tb(Y.stateNode,"");if(p&128){var t=Y.alternate;if(null!==t){var v=t.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(p&1038){case 2:$i(Y);Y.effectTag&=-3;break;case 6:$i(Y);Y.effectTag&=-3;aj(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=-1025;aj(Y.alternate,
Y);break;case 4:aj(Y.alternate,Y);break;case 8:l=Y,Xi(g,l,h),Yi(l)}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);v=me;t=fe();p=v.focusedElem;h=v.selectionRange;if(t!==p&&p&&p.ownerDocument&&ee(p.ownerDocument.documentElement,p)){null!==h&&ge(p)&&(t=h.start,v=h.end,void 0===v&&(v=t),"selectionStart"in p?(p.selectionStart=t,p.selectionEnd=Math.min(v,p.value.length)):(v=(t=p.ownerDocument||document)&&t.defaultView||window,v.getSelection&&(v=v.getSelection(),
l=p.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!v.extend&&g>h&&(l=h,h=g,g=l),l=de(p,g),m=de(p,h),l&&m&&(1!==v.rangeCount||v.anchorNode!==l.node||v.anchorOffset!==l.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),v.removeAllRanges(),g>h?(v.addRange(t),v.extend(m.node,m.offset)):(t.setEnd(m.node,m.offset),v.addRange(t))))));t=[];for(v=p;v=v.parentNode;)1===v.nodeType&&t.push({element:v,left:v.scrollLeft,top:v.scrollTop});
"function"===typeof p.focus&&p.focus();for(p=0;p<t.length;p++)v=t[p],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}me=null;Ld=!!le;le=null;a.current=c;Y=e;do try{for(p=d;null!==Y;){var Dh=Y.effectTag;if(Dh&36){var dc=Y.alternate;t=Y;v=p;switch(t.tag){case 0:case 11:case 15:Ui(16,32,t);break;case 1:var fd=t.stateNode;if(t.effectTag&4)if(null===dc)fd.componentDidMount();else{var hk=t.elementType===t.type?dc.memoizedProps:mg(t.type,dc.memoizedProps);fd.componentDidUpdate(hk,dc.memoizedState,
fd.__reactInternalSnapshotBeforeUpdate)}var Eh=t.updateQueue;null!==Eh&&Kg(t,Eh,fd,v);break;case 3:var Fh=t.updateQueue;if(null!==Fh){g=null;if(null!==t.child)switch(t.child.tag){case 5:g=t.child.stateNode;break;case 1:g=t.child.stateNode}Kg(t,Fh,g,v)}break;case 5:var xk=t.stateNode;null===dc&&t.effectTag&4&&ne(t.type,t.memoizedProps)&&xk.focus();break;case 6:break;case 4:break;case 12:break;case 13:if(null===t.memoizedState){var Di=t.alternate;if(null!==Di){var Ei=Di.memoizedState;if(null!==Ei){var Fi=
Ei.dehydrated;null!==Fi&&Lc(Fi)}}}break;case 19:case 17:case 20:case 21:break;default:throw Error(u(163));}}if(Dh&128){t=void 0;var xd=Y.ref;if(null!==xd){var Gi=Y.stateNode;switch(Y.tag){case 5:t=Gi;break;default:t=Gi}"function"===typeof xd?xd(t):xd.current=t}}Y=Y.nextEffect}}catch(Db){if(null===Y)throw Error(u(330));Ri(Y,Db);Y=Y.nextEffect}while(null!==Y);Y=null;Yf();T=f}else a.current=c;if(Dj)Dj=!1,Ej=a,Fj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&
(jj=null);1073741823===b?a===Ij?Hj++:(Hj=0,Ij=a):Hj=0;"function"===typeof kk&&kk(c.stateNode,d);Z(a);if(gj)throw gj=!1,a=hj,hj=null,a;if((T&nj)!==S)return null;jg();return null}function jk(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Ti(Y.alternate,Y);0===(a&512)||Dj||(Dj=!0,gg(97,function(){Sj();return null}));Y=Y.nextEffect}}function Sj(){if(90!==Fj){var a=97<Fj?97:Fj;Fj=90;return fg(a,lk)}}
function lk(){if(null===Ej)return!1;var a=Ej;Ej=null;if((T&(oj|pj))!==S)throw Error(u(331));var b=T;T|=pj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:Ui(128,0,c),Ui(0,64,c)}}catch(d){if(null===a)throw Error(u(330));Ri(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}T=b;jg();return!0}function mk(a,b,c){b=Ni(c,b);b=fj(a,b,1073741823);Dg(a,b);a=Kj(a,1073741823);null!==a&&Z(a)}
function Ri(a,b){if(3===a.tag)mk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){mk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===jj||!jj.has(d))){a=Ni(b,a);a=ij(c,a,1073741823);Dg(c,a);c=Kj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function dk(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&W===c?X===uj||X===tj&&1073741823===xj&&cg()-bj<Cj?Tj(a,W):Bj=!0:Pj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,a.finishedExpirationTime===c&&(a.finishedExpirationTime=0,a.finishedWork=null),Z(a)))}function dj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Pg(),b=Qg(b,a,null));a=Kj(a,b);null!==a&&Z(a)}var gk;
gk=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)wg=!0;else{if(d<c){wg=!1;switch(b.tag){case 3:wi(b);li();break;case 5:oh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Jf(b);break;case 4:mh(b,b.stateNode.containerInfo);break;case 10:sg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return yi(a,b,c);I(M,M.current&
1,b);b=oi(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1,b);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return Bi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current,b);if(!d)return null}return oi(a,b,c)}wg=!1}}else wg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Ef(b,J.current);vg(b,c);e=Ih(null,b,d,a,e,c);b.effectTag|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;Mh();if(L(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;"function"===typeof g&&Og(b,d,g,a);e.updater=Sg;b.stateNode=e;e._reactInternalFiber=b;Wg(b,d,a,c);b=vi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;Va(e);if(1!==e._status)throw e._result;
e=e._result;b.type=e;f=b.tag=nk(e);a=mg(e,a);switch(f){case 0:b=si(null,b,e,a,c);break;case 1:b=ui(null,b,e,a,c);break;case 11:b=ni(null,b,e,a,c);break;case 14:b=pi(null,b,e,mg(e.type,a),d,c);break;default:throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),si(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ui(a,b,d,e,c);case 3:wi(b);d=b.updateQueue;if(null===d)throw Error(u(282));e=b.memoizedState;e=null!==e?e.element:
null;Hg(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)li(),b=oi(a,b,c);else{if(e=b.stateNode.hydrate)di=re(b.stateNode.containerInfo.firstChild),ci=b,e=ei=!0;if(e)for(c=gh(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),li();b=b.child}return b;case 5:return oh(b),null===a&&ii(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,oe(d,e)?g=null:null!==f&&oe(d,f)&&(b.effectTag|=16),ti(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=
b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&ii(b),null;case 13:return yi(a,b,c);case 4:return mh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=fh(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),ni(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;
e=b.pendingProps;g=b.memoizedProps;f=e.value;sg(b,f);if(null!==g){var h=g.value;f=of(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!K.current){b=oi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Bg(c,null),l.tag=2,Dg(h,l));h.expirationTime<c&&(h.expirationTime=
c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);ug(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,vg(b,c),e=xg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;
case 14:return e=b.type,f=mg(e,b.pendingProps),f=mg(e.type,f),pi(a,b,e,f,d,c);case 15:return ri(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:mg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Jf(b)):a=!1,vg(b,c),Ug(b,d,e,c),Wg(b,d,e,c),vi(null,b,d,!0,a,c);case 19:return Bi(a,b,c)}throw Error(u(156,b.tag));};var kk=null,Wi=null;
function ok(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);kk=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Wi=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function pk(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function gi(a,b,c,d){return new pk(a,b,c,d)}
function qi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function nk(a){if("function"===typeof a)return qi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Oa)return 11;if(a===Ra)return 14}return 2}
function ah(a,b){var c=a.alternate;null===c?(c=gi(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function ch(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)qi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case Ia:return eh(c.children,e,f,b);case Na:g=8;e|=7;break;case Ja:g=8;e|=1;break;case Ka:return a=gi(12,c,b,e|8),a.elementType=Ka,a.type=Ka,a.expirationTime=f,a;case Pa:return a=gi(13,c,b,e),a.type=Pa,a.elementType=Pa,a.expirationTime=f,a;case Qa:return a=gi(19,c,b,e),a.elementType=Qa,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case La:g=
10;break a;case Ma:g=9;break a;case Oa:g=11;break a;case Ra:g=14;break a;case Sa:g=16;d=null;break a}throw Error(u(130,null==a?a:typeof a,""));}b=gi(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function eh(a,b,c,d){a=gi(7,a,d,b);a.expirationTime=c;return a}function bh(a,b,c){a=gi(6,a,null,b);a.expirationTime=c;return a}
function dh(a,b,c){b=gi(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function qk(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Pj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Mj(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function Nj(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Rj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function rk(a,b,c,d){var e=b.current,f=Pg(),g=Mg.suspense;f=Qg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(ec(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=Bg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Dg(e,b);Rg(e,f);return f}function sk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function tk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function uk(a,b){tk(a,b);(a=a.alternate)&&tk(a,b)}
function vk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new qk(a,b,c),e=gi(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;a[we]=d.current;c&&0!==b&&wc(9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}vk.prototype.render=function(a,b){rk(a,this._internalRoot,null,void 0===b?null:b)};vk.prototype.unmount=function(a){var b=this._internalRoot,c=void 0===a?null:a,d=b.containerInfo;rk(null,b,null,function(){d[we]=null;null!==c&&c()})};
function wk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function yk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new vk(a,0,b?{hydrate:!0}:void 0)}
function zk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=sk(g);h.call(a)}}rk(b,g,a,e)}else{f=c._reactRootContainer=yk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=sk(g);k.call(a)}}ck(function(){rk(b,g,a,e)})}return sk(g)}function Ak(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Ha,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
jc=function(a){if(13===a.tag){var b=lg(Pg(),150,100);Rg(a,b);uk(a,b)}};kc=function(a){if(13===a.tag){Pg();var b=kg++;Rg(a,b);uk(a,b)}};lc=function(a){if(13===a.tag){var b=Pg();b=Qg(b,a,null);Rg(a,b);uk(a,b)}};
Za=function(a,b,c){switch(b){case "input":Eb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ye(d);if(!e)throw Error(u(90));zb(d);Eb(d,e)}}}break;case "textarea":Mb(a,c);break;case "select":b=c.value,null!=b&&Jb(a,!!c.multiple,b,!1)}};eb=bk;
fb=function(a,b,c,d){var e=T;T|=4;try{return fg(98,a.bind(null,b,c,d))}finally{T=e,T===S&&jg()}};gb=function(){(T&(1|oj|pj))===S&&(ak(),Sj())};hb=function(a,b){var c=T;T|=2;try{return a(b)}finally{T=c,T===S&&jg()}};function Bk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!wk(b))throw Error(u(200));return Ak(a,b,null,c)}
var Ck={createPortal:Bk,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=ic(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){if(!wk(b))throw Error(u(200));return zk(null,a,b,!0,c)},render:function(a,b,c){if(!wk(b))throw Error(u(200));return zk(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,b,c,d){if(!wk(c))throw Error(u(200));
if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return zk(a,b,c,!1,d)},unmountComponentAtNode:function(a){if(!wk(a))throw Error(u(40));return a._reactRootContainer?(ck(function(){zk(null,null,a,!1,function(){a._reactRootContainer=null;a[we]=null})}),!0):!1},unstable_createPortal:function(){return Bk.apply(void 0,arguments)},unstable_batchedUpdates:bk,flushSync:function(a,b){if((T&(oj|pj))!==S)throw Error(u(187));var c=T;T|=1;try{return fg(99,a.bind(null,b))}finally{T=c,jg()}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Cc,
xe,ye,Ca.injectEventPluginsByName,fa,Sc,function(a){ya(a,Rc)},cb,db,Pd,Ba,Sj,{current:!1}]}};
(function(a){var b=a.findFiberByHostInstance;return ok(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ea.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=ic(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Fc,bundleType:0,version:"16.12.0",
rendererPackageName:"react-dom"});var Dk={default:Ck},Ek=Dk&&Ck||Dk;module.exports=Ek.default||Ek;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(41);
} else {}


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.18.0
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=Math.floor((c-1)/2),e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_ImmediatePriority=1;exports.unstable_UserBlockingPriority=2;exports.unstable_NormalPriority=3;exports.unstable_IdlePriority=5;exports.unstable_LowPriority=4;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};exports.unstable_cancelCallback=function(a){a.callback=null};
exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_requestPaint=Z;exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_pauseExecution=function(){};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_Profiling=null;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(43);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(45);
} else {}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
exports.isSuspense=function(a){return t(a)===p};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

Object.defineProperty(exports,"__esModule",{value:!0});
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.suspense_list"):
60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.fundamental"):60117,w=b?Symbol.for("react.responder"):60118,x=b?Symbol.for("react.scope"):60119;function y(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function z(a){return y(a)===m}
exports.typeOf=y;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===v||a.$$typeof===w||a.$$typeof===x)};exports.isAsyncMode=function(a){return z(a)||y(a)===l};exports.isConcurrentMode=z;exports.isContextConsumer=function(a){return y(a)===k};exports.isContextProvider=function(a){return y(a)===h};
exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return y(a)===n};exports.isFragment=function(a){return y(a)===e};exports.isLazy=function(a){return y(a)===t};exports.isMemo=function(a){return y(a)===r};exports.isPortal=function(a){return y(a)===d};exports.isProfiler=function(a){return y(a)===g};exports.isStrictMode=function(a){return y(a)===f};exports.isSuspense=function(a){return y(a)===p};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(142);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
class AddButton extends react_1.default.Component {
    render() {
        return react_1.default.createElement("input", Object.assign({ className: 'ui-add-button', type: 'button', value: '\u271A' }, this.props));
    }
}
exports.default = AddButton;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(144);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
class DeleteButton extends react_1.default.Component {
    render() {
        return react_1.default.createElement("input", Object.assign({ className: 'ui-delete-button', type: 'button', value: '\u2716' }, this.props));
    }
}
exports.default = DeleteButton;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = promiseMiddleware;

var _isPromise = _interopRequireDefault(__webpack_require__(51));

var _fluxStandardAction = __webpack_require__(52);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function promiseMiddleware(_ref) {
  var dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      if (!(0, _fluxStandardAction.isFSA)(action)) {
        return (0, _isPromise.default)(action) ? action.then(dispatch) : next(action);
      }

      return (0, _isPromise.default)(action.payload) ? action.payload.then(function (result) {
        return dispatch(_objectSpread({}, action, {
          payload: result
        }));
      }).catch(function (error) {
        dispatch(_objectSpread({}, action, {
          payload: error,
          error: true
        }));
        return Promise.reject(error);
      }) : next(action);
    };
  };
}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = isPromise;

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString2 = __webpack_require__(53);

var _isString3 = _interopRequireDefault(_isString2);

var _isPlainObject2 = __webpack_require__(59);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

exports.isFSA = isFSA;
exports.isError = isError;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isFSA(action) {
  return (0, _isPlainObject3.default)(action) && (0, _isString3.default)(action.type) && Object.keys(action).every(isValidKey);
}

function isError(action) {
  return isFSA(action) && action.error === true;
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    isArray = __webpack_require__(58),
    isObjectLike = __webpack_require__(27);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(55);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)))

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(26);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(25),
    getPrototype = __webpack_require__(60),
    isObjectLike = __webpack_require__(27);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(61);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 61 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
__webpack_require__(137);
class Input extends react_1.default.Component {
    renderText(props) {
        const inputClassName = props.error ? 'input-error' : '';
        const pp = Object.assign({}, props);
        delete pp.onValueChange;
        return react_1.default.createElement("div", { className: 'settings-ui-input' },
            react_1.default.createElement("label", { htmlFor: props.id }, props.label),
            react_1.default.createElement("input", Object.assign({ type: 'text', className: inputClassName, onChange: this.bindOnChange.bind(this) }, pp)));
    }
    renderRadio(props) {
        const inputClassName = props.error ? 'input-error' : '';
        const pp = Object.assign({}, props);
        delete pp.onValueChange;
        return react_1.default.createElement("div", { className: 'settings-ui-input' },
            react_1.default.createElement("label", null,
                react_1.default.createElement("input", Object.assign({ type: 'radio', className: inputClassName, onChange: this.bindOnChange.bind(this) }, pp)),
                props.label));
    }
    renderTextArea(props) {
        const inputClassName = props.error ? 'input-error' : '';
        const pp = Object.assign({}, props);
        delete pp.onValueChange;
        return react_1.default.createElement("div", { className: 'settings-ui-input' },
            react_1.default.createElement("label", { htmlFor: props.id }, props.label),
            react_1.default.createElement("textarea", Object.assign({ className: inputClassName, onChange: this.bindOnChange.bind(this) }, pp)),
            react_1.default.createElement("p", { className: 'settings-ui-input-error' }, this.props.error));
    }
    render() {
        const { type } = this.props;
        switch (this.props.type) {
            case 'text':
                return this.renderText(this.props);
            case 'radio':
                return this.renderRadio(this.props);
            case 'textarea':
                return this.renderTextArea(this.props);
            default:
                console.warn(`Unsupported input type ${type}`);
        }
        return null;
    }
    bindOnChange(e) {
        if (this.props.onValueChange) {
            this.props.onValueChange(e.target.name, e.target.value);
        }
    }
}
exports.default = Input;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SETTING_SET_SETTINGS = 'setting.set.settings';
exports.SETTING_SHOW_ERROR = 'setting.show.error';
exports.SETTING_SWITCH_TO_FORM = 'setting.switch.to.form';
exports.SETTING_SWITCH_TO_JSON = 'setting.switch.to.json';


/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const react_dom_1 = tslib_1.__importDefault(__webpack_require__(18));
const components_1 = tslib_1.__importDefault(__webpack_require__(134));
const setting_1 = tslib_1.__importDefault(__webpack_require__(161));
const react_redux_1 = __webpack_require__(29);
const redux_promise_1 = tslib_1.__importDefault(__webpack_require__(50));
const redux_1 = __webpack_require__(19);
const store = redux_1.createStore(setting_1.default, redux_1.applyMiddleware(redux_promise_1.default));
document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('vimvixen-settings');
    react_dom_1.default.render(react_1.default.createElement(react_redux_1.Provider, { store: store },
        react_1.default.createElement(components_1.default, { store: store })), wrapper);
});


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(135);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const react_redux_1 = __webpack_require__(29);
const Input_1 = tslib_1.__importDefault(__webpack_require__(69));
const SearchForm_1 = tslib_1.__importDefault(__webpack_require__(139));
const KeymapsForm_1 = tslib_1.__importDefault(__webpack_require__(146));
const BlacklistForm_1 = tslib_1.__importDefault(__webpack_require__(150));
const PropertiesForm_1 = tslib_1.__importDefault(__webpack_require__(153));
const PartialBlacklistForm_1 = tslib_1.__importDefault(__webpack_require__(156));
const settingActions = tslib_1.__importStar(__webpack_require__(159));
const SettingData_1 = tslib_1.__importStar(__webpack_require__(13));
const Properties_1 = tslib_1.__importDefault(__webpack_require__(8));
const DO_YOU_WANT_TO_CONTINUE = 'Some settings in JSON can be lost when migrating.  ' +
    'Do you want to continue?';
class SettingsComponent extends react_1.default.Component {
    componentDidMount() {
        this.props.dispatch(settingActions.load());
    }
    renderFormFields(form) {
        return react_1.default.createElement("div", null,
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("legend", null, "Keybindings"),
                react_1.default.createElement(KeymapsForm_1.default, { value: form.keymaps, onChange: this.bindKeymapsForm.bind(this), onBlur: this.save.bind(this) })),
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("legend", null, "Search Engines"),
                react_1.default.createElement(SearchForm_1.default, { value: form.search, onChange: this.bindSearchForm.bind(this), onBlur: this.save.bind(this) })),
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("legend", null, "Blacklist"),
                react_1.default.createElement(BlacklistForm_1.default, { value: form.blacklist, onChange: this.bindBlacklistForm.bind(this), onBlur: this.save.bind(this) })),
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("legend", null, "Partial blacklist"),
                react_1.default.createElement(PartialBlacklistForm_1.default, { value: form.blacklist, onChange: this.bindBlacklistForm.bind(this), onBlur: this.save.bind(this) })),
            react_1.default.createElement("fieldset", null,
                react_1.default.createElement("legend", null, "Properties"),
                react_1.default.createElement(PropertiesForm_1.default, { types: Properties_1.default.types(), value: form.properties.toJSON(), onChange: this.bindPropertiesForm.bind(this), onBlur: this.save.bind(this) })));
    }
    renderJsonFields(json, error) {
        return react_1.default.createElement("div", null,
            react_1.default.createElement(Input_1.default, { type: 'textarea', name: 'json', label: 'Plain JSON', spellCheck: false, error: error, onValueChange: this.bindJson.bind(this), onBlur: this.save.bind(this), value: json.toJSONText() }));
    }
    render() {
        let fields = null;
        const disabled = this.props.error.length > 0;
        if (this.props.source === 'form') {
            fields = this.renderFormFields(this.props.form);
        }
        else if (this.props.source === 'json') {
            fields = this.renderJsonFields(this.props.json, this.props.error);
        }
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Configure Vim-Vixen"),
            react_1.default.createElement("form", { className: 'vimvixen-settings-form' },
                react_1.default.createElement(Input_1.default, { type: 'radio', id: 'setting-source-form', name: 'source', label: 'Use form', checked: this.props.source === 'form', value: 'form', onValueChange: this.bindSource.bind(this), disabled: disabled }),
                react_1.default.createElement(Input_1.default, { type: 'radio', name: 'source', label: 'Use plain JSON', checked: this.props.source === 'json', value: 'json', onValueChange: this.bindSource.bind(this), disabled: disabled }),
                fields)));
    }
    bindKeymapsForm(value) {
        const data = new SettingData_1.default({
            source: this.props.source,
            form: this.props.form.buildWithKeymaps(value),
        });
        this.props.dispatch(settingActions.set(data));
    }
    bindSearchForm(value) {
        const data = new SettingData_1.default({
            source: this.props.source,
            form: this.props.form.buildWithSearch(SettingData_1.FormSearch.fromJSON(value)),
        });
        this.props.dispatch(settingActions.set(data));
    }
    bindBlacklistForm(blacklist) {
        const data = new SettingData_1.default({
            source: this.props.source,
            form: this.props.form.buildWithBlacklist(blacklist),
        });
        this.props.dispatch(settingActions.set(data));
    }
    bindPropertiesForm(value) {
        const data = new SettingData_1.default({
            source: this.props.source,
            form: this.props.form.buildWithProperties(Properties_1.default.fromJSON(value))
        });
        this.props.dispatch(settingActions.set(data));
    }
    bindJson(_name, value) {
        const data = new SettingData_1.default({
            source: this.props.source,
            json: SettingData_1.JSONTextSettings.fromText(value),
        });
        this.props.dispatch(settingActions.set(data));
    }
    bindSource(_name, value) {
        const from = this.props.source;
        if (from === 'form' && value === 'json') {
            this.props.dispatch(settingActions.switchToJson(this.props.form));
            this.save();
        }
        else if (from === 'json' && value === 'form') {
            const b = window.confirm(DO_YOU_WANT_TO_CONTINUE);
            if (!b) {
                this.forceUpdate();
                return;
            }
            this.props.dispatch(settingActions.switchToForm(this.props.json));
            this.save();
        }
    }
    save() {
        const { source, json, form } = this.props.store.getState();
        this.props.dispatch(settingActions.save(new SettingData_1.default({ source, json, form })));
    }
}
const mapStateToProps = (state) => (Object.assign({}, state));
exports.default = react_redux_1.connect(mapStateToProps)(SettingsComponent);


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(136);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./site.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".vimvixen-settings-form{padding:2px}.vimvixen-settings-form textarea[name=json]{font-family:monospace;width:100%;min-height:64ex;resize:vertical}.vimvixen-settings-form fieldset{margin:0;padding:0;border:none;margin-top:1rem}.vimvixen-settings-form fieldset fieldset:first-of-type{margin-top:1rem}.vimvixen-settings-form fieldset legend{font-size:1.5rem;padding:.5rem 0;font-weight:bold}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(138);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./Input.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".settings-ui-input{page-break-inside:avoid}.settings-ui-input *{page-break-inside:avoid}.settings-ui-input label{font-weight:bold;min-width:14rem;display:inline-block}.settings-ui-input input[type='text']{padding:4px;width:8rem}.settings-ui-input input.input-crror,.settings-ui-input textarea.input-error{box-shadow:0 0 2px red}.settings-ui-input-error{font-weight:bold;color:red;min-height:1.5em}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(140);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const AddButton_1 = tslib_1.__importDefault(__webpack_require__(48));
const DeleteButton_1 = tslib_1.__importDefault(__webpack_require__(49));
const SettingData_1 = __webpack_require__(13);
class SearchForm extends react_1.default.Component {
    render() {
        const value = this.props.value.toJSON();
        return react_1.default.createElement("div", { className: 'form-search-form' },
            react_1.default.createElement("div", { className: 'form-search-form-header' },
                react_1.default.createElement("div", { className: 'column-name' }, "Name"),
                react_1.default.createElement("div", { className: 'column-url' }, "URL"),
                react_1.default.createElement("div", { className: 'column-option' }, "Default")),
            value.engines.map((engine, index) => {
                return react_1.default.createElement("div", { key: index, className: 'form-search-form-row' },
                    react_1.default.createElement("input", { "data-index": index, type: 'text', name: 'name', className: 'column-name', value: engine[0], onChange: this.bindValue.bind(this), onBlur: this.props.onBlur }),
                    react_1.default.createElement("input", { "data-index": index, type: 'text', name: 'url', placeholder: 'http://example.com/?q={}', className: 'column-url', value: engine[1], onChange: this.bindValue.bind(this), onBlur: this.props.onBlur }),
                    react_1.default.createElement("div", { className: 'column-option' },
                        react_1.default.createElement("input", { "data-index": index, type: 'radio', name: 'default', checked: value.default === engine[0], onChange: this.bindValue.bind(this) }),
                        react_1.default.createElement(DeleteButton_1.default, { "data-index": index, name: 'delete', onClick: this.bindValue.bind(this) })));
            }),
            react_1.default.createElement(AddButton_1.default, { name: 'add', style: { float: 'right' }, onClick: this.bindValue.bind(this) }));
    }
    bindValue(e) {
        const value = this.props.value.toJSON();
        const name = e.target.name;
        const index = Number(e.target.getAttribute('data-index'));
        const next = {
            default: value.default,
            engines: value.engines.slice(),
        };
        if (name === 'name') {
            next.engines[index][0] = e.target.value;
            next.default = value.engines[index][0];
        }
        else if (name === 'url') {
            next.engines[index][1] = e.target.value;
        }
        else if (name === 'default') {
            next.default = value.engines[index][0];
        }
        else if (name === 'add') {
            next.engines.push(['', '']);
        }
        else if (name === 'delete' && value.engines.length > 1) {
            next.engines.splice(index, 1);
            if (value.engines[index][0] === value.default) {
                const nextIndex = Math.min(index, next.engines.length - 1);
                next.default = next.engines[nextIndex][0];
            }
        }
        this.props.onChange(SettingData_1.FormSearch.fromJSON(next));
        if (name === 'delete' || name === 'default') {
            this.props.onBlur();
        }
    }
}
SearchForm.defaultProps = {
    value: SettingData_1.FormSearch.fromJSON({ default: '', engines: [] }),
    onChange: () => { },
    onBlur: () => { },
};
exports.default = SearchForm;


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(141);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./SearchForm.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-search-form-header{display:flex;font-weight:bold}.form-search-form-header .column-name{flex:1;min-width:0}.form-search-form-header .column-url{flex:5;min-width:0}.form-search-form-header .column-option{text-align:right;flex-basis:5rem}.form-search-form-row{display:flex}.form-search-form-row .column-name{flex:1;min-width:0}.form-search-form-row .column-url{flex:5;min-width:0}.form-search-form-row .column-option{text-align:right;flex-basis:5rem}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(143);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./AddButton.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ui-add-button{border:none;padding:4;display:inline;background:none;font-weight:bold;color:green;cursor:pointer}.ui-add-button:hover{color:darkgreen}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(145);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./DeleteButton.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".ui-delete-button{border:none;padding:4;display:inline;background:none;color:red;cursor:pointer}.ui-delete-button:hover{color:darkred}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(147);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Input_1 = tslib_1.__importDefault(__webpack_require__(69));
const keymaps_1 = tslib_1.__importDefault(__webpack_require__(149));
const SettingData_1 = __webpack_require__(13);
class KeymapsForm extends react_1.default.Component {
    render() {
        const values = this.props.value.toJSON();
        return react_1.default.createElement("div", { className: 'form-keymaps-form' }, keymaps_1.default.fields.map((group, index) => {
            return react_1.default.createElement("div", { key: index, className: 'form-keymaps-form-field-group' }, group.map(([name, label]) => {
                const value = values[name] || '';
                return react_1.default.createElement(Input_1.default, { type: 'text', id: name, name: name, key: name, label: label, value: value, onValueChange: this.bindValue.bind(this), onBlur: this.props.onBlur });
            }));
        }));
    }
    bindValue(name, value) {
        this.props.onChange(this.props.value.buildWithOverride(name, value));
    }
}
KeymapsForm.defaultProps = {
    value: SettingData_1.FormKeymaps.fromJSON({}),
    onChange: () => { },
    onBlur: () => { },
};
exports.default = KeymapsForm;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(148);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./KeymapsForm.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-keymaps-form{column-count:3}.form-keymaps-form-field-group{margin-top:24px}.form-keymaps-form-field-group:first-of-type{margin-top:24px}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const fields = [
    [
        ['scroll.vertically?{"count":1}', 'Scroll down'],
        ['scroll.vertically?{"count":-1}', 'Scroll up'],
        ['scroll.horizonally?{"count":-1}', 'Scroll left'],
        ['scroll.horizonally?{"count":1}', 'Scroll right'],
        ['scroll.home', 'Scroll to leftmost'],
        ['scroll.end', 'Scroll to rightmost'],
        ['scroll.top', 'Scroll to top'],
        ['scroll.bottom', 'Scroll to bottom'],
        ['scroll.pages?{"count":-0.5}', 'Scroll up by half of screen'],
        ['scroll.pages?{"count":0.5}', 'Scroll down by half of screen'],
        ['scroll.pages?{"count":-1}', 'Scroll up by a screen'],
        ['scroll.pages?{"count":1}', 'Scroll down by a screen'],
    ], [
        ['mark.set.prefix', 'Set mark at current position'],
        ['mark.jump.prefix', 'Jump to the mark'],
    ], [
        ['tabs.close?{"select":"right"}', 'Close a tab'],
        ['tabs.close.right', 'Close all tabs to the right'],
        ['tabs.reopen', 'Reopen closed tab'],
        ['tabs.next', 'Select next tab'],
        ['tabs.prev', 'Select prev tab'],
        ['tabs.first', 'Select first tab'],
        ['tabs.last', 'Select last tab'],
        ['tabs.reload?{"cache":false}', 'Reload current tab'],
        ['tabs.reload?{"cache":true}', 'Reload with no caches'],
        ['tabs.pin.toggle', 'Toggle pinned state'],
        ['tabs.duplicate', 'Duplicate a tab'],
    ], [
        ['follow.start?{"newTab":false,"background":false}', 'Follow a link'],
        ['follow.start?{"newTab":true,"background":false}', 'Follow a link in new tab'],
        ['navigate.history.prev', 'Go back in histories'],
        ['navigate.history.next', 'Go forward in histories'],
        ['navigate.link.next', 'Open next link'],
        ['navigate.link.prev', 'Open previous link'],
        ['navigate.parent', 'Go to parent directory'],
        ['navigate.root', 'Go to root directory'],
        ['page.source', 'Open page source'],
        ['page.home?{"newTab":false}', 'Open start page to current tab'],
        ['page.home?{"newTab":true}', 'Open start page in new tab'],
        ['focus.input', 'Focus input'],
    ], [
        ['find.start', 'Start find mode'],
        ['find.next', 'Find next word'],
        ['find.prev', 'Find previous word'],
    ], [
        ['command.show', 'Open console'],
        ['command.show.open?{"alter":false}', 'Open URL'],
        ['command.show.open?{"alter":true}', 'Alter URL'],
        ['command.show.tabopen?{"alter":false}', 'Open URL in new tab'],
        ['command.show.tabopen?{"alter":true}', 'Alter URL in new tab'],
        ['command.show.winopen?{"alter":false}', 'Open URL in new window'],
        ['command.show.winopen?{"alter":true}', 'Alter URL in new window'],
        ['command.show.buffer', 'Open buffer command'],
        ['command.show.addbookmark?{"alter":true}', 'Open addbookmark command'],
    ], [
        ['addon.toggle.enabled', 'Enable or disable'],
        ['urls.yank', 'Copy current URL'],
        ['urls.paste?{"newTab":false}', 'Open clipboard\'s URL in current tab'],
        ['urls.paste?{"newTab":true}', 'Open clipboard\'s URL in new tab'],
        ['zoom.in', 'Zoom-in'],
        ['zoom.out', 'Zoom-out'],
        ['zoom.neutral', 'Reset zoom level'],
        ['repeat.last', 'Repeat last change'],
    ]
];
exports.default = {
    fields,
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(151);
const AddButton_1 = tslib_1.__importDefault(__webpack_require__(48));
const DeleteButton_1 = tslib_1.__importDefault(__webpack_require__(49));
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Blacklist_1 = tslib_1.__importStar(__webpack_require__(12));
class BlacklistForm extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", { className: 'form-blacklist-form' },
            this.props.value.items.map((item, index) => {
                if (item.partial) {
                    return null;
                }
                return react_1.default.createElement("div", { key: index, className: 'form-blacklist-form-row' },
                    react_1.default.createElement("input", { "data-index": index, type: 'text', name: 'url', className: 'column-url', value: item.pattern, onChange: this.bindValue.bind(this), onBlur: this.props.onBlur }),
                    react_1.default.createElement(DeleteButton_1.default, { "data-index": index, name: 'delete', onClick: this.bindValue.bind(this), onBlur: this.props.onBlur }));
            }),
            react_1.default.createElement(AddButton_1.default, { name: 'add', style: { float: 'right' }, onClick: this.bindValue.bind(this) }));
    }
    bindValue(e) {
        const name = e.target.name;
        const index = e.target.getAttribute('data-index');
        const items = this.props.value.items;
        if (name === 'url') {
            items[index] = new Blacklist_1.BlacklistItem(e.target.value, false, []);
        }
        else if (name === 'add') {
            items.push(new Blacklist_1.BlacklistItem('', false, []));
        }
        else if (name === 'delete') {
            items.splice(index, 1);
        }
        this.props.onChange(new Blacklist_1.default(items));
        if (name === 'delete') {
            this.props.onBlur();
        }
    }
}
BlacklistForm.defaultProps = {
    value: new Blacklist_1.default([]),
    onChange: () => { },
    onBlur: () => { },
};
exports.default = BlacklistForm;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(152);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./BlacklistForm.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-blacklist-form-row{display:flex}.form-blacklist-form-row .column-url{flex:1}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(154);
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
class PropertiesForm extends react_1.default.Component {
    render() {
        const types = this.props.types;
        const values = this.props.value;
        return react_1.default.createElement("div", { className: 'form-properties-form' }, Object.keys(types).map((name) => {
            const type = types[name];
            let inputType = '';
            let onChange = this.bindValue.bind(this);
            if (type === 'string') {
                inputType = 'text';
            }
            else if (type === 'number') {
                inputType = 'number';
            }
            else if (type === 'boolean') {
                inputType = 'checkbox';
                onChange = (e) => {
                    this.bindValue(e);
                    this.props.onBlur();
                };
            }
            else {
                return null;
            }
            return react_1.default.createElement("div", { key: name, className: 'form-properties-form-row' },
                react_1.default.createElement("label", null,
                    react_1.default.createElement("span", { className: 'column-name' }, name),
                    react_1.default.createElement("input", { type: inputType, name: name, className: 'column-input', value: values[name] ? values[name] : '', onChange: onChange, onBlur: this.props.onBlur, checked: values[name] })));
        }));
    }
    bindValue(e) {
        const name = e.target.name;
        const next = Object.assign({}, this.props.value);
        if (e.target.type.toLowerCase() === 'checkbox') {
            next[name] = e.target.checked;
        }
        else if (e.target.type.toLowerCase() === 'number') {
            next[name] = Number(e.target.value);
        }
        else {
            next[name] = e.target.value;
        }
        this.props.onChange(next);
    }
}
PropertiesForm.defaultProps = {
    types: {},
    value: {},
    onChange: () => { },
    onBlur: () => { },
};
exports.default = PropertiesForm;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(155);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./PropertiesForm.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-properties-form-row .column-name{display:inline-block;min-width:5rem;font-weight:bold}.form-properties-form-row .column-input{line-height:2.2rem}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(157);
const AddButton_1 = tslib_1.__importDefault(__webpack_require__(48));
const DeleteButton_1 = tslib_1.__importDefault(__webpack_require__(49));
const react_1 = tslib_1.__importDefault(__webpack_require__(1));
const Blacklist_1 = tslib_1.__importStar(__webpack_require__(12));
class PartialBlacklistForm extends react_1.default.Component {
    render() {
        return react_1.default.createElement("div", { className: 'form-partial-blacklist-form' },
            react_1.default.createElement("div", { className: 'form-partial-blacklist-form-header' },
                react_1.default.createElement("div", { className: 'column-url' }, "URL"),
                react_1.default.createElement("div", { className: 'column-keys' }, "Keys")),
            this.props.value.items.map((item, index) => {
                if (!item.partial) {
                    return null;
                }
                return react_1.default.createElement("div", { key: index, className: 'form-partial-blacklist-form-row' },
                    react_1.default.createElement("input", { "data-index": index, type: 'text', name: 'url', className: 'column-url', value: item.pattern, onChange: this.bindValue.bind(this), onBlur: this.props.onBlur }),
                    react_1.default.createElement("input", { "data-index": index, type: 'text', name: 'keys', className: 'column-keys', value: item.keys.join(','), onChange: this.bindValue.bind(this), onBlur: this.props.onBlur }),
                    react_1.default.createElement(DeleteButton_1.default, { "data-index": index, name: 'delete', onClick: this.bindValue.bind(this), onBlur: this.props.onBlur }));
            }),
            react_1.default.createElement(AddButton_1.default, { name: 'add', style: { float: 'right' }, onClick: this.bindValue.bind(this) }));
    }
    bindValue(e) {
        const name = e.target.name;
        const index = e.target.getAttribute('data-index');
        const items = this.props.value.items;
        if (name === 'url') {
            const current = items[index];
            items[index] = new Blacklist_1.BlacklistItem(e.target.value, true, current.keys);
        }
        else if (name === 'keys') {
            const current = items[index];
            items[index] = new Blacklist_1.BlacklistItem(current.pattern, true, e.target.value.split(','));
        }
        else if (name === 'add') {
            items.push(new Blacklist_1.BlacklistItem('', true, []));
        }
        else if (name === 'delete') {
            items.splice(index, 1);
        }
        this.props.onChange(new Blacklist_1.default(items));
        if (name === 'delete') {
            this.props.onBlur();
        }
    }
}
PartialBlacklistForm.defaultProps = {
    value: new Blacklist_1.default([]),
    onChange: () => { },
    onBlur: () => { },
};
exports.default = PartialBlacklistForm;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(158);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var id = "!!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js?sourceMap=true!./PartialBlacklistForm.scss";
var update = api(id, content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".form-partial-blacklist-form-header{display:flex;font-weight:bold}.form-partial-blacklist-form-header .column-url{flex:5;min-width:0}.form-partial-blacklist-form-header .column-keys{flex:1;min-width:0}.form-partial-blacklist-form-header .column-delete{flex:1;min-width:0}.form-partial-blacklist-form-row{display:flex}.form-partial-blacklist-form-row .column-url{flex:5;min-width:0}.form-partial-blacklist-form-row .column-keys{flex:1;min-width:0}.form-partial-blacklist-form-row .column-delete{flex:1;min-width:0}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const actions = tslib_1.__importStar(__webpack_require__(70));
const storages = tslib_1.__importStar(__webpack_require__(160));
const SettingData_1 = __webpack_require__(13);
const load = async () => {
    const data = await storages.load();
    return set(data);
};
exports.load = load;
const save = async (data) => {
    try {
        if (data.getSource() === SettingData_1.SettingSource.JSON) {
            data.toSettings();
        }
    }
    catch (e) {
        return {
            type: actions.SETTING_SHOW_ERROR,
            error: e.toString(),
            json: data.getJSON(),
        };
    }
    await storages.save(data);
    return set(data);
};
exports.save = save;
const switchToForm = (json) => {
    try {
        const form = SettingData_1.FormSettings.fromSettings(json.toSettings());
        return {
            type: actions.SETTING_SWITCH_TO_FORM,
            form,
        };
    }
    catch (e) {
        return {
            type: actions.SETTING_SHOW_ERROR,
            error: e.toString(),
            json,
        };
    }
};
exports.switchToForm = switchToForm;
const switchToJson = (form) => {
    const json = SettingData_1.JSONTextSettings.fromSettings(form.toSettings());
    return {
        type: actions.SETTING_SWITCH_TO_JSON,
        json,
    };
};
exports.switchToJson = switchToJson;
const set = (data) => {
    const source = data.getSource();
    switch (source) {
        case SettingData_1.SettingSource.JSON:
            return {
                type: actions.SETTING_SET_SETTINGS,
                source: source,
                json: data.getJSON(),
            };
        case SettingData_1.SettingSource.Form:
            return {
                type: actions.SETTING_SET_SETTINGS,
                source: source,
                form: data.getForm(),
            };
    }
    throw new Error(`unknown source: ${source}`);
};
exports.set = set;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const SettingData_1 = tslib_1.__importStar(__webpack_require__(13));
exports.load = async () => {
    const { settings } = await browser.storage.local.get('settings');
    if (!settings) {
        return SettingData_1.DefaultSettingData;
    }
    try {
        return SettingData_1.default.fromJSON(settings);
    }
    catch (e) {
        console.error('unable to load settings', e);
        return SettingData_1.DefaultSettingData;
    }
};
exports.save = (data) => {
    return browser.storage.local.set({
        settings: data.toJSON(),
    });
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const actions = tslib_1.__importStar(__webpack_require__(70));
const SettingData_1 = __webpack_require__(13);
const Settings_1 = __webpack_require__(15);
const defaultState = {
    source: SettingData_1.SettingSource.JSON,
    json: SettingData_1.JSONTextSettings.fromText(''),
    form: SettingData_1.FormSettings.fromSettings(Settings_1.DefaultSetting),
    error: '',
};
function reducer(state = defaultState, action) {
    switch (action.type) {
        case actions.SETTING_SET_SETTINGS:
            return Object.assign(Object.assign({}, state), { source: action.source, json: action.json, form: action.form, error: '' });
        case actions.SETTING_SHOW_ERROR:
            return Object.assign(Object.assign({}, state), { error: action.error, json: action.json });
        case actions.SETTING_SWITCH_TO_FORM:
            return Object.assign(Object.assign({}, state), { error: '', source: SettingData_1.SettingSource.Form, form: action.form });
        case actions.SETTING_SWITCH_TO_JSON:
            return Object.assign(Object.assign({}, state), { error: '', source: SettingData_1.SettingSource.JSON, json: action.json });
        default:
            return state;
    }
}
exports.default = reducer;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvb3BlcmF0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL1Byb3BlcnRpZXMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL0JsYWNrbGlzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL1NldHRpbmdEYXRhLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2V0dGluZ3MvS2V5bWFwcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL1NldHRpbmdzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2V0dGluZ3MvS2V5LnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2V0dGluZ3MvU2VhcmNoLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1kb20vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZHV4L2VzL3JlZHV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy9kaXN0L2hvaXN0LW5vbi1yZWFjdC1zdGF0aWNzLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvb2JqZWN0LWFzc2lnbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlR2V0VGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX1N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzT2JqZWN0TGlrZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29tcG9uZW50cy9Db250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9iYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvU3Vic2NyaXB0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL1Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvdXRpbHMvc2hhbGxvd0VxdWFsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy9pc1BsYWluT2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy93YXJuaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy91dGlscy92ZXJpZnlQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC93cmFwTWFwVG9Qcm9wcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9tYXBEaXNwYXRjaFRvUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvbWFwU3RhdGVUb1Byb3BzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L21lcmdlUHJvcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2Nvbm5lY3QvdmVyaWZ5U3Vic2VsZWN0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9jb25uZWN0L3NlbGVjdG9yRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvY29ubmVjdC9jb25uZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VSZWR1eENvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2hvb2tzL3VzZVN0b3JlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9lcy9ob29rcy91c2VEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtcmVkdXgvZXMvaG9va3MvdXNlU2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL3V0aWxzL3JlYWN0QmF0Y2hlZFVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1yZWR1eC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N5bWJvbC1vYnNlcnZhYmxlL2VzL3BvbnlmaWxsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRvbS9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zY2hlZHVsZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NjaGVkdWxlci9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXJlZHV4L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2hhcm1vbnktbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL3VpL0FkZEJ1dHRvbi50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvdWkvRGVsZXRlQnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVkdXgtcHJvbWlzZS9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2lzLXByb21pc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsdXgtc3RhbmRhcmQtYWN0aW9uL2xpYi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2lzU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX3Jvb3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fZnJlZUdsb2JhbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRSYXdUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb2JqZWN0VG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9pc0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaXNQbGFpbk9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19nZXRQcm90b3R5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fb3ZlckFyZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy91aS9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2FjdGlvbnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvc2l0ZS5zY3NzPzYxMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvc2l0ZS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL3VpL0lucHV0LnNjc3M/OGJhOCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy91aS9JbnB1dC5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL2Zvcm0vU2VhcmNoRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9TZWFyY2hGb3JtLnNjc3M/MzExZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy9mb3JtL1NlYXJjaEZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy91aS9BZGRCdXR0b24uc2Nzcz82NzIyIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL3VpL0FkZEJ1dHRvbi5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL3VpL0RlbGV0ZUJ1dHRvbi5zY3NzPzFmZTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvdWkvRGVsZXRlQnV0dG9uLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9LZXltYXBzRm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9LZXltYXBzRm9ybS5zY3NzPzM3MzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9LZXltYXBzRm9ybS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9rZXltYXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9jb21wb25lbnRzL2Zvcm0vQmxhY2tsaXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9CbGFja2xpc3RGb3JtLnNjc3M/ZTAwMSIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy9mb3JtL0JsYWNrbGlzdEZvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy9mb3JtL1Byb3BlcnRpZXNGb3JtLnRzeCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy9mb3JtL1Byb3BlcnRpZXNGb3JtLnNjc3M/Y2UwNCIsIndlYnBhY2s6Ly8vLi9zcmMvc2V0dGluZ3MvY29tcG9uZW50cy9mb3JtL1Byb3BlcnRpZXNGb3JtLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9QYXJ0aWFsQmxhY2tsaXN0Rm9ybS50c3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9QYXJ0aWFsQmxhY2tsaXN0Rm9ybS5zY3NzPzVhZGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL2NvbXBvbmVudHMvZm9ybS9QYXJ0aWFsQmxhY2tsaXN0Rm9ybS5zY3NzIiwid2VicGFjazovLy8uL3NyYy9zZXR0aW5ncy9hY3Rpb25zL3NldHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NldHRpbmdzL3JlZHVjZXJzL3NldHRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSTtRQUN6QixLQUFLLE9BQU8sQ0FBQyxzQkFBc0I7WUFDakMsdUNBQVksS0FBSyxLQUNmLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLDJCQUFhLENBQUMsSUFBSSxFQUMxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSTtRQUN6QixLQUFLLE9BQU8sQ0FBQyxzQkFBc0I7WUFDakMsdUNBQVksS0FBSyxLQUNmLEtBQUssRUFBRSxFQUFFLEVBQ1QsTUFBTSxFQUFFLDJCQUFhLENBQUMsSUFBSSxFQUMxQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksSUFBSTtRQUN6QjtZQUNFLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7QUFDSCxDQUFDO0FBNUJELDBCQTRCQyIsImZpbGUiOiJzZXR0aW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMzMpO1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIGlmIChlLmluZGV4T2YocFtpXSkgPCAwKVxyXG4gICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXQodikge1xyXG4gICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBfX2F3YWl0ID8gKHRoaXMudiA9IHYsIHRoaXMpIDogbmV3IF9fYXdhaXQodik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jR2VuZXJhdG9yKHRoaXNBcmcsIF9hcmd1bWVudHMsIGdlbmVyYXRvcikge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBnID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pLCBpLCBxID0gW107XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaWYgKGdbbl0pIGlbbl0gPSBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKGEsIGIpIHsgcS5wdXNoKFtuLCB2LCBhLCBiXSkgPiAxIHx8IHJlc3VtZShuLCB2KTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBuID09PSBcInJldHVyblwiIH0gOiBmID8gZih2KSA6IHY7IH0gOiBmOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jVmFsdWVzKG8pIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgbSA9IG9bU3ltYm9sLmFzeW5jSXRlcmF0b3JdLCBpO1xyXG4gICAgcmV0dXJuIG0gPyBtLmNhbGwobykgOiAobyA9IHR5cGVvZiBfX3ZhbHVlcyA9PT0gXCJmdW5jdGlvblwiID8gX192YWx1ZXMobykgOiBvW1N5bWJvbC5pdGVyYXRvcl0oKSwgaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIpLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGkpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlbbl0gPSBvW25dICYmIGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7IHYgPSBvW25dKHYpLCBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCB2LmRvbmUsIHYudmFsdWUpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgZCwgdikgeyBQcm9taXNlLnJlc29sdmUodikudGhlbihmdW5jdGlvbih2KSB7IHJlc29sdmUoeyB2YWx1ZTogdiwgZG9uZTogZCB9KTsgfSwgcmVqZWN0KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tYWtlVGVtcGxhdGVPYmplY3QoY29va2VkLCByYXcpIHtcclxuICAgIGlmIChPYmplY3QuZGVmaW5lUHJvcGVydHkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvb2tlZCwgXCJyYXdcIiwgeyB2YWx1ZTogcmF3IH0pOyB9IGVsc2UgeyBjb29rZWQucmF3ID0gcmF3OyB9XHJcbiAgICByZXR1cm4gY29va2VkO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgcmVzdWx0W2tdID0gbW9kW2tdO1xyXG4gICAgcmVzdWx0LmRlZmF1bHQgPSBtb2Q7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFVzZSBpbnZhcmlhbnQoKSB0byBhc3NlcnQgc3RhdGUgd2hpY2ggeW91ciBwcm9ncmFtIGFzc3VtZXMgdG8gYmUgdHJ1ZS5cbiAqXG4gKiBQcm92aWRlIHNwcmludGYtc3R5bGUgZm9ybWF0IChvbmx5ICVzIGlzIHN1cHBvcnRlZCkgYW5kIGFyZ3VtZW50c1xuICogdG8gcHJvdmlkZSBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGJyb2tlIGFuZCB3aGF0IHlvdSB3ZXJlXG4gKiBleHBlY3RpbmcuXG4gKlxuICogVGhlIGludmFyaWFudCBtZXNzYWdlIHdpbGwgYmUgc3RyaXBwZWQgaW4gcHJvZHVjdGlvbiwgYnV0IHRoZSBpbnZhcmlhbnRcbiAqIHdpbGwgcmVtYWluIHRvIGVuc3VyZSBsb2dpYyBkb2VzIG5vdCBkaWZmZXIgaW4gcHJvZHVjdGlvbi5cbiAqL1xuXG52YXIgaW52YXJpYW50ID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGEsIGIsIGMsIGQsIGUsIGYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50IHJlcXVpcmVzIGFuIGVycm9yIG1lc3NhZ2UgYXJndW1lbnQnKTtcbiAgICB9XG4gIH1cblxuICBpZiAoIWNvbmRpdGlvbikge1xuICAgIHZhciBlcnJvcjtcbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICAnTWluaWZpZWQgZXhjZXB0aW9uIG9jY3VycmVkOyB1c2UgdGhlIG5vbi1taW5pZmllZCBkZXYgZW52aXJvbm1lbnQgJyArXG4gICAgICAgICdmb3IgdGhlIGZ1bGwgZXJyb3IgbWVzc2FnZSBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLidcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBhcmdzID0gW2EsIGIsIGMsIGQsIGUsIGZdO1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIGVycm9yID0gbmV3IEVycm9yKFxuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7IHJldHVybiBhcmdzW2FyZ0luZGV4KytdOyB9KVxuICAgICAgKTtcbiAgICAgIGVycm9yLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgfVxuXG4gICAgZXJyb3IuZnJhbWVzVG9Qb3AgPSAxOyAvLyB3ZSBkb24ndCBjYXJlIGFib3V0IGludmFyaWFudCdzIG93biBmcmFtZVxuICAgIHRocm93IGVycm9yO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGludmFyaWFudDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIi8vIEhpZGUgY29uc29sZTsgb3IgY2FuY2VsIHNvbWUgdXNlciBhY3Rpb25zXG5leHBvcnQgY29uc3QgQ0FOQ0VMID0gJ2NhbmNlbCc7XG5cbi8vIEFkZG9uc1xuZXhwb3J0IGNvbnN0IEFERE9OX0VOQUJMRSA9ICdhZGRvbi5lbmFibGUnO1xuZXhwb3J0IGNvbnN0IEFERE9OX0RJU0FCTEUgPSAnYWRkb24uZGlzYWJsZSc7XG5leHBvcnQgY29uc3QgQURET05fVE9HR0xFX0VOQUJMRUQgPSAnYWRkb24udG9nZ2xlLmVuYWJsZWQnO1xuXG4vLyBDb21tYW5kXG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XID0gJ2NvbW1hbmQuc2hvdyc7XG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XX09QRU4gPSAnY29tbWFuZC5zaG93Lm9wZW4nO1xuZXhwb3J0IGNvbnN0IENPTU1BTkRfU0hPV19UQUJPUEVOID0gJ2NvbW1hbmQuc2hvdy50YWJvcGVuJztcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfV0lOT1BFTiA9ICdjb21tYW5kLnNob3cud2lub3Blbic7XG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XX0JVRkZFUiA9ICdjb21tYW5kLnNob3cuYnVmZmVyJztcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfQUREQk9PS01BUksgPSAnY29tbWFuZC5zaG93LmFkZGJvb2ttYXJrJztcblxuLy8gU2Nyb2xsc1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9WRVJUSUNBTExZID0gJ3Njcm9sbC52ZXJ0aWNhbGx5JztcbmV4cG9ydCBjb25zdCBTQ1JPTExfSE9SSVpPTkFMTFkgPSAnc2Nyb2xsLmhvcml6b25hbGx5JztcbmV4cG9ydCBjb25zdCBTQ1JPTExfUEFHRVMgPSAnc2Nyb2xsLnBhZ2VzJztcbmV4cG9ydCBjb25zdCBTQ1JPTExfVE9QID0gJ3Njcm9sbC50b3AnO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9CT1RUT00gPSAnc2Nyb2xsLmJvdHRvbSc7XG5leHBvcnQgY29uc3QgU0NST0xMX0hPTUUgPSAnc2Nyb2xsLmhvbWUnO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9FTkQgPSAnc2Nyb2xsLmVuZCc7XG5cbi8vIEZvbGxvd3NcbmV4cG9ydCBjb25zdCBGT0xMT1dfU1RBUlQgPSAnZm9sbG93LnN0YXJ0JztcblxuLy8gTmF2aWdhdGlvbnNcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9ISVNUT1JZX1BSRVYgPSAnbmF2aWdhdGUuaGlzdG9yeS5wcmV2JztcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9ISVNUT1JZX05FWFQgPSAnbmF2aWdhdGUuaGlzdG9yeS5uZXh0JztcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9MSU5LX1BSRVYgPSAnbmF2aWdhdGUubGluay5wcmV2JztcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9MSU5LX05FWFQgPSAnbmF2aWdhdGUubGluay5uZXh0JztcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9QQVJFTlQgPSAnbmF2aWdhdGUucGFyZW50JztcbmV4cG9ydCBjb25zdCBOQVZJR0FURV9ST09UID0gJ25hdmlnYXRlLnJvb3QnO1xuXG4vLyBGb2N1c1xuZXhwb3J0IGNvbnN0IEZPQ1VTX0lOUFVUID0gJ2ZvY3VzLmlucHV0JztcblxuLy8gUGFnZVxuZXhwb3J0IGNvbnN0IFBBR0VfU09VUkNFID0gJ3BhZ2Uuc291cmNlJztcbmV4cG9ydCBjb25zdCBQQUdFX0hPTUUgPSAncGFnZS5ob21lJztcblxuLy8gVGFic1xuZXhwb3J0IGNvbnN0IFRBQl9DTE9TRSA9ICd0YWJzLmNsb3NlJztcbmV4cG9ydCBjb25zdCBUQUJfQ0xPU0VfRk9SQ0UgPSAndGFicy5jbG9zZS5mb3JjZSc7XG5leHBvcnQgY29uc3QgVEFCX0NMT1NFX1JJR0hUID0gJ3RhYnMuY2xvc2UucmlnaHQnO1xuZXhwb3J0IGNvbnN0IFRBQl9SRU9QRU4gPSAndGFicy5yZW9wZW4nO1xuZXhwb3J0IGNvbnN0IFRBQl9QUkVWID0gJ3RhYnMucHJldic7XG5leHBvcnQgY29uc3QgVEFCX05FWFQgPSAndGFicy5uZXh0JztcbmV4cG9ydCBjb25zdCBUQUJfRklSU1QgPSAndGFicy5maXJzdCc7XG5leHBvcnQgY29uc3QgVEFCX0xBU1QgPSAndGFicy5sYXN0JztcbmV4cG9ydCBjb25zdCBUQUJfUFJFVl9TRUwgPSAndGFicy5wcmV2c2VsJztcbmV4cG9ydCBjb25zdCBUQUJfUkVMT0FEID0gJ3RhYnMucmVsb2FkJztcbmV4cG9ydCBjb25zdCBUQUJfUElOID0gJ3RhYnMucGluJztcbmV4cG9ydCBjb25zdCBUQUJfVU5QSU4gPSAndGFicy51bnBpbic7XG5leHBvcnQgY29uc3QgVEFCX1RPR0dMRV9QSU5ORUQgPSAndGFicy5waW4udG9nZ2xlJztcbmV4cG9ydCBjb25zdCBUQUJfRFVQTElDQVRFID0gJ3RhYnMuZHVwbGljYXRlJztcblxuLy8gWm9vbXNcbmV4cG9ydCBjb25zdCBaT09NX0lOID0gJ3pvb20uaW4nO1xuZXhwb3J0IGNvbnN0IFpPT01fT1VUID0gJ3pvb20ub3V0JztcbmV4cG9ydCBjb25zdCBaT09NX05FVVRSQUwgPSAnem9vbS5uZXV0cmFsJztcblxuLy8gVXJsIHlhbmsvcGFzdGVcbmV4cG9ydCBjb25zdCBVUkxTX1lBTksgPSAndXJscy55YW5rJztcbmV4cG9ydCBjb25zdCBVUkxTX1BBU1RFID0gJ3VybHMucGFzdGUnO1xuXG4vLyBGaW5kXG5leHBvcnQgY29uc3QgRklORF9TVEFSVCA9ICdmaW5kLnN0YXJ0JztcbmV4cG9ydCBjb25zdCBGSU5EX05FWFQgPSAnZmluZC5uZXh0JztcbmV4cG9ydCBjb25zdCBGSU5EX1BSRVYgPSAnZmluZC5wcmV2JztcblxuLy8gTWFya1xuZXhwb3J0IGNvbnN0IE1BUktfU0VUX1BSRUZJWCA9ICdtYXJrLnNldC5wcmVmaXgnO1xuZXhwb3J0IGNvbnN0IE1BUktfSlVNUF9QUkVGSVggPSAnbWFyay5qdW1wLnByZWZpeCc7XG5cbi8vIFJlcGVhdFxuZXhwb3J0IGNvbnN0IFJFUEVBVF9MQVNUID0gJ3JlcGVhdC5sYXN0JztcblxuLy8gSW50ZXJuYWxcbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9PUEVOX1VSTCA9ICdpbnRlcm5hbC5vcGVuLnVybCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FuY2VsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENBTkNFTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvbkVuYWJsZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9FTkFCTEU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25EaXNhYmxlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0RJU0FCTEU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25Ub2dnbGVFbmFibGVkT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX1RPR0dMRV9FTkFCTEVEO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPVztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kU2hvd09wZW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XX09QRU47XG4gIGFsdGVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93VGFib3Blbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfVEFCT1BFTjtcbiAgYWx0ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dXaW5vcGVuT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPV19XSU5PUEVOO1xuICBhbHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kU2hvd0J1ZmZlck9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfQlVGRkVSO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93QWRkYm9va21hcmtPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XX0FEREJPT0tNQVJLO1xuICBhbHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxWZXJ0aWNhbGx5T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9WRVJUSUNBTExZO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbEhvcml6b25hbGx5T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9IT1JJWk9OQUxMWTtcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxQYWdlc09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTQ1JPTExfUEFHRVM7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsVG9wT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9UT1A7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsQm90dG9tT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9CT1RUT007XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsSG9tZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTQ1JPTExfSE9NRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxFbmRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX0VORDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dTdGFydE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfU1RBUlQ7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUhpc3RvcnlQcmV2T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUhpc3RvcnlOZXh0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtQcmV2T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtOZXh0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZVBhcmVudE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBOQVZJR0FURV9QQVJFTlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVSb290T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX1JPT1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9jdXNJbnB1dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGT0NVU19JTlBVVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYWdlU291cmNlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBR0VfU09VUkNFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VIb21lT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBR0VfSE9NRTtcbiAgbmV3VGFiOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNsb3NlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9DTE9TRTtcbiAgc2VsZWN0PzogJ2xlZnQnIHwgJ3JpZ2h0Jztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJDbG9zZUZvcmNlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9DTE9TRV9GT1JDRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJDbG9zZVJpZ2h0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9DTE9TRV9SSUdIVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJSZW9wZW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1JFT1BFTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJQcmV2T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYk5leHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiRmlyc3RPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0ZJUlNUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkxhc3RPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0xBU1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUHJldlNlbE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfUFJFVl9TRUw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUmVsb2FkT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9SRUxPQUQ7XG4gIGNhY2hlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlBpbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfUElOO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlVucGluT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9VTlBJTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJUb2dnbGVQaW5uZWRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1RPR0dMRV9QSU5ORUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiRHVwbGljYXRlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9EVVBMSUNBVEU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9vbUluT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fSU47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgWm9vbU91dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBaT09NX09VVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tTmV1dHJhbE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBaT09NX05FVVRSQUw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsc1lhbmtPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVVJMU19ZQU5LO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybHNQYXN0ZU9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBVUkxTX1BBU1RFO1xuICBuZXdUYWI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFN0YXJ0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfU1RBUlQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZE5leHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRQcmV2T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrU2V0UHJlZml4T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfU0VUX1BSRUZJWDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNYXJrSnVtcFByZWZpeE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBNQVJLX0pVTVBfUFJFRklYO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlcGVhdExhc3RPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgUkVQRUFUX0xBU1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJuYWxPcGVuVXJsIHtcbiAgdHlwZTogdHlwZW9mIElOVEVSTkFMX09QRU5fVVJMO1xuICB1cmw6IHN0cmluZztcbiAgbmV3VGFiPzogYm9vbGVhbjtcbiAgbmV3V2luZG93PzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIE9wZXJhdGlvbiA9XG4gIENhbmNlbE9wZXJhdGlvbiB8XG4gIEFkZG9uRW5hYmxlT3BlcmF0aW9uIHxcbiAgQWRkb25EaXNhYmxlT3BlcmF0aW9uIHxcbiAgQWRkb25Ub2dnbGVFbmFibGVkT3BlcmF0aW9uIHxcbiAgQ29tbWFuZFNob3dPcGVyYXRpb24gfFxuICBDb21tYW5kU2hvd09wZW5PcGVyYXRpb24gfFxuICBDb21tYW5kU2hvd1RhYm9wZW5PcGVyYXRpb24gfFxuICBDb21tYW5kU2hvd1dpbm9wZW5PcGVyYXRpb24gfFxuICBDb21tYW5kU2hvd0J1ZmZlck9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93QWRkYm9va21hcmtPcGVyYXRpb24gfFxuICBTY3JvbGxWZXJ0aWNhbGx5T3BlcmF0aW9uIHxcbiAgU2Nyb2xsSG9yaXpvbmFsbHlPcGVyYXRpb24gfFxuICBTY3JvbGxQYWdlc09wZXJhdGlvbiB8XG4gIFNjcm9sbFRvcE9wZXJhdGlvbiB8XG4gIFNjcm9sbEJvdHRvbU9wZXJhdGlvbiB8XG4gIFNjcm9sbEhvbWVPcGVyYXRpb24gfFxuICBTY3JvbGxFbmRPcGVyYXRpb24gfFxuICBGb2xsb3dTdGFydE9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlSGlzdG9yeVByZXZPcGVyYXRpb24gfFxuICBOYXZpZ2F0ZUhpc3RvcnlOZXh0T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVMaW5rUHJldk9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlTGlua05leHRPcGVyYXRpb24gfFxuICBOYXZpZ2F0ZVBhcmVudE9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlUm9vdE9wZXJhdGlvbiB8XG4gIEZvY3VzSW5wdXRPcGVyYXRpb24gfFxuICBQYWdlU291cmNlT3BlcmF0aW9uIHxcbiAgUGFnZUhvbWVPcGVyYXRpb24gfFxuICBUYWJDbG9zZU9wZXJhdGlvbiB8XG4gIFRhYkNsb3NlRm9yY2VPcGVyYXRpb24gfFxuICBUYWJDbG9zZVJpZ2h0T3BlcmF0aW9uIHxcbiAgVGFiUmVvcGVuT3BlcmF0aW9uIHxcbiAgVGFiUHJldk9wZXJhdGlvbiB8XG4gIFRhYk5leHRPcGVyYXRpb24gfFxuICBUYWJGaXJzdE9wZXJhdGlvbiB8XG4gIFRhYkxhc3RPcGVyYXRpb24gfFxuICBUYWJQcmV2U2VsT3BlcmF0aW9uIHxcbiAgVGFiUmVsb2FkT3BlcmF0aW9uIHxcbiAgVGFiUGluT3BlcmF0aW9uIHxcbiAgVGFiVW5waW5PcGVyYXRpb24gfFxuICBUYWJUb2dnbGVQaW5uZWRPcGVyYXRpb24gfFxuICBUYWJEdXBsaWNhdGVPcGVyYXRpb24gfFxuICBab29tSW5PcGVyYXRpb24gfFxuICBab29tT3V0T3BlcmF0aW9uIHxcbiAgWm9vbU5ldXRyYWxPcGVyYXRpb24gfFxuICBVcmxzWWFua09wZXJhdGlvbiB8XG4gIFVybHNQYXN0ZU9wZXJhdGlvbiB8XG4gIEZpbmRTdGFydE9wZXJhdGlvbiB8XG4gIEZpbmROZXh0T3BlcmF0aW9uIHxcbiAgRmluZFByZXZPcGVyYXRpb24gfFxuICBNYXJrU2V0UHJlZml4T3BlcmF0aW9uIHxcbiAgTWFya0p1bXBQcmVmaXhPcGVyYXRpb24gfFxuICBSZXBlYXRMYXN0T3BlcmF0aW9uIHxcbiAgSW50ZXJuYWxPcGVuVXJsO1xuXG5jb25zdCBhc3NlcnRPcHRpb25hbEJvb2xlYW4gPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSkgJiZcbiAgICAgIHR5cGVvZiBvYmpbbmFtZV0gIT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICBgTm90IGEgYm9vbGVhbiBwYXJhbWV0ZXI6ICcke25hbWV9ICgke3R5cGVvZiBvYmpbbmFtZV19KSdgLFxuICAgICk7XG4gIH1cbn07XG5cbmNvbnN0IGFzc2VydE9wdGlvbmFsU3RyaW5nID0gKG9iajogYW55LCBuYW1lOiBzdHJpbmcsIHZhbHVlcz86IHN0cmluZ1tdKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKSkge1xuICAgIGNvbnN0IHZhbHVlID0gb2JqW25hbWVdO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFxuICAgICAgICBgTm90IGEgc3RyaW5nIHBhcmFtZXRlcjogJyR7bmFtZX0nICgke3R5cGVvZiB2YWx1ZX0pYCxcbiAgICAgICk7XG4gICAgfVxuICAgIGlmICh2YWx1ZXMgJiYgdmFsdWVzLmxlbmd0aCAmJiB2YWx1ZXMuaW5kZXhPZih2YWx1ZSkgPT09IC0xKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCBwYXJhbWV0ZXIgZm9yICcke25hbWV9JzogJyR7dmFsdWV9J2ApO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgYXNzZXJ0UmVxdWlyZWROdW1iZXIgPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpIHx8XG4gICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gJ251bWJlcicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIG51bWJlciBwYXJhbWV0ZXI6ICcke25hbWV9YCk7XG4gIH1cbn07XG5cbmNvbnN0IGFzc2VydFJlcXVpcmVkU3RyaW5nID0gKG9iajogYW55LCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKSB8fFxuICAgIHR5cGVvZiBvYmpbbmFtZV0gIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyBzdHJpbmcgcGFyYW1ldGVyOiAnJHtuYW1lfWApO1xuICB9XG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eSwgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZXhwb3J0IGNvbnN0IHZhbHVlT2YgPSAobzogYW55KTogT3BlcmF0aW9uID0+IHtcbiAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgJ3R5cGUnKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgJ3R5cGUnIGZpZWxkYCk7XG4gIH1cbiAgc3dpdGNoIChvLnR5cGUpIHtcbiAgY2FzZSBDT01NQU5EX1NIT1dfT1BFTjpcbiAgY2FzZSBDT01NQU5EX1NIT1dfVEFCT1BFTjpcbiAgY2FzZSBDT01NQU5EX1NIT1dfV0lOT1BFTjpcbiAgY2FzZSBDT01NQU5EX1NIT1dfQUREQk9PS01BUks6XG4gICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sICdhbHRlcicpO1xuICAgIHJldHVybiB7IHR5cGU6IG8udHlwZSwgYWx0ZXI6IEJvb2xlYW4oby5hbHRlcikgfTtcbiAgY2FzZSBTQ1JPTExfVkVSVElDQUxMWTpcbiAgY2FzZSBTQ1JPTExfSE9SSVpPTkFMTFk6XG4gIGNhc2UgU0NST0xMX1BBR0VTOlxuICAgIGFzc2VydFJlcXVpcmVkTnVtYmVyKG8sICdjb3VudCcpO1xuICAgIHJldHVybiB7IHR5cGU6IG8udHlwZSwgY291bnQ6IE51bWJlcihvLmNvdW50KSB9O1xuICBjYXNlIEZPTExPV19TVEFSVDpcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ25ld1RhYicpO1xuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnYmFja2dyb3VuZCcpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBGT0xMT1dfU1RBUlQsXG4gICAgICBuZXdUYWI6IEJvb2xlYW4odHlwZW9mIG8ubmV3VGFiID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgICAgYmFja2dyb3VuZDogQm9vbGVhbih0eXBlb2Ygby5iYWNrZ3JvdW5kID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvLmJhY2tncm91bmQpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9O1xuICBjYXNlIFBBR0VfSE9NRTpcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ25ld1RhYicpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBQQUdFX0hPTUUsXG4gICAgICBuZXdUYWI6IEJvb2xlYW4odHlwZW9mIG8ubmV3VGFiID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgIH07XG4gIGNhc2UgVEFCX0NMT1NFOlxuICAgIGFzc2VydE9wdGlvbmFsU3RyaW5nKG8sICdzZWxlY3QnLCBbJ2xlZnQnLCAncmlnaHQnXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRBQl9DTE9TRSxcbiAgICAgIHNlbGVjdDogKHR5cGVvZiBvLnNlbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyAncmlnaHQnIDogby5zZWxlY3QpLFxuICAgIH07XG4gIGNhc2UgVEFCX1JFTE9BRDpcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ2NhY2hlJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFRBQl9SRUxPQUQsXG4gICAgICBjYWNoZTogQm9vbGVhbih0eXBlb2Ygby5jYWNoZSA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG8uY2FjaGUpLFxuICAgIH07XG4gIGNhc2UgVVJMU19QQVNURTpcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ25ld1RhYicpO1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBVUkxTX1BBU1RFLFxuICAgICAgbmV3VGFiOiBCb29sZWFuKHR5cGVvZiBvLm5ld1RhYiA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG8ubmV3VGFiKSxcbiAgICB9O1xuICBjYXNlIElOVEVSTkFMX09QRU5fVVJMOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sICduZXdXaW5kb3cnKTtcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ2JhY2tncm91bmQnKTtcbiAgICBhc3NlcnRSZXF1aXJlZFN0cmluZyhvLCAndXJsJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IElOVEVSTkFMX09QRU5fVVJMLFxuICAgICAgdXJsOiBvLnVybCxcbiAgICAgIG5ld1RhYjogQm9vbGVhbih0eXBlb2Ygby5uZXdUYWIgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1RhYiksXG4gICAgICBuZXdXaW5kb3c6IEJvb2xlYW4odHlwZW9mIG8ubmV3V2luZG93ID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5uZXdXaW5kb3cpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAgIGJhY2tncm91bmQ6IEJvb2xlYW4odHlwZW9mIG8uYmFja2dyb3VuZCA9PT0gJ3VuZGVmaW5lZCcgPyB0cnVlIDogby5iYWNrZ3JvdW5kKSwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBtYXgtbGVuXG4gICAgfTtcbiAgY2FzZSBDQU5DRUw6XG4gIGNhc2UgQURET05fRU5BQkxFOlxuICBjYXNlIEFERE9OX0RJU0FCTEU6XG4gIGNhc2UgQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gIGNhc2UgQ09NTUFORF9TSE9XOlxuICBjYXNlIENPTU1BTkRfU0hPV19CVUZGRVI6XG4gIGNhc2UgU0NST0xMX1RPUDpcbiAgY2FzZSBTQ1JPTExfQk9UVE9NOlxuICBjYXNlIFNDUk9MTF9IT01FOlxuICBjYXNlIFNDUk9MTF9FTkQ6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfTkVYVDpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX1BSRVY6XG4gIGNhc2UgTkFWSUdBVEVfTElOS19ORVhUOlxuICBjYXNlIE5BVklHQVRFX1BBUkVOVDpcbiAgY2FzZSBOQVZJR0FURV9ST09UOlxuICBjYXNlIEZPQ1VTX0lOUFVUOlxuICBjYXNlIFBBR0VfU09VUkNFOlxuICBjYXNlIFRBQl9DTE9TRV9GT1JDRTpcbiAgY2FzZSBUQUJfQ0xPU0VfUklHSFQ6XG4gIGNhc2UgVEFCX1JFT1BFTjpcbiAgY2FzZSBUQUJfUFJFVjpcbiAgY2FzZSBUQUJfTkVYVDpcbiAgY2FzZSBUQUJfRklSU1Q6XG4gIGNhc2UgVEFCX0xBU1Q6XG4gIGNhc2UgVEFCX1BSRVZfU0VMOlxuICBjYXNlIFRBQl9QSU46XG4gIGNhc2UgVEFCX1VOUElOOlxuICBjYXNlIFRBQl9UT0dHTEVfUElOTkVEOlxuICBjYXNlIFRBQl9EVVBMSUNBVEU6XG4gIGNhc2UgWk9PTV9JTjpcbiAgY2FzZSBaT09NX09VVDpcbiAgY2FzZSBaT09NX05FVVRSQUw6XG4gIGNhc2UgVVJMU19ZQU5LOlxuICBjYXNlIEZJTkRfU1RBUlQ6XG4gIGNhc2UgRklORF9ORVhUOlxuICBjYXNlIEZJTkRfUFJFVjpcbiAgY2FzZSBNQVJLX1NFVF9QUkVGSVg6XG4gIGNhc2UgTUFSS19KVU1QX1BSRUZJWDpcbiAgY2FzZSBSRVBFQVRfTEFTVDpcbiAgICByZXR1cm4geyB0eXBlOiBvLnR5cGUgfTtcbiAgfVxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmtub3duIG9wZXJhdGlvbiB0eXBlOiAnICsgby50eXBlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc05SZXBlYXRhYmxlID0gKHR5cGU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSBTQ1JPTExfVkVSVElDQUxMWTpcbiAgY2FzZSBTQ1JPTExfSE9SSVpPTkFMTFk6XG4gIGNhc2UgU0NST0xMX1BBR0VTOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfUFJFVjpcbiAgY2FzZSBOQVZJR0FURV9ISVNUT1JZX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfUEFSRU5UOlxuICBjYXNlIFRBQl9DTE9TRTpcbiAgY2FzZSBUQUJfQ0xPU0VfRk9SQ0U6XG4gIGNhc2UgVEFCX0NMT1NFX1JJR0hUOlxuICBjYXNlIFRBQl9SRU9QRU46XG4gIGNhc2UgVEFCX1BSRVY6XG4gIGNhc2UgVEFCX05FWFQ6XG4gIGNhc2UgVEFCX0RVUExJQ0FURTpcbiAgY2FzZSBaT09NX0lOOlxuICBjYXNlIFpPT01fT1VUOlxuICBjYXNlIFVSTFNfUEFTVEU6XG4gIGNhc2UgRklORF9ORVhUOlxuICBjYXNlIEZJTkRfUFJFVjpcbiAgY2FzZSBSRVBFQVRfTEFTVDpcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiXG5leHBvcnQgdHlwZSBQcm9wZXJ0aWVzSlNPTiA9IHtcbiAgaGludGNoYXJzPzogc3RyaW5nO1xuICBzbW9vdGhzY3JvbGw/OiBib29sZWFuO1xuICBjb21wbGV0ZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5VHlwZXMgPSB7XG4gIGhpbnRjaGFyczogc3RyaW5nO1xuICBzbW9vdGhzY3JvbGw6IHN0cmluZztcbiAgY29tcGxldGU6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcGVydHlOYW1lID0gJ2hpbnRjaGFycycgfCAnc21vb3Roc2Nyb2xsJyB8ICdjb21wbGV0ZSc7XG5cbnR5cGUgUHJvcGVydHlEZWYgPSB7XG4gIG5hbWU6IFByb3BlcnR5TmFtZTtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICB0eXBlOiAnc3RyaW5nJyB8ICdudW1iZXInIHwgJ2Jvb2xlYW4nO1xufTtcblxuY29uc3QgZGVmczogUHJvcGVydHlEZWZbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdoaW50Y2hhcnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnaGludCBjaGFyYWN0ZXJzIG9uIGZvbGxvdyBtb2RlJyxcbiAgICBkZWZhdWx0VmFsdWU6ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gIH0sIHtcbiAgICBuYW1lOiAnc21vb3Roc2Nyb2xsJyxcbiAgICBkZXNjcmlwdGlvbjogJ3Ntb290aCBzY3JvbGwnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICB9LCB7XG4gICAgbmFtZTogJ2NvbXBsZXRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ3doaWNoIGFyZSBjb21wbGV0ZWQgYXQgdGhlIG9wZW4gcGFnZScsXG4gICAgZGVmYXVsdFZhbHVlOiAnc2JoJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgfVxuXTtcblxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgaGludGNoYXJzOiAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLFxuICBzbW9vdGhzY3JvbGw6IGZhbHNlLFxuICBjb21wbGV0ZTogJ3NiaCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0aWVzIHtcbiAgcHVibGljIGhpbnRjaGFyczogc3RyaW5nO1xuXG4gIHB1YmxpYyBzbW9vdGhzY3JvbGw6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbXBsZXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGhpbnRjaGFycyxcbiAgICBzbW9vdGhzY3JvbGwsXG4gICAgY29tcGxldGUsXG4gIH06IHtcbiAgICBoaW50Y2hhcnM/OiBzdHJpbmc7XG4gICAgc21vb3Roc2Nyb2xsPzogYm9vbGVhbjtcbiAgICBjb21wbGV0ZT86IHN0cmluZztcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5oaW50Y2hhcnMgPSBoaW50Y2hhcnMgfHwgZGVmYXVsdFZhbHVlcy5oaW50Y2hhcnM7XG4gICAgdGhpcy5zbW9vdGhzY3JvbGwgPSBzbW9vdGhzY3JvbGwgfHwgZGVmYXVsdFZhbHVlcy5zbW9vdGhzY3JvbGw7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlIHx8IGRlZmF1bHRWYWx1ZXMuY29tcGxldGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbjogUHJvcGVydGllc0pTT04pOiBQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnRpZXMoanNvbik7XG4gIH1cblxuICBzdGF0aWMgdHlwZXMoKTogUHJvcGVydHlUeXBlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpbnRjaGFyczogJ3N0cmluZycsXG4gICAgICBzbW9vdGhzY3JvbGw6ICdib29sZWFuJyxcbiAgICAgIGNvbXBsZXRlOiAnc3RyaW5nJyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGRlZihuYW1lOiBzdHJpbmcpOiBQcm9wZXJ0eURlZiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGRlZnMuZmluZChwID0+IHAubmFtZSA9PT0gbmFtZSk7XG4gIH1cblxuICBzdGF0aWMgZGVmcygpOiBQcm9wZXJ0eURlZltdIHtcbiAgICByZXR1cm4gZGVmcztcbiAgfVxuXG4gIHRvSlNPTigpOiBQcm9wZXJ0aWVzSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpbnRjaGFyczogdGhpcy5oaW50Y2hhcnMsXG4gICAgICBzbW9vdGhzY3JvbGw6IHRoaXMuc21vb3Roc2Nyb2xsLFxuICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGUsXG4gICAgfTtcbiAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYWRkTW9kdWxlc1RvRG9tKGlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIGlkID0gb3B0aW9ucy5iYXNlID8gaWQgKyBvcHRpb25zLmJhc2UgOiBpZDtcblxuICBpZiAoIXN0eWxlc0luRG9tW2lkXSkge1xuICAgIHN0eWxlc0luRG9tW2lkXSA9IFtdO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuICAgIHZhciBzdHlsZUluRG9tQnlJZCA9IHN0eWxlc0luRG9tW2lkXTtcblxuICAgIGlmIChzdHlsZUluRG9tQnlJZFtpXSkge1xuICAgICAgc3R5bGVJbkRvbUJ5SWRbaV0udXBkYXRlcihwYXJ0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVJbkRvbUJ5SWQucHVzaCh7XG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKHBhcnQsIG9wdGlvbnMpXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBqID0gbGlzdC5sZW5ndGg7IGogPCBzdHlsZXNJbkRvbVtpZF0ubGVuZ3RoOyBqKyspIHtcbiAgICBzdHlsZXNJbkRvbVtpZF1bal0udXBkYXRlcigpO1xuICB9XG5cbiAgc3R5bGVzSW5Eb21baWRdLmxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuXG4gIGlmIChzdHlsZXNJbkRvbVtpZF0ubGVuZ3RoID09PSAwKSB7XG4gICAgZGVsZXRlIHN0eWxlc0luRG9tW2lkXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlkLCBsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGFkZE1vZHVsZXNUb0RvbShpZCwgbGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIGFkZE1vZHVsZXNUb0RvbShpZCwgbmV3TGlzdCB8fCBbXSwgb3B0aW9ucyk7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbaV0pO1xuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XG5cbmV4cG9ydCB0eXBlIEJsYWNrbGlzdEl0ZW1KU09OID0gc3RyaW5nIHwge1xuICB1cmw6IHN0cmluZyxcbiAga2V5czogc3RyaW5nW10sXG59O1xuXG5leHBvcnQgdHlwZSBCbGFja2xpc3RKU09OID0gQmxhY2tsaXN0SXRlbUpTT05bXTtcblxuY29uc3QgcmVnZXhGcm9tV2lsZGNhcmQgPSAocGF0dGVybjogc3RyaW5nKTogUmVnRXhwID0+IHtcbiAgY29uc3QgcmVnZXhTdHIgPSAnXicgKyBwYXR0ZXJuLnJlcGxhY2UoL1xcKi9nLCAnLionKSArICckJztcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhTdHIpO1xufTtcblxuZXhwb3J0IGNsYXNzIEJsYWNrbGlzdEl0ZW0ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGF0dGVybjogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVnZXg6IFJlZ0V4cDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFydGlhbDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkga2V5czogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSBrZXlFbnRpdGllczogS2V5W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybjogc3RyaW5nLFxuICAgIHBhcnRpYWw6IGJvb2xlYW4sXG4gICAga2V5czogc3RyaW5nW11cbiAgKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICB0aGlzLnJlZ2V4ID0gcmVnZXhGcm9tV2lsZGNhcmQocGF0dGVybik7XG4gICAgdGhpcy5wYXJ0aWFsID0gcGFydGlhbDtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMua2V5RW50aXRpZXMgPSB0aGlzLmtleXMubWFwKEtleS5mcm9tTWFwS2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBCbGFja2xpc3RJdGVtSlNPTik6IEJsYWNrbGlzdEl0ZW0ge1xuICAgIHJldHVybiB0eXBlb2YganNvbiA9PT0gJ3N0cmluZydcbiAgICAgID8gbmV3IEJsYWNrbGlzdEl0ZW0oanNvbiwgZmFsc2UsIFtdKVxuICAgICAgOiBuZXcgQmxhY2tsaXN0SXRlbShqc29uLnVybCwgdHJ1ZSwganNvbi5rZXlzKTtcbiAgfVxuXG4gIHRvSlNPTigpOiBCbGFja2xpc3RJdGVtSlNPTiB7XG4gICAgaWYgKCF0aGlzLnBhcnRpYWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gICAgfVxuICAgIHJldHVybiB7IHVybDogdGhpcy5wYXR0ZXJuLCBrZXlzOiB0aGlzLmtleXMgfTtcbiAgfVxuXG4gIG1hdGNoZXModXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuLmluY2x1ZGVzKCcvJylcbiAgICAgID8gdGhpcy5yZWdleC50ZXN0KHVybC5ob3N0ICsgdXJsLnBhdGhuYW1lKVxuICAgICAgOiB0aGlzLnJlZ2V4LnRlc3QodXJsLmhvc3QpO1xuICB9XG5cbiAgaW5jbHVkZUtleSh1cmw6IFVSTCwga2V5OiBLZXkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMubWF0Y2hlcyh1cmwpIHx8ICF0aGlzLnBhcnRpYWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMua2V5RW50aXRpZXMuc29tZShrID0+IGsuZXF1YWxzKGtleSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYWNrbGlzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBpdGVtczogQmxhY2tsaXN0SXRlbVtdLFxuICApIHtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBCbGFja2xpc3RKU09OKTogQmxhY2tsaXN0IHtcbiAgICBjb25zdCBpdGVtcyA9IGpzb24ubWFwKG8gPT4gQmxhY2tsaXN0SXRlbS5mcm9tSlNPTihvKSk7XG4gICAgcmV0dXJuIG5ldyBCbGFja2xpc3QoaXRlbXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IEJsYWNrbGlzdEpTT04ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0udG9KU09OKCkpO1xuICB9XG5cbiAgaW5jbHVkZXNFbnRpcmVCbGFja2xpc3QodXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5zb21lKGl0ZW0gPT4gIWl0ZW0ucGFydGlhbCAmJiBpdGVtLm1hdGNoZXModXJsKSk7XG4gIH1cblxuICBpbmNsdWRlS2V5KHVybDogVVJMLCBrZXk6IEtleSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLmluY2x1ZGVLZXkodXJsLCBrZXkpKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuL29wZXJhdGlvbnMnO1xuaW1wb3J0IFNldHRpbmdzLCB7IERlZmF1bHRTZXR0aW5nSlNPTlRleHQgfSBmcm9tICcuL3NldHRpbmdzL1NldHRpbmdzJztcbmltcG9ydCBLZXltYXBzIGZyb20gJy4vc2V0dGluZ3MvS2V5bWFwcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2V0dGluZ3MvU2VhcmNoJztcbmltcG9ydCBQcm9wZXJ0aWVzIGZyb20gJy4vc2V0dGluZ3MvUHJvcGVydGllcyc7XG5pbXBvcnQgQmxhY2tsaXN0IGZyb20gJy4vc2V0dGluZ3MvQmxhY2tsaXN0JztcblxuZXhwb3J0IGNsYXNzIEZvcm1LZXltYXBzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRhOiB7W29wOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoZGF0YToge1tvcDogc3RyaW5nXTogc3RyaW5nfSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICB0b0tleW1hcHMoKTogS2V5bWFwcyB7XG4gICAgY29uc3Qga2V5bWFwczogeyBba2V5OiBzdHJpbmddOiBvcGVyYXRpb25zLk9wZXJhdGlvbiB9ID0ge307XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpIHtcbiAgICAgIGNvbnN0IFt0eXBlLCBhcmdTdHJdID0gbmFtZS5zcGxpdCgnPycpO1xuICAgICAgbGV0IGFyZ3MgPSB7fTtcbiAgICAgIGlmIChhcmdTdHIpIHtcbiAgICAgICAgYXJncyA9IEpTT04ucGFyc2UoYXJnU3RyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICAgIGtleW1hcHNba2V5XSA9IG9wZXJhdGlvbnMudmFsdWVPZih7IHR5cGUsIC4uLmFyZ3MgfSk7XG4gICAgfVxuICAgIHJldHVybiBLZXltYXBzLmZyb21KU09OKGtleW1hcHMpO1xuICB9XG5cbiAgdG9KU09OKCk6IHtbb3A6IHN0cmluZ106IHN0cmluZ30ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBidWlsZFdpdGhPdmVycmlkZShvcDogc3RyaW5nLCBrZXlzOiBzdHJpbmcpOiBGb3JtS2V5bWFwcyB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIFtvcF06IGtleXMsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEZvcm1LZXltYXBzKG5ld0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKG86IFJldHVyblR5cGU8Rm9ybUtleW1hcHNbJ3RvSlNPTiddPik6IEZvcm1LZXltYXBzIHtcbiAgICBjb25zdCBkYXRhOiB7W29wOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZm9yIChjb25zdCBvcCBvZiBPYmplY3Qua2V5cyhvKSkge1xuICAgICAgZGF0YVtvcF0gPSBvW29wXSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRm9ybUtleW1hcHMoZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUtleW1hcHMoa2V5bWFwczogS2V5bWFwcyk6IEZvcm1LZXltYXBzIHtcbiAgICBjb25zdCBqc29uID0ga2V5bWFwcy50b0pTT04oKTtcbiAgICBjb25zdCBkYXRhOiB7W29wOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoanNvbikpIHtcbiAgICAgIGNvbnN0IG9wID0ganNvbltrZXldO1xuICAgICAgY29uc3QgYXJncyA9IHsgLi4ub3AgfTtcbiAgICAgIGRlbGV0ZSBhcmdzLnR5cGU7XG5cbiAgICAgIGxldCBuYW1lID0gb3AudHlwZTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcmdzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5hbWUgKz0gJz8nICsgSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgICB9XG4gICAgICBkYXRhW25hbWVdID0ga2V5O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZvcm1LZXltYXBzKGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtU2VhcmNoIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbmdpbmVzOiBzdHJpbmdbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRFbmdpbmU6IHN0cmluZywgZW5naW5lczogc3RyaW5nW11bXSkge1xuICAgIHRoaXMuZGVmYXVsdCA9IGRlZmF1bHRFbmdpbmU7XG4gICAgdGhpcy5lbmdpbmVzID0gZW5naW5lcztcbiAgfVxuXG4gIHRvU2VhcmNoU2V0dGluZ3MoKTogU2VhcmNoIHtcbiAgICBjb25zdCBlbmdpbmVzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbmdpbmVzKSB7XG4gICAgICBlbmdpbmVzW2VudHJ5WzBdXSA9IGVudHJ5WzFdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFNlYXJjaCh0aGlzLmRlZmF1bHQsIGVuZ2luZXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmc7XG4gICAgZW5naW5lczogc3RyaW5nW11bXTtcbiAgICB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdDogdGhpcy5kZWZhdWx0LFxuICAgICAgZW5naW5lczogdGhpcy5lbmdpbmVzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04obzogUmV0dXJuVHlwZTxGb3JtU2VhcmNoWyd0b0pTT04nXT4pOiBGb3JtU2VhcmNoIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAnZGVmYXVsdCcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcImRlZmF1bHRcIiBmaWVsZCBub3Qgc2V0YCk7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sICdlbmdpbmVzJykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFwiZW5naW5lc1wiIGZpZWxkIG5vdCBzZXRgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGb3JtU2VhcmNoKG8uZGVmYXVsdCwgby5lbmdpbmVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VhcmNoKHNlYXJjaDogU2VhcmNoKTogRm9ybVNlYXJjaCB7XG4gICAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5lbnRyaWVzKHNlYXJjaC5lbmdpbmVzKS5yZWR1Y2UoXG4gICAgICAobzogc3RyaW5nW11bXSwgW25hbWUsIHVybF0pID0+IHtcbiAgICAgICAgcmV0dXJuIG8uY29uY2F0KFtbbmFtZSwgdXJsXV0pO1xuICAgICAgfSwgW10pO1xuICAgIHJldHVybiBuZXcgRm9ybVNlYXJjaChzZWFyY2guZGVmYXVsdEVuZ2luZSwgZW5naW5lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpTT05UZXh0U2V0dGluZ3Mge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGpzb246IHN0cmluZyxcbiAgKSB7XG4gIH1cblxuICB0b1NldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4gU2V0dGluZ3MuZnJvbUpTT04oSlNPTi5wYXJzZSh0aGlzLmpzb24pKTtcbiAgfVxuXG4gIHRvSlNPTlRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0KG86IHN0cmluZyk6IEpTT05UZXh0U2V0dGluZ3Mge1xuICAgIHJldHVybiBuZXcgSlNPTlRleHRTZXR0aW5ncyhvKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2V0dGluZ3MoZGF0YTogU2V0dGluZ3MpOiBKU09OVGV4dFNldHRpbmdzIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAga2V5bWFwczogZGF0YS5rZXltYXBzLnRvSlNPTigpLFxuICAgICAgc2VhcmNoOiBkYXRhLnNlYXJjaCxcbiAgICAgIHByb3BlcnRpZXM6IGRhdGEucHJvcGVydGllcyxcbiAgICAgIGJsYWNrbGlzdDogZGF0YS5ibGFja2xpc3QsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEpTT05UZXh0U2V0dGluZ3MoSlNPTi5zdHJpbmdpZnkoanNvbiwgdW5kZWZpbmVkLCAyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1TZXR0aW5ncyB7XG4gIHB1YmxpYyByZWFkb25seSBrZXltYXBzOiBGb3JtS2V5bWFwcztcblxuICBwdWJsaWMgcmVhZG9ubHkgc2VhcmNoOiBGb3JtU2VhcmNoO1xuXG4gIHB1YmxpYyByZWFkb25seSBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuXG4gIHB1YmxpYyByZWFkb25seSBibGFja2xpc3Q6IEJsYWNrbGlzdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBrZXltYXBzOiBGb3JtS2V5bWFwcyxcbiAgICBzZWFyY2g6IEZvcm1TZWFyY2gsXG4gICAgcHJvcGVydGllczogUHJvcGVydGllcyxcbiAgICBibGFja2xpc3Q6IEJsYWNrbGlzdCxcbiAgKSB7XG4gICAgdGhpcy5rZXltYXBzID0ga2V5bWFwcztcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuYmxhY2tsaXN0ID0gYmxhY2tsaXN0O1xuICB9XG5cbiAgYnVpbGRXaXRoS2V5bWFwcyhrZXltYXBzOiBGb3JtS2V5bWFwcyk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICBrZXltYXBzLFxuICAgICAgdGhpcy5zZWFyY2gsXG4gICAgICB0aGlzLnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmJsYWNrbGlzdCxcbiAgICApO1xuICB9XG5cbiAgYnVpbGRXaXRoU2VhcmNoKHNlYXJjaDogRm9ybVNlYXJjaCk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICB0aGlzLmtleW1hcHMsXG4gICAgICBzZWFyY2gsXG4gICAgICB0aGlzLnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmJsYWNrbGlzdCxcbiAgICApO1xuICB9XG5cbiAgYnVpbGRXaXRoUHJvcGVydGllcyhwcm9wczogUHJvcGVydGllcyk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICB0aGlzLmtleW1hcHMsXG4gICAgICB0aGlzLnNlYXJjaCxcbiAgICAgIHByb3BzLFxuICAgICAgdGhpcy5ibGFja2xpc3QsXG4gICAgKTtcbiAgfVxuXG4gIGJ1aWxkV2l0aEJsYWNrbGlzdChibGFja2xpc3Q6IEJsYWNrbGlzdCk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICB0aGlzLmtleW1hcHMsXG4gICAgICB0aGlzLnNlYXJjaCxcbiAgICAgIHRoaXMucHJvcGVydGllcyxcbiAgICAgIGJsYWNrbGlzdCxcbiAgICApO1xuICB9XG5cbiAgdG9TZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIFNldHRpbmdzLmZyb21KU09OKHtcbiAgICAgIGtleW1hcHM6IHRoaXMua2V5bWFwcy50b0tleW1hcHMoKS50b0pTT04oKSxcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gudG9TZWFyY2hTZXR0aW5ncygpLnRvSlNPTigpLFxuICAgICAgcHJvcGVydGllczogdGhpcy5wcm9wZXJ0aWVzLnRvSlNPTigpLFxuICAgICAgYmxhY2tsaXN0OiB0aGlzLmJsYWNrbGlzdC50b0pTT04oKSxcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpOiB7XG4gICAga2V5bWFwczogUmV0dXJuVHlwZTxGb3JtS2V5bWFwc1sndG9KU09OJ10+O1xuICAgIHNlYXJjaDogUmV0dXJuVHlwZTxGb3JtU2VhcmNoWyd0b0pTT04nXT47XG4gICAgcHJvcGVydGllczogUmV0dXJuVHlwZTxQcm9wZXJ0aWVzWyd0b0pTT04nXT47XG4gICAgYmxhY2tsaXN0OiBSZXR1cm5UeXBlPEJsYWNrbGlzdFsndG9KU09OJ10+O1xuICAgIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXltYXBzOiB0aGlzLmtleW1hcHMudG9KU09OKCksXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLnRvSlNPTigpLFxuICAgICAgcHJvcGVydGllczogdGhpcy5wcm9wZXJ0aWVzLnRvSlNPTigpLFxuICAgICAgYmxhY2tsaXN0OiB0aGlzLmJsYWNrbGlzdC50b0pTT04oKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKG86IFJldHVyblR5cGU8Rm9ybVNldHRpbmdzWyd0b0pTT04nXT4pOiBGb3JtU2V0dGluZ3Mge1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBbJ2tleW1hcHMnLCAnc2VhcmNoJywgJ3Byb3BlcnRpZXMnLCAnYmxhY2tsaXN0J10pIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke25hbWV9XCIgZmllbGQgbm90IHNldGApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEZvcm1TZXR0aW5ncyhcbiAgICAgIEZvcm1LZXltYXBzLmZyb21KU09OKG8ua2V5bWFwcyksXG4gICAgICBGb3JtU2VhcmNoLmZyb21KU09OKG8uc2VhcmNoKSxcbiAgICAgIFByb3BlcnRpZXMuZnJvbUpTT04oby5wcm9wZXJ0aWVzKSxcbiAgICAgIEJsYWNrbGlzdC5mcm9tSlNPTihvLmJsYWNrbGlzdCksXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2V0dGluZ3MoZGF0YTogU2V0dGluZ3MpOiBGb3JtU2V0dGluZ3Mge1xuICAgIHJldHVybiBuZXcgRm9ybVNldHRpbmdzKFxuICAgICAgRm9ybUtleW1hcHMuZnJvbUtleW1hcHMoZGF0YS5rZXltYXBzKSxcbiAgICAgIEZvcm1TZWFyY2guZnJvbVNlYXJjaChkYXRhLnNlYXJjaCksXG4gICAgICBkYXRhLnByb3BlcnRpZXMsXG4gICAgICBkYXRhLmJsYWNrbGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gU2V0dGluZ1NvdXJjZSB7XG4gIEpTT04gPSAnanNvbicsXG4gIEZvcm0gPSAnZm9ybScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdEYXRhIHtcbiAgcHJpdmF0ZSBzb3VyY2U6IFNldHRpbmdTb3VyY2U7XG5cbiAgcHJpdmF0ZSBqc29uPzogSlNPTlRleHRTZXR0aW5ncztcblxuICBwcml2YXRlIGZvcm0/OiBGb3JtU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHNvdXJjZSwganNvbiwgZm9ybVxuICB9OiB7XG4gICAgc291cmNlOiBTZXR0aW5nU291cmNlLFxuICAgIGpzb24/OiBKU09OVGV4dFNldHRpbmdzLFxuICAgIGZvcm0/OiBGb3JtU2V0dGluZ3MsXG4gIH0pIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gIH1cblxuICBnZXRTb3VyY2UoKTogU2V0dGluZ1NvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICB9XG5cbiAgZ2V0SlNPTigpOiBKU09OVGV4dFNldHRpbmdzIHtcbiAgICBpZiAoIXRoaXMuanNvbikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignanNvbiBzZXR0aW5ncyBub3Qgc2V0Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRGb3JtKCk6IEZvcm1TZXR0aW5ncyB7XG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Zvcm0gc2V0dGluZ3Mgbm90IHNldCcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtO1xuICB9XG5cbiAgdG9KU09OKCk6IGFueSB7XG4gICAgc3dpdGNoICh0aGlzLnNvdXJjZSkge1xuICAgIGNhc2UgU2V0dGluZ1NvdXJjZS5KU09OOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAganNvbjogKHRoaXMuanNvbiBhcyBKU09OVGV4dFNldHRpbmdzKS50b0pTT05UZXh0KCksXG4gICAgICB9O1xuICAgIGNhc2UgU2V0dGluZ1NvdXJjZS5Gb3JtOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgZm9ybTogKHRoaXMuZm9ybSBhcyBGb3JtU2V0dGluZ3MpLnRvSlNPTigpLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIHNldHRpbmdzIHNvdXJjZTogJHt0aGlzLnNvdXJjZX1gKTtcbiAgfVxuXG4gIHRvU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHN3aXRjaCAodGhpcy5zb3VyY2UpIHtcbiAgICBjYXNlIFNldHRpbmdTb3VyY2UuSlNPTjpcbiAgICAgIHJldHVybiB0aGlzLmdldEpTT04oKS50b1NldHRpbmdzKCk7XG4gICAgY2FzZSBTZXR0aW5nU291cmNlLkZvcm06XG4gICAgICByZXR1cm4gdGhpcy5nZXRGb3JtKCkudG9TZXR0aW5ncygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gc2V0dGluZ3Mgc291cmNlOiAke3RoaXMuc291cmNlfWApO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKG86IHtcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBqc29uPzogc3RyaW5nO1xuICAgIGZvcm0/OiBSZXR1cm5UeXBlPEZvcm1TZXR0aW5nc1sndG9KU09OJ10+O1xuICB9KTogU2V0dGluZ0RhdGEge1xuICAgIHN3aXRjaCAoby5zb3VyY2UpIHtcbiAgICBjYXNlIFNldHRpbmdTb3VyY2UuSlNPTjpcbiAgICAgIHJldHVybiBuZXcgU2V0dGluZ0RhdGEoe1xuICAgICAgICBzb3VyY2U6IG8uc291cmNlLFxuICAgICAgICBqc29uOiBKU09OVGV4dFNldHRpbmdzLmZyb21UZXh0KFxuICAgICAgICAgIG8uanNvbiBhcyBSZXR1cm5UeXBlPEpTT05UZXh0U2V0dGluZ3NbJ3RvSlNPTlRleHQnXT4pLFxuICAgICAgfSk7XG4gICAgY2FzZSBTZXR0aW5nU291cmNlLkZvcm06XG4gICAgICByZXR1cm4gbmV3IFNldHRpbmdEYXRhKHtcbiAgICAgICAgc291cmNlOiBvLnNvdXJjZSxcbiAgICAgICAgZm9ybTogRm9ybVNldHRpbmdzLmZyb21KU09OKFxuICAgICAgICAgIG8uZm9ybSBhcyBSZXR1cm5UeXBlPEZvcm1TZXR0aW5nc1sndG9KU09OJ10+KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gc2V0dGluZ3Mgc291cmNlOiAke28uc291cmNlfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2V0dGluZ0RhdGE6IFNldHRpbmdEYXRhID0gU2V0dGluZ0RhdGEuZnJvbUpTT04oe1xuICBzb3VyY2U6ICdqc29uJyxcbiAganNvbjogRGVmYXVsdFNldHRpbmdKU09OVGV4dCxcbn0pO1xuIiwiaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuLi9vcGVyYXRpb25zJztcblxudHlwZSBPcGVyYXRpb25Kc29uID0ge1xuICB0eXBlOiBzdHJpbmdcbn0gfCB7XG4gIHR5cGU6IHN0cmluZztcbiAgW3Byb3A6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG59O1xuZXhwb3J0IHR5cGUgS2V5bWFwc0pTT04gPSB7IFtrZXk6IHN0cmluZ106IE9wZXJhdGlvbkpzb24gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5bWFwcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogeyBba2V5OiBzdHJpbmddOiBvcGVyYXRpb25zLk9wZXJhdGlvbiB9LFxuICApIHtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBLZXltYXBzSlNPTik6IEtleW1hcHMge1xuICAgIGNvbnN0IGVudHJpZXM6IHsgW2tleTogc3RyaW5nXTogb3BlcmF0aW9ucy5PcGVyYXRpb24gfSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGpzb24pKSB7XG4gICAgICBlbnRyaWVzW2tleV0gPSBvcGVyYXRpb25zLnZhbHVlT2YoanNvbltrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBLZXltYXBzKGVudHJpZXMpO1xuICB9XG5cbiAgY29tYmluZShvdGhlcjogS2V5bWFwcyk6IEtleW1hcHMge1xuICAgIHJldHVybiBuZXcgS2V5bWFwcyh7XG4gICAgICAuLi50aGlzLmRhdGEsXG4gICAgICAuLi5vdGhlci5kYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCk6IEtleW1hcHNKU09OIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZW50cmllcygpOiBbc3RyaW5nLCBvcGVyYXRpb25zLk9wZXJhdGlvbl1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCBBanYgZnJvbSAnYWp2JztcblxuaW1wb3J0IEtleW1hcHMsIHsgS2V5bWFwc0pTT04gfSBmcm9tICcuL0tleW1hcHMnO1xuaW1wb3J0IFNlYXJjaCwgeyBTZWFyY2hKU09OIH0gZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IFByb3BlcnRpZXMsIHsgUHJvcGVydGllc0pTT04gfSBmcm9tICcuL1Byb3BlcnRpZXMnO1xuaW1wb3J0IEJsYWNrbGlzdCwgeyBCbGFja2xpc3RKU09OIH0gZnJvbSAnLi9CbGFja2xpc3QnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuXG5leHBvcnQgdHlwZSBTZXR0aW5nc0pTT04gPSB7XG4gIGtleW1hcHM/OiBLZXltYXBzSlNPTixcbiAgc2VhcmNoPzogU2VhcmNoSlNPTixcbiAgcHJvcGVydGllcz86IFByb3BlcnRpZXNKU09OLFxuICBibGFja2xpc3Q/OiBCbGFja2xpc3RKU09OLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3Mge1xuICBwdWJsaWMga2V5bWFwczogS2V5bWFwcztcblxuICBwdWJsaWMgc2VhcmNoOiBTZWFyY2g7XG5cbiAgcHVibGljIHByb3BlcnRpZXM6IFByb3BlcnRpZXM7XG5cbiAgcHVibGljIGJsYWNrbGlzdDogQmxhY2tsaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBrZXltYXBzLFxuICAgIHNlYXJjaCxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIGJsYWNrbGlzdCxcbiAgfToge1xuICAgIGtleW1hcHM6IEtleW1hcHM7XG4gICAgc2VhcmNoOiBTZWFyY2g7XG4gICAgcHJvcGVydGllczogUHJvcGVydGllcztcbiAgICBibGFja2xpc3Q6IEJsYWNrbGlzdDtcbiAgfSkge1xuICAgIHRoaXMua2V5bWFwcyA9IGtleW1hcHM7XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmJsYWNrbGlzdCA9IGJsYWNrbGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiB1bmtub3duKTogU2V0dGluZ3Mge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGUoanNvbik7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICh2YWxpZGF0ZSBhcyBhbnkpLmVycm9ycyEhXG4gICAgICAgIC5tYXAoKGVycjogQWp2LkVycm9yT2JqZWN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAnJHtlcnIuZGF0YVBhdGh9JyAke2Vyci5tZXNzYWdlfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCc7ICcpO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvYmogPSBqc29uIGFzIFNldHRpbmdzSlNPTjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHsgLi4uRGVmYXVsdFNldHRpbmcgfTtcbiAgICBpZiAob2JqLmtleW1hcHMpIHtcbiAgICAgIHNldHRpbmdzLmtleW1hcHMgPSBLZXltYXBzLmZyb21KU09OKG9iai5rZXltYXBzKTtcbiAgICB9XG4gICAgaWYgKG9iai5zZWFyY2gpIHtcbiAgICAgIHNldHRpbmdzLnNlYXJjaCA9IFNlYXJjaC5mcm9tSlNPTihvYmouc2VhcmNoKTtcbiAgICB9XG4gICAgaWYgKG9iai5wcm9wZXJ0aWVzKSB7XG4gICAgICBzZXR0aW5ncy5wcm9wZXJ0aWVzID0gUHJvcGVydGllcy5mcm9tSlNPTihvYmoucHJvcGVydGllcyk7XG4gICAgfVxuICAgIGlmIChvYmouYmxhY2tsaXN0KSB7XG4gICAgICBzZXR0aW5ncy5ibGFja2xpc3QgPSBCbGFja2xpc3QuZnJvbUpTT04ob2JqLmJsYWNrbGlzdCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU2V0dGluZ3Moc2V0dGluZ3MpO1xuICB9XG5cbiAgdG9KU09OKCk6IFNldHRpbmdzSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleW1hcHM6IHRoaXMua2V5bWFwcy50b0pTT04oKSxcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gudG9KU09OKCksXG4gICAgICBwcm9wZXJ0aWVzOiB0aGlzLnByb3BlcnRpZXMudG9KU09OKCksXG4gICAgICBibGFja2xpc3Q6IHRoaXMuYmxhY2tsaXN0LnRvSlNPTigpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXR0aW5nSlNPTlRleHQgPSBge1xuICBcImtleW1hcHNcIjoge1xuICAgIFwiMFwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5ob21lXCIgfSxcbiAgICBcIjpcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3dcIiB9LFxuICAgIFwib1wiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5vcGVuXCIsIFwiYWx0ZXJcIjogZmFsc2UgfSxcbiAgICBcIk9cIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cub3BlblwiLCBcImFsdGVyXCI6IHRydWUgfSxcbiAgICBcInRcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cudGFib3BlblwiLCBcImFsdGVyXCI6IGZhbHNlIH0sXG4gICAgXCJUXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93LnRhYm9wZW5cIiwgXCJhbHRlclwiOiB0cnVlIH0sXG4gICAgXCJ3XCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93Lndpbm9wZW5cIiwgXCJhbHRlclwiOiBmYWxzZSB9LFxuICAgIFwiV1wiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy53aW5vcGVuXCIsIFwiYWx0ZXJcIjogdHJ1ZSB9LFxuICAgIFwiYlwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5idWZmZXJcIiB9LFxuICAgIFwiYVwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5hZGRib29rbWFya1wiLCBcImFsdGVyXCI6IHRydWUgfSxcbiAgICBcImtcIjogeyBcInR5cGVcIjogXCJzY3JvbGwudmVydGljYWxseVwiLCBcImNvdW50XCI6IC0xIH0sXG4gICAgXCJqXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnZlcnRpY2FsbHlcIiwgXCJjb3VudFwiOiAxIH0sXG4gICAgXCJoXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmhvcml6b25hbGx5XCIsIFwiY291bnRcIjogLTEgfSxcbiAgICBcImxcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuaG9yaXpvbmFsbHlcIiwgXCJjb3VudFwiOiAxIH0sXG4gICAgXCI8Qy1VPlwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5wYWdlc1wiLCBcImNvdW50XCI6IC0wLjUgfSxcbiAgICBcIjxDLUQ+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogMC41IH0sXG4gICAgXCI8Qy1CPlwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5wYWdlc1wiLCBcImNvdW50XCI6IC0xIH0sXG4gICAgXCI8Qy1GPlwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5wYWdlc1wiLCBcImNvdW50XCI6IDEgfSxcbiAgICBcImdnXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnRvcFwiIH0sXG4gICAgXCJHXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmJvdHRvbVwiIH0sXG4gICAgXCIkXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmVuZFwiIH0sXG4gICAgXCJkXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5jbG9zZVwiIH0sXG4gICAgXCJEXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5jbG9zZVwiLCBcInNlbGVjdFwiOiBcImxlZnRcIiB9LFxuICAgIFwieCRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlLnJpZ2h0XCIgfSxcbiAgICBcIiFkXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5jbG9zZS5mb3JjZVwiIH0sXG4gICAgXCJ1XCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZW9wZW5cIiB9LFxuICAgIFwiS1wiOiB7IFwidHlwZVwiOiBcInRhYnMucHJldlwiIH0sXG4gICAgXCJKXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5uZXh0XCIgfSxcbiAgICBcImdUXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5wcmV2XCIgfSxcbiAgICBcImd0XCI6IHsgXCJ0eXBlXCI6IFwidGFicy5uZXh0XCIgfSxcbiAgICBcImcwXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5maXJzdFwiIH0sXG4gICAgXCJnJFwiOiB7IFwidHlwZVwiOiBcInRhYnMubGFzdFwiIH0sXG4gICAgXCI8Qy02PlwiOiB7IFwidHlwZVwiOiBcInRhYnMucHJldnNlbFwiIH0sXG4gICAgXCJyXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZWxvYWRcIiwgXCJjYWNoZVwiOiBmYWxzZSB9LFxuICAgIFwiUlwiOiB7IFwidHlwZVwiOiBcInRhYnMucmVsb2FkXCIsIFwiY2FjaGVcIjogdHJ1ZSB9LFxuICAgIFwienBcIjogeyBcInR5cGVcIjogXCJ0YWJzLnBpbi50b2dnbGVcIiB9LFxuICAgIFwiemRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmR1cGxpY2F0ZVwiIH0sXG4gICAgXCJ6aVwiOiB7IFwidHlwZVwiOiBcInpvb20uaW5cIiB9LFxuICAgIFwiem9cIjogeyBcInR5cGVcIjogXCJ6b29tLm91dFwiIH0sXG4gICAgXCJ6elwiOiB7IFwidHlwZVwiOiBcInpvb20ubmV1dHJhbFwiIH0sXG4gICAgXCJmXCI6IHsgXCJ0eXBlXCI6IFwiZm9sbG93LnN0YXJ0XCIsIFwibmV3VGFiXCI6IGZhbHNlIH0sXG4gICAgXCJGXCI6IHsgXCJ0eXBlXCI6IFwiZm9sbG93LnN0YXJ0XCIsIFwibmV3VGFiXCI6IHRydWUsIFwiYmFja2dyb3VuZFwiOiBmYWxzZSB9LFxuICAgIFwibVwiOiB7IFwidHlwZVwiOiBcIm1hcmsuc2V0LnByZWZpeFwiIH0sXG4gICAgXCInXCI6IHsgXCJ0eXBlXCI6IFwibWFyay5qdW1wLnByZWZpeFwiIH0sXG4gICAgXCJIXCI6IHsgXCJ0eXBlXCI6IFwibmF2aWdhdGUuaGlzdG9yeS5wcmV2XCIgfSxcbiAgICBcIkxcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5oaXN0b3J5Lm5leHRcIiB9LFxuICAgIFwiW1tcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5saW5rLnByZXZcIiB9LFxuICAgIFwiXV1cIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5saW5rLm5leHRcIiB9LFxuICAgIFwiZ3VcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5wYXJlbnRcIiB9LFxuICAgIFwiZ1VcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5yb290XCIgfSxcbiAgICBcImdpXCI6IHsgXCJ0eXBlXCI6IFwiZm9jdXMuaW5wdXRcIiB9LFxuICAgIFwiZ2ZcIjogeyBcInR5cGVcIjogXCJwYWdlLnNvdXJjZVwiIH0sXG4gICAgXCJnaFwiOiB7IFwidHlwZVwiOiBcInBhZ2UuaG9tZVwiIH0sXG4gICAgXCJnSFwiOiB7IFwidHlwZVwiOiBcInBhZ2UuaG9tZVwiLCBcIm5ld1RhYlwiOiB0cnVlIH0sXG4gICAgXCJ5XCI6IHsgXCJ0eXBlXCI6IFwidXJscy55YW5rXCIgfSxcbiAgICBcInBcIjogeyBcInR5cGVcIjogXCJ1cmxzLnBhc3RlXCIsIFwibmV3VGFiXCI6IGZhbHNlIH0sXG4gICAgXCJQXCI6IHsgXCJ0eXBlXCI6IFwidXJscy5wYXN0ZVwiLCBcIm5ld1RhYlwiOiB0cnVlIH0sXG4gICAgXCIvXCI6IHsgXCJ0eXBlXCI6IFwiZmluZC5zdGFydFwiIH0sXG4gICAgXCJuXCI6IHsgXCJ0eXBlXCI6IFwiZmluZC5uZXh0XCIgfSxcbiAgICBcIk5cIjogeyBcInR5cGVcIjogXCJmaW5kLnByZXZcIiB9LFxuICAgIFwiLlwiOiB7IFwidHlwZVwiOiBcInJlcGVhdC5sYXN0XCIgfSxcbiAgICBcIjxTLUVzYz5cIjogeyBcInR5cGVcIjogXCJhZGRvbi50b2dnbGUuZW5hYmxlZFwiIH1cbiAgfSxcbiAgXCJzZWFyY2hcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcImdvb2dsZVwiLFxuICAgIFwiZW5naW5lc1wiOiB7XG4gICAgICBcImdvb2dsZVwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT17fVwiLFxuICAgICAgXCJ5YWhvb1wiOiBcImh0dHBzOi8vc2VhcmNoLnlhaG9vLmNvbS9zZWFyY2g/cD17fVwiLFxuICAgICAgXCJiaW5nXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9e31cIixcbiAgICAgIFwiZHVja2R1Y2tnb1wiOiBcImh0dHBzOi8vZHVja2R1Y2tnby5jb20vP3E9e31cIixcbiAgICAgIFwidHdpdHRlclwiOiBcImh0dHBzOi8vdHdpdHRlci5jb20vc2VhcmNoP3E9e31cIixcbiAgICAgIFwid2lraXBlZGlhXCI6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvaW5kZXgucGhwP3NlYXJjaD17fVwiXG4gICAgfVxuICB9LFxuICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwiaGludGNoYXJzXCI6IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixcbiAgICBcInNtb290aHNjcm9sbFwiOiBmYWxzZSxcbiAgICBcImNvbXBsZXRlXCI6IFwic2JoXCJcbiAgfSxcbiAgXCJibGFja2xpc3RcIjogW1xuICBdXG59YDtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXR0aW5nOiBTZXR0aW5ncyA9XG4gIFNldHRpbmdzLmZyb21KU09OKEpTT04ucGFyc2UoRGVmYXVsdFNldHRpbmdKU09OVGV4dCkpO1xuIiwiY29uc3QgZGlnaXRzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleSB7XG4gIHB1YmxpYyByZWFkb25seSBrZXk6IHN0cmluZztcblxuICBwdWJsaWMgcmVhZG9ubHkgc2hpZnQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlYWRvbmx5IGN0cmw6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlYWRvbmx5IGFsdDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkgbWV0YTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAga2V5LFxuICAgIHNoaWZ0ID0gZmFsc2UsXG4gICAgY3RybCA9IGZhbHNlLFxuICAgIGFsdCA9IGZhbHNlLFxuICAgIG1ldGEgPSBmYWxzZSxcbiAgfToge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHNoaWZ0PzogYm9vbGVhbjtcbiAgICBjdHJsPzogYm9vbGVhbjtcbiAgICBhbHQ/OiBib29sZWFuO1xuICAgIG1ldGE/OiBib29sZWFuO1xuICB9KSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIHRoaXMuY3RybCA9IGN0cmw7XG4gICAgdGhpcy5hbHQgPSBhbHQ7XG4gICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFwS2V5KHN0cjogc3RyaW5nKTogS2V5IHtcbiAgICBpZiAoc3RyLnN0YXJ0c1dpdGgoJzwnKSAmJiBzdHIuZW5kc1dpdGgoJz4nKSkge1xuICAgICAgY29uc3QgaW5uZXIgPSBzdHIuc2xpY2UoMSwgLTEpO1xuICAgICAgY29uc3Qgc2hpZnQgPSBpbm5lci5pbmNsdWRlcygnUy0nKTtcbiAgICAgIGxldCBiYXNlID0gaW5uZXIuc2xpY2UoaW5uZXIubGFzdEluZGV4T2YoJy0nKSArIDEpO1xuICAgICAgaWYgKHNoaWZ0ICYmIGJhc2UubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9IGVsc2UgaWYgKCFzaGlmdCAmJiBiYXNlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBiYXNlID0gYmFzZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBLZXkoe1xuICAgICAgICBrZXk6IGJhc2UsXG4gICAgICAgIHNoaWZ0OiBzaGlmdCxcbiAgICAgICAgY3RybDogaW5uZXIuaW5jbHVkZXMoJ0MtJyksXG4gICAgICAgIGFsdDogaW5uZXIuaW5jbHVkZXMoJ0EtJyksXG4gICAgICAgIG1ldGE6IGlubmVyLmluY2x1ZGVzKCdNLScpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBLZXkoe1xuICAgICAga2V5OiBzdHIsXG4gICAgICBzaGlmdDogc3RyLnRvTG93ZXJDYXNlKCkgIT09IHN0cixcbiAgICAgIGN0cmw6IGZhbHNlLFxuICAgICAgYWx0OiBmYWxzZSxcbiAgICAgIG1ldGE6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNEaWdpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGlnaXRzLmluY2x1ZGVzKHRoaXMua2V5KTtcbiAgfVxuXG4gIGVxdWFscyhrZXk6IEtleSkge1xuICAgIHJldHVybiB0aGlzLmtleSA9PT0ga2V5LmtleSAmJlxuICAgICAgdGhpcy5jdHJsID09PSBrZXkuY3RybCAmJlxuICAgICAgdGhpcy5tZXRhID09PSBrZXkubWV0YSAmJlxuICAgICAgdGhpcy5hbHQgPT09IGtleS5hbHQgJiZcbiAgICAgIHRoaXMuc2hpZnQgPT09IGtleS5zaGlmdDtcbiAgfVxufVxuIiwidHlwZSBFbnRyaWVzID0geyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEpTT04gPSB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbiAgZW5naW5lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkZWZhdWx0RW5naW5lOiBzdHJpbmcsXG4gICAgcHVibGljIGVuZ2luZXM6IEVudHJpZXMsXG4gICkge1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IFNlYXJjaEpTT04pOiBTZWFyY2gge1xuICAgIGZvciAoY29uc3QgW25hbWUsIHVybF0gb2YgT2JqZWN0LmVudHJpZXMoanNvbi5lbmdpbmVzKSkge1xuICAgICAgaWYgKCEoL15bYS16QS1aMC05XSskLykudGVzdChuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWFyY2ggZW5naW5lXFwncyBuYW1lIG11c3QgYmUgW2EtekEtWjAtOV0rJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKC97fS9nKTtcbiAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIHt9LXBsYWNlaG9sZGVycyBpbiBVUkwgb2YgXCIke25hbWV9XCJgKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE11bHRpcGxlIHt9LXBsYWNlaG9sZGVycyBpbiBVUkwgb2YgXCIke25hbWV9XCJgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhqc29uLmVuZ2luZXMpLmluY2x1ZGVzKGpzb24uZGVmYXVsdCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYERlZmF1bHQgZW5naW5lIFwiJHtqc29uLmRlZmF1bHR9XCIgbm90IGZvdW5kYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTZWFyY2goanNvbi5kZWZhdWx0LCBqc29uLmVuZ2luZXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IFNlYXJjaEpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bHRFbmdpbmUsXG4gICAgICBlbmdpbmVzOiB0aGlzLmVuZ2luZXMsXG4gICAgfTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBjaGVja0RDRSgpIHtcbiAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuICBpZiAoXG4gICAgdHlwZW9mIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFICE9PSAnZnVuY3Rpb24nXG4gICkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIC8vIFRoaXMgYnJhbmNoIGlzIHVucmVhY2hhYmxlIGJlY2F1c2UgdGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZFxuICAgIC8vIGluIHByb2R1Y3Rpb24sIGJ1dCB0aGUgY29uZGl0aW9uIGlzIHRydWUgb25seSBpbiBkZXZlbG9wbWVudC5cbiAgICAvLyBUaGVyZWZvcmUgaWYgdGhlIGJyYW5jaCBpcyBzdGlsbCBoZXJlLCBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2Fzbid0XG4gICAgLy8gcHJvcGVybHkgYXBwbGllZC5cbiAgICAvLyBEb24ndCBjaGFuZ2UgdGhlIG1lc3NhZ2UuIFJlYWN0IERldlRvb2xzIHJlbGllcyBvbiBpdC4gQWxzbyBtYWtlIHN1cmVcbiAgICAvLyB0aGlzIG1lc3NhZ2UgZG9lc24ndCBvY2N1ciBlbHNld2hlcmUgaW4gdGhpcyBmdW5jdGlvbiwgb3IgaXQgd2lsbCBjYXVzZVxuICAgIC8vIGEgZmFsc2UgcG9zaXRpdmUuXG4gICAgdGhyb3cgbmV3IEVycm9yKCdeX14nKTtcbiAgfVxuICB0cnkge1xuICAgIC8vIFZlcmlmeSB0aGF0IHRoZSBjb2RlIGFib3ZlIGhhcyBiZWVuIGRlYWQgY29kZSBlbGltaW5hdGVkIChEQ0UnZCkuXG4gICAgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLmNoZWNrRENFKGNoZWNrRENFKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgLy8gRGV2VG9vbHMgc2hvdWxkbid0IGNyYXNoIFJlYWN0LCBubyBtYXR0ZXIgd2hhdC5cbiAgICAvLyBXZSBzaG91bGQgc3RpbGwgcmVwb3J0IGluIGNhc2Ugd2UgYnJlYWsgdGhpcyBjb2RlLlxuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAvLyBEQ0UgY2hlY2sgc2hvdWxkIGhhcHBlbiBiZWZvcmUgUmVhY3RET00gYnVuZGxlIGV4ZWN1dGVzIHNvIHRoYXRcbiAgLy8gRGV2VG9vbHMgY2FuIHJlcG9ydCBiYWQgbWluaWZpY2F0aW9uIGR1cmluZyBpbmplY3Rpb24uXG4gIGNoZWNrRENFKCk7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtZG9tLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWRvbS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiaW1wb3J0ICQkb2JzZXJ2YWJsZSBmcm9tICdzeW1ib2wtb2JzZXJ2YWJsZSc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHByaXZhdGUgYWN0aW9uIHR5cGVzIHJlc2VydmVkIGJ5IFJlZHV4LlxuICogRm9yIGFueSB1bmtub3duIGFjdGlvbnMsIHlvdSBtdXN0IHJldHVybiB0aGUgY3VycmVudCBzdGF0ZS5cbiAqIElmIHRoZSBjdXJyZW50IHN0YXRlIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLlxuICogRG8gbm90IHJlZmVyZW5jZSB0aGVzZSBhY3Rpb24gdHlwZXMgZGlyZWN0bHkgaW4geW91ciBjb2RlLlxuICovXG52YXIgcmFuZG9tU3RyaW5nID0gZnVuY3Rpb24gcmFuZG9tU3RyaW5nKCkge1xuICByZXR1cm4gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDcpLnNwbGl0KCcnKS5qb2luKCcuJyk7XG59O1xuXG52YXIgQWN0aW9uVHlwZXMgPSB7XG4gIElOSVQ6IFwiQEByZWR1eC9JTklUXCIgKyByYW5kb21TdHJpbmcoKSxcbiAgUkVQTEFDRTogXCJAQHJlZHV4L1JFUExBQ0VcIiArIHJhbmRvbVN0cmluZygpLFxuICBQUk9CRV9VTktOT1dOX0FDVElPTjogZnVuY3Rpb24gUFJPQkVfVU5LTk9XTl9BQ1RJT04oKSB7XG4gICAgcmV0dXJuIFwiQEByZWR1eC9QUk9CRV9VTktOT1dOX0FDVElPTlwiICsgcmFuZG9tU3RyaW5nKCk7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IG9iaiBUaGUgb2JqZWN0IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cbiAqL1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdChvYmopIHtcbiAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuICB2YXIgcHJvdG8gPSBvYmo7XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykgIT09IG51bGwpIHtcbiAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iaikgPT09IHByb3RvO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBSZWR1eCBzdG9yZSB0aGF0IGhvbGRzIHRoZSBzdGF0ZSB0cmVlLlxuICogVGhlIG9ubHkgd2F5IHRvIGNoYW5nZSB0aGUgZGF0YSBpbiB0aGUgc3RvcmUgaXMgdG8gY2FsbCBgZGlzcGF0Y2goKWAgb24gaXQuXG4gKlxuICogVGhlcmUgc2hvdWxkIG9ubHkgYmUgYSBzaW5nbGUgc3RvcmUgaW4geW91ciBhcHAuIFRvIHNwZWNpZnkgaG93IGRpZmZlcmVudFxuICogcGFydHMgb2YgdGhlIHN0YXRlIHRyZWUgcmVzcG9uZCB0byBhY3Rpb25zLCB5b3UgbWF5IGNvbWJpbmUgc2V2ZXJhbCByZWR1Y2Vyc1xuICogaW50byBhIHNpbmdsZSByZWR1Y2VyIGZ1bmN0aW9uIGJ5IHVzaW5nIGBjb21iaW5lUmVkdWNlcnNgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHJlZHVjZXIgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG5leHQgc3RhdGUgdHJlZSwgZ2l2ZW5cbiAqIHRoZSBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBhY3Rpb24gdG8gaGFuZGxlLlxuICpcbiAqIEBwYXJhbSB7YW55fSBbcHJlbG9hZGVkU3RhdGVdIFRoZSBpbml0aWFsIHN0YXRlLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gaHlkcmF0ZSB0aGUgc3RhdGUgZnJvbSB0aGUgc2VydmVyIGluIHVuaXZlcnNhbCBhcHBzLCBvciB0byByZXN0b3JlIGFcbiAqIHByZXZpb3VzbHkgc2VyaWFsaXplZCB1c2VyIHNlc3Npb24uXG4gKiBJZiB5b3UgdXNlIGBjb21iaW5lUmVkdWNlcnNgIHRvIHByb2R1Y2UgdGhlIHJvb3QgcmVkdWNlciBmdW5jdGlvbiwgdGhpcyBtdXN0IGJlXG4gKiBhbiBvYmplY3Qgd2l0aCB0aGUgc2FtZSBzaGFwZSBhcyBgY29tYmluZVJlZHVjZXJzYCBrZXlzLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtlbmhhbmNlcl0gVGhlIHN0b3JlIGVuaGFuY2VyLiBZb3UgbWF5IG9wdGlvbmFsbHkgc3BlY2lmeSBpdFxuICogdG8gZW5oYW5jZSB0aGUgc3RvcmUgd2l0aCB0aGlyZC1wYXJ0eSBjYXBhYmlsaXRpZXMgc3VjaCBhcyBtaWRkbGV3YXJlLFxuICogdGltZSB0cmF2ZWwsIHBlcnNpc3RlbmNlLCBldGMuIFRoZSBvbmx5IHN0b3JlIGVuaGFuY2VyIHRoYXQgc2hpcHMgd2l0aCBSZWR1eFxuICogaXMgYGFwcGx5TWlkZGxld2FyZSgpYC5cbiAqXG4gKiBAcmV0dXJucyB7U3RvcmV9IEEgUmVkdXggc3RvcmUgdGhhdCBsZXRzIHlvdSByZWFkIHRoZSBzdGF0ZSwgZGlzcGF0Y2ggYWN0aW9uc1xuICogYW5kIHN1YnNjcmliZSB0byBjaGFuZ2VzLlxuICovXG5cbmZ1bmN0aW9uIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIHByZWxvYWRlZFN0YXRlLCBlbmhhbmNlcikge1xuICB2YXIgX3JlZjI7XG5cbiAgaWYgKHR5cGVvZiBwcmVsb2FkZWRTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2YgZW5oYW5jZXIgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGVuaGFuY2VyID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBhcmd1bWVudHNbM10gPT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0l0IGxvb2tzIGxpa2UgeW91IGFyZSBwYXNzaW5nIHNldmVyYWwgc3RvcmUgZW5oYW5jZXJzIHRvICcgKyAnY3JlYXRlU3RvcmUoKS4gVGhpcyBpcyBub3Qgc3VwcG9ydGVkLiBJbnN0ZWFkLCBjb21wb3NlIHRoZW0gJyArICd0b2dldGhlciB0byBhIHNpbmdsZSBmdW5jdGlvbi4nKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcHJlbG9hZGVkU3RhdGUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGVuaGFuY2VyID09PSAndW5kZWZpbmVkJykge1xuICAgIGVuaGFuY2VyID0gcHJlbG9hZGVkU3RhdGU7XG4gICAgcHJlbG9hZGVkU3RhdGUgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGVuaGFuY2VyICE9PSAndW5kZWZpbmVkJykge1xuICAgIGlmICh0eXBlb2YgZW5oYW5jZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdGhlIGVuaGFuY2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVuaGFuY2VyKGNyZWF0ZVN0b3JlKShyZWR1Y2VyLCBwcmVsb2FkZWRTdGF0ZSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHJlZHVjZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSByZWR1Y2VyIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gIH1cblxuICB2YXIgY3VycmVudFJlZHVjZXIgPSByZWR1Y2VyO1xuICB2YXIgY3VycmVudFN0YXRlID0gcHJlbG9hZGVkU3RhdGU7XG4gIHZhciBjdXJyZW50TGlzdGVuZXJzID0gW107XG4gIHZhciBuZXh0TGlzdGVuZXJzID0gY3VycmVudExpc3RlbmVycztcbiAgdmFyIGlzRGlzcGF0Y2hpbmcgPSBmYWxzZTtcbiAgLyoqXG4gICAqIFRoaXMgbWFrZXMgYSBzaGFsbG93IGNvcHkgb2YgY3VycmVudExpc3RlbmVycyBzbyB3ZSBjYW4gdXNlXG4gICAqIG5leHRMaXN0ZW5lcnMgYXMgYSB0ZW1wb3JhcnkgbGlzdCB3aGlsZSBkaXNwYXRjaGluZy5cbiAgICpcbiAgICogVGhpcyBwcmV2ZW50cyBhbnkgYnVncyBhcm91bmQgY29uc3VtZXJzIGNhbGxpbmdcbiAgICogc3Vic2NyaWJlL3Vuc3Vic2NyaWJlIGluIHRoZSBtaWRkbGUgb2YgYSBkaXNwYXRjaC5cbiAgICovXG5cbiAgZnVuY3Rpb24gZW5zdXJlQ2FuTXV0YXRlTmV4dExpc3RlbmVycygpIHtcbiAgICBpZiAobmV4dExpc3RlbmVycyA9PT0gY3VycmVudExpc3RlbmVycykge1xuICAgICAgbmV4dExpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMuc2xpY2UoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlYWRzIHRoZSBzdGF0ZSB0cmVlIG1hbmFnZWQgYnkgdGhlIHN0b3JlLlxuICAgKlxuICAgKiBAcmV0dXJucyB7YW55fSBUaGUgY3VycmVudCBzdGF0ZSB0cmVlIG9mIHlvdXIgYXBwbGljYXRpb24uXG4gICAqL1xuXG5cbiAgZnVuY3Rpb24gZ2V0U3RhdGUoKSB7XG4gICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG1heSBub3QgY2FsbCBzdG9yZS5nZXRTdGF0ZSgpIHdoaWxlIHRoZSByZWR1Y2VyIGlzIGV4ZWN1dGluZy4gJyArICdUaGUgcmVkdWNlciBoYXMgYWxyZWFkeSByZWNlaXZlZCB0aGUgc3RhdGUgYXMgYW4gYXJndW1lbnQuICcgKyAnUGFzcyBpdCBkb3duIGZyb20gdGhlIHRvcCByZWR1Y2VyIGluc3RlYWQgb2YgcmVhZGluZyBpdCBmcm9tIHRoZSBzdG9yZS4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3VycmVudFN0YXRlO1xuICB9XG4gIC8qKlxuICAgKiBBZGRzIGEgY2hhbmdlIGxpc3RlbmVyLiBJdCB3aWxsIGJlIGNhbGxlZCBhbnkgdGltZSBhbiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCxcbiAgICogYW5kIHNvbWUgcGFydCBvZiB0aGUgc3RhdGUgdHJlZSBtYXkgcG90ZW50aWFsbHkgaGF2ZSBjaGFuZ2VkLiBZb3UgbWF5IHRoZW5cbiAgICogY2FsbCBgZ2V0U3RhdGUoKWAgdG8gcmVhZCB0aGUgY3VycmVudCBzdGF0ZSB0cmVlIGluc2lkZSB0aGUgY2FsbGJhY2suXG4gICAqXG4gICAqIFlvdSBtYXkgY2FsbCBgZGlzcGF0Y2goKWAgZnJvbSBhIGNoYW5nZSBsaXN0ZW5lciwgd2l0aCB0aGUgZm9sbG93aW5nXG4gICAqIGNhdmVhdHM6XG4gICAqXG4gICAqIDEuIFRoZSBzdWJzY3JpcHRpb25zIGFyZSBzbmFwc2hvdHRlZCBqdXN0IGJlZm9yZSBldmVyeSBgZGlzcGF0Y2goKWAgY2FsbC5cbiAgICogSWYgeW91IHN1YnNjcmliZSBvciB1bnN1YnNjcmliZSB3aGlsZSB0aGUgbGlzdGVuZXJzIGFyZSBiZWluZyBpbnZva2VkLCB0aGlzXG4gICAqIHdpbGwgbm90IGhhdmUgYW55IGVmZmVjdCBvbiB0aGUgYGRpc3BhdGNoKClgIHRoYXQgaXMgY3VycmVudGx5IGluIHByb2dyZXNzLlxuICAgKiBIb3dldmVyLCB0aGUgbmV4dCBgZGlzcGF0Y2goKWAgY2FsbCwgd2hldGhlciBuZXN0ZWQgb3Igbm90LCB3aWxsIHVzZSBhIG1vcmVcbiAgICogcmVjZW50IHNuYXBzaG90IG9mIHRoZSBzdWJzY3JpcHRpb24gbGlzdC5cbiAgICpcbiAgICogMi4gVGhlIGxpc3RlbmVyIHNob3VsZCBub3QgZXhwZWN0IHRvIHNlZSBhbGwgc3RhdGUgY2hhbmdlcywgYXMgdGhlIHN0YXRlXG4gICAqIG1pZ2h0IGhhdmUgYmVlbiB1cGRhdGVkIG11bHRpcGxlIHRpbWVzIGR1cmluZyBhIG5lc3RlZCBgZGlzcGF0Y2goKWAgYmVmb3JlXG4gICAqIHRoZSBsaXN0ZW5lciBpcyBjYWxsZWQuIEl0IGlzLCBob3dldmVyLCBndWFyYW50ZWVkIHRoYXQgYWxsIHN1YnNjcmliZXJzXG4gICAqIHJlZ2lzdGVyZWQgYmVmb3JlIHRoZSBgZGlzcGF0Y2goKWAgc3RhcnRlZCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBsYXRlc3RcbiAgICogc3RhdGUgYnkgdGhlIHRpbWUgaXQgZXhpdHMuXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEEgY2FsbGJhY2sgdG8gYmUgaW52b2tlZCBvbiBldmVyeSBkaXNwYXRjaC5cbiAgICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRvIHJlbW92ZSB0aGlzIGNoYW5nZSBsaXN0ZW5lci5cbiAgICovXG5cblxuICBmdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0V4cGVjdGVkIHRoZSBsaXN0ZW5lciB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cblxuICAgIGlmIChpc0Rpc3BhdGNoaW5nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBtYXkgbm90IGNhbGwgc3RvcmUuc3Vic2NyaWJlKCkgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ0lmIHlvdSB3b3VsZCBsaWtlIHRvIGJlIG5vdGlmaWVkIGFmdGVyIHRoZSBzdG9yZSBoYXMgYmVlbiB1cGRhdGVkLCBzdWJzY3JpYmUgZnJvbSBhICcgKyAnY29tcG9uZW50IGFuZCBpbnZva2Ugc3RvcmUuZ2V0U3RhdGUoKSBpbiB0aGUgY2FsbGJhY2sgdG8gYWNjZXNzIHRoZSBsYXRlc3Qgc3RhdGUuICcgKyAnU2VlIGh0dHBzOi8vcmVkdXguanMub3JnL2FwaS1yZWZlcmVuY2Uvc3RvcmUjc3Vic2NyaWJlKGxpc3RlbmVyKSBmb3IgbW9yZSBkZXRhaWxzLicpO1xuICAgIH1cblxuICAgIHZhciBpc1N1YnNjcmliZWQgPSB0cnVlO1xuICAgIGVuc3VyZUNhbk11dGF0ZU5leHRMaXN0ZW5lcnMoKTtcbiAgICBuZXh0TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bnN1YnNjcmliZSgpIHtcbiAgICAgIGlmICghaXNTdWJzY3JpYmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzcGF0Y2hpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbWF5IG5vdCB1bnN1YnNjcmliZSBmcm9tIGEgc3RvcmUgbGlzdGVuZXIgd2hpbGUgdGhlIHJlZHVjZXIgaXMgZXhlY3V0aW5nLiAnICsgJ1NlZSBodHRwczovL3JlZHV4LmpzLm9yZy9hcGktcmVmZXJlbmNlL3N0b3JlI3N1YnNjcmliZShsaXN0ZW5lcikgZm9yIG1vcmUgZGV0YWlscy4nKTtcbiAgICAgIH1cblxuICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICBlbnN1cmVDYW5NdXRhdGVOZXh0TGlzdGVuZXJzKCk7XG4gICAgICB2YXIgaW5kZXggPSBuZXh0TGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgbmV4dExpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH07XG4gIH1cbiAgLyoqXG4gICAqIERpc3BhdGNoZXMgYW4gYWN0aW9uLiBJdCBpcyB0aGUgb25seSB3YXkgdG8gdHJpZ2dlciBhIHN0YXRlIGNoYW5nZS5cbiAgICpcbiAgICogVGhlIGByZWR1Y2VyYCBmdW5jdGlvbiwgdXNlZCB0byBjcmVhdGUgdGhlIHN0b3JlLCB3aWxsIGJlIGNhbGxlZCB3aXRoIHRoZVxuICAgKiBjdXJyZW50IHN0YXRlIHRyZWUgYW5kIHRoZSBnaXZlbiBgYWN0aW9uYC4gSXRzIHJldHVybiB2YWx1ZSB3aWxsXG4gICAqIGJlIGNvbnNpZGVyZWQgdGhlICoqbmV4dCoqIHN0YXRlIG9mIHRoZSB0cmVlLCBhbmQgdGhlIGNoYW5nZSBsaXN0ZW5lcnNcbiAgICogd2lsbCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb25seSBzdXBwb3J0cyBwbGFpbiBvYmplY3QgYWN0aW9ucy4gSWYgeW91IHdhbnQgdG9cbiAgICogZGlzcGF0Y2ggYSBQcm9taXNlLCBhbiBPYnNlcnZhYmxlLCBhIHRodW5rLCBvciBzb21ldGhpbmcgZWxzZSwgeW91IG5lZWQgdG9cbiAgICogd3JhcCB5b3VyIHN0b3JlIGNyZWF0aW5nIGZ1bmN0aW9uIGludG8gdGhlIGNvcnJlc3BvbmRpbmcgbWlkZGxld2FyZS4gRm9yXG4gICAqIGV4YW1wbGUsIHNlZSB0aGUgZG9jdW1lbnRhdGlvbiBmb3IgdGhlIGByZWR1eC10aHVua2AgcGFja2FnZS4gRXZlbiB0aGVcbiAgICogbWlkZGxld2FyZSB3aWxsIGV2ZW50dWFsbHkgZGlzcGF0Y2ggcGxhaW4gb2JqZWN0IGFjdGlvbnMgdXNpbmcgdGhpcyBtZXRob2QuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhY3Rpb24gQSBwbGFpbiBvYmplY3QgcmVwcmVzZW50aW5nIOKAnHdoYXQgY2hhbmdlZOKAnS4gSXQgaXNcbiAgICogYSBnb29kIGlkZWEgdG8ga2VlcCBhY3Rpb25zIHNlcmlhbGl6YWJsZSBzbyB5b3UgY2FuIHJlY29yZCBhbmQgcmVwbGF5IHVzZXJcbiAgICogc2Vzc2lvbnMsIG9yIHVzZSB0aGUgdGltZSB0cmF2ZWxsaW5nIGByZWR1eC1kZXZ0b29sc2AuIEFuIGFjdGlvbiBtdXN0IGhhdmVcbiAgICogYSBgdHlwZWAgcHJvcGVydHkgd2hpY2ggbWF5IG5vdCBiZSBgdW5kZWZpbmVkYC4gSXQgaXMgYSBnb29kIGlkZWEgdG8gdXNlXG4gICAqIHN0cmluZyBjb25zdGFudHMgZm9yIGFjdGlvbiB0eXBlcy5cbiAgICpcbiAgICogQHJldHVybnMge09iamVjdH0gRm9yIGNvbnZlbmllbmNlLCB0aGUgc2FtZSBhY3Rpb24gb2JqZWN0IHlvdSBkaXNwYXRjaGVkLlxuICAgKlxuICAgKiBOb3RlIHRoYXQsIGlmIHlvdSB1c2UgYSBjdXN0b20gbWlkZGxld2FyZSwgaXQgbWF5IHdyYXAgYGRpc3BhdGNoKClgIHRvXG4gICAqIHJldHVybiBzb21ldGhpbmcgZWxzZSAoZm9yIGV4YW1wbGUsIGEgUHJvbWlzZSB5b3UgY2FuIGF3YWl0KS5cbiAgICovXG5cblxuICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcbiAgICBpZiAoIWlzUGxhaW5PYmplY3QoYWN0aW9uKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBY3Rpb25zIG11c3QgYmUgcGxhaW4gb2JqZWN0cy4gJyArICdVc2UgY3VzdG9tIG1pZGRsZXdhcmUgZm9yIGFzeW5jIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24udHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQWN0aW9ucyBtYXkgbm90IGhhdmUgYW4gdW5kZWZpbmVkIFwidHlwZVwiIHByb3BlcnR5LiAnICsgJ0hhdmUgeW91IG1pc3NwZWxsZWQgYSBjb25zdGFudD8nKTtcbiAgICB9XG5cbiAgICBpZiAoaXNEaXNwYXRjaGluZykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWR1Y2VycyBtYXkgbm90IGRpc3BhdGNoIGFjdGlvbnMuJyk7XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGlzRGlzcGF0Y2hpbmcgPSB0cnVlO1xuICAgICAgY3VycmVudFN0YXRlID0gY3VycmVudFJlZHVjZXIoY3VycmVudFN0YXRlLCBhY3Rpb24pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpc0Rpc3BhdGNoaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnRMaXN0ZW5lcnMgPSBuZXh0TGlzdGVuZXJzO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcbiAgICAgIGxpc3RlbmVyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfVxuICAvKipcbiAgICogUmVwbGFjZXMgdGhlIHJlZHVjZXIgY3VycmVudGx5IHVzZWQgYnkgdGhlIHN0b3JlIHRvIGNhbGN1bGF0ZSB0aGUgc3RhdGUuXG4gICAqXG4gICAqIFlvdSBtaWdodCBuZWVkIHRoaXMgaWYgeW91ciBhcHAgaW1wbGVtZW50cyBjb2RlIHNwbGl0dGluZyBhbmQgeW91IHdhbnQgdG9cbiAgICogbG9hZCBzb21lIG9mIHRoZSByZWR1Y2VycyBkeW5hbWljYWxseS4gWW91IG1pZ2h0IGFsc28gbmVlZCB0aGlzIGlmIHlvdVxuICAgKiBpbXBsZW1lbnQgYSBob3QgcmVsb2FkaW5nIG1lY2hhbmlzbSBmb3IgUmVkdXguXG4gICAqXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IG5leHRSZWR1Y2VyIFRoZSByZWR1Y2VyIGZvciB0aGUgc3RvcmUgdG8gdXNlIGluc3RlYWQuXG4gICAqIEByZXR1cm5zIHt2b2lkfVxuICAgKi9cblxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWR1Y2VyKG5leHRSZWR1Y2VyKSB7XG4gICAgaWYgKHR5cGVvZiBuZXh0UmVkdWNlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCB0aGUgbmV4dFJlZHVjZXIgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBjdXJyZW50UmVkdWNlciA9IG5leHRSZWR1Y2VyOyAvLyBUaGlzIGFjdGlvbiBoYXMgYSBzaW1pbGlhciBlZmZlY3QgdG8gQWN0aW9uVHlwZXMuSU5JVC5cbiAgICAvLyBBbnkgcmVkdWNlcnMgdGhhdCBleGlzdGVkIGluIGJvdGggdGhlIG5ldyBhbmQgb2xkIHJvb3RSZWR1Y2VyXG4gICAgLy8gd2lsbCByZWNlaXZlIHRoZSBwcmV2aW91cyBzdGF0ZS4gVGhpcyBlZmZlY3RpdmVseSBwb3B1bGF0ZXNcbiAgICAvLyB0aGUgbmV3IHN0YXRlIHRyZWUgd2l0aCBhbnkgcmVsZXZhbnQgZGF0YSBmcm9tIHRoZSBvbGQgb25lLlxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogQWN0aW9uVHlwZXMuUkVQTEFDRVxuICAgIH0pO1xuICB9XG4gIC8qKlxuICAgKiBJbnRlcm9wZXJhYmlsaXR5IHBvaW50IGZvciBvYnNlcnZhYmxlL3JlYWN0aXZlIGxpYnJhcmllcy5cbiAgICogQHJldHVybnMge29ic2VydmFibGV9IEEgbWluaW1hbCBvYnNlcnZhYmxlIG9mIHN0YXRlIGNoYW5nZXMuXG4gICAqIEZvciBtb3JlIGluZm9ybWF0aW9uLCBzZWUgdGhlIG9ic2VydmFibGUgcHJvcG9zYWw6XG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLW9ic2VydmFibGVcbiAgICovXG5cblxuICBmdW5jdGlvbiBvYnNlcnZhYmxlKCkge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIG91dGVyU3Vic2NyaWJlID0gc3Vic2NyaWJlO1xuICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbWluaW1hbCBvYnNlcnZhYmxlIHN1YnNjcmlwdGlvbiBtZXRob2QuXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gb2JzZXJ2ZXIgQW55IG9iamVjdCB0aGF0IGNhbiBiZSB1c2VkIGFzIGFuIG9ic2VydmVyLlxuICAgICAgICogVGhlIG9ic2VydmVyIG9iamVjdCBzaG91bGQgaGF2ZSBhIGBuZXh0YCBtZXRob2QuXG4gICAgICAgKiBAcmV0dXJucyB7c3Vic2NyaXB0aW9ufSBBbiBvYmplY3Qgd2l0aCBhbiBgdW5zdWJzY3JpYmVgIG1ldGhvZCB0aGF0IGNhblxuICAgICAgICogYmUgdXNlZCB0byB1bnN1YnNjcmliZSB0aGUgb2JzZXJ2YWJsZSBmcm9tIHRoZSBzdG9yZSwgYW5kIHByZXZlbnQgZnVydGhlclxuICAgICAgICogZW1pc3Npb24gb2YgdmFsdWVzIGZyb20gdGhlIG9ic2VydmFibGUuXG4gICAgICAgKi9cbiAgICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG9ic2VydmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JzZXJ2ZXIgIT09ICdvYmplY3QnIHx8IG9ic2VydmVyID09PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgdGhlIG9ic2VydmVyIHRvIGJlIGFuIG9iamVjdC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG9ic2VydmVTdGF0ZSgpIHtcbiAgICAgICAgICBpZiAob2JzZXJ2ZXIubmV4dCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChnZXRTdGF0ZSgpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvYnNlcnZlU3RhdGUoKTtcbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlID0gb3V0ZXJTdWJzY3JpYmUob2JzZXJ2ZVN0YXRlKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICB1bnN1YnNjcmliZTogdW5zdWJzY3JpYmVcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LCBfcmVmWyQkb2JzZXJ2YWJsZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmO1xuICB9IC8vIFdoZW4gYSBzdG9yZSBpcyBjcmVhdGVkLCBhbiBcIklOSVRcIiBhY3Rpb24gaXMgZGlzcGF0Y2hlZCBzbyB0aGF0IGV2ZXJ5XG4gIC8vIHJlZHVjZXIgcmV0dXJucyB0aGVpciBpbml0aWFsIHN0YXRlLiBUaGlzIGVmZmVjdGl2ZWx5IHBvcHVsYXRlc1xuICAvLyB0aGUgaW5pdGlhbCBzdGF0ZSB0cmVlLlxuXG5cbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IEFjdGlvblR5cGVzLklOSVRcbiAgfSk7XG4gIHJldHVybiBfcmVmMiA9IHtcbiAgICBkaXNwYXRjaDogZGlzcGF0Y2gsXG4gICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIHJlcGxhY2VSZWR1Y2VyOiByZXBsYWNlUmVkdWNlclxuICB9LCBfcmVmMlskJG9ic2VydmFibGVdID0gb2JzZXJ2YWJsZSwgX3JlZjI7XG59XG5cbi8qKlxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1lc3NhZ2UgVGhlIHdhcm5pbmcgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiB3YXJuaW5nKG1lc3NhZ2UpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBjb25zb2xlLmVycm9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29uc29sZS5lcnJvcihtZXNzYWdlKTtcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbnNvbGUgKi9cblxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCBpZiB5b3UgZW5hYmxlXG4gICAgLy8gXCJicmVhayBvbiBhbGwgZXhjZXB0aW9uc1wiIGluIHlvdXIgY29uc29sZSxcbiAgICAvLyBpdCB3b3VsZCBwYXVzZSB0aGUgZXhlY3V0aW9uIGF0IHRoaXMgbGluZS5cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcblxufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWRTdGF0ZUVycm9yTWVzc2FnZShrZXksIGFjdGlvbikge1xuICB2YXIgYWN0aW9uVHlwZSA9IGFjdGlvbiAmJiBhY3Rpb24udHlwZTtcbiAgdmFyIGFjdGlvbkRlc2NyaXB0aW9uID0gYWN0aW9uVHlwZSAmJiBcImFjdGlvbiBcXFwiXCIgKyBTdHJpbmcoYWN0aW9uVHlwZSkgKyBcIlxcXCJcIiB8fCAnYW4gYWN0aW9uJztcbiAgcmV0dXJuIFwiR2l2ZW4gXCIgKyBhY3Rpb25EZXNjcmlwdGlvbiArIFwiLCByZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQuIFwiICsgXCJUbyBpZ25vcmUgYW4gYWN0aW9uLCB5b3UgbXVzdCBleHBsaWNpdGx5IHJldHVybiB0aGUgcHJldmlvdXMgc3RhdGUuIFwiICsgXCJJZiB5b3Ugd2FudCB0aGlzIHJlZHVjZXIgdG8gaG9sZCBubyB2YWx1ZSwgeW91IGNhbiByZXR1cm4gbnVsbCBpbnN0ZWFkIG9mIHVuZGVmaW5lZC5cIjtcbn1cblxuZnVuY3Rpb24gZ2V0VW5leHBlY3RlZFN0YXRlU2hhcGVXYXJuaW5nTWVzc2FnZShpbnB1dFN0YXRlLCByZWR1Y2VycywgYWN0aW9uLCB1bmV4cGVjdGVkS2V5Q2FjaGUpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgYXJndW1lbnROYW1lID0gYWN0aW9uICYmIGFjdGlvbi50eXBlID09PSBBY3Rpb25UeXBlcy5JTklUID8gJ3ByZWxvYWRlZFN0YXRlIGFyZ3VtZW50IHBhc3NlZCB0byBjcmVhdGVTdG9yZScgOiAncHJldmlvdXMgc3RhdGUgcmVjZWl2ZWQgYnkgdGhlIHJlZHVjZXInO1xuXG4gIGlmIChyZWR1Y2VyS2V5cy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJ1N0b3JlIGRvZXMgbm90IGhhdmUgYSB2YWxpZCByZWR1Y2VyLiBNYWtlIHN1cmUgdGhlIGFyZ3VtZW50IHBhc3NlZCAnICsgJ3RvIGNvbWJpbmVSZWR1Y2VycyBpcyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSByZWR1Y2Vycy4nO1xuICB9XG5cbiAgaWYgKCFpc1BsYWluT2JqZWN0KGlucHV0U3RhdGUpKSB7XG4gICAgcmV0dXJuIFwiVGhlIFwiICsgYXJndW1lbnROYW1lICsgXCIgaGFzIHVuZXhwZWN0ZWQgdHlwZSBvZiBcXFwiXCIgKyB7fS50b1N0cmluZy5jYWxsKGlucHV0U3RhdGUpLm1hdGNoKC9cXHMoW2EtenxBLVpdKykvKVsxXSArIFwiXFxcIi4gRXhwZWN0ZWQgYXJndW1lbnQgdG8gYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBcIiArIChcImtleXM6IFxcXCJcIiArIHJlZHVjZXJLZXlzLmpvaW4oJ1wiLCBcIicpICsgXCJcXFwiXCIpO1xuICB9XG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlzID0gT2JqZWN0LmtleXMoaW5wdXRTdGF0ZSkuZmlsdGVyKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gIXJlZHVjZXJzLmhhc093blByb3BlcnR5KGtleSkgJiYgIXVuZXhwZWN0ZWRLZXlDYWNoZVtrZXldO1xuICB9KTtcbiAgdW5leHBlY3RlZEtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgdW5leHBlY3RlZEtleUNhY2hlW2tleV0gPSB0cnVlO1xuICB9KTtcbiAgaWYgKGFjdGlvbiAmJiBhY3Rpb24udHlwZSA9PT0gQWN0aW9uVHlwZXMuUkVQTEFDRSkgcmV0dXJuO1xuXG4gIGlmICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuIFwiVW5leHBlY3RlZCBcIiArICh1bmV4cGVjdGVkS2V5cy5sZW5ndGggPiAxID8gJ2tleXMnIDogJ2tleScpICsgXCIgXCIgKyAoXCJcXFwiXCIgKyB1bmV4cGVjdGVkS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIiBmb3VuZCBpbiBcIiArIGFyZ3VtZW50TmFtZSArIFwiLiBcIikgKyBcIkV4cGVjdGVkIHRvIGZpbmQgb25lIG9mIHRoZSBrbm93biByZWR1Y2VyIGtleXMgaW5zdGVhZDogXCIgKyAoXCJcXFwiXCIgKyByZWR1Y2VyS2V5cy5qb2luKCdcIiwgXCInKSArIFwiXFxcIi4gVW5leHBlY3RlZCBrZXlzIHdpbGwgYmUgaWdub3JlZC5cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYXNzZXJ0UmVkdWNlclNoYXBlKHJlZHVjZXJzKSB7XG4gIE9iamVjdC5rZXlzKHJlZHVjZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICB2YXIgcmVkdWNlciA9IHJlZHVjZXJzW2tleV07XG4gICAgdmFyIGluaXRpYWxTdGF0ZSA9IHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5JTklUXG4gICAgfSk7XG5cbiAgICBpZiAodHlwZW9mIGluaXRpYWxTdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlJlZHVjZXIgXFxcIlwiICsga2V5ICsgXCJcXFwiIHJldHVybmVkIHVuZGVmaW5lZCBkdXJpbmcgaW5pdGlhbGl6YXRpb24uIFwiICsgXCJJZiB0aGUgc3RhdGUgcGFzc2VkIHRvIHRoZSByZWR1Y2VyIGlzIHVuZGVmaW5lZCwgeW91IG11c3QgXCIgKyBcImV4cGxpY2l0bHkgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLiBUaGUgaW5pdGlhbCBzdGF0ZSBtYXkgXCIgKyBcIm5vdCBiZSB1bmRlZmluZWQuIElmIHlvdSBkb24ndCB3YW50IHRvIHNldCBhIHZhbHVlIGZvciB0aGlzIHJlZHVjZXIsIFwiICsgXCJ5b3UgY2FuIHVzZSBudWxsIGluc3RlYWQgb2YgdW5kZWZpbmVkLlwiKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXIodW5kZWZpbmVkLCB7XG4gICAgICB0eXBlOiBBY3Rpb25UeXBlcy5QUk9CRV9VTktOT1dOX0FDVElPTigpXG4gICAgfSkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWR1Y2VyIFxcXCJcIiArIGtleSArIFwiXFxcIiByZXR1cm5lZCB1bmRlZmluZWQgd2hlbiBwcm9iZWQgd2l0aCBhIHJhbmRvbSB0eXBlLiBcIiArIChcIkRvbid0IHRyeSB0byBoYW5kbGUgXCIgKyBBY3Rpb25UeXBlcy5JTklUICsgXCIgb3Igb3RoZXIgYWN0aW9ucyBpbiBcXFwicmVkdXgvKlxcXCIgXCIpICsgXCJuYW1lc3BhY2UuIFRoZXkgYXJlIGNvbnNpZGVyZWQgcHJpdmF0ZS4gSW5zdGVhZCwgeW91IG11c3QgcmV0dXJuIHRoZSBcIiArIFwiY3VycmVudCBzdGF0ZSBmb3IgYW55IHVua25vd24gYWN0aW9ucywgdW5sZXNzIGl0IGlzIHVuZGVmaW5lZCwgXCIgKyBcImluIHdoaWNoIGNhc2UgeW91IG11c3QgcmV0dXJuIHRoZSBpbml0aWFsIHN0YXRlLCByZWdhcmRsZXNzIG9mIHRoZSBcIiArIFwiYWN0aW9uIHR5cGUuIFRoZSBpbml0aWFsIHN0YXRlIG1heSBub3QgYmUgdW5kZWZpbmVkLCBidXQgY2FuIGJlIG51bGwuXCIpO1xuICAgIH1cbiAgfSk7XG59XG4vKipcbiAqIFR1cm5zIGFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGRpZmZlcmVudCByZWR1Y2VyIGZ1bmN0aW9ucywgaW50byBhIHNpbmdsZVxuICogcmVkdWNlciBmdW5jdGlvbi4gSXQgd2lsbCBjYWxsIGV2ZXJ5IGNoaWxkIHJlZHVjZXIsIGFuZCBnYXRoZXIgdGhlaXIgcmVzdWx0c1xuICogaW50byBhIHNpbmdsZSBzdGF0ZSBvYmplY3QsIHdob3NlIGtleXMgY29ycmVzcG9uZCB0byB0aGUga2V5cyBvZiB0aGUgcGFzc2VkXG4gKiByZWR1Y2VyIGZ1bmN0aW9ucy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gcmVkdWNlcnMgQW4gb2JqZWN0IHdob3NlIHZhbHVlcyBjb3JyZXNwb25kIHRvIGRpZmZlcmVudFxuICogcmVkdWNlciBmdW5jdGlvbnMgdGhhdCBuZWVkIHRvIGJlIGNvbWJpbmVkIGludG8gb25lLiBPbmUgaGFuZHkgd2F5IHRvIG9idGFpblxuICogaXQgaXMgdG8gdXNlIEVTNiBgaW1wb3J0ICogYXMgcmVkdWNlcnNgIHN5bnRheC4gVGhlIHJlZHVjZXJzIG1heSBuZXZlciByZXR1cm5cbiAqIHVuZGVmaW5lZCBmb3IgYW55IGFjdGlvbi4gSW5zdGVhZCwgdGhleSBzaG91bGQgcmV0dXJuIHRoZWlyIGluaXRpYWwgc3RhdGVcbiAqIGlmIHRoZSBzdGF0ZSBwYXNzZWQgdG8gdGhlbSB3YXMgdW5kZWZpbmVkLCBhbmQgdGhlIGN1cnJlbnQgc3RhdGUgZm9yIGFueVxuICogdW5yZWNvZ25pemVkIGFjdGlvbi5cbiAqXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgcmVkdWNlciBmdW5jdGlvbiB0aGF0IGludm9rZXMgZXZlcnkgcmVkdWNlciBpbnNpZGUgdGhlXG4gKiBwYXNzZWQgb2JqZWN0LCBhbmQgYnVpbGRzIGEgc3RhdGUgb2JqZWN0IHdpdGggdGhlIHNhbWUgc2hhcGUuXG4gKi9cblxuXG5mdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMocmVkdWNlcnMpIHtcbiAgdmFyIHJlZHVjZXJLZXlzID0gT2JqZWN0LmtleXMocmVkdWNlcnMpO1xuICB2YXIgZmluYWxSZWR1Y2VycyA9IHt9O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gcmVkdWNlcktleXNbaV07XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiByZWR1Y2Vyc1trZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB3YXJuaW5nKFwiTm8gcmVkdWNlciBwcm92aWRlZCBmb3Iga2V5IFxcXCJcIiArIGtleSArIFwiXFxcIlwiKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGZpbmFsUmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhmaW5hbFJlZHVjZXJzKTsgLy8gVGhpcyBpcyB1c2VkIHRvIG1ha2Ugc3VyZSB3ZSBkb24ndCB3YXJuIGFib3V0IHRoZSBzYW1lXG4gIC8vIGtleXMgbXVsdGlwbGUgdGltZXMuXG5cbiAgdmFyIHVuZXhwZWN0ZWRLZXlDYWNoZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIHVuZXhwZWN0ZWRLZXlDYWNoZSA9IHt9O1xuICB9XG5cbiAgdmFyIHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG5cbiAgdHJ5IHtcbiAgICBhc3NlcnRSZWR1Y2VyU2hhcGUoZmluYWxSZWR1Y2Vycyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBzaGFwZUFzc2VydGlvbkVycm9yID0gZTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKHN0YXRlID09PSB2b2lkIDApIHtcbiAgICAgIHN0YXRlID0ge307XG4gICAgfVxuXG4gICAgaWYgKHNoYXBlQXNzZXJ0aW9uRXJyb3IpIHtcbiAgICAgIHRocm93IHNoYXBlQXNzZXJ0aW9uRXJyb3I7XG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciB3YXJuaW5nTWVzc2FnZSA9IGdldFVuZXhwZWN0ZWRTdGF0ZVNoYXBlV2FybmluZ01lc3NhZ2Uoc3RhdGUsIGZpbmFsUmVkdWNlcnMsIGFjdGlvbiwgdW5leHBlY3RlZEtleUNhY2hlKTtcblxuICAgICAgaWYgKHdhcm5pbmdNZXNzYWdlKSB7XG4gICAgICAgIHdhcm5pbmcod2FybmluZ01lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBoYXNDaGFuZ2VkID0gZmFsc2U7XG4gICAgdmFyIG5leHRTdGF0ZSA9IHt9O1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGZpbmFsUmVkdWNlcktleXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2tleSA9IGZpbmFsUmVkdWNlcktleXNbX2ldO1xuICAgICAgdmFyIHJlZHVjZXIgPSBmaW5hbFJlZHVjZXJzW19rZXldO1xuICAgICAgdmFyIHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtfa2V5XTtcbiAgICAgIHZhciBuZXh0U3RhdGVGb3JLZXkgPSByZWR1Y2VyKHByZXZpb3VzU3RhdGVGb3JLZXksIGFjdGlvbik7XG5cbiAgICAgIGlmICh0eXBlb2YgbmV4dFN0YXRlRm9yS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB2YXIgZXJyb3JNZXNzYWdlID0gZ2V0VW5kZWZpbmVkU3RhdGVFcnJvck1lc3NhZ2UoX2tleSwgYWN0aW9uKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yTWVzc2FnZSk7XG4gICAgICB9XG5cbiAgICAgIG5leHRTdGF0ZVtfa2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzQ2hhbmdlZCA/IG5leHRTdGF0ZSA6IHN0YXRlO1xuICB9O1xufVxuXG5mdW5jdGlvbiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9yLCBkaXNwYXRjaCkge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkaXNwYXRjaChhY3Rpb25DcmVhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICB9O1xufVxuLyoqXG4gKiBUdXJucyBhbiBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSBhY3Rpb24gY3JlYXRvcnMsIGludG8gYW4gb2JqZWN0IHdpdGggdGhlXG4gKiBzYW1lIGtleXMsIGJ1dCB3aXRoIGV2ZXJ5IGZ1bmN0aW9uIHdyYXBwZWQgaW50byBhIGBkaXNwYXRjaGAgY2FsbCBzbyB0aGV5XG4gKiBtYXkgYmUgaW52b2tlZCBkaXJlY3RseS4gVGhpcyBpcyBqdXN0IGEgY29udmVuaWVuY2UgbWV0aG9kLCBhcyB5b3UgY2FuIGNhbGxcbiAqIGBzdG9yZS5kaXNwYXRjaChNeUFjdGlvbkNyZWF0b3JzLmRvU29tZXRoaW5nKCkpYCB5b3Vyc2VsZiBqdXN0IGZpbmUuXG4gKlxuICogRm9yIGNvbnZlbmllbmNlLCB5b3UgY2FuIGFsc28gcGFzcyBhbiBhY3Rpb24gY3JlYXRvciBhcyB0aGUgZmlyc3QgYXJndW1lbnQsXG4gKiBhbmQgZ2V0IGEgZGlzcGF0Y2ggd3JhcHBlZCBmdW5jdGlvbiBpbiByZXR1cm4uXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxPYmplY3R9IGFjdGlvbkNyZWF0b3JzIEFuIG9iamVjdCB3aG9zZSB2YWx1ZXMgYXJlIGFjdGlvblxuICogY3JlYXRvciBmdW5jdGlvbnMuIE9uZSBoYW5keSB3YXkgdG8gb2J0YWluIGl0IGlzIHRvIHVzZSBFUzYgYGltcG9ydCAqIGFzYFxuICogc3ludGF4LiBZb3UgbWF5IGFsc28gcGFzcyBhIHNpbmdsZSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBkaXNwYXRjaCBUaGUgYGRpc3BhdGNoYCBmdW5jdGlvbiBhdmFpbGFibGUgb24geW91ciBSZWR1eFxuICogc3RvcmUuXG4gKlxuICogQHJldHVybnMge0Z1bmN0aW9ufE9iamVjdH0gVGhlIG9iamVjdCBtaW1pY2tpbmcgdGhlIG9yaWdpbmFsIG9iamVjdCwgYnV0IHdpdGhcbiAqIGV2ZXJ5IGFjdGlvbiBjcmVhdG9yIHdyYXBwZWQgaW50byB0aGUgYGRpc3BhdGNoYCBjYWxsLiBJZiB5b3UgcGFzc2VkIGFcbiAqIGZ1bmN0aW9uIGFzIGBhY3Rpb25DcmVhdG9yc2AsIHRoZSByZXR1cm4gdmFsdWUgd2lsbCBhbHNvIGJlIGEgc2luZ2xlXG4gKiBmdW5jdGlvbi5cbiAqL1xuXG5cbmZ1bmN0aW9uIGJpbmRBY3Rpb25DcmVhdG9ycyhhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpIHtcbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcihhY3Rpb25DcmVhdG9ycywgZGlzcGF0Y2gpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb25DcmVhdG9ycyAhPT0gJ29iamVjdCcgfHwgYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJiaW5kQWN0aW9uQ3JlYXRvcnMgZXhwZWN0ZWQgYW4gb2JqZWN0IG9yIGEgZnVuY3Rpb24sIGluc3RlYWQgcmVjZWl2ZWQgXCIgKyAoYWN0aW9uQ3JlYXRvcnMgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgYWN0aW9uQ3JlYXRvcnMpICsgXCIuIFwiICsgXCJEaWQgeW91IHdyaXRlIFxcXCJpbXBvcnQgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCIgaW5zdGVhZCBvZiBcXFwiaW1wb3J0ICogYXMgQWN0aW9uQ3JlYXRvcnMgZnJvbVxcXCI/XCIpO1xuICB9XG5cbiAgdmFyIGJvdW5kQWN0aW9uQ3JlYXRvcnMgPSB7fTtcblxuICBmb3IgKHZhciBrZXkgaW4gYWN0aW9uQ3JlYXRvcnMpIHtcbiAgICB2YXIgYWN0aW9uQ3JlYXRvciA9IGFjdGlvbkNyZWF0b3JzW2tleV07XG5cbiAgICBpZiAodHlwZW9mIGFjdGlvbkNyZWF0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGJvdW5kQWN0aW9uQ3JlYXRvcnNba2V5XSA9IGJpbmRBY3Rpb25DcmVhdG9yKGFjdGlvbkNyZWF0b3IsIGRpc3BhdGNoKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm91bmRBY3Rpb25DcmVhdG9ycztcbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpKTtcbiAgfVxuXG4gIGlmIChlbnVtZXJhYmxlT25seSkga2V5cyA9IGtleXMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcbiAgfSk7XG4gIHJldHVybiBrZXlzO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMih0YXJnZXQpIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcblxuICAgIGlmIChpICUgMikge1xuICAgICAgb3duS2V5cyhzb3VyY2UsIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG93bktleXMoc291cmNlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIENvbXBvc2VzIHNpbmdsZS1hcmd1bWVudCBmdW5jdGlvbnMgZnJvbSByaWdodCB0byBsZWZ0LiBUaGUgcmlnaHRtb3N0XG4gKiBmdW5jdGlvbiBjYW4gdGFrZSBtdWx0aXBsZSBhcmd1bWVudHMgYXMgaXQgcHJvdmlkZXMgdGhlIHNpZ25hdHVyZSBmb3JcbiAqIHRoZSByZXN1bHRpbmcgY29tcG9zaXRlIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IGZ1bmNzIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZS5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiBvYnRhaW5lZCBieSBjb21wb3NpbmcgdGhlIGFyZ3VtZW50IGZ1bmN0aW9uc1xuICogZnJvbSByaWdodCB0byBsZWZ0LiBGb3IgZXhhbXBsZSwgY29tcG9zZShmLCBnLCBoKSBpcyBpZGVudGljYWwgdG8gZG9pbmdcbiAqICguLi5hcmdzKSA9PiBmKGcoaCguLi5hcmdzKSkpLlxuICovXG5mdW5jdGlvbiBjb21wb3NlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgZnVuY3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgZnVuY3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAoZnVuY3MubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgIHJldHVybiBhcmc7XG4gICAgfTtcbiAgfVxuXG4gIGlmIChmdW5jcy5sZW5ndGggPT09IDEpIHtcbiAgICByZXR1cm4gZnVuY3NbMF07XG4gIH1cblxuICByZXR1cm4gZnVuY3MucmVkdWNlKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhKGIuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpKTtcbiAgICB9O1xuICB9KTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgc3RvcmUgZW5oYW5jZXIgdGhhdCBhcHBsaWVzIG1pZGRsZXdhcmUgdG8gdGhlIGRpc3BhdGNoIG1ldGhvZFxuICogb2YgdGhlIFJlZHV4IHN0b3JlLiBUaGlzIGlzIGhhbmR5IGZvciBhIHZhcmlldHkgb2YgdGFza3MsIHN1Y2ggYXMgZXhwcmVzc2luZ1xuICogYXN5bmNocm9ub3VzIGFjdGlvbnMgaW4gYSBjb25jaXNlIG1hbm5lciwgb3IgbG9nZ2luZyBldmVyeSBhY3Rpb24gcGF5bG9hZC5cbiAqXG4gKiBTZWUgYHJlZHV4LXRodW5rYCBwYWNrYWdlIGFzIGFuIGV4YW1wbGUgb2YgdGhlIFJlZHV4IG1pZGRsZXdhcmUuXG4gKlxuICogQmVjYXVzZSBtaWRkbGV3YXJlIGlzIHBvdGVudGlhbGx5IGFzeW5jaHJvbm91cywgdGhpcyBzaG91bGQgYmUgdGhlIGZpcnN0XG4gKiBzdG9yZSBlbmhhbmNlciBpbiB0aGUgY29tcG9zaXRpb24gY2hhaW4uXG4gKlxuICogTm90ZSB0aGF0IGVhY2ggbWlkZGxld2FyZSB3aWxsIGJlIGdpdmVuIHRoZSBgZGlzcGF0Y2hgIGFuZCBgZ2V0U3RhdGVgIGZ1bmN0aW9uc1xuICogYXMgbmFtZWQgYXJndW1lbnRzLlxuICpcbiAqIEBwYXJhbSB7Li4uRnVuY3Rpb259IG1pZGRsZXdhcmVzIFRoZSBtaWRkbGV3YXJlIGNoYWluIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgc3RvcmUgZW5oYW5jZXIgYXBwbHlpbmcgdGhlIG1pZGRsZXdhcmUuXG4gKi9cblxuZnVuY3Rpb24gYXBwbHlNaWRkbGV3YXJlKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgbWlkZGxld2FyZXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgbWlkZGxld2FyZXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGNyZWF0ZVN0b3JlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzdG9yZSA9IGNyZWF0ZVN0b3JlLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcblxuICAgICAgdmFyIF9kaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Rpc3BhdGNoaW5nIHdoaWxlIGNvbnN0cnVjdGluZyB5b3VyIG1pZGRsZXdhcmUgaXMgbm90IGFsbG93ZWQuICcgKyAnT3RoZXIgbWlkZGxld2FyZSB3b3VsZCBub3QgYmUgYXBwbGllZCB0byB0aGlzIGRpc3BhdGNoLicpO1xuICAgICAgfTtcblxuICAgICAgdmFyIG1pZGRsZXdhcmVBUEkgPSB7XG4gICAgICAgIGdldFN0YXRlOiBzdG9yZS5nZXRTdGF0ZSxcbiAgICAgICAgZGlzcGF0Y2g6IGZ1bmN0aW9uIGRpc3BhdGNoKCkge1xuICAgICAgICAgIHJldHVybiBfZGlzcGF0Y2guYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdmFyIGNoYWluID0gbWlkZGxld2FyZXMubWFwKGZ1bmN0aW9uIChtaWRkbGV3YXJlKSB7XG4gICAgICAgIHJldHVybiBtaWRkbGV3YXJlKG1pZGRsZXdhcmVBUEkpO1xuICAgICAgfSk7XG4gICAgICBfZGlzcGF0Y2ggPSBjb21wb3NlLmFwcGx5KHZvaWQgMCwgY2hhaW4pKHN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkMih7fSwgc3RvcmUsIHtcbiAgICAgICAgZGlzcGF0Y2g6IF9kaXNwYXRjaFxuICAgICAgfSk7XG4gICAgfTtcbiAgfTtcbn1cblxuLypcbiAqIFRoaXMgaXMgYSBkdW1teSBmdW5jdGlvbiB0byBjaGVjayBpZiB0aGUgZnVuY3Rpb24gbmFtZSBoYXMgYmVlbiBhbHRlcmVkIGJ5IG1pbmlmaWNhdGlvbi5cbiAqIElmIHRoZSBmdW5jdGlvbiBoYXMgYmVlbiBtaW5pZmllZCBhbmQgTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJywgd2FybiB0aGUgdXNlci5cbiAqL1xuXG5mdW5jdGlvbiBpc0NydXNoZWQoKSB7fVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgaXNDcnVzaGVkLm5hbWUgPT09ICdzdHJpbmcnICYmIGlzQ3J1c2hlZC5uYW1lICE9PSAnaXNDcnVzaGVkJykge1xuICB3YXJuaW5nKCdZb3UgYXJlIGN1cnJlbnRseSB1c2luZyBtaW5pZmllZCBjb2RlIG91dHNpZGUgb2YgTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLiAnICsgJ1RoaXMgbWVhbnMgdGhhdCB5b3UgYXJlIHJ1bm5pbmcgYSBzbG93ZXIgZGV2ZWxvcG1lbnQgYnVpbGQgb2YgUmVkdXguICcgKyAnWW91IGNhbiB1c2UgbG9vc2UtZW52aWZ5IChodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9sb29zZS1lbnZpZnkpIGZvciBicm93c2VyaWZ5ICcgKyAnb3Igc2V0dGluZyBtb2RlIHRvIHByb2R1Y3Rpb24gaW4gd2VicGFjayAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25jZXB0cy9tb2RlLykgJyArICd0byBlbnN1cmUgeW91IGhhdmUgdGhlIGNvcnJlY3QgY29kZSBmb3IgeW91ciBwcm9kdWN0aW9uIGJ1aWxkLicpO1xufVxuXG5leHBvcnQgeyBBY3Rpb25UeXBlcyBhcyBfX0RPX05PVF9VU0VfX0FjdGlvblR5cGVzLCBhcHBseU1pZGRsZXdhcmUsIGJpbmRBY3Rpb25DcmVhdG9ycywgY29tYmluZVJlZHVjZXJzLCBjb21wb3NlLCBjcmVhdGVTdG9yZSB9O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcmVhY3RJcyA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XG5cbi8qKlxuICogQ29weXJpZ2h0IDIwMTUsIFlhaG9vISBJbmMuXG4gKiBDb3B5cmlnaHRzIGxpY2Vuc2VkIHVuZGVyIHRoZSBOZXcgQlNEIExpY2Vuc2UuIFNlZSB0aGUgYWNjb21wYW55aW5nIExJQ0VOU0UgZmlsZSBmb3IgdGVybXMuXG4gKi9cbnZhciBSRUFDVF9TVEFUSUNTID0ge1xuICBjaGlsZENvbnRleHRUeXBlczogdHJ1ZSxcbiAgY29udGV4dFR5cGU6IHRydWUsXG4gIGNvbnRleHRUeXBlczogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgZ2V0RGVmYXVsdFByb3BzOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I6IHRydWUsXG4gIGdldERlcml2ZWRTdGF0ZUZyb21Qcm9wczogdHJ1ZSxcbiAgbWl4aW5zOiB0cnVlLFxuICBwcm9wVHlwZXM6IHRydWUsXG4gIHR5cGU6IHRydWVcbn07XG52YXIgS05PV05fU1RBVElDUyA9IHtcbiAgbmFtZTogdHJ1ZSxcbiAgbGVuZ3RoOiB0cnVlLFxuICBwcm90b3R5cGU6IHRydWUsXG4gIGNhbGxlcjogdHJ1ZSxcbiAgY2FsbGVlOiB0cnVlLFxuICBhcmd1bWVudHM6IHRydWUsXG4gIGFyaXR5OiB0cnVlXG59O1xudmFyIEZPUldBUkRfUkVGX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIHJlbmRlcjogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlXG59O1xudmFyIE1FTU9fU1RBVElDUyA9IHtcbiAgJyQkdHlwZW9mJzogdHJ1ZSxcbiAgY29tcGFyZTogdHJ1ZSxcbiAgZGVmYXVsdFByb3BzOiB0cnVlLFxuICBkaXNwbGF5TmFtZTogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIFRZUEVfU1RBVElDUyA9IHt9O1xuVFlQRV9TVEFUSUNTW3JlYWN0SXMuRm9yd2FyZFJlZl0gPSBGT1JXQVJEX1JFRl9TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICBpZiAocmVhY3RJcy5pc01lbW8oY29tcG9uZW50KSkge1xuICAgIHJldHVybiBNRU1PX1NUQVRJQ1M7XG4gIH1cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgdmFsaWRhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBwYXR0ZXJuMCA9IG5ldyBSZWdFeHAoJy4qJyk7XG4gIHZhciByZWZWYWwgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHZhbGlkYXRlKGRhdGEsIGRhdGFQYXRoLCBwYXJlbnREYXRhLCBwYXJlbnREYXRhUHJvcGVydHksIHJvb3REYXRhKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciB2RXJyb3JzID0gbnVsbDtcbiAgICB2YXIgZXJyb3JzID0gMDtcbiAgICBpZiAoKGRhdGEgJiYgdHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YSkpKSB7XG4gICAgICB2YXIgZXJyc19fMCA9IGVycm9ycztcbiAgICAgIHZhciB2YWxpZDEgPSB0cnVlO1xuICAgICAgZm9yICh2YXIga2V5MCBpbiBkYXRhKSB7XG4gICAgICAgIHZhciBpc0FkZGl0aW9uYWwwID0gIShmYWxzZSB8fCBrZXkwID09ICdrZXltYXBzJyB8fCBrZXkwID09ICdzZWFyY2gnIHx8IGtleTAgPT0gJ3Byb3BlcnRpZXMnIHx8IGtleTAgPT0gJ2JsYWNrbGlzdCcpO1xuICAgICAgICBpZiAoaXNBZGRpdGlvbmFsMCkge1xuICAgICAgICAgIHZhbGlkMSA9IGZhbHNlO1xuICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICBrZXl3b3JkOiAnYWRkaXRpb25hbFByb3BlcnRpZXMnLFxuICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyBcIlwiLFxuICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvYWRkaXRpb25hbFByb3BlcnRpZXMnLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIGFkZGl0aW9uYWxQcm9wZXJ0eTogJycgKyBrZXkwICsgJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIE5PVCBoYXZlIGFkZGl0aW9uYWwgcHJvcGVydGllcydcbiAgICAgICAgICB9XTtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWxpZDEpIHtcbiAgICAgICAgdmFyIGRhdGExID0gZGF0YS5rZXltYXBzO1xuICAgICAgICBpZiAoZGF0YTEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGVycnNfMSA9IGVycm9ycztcbiAgICAgICAgICBpZiAoKGRhdGExICYmIHR5cGVvZiBkYXRhMSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMSkpKSB7XG4gICAgICAgICAgICB2YXIgZXJyc19fMSA9IGVycm9ycztcbiAgICAgICAgICAgIHZhciB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5MSBpbiBkYXRhMSkge1xuICAgICAgICAgICAgICBpZiAocGF0dGVybjAudGVzdChrZXkxKSkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhMiA9IGRhdGExW2tleTFdO1xuICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgaWYgKChkYXRhMiAmJiB0eXBlb2YgZGF0YTIgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTIpKSkge1xuICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTIudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQzID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcua2V5bWFwc1tcXCcnICsga2V5MSArICdcXCddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMva2V5bWFwcy9wYXR0ZXJuUHJvcGVydGllcy8uKi9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1Byb3BlcnR5OiAndHlwZSdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwndHlwZVxcJydcbiAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyLnR5cGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHNbXFwnJyArIGtleTEgKyAnXFwnXS50eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9rZXltYXBzL3BhdHRlcm5Qcm9wZXJ0aWVzLy4qL3Byb3BlcnRpZXMvdHlwZS90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IGVycm9ycyA9PT0gZXJyc18zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHNbXFwnJyArIGtleTEgKyAnXFwnXScsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMva2V5bWFwcy9wYXR0ZXJuUHJvcGVydGllcy8uKi90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgIGlmICghdmFsaWQyKSBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHMnLFxuICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2tleW1hcHMvdHlwZScsXG4gICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgfV07XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciB2YWxpZDEgPSBlcnJvcnMgPT09IGVycnNfMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWQxKSB7XG4gICAgICAgICAgdmFyIGRhdGExID0gZGF0YS5zZWFyY2g7XG4gICAgICAgICAgaWYgKGRhdGExID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBlcnJzXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICBpZiAoKGRhdGExICYmIHR5cGVvZiBkYXRhMSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMSkpKSB7XG4gICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGExLmRlZmF1bHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgdmFsaWQyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICdkZWZhdWx0J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwnZGVmYXVsdFxcJydcbiAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5kZWZhdWx0ICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2guZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcHJvcGVydGllcy9kZWZhdWx0L3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZGF0YTIgPSBkYXRhMS5lbmdpbmVzO1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICdlbmdpbmVzJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5IFxcJ2VuZ2luZXNcXCcnXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKGRhdGEyICYmIHR5cGVvZiBkYXRhMiA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIga2V5MiBpbiBkYXRhMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhdHRlcm4wLnRlc3Qoa2V5MikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMltrZXkyXSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoLmVuZ2luZXNbXFwnJyArIGtleTIgKyAnXFwnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9wcm9wZXJ0aWVzL2VuZ2luZXMvcGF0dGVyblByb3BlcnRpZXMvLiovdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IGVycm9ycyA9PT0gZXJyc18zO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMykgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgdmFsaWQzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2guZW5naW5lcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9wcm9wZXJ0aWVzL2VuZ2luZXMvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaCcsXG4gICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvdHlwZScsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsaWQxID0gZXJyb3JzID09PSBlcnJzXzE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2YWxpZDEpIHtcbiAgICAgICAgICAgIHZhciBkYXRhMSA9IGRhdGEucHJvcGVydGllcztcbiAgICAgICAgICAgIGlmIChkYXRhMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YXIgZXJyc18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICBpZiAoKGRhdGExICYmIHR5cGVvZiBkYXRhMSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMSkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGExLmhpbnRjaGFycyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5oaW50Y2hhcnMgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMuaGludGNoYXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9oaW50Y2hhcnMvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhMS5zbW9vdGhzY3JvbGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5zbW9vdGhzY3JvbGwgIT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzLnNtb290aHNjcm9sbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9zbW9vdGhzY3JvbGwvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Jvb2xlYW4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBpZiAodmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMS5jb21wbGV0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTEuY29tcGxldGUgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMuY29tcGxldGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvcHJvcGVydGllcy9jb21wbGV0ZS90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcucHJvcGVydGllcycsXG4gICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvdHlwZScsXG4gICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdmFyIHZhbGlkMSA9IGVycm9ycyA9PT0gZXJyc18xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbGlkMSkge1xuICAgICAgICAgICAgICB2YXIgZGF0YTEgPSBkYXRhLmJsYWNrbGlzdDtcbiAgICAgICAgICAgICAgaWYgKGRhdGExID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YWxpZDEgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBlcnJzXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YTEpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgZXJyc19fMSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDE7XG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpMSA9IDA7IGkxIDwgZGF0YTEubGVuZ3RoOyBpMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhMiA9IGRhdGExW2kxXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMiAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzAvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gZXJyb3JzID09PSBlcnJzXzM7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IHZhbGlkMiB8fCB2YWxpZDM7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoKGRhdGEyICYmIHR5cGVvZiBkYXRhMiA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMikpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc19fMyA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMi51cmwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkNCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICd1cmwnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5IFxcJ3VybFxcJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc180ID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTIudXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10udXJsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMS9wcm9wZXJ0aWVzL3VybC90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNCA9IGVycm9ycyA9PT0gZXJyc180O1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YTMgPSBkYXRhMi5rZXlzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1Byb3BlcnR5OiAna2V5cydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5IFxcJ2tleXNcXCcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfNCA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc19fNCA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaTQgPSAwOyBpNCA8IGRhdGEzLmxlbmd0aDsgaTQrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzUgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhM1tpNF0gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXS5rZXlzWycgKyBpNCArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMS9wcm9wZXJ0aWVzL2tleXMvaXRlbXMvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDUgPSBlcnJvcnMgPT09IGVycnNfNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkNSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10ua2V5cycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMS9wcm9wZXJ0aWVzL2tleXMvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIGFycmF5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDQgPSBlcnJvcnMgPT09IGVycnNfNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMS90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IGVycm9ycyA9PT0gZXJyc18zO1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IHZhbGlkMiB8fCB2YWxpZDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ2FueU9mJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgbWF0Y2ggc29tZSBzY2hlbWEgaW4gYW55T2YnXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gdkVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyc19fMjtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycnNfXzIpIHZFcnJvcnMubGVuZ3RoID0gZXJyc19fMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZDIpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3QnLFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIGFycmF5J1xuICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWxpZDEgPSBlcnJvcnMgPT09IGVycnNfMTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgXCJcIixcbiAgICAgICAgc2NoZW1hUGF0aDogJyMvdHlwZScsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgfV07XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhbGlkYXRlLmVycm9ycyA9IHZFcnJvcnM7XG4gICAgcmV0dXJuIGVycm9ycyA9PT0gMDtcbiAgfTtcbn0pKCk7XG52YWxpZGF0ZS5zY2hlbWEgPSB7XG4gIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwia2V5bWFwc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuICAgICAgICBcIi4qXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWlyZWRcIjogW1widHlwZVwiXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcInNlYXJjaFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiZGVmYXVsdFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJlbmdpbmVzXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgIFwiLipcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwicmVxdWlyZWRcIjogW1wiZGVmYXVsdFwiLCBcImVuZ2luZXNcIl1cbiAgICB9LFxuICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiaGludGNoYXJzXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcInNtb290aHNjcm9sbFwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYm9vbGVhblwiXG4gICAgICAgIH0sXG4gICAgICAgIFwiY29tcGxldGVcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwiYmxhY2tsaXN0XCI6IHtcbiAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgXCJhbnlPZlwiOiBbe1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgICAgICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgXCJ1cmxcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwia2V5c1wiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImFycmF5XCIsXG4gICAgICAgICAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVxdWlyZWRcIjogW1widXJsXCIsIFwia2V5c1wiXVxuICAgICAgICB9XVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgXCJhZGRpdGlvbmFsUHJvcGVydGllc1wiOiBmYWxzZVxufTtcbnZhbGlkYXRlLmVycm9ycyA9IG51bGw7XG5tb2R1bGUuZXhwb3J0cyA9IHZhbGlkYXRlOyIsIi8qXG5vYmplY3QtYXNzaWduXG4oYykgU2luZHJlIFNvcmh1c1xuQGxpY2Vuc2UgTUlUXG4qL1xuXG4ndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGdldE93blByb3BlcnR5U3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG52YXIgaGFzT3duUHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIHByb3BJc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG5mdW5jdGlvbiB0b09iamVjdCh2YWwpIHtcblx0aWYgKHZhbCA9PT0gbnVsbCB8fCB2YWwgPT09IHVuZGVmaW5lZCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ09iamVjdC5hc3NpZ24gY2Fubm90IGJlIGNhbGxlZCB3aXRoIG51bGwgb3IgdW5kZWZpbmVkJyk7XG5cdH1cblxuXHRyZXR1cm4gT2JqZWN0KHZhbCk7XG59XG5cbmZ1bmN0aW9uIHNob3VsZFVzZU5hdGl2ZSgpIHtcblx0dHJ5IHtcblx0XHRpZiAoIU9iamVjdC5hc3NpZ24pIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBEZXRlY3QgYnVnZ3kgcHJvcGVydHkgZW51bWVyYXRpb24gb3JkZXIgaW4gb2xkZXIgVjggdmVyc2lvbnMuXG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTE4XG5cdFx0dmFyIHRlc3QxID0gbmV3IFN0cmluZygnYWJjJyk7ICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ldy13cmFwcGVyc1xuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlcnIpIHtcblx0XHQvLyBXZSBkb24ndCBleHBlY3QgYW55IG9mIHRoZSBhYm92ZSB0byB0aHJvdywgYnV0IGJldHRlciB0byBiZSBzYWZlLlxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNob3VsZFVzZU5hdGl2ZSgpID8gT2JqZWN0LmFzc2lnbiA6IGZ1bmN0aW9uICh0YXJnZXQsIHNvdXJjZSkge1xuXHR2YXIgZnJvbTtcblx0dmFyIHRvID0gdG9PYmplY3QodGFyZ2V0KTtcblx0dmFyIHN5bWJvbHM7XG5cblx0Zm9yICh2YXIgcyA9IDE7IHMgPCBhcmd1bWVudHMubGVuZ3RoOyBzKyspIHtcblx0XHRmcm9tID0gT2JqZWN0KGFyZ3VtZW50c1tzXSk7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gZnJvbSkge1xuXHRcdFx0aWYgKGhhc093blByb3BlcnR5LmNhbGwoZnJvbSwga2V5KSkge1xuXHRcdFx0XHR0b1trZXldID0gZnJvbVtrZXldO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcblx0XHRcdHN5bWJvbHMgPSBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG4iLCJ2YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fU3ltYm9sJyksXG4gICAgZ2V0UmF3VGFnID0gcmVxdWlyZSgnLi9fZ2V0UmF3VGFnJyksXG4gICAgb2JqZWN0VG9TdHJpbmcgPSByZXF1aXJlKCcuL19vYmplY3RUb1N0cmluZycpO1xuXG4vKiogYE9iamVjdCN0b1N0cmluZ2AgcmVzdWx0IHJlZmVyZW5jZXMuICovXG52YXIgbnVsbFRhZyA9ICdbb2JqZWN0IE51bGxdJyxcbiAgICB1bmRlZmluZWRUYWcgPSAnW29iamVjdCBVbmRlZmluZWRdJztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogVGhlIGJhc2UgaW1wbGVtZW50YXRpb24gb2YgYGdldFRhZ2Agd2l0aG91dCBmYWxsYmFja3MgZm9yIGJ1Z2d5IGVudmlyb25tZW50cy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBgdG9TdHJpbmdUYWdgLlxuICovXG5mdW5jdGlvbiBiYXNlR2V0VGFnKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyB1bmRlZmluZWRUYWcgOiBudWxsVGFnO1xuICB9XG4gIHJldHVybiAoc3ltVG9TdHJpbmdUYWcgJiYgc3ltVG9TdHJpbmdUYWcgaW4gT2JqZWN0KHZhbHVlKSlcbiAgICA/IGdldFJhd1RhZyh2YWx1ZSlcbiAgICA6IG9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBiYXNlR2V0VGFnO1xuIiwidmFyIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBCdWlsdC1pbiB2YWx1ZSByZWZlcmVuY2VzLiAqL1xudmFyIFN5bWJvbCA9IHJvb3QuU3ltYm9sO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN5bWJvbDtcbiIsIi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UuIEEgdmFsdWUgaXMgb2JqZWN0LWxpa2UgaWYgaXQncyBub3QgYG51bGxgXG4gKiBhbmQgaGFzIGEgYHR5cGVvZmAgcmVzdWx0IG9mIFwib2JqZWN0XCIuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgb2JqZWN0LWxpa2UsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc09iamVjdExpa2Uoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc09iamVjdExpa2UobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdExpa2UodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9IG51bGwgJiYgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzT2JqZWN0TGlrZTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5leHBvcnQgdmFyIFJlYWN0UmVkdXhDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbmV4cG9ydCBkZWZhdWx0IFJlYWN0UmVkdXhDb250ZXh0OyIsIi8vIERlZmF1bHQgdG8gYSBkdW1teSBcImJhdGNoXCIgaW1wbGVtZW50YXRpb24gdGhhdCBqdXN0IHJ1bnMgdGhlIGNhbGxiYWNrXG5mdW5jdGlvbiBkZWZhdWx0Tm9vcEJhdGNoKGNhbGxiYWNrKSB7XG4gIGNhbGxiYWNrKCk7XG59XG5cbnZhciBiYXRjaCA9IGRlZmF1bHROb29wQmF0Y2g7IC8vIEFsbG93IGluamVjdGluZyBhbm90aGVyIGJhdGNoaW5nIGZ1bmN0aW9uIGxhdGVyXG5cbmV4cG9ydCB2YXIgc2V0QmF0Y2ggPSBmdW5jdGlvbiBzZXRCYXRjaChuZXdCYXRjaCkge1xuICByZXR1cm4gYmF0Y2ggPSBuZXdCYXRjaDtcbn07IC8vIFN1cHBseSBhIGdldHRlciBqdXN0IHRvIHNraXAgZGVhbGluZyB3aXRoIEVTTSBiaW5kaW5nc1xuXG5leHBvcnQgdmFyIGdldEJhdGNoID0gZnVuY3Rpb24gZ2V0QmF0Y2goKSB7XG4gIHJldHVybiBiYXRjaDtcbn07IiwiaW1wb3J0IHsgZ2V0QmF0Y2ggfSBmcm9tICcuL2JhdGNoJzsgLy8gZW5jYXBzdWxhdGVzIHRoZSBzdWJzY3JpcHRpb24gbG9naWMgZm9yIGNvbm5lY3RpbmcgYSBjb21wb25lbnQgdG8gdGhlIHJlZHV4IHN0b3JlLCBhc1xuLy8gd2VsbCBhcyBuZXN0aW5nIHN1YnNjcmlwdGlvbnMgb2YgZGVzY2VuZGFudCBjb21wb25lbnRzLCBzbyB0aGF0IHdlIGNhbiBlbnN1cmUgdGhlXG4vLyBhbmNlc3RvciBjb21wb25lbnRzIHJlLXJlbmRlciBiZWZvcmUgZGVzY2VuZGFudHNcblxudmFyIENMRUFSRUQgPSBudWxsO1xudmFyIG51bGxMaXN0ZW5lcnMgPSB7XG4gIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge31cbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpc3RlbmVyQ29sbGVjdGlvbigpIHtcbiAgdmFyIGJhdGNoID0gZ2V0QmF0Y2goKTsgLy8gdGhlIGN1cnJlbnQvbmV4dCBwYXR0ZXJuIGlzIGNvcGllZCBmcm9tIHJlZHV4J3MgY3JlYXRlU3RvcmUgY29kZS5cbiAgLy8gVE9ETzogcmVmYWN0b3IrZXhwb3NlIHRoYXQgY29kZSB0byBiZSByZXVzYWJsZSBoZXJlP1xuXG4gIHZhciBjdXJyZW50ID0gW107XG4gIHZhciBuZXh0ID0gW107XG4gIHJldHVybiB7XG4gICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgbmV4dCA9IENMRUFSRUQ7XG4gICAgICBjdXJyZW50ID0gQ0xFQVJFRDtcbiAgICB9LFxuICAgIG5vdGlmeTogZnVuY3Rpb24gbm90aWZ5KCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGN1cnJlbnQgPSBuZXh0O1xuICAgICAgYmF0Y2goZnVuY3Rpb24gKCkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfSxcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgICAgdmFyIGlzU3Vic2NyaWJlZCA9IHRydWU7XG4gICAgICBpZiAobmV4dCA9PT0gY3VycmVudCkgbmV4dCA9IGN1cnJlbnQuc2xpY2UoKTtcbiAgICAgIG5leHQucHVzaChsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gdW5zdWJzY3JpYmUoKSB7XG4gICAgICAgIGlmICghaXNTdWJzY3JpYmVkIHx8IGN1cnJlbnQgPT09IENMRUFSRUQpIHJldHVybjtcbiAgICAgICAgaXNTdWJzY3JpYmVkID0gZmFsc2U7XG4gICAgICAgIGlmIChuZXh0ID09PSBjdXJyZW50KSBuZXh0ID0gY3VycmVudC5zbGljZSgpO1xuICAgICAgICBuZXh0LnNwbGljZShuZXh0LmluZGV4T2YobGlzdGVuZXIpLCAxKTtcbiAgICAgIH07XG4gICAgfVxuICB9O1xufVxuXG52YXIgU3Vic2NyaXB0aW9uID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3Vic2NyaXB0aW9uKHN0b3JlLCBwYXJlbnRTdWIpIHtcbiAgICB0aGlzLnN0b3JlID0gc3RvcmU7XG4gICAgdGhpcy5wYXJlbnRTdWIgPSBwYXJlbnRTdWI7XG4gICAgdGhpcy51bnN1YnNjcmliZSA9IG51bGw7XG4gICAgdGhpcy5saXN0ZW5lcnMgPSBudWxsTGlzdGVuZXJzO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlciA9IHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IFN1YnNjcmlwdGlvbi5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZE5lc3RlZFN1YiA9IGZ1bmN0aW9uIGFkZE5lc3RlZFN1YihsaXN0ZW5lcikge1xuICAgIHRoaXMudHJ5U3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXJzLnN1YnNjcmliZShsaXN0ZW5lcik7XG4gIH07XG5cbiAgX3Byb3RvLm5vdGlmeU5lc3RlZFN1YnMgPSBmdW5jdGlvbiBub3RpZnlOZXN0ZWRTdWJzKCkge1xuICAgIHRoaXMubGlzdGVuZXJzLm5vdGlmeSgpO1xuICB9O1xuXG4gIF9wcm90by5oYW5kbGVDaGFuZ2VXcmFwcGVyID0gZnVuY3Rpb24gaGFuZGxlQ2hhbmdlV3JhcHBlcigpIHtcbiAgICBpZiAodGhpcy5vblN0YXRlQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uU3RhdGVDaGFuZ2UoKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLmlzU3Vic2NyaWJlZCA9IGZ1bmN0aW9uIGlzU3Vic2NyaWJlZCgpIHtcbiAgICByZXR1cm4gQm9vbGVhbih0aGlzLnVuc3Vic2NyaWJlKTtcbiAgfTtcblxuICBfcHJvdG8udHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5U3Vic2NyaWJlKCkge1xuICAgIGlmICghdGhpcy51bnN1YnNjcmliZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZSA9IHRoaXMucGFyZW50U3ViID8gdGhpcy5wYXJlbnRTdWIuYWRkTmVzdGVkU3ViKHRoaXMuaGFuZGxlQ2hhbmdlV3JhcHBlcikgOiB0aGlzLnN0b3JlLnN1YnNjcmliZSh0aGlzLmhhbmRsZUNoYW5nZVdyYXBwZXIpO1xuICAgICAgdGhpcy5saXN0ZW5lcnMgPSBjcmVhdGVMaXN0ZW5lckNvbGxlY3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgX3Byb3RvLnRyeVVuc3Vic2NyaWJlID0gZnVuY3Rpb24gdHJ5VW5zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMudW5zdWJzY3JpYmUpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmUgPSBudWxsO1xuICAgICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgIHRoaXMubGlzdGVuZXJzID0gbnVsbExpc3RlbmVycztcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFN1YnNjcmlwdGlvbjtcbn0oKTtcblxuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgUmVhY3QsIHsgdXNlTWVtbywgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcblxuZnVuY3Rpb24gUHJvdmlkZXIoX3JlZikge1xuICB2YXIgc3RvcmUgPSBfcmVmLnN0b3JlLFxuICAgICAgY29udGV4dCA9IF9yZWYuY29udGV4dCxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbjtcbiAgdmFyIGNvbnRleHRWYWx1ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlKTtcbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IHN1YnNjcmlwdGlvbi5ub3RpZnlOZXN0ZWRTdWJzO1xuICAgIHJldHVybiB7XG4gICAgICBzdG9yZTogc3RvcmUsXG4gICAgICBzdWJzY3JpcHRpb246IHN1YnNjcmlwdGlvblxuICAgIH07XG4gIH0sIFtzdG9yZV0pO1xuICB2YXIgcHJldmlvdXNTdGF0ZSA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzdG9yZS5nZXRTdGF0ZSgpO1xuICB9LCBbc3RvcmVdKTtcbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbjtcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG5cbiAgICBpZiAocHJldmlvdXNTdGF0ZSAhPT0gc3RvcmUuZ2V0U3RhdGUoKSkge1xuICAgICAgc3Vic2NyaXB0aW9uLm5vdGlmeU5lc3RlZFN1YnMoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IG51bGw7XG4gICAgfTtcbiAgfSwgW2NvbnRleHRWYWx1ZSwgcHJldmlvdXNTdGF0ZV0pO1xuICB2YXIgQ29udGV4dCA9IGNvbnRleHQgfHwgUmVhY3RSZWR1eENvbnRleHQ7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogY29udGV4dFZhbHVlXG4gIH0sIGNoaWxkcmVuKTtcbn1cblxuUHJvdmlkZXIucHJvcFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBzdWJzY3JpYmU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZGlzcGF0Y2g6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgZ2V0U3RhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcbiAgfSksXG4gIGNvbnRleHQ6IFByb3BUeXBlcy5vYmplY3QsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvdmlkZXI7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JzsgLy8gUmVhY3QgY3VycmVudGx5IHRocm93cyBhIHdhcm5pbmcgd2hlbiB1c2luZyB1c2VMYXlvdXRFZmZlY3Qgb24gdGhlIHNlcnZlci5cbi8vIFRvIGdldCBhcm91bmQgaXQsIHdlIGNhbiBjb25kaXRpb25hbGx5IHVzZUVmZmVjdCBvbiB0aGUgc2VydmVyIChuby1vcCkgYW5kXG4vLyB1c2VMYXlvdXRFZmZlY3QgaW4gdGhlIGJyb3dzZXIuIFdlIG5lZWQgdXNlTGF5b3V0RWZmZWN0IHRvIGVuc3VyZSB0aGUgc3RvcmVcbi8vIHN1YnNjcmlwdGlvbiBjYWxsYmFjayBhbHdheXMgaGFzIHRoZSBzZWxlY3RvciBmcm9tIHRoZSBsYXRlc3QgcmVuZGVyIGNvbW1pdFxuLy8gYXZhaWxhYmxlLCBvdGhlcndpc2UgYSBzdG9yZSB1cGRhdGUgbWF5IGhhcHBlbiBiZXR3ZWVuIHJlbmRlciBhbmQgdGhlIGVmZmVjdCxcbi8vIHdoaWNoIG1heSBjYXVzZSBtaXNzZWQgdXBkYXRlczsgd2UgYWxzbyBtdXN0IGVuc3VyZSB0aGUgc3RvcmUgc3Vic2NyaXB0aW9uXG4vLyBpcyBjcmVhdGVkIHN5bmNocm9ub3VzbHksIG90aGVyd2lzZSBhIHN0b3JlIHVwZGF0ZSBtYXkgb2NjdXIgYmVmb3JlIHRoZVxuLy8gc3Vic2NyaXB0aW9uIGlzIGNyZWF0ZWQgYW5kIGFuIGluY29uc2lzdGVudCBzdGF0ZSBtYXkgYmUgb2JzZXJ2ZWRcblxudmFyIGlzSG9wZWZ1bGx5RG9tRW52aXJvbm1lbnQgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgIT09ICd1bmRlZmluZWQnO1xuZXhwb3J0IHZhciB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0ID0gaXNIb3BlZnVsbHlEb21FbnZpcm9ubWVudCA/IHVzZUxheW91dEVmZmVjdCA6IHVzZUVmZmVjdDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGhvaXN0U3RhdGljcyBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlTWVtbywgdXNlUmVmLCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNWYWxpZEVsZW1lbnRUeXBlLCBpc0NvbnRleHRDb25zdW1lciB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9Db250ZXh0JzsgLy8gRGVmaW5lIHNvbWUgY29uc3RhbnQgYXJyYXlzIGp1c3QgdG8gYXZvaWQgcmUtY3JlYXRpbmcgdGhlc2VcblxudmFyIEVNUFRZX0FSUkFZID0gW107XG52YXIgTk9fU1VCU0NSSVBUSU9OX0FSUkFZID0gW251bGwsIG51bGxdO1xuXG52YXIgc3RyaW5naWZ5Q29tcG9uZW50ID0gZnVuY3Rpb24gc3RyaW5naWZ5Q29tcG9uZW50KENvbXApIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoQ29tcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHJldHVybiBTdHJpbmcoQ29tcCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHN0b3JlU3RhdGVVcGRhdGVzUmVkdWNlcihzdGF0ZSwgYWN0aW9uKSB7XG4gIHZhciB1cGRhdGVDb3VudCA9IHN0YXRlWzFdO1xuICByZXR1cm4gW2FjdGlvbi5wYXlsb2FkLCB1cGRhdGVDb3VudCArIDFdO1xufVxuXG52YXIgaW5pdFN0YXRlVXBkYXRlcyA9IGZ1bmN0aW9uIGluaXRTdGF0ZVVwZGF0ZXMoKSB7XG4gIHJldHVybiBbbnVsbCwgMF07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25uZWN0QWR2YW5jZWQoXG4vKlxyXG4gIHNlbGVjdG9yRmFjdG9yeSBpcyBhIGZ1bmMgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgcmV0dXJuaW5nIHRoZSBzZWxlY3RvciBmdW5jdGlvbiB1c2VkIHRvXHJcbiAgY29tcHV0ZSBuZXcgcHJvcHMgZnJvbSBzdGF0ZSwgcHJvcHMsIGFuZCBkaXNwYXRjaC4gRm9yIGV4YW1wbGU6XHJcbiAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbm5lY3RBZHZhbmNlZCgoZGlzcGF0Y2gsIG9wdGlvbnMpID0+IChzdGF0ZSwgcHJvcHMpID0+ICh7XHJcbiAgICAgIHRoaW5nOiBzdGF0ZS50aGluZ3NbcHJvcHMudGhpbmdJZF0sXHJcbiAgICAgIHNhdmVUaGluZzogZmllbGRzID0+IGRpc3BhdGNoKGFjdGlvbkNyZWF0b3JzLnNhdmVUaGluZyhwcm9wcy50aGluZ0lkLCBmaWVsZHMpKSxcclxuICAgIH0pKShZb3VyQ29tcG9uZW50KVxyXG4gICAgQWNjZXNzIHRvIGRpc3BhdGNoIGlzIHByb3ZpZGVkIHRvIHRoZSBmYWN0b3J5IHNvIHNlbGVjdG9yRmFjdG9yaWVzIGNhbiBiaW5kIGFjdGlvbkNyZWF0b3JzXHJcbiAgb3V0c2lkZSBvZiB0aGVpciBzZWxlY3RvciBhcyBhbiBvcHRpbWl6YXRpb24uIE9wdGlvbnMgcGFzc2VkIHRvIGNvbm5lY3RBZHZhbmNlZCBhcmUgcGFzc2VkIHRvXHJcbiAgdGhlIHNlbGVjdG9yRmFjdG9yeSwgYWxvbmcgd2l0aCBkaXNwbGF5TmFtZSBhbmQgV3JhcHBlZENvbXBvbmVudCwgYXMgdGhlIHNlY29uZCBhcmd1bWVudC5cclxuICAgIE5vdGUgdGhhdCBzZWxlY3RvckZhY3RvcnkgaXMgcmVzcG9uc2libGUgZm9yIGFsbCBjYWNoaW5nL21lbW9pemF0aW9uIG9mIGluYm91bmQgYW5kIG91dGJvdW5kXHJcbiAgcHJvcHMuIERvIG5vdCB1c2UgY29ubmVjdEFkdmFuY2VkIGRpcmVjdGx5IHdpdGhvdXQgbWVtb2l6aW5nIHJlc3VsdHMgYmV0d2VlbiBjYWxscyB0byB5b3VyXHJcbiAgc2VsZWN0b3IsIG90aGVyd2lzZSB0aGUgQ29ubmVjdCBjb21wb25lbnQgd2lsbCByZS1yZW5kZXIgb24gZXZlcnkgc3RhdGUgb3IgcHJvcHMgY2hhbmdlLlxyXG4qL1xuc2VsZWN0b3JGYWN0b3J5LCAvLyBvcHRpb25zIG9iamVjdDpcbl9yZWYpIHtcbiAgaWYgKF9yZWYgPT09IHZvaWQgMCkge1xuICAgIF9yZWYgPSB7fTtcbiAgfVxuXG4gIHZhciBfcmVmMiA9IF9yZWYsXG4gICAgICBfcmVmMiRnZXREaXNwbGF5TmFtZSA9IF9yZWYyLmdldERpc3BsYXlOYW1lLFxuICAgICAgZ2V0RGlzcGxheU5hbWUgPSBfcmVmMiRnZXREaXNwbGF5TmFtZSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICByZXR1cm4gXCJDb25uZWN0QWR2YW5jZWQoXCIgKyBuYW1lICsgXCIpXCI7XG4gIH0gOiBfcmVmMiRnZXREaXNwbGF5TmFtZSxcbiAgICAgIF9yZWYyJG1ldGhvZE5hbWUgPSBfcmVmMi5tZXRob2ROYW1lLFxuICAgICAgbWV0aG9kTmFtZSA9IF9yZWYyJG1ldGhvZE5hbWUgPT09IHZvaWQgMCA/ICdjb25uZWN0QWR2YW5jZWQnIDogX3JlZjIkbWV0aG9kTmFtZSxcbiAgICAgIF9yZWYyJHJlbmRlckNvdW50UHJvcCA9IF9yZWYyLnJlbmRlckNvdW50UHJvcCxcbiAgICAgIHJlbmRlckNvdW50UHJvcCA9IF9yZWYyJHJlbmRlckNvdW50UHJvcCA9PT0gdm9pZCAwID8gdW5kZWZpbmVkIDogX3JlZjIkcmVuZGVyQ291bnRQcm9wLFxuICAgICAgX3JlZjIkc2hvdWxkSGFuZGxlU3RhID0gX3JlZjIuc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzLFxuICAgICAgc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzID0gX3JlZjIkc2hvdWxkSGFuZGxlU3RhID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjIkc2hvdWxkSGFuZGxlU3RhLFxuICAgICAgX3JlZjIkc3RvcmVLZXkgPSBfcmVmMi5zdG9yZUtleSxcbiAgICAgIHN0b3JlS2V5ID0gX3JlZjIkc3RvcmVLZXkgPT09IHZvaWQgMCA/ICdzdG9yZScgOiBfcmVmMiRzdG9yZUtleSxcbiAgICAgIF9yZWYyJHdpdGhSZWYgPSBfcmVmMi53aXRoUmVmLFxuICAgICAgd2l0aFJlZiA9IF9yZWYyJHdpdGhSZWYgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkd2l0aFJlZixcbiAgICAgIF9yZWYyJGZvcndhcmRSZWYgPSBfcmVmMi5mb3J3YXJkUmVmLFxuICAgICAgZm9yd2FyZFJlZiA9IF9yZWYyJGZvcndhcmRSZWYgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZjIkZm9yd2FyZFJlZixcbiAgICAgIF9yZWYyJGNvbnRleHQgPSBfcmVmMi5jb250ZXh0LFxuICAgICAgY29udGV4dCA9IF9yZWYyJGNvbnRleHQgPT09IHZvaWQgMCA/IFJlYWN0UmVkdXhDb250ZXh0IDogX3JlZjIkY29udGV4dCxcbiAgICAgIGNvbm5lY3RPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZjIsIFtcImdldERpc3BsYXlOYW1lXCIsIFwibWV0aG9kTmFtZVwiLCBcInJlbmRlckNvdW50UHJvcFwiLCBcInNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlc1wiLCBcInN0b3JlS2V5XCIsIFwid2l0aFJlZlwiLCBcImZvcndhcmRSZWZcIiwgXCJjb250ZXh0XCJdKTtcblxuICBpbnZhcmlhbnQocmVuZGVyQ291bnRQcm9wID09PSB1bmRlZmluZWQsIFwicmVuZGVyQ291bnRQcm9wIGlzIHJlbW92ZWQuIHJlbmRlciBjb3VudGluZyBpcyBidWlsdCBpbnRvIHRoZSBsYXRlc3QgUmVhY3QgRGV2IFRvb2xzIHByb2ZpbGluZyBleHRlbnNpb25cIik7XG4gIGludmFyaWFudCghd2l0aFJlZiwgJ3dpdGhSZWYgaXMgcmVtb3ZlZC4gVG8gYWNjZXNzIHRoZSB3cmFwcGVkIGluc3RhbmNlLCB1c2UgYSByZWYgb24gdGhlIGNvbm5lY3RlZCBjb21wb25lbnQnKTtcbiAgdmFyIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UgPSAnVG8gdXNlIGEgY3VzdG9tIFJlZHV4IHN0b3JlIGZvciBzcGVjaWZpYyBjb21wb25lbnRzLCBjcmVhdGUgYSBjdXN0b20gUmVhY3QgY29udGV4dCB3aXRoICcgKyBcIlJlYWN0LmNyZWF0ZUNvbnRleHQoKSwgYW5kIHBhc3MgdGhlIGNvbnRleHQgb2JqZWN0IHRvIFJlYWN0IFJlZHV4J3MgUHJvdmlkZXIgYW5kIHNwZWNpZmljIGNvbXBvbmVudHNcIiArICcgbGlrZTogPFByb3ZpZGVyIGNvbnRleHQ9e015Q29udGV4dH0+PENvbm5lY3RlZENvbXBvbmVudCBjb250ZXh0PXtNeUNvbnRleHR9IC8+PC9Qcm92aWRlcj4uICcgKyAnWW91IG1heSBhbHNvIHBhc3MgYSB7Y29udGV4dCA6IE15Q29udGV4dH0gb3B0aW9uIHRvIGNvbm5lY3QnO1xuICBpbnZhcmlhbnQoc3RvcmVLZXkgPT09ICdzdG9yZScsICdzdG9yZUtleSBoYXMgYmVlbiByZW1vdmVkIGFuZCBkb2VzIG5vdCBkbyBhbnl0aGluZy4gJyArIGN1c3RvbVN0b3JlV2FybmluZ01lc3NhZ2UpO1xuICB2YXIgQ29udGV4dCA9IGNvbnRleHQ7XG4gIHJldHVybiBmdW5jdGlvbiB3cmFwV2l0aENvbm5lY3QoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpbnZhcmlhbnQoaXNWYWxpZEVsZW1lbnRUeXBlKFdyYXBwZWRDb21wb25lbnQpLCBcIllvdSBtdXN0IHBhc3MgYSBjb21wb25lbnQgdG8gdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IFwiICsgKG1ldGhvZE5hbWUgKyBcIi4gSW5zdGVhZCByZWNlaXZlZCBcIiArIHN0cmluZ2lmeUNvbXBvbmVudChXcmFwcGVkQ29tcG9uZW50KSkpO1xuICAgIH1cblxuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8ICdDb21wb25lbnQnO1xuICAgIHZhciBkaXNwbGF5TmFtZSA9IGdldERpc3BsYXlOYW1lKHdyYXBwZWRDb21wb25lbnROYW1lKTtcblxuICAgIHZhciBzZWxlY3RvckZhY3RvcnlPcHRpb25zID0gX2V4dGVuZHMoe30sIGNvbm5lY3RPcHRpb25zLCB7XG4gICAgICBnZXREaXNwbGF5TmFtZTogZ2V0RGlzcGxheU5hbWUsXG4gICAgICBtZXRob2ROYW1lOiBtZXRob2ROYW1lLFxuICAgICAgcmVuZGVyQ291bnRQcm9wOiByZW5kZXJDb3VudFByb3AsXG4gICAgICBzaG91bGRIYW5kbGVTdGF0ZUNoYW5nZXM6IHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlcyxcbiAgICAgIHN0b3JlS2V5OiBzdG9yZUtleSxcbiAgICAgIGRpc3BsYXlOYW1lOiBkaXNwbGF5TmFtZSxcbiAgICAgIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSxcbiAgICAgIFdyYXBwZWRDb21wb25lbnQ6IFdyYXBwZWRDb21wb25lbnRcbiAgICB9KTtcblxuICAgIHZhciBwdXJlID0gY29ubmVjdE9wdGlvbnMucHVyZTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkU2VsZWN0b3Ioc3RvcmUpIHtcbiAgICAgIHJldHVybiBzZWxlY3RvckZhY3Rvcnkoc3RvcmUuZGlzcGF0Y2gsIHNlbGVjdG9yRmFjdG9yeU9wdGlvbnMpO1xuICAgIH0gLy8gSWYgd2UgYXJlbid0IHJ1bm5pbmcgaW4gXCJwdXJlXCIgbW9kZSwgd2UgZG9uJ3Qgd2FudCB0byBtZW1vaXplIHZhbHVlcy5cbiAgICAvLyBUbyBhdm9pZCBjb25kaXRpb25hbGx5IGNhbGxpbmcgaG9va3MsIHdlIGZhbGwgYmFjayB0byBhIHRpbnkgd3JhcHBlclxuICAgIC8vIHRoYXQganVzdCBleGVjdXRlcyB0aGUgZ2l2ZW4gY2FsbGJhY2sgaW1tZWRpYXRlbHkuXG5cblxuICAgIHZhciB1c2VQdXJlT25seU1lbW8gPSBwdXJlID8gdXNlTWVtbyA6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIENvbm5lY3RGdW5jdGlvbihwcm9wcykge1xuICAgICAgdmFyIF91c2VNZW1vID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERpc3Rpbmd1aXNoIGJldHdlZW4gYWN0dWFsIFwiZGF0YVwiIHByb3BzIHRoYXQgd2VyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZXIgY29tcG9uZW50LFxuICAgICAgICAvLyBhbmQgdmFsdWVzIG5lZWRlZCB0byBjb250cm9sIGJlaGF2aW9yIChmb3J3YXJkZWQgcmVmcywgYWx0ZXJuYXRlIGNvbnRleHQgaW5zdGFuY2VzKS5cbiAgICAgICAgLy8gVG8gbWFpbnRhaW4gdGhlIHdyYXBwZXJQcm9wcyBvYmplY3QgcmVmZXJlbmNlLCBtZW1vaXplIHRoaXMgZGVzdHJ1Y3R1cmluZy5cbiAgICAgICAgdmFyIGZvcndhcmRlZFJlZiA9IHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIHdyYXBwZXJQcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJmb3J3YXJkZWRSZWZcIl0pO1xuXG4gICAgICAgIHJldHVybiBbcHJvcHMuY29udGV4dCwgZm9yd2FyZGVkUmVmLCB3cmFwcGVyUHJvcHNdO1xuICAgICAgfSwgW3Byb3BzXSksXG4gICAgICAgICAgcHJvcHNDb250ZXh0ID0gX3VzZU1lbW9bMF0sXG4gICAgICAgICAgZm9yd2FyZGVkUmVmID0gX3VzZU1lbW9bMV0sXG4gICAgICAgICAgd3JhcHBlclByb3BzID0gX3VzZU1lbW9bMl07XG5cbiAgICAgIHZhciBDb250ZXh0VG9Vc2UgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVXNlcnMgbWF5IG9wdGlvbmFsbHkgcGFzcyBpbiBhIGN1c3RvbSBjb250ZXh0IGluc3RhbmNlIHRvIHVzZSBpbnN0ZWFkIG9mIG91ciBSZWFjdFJlZHV4Q29udGV4dC5cbiAgICAgICAgLy8gTWVtb2l6ZSB0aGUgY2hlY2sgdGhhdCBkZXRlcm1pbmVzIHdoaWNoIGNvbnRleHQgaW5zdGFuY2Ugd2Ugc2hvdWxkIHVzZS5cbiAgICAgICAgcmV0dXJuIHByb3BzQ29udGV4dCAmJiBwcm9wc0NvbnRleHQuQ29uc3VtZXIgJiYgaXNDb250ZXh0Q29uc3VtZXIoUmVhY3QuY3JlYXRlRWxlbWVudChwcm9wc0NvbnRleHQuQ29uc3VtZXIsIG51bGwpKSA/IHByb3BzQ29udGV4dCA6IENvbnRleHQ7XG4gICAgICB9LCBbcHJvcHNDb250ZXh0LCBDb250ZXh0XSk7IC8vIFJldHJpZXZlIHRoZSBzdG9yZSBhbmQgYW5jZXN0b3Igc3Vic2NyaXB0aW9uIHZpYSBjb250ZXh0LCBpZiBhdmFpbGFibGVcblxuICAgICAgdmFyIGNvbnRleHRWYWx1ZSA9IHVzZUNvbnRleHQoQ29udGV4dFRvVXNlKTsgLy8gVGhlIHN0b3JlIF9tdXN0XyBleGlzdCBhcyBlaXRoZXIgYSBwcm9wIG9yIGluIGNvbnRleHQuXG4gICAgICAvLyBXZSdsbCBjaGVjayB0byBzZWUgaWYgaXQgX2xvb2tzXyBsaWtlIGEgUmVkdXggc3RvcmUgZmlyc3QuXG4gICAgICAvLyBUaGlzIGFsbG93cyB1cyB0byBwYXNzIHRocm91Z2ggYSBgc3RvcmVgIHByb3AgdGhhdCBpcyBqdXN0IGEgcGxhaW4gdmFsdWUuXG5cbiAgICAgIHZhciBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPSBCb29sZWFuKHByb3BzLnN0b3JlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmdldFN0YXRlKSAmJiBCb29sZWFuKHByb3BzLnN0b3JlLmRpc3BhdGNoKTtcbiAgICAgIHZhciBkaWRTdG9yZUNvbWVGcm9tQ29udGV4dCA9IEJvb2xlYW4oY29udGV4dFZhbHVlKSAmJiBCb29sZWFuKGNvbnRleHRWYWx1ZS5zdG9yZSk7XG4gICAgICBpbnZhcmlhbnQoZGlkU3RvcmVDb21lRnJvbVByb3BzIHx8IGRpZFN0b3JlQ29tZUZyb21Db250ZXh0LCBcIkNvdWxkIG5vdCBmaW5kIFxcXCJzdG9yZVxcXCIgaW4gdGhlIGNvbnRleHQgb2YgXCIgKyAoXCJcXFwiXCIgKyBkaXNwbGF5TmFtZSArIFwiXFxcIi4gRWl0aGVyIHdyYXAgdGhlIHJvb3QgY29tcG9uZW50IGluIGEgPFByb3ZpZGVyPiwgXCIpICsgXCJvciBwYXNzIGEgY3VzdG9tIFJlYWN0IGNvbnRleHQgcHJvdmlkZXIgdG8gPFByb3ZpZGVyPiBhbmQgdGhlIGNvcnJlc3BvbmRpbmcgXCIgKyAoXCJSZWFjdCBjb250ZXh0IGNvbnN1bWVyIHRvIFwiICsgZGlzcGxheU5hbWUgKyBcIiBpbiBjb25uZWN0IG9wdGlvbnMuXCIpKTsgLy8gQmFzZWQgb24gdGhlIHByZXZpb3VzIGNoZWNrLCBvbmUgb2YgdGhlc2UgbXVzdCBiZSB0cnVlXG5cbiAgICAgIHZhciBzdG9yZSA9IGRpZFN0b3JlQ29tZUZyb21Qcm9wcyA/IHByb3BzLnN0b3JlIDogY29udGV4dFZhbHVlLnN0b3JlO1xuICAgICAgdmFyIGNoaWxkUHJvcHNTZWxlY3RvciA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBUaGUgY2hpbGQgcHJvcHMgc2VsZWN0b3IgbmVlZHMgdGhlIHN0b3JlIHJlZmVyZW5jZSBhcyBhbiBpbnB1dC5cbiAgICAgICAgLy8gUmUtY3JlYXRlIHRoaXMgc2VsZWN0b3Igd2hlbmV2ZXIgdGhlIHN0b3JlIGNoYW5nZXMuXG4gICAgICAgIHJldHVybiBjcmVhdGVDaGlsZFNlbGVjdG9yKHN0b3JlKTtcbiAgICAgIH0sIFtzdG9yZV0pO1xuXG4gICAgICB2YXIgX3VzZU1lbW8yID0gdXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm4gTk9fU1VCU0NSSVBUSU9OX0FSUkFZOyAvLyBUaGlzIFN1YnNjcmlwdGlvbidzIHNvdXJjZSBzaG91bGQgbWF0Y2ggd2hlcmUgc3RvcmUgY2FtZSBmcm9tOiBwcm9wcyB2cy4gY29udGV4dC4gQSBjb21wb25lbnRcbiAgICAgICAgLy8gY29ubmVjdGVkIHRvIHRoZSBzdG9yZSB2aWEgcHJvcHMgc2hvdWxkbid0IHVzZSBzdWJzY3JpcHRpb24gZnJvbSBjb250ZXh0LCBvciB2aWNlIHZlcnNhLlxuXG4gICAgICAgIHZhciBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBkaWRTdG9yZUNvbWVGcm9tUHJvcHMgPyBudWxsIDogY29udGV4dFZhbHVlLnN1YnNjcmlwdGlvbik7IC8vIGBub3RpZnlOZXN0ZWRTdWJzYCBpcyBkdXBsaWNhdGVkIHRvIGhhbmRsZSB0aGUgY2FzZSB3aGVyZSB0aGUgY29tcG9uZW50IGlzIHVubW91bnRlZCBpblxuICAgICAgICAvLyB0aGUgbWlkZGxlIG9mIHRoZSBub3RpZmljYXRpb24gbG9vcCwgd2hlcmUgYHN1YnNjcmlwdGlvbmAgd2lsbCB0aGVuIGJlIG51bGwuIFRoaXMgY2FuXG4gICAgICAgIC8vIHByb2JhYmx5IGJlIGF2b2lkZWQgaWYgU3Vic2NyaXB0aW9uJ3MgbGlzdGVuZXJzIGxvZ2ljIGlzIGNoYW5nZWQgdG8gbm90IGNhbGwgbGlzdGVuZXJzXG4gICAgICAgIC8vIHRoYXQgaGF2ZSBiZWVuIHVuc3Vic2NyaWJlZCBpbiB0aGUgIG1pZGRsZSBvZiB0aGUgbm90aWZpY2F0aW9uIGxvb3AuXG5cbiAgICAgICAgdmFyIG5vdGlmeU5lc3RlZFN1YnMgPSBzdWJzY3JpcHRpb24ubm90aWZ5TmVzdGVkU3Vicy5iaW5kKHN1YnNjcmlwdGlvbik7XG4gICAgICAgIHJldHVybiBbc3Vic2NyaXB0aW9uLCBub3RpZnlOZXN0ZWRTdWJzXTtcbiAgICAgIH0sIFtzdG9yZSwgZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWVdKSxcbiAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdXNlTWVtbzJbMF0sXG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicyA9IF91c2VNZW1vMlsxXTsgLy8gRGV0ZXJtaW5lIHdoYXQge3N0b3JlLCBzdWJzY3JpcHRpb259IHZhbHVlIHNob3VsZCBiZSBwdXQgaW50byBuZXN0ZWQgY29udGV4dCwgaWYgbmVjZXNzYXJ5LFxuICAgICAgLy8gYW5kIG1lbW9pemUgdGhhdCB2YWx1ZSB0byBhdm9pZCB1bm5lY2Vzc2FyeSBjb250ZXh0IHVwZGF0ZXMuXG5cblxuICAgICAgdmFyIG92ZXJyaWRkZW5Db250ZXh0VmFsdWUgPSB1c2VNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGRpZFN0b3JlQ29tZUZyb21Qcm9wcykge1xuICAgICAgICAgIC8vIFRoaXMgY29tcG9uZW50IGlzIGRpcmVjdGx5IHN1YnNjcmliZWQgdG8gYSBzdG9yZSBmcm9tIHByb3BzLlxuICAgICAgICAgIC8vIFdlIGRvbid0IHdhbnQgZGVzY2VuZGFudHMgcmVhZGluZyBmcm9tIHRoaXMgc3RvcmUgLSBwYXNzIGRvd24gd2hhdGV2ZXJcbiAgICAgICAgICAvLyB0aGUgZXhpc3RpbmcgY29udGV4dCB2YWx1ZSBpcyBmcm9tIHRoZSBuZWFyZXN0IGNvbm5lY3RlZCBhbmNlc3Rvci5cbiAgICAgICAgICByZXR1cm4gY29udGV4dFZhbHVlO1xuICAgICAgICB9IC8vIE90aGVyd2lzZSwgcHV0IHRoaXMgY29tcG9uZW50J3Mgc3Vic2NyaXB0aW9uIGluc3RhbmNlIGludG8gY29udGV4dCwgc28gdGhhdFxuICAgICAgICAvLyBjb25uZWN0ZWQgZGVzY2VuZGFudHMgd29uJ3QgdXBkYXRlIHVudGlsIGFmdGVyIHRoaXMgY29tcG9uZW50IGlzIGRvbmVcblxuXG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgY29udGV4dFZhbHVlLCB7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uOiBzdWJzY3JpcHRpb25cbiAgICAgICAgfSk7XG4gICAgICB9LCBbZGlkU3RvcmVDb21lRnJvbVByb3BzLCBjb250ZXh0VmFsdWUsIHN1YnNjcmlwdGlvbl0pOyAvLyBXZSBuZWVkIHRvIGZvcmNlIHRoaXMgd3JhcHBlciBjb21wb25lbnQgdG8gcmUtcmVuZGVyIHdoZW5ldmVyIGEgUmVkdXggc3RvcmUgdXBkYXRlXG4gICAgICAvLyBjYXVzZXMgYSBjaGFuZ2UgdG8gdGhlIGNhbGN1bGF0ZWQgY2hpbGQgY29tcG9uZW50IHByb3BzIChvciB3ZSBjYXVnaHQgYW4gZXJyb3IgaW4gbWFwU3RhdGUpXG5cbiAgICAgIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoc3RvcmVTdGF0ZVVwZGF0ZXNSZWR1Y2VyLCBFTVBUWV9BUlJBWSwgaW5pdFN0YXRlVXBkYXRlcyksXG4gICAgICAgICAgX3VzZVJlZHVjZXIkID0gX3VzZVJlZHVjZXJbMF0sXG4gICAgICAgICAgcHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCA9IF91c2VSZWR1Y2VyJFswXSxcbiAgICAgICAgICBmb3JjZUNvbXBvbmVudFVwZGF0ZURpc3BhdGNoID0gX3VzZVJlZHVjZXJbMV07IC8vIFByb3BhZ2F0ZSBhbnkgbWFwU3RhdGUvbWFwRGlzcGF0Y2ggZXJyb3JzIHVwd2FyZHNcblxuXG4gICAgICBpZiAocHJldmlvdXNTdGF0ZVVwZGF0ZVJlc3VsdCAmJiBwcmV2aW91c1N0YXRlVXBkYXRlUmVzdWx0LmVycm9yKSB7XG4gICAgICAgIHRocm93IHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQuZXJyb3I7XG4gICAgICB9IC8vIFNldCB1cCByZWZzIHRvIGNvb3JkaW5hdGUgdmFsdWVzIGJldHdlZW4gdGhlIHN1YnNjcmlwdGlvbiBlZmZlY3QgYW5kIHRoZSByZW5kZXIgbG9naWNcblxuXG4gICAgICB2YXIgbGFzdENoaWxkUHJvcHMgPSB1c2VSZWYoKTtcbiAgICAgIHZhciBsYXN0V3JhcHBlclByb3BzID0gdXNlUmVmKHdyYXBwZXJQcm9wcyk7XG4gICAgICB2YXIgY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZSA9IHVzZVJlZigpO1xuICAgICAgdmFyIHJlbmRlcklzU2NoZWR1bGVkID0gdXNlUmVmKGZhbHNlKTtcbiAgICAgIHZhciBhY3R1YWxDaGlsZFByb3BzID0gdXNlUHVyZU9ubHlNZW1vKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVHJpY2t5IGxvZ2ljIGhlcmU6XG4gICAgICAgIC8vIC0gVGhpcyByZW5kZXIgbWF5IGhhdmUgYmVlbiB0cmlnZ2VyZWQgYnkgYSBSZWR1eCBzdG9yZSB1cGRhdGUgdGhhdCBwcm9kdWNlZCBuZXcgY2hpbGQgcHJvcHNcbiAgICAgICAgLy8gLSBIb3dldmVyLCB3ZSBtYXkgaGF2ZSBnb3R0ZW4gbmV3IHdyYXBwZXIgcHJvcHMgYWZ0ZXIgdGhhdFxuICAgICAgICAvLyBJZiB3ZSBoYXZlIG5ldyBjaGlsZCBwcm9wcywgYW5kIHRoZSBzYW1lIHdyYXBwZXIgcHJvcHMsIHdlIGtub3cgd2Ugc2hvdWxkIHVzZSB0aGUgbmV3IGNoaWxkIHByb3BzIGFzLWlzLlxuICAgICAgICAvLyBCdXQsIGlmIHdlIGhhdmUgbmV3IHdyYXBwZXIgcHJvcHMsIHRob3NlIG1pZ2h0IGNoYW5nZSB0aGUgY2hpbGQgcHJvcHMsIHNvIHdlIGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhpbmdzLlxuICAgICAgICAvLyBTbywgd2UnbGwgdXNlIHRoZSBjaGlsZCBwcm9wcyBmcm9tIHN0b3JlIHVwZGF0ZSBvbmx5IGlmIHRoZSB3cmFwcGVyIHByb3BzIGFyZSB0aGUgc2FtZSBhcyBsYXN0IHRpbWUuXG4gICAgICAgIGlmIChjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgJiYgd3JhcHBlclByb3BzID09PSBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRQcm9wc0Zyb21TdG9yZVVwZGF0ZS5jdXJyZW50O1xuICAgICAgICB9IC8vIFRPRE8gV2UncmUgcmVhZGluZyB0aGUgc3RvcmUgZGlyZWN0bHkgaW4gcmVuZGVyKCkgaGVyZS4gQmFkIGlkZWE/XG4gICAgICAgIC8vIFRoaXMgd2lsbCBsaWtlbHkgY2F1c2UgQmFkIFRoaW5ncyAoVE0pIHRvIGhhcHBlbiBpbiBDb25jdXJyZW50IE1vZGUuXG4gICAgICAgIC8vIE5vdGUgdGhhdCB3ZSBkbyB0aGlzIGJlY2F1c2Ugb24gcmVuZGVycyBfbm90XyBjYXVzZWQgYnkgc3RvcmUgdXBkYXRlcywgd2UgbmVlZCB0aGUgbGF0ZXN0IHN0b3JlIHN0YXRlXG4gICAgICAgIC8vIHRvIGRldGVybWluZSB3aGF0IHRoZSBjaGlsZCBwcm9wcyBzaG91bGQgYmUuXG5cblxuICAgICAgICByZXR1cm4gY2hpbGRQcm9wc1NlbGVjdG9yKHN0b3JlLmdldFN0YXRlKCksIHdyYXBwZXJQcm9wcyk7XG4gICAgICB9LCBbc3RvcmUsIHByZXZpb3VzU3RhdGVVcGRhdGVSZXN1bHQsIHdyYXBwZXJQcm9wc10pOyAvLyBXZSBuZWVkIHRoaXMgdG8gZXhlY3V0ZSBzeW5jaHJvbm91c2x5IGV2ZXJ5IHRpbWUgd2UgcmUtcmVuZGVyLiBIb3dldmVyLCBSZWFjdCB3YXJuc1xuICAgICAgLy8gYWJvdXQgdXNlTGF5b3V0RWZmZWN0IGluIFNTUiwgc28gd2UgdHJ5IHRvIGRldGVjdCBlbnZpcm9ubWVudCBhbmQgZmFsbCBiYWNrIHRvXG4gICAgICAvLyBqdXN0IHVzZUVmZmVjdCBpbnN0ZWFkIHRvIGF2b2lkIHRoZSB3YXJuaW5nLCBzaW5jZSBuZWl0aGVyIHdpbGwgcnVuIGFueXdheS5cblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFdlIHdhbnQgdG8gY2FwdHVyZSB0aGUgd3JhcHBlciBwcm9wcyBhbmQgY2hpbGQgcHJvcHMgd2UgdXNlZCBmb3IgbGF0ZXIgY29tcGFyaXNvbnNcbiAgICAgICAgbGFzdFdyYXBwZXJQcm9wcy5jdXJyZW50ID0gd3JhcHBlclByb3BzO1xuICAgICAgICBsYXN0Q2hpbGRQcm9wcy5jdXJyZW50ID0gYWN0dWFsQ2hpbGRQcm9wcztcbiAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IGZhbHNlOyAvLyBJZiB0aGUgcmVuZGVyIHdhcyBmcm9tIGEgc3RvcmUgdXBkYXRlLCBjbGVhciBvdXQgdGhhdCByZWZlcmVuY2UgYW5kIGNhc2NhZGUgdGhlIHN1YnNjcmliZXIgdXBkYXRlXG5cbiAgICAgICAgaWYgKGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCkge1xuICAgICAgICAgIGNoaWxkUHJvcHNGcm9tU3RvcmVVcGRhdGUuY3VycmVudCA9IG51bGw7XG4gICAgICAgICAgbm90aWZ5TmVzdGVkU3VicygpO1xuICAgICAgICB9XG4gICAgICB9KTsgLy8gT3VyIHJlLXN1YnNjcmliZSBsb2dpYyBvbmx5IHJ1bnMgd2hlbiB0aGUgc3RvcmUvc3Vic2NyaXB0aW9uIHNldHVwIGNoYW5nZXNcblxuICAgICAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIElmIHdlJ3JlIG5vdCBzdWJzY3JpYmVkIHRvIHRoZSBzdG9yZSwgbm90aGluZyB0byBkbyBoZXJlXG4gICAgICAgIGlmICghc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSByZXR1cm47IC8vIENhcHR1cmUgdmFsdWVzIGZvciBjaGVja2luZyBpZiBhbmQgd2hlbiB0aGlzIGNvbXBvbmVudCB1bm1vdW50c1xuXG4gICAgICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuICAgICAgICB2YXIgbGFzdFRocm93bkVycm9yID0gbnVsbDsgLy8gV2UnbGwgcnVuIHRoaXMgY2FsbGJhY2sgZXZlcnkgdGltZSBhIHN0b3JlIHN1YnNjcmlwdGlvbiB1cGRhdGUgcHJvcGFnYXRlcyB0byB0aGlzIGNvbXBvbmVudFxuXG4gICAgICAgIHZhciBjaGVja0ZvclVwZGF0ZXMgPSBmdW5jdGlvbiBjaGVja0ZvclVwZGF0ZXMoKSB7XG4gICAgICAgICAgaWYgKGRpZFVuc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICAvLyBEb24ndCBydW4gc3RhbGUgbGlzdGVuZXJzLlxuICAgICAgICAgICAgLy8gUmVkdXggZG9lc24ndCBndWFyYW50ZWUgdW5zdWJzY3JpcHRpb25zIGhhcHBlbiB1bnRpbCBuZXh0IGRpc3BhdGNoLlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBsYXRlc3RTdG9yZVN0YXRlID0gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgICAgICAgICB2YXIgbmV3Q2hpbGRQcm9wcywgZXJyb3I7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQWN0dWFsbHkgcnVuIHRoZSBzZWxlY3RvciB3aXRoIHRoZSBtb3N0IHJlY2VudCBzdG9yZSBzdGF0ZSBhbmQgd3JhcHBlciBwcm9wc1xuICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHdoYXQgdGhlIGNoaWxkIHByb3BzIHNob3VsZCBiZVxuICAgICAgICAgICAgbmV3Q2hpbGRQcm9wcyA9IGNoaWxkUHJvcHNTZWxlY3RvcihsYXRlc3RTdG9yZVN0YXRlLCBsYXN0V3JhcHBlclByb3BzLmN1cnJlbnQpO1xuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGVycm9yID0gZTtcbiAgICAgICAgICAgIGxhc3RUaHJvd25FcnJvciA9IGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgbGFzdFRocm93bkVycm9yID0gbnVsbDtcbiAgICAgICAgICB9IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBoYXZlbid0IGNoYW5nZWQsIG5vdGhpbmcgdG8gZG8gaGVyZSAtIGNhc2NhZGUgdGhlIHN1YnNjcmlwdGlvbiB1cGRhdGVcblxuXG4gICAgICAgICAgaWYgKG5ld0NoaWxkUHJvcHMgPT09IGxhc3RDaGlsZFByb3BzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGlmICghcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCkge1xuICAgICAgICAgICAgICBub3RpZnlOZXN0ZWRTdWJzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIFNhdmUgcmVmZXJlbmNlcyB0byB0aGUgbmV3IGNoaWxkIHByb3BzLiAgTm90ZSB0aGF0IHdlIHRyYWNrIHRoZSBcImNoaWxkIHByb3BzIGZyb20gc3RvcmUgdXBkYXRlXCJcbiAgICAgICAgICAgIC8vIGFzIGEgcmVmIGluc3RlYWQgb2YgYSB1c2VTdGF0ZS91c2VSZWR1Y2VyIGJlY2F1c2Ugd2UgbmVlZCBhIHdheSB0byBkZXRlcm1pbmUgaWYgdGhhdCB2YWx1ZSBoYXNcbiAgICAgICAgICAgIC8vIGJlZW4gcHJvY2Vzc2VkLiAgSWYgdGhpcyB3ZW50IGludG8gdXNlU3RhdGUvdXNlUmVkdWNlciwgd2UgY291bGRuJ3QgY2xlYXIgb3V0IHRoZSB2YWx1ZSB3aXRob3V0XG4gICAgICAgICAgICAvLyBmb3JjaW5nIGFub3RoZXIgcmUtcmVuZGVyLCB3aGljaCB3ZSBkb24ndCB3YW50LlxuICAgICAgICAgICAgbGFzdENoaWxkUHJvcHMuY3VycmVudCA9IG5ld0NoaWxkUHJvcHM7XG4gICAgICAgICAgICBjaGlsZFByb3BzRnJvbVN0b3JlVXBkYXRlLmN1cnJlbnQgPSBuZXdDaGlsZFByb3BzO1xuICAgICAgICAgICAgcmVuZGVySXNTY2hlZHVsZWQuY3VycmVudCA9IHRydWU7IC8vIElmIHRoZSBjaGlsZCBwcm9wcyBfZGlkXyBjaGFuZ2UgKG9yIHdlIGNhdWdodCBhbiBlcnJvciksIHRoaXMgd3JhcHBlciBjb21wb25lbnQgbmVlZHMgdG8gcmUtcmVuZGVyXG5cbiAgICAgICAgICAgIGZvcmNlQ29tcG9uZW50VXBkYXRlRGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnU1RPUkVfVVBEQVRFRCcsXG4gICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBlcnJvcjogZXJyb3JcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9OyAvLyBBY3R1YWxseSBzdWJzY3JpYmUgdG8gdGhlIG5lYXJlc3QgY29ubmVjdGVkIGFuY2VzdG9yIChvciBzdG9yZSlcblxuXG4gICAgICAgIHN1YnNjcmlwdGlvbi5vblN0YXRlQ2hhbmdlID0gY2hlY2tGb3JVcGRhdGVzO1xuICAgICAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7IC8vIFB1bGwgZGF0YSBmcm9tIHRoZSBzdG9yZSBhZnRlciBmaXJzdCByZW5kZXIgaW4gY2FzZSB0aGUgc3RvcmUgaGFzXG4gICAgICAgIC8vIGNoYW5nZWQgc2luY2Ugd2UgYmVnYW4uXG5cbiAgICAgICAgY2hlY2tGb3JVcGRhdGVzKCk7XG5cbiAgICAgICAgdmFyIHVuc3Vic2NyaWJlV3JhcHBlciA9IGZ1bmN0aW9uIHVuc3Vic2NyaWJlV3JhcHBlcigpIHtcbiAgICAgICAgICBkaWRVbnN1YnNjcmliZSA9IHRydWU7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uLnRyeVVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgc3Vic2NyaXB0aW9uLm9uU3RhdGVDaGFuZ2UgPSBudWxsO1xuXG4gICAgICAgICAgaWYgKGxhc3RUaHJvd25FcnJvcikge1xuICAgICAgICAgICAgLy8gSXQncyBwb3NzaWJsZSB0aGF0IHdlIGNhdWdodCBhbiBlcnJvciBkdWUgdG8gYSBiYWQgbWFwU3RhdGUgZnVuY3Rpb24sIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIHBhcmVudCByZS1yZW5kZXJlZCB3aXRob3V0IHRoaXMgY29tcG9uZW50IGFuZCB3ZSdyZSBhYm91dCB0byB1bm1vdW50LlxuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGRuJ3QgaGFwcGVuIGFzIGxvbmcgYXMgd2UgZG8gdG9wLWRvd24gc3Vic2NyaXB0aW9ucyBjb3JyZWN0bHksIGJ1dFxuICAgICAgICAgICAgLy8gaWYgd2UgZXZlciBkbyB0aG9zZSB3cm9uZywgdGhpcyB0aHJvdyB3aWxsIHN1cmZhY2UgdGhlIGVycm9yIGluIG91ciB0ZXN0cy5cbiAgICAgICAgICAgIC8vIEluIHRoYXQgY2FzZSwgdGhyb3cgdGhlIGVycm9yIGZyb20gaGVyZSBzbyBpdCBkb2Vzbid0IGdldCBsb3N0LlxuICAgICAgICAgICAgdGhyb3cgbGFzdFRocm93bkVycm9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gdW5zdWJzY3JpYmVXcmFwcGVyO1xuICAgICAgfSwgW3N0b3JlLCBzdWJzY3JpcHRpb24sIGNoaWxkUHJvcHNTZWxlY3Rvcl0pOyAvLyBOb3cgdGhhdCBhbGwgdGhhdCdzIGRvbmUsIHdlIGNhbiBmaW5hbGx5IHRyeSB0byBhY3R1YWxseSByZW5kZXIgdGhlIGNoaWxkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIG1lbW9pemUgdGhlIGVsZW1lbnRzIGZvciB0aGUgcmVuZGVyZWQgY2hpbGQgY29tcG9uZW50IGFzIGFuIG9wdGltaXphdGlvbi5cblxuICAgICAgdmFyIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChXcmFwcGVkQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgYWN0dWFsQ2hpbGRQcm9wcywge1xuICAgICAgICAgIHJlZjogZm9yd2FyZGVkUmVmXG4gICAgICAgIH0pKTtcbiAgICAgIH0sIFtmb3J3YXJkZWRSZWYsIFdyYXBwZWRDb21wb25lbnQsIGFjdHVhbENoaWxkUHJvcHNdKTsgLy8gSWYgUmVhY3Qgc2VlcyB0aGUgZXhhY3Qgc2FtZSBlbGVtZW50IHJlZmVyZW5jZSBhcyBsYXN0IHRpbWUsIGl0IGJhaWxzIG91dCBvZiByZS1yZW5kZXJpbmdcbiAgICAgIC8vIHRoYXQgY2hpbGQsIHNhbWUgYXMgaWYgaXQgd2FzIHdyYXBwZWQgaW4gUmVhY3QubWVtbygpIG9yIHJldHVybmVkIGZhbHNlIGZyb20gc2hvdWxkQ29tcG9uZW50VXBkYXRlLlxuXG4gICAgICB2YXIgcmVuZGVyZWRDaGlsZCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoc2hvdWxkSGFuZGxlU3RhdGVDaGFuZ2VzKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBjb21wb25lbnQgaXMgc3Vic2NyaWJlZCB0byBzdG9yZSB1cGRhdGVzLCB3ZSBuZWVkIHRvIHBhc3MgaXRzIG93blxuICAgICAgICAgIC8vIHN1YnNjcmlwdGlvbiBpbnN0YW5jZSBkb3duIHRvIG91ciBkZXNjZW5kYW50cy4gVGhhdCBtZWFucyByZW5kZXJpbmcgdGhlIHNhbWVcbiAgICAgICAgICAvLyBDb250ZXh0IGluc3RhbmNlLCBhbmQgcHV0dGluZyBhIGRpZmZlcmVudCB2YWx1ZSBpbnRvIHRoZSBjb250ZXh0LlxuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbnRleHRUb1VzZS5Qcm92aWRlciwge1xuICAgICAgICAgICAgdmFsdWU6IG92ZXJyaWRkZW5Db250ZXh0VmFsdWVcbiAgICAgICAgICB9LCByZW5kZXJlZFdyYXBwZWRDb21wb25lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIH0sIFtDb250ZXh0VG9Vc2UsIHJlbmRlcmVkV3JhcHBlZENvbXBvbmVudCwgb3ZlcnJpZGRlbkNvbnRleHRWYWx1ZV0pO1xuICAgICAgcmV0dXJuIHJlbmRlcmVkQ2hpbGQ7XG4gICAgfSAvLyBJZiB3ZSdyZSBpbiBcInB1cmVcIiBtb2RlLCBlbnN1cmUgb3VyIHdyYXBwZXIgY29tcG9uZW50IG9ubHkgcmUtcmVuZGVycyB3aGVuIGluY29taW5nIHByb3BzIGhhdmUgY2hhbmdlZC5cblxuXG4gICAgdmFyIENvbm5lY3QgPSBwdXJlID8gUmVhY3QubWVtbyhDb25uZWN0RnVuY3Rpb24pIDogQ29ubmVjdEZ1bmN0aW9uO1xuICAgIENvbm5lY3QuV3JhcHBlZENvbXBvbmVudCA9IFdyYXBwZWRDb21wb25lbnQ7XG4gICAgQ29ubmVjdC5kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuXG4gICAgaWYgKGZvcndhcmRSZWYpIHtcbiAgICAgIHZhciBmb3J3YXJkZWQgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIGZvcndhcmRDb25uZWN0UmVmKHByb3BzLCByZWYpIHtcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoQ29ubmVjdCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgICAgICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgICAgICAgfSkpO1xuICAgICAgfSk7XG4gICAgICBmb3J3YXJkZWQuZGlzcGxheU5hbWUgPSBkaXNwbGF5TmFtZTtcbiAgICAgIGZvcndhcmRlZC5XcmFwcGVkQ29tcG9uZW50ID0gV3JhcHBlZENvbXBvbmVudDtcbiAgICAgIHJldHVybiBob2lzdFN0YXRpY3MoZm9yd2FyZGVkLCBXcmFwcGVkQ29tcG9uZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKENvbm5lY3QsIFdyYXBwZWRDb21wb25lbnQpO1xuICB9O1xufSIsInZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG5mdW5jdGlvbiBpcyh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIHggIT09IDAgfHwgeSAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHggIT09IHggJiYgeSAhPT0geTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQSwgb2JqQikge1xuICBpZiAoaXMob2JqQSwgb2JqQikpIHJldHVybiB0cnVlO1xuXG4gIGlmICh0eXBlb2Ygb2JqQSAhPT0gJ29iamVjdCcgfHwgb2JqQSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2JqQiAhPT0gJ29iamVjdCcgfHwgb2JqQiA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBrZXlzQSA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIga2V5c0IgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzQS5sZW5ndGg7IGkrKykge1xuICAgIGlmICghaGFzT3duLmNhbGwob2JqQiwga2V5c0FbaV0pIHx8ICFpcyhvYmpBW2tleXNBW2ldXSwgb2JqQltrZXlzQVtpXV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59IiwiLyoqXHJcbiAqIEBwYXJhbSB7YW55fSBvYmogVGhlIG9iamVjdCB0byBpbnNwZWN0LlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYXJndW1lbnQgYXBwZWFycyB0byBiZSBhIHBsYWluIG9iamVjdC5cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gIHZhciBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopO1xuICBpZiAocHJvdG8gPT09IG51bGwpIHJldHVybiB0cnVlO1xuICB2YXIgYmFzZVByb3RvID0gcHJvdG87XG5cbiAgd2hpbGUgKE9iamVjdC5nZXRQcm90b3R5cGVPZihiYXNlUHJvdG8pICE9PSBudWxsKSB7XG4gICAgYmFzZVByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKGJhc2VQcm90byk7XG4gIH1cblxuICByZXR1cm4gcHJvdG8gPT09IGJhc2VQcm90bztcbn0iLCIvKipcclxuICogUHJpbnRzIGEgd2FybmluZyBpbiB0aGUgY29uc29sZSBpZiBpdCBleGlzdHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXNzYWdlIFRoZSB3YXJuaW5nIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHt2b2lkfVxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG4gIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGNvbnNvbGUuZXJyb3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICB9XG4gIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IGlmIHlvdSBlbmFibGVcbiAgICAvLyBcImJyZWFrIG9uIGFsbCBleGNlcHRpb25zXCIgaW4geW91ciBjb25zb2xlLFxuICAgIC8vIGl0IHdvdWxkIHBhdXNlIHRoZSBleGVjdXRpb24gYXQgdGhpcyBsaW5lLlxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1lbXB0eSAqL1xuICB9IGNhdGNoIChlKSB7fVxuICAvKiBlc2xpbnQtZW5hYmxlIG5vLWVtcHR5ICovXG5cbn0iLCJpbXBvcnQgaXNQbGFpbk9iamVjdCBmcm9tICcuL2lzUGxhaW5PYmplY3QnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi93YXJuaW5nJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZlcmlmeVBsYWluT2JqZWN0KHZhbHVlLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSkge1xuICBpZiAoIWlzUGxhaW5PYmplY3QodmFsdWUpKSB7XG4gICAgd2FybmluZyhtZXRob2ROYW1lICsgXCIoKSBpbiBcIiArIGRpc3BsYXlOYW1lICsgXCIgbXVzdCByZXR1cm4gYSBwbGFpbiBvYmplY3QuIEluc3RlYWQgcmVjZWl2ZWQgXCIgKyB2YWx1ZSArIFwiLlwiKTtcbiAgfVxufSIsImltcG9ydCB2ZXJpZnlQbGFpbk9iamVjdCBmcm9tICcuLi91dGlscy92ZXJpZnlQbGFpbk9iamVjdCc7XG5leHBvcnQgZnVuY3Rpb24gd3JhcE1hcFRvUHJvcHNDb25zdGFudChnZXRDb25zdGFudCkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdENvbnN0YW50U2VsZWN0b3IoZGlzcGF0Y2gsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29uc3RhbnQgPSBnZXRDb25zdGFudChkaXNwYXRjaCwgb3B0aW9ucyk7XG5cbiAgICBmdW5jdGlvbiBjb25zdGFudFNlbGVjdG9yKCkge1xuICAgICAgcmV0dXJuIGNvbnN0YW50O1xuICAgIH1cblxuICAgIGNvbnN0YW50U2VsZWN0b3IuZGVwZW5kc09uT3duUHJvcHMgPSBmYWxzZTtcbiAgICByZXR1cm4gY29uc3RhbnRTZWxlY3RvcjtcbiAgfTtcbn0gLy8gZGVwZW5kc09uT3duUHJvcHMgaXMgdXNlZCBieSBjcmVhdGVNYXBUb1Byb3BzUHJveHkgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdG8gcGFzcyBwcm9wcyBhcyBhcmdzXG4vLyB0byB0aGUgbWFwVG9Qcm9wcyBmdW5jdGlvbiBiZWluZyB3cmFwcGVkLiBJdCBpcyBhbHNvIHVzZWQgYnkgbWFrZVB1cmVQcm9wc1NlbGVjdG9yIHRvIGRldGVybWluZVxuLy8gd2hldGhlciBtYXBUb1Byb3BzIG5lZWRzIHRvIGJlIGludm9rZWQgd2hlbiBwcm9wcyBoYXZlIGNoYW5nZWQuXG4vL1xuLy8gQSBsZW5ndGggb2Ygb25lIHNpZ25hbHMgdGhhdCBtYXBUb1Byb3BzIGRvZXMgbm90IGRlcGVuZCBvbiBwcm9wcyBmcm9tIHRoZSBwYXJlbnQgY29tcG9uZW50LlxuLy8gQSBsZW5ndGggb2YgemVybyBpcyBhc3N1bWVkIHRvIG1lYW4gbWFwVG9Qcm9wcyBpcyBnZXR0aW5nIGFyZ3MgdmlhIGFyZ3VtZW50cyBvciAuLi5hcmdzIGFuZFxuLy8gdGhlcmVmb3JlIG5vdCByZXBvcnRpbmcgaXRzIGxlbmd0aCBhY2N1cmF0ZWx5Li5cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpIHtcbiAgcmV0dXJuIG1hcFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMgIT09IG51bGwgJiYgbWFwVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcyAhPT0gdW5kZWZpbmVkID8gQm9vbGVhbihtYXBUb1Byb3BzLmRlcGVuZHNPbk93blByb3BzKSA6IG1hcFRvUHJvcHMubGVuZ3RoICE9PSAxO1xufSAvLyBVc2VkIGJ5IHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uIGFuZCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbixcbi8vIHRoaXMgZnVuY3Rpb24gd3JhcHMgbWFwVG9Qcm9wcyBpbiBhIHByb3h5IGZ1bmN0aW9uIHdoaWNoIGRvZXMgc2V2ZXJhbCB0aGluZ3M6XG4vL1xuLy8gICogRGV0ZWN0cyB3aGV0aGVyIHRoZSBtYXBUb1Byb3BzIGZ1bmN0aW9uIGJlaW5nIGNhbGxlZCBkZXBlbmRzIG9uIHByb3BzLCB3aGljaFxuLy8gICAgaXMgdXNlZCBieSBzZWxlY3RvckZhY3RvcnkgdG8gZGVjaWRlIGlmIGl0IHNob3VsZCByZWludm9rZSBvbiBwcm9wcyBjaGFuZ2VzLlxuLy9cbi8vICAqIE9uIGZpcnN0IGNhbGwsIGhhbmRsZXMgbWFwVG9Qcm9wcyBpZiByZXR1cm5zIGFub3RoZXIgZnVuY3Rpb24sIGFuZCB0cmVhdHMgdGhhdFxuLy8gICAgbmV3IGZ1bmN0aW9uIGFzIHRoZSB0cnVlIG1hcFRvUHJvcHMgZm9yIHN1YnNlcXVlbnQgY2FsbHMuXG4vL1xuLy8gICogT24gZmlyc3QgY2FsbCwgdmVyaWZpZXMgdGhlIGZpcnN0IHJlc3VsdCBpcyBhIHBsYWluIG9iamVjdCwgaW4gb3JkZXIgdG8gd2FyblxuLy8gICAgdGhlIGRldmVsb3BlciB0aGF0IHRoZWlyIG1hcFRvUHJvcHMgZnVuY3Rpb24gaXMgbm90IHJldHVybmluZyBhIHZhbGlkIHJlc3VsdC5cbi8vXG5cbmV4cG9ydCBmdW5jdGlvbiB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwVG9Qcm9wcywgbWV0aG9kTmFtZSkge1xuICByZXR1cm4gZnVuY3Rpb24gaW5pdFByb3h5U2VsZWN0b3IoZGlzcGF0Y2gsIF9yZWYpIHtcbiAgICB2YXIgZGlzcGxheU5hbWUgPSBfcmVmLmRpc3BsYXlOYW1lO1xuXG4gICAgdmFyIHByb3h5ID0gZnVuY3Rpb24gbWFwVG9Qcm9wc1Byb3h5KHN0YXRlT3JEaXNwYXRjaCwgb3duUHJvcHMpIHtcbiAgICAgIHJldHVybiBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA/IHByb3h5Lm1hcFRvUHJvcHMoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykgOiBwcm94eS5tYXBUb1Byb3BzKHN0YXRlT3JEaXNwYXRjaCk7XG4gICAgfTsgLy8gYWxsb3cgZGV0ZWN0RmFjdG9yeUFuZFZlcmlmeSB0byBnZXQgb3duUHJvcHNcblxuXG4gICAgcHJveHkuZGVwZW5kc09uT3duUHJvcHMgPSB0cnVlO1xuXG4gICAgcHJveHkubWFwVG9Qcm9wcyA9IGZ1bmN0aW9uIGRldGVjdEZhY3RvcnlBbmRWZXJpZnkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcykge1xuICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IG1hcFRvUHJvcHM7XG4gICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKG1hcFRvUHJvcHMpO1xuICAgICAgdmFyIHByb3BzID0gcHJveHkoc3RhdGVPckRpc3BhdGNoLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmICh0eXBlb2YgcHJvcHMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJveHkubWFwVG9Qcm9wcyA9IHByb3BzO1xuICAgICAgICBwcm94eS5kZXBlbmRzT25Pd25Qcm9wcyA9IGdldERlcGVuZHNPbk93blByb3BzKHByb3BzKTtcbiAgICAgICAgcHJvcHMgPSBwcm94eShzdGF0ZU9yRGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHZlcmlmeVBsYWluT2JqZWN0KHByb3BzLCBkaXNwbGF5TmFtZSwgbWV0aG9kTmFtZSk7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfTtcblxuICAgIHJldHVybiBwcm94eTtcbiAgfTtcbn0iLCJpbXBvcnQgeyBiaW5kQWN0aW9uQ3JlYXRvcnMgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50LCB3cmFwTWFwVG9Qcm9wc0Z1bmMgfSBmcm9tICcuL3dyYXBNYXBUb1Byb3BzJztcbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNGdW5jdGlvbihtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYXBEaXNwYXRjaFRvUHJvcHMgPT09ICdmdW5jdGlvbicgPyB3cmFwTWFwVG9Qcm9wc0Z1bmMobWFwRGlzcGF0Y2hUb1Byb3BzLCAnbWFwRGlzcGF0Y2hUb1Byb3BzJykgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gd2hlbk1hcERpc3BhdGNoVG9Qcm9wc0lzTWlzc2luZyhtYXBEaXNwYXRjaFRvUHJvcHMpIHtcbiAgcmV0dXJuICFtYXBEaXNwYXRjaFRvUHJvcHMgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiB7XG4gICAgICBkaXNwYXRjaDogZGlzcGF0Y2hcbiAgICB9O1xuICB9KSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3QobWFwRGlzcGF0Y2hUb1Byb3BzKSB7XG4gIHJldHVybiBtYXBEaXNwYXRjaFRvUHJvcHMgJiYgdHlwZW9mIG1hcERpc3BhdGNoVG9Qcm9wcyA9PT0gJ29iamVjdCcgPyB3cmFwTWFwVG9Qcm9wc0NvbnN0YW50KGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIHJldHVybiBiaW5kQWN0aW9uQ3JlYXRvcnMobWFwRGlzcGF0Y2hUb1Byb3BzLCBkaXNwYXRjaCk7XG4gIH0pIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0IGRlZmF1bHQgW3doZW5NYXBEaXNwYXRjaFRvUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNNaXNzaW5nLCB3aGVuTWFwRGlzcGF0Y2hUb1Byb3BzSXNPYmplY3RdOyIsImltcG9ydCB7IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQsIHdyYXBNYXBUb1Byb3BzRnVuYyB9IGZyb20gJy4vd3JhcE1hcFRvUHJvcHMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc0Z1bmN0aW9uKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gdHlwZW9mIG1hcFN0YXRlVG9Qcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNYXBUb1Byb3BzRnVuYyhtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWFwU3RhdGVUb1Byb3BzSXNNaXNzaW5nKG1hcFN0YXRlVG9Qcm9wcykge1xuICByZXR1cm4gIW1hcFN0YXRlVG9Qcm9wcyA/IHdyYXBNYXBUb1Byb3BzQ29uc3RhbnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fTtcbiAgfSkgOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1hcFN0YXRlVG9Qcm9wc0lzRnVuY3Rpb24sIHdoZW5NYXBTdGF0ZVRvUHJvcHNJc01pc3NpbmddOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IHZlcmlmeVBsYWluT2JqZWN0IGZyb20gJy4uL3V0aWxzL3ZlcmlmeVBsYWluT2JqZWN0JztcbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0TWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcykge1xuICByZXR1cm4gX2V4dGVuZHMoe30sIG93blByb3BzLCB7fSwgc3RhdGVQcm9wcywge30sIGRpc3BhdGNoUHJvcHMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbml0TWVyZ2VQcm9wc1Byb3h5KGRpc3BhdGNoLCBfcmVmKSB7XG4gICAgdmFyIGRpc3BsYXlOYW1lID0gX3JlZi5kaXNwbGF5TmFtZSxcbiAgICAgICAgcHVyZSA9IF9yZWYucHVyZSxcbiAgICAgICAgYXJlTWVyZ2VkUHJvcHNFcXVhbCA9IF9yZWYuYXJlTWVyZ2VkUHJvcHNFcXVhbDtcbiAgICB2YXIgaGFzUnVuT25jZSA9IGZhbHNlO1xuICAgIHZhciBtZXJnZWRQcm9wcztcbiAgICByZXR1cm4gZnVuY3Rpb24gbWVyZ2VQcm9wc1Byb3h5KHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKSB7XG4gICAgICB2YXIgbmV4dE1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG5cbiAgICAgIGlmIChoYXNSdW5PbmNlKSB7XG4gICAgICAgIGlmICghcHVyZSB8fCAhYXJlTWVyZ2VkUHJvcHNFcXVhbChuZXh0TWVyZ2VkUHJvcHMsIG1lcmdlZFByb3BzKSkgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoYXNSdW5PbmNlID0gdHJ1ZTtcbiAgICAgICAgbWVyZ2VkUHJvcHMgPSBuZXh0TWVyZ2VkUHJvcHM7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB2ZXJpZnlQbGFpbk9iamVjdChtZXJnZWRQcm9wcywgZGlzcGxheU5hbWUsICdtZXJnZVByb3BzJyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgICB9O1xuICB9O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdoZW5NZXJnZVByb3BzSXNGdW5jdGlvbihtZXJnZVByb3BzKSB7XG4gIHJldHVybiB0eXBlb2YgbWVyZ2VQcm9wcyA9PT0gJ2Z1bmN0aW9uJyA/IHdyYXBNZXJnZVByb3BzRnVuYyhtZXJnZVByb3BzKSA6IHVuZGVmaW5lZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZChtZXJnZVByb3BzKSB7XG4gIHJldHVybiAhbWVyZ2VQcm9wcyA/IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVmYXVsdE1lcmdlUHJvcHM7XG4gIH0gOiB1bmRlZmluZWQ7XG59XG5leHBvcnQgZGVmYXVsdCBbd2hlbk1lcmdlUHJvcHNJc0Z1bmN0aW9uLCB3aGVuTWVyZ2VQcm9wc0lzT21pdHRlZF07IiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAnLi4vdXRpbHMvd2FybmluZyc7XG5cbmZ1bmN0aW9uIHZlcmlmeShzZWxlY3RvciwgbWV0aG9kTmFtZSwgZGlzcGxheU5hbWUpIHtcbiAgaWYgKCFzZWxlY3Rvcikge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlVuZXhwZWN0ZWQgdmFsdWUgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIGluIFwiICsgZGlzcGxheU5hbWUgKyBcIi5cIik7XG4gIH0gZWxzZSBpZiAobWV0aG9kTmFtZSA9PT0gJ21hcFN0YXRlVG9Qcm9wcycgfHwgbWV0aG9kTmFtZSA9PT0gJ21hcERpc3BhdGNoVG9Qcm9wcycpIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzZWxlY3RvciwgJ2RlcGVuZHNPbk93blByb3BzJykpIHtcbiAgICAgIHdhcm5pbmcoXCJUaGUgc2VsZWN0b3IgZm9yIFwiICsgbWV0aG9kTmFtZSArIFwiIG9mIFwiICsgZGlzcGxheU5hbWUgKyBcIiBkaWQgbm90IHNwZWNpZnkgYSB2YWx1ZSBmb3IgZGVwZW5kc09uT3duUHJvcHMuXCIpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2ZXJpZnlTdWJzZWxlY3RvcnMobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZlcmlmeShtYXBTdGF0ZVRvUHJvcHMsICdtYXBTdGF0ZVRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtYXBEaXNwYXRjaFRvUHJvcHMsICdtYXBEaXNwYXRjaFRvUHJvcHMnLCBkaXNwbGF5TmFtZSk7XG4gIHZlcmlmeShtZXJnZVByb3BzLCAnbWVyZ2VQcm9wcycsIGRpc3BsYXlOYW1lKTtcbn0iLCJpbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCB2ZXJpZnlTdWJzZWxlY3RvcnMgZnJvbSAnLi92ZXJpZnlTdWJzZWxlY3RvcnMnO1xuZXhwb3J0IGZ1bmN0aW9uIGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoKSB7XG4gIHJldHVybiBmdW5jdGlvbiBpbXB1cmVGaW5hbFByb3BzU2VsZWN0b3Ioc3RhdGUsIG93blByb3BzKSB7XG4gICAgcmV0dXJuIG1lcmdlUHJvcHMobWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyksIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpLCBvd25Qcm9wcyk7XG4gIH07XG59XG5leHBvcnQgZnVuY3Rpb24gcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBfcmVmKSB7XG4gIHZhciBhcmVTdGF0ZXNFcXVhbCA9IF9yZWYuYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsID0gX3JlZi5hcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsID0gX3JlZi5hcmVTdGF0ZVByb3BzRXF1YWw7XG4gIHZhciBoYXNSdW5BdExlYXN0T25jZSA9IGZhbHNlO1xuICB2YXIgc3RhdGU7XG4gIHZhciBvd25Qcm9wcztcbiAgdmFyIHN0YXRlUHJvcHM7XG4gIHZhciBkaXNwYXRjaFByb3BzO1xuICB2YXIgbWVyZ2VkUHJvcHM7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmlyc3RDYWxsKGZpcnN0U3RhdGUsIGZpcnN0T3duUHJvcHMpIHtcbiAgICBzdGF0ZSA9IGZpcnN0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBmaXJzdE93blByb3BzO1xuICAgIHN0YXRlUHJvcHMgPSBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUsIG93blByb3BzKTtcbiAgICBkaXNwYXRjaFByb3BzID0gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoLCBvd25Qcm9wcyk7XG4gICAgbWVyZ2VkUHJvcHMgPSBtZXJnZVByb3BzKHN0YXRlUHJvcHMsIGRpc3BhdGNoUHJvcHMsIG93blByb3BzKTtcbiAgICBoYXNSdW5BdExlYXN0T25jZSA9IHRydWU7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHNBbmROZXdTdGF0ZSgpIHtcbiAgICBzdGF0ZVByb3BzID0gbWFwU3RhdGVUb1Byb3BzKHN0YXRlLCBvd25Qcm9wcyk7XG4gICAgaWYgKG1hcERpc3BhdGNoVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgZGlzcGF0Y2hQcm9wcyA9IG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3duUHJvcHMpO1xuICAgIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmV3UHJvcHMoKSB7XG4gICAgaWYgKG1hcFN0YXRlVG9Qcm9wcy5kZXBlbmRzT25Pd25Qcm9wcykgc3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIGlmIChtYXBEaXNwYXRjaFRvUHJvcHMuZGVwZW5kc09uT3duUHJvcHMpIGRpc3BhdGNoUHJvcHMgPSBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gsIG93blByb3BzKTtcbiAgICBtZXJnZWRQcm9wcyA9IG1lcmdlUHJvcHMoc3RhdGVQcm9wcywgZGlzcGF0Y2hQcm9wcywgb3duUHJvcHMpO1xuICAgIHJldHVybiBtZXJnZWRQcm9wcztcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZU5ld1N0YXRlKCkge1xuICAgIHZhciBuZXh0U3RhdGVQcm9wcyA9IG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSwgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZVByb3BzQ2hhbmdlZCA9ICFhcmVTdGF0ZVByb3BzRXF1YWwobmV4dFN0YXRlUHJvcHMsIHN0YXRlUHJvcHMpO1xuICAgIHN0YXRlUHJvcHMgPSBuZXh0U3RhdGVQcm9wcztcbiAgICBpZiAoc3RhdGVQcm9wc0NoYW5nZWQpIG1lcmdlZFByb3BzID0gbWVyZ2VQcm9wcyhzdGF0ZVByb3BzLCBkaXNwYXRjaFByb3BzLCBvd25Qcm9wcyk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlU3Vic2VxdWVudENhbGxzKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSB7XG4gICAgdmFyIHByb3BzQ2hhbmdlZCA9ICFhcmVPd25Qcm9wc0VxdWFsKG5leHRPd25Qcm9wcywgb3duUHJvcHMpO1xuICAgIHZhciBzdGF0ZUNoYW5nZWQgPSAhYXJlU3RhdGVzRXF1YWwobmV4dFN0YXRlLCBzdGF0ZSk7XG4gICAgc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgb3duUHJvcHMgPSBuZXh0T3duUHJvcHM7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCAmJiBzdGF0ZUNoYW5nZWQpIHJldHVybiBoYW5kbGVOZXdQcm9wc0FuZE5ld1N0YXRlKCk7XG4gICAgaWYgKHByb3BzQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1Byb3BzKCk7XG4gICAgaWYgKHN0YXRlQ2hhbmdlZCkgcmV0dXJuIGhhbmRsZU5ld1N0YXRlKCk7XG4gICAgcmV0dXJuIG1lcmdlZFByb3BzO1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHB1cmVGaW5hbFByb3BzU2VsZWN0b3IobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIHtcbiAgICByZXR1cm4gaGFzUnVuQXRMZWFzdE9uY2UgPyBoYW5kbGVTdWJzZXF1ZW50Q2FsbHMobmV4dFN0YXRlLCBuZXh0T3duUHJvcHMpIDogaGFuZGxlRmlyc3RDYWxsKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKTtcbiAgfTtcbn0gLy8gVE9ETzogQWRkIG1vcmUgY29tbWVudHNcbi8vIElmIHB1cmUgaXMgdHJ1ZSwgdGhlIHNlbGVjdG9yIHJldHVybmVkIGJ5IHNlbGVjdG9yRmFjdG9yeSB3aWxsIG1lbW9pemUgaXRzIHJlc3VsdHMsXG4vLyBhbGxvd2luZyBjb25uZWN0QWR2YW5jZWQncyBzaG91bGRDb21wb25lbnRVcGRhdGUgdG8gcmV0dXJuIGZhbHNlIGlmIGZpbmFsXG4vLyBwcm9wcyBoYXZlIG5vdCBjaGFuZ2VkLiBJZiBmYWxzZSwgdGhlIHNlbGVjdG9yIHdpbGwgYWx3YXlzIHJldHVybiBhIG5ld1xuLy8gb2JqZWN0IGFuZCBzaG91bGRDb21wb25lbnRVcGRhdGUgd2lsbCBhbHdheXMgcmV0dXJuIHRydWUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbmFsUHJvcHNTZWxlY3RvckZhY3RvcnkoZGlzcGF0Y2gsIF9yZWYyKSB7XG4gIHZhciBpbml0TWFwU3RhdGVUb1Byb3BzID0gX3JlZjIuaW5pdE1hcFN0YXRlVG9Qcm9wcyxcbiAgICAgIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBfcmVmMi5pbml0TWFwRGlzcGF0Y2hUb1Byb3BzLFxuICAgICAgaW5pdE1lcmdlUHJvcHMgPSBfcmVmMi5pbml0TWVyZ2VQcm9wcyxcbiAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmMiwgW1wiaW5pdE1hcFN0YXRlVG9Qcm9wc1wiLCBcImluaXRNYXBEaXNwYXRjaFRvUHJvcHNcIiwgXCJpbml0TWVyZ2VQcm9wc1wiXSk7XG5cbiAgdmFyIG1hcFN0YXRlVG9Qcm9wcyA9IGluaXRNYXBTdGF0ZVRvUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuICB2YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCwgb3B0aW9ucyk7XG4gIHZhciBtZXJnZVByb3BzID0gaW5pdE1lcmdlUHJvcHMoZGlzcGF0Y2gsIG9wdGlvbnMpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdmVyaWZ5U3Vic2VsZWN0b3JzKG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtZXJnZVByb3BzLCBvcHRpb25zLmRpc3BsYXlOYW1lKTtcbiAgfVxuXG4gIHZhciBzZWxlY3RvckZhY3RvcnkgPSBvcHRpb25zLnB1cmUgPyBwdXJlRmluYWxQcm9wc1NlbGVjdG9yRmFjdG9yeSA6IGltcHVyZUZpbmFsUHJvcHNTZWxlY3RvckZhY3Rvcnk7XG4gIHJldHVybiBzZWxlY3RvckZhY3RvcnkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMsIG1lcmdlUHJvcHMsIGRpc3BhdGNoLCBvcHRpb25zKTtcbn0iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuLi9jb21wb25lbnRzL2Nvbm5lY3RBZHZhbmNlZCc7XG5pbXBvcnQgc2hhbGxvd0VxdWFsIGZyb20gJy4uL3V0aWxzL3NoYWxsb3dFcXVhbCc7XG5pbXBvcnQgZGVmYXVsdE1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcERpc3BhdGNoVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyBmcm9tICcuL21hcFN0YXRlVG9Qcm9wcyc7XG5pbXBvcnQgZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgZnJvbSAnLi9tZXJnZVByb3BzJztcbmltcG9ydCBkZWZhdWx0U2VsZWN0b3JGYWN0b3J5IGZyb20gJy4vc2VsZWN0b3JGYWN0b3J5Jztcbi8qXHJcbiAgY29ubmVjdCBpcyBhIGZhY2FkZSBvdmVyIGNvbm5lY3RBZHZhbmNlZC4gSXQgdHVybnMgaXRzIGFyZ3MgaW50byBhIGNvbXBhdGlibGVcclxuICBzZWxlY3RvckZhY3RvcnksIHdoaWNoIGhhcyB0aGUgc2lnbmF0dXJlOlxyXG5cclxuICAgIChkaXNwYXRjaCwgb3B0aW9ucykgPT4gKG5leHRTdGF0ZSwgbmV4dE93blByb3BzKSA9PiBuZXh0RmluYWxQcm9wc1xyXG4gIFxyXG4gIGNvbm5lY3QgcGFzc2VzIGl0cyBhcmdzIHRvIGNvbm5lY3RBZHZhbmNlZCBhcyBvcHRpb25zLCB3aGljaCB3aWxsIGluIHR1cm4gcGFzcyB0aGVtIHRvXHJcbiAgc2VsZWN0b3JGYWN0b3J5IGVhY2ggdGltZSBhIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIGlzIGluc3RhbnRpYXRlZCBvciBob3QgcmVsb2FkZWQuXHJcblxyXG4gIHNlbGVjdG9yRmFjdG9yeSByZXR1cm5zIGEgZmluYWwgcHJvcHMgc2VsZWN0b3IgZnJvbSBpdHMgbWFwU3RhdGVUb1Byb3BzLFxyXG4gIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcywgbWFwRGlzcGF0Y2hUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHNGYWN0b3JpZXMsIG1lcmdlUHJvcHMsXHJcbiAgbWVyZ2VQcm9wc0ZhY3RvcmllcywgYW5kIHB1cmUgYXJncy5cclxuXHJcbiAgVGhlIHJlc3VsdGluZyBmaW5hbCBwcm9wcyBzZWxlY3RvciBpcyBjYWxsZWQgYnkgdGhlIENvbm5lY3QgY29tcG9uZW50IGluc3RhbmNlIHdoZW5ldmVyXHJcbiAgaXQgcmVjZWl2ZXMgbmV3IHByb3BzIG9yIHN0b3JlIHN0YXRlLlxyXG4gKi9cblxuZnVuY3Rpb24gbWF0Y2goYXJnLCBmYWN0b3JpZXMsIG5hbWUpIHtcbiAgZm9yICh2YXIgaSA9IGZhY3Rvcmllcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIHZhciByZXN1bHQgPSBmYWN0b3JpZXNbaV0oYXJnKTtcbiAgICBpZiAocmVzdWx0KSByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCwgb3B0aW9ucykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgb2YgdHlwZSBcIiArIHR5cGVvZiBhcmcgKyBcIiBmb3IgXCIgKyBuYW1lICsgXCIgYXJndW1lbnQgd2hlbiBjb25uZWN0aW5nIGNvbXBvbmVudCBcIiArIG9wdGlvbnMud3JhcHBlZENvbXBvbmVudE5hbWUgKyBcIi5cIik7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdEVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGEgPT09IGI7XG59IC8vIGNyZWF0ZUNvbm5lY3Qgd2l0aCBkZWZhdWx0IGFyZ3MgYnVpbGRzIHRoZSAnb2ZmaWNpYWwnIGNvbm5lY3QgYmVoYXZpb3IuIENhbGxpbmcgaXQgd2l0aFxuLy8gZGlmZmVyZW50IG9wdGlvbnMgb3BlbnMgdXAgc29tZSB0ZXN0aW5nIGFuZCBleHRlbnNpYmlsaXR5IHNjZW5hcmlvc1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25uZWN0KF90ZW1wKSB7XG4gIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICBfcmVmJGNvbm5lY3RIT0MgPSBfcmVmLmNvbm5lY3RIT0MsXG4gICAgICBjb25uZWN0SE9DID0gX3JlZiRjb25uZWN0SE9DID09PSB2b2lkIDAgPyBjb25uZWN0QWR2YW5jZWQgOiBfcmVmJGNvbm5lY3RIT0MsXG4gICAgICBfcmVmJG1hcFN0YXRlVG9Qcm9wc0YgPSBfcmVmLm1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyxcbiAgICAgIG1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWFwU3RhdGVUb1Byb3BzRiA9PT0gdm9pZCAwID8gZGVmYXVsdE1hcFN0YXRlVG9Qcm9wc0ZhY3RvcmllcyA6IF9yZWYkbWFwU3RhdGVUb1Byb3BzRixcbiAgICAgIF9yZWYkbWFwRGlzcGF0Y2hUb1BybyA9IF9yZWYubWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzLFxuICAgICAgbWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzID0gX3JlZiRtYXBEaXNwYXRjaFRvUHJvID09PSB2b2lkIDAgPyBkZWZhdWx0TWFwRGlzcGF0Y2hUb1Byb3BzRmFjdG9yaWVzIDogX3JlZiRtYXBEaXNwYXRjaFRvUHJvLFxuICAgICAgX3JlZiRtZXJnZVByb3BzRmFjdG9yID0gX3JlZi5tZXJnZVByb3BzRmFjdG9yaWVzLFxuICAgICAgbWVyZ2VQcm9wc0ZhY3RvcmllcyA9IF9yZWYkbWVyZ2VQcm9wc0ZhY3RvciA9PT0gdm9pZCAwID8gZGVmYXVsdE1lcmdlUHJvcHNGYWN0b3JpZXMgOiBfcmVmJG1lcmdlUHJvcHNGYWN0b3IsXG4gICAgICBfcmVmJHNlbGVjdG9yRmFjdG9yeSA9IF9yZWYuc2VsZWN0b3JGYWN0b3J5LFxuICAgICAgc2VsZWN0b3JGYWN0b3J5ID0gX3JlZiRzZWxlY3RvckZhY3RvcnkgPT09IHZvaWQgMCA/IGRlZmF1bHRTZWxlY3RvckZhY3RvcnkgOiBfcmVmJHNlbGVjdG9yRmFjdG9yeTtcblxuICByZXR1cm4gZnVuY3Rpb24gY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcywgbWVyZ2VQcm9wcywgX3JlZjIpIHtcbiAgICBpZiAoX3JlZjIgPT09IHZvaWQgMCkge1xuICAgICAgX3JlZjIgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX3JlZjMgPSBfcmVmMixcbiAgICAgICAgX3JlZjMkcHVyZSA9IF9yZWYzLnB1cmUsXG4gICAgICAgIHB1cmUgPSBfcmVmMyRwdXJlID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZjMkcHVyZSxcbiAgICAgICAgX3JlZjMkYXJlU3RhdGVzRXF1YWwgPSBfcmVmMy5hcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgYXJlU3RhdGVzRXF1YWwgPSBfcmVmMyRhcmVTdGF0ZXNFcXVhbCA9PT0gdm9pZCAwID8gc3RyaWN0RXF1YWwgOiBfcmVmMyRhcmVTdGF0ZXNFcXVhbCxcbiAgICAgICAgX3JlZjMkYXJlT3duUHJvcHNFcXVhID0gX3JlZjMuYXJlT3duUHJvcHNFcXVhbCxcbiAgICAgICAgYXJlT3duUHJvcHNFcXVhbCA9IF9yZWYzJGFyZU93blByb3BzRXF1YSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlT3duUHJvcHNFcXVhLFxuICAgICAgICBfcmVmMyRhcmVTdGF0ZVByb3BzRXEgPSBfcmVmMy5hcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICAgIGFyZVN0YXRlUHJvcHNFcXVhbCA9IF9yZWYzJGFyZVN0YXRlUHJvcHNFcSA9PT0gdm9pZCAwID8gc2hhbGxvd0VxdWFsIDogX3JlZjMkYXJlU3RhdGVQcm9wc0VxLFxuICAgICAgICBfcmVmMyRhcmVNZXJnZWRQcm9wc0UgPSBfcmVmMy5hcmVNZXJnZWRQcm9wc0VxdWFsLFxuICAgICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsID0gX3JlZjMkYXJlTWVyZ2VkUHJvcHNFID09PSB2b2lkIDAgPyBzaGFsbG93RXF1YWwgOiBfcmVmMyRhcmVNZXJnZWRQcm9wc0UsXG4gICAgICAgIGV4dHJhT3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYzLCBbXCJwdXJlXCIsIFwiYXJlU3RhdGVzRXF1YWxcIiwgXCJhcmVPd25Qcm9wc0VxdWFsXCIsIFwiYXJlU3RhdGVQcm9wc0VxdWFsXCIsIFwiYXJlTWVyZ2VkUHJvcHNFcXVhbFwiXSk7XG5cbiAgICB2YXIgaW5pdE1hcFN0YXRlVG9Qcm9wcyA9IG1hdGNoKG1hcFN0YXRlVG9Qcm9wcywgbWFwU3RhdGVUb1Byb3BzRmFjdG9yaWVzLCAnbWFwU3RhdGVUb1Byb3BzJyk7XG4gICAgdmFyIGluaXRNYXBEaXNwYXRjaFRvUHJvcHMgPSBtYXRjaChtYXBEaXNwYXRjaFRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wc0ZhY3RvcmllcywgJ21hcERpc3BhdGNoVG9Qcm9wcycpO1xuICAgIHZhciBpbml0TWVyZ2VQcm9wcyA9IG1hdGNoKG1lcmdlUHJvcHMsIG1lcmdlUHJvcHNGYWN0b3JpZXMsICdtZXJnZVByb3BzJyk7XG4gICAgcmV0dXJuIGNvbm5lY3RIT0Moc2VsZWN0b3JGYWN0b3J5LCBfZXh0ZW5kcyh7XG4gICAgICAvLyB1c2VkIGluIGVycm9yIG1lc3NhZ2VzXG4gICAgICBtZXRob2ROYW1lOiAnY29ubmVjdCcsXG4gICAgICAvLyB1c2VkIHRvIGNvbXB1dGUgQ29ubmVjdCdzIGRpc3BsYXlOYW1lIGZyb20gdGhlIHdyYXBwZWQgY29tcG9uZW50J3MgZGlzcGxheU5hbWUuXG4gICAgICBnZXREaXNwbGF5TmFtZTogZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWUobmFtZSkge1xuICAgICAgICByZXR1cm4gXCJDb25uZWN0KFwiICsgbmFtZSArIFwiKVwiO1xuICAgICAgfSxcbiAgICAgIC8vIGlmIG1hcFN0YXRlVG9Qcm9wcyBpcyBmYWxzeSwgdGhlIENvbm5lY3QgY29tcG9uZW50IGRvZXNuJ3Qgc3Vic2NyaWJlIHRvIHN0b3JlIHN0YXRlIGNoYW5nZXNcbiAgICAgIHNob3VsZEhhbmRsZVN0YXRlQ2hhbmdlczogQm9vbGVhbihtYXBTdGF0ZVRvUHJvcHMpLFxuICAgICAgLy8gcGFzc2VkIHRocm91Z2ggdG8gc2VsZWN0b3JGYWN0b3J5XG4gICAgICBpbml0TWFwU3RhdGVUb1Byb3BzOiBpbml0TWFwU3RhdGVUb1Byb3BzLFxuICAgICAgaW5pdE1hcERpc3BhdGNoVG9Qcm9wczogaW5pdE1hcERpc3BhdGNoVG9Qcm9wcyxcbiAgICAgIGluaXRNZXJnZVByb3BzOiBpbml0TWVyZ2VQcm9wcyxcbiAgICAgIHB1cmU6IHB1cmUsXG4gICAgICBhcmVTdGF0ZXNFcXVhbDogYXJlU3RhdGVzRXF1YWwsXG4gICAgICBhcmVPd25Qcm9wc0VxdWFsOiBhcmVPd25Qcm9wc0VxdWFsLFxuICAgICAgYXJlU3RhdGVQcm9wc0VxdWFsOiBhcmVTdGF0ZVByb3BzRXF1YWwsXG4gICAgICBhcmVNZXJnZWRQcm9wc0VxdWFsOiBhcmVNZXJnZWRQcm9wc0VxdWFsXG4gICAgfSwgZXh0cmFPcHRpb25zKSk7XG4gIH07XG59XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb25uZWN0KCk7IiwiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0Jztcbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YC4gVGhpcyBpcyBhIGxvdy1sZXZlbFxyXG4gKiBob29rIHRoYXQgeW91IHNob3VsZCB1c3VhbGx5IG5vdCBuZWVkIHRvIGNhbGwgZGlyZWN0bHkuXHJcbiAqXHJcbiAqIEByZXR1cm5zIHthbnl9IHRoZSB2YWx1ZSBvZiB0aGUgYFJlYWN0UmVkdXhDb250ZXh0YFxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKlxyXG4gKiBpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbiAqIGltcG9ydCB7IHVzZVJlZHV4Q29udGV4dCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCB7IHN0b3JlIH0gPSB1c2VSZWR1eENvbnRleHQoKVxyXG4gKiAgIHJldHVybiA8ZGl2PntzdG9yZS5nZXRTdGF0ZSgpfTwvZGl2PlxyXG4gKiB9XHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUmVkdXhDb250ZXh0KCkge1xuICB2YXIgY29udGV4dFZhbHVlID0gdXNlQ29udGV4dChSZWFjdFJlZHV4Q29udGV4dCk7XG4gIGludmFyaWFudChjb250ZXh0VmFsdWUsICdjb3VsZCBub3QgZmluZCByZWFjdC1yZWR1eCBjb250ZXh0IHZhbHVlOyBwbGVhc2UgZW5zdXJlIHRoZSBjb21wb25lbnQgaXMgd3JhcHBlZCBpbiBhIDxQcm92aWRlcj4nKTtcbiAgcmV0dXJuIGNvbnRleHRWYWx1ZTtcbn0iLCJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RSZWR1eENvbnRleHQgfSBmcm9tICcuLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUmVkdXhDb250ZXh0IGFzIHVzZURlZmF1bHRSZWR1eENvbnRleHQgfSBmcm9tICcuL3VzZVJlZHV4Q29udGV4dCc7XG4vKipcclxuICogSG9vayBmYWN0b3J5LCB3aGljaCBjcmVhdGVzIGEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIGEgZ2l2ZW4gY29udGV4dC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gW2NvbnRleHQ9UmVhY3RSZWR1eENvbnRleHRdIENvbnRleHQgcGFzc2VkIHRvIHlvdXIgYDxQcm92aWRlcj5gLlxyXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IEEgYHVzZVN0b3JlYCBob29rIGJvdW5kIHRvIHRoZSBzcGVjaWZpZWQgY29udGV4dC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTdG9yZUhvb2soY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdm9pZCAwKSB7XG4gICAgY29udGV4dCA9IFJlYWN0UmVkdXhDb250ZXh0O1xuICB9XG5cbiAgdmFyIHVzZVJlZHV4Q29udGV4dCA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFJlZHV4Q29udGV4dCA6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdXNlQ29udGV4dChjb250ZXh0KTtcbiAgfTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVzZVN0b3JlKCkge1xuICAgIHZhciBfdXNlUmVkdXhDb250ZXh0ID0gdXNlUmVkdXhDb250ZXh0KCksXG4gICAgICAgIHN0b3JlID0gX3VzZVJlZHV4Q29udGV4dC5zdG9yZTtcblxuICAgIHJldHVybiBzdG9yZTtcbiAgfTtcbn1cbi8qKlxyXG4gKiBBIGhvb2sgdG8gYWNjZXNzIHRoZSByZWR1eCBzdG9yZS5cclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHJlZHV4IHN0b3JlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IEV4YW1wbGVDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3Qgc3RvcmUgPSB1c2VTdG9yZSgpXHJcbiAqICAgcmV0dXJuIDxkaXY+e3N0b3JlLmdldFN0YXRlKCl9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlU3RvcmUgPSBjcmVhdGVTdG9yZUhvb2soKTsiLCJpbXBvcnQgeyBSZWFjdFJlZHV4Q29udGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGV4dCc7XG5pbXBvcnQgeyB1c2VTdG9yZSBhcyB1c2VEZWZhdWx0U3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vdXNlU3RvcmUnO1xuLyoqXHJcbiAqIEhvb2sgZmFjdG9yeSwgd2hpY2ggY3JlYXRlcyBhIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byBhIGdpdmVuIGNvbnRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFtjb250ZXh0PVJlYWN0UmVkdXhDb250ZXh0XSBDb250ZXh0IHBhc3NlZCB0byB5b3VyIGA8UHJvdmlkZXI+YC5cclxuICogQHJldHVybnMge0Z1bmN0aW9ufSBBIGB1c2VEaXNwYXRjaGAgaG9vayBib3VuZCB0byB0aGUgc3BlY2lmaWVkIGNvbnRleHQuXHJcbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRGlzcGF0Y2hIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VTdG9yZSA9IGNvbnRleHQgPT09IFJlYWN0UmVkdXhDb250ZXh0ID8gdXNlRGVmYXVsdFN0b3JlIDogY3JlYXRlU3RvcmVIb29rKGNvbnRleHQpO1xuICByZXR1cm4gZnVuY3Rpb24gdXNlRGlzcGF0Y2goKSB7XG4gICAgdmFyIHN0b3JlID0gdXNlU3RvcmUoKTtcbiAgICByZXR1cm4gc3RvcmUuZGlzcGF0Y2g7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggYGRpc3BhdGNoYCBmdW5jdGlvbi5cclxuICpcclxuICogQHJldHVybnMge2FueXxmdW5jdGlvbn0gcmVkdXggc3RvcmUncyBgZGlzcGF0Y2hgIGZ1bmN0aW9uXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0J1xyXG4gKiBpbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG4gKlxyXG4gKiBleHBvcnQgY29uc3QgQ291bnRlckNvbXBvbmVudCA9ICh7IHZhbHVlIH0pID0+IHtcclxuICogICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICogICBjb25zdCBpbmNyZWFzZUNvdW50ZXIgPSB1c2VDYWxsYmFjaygoKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdpbmNyZWFzZS1jb3VudGVyJyB9KSwgW10pXHJcbiAqICAgcmV0dXJuIChcclxuICogICAgIDxkaXY+XHJcbiAqICAgICAgIDxzcGFuPnt2YWx1ZX08L3NwYW4+XHJcbiAqICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVhc2VDb3VudGVyfT5JbmNyZWFzZSBjb3VudGVyPC9idXR0b24+XHJcbiAqICAgICA8L2Rpdj5cclxuICogICApXHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlRGlzcGF0Y2ggPSBjcmVhdGVEaXNwYXRjaEhvb2soKTsiLCJpbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VSZWYsIHVzZU1lbW8sIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgeyB1c2VSZWR1eENvbnRleHQgYXMgdXNlRGVmYXVsdFJlZHV4Q29udGV4dCB9IGZyb20gJy4vdXNlUmVkdXhDb250ZXh0JztcbmltcG9ydCBTdWJzY3JpcHRpb24gZnJvbSAnLi4vdXRpbHMvU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICcuLi91dGlscy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZXh0JztcblxudmFyIHJlZkVxdWFsaXR5ID0gZnVuY3Rpb24gcmVmRXF1YWxpdHkoYSwgYikge1xuICByZXR1cm4gYSA9PT0gYjtcbn07XG5cbmZ1bmN0aW9uIHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yikge1xuICB2YXIgX3VzZVJlZHVjZXIgPSB1c2VSZWR1Y2VyKGZ1bmN0aW9uIChzKSB7XG4gICAgcmV0dXJuIHMgKyAxO1xuICB9LCAwKSxcbiAgICAgIGZvcmNlUmVuZGVyID0gX3VzZVJlZHVjZXJbMV07XG5cbiAgdmFyIHN1YnNjcmlwdGlvbiA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgU3Vic2NyaXB0aW9uKHN0b3JlLCBjb250ZXh0U3ViKTtcbiAgfSwgW3N0b3JlLCBjb250ZXh0U3ViXSk7XG4gIHZhciBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yID0gdXNlUmVmKCk7XG4gIHZhciBsYXRlc3RTZWxlY3RvciA9IHVzZVJlZigpO1xuICB2YXIgbGF0ZXN0U2VsZWN0ZWRTdGF0ZSA9IHVzZVJlZigpO1xuICB2YXIgc2VsZWN0ZWRTdGF0ZTtcblxuICB0cnkge1xuICAgIGlmIChzZWxlY3RvciAhPT0gbGF0ZXN0U2VsZWN0b3IuY3VycmVudCB8fCBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgIHNlbGVjdGVkU3RhdGUgPSBzZWxlY3RvcihzdG9yZS5nZXRTdGF0ZSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZWN0ZWRTdGF0ZSA9IGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudDtcbiAgICB9XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBlcnJvck1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHNlbGVjdGluZyB0aGUgc3RvcmUgc3RhdGU6IFwiICsgZXJyLm1lc3NhZ2UgKyBcIi5cIjtcblxuICAgIGlmIChsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQpIHtcbiAgICAgIGVycm9yTWVzc2FnZSArPSBcIlxcblRoZSBlcnJvciBtYXkgYmUgY29ycmVsYXRlZCB3aXRoIHRoaXMgcHJldmlvdXMgZXJyb3I6XFxuXCIgKyBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQuc3RhY2sgKyBcIlxcblxcbk9yaWdpbmFsIHN0YWNrIHRyYWNlOlwiO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcihlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgbGF0ZXN0U2VsZWN0b3IuY3VycmVudCA9IHNlbGVjdG9yO1xuICAgIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCA9IHNlbGVjdGVkU3RhdGU7XG4gICAgbGF0ZXN0U3Vic2NyaXB0aW9uQ2FsbGJhY2tFcnJvci5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICB9KTtcbiAgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY2hlY2tGb3JVcGRhdGVzKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdmFyIG5ld1NlbGVjdGVkU3RhdGUgPSBsYXRlc3RTZWxlY3Rvci5jdXJyZW50KHN0b3JlLmdldFN0YXRlKCkpO1xuXG4gICAgICAgIGlmIChlcXVhbGl0eUZuKG5ld1NlbGVjdGVkU3RhdGUsIGxhdGVzdFNlbGVjdGVkU3RhdGUuY3VycmVudCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsYXRlc3RTZWxlY3RlZFN0YXRlLmN1cnJlbnQgPSBuZXdTZWxlY3RlZFN0YXRlO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIHdlIGlnbm9yZSBhbGwgZXJyb3JzIGhlcmUsIHNpbmNlIHdoZW4gdGhlIGNvbXBvbmVudFxuICAgICAgICAvLyBpcyByZS1yZW5kZXJlZCwgdGhlIHNlbGVjdG9ycyBhcmUgY2FsbGVkIGFnYWluLCBhbmRcbiAgICAgICAgLy8gd2lsbCB0aHJvdyBhZ2FpbiwgaWYgbmVpdGhlciBwcm9wcyBub3Igc3RvcmUgc3RhdGVcbiAgICAgICAgLy8gY2hhbmdlZFxuICAgICAgICBsYXRlc3RTdWJzY3JpcHRpb25DYWxsYmFja0Vycm9yLmN1cnJlbnQgPSBlcnI7XG4gICAgICB9XG5cbiAgICAgIGZvcmNlUmVuZGVyKHt9KTtcbiAgICB9XG5cbiAgICBzdWJzY3JpcHRpb24ub25TdGF0ZUNoYW5nZSA9IGNoZWNrRm9yVXBkYXRlcztcbiAgICBzdWJzY3JpcHRpb24udHJ5U3Vic2NyaWJlKCk7XG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzdWJzY3JpcHRpb24udHJ5VW5zdWJzY3JpYmUoKTtcbiAgICB9O1xuICB9LCBbc3RvcmUsIHN1YnNjcmlwdGlvbl0pO1xuICByZXR1cm4gc2VsZWN0ZWRTdGF0ZTtcbn1cbi8qKlxyXG4gKiBIb29rIGZhY3RvcnksIHdoaWNoIGNyZWF0ZXMgYSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gYSBnaXZlbiBjb250ZXh0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbY29udGV4dD1SZWFjdFJlZHV4Q29udGV4dF0gQ29udGV4dCBwYXNzZWQgdG8geW91ciBgPFByb3ZpZGVyPmAuXHJcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gQSBgdXNlU2VsZWN0b3JgIGhvb2sgYm91bmQgdG8gdGhlIHNwZWNpZmllZCBjb250ZXh0LlxyXG4gKi9cblxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2VsZWN0b3JIb29rKGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkge1xuICAgIGNvbnRleHQgPSBSZWFjdFJlZHV4Q29udGV4dDtcbiAgfVxuXG4gIHZhciB1c2VSZWR1eENvbnRleHQgPSBjb250ZXh0ID09PSBSZWFjdFJlZHV4Q29udGV4dCA/IHVzZURlZmF1bHRSZWR1eENvbnRleHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHVzZUNvbnRleHQoY29udGV4dCk7XG4gIH07XG4gIHJldHVybiBmdW5jdGlvbiB1c2VTZWxlY3RvcihzZWxlY3RvciwgZXF1YWxpdHlGbikge1xuICAgIGlmIChlcXVhbGl0eUZuID09PSB2b2lkIDApIHtcbiAgICAgIGVxdWFsaXR5Rm4gPSByZWZFcXVhbGl0eTtcbiAgICB9XG5cbiAgICBpbnZhcmlhbnQoc2VsZWN0b3IsIFwiWW91IG11c3QgcGFzcyBhIHNlbGVjdG9yIHRvIHVzZVNlbGVjdG9yc1wiKTtcblxuICAgIHZhciBfdXNlUmVkdXhDb250ZXh0ID0gdXNlUmVkdXhDb250ZXh0KCksXG4gICAgICAgIHN0b3JlID0gX3VzZVJlZHV4Q29udGV4dC5zdG9yZSxcbiAgICAgICAgY29udGV4dFN1YiA9IF91c2VSZWR1eENvbnRleHQuc3Vic2NyaXB0aW9uO1xuXG4gICAgcmV0dXJuIHVzZVNlbGVjdG9yV2l0aFN0b3JlQW5kU3Vic2NyaXB0aW9uKHNlbGVjdG9yLCBlcXVhbGl0eUZuLCBzdG9yZSwgY29udGV4dFN1Yik7XG4gIH07XG59XG4vKipcclxuICogQSBob29rIHRvIGFjY2VzcyB0aGUgcmVkdXggc3RvcmUncyBzdGF0ZS4gVGhpcyBob29rIHRha2VzIGEgc2VsZWN0b3IgZnVuY3Rpb25cclxuICogYXMgYW4gYXJndW1lbnQuIFRoZSBzZWxlY3RvciBpcyBjYWxsZWQgd2l0aCB0aGUgc3RvcmUgc3RhdGUuXHJcbiAqXHJcbiAqIFRoaXMgaG9vayB0YWtlcyBhbiBvcHRpb25hbCBlcXVhbGl0eSBjb21wYXJpc29uIGZ1bmN0aW9uIGFzIHRoZSBzZWNvbmQgcGFyYW1ldGVyXHJcbiAqIHRoYXQgYWxsb3dzIHlvdSB0byBjdXN0b21pemUgdGhlIHdheSB0aGUgc2VsZWN0ZWQgc3RhdGUgaXMgY29tcGFyZWQgdG8gZGV0ZXJtaW5lXHJcbiAqIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBuZWVkcyB0byBiZSByZS1yZW5kZXJlZC5cclxuICpcclxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2VsZWN0b3IgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb249fSBlcXVhbGl0eUZuIHRoZSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHlcclxuICpcclxuICogQHJldHVybnMge2FueX0gdGhlIHNlbGVjdGVkIHN0YXRlXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqXHJcbiAqIGltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuICogaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tICdyZWFjdC1yZWR1eCdcclxuICpcclxuICogZXhwb3J0IGNvbnN0IENvdW50ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAqICAgY29uc3QgY291bnRlciA9IHVzZVNlbGVjdG9yKHN0YXRlID0+IHN0YXRlLmNvdW50ZXIpXHJcbiAqICAgcmV0dXJuIDxkaXY+e2NvdW50ZXJ9PC9kaXY+XHJcbiAqIH1cclxuICovXG5cbmV4cG9ydCB2YXIgdXNlU2VsZWN0b3IgPSBjcmVhdGVTZWxlY3Rvckhvb2soKTsiLCIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuZXhwb3J0IHsgdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXMgfSBmcm9tICdyZWFjdC1kb20nOyIsImltcG9ydCBQcm92aWRlciBmcm9tICcuL2NvbXBvbmVudHMvUHJvdmlkZXInO1xuaW1wb3J0IGNvbm5lY3RBZHZhbmNlZCBmcm9tICcuL2NvbXBvbmVudHMvY29ubmVjdEFkdmFuY2VkJztcbmltcG9ydCB7IFJlYWN0UmVkdXhDb250ZXh0IH0gZnJvbSAnLi9jb21wb25lbnRzL0NvbnRleHQnO1xuaW1wb3J0IGNvbm5lY3QgZnJvbSAnLi9jb25uZWN0L2Nvbm5lY3QnO1xuaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIGNyZWF0ZURpc3BhdGNoSG9vayB9IGZyb20gJy4vaG9va3MvdXNlRGlzcGF0Y2gnO1xuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIGNyZWF0ZVNlbGVjdG9ySG9vayB9IGZyb20gJy4vaG9va3MvdXNlU2VsZWN0b3InO1xuaW1wb3J0IHsgdXNlU3RvcmUsIGNyZWF0ZVN0b3JlSG9vayB9IGZyb20gJy4vaG9va3MvdXNlU3RvcmUnO1xuaW1wb3J0IHsgc2V0QmF0Y2ggfSBmcm9tICcuL3V0aWxzL2JhdGNoJztcbmltcG9ydCB7IHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzIGFzIGJhdGNoIH0gZnJvbSAnLi91dGlscy9yZWFjdEJhdGNoZWRVcGRhdGVzJztcbmltcG9ydCBzaGFsbG93RXF1YWwgZnJvbSAnLi91dGlscy9zaGFsbG93RXF1YWwnO1xuc2V0QmF0Y2goYmF0Y2gpO1xuZXhwb3J0IHsgUHJvdmlkZXIsIGNvbm5lY3RBZHZhbmNlZCwgUmVhY3RSZWR1eENvbnRleHQsIGNvbm5lY3QsIGJhdGNoLCB1c2VEaXNwYXRjaCwgY3JlYXRlRGlzcGF0Y2hIb29rLCB1c2VTZWxlY3RvciwgY3JlYXRlU2VsZWN0b3JIb29rLCB1c2VTdG9yZSwgY3JlYXRlU3RvcmVIb29rLCBzaGFsbG93RXF1YWwgfTsiLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN5bWJvbE9ic2VydmFibGVQb255ZmlsbChyb290KSB7XG5cdHZhciByZXN1bHQ7XG5cdHZhciBTeW1ib2wgPSByb290LlN5bWJvbDtcblxuXHRpZiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdGlmIChTeW1ib2wub2JzZXJ2YWJsZSkge1xuXHRcdFx0cmVzdWx0ID0gU3ltYm9sLm9ic2VydmFibGU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbCgnb2JzZXJ2YWJsZScpO1xuXHRcdFx0U3ltYm9sLm9ic2VydmFibGUgPSByZXN1bHQ7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9ICdAQG9ic2VydmFibGUnO1xuXHR9XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEyLjBcbiAqIHJlYWN0LnByb2R1Y3Rpb24ubWluLmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO3ZhciBoPXJlcXVpcmUoXCJvYmplY3QtYXNzaWduXCIpLG49XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixwPW4/U3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIik6NjAxMDMscT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wb3J0YWxcIik6NjAxMDYscj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyx0PW4/U3ltYm9sLmZvcihcInJlYWN0LnN0cmljdF9tb2RlXCIpOjYwMTA4LHU9bj9TeW1ib2wuZm9yKFwicmVhY3QucHJvZmlsZXJcIik6NjAxMTQsdj1uP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSx3PW4/U3ltYm9sLmZvcihcInJlYWN0LmNvbnRleHRcIik6NjAxMTAseD1uP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMix5PW4/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzO24mJlN5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpO1xudmFyIHo9bj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSxhYT1uP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O24mJlN5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTtuJiZTeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpO24mJlN5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTt2YXIgQT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3I7XG5mdW5jdGlvbiBCKGEpe2Zvcih2YXIgYj1cImh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9lcnJvci1kZWNvZGVyLmh0bWw/aW52YXJpYW50PVwiK2EsYz0xO2M8YXJndW1lbnRzLmxlbmd0aDtjKyspYis9XCImYXJnc1tdPVwiK2VuY29kZVVSSUNvbXBvbmVudChhcmd1bWVudHNbY10pO3JldHVyblwiTWluaWZpZWQgUmVhY3QgZXJyb3IgI1wiK2ErXCI7IHZpc2l0IFwiK2IrXCIgZm9yIHRoZSBmdWxsIG1lc3NhZ2Ugb3IgdXNlIHRoZSBub24tbWluaWZpZWQgZGV2IGVudmlyb25tZW50IGZvciBmdWxsIGVycm9ycyBhbmQgYWRkaXRpb25hbCBoZWxwZnVsIHdhcm5pbmdzLlwifXZhciBDPXtpc01vdW50ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4hMX0sZW5xdWV1ZUZvcmNlVXBkYXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlUmVwbGFjZVN0YXRlOmZ1bmN0aW9uKCl7fSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oKXt9fSxEPXt9O1xuZnVuY3Rpb24gRShhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1jfHxDfUUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9e307RS5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24oYSxiKXtpZihcIm9iamVjdFwiIT09dHlwZW9mIGEmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBhJiZudWxsIT1hKXRocm93IEVycm9yKEIoODUpKTt0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsYSxiLFwic2V0U3RhdGVcIil9O0UucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKGEpe3RoaXMudXBkYXRlci5lbnF1ZXVlRm9yY2VVcGRhdGUodGhpcyxhLFwiZm9yY2VVcGRhdGVcIil9O2Z1bmN0aW9uIEYoKXt9Ri5wcm90b3R5cGU9RS5wcm90b3R5cGU7ZnVuY3Rpb24gRyhhLGIsYyl7dGhpcy5wcm9wcz1hO3RoaXMuY29udGV4dD1iO3RoaXMucmVmcz1EO3RoaXMudXBkYXRlcj1jfHxDfXZhciBIPUcucHJvdG90eXBlPW5ldyBGO1xuSC5jb25zdHJ1Y3Rvcj1HO2goSCxFLnByb3RvdHlwZSk7SC5pc1B1cmVSZWFjdENvbXBvbmVudD0hMDt2YXIgST17Y3VycmVudDpudWxsfSxKPXtjdXJyZW50Om51bGx9LEs9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxMPXtrZXk6ITAscmVmOiEwLF9fc2VsZjohMCxfX3NvdXJjZTohMH07XG5mdW5jdGlvbiBNKGEsYixjKXt2YXIgZSxkPXt9LGc9bnVsbCxsPW51bGw7aWYobnVsbCE9Yilmb3IoZSBpbiB2b2lkIDAhPT1iLnJlZiYmKGw9Yi5yZWYpLHZvaWQgMCE9PWIua2V5JiYoZz1cIlwiK2Iua2V5KSxiKUsuY2FsbChiLGUpJiYhTC5oYXNPd25Qcm9wZXJ0eShlKSYmKGRbZV09YltlXSk7dmFyIGY9YXJndW1lbnRzLmxlbmd0aC0yO2lmKDE9PT1mKWQuY2hpbGRyZW49YztlbHNlIGlmKDE8Zil7Zm9yKHZhciBrPUFycmF5KGYpLG09MDttPGY7bSsrKWtbbV09YXJndW1lbnRzW20rMl07ZC5jaGlsZHJlbj1rfWlmKGEmJmEuZGVmYXVsdFByb3BzKWZvcihlIGluIGY9YS5kZWZhdWx0UHJvcHMsZil2b2lkIDA9PT1kW2VdJiYoZFtlXT1mW2VdKTtyZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEsa2V5OmcscmVmOmwscHJvcHM6ZCxfb3duZXI6Si5jdXJyZW50fX1cbmZ1bmN0aW9uIGJhKGEsYil7cmV0dXJueyQkdHlwZW9mOnAsdHlwZTphLnR5cGUsa2V5OmIscmVmOmEucmVmLHByb3BzOmEucHJvcHMsX293bmVyOmEuX293bmVyfX1mdW5jdGlvbiBOKGEpe3JldHVyblwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEmJmEuJCR0eXBlb2Y9PT1wfWZ1bmN0aW9uIGVzY2FwZShhKXt2YXIgYj17XCI9XCI6XCI9MFwiLFwiOlwiOlwiPTJcIn07cmV0dXJuXCIkXCIrKFwiXCIrYSkucmVwbGFjZSgvWz06XS9nLGZ1bmN0aW9uKGEpe3JldHVybiBiW2FdfSl9dmFyIE89L1xcLysvZyxQPVtdO2Z1bmN0aW9uIFEoYSxiLGMsZSl7aWYoUC5sZW5ndGgpe3ZhciBkPVAucG9wKCk7ZC5yZXN1bHQ9YTtkLmtleVByZWZpeD1iO2QuZnVuYz1jO2QuY29udGV4dD1lO2QuY291bnQ9MDtyZXR1cm4gZH1yZXR1cm57cmVzdWx0OmEsa2V5UHJlZml4OmIsZnVuYzpjLGNvbnRleHQ6ZSxjb3VudDowfX1cbmZ1bmN0aW9uIFIoYSl7YS5yZXN1bHQ9bnVsbDthLmtleVByZWZpeD1udWxsO2EuZnVuYz1udWxsO2EuY29udGV4dD1udWxsO2EuY291bnQ9MDsxMD5QLmxlbmd0aCYmUC5wdXNoKGEpfVxuZnVuY3Rpb24gUyhhLGIsYyxlKXt2YXIgZD10eXBlb2YgYTtpZihcInVuZGVmaW5lZFwiPT09ZHx8XCJib29sZWFuXCI9PT1kKWE9bnVsbDt2YXIgZz0hMTtpZihudWxsPT09YSlnPSEwO2Vsc2Ugc3dpdGNoKGQpe2Nhc2UgXCJzdHJpbmdcIjpjYXNlIFwibnVtYmVyXCI6Zz0hMDticmVhaztjYXNlIFwib2JqZWN0XCI6c3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgcDpjYXNlIHE6Zz0hMH19aWYoZylyZXR1cm4gYyhlLGEsXCJcIj09PWI/XCIuXCIrVChhLDApOmIpLDE7Zz0wO2I9XCJcIj09PWI/XCIuXCI6YitcIjpcIjtpZihBcnJheS5pc0FycmF5KGEpKWZvcih2YXIgbD0wO2w8YS5sZW5ndGg7bCsrKXtkPWFbbF07dmFyIGY9YitUKGQsbCk7Zys9UyhkLGYsYyxlKX1lbHNlIGlmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGE/Zj1udWxsOihmPUEmJmFbQV18fGFbXCJAQGl0ZXJhdG9yXCJdLGY9XCJmdW5jdGlvblwiPT09dHlwZW9mIGY/ZjpudWxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZilmb3IoYT1mLmNhbGwoYSksbD1cbjA7IShkPWEubmV4dCgpKS5kb25lOylkPWQudmFsdWUsZj1iK1QoZCxsKyspLGcrPVMoZCxmLGMsZSk7ZWxzZSBpZihcIm9iamVjdFwiPT09ZCl0aHJvdyBjPVwiXCIrYSxFcnJvcihCKDMxLFwiW29iamVjdCBPYmplY3RdXCI9PT1jP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYSkuam9pbihcIiwgXCIpK1wifVwiOmMsXCJcIikpO3JldHVybiBnfWZ1bmN0aW9uIFUoYSxiLGMpe3JldHVybiBudWxsPT1hPzA6UyhhLFwiXCIsYixjKX1mdW5jdGlvbiBUKGEsYil7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSYmbnVsbCE9YS5rZXk/ZXNjYXBlKGEua2V5KTpiLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBjYShhLGIpe2EuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyl9XG5mdW5jdGlvbiBkYShhLGIsYyl7dmFyIGU9YS5yZXN1bHQsZD1hLmtleVByZWZpeDthPWEuZnVuYy5jYWxsKGEuY29udGV4dCxiLGEuY291bnQrKyk7QXJyYXkuaXNBcnJheShhKT9WKGEsZSxjLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk6bnVsbCE9YSYmKE4oYSkmJihhPWJhKGEsZCsoIWEua2V5fHxiJiZiLmtleT09PWEua2V5P1wiXCI6KFwiXCIrYS5rZXkpLnJlcGxhY2UoTyxcIiQmL1wiKStcIi9cIikrYykpLGUucHVzaChhKSl9ZnVuY3Rpb24gVihhLGIsYyxlLGQpe3ZhciBnPVwiXCI7bnVsbCE9YyYmKGc9KFwiXCIrYykucmVwbGFjZShPLFwiJCYvXCIpK1wiL1wiKTtiPVEoYixnLGUsZCk7VShhLGRhLGIpO1IoYil9ZnVuY3Rpb24gVygpe3ZhciBhPUkuY3VycmVudDtpZihudWxsPT09YSl0aHJvdyBFcnJvcihCKDMyMSkpO3JldHVybiBhfVxudmFyIFg9e0NoaWxkcmVuOnttYXA6ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGw9PWEpcmV0dXJuIGE7dmFyIGU9W107VihhLGUsbnVsbCxiLGMpO3JldHVybiBlfSxmb3JFYWNoOmZ1bmN0aW9uKGEsYixjKXtpZihudWxsPT1hKXJldHVybiBhO2I9UShudWxsLG51bGwsYixjKTtVKGEsY2EsYik7UihiKX0sY291bnQ6ZnVuY3Rpb24oYSl7cmV0dXJuIFUoYSxmdW5jdGlvbigpe3JldHVybiBudWxsfSxudWxsKX0sdG9BcnJheTpmdW5jdGlvbihhKXt2YXIgYj1bXTtWKGEsYixudWxsLGZ1bmN0aW9uKGEpe3JldHVybiBhfSk7cmV0dXJuIGJ9LG9ubHk6ZnVuY3Rpb24oYSl7aWYoIU4oYSkpdGhyb3cgRXJyb3IoQigxNDMpKTtyZXR1cm4gYX19LGNyZWF0ZVJlZjpmdW5jdGlvbigpe3JldHVybntjdXJyZW50Om51bGx9fSxDb21wb25lbnQ6RSxQdXJlQ29tcG9uZW50OkcsY3JlYXRlQ29udGV4dDpmdW5jdGlvbihhLGIpe3ZvaWQgMD09PWImJihiPW51bGwpO2E9eyQkdHlwZW9mOncsX2NhbGN1bGF0ZUNoYW5nZWRCaXRzOmIsXG5fY3VycmVudFZhbHVlOmEsX2N1cnJlbnRWYWx1ZTI6YSxfdGhyZWFkQ291bnQ6MCxQcm92aWRlcjpudWxsLENvbnN1bWVyOm51bGx9O2EuUHJvdmlkZXI9eyQkdHlwZW9mOnYsX2NvbnRleHQ6YX07cmV0dXJuIGEuQ29uc3VtZXI9YX0sZm9yd2FyZFJlZjpmdW5jdGlvbihhKXtyZXR1cm57JCR0eXBlb2Y6eCxyZW5kZXI6YX19LGxhenk6ZnVuY3Rpb24oYSl7cmV0dXJueyQkdHlwZW9mOmFhLF9jdG9yOmEsX3N0YXR1czotMSxfcmVzdWx0Om51bGx9fSxtZW1vOmZ1bmN0aW9uKGEsYil7cmV0dXJueyQkdHlwZW9mOnosdHlwZTphLGNvbXBhcmU6dm9pZCAwPT09Yj9udWxsOmJ9fSx1c2VDYWxsYmFjazpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlQ2FsbGJhY2soYSxiKX0sdXNlQ29udGV4dDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlQ29udGV4dChhLGIpfSx1c2VFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZUVmZmVjdChhLGIpfSx1c2VJbXBlcmF0aXZlSGFuZGxlOmZ1bmN0aW9uKGEsXG5iLGMpe3JldHVybiBXKCkudXNlSW1wZXJhdGl2ZUhhbmRsZShhLGIsYyl9LHVzZURlYnVnVmFsdWU6ZnVuY3Rpb24oKXt9LHVzZUxheW91dEVmZmVjdDpmdW5jdGlvbihhLGIpe3JldHVybiBXKCkudXNlTGF5b3V0RWZmZWN0KGEsYil9LHVzZU1lbW86ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVygpLnVzZU1lbW8oYSxiKX0sdXNlUmVkdWNlcjpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIFcoKS51c2VSZWR1Y2VyKGEsYixjKX0sdXNlUmVmOmZ1bmN0aW9uKGEpe3JldHVybiBXKCkudXNlUmVmKGEpfSx1c2VTdGF0ZTpmdW5jdGlvbihhKXtyZXR1cm4gVygpLnVzZVN0YXRlKGEpfSxGcmFnbWVudDpyLFByb2ZpbGVyOnUsU3RyaWN0TW9kZTp0LFN1c3BlbnNlOnksY3JlYXRlRWxlbWVudDpNLGNsb25lRWxlbWVudDpmdW5jdGlvbihhLGIsYyl7aWYobnVsbD09PWF8fHZvaWQgMD09PWEpdGhyb3cgRXJyb3IoQigyNjcsYSkpO3ZhciBlPWgoe30sYS5wcm9wcyksZD1hLmtleSxnPWEucmVmLGw9YS5fb3duZXI7XG5pZihudWxsIT1iKXt2b2lkIDAhPT1iLnJlZiYmKGc9Yi5yZWYsbD1KLmN1cnJlbnQpO3ZvaWQgMCE9PWIua2V5JiYoZD1cIlwiK2Iua2V5KTtpZihhLnR5cGUmJmEudHlwZS5kZWZhdWx0UHJvcHMpdmFyIGY9YS50eXBlLmRlZmF1bHRQcm9wcztmb3IoayBpbiBiKUsuY2FsbChiLGspJiYhTC5oYXNPd25Qcm9wZXJ0eShrKSYmKGVba109dm9pZCAwPT09YltrXSYmdm9pZCAwIT09Zj9mW2tdOmJba10pfXZhciBrPWFyZ3VtZW50cy5sZW5ndGgtMjtpZigxPT09ayllLmNoaWxkcmVuPWM7ZWxzZSBpZigxPGspe2Y9QXJyYXkoayk7Zm9yKHZhciBtPTA7bTxrO20rKylmW21dPWFyZ3VtZW50c1ttKzJdO2UuY2hpbGRyZW49Zn1yZXR1cm57JCR0eXBlb2Y6cCx0eXBlOmEudHlwZSxrZXk6ZCxyZWY6Zyxwcm9wczplLF9vd25lcjpsfX0sY3JlYXRlRmFjdG9yeTpmdW5jdGlvbihhKXt2YXIgYj1NLmJpbmQobnVsbCxhKTtiLnR5cGU9YTtyZXR1cm4gYn0saXNWYWxpZEVsZW1lbnQ6Tix2ZXJzaW9uOlwiMTYuMTIuMFwiLFxuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e1JlYWN0Q3VycmVudERpc3BhdGNoZXI6SSxSZWFjdEN1cnJlbnRCYXRjaENvbmZpZzp7c3VzcGVuc2U6bnVsbH0sUmVhY3RDdXJyZW50T3duZXI6SixJc1NvbWVSZW5kZXJlckFjdGluZzp7Y3VycmVudDohMX0sYXNzaWduOmh9fSxZPXtkZWZhdWx0Olh9LFo9WSYmWHx8WTttb2R1bGUuZXhwb3J0cz1aLmRlZmF1bHR8fFo7XG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdjE2LjEyLjBcbiAqIHJlYWN0LWRvbS5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbi8qXG4gTW9kZXJuaXpyIDMuMC4wcHJlIChDdXN0b20gQnVpbGQpIHwgTUlUXG4qL1xuJ3VzZSBzdHJpY3QnO3ZhciBhYT1yZXF1aXJlKFwicmVhY3RcIiksbj1yZXF1aXJlKFwib2JqZWN0LWFzc2lnblwiKSxxPXJlcXVpcmUoXCJzY2hlZHVsZXJcIik7ZnVuY3Rpb24gdShhKXtmb3IodmFyIGI9XCJodHRwczovL3JlYWN0anMub3JnL2RvY3MvZXJyb3ItZGVjb2Rlci5odG1sP2ludmFyaWFudD1cIithLGM9MTtjPGFyZ3VtZW50cy5sZW5ndGg7YysrKWIrPVwiJmFyZ3NbXT1cIitlbmNvZGVVUklDb21wb25lbnQoYXJndW1lbnRzW2NdKTtyZXR1cm5cIk1pbmlmaWVkIFJlYWN0IGVycm9yICNcIithK1wiOyB2aXNpdCBcIitiK1wiIGZvciB0aGUgZnVsbCBtZXNzYWdlIG9yIHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCBmb3IgZnVsbCBlcnJvcnMgYW5kIGFkZGl0aW9uYWwgaGVscGZ1bCB3YXJuaW5ncy5cIn1pZighYWEpdGhyb3cgRXJyb3IodSgyMjcpKTt2YXIgYmE9bnVsbCxjYT17fTtcbmZ1bmN0aW9uIGRhKCl7aWYoYmEpZm9yKHZhciBhIGluIGNhKXt2YXIgYj1jYVthXSxjPWJhLmluZGV4T2YoYSk7aWYoISgtMTxjKSl0aHJvdyBFcnJvcih1KDk2LGEpKTtpZighZWFbY10pe2lmKCFiLmV4dHJhY3RFdmVudHMpdGhyb3cgRXJyb3IodSg5NyxhKSk7ZWFbY109YjtjPWIuZXZlbnRUeXBlcztmb3IodmFyIGQgaW4gYyl7dmFyIGU9dm9pZCAwO3ZhciBmPWNbZF0sZz1iLGg9ZDtpZihmYS5oYXNPd25Qcm9wZXJ0eShoKSl0aHJvdyBFcnJvcih1KDk5LGgpKTtmYVtoXT1mO3ZhciBrPWYucGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM7aWYoayl7Zm9yKGUgaW4gaylrLmhhc093blByb3BlcnR5KGUpJiZoYShrW2VdLGcsaCk7ZT0hMH1lbHNlIGYucmVnaXN0cmF0aW9uTmFtZT8oaGEoZi5yZWdpc3RyYXRpb25OYW1lLGcsaCksZT0hMCk6ZT0hMTtpZighZSl0aHJvdyBFcnJvcih1KDk4LGQsYSkpO319fX1cbmZ1bmN0aW9uIGhhKGEsYixjKXtpZihpYVthXSl0aHJvdyBFcnJvcih1KDEwMCxhKSk7aWFbYV09YjtqYVthXT1iLmV2ZW50VHlwZXNbY10uZGVwZW5kZW5jaWVzfXZhciBlYT1bXSxmYT17fSxpYT17fSxqYT17fTtmdW5jdGlvbiBrYShhLGIsYyxkLGUsZixnLGgsayl7dmFyIGw9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLDMpO3RyeXtiLmFwcGx5KGMsbCl9Y2F0Y2gobSl7dGhpcy5vbkVycm9yKG0pfX12YXIgbGE9ITEsbWE9bnVsbCxuYT0hMSxvYT1udWxsLHBhPXtvbkVycm9yOmZ1bmN0aW9uKGEpe2xhPSEwO21hPWF9fTtmdW5jdGlvbiBxYShhLGIsYyxkLGUsZixnLGgsayl7bGE9ITE7bWE9bnVsbDtrYS5hcHBseShwYSxhcmd1bWVudHMpfVxuZnVuY3Rpb24gcmEoYSxiLGMsZCxlLGYsZyxoLGspe3FhLmFwcGx5KHRoaXMsYXJndW1lbnRzKTtpZihsYSl7aWYobGEpe3ZhciBsPW1hO2xhPSExO21hPW51bGx9ZWxzZSB0aHJvdyBFcnJvcih1KDE5OCkpO25hfHwobmE9ITAsb2E9bCl9fXZhciBzYT1udWxsLHVhPW51bGwsdmE9bnVsbDtmdW5jdGlvbiB3YShhLGIsYyl7dmFyIGQ9YS50eXBlfHxcInVua25vd24tZXZlbnRcIjthLmN1cnJlbnRUYXJnZXQ9dmEoYyk7cmEoZCxiLHZvaWQgMCxhKTthLmN1cnJlbnRUYXJnZXQ9bnVsbH1mdW5jdGlvbiB4YShhLGIpe2lmKG51bGw9PWIpdGhyb3cgRXJyb3IodSgzMCkpO2lmKG51bGw9PWEpcmV0dXJuIGI7aWYoQXJyYXkuaXNBcnJheShhKSl7aWYoQXJyYXkuaXNBcnJheShiKSlyZXR1cm4gYS5wdXNoLmFwcGx5KGEsYiksYTthLnB1c2goYik7cmV0dXJuIGF9cmV0dXJuIEFycmF5LmlzQXJyYXkoYik/W2FdLmNvbmNhdChiKTpbYSxiXX1cbmZ1bmN0aW9uIHlhKGEsYixjKXtBcnJheS5pc0FycmF5KGEpP2EuZm9yRWFjaChiLGMpOmEmJmIuY2FsbChjLGEpfXZhciB6YT1udWxsO2Z1bmN0aW9uIEFhKGEpe2lmKGEpe3ZhciBiPWEuX2Rpc3BhdGNoTGlzdGVuZXJzLGM9YS5fZGlzcGF0Y2hJbnN0YW5jZXM7aWYoQXJyYXkuaXNBcnJheShiKSlmb3IodmFyIGQ9MDtkPGIubGVuZ3RoJiYhYS5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpO2QrKyl3YShhLGJbZF0sY1tkXSk7ZWxzZSBiJiZ3YShhLGIsYyk7YS5fZGlzcGF0Y2hMaXN0ZW5lcnM9bnVsbDthLl9kaXNwYXRjaEluc3RhbmNlcz1udWxsO2EuaXNQZXJzaXN0ZW50KCl8fGEuY29uc3RydWN0b3IucmVsZWFzZShhKX19ZnVuY3Rpb24gQmEoYSl7bnVsbCE9PWEmJih6YT14YSh6YSxhKSk7YT16YTt6YT1udWxsO2lmKGEpe3lhKGEsQWEpO2lmKHphKXRocm93IEVycm9yKHUoOTUpKTtpZihuYSl0aHJvdyBhPW9hLG5hPSExLG9hPW51bGwsYTt9fVxudmFyIENhPXtpbmplY3RFdmVudFBsdWdpbk9yZGVyOmZ1bmN0aW9uKGEpe2lmKGJhKXRocm93IEVycm9yKHUoMTAxKSk7YmE9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSk7ZGEoKX0saW5qZWN0RXZlbnRQbHVnaW5zQnlOYW1lOmZ1bmN0aW9uKGEpe3ZhciBiPSExLGM7Zm9yKGMgaW4gYSlpZihhLmhhc093blByb3BlcnR5KGMpKXt2YXIgZD1hW2NdO2lmKCFjYS5oYXNPd25Qcm9wZXJ0eShjKXx8Y2FbY10hPT1kKXtpZihjYVtjXSl0aHJvdyBFcnJvcih1KDEwMixjKSk7Y2FbY109ZDtiPSEwfX1iJiZkYSgpfX07XG5mdW5jdGlvbiBEYShhLGIpe3ZhciBjPWEuc3RhdGVOb2RlO2lmKCFjKXJldHVybiBudWxsO3ZhciBkPXNhKGMpO2lmKCFkKXJldHVybiBudWxsO2M9ZFtiXTthOnN3aXRjaChiKXtjYXNlIFwib25DbGlja1wiOmNhc2UgXCJvbkNsaWNrQ2FwdHVyZVwiOmNhc2UgXCJvbkRvdWJsZUNsaWNrXCI6Y2FzZSBcIm9uRG91YmxlQ2xpY2tDYXB0dXJlXCI6Y2FzZSBcIm9uTW91c2VEb3duXCI6Y2FzZSBcIm9uTW91c2VEb3duQ2FwdHVyZVwiOmNhc2UgXCJvbk1vdXNlTW92ZVwiOmNhc2UgXCJvbk1vdXNlTW92ZUNhcHR1cmVcIjpjYXNlIFwib25Nb3VzZVVwXCI6Y2FzZSBcIm9uTW91c2VVcENhcHR1cmVcIjooZD0hZC5kaXNhYmxlZCl8fChhPWEudHlwZSxkPSEoXCJidXR0b25cIj09PWF8fFwiaW5wdXRcIj09PWF8fFwic2VsZWN0XCI9PT1hfHxcInRleHRhcmVhXCI9PT1hKSk7YT0hZDticmVhayBhO2RlZmF1bHQ6YT0hMX1pZihhKXJldHVybiBudWxsO2lmKGMmJlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBjKXRocm93IEVycm9yKHUoMjMxLGIsdHlwZW9mIGMpKTtcbnJldHVybiBjfXZhciBFYT1hYS5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDtFYS5oYXNPd25Qcm9wZXJ0eShcIlJlYWN0Q3VycmVudERpc3BhdGNoZXJcIil8fChFYS5SZWFjdEN1cnJlbnREaXNwYXRjaGVyPXtjdXJyZW50Om51bGx9KTtFYS5oYXNPd25Qcm9wZXJ0eShcIlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnXCIpfHwoRWEuUmVhY3RDdXJyZW50QmF0Y2hDb25maWc9e3N1c3BlbnNlOm51bGx9KTtcbnZhciBGYT0vXiguKilbXFxcXFxcL10vLHc9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvcixHYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLEhhPXc/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixJYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5mcmFnbWVudFwiKTo2MDEwNyxKYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxLYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxMYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5wcm92aWRlclwiKTo2MDEwOSxNYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLE5hPXc/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxPYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixQYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZVwiKTo2MDExMyxRYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5zdXNwZW5zZV9saXN0XCIpOlxuNjAxMjAsUmE9dz9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSxTYT13P1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O3cmJlN5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTt3JiZTeW1ib2wuZm9yKFwicmVhY3QucmVzcG9uZGVyXCIpO3cmJlN5bWJvbC5mb3IoXCJyZWFjdC5zY29wZVwiKTt2YXIgVGE9XCJmdW5jdGlvblwiPT09dHlwZW9mIFN5bWJvbCYmU3ltYm9sLml0ZXJhdG9yO2Z1bmN0aW9uIFVhKGEpe2lmKG51bGw9PT1hfHxcIm9iamVjdFwiIT09dHlwZW9mIGEpcmV0dXJuIG51bGw7YT1UYSYmYVtUYV18fGFbXCJAQGl0ZXJhdG9yXCJdO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2E6bnVsbH1cbmZ1bmN0aW9uIFZhKGEpe2lmKC0xPT09YS5fc3RhdHVzKXthLl9zdGF0dXM9MDt2YXIgYj1hLl9jdG9yO2I9YigpO2EuX3Jlc3VsdD1iO2IudGhlbihmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYj1iLmRlZmF1bHQsYS5fc3RhdHVzPTEsYS5fcmVzdWx0PWIpfSxmdW5jdGlvbihiKXswPT09YS5fc3RhdHVzJiYoYS5fc3RhdHVzPTIsYS5fcmVzdWx0PWIpfSl9fVxuZnVuY3Rpb24gV2EoYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gYS5kaXNwbGF5TmFtZXx8YS5uYW1lfHxudWxsO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtzd2l0Y2goYSl7Y2FzZSBJYTpyZXR1cm5cIkZyYWdtZW50XCI7Y2FzZSBIYTpyZXR1cm5cIlBvcnRhbFwiO2Nhc2UgS2E6cmV0dXJuXCJQcm9maWxlclwiO2Nhc2UgSmE6cmV0dXJuXCJTdHJpY3RNb2RlXCI7Y2FzZSBQYTpyZXR1cm5cIlN1c3BlbnNlXCI7Y2FzZSBRYTpyZXR1cm5cIlN1c3BlbnNlTGlzdFwifWlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSlzd2l0Y2goYS4kJHR5cGVvZil7Y2FzZSBNYTpyZXR1cm5cIkNvbnRleHQuQ29uc3VtZXJcIjtjYXNlIExhOnJldHVyblwiQ29udGV4dC5Qcm92aWRlclwiO2Nhc2UgT2E6dmFyIGI9YS5yZW5kZXI7Yj1iLmRpc3BsYXlOYW1lfHxiLm5hbWV8fFwiXCI7cmV0dXJuIGEuZGlzcGxheU5hbWV8fChcIlwiIT09Yj9cIkZvcndhcmRSZWYoXCIrYitcIilcIjpcblwiRm9yd2FyZFJlZlwiKTtjYXNlIFJhOnJldHVybiBXYShhLnR5cGUpO2Nhc2UgU2E6aWYoYT0xPT09YS5fc3RhdHVzP2EuX3Jlc3VsdDpudWxsKXJldHVybiBXYShhKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBYYShhKXt2YXIgYj1cIlwiO2Rve2E6c3dpdGNoKGEudGFnKXtjYXNlIDM6Y2FzZSA0OmNhc2UgNjpjYXNlIDc6Y2FzZSAxMDpjYXNlIDk6dmFyIGM9XCJcIjticmVhayBhO2RlZmF1bHQ6dmFyIGQ9YS5fZGVidWdPd25lcixlPWEuX2RlYnVnU291cmNlLGY9V2EoYS50eXBlKTtjPW51bGw7ZCYmKGM9V2EoZC50eXBlKSk7ZD1mO2Y9XCJcIjtlP2Y9XCIgKGF0IFwiK2UuZmlsZU5hbWUucmVwbGFjZShGYSxcIlwiKStcIjpcIitlLmxpbmVOdW1iZXIrXCIpXCI6YyYmKGY9XCIgKGNyZWF0ZWQgYnkgXCIrYytcIilcIik7Yz1cIlxcbiAgICBpbiBcIisoZHx8XCJVbmtub3duXCIpK2Z9Yis9YzthPWEucmV0dXJufXdoaWxlKGEpO3JldHVybiBifVxudmFyIFlhPSEoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwidW5kZWZpbmVkXCI9PT10eXBlb2Ygd2luZG93LmRvY3VtZW50fHxcInVuZGVmaW5lZFwiPT09dHlwZW9mIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KSxaYT1udWxsLCRhPW51bGwsYWI9bnVsbDtmdW5jdGlvbiBiYihhKXtpZihhPXVhKGEpKXtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgWmEpdGhyb3cgRXJyb3IodSgyODApKTt2YXIgYj1zYShhLnN0YXRlTm9kZSk7WmEoYS5zdGF0ZU5vZGUsYS50eXBlLGIpfX1mdW5jdGlvbiBjYihhKXskYT9hYj9hYi5wdXNoKGEpOmFiPVthXTokYT1hfWZ1bmN0aW9uIGRiKCl7aWYoJGEpe3ZhciBhPSRhLGI9YWI7YWI9JGE9bnVsbDtiYihhKTtpZihiKWZvcihhPTA7YTxiLmxlbmd0aDthKyspYmIoYlthXSl9fWZ1bmN0aW9uIGViKGEsYil7cmV0dXJuIGEoYil9ZnVuY3Rpb24gZmIoYSxiLGMsZCl7cmV0dXJuIGEoYixjLGQpfWZ1bmN0aW9uIGdiKCl7fVxudmFyIGhiPWViLGliPSExLGpiPSExO2Z1bmN0aW9uIGtiKCl7aWYobnVsbCE9PSRhfHxudWxsIT09YWIpZ2IoKSxkYigpfW5ldyBNYXA7dmFyIGxiPS9eWzpBLVpfYS16XFx1MDBDMC1cXHUwMEQ2XFx1MDBEOC1cXHUwMEY2XFx1MDBGOC1cXHUwMkZGXFx1MDM3MC1cXHUwMzdEXFx1MDM3Ri1cXHUxRkZGXFx1MjAwQy1cXHUyMDBEXFx1MjA3MC1cXHUyMThGXFx1MkMwMC1cXHUyRkVGXFx1MzAwMS1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkZEXVs6QS1aX2EtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNlxcdTAwRjgtXFx1MDJGRlxcdTAzNzAtXFx1MDM3RFxcdTAzN0YtXFx1MUZGRlxcdTIwMEMtXFx1MjAwRFxcdTIwNzAtXFx1MjE4RlxcdTJDMDAtXFx1MkZFRlxcdTMwMDEtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZGRFxcLS4wLTlcXHUwMEI3XFx1MDMwMC1cXHUwMzZGXFx1MjAzRi1cXHUyMDQwXSokLyxtYj1PYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LG5iPXt9LG9iPXt9O1xuZnVuY3Rpb24gcGIoYSl7aWYobWIuY2FsbChvYixhKSlyZXR1cm4hMDtpZihtYi5jYWxsKG5iLGEpKXJldHVybiExO2lmKGxiLnRlc3QoYSkpcmV0dXJuIG9iW2FdPSEwO25iW2FdPSEwO3JldHVybiExfWZ1bmN0aW9uIHFiKGEsYixjLGQpe2lmKG51bGwhPT1jJiYwPT09Yy50eXBlKXJldHVybiExO3N3aXRjaCh0eXBlb2YgYil7Y2FzZSBcImZ1bmN0aW9uXCI6Y2FzZSBcInN5bWJvbFwiOnJldHVybiEwO2Nhc2UgXCJib29sZWFuXCI6aWYoZClyZXR1cm4hMTtpZihudWxsIT09YylyZXR1cm4hYy5hY2NlcHRzQm9vbGVhbnM7YT1hLnRvTG93ZXJDYXNlKCkuc2xpY2UoMCw1KTtyZXR1cm5cImRhdGEtXCIhPT1hJiZcImFyaWEtXCIhPT1hO2RlZmF1bHQ6cmV0dXJuITF9fVxuZnVuY3Rpb24gcmIoYSxiLGMsZCl7aWYobnVsbD09PWJ8fFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYnx8cWIoYSxiLGMsZCkpcmV0dXJuITA7aWYoZClyZXR1cm4hMTtpZihudWxsIT09Yylzd2l0Y2goYy50eXBlKXtjYXNlIDM6cmV0dXJuIWI7Y2FzZSA0OnJldHVybiExPT09YjtjYXNlIDU6cmV0dXJuIGlzTmFOKGIpO2Nhc2UgNjpyZXR1cm4gaXNOYU4oYil8fDE+Yn1yZXR1cm4hMX1mdW5jdGlvbiBCKGEsYixjLGQsZSxmKXt0aGlzLmFjY2VwdHNCb29sZWFucz0yPT09Ynx8Mz09PWJ8fDQ9PT1iO3RoaXMuYXR0cmlidXRlTmFtZT1kO3RoaXMuYXR0cmlidXRlTmFtZXNwYWNlPWU7dGhpcy5tdXN0VXNlUHJvcGVydHk9Yzt0aGlzLnByb3BlcnR5TmFtZT1hO3RoaXMudHlwZT1iO3RoaXMuc2FuaXRpemVVUkw9Zn12YXIgRD17fTtcblwiY2hpbGRyZW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwgZGVmYXVsdFZhbHVlIGRlZmF1bHRDaGVja2VkIGlubmVySFRNTCBzdXBwcmVzc0NvbnRlbnRFZGl0YWJsZVdhcm5pbmcgc3VwcHJlc3NIeWRyYXRpb25XYXJuaW5nIHN0eWxlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDAsITEsYSxudWxsLCExKX0pO1tbXCJhY2NlcHRDaGFyc2V0XCIsXCJhY2NlcHQtY2hhcnNldFwiXSxbXCJjbGFzc05hbWVcIixcImNsYXNzXCJdLFtcImh0bWxGb3JcIixcImZvclwiXSxbXCJodHRwRXF1aXZcIixcImh0dHAtZXF1aXZcIl1dLmZvckVhY2goZnVuY3Rpb24oYSl7dmFyIGI9YVswXTtEW2JdPW5ldyBCKGIsMSwhMSxhWzFdLG51bGwsITEpfSk7W1wiY29udGVudEVkaXRhYmxlXCIsXCJkcmFnZ2FibGVcIixcInNwZWxsQ2hlY2tcIixcInZhbHVlXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEpfSk7XG5bXCJhdXRvUmV2ZXJzZVwiLFwiZXh0ZXJuYWxSZXNvdXJjZXNSZXF1aXJlZFwiLFwiZm9jdXNhYmxlXCIsXCJwcmVzZXJ2ZUFscGhhXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDIsITEsYSxudWxsLCExKX0pO1wiYWxsb3dGdWxsU2NyZWVuIGFzeW5jIGF1dG9Gb2N1cyBhdXRvUGxheSBjb250cm9scyBkZWZhdWx0IGRlZmVyIGRpc2FibGVkIGRpc2FibGVQaWN0dXJlSW5QaWN0dXJlIGZvcm1Ob1ZhbGlkYXRlIGhpZGRlbiBsb29wIG5vTW9kdWxlIG5vVmFsaWRhdGUgb3BlbiBwbGF5c0lubGluZSByZWFkT25seSByZXF1aXJlZCByZXZlcnNlZCBzY29wZWQgc2VhbWxlc3MgaXRlbVNjb3BlXCIuc3BsaXQoXCIgXCIpLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITEsYS50b0xvd2VyQ2FzZSgpLG51bGwsITEpfSk7XG5bXCJjaGVja2VkXCIsXCJtdWx0aXBsZVwiLFwibXV0ZWRcIixcInNlbGVjdGVkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDMsITAsYSxudWxsLCExKX0pO1tcImNhcHR1cmVcIixcImRvd25sb2FkXCJdLmZvckVhY2goZnVuY3Rpb24oYSl7RFthXT1uZXcgQihhLDQsITEsYSxudWxsLCExKX0pO1tcImNvbHNcIixcInJvd3NcIixcInNpemVcIixcInNwYW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNiwhMSxhLG51bGwsITEpfSk7W1wicm93U3BhblwiLFwic3RhcnRcIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsNSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSl9KTt2YXIgc2I9L1tcXC06XShbYS16XSkvZztmdW5jdGlvbiB0YihhKXtyZXR1cm4gYVsxXS50b1VwcGVyQ2FzZSgpfVxuXCJhY2NlbnQtaGVpZ2h0IGFsaWdubWVudC1iYXNlbGluZSBhcmFiaWMtZm9ybSBiYXNlbGluZS1zaGlmdCBjYXAtaGVpZ2h0IGNsaXAtcGF0aCBjbGlwLXJ1bGUgY29sb3ItaW50ZXJwb2xhdGlvbiBjb2xvci1pbnRlcnBvbGF0aW9uLWZpbHRlcnMgY29sb3ItcHJvZmlsZSBjb2xvci1yZW5kZXJpbmcgZG9taW5hbnQtYmFzZWxpbmUgZW5hYmxlLWJhY2tncm91bmQgZmlsbC1vcGFjaXR5IGZpbGwtcnVsZSBmbG9vZC1jb2xvciBmbG9vZC1vcGFjaXR5IGZvbnQtZmFtaWx5IGZvbnQtc2l6ZSBmb250LXNpemUtYWRqdXN0IGZvbnQtc3RyZXRjaCBmb250LXN0eWxlIGZvbnQtdmFyaWFudCBmb250LXdlaWdodCBnbHlwaC1uYW1lIGdseXBoLW9yaWVudGF0aW9uLWhvcml6b250YWwgZ2x5cGgtb3JpZW50YXRpb24tdmVydGljYWwgaG9yaXotYWR2LXggaG9yaXotb3JpZ2luLXggaW1hZ2UtcmVuZGVyaW5nIGxldHRlci1zcGFjaW5nIGxpZ2h0aW5nLWNvbG9yIG1hcmtlci1lbmQgbWFya2VyLW1pZCBtYXJrZXItc3RhcnQgb3ZlcmxpbmUtcG9zaXRpb24gb3ZlcmxpbmUtdGhpY2tuZXNzIHBhaW50LW9yZGVyIHBhbm9zZS0xIHBvaW50ZXItZXZlbnRzIHJlbmRlcmluZy1pbnRlbnQgc2hhcGUtcmVuZGVyaW5nIHN0b3AtY29sb3Igc3RvcC1vcGFjaXR5IHN0cmlrZXRocm91Z2gtcG9zaXRpb24gc3RyaWtldGhyb3VnaC10aGlja25lc3Mgc3Ryb2tlLWRhc2hhcnJheSBzdHJva2UtZGFzaG9mZnNldCBzdHJva2UtbGluZWNhcCBzdHJva2UtbGluZWpvaW4gc3Ryb2tlLW1pdGVybGltaXQgc3Ryb2tlLW9wYWNpdHkgc3Ryb2tlLXdpZHRoIHRleHQtYW5jaG9yIHRleHQtZGVjb3JhdGlvbiB0ZXh0LXJlbmRlcmluZyB1bmRlcmxpbmUtcG9zaXRpb24gdW5kZXJsaW5lLXRoaWNrbmVzcyB1bmljb2RlLWJpZGkgdW5pY29kZS1yYW5nZSB1bml0cy1wZXItZW0gdi1hbHBoYWJldGljIHYtaGFuZ2luZyB2LWlkZW9ncmFwaGljIHYtbWF0aGVtYXRpY2FsIHZlY3Rvci1lZmZlY3QgdmVydC1hZHYteSB2ZXJ0LW9yaWdpbi14IHZlcnQtb3JpZ2luLXkgd29yZC1zcGFjaW5nIHdyaXRpbmctbW9kZSB4bWxuczp4bGluayB4LWhlaWdodFwiLnNwbGl0KFwiIFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGEpe3ZhciBiPWEucmVwbGFjZShzYixcbnRiKTtEW2JdPW5ldyBCKGIsMSwhMSxhLG51bGwsITEpfSk7XCJ4bGluazphY3R1YXRlIHhsaW5rOmFyY3JvbGUgeGxpbms6cm9sZSB4bGluazpzaG93IHhsaW5rOnRpdGxlIHhsaW5rOnR5cGVcIi5zcGxpdChcIiBcIikuZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uoc2IsdGIpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIsITEpfSk7W1wieG1sOmJhc2VcIixcInhtbDpsYW5nXCIsXCJ4bWw6c3BhY2VcIl0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1hLnJlcGxhY2Uoc2IsdGIpO0RbYl09bmV3IEIoYiwxLCExLGEsXCJodHRwOi8vd3d3LnczLm9yZy9YTUwvMTk5OC9uYW1lc3BhY2VcIiwhMSl9KTtbXCJ0YWJJbmRleFwiLFwiY3Jvc3NPcmlnaW5cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMSl9KTtcbkQueGxpbmtIcmVmPW5ldyBCKFwieGxpbmtIcmVmXCIsMSwhMSxcInhsaW5rOmhyZWZcIixcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiwhMCk7W1wic3JjXCIsXCJocmVmXCIsXCJhY3Rpb25cIixcImZvcm1BY3Rpb25cIl0uZm9yRWFjaChmdW5jdGlvbihhKXtEW2FdPW5ldyBCKGEsMSwhMSxhLnRvTG93ZXJDYXNlKCksbnVsbCwhMCl9KTtmdW5jdGlvbiB1YihhKXtzd2l0Y2godHlwZW9mIGEpe2Nhc2UgXCJib29sZWFuXCI6Y2FzZSBcIm51bWJlclwiOmNhc2UgXCJvYmplY3RcIjpjYXNlIFwic3RyaW5nXCI6Y2FzZSBcInVuZGVmaW5lZFwiOnJldHVybiBhO2RlZmF1bHQ6cmV0dXJuXCJcIn19XG5mdW5jdGlvbiB2YihhLGIsYyxkKXt2YXIgZT1ELmhhc093blByb3BlcnR5KGIpP0RbYl06bnVsbDt2YXIgZj1udWxsIT09ZT8wPT09ZS50eXBlOmQ/ITE6ISgyPGIubGVuZ3RoKXx8XCJvXCIhPT1iWzBdJiZcIk9cIiE9PWJbMF18fFwiblwiIT09YlsxXSYmXCJOXCIhPT1iWzFdPyExOiEwO2Z8fChyYihiLGMsZSxkKSYmKGM9bnVsbCksZHx8bnVsbD09PWU/cGIoYikmJihudWxsPT09Yz9hLnJlbW92ZUF0dHJpYnV0ZShiKTphLnNldEF0dHJpYnV0ZShiLFwiXCIrYykpOmUubXVzdFVzZVByb3BlcnR5P2FbZS5wcm9wZXJ0eU5hbWVdPW51bGw9PT1jPzM9PT1lLnR5cGU/ITE6XCJcIjpjOihiPWUuYXR0cmlidXRlTmFtZSxkPWUuYXR0cmlidXRlTmFtZXNwYWNlLG51bGw9PT1jP2EucmVtb3ZlQXR0cmlidXRlKGIpOihlPWUudHlwZSxjPTM9PT1lfHw0PT09ZSYmITA9PT1jP1wiXCI6XCJcIitjLGQ/YS5zZXRBdHRyaWJ1dGVOUyhkLGIsYyk6YS5zZXRBdHRyaWJ1dGUoYixjKSkpKX1cbmZ1bmN0aW9uIHdiKGEpe3ZhciBiPWEudHlwZTtyZXR1cm4oYT1hLm5vZGVOYW1lKSYmXCJpbnB1dFwiPT09YS50b0xvd2VyQ2FzZSgpJiYoXCJjaGVja2JveFwiPT09Ynx8XCJyYWRpb1wiPT09Yil9XG5mdW5jdGlvbiB4YihhKXt2YXIgYj13YihhKT9cImNoZWNrZWRcIjpcInZhbHVlXCIsYz1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGEuY29uc3RydWN0b3IucHJvdG90eXBlLGIpLGQ9XCJcIithW2JdO2lmKCFhLmhhc093blByb3BlcnR5KGIpJiZcInVuZGVmaW5lZFwiIT09dHlwZW9mIGMmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBjLmdldCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGMuc2V0KXt2YXIgZT1jLmdldCxmPWMuc2V0O09iamVjdC5kZWZpbmVQcm9wZXJ0eShhLGIse2NvbmZpZ3VyYWJsZTohMCxnZXQ6ZnVuY3Rpb24oKXtyZXR1cm4gZS5jYWxsKHRoaXMpfSxzZXQ6ZnVuY3Rpb24oYSl7ZD1cIlwiK2E7Zi5jYWxsKHRoaXMsYSl9fSk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGEsYix7ZW51bWVyYWJsZTpjLmVudW1lcmFibGV9KTtyZXR1cm57Z2V0VmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gZH0sc2V0VmFsdWU6ZnVuY3Rpb24oYSl7ZD1cIlwiK2F9LHN0b3BUcmFja2luZzpmdW5jdGlvbigpe2EuX3ZhbHVlVHJhY2tlcj1cbm51bGw7ZGVsZXRlIGFbYl19fX19ZnVuY3Rpb24geWIoYSl7YS5fdmFsdWVUcmFja2VyfHwoYS5fdmFsdWVUcmFja2VyPXhiKGEpKX1mdW5jdGlvbiB6YihhKXtpZighYSlyZXR1cm4hMTt2YXIgYj1hLl92YWx1ZVRyYWNrZXI7aWYoIWIpcmV0dXJuITA7dmFyIGM9Yi5nZXRWYWx1ZSgpO3ZhciBkPVwiXCI7YSYmKGQ9d2IoYSk/YS5jaGVja2VkP1widHJ1ZVwiOlwiZmFsc2VcIjphLnZhbHVlKTthPWQ7cmV0dXJuIGEhPT1jPyhiLnNldFZhbHVlKGEpLCEwKTohMX1mdW5jdGlvbiBBYihhLGIpe3ZhciBjPWIuY2hlY2tlZDtyZXR1cm4gbih7fSxiLHtkZWZhdWx0Q2hlY2tlZDp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCx2YWx1ZTp2b2lkIDAsY2hlY2tlZDpudWxsIT1jP2M6YS5fd3JhcHBlclN0YXRlLmluaXRpYWxDaGVja2VkfSl9XG5mdW5jdGlvbiBCYihhLGIpe3ZhciBjPW51bGw9PWIuZGVmYXVsdFZhbHVlP1wiXCI6Yi5kZWZhdWx0VmFsdWUsZD1udWxsIT1iLmNoZWNrZWQ/Yi5jaGVja2VkOmIuZGVmYXVsdENoZWNrZWQ7Yz11YihudWxsIT1iLnZhbHVlP2IudmFsdWU6Yyk7YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsQ2hlY2tlZDpkLGluaXRpYWxWYWx1ZTpjLGNvbnRyb2xsZWQ6XCJjaGVja2JveFwiPT09Yi50eXBlfHxcInJhZGlvXCI9PT1iLnR5cGU/bnVsbCE9Yi5jaGVja2VkOm51bGwhPWIudmFsdWV9fWZ1bmN0aW9uIENiKGEsYil7Yj1iLmNoZWNrZWQ7bnVsbCE9YiYmdmIoYSxcImNoZWNrZWRcIixiLCExKX1cbmZ1bmN0aW9uIEViKGEsYil7Q2IoYSxiKTt2YXIgYz11YihiLnZhbHVlKSxkPWIudHlwZTtpZihudWxsIT1jKWlmKFwibnVtYmVyXCI9PT1kKXtpZigwPT09YyYmXCJcIj09PWEudmFsdWV8fGEudmFsdWUhPWMpYS52YWx1ZT1cIlwiK2N9ZWxzZSBhLnZhbHVlIT09XCJcIitjJiYoYS52YWx1ZT1cIlwiK2MpO2Vsc2UgaWYoXCJzdWJtaXRcIj09PWR8fFwicmVzZXRcIj09PWQpe2EucmVtb3ZlQXR0cmlidXRlKFwidmFsdWVcIik7cmV0dXJufWIuaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKT9GYihhLGIudHlwZSxjKTpiLmhhc093blByb3BlcnR5KFwiZGVmYXVsdFZhbHVlXCIpJiZGYihhLGIudHlwZSx1YihiLmRlZmF1bHRWYWx1ZSkpO251bGw9PWIuY2hlY2tlZCYmbnVsbCE9Yi5kZWZhdWx0Q2hlY2tlZCYmKGEuZGVmYXVsdENoZWNrZWQ9ISFiLmRlZmF1bHRDaGVja2VkKX1cbmZ1bmN0aW9uIEdiKGEsYixjKXtpZihiLmhhc093blByb3BlcnR5KFwidmFsdWVcIil8fGIuaGFzT3duUHJvcGVydHkoXCJkZWZhdWx0VmFsdWVcIikpe3ZhciBkPWIudHlwZTtpZighKFwic3VibWl0XCIhPT1kJiZcInJlc2V0XCIhPT1kfHx2b2lkIDAhPT1iLnZhbHVlJiZudWxsIT09Yi52YWx1ZSkpcmV0dXJuO2I9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlO2N8fGI9PT1hLnZhbHVlfHwoYS52YWx1ZT1iKTthLmRlZmF1bHRWYWx1ZT1ifWM9YS5uYW1lO1wiXCIhPT1jJiYoYS5uYW1lPVwiXCIpO2EuZGVmYXVsdENoZWNrZWQ9IWEuZGVmYXVsdENoZWNrZWQ7YS5kZWZhdWx0Q2hlY2tlZD0hIWEuX3dyYXBwZXJTdGF0ZS5pbml0aWFsQ2hlY2tlZDtcIlwiIT09YyYmKGEubmFtZT1jKX1cbmZ1bmN0aW9uIEZiKGEsYixjKXtpZihcIm51bWJlclwiIT09Ynx8YS5vd25lckRvY3VtZW50LmFjdGl2ZUVsZW1lbnQhPT1hKW51bGw9PWM/YS5kZWZhdWx0VmFsdWU9XCJcIithLl93cmFwcGVyU3RhdGUuaW5pdGlhbFZhbHVlOmEuZGVmYXVsdFZhbHVlIT09XCJcIitjJiYoYS5kZWZhdWx0VmFsdWU9XCJcIitjKX1mdW5jdGlvbiBIYihhKXt2YXIgYj1cIlwiO2FhLkNoaWxkcmVuLmZvckVhY2goYSxmdW5jdGlvbihhKXtudWxsIT1hJiYoYis9YSl9KTtyZXR1cm4gYn1mdW5jdGlvbiBJYihhLGIpe2E9bih7Y2hpbGRyZW46dm9pZCAwfSxiKTtpZihiPUhiKGIuY2hpbGRyZW4pKWEuY2hpbGRyZW49YjtyZXR1cm4gYX1cbmZ1bmN0aW9uIEpiKGEsYixjLGQpe2E9YS5vcHRpb25zO2lmKGIpe2I9e307Zm9yKHZhciBlPTA7ZTxjLmxlbmd0aDtlKyspYltcIiRcIitjW2VdXT0hMDtmb3IoYz0wO2M8YS5sZW5ndGg7YysrKWU9Yi5oYXNPd25Qcm9wZXJ0eShcIiRcIithW2NdLnZhbHVlKSxhW2NdLnNlbGVjdGVkIT09ZSYmKGFbY10uc2VsZWN0ZWQ9ZSksZSYmZCYmKGFbY10uZGVmYXVsdFNlbGVjdGVkPSEwKX1lbHNle2M9XCJcIit1YihjKTtiPW51bGw7Zm9yKGU9MDtlPGEubGVuZ3RoO2UrKyl7aWYoYVtlXS52YWx1ZT09PWMpe2FbZV0uc2VsZWN0ZWQ9ITA7ZCYmKGFbZV0uZGVmYXVsdFNlbGVjdGVkPSEwKTtyZXR1cm59bnVsbCE9PWJ8fGFbZV0uZGlzYWJsZWR8fChiPWFbZV0pfW51bGwhPT1iJiYoYi5zZWxlY3RlZD0hMCl9fVxuZnVuY3Rpb24gS2IoYSxiKXtpZihudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKXRocm93IEVycm9yKHUoOTEpKTtyZXR1cm4gbih7fSxiLHt2YWx1ZTp2b2lkIDAsZGVmYXVsdFZhbHVlOnZvaWQgMCxjaGlsZHJlbjpcIlwiK2EuX3dyYXBwZXJTdGF0ZS5pbml0aWFsVmFsdWV9KX1mdW5jdGlvbiBMYihhLGIpe3ZhciBjPWIudmFsdWU7aWYobnVsbD09Yyl7Yz1iLmRlZmF1bHRWYWx1ZTtiPWIuY2hpbGRyZW47aWYobnVsbCE9Yil7aWYobnVsbCE9Yyl0aHJvdyBFcnJvcih1KDkyKSk7aWYoQXJyYXkuaXNBcnJheShiKSl7aWYoISgxPj1iLmxlbmd0aCkpdGhyb3cgRXJyb3IodSg5MykpO2I9YlswXX1jPWJ9bnVsbD09YyYmKGM9XCJcIil9YS5fd3JhcHBlclN0YXRlPXtpbml0aWFsVmFsdWU6dWIoYyl9fVxuZnVuY3Rpb24gTWIoYSxiKXt2YXIgYz11YihiLnZhbHVlKSxkPXViKGIuZGVmYXVsdFZhbHVlKTtudWxsIT1jJiYoYz1cIlwiK2MsYyE9PWEudmFsdWUmJihhLnZhbHVlPWMpLG51bGw9PWIuZGVmYXVsdFZhbHVlJiZhLmRlZmF1bHRWYWx1ZSE9PWMmJihhLmRlZmF1bHRWYWx1ZT1jKSk7bnVsbCE9ZCYmKGEuZGVmYXVsdFZhbHVlPVwiXCIrZCl9ZnVuY3Rpb24gTmIoYSl7dmFyIGI9YS50ZXh0Q29udGVudDtiPT09YS5fd3JhcHBlclN0YXRlLmluaXRpYWxWYWx1ZSYmXCJcIiE9PWImJm51bGwhPT1iJiYoYS52YWx1ZT1iKX12YXIgT2I9e2h0bWw6XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsbWF0aG1sOlwiaHR0cDovL3d3dy53My5vcmcvMTk5OC9NYXRoL01hdGhNTFwiLHN2ZzpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJ9O1xuZnVuY3Rpb24gUGIoYSl7c3dpdGNoKGEpe2Nhc2UgXCJzdmdcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7Y2FzZSBcIm1hdGhcIjpyZXR1cm5cImh0dHA6Ly93d3cudzMub3JnLzE5OTgvTWF0aC9NYXRoTUxcIjtkZWZhdWx0OnJldHVyblwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwifX1mdW5jdGlvbiBRYihhLGIpe3JldHVybiBudWxsPT1hfHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIj09PWE/UGIoYik6XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT09YSYmXCJmb3JlaWduT2JqZWN0XCI9PT1iP1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOmF9XG52YXIgUmIsU2I9ZnVuY3Rpb24oYSl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBNU0FwcCYmTVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24/ZnVuY3Rpb24oYixjLGQsZSl7TVNBcHAuZXhlY1Vuc2FmZUxvY2FsRnVuY3Rpb24oZnVuY3Rpb24oKXtyZXR1cm4gYShiLGMsZCxlKX0pfTphfShmdW5jdGlvbihhLGIpe2lmKGEubmFtZXNwYWNlVVJJIT09T2Iuc3ZnfHxcImlubmVySFRNTFwiaW4gYSlhLmlubmVySFRNTD1iO2Vsc2V7UmI9UmJ8fGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7UmIuaW5uZXJIVE1MPVwiPHN2Zz5cIitiLnZhbHVlT2YoKS50b1N0cmluZygpK1wiPC9zdmc+XCI7Zm9yKGI9UmIuZmlyc3RDaGlsZDthLmZpcnN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYS5maXJzdENoaWxkKTtmb3IoO2IuZmlyc3RDaGlsZDspYS5hcHBlbmRDaGlsZChiLmZpcnN0Q2hpbGQpfX0pO1xuZnVuY3Rpb24gVGIoYSxiKXtpZihiKXt2YXIgYz1hLmZpcnN0Q2hpbGQ7aWYoYyYmYz09PWEubGFzdENoaWxkJiYzPT09Yy5ub2RlVHlwZSl7Yy5ub2RlVmFsdWU9YjtyZXR1cm59fWEudGV4dENvbnRlbnQ9Yn1mdW5jdGlvbiBVYihhLGIpe3ZhciBjPXt9O2NbYS50b0xvd2VyQ2FzZSgpXT1iLnRvTG93ZXJDYXNlKCk7Y1tcIldlYmtpdFwiK2FdPVwid2Via2l0XCIrYjtjW1wiTW96XCIrYV09XCJtb3pcIitiO3JldHVybiBjfXZhciBWYj17YW5pbWF0aW9uZW5kOlViKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25FbmRcIiksYW5pbWF0aW9uaXRlcmF0aW9uOlViKFwiQW5pbWF0aW9uXCIsXCJBbmltYXRpb25JdGVyYXRpb25cIiksYW5pbWF0aW9uc3RhcnQ6VWIoXCJBbmltYXRpb25cIixcIkFuaW1hdGlvblN0YXJ0XCIpLHRyYW5zaXRpb25lbmQ6VWIoXCJUcmFuc2l0aW9uXCIsXCJUcmFuc2l0aW9uRW5kXCIpfSxXYj17fSxYYj17fTtcbllhJiYoWGI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5zdHlsZSxcIkFuaW1hdGlvbkV2ZW50XCJpbiB3aW5kb3d8fChkZWxldGUgVmIuYW5pbWF0aW9uZW5kLmFuaW1hdGlvbixkZWxldGUgVmIuYW5pbWF0aW9uaXRlcmF0aW9uLmFuaW1hdGlvbixkZWxldGUgVmIuYW5pbWF0aW9uc3RhcnQuYW5pbWF0aW9uKSxcIlRyYW5zaXRpb25FdmVudFwiaW4gd2luZG93fHxkZWxldGUgVmIudHJhbnNpdGlvbmVuZC50cmFuc2l0aW9uKTtmdW5jdGlvbiBZYihhKXtpZihXYlthXSlyZXR1cm4gV2JbYV07aWYoIVZiW2FdKXJldHVybiBhO3ZhciBiPVZiW2FdLGM7Zm9yKGMgaW4gYilpZihiLmhhc093blByb3BlcnR5KGMpJiZjIGluIFhiKXJldHVybiBXYlthXT1iW2NdO3JldHVybiBhfXZhciBaYj1ZYihcImFuaW1hdGlvbmVuZFwiKSwkYj1ZYihcImFuaW1hdGlvbml0ZXJhdGlvblwiKSxhYz1ZYihcImFuaW1hdGlvbnN0YXJ0XCIpLGJjPVliKFwidHJhbnNpdGlvbmVuZFwiKSxjYz1cImFib3J0IGNhbnBsYXkgY2FucGxheXRocm91Z2ggZHVyYXRpb25jaGFuZ2UgZW1wdGllZCBlbmNyeXB0ZWQgZW5kZWQgZXJyb3IgbG9hZGVkZGF0YSBsb2FkZWRtZXRhZGF0YSBsb2Fkc3RhcnQgcGF1c2UgcGxheSBwbGF5aW5nIHByb2dyZXNzIHJhdGVjaGFuZ2Ugc2Vla2VkIHNlZWtpbmcgc3RhbGxlZCBzdXNwZW5kIHRpbWV1cGRhdGUgdm9sdW1lY2hhbmdlIHdhaXRpbmdcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiBlYyhhKXt2YXIgYj1hLGM9YTtpZihhLmFsdGVybmF0ZSlmb3IoO2IucmV0dXJuOyliPWIucmV0dXJuO2Vsc2V7YT1iO2RvIGI9YSwwIT09KGIuZWZmZWN0VGFnJjEwMjYpJiYoYz1iLnJldHVybiksYT1iLnJldHVybjt3aGlsZShhKX1yZXR1cm4gMz09PWIudGFnP2M6bnVsbH1mdW5jdGlvbiBmYyhhKXtpZigxMz09PWEudGFnKXt2YXIgYj1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWImJihhPWEuYWx0ZXJuYXRlLG51bGwhPT1hJiYoYj1hLm1lbW9pemVkU3RhdGUpKTtpZihudWxsIT09YilyZXR1cm4gYi5kZWh5ZHJhdGVkfXJldHVybiBudWxsfWZ1bmN0aW9uIGdjKGEpe2lmKGVjKGEpIT09YSl0aHJvdyBFcnJvcih1KDE4OCkpO31cbmZ1bmN0aW9uIGhjKGEpe3ZhciBiPWEuYWx0ZXJuYXRlO2lmKCFiKXtiPWVjKGEpO2lmKG51bGw9PT1iKXRocm93IEVycm9yKHUoMTg4KSk7cmV0dXJuIGIhPT1hP251bGw6YX1mb3IodmFyIGM9YSxkPWI7Oyl7dmFyIGU9Yy5yZXR1cm47aWYobnVsbD09PWUpYnJlYWs7dmFyIGY9ZS5hbHRlcm5hdGU7aWYobnVsbD09PWYpe2Q9ZS5yZXR1cm47aWYobnVsbCE9PWQpe2M9ZDtjb250aW51ZX1icmVha31pZihlLmNoaWxkPT09Zi5jaGlsZCl7Zm9yKGY9ZS5jaGlsZDtmOyl7aWYoZj09PWMpcmV0dXJuIGdjKGUpLGE7aWYoZj09PWQpcmV0dXJuIGdjKGUpLGI7Zj1mLnNpYmxpbmd9dGhyb3cgRXJyb3IodSgxODgpKTt9aWYoYy5yZXR1cm4hPT1kLnJldHVybiljPWUsZD1mO2Vsc2V7Zm9yKHZhciBnPSExLGg9ZS5jaGlsZDtoOyl7aWYoaD09PWMpe2c9ITA7Yz1lO2Q9ZjticmVha31pZihoPT09ZCl7Zz0hMDtkPWU7Yz1mO2JyZWFrfWg9aC5zaWJsaW5nfWlmKCFnKXtmb3IoaD1mLmNoaWxkO2g7KXtpZihoPT09XG5jKXtnPSEwO2M9ZjtkPWU7YnJlYWt9aWYoaD09PWQpe2c9ITA7ZD1mO2M9ZTticmVha31oPWguc2libGluZ31pZighZyl0aHJvdyBFcnJvcih1KDE4OSkpO319aWYoYy5hbHRlcm5hdGUhPT1kKXRocm93IEVycm9yKHUoMTkwKSk7fWlmKDMhPT1jLnRhZyl0aHJvdyBFcnJvcih1KDE4OCkpO3JldHVybiBjLnN0YXRlTm9kZS5jdXJyZW50PT09Yz9hOmJ9ZnVuY3Rpb24gaWMoYSl7YT1oYyhhKTtpZighYSlyZXR1cm4gbnVsbDtmb3IodmFyIGI9YTs7KXtpZig1PT09Yi50YWd8fDY9PT1iLnRhZylyZXR1cm4gYjtpZihiLmNoaWxkKWIuY2hpbGQucmV0dXJuPWIsYj1iLmNoaWxkO2Vsc2V7aWYoYj09PWEpYnJlYWs7Zm9yKDshYi5zaWJsaW5nOyl7aWYoIWIucmV0dXJufHxiLnJldHVybj09PWEpcmV0dXJuIG51bGw7Yj1iLnJldHVybn1iLnNpYmxpbmcucmV0dXJuPWIucmV0dXJuO2I9Yi5zaWJsaW5nfX1yZXR1cm4gbnVsbH1cbnZhciBqYyxrYyxsYyxtYz0hMSxuYz1bXSxvYz1udWxsLHBjPW51bGwscWM9bnVsbCxyYz1uZXcgTWFwLHNjPW5ldyBNYXAsdGM9W10sdWM9XCJtb3VzZWRvd24gbW91c2V1cCB0b3VjaGNhbmNlbCB0b3VjaGVuZCB0b3VjaHN0YXJ0IGF1eGNsaWNrIGRibGNsaWNrIHBvaW50ZXJjYW5jZWwgcG9pbnRlcmRvd24gcG9pbnRlcnVwIGRyYWdlbmQgZHJhZ3N0YXJ0IGRyb3AgY29tcG9zaXRpb25lbmQgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGlucHV0IHRleHRJbnB1dCBjbG9zZSBjYW5jZWwgY29weSBjdXQgcGFzdGUgY2xpY2sgY2hhbmdlIGNvbnRleHRtZW51IHJlc2V0IHN1Ym1pdFwiLnNwbGl0KFwiIFwiKSx2Yz1cImZvY3VzIGJsdXIgZHJhZ2VudGVyIGRyYWdsZWF2ZSBtb3VzZW92ZXIgbW91c2VvdXQgcG9pbnRlcm92ZXIgcG9pbnRlcm91dCBnb3Rwb2ludGVyY2FwdHVyZSBsb3N0cG9pbnRlcmNhcHR1cmVcIi5zcGxpdChcIiBcIik7XG5mdW5jdGlvbiB3YyhhKXt2YXIgYj14YyhhKTt1Yy5mb3JFYWNoKGZ1bmN0aW9uKGMpe3ljKGMsYSxiKX0pO3ZjLmZvckVhY2goZnVuY3Rpb24oYyl7eWMoYyxhLGIpfSl9ZnVuY3Rpb24gemMoYSxiLGMsZCl7cmV0dXJue2Jsb2NrZWRPbjphLHRvcExldmVsVHlwZTpiLGV2ZW50U3lzdGVtRmxhZ3M6Y3wzMixuYXRpdmVFdmVudDpkfX1mdW5jdGlvbiBBYyhhLGIpe3N3aXRjaChhKXtjYXNlIFwiZm9jdXNcIjpjYXNlIFwiYmx1clwiOm9jPW51bGw7YnJlYWs7Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnbGVhdmVcIjpwYz1udWxsO2JyZWFrO2Nhc2UgXCJtb3VzZW92ZXJcIjpjYXNlIFwibW91c2VvdXRcIjpxYz1udWxsO2JyZWFrO2Nhc2UgXCJwb2ludGVyb3ZlclwiOmNhc2UgXCJwb2ludGVyb3V0XCI6cmMuZGVsZXRlKGIucG9pbnRlcklkKTticmVhaztjYXNlIFwiZ290cG9pbnRlcmNhcHR1cmVcIjpjYXNlIFwibG9zdHBvaW50ZXJjYXB0dXJlXCI6c2MuZGVsZXRlKGIucG9pbnRlcklkKX19XG5mdW5jdGlvbiBCYyhhLGIsYyxkLGUpe2lmKG51bGw9PT1hfHxhLm5hdGl2ZUV2ZW50IT09ZSlyZXR1cm4gYT16YyhiLGMsZCxlKSxudWxsIT09YiYmKGI9Q2MoYiksbnVsbCE9PWImJmtjKGIpKSxhO2EuZXZlbnRTeXN0ZW1GbGFnc3w9ZDtyZXR1cm4gYX1mdW5jdGlvbiBEYyhhLGIsYyxkKXtzd2l0Y2goYil7Y2FzZSBcImZvY3VzXCI6cmV0dXJuIG9jPUJjKG9jLGEsYixjLGQpLCEwO2Nhc2UgXCJkcmFnZW50ZXJcIjpyZXR1cm4gcGM9QmMocGMsYSxiLGMsZCksITA7Y2FzZSBcIm1vdXNlb3ZlclwiOnJldHVybiBxYz1CYyhxYyxhLGIsYyxkKSwhMDtjYXNlIFwicG9pbnRlcm92ZXJcIjp2YXIgZT1kLnBvaW50ZXJJZDtyYy5zZXQoZSxCYyhyYy5nZXQoZSl8fG51bGwsYSxiLGMsZCkpO3JldHVybiEwO2Nhc2UgXCJnb3Rwb2ludGVyY2FwdHVyZVwiOnJldHVybiBlPWQucG9pbnRlcklkLHNjLnNldChlLEJjKHNjLmdldChlKXx8bnVsbCxhLGIsYyxkKSksITB9cmV0dXJuITF9XG5mdW5jdGlvbiBFYyhhKXt2YXIgYj1GYyhhLnRhcmdldCk7aWYobnVsbCE9PWIpe3ZhciBjPWVjKGIpO2lmKG51bGwhPT1jKWlmKGI9Yy50YWcsMTM9PT1iKXtpZihiPWZjKGMpLG51bGwhPT1iKXthLmJsb2NrZWRPbj1iO3EudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5KGEucHJpb3JpdHksZnVuY3Rpb24oKXtsYyhjKX0pO3JldHVybn19ZWxzZSBpZigzPT09YiYmYy5zdGF0ZU5vZGUuaHlkcmF0ZSl7YS5ibG9ja2VkT249Mz09PWMudGFnP2Muc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtyZXR1cm59fWEuYmxvY2tlZE9uPW51bGx9ZnVuY3Rpb24gR2MoYSl7aWYobnVsbCE9PWEuYmxvY2tlZE9uKXJldHVybiExO3ZhciBiPUhjKGEudG9wTGV2ZWxUeXBlLGEuZXZlbnRTeXN0ZW1GbGFncyxhLm5hdGl2ZUV2ZW50KTtpZihudWxsIT09Yil7dmFyIGM9Q2MoYik7bnVsbCE9PWMmJmtjKGMpO2EuYmxvY2tlZE9uPWI7cmV0dXJuITF9cmV0dXJuITB9XG5mdW5jdGlvbiBJYyhhLGIsYyl7R2MoYSkmJmMuZGVsZXRlKGIpfWZ1bmN0aW9uIEpjKCl7Zm9yKG1jPSExOzA8bmMubGVuZ3RoOyl7dmFyIGE9bmNbMF07aWYobnVsbCE9PWEuYmxvY2tlZE9uKXthPUNjKGEuYmxvY2tlZE9uKTtudWxsIT09YSYmamMoYSk7YnJlYWt9dmFyIGI9SGMoYS50b3BMZXZlbFR5cGUsYS5ldmVudFN5c3RlbUZsYWdzLGEubmF0aXZlRXZlbnQpO251bGwhPT1iP2EuYmxvY2tlZE9uPWI6bmMuc2hpZnQoKX1udWxsIT09b2MmJkdjKG9jKSYmKG9jPW51bGwpO251bGwhPT1wYyYmR2MocGMpJiYocGM9bnVsbCk7bnVsbCE9PXFjJiZHYyhxYykmJihxYz1udWxsKTtyYy5mb3JFYWNoKEljKTtzYy5mb3JFYWNoKEljKX1mdW5jdGlvbiBLYyhhLGIpe2EuYmxvY2tlZE9uPT09YiYmKGEuYmxvY2tlZE9uPW51bGwsbWN8fChtYz0hMCxxLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2socS51bnN0YWJsZV9Ob3JtYWxQcmlvcml0eSxKYykpKX1cbmZ1bmN0aW9uIExjKGEpe2Z1bmN0aW9uIGIoYil7cmV0dXJuIEtjKGIsYSl9aWYoMDxuYy5sZW5ndGgpe0tjKG5jWzBdLGEpO2Zvcih2YXIgYz0xO2M8bmMubGVuZ3RoO2MrKyl7dmFyIGQ9bmNbY107ZC5ibG9ja2VkT249PT1hJiYoZC5ibG9ja2VkT249bnVsbCl9fW51bGwhPT1vYyYmS2Mob2MsYSk7bnVsbCE9PXBjJiZLYyhwYyxhKTtudWxsIT09cWMmJktjKHFjLGEpO3JjLmZvckVhY2goYik7c2MuZm9yRWFjaChiKTtmb3IoYz0wO2M8dGMubGVuZ3RoO2MrKylkPXRjW2NdLGQuYmxvY2tlZE9uPT09YSYmKGQuYmxvY2tlZE9uPW51bGwpO2Zvcig7MDx0Yy5sZW5ndGgmJihjPXRjWzBdLG51bGw9PT1jLmJsb2NrZWRPbik7KUVjKGMpLG51bGw9PT1jLmJsb2NrZWRPbiYmdGMuc2hpZnQoKX1cbmZ1bmN0aW9uIE1jKGEpe2E9YS50YXJnZXR8fGEuc3JjRWxlbWVudHx8d2luZG93O2EuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQmJihhPWEuY29ycmVzcG9uZGluZ1VzZUVsZW1lbnQpO3JldHVybiAzPT09YS5ub2RlVHlwZT9hLnBhcmVudE5vZGU6YX1mdW5jdGlvbiBOYyhhKXtkbyBhPWEucmV0dXJuO3doaWxlKGEmJjUhPT1hLnRhZyk7cmV0dXJuIGE/YTpudWxsfWZ1bmN0aW9uIE9jKGEsYixjKXtpZihiPURhKGEsYy5kaXNwYXRjaENvbmZpZy5waGFzZWRSZWdpc3RyYXRpb25OYW1lc1tiXSkpYy5fZGlzcGF0Y2hMaXN0ZW5lcnM9eGEoYy5fZGlzcGF0Y2hMaXN0ZW5lcnMsYiksYy5fZGlzcGF0Y2hJbnN0YW5jZXM9eGEoYy5fZGlzcGF0Y2hJbnN0YW5jZXMsYSl9XG5mdW5jdGlvbiBQYyhhKXtpZihhJiZhLmRpc3BhdGNoQ29uZmlnLnBoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzKXtmb3IodmFyIGI9YS5fdGFyZ2V0SW5zdCxjPVtdO2I7KWMucHVzaChiKSxiPU5jKGIpO2ZvcihiPWMubGVuZ3RoOzA8Yi0tOylPYyhjW2JdLFwiY2FwdHVyZWRcIixhKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKU9jKGNbYl0sXCJidWJibGVkXCIsYSl9fWZ1bmN0aW9uIFFjKGEsYixjKXthJiZjJiZjLmRpc3BhdGNoQ29uZmlnLnJlZ2lzdHJhdGlvbk5hbWUmJihiPURhKGEsYy5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lKSkmJihjLl9kaXNwYXRjaExpc3RlbmVycz14YShjLl9kaXNwYXRjaExpc3RlbmVycyxiKSxjLl9kaXNwYXRjaEluc3RhbmNlcz14YShjLl9kaXNwYXRjaEluc3RhbmNlcyxhKSl9ZnVuY3Rpb24gUmMoYSl7YSYmYS5kaXNwYXRjaENvbmZpZy5yZWdpc3RyYXRpb25OYW1lJiZRYyhhLl90YXJnZXRJbnN0LG51bGwsYSl9XG5mdW5jdGlvbiBTYyhhKXt5YShhLFBjKX1mdW5jdGlvbiBUYygpe3JldHVybiEwfWZ1bmN0aW9uIFVjKCl7cmV0dXJuITF9ZnVuY3Rpb24gRShhLGIsYyxkKXt0aGlzLmRpc3BhdGNoQ29uZmlnPWE7dGhpcy5fdGFyZ2V0SW5zdD1iO3RoaXMubmF0aXZlRXZlbnQ9YzthPXRoaXMuY29uc3RydWN0b3IuSW50ZXJmYWNlO2Zvcih2YXIgZSBpbiBhKWEuaGFzT3duUHJvcGVydHkoZSkmJigoYj1hW2VdKT90aGlzW2VdPWIoYyk6XCJ0YXJnZXRcIj09PWU/dGhpcy50YXJnZXQ9ZDp0aGlzW2VdPWNbZV0pO3RoaXMuaXNEZWZhdWx0UHJldmVudGVkPShudWxsIT1jLmRlZmF1bHRQcmV2ZW50ZWQ/Yy5kZWZhdWx0UHJldmVudGVkOiExPT09Yy5yZXR1cm5WYWx1ZSk/VGM6VWM7dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1VYztyZXR1cm4gdGhpc31cbm4oRS5wcm90b3R5cGUse3ByZXZlbnREZWZhdWx0OmZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwO3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEucHJldmVudERlZmF1bHQ/YS5wcmV2ZW50RGVmYXVsdCgpOlwidW5rbm93blwiIT09dHlwZW9mIGEucmV0dXJuVmFsdWUmJihhLnJldHVyblZhbHVlPSExKSx0aGlzLmlzRGVmYXVsdFByZXZlbnRlZD1UYyl9LHN0b3BQcm9wYWdhdGlvbjpmdW5jdGlvbigpe3ZhciBhPXRoaXMubmF0aXZlRXZlbnQ7YSYmKGEuc3RvcFByb3BhZ2F0aW9uP2Euc3RvcFByb3BhZ2F0aW9uKCk6XCJ1bmtub3duXCIhPT10eXBlb2YgYS5jYW5jZWxCdWJibGUmJihhLmNhbmNlbEJ1YmJsZT0hMCksdGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZD1UYyl9LHBlcnNpc3Q6ZnVuY3Rpb24oKXt0aGlzLmlzUGVyc2lzdGVudD1UY30saXNQZXJzaXN0ZW50OlVjLGRlc3RydWN0b3I6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmNvbnN0cnVjdG9yLkludGVyZmFjZSxcbmI7Zm9yKGIgaW4gYSl0aGlzW2JdPW51bGw7dGhpcy5uYXRpdmVFdmVudD10aGlzLl90YXJnZXRJbnN0PXRoaXMuZGlzcGF0Y2hDb25maWc9bnVsbDt0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkPXRoaXMuaXNEZWZhdWx0UHJldmVudGVkPVVjO3RoaXMuX2Rpc3BhdGNoSW5zdGFuY2VzPXRoaXMuX2Rpc3BhdGNoTGlzdGVuZXJzPW51bGx9fSk7RS5JbnRlcmZhY2U9e3R5cGU6bnVsbCx0YXJnZXQ6bnVsbCxjdXJyZW50VGFyZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGx9LGV2ZW50UGhhc2U6bnVsbCxidWJibGVzOm51bGwsY2FuY2VsYWJsZTpudWxsLHRpbWVTdGFtcDpmdW5jdGlvbihhKXtyZXR1cm4gYS50aW1lU3RhbXB8fERhdGUubm93KCl9LGRlZmF1bHRQcmV2ZW50ZWQ6bnVsbCxpc1RydXN0ZWQ6bnVsbH07XG5FLmV4dGVuZD1mdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7fWZ1bmN0aW9uIGMoKXtyZXR1cm4gZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIGQ9dGhpcztiLnByb3RvdHlwZT1kLnByb3RvdHlwZTt2YXIgZT1uZXcgYjtuKGUsYy5wcm90b3R5cGUpO2MucHJvdG90eXBlPWU7Yy5wcm90b3R5cGUuY29uc3RydWN0b3I9YztjLkludGVyZmFjZT1uKHt9LGQuSW50ZXJmYWNlLGEpO2MuZXh0ZW5kPWQuZXh0ZW5kO1ZjKGMpO3JldHVybiBjfTtWYyhFKTtmdW5jdGlvbiBXYyhhLGIsYyxkKXtpZih0aGlzLmV2ZW50UG9vbC5sZW5ndGgpe3ZhciBlPXRoaXMuZXZlbnRQb29sLnBvcCgpO3RoaXMuY2FsbChlLGEsYixjLGQpO3JldHVybiBlfXJldHVybiBuZXcgdGhpcyhhLGIsYyxkKX1cbmZ1bmN0aW9uIFhjKGEpe2lmKCEoYSBpbnN0YW5jZW9mIHRoaXMpKXRocm93IEVycm9yKHUoMjc5KSk7YS5kZXN0cnVjdG9yKCk7MTA+dGhpcy5ldmVudFBvb2wubGVuZ3RoJiZ0aGlzLmV2ZW50UG9vbC5wdXNoKGEpfWZ1bmN0aW9uIFZjKGEpe2EuZXZlbnRQb29sPVtdO2EuZ2V0UG9vbGVkPVdjO2EucmVsZWFzZT1YY312YXIgWWM9RS5leHRlbmQoe2FuaW1hdGlvbk5hbWU6bnVsbCxlbGFwc2VkVGltZTpudWxsLHBzZXVkb0VsZW1lbnQ6bnVsbH0pLFpjPUUuZXh0ZW5kKHtjbGlwYm9hcmREYXRhOmZ1bmN0aW9uKGEpe3JldHVyblwiY2xpcGJvYXJkRGF0YVwiaW4gYT9hLmNsaXBib2FyZERhdGE6d2luZG93LmNsaXBib2FyZERhdGF9fSksJGM9RS5leHRlbmQoe3ZpZXc6bnVsbCxkZXRhaWw6bnVsbH0pLGFkPSRjLmV4dGVuZCh7cmVsYXRlZFRhcmdldDpudWxsfSk7XG5mdW5jdGlvbiBiZChhKXt2YXIgYj1hLmtleUNvZGU7XCJjaGFyQ29kZVwiaW4gYT8oYT1hLmNoYXJDb2RlLDA9PT1hJiYxMz09PWImJihhPTEzKSk6YT1iOzEwPT09YSYmKGE9MTMpO3JldHVybiAzMjw9YXx8MTM9PT1hP2E6MH1cbnZhciBjZD17RXNjOlwiRXNjYXBlXCIsU3BhY2ViYXI6XCIgXCIsTGVmdDpcIkFycm93TGVmdFwiLFVwOlwiQXJyb3dVcFwiLFJpZ2h0OlwiQXJyb3dSaWdodFwiLERvd246XCJBcnJvd0Rvd25cIixEZWw6XCJEZWxldGVcIixXaW46XCJPU1wiLE1lbnU6XCJDb250ZXh0TWVudVwiLEFwcHM6XCJDb250ZXh0TWVudVwiLFNjcm9sbDpcIlNjcm9sbExvY2tcIixNb3pQcmludGFibGVLZXk6XCJVbmlkZW50aWZpZWRcIn0sZGQ9ezg6XCJCYWNrc3BhY2VcIiw5OlwiVGFiXCIsMTI6XCJDbGVhclwiLDEzOlwiRW50ZXJcIiwxNjpcIlNoaWZ0XCIsMTc6XCJDb250cm9sXCIsMTg6XCJBbHRcIiwxOTpcIlBhdXNlXCIsMjA6XCJDYXBzTG9ja1wiLDI3OlwiRXNjYXBlXCIsMzI6XCIgXCIsMzM6XCJQYWdlVXBcIiwzNDpcIlBhZ2VEb3duXCIsMzU6XCJFbmRcIiwzNjpcIkhvbWVcIiwzNzpcIkFycm93TGVmdFwiLDM4OlwiQXJyb3dVcFwiLDM5OlwiQXJyb3dSaWdodFwiLDQwOlwiQXJyb3dEb3duXCIsNDU6XCJJbnNlcnRcIiw0NjpcIkRlbGV0ZVwiLDExMjpcIkYxXCIsMTEzOlwiRjJcIiwxMTQ6XCJGM1wiLDExNTpcIkY0XCIsXG4xMTY6XCJGNVwiLDExNzpcIkY2XCIsMTE4OlwiRjdcIiwxMTk6XCJGOFwiLDEyMDpcIkY5XCIsMTIxOlwiRjEwXCIsMTIyOlwiRjExXCIsMTIzOlwiRjEyXCIsMTQ0OlwiTnVtTG9ja1wiLDE0NTpcIlNjcm9sbExvY2tcIiwyMjQ6XCJNZXRhXCJ9LGVkPXtBbHQ6XCJhbHRLZXlcIixDb250cm9sOlwiY3RybEtleVwiLE1ldGE6XCJtZXRhS2V5XCIsU2hpZnQ6XCJzaGlmdEtleVwifTtmdW5jdGlvbiBnZChhKXt2YXIgYj10aGlzLm5hdGl2ZUV2ZW50O3JldHVybiBiLmdldE1vZGlmaWVyU3RhdGU/Yi5nZXRNb2RpZmllclN0YXRlKGEpOihhPWVkW2FdKT8hIWJbYV06ITF9ZnVuY3Rpb24gaGQoKXtyZXR1cm4gZ2R9XG52YXIgaWQ9JGMuZXh0ZW5kKHtrZXk6ZnVuY3Rpb24oYSl7aWYoYS5rZXkpe3ZhciBiPWNkW2Eua2V5XXx8YS5rZXk7aWYoXCJVbmlkZW50aWZpZWRcIiE9PWIpcmV0dXJuIGJ9cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlPyhhPWJkKGEpLDEzPT09YT9cIkVudGVyXCI6U3RyaW5nLmZyb21DaGFyQ29kZShhKSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9kZFthLmtleUNvZGVdfHxcIlVuaWRlbnRpZmllZFwiOlwiXCJ9LGxvY2F0aW9uOm51bGwsY3RybEtleTpudWxsLHNoaWZ0S2V5Om51bGwsYWx0S2V5Om51bGwsbWV0YUtleTpudWxsLHJlcGVhdDpudWxsLGxvY2FsZTpudWxsLGdldE1vZGlmaWVyU3RhdGU6aGQsY2hhckNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09YS50eXBlP2JkKGEpOjB9LGtleUNvZGU6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH0sd2hpY2g6ZnVuY3Rpb24oYSl7cmV0dXJuXCJrZXlwcmVzc1wiPT09XG5hLnR5cGU/YmQoYSk6XCJrZXlkb3duXCI9PT1hLnR5cGV8fFwia2V5dXBcIj09PWEudHlwZT9hLmtleUNvZGU6MH19KSxqZD0wLGtkPTAsbGQ9ITEsbWQ9ITEsbmQ9JGMuZXh0ZW5kKHtzY3JlZW5YOm51bGwsc2NyZWVuWTpudWxsLGNsaWVudFg6bnVsbCxjbGllbnRZOm51bGwscGFnZVg6bnVsbCxwYWdlWTpudWxsLGN0cmxLZXk6bnVsbCxzaGlmdEtleTpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOmhkLGJ1dHRvbjpudWxsLGJ1dHRvbnM6bnVsbCxyZWxhdGVkVGFyZ2V0OmZ1bmN0aW9uKGEpe3JldHVybiBhLnJlbGF0ZWRUYXJnZXR8fChhLmZyb21FbGVtZW50PT09YS5zcmNFbGVtZW50P2EudG9FbGVtZW50OmEuZnJvbUVsZW1lbnQpfSxtb3ZlbWVudFg6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFhcImluIGEpcmV0dXJuIGEubW92ZW1lbnRYO3ZhciBiPWpkO2pkPWEuc2NyZWVuWDtyZXR1cm4gbGQ/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblgtXG5iOjA6KGxkPSEwLDApfSxtb3ZlbWVudFk6ZnVuY3Rpb24oYSl7aWYoXCJtb3ZlbWVudFlcImluIGEpcmV0dXJuIGEubW92ZW1lbnRZO3ZhciBiPWtkO2tkPWEuc2NyZWVuWTtyZXR1cm4gbWQ/XCJtb3VzZW1vdmVcIj09PWEudHlwZT9hLnNjcmVlblktYjowOihtZD0hMCwwKX19KSxvZD1uZC5leHRlbmQoe3BvaW50ZXJJZDpudWxsLHdpZHRoOm51bGwsaGVpZ2h0Om51bGwscHJlc3N1cmU6bnVsbCx0YW5nZW50aWFsUHJlc3N1cmU6bnVsbCx0aWx0WDpudWxsLHRpbHRZOm51bGwsdHdpc3Q6bnVsbCxwb2ludGVyVHlwZTpudWxsLGlzUHJpbWFyeTpudWxsfSkscGQ9bmQuZXh0ZW5kKHtkYXRhVHJhbnNmZXI6bnVsbH0pLHFkPSRjLmV4dGVuZCh7dG91Y2hlczpudWxsLHRhcmdldFRvdWNoZXM6bnVsbCxjaGFuZ2VkVG91Y2hlczpudWxsLGFsdEtleTpudWxsLG1ldGFLZXk6bnVsbCxjdHJsS2V5Om51bGwsc2hpZnRLZXk6bnVsbCxnZXRNb2RpZmllclN0YXRlOmhkfSkscmQ9RS5leHRlbmQoe3Byb3BlcnR5TmFtZTpudWxsLFxuZWxhcHNlZFRpbWU6bnVsbCxwc2V1ZG9FbGVtZW50Om51bGx9KSxzZD1uZC5leHRlbmQoe2RlbHRhWDpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWFwiaW4gYT9hLmRlbHRhWDpcIndoZWVsRGVsdGFYXCJpbiBhPy1hLndoZWVsRGVsdGFYOjB9LGRlbHRhWTpmdW5jdGlvbihhKXtyZXR1cm5cImRlbHRhWVwiaW4gYT9hLmRlbHRhWTpcIndoZWVsRGVsdGFZXCJpbiBhPy1hLndoZWVsRGVsdGFZOlwid2hlZWxEZWx0YVwiaW4gYT8tYS53aGVlbERlbHRhOjB9LGRlbHRhWjpudWxsLGRlbHRhTW9kZTpudWxsfSksdGQ9W1tcImJsdXJcIixcImJsdXJcIiwwXSxbXCJjYW5jZWxcIixcImNhbmNlbFwiLDBdLFtcImNsaWNrXCIsXCJjbGlja1wiLDBdLFtcImNsb3NlXCIsXCJjbG9zZVwiLDBdLFtcImNvbnRleHRtZW51XCIsXCJjb250ZXh0TWVudVwiLDBdLFtcImNvcHlcIixcImNvcHlcIiwwXSxbXCJjdXRcIixcImN1dFwiLDBdLFtcImF1eGNsaWNrXCIsXCJhdXhDbGlja1wiLDBdLFtcImRibGNsaWNrXCIsXCJkb3VibGVDbGlja1wiLDBdLFtcImRyYWdlbmRcIixcImRyYWdFbmRcIixcbjBdLFtcImRyYWdzdGFydFwiLFwiZHJhZ1N0YXJ0XCIsMF0sW1wiZHJvcFwiLFwiZHJvcFwiLDBdLFtcImZvY3VzXCIsXCJmb2N1c1wiLDBdLFtcImlucHV0XCIsXCJpbnB1dFwiLDBdLFtcImludmFsaWRcIixcImludmFsaWRcIiwwXSxbXCJrZXlkb3duXCIsXCJrZXlEb3duXCIsMF0sW1wia2V5cHJlc3NcIixcImtleVByZXNzXCIsMF0sW1wia2V5dXBcIixcImtleVVwXCIsMF0sW1wibW91c2Vkb3duXCIsXCJtb3VzZURvd25cIiwwXSxbXCJtb3VzZXVwXCIsXCJtb3VzZVVwXCIsMF0sW1wicGFzdGVcIixcInBhc3RlXCIsMF0sW1wicGF1c2VcIixcInBhdXNlXCIsMF0sW1wicGxheVwiLFwicGxheVwiLDBdLFtcInBvaW50ZXJjYW5jZWxcIixcInBvaW50ZXJDYW5jZWxcIiwwXSxbXCJwb2ludGVyZG93blwiLFwicG9pbnRlckRvd25cIiwwXSxbXCJwb2ludGVydXBcIixcInBvaW50ZXJVcFwiLDBdLFtcInJhdGVjaGFuZ2VcIixcInJhdGVDaGFuZ2VcIiwwXSxbXCJyZXNldFwiLFwicmVzZXRcIiwwXSxbXCJzZWVrZWRcIixcInNlZWtlZFwiLDBdLFtcInN1Ym1pdFwiLFwic3VibWl0XCIsMF0sW1widG91Y2hjYW5jZWxcIixcInRvdWNoQ2FuY2VsXCIsXG4wXSxbXCJ0b3VjaGVuZFwiLFwidG91Y2hFbmRcIiwwXSxbXCJ0b3VjaHN0YXJ0XCIsXCJ0b3VjaFN0YXJ0XCIsMF0sW1widm9sdW1lY2hhbmdlXCIsXCJ2b2x1bWVDaGFuZ2VcIiwwXSxbXCJkcmFnXCIsXCJkcmFnXCIsMV0sW1wiZHJhZ2VudGVyXCIsXCJkcmFnRW50ZXJcIiwxXSxbXCJkcmFnZXhpdFwiLFwiZHJhZ0V4aXRcIiwxXSxbXCJkcmFnbGVhdmVcIixcImRyYWdMZWF2ZVwiLDFdLFtcImRyYWdvdmVyXCIsXCJkcmFnT3ZlclwiLDFdLFtcIm1vdXNlbW92ZVwiLFwibW91c2VNb3ZlXCIsMV0sW1wibW91c2VvdXRcIixcIm1vdXNlT3V0XCIsMV0sW1wibW91c2VvdmVyXCIsXCJtb3VzZU92ZXJcIiwxXSxbXCJwb2ludGVybW92ZVwiLFwicG9pbnRlck1vdmVcIiwxXSxbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyT3V0XCIsMV0sW1wicG9pbnRlcm92ZXJcIixcInBvaW50ZXJPdmVyXCIsMV0sW1wic2Nyb2xsXCIsXCJzY3JvbGxcIiwxXSxbXCJ0b2dnbGVcIixcInRvZ2dsZVwiLDFdLFtcInRvdWNobW92ZVwiLFwidG91Y2hNb3ZlXCIsMV0sW1wid2hlZWxcIixcIndoZWVsXCIsMV0sW1wiYWJvcnRcIixcImFib3J0XCIsXG4yXSxbWmIsXCJhbmltYXRpb25FbmRcIiwyXSxbJGIsXCJhbmltYXRpb25JdGVyYXRpb25cIiwyXSxbYWMsXCJhbmltYXRpb25TdGFydFwiLDJdLFtcImNhbnBsYXlcIixcImNhblBsYXlcIiwyXSxbXCJjYW5wbGF5dGhyb3VnaFwiLFwiY2FuUGxheVRocm91Z2hcIiwyXSxbXCJkdXJhdGlvbmNoYW5nZVwiLFwiZHVyYXRpb25DaGFuZ2VcIiwyXSxbXCJlbXB0aWVkXCIsXCJlbXB0aWVkXCIsMl0sW1wiZW5jcnlwdGVkXCIsXCJlbmNyeXB0ZWRcIiwyXSxbXCJlbmRlZFwiLFwiZW5kZWRcIiwyXSxbXCJlcnJvclwiLFwiZXJyb3JcIiwyXSxbXCJnb3Rwb2ludGVyY2FwdHVyZVwiLFwiZ290UG9pbnRlckNhcHR1cmVcIiwyXSxbXCJsb2FkXCIsXCJsb2FkXCIsMl0sW1wibG9hZGVkZGF0YVwiLFwibG9hZGVkRGF0YVwiLDJdLFtcImxvYWRlZG1ldGFkYXRhXCIsXCJsb2FkZWRNZXRhZGF0YVwiLDJdLFtcImxvYWRzdGFydFwiLFwibG9hZFN0YXJ0XCIsMl0sW1wibG9zdHBvaW50ZXJjYXB0dXJlXCIsXCJsb3N0UG9pbnRlckNhcHR1cmVcIiwyXSxbXCJwbGF5aW5nXCIsXCJwbGF5aW5nXCIsMl0sW1wicHJvZ3Jlc3NcIixcblwicHJvZ3Jlc3NcIiwyXSxbXCJzZWVraW5nXCIsXCJzZWVraW5nXCIsMl0sW1wic3RhbGxlZFwiLFwic3RhbGxlZFwiLDJdLFtcInN1c3BlbmRcIixcInN1c3BlbmRcIiwyXSxbXCJ0aW1ldXBkYXRlXCIsXCJ0aW1lVXBkYXRlXCIsMl0sW2JjLFwidHJhbnNpdGlvbkVuZFwiLDJdLFtcIndhaXRpbmdcIixcIndhaXRpbmdcIiwyXV0sdWQ9e30sdmQ9e30sd2Q9MDtmb3IoO3dkPHRkLmxlbmd0aDt3ZCsrKXt2YXIgeWQ9dGRbd2RdLHpkPXlkWzBdLEFkPXlkWzFdLEJkPXlkWzJdLENkPVwib25cIisoQWRbMF0udG9VcHBlckNhc2UoKStBZC5zbGljZSgxKSksRGQ9e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOkNkLGNhcHR1cmVkOkNkK1wiQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6W3pkXSxldmVudFByaW9yaXR5OkJkfTt1ZFtBZF09RGQ7dmRbemRdPURkfVxudmFyIEVkPXtldmVudFR5cGVzOnVkLGdldEV2ZW50UHJpb3JpdHk6ZnVuY3Rpb24oYSl7YT12ZFthXTtyZXR1cm4gdm9pZCAwIT09YT9hLmV2ZW50UHJpb3JpdHk6Mn0sZXh0cmFjdEV2ZW50czpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZT12ZFthXTtpZighZSlyZXR1cm4gbnVsbDtzd2l0Y2goYSl7Y2FzZSBcImtleXByZXNzXCI6aWYoMD09PWJkKGMpKXJldHVybiBudWxsO2Nhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6YT1pZDticmVhaztjYXNlIFwiYmx1clwiOmNhc2UgXCJmb2N1c1wiOmE9YWQ7YnJlYWs7Y2FzZSBcImNsaWNrXCI6aWYoMj09PWMuYnV0dG9uKXJldHVybiBudWxsO2Nhc2UgXCJhdXhjbGlja1wiOmNhc2UgXCJkYmxjbGlja1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwibW91c2Vtb3ZlXCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwibW91c2VvdXRcIjpjYXNlIFwibW91c2VvdmVyXCI6Y2FzZSBcImNvbnRleHRtZW51XCI6YT1uZDticmVhaztjYXNlIFwiZHJhZ1wiOmNhc2UgXCJkcmFnZW5kXCI6Y2FzZSBcImRyYWdlbnRlclwiOmNhc2UgXCJkcmFnZXhpdFwiOmNhc2UgXCJkcmFnbGVhdmVcIjpjYXNlIFwiZHJhZ292ZXJcIjpjYXNlIFwiZHJhZ3N0YXJ0XCI6Y2FzZSBcImRyb3BcIjphPVxucGQ7YnJlYWs7Y2FzZSBcInRvdWNoY2FuY2VsXCI6Y2FzZSBcInRvdWNoZW5kXCI6Y2FzZSBcInRvdWNobW92ZVwiOmNhc2UgXCJ0b3VjaHN0YXJ0XCI6YT1xZDticmVhaztjYXNlIFpiOmNhc2UgJGI6Y2FzZSBhYzphPVljO2JyZWFrO2Nhc2UgYmM6YT1yZDticmVhaztjYXNlIFwic2Nyb2xsXCI6YT0kYzticmVhaztjYXNlIFwid2hlZWxcIjphPXNkO2JyZWFrO2Nhc2UgXCJjb3B5XCI6Y2FzZSBcImN1dFwiOmNhc2UgXCJwYXN0ZVwiOmE9WmM7YnJlYWs7Y2FzZSBcImdvdHBvaW50ZXJjYXB0dXJlXCI6Y2FzZSBcImxvc3Rwb2ludGVyY2FwdHVyZVwiOmNhc2UgXCJwb2ludGVyY2FuY2VsXCI6Y2FzZSBcInBvaW50ZXJkb3duXCI6Y2FzZSBcInBvaW50ZXJtb3ZlXCI6Y2FzZSBcInBvaW50ZXJvdXRcIjpjYXNlIFwicG9pbnRlcm92ZXJcIjpjYXNlIFwicG9pbnRlcnVwXCI6YT1vZDticmVhaztkZWZhdWx0OmE9RX1iPWEuZ2V0UG9vbGVkKGUsYixjLGQpO1NjKGIpO3JldHVybiBifX0sRmQ9cS51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eSxcbkdkPXEudW5zdGFibGVfcnVuV2l0aFByaW9yaXR5LEhkPUVkLmdldEV2ZW50UHJpb3JpdHksSWQ9MTAsSmQ9W107XG5mdW5jdGlvbiBLZChhKXt2YXIgYj1hLnRhcmdldEluc3QsYz1iO2Rve2lmKCFjKXthLmFuY2VzdG9ycy5wdXNoKGMpO2JyZWFrfXZhciBkPWM7aWYoMz09PWQudGFnKWQ9ZC5zdGF0ZU5vZGUuY29udGFpbmVySW5mbztlbHNle2Zvcig7ZC5yZXR1cm47KWQ9ZC5yZXR1cm47ZD0zIT09ZC50YWc/bnVsbDpkLnN0YXRlTm9kZS5jb250YWluZXJJbmZvfWlmKCFkKWJyZWFrO2I9Yy50YWc7NSE9PWImJjYhPT1ifHxhLmFuY2VzdG9ycy5wdXNoKGMpO2M9RmMoZCl9d2hpbGUoYyk7Zm9yKGM9MDtjPGEuYW5jZXN0b3JzLmxlbmd0aDtjKyspe2I9YS5hbmNlc3RvcnNbY107dmFyIGU9TWMoYS5uYXRpdmVFdmVudCk7ZD1hLnRvcExldmVsVHlwZTtmb3IodmFyIGY9YS5uYXRpdmVFdmVudCxnPWEuZXZlbnRTeXN0ZW1GbGFncyxoPW51bGwsaz0wO2s8ZWEubGVuZ3RoO2srKyl7dmFyIGw9ZWFba107bCYmKGw9bC5leHRyYWN0RXZlbnRzKGQsYixmLGUsZykpJiYoaD14YShoLGwpKX1CYShoKX19XG52YXIgTGQ9ITA7ZnVuY3Rpb24gRihhLGIpe01kKGIsYSwhMSl9ZnVuY3Rpb24gTWQoYSxiLGMpe3N3aXRjaChIZChiKSl7Y2FzZSAwOnZhciBkPU5kLmJpbmQobnVsbCxiLDEpO2JyZWFrO2Nhc2UgMTpkPU9kLmJpbmQobnVsbCxiLDEpO2JyZWFrO2RlZmF1bHQ6ZD1QZC5iaW5kKG51bGwsYiwxKX1jP2EuYWRkRXZlbnRMaXN0ZW5lcihiLGQsITApOmEuYWRkRXZlbnRMaXN0ZW5lcihiLGQsITEpfWZ1bmN0aW9uIE5kKGEsYixjKXtpYnx8Z2IoKTt2YXIgZD1QZCxlPWliO2liPSEwO3RyeXtmYihkLGEsYixjKX1maW5hbGx5eyhpYj1lKXx8a2IoKX19ZnVuY3Rpb24gT2QoYSxiLGMpe0dkKEZkLFBkLmJpbmQobnVsbCxhLGIsYykpfVxuZnVuY3Rpb24gUWQoYSxiLGMsZCl7aWYoSmQubGVuZ3RoKXt2YXIgZT1KZC5wb3AoKTtlLnRvcExldmVsVHlwZT1hO2UuZXZlbnRTeXN0ZW1GbGFncz1iO2UubmF0aXZlRXZlbnQ9YztlLnRhcmdldEluc3Q9ZDthPWV9ZWxzZSBhPXt0b3BMZXZlbFR5cGU6YSxldmVudFN5c3RlbUZsYWdzOmIsbmF0aXZlRXZlbnQ6Yyx0YXJnZXRJbnN0OmQsYW5jZXN0b3JzOltdfTt0cnl7aWYoYj1LZCxjPWEsamIpYihjLHZvaWQgMCk7ZWxzZXtqYj0hMDt0cnl7aGIoYixjLHZvaWQgMCl9ZmluYWxseXtqYj0hMSxrYigpfX19ZmluYWxseXthLnRvcExldmVsVHlwZT1udWxsLGEubmF0aXZlRXZlbnQ9bnVsbCxhLnRhcmdldEluc3Q9bnVsbCxhLmFuY2VzdG9ycy5sZW5ndGg9MCxKZC5sZW5ndGg8SWQmJkpkLnB1c2goYSl9fVxuZnVuY3Rpb24gUGQoYSxiLGMpe2lmKExkKWlmKDA8bmMubGVuZ3RoJiYtMTx1Yy5pbmRleE9mKGEpKWE9emMobnVsbCxhLGIsYyksbmMucHVzaChhKTtlbHNle3ZhciBkPUhjKGEsYixjKTtudWxsPT09ZD9BYyhhLGMpOi0xPHVjLmluZGV4T2YoYSk/KGE9emMoZCxhLGIsYyksbmMucHVzaChhKSk6RGMoZCxhLGIsYyl8fChBYyhhLGMpLFFkKGEsYixjLG51bGwpKX19ZnVuY3Rpb24gSGMoYSxiLGMpe3ZhciBkPU1jKGMpO2Q9RmMoZCk7aWYobnVsbCE9PWQpe3ZhciBlPWVjKGQpO2lmKG51bGw9PT1lKWQ9bnVsbDtlbHNle3ZhciBmPWUudGFnO2lmKDEzPT09Zil7ZD1mYyhlKTtpZihudWxsIT09ZClyZXR1cm4gZDtkPW51bGx9ZWxzZSBpZigzPT09Zil7aWYoZS5zdGF0ZU5vZGUuaHlkcmF0ZSlyZXR1cm4gMz09PWUudGFnP2Uuc3RhdGVOb2RlLmNvbnRhaW5lckluZm86bnVsbDtkPW51bGx9ZWxzZSBlIT09ZCYmKGQ9bnVsbCl9fVFkKGEsYixjLGQpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gUmQoYSl7aWYoIVlhKXJldHVybiExO2E9XCJvblwiK2E7dmFyIGI9YSBpbiBkb2N1bWVudDtifHwoYj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLGIuc2V0QXR0cmlidXRlKGEsXCJyZXR1cm47XCIpLGI9XCJmdW5jdGlvblwiPT09dHlwZW9mIGJbYV0pO3JldHVybiBifXZhciBTZD1uZXcgKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBXZWFrTWFwP1dlYWtNYXA6TWFwKTtmdW5jdGlvbiB4YyhhKXt2YXIgYj1TZC5nZXQoYSk7dm9pZCAwPT09YiYmKGI9bmV3IFNldCxTZC5zZXQoYSxiKSk7cmV0dXJuIGJ9XG5mdW5jdGlvbiB5YyhhLGIsYyl7aWYoIWMuaGFzKGEpKXtzd2l0Y2goYSl7Y2FzZSBcInNjcm9sbFwiOk1kKGIsXCJzY3JvbGxcIiwhMCk7YnJlYWs7Y2FzZSBcImZvY3VzXCI6Y2FzZSBcImJsdXJcIjpNZChiLFwiZm9jdXNcIiwhMCk7TWQoYixcImJsdXJcIiwhMCk7Yy5hZGQoXCJibHVyXCIpO2MuYWRkKFwiZm9jdXNcIik7YnJlYWs7Y2FzZSBcImNhbmNlbFwiOmNhc2UgXCJjbG9zZVwiOlJkKGEpJiZNZChiLGEsITApO2JyZWFrO2Nhc2UgXCJpbnZhbGlkXCI6Y2FzZSBcInN1Ym1pdFwiOmNhc2UgXCJyZXNldFwiOmJyZWFrO2RlZmF1bHQ6LTE9PT1jYy5pbmRleE9mKGEpJiZGKGEsYil9Yy5hZGQoYSl9fVxudmFyIFRkPXthbmltYXRpb25JdGVyYXRpb25Db3VudDohMCxib3JkZXJJbWFnZU91dHNldDohMCxib3JkZXJJbWFnZVNsaWNlOiEwLGJvcmRlckltYWdlV2lkdGg6ITAsYm94RmxleDohMCxib3hGbGV4R3JvdXA6ITAsYm94T3JkaW5hbEdyb3VwOiEwLGNvbHVtbkNvdW50OiEwLGNvbHVtbnM6ITAsZmxleDohMCxmbGV4R3JvdzohMCxmbGV4UG9zaXRpdmU6ITAsZmxleFNocmluazohMCxmbGV4TmVnYXRpdmU6ITAsZmxleE9yZGVyOiEwLGdyaWRBcmVhOiEwLGdyaWRSb3c6ITAsZ3JpZFJvd0VuZDohMCxncmlkUm93U3BhbjohMCxncmlkUm93U3RhcnQ6ITAsZ3JpZENvbHVtbjohMCxncmlkQ29sdW1uRW5kOiEwLGdyaWRDb2x1bW5TcGFuOiEwLGdyaWRDb2x1bW5TdGFydDohMCxmb250V2VpZ2h0OiEwLGxpbmVDbGFtcDohMCxsaW5lSGVpZ2h0OiEwLG9wYWNpdHk6ITAsb3JkZXI6ITAsb3JwaGFuczohMCx0YWJTaXplOiEwLHdpZG93czohMCx6SW5kZXg6ITAsem9vbTohMCxmaWxsT3BhY2l0eTohMCxcbmZsb29kT3BhY2l0eTohMCxzdG9wT3BhY2l0eTohMCxzdHJva2VEYXNoYXJyYXk6ITAsc3Ryb2tlRGFzaG9mZnNldDohMCxzdHJva2VNaXRlcmxpbWl0OiEwLHN0cm9rZU9wYWNpdHk6ITAsc3Ryb2tlV2lkdGg6ITB9LFVkPVtcIldlYmtpdFwiLFwibXNcIixcIk1velwiLFwiT1wiXTtPYmplY3Qua2V5cyhUZCkuZm9yRWFjaChmdW5jdGlvbihhKXtVZC5mb3JFYWNoKGZ1bmN0aW9uKGIpe2I9YithLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK2Euc3Vic3RyaW5nKDEpO1RkW2JdPVRkW2FdfSl9KTtmdW5jdGlvbiBWZChhLGIsYyl7cmV0dXJuIG51bGw9PWJ8fFwiYm9vbGVhblwiPT09dHlwZW9mIGJ8fFwiXCI9PT1iP1wiXCI6Y3x8XCJudW1iZXJcIiE9PXR5cGVvZiBifHwwPT09Ynx8VGQuaGFzT3duUHJvcGVydHkoYSkmJlRkW2FdPyhcIlwiK2IpLnRyaW0oKTpiK1wicHhcIn1cbmZ1bmN0aW9uIFdkKGEsYil7YT1hLnN0eWxlO2Zvcih2YXIgYyBpbiBiKWlmKGIuaGFzT3duUHJvcGVydHkoYykpe3ZhciBkPTA9PT1jLmluZGV4T2YoXCItLVwiKSxlPVZkKGMsYltjXSxkKTtcImZsb2F0XCI9PT1jJiYoYz1cImNzc0Zsb2F0XCIpO2Q/YS5zZXRQcm9wZXJ0eShjLGUpOmFbY109ZX19dmFyIFhkPW4oe21lbnVpdGVtOiEwfSx7YXJlYTohMCxiYXNlOiEwLGJyOiEwLGNvbDohMCxlbWJlZDohMCxocjohMCxpbWc6ITAsaW5wdXQ6ITAsa2V5Z2VuOiEwLGxpbms6ITAsbWV0YTohMCxwYXJhbTohMCxzb3VyY2U6ITAsdHJhY2s6ITAsd2JyOiEwfSk7XG5mdW5jdGlvbiBZZChhLGIpe2lmKGIpe2lmKFhkW2FdJiYobnVsbCE9Yi5jaGlsZHJlbnx8bnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCkpdGhyb3cgRXJyb3IodSgxMzcsYSxcIlwiKSk7aWYobnVsbCE9Yi5kYW5nZXJvdXNseVNldElubmVySFRNTCl7aWYobnVsbCE9Yi5jaGlsZHJlbil0aHJvdyBFcnJvcih1KDYwKSk7aWYoIShcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJlwiX19odG1sXCJpbiBiLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MKSl0aHJvdyBFcnJvcih1KDYxKSk7fWlmKG51bGwhPWIuc3R5bGUmJlwib2JqZWN0XCIhPT10eXBlb2YgYi5zdHlsZSl0aHJvdyBFcnJvcih1KDYyLFwiXCIpKTt9fVxuZnVuY3Rpb24gWmQoYSxiKXtpZigtMT09PWEuaW5kZXhPZihcIi1cIikpcmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBiLmlzO3N3aXRjaChhKXtjYXNlIFwiYW5ub3RhdGlvbi14bWxcIjpjYXNlIFwiY29sb3ItcHJvZmlsZVwiOmNhc2UgXCJmb250LWZhY2VcIjpjYXNlIFwiZm9udC1mYWNlLXNyY1wiOmNhc2UgXCJmb250LWZhY2UtdXJpXCI6Y2FzZSBcImZvbnQtZmFjZS1mb3JtYXRcIjpjYXNlIFwiZm9udC1mYWNlLW5hbWVcIjpjYXNlIFwibWlzc2luZy1nbHlwaFwiOnJldHVybiExO2RlZmF1bHQ6cmV0dXJuITB9fWZ1bmN0aW9uICRkKGEsYil7YT05PT09YS5ub2RlVHlwZXx8MTE9PT1hLm5vZGVUeXBlP2E6YS5vd25lckRvY3VtZW50O3ZhciBjPXhjKGEpO2I9amFbYl07Zm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspeWMoYltkXSxhLGMpfWZ1bmN0aW9uIGFlKCl7fVxuZnVuY3Rpb24gYmUoYSl7YT1hfHwoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBkb2N1bWVudD9kb2N1bWVudDp2b2lkIDApO2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgYSlyZXR1cm4gbnVsbDt0cnl7cmV0dXJuIGEuYWN0aXZlRWxlbWVudHx8YS5ib2R5fWNhdGNoKGIpe3JldHVybiBhLmJvZHl9fWZ1bmN0aW9uIGNlKGEpe2Zvcig7YSYmYS5maXJzdENoaWxkOylhPWEuZmlyc3RDaGlsZDtyZXR1cm4gYX1mdW5jdGlvbiBkZShhLGIpe3ZhciBjPWNlKGEpO2E9MDtmb3IodmFyIGQ7Yzspe2lmKDM9PT1jLm5vZGVUeXBlKXtkPWErYy50ZXh0Q29udGVudC5sZW5ndGg7aWYoYTw9YiYmZD49YilyZXR1cm57bm9kZTpjLG9mZnNldDpiLWF9O2E9ZH1hOntmb3IoO2M7KXtpZihjLm5leHRTaWJsaW5nKXtjPWMubmV4dFNpYmxpbmc7YnJlYWsgYX1jPWMucGFyZW50Tm9kZX1jPXZvaWQgMH1jPWNlKGMpfX1cbmZ1bmN0aW9uIGVlKGEsYil7cmV0dXJuIGEmJmI/YT09PWI/ITA6YSYmMz09PWEubm9kZVR5cGU/ITE6YiYmMz09PWIubm9kZVR5cGU/ZWUoYSxiLnBhcmVudE5vZGUpOlwiY29udGFpbnNcImluIGE/YS5jb250YWlucyhiKTphLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uPyEhKGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oYikmMTYpOiExOiExfWZ1bmN0aW9uIGZlKCl7Zm9yKHZhciBhPXdpbmRvdyxiPWJlKCk7YiBpbnN0YW5jZW9mIGEuSFRNTElGcmFtZUVsZW1lbnQ7KXt0cnl7dmFyIGM9XCJzdHJpbmdcIj09PXR5cGVvZiBiLmNvbnRlbnRXaW5kb3cubG9jYXRpb24uaHJlZn1jYXRjaChkKXtjPSExfWlmKGMpYT1iLmNvbnRlbnRXaW5kb3c7ZWxzZSBicmVhaztiPWJlKGEuZG9jdW1lbnQpfXJldHVybiBifVxuZnVuY3Rpb24gZ2UoYSl7dmFyIGI9YSYmYS5ub2RlTmFtZSYmYS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO3JldHVybiBiJiYoXCJpbnB1dFwiPT09YiYmKFwidGV4dFwiPT09YS50eXBlfHxcInNlYXJjaFwiPT09YS50eXBlfHxcInRlbFwiPT09YS50eXBlfHxcInVybFwiPT09YS50eXBlfHxcInBhc3N3b3JkXCI9PT1hLnR5cGUpfHxcInRleHRhcmVhXCI9PT1ifHxcInRydWVcIj09PWEuY29udGVudEVkaXRhYmxlKX12YXIgaGU9XCIkXCIsaWU9XCIvJFwiLGplPVwiJD9cIixrZT1cIiQhXCIsbGU9bnVsbCxtZT1udWxsO2Z1bmN0aW9uIG5lKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJidXR0b25cIjpjYXNlIFwiaW5wdXRcIjpjYXNlIFwic2VsZWN0XCI6Y2FzZSBcInRleHRhcmVhXCI6cmV0dXJuISFiLmF1dG9Gb2N1c31yZXR1cm4hMX1cbmZ1bmN0aW9uIG9lKGEsYil7cmV0dXJuXCJ0ZXh0YXJlYVwiPT09YXx8XCJvcHRpb25cIj09PWF8fFwibm9zY3JpcHRcIj09PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYi5jaGlsZHJlbnx8XCJudW1iZXJcIj09PXR5cGVvZiBiLmNoaWxkcmVufHxcIm9iamVjdFwiPT09dHlwZW9mIGIuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwmJm51bGwhPT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MJiZudWxsIT1iLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MLl9faHRtbH12YXIgcGU9XCJmdW5jdGlvblwiPT09dHlwZW9mIHNldFRpbWVvdXQ/c2V0VGltZW91dDp2b2lkIDAscWU9XCJmdW5jdGlvblwiPT09dHlwZW9mIGNsZWFyVGltZW91dD9jbGVhclRpbWVvdXQ6dm9pZCAwO2Z1bmN0aW9uIHJlKGEpe2Zvcig7bnVsbCE9YTthPWEubmV4dFNpYmxpbmcpe3ZhciBiPWEubm9kZVR5cGU7aWYoMT09PWJ8fDM9PT1iKWJyZWFrfXJldHVybiBhfVxuZnVuY3Rpb24gc2UoYSl7YT1hLnByZXZpb3VzU2libGluZztmb3IodmFyIGI9MDthOyl7aWYoOD09PWEubm9kZVR5cGUpe3ZhciBjPWEuZGF0YTtpZihjPT09aGV8fGM9PT1rZXx8Yz09PWplKXtpZigwPT09YilyZXR1cm4gYTtiLS19ZWxzZSBjPT09aWUmJmIrK31hPWEucHJldmlvdXNTaWJsaW5nfXJldHVybiBudWxsfXZhciB0ZT1NYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyKSx1ZT1cIl9fcmVhY3RJbnRlcm5hbEluc3RhbmNlJFwiK3RlLHZlPVwiX19yZWFjdEV2ZW50SGFuZGxlcnMkXCIrdGUsd2U9XCJfX3JlYWN0Q29udGFpbmVyZSRcIit0ZTtcbmZ1bmN0aW9uIEZjKGEpe3ZhciBiPWFbdWVdO2lmKGIpcmV0dXJuIGI7Zm9yKHZhciBjPWEucGFyZW50Tm9kZTtjOyl7aWYoYj1jW3dlXXx8Y1t1ZV0pe2M9Yi5hbHRlcm5hdGU7aWYobnVsbCE9PWIuY2hpbGR8fG51bGwhPT1jJiZudWxsIT09Yy5jaGlsZClmb3IoYT1zZShhKTtudWxsIT09YTspe2lmKGM9YVt1ZV0pcmV0dXJuIGM7YT1zZShhKX1yZXR1cm4gYn1hPWM7Yz1hLnBhcmVudE5vZGV9cmV0dXJuIG51bGx9ZnVuY3Rpb24gQ2MoYSl7YT1hW3VlXXx8YVt3ZV07cmV0dXJuIWF8fDUhPT1hLnRhZyYmNiE9PWEudGFnJiYxMyE9PWEudGFnJiYzIT09YS50YWc/bnVsbDphfWZ1bmN0aW9uIHhlKGEpe2lmKDU9PT1hLnRhZ3x8Nj09PWEudGFnKXJldHVybiBhLnN0YXRlTm9kZTt0aHJvdyBFcnJvcih1KDMzKSk7fWZ1bmN0aW9uIHllKGEpe3JldHVybiBhW3ZlXXx8bnVsbH12YXIgemU9bnVsbCxBZT1udWxsLEJlPW51bGw7XG5mdW5jdGlvbiBDZSgpe2lmKEJlKXJldHVybiBCZTt2YXIgYSxiPUFlLGM9Yi5sZW5ndGgsZCxlPVwidmFsdWVcImluIHplP3plLnZhbHVlOnplLnRleHRDb250ZW50LGY9ZS5sZW5ndGg7Zm9yKGE9MDthPGMmJmJbYV09PT1lW2FdO2ErKyk7dmFyIGc9Yy1hO2ZvcihkPTE7ZDw9ZyYmYltjLWRdPT09ZVtmLWRdO2QrKyk7cmV0dXJuIEJlPWUuc2xpY2UoYSwxPGQ/MS1kOnZvaWQgMCl9dmFyIERlPUUuZXh0ZW5kKHtkYXRhOm51bGx9KSxFZT1FLmV4dGVuZCh7ZGF0YTpudWxsfSksRmU9WzksMTMsMjcsMzJdLEdlPVlhJiZcIkNvbXBvc2l0aW9uRXZlbnRcImluIHdpbmRvdyxIZT1udWxsO1lhJiZcImRvY3VtZW50TW9kZVwiaW4gZG9jdW1lbnQmJihIZT1kb2N1bWVudC5kb2N1bWVudE1vZGUpO1xudmFyIEllPVlhJiZcIlRleHRFdmVudFwiaW4gd2luZG93JiYhSGUsSmU9WWEmJighR2V8fEhlJiY4PEhlJiYxMT49SGUpLEtlPVN0cmluZy5mcm9tQ2hhckNvZGUoMzIpLExlPXtiZWZvcmVJbnB1dDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkJlZm9yZUlucHV0XCIsY2FwdHVyZWQ6XCJvbkJlZm9yZUlucHV0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6W1wiY29tcG9zaXRpb25lbmRcIixcImtleXByZXNzXCIsXCJ0ZXh0SW5wdXRcIixcInBhc3RlXCJdfSxjb21wb3NpdGlvbkVuZDp7cGhhc2VkUmVnaXN0cmF0aW9uTmFtZXM6e2J1YmJsZWQ6XCJvbkNvbXBvc2l0aW9uRW5kXCIsY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uRW5kQ2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbXBvc2l0aW9uZW5kIGtleWRvd24ga2V5cHJlc3Mga2V5dXAgbW91c2Vkb3duXCIuc3BsaXQoXCIgXCIpfSxjb21wb3NpdGlvblN0YXJ0OntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ29tcG9zaXRpb25TdGFydFwiLFxuY2FwdHVyZWQ6XCJvbkNvbXBvc2l0aW9uU3RhcnRDYXB0dXJlXCJ9LGRlcGVuZGVuY2llczpcImJsdXIgY29tcG9zaXRpb25zdGFydCBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX0sY29tcG9zaXRpb25VcGRhdGU6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25Db21wb3NpdGlvblVwZGF0ZVwiLGNhcHR1cmVkOlwib25Db21wb3NpdGlvblVwZGF0ZUNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjb21wb3NpdGlvbnVwZGF0ZSBrZXlkb3duIGtleXByZXNzIGtleXVwIG1vdXNlZG93blwiLnNwbGl0KFwiIFwiKX19LE1lPSExO1xuZnVuY3Rpb24gTmUoYSxiKXtzd2l0Y2goYSl7Y2FzZSBcImtleXVwXCI6cmV0dXJuLTEhPT1GZS5pbmRleE9mKGIua2V5Q29kZSk7Y2FzZSBcImtleWRvd25cIjpyZXR1cm4gMjI5IT09Yi5rZXlDb2RlO2Nhc2UgXCJrZXlwcmVzc1wiOmNhc2UgXCJtb3VzZWRvd25cIjpjYXNlIFwiYmx1clwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fWZ1bmN0aW9uIE9lKGEpe2E9YS5kZXRhaWw7cmV0dXJuXCJvYmplY3RcIj09PXR5cGVvZiBhJiZcImRhdGFcImluIGE/YS5kYXRhOm51bGx9dmFyIFBlPSExO2Z1bmN0aW9uIFFlKGEsYil7c3dpdGNoKGEpe2Nhc2UgXCJjb21wb3NpdGlvbmVuZFwiOnJldHVybiBPZShiKTtjYXNlIFwia2V5cHJlc3NcIjppZigzMiE9PWIud2hpY2gpcmV0dXJuIG51bGw7TWU9ITA7cmV0dXJuIEtlO2Nhc2UgXCJ0ZXh0SW5wdXRcIjpyZXR1cm4gYT1iLmRhdGEsYT09PUtlJiZNZT9udWxsOmE7ZGVmYXVsdDpyZXR1cm4gbnVsbH19XG5mdW5jdGlvbiBSZShhLGIpe2lmKFBlKXJldHVyblwiY29tcG9zaXRpb25lbmRcIj09PWF8fCFHZSYmTmUoYSxiKT8oYT1DZSgpLEJlPUFlPXplPW51bGwsUGU9ITEsYSk6bnVsbDtzd2l0Y2goYSl7Y2FzZSBcInBhc3RlXCI6cmV0dXJuIG51bGw7Y2FzZSBcImtleXByZXNzXCI6aWYoIShiLmN0cmxLZXl8fGIuYWx0S2V5fHxiLm1ldGFLZXkpfHxiLmN0cmxLZXkmJmIuYWx0S2V5KXtpZihiLmNoYXImJjE8Yi5jaGFyLmxlbmd0aClyZXR1cm4gYi5jaGFyO2lmKGIud2hpY2gpcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoYi53aGljaCl9cmV0dXJuIG51bGw7Y2FzZSBcImNvbXBvc2l0aW9uZW5kXCI6cmV0dXJuIEplJiZcImtvXCIhPT1iLmxvY2FsZT9udWxsOmIuZGF0YTtkZWZhdWx0OnJldHVybiBudWxsfX1cbnZhciBTZT17ZXZlbnRUeXBlczpMZSxleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlO2lmKEdlKWI6e3N3aXRjaChhKXtjYXNlIFwiY29tcG9zaXRpb25zdGFydFwiOnZhciBmPUxlLmNvbXBvc2l0aW9uU3RhcnQ7YnJlYWsgYjtjYXNlIFwiY29tcG9zaXRpb25lbmRcIjpmPUxlLmNvbXBvc2l0aW9uRW5kO2JyZWFrIGI7Y2FzZSBcImNvbXBvc2l0aW9udXBkYXRlXCI6Zj1MZS5jb21wb3NpdGlvblVwZGF0ZTticmVhayBifWY9dm9pZCAwfWVsc2UgUGU/TmUoYSxjKSYmKGY9TGUuY29tcG9zaXRpb25FbmQpOlwia2V5ZG93blwiPT09YSYmMjI5PT09Yy5rZXlDb2RlJiYoZj1MZS5jb21wb3NpdGlvblN0YXJ0KTtmPyhKZSYmXCJrb1wiIT09Yy5sb2NhbGUmJihQZXx8ZiE9PUxlLmNvbXBvc2l0aW9uU3RhcnQ/Zj09PUxlLmNvbXBvc2l0aW9uRW5kJiZQZSYmKGU9Q2UoKSk6KHplPWQsQWU9XCJ2YWx1ZVwiaW4gemU/emUudmFsdWU6emUudGV4dENvbnRlbnQsUGU9ITApKSxmPURlLmdldFBvb2xlZChmLFxuYixjLGQpLGU/Zi5kYXRhPWU6KGU9T2UoYyksbnVsbCE9PWUmJihmLmRhdGE9ZSkpLFNjKGYpLGU9Zik6ZT1udWxsOyhhPUllP1FlKGEsYyk6UmUoYSxjKSk/KGI9RWUuZ2V0UG9vbGVkKExlLmJlZm9yZUlucHV0LGIsYyxkKSxiLmRhdGE9YSxTYyhiKSk6Yj1udWxsO3JldHVybiBudWxsPT09ZT9iOm51bGw9PT1iP2U6W2UsYl19fSxUZT17Y29sb3I6ITAsZGF0ZTohMCxkYXRldGltZTohMCxcImRhdGV0aW1lLWxvY2FsXCI6ITAsZW1haWw6ITAsbW9udGg6ITAsbnVtYmVyOiEwLHBhc3N3b3JkOiEwLHJhbmdlOiEwLHNlYXJjaDohMCx0ZWw6ITAsdGV4dDohMCx0aW1lOiEwLHVybDohMCx3ZWVrOiEwfTtmdW5jdGlvbiBVZShhKXt2YXIgYj1hJiZhLm5vZGVOYW1lJiZhLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7cmV0dXJuXCJpbnB1dFwiPT09Yj8hIVRlW2EudHlwZV06XCJ0ZXh0YXJlYVwiPT09Yj8hMDohMX1cbnZhciBWZT17Y2hhbmdlOntwaGFzZWRSZWdpc3RyYXRpb25OYW1lczp7YnViYmxlZDpcIm9uQ2hhbmdlXCIsY2FwdHVyZWQ6XCJvbkNoYW5nZUNhcHR1cmVcIn0sZGVwZW5kZW5jaWVzOlwiYmx1ciBjaGFuZ2UgY2xpY2sgZm9jdXMgaW5wdXQga2V5ZG93biBrZXl1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIil9fTtmdW5jdGlvbiBXZShhLGIsYyl7YT1FLmdldFBvb2xlZChWZS5jaGFuZ2UsYSxiLGMpO2EudHlwZT1cImNoYW5nZVwiO2NiKGMpO1NjKGEpO3JldHVybiBhfXZhciBYZT1udWxsLFllPW51bGw7ZnVuY3Rpb24gWmUoYSl7QmEoYSl9ZnVuY3Rpb24gJGUoYSl7dmFyIGI9eGUoYSk7aWYoemIoYikpcmV0dXJuIGF9ZnVuY3Rpb24gYWYoYSxiKXtpZihcImNoYW5nZVwiPT09YSlyZXR1cm4gYn12YXIgYmY9ITE7WWEmJihiZj1SZChcImlucHV0XCIpJiYoIWRvY3VtZW50LmRvY3VtZW50TW9kZXx8OTxkb2N1bWVudC5kb2N1bWVudE1vZGUpKTtcbmZ1bmN0aW9uIGNmKCl7WGUmJihYZS5kZXRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixkZiksWWU9WGU9bnVsbCl9ZnVuY3Rpb24gZGYoYSl7aWYoXCJ2YWx1ZVwiPT09YS5wcm9wZXJ0eU5hbWUmJiRlKFllKSlpZihhPVdlKFllLGEsTWMoYSkpLGliKUJhKGEpO2Vsc2V7aWI9ITA7dHJ5e2ViKFplLGEpfWZpbmFsbHl7aWI9ITEsa2IoKX19fWZ1bmN0aW9uIGVmKGEsYixjKXtcImZvY3VzXCI9PT1hPyhjZigpLFhlPWIsWWU9YyxYZS5hdHRhY2hFdmVudChcIm9ucHJvcGVydHljaGFuZ2VcIixkZikpOlwiYmx1clwiPT09YSYmY2YoKX1mdW5jdGlvbiBmZihhKXtpZihcInNlbGVjdGlvbmNoYW5nZVwiPT09YXx8XCJrZXl1cFwiPT09YXx8XCJrZXlkb3duXCI9PT1hKXJldHVybiAkZShZZSl9ZnVuY3Rpb24gZ2YoYSxiKXtpZihcImNsaWNrXCI9PT1hKXJldHVybiAkZShiKX1mdW5jdGlvbiBoZihhLGIpe2lmKFwiaW5wdXRcIj09PWF8fFwiY2hhbmdlXCI9PT1hKXJldHVybiAkZShiKX1cbnZhciBqZj17ZXZlbnRUeXBlczpWZSxfaXNJbnB1dEV2ZW50U3VwcG9ydGVkOmJmLGV4dHJhY3RFdmVudHM6ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGU9Yj94ZShiKTp3aW5kb3csZj1lLm5vZGVOYW1lJiZlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7aWYoXCJzZWxlY3RcIj09PWZ8fFwiaW5wdXRcIj09PWYmJlwiZmlsZVwiPT09ZS50eXBlKXZhciBnPWFmO2Vsc2UgaWYoVWUoZSkpaWYoYmYpZz1oZjtlbHNle2c9ZmY7dmFyIGg9ZWZ9ZWxzZShmPWUubm9kZU5hbWUpJiZcImlucHV0XCI9PT1mLnRvTG93ZXJDYXNlKCkmJihcImNoZWNrYm94XCI9PT1lLnR5cGV8fFwicmFkaW9cIj09PWUudHlwZSkmJihnPWdmKTtpZihnJiYoZz1nKGEsYikpKXJldHVybiBXZShnLGMsZCk7aCYmaChhLGUsYik7XCJibHVyXCI9PT1hJiYoYT1lLl93cmFwcGVyU3RhdGUpJiZhLmNvbnRyb2xsZWQmJlwibnVtYmVyXCI9PT1lLnR5cGUmJkZiKGUsXCJudW1iZXJcIixlLnZhbHVlKX19LGtmPXttb3VzZUVudGVyOntyZWdpc3RyYXRpb25OYW1lOlwib25Nb3VzZUVudGVyXCIsXG5kZXBlbmRlbmNpZXM6W1wibW91c2VvdXRcIixcIm1vdXNlb3ZlclwiXX0sbW91c2VMZWF2ZTp7cmVnaXN0cmF0aW9uTmFtZTpcIm9uTW91c2VMZWF2ZVwiLGRlcGVuZGVuY2llczpbXCJtb3VzZW91dFwiLFwibW91c2VvdmVyXCJdfSxwb2ludGVyRW50ZXI6e3JlZ2lzdHJhdGlvbk5hbWU6XCJvblBvaW50ZXJFbnRlclwiLGRlcGVuZGVuY2llczpbXCJwb2ludGVyb3V0XCIsXCJwb2ludGVyb3ZlclwiXX0scG9pbnRlckxlYXZlOntyZWdpc3RyYXRpb25OYW1lOlwib25Qb2ludGVyTGVhdmVcIixkZXBlbmRlbmNpZXM6W1wicG9pbnRlcm91dFwiLFwicG9pbnRlcm92ZXJcIl19fSxsZixtZj17ZXZlbnRUeXBlczprZixleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9XCJtb3VzZW92ZXJcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEsZz1cIm1vdXNlb3V0XCI9PT1hfHxcInBvaW50ZXJvdXRcIj09PWE7aWYoZiYmMD09PShlJjMyKSYmKGMucmVsYXRlZFRhcmdldHx8Yy5mcm9tRWxlbWVudCl8fCFnJiYhZilyZXR1cm4gbnVsbDtcbmU9ZC53aW5kb3c9PT1kP2Q6KGU9ZC5vd25lckRvY3VtZW50KT9lLmRlZmF1bHRWaWV3fHxlLnBhcmVudFdpbmRvdzp3aW5kb3c7aWYoZyl7aWYoZz1iLGI9KGI9Yy5yZWxhdGVkVGFyZ2V0fHxjLnRvRWxlbWVudCk/RmMoYik6bnVsbCxudWxsIT09YiYmKGY9ZWMoYiksYiE9PWZ8fDUhPT1iLnRhZyYmNiE9PWIudGFnKSliPW51bGx9ZWxzZSBnPW51bGw7aWYoZz09PWIpcmV0dXJuIG51bGw7aWYoXCJtb3VzZW91dFwiPT09YXx8XCJtb3VzZW92ZXJcIj09PWEpe3ZhciBoPW5kO3ZhciBrPWtmLm1vdXNlTGVhdmU7dmFyIGw9a2YubW91c2VFbnRlcjt2YXIgbT1cIm1vdXNlXCJ9ZWxzZSBpZihcInBvaW50ZXJvdXRcIj09PWF8fFwicG9pbnRlcm92ZXJcIj09PWEpaD1vZCxrPWtmLnBvaW50ZXJMZWF2ZSxsPWtmLnBvaW50ZXJFbnRlcixtPVwicG9pbnRlclwiO2E9bnVsbD09Zz9lOnhlKGcpO2U9bnVsbD09Yj9lOnhlKGIpO2s9aC5nZXRQb29sZWQoayxnLGMsZCk7ay50eXBlPW0rXCJsZWF2ZVwiO2sudGFyZ2V0PVxuYTtrLnJlbGF0ZWRUYXJnZXQ9ZTtkPWguZ2V0UG9vbGVkKGwsYixjLGQpO2QudHlwZT1tK1wiZW50ZXJcIjtkLnRhcmdldD1lO2QucmVsYXRlZFRhcmdldD1hO2g9ZzttPWI7aWYoaCYmbSlhOntsPWg7YT1tO2c9MDtmb3IoYj1sO2I7Yj1OYyhiKSlnKys7Yj0wO2ZvcihlPWE7ZTtlPU5jKGUpKWIrKztmb3IoOzA8Zy1iOylsPU5jKGwpLGctLTtmb3IoOzA8Yi1nOylhPU5jKGEpLGItLTtmb3IoO2ctLTspe2lmKGw9PT1hfHxsPT09YS5hbHRlcm5hdGUpYnJlYWsgYTtsPU5jKGwpO2E9TmMoYSl9bD1udWxsfWVsc2UgbD1udWxsO2E9bDtmb3IobD1bXTtoJiZoIT09YTspe2c9aC5hbHRlcm5hdGU7aWYobnVsbCE9PWcmJmc9PT1hKWJyZWFrO2wucHVzaChoKTtoPU5jKGgpfWZvcihoPVtdO20mJm0hPT1hOyl7Zz1tLmFsdGVybmF0ZTtpZihudWxsIT09ZyYmZz09PWEpYnJlYWs7aC5wdXNoKG0pO209TmMobSl9Zm9yKG09MDttPGwubGVuZ3RoO20rKylRYyhsW21dLFwiYnViYmxlZFwiLGspO2ZvcihtPVxuaC5sZW5ndGg7MDxtLS07KVFjKGhbbV0sXCJjYXB0dXJlZFwiLGQpO2lmKGM9PT1sZilyZXR1cm4gbGY9bnVsbCxba107bGY9YztyZXR1cm5bayxkXX19O2Z1bmN0aW9uIG5mKGEsYil7cmV0dXJuIGE9PT1iJiYoMCE9PWF8fDEvYT09PTEvYil8fGEhPT1hJiZiIT09Yn12YXIgb2Y9XCJmdW5jdGlvblwiPT09dHlwZW9mIE9iamVjdC5pcz9PYmplY3QuaXM6bmYscGY9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtmdW5jdGlvbiBxZihhLGIpe2lmKG9mKGEsYikpcmV0dXJuITA7aWYoXCJvYmplY3RcIiE9PXR5cGVvZiBhfHxudWxsPT09YXx8XCJvYmplY3RcIiE9PXR5cGVvZiBifHxudWxsPT09YilyZXR1cm4hMTt2YXIgYz1PYmplY3Qua2V5cyhhKSxkPU9iamVjdC5rZXlzKGIpO2lmKGMubGVuZ3RoIT09ZC5sZW5ndGgpcmV0dXJuITE7Zm9yKGQ9MDtkPGMubGVuZ3RoO2QrKylpZighcGYuY2FsbChiLGNbZF0pfHwhb2YoYVtjW2RdXSxiW2NbZF1dKSlyZXR1cm4hMTtyZXR1cm4hMH1cbnZhciByZj1ZYSYmXCJkb2N1bWVudE1vZGVcImluIGRvY3VtZW50JiYxMT49ZG9jdW1lbnQuZG9jdW1lbnRNb2RlLHNmPXtzZWxlY3Q6e3BoYXNlZFJlZ2lzdHJhdGlvbk5hbWVzOntidWJibGVkOlwib25TZWxlY3RcIixjYXB0dXJlZDpcIm9uU2VsZWN0Q2FwdHVyZVwifSxkZXBlbmRlbmNpZXM6XCJibHVyIGNvbnRleHRtZW51IGRyYWdlbmQgZm9jdXMga2V5ZG93biBrZXl1cCBtb3VzZWRvd24gbW91c2V1cCBzZWxlY3Rpb25jaGFuZ2VcIi5zcGxpdChcIiBcIil9fSx0Zj1udWxsLHVmPW51bGwsdmY9bnVsbCx3Zj0hMTtcbmZ1bmN0aW9uIHhmKGEsYil7dmFyIGM9Yi53aW5kb3c9PT1iP2IuZG9jdW1lbnQ6OT09PWIubm9kZVR5cGU/YjpiLm93bmVyRG9jdW1lbnQ7aWYod2Z8fG51bGw9PXRmfHx0ZiE9PWJlKGMpKXJldHVybiBudWxsO2M9dGY7XCJzZWxlY3Rpb25TdGFydFwiaW4gYyYmZ2UoYyk/Yz17c3RhcnQ6Yy5zZWxlY3Rpb25TdGFydCxlbmQ6Yy5zZWxlY3Rpb25FbmR9OihjPShjLm93bmVyRG9jdW1lbnQmJmMub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlld3x8d2luZG93KS5nZXRTZWxlY3Rpb24oKSxjPXthbmNob3JOb2RlOmMuYW5jaG9yTm9kZSxhbmNob3JPZmZzZXQ6Yy5hbmNob3JPZmZzZXQsZm9jdXNOb2RlOmMuZm9jdXNOb2RlLGZvY3VzT2Zmc2V0OmMuZm9jdXNPZmZzZXR9KTtyZXR1cm4gdmYmJnFmKHZmLGMpP251bGw6KHZmPWMsYT1FLmdldFBvb2xlZChzZi5zZWxlY3QsdWYsYSxiKSxhLnR5cGU9XCJzZWxlY3RcIixhLnRhcmdldD10ZixTYyhhKSxhKX1cbnZhciB5Zj17ZXZlbnRUeXBlczpzZixleHRyYWN0RXZlbnRzOmZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlPWQud2luZG93PT09ZD9kLmRvY3VtZW50Ojk9PT1kLm5vZGVUeXBlP2Q6ZC5vd25lckRvY3VtZW50LGY7aWYoIShmPSFlKSl7YTp7ZT14YyhlKTtmPWphLm9uU2VsZWN0O2Zvcih2YXIgZz0wO2c8Zi5sZW5ndGg7ZysrKWlmKCFlLmhhcyhmW2ddKSl7ZT0hMTticmVhayBhfWU9ITB9Zj0hZX1pZihmKXJldHVybiBudWxsO2U9Yj94ZShiKTp3aW5kb3c7c3dpdGNoKGEpe2Nhc2UgXCJmb2N1c1wiOmlmKFVlKGUpfHxcInRydWVcIj09PWUuY29udGVudEVkaXRhYmxlKXRmPWUsdWY9Yix2Zj1udWxsO2JyZWFrO2Nhc2UgXCJibHVyXCI6dmY9dWY9dGY9bnVsbDticmVhaztjYXNlIFwibW91c2Vkb3duXCI6d2Y9ITA7YnJlYWs7Y2FzZSBcImNvbnRleHRtZW51XCI6Y2FzZSBcIm1vdXNldXBcIjpjYXNlIFwiZHJhZ2VuZFwiOnJldHVybiB3Zj0hMSx4ZihjLGQpO2Nhc2UgXCJzZWxlY3Rpb25jaGFuZ2VcIjppZihyZilicmVhaztcbmNhc2UgXCJrZXlkb3duXCI6Y2FzZSBcImtleXVwXCI6cmV0dXJuIHhmKGMsZCl9cmV0dXJuIG51bGx9fTtDYS5pbmplY3RFdmVudFBsdWdpbk9yZGVyKFwiUmVzcG9uZGVyRXZlbnRQbHVnaW4gU2ltcGxlRXZlbnRQbHVnaW4gRW50ZXJMZWF2ZUV2ZW50UGx1Z2luIENoYW5nZUV2ZW50UGx1Z2luIFNlbGVjdEV2ZW50UGx1Z2luIEJlZm9yZUlucHV0RXZlbnRQbHVnaW5cIi5zcGxpdChcIiBcIikpO3ZhciB6Zj1DYztzYT15ZTt1YT16Zjt2YT14ZTtDYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUoe1NpbXBsZUV2ZW50UGx1Z2luOkVkLEVudGVyTGVhdmVFdmVudFBsdWdpbjptZixDaGFuZ2VFdmVudFBsdWdpbjpqZixTZWxlY3RFdmVudFBsdWdpbjp5ZixCZWZvcmVJbnB1dEV2ZW50UGx1Z2luOlNlfSk7bmV3IFNldDt2YXIgQWY9W10sQmY9LTE7ZnVuY3Rpb24gRyhhKXswPkJmfHwoYS5jdXJyZW50PUFmW0JmXSxBZltCZl09bnVsbCxCZi0tKX1cbmZ1bmN0aW9uIEkoYSxiKXtCZisrO0FmW0JmXT1hLmN1cnJlbnQ7YS5jdXJyZW50PWJ9dmFyIENmPXt9LEo9e2N1cnJlbnQ6Q2Z9LEs9e2N1cnJlbnQ6ITF9LERmPUNmO2Z1bmN0aW9uIEVmKGEsYil7dmFyIGM9YS50eXBlLmNvbnRleHRUeXBlcztpZighYylyZXR1cm4gQ2Y7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoZCYmZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PT09YilyZXR1cm4gZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dDt2YXIgZT17fSxmO2ZvcihmIGluIGMpZVtmXT1iW2ZdO2QmJihhPWEuc3RhdGVOb2RlLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRVbm1hc2tlZENoaWxkQ29udGV4dD1iLGEuX19yZWFjdEludGVybmFsTWVtb2l6ZWRNYXNrZWRDaGlsZENvbnRleHQ9ZSk7cmV0dXJuIGV9ZnVuY3Rpb24gTChhKXthPWEuY2hpbGRDb250ZXh0VHlwZXM7cmV0dXJuIG51bGwhPT1hJiZ2b2lkIDAhPT1hfVxuZnVuY3Rpb24gRmYoYSl7RyhLLGEpO0coSixhKX1mdW5jdGlvbiBHZihhKXtHKEssYSk7RyhKLGEpfWZ1bmN0aW9uIEhmKGEsYixjKXtpZihKLmN1cnJlbnQhPT1DZil0aHJvdyBFcnJvcih1KDE2OCkpO0koSixiLGEpO0koSyxjLGEpfWZ1bmN0aW9uIElmKGEsYixjKXt2YXIgZD1hLnN0YXRlTm9kZTthPWIuY2hpbGRDb250ZXh0VHlwZXM7aWYoXCJmdW5jdGlvblwiIT09dHlwZW9mIGQuZ2V0Q2hpbGRDb250ZXh0KXJldHVybiBjO2Q9ZC5nZXRDaGlsZENvbnRleHQoKTtmb3IodmFyIGUgaW4gZClpZighKGUgaW4gYSkpdGhyb3cgRXJyb3IodSgxMDgsV2EoYil8fFwiVW5rbm93blwiLGUpKTtyZXR1cm4gbih7fSxjLHt9LGQpfWZ1bmN0aW9uIEpmKGEpe3ZhciBiPWEuc3RhdGVOb2RlO2I9YiYmYi5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dHx8Q2Y7RGY9Si5jdXJyZW50O0koSixiLGEpO0koSyxLLmN1cnJlbnQsYSk7cmV0dXJuITB9XG5mdW5jdGlvbiBLZihhLGIsYyl7dmFyIGQ9YS5zdGF0ZU5vZGU7aWYoIWQpdGhyb3cgRXJyb3IodSgxNjkpKTtjPyhiPUlmKGEsYixEZiksZC5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1lcmdlZENoaWxkQ29udGV4dD1iLEcoSyxhKSxHKEosYSksSShKLGIsYSkpOkcoSyxhKTtJKEssYyxhKX1cbnZhciBMZj1xLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eSxNZj1xLnVuc3RhYmxlX3NjaGVkdWxlQ2FsbGJhY2ssTmY9cS51bnN0YWJsZV9jYW5jZWxDYWxsYmFjayxPZj1xLnVuc3RhYmxlX3Nob3VsZFlpZWxkLFBmPXEudW5zdGFibGVfcmVxdWVzdFBhaW50LFFmPXEudW5zdGFibGVfbm93LFJmPXEudW5zdGFibGVfZ2V0Q3VycmVudFByaW9yaXR5TGV2ZWwsU2Y9cS51bnN0YWJsZV9JbW1lZGlhdGVQcmlvcml0eSxUZj1xLnVuc3RhYmxlX1VzZXJCbG9ja2luZ1ByaW9yaXR5LFVmPXEudW5zdGFibGVfTm9ybWFsUHJpb3JpdHksVmY9cS51bnN0YWJsZV9Mb3dQcmlvcml0eSxXZj1xLnVuc3RhYmxlX0lkbGVQcmlvcml0eSxYZj17fSxZZj12b2lkIDAhPT1QZj9QZjpmdW5jdGlvbigpe30sWmY9bnVsbCwkZj1udWxsLGFnPSExLGJnPVFmKCksY2c9MUU0PmJnP1FmOmZ1bmN0aW9uKCl7cmV0dXJuIFFmKCktYmd9O1xuZnVuY3Rpb24gZGcoKXtzd2l0Y2goUmYoKSl7Y2FzZSBTZjpyZXR1cm4gOTk7Y2FzZSBUZjpyZXR1cm4gOTg7Y2FzZSBVZjpyZXR1cm4gOTc7Y2FzZSBWZjpyZXR1cm4gOTY7Y2FzZSBXZjpyZXR1cm4gOTU7ZGVmYXVsdDp0aHJvdyBFcnJvcih1KDMzMikpO319ZnVuY3Rpb24gZWcoYSl7c3dpdGNoKGEpe2Nhc2UgOTk6cmV0dXJuIFNmO2Nhc2UgOTg6cmV0dXJuIFRmO2Nhc2UgOTc6cmV0dXJuIFVmO2Nhc2UgOTY6cmV0dXJuIFZmO2Nhc2UgOTU6cmV0dXJuIFdmO2RlZmF1bHQ6dGhyb3cgRXJyb3IodSgzMzIpKTt9fWZ1bmN0aW9uIGZnKGEsYil7YT1lZyhhKTtyZXR1cm4gTGYoYSxiKX1mdW5jdGlvbiBnZyhhLGIsYyl7YT1lZyhhKTtyZXR1cm4gTWYoYSxiLGMpfWZ1bmN0aW9uIGhnKGEpe251bGw9PT1aZj8oWmY9W2FdLCRmPU1mKFNmLGlnKSk6WmYucHVzaChhKTtyZXR1cm4gWGZ9ZnVuY3Rpb24gamcoKXtpZihudWxsIT09JGYpe3ZhciBhPSRmOyRmPW51bGw7TmYoYSl9aWcoKX1cbmZ1bmN0aW9uIGlnKCl7aWYoIWFnJiZudWxsIT09WmYpe2FnPSEwO3ZhciBhPTA7dHJ5e3ZhciBiPVpmO2ZnKDk5LGZ1bmN0aW9uKCl7Zm9yKDthPGIubGVuZ3RoO2ErKyl7dmFyIGM9YlthXTtkbyBjPWMoITApO3doaWxlKG51bGwhPT1jKX19KTtaZj1udWxsfWNhdGNoKGMpe3Rocm93IG51bGwhPT1aZiYmKFpmPVpmLnNsaWNlKGErMSkpLE1mKFNmLGpnKSxjO31maW5hbGx5e2FnPSExfX19dmFyIGtnPTM7ZnVuY3Rpb24gbGcoYSxiLGMpe2MvPTEwO3JldHVybiAxMDczNzQxODIxLSgoKDEwNzM3NDE4MjEtYStiLzEwKS9jfDApKzEpKmN9ZnVuY3Rpb24gbWcoYSxiKXtpZihhJiZhLmRlZmF1bHRQcm9wcyl7Yj1uKHt9LGIpO2E9YS5kZWZhdWx0UHJvcHM7Zm9yKHZhciBjIGluIGEpdm9pZCAwPT09YltjXSYmKGJbY109YVtjXSl9cmV0dXJuIGJ9dmFyIG5nPXtjdXJyZW50Om51bGx9LG9nPW51bGwscGc9bnVsbCxxZz1udWxsO2Z1bmN0aW9uIHJnKCl7cWc9cGc9b2c9bnVsbH1cbmZ1bmN0aW9uIHNnKGEsYil7dmFyIGM9YS50eXBlLl9jb250ZXh0O0kobmcsYy5fY3VycmVudFZhbHVlLGEpO2MuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHRnKGEpe3ZhciBiPW5nLmN1cnJlbnQ7RyhuZyxhKTthLnR5cGUuX2NvbnRleHQuX2N1cnJlbnRWYWx1ZT1ifWZ1bmN0aW9uIHVnKGEsYil7Zm9yKDtudWxsIT09YTspe3ZhciBjPWEuYWx0ZXJuYXRlO2lmKGEuY2hpbGRFeHBpcmF0aW9uVGltZTxiKWEuY2hpbGRFeHBpcmF0aW9uVGltZT1iLG51bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGMuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtlbHNlIGlmKG51bGwhPT1jJiZjLmNoaWxkRXhwaXJhdGlvblRpbWU8YiljLmNoaWxkRXhwaXJhdGlvblRpbWU9YjtlbHNlIGJyZWFrO2E9YS5yZXR1cm59fVxuZnVuY3Rpb24gdmcoYSxiKXtvZz1hO3FnPXBnPW51bGw7YT1hLmRlcGVuZGVuY2llcztudWxsIT09YSYmbnVsbCE9PWEuZmlyc3RDb250ZXh0JiYoYS5leHBpcmF0aW9uVGltZT49YiYmKHdnPSEwKSxhLmZpcnN0Q29udGV4dD1udWxsKX1mdW5jdGlvbiB4ZyhhLGIpe2lmKHFnIT09YSYmITEhPT1iJiYwIT09Yil7aWYoXCJudW1iZXJcIiE9PXR5cGVvZiBifHwxMDczNzQxODIzPT09YilxZz1hLGI9MTA3Mzc0MTgyMztiPXtjb250ZXh0OmEsb2JzZXJ2ZWRCaXRzOmIsbmV4dDpudWxsfTtpZihudWxsPT09cGcpe2lmKG51bGw9PT1vZyl0aHJvdyBFcnJvcih1KDMwOCkpO3BnPWI7b2cuZGVwZW5kZW5jaWVzPXtleHBpcmF0aW9uVGltZTowLGZpcnN0Q29udGV4dDpiLHJlc3BvbmRlcnM6bnVsbH19ZWxzZSBwZz1wZy5uZXh0PWJ9cmV0dXJuIGEuX2N1cnJlbnRWYWx1ZX12YXIgeWc9ITE7XG5mdW5jdGlvbiB6ZyhhKXtyZXR1cm57YmFzZVN0YXRlOmEsZmlyc3RVcGRhdGU6bnVsbCxsYXN0VXBkYXRlOm51bGwsZmlyc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGxhc3RDYXB0dXJlZFVwZGF0ZTpudWxsLGZpcnN0RWZmZWN0Om51bGwsbGFzdEVmZmVjdDpudWxsLGZpcnN0Q2FwdHVyZWRFZmZlY3Q6bnVsbCxsYXN0Q2FwdHVyZWRFZmZlY3Q6bnVsbH19ZnVuY3Rpb24gQWcoYSl7cmV0dXJue2Jhc2VTdGF0ZTphLmJhc2VTdGF0ZSxmaXJzdFVwZGF0ZTphLmZpcnN0VXBkYXRlLGxhc3RVcGRhdGU6YS5sYXN0VXBkYXRlLGZpcnN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxsYXN0Q2FwdHVyZWRVcGRhdGU6bnVsbCxmaXJzdEVmZmVjdDpudWxsLGxhc3RFZmZlY3Q6bnVsbCxmaXJzdENhcHR1cmVkRWZmZWN0Om51bGwsbGFzdENhcHR1cmVkRWZmZWN0Om51bGx9fVxuZnVuY3Rpb24gQmcoYSxiKXtyZXR1cm57ZXhwaXJhdGlvblRpbWU6YSxzdXNwZW5zZUNvbmZpZzpiLHRhZzowLHBheWxvYWQ6bnVsbCxjYWxsYmFjazpudWxsLG5leHQ6bnVsbCxuZXh0RWZmZWN0Om51bGx9fWZ1bmN0aW9uIENnKGEsYil7bnVsbD09PWEubGFzdFVwZGF0ZT9hLmZpcnN0VXBkYXRlPWEubGFzdFVwZGF0ZT1iOihhLmxhc3RVcGRhdGUubmV4dD1iLGEubGFzdFVwZGF0ZT1iKX1cbmZ1bmN0aW9uIERnKGEsYil7dmFyIGM9YS5hbHRlcm5hdGU7aWYobnVsbD09PWMpe3ZhciBkPWEudXBkYXRlUXVldWU7dmFyIGU9bnVsbDtudWxsPT09ZCYmKGQ9YS51cGRhdGVRdWV1ZT16ZyhhLm1lbW9pemVkU3RhdGUpKX1lbHNlIGQ9YS51cGRhdGVRdWV1ZSxlPWMudXBkYXRlUXVldWUsbnVsbD09PWQ/bnVsbD09PWU/KGQ9YS51cGRhdGVRdWV1ZT16ZyhhLm1lbW9pemVkU3RhdGUpLGU9Yy51cGRhdGVRdWV1ZT16ZyhjLm1lbW9pemVkU3RhdGUpKTpkPWEudXBkYXRlUXVldWU9QWcoZSk6bnVsbD09PWUmJihlPWMudXBkYXRlUXVldWU9QWcoZCkpO251bGw9PT1lfHxkPT09ZT9DZyhkLGIpOm51bGw9PT1kLmxhc3RVcGRhdGV8fG51bGw9PT1lLmxhc3RVcGRhdGU/KENnKGQsYiksQ2coZSxiKSk6KENnKGQsYiksZS5sYXN0VXBkYXRlPWIpfVxuZnVuY3Rpb24gRWcoYSxiKXt2YXIgYz1hLnVwZGF0ZVF1ZXVlO2M9bnVsbD09PWM/YS51cGRhdGVRdWV1ZT16ZyhhLm1lbW9pemVkU3RhdGUpOkZnKGEsYyk7bnVsbD09PWMubGFzdENhcHR1cmVkVXBkYXRlP2MuZmlyc3RDYXB0dXJlZFVwZGF0ZT1jLmxhc3RDYXB0dXJlZFVwZGF0ZT1iOihjLmxhc3RDYXB0dXJlZFVwZGF0ZS5uZXh0PWIsYy5sYXN0Q2FwdHVyZWRVcGRhdGU9Yil9ZnVuY3Rpb24gRmcoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsIT09YyYmYj09PWMudXBkYXRlUXVldWUmJihiPWEudXBkYXRlUXVldWU9QWcoYikpO3JldHVybiBifVxuZnVuY3Rpb24gR2coYSxiLGMsZCxlLGYpe3N3aXRjaChjLnRhZyl7Y2FzZSAxOnJldHVybiBhPWMucGF5bG9hZCxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYT9hLmNhbGwoZixkLGUpOmE7Y2FzZSAzOmEuZWZmZWN0VGFnPWEuZWZmZWN0VGFnJi00MDk3fDY0O2Nhc2UgMDphPWMucGF5bG9hZDtlPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBhP2EuY2FsbChmLGQsZSk6YTtpZihudWxsPT09ZXx8dm9pZCAwPT09ZSlicmVhaztyZXR1cm4gbih7fSxkLGUpO2Nhc2UgMjp5Zz0hMH1yZXR1cm4gZH1cbmZ1bmN0aW9uIEhnKGEsYixjLGQsZSl7eWc9ITE7Yj1GZyhhLGIpO2Zvcih2YXIgZj1iLmJhc2VTdGF0ZSxnPW51bGwsaD0wLGs9Yi5maXJzdFVwZGF0ZSxsPWY7bnVsbCE9PWs7KXt2YXIgbT1rLmV4cGlyYXRpb25UaW1lO208ZT8obnVsbD09PWcmJihnPWssZj1sKSxoPG0mJihoPW0pKTooSWcobSxrLnN1c3BlbnNlQ29uZmlnKSxsPUdnKGEsYixrLGwsYyxkKSxudWxsIT09ay5jYWxsYmFjayYmKGEuZWZmZWN0VGFnfD0zMixrLm5leHRFZmZlY3Q9bnVsbCxudWxsPT09Yi5sYXN0RWZmZWN0P2IuZmlyc3RFZmZlY3Q9Yi5sYXN0RWZmZWN0PWs6KGIubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWssYi5sYXN0RWZmZWN0PWspKSk7az1rLm5leHR9bT1udWxsO2ZvcihrPWIuZmlyc3RDYXB0dXJlZFVwZGF0ZTtudWxsIT09azspe3ZhciBDPWsuZXhwaXJhdGlvblRpbWU7QzxlPyhudWxsPT09bSYmKG09ayxudWxsPT09ZyYmKGY9bCkpLGg8QyYmKGg9QykpOihsPUdnKGEsYixrLGwsYyxkKSxudWxsIT09XG5rLmNhbGxiYWNrJiYoYS5lZmZlY3RUYWd8PTMyLGsubmV4dEVmZmVjdD1udWxsLG51bGw9PT1iLmxhc3RDYXB0dXJlZEVmZmVjdD9iLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9azooYi5sYXN0Q2FwdHVyZWRFZmZlY3QubmV4dEVmZmVjdD1rLGIubGFzdENhcHR1cmVkRWZmZWN0PWspKSk7az1rLm5leHR9bnVsbD09PWcmJihiLmxhc3RVcGRhdGU9bnVsbCk7bnVsbD09PW0/Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbDphLmVmZmVjdFRhZ3w9MzI7bnVsbD09PWcmJm51bGw9PT1tJiYoZj1sKTtiLmJhc2VTdGF0ZT1mO2IuZmlyc3RVcGRhdGU9ZztiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9bTtKZyhoKTthLmV4cGlyYXRpb25UaW1lPWg7YS5tZW1vaXplZFN0YXRlPWx9XG5mdW5jdGlvbiBLZyhhLGIsYyl7bnVsbCE9PWIuZmlyc3RDYXB0dXJlZFVwZGF0ZSYmKG51bGwhPT1iLmxhc3RVcGRhdGUmJihiLmxhc3RVcGRhdGUubmV4dD1iLmZpcnN0Q2FwdHVyZWRVcGRhdGUsYi5sYXN0VXBkYXRlPWIubGFzdENhcHR1cmVkVXBkYXRlKSxiLmZpcnN0Q2FwdHVyZWRVcGRhdGU9Yi5sYXN0Q2FwdHVyZWRVcGRhdGU9bnVsbCk7TGcoYi5maXJzdEVmZmVjdCxjKTtiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1udWxsO0xnKGIuZmlyc3RDYXB0dXJlZEVmZmVjdCxjKTtiLmZpcnN0Q2FwdHVyZWRFZmZlY3Q9Yi5sYXN0Q2FwdHVyZWRFZmZlY3Q9bnVsbH1mdW5jdGlvbiBMZyhhLGIpe2Zvcig7bnVsbCE9PWE7KXt2YXIgYz1hLmNhbGxiYWNrO2lmKG51bGwhPT1jKXthLmNhbGxiYWNrPW51bGw7dmFyIGQ9YjtpZihcImZ1bmN0aW9uXCIhPT10eXBlb2YgYyl0aHJvdyBFcnJvcih1KDE5MSxjKSk7Yy5jYWxsKGQpfWE9YS5uZXh0RWZmZWN0fX1cbnZhciBNZz1FYS5SZWFjdEN1cnJlbnRCYXRjaENvbmZpZyxOZz0obmV3IGFhLkNvbXBvbmVudCkucmVmcztmdW5jdGlvbiBPZyhhLGIsYyxkKXtiPWEubWVtb2l6ZWRTdGF0ZTtjPWMoZCxiKTtjPW51bGw9PT1jfHx2b2lkIDA9PT1jP2I6bih7fSxiLGMpO2EubWVtb2l6ZWRTdGF0ZT1jO2Q9YS51cGRhdGVRdWV1ZTtudWxsIT09ZCYmMD09PWEuZXhwaXJhdGlvblRpbWUmJihkLmJhc2VTdGF0ZT1jKX1cbnZhciBTZz17aXNNb3VudGVkOmZ1bmN0aW9uKGEpe3JldHVybihhPWEuX3JlYWN0SW50ZXJuYWxGaWJlcik/ZWMoYSk9PT1hOiExfSxlbnF1ZXVlU2V0U3RhdGU6ZnVuY3Rpb24oYSxiLGMpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBkPVBnKCksZT1NZy5zdXNwZW5zZTtkPVFnKGQsYSxlKTtlPUJnKGQsZSk7ZS5wYXlsb2FkPWI7dm9pZCAwIT09YyYmbnVsbCE9PWMmJihlLmNhbGxiYWNrPWMpO0RnKGEsZSk7UmcoYSxkKX0sZW5xdWV1ZVJlcGxhY2VTdGF0ZTpmdW5jdGlvbihhLGIsYyl7YT1hLl9yZWFjdEludGVybmFsRmliZXI7dmFyIGQ9UGcoKSxlPU1nLnN1c3BlbnNlO2Q9UWcoZCxhLGUpO2U9QmcoZCxlKTtlLnRhZz0xO2UucGF5bG9hZD1iO3ZvaWQgMCE9PWMmJm51bGwhPT1jJiYoZS5jYWxsYmFjaz1jKTtEZyhhLGUpO1JnKGEsZCl9LGVucXVldWVGb3JjZVVwZGF0ZTpmdW5jdGlvbihhLGIpe2E9YS5fcmVhY3RJbnRlcm5hbEZpYmVyO3ZhciBjPVBnKCksZD1NZy5zdXNwZW5zZTtcbmM9UWcoYyxhLGQpO2Q9QmcoYyxkKTtkLnRhZz0yO3ZvaWQgMCE9PWImJm51bGwhPT1iJiYoZC5jYWxsYmFjaz1iKTtEZyhhLGQpO1JnKGEsYyl9fTtmdW5jdGlvbiBUZyhhLGIsYyxkLGUsZixnKXthPWEuc3RhdGVOb2RlO3JldHVyblwiZnVuY3Rpb25cIj09PXR5cGVvZiBhLnNob3VsZENvbXBvbmVudFVwZGF0ZT9hLnNob3VsZENvbXBvbmVudFVwZGF0ZShkLGYsZyk6Yi5wcm90b3R5cGUmJmIucHJvdG90eXBlLmlzUHVyZVJlYWN0Q29tcG9uZW50PyFxZihjLGQpfHwhcWYoZSxmKTohMH1cbmZ1bmN0aW9uIFVnKGEsYixjKXt2YXIgZD0hMSxlPUNmO3ZhciBmPWIuY29udGV4dFR5cGU7XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09Zj9mPXhnKGYpOihlPUwoYik/RGY6Si5jdXJyZW50LGQ9Yi5jb250ZXh0VHlwZXMsZj0oZD1udWxsIT09ZCYmdm9pZCAwIT09ZCk/RWYoYSxlKTpDZik7Yj1uZXcgYihjLGYpO2EubWVtb2l6ZWRTdGF0ZT1udWxsIT09Yi5zdGF0ZSYmdm9pZCAwIT09Yi5zdGF0ZT9iLnN0YXRlOm51bGw7Yi51cGRhdGVyPVNnO2Euc3RhdGVOb2RlPWI7Yi5fcmVhY3RJbnRlcm5hbEZpYmVyPWE7ZCYmKGE9YS5zdGF0ZU5vZGUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZFVubWFza2VkQ2hpbGRDb250ZXh0PWUsYS5fX3JlYWN0SW50ZXJuYWxNZW1vaXplZE1hc2tlZENoaWxkQ29udGV4dD1mKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIFZnKGEsYixjLGQpe2E9Yi5zdGF0ZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZiLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMoYyxkKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmYi5VTlNBRkVfY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhjLGQpO2Iuc3RhdGUhPT1hJiZTZy5lbnF1ZXVlUmVwbGFjZVN0YXRlKGIsYi5zdGF0ZSxudWxsKX1cbmZ1bmN0aW9uIFdnKGEsYixjLGQpe3ZhciBlPWEuc3RhdGVOb2RlO2UucHJvcHM9YztlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtlLnJlZnM9Tmc7dmFyIGY9Yi5jb250ZXh0VHlwZTtcIm9iamVjdFwiPT09dHlwZW9mIGYmJm51bGwhPT1mP2UuY29udGV4dD14ZyhmKTooZj1MKGIpP0RmOkouY3VycmVudCxlLmNvbnRleHQ9RWYoYSxmKSk7Zj1hLnVwZGF0ZVF1ZXVlO251bGwhPT1mJiYoSGcoYSxmLGMsZSxkKSxlLnN0YXRlPWEubWVtb2l6ZWRTdGF0ZSk7Zj1iLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcztcImZ1bmN0aW9uXCI9PT10eXBlb2YgZiYmKE9nKGEsYixmLGMpLGUuc3RhdGU9YS5tZW1vaXplZFN0YXRlKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYi5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHN8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBlLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50JiZcImZ1bmN0aW9uXCIhPT1cbnR5cGVvZiBlLmNvbXBvbmVudFdpbGxNb3VudHx8KGI9ZS5zdGF0ZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnRXaWxsTW91bnQmJmUuY29tcG9uZW50V2lsbE1vdW50KCksXCJmdW5jdGlvblwiPT09dHlwZW9mIGUuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmZS5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCksYiE9PWUuc3RhdGUmJlNnLmVucXVldWVSZXBsYWNlU3RhdGUoZSxlLnN0YXRlLG51bGwpLGY9YS51cGRhdGVRdWV1ZSxudWxsIT09ZiYmKEhnKGEsZixjLGUsZCksZS5zdGF0ZT1hLm1lbW9pemVkU3RhdGUpKTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgZS5jb21wb25lbnREaWRNb3VudCYmKGEuZWZmZWN0VGFnfD00KX12YXIgWGc9QXJyYXkuaXNBcnJheTtcbmZ1bmN0aW9uIFlnKGEsYixjKXthPWMucmVmO2lmKG51bGwhPT1hJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYSYmXCJvYmplY3RcIiE9PXR5cGVvZiBhKXtpZihjLl9vd25lcil7Yz1jLl9vd25lcjtpZihjKXtpZigxIT09Yy50YWcpdGhyb3cgRXJyb3IodSgzMDkpKTt2YXIgZD1jLnN0YXRlTm9kZX1pZighZCl0aHJvdyBFcnJvcih1KDE0NyxhKSk7dmFyIGU9XCJcIithO2lmKG51bGwhPT1iJiZudWxsIT09Yi5yZWYmJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBiLnJlZiYmYi5yZWYuX3N0cmluZ1JlZj09PWUpcmV0dXJuIGIucmVmO2I9ZnVuY3Rpb24oYSl7dmFyIGI9ZC5yZWZzO2I9PT1OZyYmKGI9ZC5yZWZzPXt9KTtudWxsPT09YT9kZWxldGUgYltlXTpiW2VdPWF9O2IuX3N0cmluZ1JlZj1lO3JldHVybiBifWlmKFwic3RyaW5nXCIhPT10eXBlb2YgYSl0aHJvdyBFcnJvcih1KDI4NCkpO2lmKCFjLl9vd25lcil0aHJvdyBFcnJvcih1KDI5MCxhKSk7fXJldHVybiBhfVxuZnVuY3Rpb24gWmcoYSxiKXtpZihcInRleHRhcmVhXCIhPT1hLnR5cGUpdGhyb3cgRXJyb3IodSgzMSxcIltvYmplY3QgT2JqZWN0XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGIpP1wib2JqZWN0IHdpdGgga2V5cyB7XCIrT2JqZWN0LmtleXMoYikuam9pbihcIiwgXCIpK1wifVwiOmIsXCJcIikpO31cbmZ1bmN0aW9uICRnKGEpe2Z1bmN0aW9uIGIoYixjKXtpZihhKXt2YXIgZD1iLmxhc3RFZmZlY3Q7bnVsbCE9PWQ/KGQubmV4dEVmZmVjdD1jLGIubGFzdEVmZmVjdD1jKTpiLmZpcnN0RWZmZWN0PWIubGFzdEVmZmVjdD1jO2MubmV4dEVmZmVjdD1udWxsO2MuZWZmZWN0VGFnPTh9fWZ1bmN0aW9uIGMoYyxkKXtpZighYSlyZXR1cm4gbnVsbDtmb3IoO251bGwhPT1kOyliKGMsZCksZD1kLnNpYmxpbmc7cmV0dXJuIG51bGx9ZnVuY3Rpb24gZChhLGIpe2ZvcihhPW5ldyBNYXA7bnVsbCE9PWI7KW51bGwhPT1iLmtleT9hLnNldChiLmtleSxiKTphLnNldChiLmluZGV4LGIpLGI9Yi5zaWJsaW5nO3JldHVybiBhfWZ1bmN0aW9uIGUoYSxiLGMpe2E9YWgoYSxiLGMpO2EuaW5kZXg9MDthLnNpYmxpbmc9bnVsbDtyZXR1cm4gYX1mdW5jdGlvbiBmKGIsYyxkKXtiLmluZGV4PWQ7aWYoIWEpcmV0dXJuIGM7ZD1iLmFsdGVybmF0ZTtpZihudWxsIT09ZClyZXR1cm4gZD1kLmluZGV4LGQ8Yz8oYi5lZmZlY3RUYWc9XG4yLGMpOmQ7Yi5lZmZlY3RUYWc9MjtyZXR1cm4gY31mdW5jdGlvbiBnKGIpe2EmJm51bGw9PT1iLmFsdGVybmF0ZSYmKGIuZWZmZWN0VGFnPTIpO3JldHVybiBifWZ1bmN0aW9uIGgoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDYhPT1iLnRhZylyZXR1cm4gYj1iaChjLGEubW9kZSxkKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIGsoYSxiLGMsZCl7aWYobnVsbCE9PWImJmIuZWxlbWVudFR5cGU9PT1jLnR5cGUpcmV0dXJuIGQ9ZShiLGMucHJvcHMsZCksZC5yZWY9WWcoYSxiLGMpLGQucmV0dXJuPWEsZDtkPWNoKGMudHlwZSxjLmtleSxjLnByb3BzLG51bGwsYS5tb2RlLGQpO2QucmVmPVlnKGEsYixjKTtkLnJldHVybj1hO3JldHVybiBkfWZ1bmN0aW9uIGwoYSxiLGMsZCl7aWYobnVsbD09PWJ8fDQhPT1iLnRhZ3x8Yi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyE9PWMuY29udGFpbmVySW5mb3x8Yi5zdGF0ZU5vZGUuaW1wbGVtZW50YXRpb24hPT1cbmMuaW1wbGVtZW50YXRpb24pcmV0dXJuIGI9ZGgoYyxhLm1vZGUsZCksYi5yZXR1cm49YSxiO2I9ZShiLGMuY2hpbGRyZW58fFtdLGQpO2IucmV0dXJuPWE7cmV0dXJuIGJ9ZnVuY3Rpb24gbShhLGIsYyxkLGYpe2lmKG51bGw9PT1ifHw3IT09Yi50YWcpcmV0dXJuIGI9ZWgoYyxhLm1vZGUsZCxmKSxiLnJldHVybj1hLGI7Yj1lKGIsYyxkKTtiLnJldHVybj1hO3JldHVybiBifWZ1bmN0aW9uIEMoYSxiLGMpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKXJldHVybiBiPWJoKFwiXCIrYixhLm1vZGUsYyksYi5yZXR1cm49YSxiO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYiYmbnVsbCE9PWIpe3N3aXRjaChiLiQkdHlwZW9mKXtjYXNlIEdhOnJldHVybiBjPWNoKGIudHlwZSxiLmtleSxiLnByb3BzLG51bGwsYS5tb2RlLGMpLGMucmVmPVlnKGEsbnVsbCxiKSxjLnJldHVybj1hLGM7Y2FzZSBIYTpyZXR1cm4gYj1kaChiLGEubW9kZSxjKSxiLnJldHVybj1hLGJ9aWYoWGcoYil8fFxuVWEoYikpcmV0dXJuIGI9ZWgoYixhLm1vZGUsYyxudWxsKSxiLnJldHVybj1hLGI7WmcoYSxiKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB5KGEsYixjLGQpe3ZhciBlPW51bGwhPT1iP2Iua2V5Om51bGw7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBjfHxcIm51bWJlclwiPT09dHlwZW9mIGMpcmV0dXJuIG51bGwhPT1lP251bGw6aChhLGIsXCJcIitjLGQpO2lmKFwib2JqZWN0XCI9PT10eXBlb2YgYyYmbnVsbCE9PWMpe3N3aXRjaChjLiQkdHlwZW9mKXtjYXNlIEdhOnJldHVybiBjLmtleT09PWU/Yy50eXBlPT09SWE/bShhLGIsYy5wcm9wcy5jaGlsZHJlbixkLGUpOmsoYSxiLGMsZCk6bnVsbDtjYXNlIEhhOnJldHVybiBjLmtleT09PWU/bChhLGIsYyxkKTpudWxsfWlmKFhnKGMpfHxVYShjKSlyZXR1cm4gbnVsbCE9PWU/bnVsbDptKGEsYixjLGQsbnVsbCk7WmcoYSxjKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiBIKGEsYixjLGQsZSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBkfHxcIm51bWJlclwiPT09dHlwZW9mIGQpcmV0dXJuIGE9XG5hLmdldChjKXx8bnVsbCxoKGIsYSxcIlwiK2QsZSk7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBkJiZudWxsIT09ZCl7c3dpdGNoKGQuJCR0eXBlb2Ype2Nhc2UgR2E6cmV0dXJuIGE9YS5nZXQobnVsbD09PWQua2V5P2M6ZC5rZXkpfHxudWxsLGQudHlwZT09PUlhP20oYixhLGQucHJvcHMuY2hpbGRyZW4sZSxkLmtleSk6ayhiLGEsZCxlKTtjYXNlIEhhOnJldHVybiBhPWEuZ2V0KG51bGw9PT1kLmtleT9jOmQua2V5KXx8bnVsbCxsKGIsYSxkLGUpfWlmKFhnKGQpfHxVYShkKSlyZXR1cm4gYT1hLmdldChjKXx8bnVsbCxtKGIsYSxkLGUsbnVsbCk7WmcoYixkKX1yZXR1cm4gbnVsbH1mdW5jdGlvbiB6KGUsZyxoLGspe2Zvcih2YXIgbD1udWxsLG09bnVsbCxyPWcseD1nPTAsQT1udWxsO251bGwhPT1yJiZ4PGgubGVuZ3RoO3grKyl7ci5pbmRleD54PyhBPXIscj1udWxsKTpBPXIuc2libGluZzt2YXIgcD15KGUscixoW3hdLGspO2lmKG51bGw9PT1wKXtudWxsPT09ciYmKHI9QSk7YnJlYWt9YSYmXG5yJiZudWxsPT09cC5hbHRlcm5hdGUmJmIoZSxyKTtnPWYocCxnLHgpO251bGw9PT1tP2w9cDptLnNpYmxpbmc9cDttPXA7cj1BfWlmKHg9PT1oLmxlbmd0aClyZXR1cm4gYyhlLHIpLGw7aWYobnVsbD09PXIpe2Zvcig7eDxoLmxlbmd0aDt4Kyspcj1DKGUsaFt4XSxrKSxudWxsIT09ciYmKGc9ZihyLGcseCksbnVsbD09PW0/bD1yOm0uc2libGluZz1yLG09cik7cmV0dXJuIGx9Zm9yKHI9ZChlLHIpO3g8aC5sZW5ndGg7eCsrKUE9SChyLGUseCxoW3hdLGspLG51bGwhPT1BJiYoYSYmbnVsbCE9PUEuYWx0ZXJuYXRlJiZyLmRlbGV0ZShudWxsPT09QS5rZXk/eDpBLmtleSksZz1mKEEsZyx4KSxudWxsPT09bT9sPUE6bS5zaWJsaW5nPUEsbT1BKTthJiZyLmZvckVhY2goZnVuY3Rpb24oYSl7cmV0dXJuIGIoZSxhKX0pO3JldHVybiBsfWZ1bmN0aW9uIHRhKGUsZyxoLGspe3ZhciBsPVVhKGgpO2lmKFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBsKXRocm93IEVycm9yKHUoMTUwKSk7aD1sLmNhbGwoaCk7XG5pZihudWxsPT1oKXRocm93IEVycm9yKHUoMTUxKSk7Zm9yKHZhciBtPWw9bnVsbCxyPWcseD1nPTAsQT1udWxsLHA9aC5uZXh0KCk7bnVsbCE9PXImJiFwLmRvbmU7eCsrLHA9aC5uZXh0KCkpe3IuaW5kZXg+eD8oQT1yLHI9bnVsbCk6QT1yLnNpYmxpbmc7dmFyIHo9eShlLHIscC52YWx1ZSxrKTtpZihudWxsPT09eil7bnVsbD09PXImJihyPUEpO2JyZWFrfWEmJnImJm51bGw9PT16LmFsdGVybmF0ZSYmYihlLHIpO2c9Zih6LGcseCk7bnVsbD09PW0/bD16Om0uc2libGluZz16O209ejtyPUF9aWYocC5kb25lKXJldHVybiBjKGUsciksbDtpZihudWxsPT09cil7Zm9yKDshcC5kb25lO3grKyxwPWgubmV4dCgpKXA9QyhlLHAudmFsdWUsayksbnVsbCE9PXAmJihnPWYocCxnLHgpLG51bGw9PT1tP2w9cDptLnNpYmxpbmc9cCxtPXApO3JldHVybiBsfWZvcihyPWQoZSxyKTshcC5kb25lO3grKyxwPWgubmV4dCgpKXA9SChyLGUseCxwLnZhbHVlLGspLG51bGwhPT1wJiYoYSYmbnVsbCE9PVxucC5hbHRlcm5hdGUmJnIuZGVsZXRlKG51bGw9PT1wLmtleT94OnAua2V5KSxnPWYocCxnLHgpLG51bGw9PT1tP2w9cDptLnNpYmxpbmc9cCxtPXApO2EmJnIuZm9yRWFjaChmdW5jdGlvbihhKXtyZXR1cm4gYihlLGEpfSk7cmV0dXJuIGx9cmV0dXJuIGZ1bmN0aW9uKGEsZCxmLGgpe3ZhciBrPVwib2JqZWN0XCI9PT10eXBlb2YgZiYmbnVsbCE9PWYmJmYudHlwZT09PUlhJiZudWxsPT09Zi5rZXk7ayYmKGY9Zi5wcm9wcy5jaGlsZHJlbik7dmFyIGw9XCJvYmplY3RcIj09PXR5cGVvZiBmJiZudWxsIT09ZjtpZihsKXN3aXRjaChmLiQkdHlwZW9mKXtjYXNlIEdhOmE6e2w9Zi5rZXk7Zm9yKGs9ZDtudWxsIT09azspe2lmKGsua2V5PT09bClpZig3PT09ay50YWc/Zi50eXBlPT09SWE6ay5lbGVtZW50VHlwZT09PWYudHlwZSl7YyhhLGsuc2libGluZyk7ZD1lKGssZi50eXBlPT09SWE/Zi5wcm9wcy5jaGlsZHJlbjpmLnByb3BzLGgpO2QucmVmPVlnKGEsayxmKTtkLnJldHVybj1hO2E9ZDticmVhayBhfWVsc2V7YyhhLFxuayk7YnJlYWt9ZWxzZSBiKGEsayk7az1rLnNpYmxpbmd9Zi50eXBlPT09SWE/KGQ9ZWgoZi5wcm9wcy5jaGlsZHJlbixhLm1vZGUsaCxmLmtleSksZC5yZXR1cm49YSxhPWQpOihoPWNoKGYudHlwZSxmLmtleSxmLnByb3BzLG51bGwsYS5tb2RlLGgpLGgucmVmPVlnKGEsZCxmKSxoLnJldHVybj1hLGE9aCl9cmV0dXJuIGcoYSk7Y2FzZSBIYTphOntmb3Ioaz1mLmtleTtudWxsIT09ZDspe2lmKGQua2V5PT09aylpZig0PT09ZC50YWcmJmQuc3RhdGVOb2RlLmNvbnRhaW5lckluZm89PT1mLmNvbnRhaW5lckluZm8mJmQuc3RhdGVOb2RlLmltcGxlbWVudGF0aW9uPT09Zi5pbXBsZW1lbnRhdGlvbil7YyhhLGQuc2libGluZyk7ZD1lKGQsZi5jaGlsZHJlbnx8W10saCk7ZC5yZXR1cm49YTthPWQ7YnJlYWsgYX1lbHNle2MoYSxkKTticmVha31lbHNlIGIoYSxkKTtkPWQuc2libGluZ31kPWRoKGYsYS5tb2RlLGgpO2QucmV0dXJuPWE7YT1kfXJldHVybiBnKGEpfWlmKFwic3RyaW5nXCI9PT1cbnR5cGVvZiBmfHxcIm51bWJlclwiPT09dHlwZW9mIGYpcmV0dXJuIGY9XCJcIitmLG51bGwhPT1kJiY2PT09ZC50YWc/KGMoYSxkLnNpYmxpbmcpLGQ9ZShkLGYsaCksZC5yZXR1cm49YSxhPWQpOihjKGEsZCksZD1iaChmLGEubW9kZSxoKSxkLnJldHVybj1hLGE9ZCksZyhhKTtpZihYZyhmKSlyZXR1cm4geihhLGQsZixoKTtpZihVYShmKSlyZXR1cm4gdGEoYSxkLGYsaCk7bCYmWmcoYSxmKTtpZihcInVuZGVmaW5lZFwiPT09dHlwZW9mIGYmJiFrKXN3aXRjaChhLnRhZyl7Y2FzZSAxOmNhc2UgMDp0aHJvdyBhPWEudHlwZSxFcnJvcih1KDE1MixhLmRpc3BsYXlOYW1lfHxhLm5hbWV8fFwiQ29tcG9uZW50XCIpKTt9cmV0dXJuIGMoYSxkKX19dmFyIGZoPSRnKCEwKSxnaD0kZyghMSksaGg9e30saWg9e2N1cnJlbnQ6aGh9LGpoPXtjdXJyZW50OmhofSxraD17Y3VycmVudDpoaH07ZnVuY3Rpb24gbGgoYSl7aWYoYT09PWhoKXRocm93IEVycm9yKHUoMTc0KSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBtaChhLGIpe0koa2gsYixhKTtJKGpoLGEsYSk7SShpaCxoaCxhKTt2YXIgYz1iLm5vZGVUeXBlO3N3aXRjaChjKXtjYXNlIDk6Y2FzZSAxMTpiPShiPWIuZG9jdW1lbnRFbGVtZW50KT9iLm5hbWVzcGFjZVVSSTpRYihudWxsLFwiXCIpO2JyZWFrO2RlZmF1bHQ6Yz04PT09Yz9iLnBhcmVudE5vZGU6YixiPWMubmFtZXNwYWNlVVJJfHxudWxsLGM9Yy50YWdOYW1lLGI9UWIoYixjKX1HKGloLGEpO0koaWgsYixhKX1mdW5jdGlvbiBuaChhKXtHKGloLGEpO0coamgsYSk7RyhraCxhKX1mdW5jdGlvbiBvaChhKXtsaChraC5jdXJyZW50KTt2YXIgYj1saChpaC5jdXJyZW50KTt2YXIgYz1RYihiLGEudHlwZSk7YiE9PWMmJihJKGpoLGEsYSksSShpaCxjLGEpKX1mdW5jdGlvbiBwaChhKXtqaC5jdXJyZW50PT09YSYmKEcoaWgsYSksRyhqaCxhKSl9dmFyIE09e2N1cnJlbnQ6MH07XG5mdW5jdGlvbiBxaChhKXtmb3IodmFyIGI9YTtudWxsIT09Yjspe2lmKDEzPT09Yi50YWcpe3ZhciBjPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09YyYmKGM9Yy5kZWh5ZHJhdGVkLG51bGw9PT1jfHxjLmRhdGE9PT1qZXx8Yy5kYXRhPT09a2UpKXJldHVybiBifWVsc2UgaWYoMTk9PT1iLnRhZyYmdm9pZCAwIT09Yi5tZW1vaXplZFByb3BzLnJldmVhbE9yZGVyKXtpZigwIT09KGIuZWZmZWN0VGFnJjY0KSlyZXR1cm4gYn1lbHNlIGlmKG51bGwhPT1iLmNoaWxkKXtiLmNoaWxkLnJldHVybj1iO2I9Yi5jaGlsZDtjb250aW51ZX1pZihiPT09YSlicmVhaztmb3IoO251bGw9PT1iLnNpYmxpbmc7KXtpZihudWxsPT09Yi5yZXR1cm58fGIucmV0dXJuPT09YSlyZXR1cm4gbnVsbDtiPWIucmV0dXJufWIuc2libGluZy5yZXR1cm49Yi5yZXR1cm47Yj1iLnNpYmxpbmd9cmV0dXJuIG51bGx9ZnVuY3Rpb24gcmgoYSxiKXtyZXR1cm57cmVzcG9uZGVyOmEscHJvcHM6Yn19XG52YXIgc2g9RWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixOPUVhLlJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLHRoPTAsdWg9bnVsbCxPPW51bGwsdmg9bnVsbCx3aD1udWxsLFA9bnVsbCx4aD1udWxsLHloPTAsemg9bnVsbCxBaD0wLEJoPSExLENoPW51bGwsR2g9MDtmdW5jdGlvbiBRKCl7dGhyb3cgRXJyb3IodSgzMjEpKTt9ZnVuY3Rpb24gSGgoYSxiKXtpZihudWxsPT09YilyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoJiZjPGEubGVuZ3RoO2MrKylpZighb2YoYVtjXSxiW2NdKSlyZXR1cm4hMTtyZXR1cm4hMH1cbmZ1bmN0aW9uIEloKGEsYixjLGQsZSxmKXt0aD1mO3VoPWI7dmg9bnVsbCE9PWE/YS5tZW1vaXplZFN0YXRlOm51bGw7c2guY3VycmVudD1udWxsPT09dmg/Smg6S2g7Yj1jKGQsZSk7aWYoQmgpe2RvIEJoPSExLEdoKz0xLHZoPW51bGwhPT1hP2EubWVtb2l6ZWRTdGF0ZTpudWxsLHhoPXdoLHpoPVA9Tz1udWxsLHNoLmN1cnJlbnQ9S2gsYj1jKGQsZSk7d2hpbGUoQmgpO0NoPW51bGw7R2g9MH1zaC5jdXJyZW50PUxoO2E9dWg7YS5tZW1vaXplZFN0YXRlPXdoO2EuZXhwaXJhdGlvblRpbWU9eWg7YS51cGRhdGVRdWV1ZT16aDthLmVmZmVjdFRhZ3w9QWg7YT1udWxsIT09TyYmbnVsbCE9PU8ubmV4dDt0aD0wO3hoPVA9d2g9dmg9Tz11aD1udWxsO3loPTA7emg9bnVsbDtBaD0wO2lmKGEpdGhyb3cgRXJyb3IodSgzMDApKTtyZXR1cm4gYn1cbmZ1bmN0aW9uIE1oKCl7c2guY3VycmVudD1MaDt0aD0wO3hoPVA9d2g9dmg9Tz11aD1udWxsO3loPTA7emg9bnVsbDtBaD0wO0JoPSExO0NoPW51bGw7R2g9MH1mdW5jdGlvbiBOaCgpe3ZhciBhPXttZW1vaXplZFN0YXRlOm51bGwsYmFzZVN0YXRlOm51bGwscXVldWU6bnVsbCxiYXNlVXBkYXRlOm51bGwsbmV4dDpudWxsfTtudWxsPT09UD93aD1QPWE6UD1QLm5leHQ9YTtyZXR1cm4gUH1mdW5jdGlvbiBPaCgpe2lmKG51bGwhPT14aClQPXhoLHhoPVAubmV4dCxPPXZoLHZoPW51bGwhPT1PP08ubmV4dDpudWxsO2Vsc2V7aWYobnVsbD09PXZoKXRocm93IEVycm9yKHUoMzEwKSk7Tz12aDt2YXIgYT17bWVtb2l6ZWRTdGF0ZTpPLm1lbW9pemVkU3RhdGUsYmFzZVN0YXRlOk8uYmFzZVN0YXRlLHF1ZXVlOk8ucXVldWUsYmFzZVVwZGF0ZTpPLmJhc2VVcGRhdGUsbmV4dDpudWxsfTtQPW51bGw9PT1QP3doPWE6UC5uZXh0PWE7dmg9Ty5uZXh0fXJldHVybiBQfVxuZnVuY3Rpb24gUGgoYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PT10eXBlb2YgYj9iKGEpOmJ9XG5mdW5jdGlvbiBRaChhKXt2YXIgYj1PaCgpLGM9Yi5xdWV1ZTtpZihudWxsPT09Yyl0aHJvdyBFcnJvcih1KDMxMSkpO2MubGFzdFJlbmRlcmVkUmVkdWNlcj1hO2lmKDA8R2gpe3ZhciBkPWMuZGlzcGF0Y2g7aWYobnVsbCE9PUNoKXt2YXIgZT1DaC5nZXQoYyk7aWYodm9pZCAwIT09ZSl7Q2guZGVsZXRlKGMpO3ZhciBmPWIubWVtb2l6ZWRTdGF0ZTtkbyBmPWEoZixlLmFjdGlvbiksZT1lLm5leHQ7d2hpbGUobnVsbCE9PWUpO29mKGYsYi5tZW1vaXplZFN0YXRlKXx8KHdnPSEwKTtiLm1lbW9pemVkU3RhdGU9ZjtiLmJhc2VVcGRhdGU9PT1jLmxhc3QmJihiLmJhc2VTdGF0ZT1mKTtjLmxhc3RSZW5kZXJlZFN0YXRlPWY7cmV0dXJuW2YsZF19fXJldHVybltiLm1lbW9pemVkU3RhdGUsZF19ZD1jLmxhc3Q7dmFyIGc9Yi5iYXNlVXBkYXRlO2Y9Yi5iYXNlU3RhdGU7bnVsbCE9PWc/KG51bGwhPT1kJiYoZC5uZXh0PW51bGwpLGQ9Zy5uZXh0KTpkPW51bGwhPT1kP2QubmV4dDpudWxsO2lmKG51bGwhPT1cbmQpe3ZhciBoPWU9bnVsbCxrPWQsbD0hMTtkb3t2YXIgbT1rLmV4cGlyYXRpb25UaW1lO208dGg/KGx8fChsPSEwLGg9ZyxlPWYpLG0+eWgmJih5aD1tLEpnKHloKSkpOihJZyhtLGsuc3VzcGVuc2VDb25maWcpLGY9ay5lYWdlclJlZHVjZXI9PT1hP2suZWFnZXJTdGF0ZTphKGYsay5hY3Rpb24pKTtnPWs7az1rLm5leHR9d2hpbGUobnVsbCE9PWsmJmshPT1kKTtsfHwoaD1nLGU9Zik7b2YoZixiLm1lbW9pemVkU3RhdGUpfHwod2c9ITApO2IubWVtb2l6ZWRTdGF0ZT1mO2IuYmFzZVVwZGF0ZT1oO2IuYmFzZVN0YXRlPWU7Yy5sYXN0UmVuZGVyZWRTdGF0ZT1mfXJldHVybltiLm1lbW9pemVkU3RhdGUsYy5kaXNwYXRjaF19XG5mdW5jdGlvbiBSaChhKXt2YXIgYj1OaCgpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBhJiYoYT1hKCkpO2IubWVtb2l6ZWRTdGF0ZT1iLmJhc2VTdGF0ZT1hO2E9Yi5xdWV1ZT17bGFzdDpudWxsLGRpc3BhdGNoOm51bGwsbGFzdFJlbmRlcmVkUmVkdWNlcjpQaCxsYXN0UmVuZGVyZWRTdGF0ZTphfTthPWEuZGlzcGF0Y2g9U2guYmluZChudWxsLHVoLGEpO3JldHVybltiLm1lbW9pemVkU3RhdGUsYV19ZnVuY3Rpb24gVGgoYSl7cmV0dXJuIFFoKFBoLGEpfWZ1bmN0aW9uIFVoKGEsYixjLGQpe2E9e3RhZzphLGNyZWF0ZTpiLGRlc3Ryb3k6YyxkZXBzOmQsbmV4dDpudWxsfTtudWxsPT09emg/KHpoPXtsYXN0RWZmZWN0Om51bGx9LHpoLmxhc3RFZmZlY3Q9YS5uZXh0PWEpOihiPXpoLmxhc3RFZmZlY3QsbnVsbD09PWI/emgubGFzdEVmZmVjdD1hLm5leHQ9YTooYz1iLm5leHQsYi5uZXh0PWEsYS5uZXh0PWMsemgubGFzdEVmZmVjdD1hKSk7cmV0dXJuIGF9XG5mdW5jdGlvbiBWaChhLGIsYyxkKXt2YXIgZT1OaCgpO0FofD1hO2UubWVtb2l6ZWRTdGF0ZT1VaChiLGMsdm9pZCAwLHZvaWQgMD09PWQ/bnVsbDpkKX1mdW5jdGlvbiBXaChhLGIsYyxkKXt2YXIgZT1PaCgpO2Q9dm9pZCAwPT09ZD9udWxsOmQ7dmFyIGY9dm9pZCAwO2lmKG51bGwhPT1PKXt2YXIgZz1PLm1lbW9pemVkU3RhdGU7Zj1nLmRlc3Ryb3k7aWYobnVsbCE9PWQmJkhoKGQsZy5kZXBzKSl7VWgoMCxjLGYsZCk7cmV0dXJufX1BaHw9YTtlLm1lbW9pemVkU3RhdGU9VWgoYixjLGYsZCl9ZnVuY3Rpb24gWGgoYSxiKXtyZXR1cm4gVmgoNTE2LDE5MixhLGIpfWZ1bmN0aW9uIFloKGEsYil7cmV0dXJuIFdoKDUxNiwxOTIsYSxiKX1cbmZ1bmN0aW9uIFpoKGEsYil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGIpcmV0dXJuIGE9YSgpLGIoYSksZnVuY3Rpb24oKXtiKG51bGwpfTtpZihudWxsIT09YiYmdm9pZCAwIT09YilyZXR1cm4gYT1hKCksYi5jdXJyZW50PWEsZnVuY3Rpb24oKXtiLmN1cnJlbnQ9bnVsbH19ZnVuY3Rpb24gJGgoKXt9ZnVuY3Rpb24gYWkoYSxiKXtOaCgpLm1lbW9pemVkU3RhdGU9W2Esdm9pZCAwPT09Yj9udWxsOmJdO3JldHVybiBhfWZ1bmN0aW9uIGJpKGEsYil7dmFyIGM9T2goKTtiPXZvaWQgMD09PWI/bnVsbDpiO3ZhciBkPWMubWVtb2l6ZWRTdGF0ZTtpZihudWxsIT09ZCYmbnVsbCE9PWImJkhoKGIsZFsxXSkpcmV0dXJuIGRbMF07Yy5tZW1vaXplZFN0YXRlPVthLGJdO3JldHVybiBhfVxuZnVuY3Rpb24gU2goYSxiLGMpe2lmKCEoMjU+R2gpKXRocm93IEVycm9yKHUoMzAxKSk7dmFyIGQ9YS5hbHRlcm5hdGU7aWYoYT09PXVofHxudWxsIT09ZCYmZD09PXVoKWlmKEJoPSEwLGE9e2V4cGlyYXRpb25UaW1lOnRoLHN1c3BlbnNlQ29uZmlnOm51bGwsYWN0aW9uOmMsZWFnZXJSZWR1Y2VyOm51bGwsZWFnZXJTdGF0ZTpudWxsLG5leHQ6bnVsbH0sbnVsbD09PUNoJiYoQ2g9bmV3IE1hcCksYz1DaC5nZXQoYiksdm9pZCAwPT09YylDaC5zZXQoYixhKTtlbHNle2ZvcihiPWM7bnVsbCE9PWIubmV4dDspYj1iLm5leHQ7Yi5uZXh0PWF9ZWxzZXt2YXIgZT1QZygpLGY9TWcuc3VzcGVuc2U7ZT1RZyhlLGEsZik7Zj17ZXhwaXJhdGlvblRpbWU6ZSxzdXNwZW5zZUNvbmZpZzpmLGFjdGlvbjpjLGVhZ2VyUmVkdWNlcjpudWxsLGVhZ2VyU3RhdGU6bnVsbCxuZXh0Om51bGx9O3ZhciBnPWIubGFzdDtpZihudWxsPT09ZylmLm5leHQ9ZjtlbHNle3ZhciBoPWcubmV4dDtudWxsIT09aCYmXG4oZi5uZXh0PWgpO2cubmV4dD1mfWIubGFzdD1mO2lmKDA9PT1hLmV4cGlyYXRpb25UaW1lJiYobnVsbD09PWR8fDA9PT1kLmV4cGlyYXRpb25UaW1lKSYmKGQ9Yi5sYXN0UmVuZGVyZWRSZWR1Y2VyLG51bGwhPT1kKSl0cnl7dmFyIGs9Yi5sYXN0UmVuZGVyZWRTdGF0ZSxsPWQoayxjKTtmLmVhZ2VyUmVkdWNlcj1kO2YuZWFnZXJTdGF0ZT1sO2lmKG9mKGwsaykpcmV0dXJufWNhdGNoKG0pe31maW5hbGx5e31SZyhhLGUpfX1cbnZhciBMaD17cmVhZENvbnRleHQ6eGcsdXNlQ2FsbGJhY2s6USx1c2VDb250ZXh0OlEsdXNlRWZmZWN0OlEsdXNlSW1wZXJhdGl2ZUhhbmRsZTpRLHVzZUxheW91dEVmZmVjdDpRLHVzZU1lbW86USx1c2VSZWR1Y2VyOlEsdXNlUmVmOlEsdXNlU3RhdGU6USx1c2VEZWJ1Z1ZhbHVlOlEsdXNlUmVzcG9uZGVyOlEsdXNlRGVmZXJyZWRWYWx1ZTpRLHVzZVRyYW5zaXRpb246UX0sSmg9e3JlYWRDb250ZXh0OnhnLHVzZUNhbGxiYWNrOmFpLHVzZUNvbnRleHQ6eGcsdXNlRWZmZWN0OlhoLHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBWaCg0LDM2LFpoLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gVmgoNCwzNixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9TmgoKTtiPXZvaWQgMD09PWI/bnVsbDpiO2E9YSgpO2MubWVtb2l6ZWRTdGF0ZT1cblthLGJdO3JldHVybiBhfSx1c2VSZWR1Y2VyOmZ1bmN0aW9uKGEsYixjKXt2YXIgZD1OaCgpO2I9dm9pZCAwIT09Yz9jKGIpOmI7ZC5tZW1vaXplZFN0YXRlPWQuYmFzZVN0YXRlPWI7YT1kLnF1ZXVlPXtsYXN0Om51bGwsZGlzcGF0Y2g6bnVsbCxsYXN0UmVuZGVyZWRSZWR1Y2VyOmEsbGFzdFJlbmRlcmVkU3RhdGU6Yn07YT1hLmRpc3BhdGNoPVNoLmJpbmQobnVsbCx1aCxhKTtyZXR1cm5bZC5tZW1vaXplZFN0YXRlLGFdfSx1c2VSZWY6ZnVuY3Rpb24oYSl7dmFyIGI9TmgoKTthPXtjdXJyZW50OmF9O3JldHVybiBiLm1lbW9pemVkU3RhdGU9YX0sdXNlU3RhdGU6UmgsdXNlRGVidWdWYWx1ZTokaCx1c2VSZXNwb25kZXI6cmgsdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPVJoKGEpLGQ9Y1swXSxlPWNbMV07WGgoZnVuY3Rpb24oKXtxLnVuc3RhYmxlX25leHQoZnVuY3Rpb24oKXt2YXIgYz1OLnN1c3BlbnNlO04uc3VzcGVuc2U9dm9pZCAwPT09Yj9udWxsOmI7dHJ5e2UoYSl9ZmluYWxseXtOLnN1c3BlbnNlPVxuY319KX0sW2EsYl0pO3JldHVybiBkfSx1c2VUcmFuc2l0aW9uOmZ1bmN0aW9uKGEpe3ZhciBiPVJoKCExKSxjPWJbMF0sZD1iWzFdO3JldHVyblthaShmdW5jdGlvbihiKXtkKCEwKTtxLnVuc3RhYmxlX25leHQoZnVuY3Rpb24oKXt2YXIgYz1OLnN1c3BlbnNlO04uc3VzcGVuc2U9dm9pZCAwPT09YT9udWxsOmE7dHJ5e2QoITEpLGIoKX1maW5hbGx5e04uc3VzcGVuc2U9Y319KX0sW2EsY10pLGNdfX0sS2g9e3JlYWRDb250ZXh0OnhnLHVzZUNhbGxiYWNrOmJpLHVzZUNvbnRleHQ6eGcsdXNlRWZmZWN0OlloLHVzZUltcGVyYXRpdmVIYW5kbGU6ZnVuY3Rpb24oYSxiLGMpe2M9bnVsbCE9PWMmJnZvaWQgMCE9PWM/Yy5jb25jYXQoW2FdKTpudWxsO3JldHVybiBXaCg0LDM2LFpoLmJpbmQobnVsbCxiLGEpLGMpfSx1c2VMYXlvdXRFZmZlY3Q6ZnVuY3Rpb24oYSxiKXtyZXR1cm4gV2goNCwzNixhLGIpfSx1c2VNZW1vOmZ1bmN0aW9uKGEsYil7dmFyIGM9T2goKTtiPXZvaWQgMD09PWI/XG5udWxsOmI7dmFyIGQ9Yy5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1kJiZudWxsIT09YiYmSGgoYixkWzFdKSlyZXR1cm4gZFswXTthPWEoKTtjLm1lbW9pemVkU3RhdGU9W2EsYl07cmV0dXJuIGF9LHVzZVJlZHVjZXI6UWgsdXNlUmVmOmZ1bmN0aW9uKCl7cmV0dXJuIE9oKCkubWVtb2l6ZWRTdGF0ZX0sdXNlU3RhdGU6VGgsdXNlRGVidWdWYWx1ZTokaCx1c2VSZXNwb25kZXI6cmgsdXNlRGVmZXJyZWRWYWx1ZTpmdW5jdGlvbihhLGIpe3ZhciBjPVRoKGEpLGQ9Y1swXSxlPWNbMV07WWgoZnVuY3Rpb24oKXtxLnVuc3RhYmxlX25leHQoZnVuY3Rpb24oKXt2YXIgYz1OLnN1c3BlbnNlO04uc3VzcGVuc2U9dm9pZCAwPT09Yj9udWxsOmI7dHJ5e2UoYSl9ZmluYWxseXtOLnN1c3BlbnNlPWN9fSl9LFthLGJdKTtyZXR1cm4gZH0sdXNlVHJhbnNpdGlvbjpmdW5jdGlvbihhKXt2YXIgYj1UaCghMSksYz1iWzBdLGQ9YlsxXTtyZXR1cm5bYmkoZnVuY3Rpb24oYil7ZCghMCk7cS51bnN0YWJsZV9uZXh0KGZ1bmN0aW9uKCl7dmFyIGM9XG5OLnN1c3BlbnNlO04uc3VzcGVuc2U9dm9pZCAwPT09YT9udWxsOmE7dHJ5e2QoITEpLGIoKX1maW5hbGx5e04uc3VzcGVuc2U9Y319KX0sW2EsY10pLGNdfX0sY2k9bnVsbCxkaT1udWxsLGVpPSExO2Z1bmN0aW9uIGZpKGEsYil7dmFyIGM9Z2koNSxudWxsLG51bGwsMCk7Yy5lbGVtZW50VHlwZT1cIkRFTEVURURcIjtjLnR5cGU9XCJERUxFVEVEXCI7Yy5zdGF0ZU5vZGU9YjtjLnJldHVybj1hO2MuZWZmZWN0VGFnPTg7bnVsbCE9PWEubGFzdEVmZmVjdD8oYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9YyxhLmxhc3RFZmZlY3Q9Yyk6YS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9Y31cbmZ1bmN0aW9uIGhpKGEsYil7c3dpdGNoKGEudGFnKXtjYXNlIDU6dmFyIGM9YS50eXBlO2I9MSE9PWIubm9kZVR5cGV8fGMudG9Mb3dlckNhc2UoKSE9PWIubm9kZU5hbWUudG9Mb3dlckNhc2UoKT9udWxsOmI7cmV0dXJuIG51bGwhPT1iPyhhLnN0YXRlTm9kZT1iLCEwKTohMTtjYXNlIDY6cmV0dXJuIGI9XCJcIj09PWEucGVuZGluZ1Byb3BzfHwzIT09Yi5ub2RlVHlwZT9udWxsOmIsbnVsbCE9PWI/KGEuc3RhdGVOb2RlPWIsITApOiExO2Nhc2UgMTM6cmV0dXJuITE7ZGVmYXVsdDpyZXR1cm4hMX19XG5mdW5jdGlvbiBpaShhKXtpZihlaSl7dmFyIGI9ZGk7aWYoYil7dmFyIGM9YjtpZighaGkoYSxiKSl7Yj1yZShjLm5leHRTaWJsaW5nKTtpZighYnx8IWhpKGEsYikpe2EuZWZmZWN0VGFnPWEuZWZmZWN0VGFnJi0xMDI1fDI7ZWk9ITE7Y2k9YTtyZXR1cm59ZmkoY2ksYyl9Y2k9YTtkaT1yZShiLmZpcnN0Q2hpbGQpfWVsc2UgYS5lZmZlY3RUYWc9YS5lZmZlY3RUYWcmLTEwMjV8MixlaT0hMSxjaT1hfX1mdW5jdGlvbiBqaShhKXtmb3IoYT1hLnJldHVybjtudWxsIT09YSYmNSE9PWEudGFnJiYzIT09YS50YWcmJjEzIT09YS50YWc7KWE9YS5yZXR1cm47Y2k9YX1cbmZ1bmN0aW9uIGtpKGEpe2lmKGEhPT1jaSlyZXR1cm4hMTtpZighZWkpcmV0dXJuIGppKGEpLGVpPSEwLCExO3ZhciBiPWEudHlwZTtpZig1IT09YS50YWd8fFwiaGVhZFwiIT09YiYmXCJib2R5XCIhPT1iJiYhb2UoYixhLm1lbW9pemVkUHJvcHMpKWZvcihiPWRpO2I7KWZpKGEsYiksYj1yZShiLm5leHRTaWJsaW5nKTtqaShhKTtpZigxMz09PWEudGFnKXthPWEubWVtb2l6ZWRTdGF0ZTthPW51bGwhPT1hP2EuZGVoeWRyYXRlZDpudWxsO2lmKCFhKXRocm93IEVycm9yKHUoMzE3KSk7YTp7YT1hLm5leHRTaWJsaW5nO2ZvcihiPTA7YTspe2lmKDg9PT1hLm5vZGVUeXBlKXt2YXIgYz1hLmRhdGE7aWYoYz09PWllKXtpZigwPT09Yil7ZGk9cmUoYS5uZXh0U2libGluZyk7YnJlYWsgYX1iLS19ZWxzZSBjIT09aGUmJmMhPT1rZSYmYyE9PWplfHxiKyt9YT1hLm5leHRTaWJsaW5nfWRpPW51bGx9fWVsc2UgZGk9Y2k/cmUoYS5zdGF0ZU5vZGUubmV4dFNpYmxpbmcpOm51bGw7cmV0dXJuITB9XG5mdW5jdGlvbiBsaSgpe2RpPWNpPW51bGw7ZWk9ITF9dmFyIG1pPUVhLlJlYWN0Q3VycmVudE93bmVyLHdnPSExO2Z1bmN0aW9uIFIoYSxiLGMsZCl7Yi5jaGlsZD1udWxsPT09YT9naChiLG51bGwsYyxkKTpmaChiLGEuY2hpbGQsYyxkKX1mdW5jdGlvbiBuaShhLGIsYyxkLGUpe2M9Yy5yZW5kZXI7dmFyIGY9Yi5yZWY7dmcoYixlKTtkPUloKGEsYixjLGQsZixlKTtpZihudWxsIT09YSYmIXdnKXJldHVybiBiLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWUsYi5lZmZlY3RUYWcmPS01MTcsYS5leHBpcmF0aW9uVGltZTw9ZSYmKGEuZXhwaXJhdGlvblRpbWU9MCksb2koYSxiLGUpO2IuZWZmZWN0VGFnfD0xO1IoYSxiLGQsZSk7cmV0dXJuIGIuY2hpbGR9XG5mdW5jdGlvbiBwaShhLGIsYyxkLGUsZil7aWYobnVsbD09PWEpe3ZhciBnPWMudHlwZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZyYmIXFpKGcpJiZ2b2lkIDA9PT1nLmRlZmF1bHRQcm9wcyYmbnVsbD09PWMuY29tcGFyZSYmdm9pZCAwPT09Yy5kZWZhdWx0UHJvcHMpcmV0dXJuIGIudGFnPTE1LGIudHlwZT1nLHJpKGEsYixnLGQsZSxmKTthPWNoKGMudHlwZSxudWxsLGQsbnVsbCxiLm1vZGUsZik7YS5yZWY9Yi5yZWY7YS5yZXR1cm49YjtyZXR1cm4gYi5jaGlsZD1hfWc9YS5jaGlsZDtpZihlPGYmJihlPWcubWVtb2l6ZWRQcm9wcyxjPWMuY29tcGFyZSxjPW51bGwhPT1jP2M6cWYsYyhlLGQpJiZhLnJlZj09PWIucmVmKSlyZXR1cm4gb2koYSxiLGYpO2IuZWZmZWN0VGFnfD0xO2E9YWgoZyxkLGYpO2EucmVmPWIucmVmO2EucmV0dXJuPWI7cmV0dXJuIGIuY2hpbGQ9YX1cbmZ1bmN0aW9uIHJpKGEsYixjLGQsZSxmKXtyZXR1cm4gbnVsbCE9PWEmJnFmKGEubWVtb2l6ZWRQcm9wcyxkKSYmYS5yZWY9PT1iLnJlZiYmKHdnPSExLGU8Zik/b2koYSxiLGYpOnNpKGEsYixjLGQsZil9ZnVuY3Rpb24gdGkoYSxiKXt2YXIgYz1iLnJlZjtpZihudWxsPT09YSYmbnVsbCE9PWN8fG51bGwhPT1hJiZhLnJlZiE9PWMpYi5lZmZlY3RUYWd8PTEyOH1mdW5jdGlvbiBzaShhLGIsYyxkLGUpe3ZhciBmPUwoYyk/RGY6Si5jdXJyZW50O2Y9RWYoYixmKTt2ZyhiLGUpO2M9SWgoYSxiLGMsZCxmLGUpO2lmKG51bGwhPT1hJiYhd2cpcmV0dXJuIGIudXBkYXRlUXVldWU9YS51cGRhdGVRdWV1ZSxiLmVmZmVjdFRhZyY9LTUxNyxhLmV4cGlyYXRpb25UaW1lPD1lJiYoYS5leHBpcmF0aW9uVGltZT0wKSxvaShhLGIsZSk7Yi5lZmZlY3RUYWd8PTE7UihhLGIsYyxlKTtyZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIHVpKGEsYixjLGQsZSl7aWYoTChjKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO3ZnKGIsZSk7aWYobnVsbD09PWIuc3RhdGVOb2RlKW51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSxVZyhiLGMsZCxlKSxXZyhiLGMsZCxlKSxkPSEwO2Vsc2UgaWYobnVsbD09PWEpe3ZhciBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzO2cucHJvcHM9aDt2YXIgaz1nLmNvbnRleHQsbD1jLmNvbnRleHRUeXBlO1wib2JqZWN0XCI9PT10eXBlb2YgbCYmbnVsbCE9PWw/bD14ZyhsKToobD1MKGMpP0RmOkouY3VycmVudCxsPUVmKGIsbCkpO3ZhciBtPWMuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzLEM9XCJmdW5jdGlvblwiPT09dHlwZW9mIG18fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlO0N8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcblwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHN8fChoIT09ZHx8ayE9PWwpJiZWZyhiLGcsZCxsKTt5Zz0hMTt2YXIgeT1iLm1lbW9pemVkU3RhdGU7az1nLnN0YXRlPXk7dmFyIEg9Yi51cGRhdGVRdWV1ZTtudWxsIT09SCYmKEhnKGIsSCxkLGcsZSksaz1iLm1lbW9pemVkU3RhdGUpO2ghPT1kfHx5IT09a3x8Sy5jdXJyZW50fHx5Zz8oXCJmdW5jdGlvblwiPT09dHlwZW9mIG0mJihPZyhiLGMsbSxkKSxrPWIubWVtb2l6ZWRTdGF0ZSksKGg9eWd8fFRnKGIsYyxoLGQseSxrLGwpKT8oQ3x8XCJmdW5jdGlvblwiIT09dHlwZW9mIGcuVU5TQUZFX2NvbXBvbmVudFdpbGxNb3VudCYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50fHwoXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbE1vdW50JiZnLmNvbXBvbmVudFdpbGxNb3VudCgpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsTW91bnQmJlxuZy5VTlNBRkVfY29tcG9uZW50V2lsbE1vdW50KCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZE1vdW50JiYoYi5lZmZlY3RUYWd8PTQpKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksYi5tZW1vaXplZFByb3BzPWQsYi5tZW1vaXplZFN0YXRlPWspLGcucHJvcHM9ZCxnLnN0YXRlPWssZy5jb250ZXh0PWwsZD1oKTooXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50RGlkTW91bnQmJihiLmVmZmVjdFRhZ3w9NCksZD0hMSl9ZWxzZSBnPWIuc3RhdGVOb2RlLGg9Yi5tZW1vaXplZFByb3BzLGcucHJvcHM9Yi50eXBlPT09Yi5lbGVtZW50VHlwZT9oOm1nKGIudHlwZSxoKSxrPWcuY29udGV4dCxsPWMuY29udGV4dFR5cGUsXCJvYmplY3RcIj09PXR5cGVvZiBsJiZudWxsIT09bD9sPXhnKGwpOihsPUwoYyk/RGY6Si5jdXJyZW50LGw9RWYoYixsKSksbT1jLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcywoQz1cblwiZnVuY3Rpb25cIj09PXR5cGVvZiBtfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSl8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLlVOU0FGRV9jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzfHwoaCE9PWR8fGshPT1sKSYmVmcoYixnLGQsbCkseWc9ITEsaz1iLm1lbW9pemVkU3RhdGUseT1nLnN0YXRlPWssSD1iLnVwZGF0ZVF1ZXVlLG51bGwhPT1IJiYoSGcoYixILGQsZyxlKSx5PWIubWVtb2l6ZWRTdGF0ZSksaCE9PWR8fGshPT15fHxLLmN1cnJlbnR8fHlnPyhcImZ1bmN0aW9uXCI9PT10eXBlb2YgbSYmKE9nKGIsYyxtLGQpLHk9Yi5tZW1vaXplZFN0YXRlKSwobT15Z3x8VGcoYixjLGgsZCxrLHksbCkpPyhDfHxcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZXx8XG4oXCJmdW5jdGlvblwiPT09dHlwZW9mIGcuY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5jb21wb25lbnRXaWxsVXBkYXRlKGQseSxsKSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZSYmZy5VTlNBRkVfY29tcG9uZW50V2lsbFVwZGF0ZShkLHksbCkpLFwiZnVuY3Rpb25cIj09PXR5cGVvZiBnLmNvbXBvbmVudERpZFVwZGF0ZSYmKGIuZWZmZWN0VGFnfD00KSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZy5nZXRTbmFwc2hvdEJlZm9yZVVwZGF0ZSYmKGIuZWZmZWN0VGFnfD0yNTYpKTooXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuY29tcG9uZW50RGlkVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZrPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTQpLFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBnLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlfHxoPT09YS5tZW1vaXplZFByb3BzJiZrPT09YS5tZW1vaXplZFN0YXRlfHwoYi5lZmZlY3RUYWd8PTI1NiksYi5tZW1vaXplZFByb3BzPVxuZCxiLm1lbW9pemVkU3RhdGU9eSksZy5wcm9wcz1kLGcuc3RhdGU9eSxnLmNvbnRleHQ9bCxkPW0pOihcImZ1bmN0aW9uXCIhPT10eXBlb2YgZy5jb21wb25lbnREaWRVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJms9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9NCksXCJmdW5jdGlvblwiIT09dHlwZW9mIGcuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fGg9PT1hLm1lbW9pemVkUHJvcHMmJms9PT1hLm1lbW9pemVkU3RhdGV8fChiLmVmZmVjdFRhZ3w9MjU2KSxkPSExKTtyZXR1cm4gdmkoYSxiLGMsZCxmLGUpfVxuZnVuY3Rpb24gdmkoYSxiLGMsZCxlLGYpe3RpKGEsYik7dmFyIGc9MCE9PShiLmVmZmVjdFRhZyY2NCk7aWYoIWQmJiFnKXJldHVybiBlJiZLZihiLGMsITEpLG9pKGEsYixmKTtkPWIuc3RhdGVOb2RlO21pLmN1cnJlbnQ9Yjt2YXIgaD1nJiZcImZ1bmN0aW9uXCIhPT10eXBlb2YgYy5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3I/bnVsbDpkLnJlbmRlcigpO2IuZWZmZWN0VGFnfD0xO251bGwhPT1hJiZnPyhiLmNoaWxkPWZoKGIsYS5jaGlsZCxudWxsLGYpLGIuY2hpbGQ9ZmgoYixudWxsLGgsZikpOlIoYSxiLGgsZik7Yi5tZW1vaXplZFN0YXRlPWQuc3RhdGU7ZSYmS2YoYixjLCEwKTtyZXR1cm4gYi5jaGlsZH1mdW5jdGlvbiB3aShhKXt2YXIgYj1hLnN0YXRlTm9kZTtiLnBlbmRpbmdDb250ZXh0P0hmKGEsYi5wZW5kaW5nQ29udGV4dCxiLnBlbmRpbmdDb250ZXh0IT09Yi5jb250ZXh0KTpiLmNvbnRleHQmJkhmKGEsYi5jb250ZXh0LCExKTttaChhLGIuY29udGFpbmVySW5mbyl9XG52YXIgeGk9e2RlaHlkcmF0ZWQ6bnVsbCxyZXRyeVRpbWU6MH07XG5mdW5jdGlvbiB5aShhLGIsYyl7dmFyIGQ9Yi5tb2RlLGU9Yi5wZW5kaW5nUHJvcHMsZj1NLmN1cnJlbnQsZz0hMSxoOyhoPTAhPT0oYi5lZmZlY3RUYWcmNjQpKXx8KGg9MCE9PShmJjIpJiYobnVsbD09PWF8fG51bGwhPT1hLm1lbW9pemVkU3RhdGUpKTtoPyhnPSEwLGIuZWZmZWN0VGFnJj0tNjUpOm51bGwhPT1hJiZudWxsPT09YS5tZW1vaXplZFN0YXRlfHx2b2lkIDA9PT1lLmZhbGxiYWNrfHwhMD09PWUudW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2t8fChmfD0xKTtJKE0sZiYxLGIpO2lmKG51bGw9PT1hKXt2b2lkIDAhPT1lLmZhbGxiYWNrJiZpaShiKTtpZihnKXtnPWUuZmFsbGJhY2s7ZT1laChudWxsLGQsMCxudWxsKTtlLnJldHVybj1iO2lmKDA9PT0oYi5tb2RlJjIpKWZvcihhPW51bGwhPT1iLm1lbW9pemVkU3RhdGU/Yi5jaGlsZC5jaGlsZDpiLmNoaWxkLGUuY2hpbGQ9YTtudWxsIT09YTspYS5yZXR1cm49ZSxhPWEuc2libGluZztjPWVoKGcsZCxjLG51bGwpO2MucmV0dXJuPVxuYjtlLnNpYmxpbmc9YztiLm1lbW9pemVkU3RhdGU9eGk7Yi5jaGlsZD1lO3JldHVybiBjfWQ9ZS5jaGlsZHJlbjtiLm1lbW9pemVkU3RhdGU9bnVsbDtyZXR1cm4gYi5jaGlsZD1naChiLG51bGwsZCxjKX1pZihudWxsIT09YS5tZW1vaXplZFN0YXRlKXthPWEuY2hpbGQ7ZD1hLnNpYmxpbmc7aWYoZyl7ZT1lLmZhbGxiYWNrO2M9YWgoYSxhLnBlbmRpbmdQcm9wcywwKTtjLnJldHVybj1iO2lmKDA9PT0oYi5tb2RlJjIpJiYoZz1udWxsIT09Yi5tZW1vaXplZFN0YXRlP2IuY2hpbGQuY2hpbGQ6Yi5jaGlsZCxnIT09YS5jaGlsZCkpZm9yKGMuY2hpbGQ9ZztudWxsIT09ZzspZy5yZXR1cm49YyxnPWcuc2libGluZztkPWFoKGQsZSxkLmV4cGlyYXRpb25UaW1lKTtkLnJldHVybj1iO2Muc2libGluZz1kO2MuY2hpbGRFeHBpcmF0aW9uVGltZT0wO2IubWVtb2l6ZWRTdGF0ZT14aTtiLmNoaWxkPWM7cmV0dXJuIGR9Yz1maChiLGEuY2hpbGQsZS5jaGlsZHJlbixjKTtiLm1lbW9pemVkU3RhdGU9XG5udWxsO3JldHVybiBiLmNoaWxkPWN9YT1hLmNoaWxkO2lmKGcpe2c9ZS5mYWxsYmFjaztlPWVoKG51bGwsZCwwLG51bGwpO2UucmV0dXJuPWI7ZS5jaGlsZD1hO251bGwhPT1hJiYoYS5yZXR1cm49ZSk7aWYoMD09PShiLm1vZGUmMikpZm9yKGE9bnVsbCE9PWIubWVtb2l6ZWRTdGF0ZT9iLmNoaWxkLmNoaWxkOmIuY2hpbGQsZS5jaGlsZD1hO251bGwhPT1hOylhLnJldHVybj1lLGE9YS5zaWJsaW5nO2M9ZWgoZyxkLGMsbnVsbCk7Yy5yZXR1cm49YjtlLnNpYmxpbmc9YztjLmVmZmVjdFRhZ3w9MjtlLmNoaWxkRXhwaXJhdGlvblRpbWU9MDtiLm1lbW9pemVkU3RhdGU9eGk7Yi5jaGlsZD1lO3JldHVybiBjfWIubWVtb2l6ZWRTdGF0ZT1udWxsO3JldHVybiBiLmNoaWxkPWZoKGIsYSxlLmNoaWxkcmVuLGMpfVxuZnVuY3Rpb24gemkoYSxiKXthLmV4cGlyYXRpb25UaW1lPGImJihhLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiZjLmV4cGlyYXRpb25UaW1lPGImJihjLmV4cGlyYXRpb25UaW1lPWIpO3VnKGEucmV0dXJuLGIpfWZ1bmN0aW9uIEFpKGEsYixjLGQsZSxmKXt2YXIgZz1hLm1lbW9pemVkU3RhdGU7bnVsbD09PWc/YS5tZW1vaXplZFN0YXRlPXtpc0JhY2t3YXJkczpiLHJlbmRlcmluZzpudWxsLGxhc3Q6ZCx0YWlsOmMsdGFpbEV4cGlyYXRpb246MCx0YWlsTW9kZTplLGxhc3RFZmZlY3Q6Zn06KGcuaXNCYWNrd2FyZHM9YixnLnJlbmRlcmluZz1udWxsLGcubGFzdD1kLGcudGFpbD1jLGcudGFpbEV4cGlyYXRpb249MCxnLnRhaWxNb2RlPWUsZy5sYXN0RWZmZWN0PWYpfVxuZnVuY3Rpb24gQmkoYSxiLGMpe3ZhciBkPWIucGVuZGluZ1Byb3BzLGU9ZC5yZXZlYWxPcmRlcixmPWQudGFpbDtSKGEsYixkLmNoaWxkcmVuLGMpO2Q9TS5jdXJyZW50O2lmKDAhPT0oZCYyKSlkPWQmMXwyLGIuZWZmZWN0VGFnfD02NDtlbHNle2lmKG51bGwhPT1hJiYwIT09KGEuZWZmZWN0VGFnJjY0KSlhOmZvcihhPWIuY2hpbGQ7bnVsbCE9PWE7KXtpZigxMz09PWEudGFnKW51bGwhPT1hLm1lbW9pemVkU3RhdGUmJnppKGEsYyk7ZWxzZSBpZigxOT09PWEudGFnKXppKGEsYyk7ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49YTthPWEuY2hpbGQ7Y29udGludWV9aWYoYT09PWIpYnJlYWsgYTtmb3IoO251bGw9PT1hLnNpYmxpbmc7KXtpZihudWxsPT09YS5yZXR1cm58fGEucmV0dXJuPT09YilicmVhayBhO2E9YS5yZXR1cm59YS5zaWJsaW5nLnJldHVybj1hLnJldHVybjthPWEuc2libGluZ31kJj0xfUkoTSxkLGIpO2lmKDA9PT0oYi5tb2RlJjIpKWIubWVtb2l6ZWRTdGF0ZT1cbm51bGw7ZWxzZSBzd2l0Y2goZSl7Y2FzZSBcImZvcndhcmRzXCI6Yz1iLmNoaWxkO2ZvcihlPW51bGw7bnVsbCE9PWM7KWE9Yy5hbHRlcm5hdGUsbnVsbCE9PWEmJm51bGw9PT1xaChhKSYmKGU9YyksYz1jLnNpYmxpbmc7Yz1lO251bGw9PT1jPyhlPWIuY2hpbGQsYi5jaGlsZD1udWxsKTooZT1jLnNpYmxpbmcsYy5zaWJsaW5nPW51bGwpO0FpKGIsITEsZSxjLGYsYi5sYXN0RWZmZWN0KTticmVhaztjYXNlIFwiYmFja3dhcmRzXCI6Yz1udWxsO2U9Yi5jaGlsZDtmb3IoYi5jaGlsZD1udWxsO251bGwhPT1lOyl7YT1lLmFsdGVybmF0ZTtpZihudWxsIT09YSYmbnVsbD09PXFoKGEpKXtiLmNoaWxkPWU7YnJlYWt9YT1lLnNpYmxpbmc7ZS5zaWJsaW5nPWM7Yz1lO2U9YX1BaShiLCEwLGMsbnVsbCxmLGIubGFzdEVmZmVjdCk7YnJlYWs7Y2FzZSBcInRvZ2V0aGVyXCI6QWkoYiwhMSxudWxsLG51bGwsdm9pZCAwLGIubGFzdEVmZmVjdCk7YnJlYWs7ZGVmYXVsdDpiLm1lbW9pemVkU3RhdGU9bnVsbH1yZXR1cm4gYi5jaGlsZH1cbmZ1bmN0aW9uIG9pKGEsYixjKXtudWxsIT09YSYmKGIuZGVwZW5kZW5jaWVzPWEuZGVwZW5kZW5jaWVzKTt2YXIgZD1iLmV4cGlyYXRpb25UaW1lOzAhPT1kJiZKZyhkKTtpZihiLmNoaWxkRXhwaXJhdGlvblRpbWU8YylyZXR1cm4gbnVsbDtpZihudWxsIT09YSYmYi5jaGlsZCE9PWEuY2hpbGQpdGhyb3cgRXJyb3IodSgxNTMpKTtpZihudWxsIT09Yi5jaGlsZCl7YT1iLmNoaWxkO2M9YWgoYSxhLnBlbmRpbmdQcm9wcyxhLmV4cGlyYXRpb25UaW1lKTtiLmNoaWxkPWM7Zm9yKGMucmV0dXJuPWI7bnVsbCE9PWEuc2libGluZzspYT1hLnNpYmxpbmcsYz1jLnNpYmxpbmc9YWgoYSxhLnBlbmRpbmdQcm9wcyxhLmV4cGlyYXRpb25UaW1lKSxjLnJldHVybj1iO2Muc2libGluZz1udWxsfXJldHVybiBiLmNoaWxkfWZ1bmN0aW9uIENpKGEpe2EuZWZmZWN0VGFnfD00fXZhciBIaSxJaSxKaSxLaTtcbkhpPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPWIuY2hpbGQ7bnVsbCE9PWM7KXtpZig1PT09Yy50YWd8fDY9PT1jLnRhZylhLmFwcGVuZENoaWxkKGMuc3RhdGVOb2RlKTtlbHNlIGlmKDQhPT1jLnRhZyYmbnVsbCE9PWMuY2hpbGQpe2MuY2hpbGQucmV0dXJuPWM7Yz1jLmNoaWxkO2NvbnRpbnVlfWlmKGM9PT1iKWJyZWFrO2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8Yy5yZXR1cm49PT1iKXJldHVybjtjPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Yz1jLnNpYmxpbmd9fTtJaT1mdW5jdGlvbigpe307XG5KaT1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWEubWVtb2l6ZWRQcm9wcztpZihmIT09ZCl7dmFyIGc9Yi5zdGF0ZU5vZGU7bGgoaWguY3VycmVudCk7YT1udWxsO3N3aXRjaChjKXtjYXNlIFwiaW5wdXRcIjpmPUFiKGcsZik7ZD1BYihnLGQpO2E9W107YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmY9SWIoZyxmKTtkPUliKGcsZCk7YT1bXTticmVhaztjYXNlIFwic2VsZWN0XCI6Zj1uKHt9LGYse3ZhbHVlOnZvaWQgMH0pO2Q9bih7fSxkLHt2YWx1ZTp2b2lkIDB9KTthPVtdO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOmY9S2IoZyxmKTtkPUtiKGcsZCk7YT1bXTticmVhaztkZWZhdWx0OlwiZnVuY3Rpb25cIiE9PXR5cGVvZiBmLm9uQ2xpY2smJlwiZnVuY3Rpb25cIj09PXR5cGVvZiBkLm9uQ2xpY2smJihnLm9uY2xpY2s9YWUpfVlkKGMsZCk7dmFyIGgsaztjPW51bGw7Zm9yKGggaW4gZilpZighZC5oYXNPd25Qcm9wZXJ0eShoKSYmZi5oYXNPd25Qcm9wZXJ0eShoKSYmbnVsbCE9ZltoXSlpZihcInN0eWxlXCI9PT1cbmgpZm9yKGsgaW4gZz1mW2hdLGcpZy5oYXNPd25Qcm9wZXJ0eShrKSYmKGN8fChjPXt9KSxjW2tdPVwiXCIpO2Vsc2VcImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MXCIhPT1oJiZcImNoaWxkcmVuXCIhPT1oJiZcInN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ1wiIT09aCYmXCJzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmdcIiE9PWgmJlwiYXV0b0ZvY3VzXCIhPT1oJiYoaWEuaGFzT3duUHJvcGVydHkoaCk/YXx8KGE9W10pOihhPWF8fFtdKS5wdXNoKGgsbnVsbCkpO2ZvcihoIGluIGQpe3ZhciBsPWRbaF07Zz1udWxsIT1mP2ZbaF06dm9pZCAwO2lmKGQuaGFzT3duUHJvcGVydHkoaCkmJmwhPT1nJiYobnVsbCE9bHx8bnVsbCE9ZykpaWYoXCJzdHlsZVwiPT09aClpZihnKXtmb3IoayBpbiBnKSFnLmhhc093blByb3BlcnR5KGspfHxsJiZsLmhhc093blByb3BlcnR5KGspfHwoY3x8KGM9e30pLGNba109XCJcIik7Zm9yKGsgaW4gbClsLmhhc093blByb3BlcnR5KGspJiZnW2tdIT09bFtrXSYmKGN8fChjPXt9KSxcbmNba109bFtrXSl9ZWxzZSBjfHwoYXx8KGE9W10pLGEucHVzaChoLGMpKSxjPWw7ZWxzZVwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWg/KGw9bD9sLl9faHRtbDp2b2lkIDAsZz1nP2cuX19odG1sOnZvaWQgMCxudWxsIT1sJiZnIT09bCYmKGE9YXx8W10pLnB1c2goaCxcIlwiK2wpKTpcImNoaWxkcmVuXCI9PT1oP2c9PT1sfHxcInN0cmluZ1wiIT09dHlwZW9mIGwmJlwibnVtYmVyXCIhPT10eXBlb2YgbHx8KGE9YXx8W10pLnB1c2goaCxcIlwiK2wpOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1oJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09aCYmKGlhLmhhc093blByb3BlcnR5KGgpPyhudWxsIT1sJiYkZChlLGgpLGF8fGc9PT1sfHwoYT1bXSkpOihhPWF8fFtdKS5wdXNoKGgsbCkpfWMmJihhPWF8fFtdKS5wdXNoKFwic3R5bGVcIixjKTtlPWE7KGIudXBkYXRlUXVldWU9ZSkmJkNpKGIpfX07S2k9ZnVuY3Rpb24oYSxiLGMsZCl7YyE9PWQmJkNpKGIpfTtcbmZ1bmN0aW9uIExpKGEsYil7c3dpdGNoKGEudGFpbE1vZGUpe2Nhc2UgXCJoaWRkZW5cIjpiPWEudGFpbDtmb3IodmFyIGM9bnVsbDtudWxsIT09YjspbnVsbCE9PWIuYWx0ZXJuYXRlJiYoYz1iKSxiPWIuc2libGluZztudWxsPT09Yz9hLnRhaWw9bnVsbDpjLnNpYmxpbmc9bnVsbDticmVhaztjYXNlIFwiY29sbGFwc2VkXCI6Yz1hLnRhaWw7Zm9yKHZhciBkPW51bGw7bnVsbCE9PWM7KW51bGwhPT1jLmFsdGVybmF0ZSYmKGQ9YyksYz1jLnNpYmxpbmc7bnVsbD09PWQ/Ynx8bnVsbD09PWEudGFpbD9hLnRhaWw9bnVsbDphLnRhaWwuc2libGluZz1udWxsOmQuc2libGluZz1udWxsfX1cbmZ1bmN0aW9uIE1pKGEpe3N3aXRjaChhLnRhZyl7Y2FzZSAxOkwoYS50eXBlKSYmRmYoYSk7dmFyIGI9YS5lZmZlY3RUYWc7cmV0dXJuIGImNDA5Nj8oYS5lZmZlY3RUYWc9YiYtNDA5N3w2NCxhKTpudWxsO2Nhc2UgMzpuaChhKTtHZihhKTtiPWEuZWZmZWN0VGFnO2lmKDAhPT0oYiY2NCkpdGhyb3cgRXJyb3IodSgyODUpKTthLmVmZmVjdFRhZz1iJi00MDk3fDY0O3JldHVybiBhO2Nhc2UgNTpyZXR1cm4gcGgoYSksbnVsbDtjYXNlIDEzOnJldHVybiBHKE0sYSksYj1hLmVmZmVjdFRhZyxiJjQwOTY/KGEuZWZmZWN0VGFnPWImLTQwOTd8NjQsYSk6bnVsbDtjYXNlIDE5OnJldHVybiBHKE0sYSksbnVsbDtjYXNlIDQ6cmV0dXJuIG5oKGEpLG51bGw7Y2FzZSAxMDpyZXR1cm4gdGcoYSksbnVsbDtkZWZhdWx0OnJldHVybiBudWxsfX1mdW5jdGlvbiBOaShhLGIpe3JldHVybnt2YWx1ZTphLHNvdXJjZTpiLHN0YWNrOlhhKGIpfX1cbnZhciBPaT1cImZ1bmN0aW9uXCI9PT10eXBlb2YgV2Vha1NldD9XZWFrU2V0OlNldDtmdW5jdGlvbiBQaShhLGIpe3ZhciBjPWIuc291cmNlLGQ9Yi5zdGFjaztudWxsPT09ZCYmbnVsbCE9PWMmJihkPVhhKGMpKTtudWxsIT09YyYmV2EoYy50eXBlKTtiPWIudmFsdWU7bnVsbCE9PWEmJjE9PT1hLnRhZyYmV2EoYS50eXBlKTt0cnl7Y29uc29sZS5lcnJvcihiKX1jYXRjaChlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dGhyb3cgZTt9KX19ZnVuY3Rpb24gUWkoYSxiKXt0cnl7Yi5wcm9wcz1hLm1lbW9pemVkUHJvcHMsYi5zdGF0ZT1hLm1lbW9pemVkU3RhdGUsYi5jb21wb25lbnRXaWxsVW5tb3VudCgpfWNhdGNoKGMpe1JpKGEsYyl9fWZ1bmN0aW9uIFNpKGEpe3ZhciBiPWEucmVmO2lmKG51bGwhPT1iKWlmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBiKXRyeXtiKG51bGwpfWNhdGNoKGMpe1JpKGEsYyl9ZWxzZSBiLmN1cnJlbnQ9bnVsbH1cbmZ1bmN0aW9uIFRpKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlVpKDIsMCxiKTticmVhaztjYXNlIDE6aWYoYi5lZmZlY3RUYWcmMjU2JiZudWxsIT09YSl7dmFyIGM9YS5tZW1vaXplZFByb3BzLGQ9YS5tZW1vaXplZFN0YXRlO2E9Yi5zdGF0ZU5vZGU7Yj1hLmdldFNuYXBzaG90QmVmb3JlVXBkYXRlKGIuZWxlbWVudFR5cGU9PT1iLnR5cGU/YzptZyhiLnR5cGUsYyksZCk7YS5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZT1ifWJyZWFrO2Nhc2UgMzpjYXNlIDU6Y2FzZSA2OmNhc2UgNDpjYXNlIDE3OmJyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IodSgxNjMpKTt9fVxuZnVuY3Rpb24gVWkoYSxiLGMpe2M9Yy51cGRhdGVRdWV1ZTtjPW51bGwhPT1jP2MubGFzdEVmZmVjdDpudWxsO2lmKG51bGwhPT1jKXt2YXIgZD1jPWMubmV4dDtkb3tpZigwIT09KGQudGFnJmEpKXt2YXIgZT1kLmRlc3Ryb3k7ZC5kZXN0cm95PXZvaWQgMDt2b2lkIDAhPT1lJiZlKCl9MCE9PShkLnRhZyZiKSYmKGU9ZC5jcmVhdGUsZC5kZXN0cm95PWUoKSk7ZD1kLm5leHR9d2hpbGUoZCE9PWMpfX1cbmZ1bmN0aW9uIFZpKGEsYixjKXtcImZ1bmN0aW9uXCI9PT10eXBlb2YgV2kmJldpKGIpO3N3aXRjaChiLnRhZyl7Y2FzZSAwOmNhc2UgMTE6Y2FzZSAxNDpjYXNlIDE1OmE9Yi51cGRhdGVRdWV1ZTtpZihudWxsIT09YSYmKGE9YS5sYXN0RWZmZWN0LG51bGwhPT1hKSl7dmFyIGQ9YS5uZXh0O2ZnKDk3PGM/OTc6YyxmdW5jdGlvbigpe3ZhciBhPWQ7ZG97dmFyIGM9YS5kZXN0cm95O2lmKHZvaWQgMCE9PWMpe3ZhciBnPWI7dHJ5e2MoKX1jYXRjaChoKXtSaShnLGgpfX1hPWEubmV4dH13aGlsZShhIT09ZCl9KX1icmVhaztjYXNlIDE6U2koYik7Yz1iLnN0YXRlTm9kZTtcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy5jb21wb25lbnRXaWxsVW5tb3VudCYmUWkoYixjKTticmVhaztjYXNlIDU6U2koYik7YnJlYWs7Y2FzZSA0OlhpKGEsYixjKX19XG5mdW5jdGlvbiBZaShhKXt2YXIgYj1hLmFsdGVybmF0ZTthLnJldHVybj1udWxsO2EuY2hpbGQ9bnVsbDthLm1lbW9pemVkU3RhdGU9bnVsbDthLnVwZGF0ZVF1ZXVlPW51bGw7YS5kZXBlbmRlbmNpZXM9bnVsbDthLmFsdGVybmF0ZT1udWxsO2EuZmlyc3RFZmZlY3Q9bnVsbDthLmxhc3RFZmZlY3Q9bnVsbDthLnBlbmRpbmdQcm9wcz1udWxsO2EubWVtb2l6ZWRQcm9wcz1udWxsO251bGwhPT1iJiZZaShiKX1mdW5jdGlvbiBaaShhKXtyZXR1cm4gNT09PWEudGFnfHwzPT09YS50YWd8fDQ9PT1hLnRhZ31cbmZ1bmN0aW9uICRpKGEpe2E6e2Zvcih2YXIgYj1hLnJldHVybjtudWxsIT09Yjspe2lmKFppKGIpKXt2YXIgYz1iO2JyZWFrIGF9Yj1iLnJldHVybn10aHJvdyBFcnJvcih1KDE2MCkpO31iPWMuc3RhdGVOb2RlO3N3aXRjaChjLnRhZyl7Y2FzZSA1OnZhciBkPSExO2JyZWFrO2Nhc2UgMzpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2Nhc2UgNDpiPWIuY29udGFpbmVySW5mbztkPSEwO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IodSgxNjEpKTt9Yy5lZmZlY3RUYWcmMTYmJihUYihiLFwiXCIpLGMuZWZmZWN0VGFnJj0tMTcpO2E6Yjpmb3IoYz1hOzspe2Zvcig7bnVsbD09PWMuc2libGluZzspe2lmKG51bGw9PT1jLnJldHVybnx8WmkoYy5yZXR1cm4pKXtjPW51bGw7YnJlYWsgYX1jPWMucmV0dXJufWMuc2libGluZy5yZXR1cm49Yy5yZXR1cm47Zm9yKGM9Yy5zaWJsaW5nOzUhPT1jLnRhZyYmNiE9PWMudGFnJiYxOCE9PWMudGFnOyl7aWYoYy5lZmZlY3RUYWcmMiljb250aW51ZSBiO1xuaWYobnVsbD09PWMuY2hpbGR8fDQ9PT1jLnRhZyljb250aW51ZSBiO2Vsc2UgYy5jaGlsZC5yZXR1cm49YyxjPWMuY2hpbGR9aWYoIShjLmVmZmVjdFRhZyYyKSl7Yz1jLnN0YXRlTm9kZTticmVhayBhfX1mb3IodmFyIGU9YTs7KXt2YXIgZj01PT09ZS50YWd8fDY9PT1lLnRhZztpZihmKXt2YXIgZz1mP2Uuc3RhdGVOb2RlOmUuc3RhdGVOb2RlLmluc3RhbmNlO2lmKGMpaWYoZCl7Zj1iO3ZhciBoPWc7Zz1jOzg9PT1mLm5vZGVUeXBlP2YucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaCxnKTpmLmluc2VydEJlZm9yZShoLGcpfWVsc2UgYi5pbnNlcnRCZWZvcmUoZyxjKTtlbHNlIGQ/KGg9Yiw4PT09aC5ub2RlVHlwZT8oZj1oLnBhcmVudE5vZGUsZi5pbnNlcnRCZWZvcmUoZyxoKSk6KGY9aCxmLmFwcGVuZENoaWxkKGcpKSxoPWguX3JlYWN0Um9vdENvbnRhaW5lcixudWxsIT09aCYmdm9pZCAwIT09aHx8bnVsbCE9PWYub25jbGlja3x8KGYub25jbGljaz1hZSkpOmIuYXBwZW5kQ2hpbGQoZyl9ZWxzZSBpZig0IT09XG5lLnRhZyYmbnVsbCE9PWUuY2hpbGQpe2UuY2hpbGQucmV0dXJuPWU7ZT1lLmNoaWxkO2NvbnRpbnVlfWlmKGU9PT1hKWJyZWFrO2Zvcig7bnVsbD09PWUuc2libGluZzspe2lmKG51bGw9PT1lLnJldHVybnx8ZS5yZXR1cm49PT1hKXJldHVybjtlPWUucmV0dXJufWUuc2libGluZy5yZXR1cm49ZS5yZXR1cm47ZT1lLnNpYmxpbmd9fVxuZnVuY3Rpb24gWGkoYSxiLGMpe2Zvcih2YXIgZD1iLGU9ITEsZixnOzspe2lmKCFlKXtlPWQucmV0dXJuO2E6Zm9yKDs7KXtpZihudWxsPT09ZSl0aHJvdyBFcnJvcih1KDE2MCkpO2Y9ZS5zdGF0ZU5vZGU7c3dpdGNoKGUudGFnKXtjYXNlIDU6Zz0hMTticmVhayBhO2Nhc2UgMzpmPWYuY29udGFpbmVySW5mbztnPSEwO2JyZWFrIGE7Y2FzZSA0OmY9Zi5jb250YWluZXJJbmZvO2c9ITA7YnJlYWsgYX1lPWUucmV0dXJufWU9ITB9aWYoNT09PWQudGFnfHw2PT09ZC50YWcpe2E6Zm9yKHZhciBoPWEsaz1kLGw9YyxtPWs7OylpZihWaShoLG0sbCksbnVsbCE9PW0uY2hpbGQmJjQhPT1tLnRhZyltLmNoaWxkLnJldHVybj1tLG09bS5jaGlsZDtlbHNle2lmKG09PT1rKWJyZWFrO2Zvcig7bnVsbD09PW0uc2libGluZzspe2lmKG51bGw9PT1tLnJldHVybnx8bS5yZXR1cm49PT1rKWJyZWFrIGE7bT1tLnJldHVybn1tLnNpYmxpbmcucmV0dXJuPW0ucmV0dXJuO209bS5zaWJsaW5nfWc/KGg9XG5mLGs9ZC5zdGF0ZU5vZGUsOD09PWgubm9kZVR5cGU/aC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGspOmgucmVtb3ZlQ2hpbGQoaykpOmYucmVtb3ZlQ2hpbGQoZC5zdGF0ZU5vZGUpfWVsc2UgaWYoND09PWQudGFnKXtpZihudWxsIT09ZC5jaGlsZCl7Zj1kLnN0YXRlTm9kZS5jb250YWluZXJJbmZvO2c9ITA7ZC5jaGlsZC5yZXR1cm49ZDtkPWQuY2hpbGQ7Y29udGludWV9fWVsc2UgaWYoVmkoYSxkLGMpLG51bGwhPT1kLmNoaWxkKXtkLmNoaWxkLnJldHVybj1kO2Q9ZC5jaGlsZDtjb250aW51ZX1pZihkPT09YilicmVhaztmb3IoO251bGw9PT1kLnNpYmxpbmc7KXtpZihudWxsPT09ZC5yZXR1cm58fGQucmV0dXJuPT09YilyZXR1cm47ZD1kLnJldHVybjs0PT09ZC50YWcmJihlPSExKX1kLnNpYmxpbmcucmV0dXJuPWQucmV0dXJuO2Q9ZC5zaWJsaW5nfX1cbmZ1bmN0aW9uIGFqKGEsYil7c3dpdGNoKGIudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE0OmNhc2UgMTU6VWkoNCw4LGIpO2JyZWFrO2Nhc2UgMTpicmVhaztjYXNlIDU6dmFyIGM9Yi5zdGF0ZU5vZGU7aWYobnVsbCE9Yyl7dmFyIGQ9Yi5tZW1vaXplZFByb3BzLGU9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOmQ7YT1iLnR5cGU7dmFyIGY9Yi51cGRhdGVRdWV1ZTtiLnVwZGF0ZVF1ZXVlPW51bGw7aWYobnVsbCE9PWYpe2NbdmVdPWQ7XCJpbnB1dFwiPT09YSYmXCJyYWRpb1wiPT09ZC50eXBlJiZudWxsIT1kLm5hbWUmJkNiKGMsZCk7WmQoYSxlKTtiPVpkKGEsZCk7Zm9yKGU9MDtlPGYubGVuZ3RoO2UrPTIpe3ZhciBnPWZbZV0saD1mW2UrMV07XCJzdHlsZVwiPT09Zz9XZChjLGgpOlwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUxcIj09PWc/U2IoYyxoKTpcImNoaWxkcmVuXCI9PT1nP1RiKGMsaCk6dmIoYyxnLGgsYil9c3dpdGNoKGEpe2Nhc2UgXCJpbnB1dFwiOkViKGMsZCk7YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6TWIoYyxcbmQpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpiPWMuX3dyYXBwZXJTdGF0ZS53YXNNdWx0aXBsZSxjLl93cmFwcGVyU3RhdGUud2FzTXVsdGlwbGU9ISFkLm11bHRpcGxlLGE9ZC52YWx1ZSxudWxsIT1hP0piKGMsISFkLm11bHRpcGxlLGEsITEpOmIhPT0hIWQubXVsdGlwbGUmJihudWxsIT1kLmRlZmF1bHRWYWx1ZT9KYihjLCEhZC5tdWx0aXBsZSxkLmRlZmF1bHRWYWx1ZSwhMCk6SmIoYywhIWQubXVsdGlwbGUsZC5tdWx0aXBsZT9bXTpcIlwiLCExKSl9fX1icmVhaztjYXNlIDY6aWYobnVsbD09PWIuc3RhdGVOb2RlKXRocm93IEVycm9yKHUoMTYyKSk7Yi5zdGF0ZU5vZGUubm9kZVZhbHVlPWIubWVtb2l6ZWRQcm9wczticmVhaztjYXNlIDM6Yj1iLnN0YXRlTm9kZTtiLmh5ZHJhdGUmJihiLmh5ZHJhdGU9ITEsTGMoYi5jb250YWluZXJJbmZvKSk7YnJlYWs7Y2FzZSAxMjpicmVhaztjYXNlIDEzOmM9YjtudWxsPT09Yi5tZW1vaXplZFN0YXRlP2Q9ITE6KGQ9ITAsYz1iLmNoaWxkLGJqPWNnKCkpO1xuaWYobnVsbCE9PWMpYTpmb3IoYT1jOzspe2lmKDU9PT1hLnRhZylmPWEuc3RhdGVOb2RlLGQ/KGY9Zi5zdHlsZSxcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi5zZXRQcm9wZXJ0eT9mLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLFwibm9uZVwiLFwiaW1wb3J0YW50XCIpOmYuZGlzcGxheT1cIm5vbmVcIik6KGY9YS5zdGF0ZU5vZGUsZT1hLm1lbW9pemVkUHJvcHMuc3R5bGUsZT12b2lkIDAhPT1lJiZudWxsIT09ZSYmZS5oYXNPd25Qcm9wZXJ0eShcImRpc3BsYXlcIik/ZS5kaXNwbGF5Om51bGwsZi5zdHlsZS5kaXNwbGF5PVZkKFwiZGlzcGxheVwiLGUpKTtlbHNlIGlmKDY9PT1hLnRhZylhLnN0YXRlTm9kZS5ub2RlVmFsdWU9ZD9cIlwiOmEubWVtb2l6ZWRQcm9wcztlbHNlIGlmKDEzPT09YS50YWcmJm51bGwhPT1hLm1lbW9pemVkU3RhdGUmJm51bGw9PT1hLm1lbW9pemVkU3RhdGUuZGVoeWRyYXRlZCl7Zj1hLmNoaWxkLnNpYmxpbmc7Zi5yZXR1cm49YTthPWY7Y29udGludWV9ZWxzZSBpZihudWxsIT09YS5jaGlsZCl7YS5jaGlsZC5yZXR1cm49XG5hO2E9YS5jaGlsZDtjb250aW51ZX1pZihhPT09YylicmVhayBhO2Zvcig7bnVsbD09PWEuc2libGluZzspe2lmKG51bGw9PT1hLnJldHVybnx8YS5yZXR1cm49PT1jKWJyZWFrIGE7YT1hLnJldHVybn1hLnNpYmxpbmcucmV0dXJuPWEucmV0dXJuO2E9YS5zaWJsaW5nfWNqKGIpO2JyZWFrO2Nhc2UgMTk6Y2ooYik7YnJlYWs7Y2FzZSAxNzpicmVhaztjYXNlIDIwOmJyZWFrO2Nhc2UgMjE6YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcih1KDE2MykpO319ZnVuY3Rpb24gY2ooYSl7dmFyIGI9YS51cGRhdGVRdWV1ZTtpZihudWxsIT09Yil7YS51cGRhdGVRdWV1ZT1udWxsO3ZhciBjPWEuc3RhdGVOb2RlO251bGw9PT1jJiYoYz1hLnN0YXRlTm9kZT1uZXcgT2kpO2IuZm9yRWFjaChmdW5jdGlvbihiKXt2YXIgZD1kai5iaW5kKG51bGwsYSxiKTtjLmhhcyhiKXx8KGMuYWRkKGIpLGIudGhlbihkLGQpKX0pfX12YXIgZWo9XCJmdW5jdGlvblwiPT09dHlwZW9mIFdlYWtNYXA/V2Vha01hcDpNYXA7XG5mdW5jdGlvbiBmaihhLGIsYyl7Yz1CZyhjLG51bGwpO2MudGFnPTM7Yy5wYXlsb2FkPXtlbGVtZW50Om51bGx9O3ZhciBkPWIudmFsdWU7Yy5jYWxsYmFjaz1mdW5jdGlvbigpe2dqfHwoZ2o9ITAsaGo9ZCk7UGkoYSxiKX07cmV0dXJuIGN9XG5mdW5jdGlvbiBpaihhLGIsYyl7Yz1CZyhjLG51bGwpO2MudGFnPTM7dmFyIGQ9YS50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcjtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZCl7dmFyIGU9Yi52YWx1ZTtjLnBheWxvYWQ9ZnVuY3Rpb24oKXtQaShhLGIpO3JldHVybiBkKGUpfX12YXIgZj1hLnN0YXRlTm9kZTtudWxsIT09ZiYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGYuY29tcG9uZW50RGlkQ2F0Y2gmJihjLmNhbGxiYWNrPWZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiIT09dHlwZW9mIGQmJihudWxsPT09amo/amo9bmV3IFNldChbdGhpc10pOmpqLmFkZCh0aGlzKSxQaShhLGIpKTt2YXIgYz1iLnN0YWNrO3RoaXMuY29tcG9uZW50RGlkQ2F0Y2goYi52YWx1ZSx7Y29tcG9uZW50U3RhY2s6bnVsbCE9PWM/YzpcIlwifSl9KTtyZXR1cm4gY31cbnZhciBraj1NYXRoLmNlaWwsbGo9RWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixtaj1FYS5SZWFjdEN1cnJlbnRPd25lcixTPTAsbmo9OCxvaj0xNixwaj0zMixxaj0wLHJqPTEsc2o9Mix0aj0zLHVqPTQsdmo9NSxUPVMsVT1udWxsLFY9bnVsbCxXPTAsWD1xaix3aj1udWxsLHhqPTEwNzM3NDE4MjMseWo9MTA3Mzc0MTgyMyx6aj1udWxsLEFqPTAsQmo9ITEsYmo9MCxDaj01MDAsWT1udWxsLGdqPSExLGhqPW51bGwsamo9bnVsbCxEaj0hMSxFaj1udWxsLEZqPTkwLEdqPW51bGwsSGo9MCxJaj1udWxsLEpqPTA7ZnVuY3Rpb24gUGcoKXtyZXR1cm4oVCYob2p8cGopKSE9PVM/MTA3Mzc0MTgyMS0oY2coKS8xMHwwKTowIT09Smo/Smo6Smo9MTA3Mzc0MTgyMS0oY2coKS8xMHwwKX1cbmZ1bmN0aW9uIFFnKGEsYixjKXtiPWIubW9kZTtpZigwPT09KGImMikpcmV0dXJuIDEwNzM3NDE4MjM7dmFyIGQ9ZGcoKTtpZigwPT09KGImNCkpcmV0dXJuIDk5PT09ZD8xMDczNzQxODIzOjEwNzM3NDE4MjI7aWYoKFQmb2opIT09UylyZXR1cm4gVztpZihudWxsIT09YylhPWxnKGEsYy50aW1lb3V0TXN8MHx8NUUzLDI1MCk7ZWxzZSBzd2l0Y2goZCl7Y2FzZSA5OTphPTEwNzM3NDE4MjM7YnJlYWs7Y2FzZSA5ODphPWxnKGEsMTUwLDEwMCk7YnJlYWs7Y2FzZSA5NzpjYXNlIDk2OmE9bGcoYSw1RTMsMjUwKTticmVhaztjYXNlIDk1OmE9MjticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHUoMzI2KSk7fW51bGwhPT1VJiZhPT09VyYmLS1hO3JldHVybiBhfVxuZnVuY3Rpb24gUmcoYSxiKXtpZig1MDxIail0aHJvdyBIaj0wLElqPW51bGwsRXJyb3IodSgxODUpKTthPUtqKGEsYik7aWYobnVsbCE9PWEpe3ZhciBjPWRnKCk7MTA3Mzc0MTgyMz09PWI/KFQmbmopIT09UyYmKFQmKG9qfHBqKSk9PT1TP0xqKGEpOihaKGEpLFQ9PT1TJiZqZygpKTpaKGEpOyhUJjQpPT09U3x8OTghPT1jJiY5OSE9PWN8fChudWxsPT09R2o/R2o9bmV3IE1hcChbW2EsYl1dKTooYz1Hai5nZXQoYSksKHZvaWQgMD09PWN8fGM+YikmJkdqLnNldChhLGIpKSl9fVxuZnVuY3Rpb24gS2ooYSxiKXthLmV4cGlyYXRpb25UaW1lPGImJihhLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBjPWEuYWx0ZXJuYXRlO251bGwhPT1jJiZjLmV4cGlyYXRpb25UaW1lPGImJihjLmV4cGlyYXRpb25UaW1lPWIpO3ZhciBkPWEucmV0dXJuLGU9bnVsbDtpZihudWxsPT09ZCYmMz09PWEudGFnKWU9YS5zdGF0ZU5vZGU7ZWxzZSBmb3IoO251bGwhPT1kOyl7Yz1kLmFsdGVybmF0ZTtkLmNoaWxkRXhwaXJhdGlvblRpbWU8YiYmKGQuY2hpbGRFeHBpcmF0aW9uVGltZT1iKTtudWxsIT09YyYmYy5jaGlsZEV4cGlyYXRpb25UaW1lPGImJihjLmNoaWxkRXhwaXJhdGlvblRpbWU9Yik7aWYobnVsbD09PWQucmV0dXJuJiYzPT09ZC50YWcpe2U9ZC5zdGF0ZU5vZGU7YnJlYWt9ZD1kLnJldHVybn1udWxsIT09ZSYmKFU9PT1lJiYoSmcoYiksWD09PXVqJiZNaihlLFcpKSxOaihlLGIpKTtyZXR1cm4gZX1cbmZ1bmN0aW9uIE9qKGEpe3ZhciBiPWEubGFzdEV4cGlyZWRUaW1lO2lmKDAhPT1iKXJldHVybiBiO2I9YS5maXJzdFBlbmRpbmdUaW1lO2lmKCFQaihhLGIpKXJldHVybiBiO2I9YS5sYXN0UGluZ2VkVGltZTthPWEubmV4dEtub3duUGVuZGluZ0xldmVsO3JldHVybiBiPmE/YjphfVxuZnVuY3Rpb24gWihhKXtpZigwIT09YS5sYXN0RXhwaXJlZFRpbWUpYS5jYWxsYmFja0V4cGlyYXRpb25UaW1lPTEwNzM3NDE4MjMsYS5jYWxsYmFja1ByaW9yaXR5PTk5LGEuY2FsbGJhY2tOb2RlPWhnKExqLmJpbmQobnVsbCxhKSk7ZWxzZXt2YXIgYj1PaihhKSxjPWEuY2FsbGJhY2tOb2RlO2lmKDA9PT1iKW51bGwhPT1jJiYoYS5jYWxsYmFja05vZGU9bnVsbCxhLmNhbGxiYWNrRXhwaXJhdGlvblRpbWU9MCxhLmNhbGxiYWNrUHJpb3JpdHk9OTApO2Vsc2V7dmFyIGQ9UGcoKTsxMDczNzQxODIzPT09Yj9kPTk5OjE9PT1ifHwyPT09Yj9kPTk1OihkPTEwKigxMDczNzQxODIxLWIpLTEwKigxMDczNzQxODIxLWQpLGQ9MD49ZD85OToyNTA+PWQ/OTg6NTI1MD49ZD85Nzo5NSk7aWYobnVsbCE9PWMpe3ZhciBlPWEuY2FsbGJhY2tQcmlvcml0eTtpZihhLmNhbGxiYWNrRXhwaXJhdGlvblRpbWU9PT1iJiZlPj1kKXJldHVybjtjIT09WGYmJk5mKGMpfWEuY2FsbGJhY2tFeHBpcmF0aW9uVGltZT1cbmI7YS5jYWxsYmFja1ByaW9yaXR5PWQ7Yj0xMDczNzQxODIzPT09Yj9oZyhMai5iaW5kKG51bGwsYSkpOmdnKGQsUWouYmluZChudWxsLGEpLHt0aW1lb3V0OjEwKigxMDczNzQxODIxLWIpLWNnKCl9KTthLmNhbGxiYWNrTm9kZT1ifX19XG5mdW5jdGlvbiBRaihhLGIpe0pqPTA7aWYoYilyZXR1cm4gYj1QZygpLFJqKGEsYiksWihhKSxudWxsO3ZhciBjPU9qKGEpO2lmKDAhPT1jKXtiPWEuY2FsbGJhY2tOb2RlO2lmKChUJihvanxwaikpIT09Uyl0aHJvdyBFcnJvcih1KDMyNykpO1NqKCk7YT09PVUmJmM9PT1XfHxUaihhLGMpO2lmKG51bGwhPT1WKXt2YXIgZD1UO1R8PW9qO3ZhciBlPVVqKGEpO2RvIHRyeXtWaigpO2JyZWFrfWNhdGNoKGgpe1dqKGEsaCl9d2hpbGUoMSk7cmcoKTtUPWQ7bGouY3VycmVudD1lO2lmKFg9PT1yail0aHJvdyBiPXdqLFRqKGEsYyksTWooYSxjKSxaKGEpLGI7aWYobnVsbD09PVYpc3dpdGNoKGU9YS5maW5pc2hlZFdvcms9YS5jdXJyZW50LmFsdGVybmF0ZSxhLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9YyxkPVgsVT1udWxsLGQpe2Nhc2UgcWo6Y2FzZSByajp0aHJvdyBFcnJvcih1KDM0NSkpO2Nhc2Ugc2o6UmooYSwyPGM/MjpjKTticmVhaztjYXNlIHRqOk1qKGEsYyk7ZD1hLmxhc3RTdXNwZW5kZWRUaW1lO1xuYz09PWQmJihhLm5leHRLbm93blBlbmRpbmdMZXZlbD1YaihlKSk7aWYoMTA3Mzc0MTgyMz09PXhqJiYoZT1iaitDai1jZygpLDEwPGUpKXtpZihCail7dmFyIGY9YS5sYXN0UGluZ2VkVGltZTtpZigwPT09Znx8Zj49Yyl7YS5sYXN0UGluZ2VkVGltZT1jO1RqKGEsYyk7YnJlYWt9fWY9T2ooYSk7aWYoMCE9PWYmJmYhPT1jKWJyZWFrO2lmKDAhPT1kJiZkIT09Yyl7YS5sYXN0UGluZ2VkVGltZT1kO2JyZWFrfWEudGltZW91dEhhbmRsZT1wZShZai5iaW5kKG51bGwsYSksZSk7YnJlYWt9WWooYSk7YnJlYWs7Y2FzZSB1ajpNaihhLGMpO2Q9YS5sYXN0U3VzcGVuZGVkVGltZTtjPT09ZCYmKGEubmV4dEtub3duUGVuZGluZ0xldmVsPVhqKGUpKTtpZihCaiYmKGU9YS5sYXN0UGluZ2VkVGltZSwwPT09ZXx8ZT49Yykpe2EubGFzdFBpbmdlZFRpbWU9YztUaihhLGMpO2JyZWFrfWU9T2ooYSk7aWYoMCE9PWUmJmUhPT1jKWJyZWFrO2lmKDAhPT1kJiZkIT09Yyl7YS5sYXN0UGluZ2VkVGltZT1cbmQ7YnJlYWt9MTA3Mzc0MTgyMyE9PXlqP2Q9MTAqKDEwNzM3NDE4MjEteWopLWNnKCk6MTA3Mzc0MTgyMz09PXhqP2Q9MDooZD0xMCooMTA3Mzc0MTgyMS14aiktNUUzLGU9Y2coKSxjPTEwKigxMDczNzQxODIxLWMpLWUsZD1lLWQsMD5kJiYoZD0wKSxkPSgxMjA+ZD8xMjA6NDgwPmQ/NDgwOjEwODA+ZD8xMDgwOjE5MjA+ZD8xOTIwOjNFMz5kPzNFMzo0MzIwPmQ/NDMyMDoxOTYwKmtqKGQvMTk2MCkpLWQsYzxkJiYoZD1jKSk7aWYoMTA8ZCl7YS50aW1lb3V0SGFuZGxlPXBlKFlqLmJpbmQobnVsbCxhKSxkKTticmVha31ZaihhKTticmVhaztjYXNlIHZqOmlmKDEwNzM3NDE4MjMhPT14aiYmbnVsbCE9PXpqKXtmPXhqO3ZhciBnPXpqO2Q9Zy5idXN5TWluRHVyYXRpb25Nc3wwOzA+PWQ/ZD0wOihlPWcuYnVzeURlbGF5TXN8MCxmPWNnKCktKDEwKigxMDczNzQxODIxLWYpLShnLnRpbWVvdXRNc3wwfHw1RTMpKSxkPWY8PWU/MDplK2QtZik7aWYoMTA8ZCl7TWooYSxjKTthLnRpbWVvdXRIYW5kbGU9XG5wZShZai5iaW5kKG51bGwsYSksZCk7YnJlYWt9fVlqKGEpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IodSgzMjkpKTt9WihhKTtpZihhLmNhbGxiYWNrTm9kZT09PWIpcmV0dXJuIFFqLmJpbmQobnVsbCxhKX19cmV0dXJuIG51bGx9XG5mdW5jdGlvbiBMaihhKXt2YXIgYj1hLmxhc3RFeHBpcmVkVGltZTtiPTAhPT1iP2I6MTA3Mzc0MTgyMztpZihhLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9PT1iKVlqKGEpO2Vsc2V7aWYoKFQmKG9qfHBqKSkhPT1TKXRocm93IEVycm9yKHUoMzI3KSk7U2ooKTthPT09VSYmYj09PVd8fFRqKGEsYik7aWYobnVsbCE9PVYpe3ZhciBjPVQ7VHw9b2o7dmFyIGQ9VWooYSk7ZG8gdHJ5e1pqKCk7YnJlYWt9Y2F0Y2goZSl7V2ooYSxlKX13aGlsZSgxKTtyZygpO1Q9Yztsai5jdXJyZW50PWQ7aWYoWD09PXJqKXRocm93IGM9d2osVGooYSxiKSxNaihhLGIpLFooYSksYztpZihudWxsIT09Vil0aHJvdyBFcnJvcih1KDI2MSkpO2EuZmluaXNoZWRXb3JrPWEuY3VycmVudC5hbHRlcm5hdGU7YS5maW5pc2hlZEV4cGlyYXRpb25UaW1lPWI7VT1udWxsO1lqKGEpO1ooYSl9fXJldHVybiBudWxsfVxuZnVuY3Rpb24gYWsoKXtpZihudWxsIT09R2ope3ZhciBhPUdqO0dqPW51bGw7YS5mb3JFYWNoKGZ1bmN0aW9uKGEsYyl7UmooYyxhKTtaKGMpfSk7amcoKX19ZnVuY3Rpb24gYmsoYSxiKXt2YXIgYz1UO1R8PTE7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7VD1jLFQ9PT1TJiZqZygpfX1mdW5jdGlvbiBjayhhLGIpe3ZhciBjPVQ7VCY9LTI7VHw9bmo7dHJ5e3JldHVybiBhKGIpfWZpbmFsbHl7VD1jLFQ9PT1TJiZqZygpfX1cbmZ1bmN0aW9uIFRqKGEsYil7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9MDt2YXIgYz1hLnRpbWVvdXRIYW5kbGU7LTEhPT1jJiYoYS50aW1lb3V0SGFuZGxlPS0xLHFlKGMpKTtpZihudWxsIT09Vilmb3IoYz1WLnJldHVybjtudWxsIT09Yzspe3ZhciBkPWM7c3dpdGNoKGQudGFnKXtjYXNlIDE6dmFyIGU9ZC50eXBlLmNoaWxkQ29udGV4dFR5cGVzO251bGwhPT1lJiZ2b2lkIDAhPT1lJiZGZihkKTticmVhaztjYXNlIDM6bmgoZCk7R2YoZCk7YnJlYWs7Y2FzZSA1OnBoKGQpO2JyZWFrO2Nhc2UgNDpuaChkKTticmVhaztjYXNlIDEzOkcoTSxkKTticmVhaztjYXNlIDE5OkcoTSxkKTticmVhaztjYXNlIDEwOnRnKGQpfWM9Yy5yZXR1cm59VT1hO1Y9YWgoYS5jdXJyZW50LG51bGwsYik7Vz1iO1g9cWo7d2o9bnVsbDt5aj14aj0xMDczNzQxODIzO3pqPW51bGw7QWo9MDtCaj0hMX1cbmZ1bmN0aW9uIFdqKGEsYil7ZG97dHJ5e3JnKCk7TWgoKTtpZihudWxsPT09Vnx8bnVsbD09PVYucmV0dXJuKXJldHVybiBYPXJqLHdqPWIsbnVsbDthOnt2YXIgYz1hLGQ9Vi5yZXR1cm4sZT1WLGY9YjtiPVc7ZS5lZmZlY3RUYWd8PTIwNDg7ZS5maXJzdEVmZmVjdD1lLmxhc3RFZmZlY3Q9bnVsbDtpZihudWxsIT09ZiYmXCJvYmplY3RcIj09PXR5cGVvZiBmJiZcImZ1bmN0aW9uXCI9PT10eXBlb2YgZi50aGVuKXt2YXIgZz1mLGg9MCE9PShNLmN1cnJlbnQmMSksaz1kO2Rve3ZhciBsO2lmKGw9MTM9PT1rLnRhZyl7dmFyIG09ay5tZW1vaXplZFN0YXRlO2lmKG51bGwhPT1tKWw9bnVsbCE9PW0uZGVoeWRyYXRlZD8hMDohMTtlbHNle3ZhciBDPWsubWVtb2l6ZWRQcm9wcztsPXZvaWQgMD09PUMuZmFsbGJhY2s/ITE6ITAhPT1DLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrPyEwOmg/ITE6ITB9fWlmKGwpe3ZhciB5PWsudXBkYXRlUXVldWU7aWYobnVsbD09PXkpe3ZhciBIPW5ldyBTZXQ7XG5ILmFkZChnKTtrLnVwZGF0ZVF1ZXVlPUh9ZWxzZSB5LmFkZChnKTtpZigwPT09KGsubW9kZSYyKSl7ay5lZmZlY3RUYWd8PTY0O2UuZWZmZWN0VGFnJj0tMjk4MTtpZigxPT09ZS50YWcpaWYobnVsbD09PWUuYWx0ZXJuYXRlKWUudGFnPTE3O2Vsc2V7dmFyIHo9QmcoMTA3Mzc0MTgyMyxudWxsKTt6LnRhZz0yO0RnKGUseil9ZS5leHBpcmF0aW9uVGltZT0xMDczNzQxODIzO2JyZWFrIGF9Zj12b2lkIDA7ZT1iO3ZhciB0YT1jLnBpbmdDYWNoZTtudWxsPT09dGE/KHRhPWMucGluZ0NhY2hlPW5ldyBlaixmPW5ldyBTZXQsdGEuc2V0KGcsZikpOihmPXRhLmdldChnKSx2b2lkIDA9PT1mJiYoZj1uZXcgU2V0LHRhLnNldChnLGYpKSk7aWYoIWYuaGFzKGUpKXtmLmFkZChlKTt2YXIgcj1kay5iaW5kKG51bGwsYyxnLGUpO2cudGhlbihyLHIpfWsuZWZmZWN0VGFnfD00MDk2O2suZXhwaXJhdGlvblRpbWU9YjticmVhayBhfWs9ay5yZXR1cm59d2hpbGUobnVsbCE9PWspO2Y9RXJyb3IoKFdhKGUudHlwZSl8fFxuXCJBIFJlYWN0IGNvbXBvbmVudFwiKStcIiBzdXNwZW5kZWQgd2hpbGUgcmVuZGVyaW5nLCBidXQgbm8gZmFsbGJhY2sgVUkgd2FzIHNwZWNpZmllZC5cXG5cXG5BZGQgYSA8U3VzcGVuc2UgZmFsbGJhY2s9Li4uPiBjb21wb25lbnQgaGlnaGVyIGluIHRoZSB0cmVlIHRvIHByb3ZpZGUgYSBsb2FkaW5nIGluZGljYXRvciBvciBwbGFjZWhvbGRlciB0byBkaXNwbGF5LlwiK1hhKGUpKX1YIT09dmomJihYPXNqKTtmPU5pKGYsZSk7az1kO2Rve3N3aXRjaChrLnRhZyl7Y2FzZSAzOmc9ZjtrLmVmZmVjdFRhZ3w9NDA5NjtrLmV4cGlyYXRpb25UaW1lPWI7dmFyIHg9ZmooayxnLGIpO0VnKGsseCk7YnJlYWsgYTtjYXNlIDE6Zz1mO3ZhciBBPWsudHlwZSxwPWsuc3RhdGVOb2RlO2lmKDA9PT0oay5lZmZlY3RUYWcmNjQpJiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIEEuZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yfHxudWxsIT09cCYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHAuY29tcG9uZW50RGlkQ2F0Y2gmJlxuKG51bGw9PT1qanx8IWpqLmhhcyhwKSkpKXtrLmVmZmVjdFRhZ3w9NDA5NjtrLmV4cGlyYXRpb25UaW1lPWI7dmFyIHQ9aWooayxnLGIpO0VnKGssdCk7YnJlYWsgYX19az1rLnJldHVybn13aGlsZShudWxsIT09ayl9Vj1layhWKX1jYXRjaCh2KXtiPXY7Y29udGludWV9YnJlYWt9d2hpbGUoMSl9ZnVuY3Rpb24gVWooKXt2YXIgYT1sai5jdXJyZW50O2xqLmN1cnJlbnQ9TGg7cmV0dXJuIG51bGw9PT1hP0xoOmF9ZnVuY3Rpb24gSWcoYSxiKXthPHhqJiYyPGEmJih4aj1hKTtudWxsIT09YiYmYTx5aiYmMjxhJiYoeWo9YSx6aj1iKX1mdW5jdGlvbiBKZyhhKXthPkFqJiYoQWo9YSl9ZnVuY3Rpb24gWmooKXtmb3IoO251bGwhPT1WOylWPWZrKFYpfWZ1bmN0aW9uIFZqKCl7Zm9yKDtudWxsIT09ViYmIU9mKCk7KVY9ZmsoVil9XG5mdW5jdGlvbiBmayhhKXt2YXIgYj1nayhhLmFsdGVybmF0ZSxhLFcpO2EubWVtb2l6ZWRQcm9wcz1hLnBlbmRpbmdQcm9wcztudWxsPT09YiYmKGI9ZWsoYSkpO21qLmN1cnJlbnQ9bnVsbDtyZXR1cm4gYn1cbmZ1bmN0aW9uIGVrKGEpe1Y9YTtkb3t2YXIgYj1WLmFsdGVybmF0ZTthPVYucmV0dXJuO2lmKDA9PT0oVi5lZmZlY3RUYWcmMjA0OCkpe2E6e3ZhciBjPWI7Yj1WO3ZhciBkPVc7dmFyIGU9Yi5wZW5kaW5nUHJvcHM7c3dpdGNoKGIudGFnKXtjYXNlIDI6YnJlYWs7Y2FzZSAxNjpicmVhaztjYXNlIDE1OmNhc2UgMDpicmVhaztjYXNlIDE6TChiLnR5cGUpJiZGZihiKTticmVhaztjYXNlIDM6bmgoYik7R2YoYik7ZT1iLnN0YXRlTm9kZTtlLnBlbmRpbmdDb250ZXh0JiYoZS5jb250ZXh0PWUucGVuZGluZ0NvbnRleHQsZS5wZW5kaW5nQ29udGV4dD1udWxsKTsobnVsbD09PWN8fG51bGw9PT1jLmNoaWxkKSYma2koYikmJkNpKGIpO0lpKGIpO2JyZWFrO2Nhc2UgNTpwaChiKTtkPWxoKGtoLmN1cnJlbnQpO3ZhciBmPWIudHlwZTtpZihudWxsIT09YyYmbnVsbCE9Yi5zdGF0ZU5vZGUpSmkoYyxiLGYsZSxkKSxjLnJlZiE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCk7ZWxzZSBpZihlKXt2YXIgZz1cbmxoKGloLmN1cnJlbnQpO2lmKGtpKGIpKXtlPWI7dmFyIGg9ZS5zdGF0ZU5vZGU7Yz1lLnR5cGU7dmFyIGs9ZS5tZW1vaXplZFByb3BzLGw9ZDtoW3VlXT1lO2hbdmVdPWs7Zj12b2lkIDA7ZD1oO3N3aXRjaChjKXtjYXNlIFwiaWZyYW1lXCI6Y2FzZSBcIm9iamVjdFwiOmNhc2UgXCJlbWJlZFwiOkYoXCJsb2FkXCIsZCk7YnJlYWs7Y2FzZSBcInZpZGVvXCI6Y2FzZSBcImF1ZGlvXCI6Zm9yKGg9MDtoPGNjLmxlbmd0aDtoKyspRihjY1toXSxkKTticmVhaztjYXNlIFwic291cmNlXCI6RihcImVycm9yXCIsZCk7YnJlYWs7Y2FzZSBcImltZ1wiOmNhc2UgXCJpbWFnZVwiOmNhc2UgXCJsaW5rXCI6RihcImVycm9yXCIsZCk7RihcImxvYWRcIixkKTticmVhaztjYXNlIFwiZm9ybVwiOkYoXCJyZXNldFwiLGQpO0YoXCJzdWJtaXRcIixkKTticmVhaztjYXNlIFwiZGV0YWlsc1wiOkYoXCJ0b2dnbGVcIixkKTticmVhaztjYXNlIFwiaW5wdXRcIjpCYihkLGspO0YoXCJpbnZhbGlkXCIsZCk7JGQobCxcIm9uQ2hhbmdlXCIpO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpkLl93cmFwcGVyU3RhdGU9XG57d2FzTXVsdGlwbGU6ISFrLm11bHRpcGxlfTtGKFwiaW52YWxpZFwiLGQpOyRkKGwsXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpMYihkLGspLEYoXCJpbnZhbGlkXCIsZCksJGQobCxcIm9uQ2hhbmdlXCIpfVlkKGMsayk7aD1udWxsO2ZvcihmIGluIGspay5oYXNPd25Qcm9wZXJ0eShmKSYmKGc9a1tmXSxcImNoaWxkcmVuXCI9PT1mP1wic3RyaW5nXCI9PT10eXBlb2YgZz9kLnRleHRDb250ZW50IT09ZyYmKGg9W1wiY2hpbGRyZW5cIixnXSk6XCJudW1iZXJcIj09PXR5cGVvZiBnJiZkLnRleHRDb250ZW50IT09XCJcIitnJiYoaD1bXCJjaGlsZHJlblwiLFwiXCIrZ10pOmlhLmhhc093blByb3BlcnR5KGYpJiZudWxsIT1nJiYkZChsLGYpKTtzd2l0Y2goYyl7Y2FzZSBcImlucHV0XCI6eWIoZCk7R2IoZCxrLCEwKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjp5YihkKTtOYihkLGspO2JyZWFrO2Nhc2UgXCJzZWxlY3RcIjpjYXNlIFwib3B0aW9uXCI6YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2Ygay5vbkNsaWNrJiZcbihkLm9uY2xpY2s9YWUpfWY9aDtlLnVwZGF0ZVF1ZXVlPWY7ZT1udWxsIT09Zj8hMDohMTtlJiZDaShiKX1lbHNle2M9YjtsPWY7az1lO2g9OT09PWQubm9kZVR5cGU/ZDpkLm93bmVyRG9jdW1lbnQ7Zz09PU9iLmh0bWwmJihnPVBiKGwpKTtnPT09T2IuaHRtbD9cInNjcmlwdFwiPT09bD8oaz1oLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksay5pbm5lckhUTUw9XCI8c2NyaXB0PlxceDNjL3NjcmlwdD5cIixoPWsucmVtb3ZlQ2hpbGQoay5maXJzdENoaWxkKSk6XCJzdHJpbmdcIj09PXR5cGVvZiBrLmlzP2g9aC5jcmVhdGVFbGVtZW50KGwse2lzOmsuaXN9KTooaD1oLmNyZWF0ZUVsZW1lbnQobCksXCJzZWxlY3RcIj09PWwmJihsPWgsay5tdWx0aXBsZT9sLm11bHRpcGxlPSEwOmsuc2l6ZSYmKGwuc2l6ZT1rLnNpemUpKSk6aD1oLmNyZWF0ZUVsZW1lbnROUyhnLGwpO2s9aDtrW3VlXT1jO2tbdmVdPWU7SGkoayxiLCExLCExKTtiLnN0YXRlTm9kZT1rO2w9ZjtjPWU7dmFyIG09ZCxDPVpkKGwsYyk7c3dpdGNoKGwpe2Nhc2UgXCJpZnJhbWVcIjpjYXNlIFwib2JqZWN0XCI6Y2FzZSBcImVtYmVkXCI6RihcImxvYWRcIixcbmspO2Q9YzticmVhaztjYXNlIFwidmlkZW9cIjpjYXNlIFwiYXVkaW9cIjpmb3IoZD0wO2Q8Y2MubGVuZ3RoO2QrKylGKGNjW2RdLGspO2Q9YzticmVhaztjYXNlIFwic291cmNlXCI6RihcImVycm9yXCIsayk7ZD1jO2JyZWFrO2Nhc2UgXCJpbWdcIjpjYXNlIFwiaW1hZ2VcIjpjYXNlIFwibGlua1wiOkYoXCJlcnJvclwiLGspO0YoXCJsb2FkXCIsayk7ZD1jO2JyZWFrO2Nhc2UgXCJmb3JtXCI6RihcInJlc2V0XCIsayk7RihcInN1Ym1pdFwiLGspO2Q9YzticmVhaztjYXNlIFwiZGV0YWlsc1wiOkYoXCJ0b2dnbGVcIixrKTtkPWM7YnJlYWs7Y2FzZSBcImlucHV0XCI6QmIoayxjKTtkPUFiKGssYyk7RihcImludmFsaWRcIixrKTskZChtLFwib25DaGFuZ2VcIik7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOmQ9SWIoayxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6ay5fd3JhcHBlclN0YXRlPXt3YXNNdWx0aXBsZTohIWMubXVsdGlwbGV9O2Q9bih7fSxjLHt2YWx1ZTp2b2lkIDB9KTtGKFwiaW52YWxpZFwiLGspOyRkKG0sXCJvbkNoYW5nZVwiKTticmVhaztjYXNlIFwidGV4dGFyZWFcIjpMYihrLFxuYyk7ZD1LYihrLGMpO0YoXCJpbnZhbGlkXCIsayk7JGQobSxcIm9uQ2hhbmdlXCIpO2JyZWFrO2RlZmF1bHQ6ZD1jfVlkKGwsZCk7aD12b2lkIDA7Zz1sO3ZhciB5PWssSD1kO2ZvcihoIGluIEgpaWYoSC5oYXNPd25Qcm9wZXJ0eShoKSl7dmFyIHo9SFtoXTtcInN0eWxlXCI9PT1oP1dkKHkseik6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT09aD8oej16P3ouX19odG1sOnZvaWQgMCxudWxsIT16JiZTYih5LHopKTpcImNoaWxkcmVuXCI9PT1oP1wic3RyaW5nXCI9PT10eXBlb2Ygej8oXCJ0ZXh0YXJlYVwiIT09Z3x8XCJcIiE9PXopJiZUYih5LHopOlwibnVtYmVyXCI9PT10eXBlb2YgeiYmVGIoeSxcIlwiK3opOlwic3VwcHJlc3NDb250ZW50RWRpdGFibGVXYXJuaW5nXCIhPT1oJiZcInN1cHByZXNzSHlkcmF0aW9uV2FybmluZ1wiIT09aCYmXCJhdXRvRm9jdXNcIiE9PWgmJihpYS5oYXNPd25Qcm9wZXJ0eShoKT9udWxsIT16JiYkZChtLGgpOm51bGwhPXomJnZiKHksaCx6LEMpKX1zd2l0Y2gobCl7Y2FzZSBcImlucHV0XCI6eWIoayk7XG5HYihrLGMsITEpO2JyZWFrO2Nhc2UgXCJ0ZXh0YXJlYVwiOnliKGspO05iKGssYyk7YnJlYWs7Y2FzZSBcIm9wdGlvblwiOm51bGwhPWMudmFsdWUmJmsuc2V0QXR0cmlidXRlKFwidmFsdWVcIixcIlwiK3ViKGMudmFsdWUpKTticmVhaztjYXNlIFwic2VsZWN0XCI6ZD1rO2QubXVsdGlwbGU9ISFjLm11bHRpcGxlO2s9Yy52YWx1ZTtudWxsIT1rP0piKGQsISFjLm11bHRpcGxlLGssITEpOm51bGwhPWMuZGVmYXVsdFZhbHVlJiZKYihkLCEhYy5tdWx0aXBsZSxjLmRlZmF1bHRWYWx1ZSwhMCk7YnJlYWs7ZGVmYXVsdDpcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5vbkNsaWNrJiYoay5vbmNsaWNrPWFlKX0oZT1uZShmLGUpKSYmQ2koYil9bnVsbCE9PWIucmVmJiYoYi5lZmZlY3RUYWd8PTEyOCl9ZWxzZSBpZihudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IodSgxNjYpKTticmVhaztjYXNlIDY6aWYoYyYmbnVsbCE9Yi5zdGF0ZU5vZGUpS2koYyxiLGMubWVtb2l6ZWRQcm9wcyxlKTtlbHNle2lmKFwic3RyaW5nXCIhPT1cbnR5cGVvZiBlJiZudWxsPT09Yi5zdGF0ZU5vZGUpdGhyb3cgRXJyb3IodSgxNjYpKTtkPWxoKGtoLmN1cnJlbnQpO2xoKGloLmN1cnJlbnQpO2tpKGIpPyhlPWIsZj1lLnN0YXRlTm9kZSxkPWUubWVtb2l6ZWRQcm9wcyxmW3VlXT1lLChlPWYubm9kZVZhbHVlIT09ZCkmJkNpKGIpKTooZj1iLGU9KDk9PT1kLm5vZGVUeXBlP2Q6ZC5vd25lckRvY3VtZW50KS5jcmVhdGVUZXh0Tm9kZShlKSxlW3VlXT1mLGIuc3RhdGVOb2RlPWUpfWJyZWFrO2Nhc2UgMTE6YnJlYWs7Y2FzZSAxMzpHKE0sYik7ZT1iLm1lbW9pemVkU3RhdGU7aWYoMCE9PShiLmVmZmVjdFRhZyY2NCkpe2IuZXhwaXJhdGlvblRpbWU9ZDticmVhayBhfWU9bnVsbCE9PWU7Zj0hMTtudWxsPT09Yz92b2lkIDAhPT1iLm1lbW9pemVkUHJvcHMuZmFsbGJhY2smJmtpKGIpOihkPWMubWVtb2l6ZWRTdGF0ZSxmPW51bGwhPT1kLGV8fG51bGw9PT1kfHwoZD1jLmNoaWxkLnNpYmxpbmcsbnVsbCE9PWQmJihrPWIuZmlyc3RFZmZlY3QsXG5udWxsIT09az8oYi5maXJzdEVmZmVjdD1kLGQubmV4dEVmZmVjdD1rKTooYi5maXJzdEVmZmVjdD1iLmxhc3RFZmZlY3Q9ZCxkLm5leHRFZmZlY3Q9bnVsbCksZC5lZmZlY3RUYWc9OCkpKTtpZihlJiYhZiYmMCE9PShiLm1vZGUmMikpaWYobnVsbD09PWMmJiEwIT09Yi5tZW1vaXplZFByb3BzLnVuc3RhYmxlX2F2b2lkVGhpc0ZhbGxiYWNrfHwwIT09KE0uY3VycmVudCYxKSlYPT09cWomJihYPXRqKTtlbHNle2lmKFg9PT1xanx8WD09PXRqKVg9dWo7MCE9PUFqJiZudWxsIT09VSYmKE1qKFUsVyksTmooVSxBaikpfWlmKGV8fGYpYi5lZmZlY3RUYWd8PTQ7YnJlYWs7Y2FzZSA3OmJyZWFrO2Nhc2UgODpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgNDpuaChiKTtJaShiKTticmVhaztjYXNlIDEwOnRnKGIpO2JyZWFrO2Nhc2UgOTpicmVhaztjYXNlIDE0OmJyZWFrO2Nhc2UgMTc6TChiLnR5cGUpJiZGZihiKTticmVhaztjYXNlIDE5OkcoTSxiKTtlPWIubWVtb2l6ZWRTdGF0ZTtpZihudWxsPT09XG5lKWJyZWFrO2Y9MCE9PShiLmVmZmVjdFRhZyY2NCk7az1lLnJlbmRlcmluZztpZihudWxsPT09aylpZihmKUxpKGUsITEpO2Vsc2V7aWYoWCE9PXFqfHxudWxsIT09YyYmMCE9PShjLmVmZmVjdFRhZyY2NCkpZm9yKGM9Yi5jaGlsZDtudWxsIT09Yzspe2s9cWgoYyk7aWYobnVsbCE9PWspe2IuZWZmZWN0VGFnfD02NDtMaShlLCExKTtmPWsudXBkYXRlUXVldWU7bnVsbCE9PWYmJihiLnVwZGF0ZVF1ZXVlPWYsYi5lZmZlY3RUYWd8PTQpO251bGw9PT1lLmxhc3RFZmZlY3QmJihiLmZpcnN0RWZmZWN0PW51bGwpO2IubGFzdEVmZmVjdD1lLmxhc3RFZmZlY3Q7ZT1kO2ZvcihmPWIuY2hpbGQ7bnVsbCE9PWY7KWQ9ZixjPWUsZC5lZmZlY3RUYWcmPTIsZC5uZXh0RWZmZWN0PW51bGwsZC5maXJzdEVmZmVjdD1udWxsLGQubGFzdEVmZmVjdD1udWxsLGs9ZC5hbHRlcm5hdGUsbnVsbD09PWs/KGQuY2hpbGRFeHBpcmF0aW9uVGltZT0wLGQuZXhwaXJhdGlvblRpbWU9YyxkLmNoaWxkPW51bGwsXG5kLm1lbW9pemVkUHJvcHM9bnVsbCxkLm1lbW9pemVkU3RhdGU9bnVsbCxkLnVwZGF0ZVF1ZXVlPW51bGwsZC5kZXBlbmRlbmNpZXM9bnVsbCk6KGQuY2hpbGRFeHBpcmF0aW9uVGltZT1rLmNoaWxkRXhwaXJhdGlvblRpbWUsZC5leHBpcmF0aW9uVGltZT1rLmV4cGlyYXRpb25UaW1lLGQuY2hpbGQ9ay5jaGlsZCxkLm1lbW9pemVkUHJvcHM9ay5tZW1vaXplZFByb3BzLGQubWVtb2l6ZWRTdGF0ZT1rLm1lbW9pemVkU3RhdGUsZC51cGRhdGVRdWV1ZT1rLnVwZGF0ZVF1ZXVlLGM9ay5kZXBlbmRlbmNpZXMsZC5kZXBlbmRlbmNpZXM9bnVsbD09PWM/bnVsbDp7ZXhwaXJhdGlvblRpbWU6Yy5leHBpcmF0aW9uVGltZSxmaXJzdENvbnRleHQ6Yy5maXJzdENvbnRleHQscmVzcG9uZGVyczpjLnJlc3BvbmRlcnN9KSxmPWYuc2libGluZztJKE0sTS5jdXJyZW50JjF8MixiKTtiPWIuY2hpbGQ7YnJlYWsgYX1jPWMuc2libGluZ319ZWxzZXtpZighZilpZihjPXFoKGspLG51bGwhPT1jKXtpZihiLmVmZmVjdFRhZ3w9XG42NCxmPSEwLGQ9Yy51cGRhdGVRdWV1ZSxudWxsIT09ZCYmKGIudXBkYXRlUXVldWU9ZCxiLmVmZmVjdFRhZ3w9NCksTGkoZSwhMCksbnVsbD09PWUudGFpbCYmXCJoaWRkZW5cIj09PWUudGFpbE1vZGUmJiFrLmFsdGVybmF0ZSl7Yj1iLmxhc3RFZmZlY3Q9ZS5sYXN0RWZmZWN0O251bGwhPT1iJiYoYi5uZXh0RWZmZWN0PW51bGwpO2JyZWFrfX1lbHNlIGNnKCk+ZS50YWlsRXhwaXJhdGlvbiYmMTxkJiYoYi5lZmZlY3RUYWd8PTY0LGY9ITAsTGkoZSwhMSksYi5leHBpcmF0aW9uVGltZT1iLmNoaWxkRXhwaXJhdGlvblRpbWU9ZC0xKTtlLmlzQmFja3dhcmRzPyhrLnNpYmxpbmc9Yi5jaGlsZCxiLmNoaWxkPWspOihkPWUubGFzdCxudWxsIT09ZD9kLnNpYmxpbmc9azpiLmNoaWxkPWssZS5sYXN0PWspfWlmKG51bGwhPT1lLnRhaWwpezA9PT1lLnRhaWxFeHBpcmF0aW9uJiYoZS50YWlsRXhwaXJhdGlvbj1jZygpKzUwMCk7ZD1lLnRhaWw7ZS5yZW5kZXJpbmc9ZDtlLnRhaWw9ZC5zaWJsaW5nO1xuZS5sYXN0RWZmZWN0PWIubGFzdEVmZmVjdDtkLnNpYmxpbmc9bnVsbDtlPU0uY3VycmVudDtlPWY/ZSYxfDI6ZSYxO0koTSxlLGIpO2I9ZDticmVhayBhfWJyZWFrO2Nhc2UgMjA6YnJlYWs7Y2FzZSAyMTpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKHUoMTU2LGIudGFnKSk7fWI9bnVsbH1lPVY7aWYoMT09PVd8fDEhPT1lLmNoaWxkRXhwaXJhdGlvblRpbWUpe2Y9MDtmb3IoZD1lLmNoaWxkO251bGwhPT1kOyljPWQuZXhwaXJhdGlvblRpbWUsaz1kLmNoaWxkRXhwaXJhdGlvblRpbWUsYz5mJiYoZj1jKSxrPmYmJihmPWspLGQ9ZC5zaWJsaW5nO2UuY2hpbGRFeHBpcmF0aW9uVGltZT1mfWlmKG51bGwhPT1iKXJldHVybiBiO251bGwhPT1hJiYwPT09KGEuZWZmZWN0VGFnJjIwNDgpJiYobnVsbD09PWEuZmlyc3RFZmZlY3QmJihhLmZpcnN0RWZmZWN0PVYuZmlyc3RFZmZlY3QpLG51bGwhPT1WLmxhc3RFZmZlY3QmJihudWxsIT09YS5sYXN0RWZmZWN0JiYoYS5sYXN0RWZmZWN0Lm5leHRFZmZlY3Q9XG5WLmZpcnN0RWZmZWN0KSxhLmxhc3RFZmZlY3Q9Vi5sYXN0RWZmZWN0KSwxPFYuZWZmZWN0VGFnJiYobnVsbCE9PWEubGFzdEVmZmVjdD9hLmxhc3RFZmZlY3QubmV4dEVmZmVjdD1WOmEuZmlyc3RFZmZlY3Q9VixhLmxhc3RFZmZlY3Q9VikpfWVsc2V7Yj1NaShWLFcpO2lmKG51bGwhPT1iKXJldHVybiBiLmVmZmVjdFRhZyY9MjA0NyxiO251bGwhPT1hJiYoYS5maXJzdEVmZmVjdD1hLmxhc3RFZmZlY3Q9bnVsbCxhLmVmZmVjdFRhZ3w9MjA0OCl9Yj1WLnNpYmxpbmc7aWYobnVsbCE9PWIpcmV0dXJuIGI7Vj1hfXdoaWxlKG51bGwhPT1WKTtYPT09cWomJihYPXZqKTtyZXR1cm4gbnVsbH1mdW5jdGlvbiBYaihhKXt2YXIgYj1hLmV4cGlyYXRpb25UaW1lO2E9YS5jaGlsZEV4cGlyYXRpb25UaW1lO3JldHVybiBiPmE/YjphfWZ1bmN0aW9uIFlqKGEpe3ZhciBiPWRnKCk7ZmcoOTksaWsuYmluZChudWxsLGEsYikpO3JldHVybiBudWxsfVxuZnVuY3Rpb24gaWsoYSxiKXtkbyBTaigpO3doaWxlKG51bGwhPT1Faik7aWYoKFQmKG9qfHBqKSkhPT1TKXRocm93IEVycm9yKHUoMzI3KSk7dmFyIGM9YS5maW5pc2hlZFdvcmssZD1hLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU7aWYobnVsbD09PWMpcmV0dXJuIG51bGw7YS5maW5pc2hlZFdvcms9bnVsbDthLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9MDtpZihjPT09YS5jdXJyZW50KXRocm93IEVycm9yKHUoMTc3KSk7YS5jYWxsYmFja05vZGU9bnVsbDthLmNhbGxiYWNrRXhwaXJhdGlvblRpbWU9MDthLmNhbGxiYWNrUHJpb3JpdHk9OTA7YS5uZXh0S25vd25QZW5kaW5nTGV2ZWw9MDt2YXIgZT1YaihjKTthLmZpcnN0UGVuZGluZ1RpbWU9ZTtkPD1hLmxhc3RTdXNwZW5kZWRUaW1lP2EuZmlyc3RTdXNwZW5kZWRUaW1lPWEubGFzdFN1c3BlbmRlZFRpbWU9YS5uZXh0S25vd25QZW5kaW5nTGV2ZWw9MDpkPD1hLmZpcnN0U3VzcGVuZGVkVGltZSYmKGEuZmlyc3RTdXNwZW5kZWRUaW1lPVxuZC0xKTtkPD1hLmxhc3RQaW5nZWRUaW1lJiYoYS5sYXN0UGluZ2VkVGltZT0wKTtkPD1hLmxhc3RFeHBpcmVkVGltZSYmKGEubGFzdEV4cGlyZWRUaW1lPTApO2E9PT1VJiYoVj1VPW51bGwsVz0wKTsxPGMuZWZmZWN0VGFnP251bGwhPT1jLmxhc3RFZmZlY3Q/KGMubGFzdEVmZmVjdC5uZXh0RWZmZWN0PWMsZT1jLmZpcnN0RWZmZWN0KTplPWM6ZT1jLmZpcnN0RWZmZWN0O2lmKG51bGwhPT1lKXt2YXIgZj1UO1R8PXBqO21qLmN1cnJlbnQ9bnVsbDtsZT1MZDt2YXIgZz1mZSgpO2lmKGdlKGcpKXtpZihcInNlbGVjdGlvblN0YXJ0XCJpbiBnKXZhciBoPXtzdGFydDpnLnNlbGVjdGlvblN0YXJ0LGVuZDpnLnNlbGVjdGlvbkVuZH07ZWxzZSBhOntoPShoPWcub3duZXJEb2N1bWVudCkmJmguZGVmYXVsdFZpZXd8fHdpbmRvdzt2YXIgaz1oLmdldFNlbGVjdGlvbiYmaC5nZXRTZWxlY3Rpb24oKTtpZihrJiYwIT09ay5yYW5nZUNvdW50KXtoPWsuYW5jaG9yTm9kZTt2YXIgbD1rLmFuY2hvck9mZnNldCxcbm09ay5mb2N1c05vZGU7az1rLmZvY3VzT2Zmc2V0O3RyeXtoLm5vZGVUeXBlLG0ubm9kZVR5cGV9Y2F0Y2goRGIpe2g9bnVsbDticmVhayBhfXZhciBDPTAseT0tMSxIPS0xLHo9MCx0YT0wLHI9Zyx4PW51bGw7Yjpmb3IoOzspe2Zvcih2YXIgQTs7KXtyIT09aHx8MCE9PWwmJjMhPT1yLm5vZGVUeXBlfHwoeT1DK2wpO3IhPT1tfHwwIT09ayYmMyE9PXIubm9kZVR5cGV8fChIPUMrayk7Mz09PXIubm9kZVR5cGUmJihDKz1yLm5vZGVWYWx1ZS5sZW5ndGgpO2lmKG51bGw9PT0oQT1yLmZpcnN0Q2hpbGQpKWJyZWFrO3g9cjtyPUF9Zm9yKDs7KXtpZihyPT09ZylicmVhayBiO3g9PT1oJiYrK3o9PT1sJiYoeT1DKTt4PT09bSYmKyt0YT09PWsmJihIPUMpO2lmKG51bGwhPT0oQT1yLm5leHRTaWJsaW5nKSlicmVhaztyPXg7eD1yLnBhcmVudE5vZGV9cj1BfWg9LTE9PT15fHwtMT09PUg/bnVsbDp7c3RhcnQ6eSxlbmQ6SH19ZWxzZSBoPW51bGx9aD1ofHx7c3RhcnQ6MCxlbmQ6MH19ZWxzZSBoPVxubnVsbDttZT17Zm9jdXNlZEVsZW06ZyxzZWxlY3Rpb25SYW5nZTpofTtMZD0hMTtZPWU7ZG8gdHJ5e2prKCl9Y2F0Y2goRGIpe2lmKG51bGw9PT1ZKXRocm93IEVycm9yKHUoMzMwKSk7UmkoWSxEYik7WT1ZLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVkpO1k9ZTtkbyB0cnl7Zm9yKGc9YSxoPWI7bnVsbCE9PVk7KXt2YXIgcD1ZLmVmZmVjdFRhZztwJjE2JiZUYihZLnN0YXRlTm9kZSxcIlwiKTtpZihwJjEyOCl7dmFyIHQ9WS5hbHRlcm5hdGU7aWYobnVsbCE9PXQpe3ZhciB2PXQucmVmO251bGwhPT12JiYoXCJmdW5jdGlvblwiPT09dHlwZW9mIHY/dihudWxsKTp2LmN1cnJlbnQ9bnVsbCl9fXN3aXRjaChwJjEwMzgpe2Nhc2UgMjokaShZKTtZLmVmZmVjdFRhZyY9LTM7YnJlYWs7Y2FzZSA2OiRpKFkpO1kuZWZmZWN0VGFnJj0tMzthaihZLmFsdGVybmF0ZSxZKTticmVhaztjYXNlIDEwMjQ6WS5lZmZlY3RUYWcmPS0xMDI1O2JyZWFrO2Nhc2UgMTAyODpZLmVmZmVjdFRhZyY9LTEwMjU7YWooWS5hbHRlcm5hdGUsXG5ZKTticmVhaztjYXNlIDQ6YWooWS5hbHRlcm5hdGUsWSk7YnJlYWs7Y2FzZSA4Omw9WSxYaShnLGwsaCksWWkobCl9WT1ZLm5leHRFZmZlY3R9fWNhdGNoKERiKXtpZihudWxsPT09WSl0aHJvdyBFcnJvcih1KDMzMCkpO1JpKFksRGIpO1k9WS5uZXh0RWZmZWN0fXdoaWxlKG51bGwhPT1ZKTt2PW1lO3Q9ZmUoKTtwPXYuZm9jdXNlZEVsZW07aD12LnNlbGVjdGlvblJhbmdlO2lmKHQhPT1wJiZwJiZwLm93bmVyRG9jdW1lbnQmJmVlKHAub3duZXJEb2N1bWVudC5kb2N1bWVudEVsZW1lbnQscCkpe251bGwhPT1oJiZnZShwKSYmKHQ9aC5zdGFydCx2PWguZW5kLHZvaWQgMD09PXYmJih2PXQpLFwic2VsZWN0aW9uU3RhcnRcImluIHA/KHAuc2VsZWN0aW9uU3RhcnQ9dCxwLnNlbGVjdGlvbkVuZD1NYXRoLm1pbih2LHAudmFsdWUubGVuZ3RoKSk6KHY9KHQ9cC5vd25lckRvY3VtZW50fHxkb2N1bWVudCkmJnQuZGVmYXVsdFZpZXd8fHdpbmRvdyx2LmdldFNlbGVjdGlvbiYmKHY9di5nZXRTZWxlY3Rpb24oKSxcbmw9cC50ZXh0Q29udGVudC5sZW5ndGgsZz1NYXRoLm1pbihoLnN0YXJ0LGwpLGg9dm9pZCAwPT09aC5lbmQ/ZzpNYXRoLm1pbihoLmVuZCxsKSwhdi5leHRlbmQmJmc+aCYmKGw9aCxoPWcsZz1sKSxsPWRlKHAsZyksbT1kZShwLGgpLGwmJm0mJigxIT09di5yYW5nZUNvdW50fHx2LmFuY2hvck5vZGUhPT1sLm5vZGV8fHYuYW5jaG9yT2Zmc2V0IT09bC5vZmZzZXR8fHYuZm9jdXNOb2RlIT09bS5ub2RlfHx2LmZvY3VzT2Zmc2V0IT09bS5vZmZzZXQpJiYodD10LmNyZWF0ZVJhbmdlKCksdC5zZXRTdGFydChsLm5vZGUsbC5vZmZzZXQpLHYucmVtb3ZlQWxsUmFuZ2VzKCksZz5oPyh2LmFkZFJhbmdlKHQpLHYuZXh0ZW5kKG0ubm9kZSxtLm9mZnNldCkpOih0LnNldEVuZChtLm5vZGUsbS5vZmZzZXQpLHYuYWRkUmFuZ2UodCkpKSkpKTt0PVtdO2Zvcih2PXA7dj12LnBhcmVudE5vZGU7KTE9PT12Lm5vZGVUeXBlJiZ0LnB1c2goe2VsZW1lbnQ6dixsZWZ0OnYuc2Nyb2xsTGVmdCx0b3A6di5zY3JvbGxUb3B9KTtcblwiZnVuY3Rpb25cIj09PXR5cGVvZiBwLmZvY3VzJiZwLmZvY3VzKCk7Zm9yKHA9MDtwPHQubGVuZ3RoO3ArKyl2PXRbcF0sdi5lbGVtZW50LnNjcm9sbExlZnQ9di5sZWZ0LHYuZWxlbWVudC5zY3JvbGxUb3A9di50b3B9bWU9bnVsbDtMZD0hIWxlO2xlPW51bGw7YS5jdXJyZW50PWM7WT1lO2RvIHRyeXtmb3IocD1kO251bGwhPT1ZOyl7dmFyIERoPVkuZWZmZWN0VGFnO2lmKERoJjM2KXt2YXIgZGM9WS5hbHRlcm5hdGU7dD1ZO3Y9cDtzd2l0Y2godC50YWcpe2Nhc2UgMDpjYXNlIDExOmNhc2UgMTU6VWkoMTYsMzIsdCk7YnJlYWs7Y2FzZSAxOnZhciBmZD10LnN0YXRlTm9kZTtpZih0LmVmZmVjdFRhZyY0KWlmKG51bGw9PT1kYylmZC5jb21wb25lbnREaWRNb3VudCgpO2Vsc2V7dmFyIGhrPXQuZWxlbWVudFR5cGU9PT10LnR5cGU/ZGMubWVtb2l6ZWRQcm9wczptZyh0LnR5cGUsZGMubWVtb2l6ZWRQcm9wcyk7ZmQuY29tcG9uZW50RGlkVXBkYXRlKGhrLGRjLm1lbW9pemVkU3RhdGUsXG5mZC5fX3JlYWN0SW50ZXJuYWxTbmFwc2hvdEJlZm9yZVVwZGF0ZSl9dmFyIEVoPXQudXBkYXRlUXVldWU7bnVsbCE9PUVoJiZLZyh0LEVoLGZkLHYpO2JyZWFrO2Nhc2UgMzp2YXIgRmg9dC51cGRhdGVRdWV1ZTtpZihudWxsIT09Rmgpe2c9bnVsbDtpZihudWxsIT09dC5jaGlsZClzd2l0Y2godC5jaGlsZC50YWcpe2Nhc2UgNTpnPXQuY2hpbGQuc3RhdGVOb2RlO2JyZWFrO2Nhc2UgMTpnPXQuY2hpbGQuc3RhdGVOb2RlfUtnKHQsRmgsZyx2KX1icmVhaztjYXNlIDU6dmFyIHhrPXQuc3RhdGVOb2RlO251bGw9PT1kYyYmdC5lZmZlY3RUYWcmNCYmbmUodC50eXBlLHQubWVtb2l6ZWRQcm9wcykmJnhrLmZvY3VzKCk7YnJlYWs7Y2FzZSA2OmJyZWFrO2Nhc2UgNDpicmVhaztjYXNlIDEyOmJyZWFrO2Nhc2UgMTM6aWYobnVsbD09PXQubWVtb2l6ZWRTdGF0ZSl7dmFyIERpPXQuYWx0ZXJuYXRlO2lmKG51bGwhPT1EaSl7dmFyIEVpPURpLm1lbW9pemVkU3RhdGU7aWYobnVsbCE9PUVpKXt2YXIgRmk9XG5FaS5kZWh5ZHJhdGVkO251bGwhPT1GaSYmTGMoRmkpfX19YnJlYWs7Y2FzZSAxOTpjYXNlIDE3OmNhc2UgMjA6Y2FzZSAyMTpicmVhaztkZWZhdWx0OnRocm93IEVycm9yKHUoMTYzKSk7fX1pZihEaCYxMjgpe3Q9dm9pZCAwO3ZhciB4ZD1ZLnJlZjtpZihudWxsIT09eGQpe3ZhciBHaT1ZLnN0YXRlTm9kZTtzd2l0Y2goWS50YWcpe2Nhc2UgNTp0PUdpO2JyZWFrO2RlZmF1bHQ6dD1HaX1cImZ1bmN0aW9uXCI9PT10eXBlb2YgeGQ/eGQodCk6eGQuY3VycmVudD10fX1ZPVkubmV4dEVmZmVjdH19Y2F0Y2goRGIpe2lmKG51bGw9PT1ZKXRocm93IEVycm9yKHUoMzMwKSk7UmkoWSxEYik7WT1ZLm5leHRFZmZlY3R9d2hpbGUobnVsbCE9PVkpO1k9bnVsbDtZZigpO1Q9Zn1lbHNlIGEuY3VycmVudD1jO2lmKERqKURqPSExLEVqPWEsRmo9YjtlbHNlIGZvcihZPWU7bnVsbCE9PVk7KWI9WS5uZXh0RWZmZWN0LFkubmV4dEVmZmVjdD1udWxsLFk9YjtiPWEuZmlyc3RQZW5kaW5nVGltZTswPT09YiYmXG4oamo9bnVsbCk7MTA3Mzc0MTgyMz09PWI/YT09PUlqP0hqKys6KEhqPTAsSWo9YSk6SGo9MDtcImZ1bmN0aW9uXCI9PT10eXBlb2Yga2smJmtrKGMuc3RhdGVOb2RlLGQpO1ooYSk7aWYoZ2opdGhyb3cgZ2o9ITEsYT1oaixoaj1udWxsLGE7aWYoKFQmbmopIT09UylyZXR1cm4gbnVsbDtqZygpO3JldHVybiBudWxsfWZ1bmN0aW9uIGprKCl7Zm9yKDtudWxsIT09WTspe3ZhciBhPVkuZWZmZWN0VGFnOzAhPT0oYSYyNTYpJiZUaShZLmFsdGVybmF0ZSxZKTswPT09KGEmNTEyKXx8RGp8fChEaj0hMCxnZyg5NyxmdW5jdGlvbigpe1NqKCk7cmV0dXJuIG51bGx9KSk7WT1ZLm5leHRFZmZlY3R9fWZ1bmN0aW9uIFNqKCl7aWYoOTAhPT1Gail7dmFyIGE9OTc8Rmo/OTc6Rmo7Rmo9OTA7cmV0dXJuIGZnKGEsbGspfX1cbmZ1bmN0aW9uIGxrKCl7aWYobnVsbD09PUVqKXJldHVybiExO3ZhciBhPUVqO0VqPW51bGw7aWYoKFQmKG9qfHBqKSkhPT1TKXRocm93IEVycm9yKHUoMzMxKSk7dmFyIGI9VDtUfD1wajtmb3IoYT1hLmN1cnJlbnQuZmlyc3RFZmZlY3Q7bnVsbCE9PWE7KXt0cnl7dmFyIGM9YTtpZigwIT09KGMuZWZmZWN0VGFnJjUxMikpc3dpdGNoKGMudGFnKXtjYXNlIDA6Y2FzZSAxMTpjYXNlIDE1OlVpKDEyOCwwLGMpLFVpKDAsNjQsYyl9fWNhdGNoKGQpe2lmKG51bGw9PT1hKXRocm93IEVycm9yKHUoMzMwKSk7UmkoYSxkKX1jPWEubmV4dEVmZmVjdDthLm5leHRFZmZlY3Q9bnVsbDthPWN9VD1iO2pnKCk7cmV0dXJuITB9ZnVuY3Rpb24gbWsoYSxiLGMpe2I9TmkoYyxiKTtiPWZqKGEsYiwxMDczNzQxODIzKTtEZyhhLGIpO2E9S2ooYSwxMDczNzQxODIzKTtudWxsIT09YSYmWihhKX1cbmZ1bmN0aW9uIFJpKGEsYil7aWYoMz09PWEudGFnKW1rKGEsYSxiKTtlbHNlIGZvcih2YXIgYz1hLnJldHVybjtudWxsIT09Yzspe2lmKDM9PT1jLnRhZyl7bWsoYyxhLGIpO2JyZWFrfWVsc2UgaWYoMT09PWMudGFnKXt2YXIgZD1jLnN0YXRlTm9kZTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYy50eXBlLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvcnx8XCJmdW5jdGlvblwiPT09dHlwZW9mIGQuY29tcG9uZW50RGlkQ2F0Y2gmJihudWxsPT09amp8fCFqai5oYXMoZCkpKXthPU5pKGIsYSk7YT1paihjLGEsMTA3Mzc0MTgyMyk7RGcoYyxhKTtjPUtqKGMsMTA3Mzc0MTgyMyk7bnVsbCE9PWMmJlooYyk7YnJlYWt9fWM9Yy5yZXR1cm59fVxuZnVuY3Rpb24gZGsoYSxiLGMpe3ZhciBkPWEucGluZ0NhY2hlO251bGwhPT1kJiZkLmRlbGV0ZShiKTtVPT09YSYmVz09PWM/WD09PXVqfHxYPT09dGomJjEwNzM3NDE4MjM9PT14aiYmY2coKS1iajxDaj9UaihhLFcpOkJqPSEwOlBqKGEsYykmJihiPWEubGFzdFBpbmdlZFRpbWUsMCE9PWImJmI8Y3x8KGEubGFzdFBpbmdlZFRpbWU9YyxhLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9PT1jJiYoYS5maW5pc2hlZEV4cGlyYXRpb25UaW1lPTAsYS5maW5pc2hlZFdvcms9bnVsbCksWihhKSkpfWZ1bmN0aW9uIGRqKGEsYil7dmFyIGM9YS5zdGF0ZU5vZGU7bnVsbCE9PWMmJmMuZGVsZXRlKGIpO2I9MDswPT09YiYmKGI9UGcoKSxiPVFnKGIsYSxudWxsKSk7YT1LaihhLGIpO251bGwhPT1hJiZaKGEpfXZhciBnaztcbmdrPWZ1bmN0aW9uKGEsYixjKXt2YXIgZD1iLmV4cGlyYXRpb25UaW1lO2lmKG51bGwhPT1hKXt2YXIgZT1iLnBlbmRpbmdQcm9wcztpZihhLm1lbW9pemVkUHJvcHMhPT1lfHxLLmN1cnJlbnQpd2c9ITA7ZWxzZXtpZihkPGMpe3dnPSExO3N3aXRjaChiLnRhZyl7Y2FzZSAzOndpKGIpO2xpKCk7YnJlYWs7Y2FzZSA1Om9oKGIpO2lmKGIubW9kZSY0JiYxIT09YyYmZS5oaWRkZW4pcmV0dXJuIGIuZXhwaXJhdGlvblRpbWU9Yi5jaGlsZEV4cGlyYXRpb25UaW1lPTEsbnVsbDticmVhaztjYXNlIDE6TChiLnR5cGUpJiZKZihiKTticmVhaztjYXNlIDQ6bWgoYixiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvKTticmVhaztjYXNlIDEwOnNnKGIsYi5tZW1vaXplZFByb3BzLnZhbHVlKTticmVhaztjYXNlIDEzOmlmKG51bGwhPT1iLm1lbW9pemVkU3RhdGUpe2Q9Yi5jaGlsZC5jaGlsZEV4cGlyYXRpb25UaW1lO2lmKDAhPT1kJiZkPj1jKXJldHVybiB5aShhLGIsYyk7SShNLE0uY3VycmVudCZcbjEsYik7Yj1vaShhLGIsYyk7cmV0dXJuIG51bGwhPT1iP2Iuc2libGluZzpudWxsfUkoTSxNLmN1cnJlbnQmMSxiKTticmVhaztjYXNlIDE5OmQ9Yi5jaGlsZEV4cGlyYXRpb25UaW1lPj1jO2lmKDAhPT0oYS5lZmZlY3RUYWcmNjQpKXtpZihkKXJldHVybiBCaShhLGIsYyk7Yi5lZmZlY3RUYWd8PTY0fWU9Yi5tZW1vaXplZFN0YXRlO251bGwhPT1lJiYoZS5yZW5kZXJpbmc9bnVsbCxlLnRhaWw9bnVsbCk7SShNLE0uY3VycmVudCxiKTtpZighZClyZXR1cm4gbnVsbH1yZXR1cm4gb2koYSxiLGMpfXdnPSExfX1lbHNlIHdnPSExO2IuZXhwaXJhdGlvblRpbWU9MDtzd2l0Y2goYi50YWcpe2Nhc2UgMjpkPWIudHlwZTtudWxsIT09YSYmKGEuYWx0ZXJuYXRlPW51bGwsYi5hbHRlcm5hdGU9bnVsbCxiLmVmZmVjdFRhZ3w9Mik7YT1iLnBlbmRpbmdQcm9wcztlPUVmKGIsSi5jdXJyZW50KTt2ZyhiLGMpO2U9SWgobnVsbCxiLGQsYSxlLGMpO2IuZWZmZWN0VGFnfD0xO2lmKFwib2JqZWN0XCI9PT1cbnR5cGVvZiBlJiZudWxsIT09ZSYmXCJmdW5jdGlvblwiPT09dHlwZW9mIGUucmVuZGVyJiZ2b2lkIDA9PT1lLiQkdHlwZW9mKXtiLnRhZz0xO01oKCk7aWYoTChkKSl7dmFyIGY9ITA7SmYoYil9ZWxzZSBmPSExO2IubWVtb2l6ZWRTdGF0ZT1udWxsIT09ZS5zdGF0ZSYmdm9pZCAwIT09ZS5zdGF0ZT9lLnN0YXRlOm51bGw7dmFyIGc9ZC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM7XCJmdW5jdGlvblwiPT09dHlwZW9mIGcmJk9nKGIsZCxnLGEpO2UudXBkYXRlcj1TZztiLnN0YXRlTm9kZT1lO2UuX3JlYWN0SW50ZXJuYWxGaWJlcj1iO1dnKGIsZCxhLGMpO2I9dmkobnVsbCxiLGQsITAsZixjKX1lbHNlIGIudGFnPTAsUihudWxsLGIsZSxjKSxiPWIuY2hpbGQ7cmV0dXJuIGI7Y2FzZSAxNjplPWIuZWxlbWVudFR5cGU7bnVsbCE9PWEmJihhLmFsdGVybmF0ZT1udWxsLGIuYWx0ZXJuYXRlPW51bGwsYi5lZmZlY3RUYWd8PTIpO2E9Yi5wZW5kaW5nUHJvcHM7VmEoZSk7aWYoMSE9PWUuX3N0YXR1cyl0aHJvdyBlLl9yZXN1bHQ7XG5lPWUuX3Jlc3VsdDtiLnR5cGU9ZTtmPWIudGFnPW5rKGUpO2E9bWcoZSxhKTtzd2l0Y2goZil7Y2FzZSAwOmI9c2kobnVsbCxiLGUsYSxjKTticmVhaztjYXNlIDE6Yj11aShudWxsLGIsZSxhLGMpO2JyZWFrO2Nhc2UgMTE6Yj1uaShudWxsLGIsZSxhLGMpO2JyZWFrO2Nhc2UgMTQ6Yj1waShudWxsLGIsZSxtZyhlLnR5cGUsYSksZCxjKTticmVhaztkZWZhdWx0OnRocm93IEVycm9yKHUoMzA2LGUsXCJcIikpO31yZXR1cm4gYjtjYXNlIDA6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOm1nKGQsZSksc2koYSxiLGQsZSxjKTtjYXNlIDE6cmV0dXJuIGQ9Yi50eXBlLGU9Yi5wZW5kaW5nUHJvcHMsZT1iLmVsZW1lbnRUeXBlPT09ZD9lOm1nKGQsZSksdWkoYSxiLGQsZSxjKTtjYXNlIDM6d2koYik7ZD1iLnVwZGF0ZVF1ZXVlO2lmKG51bGw9PT1kKXRocm93IEVycm9yKHUoMjgyKSk7ZT1iLm1lbW9pemVkU3RhdGU7ZT1udWxsIT09ZT9lLmVsZW1lbnQ6XG5udWxsO0hnKGIsZCxiLnBlbmRpbmdQcm9wcyxudWxsLGMpO2Q9Yi5tZW1vaXplZFN0YXRlLmVsZW1lbnQ7aWYoZD09PWUpbGkoKSxiPW9pKGEsYixjKTtlbHNle2lmKGU9Yi5zdGF0ZU5vZGUuaHlkcmF0ZSlkaT1yZShiLnN0YXRlTm9kZS5jb250YWluZXJJbmZvLmZpcnN0Q2hpbGQpLGNpPWIsZT1laT0hMDtpZihlKWZvcihjPWdoKGIsbnVsbCxkLGMpLGIuY2hpbGQ9YztjOyljLmVmZmVjdFRhZz1jLmVmZmVjdFRhZyYtM3wxMDI0LGM9Yy5zaWJsaW5nO2Vsc2UgUihhLGIsZCxjKSxsaSgpO2I9Yi5jaGlsZH1yZXR1cm4gYjtjYXNlIDU6cmV0dXJuIG9oKGIpLG51bGw9PT1hJiZpaShiKSxkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGY9bnVsbCE9PWE/YS5tZW1vaXplZFByb3BzOm51bGwsZz1lLmNoaWxkcmVuLG9lKGQsZSk/Zz1udWxsOm51bGwhPT1mJiZvZShkLGYpJiYoYi5lZmZlY3RUYWd8PTE2KSx0aShhLGIpLGIubW9kZSY0JiYxIT09YyYmZS5oaWRkZW4/KGIuZXhwaXJhdGlvblRpbWU9XG5iLmNoaWxkRXhwaXJhdGlvblRpbWU9MSxiPW51bGwpOihSKGEsYixnLGMpLGI9Yi5jaGlsZCksYjtjYXNlIDY6cmV0dXJuIG51bGw9PT1hJiZpaShiKSxudWxsO2Nhc2UgMTM6cmV0dXJuIHlpKGEsYixjKTtjYXNlIDQ6cmV0dXJuIG1oKGIsYi5zdGF0ZU5vZGUuY29udGFpbmVySW5mbyksZD1iLnBlbmRpbmdQcm9wcyxudWxsPT09YT9iLmNoaWxkPWZoKGIsbnVsbCxkLGMpOlIoYSxiLGQsYyksYi5jaGlsZDtjYXNlIDExOnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTptZyhkLGUpLG5pKGEsYixkLGUsYyk7Y2FzZSA3OnJldHVybiBSKGEsYixiLnBlbmRpbmdQcm9wcyxjKSxiLmNoaWxkO2Nhc2UgODpyZXR1cm4gUihhLGIsYi5wZW5kaW5nUHJvcHMuY2hpbGRyZW4sYyksYi5jaGlsZDtjYXNlIDEyOnJldHVybiBSKGEsYixiLnBlbmRpbmdQcm9wcy5jaGlsZHJlbixjKSxiLmNoaWxkO2Nhc2UgMTA6YTp7ZD1iLnR5cGUuX2NvbnRleHQ7XG5lPWIucGVuZGluZ1Byb3BzO2c9Yi5tZW1vaXplZFByb3BzO2Y9ZS52YWx1ZTtzZyhiLGYpO2lmKG51bGwhPT1nKXt2YXIgaD1nLnZhbHVlO2Y9b2YoaCxmKT8wOihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHM/ZC5fY2FsY3VsYXRlQ2hhbmdlZEJpdHMoaCxmKToxMDczNzQxODIzKXwwO2lmKDA9PT1mKXtpZihnLmNoaWxkcmVuPT09ZS5jaGlsZHJlbiYmIUsuY3VycmVudCl7Yj1vaShhLGIsYyk7YnJlYWsgYX19ZWxzZSBmb3IoaD1iLmNoaWxkLG51bGwhPT1oJiYoaC5yZXR1cm49Yik7bnVsbCE9PWg7KXt2YXIgaz1oLmRlcGVuZGVuY2llcztpZihudWxsIT09ayl7Zz1oLmNoaWxkO2Zvcih2YXIgbD1rLmZpcnN0Q29udGV4dDtudWxsIT09bDspe2lmKGwuY29udGV4dD09PWQmJjAhPT0obC5vYnNlcnZlZEJpdHMmZikpezE9PT1oLnRhZyYmKGw9QmcoYyxudWxsKSxsLnRhZz0yLERnKGgsbCkpO2guZXhwaXJhdGlvblRpbWU8YyYmKGguZXhwaXJhdGlvblRpbWU9XG5jKTtsPWguYWx0ZXJuYXRlO251bGwhPT1sJiZsLmV4cGlyYXRpb25UaW1lPGMmJihsLmV4cGlyYXRpb25UaW1lPWMpO3VnKGgucmV0dXJuLGMpO2suZXhwaXJhdGlvblRpbWU8YyYmKGsuZXhwaXJhdGlvblRpbWU9Yyk7YnJlYWt9bD1sLm5leHR9fWVsc2UgZz0xMD09PWgudGFnP2gudHlwZT09PWIudHlwZT9udWxsOmguY2hpbGQ6aC5jaGlsZDtpZihudWxsIT09ZylnLnJldHVybj1oO2Vsc2UgZm9yKGc9aDtudWxsIT09Zzspe2lmKGc9PT1iKXtnPW51bGw7YnJlYWt9aD1nLnNpYmxpbmc7aWYobnVsbCE9PWgpe2gucmV0dXJuPWcucmV0dXJuO2c9aDticmVha31nPWcucmV0dXJufWg9Z319UihhLGIsZS5jaGlsZHJlbixjKTtiPWIuY2hpbGR9cmV0dXJuIGI7Y2FzZSA5OnJldHVybiBlPWIudHlwZSxmPWIucGVuZGluZ1Byb3BzLGQ9Zi5jaGlsZHJlbix2ZyhiLGMpLGU9eGcoZSxmLnVuc3RhYmxlX29ic2VydmVkQml0cyksZD1kKGUpLGIuZWZmZWN0VGFnfD0xLFIoYSxiLGQsYyksYi5jaGlsZDtcbmNhc2UgMTQ6cmV0dXJuIGU9Yi50eXBlLGY9bWcoZSxiLnBlbmRpbmdQcm9wcyksZj1tZyhlLnR5cGUsZikscGkoYSxiLGUsZixkLGMpO2Nhc2UgMTU6cmV0dXJuIHJpKGEsYixiLnR5cGUsYi5wZW5kaW5nUHJvcHMsZCxjKTtjYXNlIDE3OnJldHVybiBkPWIudHlwZSxlPWIucGVuZGluZ1Byb3BzLGU9Yi5lbGVtZW50VHlwZT09PWQ/ZTptZyhkLGUpLG51bGwhPT1hJiYoYS5hbHRlcm5hdGU9bnVsbCxiLmFsdGVybmF0ZT1udWxsLGIuZWZmZWN0VGFnfD0yKSxiLnRhZz0xLEwoZCk/KGE9ITAsSmYoYikpOmE9ITEsdmcoYixjKSxVZyhiLGQsZSxjKSxXZyhiLGQsZSxjKSx2aShudWxsLGIsZCwhMCxhLGMpO2Nhc2UgMTk6cmV0dXJuIEJpKGEsYixjKX10aHJvdyBFcnJvcih1KDE1NixiLnRhZykpO307dmFyIGtrPW51bGwsV2k9bnVsbDtcbmZ1bmN0aW9uIG9rKGEpe2lmKFwidW5kZWZpbmVkXCI9PT10eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fKXJldHVybiExO3ZhciBiPV9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXztpZihiLmlzRGlzYWJsZWR8fCFiLnN1cHBvcnRzRmliZXIpcmV0dXJuITA7dHJ5e3ZhciBjPWIuaW5qZWN0KGEpO2trPWZ1bmN0aW9uKGEpe3RyeXtiLm9uQ29tbWl0RmliZXJSb290KGMsYSx2b2lkIDAsNjQ9PT0oYS5jdXJyZW50LmVmZmVjdFRhZyY2NCkpfWNhdGNoKGUpe319O1dpPWZ1bmN0aW9uKGEpe3RyeXtiLm9uQ29tbWl0RmliZXJVbm1vdW50KGMsYSl9Y2F0Y2goZSl7fX19Y2F0Y2goZCl7fXJldHVybiEwfVxuZnVuY3Rpb24gcGsoYSxiLGMsZCl7dGhpcy50YWc9YTt0aGlzLmtleT1jO3RoaXMuc2libGluZz10aGlzLmNoaWxkPXRoaXMucmV0dXJuPXRoaXMuc3RhdGVOb2RlPXRoaXMudHlwZT10aGlzLmVsZW1lbnRUeXBlPW51bGw7dGhpcy5pbmRleD0wO3RoaXMucmVmPW51bGw7dGhpcy5wZW5kaW5nUHJvcHM9Yjt0aGlzLmRlcGVuZGVuY2llcz10aGlzLm1lbW9pemVkU3RhdGU9dGhpcy51cGRhdGVRdWV1ZT10aGlzLm1lbW9pemVkUHJvcHM9bnVsbDt0aGlzLm1vZGU9ZDt0aGlzLmVmZmVjdFRhZz0wO3RoaXMubGFzdEVmZmVjdD10aGlzLmZpcnN0RWZmZWN0PXRoaXMubmV4dEVmZmVjdD1udWxsO3RoaXMuY2hpbGRFeHBpcmF0aW9uVGltZT10aGlzLmV4cGlyYXRpb25UaW1lPTA7dGhpcy5hbHRlcm5hdGU9bnVsbH1mdW5jdGlvbiBnaShhLGIsYyxkKXtyZXR1cm4gbmV3IHBrKGEsYixjLGQpfVxuZnVuY3Rpb24gcWkoYSl7YT1hLnByb3RvdHlwZTtyZXR1cm4hKCFhfHwhYS5pc1JlYWN0Q29tcG9uZW50KX1mdW5jdGlvbiBuayhhKXtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlyZXR1cm4gcWkoYSk/MTowO2lmKHZvaWQgMCE9PWEmJm51bGwhPT1hKXthPWEuJCR0eXBlb2Y7aWYoYT09PU9hKXJldHVybiAxMTtpZihhPT09UmEpcmV0dXJuIDE0fXJldHVybiAyfVxuZnVuY3Rpb24gYWgoYSxiKXt2YXIgYz1hLmFsdGVybmF0ZTtudWxsPT09Yz8oYz1naShhLnRhZyxiLGEua2V5LGEubW9kZSksYy5lbGVtZW50VHlwZT1hLmVsZW1lbnRUeXBlLGMudHlwZT1hLnR5cGUsYy5zdGF0ZU5vZGU9YS5zdGF0ZU5vZGUsYy5hbHRlcm5hdGU9YSxhLmFsdGVybmF0ZT1jKTooYy5wZW5kaW5nUHJvcHM9YixjLmVmZmVjdFRhZz0wLGMubmV4dEVmZmVjdD1udWxsLGMuZmlyc3RFZmZlY3Q9bnVsbCxjLmxhc3RFZmZlY3Q9bnVsbCk7Yy5jaGlsZEV4cGlyYXRpb25UaW1lPWEuY2hpbGRFeHBpcmF0aW9uVGltZTtjLmV4cGlyYXRpb25UaW1lPWEuZXhwaXJhdGlvblRpbWU7Yy5jaGlsZD1hLmNoaWxkO2MubWVtb2l6ZWRQcm9wcz1hLm1lbW9pemVkUHJvcHM7Yy5tZW1vaXplZFN0YXRlPWEubWVtb2l6ZWRTdGF0ZTtjLnVwZGF0ZVF1ZXVlPWEudXBkYXRlUXVldWU7Yj1hLmRlcGVuZGVuY2llcztjLmRlcGVuZGVuY2llcz1udWxsPT09Yj9udWxsOntleHBpcmF0aW9uVGltZTpiLmV4cGlyYXRpb25UaW1lLFxuZmlyc3RDb250ZXh0OmIuZmlyc3RDb250ZXh0LHJlc3BvbmRlcnM6Yi5yZXNwb25kZXJzfTtjLnNpYmxpbmc9YS5zaWJsaW5nO2MuaW5kZXg9YS5pbmRleDtjLnJlZj1hLnJlZjtyZXR1cm4gY31cbmZ1bmN0aW9uIGNoKGEsYixjLGQsZSxmKXt2YXIgZz0yO2Q9YTtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgYSlxaShhKSYmKGc9MSk7ZWxzZSBpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpZz01O2Vsc2UgYTpzd2l0Y2goYSl7Y2FzZSBJYTpyZXR1cm4gZWgoYy5jaGlsZHJlbixlLGYsYik7Y2FzZSBOYTpnPTg7ZXw9NzticmVhaztjYXNlIEphOmc9ODtlfD0xO2JyZWFrO2Nhc2UgS2E6cmV0dXJuIGE9Z2koMTIsYyxiLGV8OCksYS5lbGVtZW50VHlwZT1LYSxhLnR5cGU9S2EsYS5leHBpcmF0aW9uVGltZT1mLGE7Y2FzZSBQYTpyZXR1cm4gYT1naSgxMyxjLGIsZSksYS50eXBlPVBhLGEuZWxlbWVudFR5cGU9UGEsYS5leHBpcmF0aW9uVGltZT1mLGE7Y2FzZSBRYTpyZXR1cm4gYT1naSgxOSxjLGIsZSksYS5lbGVtZW50VHlwZT1RYSxhLmV4cGlyYXRpb25UaW1lPWYsYTtkZWZhdWx0OmlmKFwib2JqZWN0XCI9PT10eXBlb2YgYSYmbnVsbCE9PWEpc3dpdGNoKGEuJCR0eXBlb2Ype2Nhc2UgTGE6Zz1cbjEwO2JyZWFrIGE7Y2FzZSBNYTpnPTk7YnJlYWsgYTtjYXNlIE9hOmc9MTE7YnJlYWsgYTtjYXNlIFJhOmc9MTQ7YnJlYWsgYTtjYXNlIFNhOmc9MTY7ZD1udWxsO2JyZWFrIGF9dGhyb3cgRXJyb3IodSgxMzAsbnVsbD09YT9hOnR5cGVvZiBhLFwiXCIpKTt9Yj1naShnLGMsYixlKTtiLmVsZW1lbnRUeXBlPWE7Yi50eXBlPWQ7Yi5leHBpcmF0aW9uVGltZT1mO3JldHVybiBifWZ1bmN0aW9uIGVoKGEsYixjLGQpe2E9Z2koNyxhLGQsYik7YS5leHBpcmF0aW9uVGltZT1jO3JldHVybiBhfWZ1bmN0aW9uIGJoKGEsYixjKXthPWdpKDYsYSxudWxsLGIpO2EuZXhwaXJhdGlvblRpbWU9YztyZXR1cm4gYX1cbmZ1bmN0aW9uIGRoKGEsYixjKXtiPWdpKDQsbnVsbCE9PWEuY2hpbGRyZW4/YS5jaGlsZHJlbjpbXSxhLmtleSxiKTtiLmV4cGlyYXRpb25UaW1lPWM7Yi5zdGF0ZU5vZGU9e2NvbnRhaW5lckluZm86YS5jb250YWluZXJJbmZvLHBlbmRpbmdDaGlsZHJlbjpudWxsLGltcGxlbWVudGF0aW9uOmEuaW1wbGVtZW50YXRpb259O3JldHVybiBifVxuZnVuY3Rpb24gcWsoYSxiLGMpe3RoaXMudGFnPWI7dGhpcy5jdXJyZW50PW51bGw7dGhpcy5jb250YWluZXJJbmZvPWE7dGhpcy5waW5nQ2FjaGU9dGhpcy5wZW5kaW5nQ2hpbGRyZW49bnVsbDt0aGlzLmZpbmlzaGVkRXhwaXJhdGlvblRpbWU9MDt0aGlzLmZpbmlzaGVkV29yaz1udWxsO3RoaXMudGltZW91dEhhbmRsZT0tMTt0aGlzLnBlbmRpbmdDb250ZXh0PXRoaXMuY29udGV4dD1udWxsO3RoaXMuaHlkcmF0ZT1jO3RoaXMuY2FsbGJhY2tOb2RlPW51bGw7dGhpcy5jYWxsYmFja1ByaW9yaXR5PTkwO3RoaXMubGFzdEV4cGlyZWRUaW1lPXRoaXMubGFzdFBpbmdlZFRpbWU9dGhpcy5uZXh0S25vd25QZW5kaW5nTGV2ZWw9dGhpcy5sYXN0U3VzcGVuZGVkVGltZT10aGlzLmZpcnN0U3VzcGVuZGVkVGltZT10aGlzLmZpcnN0UGVuZGluZ1RpbWU9MH1cbmZ1bmN0aW9uIFBqKGEsYil7dmFyIGM9YS5maXJzdFN1c3BlbmRlZFRpbWU7YT1hLmxhc3RTdXNwZW5kZWRUaW1lO3JldHVybiAwIT09YyYmYz49YiYmYTw9Yn1mdW5jdGlvbiBNaihhLGIpe3ZhciBjPWEuZmlyc3RTdXNwZW5kZWRUaW1lLGQ9YS5sYXN0U3VzcGVuZGVkVGltZTtjPGImJihhLmZpcnN0U3VzcGVuZGVkVGltZT1iKTtpZihkPmJ8fDA9PT1jKWEubGFzdFN1c3BlbmRlZFRpbWU9YjtiPD1hLmxhc3RQaW5nZWRUaW1lJiYoYS5sYXN0UGluZ2VkVGltZT0wKTtiPD1hLmxhc3RFeHBpcmVkVGltZSYmKGEubGFzdEV4cGlyZWRUaW1lPTApfVxuZnVuY3Rpb24gTmooYSxiKXtiPmEuZmlyc3RQZW5kaW5nVGltZSYmKGEuZmlyc3RQZW5kaW5nVGltZT1iKTt2YXIgYz1hLmZpcnN0U3VzcGVuZGVkVGltZTswIT09YyYmKGI+PWM/YS5maXJzdFN1c3BlbmRlZFRpbWU9YS5sYXN0U3VzcGVuZGVkVGltZT1hLm5leHRLbm93blBlbmRpbmdMZXZlbD0wOmI+PWEubGFzdFN1c3BlbmRlZFRpbWUmJihhLmxhc3RTdXNwZW5kZWRUaW1lPWIrMSksYj5hLm5leHRLbm93blBlbmRpbmdMZXZlbCYmKGEubmV4dEtub3duUGVuZGluZ0xldmVsPWIpKX1mdW5jdGlvbiBSaihhLGIpe3ZhciBjPWEubGFzdEV4cGlyZWRUaW1lO2lmKDA9PT1jfHxjPmIpYS5sYXN0RXhwaXJlZFRpbWU9Yn1cbmZ1bmN0aW9uIHJrKGEsYixjLGQpe3ZhciBlPWIuY3VycmVudCxmPVBnKCksZz1NZy5zdXNwZW5zZTtmPVFnKGYsZSxnKTthOmlmKGMpe2M9Yy5fcmVhY3RJbnRlcm5hbEZpYmVyO2I6e2lmKGVjKGMpIT09Y3x8MSE9PWMudGFnKXRocm93IEVycm9yKHUoMTcwKSk7dmFyIGg9Yztkb3tzd2l0Y2goaC50YWcpe2Nhc2UgMzpoPWguc3RhdGVOb2RlLmNvbnRleHQ7YnJlYWsgYjtjYXNlIDE6aWYoTChoLnR5cGUpKXtoPWguc3RhdGVOb2RlLl9fcmVhY3RJbnRlcm5hbE1lbW9pemVkTWVyZ2VkQ2hpbGRDb250ZXh0O2JyZWFrIGJ9fWg9aC5yZXR1cm59d2hpbGUobnVsbCE9PWgpO3Rocm93IEVycm9yKHUoMTcxKSk7fWlmKDE9PT1jLnRhZyl7dmFyIGs9Yy50eXBlO2lmKEwoaykpe2M9SWYoYyxrLGgpO2JyZWFrIGF9fWM9aH1lbHNlIGM9Q2Y7bnVsbD09PWIuY29udGV4dD9iLmNvbnRleHQ9YzpiLnBlbmRpbmdDb250ZXh0PWM7Yj1CZyhmLGcpO2IucGF5bG9hZD17ZWxlbWVudDphfTtkPXZvaWQgMD09PVxuZD9udWxsOmQ7bnVsbCE9PWQmJihiLmNhbGxiYWNrPWQpO0RnKGUsYik7UmcoZSxmKTtyZXR1cm4gZn1mdW5jdGlvbiBzayhhKXthPWEuY3VycmVudDtpZighYS5jaGlsZClyZXR1cm4gbnVsbDtzd2l0Y2goYS5jaGlsZC50YWcpe2Nhc2UgNTpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGU7ZGVmYXVsdDpyZXR1cm4gYS5jaGlsZC5zdGF0ZU5vZGV9fWZ1bmN0aW9uIHRrKGEsYil7YT1hLm1lbW9pemVkU3RhdGU7bnVsbCE9PWEmJm51bGwhPT1hLmRlaHlkcmF0ZWQmJmEucmV0cnlUaW1lPGImJihhLnJldHJ5VGltZT1iKX1mdW5jdGlvbiB1ayhhLGIpe3RrKGEsYik7KGE9YS5hbHRlcm5hdGUpJiZ0ayhhLGIpfVxuZnVuY3Rpb24gdmsoYSxiLGMpe2M9bnVsbCE9YyYmITA9PT1jLmh5ZHJhdGU7dmFyIGQ9bmV3IHFrKGEsYixjKSxlPWdpKDMsbnVsbCxudWxsLDI9PT1iPzc6MT09PWI/MzowKTtkLmN1cnJlbnQ9ZTtlLnN0YXRlTm9kZT1kO2Fbd2VdPWQuY3VycmVudDtjJiYwIT09YiYmd2MoOT09PWEubm9kZVR5cGU/YTphLm93bmVyRG9jdW1lbnQpO3RoaXMuX2ludGVybmFsUm9vdD1kfXZrLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24oYSxiKXtyayhhLHRoaXMuX2ludGVybmFsUm9vdCxudWxsLHZvaWQgMD09PWI/bnVsbDpiKX07dmsucHJvdG90eXBlLnVubW91bnQ9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5faW50ZXJuYWxSb290LGM9dm9pZCAwPT09YT9udWxsOmEsZD1iLmNvbnRhaW5lckluZm87cmsobnVsbCxiLG51bGwsZnVuY3Rpb24oKXtkW3dlXT1udWxsO251bGwhPT1jJiZjKCl9KX07XG5mdW5jdGlvbiB3ayhhKXtyZXR1cm4hKCFhfHwxIT09YS5ub2RlVHlwZSYmOSE9PWEubm9kZVR5cGUmJjExIT09YS5ub2RlVHlwZSYmKDghPT1hLm5vZGVUeXBlfHxcIiByZWFjdC1tb3VudC1wb2ludC11bnN0YWJsZSBcIiE9PWEubm9kZVZhbHVlKSl9ZnVuY3Rpb24geWsoYSxiKXtifHwoYj1hPzk9PT1hLm5vZGVUeXBlP2EuZG9jdW1lbnRFbGVtZW50OmEuZmlyc3RDaGlsZDpudWxsLGI9ISghYnx8MSE9PWIubm9kZVR5cGV8fCFiLmhhc0F0dHJpYnV0ZShcImRhdGEtcmVhY3Ryb290XCIpKSk7aWYoIWIpZm9yKHZhciBjO2M9YS5sYXN0Q2hpbGQ7KWEucmVtb3ZlQ2hpbGQoYyk7cmV0dXJuIG5ldyB2ayhhLDAsYj97aHlkcmF0ZTohMH06dm9pZCAwKX1cbmZ1bmN0aW9uIHprKGEsYixjLGQsZSl7dmFyIGY9Yy5fcmVhY3RSb290Q29udGFpbmVyO2lmKGYpe3ZhciBnPWYuX2ludGVybmFsUm9vdDtpZihcImZ1bmN0aW9uXCI9PT10eXBlb2YgZSl7dmFyIGg9ZTtlPWZ1bmN0aW9uKCl7dmFyIGE9c2soZyk7aC5jYWxsKGEpfX1yayhiLGcsYSxlKX1lbHNle2Y9Yy5fcmVhY3RSb290Q29udGFpbmVyPXlrKGMsZCk7Zz1mLl9pbnRlcm5hbFJvb3Q7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGUpe3ZhciBrPWU7ZT1mdW5jdGlvbigpe3ZhciBhPXNrKGcpO2suY2FsbChhKX19Y2soZnVuY3Rpb24oKXtyayhiLGcsYSxlKX0pfXJldHVybiBzayhnKX1mdW5jdGlvbiBBayhhLGIsYyl7dmFyIGQ9Mzxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOm51bGw7cmV0dXJueyQkdHlwZW9mOkhhLGtleTpudWxsPT1kP251bGw6XCJcIitkLGNoaWxkcmVuOmEsY29udGFpbmVySW5mbzpiLGltcGxlbWVudGF0aW9uOmN9fVxuamM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9bGcoUGcoKSwxNTAsMTAwKTtSZyhhLGIpO3VrKGEsYil9fTtrYz1mdW5jdGlvbihhKXtpZigxMz09PWEudGFnKXtQZygpO3ZhciBiPWtnKys7UmcoYSxiKTt1ayhhLGIpfX07bGM9ZnVuY3Rpb24oYSl7aWYoMTM9PT1hLnRhZyl7dmFyIGI9UGcoKTtiPVFnKGIsYSxudWxsKTtSZyhhLGIpO3VrKGEsYil9fTtcblphPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYil7Y2FzZSBcImlucHV0XCI6RWIoYSxjKTtiPWMubmFtZTtpZihcInJhZGlvXCI9PT1jLnR5cGUmJm51bGwhPWIpe2ZvcihjPWE7Yy5wYXJlbnROb2RlOyljPWMucGFyZW50Tm9kZTtjPWMucXVlcnlTZWxlY3RvckFsbChcImlucHV0W25hbWU9XCIrSlNPTi5zdHJpbmdpZnkoXCJcIitiKSsnXVt0eXBlPVwicmFkaW9cIl0nKTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKXt2YXIgZD1jW2JdO2lmKGQhPT1hJiZkLmZvcm09PT1hLmZvcm0pe3ZhciBlPXllKGQpO2lmKCFlKXRocm93IEVycm9yKHUoOTApKTt6YihkKTtFYihkLGUpfX19YnJlYWs7Y2FzZSBcInRleHRhcmVhXCI6TWIoYSxjKTticmVhaztjYXNlIFwic2VsZWN0XCI6Yj1jLnZhbHVlLG51bGwhPWImJkpiKGEsISFjLm11bHRpcGxlLGIsITEpfX07ZWI9Yms7XG5mYj1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT1UO1R8PTQ7dHJ5e3JldHVybiBmZyg5OCxhLmJpbmQobnVsbCxiLGMsZCkpfWZpbmFsbHl7VD1lLFQ9PT1TJiZqZygpfX07Z2I9ZnVuY3Rpb24oKXsoVCYoMXxvanxwaikpPT09UyYmKGFrKCksU2ooKSl9O2hiPWZ1bmN0aW9uKGEsYil7dmFyIGM9VDtUfD0yO3RyeXtyZXR1cm4gYShiKX1maW5hbGx5e1Q9YyxUPT09UyYmamcoKX19O2Z1bmN0aW9uIEJrKGEsYil7dmFyIGM9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7aWYoIXdrKGIpKXRocm93IEVycm9yKHUoMjAwKSk7cmV0dXJuIEFrKGEsYixudWxsLGMpfVxudmFyIENrPXtjcmVhdGVQb3J0YWw6QmssZmluZERPTU5vZGU6ZnVuY3Rpb24oYSl7aWYobnVsbD09YSlyZXR1cm4gbnVsbDtpZigxPT09YS5ub2RlVHlwZSlyZXR1cm4gYTt2YXIgYj1hLl9yZWFjdEludGVybmFsRmliZXI7aWYodm9pZCAwPT09Yil7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEucmVuZGVyKXRocm93IEVycm9yKHUoMTg4KSk7dGhyb3cgRXJyb3IodSgyNjgsT2JqZWN0LmtleXMoYSkpKTt9YT1pYyhiKTthPW51bGw9PT1hP251bGw6YS5zdGF0ZU5vZGU7cmV0dXJuIGF9LGh5ZHJhdGU6ZnVuY3Rpb24oYSxiLGMpe2lmKCF3ayhiKSl0aHJvdyBFcnJvcih1KDIwMCkpO3JldHVybiB6ayhudWxsLGEsYiwhMCxjKX0scmVuZGVyOmZ1bmN0aW9uKGEsYixjKXtpZighd2soYikpdGhyb3cgRXJyb3IodSgyMDApKTtyZXR1cm4gemsobnVsbCxhLGIsITEsYyl9LHVuc3RhYmxlX3JlbmRlclN1YnRyZWVJbnRvQ29udGFpbmVyOmZ1bmN0aW9uKGEsYixjLGQpe2lmKCF3ayhjKSl0aHJvdyBFcnJvcih1KDIwMCkpO1xuaWYobnVsbD09YXx8dm9pZCAwPT09YS5fcmVhY3RJbnRlcm5hbEZpYmVyKXRocm93IEVycm9yKHUoMzgpKTtyZXR1cm4gemsoYSxiLGMsITEsZCl9LHVubW91bnRDb21wb25lbnRBdE5vZGU6ZnVuY3Rpb24oYSl7aWYoIXdrKGEpKXRocm93IEVycm9yKHUoNDApKTtyZXR1cm4gYS5fcmVhY3RSb290Q29udGFpbmVyPyhjayhmdW5jdGlvbigpe3prKG51bGwsbnVsbCxhLCExLGZ1bmN0aW9uKCl7YS5fcmVhY3RSb290Q29udGFpbmVyPW51bGw7YVt3ZV09bnVsbH0pfSksITApOiExfSx1bnN0YWJsZV9jcmVhdGVQb3J0YWw6ZnVuY3Rpb24oKXtyZXR1cm4gQmsuYXBwbHkodm9pZCAwLGFyZ3VtZW50cyl9LHVuc3RhYmxlX2JhdGNoZWRVcGRhdGVzOmJrLGZsdXNoU3luYzpmdW5jdGlvbihhLGIpe2lmKChUJihvanxwaikpIT09Uyl0aHJvdyBFcnJvcih1KDE4NykpO3ZhciBjPVQ7VHw9MTt0cnl7cmV0dXJuIGZnKDk5LGEuYmluZChudWxsLGIpKX1maW5hbGx5e1Q9YyxqZygpfX0sX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ6e0V2ZW50czpbQ2MsXG54ZSx5ZSxDYS5pbmplY3RFdmVudFBsdWdpbnNCeU5hbWUsZmEsU2MsZnVuY3Rpb24oYSl7eWEoYSxSYyl9LGNiLGRiLFBkLEJhLFNqLHtjdXJyZW50OiExfV19fTtcbihmdW5jdGlvbihhKXt2YXIgYj1hLmZpbmRGaWJlckJ5SG9zdEluc3RhbmNlO3JldHVybiBvayhuKHt9LGEse292ZXJyaWRlSG9va1N0YXRlOm51bGwsb3ZlcnJpZGVQcm9wczpudWxsLHNldFN1c3BlbnNlSGFuZGxlcjpudWxsLHNjaGVkdWxlVXBkYXRlOm51bGwsY3VycmVudERpc3BhdGNoZXJSZWY6RWEuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixmaW5kSG9zdEluc3RhbmNlQnlGaWJlcjpmdW5jdGlvbihhKXthPWljKGEpO3JldHVybiBudWxsPT09YT9udWxsOmEuc3RhdGVOb2RlfSxmaW5kRmliZXJCeUhvc3RJbnN0YW5jZTpmdW5jdGlvbihhKXtyZXR1cm4gYj9iKGEpOm51bGx9LGZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaDpudWxsLHNjaGVkdWxlUmVmcmVzaDpudWxsLHNjaGVkdWxlUm9vdDpudWxsLHNldFJlZnJlc2hIYW5kbGVyOm51bGwsZ2V0Q3VycmVudEZpYmVyOm51bGx9KSl9KSh7ZmluZEZpYmVyQnlIb3N0SW5zdGFuY2U6RmMsYnVuZGxlVHlwZTowLHZlcnNpb246XCIxNi4xMi4wXCIsXG5yZW5kZXJlclBhY2thZ2VOYW1lOlwicmVhY3QtZG9tXCJ9KTt2YXIgRGs9e2RlZmF1bHQ6Q2t9LEVrPURrJiZDa3x8RGs7bW9kdWxlLmV4cG9ydHM9RWsuZGVmYXVsdHx8RWs7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvc2NoZWR1bGVyLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3NjaGVkdWxlci5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYwLjE4LjBcbiAqIHNjaGVkdWxlci5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgZixnLGgsayxsO1xuaWYoXCJ1bmRlZmluZWRcIj09PXR5cGVvZiB3aW5kb3d8fFwiZnVuY3Rpb25cIiE9PXR5cGVvZiBNZXNzYWdlQ2hhbm5lbCl7dmFyIHA9bnVsbCxxPW51bGwsdD1mdW5jdGlvbigpe2lmKG51bGwhPT1wKXRyeXt2YXIgYT1leHBvcnRzLnVuc3RhYmxlX25vdygpO3AoITAsYSk7cD1udWxsfWNhdGNoKGIpe3Rocm93IHNldFRpbWVvdXQodCwwKSxiO319LHU9RGF0ZS5ub3coKTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiBEYXRlLm5vdygpLXV9O2Y9ZnVuY3Rpb24oYSl7bnVsbCE9PXA/c2V0VGltZW91dChmLDAsYSk6KHA9YSxzZXRUaW1lb3V0KHQsMCkpfTtnPWZ1bmN0aW9uKGEsYil7cT1zZXRUaW1lb3V0KGEsYil9O2g9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQocSl9O2s9ZnVuY3Rpb24oKXtyZXR1cm4hMX07bD1leHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKCl7fX1lbHNle3ZhciB3PXdpbmRvdy5wZXJmb3JtYW5jZSx4PXdpbmRvdy5EYXRlLFxueT13aW5kb3cuc2V0VGltZW91dCx6PXdpbmRvdy5jbGVhclRpbWVvdXQ7aWYoXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBjb25zb2xlKXt2YXIgQT13aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWU7XCJmdW5jdGlvblwiIT09dHlwZW9mIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IHJlcXVlc3RBbmltYXRpb25GcmFtZS4gTWFrZSBzdXJlIHRoYXQgeW91IGxvYWQgYSBwb2x5ZmlsbCBpbiBvbGRlciBicm93c2Vycy4gaHR0cHM6Ly9mYi5tZS9yZWFjdC1wb2x5ZmlsbHNcIik7XCJmdW5jdGlvblwiIT09dHlwZW9mIEEmJmNvbnNvbGUuZXJyb3IoXCJUaGlzIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IGNhbmNlbEFuaW1hdGlvbkZyYW1lLiBNYWtlIHN1cmUgdGhhdCB5b3UgbG9hZCBhIHBvbHlmaWxsIGluIG9sZGVyIGJyb3dzZXJzLiBodHRwczovL2ZiLm1lL3JlYWN0LXBvbHlmaWxsc1wiKX1pZihcIm9iamVjdFwiPT09XG50eXBlb2YgdyYmXCJmdW5jdGlvblwiPT09dHlwZW9mIHcubm93KWV4cG9ydHMudW5zdGFibGVfbm93PWZ1bmN0aW9uKCl7cmV0dXJuIHcubm93KCl9O2Vsc2V7dmFyIEI9eC5ub3coKTtleHBvcnRzLnVuc3RhYmxlX25vdz1mdW5jdGlvbigpe3JldHVybiB4Lm5vdygpLUJ9fXZhciBDPSExLEQ9bnVsbCxFPS0xLEY9NSxHPTA7az1mdW5jdGlvbigpe3JldHVybiBleHBvcnRzLnVuc3RhYmxlX25vdygpPj1HfTtsPWZ1bmN0aW9uKCl7fTtleHBvcnRzLnVuc3RhYmxlX2ZvcmNlRnJhbWVSYXRlPWZ1bmN0aW9uKGEpezA+YXx8MTI1PGE/Y29uc29sZS5lcnJvcihcImZvcmNlRnJhbWVSYXRlIHRha2VzIGEgcG9zaXRpdmUgaW50IGJldHdlZW4gMCBhbmQgMTI1LCBmb3JjaW5nIGZyYW1lcmF0ZXMgaGlnaGVyIHRoYW4gMTI1IGZwcyBpcyBub3QgdW5zdXBwb3J0ZWRcIik6Rj0wPGE/TWF0aC5mbG9vcigxRTMvYSk6NX07dmFyIEg9bmV3IE1lc3NhZ2VDaGFubmVsLEk9SC5wb3J0MjtILnBvcnQxLm9ubWVzc2FnZT1cbmZ1bmN0aW9uKCl7aWYobnVsbCE9PUQpe3ZhciBhPWV4cG9ydHMudW5zdGFibGVfbm93KCk7Rz1hK0Y7dHJ5e0QoITAsYSk/SS5wb3N0TWVzc2FnZShudWxsKTooQz0hMSxEPW51bGwpfWNhdGNoKGIpe3Rocm93IEkucG9zdE1lc3NhZ2UobnVsbCksYjt9fWVsc2UgQz0hMX07Zj1mdW5jdGlvbihhKXtEPWE7Q3x8KEM9ITAsSS5wb3N0TWVzc2FnZShudWxsKSl9O2c9ZnVuY3Rpb24oYSxiKXtFPXkoZnVuY3Rpb24oKXthKGV4cG9ydHMudW5zdGFibGVfbm93KCkpfSxiKX07aD1mdW5jdGlvbigpe3ooRSk7RT0tMX19ZnVuY3Rpb24gSihhLGIpe3ZhciBjPWEubGVuZ3RoO2EucHVzaChiKTthOmZvcig7Oyl7dmFyIGQ9TWF0aC5mbG9vcigoYy0xKS8yKSxlPWFbZF07aWYodm9pZCAwIT09ZSYmMDxLKGUsYikpYVtkXT1iLGFbY109ZSxjPWQ7ZWxzZSBicmVhayBhfX1mdW5jdGlvbiBMKGEpe2E9YVswXTtyZXR1cm4gdm9pZCAwPT09YT9udWxsOmF9XG5mdW5jdGlvbiBNKGEpe3ZhciBiPWFbMF07aWYodm9pZCAwIT09Yil7dmFyIGM9YS5wb3AoKTtpZihjIT09Yil7YVswXT1jO2E6Zm9yKHZhciBkPTAsZT1hLmxlbmd0aDtkPGU7KXt2YXIgbT0yKihkKzEpLTEsbj1hW21dLHY9bSsxLHI9YVt2XTtpZih2b2lkIDAhPT1uJiYwPksobixjKSl2b2lkIDAhPT1yJiYwPksocixuKT8oYVtkXT1yLGFbdl09YyxkPXYpOihhW2RdPW4sYVttXT1jLGQ9bSk7ZWxzZSBpZih2b2lkIDAhPT1yJiYwPksocixjKSlhW2RdPXIsYVt2XT1jLGQ9djtlbHNlIGJyZWFrIGF9fXJldHVybiBifXJldHVybiBudWxsfWZ1bmN0aW9uIEsoYSxiKXt2YXIgYz1hLnNvcnRJbmRleC1iLnNvcnRJbmRleDtyZXR1cm4gMCE9PWM/YzphLmlkLWIuaWR9dmFyIE49W10sTz1bXSxQPTEsUT1udWxsLFI9MyxTPSExLFQ9ITEsVT0hMTtcbmZ1bmN0aW9uIFYoYSl7Zm9yKHZhciBiPUwoTyk7bnVsbCE9PWI7KXtpZihudWxsPT09Yi5jYWxsYmFjaylNKE8pO2Vsc2UgaWYoYi5zdGFydFRpbWU8PWEpTShPKSxiLnNvcnRJbmRleD1iLmV4cGlyYXRpb25UaW1lLEooTixiKTtlbHNlIGJyZWFrO2I9TChPKX19ZnVuY3Rpb24gVyhhKXtVPSExO1YoYSk7aWYoIVQpaWYobnVsbCE9PUwoTikpVD0hMCxmKFgpO2Vsc2V7dmFyIGI9TChPKTtudWxsIT09YiYmZyhXLGIuc3RhcnRUaW1lLWEpfX1cbmZ1bmN0aW9uIFgoYSxiKXtUPSExO1UmJihVPSExLGgoKSk7Uz0hMDt2YXIgYz1SO3RyeXtWKGIpO2ZvcihRPUwoTik7bnVsbCE9PVEmJighKFEuZXhwaXJhdGlvblRpbWU+Yil8fGEmJiFrKCkpOyl7dmFyIGQ9US5jYWxsYmFjaztpZihudWxsIT09ZCl7US5jYWxsYmFjaz1udWxsO1I9US5wcmlvcml0eUxldmVsO3ZhciBlPWQoUS5leHBpcmF0aW9uVGltZTw9Yik7Yj1leHBvcnRzLnVuc3RhYmxlX25vdygpO1wiZnVuY3Rpb25cIj09PXR5cGVvZiBlP1EuY2FsbGJhY2s9ZTpRPT09TChOKSYmTShOKTtWKGIpfWVsc2UgTShOKTtRPUwoTil9aWYobnVsbCE9PVEpdmFyIG09ITA7ZWxzZXt2YXIgbj1MKE8pO251bGwhPT1uJiZnKFcsbi5zdGFydFRpbWUtYik7bT0hMX1yZXR1cm4gbX1maW5hbGx5e1E9bnVsbCxSPWMsUz0hMX19XG5mdW5jdGlvbiBZKGEpe3N3aXRjaChhKXtjYXNlIDE6cmV0dXJuLTE7Y2FzZSAyOnJldHVybiAyNTA7Y2FzZSA1OnJldHVybiAxMDczNzQxODIzO2Nhc2UgNDpyZXR1cm4gMUU0O2RlZmF1bHQ6cmV0dXJuIDVFM319dmFyIFo9bDtleHBvcnRzLnVuc3RhYmxlX0ltbWVkaWF0ZVByaW9yaXR5PTE7ZXhwb3J0cy51bnN0YWJsZV9Vc2VyQmxvY2tpbmdQcmlvcml0eT0yO2V4cG9ydHMudW5zdGFibGVfTm9ybWFsUHJpb3JpdHk9MztleHBvcnRzLnVuc3RhYmxlX0lkbGVQcmlvcml0eT01O2V4cG9ydHMudW5zdGFibGVfTG93UHJpb3JpdHk9NDtleHBvcnRzLnVuc3RhYmxlX3J1bldpdGhQcmlvcml0eT1mdW5jdGlvbihhLGIpe3N3aXRjaChhKXtjYXNlIDE6Y2FzZSAyOmNhc2UgMzpjYXNlIDQ6Y2FzZSA1OmJyZWFrO2RlZmF1bHQ6YT0zfXZhciBjPVI7Uj1hO3RyeXtyZXR1cm4gYigpfWZpbmFsbHl7Uj1jfX07XG5leHBvcnRzLnVuc3RhYmxlX25leHQ9ZnVuY3Rpb24oYSl7c3dpdGNoKFIpe2Nhc2UgMTpjYXNlIDI6Y2FzZSAzOnZhciBiPTM7YnJlYWs7ZGVmYXVsdDpiPVJ9dmFyIGM9UjtSPWI7dHJ5e3JldHVybiBhKCl9ZmluYWxseXtSPWN9fTtcbmV4cG9ydHMudW5zdGFibGVfc2NoZWR1bGVDYWxsYmFjaz1mdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtpZihcIm9iamVjdFwiPT09dHlwZW9mIGMmJm51bGwhPT1jKXt2YXIgZT1jLmRlbGF5O2U9XCJudW1iZXJcIj09PXR5cGVvZiBlJiYwPGU/ZCtlOmQ7Yz1cIm51bWJlclwiPT09dHlwZW9mIGMudGltZW91dD9jLnRpbWVvdXQ6WShhKX1lbHNlIGM9WShhKSxlPWQ7Yz1lK2M7YT17aWQ6UCsrLGNhbGxiYWNrOmIscHJpb3JpdHlMZXZlbDphLHN0YXJ0VGltZTplLGV4cGlyYXRpb25UaW1lOmMsc29ydEluZGV4Oi0xfTtlPmQ/KGEuc29ydEluZGV4PWUsSihPLGEpLG51bGw9PT1MKE4pJiZhPT09TChPKSYmKFU/aCgpOlU9ITAsZyhXLGUtZCkpKTooYS5zb3J0SW5kZXg9YyxKKE4sYSksVHx8U3x8KFQ9ITAsZihYKSkpO3JldHVybiBhfTtleHBvcnRzLnVuc3RhYmxlX2NhbmNlbENhbGxiYWNrPWZ1bmN0aW9uKGEpe2EuY2FsbGJhY2s9bnVsbH07XG5leHBvcnRzLnVuc3RhYmxlX3dyYXBDYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj1SO3JldHVybiBmdW5jdGlvbigpe3ZhciBjPVI7Uj1iO3RyeXtyZXR1cm4gYS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZmluYWxseXtSPWN9fX07ZXhwb3J0cy51bnN0YWJsZV9nZXRDdXJyZW50UHJpb3JpdHlMZXZlbD1mdW5jdGlvbigpe3JldHVybiBSfTtleHBvcnRzLnVuc3RhYmxlX3Nob3VsZFlpZWxkPWZ1bmN0aW9uKCl7dmFyIGE9ZXhwb3J0cy51bnN0YWJsZV9ub3coKTtWKGEpO3ZhciBiPUwoTik7cmV0dXJuIGIhPT1RJiZudWxsIT09USYmbnVsbCE9PWImJm51bGwhPT1iLmNhbGxiYWNrJiZiLnN0YXJ0VGltZTw9YSYmYi5leHBpcmF0aW9uVGltZTxRLmV4cGlyYXRpb25UaW1lfHxrKCl9O2V4cG9ydHMudW5zdGFibGVfcmVxdWVzdFBhaW50PVo7ZXhwb3J0cy51bnN0YWJsZV9jb250aW51ZUV4ZWN1dGlvbj1mdW5jdGlvbigpe1R8fFN8fChUPSEwLGYoWCkpfTtcbmV4cG9ydHMudW5zdGFibGVfcGF1c2VFeGVjdXRpb249ZnVuY3Rpb24oKXt9O2V4cG9ydHMudW5zdGFibGVfZ2V0Rmlyc3RDYWxsYmFja05vZGU9ZnVuY3Rpb24oKXtyZXR1cm4gTChOKX07ZXhwb3J0cy51bnN0YWJsZV9Qcm9maWxpbmc9bnVsbDtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3RQcm9wVHlwZXNTZWNyZXQgPSByZXF1aXJlKCcuL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldCcpO1xuXG5mdW5jdGlvbiBlbXB0eUZ1bmN0aW9uKCkge31cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQoKSB7fVxuZW1wdHlGdW5jdGlvbldpdGhSZXNldC5yZXNldFdhcm5pbmdDYWNoZSA9IGVtcHR5RnVuY3Rpb247XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIHNoaW0ocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBzZWNyZXQpIHtcbiAgICBpZiAoc2VjcmV0ID09PSBSZWFjdFByb3BUeXBlc1NlY3JldCkge1xuICAgICAgLy8gSXQgaXMgc3RpbGwgc2FmZSB3aGVuIGNhbGxlZCBmcm9tIFJlYWN0LlxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKFxuICAgICAgJ0NhbGxpbmcgUHJvcFR5cGVzIHZhbGlkYXRvcnMgZGlyZWN0bHkgaXMgbm90IHN1cHBvcnRlZCBieSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UuICcgK1xuICAgICAgJ1VzZSBQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMoKSB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgKTtcbiAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB0aHJvdyBlcnI7XG4gIH07XG4gIHNoaW0uaXNSZXF1aXJlZCA9IHNoaW07XG4gIGZ1bmN0aW9uIGdldFNoaW0oKSB7XG4gICAgcmV0dXJuIHNoaW07XG4gIH07XG4gIC8vIEltcG9ydGFudCFcbiAgLy8gS2VlcCB0aGlzIGxpc3QgaW4gc3luYyB3aXRoIHByb2R1Y3Rpb24gdmVyc2lvbiBpbiBgLi9mYWN0b3J5V2l0aFR5cGVDaGVja2Vycy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogc2hpbSxcbiAgICBib29sOiBzaGltLFxuICAgIGZ1bmM6IHNoaW0sXG4gICAgbnVtYmVyOiBzaGltLFxuICAgIG9iamVjdDogc2hpbSxcbiAgICBzdHJpbmc6IHNoaW0sXG4gICAgc3ltYm9sOiBzaGltLFxuXG4gICAgYW55OiBzaGltLFxuICAgIGFycmF5T2Y6IGdldFNoaW0sXG4gICAgZWxlbWVudDogc2hpbSxcbiAgICBlbGVtZW50VHlwZTogc2hpbSxcbiAgICBpbnN0YW5jZU9mOiBnZXRTaGltLFxuICAgIG5vZGU6IHNoaW0sXG4gICAgb2JqZWN0T2Y6IGdldFNoaW0sXG4gICAgb25lT2Y6IGdldFNoaW0sXG4gICAgb25lT2ZUeXBlOiBnZXRTaGltLFxuICAgIHNoYXBlOiBnZXRTaGltLFxuICAgIGV4YWN0OiBnZXRTaGltLFxuXG4gICAgY2hlY2tQcm9wVHlwZXM6IGVtcHR5RnVuY3Rpb25XaXRoUmVzZXQsXG4gICAgcmVzZXRXYXJuaW5nQ2FjaGU6IGVtcHR5RnVuY3Rpb25cbiAgfTtcblxuICBSZWFjdFByb3BUeXBlcy5Qcm9wVHlwZXMgPSBSZWFjdFByb3BUeXBlcztcblxuICByZXR1cm4gUmVhY3RQcm9wVHlwZXM7XG59O1xuIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9ICdTRUNSRVRfRE9fTk9UX1BBU1NfVEhJU19PUl9ZT1VfV0lMTF9CRV9GSVJFRCc7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3RQcm9wVHlwZXNTZWNyZXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuOC42XG4gKiByZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cyxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTtcbnZhciBiPVwiZnVuY3Rpb25cIj09PXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3IsYz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5lbGVtZW50XCIpOjYwMTAzLGQ9Yj9TeW1ib2wuZm9yKFwicmVhY3QucG9ydGFsXCIpOjYwMTA2LGU9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZnJhZ21lbnRcIik6NjAxMDcsZj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5zdHJpY3RfbW9kZVwiKTo2MDEwOCxnPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb2ZpbGVyXCIpOjYwMTE0LGg9Yj9TeW1ib2wuZm9yKFwicmVhY3QucHJvdmlkZXJcIik6NjAxMDksaz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb250ZXh0XCIpOjYwMTEwLGw9Yj9TeW1ib2wuZm9yKFwicmVhY3QuYXN5bmNfbW9kZVwiKTo2MDExMSxtPWI/U3ltYm9sLmZvcihcInJlYWN0LmNvbmN1cnJlbnRfbW9kZVwiKTo2MDExMSxuPWI/U3ltYm9sLmZvcihcInJlYWN0LmZvcndhcmRfcmVmXCIpOjYwMTEyLHA9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VcIik6NjAxMTMscT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpOlxuNjAxMTUscj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5sYXp5XCIpOjYwMTE2O2Z1bmN0aW9uIHQoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIGg6cmV0dXJuIGE7ZGVmYXVsdDpyZXR1cm4gdX19Y2FzZSByOmNhc2UgcTpjYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiB2KGEpe3JldHVybiB0KGEpPT09bX1leHBvcnRzLnR5cGVPZj10O2V4cG9ydHMuQXN5bmNNb2RlPWw7ZXhwb3J0cy5Db25jdXJyZW50TW9kZT1tO2V4cG9ydHMuQ29udGV4dENvbnN1bWVyPWs7ZXhwb3J0cy5Db250ZXh0UHJvdmlkZXI9aDtleHBvcnRzLkVsZW1lbnQ9YztleHBvcnRzLkZvcndhcmRSZWY9bjtcbmV4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9cjtleHBvcnRzLk1lbW89cTtleHBvcnRzLlBvcnRhbD1kO2V4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7ZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGU9ZnVuY3Rpb24oYSl7cmV0dXJuXCJzdHJpbmdcIj09PXR5cGVvZiBhfHxcImZ1bmN0aW9uXCI9PT10eXBlb2YgYXx8YT09PWV8fGE9PT1tfHxhPT09Z3x8YT09PWZ8fGE9PT1wfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXJ8fGEuJCR0eXBlb2Y9PT1xfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1uKX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4gdihhKXx8dChhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT12O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1rfTtcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ofTtleHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PXJ9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09cX07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4gdChhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB0KGEpPT09Zn07XG5leHBvcnRzLmlzU3VzcGVuc2U9ZnVuY3Rpb24oYSl7cmV0dXJuIHQoYSk9PT1wfTtcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTYuMTIuMFxuICogcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7XG52YXIgYj1cImZ1bmN0aW9uXCI9PT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuZm9yLGM9Yj9TeW1ib2wuZm9yKFwicmVhY3QuZWxlbWVudFwiKTo2MDEwMyxkPWI/U3ltYm9sLmZvcihcInJlYWN0LnBvcnRhbFwiKTo2MDEwNixlPWI/U3ltYm9sLmZvcihcInJlYWN0LmZyYWdtZW50XCIpOjYwMTA3LGY9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3RyaWN0X21vZGVcIik6NjAxMDgsZz1iP1N5bWJvbC5mb3IoXCJyZWFjdC5wcm9maWxlclwiKTo2MDExNCxoPWI/U3ltYm9sLmZvcihcInJlYWN0LnByb3ZpZGVyXCIpOjYwMTA5LGs9Yj9TeW1ib2wuZm9yKFwicmVhY3QuY29udGV4dFwiKTo2MDExMCxsPWI/U3ltYm9sLmZvcihcInJlYWN0LmFzeW5jX21vZGVcIik6NjAxMTEsbT1iP1N5bWJvbC5mb3IoXCJyZWFjdC5jb25jdXJyZW50X21vZGVcIik6NjAxMTEsbj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKTo2MDExMixwPWI/U3ltYm9sLmZvcihcInJlYWN0LnN1c3BlbnNlXCIpOjYwMTEzLHE9Yj9TeW1ib2wuZm9yKFwicmVhY3Quc3VzcGVuc2VfbGlzdFwiKTpcbjYwMTIwLHI9Yj9TeW1ib2wuZm9yKFwicmVhY3QubWVtb1wiKTo2MDExNSx0PWI/U3ltYm9sLmZvcihcInJlYWN0LmxhenlcIik6NjAxMTYsdj1iP1N5bWJvbC5mb3IoXCJyZWFjdC5mdW5kYW1lbnRhbFwiKTo2MDExNyx3PWI/U3ltYm9sLmZvcihcInJlYWN0LnJlc3BvbmRlclwiKTo2MDExOCx4PWI/U3ltYm9sLmZvcihcInJlYWN0LnNjb3BlXCIpOjYwMTE5O2Z1bmN0aW9uIHkoYSl7aWYoXCJvYmplY3RcIj09PXR5cGVvZiBhJiZudWxsIT09YSl7dmFyIHU9YS4kJHR5cGVvZjtzd2l0Y2godSl7Y2FzZSBjOnN3aXRjaChhPWEudHlwZSxhKXtjYXNlIGw6Y2FzZSBtOmNhc2UgZTpjYXNlIGc6Y2FzZSBmOmNhc2UgcDpyZXR1cm4gYTtkZWZhdWx0OnN3aXRjaChhPWEmJmEuJCR0eXBlb2YsYSl7Y2FzZSBrOmNhc2UgbjpjYXNlIHQ6Y2FzZSByOmNhc2UgaDpyZXR1cm4gYTtkZWZhdWx0OnJldHVybiB1fX1jYXNlIGQ6cmV0dXJuIHV9fX1mdW5jdGlvbiB6KGEpe3JldHVybiB5KGEpPT09bX1cbmV4cG9ydHMudHlwZU9mPXk7ZXhwb3J0cy5Bc3luY01vZGU9bDtleHBvcnRzLkNvbmN1cnJlbnRNb2RlPW07ZXhwb3J0cy5Db250ZXh0Q29uc3VtZXI9aztleHBvcnRzLkNvbnRleHRQcm92aWRlcj1oO2V4cG9ydHMuRWxlbWVudD1jO2V4cG9ydHMuRm9yd2FyZFJlZj1uO2V4cG9ydHMuRnJhZ21lbnQ9ZTtleHBvcnRzLkxhenk9dDtleHBvcnRzLk1lbW89cjtleHBvcnRzLlBvcnRhbD1kO2V4cG9ydHMuUHJvZmlsZXI9ZztleHBvcnRzLlN0cmljdE1vZGU9ZjtleHBvcnRzLlN1c3BlbnNlPXA7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50VHlwZT1mdW5jdGlvbihhKXtyZXR1cm5cInN0cmluZ1wiPT09dHlwZW9mIGF8fFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhfHxhPT09ZXx8YT09PW18fGE9PT1nfHxhPT09Znx8YT09PXB8fGE9PT1xfHxcIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiYoYS4kJHR5cGVvZj09PXR8fGEuJCR0eXBlb2Y9PT1yfHxhLiQkdHlwZW9mPT09aHx8YS4kJHR5cGVvZj09PWt8fGEuJCR0eXBlb2Y9PT1ufHxhLiQkdHlwZW9mPT09dnx8YS4kJHR5cGVvZj09PXd8fGEuJCR0eXBlb2Y9PT14KX07ZXhwb3J0cy5pc0FzeW5jTW9kZT1mdW5jdGlvbihhKXtyZXR1cm4geihhKXx8eShhKT09PWx9O2V4cG9ydHMuaXNDb25jdXJyZW50TW9kZT16O2V4cG9ydHMuaXNDb250ZXh0Q29uc3VtZXI9ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSk9PT1rfTtleHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyPWZ1bmN0aW9uKGEpe3JldHVybiB5KGEpPT09aH07XG5leHBvcnRzLmlzRWxlbWVudD1mdW5jdGlvbihhKXtyZXR1cm5cIm9iamVjdFwiPT09dHlwZW9mIGEmJm51bGwhPT1hJiZhLiQkdHlwZW9mPT09Y307ZXhwb3J0cy5pc0ZvcndhcmRSZWY9ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSk9PT1ufTtleHBvcnRzLmlzRnJhZ21lbnQ9ZnVuY3Rpb24oYSl7cmV0dXJuIHkoYSk9PT1lfTtleHBvcnRzLmlzTGF6eT1mdW5jdGlvbihhKXtyZXR1cm4geShhKT09PXR9O2V4cG9ydHMuaXNNZW1vPWZ1bmN0aW9uKGEpe3JldHVybiB5KGEpPT09cn07ZXhwb3J0cy5pc1BvcnRhbD1mdW5jdGlvbihhKXtyZXR1cm4geShhKT09PWR9O2V4cG9ydHMuaXNQcm9maWxlcj1mdW5jdGlvbihhKXtyZXR1cm4geShhKT09PWd9O2V4cG9ydHMuaXNTdHJpY3RNb2RlPWZ1bmN0aW9uKGEpe3JldHVybiB5KGEpPT09Zn07ZXhwb3J0cy5pc1N1c3BlbnNlPWZ1bmN0aW9uKGEpe3JldHVybiB5KGEpPT09cH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsTW9kdWxlKSB7XG5cdGlmICghb3JpZ2luYWxNb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XG5cdFx0dmFyIG1vZHVsZSA9IE9iamVjdC5jcmVhdGUob3JpZ2luYWxNb2R1bGUpO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImV4cG9ydHNcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZVxuXHRcdH0pO1xuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xuXHR9XG5cdHJldHVybiBtb2R1bGU7XG59O1xuIiwiaW1wb3J0ICcuL0FkZEJ1dHRvbi5zY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbnR5cGUgUHJvcHMgPSBSZWFjdC5BbGxIVE1MQXR0cmlidXRlczxIVE1MSW5wdXRFbGVtZW50PjtcblxuY2xhc3MgQWRkQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGlucHV0XG4gICAgICBjbGFzc05hbWU9J3VpLWFkZC1idXR0b24nIHR5cGU9J2J1dHRvbicgdmFsdWU9JyYjeDI3MWE7J1xuICAgICAgey4uLnRoaXMucHJvcHN9IC8+O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFkZEJ1dHRvbjtcbiIsImltcG9ydCAnLi9EZWxldGVCdXR0b24uc2Nzcyc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG50eXBlIFByb3BzID0gUmVhY3QuQWxsSFRNTEF0dHJpYnV0ZXM8SFRNTElucHV0RWxlbWVudD47XG5cbmNsYXNzIERlbGV0ZUJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxpbnB1dFxuICAgICAgY2xhc3NOYW1lPSd1aS1kZWxldGUtYnV0dG9uJyB0eXBlPSdidXR0b24nIHZhbHVlPScmI3gyNzE2OydcbiAgICAgIHsuLi50aGlzLnByb3BzfSAvPjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZWxldGVCdXR0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHByb21pc2VNaWRkbGV3YXJlO1xuXG52YXIgX2lzUHJvbWlzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImlzLXByb21pc2VcIikpO1xuXG52YXIgX2ZsdXhTdGFuZGFyZEFjdGlvbiA9IHJlcXVpcmUoXCJmbHV4LXN0YW5kYXJkLWFjdGlvblwiKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTsgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSAnZnVuY3Rpb24nKSB7IG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7IH0pKTsgfSBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBwcm9taXNlTWlkZGxld2FyZShfcmVmKSB7XG4gIHZhciBkaXNwYXRjaCA9IF9yZWYuZGlzcGF0Y2g7XG4gIHJldHVybiBmdW5jdGlvbiAobmV4dCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYWN0aW9uKSB7XG4gICAgICBpZiAoISgwLCBfZmx1eFN0YW5kYXJkQWN0aW9uLmlzRlNBKShhY3Rpb24pKSB7XG4gICAgICAgIHJldHVybiAoMCwgX2lzUHJvbWlzZS5kZWZhdWx0KShhY3Rpb24pID8gYWN0aW9uLnRoZW4oZGlzcGF0Y2gpIDogbmV4dChhY3Rpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gKDAsIF9pc1Byb21pc2UuZGVmYXVsdCkoYWN0aW9uLnBheWxvYWQpID8gYWN0aW9uLnBheWxvYWQudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiBkaXNwYXRjaChfb2JqZWN0U3ByZWFkKHt9LCBhY3Rpb24sIHtcbiAgICAgICAgICBwYXlsb2FkOiByZXN1bHRcbiAgICAgICAgfSkpO1xuICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGRpc3BhdGNoKF9vYmplY3RTcHJlYWQoe30sIGFjdGlvbiwge1xuICAgICAgICAgIHBheWxvYWQ6IGVycm9yLFxuICAgICAgICAgIGVycm9yOiB0cnVlXG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcbiAgICAgIH0pIDogbmV4dChhY3Rpb24pO1xuICAgIH07XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSBpc1Byb21pc2U7XG5cbmZ1bmN0aW9uIGlzUHJvbWlzZShvYmopIHtcbiAgcmV0dXJuICEhb2JqICYmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyB8fCB0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2Ygb2JqLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfaXNTdHJpbmcyID0gcmVxdWlyZSgnbG9kYXNoL2lzU3RyaW5nJyk7XG5cbnZhciBfaXNTdHJpbmczID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNTdHJpbmcyKTtcblxudmFyIF9pc1BsYWluT2JqZWN0MiA9IHJlcXVpcmUoJ2xvZGFzaC9pc1BsYWluT2JqZWN0Jyk7XG5cbnZhciBfaXNQbGFpbk9iamVjdDMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1BsYWluT2JqZWN0Mik7XG5cbmV4cG9ydHMuaXNGU0EgPSBpc0ZTQTtcbmV4cG9ydHMuaXNFcnJvciA9IGlzRXJyb3I7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIGlzRlNBKGFjdGlvbikge1xuICByZXR1cm4gKDAsIF9pc1BsYWluT2JqZWN0My5kZWZhdWx0KShhY3Rpb24pICYmICgwLCBfaXNTdHJpbmczLmRlZmF1bHQpKGFjdGlvbi50eXBlKSAmJiBPYmplY3Qua2V5cyhhY3Rpb24pLmV2ZXJ5KGlzVmFsaWRLZXkpO1xufVxuXG5mdW5jdGlvbiBpc0Vycm9yKGFjdGlvbikge1xuICByZXR1cm4gaXNGU0EoYWN0aW9uKSAmJiBhY3Rpb24uZXJyb3IgPT09IHRydWU7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRLZXkoa2V5KSB7XG4gIHJldHVybiBbJ3R5cGUnLCAncGF5bG9hZCcsICdlcnJvcicsICdtZXRhJ10uaW5kZXhPZihrZXkpID4gLTE7XG59IiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgaXNBcnJheSA9IHJlcXVpcmUoJy4vaXNBcnJheScpLFxuICAgIGlzT2JqZWN0TGlrZSA9IHJlcXVpcmUoJy4vaXNPYmplY3RMaWtlJyk7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzdHJpbmdUYWcgPSAnW29iamVjdCBTdHJpbmddJztcblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN0cmluZ2AgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN0cmluZywgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3RyaW5nKCdhYmMnKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzU3RyaW5nKDEpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3RyaW5nJyB8fFxuICAgICghaXNBcnJheSh2YWx1ZSkgJiYgaXNPYmplY3RMaWtlKHZhbHVlKSAmJiBiYXNlR2V0VGFnKHZhbHVlKSA9PSBzdHJpbmdUYWcpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3RyaW5nO1xuIiwidmFyIGZyZWVHbG9iYWwgPSByZXF1aXJlKCcuL19mcmVlR2xvYmFsJyk7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxubW9kdWxlLmV4cG9ydHMgPSByb290O1xuIiwiLyoqIERldGVjdCBmcmVlIHZhcmlhYmxlIGBnbG9iYWxgIGZyb20gTm9kZS5qcy4gKi9cbnZhciBmcmVlR2xvYmFsID0gdHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwgJiYgZ2xvYmFsLk9iamVjdCA9PT0gT2JqZWN0ICYmIGdsb2JhbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmcmVlR2xvYmFsO1xuIiwidmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX1N5bWJvbCcpO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgb2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG4vKiogVXNlZCB0byBjaGVjayBvYmplY3RzIGZvciBvd24gcHJvcGVydGllcy4gKi9cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IG9iamVjdFByb3RvLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIFVzZWQgdG8gcmVzb2x2ZSB0aGVcbiAqIFtgdG9TdHJpbmdUYWdgXShodHRwOi8vZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1vYmplY3QucHJvdG90eXBlLnRvc3RyaW5nKVxuICogb2YgdmFsdWVzLlxuICovXG52YXIgbmF0aXZlT2JqZWN0VG9TdHJpbmcgPSBvYmplY3RQcm90by50b1N0cmluZztcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgc3ltVG9TdHJpbmdUYWcgPSBTeW1ib2wgPyBTeW1ib2wudG9TdHJpbmdUYWcgOiB1bmRlZmluZWQ7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlR2V0VGFnYCB3aGljaCBpZ25vcmVzIGBTeW1ib2wudG9TdHJpbmdUYWdgIHZhbHVlcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcXVlcnkuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSByYXcgYHRvU3RyaW5nVGFnYC5cbiAqL1xuZnVuY3Rpb24gZ2V0UmF3VGFnKHZhbHVlKSB7XG4gIHZhciBpc093biA9IGhhc093blByb3BlcnR5LmNhbGwodmFsdWUsIHN5bVRvU3RyaW5nVGFnKSxcbiAgICAgIHRhZyA9IHZhbHVlW3N5bVRvU3RyaW5nVGFnXTtcblxuICB0cnkge1xuICAgIHZhbHVlW3N5bVRvU3RyaW5nVGFnXSA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdW5tYXNrZWQgPSB0cnVlO1xuICB9IGNhdGNoIChlKSB7fVxuXG4gIHZhciByZXN1bHQgPSBuYXRpdmVPYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbiAgaWYgKHVubWFza2VkKSB7XG4gICAgaWYgKGlzT3duKSB7XG4gICAgICB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ10gPSB0YWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlbGV0ZSB2YWx1ZVtzeW1Ub1N0cmluZ1RhZ107XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UmF3VGFnO1xuIiwiLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG5hdGl2ZU9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIHN0cmluZyB1c2luZyBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBSZXR1cm5zIHRoZSBjb252ZXJ0ZWQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBvYmplY3RUb1N0cmluZyh2YWx1ZSkge1xuICByZXR1cm4gbmF0aXZlT2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb2JqZWN0VG9TdHJpbmc7XG4iLCIvKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGNsYXNzaWZpZWQgYXMgYW4gYEFycmF5YCBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gYXJyYXksIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc0FycmF5KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzQXJyYXkoXy5ub29wKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcblxubW9kdWxlLmV4cG9ydHMgPSBpc0FycmF5O1xuIiwidmFyIGJhc2VHZXRUYWcgPSByZXF1aXJlKCcuL19iYXNlR2V0VGFnJyksXG4gICAgZ2V0UHJvdG90eXBlID0gcmVxdWlyZSgnLi9fZ2V0UHJvdG90eXBlJyksXG4gICAgaXNPYmplY3RMaWtlID0gcmVxdWlyZSgnLi9pc09iamVjdExpa2UnKTtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFRhZyA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG4vKiogVXNlZCBmb3IgYnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMuICovXG52YXIgZnVuY1Byb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlLFxuICAgIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqIFVzZWQgdG8gcmVzb2x2ZSB0aGUgZGVjb21waWxlZCBzb3VyY2Ugb2YgZnVuY3Rpb25zLiAqL1xudmFyIGZ1bmNUb1N0cmluZyA9IGZ1bmNQcm90by50b1N0cmluZztcblxuLyoqIFVzZWQgdG8gY2hlY2sgb2JqZWN0cyBmb3Igb3duIHByb3BlcnRpZXMuICovXG52YXIgaGFzT3duUHJvcGVydHkgPSBvYmplY3RQcm90by5oYXNPd25Qcm9wZXJ0eTtcblxuLyoqIFVzZWQgdG8gaW5mZXIgdGhlIGBPYmplY3RgIGNvbnN0cnVjdG9yLiAqL1xudmFyIG9iamVjdEN0b3JTdHJpbmcgPSBmdW5jVG9TdHJpbmcuY2FsbChPYmplY3QpO1xuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIGEgcGxhaW4gb2JqZWN0LCB0aGF0IGlzLCBhbiBvYmplY3QgY3JlYXRlZCBieSB0aGVcbiAqIGBPYmplY3RgIGNvbnN0cnVjdG9yIG9yIG9uZSB3aXRoIGEgYFtbUHJvdG90eXBlXV1gIG9mIGBudWxsYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuOC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHBsYWluIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBmdW5jdGlvbiBGb28oKSB7XG4gKiAgIHRoaXMuYSA9IDE7XG4gKiB9XG4gKlxuICogXy5pc1BsYWluT2JqZWN0KG5ldyBGb28pO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzUGxhaW5PYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IGZhbHNlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KHsgJ3gnOiAwLCAneSc6IDAgfSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1BsYWluT2JqZWN0KE9iamVjdC5jcmVhdGUobnVsbCkpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KHZhbHVlKSB7XG4gIGlmICghaXNPYmplY3RMaWtlKHZhbHVlKSB8fCBiYXNlR2V0VGFnKHZhbHVlKSAhPSBvYmplY3RUYWcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHByb3RvID0gZ2V0UHJvdG90eXBlKHZhbHVlKTtcbiAgaWYgKHByb3RvID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIEN0b3IgPSBoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3RvLCAnY29uc3RydWN0b3InKSAmJiBwcm90by5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHR5cGVvZiBDdG9yID09ICdmdW5jdGlvbicgJiYgQ3RvciBpbnN0YW5jZW9mIEN0b3IgJiZcbiAgICBmdW5jVG9TdHJpbmcuY2FsbChDdG9yKSA9PSBvYmplY3RDdG9yU3RyaW5nO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGxhaW5PYmplY3Q7XG4iLCJ2YXIgb3ZlckFyZyA9IHJlcXVpcmUoJy4vX292ZXJBcmcnKTtcblxuLyoqIEJ1aWx0LWluIHZhbHVlIHJlZmVyZW5jZXMuICovXG52YXIgZ2V0UHJvdG90eXBlID0gb3ZlckFyZyhPYmplY3QuZ2V0UHJvdG90eXBlT2YsIE9iamVjdCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UHJvdG90eXBlO1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgdW5hcnkgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIGl0cyBhcmd1bWVudCB0cmFuc2Zvcm1lZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgYXJndW1lbnQgdHJhbnNmb3JtLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIG92ZXJBcmcoZnVuYywgdHJhbnNmb3JtKSB7XG4gIHJldHVybiBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gZnVuYyh0cmFuc2Zvcm0oYXJnKSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gb3ZlckFyZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgJy4vSW5wdXQuc2Nzcyc7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFJlYWN0LkFsbEhUTUxBdHRyaWJ1dGVzPEhUTUxFbGVtZW50PiB7XG4gIG5hbWU6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBlcnJvcj86IHN0cmluZztcbiAgbGFiZWw6IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb25WYWx1ZUNoYW5nZT86IChuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uQmx1cj86IChlOiBSZWFjdC5Gb2N1c0V2ZW50PEVsZW1lbnQ+KSA9PiB2b2lkO1xufVxuXG5jbGFzcyBJbnB1dCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICByZW5kZXJUZXh0KHByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IGlucHV0Q2xhc3NOYW1lID0gcHJvcHMuZXJyb3IgPyAnaW5wdXQtZXJyb3InIDogJyc7XG4gICAgY29uc3QgcHAgPSB7IC4uLnByb3BzIH07XG4gICAgZGVsZXRlIHBwLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5ncy11aS1pbnB1dCc+XG4gICAgICA8bGFiZWwgaHRtbEZvcj17cHJvcHMuaWR9PnsgcHJvcHMubGFiZWwgfTwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT0ndGV4dCcgY2xhc3NOYW1lPXtpbnB1dENsYXNzTmFtZX1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuYmluZE9uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIHsgLi4ucHAgfSAvPlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIHJlbmRlclJhZGlvKHByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IGlucHV0Q2xhc3NOYW1lID0gcHJvcHMuZXJyb3IgPyAnaW5wdXQtZXJyb3InIDogJyc7XG4gICAgY29uc3QgcHAgPSB7IC4uLnByb3BzIH07XG4gICAgZGVsZXRlIHBwLm9uVmFsdWVDaGFuZ2U7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdzZXR0aW5ncy11aS1pbnB1dCc+XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9J3JhZGlvJyBjbGFzc05hbWU9e2lucHV0Q2xhc3NOYW1lfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmJpbmRPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIHsgLi4ucHAgfSAvPlxuICAgICAgICB7IHByb3BzLmxhYmVsIH1cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgcmVuZGVyVGV4dEFyZWEocHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3QgaW5wdXRDbGFzc05hbWUgPSBwcm9wcy5lcnJvciA/ICdpbnB1dC1lcnJvcicgOiAnJztcbiAgICBjb25zdCBwcCA9IHsgLi4ucHJvcHMgfTtcbiAgICBkZWxldGUgcHAub25WYWx1ZUNoYW5nZTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J3NldHRpbmdzLXVpLWlucHV0Jz5cbiAgICAgIDxsYWJlbFxuICAgICAgICBodG1sRm9yPXtwcm9wcy5pZH1cbiAgICAgID57IHByb3BzLmxhYmVsIH08L2xhYmVsPlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT17aW5wdXRDbGFzc05hbWV9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmJpbmRPbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICB7IC4uLnBwIH0gLz5cbiAgICAgIDxwIGNsYXNzTmFtZT0nc2V0dGluZ3MtdWktaW5wdXQtZXJyb3InPnsgdGhpcy5wcm9wcy5lcnJvciB9PC9wPlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMudHlwZSkge1xuICAgIGNhc2UgJ3RleHQnOlxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyVGV4dCh0aGlzLnByb3BzKTtcbiAgICBjYXNlICdyYWRpbyc6XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJSYWRpbyh0aGlzLnByb3BzKTtcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJUZXh0QXJlYSh0aGlzLnByb3BzKTtcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS53YXJuKGBVbnN1cHBvcnRlZCBpbnB1dCB0eXBlICR7dHlwZX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBiaW5kT25DaGFuZ2UoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudHxIVE1MVGV4dEFyZWFFbGVtZW50Pikge1xuICAgIGlmICh0aGlzLnByb3BzLm9uVmFsdWVDaGFuZ2UpIHtcbiAgICAgIHRoaXMucHJvcHMub25WYWx1ZUNoYW5nZShlLnRhcmdldC5uYW1lLCBlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuIiwiaW1wb3J0IHtcbiAgSlNPTlRleHRTZXR0aW5ncywgRm9ybVNldHRpbmdzLCBTZXR0aW5nU291cmNlLFxufSBmcm9tICcuLi8uLi9zaGFyZWQvU2V0dGluZ0RhdGEnO1xuXG4vLyBTZXR0aW5nc1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdfU0VUX1NFVFRJTkdTID0gJ3NldHRpbmcuc2V0LnNldHRpbmdzJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HX1NIT1dfRVJST1IgPSAnc2V0dGluZy5zaG93LmVycm9yJztcbmV4cG9ydCBjb25zdCBTRVRUSU5HX1NXSVRDSF9UT19GT1JNID0gJ3NldHRpbmcuc3dpdGNoLnRvLmZvcm0nO1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdfU1dJVENIX1RPX0pTT04gPSAnc2V0dGluZy5zd2l0Y2gudG8uanNvbic7XG5cbmludGVyZmFjZSBTZXR0aW5nU2V0U2V0dGluZ3NBY2lvbiB7XG4gIHR5cGU6IHR5cGVvZiBTRVRUSU5HX1NFVF9TRVRUSU5HUztcbiAgc291cmNlOiBTZXR0aW5nU291cmNlO1xuICBqc29uPzogSlNPTlRleHRTZXR0aW5ncztcbiAgZm9ybT86IEZvcm1TZXR0aW5ncztcbn1cblxuaW50ZXJmYWNlIFNldHRpbmdTaG93RXJyb3JBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgU0VUVElOR19TSE9XX0VSUk9SO1xuICBlcnJvcjogc3RyaW5nO1xuICBqc29uOiBKU09OVGV4dFNldHRpbmdzO1xufVxuXG5pbnRlcmZhY2UgU2V0dGluZ1N3aXRjaFRvRm9ybUFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTRVRUSU5HX1NXSVRDSF9UT19GT1JNO1xuICBmb3JtOiBGb3JtU2V0dGluZ3MsXG59XG5cbmludGVyZmFjZSBTZXR0aW5nU3dpdGNoVG9Kc29uQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNFVFRJTkdfU1dJVENIX1RPX0pTT047XG4gIGpzb246IEpTT05UZXh0U2V0dGluZ3MsXG59XG5cbmV4cG9ydCB0eXBlIFNldHRpbmdBY3Rpb24gPVxuICBTZXR0aW5nU2V0U2V0dGluZ3NBY2lvbiB8IFNldHRpbmdTaG93RXJyb3JBY3Rpb24gfFxuICBTZXR0aW5nU3dpdGNoVG9Gb3JtQWN0aW9uIHwgU2V0dGluZ1N3aXRjaFRvSnNvbkFjdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBTZXR0aW5nc0NvbXBvbmVudCBmcm9tICcuL2NvbXBvbmVudHMnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycy9zZXR0aW5nJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHByb21pc2UgZnJvbSAncmVkdXgtcHJvbWlzZSc7XG5pbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxuICByZWR1Y2VyLFxuICBhcHBseU1pZGRsZXdhcmUocHJvbWlzZSksXG4pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpbXZpeGVuLXNldHRpbmdzJyk7XG4gIFJlYWN0RE9NLnJlbmRlcihcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgIDxTZXR0aW5nc0NvbXBvbmVudCBzdG9yZT17c3RvcmV9IC8+XG4gICAgPC9Qcm92aWRlcj4sXG4gICAgd3JhcHBlclxuICApO1xufSk7XG4iLCJpbXBvcnQgJy4vc2l0ZS5zY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vdWkvSW5wdXQnO1xuaW1wb3J0IFNlYXJjaEZvcm0gZnJvbSAnLi9mb3JtL1NlYXJjaEZvcm0nO1xuaW1wb3J0IEtleW1hcHNGb3JtIGZyb20gJy4vZm9ybS9LZXltYXBzRm9ybSc7XG5pbXBvcnQgQmxhY2tsaXN0Rm9ybSBmcm9tICcuL2Zvcm0vQmxhY2tsaXN0Rm9ybSc7XG5pbXBvcnQgUHJvcGVydGllc0Zvcm0gZnJvbSAnLi9mb3JtL1Byb3BlcnRpZXNGb3JtJztcbmltcG9ydCBQYXJ0aWFsQmxhY2tsaXN0Rm9ybSBmcm9tICcuL2Zvcm0vUGFydGlhbEJsYWNrbGlzdEZvcm0nO1xuaW1wb3J0ICogYXMgc2V0dGluZ0FjdGlvbnMgZnJvbSAnLi4vLi4vc2V0dGluZ3MvYWN0aW9ucy9zZXR0aW5nJztcbmltcG9ydCBTZXR0aW5nRGF0YSwge1xuICBGb3JtS2V5bWFwcywgRm9ybVNlYXJjaCwgRm9ybVNldHRpbmdzLCBKU09OVGV4dFNldHRpbmdzLFxufSBmcm9tICcuLi8uLi9zaGFyZWQvU2V0dGluZ0RhdGEnO1xuaW1wb3J0IHsgU3RhdGUgYXMgQXBwU3RhdGUgfSBmcm9tICcuLi9yZWR1Y2Vycy9zZXR0aW5nJztcbmltcG9ydCBQcm9wZXJ0aWVzIGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9Qcm9wZXJ0aWVzJztcbmltcG9ydCBCbGFja2xpc3QgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL0JsYWNrbGlzdCc7XG5cbmNvbnN0IERPX1lPVV9XQU5UX1RPX0NPTlRJTlVFID1cbiAgJ1NvbWUgc2V0dGluZ3MgaW4gSlNPTiBjYW4gYmUgbG9zdCB3aGVuIG1pZ3JhdGluZy4gICcgK1xuICAnRG8geW91IHdhbnQgdG8gY29udGludWU/JztcblxudHlwZSBTdGF0ZVByb3BzID0gUmV0dXJuVHlwZTx0eXBlb2YgbWFwU3RhdGVUb1Byb3BzPjtcbmludGVyZmFjZSBEaXNwYXRjaFByb3BzIHtcbiAgZGlzcGF0Y2g6IChhY3Rpb246IGFueSkgPT4gdm9pZCxcbn1cbnR5cGUgUHJvcHMgPSBTdGF0ZVByb3BzICYgRGlzcGF0Y2hQcm9wcyAmIHtcbiAgLy8gRklYTUVcbiAgc3RvcmU6IGFueTtcbn07XG5cbmNsYXNzIFNldHRpbmdzQ29tcG9uZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGluZ0FjdGlvbnMubG9hZCgpKTtcbiAgfVxuXG4gIHJlbmRlckZvcm1GaWVsZHMoZm9ybTogRm9ybVNldHRpbmdzKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgICA8ZmllbGRzZXQ+XG4gICAgICAgIDxsZWdlbmQ+S2V5YmluZGluZ3M8L2xlZ2VuZD5cbiAgICAgICAgPEtleW1hcHNGb3JtXG4gICAgICAgICAgdmFsdWU9e2Zvcm0ua2V5bWFwc31cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5iaW5kS2V5bWFwc0Zvcm0uYmluZCh0aGlzKX1cbiAgICAgICAgICBvbkJsdXI9e3RoaXMuc2F2ZS5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgPC9maWVsZHNldD5cbiAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgPGxlZ2VuZD5TZWFyY2ggRW5naW5lczwvbGVnZW5kPlxuICAgICAgICA8U2VhcmNoRm9ybVxuICAgICAgICAgIHZhbHVlPXtmb3JtLnNlYXJjaH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5iaW5kU2VhcmNoRm9ybS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5zYXZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPkJsYWNrbGlzdDwvbGVnZW5kPlxuICAgICAgICA8QmxhY2tsaXN0Rm9ybVxuICAgICAgICAgIHZhbHVlPXtmb3JtLmJsYWNrbGlzdH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5iaW5kQmxhY2tsaXN0Rm9ybS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5zYXZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPlBhcnRpYWwgYmxhY2tsaXN0PC9sZWdlbmQ+XG4gICAgICAgIDxQYXJ0aWFsQmxhY2tsaXN0Rm9ybVxuICAgICAgICAgIHZhbHVlPXtmb3JtLmJsYWNrbGlzdH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5iaW5kQmxhY2tsaXN0Rm9ybS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5zYXZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgICAgPGZpZWxkc2V0PlxuICAgICAgICA8bGVnZW5kPlByb3BlcnRpZXM8L2xlZ2VuZD5cbiAgICAgICAgPFByb3BlcnRpZXNGb3JtXG4gICAgICAgICAgdHlwZXM9e1Byb3BlcnRpZXMudHlwZXMoKX1cbiAgICAgICAgICB2YWx1ZT17Zm9ybS5wcm9wZXJ0aWVzLnRvSlNPTigpfVxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmJpbmRQcm9wZXJ0aWVzRm9ybS5iaW5kKHRoaXMpfVxuICAgICAgICAgIG9uQmx1cj17dGhpcy5zYXZlLmJpbmQodGhpcyl9XG4gICAgICAgIC8+XG4gICAgICA8L2ZpZWxkc2V0PlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIHJlbmRlckpzb25GaWVsZHMoanNvbjogSlNPTlRleHRTZXR0aW5ncywgZXJyb3I6IHN0cmluZykge1xuICAgIHJldHVybiA8ZGl2PlxuICAgICAgPElucHV0XG4gICAgICAgIHR5cGU9J3RleHRhcmVhJ1xuICAgICAgICBuYW1lPSdqc29uJ1xuICAgICAgICBsYWJlbD0nUGxhaW4gSlNPTidcbiAgICAgICAgc3BlbGxDaGVjaz17ZmFsc2V9XG4gICAgICAgIGVycm9yPXtlcnJvcn1cbiAgICAgICAgb25WYWx1ZUNoYW5nZT17dGhpcy5iaW5kSnNvbi5iaW5kKHRoaXMpfVxuICAgICAgICBvbkJsdXI9e3RoaXMuc2F2ZS5iaW5kKHRoaXMpfVxuICAgICAgICB2YWx1ZT17anNvbi50b0pTT05UZXh0KCl9XG4gICAgICAvPlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQgZmllbGRzID0gbnVsbDtcbiAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMucHJvcHMuZXJyb3IubGVuZ3RoID4gMDtcbiAgICBpZiAodGhpcy5wcm9wcy5zb3VyY2UgPT09ICdmb3JtJykge1xuICAgICAgZmllbGRzID0gdGhpcy5yZW5kZXJGb3JtRmllbGRzKHRoaXMucHJvcHMuZm9ybSEhKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucHJvcHMuc291cmNlID09PSAnanNvbicpIHtcbiAgICAgIGZpZWxkcyA9IHRoaXMucmVuZGVySnNvbkZpZWxkcyh0aGlzLnByb3BzLmpzb24hISwgdGhpcy5wcm9wcy5lcnJvcik7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q29uZmlndXJlIFZpbS1WaXhlbjwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndmltdml4ZW4tc2V0dGluZ3MtZm9ybSc+XG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB0eXBlPSdyYWRpbydcbiAgICAgICAgICAgIGlkPSdzZXR0aW5nLXNvdXJjZS1mb3JtJ1xuICAgICAgICAgICAgbmFtZT0nc291cmNlJ1xuICAgICAgICAgICAgbGFiZWw9J1VzZSBmb3JtJ1xuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5zb3VyY2UgPT09ICdmb3JtJ31cbiAgICAgICAgICAgIHZhbHVlPSdmb3JtJ1xuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17dGhpcy5iaW5kU291cmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XG5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHR5cGU9J3JhZGlvJ1xuICAgICAgICAgICAgbmFtZT0nc291cmNlJ1xuICAgICAgICAgICAgbGFiZWw9J1VzZSBwbGFpbiBKU09OJ1xuICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5zb3VyY2UgPT09ICdqc29uJ31cbiAgICAgICAgICAgIHZhbHVlPSdqc29uJ1xuICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17dGhpcy5iaW5kU291cmNlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9IC8+XG4gICAgICAgICAgeyBmaWVsZHMgfVxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgYmluZEtleW1hcHNGb3JtKHZhbHVlOiBGb3JtS2V5bWFwcykge1xuICAgIGNvbnN0IGRhdGEgPSBuZXcgU2V0dGluZ0RhdGEoe1xuICAgICAgc291cmNlOiB0aGlzLnByb3BzLnNvdXJjZSxcbiAgICAgIGZvcm06ICh0aGlzLnByb3BzLmZvcm0gYXMgRm9ybVNldHRpbmdzKS5idWlsZFdpdGhLZXltYXBzKHZhbHVlKSxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRpbmdBY3Rpb25zLnNldChkYXRhKSk7XG4gIH1cblxuICBiaW5kU2VhcmNoRm9ybSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBTZXR0aW5nRGF0YSh7XG4gICAgICBzb3VyY2U6IHRoaXMucHJvcHMuc291cmNlLFxuICAgICAgZm9ybTogKHRoaXMucHJvcHMuZm9ybSBhcyBGb3JtU2V0dGluZ3MpLmJ1aWxkV2l0aFNlYXJjaChcbiAgICAgICAgRm9ybVNlYXJjaC5mcm9tSlNPTih2YWx1ZSkpLFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGluZ0FjdGlvbnMuc2V0KGRhdGEpKTtcbiAgfVxuXG4gIGJpbmRCbGFja2xpc3RGb3JtKGJsYWNrbGlzdDogQmxhY2tsaXN0KSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBTZXR0aW5nRGF0YSh7XG4gICAgICBzb3VyY2U6IHRoaXMucHJvcHMuc291cmNlLFxuICAgICAgZm9ybTogKHRoaXMucHJvcHMuZm9ybSBhcyBGb3JtU2V0dGluZ3MpLmJ1aWxkV2l0aEJsYWNrbGlzdChibGFja2xpc3QpLFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGluZ0FjdGlvbnMuc2V0KGRhdGEpKTtcbiAgfVxuXG4gIGJpbmRQcm9wZXJ0aWVzRm9ybSh2YWx1ZTogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IG5ldyBTZXR0aW5nRGF0YSh7XG4gICAgICBzb3VyY2U6IHRoaXMucHJvcHMuc291cmNlLFxuICAgICAgZm9ybTogKHRoaXMucHJvcHMuZm9ybSBhcyBGb3JtU2V0dGluZ3MpLmJ1aWxkV2l0aFByb3BlcnRpZXMoXG4gICAgICAgIFByb3BlcnRpZXMuZnJvbUpTT04odmFsdWUpKVxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGluZ0FjdGlvbnMuc2V0KGRhdGEpKTtcbiAgfVxuXG4gIGJpbmRKc29uKF9uYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBkYXRhID0gbmV3IFNldHRpbmdEYXRhKHtcbiAgICAgIHNvdXJjZTogdGhpcy5wcm9wcy5zb3VyY2UsXG4gICAgICBqc29uOiBKU09OVGV4dFNldHRpbmdzLmZyb21UZXh0KHZhbHVlKSxcbiAgICB9KTtcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRpbmdBY3Rpb25zLnNldChkYXRhKSk7XG4gIH1cblxuICBiaW5kU291cmNlKF9uYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBmcm9tID0gdGhpcy5wcm9wcy5zb3VyY2U7XG4gICAgaWYgKGZyb20gPT09ICdmb3JtJyAmJiB2YWx1ZSA9PT0gJ2pzb24nKSB7XG4gICAgICB0aGlzLnByb3BzLmRpc3BhdGNoKHNldHRpbmdBY3Rpb25zLnN3aXRjaFRvSnNvbihcbiAgICAgICAgdGhpcy5wcm9wcy5mb3JtIGFzIEZvcm1TZXR0aW5ncykpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfSBlbHNlIGlmIChmcm9tID09PSAnanNvbicgJiYgdmFsdWUgPT09ICdmb3JtJykge1xuICAgICAgY29uc3QgYiA9IHdpbmRvdy5jb25maXJtKERPX1lPVV9XQU5UX1RPX0NPTlRJTlVFKTtcbiAgICAgIGlmICghYikge1xuICAgICAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goXG4gICAgICAgIHNldHRpbmdBY3Rpb25zLnN3aXRjaFRvRm9ybSh0aGlzLnByb3BzLmpzb24gYXMgSlNPTlRleHRTZXR0aW5ncykpO1xuICAgICAgdGhpcy5zYXZlKCk7XG4gICAgfVxuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCB7IHNvdXJjZSwganNvbiwgZm9ybSB9ID0gdGhpcy5wcm9wcy5zdG9yZS5nZXRTdGF0ZSgpO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0dGluZ0FjdGlvbnMuc2F2ZShcbiAgICAgIG5ldyBTZXR0aW5nRGF0YSh7IHNvdXJjZSwganNvbiwgZm9ybSB9KSxcbiAgICApKTtcbiAgfVxufVxuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGU6IEFwcFN0YXRlKSA9PiAoeyAuLi5zdGF0ZSB9KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFNldHRpbmdzQ29tcG9uZW50KTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vc2l0ZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgaWQgPSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vc2l0ZS5zY3NzXCI7XG52YXIgdXBkYXRlID0gYXBpKGlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZpbXZpeGVuLXNldHRpbmdzLWZvcm17cGFkZGluZzoycHh9LnZpbXZpeGVuLXNldHRpbmdzLWZvcm0gdGV4dGFyZWFbbmFtZT1qc29uXXtmb250LWZhbWlseTptb25vc3BhY2U7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjY0ZXg7cmVzaXplOnZlcnRpY2FsfS52aW12aXhlbi1zZXR0aW5ncy1mb3JtIGZpZWxkc2V0e21hcmdpbjowO3BhZGRpbmc6MDtib3JkZXI6bm9uZTttYXJnaW4tdG9wOjFyZW19LnZpbXZpeGVuLXNldHRpbmdzLWZvcm0gZmllbGRzZXQgZmllbGRzZXQ6Zmlyc3Qtb2YtdHlwZXttYXJnaW4tdG9wOjFyZW19LnZpbXZpeGVuLXNldHRpbmdzLWZvcm0gZmllbGRzZXQgbGVnZW5ke2ZvbnQtc2l6ZToxLjVyZW07cGFkZGluZzouNXJlbSAwO2ZvbnQtd2VpZ2h0OmJvbGR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vSW5wdXQuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIGlkID0gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXA9dHJ1ZSEuL0lucHV0LnNjc3NcIjtcbnZhciB1cGRhdGUgPSBhcGkoaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2V0dGluZ3MtdWktaW5wdXR7cGFnZS1icmVhay1pbnNpZGU6YXZvaWR9LnNldHRpbmdzLXVpLWlucHV0ICp7cGFnZS1icmVhay1pbnNpZGU6YXZvaWR9LnNldHRpbmdzLXVpLWlucHV0IGxhYmVse2ZvbnQtd2VpZ2h0OmJvbGQ7bWluLXdpZHRoOjE0cmVtO2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5zZXR0aW5ncy11aS1pbnB1dCBpbnB1dFt0eXBlPSd0ZXh0J117cGFkZGluZzo0cHg7d2lkdGg6OHJlbX0uc2V0dGluZ3MtdWktaW5wdXQgaW5wdXQuaW5wdXQtY3Jyb3IsLnNldHRpbmdzLXVpLWlucHV0IHRleHRhcmVhLmlucHV0LWVycm9ye2JveC1zaGFkb3c6MCAwIDJweCByZWR9LnNldHRpbmdzLXVpLWlucHV0LWVycm9ye2ZvbnQtd2VpZ2h0OmJvbGQ7Y29sb3I6cmVkO21pbi1oZWlnaHQ6MS41ZW19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCAnLi9TZWFyY2hGb3JtLnNjc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBZGRCdXR0b24gZnJvbSAnLi4vdWkvQWRkQnV0dG9uJztcbmltcG9ydCBEZWxldGVCdXR0b24gZnJvbSAnLi4vdWkvRGVsZXRlQnV0dG9uJztcbmltcG9ydCB7IEZvcm1TZWFyY2ggfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvU2V0dGluZ0RhdGEnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZTogRm9ybVNlYXJjaDtcbiAgb25DaGFuZ2U6ICh2YWx1ZTogRm9ybVNlYXJjaCkgPT4gdm9pZDtcbiAgb25CbHVyOiAoKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBTZWFyY2hGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFByb3BzPiB7XG4gIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzOiBQcm9wcyA9IHtcbiAgICB2YWx1ZTogRm9ybVNlYXJjaC5mcm9tSlNPTih7IGRlZmF1bHQ6ICcnLCBlbmdpbmVzOiBbXX0pLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMucHJvcHMudmFsdWUudG9KU09OKCk7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXNlYXJjaC1mb3JtJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXNlYXJjaC1mb3JtLWhlYWRlcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4tbmFtZSc+TmFtZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uLXVybCc+VVJMPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4tb3B0aW9uJz5EZWZhdWx0PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIHtcbiAgICAgICAgdmFsdWUuZW5naW5lcy5tYXAoKGVuZ2luZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2Zvcm0tc2VhcmNoLWZvcm0tcm93Jz5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLWluZGV4PXtpbmRleH0gdHlwZT0ndGV4dCcgbmFtZT0nbmFtZSdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2x1bW4tbmFtZScgdmFsdWU9e2VuZ2luZVswXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYmluZFZhbHVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGlucHV0IGRhdGEtaW5kZXg9e2luZGV4fSB0eXBlPSd0ZXh0JyBuYW1lPSd1cmwnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdodHRwOi8vZXhhbXBsZS5jb20vP3E9e30nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nY29sdW1uLXVybCcgdmFsdWU9e2VuZ2luZVsxXX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuYmluZFZhbHVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbHVtbi1vcHRpb24nPlxuICAgICAgICAgICAgICA8aW5wdXQgZGF0YS1pbmRleD17aW5kZXh9IHR5cGU9J3JhZGlvJyBuYW1lPSdkZWZhdWx0J1xuICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3ZhbHVlLmRlZmF1bHQgPT09IGVuZ2luZVswXX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5iaW5kVmFsdWUuYmluZCh0aGlzKX0gLz5cbiAgICAgICAgICAgICAgPERlbGV0ZUJ1dHRvbiBkYXRhLWluZGV4PXtpbmRleH0gbmFtZT0nZGVsZXRlJ1xuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYmluZFZhbHVlLmJpbmQodGhpcyl9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICA8QWRkQnV0dG9uIG5hbWU9J2FkZCcgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcgfX1cbiAgICAgICAgb25DbGljaz17dGhpcy5iaW5kVmFsdWUuYmluZCh0aGlzKX0gLz5cbiAgICA8L2Rpdj47XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgYmluZFZhbHVlKGU6IGFueSkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5wcm9wcy52YWx1ZS50b0pTT04oKTtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCBpbmRleCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtaW5kZXgnKSk7XG4gICAgY29uc3QgbmV4dDogdHlwZW9mIHZhbHVlID0ge1xuICAgICAgZGVmYXVsdDogdmFsdWUuZGVmYXVsdCxcbiAgICAgIGVuZ2luZXM6IHZhbHVlLmVuZ2luZXMuc2xpY2UoKSxcbiAgICB9O1xuXG4gICAgaWYgKG5hbWUgPT09ICduYW1lJykge1xuICAgICAgbmV4dC5lbmdpbmVzW2luZGV4XVswXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgbmV4dC5kZWZhdWx0ID0gdmFsdWUuZW5naW5lc1tpbmRleF1bMF07XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAndXJsJykge1xuICAgICAgbmV4dC5lbmdpbmVzW2luZGV4XVsxXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICBuZXh0LmRlZmF1bHQgPSB2YWx1ZS5lbmdpbmVzW2luZGV4XVswXTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdhZGQnKSB7XG4gICAgICBuZXh0LmVuZ2luZXMucHVzaChbJycsICcnXSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVsZXRlJyAmJiB2YWx1ZS5lbmdpbmVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIG5leHQuZW5naW5lcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgaWYgKHZhbHVlLmVuZ2luZXNbaW5kZXhdWzBdID09PSB2YWx1ZS5kZWZhdWx0KSB7XG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IE1hdGgubWluKGluZGV4LCBuZXh0LmVuZ2luZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgIG5leHQuZGVmYXVsdCA9IG5leHQuZW5naW5lc1tuZXh0SW5kZXhdWzBdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucHJvcHMub25DaGFuZ2UoRm9ybVNlYXJjaC5mcm9tSlNPTihuZXh0KSk7XG4gICAgaWYgKG5hbWUgPT09ICdkZWxldGUnIHx8IG5hbWUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgdGhpcy5wcm9wcy5vbkJsdXIoKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoRm9ybTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vU2VhcmNoRm9ybS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgaWQgPSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vU2VhcmNoRm9ybS5zY3NzXCI7XG52YXIgdXBkYXRlID0gYXBpKGlkLCBjb250ZW50LCBvcHRpb25zKTtcblxudmFyIGV4cG9ydGVkID0gY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHt9O1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlZDsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmZvcm0tc2VhcmNoLWZvcm0taGVhZGVye2Rpc3BsYXk6ZmxleDtmb250LXdlaWdodDpib2xkfS5mb3JtLXNlYXJjaC1mb3JtLWhlYWRlciAuY29sdW1uLW5hbWV7ZmxleDoxO21pbi13aWR0aDowfS5mb3JtLXNlYXJjaC1mb3JtLWhlYWRlciAuY29sdW1uLXVybHtmbGV4OjU7bWluLXdpZHRoOjB9LmZvcm0tc2VhcmNoLWZvcm0taGVhZGVyIC5jb2x1bW4tb3B0aW9ue3RleHQtYWxpZ246cmlnaHQ7ZmxleC1iYXNpczo1cmVtfS5mb3JtLXNlYXJjaC1mb3JtLXJvd3tkaXNwbGF5OmZsZXh9LmZvcm0tc2VhcmNoLWZvcm0tcm93IC5jb2x1bW4tbmFtZXtmbGV4OjE7bWluLXdpZHRoOjB9LmZvcm0tc2VhcmNoLWZvcm0tcm93IC5jb2x1bW4tdXJse2ZsZXg6NTttaW4td2lkdGg6MH0uZm9ybS1zZWFyY2gtZm9ybS1yb3cgLmNvbHVtbi1vcHRpb257dGV4dC1hbGlnbjpyaWdodDtmbGV4LWJhc2lzOjVyZW19XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vQWRkQnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciBpZCA9IFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwPXRydWUhLi9BZGRCdXR0b24uc2Nzc1wiO1xudmFyIHVwZGF0ZSA9IGFwaShpZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51aS1hZGQtYnV0dG9ue2JvcmRlcjpub25lO3BhZGRpbmc6NDtkaXNwbGF5OmlubGluZTtiYWNrZ3JvdW5kOm5vbmU7Zm9udC13ZWlnaHQ6Ym9sZDtjb2xvcjpncmVlbjtjdXJzb3I6cG9pbnRlcn0udWktYWRkLWJ1dHRvbjpob3Zlcntjb2xvcjpkYXJrZ3JlZW59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vRGVsZXRlQnV0dG9uLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciBpZCA9IFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwPXRydWUhLi9EZWxldGVCdXR0b24uc2Nzc1wiO1xudmFyIHVwZGF0ZSA9IGFwaShpZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi51aS1kZWxldGUtYnV0dG9ue2JvcmRlcjpub25lO3BhZGRpbmc6NDtkaXNwbGF5OmlubGluZTtiYWNrZ3JvdW5kOm5vbmU7Y29sb3I6cmVkO2N1cnNvcjpwb2ludGVyfS51aS1kZWxldGUtYnV0dG9uOmhvdmVye2NvbG9yOmRhcmtyZWR9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsImltcG9ydCAnLi9LZXltYXBzRm9ybS5zY3NzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi4vdWkvSW5wdXQnO1xuaW1wb3J0IGtleW1hcHMgZnJvbSAnLi4vLi4va2V5bWFwcyc7XG5pbXBvcnQgeyBGb3JtS2V5bWFwcyB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9TZXR0aW5nRGF0YSc7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHZhbHVlOiBGb3JtS2V5bWFwcztcbiAgb25DaGFuZ2U6IChlOiBGb3JtS2V5bWFwcykgPT4gdm9pZDtcbiAgb25CbHVyOiAoKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBLZXltYXBzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogUHJvcHMgPSB7XG4gICAgdmFsdWU6IEZvcm1LZXltYXBzLmZyb21KU09OKHt9KSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdmFsdWVzID0gdGhpcy5wcm9wcy52YWx1ZS50b0pTT04oKTtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvcm0ta2V5bWFwcy1mb3JtJz5cbiAgICAgIHtcbiAgICAgICAga2V5bWFwcy5maWVsZHMubWFwKChncm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXR1cm4gPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J2Zvcm0ta2V5bWFwcy1mb3JtLWZpZWxkLWdyb3VwJz5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZ3JvdXAubWFwKChbbmFtZSwgbGFiZWxdKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB2YWx1ZXNbbmFtZV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT0ndGV4dCcgaWQ9e25hbWV9IG5hbWU9e25hbWV9IGtleT17bmFtZX1cbiAgICAgICAgICAgICAgICAgIGxhYmVsPXtsYWJlbH0gdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25WYWx1ZUNoYW5nZT17dGhpcy5iaW5kVmFsdWUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICAgICAgLz47XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIGJpbmRWYWx1ZShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMucHJvcHMudmFsdWUuYnVpbGRXaXRoT3ZlcnJpZGUobmFtZSwgdmFsdWUpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBLZXltYXBzRm9ybTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vS2V5bWFwc0Zvcm0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIGlkID0gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXA9dHJ1ZSEuL0tleW1hcHNGb3JtLnNjc3NcIjtcbnZhciB1cGRhdGUgPSBhcGkoaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1rZXltYXBzLWZvcm17Y29sdW1uLWNvdW50OjN9LmZvcm0ta2V5bWFwcy1mb3JtLWZpZWxkLWdyb3Vwe21hcmdpbi10b3A6MjRweH0uZm9ybS1rZXltYXBzLWZvcm0tZmllbGQtZ3JvdXA6Zmlyc3Qtb2YtdHlwZXttYXJnaW4tdG9wOjI0cHh9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuY29uc3QgZmllbGRzID0gW1xuICBbXG4gICAgWydzY3JvbGwudmVydGljYWxseT97XCJjb3VudFwiOjF9JywgJ1Njcm9sbCBkb3duJ10sXG4gICAgWydzY3JvbGwudmVydGljYWxseT97XCJjb3VudFwiOi0xfScsICdTY3JvbGwgdXAnXSxcbiAgICBbJ3Njcm9sbC5ob3Jpem9uYWxseT97XCJjb3VudFwiOi0xfScsICdTY3JvbGwgbGVmdCddLFxuICAgIFsnc2Nyb2xsLmhvcml6b25hbGx5P3tcImNvdW50XCI6MX0nLCAnU2Nyb2xsIHJpZ2h0J10sXG4gICAgWydzY3JvbGwuaG9tZScsICdTY3JvbGwgdG8gbGVmdG1vc3QnXSxcbiAgICBbJ3Njcm9sbC5lbmQnLCAnU2Nyb2xsIHRvIHJpZ2h0bW9zdCddLFxuICAgIFsnc2Nyb2xsLnRvcCcsICdTY3JvbGwgdG8gdG9wJ10sXG4gICAgWydzY3JvbGwuYm90dG9tJywgJ1Njcm9sbCB0byBib3R0b20nXSxcbiAgICBbJ3Njcm9sbC5wYWdlcz97XCJjb3VudFwiOi0wLjV9JywgJ1Njcm9sbCB1cCBieSBoYWxmIG9mIHNjcmVlbiddLFxuICAgIFsnc2Nyb2xsLnBhZ2VzP3tcImNvdW50XCI6MC41fScsICdTY3JvbGwgZG93biBieSBoYWxmIG9mIHNjcmVlbiddLFxuICAgIFsnc2Nyb2xsLnBhZ2VzP3tcImNvdW50XCI6LTF9JywgJ1Njcm9sbCB1cCBieSBhIHNjcmVlbiddLFxuICAgIFsnc2Nyb2xsLnBhZ2VzP3tcImNvdW50XCI6MX0nLCAnU2Nyb2xsIGRvd24gYnkgYSBzY3JlZW4nXSxcbiAgXSwgW1xuICAgIFsnbWFyay5zZXQucHJlZml4JywgJ1NldCBtYXJrIGF0IGN1cnJlbnQgcG9zaXRpb24nXSxcbiAgICBbJ21hcmsuanVtcC5wcmVmaXgnLCAnSnVtcCB0byB0aGUgbWFyayddLFxuICBdLCBbXG4gICAgWyd0YWJzLmNsb3NlP3tcInNlbGVjdFwiOlwicmlnaHRcIn0nLCAnQ2xvc2UgYSB0YWInXSxcbiAgICBbJ3RhYnMuY2xvc2UucmlnaHQnLCAnQ2xvc2UgYWxsIHRhYnMgdG8gdGhlIHJpZ2h0J10sXG4gICAgWyd0YWJzLnJlb3BlbicsICdSZW9wZW4gY2xvc2VkIHRhYiddLFxuICAgIFsndGFicy5uZXh0JywgJ1NlbGVjdCBuZXh0IHRhYiddLFxuICAgIFsndGFicy5wcmV2JywgJ1NlbGVjdCBwcmV2IHRhYiddLFxuICAgIFsndGFicy5maXJzdCcsICdTZWxlY3QgZmlyc3QgdGFiJ10sXG4gICAgWyd0YWJzLmxhc3QnLCAnU2VsZWN0IGxhc3QgdGFiJ10sXG4gICAgWyd0YWJzLnJlbG9hZD97XCJjYWNoZVwiOmZhbHNlfScsICdSZWxvYWQgY3VycmVudCB0YWInXSxcbiAgICBbJ3RhYnMucmVsb2FkP3tcImNhY2hlXCI6dHJ1ZX0nLCAnUmVsb2FkIHdpdGggbm8gY2FjaGVzJ10sXG4gICAgWyd0YWJzLnBpbi50b2dnbGUnLCAnVG9nZ2xlIHBpbm5lZCBzdGF0ZSddLFxuICAgIFsndGFicy5kdXBsaWNhdGUnLCAnRHVwbGljYXRlIGEgdGFiJ10sXG4gIF0sIFtcbiAgICBbJ2ZvbGxvdy5zdGFydD97XCJuZXdUYWJcIjpmYWxzZSxcImJhY2tncm91bmRcIjpmYWxzZX0nLCAnRm9sbG93IGEgbGluayddLFxuICAgIFsnZm9sbG93LnN0YXJ0P3tcIm5ld1RhYlwiOnRydWUsXCJiYWNrZ3JvdW5kXCI6ZmFsc2V9JywgJ0ZvbGxvdyBhIGxpbmsgaW4gbmV3IHRhYiddLFxuICAgIFsnbmF2aWdhdGUuaGlzdG9yeS5wcmV2JywgJ0dvIGJhY2sgaW4gaGlzdG9yaWVzJ10sXG4gICAgWyduYXZpZ2F0ZS5oaXN0b3J5Lm5leHQnLCAnR28gZm9yd2FyZCBpbiBoaXN0b3JpZXMnXSxcbiAgICBbJ25hdmlnYXRlLmxpbmsubmV4dCcsICdPcGVuIG5leHQgbGluayddLFxuICAgIFsnbmF2aWdhdGUubGluay5wcmV2JywgJ09wZW4gcHJldmlvdXMgbGluayddLFxuICAgIFsnbmF2aWdhdGUucGFyZW50JywgJ0dvIHRvIHBhcmVudCBkaXJlY3RvcnknXSxcbiAgICBbJ25hdmlnYXRlLnJvb3QnLCAnR28gdG8gcm9vdCBkaXJlY3RvcnknXSxcbiAgICBbJ3BhZ2Uuc291cmNlJywgJ09wZW4gcGFnZSBzb3VyY2UnXSxcbiAgICBbJ3BhZ2UuaG9tZT97XCJuZXdUYWJcIjpmYWxzZX0nLCAnT3BlbiBzdGFydCBwYWdlIHRvIGN1cnJlbnQgdGFiJ10sXG4gICAgWydwYWdlLmhvbWU/e1wibmV3VGFiXCI6dHJ1ZX0nLCAnT3BlbiBzdGFydCBwYWdlIGluIG5ldyB0YWInXSxcbiAgICBbJ2ZvY3VzLmlucHV0JywgJ0ZvY3VzIGlucHV0J10sXG4gIF0sIFtcbiAgICBbJ2ZpbmQuc3RhcnQnLCAnU3RhcnQgZmluZCBtb2RlJ10sXG4gICAgWydmaW5kLm5leHQnLCAnRmluZCBuZXh0IHdvcmQnXSxcbiAgICBbJ2ZpbmQucHJldicsICdGaW5kIHByZXZpb3VzIHdvcmQnXSxcbiAgXSwgW1xuICAgIFsnY29tbWFuZC5zaG93JywgJ09wZW4gY29uc29sZSddLFxuICAgIFsnY29tbWFuZC5zaG93Lm9wZW4/e1wiYWx0ZXJcIjpmYWxzZX0nLCAnT3BlbiBVUkwnXSxcbiAgICBbJ2NvbW1hbmQuc2hvdy5vcGVuP3tcImFsdGVyXCI6dHJ1ZX0nLCAnQWx0ZXIgVVJMJ10sXG4gICAgWydjb21tYW5kLnNob3cudGFib3Blbj97XCJhbHRlclwiOmZhbHNlfScsICdPcGVuIFVSTCBpbiBuZXcgdGFiJ10sXG4gICAgWydjb21tYW5kLnNob3cudGFib3Blbj97XCJhbHRlclwiOnRydWV9JywgJ0FsdGVyIFVSTCBpbiBuZXcgdGFiJ10sXG4gICAgWydjb21tYW5kLnNob3cud2lub3Blbj97XCJhbHRlclwiOmZhbHNlfScsICdPcGVuIFVSTCBpbiBuZXcgd2luZG93J10sXG4gICAgWydjb21tYW5kLnNob3cud2lub3Blbj97XCJhbHRlclwiOnRydWV9JywgJ0FsdGVyIFVSTCBpbiBuZXcgd2luZG93J10sXG4gICAgWydjb21tYW5kLnNob3cuYnVmZmVyJywgJ09wZW4gYnVmZmVyIGNvbW1hbmQnXSxcbiAgICBbJ2NvbW1hbmQuc2hvdy5hZGRib29rbWFyaz97XCJhbHRlclwiOnRydWV9JywgJ09wZW4gYWRkYm9va21hcmsgY29tbWFuZCddLFxuICBdLCBbXG4gICAgWydhZGRvbi50b2dnbGUuZW5hYmxlZCcsICdFbmFibGUgb3IgZGlzYWJsZSddLFxuICAgIFsndXJscy55YW5rJywgJ0NvcHkgY3VycmVudCBVUkwnXSxcbiAgICBbJ3VybHMucGFzdGU/e1wibmV3VGFiXCI6ZmFsc2V9JywgJ09wZW4gY2xpcGJvYXJkXFwncyBVUkwgaW4gY3VycmVudCB0YWInXSxcbiAgICBbJ3VybHMucGFzdGU/e1wibmV3VGFiXCI6dHJ1ZX0nLCAnT3BlbiBjbGlwYm9hcmRcXCdzIFVSTCBpbiBuZXcgdGFiJ10sXG4gICAgWyd6b29tLmluJywgJ1pvb20taW4nXSxcbiAgICBbJ3pvb20ub3V0JywgJ1pvb20tb3V0J10sXG4gICAgWyd6b29tLm5ldXRyYWwnLCAnUmVzZXQgem9vbSBsZXZlbCddLFxuICAgIFsncmVwZWF0Lmxhc3QnLCAnUmVwZWF0IGxhc3QgY2hhbmdlJ10sXG4gIF1cbl07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZmllbGRzLFxufTtcbiIsImltcG9ydCAnLi9CbGFja2xpc3RGb3JtLnNjc3MnO1xuaW1wb3J0IEFkZEJ1dHRvbiBmcm9tICcuLi91aS9BZGRCdXR0b24nO1xuaW1wb3J0IERlbGV0ZUJ1dHRvbiBmcm9tICcuLi91aS9EZWxldGVCdXR0b24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbGFja2xpc3QsIHsgQmxhY2tsaXN0SXRlbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9CbGFja2xpc3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZTogQmxhY2tsaXN0O1xuICBvbkNoYW5nZTogKHZhbHVlOiBCbGFja2xpc3QpID0+IHZvaWQ7XG4gIG9uQmx1cjogKCkgPT4gdm9pZDtcbn1cblxuY2xhc3MgQmxhY2tsaXN0Rm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogUHJvcHMgPSB7XG4gICAgdmFsdWU6IG5ldyBCbGFja2xpc3QoW10pLFxuICAgIG9uQ2hhbmdlOiAoKSA9PiB7fSxcbiAgICBvbkJsdXI6ICgpID0+IHt9LFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvcm0tYmxhY2tsaXN0LWZvcm0nPlxuICAgICAge1xuICAgICAgICB0aGlzLnByb3BzLnZhbHVlLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICBpZiAoaXRlbS5wYXJ0aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdmb3JtLWJsYWNrbGlzdC1mb3JtLXJvdyc+XG4gICAgICAgICAgICA8aW5wdXQgZGF0YS1pbmRleD17aW5kZXh9IHR5cGU9J3RleHQnIG5hbWU9J3VybCdcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2x1bW4tdXJsJyB2YWx1ZT17aXRlbS5wYXR0ZXJufVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5iaW5kVmFsdWUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnByb3BzLm9uQmx1cn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RGVsZXRlQnV0dG9uIGRhdGEtaW5kZXg9e2luZGV4fSBuYW1lPSdkZWxldGUnXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuYmluZFZhbHVlLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PjtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIDxBZGRCdXR0b24gbmFtZT0nYWRkJyBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JyB9fVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmJpbmRWYWx1ZS5iaW5kKHRoaXMpfSAvPlxuICAgIDwvZGl2PjtcbiAgfVxuXG4gIGJpbmRWYWx1ZShlOiBhbnkpIHtcbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZTtcbiAgICBjb25zdCBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pbmRleCcpO1xuICAgIGNvbnN0IGl0ZW1zID0gdGhpcy5wcm9wcy52YWx1ZS5pdGVtcztcblxuICAgIGlmIChuYW1lID09PSAndXJsJykge1xuICAgICAgaXRlbXNbaW5kZXhdID0gbmV3IEJsYWNrbGlzdEl0ZW0oZS50YXJnZXQudmFsdWUsIGZhbHNlLCBbXSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnYWRkJykge1xuICAgICAgaXRlbXMucHVzaChuZXcgQmxhY2tsaXN0SXRlbSgnJywgZmFsc2UsIFtdKSk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnZGVsZXRlJykge1xuICAgICAgaXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5ldyBCbGFja2xpc3QoaXRlbXMpKTtcbiAgICBpZiAobmFtZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsYWNrbGlzdEZvcm07XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXA9dHJ1ZSEuL0JsYWNrbGlzdEZvcm0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIGlkID0gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXA9dHJ1ZSEuL0JsYWNrbGlzdEZvcm0uc2Nzc1wiO1xudmFyIHVwZGF0ZSA9IGFwaShpZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLWJsYWNrbGlzdC1mb3JtLXJvd3tkaXNwbGF5OmZsZXh9LmZvcm0tYmxhY2tsaXN0LWZvcm0tcm93IC5jb2x1bW4tdXJse2ZsZXg6MX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0ICcuL1Byb3BlcnRpZXNGb3JtLnNjc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdHlwZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9O1xuICB2YWx1ZToge1trZXk6IHN0cmluZ106IGFueX07XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZDtcbiAgb25CbHVyOiAoKSA9PiB2b2lkO1xufVxuXG5jbGFzcyBQcm9wZXJ0aWVzRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxQcm9wcz4ge1xuICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wczogUHJvcHMgPSB7XG4gICAgdHlwZXM6IHt9LFxuICAgIHZhbHVlOiB7fSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdHlwZXMgPSB0aGlzLnByb3BzLnR5cGVzO1xuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMucHJvcHMudmFsdWU7XG5cbiAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9J2Zvcm0tcHJvcGVydGllcy1mb3JtJz5cbiAgICAgIHtcbiAgICAgICAgT2JqZWN0LmtleXModHlwZXMpLm1hcCgobmFtZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHR5cGUgPSB0eXBlc1tuYW1lXTtcbiAgICAgICAgICBsZXQgaW5wdXRUeXBlID0gJyc7XG4gICAgICAgICAgbGV0IG9uQ2hhbmdlID0gdGhpcy5iaW5kVmFsdWUuYmluZCh0aGlzKTtcbiAgICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIGlucHV0VHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpbnB1dFR5cGUgPSAnbnVtYmVyJztcbiAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgaW5wdXRUeXBlID0gJ2NoZWNrYm94JztcblxuICAgICAgICAgICAgLy8gU2V0dGluZ3MgYXJlIHNhdmVkIG9uQmx1ciwgYnV0IGNoZWNrYm94IGRvZXMgbm90IGZpcmUgaXRcbiAgICAgICAgICAgIG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5iaW5kVmFsdWUoZSk7XG4gICAgICAgICAgICAgIHRoaXMucHJvcHMub25CbHVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtuYW1lfSBjbGFzc05hbWU9J2Zvcm0tcHJvcGVydGllcy1mb3JtLXJvdyc+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY29sdW1uLW5hbWUnPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e2lucHV0VHlwZX0gbmFtZT17bmFtZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbHVtbi1pbnB1dCdcbiAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWVzW25hbWVdID8gdmFsdWVzW25hbWVdIDogJyd9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG9uQmx1cj17dGhpcy5wcm9wcy5vbkJsdXJ9XG4gICAgICAgICAgICAgICAgY2hlY2tlZD17dmFsdWVzW25hbWVdfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj47XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgYmluZFZhbHVlKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgbmV4dCA9IHsgLi4udGhpcy5wcm9wcy52YWx1ZSB9O1xuICAgIGlmIChlLnRhcmdldC50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdjaGVja2JveCcpIHtcbiAgICAgIG5leHRbbmFtZV0gPSBlLnRhcmdldC5jaGVja2VkO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnbnVtYmVyJykge1xuICAgICAgbmV4dFtuYW1lXSA9IE51bWJlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRbbmFtZV0gPSBlLnRhcmdldC52YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnByb3BzLm9uQ2hhbmdlKG5leHQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb3BlcnRpZXNGb3JtO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/c291cmNlTWFwPXRydWUhLi9Qcm9wZXJ0aWVzRm9ybS5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgaWQgPSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vUHJvcGVydGllc0Zvcm0uc2Nzc1wiO1xudmFyIHVwZGF0ZSA9IGFwaShpZCwgY29udGVudCwgb3B0aW9ucyk7XG5cbnZhciBleHBvcnRlZCA9IGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB7fTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZWQ7IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mb3JtLXByb3BlcnRpZXMtZm9ybS1yb3cgLmNvbHVtbi1uYW1le2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDo1cmVtO2ZvbnQtd2VpZ2h0OmJvbGR9LmZvcm0tcHJvcGVydGllcy1mb3JtLXJvdyAuY29sdW1uLWlucHV0e2xpbmUtaGVpZ2h0OjIuMnJlbX1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0ICcuL1BhcnRpYWxCbGFja2xpc3RGb3JtLnNjc3MnO1xuaW1wb3J0IEFkZEJ1dHRvbiBmcm9tICcuLi91aS9BZGRCdXR0b24nO1xuaW1wb3J0IERlbGV0ZUJ1dHRvbiBmcm9tICcuLi91aS9EZWxldGVCdXR0b24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBCbGFja2xpc3QsIHsgQmxhY2tsaXN0SXRlbSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9CbGFja2xpc3QnO1xuXG5pbnRlcmZhY2UgUHJvcHMge1xuICB2YWx1ZTogQmxhY2tsaXN0O1xuICBvbkNoYW5nZTogKHZhbHVlOiBCbGFja2xpc3QpID0+IHZvaWQ7XG4gIG9uQmx1cjogKCkgPT4gdm9pZDtcbn1cblxuY2xhc3MgUGFydGlhbEJsYWNrbGlzdEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHM+IHtcbiAgcHVibGljIHN0YXRpYyBkZWZhdWx0UHJvcHM6IFByb3BzID0ge1xuICAgIHZhbHVlOiBuZXcgQmxhY2tsaXN0KFtdKSxcbiAgICBvbkNoYW5nZTogKCkgPT4ge30sXG4gICAgb25CbHVyOiAoKSA9PiB7fSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPSdmb3JtLXBhcnRpYWwtYmxhY2tsaXN0LWZvcm0nPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvcm0tcGFydGlhbC1ibGFja2xpc3QtZm9ybS1oZWFkZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sdW1uLXVybCc+VVJMPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2x1bW4ta2V5cyc+S2V5czwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7XG4gICAgICAgIHRoaXMucHJvcHMudmFsdWUuaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmICghaXRlbS5wYXJ0aWFsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdmb3JtLXBhcnRpYWwtYmxhY2tsaXN0LWZvcm0tcm93Jz5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLWluZGV4PXtpbmRleH0gdHlwZT0ndGV4dCcgbmFtZT0ndXJsJ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9J2NvbHVtbi11cmwnIHZhbHVlPXtpdGVtLnBhdHRlcm59XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmJpbmRWYWx1ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dCBkYXRhLWluZGV4PXtpbmRleH0gdHlwZT0ndGV4dCcgbmFtZT0na2V5cydcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdjb2x1bW4ta2V5cycgdmFsdWU9e2l0ZW0ua2V5cy5qb2luKCcsJyl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmJpbmRWYWx1ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgICAgICBvbkJsdXI9e3RoaXMucHJvcHMub25CbHVyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEZWxldGVCdXR0b24gZGF0YS1pbmRleD17aW5kZXh9IG5hbWU9J2RlbGV0ZSdcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5iaW5kVmFsdWUuYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgb25CbHVyPXt0aGlzLnByb3BzLm9uQmx1cn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+O1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgPEFkZEJ1dHRvbiBuYW1lPSdhZGQnIHN0eWxlPXt7IGZsb2F0OiAncmlnaHQnIH19XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMuYmluZFZhbHVlLmJpbmQodGhpcyl9IC8+XG4gICAgPC9kaXY+O1xuICB9XG5cbiAgYmluZFZhbHVlKGU6IGFueSkge1xuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lO1xuICAgIGNvbnN0IGluZGV4ID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLWluZGV4Jyk7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLnZhbHVlLml0ZW1zO1xuXG4gICAgaWYgKG5hbWUgPT09ICd1cmwnKSB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gaXRlbXNbaW5kZXhdO1xuICAgICAgaXRlbXNbaW5kZXhdID0gbmV3IEJsYWNrbGlzdEl0ZW0oZS50YXJnZXQudmFsdWUsIHRydWUsIGN1cnJlbnQua2V5cyk7XG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAna2V5cycpIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBpdGVtc1tpbmRleF07XG4gICAgICBpdGVtc1tpbmRleF0gPSBuZXcgQmxhY2tsaXN0SXRlbShcbiAgICAgICAgY3VycmVudC5wYXR0ZXJuLCB0cnVlLCBlLnRhcmdldC52YWx1ZS5zcGxpdCgnLCcpKTtcbiAgICB9IGVsc2UgaWYgKG5hbWUgPT09ICdhZGQnKSB7XG4gICAgICBpdGVtcy5wdXNoKG5ldyBCbGFja2xpc3RJdGVtKCcnLCB0cnVlLCBbXSkpO1xuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgIGl0ZW1zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5wcm9wcy5vbkNoYW5nZShuZXcgQmxhY2tsaXN0KGl0ZW1zKSk7XG4gICAgaWYgKG5hbWUgPT09ICdkZWxldGUnKSB7XG4gICAgICB0aGlzLnByb3BzLm9uQmx1cigpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYXJ0aWFsQmxhY2tsaXN0Rm9ybTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzP3NvdXJjZU1hcD10cnVlIS4vUGFydGlhbEJsYWNrbGlzdEZvcm0uc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIGlkID0gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz9zb3VyY2VNYXA9dHJ1ZSEuL1BhcnRpYWxCbGFja2xpc3RGb3JtLnNjc3NcIjtcbnZhciB1cGRhdGUgPSBhcGkoaWQsIGNvbnRlbnQsIG9wdGlvbnMpO1xuXG52YXIgZXhwb3J0ZWQgPSBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDoge307XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVkOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZm9ybS1wYXJ0aWFsLWJsYWNrbGlzdC1mb3JtLWhlYWRlcntkaXNwbGF5OmZsZXg7Zm9udC13ZWlnaHQ6Ym9sZH0uZm9ybS1wYXJ0aWFsLWJsYWNrbGlzdC1mb3JtLWhlYWRlciAuY29sdW1uLXVybHtmbGV4OjU7bWluLXdpZHRoOjB9LmZvcm0tcGFydGlhbC1ibGFja2xpc3QtZm9ybS1oZWFkZXIgLmNvbHVtbi1rZXlze2ZsZXg6MTttaW4td2lkdGg6MH0uZm9ybS1wYXJ0aWFsLWJsYWNrbGlzdC1mb3JtLWhlYWRlciAuY29sdW1uLWRlbGV0ZXtmbGV4OjE7bWluLXdpZHRoOjB9LmZvcm0tcGFydGlhbC1ibGFja2xpc3QtZm9ybS1yb3d7ZGlzcGxheTpmbGV4fS5mb3JtLXBhcnRpYWwtYmxhY2tsaXN0LWZvcm0tcm93IC5jb2x1bW4tdXJse2ZsZXg6NTttaW4td2lkdGg6MH0uZm9ybS1wYXJ0aWFsLWJsYWNrbGlzdC1mb3JtLXJvdyAuY29sdW1uLWtleXN7ZmxleDoxO21pbi13aWR0aDowfS5mb3JtLXBhcnRpYWwtYmxhY2tsaXN0LWZvcm0tcm93IC5jb2x1bW4tZGVsZXRle2ZsZXg6MTttaW4td2lkdGg6MH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2luZGV4JztcbmltcG9ydCAqIGFzIHN0b3JhZ2VzIGZyb20gJy4uL3N0b3JhZ2UnO1xuaW1wb3J0IFNldHRpbmdEYXRhLCB7XG4gIEpTT05UZXh0U2V0dGluZ3MsIEZvcm1TZXR0aW5ncywgU2V0dGluZ1NvdXJjZSxcbn0gZnJvbSAnLi4vLi4vc2hhcmVkL1NldHRpbmdEYXRhJztcblxuY29uc3QgbG9hZCA9IGFzeW5jKCk6IFByb21pc2U8YWN0aW9ucy5TZXR0aW5nQWN0aW9uPiA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzdG9yYWdlcy5sb2FkKCk7XG4gIHJldHVybiBzZXQoZGF0YSk7XG59O1xuXG5jb25zdCBzYXZlID0gYXN5bmMoZGF0YTogU2V0dGluZ0RhdGEpOiBQcm9taXNlPGFjdGlvbnMuU2V0dGluZ0FjdGlvbj4gPT4ge1xuICB0cnkge1xuICAgIGlmIChkYXRhLmdldFNvdXJjZSgpID09PSBTZXR0aW5nU291cmNlLkpTT04pIHtcbiAgICAgIC8vIHRvU2V0dGluZ3MgZXhlcmNpc2UgdmFsaWRhdGlvblxuICAgICAgZGF0YS50b1NldHRpbmdzKCk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFjdGlvbnMuU0VUVElOR19TSE9XX0VSUk9SLFxuICAgICAgZXJyb3I6IGUudG9TdHJpbmcoKSxcbiAgICAgIGpzb246IGRhdGEuZ2V0SlNPTigpLFxuICAgIH07XG4gIH1cbiAgYXdhaXQgc3RvcmFnZXMuc2F2ZShkYXRhKTtcbiAgcmV0dXJuIHNldChkYXRhKTtcbn07XG5cbmNvbnN0IHN3aXRjaFRvRm9ybSA9IChqc29uOiBKU09OVGV4dFNldHRpbmdzKTogYWN0aW9ucy5TZXR0aW5nQWN0aW9uID0+IHtcbiAgdHJ5IHtcbiAgICAvLyB0b1NldHRpbmdzIGV4ZXJjaXNlIHZhbGlkYXRpb25cbiAgICBjb25zdCBmb3JtID0gRm9ybVNldHRpbmdzLmZyb21TZXR0aW5ncyhqc29uLnRvU2V0dGluZ3MoKSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFjdGlvbnMuU0VUVElOR19TV0lUQ0hfVE9fRk9STSxcbiAgICAgIGZvcm0sXG4gICAgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLlNFVFRJTkdfU0hPV19FUlJPUixcbiAgICAgIGVycm9yOiBlLnRvU3RyaW5nKCksXG4gICAgICBqc29uLFxuICAgIH07XG4gIH1cbn07XG5cbmNvbnN0IHN3aXRjaFRvSnNvbiA9IChmb3JtOiBGb3JtU2V0dGluZ3MpOiBhY3Rpb25zLlNldHRpbmdBY3Rpb24gPT4ge1xuICBjb25zdCBqc29uID0gSlNPTlRleHRTZXR0aW5ncy5mcm9tU2V0dGluZ3MoZm9ybS50b1NldHRpbmdzKCkpO1xuICByZXR1cm4ge1xuICAgIHR5cGU6IGFjdGlvbnMuU0VUVElOR19TV0lUQ0hfVE9fSlNPTixcbiAgICBqc29uLFxuICB9O1xufTtcblxuY29uc3Qgc2V0ID0gKGRhdGE6IFNldHRpbmdEYXRhKTogYWN0aW9ucy5TZXR0aW5nQWN0aW9uID0+IHtcbiAgY29uc3Qgc291cmNlID0gZGF0YS5nZXRTb3VyY2UoKTtcbiAgc3dpdGNoIChzb3VyY2UpIHtcbiAgY2FzZSBTZXR0aW5nU291cmNlLkpTT046XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IGFjdGlvbnMuU0VUVElOR19TRVRfU0VUVElOR1MsXG4gICAgICBzb3VyY2U6IHNvdXJjZSxcbiAgICAgIGpzb246IGRhdGEuZ2V0SlNPTigpLFxuICAgIH07XG4gIGNhc2UgU2V0dGluZ1NvdXJjZS5Gb3JtOlxuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBhY3Rpb25zLlNFVFRJTkdfU0VUX1NFVFRJTkdTLFxuICAgICAgc291cmNlOiBzb3VyY2UsXG4gICAgICBmb3JtOiBkYXRhLmdldEZvcm0oKSxcbiAgICB9O1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgdW5rbm93biBzb3VyY2U6ICR7c291cmNlfWApO1xufTtcblxuZXhwb3J0IHsgbG9hZCwgc2F2ZSwgc2V0LCBzd2l0Y2hUb0Zvcm0sIHN3aXRjaFRvSnNvbiB9O1xuIiwiaW1wb3J0IFNldHRpbmdEYXRhLCB7IERlZmF1bHRTZXR0aW5nRGF0YSB9IGZyb20gJy4uL3NoYXJlZC9TZXR0aW5nRGF0YSc7XG5cbmV4cG9ydCBjb25zdCBsb2FkID0gYXN5bmMoKTogUHJvbWlzZTxTZXR0aW5nRGF0YT4gPT4ge1xuICBjb25zdCB7IHNldHRpbmdzIH0gPSBhd2FpdCBicm93c2VyLnN0b3JhZ2UubG9jYWwuZ2V0KCdzZXR0aW5ncycpO1xuICBpZiAoIXNldHRpbmdzKSB7XG4gICAgcmV0dXJuIERlZmF1bHRTZXR0aW5nRGF0YTtcbiAgfVxuICB0cnkge1xuICAgIHJldHVybiBTZXR0aW5nRGF0YS5mcm9tSlNPTihzZXR0aW5ncyBhcyBhbnkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGxvYWQgc2V0dGluZ3MnLCBlKTtcbiAgICByZXR1cm4gRGVmYXVsdFNldHRpbmdEYXRhO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3Qgc2F2ZSA9IChkYXRhOiBTZXR0aW5nRGF0YSkgPT4ge1xuICByZXR1cm4gYnJvd3Nlci5zdG9yYWdlLmxvY2FsLnNldCh7XG4gICAgc2V0dGluZ3M6IGRhdGEudG9KU09OKCksXG4gIH0pO1xufTtcbiIsImltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQge1xuICBKU09OVGV4dFNldHRpbmdzLCBGb3JtU2V0dGluZ3MsIFNldHRpbmdTb3VyY2UsXG59IGZyb20gJy4uLy4uL3NoYXJlZC9TZXR0aW5nRGF0YSc7XG5pbXBvcnQgeyBEZWZhdWx0U2V0dGluZyB9IGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9TZXR0aW5ncyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGUge1xuICBzb3VyY2U6IFNldHRpbmdTb3VyY2U7XG4gIGpzb24/OiBKU09OVGV4dFNldHRpbmdzO1xuICBmb3JtPzogRm9ybVNldHRpbmdzO1xuICBlcnJvcjogc3RyaW5nO1xufVxuXG5jb25zdCBkZWZhdWx0U3RhdGU6IFN0YXRlID0ge1xuICBzb3VyY2U6IFNldHRpbmdTb3VyY2UuSlNPTixcbiAganNvbjogSlNPTlRleHRTZXR0aW5ncy5mcm9tVGV4dCgnJyksXG4gIGZvcm06IEZvcm1TZXR0aW5ncy5mcm9tU2V0dGluZ3MoRGVmYXVsdFNldHRpbmcpLFxuICBlcnJvcjogJycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGRlZmF1bHRTdGF0ZSxcbiAgYWN0aW9uOiBhY3Rpb25zLlNldHRpbmdBY3Rpb24sXG4pOiBTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgY2FzZSBhY3Rpb25zLlNFVFRJTkdfU0VUX1NFVFRJTkdTOlxuICAgIHJldHVybiB7IC4uLnN0YXRlLFxuICAgICAgc291cmNlOiBhY3Rpb24uc291cmNlLFxuICAgICAganNvbjogYWN0aW9uLmpzb24sXG4gICAgICBmb3JtOiBhY3Rpb24uZm9ybSxcbiAgICAgIGVycm9yOiAnJywgfTtcbiAgY2FzZSBhY3Rpb25zLlNFVFRJTkdfU0hPV19FUlJPUjpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIGVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICBqc29uOiBhY3Rpb24uanNvbiwgfTtcbiAgY2FzZSBhY3Rpb25zLlNFVFRJTkdfU1dJVENIX1RPX0ZPUk06XG4gICAgcmV0dXJuIHsgLi4uc3RhdGUsXG4gICAgICBlcnJvcjogJycsXG4gICAgICBzb3VyY2U6IFNldHRpbmdTb3VyY2UuRm9ybSxcbiAgICAgIGZvcm06IGFjdGlvbi5mb3JtLCB9O1xuICBjYXNlIGFjdGlvbnMuU0VUVElOR19TV0lUQ0hfVE9fSlNPTjpcbiAgICByZXR1cm4geyAuLi5zdGF0ZSxcbiAgICAgIGVycm9yOiAnJyxcbiAgICAgIHNvdXJjZTogU2V0dGluZ1NvdXJjZS5KU09OLFxuICAgICAganNvbjogYWN0aW9uLmpzb24sIH07XG4gIGRlZmF1bHQ6XG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9