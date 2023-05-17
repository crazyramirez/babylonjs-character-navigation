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

/***/ "../../../lts/materials/dist/lava/index.js":
/*!*************************************************!*\
  !*** ../../../lts/materials/dist/lava/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LavaMaterial": () => (/* reexport safe */ _lavaMaterial__WEBPACK_IMPORTED_MODULE_0__.LavaMaterial)
/* harmony export */ });
/* harmony import */ var _lavaMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lavaMaterial */ "../../../lts/materials/dist/lava/lavaMaterial.js");



/***/ }),

/***/ "../../../lts/materials/dist/lava/lava.fragment.js":
/*!*********************************************************!*\
  !*** ../../../lts/materials/dist/lava/lava.fragment.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lavaPixelShader": () => (/* binding */ lavaPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Shaders/ShadersInclude/imageProcessingCompatibility */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.













var name = "lavaPixelShader";
var shader = "precision highp float;uniform vec4 vEyePosition;uniform vec4 vDiffuseColor;varying vec3 vPositionW;uniform float time;uniform float speed;uniform float movingSpeed;uniform vec3 fogColor;uniform sampler2D noiseTexture;uniform float fogDensity;varying float noise;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<helperFunctions>\n#include<__decl__lightFragment>[0]\n#include<__decl__lightFragment>[1]\n#include<__decl__lightFragment>[2]\n#include<__decl__lightFragment>[3]\n#include<lightsFragmentFunctions>\n#include<shadowsFragmentFunctions>\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform sampler2D diffuseSampler;uniform vec2 vDiffuseInfos;\n#endif\n#include<clipPlaneFragmentDeclaration>\n#include<fogFragmentDeclaration>\nfloat random( vec3 scale,float seed ){return fract( sin( dot( gl_FragCoord.xyz+seed,scale ) )*43758.5453+seed ) ;}\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\nvec3 viewDirectionW=normalize(vEyePosition.xyz-vPositionW);vec4 baseColor=vec4(1.,1.,1.,1.);vec3 diffuseColor=vDiffuseColor.rgb;float alpha=vDiffuseColor.a;\n#ifdef DIFFUSE\nvec4 noiseTex=texture2D( noiseTexture,vDiffuseUV );vec2 T1=vDiffuseUV+vec2( 1.5,-1.5 )*time *0.02;vec2 T2=vDiffuseUV+vec2( -0.5,2.0 )*time*0.01*speed;T1.x+=noiseTex.x*2.0;T1.y+=noiseTex.y*2.0;T2.x-=noiseTex.y*0.2+time*0.001*movingSpeed;T2.y+=noiseTex.z*0.2+time*0.002*movingSpeed;float p=texture2D( noiseTexture,T1*3.0 ).a;vec4 lavaColor=texture2D( diffuseSampler,T2*4.0);vec4 temp=lavaColor*( vec4( p,p,p,p )*2. )+( lavaColor*lavaColor-0.1 );baseColor=temp;float depth=gl_FragCoord.z*4.0;const float LOG2=1.442695;float fogFactor=exp2(-fogDensity*fogDensity*depth*depth*LOG2 );fogFactor=1.0-clamp( fogFactor,0.0,1.0 );baseColor=mix( baseColor,vec4( fogColor,baseColor.w ),fogFactor );diffuseColor=baseColor.rgb;\n#ifdef ALPHATEST\nif (baseColor.a<0.4)\ndiscard;\n#endif\n#include<depthPrePass>\nbaseColor.rgb*=vDiffuseInfos.y;\n#endif\n#ifdef VERTEXCOLOR\nbaseColor.rgb*=vColor.rgb;\n#endif\n#ifdef NORMAL\nvec3 normalW=normalize(vNormalW);\n#else\nvec3 normalW=vec3(1.0,1.0,1.0);\n#endif\n#ifdef UNLIT\nvec3 diffuseBase=vec3(1.,1.,1.);\n#else\nvec3 diffuseBase=vec3(0.,0.,0.);lightingInfo info;float shadow=1.;float glossiness=0.;\n#include<lightFragment>[0]\n#include<lightFragment>[1]\n#include<lightFragment>[2]\n#include<lightFragment>[3]\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\nvec3 finalDiffuse=clamp(diffuseBase*diffuseColor,0.0,1.0)*baseColor.rgb;vec4 color=vec4(finalDiffuse,alpha);\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var lavaPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/materials/dist/lava/lava.vertex.js":
/*!*******************************************************!*\
  !*** ../../../lts/materials/dist/lava/lava.vertex.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lavaVertexShader": () => (/* binding */ lavaVertexShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Shaders/ShadersInclude/vertexColorMixing */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.















