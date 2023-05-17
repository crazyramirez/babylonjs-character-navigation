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

/***/ "../../../lts/materials/dist/legacy/legacy-sky.js":
/*!********************************************************!*\
  !*** ../../../lts/materials/dist/legacy/legacy-sky.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkyMaterial": () => (/* reexport safe */ _sky_index__WEBPACK_IMPORTED_MODULE_0__.SkyMaterial)
/* harmony export */ });
/* harmony import */ var _sky_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sky/index */ "../../../lts/materials/dist/sky/index.js");
/* eslint-disable import/no-internal-modules */

/**
 * This is the entry point for the UMD module.
 * The entry point for a future ESM package should be index.ts
 */
var globalObject = typeof __webpack_require__.g !== "undefined" ? __webpack_require__.g : typeof window !== "undefined" ? window : undefined;
if (typeof globalObject !== "undefined") {
    for (var key in _sky_index__WEBPACK_IMPORTED_MODULE_0__) {
        globalObject.BABYLON[key] = _sky_index__WEBPACK_IMPORTED_MODULE_0__[key];
    }
}



/***/ }),

/***/ "../../../lts/materials/dist/sky/index.js":
/*!************************************************!*\
  !*** ../../../lts/materials/dist/sky/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkyMaterial": () => (/* reexport safe */ _skyMaterial__WEBPACK_IMPORTED_MODULE_0__.SkyMaterial)
/* harmony export */ });
/* harmony import */ var _skyMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./skyMaterial */ "../../../lts/materials/dist/sky/skyMaterial.js");



/***/ }),

/***/ "../../../lts/materials/dist/sky/sky.fragment.js":
/*!*******************************************************!*\
  !*** ../../../lts/materials/dist/sky/sky.fragment.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skyPixelShader": () => (/* binding */ skyPixelShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Shaders/ShadersInclude/imageProcessingCompatibility */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.







