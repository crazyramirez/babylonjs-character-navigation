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

/***/ "../../../lts/materials/dist/legacy/legacy-terrain.js":
/*!************************************************************!*\
  !*** ../../../lts/materials/dist/legacy/legacy-terrain.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerrainMaterial": () => (/* reexport safe */ _terrain_index__WEBPACK_IMPORTED_MODULE_0__.TerrainMaterial)
/* harmony export */ });
/* harmony import */ var _terrain_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../terrain/index */ "../../../lts/materials/dist/terrain/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in _terrain_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _terrain_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "../../../lts/materials/dist/terrain/index.js":
/*!****************************************************!*\
  !*** ../../../lts/materials/dist/terrain/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerrainMaterial": () => (/* reexport safe */ _terrainMaterial__WEBPACK_IMPORTED_MODULE_0__.TerrainMaterial)
/* harmony export */ });
/* harmony import */ var _terrainMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrainMaterial */ "../../../lts/materials/dist/terrain/terrainMaterial.js");



/***/ }),

/***/ "../../../lts/materials/dist/terrain/terrain.fragment.js":
/*!***************************************************************!*\
  !*** ../../../lts/materials/dist/terrain/terrain.fragment.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "terrainPixelShader": () => (/* binding */ terrainPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Shaders/ShadersInclude/imageProcessingCompatibility */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.













var name = "terrainPixelShader";
var shader = "precision highp float;\nuniform vec4 vEyePosition;\nuniform vec4 vDiffuseColor;\n#ifdef SPECULARTERM\nuniform vec4 vSpecularColor;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;\nuniform sampler2D textureSampler;\nuniform vec2 vTextureInfos;\nuniform sampler2D diffuse1Sampler;\nuniform sampler2D diffuse2Sampler;\nuniform sampler2D diffuse3Sampler;\nuniform vec2 diffuse1Infos;\nuniform vec2 diffuse2Infos;\nuniform vec2 diffuse3Infos;\n#endif\n#ifdef BUMP\nuniform sampler2D bump1Sampler;\nuniform sampler2D bump2Sampler;\nuniform sampler2D bump3Sampler;\n#endif\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\n#ifdef BUMP\n#extension GL_OES_standard_derivatives : enable\nmat3 cotangent_frame(vec3 normal,vec3 p,vec2 uv)\n{\nvec3 dp1=dFdx(p);\nvec3 dp2=dFdy(p);\nvec2 duv1=dFdx(uv);\nvec2 duv2=dFdy(uv);\nvec3 dp2perp=cross(dp2,normal);\nvec3 dp1perp=cross(normal,dp1);\nvec3 tangent=dp2perp*duv1.x+dp1perp*duv2.x;\nvec3 binormal=dp2perp*duv1.y+dp1perp*duv2.y;\nfloat invmax=inversesqrt(max(dot(tangent,tangent),dot(binormal,binormal)));\nreturn mat3(tangent*invmax,binormal*invmax,normal);\n}\nvec3 perturbNormal(vec3 viewDir,vec3 mixColor)\n{\nvec3 bump1Color=texture2D(bump1Sampler,vTextureUV*diffuse1Infos).xyz;\nvec3 bump2Color=texture2D(bump2Sampler,vTextureUV*diffuse2Infos).xyz;\nvec3 bump3Color=texture2D(bump3Sampler,vTextureUV*diffuse3Infos).xyz;\nbump1Color.rgb*=mixColor.r;\nbump2Color.rgb=mix(bump1Color.rgb,bump2Color.rgb,mixColor.g);\nvec3 map=mix(bump2Color.rgb,bump3Color.rgb,mixColor.b);\nmap=map*255./127.-128./127.;\nmat3 TBN=cotangent_frame(vNormalW*vTextureInfos.y,-viewDir,vTextureUV);\nreturn normalize(TBN*map);\n}\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);\nvec4 baseColor=vec4(1.,1.,1.,1.);\nvec3 diffuseColor=vDiffuseColor.rgb;\n#ifdef SPECULARTERM\nfloat glossiness=vSpecularColor.a;\nvec3 specularColor=vSpecularColor.rgb;\n#else\nfloat glossiness=0.;\n#endif\nfloat alpha=vDiffuseColor.a;\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef DIFFUSE\nbaseColor=texture2D(textureSampler,vTextureUV);\n#if defined(BUMP) && defined(DIFFUSE)\nnormalW=perturbNormal(viewDirectionW,baseColor.rgb);\n#endif\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vTextureInfos.y;\nvec4 diffuse1Color=texture2D(diffuse1Sampler,vTextureUV*diffuse1Infos);\nvec4 diffuse2Color=texture2D(diffuse2Sampler,vTextureUV*diffuse2Infos);\nvec4 diffuse3Color=texture2D(diffuse3Sampler,vTextureUV*diffuse3Infos);\ndiffuse1Color.rgb*=baseColor.r;\ndiffuse2Color.rgb=mix(diffuse1Color.rgb,diffuse2Color.rgb,baseColor.g);\nbaseColor.rgb=mix(diffuse2Color.rgb,diffuse3Color.rgb,baseColor.b);\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nbaseColor.rgb*=vColor.rgb;\n#endif\nvec3 diffuseBase=vec3(0.,0.,0.);\nlightingInfo info;\nfloat shadow=1.;\n#ifdef SPECULARTERM\nvec3 specularBase=vec3(0.,0.,0.);\n#endif\n#include<lightFragment>[0..maxSimultaneousLights]\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#ifdef SPECULARTERM\nvec3 finalSpecular=specularBase*specularColor;\n#else\nvec3 finalSpecular=vec3(0.0);\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor*baseColor.rgb,0.0,1.0);\nvec4 color=vec4(finalDiffuse+finalSpecular,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var terrainPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/materials/dist/terrain/terrain.vertex.js":
/*!*************************************************************!*\
  !*** ../../../lts/materials/dist/terrain/terrain.vertex.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "terrainVertexShader": () => (/* binding */ terrainVertexShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Shaders/ShadersInclude/vertexColorMixing */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.