var name = "lavaVertexShader";
var shader = "precision highp float;uniform float time;uniform float lowFrequencySpeed;varying float noise;attribute vec3 position;\n#ifdef NORMAL\nattribute vec3 normal;\n#endif\n#ifdef UV1\nattribute vec2 uv;\n#endif\n#ifdef UV2\nattribute vec2 uv2;\n#endif\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\n#include<bonesDeclaration>\n#include<bakedVertexAnimationDeclaration>\n#include<instancesDeclaration>\nuniform mat4 view;uniform mat4 viewProjection;\n#ifdef DIFFUSE\nvarying vec2 vDiffuseUV;uniform mat4 diffuseMatrix;uniform vec2 vDiffuseInfos;\n#endif\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef NORMAL\nvarying vec3 vNormalW;\n#endif\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#include<__decl__lightFragment>[0..maxSimultaneousLights]\n/* NOISE FUNCTIONS */\nvec3 mod289(vec3 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 mod289(vec4 x)\n{return x-floor(x*(1.0/289.0))*289.0;}\nvec4 permute(vec4 x)\n{return mod289(((x*34.0)+1.0)*x);}\nvec4 taylorInvSqrt(vec4 r)\n{return 1.79284291400159-0.85373472095314*r;}\nvec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat pnoise(vec3 P,vec3 rep)\n{vec3 Pi0=mod(floor(P),rep); \nvec3 Pi1=mod(Pi0+vec3(1.0),rep); \nPi0=mod289(Pi0);Pi1=mod289(Pi1);vec3 Pf0=fract(P); \nvec3 Pf1=Pf0-vec3(1.0); \nvec4 ix=vec4(Pi0.x,Pi1.x,Pi0.x,Pi1.x);vec4 iy=vec4(Pi0.yy,Pi1.yy);vec4 iz0=Pi0.zzzz;vec4 iz1=Pi1.zzzz;vec4 ixy=permute(permute(ix)+iy);vec4 ixy0=permute(ixy+iz0);vec4 ixy1=permute(ixy+iz1);vec4 gx0=ixy0*(1.0/7.0);vec4 gy0=fract(floor(gx0)*(1.0/7.0))-0.5;gx0=fract(gx0);vec4 gz0=vec4(0.5)-abs(gx0)-abs(gy0);vec4 sz0=step(gz0,vec4(0.0));gx0-=sz0*(step(0.0,gx0)-0.5);gy0-=sz0*(step(0.0,gy0)-0.5);vec4 gx1=ixy1*(1.0/7.0);vec4 gy1=fract(floor(gx1)*(1.0/7.0))-0.5;gx1=fract(gx1);vec4 gz1=vec4(0.5)-abs(gx1)-abs(gy1);vec4 sz1=step(gz1,vec4(0.0));gx1-=sz1*(step(0.0,gx1)-0.5);gy1-=sz1*(step(0.0,gy1)-0.5);vec3 g000=vec3(gx0.x,gy0.x,gz0.x);vec3 g100=vec3(gx0.y,gy0.y,gz0.y);vec3 g010=vec3(gx0.z,gy0.z,gz0.z);vec3 g110=vec3(gx0.w,gy0.w,gz0.w);vec3 g001=vec3(gx1.x,gy1.x,gz1.x);vec3 g101=vec3(gx1.y,gy1.y,gz1.y);vec3 g011=vec3(gx1.z,gy1.z,gz1.z);vec3 g111=vec3(gx1.w,gy1.w,gz1.w);vec4 norm0=taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));g000*=norm0.x;g010*=norm0.y;g100*=norm0.z;g110*=norm0.w;vec4 norm1=taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));g001*=norm1.x;g011*=norm1.y;g101*=norm1.z;g111*=norm1.w;float n000=dot(g000,Pf0);float n100=dot(g100,vec3(Pf1.x,Pf0.yz));float n010=dot(g010,vec3(Pf0.x,Pf1.y,Pf0.z));float n110=dot(g110,vec3(Pf1.xy,Pf0.z));float n001=dot(g001,vec3(Pf0.xy,Pf1.z));float n101=dot(g101,vec3(Pf1.x,Pf0.y,Pf1.z));float n011=dot(g011,vec3(Pf0.x,Pf1.yz));float n111=dot(g111,Pf1);vec3 fade_xyz=fade(Pf0);vec4 n_z=mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);vec2 n_yz=mix(n_z.xy,n_z.zw,fade_xyz.y);float n_xyz=mix(n_yz.x,n_yz.y,fade_xyz.x);return 2.2*n_xyz;}\n/* END FUNCTION */\nfloat turbulence( vec3 p ) {float w=100.0;float t=-.5;for (float f=1.0 ; f<=10.0 ; f++ ){float power=pow( 2.0,f );t+=abs( pnoise( vec3( power*p ),vec3( 10.0,10.0,10.0 ) )/power );}\nreturn t;}\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\n#include<instancesVertex>\n#include<bonesVertex>\n#include<bakedVertexAnimation>\n#ifdef NORMAL\nnoise=10.0* -.10*turbulence( .5*normal+time*1.15 );float b=lowFrequencySpeed*5.0*pnoise( 0.05*position +vec3(time*1.025),vec3( 100.0 ) );float displacement=- 1.5*noise+b;vec3 newPosition=position+normal*displacement;gl_Position=viewProjection*finalWorld*vec4( newPosition,1.0 );vec4 worldPos=finalWorld*vec4(newPosition,1.0);vPositionW=vec3(worldPos);vNormalW=normalize(vec3(finalWorld*vec4(normal,0.0)));\n#endif\n#ifndef UV1\nvec2 uv=vec2(0.,0.);\n#endif\n#ifndef UV2\nvec2 uv2=vec2(0.,0.);\n#endif\n#ifdef DIFFUSE\nif (vDiffuseInfos.x==0.)\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv,1.0,0.0));}\nelse\n{vDiffuseUV=vec2(diffuseMatrix*vec4(uv2,1.0,0.0));}\n#endif\n#include<clipPlaneVertex>\n#include<fogVertex>\n#include<shadowsVertex>[0..maxSimultaneousLights]\n#include<vertexColorMixing>\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var lavaVertexShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/materials/dist/lava/lavaMaterial.js":
/*!********************************************************!*\
  !*** ../../../lts/materials/dist/lava/lavaMaterial.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LavaMaterial": () => (/* binding */ LavaMaterial)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/clipPlaneMaterialHelper */ "core/Misc/decorators");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lava_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lava.fragment */ "../../../lts/materials/dist/lava/lava.fragment.js");
