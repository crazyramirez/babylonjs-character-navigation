(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babylonjs"));
	else if(typeof define === 'function' && define.amd)
		define("babylonjs-materials", ["babylonjs"], factory);
	else if(typeof exports === 'object')
		exports["babylonjs-materials"] = factory(require("babylonjs"));
	else
		root["MATERIALS"] = factory(root["BABYLON"]);
})((typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : this), (__WEBPACK_EXTERNAL_MODULE_core_Misc_decorators__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../../node_modules/tslib/tslib.es6.js":
/*!***************************************************!*\
  !*** ../../../../node_modules/tslib/tslib.es6.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldIn": () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__esDecorate": () => (/* binding */ __esDecorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__propKey": () => (/* binding */ __propKey),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__runInitializers": () => (/* binding */ __runInitializers),
/* harmony export */   "__setFunctionName": () => (/* binding */ __setFunctionName),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
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
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
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

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};

function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};

function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
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

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}


/***/ }),

/***/ "../../../lts/materials/dist/custom/customMaterial.js":
/*!************************************************************!*\
  !*** ../../../lts/materials/dist/custom/customMaterial.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMaterial": () => (/* binding */ CustomMaterial),
/* harmony export */   "CustomShaderStructure": () => (/* binding */ CustomShaderStructure),
/* harmony export */   "ShaderSpecialParts": () => (/* binding */ ShaderSpecialParts)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Misc/typeStore */ "core/Misc/decorators");
/* harmony import */ var core_Materials_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__);




var CustomShaderStructure = /** @class */ (function () {
    function CustomShaderStructure() {
    }
    return CustomShaderStructure;
}());

var ShaderSpecialParts = /** @class */ (function () {
    function ShaderSpecialParts() {
    }
    return ShaderSpecialParts;
}());

var CustomMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(CustomMaterial, _super);
    function CustomMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        _this.CustomParts = new ShaderSpecialParts();
        _this.customShaderNameResolve = _this.Builder;
        _this.FragmentShader = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore.defaultPixelShader;
        _this.VertexShader = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore.defaultVertexShader;
        return _this;
    }
    CustomMaterial.prototype.AttachAfterBind = function (mesh, effect) {
        if (this._newUniformInstances) {
            for (var el in this._newUniformInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "vec2") {
                    effect.setVector2(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "vec3") {
                    effect.setVector3(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "vec4") {
                    effect.setVector4(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "mat4") {
                    effect.setMatrix(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "float") {
                    effect.setFloat(ea[1], this._newUniformInstances[el]);
                }
            }
        }
        if (this._newSamplerInstances) {
            for (var el in this._newSamplerInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "sampler2D" && this._newSamplerInstances[el].isReady && this._newSamplerInstances[el].isReady()) {
                    effect.setTexture(ea[1], this._newSamplerInstances[el]);
                }
            }
        }
    };
    CustomMaterial.prototype.ReviewUniform = function (name, arr) {
        if (name == "uniform" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") == -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        if (name == "sampler" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") != -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        return arr;
    };
    CustomMaterial.prototype.Builder = function (shaderName, uniforms, uniformBuffers, samplers, defines, attributes) {
        var _this = this;
        if (attributes && this._customAttributes && this._customAttributes.length > 0) {
            attributes.push.apply(attributes, this._customAttributes);
        }
        this.ReviewUniform("uniform", uniforms);
        this.ReviewUniform("sampler", samplers);
        if (this._isCreatedShader) {
            return this._createdShaderName;
        }
        this._isCreatedShader = false;
        CustomMaterial.ShaderIndexer++;
        var name = "custom_" + CustomMaterial.ShaderIndexer;
        var fn_afterBind = this._afterBind.bind(this);
        this._afterBind = function (m, e) {
            if (!e) {
                return;
            }
            _this.AttachAfterBind(m, e);
            try {
                fn_afterBind(m, e);
            }
            catch (e) { }
        };
        core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "VertexShader"] = this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN", this.CustomParts.Vertex_Begin ? this.CustomParts.Vertex_Begin : "")
            .replace("#define CUSTOM_VERTEX_DEFINITIONS", (this._customUniform ? this._customUniform.join("\n") : "") + (this.CustomParts.Vertex_Definitions ? this.CustomParts.Vertex_Definitions : ""))
            .replace("#define CUSTOM_VERTEX_MAIN_BEGIN", this.CustomParts.Vertex_MainBegin ? this.CustomParts.Vertex_MainBegin : "")
            .replace("#define CUSTOM_VERTEX_UPDATE_POSITION", this.CustomParts.Vertex_Before_PositionUpdated ? this.CustomParts.Vertex_Before_PositionUpdated : "")
            .replace("#define CUSTOM_VERTEX_UPDATE_NORMAL", this.CustomParts.Vertex_Before_NormalUpdated ? this.CustomParts.Vertex_Before_NormalUpdated : "")
            .replace("#define CUSTOM_VERTEX_MAIN_END", this.CustomParts.Vertex_MainEnd ? this.CustomParts.Vertex_MainEnd : "");
        if (this.CustomParts.Vertex_After_WorldPosComputed) {
            core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "VertexShader"] = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS", this.CustomParts.Vertex_After_WorldPosComputed);
        }
        core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "PixelShader"] = this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN", this.CustomParts.Fragment_Begin ? this.CustomParts.Fragment_Begin : "")
            .replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN", this.CustomParts.Fragment_MainBegin ? this.CustomParts.Fragment_MainBegin : "")
            .replace("#define CUSTOM_FRAGMENT_DEFINITIONS", (this._customUniform ? this._customUniform.join("\n") : "") + (this.CustomParts.Fragment_Definitions ? this.CustomParts.Fragment_Definitions : ""))
            .replace("#define CUSTOM_FRAGMENT_UPDATE_DIFFUSE", this.CustomParts.Fragment_Custom_Diffuse ? this.CustomParts.Fragment_Custom_Diffuse : "")
            .replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA", this.CustomParts.Fragment_Custom_Alpha ? this.CustomParts.Fragment_Custom_Alpha : "")
            .replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS", this.CustomParts.Fragment_Before_Lights ? this.CustomParts.Fragment_Before_Lights : "")
            .replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR", this.CustomParts.Fragment_Before_FragColor ? this.CustomParts.Fragment_Before_FragColor : "")
            .replace("#define CUSTOM_FRAGMENT_MAIN_END", this.CustomParts.Fragment_MainEnd ? this.CustomParts.Fragment_MainEnd : "");
        if (this.CustomParts.Fragment_Before_Fog) {
            core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "PixelShader"] = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG", this.CustomParts.Fragment_Before_Fog);
        }
        this._isCreatedShader = true;
        this._createdShaderName = name;
        return name;
    };
    CustomMaterial.prototype.AddUniform = function (name, kind, param) {
        if (!this._customUniform) {
            this._customUniform = new Array();
            this._newUniforms = new Array();
            this._newSamplerInstances = {};
            this._newUniformInstances = {};
        }
        if (param) {
            if (kind.indexOf("sampler") != -1) {
                this._newSamplerInstances[kind + "-" + name] = param;
            }
            else {
                this._newUniformInstances[kind + "-" + name] = param;
            }
        }
        this._customUniform.push("uniform " + kind + " " + name + ";");
        this._newUniforms.push(name);
        return this;
    };
    CustomMaterial.prototype.AddAttribute = function (name) {
        if (!this._customAttributes) {
            this._customAttributes = [];
        }
        this._customAttributes.push(name);
        return this;
    };
    CustomMaterial.prototype.Fragment_Begin = function (shaderPart) {
        this.CustomParts.Fragment_Begin = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Fragment_Definitions = function (shaderPart) {
        this.CustomParts.Fragment_Definitions = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Fragment_MainBegin = function (shaderPart) {
        this.CustomParts.Fragment_MainBegin = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Fragment_MainEnd = function (shaderPart) {
        this.CustomParts.Fragment_MainEnd = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Fragment_Custom_Diffuse = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Diffuse = shaderPart.replace("result", "diffuseColor");
        return this;
    };
    CustomMaterial.prototype.Fragment_Custom_Alpha = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Alpha = shaderPart.replace("result", "alpha");
        return this;
    };
    CustomMaterial.prototype.Fragment_Before_Lights = function (shaderPart) {
        this.CustomParts.Fragment_Before_Lights = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Fragment_Before_Fog = function (shaderPart) {
        this.CustomParts.Fragment_Before_Fog = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Fragment_Before_FragColor = function (shaderPart) {
        this.CustomParts.Fragment_Before_FragColor = shaderPart.replace("result", "color");
        return this;
    };
    CustomMaterial.prototype.Vertex_Begin = function (shaderPart) {
        this.CustomParts.Vertex_Begin = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Vertex_Definitions = function (shaderPart) {
        this.CustomParts.Vertex_Definitions = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Vertex_MainBegin = function (shaderPart) {
        this.CustomParts.Vertex_MainBegin = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Vertex_Before_PositionUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_PositionUpdated = shaderPart.replace("result", "positionUpdated");
        return this;
    };
    CustomMaterial.prototype.Vertex_Before_NormalUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_NormalUpdated = shaderPart.replace("result", "normalUpdated");
        return this;
    };
    CustomMaterial.prototype.Vertex_After_WorldPosComputed = function (shaderPart) {
        this.CustomParts.Vertex_After_WorldPosComputed = shaderPart;
        return this;
    };
    CustomMaterial.prototype.Vertex_MainEnd = function (shaderPart) {
        this.CustomParts.Vertex_MainEnd = shaderPart;
        return this;
    };
    CustomMaterial.ShaderIndexer = 1;
    return CustomMaterial;
}(core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.StandardMaterial));

(0,core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.CustomMaterial", CustomMaterial);


/***/ }),

/***/ "../../../lts/materials/dist/custom/index.js":
/*!***************************************************!*\
  !*** ../../../lts/materials/dist/custom/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMaterial": () => (/* reexport safe */ _customMaterial__WEBPACK_IMPORTED_MODULE_0__.CustomMaterial),
/* harmony export */   "CustomShaderStructure": () => (/* reexport safe */ _customMaterial__WEBPACK_IMPORTED_MODULE_0__.CustomShaderStructure),
/* harmony export */   "PBRCustomMaterial": () => (/* reexport safe */ _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.PBRCustomMaterial),
/* harmony export */   "ShaderAlebdoParts": () => (/* reexport safe */ _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__.ShaderAlebdoParts),
/* harmony export */   "ShaderSpecialParts": () => (/* reexport safe */ _customMaterial__WEBPACK_IMPORTED_MODULE_0__.ShaderSpecialParts)
/* harmony export */ });
/* harmony import */ var _customMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customMaterial */ "../../../lts/materials/dist/custom/customMaterial.js");
/* harmony import */ var _pbrCustomMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pbrCustomMaterial */ "../../../lts/materials/dist/custom/pbrCustomMaterial.js");