var name = "skyPixelShader";
var shader = "precision highp float;\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneFragmentDeclaration>\nuniform vec3 cameraPosition;\nuniform vec3 cameraOffset;\nuniform vec3 up;\nuniform float luminance;\nuniform float turbidity;\nuniform float rayleigh;\nuniform float mieCoefficient;\nuniform float mieDirectionalG;\nuniform vec3 sunPosition;\n#include<fogFragmentDeclaration>\nconst float e=2.71828182845904523536028747135266249775724709369995957;\nconst float pi=3.141592653589793238462643383279502884197169;\nconst float n=1.0003;\nconst float N=2.545E25;\nconst float pn=0.035;\nconst vec3 lambda=vec3(680E-9,550E-9,450E-9);\nconst vec3 K=vec3(0.686,0.678,0.666);\nconst float v=4.0;\nconst float rayleighZenithLength=8.4E3;\nconst float mieZenithLength=1.25E3;\nconst float EE=1000.0;\nconst float sunAngularDiameterCos=0.999956676946448443553574619906976478926848692873900859324;\nconst float cutoffAngle=pi/1.95;\nconst float steepness=1.5;\nvec3 totalRayleigh(vec3 lambda)\n{\nreturn (8.0*pow(pi,3.0)*pow(pow(n,2.0)-1.0,2.0)*(6.0+3.0*pn))/(3.0*N*pow(lambda,vec3(4.0))*(6.0-7.0*pn));\n}\nvec3 simplifiedRayleigh()\n{\nreturn 0.0005/vec3(94,40,18);\n}\nfloat rayleighPhase(float cosTheta)\n{ \nreturn (3.0/(16.0*pi))*(1.0+pow(cosTheta,2.0));\n}\nvec3 totalMie(vec3 lambda,vec3 K,float T)\n{\nfloat c=(0.2*T )*10E-18;\nreturn 0.434*c*pi*pow((2.0*pi)/lambda,vec3(v-2.0))*K;\n}\nfloat hgPhase(float cosTheta,float g)\n{\nreturn (1.0/(4.0*pi))*((1.0-pow(g,2.0))/pow(1.0-2.0*g*cosTheta+pow(g,2.0),1.5));\n}\nfloat sunIntensity(float zenithAngleCos)\n{\nreturn EE*max(0.0,1.0-exp((-(cutoffAngle-acos(zenithAngleCos))/steepness)));\n}\nfloat A=0.15;\nfloat B=0.50;\nfloat C=0.10;\nfloat D=0.20;\nfloat EEE=0.02;\nfloat F=0.30;\nfloat W=1000.0;\nvec3 Uncharted2Tonemap(vec3 x)\n{\nreturn ((x*(A*x+C*B)+D*EEE)/(x*(A*x+B)+D*F))-EEE/F;\n}\n#if DITHER\n#include<helperFunctions>\n#endif\n#define CUSTOM_FRAGMENT_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_FRAGMENT_MAIN_BEGIN\n#include<clipPlaneFragment>\n/**\n*--------------------------------------------------------------------------------------------------\n* Sky Color\n*--------------------------------------------------------------------------------------------------\n*/\nfloat sunfade=1.0-clamp(1.0-exp((sunPosition.y/450000.0)),0.0,1.0);\nfloat rayleighCoefficient=rayleigh-(1.0*(1.0-sunfade));\nvec3 sunDirection=normalize(sunPosition);\nfloat sunE=sunIntensity(dot(sunDirection,up));\nvec3 betaR=simplifiedRayleigh()*rayleighCoefficient;\nvec3 betaM=totalMie(lambda,K,turbidity)*mieCoefficient;\nfloat zenithAngle=acos(max(0.0,dot(up,normalize(vPositionW-cameraPosition+cameraOffset))));\nfloat sR=rayleighZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));\nfloat sM=mieZenithLength/(cos(zenithAngle)+0.15*pow(93.885-((zenithAngle*180.0)/pi),-1.253));\nvec3 Fex=exp(-(betaR*sR+betaM*sM));\nfloat cosTheta=dot(normalize(vPositionW-cameraPosition),sunDirection);\nfloat rPhase=rayleighPhase(cosTheta*0.5+0.5);\nvec3 betaRTheta=betaR*rPhase;\nfloat mPhase=hgPhase(cosTheta,mieDirectionalG);\nvec3 betaMTheta=betaM*mPhase;\nvec3 Lin=pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*(1.0-Fex),vec3(1.5));\nLin*=mix(vec3(1.0),pow(sunE*((betaRTheta+betaMTheta)/(betaR+betaM))*Fex,vec3(1.0/2.0)),clamp(pow(1.0-dot(up,sunDirection),5.0),0.0,1.0));\nvec3 direction=normalize(vPositionW-cameraPosition);\nfloat theta=acos(direction.y);\nfloat phi=atan(direction.z,direction.x);\nvec2 uv=vec2(phi,theta)/vec2(2.0*pi,pi)+vec2(0.5,0.0);\nvec3 L0=vec3(0.1)*Fex;\nfloat sundisk=smoothstep(sunAngularDiameterCos,sunAngularDiameterCos+0.00002,cosTheta);\nL0+=(sunE*19000.0*Fex)*sundisk;\nvec3 whiteScale=1.0/Uncharted2Tonemap(vec3(W));\nvec3 texColor=(Lin+L0);\ntexColor*=0.04 ;\ntexColor+=vec3(0.0,0.001,0.0025)*0.3;\nfloat g_fMaxLuminance=1.0;\nfloat fLumScaled=0.1/luminance; \nfloat fLumCompressed=(fLumScaled*(1.0+(fLumScaled/(g_fMaxLuminance*g_fMaxLuminance))))/(1.0+fLumScaled); \nfloat ExposureBias=fLumCompressed;\nvec3 curr=Uncharted2Tonemap((log2(2.0/pow(luminance,4.0)))*texColor);\nvec3 retColor=curr*whiteScale;\n/**\n*--------------------------------------------------------------------------------------------------\n* Sky Color\n*--------------------------------------------------------------------------------------------------\n*/\nfloat alpha=1.0;\n#ifdef VERTEXCOLOR\nretColor.rgb*=vColor.rgb;\n#endif\n#if defined(VERTEXALPHA) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nalpha*=vColor.a;\n#endif\n#if DITHER\nretColor.rgb+=dither(gl_FragCoord.xy,0.5);\n#endif\nvec4 color=clamp(vec4(retColor.rgb,alpha),0.0,1.0);\n#include<fogFragment>\ngl_FragColor=color;\n#include<imageProcessingCompatibility>\n#define CUSTOM_FRAGMENT_MAIN_END\n}\n";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var skyPixelShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/materials/dist/sky/sky.vertex.js":
/*!*****************************************************!*\
  !*** ../../../lts/materials/dist/sky/sky.vertex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skyVertexShader": () => (/* binding */ skyVertexShader)