/* harmony import */ var _lava_vertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lava.vertex */ "../../../lts/materials/dist/lava/lava.vertex.js");














var LavaMaterialDefines = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(LavaMaterialDefines, _super);
    function LavaMaterialDefines() {
        var _this = _super.call(this) || this;
        _this.DIFFUSE = false;
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
        _this.LIGHT0 = false;
        _this.LIGHT1 = false;
        _this.LIGHT2 = false;
        _this.LIGHT3 = false;
        _this.SPOTLIGHT0 = false;
        _this.SPOTLIGHT1 = false;
        _this.SPOTLIGHT2 = false;
        _this.SPOTLIGHT3 = false;
        _this.HEMILIGHT0 = false;
        _this.HEMILIGHT1 = false;
        _this.HEMILIGHT2 = false;
        _this.HEMILIGHT3 = false;
        _this.DIRLIGHT0 = false;
        _this.DIRLIGHT1 = false;
        _this.DIRLIGHT2 = false;
        _this.DIRLIGHT3 = false;
        _this.POINTLIGHT0 = false;
        _this.POINTLIGHT1 = false;
        _this.POINTLIGHT2 = false;
        _this.POINTLIGHT3 = false;
        _this.SHADOW0 = false;
        _this.SHADOW1 = false;
        _this.SHADOW2 = false;
        _this.SHADOW3 = false;
        _this.SHADOWS = false;
        _this.SHADOWESM0 = false;
        _this.SHADOWESM1 = false;
        _this.SHADOWESM2 = false;
        _this.SHADOWESM3 = false;
        _this.SHADOWPOISSON0 = false;
        _this.SHADOWPOISSON1 = false;
        _this.SHADOWPOISSON2 = false;
        _this.SHADOWPOISSON3 = false;
        _this.SHADOWPCF0 = false;
        _this.SHADOWPCF1 = false;
        _this.SHADOWPCF2 = false;
        _this.SHADOWPCF3 = false;
        _this.SHADOWPCSS0 = false;
        _this.SHADOWPCSS1 = false;
        _this.SHADOWPCSS2 = false;
        _this.SHADOWPCSS3 = false;
        _this.NORMAL = false;
        _this.UV1 = false;
        _this.UV2 = false;
        _this.VERTEXCOLOR = false;
        _this.VERTEXALPHA = false;
        _this.NUM_BONE_INFLUENCERS = 0;
        _this.BonesPerMesh = 0;
        _this.INSTANCES = false;
        _this.INSTANCESCOLOR = false;
        _this.UNLIT = false;
        _this.IMAGEPROCESSINGPOSTPROCESS = false;
        _this.SKIPFINALCOLORCLAMP = false;
        _this.rebuild();
        return _this;
    }
    return LavaMaterialDefines;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialDefines));
var LavaMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(LavaMaterial, _super);
    function LavaMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        _this.speed = 1;
        _this.movingSpeed = 1;
        _this.lowFrequencySpeed = 1;
        _this.fogDensity = 0.15;
        _this._lastTime = 0;
        _this.diffuseColor = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Color3(1, 1, 1);
        _this._disableLighting = false;
        _this._unlit = false;
        _this._maxSimultaneousLights = 4;
        _this._scaledDiffuse = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Color3();
        return _this;
    }
    LavaMaterial.prototype.needAlphaBlending = function () {
        return this.alpha < 1.0;
    };
    LavaMaterial.prototype.needAlphaTesting = function () {
        return false;
    };
    LavaMaterial.prototype.getAlphaTestTexture = function () {
        return null;
    };
    // Methods
    LavaMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh, useInstances) {
        if (this.isFrozen) {
            if (subMesh.effect && subMesh.effect._wasPreviouslyReady && subMesh.effect._wasPreviouslyUsingInstances === useInstances) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            subMesh.materialDefines = new LavaMaterialDefines();
        }
        var defines = subMesh.materialDefines;
        var scene = this.getScene();
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        var engine = scene.getEngine();
        // Textures
        if (defines._areTexturesDirty) {
            defines._needUVs = false;
            if (scene.texturesEnabled) {
                if (this._diffuseTexture && core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialFlags.DiffuseTextureEnabled) {
                    if (!this._diffuseTexture.isReady()) {
                        return false;
                    }
                    else {
                        defines._needUVs = true;
                        defines.DIFFUSE = true;
                    }
                }
            }
        }
        // Misc.
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForMisc(mesh, scene, false, this.pointsCloud, this.fogEnabled, this._shouldTurnAlphaTestOn(mesh), defines);
        // Lights
        defines._needNormals = true;
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForLights(scene, mesh, defines, false, this._maxSimultaneousLights, this._disableLighting);
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
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.HandleFallbacksForShadows(defines, fallbacks);
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
            var shaderName = "lava";
            var join = defines.toString();
            var uniforms = [
                "world",
                "view",
                "viewProjection",
                "vEyePosition",
                "vLightsType",
                "vDiffuseColor",
                "vFogInfos",
                "vFogColor",
                "pointSize",
                "vDiffuseInfos",
                "mBones",
                "diffuseMatrix",
                "time",
                "speed",
                "movingSpeed",
                "fogColor",
                "fogDensity",
                "lowFrequencySpeed",
            ];
            (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.addClipPlaneUniforms)(uniforms);
            var samplers = ["diffuseSampler", "noiseTexture"];
            var uniformBuffers = new Array();
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
    LavaMaterial.prototype.bindForSubMesh = function (world, mesh, subMesh) {
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
        defines.UNLIT = this._unlit;
        // Matrices
        this.bindOnlyWorldMatrix(world);
        this._activeEffect.setMatrix("viewProjection", scene.getTransformMatrix());
        // Bones
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindBonesParameters(mesh, this._activeEffect);
        if (this._mustRebind(scene, effect)) {
            // Textures
            if (this.diffuseTexture && core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialFlags.DiffuseTextureEnabled) {
                this._activeEffect.setTexture("diffuseSampler", this.diffuseTexture);
                this._activeEffect.setFloat2("vDiffuseInfos", this.diffuseTexture.coordinatesIndex, this.diffuseTexture.level);
                this._activeEffect.setMatrix("diffuseMatrix", this.diffuseTexture.getTextureMatrix());
            }
            if (this.noiseTexture) {
                this._activeEffect.setTexture("noiseTexture", this.noiseTexture);
            }
            // Clip plane
            (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.bindClipPlane)(effect, this, scene);
            // Point size
            if (this.pointsCloud) {
                this._activeEffect.setFloat("pointSize", this.pointSize);
            }
            scene.bindEyePosition(effect);
        }
        this._activeEffect.setColor4("vDiffuseColor", this._scaledDiffuse, this.alpha * mesh.visibility);
        if (scene.lightsEnabled && !this.disableLighting) {
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindLights(scene, mesh, this._activeEffect, defines);
        }
        // View
        if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Scene.FOGMODE_NONE) {
            this._activeEffect.setMatrix("view", scene.getViewMatrix());
        }
        // Fog
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindFogParameters(scene, mesh, this._activeEffect);
        this._lastTime += scene.getEngine().getDeltaTime();
        this._activeEffect.setFloat("time", (this._lastTime * this.speed) / 1000);
        if (!this.fogColor) {
            this.fogColor = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Color3.Black();
        }
        this._activeEffect.setColor3("fogColor", this.fogColor);
        this._activeEffect.setFloat("fogDensity", this.fogDensity);
        this._activeEffect.setFloat("lowFrequencySpeed", this.lowFrequencySpeed);
        this._activeEffect.setFloat("movingSpeed", this.movingSpeed);
        this._afterBind(mesh, this._activeEffect);
    };
    LavaMaterial.prototype.getAnimatables = function () {
        var results = [];
        if (this.diffuseTexture && this.diffuseTexture.animations && this.diffuseTexture.animations.length > 0) {
            results.push(this.diffuseTexture);
        }
        if (this.noiseTexture && this.noiseTexture.animations && this.noiseTexture.animations.length > 0) {
            results.push(this.noiseTexture);
        }
        return results;
    };
    LavaMaterial.prototype.getActiveTextures = function () {
        var activeTextures = _super.prototype.getActiveTextures.call(this);
        if (this._diffuseTexture) {
            activeTextures.push(this._diffuseTexture);
        }
        return activeTextures;
    };
    LavaMaterial.prototype.hasTexture = function (texture) {
        if (_super.prototype.hasTexture.call(this, texture)) {
            return true;
        }
        if (this.diffuseTexture === texture) {
            return true;
        }
        return false;
    };
    LavaMaterial.prototype.dispose = function (forceDisposeEffect) {
        if (this.diffuseTexture) {
            this.diffuseTexture.dispose();
        }
        if (this.noiseTexture) {
            this.noiseTexture.dispose();
        }
        _super.prototype.dispose.call(this, forceDisposeEffect);
    };
    LavaMaterial.prototype.clone = function (name) {
        var _this = this;
        return core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Clone(function () { return new LavaMaterial(name, _this.getScene()); }, this);
    };
    LavaMaterial.prototype.serialize = function () {
        var serializationObject = _super.prototype.serialize.call(this);
        serializationObject.customType = "BABYLON.LavaMaterial";
        return serializationObject;
    };
    LavaMaterial.prototype.getClassName = function () {
        return "LavaMaterial";
    };
    // Statics
    LavaMaterial.Parse = function (source, scene, rootUrl) {
        return core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(function () { return new LavaMaterial(source.name, scene); }, source, scene, rootUrl);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)("diffuseTexture")
    ], LavaMaterial.prototype, "_diffuseTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsTexturesDirty")
    ], LavaMaterial.prototype, "diffuseTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsTexture)()
    ], LavaMaterial.prototype, "noiseTexture", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsColor3)()
    ], LavaMaterial.prototype, "fogColor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], LavaMaterial.prototype, "speed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], LavaMaterial.prototype, "movingSpeed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], LavaMaterial.prototype, "lowFrequencySpeed", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], LavaMaterial.prototype, "fogDensity", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsColor3)()
    ], LavaMaterial.prototype, "diffuseColor", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("disableLighting")
    ], LavaMaterial.prototype, "_disableLighting", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], LavaMaterial.prototype, "disableLighting", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("unlit")
    ], LavaMaterial.prototype, "_unlit", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], LavaMaterial.prototype, "unlit", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)("maxSimultaneousLights")
    ], LavaMaterial.prototype, "_maxSimultaneousLights", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.expandToProperty)("_markAllSubMeshesAsLightsDirty")
    ], LavaMaterial.prototype, "maxSimultaneousLights", void 0);
    return LavaMaterial;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.PushMaterial));

(0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.LavaMaterial", LavaMaterial);


/***/ }),

/***/ "../../../lts/materials/dist/legacy/legacy-lava.js":
/*!*********************************************************!*\
  !*** ../../../lts/materials/dist/legacy/legacy-lava.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LavaMaterial": () => (/* reexport safe */ _lava_index__WEBPACK_IMPORTED_MODULE_0__.LavaMaterial)
/* harmony export */ });
/* harmony import */ var _lava_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lava/index */ "../../../lts/materials/dist/lava/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in _lava_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _lava_index__WEBPACK_IMPORTED_MODULE_0__[key];
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
/*!*********************!*\
  !*** ./src/lava.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "materials": () => (/* reexport module object */ materials_legacy_legacy_lava__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var materials_legacy_legacy_lava__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materials/legacy/legacy-lava */ "../../../lts/materials/dist/legacy/legacy-lava.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (materials_legacy_legacy_lava__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=babylon.lavaMaterial.js.map