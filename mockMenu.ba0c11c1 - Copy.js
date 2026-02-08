// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      if (res === false) {
        return {};
      }
      // Synthesize a module to follow re-exports.
      if (Array.isArray(res)) {
        var m = {__esModule: true};
        res.forEach(function (v) {
          var key = v[0];
          var id = v[1];
          var exp = v[2] || v[0];
          var x = newRequire(id);
          if (key === '*') {
            Object.keys(x).forEach(function (key) {
              if (
                key === 'default' ||
                key === '__esModule' ||
                Object.prototype.hasOwnProperty.call(m, key)
              ) {
                return;
              }

              Object.defineProperty(m, key, {
                enumerable: true,
                get: function () {
                  return x[key];
                },
              });
            });
          } else if (exp === '*') {
            Object.defineProperty(m, key, {
              enumerable: true,
              value: x,
            });
          } else {
            Object.defineProperty(m, key, {
              enumerable: true,
              get: function () {
                if (exp === 'default') {
                  return x.__esModule ? x.default : x;
                }
                return x[exp];
              },
            });
          }
        });
        return m;
      }
      return newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"fwbSe":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "83c44f5fba0c11c1";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"fNiNv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const mockMenu = {
    "547809": {
        restaurantName: "Theobroma",
        menu: [
            {
                category: "Recommended",
                items: [
                    {
                        id: "t1",
                        name: "Brownie",
                        description: "Rich chocolate brownie",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "t2",
                        name: "Chocolate Cake",
                        description: "Soft chocolate sponge",
                        price: 320,
                        isVeg: true
                    },
                    {
                        id: "t3",
                        name: "Chocolate Truffle Pastry",
                        description: "Layers of chocolate cream",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "t4",
                        name: "Red Velvet Brownie",
                        description: "Velvety red brownie with cream cheese",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "t5",
                        name: "Nutella Brownie",
                        description: "Brownie with hazelnut spread",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "t6",
                        name: "Red Velvet Cake",
                        description: "Cream cheese frosting",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "t7",
                        name: "Tiramisu",
                        description: "Coffee-flavored Italian dessert",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "t8",
                        name: "Cheesecake",
                        description: "Creamy baked cheesecake",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "t9",
                        name: "Fruit Tart",
                        description: "Fresh fruits on custard base",
                        price: 260,
                        isVeg: true
                    },
                    {
                        id: "t10",
                        name: "Lemon Tart",
                        description: "Tangy lemon filling",
                        price: 240,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "t11",
                        name: "Butterscotch Pastry",
                        description: "Caramel and cream layers",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "t12",
                        name: "Black Forest Pastry",
                        description: "Cherry and chocolate",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "t13",
                        name: "Pineapple Pastry",
                        description: "Tropical pineapple flavor",
                        price: 210,
                        isVeg: true
                    },
                    {
                        id: "t14",
                        name: "Strawberry Pastry",
                        description: "Fresh strawberry delight",
                        price: 230,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "t15",
                        name: "Hot Chocolate",
                        description: "Rich hot cocoa",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "t16",
                        name: "Cappuccino",
                        description: "Frothy coffee",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "t17",
                        name: "Iced Mocha",
                        description: "Chilled chocolate coffee",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "t18",
                        name: "Green Tea",
                        description: "Refreshing herbal tea",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "t19",
                        name: "Lemonade",
                        description: "Fresh lemon drink",
                        price: 140,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "142670": {
        restaurantName: "Shah Ghouse Hotel & Restaurant",
        menu: [
            {
                category: "Recommended",
                items: [
                    {
                        id: "sg1",
                        name: "Mutton Biryani",
                        description: "Hyderabadi dum biryani",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "sg2",
                        name: "Chicken Biryani",
                        description: "Classic chicken dum biryani",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "sg3",
                        name: "Prawn Biryani",
                        description: "Spicy prawn rice",
                        price: 500,
                        isVeg: false
                    },
                    {
                        id: "sg4",
                        name: "Veg Biryani",
                        description: "Mixed vegetable biryani",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "sg5",
                        name: "Egg Biryani",
                        description: "Biryani with boiled eggs",
                        price: 320,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "sg6",
                        name: "Chicken 65",
                        description: "Spicy fried chicken",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "sg7",
                        name: "Mutton Seekh Kebab",
                        description: "Minced mutton skewers",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "sg8",
                        name: "Apollo Fish",
                        description: "Crispy fish fry",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "sg9",
                        name: "Paneer Tikka",
                        description: "Grilled paneer cubes",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "sg10",
                        name: "Hara Bhara Kebab",
                        description: "Veg kebabs with greens",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "sg11",
                        name: "Butter Chicken",
                        description: "Creamy chicken curry",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "sg12",
                        name: "Mutton Rogan Josh",
                        description: "Spicy mutton gravy",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "sg13",
                        name: "Dal Fry",
                        description: "Tempered lentils",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "sg14",
                        name: "Paneer Butter Masala",
                        description: "Rich paneer dish",
                        price: 280,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "sg15",
                        name: "Qubani Ka Meetha",
                        description: "Apricot dessert",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "sg16",
                        name: "Double Ka Meetha",
                        description: "Bread pudding",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "sg17",
                        name: "Falooda",
                        description: "Rose milk with vermicelli",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "sg18",
                        name: "Gulab Jamun",
                        description: "Sweet milk balls",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "sg19",
                        name: "Kulfi",
                        description: "Traditional ice cream",
                        price: 130,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "2769": {
        restaurantName: "Blue Fox",
        menu: [
            {
                category: "Chinese",
                items: [
                    {
                        id: "bf1",
                        name: "Chicken Fried Rice",
                        description: "Chinese style fried rice",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "bf2",
                        name: "Veg Manchurian",
                        description: "Crispy veg balls",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "bf3",
                        name: "Schezwan Noodles",
                        description: "Spicy schezwan sauce noodles",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "bf4",
                        name: "Chilli Chicken",
                        description: "Indo-Chinese chilli chicken",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "bf5",
                        name: "Veg Hakka Noodles",
                        description: "Stir-fried veg noodles",
                        price: 190,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "bf6",
                        name: "Spring Rolls",
                        description: "Crispy veg rolls",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "bf7",
                        name: "Chicken Lollipop",
                        description: "Fried chicken wings",
                        price: 240,
                        isVeg: false
                    },
                    {
                        id: "bf8",
                        name: "Prawn Crackers",
                        description: "Crispy prawn snacks",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "bf9",
                        name: "Corn Soup",
                        description: "Sweet corn soup",
                        price: 150,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "bf10",
                        name: "Kung Pao Chicken",
                        description: "Spicy stir-fry chicken",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "bf11",
                        name: "Veg Chow Mein",
                        description: "Stir-fried noodles",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "bf12",
                        name: "Sweet and Sour Prawns",
                        description: "Tangy prawn dish",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "bf13",
                        name: "Mushroom Pepper Fry",
                        description: "Spicy mushrooms",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "bf14",
                        name: "Chicken Manchurian",
                        description: "Chicken in tangy sauce",
                        price: 260,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "bf15",
                        name: "Honey Noodles",
                        description: "Crispy noodles with honey",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "bf16",
                        name: "Date Pancakes",
                        description: "Sweet date-filled pancakes",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "bf17",
                        name: "Lychee Ice Cream",
                        description: "Exotic lychee flavor",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "bf18",
                        name: "Fried Ice Cream",
                        description: "Deep-fried ice cream ball",
                        price: 200,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "3324": {
        restaurantName: "Sri Kanya",
        menu: [
            {
                category: "Andhra Specials",
                items: [
                    {
                        id: "sk1",
                        name: "Andhra Chicken Curry",
                        description: "Spicy Andhra style",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "sk2",
                        name: "Gongura Mutton",
                        description: "Tangy gongura curry",
                        price: 420,
                        isVeg: false
                    },
                    {
                        id: "sk3",
                        name: "Natukodi Fry",
                        description: "Country chicken fry",
                        price: 380,
                        isVeg: false
                    },
                    {
                        id: "sk4",
                        name: "Prawn Masala",
                        description: "Spicy prawn curry",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "sk5",
                        name: "Avakaya Veg Biryani",
                        description: "Mango pickle flavored biryani",
                        price: 280,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "sk6",
                        name: "Chicken 65",
                        description: "Spicy fried chicken",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "sk7",
                        name: "Fish Fry",
                        description: "Crispy fried fish",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "sk8",
                        name: "Gobi Manchurian",
                        description: "Crispy cauliflower",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "sk9",
                        name: "Baby Corn Fry",
                        description: "Spicy corn starters",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Biryani",
                items: [
                    {
                        id: "sk10",
                        name: "Chicken Biryani",
                        description: "Aromatic chicken rice",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "sk11",
                        name: "Mutton Biryani",
                        description: "Tender mutton biryani",
                        price: 420,
                        isVeg: false
                    },
                    {
                        id: "sk12",
                        name: "Veg Biryani",
                        description: "Mixed veg rice",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "sk13",
                        name: "Egg Biryani",
                        description: "Biryani with eggs",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "sk14",
                        name: "Prawn Biryani",
                        description: "Seafood biryani",
                        price: 450,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "sk15",
                        name: "Pootharekulu",
                        description: "Sweet rice paper rolls",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "sk16",
                        name: "Bobbatlu",
                        description: "Sweet stuffed flatbread",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "sk17",
                        name: "Payasam",
                        description: "Rice pudding",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "sk18",
                        name: "Jalebi",
                        description: "Syrupy swirls",
                        price: 130,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "25251": {
        restaurantName: "Meridian Restaurant",
        menu: [
            {
                category: "Biryani",
                items: [
                    {
                        id: "m1",
                        name: "Chicken Biryani",
                        description: "Aromatic rice & chicken",
                        price: 330,
                        isVeg: false
                    },
                    {
                        id: "m2",
                        name: "Veg Biryani",
                        description: "Mixed veg biryani",
                        price: 260,
                        isVeg: true
                    },
                    {
                        id: "m3",
                        name: "Mutton Biryani",
                        description: "Tender mutton biryani",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "m4",
                        name: "Prawn Biryani",
                        description: "Seafood biryani",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "m5",
                        name: "Egg Biryani",
                        description: "Biryani with eggs",
                        price: 290,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "m6",
                        name: "Chicken Tikka",
                        description: "Grilled chicken skewers",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "m7",
                        name: "Paneer Tikka",
                        description: "Grilled paneer",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "m8",
                        name: "Fish Fingers",
                        description: "Crispy fish sticks",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "m9",
                        name: "Veg Pakora",
                        description: "Mixed veg fritters",
                        price: 200,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "m10",
                        name: "Butter Chicken",
                        description: "Creamy chicken curry",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "m11",
                        name: "Palak Paneer",
                        description: "Spinach and paneer",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "m12",
                        name: "Mutton Curry",
                        description: "Spicy mutton gravy",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "m13",
                        name: "Dal Tadka",
                        description: "Tempered lentils",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "m14",
                        name: "Prawn Masala",
                        description: "Spicy prawns",
                        price: 420,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "m15",
                        name: "Gulab Jamun",
                        description: "Sweet milk dumplings",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "m16",
                        name: "Ras Malai",
                        description: "Creamy cheese balls",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "m17",
                        name: "Ice Cream",
                        description: "Vanilla scoop",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "m18",
                        name: "Brownie",
                        description: "Chocolate brownie",
                        price: 200,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "296084": {
        restaurantName: "Haidari Chinese Restaurant",
        menu: [
            {
                category: "Chinese",
                items: [
                    {
                        id: "hc1",
                        name: "Chicken Noodles",
                        description: "Street-style noodles",
                        price: 210,
                        isVeg: false
                    },
                    {
                        id: "hc2",
                        name: "Veg Fried Rice",
                        description: "Classic fried rice",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "hc3",
                        name: "Manchow Soup",
                        description: "Spicy veg soup",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "hc4",
                        name: "Dragon Chicken",
                        description: "Sweet and spicy chicken",
                        price: 260,
                        isVeg: false
                    },
                    {
                        id: "hc5",
                        name: "Veg Spring Rolls",
                        description: "Crispy rolls with veg filling",
                        price: 160,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "hc6",
                        name: "Chilli Paneer",
                        description: "Spicy paneer cubes",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "hc7",
                        name: "Prawn Tempura",
                        description: "Battered fried prawns",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "hc8",
                        name: "Chicken Dumplings",
                        description: "Steamed chicken momos",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "hc9",
                        name: "Veg Dumplings",
                        description: "Steamed veg momos",
                        price: 200,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "hc10",
                        name: "Schezwan Chicken",
                        description: "Fiery schezwan sauce",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "hc11",
                        name: "Veg Ball Manchurian",
                        description: "Veg balls in sauce",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "hc12",
                        name: "Fish in Garlic Sauce",
                        description: "Garlic flavored fish",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "hc13",
                        name: "Mixed Veg Stir Fry",
                        description: "Healthy veg mix",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "hc14",
                        name: "Beef Chilli",
                        description: "Spicy beef dish",
                        price: 350,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "hc15",
                        name: "Fried Ice Cream",
                        description: "Crispy outside, cold inside",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "hc16",
                        name: "Banana Fritters",
                        description: "Honey glazed bananas",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "hc17",
                        name: "Mango Pudding",
                        description: "Sweet mango dessert",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "hc18",
                        name: "Coconut Jelly",
                        description: "Refreshing coconut gel",
                        price: 130,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "6498": {
        restaurantName: "Hotel Sandarshini",
        menu: [
            {
                category: "Tiffins",
                items: [
                    {
                        id: "hs1",
                        name: "Masala Dosa",
                        description: "Crispy dosa with potato filling",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "hs2",
                        name: "Idli",
                        description: "Soft steamed idlis",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "hs3",
                        name: "Vada",
                        description: "Crispy lentil donuts",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "hs4",
                        name: "Pongal",
                        description: "Savory rice and lentil porridge",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "hs5",
                        name: "Upma",
                        description: "Semolina cooked with veggies",
                        price: 65,
                        isVeg: true
                    }
                ]
            },
            {
                category: "South Indian Specials",
                items: [
                    {
                        id: "hs6",
                        name: "Plain Dosa",
                        description: "Simple crispy dosa",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "hs7",
                        name: "Onion Uttapam",
                        description: "Thick pancake with onions",
                        price: 85,
                        isVeg: true
                    },
                    {
                        id: "hs8",
                        name: "Rava Dosa",
                        description: "Crispy semolina dosa",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "hs9",
                        name: "Pesarattu",
                        description: "Green gram dosa",
                        price: 75,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "hs10",
                        name: "Filter Coffee",
                        description: "South Indian coffee",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "hs11",
                        name: "Masala Tea",
                        description: "Spiced tea",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "hs12",
                        name: "Buttermilk",
                        description: "Spiced yogurt drink",
                        price: 25,
                        isVeg: true
                    },
                    {
                        id: "hs13",
                        name: "Fresh Juice",
                        description: "Seasonal fruit juice",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "hs14",
                        name: "Lassi",
                        description: "Sweet yogurt drink",
                        price: 45,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "hs15",
                        name: "Samosa",
                        description: "Spicy potato pastry",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "hs16",
                        name: "Pakoda",
                        description: "Onion fritters",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "hs17",
                        name: "Bonda",
                        description: "Potato balls",
                        price: 35,
                        isVeg: true
                    },
                    {
                        id: "hs18",
                        name: "Mirchi Bajji",
                        description: "Chilli fritters",
                        price: 45,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "560732": {
        restaurantName: "Natural Ice Cream",
        menu: [
            {
                category: "Ice Creams",
                items: [
                    {
                        id: "ni1",
                        name: "Tender Coconut",
                        description: "Natural coconut ice cream",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "ni2",
                        name: "Sitaphal",
                        description: "Seasonal special",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "ni3",
                        name: "Mango",
                        description: "Fresh mango flavor",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "ni4",
                        name: "Chikoo",
                        description: "Sapodilla ice cream",
                        price: 115,
                        isVeg: true
                    },
                    {
                        id: "ni5",
                        name: "Jackfruit",
                        description: "Tropical jackfruit",
                        price: 125,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sundaes",
                items: [
                    {
                        id: "ni6",
                        name: "Hot Chocolate Fudge Sundae",
                        description: "With nuts and sauce",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "ni7",
                        name: "Fruit Sundae",
                        description: "Mixed fruits topping",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "ni8",
                        name: "Caramel Sundae",
                        description: "Caramel drizzle",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "ni9",
                        name: "Brownie Sundae",
                        description: "Brownie pieces",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Shakes",
                items: [
                    {
                        id: "ni10",
                        name: "Mango Shake",
                        description: "Thick mango milkshake",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "ni11",
                        name: "Chocolate Shake",
                        description: "Rich chocolate",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "ni12",
                        name: "Strawberry Shake",
                        description: "Fresh strawberry",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "ni13",
                        name: "Vanilla Shake",
                        description: "Classic vanilla",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "ni14",
                        name: "Coffee Shake",
                        description: "Iced coffee blend",
                        price: 170,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Special Flavors",
                items: [
                    {
                        id: "ni15",
                        name: "Anjeer",
                        description: "Fig ice cream",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "ni16",
                        name: "Guava",
                        description: "Tropical guava",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "ni17",
                        name: "Watermelon",
                        description: "Refreshing watermelon",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "ni18",
                        name: "Pineapple",
                        description: "Sweet pineapple",
                        price: 125,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "356688": {
        restaurantName: "Baskin Robbins",
        menu: [
            {
                category: "Ice Creams",
                items: [
                    {
                        id: "br1",
                        name: "Mississippi Mud",
                        description: "Chocolate fudge ice cream",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "br2",
                        name: "Pralines & Cream",
                        description: "Caramel flavored ice cream",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "br3",
                        name: "Mint Chocolate Chip",
                        description: "Mint with chocolate chips",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "br4",
                        name: "Very Berry Strawberry",
                        description: "Strawberry ice cream",
                        price: 170,
                        isVeg: true
                    },
                    {
                        id: "br5",
                        name: "Cotton Candy",
                        description: "Sweet candy flavor",
                        price: 160,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sundaes",
                items: [
                    {
                        id: "br6",
                        name: "Banana Split",
                        description: "Classic banana sundae",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "br7",
                        name: "Brownie Sundae",
                        description: "With hot fudge",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "br8",
                        name: "Oreo Sundae",
                        description: "Cookie crumble",
                        price: 230,
                        isVeg: true
                    },
                    {
                        id: "br9",
                        name: "Nutty Professor",
                        description: "Nuts and caramel",
                        price: 240,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Shakes",
                items: [
                    {
                        id: "br10",
                        name: "Oreo Shake",
                        description: "Cookie milkshake",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "br11",
                        name: "Chocolate Shake",
                        description: "Thick chocolate",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "br12",
                        name: "Strawberry Shake",
                        description: "Berry blend",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "br13",
                        name: "Vanilla Shake",
                        description: "Smooth vanilla",
                        price: 170,
                        isVeg: true
                    },
                    {
                        id: "br14",
                        name: "Caramel Shake",
                        description: "Sweet caramel",
                        price: 210,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cakes",
                items: [
                    {
                        id: "br15",
                        name: "Ice Cream Cake",
                        description: "Layered ice cream cake",
                        price: 500,
                        isVeg: true
                    },
                    {
                        id: "br16",
                        name: "Chocolate Cake",
                        description: "Chocolate flavor cake",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "br17",
                        name: "Strawberry Cake",
                        description: "Berry cake",
                        price: 480,
                        isVeg: true
                    },
                    {
                        id: "br18",
                        name: "Custom Cake",
                        description: "Personalized design",
                        price: 600,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "5285": {
        restaurantName: "Chicha\u2019s",
        menu: [
            {
                category: "Burgers",
                items: [
                    {
                        id: "c1",
                        name: "Chicken Burger",
                        description: "Juicy chicken patty",
                        price: 180,
                        isVeg: false
                    },
                    {
                        id: "c2",
                        name: "Veg Burger",
                        description: "Crispy veg patty",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "c3",
                        name: "Lamb Burger",
                        description: "Grilled lamb patty",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "c4",
                        name: "Cheese Burger",
                        description: "Burger with melted cheese",
                        price: 190,
                        isVeg: false
                    },
                    {
                        id: "c5",
                        name: "Paneer Burger",
                        description: "Paneer patty burger",
                        price: 170,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sandwiches",
                items: [
                    {
                        id: "c6",
                        name: "Club Sandwich",
                        description: "Layered sandwich",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "c7",
                        name: "Veg Grilled Sandwich",
                        description: "Toasted veg sandwich",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "c8",
                        name: "Chicken Sandwich",
                        description: "Grilled chicken",
                        price: 180,
                        isVeg: false
                    },
                    {
                        id: "c9",
                        name: "Egg Sandwich",
                        description: "Boiled egg filling",
                        price: 150,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "c10",
                        name: "French Fries",
                        description: "Crispy fries",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "c11",
                        name: "Onion Rings",
                        description: "Fried onion circles",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "c12",
                        name: "Chicken Nuggets",
                        description: "Bite-sized chicken",
                        price: 150,
                        isVeg: false
                    },
                    {
                        id: "c13",
                        name: "Cheese Sticks",
                        description: "Melted cheese fingers",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "c14",
                        name: "Coleslaw",
                        description: "Creamy cabbage salad",
                        price: 80,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "c15",
                        name: "Coke",
                        description: "Chilled cola",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "c16",
                        name: "Lemonade",
                        description: "Fresh lemon drink",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "c17",
                        name: "Milkshake",
                        description: "Thick shake",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "c18",
                        name: "Iced Tea",
                        description: "Refreshing tea",
                        price: 70,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "16571": {
        restaurantName: "Subway",
        menu: [
            {
                category: "Subs",
                items: [
                    {
                        id: "sw1",
                        name: "Veggie Delight",
                        description: "Fresh veggie sub",
                        price: 210,
                        isVeg: true
                    },
                    {
                        id: "sw2",
                        name: "Chicken Teriyaki",
                        description: "Sweet & spicy chicken",
                        price: 260,
                        isVeg: false
                    },
                    {
                        id: "sw3",
                        name: "Italian BMT",
                        description: "Ham, pepperoni & salami",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "sw4",
                        name: "Tuna",
                        description: "Tuna salad sub",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "sw5",
                        name: "Paneer Tikka",
                        description: "Indian spiced paneer",
                        price: 230,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Salads",
                items: [
                    {
                        id: "sw6",
                        name: "Veg Salad",
                        description: "Fresh vegetables",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "sw7",
                        name: "Chicken Salad",
                        description: "Grilled chicken strips",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "sw8",
                        name: "Tuna Salad",
                        description: "Tuna with veggies",
                        price: 240,
                        isVeg: false
                    },
                    {
                        id: "sw9",
                        name: "Paneer Salad",
                        description: "Paneer cubes salad",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "sw10",
                        name: "Cookies",
                        description: "Chocolate chip cookies",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "sw11",
                        name: "Chips",
                        description: "Potato crisps",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "sw12",
                        name: "Hash Browns",
                        description: "Crispy potato patties",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "sw13",
                        name: "Cheese Toastie",
                        description: "Grilled cheese",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "sw14",
                        name: "Soup",
                        description: "Vegetable soup",
                        price: 100,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "sw15",
                        name: "Soft Drink",
                        description: "Chilled soda",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "sw16",
                        name: "Iced Tea",
                        description: "Lemon flavored",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "sw17",
                        name: "Coffee",
                        description: "Hot coffee",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "sw18",
                        name: "Bottled Water",
                        description: "Mineral water",
                        price: 30,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "17104": {
        restaurantName: "KFC",
        menu: [
            {
                category: "Chicken",
                items: [
                    {
                        id: "k1",
                        name: "Hot & Crispy Chicken",
                        description: "Crispy fried chicken",
                        price: 299,
                        isVeg: false
                    },
                    {
                        id: "k2",
                        name: "Chicken Popcorn",
                        description: "Bite-sized chicken",
                        price: 199,
                        isVeg: false
                    },
                    {
                        id: "k3",
                        name: "Zinger Burger",
                        description: "Spicy chicken burger",
                        price: 229,
                        isVeg: false
                    },
                    {
                        id: "k4",
                        name: "Chicken Bucket",
                        description: "Mixed chicken pieces",
                        price: 499,
                        isVeg: false
                    },
                    {
                        id: "k5",
                        name: "Hot Wings",
                        description: "Spicy chicken wings",
                        price: 249,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Burgers",
                items: [
                    {
                        id: "k6",
                        name: "Veg Zinger",
                        description: "Spicy veg burger",
                        price: 179,
                        isVeg: true
                    },
                    {
                        id: "k7",
                        name: "Chicken Cheese Burger",
                        description: "Cheese topped chicken",
                        price: 209,
                        isVeg: false
                    },
                    {
                        id: "k8",
                        name: "Double Chicken Burger",
                        description: "Two patties",
                        price: 259,
                        isVeg: false
                    },
                    {
                        id: "k9",
                        name: "Paneer Burger",
                        description: "Paneer patty",
                        price: 189,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "k10",
                        name: "French Fries",
                        description: "Crispy fries",
                        price: 99,
                        isVeg: true
                    },
                    {
                        id: "k11",
                        name: "Coleslaw",
                        description: "Creamy salad",
                        price: 79,
                        isVeg: true
                    },
                    {
                        id: "k12",
                        name: "Mashed Potatoes",
                        description: "Creamy potatoes",
                        price: 89,
                        isVeg: true
                    },
                    {
                        id: "k13",
                        name: "Corn on the Cob",
                        description: "Buttered corn",
                        price: 69,
                        isVeg: true
                    },
                    {
                        id: "k14",
                        name: "Onion Rings",
                        description: "Fried onions",
                        price: 109,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "k15",
                        name: "Pepsi",
                        description: "Chilled cola",
                        price: 59,
                        isVeg: true
                    },
                    {
                        id: "k16",
                        name: "Lemonade",
                        description: "Fresh lemon",
                        price: 69,
                        isVeg: true
                    },
                    {
                        id: "k17",
                        name: "Iced Tea",
                        description: "Peach flavored",
                        price: 79,
                        isVeg: true
                    },
                    {
                        id: "k18",
                        name: "Coffee",
                        description: "Hot brewed",
                        price: 89,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "53796": {
        restaurantName: "Jaggu Mithai",
        menu: [
            {
                category: "Sweets",
                items: [
                    {
                        id: "jm1",
                        name: "Gulab Jamun",
                        description: "Soft milk dumplings",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "jm2",
                        name: "Rasgulla",
                        description: "Spongy syrup dessert",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "jm3",
                        name: "Kaju Katli",
                        description: "Cashew fudge",
                        price: 500,
                        isVeg: true
                    },
                    {
                        id: "jm4",
                        name: "Badam Halwa",
                        description: "Almond sweet pudding",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "jm5",
                        name: "Jalebi",
                        description: "Crispy syrupy swirls",
                        price: 150,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Dry Sweets",
                items: [
                    {
                        id: "jm6",
                        name: "Peda",
                        description: "Milk sweet",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "jm7",
                        name: "Barfi",
                        description: "Coconut barfi",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "jm8",
                        name: "Laddu",
                        description: "Besan laddu",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "jm9",
                        name: "Soan Papdi",
                        description: "Flaky sweet",
                        price: 250,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "jm10",
                        name: "Mixture",
                        description: "Spicy mix",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "jm11",
                        name: "Chakli",
                        description: "Spiral snack",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "jm12",
                        name: "Murukku",
                        description: "Crispy twists",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "jm13",
                        name: "Kara Sev",
                        description: "Spicy sev",
                        price: 170,
                        isVeg: true
                    },
                    {
                        id: "jm14",
                        name: "Boondi",
                        description: "Gram flour balls",
                        price: 160,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Specials",
                items: [
                    {
                        id: "jm15",
                        name: "Mysore Pak",
                        description: "Ghee rich sweet",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "jm16",
                        name: "Halwa",
                        description: "Carrot halwa",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "jm17",
                        name: "Ras Malai",
                        description: "Creamy dessert",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "jm18",
                        name: "Payasam",
                        description: "Sweet kheer",
                        price: 150,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "1111967": {
        restaurantName: "Mealy \u2013 Your Everyday Meal",
        menu: [
            {
                category: "Meals",
                items: [
                    {
                        id: "me1",
                        name: "Veg Meal",
                        description: "Rice, curry & dal",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "me2",
                        name: "Chicken Meal",
                        description: "Rice with chicken curry",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "me3",
                        name: "Mutton Meal",
                        description: "Rice with mutton gravy",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "me4",
                        name: "Fish Meal",
                        description: "Rice with fish curry",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "me5",
                        name: "Egg Meal",
                        description: "Rice with egg masala",
                        price: 220,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "me6",
                        name: "Veg Soup",
                        description: "Hot vegetable soup",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "me7",
                        name: "Chicken Soup",
                        description: "Chicken broth",
                        price: 120,
                        isVeg: false
                    },
                    {
                        id: "me8",
                        name: "Papad",
                        description: "Crispy papad",
                        price: 20,
                        isVeg: true
                    },
                    {
                        id: "me9",
                        name: "Salad",
                        description: "Fresh salad",
                        price: 80,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Breads",
                items: [
                    {
                        id: "me10",
                        name: "Chapati",
                        description: "Whole wheat flatbread",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "me11",
                        name: "Naan",
                        description: "Soft naan bread",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "me12",
                        name: "Paratha",
                        description: "Layered paratha",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "me13",
                        name: "Puri",
                        description: "Fried puri",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "me14",
                        name: "Roti",
                        description: "Thin roti",
                        price: 25,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "me15",
                        name: "Gulab Jamun",
                        description: "Sweet dumplings",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "me16",
                        name: "Kheer",
                        description: "Rice pudding",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "me17",
                        name: "Fruit Salad",
                        description: "Mixed fruits",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "me18",
                        name: "Ice Cream",
                        description: "Vanilla scoop",
                        price: 80,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "237054": {
        restaurantName: "Cafe Bahar since 1973",
        menu: [
            {
                category: "Biryani",
                items: [
                    {
                        id: "cb1",
                        name: "Chicken Biryani",
                        description: "Signature biryani",
                        price: 340,
                        isVeg: false
                    },
                    {
                        id: "cb2",
                        name: "Mutton Biryani",
                        description: "Tender mutton rice",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "cb3",
                        name: "Veg Biryani",
                        description: "Vegetable layered rice",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "cb4",
                        name: "Prawn Biryani",
                        description: "Seafood special biryani",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "cb5",
                        name: "Egg Biryani",
                        description: "Biryani with eggs",
                        price: 300,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "cb6",
                        name: "Chicken 65",
                        description: "Spicy fried chicken",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "cb7",
                        name: "Mutton Kebab",
                        description: "Grilled mutton",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "cb8",
                        name: "Paneer Tikka",
                        description: "Grilled paneer",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "cb9",
                        name: "Fish Fry",
                        description: "Crispy fish",
                        price: 320,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "cb10",
                        name: "Butter Chicken",
                        description: "Creamy curry",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "cb11",
                        name: "Dal Fry",
                        description: "Tempered dal",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "cb12",
                        name: "Mutton Curry",
                        description: "Spicy mutton",
                        price: 380,
                        isVeg: false
                    },
                    {
                        id: "cb13",
                        name: "Paneer Masala",
                        description: "Spicy paneer",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "cb14",
                        name: "Bagara Baingan",
                        description: "Eggplant curry",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "cb15",
                        name: "Qubani Ka Meetha",
                        description: "Apricot sweet",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "cb16",
                        name: "Double Ka Meetha",
                        description: "Bread sweet",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "cb17",
                        name: "Falooda",
                        description: "Rose dessert drink",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "cb18",
                        name: "Kulfi",
                        description: "Traditional ice cream",
                        price: 130,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "1022488": {
        restaurantName: "Raju Gari Biryani",
        menu: [
            {
                category: "Biryani",
                items: [
                    {
                        id: "rg1",
                        name: "Ulavacharu Chicken Biryani",
                        description: "Special biryani",
                        price: 380,
                        isVeg: false
                    },
                    {
                        id: "rg2",
                        name: "Bamboo Chicken Biryani",
                        description: "Unique bamboo flavor",
                        price: 420,
                        isVeg: false
                    },
                    {
                        id: "rg3",
                        name: "Mutton Biryani",
                        description: "Rich mutton biryani",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "rg4",
                        name: "Veg Ulavacharu Biryani",
                        description: "Horse gram flavored veg",
                        price: 320,
                        isVeg: true
                    },
                    {
                        id: "rg5",
                        name: "Prawn Biryani",
                        description: "Spicy prawn rice",
                        price: 480,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "rg6",
                        name: "Chicken Fry",
                        description: "Spicy chicken pieces",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "rg7",
                        name: "Mutton Fry",
                        description: "Dry mutton fry",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "rg8",
                        name: "Prawn Fry",
                        description: "Crispy prawns",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "rg9",
                        name: "Veg Manchurian",
                        description: "Crispy veg balls",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "rg10",
                        name: "Chicken Curry",
                        description: "Home style curry",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "rg11",
                        name: "Mutton Curry",
                        description: "Spicy gravy",
                        price: 380,
                        isVeg: false
                    },
                    {
                        id: "rg12",
                        name: "Egg Masala",
                        description: "Boiled eggs in gravy",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "rg13",
                        name: "Paneer Curry",
                        description: "Creamy paneer",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "rg14",
                        name: "Dal Tadka",
                        description: "Lentil tempering",
                        price: 200,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "rg15",
                        name: "Gulab Jamun",
                        description: "Sweet balls",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "rg16",
                        name: "Rasgulla",
                        description: "Syrupy cheese balls",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "rg17",
                        name: "Payasam",
                        description: "Sweet porridge",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "rg18",
                        name: "Ice Cream",
                        description: "Vanilla flavor",
                        price: 90,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "100942": {
        restaurantName: "Lucky Multicuisine",
        menu: [
            {
                category: "North Indian",
                items: [
                    {
                        id: "lm1",
                        name: "Butter Chicken",
                        description: "Creamy chicken curry",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "lm2",
                        name: "Paneer Butter Masala",
                        description: "Creamy paneer dish",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "lm3",
                        name: "Dal Makhani",
                        description: "Buttery lentils",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "lm4",
                        name: "Chicken Tikka Masala",
                        description: "Grilled chicken in gravy",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "lm5",
                        name: "Aloo Gobi",
                        description: "Potato cauliflower curry",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Chinese",
                items: [
                    {
                        id: "lm6",
                        name: "Fried Rice",
                        description: "Veg fried rice",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "lm7",
                        name: "Chilli Chicken",
                        description: "Spicy chicken",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "lm8",
                        name: "Noodles",
                        description: "Veg hakka noodles",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "lm9",
                        name: "Manchurian",
                        description: "Veg manchurian",
                        price: 240,
                        isVeg: true
                    }
                ]
            },
            {
                category: "South Indian",
                items: [
                    {
                        id: "lm10",
                        name: "Masala Dosa",
                        description: "Crispy dosa",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lm11",
                        name: "Idli Sambar",
                        description: "Steamed idlis",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lm12",
                        name: "Vada",
                        description: "Fried vada",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "lm13",
                        name: "Uttapam",
                        description: "Thick pancake",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "lm14",
                        name: "Pongal",
                        description: "Rice lentil dish",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "lm15",
                        name: "Gulab Jamun",
                        description: "Sweet dumplings",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "lm16",
                        name: "Ice Cream",
                        description: "Assorted flavors",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lm17",
                        name: "Brownie",
                        description: "Chocolate brownie",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lm18",
                        name: "Ras Malai",
                        description: "Creamy sweet",
                        price: 140,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "699984": {
        restaurantName: "Blue Sea Restaurant",
        menu: [
            {
                category: "Seafood",
                items: [
                    {
                        id: "bs1",
                        name: "Fish Fry",
                        description: "Crispy fried fish",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "bs2",
                        name: "Prawn Masala",
                        description: "Spicy prawn curry",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "bs3",
                        name: "Crab Curry",
                        description: "Tangy crab dish",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "bs4",
                        name: "Lobster Thermidor",
                        description: "Baked lobster",
                        price: 600,
                        isVeg: false
                    },
                    {
                        id: "bs5",
                        name: "Squid Rings",
                        description: "Fried squid appetizers",
                        price: 380,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "bs6",
                        name: "Prawn Cocktail",
                        description: "Chilled prawns",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "bs7",
                        name: "Fish Fingers",
                        description: "Battered fish sticks",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "bs8",
                        name: "Calamari",
                        description: "Fried squid",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "bs9",
                        name: "Seafood Soup",
                        description: "Mixed seafood broth",
                        price: 250,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "bs10",
                        name: "Grilled Fish",
                        description: "Herb marinated fish",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "bs11",
                        name: "Prawn Biryani",
                        description: "Seafood rice",
                        price: 450,
                        isVeg: false
                    },
                    {
                        id: "bs12",
                        name: "Crab Masala",
                        description: "Spicy crab",
                        price: 480,
                        isVeg: false
                    },
                    {
                        id: "bs13",
                        name: "Fish Curry",
                        description: "Coconut fish curry",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "bs14",
                        name: "Lobster Curry",
                        description: "Rich lobster dish",
                        price: 650,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "bs15",
                        name: "Coconut Pudding",
                        description: "Sweet coconut dessert",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "bs16",
                        name: "Fruit Salad",
                        description: "Fresh fruits",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "bs17",
                        name: "Ice Cream",
                        description: "Sea salt caramel",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "bs18",
                        name: "Tiramisu",
                        description: "Coffee dessert",
                        price: 200,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "312800": {
        restaurantName: "Hillstar Restaurant",
        menu: [
            {
                category: "Indian",
                items: [
                    {
                        id: "hr1",
                        name: "Paneer Butter Masala",
                        description: "Creamy paneer curry",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "hr2",
                        name: "Chicken Biryani",
                        description: "Aromatic rice dish",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "hr3",
                        name: "Veg Pulao",
                        description: "Mixed vegetable rice",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "hr4",
                        name: "Mutton Rogan Josh",
                        description: "Kashmiri mutton curry",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "hr5",
                        name: "Palak Paneer",
                        description: "Spinach and paneer",
                        price: 260,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "hr6",
                        name: "Chicken Tikka",
                        description: "Grilled chicken",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "hr7",
                        name: "Paneer Pakora",
                        description: "Fried paneer",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "hr8",
                        name: "Veg Spring Rolls",
                        description: "Crispy rolls",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "hr9",
                        name: "Fish Amritsari",
                        description: "Spicy fish fry",
                        price: 350,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Breads",
                items: [
                    {
                        id: "hr10",
                        name: "Naan",
                        description: "Soft naan",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "hr11",
                        name: "Roti",
                        description: "Whole wheat roti",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "hr12",
                        name: "Paratha",
                        description: "Stuffed paratha",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "hr13",
                        name: "Kulcha",
                        description: "Leavened bread",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "hr14",
                        name: "Puri",
                        description: "Fried puri",
                        price: 40,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "hr15",
                        name: "Gajar Halwa",
                        description: "Carrot pudding",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "hr16",
                        name: "Ras Malai",
                        description: "Creamy balls",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "hr17",
                        name: "Kheer",
                        description: "Rice pudding",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "hr18",
                        name: "Jalebi",
                        description: "Syrupy dessert",
                        price: 140,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "792059": {
        restaurantName: "California Burrito",
        menu: [
            {
                category: "Mexican",
                items: [
                    {
                        id: "cbt1",
                        name: "Veg Burrito Bowl",
                        description: "Mexican rice bowl",
                        price: 290,
                        isVeg: true
                    },
                    {
                        id: "cbt2",
                        name: "Chicken Burrito",
                        description: "Grilled chicken wrap",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "cbt3",
                        name: "Tacos",
                        description: "Crispy tacos with filling",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "cbt4",
                        name: "Quesadilla",
                        description: "Cheese stuffed tortilla",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "cbt5",
                        name: "Nachos",
                        description: "Loaded nachos with salsa",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "cbt6",
                        name: "Guacamole",
                        description: "Avocado dip",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "cbt7",
                        name: "Chips and Salsa",
                        description: "Crispy chips",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "cbt8",
                        name: "Cheese Queso",
                        description: "Melted cheese dip",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "cbt9",
                        name: "Chicken Wings",
                        description: "Mexican spiced wings",
                        price: 250,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Salads",
                items: [
                    {
                        id: "cbt10",
                        name: "Veg Salad Bowl",
                        description: "Fresh veggies",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "cbt11",
                        name: "Chicken Salad",
                        description: "Grilled chicken salad",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "cbt12",
                        name: "Bean Salad",
                        description: "Black bean mix",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "cbt13",
                        name: "Avocado Salad",
                        description: "Avocado and greens",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "cbt14",
                        name: "Prawn Salad",
                        description: "Seafood salad",
                        price: 300,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "cbt15",
                        name: "Lime Soda",
                        description: "Fresh lime",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "cbt16",
                        name: "Margarita Mocktail",
                        description: "Non-alcoholic margarita",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "cbt17",
                        name: "Iced Tea",
                        description: "Lemon iced tea",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "cbt18",
                        name: "Soft Drink",
                        description: "Cola",
                        price: 60,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "1125892": {
        restaurantName: "Burger King",
        menu: [
            {
                category: "Burgers",
                items: [
                    {
                        id: "bk1",
                        name: "Whopper",
                        description: "Flame grilled burger",
                        price: 199,
                        isVeg: false
                    },
                    {
                        id: "bk2",
                        name: "Veg Whopper",
                        description: "Veg patty burger",
                        price: 179,
                        isVeg: true
                    },
                    {
                        id: "bk3",
                        name: "Chicken Whopper",
                        description: "Chicken patty whopper",
                        price: 209,
                        isVeg: false
                    },
                    {
                        id: "bk4",
                        name: "Crispy Veg Burger",
                        description: "Crispy veg burger",
                        price: 99,
                        isVeg: true
                    },
                    {
                        id: "bk5",
                        name: "Cheese Burger",
                        description: "Burger with cheese slice",
                        price: 149,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "bk6",
                        name: "French Fries",
                        description: "Crispy fries",
                        price: 79,
                        isVeg: true
                    },
                    {
                        id: "bk7",
                        name: "Onion Rings",
                        description: "Fried onions",
                        price: 99,
                        isVeg: true
                    },
                    {
                        id: "bk8",
                        name: "Chicken Fries",
                        description: "Chicken strips",
                        price: 129,
                        isVeg: false
                    },
                    {
                        id: "bk9",
                        name: "Hash Browns",
                        description: "Potato patties",
                        price: 69,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Wraps",
                items: [
                    {
                        id: "bk10",
                        name: "Veg Wrap",
                        description: "Veg filling wrap",
                        price: 149,
                        isVeg: true
                    },
                    {
                        id: "bk11",
                        name: "Chicken Wrap",
                        description: "Grilled chicken wrap",
                        price: 169,
                        isVeg: false
                    },
                    {
                        id: "bk12",
                        name: "Paneer Wrap",
                        description: "Paneer spiced wrap",
                        price: 159,
                        isVeg: true
                    },
                    {
                        id: "bk13",
                        name: "Egg Wrap",
                        description: "Egg and cheese wrap",
                        price: 139,
                        isVeg: false
                    },
                    {
                        id: "bk14",
                        name: "Lamb Wrap",
                        description: "Lamb patty wrap",
                        price: 189,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "bk15",
                        name: "Coke",
                        description: "Chilled cola",
                        price: 59,
                        isVeg: true
                    },
                    {
                        id: "bk16",
                        name: "Thick Shake",
                        description: "Chocolate shake",
                        price: 129,
                        isVeg: true
                    },
                    {
                        id: "bk17",
                        name: "Lemonade",
                        description: "Fresh lemon",
                        price: 69,
                        isVeg: true
                    },
                    {
                        id: "bk18",
                        name: "Coffee",
                        description: "Hot coffee",
                        price: 79,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "437301": {
        restaurantName: "Pizza Hut",
        menu: [
            {
                category: "Pizzas",
                items: [
                    {
                        id: "ph1",
                        name: "Margherita Pizza",
                        description: "Classic cheese and tomato",
                        price: 299,
                        isVeg: true
                    },
                    {
                        id: "ph2",
                        name: "Pepperoni Pizza",
                        description: "Pepperoni slices on pizza",
                        price: 399,
                        isVeg: false
                    },
                    {
                        id: "ph3",
                        name: "Veggie Supreme",
                        description: "Loaded with veggies",
                        price: 349,
                        isVeg: true
                    },
                    {
                        id: "ph4",
                        name: "Chicken Tikka Pizza",
                        description: "Indian spiced chicken",
                        price: 379,
                        isVeg: false
                    },
                    {
                        id: "ph5",
                        name: "Paneer Pizza",
                        description: "Paneer and capsicum",
                        price: 329,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "ph6",
                        name: "Garlic Bread",
                        description: "Toasted garlic bread",
                        price: 149,
                        isVeg: true
                    },
                    {
                        id: "ph7",
                        name: "Chicken Wings",
                        description: "Spicy fried wings",
                        price: 199,
                        isVeg: false
                    },
                    {
                        id: "ph8",
                        name: "Cheese Sticks",
                        description: "Mozzarella sticks",
                        price: 179,
                        isVeg: true
                    },
                    {
                        id: "ph9",
                        name: "Potato Wedges",
                        description: "Crispy wedges",
                        price: 129,
                        isVeg: true
                    },
                    {
                        id: "ph10",
                        name: "Pasta",
                        description: "Creamy white sauce pasta",
                        price: 249,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "ph11",
                        name: "Choco Lava Cake",
                        description: "Molten chocolate cake",
                        price: 99,
                        isVeg: true
                    },
                    {
                        id: "ph12",
                        name: "Brownie",
                        description: "Fudgy brownie",
                        price: 89,
                        isVeg: true
                    },
                    {
                        id: "ph13",
                        name: "Ice Cream Sundae",
                        description: "Vanilla sundae",
                        price: 119,
                        isVeg: true
                    },
                    {
                        id: "ph14",
                        name: "Tiramisu",
                        description: "Coffee dessert",
                        price: 149,
                        isVeg: true
                    },
                    {
                        id: "ph15",
                        name: "Cheesecake",
                        description: "New York style",
                        price: 139,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "ph16",
                        name: "Pepsi",
                        description: "Chilled soda",
                        price: 59,
                        isVeg: true
                    },
                    {
                        id: "ph17",
                        name: "Lemonade",
                        description: "Fresh lemon drink",
                        price: 69,
                        isVeg: true
                    },
                    {
                        id: "ph18",
                        name: "Iced Tea",
                        description: "Peach iced tea",
                        price: 79,
                        isVeg: true
                    },
                    {
                        id: "ph19",
                        name: "Coffee",
                        description: "Hot brewed coffee",
                        price: 89,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "7003": {
        restaurantName: "Almond House",
        menu: [
            {
                category: "Sweets",
                items: [
                    {
                        id: "ah1",
                        name: "Badam Burfi",
                        description: "Almond fudge",
                        price: 500,
                        isVeg: true
                    },
                    {
                        id: "ah2",
                        name: "Kaju Katli",
                        description: "Cashew sweet",
                        price: 550,
                        isVeg: true
                    },
                    {
                        id: "ah3",
                        name: "Pista Roll",
                        description: "Pistachio rolled sweet",
                        price: 520,
                        isVeg: true
                    },
                    {
                        id: "ah4",
                        name: "Dry Fruit Laddu",
                        description: "Mixed dry fruits ball",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "ah5",
                        name: "Almond Biscuits",
                        description: "Crunchy almond cookies",
                        price: 300,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "ah6",
                        name: "Mixture",
                        description: "Spicy savory mix",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "ah7",
                        name: "Murukku",
                        description: "Crispy rice flour snack",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "ah8",
                        name: "Kara Boondi",
                        description: "Spicy gram flour balls",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "ah9",
                        name: "Chakli",
                        description: "Spiral shaped snack",
                        price: 170,
                        isVeg: true
                    },
                    {
                        id: "ah10",
                        name: "Thattai",
                        description: "Flat rice cracker",
                        price: 160,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Dry Fruits",
                items: [
                    {
                        id: "ah11",
                        name: "Roasted Almonds",
                        description: "Salted roasted almonds",
                        price: 600,
                        isVeg: true
                    },
                    {
                        id: "ah12",
                        name: "Cashew Nuts",
                        description: "Plain cashews",
                        price: 650,
                        isVeg: true
                    },
                    {
                        id: "ah13",
                        name: "Pistachios",
                        description: "Salted pistachios",
                        price: 700,
                        isVeg: true
                    },
                    {
                        id: "ah14",
                        name: "Walnuts",
                        description: "Whole walnuts",
                        price: 550,
                        isVeg: true
                    },
                    {
                        id: "ah15",
                        name: "Raisins",
                        description: "Dried grapes",
                        price: 300,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Specials",
                items: [
                    {
                        id: "ah16",
                        name: "Dry Fruit Halwa",
                        description: "Mixed nut pudding",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "ah17",
                        name: "Anjeer Barfi",
                        description: "Fig fudge",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "ah18",
                        name: "Date Rolls",
                        description: "Stuffed date rolls",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "ah19",
                        name: "Apricot Delight",
                        description: "Apricot sweet",
                        price: 380,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "74979": {
        restaurantName: "Ohr's Cake Nation",
        menu: [
            {
                category: "Cakes",
                items: [
                    {
                        id: "oc1",
                        name: "Chocolate Cake",
                        description: "Rich chocolate sponge",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "oc2",
                        name: "Vanilla Cake",
                        description: "Classic vanilla flavor",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "oc3",
                        name: "Red Velvet Cake",
                        description: "Velvety red with cream",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "oc4",
                        name: "Black Forest Cake",
                        description: "Cherry and cream layers",
                        price: 420,
                        isVeg: true
                    },
                    {
                        id: "oc5",
                        name: "Pineapple Cake",
                        description: "Tropical pineapple",
                        price: 380,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "oc6",
                        name: "Butterscotch Pastry",
                        description: "Caramel flavored",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "oc7",
                        name: "Strawberry Pastry",
                        description: "Fresh strawberry",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "oc8",
                        name: "Mango Pastry",
                        description: "Seasonal mango",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "oc9",
                        name: "Truffle Pastry",
                        description: "Chocolate truffle",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "oc10",
                        name: "Blueberry Pastry",
                        description: "Berry delight",
                        price: 140,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cupcakes",
                items: [
                    {
                        id: "oc11",
                        name: "Chocolate Cupcake",
                        description: "Mini chocolate cake",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "oc12",
                        name: "Vanilla Cupcake",
                        description: "Mini vanilla",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "oc13",
                        name: "Red Velvet Cupcake",
                        description: "Mini red velvet",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "oc14",
                        name: "Lemon Cupcake",
                        description: "Tangy lemon",
                        price: 75,
                        isVeg: true
                    },
                    {
                        id: "oc15",
                        name: "Oreo Cupcake",
                        description: "With oreo crumbs",
                        price: 85,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cookies",
                items: [
                    {
                        id: "oc16",
                        name: "Chocolate Chip Cookies",
                        description: "Crunchy cookies",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "oc17",
                        name: "Oatmeal Cookies",
                        description: "Healthy oats",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "oc18",
                        name: "Butter Cookies",
                        description: "Buttery delight",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "oc19",
                        name: "Almond Cookies",
                        description: "Nutty flavor",
                        price: 70,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "2097": {
        restaurantName: "Agrawala Sweets",
        menu: [
            {
                category: "Sweets",
                items: [
                    {
                        id: "as1",
                        name: "Rasgulla",
                        description: "Spongy cheese balls",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "as2",
                        name: "Gulab Jamun",
                        description: "Fried milk balls",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "as3",
                        name: "Barfi",
                        description: "Milk fudge",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "as4",
                        name: "Laddu",
                        description: "Sweet balls",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "as5",
                        name: "Peda",
                        description: "Milk sweet",
                        price: 280,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "as6",
                        name: "Samosa",
                        description: "Spicy potato filled",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "as7",
                        name: "Kachori",
                        description: "Stuffed pastry",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "as8",
                        name: "Dhokla",
                        description: "Steamed savory cake",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "as9",
                        name: "Pakora",
                        description: "Fritters",
                        price: 35,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Halwas",
                items: [
                    {
                        id: "as10",
                        name: "Gajar Halwa",
                        description: "Carrot pudding",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "as11",
                        name: "Badam Halwa",
                        description: "Almond pudding",
                        price: 250,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "355747": {
        restaurantName: "Kwality Walls",
        menu: [
            {
                category: "Ice Creams",
                items: [
                    {
                        id: "kw1",
                        name: "Vanilla Ice Cream",
                        description: "Classic creamy vanilla",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "kw2",
                        name: "Chocolate Ice Cream",
                        description: "Rich chocolate flavor",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "kw3",
                        name: "Strawberry Ice Cream",
                        description: "Fresh strawberry delight",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "kw4",
                        name: "Butterscotch Ice Cream",
                        description: "Caramel nuts crunch",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "kw5",
                        name: "Mango Ice Cream",
                        description: "Tropical mango",
                        price: 115,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sundaes",
                items: [
                    {
                        id: "kw6",
                        name: "Hot Fudge Sundae",
                        description: "Vanilla with chocolate sauce",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "kw7",
                        name: "Caramel Sundae",
                        description: "Caramel drizzle sundae",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "kw8",
                        name: "Fruit Sundae",
                        description: "Mixed fruits topping",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "kw9",
                        name: "Brownie Sundae",
                        description: "Brownie pieces sundae",
                        price: 170,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Shakes",
                items: [
                    {
                        id: "kw10",
                        name: "Chocolate Shake",
                        description: "Thick chocolate shake",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "kw11",
                        name: "Vanilla Shake",
                        description: "Creamy vanilla shake",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "kw12",
                        name: "Strawberry Shake",
                        description: "Berry shake",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "kw13",
                        name: "Oreo Shake",
                        description: "Cookie crumble shake",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "kw14",
                        name: "Mango Shake",
                        description: "Mango flavored shake",
                        price: 125,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Frozen Desserts",
                items: [
                    {
                        id: "kw15",
                        name: "Kulfi",
                        description: "Traditional Indian kulfi",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "kw16",
                        name: "Ice Cream Sandwich",
                        description: "Ice cream between cookies",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "kw17",
                        name: "Choco Bar",
                        description: "Chocolate coated bar",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "kw18",
                        name: "Cone Ice Cream",
                        description: "Vanilla cone",
                        price: 60,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "69039": {
        restaurantName: "Ovenfresh Cakes And Desserts",
        menu: [
            {
                category: "Cakes",
                items: [
                    {
                        id: "of1",
                        name: "Chocolate Cake",
                        description: "Moist chocolate cake",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "of2",
                        name: "Vanilla Cake",
                        description: "Soft vanilla sponge",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "of3",
                        name: "Red Velvet Cake",
                        description: "Cream cheese topping",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "of4",
                        name: "Black Forest Cake",
                        description: "Cherry filled",
                        price: 420,
                        isVeg: true
                    },
                    {
                        id: "of5",
                        name: "Pineapple Cake",
                        description: "Fresh pineapple",
                        price: 380,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "of6",
                        name: "Chocolate Pastry",
                        description: "Rich chocolate",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "of7",
                        name: "Butterscotch Pastry",
                        description: "Caramel flavor",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "of8",
                        name: "Strawberry Pastry",
                        description: "Berry delight",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "of9",
                        name: "Mango Pastry",
                        description: "Tropical mango",
                        price: 115,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "of10",
                        name: "Tiramisu",
                        description: "Italian coffee dessert",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "of11",
                        name: "Cheesecake",
                        description: "Creamy cheesecake",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "of12",
                        name: "Brownie",
                        description: "Fudgy chocolate brownie",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "of13",
                        name: "Cupcake Assortment",
                        description: "Mixed cupcakes",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "of14",
                        name: "Fruit Tart",
                        description: "Fresh fruit tart",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "of15",
                        name: "Coffee",
                        description: "Hot brewed coffee",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "of16",
                        name: "Tea",
                        description: "Masala tea",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "of17",
                        name: "Hot Chocolate",
                        description: "Rich cocoa",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "of18",
                        name: "Lemonade",
                        description: "Refreshing lemon",
                        price: 70,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "57514": {
        restaurantName: "Veg Darbar by Behrouz Biryani",
        menu: [
            {
                category: "Biryani",
                items: [
                    {
                        id: "vd1",
                        name: "Veg Biryani",
                        description: "Aromatic veg rice",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "vd2",
                        name: "Paneer Biryani",
                        description: "Paneer layered biryani",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "vd3",
                        name: "Mushroom Biryani",
                        description: "Mushroom flavored",
                        price: 320,
                        isVeg: true
                    },
                    {
                        id: "vd4",
                        name: "Veg Dum Biryani",
                        description: "Slow cooked veg",
                        price: 330,
                        isVeg: true
                    },
                    {
                        id: "vd5",
                        name: "Jackfruit Biryani",
                        description: "Unique jackfruit",
                        price: 340,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "vd6",
                        name: "Paneer Tikka",
                        description: "Grilled paneer",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "vd7",
                        name: "Hara Bhara Kebab",
                        description: "Green veg kebab",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "vd8",
                        name: "Veg Seekh Kebab",
                        description: "Minced veg skewers",
                        price: 230,
                        isVeg: true
                    },
                    {
                        id: "vd9",
                        name: "Crispy Corn",
                        description: "Fried corn kernels",
                        price: 200,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Main Course",
                items: [
                    {
                        id: "vd10",
                        name: "Paneer Butter Masala",
                        description: "Creamy paneer curry",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "vd11",
                        name: "Veg Kofta Curry",
                        description: "Veg balls in gravy",
                        price: 260,
                        isVeg: true
                    },
                    {
                        id: "vd12",
                        name: "Dal Makhani",
                        description: "Buttery lentils",
                        price: 240,
                        isVeg: true
                    },
                    {
                        id: "vd13",
                        name: "Mix Veg Curry",
                        description: "Mixed vegetables",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "vd14",
                        name: "Palak Paneer",
                        description: "Spinach paneer",
                        price: 270,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "vd15",
                        name: "Gulab Jamun",
                        description: "Sweet dumplings",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "vd16",
                        name: "Ras Malai",
                        description: "Creamy dessert",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "vd17",
                        name: "Phirni",
                        description: "Rice pudding",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "vd18",
                        name: "Shahi Tukda",
                        description: "Bread dessert",
                        price: 130,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "23707": {
        restaurantName: "McDonald\u2019s",
        menu: [
            {
                category: "Burgers",
                items: [
                    {
                        id: "md1",
                        name: "Big Mac",
                        description: "Classic beef burger",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "md2",
                        name: "McAloo Tikki",
                        description: "Veg potato patty",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "md3",
                        name: "Chicken McGrill",
                        description: "Grilled chicken",
                        price: 150,
                        isVeg: false
                    },
                    {
                        id: "md4",
                        name: "Cheeseburger",
                        description: "Beef with cheese",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "md5",
                        name: "Veg Burger",
                        description: "Veg patty burger",
                        price: 100,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "md6",
                        name: "French Fries",
                        description: "Crispy fries",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "md7",
                        name: "Chicken Nuggets",
                        description: "Bite-sized chicken",
                        price: 180,
                        isVeg: false
                    },
                    {
                        id: "md8",
                        name: "Hash Browns",
                        description: "Potato patties",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "md9",
                        name: "Onion Rings",
                        description: "Fried onions",
                        price: 110,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "md10",
                        name: "McFlurry",
                        description: "Ice cream mix",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "md11",
                        name: "Soft Serve",
                        description: "Vanilla cone",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "md12",
                        name: "Brownie Sundae",
                        description: "Brownie with ice cream",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "md13",
                        name: "Apple Pie",
                        description: "Hot apple pie",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "md14",
                        name: "Chocolate Shake",
                        description: "Thick shake",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "md15",
                        name: "Coke",
                        description: "Chilled cola",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "md16",
                        name: "Coffee",
                        description: "Hot coffee",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "md17",
                        name: "Iced Tea",
                        description: "Lemon iced tea",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "md18",
                        name: "Sprite",
                        description: "Lemon lime soda",
                        price: 60,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "442889": {
        restaurantName: "The Dessert Heaven \u2013 Pastry, Brownie & Cakes",
        menu: [
            {
                category: "Pastries",
                items: [
                    {
                        id: "dh1",
                        name: "Chocolate Pastry",
                        description: "Decadent chocolate",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "dh2",
                        name: "Vanilla Pastry",
                        description: "Creamy vanilla",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "dh3",
                        name: "Red Velvet Pastry",
                        description: "Velvety red",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "dh4",
                        name: "Black Forest Pastry",
                        description: "Cherry chocolate",
                        price: 125,
                        isVeg: true
                    },
                    {
                        id: "dh5",
                        name: "Pineapple Pastry",
                        description: "Tropical flavor",
                        price: 115,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Brownies",
                items: [
                    {
                        id: "dh6",
                        name: "Fudgy Brownie",
                        description: "Rich fudgy",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "dh7",
                        name: "Walnut Brownie",
                        description: "With walnuts",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "dh8",
                        name: "Blondie Brownie",
                        description: "Vanilla brownie",
                        price: 105,
                        isVeg: true
                    },
                    {
                        id: "dh9",
                        name: "Nutella Brownie",
                        description: "Hazelnut spread",
                        price: 120,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cakes",
                items: [
                    {
                        id: "dh10",
                        name: "Chocolate Cake",
                        description: "Layered chocolate",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "dh11",
                        name: "Vanilla Cake",
                        description: "Soft vanilla",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "dh12",
                        name: "Red Velvet Cake",
                        description: "Cream cheese",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "dh13",
                        name: "Fruit Cake",
                        description: "Mixed fruits",
                        price: 380,
                        isVeg: true
                    },
                    {
                        id: "dh14",
                        name: "Cheesecake",
                        description: "Baked cheesecake",
                        price: 420,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "dh15",
                        name: "Hot Chocolate",
                        description: "Warm cocoa",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "dh16",
                        name: "Coffee",
                        description: "Fresh brewed",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "dh17",
                        name: "Tea",
                        description: "Herbal tea",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "dh18",
                        name: "Milkshake",
                        description: "Chocolate shake",
                        price: 180,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "360967": {
        restaurantName: "Wow! Momo",
        menu: [
            {
                category: "Momos",
                items: [
                    {
                        id: "wm1",
                        name: "Veg Momos",
                        description: "Steamed veg dumplings",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "wm2",
                        name: "Chicken Momos",
                        description: "Steamed chicken",
                        price: 180,
                        isVeg: false
                    },
                    {
                        id: "wm3",
                        name: "Fried Momos",
                        description: "Crispy fried veg",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "wm4",
                        name: "Paneer Momos",
                        description: "Paneer filled",
                        price: 170,
                        isVeg: true
                    },
                    {
                        id: "wm5",
                        name: "Mutton Momos",
                        description: "Minced mutton",
                        price: 200,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "wm6",
                        name: "Chilli Momos",
                        description: "Spicy sauce momos",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "wm7",
                        name: "Schezwan Momos",
                        description: "Fiery schezwan",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "wm8",
                        name: "Chicken Thukpa",
                        description: "Noodle soup",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "wm9",
                        name: "Veg Thukpa",
                        description: "Veg noodle soup",
                        price: 170,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "wm10",
                        name: "French Fries",
                        description: "Crispy fries",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "wm11",
                        name: "Chicken Wings",
                        description: "Spicy wings",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "wm12",
                        name: "Spring Rolls",
                        description: "Veg rolls",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "wm13",
                        name: "Chilli Potato",
                        description: "Spicy potatoes",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "wm14",
                        name: "Onion Rings",
                        description: "Fried rings",
                        price: 120,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "wm15",
                        name: "Coke",
                        description: "Chilled cola",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "wm16",
                        name: "Lemonade",
                        description: "Fresh lemon",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "wm17",
                        name: "Iced Tea",
                        description: "Peach tea",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "wm18",
                        name: "Coffee",
                        description: "Hot coffee",
                        price: 80,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "83861": {
        restaurantName: "Euphoria",
        menu: [
            {
                category: "Desserts",
                items: [
                    {
                        id: "eu1",
                        name: "Chocolate Fondant",
                        description: "Molten lava cake",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "eu2",
                        name: "Tiramisu",
                        description: "Italian delight",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "eu3",
                        name: "Panna Cotta",
                        description: "Creamy pudding",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "eu4",
                        name: "Cre\u0300me Bru\u0302le\u0301e",
                        description: "Caramelized custard",
                        price: 230,
                        isVeg: true
                    },
                    {
                        id: "eu5",
                        name: "Macarons",
                        description: "Assorted flavors",
                        price: 180,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "eu6",
                        name: "Eclair",
                        description: "Cream filled pastry",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "eu7",
                        name: "Croissant",
                        description: "Buttery flaky",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "eu8",
                        name: "Danish Pastry",
                        description: "Fruit topped",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "eu9",
                        name: "Mille-Feuille",
                        description: "Layered puff",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cakes",
                items: [
                    {
                        id: "eu10",
                        name: "Opera Cake",
                        description: "Almond sponge",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "eu11",
                        name: "Sacher Torte",
                        description: "Chocolate apricot",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "eu12",
                        name: "Black Forest",
                        description: "Cherry chocolate",
                        price: 420,
                        isVeg: true
                    },
                    {
                        id: "eu13",
                        name: "Lemon Tart",
                        description: "Tangy lemon",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "eu14",
                        name: "Carrot Cake",
                        description: "Spiced carrot",
                        price: 380,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "eu15",
                        name: "Espresso",
                        description: "Strong coffee",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "eu16",
                        name: "Cappuccino",
                        description: "Frothy milk",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "eu17",
                        name: "Herbal Tea",
                        description: "Soothing herbs",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "eu18",
                        name: "Hot Chocolate",
                        description: "Rich cocoa",
                        price: 130,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "395225": {
        restaurantName: "McDonald\u2019s Gourmet Burger Collection",
        menu: [
            {
                category: "Gourmet Burgers",
                items: [
                    {
                        id: "mgb1",
                        name: "Gourmet Beef Burger",
                        description: "Premium beef patty",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "mgb2",
                        name: "Gourmet Chicken Burger",
                        description: "Grilled chicken gourmet",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "mgb3",
                        name: "Veg Gourmet Burger",
                        description: "Premium veg patty",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "mgb4",
                        name: "Cheese Gourmet Burger",
                        description: "Loaded with cheese",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "mgb5",
                        name: "Spicy Gourmet Burger",
                        description: "Spicy sauce burger",
                        price: 290,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Sides",
                items: [
                    {
                        id: "mgb6",
                        name: "Truffle Fries",
                        description: "Truffle flavored fries",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "mgb7",
                        name: "Onion Petals",
                        description: "Crispy onion",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "mgb8",
                        name: "Chicken Strips",
                        description: "Tender strips",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "mgb9",
                        name: "Salad",
                        description: "Fresh green salad",
                        price: 120,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "mgb10",
                        name: "Premium Sundae",
                        description: "Gourmet ice cream",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "mgb11",
                        name: "Chocolate Pie",
                        description: "Gourmet pie",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "mgb12",
                        name: "Brownie",
                        description: "Rich brownie",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "mgb13",
                        name: "Cheesecake",
                        description: "Creamy cheesecake",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "mgb14",
                        name: "Shake",
                        description: "Thick gourmet shake",
                        price: 170,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "mgb15",
                        name: "Craft Soda",
                        description: "Artisanal soda",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "mgb16",
                        name: "Iced Coffee",
                        description: "Chilled coffee",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "mgb17",
                        name: "Lemonade",
                        description: "Fresh squeezed",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "mgb18",
                        name: "Mineral Water",
                        description: "Sparkling water",
                        price: 80,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "581195": {
        restaurantName: "Cheesecakes By CakeZone",
        menu: [
            {
                category: "Cheesecakes",
                items: [
                    {
                        id: "cc1",
                        name: "New York Cheesecake",
                        description: "Classic baked",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "cc2",
                        name: "Strawberry Cheesecake",
                        description: "Berry topped",
                        price: 320,
                        isVeg: true
                    },
                    {
                        id: "cc3",
                        name: "Chocolate Cheesecake",
                        description: "Chocolate swirl",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "cc4",
                        name: "Oreo Cheesecake",
                        description: "Cookie crust",
                        price: 340,
                        isVeg: true
                    },
                    {
                        id: "cc5",
                        name: "Blueberry Cheesecake",
                        description: "Blueberry compote",
                        price: 330,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cakes",
                items: [
                    {
                        id: "cc6",
                        name: "Chocolate Cake",
                        description: "Rich sponge",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "cc7",
                        name: "Vanilla Cake",
                        description: "Soft vanilla",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "cc8",
                        name: "Red Velvet Cake",
                        description: "Velvety red",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "cc9",
                        name: "Lemon Cake",
                        description: "Tangy lemon",
                        price: 380,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "cc10",
                        name: "Chocolate Pastry",
                        description: "Decadent pastry",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "cc11",
                        name: "Butterscotch Pastry",
                        description: "Caramel pastry",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "cc12",
                        name: "Mango Pastry",
                        description: "Tropical mango",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "cc13",
                        name: "Truffle Pastry",
                        description: "Chocolate truffle",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "cc14",
                        name: "Pineapple Pastry",
                        description: "Sweet pineapple",
                        price: 115,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "cc15",
                        name: "Brownie",
                        description: "Fudgy brownie",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "cc16",
                        name: "Cupcake",
                        description: "Assorted cupcakes",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "cc17",
                        name: "Macaron",
                        description: "French macarons",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "cc18",
                        name: "Tart",
                        description: "Fruit tart",
                        price: 180,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "2087": {
        restaurantName: "Agrawala Sweets",
        menu: [
            {
                category: "Sweets",
                items: [
                    {
                        id: "as1",
                        name: "Rasgulla",
                        description: "Spongy cheese balls",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "as2",
                        name: "Gulab Jamun",
                        description: "Fried milk balls",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "as3",
                        name: "Barfi",
                        description: "Milk fudge",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "as4",
                        name: "Laddu",
                        description: "Sweet balls",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "as5",
                        name: "Peda",
                        description: "Milk sweet",
                        price: 280,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "as6",
                        name: "Samosa",
                        description: "Spicy potato filled",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "as7",
                        name: "Kachori",
                        description: "Stuffed pastry",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "as8",
                        name: "Dhokla",
                        description: "Steamed savory cake",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "as9",
                        name: "Pakora",
                        description: "Fritters",
                        price: 35,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Halwas",
                items: [
                    {
                        id: "as10",
                        name: "Gajar Halwa",
                        description: "Carrot pudding",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "as11",
                        name: "Badam Halwa",
                        description: "Almond pudding",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "as12",
                        name: "Moong Dal Halwa",
                        description: "Lentil pudding",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "as13",
                        name: "Suji Halwa",
                        description: "Semolina pudding",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "as14",
                        name: "Atta Halwa",
                        description: "Wheat flour pudding",
                        price: 190,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "as15",
                        name: "Lassi",
                        description: "Yogurt drink",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "as16",
                        name: "Thandai",
                        description: "Spiced milk",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "as17",
                        name: "Rose Milk",
                        description: "Rose flavored milk",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "as18",
                        name: "Badam Milk",
                        description: "Almond milk",
                        price: 110,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "262087": {
        restaurantName: "Imperial Multicuisines Restaurant",
        menu: [
            {
                category: "North Indian",
                items: [
                    {
                        id: "im1",
                        name: "Butter Chicken",
                        description: "Creamy chicken curry",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "im2",
                        name: "Paneer Tikka Masala",
                        description: "Grilled paneer in gravy",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "im3",
                        name: "Dal Makhani",
                        description: "Black lentils creamy",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "im4",
                        name: "Mutton Rogan Josh",
                        description: "Spicy mutton curry",
                        price: 400,
                        isVeg: false
                    },
                    {
                        id: "im5",
                        name: "Naan",
                        description: "Soft bread",
                        price: 50,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Chinese",
                items: [
                    {
                        id: "im6",
                        name: "Chicken Fried Rice",
                        description: "Stir fried rice",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "im7",
                        name: "Veg Hakka Noodles",
                        description: "Veg noodles",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "im8",
                        name: "Chilli Paneer",
                        description: "Spicy paneer",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "im9",
                        name: "Manchurian",
                        description: "Veg balls in sauce",
                        price: 210,
                        isVeg: true
                    }
                ]
            },
            {
                category: "South Indian",
                items: [
                    {
                        id: "im10",
                        name: "Masala Dosa",
                        description: "Crispy dosa",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "im11",
                        name: "Idli Sambar",
                        description: "Steamed idli",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "im12",
                        name: "Vada",
                        description: "Fried lentil donut",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "im13",
                        name: "Uttapam",
                        description: "Thick pancake",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "im14",
                        name: "Pongal",
                        description: "Rice lentil porridge",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "im15",
                        name: "Gulab Jamun",
                        description: "Sweet dumplings",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "im16",
                        name: "Ice Cream",
                        description: "Assorted flavors",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "im17",
                        name: "Ras Malai",
                        description: "Creamy cheese balls",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "im18",
                        name: "Brownie",
                        description: "Chocolate brownie",
                        price: 140,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "16158": {
        restaurantName: "Royal Tiffin Centre",
        menu: [
            {
                category: "Tiffins",
                items: [
                    {
                        id: "rt1",
                        name: "Idli",
                        description: "Soft steamed cakes",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "rt2",
                        name: "Vada",
                        description: "Crispy fried",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "rt3",
                        name: "Masala Dosa",
                        description: "Potato filled dosa",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "rt4",
                        name: "Pongal",
                        description: "Savory porridge",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "rt5",
                        name: "Upma",
                        description: "Semolina dish",
                        price: 65,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Meals",
                items: [
                    {
                        id: "rt6",
                        name: "Veg Meal",
                        description: "Rice with curries",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "rt7",
                        name: "Chicken Meal",
                        description: "Chicken curry meal",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "rt8",
                        name: "Fish Meal",
                        description: "Fish curry meal",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "rt9",
                        name: "Egg Meal",
                        description: "Egg masala meal",
                        price: 180,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "rt10",
                        name: "Samosa",
                        description: "Spicy potato snack",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "rt11",
                        name: "Pakoda",
                        description: "Onion fritters",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "rt12",
                        name: "Bonda",
                        description: "Potato balls",
                        price: 35,
                        isVeg: true
                    },
                    {
                        id: "rt13",
                        name: "Mirchi Bajji",
                        description: "Chilli fritters",
                        price: 45,
                        isVeg: true
                    },
                    {
                        id: "rt14",
                        name: "Cutlet",
                        description: "Veg cutlet",
                        price: 50,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "rt15",
                        name: "Tea",
                        description: "Hot masala tea",
                        price: 20,
                        isVeg: true
                    },
                    {
                        id: "rt16",
                        name: "Coffee",
                        description: "South Indian coffee",
                        price: 25,
                        isVeg: true
                    },
                    {
                        id: "rt17",
                        name: "Buttermilk",
                        description: "Spiced buttermilk",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "rt18",
                        name: "Lassi",
                        description: "Sweet lassi",
                        price: 40,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "798552": {
        restaurantName: "Harely\u2019s Fine Baking",
        menu: [
            {
                category: "Breads",
                items: [
                    {
                        id: "hf1",
                        name: "Croissant",
                        description: "Buttery flaky croissant",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "hf2",
                        name: "Baguette",
                        description: "French bread",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "hf3",
                        name: "Sourdough",
                        description: "Artisanal sourdough",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "hf4",
                        name: "Ciabatta",
                        description: "Italian bread",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "hf5",
                        name: "Focaccia",
                        description: "Herb topped",
                        price: 110,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "hf6",
                        name: "Danish Pastry",
                        description: "Fruit filled",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "hf7",
                        name: "Eclair",
                        description: "Cream filled",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "hf8",
                        name: "Pain au Chocolat",
                        description: "Chocolate croissant",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "hf9",
                        name: "Almond Croissant",
                        description: "Almond paste",
                        price: 120,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cakes",
                items: [
                    {
                        id: "hf10",
                        name: "Chocolate Cake",
                        description: "Rich chocolate",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "hf11",
                        name: "Vanilla Cake",
                        description: "Classic vanilla",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "hf12",
                        name: "Carrot Cake",
                        description: "Spiced carrot",
                        price: 380,
                        isVeg: true
                    },
                    {
                        id: "hf13",
                        name: "Lemon Cake",
                        description: "Tangy lemon",
                        price: 360,
                        isVeg: true
                    },
                    {
                        id: "hf14",
                        name: "Cheesecake",
                        description: "Creamy cheese",
                        price: 420,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cookies",
                items: [
                    {
                        id: "hf15",
                        name: "Chocolate Chip Cookie",
                        description: "Chewy cookie",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "hf16",
                        name: "Oatmeal Cookie",
                        description: "Healthy oats",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "hf17",
                        name: "Sugar Cookie",
                        description: "Sweet sugar",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "hf18",
                        name: "Peanut Butter Cookie",
                        description: "Nutty flavor",
                        price: 55,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "263841": {
        restaurantName: "Veg Meals Lunch Box",
        menu: [
            {
                category: "Lunch Boxes",
                items: [
                    {
                        id: "vl1",
                        name: "Veg Thali",
                        description: "Complete veg meal",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "vl2",
                        name: "Paneer Meal",
                        description: "Paneer curry box",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "vl3",
                        name: "Dal Rice",
                        description: "Simple dal rice",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "vl4",
                        name: "Veg Biryani Box",
                        description: "Biryani with raita",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "vl5",
                        name: "Mix Veg Meal",
                        description: "Mixed veg curry",
                        price: 190,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "vl6",
                        name: "Papad",
                        description: "Crispy papad",
                        price: 20,
                        isVeg: true
                    },
                    {
                        id: "vl7",
                        name: "Salad",
                        description: "Fresh salad",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "vl8",
                        name: "Raita",
                        description: "Yogurt side",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "vl9",
                        name: "Pickle",
                        description: "Mixed pickle",
                        price: 30,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Breads",
                items: [
                    {
                        id: "vl10",
                        name: "Chapati",
                        description: "Wheat flatbread",
                        price: 20,
                        isVeg: true
                    },
                    {
                        id: "vl11",
                        name: "Paratha",
                        description: "Layered bread",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "vl12",
                        name: "Puri",
                        description: "Fried bread",
                        price: 25,
                        isVeg: true
                    },
                    {
                        id: "vl13",
                        name: "Naan",
                        description: "Soft naan",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "vl14",
                        name: "Roti",
                        description: "Thin roti",
                        price: 15,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "vl15",
                        name: "Gulab Jamun",
                        description: "Sweet balls",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "vl16",
                        name: "Kheer",
                        description: "Rice pudding",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "vl17",
                        name: "Fruit Custard",
                        description: "Mixed fruit custard",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "vl18",
                        name: "Halwa",
                        description: "Semolina halwa",
                        price: 50,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "575804": {
        restaurantName: "Varalakshmi Tiffins",
        menu: [
            {
                category: "Tiffins",
                items: [
                    {
                        id: "vt1",
                        name: "Idli Sambar",
                        description: "Steamed idli with sambar",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "vt2",
                        name: "Vada",
                        description: "Crispy vada",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "vt3",
                        name: "Masala Dosa",
                        description: "Spicy potato dosa",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "vt4",
                        name: "Pesarattu",
                        description: "Green gram dosa",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "vt5",
                        name: "Upma",
                        description: "Savory semolina",
                        price: 65,
                        isVeg: true
                    }
                ]
            },
            {
                category: "South Indian Specials",
                items: [
                    {
                        id: "vt6",
                        name: "Onion Dosa",
                        description: "Dosa with onions",
                        price: 85,
                        isVeg: true
                    },
                    {
                        id: "vt7",
                        name: "Rava Dosa",
                        description: "Crispy rava",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "vt8",
                        name: "Uttapam",
                        description: "Thick veg pancake",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "vt9",
                        name: "Pongal",
                        description: "Rice lentil dish",
                        price: 70,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "vt10",
                        name: "Mirchi Bajji",
                        description: "Stuffed chilli fritter",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "vt11",
                        name: "Punugulu",
                        description: "Fried batter balls",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "vt12",
                        name: "Bonda",
                        description: "Potato bonda",
                        price: 55,
                        isVeg: true
                    },
                    {
                        id: "vt13",
                        name: "Pakoda",
                        description: "Onion pakoda",
                        price: 45,
                        isVeg: true
                    },
                    {
                        id: "vt14",
                        name: "Samosa",
                        description: "Potato samosa",
                        price: 40,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "vt15",
                        name: "Filter Coffee",
                        description: "Strong coffee",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "vt16",
                        name: "Tea",
                        description: "Masala tea",
                        price: 25,
                        isVeg: true
                    },
                    {
                        id: "vt17",
                        name: "Buttermilk",
                        description: "Spiced buttermilk",
                        price: 20,
                        isVeg: true
                    },
                    {
                        id: "vt18",
                        name: "Lassi",
                        description: "Sweet lassi",
                        price: 40,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "92839": {
        restaurantName: "Kamat Hotel",
        menu: [
            {
                category: "South Indian",
                items: [
                    {
                        id: "kh1",
                        name: "Masala Dosa",
                        description: "Crispy dosa with filling",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "kh2",
                        name: "Idli Vada",
                        description: "Combo of idli and vada",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "kh3",
                        name: "Bisibele Bath",
                        description: "Rice lentil hot bath",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "kh4",
                        name: "Akki Rotti",
                        description: "Rice flatbread",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "kh5",
                        name: "Ragi Mudde",
                        description: "Millet balls",
                        price: 110,
                        isVeg: true
                    }
                ]
            },
            {
                category: "North Indian",
                items: [
                    {
                        id: "kh6",
                        name: "Paneer Butter Masala",
                        description: "Creamy paneer",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "kh7",
                        name: "Chole Bhature",
                        description: "Chickpea curry with bread",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "kh8",
                        name: "Aloo Paratha",
                        description: "Potato stuffed paratha",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "kh9",
                        name: "Dal Tadka",
                        description: "Tempered lentils",
                        price: 180,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "kh10",
                        name: "Samosa",
                        description: "Spicy samosa",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "kh11",
                        name: "Pakora",
                        description: "Veg fritters",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "kh12",
                        name: "Dhokla",
                        description: "Steamed cake",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "kh13",
                        name: "Khandvi",
                        description: "Gram flour rolls",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "kh14",
                        name: "Bhel Puri",
                        description: "Puffed rice snack",
                        price: 50,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "kh15",
                        name: "Mysore Pak",
                        description: "Ghee sweet",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "kh16",
                        name: "Payasa",
                        description: "Kheer dessert",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "kh17",
                        name: "Holige",
                        description: "Sweet flatbread",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "kh18",
                        name: "Jalebi",
                        description: "Syrupy swirls",
                        price: 70,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "214964": {
        restaurantName: "Lingaiah Hotel",
        menu: [
            {
                category: "Andhra Meals",
                items: [
                    {
                        id: "lh1",
                        name: "Veg Meal",
                        description: "Andhra style veg thali",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lh2",
                        name: "Chicken Meal",
                        description: "Spicy chicken meal",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "lh3",
                        name: "Mutton Meal",
                        description: "Tender mutton meal",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "lh4",
                        name: "Fish Meal",
                        description: "Fish curry meal",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "lh5",
                        name: "Prawn Meal",
                        description: "Seafood meal",
                        price: 280,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Biryani",
                items: [
                    {
                        id: "lh6",
                        name: "Chicken Biryani",
                        description: "Aromatic chicken rice",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "lh7",
                        name: "Mutton Biryani",
                        description: "Rich mutton biryani",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "lh8",
                        name: "Veg Biryani",
                        description: "Vegetable biryani",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "lh9",
                        name: "Egg Biryani",
                        description: "Egg layered biryani",
                        price: 220,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "lh10",
                        name: "Chicken 65",
                        description: "Spicy fried chicken",
                        price: 180,
                        isVeg: false
                    },
                    {
                        id: "lh11",
                        name: "Fish Fry",
                        description: "Crispy fish",
                        price: 200,
                        isVeg: false
                    },
                    {
                        id: "lh12",
                        name: "Prawn Fry",
                        description: "Spicy prawns",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "lh13",
                        name: "Paneer Tikka",
                        description: "Grilled paneer",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "lh14",
                        name: "Gobi Manchurian",
                        description: "Crispy cauliflower",
                        price: 160,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "lh15",
                        name: "Double Ka Meetha",
                        description: "Bread pudding",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "lh16",
                        name: "Qubani Ka Meetha",
                        description: "Apricot dessert",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lh17",
                        name: "Gulab Jamun",
                        description: "Sweet dumplings",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "lh18",
                        name: "Payasam",
                        description: "Rice kheer",
                        price: 90,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "662646": {
        restaurantName: "Starbucks Coffee",
        menu: [
            {
                category: "Coffee",
                items: [
                    {
                        id: "sc1",
                        name: "Cappuccino",
                        description: "Espresso with milk foam",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "sc2",
                        name: "Latte",
                        description: "Espresso with steamed milk",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "sc3",
                        name: "Americano",
                        description: "Espresso with hot water",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "sc4",
                        name: "Mocha",
                        description: "Chocolate coffee",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "sc5",
                        name: "Espresso",
                        description: "Strong black coffee",
                        price: 150,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Frappuccinos",
                items: [
                    {
                        id: "sc6",
                        name: "Caramel Frappuccino",
                        description: "Blended caramel",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "sc7",
                        name: "Mocha Frappuccino",
                        description: "Chocolate blended",
                        price: 320,
                        isVeg: true
                    },
                    {
                        id: "sc8",
                        name: "Vanilla Frappuccino",
                        description: "Creamy vanilla",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "sc9",
                        name: "Java Chip Frappuccino",
                        description: "Chocolate chips",
                        price: 340,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "sc10",
                        name: "Croissant",
                        description: "Buttery croissant",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "sc11",
                        name: "Muffin",
                        description: "Blueberry muffin",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "sc12",
                        name: "Danish",
                        description: "Fruit danish",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "sc13",
                        name: "Brownie",
                        description: "Chocolate brownie",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "sc14",
                        name: "Cookie",
                        description: "Chocolate chip cookie",
                        price: 120,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Teas",
                items: [
                    {
                        id: "sc15",
                        name: "Green Tea",
                        description: "Healthy green tea",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "sc16",
                        name: "Chai Tea Latte",
                        description: "Spiced chai",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "sc17",
                        name: "Iced Tea",
                        description: "Chilled tea",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "sc18",
                        name: "Matcha Latte",
                        description: "Green matcha",
                        price: 250,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "798573": {
        restaurantName: "Krispy Kreme \u2013 Doughnuts & Coffee",
        menu: [
            {
                category: "Doughnuts",
                items: [
                    {
                        id: "kk1",
                        name: "Original Glazed",
                        description: "Classic glazed doughnut",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "kk2",
                        name: "Chocolate Iced",
                        description: "Chocolate topped",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "kk3",
                        name: "Strawberry Filled",
                        description: "Strawberry jam filled",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "kk4",
                        name: "Oreo Doughnut",
                        description: "Oreo crumb topped",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "kk5",
                        name: "Cinnamon Sugar",
                        description: "Cinnamon coated",
                        price: 85,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Coffee",
                items: [
                    {
                        id: "kk6",
                        name: "Americano",
                        description: "Black coffee",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "kk7",
                        name: "Cappuccino",
                        description: "Foamy cappuccino",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "kk8",
                        name: "Latte",
                        description: "Milky latte",
                        price: 170,
                        isVeg: true
                    },
                    {
                        id: "kk9",
                        name: "Mocha",
                        description: "Chocolate mocha",
                        price: 200,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Shakes",
                items: [
                    {
                        id: "kk10",
                        name: "Chocolate Shake",
                        description: "Thick chocolate",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "kk11",
                        name: "Vanilla Shake",
                        description: "Creamy vanilla",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "kk12",
                        name: "Strawberry Shake",
                        description: "Berry shake",
                        price: 190,
                        isVeg: true
                    },
                    {
                        id: "kk13",
                        name: "Oreo Shake",
                        description: "Cookie shake",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "kk14",
                        name: "Caramel Shake",
                        description: "Caramel flavor",
                        price: 210,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "kk15",
                        name: "Hot Chocolate",
                        description: "Warm cocoa",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "kk16",
                        name: "Iced Coffee",
                        description: "Chilled coffee",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "kk17",
                        name: "Lemonade",
                        description: "Fresh lemon",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "kk18",
                        name: "Tea",
                        description: "Hot tea",
                        price: 100,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "114723": {
        restaurantName: "Suprabath Tiffins",
        menu: [
            {
                category: "Tiffins",
                items: [
                    {
                        id: "st1",
                        name: "Idli",
                        description: "Soft idlis",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "st2",
                        name: "Vada",
                        description: "Crispy vadas",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "st3",
                        name: "Dosa",
                        description: "Plain dosa",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "st4",
                        name: "Masala Dosa",
                        description: "Filled dosa",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "st5",
                        name: "Upma",
                        description: "Savory upma",
                        price: 55,
                        isVeg: true
                    }
                ]
            },
            {
                category: "South Indian",
                items: [
                    {
                        id: "st6",
                        name: "Pongal",
                        description: "Rice lentil",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "st7",
                        name: "Pesarattu",
                        description: "Moong dal dosa",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "st8",
                        name: "Uttapam",
                        description: "Veg uttapam",
                        price: 90,
                        isVeg: true
                    },
                    {
                        id: "st9",
                        name: "Rava Dosa",
                        description: "Crispy rava",
                        price: 85,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "st10",
                        name: "Bonda",
                        description: "Potato bonda",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "st11",
                        name: "Pakoda",
                        description: "Onion pakoda",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "st12",
                        name: "Mirchi Bajji",
                        description: "Chilli bajji",
                        price: 45,
                        isVeg: true
                    },
                    {
                        id: "st13",
                        name: "Punugulu",
                        description: "Fried balls",
                        price: 55,
                        isVeg: true
                    },
                    {
                        id: "st14",
                        name: "Samosa",
                        description: "Spicy samosa",
                        price: 30,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "st15",
                        name: "Coffee",
                        description: "Filter coffee",
                        price: 20,
                        isVeg: true
                    },
                    {
                        id: "st16",
                        name: "Tea",
                        description: "Masala tea",
                        price: 15,
                        isVeg: true
                    },
                    {
                        id: "st17",
                        name: "Buttermilk",
                        description: "Chilled buttermilk",
                        price: 25,
                        isVeg: true
                    },
                    {
                        id: "st18",
                        name: "Lassi",
                        description: "Sweet lassi",
                        price: 30,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "1136764": {
        restaurantName: "Third Wave Coffee",
        menu: [
            {
                category: "Coffee",
                items: [
                    {
                        id: "tw1",
                        name: "Espresso",
                        description: "Strong shot",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "tw2",
                        name: "Cappuccino",
                        description: "Foamy coffee",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "tw3",
                        name: "Latte",
                        description: "Milky espresso",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "tw4",
                        name: "Americano",
                        description: "Black coffee",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "tw5",
                        name: "Mocha",
                        description: "Chocolate coffee",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Cold Beverages",
                items: [
                    {
                        id: "tw6",
                        name: "Iced Latte",
                        description: "Chilled latte",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "tw7",
                        name: "Cold Brew",
                        description: "Smooth cold brew",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "tw8",
                        name: "Frapp\xe9",
                        description: "Blended ice coffee",
                        price: 240,
                        isVeg: true
                    },
                    {
                        id: "tw9",
                        name: "Iced Mocha",
                        description: "Chilled mocha",
                        price: 230,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Pastries",
                items: [
                    {
                        id: "tw10",
                        name: "Croissant",
                        description: "Flaky croissant",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "tw11",
                        name: "Muffin",
                        description: "Chocolate muffin",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "tw12",
                        name: "Brownie",
                        description: "Fudgy brownie",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "tw13",
                        name: "Cookie",
                        description: "Soft cookie",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "tw14",
                        name: "Danish",
                        description: "Sweet danish",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Teas",
                items: [
                    {
                        id: "tw15",
                        name: "Green Tea",
                        description: "Antioxidant rich",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "tw16",
                        name: "Chai Latte",
                        description: "Spiced chai",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "tw17",
                        name: "Herbal Tea",
                        description: "Calming herbs",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "tw18",
                        name: "Iced Tea",
                        description: "Refreshing iced",
                        price: 170,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "51887": {
        restaurantName: "NRS Nandini",
        menu: [
            {
                category: "South Indian",
                items: [
                    {
                        id: "nn1",
                        name: "Masala Dosa",
                        description: "Crispy filled dosa",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "nn2",
                        name: "Idli",
                        description: "Steamed cakes",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "nn3",
                        name: "Vada",
                        description: "Fried lentil",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "nn4",
                        name: "Upma",
                        description: "Semolina savory",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "nn5",
                        name: "Pongal",
                        description: "Rice lentil",
                        price: 90,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Biryani",
                items: [
                    {
                        id: "nn6",
                        name: "Veg Biryani",
                        description: "Vegetable rice",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "nn7",
                        name: "Chicken Biryani",
                        description: "Chicken layered rice",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "nn8",
                        name: "Mutton Biryani",
                        description: "Mutton biryani",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "nn9",
                        name: "Egg Biryani",
                        description: "Egg rice",
                        price: 220,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Curries",
                items: [
                    {
                        id: "nn10",
                        name: "Paneer Curry",
                        description: "Creamy paneer",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "nn11",
                        name: "Chicken Curry",
                        description: "Spicy chicken",
                        price: 220,
                        isVeg: false
                    },
                    {
                        id: "nn12",
                        name: "Fish Curry",
                        description: "Tangy fish",
                        price: 250,
                        isVeg: false
                    },
                    {
                        id: "nn13",
                        name: "Veg Curry",
                        description: "Mixed veg",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "nn14",
                        name: "Dal Fry",
                        description: "Lentil fry",
                        price: 150,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "nn15",
                        name: "Payasam",
                        description: "Sweet kheer",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "nn16",
                        name: "Gulab Jamun",
                        description: "Syrupy balls",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "nn17",
                        name: "Ras Malai",
                        description: "Creamy balls",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "nn18",
                        name: "Jalebi",
                        description: "Crispy jalebi",
                        price: 60,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "566424": {
        restaurantName: "Faasos\u2019s Signature Wraps & Rolls",
        menu: [
            {
                category: "Wraps",
                items: [
                    {
                        id: "fs1",
                        name: "Veg Wrap",
                        description: "Veg filled wrap",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "fs2",
                        name: "Chicken Wrap",
                        description: "Grilled chicken wrap",
                        price: 180,
                        isVeg: false
                    },
                    {
                        id: "fs3",
                        name: "Paneer Wrap",
                        description: "Paneer tikka wrap",
                        price: 160,
                        isVeg: true
                    },
                    {
                        id: "fs4",
                        name: "Egg Wrap",
                        description: "Egg masala wrap",
                        price: 140,
                        isVeg: false
                    },
                    {
                        id: "fs5",
                        name: "Mutton Wrap",
                        description: "Spicy mutton wrap",
                        price: 200,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Rolls",
                items: [
                    {
                        id: "fs6",
                        name: "Veg Roll",
                        description: "Veg stuffed roll",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "fs7",
                        name: "Chicken Roll",
                        description: "Chicken kebab roll",
                        price: 150,
                        isVeg: false
                    },
                    {
                        id: "fs8",
                        name: "Paneer Roll",
                        description: "Paneer roll",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "fs9",
                        name: "Egg Roll",
                        description: "Egg paratha roll",
                        price: 110,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Starters",
                items: [
                    {
                        id: "fs10",
                        name: "French Fries",
                        description: "Crispy fries",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "fs11",
                        name: "Chicken Nuggets",
                        description: "Fried nuggets",
                        price: 150,
                        isVeg: false
                    },
                    {
                        id: "fs12",
                        name: "Cheese Balls",
                        description: "Cheesy balls",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "fs13",
                        name: "Onion Rings",
                        description: "Fried rings",
                        price: 110,
                        isVeg: true
                    },
                    {
                        id: "fs14",
                        name: "Veg Spring Rolls",
                        description: "Crispy rolls",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "fs15",
                        name: "Coke",
                        description: "Chilled cola",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "fs16",
                        name: "Sprite",
                        description: "Lemon soda",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "fs17",
                        name: "Thums Up",
                        description: "Strong cola",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "fs18",
                        name: "Water Bottle",
                        description: "Mineral water",
                        price: 20,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "801390": {
        restaurantName: "Makhani Darbar",
        menu: [
            {
                category: "North Indian Curries",
                items: [
                    {
                        id: "md1",
                        name: "Butter Chicken",
                        description: "Creamy butter chicken",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "md2",
                        name: "Paneer Makhani",
                        description: "Paneer in tomato gravy",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "md3",
                        name: "Dal Makhani",
                        description: "Creamy black lentils",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "md4",
                        name: "Chicken Makhani",
                        description: "Makhani chicken",
                        price: 340,
                        isVeg: false
                    },
                    {
                        id: "md5",
                        name: "Mutton Makhani",
                        description: "Mutton in butter sauce",
                        price: 400,
                        isVeg: false
                    }
                ]
            },
            {
                category: "Breads",
                items: [
                    {
                        id: "md6",
                        name: "Butter Naan",
                        description: "Buttery naan",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "md7",
                        name: "Garlic Naan",
                        description: "Garlic flavored",
                        price: 60,
                        isVeg: true
                    },
                    {
                        id: "md8",
                        name: "Kulcha",
                        description: "Stuffed kulcha",
                        price: 70,
                        isVeg: true
                    },
                    {
                        id: "md9",
                        name: "Paratha",
                        description: "Layered paratha",
                        price: 40,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Rice",
                items: [
                    {
                        id: "md10",
                        name: "Jeera Rice",
                        description: "Cumin rice",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "md11",
                        name: "Veg Pulao",
                        description: "Vegetable pulao",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "md12",
                        name: "Chicken Biryani",
                        description: "Chicken rice",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "md13",
                        name: "Mutton Biryani",
                        description: "Mutton rice",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "md14",
                        name: "Veg Biryani",
                        description: "Veg layered rice",
                        price: 250,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "md15",
                        name: "Gulab Jamun",
                        description: "Sweet balls",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "md16",
                        name: "Ras Malai",
                        description: "Creamy dessert",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "md17",
                        name: "Kheer",
                        description: "Rice pudding",
                        price: 80,
                        isVeg: true
                    },
                    {
                        id: "md18",
                        name: "Ice Cream",
                        description: "Vanilla ice cream",
                        price: 90,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "2535": {
        restaurantName: "Agra Sweets Banjara",
        menu: [
            {
                category: "Sweets",
                items: [
                    {
                        id: "ab1",
                        name: "Kaju Katli",
                        description: "Cashew fudge",
                        price: 500,
                        isVeg: true
                    },
                    {
                        id: "ab2",
                        name: "Badam Burfi",
                        description: "Almond sweet",
                        price: 450,
                        isVeg: true
                    },
                    {
                        id: "ab3",
                        name: "Peda",
                        description: "Milk peda",
                        price: 300,
                        isVeg: true
                    },
                    {
                        id: "ab4",
                        name: "Rasgulla",
                        description: "Syrupy balls",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "ab5",
                        name: "Gulab Jamun",
                        description: "Fried dumplings",
                        price: 180,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Snacks",
                items: [
                    {
                        id: "ab6",
                        name: "Mixture",
                        description: "Spicy mix",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "ab7",
                        name: "Chakli",
                        description: "Crunchy spirals",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "ab8",
                        name: "Kara Boondi",
                        description: "Gram flour balls",
                        price: 130,
                        isVeg: true
                    },
                    {
                        id: "ab9",
                        name: "Murukku",
                        description: "Twisted snack",
                        price: 140,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Dry Fruits Sweets",
                items: [
                    {
                        id: "ab10",
                        name: "Dry Fruit Laddu",
                        description: "Mixed dry fruits",
                        price: 400,
                        isVeg: true
                    },
                    {
                        id: "ab11",
                        name: "Anjeer Barfi",
                        description: "Fig fudge",
                        price: 350,
                        isVeg: true
                    },
                    {
                        id: "ab12",
                        name: "Pista Roll",
                        description: "Pistachio roll",
                        price: 380,
                        isVeg: true
                    },
                    {
                        id: "ab13",
                        name: "Date Sweet",
                        description: "Date based",
                        price: 320,
                        isVeg: true
                    },
                    {
                        id: "ab14",
                        name: "Walnut Halwa",
                        description: "Walnut pudding",
                        price: 360,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Savories",
                items: [
                    {
                        id: "ab15",
                        name: "Samosa",
                        description: "Potato filled",
                        price: 30,
                        isVeg: true
                    },
                    {
                        id: "ab16",
                        name: "Kachori",
                        description: "Spicy kachori",
                        price: 40,
                        isVeg: true
                    },
                    {
                        id: "ab17",
                        name: "Dhokla",
                        description: "Steamed dhokla",
                        price: 50,
                        isVeg: true
                    },
                    {
                        id: "ab18",
                        name: "Pakora",
                        description: "Veg pakora",
                        price: 35,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "224130": {
        restaurantName: "Lo! \u2013 Low Carb and Keto Foods",
        menu: [
            {
                category: "Keto Meals",
                items: [
                    {
                        id: "lo1",
                        name: "Keto Chicken Curry",
                        description: "Low carb chicken",
                        price: 300,
                        isVeg: false
                    },
                    {
                        id: "lo2",
                        name: "Paneer Bhurji",
                        description: "Scrambled paneer",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "lo3",
                        name: "Cauliflower Rice",
                        description: "Keto rice substitute",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "lo4",
                        name: "Grilled Fish",
                        description: "Herb grilled fish",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "lo5",
                        name: "Veg Stir Fry",
                        description: "Low carb veggies",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Keto Snacks",
                items: [
                    {
                        id: "lo6",
                        name: "Cheese Cubes",
                        description: "Assorted cheese",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lo7",
                        name: "Almond Cookies",
                        description: "Keto cookies",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "lo8",
                        name: "Keto Chips",
                        description: "Low carb chips",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lo9",
                        name: "Nuts Mix",
                        description: "Mixed nuts",
                        price: 200,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Keto Desserts",
                items: [
                    {
                        id: "lo10",
                        name: "Keto Brownie",
                        description: "Sugar free brownie",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lo11",
                        name: "Coconut Ladoo",
                        description: "Keto ladoo",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lo12",
                        name: "Almond Flour Cake",
                        description: "Low carb cake",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "lo13",
                        name: "Keto Ice Cream",
                        description: "Sugar free ice cream",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "lo14",
                        name: "Chia Pudding",
                        description: "Chia seed pudding",
                        price: 160,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Beverages",
                items: [
                    {
                        id: "lo15",
                        name: "Bullet Coffee",
                        description: "Butter coffee",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lo16",
                        name: "Green Tea",
                        description: "Unsweetened tea",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "lo17",
                        name: "Keto Smoothie",
                        description: "Low carb smoothie",
                        price: 180,
                        isVeg: true
                    },
                    {
                        id: "lo18",
                        name: "Almond Milk",
                        description: "Unsweetened almond milk",
                        price: 120,
                        isVeg: true
                    }
                ]
            }
        ]
    },
    "367769": {
        restaurantName: "Lucky Restaurant",
        menu: [
            {
                category: "North Indian",
                items: [
                    {
                        id: "lr1",
                        name: "Butter Chicken",
                        description: "Creamy chicken curry",
                        price: 320,
                        isVeg: false
                    },
                    {
                        id: "lr2",
                        name: "Paneer Butter Masala",
                        description: "Creamy paneer dish",
                        price: 280,
                        isVeg: true
                    },
                    {
                        id: "lr3",
                        name: "Dal Makhani",
                        description: "Buttery lentils",
                        price: 250,
                        isVeg: true
                    },
                    {
                        id: "lr4",
                        name: "Chicken Tikka Masala",
                        description: "Grilled chicken in gravy",
                        price: 350,
                        isVeg: false
                    },
                    {
                        id: "lr5",
                        name: "Aloo Gobi",
                        description: "Potato cauliflower curry",
                        price: 220,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Chinese",
                items: [
                    {
                        id: "lr6",
                        name: "Fried Rice",
                        description: "Veg fried rice",
                        price: 200,
                        isVeg: true
                    },
                    {
                        id: "lr7",
                        name: "Chilli Chicken",
                        description: "Spicy chicken",
                        price: 280,
                        isVeg: false
                    },
                    {
                        id: "lr8",
                        name: "Noodles",
                        description: "Veg hakka noodles",
                        price: 220,
                        isVeg: true
                    },
                    {
                        id: "lr9",
                        name: "Manchurian",
                        description: "Veg manchurian",
                        price: 240,
                        isVeg: true
                    }
                ]
            },
            {
                category: "South Indian",
                items: [
                    {
                        id: "lr10",
                        name: "Masala Dosa",
                        description: "Crispy dosa",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lr11",
                        name: "Idli Sambar",
                        description: "Steamed idlis",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lr12",
                        name: "Vada",
                        description: "Fried vada",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "lr13",
                        name: "Uttapam",
                        description: "Thick pancake",
                        price: 140,
                        isVeg: true
                    },
                    {
                        id: "lr14",
                        name: "Pongal",
                        description: "Rice lentil dish",
                        price: 130,
                        isVeg: true
                    }
                ]
            },
            {
                category: "Desserts",
                items: [
                    {
                        id: "lr15",
                        name: "Gulab Jamun",
                        description: "Sweet dumplings",
                        price: 100,
                        isVeg: true
                    },
                    {
                        id: "lr16",
                        name: "Ice Cream",
                        description: "Assorted flavors",
                        price: 120,
                        isVeg: true
                    },
                    {
                        id: "lr17",
                        name: "Brownie",
                        description: "Chocolate brownie",
                        price: 150,
                        isVeg: true
                    },
                    {
                        id: "lr18",
                        name: "Ras Malai",
                        description: "Creamy sweet",
                        price: 140,
                        isVeg: true
                    }
                ]
            }
        ]
    }
};
exports.default = mockMenu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["fwbSe"], null, "parcelRequire77dd", {})

//# sourceMappingURL=mockMenu.ba0c11c1.js.map
