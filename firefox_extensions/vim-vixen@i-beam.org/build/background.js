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
/******/ 	return __webpack_require__(__webpack_require__.s = 162);
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MemoryStorage_1 = tslib_1.__importDefault(__webpack_require__(28));
const CURRENT_SELECTED_KEY = 'tabs.current.selected';
const LAST_SELECTED_KEY = 'tabs.last.selected';
let TabPresenter = class TabPresenter {
    open(url, tabId) {
        return browser.tabs.update(tabId, { url });
    }
    create(url, opts) {
        return browser.tabs.create(Object.assign({ url }, opts));
    }
    async getCurrent() {
        const tabs = await browser.tabs.query({
            active: true, currentWindow: true
        });
        return tabs[0];
    }
    getAll() {
        return browser.tabs.query({ currentWindow: true });
    }
    async getLastSelectedId() {
        const cache = new MemoryStorage_1.default();
        const tabId = await cache.get(LAST_SELECTED_KEY);
        if (tabId === null || typeof tabId === 'undefined') {
            return;
        }
        return tabId;
    }
    async getByKeyword(keyword, excludePinned = false) {
        const tabs = await browser.tabs.query({ currentWindow: true });
        return tabs.filter((t) => {
            return t.url && t.url.toLowerCase().includes(keyword.toLowerCase()) ||
                t.title && t.title.toLowerCase().includes(keyword.toLowerCase());
        }).filter((t) => {
            return !(excludePinned && t.pinned);
        });
    }
    select(tabId) {
        return browser.tabs.update(tabId, { active: true });
    }
    remove(ids) {
        return browser.tabs.remove(ids);
    }
    async reopen() {
        const window = await browser.windows.getCurrent();
        const sessions = await browser.sessions.getRecentlyClosed();
        const session = sessions.find((s) => {
            return s.tab && s.tab.windowId === window.id;
        });
        if (!session) {
            return;
        }
        if (session.tab && session.tab.sessionId) {
            return browser.sessions.restore(session.tab.sessionId);
        }
        if (session.window && session.window.sessionId) {
            return browser.sessions.restore(session.window.sessionId);
        }
    }
    reload(tabId, cache) {
        return browser.tabs.reload(tabId, { bypassCache: cache });
    }
    setPinned(tabId, pinned) {
        return browser.tabs.update(tabId, { pinned });
    }
    duplicate(id) {
        return browser.tabs.duplicate(id);
    }
    getZoom(tabId) {
        return browser.tabs.getZoom(tabId);
    }
    setZoom(tabId, factor) {
        return browser.tabs.setZoom(tabId, factor);
    }
    onSelected(listener) {
        browser.tabs.onActivated.addListener(listener);
    }
};
TabPresenter = tslib_1.__decorate([
    tsyringe_1.injectable()
], TabPresenter);
exports.default = TabPresenter;
const tabPresenter = new TabPresenter();
tabPresenter.onSelected((tab) => {
    const cache = new MemoryStorage_1.default();
    const lastId = cache.get(CURRENT_SELECTED_KEY);
    if (lastId) {
        cache.set(LAST_SELECTED_KEY, lastId);
    }
    cache.set(CURRENT_SELECTED_KEY, tab.tabId);
});


/***/ }),
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
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
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
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const db = {};
class MemoryStorage {
    set(name, value) {
        const data = JSON.stringify(value);
        if (typeof data === 'undefined') {
            throw new Error('value is not serializable');
        }
        db[name] = data;
    }
    get(name) {
        const data = db[name];
        if (!data) {
            return undefined;
        }
        return JSON.parse(data);
    }
}
exports.default = MemoryStorage;


/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
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
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const messages = tslib_1.__importStar(__webpack_require__(3));
let ConsoleClient = class ConsoleClient {
    showCommand(tabId, command) {
        return browser.tabs.sendMessage(tabId, {
            type: messages.CONSOLE_SHOW_COMMAND,
            command,
        });
    }
    showFind(tabId) {
        return browser.tabs.sendMessage(tabId, {
            type: messages.CONSOLE_SHOW_FIND
        });
    }
    showInfo(tabId, message) {
        return browser.tabs.sendMessage(tabId, {
            type: messages.CONSOLE_SHOW_INFO,
            text: message,
        });
    }
    showError(tabId, message) {
        return browser.tabs.sendMessage(tabId, {
            type: messages.CONSOLE_SHOW_ERROR,
            text: message,
        });
    }
    hide(tabId) {
        return browser.tabs.sendMessage(tabId, {
            type: messages.CONSOLE_HIDE,
        });
    }
};
ConsoleClient = tslib_1.__decorate([
    tsyringe_1.injectable()
], ConsoleClient);
exports.default = ConsoleClient;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const messages = tslib_1.__importStar(__webpack_require__(3));
let ContentMessageClient = class ContentMessageClient {
    async broadcastSettingsChanged() {
        const tabs = await browser.tabs.query({});
        for (const tab of tabs) {
            if (!tab.id || tab.url && tab.url.startsWith('about:')) {
                continue;
            }
            browser.tabs.sendMessage(tab.id, {
                type: messages.SETTINGS_CHANGED,
            });
        }
    }
    async getAddonEnabled(tabId) {
        const enabled = await browser.tabs.sendMessage(tabId, {
            type: messages.ADDON_ENABLED_QUERY,
        });
        return enabled;
    }
    async toggleAddonEnabled(tabId) {
        await browser.tabs.sendMessage(tabId, {
            type: messages.ADDON_TOGGLE_ENABLED,
        });
    }
    async scrollTo(tabId, x, y) {
        await browser.tabs.sendMessage(tabId, {
            type: messages.TAB_SCROLL_TO,
            x,
            y,
        });
    }
};
ContentMessageClient = tslib_1.__decorate([
    tsyringe_1.injectable()
], ContentMessageClient);
exports.default = ContentMessageClient;


/***/ }),
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MemoryStorage_1 = tslib_1.__importDefault(__webpack_require__(28));
const Settings_1 = tslib_1.__importDefault(__webpack_require__(15));
const Properties_1 = tslib_1.__importDefault(__webpack_require__(8));
const CACHED_SETTING_KEY = 'setting';
let SettingRepository = class SettingRepository {
    constructor() {
        this.cache = new MemoryStorage_1.default();
    }
    get() {
        const data = this.cache.get(CACHED_SETTING_KEY);
        return Promise.resolve(Settings_1.default.fromJSON(data));
    }
    update(value) {
        return this.cache.set(CACHED_SETTING_KEY, value.toJSON());
    }
    async setProperty(name, value) {
        const def = Properties_1.default.def(name);
        if (!def) {
            throw new Error('unknown property: ' + name);
        }
        if (typeof value !== def.type) {
            throw new TypeError(`property type of ${name} mismatch: ${typeof value}`);
        }
        let newValue = value;
        if (typeof value === 'string' && value === '') {
            newValue = def.defaultValue;
        }
        const current = await this.get();
        switch (name) {
            case 'hintchars':
                current.properties.hintchars = newValue;
                break;
            case 'smoothscroll':
                current.properties.smoothscroll = newValue;
                break;
            case 'complete':
                current.properties.complete = newValue;
                break;
        }
        return this.update(current);
    }
};
SettingRepository = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], SettingRepository);
exports.default = SettingRepository;


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let WindowPresenter = class WindowPresenter {
    create(url) {
        return browser.windows.create({ url });
    }
};
WindowPresenter = tslib_1.__decorate([
    tsyringe_1.injectable()
], WindowPresenter);
exports.default = WindowPresenter;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const operations = tslib_1.__importStar(__webpack_require__(6));
const RepeatRepository_1 = tslib_1.__importDefault(__webpack_require__(174));
let RepeatUseCase = class RepeatUseCase {
    constructor(repeatRepository) {
        this.repeatRepository = repeatRepository;
    }
    storeLastOperation(op) {
        this.repeatRepository.setLastOperation(op);
    }
    getLastOperation() {
        return this.repeatRepository.getLastOperation();
    }
    isRepeatable(op) {
        switch (op.type) {
            case operations.NAVIGATE_HISTORY_PREV:
            case operations.NAVIGATE_HISTORY_NEXT:
            case operations.NAVIGATE_LINK_PREV:
            case operations.NAVIGATE_LINK_NEXT:
            case operations.NAVIGATE_PARENT:
            case operations.NAVIGATE_ROOT:
            case operations.PAGE_SOURCE:
            case operations.PAGE_HOME:
            case operations.TAB_CLOSE:
            case operations.TAB_CLOSE_FORCE:
            case operations.TAB_CLOSE_RIGHT:
            case operations.TAB_REOPEN:
            case operations.TAB_RELOAD:
            case operations.TAB_PIN:
            case operations.TAB_UNPIN:
            case operations.TAB_TOGGLE_PINNED:
            case operations.TAB_DUPLICATE:
            case operations.ZOOM_IN:
            case operations.ZOOM_OUT:
            case operations.ZOOM_NEUTRAL:
            case operations.INTERNAL_OPEN_URL:
                return true;
        }
        return false;
    }
};
RepeatUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [RepeatRepository_1.default])
], RepeatUseCase);
exports.default = RepeatUseCase;


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const SettingUseCase_1 = tslib_1.__importDefault(__webpack_require__(175));
const ContentMessageClient_1 = tslib_1.__importDefault(__webpack_require__(35));
let SettingController = class SettingController {
    constructor(settingUseCase, contentMessageClient) {
        this.settingUseCase = settingUseCase;
        this.contentMessageClient = contentMessageClient;
    }
    getSetting() {
        return this.settingUseCase.get();
    }
    async reload() {
        await this.settingUseCase.reload();
        this.contentMessageClient.broadcastSettingsChanged();
    }
};
SettingController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [SettingUseCase_1.default,
        ContentMessageClient_1.default])
], SettingController);
exports.default = SettingController;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const NOTIFICATION_ID_UPDATE = 'vimvixen-update';
const NOTIFICATION_ID_INVALID_SETTINGS = 'vimvixen-update-invalid-settings';
let NotifyPresenter = class NotifyPresenter {
    async notifyUpdated(version, onclick) {
        const title = `Vim Vixen ${version} has been installed`;
        const message = 'Click here to see release notes';
        const listener = (id) => {
            if (id !== NOTIFICATION_ID_UPDATE) {
                return;
            }
            onclick();
            browser.notifications.onClicked.removeListener(listener);
        };
        browser.notifications.onClicked.addListener(listener);
        await browser.notifications.create(NOTIFICATION_ID_UPDATE, {
            'type': 'basic',
            'iconUrl': browser.extension.getURL('resources/icon_48x48.png'),
            title,
            message,
        });
    }
    async notifyInvalidSettings(onclick) {
        const title = `Loaded settings is invalid`;
        const message = 'The default settings is used due to the last saved settings is invalid.  Check your current settings from the add-on preference';
        const listener = (id) => {
            if (id !== NOTIFICATION_ID_INVALID_SETTINGS) {
                return;
            }
            onclick();
            browser.notifications.onClicked.removeListener(listener);
        };
        browser.notifications.onClicked.addListener(listener);
        await browser.notifications.create(NOTIFICATION_ID_INVALID_SETTINGS, {
            'type': 'basic',
            'iconUrl': browser.extension.getURL('resources/icon_48x48.png'),
            title,
            message,
        });
    }
};
NotifyPresenter = tslib_1.__decorate([
    tsyringe_1.injectable()
], NotifyPresenter);
exports.default = NotifyPresenter;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const FindRepository_1 = tslib_1.__importDefault(__webpack_require__(178));
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const ConsoleClient_1 = tslib_1.__importDefault(__webpack_require__(34));
let FindUseCase = class FindUseCase {
    constructor(tabPresenter, findRepository, consoleClient) {
        this.tabPresenter = tabPresenter;
        this.findRepository = findRepository;
        this.consoleClient = consoleClient;
    }
    getKeyword() {
        return this.findRepository.getKeyword();
    }
    setKeyword(keyword) {
        return this.findRepository.setKeyword(keyword);
    }
    async findStart() {
        const tab = await this.tabPresenter.getCurrent();
        return this.consoleClient.showFind(tab.id);
    }
};
FindUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        FindRepository_1.default,
        ConsoleClient_1.default])
], FindUseCase);
exports.default = FindUseCase;


/***/ }),
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
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
__webpack_require__(36);
const tsyringe_1 = __webpack_require__(2);
const Application_1 = tslib_1.__importDefault(__webpack_require__(163));
const app = tsyringe_1.container.resolve(Application_1.default);
app.run();


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const ContentMessageListener_1 = tslib_1.__importDefault(__webpack_require__(164));
const SettingController_1 = tslib_1.__importDefault(__webpack_require__(73));
const VersionController_1 = tslib_1.__importDefault(__webpack_require__(195));
let Application = class Application {
    constructor(contentMessageListener, settingController, versionController) {
        this.contentMessageListener = contentMessageListener;
        this.settingController = settingController;
        this.versionController = versionController;
    }
    run() {
        this.settingController.reload();
        browser.runtime.onInstalled.addListener((details) => {
            if (details.reason !== 'install' && details.reason !== 'update') {
                return;
            }
            this.versionController.notify();
        });
        this.contentMessageListener.run();
        browser.storage.onChanged.addListener((changes, area) => {
            if (area !== 'local') {
                return;
            }
            if (changes.settings) {
                this.settingController.reload();
            }
        });
    }
};
Application = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [ContentMessageListener_1.default,
        SettingController_1.default,
        VersionController_1.default])
], Application);
exports.default = Application;


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const messages = tslib_1.__importStar(__webpack_require__(3));
const CommandController_1 = tslib_1.__importDefault(__webpack_require__(165));
const SettingController_1 = tslib_1.__importDefault(__webpack_require__(73));
const FindController_1 = tslib_1.__importDefault(__webpack_require__(177));
const AddonEnabledController_1 = tslib_1.__importDefault(__webpack_require__(179));
const LinkController_1 = tslib_1.__importDefault(__webpack_require__(182));
const OperationController_1 = tslib_1.__importDefault(__webpack_require__(184));
const MarkController_1 = tslib_1.__importDefault(__webpack_require__(192));
let ContentMessageListener = class ContentMessageListener {
    constructor(settingController, commandController, findController, addonEnabledController, linkController, operationController, markController) {
        this.settingController = settingController;
        this.commandController = commandController;
        this.findController = findController;
        this.addonEnabledController = addonEnabledController;
        this.linkController = linkController;
        this.operationController = operationController;
        this.markController = markController;
        this.consolePorts = {};
    }
    run() {
        browser.runtime.onMessage.addListener((message, sender) => {
            try {
                const ret = this.onMessage(message, sender.tab);
                if (!(ret instanceof Promise)) {
                    return {};
                }
                return ret.catch((e) => {
                    if (!sender.tab || !sender.tab.id) {
                        return;
                    }
                    return browser.tabs.sendMessage(sender.tab.id, {
                        type: messages.CONSOLE_SHOW_ERROR,
                        text: e.message,
                    });
                });
            }
            catch (e) {
                if (!sender.tab || !sender.tab.id) {
                    return;
                }
                return browser.tabs.sendMessage(sender.tab.id, {
                    type: messages.CONSOLE_SHOW_ERROR,
                    text: e.message,
                });
            }
        });
        browser.runtime.onConnect.addListener(this.onConnected.bind(this));
    }
    onMessage(message, senderTab) {
        switch (message.type) {
            case messages.CONSOLE_QUERY_COMPLETIONS:
                return this.onConsoleQueryCompletions(message.text);
            case messages.CONSOLE_ENTER_COMMAND:
                return this.onConsoleEnterCommand(message.text);
            case messages.SETTINGS_QUERY:
                return this.onSettingsQuery();
            case messages.FIND_GET_KEYWORD:
                return this.onFindGetKeyword();
            case messages.FIND_SET_KEYWORD:
                return this.onFindSetKeyword(message.keyword);
            case messages.ADDON_ENABLED_RESPONSE:
                return this.onAddonEnabledResponse(message.enabled);
            case messages.OPEN_URL:
                return this.onOpenUrl(message.newTab, message.url, senderTab.id, message.background);
            case messages.BACKGROUND_OPERATION:
                return this.onBackgroundOperation(message.repeat, message.operation);
            case messages.MARK_SET_GLOBAL:
                return this.onMarkSetGlobal(message.key, message.x, message.y);
            case messages.MARK_JUMP_GLOBAL:
                return this.onMarkJumpGlobal(message.key);
            case messages.CONSOLE_FRAME_MESSAGE:
                return this.onConsoleFrameMessage(senderTab.id, message.message);
        }
        throw new Error('unsupported message: ' + message.type);
    }
    async onConsoleQueryCompletions(line) {
        const completions = await this.commandController.getCompletions(line);
        return Promise.resolve(completions);
    }
    onConsoleEnterCommand(text) {
        return this.commandController.exec(text);
    }
    async onSettingsQuery() {
        return (await this.settingController.getSetting()).toJSON();
    }
    onFindGetKeyword() {
        return this.findController.getKeyword();
    }
    onFindSetKeyword(keyword) {
        return this.findController.setKeyword(keyword);
    }
    onAddonEnabledResponse(enabled) {
        return this.addonEnabledController.indicate(enabled);
    }
    onOpenUrl(newTab, url, openerId, background) {
        if (newTab) {
            return this.linkController.openNewTab(url, openerId, background);
        }
        return this.linkController.openToTab(url, openerId);
    }
    onBackgroundOperation(count, op) {
        return this.operationController.exec(count, op);
    }
    onMarkSetGlobal(key, x, y) {
        return this.markController.setGlobal(key, x, y);
    }
    onMarkJumpGlobal(key) {
        return this.markController.jumpGlobal(key);
    }
    onConsoleFrameMessage(tabId, message) {
        const port = this.consolePorts[tabId];
        if (!port) {
            return;
        }
        port.postMessage(message);
    }
    onConnected(port) {
        if (port.name !== 'vimvixen-console') {
            return;
        }
        if (port.sender && port.sender.tab && port.sender.tab.id) {
            const id = port.sender.tab.id;
            this.consolePorts[id] = port;
        }
    }
};
ContentMessageListener = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [SettingController_1.default,
        CommandController_1.default,
        FindController_1.default,
        AddonEnabledController_1.default,
        LinkController_1.default,
        OperationController_1.default,
        MarkController_1.default])
], ContentMessageListener);
exports.default = ContentMessageListener;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const CompletionsUseCase_1 = tslib_1.__importDefault(__webpack_require__(166));
const CommandUseCase_1 = tslib_1.__importDefault(__webpack_require__(170));
const trimStart = (str) => {
    return str.replace(/^\s+/, '');
};
let CommandController = class CommandController {
    constructor(completionsUseCase, commandIndicator) {
        this.completionsUseCase = completionsUseCase;
        this.commandIndicator = commandIndicator;
    }
    getCompletions(line) {
        const trimmed = trimStart(line);
        const words = trimmed.split(/ +/);
        const name = words[0];
        if (words.length === 1) {
            return this.completionsUseCase.queryConsoleCommand(name);
        }
        const keywords = trimStart(trimmed.slice(name.length));
        switch (words[0]) {
            case 'o':
            case 'open':
            case 't':
            case 'tabopen':
            case 'w':
            case 'winopen':
                return this.completionsUseCase.queryOpen(name, keywords);
            case 'b':
            case 'buffer':
                return this.completionsUseCase.queryBuffer(name, keywords);
            case 'bd':
            case 'bdel':
            case 'bdelete':
            case 'bdeletes':
                return this.completionsUseCase.queryBdelete(name, keywords);
            case 'bd!':
            case 'bdel!':
            case 'bdelete!':
            case 'bdeletes!':
                return this.completionsUseCase.queryBdeleteForce(name, keywords);
            case 'set':
                return this.completionsUseCase.querySet(name, keywords);
        }
        return Promise.resolve([]);
    }
    exec(line) {
        const trimmed = trimStart(line);
        const words = trimmed.split(/ +/);
        const name = words[0];
        if (words[0].length === 0) {
            return Promise.resolve();
        }
        const keywords = trimStart(trimmed.slice(name.length));
        switch (words[0]) {
            case 'o':
            case 'open':
                return this.commandIndicator.open(keywords);
            case 't':
            case 'tabopen':
                return this.commandIndicator.tabopen(keywords);
            case 'w':
            case 'winopen':
                return this.commandIndicator.winopen(keywords);
            case 'b':
            case 'buffer':
                return this.commandIndicator.buffer(keywords);
            case 'bd':
            case 'bdel':
            case 'bdelete':
                return this.commandIndicator.bdelete(false, keywords);
            case 'bd!':
            case 'bdel!':
            case 'bdelete!':
                return this.commandIndicator.bdelete(true, keywords);
            case 'bdeletes':
                return this.commandIndicator.bdeletes(false, keywords);
            case 'bdeletes!':
                return this.commandIndicator.bdeletes(true, keywords);
            case 'addbookmark':
                return this.commandIndicator.addbookmark(keywords);
            case 'q':
            case 'quit':
                return this.commandIndicator.quit();
            case 'qa':
            case 'quitall':
                return this.commandIndicator.quitAll();
            case 'set':
                return this.commandIndicator.set(keywords);
            case 'h':
            case 'help':
                return this.commandIndicator.help();
        }
        throw new Error(words[0] + ' command is not defined');
    }
};
CommandController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [CompletionsUseCase_1.default,
        CommandUseCase_1.default])
], CommandController);
exports.default = CommandController;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const CommandDocs_1 = tslib_1.__importDefault(__webpack_require__(167));
const CompletionsRepository_1 = tslib_1.__importDefault(__webpack_require__(168));
const filters = tslib_1.__importStar(__webpack_require__(169));
const SettingRepository_1 = tslib_1.__importDefault(__webpack_require__(62));
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const Properties_1 = tslib_1.__importDefault(__webpack_require__(8));
const COMPLETION_ITEM_LIMIT = 10;
let CompletionsUseCase = class CompletionsUseCase {
    constructor(tabPresenter, completionsRepository, settingRepository) {
        this.tabPresenter = tabPresenter;
        this.completionsRepository = completionsRepository;
        this.settingRepository = settingRepository;
    }
    queryConsoleCommand(prefix) {
        const keys = Object.keys(CommandDocs_1.default);
        const items = keys
            .filter(name => name.startsWith(prefix))
            .map(name => ({
            caption: name,
            content: name,
            url: CommandDocs_1.default[name],
        }));
        if (items.length === 0) {
            return Promise.resolve([]);
        }
        return Promise.resolve([{ name: 'Console Command', items }]);
    }
    async queryOpen(name, keywords) {
        const settings = await this.settingRepository.get();
        const groups = [];
        const complete = settings.properties.complete;
        for (const c of complete) {
            if (c === 's') {
                const engines = await this.querySearchEngineItems(name, keywords);
                if (engines.length > 0) {
                    groups.push({ name: 'Search Engines', items: engines });
                }
            }
            else if (c === 'h' && typeof browser.history === 'object') {
                const histories = await this.queryHistoryItems(name, keywords);
                if (histories.length > 0) {
                    groups.push({ name: 'History', items: histories });
                }
            }
            else if (c === 'b' && typeof browser.bookmarks === 'object') {
                const bookmarks = await this.queryBookmarkItems(name, keywords);
                if (bookmarks.length > 0) {
                    groups.push({ name: 'Bookmarks', items: bookmarks });
                }
            }
        }
        return groups;
    }
    async queryBuffer(name, keywords) {
        const lastId = await this.tabPresenter.getLastSelectedId();
        const trimmed = keywords.trim();
        let tabs = [];
        if (trimmed.length > 0 && !isNaN(Number(trimmed))) {
            const all = await this.tabPresenter.getAll();
            const index = parseInt(trimmed, 10) - 1;
            if (index >= 0 && index < all.length) {
                tabs = [all[index]];
            }
        }
        else if (trimmed === '%') {
            const all = await this.tabPresenter.getAll();
            const tab = all.find(t => t.active);
            tabs = [tab];
        }
        else if (trimmed === '#') {
            if (typeof lastId !== 'undefined' && lastId !== null) {
                const all = await this.tabPresenter.getAll();
                const tab = all.find(t => t.id === lastId);
                tabs = [tab];
            }
        }
        else {
            tabs = await this.completionsRepository.queryTabs(keywords, false);
        }
        const flag = (tab) => {
            if (tab.active) {
                return '%';
            }
            else if (tab.id === lastId) {
                return '#';
            }
            return ' ';
        };
        const items = tabs.map(tab => ({
            caption: tab.index + 1 + ': ' + flag(tab) + ' ' + tab.title,
            content: name + ' ' + tab.title,
            url: tab.url,
            icon: tab.favIconUrl,
        }));
        if (items.length === 0) {
            return Promise.resolve([]);
        }
        return [{ name: 'Buffers', items }];
    }
    queryBdelete(name, keywords) {
        return this.queryTabs(name, true, keywords);
    }
    queryBdeleteForce(name, keywords) {
        return this.queryTabs(name, false, keywords);
    }
    querySet(name, keywords) {
        const items = Properties_1.default.defs().map((def) => {
            if (def.type === 'boolean') {
                return [
                    {
                        caption: def.name,
                        content: name + ' ' + def.name,
                        url: 'Enable ' + def.description,
                    }, {
                        caption: 'no' + def.name,
                        content: name + ' no' + def.name,
                        url: 'Disable ' + def.description
                    }
                ];
            }
            return [
                {
                    caption: def.name,
                    content: name + ' ' + def.name,
                    url: 'Set ' + def.description,
                }
            ];
        });
        let flatten = items.reduce((acc, val) => acc.concat(val), []);
        flatten = flatten.filter((item) => {
            return item.caption.startsWith(keywords);
        });
        if (flatten.length === 0) {
            return Promise.resolve([]);
        }
        return Promise.resolve([{ name: 'Properties', items: flatten }]);
    }
    async queryTabs(name, excludePinned, args) {
        const tabs = await this.completionsRepository.queryTabs(args, excludePinned);
        const items = tabs.map(tab => ({
            caption: tab.title,
            content: name + ' ' + tab.title,
            url: tab.url,
            icon: tab.favIconUrl
        }));
        if (items.length === 0) {
            return Promise.resolve([]);
        }
        return [{ name: 'Buffers', items }];
    }
    async querySearchEngineItems(name, keywords) {
        const settings = await this.settingRepository.get();
        const engines = Object.keys(settings.search.engines)
            .filter(key => key.startsWith(keywords));
        return engines.map(key => ({
            caption: key,
            content: name + ' ' + key,
        }));
    }
    async queryHistoryItems(name, keywords) {
        let histories = await this.completionsRepository.queryHistories(keywords);
        histories = [histories]
            .map(filters.filterBlankTitle)
            .map(filters.filterHttp)
            .map(filters.filterByTailingSlash)
            .map(pages => filters.filterByPathname(pages, COMPLETION_ITEM_LIMIT))
            .map(pages => filters.filterByOrigin(pages, COMPLETION_ITEM_LIMIT))[0]
            .sort((x, y) => {
            return Number(y.visitCount) - Number(x.visitCount);
        })
            .slice(0, COMPLETION_ITEM_LIMIT);
        return histories.map(page => ({
            caption: page.title,
            content: name + ' ' + page.url,
            url: page.url
        }));
    }
    async queryBookmarkItems(name, keywords) {
        const bookmarks = await this.completionsRepository.queryBookmarks(keywords);
        return bookmarks.slice(0, COMPLETION_ITEM_LIMIT)
            .map(page => ({
            caption: page.title,
            content: name + ' ' + page.url,
            url: page.url
        }));
    }
};
CompletionsUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        CompletionsRepository_1.default,
        SettingRepository_1.default])
], CompletionsUseCase);
exports.default = CompletionsUseCase;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    set: 'Set a value of the property',
    open: 'Open a URL or search by keywords in current tab',
    tabopen: 'Open a URL or search by keywords in new tab',
    winopen: 'Open a URL or search by keywords in new window',
    buffer: 'Select tabs by matched keywords',
    bdelete: 'Close a certain tab matched by keywords',
    bdeletes: 'Close all tabs matched by keywords',
    quit: 'Close the current tab',
    quitall: 'Close all tabs',
    help: 'Open Vim Vixen help in new tab',
};


/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let CompletionsRepository = class CompletionsRepository {
    async queryBookmarks(keywords) {
        const items = await browser.bookmarks.search({ query: keywords });
        return items.filter((item) => {
            if (!item.url) {
                return false;
            }
            let url = undefined;
            try {
                url = new URL(item.url);
            }
            catch (e) {
                return false;
            }
            return item.type === 'bookmark' && url.protocol !== 'place:';
        });
    }
    queryHistories(keywords) {
        return browser.history.search({
            text: keywords,
            startTime: 0,
        });
    }
    async queryTabs(keywords, excludePinned) {
        const tabs = await browser.tabs.query({ currentWindow: true });
        return tabs.filter((t) => {
            return t.url && t.url.toLowerCase().includes(keywords.toLowerCase()) ||
                t.title && t.title.toLowerCase().includes(keywords.toLowerCase());
        }).filter((t) => {
            return !(excludePinned && t.pinned);
        });
    }
};
CompletionsRepository = tslib_1.__decorate([
    tsyringe_1.injectable()
], CompletionsRepository);
exports.default = CompletionsRepository;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const filterHttp = (items) => {
    const httpsHosts = items.map(x => new URL(x.url))
        .filter(x => x.protocol === 'https:')
        .map(x => x.host);
    const hostsSet = new Set(httpsHosts);
    return items.filter((item) => {
        const url = new URL(item.url);
        return url.protocol === 'https:' || !hostsSet.has(url.host);
    });
};
exports.filterHttp = filterHttp;
const filterBlankTitle = (items) => {
    return items.filter(item => item.title && item.title !== '');
};
exports.filterBlankTitle = filterBlankTitle;
const filterByTailingSlash = (items) => {
    const urls = items.map(item => new URL(item.url));
    const simplePaths = urls
        .filter(url => url.hash === '' && url.search === '')
        .map(url => url.origin + url.pathname);
    const pathsSet = new Set(simplePaths);
    return items.filter((item) => {
        const url = new URL(item.url);
        if (url.hash !== '' || url.search !== '' ||
            url.pathname.slice(-1) !== '/') {
            return true;
        }
        return !pathsSet.has(url.origin + url.pathname.slice(0, -1));
    });
};
exports.filterByTailingSlash = filterByTailingSlash;
const filterByPathname = (items, min) => {
    const hash = {};
    for (const item of items) {
        const url = new URL(item.url);
        const pathname = url.origin + url.pathname;
        if (!hash[pathname]) {
            hash[pathname] = item;
        }
        else if (hash[pathname].url.length >
            item.url.length) {
            hash[pathname] = item;
        }
    }
    const filtered = Object.values(hash);
    if (filtered.length < min) {
        return items;
    }
    return filtered;
};
exports.filterByPathname = filterByPathname;
const filterByOrigin = (items, min) => {
    const hash = {};
    for (const item of items) {
        const origin = new URL(item.url).origin;
        if (!hash[origin]) {
            hash[origin] = item;
        }
        else if (hash[origin].url.length >
            item.url.length) {
            hash[origin] = item;
        }
    }
    const filtered = Object.values(hash);
    if (filtered.length < min) {
        return items;
    }
    return filtered;
};
exports.filterByOrigin = filterByOrigin;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const operations = tslib_1.__importStar(__webpack_require__(6));
const parsers = tslib_1.__importStar(__webpack_require__(171));
const urls = tslib_1.__importStar(__webpack_require__(33));
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const WindowPresenter_1 = tslib_1.__importDefault(__webpack_require__(71));
const HelpPresenter_1 = tslib_1.__importDefault(__webpack_require__(172));
const SettingRepository_1 = tslib_1.__importDefault(__webpack_require__(62));
const BookmarkRepository_1 = tslib_1.__importDefault(__webpack_require__(173));
const ConsoleClient_1 = tslib_1.__importDefault(__webpack_require__(34));
const ContentMessageClient_1 = tslib_1.__importDefault(__webpack_require__(35));
const RepeatUseCase_1 = tslib_1.__importDefault(__webpack_require__(72));
let CommandIndicator = class CommandIndicator {
    constructor(tabPresenter, windowPresenter, helpPresenter, settingRepository, bookmarkRepository, consoleClient, contentMessageClient, repeatUseCase) {
        this.tabPresenter = tabPresenter;
        this.windowPresenter = windowPresenter;
        this.helpPresenter = helpPresenter;
        this.settingRepository = settingRepository;
        this.bookmarkRepository = bookmarkRepository;
        this.consoleClient = consoleClient;
        this.contentMessageClient = contentMessageClient;
        this.repeatUseCase = repeatUseCase;
    }
    async open(keywords) {
        const url = await this.urlOrSearch(keywords);
        this.repeatUseCase.storeLastOperation({
            type: operations.INTERNAL_OPEN_URL,
            url,
        });
        return this.tabPresenter.open(url);
    }
    async tabopen(keywords) {
        const url = await this.urlOrSearch(keywords);
        this.repeatUseCase.storeLastOperation({
            type: operations.INTERNAL_OPEN_URL,
            url,
            newTab: true,
        });
        return this.tabPresenter.create(url);
    }
    async winopen(keywords) {
        const url = await this.urlOrSearch(keywords);
        this.repeatUseCase.storeLastOperation({
            type: operations.INTERNAL_OPEN_URL,
            url,
            newWindow: true,
        });
        return this.windowPresenter.create(url);
    }
    async buffer(keywords) {
        if (keywords.length === 0) {
            return;
        }
        if (!isNaN(Number(keywords))) {
            const tabs = await this.tabPresenter.getAll();
            const index = parseInt(keywords, 10) - 1;
            if (index < 0 || tabs.length <= index) {
                throw new RangeError(`tab ${index + 1} does not exist`);
            }
            return this.tabPresenter.select(tabs[index].id);
        }
        else if (keywords.trim() === '%') {
            return;
        }
        else if (keywords.trim() === '#') {
            const lastId = await this.tabPresenter.getLastSelectedId();
            if (typeof lastId === 'undefined' || lastId === null) {
                throw new Error('No last selected tab');
            }
            return this.tabPresenter.select(lastId);
        }
        const current = await this.tabPresenter.getCurrent();
        const tabs = await this.tabPresenter.getByKeyword(keywords);
        if (tabs.length === 0) {
            throw new RangeError('No matching buffer for ' + keywords);
        }
        for (const tab of tabs) {
            if (tab.index > current.index) {
                return this.tabPresenter.select(tab.id);
            }
        }
        return this.tabPresenter.select(tabs[0].id);
    }
    async bdelete(force, keywords) {
        const excludePinned = !force;
        const tabs = await this.tabPresenter.getByKeyword(keywords, excludePinned);
        if (tabs.length === 0) {
            throw new Error('No matching buffer for ' + keywords);
        }
        else if (tabs.length > 1) {
            throw new Error('More than one match for ' + keywords);
        }
        return this.tabPresenter.remove([tabs[0].id]);
    }
    async bdeletes(force, keywords) {
        const excludePinned = !force;
        const tabs = await this.tabPresenter.getByKeyword(keywords, excludePinned);
        const ids = tabs.map(tab => tab.id);
        return this.tabPresenter.remove(ids);
    }
    async quit() {
        const tab = await this.tabPresenter.getCurrent();
        return this.tabPresenter.remove([tab.id]);
    }
    async quitAll() {
        const tabs = await this.tabPresenter.getAll();
        const ids = tabs.map(tab => tab.id);
        this.tabPresenter.remove(ids);
    }
    async addbookmark(title) {
        const tab = await this.tabPresenter.getCurrent();
        const item = await this.bookmarkRepository.create(title, tab.url);
        const message = 'Saved current page: ' + item.url;
        return this.consoleClient.showInfo(tab.id, message);
    }
    async set(keywords) {
        if (keywords.length === 0) {
            return;
        }
        const [name, value] = parsers.parseSetOption(keywords);
        await this.settingRepository.setProperty(name, value);
        return this.contentMessageClient.broadcastSettingsChanged();
    }
    help() {
        return this.helpPresenter.open();
    }
    async urlOrSearch(keywords) {
        const settings = await this.settingRepository.get();
        return urls.searchUrl(keywords, settings.search);
    }
};
CommandIndicator = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        WindowPresenter_1.default,
        HelpPresenter_1.default,
        SettingRepository_1.default,
        BookmarkRepository_1.default,
        ConsoleClient_1.default,
        ContentMessageClient_1.default,
        RepeatUseCase_1.default])
], CommandIndicator);
exports.default = CommandIndicator;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const Properties_1 = tslib_1.__importDefault(__webpack_require__(8));
const mustNumber = (v) => {
    const num = Number(v);
    if (isNaN(num)) {
        throw new Error('Not number: ' + v);
    }
    return num;
};
const parseSetOption = (args) => {
    let [key, value] = args.split('=');
    if (value === undefined) {
        value = !key.startsWith('no');
        key = value ? key : key.slice(2);
    }
    const def = Properties_1.default.def(key);
    if (!def) {
        throw new Error('Unknown property: ' + key);
    }
    if (def.type === 'boolean' && typeof value !== 'boolean' ||
        def.type !== 'boolean' && typeof value === 'boolean') {
        throw new Error('Invalid argument: ' + args);
    }
    switch (def.type) {
        case 'string': return [key, value];
        case 'number': return [key, mustNumber(value)];
        case 'boolean': return [key, value];
        default:
            throw new Error('Unknown property type: ' + def.type);
    }
};
exports.parseSetOption = parseSetOption;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const url = 'https://ueokande.github.io/vim-vixen/';
let HelpPresenter = class HelpPresenter {
    async open() {
        await browser.tabs.create({ url, active: true });
    }
};
HelpPresenter = tslib_1.__decorate([
    tsyringe_1.injectable()
], HelpPresenter);
exports.default = HelpPresenter;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let BookmarkRepository = class BookmarkRepository {
    async create(title, url) {
        const item = await browser.bookmarks.create({
            type: 'bookmark',
            title,
            url,
        });
        if (!item) {
            throw new Error('Could not create a bookmark');
        }
        return item;
    }
};
BookmarkRepository = tslib_1.__decorate([
    tsyringe_1.injectable()
], BookmarkRepository);
exports.default = BookmarkRepository;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MemoryStorage_1 = tslib_1.__importDefault(__webpack_require__(28));
const REPEAT_KEY = 'repeat';
let RepeatRepository = class RepeatRepository {
    constructor() {
        this.cache = new MemoryStorage_1.default();
    }
    getLastOperation() {
        return this.cache.get(REPEAT_KEY);
    }
    setLastOperation(op) {
        this.cache.set(REPEAT_KEY, op);
    }
};
RepeatRepository = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], RepeatRepository);
exports.default = RepeatRepository;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const PersistentSettingRepository_1 = tslib_1.__importDefault(__webpack_require__(176));
const SettingRepository_1 = tslib_1.__importDefault(__webpack_require__(62));
const SettingData_1 = __webpack_require__(13);
const NotifyPresenter_1 = tslib_1.__importDefault(__webpack_require__(74));
let SettingUseCase = class SettingUseCase {
    constructor(persistentSettingRepository, settingRepository, notifyPresenter) {
        this.persistentSettingRepository = persistentSettingRepository;
        this.settingRepository = settingRepository;
        this.notifyPresenter = notifyPresenter;
    }
    get() {
        return this.settingRepository.get();
    }
    async reload() {
        let data;
        try {
            data = await this.persistentSettingRepository.load();
        }
        catch (e) {
            this.showUnableToLoad(e);
        }
        if (!data) {
            data = SettingData_1.DefaultSettingData;
        }
        let value;
        try {
            value = data.toSettings();
        }
        catch (e) {
            this.showUnableToLoad(e);
            value = SettingData_1.DefaultSettingData.toSettings();
        }
        this.settingRepository.update(value);
        return value;
    }
    showUnableToLoad(e) {
        console.error('unable to load settings', e);
        this.notifyPresenter.notifyInvalidSettings(() => {
            browser.runtime.openOptionsPage();
        });
    }
};
SettingUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [PersistentSettingRepository_1.default,
        SettingRepository_1.default,
        NotifyPresenter_1.default])
], SettingUseCase);
exports.default = SettingUseCase;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const SettingData_1 = tslib_1.__importDefault(__webpack_require__(13));
let SettingRepository = class SettingRepository {
    async load() {
        const { settings } = await browser.storage.local.get('settings');
        if (!settings) {
            return null;
        }
        return SettingData_1.default.fromJSON(settings);
    }
};
SettingRepository = tslib_1.__decorate([
    tsyringe_1.injectable()
], SettingRepository);
exports.default = SettingRepository;


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const FindUseCase_1 = tslib_1.__importDefault(__webpack_require__(75));
let FindController = class FindController {
    constructor(findUseCase) {
        this.findUseCase = findUseCase;
    }
    getKeyword() {
        return this.findUseCase.getKeyword();
    }
    setKeyword(keyword) {
        return this.findUseCase.setKeyword(keyword);
    }
};
FindController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [FindUseCase_1.default])
], FindController);
exports.default = FindController;


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MemoryStorage_1 = tslib_1.__importDefault(__webpack_require__(28));
const FIND_KEYWORD_KEY = 'find-keyword';
let FindRepository = class FindRepository {
    constructor() {
        this.cache = new MemoryStorage_1.default();
    }
    getKeyword() {
        return Promise.resolve(this.cache.get(FIND_KEYWORD_KEY));
    }
    setKeyword(keyword) {
        this.cache.set(FIND_KEYWORD_KEY, keyword);
        return Promise.resolve();
    }
};
FindRepository = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], FindRepository);
exports.default = FindRepository;


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const AddonEnabledUseCase_1 = tslib_1.__importDefault(__webpack_require__(180));
let AddonEnabledController = class AddonEnabledController {
    constructor(addonEnabledUseCase) {
        this.addonEnabledUseCase = addonEnabledUseCase;
    }
    indicate(enabled) {
        return this.addonEnabledUseCase.indicate(enabled);
    }
};
AddonEnabledController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [AddonEnabledUseCase_1.default])
], AddonEnabledController);
exports.default = AddonEnabledController;


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const IndicatorPresenter_1 = tslib_1.__importDefault(__webpack_require__(181));
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const ContentMessageClient_1 = tslib_1.__importDefault(__webpack_require__(35));
let AddonEnabledUseCase = class AddonEnabledUseCase {
    constructor(indicatorPresentor, tabPresenter, contentMessageClient) {
        this.indicatorPresentor = indicatorPresentor;
        this.tabPresenter = tabPresenter;
        this.contentMessageClient = contentMessageClient;
        this.indicatorPresentor.onClick((tab) => {
            if (tab.id) {
                this.onIndicatorClick(tab.id);
            }
        });
        this.tabPresenter.onSelected(info => this.onTabSelected(info.tabId));
    }
    indicate(enabled) {
        return this.indicatorPresentor.indicate(enabled);
    }
    onIndicatorClick(tabId) {
        return this.contentMessageClient.toggleAddonEnabled(tabId);
    }
    async onTabSelected(tabId) {
        const enabled = await this.contentMessageClient.getAddonEnabled(tabId);
        return this.indicatorPresentor.indicate(enabled);
    }
};
AddonEnabledUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [IndicatorPresenter_1.default,
        TabPresenter_1.default,
        ContentMessageClient_1.default])
], AddonEnabledUseCase);
exports.default = AddonEnabledUseCase;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
let IndicatorPresenter = class IndicatorPresenter {
    indicate(enabled) {
        const path = enabled
            ? 'resources/enabled_32x32.png'
            : 'resources/disabled_32x32.png';
        if (typeof browser.browserAction.setIcon === 'function') {
            return browser.browserAction.setIcon({ path });
        }
        return Promise.resolve();
    }
    onClick(listener) {
        browser.browserAction.onClicked.addListener(listener);
    }
};
IndicatorPresenter = tslib_1.__decorate([
    tsyringe_1.injectable()
], IndicatorPresenter);
exports.default = IndicatorPresenter;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const LinkUseCase_1 = tslib_1.__importDefault(__webpack_require__(183));
let LinkController = class LinkController {
    constructor(linkUseCase) {
        this.linkUseCase = linkUseCase;
    }
    openToTab(url, tabId) {
        return this.linkUseCase.openToTab(url, tabId);
    }
    openNewTab(url, openerId, background) {
        return this.linkUseCase.openNewTab(url, openerId, background);
    }
};
LinkController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [LinkUseCase_1.default])
], LinkController);
exports.default = LinkController;


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
let LinkUseCase = class LinkUseCase {
    constructor(tabPresenter) {
        this.tabPresenter = tabPresenter;
    }
    openToTab(url, tabId) {
        return this.tabPresenter.open(url, tabId);
    }
    async openNewTab(url, openerId, background) {
        const properties = { active: !background };
        const platform = await browser.runtime.getPlatformInfo();
        if (platform.os !== 'android') {
            properties.openerTabId = openerId;
        }
        return this.tabPresenter.create(url, properties);
    }
};
LinkUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default])
], LinkUseCase);
exports.default = LinkUseCase;


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const operations = tslib_1.__importStar(__webpack_require__(6));
const FindUseCase_1 = tslib_1.__importDefault(__webpack_require__(75));
const ConsoleUseCase_1 = tslib_1.__importDefault(__webpack_require__(185));
const TabUseCase_1 = tslib_1.__importDefault(__webpack_require__(186));
const TabSelectUseCase_1 = tslib_1.__importDefault(__webpack_require__(188));
const ZoomUseCase_1 = tslib_1.__importDefault(__webpack_require__(189));
const NavigateUseCase_1 = tslib_1.__importDefault(__webpack_require__(190));
const RepeatUseCase_1 = tslib_1.__importDefault(__webpack_require__(72));
let OperationController = class OperationController {
    constructor(findUseCase, consoleUseCase, tabUseCase, tabSelectUseCase, zoomUseCase, navigateUseCase, repeatUseCase) {
        this.findUseCase = findUseCase;
        this.consoleUseCase = consoleUseCase;
        this.tabUseCase = tabUseCase;
        this.tabSelectUseCase = tabSelectUseCase;
        this.zoomUseCase = zoomUseCase;
        this.navigateUseCase = navigateUseCase;
        this.repeatUseCase = repeatUseCase;
    }
    async exec(repeat, op) {
        await this.doOperation(repeat, op);
        if (this.repeatUseCase.isRepeatable(op)) {
            this.repeatUseCase.storeLastOperation(op);
        }
    }
    async doOperation(repeat, operation) {
        const opFunc = (() => {
            switch (operation.type) {
                case operations.TAB_CLOSE:
                    return () => this.tabUseCase.close(false, operation.select === 'left');
                case operations.TAB_CLOSE_RIGHT:
                    return () => this.tabUseCase.closeRight();
                case operations.TAB_CLOSE_FORCE:
                    return () => this.tabUseCase.close(true);
                case operations.TAB_REOPEN:
                    return () => this.tabUseCase.reopen();
                case operations.TAB_PREV:
                    return () => this.tabSelectUseCase.selectPrev(1);
                case operations.TAB_NEXT:
                    return () => this.tabSelectUseCase.selectNext(1);
                case operations.TAB_FIRST:
                    return () => this.tabSelectUseCase.selectFirst();
                case operations.TAB_LAST:
                    return () => this.tabSelectUseCase.selectLast();
                case operations.TAB_PREV_SEL:
                    return () => this.tabSelectUseCase.selectPrevSelected();
                case operations.TAB_RELOAD:
                    return () => this.tabUseCase.reload(operation.cache);
                case operations.TAB_PIN:
                    return () => this.tabUseCase.setPinned(true);
                case operations.TAB_UNPIN:
                    return () => this.tabUseCase.setPinned(false);
                case operations.TAB_TOGGLE_PINNED:
                    return () => this.tabUseCase.togglePinned();
                case operations.TAB_DUPLICATE:
                    return () => this.tabUseCase.duplicate();
                case operations.PAGE_SOURCE:
                    return () => this.tabUseCase.openPageSource();
                case operations.PAGE_HOME:
                    return () => this.tabUseCase.openHome(operation.newTab);
                case operations.ZOOM_IN:
                    return () => this.zoomUseCase.zoomIn();
                case operations.ZOOM_OUT:
                    return () => this.zoomUseCase.zoomOut();
                case operations.ZOOM_NEUTRAL:
                    return () => this.zoomUseCase.zoomNutoral();
                case operations.COMMAND_SHOW:
                    return () => this.consoleUseCase.showCommand();
                case operations.COMMAND_SHOW_OPEN:
                    return () => this.consoleUseCase.showOpenCommand(operation.alter);
                case operations.COMMAND_SHOW_TABOPEN:
                    return () => this.consoleUseCase.showTabopenCommand(operation.alter);
                case operations.COMMAND_SHOW_WINOPEN:
                    return () => this.consoleUseCase.showWinopenCommand(operation.alter);
                case operations.COMMAND_SHOW_BUFFER:
                    return () => this.consoleUseCase.showBufferCommand();
                case operations.COMMAND_SHOW_ADDBOOKMARK:
                    return () => this.consoleUseCase.showAddbookmarkCommand(operation.alter);
                case operations.FIND_START:
                    return () => this.findUseCase.findStart();
                case operations.CANCEL:
                    return () => this.consoleUseCase.hideConsole();
                case operations.NAVIGATE_HISTORY_PREV:
                    return () => this.navigateUseCase.openHistoryPrev();
                case operations.NAVIGATE_HISTORY_NEXT:
                    return () => this.navigateUseCase.openHistoryNext();
                case operations.NAVIGATE_LINK_PREV:
                    return () => this.navigateUseCase.openLinkPrev();
                case operations.NAVIGATE_LINK_NEXT:
                    return () => this.navigateUseCase.openLinkNext();
                case operations.NAVIGATE_PARENT:
                    return () => this.navigateUseCase.openParent();
                case operations.NAVIGATE_ROOT:
                    return () => this.navigateUseCase.openRoot();
                case operations.REPEAT_LAST:
                    return () => {
                        const last = this.repeatUseCase.getLastOperation();
                        if (typeof last !== 'undefined') {
                            return this.doOperation(1, last);
                        }
                        return Promise.resolve();
                    };
                case operations.INTERNAL_OPEN_URL:
                    return () => this.tabUseCase.openURL(operation.url, operation.newTab, operation.newWindow);
                default:
                    throw new Error('unknown operation: ' + operation.type);
            }
        })();
        for (let i = 0; i < repeat; ++i) {
            await opFunc();
        }
    }
};
OperationController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [FindUseCase_1.default,
        ConsoleUseCase_1.default,
        TabUseCase_1.default,
        TabSelectUseCase_1.default,
        ZoomUseCase_1.default,
        NavigateUseCase_1.default,
        RepeatUseCase_1.default])
], OperationController);
exports.default = OperationController;


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const ConsoleClient_1 = tslib_1.__importDefault(__webpack_require__(34));
let ConsoleUseCase = class ConsoleUseCase {
    constructor(tabPresenter, consoleClient) {
        this.tabPresenter = tabPresenter;
        this.consoleClient = consoleClient;
    }
    async showCommand() {
        const tab = await this.tabPresenter.getCurrent();
        return this.consoleClient.showCommand(tab.id, '');
    }
    async showOpenCommand(alter) {
        const tab = await this.tabPresenter.getCurrent();
        let command = 'open ';
        if (alter) {
            command += tab.url || '';
        }
        return this.consoleClient.showCommand(tab.id, command);
    }
    async showTabopenCommand(alter) {
        const tab = await this.tabPresenter.getCurrent();
        let command = 'tabopen ';
        if (alter) {
            command += tab.url || '';
        }
        return this.consoleClient.showCommand(tab.id, command);
    }
    async showWinopenCommand(alter) {
        const tab = await this.tabPresenter.getCurrent();
        let command = 'winopen ';
        if (alter) {
            command += tab.url || '';
        }
        return this.consoleClient.showCommand(tab.id, command);
    }
    async showBufferCommand() {
        const tab = await this.tabPresenter.getCurrent();
        const command = 'buffer ';
        return this.consoleClient.showCommand(tab.id, command);
    }
    async showAddbookmarkCommand(alter) {
        const tab = await this.tabPresenter.getCurrent();
        let command = 'addbookmark ';
        if (alter) {
            command += tab.title || '';
        }
        return this.consoleClient.showCommand(tab.id, command);
    }
    async hideConsole() {
        const tab = await this.tabPresenter.getCurrent();
        return this.consoleClient.hide(tab.id);
    }
};
ConsoleUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        ConsoleClient_1.default])
], ConsoleUseCase);
exports.default = ConsoleUseCase;


/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const WindowPresenter_1 = tslib_1.__importDefault(__webpack_require__(71));
const BrowserSettingRepository_1 = tslib_1.__importDefault(__webpack_require__(187));
let TabUseCase = class TabUseCase {
    constructor(tabPresenter, windowPresenter, browserSettingRepository) {
        this.tabPresenter = tabPresenter;
        this.windowPresenter = windowPresenter;
        this.browserSettingRepository = browserSettingRepository;
    }
    async close(force, selectLeft = false) {
        const tab = await this.tabPresenter.getCurrent();
        if (!force && tab.pinned) {
            return Promise.resolve();
        }
        if (selectLeft && tab.index > 0) {
            const tabs = await this.tabPresenter.getAll();
            await this.tabPresenter.select(tabs[tab.index - 1].id);
        }
        return this.tabPresenter.remove([tab.id]);
    }
    async closeRight() {
        const tabs = await this.tabPresenter.getAll();
        tabs.sort((t1, t2) => t1.index - t2.index);
        const index = tabs.findIndex(t => t.active);
        if (index < 0) {
            return;
        }
        for (let i = index + 1; i < tabs.length; ++i) {
            const tab = tabs[i];
            if (!tab.pinned) {
                this.tabPresenter.remove([tab.id]);
            }
        }
    }
    reopen() {
        return this.tabPresenter.reopen();
    }
    async reload(cache) {
        const tab = await this.tabPresenter.getCurrent();
        return this.tabPresenter.reload(tab.id, cache);
    }
    async setPinned(pinned) {
        const tab = await this.tabPresenter.getCurrent();
        return this.tabPresenter.setPinned(tab.id, pinned);
    }
    async togglePinned() {
        const tab = await this.tabPresenter.getCurrent();
        return this.tabPresenter.setPinned(tab.id, !tab.pinned);
    }
    async duplicate() {
        const tab = await this.tabPresenter.getCurrent();
        return this.tabPresenter.duplicate(tab.id);
    }
    async openPageSource() {
        const tab = await this.tabPresenter.getCurrent();
        const url = 'view-source:' + tab.url;
        return this.tabPresenter.create(url);
    }
    async openHome(newTab) {
        const tab = await this.tabPresenter.getCurrent();
        const urls = await this.browserSettingRepository.getHomepageUrls();
        if (urls.length === 1 && urls[0] === 'about:home') {
            throw new Error('Cannot open Firefox Home (about:home) by WebExtensions, set your custom URLs');
        }
        if (urls.length === 1 && !newTab) {
            return this.tabPresenter.open(urls[0], tab.id);
        }
        for (const url of urls) {
            this.tabPresenter.create(url);
        }
    }
    async openURL(url, newTab, newWindow) {
        if (newWindow) {
            await this.windowPresenter.create(url);
        }
        else if (newTab) {
            await this.tabPresenter.create(url);
        }
        else {
            const tab = await this.tabPresenter.getCurrent();
            await this.tabPresenter.open(url, tab.id);
        }
    }
};
TabUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        WindowPresenter_1.default,
        BrowserSettingRepository_1.default])
], TabUseCase);
exports.default = TabUseCase;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const urls = tslib_1.__importStar(__webpack_require__(33));
let BrowserSettingRepository = class BrowserSettingRepository {
    async getHomepageUrls() {
        const { value } = await browser.browserSettings.homepageOverride.get({});
        return value.split('|').map(urls.normalizeUrl);
    }
};
BrowserSettingRepository = tslib_1.__decorate([
    tsyringe_1.injectable()
], BrowserSettingRepository);
exports.default = BrowserSettingRepository;


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
let TabSelectUseCase = class TabSelectUseCase {
    constructor(tabPresenter) {
        this.tabPresenter = tabPresenter;
    }
    async selectPrev(count) {
        const tabs = await this.tabPresenter.getAll();
        if (tabs.length < 2) {
            return;
        }
        const tab = tabs.find(t => t.active);
        if (!tab) {
            return;
        }
        const select = (tab.index - count + tabs.length) % tabs.length;
        return this.tabPresenter.select(tabs[select].id);
    }
    async selectNext(count) {
        const tabs = await this.tabPresenter.getAll();
        if (tabs.length < 2) {
            return;
        }
        const tab = tabs.find(t => t.active);
        if (!tab) {
            return;
        }
        const select = (tab.index + count) % tabs.length;
        return this.tabPresenter.select(tabs[select].id);
    }
    async selectFirst() {
        const tabs = await this.tabPresenter.getAll();
        return this.tabPresenter.select(tabs[0].id);
    }
    async selectLast() {
        const tabs = await this.tabPresenter.getAll();
        return this.tabPresenter.select(tabs[tabs.length - 1].id);
    }
    async selectPrevSelected() {
        const tabId = await this.tabPresenter.getLastSelectedId();
        if (tabId === null || typeof tabId === 'undefined') {
            return Promise.resolve();
        }
        return this.tabPresenter.select(tabId);
    }
};
TabSelectUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default])
], TabSelectUseCase);
exports.default = TabSelectUseCase;


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const ZOOM_SETTINGS = [
    0.33, 0.50, 0.66, 0.75, 0.80, 0.90, 1.00,
    1.10, 1.25, 1.50, 1.75, 2.00, 2.50, 3.00
];
let ZoomUseCase = class ZoomUseCase {
    constructor(tabPresenter) {
        this.tabPresenter = tabPresenter;
    }
    async zoomIn() {
        const tab = await this.tabPresenter.getCurrent();
        const tabId = tab.id;
        const current = await this.tabPresenter.getZoom(tabId);
        const factor = ZOOM_SETTINGS.find(f => f > current);
        if (factor) {
            return this.tabPresenter.setZoom(tabId, factor);
        }
    }
    async zoomOut() {
        const tab = await this.tabPresenter.getCurrent();
        const tabId = tab.id;
        const current = await this.tabPresenter.getZoom(tabId);
        const factor = ZOOM_SETTINGS.slice(0).reverse().find(f => f < current);
        if (factor) {
            return this.tabPresenter.setZoom(tabId, factor);
        }
    }
    async zoomNutoral() {
        const tab = await this.tabPresenter.getCurrent();
        return this.tabPresenter.setZoom(tab.id, 1);
    }
};
ZoomUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default])
], ZoomUseCase);
exports.default = ZoomUseCase;


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const NavigateClient_1 = tslib_1.__importDefault(__webpack_require__(191));
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
let NavigateUseCase = class NavigateUseCase {
    constructor(tabPresenter, navigateClient) {
        this.tabPresenter = tabPresenter;
        this.navigateClient = navigateClient;
    }
    async openHistoryNext() {
        const tab = await this.tabPresenter.getCurrent();
        await this.navigateClient.historyNext(tab.id);
    }
    async openHistoryPrev() {
        const tab = await this.tabPresenter.getCurrent();
        await this.navigateClient.historyPrev(tab.id);
    }
    async openLinkNext() {
        const tab = await this.tabPresenter.getCurrent();
        await this.navigateClient.linkNext(tab.id);
    }
    async openLinkPrev() {
        const tab = await this.tabPresenter.getCurrent();
        await this.navigateClient.linkPrev(tab.id);
    }
    async openParent() {
        const tab = await this.tabPresenter.getCurrent();
        const url = new URL(tab.url);
        if (url.hash.length > 0) {
            url.hash = '';
        }
        else if (url.search.length > 0) {
            url.search = '';
        }
        else {
            const basenamePattern = /\/[^/]+$/;
            const lastDirPattern = /\/[^/]+\/$/;
            if (basenamePattern.test(url.pathname)) {
                url.pathname = url.pathname.replace(basenamePattern, '/');
            }
            else if (lastDirPattern.test(url.pathname)) {
                url.pathname = url.pathname.replace(lastDirPattern, '/');
            }
        }
        await this.tabPresenter.open(url.href);
    }
    async openRoot() {
        const tab = await this.tabPresenter.getCurrent();
        const url = new URL(tab.url);
        await this.tabPresenter.open(url.origin);
    }
};
NavigateUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        NavigateClient_1.default])
], NavigateUseCase);
exports.default = NavigateUseCase;


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const messages = tslib_1.__importStar(__webpack_require__(3));
let NavigateClient = class NavigateClient {
    async historyNext(tabId) {
        await browser.tabs.sendMessage(tabId, {
            type: messages.NAVIGATE_HISTORY_NEXT,
        });
    }
    async historyPrev(tabId) {
        await browser.tabs.sendMessage(tabId, {
            type: messages.NAVIGATE_HISTORY_PREV,
        });
    }
    async linkNext(tabId) {
        await browser.tabs.sendMessage(tabId, {
            type: messages.NAVIGATE_LINK_NEXT,
        });
    }
    async linkPrev(tabId) {
        await browser.tabs.sendMessage(tabId, {
            type: messages.NAVIGATE_LINK_PREV,
        });
    }
};
NavigateClient = tslib_1.__decorate([
    tsyringe_1.injectable()
], NavigateClient);
exports.default = NavigateClient;


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MarkUseCase_1 = tslib_1.__importDefault(__webpack_require__(193));
let MarkController = class MarkController {
    constructor(markUseCase) {
        this.markUseCase = markUseCase;
    }
    setGlobal(key, x, y) {
        return this.markUseCase.setGlobal(key, x, y);
    }
    jumpGlobal(key) {
        return this.markUseCase.jumpGlobal(key);
    }
};
MarkController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [MarkUseCase_1.default])
], MarkController);
exports.default = MarkController;


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const MarkRepository_1 = tslib_1.__importDefault(__webpack_require__(194));
const ConsoleClient_1 = tslib_1.__importDefault(__webpack_require__(34));
const ContentMessageClient_1 = tslib_1.__importDefault(__webpack_require__(35));
let MarkUseCase = class MarkUseCase {
    constructor(tabPresenter, markRepository, consoleClient, contentMessageClient) {
        this.tabPresenter = tabPresenter;
        this.markRepository = markRepository;
        this.consoleClient = consoleClient;
        this.contentMessageClient = contentMessageClient;
    }
    async setGlobal(key, x, y) {
        const tab = await this.tabPresenter.getCurrent();
        const mark = { tabId: tab.id, url: tab.url, x, y };
        return this.markRepository.setMark(key, mark);
    }
    async jumpGlobal(key) {
        const current = await this.tabPresenter.getCurrent();
        const mark = await this.markRepository.getMark(key);
        if (!mark) {
            return this.consoleClient.showError(current.id, 'Mark is not set');
        }
        try {
            await this.contentMessageClient.scrollTo(mark.tabId, mark.x, mark.y);
            return this.tabPresenter.select(mark.tabId);
        }
        catch (e) {
            const tab = await this.tabPresenter.create(mark.url);
            return this.markRepository.setMark(key, {
                tabId: tab.id, url: mark.url, x: mark.x, y: mark.y,
            });
        }
    }
};
MarkUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        MarkRepository_1.default,
        ConsoleClient_1.default,
        ContentMessageClient_1.default])
], MarkUseCase);
exports.default = MarkUseCase;


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const MemoryStorage_1 = tslib_1.__importDefault(__webpack_require__(28));
const MARK_KEY = 'mark';
let MarkRepository = class MarkRepository {
    constructor() {
        this.cache = new MemoryStorage_1.default();
    }
    getMark(key) {
        const marks = this.getOrEmptyMarks();
        const data = marks[key];
        if (!data) {
            return Promise.resolve(undefined);
        }
        const mark = { tabId: data.tabId, url: data.url, x: data.x, y: data.y };
        return Promise.resolve(mark);
    }
    setMark(key, mark) {
        const marks = this.getOrEmptyMarks();
        marks[key] = { tabId: mark.tabId, url: mark.url, x: mark.x, y: mark.y };
        this.cache.set(MARK_KEY, marks);
        return Promise.resolve();
    }
    getOrEmptyMarks() {
        return this.cache.get(MARK_KEY) || {};
    }
};
MarkRepository = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], MarkRepository);
exports.default = MarkRepository;


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const VersionUseCase_1 = tslib_1.__importDefault(__webpack_require__(196));
let VersionController = class VersionController {
    constructor(versionUseCase) {
        this.versionUseCase = versionUseCase;
    }
    notify() {
        return this.versionUseCase.notify();
    }
};
VersionController = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [VersionUseCase_1.default])
], VersionController);
exports.default = VersionController;


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(0);
const tsyringe_1 = __webpack_require__(2);
const TabPresenter_1 = tslib_1.__importDefault(__webpack_require__(7));
const NotifyPresenter_1 = tslib_1.__importDefault(__webpack_require__(74));
let VersionUseCase = class VersionUseCase {
    constructor(tabPresenter, notifyPresenter) {
        this.tabPresenter = tabPresenter;
        this.notifyPresenter = notifyPresenter;
    }
    notify() {
        const manifest = browser.runtime.getManifest();
        const url = this.releaseNoteUrl(manifest.version);
        return this.notifyPresenter.notifyUpdated(manifest.version, () => {
            this.tabPresenter.create(url);
        });
    }
    releaseNoteUrl(version) {
        if (version) {
            return `https://github.com/ueokande/vim-vixen/releases/tag/${version}`;
        }
        return 'https://github.com/ueokande/vim-vixen/releases/';
    }
};
VersionUseCase = tslib_1.__decorate([
    tsyringe_1.injectable(),
    tslib_1.__metadata("design:paramtypes", [TabPresenter_1.default,
        NotifyPresenter_1.default])
], VersionUseCase);
exports.default = VersionUseCase;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L3R5cGVzL2xpZmVjeWNsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L3R5cGVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcmVmbGVjdGlvbi1oZWxwZXJzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL2NsYXNzLXByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL2ZhY3RvcnktcHJvdmlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9wcm92aWRlcnMvaW5qZWN0aW9uLXRva2VuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL3Rva2VuLXByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL3ZhbHVlLXByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcHJvdmlkZXJzL3Byb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvcmVnaXN0cnkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9yZXNvbHV0aW9uLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZXBlbmRlbmN5LWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L2RlY29yYXRvcnMvYXV0by1pbmplY3RhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZGVjb3JhdG9ycy9pbmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL2luamVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL3JlZ2lzdHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZGVjb3JhdG9ycy9zaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL2luamVjdC1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9kZWNvcmF0b3JzL3Njb3BlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHN5cmluZ2UvZGlzdC9lc201L2RlY29yYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RzeXJpbmdlL2Rpc3QvZXNtNS9mYWN0b3JpZXMvaW5zdGFuY2UtY2FjaGluZy1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZmFjdG9yaWVzL3ByZWRpY2F0ZS1hd2FyZS1jbGFzcy1mYWN0b3J5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvZmFjdG9yaWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy90c3lyaW5nZS9kaXN0L2VzbTUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL29wZXJhdGlvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcHJlc2VudGVycy9UYWJQcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9Qcm9wZXJ0aWVzLnRzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9CbGFja2xpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9TZXR0aW5nRGF0YS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL0tleW1hcHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYXJlZC9zZXR0aW5ncy9TZXR0aW5ncy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL0tleS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL1NlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhcmVkL3NldHRpbmdzL3ZhbGlkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZnJhc3RydWN0dXJlcy9NZW1vcnlTdG9yYWdlLnRzIiwid2VicGFjazovLy8uL3NyYy9zaGFyZWQvdXJscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9pbmZyYXN0cnVjdHVyZXMvQ29uc29sZUNsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9pbmZyYXN0cnVjdHVyZXMvQ29udGVudE1lc3NhZ2VDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlZmxlY3QtbWV0YWRhdGEvUmVmbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9wcmVzZW50ZXJzL1dpbmRvd1ByZXNlbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91c2VjYXNlcy9SZXBlYXRVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2NvbnRyb2xsZXJzL1NldHRpbmdDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3ByZXNlbnRlcnMvTm90aWZ5UHJlc2VudGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL0ZpbmRVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL0FwcGxpY2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2luZnJhc3RydWN0dXJlcy9Db250ZW50TWVzc2FnZUxpc3RlbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2NvbnRyb2xsZXJzL0NvbW1hbmRDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL0NvbXBsZXRpb25zVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9kb21haW5zL0NvbW1hbmREb2NzLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3JlcG9zaXRvcmllcy9Db21wbGV0aW9uc1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXNlY2FzZXMvZmlsdGVycy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91c2VjYXNlcy9Db21tYW5kVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91c2VjYXNlcy9wYXJzZXJzLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3ByZXNlbnRlcnMvSGVscFByZXNlbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9yZXBvc2l0b3JpZXMvQm9va21hcmtSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3JlcG9zaXRvcmllcy9SZXBlYXRSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL1NldHRpbmdVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3JlcG9zaXRvcmllcy9QZXJzaXN0ZW50U2V0dGluZ1JlcG9zaXRvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvY29udHJvbGxlcnMvRmluZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcmVwb3NpdG9yaWVzL0ZpbmRSZXBvc2l0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2NvbnRyb2xsZXJzL0FkZG9uRW5hYmxlZENvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvdXNlY2FzZXMvQWRkb25FbmFibGVkVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9wcmVzZW50ZXJzL0luZGljYXRvclByZXNlbnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9jb250cm9sbGVycy9MaW5rQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91c2VjYXNlcy9MaW5rVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9jb250cm9sbGVycy9PcGVyYXRpb25Db250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL0NvbnNvbGVVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL1RhYlVzZUNhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvcmVwb3NpdG9yaWVzL0Jyb3dzZXJTZXR0aW5nUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91c2VjYXNlcy9UYWJTZWxlY3RVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL1pvb21Vc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL05hdmlnYXRlVXNlQ2FzZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9jbGllbnRzL05hdmlnYXRlQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL2NvbnRyb2xsZXJzL01hcmtDb250cm9sbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3VzZWNhc2VzL01hcmtVc2VDYXNlLnRzIiwid2VicGFjazovLy8uL3NyYy9iYWNrZ3JvdW5kL3JlcG9zaXRvcmllcy9NYXJrUmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC9jb250cm9sbGVycy9WZXJzaW9uQ29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYmFja2dyb3VuZC91c2VjYXNlcy9WZXJzaW9uVXNlQ2FzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DLDJDQUEyQztBQUMzQyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkMsMkNBQTJDO0FBQzNDLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVFQUF1RTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQywyQ0FBMkM7QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsUUFBUTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCx1QkFBdUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsMEJBQTBCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxDQUFDLDBCQUEwQjs7Ozs7Ozs7QUMxbUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNB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Q3hFO1FBQ0QsT0FBTyxpREFBaUQsQ0FBQztJQUMzRCxDQUFDO0NBQ0Y7QUFyQm9CLGNBQWM7SUFEbEMscUJBQVUsRUFBRTs2Q0FHYSxzQkFBWTtRQUNULHlCQUFlO0dBSHZCLGNBQWMsQ0FxQmxDO2tCQXJCb0IsY0FBYyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE2Mik7XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsInZhciBMaWZlY3ljbGU7XG4oZnVuY3Rpb24gKExpZmVjeWNsZSkge1xuICAgIExpZmVjeWNsZVtMaWZlY3ljbGVbXCJUcmFuc2llbnRcIl0gPSAwXSA9IFwiVHJhbnNpZW50XCI7XG4gICAgTGlmZWN5Y2xlW0xpZmVjeWNsZVtcIlNpbmdsZXRvblwiXSA9IDFdID0gXCJTaW5nbGV0b25cIjtcbiAgICBMaWZlY3ljbGVbTGlmZWN5Y2xlW1wiUmVzb2x1dGlvblNjb3BlZFwiXSA9IDJdID0gXCJSZXNvbHV0aW9uU2NvcGVkXCI7XG4gICAgTGlmZWN5Y2xlW0xpZmVjeWNsZVtcIkNvbnRhaW5lclNjb3BlZFwiXSA9IDNdID0gXCJDb250YWluZXJTY29wZWRcIjtcbn0pKExpZmVjeWNsZSB8fCAoTGlmZWN5Y2xlID0ge30pKTtcbmV4cG9ydCBkZWZhdWx0IExpZmVjeWNsZTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTGlmZWN5Y2xlIH0gZnJvbSBcIi4vbGlmZWN5Y2xlXCI7XG4iLCJleHBvcnQgdmFyIElOSkVDVElPTl9UT0tFTl9NRVRBREFUQV9LRVkgPSBcImluamVjdGlvblRva2Vuc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtSW5mbyh0YXJnZXQpIHtcbiAgICB2YXIgcGFyYW1zID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIHRhcmdldCkgfHwgW107XG4gICAgdmFyIGluamVjdGlvblRva2VucyA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEoSU5KRUNUSU9OX1RPS0VOX01FVEFEQVRBX0tFWSwgdGFyZ2V0KSB8fCB7fTtcbiAgICBPYmplY3Qua2V5cyhpbmplY3Rpb25Ub2tlbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBwYXJhbXNbK2tleV0gPSBpbmplY3Rpb25Ub2tlbnNba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGRlZmluZUluamVjdGlvblRva2VuTWV0YWRhdGEoZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBfcHJvcGVydHlLZXksIHBhcmFtZXRlckluZGV4KSB7XG4gICAgICAgIHZhciBpbmplY3Rpb25Ub2tlbnMgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKElOSkVDVElPTl9UT0tFTl9NRVRBREFUQV9LRVksIHRhcmdldCkgfHwge307XG4gICAgICAgIGluamVjdGlvblRva2Vuc1twYXJhbWV0ZXJJbmRleF0gPSBkYXRhO1xuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKElOSkVDVElPTl9UT0tFTl9NRVRBREFUQV9LRVksIGluamVjdGlvblRva2VucywgdGFyZ2V0KTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzQ2xhc3NQcm92aWRlcihwcm92aWRlcikge1xuICAgIHJldHVybiAhIXByb3ZpZGVyLnVzZUNsYXNzO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRmFjdG9yeVByb3ZpZGVyKHByb3ZpZGVyKSB7XG4gICAgcmV0dXJuICEhcHJvdmlkZXIudXNlRmFjdG9yeTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc05vcm1hbFRva2VuKHRva2VuKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdG9rZW4gPT09IFwic3ltYm9sXCI7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNUb2tlbkRlc2NyaXB0b3IoZGVzY3JpcHRvcikge1xuICAgIHJldHVybiAodHlwZW9mIGRlc2NyaXB0b3IgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgXCJ0b2tlblwiIGluIGRlc2NyaXB0b3IgJiZcbiAgICAgICAgXCJtdWx0aXBsZVwiIGluIGRlc2NyaXB0b3IpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVG9rZW5Qcm92aWRlcihwcm92aWRlcikge1xuICAgIHJldHVybiAhIXByb3ZpZGVyLnVzZVRva2VuO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsdWVQcm92aWRlcihwcm92aWRlcikge1xuICAgIHJldHVybiBwcm92aWRlci51c2VWYWx1ZSAhPSB1bmRlZmluZWQ7XG59XG4iLCJleHBvcnQgeyBpc0NsYXNzUHJvdmlkZXIgfSBmcm9tIFwiLi9jbGFzcy1wcm92aWRlclwiO1xuZXhwb3J0IHsgaXNGYWN0b3J5UHJvdmlkZXIgfSBmcm9tIFwiLi9mYWN0b3J5LXByb3ZpZGVyXCI7XG5leHBvcnQgeyBpc05vcm1hbFRva2VuIH0gZnJvbSBcIi4vaW5qZWN0aW9uLXRva2VuXCI7XG5leHBvcnQgeyBpc1Rva2VuUHJvdmlkZXIgfSBmcm9tIFwiLi90b2tlbi1wcm92aWRlclwiO1xuZXhwb3J0IHsgaXNWYWx1ZVByb3ZpZGVyIH0gZnJvbSBcIi4vdmFsdWUtcHJvdmlkZXJcIjtcbiIsImltcG9ydCB7IGlzQ2xhc3NQcm92aWRlciB9IGZyb20gXCIuL2NsYXNzLXByb3ZpZGVyXCI7XG5pbXBvcnQgeyBpc1ZhbHVlUHJvdmlkZXIgfSBmcm9tIFwiLi92YWx1ZS1wcm92aWRlclwiO1xuaW1wb3J0IHsgaXNUb2tlblByb3ZpZGVyIH0gZnJvbSBcIi4vdG9rZW4tcHJvdmlkZXJcIjtcbmltcG9ydCB7IGlzRmFjdG9yeVByb3ZpZGVyIH0gZnJvbSBcIi4vZmFjdG9yeS1wcm92aWRlclwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdmlkZXIocHJvdmlkZXIpIHtcbiAgICByZXR1cm4gKGlzQ2xhc3NQcm92aWRlcihwcm92aWRlcikgfHxcbiAgICAgICAgaXNWYWx1ZVByb3ZpZGVyKHByb3ZpZGVyKSB8fFxuICAgICAgICBpc1Rva2VuUHJvdmlkZXIocHJvdmlkZXIpIHx8XG4gICAgICAgIGlzRmFjdG9yeVByb3ZpZGVyKHByb3ZpZGVyKSk7XG59XG4iLCJ2YXIgUmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlZ2lzdHJ5KCkge1xuICAgICAgICB0aGlzLl9yZWdpc3RyeU1hcCA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgUmVnaXN0cnkucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeU1hcC5lbnRyaWVzKCk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuZ2V0QWxsID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmVuc3VyZShrZXkpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0cnlNYXAuZ2V0KGtleSk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB0aGlzLmVuc3VyZShrZXkpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLl9yZWdpc3RyeU1hcC5nZXQoa2V5KTtcbiAgICAgICAgcmV0dXJuIHZhbHVlW3ZhbHVlLmxlbmd0aCAtIDFdIHx8IG51bGw7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5lbnN1cmUoa2V5KTtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlNYXAuZ2V0KGtleSkucHVzaCh2YWx1ZSk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuc2V0QWxsID0gZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnlNYXAuc2V0KGtleSwgdmFsdWUpO1xuICAgIH07XG4gICAgUmVnaXN0cnkucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgdGhpcy5lbnN1cmUoa2V5KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJ5TWFwLmdldChrZXkpLmxlbmd0aCA+IDA7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5TWFwLmNsZWFyKCk7XG4gICAgfTtcbiAgICBSZWdpc3RyeS5wcm90b3R5cGUuZW5zdXJlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuX3JlZ2lzdHJ5TWFwLmhhcyhrZXkpKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWdpc3RyeU1hcC5zZXQoa2V5LCBbXSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBSZWdpc3RyeTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyeTtcbiIsInZhciBSZXNvbHV0aW9uQ29udGV4dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x1dGlvbkNvbnRleHQoKSB7XG4gICAgICAgIHRoaXMuc2NvcGVkUmVzb2x1dGlvbnMgPSBuZXcgTWFwKCk7XG4gICAgfVxuICAgIHJldHVybiBSZXNvbHV0aW9uQ29udGV4dDtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBSZXNvbHV0aW9uQ29udGV4dDtcbiIsImltcG9ydCB7IF9fcmVhZCwgX19zcHJlYWQsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0NsYXNzUHJvdmlkZXIsIGlzRmFjdG9yeVByb3ZpZGVyLCBpc05vcm1hbFRva2VuLCBpc1Rva2VuUHJvdmlkZXIsIGlzVmFsdWVQcm92aWRlciB9IGZyb20gXCIuL3Byb3ZpZGVyc1wiO1xuaW1wb3J0IHsgaXNQcm92aWRlciB9IGZyb20gXCIuL3Byb3ZpZGVycy9wcm92aWRlclwiO1xuaW1wb3J0IHsgaXNUb2tlbkRlc2NyaXB0b3IgfSBmcm9tIFwiLi9wcm92aWRlcnMvaW5qZWN0aW9uLXRva2VuXCI7XG5pbXBvcnQgUmVnaXN0cnkgZnJvbSBcIi4vcmVnaXN0cnlcIjtcbmltcG9ydCBMaWZlY3ljbGUgZnJvbSBcIi4vdHlwZXMvbGlmZWN5Y2xlXCI7XG5pbXBvcnQgUmVzb2x1dGlvbkNvbnRleHQgZnJvbSBcIi4vcmVzb2x1dGlvbi1jb250ZXh0XCI7XG5leHBvcnQgdmFyIHR5cGVJbmZvID0gbmV3IE1hcCgpO1xudmFyIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyKHBhcmVudCkge1xuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdGhpcy5fcmVnaXN0cnkgPSBuZXcgUmVnaXN0cnkoKTtcbiAgICB9XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3RlciA9IGZ1bmN0aW9uICh0b2tlbiwgcHJvdmlkZXJPckNvbnN0cnVjdG9yLCBvcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHsgbGlmZWN5Y2xlOiBMaWZlY3ljbGUuVHJhbnNpZW50IH07IH1cbiAgICAgICAgdmFyIHByb3ZpZGVyO1xuICAgICAgICBpZiAoIWlzUHJvdmlkZXIocHJvdmlkZXJPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgcHJvdmlkZXIgPSB7IHVzZUNsYXNzOiBwcm92aWRlck9yQ29uc3RydWN0b3IgfTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb3ZpZGVyID0gcHJvdmlkZXJPckNvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLlNpbmdsZXRvbiB8fFxuICAgICAgICAgICAgb3B0aW9ucy5saWZlY3ljbGUgPT0gTGlmZWN5Y2xlLkNvbnRhaW5lclNjb3BlZCB8fFxuICAgICAgICAgICAgb3B0aW9ucy5saWZlY3ljbGUgPT0gTGlmZWN5Y2xlLlJlc29sdXRpb25TY29wZWQpIHtcbiAgICAgICAgICAgIGlmIChpc1ZhbHVlUHJvdmlkZXIocHJvdmlkZXIpIHx8IGlzRmFjdG9yeVByb3ZpZGVyKHByb3ZpZGVyKSkge1xuICAgICAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IHVzZSBsaWZlY3ljbGUgXFxcIlwiICsgTGlmZWN5Y2xlW29wdGlvbnMubGlmZWN5Y2xlXSArIFwiXFxcIiB3aXRoIFZhbHVlUHJvdmlkZXJzIG9yIEZhY3RvcnlQcm92aWRlcnNcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZWdpc3RyeS5zZXQodG9rZW4sIHsgcHJvdmlkZXI6IHByb3ZpZGVyLCBvcHRpb25zOiBvcHRpb25zIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUucmVnaXN0ZXJUeXBlID0gZnVuY3Rpb24gKGZyb20sIHRvKSB7XG4gICAgICAgIGlmIChpc05vcm1hbFRva2VuKHRvKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgICAgIHVzZVRva2VuOiB0b1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgdXNlQ2xhc3M6IHRvXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3Rlckluc3RhbmNlID0gZnVuY3Rpb24gKHRva2VuLCBpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlcih0b2tlbiwge1xuICAgICAgICAgICAgdXNlVmFsdWU6IGluc3RhbmNlXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZWdpc3RlclNpbmdsZXRvbiA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgICAgICBpZiAoaXNOb3JtYWxUb2tlbihmcm9tKSkge1xuICAgICAgICAgICAgaWYgKGlzTm9ybWFsVG9rZW4odG8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VUb2tlbjogdG9cbiAgICAgICAgICAgICAgICB9LCB7IGxpZmVjeWNsZTogTGlmZWN5Y2xlLlNpbmdsZXRvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVnaXN0ZXIoZnJvbSwge1xuICAgICAgICAgICAgICAgICAgICB1c2VDbGFzczogdG9cbiAgICAgICAgICAgICAgICB9LCB7IGxpZmVjeWNsZTogTGlmZWN5Y2xlLlNpbmdsZXRvbiB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IHJlZ2lzdGVyIGEgdHlwZSBuYW1lIGFzIGEgc2luZ2xldG9uIHdpdGhvdXQgYSBcXFwidG9cXFwiIHRva2VuXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHVzZUNsYXNzID0gZnJvbTtcbiAgICAgICAgaWYgKHRvICYmICFpc05vcm1hbFRva2VuKHRvKSkge1xuICAgICAgICAgICAgdXNlQ2xhc3MgPSB0bztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZWdpc3Rlcihmcm9tLCB7XG4gICAgICAgICAgICB1c2VDbGFzczogdXNlQ2xhc3NcbiAgICAgICAgfSwgeyBsaWZlY3ljbGU6IExpZmVjeWNsZS5TaW5nbGV0b24gfSk7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLnJlc29sdmUgPSBmdW5jdGlvbiAodG9rZW4sIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGNvbnRleHQgPT09IHZvaWQgMCkgeyBjb250ZXh0ID0gbmV3IFJlc29sdXRpb25Db250ZXh0KCk7IH1cbiAgICAgICAgdmFyIHJlZ2lzdHJhdGlvbiA9IHRoaXMuZ2V0UmVnaXN0cmF0aW9uKHRva2VuKTtcbiAgICAgICAgaWYgKCFyZWdpc3RyYXRpb24gJiYgaXNOb3JtYWxUb2tlbih0b2tlbikpIHtcbiAgICAgICAgICAgIHRocm93IFwiQXR0ZW1wdGVkIHRvIHJlc29sdmUgdW5yZWdpc3RlcmVkIGRlcGVuZGVuY3kgdG9rZW46IFwiICsgdG9rZW4udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlUmVnaXN0cmF0aW9uKHJlZ2lzdHJhdGlvbiwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY29uc3RydWN0KHRva2VuLCBjb250ZXh0KTtcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUucmVzb2x2ZVJlZ2lzdHJhdGlvbiA9IGZ1bmN0aW9uIChyZWdpc3RyYXRpb24sIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbi5vcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLlJlc29sdXRpb25TY29wZWQgJiZcbiAgICAgICAgICAgIGNvbnRleHQuc2NvcGVkUmVzb2x1dGlvbnMuaGFzKHJlZ2lzdHJhdGlvbikpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnNjb3BlZFJlc29sdXRpb25zLmdldChyZWdpc3RyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpc1NpbmdsZXRvbiA9IHJlZ2lzdHJhdGlvbi5vcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLlNpbmdsZXRvbjtcbiAgICAgICAgdmFyIGlzQ29udGFpbmVyU2NvcGVkID0gcmVnaXN0cmF0aW9uLm9wdGlvbnMubGlmZWN5Y2xlID09PSBMaWZlY3ljbGUuQ29udGFpbmVyU2NvcGVkO1xuICAgICAgICB2YXIgcmV0dXJuSW5zdGFuY2UgPSBpc1NpbmdsZXRvbiB8fCBpc0NvbnRhaW5lclNjb3BlZDtcbiAgICAgICAgdmFyIHJlc29sdmVkO1xuICAgICAgICBpZiAoaXNWYWx1ZVByb3ZpZGVyKHJlZ2lzdHJhdGlvbi5wcm92aWRlcikpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gcmVnaXN0cmF0aW9uLnByb3ZpZGVyLnVzZVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVG9rZW5Qcm92aWRlcihyZWdpc3RyYXRpb24ucHJvdmlkZXIpKSB7XG4gICAgICAgICAgICByZXNvbHZlZCA9IHJldHVybkluc3RhbmNlXG4gICAgICAgICAgICAgICAgPyByZWdpc3RyYXRpb24uaW5zdGFuY2UgfHxcbiAgICAgICAgICAgICAgICAgICAgKHJlZ2lzdHJhdGlvbi5pbnN0YW5jZSA9IHRoaXMucmVzb2x2ZShyZWdpc3RyYXRpb24ucHJvdmlkZXIudXNlVG9rZW4sIGNvbnRleHQpKVxuICAgICAgICAgICAgICAgIDogdGhpcy5yZXNvbHZlKHJlZ2lzdHJhdGlvbi5wcm92aWRlci51c2VUb2tlbiwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNDbGFzc1Byb3ZpZGVyKHJlZ2lzdHJhdGlvbi5wcm92aWRlcikpIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gcmV0dXJuSW5zdGFuY2VcbiAgICAgICAgICAgICAgICA/IHJlZ2lzdHJhdGlvbi5pbnN0YW5jZSB8fFxuICAgICAgICAgICAgICAgICAgICAocmVnaXN0cmF0aW9uLmluc3RhbmNlID0gdGhpcy5jb25zdHJ1Y3QocmVnaXN0cmF0aW9uLnByb3ZpZGVyLnVzZUNsYXNzLCBjb250ZXh0KSlcbiAgICAgICAgICAgICAgICA6IHRoaXMuY29uc3RydWN0KHJlZ2lzdHJhdGlvbi5wcm92aWRlci51c2VDbGFzcywgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNGYWN0b3J5UHJvdmlkZXIocmVnaXN0cmF0aW9uLnByb3ZpZGVyKSkge1xuICAgICAgICAgICAgcmVzb2x2ZWQgPSByZWdpc3RyYXRpb24ucHJvdmlkZXIudXNlRmFjdG9yeSh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdmVkID0gdGhpcy5jb25zdHJ1Y3QocmVnaXN0cmF0aW9uLnByb3ZpZGVyLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9wdGlvbnMubGlmZWN5Y2xlID09PSBMaWZlY3ljbGUuUmVzb2x1dGlvblNjb3BlZCkge1xuICAgICAgICAgICAgY29udGV4dC5zY29wZWRSZXNvbHV0aW9ucy5zZXQocmVnaXN0cmF0aW9uLCByZXNvbHZlZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5yZXNvbHZlQWxsID0gZnVuY3Rpb24gKHRva2VuLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjb250ZXh0ID09PSB2b2lkIDApIHsgY29udGV4dCA9IG5ldyBSZXNvbHV0aW9uQ29udGV4dCgpOyB9XG4gICAgICAgIHZhciByZWdpc3RyYXRpb25zID0gdGhpcy5nZXRBbGxSZWdpc3RyYXRpb25zKHRva2VuKTtcbiAgICAgICAgaWYgKCFyZWdpc3RyYXRpb25zICYmIGlzTm9ybWFsVG9rZW4odG9rZW4pKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkF0dGVtcHRlZCB0byByZXNvbHZlIHVucmVnaXN0ZXJlZCBkZXBlbmRlbmN5IHRva2VuOiBcIiArIHRva2VuLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlZ2lzdHJhdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RyYXRpb25zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5yZXNvbHZlUmVnaXN0cmF0aW9uKGl0ZW0sIGNvbnRleHQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFt0aGlzLmNvbnN0cnVjdCh0b2tlbiwgY29udGV4dCldO1xuICAgIH07XG4gICAgSW50ZXJuYWxEZXBlbmRlbmN5Q29udGFpbmVyLnByb3RvdHlwZS5pc1JlZ2lzdGVyZWQgPSBmdW5jdGlvbiAodG9rZW4sIHJlY3Vyc2l2ZSkge1xuICAgICAgICBpZiAocmVjdXJzaXZlID09PSB2b2lkIDApIHsgcmVjdXJzaXZlID0gZmFsc2U7IH1cbiAgICAgICAgcmV0dXJuICh0aGlzLl9yZWdpc3RyeS5oYXModG9rZW4pIHx8XG4gICAgICAgICAgICAocmVjdXJzaXZlICYmXG4gICAgICAgICAgICAgICAgKHRoaXMucGFyZW50IHx8IGZhbHNlKSAmJlxuICAgICAgICAgICAgICAgIHRoaXMucGFyZW50LmlzUmVnaXN0ZXJlZCh0b2tlbiwgdHJ1ZSkpKTtcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5LmNsZWFyKCk7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmNyZWF0ZUNoaWxkQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZV8xLCBfYTtcbiAgICAgICAgdmFyIGNoaWxkQ29udGFpbmVyID0gbmV3IEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lcih0aGlzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGZvciAodmFyIF9iID0gX192YWx1ZXModGhpcy5fcmVnaXN0cnkuZW50cmllcygpKSwgX2MgPSBfYi5uZXh0KCk7ICFfYy5kb25lOyBfYyA9IF9iLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciBfZCA9IF9fcmVhZChfYy52YWx1ZSwgMiksIHRva2VuID0gX2RbMF0sIHJlZ2lzdHJhdGlvbnMgPSBfZFsxXTtcbiAgICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9ucy5zb21lKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgb3B0aW9ucyA9IF9hLm9wdGlvbnM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmxpZmVjeWNsZSA9PT0gTGlmZWN5Y2xlLkNvbnRhaW5lclNjb3BlZDtcbiAgICAgICAgICAgICAgICB9KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRhaW5lci5fcmVnaXN0cnkuc2V0QWxsKHRva2VuLCByZWdpc3RyYXRpb25zLm1hcChmdW5jdGlvbiAocmVnaXN0cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnaXN0cmF0aW9uLm9wdGlvbnMubGlmZWN5Y2xlID09PSBMaWZlY3ljbGUuQ29udGFpbmVyU2NvcGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvdmlkZXI6IHJlZ2lzdHJhdGlvbi5wcm92aWRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogcmVnaXN0cmF0aW9uLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZ2lzdHJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jICYmICFfYy5kb25lICYmIChfYSA9IF9iLnJldHVybikpIF9hLmNhbGwoX2IpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzEpIHRocm93IGVfMS5lcnJvcjsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGlsZENvbnRhaW5lcjtcbiAgICB9O1xuICAgIEludGVybmFsRGVwZW5kZW5jeUNvbnRhaW5lci5wcm90b3R5cGUuZ2V0UmVnaXN0cmF0aW9uID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0aGlzLmlzUmVnaXN0ZXJlZCh0b2tlbikpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RyeS5nZXQodG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50LmdldFJlZ2lzdHJhdGlvbih0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmdldEFsbFJlZ2lzdHJhdGlvbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHRoaXMuaXNSZWdpc3RlcmVkKHRva2VuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdHJ5LmdldEFsbCh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnQuZ2V0QWxsUmVnaXN0cmF0aW9ucyh0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIucHJvdG90eXBlLmNvbnN0cnVjdCA9IGZ1bmN0aW9uIChjdG9yLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChjdG9yLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBjdG9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHBhcmFtSW5mbyA9IHR5cGVJbmZvLmdldChjdG9yKTtcbiAgICAgICAgaWYgKCFwYXJhbUluZm8gfHwgcGFyYW1JbmZvLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgXCJUeXBlSW5mbyBub3Qga25vd24gZm9yIFwiICsgY3RvcjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGFyYW1zID0gcGFyYW1JbmZvLm1hcChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIGlmIChpc1Rva2VuRGVzY3JpcHRvcihwYXJhbSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0ubXVsdGlwbGVcbiAgICAgICAgICAgICAgICAgICAgPyBfdGhpcy5yZXNvbHZlQWxsKHBhcmFtLnRva2VuKVxuICAgICAgICAgICAgICAgICAgICA6IF90aGlzLnJlc29sdmUocGFyYW0udG9rZW4sIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnJlc29sdmUocGFyYW0sIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyAoY3Rvci5iaW5kLmFwcGx5KGN0b3IsIF9fc3ByZWFkKFt2b2lkIDBdLCBwYXJhbXMpKSkoKTtcbiAgICB9O1xuICAgIHJldHVybiBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXI7XG59KCkpO1xuZXhwb3J0IHZhciBpbnN0YW5jZSA9IG5ldyBJbnRlcm5hbERlcGVuZGVuY3lDb250YWluZXIoKTtcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlO1xuIiwiaW1wb3J0IHsgX19leHRlbmRzLCBfX3JlYWQsIF9fc3ByZWFkIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBnZXRQYXJhbUluZm8gfSBmcm9tIFwiLi4vcmVmbGVjdGlvbi1oZWxwZXJzXCI7XG5pbXBvcnQgeyBpbnN0YW5jZSBhcyBnbG9iYWxDb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmltcG9ydCB7IGlzVG9rZW5EZXNjcmlwdG9yIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9pbmplY3Rpb24tdG9rZW5cIjtcbmZ1bmN0aW9uIGF1dG9JbmplY3RhYmxlKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBwYXJhbUluZm8gPSBnZXRQYXJhbUluZm8odGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgICAgICAgICBfX2V4dGVuZHMoY2xhc3NfMSwgX3N1cGVyKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNsYXNzXzEoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYXJndW1lbnRzLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfc3VwZXIuYXBwbHkodGhpcywgX19zcHJlYWQoYXJncy5jb25jYXQocGFyYW1JbmZvLnNsaWNlKGFyZ3MubGVuZ3RoKS5tYXAoZnVuY3Rpb24gKHR5cGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNUb2tlbkRlc2NyaXB0b3IodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHlwZS5tdWx0aXBsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGdsb2JhbENvbnRhaW5lci5yZXNvbHZlQWxsKHR5cGUudG9rZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZ2xvYmFsQ29udGFpbmVyLnJlc29sdmUodHlwZS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2xvYmFsQ29udGFpbmVyLnJlc29sdmUodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdJbmRleCA9IGluZGV4ICsgYXJncy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX2EgPSBfX3JlYWQodGFyZ2V0LnRvU3RyaW5nKCkubWF0Y2goL2NvbnN0cnVjdG9yXFwoKFtcXHcsIF0rKVxcKS8pIHx8IFtdLCAyKSwgX2IgPSBfYVsxXSwgcGFyYW1zID0gX2IgPT09IHZvaWQgMCA/IG51bGwgOiBfYjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcmdOYW1lID0gcGFyYW1zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBwYXJhbXMuc3BsaXQoXCIsXCIpW2FyZ0luZGV4XVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjXCIgKyBhcmdJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IFwiQ2Fubm90IGluamVjdCB0aGUgZGVwZW5kZW5jeSBcIiArIGFyZ05hbWUgKyBcIiBvZiBcIiArIHRhcmdldC5uYW1lICsgXCIgY29uc3RydWN0b3IuIFwiICsgZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pKSkpIHx8IHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2xhc3NfMTtcbiAgICAgICAgfSh0YXJnZXQpKTtcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgYXV0b0luamVjdGFibGU7XG4iLCJpbXBvcnQgeyBkZWZpbmVJbmplY3Rpb25Ub2tlbk1ldGFkYXRhIH0gZnJvbSBcIi4uL3JlZmxlY3Rpb24taGVscGVyc1wiO1xuZnVuY3Rpb24gaW5qZWN0KHRva2VuKSB7XG4gICAgcmV0dXJuIGRlZmluZUluamVjdGlvblRva2VuTWV0YWRhdGEodG9rZW4pO1xufVxuZXhwb3J0IGRlZmF1bHQgaW5qZWN0O1xuIiwiaW1wb3J0IHsgZ2V0UGFyYW1JbmZvIH0gZnJvbSBcIi4uL3JlZmxlY3Rpb24taGVscGVyc1wiO1xuaW1wb3J0IHsgdHlwZUluZm8gfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmZ1bmN0aW9uIGluamVjdGFibGUoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdHlwZUluZm8uc2V0KHRhcmdldCwgZ2V0UGFyYW1JbmZvKHRhcmdldCkpO1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCBpbmplY3RhYmxlO1xuIiwiaW1wb3J0IHsgX19yZXN0IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpbnN0YW5jZSBhcyBnbG9iYWxDb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmZ1bmN0aW9uIHJlZ2lzdHJ5KHJlZ2lzdHJhdGlvbnMpIHtcbiAgICBpZiAocmVnaXN0cmF0aW9ucyA9PT0gdm9pZCAwKSB7IHJlZ2lzdHJhdGlvbnMgPSBbXTsgfVxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHJlZ2lzdHJhdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IF9hLnRva2VuLCBvcHRpb25zID0gX2Eub3B0aW9ucywgcHJvdmlkZXIgPSBfX3Jlc3QoX2EsIFtcInRva2VuXCIsIFwib3B0aW9uc1wiXSk7XG4gICAgICAgICAgICByZXR1cm4gZ2xvYmFsQ29udGFpbmVyLnJlZ2lzdGVyKHRva2VuLCBwcm92aWRlciwgb3B0aW9ucyk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG59XG5leHBvcnQgZGVmYXVsdCByZWdpc3RyeTtcbiIsImltcG9ydCBpbmplY3RhYmxlIGZyb20gXCIuL2luamVjdGFibGVcIjtcbmltcG9ydCB7IGluc3RhbmNlIGFzIGdsb2JhbENvbnRhaW5lciB9IGZyb20gXCIuLi9kZXBlbmRlbmN5LWNvbnRhaW5lclwiO1xuZnVuY3Rpb24gc2luZ2xldG9uKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIGluamVjdGFibGUoKSh0YXJnZXQpO1xuICAgICAgICBnbG9iYWxDb250YWluZXIucmVnaXN0ZXJTaW5nbGV0b24odGFyZ2V0KTtcbiAgICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uO1xuIiwiaW1wb3J0IHsgZGVmaW5lSW5qZWN0aW9uVG9rZW5NZXRhZGF0YSB9IGZyb20gXCIuLi9yZWZsZWN0aW9uLWhlbHBlcnNcIjtcbmZ1bmN0aW9uIGluamVjdEFsbCh0b2tlbikge1xuICAgIHZhciBkYXRhID0geyB0b2tlbjogdG9rZW4sIG11bHRpcGxlOiB0cnVlIH07XG4gICAgcmV0dXJuIGRlZmluZUluamVjdGlvblRva2VuTWV0YWRhdGEoZGF0YSk7XG59XG5leHBvcnQgZGVmYXVsdCBpbmplY3RBbGw7XG4iLCJpbXBvcnQgaW5qZWN0YWJsZSBmcm9tIFwiLi9pbmplY3RhYmxlXCI7XG5pbXBvcnQgeyBpbnN0YW5jZSBhcyBnbG9iYWxDb250YWluZXIgfSBmcm9tIFwiLi4vZGVwZW5kZW5jeS1jb250YWluZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjb3BlZChsaWZlY3ljbGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgaW5qZWN0YWJsZSgpKHRhcmdldCk7XG4gICAgICAgIGdsb2JhbENvbnRhaW5lci5yZWdpc3Rlcih0b2tlbiB8fCB0YXJnZXQsIHRhcmdldCwge1xuICAgICAgICAgICAgbGlmZWN5Y2xlOiBsaWZlY3ljbGVcbiAgICAgICAgfSk7XG4gICAgfTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgYXV0b0luamVjdGFibGUgfSBmcm9tIFwiLi9hdXRvLWluamVjdGFibGVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgaW5qZWN0IH0gZnJvbSBcIi4vaW5qZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluamVjdGFibGUgfSBmcm9tIFwiLi9pbmplY3RhYmxlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlZ2lzdHJ5IH0gZnJvbSBcIi4vcmVnaXN0cnlcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2luZ2xldG9uIH0gZnJvbSBcIi4vc2luZ2xldG9uXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGluamVjdEFsbCB9IGZyb20gXCIuL2luamVjdC1hbGxcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc2NvcGVkIH0gZnJvbSBcIi4vc2NvcGVkXCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbnN0YW5jZUNhY2hpbmdGYWN0b3J5KGZhY3RvcnlGdW5jKSB7XG4gICAgdmFyIGluc3RhbmNlO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGVwZW5kZW5jeUNvbnRhaW5lcikge1xuICAgICAgICBpZiAoaW5zdGFuY2UgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IGZhY3RvcnlGdW5jKGRlcGVuZGVuY3lDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlZGljYXRlQXdhcmVDbGFzc0ZhY3RvcnkocHJlZGljYXRlLCB0cnVlQ29uc3RydWN0b3IsIGZhbHNlQ29uc3RydWN0b3IsIHVzZUNhY2hpbmcpIHtcbiAgICBpZiAodXNlQ2FjaGluZyA9PT0gdm9pZCAwKSB7IHVzZUNhY2hpbmcgPSB0cnVlOyB9XG4gICAgdmFyIGluc3RhbmNlO1xuICAgIHZhciBwcmV2aW91c1ByZWRpY2F0ZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRlcGVuZGVuY3lDb250YWluZXIpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRQcmVkaWNhdGUgPSBwcmVkaWNhdGUoZGVwZW5kZW5jeUNvbnRhaW5lcik7XG4gICAgICAgIGlmICghdXNlQ2FjaGluZyB8fCBwcmV2aW91c1ByZWRpY2F0ZSAhPT0gY3VycmVudFByZWRpY2F0ZSkge1xuICAgICAgICAgICAgaWYgKChwcmV2aW91c1ByZWRpY2F0ZSA9IGN1cnJlbnRQcmVkaWNhdGUpKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBkZXBlbmRlbmN5Q29udGFpbmVyLnJlc29sdmUodHJ1ZUNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gZGVwZW5kZW5jeUNvbnRhaW5lci5yZXNvbHZlKGZhbHNlQ29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9O1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpbnN0YW5jZUNhY2hpbmdGYWN0b3J5IH0gZnJvbSBcIi4vaW5zdGFuY2UtY2FjaGluZy1mYWN0b3J5XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHByZWRpY2F0ZUF3YXJlQ2xhc3NGYWN0b3J5IH0gZnJvbSBcIi4vcHJlZGljYXRlLWF3YXJlLWNsYXNzLWZhY3RvcnlcIjtcbiIsImlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5nZXRNZXRhZGF0YSkge1xuICAgIHRocm93IFwidHN5cmluZ2UgcmVxdWlyZXMgYSByZWZsZWN0IHBvbHlmaWxsLiBQbGVhc2UgYWRkICdpbXBvcnQgXFxcInJlZmxlY3QtbWV0YWRhdGFcXFwiJyB0byB0aGUgdG9wIG9mIHlvdXIgZW50cnkgcG9pbnQuXCI7XG59XG5leHBvcnQgeyBMaWZlY3ljbGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZGVjb3JhdG9yc1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vZmFjdG9yaWVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9wcm92aWRlcnNcIjtcbmV4cG9ydCB7IGluc3RhbmNlIGFzIGNvbnRhaW5lciB9IGZyb20gXCIuL2RlcGVuZGVuY3ktY29udGFpbmVyXCI7XG4iLCJpbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gJy4vb3BlcmF0aW9ucyc7XG5cbmV4cG9ydCBjb25zdCBCQUNLR1JPVU5EX09QRVJBVElPTiA9ICdiYWNrZ3JvdW5kLm9wZXJhdGlvbic7XG5cbmV4cG9ydCBjb25zdCBDT05TT0xFX1VORk9DVVMgPSAnY29uc29sZS51bmZvY3VzJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0NPTU1BTkQgPSAnY29uc29sZS5lbnRlci5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX0VOVEVSX0ZJTkQgPSAnY29uc29sZS5lbnRlci5maW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1FVRVJZX0NPTVBMRVRJT05TID0gJ2NvbnNvbGUucXVlcnkuY29tcGxldGlvbnMnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfU0hPV19DT01NQU5EID0gJ2NvbnNvbGUuc2hvdy5jb21tYW5kJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfRVJST1IgPSAnY29uc29sZS5zaG93LmVycm9yJztcbmV4cG9ydCBjb25zdCBDT05TT0xFX1NIT1dfSU5GTyA9ICdjb25zb2xlLnNob3cuaW5mbyc7XG5leHBvcnQgY29uc3QgQ09OU09MRV9TSE9XX0ZJTkQgPSAnY29uc29sZS5zaG93LmZpbmQnO1xuZXhwb3J0IGNvbnN0IENPTlNPTEVfSElERSA9ICdjb25zb2xlLmhpZGUnO1xuXG5leHBvcnQgY29uc3QgRk9MTE9XX1NUQVJUID0gJ2ZvbGxvdy5zdGFydCc7XG5leHBvcnQgY29uc3QgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUyA9ICdmb2xsb3cucmVxdWVzdC5jb3VudC50YXJnZXRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUyA9ICdmb2xsb3cucmVzcG9uc2UuY291bnQudGFyZ2V0cyc7XG5leHBvcnQgY29uc3QgRk9MTE9XX0NSRUFURV9ISU5UUyA9ICdmb2xsb3cuY3JlYXRlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfU0hPV19ISU5UUyA9ICdmb2xsb3cudXBkYXRlLmhpbnRzJztcbmV4cG9ydCBjb25zdCBGT0xMT1dfUkVNT1ZFX0hJTlRTID0gJ2ZvbGxvdy5yZW1vdmUuaGludHMnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19BQ1RJVkFURSA9ICdmb2xsb3cuYWN0aXZhdGUnO1xuZXhwb3J0IGNvbnN0IEZPTExPV19LRVlfUFJFU1MgPSAnZm9sbG93LmtleS5wcmVzcyc7XG5cbmV4cG9ydCBjb25zdCBNQVJLX1NFVF9HTE9CQUwgPSAnbWFyay5zZXQuZ2xvYmFsJztcbmV4cG9ydCBjb25zdCBNQVJLX0pVTVBfR0xPQkFMID0gJ21hcmsuanVtcC5nbG9iYWwnO1xuXG5leHBvcnQgY29uc3QgVEFCX1NDUk9MTF9UTyA9ICd0YWIuc2Nyb2xsLnRvJztcblxuZXhwb3J0IGNvbnN0IEZJTkRfTkVYVCA9ICdmaW5kLm5leHQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9ICdmaW5kLnByZXYnO1xuZXhwb3J0IGNvbnN0IEZJTkRfR0VUX0tFWVdPUkQgPSAnZmluZC5nZXQua2V5d29yZCc7XG5leHBvcnQgY29uc3QgRklORF9TRVRfS0VZV09SRCA9ICdmaW5kLnNldC5rZXl3b3JkJztcblxuZXhwb3J0IGNvbnN0IEFERE9OX0VOQUJMRURfUVVFUlkgPSAnYWRkb24uZW5hYmxlZC5xdWVyeSc7XG5leHBvcnQgY29uc3QgQURET05fRU5BQkxFRF9SRVNQT05TRSA9ICdhZGRvbi5lbmFibGVkLnJlc3BvbnNlJztcbmV4cG9ydCBjb25zdCBBRERPTl9UT0dHTEVfRU5BQkxFRCA9ICdhZGRvbi50b2dnbGUuZW5hYmxlZCc7XG5cbmV4cG9ydCBjb25zdCBPUEVOX1VSTCA9ICdvcGVuLnVybCc7XG5cbmV4cG9ydCBjb25zdCBTRVRUSU5HU19DSEFOR0VEID0gJ3NldHRpbmdzLmNoYW5nZWQnO1xuZXhwb3J0IGNvbnN0IFNFVFRJTkdTX1FVRVJZID0gJ3NldHRpbmdzLnF1ZXJ5JztcblxuZXhwb3J0IGNvbnN0IENPTlNPTEVfRlJBTUVfTUVTU0FHRSA9ICdjb25zb2xlLmZyYW1lLm1lc3NhZ2UnO1xuXG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9ORVhUID0gJ25hdmlnYXRlLmhpc3RvcnkubmV4dCc7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfSElTVE9SWV9QUkVWID0gJ25hdmlnYXRlLmhpc3RvcnkucHJldic7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19ORVhUID0gJ25hdmlnYXRlLmxpbmsubmV4dCc7XG5leHBvcnQgY29uc3QgTkFWSUdBVEVfTElOS19QUkVWID0gJ25hdmlnYXRlLmxpbmsucHJldic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZE9wZXJhdGlvbk1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQkFDS0dST1VORF9PUEVSQVRJT047XG4gIHJlcGVhdDogbnVtYmVyO1xuICBvcGVyYXRpb246IG9wZXJhdGlvbnMuT3BlcmF0aW9uO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVVbmZvY3VzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1VORk9DVVM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9FTlRFUl9DT01NQU5EO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUVudGVyRmluZE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9FTlRFUl9GSU5EO1xuICB0ZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVRdWVyeUNvbXBsZXRpb25zTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1FVRVJZX0NPTVBMRVRJT05TO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZVNob3dDb21tYW5kTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX1NIT1dfQ09NTUFORDtcbiAgY29tbWFuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93RXJyb3JNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19FUlJPUjtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVTaG93SW5mb01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9TSE9XX0lORk87XG4gIHRleHQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIENPTlNPTEVfU0hPV19GSU5EO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbnNvbGVIaWRlTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBDT05TT0xFX0hJREU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93U3RhcnRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TVEFSVDtcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1JlcXVlc3RDb3VudFRhcmdldHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19SRVFVRVNUX0NPVU5UX1RBUkdFVFM7XG4gIHZpZXdTaXplOiB7IHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyIH07XG4gIGZyYW1lUG9zaXRpb246IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dSZXNwb25zZUNvdW50VGFyZ2V0c01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX1JFU1BPTlNFX0NPVU5UX1RBUkdFVFM7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93Q3JlYXRlSGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19DUkVBVEVfSElOVFM7XG4gIHRhZ3M6IHN0cmluZ1tdO1xuICB2aWV3U2l6ZTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xuICBmcmFtZVBvc2l0aW9uOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93U2hvd0hpbnRzTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGT0xMT1dfU0hPV19ISU5UUztcbiAgcHJlZml4OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93UmVtb3ZlSGludHNNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19SRU1PVkVfSElOVFM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRm9sbG93QWN0aXZhdGVNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19BQ1RJVkFURTtcbiAgdGFnOiBzdHJpbmc7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2xsb3dLZXlQcmVzc01lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRk9MTE9XX0tFWV9QUkVTUztcbiAga2V5OiBzdHJpbmc7XG4gIGN0cmxLZXk6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya1NldEdsb2JhbE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTUFSS19TRVRfR0xPQkFMO1xuICBrZXk6IHN0cmluZztcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFya0p1bXBHbG9iYWxNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfSlVNUF9HTE9CQUw7XG4gIGtleTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlNjcm9sbFRvTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfU0NST0xMX1RPO1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTmV4dE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgRklORF9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmRQcmV2TWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX1BSRVY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZEdldEtleXdvcmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfR0VUX0tFWVdPUkQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFNldEtleXdvcmRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEZJTkRfU0VUX0tFWVdPUkQ7XG4gIGtleXdvcmQ6IHN0cmluZztcbiAgZm91bmQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25FbmFibGVkUXVlcnlNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRURfUVVFUlk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25FbmFibGVkUmVzcG9uc2VNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRURfUkVTUE9OU0U7XG4gIGVuYWJsZWQ6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWRkb25Ub2dnbGVFbmFibGVkTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBBRERPTl9UT0dHTEVfRU5BQkxFRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPcGVuVXJsTWVzc2FnZSB7XG4gIHR5cGU6IHR5cGVvZiBPUEVOX1VSTDtcbiAgdXJsOiBzdHJpbmc7XG4gIG5ld1RhYjogYm9vbGVhbjtcbiAgYmFja2dyb3VuZDogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5nc0NoYW5nZWRNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIFNFVFRJTkdTX0NIQU5HRUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3NRdWVyeU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgU0VUVElOR1NfUVVFUlk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc29sZUZyYW1lTWVzc2FnZU1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgQ09OU09MRV9GUkFNRV9NRVNTQUdFO1xuICBtZXNzYWdlOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTmF2aWdhdGVIaXN0b3J5TmV4dE1lc3NhZ2Uge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeVByZXZNZXNzYWdlIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0hJU1RPUllfUFJFVjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtOZXh0IHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZUxpbmtQcmV2IHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX0xJTktfUFJFVjtcbn1cblxuZXhwb3J0IHR5cGUgTWVzc2FnZSA9XG4gIEJhY2tncm91bmRPcGVyYXRpb25NZXNzYWdlIHxcbiAgQ29uc29sZVVuZm9jdXNNZXNzYWdlIHxcbiAgQ29uc29sZUVudGVyQ29tbWFuZE1lc3NhZ2UgfFxuICBDb25zb2xlRW50ZXJGaW5kTWVzc2FnZSB8XG4gIENvbnNvbGVRdWVyeUNvbXBsZXRpb25zTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93Q29tbWFuZE1lc3NhZ2UgfFxuICBDb25zb2xlU2hvd0Vycm9yTWVzc2FnZSB8XG4gIENvbnNvbGVTaG93SW5mb01lc3NhZ2UgfFxuICBDb25zb2xlU2hvd0ZpbmRNZXNzYWdlIHxcbiAgQ29uc29sZUhpZGVNZXNzYWdlIHxcbiAgRm9sbG93U3RhcnRNZXNzYWdlIHxcbiAgRm9sbG93UmVxdWVzdENvdW50VGFyZ2V0c01lc3NhZ2UgfFxuICBGb2xsb3dSZXNwb25zZUNvdW50VGFyZ2V0c01lc3NhZ2UgfFxuICBGb2xsb3dDcmVhdGVIaW50c01lc3NhZ2UgfFxuICBGb2xsb3dTaG93SGludHNNZXNzYWdlIHxcbiAgRm9sbG93UmVtb3ZlSGludHNNZXNzYWdlIHxcbiAgRm9sbG93QWN0aXZhdGVNZXNzYWdlIHxcbiAgRm9sbG93S2V5UHJlc3NNZXNzYWdlIHxcbiAgTWFya1NldEdsb2JhbE1lc3NhZ2UgfFxuICBNYXJrSnVtcEdsb2JhbE1lc3NhZ2UgfFxuICBUYWJTY3JvbGxUb01lc3NhZ2UgfFxuICBGaW5kTmV4dE1lc3NhZ2UgfFxuICBGaW5kUHJldk1lc3NhZ2UgfFxuICBGaW5kR2V0S2V5d29yZE1lc3NhZ2UgfFxuICBGaW5kU2V0S2V5d29yZE1lc3NhZ2UgfFxuICBBZGRvbkVuYWJsZWRRdWVyeU1lc3NhZ2UgfFxuICBBZGRvbkVuYWJsZWRSZXNwb25zZU1lc3NhZ2UgfFxuICBBZGRvblRvZ2dsZUVuYWJsZWRNZXNzYWdlIHxcbiAgT3BlblVybE1lc3NhZ2UgfFxuICBTZXR0aW5nc0NoYW5nZWRNZXNzYWdlIHxcbiAgU2V0dGluZ3NRdWVyeU1lc3NhZ2UgfFxuICBDb25zb2xlRnJhbWVNZXNzYWdlTWVzc2FnZSB8XG4gIE5hdmlnYXRlSGlzdG9yeU5leHRNZXNzYWdlIHxcbiAgTmF2aWdhdGVIaXN0b3J5UHJldk1lc3NhZ2UgfFxuICBOYXZpZ2F0ZUxpbmtOZXh0IHxcbiAgTmF2aWdhdGVMaW5rUHJldjtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmV4cG9ydCBjb25zdCB2YWx1ZU9mID0gKG86IGFueSk6IE1lc3NhZ2UgPT4ge1xuICBzd2l0Y2ggKG8udHlwZSkge1xuICBjYXNlIENPTlNPTEVfVU5GT0NVUzpcbiAgY2FzZSBDT05TT0xFX0VOVEVSX0NPTU1BTkQ6XG4gIGNhc2UgQ09OU09MRV9FTlRFUl9GSU5EOlxuICBjYXNlIENPTlNPTEVfUVVFUllfQ09NUExFVElPTlM6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0NPTU1BTkQ6XG4gIGNhc2UgQ09OU09MRV9TSE9XX0VSUk9SOlxuICBjYXNlIENPTlNPTEVfU0hPV19JTkZPOlxuICBjYXNlIENPTlNPTEVfU0hPV19GSU5EOlxuICBjYXNlIENPTlNPTEVfSElERTpcbiAgY2FzZSBGT0xMT1dfU1RBUlQ6XG4gIGNhc2UgRk9MTE9XX1JFUVVFU1RfQ09VTlRfVEFSR0VUUzpcbiAgY2FzZSBGT0xMT1dfUkVTUE9OU0VfQ09VTlRfVEFSR0VUUzpcbiAgY2FzZSBGT0xMT1dfQ1JFQVRFX0hJTlRTOlxuICBjYXNlIEZPTExPV19TSE9XX0hJTlRTOlxuICBjYXNlIEZPTExPV19SRU1PVkVfSElOVFM6XG4gIGNhc2UgRk9MTE9XX0FDVElWQVRFOlxuICBjYXNlIEZPTExPV19LRVlfUFJFU1M6XG4gIGNhc2UgTUFSS19TRVRfR0xPQkFMOlxuICBjYXNlIE1BUktfSlVNUF9HTE9CQUw6XG4gIGNhc2UgVEFCX1NDUk9MTF9UTzpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIEZJTkRfR0VUX0tFWVdPUkQ6XG4gIGNhc2UgRklORF9TRVRfS0VZV09SRDpcbiAgY2FzZSBBRERPTl9FTkFCTEVEX1FVRVJZOlxuICBjYXNlIEFERE9OX0VOQUJMRURfUkVTUE9OU0U6XG4gIGNhc2UgQURET05fVE9HR0xFX0VOQUJMRUQ6XG4gIGNhc2UgT1BFTl9VUkw6XG4gIGNhc2UgU0VUVElOR1NfQ0hBTkdFRDpcbiAgY2FzZSBTRVRUSU5HU19RVUVSWTpcbiAgY2FzZSBDT05TT0xFX0ZSQU1FX01FU1NBR0U6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfUFJFVjpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfTElOS19QUkVWOlxuICAgIHJldHVybiBvO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcigndW5rbm93biBvcGVyYXRpb24gdHlwZTogJyArIG8udHlwZSk7XG59O1xuIiwiLy8gSGlkZSBjb25zb2xlOyBvciBjYW5jZWwgc29tZSB1c2VyIGFjdGlvbnNcbmV4cG9ydCBjb25zdCBDQU5DRUwgPSAnY2FuY2VsJztcblxuLy8gQWRkb25zXG5leHBvcnQgY29uc3QgQURET05fRU5BQkxFID0gJ2FkZG9uLmVuYWJsZSc7XG5leHBvcnQgY29uc3QgQURET05fRElTQUJMRSA9ICdhZGRvbi5kaXNhYmxlJztcbmV4cG9ydCBjb25zdCBBRERPTl9UT0dHTEVfRU5BQkxFRCA9ICdhZGRvbi50b2dnbGUuZW5hYmxlZCc7XG5cbi8vIENvbW1hbmRcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1cgPSAnY29tbWFuZC5zaG93JztcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfT1BFTiA9ICdjb21tYW5kLnNob3cub3Blbic7XG5leHBvcnQgY29uc3QgQ09NTUFORF9TSE9XX1RBQk9QRU4gPSAnY29tbWFuZC5zaG93LnRhYm9wZW4nO1xuZXhwb3J0IGNvbnN0IENPTU1BTkRfU0hPV19XSU5PUEVOID0gJ2NvbW1hbmQuc2hvdy53aW5vcGVuJztcbmV4cG9ydCBjb25zdCBDT01NQU5EX1NIT1dfQlVGRkVSID0gJ2NvbW1hbmQuc2hvdy5idWZmZXInO1xuZXhwb3J0IGNvbnN0IENPTU1BTkRfU0hPV19BRERCT09LTUFSSyA9ICdjb21tYW5kLnNob3cuYWRkYm9va21hcmsnO1xuXG4vLyBTY3JvbGxzXG5leHBvcnQgY29uc3QgU0NST0xMX1ZFUlRJQ0FMTFkgPSAnc2Nyb2xsLnZlcnRpY2FsbHknO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9IT1JJWk9OQUxMWSA9ICdzY3JvbGwuaG9yaXpvbmFsbHknO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9QQUdFUyA9ICdzY3JvbGwucGFnZXMnO1xuZXhwb3J0IGNvbnN0IFNDUk9MTF9UT1AgPSAnc2Nyb2xsLnRvcCc7XG5leHBvcnQgY29uc3QgU0NST0xMX0JPVFRPTSA9ICdzY3JvbGwuYm90dG9tJztcbmV4cG9ydCBjb25zdCBTQ1JPTExfSE9NRSA9ICdzY3JvbGwuaG9tZSc7XG5leHBvcnQgY29uc3QgU0NST0xMX0VORCA9ICdzY3JvbGwuZW5kJztcblxuLy8gRm9sbG93c1xuZXhwb3J0IGNvbnN0IEZPTExPV19TVEFSVCA9ICdmb2xsb3cuc3RhcnQnO1xuXG4vLyBOYXZpZ2F0aW9uc1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0hJU1RPUllfUFJFViA9ICduYXZpZ2F0ZS5oaXN0b3J5LnByZXYnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0hJU1RPUllfTkVYVCA9ICduYXZpZ2F0ZS5oaXN0b3J5Lm5leHQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfUFJFViA9ICduYXZpZ2F0ZS5saW5rLnByZXYnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX0xJTktfTkVYVCA9ICduYXZpZ2F0ZS5saW5rLm5leHQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1BBUkVOVCA9ICduYXZpZ2F0ZS5wYXJlbnQnO1xuZXhwb3J0IGNvbnN0IE5BVklHQVRFX1JPT1QgPSAnbmF2aWdhdGUucm9vdCc7XG5cbi8vIEZvY3VzXG5leHBvcnQgY29uc3QgRk9DVVNfSU5QVVQgPSAnZm9jdXMuaW5wdXQnO1xuXG4vLyBQYWdlXG5leHBvcnQgY29uc3QgUEFHRV9TT1VSQ0UgPSAncGFnZS5zb3VyY2UnO1xuZXhwb3J0IGNvbnN0IFBBR0VfSE9NRSA9ICdwYWdlLmhvbWUnO1xuXG4vLyBUYWJzXG5leHBvcnQgY29uc3QgVEFCX0NMT1NFID0gJ3RhYnMuY2xvc2UnO1xuZXhwb3J0IGNvbnN0IFRBQl9DTE9TRV9GT1JDRSA9ICd0YWJzLmNsb3NlLmZvcmNlJztcbmV4cG9ydCBjb25zdCBUQUJfQ0xPU0VfUklHSFQgPSAndGFicy5jbG9zZS5yaWdodCc7XG5leHBvcnQgY29uc3QgVEFCX1JFT1BFTiA9ICd0YWJzLnJlb3Blbic7XG5leHBvcnQgY29uc3QgVEFCX1BSRVYgPSAndGFicy5wcmV2JztcbmV4cG9ydCBjb25zdCBUQUJfTkVYVCA9ICd0YWJzLm5leHQnO1xuZXhwb3J0IGNvbnN0IFRBQl9GSVJTVCA9ICd0YWJzLmZpcnN0JztcbmV4cG9ydCBjb25zdCBUQUJfTEFTVCA9ICd0YWJzLmxhc3QnO1xuZXhwb3J0IGNvbnN0IFRBQl9QUkVWX1NFTCA9ICd0YWJzLnByZXZzZWwnO1xuZXhwb3J0IGNvbnN0IFRBQl9SRUxPQUQgPSAndGFicy5yZWxvYWQnO1xuZXhwb3J0IGNvbnN0IFRBQl9QSU4gPSAndGFicy5waW4nO1xuZXhwb3J0IGNvbnN0IFRBQl9VTlBJTiA9ICd0YWJzLnVucGluJztcbmV4cG9ydCBjb25zdCBUQUJfVE9HR0xFX1BJTk5FRCA9ICd0YWJzLnBpbi50b2dnbGUnO1xuZXhwb3J0IGNvbnN0IFRBQl9EVVBMSUNBVEUgPSAndGFicy5kdXBsaWNhdGUnO1xuXG4vLyBab29tc1xuZXhwb3J0IGNvbnN0IFpPT01fSU4gPSAnem9vbS5pbic7XG5leHBvcnQgY29uc3QgWk9PTV9PVVQgPSAnem9vbS5vdXQnO1xuZXhwb3J0IGNvbnN0IFpPT01fTkVVVFJBTCA9ICd6b29tLm5ldXRyYWwnO1xuXG4vLyBVcmwgeWFuay9wYXN0ZVxuZXhwb3J0IGNvbnN0IFVSTFNfWUFOSyA9ICd1cmxzLnlhbmsnO1xuZXhwb3J0IGNvbnN0IFVSTFNfUEFTVEUgPSAndXJscy5wYXN0ZSc7XG5cbi8vIEZpbmRcbmV4cG9ydCBjb25zdCBGSU5EX1NUQVJUID0gJ2ZpbmQuc3RhcnQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfTkVYVCA9ICdmaW5kLm5leHQnO1xuZXhwb3J0IGNvbnN0IEZJTkRfUFJFViA9ICdmaW5kLnByZXYnO1xuXG4vLyBNYXJrXG5leHBvcnQgY29uc3QgTUFSS19TRVRfUFJFRklYID0gJ21hcmsuc2V0LnByZWZpeCc7XG5leHBvcnQgY29uc3QgTUFSS19KVU1QX1BSRUZJWCA9ICdtYXJrLmp1bXAucHJlZml4JztcblxuLy8gUmVwZWF0XG5leHBvcnQgY29uc3QgUkVQRUFUX0xBU1QgPSAncmVwZWF0Lmxhc3QnO1xuXG4vLyBJbnRlcm5hbFxuZXhwb3J0IGNvbnN0IElOVEVSTkFMX09QRU5fVVJMID0gJ2ludGVybmFsLm9wZW4udXJsJztcblxuZXhwb3J0IGludGVyZmFjZSBDYW5jZWxPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ0FOQ0VMO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkZG9uRW5hYmxlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEFERE9OX0VOQUJMRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvbkRpc2FibGVPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQURET05fRElTQUJMRTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBZGRvblRvZ2dsZUVuYWJsZWRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQURET05fVE9HR0xFX0VOQUJMRUQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93T3Blbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfT1BFTjtcbiAgYWx0ZXI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dUYWJvcGVuT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPV19UQUJPUEVOO1xuICBhbHRlcjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb21tYW5kU2hvd1dpbm9wZW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgQ09NTUFORF9TSE9XX1dJTk9QRU47XG4gIGFsdGVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbW1hbmRTaG93QnVmZmVyT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIENPTU1BTkRfU0hPV19CVUZGRVI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tbWFuZFNob3dBZGRib29rbWFya09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBDT01NQU5EX1NIT1dfQUREQk9PS01BUks7XG4gIGFsdGVyOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFZlcnRpY2FsbHlPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX1ZFUlRJQ0FMTFk7XG4gIGNvdW50OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsSG9yaXpvbmFsbHlPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX0hPUklaT05BTExZO1xuICBjb3VudDogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbFBhZ2VzT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9QQUdFUztcbiAgY291bnQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxUb3BPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX1RPUDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxCb3R0b21PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgU0NST0xMX0JPVFRPTTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY3JvbGxIb21lT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFNDUk9MTF9IT01FO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNjcm9sbEVuZE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBTQ1JPTExfRU5EO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZvbGxvd1N0YXJ0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZPTExPV19TVEFSVDtcbiAgbmV3VGFiOiBib29sZWFuO1xuICBiYWNrZ3JvdW5kOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeVByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlSGlzdG9yeU5leHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfSElTVE9SWV9ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlTGlua1ByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfTElOS19QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlTGlua05leHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfTElOS19ORVhUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlUGFyZW50T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE5BVklHQVRFX1BBUkVOVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOYXZpZ2F0ZVJvb3RPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTkFWSUdBVEVfUk9PVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGb2N1c0lucHV0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZPQ1VTX0lOUFVUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBhZ2VTb3VyY2VPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgUEFHRV9TT1VSQ0U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUhvbWVPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgUEFHRV9IT01FO1xuICBuZXdUYWI6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiQ2xvc2VPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0NMT1NFO1xuICBzZWxlY3Q/OiAnbGVmdCcgfCAncmlnaHQnO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNsb3NlRm9yY2VPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0NMT1NFX0ZPUkNFO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYkNsb3NlUmlnaHRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0NMT1NFX1JJR0hUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlJlb3Blbk9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfUkVPUEVOO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1BSRVY7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiTmV4dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfTkVYVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJGaXJzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfRklSU1Q7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiTGFzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfTEFTVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJQcmV2U2VsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9QUkVWX1NFTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJSZWxvYWRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1JFTE9BRDtcbiAgY2FjaGU6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiUGluT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFRBQl9QSU47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFiVW5waW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX1VOUElOO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYlRvZ2dsZVBpbm5lZE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBUQUJfVE9HR0xFX1BJTk5FRDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUYWJEdXBsaWNhdGVPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgVEFCX0RVUExJQ0FURTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tSW5PcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgWk9PTV9JTjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBab29tT3V0T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fT1VUO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFpvb21OZXV0cmFsT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFpPT01fTkVVVFJBTDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxzWWFua09wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBVUkxTX1lBTks7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsc1Bhc3RlT3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFVSTFNfUEFTVEU7XG4gIG5ld1RhYjogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kU3RhcnRPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9TVEFSVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaW5kTmV4dE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGSU5EX05FWFQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZFByZXZPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgRklORF9QUkVWO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtTZXRQcmVmaXhPcGVyYXRpb24ge1xuICB0eXBlOiB0eXBlb2YgTUFSS19TRVRfUFJFRklYO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1hcmtKdW1wUHJlZml4T3BlcmF0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE1BUktfSlVNUF9QUkVGSVg7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVwZWF0TGFzdE9wZXJhdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBSRVBFQVRfTEFTVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbE9wZW5Vcmwge1xuICB0eXBlOiB0eXBlb2YgSU5URVJOQUxfT1BFTl9VUkw7XG4gIHVybDogc3RyaW5nO1xuICBuZXdUYWI/OiBib29sZWFuO1xuICBuZXdXaW5kb3c/OiBib29sZWFuO1xuICBiYWNrZ3JvdW5kPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgT3BlcmF0aW9uID1cbiAgQ2FuY2VsT3BlcmF0aW9uIHxcbiAgQWRkb25FbmFibGVPcGVyYXRpb24gfFxuICBBZGRvbkRpc2FibGVPcGVyYXRpb24gfFxuICBBZGRvblRvZ2dsZUVuYWJsZWRPcGVyYXRpb24gfFxuICBDb21tYW5kU2hvd09wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93T3Blbk9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93VGFib3Blbk9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93V2lub3Blbk9wZXJhdGlvbiB8XG4gIENvbW1hbmRTaG93QnVmZmVyT3BlcmF0aW9uIHxcbiAgQ29tbWFuZFNob3dBZGRib29rbWFya09wZXJhdGlvbiB8XG4gIFNjcm9sbFZlcnRpY2FsbHlPcGVyYXRpb24gfFxuICBTY3JvbGxIb3Jpem9uYWxseU9wZXJhdGlvbiB8XG4gIFNjcm9sbFBhZ2VzT3BlcmF0aW9uIHxcbiAgU2Nyb2xsVG9wT3BlcmF0aW9uIHxcbiAgU2Nyb2xsQm90dG9tT3BlcmF0aW9uIHxcbiAgU2Nyb2xsSG9tZU9wZXJhdGlvbiB8XG4gIFNjcm9sbEVuZE9wZXJhdGlvbiB8XG4gIEZvbGxvd1N0YXJ0T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVIaXN0b3J5UHJldk9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlSGlzdG9yeU5leHRPcGVyYXRpb24gfFxuICBOYXZpZ2F0ZUxpbmtQcmV2T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVMaW5rTmV4dE9wZXJhdGlvbiB8XG4gIE5hdmlnYXRlUGFyZW50T3BlcmF0aW9uIHxcbiAgTmF2aWdhdGVSb290T3BlcmF0aW9uIHxcbiAgRm9jdXNJbnB1dE9wZXJhdGlvbiB8XG4gIFBhZ2VTb3VyY2VPcGVyYXRpb24gfFxuICBQYWdlSG9tZU9wZXJhdGlvbiB8XG4gIFRhYkNsb3NlT3BlcmF0aW9uIHxcbiAgVGFiQ2xvc2VGb3JjZU9wZXJhdGlvbiB8XG4gIFRhYkNsb3NlUmlnaHRPcGVyYXRpb24gfFxuICBUYWJSZW9wZW5PcGVyYXRpb24gfFxuICBUYWJQcmV2T3BlcmF0aW9uIHxcbiAgVGFiTmV4dE9wZXJhdGlvbiB8XG4gIFRhYkZpcnN0T3BlcmF0aW9uIHxcbiAgVGFiTGFzdE9wZXJhdGlvbiB8XG4gIFRhYlByZXZTZWxPcGVyYXRpb24gfFxuICBUYWJSZWxvYWRPcGVyYXRpb24gfFxuICBUYWJQaW5PcGVyYXRpb24gfFxuICBUYWJVbnBpbk9wZXJhdGlvbiB8XG4gIFRhYlRvZ2dsZVBpbm5lZE9wZXJhdGlvbiB8XG4gIFRhYkR1cGxpY2F0ZU9wZXJhdGlvbiB8XG4gIFpvb21Jbk9wZXJhdGlvbiB8XG4gIFpvb21PdXRPcGVyYXRpb24gfFxuICBab29tTmV1dHJhbE9wZXJhdGlvbiB8XG4gIFVybHNZYW5rT3BlcmF0aW9uIHxcbiAgVXJsc1Bhc3RlT3BlcmF0aW9uIHxcbiAgRmluZFN0YXJ0T3BlcmF0aW9uIHxcbiAgRmluZE5leHRPcGVyYXRpb24gfFxuICBGaW5kUHJldk9wZXJhdGlvbiB8XG4gIE1hcmtTZXRQcmVmaXhPcGVyYXRpb24gfFxuICBNYXJrSnVtcFByZWZpeE9wZXJhdGlvbiB8XG4gIFJlcGVhdExhc3RPcGVyYXRpb24gfFxuICBJbnRlcm5hbE9wZW5Vcmw7XG5cbmNvbnN0IGFzc2VydE9wdGlvbmFsQm9vbGVhbiA9IChvYmo6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBuYW1lKSAmJlxuICAgICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcbiAgICAgIGBOb3QgYSBib29sZWFuIHBhcmFtZXRlcjogJyR7bmFtZX0gKCR7dHlwZW9mIG9ialtuYW1lXX0pJ2AsXG4gICAgKTtcbiAgfVxufTtcblxuY29uc3QgYXNzZXJ0T3B0aW9uYWxTdHJpbmcgPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZywgdmFsdWVzPzogc3RyaW5nW10pID0+IHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpKSB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmpbbmFtZV07XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgIGBOb3QgYSBzdHJpbmcgcGFyYW1ldGVyOiAnJHtuYW1lfScgKCR7dHlwZW9mIHZhbHVlfSlgLFxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoICYmIHZhbHVlcy5pbmRleE9mKHZhbHVlKSA9PT0gLTEpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHBhcmFtZXRlciBmb3IgJyR7bmFtZX0nOiAnJHt2YWx1ZX0nYCk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBhc3NlcnRSZXF1aXJlZE51bWJlciA9IChvYmo6IGFueSwgbmFtZTogc3RyaW5nKSA9PiB7XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgbmFtZSkgfHxcbiAgICB0eXBlb2Ygb2JqW25hbWVdICE9PSAnbnVtYmVyJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE1pc3NpbmcgbnVtYmVyIHBhcmFtZXRlcjogJyR7bmFtZX1gKTtcbiAgfVxufTtcblxuY29uc3QgYXNzZXJ0UmVxdWlyZWRTdHJpbmcgPSAob2JqOiBhbnksIG5hbWU6IHN0cmluZykgPT4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIG5hbWUpIHx8XG4gICAgdHlwZW9mIG9ialtuYW1lXSAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBNaXNzaW5nIHN0cmluZyBwYXJhbWV0ZXI6ICcke25hbWV9YCk7XG4gIH1cbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5LCBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5leHBvcnQgY29uc3QgdmFsdWVPZiA9IChvOiBhbnkpOiBPcGVyYXRpb24gPT4ge1xuICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAndHlwZScpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgTWlzc2luZyAndHlwZScgZmllbGRgKTtcbiAgfVxuICBzd2l0Y2ggKG8udHlwZSkge1xuICBjYXNlIENPTU1BTkRfU0hPV19PUEVOOlxuICBjYXNlIENPTU1BTkRfU0hPV19UQUJPUEVOOlxuICBjYXNlIENPTU1BTkRfU0hPV19XSU5PUEVOOlxuICBjYXNlIENPTU1BTkRfU0hPV19BRERCT09LTUFSSzpcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ2FsdGVyJyk7XG4gICAgcmV0dXJuIHsgdHlwZTogby50eXBlLCBhbHRlcjogQm9vbGVhbihvLmFsdGVyKSB9O1xuICBjYXNlIFNDUk9MTF9WRVJUSUNBTExZOlxuICBjYXNlIFNDUk9MTF9IT1JJWk9OQUxMWTpcbiAgY2FzZSBTQ1JPTExfUEFHRVM6XG4gICAgYXNzZXJ0UmVxdWlyZWROdW1iZXIobywgJ2NvdW50Jyk7XG4gICAgcmV0dXJuIHsgdHlwZTogby50eXBlLCBjb3VudDogTnVtYmVyKG8uY291bnQpIH07XG4gIGNhc2UgRk9MTE9XX1NUQVJUOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sICdiYWNrZ3JvdW5kJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEZPTExPV19TVEFSVCxcbiAgICAgIG5ld1RhYjogQm9vbGVhbih0eXBlb2Ygby5uZXdUYWIgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1RhYiksXG4gICAgICBiYWNrZ3JvdW5kOiBCb29sZWFuKHR5cGVvZiBvLmJhY2tncm91bmQgPT09ICd1bmRlZmluZWQnID8gdHJ1ZSA6IG8uYmFja2dyb3VuZCksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgIH07XG4gIGNhc2UgUEFHRV9IT01FOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFBBR0VfSE9NRSxcbiAgICAgIG5ld1RhYjogQm9vbGVhbih0eXBlb2Ygby5uZXdUYWIgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1RhYiksXG4gICAgfTtcbiAgY2FzZSBUQUJfQ0xPU0U6XG4gICAgYXNzZXJ0T3B0aW9uYWxTdHJpbmcobywgJ3NlbGVjdCcsIFsnbGVmdCcsICdyaWdodCddKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVEFCX0NMT1NFLFxuICAgICAgc2VsZWN0OiAodHlwZW9mIG8uc2VsZWN0ID09PSAndW5kZWZpbmVkJyA/ICdyaWdodCcgOiBvLnNlbGVjdCksXG4gICAgfTtcbiAgY2FzZSBUQUJfUkVMT0FEOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnY2FjaGUnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogVEFCX1JFTE9BRCxcbiAgICAgIGNhY2hlOiBCb29sZWFuKHR5cGVvZiBvLmNhY2hlID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5jYWNoZSksXG4gICAgfTtcbiAgY2FzZSBVUkxTX1BBU1RFOlxuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnbmV3VGFiJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IFVSTFNfUEFTVEUsXG4gICAgICBuZXdUYWI6IEJvb2xlYW4odHlwZW9mIG8ubmV3VGFiID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogby5uZXdUYWIpLFxuICAgIH07XG4gIGNhc2UgSU5URVJOQUxfT1BFTl9VUkw6XG4gICAgYXNzZXJ0T3B0aW9uYWxCb29sZWFuKG8sICduZXdUYWInKTtcbiAgICBhc3NlcnRPcHRpb25hbEJvb2xlYW4obywgJ25ld1dpbmRvdycpO1xuICAgIGFzc2VydE9wdGlvbmFsQm9vbGVhbihvLCAnYmFja2dyb3VuZCcpO1xuICAgIGFzc2VydFJlcXVpcmVkU3RyaW5nKG8sICd1cmwnKTtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogSU5URVJOQUxfT1BFTl9VUkwsXG4gICAgICB1cmw6IG8udXJsLFxuICAgICAgbmV3VGFiOiBCb29sZWFuKHR5cGVvZiBvLm5ld1RhYiA9PT0gJ3VuZGVmaW5lZCcgPyBmYWxzZSA6IG8ubmV3VGFiKSxcbiAgICAgIG5ld1dpbmRvdzogQm9vbGVhbih0eXBlb2Ygby5uZXdXaW5kb3cgPT09ICd1bmRlZmluZWQnID8gZmFsc2UgOiBvLm5ld1dpbmRvdyksIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbWF4LWxlblxuICAgICAgYmFja2dyb3VuZDogQm9vbGVhbih0eXBlb2Ygby5iYWNrZ3JvdW5kID09PSAndW5kZWZpbmVkJyA/IHRydWUgOiBvLmJhY2tncm91bmQpLCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICB9O1xuICBjYXNlIENBTkNFTDpcbiAgY2FzZSBBRERPTl9FTkFCTEU6XG4gIGNhc2UgQURET05fRElTQUJMRTpcbiAgY2FzZSBBRERPTl9UT0dHTEVfRU5BQkxFRDpcbiAgY2FzZSBDT01NQU5EX1NIT1c6XG4gIGNhc2UgQ09NTUFORF9TSE9XX0JVRkZFUjpcbiAgY2FzZSBTQ1JPTExfVE9QOlxuICBjYXNlIFNDUk9MTF9CT1RUT006XG4gIGNhc2UgU0NST0xMX0hPTUU6XG4gIGNhc2UgU0NST0xMX0VORDpcbiAgY2FzZSBOQVZJR0FURV9ISVNUT1JZX1BSRVY6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9ORVhUOlxuICBjYXNlIE5BVklHQVRFX0xJTktfUFJFVjpcbiAgY2FzZSBOQVZJR0FURV9MSU5LX05FWFQ6XG4gIGNhc2UgTkFWSUdBVEVfUEFSRU5UOlxuICBjYXNlIE5BVklHQVRFX1JPT1Q6XG4gIGNhc2UgRk9DVVNfSU5QVVQ6XG4gIGNhc2UgUEFHRV9TT1VSQ0U6XG4gIGNhc2UgVEFCX0NMT1NFX0ZPUkNFOlxuICBjYXNlIFRBQl9DTE9TRV9SSUdIVDpcbiAgY2FzZSBUQUJfUkVPUEVOOlxuICBjYXNlIFRBQl9QUkVWOlxuICBjYXNlIFRBQl9ORVhUOlxuICBjYXNlIFRBQl9GSVJTVDpcbiAgY2FzZSBUQUJfTEFTVDpcbiAgY2FzZSBUQUJfUFJFVl9TRUw6XG4gIGNhc2UgVEFCX1BJTjpcbiAgY2FzZSBUQUJfVU5QSU46XG4gIGNhc2UgVEFCX1RPR0dMRV9QSU5ORUQ6XG4gIGNhc2UgVEFCX0RVUExJQ0FURTpcbiAgY2FzZSBaT09NX0lOOlxuICBjYXNlIFpPT01fT1VUOlxuICBjYXNlIFpPT01fTkVVVFJBTDpcbiAgY2FzZSBVUkxTX1lBTks6XG4gIGNhc2UgRklORF9TVEFSVDpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIE1BUktfU0VUX1BSRUZJWDpcbiAgY2FzZSBNQVJLX0pVTVBfUFJFRklYOlxuICBjYXNlIFJFUEVBVF9MQVNUOlxuICAgIHJldHVybiB7IHR5cGU6IG8udHlwZSB9O1xuICB9XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gb3BlcmF0aW9uIHR5cGU6ICcgKyBvLnR5cGUpO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzTlJlcGVhdGFibGUgPSAodHlwZTogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlIFNDUk9MTF9WRVJUSUNBTExZOlxuICBjYXNlIFNDUk9MTF9IT1JJWk9OQUxMWTpcbiAgY2FzZSBTQ1JPTExfUEFHRVM6XG4gIGNhc2UgTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICBjYXNlIE5BVklHQVRFX0hJU1RPUllfTkVYVDpcbiAgY2FzZSBOQVZJR0FURV9QQVJFTlQ6XG4gIGNhc2UgVEFCX0NMT1NFOlxuICBjYXNlIFRBQl9DTE9TRV9GT1JDRTpcbiAgY2FzZSBUQUJfQ0xPU0VfUklHSFQ6XG4gIGNhc2UgVEFCX1JFT1BFTjpcbiAgY2FzZSBUQUJfUFJFVjpcbiAgY2FzZSBUQUJfTkVYVDpcbiAgY2FzZSBUQUJfRFVQTElDQVRFOlxuICBjYXNlIFpPT01fSU46XG4gIGNhc2UgWk9PTV9PVVQ6XG4gIGNhc2UgVVJMU19QQVNURTpcbiAgY2FzZSBGSU5EX05FWFQ6XG4gIGNhc2UgRklORF9QUkVWOlxuICBjYXNlIFJFUEVBVF9MQVNUOlxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IE1lbW9yeVN0b3JhZ2UgZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmVzL01lbW9yeVN0b3JhZ2UnO1xuXG5jb25zdCBDVVJSRU5UX1NFTEVDVEVEX0tFWSA9ICd0YWJzLmN1cnJlbnQuc2VsZWN0ZWQnO1xuY29uc3QgTEFTVF9TRUxFQ1RFRF9LRVkgPSAndGFicy5sYXN0LnNlbGVjdGVkJztcblxudHlwZSBUYWIgPSBicm93c2VyLnRhYnMuVGFiO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYWJQcmVzZW50ZXIge1xuICBvcGVuKHVybDogc3RyaW5nLCB0YWJJZD86IG51bWJlcik6IFByb21pc2U8VGFiPiB7XG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy51cGRhdGUodGFiSWQsIHsgdXJsIH0pO1xuICB9XG5cbiAgY3JlYXRlKHVybDogc3RyaW5nLCBvcHRzPzogb2JqZWN0KTogUHJvbWlzZTxUYWI+IHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybCwgLi4ub3B0cyB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldEN1cnJlbnQoKTogUHJvbWlzZTxUYWI+IHtcbiAgICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHtcbiAgICAgIGFjdGl2ZTogdHJ1ZSwgY3VycmVudFdpbmRvdzogdHJ1ZVxuICAgIH0pO1xuICAgIHJldHVybiB0YWJzWzBdO1xuICB9XG5cbiAgZ2V0QWxsKCk6IFByb21pc2U8VGFiW10+IHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldExhc3RTZWxlY3RlZElkKCk6IFByb21pc2U8bnVtYmVyIHwgdW5kZWZpbmVkPiB7XG4gICAgY29uc3QgY2FjaGUgPSBuZXcgTWVtb3J5U3RvcmFnZSgpO1xuICAgIGNvbnN0IHRhYklkID0gYXdhaXQgY2FjaGUuZ2V0KExBU1RfU0VMRUNURURfS0VZKTtcbiAgICBpZiAodGFiSWQgPT09IG51bGwgfHwgdHlwZW9mIHRhYklkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGFiSWQ7XG4gIH1cblxuICBhc3luYyBnZXRCeUtleXdvcmQoXG4gICAga2V5d29yZDogc3RyaW5nLCBleGNsdWRlUGlubmVkID0gZmFsc2UsXG4gICk6IFByb21pc2U8VGFiW10+IHtcbiAgICBjb25zdCB0YWJzID0gYXdhaXQgYnJvd3Nlci50YWJzLnF1ZXJ5KHsgY3VycmVudFdpbmRvdzogdHJ1ZSB9KTtcbiAgICByZXR1cm4gdGFicy5maWx0ZXIoKHQpID0+IHtcbiAgICAgIHJldHVybiB0LnVybCAmJiB0LnVybC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSkgfHxcbiAgICAgICAgdC50aXRsZSAmJiB0LnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoa2V5d29yZC50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KS5maWx0ZXIoKHQpID0+IHtcbiAgICAgIHJldHVybiAhKGV4Y2x1ZGVQaW5uZWQgJiYgdC5waW5uZWQpO1xuICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0KHRhYklkOiBudW1iZXIpOiBQcm9taXNlPFRhYj4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMudXBkYXRlKHRhYklkLCB7IGFjdGl2ZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIHJlbW92ZShpZHM6IG51bWJlcltdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5yZW1vdmUoaWRzKTtcbiAgfVxuXG4gIGFzeW5jIHJlb3BlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHdpbmRvdyA9IGF3YWl0IGJyb3dzZXIud2luZG93cy5nZXRDdXJyZW50KCk7XG4gICAgY29uc3Qgc2Vzc2lvbnMgPSBhd2FpdCBicm93c2VyLnNlc3Npb25zLmdldFJlY2VudGx5Q2xvc2VkKCk7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHNlc3Npb25zLmZpbmQoKHMpID0+IHtcbiAgICAgIHJldHVybiBzLnRhYiAmJiBzLnRhYi53aW5kb3dJZCA9PT0gd2luZG93LmlkO1xuICAgIH0pO1xuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2Vzc2lvbi50YWIgJiYgc2Vzc2lvbi50YWIuc2Vzc2lvbklkKSB7XG4gICAgICByZXR1cm4gYnJvd3Nlci5zZXNzaW9ucy5yZXN0b3JlKHNlc3Npb24udGFiLnNlc3Npb25JZCk7XG4gICAgfVxuICAgIGlmIChzZXNzaW9uLndpbmRvdyAmJiBzZXNzaW9uLndpbmRvdy5zZXNzaW9uSWQpIHtcbiAgICAgIHJldHVybiBicm93c2VyLnNlc3Npb25zLnJlc3RvcmUoc2Vzc2lvbi53aW5kb3cuc2Vzc2lvbklkKTtcbiAgICB9XG4gIH1cblxuICByZWxvYWQodGFiSWQ6IG51bWJlciwgY2FjaGU6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLnJlbG9hZCh0YWJJZCwgeyBieXBhc3NDYWNoZTogY2FjaGUgfSk7XG4gIH1cblxuICBzZXRQaW5uZWQodGFiSWQ6IG51bWJlciwgcGlubmVkOiBib29sZWFuKTogUHJvbWlzZTxUYWI+IHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLnVwZGF0ZSh0YWJJZCwgeyBwaW5uZWQgfSk7XG4gIH1cblxuICBkdXBsaWNhdGUoaWQ6IG51bWJlcik6IFByb21pc2U8VGFiPiB7XG4gICAgcmV0dXJuIGJyb3dzZXIudGFicy5kdXBsaWNhdGUoaWQpO1xuICB9XG5cbiAgZ2V0Wm9vbSh0YWJJZDogbnVtYmVyKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICByZXR1cm4gYnJvd3Nlci50YWJzLmdldFpvb20odGFiSWQpO1xuICB9XG5cbiAgc2V0Wm9vbSh0YWJJZDogbnVtYmVyLCBmYWN0b3I6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2V0Wm9vbSh0YWJJZCwgZmFjdG9yKTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWQoXG4gICAgbGlzdGVuZXI6IChhcmc6IHsgdGFiSWQ6IG51bWJlciwgd2luZG93SWQ6IG51bWJlcn0pID0+IHZvaWQsXG4gICk6IHZvaWQge1xuICAgIGJyb3dzZXIudGFicy5vbkFjdGl2YXRlZC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIH1cbn1cblxuY29uc3QgdGFiUHJlc2VudGVyID0gbmV3IFRhYlByZXNlbnRlcigpO1xudGFiUHJlc2VudGVyLm9uU2VsZWN0ZWQoKHRhYjogYW55KSA9PiB7XG4gIGNvbnN0IGNhY2hlID0gbmV3IE1lbW9yeVN0b3JhZ2UoKTtcblxuICBjb25zdCBsYXN0SWQgPSBjYWNoZS5nZXQoQ1VSUkVOVF9TRUxFQ1RFRF9LRVkpO1xuICBpZiAobGFzdElkKSB7XG4gICAgY2FjaGUuc2V0KExBU1RfU0VMRUNURURfS0VZLCBsYXN0SWQpO1xuICB9XG4gIGNhY2hlLnNldChDVVJSRU5UX1NFTEVDVEVEX0tFWSwgdGFiLnRhYklkKTtcbn0pO1xuIiwiXG5leHBvcnQgdHlwZSBQcm9wZXJ0aWVzSlNPTiA9IHtcbiAgaGludGNoYXJzPzogc3RyaW5nO1xuICBzbW9vdGhzY3JvbGw/OiBib29sZWFuO1xuICBjb21wbGV0ZT86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5VHlwZXMgPSB7XG4gIGhpbnRjaGFyczogc3RyaW5nO1xuICBzbW9vdGhzY3JvbGw6IHN0cmluZztcbiAgY29tcGxldGU6IHN0cmluZztcbn07XG5cbnR5cGUgUHJvcGVydHlOYW1lID0gJ2hpbnRjaGFycycgfCAnc21vb3Roc2Nyb2xsJyB8ICdjb21wbGV0ZSc7XG5cbnR5cGUgUHJvcGVydHlEZWYgPSB7XG4gIG5hbWU6IFByb3BlcnR5TmFtZTtcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZGVmYXVsdFZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuICB0eXBlOiAnc3RyaW5nJyB8ICdudW1iZXInIHwgJ2Jvb2xlYW4nO1xufTtcblxuY29uc3QgZGVmczogUHJvcGVydHlEZWZbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdoaW50Y2hhcnMnLFxuICAgIGRlc2NyaXB0aW9uOiAnaGludCBjaGFyYWN0ZXJzIG9uIGZvbGxvdyBtb2RlJyxcbiAgICBkZWZhdWx0VmFsdWU6ICdhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5eicsXG4gICAgdHlwZTogJ3N0cmluZycsXG4gIH0sIHtcbiAgICBuYW1lOiAnc21vb3Roc2Nyb2xsJyxcbiAgICBkZXNjcmlwdGlvbjogJ3Ntb290aCBzY3JvbGwnLFxuICAgIGRlZmF1bHRWYWx1ZTogZmFsc2UsXG4gICAgdHlwZTogJ2Jvb2xlYW4nLFxuICB9LCB7XG4gICAgbmFtZTogJ2NvbXBsZXRlJyxcbiAgICBkZXNjcmlwdGlvbjogJ3doaWNoIGFyZSBjb21wbGV0ZWQgYXQgdGhlIG9wZW4gcGFnZScsXG4gICAgZGVmYXVsdFZhbHVlOiAnc2JoJyxcbiAgICB0eXBlOiAnc3RyaW5nJyxcbiAgfVxuXTtcblxuY29uc3QgZGVmYXVsdFZhbHVlcyA9IHtcbiAgaGludGNoYXJzOiAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLFxuICBzbW9vdGhzY3JvbGw6IGZhbHNlLFxuICBjb21wbGV0ZTogJ3NiaCcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9wZXJ0aWVzIHtcbiAgcHVibGljIGhpbnRjaGFyczogc3RyaW5nO1xuXG4gIHB1YmxpYyBzbW9vdGhzY3JvbGw6IGJvb2xlYW47XG5cbiAgcHVibGljIGNvbXBsZXRlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIGhpbnRjaGFycyxcbiAgICBzbW9vdGhzY3JvbGwsXG4gICAgY29tcGxldGUsXG4gIH06IHtcbiAgICBoaW50Y2hhcnM/OiBzdHJpbmc7XG4gICAgc21vb3Roc2Nyb2xsPzogYm9vbGVhbjtcbiAgICBjb21wbGV0ZT86IHN0cmluZztcbiAgfSA9IHt9KSB7XG4gICAgdGhpcy5oaW50Y2hhcnMgPSBoaW50Y2hhcnMgfHwgZGVmYXVsdFZhbHVlcy5oaW50Y2hhcnM7XG4gICAgdGhpcy5zbW9vdGhzY3JvbGwgPSBzbW9vdGhzY3JvbGwgfHwgZGVmYXVsdFZhbHVlcy5zbW9vdGhzY3JvbGw7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGNvbXBsZXRlIHx8IGRlZmF1bHRWYWx1ZXMuY29tcGxldGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04oanNvbjogUHJvcGVydGllc0pTT04pOiBQcm9wZXJ0aWVzIHtcbiAgICByZXR1cm4gbmV3IFByb3BlcnRpZXMoanNvbik7XG4gIH1cblxuICBzdGF0aWMgdHlwZXMoKTogUHJvcGVydHlUeXBlcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpbnRjaGFyczogJ3N0cmluZycsXG4gICAgICBzbW9vdGhzY3JvbGw6ICdib29sZWFuJyxcbiAgICAgIGNvbXBsZXRlOiAnc3RyaW5nJyxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGRlZihuYW1lOiBzdHJpbmcpOiBQcm9wZXJ0eURlZiB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIGRlZnMuZmluZChwID0+IHAubmFtZSA9PT0gbmFtZSk7XG4gIH1cblxuICBzdGF0aWMgZGVmcygpOiBQcm9wZXJ0eURlZltdIHtcbiAgICByZXR1cm4gZGVmcztcbiAgfVxuXG4gIHRvSlNPTigpOiBQcm9wZXJ0aWVzSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhpbnRjaGFyczogdGhpcy5oaW50Y2hhcnMsXG4gICAgICBzbW9vdGhzY3JvbGw6IHRoaXMuc21vb3Roc2Nyb2xsLFxuICAgICAgY29tcGxldGU6IHRoaXMuY29tcGxldGUsXG4gICAgfTtcbiAgfVxufVxuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IEtleSBmcm9tICcuL0tleSc7XG5cbmV4cG9ydCB0eXBlIEJsYWNrbGlzdEl0ZW1KU09OID0gc3RyaW5nIHwge1xuICB1cmw6IHN0cmluZyxcbiAga2V5czogc3RyaW5nW10sXG59O1xuXG5leHBvcnQgdHlwZSBCbGFja2xpc3RKU09OID0gQmxhY2tsaXN0SXRlbUpTT05bXTtcblxuY29uc3QgcmVnZXhGcm9tV2lsZGNhcmQgPSAocGF0dGVybjogc3RyaW5nKTogUmVnRXhwID0+IHtcbiAgY29uc3QgcmVnZXhTdHIgPSAnXicgKyBwYXR0ZXJuLnJlcGxhY2UoL1xcKi9nLCAnLionKSArICckJztcbiAgcmV0dXJuIG5ldyBSZWdFeHAocmVnZXhTdHIpO1xufTtcblxuZXhwb3J0IGNsYXNzIEJsYWNrbGlzdEl0ZW0ge1xuICBwdWJsaWMgcmVhZG9ubHkgcGF0dGVybjogc3RyaW5nO1xuXG4gIHByaXZhdGUgcmVnZXg6IFJlZ0V4cDtcblxuICBwdWJsaWMgcmVhZG9ubHkgcGFydGlhbDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkga2V5czogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSBrZXlFbnRpdGllczogS2V5W107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0dGVybjogc3RyaW5nLFxuICAgIHBhcnRpYWw6IGJvb2xlYW4sXG4gICAga2V5czogc3RyaW5nW11cbiAgKSB7XG4gICAgdGhpcy5wYXR0ZXJuID0gcGF0dGVybjtcbiAgICB0aGlzLnJlZ2V4ID0gcmVnZXhGcm9tV2lsZGNhcmQocGF0dGVybik7XG4gICAgdGhpcy5wYXJ0aWFsID0gcGFydGlhbDtcbiAgICB0aGlzLmtleXMgPSBrZXlzO1xuICAgIHRoaXMua2V5RW50aXRpZXMgPSB0aGlzLmtleXMubWFwKEtleS5mcm9tTWFwS2V5KTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBCbGFja2xpc3RJdGVtSlNPTik6IEJsYWNrbGlzdEl0ZW0ge1xuICAgIHJldHVybiB0eXBlb2YganNvbiA9PT0gJ3N0cmluZydcbiAgICAgID8gbmV3IEJsYWNrbGlzdEl0ZW0oanNvbiwgZmFsc2UsIFtdKVxuICAgICAgOiBuZXcgQmxhY2tsaXN0SXRlbShqc29uLnVybCwgdHJ1ZSwganNvbi5rZXlzKTtcbiAgfVxuXG4gIHRvSlNPTigpOiBCbGFja2xpc3RJdGVtSlNPTiB7XG4gICAgaWYgKCF0aGlzLnBhcnRpYWwpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhdHRlcm47XG4gICAgfVxuICAgIHJldHVybiB7IHVybDogdGhpcy5wYXR0ZXJuLCBrZXlzOiB0aGlzLmtleXMgfTtcbiAgfVxuXG4gIG1hdGNoZXModXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5wYXR0ZXJuLmluY2x1ZGVzKCcvJylcbiAgICAgID8gdGhpcy5yZWdleC50ZXN0KHVybC5ob3N0ICsgdXJsLnBhdGhuYW1lKVxuICAgICAgOiB0aGlzLnJlZ2V4LnRlc3QodXJsLmhvc3QpO1xuICB9XG5cbiAgaW5jbHVkZUtleSh1cmw6IFVSTCwga2V5OiBLZXkpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMubWF0Y2hlcyh1cmwpIHx8ICF0aGlzLnBhcnRpYWwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMua2V5RW50aXRpZXMuc29tZShrID0+IGsuZXF1YWxzKGtleSkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsYWNrbGlzdCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBpdGVtczogQmxhY2tsaXN0SXRlbVtdLFxuICApIHtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBCbGFja2xpc3RKU09OKTogQmxhY2tsaXN0IHtcbiAgICBjb25zdCBpdGVtcyA9IGpzb24ubWFwKG8gPT4gQmxhY2tsaXN0SXRlbS5mcm9tSlNPTihvKSk7XG4gICAgcmV0dXJuIG5ldyBCbGFja2xpc3QoaXRlbXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IEJsYWNrbGlzdEpTT04ge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLm1hcChpdGVtID0+IGl0ZW0udG9KU09OKCkpO1xuICB9XG5cbiAgaW5jbHVkZXNFbnRpcmVCbGFja2xpc3QodXJsOiBVUkwpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5zb21lKGl0ZW0gPT4gIWl0ZW0ucGFydGlhbCAmJiBpdGVtLm1hdGNoZXModXJsKSk7XG4gIH1cblxuICBpbmNsdWRlS2V5KHVybDogVVJMLCBrZXk6IEtleSkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zLnNvbWUoaXRlbSA9PiBpdGVtLmluY2x1ZGVLZXkodXJsLCBrZXkpKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuL29wZXJhdGlvbnMnO1xuaW1wb3J0IFNldHRpbmdzLCB7IERlZmF1bHRTZXR0aW5nSlNPTlRleHQgfSBmcm9tICcuL3NldHRpbmdzL1NldHRpbmdzJztcbmltcG9ydCBLZXltYXBzIGZyb20gJy4vc2V0dGluZ3MvS2V5bWFwcyc7XG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2V0dGluZ3MvU2VhcmNoJztcbmltcG9ydCBQcm9wZXJ0aWVzIGZyb20gJy4vc2V0dGluZ3MvUHJvcGVydGllcyc7XG5pbXBvcnQgQmxhY2tsaXN0IGZyb20gJy4vc2V0dGluZ3MvQmxhY2tsaXN0JztcblxuZXhwb3J0IGNsYXNzIEZvcm1LZXltYXBzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkYXRhOiB7W29wOiBzdHJpbmddOiBzdHJpbmd9O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoZGF0YToge1tvcDogc3RyaW5nXTogc3RyaW5nfSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gIH1cblxuICB0b0tleW1hcHMoKTogS2V5bWFwcyB7XG4gICAgY29uc3Qga2V5bWFwczogeyBba2V5OiBzdHJpbmddOiBvcGVyYXRpb25zLk9wZXJhdGlvbiB9ID0ge307XG4gICAgZm9yIChjb25zdCBuYW1lIG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YSkpIHtcbiAgICAgIGNvbnN0IFt0eXBlLCBhcmdTdHJdID0gbmFtZS5zcGxpdCgnPycpO1xuICAgICAgbGV0IGFyZ3MgPSB7fTtcbiAgICAgIGlmIChhcmdTdHIpIHtcbiAgICAgICAgYXJncyA9IEpTT04ucGFyc2UoYXJnU3RyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGtleSA9IHRoaXMuZGF0YVtuYW1lXTtcbiAgICAgIGtleW1hcHNba2V5XSA9IG9wZXJhdGlvbnMudmFsdWVPZih7IHR5cGUsIC4uLmFyZ3MgfSk7XG4gICAgfVxuICAgIHJldHVybiBLZXltYXBzLmZyb21KU09OKGtleW1hcHMpO1xuICB9XG5cbiAgdG9KU09OKCk6IHtbb3A6IHN0cmluZ106IHN0cmluZ30ge1xuICAgIHJldHVybiB0aGlzLmRhdGE7XG4gIH1cblxuICBidWlsZFdpdGhPdmVycmlkZShvcDogc3RyaW5nLCBrZXlzOiBzdHJpbmcpOiBGb3JtS2V5bWFwcyB7XG4gICAgY29uc3QgbmV3RGF0YSA9IHtcbiAgICAgIC4uLnRoaXMuZGF0YSxcbiAgICAgIFtvcF06IGtleXMsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEZvcm1LZXltYXBzKG5ld0RhdGEpO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKG86IFJldHVyblR5cGU8Rm9ybUtleW1hcHNbJ3RvSlNPTiddPik6IEZvcm1LZXltYXBzIHtcbiAgICBjb25zdCBkYXRhOiB7W29wOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZm9yIChjb25zdCBvcCBvZiBPYmplY3Qua2V5cyhvKSkge1xuICAgICAgZGF0YVtvcF0gPSBvW29wXSBhcyBzdHJpbmc7XG4gICAgfVxuICAgIHJldHVybiBuZXcgRm9ybUtleW1hcHMoZGF0YSk7XG4gIH1cblxuICBzdGF0aWMgZnJvbUtleW1hcHMoa2V5bWFwczogS2V5bWFwcyk6IEZvcm1LZXltYXBzIHtcbiAgICBjb25zdCBqc29uID0ga2V5bWFwcy50b0pTT04oKTtcbiAgICBjb25zdCBkYXRhOiB7W29wOiBzdHJpbmddOiBzdHJpbmd9ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoanNvbikpIHtcbiAgICAgIGNvbnN0IG9wID0ganNvbltrZXldO1xuICAgICAgY29uc3QgYXJncyA9IHsgLi4ub3AgfTtcbiAgICAgIGRlbGV0ZSBhcmdzLnR5cGU7XG5cbiAgICAgIGxldCBuYW1lID0gb3AudHlwZTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhcmdzKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIG5hbWUgKz0gJz8nICsgSlNPTi5zdHJpbmdpZnkoYXJncyk7XG4gICAgICB9XG4gICAgICBkYXRhW25hbWVdID0ga2V5O1xuICAgIH1cbiAgICByZXR1cm4gbmV3IEZvcm1LZXltYXBzKGRhdGEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGb3JtU2VhcmNoIHtcbiAgcHJpdmF0ZSByZWFkb25seSBkZWZhdWx0OiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBlbmdpbmVzOiBzdHJpbmdbXVtdO1xuXG4gIGNvbnN0cnVjdG9yKGRlZmF1bHRFbmdpbmU6IHN0cmluZywgZW5naW5lczogc3RyaW5nW11bXSkge1xuICAgIHRoaXMuZGVmYXVsdCA9IGRlZmF1bHRFbmdpbmU7XG4gICAgdGhpcy5lbmdpbmVzID0gZW5naW5lcztcbiAgfVxuXG4gIHRvU2VhcmNoU2V0dGluZ3MoKTogU2VhcmNoIHtcbiAgICBjb25zdCBlbmdpbmVzOiB7IFtuYW1lOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgZW50cnkgb2YgdGhpcy5lbmdpbmVzKSB7XG4gICAgICBlbmdpbmVzW2VudHJ5WzBdXSA9IGVudHJ5WzFdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFNlYXJjaCh0aGlzLmRlZmF1bHQsIGVuZ2luZXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IHtcbiAgICBkZWZhdWx0OiBzdHJpbmc7XG4gICAgZW5naW5lczogc3RyaW5nW11bXTtcbiAgICB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVmYXVsdDogdGhpcy5kZWZhdWx0LFxuICAgICAgZW5naW5lczogdGhpcy5lbmdpbmVzLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZnJvbUpTT04obzogUmV0dXJuVHlwZTxGb3JtU2VhcmNoWyd0b0pTT04nXT4pOiBGb3JtU2VhcmNoIHtcbiAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCAnZGVmYXVsdCcpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBcImRlZmF1bHRcIiBmaWVsZCBub3Qgc2V0YCk7XG4gICAgfVxuICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sICdlbmdpbmVzJykpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFwiZW5naW5lc1wiIGZpZWxkIG5vdCBzZXRgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBGb3JtU2VhcmNoKG8uZGVmYXVsdCwgby5lbmdpbmVzKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2VhcmNoKHNlYXJjaDogU2VhcmNoKTogRm9ybVNlYXJjaCB7XG4gICAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5lbnRyaWVzKHNlYXJjaC5lbmdpbmVzKS5yZWR1Y2UoXG4gICAgICAobzogc3RyaW5nW11bXSwgW25hbWUsIHVybF0pID0+IHtcbiAgICAgICAgcmV0dXJuIG8uY29uY2F0KFtbbmFtZSwgdXJsXV0pO1xuICAgICAgfSwgW10pO1xuICAgIHJldHVybiBuZXcgRm9ybVNlYXJjaChzZWFyY2guZGVmYXVsdEVuZ2luZSwgZW5naW5lcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpTT05UZXh0U2V0dGluZ3Mge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGpzb246IHN0cmluZyxcbiAgKSB7XG4gIH1cblxuICB0b1NldHRpbmdzKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4gU2V0dGluZ3MuZnJvbUpTT04oSlNPTi5wYXJzZSh0aGlzLmpzb24pKTtcbiAgfVxuXG4gIHRvSlNPTlRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5qc29uO1xuICB9XG5cbiAgc3RhdGljIGZyb21UZXh0KG86IHN0cmluZyk6IEpTT05UZXh0U2V0dGluZ3Mge1xuICAgIHJldHVybiBuZXcgSlNPTlRleHRTZXR0aW5ncyhvKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2V0dGluZ3MoZGF0YTogU2V0dGluZ3MpOiBKU09OVGV4dFNldHRpbmdzIHtcbiAgICBjb25zdCBqc29uID0ge1xuICAgICAga2V5bWFwczogZGF0YS5rZXltYXBzLnRvSlNPTigpLFxuICAgICAgc2VhcmNoOiBkYXRhLnNlYXJjaCxcbiAgICAgIHByb3BlcnRpZXM6IGRhdGEucHJvcGVydGllcyxcbiAgICAgIGJsYWNrbGlzdDogZGF0YS5ibGFja2xpc3QsXG4gICAgfTtcbiAgICByZXR1cm4gbmV3IEpTT05UZXh0U2V0dGluZ3MoSlNPTi5zdHJpbmdpZnkoanNvbiwgdW5kZWZpbmVkLCAyKSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEZvcm1TZXR0aW5ncyB7XG4gIHB1YmxpYyByZWFkb25seSBrZXltYXBzOiBGb3JtS2V5bWFwcztcblxuICBwdWJsaWMgcmVhZG9ubHkgc2VhcmNoOiBGb3JtU2VhcmNoO1xuXG4gIHB1YmxpYyByZWFkb25seSBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzO1xuXG4gIHB1YmxpYyByZWFkb25seSBibGFja2xpc3Q6IEJsYWNrbGlzdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBrZXltYXBzOiBGb3JtS2V5bWFwcyxcbiAgICBzZWFyY2g6IEZvcm1TZWFyY2gsXG4gICAgcHJvcGVydGllczogUHJvcGVydGllcyxcbiAgICBibGFja2xpc3Q6IEJsYWNrbGlzdCxcbiAgKSB7XG4gICAgdGhpcy5rZXltYXBzID0ga2V5bWFwcztcbiAgICB0aGlzLnNlYXJjaCA9IHNlYXJjaDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIHRoaXMuYmxhY2tsaXN0ID0gYmxhY2tsaXN0O1xuICB9XG5cbiAgYnVpbGRXaXRoS2V5bWFwcyhrZXltYXBzOiBGb3JtS2V5bWFwcyk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICBrZXltYXBzLFxuICAgICAgdGhpcy5zZWFyY2gsXG4gICAgICB0aGlzLnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmJsYWNrbGlzdCxcbiAgICApO1xuICB9XG5cbiAgYnVpbGRXaXRoU2VhcmNoKHNlYXJjaDogRm9ybVNlYXJjaCk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICB0aGlzLmtleW1hcHMsXG4gICAgICBzZWFyY2gsXG4gICAgICB0aGlzLnByb3BlcnRpZXMsXG4gICAgICB0aGlzLmJsYWNrbGlzdCxcbiAgICApO1xuICB9XG5cbiAgYnVpbGRXaXRoUHJvcGVydGllcyhwcm9wczogUHJvcGVydGllcyk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICB0aGlzLmtleW1hcHMsXG4gICAgICB0aGlzLnNlYXJjaCxcbiAgICAgIHByb3BzLFxuICAgICAgdGhpcy5ibGFja2xpc3QsXG4gICAgKTtcbiAgfVxuXG4gIGJ1aWxkV2l0aEJsYWNrbGlzdChibGFja2xpc3Q6IEJsYWNrbGlzdCk6IEZvcm1TZXR0aW5ncyB7XG4gICAgcmV0dXJuIG5ldyBGb3JtU2V0dGluZ3MoXG4gICAgICB0aGlzLmtleW1hcHMsXG4gICAgICB0aGlzLnNlYXJjaCxcbiAgICAgIHRoaXMucHJvcGVydGllcyxcbiAgICAgIGJsYWNrbGlzdCxcbiAgICApO1xuICB9XG5cbiAgdG9TZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIFNldHRpbmdzLmZyb21KU09OKHtcbiAgICAgIGtleW1hcHM6IHRoaXMua2V5bWFwcy50b0tleW1hcHMoKS50b0pTT04oKSxcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gudG9TZWFyY2hTZXR0aW5ncygpLnRvSlNPTigpLFxuICAgICAgcHJvcGVydGllczogdGhpcy5wcm9wZXJ0aWVzLnRvSlNPTigpLFxuICAgICAgYmxhY2tsaXN0OiB0aGlzLmJsYWNrbGlzdC50b0pTT04oKSxcbiAgICB9KTtcbiAgfVxuXG4gIHRvSlNPTigpOiB7XG4gICAga2V5bWFwczogUmV0dXJuVHlwZTxGb3JtS2V5bWFwc1sndG9KU09OJ10+O1xuICAgIHNlYXJjaDogUmV0dXJuVHlwZTxGb3JtU2VhcmNoWyd0b0pTT04nXT47XG4gICAgcHJvcGVydGllczogUmV0dXJuVHlwZTxQcm9wZXJ0aWVzWyd0b0pTT04nXT47XG4gICAgYmxhY2tsaXN0OiBSZXR1cm5UeXBlPEJsYWNrbGlzdFsndG9KU09OJ10+O1xuICAgIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBrZXltYXBzOiB0aGlzLmtleW1hcHMudG9KU09OKCksXG4gICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLnRvSlNPTigpLFxuICAgICAgcHJvcGVydGllczogdGhpcy5wcm9wZXJ0aWVzLnRvSlNPTigpLFxuICAgICAgYmxhY2tsaXN0OiB0aGlzLmJsYWNrbGlzdC50b0pTT04oKSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKG86IFJldHVyblR5cGU8Rm9ybVNldHRpbmdzWyd0b0pTT04nXT4pOiBGb3JtU2V0dGluZ3Mge1xuICAgIGZvciAoY29uc3QgbmFtZSBvZiBbJ2tleW1hcHMnLCAnc2VhcmNoJywgJ3Byb3BlcnRpZXMnLCAnYmxhY2tsaXN0J10pIHtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgXCIke25hbWV9XCIgZmllbGQgbm90IHNldGApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IEZvcm1TZXR0aW5ncyhcbiAgICAgIEZvcm1LZXltYXBzLmZyb21KU09OKG8ua2V5bWFwcyksXG4gICAgICBGb3JtU2VhcmNoLmZyb21KU09OKG8uc2VhcmNoKSxcbiAgICAgIFByb3BlcnRpZXMuZnJvbUpTT04oby5wcm9wZXJ0aWVzKSxcbiAgICAgIEJsYWNrbGlzdC5mcm9tSlNPTihvLmJsYWNrbGlzdCksXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU2V0dGluZ3MoZGF0YTogU2V0dGluZ3MpOiBGb3JtU2V0dGluZ3Mge1xuICAgIHJldHVybiBuZXcgRm9ybVNldHRpbmdzKFxuICAgICAgRm9ybUtleW1hcHMuZnJvbUtleW1hcHMoZGF0YS5rZXltYXBzKSxcbiAgICAgIEZvcm1TZWFyY2guZnJvbVNlYXJjaChkYXRhLnNlYXJjaCksXG4gICAgICBkYXRhLnByb3BlcnRpZXMsXG4gICAgICBkYXRhLmJsYWNrbGlzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gU2V0dGluZ1NvdXJjZSB7XG4gIEpTT04gPSAnanNvbicsXG4gIEZvcm0gPSAnZm9ybScsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdEYXRhIHtcbiAgcHJpdmF0ZSBzb3VyY2U6IFNldHRpbmdTb3VyY2U7XG5cbiAgcHJpdmF0ZSBqc29uPzogSlNPTlRleHRTZXR0aW5ncztcblxuICBwcml2YXRlIGZvcm0/OiBGb3JtU2V0dGluZ3M7XG5cbiAgY29uc3RydWN0b3Ioe1xuICAgIHNvdXJjZSwganNvbiwgZm9ybVxuICB9OiB7XG4gICAgc291cmNlOiBTZXR0aW5nU291cmNlLFxuICAgIGpzb24/OiBKU09OVGV4dFNldHRpbmdzLFxuICAgIGZvcm0/OiBGb3JtU2V0dGluZ3MsXG4gIH0pIHtcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcbiAgICB0aGlzLmpzb24gPSBqc29uO1xuICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gIH1cblxuICBnZXRTb3VyY2UoKTogU2V0dGluZ1NvdXJjZSB7XG4gICAgcmV0dXJuIHRoaXMuc291cmNlO1xuICB9XG5cbiAgZ2V0SlNPTigpOiBKU09OVGV4dFNldHRpbmdzIHtcbiAgICBpZiAoIXRoaXMuanNvbikge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignanNvbiBzZXR0aW5ncyBub3Qgc2V0Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmpzb247XG4gIH1cblxuICBnZXRGb3JtKCk6IEZvcm1TZXR0aW5ncyB7XG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Zvcm0gc2V0dGluZ3Mgbm90IHNldCcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mb3JtO1xuICB9XG5cbiAgdG9KU09OKCk6IGFueSB7XG4gICAgc3dpdGNoICh0aGlzLnNvdXJjZSkge1xuICAgIGNhc2UgU2V0dGluZ1NvdXJjZS5KU09OOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAganNvbjogKHRoaXMuanNvbiBhcyBKU09OVGV4dFNldHRpbmdzKS50b0pTT05UZXh0KCksXG4gICAgICB9O1xuICAgIGNhc2UgU2V0dGluZ1NvdXJjZS5Gb3JtOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgICAgZm9ybTogKHRoaXMuZm9ybSBhcyBGb3JtU2V0dGluZ3MpLnRvSlNPTigpLFxuICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGB1bmtub3duIHNldHRpbmdzIHNvdXJjZTogJHt0aGlzLnNvdXJjZX1gKTtcbiAgfVxuXG4gIHRvU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHN3aXRjaCAodGhpcy5zb3VyY2UpIHtcbiAgICBjYXNlIFNldHRpbmdTb3VyY2UuSlNPTjpcbiAgICAgIHJldHVybiB0aGlzLmdldEpTT04oKS50b1NldHRpbmdzKCk7XG4gICAgY2FzZSBTZXR0aW5nU291cmNlLkZvcm06XG4gICAgICByZXR1cm4gdGhpcy5nZXRGb3JtKCkudG9TZXR0aW5ncygpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gc2V0dGluZ3Mgc291cmNlOiAke3RoaXMuc291cmNlfWApO1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKG86IHtcbiAgICBzb3VyY2U6IHN0cmluZztcbiAgICBqc29uPzogc3RyaW5nO1xuICAgIGZvcm0/OiBSZXR1cm5UeXBlPEZvcm1TZXR0aW5nc1sndG9KU09OJ10+O1xuICB9KTogU2V0dGluZ0RhdGEge1xuICAgIHN3aXRjaCAoby5zb3VyY2UpIHtcbiAgICBjYXNlIFNldHRpbmdTb3VyY2UuSlNPTjpcbiAgICAgIHJldHVybiBuZXcgU2V0dGluZ0RhdGEoe1xuICAgICAgICBzb3VyY2U6IG8uc291cmNlLFxuICAgICAgICBqc29uOiBKU09OVGV4dFNldHRpbmdzLmZyb21UZXh0KFxuICAgICAgICAgIG8uanNvbiBhcyBSZXR1cm5UeXBlPEpTT05UZXh0U2V0dGluZ3NbJ3RvSlNPTlRleHQnXT4pLFxuICAgICAgfSk7XG4gICAgY2FzZSBTZXR0aW5nU291cmNlLkZvcm06XG4gICAgICByZXR1cm4gbmV3IFNldHRpbmdEYXRhKHtcbiAgICAgICAgc291cmNlOiBvLnNvdXJjZSxcbiAgICAgICAgZm9ybTogRm9ybVNldHRpbmdzLmZyb21KU09OKFxuICAgICAgICAgIG8uZm9ybSBhcyBSZXR1cm5UeXBlPEZvcm1TZXR0aW5nc1sndG9KU09OJ10+KSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYHVua25vd24gc2V0dGluZ3Mgc291cmNlOiAke28uc291cmNlfWApO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBEZWZhdWx0U2V0dGluZ0RhdGE6IFNldHRpbmdEYXRhID0gU2V0dGluZ0RhdGEuZnJvbUpTT04oe1xuICBzb3VyY2U6ICdqc29uJyxcbiAganNvbjogRGVmYXVsdFNldHRpbmdKU09OVGV4dCxcbn0pO1xuIiwiaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuLi9vcGVyYXRpb25zJztcblxudHlwZSBPcGVyYXRpb25Kc29uID0ge1xuICB0eXBlOiBzdHJpbmdcbn0gfCB7XG4gIHR5cGU6IHN0cmluZztcbiAgW3Byb3A6IHN0cmluZ106IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG59O1xuZXhwb3J0IHR5cGUgS2V5bWFwc0pTT04gPSB7IFtrZXk6IHN0cmluZ106IE9wZXJhdGlvbkpzb24gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5bWFwcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZGF0YTogeyBba2V5OiBzdHJpbmddOiBvcGVyYXRpb25zLk9wZXJhdGlvbiB9LFxuICApIHtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiBLZXltYXBzSlNPTik6IEtleW1hcHMge1xuICAgIGNvbnN0IGVudHJpZXM6IHsgW2tleTogc3RyaW5nXTogb3BlcmF0aW9ucy5PcGVyYXRpb24gfSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGpzb24pKSB7XG4gICAgICBlbnRyaWVzW2tleV0gPSBvcGVyYXRpb25zLnZhbHVlT2YoanNvbltrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBLZXltYXBzKGVudHJpZXMpO1xuICB9XG5cbiAgY29tYmluZShvdGhlcjogS2V5bWFwcyk6IEtleW1hcHMge1xuICAgIHJldHVybiBuZXcgS2V5bWFwcyh7XG4gICAgICAuLi50aGlzLmRhdGEsXG4gICAgICAuLi5vdGhlci5kYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgdG9KU09OKCk6IEtleW1hcHNKU09OIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhO1xuICB9XG5cbiAgZW50cmllcygpOiBbc3RyaW5nLCBvcGVyYXRpb25zLk9wZXJhdGlvbl1bXSB7XG4gICAgcmV0dXJuIE9iamVjdC5lbnRyaWVzKHRoaXMuZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCBBanYgZnJvbSAnYWp2JztcblxuaW1wb3J0IEtleW1hcHMsIHsgS2V5bWFwc0pTT04gfSBmcm9tICcuL0tleW1hcHMnO1xuaW1wb3J0IFNlYXJjaCwgeyBTZWFyY2hKU09OIH0gZnJvbSAnLi9TZWFyY2gnO1xuaW1wb3J0IFByb3BlcnRpZXMsIHsgUHJvcGVydGllc0pTT04gfSBmcm9tICcuL1Byb3BlcnRpZXMnO1xuaW1wb3J0IEJsYWNrbGlzdCwgeyBCbGFja2xpc3RKU09OIH0gZnJvbSAnLi9CbGFja2xpc3QnO1xuaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUnO1xuXG5leHBvcnQgdHlwZSBTZXR0aW5nc0pTT04gPSB7XG4gIGtleW1hcHM/OiBLZXltYXBzSlNPTixcbiAgc2VhcmNoPzogU2VhcmNoSlNPTixcbiAgcHJvcGVydGllcz86IFByb3BlcnRpZXNKU09OLFxuICBibGFja2xpc3Q/OiBCbGFja2xpc3RKU09OLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ3Mge1xuICBwdWJsaWMga2V5bWFwczogS2V5bWFwcztcblxuICBwdWJsaWMgc2VhcmNoOiBTZWFyY2g7XG5cbiAgcHVibGljIHByb3BlcnRpZXM6IFByb3BlcnRpZXM7XG5cbiAgcHVibGljIGJsYWNrbGlzdDogQmxhY2tsaXN0O1xuXG4gIGNvbnN0cnVjdG9yKHtcbiAgICBrZXltYXBzLFxuICAgIHNlYXJjaCxcbiAgICBwcm9wZXJ0aWVzLFxuICAgIGJsYWNrbGlzdCxcbiAgfToge1xuICAgIGtleW1hcHM6IEtleW1hcHM7XG4gICAgc2VhcmNoOiBTZWFyY2g7XG4gICAgcHJvcGVydGllczogUHJvcGVydGllcztcbiAgICBibGFja2xpc3Q6IEJsYWNrbGlzdDtcbiAgfSkge1xuICAgIHRoaXMua2V5bWFwcyA9IGtleW1hcHM7XG4gICAgdGhpcy5zZWFyY2ggPSBzZWFyY2g7XG4gICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB0aGlzLmJsYWNrbGlzdCA9IGJsYWNrbGlzdDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSlNPTihqc29uOiB1bmtub3duKTogU2V0dGluZ3Mge1xuICAgIGNvbnN0IHZhbGlkID0gdmFsaWRhdGUoanNvbik7XG4gICAgaWYgKCF2YWxpZCkge1xuICAgICAgY29uc3QgbWVzc2FnZSA9ICh2YWxpZGF0ZSBhcyBhbnkpLmVycm9ycyEhXG4gICAgICAgIC5tYXAoKGVycjogQWp2LkVycm9yT2JqZWN0KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIGAnJHtlcnIuZGF0YVBhdGh9JyAke2Vyci5tZXNzYWdlfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCc7ICcpO1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb25zdCBvYmogPSBqc29uIGFzIFNldHRpbmdzSlNPTjtcbiAgICBjb25zdCBzZXR0aW5ncyA9IHsgLi4uRGVmYXVsdFNldHRpbmcgfTtcbiAgICBpZiAob2JqLmtleW1hcHMpIHtcbiAgICAgIHNldHRpbmdzLmtleW1hcHMgPSBLZXltYXBzLmZyb21KU09OKG9iai5rZXltYXBzKTtcbiAgICB9XG4gICAgaWYgKG9iai5zZWFyY2gpIHtcbiAgICAgIHNldHRpbmdzLnNlYXJjaCA9IFNlYXJjaC5mcm9tSlNPTihvYmouc2VhcmNoKTtcbiAgICB9XG4gICAgaWYgKG9iai5wcm9wZXJ0aWVzKSB7XG4gICAgICBzZXR0aW5ncy5wcm9wZXJ0aWVzID0gUHJvcGVydGllcy5mcm9tSlNPTihvYmoucHJvcGVydGllcyk7XG4gICAgfVxuICAgIGlmIChvYmouYmxhY2tsaXN0KSB7XG4gICAgICBzZXR0aW5ncy5ibGFja2xpc3QgPSBCbGFja2xpc3QuZnJvbUpTT04ob2JqLmJsYWNrbGlzdCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgU2V0dGluZ3Moc2V0dGluZ3MpO1xuICB9XG5cbiAgdG9KU09OKCk6IFNldHRpbmdzSlNPTiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleW1hcHM6IHRoaXMua2V5bWFwcy50b0pTT04oKSxcbiAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gudG9KU09OKCksXG4gICAgICBwcm9wZXJ0aWVzOiB0aGlzLnByb3BlcnRpZXMudG9KU09OKCksXG4gICAgICBibGFja2xpc3Q6IHRoaXMuYmxhY2tsaXN0LnRvSlNPTigpLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXR0aW5nSlNPTlRleHQgPSBge1xuICBcImtleW1hcHNcIjoge1xuICAgIFwiMFwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5ob21lXCIgfSxcbiAgICBcIjpcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3dcIiB9LFxuICAgIFwib1wiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5vcGVuXCIsIFwiYWx0ZXJcIjogZmFsc2UgfSxcbiAgICBcIk9cIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cub3BlblwiLCBcImFsdGVyXCI6IHRydWUgfSxcbiAgICBcInRcIjogeyBcInR5cGVcIjogXCJjb21tYW5kLnNob3cudGFib3BlblwiLCBcImFsdGVyXCI6IGZhbHNlIH0sXG4gICAgXCJUXCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93LnRhYm9wZW5cIiwgXCJhbHRlclwiOiB0cnVlIH0sXG4gICAgXCJ3XCI6IHsgXCJ0eXBlXCI6IFwiY29tbWFuZC5zaG93Lndpbm9wZW5cIiwgXCJhbHRlclwiOiBmYWxzZSB9LFxuICAgIFwiV1wiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy53aW5vcGVuXCIsIFwiYWx0ZXJcIjogdHJ1ZSB9LFxuICAgIFwiYlwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5idWZmZXJcIiB9LFxuICAgIFwiYVwiOiB7IFwidHlwZVwiOiBcImNvbW1hbmQuc2hvdy5hZGRib29rbWFya1wiLCBcImFsdGVyXCI6IHRydWUgfSxcbiAgICBcImtcIjogeyBcInR5cGVcIjogXCJzY3JvbGwudmVydGljYWxseVwiLCBcImNvdW50XCI6IC0xIH0sXG4gICAgXCJqXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnZlcnRpY2FsbHlcIiwgXCJjb3VudFwiOiAxIH0sXG4gICAgXCJoXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmhvcml6b25hbGx5XCIsIFwiY291bnRcIjogLTEgfSxcbiAgICBcImxcIjogeyBcInR5cGVcIjogXCJzY3JvbGwuaG9yaXpvbmFsbHlcIiwgXCJjb3VudFwiOiAxIH0sXG4gICAgXCI8Qy1VPlwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5wYWdlc1wiLCBcImNvdW50XCI6IC0wLjUgfSxcbiAgICBcIjxDLUQ+XCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnBhZ2VzXCIsIFwiY291bnRcIjogMC41IH0sXG4gICAgXCI8Qy1CPlwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5wYWdlc1wiLCBcImNvdW50XCI6IC0xIH0sXG4gICAgXCI8Qy1GPlwiOiB7IFwidHlwZVwiOiBcInNjcm9sbC5wYWdlc1wiLCBcImNvdW50XCI6IDEgfSxcbiAgICBcImdnXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLnRvcFwiIH0sXG4gICAgXCJHXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmJvdHRvbVwiIH0sXG4gICAgXCIkXCI6IHsgXCJ0eXBlXCI6IFwic2Nyb2xsLmVuZFwiIH0sXG4gICAgXCJkXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5jbG9zZVwiIH0sXG4gICAgXCJEXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5jbG9zZVwiLCBcInNlbGVjdFwiOiBcImxlZnRcIiB9LFxuICAgIFwieCRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmNsb3NlLnJpZ2h0XCIgfSxcbiAgICBcIiFkXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5jbG9zZS5mb3JjZVwiIH0sXG4gICAgXCJ1XCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZW9wZW5cIiB9LFxuICAgIFwiS1wiOiB7IFwidHlwZVwiOiBcInRhYnMucHJldlwiIH0sXG4gICAgXCJKXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5uZXh0XCIgfSxcbiAgICBcImdUXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5wcmV2XCIgfSxcbiAgICBcImd0XCI6IHsgXCJ0eXBlXCI6IFwidGFicy5uZXh0XCIgfSxcbiAgICBcImcwXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5maXJzdFwiIH0sXG4gICAgXCJnJFwiOiB7IFwidHlwZVwiOiBcInRhYnMubGFzdFwiIH0sXG4gICAgXCI8Qy02PlwiOiB7IFwidHlwZVwiOiBcInRhYnMucHJldnNlbFwiIH0sXG4gICAgXCJyXCI6IHsgXCJ0eXBlXCI6IFwidGFicy5yZWxvYWRcIiwgXCJjYWNoZVwiOiBmYWxzZSB9LFxuICAgIFwiUlwiOiB7IFwidHlwZVwiOiBcInRhYnMucmVsb2FkXCIsIFwiY2FjaGVcIjogdHJ1ZSB9LFxuICAgIFwienBcIjogeyBcInR5cGVcIjogXCJ0YWJzLnBpbi50b2dnbGVcIiB9LFxuICAgIFwiemRcIjogeyBcInR5cGVcIjogXCJ0YWJzLmR1cGxpY2F0ZVwiIH0sXG4gICAgXCJ6aVwiOiB7IFwidHlwZVwiOiBcInpvb20uaW5cIiB9LFxuICAgIFwiem9cIjogeyBcInR5cGVcIjogXCJ6b29tLm91dFwiIH0sXG4gICAgXCJ6elwiOiB7IFwidHlwZVwiOiBcInpvb20ubmV1dHJhbFwiIH0sXG4gICAgXCJmXCI6IHsgXCJ0eXBlXCI6IFwiZm9sbG93LnN0YXJ0XCIsIFwibmV3VGFiXCI6IGZhbHNlIH0sXG4gICAgXCJGXCI6IHsgXCJ0eXBlXCI6IFwiZm9sbG93LnN0YXJ0XCIsIFwibmV3VGFiXCI6IHRydWUsIFwiYmFja2dyb3VuZFwiOiBmYWxzZSB9LFxuICAgIFwibVwiOiB7IFwidHlwZVwiOiBcIm1hcmsuc2V0LnByZWZpeFwiIH0sXG4gICAgXCInXCI6IHsgXCJ0eXBlXCI6IFwibWFyay5qdW1wLnByZWZpeFwiIH0sXG4gICAgXCJIXCI6IHsgXCJ0eXBlXCI6IFwibmF2aWdhdGUuaGlzdG9yeS5wcmV2XCIgfSxcbiAgICBcIkxcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5oaXN0b3J5Lm5leHRcIiB9LFxuICAgIFwiW1tcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5saW5rLnByZXZcIiB9LFxuICAgIFwiXV1cIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5saW5rLm5leHRcIiB9LFxuICAgIFwiZ3VcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5wYXJlbnRcIiB9LFxuICAgIFwiZ1VcIjogeyBcInR5cGVcIjogXCJuYXZpZ2F0ZS5yb290XCIgfSxcbiAgICBcImdpXCI6IHsgXCJ0eXBlXCI6IFwiZm9jdXMuaW5wdXRcIiB9LFxuICAgIFwiZ2ZcIjogeyBcInR5cGVcIjogXCJwYWdlLnNvdXJjZVwiIH0sXG4gICAgXCJnaFwiOiB7IFwidHlwZVwiOiBcInBhZ2UuaG9tZVwiIH0sXG4gICAgXCJnSFwiOiB7IFwidHlwZVwiOiBcInBhZ2UuaG9tZVwiLCBcIm5ld1RhYlwiOiB0cnVlIH0sXG4gICAgXCJ5XCI6IHsgXCJ0eXBlXCI6IFwidXJscy55YW5rXCIgfSxcbiAgICBcInBcIjogeyBcInR5cGVcIjogXCJ1cmxzLnBhc3RlXCIsIFwibmV3VGFiXCI6IGZhbHNlIH0sXG4gICAgXCJQXCI6IHsgXCJ0eXBlXCI6IFwidXJscy5wYXN0ZVwiLCBcIm5ld1RhYlwiOiB0cnVlIH0sXG4gICAgXCIvXCI6IHsgXCJ0eXBlXCI6IFwiZmluZC5zdGFydFwiIH0sXG4gICAgXCJuXCI6IHsgXCJ0eXBlXCI6IFwiZmluZC5uZXh0XCIgfSxcbiAgICBcIk5cIjogeyBcInR5cGVcIjogXCJmaW5kLnByZXZcIiB9LFxuICAgIFwiLlwiOiB7IFwidHlwZVwiOiBcInJlcGVhdC5sYXN0XCIgfSxcbiAgICBcIjxTLUVzYz5cIjogeyBcInR5cGVcIjogXCJhZGRvbi50b2dnbGUuZW5hYmxlZFwiIH1cbiAgfSxcbiAgXCJzZWFyY2hcIjoge1xuICAgIFwiZGVmYXVsdFwiOiBcImdvb2dsZVwiLFxuICAgIFwiZW5naW5lc1wiOiB7XG4gICAgICBcImdvb2dsZVwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9zZWFyY2g/cT17fVwiLFxuICAgICAgXCJ5YWhvb1wiOiBcImh0dHBzOi8vc2VhcmNoLnlhaG9vLmNvbS9zZWFyY2g/cD17fVwiLFxuICAgICAgXCJiaW5nXCI6IFwiaHR0cHM6Ly93d3cuYmluZy5jb20vc2VhcmNoP3E9e31cIixcbiAgICAgIFwiZHVja2R1Y2tnb1wiOiBcImh0dHBzOi8vZHVja2R1Y2tnby5jb20vP3E9e31cIixcbiAgICAgIFwidHdpdHRlclwiOiBcImh0dHBzOi8vdHdpdHRlci5jb20vc2VhcmNoP3E9e31cIixcbiAgICAgIFwid2lraXBlZGlhXCI6IFwiaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3cvaW5kZXgucGhwP3NlYXJjaD17fVwiXG4gICAgfVxuICB9LFxuICBcInByb3BlcnRpZXNcIjoge1xuICAgIFwiaGludGNoYXJzXCI6IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixcbiAgICBcInNtb290aHNjcm9sbFwiOiBmYWxzZSxcbiAgICBcImNvbXBsZXRlXCI6IFwic2JoXCJcbiAgfSxcbiAgXCJibGFja2xpc3RcIjogW1xuICBdXG59YDtcblxuZXhwb3J0IGNvbnN0IERlZmF1bHRTZXR0aW5nOiBTZXR0aW5ncyA9XG4gIFNldHRpbmdzLmZyb21KU09OKEpTT04ucGFyc2UoRGVmYXVsdFNldHRpbmdKU09OVGV4dCkpO1xuIiwiY29uc3QgZGlnaXRzID0gWycwJywgJzEnLCAnMicsICczJywgJzQnLCAnNScsICc2JywgJzcnLCAnOCcsICc5J107XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEtleSB7XG4gIHB1YmxpYyByZWFkb25seSBrZXk6IHN0cmluZztcblxuICBwdWJsaWMgcmVhZG9ubHkgc2hpZnQ6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlYWRvbmx5IGN0cmw6IGJvb2xlYW47XG5cbiAgcHVibGljIHJlYWRvbmx5IGFsdDogYm9vbGVhbjtcblxuICBwdWJsaWMgcmVhZG9ubHkgbWV0YTogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcih7XG4gICAga2V5LFxuICAgIHNoaWZ0ID0gZmFsc2UsXG4gICAgY3RybCA9IGZhbHNlLFxuICAgIGFsdCA9IGZhbHNlLFxuICAgIG1ldGEgPSBmYWxzZSxcbiAgfToge1xuICAgIGtleTogc3RyaW5nO1xuICAgIHNoaWZ0PzogYm9vbGVhbjtcbiAgICBjdHJsPzogYm9vbGVhbjtcbiAgICBhbHQ/OiBib29sZWFuO1xuICAgIG1ldGE/OiBib29sZWFuO1xuICB9KSB7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zaGlmdCA9IHNoaWZ0O1xuICAgIHRoaXMuY3RybCA9IGN0cmw7XG4gICAgdGhpcy5hbHQgPSBhbHQ7XG4gICAgdGhpcy5tZXRhID0gbWV0YTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFwS2V5KHN0cjogc3RyaW5nKTogS2V5IHtcbiAgICBpZiAoc3RyLnN0YXJ0c1dpdGgoJzwnKSAmJiBzdHIuZW5kc1dpdGgoJz4nKSkge1xuICAgICAgY29uc3QgaW5uZXIgPSBzdHIuc2xpY2UoMSwgLTEpO1xuICAgICAgY29uc3Qgc2hpZnQgPSBpbm5lci5pbmNsdWRlcygnUy0nKTtcbiAgICAgIGxldCBiYXNlID0gaW5uZXIuc2xpY2UoaW5uZXIubGFzdEluZGV4T2YoJy0nKSArIDEpO1xuICAgICAgaWYgKHNoaWZ0ICYmIGJhc2UubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGJhc2UgPSBiYXNlLnRvVXBwZXJDYXNlKCk7XG4gICAgICB9IGVsc2UgaWYgKCFzaGlmdCAmJiBiYXNlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBiYXNlID0gYmFzZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBLZXkoe1xuICAgICAgICBrZXk6IGJhc2UsXG4gICAgICAgIHNoaWZ0OiBzaGlmdCxcbiAgICAgICAgY3RybDogaW5uZXIuaW5jbHVkZXMoJ0MtJyksXG4gICAgICAgIGFsdDogaW5uZXIuaW5jbHVkZXMoJ0EtJyksXG4gICAgICAgIG1ldGE6IGlubmVyLmluY2x1ZGVzKCdNLScpLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBLZXkoe1xuICAgICAga2V5OiBzdHIsXG4gICAgICBzaGlmdDogc3RyLnRvTG93ZXJDYXNlKCkgIT09IHN0cixcbiAgICAgIGN0cmw6IGZhbHNlLFxuICAgICAgYWx0OiBmYWxzZSxcbiAgICAgIG1ldGE6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNEaWdpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gZGlnaXRzLmluY2x1ZGVzKHRoaXMua2V5KTtcbiAgfVxuXG4gIGVxdWFscyhrZXk6IEtleSkge1xuICAgIHJldHVybiB0aGlzLmtleSA9PT0ga2V5LmtleSAmJlxuICAgICAgdGhpcy5jdHJsID09PSBrZXkuY3RybCAmJlxuICAgICAgdGhpcy5tZXRhID09PSBrZXkubWV0YSAmJlxuICAgICAgdGhpcy5hbHQgPT09IGtleS5hbHQgJiZcbiAgICAgIHRoaXMuc2hpZnQgPT09IGtleS5zaGlmdDtcbiAgfVxufVxuIiwidHlwZSBFbnRyaWVzID0geyBbbmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG5cbmV4cG9ydCB0eXBlIFNlYXJjaEpTT04gPSB7XG4gIGRlZmF1bHQ6IHN0cmluZztcbiAgZW5naW5lczogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkZWZhdWx0RW5naW5lOiBzdHJpbmcsXG4gICAgcHVibGljIGVuZ2luZXM6IEVudHJpZXMsXG4gICkge1xuICB9XG5cbiAgc3RhdGljIGZyb21KU09OKGpzb246IFNlYXJjaEpTT04pOiBTZWFyY2gge1xuICAgIGZvciAoY29uc3QgW25hbWUsIHVybF0gb2YgT2JqZWN0LmVudHJpZXMoanNvbi5lbmdpbmVzKSkge1xuICAgICAgaWYgKCEoL15bYS16QS1aMC05XSskLykudGVzdChuYW1lKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdTZWFyY2ggZW5naW5lXFwncyBuYW1lIG11c3QgYmUgW2EtekEtWjAtOV0rJyk7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaGVzID0gdXJsLm1hdGNoKC97fS9nKTtcbiAgICAgIGlmIChtYXRjaGVzID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE5vIHt9LXBsYWNlaG9sZGVycyBpbiBVUkwgb2YgXCIke25hbWV9XCJgKTtcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYE11bHRpcGxlIHt9LXBsYWNlaG9sZGVycyBpbiBVUkwgb2YgXCIke25hbWV9XCJgKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFPYmplY3Qua2V5cyhqc29uLmVuZ2luZXMpLmluY2x1ZGVzKGpzb24uZGVmYXVsdCkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYERlZmF1bHQgZW5naW5lIFwiJHtqc29uLmRlZmF1bHR9XCIgbm90IGZvdW5kYCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTZWFyY2goanNvbi5kZWZhdWx0LCBqc29uLmVuZ2luZXMpO1xuICB9XG5cbiAgdG9KU09OKCk6IFNlYXJjaEpTT04ge1xuICAgIHJldHVybiB7XG4gICAgICBkZWZhdWx0OiB0aGlzLmRlZmF1bHRFbmdpbmUsXG4gICAgICBlbmdpbmVzOiB0aGlzLmVuZ2luZXMsXG4gICAgfTtcbiAgfVxufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHZhbGlkYXRlID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgcGF0dGVybjAgPSBuZXcgUmVnRXhwKCcuKicpO1xuICB2YXIgcmVmVmFsID0gW107XG4gIHJldHVybiBmdW5jdGlvbiB2YWxpZGF0ZShkYXRhLCBkYXRhUGF0aCwgcGFyZW50RGF0YSwgcGFyZW50RGF0YVByb3BlcnR5LCByb290RGF0YSkge1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgdkVycm9ycyA9IG51bGw7XG4gICAgdmFyIGVycm9ycyA9IDA7XG4gICAgaWYgKChkYXRhICYmIHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEpKSkge1xuICAgICAgdmFyIGVycnNfXzAgPSBlcnJvcnM7XG4gICAgICB2YXIgdmFsaWQxID0gdHJ1ZTtcbiAgICAgIGZvciAodmFyIGtleTAgaW4gZGF0YSkge1xuICAgICAgICB2YXIgaXNBZGRpdGlvbmFsMCA9ICEoZmFsc2UgfHwga2V5MCA9PSAna2V5bWFwcycgfHwga2V5MCA9PSAnc2VhcmNoJyB8fCBrZXkwID09ICdwcm9wZXJ0aWVzJyB8fCBrZXkwID09ICdibGFja2xpc3QnKTtcbiAgICAgICAgaWYgKGlzQWRkaXRpb25hbDApIHtcbiAgICAgICAgICB2YWxpZDEgPSBmYWxzZTtcbiAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAga2V5d29yZDogJ2FkZGl0aW9uYWxQcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgXCJcIixcbiAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL2FkZGl0aW9uYWxQcm9wZXJ0aWVzJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBhZGRpdGlvbmFsUHJvcGVydHk6ICcnICsga2V5MCArICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBOT1QgaGF2ZSBhZGRpdGlvbmFsIHByb3BlcnRpZXMnXG4gICAgICAgICAgfV07XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFsaWQxKSB7XG4gICAgICAgIHZhciBkYXRhMSA9IGRhdGEua2V5bWFwcztcbiAgICAgICAgaWYgKGRhdGExID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB2YWxpZDEgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhciBlcnJzXzEgPSBlcnJvcnM7XG4gICAgICAgICAgaWYgKChkYXRhMSAmJiB0eXBlb2YgZGF0YTEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTEpKSkge1xuICAgICAgICAgICAgdmFyIGVycnNfXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICB2YXIgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGtleTEgaW4gZGF0YTEpIHtcbiAgICAgICAgICAgICAgaWYgKHBhdHRlcm4wLnRlc3Qoa2V5MSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YTIgPSBkYXRhMVtrZXkxXTtcbiAgICAgICAgICAgICAgICB2YXIgZXJyc18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgIGlmICgoZGF0YTIgJiYgdHlwZW9mIGRhdGEyID09PSBcIm9iamVjdFwiICYmICFBcnJheS5pc0FycmF5KGRhdGEyKSkpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEyLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkMyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmtleW1hcHNbXFwnJyArIGtleTEgKyAnXFwnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2tleW1hcHMvcGF0dGVyblByb3BlcnRpZXMvLiovcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0eTogJ3R5cGUnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5IFxcJ3R5cGVcXCcnXG4gICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhMi50eXBlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5rZXltYXBzW1xcJycgKyBrZXkxICsgJ1xcJ10udHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMva2V5bWFwcy9wYXR0ZXJuUHJvcGVydGllcy8uKi9wcm9wZXJ0aWVzL3R5cGUvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSBlcnJvcnMgPT09IGVycnNfMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5rZXltYXBzW1xcJycgKyBrZXkxICsgJ1xcJ10nLFxuICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2tleW1hcHMvcGF0dGVyblByb3BlcnRpZXMvLiovdHlwZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMikgYnJlYWs7XG4gICAgICAgICAgICAgIH0gZWxzZSB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5rZXltYXBzJyxcbiAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9rZXltYXBzL3R5cGUnLFxuICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB2YXIgdmFsaWQxID0gZXJyb3JzID09PSBlcnJzXzE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbGlkMSkge1xuICAgICAgICAgIHZhciBkYXRhMSA9IGRhdGEuc2VhcmNoO1xuICAgICAgICAgIGlmIChkYXRhMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB2YWxpZDEgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZXJyc18xID0gZXJyb3JzO1xuICAgICAgICAgICAgaWYgKChkYXRhMSAmJiB0eXBlb2YgZGF0YTEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTEpKSkge1xuICAgICAgICAgICAgICBpZiAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJzX18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhMS5kZWZhdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaCcsXG4gICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvc2VhcmNoL3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1Byb3BlcnR5OiAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBoYXZlIHJlcXVpcmVkIHByb3BlcnR5IFxcJ2RlZmF1bHRcXCcnXG4gICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTEuZGVmYXVsdCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoLmRlZmF1bHQnLFxuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvc2VhcmNoL3Byb3BlcnRpZXMvZGVmYXVsdC90eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkMikge1xuICAgICAgICAgICAgICAgICAgdmFyIGRhdGEyID0gZGF0YTEuZW5naW5lcztcbiAgICAgICAgICAgICAgICAgIGlmIChkYXRhMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1Byb3BlcnR5OiAnZW5naW5lcydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSBcXCdlbmdpbmVzXFwnJ1xuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgaWYgKChkYXRhMiAmJiB0eXBlb2YgZGF0YTIgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGtleTIgaW4gZGF0YTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXR0ZXJuMC50ZXN0KGtleTIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTJba2V5Ml0gIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnNlYXJjaC5lbmdpbmVzW1xcJycgKyBrZXkyICsgJ1xcJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcHJvcGVydGllcy9lbmdpbmVzL3BhdHRlcm5Qcm9wZXJ0aWVzLy4qL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSBlcnJvcnMgPT09IGVycnNfMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZDMpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHZhbGlkMyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuc2VhcmNoLmVuZ2luZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9zZWFyY2gvcHJvcGVydGllcy9lbmdpbmVzL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5zZWFyY2gnLFxuICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvc2VhcmNoL3R5cGUnLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ29iamVjdCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbGlkMSA9IGVycm9ycyA9PT0gZXJyc18xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodmFsaWQxKSB7XG4gICAgICAgICAgICB2YXIgZGF0YTEgPSBkYXRhLnByb3BlcnRpZXM7XG4gICAgICAgICAgICBpZiAoZGF0YTEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YWxpZDEgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdmFyIGVycnNfMSA9IGVycm9ycztcbiAgICAgICAgICAgICAgaWYgKChkYXRhMSAmJiB0eXBlb2YgZGF0YTEgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTEpKSkge1xuICAgICAgICAgICAgICAgIHZhciBlcnJzX18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhMS5oaW50Y2hhcnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTEuaGludGNoYXJzICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzLmhpbnRjaGFycycsXG4gICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvaGludGNoYXJzL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3N0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YTEuc21vb3Roc2Nyb2xsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTEuc21vb3Roc2Nyb2xsICE9PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcucHJvcGVydGllcy5zbW9vdGhzY3JvbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvc21vb3Roc2Nyb2xsL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdib29sZWFuJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgYm9vbGVhbidcbiAgICAgICAgICAgICAgICAgICAgICB9XTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMiA9IGVycm9ycyA9PT0gZXJyc18yO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkMikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTEuY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkMiA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfMiA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGExLmNvbXBsZXRlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5wcm9wZXJ0aWVzLmNvbXBsZXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL3Byb3BlcnRpZXMvY29tcGxldGUvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDIgPSBlcnJvcnMgPT09IGVycnNfMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZS5lcnJvcnMgPSBbe1xuICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLnByb3BlcnRpZXMnLFxuICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9wcm9wZXJ0aWVzL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBvYmplY3QnXG4gICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHZhciB2YWxpZDEgPSBlcnJvcnMgPT09IGVycnNfMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWxpZDEpIHtcbiAgICAgICAgICAgICAgdmFyIGRhdGExID0gZGF0YS5ibGFja2xpc3Q7XG4gICAgICAgICAgICAgIGlmIChkYXRhMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQxID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgZXJyc18xID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGExKSkge1xuICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzEgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICB2YXIgdmFsaWQxO1xuICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaTEgPSAwOyBpMSA8IGRhdGExLmxlbmd0aDsgaTErKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGF0YTIgPSBkYXRhMVtpMV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzIgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJzX18yID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTIgIT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzY2hlbWFQYXRoOiAnIy9wcm9wZXJ0aWVzL2JsYWNrbGlzdC9pdGVtcy9hbnlPZi8wL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbGlkMyA9IGVycm9ycyA9PT0gZXJyc18zO1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSB2YWxpZDIgfHwgdmFsaWQzO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhbGlkMikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKChkYXRhMiAmJiB0eXBlb2YgZGF0YTIgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoZGF0YTIpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzMgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTIudXJsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZDQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMS9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWlzc2luZ1Byb3BlcnR5OiAndXJsJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSBcXCd1cmxcXCcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgdkVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfNCA9IGVycm9ycztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEyLnVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddLnVybCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcHJvcGVydGllcy91cmwvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDQgPSBlcnJvcnMgPT09IGVycnNfNDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQ0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRhdGEzID0gZGF0YTIua2V5cztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YTMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWQ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvaXRlbXMvYW55T2YvMS9yZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pc3NpbmdQcm9wZXJ0eTogJ2tleXMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgaGF2ZSByZXF1aXJlZCBwcm9wZXJ0eSBcXCdrZXlzXFwnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnJzXzQgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhMykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycnNfXzQgPSBlcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk0ID0gMDsgaTQgPCBkYXRhMy5sZW5ndGg7IGk0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyc181ID0gZXJyb3JzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YTNbaTRdICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXl3b3JkOiAndHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFQYXRoOiAoZGF0YVBhdGggfHwgJycpICsgJy5ibGFja2xpc3RbJyArIGkxICsgJ10ua2V5c1snICsgaTQgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcHJvcGVydGllcy9rZXlzL2l0ZW1zL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIHN0cmluZydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodkVycm9ycyA9PT0gbnVsbCkgdkVycm9ycyA9IFtlcnJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ1ID0gZXJyb3JzID09PSBlcnJzXzU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF2YWxpZDUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddLmtleXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvcHJvcGVydGllcy9rZXlzL3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FycmF5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBhcnJheSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2RXJyb3JzLnB1c2goZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQ0ID0gZXJyb3JzID09PSBlcnJzXzQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlcnIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICd0eXBlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVBhdGg6IChkYXRhUGF0aCB8fCAnJykgKyAnLmJsYWNrbGlzdFsnICsgaTEgKyAnXScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mLzEvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdzaG91bGQgYmUgb2JqZWN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2RXJyb3JzID09PSBudWxsKSB2RXJyb3JzID0gW2Vycl07XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzKys7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWxpZDMgPSBlcnJvcnMgPT09IGVycnNfMztcbiAgICAgICAgICAgICAgICAgICAgICB2YWxpZDIgPSB2YWxpZDIgfHwgdmFsaWQzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGVyciA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleXdvcmQ6ICdhbnlPZicsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0WycgKyBpMSArICddJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYVBhdGg6ICcjL3Byb3BlcnRpZXMvYmxhY2tsaXN0L2l0ZW1zL2FueU9mJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIG1hdGNoIHNvbWUgc2NoZW1hIGluIGFueU9mJ1xuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgPT09IG51bGwpIHZFcnJvcnMgPSBbZXJyXTtcbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycysrO1xuICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlLmVycm9ycyA9IHZFcnJvcnM7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGVycm9ycyA9IGVycnNfXzI7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHZFcnJvcnMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJzX18yKSB2RXJyb3JzLmxlbmd0aCA9IGVycnNfXzI7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHZFcnJvcnMgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWQyID0gZXJyb3JzID09PSBlcnJzXzI7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFsaWQyKSBicmVhaztcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAgICAgICAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArICcuYmxhY2tsaXN0JyxcbiAgICAgICAgICAgICAgICAgICAgc2NoZW1hUGF0aDogJyMvcHJvcGVydGllcy9ibGFja2xpc3QvdHlwZScsXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdhcnJheSdcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ3Nob3VsZCBiZSBhcnJheSdcbiAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQxID0gZXJyb3JzID09PSBlcnJzXzE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGUuZXJyb3JzID0gW3tcbiAgICAgICAga2V5d29yZDogJ3R5cGUnLFxuICAgICAgICBkYXRhUGF0aDogKGRhdGFQYXRoIHx8ICcnKSArIFwiXCIsXG4gICAgICAgIHNjaGVtYVBhdGg6ICcjL3R5cGUnLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICB0eXBlOiAnb2JqZWN0J1xuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlOiAnc2hvdWxkIGJlIG9iamVjdCdcbiAgICAgIH1dO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YWxpZGF0ZS5lcnJvcnMgPSB2RXJyb3JzO1xuICAgIHJldHVybiBlcnJvcnMgPT09IDA7XG4gIH07XG59KSgpO1xudmFsaWRhdGUuc2NoZW1hID0ge1xuICBcInR5cGVcIjogXCJvYmplY3RcIixcbiAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICBcImtleW1hcHNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInBhdHRlcm5Qcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgXCIuKlwiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcInR5cGVcIl1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzZWFyY2hcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImRlZmF1bHRcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcInN0cmluZ1wiXG4gICAgICAgIH0sXG4gICAgICAgIFwiZW5naW5lc1wiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgXCJwYXR0ZXJuUHJvcGVydGllc1wiOiB7XG4gICAgICAgICAgICBcIi4qXCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInJlcXVpcmVkXCI6IFtcImRlZmF1bHRcIiwgXCJlbmdpbmVzXCJdXG4gICAgfSxcbiAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICBcInByb3BlcnRpZXNcIjoge1xuICAgICAgICBcImhpbnRjaGFyc1wiOiB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzbW9vdGhzY3JvbGxcIjoge1xuICAgICAgICAgIFwidHlwZVwiOiBcImJvb2xlYW5cIlxuICAgICAgICB9LFxuICAgICAgICBcImNvbXBsZXRlXCI6IHtcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBcImJsYWNrbGlzdFwiOiB7XG4gICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgXCJpdGVtc1wiOiB7XG4gICAgICAgIFwiYW55T2ZcIjogW3tcbiAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICB9LCB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwib2JqZWN0XCIsXG4gICAgICAgICAgXCJwcm9wZXJ0aWVzXCI6IHtcbiAgICAgICAgICAgIFwidXJsXCI6IHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RyaW5nXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcImtleXNcIjoge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJhcnJheVwiLFxuICAgICAgICAgICAgICBcIml0ZW1zXCI6IHtcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcXVpcmVkXCI6IFtcInVybFwiLCBcImtleXNcIl1cbiAgICAgICAgfV1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIFwiYWRkaXRpb25hbFByb3BlcnRpZXNcIjogZmFsc2Vcbn07XG52YWxpZGF0ZS5lcnJvcnMgPSBudWxsO1xubW9kdWxlLmV4cG9ydHMgPSB2YWxpZGF0ZTsiLCJjb25zdCBkYjoge1trZXk6IHN0cmluZ106IGFueX0gPSB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVtb3J5U3RvcmFnZSB7XG4gIHNldChuYW1lOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigndmFsdWUgaXMgbm90IHNlcmlhbGl6YWJsZScpO1xuICAgIH1cbiAgICBkYltuYW1lXSA9IGRhdGE7XG4gIH1cblxuICBnZXQobmFtZTogc3RyaW5nKTogYW55IHtcbiAgICBjb25zdCBkYXRhID0gZGJbbmFtZV07XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbiAgfVxufVxuIiwiaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NldHRpbmdzL1NlYXJjaCc7XG5cbmNvbnN0IHRyaW1TdGFydCA9IChzdHI6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIC8vIE5PVEUgU3RyaW5nLnRyaW1TdGFydCBpcyBhdmFpbGFibGUgb24gRmlyZWZveCA2MVxuICByZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgJycpO1xufTtcblxuY29uc3QgU1VQUE9SVEVEX1BST1RPQ09MUyA9IFsnaHR0cDonLCAnaHR0cHM6JywgJ2Z0cDonLCAnbWFpbHRvOicsICdhYm91dDonXTtcblxuY29uc3QgaXNMb2NhbGhvc3QgPSAodXJsOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKHVybCA9PT0gJ2xvY2FsaG9zdCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGNvbnN0IFtob3N0LCBwb3J0XSA9IHVybC5zcGxpdCgnOicsIDIpO1xuICByZXR1cm4gaG9zdCA9PT0gJ2xvY2FsaG9zdCcgJiYgIWlzTmFOKE51bWJlcihwb3J0KSk7XG59O1xuXG5jb25zdCBpc01pc3NpbmdIdHRwID0gKGtleXdvcmRzOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKGtleXdvcmRzLmluY2x1ZGVzKCcuJykgJiYgIWtleXdvcmRzLmluY2x1ZGVzKCcgJykpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgdSA9IG5ldyBVUkwoJ2h0dHA6Ly8nICsga2V5d29yZHMpO1xuICAgIHJldHVybiBpc0xvY2FsaG9zdCh1Lmhvc3QpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgLy8gZmFsbHRocm91Z2hcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuXG5jb25zdCBzZWFyY2hVcmwgPSAoa2V5d29yZHM6IHN0cmluZywgc2VhcmNoOiBTZWFyY2gpOiBzdHJpbmcgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHUgPSBuZXcgVVJMKGtleXdvcmRzKTtcbiAgICBpZiAoU1VQUE9SVEVEX1BST1RPQ09MUy5pbmNsdWRlcyh1LnByb3RvY29sLnRvTG93ZXJDYXNlKCkpKSB7XG4gICAgICByZXR1cm4gdS5ocmVmO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIGZhbGx0aHJvdWdoXG4gIH1cblxuICBpZiAoaXNNaXNzaW5nSHR0cChrZXl3b3JkcykpIHtcbiAgICByZXR1cm4gJ2h0dHA6Ly8nICsga2V5d29yZHM7XG4gIH1cblxuICBsZXQgdGVtcGxhdGUgPSBzZWFyY2guZW5naW5lc1tzZWFyY2guZGVmYXVsdEVuZ2luZV07XG4gIGxldCBxdWVyeSA9IGtleXdvcmRzO1xuXG4gIGNvbnN0IGZpcnN0ID0gdHJpbVN0YXJ0KGtleXdvcmRzKS5zcGxpdCgnICcpWzBdO1xuICBpZiAoT2JqZWN0LmtleXMoc2VhcmNoLmVuZ2luZXMpLmluY2x1ZGVzKGZpcnN0KSkge1xuICAgIHRlbXBsYXRlID0gc2VhcmNoLmVuZ2luZXNbZmlyc3RdO1xuICAgIHF1ZXJ5ID0gdHJpbVN0YXJ0KHRyaW1TdGFydChrZXl3b3Jkcykuc2xpY2UoZmlyc3QubGVuZ3RoKSk7XG4gIH1cbiAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoJ3t9JywgZW5jb2RlVVJJQ29tcG9uZW50KHF1ZXJ5KSk7XG59O1xuXG5jb25zdCBub3JtYWxpemVVcmwgPSAodXJsOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHUgPSBuZXcgVVJMKHVybCk7XG4gICAgaWYgKFNVUFBPUlRFRF9QUk9UT0NPTFMuaW5jbHVkZXModS5wcm90b2NvbC50b0xvd2VyQ2FzZSgpKSkge1xuICAgICAgcmV0dXJuIHUuaHJlZjtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBmYWxsdGhyb3VnaFxuICB9XG4gIHJldHVybiAnaHR0cDovLycgKyB1cmw7XG59O1xuXG5leHBvcnQgeyBzZWFyY2hVcmwsIG5vcm1hbGl6ZVVybCB9O1xuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gJy4uLy4uL3NoYXJlZC9tZXNzYWdlcyc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVDbGllbnQge1xuICBzaG93Q29tbWFuZCh0YWJJZDogbnVtYmVyLCBjb21tYW5kOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19DT01NQU5ELFxuICAgICAgY29tbWFuZCxcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dGaW5kKHRhYklkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19GSU5EXG4gICAgfSk7XG4gIH1cblxuICBzaG93SW5mbyh0YWJJZDogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19JTkZPLFxuICAgICAgdGV4dDogbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dFcnJvcih0YWJJZDogbnVtYmVyLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfU0hPV19FUlJPUixcbiAgICAgIHRleHQ6IG1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICBoaWRlKHRhYklkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkNPTlNPTEVfSElERSxcbiAgICB9KTtcbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1lc3NhZ2VDbGllbnQge1xuICBhc3luYyBicm9hZGNhc3RTZXR0aW5nc0NoYW5nZWQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7fSk7XG4gICAgZm9yIChjb25zdCB0YWIgb2YgdGFicykge1xuICAgICAgaWYgKCF0YWIuaWQgfHwgdGFiLnVybCAmJiB0YWIudXJsLnN0YXJ0c1dpdGgoJ2Fib3V0OicpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuICAgICAgICB0eXBlOiBtZXNzYWdlcy5TRVRUSU5HU19DSEFOR0VELFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0QWRkb25FbmFibGVkKHRhYklkOiBudW1iZXIpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCBlbmFibGVkID0gYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5BRERPTl9FTkFCTEVEX1FVRVJZLFxuICAgIH0pO1xuICAgIHJldHVybiBlbmFibGVkIGFzIGFueSBhcyBib29sZWFuO1xuICB9XG5cbiAgYXN5bmMgdG9nZ2xlQWRkb25FbmFibGVkKHRhYklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLkFERE9OX1RPR0dMRV9FTkFCTEVELFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2Nyb2xsVG8odGFiSWQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBhd2FpdCBicm93c2VyLnRhYnMuc2VuZE1lc3NhZ2UodGFiSWQsIHtcbiAgICAgIHR5cGU6IG1lc3NhZ2VzLlRBQl9TQ1JPTExfVE8sXG4gICAgICB4LFxuICAgICAgeSxcbiAgICB9KTtcbiAgfVxufVxuIiwiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG5Db3B5cmlnaHQgKEMpIE1pY3Jvc29mdC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxuXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXG52YXIgUmVmbGVjdDtcbihmdW5jdGlvbiAoUmVmbGVjdCkge1xuICAgIC8vIE1ldGFkYXRhIFByb3Bvc2FsXG4gICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS9cbiAgICAoZnVuY3Rpb24gKGZhY3RvcnkpIHtcbiAgICAgICAgdmFyIHJvb3QgPSB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgICAgICAgICAgIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6XG4gICAgICAgICAgICAgICAgdHlwZW9mIHRoaXMgPT09IFwib2JqZWN0XCIgPyB0aGlzIDpcbiAgICAgICAgICAgICAgICAgICAgRnVuY3Rpb24oXCJyZXR1cm4gdGhpcztcIikoKTtcbiAgICAgICAgdmFyIGV4cG9ydGVyID0gbWFrZUV4cG9ydGVyKFJlZmxlY3QpO1xuICAgICAgICBpZiAodHlwZW9mIHJvb3QuUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgcm9vdC5SZWZsZWN0ID0gUmVmbGVjdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV4cG9ydGVyID0gbWFrZUV4cG9ydGVyKHJvb3QuUmVmbGVjdCwgZXhwb3J0ZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZhY3RvcnkoZXhwb3J0ZXIpO1xuICAgICAgICBmdW5jdGlvbiBtYWtlRXhwb3J0ZXIodGFyZ2V0LCBwcmV2aW91cykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRba2V5XSAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgeyBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmV2aW91cylcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSkoZnVuY3Rpb24gKGV4cG9ydGVyKSB7XG4gICAgICAgIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICAgICAgICAvLyBmZWF0dXJlIHRlc3QgZm9yIFN5bWJvbCBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0c1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgdmFyIHRvUHJpbWl0aXZlU3ltYm9sID0gc3VwcG9ydHNTeW1ib2wgJiYgdHlwZW9mIFN5bWJvbC50b1ByaW1pdGl2ZSAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbC50b1ByaW1pdGl2ZSA6IFwiQEB0b1ByaW1pdGl2ZVwiO1xuICAgICAgICB2YXIgaXRlcmF0b3JTeW1ib2wgPSBzdXBwb3J0c1N5bWJvbCAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sLml0ZXJhdG9yIDogXCJAQGl0ZXJhdG9yXCI7XG4gICAgICAgIHZhciBzdXBwb3J0c0NyZWF0ZSA9IHR5cGVvZiBPYmplY3QuY3JlYXRlID09PSBcImZ1bmN0aW9uXCI7IC8vIGZlYXR1cmUgdGVzdCBmb3IgT2JqZWN0LmNyZWF0ZSBzdXBwb3J0XG4gICAgICAgIHZhciBzdXBwb3J0c1Byb3RvID0geyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheTsgLy8gZmVhdHVyZSB0ZXN0IGZvciBfX3Byb3RvX18gc3VwcG9ydFxuICAgICAgICB2YXIgZG93bkxldmVsID0gIXN1cHBvcnRzQ3JlYXRlICYmICFzdXBwb3J0c1Byb3RvO1xuICAgICAgICB2YXIgSGFzaE1hcCA9IHtcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhbiBvYmplY3QgaW4gZGljdGlvbmFyeSBtb2RlIChhLmsuYS4gXCJzbG93XCIgbW9kZSBpbiB2OClcbiAgICAgICAgICAgIGNyZWF0ZTogc3VwcG9ydHNDcmVhdGVcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIE1ha2VEaWN0aW9uYXJ5KE9iamVjdC5jcmVhdGUobnVsbCkpOyB9XG4gICAgICAgICAgICAgICAgOiBzdXBwb3J0c1Byb3RvXG4gICAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gTWFrZURpY3Rpb25hcnkoeyBfX3Byb3RvX186IG51bGwgfSk7IH1cbiAgICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBNYWtlRGljdGlvbmFyeSh7fSk7IH0sXG4gICAgICAgICAgICBoYXM6IGRvd25MZXZlbFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKG1hcCwga2V5KSB7IHJldHVybiBoYXNPd24uY2FsbChtYXAsIGtleSk7IH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChtYXAsIGtleSkgeyByZXR1cm4ga2V5IGluIG1hcDsgfSxcbiAgICAgICAgICAgIGdldDogZG93bkxldmVsXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIGhhc093bi5jYWxsKG1hcCwga2V5KSA/IG1hcFtrZXldIDogdW5kZWZpbmVkOyB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAobWFwLCBrZXkpIHsgcmV0dXJuIG1hcFtrZXldOyB9LFxuICAgICAgICB9O1xuICAgICAgICAvLyBMb2FkIGdsb2JhbCBvciBzaGltIHZlcnNpb25zIG9mIE1hcCwgU2V0LCBhbmQgV2Vha01hcFxuICAgICAgICB2YXIgZnVuY3Rpb25Qcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb24pO1xuICAgICAgICB2YXIgdXNlUG9seWZpbGwgPSB0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudltcIlJFRkxFQ1RfTUVUQURBVEFfVVNFX01BUF9QT0xZRklMTFwiXSA9PT0gXCJ0cnVlXCI7XG4gICAgICAgIHZhciBfTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBNYXAgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgTWFwLnByb3RvdHlwZS5lbnRyaWVzID09PSBcImZ1bmN0aW9uXCIgPyBNYXAgOiBDcmVhdGVNYXBQb2x5ZmlsbCgpO1xuICAgICAgICB2YXIgX1NldCA9ICF1c2VQb2x5ZmlsbCAmJiB0eXBlb2YgU2V0ID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFNldC5wcm90b3R5cGUuZW50cmllcyA9PT0gXCJmdW5jdGlvblwiID8gU2V0IDogQ3JlYXRlU2V0UG9seWZpbGwoKTtcbiAgICAgICAgdmFyIF9XZWFrTWFwID0gIXVzZVBvbHlmaWxsICYmIHR5cGVvZiBXZWFrTWFwID09PSBcImZ1bmN0aW9uXCIgPyBXZWFrTWFwIDogQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCk7XG4gICAgICAgIC8vIFtbTWV0YWRhdGFdXSBpbnRlcm5hbCBzbG90XG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5LW9iamVjdC1pbnRlcm5hbC1tZXRob2RzLWFuZC1pbnRlcm5hbC1zbG90c1xuICAgICAgICB2YXIgTWV0YWRhdGEgPSBuZXcgX1dlYWtNYXAoKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFwcGxpZXMgYSBzZXQgb2YgZGVjb3JhdG9ycyB0byBhIHByb3BlcnR5IG9mIGEgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIGRlY29yYXRvcnMgQW4gYXJyYXkgb2YgZGVjb3JhdG9ycy5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSB0byBkZWNvcmF0ZS5cbiAgICAgICAgICogQHBhcmFtIGF0dHJpYnV0ZXMgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkgZGVzY3JpcHRvciBmb3IgdGhlIHRhcmdldCBrZXkuXG4gICAgICAgICAqIEByZW1hcmtzIERlY29yYXRvcnMgYXJlIGFwcGxpZWQgaW4gcmV2ZXJzZSBvcmRlci5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgRXhhbXBsZSA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9yc0FycmF5LCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcbiAgICAgICAgICogICAgICAgICBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnNBcnJheSwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIixcbiAgICAgICAgICogICAgICAgICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKSkpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIsXG4gICAgICAgICAqICAgICAgICAgUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzQXJyYXksIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiLFxuICAgICAgICAgKiAgICAgICAgICAgICBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKSkpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcykge1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzQXJyYXkoZGVjb3JhdG9ycykpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGF0dHJpYnV0ZXMpICYmICFJc1VuZGVmaW5lZChhdHRyaWJ1dGVzKSAmJiAhSXNOdWxsKGF0dHJpYnV0ZXMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKElzTnVsbChhdHRyaWJ1dGVzKSlcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBEZWNvcmF0ZVByb3BlcnR5KGRlY29yYXRvcnMsIHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0FycmF5KGRlY29yYXRvcnMpKVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc0NvbnN0cnVjdG9yKHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gRGVjb3JhdGVDb25zdHJ1Y3RvcihkZWNvcmF0b3JzLCB0YXJnZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVjb3JhdGVcIiwgZGVjb3JhdGUpO1xuICAgICAgICAvLyA0LjEuMiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNyZWZsZWN0Lm1ldGFkYXRhXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBIGRlZmF1bHQgbWV0YWRhdGEgZGVjb3JhdG9yIGZhY3RvcnkgdGhhdCBjYW4gYmUgdXNlZCBvbiBhIGNsYXNzLCBjbGFzcyBtZW1iZXIsIG9yIHBhcmFtZXRlci5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IFRoZSBrZXkgZm9yIHRoZSBtZXRhZGF0YSBlbnRyeS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhVmFsdWUgVGhlIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEgZW50cnkuXG4gICAgICAgICAqIEByZXR1cm5zIEEgZGVjb3JhdG9yIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcmVtYXJrc1xuICAgICAgICAgKiBJZiBgbWV0YWRhdGFLZXlgIGlzIGFscmVhZHkgZGVmaW5lZCBmb3IgdGhlIHRhcmdldCBhbmQgdGFyZ2V0IGtleSwgdGhlXG4gICAgICAgICAqIG1ldGFkYXRhVmFsdWUgZm9yIHRoYXQga2V5IHdpbGwgYmUgb3ZlcndyaXR0ZW4uXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yLCBUeXBlU2NyaXB0IG9ubHkpXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICBAUmVmbGVjdC5tZXRhZGF0YShrZXksIHZhbHVlKVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUsIFR5cGVTY3JpcHQgb25seSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgcHJvcGVydHk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgQFJlZmxlY3QubWV0YWRhdGEoa2V5LCB2YWx1ZSlcbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIEBSZWZsZWN0Lm1ldGFkYXRhKGtleSwgdmFsdWUpXG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBtZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xuICAgICAgICAgICAgZnVuY3Rpb24gZGVjb3JhdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSAmJiAhSXNQcm9wZXJ0eUtleShwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkZWNvcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJtZXRhZGF0YVwiLCBtZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWZpbmUgYSB1bmlxdWUgbWV0YWRhdGEgZW50cnkgb24gdGhlIHRhcmdldC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gbWV0YWRhdGFWYWx1ZSBBIHZhbHVlIHRoYXQgY29udGFpbnMgYXR0YWNoZWQgbWV0YWRhdGEuXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdG8gZGVmaW5lIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIG9wdGlvbnMsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgb3B0aW9ucywgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gZGVjb3JhdG9yIGZhY3RvcnkgYXMgbWV0YWRhdGEtcHJvZHVjaW5nIGFubm90YXRpb24uXG4gICAgICAgICAqICAgICBmdW5jdGlvbiBNeUFubm90YXRpb24ob3B0aW9ucyk6IERlY29yYXRvciB7XG4gICAgICAgICAqICAgICAgICAgcmV0dXJuICh0YXJnZXQsIGtleT8pID0+IFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBvcHRpb25zLCB0YXJnZXQsIGtleSk7XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBkZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlEZWZpbmVPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJkZWZpbmVNZXRhZGF0YVwiLCBkZWZpbmVNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGtleSB3YXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdCBvciBpdHMgcHJvdG90eXBlIGNoYWluOyBvdGhlcndpc2UsIGBmYWxzZWAuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY1Byb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0Lmhhc01ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLnByb3RvdHlwZSwgXCJtZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBoYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgaWYgKCFJc09iamVjdCh0YXJnZXQpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIGlmICghSXNVbmRlZmluZWQocHJvcGVydHlLZXkpKVxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5ID0gVG9Qcm9wZXJ0eUtleShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCBwcm9wZXJ0eUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZXhwb3J0ZXIoXCJoYXNNZXRhZGF0YVwiLCBoYXNNZXRhZGF0YSk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBHZXRzIGEgdmFsdWUgaW5kaWNhdGluZyB3aGV0aGVyIHRoZSB0YXJnZXQgb2JqZWN0IGhhcyB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgYHRydWVgIGlmIHRoZSBtZXRhZGF0YSBrZXkgd2FzIGRlZmluZWQgb24gdGhlIHRhcmdldCBvYmplY3Q7IG90aGVyd2lzZSwgYGZhbHNlYC5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuaGFzT3duTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5oYXNPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeUhhc093bk1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImhhc093bk1ldGFkYXRhXCIsIGhhc093bk1ldGFkYXRhKTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgdGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgcHJvdmlkZWQgbWV0YWRhdGEga2V5IG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0TWV0YWRhdGFcIiwgZ2V0TWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEgdmFsdWUgZm9yIHRoZSBwcm92aWRlZCBtZXRhZGF0YSBrZXkgb24gdGhlIHRhcmdldCBvYmplY3QuXG4gICAgICAgICAqIEBwYXJhbSBtZXRhZGF0YUtleSBBIGtleSB1c2VkIHRvIHN0b3JlIGFuZCByZXRyaWV2ZSBtZXRhZGF0YS5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgVGhlIG1ldGFkYXRhIHZhbHVlIGZvciB0aGUgbWV0YWRhdGEga2V5IGlmIGZvdW5kOyBvdGhlcndpc2UsIGB1bmRlZmluZWRgLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljTWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhKFwiY3VzdG9tOmFubm90YXRpb25cIiwgRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0T3duTWV0YWRhdGEobWV0YWRhdGFLZXksIHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0T3duTWV0YWRhdGFcIiwgZ2V0T3duTWV0YWRhdGEpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgbWV0YWRhdGEga2V5cyBkZWZpbmVkIG9uIHRoZSB0YXJnZXQgb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4uXG4gICAgICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIHRhcmdldCBvYmplY3Qgb24gd2hpY2ggdGhlIG1ldGFkYXRhIGlzIGRlZmluZWQuXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eUtleSAoT3B0aW9uYWwpIFRoZSBwcm9wZXJ0eSBrZXkgZm9yIHRoZSB0YXJnZXQuXG4gICAgICAgICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIHVuaXF1ZSBtZXRhZGF0YSBrZXlzLlxuICAgICAgICAgKiBAZXhhbXBsZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgY2xhc3MgRXhhbXBsZSB7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHkgZGVjbGFyYXRpb25zIGFyZSBub3QgcGFydCBvZiBFUzYsIHRob3VnaCB0aGV5IGFyZSB2YWxpZCBpbiBUeXBlU2NyaXB0OlxuICAgICAgICAgKiAgICAgICAgIC8vIHN0YXRpYyBzdGF0aWNQcm9wZXJ0eTtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICAgICBjb25zdHJ1Y3RvcihwKSB7IH1cbiAgICAgICAgICogICAgICAgICBzdGF0aWMgc3RhdGljTWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIG1ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgIH1cbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE1ldGFkYXRhS2V5cyhFeGFtcGxlKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwicHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRNZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNNZXRob2RcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBtZXRob2QgKG9uIHByb3RvdHlwZSlcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGFLZXlzKEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHJldHVybiBPcmRpbmFyeU1ldGFkYXRhS2V5cyh0YXJnZXQsIHByb3BlcnR5S2V5KTtcbiAgICAgICAgfVxuICAgICAgICBleHBvcnRlcihcImdldE1ldGFkYXRhS2V5c1wiLCBnZXRNZXRhZGF0YUtleXMpO1xuICAgICAgICAvKipcbiAgICAgICAgICogR2V0cyB0aGUgdW5pcXVlIG1ldGFkYXRhIGtleXMgZGVmaW5lZCBvbiB0aGUgdGFyZ2V0IG9iamVjdC5cbiAgICAgICAgICogQHBhcmFtIHRhcmdldCBUaGUgdGFyZ2V0IG9iamVjdCBvbiB3aGljaCB0aGUgbWV0YWRhdGEgaXMgZGVmaW5lZC5cbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5S2V5IChPcHRpb25hbCkgVGhlIHByb3BlcnR5IGtleSBmb3IgdGhlIHRhcmdldC5cbiAgICAgICAgICogQHJldHVybnMgQW4gYXJyYXkgb2YgdW5pcXVlIG1ldGFkYXRhIGtleXMuXG4gICAgICAgICAqIEBleGFtcGxlXG4gICAgICAgICAqXG4gICAgICAgICAqICAgICBjbGFzcyBFeGFtcGxlIHtcbiAgICAgICAgICogICAgICAgICAvLyBwcm9wZXJ0eSBkZWNsYXJhdGlvbnMgYXJlIG5vdCBwYXJ0IG9mIEVTNiwgdGhvdWdoIHRoZXkgYXJlIHZhbGlkIGluIFR5cGVTY3JpcHQ6XG4gICAgICAgICAqICAgICAgICAgLy8gc3RhdGljIHN0YXRpY1Byb3BlcnR5O1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5O1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgICAgIGNvbnN0cnVjdG9yKHApIHsgfVxuICAgICAgICAgKiAgICAgICAgIHN0YXRpYyBzdGF0aWNNZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgbWV0aG9kKHApIHsgfVxuICAgICAgICAgKiAgICAgfVxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZ2V0T3duTWV0YWRhdGFLZXlzKEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZSwgXCJzdGF0aWNQcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIHByb3BlcnR5IChvbiBwcm90b3R5cGUpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLnByb3RvdHlwZSwgXCJwcm9wZXJ0eVwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gY29uc3RydWN0b3IpXG4gICAgICAgICAqICAgICByZXN1bHQgPSBSZWZsZWN0LmdldE93bk1ldGFkYXRhS2V5cyhFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5nZXRPd25NZXRhZGF0YUtleXMoRXhhbXBsZS5wcm90b3R5cGUsIFwibWV0aG9kXCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QodGFyZ2V0KSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICBpZiAoIUlzVW5kZWZpbmVkKHByb3BlcnR5S2V5KSlcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleSA9IFRvUHJvcGVydHlLZXkocHJvcGVydHlLZXkpO1xuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKHRhcmdldCwgcHJvcGVydHlLZXkpO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZ2V0T3duTWV0YWRhdGFLZXlzXCIsIGdldE93bk1ldGFkYXRhS2V5cyk7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGVzIHRoZSBtZXRhZGF0YSBlbnRyeSBmcm9tIHRoZSB0YXJnZXQgb2JqZWN0IHdpdGggdGhlIHByb3ZpZGVkIGtleS5cbiAgICAgICAgICogQHBhcmFtIG1ldGFkYXRhS2V5IEEga2V5IHVzZWQgdG8gc3RvcmUgYW5kIHJldHJpZXZlIG1ldGFkYXRhLlxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSB0YXJnZXQgb2JqZWN0IG9uIHdoaWNoIHRoZSBtZXRhZGF0YSBpcyBkZWZpbmVkLlxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlLZXkgKE9wdGlvbmFsKSBUaGUgcHJvcGVydHkga2V5IGZvciB0aGUgdGFyZ2V0LlxuICAgICAgICAgKiBAcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIG1ldGFkYXRhIGVudHJ5IHdhcyBmb3VuZCBhbmQgZGVsZXRlZDsgb3RoZXJ3aXNlLCBmYWxzZS5cbiAgICAgICAgICogQGV4YW1wbGVcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIGNsYXNzIEV4YW1wbGUge1xuICAgICAgICAgKiAgICAgICAgIC8vIHByb3BlcnR5IGRlY2xhcmF0aW9ucyBhcmUgbm90IHBhcnQgb2YgRVM2LCB0aG91Z2ggdGhleSBhcmUgdmFsaWQgaW4gVHlwZVNjcmlwdDpcbiAgICAgICAgICogICAgICAgICAvLyBzdGF0aWMgc3RhdGljUHJvcGVydHk7XG4gICAgICAgICAqICAgICAgICAgLy8gcHJvcGVydHk7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgICAgY29uc3RydWN0b3IocCkgeyB9XG4gICAgICAgICAqICAgICAgICAgc3RhdGljIHN0YXRpY01ldGhvZChwKSB7IH1cbiAgICAgICAgICogICAgICAgICBtZXRob2QocCkgeyB9XG4gICAgICAgICAqICAgICB9XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBjb25zdHJ1Y3RvclxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gcHJvcGVydHkgKG9uIGNvbnN0cnVjdG9yKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUsIFwic3RhdGljUHJvcGVydHlcIik7XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAvLyBwcm9wZXJ0eSAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcInByb3BlcnR5XCIpO1xuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgLy8gbWV0aG9kIChvbiBjb25zdHJ1Y3RvcilcbiAgICAgICAgICogICAgIHJlc3VsdCA9IFJlZmxlY3QuZGVsZXRlTWV0YWRhdGEoXCJjdXN0b206YW5ub3RhdGlvblwiLCBFeGFtcGxlLCBcInN0YXRpY01ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICogICAgIC8vIG1ldGhvZCAob24gcHJvdG90eXBlKVxuICAgICAgICAgKiAgICAgcmVzdWx0ID0gUmVmbGVjdC5kZWxldGVNZXRhZGF0YShcImN1c3RvbTphbm5vdGF0aW9uXCIsIEV4YW1wbGUucHJvdG90eXBlLCBcIm1ldGhvZFwiKTtcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGRlbGV0ZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHRhcmdldCkpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChwcm9wZXJ0eUtleSkpXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXkgPSBUb1Byb3BlcnR5S2V5KHByb3BlcnR5S2V5KTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAodGFyZ2V0LCBwcm9wZXJ0eUtleSwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghbWV0YWRhdGFNYXAuZGVsZXRlKG1ldGFkYXRhS2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBpZiAobWV0YWRhdGFNYXAuc2l6ZSA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0TWV0YWRhdGEgPSBNZXRhZGF0YS5nZXQodGFyZ2V0KTtcbiAgICAgICAgICAgIHRhcmdldE1ldGFkYXRhLmRlbGV0ZShwcm9wZXJ0eUtleSk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0TWV0YWRhdGEuc2l6ZSA+IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICBNZXRhZGF0YS5kZWxldGUodGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGV4cG9ydGVyKFwiZGVsZXRlTWV0YWRhdGFcIiwgZGVsZXRlTWV0YWRhdGEpO1xuICAgICAgICBmdW5jdGlvbiBEZWNvcmF0ZUNvbnN0cnVjdG9yKGRlY29yYXRvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdG9yID0gZGVjb3JhdG9yc1tpXTtcbiAgICAgICAgICAgICAgICB2YXIgZGVjb3JhdGVkID0gZGVjb3JhdG9yKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzQ29uc3RydWN0b3IoZGVjb3JhdGVkKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gZGVjb3JhdGVkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gRGVjb3JhdGVQcm9wZXJ0eShkZWNvcmF0b3JzLCB0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0b3IgPSBkZWNvcmF0b3JzW2ldO1xuICAgICAgICAgICAgICAgIHZhciBkZWNvcmF0ZWQgPSBkZWNvcmF0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSwgZGVzY3JpcHRvcik7XG4gICAgICAgICAgICAgICAgaWYgKCFJc1VuZGVmaW5lZChkZWNvcmF0ZWQpICYmICFJc051bGwoZGVjb3JhdGVkKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KGRlY29yYXRlZCkpXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0b3IgPSBkZWNvcmF0ZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRlc2NyaXB0b3I7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCBDcmVhdGUpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXRNZXRhZGF0YSA9IE1ldGFkYXRhLmdldChPKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZCh0YXJnZXRNZXRhZGF0YSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB0YXJnZXRNZXRhZGF0YSA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgTWV0YWRhdGEuc2V0KE8sIHRhcmdldE1ldGFkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IHRhcmdldE1ldGFkYXRhLmdldChQKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIUNyZWF0ZSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBtZXRhZGF0YU1hcCA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0TWV0YWRhdGEuc2V0KFAsIG1ldGFkYXRhTWFwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXRhZGF0YU1hcDtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMS4xIE9yZGluYXJ5SGFzTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzbWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgaWYgKGhhc093bilcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pO1xuICAgICAgICAgICAgaWYgKCFJc051bGwocGFyZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlIYXNNZXRhZGF0YShNZXRhZGF0YUtleSwgcGFyZW50LCBQKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMi4xIE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5aGFzb3dubWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlIYXNPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIG1ldGFkYXRhTWFwID0gR2V0T3JDcmVhdGVNZXRhZGF0YU1hcChPLCBQLCAvKkNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgIGlmIChJc1VuZGVmaW5lZChtZXRhZGF0YU1hcCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuIFRvQm9vbGVhbihtZXRhZGF0YU1hcC5oYXMoTWV0YWRhdGFLZXkpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyAzLjEuMy4xIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApXG4gICAgICAgIC8vIGh0dHBzOi8vcmJ1Y2t0b24uZ2l0aHViLmlvL3JlZmxlY3QtbWV0YWRhdGEvI29yZGluYXJ5Z2V0bWV0YWRhdGFcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRNZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCkge1xuICAgICAgICAgICAgdmFyIGhhc093biA9IE9yZGluYXJ5SGFzT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE8sIFApO1xuICAgICAgICAgICAgaWYgKGhhc093bilcbiAgICAgICAgICAgICAgICByZXR1cm4gT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUCk7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKTtcbiAgICAgICAgICAgIGlmICghSXNOdWxsKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5R2V0TWV0YWRhdGEoTWV0YWRhdGFLZXksIHBhcmVudCwgUCk7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS40LjEgT3JkaW5hcnlHZXRPd25NZXRhZGF0YShNZXRhZGF0YUtleSwgTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlnZXRvd25tZXRhZGF0YVxuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeUdldE93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBPLCBQKSB7XG4gICAgICAgICAgICB2YXIgbWV0YWRhdGFNYXAgPSBHZXRPckNyZWF0ZU1ldGFkYXRhTWFwKE8sIFAsIC8qQ3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgaWYgKElzVW5kZWZpbmVkKG1ldGFkYXRhTWFwKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgcmV0dXJuIG1ldGFkYXRhTWFwLmdldChNZXRhZGF0YUtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjUuMSBPcmRpbmFyeURlZmluZU93bk1ldGFkYXRhKE1ldGFkYXRhS2V5LCBNZXRhZGF0YVZhbHVlLCBPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeWRlZmluZW93bm1ldGFkYXRhXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5RGVmaW5lT3duTWV0YWRhdGEoTWV0YWRhdGFLZXksIE1ldGFkYXRhVmFsdWUsIE8sIFApIHtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyB0cnVlKTtcbiAgICAgICAgICAgIG1ldGFkYXRhTWFwLnNldChNZXRhZGF0YUtleSwgTWV0YWRhdGFWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gMy4xLjYuMSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKVxuICAgICAgICAvLyBodHRwczovL3JidWNrdG9uLmdpdGh1Yi5pby9yZWZsZWN0LW1ldGFkYXRhLyNvcmRpbmFyeW1ldGFkYXRha2V5c1xuICAgICAgICBmdW5jdGlvbiBPcmRpbmFyeU1ldGFkYXRhS2V5cyhPLCBQKSB7XG4gICAgICAgICAgICB2YXIgb3duS2V5cyA9IE9yZGluYXJ5T3duTWV0YWRhdGFLZXlzKE8sIFApO1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9IE9yZGluYXJ5R2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAocGFyZW50ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBvd25LZXlzO1xuICAgICAgICAgICAgdmFyIHBhcmVudEtleXMgPSBPcmRpbmFyeU1ldGFkYXRhS2V5cyhwYXJlbnQsIFApO1xuICAgICAgICAgICAgaWYgKHBhcmVudEtleXMubGVuZ3RoIDw9IDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG93bktleXM7XG4gICAgICAgICAgICBpZiAob3duS2V5cy5sZW5ndGggPD0gMClcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50S2V5cztcbiAgICAgICAgICAgIHZhciBzZXQgPSBuZXcgX1NldCgpO1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMCwgb3duS2V5c18xID0gb3duS2V5czsgX2kgPCBvd25LZXlzXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IG93bktleXNfMVtfaV07XG4gICAgICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIF9hID0gMCwgcGFyZW50S2V5c18xID0gcGFyZW50S2V5czsgX2EgPCBwYXJlbnRLZXlzXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IHBhcmVudEtleXNfMVtfYV07XG4gICAgICAgICAgICAgICAgdmFyIGhhc0tleSA9IHNldC5oYXMoa2V5KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc0tleSkge1xuICAgICAgICAgICAgICAgICAgICBzZXQuYWRkKGtleSk7XG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICB9XG4gICAgICAgIC8vIDMuMS43LjEgT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUClcbiAgICAgICAgLy8gaHR0cHM6Ly9yYnVja3Rvbi5naXRodWIuaW8vcmVmbGVjdC1tZXRhZGF0YS8jb3JkaW5hcnlvd25tZXRhZGF0YWtleXNcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlPd25NZXRhZGF0YUtleXMoTywgUCkge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBtZXRhZGF0YU1hcCA9IEdldE9yQ3JlYXRlTWV0YWRhdGFNYXAoTywgUCwgLypDcmVhdGUqLyBmYWxzZSk7XG4gICAgICAgICAgICBpZiAoSXNVbmRlZmluZWQobWV0YWRhdGFNYXApKVxuICAgICAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgICAgdmFyIGtleXNPYmogPSBtZXRhZGF0YU1hcC5rZXlzKCk7XG4gICAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBHZXRJdGVyYXRvcihrZXlzT2JqKTtcbiAgICAgICAgICAgIHZhciBrID0gMDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBJdGVyYXRvclN0ZXAoaXRlcmF0b3IpO1xuICAgICAgICAgICAgICAgIGlmICghbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLmxlbmd0aCA9IGs7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbmV4dFZhbHVlID0gSXRlcmF0b3JWYWx1ZShuZXh0KTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzW2tdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgSXRlcmF0b3JDbG9zZShpdGVyYXRvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGsrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA2IEVDTUFTY3JpcHQgRGF0YSBUeXAwZXMgYW5kIFZhbHVlc1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWRhdGEtdHlwZXMtYW5kLXZhbHVlc1xuICAgICAgICBmdW5jdGlvbiBUeXBlKHgpIHtcbiAgICAgICAgICAgIGlmICh4ID09PSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiAxIC8qIE51bGwgKi87XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB4KSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOiByZXR1cm4gMCAvKiBVbmRlZmluZWQgKi87XG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjogcmV0dXJuIDIgLyogQm9vbGVhbiAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHJldHVybiAzIC8qIFN0cmluZyAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwic3ltYm9sXCI6IHJldHVybiA0IC8qIFN5bWJvbCAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6IHJldHVybiA1IC8qIE51bWJlciAqLztcbiAgICAgICAgICAgICAgICBjYXNlIFwib2JqZWN0XCI6IHJldHVybiB4ID09PSBudWxsID8gMSAvKiBOdWxsICovIDogNiAvKiBPYmplY3QgKi87XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIDYgLyogT2JqZWN0ICovO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS4xIFRoZSBVbmRlZmluZWQgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLXVuZGVmaW5lZC10eXBlXG4gICAgICAgIGZ1bmN0aW9uIElzVW5kZWZpbmVkKHgpIHtcbiAgICAgICAgICAgIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjIgVGhlIE51bGwgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzLW51bGwtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc051bGwoeCkge1xuICAgICAgICAgICAgcmV0dXJuIHggPT09IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNi4xLjUgVGhlIFN5bWJvbCBUeXBlXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMtc3ltYm9sLXR5cGVcbiAgICAgICAgZnVuY3Rpb24gSXNTeW1ib2woeCkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDYuMS43IFRoZSBPYmplY3QgVHlwZVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vYmplY3QtdHlwZVxuICAgICAgICBmdW5jdGlvbiBJc09iamVjdCh4KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHggPT09IFwib2JqZWN0XCIgPyB4ICE9PSBudWxsIDogdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjEgVHlwZSBDb252ZXJzaW9uXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXR5cGUtY29udmVyc2lvblxuICAgICAgICAvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9wcmltaXRpdmVcbiAgICAgICAgZnVuY3Rpb24gVG9QcmltaXRpdmUoaW5wdXQsIFByZWZlcnJlZFR5cGUpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoVHlwZShpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDAgLyogVW5kZWZpbmVkICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSAxIC8qIE51bGwgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDIgLyogQm9vbGVhbiAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiBpbnB1dDtcbiAgICAgICAgICAgICAgICBjYXNlIDQgLyogU3ltYm9sICovOiByZXR1cm4gaW5wdXQ7XG4gICAgICAgICAgICAgICAgY2FzZSA1IC8qIE51bWJlciAqLzogcmV0dXJuIGlucHV0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhpbnQgPSBQcmVmZXJyZWRUeXBlID09PSAzIC8qIFN0cmluZyAqLyA/IFwic3RyaW5nXCIgOiBQcmVmZXJyZWRUeXBlID09PSA1IC8qIE51bWJlciAqLyA/IFwibnVtYmVyXCIgOiBcImRlZmF1bHRcIjtcbiAgICAgICAgICAgIHZhciBleG90aWNUb1ByaW0gPSBHZXRNZXRob2QoaW5wdXQsIHRvUHJpbWl0aXZlU3ltYm9sKTtcbiAgICAgICAgICAgIGlmIChleG90aWNUb1ByaW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBleG90aWNUb1ByaW0uY2FsbChpbnB1dCwgaGludCk7XG4gICAgICAgICAgICAgICAgaWYgKElzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIE9yZGluYXJ5VG9QcmltaXRpdmUoaW5wdXQsIGhpbnQgPT09IFwiZGVmYXVsdFwiID8gXCJudW1iZXJcIiA6IGhpbnQpO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xLjEgT3JkaW5hcnlUb1ByaW1pdGl2ZShPLCBoaW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeXRvcHJpbWl0aXZlXG4gICAgICAgIGZ1bmN0aW9uIE9yZGluYXJ5VG9QcmltaXRpdmUoTywgaGludCkge1xuICAgICAgICAgICAgaWYgKGhpbnQgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9TdHJpbmdfMSA9IE8udG9TdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvU3RyaW5nXzEuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlT2YgPSBPLnZhbHVlT2Y7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodmFsdWVPZikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHZhbHVlT2YuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVPZiA9IE8udmFsdWVPZjtcbiAgICAgICAgICAgICAgICBpZiAoSXNDYWxsYWJsZSh2YWx1ZU9mKSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWVPZi5jYWxsKE8pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUlzT2JqZWN0KHJlc3VsdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgdG9TdHJpbmdfMiA9IE8udG9TdHJpbmc7XG4gICAgICAgICAgICAgICAgaWYgKElzQ2FsbGFibGUodG9TdHJpbmdfMikpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRvU3RyaW5nXzIuY2FsbChPKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFJc09iamVjdChyZXN1bHQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjIgVG9Cb29sZWFuKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvMjAxNi8jc2VjLXRvYm9vbGVhblxuICAgICAgICBmdW5jdGlvbiBUb0Jvb2xlYW4oYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiAhIWFyZ3VtZW50O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMS4xMiBUb1N0cmluZyhhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtdG9zdHJpbmdcbiAgICAgICAgZnVuY3Rpb24gVG9TdHJpbmcoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIlwiICsgYXJndW1lbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4xLjE0IFRvUHJvcGVydHlLZXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLXRvcHJvcGVydHlrZXlcbiAgICAgICAgZnVuY3Rpb24gVG9Qcm9wZXJ0eUtleShhcmd1bWVudCkge1xuICAgICAgICAgICAgdmFyIGtleSA9IFRvUHJpbWl0aXZlKGFyZ3VtZW50LCAzIC8qIFN0cmluZyAqLyk7XG4gICAgICAgICAgICBpZiAoSXNTeW1ib2woa2V5KSlcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgcmV0dXJuIFRvU3RyaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gNy4yIFRlc3RpbmcgYW5kIENvbXBhcmlzb24gT3BlcmF0aW9uc1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy10ZXN0aW5nLWFuZC1jb21wYXJpc29uLW9wZXJhdGlvbnNcbiAgICAgICAgLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXNhcnJheVxuICAgICAgICBmdW5jdGlvbiBJc0FycmF5KGFyZ3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheVxuICAgICAgICAgICAgICAgID8gQXJyYXkuaXNBcnJheShhcmd1bWVudClcbiAgICAgICAgICAgICAgICA6IGFyZ3VtZW50IGluc3RhbmNlb2YgT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgID8gYXJndW1lbnQgaW5zdGFuY2VvZiBBcnJheVxuICAgICAgICAgICAgICAgICAgICA6IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09IFwiW29iamVjdCBBcnJheV1cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuMyBJc0NhbGxhYmxlKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NhbGxhYmxlXG4gICAgICAgIGZ1bmN0aW9uIElzQ2FsbGFibGUoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYW4gYXBwcm94aW1hdGlvbiBhcyB3ZSBjYW5ub3QgY2hlY2sgZm9yIFtbQ2FsbF1dIGludGVybmFsIG1ldGhvZC5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgYXJndW1lbnQgPT09IFwiZnVuY3Rpb25cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjIuNCBJc0NvbnN0cnVjdG9yKGFyZ3VtZW50KVxuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1pc2NvbnN0cnVjdG9yXG4gICAgICAgIGZ1bmN0aW9uIElzQ29uc3RydWN0b3IoYXJndW1lbnQpIHtcbiAgICAgICAgICAgIC8vIE5PVEU6IFRoaXMgaXMgYW4gYXBwcm94aW1hdGlvbiBhcyB3ZSBjYW5ub3QgY2hlY2sgZm9yIFtbQ29uc3RydWN0XV0gaW50ZXJuYWwgbWV0aG9kLlxuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJmdW5jdGlvblwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuMi43IElzUHJvcGVydHlLZXkoYXJndW1lbnQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWlzcHJvcGVydHlrZXlcbiAgICAgICAgZnVuY3Rpb24gSXNQcm9wZXJ0eUtleShhcmd1bWVudCkge1xuICAgICAgICAgICAgc3dpdGNoIChUeXBlKGFyZ3VtZW50KSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMyAvKiBTdHJpbmcgKi86IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNCAvKiBTeW1ib2wgKi86IHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyA3LjMgT3BlcmF0aW9ucyBvbiBPYmplY3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9wZXJhdGlvbnMtb24tb2JqZWN0c1xuICAgICAgICAvLyA3LjMuOSBHZXRNZXRob2QoViwgUClcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtZ2V0bWV0aG9kXG4gICAgICAgIGZ1bmN0aW9uIEdldE1ldGhvZChWLCBQKSB7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IFZbUF07XG4gICAgICAgICAgICBpZiAoZnVuYyA9PT0gdW5kZWZpbmVkIHx8IGZ1bmMgPT09IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmICghSXNDYWxsYWJsZShmdW5jKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XG4gICAgICAgICAgICByZXR1cm4gZnVuYztcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQgT3BlcmF0aW9ucyBvbiBJdGVyYXRvciBPYmplY3RzXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9wZXJhdGlvbnMtb24taXRlcmF0b3Itb2JqZWN0c1xuICAgICAgICBmdW5jdGlvbiBHZXRJdGVyYXRvcihvYmopIHtcbiAgICAgICAgICAgIHZhciBtZXRob2QgPSBHZXRNZXRob2Qob2JqLCBpdGVyYXRvclN5bWJvbCk7XG4gICAgICAgICAgICBpZiAoIUlzQ2FsbGFibGUobWV0aG9kKSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7IC8vIGZyb20gQ2FsbFxuICAgICAgICAgICAgdmFyIGl0ZXJhdG9yID0gbWV0aG9kLmNhbGwob2JqKTtcbiAgICAgICAgICAgIGlmICghSXNPYmplY3QoaXRlcmF0b3IpKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBpdGVyYXRvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyA3LjQuNCBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8yMDE2LyNzZWMtaXRlcmF0b3J2YWx1ZVxuICAgICAgICBmdW5jdGlvbiBJdGVyYXRvclZhbHVlKGl0ZXJSZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVyUmVzdWx0LnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC41IEl0ZXJhdG9yU3RlcChpdGVyYXRvcilcbiAgICAgICAgLy8gaHR0cHM6Ly90YzM5LmdpdGh1Yi5pby9lY21hMjYyLyNzZWMtaXRlcmF0b3JzdGVwXG4gICAgICAgIGZ1bmN0aW9uIEl0ZXJhdG9yU3RlcChpdGVyYXRvcikge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKTtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IGZhbHNlIDogcmVzdWx0O1xuICAgICAgICB9XG4gICAgICAgIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLWl0ZXJhdG9yY2xvc2VcbiAgICAgICAgZnVuY3Rpb24gSXRlcmF0b3JDbG9zZShpdGVyYXRvcikge1xuICAgICAgICAgICAgdmFyIGYgPSBpdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChmKVxuICAgICAgICAgICAgICAgIGYuY2FsbChpdGVyYXRvcik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gOS4xIE9yZGluYXJ5IE9iamVjdCBJbnRlcm5hbCBNZXRob2RzIGFuZCBJbnRlcm5hbCBTbG90c1xuICAgICAgICAvLyBodHRwczovL3RjMzkuZ2l0aHViLmlvL2VjbWEyNjIvI3NlYy1vcmRpbmFyeS1vYmplY3QtaW50ZXJuYWwtbWV0aG9kcy1hbmQtaW50ZXJuYWwtc2xvdHNcbiAgICAgICAgLy8gOS4xLjEuMSBPcmRpbmFyeUdldFByb3RvdHlwZU9mKE8pXG4gICAgICAgIC8vIGh0dHBzOi8vdGMzOS5naXRodWIuaW8vZWNtYTI2Mi8jc2VjLW9yZGluYXJ5Z2V0cHJvdG90eXBlb2ZcbiAgICAgICAgZnVuY3Rpb24gT3JkaW5hcnlHZXRQcm90b3R5cGVPZihPKSB7XG4gICAgICAgICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIE8gIT09IFwiZnVuY3Rpb25cIiB8fCBPID09PSBmdW5jdGlvblByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBUeXBlU2NyaXB0IGRvZXNuJ3Qgc2V0IF9fcHJvdG9fXyBpbiBFUzUsIGFzIGl0J3Mgbm9uLXN0YW5kYXJkLlxuICAgICAgICAgICAgLy8gVHJ5IHRvIGRldGVybWluZSB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3Rvci4gQ29tcGF0aWJsZSBpbXBsZW1lbnRhdGlvbnNcbiAgICAgICAgICAgIC8vIG11c3QgZWl0aGVyIHNldCBfX3Byb3RvX18gb24gYSBzdWJjbGFzcyBjb25zdHJ1Y3RvciB0byB0aGUgc3VwZXJjbGFzcyBjb25zdHJ1Y3RvcixcbiAgICAgICAgICAgIC8vIG9yIGVuc3VyZSBlYWNoIGNsYXNzIGhhcyBhIHZhbGlkIGBjb25zdHJ1Y3RvcmAgcHJvcGVydHkgb24gaXRzIHByb3RvdHlwZSB0aGF0XG4gICAgICAgICAgICAvLyBwb2ludHMgYmFjayB0byB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIGlzIG5vdCB0aGUgc2FtZSBhcyBGdW5jdGlvbi5bW1Byb3RvdHlwZV1dLCB0aGVuIHRoaXMgaXMgZGVmaW5hdGVseSBpbmhlcml0ZWQuXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHRoZSBjYXNlIHdoZW4gaW4gRVM2IG9yIHdoZW4gdXNpbmcgX19wcm90b19fIGluIGEgY29tcGF0aWJsZSBicm93c2VyLlxuICAgICAgICAgICAgaWYgKHByb3RvICE9PSBmdW5jdGlvblByb3RvdHlwZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB0aGUgc3VwZXIgcHJvdG90eXBlIGlzIE9iamVjdC5wcm90b3R5cGUsIG51bGwsIG9yIHVuZGVmaW5lZCwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIHZhciBwcm90b3R5cGUgPSBPLnByb3RvdHlwZTtcbiAgICAgICAgICAgIHZhciBwcm90b3R5cGVQcm90byA9IHByb3RvdHlwZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKTtcbiAgICAgICAgICAgIGlmIChwcm90b3R5cGVQcm90byA9PSBudWxsIHx8IHByb3RvdHlwZVByb3RvID09PSBPYmplY3QucHJvdG90eXBlKVxuICAgICAgICAgICAgICAgIHJldHVybiBwcm90bztcbiAgICAgICAgICAgIC8vIElmIHRoZSBjb25zdHJ1Y3RvciB3YXMgbm90IGEgZnVuY3Rpb24sIHRoZW4gd2UgY2Fubm90IGRldGVybWluZSB0aGUgaGVyaXRhZ2UuXG4gICAgICAgICAgICB2YXIgY29uc3RydWN0b3IgPSBwcm90b3R5cGVQcm90by5jb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uc3RydWN0b3IgIT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIHNvbWUga2luZCBvZiBzZWxmLXJlZmVyZW5jZSwgdGhlbiB3ZSBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBoZXJpdGFnZS5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PT0gTylcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgICAgICAvLyB3ZSBoYXZlIGEgcHJldHR5IGdvb2QgZ3Vlc3MgYXQgdGhlIGhlcml0YWdlLlxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIE1hcCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZU1hcFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlU2VudGluZWwgPSB7fTtcbiAgICAgICAgICAgIHZhciBhcnJheVNlbnRpbmVsID0gW107XG4gICAgICAgICAgICB2YXIgTWFwSXRlcmF0b3IgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFwSXRlcmF0b3Ioa2V5cywgdmFsdWVzLCBzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBrZXlzO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuICAgICAgICAgICAgICAgIE1hcEl0ZXJhdG9yLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9pbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCB0aGlzLl9rZXlzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX3NlbGVjdG9yKHRoaXMuX2tleXNbaW5kZXhdLCB0aGlzLl92YWx1ZXNbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCArIDEgPj0gdGhpcy5fa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IHJlc3VsdCwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUudGhyb3cgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luZGV4ID49IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gYXJyYXlTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBNYXBJdGVyYXRvci5wcm90b3R5cGUucmV0dXJuID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9pbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cyA9IGFycmF5U2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBhcnJheVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hcEl0ZXJhdG9yO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gTWFwKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUtleSA9IGNhY2hlU2VudGluZWw7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KE1hcC5wcm90b3R5cGUsIFwic2l6ZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fa2V5cy5sZW5ndGg7IH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24gKGtleSkgeyByZXR1cm4gdGhpcy5fZmluZChrZXksIC8qaW5zZXJ0Ki8gZmFsc2UpID49IDA7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuX2ZpbmQoa2V5LCAvKmluc2VydCovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4ID49IDAgPyB0aGlzLl92YWx1ZXNbaW5kZXhdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLl9maW5kKGtleSwgLyppbnNlcnQqLyBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2l6ZSA9IHRoaXMuX2tleXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IGluZGV4ICsgMTsgaSA8IHNpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXNbaSAtIDFdID0gdGhpcy5fa2V5c1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92YWx1ZXNbaSAtIDFdID0gdGhpcy5fdmFsdWVzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5sZW5ndGgtLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IHRoaXMuX2NhY2hlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVLZXkgPSBjYWNoZVNlbnRpbmVsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSAtMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlS2V5ID0gY2FjaGVTZW50aW5lbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVJbmRleCA9IC0yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IE1hcEl0ZXJhdG9yKHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcywgZ2V0S2V5KTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5ldyBNYXBJdGVyYXRvcih0aGlzLl9rZXlzLCB0aGlzLl92YWx1ZXMsIGdldFZhbHVlKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBuZXcgTWFwSXRlcmF0b3IodGhpcy5fa2V5cywgdGhpcy5fdmFsdWVzLCBnZXRFbnRyeSk7IH07XG4gICAgICAgICAgICAgICAgTWFwLnByb3RvdHlwZVtcIkBAaXRlcmF0b3JcIl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmVudHJpZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBNYXAucHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIE1hcC5wcm90b3R5cGUuX2ZpbmQgPSBmdW5jdGlvbiAoa2V5LCBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlS2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSB0aGlzLl9rZXlzLmluZGV4T2YodGhpcy5fY2FjaGVLZXkgPSBrZXkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUluZGV4IDwgMCAmJiBpbnNlcnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlSW5kZXggPSB0aGlzLl9rZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleXMucHVzaChrZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVJbmRleDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXA7XG4gICAgICAgICAgICB9KCkpO1xuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0S2V5KGtleSwgXykge1xuICAgICAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRWYWx1ZShfLCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldEVudHJ5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2tleSwgdmFsdWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG5haXZlIFNldCBzaGltXG4gICAgICAgIGZ1bmN0aW9uIENyZWF0ZVNldFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBTZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcCA9IG5ldyBfTWFwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTZXQucHJvdG90eXBlLCBcInNpemVcIiwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC5zaXplOyB9LFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmhhcyh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIHRoaXMuX21hcC5zZXQodmFsdWUsIHZhbHVlKSwgdGhpczsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmRlbGV0ZSA9IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdGhpcy5fbWFwLmRlbGV0ZSh2YWx1ZSk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHsgdGhpcy5fbWFwLmNsZWFyKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZS5rZXlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5fbWFwLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX21hcC52YWx1ZXMoKTsgfTtcbiAgICAgICAgICAgICAgICBTZXQucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLl9tYXAuZW50cmllcygpOyB9O1xuICAgICAgICAgICAgICAgIFNldC5wcm90b3R5cGVbXCJAQGl0ZXJhdG9yXCJdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpcy5rZXlzKCk7IH07XG4gICAgICAgICAgICAgICAgU2V0LnByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzLmtleXMoKTsgfTtcbiAgICAgICAgICAgICAgICByZXR1cm4gU2V0O1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBuYWl2ZSBXZWFrTWFwIHNoaW1cbiAgICAgICAgZnVuY3Rpb24gQ3JlYXRlV2Vha01hcFBvbHlmaWxsKCkge1xuICAgICAgICAgICAgdmFyIFVVSURfU0laRSA9IDE2O1xuICAgICAgICAgICAgdmFyIGtleXMgPSBIYXNoTWFwLmNyZWF0ZSgpO1xuICAgICAgICAgICAgdmFyIHJvb3RLZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgIHJldHVybiAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gV2Vha01hcCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5ID0gQ3JlYXRlVW5pcXVlS2V5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFdlYWtNYXAucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhYmxlICE9PSB1bmRlZmluZWQgPyBIYXNoTWFwLmhhcyh0YWJsZSwgdGhpcy5fa2V5KSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IEhhc2hNYXAuZ2V0KHRhYmxlLCB0aGlzLl9rZXkpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhYmxlID0gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCAvKmNyZWF0ZSovIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB0YWJsZVt0aGlzLl9rZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFibGUgPSBHZXRPckNyZWF0ZVdlYWtNYXBUYWJsZSh0YXJnZXQsIC8qY3JlYXRlKi8gZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFibGUgIT09IHVuZGVmaW5lZCA/IGRlbGV0ZSB0YWJsZVt0aGlzLl9rZXldIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBXZWFrTWFwLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gTk9URTogbm90IGEgcmVhbCBjbGVhciwganVzdCBtYWtlcyB0aGUgcHJldmlvdXMgZGF0YSB1bnJlYWNoYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXkgPSBDcmVhdGVVbmlxdWVLZXkoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBXZWFrTWFwO1xuICAgICAgICAgICAgfSgpKTtcbiAgICAgICAgICAgIGZ1bmN0aW9uIENyZWF0ZVVuaXF1ZUtleSgpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5O1xuICAgICAgICAgICAgICAgIGRvXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IFwiQEBXZWFrTWFwQEBcIiArIENyZWF0ZVVVSUQoKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoSGFzaE1hcC5oYXMoa2V5cywga2V5KSk7XG4gICAgICAgICAgICAgICAga2V5c1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gR2V0T3JDcmVhdGVXZWFrTWFwVGFibGUodGFyZ2V0LCBjcmVhdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWhhc093bi5jYWxsKHRhcmdldCwgcm9vdEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjcmVhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCByb290S2V5LCB7IHZhbHVlOiBIYXNoTWFwLmNyZWF0ZSgpIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3Jvb3RLZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gRmlsbFJhbmRvbUJ5dGVzKGJ1ZmZlciwgc2l6ZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgKytpKVxuICAgICAgICAgICAgICAgICAgICBidWZmZXJbaV0gPSBNYXRoLnJhbmRvbSgpICogMHhmZiB8IDA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIEdlblJhbmRvbUJ5dGVzKHNpemUpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFVpbnQ4QXJyYXkgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKG5ldyBVaW50OEFycmF5KHNpemUpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtc0NyeXB0byAhPT0gXCJ1bmRlZmluZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoc2l6ZSkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRmlsbFJhbmRvbUJ5dGVzKG5ldyBVaW50OEFycmF5KHNpemUpLCBzaXplKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIEZpbGxSYW5kb21CeXRlcyhuZXcgQXJyYXkoc2l6ZSksIHNpemUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gQ3JlYXRlVVVJRCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZGF0YSA9IEdlblJhbmRvbUJ5dGVzKFVVSURfU0laRSk7XG4gICAgICAgICAgICAgICAgLy8gbWFyayBhcyByYW5kb20gLSBSRkMgNDEyMiDCpyA0LjRcbiAgICAgICAgICAgICAgICBkYXRhWzZdID0gZGF0YVs2XSAmIDB4NGYgfCAweDQwO1xuICAgICAgICAgICAgICAgIGRhdGFbOF0gPSBkYXRhWzhdICYgMHhiZiB8IDB4ODA7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgVVVJRF9TSVpFOyArK29mZnNldCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnl0ZSA9IGRhdGFbb2Zmc2V0XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gNCB8fCBvZmZzZXQgPT09IDYgfHwgb2Zmc2V0ID09PSA4KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiLVwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYnl0ZSA8IDE2KVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gYnl0ZS50b1N0cmluZygxNikudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB1c2VzIGEgaGV1cmlzdGljIHVzZWQgYnkgdjggYW5kIGNoYWtyYSB0byBmb3JjZSBhbiBvYmplY3QgaW50byBkaWN0aW9uYXJ5IG1vZGUuXG4gICAgICAgIGZ1bmN0aW9uIE1ha2VEaWN0aW9uYXJ5KG9iaikge1xuICAgICAgICAgICAgb2JqLl9fID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgZGVsZXRlIG9iai5fXztcbiAgICAgICAgICAgIHJldHVybiBvYmo7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pKFJlZmxlY3QgfHwgKFJlZmxlY3QgPSB7fSkpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgTWVtb3J5U3RvcmFnZSBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZXMvTWVtb3J5U3RvcmFnZSc7XG5pbXBvcnQgU2V0dGluZ3MgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL1NldHRpbmdzJztcbmltcG9ydCBQcm9wZXJ0aWVzIGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9Qcm9wZXJ0aWVzJztcblxuY29uc3QgQ0FDSEVEX1NFVFRJTkdfS0VZID0gJ3NldHRpbmcnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nUmVwb3NpdG9yeSB7XG4gIHByaXZhdGUgY2FjaGU6IE1lbW9yeVN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYWNoZSA9IG5ldyBNZW1vcnlTdG9yYWdlKCk7XG4gIH1cblxuICBnZXQoKTogUHJvbWlzZTxTZXR0aW5ncz4ge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNhY2hlLmdldChDQUNIRURfU0VUVElOR19LRVkpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoU2V0dGluZ3MuZnJvbUpTT04oZGF0YSkpO1xuICB9XG5cbiAgdXBkYXRlKHZhbHVlOiBTZXR0aW5ncyk6IHZvaWQge1xuICAgIHJldHVybiB0aGlzLmNhY2hlLnNldChDQUNIRURfU0VUVElOR19LRVksIHZhbHVlLnRvSlNPTigpKTtcbiAgfVxuXG4gIGFzeW5jIHNldFByb3BlcnR5KFxuICAgIG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IGRlZiA9IFByb3BlcnRpZXMuZGVmKG5hbWUpO1xuICAgIGlmICghZGVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gcHJvcGVydHk6ICcgKyBuYW1lKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gZGVmLnR5cGUpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYHByb3BlcnR5IHR5cGUgb2YgJHtuYW1lfSBtaXNtYXRjaDogJHt0eXBlb2YgdmFsdWV9YCk7XG4gICAgfVxuICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlID09PSAnJykge1xuICAgICAgbmV3VmFsdWUgPSBkZWYuZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCB0aGlzLmdldCgpO1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgIGNhc2UgJ2hpbnRjaGFycyc6XG4gICAgICBjdXJyZW50LnByb3BlcnRpZXMuaGludGNoYXJzID0gbmV3VmFsdWUgYXMgc3RyaW5nO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnc21vb3Roc2Nyb2xsJzpcbiAgICAgIGN1cnJlbnQucHJvcGVydGllcy5zbW9vdGhzY3JvbGwgPSBuZXdWYWx1ZSBhcyBib29sZWFuO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnY29tcGxldGUnOlxuICAgICAgY3VycmVudC5wcm9wZXJ0aWVzLmNvbXBsZXRlID0gbmV3VmFsdWUgYXMgc3RyaW5nO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVwZGF0ZShjdXJyZW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2luZG93UHJlc2VudGVyIHtcbiAgY3JlYXRlKHVybDogc3RyaW5nKTogUHJvbWlzZTxicm93c2VyLndpbmRvd3MuV2luZG93PiB7XG4gICAgcmV0dXJuIGJyb3dzZXIud2luZG93cy5jcmVhdGUoeyB1cmwgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gJy4uLy4uL3NoYXJlZC9vcGVyYXRpb25zJztcbmltcG9ydCBSZXBlYXRSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9SZXBlYXRSZXBvc2l0b3J5JztcblxudHlwZSBPcGVyYXRpb24gPSBvcGVyYXRpb25zLk9wZXJhdGlvbjtcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0VXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcmVwZWF0UmVwb3NpdG9yeTogUmVwZWF0UmVwb3NpdG9yeSxcbiAgKSB7XG4gIH1cblxuICBzdG9yZUxhc3RPcGVyYXRpb24ob3A6IE9wZXJhdGlvbik6IHZvaWQge1xuICAgIHRoaXMucmVwZWF0UmVwb3NpdG9yeS5zZXRMYXN0T3BlcmF0aW9uKG9wKTtcbiAgfVxuXG4gIGdldExhc3RPcGVyYXRpb24oKTogb3BlcmF0aW9ucy5PcGVyYXRpb24gfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJlcGVhdFJlcG9zaXRvcnkuZ2V0TGFzdE9wZXJhdGlvbigpO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbiAgaXNSZXBlYXRhYmxlKG9wOiBPcGVyYXRpb24pOiBib29sZWFuIHtcbiAgICBzd2l0Y2ggKG9wLnR5cGUpIHtcbiAgICBjYXNlIG9wZXJhdGlvbnMuTkFWSUdBVEVfSElTVE9SWV9QUkVWOlxuICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9ISVNUT1JZX05FWFQ6XG4gICAgY2FzZSBvcGVyYXRpb25zLk5BVklHQVRFX0xJTktfUFJFVjpcbiAgICBjYXNlIG9wZXJhdGlvbnMuTkFWSUdBVEVfTElOS19ORVhUOlxuICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9QQVJFTlQ6XG4gICAgY2FzZSBvcGVyYXRpb25zLk5BVklHQVRFX1JPT1Q6XG4gICAgY2FzZSBvcGVyYXRpb25zLlBBR0VfU09VUkNFOlxuICAgIGNhc2Ugb3BlcmF0aW9ucy5QQUdFX0hPTUU6XG4gICAgY2FzZSBvcGVyYXRpb25zLlRBQl9DTE9TRTpcbiAgICBjYXNlIG9wZXJhdGlvbnMuVEFCX0NMT1NFX0ZPUkNFOlxuICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfQ0xPU0VfUklHSFQ6XG4gICAgY2FzZSBvcGVyYXRpb25zLlRBQl9SRU9QRU46XG4gICAgY2FzZSBvcGVyYXRpb25zLlRBQl9SRUxPQUQ6XG4gICAgY2FzZSBvcGVyYXRpb25zLlRBQl9QSU46XG4gICAgY2FzZSBvcGVyYXRpb25zLlRBQl9VTlBJTjpcbiAgICBjYXNlIG9wZXJhdGlvbnMuVEFCX1RPR0dMRV9QSU5ORUQ6XG4gICAgY2FzZSBvcGVyYXRpb25zLlRBQl9EVVBMSUNBVEU6XG4gICAgY2FzZSBvcGVyYXRpb25zLlpPT01fSU46XG4gICAgY2FzZSBvcGVyYXRpb25zLlpPT01fT1VUOlxuICAgIGNhc2Ugb3BlcmF0aW9ucy5aT09NX05FVVRSQUw6XG4gICAgY2FzZSBvcGVyYXRpb25zLklOVEVSTkFMX09QRU5fVVJMOlxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBTZXR0aW5nVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9TZXR0aW5nVXNlQ2FzZSc7XG5pbXBvcnQgQ29udGVudE1lc3NhZ2VDbGllbnQgZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmVzL0NvbnRlbnRNZXNzYWdlQ2xpZW50JztcbmltcG9ydCBTZXR0aW5ncyBmcm9tICcuLi8uLi9zaGFyZWQvc2V0dGluZ3MvU2V0dGluZ3MnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2V0dGluZ1VzZUNhc2U6IFNldHRpbmdVc2VDYXNlLFxuICAgIHByaXZhdGUgY29udGVudE1lc3NhZ2VDbGllbnQ6IENvbnRlbnRNZXNzYWdlQ2xpZW50LFxuICApIHtcbiAgfVxuXG4gIGdldFNldHRpbmcoKTogUHJvbWlzZTxTZXR0aW5ncz4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdVc2VDYXNlLmdldCgpO1xuICB9XG5cbiAgYXN5bmMgcmVsb2FkKCk6IFByb21pc2U8YW55PiB7XG4gICAgYXdhaXQgdGhpcy5zZXR0aW5nVXNlQ2FzZS5yZWxvYWQoKTtcbiAgICB0aGlzLmNvbnRlbnRNZXNzYWdlQ2xpZW50LmJyb2FkY2FzdFNldHRpbmdzQ2hhbmdlZCgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuXG5jb25zdCBOT1RJRklDQVRJT05fSURfVVBEQVRFID0gJ3ZpbXZpeGVuLXVwZGF0ZSc7XG5jb25zdCBOT1RJRklDQVRJT05fSURfSU5WQUxJRF9TRVRUSU5HUyA9ICd2aW12aXhlbi11cGRhdGUtaW52YWxpZC1zZXR0aW5ncyc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGlmeVByZXNlbnRlciB7XG4gIGFzeW5jIG5vdGlmeVVwZGF0ZWQodmVyc2lvbjogc3RyaW5nLCBvbmNsaWNrOiAoKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGl0bGUgPSBgVmltIFZpeGVuICR7dmVyc2lvbn0gaGFzIGJlZW4gaW5zdGFsbGVkYDtcbiAgICBjb25zdCBtZXNzYWdlID0gJ0NsaWNrIGhlcmUgdG8gc2VlIHJlbGVhc2Ugbm90ZXMnO1xuXG4gICAgY29uc3QgbGlzdGVuZXIgPSAoaWQ6IHN0cmluZykgPT4ge1xuICAgICAgaWYgKGlkICE9PSBOT1RJRklDQVRJT05fSURfVVBEQVRFKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG9uY2xpY2soKTtcbiAgICAgIGJyb3dzZXIubm90aWZpY2F0aW9ucy5vbkNsaWNrZWQucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH07XG4gICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICBhd2FpdCBicm93c2VyLm5vdGlmaWNhdGlvbnMuY3JlYXRlKE5PVElGSUNBVElPTl9JRF9VUERBVEUsIHtcbiAgICAgICd0eXBlJzogJ2Jhc2ljJyxcbiAgICAgICdpY29uVXJsJzogYnJvd3Nlci5leHRlbnNpb24uZ2V0VVJMKCdyZXNvdXJjZXMvaWNvbl80OHg0OC5wbmcnKSxcbiAgICAgIHRpdGxlLFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIG5vdGlmeUludmFsaWRTZXR0aW5ncyhvbmNsaWNrOiAoKSA9PiB2b2lkKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGl0bGUgPSBgTG9hZGVkIHNldHRpbmdzIGlzIGludmFsaWRgO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGVuXG4gICAgY29uc3QgbWVzc2FnZSA9ICdUaGUgZGVmYXVsdCBzZXR0aW5ncyBpcyB1c2VkIGR1ZSB0byB0aGUgbGFzdCBzYXZlZCBzZXR0aW5ncyBpcyBpbnZhbGlkLiAgQ2hlY2sgeW91ciBjdXJyZW50IHNldHRpbmdzIGZyb20gdGhlIGFkZC1vbiBwcmVmZXJlbmNlJztcblxuICAgIGNvbnN0IGxpc3RlbmVyID0gKGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChpZCAhPT0gTk9USUZJQ0FUSU9OX0lEX0lOVkFMSURfU0VUVElOR1MpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgb25jbGljaygpO1xuICAgICAgYnJvd3Nlci5ub3RpZmljYXRpb25zLm9uQ2xpY2tlZC5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgfTtcbiAgICBicm93c2VyLm5vdGlmaWNhdGlvbnMub25DbGlja2VkLmFkZExpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgIGF3YWl0IGJyb3dzZXIubm90aWZpY2F0aW9ucy5jcmVhdGUoTk9USUZJQ0FUSU9OX0lEX0lOVkFMSURfU0VUVElOR1MsIHtcbiAgICAgICd0eXBlJzogJ2Jhc2ljJyxcbiAgICAgICdpY29uVXJsJzogYnJvd3Nlci5leHRlbnNpb24uZ2V0VVJMKCdyZXNvdXJjZXMvaWNvbl80OHg0OC5wbmcnKSxcbiAgICAgIHRpdGxlLFxuICAgICAgbWVzc2FnZSxcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBGaW5kUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvRmluZFJlcG9zaXRvcnknO1xuaW1wb3J0IFRhYlByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL1RhYlByZXNlbnRlcic7XG5pbXBvcnQgQ29uc29sZUNsaWVudCBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZXMvQ29uc29sZUNsaWVudCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbmRVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJQcmVzZW50ZXI6IFRhYlByZXNlbnRlcixcbiAgICBwcml2YXRlIGZpbmRSZXBvc2l0b3J5OiBGaW5kUmVwb3NpdG9yeSxcbiAgICBwcml2YXRlIGNvbnNvbGVDbGllbnQ6IENvbnNvbGVDbGllbnQsXG4gICkge1xuICB9XG5cbiAgZ2V0S2V5d29yZCgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRSZXBvc2l0b3J5LmdldEtleXdvcmQoKTtcbiAgfVxuXG4gIHNldEtleXdvcmQoa2V5d29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kUmVwb3NpdG9yeS5zZXRLZXl3b3JkKGtleXdvcmQpO1xuICB9XG5cbiAgYXN5bmMgZmluZFN0YXJ0KCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIHJldHVybiB0aGlzLmNvbnNvbGVDbGllbnQuc2hvd0ZpbmQodGFiLmlkIGFzIG51bWJlcik7XG4gIH1cbn1cbiIsImltcG9ydCAncmVmbGVjdC1tZXRhZGF0YSc7XG5pbXBvcnQgeyBjb250YWluZXIgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgQXBwbGljYXRpb24gZnJvbSAnLi9BcHBsaWNhdGlvbic7XG5cbmNvbnN0IGFwcCA9IGNvbnRhaW5lci5yZXNvbHZlKEFwcGxpY2F0aW9uKTtcbmFwcC5ydW4oKTtcbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgQ29udGVudE1lc3NhZ2VMaXN0ZW5lciBmcm9tICcuL2luZnJhc3RydWN0dXJlcy9Db250ZW50TWVzc2FnZUxpc3RlbmVyJztcbmltcG9ydCBTZXR0aW5nQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL1NldHRpbmdDb250cm9sbGVyJztcbmltcG9ydCBWZXJzaW9uQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL1ZlcnNpb25Db250cm9sbGVyJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwbGljYXRpb24ge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbnRlbnRNZXNzYWdlTGlzdGVuZXI6IENvbnRlbnRNZXNzYWdlTGlzdGVuZXIsXG4gICAgcHJpdmF0ZSBzZXR0aW5nQ29udHJvbGxlcjogU2V0dGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSB2ZXJzaW9uQ29udHJvbGxlcjogVmVyc2lvbkNvbnRyb2xsZXIsXG4gICkge1xuICB9XG5cbiAgcnVuKCkge1xuICAgIHRoaXMuc2V0dGluZ0NvbnRyb2xsZXIucmVsb2FkKCk7XG5cbiAgICBicm93c2VyLnJ1bnRpbWUub25JbnN0YWxsZWQuYWRkTGlzdGVuZXIoKGRldGFpbHMpID0+IHtcbiAgICAgIGlmIChkZXRhaWxzLnJlYXNvbiAhPT0gJ2luc3RhbGwnICYmIGRldGFpbHMucmVhc29uICE9PSAndXBkYXRlJykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLnZlcnNpb25Db250cm9sbGVyLm5vdGlmeSgpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jb250ZW50TWVzc2FnZUxpc3RlbmVyLnJ1bigpO1xuICAgIGJyb3dzZXIuc3RvcmFnZS5vbkNoYW5nZWQuYWRkTGlzdGVuZXIoKGNoYW5nZXMsIGFyZWEpID0+IHtcbiAgICAgIGlmIChhcmVhICE9PSAnbG9jYWwnKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFuZ2VzLnNldHRpbmdzKSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ0NvbnRyb2xsZXIucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tICcuLi8uLi9zaGFyZWQvbWVzc2FnZXMnO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuLi8uLi9zaGFyZWQvb3BlcmF0aW9ucyc7XG5pbXBvcnQgQ29tcGxldGlvbkdyb3VwIGZyb20gJy4uL2RvbWFpbnMvQ29tcGxldGlvbkdyb3VwJztcbmltcG9ydCBDb21tYW5kQ29udHJvbGxlciBmcm9tICcuLi9jb250cm9sbGVycy9Db21tYW5kQ29udHJvbGxlcic7XG5pbXBvcnQgU2V0dGluZ0NvbnRyb2xsZXIgZnJvbSAnLi4vY29udHJvbGxlcnMvU2V0dGluZ0NvbnRyb2xsZXInO1xuaW1wb3J0IEZpbmRDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0ZpbmRDb250cm9sbGVyJztcbmltcG9ydCBBZGRvbkVuYWJsZWRDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0FkZG9uRW5hYmxlZENvbnRyb2xsZXInO1xuaW1wb3J0IExpbmtDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL0xpbmtDb250cm9sbGVyJztcbmltcG9ydCBPcGVyYXRpb25Db250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL09wZXJhdGlvbkNvbnRyb2xsZXInO1xuaW1wb3J0IE1hcmtDb250cm9sbGVyIGZyb20gJy4uL2NvbnRyb2xsZXJzL01hcmtDb250cm9sbGVyJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGVudE1lc3NhZ2VMaXN0ZW5lciB7XG4gIHByaXZhdGUgY29uc29sZVBvcnRzOiB7W3RhYklkOiBudW1iZXJdOiBicm93c2VyLnJ1bnRpbWUuUG9ydH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzZXR0aW5nQ29udHJvbGxlcjogU2V0dGluZ0NvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBjb21tYW5kQ29udHJvbGxlcjogQ29tbWFuZENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBmaW5kQ29udHJvbGxlcjogRmluZENvbnRyb2xsZXIsXG4gICAgcHJpdmF0ZSBhZGRvbkVuYWJsZWRDb250cm9sbGVyOiBBZGRvbkVuYWJsZWRDb250cm9sbGVyLFxuICAgIHByaXZhdGUgbGlua0NvbnRyb2xsZXI6IExpbmtDb250cm9sbGVyLFxuICAgIHByaXZhdGUgb3BlcmF0aW9uQ29udHJvbGxlcjogT3BlcmF0aW9uQ29udHJvbGxlcixcbiAgICBwcml2YXRlIG1hcmtDb250cm9sbGVyOiBNYXJrQ29udHJvbGxlcixcbiAgKSB7XG4gICAgdGhpcy5jb25zb2xlUG9ydHMgPSB7fTtcbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICBicm93c2VyLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChcbiAgICAgIG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBicm93c2VyLnJ1bnRpbWUuTWVzc2FnZVNlbmRlcixcbiAgICApID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHRoaXMub25NZXNzYWdlKG1lc3NhZ2UsIHNlbmRlci50YWIgYXMgYnJvd3Nlci50YWJzLlRhYik7XG4gICAgICAgIGlmICghKHJldCBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICBpZiAoIXNlbmRlci50YWIgfHwgIXNlbmRlci50YWIuaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShzZW5kZXIudGFiLmlkLCB7XG4gICAgICAgICAgICB0eXBlOiBtZXNzYWdlcy5DT05TT0xFX1NIT1dfRVJST1IsXG4gICAgICAgICAgICB0ZXh0OiBlLm1lc3NhZ2UsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoIXNlbmRlci50YWIgfHwgIXNlbmRlci50YWIuaWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJyb3dzZXIudGFicy5zZW5kTWVzc2FnZShzZW5kZXIudGFiLmlkLCB7XG4gICAgICAgICAgdHlwZTogbWVzc2FnZXMuQ09OU09MRV9TSE9XX0VSUk9SLFxuICAgICAgICAgIHRleHQ6IGUubWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgYnJvd3Nlci5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcih0aGlzLm9uQ29ubmVjdGVkLmJpbmQodGhpcykpO1xuICB9XG5cbiAgb25NZXNzYWdlKFxuICAgIG1lc3NhZ2U6IG1lc3NhZ2VzLk1lc3NhZ2UsIHNlbmRlclRhYjogYnJvd3Nlci50YWJzLlRhYixcbiAgKTogUHJvbWlzZTxhbnk+IHwgYW55IHtcbiAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xuICAgIGNhc2UgbWVzc2FnZXMuQ09OU09MRV9RVUVSWV9DT01QTEVUSU9OUzpcbiAgICAgIHJldHVybiB0aGlzLm9uQ29uc29sZVF1ZXJ5Q29tcGxldGlvbnMobWVzc2FnZS50ZXh0KTtcbiAgICBjYXNlIG1lc3NhZ2VzLkNPTlNPTEVfRU5URVJfQ09NTUFORDpcbiAgICAgIHJldHVybiB0aGlzLm9uQ29uc29sZUVudGVyQ29tbWFuZChtZXNzYWdlLnRleHQpO1xuICAgIGNhc2UgbWVzc2FnZXMuU0VUVElOR1NfUVVFUlk6XG4gICAgICByZXR1cm4gdGhpcy5vblNldHRpbmdzUXVlcnkoKTtcbiAgICBjYXNlIG1lc3NhZ2VzLkZJTkRfR0VUX0tFWVdPUkQ6XG4gICAgICByZXR1cm4gdGhpcy5vbkZpbmRHZXRLZXl3b3JkKCk7XG4gICAgY2FzZSBtZXNzYWdlcy5GSU5EX1NFVF9LRVlXT1JEOlxuICAgICAgcmV0dXJuIHRoaXMub25GaW5kU2V0S2V5d29yZChtZXNzYWdlLmtleXdvcmQpO1xuICAgIGNhc2UgbWVzc2FnZXMuQURET05fRU5BQkxFRF9SRVNQT05TRTpcbiAgICAgIHJldHVybiB0aGlzLm9uQWRkb25FbmFibGVkUmVzcG9uc2UobWVzc2FnZS5lbmFibGVkKTtcbiAgICBjYXNlIG1lc3NhZ2VzLk9QRU5fVVJMOlxuICAgICAgcmV0dXJuIHRoaXMub25PcGVuVXJsKFxuICAgICAgICBtZXNzYWdlLm5ld1RhYixcbiAgICAgICAgbWVzc2FnZS51cmwsXG4gICAgICAgIHNlbmRlclRhYi5pZCBhcyBudW1iZXIsXG4gICAgICAgIG1lc3NhZ2UuYmFja2dyb3VuZCk7XG4gICAgY2FzZSBtZXNzYWdlcy5CQUNLR1JPVU5EX09QRVJBVElPTjpcbiAgICAgIHJldHVybiB0aGlzLm9uQmFja2dyb3VuZE9wZXJhdGlvbihtZXNzYWdlLnJlcGVhdCwgbWVzc2FnZS5vcGVyYXRpb24pO1xuICAgIGNhc2UgbWVzc2FnZXMuTUFSS19TRVRfR0xPQkFMOlxuICAgICAgcmV0dXJuIHRoaXMub25NYXJrU2V0R2xvYmFsKG1lc3NhZ2Uua2V5LCBtZXNzYWdlLngsIG1lc3NhZ2UueSk7XG4gICAgY2FzZSBtZXNzYWdlcy5NQVJLX0pVTVBfR0xPQkFMOlxuICAgICAgcmV0dXJuIHRoaXMub25NYXJrSnVtcEdsb2JhbChtZXNzYWdlLmtleSk7XG4gICAgY2FzZSBtZXNzYWdlcy5DT05TT0xFX0ZSQU1FX01FU1NBR0U6XG4gICAgICByZXR1cm4gdGhpcy5vbkNvbnNvbGVGcmFtZU1lc3NhZ2UoXG4gICAgICAgIHNlbmRlclRhYi5pZCBhcyBudW1iZXIsIG1lc3NhZ2UubWVzc2FnZSxcbiAgICAgICk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcigndW5zdXBwb3J0ZWQgbWVzc2FnZTogJyArIG1lc3NhZ2UudHlwZSk7XG4gIH1cblxuICBhc3luYyBvbkNvbnNvbGVRdWVyeUNvbXBsZXRpb25zKGxpbmU6IHN0cmluZyk6IFByb21pc2U8Q29tcGxldGlvbkdyb3VwW10+IHtcbiAgICBjb25zdCBjb21wbGV0aW9ucyA9IGF3YWl0IHRoaXMuY29tbWFuZENvbnRyb2xsZXIuZ2V0Q29tcGxldGlvbnMobGluZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjb21wbGV0aW9ucyk7XG4gIH1cblxuICBvbkNvbnNvbGVFbnRlckNvbW1hbmQodGV4dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5jb21tYW5kQ29udHJvbGxlci5leGVjKHRleHQpO1xuICB9XG5cbiAgYXN5bmMgb25TZXR0aW5nc1F1ZXJ5KCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIChhd2FpdCB0aGlzLnNldHRpbmdDb250cm9sbGVyLmdldFNldHRpbmcoKSkudG9KU09OKCk7XG4gIH1cblxuICBvbkZpbmRHZXRLZXl3b3JkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZENvbnRyb2xsZXIuZ2V0S2V5d29yZCgpO1xuICB9XG5cbiAgb25GaW5kU2V0S2V5d29yZChrZXl3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmZpbmRDb250cm9sbGVyLnNldEtleXdvcmQoa2V5d29yZCk7XG4gIH1cblxuICBvbkFkZG9uRW5hYmxlZFJlc3BvbnNlKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkZG9uRW5hYmxlZENvbnRyb2xsZXIuaW5kaWNhdGUoZW5hYmxlZCk7XG4gIH1cblxuICBvbk9wZW5VcmwoXG4gICAgbmV3VGFiOiBib29sZWFuLCB1cmw6IHN0cmluZywgb3BlbmVySWQ6IG51bWJlciwgYmFja2dyb3VuZDogYm9vbGVhbixcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAobmV3VGFiKSB7XG4gICAgICByZXR1cm4gdGhpcy5saW5rQ29udHJvbGxlci5vcGVuTmV3VGFiKHVybCwgb3BlbmVySWQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5saW5rQ29udHJvbGxlci5vcGVuVG9UYWIodXJsLCBvcGVuZXJJZCk7XG4gIH1cblxuICBvbkJhY2tncm91bmRPcGVyYXRpb24oY291bnQ6IG51bWJlciwgb3A6IG9wZXJhdGlvbnMuT3BlcmF0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5vcGVyYXRpb25Db250cm9sbGVyLmV4ZWMoY291bnQsIG9wKTtcbiAgfVxuXG4gIG9uTWFya1NldEdsb2JhbChrZXk6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm1hcmtDb250cm9sbGVyLnNldEdsb2JhbChrZXksIHgsIHkpO1xuICB9XG5cbiAgb25NYXJrSnVtcEdsb2JhbChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubWFya0NvbnRyb2xsZXIuanVtcEdsb2JhbChrZXkpO1xuICB9XG5cbiAgb25Db25zb2xlRnJhbWVNZXNzYWdlKHRhYklkOiBudW1iZXIsIG1lc3NhZ2U6IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHBvcnQgPSB0aGlzLmNvbnNvbGVQb3J0c1t0YWJJZF07XG4gICAgaWYgKCFwb3J0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvcnQucG9zdE1lc3NhZ2UobWVzc2FnZSk7XG4gIH1cblxuICBvbkNvbm5lY3RlZChwb3J0OiBicm93c2VyLnJ1bnRpbWUuUG9ydCk6IHZvaWQge1xuICAgIGlmIChwb3J0Lm5hbWUgIT09ICd2aW12aXhlbi1jb25zb2xlJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChwb3J0LnNlbmRlciAmJiBwb3J0LnNlbmRlci50YWIgJiYgcG9ydC5zZW5kZXIudGFiLmlkKSB7XG4gICAgICBjb25zdCBpZCA9IHBvcnQuc2VuZGVyLnRhYi5pZDtcbiAgICAgIHRoaXMuY29uc29sZVBvcnRzW2lkXSA9IHBvcnQ7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IENvbXBsZXRpb25zVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9Db21wbGV0aW9uc1VzZUNhc2UnO1xuaW1wb3J0IENvbW1hbmRVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL0NvbW1hbmRVc2VDYXNlJztcbmltcG9ydCBDb21wbGV0aW9uR3JvdXAgZnJvbSAnLi4vZG9tYWlucy9Db21wbGV0aW9uR3JvdXAnO1xuXG5jb25zdCB0cmltU3RhcnQgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAvLyBOT1RFIFN0cmluZy50cmltU3RhcnQgaXMgYXZhaWxhYmxlIG9uIEZpcmVmb3ggNjFcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sICcnKTtcbn07XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1hbmRDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb21wbGV0aW9uc1VzZUNhc2U6IENvbXBsZXRpb25zVXNlQ2FzZSxcbiAgICBwcml2YXRlIGNvbW1hbmRJbmRpY2F0b3I6IENvbW1hbmRVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIGdldENvbXBsZXRpb25zKGxpbmU6IHN0cmluZyk6IFByb21pc2U8Q29tcGxldGlvbkdyb3VwW10+IHtcbiAgICBjb25zdCB0cmltbWVkID0gdHJpbVN0YXJ0KGxpbmUpO1xuICAgIGNvbnN0IHdvcmRzID0gdHJpbW1lZC5zcGxpdCgvICsvKTtcbiAgICBjb25zdCBuYW1lID0gd29yZHNbMF07XG4gICAgaWYgKHdvcmRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGlvbnNVc2VDYXNlLnF1ZXJ5Q29uc29sZUNvbW1hbmQobmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IGtleXdvcmRzID0gdHJpbVN0YXJ0KHRyaW1tZWQuc2xpY2UobmFtZS5sZW5ndGgpKTtcbiAgICBzd2l0Y2ggKHdvcmRzWzBdKSB7XG4gICAgY2FzZSAnbyc6XG4gICAgY2FzZSAnb3Blbic6XG4gICAgY2FzZSAndCc6XG4gICAgY2FzZSAndGFib3Blbic6XG4gICAgY2FzZSAndyc6XG4gICAgY2FzZSAnd2lub3Blbic6XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uc1VzZUNhc2UucXVlcnlPcGVuKG5hbWUsIGtleXdvcmRzKTtcbiAgICBjYXNlICdiJzpcbiAgICBjYXNlICdidWZmZXInOlxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGlvbnNVc2VDYXNlLnF1ZXJ5QnVmZmVyKG5hbWUsIGtleXdvcmRzKTtcbiAgICBjYXNlICdiZCc6XG4gICAgY2FzZSAnYmRlbCc6XG4gICAgY2FzZSAnYmRlbGV0ZSc6XG4gICAgY2FzZSAnYmRlbGV0ZXMnOlxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGlvbnNVc2VDYXNlLnF1ZXJ5QmRlbGV0ZShuYW1lLCBrZXl3b3Jkcyk7XG4gICAgY2FzZSAnYmQhJzpcbiAgICBjYXNlICdiZGVsISc6XG4gICAgY2FzZSAnYmRlbGV0ZSEnOlxuICAgIGNhc2UgJ2JkZWxldGVzISc6XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uc1VzZUNhc2UucXVlcnlCZGVsZXRlRm9yY2UobmFtZSwga2V5d29yZHMpO1xuICAgIGNhc2UgJ3NldCc6XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0aW9uc1VzZUNhc2UucXVlcnlTZXQobmFtZSwga2V5d29yZHMpO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb21wbGV4aXR5XG4gIGV4ZWMobGluZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0cmltbWVkID0gdHJpbVN0YXJ0KGxpbmUpO1xuICAgIGNvbnN0IHdvcmRzID0gdHJpbW1lZC5zcGxpdCgvICsvKTtcbiAgICBjb25zdCBuYW1lID0gd29yZHNbMF07XG4gICAgaWYgKHdvcmRzWzBdLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGtleXdvcmRzID0gdHJpbVN0YXJ0KHRyaW1tZWQuc2xpY2UobmFtZS5sZW5ndGgpKTtcbiAgICBzd2l0Y2ggKHdvcmRzWzBdKSB7XG4gICAgY2FzZSAnbyc6XG4gICAgY2FzZSAnb3Blbic6XG4gICAgICByZXR1cm4gdGhpcy5jb21tYW5kSW5kaWNhdG9yLm9wZW4oa2V5d29yZHMpO1xuICAgIGNhc2UgJ3QnOlxuICAgIGNhc2UgJ3RhYm9wZW4nOlxuICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEluZGljYXRvci50YWJvcGVuKGtleXdvcmRzKTtcbiAgICBjYXNlICd3JzpcbiAgICBjYXNlICd3aW5vcGVuJzpcbiAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRJbmRpY2F0b3Iud2lub3BlbihrZXl3b3Jkcyk7XG4gICAgY2FzZSAnYic6XG4gICAgY2FzZSAnYnVmZmVyJzpcbiAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRJbmRpY2F0b3IuYnVmZmVyKGtleXdvcmRzKTtcbiAgICBjYXNlICdiZCc6XG4gICAgY2FzZSAnYmRlbCc6XG4gICAgY2FzZSAnYmRlbGV0ZSc6XG4gICAgICByZXR1cm4gdGhpcy5jb21tYW5kSW5kaWNhdG9yLmJkZWxldGUoZmFsc2UsIGtleXdvcmRzKTtcbiAgICBjYXNlICdiZCEnOlxuICAgIGNhc2UgJ2JkZWwhJzpcbiAgICBjYXNlICdiZGVsZXRlISc6XG4gICAgICByZXR1cm4gdGhpcy5jb21tYW5kSW5kaWNhdG9yLmJkZWxldGUodHJ1ZSwga2V5d29yZHMpO1xuICAgIGNhc2UgJ2JkZWxldGVzJzpcbiAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRJbmRpY2F0b3IuYmRlbGV0ZXMoZmFsc2UsIGtleXdvcmRzKTtcbiAgICBjYXNlICdiZGVsZXRlcyEnOlxuICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEluZGljYXRvci5iZGVsZXRlcyh0cnVlLCBrZXl3b3Jkcyk7XG4gICAgY2FzZSAnYWRkYm9va21hcmsnOlxuICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEluZGljYXRvci5hZGRib29rbWFyayhrZXl3b3Jkcyk7XG4gICAgY2FzZSAncSc6XG4gICAgY2FzZSAncXVpdCc6XG4gICAgICByZXR1cm4gdGhpcy5jb21tYW5kSW5kaWNhdG9yLnF1aXQoKTtcbiAgICBjYXNlICdxYSc6XG4gICAgY2FzZSAncXVpdGFsbCc6XG4gICAgICByZXR1cm4gdGhpcy5jb21tYW5kSW5kaWNhdG9yLnF1aXRBbGwoKTtcbiAgICBjYXNlICdzZXQnOlxuICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEluZGljYXRvci5zZXQoa2V5d29yZHMpO1xuICAgIGNhc2UgJ2gnOlxuICAgIGNhc2UgJ2hlbHAnOlxuICAgICAgcmV0dXJuIHRoaXMuY29tbWFuZEluZGljYXRvci5oZWxwKCk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcih3b3Jkc1swXSArICcgY29tbWFuZCBpcyBub3QgZGVmaW5lZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IENvbXBsZXRpb25Hcm91cCBmcm9tICcuLi9kb21haW5zL0NvbXBsZXRpb25Hcm91cCc7XG5pbXBvcnQgQ29tbWFuZERvY3MgZnJvbSAnLi4vZG9tYWlucy9Db21tYW5kRG9jcyc7XG5pbXBvcnQgQ29tcGxldGlvbnNSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9Db21wbGV0aW9uc1JlcG9zaXRvcnknO1xuaW1wb3J0ICogYXMgZmlsdGVycyBmcm9tICcuL2ZpbHRlcnMnO1xuaW1wb3J0IFNldHRpbmdSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5pbXBvcnQgVGFiUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvVGFiUHJlc2VudGVyJztcbmltcG9ydCBQcm9wZXJ0aWVzIGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9Qcm9wZXJ0aWVzJztcblxuY29uc3QgQ09NUExFVElPTl9JVEVNX0xJTUlUID0gMTA7XG5cbnR5cGUgVGFiID0gYnJvd3Nlci50YWJzLlRhYjtcbnR5cGUgSGlzdG9yeUl0ZW0gPSBicm93c2VyLmhpc3RvcnkuSGlzdG9yeUl0ZW07XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBsZXRpb25zVXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiUHJlc2VudGVyOiBUYWJQcmVzZW50ZXIsXG4gICAgcHJpdmF0ZSBjb21wbGV0aW9uc1JlcG9zaXRvcnk6IENvbXBsZXRpb25zUmVwb3NpdG9yeSxcbiAgICBwcml2YXRlIHNldHRpbmdSZXBvc2l0b3J5OiBTZXR0aW5nUmVwb3NpdG9yeSxcbiAgKSB7XG4gIH1cblxuICBxdWVyeUNvbnNvbGVDb21tYW5kKHByZWZpeDogc3RyaW5nKTogUHJvbWlzZTxDb21wbGV0aW9uR3JvdXBbXT4ge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhDb21tYW5kRG9jcyk7XG4gICAgY29uc3QgaXRlbXMgPSBrZXlzXG4gICAgICAuZmlsdGVyKG5hbWUgPT4gbmFtZS5zdGFydHNXaXRoKHByZWZpeCkpXG4gICAgICAubWFwKG5hbWUgPT4gKHtcbiAgICAgICAgY2FwdGlvbjogbmFtZSxcbiAgICAgICAgY29udGVudDogbmFtZSxcbiAgICAgICAgdXJsOiBDb21tYW5kRG9jc1tuYW1lXSxcbiAgICAgIH0pKTtcblxuICAgIGlmIChpdGVtcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoW10pO1xuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFt7IG5hbWU6ICdDb25zb2xlIENvbW1hbmQnLCBpdGVtcyB9XSk7XG4gIH1cblxuICBhc3luYyBxdWVyeU9wZW4obmFtZTogc3RyaW5nLCBrZXl3b3Jkczogc3RyaW5nKTogUHJvbWlzZTxDb21wbGV0aW9uR3JvdXBbXT4ge1xuICAgIC8vIFRPRE8gVGhpcyBsb2dpYyBjb250YWlucyB2aWV3IGVudGl0aWVzLiAgVGhleSBzaG91bGQgYmUgZGVmaW5lZCBvblxuICAgIC8vIGNvbnRlbnQgc2NyaXB0XG5cbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHRoaXMuc2V0dGluZ1JlcG9zaXRvcnkuZ2V0KCk7XG4gICAgY29uc3QgZ3JvdXBzOiBDb21wbGV0aW9uR3JvdXBbXSA9IFtdO1xuXG4gICAgY29uc3QgY29tcGxldGUgPSBzZXR0aW5ncy5wcm9wZXJ0aWVzLmNvbXBsZXRlO1xuICAgIGZvciAoY29uc3QgYyBvZiBjb21wbGV0ZSkge1xuICAgICAgaWYgKGMgPT09ICdzJykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICBjb25zdCBlbmdpbmVzID0gYXdhaXQgdGhpcy5xdWVyeVNlYXJjaEVuZ2luZUl0ZW1zKG5hbWUsIGtleXdvcmRzKTtcbiAgICAgICAgaWYgKGVuZ2luZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdyb3Vwcy5wdXNoKHsgbmFtZTogJ1NlYXJjaCBFbmdpbmVzJywgaXRlbXM6IGVuZ2luZXMgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYnJvd3Nlci5oaXN0b3J5IG5vdCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgICAgfSBlbHNlIGlmIChjID09PSAnaCcgJiYgdHlwZW9mIGJyb3dzZXIuaGlzdG9yeSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgICAgY29uc3QgaGlzdG9yaWVzID0gYXdhaXQgdGhpcy5xdWVyeUhpc3RvcnlJdGVtcyhuYW1lLCBrZXl3b3Jkcyk7XG4gICAgICAgIGlmIChoaXN0b3JpZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdyb3Vwcy5wdXNoKHsgbmFtZTogJ0hpc3RvcnknLCBpdGVtczogaGlzdG9yaWVzIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIGJyb3dzZXIuYm9va21hcmtzIG5vdCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgICAgfSBlbHNlIGlmIChjID09PSAnYicgJiYgdHlwZW9mIGJyb3dzZXIuYm9va21hcmtzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYXdhaXQtaW4tbG9vcFxuICAgICAgICBjb25zdCBib29rbWFya3MgPSBhd2FpdCB0aGlzLnF1ZXJ5Qm9va21hcmtJdGVtcyhuYW1lLCBrZXl3b3Jkcyk7XG4gICAgICAgIGlmIChib29rbWFya3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGdyb3Vwcy5wdXNoKHsgbmFtZTogJ0Jvb2ttYXJrcycsIGl0ZW1zOiBib29rbWFya3MgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdyb3VwcztcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtc3RhdGVtZW50c1xuICBhc3luYyBxdWVyeUJ1ZmZlcihcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAga2V5d29yZHM6IHN0cmluZyxcbiAgKTogUHJvbWlzZTxDb21wbGV0aW9uR3JvdXBbXT4ge1xuICAgIGNvbnN0IGxhc3RJZCA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldExhc3RTZWxlY3RlZElkKCk7XG4gICAgY29uc3QgdHJpbW1lZCA9IGtleXdvcmRzLnRyaW0oKTtcbiAgICBsZXQgdGFiczogVGFiW10gPSBbXTtcbiAgICBpZiAodHJpbW1lZC5sZW5ndGggPiAwICYmICFpc05hTihOdW1iZXIodHJpbW1lZCkpKSB7XG4gICAgICBjb25zdCBhbGwgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRBbGwoKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQodHJpbW1lZCwgMTApIC0gMTtcbiAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgYWxsLmxlbmd0aCkge1xuICAgICAgICB0YWJzID0gW2FsbFtpbmRleF1dO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHJpbW1lZCA9PT0gJyUnKSB7XG4gICAgICBjb25zdCBhbGwgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRBbGwoKTtcbiAgICAgIGNvbnN0IHRhYiA9IGFsbC5maW5kKHQgPT4gdC5hY3RpdmUpIGFzIFRhYjtcbiAgICAgIHRhYnMgPSBbdGFiXTtcbiAgICB9IGVsc2UgaWYgKHRyaW1tZWQgPT09ICcjJykge1xuICAgICAgaWYgKHR5cGVvZiBsYXN0SWQgIT09ICd1bmRlZmluZWQnICYmIGxhc3RJZCAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCBhbGwgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRBbGwoKTtcbiAgICAgICAgY29uc3QgdGFiID0gYWxsLmZpbmQodCA9PiB0LmlkID09PSBsYXN0SWQpIGFzIFRhYjtcbiAgICAgICAgdGFicyA9IFt0YWJdO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0YWJzID0gYXdhaXQgdGhpcy5jb21wbGV0aW9uc1JlcG9zaXRvcnkucXVlcnlUYWJzKGtleXdvcmRzLCBmYWxzZSk7XG4gICAgfVxuICAgIGNvbnN0IGZsYWcgPSAodGFiOiBUYWIpID0+IHtcbiAgICAgIGlmICh0YWIuYWN0aXZlKSB7XG4gICAgICAgIHJldHVybiAnJSc7XG4gICAgICB9IGVsc2UgaWYgKHRhYi5pZCA9PT0gbGFzdElkKSB7XG4gICAgICAgIHJldHVybiAnIyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gJyAnO1xuICAgIH07XG4gICAgY29uc3QgaXRlbXMgPSB0YWJzLm1hcCh0YWIgPT4gKHtcbiAgICAgIGNhcHRpb246IHRhYi5pbmRleCArIDEgKyAnOiAnICsgZmxhZyh0YWIpICsgJyAnICsgdGFiLnRpdGxlLFxuICAgICAgY29udGVudDogbmFtZSArICcgJyArIHRhYi50aXRsZSxcbiAgICAgIHVybDogdGFiLnVybCxcbiAgICAgIGljb246IHRhYi5mYXZJY29uVXJsLFxuICAgIH0pKTtcbiAgICBpZiAoaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFtdKTtcbiAgICB9XG4gICAgcmV0dXJuIFt7IG5hbWU6ICdCdWZmZXJzJywgaXRlbXMgfV07XG4gIH1cblxuICBxdWVyeUJkZWxldGUobmFtZTogc3RyaW5nLCBrZXl3b3Jkczogc3RyaW5nKTogUHJvbWlzZTxDb21wbGV0aW9uR3JvdXBbXT4ge1xuICAgIHJldHVybiB0aGlzLnF1ZXJ5VGFicyhuYW1lLCB0cnVlLCBrZXl3b3Jkcyk7XG4gIH1cblxuICBxdWVyeUJkZWxldGVGb3JjZShcbiAgICBuYW1lOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmcsXG4gICk6IFByb21pc2U8Q29tcGxldGlvbkdyb3VwW10+IHtcbiAgICByZXR1cm4gdGhpcy5xdWVyeVRhYnMobmFtZSwgZmFsc2UsIGtleXdvcmRzKTtcbiAgfVxuXG4gIHF1ZXJ5U2V0KG5hbWU6IHN0cmluZywga2V5d29yZHM6IHN0cmluZyk6IFByb21pc2U8Q29tcGxldGlvbkdyb3VwW10+IHtcbiAgICBjb25zdCBpdGVtcyA9IFByb3BlcnRpZXMuZGVmcygpLm1hcCgoZGVmKSA9PiB7XG4gICAgICBpZiAoZGVmLnR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNhcHRpb246IGRlZi5uYW1lLFxuICAgICAgICAgICAgY29udGVudDogbmFtZSArICcgJyArIGRlZi5uYW1lLFxuICAgICAgICAgICAgdXJsOiAnRW5hYmxlICcgKyBkZWYuZGVzY3JpcHRpb24sXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgY2FwdGlvbjogJ25vJyArIGRlZi5uYW1lLFxuICAgICAgICAgICAgY29udGVudDogbmFtZSArICcgbm8nICsgZGVmLm5hbWUsXG4gICAgICAgICAgICB1cmw6ICdEaXNhYmxlICcgKyBkZWYuZGVzY3JpcHRpb25cbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgY2FwdGlvbjogZGVmLm5hbWUsXG4gICAgICAgICAgY29udGVudDogbmFtZSArICcgJyArIGRlZi5uYW1lLFxuICAgICAgICAgIHVybDogJ1NldCAnICsgZGVmLmRlc2NyaXB0aW9uLFxuICAgICAgICB9XG4gICAgICBdO1xuICAgIH0pO1xuICAgIGxldCBmbGF0dGVuID0gaXRlbXMucmVkdWNlKChhY2MsIHZhbCkgPT4gYWNjLmNvbmNhdCh2YWwpLCBbXSk7XG4gICAgZmxhdHRlbiA9IGZsYXR0ZW4uZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS5jYXB0aW9uLnN0YXJ0c1dpdGgoa2V5d29yZHMpO1xuICAgIH0pO1xuICAgIGlmIChmbGF0dGVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoXG4gICAgICBbeyBuYW1lOiAnUHJvcGVydGllcycsIGl0ZW1zOiBmbGF0dGVuIH1dLFxuICAgICk7XG4gIH1cblxuICBhc3luYyBxdWVyeVRhYnMoXG4gICAgbmFtZTogc3RyaW5nLCBleGNsdWRlUGlubmVkOiBib29sZWFuLCBhcmdzOiBzdHJpbmcsXG4gICk6IFByb21pc2U8Q29tcGxldGlvbkdyb3VwW10+IHtcbiAgICBjb25zdCB0YWJzID0gYXdhaXQgdGhpcy5jb21wbGV0aW9uc1JlcG9zaXRvcnkucXVlcnlUYWJzKGFyZ3MsIGV4Y2x1ZGVQaW5uZWQpO1xuICAgIGNvbnN0IGl0ZW1zID0gdGFicy5tYXAodGFiID0+ICh7XG4gICAgICBjYXB0aW9uOiB0YWIudGl0bGUsXG4gICAgICBjb250ZW50OiBuYW1lICsgJyAnICsgdGFiLnRpdGxlLFxuICAgICAgdXJsOiB0YWIudXJsLFxuICAgICAgaWNvbjogdGFiLmZhdkljb25VcmxcbiAgICB9KSk7XG4gICAgaWYgKGl0ZW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShbXSk7XG4gICAgfVxuICAgIHJldHVybiBbeyBuYW1lOiAnQnVmZmVycycsIGl0ZW1zIH1dO1xuICB9XG5cbiAgYXN5bmMgcXVlcnlTZWFyY2hFbmdpbmVJdGVtcyhuYW1lOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXR0aW5ncyA9IGF3YWl0IHRoaXMuc2V0dGluZ1JlcG9zaXRvcnkuZ2V0KCk7XG4gICAgY29uc3QgZW5naW5lcyA9IE9iamVjdC5rZXlzKHNldHRpbmdzLnNlYXJjaC5lbmdpbmVzKVxuICAgICAgLmZpbHRlcihrZXkgPT4ga2V5LnN0YXJ0c1dpdGgoa2V5d29yZHMpKTtcbiAgICByZXR1cm4gZW5naW5lcy5tYXAoa2V5ID0+ICh7XG4gICAgICBjYXB0aW9uOiBrZXksXG4gICAgICBjb250ZW50OiBuYW1lICsgJyAnICsga2V5LFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIHF1ZXJ5SGlzdG9yeUl0ZW1zKG5hbWU6IHN0cmluZywga2V5d29yZHM6IHN0cmluZykge1xuICAgIGxldCBoaXN0b3JpZXMgPSBhd2FpdCB0aGlzLmNvbXBsZXRpb25zUmVwb3NpdG9yeS5xdWVyeUhpc3RvcmllcyhrZXl3b3Jkcyk7XG4gICAgaGlzdG9yaWVzID0gW2hpc3Rvcmllc11cbiAgICAgIC5tYXAoZmlsdGVycy5maWx0ZXJCbGFua1RpdGxlKVxuICAgICAgLm1hcChmaWx0ZXJzLmZpbHRlckh0dHApXG4gICAgICAubWFwKGZpbHRlcnMuZmlsdGVyQnlUYWlsaW5nU2xhc2gpXG4gICAgICAubWFwKHBhZ2VzID0+IGZpbHRlcnMuZmlsdGVyQnlQYXRobmFtZShwYWdlcywgQ09NUExFVElPTl9JVEVNX0xJTUlUKSlcbiAgICAgIC5tYXAocGFnZXMgPT4gZmlsdGVycy5maWx0ZXJCeU9yaWdpbihwYWdlcywgQ09NUExFVElPTl9JVEVNX0xJTUlUKSlbMF1cbiAgICAgIC5zb3J0KCh4OiBIaXN0b3J5SXRlbSwgeTogSGlzdG9yeUl0ZW0pOiBudW1iZXIgPT4ge1xuICAgICAgICByZXR1cm4gTnVtYmVyKHkudmlzaXRDb3VudCkgLSBOdW1iZXIoeC52aXNpdENvdW50KTtcbiAgICAgIH0pXG4gICAgICAuc2xpY2UoMCwgQ09NUExFVElPTl9JVEVNX0xJTUlUKTtcbiAgICByZXR1cm4gaGlzdG9yaWVzLm1hcChwYWdlID0+ICh7XG4gICAgICBjYXB0aW9uOiBwYWdlLnRpdGxlLFxuICAgICAgY29udGVudDogbmFtZSArICcgJyArIHBhZ2UudXJsLFxuICAgICAgdXJsOiBwYWdlLnVybFxuICAgIH0pKTtcbiAgfVxuXG4gIGFzeW5jIHF1ZXJ5Qm9va21hcmtJdGVtcyhuYW1lOiBzdHJpbmcsIGtleXdvcmRzOiBzdHJpbmcpIHtcbiAgICBjb25zdCBib29rbWFya3MgPSBhd2FpdCB0aGlzLmNvbXBsZXRpb25zUmVwb3NpdG9yeS5xdWVyeUJvb2ttYXJrcyhrZXl3b3Jkcyk7XG4gICAgcmV0dXJuIGJvb2ttYXJrcy5zbGljZSgwLCBDT01QTEVUSU9OX0lURU1fTElNSVQpXG4gICAgICAubWFwKHBhZ2UgPT4gKHtcbiAgICAgICAgY2FwdGlvbjogcGFnZS50aXRsZSxcbiAgICAgICAgY29udGVudDogbmFtZSArICcgJyArIHBhZ2UudXJsLFxuICAgICAgICB1cmw6IHBhZ2UudXJsXG4gICAgICB9KSk7XG4gIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc2V0OiAnU2V0IGEgdmFsdWUgb2YgdGhlIHByb3BlcnR5JyxcbiAgb3BlbjogJ09wZW4gYSBVUkwgb3Igc2VhcmNoIGJ5IGtleXdvcmRzIGluIGN1cnJlbnQgdGFiJyxcbiAgdGFib3BlbjogJ09wZW4gYSBVUkwgb3Igc2VhcmNoIGJ5IGtleXdvcmRzIGluIG5ldyB0YWInLFxuICB3aW5vcGVuOiAnT3BlbiBhIFVSTCBvciBzZWFyY2ggYnkga2V5d29yZHMgaW4gbmV3IHdpbmRvdycsXG4gIGJ1ZmZlcjogJ1NlbGVjdCB0YWJzIGJ5IG1hdGNoZWQga2V5d29yZHMnLFxuICBiZGVsZXRlOiAnQ2xvc2UgYSBjZXJ0YWluIHRhYiBtYXRjaGVkIGJ5IGtleXdvcmRzJyxcbiAgYmRlbGV0ZXM6ICdDbG9zZSBhbGwgdGFicyBtYXRjaGVkIGJ5IGtleXdvcmRzJyxcbiAgcXVpdDogJ0Nsb3NlIHRoZSBjdXJyZW50IHRhYicsXG4gIHF1aXRhbGw6ICdDbG9zZSBhbGwgdGFicycsXG4gIGhlbHA6ICdPcGVuIFZpbSBWaXhlbiBoZWxwIGluIG5ldyB0YWInLFxufSBhcyB7W2tleTogc3RyaW5nXTogc3RyaW5nfTtcbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5cbnR5cGUgVGFiID0gYnJvd3Nlci50YWJzLlRhYjtcbnR5cGUgQm9va21hcmtUcmVlTm9kZSA9IGJyb3dzZXIuYm9va21hcmtzLkJvb2ttYXJrVHJlZU5vZGU7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBsZXRpb25zUmVwb3NpdG9yeSB7XG4gIGFzeW5jIHF1ZXJ5Qm9va21hcmtzKGtleXdvcmRzOiBzdHJpbmcpOiBQcm9taXNlPEJvb2ttYXJrVHJlZU5vZGVbXT4ge1xuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgYnJvd3Nlci5ib29rbWFya3Muc2VhcmNoKHsgcXVlcnk6IGtleXdvcmRzIH0pO1xuICAgIHJldHVybiBpdGVtcy5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgIGlmICghaXRlbS51cmwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHVybCA9IHVuZGVmaW5lZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIHVybCA9IG5ldyBVUkwoaXRlbS51cmwpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gaXRlbS50eXBlID09PSAnYm9va21hcmsnICYmIHVybC5wcm90b2NvbCAhPT0gJ3BsYWNlOic7XG4gICAgfSk7XG4gIH1cblxuICBxdWVyeUhpc3RvcmllcyhrZXl3b3Jkczogc3RyaW5nKTogUHJvbWlzZTxicm93c2VyLmhpc3RvcnkuSGlzdG9yeUl0ZW1bXT4ge1xuICAgIHJldHVybiBicm93c2VyLmhpc3Rvcnkuc2VhcmNoKHtcbiAgICAgIHRleHQ6IGtleXdvcmRzLFxuICAgICAgc3RhcnRUaW1lOiAwLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgcXVlcnlUYWJzKGtleXdvcmRzOiBzdHJpbmcsIGV4Y2x1ZGVQaW5uZWQ6IGJvb2xlYW4pOiBQcm9taXNlPFRhYltdPiB7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IGJyb3dzZXIudGFicy5xdWVyeSh7IGN1cnJlbnRXaW5kb3c6IHRydWUgfSk7XG4gICAgcmV0dXJuIHRhYnMuZmlsdGVyKCh0KSA9PiB7XG4gICAgICByZXR1cm4gdC51cmwgJiYgdC51cmwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3Jkcy50b0xvd2VyQ2FzZSgpKSB8fFxuICAgICAgICB0LnRpdGxlICYmIHQudGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhrZXl3b3Jkcy50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KS5maWx0ZXIoKHQpID0+IHtcbiAgICAgIHJldHVybiAhKGV4Y2x1ZGVQaW5uZWQgJiYgdC5waW5uZWQpO1xuICAgIH0pO1xuICB9XG59XG4iLCJ0eXBlIEl0ZW0gPSBicm93c2VyLmhpc3RvcnkuSGlzdG9yeUl0ZW07XG5cbmNvbnN0IGZpbHRlckh0dHAgPSAoaXRlbXM6IEl0ZW1bXSk6IEl0ZW1bXSA9PiB7XG4gIGNvbnN0IGh0dHBzSG9zdHMgPSBpdGVtcy5tYXAoeCA9PiBuZXcgVVJMKHgudXJsIGFzIHN0cmluZykpXG4gICAgLmZpbHRlcih4ID0+IHgucHJvdG9jb2wgPT09ICdodHRwczonKVxuICAgIC5tYXAoeCA9PiB4Lmhvc3QpO1xuICBjb25zdCBob3N0c1NldCA9IG5ldyBTZXQoaHR0cHNIb3N0cyk7XG5cbiAgcmV0dXJuIGl0ZW1zLmZpbHRlcigoaXRlbTogSXRlbSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaXRlbS51cmwgYXMgc3RyaW5nKTtcbiAgICByZXR1cm4gdXJsLnByb3RvY29sID09PSAnaHR0cHM6JyB8fCAhaG9zdHNTZXQuaGFzKHVybC5ob3N0KTtcbiAgfSk7XG59O1xuXG5jb25zdCBmaWx0ZXJCbGFua1RpdGxlID0gKGl0ZW1zOiBJdGVtW10pOiBJdGVtW10gPT4ge1xuICByZXR1cm4gaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50aXRsZSAmJiBpdGVtLnRpdGxlICE9PSAnJyk7XG59O1xuXG5jb25zdCBmaWx0ZXJCeVRhaWxpbmdTbGFzaCA9IChpdGVtczogSXRlbVtdKTogSXRlbVtdID0+IHtcbiAgY29uc3QgdXJscyA9IGl0ZW1zLm1hcChpdGVtID0+IG5ldyBVUkwoaXRlbS51cmwgYXMgc3RyaW5nKSk7XG4gIGNvbnN0IHNpbXBsZVBhdGhzID0gdXJsc1xuICAgIC5maWx0ZXIodXJsID0+IHVybC5oYXNoID09PSAnJyAmJiB1cmwuc2VhcmNoID09PSAnJylcbiAgICAubWFwKHVybCA9PiB1cmwub3JpZ2luICsgdXJsLnBhdGhuYW1lKTtcbiAgY29uc3QgcGF0aHNTZXQgPSBuZXcgU2V0KHNpbXBsZVBhdGhzKTtcblxuICByZXR1cm4gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChpdGVtLnVybCBhcyBzdHJpbmcpO1xuICAgIGlmICh1cmwuaGFzaCAhPT0gJycgfHwgdXJsLnNlYXJjaCAhPT0gJycgfHxcbiAgICAgIHVybC5wYXRobmFtZS5zbGljZSgtMSkgIT09ICcvJykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiAhcGF0aHNTZXQuaGFzKHVybC5vcmlnaW4gKyB1cmwucGF0aG5hbWUuc2xpY2UoMCwgLTEpKTtcbiAgfSk7XG59O1xuXG5jb25zdCBmaWx0ZXJCeVBhdGhuYW1lID0gKGl0ZW1zOiBJdGVtW10sIG1pbjogbnVtYmVyKTogSXRlbVtdID0+IHtcbiAgY29uc3QgaGFzaDoge1trZXk6IHN0cmluZ106IEl0ZW19ID0ge307XG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoaXRlbS51cmwgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBwYXRobmFtZSA9IHVybC5vcmlnaW4gKyB1cmwucGF0aG5hbWU7XG4gICAgaWYgKCFoYXNoW3BhdGhuYW1lXSkge1xuICAgICAgaGFzaFtwYXRobmFtZV0gPSBpdGVtO1xuICAgIH0gZWxzZSBpZiAoKGhhc2hbcGF0aG5hbWVdLnVybCBhcyBzdHJpbmcpLmxlbmd0aCA+XG4gICAgICAoaXRlbS51cmwgYXMgc3RyaW5nKS5sZW5ndGgpIHtcbiAgICAgIGhhc2hbcGF0aG5hbWVdID0gaXRlbTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZmlsdGVyZWQgPSBPYmplY3QudmFsdWVzKGhhc2gpO1xuICBpZiAoZmlsdGVyZWQubGVuZ3RoIDwgbWluKSB7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG4gIHJldHVybiBmaWx0ZXJlZDtcbn07XG5cbmNvbnN0IGZpbHRlckJ5T3JpZ2luID0gKGl0ZW1zOiBJdGVtW10sIG1pbjogbnVtYmVyKTogSXRlbVtdID0+IHtcbiAgY29uc3QgaGFzaDoge1trZXk6IHN0cmluZ106IEl0ZW19ID0ge307XG4gIGZvciAoY29uc3QgaXRlbSBvZiBpdGVtcykge1xuICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBVUkwoaXRlbS51cmwgYXMgc3RyaW5nKS5vcmlnaW47XG4gICAgaWYgKCFoYXNoW29yaWdpbl0pIHtcbiAgICAgIGhhc2hbb3JpZ2luXSA9IGl0ZW07XG4gICAgfSBlbHNlIGlmICgoaGFzaFtvcmlnaW5dLnVybCBhcyBzdHJpbmcpLmxlbmd0aCA+XG4gICAgICAoaXRlbS51cmwgYXMgc3RyaW5nKS5sZW5ndGgpIHtcbiAgICAgIGhhc2hbb3JpZ2luXSA9IGl0ZW07XG4gICAgfVxuICB9XG4gIGNvbnN0IGZpbHRlcmVkID0gT2JqZWN0LnZhbHVlcyhoYXNoKTtcbiAgaWYgKGZpbHRlcmVkLmxlbmd0aCA8IG1pbikge1xuICAgIHJldHVybiBpdGVtcztcbiAgfVxuICByZXR1cm4gZmlsdGVyZWQ7XG59O1xuXG5leHBvcnQge1xuICBmaWx0ZXJIdHRwLCBmaWx0ZXJCbGFua1RpdGxlLCBmaWx0ZXJCeVRhaWxpbmdTbGFzaCxcbiAgZmlsdGVyQnlQYXRobmFtZSwgZmlsdGVyQnlPcmlnaW5cbn07XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0ICogYXMgb3BlcmF0aW9ucyBmcm9tICcuLi8uLi9zaGFyZWQvb3BlcmF0aW9ucyc7XG5pbXBvcnQgKiBhcyBwYXJzZXJzIGZyb20gJy4vcGFyc2Vycyc7XG5pbXBvcnQgKiBhcyB1cmxzIGZyb20gJy4uLy4uL3NoYXJlZC91cmxzJztcbmltcG9ydCBUYWJQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9UYWJQcmVzZW50ZXInO1xuaW1wb3J0IFdpbmRvd1ByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL1dpbmRvd1ByZXNlbnRlcic7XG5pbXBvcnQgSGVscFByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL0hlbHBQcmVzZW50ZXInO1xuaW1wb3J0IFNldHRpbmdSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5pbXBvcnQgQm9va21hcmtSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9Cb29rbWFya1JlcG9zaXRvcnknO1xuaW1wb3J0IENvbnNvbGVDbGllbnQgZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmVzL0NvbnNvbGVDbGllbnQnO1xuaW1wb3J0IENvbnRlbnRNZXNzYWdlQ2xpZW50IGZyb20gJy4uL2luZnJhc3RydWN0dXJlcy9Db250ZW50TWVzc2FnZUNsaWVudCc7XG5pbXBvcnQgUmVwZWF0VXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9SZXBlYXRVc2VDYXNlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZEluZGljYXRvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiUHJlc2VudGVyOiBUYWJQcmVzZW50ZXIsXG4gICAgcHJpdmF0ZSB3aW5kb3dQcmVzZW50ZXI6IFdpbmRvd1ByZXNlbnRlcixcbiAgICBwcml2YXRlIGhlbHBQcmVzZW50ZXI6IEhlbHBQcmVzZW50ZXIsXG4gICAgcHJpdmF0ZSBzZXR0aW5nUmVwb3NpdG9yeTogU2V0dGluZ1JlcG9zaXRvcnksXG4gICAgcHJpdmF0ZSBib29rbWFya1JlcG9zaXRvcnk6IEJvb2ttYXJrUmVwb3NpdG9yeSxcbiAgICBwcml2YXRlIGNvbnNvbGVDbGllbnQ6IENvbnNvbGVDbGllbnQsXG4gICAgcHJpdmF0ZSBjb250ZW50TWVzc2FnZUNsaWVudDogQ29udGVudE1lc3NhZ2VDbGllbnQsXG4gICAgcHJpdmF0ZSByZXBlYXRVc2VDYXNlOiBSZXBlYXRVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIG9wZW4oa2V5d29yZHM6IHN0cmluZyk6IFByb21pc2U8YnJvd3Nlci50YWJzLlRhYj4ge1xuICAgIGNvbnN0IHVybCA9IGF3YWl0IHRoaXMudXJsT3JTZWFyY2goa2V5d29yZHMpO1xuICAgIHRoaXMucmVwZWF0VXNlQ2FzZS5zdG9yZUxhc3RPcGVyYXRpb24oe1xuICAgICAgdHlwZTogb3BlcmF0aW9ucy5JTlRFUk5BTF9PUEVOX1VSTCxcbiAgICAgIHVybCxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIub3Blbih1cmwpO1xuICB9XG5cbiAgYXN5bmMgdGFib3BlbihrZXl3b3Jkczogc3RyaW5nKTogUHJvbWlzZTxicm93c2VyLnRhYnMuVGFiPiB7XG4gICAgY29uc3QgdXJsID0gYXdhaXQgdGhpcy51cmxPclNlYXJjaChrZXl3b3Jkcyk7XG4gICAgdGhpcy5yZXBlYXRVc2VDYXNlLnN0b3JlTGFzdE9wZXJhdGlvbih7XG4gICAgICB0eXBlOiBvcGVyYXRpb25zLklOVEVSTkFMX09QRU5fVVJMLFxuICAgICAgdXJsLFxuICAgICAgbmV3VGFiOiB0cnVlLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5jcmVhdGUodXJsKTtcbiAgfVxuXG4gIGFzeW5jIHdpbm9wZW4oa2V5d29yZHM6IHN0cmluZyk6IFByb21pc2U8YnJvd3Nlci53aW5kb3dzLldpbmRvdz4ge1xuICAgIGNvbnN0IHVybCA9IGF3YWl0IHRoaXMudXJsT3JTZWFyY2goa2V5d29yZHMpO1xuICAgIHRoaXMucmVwZWF0VXNlQ2FzZS5zdG9yZUxhc3RPcGVyYXRpb24oe1xuICAgICAgdHlwZTogb3BlcmF0aW9ucy5JTlRFUk5BTF9PUEVOX1VSTCxcbiAgICAgIHVybCxcbiAgICAgIG5ld1dpbmRvdzogdHJ1ZSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy53aW5kb3dQcmVzZW50ZXIuY3JlYXRlKHVybCk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LXN0YXRlbWVudHNcbiAgYXN5bmMgYnVmZmVyKGtleXdvcmRzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGlmIChrZXl3b3Jkcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWlzTmFOKE51bWJlcihrZXl3b3JkcykpKSB7XG4gICAgICBjb25zdCB0YWJzID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0QWxsKCk7XG4gICAgICBjb25zdCBpbmRleCA9IHBhcnNlSW50KGtleXdvcmRzLCAxMCkgLSAxO1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCB0YWJzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgdGFiICR7aW5kZXggKyAxfSBkb2VzIG5vdCBleGlzdGApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNlbGVjdCh0YWJzW2luZGV4XS5pZCBhcyBudW1iZXIpO1xuICAgIH0gZWxzZSBpZiAoa2V5d29yZHMudHJpbSgpID09PSAnJScpIHtcbiAgICAgIC8vIFNlbGVjdCBjdXJyZW50IHdpbmRvd1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoa2V5d29yZHMudHJpbSgpID09PSAnIycpIHtcbiAgICAgIC8vIFNlbGVjdCBsYXN0IHNlbGVjdGVkIHdpbmRvd1xuICAgICAgY29uc3QgbGFzdElkID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0TGFzdFNlbGVjdGVkSWQoKTtcbiAgICAgIGlmICh0eXBlb2YgbGFzdElkID09PSAndW5kZWZpbmVkJyB8fCBsYXN0SWQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBsYXN0IHNlbGVjdGVkIHRhYicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNlbGVjdChsYXN0SWQpO1xuICAgIH1cblxuICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEJ5S2V5d29yZChrZXl3b3Jkcyk7XG4gICAgaWYgKHRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignTm8gbWF0Y2hpbmcgYnVmZmVyIGZvciAnICsga2V5d29yZHMpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHRhYiBvZiB0YWJzKSB7XG4gICAgICBpZiAodGFiLmluZGV4ID4gY3VycmVudC5pbmRleCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuc2VsZWN0KHRhYi5pZCBhcyBudW1iZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuc2VsZWN0KHRhYnNbMF0uaWQgYXMgbnVtYmVyKTtcbiAgfVxuXG4gIGFzeW5jIGJkZWxldGUoZm9yY2U6IGJvb2xlYW4sIGtleXdvcmRzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGV4Y2x1ZGVQaW5uZWQgPSAhZm9yY2U7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEJ5S2V5d29yZChrZXl3b3JkcywgZXhjbHVkZVBpbm5lZCk7XG4gICAgaWYgKHRhYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIG1hdGNoaW5nIGJ1ZmZlciBmb3IgJyArIGtleXdvcmRzKTtcbiAgICB9IGVsc2UgaWYgKHRhYnMubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNb3JlIHRoYW4gb25lIG1hdGNoIGZvciAnICsga2V5d29yZHMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIucmVtb3ZlKFt0YWJzWzBdLmlkIGFzIG51bWJlcl0pO1xuICB9XG5cbiAgYXN5bmMgYmRlbGV0ZXMoZm9yY2U6IGJvb2xlYW4sIGtleXdvcmRzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGV4Y2x1ZGVQaW5uZWQgPSAhZm9yY2U7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEJ5S2V5d29yZChrZXl3b3JkcywgZXhjbHVkZVBpbm5lZCk7XG4gICAgY29uc3QgaWRzID0gdGFicy5tYXAodGFiID0+IHRhYi5pZCBhcyBudW1iZXIpO1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5yZW1vdmUoaWRzKTtcbiAgfVxuXG4gIGFzeW5jIHF1aXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnJlbW92ZShbdGFiLmlkIGFzIG51bWJlcl0pO1xuICB9XG5cbiAgYXN5bmMgcXVpdEFsbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYnMgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRBbGwoKTtcbiAgICBjb25zdCBpZHMgPSB0YWJzLm1hcCh0YWIgPT4gdGFiLmlkIGFzIG51bWJlcik7XG4gICAgdGhpcy50YWJQcmVzZW50ZXIucmVtb3ZlKGlkcyk7XG4gIH1cblxuICBhc3luYyBhZGRib29rbWFyayh0aXRsZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuYm9va21hcmtSZXBvc2l0b3J5LmNyZWF0ZSh0aXRsZSwgdGFiLnVybCBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnU2F2ZWQgY3VycmVudCBwYWdlOiAnICsgaXRlbS51cmw7XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZUNsaWVudC5zaG93SW5mbyh0YWIuaWQgYXMgbnVtYmVyLCBtZXNzYWdlKTtcbiAgfVxuXG4gIGFzeW5jIHNldChrZXl3b3Jkczogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAoa2V5d29yZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IFtuYW1lLCB2YWx1ZV0gPSBwYXJzZXJzLnBhcnNlU2V0T3B0aW9uKGtleXdvcmRzKTtcbiAgICBhd2FpdCB0aGlzLnNldHRpbmdSZXBvc2l0b3J5LnNldFByb3BlcnR5KG5hbWUsIHZhbHVlKTtcblxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRNZXNzYWdlQ2xpZW50LmJyb2FkY2FzdFNldHRpbmdzQ2hhbmdlZCgpO1xuICB9XG5cbiAgaGVscCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5oZWxwUHJlc2VudGVyLm9wZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgdXJsT3JTZWFyY2goa2V5d29yZHM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3Qgc2V0dGluZ3MgPSBhd2FpdCB0aGlzLnNldHRpbmdSZXBvc2l0b3J5LmdldCgpO1xuICAgIHJldHVybiB1cmxzLnNlYXJjaFVybChrZXl3b3Jkcywgc2V0dGluZ3Muc2VhcmNoKTtcbiAgfVxufVxuIiwiaW1wb3J0IFByb3BlcnRpZXMgZnJvbSAnLi4vLi4vc2hhcmVkL3NldHRpbmdzL1Byb3BlcnRpZXMnO1xuXG5jb25zdCBtdXN0TnVtYmVyID0gKHY6IGFueSk6IG51bWJlciA9PiB7XG4gIGNvbnN0IG51bSA9IE51bWJlcih2KTtcbiAgaWYgKGlzTmFOKG51bSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vdCBudW1iZXI6ICcgKyB2KTtcbiAgfVxuICByZXR1cm4gbnVtO1xufTtcblxuY29uc3QgcGFyc2VTZXRPcHRpb24gPSAoXG4gIGFyZ3M6IHN0cmluZyxcbik6IGFueVtdID0+IHtcbiAgbGV0IFtrZXksIHZhbHVlXTogYW55W10gPSBhcmdzLnNwbGl0KCc9Jyk7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFsdWUgPSAha2V5LnN0YXJ0c1dpdGgoJ25vJyk7XG4gICAga2V5ID0gdmFsdWUgPyBrZXkgOiBrZXkuc2xpY2UoMik7XG4gIH1cbiAgY29uc3QgZGVmID0gUHJvcGVydGllcy5kZWYoa2V5KTtcbiAgaWYgKCFkZWYpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gcHJvcGVydHk6ICcgKyBrZXkpO1xuICB9XG4gIGlmIChkZWYudHlwZSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiB2YWx1ZSAhPT0gJ2Jvb2xlYW4nIHx8XG4gICAgICAgZGVmLnR5cGUgIT09ICdib29sZWFuJyAmJiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJykge1xuICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBhcmd1bWVudDogJyArIGFyZ3MpO1xuICB9XG5cbiAgc3dpdGNoIChkZWYudHlwZSkge1xuICBjYXNlICdzdHJpbmcnOiByZXR1cm4gW2tleSwgdmFsdWVdO1xuICBjYXNlICdudW1iZXInOiByZXR1cm4gW2tleSwgbXVzdE51bWJlcih2YWx1ZSldO1xuICBjYXNlICdib29sZWFuJzogcmV0dXJuIFtrZXksIHZhbHVlXTtcbiAgZGVmYXVsdDpcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gcHJvcGVydHkgdHlwZTogJyArIGRlZi50eXBlKTtcbiAgfVxufTtcblxuZXhwb3J0IHsgcGFyc2VTZXRPcHRpb24gfTtcbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5cbmNvbnN0IHVybCA9ICdodHRwczovL3Vlb2thbmRlLmdpdGh1Yi5pby92aW0tdml4ZW4vJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVscFByZXNlbnRlciB7XG4gIGFzeW5jIG9wZW4oKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLmNyZWF0ZSh7IHVybCwgYWN0aXZlOiB0cnVlIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29rbWFya1JlcG9zaXRvcnkge1xuICBhc3luYyBjcmVhdGUoXG4gICAgdGl0bGU6IHN0cmluZywgdXJsOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxicm93c2VyLmJvb2ttYXJrcy5Cb29rbWFya1RyZWVOb2RlPiB7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IGJyb3dzZXIuYm9va21hcmtzLmNyZWF0ZSh7XG4gICAgICB0eXBlOiAnYm9va21hcmsnLFxuICAgICAgdGl0bGUsXG4gICAgICB1cmwsXG4gICAgfSk7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBjcmVhdGUgYSBib29rbWFyaycpO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCB7IE9wZXJhdGlvbiB9IGZyb20gJy4uLy4uL3NoYXJlZC9vcGVyYXRpb25zJztcbmltcG9ydCBNZW1vcnlTdG9yYWdlIGZyb20gJy4uL2luZnJhc3RydWN0dXJlcy9NZW1vcnlTdG9yYWdlJztcblxuY29uc3QgUkVQRUFUX0tFWSA9ICdyZXBlYXQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXRSZXBvc2l0b3J5IHtcbiAgcHJpdmF0ZSBjYWNoZTogTWVtb3J5U3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhY2hlID0gbmV3IE1lbW9yeVN0b3JhZ2UoKTtcbiAgfVxuXG4gIGdldExhc3RPcGVyYXRpb24oKTogT3BlcmF0aW9uIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoUkVQRUFUX0tFWSk7XG4gIH1cblxuICBzZXRMYXN0T3BlcmF0aW9uKG9wOiBPcGVyYXRpb24pOiB2b2lkIHtcbiAgICB0aGlzLmNhY2hlLnNldChSRVBFQVRfS0VZLCBvcCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgUGVyc2lzdGVudFNldHRpbmdSZXBvc2l0b3J5XG4gIGZyb20gJy4uL3JlcG9zaXRvcmllcy9QZXJzaXN0ZW50U2V0dGluZ1JlcG9zaXRvcnknO1xuaW1wb3J0IFNldHRpbmdSZXBvc2l0b3J5IGZyb20gJy4uL3JlcG9zaXRvcmllcy9TZXR0aW5nUmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBEZWZhdWx0U2V0dGluZ0RhdGEgfSBmcm9tICcuLi8uLi9zaGFyZWQvU2V0dGluZ0RhdGEnO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uLy4uL3NoYXJlZC9zZXR0aW5ncy9TZXR0aW5ncyc7XG5pbXBvcnQgTm90aWZ5UHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvTm90aWZ5UHJlc2VudGVyJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZ1VzZUNhc2Uge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGVyc2lzdGVudFNldHRpbmdSZXBvc2l0b3J5OiBQZXJzaXN0ZW50U2V0dGluZ1JlcG9zaXRvcnksXG4gICAgcHJpdmF0ZSBzZXR0aW5nUmVwb3NpdG9yeTogU2V0dGluZ1JlcG9zaXRvcnksXG4gICAgcHJpdmF0ZSBub3RpZnlQcmVzZW50ZXI6IE5vdGlmeVByZXNlbnRlcixcbiAgKSB7XG4gIH1cblxuICBnZXQoKTogUHJvbWlzZTxTZXR0aW5ncz4ge1xuICAgIHJldHVybiB0aGlzLnNldHRpbmdSZXBvc2l0b3J5LmdldCgpO1xuICB9XG5cbiAgYXN5bmMgcmVsb2FkKCk6IFByb21pc2U8U2V0dGluZ3M+IHtcbiAgICBsZXQgZGF0YTtcbiAgICB0cnkge1xuICAgICAgZGF0YSA9IGF3YWl0IHRoaXMucGVyc2lzdGVudFNldHRpbmdSZXBvc2l0b3J5LmxvYWQoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLnNob3dVbmFibGVUb0xvYWQoZSk7XG4gICAgfVxuICAgIGlmICghZGF0YSkge1xuICAgICAgZGF0YSA9IERlZmF1bHRTZXR0aW5nRGF0YTtcbiAgICB9XG5cbiAgICBsZXQgdmFsdWU6IFNldHRpbmdzO1xuICAgIHRyeSB7XG4gICAgICB2YWx1ZSA9IGRhdGEudG9TZXR0aW5ncygpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRoaXMuc2hvd1VuYWJsZVRvTG9hZChlKTtcbiAgICAgIHZhbHVlID0gRGVmYXVsdFNldHRpbmdEYXRhLnRvU2V0dGluZ3MoKTtcbiAgICB9XG4gICAgdGhpcy5zZXR0aW5nUmVwb3NpdG9yeS51cGRhdGUodmFsdWUhISk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93VW5hYmxlVG9Mb2FkKGU6IEVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcigndW5hYmxlIHRvIGxvYWQgc2V0dGluZ3MnLCBlKTtcbiAgICB0aGlzLm5vdGlmeVByZXNlbnRlci5ub3RpZnlJbnZhbGlkU2V0dGluZ3MoKCkgPT4ge1xuICAgICAgYnJvd3Nlci5ydW50aW1lLm9wZW5PcHRpb25zUGFnZSgpO1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IFNldHRpbmdEYXRhIGZyb20gJy4uLy4uL3NoYXJlZC9TZXR0aW5nRGF0YSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmdSZXBvc2l0b3J5IHtcbiAgYXN5bmMgbG9hZCgpOiBQcm9taXNlPFNldHRpbmdEYXRhIHwgbnVsbD4ge1xuICAgIGNvbnN0IHsgc2V0dGluZ3MgfSA9IGF3YWl0IGJyb3dzZXIuc3RvcmFnZS5sb2NhbC5nZXQoJ3NldHRpbmdzJyk7XG4gICAgaWYgKCFzZXR0aW5ncykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBTZXR0aW5nRGF0YS5mcm9tSlNPTihzZXR0aW5ncyBhcyBhbnkpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgRmluZFVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvRmluZFVzZUNhc2UnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5kQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmluZFVzZUNhc2U6IEZpbmRVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIGdldEtleXdvcmQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5maW5kVXNlQ2FzZS5nZXRLZXl3b3JkKCk7XG4gIH1cblxuICBzZXRLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuZmluZFVzZUNhc2Uuc2V0S2V5d29yZChrZXl3b3JkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBNZW1vcnlTdG9yYWdlIGZyb20gJy4uL2luZnJhc3RydWN0dXJlcy9NZW1vcnlTdG9yYWdlJztcblxuY29uc3QgRklORF9LRVlXT1JEX0tFWSA9ICdmaW5kLWtleXdvcmQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaW5kUmVwb3NpdG9yeSB7XG4gIHByaXZhdGUgY2FjaGU6IE1lbW9yeVN0b3JhZ2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYWNoZSA9IG5ldyBNZW1vcnlTdG9yYWdlKCk7XG4gIH1cblxuICBnZXRLZXl3b3JkKCk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmNhY2hlLmdldChGSU5EX0tFWVdPUkRfS0VZKSk7XG4gIH1cblxuICBzZXRLZXl3b3JkKGtleXdvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgdGhpcy5jYWNoZS5zZXQoRklORF9LRVlXT1JEX0tFWSwga2V5d29yZCk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICB9XG59XG5cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgQWRkb25FbmFibGVkVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9BZGRvbkVuYWJsZWRVc2VDYXNlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkb25FbmFibGVkQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhZGRvbkVuYWJsZWRVc2VDYXNlOiBBZGRvbkVuYWJsZWRVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIGluZGljYXRlKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmFkZG9uRW5hYmxlZFVzZUNhc2UuaW5kaWNhdGUoZW5hYmxlZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgSW5kaWNhdG9yUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvSW5kaWNhdG9yUHJlc2VudGVyJztcbmltcG9ydCBUYWJQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9UYWJQcmVzZW50ZXInO1xuaW1wb3J0IENvbnRlbnRNZXNzYWdlQ2xpZW50IGZyb20gJy4uL2luZnJhc3RydWN0dXJlcy9Db250ZW50TWVzc2FnZUNsaWVudCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZG9uRW5hYmxlZFVzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGluZGljYXRvclByZXNlbnRvcjogSW5kaWNhdG9yUHJlc2VudGVyLFxuICAgIHByaXZhdGUgdGFiUHJlc2VudGVyOiBUYWJQcmVzZW50ZXIsXG4gICAgcHJpdmF0ZSBjb250ZW50TWVzc2FnZUNsaWVudDogQ29udGVudE1lc3NhZ2VDbGllbnQsXG4gICkge1xuICAgIHRoaXMuaW5kaWNhdG9yUHJlc2VudG9yLm9uQ2xpY2soKHRhYikgPT4ge1xuICAgICAgaWYgKHRhYi5pZCkge1xuICAgICAgICB0aGlzLm9uSW5kaWNhdG9yQ2xpY2sodGFiLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnRhYlByZXNlbnRlci5vblNlbGVjdGVkKGluZm8gPT4gdGhpcy5vblRhYlNlbGVjdGVkKGluZm8udGFiSWQpKTtcbiAgfVxuXG4gIGluZGljYXRlKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JQcmVzZW50b3IuaW5kaWNhdGUoZW5hYmxlZCk7XG4gIH1cblxuICBvbkluZGljYXRvckNsaWNrKHRhYklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50TWVzc2FnZUNsaWVudC50b2dnbGVBZGRvbkVuYWJsZWQodGFiSWQpO1xuICB9XG5cbiAgYXN5bmMgb25UYWJTZWxlY3RlZCh0YWJJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgZW5hYmxlZCA9IGF3YWl0IHRoaXMuY29udGVudE1lc3NhZ2VDbGllbnQuZ2V0QWRkb25FbmFibGVkKHRhYklkKTtcbiAgICByZXR1cm4gdGhpcy5pbmRpY2F0b3JQcmVzZW50b3IuaW5kaWNhdGUoZW5hYmxlZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGljYXRvclByZXNlbnRlciB7XG4gIGluZGljYXRlKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXRoID0gZW5hYmxlZFxuICAgICAgPyAncmVzb3VyY2VzL2VuYWJsZWRfMzJ4MzIucG5nJ1xuICAgICAgOiAncmVzb3VyY2VzL2Rpc2FibGVkXzMyeDMyLnBuZyc7XG4gICAgaWYgKHR5cGVvZiBicm93c2VyLmJyb3dzZXJBY3Rpb24uc2V0SWNvbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5zZXRJY29uKHsgcGF0aCB9KTtcbiAgICB9XG5cbiAgICAvLyBzZXRJY29uIG5vdCBzdXBwb3J0ZWQgb24gQW5kcm9pZFxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblxuICB9XG5cbiAgb25DbGljayhsaXN0ZW5lcjogKGFyZzogYnJvd3Nlci50YWJzLlRhYikgPT4gdm9pZCk6IHZvaWQge1xuICAgIGJyb3dzZXIuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXIobGlzdGVuZXIpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IExpbmtVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL0xpbmtVc2VDYXNlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlua0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxpbmtVc2VDYXNlOiBMaW5rVXNlQ2FzZSxcbiAgKSB7XG4gIH1cblxuICBvcGVuVG9UYWIodXJsOiBzdHJpbmcsIHRhYklkOiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5saW5rVXNlQ2FzZS5vcGVuVG9UYWIodXJsLCB0YWJJZCk7XG4gIH1cblxuICBvcGVuTmV3VGFiKFxuICAgIHVybDogc3RyaW5nLCBvcGVuZXJJZDogbnVtYmVyLCBiYWNrZ3JvdW5kOiBib29sZWFuLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5saW5rVXNlQ2FzZS5vcGVuTmV3VGFiKHVybCwgb3BlbmVySWQsIGJhY2tncm91bmQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IFRhYlByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL1RhYlByZXNlbnRlcic7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmtVc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJQcmVzZW50ZXI6IFRhYlByZXNlbnRlcixcbiAgKSB7XG4gIH1cblxuICBvcGVuVG9UYWIodXJsOiBzdHJpbmcsIHRhYklkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5vcGVuKHVybCwgdGFiSWQpO1xuICB9XG5cbiAgYXN5bmMgb3Blbk5ld1RhYihcbiAgICB1cmw6IHN0cmluZywgb3BlbmVySWQ6IG51bWJlciwgYmFja2dyb3VuZDogYm9vbGVhbixcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBwcm9wZXJ0aWVzOiBhbnkgPSB7IGFjdGl2ZTogIWJhY2tncm91bmQgfTtcblxuICAgIGNvbnN0IHBsYXRmb3JtID0gYXdhaXQgYnJvd3Nlci5ydW50aW1lLmdldFBsYXRmb3JtSW5mbygpO1xuICAgIGlmIChwbGF0Zm9ybS5vcyAhPT0gJ2FuZHJvaWQnKSB7XG4gICAgICAvLyBvcGVuZXJUYWJJZCBub3Qgc3VwcG9ydGVkIG9uIEFuZHJvaWRcbiAgICAgIHByb3BlcnRpZXMub3BlbmVyVGFiSWQgPSBvcGVuZXJJZDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuY3JlYXRlKHVybCwgcHJvcGVydGllcyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgKiBhcyBvcGVyYXRpb25zIGZyb20gJy4uLy4uL3NoYXJlZC9vcGVyYXRpb25zJztcbmltcG9ydCBGaW5kVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9GaW5kVXNlQ2FzZSc7XG5pbXBvcnQgQ29uc29sZVVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvQ29uc29sZVVzZUNhc2UnO1xuaW1wb3J0IFRhYlVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvVGFiVXNlQ2FzZSc7XG5pbXBvcnQgVGFiU2VsZWN0VXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9UYWJTZWxlY3RVc2VDYXNlJztcbmltcG9ydCBab29tVXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9ab29tVXNlQ2FzZSc7XG5pbXBvcnQgTmF2aWdhdGVVc2VDYXNlIGZyb20gJy4uL3VzZWNhc2VzL05hdmlnYXRlVXNlQ2FzZSc7XG5pbXBvcnQgUmVwZWF0VXNlQ2FzZSBmcm9tICcuLi91c2VjYXNlcy9SZXBlYXRVc2VDYXNlJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3BlcmF0aW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmluZFVzZUNhc2U6IEZpbmRVc2VDYXNlLFxuICAgIHByaXZhdGUgY29uc29sZVVzZUNhc2U6IENvbnNvbGVVc2VDYXNlLFxuICAgIHByaXZhdGUgdGFiVXNlQ2FzZTogVGFiVXNlQ2FzZSxcbiAgICBwcml2YXRlIHRhYlNlbGVjdFVzZUNhc2U6IFRhYlNlbGVjdFVzZUNhc2UsXG4gICAgcHJpdmF0ZSB6b29tVXNlQ2FzZTogWm9vbVVzZUNhc2UsXG4gICAgcHJpdmF0ZSBuYXZpZ2F0ZVVzZUNhc2U6IE5hdmlnYXRlVXNlQ2FzZSxcbiAgICBwcml2YXRlIHJlcGVhdFVzZUNhc2U6IFJlcGVhdFVzZUNhc2UsXG4gICkge1xuICB9XG5cbiAgYXN5bmMgZXhlYyhyZXBlYXQ6IG51bWJlciwgb3A6IG9wZXJhdGlvbnMuT3BlcmF0aW9uKTogUHJvbWlzZTxhbnk+IHtcbiAgICBhd2FpdCB0aGlzLmRvT3BlcmF0aW9uKHJlcGVhdCwgb3ApO1xuICAgIGlmICh0aGlzLnJlcGVhdFVzZUNhc2UuaXNSZXBlYXRhYmxlKG9wKSkge1xuICAgICAgdGhpcy5yZXBlYXRVc2VDYXNlLnN0b3JlTGFzdE9wZXJhdGlvbihvcCk7XG4gICAgfVxuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHksIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbiAgYXN5bmMgZG9PcGVyYXRpb24oXG4gICAgcmVwZWF0OiBudW1iZXIsXG4gICAgb3BlcmF0aW9uOiBvcGVyYXRpb25zLk9wZXJhdGlvbixcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29tcGxleGl0eSwgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgIGNvbnN0IG9wRnVuYyA9ICgoKSA9PiB7XG4gICAgICBzd2l0Y2ggKG9wZXJhdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuVEFCX0NMT1NFOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJVc2VDYXNlLmNsb3NlKGZhbHNlLCBvcGVyYXRpb24uc2VsZWN0ID09PSAnbGVmdCcpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlRBQl9DTE9TRV9SSUdIVDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFiVXNlQ2FzZS5jbG9zZVJpZ2h0KCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuVEFCX0NMT1NFX0ZPUkNFOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJVc2VDYXNlLmNsb3NlKHRydWUpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlRBQl9SRU9QRU46XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnRhYlVzZUNhc2UucmVvcGVuKCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuVEFCX1BSRVY6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnRhYlNlbGVjdFVzZUNhc2Uuc2VsZWN0UHJldigxKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfTkVYVDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFiU2VsZWN0VXNlQ2FzZS5zZWxlY3ROZXh0KDEpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlRBQl9GSVJTVDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFiU2VsZWN0VXNlQ2FzZS5zZWxlY3RGaXJzdCgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlRBQl9MQVNUOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJTZWxlY3RVc2VDYXNlLnNlbGVjdExhc3QoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfUFJFVl9TRUw6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnRhYlNlbGVjdFVzZUNhc2Uuc2VsZWN0UHJldlNlbGVjdGVkKCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuVEFCX1JFTE9BRDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFiVXNlQ2FzZS5yZWxvYWQob3BlcmF0aW9uLmNhY2hlKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfUElOOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJVc2VDYXNlLnNldFBpbm5lZCh0cnVlKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfVU5QSU46XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnRhYlVzZUNhc2Uuc2V0UGlubmVkKGZhbHNlKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfVE9HR0xFX1BJTk5FRDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFiVXNlQ2FzZS50b2dnbGVQaW5uZWQoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5UQUJfRFVQTElDQVRFOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJVc2VDYXNlLmR1cGxpY2F0ZSgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlBBR0VfU09VUkNFOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJVc2VDYXNlLm9wZW5QYWdlU291cmNlKCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuUEFHRV9IT01FOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy50YWJVc2VDYXNlLm9wZW5Ib21lKG9wZXJhdGlvbi5uZXdUYWIpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlpPT01fSU46XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnpvb21Vc2VDYXNlLnpvb21JbigpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLlpPT01fT1VUOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy56b29tVXNlQ2FzZS56b29tT3V0KCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuWk9PTV9ORVVUUkFMOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy56b29tVXNlQ2FzZS56b29tTnV0b3JhbCgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkNPTU1BTkRfU0hPVzpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuY29uc29sZVVzZUNhc2Uuc2hvd0NvbW1hbmQoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5DT01NQU5EX1NIT1dfT1BFTjpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuY29uc29sZVVzZUNhc2Uuc2hvd09wZW5Db21tYW5kKG9wZXJhdGlvbi5hbHRlcik7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuQ09NTUFORF9TSE9XX1RBQk9QRU46XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLmNvbnNvbGVVc2VDYXNlLnNob3dUYWJvcGVuQ29tbWFuZChvcGVyYXRpb24uYWx0ZXIpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkNPTU1BTkRfU0hPV19XSU5PUEVOOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5jb25zb2xlVXNlQ2FzZS5zaG93V2lub3BlbkNvbW1hbmQob3BlcmF0aW9uLmFsdGVyKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5DT01NQU5EX1NIT1dfQlVGRkVSOlxuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5jb25zb2xlVXNlQ2FzZS5zaG93QnVmZmVyQ29tbWFuZCgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkNPTU1BTkRfU0hPV19BRERCT09LTUFSSzpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuY29uc29sZVVzZUNhc2Uuc2hvd0FkZGJvb2ttYXJrQ29tbWFuZChcbiAgICAgICAgICBvcGVyYXRpb24uYWx0ZXIpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkZJTkRfU1RBUlQ6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLmZpbmRVc2VDYXNlLmZpbmRTdGFydCgpO1xuICAgICAgY2FzZSBvcGVyYXRpb25zLkNBTkNFTDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMuY29uc29sZVVzZUNhc2UuaGlkZUNvbnNvbGUoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9ISVNUT1JZX1BSRVY6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm5hdmlnYXRlVXNlQ2FzZS5vcGVuSGlzdG9yeVByZXYoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9ISVNUT1JZX05FWFQ6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm5hdmlnYXRlVXNlQ2FzZS5vcGVuSGlzdG9yeU5leHQoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9MSU5LX1BSRVY6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm5hdmlnYXRlVXNlQ2FzZS5vcGVuTGlua1ByZXYoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9MSU5LX05FWFQ6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm5hdmlnYXRlVXNlQ2FzZS5vcGVuTGlua05leHQoKTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5OQVZJR0FURV9QQVJFTlQ6XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm5hdmlnYXRlVXNlQ2FzZS5vcGVuUGFyZW50KCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuTkFWSUdBVEVfUk9PVDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMubmF2aWdhdGVVc2VDYXNlLm9wZW5Sb290KCk7XG4gICAgICBjYXNlIG9wZXJhdGlvbnMuUkVQRUFUX0xBU1Q6XG4gICAgICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgbGFzdCA9IHRoaXMucmVwZWF0VXNlQ2FzZS5nZXRMYXN0T3BlcmF0aW9uKCk7XG4gICAgICAgICAgaWYgKHR5cGVvZiBsYXN0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZG9PcGVyYXRpb24oMSwgbGFzdCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfTtcbiAgICAgIGNhc2Ugb3BlcmF0aW9ucy5JTlRFUk5BTF9PUEVOX1VSTDpcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMudGFiVXNlQ2FzZS5vcGVuVVJMKFxuICAgICAgICAgIG9wZXJhdGlvbi51cmwsIG9wZXJhdGlvbi5uZXdUYWIsIG9wZXJhdGlvbi5uZXdXaW5kb3cpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIG9wZXJhdGlvbjogJyArIG9wZXJhdGlvbi50eXBlKTtcbiAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXBlYXQ7ICsraSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWF3YWl0LWluLWxvb3BcbiAgICAgIGF3YWl0IG9wRnVuYygpO1xuICAgIH1cbiAgfVxufVxuXG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IFRhYlByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL1RhYlByZXNlbnRlcic7XG5pbXBvcnQgQ29uc29sZUNsaWVudCBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZXMvQ29uc29sZUNsaWVudCc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnNvbGVVc2VDYXNlIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYlByZXNlbnRlcjogVGFiUHJlc2VudGVyLFxuICAgIHByaXZhdGUgY29uc29sZUNsaWVudDogQ29uc29sZUNsaWVudCxcbiAgKSB7XG4gIH1cblxuICBhc3luYyBzaG93Q29tbWFuZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICByZXR1cm4gdGhpcy5jb25zb2xlQ2xpZW50LnNob3dDb21tYW5kKHRhYi5pZCBhcyBudW1iZXIsICcnKTtcbiAgfVxuXG4gIGFzeW5jIHNob3dPcGVuQ29tbWFuZChhbHRlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGxldCBjb21tYW5kID0gJ29wZW4gJztcbiAgICBpZiAoYWx0ZXIpIHtcbiAgICAgIGNvbW1hbmQgKz0gdGFiLnVybCB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZUNsaWVudC5zaG93Q29tbWFuZCh0YWIuaWQgYXMgbnVtYmVyLCBjb21tYW5kKTtcbiAgfVxuXG4gIGFzeW5jIHNob3dUYWJvcGVuQ29tbWFuZChhbHRlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGxldCBjb21tYW5kID0gJ3RhYm9wZW4gJztcbiAgICBpZiAoYWx0ZXIpIHtcbiAgICAgIGNvbW1hbmQgKz0gdGFiLnVybCB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZUNsaWVudC5zaG93Q29tbWFuZCh0YWIuaWQgYXMgbnVtYmVyLCBjb21tYW5kKTtcbiAgfVxuXG4gIGFzeW5jIHNob3dXaW5vcGVuQ29tbWFuZChhbHRlcjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGxldCBjb21tYW5kID0gJ3dpbm9wZW4gJztcbiAgICBpZiAoYWx0ZXIpIHtcbiAgICAgIGNvbW1hbmQgKz0gdGFiLnVybCB8fCAnJztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZUNsaWVudC5zaG93Q29tbWFuZCh0YWIuaWQgYXMgbnVtYmVyLCBjb21tYW5kKTtcbiAgfVxuXG4gIGFzeW5jIHNob3dCdWZmZXJDb21tYW5kKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGNvbnN0IGNvbW1hbmQgPSAnYnVmZmVyICc7XG4gICAgcmV0dXJuIHRoaXMuY29uc29sZUNsaWVudC5zaG93Q29tbWFuZCh0YWIuaWQgYXMgbnVtYmVyLCBjb21tYW5kKTtcbiAgfVxuXG4gIGFzeW5jIHNob3dBZGRib29rbWFya0NvbW1hbmQoYWx0ZXI6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICBsZXQgY29tbWFuZCA9ICdhZGRib29rbWFyayAnO1xuICAgIGlmIChhbHRlcikge1xuICAgICAgY29tbWFuZCArPSB0YWIudGl0bGUgfHwgJyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNvbnNvbGVDbGllbnQuc2hvd0NvbW1hbmQodGFiLmlkIGFzIG51bWJlciwgY29tbWFuZCk7XG4gIH1cblxuICBhc3luYyBoaWRlQ29uc29sZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICByZXR1cm4gdGhpcy5jb25zb2xlQ2xpZW50LmhpZGUodGFiLmlkIGFzIG51bWJlcik7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgVGFiUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvVGFiUHJlc2VudGVyJztcbmltcG9ydCBXaW5kb3dQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9XaW5kb3dQcmVzZW50ZXInO1xuaW1wb3J0IEJyb3dzZXJTZXR0aW5nUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvQnJvd3NlclNldHRpbmdSZXBvc2l0b3J5JztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiVXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiUHJlc2VudGVyOiBUYWJQcmVzZW50ZXIsXG4gICAgcHJpdmF0ZSB3aW5kb3dQcmVzZW50ZXI6IFdpbmRvd1ByZXNlbnRlcixcbiAgICBwcml2YXRlIGJyb3dzZXJTZXR0aW5nUmVwb3NpdG9yeTogQnJvd3NlclNldHRpbmdSZXBvc2l0b3J5LFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIGNsb3NlKGZvcmNlOiBib29sZWFuLCBzZWxlY3RMZWZ0ID0gZmFsc2UpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICBpZiAoIWZvcmNlICYmIHRhYi5waW5uZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgaWYgKHNlbGVjdExlZnQgJiYgdGFiLmluZGV4ID4gMCkge1xuICAgICAgY29uc3QgdGFicyA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEFsbCgpO1xuICAgICAgYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuc2VsZWN0KHRhYnNbdGFiLmluZGV4IC0gMV0uaWQgYXMgbnVtYmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnJlbW92ZShbdGFiLmlkIGFzIG51bWJlcl0pO1xuICB9XG5cbiAgYXN5bmMgY2xvc2VSaWdodCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYnMgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRBbGwoKTtcbiAgICB0YWJzLnNvcnQoKHQxLCB0MikgPT4gdDEuaW5kZXggLSB0Mi5pbmRleCk7XG4gICAgY29uc3QgaW5kZXggPSB0YWJzLmZpbmRJbmRleCh0ID0+IHQuYWN0aXZlKTtcbiAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSBpbmRleCArIDE7IGkgPCB0YWJzLmxlbmd0aDsgKytpKSB7XG4gICAgICBjb25zdCB0YWIgPSB0YWJzW2ldO1xuICAgICAgaWYgKCF0YWIucGlubmVkKSB7XG4gICAgICAgIHRoaXMudGFiUHJlc2VudGVyLnJlbW92ZShbdGFiLmlkIGFzIG51bWJlcl0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlb3BlbigpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5yZW9wZW4oKTtcbiAgfVxuXG4gIGFzeW5jIHJlbG9hZChjYWNoZTogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5yZWxvYWQodGFiLmlkIGFzIG51bWJlciwgY2FjaGUpO1xuICB9XG5cbiAgYXN5bmMgc2V0UGlubmVkKHBpbm5lZDogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5zZXRQaW5uZWQodGFiLmlkIGFzIG51bWJlciwgcGlubmVkKTtcbiAgfVxuXG4gIGFzeW5jIHRvZ2dsZVBpbm5lZCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuc2V0UGlubmVkKHRhYi5pZCBhcyBudW1iZXIsICF0YWIucGlubmVkKTtcbiAgfVxuXG4gIGFzeW5jIGR1cGxpY2F0ZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuZHVwbGljYXRlKHRhYi5pZCBhcyBudW1iZXIpO1xuICB9XG5cbiAgYXN5bmMgb3BlblBhZ2VTb3VyY2UoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgY29uc3QgdXJsID0gJ3ZpZXctc291cmNlOicgKyB0YWIudXJsO1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5jcmVhdGUodXJsKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5Ib21lKG5ld1RhYjogYm9vbGVhbik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGNvbnN0IHVybHMgPSBhd2FpdCB0aGlzLmJyb3dzZXJTZXR0aW5nUmVwb3NpdG9yeS5nZXRIb21lcGFnZVVybHMoKTtcbiAgICBpZiAodXJscy5sZW5ndGggPT09IDEgJiYgdXJsc1swXSA9PT0gJ2Fib3V0OmhvbWUnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxlblxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgb3BlbiBGaXJlZm94IEhvbWUgKGFib3V0OmhvbWUpIGJ5IFdlYkV4dGVuc2lvbnMsIHNldCB5b3VyIGN1c3RvbSBVUkxzJyk7XG4gICAgfVxuICAgIGlmICh1cmxzLmxlbmd0aCA9PT0gMSAmJiAhbmV3VGFiKSB7XG4gICAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIub3Blbih1cmxzWzBdLCB0YWIuaWQpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHVybCBvZiB1cmxzKSB7XG4gICAgICB0aGlzLnRhYlByZXNlbnRlci5jcmVhdGUodXJsKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBvcGVuVVJMKFxuICAgIHVybDogc3RyaW5nLCBuZXdUYWI/OiBib29sZWFuLCBuZXdXaW5kb3c/OiBib29sZWFuLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAobmV3V2luZG93KSB7XG4gICAgICBhd2FpdCB0aGlzLndpbmRvd1ByZXNlbnRlci5jcmVhdGUodXJsKTtcbiAgICB9IGVsc2UgaWYgKG5ld1RhYikge1xuICAgICAgYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuY3JlYXRlKHVybCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICAgIGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLm9wZW4odXJsLCB0YWIuaWQpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCAqIGFzIHVybHMgZnJvbSAnLi4vLi4vc2hhcmVkL3VybHMnO1xuXG5kZWNsYXJlIG5hbWVzcGFjZSBicm93c2VyLmJyb3dzZXJTZXR0aW5ncy5ob21lcGFnZU92ZXJyaWRlIHtcblxuICB0eXBlIEJyb3dzZXJTZXR0aW5ncyA9IHtcbiAgICB2YWx1ZTogc3RyaW5nO1xuICAgIGxldmVsT2ZDb250cm9sOiBMZXZlbE9mQ29udHJvbFR5cGU7XG4gIH07XG5cbiAgdHlwZSBMZXZlbE9mQ29udHJvbFR5cGUgPVxuICAgICdub3RfY29udHJvbGxhYmxlJyB8XG4gICAgJ2NvbnRyb2xsZWRfYnlfb3RoZXJfZXh0ZW5zaW9ucycgfFxuICAgICdjb250cm9sbGFibGVfYnlfdGhpc19leHRlbnNpb24nIHxcbiAgICAnY29udHJvbGxlZF9ieV90aGlzX2V4dGVuc2lvbic7XG5cbiAgZnVuY3Rpb24gZ2V0KHBhcmFtOiBvYmplY3QpOiBQcm9taXNlPEJyb3dzZXJTZXR0aW5ncz47XG59XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyb3dzZXJTZXR0aW5nUmVwb3NpdG9yeSB7XG4gIGFzeW5jIGdldEhvbWVwYWdlVXJscygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gYXdhaXQgYnJvd3Nlci5icm93c2VyU2V0dGluZ3MuaG9tZXBhZ2VPdmVycmlkZS5nZXQoe30pO1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnfCcpLm1hcCh1cmxzLm5vcm1hbGl6ZVVybCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgVGFiUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvVGFiUHJlc2VudGVyJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFiU2VsZWN0VXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiUHJlc2VudGVyOiBUYWJQcmVzZW50ZXIsXG4gICkge1xuICB9XG5cbiAgYXN5bmMgc2VsZWN0UHJldihjb3VudDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWJzID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0QWxsKCk7XG4gICAgaWYgKHRhYnMubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB0YWIgPSB0YWJzLmZpbmQodCA9PiB0LmFjdGl2ZSk7XG4gICAgaWYgKCF0YWIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2VsZWN0ID0gKHRhYi5pbmRleCAtIGNvdW50ICsgdGFicy5sZW5ndGgpICUgdGFicy5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNlbGVjdCh0YWJzW3NlbGVjdF0uaWQgYXMgbnVtYmVyKTtcbiAgfVxuXG4gIGFzeW5jIHNlbGVjdE5leHQoY291bnQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEFsbCgpO1xuICAgIGlmICh0YWJzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdGFiID0gdGFicy5maW5kKHQgPT4gdC5hY3RpdmUpO1xuICAgIGlmICghdGFiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdCA9ICh0YWIuaW5kZXggKyBjb3VudCkgJSB0YWJzLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuc2VsZWN0KHRhYnNbc2VsZWN0XS5pZCBhcyBudW1iZXIpO1xuICB9XG5cbiAgYXN5bmMgc2VsZWN0Rmlyc3QoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWJzID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0QWxsKCk7XG4gICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNlbGVjdCh0YWJzWzBdLmlkIGFzIG51bWJlcik7XG4gIH1cblxuICBhc3luYyBzZWxlY3RMYXN0KCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdGFicyA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEFsbCgpO1xuICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5zZWxlY3QodGFic1t0YWJzLmxlbmd0aCAtIDFdLmlkIGFzIG51bWJlcik7XG4gIH1cblxuICBhc3luYyBzZWxlY3RQcmV2U2VsZWN0ZWQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWJJZCA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldExhc3RTZWxlY3RlZElkKCk7XG4gICAgaWYgKHRhYklkID09PSBudWxsIHx8IHR5cGVvZiB0YWJJZCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNlbGVjdCh0YWJJZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgVGFiUHJlc2VudGVyIGZyb20gJy4uL3ByZXNlbnRlcnMvVGFiUHJlc2VudGVyJztcblxuY29uc3QgWk9PTV9TRVRUSU5HUzogbnVtYmVyW10gPSBbXG4gIDAuMzMsIDAuNTAsIDAuNjYsIDAuNzUsIDAuODAsIDAuOTAsIDEuMDAsXG4gIDEuMTAsIDEuMjUsIDEuNTAsIDEuNzUsIDIuMDAsIDIuNTAsIDMuMDBcbl07XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpvb21Vc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJQcmVzZW50ZXI6IFRhYlByZXNlbnRlcixcbiAgKSB7XG4gIH1cblxuICBhc3luYyB6b29tSW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgY29uc3QgdGFiSWQgPSB0YWIuaWQgYXMgbnVtYmVyO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRab29tKHRhYklkKTtcbiAgICBjb25zdCBmYWN0b3IgPSBaT09NX1NFVFRJTkdTLmZpbmQoZiA9PiBmID4gY3VycmVudCk7XG4gICAgaWYgKGZhY3Rvcikge1xuICAgICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNldFpvb20odGFiSWQgYXMgbnVtYmVyLCBmYWN0b3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHpvb21PdXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgY29uc3QgdGFiSWQgPSB0YWIuaWQgYXMgbnVtYmVyO1xuICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRab29tKHRhYklkKTtcbiAgICBjb25zdCBmYWN0b3IgPSBaT09NX1NFVFRJTkdTLnNsaWNlKDApLnJldmVyc2UoKS5maW5kKGYgPT4gZiA8IGN1cnJlbnQpO1xuICAgIGlmIChmYWN0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnRhYlByZXNlbnRlci5zZXRab29tKHRhYklkIGFzIG51bWJlciwgZmFjdG9yKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB6b29tTnV0b3JhbCgpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICByZXR1cm4gdGhpcy50YWJQcmVzZW50ZXIuc2V0Wm9vbSh0YWIuaWQgYXMgbnVtYmVyLCAxKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBOYXZpZ2F0ZUNsaWVudCBmcm9tICcuLi9jbGllbnRzL05hdmlnYXRlQ2xpZW50JztcbmltcG9ydCBUYWJQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9UYWJQcmVzZW50ZXInO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0ZVVzZUNhc2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHRhYlByZXNlbnRlcjogVGFiUHJlc2VudGVyLFxuICAgIHByaXZhdGUgbmF2aWdhdGVDbGllbnQ6IE5hdmlnYXRlQ2xpZW50LFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIG9wZW5IaXN0b3J5TmV4dCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgYXdhaXQgdGhpcy5uYXZpZ2F0ZUNsaWVudC5oaXN0b3J5TmV4dCh0YWIuaWQhISk7XG4gIH1cblxuICBhc3luYyBvcGVuSGlzdG9yeVByZXYoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGF3YWl0IHRoaXMubmF2aWdhdGVDbGllbnQuaGlzdG9yeVByZXYodGFiLmlkISEpO1xuICB9XG5cbiAgYXN5bmMgb3BlbkxpbmtOZXh0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICBhd2FpdCB0aGlzLm5hdmlnYXRlQ2xpZW50LmxpbmtOZXh0KHRhYi5pZCEhKTtcbiAgfVxuXG4gIGFzeW5jIG9wZW5MaW5rUHJldigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG4gICAgYXdhaXQgdGhpcy5uYXZpZ2F0ZUNsaWVudC5saW5rUHJldih0YWIuaWQhISk7XG4gIH1cblxuICBhc3luYyBvcGVuUGFyZW50KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHRhYi51cmwhISk7XG4gICAgaWYgKHVybC5oYXNoLmxlbmd0aCA+IDApIHtcbiAgICAgIHVybC5oYXNoID0gJyc7XG4gICAgfSBlbHNlIGlmICh1cmwuc2VhcmNoLmxlbmd0aCA+IDApIHtcbiAgICAgIHVybC5zZWFyY2ggPSAnJztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYmFzZW5hbWVQYXR0ZXJuID0gL1xcL1teL10rJC87XG4gICAgICBjb25zdCBsYXN0RGlyUGF0dGVybiA9IC9cXC9bXi9dK1xcLyQvO1xuICAgICAgaWYgKGJhc2VuYW1lUGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpIHtcbiAgICAgICAgdXJsLnBhdGhuYW1lID0gdXJsLnBhdGhuYW1lLnJlcGxhY2UoYmFzZW5hbWVQYXR0ZXJuLCAnLycpO1xuICAgICAgfSBlbHNlIGlmIChsYXN0RGlyUGF0dGVybi50ZXN0KHVybC5wYXRobmFtZSkpIHtcbiAgICAgICAgdXJsLnBhdGhuYW1lID0gdXJsLnBhdGhuYW1lLnJlcGxhY2UobGFzdERpclBhdHRlcm4sICcvJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLm9wZW4odXJsLmhyZWYpO1xuICB9XG5cbiAgYXN5bmMgb3BlblJvb3QoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgY29uc3QgdGFiID0gYXdhaXQgdGhpcy50YWJQcmVzZW50ZXIuZ2V0Q3VycmVudCgpO1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwodGFiLnVybCEhKTtcbiAgICBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5vcGVuKHVybC5vcmlnaW4pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSAnLi4vLi4vc2hhcmVkL21lc3NhZ2VzJztcblxuQGluamVjdGFibGUoKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmF2aWdhdGVDbGllbnQge1xuICBhc3luYyBoaXN0b3J5TmV4dCh0YWJJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5OQVZJR0FURV9ISVNUT1JZX05FWFQsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBoaXN0b3J5UHJldih0YWJJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5OQVZJR0FURV9ISVNUT1JZX1BSRVYsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsaW5rTmV4dCh0YWJJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5OQVZJR0FURV9MSU5LX05FWFQsXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBsaW5rUHJldih0YWJJZDogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgYXdhaXQgYnJvd3Nlci50YWJzLnNlbmRNZXNzYWdlKHRhYklkLCB7XG4gICAgICB0eXBlOiBtZXNzYWdlcy5OQVZJR0FURV9MSU5LX1BSRVYsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgTWFya1VzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvTWFya1VzZUNhc2UnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbWFya1VzZUNhc2U6IE1hcmtVc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIHNldEdsb2JhbChrZXk6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLm1hcmtVc2VDYXNlLnNldEdsb2JhbChrZXksIHgsIHkpO1xuICB9XG5cbiAganVtcEdsb2JhbChrZXk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMubWFya1VzZUNhc2UuanVtcEdsb2JhbChrZXkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IFRhYlByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL1RhYlByZXNlbnRlcic7XG5pbXBvcnQgTWFya1JlcG9zaXRvcnkgZnJvbSAnLi4vcmVwb3NpdG9yaWVzL01hcmtSZXBvc2l0b3J5JztcbmltcG9ydCBDb25zb2xlQ2xpZW50IGZyb20gJy4uL2luZnJhc3RydWN0dXJlcy9Db25zb2xlQ2xpZW50JztcbmltcG9ydCBDb250ZW50TWVzc2FnZUNsaWVudCBmcm9tICcuLi9pbmZyYXN0cnVjdHVyZXMvQ29udGVudE1lc3NhZ2VDbGllbnQnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXJrVXNlQ2FzZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdGFiUHJlc2VudGVyOiBUYWJQcmVzZW50ZXIsXG4gICAgcHJpdmF0ZSBtYXJrUmVwb3NpdG9yeTogTWFya1JlcG9zaXRvcnksXG4gICAgcHJpdmF0ZSBjb25zb2xlQ2xpZW50OiBDb25zb2xlQ2xpZW50LFxuICAgIHByaXZhdGUgY29udGVudE1lc3NhZ2VDbGllbnQ6IENvbnRlbnRNZXNzYWdlQ2xpZW50LFxuICApIHtcbiAgfVxuXG4gIGFzeW5jIHNldEdsb2JhbChrZXk6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHRhYiA9IGF3YWl0IHRoaXMudGFiUHJlc2VudGVyLmdldEN1cnJlbnQoKTtcbiAgICBjb25zdCBtYXJrID0geyB0YWJJZDogdGFiLmlkIGFzIG51bWJlciwgdXJsOiB0YWIudXJsIGFzIHN0cmluZywgeCwgeSB9O1xuICAgIHJldHVybiB0aGlzLm1hcmtSZXBvc2l0b3J5LnNldE1hcmsoa2V5LCBtYXJrKTtcbiAgfVxuXG4gIGFzeW5jIGp1bXBHbG9iYWwoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5nZXRDdXJyZW50KCk7XG5cbiAgICBjb25zdCBtYXJrID0gYXdhaXQgdGhpcy5tYXJrUmVwb3NpdG9yeS5nZXRNYXJrKGtleSk7XG4gICAgaWYgKCFtYXJrKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25zb2xlQ2xpZW50LnNob3dFcnJvcihcbiAgICAgICAgY3VycmVudC5pZCBhcyBudW1iZXIsICdNYXJrIGlzIG5vdCBzZXQnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHRoaXMuY29udGVudE1lc3NhZ2VDbGllbnQuc2Nyb2xsVG8obWFyay50YWJJZCwgbWFyay54LCBtYXJrLnkpO1xuICAgICAgcmV0dXJuIHRoaXMudGFiUHJlc2VudGVyLnNlbGVjdChtYXJrLnRhYklkKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zdCB0YWIgPSBhd2FpdCB0aGlzLnRhYlByZXNlbnRlci5jcmVhdGUobWFyay51cmwpO1xuICAgICAgcmV0dXJuIHRoaXMubWFya1JlcG9zaXRvcnkuc2V0TWFyayhrZXksIHtcbiAgICAgICAgdGFiSWQ6IHRhYi5pZCBhcyBudW1iZXIsIHVybDogbWFyay51cmwsIHg6IG1hcmsueCwgeTogbWFyay55LFxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBpbmplY3RhYmxlIH0gZnJvbSAndHN5cmluZ2UnO1xuaW1wb3J0IE1lbW9yeVN0b3JhZ2UgZnJvbSAnLi4vaW5mcmFzdHJ1Y3R1cmVzL01lbW9yeVN0b3JhZ2UnO1xuaW1wb3J0IEdsb2JhbE1hcmsgZnJvbSAnLi4vZG9tYWlucy9HbG9iYWxNYXJrJztcblxuY29uc3QgTUFSS19LRVkgPSAnbWFyayc7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hcmtSZXBvc2l0b3J5IHtcbiAgcHJpdmF0ZSBjYWNoZTogTWVtb3J5U3RvcmFnZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNhY2hlID0gbmV3IE1lbW9yeVN0b3JhZ2UoKTtcbiAgfVxuXG4gIGdldE1hcmsoa2V5OiBzdHJpbmcpOiBQcm9taXNlPEdsb2JhbE1hcmsgfCB1bmRlZmluZWQ+IHtcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMuZ2V0T3JFbXB0eU1hcmtzKCk7XG4gICAgY29uc3QgZGF0YSA9IG1hcmtzW2tleV07XG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIGNvbnN0IG1hcmsgPSB7IHRhYklkOiBkYXRhLnRhYklkLCB1cmw6IGRhdGEudXJsLCB4OiBkYXRhLngsIHk6IGRhdGEueSB9O1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobWFyayk7XG4gIH1cblxuICBzZXRNYXJrKGtleTogc3RyaW5nLCBtYXJrOiBHbG9iYWxNYXJrKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBtYXJrcyA9IHRoaXMuZ2V0T3JFbXB0eU1hcmtzKCk7XG4gICAgbWFya3Nba2V5XSA9IHsgdGFiSWQ6IG1hcmsudGFiSWQsIHVybDogbWFyay51cmwsIHg6IG1hcmsueCwgeTogbWFyay55IH07XG4gICAgdGhpcy5jYWNoZS5zZXQoTUFSS19LRVksIG1hcmtzKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgfVxuXG4gIGdldE9yRW1wdHlNYXJrcygpIHtcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5nZXQoTUFSS19LRVkpIHx8IHt9O1xuICB9XG59XG5cbiIsImltcG9ydCB7IGluamVjdGFibGUgfSBmcm9tICd0c3lyaW5nZSc7XG5pbXBvcnQgVmVyc2lvblVzZUNhc2UgZnJvbSAnLi4vdXNlY2FzZXMvVmVyc2lvblVzZUNhc2UnO1xuXG5AaW5qZWN0YWJsZSgpXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzaW9uQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgdmVyc2lvblVzZUNhc2U6IFZlcnNpb25Vc2VDYXNlLFxuICApIHtcbiAgfVxuXG4gIG5vdGlmeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy52ZXJzaW9uVXNlQ2FzZS5ub3RpZnkoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaW5qZWN0YWJsZSB9IGZyb20gJ3RzeXJpbmdlJztcbmltcG9ydCBUYWJQcmVzZW50ZXIgZnJvbSAnLi4vcHJlc2VudGVycy9UYWJQcmVzZW50ZXInO1xuaW1wb3J0IE5vdGlmeVByZXNlbnRlciBmcm9tICcuLi9wcmVzZW50ZXJzL05vdGlmeVByZXNlbnRlcic7XG5cbkBpbmplY3RhYmxlKClcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnNpb25Vc2VDYXNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB0YWJQcmVzZW50ZXI6IFRhYlByZXNlbnRlcixcbiAgICBwcml2YXRlIG5vdGlmeVByZXNlbnRlcjogTm90aWZ5UHJlc2VudGVyLFxuICApIHtcbiAgfVxuXG4gIG5vdGlmeSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBtYW5pZmVzdCA9IGJyb3dzZXIucnVudGltZS5nZXRNYW5pZmVzdCgpO1xuICAgIGNvbnN0IHVybCA9IHRoaXMucmVsZWFzZU5vdGVVcmwobWFuaWZlc3QudmVyc2lvbik7XG4gICAgcmV0dXJuIHRoaXMubm90aWZ5UHJlc2VudGVyLm5vdGlmeVVwZGF0ZWQobWFuaWZlc3QudmVyc2lvbiwgKCkgPT4ge1xuICAgICAgdGhpcy50YWJQcmVzZW50ZXIuY3JlYXRlKHVybCk7XG4gICAgfSk7XG4gIH1cblxuICByZWxlYXNlTm90ZVVybCh2ZXJzaW9uPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAodmVyc2lvbikge1xuICAgICAgcmV0dXJuIGBodHRwczovL2dpdGh1Yi5jb20vdWVva2FuZGUvdmltLXZpeGVuL3JlbGVhc2VzL3RhZy8ke3ZlcnNpb259YDtcbiAgICB9XG4gICAgcmV0dXJuICdodHRwczovL2dpdGh1Yi5jb20vdWVva2FuZGUvdmltLXZpeGVuL3JlbGVhc2VzLyc7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=