/* harmony export */ });
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core/Shaders/ShadersInclude/fogVertex */ "core/Misc/decorators");
/* harmony import */ var core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__);
// Do not edit.





var name = "skyVertexShader";
var shader = "precision highp float;\nattribute vec3 position;\n#ifdef VERTEXCOLOR\nattribute vec4 color;\n#endif\nuniform mat4 world;\nuniform mat4 view;\nuniform mat4 viewProjection;\n#ifdef POINTSIZE\nuniform float pointSize;\n#endif\nvarying vec3 vPositionW;\n#ifdef VERTEXCOLOR\nvarying vec4 vColor;\n#endif\n#include<clipPlaneVertexDeclaration>\n#include<fogVertexDeclaration>\n#define CUSTOM_VERTEX_DEFINITIONS\nvoid main(void) {\n#define CUSTOM_VERTEX_MAIN_BEGIN\ngl_Position=viewProjection*world*vec4(position,1.0);\nvec4 worldPos=world*vec4(position,1.0);\nvPositionW=vec3(worldPos);\n#include<clipPlaneVertex>\n#include<fogVertex>\n#ifdef VERTEXCOLOR\nvColor=color;\n#endif\n#if defined(POINTSIZE) && !defined(WEBGPU)\ngl_PointSize=pointSize;\n#endif\n#define CUSTOM_VERTEX_MAIN_END\n}\n";
// Sideeffect
core_Engines_shaderStore__WEBPACK_IMPORTED_MODULE_0__.ShaderStore.ShadersStore[name] = shader;
/** @internal */
var skyVertexShader = { name: name, shader: shader };


/***/ }),

/***/ "../../../lts/materials/dist/sky/skyMaterial.js":
/*!******************************************************!*\
  !*** ../../../lts/materials/dist/sky/skyMaterial.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SkyMaterial": () => (/* binding */ SkyMaterial)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core/Materials/clipPlaneMaterialHelper */ "core/Misc/decorators");
/* harmony import */ var core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sky_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sky.fragment */ "../../../lts/materials/dist/sky/sky.fragment.js");
/* harmony import */ var _sky_vertex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sky.vertex */ "../../../lts/materials/dist/sky/sky.vertex.js");













/** @internal */
var SkyMaterialDefines = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SkyMaterialDefines, _super);
    function SkyMaterialDefines() {
        var _this = _super.call(this) || this;
        _this.CLIPPLANE = false;
        _this.CLIPPLANE2 = false;
        _this.CLIPPLANE3 = false;
        _this.CLIPPLANE4 = false;
        _this.CLIPPLANE5 = false;
        _this.CLIPPLANE6 = false;
        _this.POINTSIZE = false;
        _this.FOG = false;
        _this.VERTEXCOLOR = false;
        _this.VERTEXALPHA = false;
        _this.IMAGEPROCESSINGPOSTPROCESS = false;
        _this.SKIPFINALCOLORCLAMP = false;
        _this.DITHER = false;
        _this.rebuild();
        return _this;
    }
    return SkyMaterialDefines;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialDefines));