/***/ }),

/***/ "../../../lts/materials/dist/custom/pbrCustomMaterial.js":
/*!***************************************************************!*\
  !*** ../../../lts/materials/dist/custom/pbrCustomMaterial.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PBRCustomMaterial": () => (/* binding */ PBRCustomMaterial),
/* harmony export */   "ShaderAlebdoParts": () => (/* binding */ ShaderAlebdoParts)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Engines/Processors/shaderCodeInliner */ "core/Misc/decorators");
/* harmony import */ var core_Materials_effect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__);





var ShaderAlebdoParts = /** @class */ (function () {
    function ShaderAlebdoParts() {
    }
    return ShaderAlebdoParts;
}());

var PBRCustomMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(PBRCustomMaterial, _super);
    function PBRCustomMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        _this.CustomParts = new ShaderAlebdoParts();
        _this.customShaderNameResolve = _this.Builder;
        _this.FragmentShader = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore.pbrPixelShader;
        _this.VertexShader = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore.pbrVertexShader;
        _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockAlbedoOpacity>/g, core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.IncludesShadersStore.pbrBlockAlbedoOpacity);
        _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockReflectivity>/g, core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.IncludesShadersStore.pbrBlockReflectivity);
        _this.FragmentShader = _this.FragmentShader.replace(/#include<pbrBlockFinalColorComposition>/g, core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.IncludesShadersStore.pbrBlockFinalColorComposition);
        return _this;
    }
    PBRCustomMaterial.prototype.AttachAfterBind = function (mesh, effect) {
        if (this._newUniformInstances) {
            for (var el in this._newUniformInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "vec2") {
                    effect.setVector2(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "vec3") {
                    effect.setVector3(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "vec4") {
                    effect.setVector4(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "mat4") {
                    effect.setMatrix(ea[1], this._newUniformInstances[el]);
                }
                else if (ea[0] == "float") {
                    effect.setFloat(ea[1], this._newUniformInstances[el]);
                }
            }
        }
        if (this._newSamplerInstances) {
            for (var el in this._newSamplerInstances) {
                var ea = el.toString().split("-");
                if (ea[0] == "sampler2D" && this._newSamplerInstances[el].isReady && this._newSamplerInstances[el].isReady()) {
                    effect.setTexture(ea[1], this._newSamplerInstances[el]);
                }
            }
        }
    };
    PBRCustomMaterial.prototype.ReviewUniform = function (name, arr) {
        if (name == "uniform" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") == -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        if (name == "sampler" && this._newUniforms) {
            for (var ind = 0; ind < this._newUniforms.length; ind++) {
                if (this._customUniform[ind].indexOf("sampler") != -1) {
                    arr.push(this._newUniforms[ind].replace(/\[\d*\]/g, ""));
                }
            }
        }
        return arr;
    };
    PBRCustomMaterial.prototype.Builder = function (shaderName, uniforms, uniformBuffers, samplers, defines, attributes, options) {
        var _this = this;
        if (options) {
            var currentProcessing_1 = options.processFinalCode;
            options.processFinalCode = function (type, code) {
                if (type === "vertex") {
                    return currentProcessing_1 ? currentProcessing_1(type, code) : code;
                }
                var sci = new core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.ShaderCodeInliner(code);
                sci.inlineToken = "#define pbr_inline";
                sci.processCode();
                return currentProcessing_1 ? currentProcessing_1(type, sci.code) : sci.code;
            };
        }
        if (attributes && this._customAttributes && this._customAttributes.length > 0) {
            attributes.push.apply(attributes, this._customAttributes);
        }
        this.ReviewUniform("uniform", uniforms);
        this.ReviewUniform("sampler", samplers);
        if (this._isCreatedShader) {
            return this._createdShaderName;
        }
        this._isCreatedShader = false;
        PBRCustomMaterial.ShaderIndexer++;
        var name = "custom_" + PBRCustomMaterial.ShaderIndexer;
        var fn_afterBind = this._afterBind.bind(this);
        this._afterBind = function (m, e) {
            if (!e) {
                return;
            }
            _this.AttachAfterBind(m, e);
            try {
                fn_afterBind(m, e);
            }
            catch (e) { }
        };
        core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "VertexShader"] = this.VertexShader.replace("#define CUSTOM_VERTEX_BEGIN", this.CustomParts.Vertex_Begin ? this.CustomParts.Vertex_Begin : "")
            .replace("#define CUSTOM_VERTEX_DEFINITIONS", (this._customUniform ? this._customUniform.join("\n") : "") + (this.CustomParts.Vertex_Definitions ? this.CustomParts.Vertex_Definitions : ""))
            .replace("#define CUSTOM_VERTEX_MAIN_BEGIN", this.CustomParts.Vertex_MainBegin ? this.CustomParts.Vertex_MainBegin : "")
            .replace("#define CUSTOM_VERTEX_UPDATE_POSITION", this.CustomParts.Vertex_Before_PositionUpdated ? this.CustomParts.Vertex_Before_PositionUpdated : "")
            .replace("#define CUSTOM_VERTEX_UPDATE_NORMAL", this.CustomParts.Vertex_Before_NormalUpdated ? this.CustomParts.Vertex_Before_NormalUpdated : "")
            .replace("#define CUSTOM_VERTEX_MAIN_END", this.CustomParts.Vertex_MainEnd ? this.CustomParts.Vertex_MainEnd : "");
        if (this.CustomParts.Vertex_After_WorldPosComputed) {
            core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "VertexShader"] = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "VertexShader"].replace("#define CUSTOM_VERTEX_UPDATE_WORLDPOS", this.CustomParts.Vertex_After_WorldPosComputed);
        }
        core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "PixelShader"] = this.FragmentShader.replace("#define CUSTOM_FRAGMENT_BEGIN", this.CustomParts.Fragment_Begin ? this.CustomParts.Fragment_Begin : "")
            .replace("#define CUSTOM_FRAGMENT_MAIN_BEGIN", this.CustomParts.Fragment_MainBegin ? this.CustomParts.Fragment_MainBegin : "")
            .replace("#define CUSTOM_FRAGMENT_DEFINITIONS", (this._customUniform ? this._customUniform.join("\n") : "") + (this.CustomParts.Fragment_Definitions ? this.CustomParts.Fragment_Definitions : ""))
            .replace("#define CUSTOM_FRAGMENT_UPDATE_ALBEDO", this.CustomParts.Fragment_Custom_Albedo ? this.CustomParts.Fragment_Custom_Albedo : "")
            .replace("#define CUSTOM_FRAGMENT_UPDATE_ALPHA", this.CustomParts.Fragment_Custom_Alpha ? this.CustomParts.Fragment_Custom_Alpha : "")
            .replace("#define CUSTOM_FRAGMENT_BEFORE_LIGHTS", this.CustomParts.Fragment_Before_Lights ? this.CustomParts.Fragment_Before_Lights : "")
            .replace("#define CUSTOM_FRAGMENT_UPDATE_METALLICROUGHNESS", this.CustomParts.Fragment_Custom_MetallicRoughness ? this.CustomParts.Fragment_Custom_MetallicRoughness : "")
            .replace("#define CUSTOM_FRAGMENT_UPDATE_MICROSURFACE", this.CustomParts.Fragment_Custom_MicroSurface ? this.CustomParts.Fragment_Custom_MicroSurface : "")
            .replace("#define CUSTOM_FRAGMENT_BEFORE_FINALCOLORCOMPOSITION", this.CustomParts.Fragment_Before_FinalColorComposition ? this.CustomParts.Fragment_Before_FinalColorComposition : "")
            .replace("#define CUSTOM_FRAGMENT_BEFORE_FRAGCOLOR", this.CustomParts.Fragment_Before_FragColor ? this.CustomParts.Fragment_Before_FragColor : "")
            .replace("#define CUSTOM_FRAGMENT_MAIN_END", this.CustomParts.Fragment_MainEnd ? this.CustomParts.Fragment_MainEnd : "");
        if (this.CustomParts.Fragment_Before_Fog) {
            core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "PixelShader"] = core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.Effect.ShadersStore[name + "PixelShader"].replace("#define CUSTOM_FRAGMENT_BEFORE_FOG", this.CustomParts.Fragment_Before_Fog);
        }
        this._isCreatedShader = true;
        this._createdShaderName = name;
        return name;
    };
    PBRCustomMaterial.prototype.AddUniform = function (name, kind, param) {
        if (!this._customUniform) {
            this._customUniform = new Array();
            this._newUniforms = new Array();
            this._newSamplerInstances = {};
            this._newUniformInstances = {};
        }
        if (param) {
            if (kind.indexOf("sampler") != -1) {
                this._newSamplerInstances[kind + "-" + name] = param;
            }
            else {
                this._newUniformInstances[kind + "-" + name] = param;
            }
        }
        this._customUniform.push("uniform " + kind + " " + name + ";");
        this._newUniforms.push(name);
        return this;
    };
    PBRCustomMaterial.prototype.AddAttribute = function (name) {
        if (!this._customAttributes) {
            this._customAttributes = [];
        }
        this._customAttributes.push(name);
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Begin = function (shaderPart) {
        this.CustomParts.Fragment_Begin = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Definitions = function (shaderPart) {
        this.CustomParts.Fragment_Definitions = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_MainBegin = function (shaderPart) {
        this.CustomParts.Fragment_MainBegin = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Custom_Albedo = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Albedo = shaderPart.replace("result", "surfaceAlbedo");
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Custom_Alpha = function (shaderPart) {
        this.CustomParts.Fragment_Custom_Alpha = shaderPart.replace("result", "alpha");
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Before_Lights = function (shaderPart) {
        this.CustomParts.Fragment_Before_Lights = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Custom_MetallicRoughness = function (shaderPart) {
        this.CustomParts.Fragment_Custom_MetallicRoughness = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Custom_MicroSurface = function (shaderPart) {
        this.CustomParts.Fragment_Custom_MicroSurface = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Before_Fog = function (shaderPart) {
        this.CustomParts.Fragment_Before_Fog = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Before_FinalColorComposition = function (shaderPart) {
        this.CustomParts.Fragment_Before_FinalColorComposition = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_Before_FragColor = function (shaderPart) {
        this.CustomParts.Fragment_Before_FragColor = shaderPart.replace("result", "color");
        return this;
    };
    PBRCustomMaterial.prototype.Fragment_MainEnd = function (shaderPart) {
        this.CustomParts.Fragment_MainEnd = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_Begin = function (shaderPart) {
        this.CustomParts.Vertex_Begin = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_Definitions = function (shaderPart) {
        this.CustomParts.Vertex_Definitions = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_MainBegin = function (shaderPart) {
        this.CustomParts.Vertex_MainBegin = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_Before_PositionUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_PositionUpdated = shaderPart.replace("result", "positionUpdated");
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_Before_NormalUpdated = function (shaderPart) {
        this.CustomParts.Vertex_Before_NormalUpdated = shaderPart.replace("result", "normalUpdated");
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_After_WorldPosComputed = function (shaderPart) {
        this.CustomParts.Vertex_After_WorldPosComputed = shaderPart;
        return this;
    };
    PBRCustomMaterial.prototype.Vertex_MainEnd = function (shaderPart) {
        this.CustomParts.Vertex_MainEnd = shaderPart;
        return this;
    };
    PBRCustomMaterial.ShaderIndexer = 1;
    return PBRCustomMaterial;
}(core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.PBRMaterial));

(0,core_Materials_effect__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.PBRCustomMaterial", PBRCustomMaterial);


/***/ }),

/***/ "../../../lts/materials/dist/legacy/legacy-custom.js":
/*!***********************************************************!*\
  !*** ../../../lts/materials/dist/legacy/legacy-custom.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomMaterial": () => (/* reexport safe */ _custom_index__WEBPACK_IMPORTED_MODULE_0__.CustomMaterial),
/* harmony export */   "CustomShaderStructure": () => (/* reexport safe */ _custom_index__WEBPACK_IMPORTED_MODULE_0__.CustomShaderStructure),
/* harmony export */   "PBRCustomMaterial": () => (/* reexport safe */ _custom_index__WEBPACK_IMPORTED_MODULE_0__.PBRCustomMaterial),
/* harmony export */   "ShaderAlebdoParts": () => (/* reexport safe */ _custom_index__WEBPACK_IMPORTED_MODULE_0__.ShaderAlebdoParts),
/* harmony export */   "ShaderSpecialParts": () => (/* reexport safe */ _custom_index__WEBPACK_IMPORTED_MODULE_0__.ShaderSpecialParts)
/* harmony export */ });
/* harmony import */ var _custom_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../custom/index */ "../../../lts/materials/dist/custom/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in _custom_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _custom_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "core/Misc/decorators":
/*!****************************************************************************************************!*\
  !*** external {"root":"BABYLON","commonjs":"babylonjs","commonjs2":"babylonjs","amd":"babylonjs"} ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_Misc_decorators__;

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/custom.ts ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "materials": () => (/* reexport module object */ materials_legacy_legacy_custom__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var materials_legacy_legacy_custom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materials/legacy/legacy-custom */ "../../../lts/materials/dist/legacy/legacy-custom.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (materials_legacy_legacy_custom__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=babylon.customMaterial.js.map