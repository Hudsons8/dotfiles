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
/******/ 	return __webpack_require__(__webpack_require__.s = 78);
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
/* 1 */,
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/lifecycle.js
var Lifecycle;
(function (Lifecycle) {
    Lifecycle[Lifecycle["Transient"] = 0] = "Transient";
    Lifecycle[Lifecycle["Singleton"] = 1] = "Singleton";
    Lifecycle[Lifecycle["ResolutionScoped"] = 2] = "ResolutionScoped";
    Lifecycle[Lifecycle["ContainerScoped"] = 3] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
/* harmony default export */ var types_lifecycle = (Lifecycle);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/types/index.js


// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/reflection-helpers.js
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
    var params = Reflect.getMetadata("design:paramtypes", target) || [];
    var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
    Object.keys(injectionTokens).forEach(function (key) {
        params[+key] = injectionTokens[key];
    });
    return params;
}
function defineInjectionTokenMetadata(data) {
    return function (target, _propertyKey, parameterIndex) {
        var injectionTokens = Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
        injectionTokens[parameterIndex] = data;
        Reflect.defineMetadata(INJECTION_TOKEN_METADATA_KEY, injectionTokens, target);
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/class-provider.js
function isClassProvider(provider) {
    return !!provider.useClass;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/factory-provider.js
function isFactoryProvider(provider) {
    return !!provider.useFactory;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/injection-token.js
function isNormalToken(token) {
    return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
    return (typeof descriptor === "object" &&
        "token" in descriptor &&
        "multiple" in descriptor);
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/token-provider.js
function isTokenProvider(provider) {
    return !!provider.useToken;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/value-provider.js
function isValueProvider(provider) {
    return provider.useValue != undefined;
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/index.js






// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/providers/provider.js




function isProvider(provider) {
    return (isClassProvider(provider) ||
        isValueProvider(provider) ||
        isTokenProvider(provider) ||
        isFactoryProvider(provider));
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/registry.js
var Registry = (function () {
    function Registry() {
        this._registryMap = new Map();
    }
    Registry.prototype.entries = function () {
        return this._registryMap.entries();
    };
    Registry.prototype.getAll = function (key) {
        this.ensure(key);
        return this._registryMap.get(key);
    };
    Registry.prototype.get = function (key) {
        this.ensure(key);
        var value = this._registryMap.get(key);
        return value[value.length - 1] || null;
    };
    Registry.prototype.set = function (key, value) {
        this.ensure(key);
        this._registryMap.get(key).push(value);
    };
    Registry.prototype.setAll = function (key, value) {
        this._registryMap.set(key, value);
    };
    Registry.prototype.has = function (key) {
        this.ensure(key);
        return this._registryMap.get(key).length > 0;
    };
    Registry.prototype.clear = function () {
        this._registryMap.clear();
    };
    Registry.prototype.ensure = function (key) {
        if (!this._registryMap.has(key)) {
            this._registryMap.set(key, []);
        }
    };
    return Registry;
}());
/* harmony default export */ var registry = (Registry);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/resolution-context.js
var ResolutionContext = (function () {
    function ResolutionContext() {
        this.scopedResolutions = new Map();
    }
    return ResolutionContext;
}());
/* harmony default export */ var resolution_context = (ResolutionContext);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/dependency-container.js







var typeInfo = new Map();
var dependency_container_InternalDependencyContainer = (function () {
    function InternalDependencyContainer(parent) {
        this.parent = parent;
        this._registry = new registry();
    }
    InternalDependencyContainer.prototype.register = function (token, providerOrConstructor, options) {
        if (options === void 0) { options = { lifecycle: types_lifecycle.Transient }; }
        var provider;
        if (!isProvider(providerOrConstructor)) {
            provider = { useClass: providerOrConstructor };
        }
        else {
            provider = providerOrConstructor;
        }
        if (options.lifecycle === types_lifecycle.Singleton ||
            options.lifecycle == types_lifecycle.ContainerScoped ||
            options.lifecycle == types_lifecycle.ResolutionScoped) {
            if (isValueProvider(provider) || isFactoryProvider(provider)) {
                throw "Cannot use lifecycle \"" + types_lifecycle[options.lifecycle] + "\" with ValueProviders or FactoryProviders";
            }
        }
        this._registry.set(token, { provider: provider, options: options });
        return this;
    };
    InternalDependencyContainer.prototype.registerType = function (from, to) {
        if (isNormalToken(to)) {
            return this.register(from, {
                useToken: to
            });
        }
        return this.register(from, {
            useClass: to
        });
    };
    InternalDependencyContainer.prototype.registerInstance = function (token, instance) {
        return this.register(token, {
            useValue: instance
        });
    };
    InternalDependencyContainer.prototype.registerSingleton = function (from, to) {
        if (isNormalToken(from)) {
            if (isNormalToken(to)) {
                return this.register(from, {
                    useToken: to
                }, { lifecycle: types_lifecycle.Singleton });
            }
            else if (to) {
                return this.register(from, {
                    useClass: to
                }, { lifecycle: types_lifecycle.Singleton });
            }
            throw "Cannot register a type name as a singleton without a \"to\" token";
        }
        var useClass = from;
        if (to && !isNormalToken(to)) {
            useClass = to;
        }
        return this.register(from, {
            useClass: useClass
        }, { lifecycle: types_lifecycle.Singleton });
    };
    InternalDependencyContainer.prototype.resolve = function (token, context) {
        if (context === void 0) { context = new resolution_context(); }
        var registration = this.getRegistration(token);
        if (!registration && isNormalToken(token)) {
            throw "Attempted to resolve unregistered dependency token: " + token.toString();
        }
        if (registration) {
            return this.resolveRegistration(registration, context);
        }
        return this.construct(token, context);
    };
    InternalDependencyContainer.prototype.resolveRegistration = function (registration, context) {
        if (registration.options.lifecycle === types_lifecycle.ResolutionScoped &&
            context.scopedResolutions.has(registration)) {
            return context.scopedResolutions.get(registration);
        }
        var isSingleton = registration.options.lifecycle === types_lifecycle.Singleton;
        var isContainerScoped = registration.options.lifecycle === types_lifecycle.ContainerScoped;
        var returnInstance = isSingleton || isContainerScoped;
        var resolved;
        if (isValueProvider(registration.provider)) {
            resolved = registration.provider.useValue;
        }
        else if (isTokenProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.resolve(registration.provider.useToken, context))
                : this.resolve(registration.provider.useToken, context);
        }
        else if (isClassProvider(registration.provider)) {
            resolved = returnInstance
                ? registration.instance ||
                    (registration.instance = this.construct(registration.provider.useClass, context))
                : this.construct(registration.provider.useClass, context);
        }
        else if (isFactoryProvider(registration.provider)) {
            resolved = registration.provider.useFactory(this);
        }
        else {
            resolved = this.construct(registration.provider, context);
        }
        if (registration.options.lifecycle === types_lifecycle.ResolutionScoped) {
            context.scopedResolutions.set(registration, resolved);
        }
        return resolved;
    };
    InternalDependencyContainer.prototype.resolveAll = function (token, context) {
        var _this = this;
        if (context === void 0) { context = new resolution_context(); }
        var registrations = this.getAllRegistrations(token);
        if (!registrations && isNormalToken(token)) {
            throw "Attempted to resolve unregistered dependency token: " + token.toString();
        }
        if (registrations) {
            return registrations.map(function (item) {
                return _this.resolveRegistration(item, context);
            });
        }
        return [this.construct(token, context)];
    };
    InternalDependencyContainer.prototype.isRegistered = function (token, recursive) {
        if (recursive === void 0) { recursive = false; }
        return (this._registry.has(token) ||
            (recursive &&
                (this.parent || false) &&
                this.parent.isRegistered(token, true)));
    };
    InternalDependencyContainer.prototype.reset = function () {
        this._registry.clear();
    };
    InternalDependencyContainer.prototype.createChildContainer = function () {
        var e_1, _a;
        var childContainer = new InternalDependencyContainer(this);
        try {
            for (var _b = Object(tslib_es6["__values"])(this._registry.entries()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = Object(tslib_es6["__read"])(_c.value, 2), token = _d[0], registrations = _d[1];
                if (registrations.some(function (_a) {
                    var options = _a.options;
                    return options.lifecycle === types_lifecycle.ContainerScoped;
                })) {
                    childContainer._registry.setAll(token, registrations.map(function (registration) {
                        if (registration.options.lifecycle === types_lifecycle.ContainerScoped) {
                            return {
                                provider: registration.provider,
                                options: registration.options
                            };
                        }
                        return registration;
                    }));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return childContainer;
    };
    InternalDependencyContainer.prototype.getRegistration = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.get(token);
        }
        if (this.parent) {
            return this.parent.getRegistration(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.getAllRegistrations = function (token) {
        if (this.isRegistered(token)) {
            return this._registry.getAll(token);
        }
        if (this.parent) {
            return this.parent.getAllRegistrations(token);
        }
        return null;
    };
    InternalDependencyContainer.prototype.construct = function (ctor, context) {
        var _this = this;
        if (ctor.length === 0) {
            return new ctor();
        }
        var paramInfo = typeInfo.get(ctor);
        if (!paramInfo || paramInfo.length === 0) {
            throw "TypeInfo not known for " + ctor;
        }
        var params = paramInfo.map(function (param) {
            if (isTokenDescriptor(param)) {
                return param.multiple
                    ? _this.resolveAll(param.token)
                    : _this.resolve(param.token, context);
            }
            return _this.resolve(param, context);
        });
        return new (ctor.bind.apply(ctor, Object(tslib_es6["__spread"])([void 0], params)))();
    };
    return InternalDependencyContainer;
}());
var instance = new dependency_container_InternalDependencyContainer();
/* harmony default export */ var dependency_container = (instance);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/auto-injectable.js




function autoInjectable() {
    return function (target) {
        var paramInfo = getParamInfo(target);
        return (function (_super) {
            Object(tslib_es6["__extends"])(class_1, _super);
            function class_1() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return _super.apply(this, Object(tslib_es6["__spread"])(args.concat(paramInfo.slice(args.length).map(function (type, index) {
                    try {
                        if (isTokenDescriptor(type)) {
                            return type.multiple
                                ? instance.resolveAll(type.token)
                                : instance.resolve(type.token);
                        }
                        return instance.resolve(type);
                    }
                    catch (e) {
                        var argIndex = index + args.length;
                        var _a = Object(tslib_es6["__read"])(target.toString().match(/constructor\(([\w, ]+)\)/) || [], 2), _b = _a[1], params = _b === void 0 ? null : _b;
                        var argName = params
                            ? params.split(",")[argIndex]
                            : "#" + argIndex;
                        throw "Cannot inject the dependency " + argName + " of " + target.name + " constructor. " + e;
                    }
                })))) || this;
            }
            return class_1;
        }(target));
    };
}
/* harmony default export */ var auto_injectable = (autoInjectable);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/inject.js

function inject(token) {
    return defineInjectionTokenMetadata(token);
}
/* harmony default export */ var decorators_inject = (inject);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/injectable.js


function injectable() {
    return function (target) {
        typeInfo.set(target, getParamInfo(target));
    };
}
/* harmony default export */ var decorators_injectable = (injectable);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/registry.js


function registry_registry(registrations) {
    if (registrations === void 0) { registrations = []; }
    return function (target) {
        registrations.forEach(function (_a) {
            var token = _a.token, options = _a.options, provider = Object(tslib_es6["__rest"])(_a, ["token", "options"]);
            return instance.register(token, provider, options);
        });
        return target;
    };
}
/* harmony default export */ var decorators_registry = (registry_registry);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/singleton.js


function singleton() {
    return function (target) {
        decorators_injectable()(target);
        instance.registerSingleton(target);
    };
}
/* harmony default export */ var decorators_singleton = (singleton);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/inject-all.js

function injectAll(token) {
    var data = { token: token, multiple: true };
    return defineInjectionTokenMetadata(data);
}
/* harmony default export */ var inject_all = (injectAll);

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/scoped.js


function scoped(lifecycle, token) {
    return function (target) {
        decorators_injectable()(target);
        instance.register(token || target, target, {
            lifecycle: lifecycle
        });
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/decorators/index.js








// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/factories/instance-caching-factory.js
function instanceCachingFactory(factoryFunc) {
    var instance;
    return function (dependencyContainer) {
        if (instance == undefined) {
            instance = factoryFunc(dependencyContainer);
        }
        return instance;
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/factories/predicate-aware-class-factory.js
function predicateAwareClassFactory(predicate, trueConstructor, falseConstructor, useCaching) {
    if (useCaching === void 0) { useCaching = true; }
    var instance;
    var previousPredicate;
    return function (dependencyContainer) {
        var currentPredicate = predicate(dependencyContainer);
        if (!useCaching || previousPredicate !== currentPredicate) {
            if ((previousPredicate = currentPredicate)) {
                instance = dependencyContainer.resolve(trueConstructor);
            }
            else {
                instance = dependencyContainer.resolve(falseConstructor);
            }
        }
        return instance;
    };
}

// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/factories/index.js



// CONCATENATED MODULE: ./node_modules/tsyringe/dist/esm5/index.js
/* concated harmony reexport Lifecycle */__webpack_require__.d(__webpack_exports__, "Lifecycle", function() { return types_lifecycle; });
/* concated harmony reexport autoInjectable */__webpack_require__.d(__webpack_exports__, "autoInjectable", function() { return auto_injectable; });
/* concated harmony reexport inject */__webpack_require__.d(__webpack_exports__, "inject", function() { return decorators_inject; });
/* concated harmony reexport injectable */__webpack_require__.d(__webpack_exports__, "injectable", function() { return decorators_injectable; });
/* concated harmony reexport registry */__webpack_require__.d(__webpack_exports__, "registry", function() { return decorators_registry; });
/* concated harmony reexport singleton */__webpack_require__.d(__webpack_exports__, "singleton", function() { return decorators_singleton; });
/* concated harmony reexport injectAll */__webpack_require__.d(__webpack_exports__, "injectAll", function() { return inject_all; });
/* concated harmony reexport scoped */__webpack_require__.d(__webpack_exports__, "scoped", function() { return scoped; });
/* concated harmony reexport instanceCachingFactory */__webpack_require__.d(__webpack_exports__, "instanceCachingFactory", function() { return instanceCachingFactory; });
/* concated harmony reexport predicateAwareClassFactory */__webpack_require__.d(__webpack_exports__, "predicateAwareClassFactory", function() { return predicateAwareClassFactory; });
/* concated harmony reexport isClassProvider */__webpack_require__.d(__webpack_exports__, "isClassProvider", function() { return isClassProvider; });
/* concated harmony reexport isFactoryProvider */__webpack_require__.d(__webpack_exports__, "isFactoryProvider", function() { return isFactoryProvider; });
/* concated harmony reexport isNormalToken */__webpack_require__.d(__webpack_exports__, "isNormalToken", function() { return isNormalToken; });
/* concated harmony reexport isTokenProvider */__webpack_require__.d(__webpack_exports__, "isTokenProvider", function() { return isTokenProvider; });
/* concated harmony reexport isValueProvider */__webpack_require__.d(__webpack_exports__, "isValueProvider", function() { return isValueProvider; });
/* concated harmony reexport container */__webpack_require__.d(__webpack_exports__, "container", function() { return instance; });
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
    throw "tsyringe requires a reflect polyfill. Please add 'import \"reflect-metadata\"' to the top of your entry point.";
}







/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BACKGROUND_OPERATION = 'background.operation';
exports.CONSOLE_UNFOCUS = 'console.unfocus';
exports.CONSOLE_ENTER_COMMAND = 'console.enter.command';
exports.CONSOLE_ENTER_FIND = 'console.enter.find';
exports.CONSOLE_QUERY_COMPLETIONS = 'console.query.completions';
exports.CONSOLE_SHOW_COMMAND = 'console.show.command';
exports.CONSOLE_SHOW_ERROR = 'console.show.error';
exports.CONSOLE_SHOW_INFO = 'console.show.info';
exports.CONSOLE_SHOW_FIND = 'console.show.find';
exports.CONSOLE_HIDE = 'console.hide';
exports.FOLLOW_START = 'follow.start';
exports.FOLLOW_REQUEST_COUNT_TARGETS = 'follow.request.count.targets';
exports.FOLLOW_RESPONSE_COUNT_TARGETS = 'follow.response.count.targets';
exports.FOLLOW_CREATE_HINTS = 'follow.create.hints';
exports.FOLLOW_SHOW_HINTS = 'follow.update.hints';
exports.FOLLOW_REMOVE_HINTS = 'follow.remove.hints';
exports.FOLLOW_ACTIVATE = 'follow.activate';
exports.FOLLOW_KEY_PRESS = 'follow.key.press';
exports.MARK_SET_GLOBAL = 'mark.set.global';
exports.MARK_JUMP_GLOBAL = 'mark.jump.global';
exports.TAB_SCROLL_TO = 'tab.scroll.to';
exports.FIND_NEXT = 'find.next';
exports.FIND_PREV = 'find.prev';
exports.FIND_GET_KEYWORD = 'find.get.keyword';
exports.FIND_SET_KEYWORD = 'find.set.keyword';
exports.ADDON_ENABLED_QUERY = 'addon.enabled.query';
exports.ADDON_ENABLED_RESPONSE = 'addon.enabled.response';
exports.ADDON_TOGGLE_ENABLED = 'addon.toggle.enabled';
exports.OPEN_URL = 'open.url';
exports.SETTINGS_CHANGED = 'settings.changed';
exports.SETTINGS_QUERY = 'settings.query';
exports.CONSOLE_FRAME_MESSAGE = 'console.frame.message';
exports.NAVIGATE_HISTORY_NEXT = 'navigate.history.next';
exports.NAVIGATE_HISTORY_PREV = 'navigate.history.prev';
exports.NAVIGATE_LINK_NEXT = 'navigate.link.next';
exports.NAVIGATE_LINK_PREV = 'navigate.link.prev';
exports.valueOf = (o) => {
    switch (o.type) {
        case exports.CONSOLE_UNFOCUS:
        case exports.CONSOLE_ENTER_COMMAND:
        case exports.CONSOLE_ENTER_FIND:
        case exports.CONSOLE_QUERY_COMPLETIONS:
        case exports.CONSOLE_SHOW_COMMAND:
        case exports.CONSOLE_SHOW_ERROR:
        case exports.CONSOLE_SHOW_INFO:
        case exports.CONSOLE_SHOW_FIND:
        case exports.CONSOLE_HIDE:
        case exports.FOLLOW_START:
        case exports.FOLLOW_REQUEST_COUNT_TARGETS:
        case exports.FOLLOW_RESPONSE_COUNT_TARGETS:
        case exports.FOLLOW_CREATE_HINTS:
        case exports.FOLLOW_SHOW_HINTS:
        case exports.FOLLOW_REMOVE_HINTS:
        case exports.FOLLOW_ACTIVATE:
        case exports.FOLLOW_KEY_PRESS:
        case exports.MARK_SET_GLOBAL:
        case exports.MARK_JUMP_GLOBAL:
        case exports.TAB_SCROLL_TO:
        case exports.FIND_NEXT:
        case exports.FIND_PREV:
        case exports.FIND_GET_KEYWORD:
        case exports.FIND_SET_KEYWORD:
        case exports.ADDON_ENABLED_QUERY:
        case exports.ADDON_ENABLED_RESPONSE:
        case exports.ADDON_TOGGLE_ENABLED:
        case exports.OPEN_URL:
        case exports.SETTINGS_CHANGED:
        case exports.SETTINGS_QUERY:
        case exports.CONSOLE_FRAME_MESSAGE:
        case exports.NAVIGATE_HISTORY_NEXT:
        case exports.NAVIGATE_HISTORY_PREV:
        case exports.NAVIGATE_LINK_NEXT:
        case exports.NAVIGATE_LINK_PREV:
            return o;
    }
    throw new Error('unknown operation type: ' + o.type);
};


/***/ }),
/* 4 */,
/* 5 */,
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
/* 9 */,
/* 10 */,
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
/* 13 */,
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const isContentEditable = (element) => {
    const value = element.getAttribute('contenteditable');
    if (value === null) {
        return false;
    }
    return value.toLowerCase() === 'true' || value.toLowerCase() === '';
};
exports.isContentEditable = isContentEditable;
const rectangleCoordsRect = (coords) => {
    const [left, top, right, bottom] = coords.split(',').map(n => Number(n));
    return { left, top, right, bottom };
};
const circleCoordsRect = (coords) => {
    const [x, y, r] = coords.split(',').map(n => Number(n));
    return {
        left: x - r,
        top: y - r,
        right: x + r,
        bottom: y + r,
    };
};
const polygonCoordsRect = (coords) => {
    const params = coords.split(',');
    let minx = Number(params[0]), maxx = Number(params[0]), miny = Number(params[1]), maxy = Number(params[1]);
    const len = Math.floor(params.length / 2);
    for (let i = 2; i < len; i += 2) {
        const x = Number(params[i]), y = Number(params[i + 1]);
        if (x < minx) {
            minx = x;
        }
        if (x > maxx) {
            maxx = x;
        }
        if (y < miny) {
            miny = y;
        }
        if (y > maxy) {
            maxy = y;
        }
    }
    return { left: minx, top: miny, right: maxx, bottom: maxy };
};
const viewportRect = (e) => {
    if (e.tagName !== 'AREA') {
        return e.getBoundingClientRect();
    }
    const mapElement = e.parentNode;
    const imgElement = document.querySelector(`img[usemap="#${mapElement.name}"]`);
    const { left: mapLeft, top: mapTop } = imgElement.getBoundingClientRect();
    const coords = e.getAttribute('coords');
    if (!coords) {
        return e.getBoundingClientRect();
    }
    let rect = { left: 0, top: 0, right: 0, bottom: 0 };
    switch (e.getAttribute('shape')) {
        case 'rect':
        case 'rectangle':
            rect = rectangleCoordsRect(coords);
            break;
        case 'circ':
        case 'circle':
            rect = circleCoordsRect(coords);
            break;
        case 'poly':
        case 'polygon':
            rect = polygonCoordsRect(coords);
            break;
    }
    return {
        left: rect.left + mapLeft,
        top: rect.top + mapTop,
        right: rect.right + mapLeft,
        bottom: rect.bottom + mapTop,
    };
};
exports.viewportRect = viewportRect;
const isVisible = (element) => {
    const rect = element.getBoundingClientRect();
    const style = window.getComputedStyle(element);
    if (style.overflow !== 'visible' && (rect.width === 0 || rect.height === 0)) {
        return false;
    }
    if (rect.right < 0 && rect.bottom < 0) {
        return false;
    }
    if (window.innerWidth < rect.left && window.innerHeight < rect.top) {
        return false;
    }
    if (element instanceof HTMLInputElement &&
        element.type.toLowerCase() === 'hidden') {
        return false;
    }
    const { display, visibility } = window.getComputedStyle(element);
    if (display === 'none' || visibility === 'hidden') {
        return false;
    }
    return true;
};
exports.isVisible = isVisible;


/***/ }),
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let AddonEnabledUseCase = class AddonEnabledUseCase {
    constructor(indicator, repository) {
        this.indicator = indicator;
        this.repository = repository;
    }
    async enable() {
        await this.setEnabled(true);
    }
    async disable() {
        await this.setEnabled(false);
    }
    async toggle() {
        const current = this.repository.get();
        await this.setEnabled(!current);
    }
    getEnabled() {
        return this.repository.get();
    }
    async setEnabled(on) {
        this.repository.set(on);
        await this.indicator.setEnabled(on);
    }
};
AddonEnabledUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('AddonIndicatorClient')),
    tslib_1.__param(1, tsyringe_1.inject('AddonEnabledRepository')),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], AddonEnabledUseCase);
exports.default = AddonEnabledUseCase;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const trimStart = (str) => {
    return str.replace(/^\s+/, '');
};
const SUPPORTED_PROTOCOLS = ['http:', 'https:', 'ftp:', 'mailto:', 'about:'];
const isLocalhost = (url) => {
    if (url === 'localhost') {
        return true;
    }
    const [host, port] = url.split(':', 2);
    return host === 'localhost' && !isNaN(Number(port));
};
const isMissingHttp = (keywords) => {
    if (keywords.includes('.') && !keywords.includes(' ')) {
        return true;
    }
    try {
        const u = new URL('http://' + keywords);
        return isLocalhost(u.host);
    }
    catch (e) {
    }
    return false;
};
const searchUrl = (keywords, search) => {
    try {
        const u = new URL(keywords);
        if (SUPPORTED_PROTOCOLS.includes(u.protocol.toLowerCase())) {
            return u.href;
        }
    }
    catch (e) {
    }
    if (isMissingHttp(keywords)) {
        return 'http://' + keywords;
    }
    let template = search.engines[search.defaultEngine];
    let query = keywords;
    const first = trimStart(keywords).split(' ')[0];
    if (Object.keys(search.engines).includes(first)) {
        template = search.engines[first];
        query = trimStart(trimStart(keywords).slice(first.length));
    }
    return template.replace('{}', encodeURIComponent(query));
};
exports.searchUrl = searchUrl;
const normalizeUrl = (url) => {
    try {
        const u = new URL(url);
        if (SUPPORTED_PROTOCOLS.includes(u.protocol.toLowerCase())) {
            return u.href;
        }
    }
    catch (e) {
    }
    return 'http://' + url;
};
exports.normalizeUrl = normalizeUrl;


/***/ }),
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
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
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof global === "object" ? global :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(37), __webpack_require__(11)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let MarkUseCase = class MarkUseCase {
    constructor(scrollPresenter, client, repository, settingRepository, consoleClient) {
        this.scrollPresenter = scrollPresenter;
        this.client = client;
        this.repository = repository;
        this.settingRepository = settingRepository;
        this.consoleClient = consoleClient;
    }
    async set(key) {
        const pos = this.scrollPresenter.getScroll();
        if (this.globalKey(key)) {
            this.client.setGloablMark(key, pos);
            await this.consoleClient.info(`Set global mark to '${key}'`);
        }
        else {
            this.repository.set(key, pos);
            await this.consoleClient.info(`Set local mark to '${key}'`);
        }
    }
    async jump(key) {
        if (this.globalKey(key)) {
            await this.client.jumpGlobalMark(key);
        }
        else {
            const pos = this.repository.get(key);
            if (!pos) {
                throw new Error('Mark is not set');
            }
            this.scroll(pos.x, pos.y);
        }
    }
    scroll(x, y) {
        const smooth = this.settingRepository.get().properties.smoothscroll;
        this.scrollPresenter.scrollTo(x, y, smooth);
    }
    globalKey(key) {
        return (/^[A-Z0-9]$/).test(key);
    }
};
MarkUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('ScrollPresenter')),
    tslib_1.__param(1, tsyringe_1.inject('MarkClient')),
    tslib_1.__param(2, tsyringe_1.inject('MarkRepository')),
    tslib_1.__param(3, tsyringe_1.inject('SettingRepository')),
    tslib_1.__param(4, tsyringe_1.inject('ConsoleClient')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], MarkUseCase);
exports.default = MarkUseCase;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const Hint_1 = __webpack_require__(65);
let FollowSlaveUseCase = class FollowSlaveUseCase {
    constructor(presenter, tabsClient, followMasterClient, followSlaveRepository) {
        this.presenter = presenter;
        this.tabsClient = tabsClient;
        this.followMasterClient = followMasterClient;
        this.followSlaveRepository = followSlaveRepository;
    }
    countTargets(viewSize, framePosition) {
        const count = this.presenter.getTargetCount(viewSize, framePosition);
        this.followMasterClient.responseHintCount(count);
    }
    createHints(viewSize, framePosition, tags) {
        this.followSlaveRepository.enableFollowMode();
        this.presenter.createHints(viewSize, framePosition, tags);
    }
    showHints(prefix) {
        this.presenter.filterHints(prefix);
    }
    sendKey(key) {
        this.followMasterClient.sendKey(key);
    }
    isFollowMode() {
        return this.followSlaveRepository.isFollowMode();
    }
    async activate(tag, newTab, background) {
        const hint = this.presenter.getHint(tag);
        if (!hint) {
            return;
        }
        if (hint instanceof Hint_1.LinkHint) {
            const url = hint.getLink();
            let openNewTab = newTab;
            if (hint.getLinkTarget() === '_blank') {
                openNewTab = true;
            }
            if (!url || url === '#' || url.toLowerCase().startsWith('javascript:')) {
                return;
            }
            await this.tabsClient.openUrl(url, openNewTab, background);
        }
        else if (hint instanceof Hint_1.InputHint) {
            hint.activate();
        }
    }
    clear() {
        this.followSlaveRepository.disableFollowMode();
        this.presenter.clearHints();
    }
};
FollowSlaveUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('FollowPresenter')),
    tslib_1.__param(1, tsyringe_1.inject('TabsClient')),
    tslib_1.__param(2, tsyringe_1.inject('FollowMasterClient')),
    tslib_1.__param(3, tsyringe_1.inject('FollowSlaveRepository')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
], FollowSlaveUseCase);
exports.default = FollowSlaveUseCase;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const doms = tslib_1.__importStar(__webpack_require__(22));
const hintPosition = (element) => {
    const { left, top, right, bottom } = doms.viewportRect(element);
    if (element.tagName !== 'AREA') {
        return { x: left, y: top };
    }
    return {
        x: (left + right) / 2,
        y: (top + bottom) / 2,
    };
};
class Hint {
    constructor(target, tag) {
        this.tag = tag;
        const doc = target.ownerDocument;
        if (doc === null) {
            throw new TypeError('ownerDocument is null');
        }
        const { x, y } = hintPosition(target);
        const { scrollX, scrollY } = window;
        const hint = doc.createElement('span');
        hint.className = 'vimvixen-hint';
        hint.textContent = tag;
        hint.style.left = x + scrollX + 'px';
        hint.style.top = y + scrollY + 'px';
        doc.body.append(hint);
        this.hint = hint;
        this.show();
    }
    show() {
        this.hint.style.display = 'inline';
    }
    hide() {
        this.hint.style.display = 'none';
    }
    remove() {
        this.hint.remove();
    }
    getTag() {
        return this.tag;
    }
}
exports.default = Hint;
class LinkHint extends Hint {
    constructor(target, tag) {
        super(target, tag);
        this.target = target;
    }
    getLink() {
        return this.target.href;
    }
    getLinkTarget() {
        return this.target.getAttribute('target');
    }
    click() {
        this.target.click();
    }
}
exports.LinkHint = LinkHint;
class InputHint extends Hint {
    constructor(target, tag) {
        super(target, tag);
        this.target = target;
    }
    activate() {
        const target = this.target;
        switch (target.tagName.toLowerCase()) {
            case 'input':
                switch (target.type) {
                    case 'file':
                    case 'checkbox':
                    case 'radio':
                    case 'submit':
                    case 'reset':
                    case 'button':
                    case 'image':
                    case 'color':
                        return target.click();
                    default:
                        return target.focus();
                }
            case 'textarea':
                return target.focus();
            case 'button':
            case 'summary':
                return target.click();
            default:
                if (doms.isContentEditable(target)) {
                    return target.focus();
                }
                else if (target.hasAttribute('tabindex')) {
                    return target.click();
                }
        }
    }
}
exports.InputHint = InputHint;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Key_1 = tslib_1.__importDefault(__webpack_require__(16));
class KeySequence {
    constructor(keys) {
        this.keys = keys;
    }
    push(key) {
        return this.keys.push(key);
    }
    length() {
        return this.keys.length;
    }
    startsWith(o) {
        if (this.keys.length < o.keys.length) {
            return false;
        }
        for (let i = 0; i < o.keys.length; ++i) {
            if (!this.keys[i].equals(o.keys[i])) {
                return false;
            }
        }
        return true;
    }
    isDigitOnly() {
        return this.keys.every(key => key.isDigit());
    }
    repeatCount() {
        let nonDigitAt = this.keys.findIndex(key => !key.isDigit());
        if (this.keys.length === 0 || nonDigitAt === 0) {
            return 1;
        }
        if (nonDigitAt === -1) {
            nonDigitAt = this.keys.length;
        }
        const digits = this.keys.slice(0, nonDigitAt)
            .map(key => key.key)
            .join('');
        return Number(digits);
    }
    trimNumericPrefix() {
        let nonDigitAt = this.keys.findIndex(key => !key.isDigit());
        if (nonDigitAt === -1) {
            nonDigitAt = this.keys.length;
        }
        return new KeySequence(this.keys.slice(nonDigitAt));
    }
    splitNumericPrefix() {
        const nonDigitIndex = this.keys.findIndex(key => !key.isDigit());
        if (nonDigitIndex === -1) {
            return [this, new KeySequence([])];
        }
        return [
            new KeySequence(this.keys.slice(0, nonDigitIndex)),
            new KeySequence(this.keys.slice(nonDigitIndex)),
        ];
    }
    static fromMapKeys(keys) {
        const fromMapKeysRecursive = (remaining, mappedKeys) => {
            if (remaining.length === 0) {
                return mappedKeys;
            }
            let nextPos = 1;
            if (remaining.startsWith('<')) {
                const ltPos = remaining.indexOf('>');
                if (ltPos > 0) {
                    nextPos = ltPos + 1;
                }
            }
            return fromMapKeysRecursive(remaining.slice(nextPos), mappedKeys.concat([Key_1.default.fromMapKey(remaining.slice(0, nextPos))]));
        };
        const data = fromMapKeysRecursive(keys, []);
        return new KeySequence(data);
    }
}
exports.default = KeySequence;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let MarkKeyUseCase = class MarkKeyUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    isSetMode() {
        return this.repository.isSetMode();
    }
    isJumpMode() {
        return this.repository.isJumpMode();
    }
    enableSetMode() {
        this.repository.enableSetMode();
    }
    disableSetMode() {
        this.repository.disabeSetMode();
    }
    enableJumpMode() {
        this.repository.enableJumpMode();
    }
    disableJumpMode() {
        this.repository.disabeJumpMode();
    }
};
MarkKeyUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('MarkKeyRepository')),
    tslib_1.__metadata("design:paramtypes", [Object])
], MarkKeyUseCase);
exports.default = MarkKeyUseCase;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ConsoleFramePresenterImpl {
    initialize() {
        const iframe = document.createElement('iframe');
        iframe.src = browser.runtime.getURL('build/console.html');
        iframe.id = 'vimvixen-console-frame';
        iframe.className = 'vimvixen-console-frame';
        document.body.append(iframe);
    }
    blur() {
        const ele = document.getElementById('vimvixen-console-frame');
        if (!ele) {
            throw new Error('console frame not created');
        }
        ele.blur();
    }
}
exports.ConsoleFramePresenterImpl = ConsoleFramePresenterImpl;


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(36);
const Application_1 = tslib_1.__importDefault(__webpack_require__(79));
const site_style_1 = tslib_1.__importDefault(__webpack_require__(104));
const ConsoleFramePresenter_1 = __webpack_require__(68);
const tsyringe_1 = __webpack_require__(2);
__webpack_require__(105);
if (window.self === window.top) {
    new ConsoleFramePresenter_1.ConsoleFramePresenterImpl().initialize();
}
try {
    const app = tsyringe_1.container.resolve(Application_1.default);
    app.run();
}
catch (e) {
    console.error(e);
}
const style = window.document.createElement('style');
style.textContent = site_style_1.default;
window.document.head.appendChild(style);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MessageListener_1 = tslib_1.__importDefault(__webpack_require__(80));
const FindController_1 = tslib_1.__importDefault(__webpack_require__(81));
const MarkController_1 = tslib_1.__importDefault(__webpack_require__(83));
const FollowMasterController_1 = tslib_1.__importDefault(__webpack_require__(84));
const FollowSlaveController_1 = tslib_1.__importDefault(__webpack_require__(87));
const FollowKeyController_1 = tslib_1.__importDefault(__webpack_require__(88));
const InputDriver_1 = tslib_1.__importDefault(__webpack_require__(89));
const KeymapController_1 = tslib_1.__importDefault(__webpack_require__(90));
const AddonEnabledUseCase_1 = tslib_1.__importDefault(__webpack_require__(32));
const MarkKeyController_1 = tslib_1.__importDefault(__webpack_require__(96));
const AddonEnabledController_1 = tslib_1.__importDefault(__webpack_require__(97));
const SettingController_1 = tslib_1.__importDefault(__webpack_require__(98));
const ConsoleFrameController_1 = tslib_1.__importDefault(__webpack_require__(100));
const NavigateController_1 = tslib_1.__importDefault(__webpack_require__(102));
const messages = tslib_1.__importStar(__webpack_require__(3));
let Application = class Application {
    constructor(messageListener, findController, markController, followMasterController, followSlaveController, followKeyController, keymapController, addonEnabledUseCase, markKeyController, addonEnabledController, settingController, consoleFrameController, navigateController) {
        this.messageListener = messageListener;
        this.findController = findController;
        this.markController = markController;
        this.followMasterController = followMasterController;
        this.followSlaveController = followSlaveController;
        this.followKeyController = followKeyController;
        this.keymapController = keymapController;
        this.addonEnabledUseCase = addonEnabledUseCase;
        this.markKeyController = markKeyController;
        this.addonEnabledController = addonEnabledController;
        this.settingController = settingController;
        this.consoleFrameController = consoleFrameController;
        this.navigateController = navigateController;
    }
    run() {
        this.routeCommonComponents();
        if (window.self === window.top) {
            this.routeMasterComponents();
        }
    }
    routeMasterComponents() {
        this.messageListener.onWebMessage((msg, sender) => {
            switch (msg.type) {
                case messages.CONSOLE_ENTER_FIND:
                    return this.findController.start(msg);
                case messages.FIND_NEXT:
                    return this.findController.next(msg);
                case messages.FIND_PREV:
                    return this.findController.prev(msg);
                case messages.CONSOLE_UNFOCUS:
                    return this.consoleFrameController.unfocus(msg);
                case messages.FOLLOW_START:
                    return this.followMasterController.followStart(msg);
                case messages.FOLLOW_RESPONSE_COUNT_TARGETS:
                    return this.followMasterController.responseCountTargets(msg, sender);
                case messages.FOLLOW_KEY_PRESS:
                    return this.followMasterController.keyPress(msg);
            }
            return undefined;
        });
        this.messageListener.onBackgroundMessage((msg) => {
            switch (msg.type) {
                case messages.ADDON_ENABLED_QUERY:
                    return this.addonEnabledController.getAddonEnabled(msg);
                case messages.TAB_SCROLL_TO:
                    return this.markController.scrollTo(msg);
            }
            return undefined;
        });
    }
    routeCommonComponents() {
        this.messageListener.onWebMessage((msg) => {
            switch (msg.type) {
                case messages.FOLLOW_REQUEST_COUNT_TARGETS:
                    return this.followSlaveController.countTargets(msg);
                case messages.FOLLOW_CREATE_HINTS:
                    return this.followSlaveController.createHints(msg);
                case messages.FOLLOW_SHOW_HINTS:
                    return this.followSlaveController.showHints(msg);
                case messages.FOLLOW_ACTIVATE:
                    return this.followSlaveController.activate(msg);
                case messages.FOLLOW_REMOVE_HINTS:
                    return this.followSlaveController.clear(msg);
            }
            return undefined;
        });
        this.messageListener.onBackgroundMessage((msg) => {
            switch (msg.type) {
                case messages.SETTINGS_CHANGED:
                    return this.settingController.reloadSettings(msg);
                case messages.ADDON_TOGGLE_ENABLED:
                    return this.addonEnabledUseCase.toggle();
                case messages.NAVIGATE_HISTORY_NEXT:
                    return this.navigateController.openHistoryNext(msg);
                case messages.NAVIGATE_HISTORY_PREV:
                    return this.navigateController.openHistoryPrev(msg);
                case messages.NAVIGATE_LINK_NEXT:
                    return this.navigateController.openLinkNext(msg);
                case messages.NAVIGATE_LINK_PREV:
                    return this.navigateController.openLinkPrev(msg);
            }
        });
        const inputDriver = new InputDriver_1.default(window.document.body);
        inputDriver.onKey(key => this.followKeyController.press(key));
        inputDriver.onKey(key => this.markKeyController.press(key));
        inputDriver.onKey(key => this.keymapController.press(key));
        this.settingController.initSettings();
    }
};
Application = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [MessageListener_1.default,
        FindController_1.default,
        MarkController_1.default,
        FollowMasterController_1.default,
        FollowSlaveController_1.default,
        FollowKeyController_1.default,
        KeymapController_1.default,
        AddonEnabledUseCase_1.default,
        MarkKeyController_1.default,
        AddonEnabledController_1.default,
        SettingController_1.default,
        ConsoleFrameController_1.default,
        NavigateController_1.default])
], Application);
exports.default = Application;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const messages_1 = __webpack_require__(3);
let MessageListener = class MessageListener {
    onWebMessage(listener) {
        window.addEventListener('message', (event) => {
            const sender = event.source;
            if (!(sender instanceof Window)) {
                return;
            }
            let message = null;
            try {
                message = JSON.parse(event.data);
            }
            catch (e) {
                return;
            }
            listener(message, sender);
        });
    }
    onBackgroundMessage(listener) {
        browser.runtime.onMessage.addListener((msg, sender) => {
            return listener(messages_1.valueOf(msg), sender);
        });
    }
};
MessageListener = tslib_1.__decorate([
    tsyringe_1.injectable()
], MessageListener);
exports.default = MessageListener;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const FindUseCase_1 = tslib_1.__importDefault(__webpack_require__(82));
let FindController = class FindController {
    constructor(findUseCase) {
        this.findUseCase = findUseCase;
    }
    async start(m) {
        await this.findUseCase.startFind(m.text);
    }
    async next(_) {
        await this.findUseCase.findNext();
    }
    async prev(_) {
        await this.findUseCase.findPrev();
    }
};
FindController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [FindUseCase_1.default])
], FindController);
exports.default = FindController;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let FindUseCase = class FindUseCase {
    constructor(presenter, repository, client, consoleClient) {
        this.presenter = presenter;
        this.repository = repository;
        this.client = client;
        this.consoleClient = consoleClient;
    }
    async startFind(keyword) {
        this.presenter.clearSelection();
        if (keyword) {
            this.saveKeyword(keyword);
        }
        else {
            const lastKeyword = await this.getKeyword();
            if (!lastKeyword) {
                return this.showNoLastKeywordError();
            }
            this.saveKeyword(lastKeyword);
        }
        return this.findNext();
    }
    findNext() {
        return this.findNextPrev(false);
    }
    findPrev() {
        return this.findNextPrev(true);
    }
    async findNextPrev(backwards) {
        const keyword = await this.getKeyword();
        if (!keyword) {
            return this.showNoLastKeywordError();
        }
        const found = this.presenter.find(keyword, backwards);
        if (found) {
            this.consoleClient.info('Pattern found: ' + keyword);
        }
        else {
            this.consoleClient.error('Pattern not found: ' + keyword);
        }
    }
    async getKeyword() {
        let keyword = this.repository.getLastKeyword();
        if (!keyword) {
            keyword = await this.client.getGlobalLastKeyword();
        }
        return keyword;
    }
    async saveKeyword(keyword) {
        this.repository.setLastKeyword(keyword);
        await this.client.setGlobalLastKeyword(keyword);
    }
    async showNoLastKeywordError() {
        await this.consoleClient.error('No previous search keywords');
    }
};
FindUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('FindPresenter')),
    tslib_1.__param(1, tsyringe_1.inject('FindRepository')),
    tslib_1.__param(2, tsyringe_1.inject('FindClient')),
    tslib_1.__param(3, tsyringe_1.inject('ConsoleClient')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
], FindUseCase);
exports.default = FindUseCase;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MarkUseCase_1 = tslib_1.__importDefault(__webpack_require__(63));
let MarkController = class MarkController {
    constructor(markUseCase) {
        this.markUseCase = markUseCase;
    }
    scrollTo(message) {
        this.markUseCase.scroll(message.x, message.y);
    }
};
MarkController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [MarkUseCase_1.default])
], MarkController);
exports.default = MarkController;


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const FollowMasterUseCase_1 = tslib_1.__importDefault(__webpack_require__(85));
let FollowMasterController = class FollowMasterController {
    constructor(followMasterUseCase) {
        this.followMasterUseCase = followMasterUseCase;
    }
    followStart(m) {
        this.followMasterUseCase.startFollow(m.newTab, m.background);
    }
    responseCountTargets(m, sender) {
        this.followMasterUseCase.createSlaveHints(m.count, sender);
    }
    keyPress(message) {
        if (message.key === '[' && message.ctrlKey) {
            this.followMasterUseCase.cancelFollow();
        }
        else {
            this.followMasterUseCase.enqueue(message.key);
        }
    }
};
FollowMasterController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [FollowMasterUseCase_1.default])
], FollowMasterController);
exports.default = FollowMasterController;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const HintKeyProducer_1 = tslib_1.__importDefault(__webpack_require__(86));
let FollowMasterUseCase = class FollowMasterUseCase {
    constructor(followKeyRepository, followMasterRepository, settingRepository, followSlaveClientFactory) {
        this.followKeyRepository = followKeyRepository;
        this.followMasterRepository = followMasterRepository;
        this.settingRepository = settingRepository;
        this.followSlaveClientFactory = followSlaveClientFactory;
        this.producer = null;
    }
    startFollow(newTab, background) {
        const hintchars = this.settingRepository.get().properties.hintchars;
        this.producer = new HintKeyProducer_1.default(hintchars);
        this.followKeyRepository.clearKeys();
        this.followMasterRepository.setCurrentFollowMode(newTab, background);
        const viewWidth = window.top.innerWidth;
        const viewHeight = window.top.innerHeight;
        this.followSlaveClientFactory.create(window.top).requestHintCount({ width: viewWidth, height: viewHeight }, { x: 0, y: 0 });
        const frameElements = window.document.querySelectorAll('iframe');
        for (let i = 0; i < frameElements.length; ++i) {
            const ele = frameElements[i];
            const { left: frameX, top: frameY } = ele.getBoundingClientRect();
            const client = this.followSlaveClientFactory.create(ele.contentWindow);
            client.requestHintCount({ width: viewWidth, height: viewHeight }, { x: frameX, y: frameY });
        }
    }
    createSlaveHints(count, sender) {
        const produced = [];
        for (let i = 0; i < count; ++i) {
            const tag = this.producer.produce();
            produced.push(tag);
            this.followMasterRepository.addTag(tag);
        }
        const doc = window.document;
        const viewWidth = window.innerWidth || doc.documentElement.clientWidth;
        const viewHeight = window.innerHeight || doc.documentElement.clientHeight;
        let pos = { x: 0, y: 0 };
        if (sender !== window) {
            const frameElements = window.document.querySelectorAll('iframe');
            const ele = Array.from(frameElements).find(e => e.contentWindow === sender);
            if (!ele) {
                return;
            }
            const { left: frameX, top: frameY } = ele.getBoundingClientRect();
            pos = { x: frameX, y: frameY };
        }
        const client = this.followSlaveClientFactory.create(sender);
        client.createHints({ width: viewWidth, height: viewHeight }, pos, produced);
    }
    cancelFollow() {
        this.followMasterRepository.clearTags();
        this.broadcastToSlaves((client) => {
            client.clearHints();
        });
    }
    filter(prefix) {
        this.broadcastToSlaves((client) => {
            client.filterHints(prefix);
        });
    }
    activate(tag) {
        this.followMasterRepository.clearTags();
        const newTab = this.followMasterRepository.getCurrentNewTabMode();
        const background = this.followMasterRepository.getCurrentBackgroundMode();
        this.broadcastToSlaves((client) => {
            client.activateIfExists(tag, newTab, background);
            client.clearHints();
        });
    }
    enqueue(key) {
        switch (key) {
            case 'Enter':
                this.activate(this.getCurrentTag());
                return;
            case 'Esc':
                this.cancelFollow();
                return;
            case 'Backspace':
            case 'Delete':
                this.followKeyRepository.popKey();
                this.filter(this.getCurrentTag());
                return;
        }
        this.followKeyRepository.pushKey(key);
        const tag = this.getCurrentTag();
        const matched = this.followMasterRepository.getTagsByPrefix(tag);
        if (matched.length === 0) {
            this.cancelFollow();
        }
        else if (matched.length === 1) {
            this.activate(tag);
        }
        else {
            this.filter(tag);
        }
    }
    broadcastToSlaves(handler) {
        const allFrames = [window.self].concat(Array.from(window.frames));
        const clients = allFrames.map(w => this.followSlaveClientFactory.create(w));
        for (const client of clients) {
            handler(client);
        }
    }
    getCurrentTag() {
        return this.followKeyRepository.getKeys().join('');
    }
};
FollowMasterUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('FollowKeyRepository')),
    tslib_1.__param(1, tsyringe_1.inject('FollowMasterRepository')),
    tslib_1.__param(2, tsyringe_1.inject('SettingRepository')),
    tslib_1.__param(3, tsyringe_1.inject('FollowSlaveClientFactory')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
], FollowMasterUseCase);
exports.default = FollowMasterUseCase;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class HintKeyProducer {
    constructor(charset) {
        if (charset.length === 0) {
            throw new TypeError('charset is empty');
        }
        this.charset = charset;
        this.counter = [];
    }
    produce() {
        this.increment();
        return this.counter.map(x => this.charset[x]).join('');
    }
    increment() {
        const max = this.charset.length - 1;
        if (this.counter.every(x => x === max)) {
            this.counter = new Array(this.counter.length + 1).fill(0);
            return;
        }
        this.counter.reverse();
        const len = this.charset.length;
        let num = this.counter.reduce((x, y, index) => x + y * len ** index) + 1;
        for (let i = 0; i < this.counter.length; ++i) {
            this.counter[i] = num % len;
            num = ~~(num / len);
        }
        this.counter.reverse();
    }
}
exports.default = HintKeyProducer;


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const FollowSlaveUseCase_1 = tslib_1.__importDefault(__webpack_require__(64));
let FollowSlaveController = class FollowSlaveController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    countTargets(m) {
        this.usecase.countTargets(m.viewSize, m.framePosition);
    }
    createHints(m) {
        this.usecase.createHints(m.viewSize, m.framePosition, m.tags);
    }
    showHints(m) {
        this.usecase.showHints(m.prefix);
    }
    activate(m) {
        this.usecase.activate(m.tag, m.newTab, m.background);
    }
    clear(_m) {
        this.usecase.clear();
    }
};
FollowSlaveController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [FollowSlaveUseCase_1.default])
], FollowSlaveController);
exports.default = FollowSlaveController;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const FollowSlaveUseCase_1 = tslib_1.__importDefault(__webpack_require__(64));
let FollowKeyController = class FollowKeyController {
    constructor(followSlaveUseCase) {
        this.followSlaveUseCase = followSlaveUseCase;
    }
    press(key) {
        if (!this.followSlaveUseCase.isFollowMode()) {
            return false;
        }
        this.followSlaveUseCase.sendKey(key);
        return true;
    }
};
FollowKeyController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [FollowSlaveUseCase_1.default])
], FollowKeyController);
exports.default = FollowKeyController;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const dom = tslib_1.__importStar(__webpack_require__(22));
const Key_1 = tslib_1.__importDefault(__webpack_require__(16));
const cancelKey = (e) => {
    if (e.key === 'Escape') {
        return true;
    }
    if (e.key === '[' && e.ctrlKey) {
        return true;
    }
    return false;
};
const modifiedKeyName = (name) => {
    if (name === ' ') {
        return 'Space';
    }
    if (name.length === 1) {
        return name;
    }
    else if (name === 'Escape') {
        return 'Esc';
    }
    return name;
};
exports.keyFromKeyboardEvent = (e) => {
    const key = modifiedKeyName(e.key);
    let shift = e.shiftKey;
    if (key.length === 1 && key.toUpperCase() === key.toLowerCase()) {
        shift = false;
    }
    return new Key_1.default({
        key: modifiedKeyName(e.key),
        shift: shift,
        ctrl: e.ctrlKey,
        alt: e.altKey,
        meta: e.metaKey,
    });
};
class InputDriver {
    constructor(target) {
        this.pressed = {};
        this.onKeyListeners = [];
        this.pressed = {};
        this.onKeyListeners = [];
        target.addEventListener('keypress', this.onKeyPress.bind(this));
        target.addEventListener('keydown', this.onKeyDown.bind(this));
        target.addEventListener('keyup', this.onKeyUp.bind(this));
    }
    onKey(cb) {
        this.onKeyListeners.push(cb);
    }
    onKeyPress(e) {
        if (this.pressed[e.key] && this.pressed[e.key] !== 'keypress') {
            return;
        }
        this.pressed[e.key] = 'keypress';
        this.capture(e);
    }
    onKeyDown(e) {
        if (this.pressed[e.key] && this.pressed[e.key] !== 'keydown') {
            return;
        }
        this.pressed[e.key] = 'keydown';
        this.capture(e);
    }
    onKeyUp(e) {
        delete this.pressed[e.key];
    }
    capture(e) {
        const target = e.target;
        if (!(target instanceof HTMLElement)) {
            return;
        }
        if (this.fromInput(target)) {
            if (cancelKey(e) && target.blur) {
                target.blur();
            }
            return;
        }
        if (['Shift', 'Control', 'Alt', 'OS'].includes(e.key)) {
            return;
        }
        const key = exports.keyFromKeyboardEvent(e);
        for (const listener of this.onKeyListeners) {
            const stop = listener(key);
            if (stop) {
                e.preventDefault();
                e.stopPropagation();
                break;
            }
        }
    }
    fromInput(e) {
        return e instanceof HTMLInputElement ||
            e instanceof HTMLTextAreaElement ||
            e instanceof HTMLSelectElement ||
            dom.isContentEditable(e);
    }
}
exports.default = InputDriver;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const operations = tslib_1.__importStar(__webpack_require__(6));
const KeymapUseCase_1 = tslib_1.__importDefault(__webpack_require__(91));
const AddonEnabledUseCase_1 = tslib_1.__importDefault(__webpack_require__(32));
const FindSlaveUseCase_1 = tslib_1.__importDefault(__webpack_require__(92));
const ScrollUseCase_1 = tslib_1.__importDefault(__webpack_require__(93));
const FocusUseCase_1 = tslib_1.__importDefault(__webpack_require__(94));
const ClipboardUseCase_1 = tslib_1.__importDefault(__webpack_require__(95));
const MarkKeyUseCase_1 = tslib_1.__importDefault(__webpack_require__(67));
let KeymapController = class KeymapController {
    constructor(keymapUseCase, addonEnabledUseCase, findSlaveUseCase, scrollUseCase, focusUseCase, clipbaordUseCase, markKeyUseCase, operationClient, followMasterClient) {
        this.keymapUseCase = keymapUseCase;
        this.addonEnabledUseCase = addonEnabledUseCase;
        this.findSlaveUseCase = findSlaveUseCase;
        this.scrollUseCase = scrollUseCase;
        this.focusUseCase = focusUseCase;
        this.clipbaordUseCase = clipbaordUseCase;
        this.markKeyUseCase = markKeyUseCase;
        this.operationClient = operationClient;
        this.followMasterClient = followMasterClient;
    }
    press(key) {
        const nextOp = this.keymapUseCase.nextOps(key);
        if (nextOp === null) {
            return false;
        }
        if (!operations.isNRepeatable(nextOp.op.type)) {
            nextOp.repeat = 1;
        }
        const doFunc = ((op) => {
            switch (op.type) {
                case operations.ADDON_ENABLE:
                    return () => this.addonEnabledUseCase.enable();
                case operations.ADDON_DISABLE:
                    return () => this.addonEnabledUseCase.disable();
                case operations.ADDON_TOGGLE_ENABLED:
                    return () => this.addonEnabledUseCase.toggle();
                case operations.FIND_NEXT:
                    return () => this.findSlaveUseCase.findNext();
                case operations.FIND_PREV:
                    return () => this.findSlaveUseCase.findPrev();
                case operations.SCROLL_VERTICALLY:
                    return () => this.scrollUseCase.scrollVertically(op.count);
                case operations.SCROLL_HORIZONALLY:
                    return () => this.scrollUseCase.scrollHorizonally(op.count);
                case operations.SCROLL_PAGES:
                    return () => this.scrollUseCase.scrollPages(op.count);
                case operations.SCROLL_TOP:
                    return () => this.scrollUseCase.scrollToTop();
                case operations.SCROLL_BOTTOM:
                    return () => this.scrollUseCase.scrollToBottom();
                case operations.SCROLL_HOME:
                    return () => this.scrollUseCase.scrollToHome();
                case operations.SCROLL_END:
                    return () => this.scrollUseCase.scrollToEnd();
                case operations.FOLLOW_START:
                    return () => this.followMasterClient.startFollow(op.newTab, op.background);
                case operations.MARK_SET_PREFIX:
                    return () => this.markKeyUseCase.enableSetMode();
                case operations.MARK_JUMP_PREFIX:
                    return () => this.markKeyUseCase.enableJumpMode();
                case operations.FOCUS_INPUT:
                    return () => this.focusUseCase.focusFirstInput();
                case operations.URLS_YANK:
                    return () => this.clipbaordUseCase.yankCurrentURL();
                case operations.URLS_PASTE:
                    return () => this.clipbaordUseCase.openOrSearch(op.newTab ? op.newTab : false);
                default:
                    return null;
            }
        })(nextOp.op);
        if (doFunc === null) {
            this.operationClient.execBackgroundOp(nextOp.repeat, nextOp.op);
        }
        else {
            for (let i = 0; i < nextOp.repeat; ++i) {
                doFunc();
            }
        }
        return true;
    }
};
KeymapController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(7, tsyringe_1.inject('OperationClient')),
    tslib_1.__param(8, tsyringe_1.inject('FollowMasterClient')),
    tslib_1.__metadata("design:paramtypes", [KeymapUseCase_1.default,
        AddonEnabledUseCase_1.default,
        FindSlaveUseCase_1.default,
        ScrollUseCase_1.default,
        FocusUseCase_1.default,
        ClipboardUseCase_1.default,
        MarkKeyUseCase_1.default, Object, Object])
], KeymapController);
exports.default = KeymapController;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const operations = tslib_1.__importStar(__webpack_require__(6));
const Keymaps_1 = tslib_1.__importDefault(__webpack_require__(14));
const KeySequence_1 = tslib_1.__importDefault(__webpack_require__(66));
const reservedKeymaps = Keymaps_1.default.fromJSON({
    '<Esc>': { type: operations.CANCEL },
    '<C-[>': { type: operations.CANCEL },
});
const enableAddonOps = [
    operations.ADDON_ENABLE,
    operations.ADDON_TOGGLE_ENABLED,
];
let KeymapUseCase = class KeymapUseCase {
    constructor(repository, settingRepository, addonEnabledRepository, addressRepository) {
        this.repository = repository;
        this.settingRepository = settingRepository;
        this.addonEnabledRepository = addonEnabledRepository;
        this.addressRepository = addressRepository;
    }
    nextOps(key) {
        const sequence = this.repository.enqueueKey(key);
        const baseSequence = sequence.trimNumericPrefix();
        const keymaps = this.keymapEntityMap();
        const matched = keymaps.filter(([seq]) => seq.startsWith(sequence));
        const baseMatched = keymaps.filter(([seq]) => seq.startsWith(baseSequence));
        if (baseSequence.length() === 1 && this.blacklistKey(key)) {
            this.repository.clear();
            return null;
        }
        if (matched.length === 1 &&
            sequence.length() === matched[0][0].length()) {
            this.repository.clear();
            return { repeat: 1, op: matched[0][1] };
        }
        else if (baseMatched.length === 1 &&
            baseSequence.length() === baseMatched[0][0].length()) {
            this.repository.clear();
            return { repeat: sequence.repeatCount(), op: baseMatched[0][1] };
        }
        else if (matched.length >= 1 || baseMatched.length >= 1) {
            return null;
        }
        this.repository.clear();
        return null;
    }
    keymapEntityMap() {
        const keymaps = this.settingRepository.get().keymaps.combine(reservedKeymaps);
        let entries = keymaps.entries().map(([keys, op]) => [KeySequence_1.default.fromMapKeys(keys), op]);
        if (!this.addonEnabledRepository.get()) {
            entries = entries.filter(([_seq, { type }]) => enableAddonOps.includes(type));
        }
        return entries;
    }
    blacklistKey(key) {
        const url = this.addressRepository.getCurrentURL();
        const blacklist = this.settingRepository.get().blacklist;
        return blacklist.includeKey(url, key);
    }
};
KeymapUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('KeymapRepository')),
    tslib_1.__param(1, tsyringe_1.inject('SettingRepository')),
    tslib_1.__param(2, tsyringe_1.inject('AddonEnabledRepository')),
    tslib_1.__param(3, tsyringe_1.inject('AddressRepository')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
], KeymapUseCase);
exports.default = KeymapUseCase;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let FindSlaveUseCase = class FindSlaveUseCase {
    constructor(findMasterClient) {
        this.findMasterClient = findMasterClient;
    }
    findNext() {
        this.findMasterClient.findNext();
    }
    findPrev() {
        this.findMasterClient.findPrev();
    }
};
FindSlaveUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('FindMasterClient')),
    tslib_1.__metadata("design:paramtypes", [Object])
], FindSlaveUseCase);
exports.default = FindSlaveUseCase;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let ScrollUseCase = class ScrollUseCase {
    constructor(presenter, settingRepository) {
        this.presenter = presenter;
        this.settingRepository = settingRepository;
    }
    scrollVertically(count) {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollVertically(count, smooth);
    }
    scrollHorizonally(count) {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollHorizonally(count, smooth);
    }
    scrollPages(count) {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollPages(count, smooth);
    }
    scrollToTop() {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollToTop(smooth);
    }
    scrollToBottom() {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollToBottom(smooth);
    }
    scrollToHome() {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollToHome(smooth);
    }
    scrollToEnd() {
        const smooth = this.getSmoothScroll();
        this.presenter.scrollToEnd(smooth);
    }
    getSmoothScroll() {
        const settings = this.settingRepository.get();
        return settings.properties.smoothscroll;
    }
};
ScrollUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('ScrollPresenter')),
    tslib_1.__param(1, tsyringe_1.inject('SettingRepository')),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], ScrollUseCase);
exports.default = ScrollUseCase;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let FocusUseCases = class FocusUseCases {
    constructor(presenter) {
        this.presenter = presenter;
    }
    focusFirstInput() {
        this.presenter.focusFirstElement();
    }
};
FocusUseCases = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('FocusPresenter')),
    tslib_1.__metadata("design:paramtypes", [Object])
], FocusUseCases);
exports.default = FocusUseCases;


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const urls = tslib_1.__importStar(__webpack_require__(33));
let ClipboardUseCase = class ClipboardUseCase {
    constructor(repository, settingRepository, consoleClient, operationClinet) {
        this.repository = repository;
        this.settingRepository = settingRepository;
        this.consoleClient = consoleClient;
        this.operationClinet = operationClinet;
    }
    async yankCurrentURL() {
        const url = window.location.href;
        this.repository.write(url);
        await this.consoleClient.info('Yanked ' + url);
        return Promise.resolve(url);
    }
    async openOrSearch(newTab) {
        const search = this.settingRepository.get().search;
        const text = this.repository.read();
        const url = urls.searchUrl(text, search);
        await this.operationClinet.internalOpenUrl(url, newTab);
    }
};
ClipboardUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('ClipboardRepository')),
    tslib_1.__param(1, tsyringe_1.inject('SettingRepository')),
    tslib_1.__param(2, tsyringe_1.inject('ConsoleClient')),
    tslib_1.__param(3, tsyringe_1.inject('OperationClient')),
    tslib_1.__metadata("design:paramtypes", [Object, Object, Object, Object])
], ClipboardUseCase);
exports.default = ClipboardUseCase;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MarkUseCase_1 = tslib_1.__importDefault(__webpack_require__(63));
const MarkKeyUseCase_1 = tslib_1.__importDefault(__webpack_require__(67));
let MarkKeyController = class MarkKeyController {
    constructor(markUseCase, markKeyUseCase) {
        this.markUseCase = markUseCase;
        this.markKeyUseCase = markKeyUseCase;
    }
    press(key) {
        if (this.markKeyUseCase.isSetMode()) {
            this.markUseCase.set(key.key);
            this.markKeyUseCase.disableSetMode();
            return true;
        }
        if (this.markKeyUseCase.isJumpMode()) {
            this.markUseCase.jump(key.key);
            this.markKeyUseCase.disableJumpMode();
            return true;
        }
        return false;
    }
};
MarkKeyController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [MarkUseCase_1.default,
        MarkKeyUseCase_1.default])
], MarkKeyController);
exports.default = MarkKeyController;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const AddonEnabledUseCase_1 = tslib_1.__importDefault(__webpack_require__(32));
let AddonEnabledController = class AddonEnabledController {
    constructor(addonEnabledUseCase) {
        this.addonEnabledUseCase = addonEnabledUseCase;
    }
    getAddonEnabled(_message) {
        const enabled = this.addonEnabledUseCase.getEnabled();
        return Promise.resolve(enabled);
    }
};
AddonEnabledController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [AddonEnabledUseCase_1.default])
], AddonEnabledController);
exports.default = AddonEnabledController;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const AddonEnabledUseCase_1 = tslib_1.__importDefault(__webpack_require__(32));
const SettingUseCase_1 = tslib_1.__importDefault(__webpack_require__(99));
let SettingController = class SettingController {
    constructor(addonEnabledUseCase, settingUseCase) {
        this.addonEnabledUseCase = addonEnabledUseCase;
        this.settingUseCase = settingUseCase;
    }
    async initSettings() {
        try {
            const current = await this.settingUseCase.reload();
            const url = new URL(window.location.href);
            const disabled = current.blacklist.includesEntireBlacklist(url);
            if (disabled) {
                await this.addonEnabledUseCase.disable();
            }
            else {
                await this.addonEnabledUseCase.enable();
            }
        }
        catch (e) {
            console.warn(e);
            setTimeout(() => this.initSettings(), 500);
        }
    }
    async reloadSettings(_message) {
        await this.settingUseCase.reload();
    }
};
SettingController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [AddonEnabledUseCase_1.default,
        SettingUseCase_1.default])
], SettingController);
exports.default = SettingController;


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let SettingUseCase = class SettingUseCase {
    constructor(repository, client) {
        this.repository = repository;
        this.client = client;
    }
    async reload() {
        const settings = await this.client.load();
        this.repository.set(settings);
        return settings;
    }
};
SettingUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('SettingRepository')),
    tslib_1.__param(1, tsyringe_1.inject('SettingClient')),
    tslib_1.__metadata("design:paramtypes", [Object, Object])
], SettingUseCase);
exports.default = SettingUseCase;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const ConsoleFrameUseCase_1 = tslib_1.__importDefault(__webpack_require__(101));
let ConsoleFrameController = class ConsoleFrameController {
    constructor(consoleFrameUseCase) {
        this.consoleFrameUseCase = consoleFrameUseCase;
    }
    unfocus(_message) {
        this.consoleFrameUseCase.unfocus();
    }
};
ConsoleFrameController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [ConsoleFrameUseCase_1.default])
], ConsoleFrameController);
exports.default = ConsoleFrameController;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let ConsoleFrameUseCase = class ConsoleFrameUseCase {
    constructor(consoleFramePresenter) {
        this.consoleFramePresenter = consoleFramePresenter;
    }
    unfocus() {
        window.focus();
        this.consoleFramePresenter.blur();
    }
};
ConsoleFrameUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('ConsoleFramePresenter')),
    tslib_1.__metadata("design:paramtypes", [Object])
], ConsoleFrameUseCase);
exports.default = ConsoleFrameUseCase;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const NavigateUseCase_1 = tslib_1.__importDefault(__webpack_require__(103));
let NavigateController = class NavigateController {
    constructor(navigateUseCase) {
        this.navigateUseCase = navigateUseCase;
    }
    openHistoryNext(_m) {
        this.navigateUseCase.openHistoryNext();
        return Promise.resolve();
    }
    openHistoryPrev(_m) {
        this.navigateUseCase.openHistoryPrev();
        return Promise.resolve();
    }
    openLinkNext(_m) {
        this.navigateUseCase.openLinkNext();
        return Promise.resolve();
    }
    openLinkPrev(_m) {
        this.navigateUseCase.openLinkPrev();
        return Promise.resolve();
    }
};
NavigateController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [NavigateUseCase_1.default])
], NavigateController);
exports.default = NavigateController;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let NavigateUseCase = class NavigateUseCase {
    constructor(navigationPresenter) {
        this.navigationPresenter = navigationPresenter;
    }
    openHistoryPrev() {
        this.navigationPresenter.openHistoryPrev();
    }
    openHistoryNext() {
        this.navigationPresenter.openHistoryNext();
    }
    openLinkPrev() {
        this.navigationPresenter.openLinkPrev();
    }
    openLinkNext() {
        this.navigationPresenter.openLinkNext();
    }
};
NavigateUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__param(0, tsyringe_1.inject('NavigationPresenter')),
    tslib_1.__metadata("design:paramtypes", [Object])
], NavigateUseCase);
exports.default = NavigateUseCase;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
.vimvixen-console-frame {
  margin: 0;
  padding: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 2147483647;
  border: none;
  background-color: unset;
  pointer-events:none;
}

.vimvixen-hint {
  background-color: yellow;
  border: 1px solid gold;
  font-weight: bold;
  position: absolute;
  text-transform: uppercase;
  z-index: 2147483647;
  font-size: 12px;
  color: black;
}
`;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const AddonEnabledRepository_1 = __webpack_require__(106);
const AddonIndicatorClient_1 = __webpack_require__(107);
const AddressRepository_1 = __webpack_require__(108);
const ClipboardRepository_1 = __webpack_require__(109);
const ConsoleClient_1 = __webpack_require__(110);
const ConsoleFramePresenter_1 = __webpack_require__(68);
const FindClient_1 = __webpack_require__(111);
const FindMasterClient_1 = __webpack_require__(112);
const FindPresenter_1 = __webpack_require__(113);
const FindRepository_1 = __webpack_require__(114);
const FocusPresenter_1 = __webpack_require__(115);
const FollowKeyRepository_1 = __webpack_require__(116);
const FollowMasterClient_1 = __webpack_require__(117);
const FollowMasterRepository_1 = __webpack_require__(118);
const FollowPresenter_1 = __webpack_require__(119);
const FollowSlaveClientFactory_1 = __webpack_require__(120);
const FollowSlaveRepository_1 = __webpack_require__(122);
const KeymapRepository_1 = __webpack_require__(123);
const MarkClient_1 = __webpack_require__(124);
const MarkKeyRepository_1 = __webpack_require__(125);
const MarkRepository_1 = __webpack_require__(126);
const NavigationPresenter_1 = __webpack_require__(127);
const OperationClient_1 = __webpack_require__(128);
const ScrollPresenter_1 = __webpack_require__(129);
const SettingClient_1 = __webpack_require__(130);
const SettingRepository_1 = __webpack_require__(131);
const TabsClient_1 = __webpack_require__(132);
const tsyringe_1 = __webpack_require__(2);
tsyringe_1.container.register('FollowMasterClient', { useValue: new FollowMasterClient_1.FollowMasterClientImpl(window.top) });
tsyringe_1.container.register('AddonEnabledRepository', { useClass: AddonEnabledRepository_1.AddonEnabledRepositoryImpl });
tsyringe_1.container.register('AddonIndicatorClient', { useClass: AddonIndicatorClient_1.AddonIndicatorClientImpl });
tsyringe_1.container.register('AddressRepository', { useClass: AddressRepository_1.AddressRepositoryImpl });
tsyringe_1.container.register('ClipboardRepository', { useClass: ClipboardRepository_1.ClipboardRepositoryImpl });
tsyringe_1.container.register('ConsoleClient', { useClass: ConsoleClient_1.ConsoleClientImpl });
tsyringe_1.container.register('ConsoleFramePresenter', { useClass: ConsoleFramePresenter_1.ConsoleFramePresenterImpl });
tsyringe_1.container.register('FindClient', { useClass: FindClient_1.FindClientImpl });
tsyringe_1.container.register('FindMasterClient', { useClass: FindMasterClient_1.FindMasterClientImpl });
tsyringe_1.container.register('FindPresenter', { useClass: FindPresenter_1.FindPresenterImpl });
tsyringe_1.container.register('FindRepository', { useClass: FindRepository_1.FindRepositoryImpl });
tsyringe_1.container.register('FocusPresenter', { useClass: FocusPresenter_1.FocusPresenterImpl });
tsyringe_1.container.register('FollowKeyRepository', { useClass: FollowKeyRepository_1.FollowKeyRepositoryImpl });
tsyringe_1.container.register('FollowMasterRepository', { useClass: FollowMasterRepository_1.FollowMasterRepositoryImpl });
tsyringe_1.container.register('FollowPresenter', { useClass: FollowPresenter_1.FollowPresenterImpl });
tsyringe_1.container.register('FollowSlaveClientFactory', { useClass: FollowSlaveClientFactory_1.FollowSlaveClientFactoryImpl });
tsyringe_1.container.register('FollowSlaveRepository', { useClass: FollowSlaveRepository_1.FollowSlaveRepositoryImpl });
tsyringe_1.container.register('KeymapRepository', { useClass: KeymapRepository_1.KeymapRepositoryImpl });
tsyringe_1.container.register('MarkClient', { useClass: MarkClient_1.MarkClientImpl });
tsyringe_1.container.register('MarkKeyRepository', { useClass: MarkKeyRepository_1.MarkKeyRepositoryImpl });
tsyringe_1.container.register('MarkRepository', { useClass: MarkRepository_1.MarkRepositoryImpl });
tsyringe_1.container.register('NavigationPresenter', { useClass: NavigationPresenter_1.NavigationPresenterImpl });
tsyringe_1.container.register('OperationClient', { useClass: OperationClient_1.OperationClientImpl });
tsyringe_1.container.register('ScrollPresenter', { useClass: ScrollPresenter_1.ScrollPresenterImpl });
tsyringe_1.container.register('SettingClient', { useClass: SettingClient_1.SettingClientImpl });
tsyringe_1.container.register('SettingRepository', { useClass: SettingRepository_1.SettingRepositoryImpl });
tsyringe_1.container.register('TabsClient', { useClass: TabsClient_1.TabsClientImpl });


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let enabled = false;
class AddonEnabledRepositoryImpl {
    set(on) {
        enabled = on;
    }
    get() {
        return enabled;
    }
}
exports.AddonEnabledRepositoryImpl = AddonEnabledRepositoryImpl;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class AddonIndicatorClientImpl {
    setEnabled(enabled) {
        return browser.runtime.sendMessage({
            type: messages.ADDON_ENABLED_RESPONSE,
            enabled,
        });
    }
}
exports.AddonIndicatorClientImpl = AddonIndicatorClientImpl;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AddressRepositoryImpl {
    getCurrentURL() {
        return new URL(window.location.href);
    }
}
exports.AddressRepositoryImpl = AddressRepositoryImpl;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ClipboardRepositoryImpl {
    read() {
        const textarea = window.document.createElement('textarea');
        window.document.body.append(textarea);
        textarea.style.position = 'fixed';
        textarea.style.top = '-100px';
        textarea.contentEditable = 'true';
        textarea.focus();
        const ok = window.document.execCommand('paste');
        const value = textarea.textContent;
        textarea.remove();
        if (!ok) {
            throw new Error('failed to access clipbaord');
        }
        return value;
    }
    write(text) {
        const input = window.document.createElement('input');
        window.document.body.append(input);
        input.style.position = 'fixed';
        input.style.top = '-100px';
        input.value = text;
        input.select();
        const ok = window.document.execCommand('copy');
        input.remove();
        if (!ok) {
            throw new Error('failed to access clipbaord');
        }
    }
}
exports.ClipboardRepositoryImpl = ClipboardRepositoryImpl;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class ConsoleClientImpl {
    async info(text) {
        await browser.runtime.sendMessage({
            type: messages.CONSOLE_FRAME_MESSAGE,
            message: {
                type: messages.CONSOLE_SHOW_INFO,
                text,
            },
        });
    }
    async error(text) {
        await browser.runtime.sendMessage({
            type: messages.CONSOLE_FRAME_MESSAGE,
            message: {
                type: messages.CONSOLE_SHOW_ERROR,
                text,
            },
        });
    }
}
exports.ConsoleClientImpl = ConsoleClientImpl;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class FindClientImpl {
    async getGlobalLastKeyword() {
        const keyword = await browser.runtime.sendMessage({
            type: messages.FIND_GET_KEYWORD,
        });
        return keyword;
    }
    async setGlobalLastKeyword(keyword) {
        await browser.runtime.sendMessage({
            type: messages.FIND_SET_KEYWORD,
            keyword: keyword,
        });
    }
}
exports.FindClientImpl = FindClientImpl;


/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class FindMasterClientImpl {
    findNext() {
        window.top.postMessage(JSON.stringify({
            type: messages.FIND_NEXT,
        }), '*');
    }
    findPrev() {
        window.top.postMessage(JSON.stringify({
            type: messages.FIND_PREV,
        }), '*');
    }
}
exports.FindMasterClientImpl = FindMasterClientImpl;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class FindPresenterImpl {
    find(keyword, backwards) {
        const caseSensitive = false;
        const wrapScan = true;
        const found = window.find(keyword, caseSensitive, backwards, wrapScan);
        if (found) {
            return found;
        }
        this.clearSelection();
        return window.find(keyword, caseSensitive, backwards, wrapScan);
    }
    clearSelection() {
        const sel = window.getSelection();
        if (sel) {
            sel.removeAllRanges();
        }
    }
}
exports.FindPresenterImpl = FindPresenterImpl;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
let current = null;
class FindRepositoryImpl {
    getLastKeyword() {
        return current;
    }
    setLastKeyword(keyword) {
        current = keyword;
    }
}
exports.FindRepositoryImpl = FindRepositoryImpl;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const doms = tslib_1.__importStar(__webpack_require__(22));
class FocusPresenterImpl {
    focusFirstElement() {
        const inputTypes = ['email', 'number', 'search', 'tel', 'text', 'url'];
        const inputSelector = inputTypes.map(type => `input[type=${type}]`).join(',');
        const targets = window.document.querySelectorAll(inputSelector + ',textarea');
        const target = Array.from(targets).find(doms.isVisible);
        if (target instanceof HTMLInputElement) {
            target.focus();
            return true;
        }
        else if (target instanceof HTMLTextAreaElement) {
            target.focus();
            return true;
        }
        return false;
    }
}
exports.FocusPresenterImpl = FocusPresenterImpl;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const current = {
    keys: [],
};
class FollowKeyRepositoryImpl {
    getKeys() {
        return current.keys;
    }
    pushKey(key) {
        current.keys.push(key);
    }
    popKey() {
        current.keys.pop();
    }
    clearKeys() {
        current.keys = [];
    }
}
exports.FollowKeyRepositoryImpl = FollowKeyRepositoryImpl;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class FollowMasterClientImpl {
    constructor(window) {
        this.window = window;
    }
    startFollow(newTab, background) {
        this.postMessage({
            type: messages.FOLLOW_START,
            newTab,
            background,
        });
    }
    responseHintCount(count) {
        this.postMessage({
            type: messages.FOLLOW_RESPONSE_COUNT_TARGETS,
            count,
        });
    }
    sendKey(key) {
        this.postMessage({
            type: messages.FOLLOW_KEY_PRESS,
            key: key.key,
            ctrlKey: key.ctrl || false,
        });
    }
    postMessage(msg) {
        this.window.postMessage(JSON.stringify(msg), '*');
    }
}
exports.FollowMasterClientImpl = FollowMasterClientImpl;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const current = {
    newTab: false,
    background: false,
    tags: [],
};
class FollowMasterRepositoryImpl {
    setCurrentFollowMode(newTab, background) {
        current.newTab = newTab;
        current.background = background;
    }
    getTags() {
        return current.tags;
    }
    getTagsByPrefix(prefix) {
        return current.tags.filter(t => t.startsWith(prefix));
    }
    addTag(tag) {
        current.tags.push(tag);
    }
    clearTags() {
        current.tags = [];
    }
    getCurrentNewTabMode() {
        return current.newTab;
    }
    getCurrentBackgroundMode() {
        return current.background;
    }
}
exports.FollowMasterRepositoryImpl = FollowMasterRepositoryImpl;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Hint_1 = __webpack_require__(65);
const doms = tslib_1.__importStar(__webpack_require__(22));
const TARGET_SELECTOR = [
    'a', 'button', 'input', 'textarea', 'area',
    '[contenteditable=true]', '[contenteditable=""]', '[tabindex]',
    '[role="button"]', 'summary'
].join(',');
const inViewport = (win, element, viewSize, framePosition) => {
    const { top, left, bottom, right } = doms.viewportRect(element);
    const doc = win.document;
    const frameWidth = doc.documentElement.clientWidth;
    const frameHeight = doc.documentElement.clientHeight;
    if (right < 0 || bottom < 0 || top > frameHeight || left > frameWidth) {
        return false;
    }
    if (right + framePosition.x < 0 || bottom + framePosition.y < 0 ||
        left + framePosition.x > viewSize.width ||
        top + framePosition.y > viewSize.height) {
        return false;
    }
    return true;
};
const isAriaHiddenOrAriaDisabled = (win, element) => {
    if (!element || win.document.documentElement === element) {
        return false;
    }
    for (const attr of ['aria-hidden', 'aria-disabled']) {
        const value = element.getAttribute(attr);
        if (value !== null) {
            const hidden = value.toLowerCase();
            if (hidden === '' || hidden === 'true') {
                return true;
            }
        }
    }
    return isAriaHiddenOrAriaDisabled(win, element.parentElement);
};
class FollowPresenterImpl {
    constructor() {
        this.hints = [];
    }
    getTargetCount(viewSize, framePosition) {
        const targets = this.getTargets(viewSize, framePosition);
        return targets.length;
    }
    createHints(viewSize, framePosition, tags) {
        const targets = this.getTargets(viewSize, framePosition);
        const min = Math.min(targets.length, tags.length);
        for (let i = 0; i < min; ++i) {
            const target = targets[i];
            if (target instanceof HTMLAnchorElement ||
                target instanceof HTMLAreaElement) {
                this.hints.push(new Hint_1.LinkHint(target, tags[i]));
            }
            else {
                this.hints.push(new Hint_1.InputHint(target, tags[i]));
            }
        }
    }
    filterHints(prefix) {
        const shown = this.hints.filter(h => h.getTag().startsWith(prefix));
        const hidden = this.hints.filter(h => !h.getTag().startsWith(prefix));
        shown.forEach(h => h.show());
        hidden.forEach(h => h.hide());
    }
    clearHints() {
        this.hints.forEach(h => h.remove());
        this.hints = [];
    }
    getHint(tag) {
        return this.hints.find(h => h.getTag() === tag);
    }
    getTargets(viewSize, framePosition) {
        const all = window.document.querySelectorAll(TARGET_SELECTOR);
        const filtered = Array.prototype.filter.call(all, (element) => {
            const style = window.getComputedStyle(element);
            return (element.tagName === 'AREA' || style.display !== 'none') &&
                style.visibility !== 'hidden' &&
                element.type !== 'hidden' &&
                element.offsetHeight > 0 &&
                !isAriaHiddenOrAriaDisabled(window, element) &&
                inViewport(window, element, viewSize, framePosition);
        });
        return filtered;
    }
}
exports.FollowPresenterImpl = FollowPresenterImpl;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const FollowSlaveClient_1 = __webpack_require__(121);
class FollowSlaveClientFactoryImpl {
    create(window) {
        return new FollowSlaveClient_1.FollowSlaveClientImpl(window);
    }
}
exports.FollowSlaveClientFactoryImpl = FollowSlaveClientFactoryImpl;


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class FollowSlaveClientImpl {
    constructor(target) {
        this.target = target;
    }
    filterHints(prefix) {
        this.postMessage({
            type: messages.FOLLOW_SHOW_HINTS,
            prefix,
        });
    }
    requestHintCount(viewSize, framePosition) {
        this.postMessage({
            type: messages.FOLLOW_REQUEST_COUNT_TARGETS,
            viewSize,
            framePosition,
        });
    }
    createHints(viewSize, framePosition, tags) {
        this.postMessage({
            type: messages.FOLLOW_CREATE_HINTS,
            viewSize,
            framePosition,
            tags,
        });
    }
    clearHints() {
        this.postMessage({
            type: messages.FOLLOW_REMOVE_HINTS,
        });
    }
    activateIfExists(tag, newTab, background) {
        this.postMessage({
            type: messages.FOLLOW_ACTIVATE,
            tag,
            newTab,
            background,
        });
    }
    postMessage(msg) {
        this.target.postMessage(JSON.stringify(msg), '*');
    }
}
exports.FollowSlaveClientImpl = FollowSlaveClientImpl;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const current = {
    enabled: false,
};
class FollowSlaveRepositoryImpl {
    enableFollowMode() {
        current.enabled = true;
    }
    disableFollowMode() {
        current.enabled = false;
    }
    isFollowMode() {
        return current.enabled;
    }
}
exports.FollowSlaveRepositoryImpl = FollowSlaveRepositoryImpl;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const KeySequence_1 = tslib_1.__importDefault(__webpack_require__(66));
let current = new KeySequence_1.default([]);
class KeymapRepositoryImpl {
    enqueueKey(key) {
        current.push(key);
        return current;
    }
    clear() {
        current = new KeySequence_1.default([]);
    }
}
exports.KeymapRepositoryImpl = KeymapRepositoryImpl;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class MarkClientImpl {
    async setGloablMark(key, mark) {
        await browser.runtime.sendMessage({
            type: messages.MARK_SET_GLOBAL,
            key,
            x: mark.x,
            y: mark.y,
        });
    }
    async jumpGlobalMark(key) {
        await browser.runtime.sendMessage({
            type: messages.MARK_JUMP_GLOBAL,
            key,
        });
    }
}
exports.MarkClientImpl = MarkClientImpl;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const current = {
    setMode: false,
    jumpMode: false,
};
class MarkKeyRepositoryImpl {
    isSetMode() {
        return current.setMode;
    }
    enableSetMode() {
        current.setMode = true;
    }
    disabeSetMode() {
        current.setMode = false;
    }
    isJumpMode() {
        return current.jumpMode;
    }
    enableJumpMode() {
        current.jumpMode = true;
    }
    disabeJumpMode() {
        current.jumpMode = false;
    }
}
exports.MarkKeyRepositoryImpl = MarkKeyRepositoryImpl;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const saved = {};
class MarkRepositoryImpl {
    set(key, mark) {
        saved[key] = mark;
    }
    get(key) {
        const v = saved[key];
        if (!v) {
            return null;
        }
        return Object.assign({}, v);
    }
}
exports.MarkRepositoryImpl = MarkRepositoryImpl;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const REL_PATTERN = {
    prev: /^(?:prev(?:ious)?|older)\b|\u2039|\u2190|\xab|\u226a|<</i,
    next: /^(?:next|newer)\b|\u203a|\u2192|\xbb|\u226b|>>/i,
};
function selectLast(selector, filter) {
    let nodes = Array.from(window.document.querySelectorAll(selector));
    if (filter) {
        nodes = nodes.filter(filter);
    }
    return nodes.length ? nodes[nodes.length - 1] : null;
}
class NavigationPresenterImpl {
    openHistoryPrev() {
        window.history.back();
    }
    openHistoryNext() {
        window.history.forward();
    }
    openLinkPrev() {
        this.linkRel('prev');
    }
    openLinkNext() {
        this.linkRel('next');
    }
    linkRel(rel) {
        const link = selectLast(`link[rel~=${rel}][href]`);
        if (link) {
            window.location.href = link.href;
            return;
        }
        const pattern = REL_PATTERN[rel];
        const a = selectLast(`a[rel~=${rel}][href]`) ||
            selectLast('a[href]', lnk => pattern.test(lnk.innerText));
        if (a) {
            a.click();
        }
    }
}
exports.NavigationPresenterImpl = NavigationPresenterImpl;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const operations = tslib_1.__importStar(__webpack_require__(6));
const messages = tslib_1.__importStar(__webpack_require__(3));
class OperationClientImpl {
    execBackgroundOp(repeat, op) {
        return browser.runtime.sendMessage({
            type: messages.BACKGROUND_OPERATION,
            repeat,
            operation: op,
        });
    }
    internalOpenUrl(url, newTab, background) {
        return browser.runtime.sendMessage({
            type: messages.BACKGROUND_OPERATION,
            repeat: 1,
            operation: {
                type: operations.INTERNAL_OPEN_URL,
                url,
                newTab,
                background,
            },
        });
    }
}
exports.OperationClientImpl = OperationClientImpl;


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const doms = tslib_1.__importStar(__webpack_require__(22));
const SCROLL_DELTA_X = 64;
const SCROLL_DELTA_Y = 64;
let scrolling = false;
let lastTimeoutId = null;
const isScrollableStyle = (element) => {
    const { overflowX, overflowY } = window.getComputedStyle(element);
    return !(overflowX !== 'scroll' && overflowX !== 'auto' &&
        overflowY !== 'scroll' && overflowY !== 'auto');
};
const isOverflowed = (element) => {
    return element.scrollWidth > element.clientWidth ||
        element.scrollHeight > element.clientHeight;
};
const findScrollable = (element) => {
    if (isScrollableStyle(element) && isOverflowed(element)) {
        return element;
    }
    const children = Array.from(element.children).filter(doms.isVisible);
    for (const child of children) {
        const scrollable = findScrollable(child);
        if (scrollable) {
            return scrollable;
        }
    }
    return null;
};
const scrollTarget = () => {
    if (isOverflowed(window.document.documentElement)) {
        return window.document.documentElement;
    }
    if (isOverflowed(window.document.body)) {
        return window.document.body;
    }
    const target = findScrollable(window.document.documentElement);
    if (target) {
        return target;
    }
    return window.document.documentElement;
};
const resetScrolling = () => {
    scrolling = false;
};
class Scroller {
    constructor(element, smooth) {
        this.element = element;
        this.smooth = smooth;
    }
    scrollTo(x, y) {
        if (!this.smooth) {
            this.element.scrollTo(x, y);
            return;
        }
        this.element.scrollTo({
            left: x,
            top: y,
            behavior: 'smooth',
        });
        this.prepareReset();
    }
    scrollBy(x, y) {
        const left = this.element.scrollLeft + x;
        const top = this.element.scrollTop + y;
        this.scrollTo(left, top);
    }
    prepareReset() {
        scrolling = true;
        if (lastTimeoutId) {
            clearTimeout(lastTimeoutId);
            lastTimeoutId = null;
        }
        lastTimeoutId = window.setTimeout(resetScrolling, 100);
    }
}
class ScrollPresenterImpl {
    getScroll() {
        const target = scrollTarget();
        return { x: target.scrollLeft, y: target.scrollTop };
    }
    scrollVertically(count, smooth) {
        const target = scrollTarget();
        let delta = SCROLL_DELTA_Y * count;
        if (scrolling) {
            delta = SCROLL_DELTA_Y * count * 4;
        }
        new Scroller(target, smooth).scrollBy(0, delta);
    }
    scrollHorizonally(count, smooth) {
        const target = scrollTarget();
        let delta = SCROLL_DELTA_X * count;
        if (scrolling) {
            delta = SCROLL_DELTA_X * count * 4;
        }
        new Scroller(target, smooth).scrollBy(delta, 0);
    }
    scrollPages(count, smooth) {
        const target = scrollTarget();
        const height = target.clientHeight;
        let delta = height * count;
        if (scrolling) {
            delta = height * count;
        }
        new Scroller(target, smooth).scrollBy(0, delta);
    }
    scrollTo(x, y, smooth) {
        const target = scrollTarget();
        new Scroller(target, smooth).scrollTo(x, y);
    }
    scrollToTop(smooth) {
        const target = scrollTarget();
        const x = target.scrollLeft;
        const y = 0;
        new Scroller(target, smooth).scrollTo(x, y);
    }
    scrollToBottom(smooth) {
        const target = scrollTarget();
        const x = target.scrollLeft;
        const y = target.scrollHeight;
        new Scroller(target, smooth).scrollTo(x, y);
    }
    scrollToHome(smooth) {
        const target = scrollTarget();
        const x = 0;
        const y = target.scrollTop;
        new Scroller(target, smooth).scrollTo(x, y);
    }
    scrollToEnd(smooth) {
        const target = scrollTarget();
        const x = target.scrollWidth;
        const y = target.scrollTop;
        new Scroller(target, smooth).scrollTo(x, y);
    }
}
exports.ScrollPresenterImpl = ScrollPresenterImpl;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Settings_1 = tslib_1.__importDefault(__webpack_require__(15));
const messages = tslib_1.__importStar(__webpack_require__(3));
class SettingClientImpl {
    async load() {
        const settings = await browser.runtime.sendMessage({
            type: messages.SETTINGS_QUERY,
        });
        return Settings_1.default.fromJSON(settings);
    }
}
exports.SettingClientImpl = SettingClientImpl;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Settings_1 = __webpack_require__(15);
let current = Settings_1.DefaultSetting;
class SettingRepositoryImpl {
    set(setting) {
        current = setting;
    }
    get() {
        return current;
    }
}
exports.SettingRepositoryImpl = SettingRepositoryImpl;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const messages = tslib_1.__importStar(__webpack_require__(3));
class TabsClientImpl {
    async openUrl(url, newTab, background) {
        await browser.runtime.sendMessage({
            type: messages.OPEN_URL,
            url,
            newTab,
            background,
        });
    }
}
exports.TabsClientImpl = TabsClientImpl;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L3R5cGVzL2xpZmVjeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcmVmbGVjdGlvbi1oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL2NsYXNzLXByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL2ZhY3RvcnktcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9wcm92aWRlcnMvaW5qZWN0aW9uLXRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL3ZhbHVlLXByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL3Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9yZXNvbHV0aW9uLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZXBlbmRlbmN5LWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L2RlY29yYXRvcnMvYXV0by1pbmplY3RhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZGVjb3JhdG9ycy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL2luamVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZGVjb3JhdG9ycy9zaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL2luamVjdC1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL3Njb3BlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L2RlY29yYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9mYWN0b3JpZXMvaW5zdGFuY2UtY2FjaGluZy1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZmFjdG9yaWVzL3ByZWRpY2F0ZS1hd2FyZS1jbGFzcy1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZmFjdG9yaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL29wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9Qcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9CbGFja2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9LZXltYXBzLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvc2V0dGluZ3MvU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9LZXkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9TZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC91dGlscy9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC91c2VjYXNlcy9BZGRvbkVuYWJsZWRVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXJscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVmbGVjdC1tZXRhZGF0YS9SZWZsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvdXNlY2FzZXMvTWFya1VzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvdXNlY2FzZXMvRm9sbG93U2xhdmVVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3ByZXNlbnRlcnMvSGludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9kb21haW5zL0tleVNlcXVlbmNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3VzZWNhc2VzL01hcmtLZXlVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3ByZXNlbnRlcnMvQ29uc29sZUZyYW1lUHJlc2VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L01lc3NhZ2VMaXN0ZW5lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250cm9sbGVycy9GaW5kQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC91c2VjYXNlcy9GaW5kVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250cm9sbGVycy9NYXJrQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250cm9sbGVycy9Gb2xsb3dNYXN0ZXJDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3VzZWNhc2VzL0ZvbGxvd01hc3RlclVzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvdXNlY2FzZXMvSGludEtleVByb2R1Y2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbnRyb2xsZXJzL0ZvbGxvd1NsYXZlQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250cm9sbGVycy9Gb2xsb3dLZXlDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L0lucHV0RHJpdmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NvbnRyb2xsZXJzL0tleW1hcENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvdXNlY2FzZXMvS2V5bWFwVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC91c2VjYXNlcy9GaW5kU2xhdmVVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3VzZWNhc2VzL1Njcm9sbFVzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvdXNlY2FzZXMvRm9jdXNVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3VzZWNhc2VzL0NsaXBib2FyZFVzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29udHJvbGxlcnMvTWFya0tleUNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29udHJvbGxlcnMvQWRkb25FbmFibGVkQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250cm9sbGVycy9TZXR0aW5nQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC91c2VjYXNlcy9TZXR0aW5nVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jb250cm9sbGVycy9Db25zb2xlRnJhbWVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3VzZWNhc2VzL0NvbnNvbGVGcmFtZVVzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY29udHJvbGxlcnMvTmF2aWdhdGVDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3VzZWNhc2VzL05hdmlnYXRlVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9zaXRlLXN0eWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2RpLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3JlcG9zaXRvcmllcy9BZGRvbkVuYWJsZWRSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NsaWVudC9BZGRvbkluZGljYXRvckNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9yZXBvc2l0b3JpZXMvQWRkcmVzc1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvcmVwb3NpdG9yaWVzL0NsaXBib2FyZFJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY2xpZW50L0NvbnNvbGVDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY2xpZW50L0ZpbmRDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY2xpZW50L0ZpbmRNYXN0ZXJDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvcHJlc2VudGVycy9GaW5kUHJlc2VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3JlcG9zaXRvcmllcy9GaW5kUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9wcmVzZW50ZXJzL0ZvY3VzUHJlc2VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3JlcG9zaXRvcmllcy9Gb2xsb3dLZXlSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NsaWVudC9Gb2xsb3dNYXN0ZXJDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvcmVwb3NpdG9yaWVzL0ZvbGxvd01hc3RlclJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvcHJlc2VudGVycy9Gb2xsb3dQcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvY2xpZW50L0ZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jbGllbnQvRm9sbG93U2xhdmVDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvcmVwb3NpdG9yaWVzL0ZvbGxvd1NsYXZlUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9yZXBvc2l0b3JpZXMvS2V5bWFwUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jbGllbnQvTWFya0NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9yZXBvc2l0b3JpZXMvTWFya0tleVJlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnQvcmVwb3NpdG9yaWVzL01hcmtSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3ByZXNlbnRlcnMvTmF2aWdhdGlvblByZXNlbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jbGllbnQvT3BlcmF0aW9uQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3ByZXNlbnRlcnMvU2Nyb2xsUHJlc2VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L2NsaWVudC9TZXR0aW5nQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb250ZW50L3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudC9jbGllbnQvVGFic0NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxt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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBQzNDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHVCQUF1QjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCwwQkFBMEI7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QU8sQ0FBQztJQUNqQixDQUFDO0NBQ0Y7QUFSRCxzREFRQzs7Ozs7Ozs7Ozs7QUNsQkQsOERBQWtEO0FBTWxELE1BQWEsY0FBYztJQUN6QixLQUFLLENBQUMsT0FBTyxDQUNYLEdBQVcsRUFDWCxNQUFlLEVBQ2YsVUFBb0I7UUFFcEIsTUFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNoQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVE7WUFDdkIsR0FBRztZQUNILE1BQU07WUFDTixVQUFVO1NBQ1gsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGO0FBYkQsd0NBYUMiLCJmaWxlIjoiY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3OCk7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsInZhciBMaWZlY3ljbGU7XG4oZnVuY3Rpb24gKExpZmVjeWNsZSkge1xuICAgIExpZmVjeWNsZVtMaWZlY3ljbGVbXCJUcmFuc2llbnRcIl0gPSAwXSA9IFwiVHJhbnNpZW50XCI7XG4gICAgTGlmZWN5Y2xlW0xpZmVjeWNsZVtcIlNpbmdsZXRvblwiXSA9IDFdID0gXCJTaW5nbGV0b25cIjtcbiAgICBMaWZlY3ljbGVbTGlmZWN5Y2xlW1wiUmVzb2x1dGlvblNjb3BlZFwiXSA9IDJdID0gXCJSZXNvbHV0aW9uU2NvcGVkXCI7XG4gICAgTGlmZWN5Y2xlW0xpZmVjeWNsZVtcIkNvbnRhaW5lclNjb3BlZFwiXSA9IDNdID0gXCJDb250YWluZXJTY29wZWRcIjtcbn0pKExpZmVjeWNsZSB8fCAoTGlmZWN5Y2xlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IExpZmVjeWNsZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTGlmZWN5Y2xlIH0gZnJvbSBcIi4vbGlmZWN5Y2xlXCI7XG4iLCJleHBvcnQgdmFyIElOSkVDVElPTl9UT0tFTl9NRVRBREFUQV9LRVkgPSBcImluamVjdGlvblRva2Vuc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtSW5mbyh0YXJnZXQpIHtcbiAgICB2YXIgcGFyYW1zID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIHRhcmdldCkgfHwgW107XG4gICAgdmFyIGluamVjdGlvblRva2VucyA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoSU5KRUNUSU9OX1RPS0VOX01FVEFEQVRBX0tFWSwgdGFyZ2V0KSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhpbmplY3Rpb25Ub2tlbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBwYXJhbXNbK2tleV0gPSBpbmplY3Rpb25Ub2tlbnNba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUluamVjdGlvblRva2VuTWV0YWRhdGEoZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBfcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSB7XG4gICAgICAgIHZhciBpbmplY3Rpb25Ub2tlbnMgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKElOSkVDVElPTl9UT0tFTl9NRVRBREFUQV9LRVksIHRhcmdldCkgfHwge307XG4gICAgICAgIGluamVjdGlvblRva2Vuc1twYXJhbWV0ZXJJbmRleF0gPSBkYXRhO1xuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKElOSkVDVElPTl9UT0tFTl9NRVRBREFUQV9LRVksIGluamVjdGlvblRva2VucywgdGFyZ2V0KTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3NQcm92aWRlcihwcm92aWRlcikge1xuICAgIHJldHVybiAhIXByb3ZpZGVyLnVzZUNsYXNzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRmFjdG9yeVByb3ZpZGVyKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuICEhcHJvdmlkZXIudXNlRmFjdG9yeTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc05vcm1hbFRva2VuKHRva2VuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdG9rZW4gPT09IFwic3ltYm9sXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlbkRlc2NyaXB0b3IoZGVzY3JpcHRvcikge1xuICAgIHJldHVybiAodHlwZW9mIGRlc2NyaXB0b3IgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgXCJ0b2tlblwiIGluIGRlc2NyaXB0b3IgJiZcbiAgICAgICAgXCJtdWx0aXBsZVwiIGluIGRlc2NyaXB0b3IpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVG9rZW5Qcm92aWRlcihwcm92aWRlcikge1xuICAgIHJldHVybiAhIXByb3ZpZGVyLnVzZVRva2VuO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVQcm92aWRlcihwcm92aWRlcikge1xuICAgIHJldHVybiBwcm92aWRlci51c2VWYWx1ZSAhPSB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgeyBpc0NsYXNzUHJvdmlkZXIgfSBmcm9tIFwiLi9jbGFzcy1wcm92aWRlclwiO1xuZXhwb3J0IHsgaXNGYWN0b3J5UHJvdmlkZXIgfSBmcm9tIFwiLi9mYWN0b3J5LXByb3ZpZGVyXCI7XG5leHBvcnQgeyBpc05vcm1hbFRva2VuIH0gZnJvbSBcIi4vaW5qZWN0aW9uLXRva2VuXCI7XG5leHBvcnQgeyBpc1Rva2VuUHJvdmlkZXIgfSBmcm9tIFwiLi90b2tlbi1wcm92aWRlclwiO1xuZXhwb3J0IHsgaXNWYWx1ZVByb3ZpZGVyIH0gZnJvbSBcIi4vdmFsdWUtcHJvdmlkZXJcIjtcbiIsImltcG9ydCB7IGlzQ2xhc3NQcm92aWRlciB9IGZyb20gXCIuL2NsYXNzLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBpc1ZhbHVlUHJvdmlkZXIgfSBmcm9tIFwiLi92YWx1ZS1wcm92aWRlclwiO1xuaW1wb3J0IHsgaXNUb2tlblByb3ZpZGVyIH0gZnJvbSBcIi4vdG9rZW4tcHJvdmlkZXJcIjtcbmltcG9ydCB7IGlzRmFjdG9yeVByb3ZpZGVyIH0gZnJvbSBcIi4vZmFjdG9yeS1wcm92aWRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gKGlzQ2xhc3NQcm92aWRlcihwcm92aWRlcikgfHxcbiAgICAgICAgaXNWYWx1ZVByb3ZpZGVyKHByb3ZpZGVyKSB8fFxuICAgICAgICBpc1Rva2VuUHJvdmlkZXIocHJvdmlkZXIpIHx8XG4gICAgICAgIGlzRmFjdG9yeVByb3ZpZGVyKHByb3ZpZGVyKSk7XG59XG4iLCJ2YXIgUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlZ2lzdHJ5KCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyeU1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgUmVnaXN0cnkucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeU1hcC5lbnRyaWVzKCk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmVuc3VyZShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnlNYXAuZ2V0KGtleSk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmVuc3VyZShrZXkpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9yZWdpc3RyeU1hcC5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbnN1cmUoa2V5KTtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlNYXAuZ2V0KGtleSkucHVzaCh2YWx1ZSk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuc2V0QWxsID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlNYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIH07XG4gICAgUmVnaXN0cnkucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5lbnN1cmUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJ5TWFwLmdldChrZXkpLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5TWFwLmNsZWFyKCk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuZW5zdXJlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdHJ5TWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyeU1hcC5zZXQoa2V5LCBbXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZWdpc3RyeTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyeTtcbiIsInZhciBSZXNvbHV0aW9uQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x1dGlvbkNvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuc2NvcGVkUmVzb2x1dGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHV0aW9uQ29udGV4dDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBSZXNvbHV0aW9uQ29udGV4dDtcbiIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWQsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0NsYXNzUHJvdmlkZXIsIGlzRmFjdG9yeVByb3ZpZGVyLCBpc05vcm1hbFRva2VuLCBpc1Rva2VuUHJvdmlkZXIsIGlzVmFsdWVQcm92aWRlciB9IGZyb20gXCIuL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgaXNQcm92aWRlciB9IGZyb20gXCIuL3Byb3ZpZGVycy9wcm92aWRlclwiO1xuaW1wb3J0IHsgaXNUb2tlbkRlc2NyaXB0b3IgfSBmcm9tIFwiLi9wcm92aWRlcnMvaW5qZWN0aW9uLXRva2VuXCI7XG5pbXBvcnQgUmVnaXN0cnkgZnJvbSBcIi4vcmVnaXN0cnlcIjtcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSBcIi4vdHlwZXMvbGlmZWN5Y2xlXCI7XG5pbXBvcnQgUmVzb2x1dGlvbkNvbnRleHQgZnJvbSBcIi4vcmVzb2x1dGlvbi1jb250ZXh0XCI7XG5leHBvcnQgdmFyIHR5cGVJbmZvID0gbmV3IE1hcCgpO1xudmFyIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnkgPSBuZXcgUmVnaXN0cnkoKTtcbiAgICB9XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICh0b2tlbiwgcHJvdmlkZXJPckNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHsgbGlmZWN5Y2xlOiBMaWZlY3ljbGUuVHJhbnNpZW50IH07IH1cbiAgICAgICAgdmFyIHByb3ZpZGVyO1xuICAgICAgICBpZiAoIWlzUHJvdmlkZXIocHJvdmlkZXJPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgcHJvdmlkZXIgPSB7IHVzZUNsYXNzOiBwcm92aWRlck9yQ29uc3RydWN0b3IgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gcHJvdmlkZXJPckNvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLlNpbmdsZXRvbiB8fFxuICAgICAgICAgICAgb3B0aW9ucy5saWZlY3ljbGUgPT0gTGlmZWN5Y2xlLkNvbnRhaW5lclNjb3BlZCB8fFxuICAgICAgICAgICAgb3B0aW9ucy5saWZlY3ljbGUgPT0gTGlmZWN5Y2xlLlJlc29sdXRpb25TY29wZWQpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbHVlUHJvdmlkZXIocHJvdmlkZXIpIHx8IGlzRmFjdG9yeVByb3ZpZGVyKHByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IHVzZSBsaWZlY3ljbGUgXFxcIlwiICsgTGlmZWN5Y2xlW29wdGlvbnMubGlmZWN5Y2xlXSArIFwiXFxcIiB3aXRoIFZhbHVlUHJvdmlkZXJzIG9yIEZhY3RvcnlQcm92aWRlcnNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWdpc3RyeS5zZXQodG9rZW4sIHsgcHJvdmlkZXI6IHByb3ZpZGVyLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUucmVnaXN0ZXJUeXBlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICAgIGlmIChpc05vcm1hbFRva2VuKHRvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgICAgIHVzZVRva2VuOiB0b1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgdXNlQ2xhc3M6IHRvXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlcih0b2tlbiwge1xuICAgICAgICAgICAgdXNlVmFsdWU6IGluc3RhbmNlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3RlclNpbmdsZXRvbiA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgICBpZiAoaXNOb3JtYWxUb2tlbihmcm9tKSkge1xuICAgICAgICAgICAgaWYgKGlzTm9ybWFsVG9rZW4odG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VUb2tlbjogdG9cbiAgICAgICAgICAgICAgICB9LCB7IGxpZmVjeWNsZTogTGlmZWN5Y2xlLlNpbmdsZXRvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VDbGFzczogdG9cbiAgICAgICAgICAgICAgICB9LCB7IGxpZmVjeWNsZTogTGlmZWN5Y2xlLlNpbmdsZXRvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IHJlZ2lzdGVyIGEgdHlwZSBuYW1lIGFzIGEgc2luZ2xldG9uIHdpdGhvdXQgYSBcXFwidG9cXFwiIHRva2VuXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVzZUNsYXNzID0gZnJvbTtcbiAgICAgICAgaWYgKHRvICYmICFpc05vcm1hbFRva2VuKHRvKSkge1xuICAgICAgICAgICAgdXNlQ2xhc3MgPSB0bztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlcihmcm9tLCB7XG4gICAgICAgICAgICB1c2VDbGFzczogdXNlQ2xhc3NcbiAgICAgICAgfSwgeyBsaWZlY3ljbGU6IExpZmVjeWNsZS5TaW5nbGV0b24gfSk7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAodG9rZW4sIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gbmV3IFJlc29sdXRpb25Db250ZXh0KCk7IH1cbiAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbiA9IHRoaXMuZ2V0UmVnaXN0cmF0aW9uKHRva2VuKTtcbiAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24gJiYgaXNOb3JtYWxUb2tlbih0b2tlbikpIHtcbiAgICAgICAgICAgIHRocm93IFwiQXR0ZW1wdGVkIHRvIHJlc29sdmUgdW5yZWdpc3RlcmVkIGRlcGVuZGVuY3kgdG9rZW46IFwiICsgdG9rZW4udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbiwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0KHRva2VuLCBjb250ZXh0KTtcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUucmVzb2x2ZVJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uIChyZWdpc3RyYXRpb24sIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5vcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLlJlc29sdXRpb25TY29wZWQgJiZcbiAgICAgICAgICAgIGNvbnRleHQuc2NvcGVkUmVzb2x1dGlvbnMuaGFzKHJlZ2lzdHJhdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnNjb3BlZFJlc29sdXRpb25zLmdldChyZWdpc3RyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1NpbmdsZXRvbiA9IHJlZ2lzdHJhdGlvbi5vcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLlNpbmdsZXRvbjtcbiAgICAgICAgdmFyIGlzQ29udGFpbmVyU2NvcGVkID0gcmVnaXN0cmF0aW9uLm9wdGlvbnMubGlmZWN5Y2xlID09PSBMaWZlY3ljbGUuQ29udGFpbmVyU2NvcGVkO1xuICAgICAgICB2YXIgcmV0dXJuSW5zdGFuY2UgPSBpc1NpbmdsZXRvbiB8fCBpc0NvbnRhaW5lclNjb3BlZDtcbiAgICAgICAgdmFyIHJlc29sdmVkO1xuICAgICAgICBpZiAoaXNWYWx1ZVByb3ZpZGVyKHJlZ2lzdHJhdGlvbi5wcm92aWRlcikpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gcmVnaXN0cmF0aW9uLnByb3ZpZGVyLnVzZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVG9rZW5Qcm92aWRlcihyZWdpc3RyYXRpb24ucHJvdmlkZXIpKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHJldHVybkluc3RhbmNlXG4gICAgICAgICAgICAgICAgPyByZWdpc3RyYXRpb24uaW5zdGFuY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJlZ2lzdHJhdGlvbi5pbnN0YW5jZSA9IHRoaXMucmVzb2x2ZShyZWdpc3RyYXRpb24ucHJvdmlkZXIudXNlVG9rZW4sIGNvbnRleHQpKVxuICAgICAgICAgICAgICAgIDogdGhpcy5yZXNvbHZlKHJlZ2lzdHJhdGlvbi5wcm92aWRlci51c2VUb2tlbiwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDbGFzc1Byb3ZpZGVyKHJlZ2lzdHJhdGlvbi5wcm92aWRlcikpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gcmV0dXJuSW5zdGFuY2VcbiAgICAgICAgICAgICAgICA/IHJlZ2lzdHJhdGlvbi5pbnN0YW5jZSB8fFxuICAgICAgICAgICAgICAgICAgICAocmVnaXN0cmF0aW9uLmluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3QocmVnaXN0cmF0aW9uLnByb3ZpZGVyLnVzZUNsYXNzLCBjb250ZXh0KSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0KHJlZ2lzdHJhdGlvbi5wcm92aWRlci51c2VDbGFzcywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGYWN0b3J5UHJvdmlkZXIocmVnaXN0cmF0aW9uLnByb3ZpZGVyKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSByZWdpc3RyYXRpb24ucHJvdmlkZXIudXNlRmFjdG9yeSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdGhpcy5jb25zdHJ1Y3QocmVnaXN0cmF0aW9uLnByb3ZpZGVyLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9wdGlvbnMubGlmZWN5Y2xlID09PSBMaWZlY3ljbGUuUmVzb2x1dGlvblNjb3BlZCkge1xuICAgICAgICAgICAgY29udGV4dC5zY29wZWRSZXNvbHV0aW9ucy5zZXQocmVnaXN0cmF0aW9uLCByZXNvbHZlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZXNvbHZlQWxsID0gZnVuY3Rpb24gKHRva2VuLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IG5ldyBSZXNvbHV0aW9uQ29udGV4dCgpOyB9XG4gICAgICAgIHZhciByZWdpc3RyYXRpb25zID0gdGhpcy5nZXRBbGxSZWdpc3RyYXRpb25zKHRva2VuKTtcbiAgICAgICAgaWYgKCFyZWdpc3RyYXRpb25zICYmIGlzTm9ybWFsVG9rZW4odG9rZW4pKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkF0dGVtcHRlZCB0byByZXNvbHZlIHVucmVnaXN0ZXJlZCBkZXBlbmRlbmN5IHRva2VuOiBcIiArIHRva2VuLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RyYXRpb25zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlUmVnaXN0cmF0aW9uKGl0ZW0sIGNvbnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmNvbnN0cnVjdCh0b2tlbiwgY29udGV4dCldO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5pc1JlZ2lzdGVyZWQgPSBmdW5jdGlvbiAodG9rZW4sIHJlY3Vyc2l2ZSkge1xuICAgICAgICBpZiAocmVjdXJzaXZlID09PSB2b2lkIDApIHsgcmVjdXJzaXZlID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9yZWdpc3RyeS5oYXModG9rZW4pIHx8XG4gICAgICAgICAgICAocmVjdXJzaXZlICYmXG4gICAgICAgICAgICAgICAgKHRoaXMucGFyZW50IHx8IGZhbHNlKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmlzUmVnaXN0ZXJlZCh0b2tlbiwgdHJ1ZSkpKTtcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5LmNsZWFyKCk7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmNyZWF0ZUNoaWxkQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIGNoaWxkQ29udGFpbmVyID0gbmV3IEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5fcmVnaXN0cnkuZW50cmllcygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChfYy52YWx1ZSwgMiksIHRva2VuID0gX2RbMF0sIHJlZ2lzdHJhdGlvbnMgPSBfZFsxXTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9ucy5zb21lKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IF9hLm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLkNvbnRhaW5lclNjb3BlZDtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRhaW5lci5fcmVnaXN0cnkuc2V0QWxsKHRva2VuLCByZWdpc3RyYXRpb25zLm1hcChmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9wdGlvbnMubGlmZWN5Y2xlID09PSBMaWZlY3ljbGUuQ29udGFpbmVyU2NvcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHJlZ2lzdHJhdGlvbi5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogcmVnaXN0cmF0aW9uLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZENvbnRhaW5lcjtcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUuZ2V0UmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVnaXN0ZXJlZCh0b2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeS5nZXQodG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldFJlZ2lzdHJhdGlvbih0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmdldEFsbFJlZ2lzdHJhdGlvbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdpc3RlcmVkKHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJ5LmdldEFsbCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0QWxsUmVnaXN0cmF0aW9ucyh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmNvbnN0cnVjdCA9IGZ1bmN0aW9uIChjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjdG9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBjdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmFtSW5mbyA9IHR5cGVJbmZvLmdldChjdG9yKTtcbiAgICAgICAgaWYgKCFwYXJhbUluZm8gfHwgcGFyYW1JbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgXCJUeXBlSW5mbyBub3Qga25vd24gZm9yIFwiICsgY3RvcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFyYW1zID0gcGFyYW1JbmZvLm1hcChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIGlmIChpc1Rva2VuRGVzY3JpcHRvcihwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgPyBfdGhpcy5yZXNvbHZlQWxsKHBhcmFtLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICA6IF90aGlzLnJlc29sdmUocGFyYW0udG9rZW4sIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmUocGFyYW0sIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyAoY3Rvci5iaW5kLmFwcGx5KGN0b3IsIF9fc3ByZWFkKFt2b2lkIDBdLCBwYXJhbXMpKSkoKTtcbiAgICB9O1xuICAgIHJldHVybiBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXI7XG59KCkpO1xuZXhwb3J0IHZhciBpbnN0YW5jZSA9IG5ldyBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IHsgX19leHRlbmRzLCBfX3JlYWQsIF9fc3ByZWFkIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBnZXRQYXJhbUluZm8gfSBmcm9tIFwiLi4vcmVmbGVjdGlvbi1oZWxwZXJzXCI7XG5pbXBvcnQgeyBpbnN0YW5jZSBhcyBnbG9iYWxDb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmltcG9ydCB7IGlzVG9rZW5EZXNjcmlwdG9yIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9pbmplY3Rpb24tdG9rZW5cIjtcbmZ1bmN0aW9uIGF1dG9JbmplY3RhYmxlKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBwYXJhbUluZm8gPSBnZXRQYXJhbUluZm8odGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICBfX2V4dGVuZHMoY2xhc3NfMSwgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgX19zcHJlYWQoYXJncy5jb25jYXQocGFyYW1JbmZvLnNsaWNlKGFyZ3MubGVuZ3RoKS5tYXAoZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2tlbkRlc2NyaXB0b3IodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZS5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbENvbnRhaW5lci5yZXNvbHZlQWxsKHR5cGUudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2xvYmFsQ29udGFpbmVyLnJlc29sdmUodHlwZS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2xvYmFsQ29udGFpbmVyLnJlc29sdmUodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdJbmRleCA9IGluZGV4ICsgYXJncy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQodGFyZ2V0LnRvU3RyaW5nKCkubWF0Y2goL2NvbnN0cnVjdG9yXFwoKFtcXHcsIF0rKVxcKS8pIHx8IFtdLCAyKSwgX2IgPSBfYVsxXSwgcGFyYW1zID0gX2IgPT09IHZvaWQgMCA/IG51bGwgOiBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdOYW1lID0gcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJhbXMuc3BsaXQoXCIsXCIpW2FyZ0luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjXCIgKyBhcmdJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IGluamVjdCB0aGUgZGVwZW5kZW5jeSBcIiArIGFyZ05hbWUgKyBcIiBvZiBcIiArIHRhcmdldC5uYW1lICsgXCIgY29uc3RydWN0b3IuIFwiICsgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKSkpIHx8IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2xhc3NfMTtcbiAgICAgICAgfSh0YXJnZXQpKTtcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgYXV0b0luamVjdGFibGU7XG4iLCJpbXBvcnQgeyBkZWZpbmVJbmplY3Rpb25Ub2tlbk1ldGFkYXRhIH0gZnJvbSBcIi4uL3JlZmxlY3Rpb24taGVscGVyc1wiO1xuZnVuY3Rpb24gaW5qZWN0KHRva2VuKSB7XG4gICAgcmV0dXJuIGRlZmluZUluamVjdGlvblRva2VuTWV0YWRhdGEodG9rZW4pO1xufVxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiaW1wb3J0IHsgZ2V0UGFyYW1JbmZvIH0gZnJvbSBcIi4uL3JlZmxlY3Rpb24taGVscGVyc1wiO1xuaW1wb3J0IHsgdHlwZUluZm8gfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmZ1bmN0aW9uIGluamVjdGFibGUoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdHlwZUluZm8uc2V0KHRhcmdldCwgZ2V0UGFyYW1JbmZvKHRhcmdldCkpO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBpbmplY3RhYmxlO1xuIiwiaW1wb3J0IHsgX19yZXN0IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpbnN0YW5jZSBhcyBnbG9iYWxDb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmZ1bmN0aW9uIHJlZ2lzdHJ5KHJlZ2lzdHJhdGlvbnMpIHtcbiAgICBpZiAocmVnaXN0cmF0aW9ucyA9PT0gdm9pZCAwKSB7IHJlZ2lzdHJhdGlvbnMgPSBbXTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IF9hLnRva2VuLCBvcHRpb25zID0gX2Eub3B0aW9ucywgcHJvdmlkZXIgPSBfX3Jlc3QoX2EsIFtcInRva2VuXCIsIFwib3B0aW9uc1wiXSk7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsQ29udGFpbmVyLnJlZ2lzdGVyKHRva2VuLCBwcm92aWRlciwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeTtcbiIsImltcG9ydCBpbmplY3RhYmxlIGZyb20gXCIuL2luamVjdGFibGVcIjtcbmltcG9ydCB7IGluc3RhbmNlIGFzIGdsb2JhbENvbnRhaW5lciB9IGZyb20gXCIuLi9kZXBlbmRlbmN5LWNvbnRhaW5lclwiO1xuZnVuY3Rpb24gc2luZ2xldG9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGluamVjdGFibGUoKSh0YXJnZXQpO1xuICAgICAgICBnbG9iYWxDb250YWluZXIucmVnaXN0ZXJTaW5nbGV0b24odGFyZ2V0KTtcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uO1xuIiwiaW1wb3J0IHsgZGVmaW5lSW5qZWN0aW9uVG9rZW5NZXRhZGF0YSB9IGZyb20gXCIuLi9yZWZsZWN0aW9uLWhlbHBlcnNcIjtcbmZ1bmN0aW9uIGluamVjdEFsbCh0b2tlbikge1xuICAgIHZhciBkYXRhID0geyB0b2tlbjogdG9rZW4sIG11bHRpcGxlOiB0cnVlIH07XG4gICAgcmV0dXJuIGRlZmluZUluamVjdGlvblRva2VuTWV0YWRhdGEoZGF0YSk7XG59XG5leHBvcnQgZGVmYXVsdCBpbmplY3RBbGw7XG4iLCJpbXBvcnQgaW5qZWN0YWJsZSBmcm9tIFwiLi9pbmplY3RhYmxlXCI7XG5pbXBvcnQgeyBpbnN0YW5jZSBhcyBnbG9iYWxDb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjb3BlZChsaWZlY3ljbGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaW5qZWN0YWJsZSgpKHRhcmdldCk7XG4gICAgICAgIGdsb2JhbENvbnRhaW5lci5yZWdpc3Rlcih0b2tlbiB8fCB0YXJnZXQsIHRhcmdldCwge1xuICAgICAgICAgICAgbGlmZWN5Y2xlOiBsaWZlY3ljbGVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXV0b0luamVjdGFibGUgfSBmcm9tIFwiLi9hdXRvLWluamVjdGFibGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5qZWN0IH0gZnJvbSBcIi4vaW5qZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluamVjdGFibGUgfSBmcm9tIFwiLi9pbmplY3RhYmxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZ2lzdHJ5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2luZ2xldG9uIH0gZnJvbSBcIi4vc2luZ2xldG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluamVjdEFsbCB9IGZyb20gXCIuL2luamVjdC1hbGxcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2NvcGVkIH0gZnJvbSBcIi4vc2NvcGVkXCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0YW5jZUNhY2hpbmdGYWN0b3J5KGZhY3RvcnlGdW5jKSB7XG4gICAgdmFyIGluc3RhbmNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGVwZW5kZW5jeUNvbnRhaW5lcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IGZhY3RvcnlGdW5jKGRlcGVuZGVuY3lDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlZGljYXRlQXdhcmVDbGFzc0ZhY3RvcnkocHJlZGljYXRlLCB0cnVlQ29uc3RydWN0b3IsIGZhbHNlQ29uc3RydWN0b3IsIHVzZUNhY2hpbmcpIHtcbiAgICBpZiAodXNlQ2FjaGluZyA9PT0gdm9pZCAwKSB7IHVzZUNhY2hpbmcgPSB0cnVlOyB9XG4gICAgdmFyIGluc3RhbmNlO1xuICAgIHZhciBwcmV2aW91c1ByZWRpY2F0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlcGVuZGVuY3lDb250YWluZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQcmVkaWNhdGUgPSBwcmVkaWNhdGUoZGVwZW5kZW5jeUNvbnRhaW5lcik7XG4gICAgICAgIGlmICghdXNlQ2FjaGluZyB8fCBwcmV2aW91c1ByZWRpY2F0ZSAhPT0gY3VycmVudFByZWRpY2F0ZSkge1xuICAgICAgICAgICAgaWYgKChwcmV2aW91c1ByZWRpY2F0ZSA9IGN1cnJlbnRQcmVkaWNhdGUpKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBkZXBlbmRlbmN5Q29udGFpbmVyLnJlc29sdmUodHJ1ZUNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gZGVwZW5kZW5jeUNvbnRhaW5lci5yZXNvbHZlKGZhbHNlQ29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnN0YW5jZUNhY2hpbmdGYWN0b3J5IH0gZnJvbSBcIi4vaW5zdGFuY2UtY2FjaGluZy1mYWN0b3J5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWRpY2F0ZUF3YXJlQ2xhc3NGYWN0b3J5IH0gZnJvbSBcIi4vcHJlZGljYXRlLWF3YXJlLWNsYXNzLWZhY3RvcnlcIjtcbiIsImlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5nZXRNZXRhZGF0YSkge1xuICAgIHRocm93IFwidHN5cmluZ2UgcmVxdWlyZXMgYSByZWZsZWN0IHBvbHlmaWxsLiBQbGVhc2UgYWRkICdpbXBvcnQgXFxcInJlZmxlY3QtbWV0YWRhdGFcXFwiJyB0byB0aGUgdG9wIG9mIHlvdXIgZW50cnkgcG9pbnQuXCI7XG59XG5leHBvcnQgeyBMaWZlY3ljbGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wcm92aWRlcnNcIjtcbmV4cG9ydCB7IGluc3RhbmNlIGFzIGNvbnRhaW5lciB9IGZyb20gXCIuL2RlcGVuZGVuY3ktY29udGFpbmVyXCI7XG4iLCJpbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gJy4vb3BlcmF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX09QRVJBVElPTiA9ICdiYWNrZ3JvdW5kLm9wZXJhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX1VORk9DVVMgPSAnY29uc29sZS51bmZvY3VzJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0NPTU1BTkQgPSAnY29uc29sZS5lbnRlci5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0ZJTkQgPSAnY29uc29sZS5lbnRlci5maW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1FVRVJZX0NPTVBMRVRJT05TID0gJ2NvbnNvbGUucXVlcnkuY29tcGxldGlvbnMnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19DT01NQU5EID0gJ2NvbnNvbGUuc2hvdy5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfRVJST1IgPSAnY29uc29sZS5zaG93LmVycm9yJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfSU5GTyA9ICdjb25zb2xlLnNob3cuaW5mbyc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0ZJTkQgPSAnY29uc29sZS5zaG93LmZpbmQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfSElERSA9ICdjb25zb2xlLmhpZGUnO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUQVJUID0gJ2ZvbGxvdy5zdGFydCc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUyA9ICdmb2xsb3cucmVxdWVzdC5jb3VudC50YXJnZXRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUyA9ICdmb2xsb3cucmVzcG9uc2UuY291bnQudGFyZ2V0cyc7XG5leHBvcnQgY29uc3QgRk9MTE9XX0NSRUFURV9ISU5UUyA9ICdmb2xsb3cuY3JlYXRlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfU0hPV19ISU5UUyA9ICdmb2xsb3cudXBkYXRlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVNT1ZFX0hJTlRTID0gJ2ZvbGxvdy5yZW1vdmUuaGludHMnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19BQ1RJVkFURSA9ICdmb2xsb3cuYWN0aXZhdGUnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19LRVlfUFJFU1MgPSAnZm9sbG93LmtleS5wcmVzcyc7XG5cbmV4cG9ydCBjb25zdCBNQVJLX1NFVF9HTE9CQUwgPSAnbWFyay5zZXQuZ2xvYmFsJztcbmV4cG9ydCBjb25zdCBNQVJLX0pVTVBfR0xPQkFMID0gJ21hcmsuanVtcC5nbG9iYWwnO1xuXG5leHBvcnQgY29uc3QgVEFCX1NDUk9MTF9UTyA9ICd0YWIuc2Nyb2xsLnRvJztcblxuZXhwb3J0IGNvbnN0IEZJTkRfTkVYVCA9ICdmaW5kLm5leHQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9ICdmaW5kLnByZXYnO1xuZXhwb3J0IGNvbnN0IEZJTkRfR0VUX0tFWVdPUkQgPSAnZmluZC5nZXQua2V5d29yZCc7XG5leHBvcnQgY29uc3QgRklORF9TRVRfS0VZV09SRCA9ICdmaW5kLnNldC5rZXl3b3JkJztcblxuZXhwb3J0IGNvbnN0IEFERE9OX0VOQUJMRURfUVVFUlkgPSAnYWRkb24uZW5hYmxlZC5xdWVyeSc7XG5leHBvcnQgY29uc3QgQURET05fRU5BQkxFRF9SRVNQT05TRSA9ICdhZGRvbi5lbmFibGVkLnJlc3BvbnNlJztcbmV4cG9ydCBjb25zdCBBRERPTl9UT0dHTEVfRU5BQkxFRCA9ICdhZGRvbi50b2dnbGUuZW5hYmxlZCc7XG5cbmV4cG9ydCBjb25zdCBPUEVOX1VSTCA9ICdvcGVuLnVybCc7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19DSEFOR0VEID0gJ3NldHRpbmdzLmNoYW5nZWQnO1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1FVRVJZID0gJ3NldHRpbmdzLnF1ZXJ5JztcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfRlJBTUVfTUVTU0FHRSA9ICdjb25zb2xlLmZyYW1lLm1lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9ORVhUID0gJ25hdmlnYXRlLmhpc3RvcnkubmV4dCc7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9QUkVWID0gJ25hdmlnYXRlLmhpc3RvcnkucHJldic7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19ORVhUID0gJ25hdmlnYXRlLmxpbmsubmV4dCc7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19QUkVWID0gJ25hdmlnYXRlLmxpbmsucHJldic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE9wZXJhdGlvbk1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQkFDS0dST1VORF9PUEVSQVRJT047XG4gIHJlcGVhdDogbnVtYmVyO1xuICBvcGVyYXRpb246IG9wZXJhdGlvbnMuT3BlcmF0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVVbmZvY3VzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1VORk9DVVM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9FTlRFUl9DT01NQU5EO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUVudGVyRmluZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9FTlRFUl9GSU5EO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVRdWVyeUNvbXBsZXRpb25zTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1FVRVJZX0NPTVBMRVRJT05TO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVNob3dDb21tYW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfQ09NTUFORDtcbiAgY29tbWFuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93RXJyb3JNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19FUlJPUjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93SW5mb01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0lORk87XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19GSU5EO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVIaWRlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0hJREU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93U3RhcnRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TVEFSVDtcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1JlcXVlc3RDb3VudFRhcmdldHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19SRVFVRVNUX0NPVU5UX1RBUkdFVFM7XG4gIHZpZXdTaXplOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH07XG4gIGZyYW1lUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dSZXNwb25zZUNvdW50VGFyZ2V0c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFU1BPTlNFX0NPVU5UX1RBUkdFVFM7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93Q3JlYXRlSGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19DUkVBVEVfSElOVFM7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICB2aWV3U2l6ZTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xuICBmcmFtZVBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93U2hvd0hpbnRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfU0hPV19ISU5UUztcbiAgcHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93UmVtb3ZlSGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19SRU1PVkVfSElOVFM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93QWN0aXZhdGVNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19BQ1RJVkFURTtcbiAgdGFnOiBzdHJpbmc7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dLZXlQcmVzc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0tFWV9QUkVTUztcbiAga2V5OiBzdHJpbmc7XG4gIGN0cmxLZXk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya1NldEdsb2JhbE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUFSS19TRVRfR0xPQkFMO1xuICBrZXk6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya0p1bXBHbG9iYWxNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfSlVNUF9HTE9CQUw7XG4gIGtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlNjcm9sbFRvTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfU0NST0xMX1RPO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTmV4dE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRklORF9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRQcmV2TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX1BSRVY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEdldEtleXdvcmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfR0VUX0tFWVdPUkQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFNldEtleXdvcmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfU0VUX0tFWVdPUkQ7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25FbmFibGVkUXVlcnlNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRURfUVVFUlk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25FbmFibGVkUmVzcG9uc2VNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRURfUkVTUE9OU0U7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25Ub2dnbGVFbmFibGVkTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9UT0dHTEVfRU5BQkxFRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuVXJsTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBPUEVOX1VSTDtcbiAgdXJsOiBzdHJpbmc7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0NoYW5nZWRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIFNFVFRJTkdTX0NIQU5HRUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NRdWVyeU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgU0VUVElOR1NfUVVFUlk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUZyYW1lTWVzc2FnZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9GUkFNRV9NRVNTQUdFO1xuICBtZXNzYWdlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVIaXN0b3J5TmV4dE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeVByZXZNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtOZXh0IHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtQcmV2IHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfUFJFVjtcbn1cblxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9XG4gIEJhY2tncm91bmRPcGVyYXRpb25NZXNzYWdlIHxcbiAgQ29uc29sZVVuZm9jdXNNZXNzYWdlIHxcbiAgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2UgfFxuICBDb25zb2xlRW50ZXJGaW5kTWVzc2FnZSB8XG4gIENvbnNvbGVRdWVyeUNvbXBsZXRpb25zTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93Q29tbWFuZE1lc3NhZ2UgfFxuICBDb25zb2xlU2hvd0Vycm9yTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93SW5mb01lc3NhZ2UgfFxuICBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHxcbiAgQ29uc29sZUhpZGVNZXNzYWdlIHxcbiAgRm9sbG93U3RhcnRNZXNzYWdlIHxcbiAgRm9sbG93UmVxdWVzdENvdW50VGFyZ2V0c01lc3NhZ2UgfFxuICBGb2xsb3dSZXNwb25zZUNvdW50VGFyZ2V0c01lc3NhZ2UgfFxuICBGb2xsb3dDcmVhdGVIaW50c01lc3NhZ2UgfFxuICBGb2xsb3dTaG93SGludHNNZXNzYWdlIHxcbiAgRm9sbG93UmVtb3ZlSGludHNNZXNzYWdlIHxcbiAgRm9sbG93QWN0aXZhdGVNZXNzYWdlIHxcbiAgRm9sbG93S2V5UHJlc3NNZXNzYWdlIHxcbiAgTWFya1NldEdsb2JhbE1lc3NhZ2UgfFxuICBNYXJrSnVtcEdsb2JhbE1lc3NhZ2UgfFxuICBUYWJTY3JvbGxUb01lc3NhZ2UgfFxuICBGaW5kTmV4dE1lc3NhZ2UgfFxuICBGaW5kUHJldk1lc3NhZ2UgfFxuICBGaW5kR2V0S2V5d29yZE1lc3NhZ2UgfFxuICBGaW5kU2V0S2V5d29yZE1lc3NhZ2UgfFxuICBBZGRvbkVuYWJsZWRRdWVyeU1lc3NhZ2UgfFxuICBBZGRvbkVuYWJsZWRSZXNwb25zZU1lc3NhZ2UgfFxuICBBZGRvblRvZ2dsZUVuYWJsZWRNZXNzYWdlIHxcbiAgT3BlblVybE1lc3NhZ2UgfFxuICBTZXR0aW5nc0NoYW5nZWRNZXNzYWdlIHxcbiAgU2V0dGluZ3NRdWVyeU1lc3NhZ2UgfFxuICBDb25zb2xlRnJhbWVNZXNzYWdlTWVzc2FnZSB8XG4gIE5hdmlnYXRlSGlzdG9yeU5leHRNZXNzYWdlIHxcbiAgTmF2aWdhdGVIaXN0b3J5UHJldk1lc3NhZ2UgfFxuICBOYXZpZ2F0ZUxpbmtOZXh0IHxcbiAgTmF2aWdhdGVMaW5rUHJldjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBjb25zdCB2YWx1ZU9mID0gKG86IGFueSk6IE1lc3NhZ2UgPT4ge1xuICBzd2l0Y2ggKG8udHlwZSkge1xuICBjYXNlIENPTlNPTEVfVU5GT0NVUzpcbiAgY2FzZSBDT05TT0xFX0VOVEVSX0NPTU1BTkQ6XG4gIGNhc2UgQ09OU09MRV9FTlRFUl9GSU5EOlxuICBjYXNlIENPTlNPTEVfUVVFUllfQ09NUExFVElPTlM6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0NPTU1BTkQ6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0VSUk9SOlxuICBjYXNlIENPTlNPTEVfU0hPV19JTkZPOlxuICBjYXNlIENPTlNPTEVfU0hPV19GSU5EOlxuICBjYXNlIENPTlNPTEVfSElERTpcbiAgY2FzZSBGT0xMT1dfU1RBUlQ6XG4gIGNhc2UgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUzpcbiAgY2FzZSBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUzpcbiAgY2FzZSBGT0xMT1dfQ1JFQVRFX0hJTlRTOlxuICBjYXNlIEZPTExPV19TSE9XX0hJTlRTOlxuICBjYXNlIEZPTExPV19SRU1PVkVfSElOVFM6XG4gIGNhc2UgRk9MTE9XX0FDVElWQVRFOlxuICBjYXNlIEZPTExPV19LRVlfUFJFU1M6XG4gIGNhc2UgTUFSS19TRVRfR0xPQkFMOlxuICBjYXNlIE1BUktfSlVNUF9HTE9CQUw6XG4gIGNhc2UgVEFCX1NDUk9MTF9UTzpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIEZJTkRfR0VUX0tFWVdPUkQ6XG4gIGNhc2UgRklORF9TRVRfS0VZV09SRDpcbiAgY2FzZSBBRERPTl9FTkFCTEVEX1FVRVJZOlxuICBjYXNlIEFERE9OX0VOQUJMRURfUkVTUE9OU0U6XG4gIGNhc2UgQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gIGNhc2UgT1BFTl9VUkw6XG4gIGNhc2UgU0VUVElOR1NfQ0hBTkdFRDpcbiAgY2FzZSBTRVRUSU5HU19RVUVSWTpcbiAgY2FzZSBDT05TT0xFX0ZSQU1FX01FU1NBR0U6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfUFJFVjpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfTElOS19QUkVWOlxuICAgIHJldHVybiBvO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndW5rbm93biBvcGVyYXRpb24gdHlwZTogJyArIG8udHlwZSk7XG59O1xuIiwiLy8gSGlkZSBjb25zb2xlOyBvciBjYW5jZWwgc29tZSB1c2VyIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBDQU5DRUwgPSAnY2FuY2VsJztcblxuLy8gQWRkb25zXG5leHBvcnQgY29uc3QgQURET05fRU5BQkxFID0gJ2FkZG9uLmVuYWJsZSc7XG5leHBvcnQgY29uc3QgQURET05fRElTQUJMRSA9ICdhZGRvbi5kaXNhYmxlJztcbmV4cG9ydCBjb25zdCBBRERPTl9UT0dHTEVfRU5BQkxFRCA9ICdhZGRvbi50b2dnbGUuZW5hYmxlZCc7XG5cbi8vIENvbW1hbmRcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1cgPSAnY29tbWFuZC5zaG93JztcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfT1BFTiA9ICdjb21tYW5kLnNob3cub3Blbic7XG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XX1RBQk9QRU4gPSAnY29tbWFuZC5zaG93LnRhYm9wZW4nO1xuZXhwb3J0IGNvbnN0IENPTU1BTkRfU0hPV19XSU5PUEVOID0gJ2NvbW1hbmQuc2hvdy53aW5vcGVuJztcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfQlVGRkVSID0gJ2NvbW1hbmQuc2hvdy5idWZmZXInO1xuZXhwb3J0IGNvbnN0IENPTU1BTkRfU0hPV19BRERCT09LTUFSSyA9ICdjb21tYW5kLnNob3cuYWRkYm9va21hcmsnO1xuXG4vLyBTY3JvbGxzXG5leHBvcnQgY29uc3QgU0NST0xMX1ZFUlRJQ0FMTFkgPSAnc2Nyb2xsLnZlcnRpY2FsbHknO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9IT1JJWk9OQUxMWSA9ICdzY3JvbGwuaG9yaXpvbmFsbHknO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9QQUdFUyA9ICdzY3JvbGwucGFnZXMnO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9UT1AgPSAnc2Nyb2xsLnRvcCc7XG5leHBvcnQgY29uc3QgU0NST0xMX0JPVFRPTSA9ICdzY3JvbGwuYm90dG9tJztcbmV4cG9ydCBjb25zdCBTQ1JPTExfSE9NRSA9ICdzY3JvbGwuaG9tZSc7XG5leHBvcnQgY29uc3QgU0NST0xMX0VORCA9ICdzY3JvbGwuZW5kJztcblxuLy8gRm9sbG93c1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVEFSVCA9ICdmb2xsb3cuc3RhcnQnO1xuXG4vLyBOYXZpZ2F0aW9uc1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0hJU1RPUllfUFJFViA9ICduYXZpZ2F0ZS5oaXN0b3J5LnByZXYnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0hJU1RPUllfTkVYVCA9ICduYXZpZ2F0ZS5oaXN0b3J5Lm5leHQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfUFJFViA9ICduYXZpZ2F0ZS5saW5rLnByZXYnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfTkVYVCA9ICduYXZpZ2F0ZS5saW5rLm5leHQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1BBUkVOVCA9ICduYXZpZ2F0ZS5wYXJlbnQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1JPT1QgPSAnbmF2aWdhdGUucm9vdCc7XG5cbi8vIEZvY3VzXG5leHBvcnQgY29uc3QgRk9DVVNfSU5QVVQgPSAnZm9jdXMuaW5wdXQnO1xuXG4vLyBQYWdlXG5leHBvcnQgY29uc3QgUEFHRV9TT1VSQ0UgPSAncGFnZS5zb3VyY2UnO1xuZXhwb3J0IGNvbnN0IFBBR0VfSE9NRSA9ICdwYWdlLmhvbWUnO1xuXG4vLyBUYWJzXG5leHBvcnQgY29uc3QgVEFCX0NMT1NFID0gJ3RhYnMuY2xvc2UnO1xuZXhwb3J0IGNvbnN0IFRBQl9DTE9TRV9GT1JDRSA9ICd0YWJzLmNsb3NlLmZvcmNlJztcbmV4cG9ydCBjb25zdCBUQUJfQ0xPU0VfUklHSFQgPSAndGFicy5jbG9zZS5yaWdodCc7XG5leHBvcnQgY29uc3QgVEFCX1JFT1BFTiA9ICd0YWJzLnJlb3Blbic7XG5leHBvcnQgY29uc3QgVEFCX1BSRVYgPSAndGFicy5wcmV2JztcbmV4cG9ydCBjb25zdCBUQUJfTkVYVCA9ICd0YWJzLm5leHQnO1xuZXhwb3J0IGNvbnN0IFRBQl9GSVJTVCA9ICd0YWJzLmZpcnN0JztcbmV4cG9ydCBjb25zdCBUQUJfTEFTVCA9ICd0YWJzLmxhc3QnO1xuZXhwb3J0IGNvbnN0IFRBQl9QUkVWX1NFTCA9ICd0YWJzLnByZXZzZWwnO1xuZXhwb3J0IGNvbnN0IFRBQl9SRUxPQUQgPSAndGFicy5yZWxvYWQnO1xuZXhwb3J0IGNvbnN0IFRBQl9QSU4gPSAndGFicy5waW4nO1xuZXhwb3J0IGNvbnN0IFRBQl9VTlBJTiA9ICd0YWJzLnVucGluJztcbmV4cG9ydCBjb25zdCBUQUJfVE9HR0xFX1BJTk5FRCA9ICd0YWJzLnBpbi50b2dnbGUnO1xuZXhwb3J0IGNvbnN0IFRBQl9EVVBMSUNBVEUgPSAndGFicy5kdXBsaWNhdGUnO1xuXG4vLyBab29tc1xuZXhwb3J0IGNvbnN0IFpPT01fSU4gPSAnem9vbS5pbic7XG5leHBvcnQgY29uc3QgWk9PTV9PVVQgPSAnem9vbS5vdXQnO1xuZXhwb3J0IGNvbnN0IFpPT01fTkVVVFJBTCA9ICd6b29tLm5ldXRyYWwnO1xuXG4vLyBVcmwgeWFuay9wYXN0ZVxuZXhwb3J0IGNvbnN0IFVSTFNfWUFOSyA9ICd1cmxzLnlhbmsnO1xuZXhwb3J0IGNvbnN0IFVSTFNfUEFTVEUgPSAndXJscy5wYXN0ZSc7XG5cbi8vIEZpbmRcbmV4cG9ydCBjb25zdCBGSU5EX1NUQVJUID0gJ2ZpbmQuc3RhcnQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfTkVYVCA9ICdmaW5kLm5leHQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9ICdmaW5kLnByZXYnO1xuXG4vLyBNYXJrXG5leHBvcnQgY29uc3QgTUFSS19TRVRfUFJFRklYID0gJ21hcmsuc2V0LnByZWZpeCc7XG5leHBvcnQgY29uc3QgTUFSS19KVU1QX1BSRUZJWCA9ICdtYXJrLmp1bXAucHJlZml4JztcblxuLy8gUmVwZWF0XG5leHBvcnQgY29uc3QgUkVQRUFUX0xBU1QgPSAncmVwZWF0Lmxhc3QnO1xuXG4vLyBJbnRlcm5hbFxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX09QRU5fVVJMID0gJ2ludGVybmFsLm9wZW4udXJsJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ0FOQ0VMO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZG9uRW5hYmxlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvbkRpc2FibGVPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQURET05fRElTQUJMRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvblRvZ2dsZUVuYWJsZWRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQURET05fVE9HR0xFX0VOQUJMRUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93T3Blbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfT1BFTjtcbiAgYWx0ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dUYWJvcGVuT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPV19UQUJPUEVOO1xuICBhbHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kU2hvd1dpbm9wZW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XX1dJTk9QRU47XG4gIGFsdGVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93QnVmZmVyT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPV19CVUZGRVI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dBZGRib29rbWFya09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfQUREQk9PS01BUks7XG4gIGFsdGVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFZlcnRpY2FsbHlPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX1ZFUlRJQ0FMTFk7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsSG9yaXpvbmFsbHlPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX0hPUklaT05BTExZO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFBhZ2VzT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9QQUdFUztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxUb3BPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX1RPUDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxCb3R0b21PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX0JPVFRPTTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxIb21lT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9IT01FO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbEVuZE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTQ1JPTExfRU5EO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1N0YXJ0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TVEFSVDtcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeVByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeU5leHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlTGlua1ByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfTElOS19QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlTGlua05leHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfTElOS19ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlUGFyZW50T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX1BBUkVOVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZVJvb3RPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfUk9PVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c0lucHV0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZPQ1VTX0lOUFVUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VTb3VyY2VPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgUEFHRV9TT1VSQ0U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUhvbWVPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgUEFHRV9IT01FO1xuICBuZXdUYWI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiQ2xvc2VPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0NMT1NFO1xuICBzZWxlY3Q/OiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNsb3NlRm9yY2VPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0NMT1NFX0ZPUkNFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNsb3NlUmlnaHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0NMT1NFX1JJR0hUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlJlb3Blbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfUkVPUEVOO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1BSRVY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiTmV4dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJGaXJzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfRklSU1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiTGFzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfTEFTVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJQcmV2U2VsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9QUkVWX1NFTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJSZWxvYWRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1JFTE9BRDtcbiAgY2FjaGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUGluT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9QSU47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiVW5waW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1VOUElOO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlRvZ2dsZVBpbm5lZE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfVE9HR0xFX1BJTk5FRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJEdXBsaWNhdGVPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0RVUExJQ0FURTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tSW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgWk9PTV9JTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tT3V0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fT1VUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvb21OZXV0cmFsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fTkVVVFJBTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxzWWFua09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBVUkxTX1lBTks7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsc1Bhc3RlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFVSTFNfUEFTVEU7XG4gIG5ld1RhYjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kU3RhcnRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTmV4dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtTZXRQcmVmaXhPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTUFSS19TRVRfUFJFRklYO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtKdW1wUHJlZml4T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfSlVNUF9QUkVGSVg7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwZWF0TGFzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBSRVBFQVRfTEFTVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbE9wZW5Vcmwge1xuICB0eXBlOiB0eXBlb2YgSU5URVJOQUxfT1BFTl9VUkw7XG4gIHVybDogc3RyaW5nO1xuICBuZXdUYWI/OiBib29sZWFuO1xuICBuZXdXaW5kb3c/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgT3BlcmF0aW9uID1cbiAgQ2FuY2VsT3BlcmF0aW9uIHxcbiAgQWRkb25FbmFibGVPcGVyYXRpb24gfFxuICBBZGRvbkRpc2FibGVPcGVyYXRpb24gfFxuICBBZGRvblRvZ2dsZUVuYWJsZWRPcGVyYXRpb24gfFxuICBDb21tYW5kU2hvd09wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93T3Blbk9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93VGFib3Blbk9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93V2lub3Blbk9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93QnVmZmVyT3BlcmF0aW9uIHxcbiAgQ29tbWFuZFNob3dBZGRib29rbWFya09wZXJhdGlvbiB8XG4gIFNjcm9sbFZlcnRpY2FsbHlPcGVyYXRpb24gfFxuICBTY3JvbGxIb3Jpem9uYWxseU9wZXJhdGlvbiB8XG4gIFNjcm9sbFBhZ2VzT3BlcmF0aW9uIHxcbiAgU2Nyb2xsVG9wT3BlcmF0aW9uIHxcbiAgU2Nyb2xsQm90dG9tT3BlcmF0aW9uIHxcbiAgU2Nyb2xsSG9tZU9wZXJhdGlvbiB8XG4gIFNjcm9sbEVuZE9wZXJhdGlvbiB8XG4gIEZvbGxvd1N0YXJ0T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVIaXN0b3J5UHJldk9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlSGlzdG9yeU5leHRPcGVyYXRpb24gfFxuICBOYXZpZ2F0ZUxpbmtQcmV2T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVMaW5rTmV4dE9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlUGFyZW50T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVSb290T3BlcmF0aW9uIHxcbiAgRm9jdXNJbnB1dE9wZXJhdGlvbiB8XG4gIFBhZ2VTb3VyY2VPcGVyYXRpb24gfFxuICBQYWdlSG9tZU9wZXJhdGlvbiB8XG4gIFRhYkNsb3NlT3BlcmF0aW9uIHxcbiAgVGFiQ2xvc2VGb3JjZU9wZXJhdGlvbiB8XG4gIFRhYkNsb3NlUmlnaHRPcGVyYXRpb24gfFxuICBUYWJSZW9wZW5PcGVyYXRpb24gfFxuICBUYWJQcmV2T3BlcmF0aW9uIHxcbiAgVGFiTmV4dE9wZXJhdGlvbiB8XG4gIFRhYkZpcnN0T3BlcmF0aW9uIHxcbiAgVGFiTGFzdE9wZXJhdGlvbiB8XG4gIFRhYlByZXZTZWxPcGVyYXRpb24gfFxuICBUYWJSZWxvYWRPcGVyYXRpb24gfFxuICBUYWJQaW5PcGVyYXRpb24gfFxuICBUYWJVbnBpbk9wZXJhdGlvbiB8XG4gIFRhYlRvZ2dsZVBpbm5lZE9wZXJhdGlvbiB8XG4gIFRhYkR1cGxpY2F0ZU9wZXJhdGlvbiB8XG4gIFpvb21Jbk9wZXJhdGlvbiB8XG4gIFpvb21PdXRPcGVyYXRpb24gfFxuICBab29tTmV1dHJhbE9wZXJhdGlvbiB8XG4gIFVybHNZYW5rT3BlcmF0aW9uIHxcbiAgVXJsc1Bhc3RlT3BlcmF0aW9uIHxcbiAgRmluZFN0YXJ0T3BlcmF0aW9uIHxcbiAgRmluZE5leHRPcGVyYXRpb24gfFxuICBGaW5kUHJldk9wZXJhdGlvbiB8XG4gIE1hcmtTZXRQcmVmaXhPcGVyYXRpb24gfFxuICBNYXJrSnVtcFByZWZpeE9wZXJhdGlvbiB8XG4gIFJlcGVhdExhc3RPcGVyYXRpb24gfFxuICBJbnRlcm5hbE9wZW5Vcmw7XG5cbmNvbnN0IGFzc2VydE9wdGlvbmFsQm9vbGVhbiA9IChvYmo6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKSAmJlxuICAgICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBOb3QgYSBib29sZWFuIHBhcmFtZXRlcjogJyR7bmFtZX0gKCR7dHlwZW9mIG9ialtuYW1lXX0pJ2AsXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgYXNzZXJ0T3B0aW9uYWxTdHJpbmcgPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWVzPzogc3RyaW5nW10pID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpKSB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGBOb3QgYSBzdHJpbmcgcGFyYW1ldGVyOiAnJHtuYW1lfScgKCR7dHlwZW9mIHZhbHVlfSlgLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoICYmIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHBhcmFtZXRlciBmb3IgJyR7bmFtZX0nOiAnJHt2YWx1ZX0nYCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhc3NlcnRSZXF1aXJlZE51bWJlciA9IChvYmo6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSkgfHxcbiAgICB0eXBlb2Ygb2JqW25hbWVdICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgbnVtYmVyIHBhcmFtZXRlcjogJyR7bmFtZX1gKTtcbiAgfVxufTtcblxuY29uc3QgYXNzZXJ0UmVxdWlyZWRTdHJpbmcgPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpIHx8XG4gICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIHN0cmluZyBwYXJhbWV0ZXI6ICcke25hbWV9YCk7XG4gIH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5LCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5leHBvcnQgY29uc3QgdmFsdWVPZiA9IChvOiBhbnkpOiBPcGVyYXRpb24gPT4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAndHlwZScpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyAndHlwZScgZmllbGRgKTtcbiAgfVxuICBzd2l0Y2ggKG8udHlwZSkge1xuICBjYXNlIENPTU1BTkRfU0hPV19PUEVOOlxuICBjYXNlIENPTU1BTkRfU0hPV19UQUJPUEVOOlxuICBjYXNlIENPTU1BTkRfU0hPV19XSU5PUEVOOlxuICBjYXNlIENPTU1BTkRfU0hPV19BRERCT09LTUFSSzpcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ2FsdGVyJyk7XG4gICAgcmV0dXJuIHsgdHlwZTogby50eXBlLCBhbHRlcjogQm9vbGVhbihvLmFsdGVyKSB9O1xuICBjYXNlIFNDUk9MTF9WRVJUSUNBTExZOlxuICBjYXNlIFNDUk9MTF9IT1JJWk9OQUxMWTpcbiAgY2FzZSBTQ1JPTExfUEFHRVM6XG4gICAgYXNzZXJ0UmVxdWlyZWROdW1iZXIobywgJ2NvdW50Jyk7XG4gICAgcmV0dXJuIHsgdHlwZTogby50eXBlLCBjb3VudDogTnVtYmVyKG8uY291bnQpIH07XG4gIGNhc2UgRk9MTE9XX1NUQVJUOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sICdiYWNrZ3JvdW5kJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZPTExPV19TVEFSVCxcbiAgICAgIG5ld1RhYjogQm9vbGVhbih0eXBlb2Ygby5uZXdUYWIgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1RhYiksXG4gICAgICBiYWNrZ3JvdW5kOiBCb29sZWFuKHR5cGVvZiBvLmJhY2tncm91bmQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG8uYmFja2dyb3VuZCksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH07XG4gIGNhc2UgUEFHRV9IT01FOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFBBR0VfSE9NRSxcbiAgICAgIG5ld1RhYjogQm9vbGVhbih0eXBlb2Ygby5uZXdUYWIgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1RhYiksXG4gICAgfTtcbiAgY2FzZSBUQUJfQ0xPU0U6XG4gICAgYXNzZXJ0T3B0aW9uYWxTdHJpbmcobywgJ3NlbGVjdCcsIFsnbGVmdCcsICdyaWdodCddKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVEFCX0NMT1NFLFxuICAgICAgc2VsZWN0OiAodHlwZW9mIG8uc2VsZWN0ID09PSAndW5kZWZpbmVkJyA/ICdyaWdodCcgOiBvLnNlbGVjdCksXG4gICAgfTtcbiAgY2FzZSBUQUJfUkVMT0FEOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnY2FjaGUnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVEFCX1JFTE9BRCxcbiAgICAgIGNhY2hlOiBCb29sZWFuKHR5cGVvZiBvLmNhY2hlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5jYWNoZSksXG4gICAgfTtcbiAgY2FzZSBVUkxTX1BBU1RFOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFVSTFNfUEFTVEUsXG4gICAgICBuZXdUYWI6IEJvb2xlYW4odHlwZW9mIG8ubmV3VGFiID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgIH07XG4gIGNhc2UgSU5URVJOQUxfT1BFTl9VUkw6XG4gICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sICduZXdUYWInKTtcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ25ld1dpbmRvdycpO1xuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnYmFja2dyb3VuZCcpO1xuICAgIGFzc2VydFJlcXVpcmVkU3RyaW5nKG8sICd1cmwnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogSU5URVJOQUxfT1BFTl9VUkwsXG4gICAgICB1cmw6IG8udXJsLFxuICAgICAgbmV3VGFiOiBCb29sZWFuKHR5cGVvZiBvLm5ld1RhYiA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG8ubmV3VGFiKSxcbiAgICAgIG5ld1dpbmRvdzogQm9vbGVhbih0eXBlb2Ygby5uZXdXaW5kb3cgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1dpbmRvdyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgYmFja2dyb3VuZDogQm9vbGVhbih0eXBlb2Ygby5iYWNrZ3JvdW5kID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvLmJhY2tncm91bmQpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9O1xuICBjYXNlIENBTkNFTDpcbiAgY2FzZSBBRERPTl9FTkFCTEU6XG4gIGNhc2UgQURET05fRElTQUJMRTpcbiAgY2FzZSBBRERPTl9UT0dHTEVfRU5BQkxFRDpcbiAgY2FzZSBDT01NQU5EX1NIT1c6XG4gIGNhc2UgQ09NTUFORF9TSE9XX0JVRkZFUjpcbiAgY2FzZSBTQ1JPTExfVE9QOlxuICBjYXNlIFNDUk9MTF9CT1RUT006XG4gIGNhc2UgU0NST0xMX0hPTUU6XG4gIGNhc2UgU0NST0xMX0VORDpcbiAgY2FzZSBOQVZJR0FURV9ISVNUT1JZX1BSRVY6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICBjYXNlIE5BVklHQVRFX0xJTktfUFJFVjpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfUEFSRU5UOlxuICBjYXNlIE5BVklHQVRFX1JPT1Q6XG4gIGNhc2UgRk9DVVNfSU5QVVQ6XG4gIGNhc2UgUEFHRV9TT1VSQ0U6XG4gIGNhc2UgVEFCX0NMT1NFX0ZPUkNFOlxuICBjYXNlIFRBQl9DTE9TRV9SSUdIVDpcbiAgY2FzZSBUQUJfUkVPUEVOOlxuICBjYXNlIFRBQl9QUkVWOlxuICBjYXNlIFRBQl9ORVhUOlxuICBjYXNlIFRBQl9GSVJTVDpcbiAgY2FzZSBUQUJfTEFTVDpcbiAgY2FzZSBUQUJfUFJFVl9TRUw6XG4gIGNhc2UgVEFCX1BJTjpcbiAgY2FzZSBUQUJfVU5QSU46XG4gIGNhc2UgVEFCX1RPR0dMRV9QSU5ORUQ6XG4gIGNhc2UgVEFCX0RVUExJQ0FURTpcbiAgY2FzZSBaT09NX0lOOlxuICBjYXNlIFpPT01fT1VUOlxuICBjYXNlIFpPT01fTkVVVFJBTDpcbiAgY2FzZSBVUkxTX1lBTks6XG4gIGNhc2UgRklORF9TVEFSVDpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIE1BUktfU0VUX1BSRUZJWDpcbiAgY2FzZSBNQVJLX0pVTVBfUFJFRklYOlxuICBjYXNlIFJFUEVBVF9MQVNUOlxuICAgIHJldHVybiB7IHR5cGU6IG8udHlwZSB9O1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gb3BlcmF0aW9uIHR5cGU6ICcgKyBvLnR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTlJlcGVhdGFibGUgPSAodHlwZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIFNDUk9MTF9WRVJUSUNBTExZOlxuICBjYXNlIFNDUk9MTF9IT1JJWk9OQUxMWTpcbiAgY2FzZSBTQ1JPTExfUEFHRVM6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfTkVYVDpcbiAgY2FzZSBOQVZJR0FURV9QQVJFTlQ6XG4gIGNhc2UgVEFCX0NMT1NFOlxuICBjYXNlIFRBQl9DTE9TRV9GT1JDRTpcbiAgY2FzZSBUQUJfQ0xPU0VfUklHSFQ6XG4gIGNhc2UgVEFCX1JFT1BFTjpcbiAgY2FzZSBUQUJfUFJFVjpcbiAgY2FzZSBUQUJfTkVYVDpcbiAgY2FzZSBUQUJfRFVQTElDQVRFOlxuICBjYXNlIFpPT01fSU46XG4gIGNhc2UgWk9PTV9PVVQ6XG4gIGNhc2UgVVJMU19QQVNURTpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIFJFUEVBVF9MQVNUOlxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJcbmV4cG9ydCB0eXBlIFByb3BlcnRpZXNKU09OID0ge1xuICBoaW50Y2hhcnM/OiBzdHJpbmc7XG4gIHNtb290aHNjcm9sbD86IGJvb2xlYW47XG4gIGNvbXBsZXRlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvcGVydHlUeXBlcyA9IHtcbiAgaGludGNoYXJzOiBzdHJpbmc7XG4gIHNtb290aHNjcm9sbDogc3RyaW5nO1xuICBjb21wbGV0ZTogc3RyaW5nO1xufTtcblxudHlwZSBQcm9wZXJ0eU5hbWUgPSAnaGludGNoYXJzJyB8ICdzbW9vdGhzY3JvbGwnIHwgJ2NvbXBsZXRlJztcblxudHlwZSBQcm9wZXJ0eURlZiA9IHtcbiAgbmFtZTogUHJvcGVydHlOYW1lO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBkZWZhdWx0VmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG4gIHR5cGU6ICdzdHJpbmcnIHwgJ251bWJlcicgfCAnYm9vbGVhbic7XG59O1xuXG5jb25zdCBkZWZzOiBQcm9wZXJ0eURlZltdID0gW1xuICB7XG4gICAgbmFtZTogJ2hpbnRjaGFycycsXG4gICAgZGVzY3JpcHRpb246ICdoaW50IGNoYXJhY3RlcnMgb24gZm9sbG93IG1vZGUnLFxuICAgIGRlZmF1bHRWYWx1ZTogJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgfSwge1xuICAgIG5hbWU6ICdzbW9vdGhzY3JvbGwnLFxuICAgIGRlc2NyaXB0aW9uOiAnc21vb3RoIHNjcm9sbCcsXG4gICAgZGVmYXVsdFZhbHVlOiBmYWxzZSxcbiAgICB0eXBlOiAnYm9vbGVhbicsXG4gIH0sIHtcbiAgICBuYW1lOiAnY29tcGxldGUnLFxuICAgIGRlc2NyaXB0aW9uOiAnd2hpY2ggYXJlIGNvbXBsZXRlZCBhdCB0aGUgb3BlbiBwYWdlJyxcbiAgICBkZWZhdWx0VmFsdWU6ICdzYmgnLFxuICAgIHR5cGU6ICdzdHJpbmcnLFxuICB9XG5dO1xuXG5jb25zdCBkZWZhdWx0VmFsdWVzID0ge1xuICBoaW50Y2hhcnM6ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicsXG4gIHNtb290aHNjcm9sbDogZmFsc2UsXG4gIGNvbXBsZXRlOiAnc2JoJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb3BlcnRpZXMge1xuICBwdWJsaWMgaGludGNoYXJzOiBzdHJpbmc7XG5cbiAgcHVibGljIHNtb290aHNjcm9sbDogYm9vbGVhbjtcblxuICBwdWJsaWMgY29tcGxldGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAgaGludGNoYXJzLFxuICAgIHNtb290aHNjcm9sbCxcbiAgICBjb21wbGV0ZSxcbiAgfToge1xuICAgIGhpbnRjaGFycz86IHN0cmluZztcbiAgICBzbW9vdGhzY3JvbGw/OiBib29sZWFuO1xuICAgIGNvbXBsZXRlPzogc3RyaW5nO1xuICB9ID0ge30pIHtcbiAgICB0aGlzLmhpbnRjaGFycyA9IGhpbnRjaGFycyB8fCBkZWZhdWx0VmFsdWVzLmhpbnRjaGFycztcbiAgICB0aGlzLnNtb290aHNjcm9sbCA9IHNtb290aHNjcm9sbCB8fCBkZWZhdWx0VmFsdWVzLnNtb290aHNjcm9sbDtcbiAgICB0aGlzLmNvbXBsZXRlID0gY29tcGxldGUgfHwgZGVmYXVsdFZhbHVlcy5jb21wbGV0ZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBQcm9wZXJ0aWVzSlNPTik6IFByb3BlcnRpZXMge1xuICAgIHJldHVybiBuZXcgUHJvcGVydGllcyhqc29uKTtcbiAgfVxuXG4gIHN0YXRpYyB0eXBlcygpOiBQcm9wZXJ0eVR5cGVzIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGludGNoYXJzOiAnc3RyaW5nJyxcbiAgICAgIHNtb290aHNjcm9sbDogJ2Jvb2xlYW4nLFxuICAgICAgY29tcGxldGU6ICdzdHJpbmcnLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZGVmKG5hbWU6IHN0cmluZyk6IFByb3BlcnR5RGVmIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gZGVmcy5maW5kKHAgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZzKCk6IFByb3BlcnR5RGVmW10ge1xuICAgIHJldHVybiBkZWZzO1xuICB9XG5cbiAgdG9KU09OKCk6IFByb3BlcnRpZXNKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGludGNoYXJzOiB0aGlzLmhpbnRjaGFycyxcbiAgICAgIHNtb290aHNjcm9sbDogdGhpcy5zbW9vdGhzY3JvbGwsXG4gICAgICBjb21wbGV0ZTogdGhpcy5jb21wbGV0ZSxcbiAgICB9O1xuICB9XG59XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJpbXBvcnQgS2V5IGZyb20gJy4vS2V5JztcblxuZXhwb3J0IHR5cGUgQmxhY2tsaXN0SXRlbUpTT04gPSBzdHJpbmcgfCB7XG4gIHVybDogc3RyaW5nLFxuICBrZXlzOiBzdHJpbmdbXSxcbn07XG5cbmV4cG9ydCB0eXBlIEJsYWNrbGlzdEpTT04gPSBCbGFja2xpc3RJdGVtSlNPTltdO1xuXG5jb25zdCByZWdleEZyb21XaWxkY2FyZCA9IChwYXR0ZXJuOiBzdHJpbmcpOiBSZWdFeHAgPT4ge1xuICBjb25zdCByZWdleFN0ciA9ICdeJyArIHBhdHRlcm4ucmVwbGFjZSgvXFwqL2csICcuKicpICsgJyQnO1xuICByZXR1cm4gbmV3IFJlZ0V4cChyZWdleFN0cik7XG59O1xuXG5leHBvcnQgY2xhc3MgQmxhY2tsaXN0SXRlbSB7XG4gIHB1YmxpYyByZWFkb25seSBwYXR0ZXJuOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWdleDogUmVnRXhwO1xuXG4gIHB1YmxpYyByZWFkb25seSBwYXJ0aWFsOiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBrZXlzOiBzdHJpbmdbXTtcblxuICBwcml2YXRlIHJlYWRvbmx5IGtleUVudGl0aWVzOiBLZXlbXTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXR0ZXJuOiBzdHJpbmcsXG4gICAgcGFydGlhbDogYm9vbGVhbixcbiAgICBrZXlzOiBzdHJpbmdbXVxuICApIHtcbiAgICB0aGlzLnBhdHRlcm4gPSBwYXR0ZXJuO1xuICAgIHRoaXMucmVnZXggPSByZWdleEZyb21XaWxkY2FyZChwYXR0ZXJuKTtcbiAgICB0aGlzLnBhcnRpYWwgPSBwYXJ0aWFsO1xuICAgIHRoaXMua2V5cyA9IGtleXM7XG4gICAgdGhpcy5rZXlFbnRpdGllcyA9IHRoaXMua2V5cy5tYXAoS2V5LmZyb21NYXBLZXkpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IEJsYWNrbGlzdEl0ZW1KU09OKTogQmxhY2tsaXN0SXRlbSB7XG4gICAgcmV0dXJuIHR5cGVvZiBqc29uID09PSAnc3RyaW5nJ1xuICAgICAgPyBuZXcgQmxhY2tsaXN0SXRlbShqc29uLCBmYWxzZSwgW10pXG4gICAgICA6IG5ldyBCbGFja2xpc3RJdGVtKGpzb24udXJsLCB0cnVlLCBqc29uLmtleXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IEJsYWNrbGlzdEl0ZW1KU09OIHtcbiAgICBpZiAoIXRoaXMucGFydGlhbCkge1xuICAgICAgcmV0dXJuIHRoaXMucGF0dGVybjtcbiAgICB9XG4gICAgcmV0dXJuIHsgdXJsOiB0aGlzLnBhdHRlcm4sIGtleXM6IHRoaXMua2V5cyB9O1xuICB9XG5cbiAgbWF0Y2hlcyh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBhdHRlcm4uaW5jbHVkZXMoJy8nKVxuICAgICAgPyB0aGlzLnJlZ2V4LnRlc3QodXJsLmhvc3QgKyB1cmwucGF0aG5hbWUpXG4gICAgICA6IHRoaXMucmVnZXgudGVzdCh1cmwuaG9zdCk7XG4gIH1cblxuICBpbmNsdWRlS2V5KHVybDogVVJMLCBrZXk6IEtleSk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5tYXRjaGVzKHVybCkgfHwgIXRoaXMucGFydGlhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5rZXlFbnRpdGllcy5zb21lKGsgPT4gay5lcXVhbHMoa2V5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxhY2tsaXN0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IGl0ZW1zOiBCbGFja2xpc3RJdGVtW10sXG4gICkge1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IEJsYWNrbGlzdEpTT04pOiBCbGFja2xpc3Qge1xuICAgIGNvbnN0IGl0ZW1zID0ganNvbi5tYXAobyA9PiBCbGFja2xpc3RJdGVtLmZyb21KU09OKG8pKTtcbiAgICByZXR1cm4gbmV3IEJsYWNrbGlzdChpdGVtcyk7XG4gIH1cblxuICB0b0pTT04oKTogQmxhY2tsaXN0SlNPTiB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS50b0pTT04oKSk7XG4gIH1cblxuICBpbmNsdWRlc0VudGlyZUJsYWNrbGlzdCh1cmw6IFVSTCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnNvbWUoaXRlbSA9PiAhaXRlbS5wYXJ0aWFsICYmIGl0ZW0ubWF0Y2hlcyh1cmwpKTtcbiAgfVxuXG4gIGluY2x1ZGVLZXkodXJsOiBVUkwsIGtleTogS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMuc29tZShpdGVtID0+IGl0ZW0uaW5jbHVkZUtleSh1cmwsIGtleSkpO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gJy4uL29wZXJhdGlvbnMnO1xuXG50eXBlIE9wZXJhdGlvbkpzb24gPSB7XG4gIHR5cGU6IHN0cmluZ1xufSB8IHtcbiAgdHlwZTogc3RyaW5nO1xuICBbcHJvcDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbjtcbn07XG5leHBvcnQgdHlwZSBLZXltYXBzSlNPTiA9IHsgW2tleTogc3RyaW5nXTogT3BlcmF0aW9uSnNvbiB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXltYXBzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBkYXRhOiB7IFtrZXk6IHN0cmluZ106IG9wZXJhdGlvbnMuT3BlcmF0aW9uIH0sXG4gICkge1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IEtleW1hcHNKU09OKTogS2V5bWFwcyB7XG4gICAgY29uc3QgZW50cmllczogeyBba2V5OiBzdHJpbmddOiBvcGVyYXRpb25zLk9wZXJhdGlvbiB9ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoanNvbikpIHtcbiAgICAgIGVudHJpZXNba2V5XSA9IG9wZXJhdGlvbnMudmFsdWVPZihqc29uW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEtleW1hcHMoZW50cmllcyk7XG4gIH1cblxuICBjb21iaW5lKG90aGVyOiBLZXltYXBzKTogS2V5bWFwcyB7XG4gICAgcmV0dXJuIG5ldyBLZXltYXBzKHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIC4uLm90aGVyLmRhdGEsXG4gICAgfSk7XG4gIH1cblxuICB0b0pTT04oKTogS2V5bWFwc0pTT04ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBlbnRyaWVzKCk6IFtzdHJpbmcsIG9wZXJhdGlvbnMuT3BlcmF0aW9uXVtdIHtcbiAgICByZXR1cm4gT2JqZWN0LmVudHJpZXModGhpcy5kYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IEFqdiBmcm9tICdhanYnO1xuXG5pbXBvcnQgS2V5bWFwcywgeyBLZXltYXBzSlNPTiB9IGZyb20gJy4vS2V5bWFwcyc7XG5pbXBvcnQgU2VhcmNoLCB7IFNlYXJjaEpTT04gfSBmcm9tICcuL1NlYXJjaCc7XG5pbXBvcnQgUHJvcGVydGllcywgeyBQcm9wZXJ0aWVzSlNPTiB9IGZyb20gJy4vUHJvcGVydGllcyc7XG5pbXBvcnQgQmxhY2tsaXN0LCB7IEJsYWNrbGlzdEpTT04gfSBmcm9tICcuL0JsYWNrbGlzdCc7XG5pbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZSc7XG5cbmV4cG9ydCB0eXBlIFNldHRpbmdzSlNPTiA9IHtcbiAga2V5bWFwcz86IEtleW1hcHNKU09OLFxuICBzZWFyY2g/OiBTZWFyY2hKU09OLFxuICBwcm9wZXJ0aWVzPzogUHJvcGVydGllc0pTT04sXG4gIGJsYWNrbGlzdD86IEJsYWNrbGlzdEpTT04sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5ncyB7XG4gIHB1YmxpYyBrZXltYXBzOiBLZXltYXBzO1xuXG4gIHB1YmxpYyBzZWFyY2g6IFNlYXJjaDtcblxuICBwdWJsaWMgcHJvcGVydGllczogUHJvcGVydGllcztcblxuICBwdWJsaWMgYmxhY2tsaXN0OiBCbGFja2xpc3Q7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGtleW1hcHMsXG4gICAgc2VhcmNoLFxuICAgIHByb3BlcnRpZXMsXG4gICAgYmxhY2tsaXN0LFxuICB9OiB7XG4gICAga2V5bWFwczogS2V5bWFwcztcbiAgICBzZWFyY2g6IFNlYXJjaDtcbiAgICBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuICAgIGJsYWNrbGlzdDogQmxhY2tsaXN0O1xuICB9KSB7XG4gICAgdGhpcy5rZXltYXBzID0ga2V5bWFwcztcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuYmxhY2tsaXN0ID0gYmxhY2tsaXN0O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IHVua25vd24pOiBTZXR0aW5ncyB7XG4gICAgY29uc3QgdmFsaWQgPSB2YWxpZGF0ZShqc29uKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gKHZhbGlkYXRlIGFzIGFueSkuZXJyb3JzISFcbiAgICAgICAgLm1hcCgoZXJyOiBBanYuRXJyb3JPYmplY3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gYCcke2Vyci5kYXRhUGF0aH0nICR7ZXJyLm1lc3NhZ2V9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oJzsgJyk7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGNvbnN0IG9iaiA9IGpzb24gYXMgU2V0dGluZ3NKU09OO1xuICAgIGNvbnN0IHNldHRpbmdzID0geyAuLi5EZWZhdWx0U2V0dGluZyB9O1xuICAgIGlmIChvYmoua2V5bWFwcykge1xuICAgICAgc2V0dGluZ3Mua2V5bWFwcyA9IEtleW1hcHMuZnJvbUpTT04ob2JqLmtleW1hcHMpO1xuICAgIH1cbiAgICBpZiAob2JqLnNlYXJjaCkge1xuICAgICAgc2V0dGluZ3Muc2VhcmNoID0gU2VhcmNoLmZyb21KU09OKG9iai5zZWFyY2gpO1xuICAgIH1cbiAgICBpZiAob2JqLnByb3BlcnRpZXMpIHtcbiAgICAgIHNldHRpbmdzLnByb3BlcnRpZXMgPSBQcm9wZXJ0aWVzLmZyb21KU09OKG9iai5wcm9wZXJ0aWVzKTtcbiAgICB9XG4gICAgaWYgKG9iai5ibGFja2xpc3QpIHtcbiAgICAgIHNldHRpbmdzLmJsYWNrbGlzdCA9IEJsYWNrbGlzdC5mcm9tSlNPTihvYmouYmxhY2tsaXN0KTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBTZXR0aW5ncyhzZXR0aW5ncyk7XG4gIH1cblxuICB0b0pTT04oKTogU2V0dGluZ3NKU09OIHtcbiAgICByZXR1cm4ge1xuICAgICAga2V5bWFwczogdGhpcy5rZXltYXBzLnRvSlNPTigpLFxuICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaC50b0pTT04oKSxcbiAgICAgIHByb3BlcnRpZXM6IHRoaXMucHJvcGVydGllcy50b0pTT04oKSxcbiAgICAgIGJsYWNrbGlzdDogdGhpcy5ibGFja2xpc3QudG9KU09OKCksXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNldHRpbmdKU09OVGV4dCA9IGB7XG4gIFwia2V5bWFwc1wiOiB7XG4gICAgXCIwXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmhvbWVcIiB9LFxuICAgIFwiOlwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvd1wiIH0sXG4gICAgXCJvXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93Lm9wZW5cIiwgXCJhbHRlclwiOiBmYWxzZSB9LFxuICAgIFwiT1wiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5vcGVuXCIsIFwiYWx0ZXJcIjogdHJ1ZSB9LFxuICAgIFwidFwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy50YWJvcGVuXCIsIFwiYWx0ZXJcIjogZmFsc2UgfSxcbiAgICBcIlRcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cudGFib3BlblwiLCBcImFsdGVyXCI6IHRydWUgfSxcbiAgICBcIndcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cud2lub3BlblwiLCBcImFsdGVyXCI6IGZhbHNlIH0sXG4gICAgXCJXXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93Lndpbm9wZW5cIiwgXCJhbHRlclwiOiB0cnVlIH0sXG4gICAgXCJiXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93LmJ1ZmZlclwiIH0sXG4gICAgXCJhXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93LmFkZGJvb2ttYXJrXCIsIFwiYWx0ZXJcIjogdHJ1ZSB9LFxuICAgIFwia1wiOiB7IFwidHlwZVwiOiBcInNjcm9sbC52ZXJ0aWNhbGx5XCIsIFwiY291bnRcIjogLTEgfSxcbiAgICBcImpcIjogeyBcInR5cGVcIjogXCJzY3JvbGwudmVydGljYWxseVwiLCBcImNvdW50XCI6IDEgfSxcbiAgICBcImhcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuaG9yaXpvbmFsbHlcIiwgXCJjb3VudFwiOiAtMSB9LFxuICAgIFwibFwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5ob3Jpem9uYWxseVwiLCBcImNvdW50XCI6IDEgfSxcbiAgICBcIjxDLVU+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogLTAuNSB9LFxuICAgIFwiPEMtRD5cIjogeyBcInR5cGVcIjogXCJzY3JvbGwucGFnZXNcIiwgXCJjb3VudFwiOiAwLjUgfSxcbiAgICBcIjxDLUI+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogLTEgfSxcbiAgICBcIjxDLUY+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogMSB9LFxuICAgIFwiZ2dcIjogeyBcInR5cGVcIjogXCJzY3JvbGwudG9wXCIgfSxcbiAgICBcIkdcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuYm90dG9tXCIgfSxcbiAgICBcIiRcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuZW5kXCIgfSxcbiAgICBcImRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlXCIgfSxcbiAgICBcIkRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlXCIsIFwic2VsZWN0XCI6IFwibGVmdFwiIH0sXG4gICAgXCJ4JFwiOiB7IFwidHlwZVwiOiBcInRhYnMuY2xvc2UucmlnaHRcIiB9LFxuICAgIFwiIWRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlLmZvcmNlXCIgfSxcbiAgICBcInVcIjogeyBcInR5cGVcIjogXCJ0YWJzLnJlb3BlblwiIH0sXG4gICAgXCJLXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5wcmV2XCIgfSxcbiAgICBcIkpcIjogeyBcInR5cGVcIjogXCJ0YWJzLm5leHRcIiB9LFxuICAgIFwiZ1RcIjogeyBcInR5cGVcIjogXCJ0YWJzLnByZXZcIiB9LFxuICAgIFwiZ3RcIjogeyBcInR5cGVcIjogXCJ0YWJzLm5leHRcIiB9LFxuICAgIFwiZzBcIjogeyBcInR5cGVcIjogXCJ0YWJzLmZpcnN0XCIgfSxcbiAgICBcImckXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5sYXN0XCIgfSxcbiAgICBcIjxDLTY+XCI6IHsgXCJ0eXBlXCI6IFwidGFicy5wcmV2c2VsXCIgfSxcbiAgICBcInJcIjogeyBcInR5cGVcIjogXCJ0YWJzLnJlbG9hZFwiLCBcImNhY2hlXCI6IGZhbHNlIH0sXG4gICAgXCJSXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZWxvYWRcIiwgXCJjYWNoZVwiOiB0cnVlIH0sXG4gICAgXCJ6cFwiOiB7IFwidHlwZVwiOiBcInRhYnMucGluLnRvZ2dsZVwiIH0sXG4gICAgXCJ6ZFwiOiB7IFwidHlwZVwiOiBcInRhYnMuZHVwbGljYXRlXCIgfSxcbiAgICBcInppXCI6IHsgXCJ0eXBlXCI6IFwiem9vbS5pblwiIH0sXG4gICAgXCJ6b1wiOiB7IFwidHlwZVwiOiBcInpvb20ub3V0XCIgfSxcbiAgICBcInp6XCI6IHsgXCJ0eXBlXCI6IFwiem9vbS5uZXV0cmFsXCIgfSxcbiAgICBcImZcIjogeyBcInR5cGVcIjogXCJmb2xsb3cuc3RhcnRcIiwgXCJuZXdUYWJcIjogZmFsc2UgfSxcbiAgICBcIkZcIjogeyBcInR5cGVcIjogXCJmb2xsb3cuc3RhcnRcIiwgXCJuZXdUYWJcIjogdHJ1ZSwgXCJiYWNrZ3JvdW5kXCI6IGZhbHNlIH0sXG4gICAgXCJtXCI6IHsgXCJ0eXBlXCI6IFwibWFyay5zZXQucHJlZml4XCIgfSxcbiAgICBcIidcIjogeyBcInR5cGVcIjogXCJtYXJrLmp1bXAucHJlZml4XCIgfSxcbiAgICBcIkhcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5oaXN0b3J5LnByZXZcIiB9LFxuICAgIFwiTFwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLmhpc3RvcnkubmV4dFwiIH0sXG4gICAgXCJbW1wiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLmxpbmsucHJldlwiIH0sXG4gICAgXCJdXVwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLmxpbmsubmV4dFwiIH0sXG4gICAgXCJndVwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLnBhcmVudFwiIH0sXG4gICAgXCJnVVwiOiB7IFwidHlwZVwiOiBcIm5hdmlnYXRlLnJvb3RcIiB9LFxuICAgIFwiZ2lcIjogeyBcInR5cGVcIjogXCJmb2N1cy5pbnB1dFwiIH0sXG4gICAgXCJnZlwiOiB7IFwidHlwZVwiOiBcInBhZ2Uuc291cmNlXCIgfSxcbiAgICBcImdoXCI6IHsgXCJ0eXBlXCI6IFwicGFnZS5ob21lXCIgfSxcbiAgICBcImdIXCI6IHsgXCJ0eXBlXCI6IFwicGFnZS5ob21lXCIsIFwibmV3VGFiXCI6IHRydWUgfSxcbiAgICBcInlcIjogeyBcInR5cGVcIjogXCJ1cmxzLnlhbmtcIiB9LFxuICAgIFwicFwiOiB7IFwidHlwZVwiOiBcInVybHMucGFzdGVcIiwgXCJuZXdUYWJcIjogZmFsc2UgfSxcbiAgICBcIlBcIjogeyBcInR5cGVcIjogXCJ1cmxzLnBhc3RlXCIsIFwibmV3VGFiXCI6IHRydWUgfSxcbiAgICBcIi9cIjogeyBcInR5cGVcIjogXCJmaW5kLnN0YXJ0XCIgfSxcbiAgICBcIm5cIjogeyBcInR5cGVcIjogXCJmaW5kLm5leHRcIiB9LFxuICAgIFwiTlwiOiB7IFwidHlwZVwiOiBcImZpbmQucHJldlwiIH0sXG4gICAgXCIuXCI6IHsgXCJ0eXBlXCI6IFwicmVwZWF0Lmxhc3RcIiB9LFxuICAgIFwiPFMtRXNjPlwiOiB7IFwidHlwZVwiOiBcImFkZG9uLnRvZ2dsZS5lbmFibGVkXCIgfVxuICB9LFxuICBcInNlYXJjaFwiOiB7XG4gICAgXCJkZWZhdWx0XCI6IFwiZ29vZ2xlXCIsXG4gICAgXCJlbmdpbmVzXCI6IHtcbiAgICAgIFwiZ29vZ2xlXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tL3NlYXJjaD9xPXt9XCIsXG4gICAgICBcInlhaG9vXCI6IFwiaHR0cHM6Ly9zZWFyY2gueWFob28uY29tL3NlYXJjaD9wPXt9XCIsXG4gICAgICBcImJpbmdcIjogXCJodHRwczovL3d3dy5iaW5nLmNvbS9zZWFyY2g/cT17fVwiLFxuICAgICAgXCJkdWNrZHVja2dvXCI6IFwiaHR0cHM6Ly9kdWNrZHVja2dvLmNvbS8/cT17fVwiLFxuICAgICAgXCJ0d2l0dGVyXCI6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9zZWFyY2g/cT17fVwiLFxuICAgICAgXCJ3aWtpcGVkaWFcIjogXCJodHRwczovL2VuLndpa2lwZWRpYS5vcmcvdy9pbmRleC5waHA/c2VhcmNoPXt9XCJcbiAgICB9XG4gIH0sXG4gIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJoaW50Y2hhcnNcIjogXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLFxuICAgIFwic21vb3Roc2Nyb2xsXCI6IGZhbHNlLFxuICAgIFwiY29tcGxldGVcIjogXCJzYmhcIlxuICB9LFxuICBcImJsYWNrbGlzdFwiOiBbXG4gIF1cbn1gO1xuXG5leHBvcnQgY29uc3QgRGVmYXVsdFNldHRpbmc6IFNldHRpbmdzID1cbiAgU2V0dGluZ3MuZnJvbUpTT04oSlNPTi5wYXJzZShEZWZhdWx0U2V0dGluZ0pTT05UZXh0KSk7XG4iLCJjb25zdCBkaWdpdHMgPSBbJzAnLCAnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknXTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5IHtcbiAgcHVibGljIHJlYWRvbmx5IGtleTogc3RyaW5nO1xuXG4gIHB1YmxpYyByZWFkb25seSBzaGlmdDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkgY3RybDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkgYWx0OiBib29sZWFuO1xuXG4gIHB1YmxpYyByZWFkb25seSBtZXRhOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBrZXksXG4gICAgc2hpZnQgPSBmYWxzZSxcbiAgICBjdHJsID0gZmFsc2UsXG4gICAgYWx0ID0gZmFsc2UsXG4gICAgbWV0YSA9IGZhbHNlLFxuICB9OiB7XG4gICAga2V5OiBzdHJpbmc7XG4gICAgc2hpZnQ/OiBib29sZWFuO1xuICAgIGN0cmw/OiBib29sZWFuO1xuICAgIGFsdD86IGJvb2xlYW47XG4gICAgbWV0YT86IGJvb2xlYW47XG4gIH0pIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnNoaWZ0ID0gc2hpZnQ7XG4gICAgdGhpcy5jdHJsID0gY3RybDtcbiAgICB0aGlzLmFsdCA9IGFsdDtcbiAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXBLZXkoc3RyOiBzdHJpbmcpOiBLZXkge1xuICAgIGlmIChzdHIuc3RhcnRzV2l0aCgnPCcpICYmIHN0ci5lbmRzV2l0aCgnPicpKSB7XG4gICAgICBjb25zdCBpbm5lciA9IHN0ci5zbGljZSgxLCAtMSk7XG4gICAgICBjb25zdCBzaGlmdCA9IGlubmVyLmluY2x1ZGVzKCdTLScpO1xuICAgICAgbGV0IGJhc2UgPSBpbm5lci5zbGljZShpbm5lci5sYXN0SW5kZXhPZignLScpICsgMSk7XG4gICAgICBpZiAoc2hpZnQgJiYgYmFzZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYmFzZSA9IGJhc2UudG9VcHBlckNhc2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNoaWZ0ICYmIGJhc2UubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlLnRvTG93ZXJDYXNlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEtleSh7XG4gICAgICAgIGtleTogYmFzZSxcbiAgICAgICAgc2hpZnQ6IHNoaWZ0LFxuICAgICAgICBjdHJsOiBpbm5lci5pbmNsdWRlcygnQy0nKSxcbiAgICAgICAgYWx0OiBpbm5lci5pbmNsdWRlcygnQS0nKSxcbiAgICAgICAgbWV0YTogaW5uZXIuaW5jbHVkZXMoJ00tJyksXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IEtleSh7XG4gICAgICBrZXk6IHN0cixcbiAgICAgIHNoaWZ0OiBzdHIudG9Mb3dlckNhc2UoKSAhPT0gc3RyLFxuICAgICAgY3RybDogZmFsc2UsXG4gICAgICBhbHQ6IGZhbHNlLFxuICAgICAgbWV0YTogZmFsc2UsXG4gICAgfSk7XG4gIH1cblxuICBpc0RpZ2l0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBkaWdpdHMuaW5jbHVkZXModGhpcy5rZXkpO1xuICB9XG5cbiAgZXF1YWxzKGtleTogS2V5KSB7XG4gICAgcmV0dXJuIHRoaXMua2V5ID09PSBrZXkua2V5ICYmXG4gICAgICB0aGlzLmN0cmwgPT09IGtleS5jdHJsICYmXG4gICAgICB0aGlzLm1ldGEgPT09IGtleS5tZXRhICYmXG4gICAgICB0aGlzLmFsdCA9PT0ga2V5LmFsdCAmJlxuICAgICAgdGhpcy5zaGlmdCA9PT0ga2V5LnNoaWZ0O1xuICB9XG59XG4iLCJ0eXBlIEVudHJpZXMgPSB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcblxuZXhwb3J0IHR5cGUgU2VhcmNoSlNPTiA9IHtcbiAgZGVmYXVsdDogc3RyaW5nO1xuICBlbmdpbmVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRlZmF1bHRFbmdpbmU6IHN0cmluZyxcbiAgICBwdWJsaWMgZW5naW5lczogRW50cmllcyxcbiAgKSB7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbjogU2VhcmNoSlNPTik6IFNlYXJjaCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgdXJsXSBvZiBPYmplY3QuZW50cmllcyhqc29uLmVuZ2luZXMpKSB7XG4gICAgICBpZiAoISgvXlthLXpBLVowLTldKyQvKS50ZXN0KG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1NlYXJjaCBlbmdpbmVcXCdzIG5hbWUgbXVzdCBiZSBbYS16QS1aMC05XSsnKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IG1hdGNoZXMgPSB1cmwubWF0Y2goL3t9L2cpO1xuICAgICAgaWYgKG1hdGNoZXMgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTm8ge30tcGxhY2Vob2xkZXJzIGluIFVSTCBvZiBcIiR7bmFtZX1cImApO1xuICAgICAgfSBlbHNlIGlmIChtYXRjaGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTXVsdGlwbGUge30tcGxhY2Vob2xkZXJzIGluIFVSTCBvZiBcIiR7bmFtZX1cImApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIU9iamVjdC5rZXlzKGpzb24uZW5naW5lcykuaW5jbHVkZXMoanNvbi5kZWZhdWx0KSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgRGVmYXVsdCBlbmdpbmUgXCIke2pzb24uZGVmYXVsdH1cIiBub3QgZm91bmRgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IFNlYXJjaChqc29uLmRlZmF1bHQsIGpzb24uZW5naW5lcyk7XG4gIH1cblxuICB0b0pTT04oKTogU2VhcmNoSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlZmF1bHQ6IHRoaXMuZGVmYXVsdEVuZ2luZSxcbiAgICAgIGVuZ2luZXM6IHRoaXMuZW5naW5lcyxcbiAgICB9O1xuICB9XG59XG4iLCJjb25zdCBpc0NvbnRlbnRFZGl0YWJsZSA9IChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyB8fCB2YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnJztcbn07XG5cbmludGVyZmFjZSBSZWN0IHtcbiAgbGVmdDogbnVtYmVyO1xuICB0b3A6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG59XG5cbmNvbnN0IHJlY3RhbmdsZUNvb3Jkc1JlY3QgPSAoY29vcmRzOiBzdHJpbmcpOiBSZWN0ID0+IHtcbiAgY29uc3QgW2xlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbV0gPSBjb29yZHMuc3BsaXQoJywnKS5tYXAobiA9PiBOdW1iZXIobikpO1xuICByZXR1cm4geyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gfTtcbn07XG5cbmNvbnN0IGNpcmNsZUNvb3Jkc1JlY3QgPSAoY29vcmRzOiBzdHJpbmcpOiBSZWN0ID0+IHtcbiAgY29uc3QgW3gsIHksIHJdID0gY29vcmRzLnNwbGl0KCcsJykubWFwKG4gPT4gTnVtYmVyKG4pKTtcbiAgcmV0dXJuIHtcbiAgICBsZWZ0OiB4IC0gcixcbiAgICB0b3A6IHkgLSByLFxuICAgIHJpZ2h0OiB4ICsgcixcbiAgICBib3R0b206IHkgKyByLFxuICB9O1xufTtcblxuY29uc3QgcG9seWdvbkNvb3Jkc1JlY3QgPSAoY29vcmRzOiBzdHJpbmcpOiBSZWN0ID0+IHtcbiAgY29uc3QgcGFyYW1zID0gY29vcmRzLnNwbGl0KCcsJyk7XG4gIGxldCBtaW54ID0gTnVtYmVyKHBhcmFtc1swXSksXG4gICAgbWF4eCA9IE51bWJlcihwYXJhbXNbMF0pLFxuICAgIG1pbnkgPSBOdW1iZXIocGFyYW1zWzFdKSxcbiAgICBtYXh5ID0gTnVtYmVyKHBhcmFtc1sxXSk7XG4gIGNvbnN0IGxlbiA9IE1hdGguZmxvb3IocGFyYW1zLmxlbmd0aCAvIDIpO1xuICBmb3IgKGxldCBpID0gMjsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgY29uc3QgeCA9IE51bWJlcihwYXJhbXNbaV0pLFxuICAgICAgeSA9IE51bWJlcihwYXJhbXNbaSArIDFdKTtcbiAgICBpZiAoeCA8IG1pbngpIHtcbiAgICAgIG1pbnggPSB4O1xuICAgIH1cbiAgICBpZiAoeCA+IG1heHgpIHtcbiAgICAgIG1heHggPSB4O1xuICAgIH1cbiAgICBpZiAoeSA8IG1pbnkpIHtcbiAgICAgIG1pbnkgPSB5O1xuICAgIH1cbiAgICBpZiAoeSA+IG1heHkpIHtcbiAgICAgIG1heHkgPSB5O1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBsZWZ0OiBtaW54LCB0b3A6IG1pbnksIHJpZ2h0OiBtYXh4LCBib3R0b206IG1heHkgfTtcbn07XG5cbmNvbnN0IHZpZXdwb3J0UmVjdCA9IChlOiBFbGVtZW50KTogUmVjdCA9PiB7XG4gIGlmIChlLnRhZ05hbWUgIT09ICdBUkVBJykge1xuICAgIHJldHVybiBlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgY29uc3QgbWFwRWxlbWVudCA9IGUucGFyZW50Tm9kZSBhcyBIVE1MTWFwRWxlbWVudDtcbiAgY29uc3QgaW1nRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgYGltZ1t1c2VtYXA9XCIjJHttYXBFbGVtZW50Lm5hbWV9XCJdYFxuICApIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XG4gIGNvbnN0IHtcbiAgICBsZWZ0OiBtYXBMZWZ0LFxuICAgIHRvcDogbWFwVG9wXG4gIH0gPSBpbWdFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICBjb25zdCBjb29yZHMgPSBlLmdldEF0dHJpYnV0ZSgnY29vcmRzJyk7XG4gIGlmICghY29vcmRzKSB7XG4gICAgcmV0dXJuIGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBsZXQgcmVjdCA9IHsgbGVmdDogMCwgdG9wOiAwLCByaWdodDogMCwgYm90dG9tOiAwIH07XG4gIHN3aXRjaCAoZS5nZXRBdHRyaWJ1dGUoJ3NoYXBlJykpIHtcbiAgY2FzZSAncmVjdCc6XG4gIGNhc2UgJ3JlY3RhbmdsZSc6XG4gICAgcmVjdCA9IHJlY3RhbmdsZUNvb3Jkc1JlY3QoY29vcmRzKTtcbiAgICBicmVhaztcbiAgY2FzZSAnY2lyYyc6XG4gIGNhc2UgJ2NpcmNsZSc6XG4gICAgcmVjdCA9IGNpcmNsZUNvb3Jkc1JlY3QoY29vcmRzKTtcbiAgICBicmVhaztcbiAgY2FzZSAncG9seSc6XG4gIGNhc2UgJ3BvbHlnb24nOlxuICAgIHJlY3QgPSBwb2x5Z29uQ29vcmRzUmVjdChjb29yZHMpO1xuICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiB7XG4gICAgbGVmdDogcmVjdC5sZWZ0ICsgbWFwTGVmdCxcbiAgICB0b3A6IHJlY3QudG9wICsgbWFwVG9wLFxuICAgIHJpZ2h0OiByZWN0LnJpZ2h0ICsgbWFwTGVmdCxcbiAgICBib3R0b206IHJlY3QuYm90dG9tICsgbWFwVG9wLFxuICB9O1xufTtcblxuY29uc3QgaXNWaXNpYmxlID0gKGVsZW1lbnQ6IEVsZW1lbnQpOiBib29sZWFuID0+IHtcbiAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIGNvbnN0IHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG5cbiAgaWYgKHN0eWxlLm92ZXJmbG93ICE9PSAndmlzaWJsZScgJiYgKHJlY3Qud2lkdGggPT09IDAgfHwgcmVjdC5oZWlnaHQgPT09IDApKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChyZWN0LnJpZ2h0IDwgMCAmJiByZWN0LmJvdHRvbSA8IDApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgcmVjdC5sZWZ0ICYmIHdpbmRvdy5pbm5lckhlaWdodCA8IHJlY3QudG9wKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCAmJlxuICAgIGVsZW1lbnQudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaGlkZGVuJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IHsgZGlzcGxheSwgdmlzaWJpbGl0eSB9ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gIGlmIChkaXNwbGF5ID09PSAnbm9uZScgfHwgdmlzaWJpbGl0eSA9PT0gJ2hpZGRlbicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5leHBvcnQgeyBpc0NvbnRlbnRFZGl0YWJsZSwgdmlld3BvcnRSZWN0LCBpc1Zpc2libGUgfTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB2YWxpZGF0ZSA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHBhdHRlcm4wID0gbmV3IFJlZ0V4cCgnLionKTtcbiAgdmFyIHJlZlZhbCA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gdmFsaWRhdGUoZGF0YSwgZGF0YVBhdGgsIHBhcmVudERhdGEsIHBhcmVudERhdGFQcm9wZXJ0eSwgcm9vdERhdGEpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIHZFcnJvcnMgPSBudWxsO1xuICAgIHZhciBlcnJvcnMgPSAwO1xuICAgIGlmICgoZGF0YSAmJiB0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhKSkpIHtcbiAgICAgIHZhciBlcnJzX18wID0gZXJyb3JzO1xuICAgICAgdmFyIHZhbGlkMSA9IHRydWU7XG4gICAgICBmb3IgKHZhciBrZXkwIGluIGRhdGEpIHtcbiAgICAgICAgdmFyIGlzQWRkaXRpb25hbDAgPSAhKGZhbHNlIHx8IGtleTAgPT0gJ2tleW1hcHMnIHx8IGtleTAgPT0gJ3NlYXJjaCcgfHwga2V5MCA9PSAncHJvcGVydGllcycgfHwga2V5MCA9PSAnYmxhY2tsaXN0Jyk7XG4gICAgICAgIGlmIChpc0FkZGl0aW9uYWwwKSB7XG4gICAgICAgICAgdmFsaWQxID0gZmFsc2U7XG4gICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgIGtleXdvcmQ6ICdhZGRpdGlvbmFsUHJvcGVydGllcycsXG4gICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArIFwiXCIsXG4gICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9hZGRpdGlvbmFsUHJvcGVydGllcycsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgYWRkaXRpb25hbFByb3BlcnR5OiAnJyArIGtleTAgKyAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgTk9UIGhhdmUgYWRkaXRpb25hbCBwcm9wZXJ0aWVzJ1xuICAgICAgICAgIH1dO1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhbGlkMSkge1xuICAgICAgICB2YXIgZGF0YTEgPSBkYXRhLmtleW1hcHM7XG4gICAgICAgIGlmIChkYXRhMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdmFsaWQxID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZXJyc18xID0gZXJyb3JzO1xuICAgICAgICAgIGlmICgoZGF0YTEgJiYgdHlwZW9mIGRhdGExID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGExKSkpIHtcbiAgICAgICAgICAgIHZhciBlcnJzX18xID0gZXJyb3JzO1xuICAgICAgICAgICAgdmFyIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKHZhciBrZXkxIGluIGRhdGExKSB7XG4gICAgICAgICAgICAgIGlmIChwYXR0ZXJuMC50ZXN0KGtleTEpKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEyID0gZGF0YTFba2V5MV07XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICBpZiAoKGRhdGEyICYmIHR5cGVvZiBkYXRhMiA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheShkYXRhMikpKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc19fMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhMi50eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZDMgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5rZXltYXBzW1xcJycgKyBrZXkxICsgJ1xcJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9rZXltYXBzL3BhdHRlcm5Qcm9wZXJ0aWVzLy4qL3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICd0eXBlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSBcXCd0eXBlXFwnJ1xuICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTIudHlwZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcua2V5bWFwc1tcXCcnICsga2V5MSArICdcXCddLnR5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2tleW1hcHMvcGF0dGVyblByb3BlcnRpZXMvLiovcHJvcGVydGllcy90eXBlL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gZXJyb3JzID09PSBlcnJzXzM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcua2V5bWFwc1tcXCcnICsga2V5MSArICdcXCddJyxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9rZXltYXBzL3BhdHRlcm5Qcm9wZXJ0aWVzLy4qL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZDIpIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2UgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcua2V5bWFwcycsXG4gICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMva2V5bWFwcy90eXBlJyxcbiAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICB9XTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHZhbGlkMSA9IGVycm9ycyA9PT0gZXJyc18xO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZDEpIHtcbiAgICAgICAgICB2YXIgZGF0YTEgPSBkYXRhLnNlYXJjaDtcbiAgICAgICAgICBpZiAoZGF0YTEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdmFsaWQxID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGVycnNfMSA9IGVycm9ycztcbiAgICAgICAgICAgIGlmICgoZGF0YTEgJiYgdHlwZW9mIGRhdGExID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGExKSkpIHtcbiAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyc19fMSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YTEuZGVmYXVsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0eTogJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSBcXCdkZWZhdWx0XFwnJ1xuICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGExLmRlZmF1bHQgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaC5kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC9wcm9wZXJ0aWVzL2RlZmF1bHQvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBkYXRhMiA9IGRhdGExLmVuZ2luZXM7XG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YTIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvc2VhcmNoL3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0eTogJ2VuZ2luZXMnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwnZW5naW5lc1xcJydcbiAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoZGF0YTIgJiYgdHlwZW9mIGRhdGEyID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc19fMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkyIGluIGRhdGEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGF0dGVybjAudGVzdChrZXkyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyW2tleTJdICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2guZW5naW5lc1tcXCcnICsga2V5MiArICdcXCddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvc2VhcmNoL3Byb3BlcnRpZXMvZW5naW5lcy9wYXR0ZXJuUHJvcGVydGllcy8uKi90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gZXJyb3JzID09PSBlcnJzXzM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQzKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB2YWxpZDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaC5lbmdpbmVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvc2VhcmNoL3Byb3BlcnRpZXMvZW5naW5lcy90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoJyxcbiAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL3NlYXJjaC90eXBlJyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWxpZDEgPSBlcnJvcnMgPT09IGVycnNfMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHZhbGlkMSkge1xuICAgICAgICAgICAgdmFyIGRhdGExID0gZGF0YS5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgaWYgKGRhdGExID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFsaWQxID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhciBlcnJzXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgIGlmICgoZGF0YTEgJiYgdHlwZW9mIGRhdGExID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGExKSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyc19fMSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YTEuaGludGNoYXJzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGExLmhpbnRjaGFycyAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcucHJvcGVydGllcy5oaW50Y2hhcnMnLFxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL2hpbnRjaGFycy90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkMikge1xuICAgICAgICAgICAgICAgICAgaWYgKGRhdGExLnNtb290aHNjcm9sbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGExLnNtb290aHNjcm9sbCAhPT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMuc21vb3Roc2Nyb2xsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL3Ntb290aHNjcm9sbC90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIGJvb2xlYW4nXG4gICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmICh2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGExLmNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMS5jb21wbGV0ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcucHJvcGVydGllcy5jb21wbGV0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL2NvbXBsZXRlL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvcHJvcGVydGllcy90eXBlJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB2YXIgdmFsaWQxID0gZXJyb3JzID09PSBlcnJzXzE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWQxKSB7XG4gICAgICAgICAgICAgIHZhciBkYXRhMSA9IGRhdGEuYmxhY2tsaXN0O1xuICAgICAgICAgICAgICBpZiAoZGF0YTEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhbGlkMSA9IHRydWU7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGVycnNfMSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhMSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMTtcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkxID0gMDsgaTEgPCBkYXRhMS5sZW5ndGg7IGkxKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEyID0gZGF0YTFbaTFdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc19fMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMC90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSBlcnJvcnMgPT09IGVycnNfMztcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdmFsaWQyIHx8IHZhbGlkMztcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgoZGF0YTIgJiYgdHlwZW9mIGRhdGEyID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEyKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18zID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyLnVybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0eTogJ3VybCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwndXJsXFwnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzQgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMi51cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXS51cmwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3Byb3BlcnRpZXMvdXJsL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0ID0gZXJyb3JzID09PSBlcnJzXzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhMyA9IGRhdGEyLmtleXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkNCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaXNzaW5nUHJvcGVydHk6ICdrZXlzJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGhhdmUgcmVxdWlyZWQgcHJvcGVydHkgXFwna2V5c1xcJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc180ID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YTMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX180ID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpNCA9IDA7IGk0IDwgZGF0YTMubGVuZ3RoOyBpNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfNSA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEzW2k0XSAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddLmtleXNbJyArIGk0ICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3Byb3BlcnRpZXMva2V5cy9pdGVtcy90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNSA9IGVycm9ycyA9PT0gZXJyc181O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQ1KSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXS5rZXlzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3Byb3BlcnRpZXMva2V5cy90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgYXJyYXknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkNCA9IGVycm9ycyA9PT0gZXJyc180O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8xL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gZXJyb3JzID09PSBlcnJzXzM7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdmFsaWQyIHx8IHZhbGlkMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAnYW55T2YnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBtYXRjaCBzb21lIHNjaGVtYSBpbiBhbnlPZidcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMrKztcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSB2RXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJzX18yO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyc19fMikgdkVycm9ycy5sZW5ndGggPSBlcnJzX18yO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMikgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdCcsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYXJyYXknXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgYXJyYXknXG4gICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkMSA9IGVycm9ycyA9PT0gZXJyc18xO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyBcIlwiLFxuICAgICAgICBzY2hlbWFQYXRoOiAnIy90eXBlJyxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICB9XTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFsaWRhdGUuZXJyb3JzID0gdkVycm9ycztcbiAgICByZXR1cm4gZXJyb3JzID09PSAwO1xuICB9O1xufSkoKTtcbnZhbGlkYXRlLnNjaGVtYSA9IHtcbiAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gIFwicHJvcGVydGllc1wiOiB7XG4gICAgXCJrZXltYXBzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgIFwiLipcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXCJ0eXBlXCJdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2VhcmNoXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LFxuICAgICAgICBcImVuZ2luZXNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgIFwicGF0dGVyblByb3BlcnRpZXNcIjoge1xuICAgICAgICAgICAgXCIuKlwiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJyZXF1aXJlZFwiOiBbXCJkZWZhdWx0XCIsIFwiZW5naW5lc1wiXVxuICAgIH0sXG4gICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCJoaW50Y2hhcnNcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwic21vb3Roc2Nyb2xsXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJib29sZWFuXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJjb21wbGV0ZVwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJibGFja2xpc3RcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgIFwiaXRlbXNcIjoge1xuICAgICAgICBcImFueU9mXCI6IFt7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSwge1xuICAgICAgICAgIFwidHlwZVwiOiBcIm9iamVjdFwiLFxuICAgICAgICAgIFwicHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcInVybFwiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJrZXlzXCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYXJyYXlcIixcbiAgICAgICAgICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXF1aXJlZFwiOiBbXCJ1cmxcIiwgXCJrZXlzXCJdXG4gICAgICAgIH1dXG4gICAgICB9XG4gICAgfVxuICB9LFxuICBcImFkZGl0aW9uYWxQcm9wZXJ0aWVzXCI6IGZhbHNlXG59O1xudmFsaWRhdGUuZXJyb3JzID0gbnVsbDtcbm1vZHVsZS5leHBvcnRzID0gdmFsaWRhdGU7IiwiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IEFkZG9uSW5kaWNhdG9yQ2xpZW50IGZyb20gJy4uL2NsaWVudC9BZGRvbkluZGljYXRvckNsaWVudCc7XG5pbXBvcnQgQWRkb25FbmFibGVkUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvQWRkb25FbmFibGVkUmVwb3NpdG9yeSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZG9uRW5hYmxlZFVzZUNhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoJ0FkZG9uSW5kaWNhdG9yQ2xpZW50JylcbiAgICBwcml2YXRlIGluZGljYXRvcjogQWRkb25JbmRpY2F0b3JDbGllbnQsXG5cbiAgICBAaW5qZWN0KCdBZGRvbkVuYWJsZWRSZXBvc2l0b3J5JylcbiAgICBwcml2YXRlIHJlcG9zaXRvcnk6IEFkZG9uRW5hYmxlZFJlcG9zaXRvcnksXG4gICkge1xuICB9XG5cbiAgYXN5bmMgZW5hYmxlKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuc2V0RW5hYmxlZCh0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIGRpc2FibGUoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zZXRFbmFibGVkKGZhbHNlKTtcbiAgfVxuXG4gIGFzeW5jIHRvZ2dsZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5yZXBvc2l0b3J5LmdldCgpO1xuICAgIGF3YWl0IHRoaXMuc2V0RW5hYmxlZCghY3VycmVudCk7XG4gIH1cblxuICBnZXRFbmFibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnkuZ2V0KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNldEVuYWJsZWQob246IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLnJlcG9zaXRvcnkuc2V0KG9uKTtcbiAgICBhd2FpdCB0aGlzLmluZGljYXRvci5zZXRFbmFibGVkKG9uKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NldHRpbmdzL1NlYXJjaCc7XG5cbmNvbnN0IHRyaW1TdGFydCA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vIE5PVEUgU3RyaW5nLnRyaW1TdGFydCBpcyBhdmFpbGFibGUgb24gRmlyZWZveCA2MVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgJycpO1xufTtcblxuY29uc3QgU1VQUE9SVEVEX1BST1RPQ09MUyA9IFsnaHR0cDonLCAnaHR0cHM6JywgJ2Z0cDonLCAnbWFpbHRvOicsICdhYm91dDonXTtcblxuY29uc3QgaXNMb2NhbGhvc3QgPSAodXJsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKHVybCA9PT0gJ2xvY2FsaG9zdCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IFtob3N0LCBwb3J0XSA9IHVybC5zcGxpdCgnOicsIDIpO1xuICByZXR1cm4gaG9zdCA9PT0gJ2xvY2FsaG9zdCcgJiYgIWlzTmFOKE51bWJlcihwb3J0KSk7XG59O1xuXG5jb25zdCBpc01pc3NpbmdIdHRwID0gKGtleXdvcmRzOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKGtleXdvcmRzLmluY2x1ZGVzKCcuJykgJiYgIWtleXdvcmRzLmluY2x1ZGVzKCcgJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdSA9IG5ldyBVUkwoJ2h0dHA6Ly8nICsga2V5d29yZHMpO1xuICAgIHJldHVybiBpc0xvY2FsaG9zdCh1Lmhvc3QpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZmFsbHRocm91Z2hcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWFyY2hVcmwgPSAoa2V5d29yZHM6IHN0cmluZywgc2VhcmNoOiBTZWFyY2gpOiBzdHJpbmcgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHUgPSBuZXcgVVJMKGtleXdvcmRzKTtcbiAgICBpZiAoU1VQUE9SVEVEX1BST1RPQ09MUy5pbmNsdWRlcyh1LnByb3RvY29sLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXR1cm4gdS5ocmVmO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGZhbGx0aHJvdWdoXG4gIH1cblxuICBpZiAoaXNNaXNzaW5nSHR0cChrZXl3b3JkcykpIHtcbiAgICByZXR1cm4gJ2h0dHA6Ly8nICsga2V5d29yZHM7XG4gIH1cblxuICBsZXQgdGVtcGxhdGUgPSBzZWFyY2guZW5naW5lc1tzZWFyY2guZGVmYXVsdEVuZ2luZV07XG4gIGxldCBxdWVyeSA9IGtleXdvcmRzO1xuXG4gIGNvbnN0IGZpcnN0ID0gdHJpbVN0YXJ0KGtleXdvcmRzKS5zcGxpdCgnICcpWzBdO1xuICBpZiAoT2JqZWN0LmtleXMoc2VhcmNoLmVuZ2luZXMpLmluY2x1ZGVzKGZpcnN0KSkge1xuICAgIHRlbXBsYXRlID0gc2VhcmNoLmVuZ2luZXNbZmlyc3RdO1xuICAgIHF1ZXJ5ID0gdHJpbVN0YXJ0KHRyaW1TdGFydChrZXl3b3Jkcykuc2xpY2UoZmlyc3QubGVuZ3RoKSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoJ3t9JywgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVVcmwgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHUgPSBuZXcgVVJMKHVybCk7XG4gICAgaWYgKFNVUFBPUlRFRF9QUk9UT0NPTFMuaW5jbHVkZXModS5wcm90b2NvbC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcmV0dXJuIHUuaHJlZjtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBmYWxsdGhyb3VnaFxuICB9XG4gIHJldHVybiAnaHR0cDovLycgKyB1cmw7XG59O1xuXG5leHBvcnQgeyBzZWFyY2hVcmwsIG5vcm1hbGl6ZVVybCB9O1xuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKEMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG52YXIgUmVmbGVjdDtcbihmdW5jdGlvbiAoUmVmbGVjdCkge1xuICAgIC8vIE1ldGFkYXRhIFByb3Bvc2FsXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS9cbiAgICAoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgICAgICAgICAgIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMgPT09IFwib2JqZWN0XCIgPyB0aGlzIDpcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKTtcbiAgICAgICAgdmFyIGV4cG9ydGVyID0gbWFrZUV4cG9ydGVyKFJlZmxlY3QpO1xuICAgICAgICBpZiAodHlwZW9mIHJvb3QuUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcm9vdC5SZWZsZWN0ID0gUmVmbGVjdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydGVyID0gbWFrZUV4cG9ydGVyKHJvb3QuUmVmbGVjdCwgZXhwb3J0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZhY3RvcnkoZXhwb3J0ZXIpO1xuICAgICAgICBmdW5jdGlvbiBtYWtlRXhwb3J0ZXIodGFyZ2V0LCBwcmV2aW91cykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgeyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91cylcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSkoZnVuY3Rpb24gKGV4cG9ydGVyKSB7XG4gICAgICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIFN5bWJvbCBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgdmFyIHRvUHJpbWl0aXZlU3ltYm9sID0gc3VwcG9ydHNTeW1ib2wgJiYgdHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbC50b1ByaW1pdGl2ZSA6IFwiQEB0b1ByaW1pdGl2ZVwiO1xuICAgICAgICB2YXIgaXRlcmF0b3JTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLml0ZXJhdG9yIDogXCJAQGl0ZXJhdG9yXCI7XG4gICAgICAgIHZhciBzdXBwb3J0c0NyZWF0ZSA9IHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSBcImZ1bmN0aW9uXCI7IC8vIGZlYXR1cmUgdGVzdCBmb3IgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0c1Byb3RvID0geyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheTsgLy8gZmVhdHVyZSB0ZXN0IGZvciBfX3Byb3RvX18gc3VwcG9ydFxuICAgICAgICB2YXIgZG93bkxldmVsID0gIXN1cHBvcnRzQ3JlYXRlICYmICFzdXBwb3J0c1Byb3RvO1xuICAgICAgICB2YXIgSGFzaE1hcCA9IHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBvYmplY3QgaW4gZGljdGlvbmFyeSBtb2RlIChhLmsuYS4gXCJzbG93XCIgbW9kZSBpbiB2OClcbiAgICAgICAgICAgIGNyZWF0ZTogc3VwcG9ydHNDcmVhdGVcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KE9iamVjdC5jcmVhdGUobnVsbCkpOyB9XG4gICAgICAgICAgICAgICAgOiBzdXBwb3J0c1Byb3RvXG4gICAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoeyBfX3Byb3RvX186IG51bGwgfSk7IH1cbiAgICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7fSk7IH0sXG4gICAgICAgICAgICBoYXM6IGRvd25MZXZlbFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSk7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4ga2V5IGluIG1hcDsgfSxcbiAgICAgICAgICAgIGdldDogZG93bkxldmVsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIG1hcFtrZXldOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyBMb2FkIGdsb2JhbCBvciBzaGltIHZlcnNpb25zIG9mIE1hcCwgU2V0LCBhbmQgV2Vha01hcFxuICAgICAgICB2YXIgZnVuY3Rpb25Qcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb24pO1xuICAgICAgICB2YXIgdXNlUG9seWZpbGwgPSB0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudltcIlJFRkxFQ1RfTUVUQURBVEFfVVNFX01BUF9QT0xZRklMTFwiXSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIHZhciBfTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBNYXAgOiBDcmVhdGVNYXBQb2x5ZmlsbCgpO1xuICAgICAgICB2YXIgX1NldCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgU2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFNldC5wcm90b3R5cGUuZW50cmllcyA9PT0gXCJmdW5jdGlvblwiID8gU2V0IDogQ3JlYXRlU2V0UG9seWZpbGwoKTtcbiAgICAgICAgdmFyIF9XZWFrTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBXZWFrTWFwID09PSBcImZ1bmN0aW9uXCIgPyBXZWFrTWFwIDogQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCk7XG4gICAgICAgIC8vIFtbTWV0YWRhdGFdXSBpbnRlcm5hbCBzbG90XG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xuICAgICAgICB2YXIgTWV0YWRhdGEgPSBuZXcgX1dlYWtNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgYSBzZXQgb2YgZGVjb3JhdG9ycyB0byBhIHByb3BlcnR5IG9mIGEgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIGRlY29yYXRvcnMgQW4gYXJyYXkgb2YgZGVjb3JhdG9ycy5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSB0byBkZWNvcmF0ZS5cbiAgICAgICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgdGhlIHRhcmdldCBrZXkuXG4gICAgICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgRXhhbXBsZSA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcbiAgICAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcbiAgICAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKSkpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGF0dHJpYnV0ZXMpICYmICFJc1VuZGVmaW5lZChhdHRyaWJ1dGVzKSAmJiAhSXNOdWxsKGF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKElzTnVsbChhdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZVByb3BlcnR5KGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVjb3JhdGVcIiwgZGVjb3JhdGUpO1xuICAgICAgICAvLyA0LjEuMiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0Lm1ldGFkYXRhXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGRlZmF1bHQgbWV0YWRhdGEgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBjYW4gYmUgdXNlZCBvbiBhIGNsYXNzLCBjbGFzcyBtZW1iZXIsIG9yIHBhcmFtZXRlci5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IFRoZSBrZXkgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXG4gICAgICAgICAqIEByZXR1cm5zIEEgZGVjb3JhdG9yIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgKiBJZiBgbWV0YWRhdGFLZXlgIGlzIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhlIHRhcmdldCBhbmQgdGFyZ2V0IGtleSwgdGhlXG4gICAgICAgICAqIG1ldGFkYXRhVmFsdWUgZm9yIHRoYXQga2V5IHdpbGwgYmUgb3ZlcndyaXR0ZW4uXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yLCBUeXBlU2NyaXB0IG9ubHkpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUsIFR5cGVTY3JpcHQgb25seSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgcHJvcGVydHk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSAmJiAhSXNQcm9wZXJ0eUtleShwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJtZXRhZGF0YVwiLCBtZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmUgYSB1bmlxdWUgbWV0YWRhdGEgZW50cnkgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBBIHZhbHVlIHRoYXQgY29udGFpbnMgYXR0YWNoZWQgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdG8gZGVmaW5lIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXG4gICAgICAgICAqICAgICBmdW5jdGlvbiBNeUFubm90YXRpb24ob3B0aW9ucyk6IERlY29yYXRvciB7XG4gICAgICAgICAqICAgICAgICAgcmV0dXJuICh0YXJnZXQsIGtleT8pID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCB0YXJnZXQsIGtleSk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWZpbmVNZXRhZGF0YVwiLCBkZWZpbmVNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluOyBvdGhlcndpc2UsIGBmYWxzZWAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJoYXNNZXRhZGF0YVwiLCBoYXNNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Q7IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImhhc093bk1ldGFkYXRhXCIsIGhhc093bk1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0TWV0YWRhdGFcIiwgZ2V0TWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0T3duTWV0YWRhdGFcIiwgZ2V0T3duTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeU1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE1ldGFkYXRhS2V5c1wiLCBnZXRNZXRhZGF0YUtleXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgdW5pcXVlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsIGdldE93bk1ldGFkYXRhS2V5cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGVzIHRoZSBtZXRhZGF0YSBlbnRyeSBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGtleS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGVudHJ5IHdhcyBmb3VuZCBhbmQgZGVsZXRlZDsgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGFNYXAuZGVsZXRlKG1ldGFkYXRhS2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGFNYXAuc2l6ZSA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLmRlbGV0ZShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0TWV0YWRhdGEuc2l6ZSA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBNZXRhZGF0YS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVsZXRlTWV0YWRhdGFcIiwgZGVsZXRlTWV0YWRhdGEpO1xuICAgICAgICBmdW5jdGlvbiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IoZGVjb3JhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZGVjb3JhdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGRlY29yYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBkZWNvcmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBDcmVhdGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldChPKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZCh0YXJnZXRNZXRhZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0YXJnZXRNZXRhZGF0YSA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgTWV0YWRhdGEuc2V0KE8sIHRhcmdldE1ldGFkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IHRhcmdldE1ldGFkYXRhLmdldChQKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YU1hcCA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEuc2V0KFAsIG1ldGFkYXRhTWFwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YU1hcDtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMS4xIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzbWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgaWYgKGhhc093bilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMi4xIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzb3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIFRvQm9vbGVhbihtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMy4xIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5Z2V0bWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgaWYgKGhhc093bilcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICghSXNOdWxsKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS40LjEgT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjUuMSBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWRlZmluZW93bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyB0cnVlKTtcbiAgICAgICAgICAgIG1ldGFkYXRhTWFwLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjYuMSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW1ldGFkYXRha2V5c1xuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKSB7XG4gICAgICAgICAgICB2YXIgb3duS2V5cyA9IE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xuICAgICAgICAgICAgdmFyIHBhcmVudEtleXMgPSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICAgICAgICAgICAgaWYgKHBhcmVudEtleXMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XG4gICAgICAgICAgICBpZiAob3duS2V5cy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50S2V5cztcbiAgICAgICAgICAgIHZhciBzZXQgPSBuZXcgX1NldCgpO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgb3duS2V5c18xID0gb3duS2V5czsgX2kgPCBvd25LZXlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgcGFyZW50S2V5c18xID0gcGFyZW50S2V5czsgX2EgPCBwYXJlbnRLZXlzXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHBhcmVudEtleXNfMVtfYV07XG4gICAgICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS43LjEgT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlvd25tZXRhZGF0YWtleXNcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgICAgdmFyIGtleXNPYmogPSBtZXRhZGF0YU1hcC5rZXlzKCk7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBHZXRJdGVyYXRvcihrZXlzT2JqKTtcbiAgICAgICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLmxlbmd0aCA9IGs7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gSXRlcmF0b3JWYWx1ZShuZXh0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzW2tdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA2IEVDTUFTY3JpcHQgRGF0YSBUeXAwZXMgYW5kIFZhbHVlc1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWRhdGEtdHlwZXMtYW5kLXZhbHVlc1xuICAgICAgICBmdW5jdGlvbiBUeXBlKHgpIHtcbiAgICAgICAgICAgIGlmICh4ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8qIE51bGwgKi87XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOiByZXR1cm4gMCAvKiBVbmRlZmluZWQgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIDIgLyogQm9vbGVhbiAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiAzIC8qIFN0cmluZyAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3ltYm9sXCI6IHJldHVybiA0IC8qIFN5bWJvbCAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6IHJldHVybiA1IC8qIE51bWJlciAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHJldHVybiB4ID09PSBudWxsID8gMSAvKiBOdWxsICovIDogNiAvKiBPYmplY3QgKi87XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDYgLyogT2JqZWN0ICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS4xIFRoZSBVbmRlZmluZWQgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXVuZGVmaW5lZC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzVW5kZWZpbmVkKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjIgVGhlIE51bGwgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLW51bGwtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc051bGwoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPT09IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjUgVGhlIFN5bWJvbCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtc3ltYm9sLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNTeW1ib2woeCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS43IFRoZSBPYmplY3QgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc09iamVjdCh4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyB4ICE9PSBudWxsIDogdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEgVHlwZSBDb252ZXJzaW9uXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGUtY29udmVyc2lvblxuICAgICAgICAvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbiAgICAgICAgZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQsIFByZWZlcnJlZFR5cGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoVHlwZShpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDAgLyogVW5kZWZpbmVkICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAxIC8qIE51bGwgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDIgLyogQm9vbGVhbiAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDQgLyogU3ltYm9sICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSA1IC8qIE51bWJlciAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhpbnQgPSBQcmVmZXJyZWRUeXBlID09PSAzIC8qIFN0cmluZyAqLyA/IFwic3RyaW5nXCIgOiBQcmVmZXJyZWRUeXBlID09PSA1IC8qIE51bWJlciAqLyA/IFwibnVtYmVyXCIgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgIHZhciBleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIHRvUHJpbWl0aXZlU3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChleG90aWNUb1ByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG4gICAgICAgICAgICAgICAgaWYgKElzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09IFwiZGVmYXVsdFwiID8gXCJudW1iZXJcIiA6IGhpbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xLjEgT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuICAgICAgICAgICAgaWYgKGhpbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9TdHJpbmdfMSA9IE8udG9TdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvU3RyaW5nXzEuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlT2YgPSBPLnZhbHVlT2Y7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodmFsdWVPZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlT2YuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVPZiA9IE8udmFsdWVPZjtcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdG9TdHJpbmdfMiA9IE8udG9TdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvU3RyaW5nXzIuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjIgVG9Cb29sZWFuKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLXRvYm9vbGVhblxuICAgICAgICBmdW5jdGlvbiBUb0Jvb2xlYW4oYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAhIWFyZ3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xMiBUb1N0cmluZyhhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9zdHJpbmdcbiAgICAgICAgZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYXJndW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjE0IFRvUHJvcGVydHlLZXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbiAgICAgICAgZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFRvUHJpbWl0aXZlKGFyZ3VtZW50LCAzIC8qIFN0cmluZyAqLyk7XG4gICAgICAgICAgICBpZiAoSXNTeW1ib2woa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgcmV0dXJuIFRvU3RyaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yIFRlc3RpbmcgYW5kIENvbXBhcmlzb24gT3BlcmF0aW9uc1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10ZXN0aW5nLWFuZC1jb21wYXJpc29uLW9wZXJhdGlvbnNcbiAgICAgICAgLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxuICAgICAgICBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheVxuICAgICAgICAgICAgICAgID8gQXJyYXkuaXNBcnJheShhcmd1bWVudClcbiAgICAgICAgICAgICAgICA6IGFyZ3VtZW50IGluc3RhbmNlb2YgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgID8gYXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuMyBJc0NhbGxhYmxlKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4gICAgICAgIGZ1bmN0aW9uIElzQ2FsbGFibGUoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYW4gYXBwcm94aW1hdGlvbiBhcyB3ZSBjYW5ub3QgY2hlY2sgZm9yIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuNCBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG4gICAgICAgIGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYW4gYXBwcm94aW1hdGlvbiBhcyB3ZSBjYW5ub3QgY2hlY2sgZm9yIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi43IElzUHJvcGVydHlLZXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcHJvcGVydHlrZXlcbiAgICAgICAgZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuICAgICAgICAgICAgc3dpdGNoIChUeXBlKGFyZ3VtZW50KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA3LjMgT3BlcmF0aW9ucyBvbiBPYmplY3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9wZXJhdGlvbnMtb24tb2JqZWN0c1xuICAgICAgICAvLyA3LjMuOSBHZXRNZXRob2QoViwgUClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG4gICAgICAgIGZ1bmN0aW9uIEdldE1ldGhvZChWLCBQKSB7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IFZbUF07XG4gICAgICAgICAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkIHx8IGZ1bmMgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghSXNDYWxsYWJsZShmdW5jKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQgT3BlcmF0aW9ucyBvbiBJdGVyYXRvciBPYmplY3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9wZXJhdGlvbnMtb24taXRlcmF0b3Itb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmopIHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBHZXRNZXRob2Qob2JqLCBpdGVyYXRvclN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoIUlzQ2FsbGFibGUobWV0aG9kKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7IC8vIGZyb20gQ2FsbFxuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gbWV0aG9kLmNhbGwob2JqKTtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QoaXRlcmF0b3IpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNCBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtaXRlcmF0b3J2YWx1ZVxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC41IEl0ZXJhdG9yU3RlcChpdGVyYXRvcilcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JzdGVwXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IGZhbHNlIDogcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yY2xvc2VcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvcikge1xuICAgICAgICAgICAgdmFyIGYgPSBpdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChmKVxuICAgICAgICAgICAgICAgIGYuY2FsbChpdGVyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gOS4xIE9yZGluYXJ5IE9iamVjdCBJbnRlcm5hbCBNZXRob2RzIGFuZCBJbnRlcm5hbCBTbG90c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcbiAgICAgICAgLy8gOS4xLjEuMSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5Z2V0cHJvdG90eXBlb2ZcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE8gIT09IFwiZnVuY3Rpb25cIiB8fCBPID09PSBmdW5jdGlvblByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBUeXBlU2NyaXB0IGRvZXNuJ3Qgc2V0IF9fcHJvdG9fXyBpbiBFUzUsIGFzIGl0J3Mgbm9uLXN0YW5kYXJkLlxuICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3Rvci4gQ29tcGF0aWJsZSBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgICAgIC8vIG11c3QgZWl0aGVyIHNldCBfX3Byb3RvX18gb24gYSBzdWJjbGFzcyBjb25zdHJ1Y3RvciB0byB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIC8vIG9yIGVuc3VyZSBlYWNoIGNsYXNzIGhhcyBhIHZhbGlkIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgb24gaXRzIHByb3RvdHlwZSB0aGF0XG4gICAgICAgICAgICAvLyBwb2ludHMgYmFjayB0byB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgc2FtZSBhcyBGdW5jdGlvbi5bW1Byb3RvdHlwZV1dLCB0aGVuIHRoaXMgaXMgZGVmaW5hdGVseSBpbmhlcml0ZWQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gaW4gRVM2IG9yIHdoZW4gdXNpbmcgX19wcm90b19fIGluIGEgY29tcGF0aWJsZSBicm93c2VyLlxuICAgICAgICAgICAgaWYgKHByb3RvICE9PSBmdW5jdGlvblByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3VwZXIgcHJvdG90eXBlIGlzIE9iamVjdC5wcm90b3R5cGUsIG51bGwsIG9yIHVuZGVmaW5lZCwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBPLnByb3RvdHlwZTtcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGVQcm90byA9IHByb3RvdHlwZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVQcm90byA9PSBudWxsIHx8IHByb3RvdHlwZVByb3RvID09PSBPYmplY3QucHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IGEgZnVuY3Rpb24sIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90b3R5cGVQcm90by5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHNvbWUga2luZCBvZiBzZWxmLXJlZmVyZW5jZSwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gTylcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgcHJldHR5IGdvb2QgZ3Vlc3MgYXQgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIE1hcCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZU1hcFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlU2VudGluZWwgPSB7fTtcbiAgICAgICAgICAgIHZhciBhcnJheVNlbnRpbmVsID0gW107XG4gICAgICAgICAgICB2YXIgTWFwSXRlcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFwSXRlcmF0b3Ioa2V5cywgdmFsdWVzLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9rZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbaW5kZXhdLCB0aGlzLl92YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPj0gdGhpcy5fa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHJlc3VsdCwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcEl0ZXJhdG9yO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFwKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGg7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpID49IDA7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB0aGlzLl92YWx1ZXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXNbaSAtIDFdID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaSAtIDFdID0gdGhpcy5fdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuX2NhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0S2V5KTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldFZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRFbnRyeSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuX2ZpbmQgPSBmdW5jdGlvbiAoa2V5LCBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXkgPSBrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUluZGV4IDwgMCAmJiBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVJbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXA7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KGtleSwgXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZShfLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEVudHJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIFNldCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBTZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5zaXplOyB9LFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5zZXQodmFsdWUsIHZhbHVlKSwgdGhpczsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fbWFwLmNsZWFyKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V0O1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBXZWFrTWFwIHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgdmFyIFVVSURfU0laRSA9IDE2O1xuICAgICAgICAgICAgdmFyIGtleXMgPSBIYXNoTWFwLmNyZWF0ZSgpO1xuICAgICAgICAgICAgdmFyIHJvb3RLZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBIYXNoTWFwLmhhcyh0YWJsZSwgdGhpcy5fa2V5KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuZ2V0KHRhYmxlLCB0aGlzLl9rZXkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZVt0aGlzLl9rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IGRlbGV0ZSB0YWJsZVt0aGlzLl9rZXldIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBXZWFrTWFwO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVuaXF1ZUtleSgpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgICAgIGRvXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IFwiQEBXZWFrTWFwQEBcIiArIENyZWF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoSGFzaE1hcC5oYXMoa2V5cywga2V5KSk7XG4gICAgICAgICAgICAgICAga2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCBjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRhcmdldCwgcm9vdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCByb290S2V5LCB7IHZhbHVlOiBIYXNoTWFwLmNyZWF0ZSgpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Jvb3RLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSBNYXRoLnJhbmRvbSgpICogMHhmZiB8IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEdlblJhbmRvbUJ5dGVzKHNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRmlsbFJhbmRvbUJ5dGVzKG5ldyBVaW50OEFycmF5KHNpemUpLCBzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgQXJyYXkoc2l6ZSksIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVVVJRCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEdlblJhbmRvbUJ5dGVzKFVVSURfU0laRSk7XG4gICAgICAgICAgICAgICAgLy8gbWFyayBhcyByYW5kb20gLSBSRkMgNDEyMiDCpyA0LjRcbiAgICAgICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xuICAgICAgICAgICAgICAgIGRhdGFbOF0gPSBkYXRhWzhdICYgMHhiZiB8IDB4ODA7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnl0ZSA9IGRhdGFbb2Zmc2V0XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gNCB8fCBvZmZzZXQgPT09IDYgfHwgb2Zmc2V0ID09PSA4KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZSA8IDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VzIGEgaGV1cmlzdGljIHVzZWQgYnkgdjggYW5kIGNoYWtyYSB0byBmb3JjZSBhbiBvYmplY3QgaW50byBkaWN0aW9uYXJ5IG1vZGUuXG4gICAgICAgIGZ1bmN0aW9uIE1ha2VEaWN0aW9uYXJ5KG9iaikge1xuICAgICAgICAgICAgb2JqLl9fID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5fXztcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKFJlZmxlY3QgfHwgKFJlZmxlY3QgPSB7fSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBTY3JvbGxQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9TY3JvbGxQcmVzZW50ZXInO1xuaW1wb3J0IE1hcmtDbGllbnQgZnJvbSAnLi4vY2xpZW50L01hcmtDbGllbnQnO1xuaW1wb3J0IE1hcmtSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9NYXJrUmVwb3NpdG9yeSc7XG5pbXBvcnQgU2V0dGluZ1JlcG9zaXRvcnkgZnJvbSAnLi4vcmVwb3NpdG9yaWVzL1NldHRpbmdSZXBvc2l0b3J5JztcbmltcG9ydCBDb25zb2xlQ2xpZW50IGZyb20gJy4uL2NsaWVudC9Db25zb2xlQ2xpZW50JztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya1VzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KCdTY3JvbGxQcmVzZW50ZXInKSBwcml2YXRlIHNjcm9sbFByZXNlbnRlcjogU2Nyb2xsUHJlc2VudGVyLFxuICAgIEBpbmplY3QoJ01hcmtDbGllbnQnKSBwcml2YXRlIGNsaWVudDogTWFya0NsaWVudCxcbiAgICBAaW5qZWN0KCdNYXJrUmVwb3NpdG9yeScpIHByaXZhdGUgcmVwb3NpdG9yeTogTWFya1JlcG9zaXRvcnksXG4gICAgQGluamVjdCgnU2V0dGluZ1JlcG9zaXRvcnknKSBwcml2YXRlIHNldHRpbmdSZXBvc2l0b3J5OiBTZXR0aW5nUmVwb3NpdG9yeSxcbiAgICBAaW5qZWN0KCdDb25zb2xlQ2xpZW50JykgcHJpdmF0ZSBjb25zb2xlQ2xpZW50OiBDb25zb2xlQ2xpZW50LFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIHNldChrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuc2Nyb2xsUHJlc2VudGVyLmdldFNjcm9sbCgpO1xuICAgIGlmICh0aGlzLmdsb2JhbEtleShrZXkpKSB7XG4gICAgICB0aGlzLmNsaWVudC5zZXRHbG9hYmxNYXJrKGtleSwgcG9zKTtcbiAgICAgIGF3YWl0IHRoaXMuY29uc29sZUNsaWVudC5pbmZvKGBTZXQgZ2xvYmFsIG1hcmsgdG8gJyR7a2V5fSdgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZXBvc2l0b3J5LnNldChrZXksIHBvcyk7XG4gICAgICBhd2FpdCB0aGlzLmNvbnNvbGVDbGllbnQuaW5mbyhgU2V0IGxvY2FsIG1hcmsgdG8gJyR7a2V5fSdgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBqdW1wKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKHRoaXMuZ2xvYmFsS2V5KGtleSkpIHtcbiAgICAgIGF3YWl0IHRoaXMuY2xpZW50Lmp1bXBHbG9iYWxNYXJrKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmVwb3NpdG9yeS5nZXQoa2V5KTtcbiAgICAgIGlmICghcG9zKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTWFyayBpcyBub3Qgc2V0Jyk7XG4gICAgICB9XG4gICAgICB0aGlzLnNjcm9sbChwb3MueCwgcG9zLnkpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbCh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHNtb290aCA9IHRoaXMuc2V0dGluZ1JlcG9zaXRvcnkuZ2V0KCkucHJvcGVydGllcy5zbW9vdGhzY3JvbGw7XG4gICAgdGhpcy5zY3JvbGxQcmVzZW50ZXIuc2Nyb2xsVG8oeCwgeSwgc21vb3RoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2xvYmFsS2V5KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuICgvXltBLVowLTldJC8pLnRlc3Qoa2V5KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IEZvbGxvd1NsYXZlUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvRm9sbG93U2xhdmVSZXBvc2l0b3J5JztcbmltcG9ydCBGb2xsb3dQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9Gb2xsb3dQcmVzZW50ZXInO1xuaW1wb3J0IFRhYnNDbGllbnQgZnJvbSAnLi4vY2xpZW50L1RhYnNDbGllbnQnO1xuaW1wb3J0IEZvbGxvd01hc3RlckNsaWVudCBmcm9tICcuLi9jbGllbnQvRm9sbG93TWFzdGVyQ2xpZW50JztcbmltcG9ydCB7IExpbmtIaW50LCBJbnB1dEhpbnQgfSBmcm9tICcuLi9wcmVzZW50ZXJzL0hpbnQnO1xuaW1wb3J0IEtleSBmcm9tICcuLi8uLi9zaGFyZWQvc2V0dGluZ3MvS2V5JztcblxuaW50ZXJmYWNlIFNpemUge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGxvd1NsYXZlVXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoJ0ZvbGxvd1ByZXNlbnRlcicpXG4gICAgcHJpdmF0ZSBwcmVzZW50ZXI6IEZvbGxvd1ByZXNlbnRlcixcblxuICAgIEBpbmplY3QoJ1RhYnNDbGllbnQnKVxuICAgIHByaXZhdGUgdGFic0NsaWVudDogVGFic0NsaWVudCxcblxuICAgIEBpbmplY3QoJ0ZvbGxvd01hc3RlckNsaWVudCcpXG4gICAgcHJpdmF0ZSBmb2xsb3dNYXN0ZXJDbGllbnQ6IEZvbGxvd01hc3RlckNsaWVudCxcblxuICAgIEBpbmplY3QoJ0ZvbGxvd1NsYXZlUmVwb3NpdG9yeScpXG4gICAgcHJpdmF0ZSBmb2xsb3dTbGF2ZVJlcG9zaXRvcnk6IEZvbGxvd1NsYXZlUmVwb3NpdG9yeSxcbiAgKSB7XG4gIH1cblxuICBjb3VudFRhcmdldHModmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50KTogdm9pZCB7XG4gICAgY29uc3QgY291bnQgPSB0aGlzLnByZXNlbnRlci5nZXRUYXJnZXRDb3VudCh2aWV3U2l6ZSwgZnJhbWVQb3NpdGlvbik7XG4gICAgdGhpcy5mb2xsb3dNYXN0ZXJDbGllbnQucmVzcG9uc2VIaW50Q291bnQoY291bnQpO1xuICB9XG5cbiAgY3JlYXRlSGludHModmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50LCB0YWdzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMuZm9sbG93U2xhdmVSZXBvc2l0b3J5LmVuYWJsZUZvbGxvd01vZGUoKTtcbiAgICB0aGlzLnByZXNlbnRlci5jcmVhdGVIaW50cyh2aWV3U2l6ZSwgZnJhbWVQb3NpdGlvbiwgdGFncyk7XG4gIH1cblxuICBzaG93SGludHMocHJlZml4OiBzdHJpbmcpIHtcbiAgICB0aGlzLnByZXNlbnRlci5maWx0ZXJIaW50cyhwcmVmaXgpO1xuICB9XG5cbiAgc2VuZEtleShrZXk6IEtleSk6IHZvaWQge1xuICAgIHRoaXMuZm9sbG93TWFzdGVyQ2xpZW50LnNlbmRLZXkoa2V5KTtcbiAgfVxuXG4gIGlzRm9sbG93TW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb2xsb3dTbGF2ZVJlcG9zaXRvcnkuaXNGb2xsb3dNb2RlKCk7XG4gIH1cblxuICBhc3luYyBhY3RpdmF0ZSh0YWc6IHN0cmluZywgbmV3VGFiOiBib29sZWFuLCBiYWNrZ3JvdW5kOiBib29sZWFuKSB7XG4gICAgY29uc3QgaGludCA9IHRoaXMucHJlc2VudGVyLmdldEhpbnQodGFnKTtcbiAgICBpZiAoIWhpbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoaGludCBpbnN0YW5jZW9mIExpbmtIaW50KSB7XG4gICAgICBjb25zdCB1cmwgPSBoaW50LmdldExpbmsoKTtcbiAgICAgIGxldCBvcGVuTmV3VGFiID0gbmV3VGFiO1xuICAgICAgLy8gT3BlbiBsaW5rIGJ5IGJhY2tncm91bmQgc2NyaXB0IGluIG9yZGVyIHRvIHByZXZlbnQgYSBwb3B1cCBibG9ja1xuICAgICAgaWYgKGhpbnQuZ2V0TGlua1RhcmdldCgpID09PSAnX2JsYW5rJykge1xuICAgICAgICBvcGVuTmV3VGFiID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zY3JpcHQtdXJsXG4gICAgICBpZiAoIXVybCB8fCB1cmwgPT09ICcjJyB8fCB1cmwudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKCdqYXZhc2NyaXB0OicpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMudGFic0NsaWVudC5vcGVuVXJsKHVybCwgb3Blbk5ld1RhYiwgYmFja2dyb3VuZCk7XG4gICAgfSBlbHNlIGlmIChoaW50IGluc3RhbmNlb2YgSW5wdXRIaW50KSB7XG4gICAgICBoaW50LmFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5mb2xsb3dTbGF2ZVJlcG9zaXRvcnkuZGlzYWJsZUZvbGxvd01vZGUoKTtcbiAgICB0aGlzLnByZXNlbnRlci5jbGVhckhpbnRzKCk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIGRvbXMgZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2RvbSc7XG5cbmludGVyZmFjZSBQb2ludCB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5jb25zdCBoaW50UG9zaXRpb24gPSAoZWxlbWVudDogRWxlbWVudCk6IFBvaW50ID0+IHtcbiAgY29uc3QgeyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gfSA9IGRvbXMudmlld3BvcnRSZWN0KGVsZW1lbnQpO1xuXG4gIGlmIChlbGVtZW50LnRhZ05hbWUgIT09ICdBUkVBJykge1xuICAgIHJldHVybiB7IHg6IGxlZnQsIHk6IHRvcCB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICB4OiAobGVmdCArIHJpZ2h0KSAvIDIsXG4gICAgeTogKHRvcCArIGJvdHRvbSkgLyAyLFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgSGludCB7XG4gIHByaXZhdGUgaGludDogSFRNTEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSB0YWc6IHN0cmluZztcblxuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEhUTUxFbGVtZW50LCB0YWc6IHN0cmluZykge1xuICAgIHRoaXMudGFnID0gdGFnO1xuXG4gICAgY29uc3QgZG9jID0gdGFyZ2V0Lm93bmVyRG9jdW1lbnQ7XG4gICAgaWYgKGRvYyA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3duZXJEb2N1bWVudCBpcyBudWxsJyk7XG4gICAgfVxuXG4gICAgY29uc3QgeyB4LCB5IH0gPSBoaW50UG9zaXRpb24odGFyZ2V0KTtcbiAgICBjb25zdCB7IHNjcm9sbFgsIHNjcm9sbFkgfSA9IHdpbmRvdztcblxuICAgIGNvbnN0IGhpbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGhpbnQuY2xhc3NOYW1lID0gJ3ZpbXZpeGVuLWhpbnQnO1xuICAgIGhpbnQudGV4dENvbnRlbnQgPSB0YWc7XG4gICAgaGludC5zdHlsZS5sZWZ0ID0geCArIHNjcm9sbFggKyAncHgnO1xuICAgIGhpbnQuc3R5bGUudG9wID0geSArIHNjcm9sbFkgKyAncHgnO1xuXG4gICAgZG9jLmJvZHkuYXBwZW5kKGhpbnQpO1xuXG4gICAgdGhpcy5oaW50ID0gaGludDtcbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIHNob3coKTogdm9pZCB7XG4gICAgdGhpcy5oaW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcbiAgfVxuXG4gIGhpZGUoKTogdm9pZCB7XG4gICAgdGhpcy5oaW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZW1vdmUoKTogdm9pZCB7XG4gICAgdGhpcy5oaW50LnJlbW92ZSgpO1xuICB9XG5cbiAgZ2V0VGFnKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMudGFnO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMaW5rSGludCBleHRlbmRzIEhpbnQge1xuICBwcml2YXRlIHRhcmdldDogSFRNTEFuY2hvckVsZW1lbnQgfCBIVE1MQXJlYUVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MQW5jaG9yRWxlbWVudCB8IEhUTUxBcmVhRWxlbWVudCwgdGFnOiBzdHJpbmcpIHtcbiAgICBzdXBlcih0YXJnZXQsIHRhZyk7XG5cbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIGdldExpbmsoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQuaHJlZjtcbiAgfVxuXG4gIGdldExpbmtUYXJnZXQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0LmdldEF0dHJpYnV0ZSgndGFyZ2V0Jyk7XG4gIH1cblxuICBjbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnRhcmdldC5jbGljaygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnB1dEhpbnQgZXh0ZW5kcyBIaW50IHtcbiAgcHJpdmF0ZSB0YXJnZXQ6IEhUTUxFbGVtZW50O1xuXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTEVsZW1lbnQsIHRhZzogc3RyaW5nKSB7XG4gICAgc3VwZXIodGFyZ2V0LCB0YWcpO1xuXG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gIH1cblxuICBhY3RpdmF0ZSgpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSB0aGlzLnRhcmdldDtcbiAgICBzd2l0Y2ggKHRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICBjYXNlICdpbnB1dCc6XG4gICAgICBzd2l0Y2ggKCh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSkge1xuICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICBjYXNlICdyYWRpbyc6XG4gICAgICBjYXNlICdzdWJtaXQnOlxuICAgICAgY2FzZSAncmVzZXQnOlxuICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgIGNhc2UgJ2NvbG9yJzpcbiAgICAgICAgcmV0dXJuIHRhcmdldC5jbGljaygpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRhcmdldC5mb2N1cygpO1xuICAgICAgfVxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICAgIHJldHVybiB0YXJnZXQuZm9jdXMoKTtcbiAgICBjYXNlICdidXR0b24nOlxuICAgIGNhc2UgJ3N1bW1hcnknOlxuICAgICAgcmV0dXJuIHRhcmdldC5jbGljaygpO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoZG9tcy5pc0NvbnRlbnRFZGl0YWJsZSh0YXJnZXQpKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQuZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0LmNsaWNrKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgS2V5IGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9LZXknO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXlTZXF1ZW5jZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBrZXlzOiBLZXlbXSxcbiAgKSB7XG4gIH1cblxuICBwdXNoKGtleTogS2V5KTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5rZXlzLnB1c2goa2V5KTtcbiAgfVxuXG4gIGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmtleXMubGVuZ3RoO1xuICB9XG5cbiAgc3RhcnRzV2l0aChvOiBLZXlTZXF1ZW5jZSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmtleXMubGVuZ3RoIDwgby5rZXlzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG8ua2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgaWYgKCF0aGlzLmtleXNbaV0uZXF1YWxzKG8ua2V5c1tpXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlzRGlnaXRPbmx5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmtleXMuZXZlcnkoa2V5ID0+IGtleS5pc0RpZ2l0KCkpO1xuICB9XG5cbiAgcmVwZWF0Q291bnQoKTogbnVtYmVyIHtcbiAgICBsZXQgbm9uRGlnaXRBdCA9IHRoaXMua2V5cy5maW5kSW5kZXgoa2V5ID0+ICFrZXkuaXNEaWdpdCgpKTtcbiAgICBpZiAodGhpcy5rZXlzLmxlbmd0aCA9PT0gMCB8fCBub25EaWdpdEF0ID09PSAwKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKG5vbkRpZ2l0QXQgPT09IC0xKSB7XG4gICAgICBub25EaWdpdEF0ID0gdGhpcy5rZXlzLmxlbmd0aDtcbiAgICB9XG4gICAgY29uc3QgZGlnaXRzID0gdGhpcy5rZXlzLnNsaWNlKDAsIG5vbkRpZ2l0QXQpXG4gICAgICAubWFwKGtleSA9PiBrZXkua2V5KVxuICAgICAgLmpvaW4oJycpO1xuICAgIHJldHVybiBOdW1iZXIoZGlnaXRzKTtcbiAgfVxuXG4gIHRyaW1OdW1lcmljUHJlZml4KCk6IEtleVNlcXVlbmNlIHtcbiAgICBsZXQgbm9uRGlnaXRBdCA9IHRoaXMua2V5cy5maW5kSW5kZXgoa2V5ID0+ICFrZXkuaXNEaWdpdCgpKTtcbiAgICBpZiAobm9uRGlnaXRBdCA9PT0gLTEpIHtcbiAgICAgIG5vbkRpZ2l0QXQgPSB0aGlzLmtleXMubGVuZ3RoO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEtleVNlcXVlbmNlKHRoaXMua2V5cy5zbGljZShub25EaWdpdEF0KSk7XG4gIH1cblxuICBzcGxpdE51bWVyaWNQcmVmaXgoKTogW0tleVNlcXVlbmNlLCBLZXlTZXF1ZW5jZV0ge1xuICAgIGNvbnN0IG5vbkRpZ2l0SW5kZXggPSB0aGlzLmtleXMuZmluZEluZGV4KGtleSA9PiAha2V5LmlzRGlnaXQoKSk7XG4gICAgaWYgKG5vbkRpZ2l0SW5kZXggPT09IC0xKSB7XG4gICAgICByZXR1cm4gW3RoaXMsIG5ldyBLZXlTZXF1ZW5jZShbXSldO1xuICAgIH1cbiAgICByZXR1cm4gW1xuICAgICAgbmV3IEtleVNlcXVlbmNlKHRoaXMua2V5cy5zbGljZSgwLCBub25EaWdpdEluZGV4KSksXG4gICAgICBuZXcgS2V5U2VxdWVuY2UodGhpcy5rZXlzLnNsaWNlKG5vbkRpZ2l0SW5kZXgpKSxcbiAgICBdO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXBLZXlzKGtleXM6IHN0cmluZyk6IEtleVNlcXVlbmNlIHtcbiAgICBjb25zdCBmcm9tTWFwS2V5c1JlY3Vyc2l2ZSA9IChcbiAgICAgIHJlbWFpbmluZzogc3RyaW5nLCBtYXBwZWRLZXlzOiBLZXlbXSxcbiAgICApOiBLZXlbXSA9PiB7XG4gICAgICBpZiAocmVtYWluaW5nLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbWFwcGVkS2V5cztcbiAgICAgIH1cblxuICAgICAgbGV0IG5leHRQb3MgPSAxO1xuICAgICAgaWYgKHJlbWFpbmluZy5zdGFydHNXaXRoKCc8JykpIHtcbiAgICAgICAgY29uc3QgbHRQb3MgPSByZW1haW5pbmcuaW5kZXhPZignPicpO1xuICAgICAgICBpZiAobHRQb3MgPiAwKSB7XG4gICAgICAgICAgbmV4dFBvcyA9IGx0UG9zICsgMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZnJvbU1hcEtleXNSZWN1cnNpdmUoXG4gICAgICAgIHJlbWFpbmluZy5zbGljZShuZXh0UG9zKSxcbiAgICAgICAgbWFwcGVkS2V5cy5jb25jYXQoW0tleS5mcm9tTWFwS2V5KHJlbWFpbmluZy5zbGljZSgwLCBuZXh0UG9zKSldKVxuICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZGF0YSA9IGZyb21NYXBLZXlzUmVjdXJzaXZlKGtleXMsIFtdKTtcbiAgICByZXR1cm4gbmV3IEtleVNlcXVlbmNlKGRhdGEpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgTWFya0tleVJlcG9zaXRvcnkgZnJvbSAnLi4vcmVwb3NpdG9yaWVzL01hcmtLZXlSZXBvc2l0b3J5JztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya0tleVVzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KCdNYXJrS2V5UmVwb3NpdG9yeScpIHByaXZhdGUgcmVwb3NpdG9yeTogTWFya0tleVJlcG9zaXRvcnksXG4gICkge1xuICB9XG5cbiAgaXNTZXRNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnkuaXNTZXRNb2RlKCk7XG4gIH1cblxuICBpc0p1bXBNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnkuaXNKdW1wTW9kZSgpO1xuICB9XG5cbiAgZW5hYmxlU2V0TW9kZSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlcG9zaXRvcnkuZW5hYmxlU2V0TW9kZSgpO1xuICB9XG5cbiAgZGlzYWJsZVNldE1vZGUoKTogdm9pZCB7XG4gICAgdGhpcy5yZXBvc2l0b3J5LmRpc2FiZVNldE1vZGUoKTtcbiAgfVxuXG4gIGVuYWJsZUp1bXBNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMucmVwb3NpdG9yeS5lbmFibGVKdW1wTW9kZSgpO1xuICB9XG5cbiAgZGlzYWJsZUp1bXBNb2RlKCk6IHZvaWQge1xuICAgIHRoaXMucmVwb3NpdG9yeS5kaXNhYmVKdW1wTW9kZSgpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgQ29uc29sZUZyYW1lUHJlc2VudGVyIHtcbiAgaW5pdGlhbGl6ZSgpOiB2b2lkO1xuXG4gIGJsdXIoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGVGcmFtZVByZXNlbnRlckltcGwgaW1wbGVtZW50cyBDb25zb2xlRnJhbWVQcmVzZW50ZXIge1xuICBpbml0aWFsaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IGlmcmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgIGlmcmFtZS5zcmMgPSBicm93c2VyLnJ1bnRpbWUuZ2V0VVJMKCdidWlsZC9jb25zb2xlLmh0bWwnKTtcbiAgICBpZnJhbWUuaWQgPSAndmltdml4ZW4tY29uc29sZS1mcmFtZSc7XG4gICAgaWZyYW1lLmNsYXNzTmFtZSA9ICd2aW12aXhlbi1jb25zb2xlLWZyYW1lJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChpZnJhbWUpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICBjb25zdCBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmltdml4ZW4tY29uc29sZS1mcmFtZScpO1xuICAgIGlmICghZWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NvbnNvbGUgZnJhbWUgbm90IGNyZWF0ZWQnKTtcbiAgICB9XG4gICAgZWxlLmJsdXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IEFwcGxpY2F0aW9uIGZyb20gJy4vQXBwbGljYXRpb24nO1xuaW1wb3J0IGNvbnNvbGVGcmFtZVN0eWxlIGZyb20gJy4vc2l0ZS1zdHlsZSc7XG5pbXBvcnQgeyBDb25zb2xlRnJhbWVQcmVzZW50ZXJJbXBsIH0gZnJvbSAnLi9wcmVzZW50ZXJzL0NvbnNvbGVGcmFtZVByZXNlbnRlcic7XG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgJy4vZGknO1xuXG5pZiAod2luZG93LnNlbGYgPT09IHdpbmRvdy50b3ApIHtcbiAgbmV3IENvbnNvbGVGcmFtZVByZXNlbnRlckltcGwoKS5pbml0aWFsaXplKCk7XG59XG5cbnRyeSB7XG4gIGNvbnN0IGFwcCA9IGNvbnRhaW5lci5yZXNvbHZlKEFwcGxpY2F0aW9uKTtcbiAgYXBwLnJ1bigpO1xufSBjYXRjaCAoZSkgeyBjb25zb2xlLmVycm9yKGUpOyB9XG5cbmNvbnN0IHN0eWxlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5zdHlsZS50ZXh0Q29udGVudCA9IGNvbnNvbGVGcmFtZVN0eWxlO1xud2luZG93LmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBNZXNzYWdlTGlzdGVuZXIgZnJvbSAnLi9NZXNzYWdlTGlzdGVuZXInO1xuaW1wb3J0IEZpbmRDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvRmluZENvbnRyb2xsZXInO1xuaW1wb3J0IE1hcmtDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTWFya0NvbnRyb2xsZXInO1xuaW1wb3J0IEZvbGxvd01hc3RlckNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9Gb2xsb3dNYXN0ZXJDb250cm9sbGVyJztcbmltcG9ydCBGb2xsb3dTbGF2ZUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9Gb2xsb3dTbGF2ZUNvbnRyb2xsZXInO1xuaW1wb3J0IEZvbGxvd0tleUNvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9Gb2xsb3dLZXlDb250cm9sbGVyJztcbmltcG9ydCBJbnB1dERyaXZlciBmcm9tICcuL0lucHV0RHJpdmVyJztcbmltcG9ydCBLZXltYXBDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvS2V5bWFwQ29udHJvbGxlcic7XG5pbXBvcnQgQWRkb25FbmFibGVkVXNlQ2FzZSBmcm9tICcuL3VzZWNhc2VzL0FkZG9uRW5hYmxlZFVzZUNhc2UnO1xuaW1wb3J0IE1hcmtLZXlDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTWFya0tleUNvbnRyb2xsZXInO1xuaW1wb3J0IEFkZG9uRW5hYmxlZENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9BZGRvbkVuYWJsZWRDb250cm9sbGVyJztcbmltcG9ydCBTZXR0aW5nQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL1NldHRpbmdDb250cm9sbGVyJztcbmltcG9ydCBDb25zb2xlRnJhbWVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvQ29uc29sZUZyYW1lQ29udHJvbGxlcic7XG5pbXBvcnQgTmF2aWdhdGVDb250cm9sbGVyIGZyb20gJy4vY29udHJvbGxlcnMvTmF2aWdhdGVDb250cm9sbGVyJztcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5cbnR5cGUgTWVzc2FnZSA9IG1lc3NhZ2VzLk1lc3NhZ2U7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcGxpY2F0aW9uIHtcblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXBhcmFtc1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1lc3NhZ2VMaXN0ZW5lcjogTWVzc2FnZUxpc3RlbmVyLFxuICAgIHByaXZhdGUgZmluZENvbnRyb2xsZXI6IEZpbmRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgbWFya0NvbnRyb2xsZXI6IE1hcmtDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZm9sbG93TWFzdGVyQ29udHJvbGxlcjogRm9sbG93TWFzdGVyQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGZvbGxvd1NsYXZlQ29udHJvbGxlcjogRm9sbG93U2xhdmVDb250cm9sbGVyLFxuICAgIHByaXZhdGUgZm9sbG93S2V5Q29udHJvbGxlcjogRm9sbG93S2V5Q29udHJvbGxlcixcbiAgICBwcml2YXRlIGtleW1hcENvbnRyb2xsZXI6IEtleW1hcENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBhZGRvbkVuYWJsZWRVc2VDYXNlOiBBZGRvbkVuYWJsZWRVc2VDYXNlLFxuICAgIHByaXZhdGUgbWFya0tleUNvbnRyb2xsZXI6IE1hcmtLZXlDb250cm9sbGVyLFxuICAgIHByaXZhdGUgYWRkb25FbmFibGVkQ29udHJvbGxlcjogQWRkb25FbmFibGVkQ29udHJvbGxlcixcbiAgICBwcml2YXRlIHNldHRpbmdDb250cm9sbGVyOiBTZXR0aW5nQ29udHJvbGxlcixcbiAgICBwcml2YXRlIGNvbnNvbGVGcmFtZUNvbnRyb2xsZXI6IENvbnNvbGVGcmFtZUNvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZUNvbnRyb2xsZXI6IE5hdmlnYXRlQ29udHJvbGxlcixcbiAgKSB7XG4gIH1cblxuICBydW4oKSB7XG4gICAgdGhpcy5yb3V0ZUNvbW1vbkNvbXBvbmVudHMoKTtcbiAgICBpZiAod2luZG93LnNlbGYgPT09IHdpbmRvdy50b3ApIHtcbiAgICAgIHRoaXMucm91dGVNYXN0ZXJDb21wb25lbnRzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByb3V0ZU1hc3RlckNvbXBvbmVudHMoKSB7XG4gICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIub25XZWJNZXNzYWdlKChtc2c6IE1lc3NhZ2UsIHNlbmRlcjogV2luZG93KSA9PiB7XG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICBjYXNlIG1lc3NhZ2VzLkNPTlNPTEVfRU5URVJfRklORDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZENvbnRyb2xsZXIuc3RhcnQobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuRklORF9ORVhUOlxuICAgICAgICByZXR1cm4gdGhpcy5maW5kQ29udHJvbGxlci5uZXh0KG1zZyk7XG4gICAgICBjYXNlIG1lc3NhZ2VzLkZJTkRfUFJFVjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZENvbnRyb2xsZXIucHJldihtc2cpO1xuICAgICAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX1VORk9DVVM6XG4gICAgICAgIHJldHVybiB0aGlzLmNvbnNvbGVGcmFtZUNvbnRyb2xsZXIudW5mb2N1cyhtc2cpO1xuICAgICAgY2FzZSBtZXNzYWdlcy5GT0xMT1dfU1RBUlQ6XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd01hc3RlckNvbnRyb2xsZXIuZm9sbG93U3RhcnQobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuRk9MTE9XX1JFU1BPTlNFX0NPVU5UX1RBUkdFVFM6XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd01hc3RlckNvbnRyb2xsZXIucmVzcG9uc2VDb3VudFRhcmdldHMobXNnLCBzZW5kZXIpO1xuICAgICAgY2FzZSBtZXNzYWdlcy5GT0xMT1dfS0VZX1BSRVNTOlxuICAgICAgICByZXR1cm4gdGhpcy5mb2xsb3dNYXN0ZXJDb250cm9sbGVyLmtleVByZXNzKG1zZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIub25CYWNrZ3JvdW5kTWVzc2FnZSgobXNnOiBNZXNzYWdlKSA9PiB7XG4gICAgICBzd2l0Y2ggKG1zZy50eXBlKSB7XG4gICAgICBjYXNlIG1lc3NhZ2VzLkFERE9OX0VOQUJMRURfUVVFUlk6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZG9uRW5hYmxlZENvbnRyb2xsZXIuZ2V0QWRkb25FbmFibGVkKG1zZyk7XG4gICAgICBjYXNlIG1lc3NhZ2VzLlRBQl9TQ1JPTExfVE86XG4gICAgICAgIHJldHVybiB0aGlzLm1hcmtDb250cm9sbGVyLnNjcm9sbFRvKG1zZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSByb3V0ZUNvbW1vbkNvbXBvbmVudHMoKSB7XG4gICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIub25XZWJNZXNzYWdlKChtc2c6IE1lc3NhZ2UpID0+IHtcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgIGNhc2UgbWVzc2FnZXMuRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9sbG93U2xhdmVDb250cm9sbGVyLmNvdW50VGFyZ2V0cyhtc2cpO1xuICAgICAgY2FzZSBtZXNzYWdlcy5GT0xMT1dfQ1JFQVRFX0hJTlRTOlxuICAgICAgICByZXR1cm4gdGhpcy5mb2xsb3dTbGF2ZUNvbnRyb2xsZXIuY3JlYXRlSGludHMobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuRk9MTE9XX1NIT1dfSElOVFM6XG4gICAgICAgIHJldHVybiB0aGlzLmZvbGxvd1NsYXZlQ29udHJvbGxlci5zaG93SGludHMobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuRk9MTE9XX0FDVElWQVRFOlxuICAgICAgICByZXR1cm4gdGhpcy5mb2xsb3dTbGF2ZUNvbnRyb2xsZXIuYWN0aXZhdGUobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuRk9MTE9XX1JFTU9WRV9ISU5UUzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZm9sbG93U2xhdmVDb250cm9sbGVyLmNsZWFyKG1zZyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0pO1xuXG4gICAgdGhpcy5tZXNzYWdlTGlzdGVuZXIub25CYWNrZ3JvdW5kTWVzc2FnZSgobXNnOiBNZXNzYWdlKTogYW55ID0+IHtcbiAgICAgIHN3aXRjaCAobXNnLnR5cGUpIHtcbiAgICAgIGNhc2UgbWVzc2FnZXMuU0VUVElOR1NfQ0hBTkdFRDpcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0dGluZ0NvbnRyb2xsZXIucmVsb2FkU2V0dGluZ3MobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZG9uRW5hYmxlZFVzZUNhc2UudG9nZ2xlKCk7XG4gICAgICBjYXNlIG1lc3NhZ2VzLk5BVklHQVRFX0hJU1RPUllfTkVYVDpcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGVDb250cm9sbGVyLm9wZW5IaXN0b3J5TmV4dChtc2cpO1xuICAgICAgY2FzZSBtZXNzYWdlcy5OQVZJR0FURV9ISVNUT1JZX1BSRVY6XG4gICAgICAgIHJldHVybiB0aGlzLm5hdmlnYXRlQ29udHJvbGxlci5vcGVuSGlzdG9yeVByZXYobXNnKTtcbiAgICAgIGNhc2UgbWVzc2FnZXMuTkFWSUdBVEVfTElOS19ORVhUOlxuICAgICAgICByZXR1cm4gdGhpcy5uYXZpZ2F0ZUNvbnRyb2xsZXIub3BlbkxpbmtOZXh0KG1zZyk7XG4gICAgICBjYXNlIG1lc3NhZ2VzLk5BVklHQVRFX0xJTktfUFJFVjpcbiAgICAgICAgcmV0dXJuIHRoaXMubmF2aWdhdGVDb250cm9sbGVyLm9wZW5MaW5rUHJldihtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgaW5wdXREcml2ZXIgPSBuZXcgSW5wdXREcml2ZXIod2luZG93LmRvY3VtZW50LmJvZHkpO1xuICAgIGlucHV0RHJpdmVyLm9uS2V5KGtleSA9PiB0aGlzLmZvbGxvd0tleUNvbnRyb2xsZXIucHJlc3Moa2V5KSk7XG4gICAgaW5wdXREcml2ZXIub25LZXkoa2V5ID0+IHRoaXMubWFya0tleUNvbnRyb2xsZXIucHJlc3Moa2V5KSk7XG4gICAgaW5wdXREcml2ZXIub25LZXkoa2V5ID0+IHRoaXMua2V5bWFwQ29udHJvbGxlci5wcmVzcyhrZXkpKTtcblxuICAgIHRoaXMuc2V0dGluZ0NvbnRyb2xsZXIuaW5pdFNldHRpbmdzKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgeyBNZXNzYWdlLCB2YWx1ZU9mIH0gZnJvbSAnLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuZXhwb3J0IHR5cGUgV2ViRXh0TWVzc2FnZVNlbmRlciA9IGJyb3dzZXIucnVudGltZS5NZXNzYWdlU2VuZGVyO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZXNzYWdlTGlzdGVuZXIge1xuICBvbldlYk1lc3NhZ2UoXG4gICAgbGlzdGVuZXI6IChtc2c6IE1lc3NhZ2UsIHNlbmRlcjogV2luZG93KSA9PiB2b2lkLFxuICApIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBzZW5kZXIgPSBldmVudC5zb3VyY2U7XG4gICAgICBpZiAoIShzZW5kZXIgaW5zdGFuY2VvZiBXaW5kb3cpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBtZXNzYWdlID0gbnVsbDtcbiAgICAgIHRyeSB7XG4gICAgICAgIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpZ25vcmUgdW5leHBlY3RlZCBtZXNzYWdlXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxpc3RlbmVyKG1lc3NhZ2UsIHNlbmRlcik7XG4gICAgfSk7XG4gIH1cblxuICBvbkJhY2tncm91bmRNZXNzYWdlKFxuICAgIGxpc3RlbmVyOiAobXNnOiBNZXNzYWdlLCBzZW5kZXI6IFdlYkV4dE1lc3NhZ2VTZW5kZXIpID0+IGFueSxcbiAgKSB7XG4gICAgYnJvd3Nlci5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihcbiAgICAgIChtc2c6IGFueSwgc2VuZGVyOiBXZWJFeHRNZXNzYWdlU2VuZGVyKSA9PiB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcih2YWx1ZU9mKG1zZyksIHNlbmRlcik7XG4gICAgICB9LFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuaW1wb3J0IEZpbmRVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL0ZpbmRVc2VDYXNlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmluZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZpbmRVc2VDYXNlOiBGaW5kVXNlQ2FzZSxcbiAgKSB7XG4gIH1cblxuICBhc3luYyBzdGFydChtOiBtZXNzYWdlcy5Db25zb2xlRW50ZXJGaW5kTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZmluZFVzZUNhc2Uuc3RhcnRGaW5kKG0udGV4dCk7XG4gIH1cblxuICBhc3luYyBuZXh0KF86IG1lc3NhZ2VzLkZpbmROZXh0TWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuZmluZFVzZUNhc2UuZmluZE5leHQoKTtcbiAgfVxuXG4gIGFzeW5jIHByZXYoXzogbWVzc2FnZXMuRmluZFByZXZNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5maW5kVXNlQ2FzZS5maW5kUHJldigpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgRmluZFByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL0ZpbmRQcmVzZW50ZXInO1xuaW1wb3J0IEZpbmRSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9GaW5kUmVwb3NpdG9yeSc7XG5pbXBvcnQgRmluZENsaWVudCBmcm9tICcuLi9jbGllbnQvRmluZENsaWVudCc7XG5pbXBvcnQgQ29uc29sZUNsaWVudCBmcm9tICcuLi9jbGllbnQvQ29uc29sZUNsaWVudCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnRmluZFByZXNlbnRlcicpIHByaXZhdGUgcHJlc2VudGVyOiBGaW5kUHJlc2VudGVyLFxuICAgIEBpbmplY3QoJ0ZpbmRSZXBvc2l0b3J5JykgcHJpdmF0ZSByZXBvc2l0b3J5OiBGaW5kUmVwb3NpdG9yeSxcbiAgICBAaW5qZWN0KCdGaW5kQ2xpZW50JykgcHJpdmF0ZSBjbGllbnQ6IEZpbmRDbGllbnQsXG4gICAgQGluamVjdCgnQ29uc29sZUNsaWVudCcpIHByaXZhdGUgY29uc29sZUNsaWVudDogQ29uc29sZUNsaWVudCxcbiAgKSB7XG4gIH1cblxuICBhc3luYyBzdGFydEZpbmQoa2V5d29yZD86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMucHJlc2VudGVyLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgaWYgKGtleXdvcmQpIHtcbiAgICAgIHRoaXMuc2F2ZUtleXdvcmQoa2V5d29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxhc3RLZXl3b3JkID0gYXdhaXQgdGhpcy5nZXRLZXl3b3JkKCk7XG4gICAgICBpZiAoIWxhc3RLZXl3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNob3dOb0xhc3RLZXl3b3JkRXJyb3IoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2F2ZUtleXdvcmQobGFzdEtleXdvcmQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5maW5kTmV4dCgpO1xuICB9XG5cbiAgZmluZE5leHQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZE5leHRQcmV2KGZhbHNlKTtcbiAgfVxuXG4gIGZpbmRQcmV2KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmZpbmROZXh0UHJldih0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgZmluZE5leHRQcmV2KFxuICAgIGJhY2t3YXJkczogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3Qga2V5d29yZCA9IGF3YWl0IHRoaXMuZ2V0S2V5d29yZCgpO1xuICAgIGlmICgha2V5d29yZCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd05vTGFzdEtleXdvcmRFcnJvcigpO1xuICAgIH1cbiAgICBjb25zdCBmb3VuZCA9IHRoaXMucHJlc2VudGVyLmZpbmQoa2V5d29yZCwgYmFja3dhcmRzKTtcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHRoaXMuY29uc29sZUNsaWVudC5pbmZvKCdQYXR0ZXJuIGZvdW5kOiAnICsga2V5d29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29uc29sZUNsaWVudC5lcnJvcignUGF0dGVybiBub3QgZm91bmQ6ICcgKyBrZXl3b3JkKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGdldEtleXdvcmQoKTogUHJvbWlzZTxzdHJpbmcgfCBudWxsPiB7XG4gICAgbGV0IGtleXdvcmQgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0TGFzdEtleXdvcmQoKTtcbiAgICBpZiAoIWtleXdvcmQpIHtcbiAgICAgIGtleXdvcmQgPSBhd2FpdCB0aGlzLmNsaWVudC5nZXRHbG9iYWxMYXN0S2V5d29yZCgpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5d29yZDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2F2ZUtleXdvcmQoa2V5d29yZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldExhc3RLZXl3b3JkKGtleXdvcmQpO1xuICAgIGF3YWl0IHRoaXMuY2xpZW50LnNldEdsb2JhbExhc3RLZXl3b3JkKGtleXdvcmQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaG93Tm9MYXN0S2V5d29yZEVycm9yKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGF3YWl0IHRoaXMuY29uc29sZUNsaWVudC5lcnJvcignTm8gcHJldmlvdXMgc2VhcmNoIGtleXdvcmRzJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuaW1wb3J0IE1hcmtVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL01hcmtVc2VDYXNlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFya0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG1hcmtVc2VDYXNlOiBNYXJrVXNlQ2FzZSxcbiAgKSB7XG4gIH1cblxuICBzY3JvbGxUbyhtZXNzYWdlOiBtZXNzYWdlcy5UYWJTY3JvbGxUb01lc3NhZ2UpIHtcbiAgICB0aGlzLm1hcmtVc2VDYXNlLnNjcm9sbChtZXNzYWdlLngsIG1lc3NhZ2UueSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgRm9sbG93TWFzdGVyVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9Gb2xsb3dNYXN0ZXJVc2VDYXNlJztcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uLy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGxvd01hc3RlckNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvbGxvd01hc3RlclVzZUNhc2U6IEZvbGxvd01hc3RlclVzZUNhc2UsXG4gICkge1xuICB9XG5cbiAgZm9sbG93U3RhcnQobTogbWVzc2FnZXMuRm9sbG93U3RhcnRNZXNzYWdlKTogdm9pZCB7XG4gICAgdGhpcy5mb2xsb3dNYXN0ZXJVc2VDYXNlLnN0YXJ0Rm9sbG93KG0ubmV3VGFiLCBtLmJhY2tncm91bmQpO1xuICB9XG5cbiAgcmVzcG9uc2VDb3VudFRhcmdldHMoXG4gICAgbTogbWVzc2FnZXMuRm9sbG93UmVzcG9uc2VDb3VudFRhcmdldHNNZXNzYWdlLCBzZW5kZXI6IFdpbmRvdyxcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5mb2xsb3dNYXN0ZXJVc2VDYXNlLmNyZWF0ZVNsYXZlSGludHMobS5jb3VudCwgc2VuZGVyKTtcbiAgfVxuXG4gIGtleVByZXNzKG1lc3NhZ2U6IG1lc3NhZ2VzLkZvbGxvd0tleVByZXNzTWVzc2FnZSk6IHZvaWQge1xuICAgIGlmIChtZXNzYWdlLmtleSA9PT0gJ1snICYmIG1lc3NhZ2UuY3RybEtleSkge1xuICAgICAgdGhpcy5mb2xsb3dNYXN0ZXJVc2VDYXNlLmNhbmNlbEZvbGxvdygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZvbGxvd01hc3RlclVzZUNhc2UuZW5xdWV1ZShtZXNzYWdlLmtleSk7XG4gICAgfVxuICB9XG59XG5cbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBGb2xsb3dLZXlSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9Gb2xsb3dLZXlSZXBvc2l0b3J5JztcbmltcG9ydCBGb2xsb3dNYXN0ZXJSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9Gb2xsb3dNYXN0ZXJSZXBvc2l0b3J5JztcbmltcG9ydCBGb2xsb3dTbGF2ZUNsaWVudCBmcm9tICcuLi9jbGllbnQvRm9sbG93U2xhdmVDbGllbnQnO1xuaW1wb3J0IEZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeSBmcm9tICcuLi9jbGllbnQvRm9sbG93U2xhdmVDbGllbnRGYWN0b3J5JztcbmltcG9ydCBTZXR0aW5nUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvU2V0dGluZ1JlcG9zaXRvcnknO1xuaW1wb3J0IEhpbnRLZXlQcm9kdWNlciBmcm9tICcuL0hpbnRLZXlQcm9kdWNlcic7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGxvd01hc3RlclVzZUNhc2Uge1xuICAvLyBUT0RPIE1ha2UgcmVwb3NpdG9yeVxuICBwcml2YXRlIHByb2R1Y2VyOiBIaW50S2V5UHJvZHVjZXIgfCBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoJ0ZvbGxvd0tleVJlcG9zaXRvcnknKVxuICAgIHByaXZhdGUgZm9sbG93S2V5UmVwb3NpdG9yeTogRm9sbG93S2V5UmVwb3NpdG9yeSxcblxuICAgIEBpbmplY3QoJ0ZvbGxvd01hc3RlclJlcG9zaXRvcnknKVxuICAgIHByaXZhdGUgZm9sbG93TWFzdGVyUmVwb3NpdG9yeTogRm9sbG93TWFzdGVyUmVwb3NpdG9yeSxcblxuICAgIEBpbmplY3QoJ1NldHRpbmdSZXBvc2l0b3J5JylcbiAgICBwcml2YXRlIHNldHRpbmdSZXBvc2l0b3J5OiBTZXR0aW5nUmVwb3NpdG9yeSxcblxuICAgIEBpbmplY3QoJ0ZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeScpXG4gICAgcHJpdmF0ZSBmb2xsb3dTbGF2ZUNsaWVudEZhY3Rvcnk6IEZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeSxcbiAgKSB7XG4gICAgdGhpcy5wcm9kdWNlciA9IG51bGw7XG4gIH1cblxuICBzdGFydEZvbGxvdyhuZXdUYWI6IGJvb2xlYW4sIGJhY2tncm91bmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBoaW50Y2hhcnMgPSB0aGlzLnNldHRpbmdSZXBvc2l0b3J5LmdldCgpLnByb3BlcnRpZXMuaGludGNoYXJzO1xuICAgIHRoaXMucHJvZHVjZXIgPSBuZXcgSGludEtleVByb2R1Y2VyKGhpbnRjaGFycyk7XG5cbiAgICB0aGlzLmZvbGxvd0tleVJlcG9zaXRvcnkuY2xlYXJLZXlzKCk7XG4gICAgdGhpcy5mb2xsb3dNYXN0ZXJSZXBvc2l0b3J5LnNldEN1cnJlbnRGb2xsb3dNb2RlKG5ld1RhYiwgYmFja2dyb3VuZCk7XG5cbiAgICBjb25zdCB2aWV3V2lkdGggPSB3aW5kb3cudG9wLmlubmVyV2lkdGg7XG4gICAgY29uc3Qgdmlld0hlaWdodCA9IHdpbmRvdy50b3AuaW5uZXJIZWlnaHQ7XG4gICAgdGhpcy5mb2xsb3dTbGF2ZUNsaWVudEZhY3RvcnkuY3JlYXRlKHdpbmRvdy50b3ApLnJlcXVlc3RIaW50Q291bnQoXG4gICAgICB7IHdpZHRoOiB2aWV3V2lkdGgsIGhlaWdodDogdmlld0hlaWdodCB9LFxuICAgICAgeyB4OiAwLCB5OiAwIH0sXG4gICAgKTtcblxuICAgIGNvbnN0IGZyYW1lRWxlbWVudHMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcmFtZUVsZW1lbnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCBlbGUgPSBmcmFtZUVsZW1lbnRzW2ldIGFzIEhUTUxGcmFtZUVsZW1lbnQgfCBIVE1MSUZyYW1lRWxlbWVudDtcbiAgICAgIGNvbnN0IHsgbGVmdDogZnJhbWVYLCB0b3A6IGZyYW1lWSB9ID0gZWxlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgY2xpZW50ID0gdGhpcy5mb2xsb3dTbGF2ZUNsaWVudEZhY3RvcnkuY3JlYXRlKGVsZS5jb250ZW50V2luZG93ISEpO1xuICAgICAgY2xpZW50LnJlcXVlc3RIaW50Q291bnQoXG4gICAgICAgIHsgd2lkdGg6IHZpZXdXaWR0aCwgaGVpZ2h0OiB2aWV3SGVpZ2h0IH0sXG4gICAgICAgIHsgeDogZnJhbWVYLCB5OiBmcmFtZVkgfSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG4gIGNyZWF0ZVNsYXZlSGludHMoY291bnQ6IG51bWJlciwgc2VuZGVyOiBXaW5kb3cpOiB2b2lkIHtcbiAgICBjb25zdCBwcm9kdWNlZCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgY29uc3QgdGFnID0gdGhpcy5wcm9kdWNlciEhLnByb2R1Y2UoKTtcbiAgICAgIHByb2R1Y2VkLnB1c2godGFnKTtcbiAgICAgIHRoaXMuZm9sbG93TWFzdGVyUmVwb3NpdG9yeS5hZGRUYWcodGFnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkb2MgPSB3aW5kb3cuZG9jdW1lbnQ7XG4gICAgY29uc3Qgdmlld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGggfHwgZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgICBjb25zdCB2aWV3SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICAgIGxldCBwb3MgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICBpZiAoc2VuZGVyICE9PSB3aW5kb3cpIHtcbiAgICAgIGNvbnN0IGZyYW1lRWxlbWVudHMgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaWZyYW1lJyk7XG4gICAgICBjb25zdCBlbGUgPSBBcnJheS5mcm9tKGZyYW1lRWxlbWVudHMpLmZpbmQoZSA9PiBlLmNvbnRlbnRXaW5kb3cgPT09IHNlbmRlcik7XG4gICAgICBpZiAoIWVsZSkge1xuICAgICAgICAvLyBlbGVtZW50cyBvZiB0aGUgc2VuZGVyIGlzIGdvbmVcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBsZWZ0OiBmcmFtZVgsIHRvcDogZnJhbWVZIH0gPSBlbGUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBwb3MgPSB7IHg6IGZyYW1lWCwgeTogZnJhbWVZIH07XG4gICAgfVxuICAgIGNvbnN0IGNsaWVudCA9IHRoaXMuZm9sbG93U2xhdmVDbGllbnRGYWN0b3J5LmNyZWF0ZShzZW5kZXIpO1xuICAgIGNsaWVudC5jcmVhdGVIaW50cyhcbiAgICAgIHsgd2lkdGg6IHZpZXdXaWR0aCwgaGVpZ2h0OiB2aWV3SGVpZ2h0IH0sXG4gICAgICBwb3MsXG4gICAgICBwcm9kdWNlZCxcbiAgICApO1xuICB9XG5cbiAgY2FuY2VsRm9sbG93KCk6IHZvaWQge1xuICAgIHRoaXMuZm9sbG93TWFzdGVyUmVwb3NpdG9yeS5jbGVhclRhZ3MoKTtcbiAgICB0aGlzLmJyb2FkY2FzdFRvU2xhdmVzKChjbGllbnQpID0+IHtcbiAgICAgIGNsaWVudC5jbGVhckhpbnRzKCk7XG4gICAgfSk7XG4gIH1cblxuICBmaWx0ZXIocHJlZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmJyb2FkY2FzdFRvU2xhdmVzKChjbGllbnQpID0+IHtcbiAgICAgIGNsaWVudC5maWx0ZXJIaW50cyhwcmVmaXgpO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUodGFnOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmZvbGxvd01hc3RlclJlcG9zaXRvcnkuY2xlYXJUYWdzKCk7XG5cbiAgICBjb25zdCBuZXdUYWIgPSB0aGlzLmZvbGxvd01hc3RlclJlcG9zaXRvcnkuZ2V0Q3VycmVudE5ld1RhYk1vZGUoKTtcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gdGhpcy5mb2xsb3dNYXN0ZXJSZXBvc2l0b3J5LmdldEN1cnJlbnRCYWNrZ3JvdW5kTW9kZSgpO1xuICAgIHRoaXMuYnJvYWRjYXN0VG9TbGF2ZXMoKGNsaWVudCkgPT4ge1xuICAgICAgY2xpZW50LmFjdGl2YXRlSWZFeGlzdHModGFnLCBuZXdUYWIsIGJhY2tncm91bmQpO1xuICAgICAgY2xpZW50LmNsZWFySGludHMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGVucXVldWUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBzd2l0Y2ggKGtleSkge1xuICAgIGNhc2UgJ0VudGVyJzpcbiAgICAgIHRoaXMuYWN0aXZhdGUodGhpcy5nZXRDdXJyZW50VGFnKCkpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgJ0VzYyc6XG4gICAgICB0aGlzLmNhbmNlbEZvbGxvdygpO1xuICAgICAgcmV0dXJuO1xuICAgIGNhc2UgJ0JhY2tzcGFjZSc6XG4gICAgY2FzZSAnRGVsZXRlJzpcbiAgICAgIHRoaXMuZm9sbG93S2V5UmVwb3NpdG9yeS5wb3BLZXkoKTtcbiAgICAgIHRoaXMuZmlsdGVyKHRoaXMuZ2V0Q3VycmVudFRhZygpKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZvbGxvd0tleVJlcG9zaXRvcnkucHVzaEtleShrZXkpO1xuXG4gICAgY29uc3QgdGFnID0gdGhpcy5nZXRDdXJyZW50VGFnKCk7XG4gICAgY29uc3QgbWF0Y2hlZCA9IHRoaXMuZm9sbG93TWFzdGVyUmVwb3NpdG9yeS5nZXRUYWdzQnlQcmVmaXgodGFnKTtcbiAgICBpZiAobWF0Y2hlZC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2FuY2VsRm9sbG93KCk7XG4gICAgfSBlbHNlIGlmIChtYXRjaGVkLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5hY3RpdmF0ZSh0YWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlcih0YWcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYnJvYWRjYXN0VG9TbGF2ZXMoaGFuZGxlcjogKGNsaWVudDogRm9sbG93U2xhdmVDbGllbnQpID0+IHZvaWQpIHtcbiAgICBjb25zdCBhbGxGcmFtZXMgPSBbd2luZG93LnNlbGZdLmNvbmNhdChBcnJheS5mcm9tKHdpbmRvdy5mcmFtZXMgYXMgYW55KSk7XG4gICAgY29uc3QgY2xpZW50cyA9IGFsbEZyYW1lcy5tYXAodyA9PiB0aGlzLmZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeS5jcmVhdGUodykpO1xuICAgIGZvciAoY29uc3QgY2xpZW50IG9mIGNsaWVudHMpIHtcbiAgICAgIGhhbmRsZXIoY2xpZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRUYWcoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5mb2xsb3dLZXlSZXBvc2l0b3J5LmdldEtleXMoKS5qb2luKCcnKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGludEtleVByb2R1Y2VyIHtcbiAgcHJpdmF0ZSBjaGFyc2V0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBjb3VudGVyOiBudW1iZXJbXTtcblxuICBjb25zdHJ1Y3RvcihjaGFyc2V0OiBzdHJpbmcpIHtcbiAgICBpZiAoY2hhcnNldC5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2NoYXJzZXQgaXMgZW1wdHknKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJzZXQgPSBjaGFyc2V0O1xuICAgIHRoaXMuY291bnRlciA9IFtdO1xuICB9XG5cbiAgcHJvZHVjZSgpOiBzdHJpbmcge1xuICAgIHRoaXMuaW5jcmVtZW50KCk7XG5cbiAgICByZXR1cm4gdGhpcy5jb3VudGVyLm1hcCh4ID0+IHRoaXMuY2hhcnNldFt4XSkuam9pbignJyk7XG4gIH1cblxuICBwcml2YXRlIGluY3JlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBtYXggPSB0aGlzLmNoYXJzZXQubGVuZ3RoIC0gMTtcbiAgICBpZiAodGhpcy5jb3VudGVyLmV2ZXJ5KHggPT4geCA9PT0gbWF4KSkge1xuICAgICAgdGhpcy5jb3VudGVyID0gbmV3IEFycmF5KHRoaXMuY291bnRlci5sZW5ndGggKyAxKS5maWxsKDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuY291bnRlci5yZXZlcnNlKCk7XG4gICAgY29uc3QgbGVuID0gdGhpcy5jaGFyc2V0Lmxlbmd0aDtcbiAgICBsZXQgbnVtID0gdGhpcy5jb3VudGVyLnJlZHVjZSgoeCwgeSwgaW5kZXgpID0+IHggKyB5ICogbGVuICoqIGluZGV4KSArIDE7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50ZXIubGVuZ3RoOyArK2kpIHtcbiAgICAgIHRoaXMuY291bnRlcltpXSA9IG51bSAlIGxlbjtcbiAgICAgIG51bSA9IH5+KG51bSAvIGxlbik7XG4gICAgfVxuICAgIHRoaXMuY291bnRlci5yZXZlcnNlKCk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uLy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5pbXBvcnQgRm9sbG93U2xhdmVVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL0ZvbGxvd1NsYXZlVXNlQ2FzZSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGxvd1NsYXZlQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdXNlY2FzZTogRm9sbG93U2xhdmVVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIGNvdW50VGFyZ2V0cyhtOiBtZXNzYWdlcy5Gb2xsb3dSZXF1ZXN0Q291bnRUYXJnZXRzTWVzc2FnZSk6IHZvaWQge1xuICAgIHRoaXMudXNlY2FzZS5jb3VudFRhcmdldHMobS52aWV3U2l6ZSwgbS5mcmFtZVBvc2l0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUhpbnRzKG06IG1lc3NhZ2VzLkZvbGxvd0NyZWF0ZUhpbnRzTWVzc2FnZSk6IHZvaWQge1xuICAgIHRoaXMudXNlY2FzZS5jcmVhdGVIaW50cyhtLnZpZXdTaXplLCBtLmZyYW1lUG9zaXRpb24sIG0udGFncyk7XG4gIH1cblxuICBzaG93SGludHMobTogbWVzc2FnZXMuRm9sbG93U2hvd0hpbnRzTWVzc2FnZSk6IHZvaWQge1xuICAgIHRoaXMudXNlY2FzZS5zaG93SGludHMobS5wcmVmaXgpO1xuICB9XG5cbiAgYWN0aXZhdGUobTogbWVzc2FnZXMuRm9sbG93QWN0aXZhdGVNZXNzYWdlKTogdm9pZCB7XG4gICAgdGhpcy51c2VjYXNlLmFjdGl2YXRlKG0udGFnLCBtLm5ld1RhYiwgbS5iYWNrZ3JvdW5kKTtcbiAgfVxuXG4gIGNsZWFyKF9tOiBtZXNzYWdlcy5Gb2xsb3dSZW1vdmVIaW50c01lc3NhZ2UpIHtcbiAgICB0aGlzLnVzZWNhc2UuY2xlYXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBGb2xsb3dTbGF2ZVVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvRm9sbG93U2xhdmVVc2VDYXNlJztcbmltcG9ydCBLZXkgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL0tleSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGxvd0tleUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZvbGxvd1NsYXZlVXNlQ2FzZTogRm9sbG93U2xhdmVVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIHByZXNzKGtleTogS2V5KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmZvbGxvd1NsYXZlVXNlQ2FzZS5pc0ZvbGxvd01vZGUoKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZm9sbG93U2xhdmVVc2VDYXNlLnNlbmRLZXkoa2V5KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL3NoYXJlZC91dGlscy9kb20nO1xuaW1wb3J0IEtleSBmcm9tICcuLi9zaGFyZWQvc2V0dGluZ3MvS2V5JztcblxuY29uc3QgY2FuY2VsS2V5ID0gKGU6IEtleWJvYXJkRXZlbnQpOiBib29sZWFuID0+IHtcbiAgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIGlmIChlLmtleSA9PT0gJ1snICYmIGUuY3RybEtleSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmNvbnN0IG1vZGlmaWVkS2V5TmFtZSA9IChuYW1lOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBpZiAobmFtZSA9PT0gJyAnKSB7XG4gICAgcmV0dXJuICdTcGFjZSc7XG4gIH1cbiAgaWYgKG5hbWUubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0VzY2FwZScpIHtcbiAgICByZXR1cm4gJ0VzYyc7XG4gIH1cbiAgcmV0dXJuIG5hbWU7XG59O1xuXG4vLyB2aXNpYmxlIGZvciB0ZXN0aW5nXG5leHBvcnQgY29uc3Qga2V5RnJvbUtleWJvYXJkRXZlbnQgPSAoZTogS2V5Ym9hcmRFdmVudCk6IEtleSA9PiB7XG4gIGNvbnN0IGtleSA9IG1vZGlmaWVkS2V5TmFtZShlLmtleSk7XG4gIGxldCBzaGlmdCA9IGUuc2hpZnRLZXk7XG4gIGlmIChrZXkubGVuZ3RoID09PSAxICYmIGtleS50b1VwcGVyQ2FzZSgpID09PSBrZXkudG9Mb3dlckNhc2UoKSkge1xuICAgIC8vIG1ha2Ugc2hpZnQgZmFsc2UgZm9yIHN5bWJvbHMgdG8gZW5hYmxlIGtleSBiaW5kaW5ncyBieSBzeW1ib2xkIGtleXMuXG4gICAgLy8gQnV0IHRoaXMgbGltaXRzIGtleSBiaW5kaW5ncyBieSBzeW1ib2wga2V5cyB3aXRoIFNoaWZ0XG4gICAgLy8gKHN1Y2ggYXMgU2hpZnQrJD4uXG4gICAgc2hpZnQgPSBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBuZXcgS2V5KHtcbiAgICBrZXk6IG1vZGlmaWVkS2V5TmFtZShlLmtleSksXG4gICAgc2hpZnQ6IHNoaWZ0LFxuICAgIGN0cmw6IGUuY3RybEtleSxcbiAgICBhbHQ6IGUuYWx0S2V5LFxuICAgIG1ldGE6IGUubWV0YUtleSxcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dERyaXZlciB7XG4gIHByaXZhdGUgcHJlc3NlZDoge1trZXk6IHN0cmluZ106IHN0cmluZ30gPSB7fTtcblxuICBwcml2YXRlIG9uS2V5TGlzdGVuZXJzOiAoKGtleTogS2V5KSA9PiBib29sZWFuKVtdID0gW107XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRWxlbWVudCkge1xuICAgIHRoaXMucHJlc3NlZCA9IHt9O1xuICAgIHRoaXMub25LZXlMaXN0ZW5lcnMgPSBbXTtcblxuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcy5iaW5kKHRoaXMpKTtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duLmJpbmQodGhpcykpO1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMub25LZXlVcC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIG9uS2V5KGNiOiAoa2V5OiBLZXkpID0+IGJvb2xlYW4pIHtcbiAgICB0aGlzLm9uS2V5TGlzdGVuZXJzLnB1c2goY2IpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbktleVByZXNzKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcmVzc2VkW2Uua2V5XSAmJiB0aGlzLnByZXNzZWRbZS5rZXldICE9PSAna2V5cHJlc3MnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJlc3NlZFtlLmtleV0gPSAna2V5cHJlc3MnO1xuICAgIHRoaXMuY2FwdHVyZShlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBpZiAodGhpcy5wcmVzc2VkW2Uua2V5XSAmJiB0aGlzLnByZXNzZWRbZS5rZXldICE9PSAna2V5ZG93bicpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5wcmVzc2VkW2Uua2V5XSA9ICdrZXlkb3duJztcbiAgICB0aGlzLmNhcHR1cmUoZSk7XG4gIH1cblxuICBwcml2YXRlIG9uS2V5VXAoZTogS2V5Ym9hcmRFdmVudCkge1xuICAgIGRlbGV0ZSB0aGlzLnByZXNzZWRbZS5rZXldO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1zdGF0ZW1lbnRzXG4gIHByaXZhdGUgY2FwdHVyZShlOiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmZyb21JbnB1dCh0YXJnZXQpKSB7XG4gICAgICBpZiAoY2FuY2VsS2V5KGUpICYmIHRhcmdldC5ibHVyKSB7XG4gICAgICAgIHRhcmdldC5ibHVyKCk7XG4gICAgICB9XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChbJ1NoaWZ0JywgJ0NvbnRyb2wnLCAnQWx0JywgJ09TJ10uaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAvLyBwcmVzc2luZyBvbmx5IG1ldGEga2V5IGlzIGlnbm9yZWRcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBrZXkgPSBrZXlGcm9tS2V5Ym9hcmRFdmVudChlKTtcbiAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMub25LZXlMaXN0ZW5lcnMpIHtcbiAgICAgIGNvbnN0IHN0b3AgPSBsaXN0ZW5lcihrZXkpO1xuICAgICAgaWYgKHN0b3ApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZyb21JbnB1dChlOiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8XG4gICAgICBlIGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCB8fFxuICAgICAgZSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50IHx8XG4gICAgICBkb20uaXNDb250ZW50RWRpdGFibGUoZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSAnLi4vLi4vc2hhcmVkL29wZXJhdGlvbnMnO1xuaW1wb3J0IEtleW1hcFVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvS2V5bWFwVXNlQ2FzZSc7XG5pbXBvcnQgQWRkb25FbmFibGVkVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9BZGRvbkVuYWJsZWRVc2VDYXNlJztcbmltcG9ydCBGaW5kU2xhdmVVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL0ZpbmRTbGF2ZVVzZUNhc2UnO1xuaW1wb3J0IFNjcm9sbFVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvU2Nyb2xsVXNlQ2FzZSc7XG5pbXBvcnQgRm9jdXNVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL0ZvY3VzVXNlQ2FzZSc7XG5pbXBvcnQgQ2xpcGJvYXJkVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9DbGlwYm9hcmRVc2VDYXNlJztcbmltcG9ydCBPcGVyYXRpb25DbGllbnQgZnJvbSAnLi4vY2xpZW50L09wZXJhdGlvbkNsaWVudCc7XG5pbXBvcnQgTWFya0tleXlVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL01hcmtLZXlVc2VDYXNlJztcbmltcG9ydCBGb2xsb3dNYXN0ZXJDbGllbnQgZnJvbSAnLi4vY2xpZW50L0ZvbGxvd01hc3RlckNsaWVudCc7XG5pbXBvcnQgS2V5IGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9LZXknO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXltYXBDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBrZXltYXBVc2VDYXNlOiBLZXltYXBVc2VDYXNlLFxuICAgIHByaXZhdGUgYWRkb25FbmFibGVkVXNlQ2FzZTogQWRkb25FbmFibGVkVXNlQ2FzZSxcbiAgICBwcml2YXRlIGZpbmRTbGF2ZVVzZUNhc2U6IEZpbmRTbGF2ZVVzZUNhc2UsXG4gICAgcHJpdmF0ZSBzY3JvbGxVc2VDYXNlOiBTY3JvbGxVc2VDYXNlLFxuICAgIHByaXZhdGUgZm9jdXNVc2VDYXNlOiBGb2N1c1VzZUNhc2UsXG4gICAgcHJpdmF0ZSBjbGlwYmFvcmRVc2VDYXNlOiBDbGlwYm9hcmRVc2VDYXNlLFxuICAgIHByaXZhdGUgbWFya0tleVVzZUNhc2U6IE1hcmtLZXl5VXNlQ2FzZSxcblxuICAgIEBpbmplY3QoJ09wZXJhdGlvbkNsaWVudCcpXG4gICAgcHJpdmF0ZSBvcGVyYXRpb25DbGllbnQ6IE9wZXJhdGlvbkNsaWVudCxcblxuICAgIEBpbmplY3QoJ0ZvbGxvd01hc3RlckNsaWVudCcpXG4gICAgcHJpdmF0ZSBmb2xsb3dNYXN0ZXJDbGllbnQ6IEZvbGxvd01hc3RlckNsaWVudCxcbiAgKSB7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eSwgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICBwcmVzcyhrZXk6IEtleSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IG5leHRPcCA9IHRoaXMua2V5bWFwVXNlQ2FzZS5uZXh0T3BzKGtleSk7XG4gICAgaWYgKG5leHRPcCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmICghb3BlcmF0aW9ucy5pc05SZXBlYXRhYmxlKG5leHRPcC5vcC50eXBlKSkge1xuICAgICAgbmV4dE9wLnJlcGVhdCA9IDE7XG4gICAgfVxuXG4gICAgY29uc3QgZG9GdW5jID0gKChvcDogb3BlcmF0aW9ucy5PcGVyYXRpb24pID0+IHtcbiAgICAgIHN3aXRjaCAob3AudHlwZSkge1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkFERE9OX0VOQUJMRTpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuYWRkb25FbmFibGVkVXNlQ2FzZS5lbmFibGUoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5BRERPTl9ESVNBQkxFOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5hZGRvbkVuYWJsZWRVc2VDYXNlLmRpc2FibGUoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5BRERPTl9UT0dHTEVfRU5BQkxFRDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuYWRkb25FbmFibGVkVXNlQ2FzZS50b2dnbGUoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5GSU5EX05FWFQ6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLmZpbmRTbGF2ZVVzZUNhc2UuZmluZE5leHQoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5GSU5EX1BSRVY6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLmZpbmRTbGF2ZVVzZUNhc2UuZmluZFByZXYoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5TQ1JPTExfVkVSVElDQUxMWTpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuc2Nyb2xsVXNlQ2FzZS5zY3JvbGxWZXJ0aWNhbGx5KG9wLmNvdW50KTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5TQ1JPTExfSE9SSVpPTkFMTFk6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnNjcm9sbFVzZUNhc2Uuc2Nyb2xsSG9yaXpvbmFsbHkob3AuY291bnQpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlNDUk9MTF9QQUdFUzpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuc2Nyb2xsVXNlQ2FzZS5zY3JvbGxQYWdlcyhvcC5jb3VudCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuU0NST0xMX1RPUDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuc2Nyb2xsVXNlQ2FzZS5zY3JvbGxUb1RvcCgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlNDUk9MTF9CT1RUT006XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnNjcm9sbFVzZUNhc2Uuc2Nyb2xsVG9Cb3R0b20oKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5TQ1JPTExfSE9NRTpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuc2Nyb2xsVXNlQ2FzZS5zY3JvbGxUb0hvbWUoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5TQ1JPTExfRU5EOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5zY3JvbGxVc2VDYXNlLnNjcm9sbFRvRW5kKCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuRk9MTE9XX1NUQVJUOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5mb2xsb3dNYXN0ZXJDbGllbnQuc3RhcnRGb2xsb3coXG4gICAgICAgICAgb3AubmV3VGFiLCBvcC5iYWNrZ3JvdW5kKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5NQVJLX1NFVF9QUkVGSVg6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm1hcmtLZXlVc2VDYXNlLmVuYWJsZVNldE1vZGUoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5NQVJLX0pVTVBfUFJFRklYOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5tYXJrS2V5VXNlQ2FzZS5lbmFibGVKdW1wTW9kZSgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkZPQ1VTX0lOUFVUOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5mb2N1c1VzZUNhc2UuZm9jdXNGaXJzdElucHV0KCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuVVJMU19ZQU5LOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5jbGlwYmFvcmRVc2VDYXNlLnlhbmtDdXJyZW50VVJMKCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuVVJMU19QQVNURTpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuY2xpcGJhb3JkVXNlQ2FzZS5vcGVuT3JTZWFyY2goXG4gICAgICAgICAgb3AubmV3VGFiID8gb3AubmV3VGFiIDogZmFsc2UsXG4gICAgICAgICk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9KShuZXh0T3Aub3ApO1xuXG4gICAgaWYgKGRvRnVuYyA9PT0gbnVsbCkge1xuICAgICAgLy8gRG8gbm90IGF3YWl0IGFzeW5jaHJvbm91cyBtZXRob2RzIHRvIHJldHVybiBhIGJvb2xlYW4gaW1taWRpYXRlbHkuIFRoZVxuICAgICAgLy8gY2FsbGVyIHJlcXVpcmVzIHRoZSBzeW5jaHJvbm91cyByZXNwb25zZSBmcm9tIHRoZSBjYWxsYmFjayB0byBpZGVudGlmeVxuICAgICAgLy8gdG8gY29udGludWUgb2YgYWJhbmRvbiB0aGUgZXZlbnQgcHJvcGFnYXRpb25zLlxuICAgICAgdGhpcy5vcGVyYXRpb25DbGllbnQuZXhlY0JhY2tncm91bmRPcChuZXh0T3AucmVwZWF0LCBuZXh0T3Aub3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5leHRPcC5yZXBlYXQ7ICsraSkge1xuICAgICAgICBkb0Z1bmMoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBLZXltYXBSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9LZXltYXBSZXBvc2l0b3J5JztcbmltcG9ydCBTZXR0aW5nUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvU2V0dGluZ1JlcG9zaXRvcnknO1xuaW1wb3J0IEFkZG9uRW5hYmxlZFJlcG9zaXRvcnkgZnJvbSAnLi4vcmVwb3NpdG9yaWVzL0FkZG9uRW5hYmxlZFJlcG9zaXRvcnknO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuLi8uLi9zaGFyZWQvb3BlcmF0aW9ucyc7XG5pbXBvcnQgS2V5bWFwcyBmcm9tICcuLi8uLi9zaGFyZWQvc2V0dGluZ3MvS2V5bWFwcyc7XG5pbXBvcnQgS2V5IGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9LZXknO1xuaW1wb3J0IEtleVNlcXVlbmNlIGZyb20gJy4uL2RvbWFpbnMvS2V5U2VxdWVuY2UnO1xuaW1wb3J0IEFkZHJlc3NSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9BZGRyZXNzUmVwb3NpdG9yeSc7XG5cbmNvbnN0IHJlc2VydmVkS2V5bWFwcyA9IEtleW1hcHMuZnJvbUpTT04oe1xuICAnPEVzYz4nOiB7IHR5cGU6IG9wZXJhdGlvbnMuQ0FOQ0VMIH0sXG4gICc8Qy1bPic6IHsgdHlwZTogb3BlcmF0aW9ucy5DQU5DRUwgfSxcbn0pO1xuXG5jb25zdCBlbmFibGVBZGRvbk9wcyA9IFtcbiAgb3BlcmF0aW9ucy5BRERPTl9FTkFCTEUsXG4gIG9wZXJhdGlvbnMuQURET05fVE9HR0xFX0VOQUJMRUQsXG5dO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBLZXltYXBVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnS2V5bWFwUmVwb3NpdG9yeScpXG4gICAgcHJpdmF0ZSByZXBvc2l0b3J5OiBLZXltYXBSZXBvc2l0b3J5LFxuXG4gICAgQGluamVjdCgnU2V0dGluZ1JlcG9zaXRvcnknKVxuICAgIHByaXZhdGUgc2V0dGluZ1JlcG9zaXRvcnk6IFNldHRpbmdSZXBvc2l0b3J5LFxuXG4gICAgQGluamVjdCgnQWRkb25FbmFibGVkUmVwb3NpdG9yeScpXG4gICAgcHJpdmF0ZSBhZGRvbkVuYWJsZWRSZXBvc2l0b3J5OiBBZGRvbkVuYWJsZWRSZXBvc2l0b3J5LFxuXG4gICAgQGluamVjdCgnQWRkcmVzc1JlcG9zaXRvcnknKVxuICAgIHByaXZhdGUgYWRkcmVzc1JlcG9zaXRvcnk6IEFkZHJlc3NSZXBvc2l0b3J5LFxuICApIHtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtc3RhdGVtZW50c1xuICBuZXh0T3BzKGtleTogS2V5KTogeyByZXBlYXQ6IG51bWJlciwgb3A6IG9wZXJhdGlvbnMuT3BlcmF0aW9uIH0gfCBudWxsIHtcbiAgICBjb25zdCBzZXF1ZW5jZSA9IHRoaXMucmVwb3NpdG9yeS5lbnF1ZXVlS2V5KGtleSk7XG4gICAgY29uc3QgYmFzZVNlcXVlbmNlID0gc2VxdWVuY2UudHJpbU51bWVyaWNQcmVmaXgoKTtcbiAgICBjb25zdCBrZXltYXBzID0gdGhpcy5rZXltYXBFbnRpdHlNYXAoKTtcbiAgICBjb25zdCBtYXRjaGVkID0ga2V5bWFwcy5maWx0ZXIoKFtzZXFdKSA9PiBzZXEuc3RhcnRzV2l0aChzZXF1ZW5jZSkpO1xuICAgIGNvbnN0IGJhc2VNYXRjaGVkID0ga2V5bWFwcy5maWx0ZXIoKFtzZXFdKSA9PiBzZXEuc3RhcnRzV2l0aChiYXNlU2VxdWVuY2UpKTtcblxuICAgIGlmIChiYXNlU2VxdWVuY2UubGVuZ3RoKCkgPT09IDEgJiYgdGhpcy5ibGFja2xpc3RLZXkoa2V5KSkge1xuICAgICAgLy8gaWdub3JlIGlmIHRoZSBpbnB1dCBzdGFydHMgd2l0aCBibGFjayBsaXN0IGtleXNcbiAgICAgIHRoaXMucmVwb3NpdG9yeS5jbGVhcigpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKG1hdGNoZWQubGVuZ3RoID09PSAxICYmXG4gICAgICAgIHNlcXVlbmNlLmxlbmd0aCgpID09PSBtYXRjaGVkWzBdWzBdLmxlbmd0aCgpKSB7XG4gICAgICAvLyBrZXlzIGFyZSBtYXRjaGVkIHdpdGggYW4gb3BlcmF0aW9uXG4gICAgICB0aGlzLnJlcG9zaXRvcnkuY2xlYXIoKTtcbiAgICAgIHJldHVybiB7IHJlcGVhdDogMSwgb3A6IG1hdGNoZWRbMF1bMV0gfTtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgYmFzZU1hdGNoZWQubGVuZ3RoID09PSAxICYmXG4gICAgICAgIGJhc2VTZXF1ZW5jZS5sZW5ndGgoKSA9PT0gYmFzZU1hdGNoZWRbMF1bMF0ubGVuZ3RoKCkpIHtcbiAgICAgIC8vIGtleXMgYXJlIG1hdGNoZWQgd2l0aCBhbiBvcGVyYXRpb24gd2l0aCBhIG51bWVyaWMgcHJlZml4XG4gICAgICB0aGlzLnJlcG9zaXRvcnkuY2xlYXIoKTtcbiAgICAgIHJldHVybiB7IHJlcGVhdDogc2VxdWVuY2UucmVwZWF0Q291bnQoKSwgb3A6IGJhc2VNYXRjaGVkWzBdWzFdIH07XG4gICAgfSBlbHNlIGlmIChtYXRjaGVkLmxlbmd0aCA+PSAxIHx8IGJhc2VNYXRjaGVkLmxlbmd0aCA+PSAxKSB7XG4gICAgICAvLyBrZXlzIGFyZSBtYXRjaGVkIHdpdGggYW4gb3BlcmF0aW9uJ3MgcHJlZml4XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBtYXRjaGVkIHdpdGggbm8gb3BlcmF0aW9uc1xuICAgIHRoaXMucmVwb3NpdG9yeS5jbGVhcigpO1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcHJpdmF0ZSBrZXltYXBFbnRpdHlNYXAoKTogW0tleVNlcXVlbmNlLCBvcGVyYXRpb25zLk9wZXJhdGlvbl1bXSB7XG4gICAgY29uc3Qga2V5bWFwcyA9IHRoaXMuc2V0dGluZ1JlcG9zaXRvcnkuZ2V0KCkua2V5bWFwcy5jb21iaW5lKHJlc2VydmVkS2V5bWFwcyk7XG4gICAgbGV0IGVudHJpZXMgPSBrZXltYXBzLmVudHJpZXMoKS5tYXAoXG4gICAgICAoW2tleXMsIG9wXSkgPT4gW0tleVNlcXVlbmNlLmZyb21NYXBLZXlzKGtleXMpLCBvcF1cbiAgICApIGFzIFtLZXlTZXF1ZW5jZSwgb3BlcmF0aW9ucy5PcGVyYXRpb25dW107XG4gICAgaWYgKCF0aGlzLmFkZG9uRW5hYmxlZFJlcG9zaXRvcnkuZ2V0KCkpIHtcbiAgICAgIC8vIGF2YWlsYWJsZSBrZXltYXBzIGFyZSBvbmx5IEFERE9OX0VOQUJMRSBhbmQgQURET05fVE9HR0xFX0VOQUJMRUQgaWZcbiAgICAgIC8vIHRoZSBhZGRvbiBkaXNhYmxlZFxuICAgICAgZW50cmllcyA9IGVudHJpZXMuZmlsdGVyKFxuICAgICAgICAoW19zZXEsIHsgdHlwZSB9XSkgPT4gZW5hYmxlQWRkb25PcHMuaW5jbHVkZXModHlwZSlcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgcHJpdmF0ZSBibGFja2xpc3RLZXkoa2V5OiBLZXkpOiBib29sZWFuIHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmFkZHJlc3NSZXBvc2l0b3J5LmdldEN1cnJlbnRVUkwoKTtcbiAgICBjb25zdCBibGFja2xpc3QgPSB0aGlzLnNldHRpbmdSZXBvc2l0b3J5LmdldCgpLmJsYWNrbGlzdDtcbiAgICByZXR1cm4gYmxhY2tsaXN0LmluY2x1ZGVLZXkodXJsLCBrZXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgRmluZE1hc3RlckNsaWVudCBmcm9tICcuLi9jbGllbnQvRmluZE1hc3RlckNsaWVudCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRTbGF2ZVVzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KCdGaW5kTWFzdGVyQ2xpZW50JykgcHJpdmF0ZSBmaW5kTWFzdGVyQ2xpZW50OiBGaW5kTWFzdGVyQ2xpZW50LFxuICApIHtcbiAgfVxuXG4gIGZpbmROZXh0KCkge1xuICAgIHRoaXMuZmluZE1hc3RlckNsaWVudC5maW5kTmV4dCgpO1xuICB9XG5cbiAgZmluZFByZXYoKSB7XG4gICAgdGhpcy5maW5kTWFzdGVyQ2xpZW50LmZpbmRQcmV2KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBTY3JvbGxQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9TY3JvbGxQcmVzZW50ZXInO1xuaW1wb3J0IFNldHRpbmdSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFVzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KCdTY3JvbGxQcmVzZW50ZXInKSBwcml2YXRlIHByZXNlbnRlcjogU2Nyb2xsUHJlc2VudGVyLFxuICAgIEBpbmplY3QoJ1NldHRpbmdSZXBvc2l0b3J5JykgcHJpdmF0ZSBzZXR0aW5nUmVwb3NpdG9yeTogU2V0dGluZ1JlcG9zaXRvcnksXG4gICkge1xuICB9XG5cbiAgc2Nyb2xsVmVydGljYWxseShjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc21vb3RoID0gdGhpcy5nZXRTbW9vdGhTY3JvbGwoKTtcbiAgICB0aGlzLnByZXNlbnRlci5zY3JvbGxWZXJ0aWNhbGx5KGNvdW50LCBzbW9vdGgpO1xuICB9XG5cbiAgc2Nyb2xsSG9yaXpvbmFsbHkoY291bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHNtb290aCA9IHRoaXMuZ2V0U21vb3RoU2Nyb2xsKCk7XG4gICAgdGhpcy5wcmVzZW50ZXIuc2Nyb2xsSG9yaXpvbmFsbHkoY291bnQsIHNtb290aCk7XG4gIH1cblxuICBzY3JvbGxQYWdlcyhjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc21vb3RoID0gdGhpcy5nZXRTbW9vdGhTY3JvbGwoKTtcbiAgICB0aGlzLnByZXNlbnRlci5zY3JvbGxQYWdlcyhjb3VudCwgc21vb3RoKTtcbiAgfVxuXG4gIHNjcm9sbFRvVG9wKCk6IHZvaWQge1xuICAgIGNvbnN0IHNtb290aCA9IHRoaXMuZ2V0U21vb3RoU2Nyb2xsKCk7XG4gICAgdGhpcy5wcmVzZW50ZXIuc2Nyb2xsVG9Ub3Aoc21vb3RoKTtcbiAgfVxuXG4gIHNjcm9sbFRvQm90dG9tKCk6IHZvaWQge1xuICAgIGNvbnN0IHNtb290aCA9IHRoaXMuZ2V0U21vb3RoU2Nyb2xsKCk7XG4gICAgdGhpcy5wcmVzZW50ZXIuc2Nyb2xsVG9Cb3R0b20oc21vb3RoKTtcbiAgfVxuXG4gIHNjcm9sbFRvSG9tZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzbW9vdGggPSB0aGlzLmdldFNtb290aFNjcm9sbCgpO1xuICAgIHRoaXMucHJlc2VudGVyLnNjcm9sbFRvSG9tZShzbW9vdGgpO1xuICB9XG5cbiAgc2Nyb2xsVG9FbmQoKTogdm9pZCB7XG4gICAgY29uc3Qgc21vb3RoID0gdGhpcy5nZXRTbW9vdGhTY3JvbGwoKTtcbiAgICB0aGlzLnByZXNlbnRlci5zY3JvbGxUb0VuZChzbW9vdGgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRTbW9vdGhTY3JvbGwoKTogYm9vbGVhbiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnNldHRpbmdSZXBvc2l0b3J5LmdldCgpO1xuICAgIHJldHVybiBzZXR0aW5ncy5wcm9wZXJ0aWVzLnNtb290aHNjcm9sbDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IEZvY3VzUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvRm9jdXNQcmVzZW50ZXInO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb2N1c1VzZUNhc2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnRm9jdXNQcmVzZW50ZXInKSBwcml2YXRlIHByZXNlbnRlcjogRm9jdXNQcmVzZW50ZXIsXG4gICkge1xuICB9XG5cbiAgZm9jdXNGaXJzdElucHV0KCkge1xuICAgIHRoaXMucHJlc2VudGVyLmZvY3VzRmlyc3RFbGVtZW50KCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUsIGluamVjdCB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCAqIGFzIHVybHMgZnJvbSAnLi4vLi4vc2hhcmVkL3VybHMnO1xuaW1wb3J0IENsaXBib2FyZFJlcG9zaXRvcnkgZnJvbSAnLi4vcmVwb3NpdG9yaWVzL0NsaXBib2FyZFJlcG9zaXRvcnknO1xuaW1wb3J0IFNldHRpbmdSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5pbXBvcnQgQ29uc29sZUNsaWVudCBmcm9tICcuLi9jbGllbnQvQ29uc29sZUNsaWVudCc7XG5pbXBvcnQgT3BlcmF0aW9uQ2xpZW50IGZyb20gJy4uL2NsaWVudC9PcGVyYXRpb25DbGllbnQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGlwYm9hcmRVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnQ2xpcGJvYXJkUmVwb3NpdG9yeScpIHByaXZhdGUgcmVwb3NpdG9yeTogQ2xpcGJvYXJkUmVwb3NpdG9yeSxcbiAgICBAaW5qZWN0KCdTZXR0aW5nUmVwb3NpdG9yeScpIHByaXZhdGUgc2V0dGluZ1JlcG9zaXRvcnk6IFNldHRpbmdSZXBvc2l0b3J5LFxuICAgIEBpbmplY3QoJ0NvbnNvbGVDbGllbnQnKSBwcml2YXRlIGNvbnNvbGVDbGllbnQ6IENvbnNvbGVDbGllbnQsXG4gICAgQGluamVjdCgnT3BlcmF0aW9uQ2xpZW50JykgcHJpdmF0ZSBvcGVyYXRpb25DbGluZXQ6IE9wZXJhdGlvbkNsaWVudCxcbiAgKSB7XG4gIH1cblxuICBhc3luYyB5YW5rQ3VycmVudFVSTCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIHRoaXMucmVwb3NpdG9yeS53cml0ZSh1cmwpO1xuICAgIGF3YWl0IHRoaXMuY29uc29sZUNsaWVudC5pbmZvKCdZYW5rZWQgJyArIHVybCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh1cmwpO1xuICB9XG5cbiAgYXN5bmMgb3Blbk9yU2VhcmNoKG5ld1RhYjogYm9vbGVhbik6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHNlYXJjaCA9IHRoaXMuc2V0dGluZ1JlcG9zaXRvcnkuZ2V0KCkuc2VhcmNoO1xuICAgIGNvbnN0IHRleHQgPSB0aGlzLnJlcG9zaXRvcnkucmVhZCgpO1xuICAgIGNvbnN0IHVybCA9IHVybHMuc2VhcmNoVXJsKHRleHQsIHNlYXJjaCk7XG5cbiAgICAvLyBUT0RPOiBSZXBlYXQgcGFzdGluZyBmcm9tIGNsaXBib2FyZCBpbnN0ZWFkIG9mIG9wZW5pbmcgYSBjZXJ0YWluIHVybC5cbiAgICAvLyAnUmVwZWF0IGxhc3QnIGNvbW1hbmQgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIGJhY2tncm91bmQgc2NyaXB0IGFuZCBjYW5ub3RcbiAgICAvLyBhY2Nlc3MgdG8gY2xpcGJvYXJkIHVudGlsIEZpcmVmb3ggNjMuXG4gICAgYXdhaXQgdGhpcy5vcGVyYXRpb25DbGluZXQuaW50ZXJuYWxPcGVuVXJsKHVybCwgbmV3VGFiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBNYXJrVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9NYXJrVXNlQ2FzZSc7XG5pbXBvcnQgTWFya0tleXlVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL01hcmtLZXlVc2VDYXNlJztcbmltcG9ydCBLZXkgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL0tleSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtLZXlDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBtYXJrVXNlQ2FzZTogTWFya1VzZUNhc2UsXG4gICAgcHJpdmF0ZSBtYXJrS2V5VXNlQ2FzZTogTWFya0tleXlVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIHByZXNzKGtleTogS2V5KTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMubWFya0tleVVzZUNhc2UuaXNTZXRNb2RlKCkpIHtcbiAgICAgIHRoaXMubWFya1VzZUNhc2Uuc2V0KGtleS5rZXkpO1xuICAgICAgdGhpcy5tYXJrS2V5VXNlQ2FzZS5kaXNhYmxlU2V0TW9kZSgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLm1hcmtLZXlVc2VDYXNlLmlzSnVtcE1vZGUoKSkge1xuICAgICAgdGhpcy5tYXJrVXNlQ2FzZS5qdW1wKGtleS5rZXkpO1xuICAgICAgdGhpcy5tYXJrS2V5VXNlQ2FzZS5kaXNhYmxlSnVtcE1vZGUoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuaW1wb3J0IEFkZG9uRW5hYmxlZFVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvQWRkb25FbmFibGVkVXNlQ2FzZSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZG9uRW5hYmxlZENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFkZG9uRW5hYmxlZFVzZUNhc2U6IEFkZG9uRW5hYmxlZFVzZUNhc2UsXG4gICkge1xuICB9XG5cbiAgZ2V0QWRkb25FbmFibGVkKFxuICAgIF9tZXNzYWdlOiBtZXNzYWdlcy5BZGRvbkVuYWJsZWRRdWVyeU1lc3NhZ2UsXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IGVuYWJsZWQgPSB0aGlzLmFkZG9uRW5hYmxlZFVzZUNhc2UuZ2V0RW5hYmxlZCgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW5hYmxlZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgQWRkb25FbmFibGVkVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9BZGRvbkVuYWJsZWRVc2VDYXNlJztcbmltcG9ydCBTZXR0aW5nVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9TZXR0aW5nVXNlQ2FzZSc7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhZGRvbkVuYWJsZWRVc2VDYXNlOiBBZGRvbkVuYWJsZWRVc2VDYXNlLFxuICAgIHByaXZhdGUgc2V0dGluZ1VzZUNhc2U6IFNldHRpbmdVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIGluaXRTZXR0aW5ncygpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY3VycmVudCA9IGF3YWl0IHRoaXMuc2V0dGluZ1VzZUNhc2UucmVsb2FkKCk7XG4gICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gY3VycmVudC5ibGFja2xpc3QuaW5jbHVkZXNFbnRpcmVCbGFja2xpc3QodXJsKTtcbiAgICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgICBhd2FpdCB0aGlzLmFkZG9uRW5hYmxlZFVzZUNhc2UuZGlzYWJsZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hZGRvbkVuYWJsZWRVc2VDYXNlLmVuYWJsZSgpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIC8vIFNvbWV0aW1lIHNlbmRNZXNzYWdlIGZhaWxzIHdoZW4gYmFja2dyb3VuZCBzY3JpcHQgaXMgbm90IHJlYWR5LlxuICAgICAgY29uc29sZS53YXJuKGUpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmluaXRTZXR0aW5ncygpLCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbG9hZFNldHRpbmdzKF9tZXNzYWdlOiBtZXNzYWdlcy5NZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgdGhpcy5zZXR0aW5nVXNlQ2FzZS5yZWxvYWQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IFNldHRpbmdSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5pbXBvcnQgU2V0dGluZ0NsaWVudCBmcm9tICcuLi9jbGllbnQvU2V0dGluZ0NsaWVudCc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL1NldHRpbmdzJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1VzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAaW5qZWN0KCdTZXR0aW5nUmVwb3NpdG9yeScpIHByaXZhdGUgcmVwb3NpdG9yeTogU2V0dGluZ1JlcG9zaXRvcnksXG4gICAgQGluamVjdCgnU2V0dGluZ0NsaWVudCcpIHByaXZhdGUgY2xpZW50OiBTZXR0aW5nQ2xpZW50LFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIHJlbG9hZCgpOiBQcm9taXNlPFNldHRpbmdzPiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCB0aGlzLmNsaWVudC5sb2FkKCk7XG4gICAgdGhpcy5yZXBvc2l0b3J5LnNldChzZXR0aW5ncyk7XG4gICAgcmV0dXJuIHNldHRpbmdzO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IENvbnNvbGVGcmFtZVVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvQ29uc29sZUZyYW1lVXNlQ2FzZSc7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25zb2xlRnJhbWVDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25zb2xlRnJhbWVVc2VDYXNlOiBDb25zb2xlRnJhbWVVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIHVuZm9jdXMoX21lc3NhZ2U6IG1lc3NhZ2VzLk1lc3NhZ2UpIHtcbiAgICB0aGlzLmNvbnNvbGVGcmFtZVVzZUNhc2UudW5mb2N1cygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlLCBpbmplY3QgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgQ29uc29sZUZyYW1lUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvQ29uc29sZUZyYW1lUHJlc2VudGVyJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uc29sZUZyYW1lVXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBpbmplY3QoJ0NvbnNvbGVGcmFtZVByZXNlbnRlcicpXG4gICAgcHJpdmF0ZSBjb25zb2xlRnJhbWVQcmVzZW50ZXI6IENvbnNvbGVGcmFtZVByZXNlbnRlcixcbiAgKSB7XG4gIH1cblxuICB1bmZvY3VzKCkge1xuICAgIHdpbmRvdy5mb2N1cygpO1xuICAgIHRoaXMuY29uc29sZUZyYW1lUHJlc2VudGVyLmJsdXIoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuaW1wb3J0IE5hdmlnYXRlVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9OYXZpZ2F0ZVVzZUNhc2UnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0ZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIG5hdmlnYXRlVXNlQ2FzZTogTmF2aWdhdGVVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIG9wZW5IaXN0b3J5TmV4dChfbTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubmF2aWdhdGVVc2VDYXNlLm9wZW5IaXN0b3J5TmV4dCgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIG9wZW5IaXN0b3J5UHJldihfbTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubmF2aWdhdGVVc2VDYXNlLm9wZW5IaXN0b3J5UHJldigpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIG9wZW5MaW5rTmV4dChfbTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubmF2aWdhdGVVc2VDYXNlLm9wZW5MaW5rTmV4dCgpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIG9wZW5MaW5rUHJldihfbTogTWVzc2FnZSk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMubmF2aWdhdGVVc2VDYXNlLm9wZW5MaW5rUHJldigpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSwgaW5qZWN0IH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IE5hdmlnYXRpb25QcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9OYXZpZ2F0aW9uUHJlc2VudGVyJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGVVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQGluamVjdCgnTmF2aWdhdGlvblByZXNlbnRlcicpXG4gICAgcHJpdmF0ZSBuYXZpZ2F0aW9uUHJlc2VudGVyOiBOYXZpZ2F0aW9uUHJlc2VudGVyLFxuICApIHtcbiAgfVxuXG4gIG9wZW5IaXN0b3J5UHJldigpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25QcmVzZW50ZXIub3Blbkhpc3RvcnlQcmV2KCk7XG4gIH1cblxuICBvcGVuSGlzdG9yeU5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uUHJlc2VudGVyLm9wZW5IaXN0b3J5TmV4dCgpO1xuICB9XG5cbiAgb3BlbkxpbmtQcmV2KCk6IHZvaWQge1xuICAgIHRoaXMubmF2aWdhdGlvblByZXNlbnRlci5vcGVuTGlua1ByZXYoKTtcbiAgfVxuXG4gIG9wZW5MaW5rTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLm5hdmlnYXRpb25QcmVzZW50ZXIub3BlbkxpbmtOZXh0KCk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGBcbi52aW12aXhlbi1jb25zb2xlLWZyYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMjE0NzQ4MzY0NztcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB1bnNldDtcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcbn1cblxuLnZpbXZpeGVuLWhpbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdvbGQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHotaW5kZXg6IDIxNDc0ODM2NDc7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuYDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuaW1wb3J0IHsgQWRkb25FbmFibGVkUmVwb3NpdG9yeUltcGwgfSBmcm9tICcuL3JlcG9zaXRvcmllcy9BZGRvbkVuYWJsZWRSZXBvc2l0b3J5JztcbmltcG9ydCB7IEFkZG9uSW5kaWNhdG9yQ2xpZW50SW1wbCB9IGZyb20gJy4vY2xpZW50L0FkZG9uSW5kaWNhdG9yQ2xpZW50JztcbmltcG9ydCB7IEFkZHJlc3NSZXBvc2l0b3J5SW1wbCB9IGZyb20gJy4vcmVwb3NpdG9yaWVzL0FkZHJlc3NSZXBvc2l0b3J5JztcbmltcG9ydCB7IENsaXBib2FyZFJlcG9zaXRvcnlJbXBsIH0gZnJvbSAnLi9yZXBvc2l0b3JpZXMvQ2xpcGJvYXJkUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDb25zb2xlQ2xpZW50SW1wbCB9IGZyb20gJy4vY2xpZW50L0NvbnNvbGVDbGllbnQnO1xuaW1wb3J0IHsgQ29uc29sZUZyYW1lUHJlc2VudGVySW1wbCB9IGZyb20gJy4vcHJlc2VudGVycy9Db25zb2xlRnJhbWVQcmVzZW50ZXInO1xuaW1wb3J0IHsgRmluZENsaWVudEltcGwgfSBmcm9tICcuL2NsaWVudC9GaW5kQ2xpZW50JztcbmltcG9ydCB7IEZpbmRNYXN0ZXJDbGllbnRJbXBsIH0gZnJvbSAnLi9jbGllbnQvRmluZE1hc3RlckNsaWVudCc7XG5pbXBvcnQgeyBGaW5kUHJlc2VudGVySW1wbCB9IGZyb20gJy4vcHJlc2VudGVycy9GaW5kUHJlc2VudGVyJztcbmltcG9ydCB7IEZpbmRSZXBvc2l0b3J5SW1wbCB9IGZyb20gJy4vcmVwb3NpdG9yaWVzL0ZpbmRSZXBvc2l0b3J5JztcbmltcG9ydCB7IEZvY3VzUHJlc2VudGVySW1wbCB9IGZyb20gJy4vcHJlc2VudGVycy9Gb2N1c1ByZXNlbnRlcic7XG5pbXBvcnQgeyBGb2xsb3dLZXlSZXBvc2l0b3J5SW1wbCB9IGZyb20gJy4vcmVwb3NpdG9yaWVzL0ZvbGxvd0tleVJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9sbG93TWFzdGVyQ2xpZW50SW1wbCB9IGZyb20gJy4vY2xpZW50L0ZvbGxvd01hc3RlckNsaWVudCc7XG5pbXBvcnQgeyBGb2xsb3dNYXN0ZXJSZXBvc2l0b3J5SW1wbCB9IGZyb20gJy4vcmVwb3NpdG9yaWVzL0ZvbGxvd01hc3RlclJlcG9zaXRvcnknO1xuaW1wb3J0IHsgRm9sbG93UHJlc2VudGVySW1wbCB9IGZyb20gJy4vcHJlc2VudGVycy9Gb2xsb3dQcmVzZW50ZXInO1xuaW1wb3J0IHsgRm9sbG93U2xhdmVDbGllbnRGYWN0b3J5SW1wbCB9IGZyb20gJy4vY2xpZW50L0ZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeSc7XG5pbXBvcnQgeyBGb2xsb3dTbGF2ZVJlcG9zaXRvcnlJbXBsIH0gZnJvbSAnLi9yZXBvc2l0b3JpZXMvRm9sbG93U2xhdmVSZXBvc2l0b3J5JztcbmltcG9ydCB7IEtleW1hcFJlcG9zaXRvcnlJbXBsIH0gZnJvbSAnLi9yZXBvc2l0b3JpZXMvS2V5bWFwUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBNYXJrQ2xpZW50SW1wbCB9IGZyb20gJy4vY2xpZW50L01hcmtDbGllbnQnO1xuaW1wb3J0IHsgTWFya0tleVJlcG9zaXRvcnlJbXBsIH0gZnJvbSAnLi9yZXBvc2l0b3JpZXMvTWFya0tleVJlcG9zaXRvcnknO1xuaW1wb3J0IHsgTWFya1JlcG9zaXRvcnlJbXBsIH0gZnJvbSAnLi9yZXBvc2l0b3JpZXMvTWFya1JlcG9zaXRvcnknO1xuaW1wb3J0IHsgTmF2aWdhdGlvblByZXNlbnRlckltcGwgfSBmcm9tICcuL3ByZXNlbnRlcnMvTmF2aWdhdGlvblByZXNlbnRlcic7XG5pbXBvcnQgeyBPcGVyYXRpb25DbGllbnRJbXBsIH0gZnJvbSAnLi9jbGllbnQvT3BlcmF0aW9uQ2xpZW50JztcbmltcG9ydCB7IFNjcm9sbFByZXNlbnRlckltcGwgfSBmcm9tICcuL3ByZXNlbnRlcnMvU2Nyb2xsUHJlc2VudGVyJztcbmltcG9ydCB7IFNldHRpbmdDbGllbnRJbXBsIH0gZnJvbSAnLi9jbGllbnQvU2V0dGluZ0NsaWVudCc7XG5pbXBvcnQgeyBTZXR0aW5nUmVwb3NpdG9yeUltcGwgfSBmcm9tICcuL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBUYWJzQ2xpZW50SW1wbCB9IGZyb20gJy4vY2xpZW50L1RhYnNDbGllbnQnO1xuaW1wb3J0IHsgY29udGFpbmVyIH0gZnJvbSAndHN5cmluZ2UnO1xuXG5jb250YWluZXIucmVnaXN0ZXIoJ0ZvbGxvd01hc3RlckNsaWVudCcsIHsgdXNlVmFsdWU6IG5ldyBGb2xsb3dNYXN0ZXJDbGllbnRJbXBsKHdpbmRvdy50b3ApIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdBZGRvbkVuYWJsZWRSZXBvc2l0b3J5JywgeyB1c2VDbGFzczogQWRkb25FbmFibGVkUmVwb3NpdG9yeUltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0FkZG9uSW5kaWNhdG9yQ2xpZW50JywgeyB1c2VDbGFzczogQWRkb25JbmRpY2F0b3JDbGllbnRJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdBZGRyZXNzUmVwb3NpdG9yeScsIHsgdXNlQ2xhc3M6IEFkZHJlc3NSZXBvc2l0b3J5SW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignQ2xpcGJvYXJkUmVwb3NpdG9yeScsIHsgdXNlQ2xhc3M6IENsaXBib2FyZFJlcG9zaXRvcnlJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdDb25zb2xlQ2xpZW50JywgeyB1c2VDbGFzczogQ29uc29sZUNsaWVudEltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0NvbnNvbGVGcmFtZVByZXNlbnRlcicsIHsgdXNlQ2xhc3M6IENvbnNvbGVGcmFtZVByZXNlbnRlckltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0ZpbmRDbGllbnQnLCB7IHVzZUNsYXNzOiBGaW5kQ2xpZW50SW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignRmluZE1hc3RlckNsaWVudCcsIHsgdXNlQ2xhc3M6IEZpbmRNYXN0ZXJDbGllbnRJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdGaW5kUHJlc2VudGVyJywgeyB1c2VDbGFzczogRmluZFByZXNlbnRlckltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0ZpbmRSZXBvc2l0b3J5JywgeyB1c2VDbGFzczogRmluZFJlcG9zaXRvcnlJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdGb2N1c1ByZXNlbnRlcicsIHsgdXNlQ2xhc3M6IEZvY3VzUHJlc2VudGVySW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignRm9sbG93S2V5UmVwb3NpdG9yeScsIHsgdXNlQ2xhc3M6IEZvbGxvd0tleVJlcG9zaXRvcnlJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdGb2xsb3dNYXN0ZXJSZXBvc2l0b3J5JywgeyB1c2VDbGFzczogRm9sbG93TWFzdGVyUmVwb3NpdG9yeUltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0ZvbGxvd1ByZXNlbnRlcicsIHsgdXNlQ2xhc3M6IEZvbGxvd1ByZXNlbnRlckltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0ZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeScsIHsgdXNlQ2xhc3M6IEZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeUltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0ZvbGxvd1NsYXZlUmVwb3NpdG9yeScsIHsgdXNlQ2xhc3M6IEZvbGxvd1NsYXZlUmVwb3NpdG9yeUltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ0tleW1hcFJlcG9zaXRvcnknLCB7IHVzZUNsYXNzOiBLZXltYXBSZXBvc2l0b3J5SW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignTWFya0NsaWVudCcsIHsgdXNlQ2xhc3M6IE1hcmtDbGllbnRJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdNYXJrS2V5UmVwb3NpdG9yeScsIHsgdXNlQ2xhc3M6IE1hcmtLZXlSZXBvc2l0b3J5SW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignTWFya1JlcG9zaXRvcnknLCB7IHVzZUNsYXNzOiBNYXJrUmVwb3NpdG9yeUltcGwgfSk7XG5jb250YWluZXIucmVnaXN0ZXIoJ05hdmlnYXRpb25QcmVzZW50ZXInLCB7IHVzZUNsYXNzOiBOYXZpZ2F0aW9uUHJlc2VudGVySW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignT3BlcmF0aW9uQ2xpZW50JywgeyB1c2VDbGFzczogT3BlcmF0aW9uQ2xpZW50SW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignU2Nyb2xsUHJlc2VudGVyJywgeyB1c2VDbGFzczogU2Nyb2xsUHJlc2VudGVySW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignU2V0dGluZ0NsaWVudCcsIHsgdXNlQ2xhc3M6IFNldHRpbmdDbGllbnRJbXBsIH0pO1xuY29udGFpbmVyLnJlZ2lzdGVyKCdTZXR0aW5nUmVwb3NpdG9yeScsIHsgdXNlQ2xhc3M6IFNldHRpbmdSZXBvc2l0b3J5SW1wbCB9KTtcbmNvbnRhaW5lci5yZWdpc3RlcignVGFic0NsaWVudCcsIHsgdXNlQ2xhc3M6IFRhYnNDbGllbnRJbXBsIH0pO1xuIiwibGV0IGVuYWJsZWQgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEFkZG9uRW5hYmxlZFJlcG9zaXRvcnkge1xuICBzZXQob246IGJvb2xlYW4pOiB2b2lkO1xuXG4gIGdldCgpOiBib29sZWFuO1xufVxuXG5leHBvcnQgY2xhc3MgQWRkb25FbmFibGVkUmVwb3NpdG9yeUltcGwgaW1wbGVtZW50cyBBZGRvbkVuYWJsZWRSZXBvc2l0b3J5IHtcbiAgc2V0KG9uOiBib29sZWFuKTogdm9pZCB7XG4gICAgZW5hYmxlZCA9IG9uO1xuICB9XG5cbiAgZ2V0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBlbmFibGVkO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgQWRkb25JbmRpY2F0b3JDbGllbnQge1xuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+O1xufVxuXG5leHBvcnQgY2xhc3MgQWRkb25JbmRpY2F0b3JDbGllbnRJbXBsIGltcGxlbWVudHMgQWRkb25JbmRpY2F0b3JDbGllbnQge1xuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkFERE9OX0VOQUJMRURfUkVTUE9OU0UsXG4gICAgICBlbmFibGVkLFxuICAgIH0pO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgQWRkcmVzc1JlcG9zaXRvcnkge1xuICBnZXRDdXJyZW50VVJMKCk6IFVSTFxufVxuXG5leHBvcnQgY2xhc3MgQWRkcmVzc1JlcG9zaXRvcnlJbXBsIGltcGxlbWVudHMgQWRkcmVzc1JlcG9zaXRvcnkge1xuICBnZXRDdXJyZW50VVJMKCk6IFVSTCB7XG4gICAgcmV0dXJuIG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgQ2xpcGJvYXJkUmVwb3NpdG9yeSB7XG4gIHJlYWQoKTogc3RyaW5nO1xuXG4gIHdyaXRlKHRleHQ6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDbGlwYm9hcmRSZXBvc2l0b3J5SW1wbCB7XG4gIHJlYWQoKTogc3RyaW5nIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHdpbmRvdy5kb2N1bWVudC5ib2R5LmFwcGVuZCh0ZXh0YXJlYSk7XG5cbiAgICB0ZXh0YXJlYS5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgdGV4dGFyZWEuc3R5bGUudG9wID0gJy0xMDBweCc7XG4gICAgdGV4dGFyZWEuY29udGVudEVkaXRhYmxlID0gJ3RydWUnO1xuICAgIHRleHRhcmVhLmZvY3VzKCk7XG5cbiAgICBjb25zdCBvayA9IHdpbmRvdy5kb2N1bWVudC5leGVjQ29tbWFuZCgncGFzdGUnKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRleHRhcmVhLnRleHRDb250ZW50ISE7XG4gICAgdGV4dGFyZWEucmVtb3ZlKCk7XG5cbiAgICBpZiAoIW9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBhY2Nlc3MgY2xpcGJhb3JkJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgd3JpdGUodGV4dDogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgaW5wdXQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICB3aW5kb3cuZG9jdW1lbnQuYm9keS5hcHBlbmQoaW5wdXQpO1xuXG4gICAgaW5wdXQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGlucHV0LnN0eWxlLnRvcCA9ICctMTAwcHgnO1xuICAgIGlucHV0LnZhbHVlID0gdGV4dDtcbiAgICBpbnB1dC5zZWxlY3QoKTtcblxuICAgIGNvbnN0IG9rID0gd2luZG93LmRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgaW5wdXQucmVtb3ZlKCk7XG5cbiAgICBpZiAoIW9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ZhaWxlZCB0byBhY2Nlc3MgY2xpcGJhb3JkJyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgQ29uc29sZUNsaWVudCB7XG4gIGluZm8odGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbiAgZXJyb3IodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGNsYXNzIENvbnNvbGVDbGllbnRJbXBsIGltcGxlbWVudHMgQ29uc29sZUNsaWVudCB7XG4gIGFzeW5jIGluZm8odGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfRlJBTUVfTUVTU0FHRSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9TSE9XX0lORk8sXG4gICAgICAgIHRleHQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZXJyb3IodGV4dDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfRlJBTUVfTUVTU0FHRSxcbiAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9TSE9XX0VSUk9SLFxuICAgICAgICB0ZXh0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEZpbmRDbGllbnQge1xuICBnZXRHbG9iYWxMYXN0S2V5d29yZCgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+O1xuXG4gIHNldEdsb2JhbExhc3RLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBjbGFzcyBGaW5kQ2xpZW50SW1wbCBpbXBsZW1lbnRzIEZpbmRDbGllbnQge1xuICBhc3luYyBnZXRHbG9iYWxMYXN0S2V5d29yZCgpOiBQcm9taXNlPHN0cmluZyB8IG51bGw+IHtcbiAgICBjb25zdCBrZXl3b3JkID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkZJTkRfR0VUX0tFWVdPUkQsXG4gICAgfSk7XG4gICAgcmV0dXJuIGtleXdvcmQgYXMgc3RyaW5nO1xuICB9XG5cbiAgYXN5bmMgc2V0R2xvYmFsTGFzdEtleXdvcmQoa2V5d29yZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkZJTkRfU0VUX0tFWVdPUkQsXG4gICAgICBrZXl3b3JkOiBrZXl3b3JkLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRmluZE1hc3RlckNsaWVudCB7XG4gIGZpbmROZXh0KCk6IHZvaWQ7XG5cbiAgZmluZFByZXYoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbmRNYXN0ZXJDbGllbnRJbXBsIGltcGxlbWVudHMgRmluZE1hc3RlckNsaWVudCB7XG4gIGZpbmROZXh0KCk6IHZvaWQge1xuICAgIHdpbmRvdy50b3AucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuRklORF9ORVhULFxuICAgIH0pLCAnKicpO1xuICB9XG5cbiAgZmluZFByZXYoKTogdm9pZCB7XG4gICAgd2luZG93LnRvcC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5GSU5EX1BSRVYsXG4gICAgfSksICcqJyk7XG4gIH1cbn1cbiIsIlxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEZpbmRQcmVzZW50ZXIge1xuICBmaW5kKGtleXdvcmQ6IHN0cmluZywgYmFja3dhcmRzOiBib29sZWFuKTogYm9vbGVhbjtcblxuICBjbGVhclNlbGVjdGlvbigpOiB2b2lkO1xufVxuXG4vLyB3aW5kb3cuZmluZChhU3RyaW5nLCBhQ2FzZVNlbnNpdGl2ZSwgYUJhY2t3YXJkcywgYVdyYXBBcm91bmQsXG4vLyAgICAgICAgICAgICBhV2hvbGVXb3JkLCBhU2VhcmNoSW5GcmFtZXMpO1xuLy9cbi8vIE5PVEU6IHdpbmRvdy5maW5kIGlzIG5vdCBzdGFuZGFyZCBBUElcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvZmluZFxuaW50ZXJmYWNlIE15V2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgZmluZChcbiAgICBhU3RyaW5nOiBzdHJpbmcsXG4gICAgYUNhc2VTZW5zaXRpdmU/OiBib29sZWFuLFxuICAgIGFCYWNrd2FyZHM/OiBib29sZWFuLFxuICAgIGFXcmFwQXJvdW5kPzogYm9vbGVhbixcbiAgICBhV2hvbGVXb3JkPzogYm9vbGVhbixcbiAgICBhU2VhcmNoSW5GcmFtZXM/OiBib29sZWFuLFxuICAgIGFTaG93RGlhbG9nPzogYm9vbGVhbik6IGJvb2xlYW47XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXIsIHZhcnMtb24tdG9wLCBpbml0LWRlY2xhcmF0aW9uc1xuZGVjbGFyZSB2YXIgd2luZG93OiBNeVdpbmRvdztcblxuZXhwb3J0IGNsYXNzIEZpbmRQcmVzZW50ZXJJbXBsIGltcGxlbWVudHMgRmluZFByZXNlbnRlciB7XG4gIGZpbmQoa2V5d29yZDogc3RyaW5nLCBiYWNrd2FyZHM6IGJvb2xlYW4pOiBib29sZWFuIHtcbiAgICBjb25zdCBjYXNlU2Vuc2l0aXZlID0gZmFsc2U7XG4gICAgY29uc3Qgd3JhcFNjYW4gPSB0cnVlO1xuXG5cbiAgICAvLyBOT1RFOiBhV2hvbGVXb3JkIGRvd3Mgbm90IGltcGxlbWVudGVkLCBhbmQgYVNlYXJjaEluRnJhbWVzIGRvZXMgbm90IHdvcmtcbiAgICAvLyBiZWNhdXNlIG9mIHNhbWUgb3JpZ2luIHBvbGljeVxuICAgIGNvbnN0IGZvdW5kID0gd2luZG93LmZpbmQoa2V5d29yZCwgY2FzZVNlbnNpdGl2ZSwgYmFja3dhcmRzLCB3cmFwU2Nhbik7XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJTZWxlY3Rpb24oKTtcblxuICAgIHJldHVybiB3aW5kb3cuZmluZChrZXl3b3JkLCBjYXNlU2Vuc2l0aXZlLCBiYWNrd2FyZHMsIHdyYXBTY2FuKTtcbiAgfVxuXG4gIGNsZWFyU2VsZWN0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKTtcbiAgICBpZiAoc2VsKSB7XG4gICAgICBzZWwucmVtb3ZlQWxsUmFuZ2VzKCk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRmluZFJlcG9zaXRvcnkge1xuICBnZXRMYXN0S2V5d29yZCgpOiBzdHJpbmcgfCBudWxsO1xuXG4gIHNldExhc3RLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IHZvaWQ7XG59XG5cbmxldCBjdXJyZW50OiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuZXhwb3J0IGNsYXNzIEZpbmRSZXBvc2l0b3J5SW1wbCBpbXBsZW1lbnRzIEZpbmRSZXBvc2l0b3J5IHtcbiAgZ2V0TGFzdEtleXdvcmQoKTogc3RyaW5nIHwgbnVsbCB7XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cblxuICBzZXRMYXN0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjdXJyZW50ID0ga2V5d29yZDtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgZG9tcyBmcm9tICcuLi8uLi9zaGFyZWQvdXRpbHMvZG9tJztcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEZvY3VzUHJlc2VudGVyIHtcbiAgZm9jdXNGaXJzdEVsZW1lbnQoKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEZvY3VzUHJlc2VudGVySW1wbCBpbXBsZW1lbnRzIEZvY3VzUHJlc2VudGVyIHtcbiAgZm9jdXNGaXJzdEVsZW1lbnQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5wdXRUeXBlcyA9IFsnZW1haWwnLCAnbnVtYmVyJywgJ3NlYXJjaCcsICd0ZWwnLCAndGV4dCcsICd1cmwnXTtcbiAgICBjb25zdCBpbnB1dFNlbGVjdG9yID0gaW5wdXRUeXBlcy5tYXAodHlwZSA9PiBgaW5wdXRbdHlwZT0ke3R5cGV9XWApLmpvaW4oJywnKTtcbiAgICBjb25zdCB0YXJnZXRzID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW5wdXRTZWxlY3RvciArICcsdGV4dGFyZWEnKTtcbiAgICBjb25zdCB0YXJnZXQgPSBBcnJheS5mcm9tKHRhcmdldHMpLmZpbmQoZG9tcy5pc1Zpc2libGUpO1xuICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSB7XG4gICAgICB0YXJnZXQuZm9jdXMoKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgSFRNTFRleHRBcmVhRWxlbWVudCkge1xuICAgICAgdGFyZ2V0LmZvY3VzKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBGb2xsb3dLZXlSZXBvc2l0b3J5IHtcbiAgZ2V0S2V5cygpOiBzdHJpbmdbXTtcblxuICBwdXNoS2V5KGtleTogc3RyaW5nKTogdm9pZDtcblxuICBwb3BLZXkoKTogdm9pZDtcblxuICBjbGVhcktleXMoKTogdm9pZDtcbn1cblxuY29uc3QgY3VycmVudDoge1xuICBrZXlzOiBzdHJpbmdbXTtcbn0gPSB7XG4gIGtleXM6IFtdLFxufTtcblxuZXhwb3J0IGNsYXNzIEZvbGxvd0tleVJlcG9zaXRvcnlJbXBsIGltcGxlbWVudHMgRm9sbG93S2V5UmVwb3NpdG9yeSB7XG4gIGdldEtleXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBjdXJyZW50LmtleXM7XG4gIH1cblxuICBwdXNoS2V5KGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgY3VycmVudC5rZXlzLnB1c2goa2V5KTtcbiAgfVxuXG4gIHBvcEtleSgpOiB2b2lkIHtcbiAgICBjdXJyZW50LmtleXMucG9wKCk7XG4gIH1cblxuICBjbGVhcktleXMoKTogdm9pZCB7XG4gICAgY3VycmVudC5rZXlzID0gW107XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uLy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5pbXBvcnQgS2V5IGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9LZXknO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRm9sbG93TWFzdGVyQ2xpZW50IHtcbiAgc3RhcnRGb2xsb3cobmV3VGFiOiBib29sZWFuLCBiYWNrZ3JvdW5kOiBib29sZWFuKTogdm9pZDtcblxuICByZXNwb25zZUhpbnRDb3VudChjb3VudDogbnVtYmVyKTogdm9pZDtcblxuICBzZW5kS2V5KGtleTogS2V5KTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGxvd01hc3RlckNsaWVudEltcGwgaW1wbGVtZW50cyBGb2xsb3dNYXN0ZXJDbGllbnQge1xuICBwcml2YXRlIHdpbmRvdzogV2luZG93O1xuXG4gIGNvbnN0cnVjdG9yKHdpbmRvdzogV2luZG93KSB7XG4gICAgdGhpcy53aW5kb3cgPSB3aW5kb3c7XG4gIH1cblxuICBzdGFydEZvbGxvdyhuZXdUYWI6IGJvb2xlYW4sIGJhY2tncm91bmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnBvc3RNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkZPTExPV19TVEFSVCxcbiAgICAgIG5ld1RhYixcbiAgICAgIGJhY2tncm91bmQsXG4gICAgfSk7XG4gIH1cblxuICByZXNwb25zZUhpbnRDb3VudChjb3VudDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5wb3N0TWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5GT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUyxcbiAgICAgIGNvdW50LFxuICAgIH0pO1xuICB9XG5cbiAgc2VuZEtleShrZXk6IEtleSk6IHZvaWQge1xuICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuRk9MTE9XX0tFWV9QUkVTUyxcbiAgICAgIGtleToga2V5LmtleSxcbiAgICAgIGN0cmxLZXk6IGtleS5jdHJsIHx8IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBwb3N0TWVzc2FnZShtc2c6IG1lc3NhZ2VzLk1lc3NhZ2UpOiB2b2lkIHtcbiAgICB0aGlzLndpbmRvdy5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShtc2cpLCAnKicpO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgRm9sbG93TWFzdGVyUmVwb3NpdG9yeSB7XG4gIHNldEN1cnJlbnRGb2xsb3dNb2RlKG5ld1RhYjogYm9vbGVhbiwgYmFja2dyb3VuZDogYm9vbGVhbik6IHZvaWQ7XG5cbiAgZ2V0VGFncygpOiBzdHJpbmdbXTtcblxuICBnZXRUYWdzQnlQcmVmaXgocHJlZml4OiBzdHJpbmcpOiBzdHJpbmdbXTtcblxuICBhZGRUYWcodGFnOiBzdHJpbmcpOiB2b2lkO1xuXG4gIGNsZWFyVGFncygpOiB2b2lkO1xuXG4gIGdldEN1cnJlbnROZXdUYWJNb2RlKCk6IGJvb2xlYW47XG5cbiAgZ2V0Q3VycmVudEJhY2tncm91bmRNb2RlKCk6IGJvb2xlYW47XG59XG5cbmNvbnN0IGN1cnJlbnQ6IHtcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xuICB0YWdzOiBzdHJpbmdbXTtcbn0gPSB7XG4gIG5ld1RhYjogZmFsc2UsXG4gIGJhY2tncm91bmQ6IGZhbHNlLFxuICB0YWdzOiBbXSxcbn07XG5cbmV4cG9ydCBjbGFzcyBGb2xsb3dNYXN0ZXJSZXBvc2l0b3J5SW1wbCBpbXBsZW1lbnRzIEZvbGxvd01hc3RlclJlcG9zaXRvcnkge1xuICBzZXRDdXJyZW50Rm9sbG93TW9kZShuZXdUYWI6IGJvb2xlYW4sIGJhY2tncm91bmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjdXJyZW50Lm5ld1RhYiA9IG5ld1RhYjtcbiAgICBjdXJyZW50LmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xuICB9XG5cbiAgZ2V0VGFncygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGN1cnJlbnQudGFncztcbiAgfVxuXG4gIGdldFRhZ3NCeVByZWZpeChwcmVmaXg6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gY3VycmVudC50YWdzLmZpbHRlcih0ID0+IHQuc3RhcnRzV2l0aChwcmVmaXgpKTtcbiAgfVxuXG4gIGFkZFRhZyh0YWc6IHN0cmluZyk6IHZvaWQge1xuICAgIGN1cnJlbnQudGFncy5wdXNoKHRhZyk7XG4gIH1cblxuICBjbGVhclRhZ3MoKTogdm9pZCB7XG4gICAgY3VycmVudC50YWdzID0gW107XG4gIH1cblxuICBnZXRDdXJyZW50TmV3VGFiTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudC5uZXdUYWI7XG4gIH1cblxuICBnZXRDdXJyZW50QmFja2dyb3VuZE1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnQuYmFja2dyb3VuZDtcbiAgfVxufVxuXG4iLCJpbXBvcnQgSGludCwgeyBJbnB1dEhpbnQsIExpbmtIaW50IH0gZnJvbSAnLi9IaW50JztcbmltcG9ydCAqIGFzIGRvbXMgZnJvbSAnLi4vLi4vc2hhcmVkL3V0aWxzL2RvbSc7XG5cbmNvbnN0IFRBUkdFVF9TRUxFQ1RPUiA9IFtcbiAgJ2EnLCAnYnV0dG9uJywgJ2lucHV0JywgJ3RleHRhcmVhJywgJ2FyZWEnLFxuICAnW2NvbnRlbnRlZGl0YWJsZT10cnVlXScsICdbY29udGVudGVkaXRhYmxlPVwiXCJdJywgJ1t0YWJpbmRleF0nLFxuICAnW3JvbGU9XCJidXR0b25cIl0nLCAnc3VtbWFyeSdcbl0uam9pbignLCcpO1xuXG5pbnRlcmZhY2UgU2l6ZSB7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgUG9pbnQge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuY29uc3QgaW5WaWV3cG9ydCA9IChcbiAgd2luOiBXaW5kb3csXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIHZpZXdTaXplOiBTaXplLFxuICBmcmFtZVBvc2l0aW9uOiBQb2ludCxcbik6IGJvb2xlYW4gPT4ge1xuICBjb25zdCB7XG4gICAgdG9wLCBsZWZ0LCBib3R0b20sIHJpZ2h0XG4gIH0gPSBkb21zLnZpZXdwb3J0UmVjdChlbGVtZW50KTtcbiAgY29uc3QgZG9jID0gd2luLmRvY3VtZW50O1xuICBjb25zdCBmcmFtZVdpZHRoID0gZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgY29uc3QgZnJhbWVIZWlnaHQgPSBkb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICBpZiAocmlnaHQgPCAwIHx8IGJvdHRvbSA8IDAgfHwgdG9wID4gZnJhbWVIZWlnaHQgfHwgbGVmdCA+IGZyYW1lV2lkdGgpIHtcbiAgICAvLyBvdXQgb2YgZnJhbWVcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHJpZ2h0ICsgZnJhbWVQb3NpdGlvbi54IDwgMCB8fCBib3R0b20gKyBmcmFtZVBvc2l0aW9uLnkgPCAwIHx8XG4gICAgICBsZWZ0ICsgZnJhbWVQb3NpdGlvbi54ID4gdmlld1NpemUud2lkdGggfHxcbiAgICAgIHRvcCArIGZyYW1lUG9zaXRpb24ueSA+IHZpZXdTaXplLmhlaWdodCkge1xuICAgIC8vIG91dCBvZiB2aWV3cG9ydFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmNvbnN0IGlzQXJpYUhpZGRlbk9yQXJpYURpc2FibGVkID0gKHdpbjogV2luZG93LCBlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gIGlmICghZWxlbWVudCB8fCB3aW4uZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ID09PSBlbGVtZW50KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZvciAoY29uc3QgYXR0ciBvZiBbJ2FyaWEtaGlkZGVuJywgJ2FyaWEtZGlzYWJsZWQnXSkge1xuICAgIGNvbnN0IHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCBoaWRkZW4gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGhpZGRlbiA9PT0gJycgfHwgaGlkZGVuID09PSAndHJ1ZScpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBpc0FyaWFIaWRkZW5PckFyaWFEaXNhYmxlZCh3aW4sIGVsZW1lbnQucGFyZW50RWxlbWVudCBhcyBFbGVtZW50KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBGb2xsb3dQcmVzZW50ZXIge1xuICBnZXRUYXJnZXRDb3VudCh2aWV3U2l6ZTogU2l6ZSwgZnJhbWVQb3NpdGlvbjogUG9pbnQpOiBudW1iZXI7XG5cbiAgY3JlYXRlSGludHModmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50LCB0YWdzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cbiAgZmlsdGVySGludHMocHJlZml4OiBzdHJpbmcpOiB2b2lkO1xuXG4gIGNsZWFySGludHMoKTogdm9pZDtcblxuICBnZXRIaW50KHRhZzogc3RyaW5nKTogSGludCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGxvd1ByZXNlbnRlckltcGwgaW1wbGVtZW50cyBGb2xsb3dQcmVzZW50ZXIge1xuICBwcml2YXRlIGhpbnRzOiBIaW50W107XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5oaW50cyA9IFtdO1xuICB9XG5cbiAgZ2V0VGFyZ2V0Q291bnQodmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50KTogbnVtYmVyIHtcbiAgICBjb25zdCB0YXJnZXRzID0gdGhpcy5nZXRUYXJnZXRzKHZpZXdTaXplLCBmcmFtZVBvc2l0aW9uKTtcbiAgICByZXR1cm4gdGFyZ2V0cy5sZW5ndGg7XG4gIH1cblxuICBjcmVhdGVIaW50cyh2aWV3U2l6ZTogU2l6ZSwgZnJhbWVQb3NpdGlvbjogUG9pbnQsIHRhZ3M6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHRoaXMuZ2V0VGFyZ2V0cyh2aWV3U2l6ZSwgZnJhbWVQb3NpdGlvbik7XG4gICAgY29uc3QgbWluID0gTWF0aC5taW4odGFyZ2V0cy5sZW5ndGgsIHRhZ3MubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbjsgKytpKSB7XG4gICAgICBjb25zdCB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8XG4gICAgICAgIHRhcmdldCBpbnN0YW5jZW9mIEhUTUxBcmVhRWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpbnRzLnB1c2gobmV3IExpbmtIaW50KHRhcmdldCwgdGFnc1tpXSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaW50cy5wdXNoKG5ldyBJbnB1dEhpbnQodGFyZ2V0LCB0YWdzW2ldKSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZmlsdGVySGludHMocHJlZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBzaG93biA9IHRoaXMuaGludHMuZmlsdGVyKGggPT4gaC5nZXRUYWcoKS5zdGFydHNXaXRoKHByZWZpeCkpO1xuICAgIGNvbnN0IGhpZGRlbiA9IHRoaXMuaGludHMuZmlsdGVyKGggPT4gIWguZ2V0VGFnKCkuc3RhcnRzV2l0aChwcmVmaXgpKTtcblxuICAgIHNob3duLmZvckVhY2goaCA9PiBoLnNob3coKSk7XG4gICAgaGlkZGVuLmZvckVhY2goaCA9PiBoLmhpZGUoKSk7XG4gIH1cblxuICBjbGVhckhpbnRzKCk6IHZvaWQge1xuICAgIHRoaXMuaGludHMuZm9yRWFjaChoID0+IGgucmVtb3ZlKCkpO1xuICAgIHRoaXMuaGludHMgPSBbXTtcbiAgfVxuXG4gIGdldEhpbnQodGFnOiBzdHJpbmcpOiBIaW50IHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5oaW50cy5maW5kKGggPT4gaC5nZXRUYWcoKSA9PT0gdGFnKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGFyZ2V0cyh2aWV3U2l6ZTogU2l6ZSwgZnJhbWVQb3NpdGlvbjogUG9pbnQpOiBIVE1MRWxlbWVudFtdIHtcbiAgICBjb25zdCBhbGwgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChUQVJHRVRfU0VMRUNUT1IpO1xuICAgIGNvbnN0IGZpbHRlcmVkID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGFsbCwgKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBjb25zdCBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuXG4gICAgICAvLyBBUkVBJ3MgJ2Rpc3BsYXknIGluIEJyb3dzZXIgc3R5bGUgaXMgJ25vbmUnXG4gICAgICByZXR1cm4gKGVsZW1lbnQudGFnTmFtZSA9PT0gJ0FSRUEnIHx8IHN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgJiZcbiAgICAgICAgc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicgJiZcbiAgICAgICAgKGVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudCkudHlwZSAhPT0gJ2hpZGRlbicgJiZcbiAgICAgICAgZWxlbWVudC5vZmZzZXRIZWlnaHQgPiAwICYmXG4gICAgICAgICFpc0FyaWFIaWRkZW5PckFyaWFEaXNhYmxlZCh3aW5kb3csIGVsZW1lbnQpICYmXG4gICAgICAgIGluVmlld3BvcnQod2luZG93LCBlbGVtZW50LCB2aWV3U2l6ZSwgZnJhbWVQb3NpdGlvbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkO1xuICB9XG59XG4iLCJpbXBvcnQgRm9sbG93U2xhdmVDbGllbnQsIHsgRm9sbG93U2xhdmVDbGllbnRJbXBsIH0gZnJvbSAnLi9Gb2xsb3dTbGF2ZUNsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBGb2xsb3dTbGF2ZUNsaWVudEZhY3Rvcnkge1xuICBjcmVhdGUod2luZG93OiBXaW5kb3cpOiBGb2xsb3dTbGF2ZUNsaWVudDtcbn1cblxuZXhwb3J0IGNsYXNzIEZvbGxvd1NsYXZlQ2xpZW50RmFjdG9yeUltcGwgaW1wbGVtZW50cyBGb2xsb3dTbGF2ZUNsaWVudEZhY3Rvcnkge1xuICBjcmVhdGUod2luZG93OiBXaW5kb3cpOiBGb2xsb3dTbGF2ZUNsaWVudCB7XG4gICAgcmV0dXJuIG5ldyBGb2xsb3dTbGF2ZUNsaWVudEltcGwod2luZG93KTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuaW50ZXJmYWNlIFNpemUge1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuaW50ZXJmYWNlIFBvaW50IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBGb2xsb3dTbGF2ZUNsaWVudCB7XG4gIGZpbHRlckhpbnRzKHByZWZpeDogc3RyaW5nKTogdm9pZDtcblxuICByZXF1ZXN0SGludENvdW50KHZpZXdTaXplOiBTaXplLCBmcmFtZVBvc2l0aW9uOiBQb2ludCk6IHZvaWQ7XG5cbiAgY3JlYXRlSGludHModmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50LCB0YWdzOiBzdHJpbmdbXSk6IHZvaWQ7XG5cbiAgY2xlYXJIaW50cygpOiB2b2lkO1xuXG4gIGFjdGl2YXRlSWZFeGlzdHModGFnOiBzdHJpbmcsIG5ld1RhYjogYm9vbGVhbiwgYmFja2dyb3VuZDogYm9vbGVhbik6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBGb2xsb3dTbGF2ZUNsaWVudEltcGwgaW1wbGVtZW50cyBGb2xsb3dTbGF2ZUNsaWVudCB7XG4gIHByaXZhdGUgdGFyZ2V0OiBXaW5kb3c7XG5cbiAgY29uc3RydWN0b3IodGFyZ2V0OiBXaW5kb3cpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgfVxuXG4gIGZpbHRlckhpbnRzKHByZWZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5wb3N0TWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5GT0xMT1dfU0hPV19ISU5UUyxcbiAgICAgIHByZWZpeCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlcXVlc3RIaW50Q291bnQodmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50KTogdm9pZCB7XG4gICAgdGhpcy5wb3N0TWVzc2FnZSh7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5GT0xMT1dfUkVRVUVTVF9DT1VOVF9UQVJHRVRTLFxuICAgICAgdmlld1NpemUsXG4gICAgICBmcmFtZVBvc2l0aW9uLFxuICAgIH0pO1xuICB9XG5cbiAgY3JlYXRlSGludHModmlld1NpemU6IFNpemUsIGZyYW1lUG9zaXRpb246IFBvaW50LCB0YWdzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuRk9MTE9XX0NSRUFURV9ISU5UUyxcbiAgICAgIHZpZXdTaXplLFxuICAgICAgZnJhbWVQb3NpdGlvbixcbiAgICAgIHRhZ3MsXG4gICAgfSk7XG4gIH1cblxuICBjbGVhckhpbnRzKCk6IHZvaWQge1xuICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuRk9MTE9XX1JFTU9WRV9ISU5UUyxcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlSWZFeGlzdHModGFnOiBzdHJpbmcsIG5ld1RhYjogYm9vbGVhbiwgYmFja2dyb3VuZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuRk9MTE9XX0FDVElWQVRFLFxuICAgICAgdGFnLFxuICAgICAgbmV3VGFiLFxuICAgICAgYmFja2dyb3VuZCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgcG9zdE1lc3NhZ2UobXNnOiBtZXNzYWdlcy5NZXNzYWdlKTogdm9pZCB7XG4gICAgdGhpcy50YXJnZXQucG9zdE1lc3NhZ2UoSlNPTi5zdHJpbmdpZnkobXNnKSwgJyonKTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIEZvbGxvd1NsYXZlUmVwb3NpdG9yeSB7XG4gIGVuYWJsZUZvbGxvd01vZGUoKTogdm9pZDtcblxuICBkaXNhYmxlRm9sbG93TW9kZSgpOiB2b2lkO1xuXG4gIGlzRm9sbG93TW9kZSgpOiBib29sZWFuO1xufVxuXG5jb25zdCBjdXJyZW50OiB7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG59ID0ge1xuICBlbmFibGVkOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBGb2xsb3dTbGF2ZVJlcG9zaXRvcnlJbXBsIGltcGxlbWVudHMgRm9sbG93U2xhdmVSZXBvc2l0b3J5IHtcbiAgZW5hYmxlRm9sbG93TW9kZSgpOiB2b2lkIHtcbiAgICBjdXJyZW50LmVuYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJsZUZvbGxvd01vZGUoKTogdm9pZCB7XG4gICAgY3VycmVudC5lbmFibGVkID0gZmFsc2U7XG4gIH1cblxuICBpc0ZvbGxvd01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGN1cnJlbnQuZW5hYmxlZDtcbiAgfVxufVxuXG5cbiIsImltcG9ydCBLZXkgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL0tleSc7XG5pbXBvcnQgS2V5U2VxdWVuY2UgZnJvbSAnLi4vZG9tYWlucy9LZXlTZXF1ZW5jZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBLZXltYXBSZXBvc2l0b3J5IHtcbiAgZW5xdWV1ZUtleShrZXk6IEtleSk6IEtleVNlcXVlbmNlO1xuXG4gIGNsZWFyKCk6IHZvaWQ7XG59XG5cbmxldCBjdXJyZW50OiBLZXlTZXF1ZW5jZSA9IG5ldyBLZXlTZXF1ZW5jZShbXSk7XG5cbmV4cG9ydCBjbGFzcyBLZXltYXBSZXBvc2l0b3J5SW1wbCB7XG5cbiAgZW5xdWV1ZUtleShrZXk6IEtleSk6IEtleVNlcXVlbmNlIHtcbiAgICBjdXJyZW50LnB1c2goa2V5KTtcbiAgICByZXR1cm4gY3VycmVudDtcbiAgfVxuXG4gIGNsZWFyKCk6IHZvaWQge1xuICAgIGN1cnJlbnQgPSBuZXcgS2V5U2VxdWVuY2UoW10pO1xuICB9XG59XG4iLCJpbXBvcnQgTWFyayBmcm9tICcuLi9kb21haW5zL01hcmsnO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIE1hcmtDbGllbnQge1xuICBzZXRHbG9hYmxNYXJrKGtleTogc3RyaW5nLCBtYXJrOiBNYXJrKTogUHJvbWlzZTx2b2lkPjtcblxuICBqdW1wR2xvYmFsTWFyayhrZXk6IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBjbGFzcyBNYXJrQ2xpZW50SW1wbCBpbXBsZW1lbnRzIE1hcmtDbGllbnQge1xuICBhc3luYyBzZXRHbG9hYmxNYXJrKGtleTogc3RyaW5nLCBtYXJrOiBNYXJrKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLk1BUktfU0VUX0dMT0JBTCxcbiAgICAgIGtleSxcbiAgICAgIHg6IG1hcmsueCxcbiAgICAgIHk6IG1hcmsueSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGp1bXBHbG9iYWxNYXJrKGtleTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLk1BUktfSlVNUF9HTE9CQUwsXG4gICAgICBrZXksXG4gICAgfSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBNYXJrS2V5UmVwb3NpdG9yeSB7XG4gIGlzU2V0TW9kZSgpOiBib29sZWFuO1xuXG4gIGVuYWJsZVNldE1vZGUoKTogdm9pZDtcblxuICBkaXNhYmVTZXRNb2RlKCk6IHZvaWQ7XG5cbiAgaXNKdW1wTW9kZSgpOiBib29sZWFuO1xuXG4gIGVuYWJsZUp1bXBNb2RlKCk6IHZvaWQ7XG5cbiAgZGlzYWJlSnVtcE1vZGUoKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIE1vZGUge1xuICBzZXRNb2RlOiBib29sZWFuO1xuICBqdW1wTW9kZTogYm9vbGVhbjtcbn1cblxuY29uc3QgY3VycmVudDogTW9kZSA9IHtcbiAgc2V0TW9kZTogZmFsc2UsXG4gIGp1bXBNb2RlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBNYXJrS2V5UmVwb3NpdG9yeUltcGwgaW1wbGVtZW50cyBNYXJrS2V5UmVwb3NpdG9yeSB7XG5cbiAgaXNTZXRNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBjdXJyZW50LnNldE1vZGU7XG4gIH1cblxuICBlbmFibGVTZXRNb2RlKCk6IHZvaWQge1xuICAgIGN1cnJlbnQuc2V0TW9kZSA9IHRydWU7XG4gIH1cblxuICBkaXNhYmVTZXRNb2RlKCk6IHZvaWQge1xuICAgIGN1cnJlbnQuc2V0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgaXNKdW1wTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gY3VycmVudC5qdW1wTW9kZTtcbiAgfVxuXG4gIGVuYWJsZUp1bXBNb2RlKCk6IHZvaWQge1xuICAgIGN1cnJlbnQuanVtcE1vZGUgPSB0cnVlO1xuICB9XG5cbiAgZGlzYWJlSnVtcE1vZGUoKTogdm9pZCB7XG4gICAgY3VycmVudC5qdW1wTW9kZSA9IGZhbHNlO1xuICB9XG59XG4iLCJpbXBvcnQgTWFyayBmcm9tICcuLi9kb21haW5zL01hcmsnO1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgTWFya1JlcG9zaXRvcnkge1xuICBzZXQoa2V5OiBzdHJpbmcsIG1hcms6IE1hcmspOiB2b2lkO1xuXG4gIGdldChrZXk6IHN0cmluZyk6IE1hcmsgfCBudWxsO1xufVxuXG5jb25zdCBzYXZlZDoge1trZXk6IHN0cmluZ106IE1hcmt9ID0ge307XG5cbmV4cG9ydCBjbGFzcyBNYXJrUmVwb3NpdG9yeUltcGwgaW1wbGVtZW50cyBNYXJrUmVwb3NpdG9yeSB7XG4gIHNldChrZXk6IHN0cmluZywgbWFyazogTWFyayk6IHZvaWQge1xuICAgIHNhdmVkW2tleV0gPSBtYXJrO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKTogTWFyayB8IG51bGwge1xuICAgIGNvbnN0IHYgPSBzYXZlZFtrZXldO1xuICAgIGlmICghdikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiB7IC4uLnYgfTtcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIE5hdmlnYXRpb25QcmVzZW50ZXIge1xuICBvcGVuSGlzdG9yeVByZXYoKTogdm9pZDtcblxuICBvcGVuSGlzdG9yeU5leHQoKTogdm9pZDtcblxuICBvcGVuTGlua1ByZXYoKTogdm9pZDtcblxuICBvcGVuTGlua05leHQoKTogdm9pZDtcbn1cblxuY29uc3QgUkVMX1BBVFRFUk46IHtba2V5OiBzdHJpbmddOiBSZWdFeHB9ID0ge1xuICBwcmV2OiAvXig/OnByZXYoPzppb3VzKT98b2xkZXIpXFxifFxcdTIwMzl8XFx1MjE5MHxcXHhhYnxcXHUyMjZhfDw8L2ksXG4gIG5leHQ6IC9eKD86bmV4dHxuZXdlcilcXGJ8XFx1MjAzYXxcXHUyMTkyfFxceGJifFxcdTIyNmJ8Pj4vaSxcbn07XG5cbi8vIFJldHVybiB0aGUgbGFzdCBlbGVtZW50IGluIHRoZSBkb2N1bWVudCBtYXRjaGluZyB0aGUgc3VwcGxpZWQgc2VsZWN0b3Jcbi8vIGFuZCB0aGUgb3B0aW9uYWwgZmlsdGVyLCBvciBudWxsIGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzLlxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtc3R5bGVcbmZ1bmN0aW9uIHNlbGVjdExhc3Q8RSBleHRlbmRzIEVsZW1lbnQ+KFxuICBzZWxlY3Rvcjogc3RyaW5nLFxuICBmaWx0ZXI/OiAoZTogRSkgPT4gYm9vbGVhbixcbik6IEUgfCBudWxsIHtcbiAgbGV0IG5vZGVzID0gQXJyYXkuZnJvbShcbiAgICB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikgYXMgTm9kZUxpc3RPZjxFPlxuICApO1xuXG4gIGlmIChmaWx0ZXIpIHtcbiAgICBub2RlcyA9IG5vZGVzLmZpbHRlcihmaWx0ZXIpO1xuICB9XG4gIHJldHVybiBub2Rlcy5sZW5ndGggPyBub2Rlc1tub2Rlcy5sZW5ndGggLSAxXSA6IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uUHJlc2VudGVySW1wbCBpbXBsZW1lbnRzIE5hdmlnYXRpb25QcmVzZW50ZXIge1xuICBvcGVuSGlzdG9yeVByZXYoKTogdm9pZCB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgb3Blbkhpc3RvcnlOZXh0KCk6IHZvaWQge1xuICAgIHdpbmRvdy5oaXN0b3J5LmZvcndhcmQoKTtcbiAgfVxuXG4gIG9wZW5MaW5rUHJldigpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtSZWwoJ3ByZXYnKTtcbiAgfVxuXG4gIG9wZW5MaW5rTmV4dCgpOiB2b2lkIHtcbiAgICB0aGlzLmxpbmtSZWwoJ25leHQnKTtcbiAgfVxuXG4gIC8vIENvZGUgY29tbW9uIHRvIGxpbmtQcmV2IGFuZCBsaW5rTmV4dCB3aGljaCBuYXZpZ2F0ZXMgdG8gdGhlIHNwZWNpZmllZCBwYWdlLlxuICBwcml2YXRlIGxpbmtSZWwocmVsOiAncHJldicgfCAnbmV4dCcpOiB2b2lkIHtcbiAgICBjb25zdCBsaW5rID0gc2VsZWN0TGFzdDxIVE1MTGlua0VsZW1lbnQ+KGBsaW5rW3JlbH49JHtyZWx9XVtocmVmXWApO1xuICAgIGlmIChsaW5rKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGxpbmsuaHJlZjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwYXR0ZXJuID0gUkVMX1BBVFRFUk5bcmVsXTtcblxuICAgIGNvbnN0IGEgPSBzZWxlY3RMYXN0PEhUTUxBbmNob3JFbGVtZW50PihgYVtyZWx+PSR7cmVsfV1baHJlZl1gKSB8fFxuICAgIC8vIGBpbm5lclRleHRgIGlzIG11Y2ggc2xvd2VyIHRoYW4gYHRleHRDb250ZW50YCwgYnV0IHByb2R1Y2VzIG11Y2ggYmV0dGVyXG4gICAgLy8gKGkuZS4gbGVzcyB1bmV4cGVjdGVkKSByZXN1bHRzXG4gICAgc2VsZWN0TGFzdCgnYVtocmVmXScsIGxuayA9PiBwYXR0ZXJuLnRlc3QobG5rLmlubmVyVGV4dCkpO1xuXG4gICAgaWYgKGEpIHtcbiAgICAgIGEuY2xpY2soKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG9wZXJhdGlvbnMgZnJvbSAnLi4vLi4vc2hhcmVkL29wZXJhdGlvbnMnO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuZXhwb3J0IGRlZmF1bHQgaW50ZXJmYWNlIE9wZXJhdGlvbkNsaWVudCB7XG4gIGV4ZWNCYWNrZ3JvdW5kT3AocmVwZWF0OiBudW1iZXIsIG9wOiBvcGVyYXRpb25zLk9wZXJhdGlvbik6IFByb21pc2U8dm9pZD47XG5cbiAgaW50ZXJuYWxPcGVuVXJsKFxuICAgIHVybDogc3RyaW5nLCBuZXdUYWI/OiBib29sZWFuLCBiYWNrZ3JvdW5kPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPjtcbn1cblxuZXhwb3J0IGNsYXNzIE9wZXJhdGlvbkNsaWVudEltcGwgaW1wbGVtZW50cyBPcGVyYXRpb25DbGllbnQge1xuICBleGVjQmFja2dyb3VuZE9wKHJlcGVhdDogbnVtYmVyLCBvcDogb3BlcmF0aW9ucy5PcGVyYXRpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkJBQ0tHUk9VTkRfT1BFUkFUSU9OLFxuICAgICAgcmVwZWF0LFxuICAgICAgb3BlcmF0aW9uOiBvcCxcbiAgICB9KTtcbiAgfVxuXG4gIGludGVybmFsT3BlblVybChcbiAgICB1cmw6IHN0cmluZywgbmV3VGFiPzogYm9vbGVhbiwgYmFja2dyb3VuZD86IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuQkFDS0dST1VORF9PUEVSQVRJT04sXG4gICAgICByZXBlYXQ6IDEsXG4gICAgICBvcGVyYXRpb246IHtcbiAgICAgICAgdHlwZTogb3BlcmF0aW9ucy5JTlRFUk5BTF9PUEVOX1VSTCxcbiAgICAgICAgdXJsLFxuICAgICAgICBuZXdUYWIsXG4gICAgICAgIGJhY2tncm91bmQsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBkb21zIGZyb20gJy4uLy4uL3NoYXJlZC91dGlscy9kb20nO1xuXG5jb25zdCBTQ1JPTExfREVMVEFfWCA9IDY0O1xuY29uc3QgU0NST0xMX0RFTFRBX1kgPSA2NDtcblxuLy8gZGlydHkgd2F5IHRvIHN0b3JlIHNjcm9sbGluZyBzdGF0ZSBvbiBnbG9iYWxseVxubGV0IHNjcm9sbGluZyA9IGZhbHNlO1xubGV0IGxhc3RUaW1lb3V0SWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG5jb25zdCBpc1Njcm9sbGFibGVTdHlsZSA9IChlbGVtZW50OiBFbGVtZW50KTogYm9vbGVhbiA9PiB7XG4gIGNvbnN0IHsgb3ZlcmZsb3dYLCBvdmVyZmxvd1kgfSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gIShvdmVyZmxvd1ggIT09ICdzY3JvbGwnICYmIG92ZXJmbG93WCAhPT0gJ2F1dG8nICYmXG4gICAgb3ZlcmZsb3dZICE9PSAnc2Nyb2xsJyAmJiBvdmVyZmxvd1kgIT09ICdhdXRvJyk7XG59O1xuXG5jb25zdCBpc092ZXJmbG93ZWQgPSAoZWxlbWVudDogRWxlbWVudCk6IGJvb2xlYW4gPT4ge1xuICByZXR1cm4gZWxlbWVudC5zY3JvbGxXaWR0aCA+IGVsZW1lbnQuY2xpZW50V2lkdGggfHxcbiAgICBlbGVtZW50LnNjcm9sbEhlaWdodCA+IGVsZW1lbnQuY2xpZW50SGVpZ2h0O1xufTtcblxuLy8gRmluZCBhIHZpc2lhYmxlIGFuZCBzY3JvbGxhYmxlIGVsZW1lbnQgYnkgZGVwdGgtZmlyc3Qgc2VhcmNoLiAgQ3VycmVudGx5XG4vLyB0aGlzIG1ldGhvZCBpcyBjYWxsZWQgYnkgZWFjaCBzY3JvbGxpbmcsIGFuZCB0aGUgcmV0dXJuZWQgdmFsdWUgb2YgdGhpc1xuLy8gbWV0aG9kIGlzIG5vdCBjYWNoZWQuICBUaGF0IGRvZXMgbm90IGNhdXNlIHBlcmZvcm1hbmNlIGlzc3VlIGJlY2F1c2UgaW4gdGhlXG4vLyBtb3N0IHBhZ2VzLCB0aGUgd2luZG93IGlzIHJvb3QgZWxlbWVudCBpLGUsIGRvY3VtZW50RWxlbWVudC5cbmNvbnN0IGZpbmRTY3JvbGxhYmxlID0gKGVsZW1lbnQ6IEVsZW1lbnQpOiBFbGVtZW50IHwgbnVsbCA9PiB7XG4gIGlmIChpc1Njcm9sbGFibGVTdHlsZShlbGVtZW50KSAmJiBpc092ZXJmbG93ZWQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIGNvbnN0IGNoaWxkcmVuID0gQXJyYXkuZnJvbShlbGVtZW50LmNoaWxkcmVuKS5maWx0ZXIoZG9tcy5pc1Zpc2libGUpO1xuICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVuKSB7XG4gICAgY29uc3Qgc2Nyb2xsYWJsZSA9IGZpbmRTY3JvbGxhYmxlKGNoaWxkKTtcbiAgICBpZiAoc2Nyb2xsYWJsZSkge1xuICAgICAgcmV0dXJuIHNjcm9sbGFibGU7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuY29uc3Qgc2Nyb2xsVGFyZ2V0ID0gKCkgPT4ge1xuICBpZiAoaXNPdmVyZmxvd2VkKHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpKSB7XG4gICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4gIH1cbiAgaWYgKGlzT3ZlcmZsb3dlZCh3aW5kb3cuZG9jdW1lbnQuYm9keSkpIHtcbiAgICByZXR1cm4gd2luZG93LmRvY3VtZW50LmJvZHk7XG4gIH1cbiAgY29uc3QgdGFyZ2V0ID0gZmluZFNjcm9sbGFibGUod2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gIGlmICh0YXJnZXQpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIHJldHVybiB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufTtcblxuY29uc3QgcmVzZXRTY3JvbGxpbmcgPSAoKSA9PiB7XG4gIHNjcm9sbGluZyA9IGZhbHNlO1xufTtcblxuY2xhc3MgU2Nyb2xsZXIge1xuICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnQ7XG5cbiAgcHJpdmF0ZSBzbW9vdGg6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudCwgc21vb3RoOiBib29sZWFuKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnNtb290aCA9IHNtb290aDtcbiAgfVxuXG4gIHNjcm9sbFRvKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnNtb290aCkge1xuICAgICAgdGhpcy5lbGVtZW50LnNjcm9sbFRvKHgsIHkpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuc2Nyb2xsVG8oe1xuICAgICAgbGVmdDogeCxcbiAgICAgIHRvcDogeSxcbiAgICAgIGJlaGF2aW9yOiAnc21vb3RoJyxcbiAgICB9KTtcbiAgICB0aGlzLnByZXBhcmVSZXNldCgpO1xuICB9XG5cbiAgc2Nyb2xsQnkoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsZWZ0ID0gdGhpcy5lbGVtZW50LnNjcm9sbExlZnQgKyB4O1xuICAgIGNvbnN0IHRvcCA9IHRoaXMuZWxlbWVudC5zY3JvbGxUb3AgKyB5O1xuICAgIHRoaXMuc2Nyb2xsVG8obGVmdCwgdG9wKTtcbiAgfVxuXG4gIHByZXBhcmVSZXNldCgpOiB2b2lkIHtcbiAgICBzY3JvbGxpbmcgPSB0cnVlO1xuICAgIGlmIChsYXN0VGltZW91dElkKSB7XG4gICAgICBjbGVhclRpbWVvdXQobGFzdFRpbWVvdXRJZCk7XG4gICAgICBsYXN0VGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgbGFzdFRpbWVvdXRJZCA9IHdpbmRvdy5zZXRUaW1lb3V0KHJlc2V0U2Nyb2xsaW5nLCAxMDApO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIFBvaW50ID0geyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuXG5leHBvcnQgZGVmYXVsdCBpbnRlcmZhY2UgU2Nyb2xsUHJlc2VudGVyIHtcbiAgZ2V0U2Nyb2xsKCk6IFBvaW50O1xuICBzY3JvbGxWZXJ0aWNhbGx5KGFtb3VudDogbnVtYmVyLCBzbW9vdGg6IGJvb2xlYW4pOiB2b2lkO1xuICBzY3JvbGxIb3Jpem9uYWxseShhbW91bnQ6IG51bWJlciwgc21vb3RoOiBib29sZWFuKTogdm9pZDtcbiAgc2Nyb2xsUGFnZXMoYW1vdW50OiBudW1iZXIsIHNtb290aDogYm9vbGVhbik6IHZvaWQ7XG4gIHNjcm9sbFRvKHg6IG51bWJlciwgeTogbnVtYmVyLCBzbW9vdGg6IGJvb2xlYW4pOiB2b2lkO1xuICBzY3JvbGxUb1RvcChzbW9vdGg6IGJvb2xlYW4pOiB2b2lkO1xuICBzY3JvbGxUb0JvdHRvbShzbW9vdGg6IGJvb2xlYW4pOiB2b2lkO1xuICBzY3JvbGxUb0hvbWUoc21vb3RoOiBib29sZWFuKTogdm9pZDtcbiAgc2Nyb2xsVG9FbmQoc21vb3RoOiBib29sZWFuKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFNjcm9sbFByZXNlbnRlckltcGwge1xuICBnZXRTY3JvbGwoKTogUG9pbnQge1xuICAgIGNvbnN0IHRhcmdldCA9IHNjcm9sbFRhcmdldCgpO1xuICAgIHJldHVybiB7IHg6IHRhcmdldC5zY3JvbGxMZWZ0LCB5OiB0YXJnZXQuc2Nyb2xsVG9wIH07XG4gIH1cblxuICBzY3JvbGxWZXJ0aWNhbGx5KGNvdW50OiBudW1iZXIsIHNtb290aDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IHNjcm9sbFRhcmdldCgpO1xuICAgIGxldCBkZWx0YSA9IFNDUk9MTF9ERUxUQV9ZICogY291bnQ7XG4gICAgaWYgKHNjcm9sbGluZykge1xuICAgICAgZGVsdGEgPSBTQ1JPTExfREVMVEFfWSAqIGNvdW50ICogNDtcbiAgICB9XG4gICAgbmV3IFNjcm9sbGVyKHRhcmdldCwgc21vb3RoKS5zY3JvbGxCeSgwLCBkZWx0YSk7XG4gIH1cblxuICBzY3JvbGxIb3Jpem9uYWxseShjb3VudDogbnVtYmVyLCBzbW9vdGg6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBzY3JvbGxUYXJnZXQoKTtcbiAgICBsZXQgZGVsdGEgPSBTQ1JPTExfREVMVEFfWCAqIGNvdW50O1xuICAgIGlmIChzY3JvbGxpbmcpIHtcbiAgICAgIGRlbHRhID0gU0NST0xMX0RFTFRBX1ggKiBjb3VudCAqIDQ7XG4gICAgfVxuICAgIG5ldyBTY3JvbGxlcih0YXJnZXQsIHNtb290aCkuc2Nyb2xsQnkoZGVsdGEsIDApO1xuICB9XG5cbiAgc2Nyb2xsUGFnZXMoY291bnQ6IG51bWJlciwgc21vb3RoOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0KCk7XG4gICAgY29uc3QgaGVpZ2h0ID0gdGFyZ2V0LmNsaWVudEhlaWdodDtcbiAgICBsZXQgZGVsdGEgPSBoZWlnaHQgKiBjb3VudDtcbiAgICBpZiAoc2Nyb2xsaW5nKSB7XG4gICAgICBkZWx0YSA9IGhlaWdodCAqIGNvdW50O1xuICAgIH1cbiAgICBuZXcgU2Nyb2xsZXIodGFyZ2V0LCBzbW9vdGgpLnNjcm9sbEJ5KDAsIGRlbHRhKTtcbiAgfVxuXG4gIHNjcm9sbFRvKHg6IG51bWJlciwgeTogbnVtYmVyLCBzbW9vdGg6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBzY3JvbGxUYXJnZXQoKTtcbiAgICBuZXcgU2Nyb2xsZXIodGFyZ2V0LCBzbW9vdGgpLnNjcm9sbFRvKHgsIHkpO1xuICB9XG5cbiAgc2Nyb2xsVG9Ub3Aoc21vb3RoOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0KCk7XG4gICAgY29uc3QgeCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgIGNvbnN0IHkgPSAwO1xuICAgIG5ldyBTY3JvbGxlcih0YXJnZXQsIHNtb290aCkuc2Nyb2xsVG8oeCwgeSk7XG4gIH1cblxuICBzY3JvbGxUb0JvdHRvbShzbW9vdGg6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBzY3JvbGxUYXJnZXQoKTtcbiAgICBjb25zdCB4ID0gdGFyZ2V0LnNjcm9sbExlZnQ7XG4gICAgY29uc3QgeSA9IHRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgbmV3IFNjcm9sbGVyKHRhcmdldCwgc21vb3RoKS5zY3JvbGxUbyh4LCB5KTtcbiAgfVxuXG4gIHNjcm9sbFRvSG9tZShzbW9vdGg6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBzY3JvbGxUYXJnZXQoKTtcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gdGFyZ2V0LnNjcm9sbFRvcDtcbiAgICBuZXcgU2Nyb2xsZXIodGFyZ2V0LCBzbW9vdGgpLnNjcm9sbFRvKHgsIHkpO1xuICB9XG5cbiAgc2Nyb2xsVG9FbmQoc21vb3RoOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3QgdGFyZ2V0ID0gc2Nyb2xsVGFyZ2V0KCk7XG4gICAgY29uc3QgeCA9IHRhcmdldC5zY3JvbGxXaWR0aDtcbiAgICBjb25zdCB5ID0gdGFyZ2V0LnNjcm9sbFRvcDtcbiAgICBuZXcgU2Nyb2xsZXIodGFyZ2V0LCBzbW9vdGgpLnNjcm9sbFRvKHgsIHkpO1xuICB9XG59XG4iLCJpbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL1NldHRpbmdzJztcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uLy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBTZXR0aW5nQ2xpZW50IHtcbiAgbG9hZCgpOiBQcm9taXNlPFNldHRpbmdzPjtcbn1cblxuZXhwb3J0IGNsYXNzIFNldHRpbmdDbGllbnRJbXBsIHtcbiAgYXN5bmMgbG9hZCgpOiBQcm9taXNlPFNldHRpbmdzPiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCBicm93c2VyLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogbWVzc2FnZXMuU0VUVElOR1NfUVVFUlksXG4gICAgfSk7XG4gICAgcmV0dXJuIFNldHRpbmdzLmZyb21KU09OKHNldHRpbmdzKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNldHRpbmdzLCB7IERlZmF1bHRTZXR0aW5nIH0gZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL1NldHRpbmdzJztcblxubGV0IGN1cnJlbnQ6IFNldHRpbmdzID0gRGVmYXVsdFNldHRpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBTZXR0aW5nUmVwb3NpdG9yeSB7XG4gIHNldChzZXR0aW5nOiBTZXR0aW5ncyk6IHZvaWQ7XG5cbiAgZ2V0KCk6IFNldHRpbmdzO1xufVxuXG5leHBvcnQgY2xhc3MgU2V0dGluZ1JlcG9zaXRvcnlJbXBsIGltcGxlbWVudHMgU2V0dGluZ1JlcG9zaXRvcnkge1xuICBzZXQoc2V0dGluZzogU2V0dGluZ3MpOiB2b2lkIHtcbiAgICBjdXJyZW50ID0gc2V0dGluZztcbiAgfVxuXG4gIGdldCgpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIGN1cnJlbnQ7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uLy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGludGVyZmFjZSBUYWJzQ2xpZW50IHtcbiAgb3BlblVybCh1cmw6IHN0cmluZywgbmV3VGFiOiBib29sZWFuLCBiYWNrZ3JvdW5kPzogYm9vbGVhbik6IFByb21pc2U8dm9pZD47XG59XG5cbmV4cG9ydCBjbGFzcyBUYWJzQ2xpZW50SW1wbCBpbXBsZW1lbnRzIFRhYnNDbGllbnQge1xuICBhc3luYyBvcGVuVXJsKFxuICAgIHVybDogc3RyaW5nLFxuICAgIG5ld1RhYjogYm9vbGVhbixcbiAgICBiYWNrZ3JvdW5kPzogYm9vbGVhbixcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci5ydW50aW1lLnNlbmRNZXNzYWdlKHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLk9QRU5fVVJMLFxuICAgICAgdXJsLFxuICAgICAgbmV3VGFiLFxuICAgICAgYmFja2dyb3VuZCxcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==