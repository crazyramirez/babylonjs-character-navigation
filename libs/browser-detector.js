// Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';
// Safari 3.0+
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
// iOS
var iOSSafari = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && /WebKit/i.test(window.navigator.userAgent) && !(/(CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent));
var iOSBrowsers = /iP(ad|od|hone)/i.test(window.navigator.userAgent) && (/(WebKit|CriOS|FxiOS|OPiOS|mercury)/i.test(window.navigator.userAgent));
// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;
// Chrome 1+
var isChrome = !!window.chrome && !!window.chrome.webstore;
var isChromeGeneric = !!window.chrome && !isOpera;
// Blink engine detection
var isBlink = (isChrome || isOpera) && !!window.CSS;

// Android WebView ?¿
// isChromeMobile = navigator.userAgent.indexOf(' Chrome/') >= 0 && navigator.userAgent.indexOf(' Mobile') >= 0;
var isChromeMobile = navigator.userAgent.indexOf(' wv') >= 0;

// Detección de dispositivo touch
var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));