/**
 * This is the sky material which allows to create dynamic and texture free effects for skyboxes.
 * @see https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary/skyMat
 */
var SkyMaterial = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SkyMaterial, _super);
    /**
     * Instantiates a new sky material.
     * This material allows to create dynamic and texture free
     * effects for skyboxes by taking care of the atmosphere state.
     * @see https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary/skyMat
     * @param name Define the name of the material in the scene
     * @param scene Define the scene the material belong to
     */
    function SkyMaterial(name, scene) {
        var _this = _super.call(this, name, scene) || this;
        /**
         * Defines the overall luminance of sky in interval ]0, 1[.
         */
        _this.luminance = 1.0;
        /**
         * Defines the amount (scattering) of haze as opposed to molecules in atmosphere.
         */
        _this.turbidity = 10.0;
        /**
         * Defines the sky appearance (light intensity).
         */
        _this.rayleigh = 2.0;
        /**
         * Defines the mieCoefficient in interval [0, 0.1] which affects the property .mieDirectionalG.
         */
        _this.mieCoefficient = 0.005;
        /**
         * Defines the amount of haze particles following the Mie scattering theory.
         */
        _this.mieDirectionalG = 0.8;
        /**
         * Defines the distance of the sun according to the active scene camera.
         */
        _this.distance = 500;
        /**
         * Defines the sun inclination, in interval [-0.5, 0.5]. When the inclination is not 0, the sun is said
         * "inclined".
         */
        _this.inclination = 0.49;
        /**
         * Defines the solar azimuth in interval [0, 1]. The azimuth is the angle in the horizontal plan between
         * an object direction and a reference direction.
         */
        _this.azimuth = 0.25;
        /**
         * Defines the sun position in the sky on (x,y,z). If the property .useSunPosition is set to false, then
         * the property is overridden by the inclination and the azimuth and can be read at any moment.
         */
        _this.sunPosition = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Vector3(0, 100, 0);
        /**
         * Defines if the sun position should be computed (inclination and azimuth) according to the given
         * .sunPosition property.
         */
        _this.useSunPosition = false;
        /**
         * Defines an offset vector used to get a horizon offset.
         * @example skyMaterial.cameraOffset.y = camera.globalPosition.y // Set horizon relative to 0 on the Y axis
         */
        _this.cameraOffset = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        /**
         * Defines the vector the skyMaterial should consider as up. (default is Vector3(0, 1, 0) as returned by Vector3.Up())
         */
        _this.up = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Vector3.Up();
        /**
         * Defines if sky should be dithered.
         */
        _this.dithering = false;
        // Private members
        _this._cameraPosition = core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Vector3.Zero();
        _this._skyOrientation = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Quaternion();
        return _this;
    }
    /**
     * Specifies if the material will require alpha blending
     * @returns a boolean specifying if alpha blending is needed
     */
    SkyMaterial.prototype.needAlphaBlending = function () {
        return this.alpha < 1.0;
    };
    /**
     * Specifies if this material should be rendered in alpha test mode
     * @returns false as the sky material doesn't need alpha testing.
     */
    SkyMaterial.prototype.needAlphaTesting = function () {
        return false;
    };
    /**
     * Get the texture used for alpha test purpose.
     * @returns null as the sky material has no texture.
     */
    SkyMaterial.prototype.getAlphaTestTexture = function () {
        return null;
    };
    /**
     * Get if the submesh is ready to be used and all its information available.
     * Child classes can use it to update shaders
     * @param mesh defines the mesh to check
     * @param subMesh defines which submesh to check
     * @returns a boolean indicating that the submesh is ready or not
     */
    SkyMaterial.prototype.isReadyForSubMesh = function (mesh, subMesh) {
        if (this.isFrozen) {
            if (subMesh.effect && subMesh.effect._wasPreviouslyReady) {
                return true;
            }
        }
        if (!subMesh.materialDefines) {
            subMesh.materialDefines = new SkyMaterialDefines();
        }
        var defines = subMesh.materialDefines;
        var scene = this.getScene();
        if (this._isReadyForSubMesh(subMesh)) {
            return true;
        }
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForMisc(mesh, scene, false, this.pointsCloud, this.fogEnabled, false, defines);
        // Attribs
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.PrepareDefinesForAttributes(mesh, defines, true, false);
        if (defines.IMAGEPROCESSINGPOSTPROCESS !== scene.imageProcessingConfiguration.applyByPostProcess) {
            defines.markAsMiscDirty();
        }
        if (defines.DITHER !== this.dithering) {
            defines.markAsMiscDirty();
        }
        // Get correct effect
        if (defines.isDirty) {
            defines.markAsProcessed();
            scene.resetCachedMaterial();
            // Fallbacks
            var fallbacks = new core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.EffectFallbacks();
            if (defines.FOG) {
                fallbacks.addFallback(1, "FOG");
            }
            defines.IMAGEPROCESSINGPOSTPROCESS = scene.imageProcessingConfiguration.applyByPostProcess;
            defines.DITHER = this.dithering;
            //Attributes
            var attribs = [core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.PositionKind];
            if (defines.VERTEXCOLOR) {
                attribs.push(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.VertexBuffer.ColorKind);
            }
            var shaderName = "sky";
            var uniforms = [
                "world",
                "viewProjection",
                "view",
                "vFogInfos",
                "vFogColor",
                "pointSize",
                "luminance",
                "turbidity",
                "rayleigh",
                "mieCoefficient",
                "mieDirectionalG",
                "sunPosition",
                "cameraPosition",
                "cameraOffset",
                "up",
            ];
            (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.addClipPlaneUniforms)(uniforms);
            var join = defines.toString();
            subMesh.setEffect(scene.getEngine().createEffect(shaderName, attribs, uniforms, [], join, fallbacks, this.onCompiled, this.onError), defines, this._materialContext);
        }
        if (!subMesh.effect || !subMesh.effect.isReady()) {
            return false;
        }
        defines._renderId = scene.getRenderId();
        subMesh.effect._wasPreviouslyReady = true;
        return true;
    };
    /**
     * Binds the submesh to this material by preparing the effect and shader to draw
     * @param world defines the world transformation matrix
     * @param mesh defines the mesh containing the submesh
     * @param subMesh defines the submesh to bind the material to
     */
    SkyMaterial.prototype.bindForSubMesh = function (world, mesh, subMesh) {
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
        if (this._mustRebind(scene, effect)) {
            (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.bindClipPlane)(effect, this, scene);
            // Point size
            if (this.pointsCloud) {
                this._activeEffect.setFloat("pointSize", this.pointSize);
            }
        }
        // View
        if (scene.fogEnabled && mesh.applyFog && scene.fogMode !== core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Scene.FOGMODE_NONE) {
            this._activeEffect.setMatrix("view", scene.getViewMatrix());
        }
        // Fog
        core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.MaterialHelper.BindFogParameters(scene, mesh, this._activeEffect);
        // Sky
        var camera = scene.activeCamera;
        if (camera) {
            var cameraWorldMatrix = camera.getWorldMatrix();
            this._cameraPosition.x = cameraWorldMatrix.m[12];
            this._cameraPosition.y = cameraWorldMatrix.m[13];
            this._cameraPosition.z = cameraWorldMatrix.m[14];
            this._activeEffect.setVector3("cameraPosition", this._cameraPosition);
        }
        this._activeEffect.setVector3("cameraOffset", this.cameraOffset);
        this._activeEffect.setVector3("up", this.up);
        if (this.luminance > 0) {
            this._activeEffect.setFloat("luminance", this.luminance);
        }
        this._activeEffect.setFloat("turbidity", this.turbidity);
        this._activeEffect.setFloat("rayleigh", this.rayleigh);
        this._activeEffect.setFloat("mieCoefficient", this.mieCoefficient);
        this._activeEffect.setFloat("mieDirectionalG", this.mieDirectionalG);
        if (!this.useSunPosition) {
            var theta = Math.PI * (this.inclination - 0.5);
            var phi = 2 * Math.PI * (this.azimuth - 0.5);
            this.sunPosition.x = this.distance * Math.cos(phi) * Math.cos(theta);
            this.sunPosition.y = this.distance * Math.sin(-theta);
            this.sunPosition.z = this.distance * Math.sin(phi) * Math.cos(theta);
            core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Quaternion.FromUnitVectorsToRef(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.Vector3.UpReadOnly, this.up, this._skyOrientation);
            this.sunPosition.rotateByQuaternionToRef(this._skyOrientation, this.sunPosition);
        }
        this._activeEffect.setVector3("sunPosition", this.sunPosition);
        this._afterBind(mesh, this._activeEffect);
    };
    /**
     * Get the list of animatables in the material.
     * @returns the list of animatables object used in the material
     */
    SkyMaterial.prototype.getAnimatables = function () {
        return [];
    };
    /**
     * Disposes the material
     * @param forceDisposeEffect specifies if effects should be forcefully disposed
     */
    SkyMaterial.prototype.dispose = function (forceDisposeEffect) {
        _super.prototype.dispose.call(this, forceDisposeEffect);
    };
    /**
     * Makes a duplicate of the material, and gives it a new name
     * @param name defines the new name for the duplicated material
     * @returns the cloned material
     */
    SkyMaterial.prototype.clone = function (name) {
        var _this = this;
        return core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Clone(function () { return new SkyMaterial(name, _this.getScene()); }, this);
    };
    /**
     * Serializes this material in a JSON representation
     * @returns the serialized material object
     */
    SkyMaterial.prototype.serialize = function () {
        var serializationObject = _super.prototype.serialize.call(this);
        serializationObject.customType = "BABYLON.SkyMaterial";
        return serializationObject;
    };
    /**
     * Gets the current class name of the material e.g. "SkyMaterial"
     * Mainly use in serialization.
     * @returns the class name
     */
    SkyMaterial.prototype.getClassName = function () {
        return "SkyMaterial";
    };
    /**
     * Creates a sky material from parsed material data
     * @param source defines the JSON representation of the material
     * @param scene defines the hosting scene
     * @param rootUrl defines the root URL to use to load textures and relative dependencies
     * @returns a new sky material
     */
    SkyMaterial.Parse = function (source, scene, rootUrl) {
        return core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.SerializationHelper.Parse(function () { return new SkyMaterial(source.name, scene); }, source, scene, rootUrl);
    };
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "luminance", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "turbidity", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "rayleigh", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "mieCoefficient", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "mieDirectionalG", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "distance", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "inclination", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "azimuth", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsVector3)()
    ], SkyMaterial.prototype, "sunPosition", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "useSunPosition", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsVector3)()
    ], SkyMaterial.prototype, "cameraOffset", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serializeAsVector3)()
    ], SkyMaterial.prototype, "up", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
        (0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.serialize)()
    ], SkyMaterial.prototype, "dithering", void 0);
    return SkyMaterial;
}(core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.PushMaterial));

(0,core_Misc_decorators__WEBPACK_IMPORTED_MODULE_1__.RegisterClass)("BABYLON.SkyMaterial", SkyMaterial);


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
/*!********************!*\
  !*** ./src/sky.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "materials": () => (/* reexport module object */ materials_legacy_legacy_sky__WEBPACK_IMPORTED_MODULE_0__)
/* harmony export */ });
/* harmony import */ var materials_legacy_legacy_sky__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! materials/legacy/legacy-sky */ "../../../lts/materials/dist/legacy/legacy-sky.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (materials_legacy_legacy_sky__WEBPACK_IMPORTED_MODULE_0__);

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=babylon.skyMaterial.js.map