var name = "terrainVertexShader";
var shader = "precision highp float;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vTextureUV;uniform mat4 textureMatrix;uniform vec2 vTextureInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\nvec4 worldPos=finalWorld*vec4(position,1.0);gl_Position=viewProjection*worldPos;vPositionW=vec3(worldPos);\n#ifdef NORMAL\nvNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vTextureInfos.x==0.)\n{vTextureUV=vec2(textureMatrix*vec4(uv,1.0,0.0));}\nelse\n{vTextureUV=vec2(textureMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var terrainVertexShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/materials/dist/terrain/terrainMaterial.js":
/*!**************************************************************!*\
  !*** ../../../lts/materials/dist/terrain/terrainMaterial.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TerrainMaterial": () => (/* binding */ TerrainMaterial)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/clipPlaneMaterialHelper */ "core/Misc/decorators");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _terrain_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terrain.fragment */ "../../../lts/materials/dist/terrain/terrain.fragment.js");
/* harmony import */ var _terrain_vertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terrain.vertex */ "../../../lts/materials/dist/terrain/terrain.vertex.js");














var TerrainMaterialDefines = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TerrainMaterialDefines, _super);
    function TerrainMaterialDefines() {
        var _this = _super.call(this) || this;
        _this.DIFFUSE = false;
        _this.BUMP = false;
        _this.CLIPPLANE = false;
        _this.CLIPPLANE2 = false;
        _this.CLIPPLANE3 = false;
        _this.CLIPPLANE4 = false;
        _this.CLIPPLANE5 = false;
        _this.CLIPPLANE6 = false;
        _this.ALPHATEST = false;
        _this.DEPTHPREPASS = false;
        _this.POINTSIZE = false;
        _this.FOG = false;
        _this.SPECULARTERM = false;
        _this.NORMAL = false;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.VERTEXCOLOR = false;
        _this.VERTEXALPHA = false;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BonesPerMesh = 0;
        _this.INSTANCES = false;
        _this.INSTANCESCOLOR = false;
        _this.IMAGEPROCESSINGPOSTPROCESS = false;
        _this.SKIPFINALCOLORCLAMP = false;
        _this.rebuild();
        return _this;
    }
    return TerrainMaterialDefines;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialDefines));
var TerrainMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(TerrainMaterial, _super);
    function TerrainMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        _this.diffuseColor = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Color3(1, 1, 1);
        _this.specularColor = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Color3(0, 0, 0);
        _this.specularPower = 64;
        _this._disableLighting = false;
        _this._maxSimultaneousLights = 4;
        return _this;
    }
    TerrainMaterial.prototype.needAlphaBlending = function () {
        return this.alpha < 1.0;
    };
    TerrainMaterial.prototype.needAlphaTesting = function () {
        return false;
    };
    TerrainMaterial.prototype.getAlphaTestTexture = function () {
        return null;
    };
    // Methods
    TerrainMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh, useInstances) {
        if (this.isFrozen) {
            if (subMesh.effect && subMesh.effect._wasPreviouslyReady && subMesh.effect._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            subMesh.materialDefines = new TerrainMaterialDefines();
        }
        var defines = subMesh.materialDefines;
        var scene = this.getScene();
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        var engine = scene.getEngine();
        // Textures
        if (scene.texturesEnabled) {
            if (!this.mixTexture || !this.mixTexture.isReady()) {
                return false;
            }
            defines._needUVs = true;
            if (core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialFlags.DiffuseTextureEnabled) {
                if (!this.diffuseTexture1 || !this.diffuseTexture1.isReady()) {
                    return false;
                }
                if (!this.diffuseTexture2 || !this.diffuseTexture2.isReady()) {
                    return false;
                }
                if (!this.diffuseTexture3 || !this.diffuseTexture3.isReady()) {
                    return false;
                }
                defines.DIFFUSE = true;
            }
            if (this.bumpTexture1 && this.bumpTexture2 && this.bumpTexture3 && core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialFlags.BumpTextureEnabled) {
                if (!this.bumpTexture1.isReady()) {
                    return false;
                }
                if (!this.bumpTexture2.isReady()) {
                    return false;
                }
                if (!this.bumpTexture3.isReady()) {
                    return false;
                }
                defines._needNormals = true;
                defines.BUMP = true;
            }
        }
        // Misc.
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForMisc(mesh, scene, false, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
        // Lights
        defines._needNormals = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForLights(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
        // Values that need to be evaluated on every frame
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForFrameBoundValues(scene, engine, this, defines, useInstances ? true : false);
        // Attribs
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForAttributes(mesh, defines, true, true);
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            scene.resetCachedMaterial();
            // Fallbacks
            var fallbacks = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.EffectFallbacks();
            if (defines.FOG) {
                fallbacks.addFallback(1, "FOG");
            }
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.HandleFallbacksForShadows(defines, fallbacks, this.maxSimultaneousLights);
            if (defines.NUM_BONE_INFLUENCERS > 0) {
                fallbacks.addCPUSkinningFallback(0, mesh);
            }
            defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
            //Attributes
            var attribs = [core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind];
            if (defines.NORMAL) {
                attribs.push(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.NormalKind);
            }
            if (defines.UV1) {
                attribs.push(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UVKind);
            }
            if (defines.UV2) {
                attribs.push(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.UV2Kind);
            }
            if (defines.VERTEXCOLOR) {
                attribs.push(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
            }
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareAttributesForBones(attribs, mesh, defines, fallbacks);
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareAttributesForInstances(attribs, defines);
            // Legacy browser patch
            var shaderName = "terrain";
            var join = defines.toString();
            var uniforms = [
                "world",
                "view",
                "viewProjection",
                "vEyePosition",
                "vLightsType",
                "vDiffuseColor",
                "vSpecularColor",
                "vFogInfos",
                "vFogColor",
                "pointSize",
                "vTextureInfos",
                "mBones",
                "textureMatrix",
                "diffuse1Infos",
                "diffuse2Infos",
                "diffuse3Infos",
            ];
            var samplers = ["textureSampler", "diffuse1Sampler", "diffuse2Sampler", "diffuse3Sampler", "bump1Sampler", "bump2Sampler", "bump3Sampler"];
            var uniformBuffers = new Array();
            (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.addClipPlaneUniforms)(uniforms);
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareUniformsAndSamplersList({
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: defines,
                maxSimultaneousLights: this.maxSimultaneousLights,
            });
            subMesh.setEffect(scene.getEngine().createEffect(shaderName, {
                attributes: attribs,
                uniformsNames: uniforms,
                uniformBuffersNames: uniformBuffers,
                samplers: samplers,
                defines: join,
                fallbacks: fallbacks,
                onCompiled: this.onCompiled,
                onError: this.onError,
                indexParameters: { maxSimultaneousLights: this.maxSimultaneousLights },
            }, engine), defines, this._materialContext);
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        subMesh.effect._wasPreviouslyReady = true;
        subMesh.effect._wasPreviouslyUsingInstances = !!useInstances;
        return true;
    };
    TerrainMaterial.prototype.bindForSubMesh = function (world, mesh, subMesh) {
        var scene = this.getScene();
        var defines = subMesh.materialDefines;
        if (!defines) {
            return;
        }
        var effect = subMesh.effect;
        if (!effect) {
            return;
        }
        this._activeEffect = effect;
        // Matrices
        this.bindOnlyWorldMatrix(world);
        this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
        // Bones
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindBonesParameters(mesh, this._activeEffect);
        if (this._mustRebind(scene, effect)) {
            // Textures
            if (this.mixTexture) {
                this._activeEffect.setTexture("textureSampler", this._mixTexture);
                this._activeEffect.setFloat2("vTextureInfos", this._mixTexture.coordinatesIndex, this._mixTexture.level);
                this._activeEffect.setMatrix("textureMatrix", this._mixTexture.getTextureMatrix());
                if (core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialFlags.DiffuseTextureEnabled) {
                    if (this._diffuseTexture1) {
                        this._activeEffect.setTexture("diffuse1Sampler", this._diffuseTexture1);
                        this._activeEffect.setFloat2("diffuse1Infos", this._diffuseTexture1.uScale, this._diffuseTexture1.vScale);
                    }
                    if (this._diffuseTexture2) {
                        this._activeEffect.setTexture("diffuse2Sampler", this._diffuseTexture2);
                        this._activeEffect.setFloat2("diffuse2Infos", this._diffuseTexture2.uScale, this._diffuseTexture2.vScale);
                    }
                    if (this._diffuseTexture3) {
                        this._activeEffect.setTexture("diffuse3Sampler", this._diffuseTexture3);
                        this._activeEffect.setFloat2("diffuse3Infos", this._diffuseTexture3.uScale, this._diffuseTexture3.vScale);
                    }
                }
                if (core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialFlags.BumpTextureEnabled && scene.getEngine().getCaps().standardDerivatives) {
                    if (this._bumpTexture1) {
                        this._activeEffect.setTexture("bump1Sampler", this._bumpTexture1);
                    }
                    if (this._bumpTexture2) {
                        this._activeEffect.setTexture("bump2Sampler", this._bumpTexture2);
                    }
                    if (this._bumpTexture3) {
                        this._activeEffect.setTexture("bump3Sampler", this._bumpTexture3);
                    }
                }
            }
            // Clip plane
            (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.bindClipPlane)(effect, this, scene);
            // Point size
            if (this.pointsCloud) {
                this._activeEffect.setFloat("pointSize", this.pointSize);
            }
            scene.bindEyePosition(effect);
        }
        this._activeEffect.setColor4("vDiffuseColor", this.diffuseColor, this.alpha * mesh.visibility);
        if (defines.SPECULARTERM) {
            this._activeEffect.setColor4("vSpecularColor", this.specularColor, this.specularPower);
        }
        if (scene.lightsEnabled && !this.disableLighting) {
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindLights(scene, mesh, this._activeEffect, defines, this.maxSimultaneousLights);
        }
        // View
        if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Scene.FOGMODE_NONE) {
            this._activeEffect.setMatrix("view", scene.getViewMatrix());
        }
        // Fog
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindFogParameters(scene, mesh, this._activeEffect);
        this._afterBind(mesh, this._activeEffect);
    };
    TerrainMaterial.prototype.getAnimatables = function () {
        var results = [];
        if (this.mixTexture && this.mixTexture.animations && this.mixTexture.animations.length > 0) {
            results.push(this.mixTexture);
        }
        return results;
    };
    TerrainMaterial.prototype.getActiveTextures = function () {
        var activeTextures = _super.prototype.getActiveTextures.call(this);
        if (this._mixTexture) {
            activeTextures.push(this._mixTexture);
        }
        if (this._diffuseTexture1) {
            activeTextures.push(this._diffuseTexture1);
        }
        if (this._diffuseTexture2) {
            activeTextures.push(this._diffuseTexture2);
        }
        if (this._diffuseTexture3) {
            activeTextures.push(this._diffuseTexture3);
        }
        if (this._bumpTexture1) {
            activeTextures.push(this._bumpTexture1);
        }
        if (this._bumpTexture2) {
            activeTextures.push(this._bumpTexture2);
        }
        if (this._bumpTexture3) {
            activeTextures.push(this._bumpTexture3);
        }
        return activeTextures;
    };
    TerrainMaterial.prototype.hasTexture = function (texture) {
        if (_super.prototype.hasTexture.call(this, texture)) {
            return true;
        }
        if (this._mixTexture === texture) {
            return true;
        }
        if (this._diffuseTexture1 === texture) {
            return true;
        }
        if (this._diffuseTexture2 === texture) {
            return true;
        }
        if (this._diffuseTexture3 === texture) {
            return true;
        }
        if (this._bumpTexture1 === texture) {
            return true;
        }
        if (this._bumpTexture2 === texture) {
            return true;
        }
        if (this._bumpTexture3 === texture) {
            return true;
        }
        return false;
    };
    TerrainMaterial.prototype.dispose = function (forceDisposeEffect) {
        if (this.mixTexture) {
            this.mixTexture.dispose();
        }
        _super.prototype.dispose.call(this, forceDisposeEffect);
    };
    TerrainMaterial.prototype.clone = function (name) {
        var _this = this;
        return core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Clone(function () { return new TerrainMaterial(name, _this.getScene()); }, this);
    };
    TerrainMaterial.prototype.serialize = function () {
        var serializationObject = _super.prototype.serialize.call(this);
        serializationObject.customType = "BABYLON.TerrainMaterial";
        return serializationObject;
    };
    TerrainMaterial.prototype.getClassName = function () {
        return "TerrainMaterial";
    };
    // Statics
    TerrainMaterial.Parse = function (source, scene, rootUrl) {
        return core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(function () { return new TerrainMaterial(source.name, scene); }, source, scene, rootUrl);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("mixTexture")
    ], TerrainMaterial.prototype, "_mixTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "mixTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("diffuseTexture1")
    ], TerrainMaterial.prototype, "_diffuseTexture1", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "diffuseTexture1", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("diffuseTexture2")
    ], TerrainMaterial.prototype, "_diffuseTexture2", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "diffuseTexture2", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("diffuseTexture3")
    ], TerrainMaterial.prototype, "_diffuseTexture3", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "diffuseTexture3", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("bumpTexture1")
    ], TerrainMaterial.prototype, "_bumpTexture1", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "bumpTexture1", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("bumpTexture2")
    ], TerrainMaterial.prototype, "_bumpTexture2", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "bumpTexture2", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("bumpTexture3")
    ], TerrainMaterial.prototype, "_bumpTexture3", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], TerrainMaterial.prototype, "bumpTexture3", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsColor3)()
    ], TerrainMaterial.prototype, "diffuseColor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsColor3)()
    ], TerrainMaterial.prototype, "specularColor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], TerrainMaterial.prototype, "specularPower", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("disableLighting")
    ], TerrainMaterial.prototype, "_disableLighting", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], TerrainMaterial.prototype, "disableLighting", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("maxSimultaneousLights")
    ], TerrainMaterial.prototype, "_maxSimultaneousLights", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], TerrainMaterial.prototype, "maxSimultaneousLights", void 0);
    return TerrainMaterial;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.PushMaterial));

(0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.TerrainMaterial", TerrainMaterial);


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
/*!************************!*\
  !*** ./src/terrain.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "materials": () => (/* reexport module object */ materials_legacy_legacy_terrain__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var materials_legacy_legacy_terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materials/legacy/legacy-terrain */ "../../../lts/materials/dist/legacy/legacy-terrain.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (materials_legacy_legacy_terrain__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=babylon.terrainMaterial.js.map