"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __knownSymbol = (name, symbol) =>
  (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, {
        enumerable: true,
        configurable: true,
        writable: true,
        value,
      })
    : (obj[key] = value);
var __name = (target, value) =>
  __defProp(target, "name", { value, configurable: true });
var __decoratorStart = (base) => [
  ,
  ,
  ,
  __create(base?.[__knownSymbol("metadata")] ?? null),
];
var __decoratorStrings = [
  "class",
  "method",
  "getter",
  "setter",
  "accessor",
  "field",
  "value",
  "get",
  "set",
];
var __expectFn = (fn) =>
  fn !== void 0 && typeof fn !== "function"
    ? __typeError("Function expected")
    : fn;
var __decoratorContext = (kind, name, done, metadata, fns) => ({
  kind: __decoratorStrings[kind],
  name,
  metadata,
  addInitializer: (fn) =>
    done._
      ? __typeError("Already initialized")
      : fns.push(__expectFn(fn || null)),
});
var __decoratorMetadata = (array, target) =>
  __defNormalProp(target, __knownSymbol("metadata"), array[3]);
var __runInitializers = (array, flags, self2, value) => {
  for (var i = 0, fns = array[flags >> 1], n = fns && fns.length; i < n; i++)
    flags & 1 ? fns[i].call(self2) : (value = fns[i].call(self2, value));
  return value;
};
var __decorateElement = (array, flags, name, decorators, target, extra) => {
  var fn,
    it,
    done,
    ctx,
    access,
    k = flags & 7,
    s = !!(flags & 8),
    p = !!(flags & 16);
  var j = k > 3 ? array.length + 1 : k ? (s ? 1 : 2) : 0,
    key = __decoratorStrings[k + 5];
  var initializers = k > 3 && (array[j - 1] = []),
    extraInitializers = array[j] || (array[j] = []);
  var desc =
    k &&
    (!p && !s && (target = target.prototype),
    k < 5 &&
      (k > 3 || !p) &&
      __getOwnPropDesc(
        k < 4
          ? target
          : {
              get [name]() {
                return __privateGet(this, extra);
              },
              set [name](x) {
                return __privateSet(this, extra, x);
              },
            },
        name
      ));
  k
    ? p && k < 4 && __name(extra, (k > 2 ? "set " : k > 1 ? "get " : "") + name)
    : __name(target, name);
  for (var i = decorators.length - 1; i >= 0; i--) {
    ctx = __decoratorContext(k, name, (done = {}), array[3], extraInitializers);
    if (k) {
      ((ctx.static = s),
        (ctx.private = p),
        (access = ctx.access =
          { has: p ? (x) => __privateIn(target, x) : (x) => name in x }));
      if (k ^ 3)
        access.get = p
          ? (x) =>
              (k ^ 1 ? __privateGet : __privateMethod)(
                x,
                target,
                k ^ 4 ? extra : desc.get
              )
          : (x) => x[name];
      if (k > 2)
        access.set = p
          ? (x, y) => __privateSet(x, target, y, k ^ 4 ? extra : desc.set)
          : (x, y) => (x[name] = y);
    }
    ((it = (0, decorators[i])(
      k
        ? k < 4
          ? p
            ? extra
            : desc[key]
          : k > 4
            ? void 0
            : { get: desc.get, set: desc.set }
        : target,
      ctx
    )),
      (done._ = 1));
    if (k ^ 4 || it === void 0)
      __expectFn(it) &&
        (k > 4
          ? initializers.unshift(it)
          : k
            ? p
              ? (extra = it)
              : (desc[key] = it)
            : (target = it));
    else if (typeof it !== "object" || it === null)
      __typeError("Object expected");
    else
      (__expectFn((fn = it.get)) && (desc.get = fn),
        __expectFn((fn = it.set)) && (desc.set = fn),
        __expectFn((fn = it.init)) && initializers.unshift(fn));
  }
  return (
    k || __decoratorMetadata(array, target),
    desc && __defProp(target, name, desc),
    p ? (k ^ 4 ? extra : desc) : target
  );
};
var __accessCheck = (obj, member, msg) =>
  member.has(obj) || __typeError("Cannot " + msg);
var __privateIn = (member, obj) =>
  Object(obj) !== obj
    ? __typeError('Cannot use the "in" operator on this value')
    : member.has(obj);
var __privateGet = (obj, member, getter) => (
  __accessCheck(obj, member, "read from private field"),
  getter ? getter.call(obj) : member.get(obj)
);
var __privateSet = (obj, member, value, setter) => (
  __accessCheck(obj, member, "write to private field"),
  setter ? setter.call(obj, value) : member.set(obj, value),
  value
);
var __privateMethod = (obj, member, method) => (
  __accessCheck(obj, member, "access private method"),
  method
);
var _Log_decorators,
  _init,
  _FileSystem_decorators,
  _init2,
  _OBS_decorators,
  _init3,
  _Configs_decorators,
  _init4,
  _Twitch_decorators,
  _init5,
  _AutoDrop_decorators,
  _init6,
  _SubsDrop_decorators,
  _init7,
  _GameAwardsApplication_decorators,
  _init8;
const require$$3$1 = require("electron");
const path = require("node:path");
const require$$0$1 = require("path");
const require$$1$3 = require("child_process");
const require$$0 = require("tty");
const require$$1$2 = require("util");
const require$$3 = require("fs");
const require$$4 = require("net");
const require$$0$3 = require("events");
const require$$1$5 = require("https");
const http = require("http");
const require$$4$1 = require("tls");
const require$$1$4 = require("crypto");
const Stream = require("stream");
const Url = require("url");
const zlib = require("zlib");
const require$$0$2 = require("buffer");
const require$$0$4 = require("punycode");
const fs = require("node:fs");
const require$$0$5 = require("os");
var commonjsGlobal =
  typeof globalThis !== "undefined"
    ? globalThis
    : typeof window !== "undefined"
      ? window
      : typeof global !== "undefined"
        ? global
        : typeof self !== "undefined"
          ? self
          : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default")
    ? x["default"]
    : x;
}
function getAugmentedNamespace(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      var isInstance = false;
      try {
        isInstance = this instanceof a2;
      } catch {}
      if (isInstance) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function (k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(
      a,
      k,
      d.get
        ? d
        : {
            enumerable: true,
            get: function () {
              return n[k];
            },
          }
    );
  });
  return a;
}
var _Reflect = {};
var hasRequired_Reflect;
function require_Reflect() {
  if (hasRequired_Reflect) return _Reflect;
  hasRequired_Reflect = 1;
  var Reflect2;
  (function (Reflect3) {
    (function (factory) {
      var root =
        typeof globalThis === "object"
          ? globalThis
          : typeof commonjsGlobal === "object"
            ? commonjsGlobal
            : typeof self === "object"
              ? self
              : typeof this === "object"
                ? this
                : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function (key, value) {
          Object.defineProperty(target, key, {
            configurable: true,
            writable: true,
            value,
          });
          if (previous) previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_) {}
      }
      function indirectEvalThis() {
        try {
          return (void 0, eval)("(function() { return this; })()");
        } catch (_) {}
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function (exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol =
        supportsSymbol && typeof Symbol.toPrimitive !== "undefined"
          ? Symbol.toPrimitive
          : "@@toPrimitive";
      var iteratorSymbol =
        supportsSymbol && typeof Symbol.iterator !== "undefined"
          ? Symbol.iterator
          : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate
          ? function () {
              return MakeDictionary(/* @__PURE__ */ Object.create(null));
            }
          : supportsProto
            ? function () {
                return MakeDictionary({ __proto__: null });
              }
            : function () {
                return MakeDictionary({});
              },
        has: downLevel
          ? function (map, key) {
              return hasOwn.call(map, key);
            }
          : function (map, key) {
              return key in map;
            },
        get: downLevel
          ? function (map, key) {
              return hasOwn.call(map, key) ? map[key] : void 0;
            }
          : function (map, key) {
              return map[key];
            },
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map =
        typeof Map === "function" && typeof Map.prototype.entries === "function"
          ? Map
          : CreateMapPolyfill();
      var _Set =
        typeof Set === "function" && typeof Set.prototype.entries === "function"
          ? Set
          : CreateSetPolyfill();
      var _WeakMap =
        typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol
        ? Symbol.for("@reflect-metadata:registry")
        : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsObject(target)) throw new TypeError();
          if (
            !IsObject(attributes) &&
            !IsUndefined(attributes) &&
            !IsNull(attributes)
          )
            throw new TypeError();
          if (IsNull(attributes)) attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators)) throw new TypeError();
          if (!IsConstructor(target)) throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target)) throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(
            metadataKey,
            metadataValue,
            target,
            propertyKey
          );
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(
          metadataKey,
          metadataValue,
          target,
          propertyKey
        );
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target)) throw new TypeError();
        if (!IsUndefined(propertyKey)) propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider)) return false;
        return provider.OrdinaryDeleteMetadata(
          metadataKey,
          target,
          propertyKey
        );
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated)) throw new TypeError();
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
            if (!IsObject(decorated)) throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2) return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider)) return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2) return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent)) return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider)) return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null) return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0) return ownKeys;
        if (ownKeys.length <= 0) return parentKeys;
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
        for (
          var _a2 = 0, parentKeys_1 = parentKeys;
          _a2 < parentKeys_1.length;
          _a2++
        ) {
          var key = parentKeys_1[_a2];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O, P);
      }
      function Type(x) {
        if (x === null) return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === void 0;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result)) throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result)) return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result)) return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key)) return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray
          ? Array.isArray(argument)
          : argument instanceof Object
            ? argument instanceof Array
            : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x, y) {
        return x === y || (x !== x && y !== y);
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === void 0 || func === null) return void 0;
        if (!IsCallable(func)) throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method)) throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator)) throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f) f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype) return proto;
        if (proto !== functionPrototype) return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function") return proto;
        if (constructor === O) return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (
          !IsUndefined(registrySymbol) &&
          typeof root.Reflect !== "undefined" &&
          !(registrySymbol in root.Reflect) &&
          typeof root.Reflect.defineMetadata === "function"
        ) {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider,
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0) rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O, P)) return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O, P)) return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O, P) {
          var providerMap = targetProviderMap.get(O);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider)) throw new TypeError();
          return (
            first === provider ||
            second === provider ||
            (!IsUndefined(rest) && rest.has(provider))
          );
        }
        function setProvider(O, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (
          !IsUndefined(registrySymbol) &&
          IsObject(root.Reflect) &&
          Object.isExtensible(root.Reflect)
        ) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (
          !IsUndefined(registrySymbol) &&
          IsObject(root.Reflect) &&
          Object.isExtensible(root.Reflect)
        ) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2,
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function (O, P) {
            var targetMetadata = metadata2.get(O);
            if (IsUndefined(targetMetadata)) return false;
            return targetMetadata.has(P);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata,
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = metadata2.get(O);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create) return void 0;
            targetMetadata = new _Map();
            metadata2.set(O, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create) return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return keys;
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
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap)) return false;
          if (!metadataMap.delete(MetadataKey)) return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata,
          hasOwnMetadata2 = reflect.hasOwnMetadata,
          getOwnMetadata2 = reflect.getOwnMetadata,
          getOwnMetadataKeys2 = reflect.getOwnMetadataKeys,
          deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function (O, P) {
            var metadataPropertySet = metadataOwner.get(O);
            if (
              !IsUndefined(metadataPropertySet) &&
              metadataPropertySet.has(P)
            ) {
              return true;
            }
            if (getOwnMetadataKeys2(O, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O, metadataPropertySet);
              }
              metadataPropertySet.add(P);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2,
        };
        return provider;
      }
      function GetMetadataProvider(O, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator =
          /** @class */
          (function () {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function () {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function () {
              return this;
            };
            MapIterator2.prototype.next = function () {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(
                  this._keys[index],
                  this._values[index]
                );
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function (error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function (value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          })();
        var Map2 =
          /** @class */
          (function () {
            function Map3() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map3.prototype, "size", {
              get: function () {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true,
            });
            Map3.prototype.has = function (key) {
              return (
                this._find(
                  key,
                  /*insert*/
                  false
                ) >= 0
              );
            };
            Map3.prototype.get = function (key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map3.prototype.set = function (key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map3.prototype.delete = function (key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size = this._keys.length;
                for (var i = index + 1; i < size; i++) {
                  this._keys[i - 1] = this._keys[i];
                  this._values[i - 1] = this._values[i];
                }
                this._keys.length--;
                this._values.length--;
                if (SameValueZero(key, this._cacheKey)) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map3.prototype.clear = function () {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map3.prototype.keys = function () {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map3.prototype.values = function () {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map3.prototype.entries = function () {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map3.prototype["@@iterator"] = function () {
              return this.entries();
            };
            Map3.prototype[iteratorSymbol] = function () {
              return this.entries();
            };
            Map3.prototype._find = function (key, insert) {
              if (!SameValueZero(this._cacheKey, key)) {
                this._cacheIndex = -1;
                for (var i = 0; i < this._keys.length; i++) {
                  if (SameValueZero(this._keys[i], key)) {
                    this._cacheIndex = i;
                    break;
                  }
                }
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map3;
          })();
        return Map2;
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
      function CreateSetPolyfill() {
        var Set2 =
          /** @class */
          (function () {
            function Set3() {
              this._map = new _Map();
            }
            Object.defineProperty(Set3.prototype, "size", {
              get: function () {
                return this._map.size;
              },
              enumerable: true,
              configurable: true,
            });
            Set3.prototype.has = function (value) {
              return this._map.has(value);
            };
            Set3.prototype.add = function (value) {
              return (this._map.set(value, value), this);
            };
            Set3.prototype.delete = function (value) {
              return this._map.delete(value);
            };
            Set3.prototype.clear = function () {
              this._map.clear();
            };
            Set3.prototype.keys = function () {
              return this._map.keys();
            };
            Set3.prototype.values = function () {
              return this._map.keys();
            };
            Set3.prototype.entries = function () {
              return this._map.entries();
            };
            Set3.prototype["@@iterator"] = function () {
              return this.keys();
            };
            Set3.prototype[iteratorSymbol] = function () {
              return this.keys();
            };
            return Set3;
          })();
        return Set2;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          (function () {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function (target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function (target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function (target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function (target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function () {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          })()
        );
        function CreateUniqueKey() {
          var key;
          do key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create) return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i) buffer[i] = (Math.random() * 255) | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = (data[6] & 79) | 64;
          data[8] = (data[8] & 191) | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8) result += "-";
            if (byte < 16) result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return _Reflect;
}
require_Reflect();
var src$1 = { exports: {} };
var browser$1 = { exports: {} };
var debug$1 = { exports: {} };
var ms$1;
var hasRequiredMs$1;
function requireMs$1() {
  if (hasRequiredMs$1) return ms$1;
  hasRequiredMs$1 = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var y = d * 365.25;
  ms$1 = function (val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isNaN(val) === false) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(val)
    );
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match =
      /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
        str
      );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    if (ms2 >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (ms2 >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (ms2 >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (ms2 >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    return (
      plural(ms2, d, "day") ||
      plural(ms2, h, "hour") ||
      plural(ms2, m, "minute") ||
      plural(ms2, s, "second") ||
      ms2 + " ms"
    );
  }
  function plural(ms2, n, name) {
    if (ms2 < n) {
      return;
    }
    if (ms2 < n * 1.5) {
      return Math.floor(ms2 / n) + " " + name;
    }
    return Math.ceil(ms2 / n) + " " + name + "s";
  }
  return ms$1;
}
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug$1.exports;
  hasRequiredDebug = 1;
  (function (module2, exports$1) {
    exports$1 =
      module2.exports =
      createDebug2.debug =
      createDebug2["default"] =
        createDebug2;
    exports$1.coerce = coerce;
    exports$1.disable = disable;
    exports$1.enable = enable;
    exports$1.enabled = enabled;
    exports$1.humanize = requireMs$1();
    exports$1.names = [];
    exports$1.skips = [];
    exports$1.formatters = {};
    var prevTime;
    function selectColor(namespace) {
      var hash = 0,
        i;
      for (i in namespace) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return exports$1.colors[Math.abs(hash) % exports$1.colors.length];
    }
    function createDebug2(namespace) {
      function debug2() {
        if (!debug2.enabled) return;
        var self2 = debug2;
        var curr = +(/* @__PURE__ */ new Date());
        var ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        args[0] = exports$1.coerce(args[0]);
        if ("string" !== typeof args[0]) {
          args.unshift("%O");
        }
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function (match, format) {
          if (match === "%%") return match;
          index++;
          var formatter = exports$1.formatters[format];
          if ("function" === typeof formatter) {
            var val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        exports$1.formatArgs.call(self2, args);
        var logFn = debug2.log || exports$1.log || console.log.bind(console);
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.enabled = exports$1.enabled(namespace);
      debug2.useColors = exports$1.useColors();
      debug2.color = selectColor(namespace);
      if ("function" === typeof exports$1.init) {
        exports$1.init(debug2);
      }
      return debug2;
    }
    function enable(namespaces) {
      exports$1.save(namespaces);
      exports$1.names = [];
      exports$1.skips = [];
      var split = (typeof namespaces === "string" ? namespaces : "").split(
        /[\s,]+/
      );
      var len = split.length;
      for (var i = 0; i < len; i++) {
        if (!split[i]) continue;
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") {
          exports$1.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        } else {
          exports$1.names.push(new RegExp("^" + namespaces + "$"));
        }
      }
    }
    function disable() {
      exports$1.enable("");
    }
    function enabled(name) {
      var i, len;
      for (i = 0, len = exports$1.skips.length; i < len; i++) {
        if (exports$1.skips[i].test(name)) {
          return false;
        }
      }
      for (i = 0, len = exports$1.names.length; i < len; i++) {
        if (exports$1.names[i].test(name)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) return val.stack || val.message;
      return val;
    }
  })(debug$1, debug$1.exports);
  return debug$1.exports;
}
var hasRequiredBrowser$1;
function requireBrowser$1() {
  if (hasRequiredBrowser$1) return browser$1.exports;
  hasRequiredBrowser$1 = 1;
  (function (module2, exports$1) {
    exports$1 = module2.exports = requireDebug();
    exports$1.log = log;
    exports$1.formatArgs = formatArgs;
    exports$1.save = save;
    exports$1.load = load;
    exports$1.useColors = useColors;
    exports$1.storage =
      "undefined" != typeof chrome && "undefined" != typeof chrome.storage
        ? chrome.storage.local
        : localstorage();
    exports$1.colors = [
      "lightseagreen",
      "forestgreen",
      "goldenrod",
      "dodgerblue",
      "darkorchid",
      "crimson",
    ];
    function useColors() {
      if (
        typeof window !== "undefined" &&
        window.process &&
        window.process.type === "renderer"
      ) {
        return true;
      }
      return (
        (typeof document !== "undefined" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) || // is firebug? http://stackoverflow.com/a/398120/376773
        (typeof window !== "undefined" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) || // is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        (typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) &&
          parseInt(RegExp.$1, 10) >= 31) || // double check webkit in userAgent just in case we are in a worker
        (typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      );
    }
    exports$1.formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
      }
    };
    function formatArgs(args) {
      var useColors2 = this.useColors;
      args[0] =
        (useColors2 ? "%c" : "") +
        this.namespace +
        (useColors2 ? " %c" : " ") +
        args[0] +
        (useColors2 ? "%c " : " ") +
        "+" +
        exports$1.humanize(this.diff);
      if (!useColors2) return;
      var c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      var index = 0;
      var lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, function (match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    function log() {
      return (
        "object" === typeof console &&
        console.log &&
        Function.prototype.apply.call(console.log, console, arguments)
      );
    }
    function save(namespaces) {
      try {
        if (null == namespaces) {
          exports$1.storage.removeItem("debug");
        } else {
          exports$1.storage.debug = namespaces;
        }
      } catch (e) {}
    }
    function load() {
      var r;
      try {
        r = exports$1.storage.debug;
      } catch (e) {}
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    exports$1.enable(load());
    function localstorage() {
      try {
        return window.localStorage;
      } catch (e) {}
    }
  })(browser$1, browser$1.exports);
  return browser$1.exports;
}
var node$2 = { exports: {} };
var hasRequiredNode$2;
function requireNode$2() {
  if (hasRequiredNode$2) return node$2.exports;
  hasRequiredNode$2 = 1;
  (function (module2, exports$1) {
    var tty = require$$0;
    var util = require$$1$2;
    exports$1 = module2.exports = requireDebug();
    exports$1.init = init;
    exports$1.log = log;
    exports$1.formatArgs = formatArgs;
    exports$1.save = save;
    exports$1.load = load;
    exports$1.useColors = useColors;
    exports$1.colors = [6, 2, 3, 4, 5, 1];
    exports$1.inspectOpts = Object.keys(process.env)
      .filter(function (key) {
        return /^debug_/i.test(key);
      })
      .reduce(function (obj, key) {
        var prop = key
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, function (_, k) {
            return k.toUpperCase();
          });
        var val = process.env[key];
        if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
        else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
        else if (val === "null") val = null;
        else val = Number(val);
        obj[prop] = val;
        return obj;
      }, {});
    var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
    if (1 !== fd && 2 !== fd) {
      util.deprecate(
        function () {},
        "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)"
      )();
    }
    var stream2 =
      1 === fd
        ? process.stdout
        : 2 === fd
          ? process.stderr
          : createWritableStdioStream(fd);
    function useColors() {
      return "colors" in exports$1.inspectOpts
        ? Boolean(exports$1.inspectOpts.colors)
        : tty.isatty(fd);
    }
    exports$1.formatters.o = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util
        .inspect(v, this.inspectOpts)
        .split("\n")
        .map(function (str) {
          return str.trim();
        })
        .join(" ");
    };
    exports$1.formatters.O = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
    function formatArgs(args) {
      var name = this.namespace;
      var useColors2 = this.useColors;
      if (useColors2) {
        var c = this.color;
        var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(
          "\x1B[3" + c + "m+" + exports$1.humanize(this.diff) + "\x1B[0m"
        );
      } else {
        args[0] =
          /* @__PURE__ */ new Date().toUTCString() + " " + name + " " + args[0];
      }
    }
    function log() {
      return stream2.write(util.format.apply(util, arguments) + "\n");
    }
    function save(namespaces) {
      if (null == namespaces) {
        delete process.env.DEBUG;
      } else {
        process.env.DEBUG = namespaces;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function createWritableStdioStream(fd2) {
      var stream3;
      var tty_wrap = process.binding("tty_wrap");
      switch (tty_wrap.guessHandleType(fd2)) {
        case "TTY":
          stream3 = new tty.WriteStream(fd2);
          stream3._type = "tty";
          if (stream3._handle && stream3._handle.unref) {
            stream3._handle.unref();
          }
          break;
        case "FILE":
          var fs2 = require$$3;
          stream3 = new fs2.SyncWriteStream(fd2, { autoClose: false });
          stream3._type = "fs";
          break;
        case "PIPE":
        case "TCP":
          var net = require$$4;
          stream3 = new net.Socket({
            fd: fd2,
            readable: false,
            writable: true,
          });
          stream3.readable = false;
          stream3.read = null;
          stream3._type = "pipe";
          if (stream3._handle && stream3._handle.unref) {
            stream3._handle.unref();
          }
          break;
        default:
          throw new Error("Implement me. Unknown stream file type!");
      }
      stream3.fd = fd2;
      stream3._isStdio = true;
      return stream3;
    }
    function init(debug2) {
      debug2.inspectOpts = {};
      var keys = Object.keys(exports$1.inspectOpts);
      for (var i = 0; i < keys.length; i++) {
        debug2.inspectOpts[keys[i]] = exports$1.inspectOpts[keys[i]];
      }
    }
    exports$1.enable(load());
  })(node$2, node$2.exports);
  return node$2.exports;
}
var hasRequiredSrc$1;
function requireSrc$1() {
  if (hasRequiredSrc$1) return src$1.exports;
  hasRequiredSrc$1 = 1;
  if (typeof process !== "undefined" && process.type === "renderer") {
    src$1.exports = requireBrowser$1();
  } else {
    src$1.exports = requireNode$2();
  }
  return src$1.exports;
}
var electronSquirrelStartup;
var hasRequiredElectronSquirrelStartup;
function requireElectronSquirrelStartup() {
  if (hasRequiredElectronSquirrelStartup) return electronSquirrelStartup;
  hasRequiredElectronSquirrelStartup = 1;
  var path2 = require$$0$1;
  var spawn = require$$1$3.spawn;
  var debug2 = requireSrc$1()("electron-squirrel-startup");
  var app = require$$3$1.app;
  var run = function (args, done) {
    var updateExe = path2.resolve(
      path2.dirname(process.execPath),
      "..",
      "Update.exe"
    );
    debug2("Spawning `%s` with args `%s`", updateExe, args);
    spawn(updateExe, args, {
      detached: true,
    }).on("close", done);
  };
  var check = function () {
    if (process.platform === "win32") {
      var cmd = process.argv[1];
      debug2("processing squirrel command `%s`", cmd);
      var target = path2.basename(process.execPath);
      if (cmd === "--squirrel-install" || cmd === "--squirrel-updated") {
        run(["--createShortcut=" + target], app.quit);
        return true;
      }
      if (cmd === "--squirrel-uninstall") {
        run(["--removeShortcut=" + target], app.quit);
        return true;
      }
      if (cmd === "--squirrel-obsolete") {
        app.quit();
        return true;
      }
    }
    return false;
  };
  electronSquirrelStartup = check();
  return electronSquirrelStartup;
}
var electronSquirrelStartupExports = requireElectronSquirrelStartup();
const started = /* @__PURE__ */ getDefaultExportFromCjs(
  electronSquirrelStartupExports
);
var Lifecycle;
(function (Lifecycle2) {
  Lifecycle2[(Lifecycle2["Transient"] = 0)] = "Transient";
  Lifecycle2[(Lifecycle2["Singleton"] = 1)] = "Singleton";
  Lifecycle2[(Lifecycle2["ResolutionScoped"] = 2)] = "ResolutionScoped";
  Lifecycle2[(Lifecycle2["ContainerScoped"] = 3)] = "ContainerScoped";
})(Lifecycle || (Lifecycle = {}));
const Lifecycle$1 = Lifecycle;
var tslib$1 = { exports: {} };
var hasRequiredTslib;
function requireTslib() {
  if (hasRequiredTslib) return tslib$1.exports;
  hasRequiredTslib = 1;
  (function (module2) {
    var __extends2;
    var __assign2;
    var __rest2;
    var __decorate2;
    var __param2;
    var __metadata2;
    var __awaiter2;
    var __generator2;
    var __exportStar2;
    var __values2;
    var __read2;
    var __spread2;
    var __spreadArrays2;
    var __await2;
    var __asyncGenerator2;
    var __asyncDelegator2;
    var __asyncValues2;
    var __makeTemplateObject2;
    var __importStar2;
    var __importDefault2;
    var __classPrivateFieldGet2;
    var __classPrivateFieldSet2;
    var __createBinding2;
    (function (factory) {
      var root =
        typeof commonjsGlobal === "object"
          ? commonjsGlobal
          : typeof self === "object"
            ? self
            : typeof this === "object"
              ? this
              : {};
      {
        factory(createExporter(root, createExporter(module2.exports)));
      }
      function createExporter(exports$1, previous) {
        if (exports$1 !== root) {
          if (typeof Object.create === "function") {
            Object.defineProperty(exports$1, "__esModule", { value: true });
          } else {
            exports$1.__esModule = true;
          }
        }
        return function (id, v) {
          return (exports$1[id] = previous ? previous(id, v) : v);
        };
      }
    })(function (exporter) {
      var extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      __extends2 = function (d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype =
          b === null
            ? Object.create(b)
            : ((__.prototype = b.prototype), new __());
      };
      __assign2 =
        Object.assign ||
        function (t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
      __rest2 = function (s, e) {
        var t = {};
        for (var p in s)
          if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
          for (
            var i = 0, p = Object.getOwnPropertySymbols(s);
            i < p.length;
            i++
          ) {
            if (
              e.indexOf(p[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(s, p[i])
            )
              t[p[i]] = s[p[i]];
          }
        return t;
      };
      __decorate2 = function (decorators, target, key, desc) {
        var c = arguments.length,
          r =
            c < 3
              ? target
              : desc === null
                ? (desc = Object.getOwnPropertyDescriptor(target, key))
                : desc,
          d;
        if (
          typeof Reflect === "object" &&
          typeof Reflect.decorate === "function"
        )
          r = Reflect.decorate(decorators, target, key, desc);
        else
          for (var i = decorators.length - 1; i >= 0; i--)
            if ((d = decorators[i]))
              r =
                (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) ||
                r;
        return (c > 3 && r && Object.defineProperty(target, key, r), r);
      };
      __param2 = function (paramIndex, decorator) {
        return function (target, key) {
          decorator(target, key, paramIndex);
        };
      };
      __metadata2 = function (metadataKey, metadataValue) {
        if (
          typeof Reflect === "object" &&
          typeof Reflect.metadata === "function"
        )
          return Reflect.metadata(metadataKey, metadataValue);
      };
      __awaiter2 = function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P
            ? value
            : new P(function (resolve) {
                resolve(value);
              });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }
          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }
          function step(result) {
            result.done
              ? resolve(result.value)
              : adopt(result.value).then(fulfilled, rejected);
          }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };
      __generator2 = function (thisArg, body) {
        var _ = {
            label: 0,
            sent: function () {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: [],
          },
          f,
          y,
          t,
          g;
        return (
          (g = { next: verb(0), throw: verb(1), return: verb(2) }),
          typeof Symbol === "function" &&
            (g[Symbol.iterator] = function () {
              return this;
            }),
          g
        );
        function verb(n) {
          return function (v) {
            return step([n, v]);
          };
        }
        function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (_)
            try {
              if (
                ((f = 1),
                y &&
                  (t =
                    op[0] & 2
                      ? y["return"]
                      : op[0]
                        ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                        : y.next) &&
                  !(t = t.call(y, op[1])).done)
              )
                return t;
              if (((y = 0), t)) op = [op[0] & 2, t.value];
              switch (op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  _.label++;
                  return { value: op[1], done: false };
                case 5:
                  _.label++;
                  y = op[1];
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (
                    !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                    (op[0] === 6 || op[0] === 2)
                  ) {
                    _ = 0;
                    continue;
                  }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                    _.label = op[1];
                    break;
                  }
                  if (op[0] === 6 && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) _.ops.pop();
                  _.trys.pop();
                  continue;
              }
              op = body.call(thisArg, _);
            } catch (e) {
              op = [6, e];
              y = 0;
            } finally {
              f = t = 0;
            }
          if (op[0] & 5) throw op[1];
          return { value: op[0] ? op[1] : void 0, done: true };
        }
      };
      __createBinding2 = function (o, m, k, k2) {
        if (k2 === void 0) k2 = k;
        o[k2] = m[k];
      };
      __exportStar2 = function (m, exports$1) {
        for (var p in m)
          if (p !== "default" && !exports$1.hasOwnProperty(p))
            exports$1[p] = m[p];
      };
      __values2 = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number")
          return {
            next: function () {
              if (o && i >= o.length) o = void 0;
              return { value: o && o[i++], done: !o };
            },
          };
        throw new TypeError(
          s ? "Object is not iterable." : "Symbol.iterator is not defined."
        );
      };
      __read2 = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o),
          r,
          ar = [],
          e;
        try {
          while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
        } catch (error) {
          e = { error };
        } finally {
          try {
            if (r && !r.done && (m = i["return"])) m.call(i);
          } finally {
            if (e) throw e.error;
          }
        }
        return ar;
      };
      __spread2 = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
          ar = ar.concat(__read2(arguments[i]));
        return ar;
      };
      __spreadArrays2 = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
          s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
          for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
        return r;
      };
      __await2 = function (v) {
        return this instanceof __await2
          ? ((this.v = v), this)
          : new __await2(v);
      };
      __asyncGenerator2 = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
        return (
          (i = {}),
          verb("next"),
          verb("throw"),
          verb("return"),
          (i[Symbol.asyncIterator] = function () {
            return this;
          }),
          i
        );
        function verb(n) {
          if (g[n])
            i[n] = function (v) {
              return new Promise(function (a, b) {
                q.push([n, v, a, b]) > 1 || resume(n, v);
              });
            };
        }
        function resume(n, v) {
          try {
            step(g[n](v));
          } catch (e) {
            settle(q[0][3], e);
          }
        }
        function step(r) {
          r.value instanceof __await2
            ? Promise.resolve(r.value.v).then(fulfill, reject)
            : settle(q[0][2], r);
        }
        function fulfill(value) {
          resume("next", value);
        }
        function reject(value) {
          resume("throw", value);
        }
        function settle(f, v) {
          if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
        }
      };
      __asyncDelegator2 = function (o) {
        var i, p;
        return (
          (i = {}),
          verb("next"),
          verb("throw", function (e) {
            throw e;
          }),
          verb("return"),
          (i[Symbol.iterator] = function () {
            return this;
          }),
          i
        );
        function verb(n, f) {
          i[n] = o[n]
            ? function (v) {
                return (p = !p)
                  ? { value: __await2(o[n](v)), done: n === "return" }
                  : f
                    ? f(v)
                    : v;
              }
            : f;
        }
      };
      __asyncValues2 = function (o) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator],
          i;
        return m
          ? m.call(o)
          : ((o =
              typeof __values2 === "function"
                ? __values2(o)
                : o[Symbol.iterator]()),
            (i = {}),
            verb("next"),
            verb("throw"),
            verb("return"),
            (i[Symbol.asyncIterator] = function () {
              return this;
            }),
            i);
        function verb(n) {
          i[n] =
            o[n] &&
            function (v) {
              return new Promise(function (resolve, reject) {
                ((v = o[n](v)), settle(resolve, reject, v.done, v.value));
              });
            };
        }
        function settle(resolve, reject, d, v) {
          Promise.resolve(v).then(function (v2) {
            resolve({ value: v2, done: d });
          }, reject);
        }
      };
      __makeTemplateObject2 = function (cooked, raw) {
        if (Object.defineProperty) {
          Object.defineProperty(cooked, "raw", { value: raw });
        } else {
          cooked.raw = raw;
        }
        return cooked;
      };
      __importStar2 = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        }
        result["default"] = mod;
        return result;
      };
      __importDefault2 = function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
      };
      __classPrivateFieldGet2 = function (receiver2, privateMap) {
        if (!privateMap.has(receiver2)) {
          throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver2);
      };
      __classPrivateFieldSet2 = function (receiver2, privateMap, value) {
        if (!privateMap.has(receiver2)) {
          throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver2, value);
        return value;
      };
      exporter("__extends", __extends2);
      exporter("__assign", __assign2);
      exporter("__rest", __rest2);
      exporter("__decorate", __decorate2);
      exporter("__param", __param2);
      exporter("__metadata", __metadata2);
      exporter("__awaiter", __awaiter2);
      exporter("__generator", __generator2);
      exporter("__exportStar", __exportStar2);
      exporter("__createBinding", __createBinding2);
      exporter("__values", __values2);
      exporter("__read", __read2);
      exporter("__spread", __spread2);
      exporter("__spreadArrays", __spreadArrays2);
      exporter("__await", __await2);
      exporter("__asyncGenerator", __asyncGenerator2);
      exporter("__asyncDelegator", __asyncDelegator2);
      exporter("__asyncValues", __asyncValues2);
      exporter("__makeTemplateObject", __makeTemplateObject2);
      exporter("__importStar", __importStar2);
      exporter("__importDefault", __importDefault2);
      exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
      exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
    });
  })(tslib$1);
  return tslib$1.exports;
}
var tslibExports = /* @__PURE__ */ requireTslib();
const tslib = /* @__PURE__ */ getDefaultExportFromCjs(tslibExports);
const {
  __extends: __extends$1,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter: __awaiter$1,
  __generator: __generator$1,
  __exportStar,
  __createBinding,
  __values: __values$1,
  __read,
  __spread,
  __spreadArrays,
  __await: __await$1,
  __asyncGenerator: __asyncGenerator$1,
  __asyncDelegator,
  __asyncValues: __asyncValues$1,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
} = tslib;
var INJECTION_TOKEN_METADATA_KEY = "injectionTokens";
function getParamInfo(target) {
  var params = Reflect.getMetadata("design:paramtypes", target) || [];
  var injectionTokens =
    Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) || {};
  Object.keys(injectionTokens).forEach(function (key) {
    params[+key] = injectionTokens[key];
  });
  return params;
}
function isClassProvider(provider) {
  return !!provider.useClass;
}
function isFactoryProvider(provider) {
  return !!provider.useFactory;
}
var DelayedConstructor = (function () {
  function DelayedConstructor2(wrap) {
    this.wrap = wrap;
    this.reflectMethods = [
      "get",
      "getPrototypeOf",
      "setPrototypeOf",
      "getOwnPropertyDescriptor",
      "defineProperty",
      "has",
      "set",
      "deleteProperty",
      "apply",
      "construct",
      "ownKeys",
    ];
  }
  DelayedConstructor2.prototype.createProxy = function (createObject) {
    var _this = this;
    var target = {};
    var init = false;
    var value;
    var delayedObject = function () {
      if (!init) {
        value = createObject(_this.wrap());
        init = true;
      }
      return value;
    };
    return new Proxy(target, this.createHandler(delayedObject));
  };
  DelayedConstructor2.prototype.createHandler = function (delayedObject) {
    var handler = {};
    var install = function (name) {
      handler[name] = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        args[0] = delayedObject();
        var method = Reflect[name];
        return method.apply(void 0, __spread(args));
      };
    };
    this.reflectMethods.forEach(install);
    return handler;
  };
  return DelayedConstructor2;
})();
function isNormalToken(token) {
  return typeof token === "string" || typeof token === "symbol";
}
function isTokenDescriptor(descriptor) {
  return (
    typeof descriptor === "object" &&
    "token" in descriptor &&
    "multiple" in descriptor
  );
}
function isTransformDescriptor(descriptor) {
  return (
    typeof descriptor === "object" &&
    "token" in descriptor &&
    "transform" in descriptor
  );
}
function isConstructorToken(token) {
  return typeof token === "function" || token instanceof DelayedConstructor;
}
function isTokenProvider(provider) {
  return !!provider.useToken;
}
function isValueProvider(provider) {
  return provider.useValue != void 0;
}
function isProvider(provider) {
  return (
    isClassProvider(provider) ||
    isValueProvider(provider) ||
    isTokenProvider(provider) ||
    isFactoryProvider(provider)
  );
}
var RegistryBase = (function () {
  function RegistryBase2() {
    this._registryMap = /* @__PURE__ */ new Map();
  }
  RegistryBase2.prototype.entries = function () {
    return this._registryMap.entries();
  };
  RegistryBase2.prototype.getAll = function (key) {
    this.ensure(key);
    return this._registryMap.get(key);
  };
  RegistryBase2.prototype.get = function (key) {
    this.ensure(key);
    var value = this._registryMap.get(key);
    return value[value.length - 1] || null;
  };
  RegistryBase2.prototype.set = function (key, value) {
    this.ensure(key);
    this._registryMap.get(key).push(value);
  };
  RegistryBase2.prototype.setAll = function (key, value) {
    this._registryMap.set(key, value);
  };
  RegistryBase2.prototype.has = function (key) {
    this.ensure(key);
    return this._registryMap.get(key).length > 0;
  };
  RegistryBase2.prototype.clear = function () {
    this._registryMap.clear();
  };
  RegistryBase2.prototype.ensure = function (key) {
    if (!this._registryMap.has(key)) {
      this._registryMap.set(key, []);
    }
  };
  return RegistryBase2;
})();
var Registry = (function (_super) {
  __extends$1(Registry2, _super);
  function Registry2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return Registry2;
})(RegistryBase);
var ResolutionContext = /* @__PURE__ */ (function () {
  function ResolutionContext2() {
    this.scopedResolutions = /* @__PURE__ */ new Map();
  }
  return ResolutionContext2;
})();
function formatDependency(params, idx) {
  if (params === null) {
    return "at position #" + idx;
  }
  var argName = params.split(",")[idx].trim();
  return '"' + argName + '" at position #' + idx;
}
function composeErrorMessage(msg, e, indent) {
  if (indent === void 0) {
    indent = "    ";
  }
  return __spread(
    [msg],
    e.message.split("\n").map(function (l) {
      return indent + l;
    })
  ).join("\n");
}
function formatErrorCtor(ctor, paramIdx, error) {
  var _a2 = __read(ctor.toString().match(/constructor\(([\w, ]+)\)/) || [], 2),
    _b2 = _a2[1],
    params = _b2 === void 0 ? null : _b2;
  var dep = formatDependency(params, paramIdx);
  return composeErrorMessage(
    "Cannot inject the dependency " +
      dep +
      ' of "' +
      ctor.name +
      '" constructor. Reason:',
    error
  );
}
function isDisposable(value) {
  if (typeof value.dispose !== "function") return false;
  var disposeFun = value.dispose;
  if (disposeFun.length > 0) {
    return false;
  }
  return true;
}
var PreResolutionInterceptors = (function (_super) {
  __extends$1(PreResolutionInterceptors2, _super);
  function PreResolutionInterceptors2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return PreResolutionInterceptors2;
})(RegistryBase);
var PostResolutionInterceptors = (function (_super) {
  __extends$1(PostResolutionInterceptors2, _super);
  function PostResolutionInterceptors2() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return PostResolutionInterceptors2;
})(RegistryBase);
var Interceptors = /* @__PURE__ */ (function () {
  function Interceptors2() {
    this.preResolution = new PreResolutionInterceptors();
    this.postResolution = new PostResolutionInterceptors();
  }
  return Interceptors2;
})();
var typeInfo = /* @__PURE__ */ new Map();
var InternalDependencyContainer = (function () {
  function InternalDependencyContainer2(parent) {
    this.parent = parent;
    this._registry = new Registry();
    this.interceptors = new Interceptors();
    this.disposed = false;
    this.disposables = /* @__PURE__ */ new Set();
  }
  InternalDependencyContainer2.prototype.register = function (
    token,
    providerOrConstructor,
    options
  ) {
    if (options === void 0) {
      options = { lifecycle: Lifecycle$1.Transient };
    }
    this.ensureNotDisposed();
    var provider;
    if (!isProvider(providerOrConstructor)) {
      provider = { useClass: providerOrConstructor };
    } else {
      provider = providerOrConstructor;
    }
    if (isTokenProvider(provider)) {
      var path2 = [token];
      var tokenProvider = provider;
      while (tokenProvider != null) {
        var currentToken = tokenProvider.useToken;
        if (path2.includes(currentToken)) {
          throw new Error(
            "Token registration cycle detected! " +
              __spread(path2, [currentToken]).join(" -> ")
          );
        }
        path2.push(currentToken);
        var registration = this._registry.get(currentToken);
        if (registration && isTokenProvider(registration.provider)) {
          tokenProvider = registration.provider;
        } else {
          tokenProvider = null;
        }
      }
    }
    if (
      options.lifecycle === Lifecycle$1.Singleton ||
      options.lifecycle == Lifecycle$1.ContainerScoped ||
      options.lifecycle == Lifecycle$1.ResolutionScoped
    ) {
      if (isValueProvider(provider) || isFactoryProvider(provider)) {
        throw new Error(
          'Cannot use lifecycle "' +
            Lifecycle$1[options.lifecycle] +
            '" with ValueProviders or FactoryProviders'
        );
      }
    }
    this._registry.set(token, { provider, options });
    return this;
  };
  InternalDependencyContainer2.prototype.registerType = function (from, to) {
    this.ensureNotDisposed();
    if (isNormalToken(to)) {
      return this.register(from, {
        useToken: to,
      });
    }
    return this.register(from, {
      useClass: to,
    });
  };
  InternalDependencyContainer2.prototype.registerInstance = function (
    token,
    instance2
  ) {
    this.ensureNotDisposed();
    return this.register(token, {
      useValue: instance2,
    });
  };
  InternalDependencyContainer2.prototype.registerSingleton = function (
    from,
    to
  ) {
    this.ensureNotDisposed();
    if (isNormalToken(from)) {
      if (isNormalToken(to)) {
        return this.register(
          from,
          {
            useToken: to,
          },
          { lifecycle: Lifecycle$1.Singleton }
        );
      } else if (to) {
        return this.register(
          from,
          {
            useClass: to,
          },
          { lifecycle: Lifecycle$1.Singleton }
        );
      }
      throw new Error(
        'Cannot register a type name as a singleton without a "to" token'
      );
    }
    var useClass = from;
    if (to && !isNormalToken(to)) {
      useClass = to;
    }
    return this.register(
      from,
      {
        useClass,
      },
      { lifecycle: Lifecycle$1.Singleton }
    );
  };
  InternalDependencyContainer2.prototype.resolve = function (
    token,
    context,
    isOptional
  ) {
    if (context === void 0) {
      context = new ResolutionContext();
    }
    if (isOptional === void 0) {
      isOptional = false;
    }
    this.ensureNotDisposed();
    var registration = this.getRegistration(token);
    if (!registration && isNormalToken(token)) {
      if (isOptional) {
        return void 0;
      }
      throw new Error(
        'Attempted to resolve unregistered dependency token: "' +
          token.toString() +
          '"'
      );
    }
    this.executePreResolutionInterceptor(token, "Single");
    if (registration) {
      var result = this.resolveRegistration(registration, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    if (isConstructorToken(token)) {
      var result = this.construct(token, context);
      this.executePostResolutionInterceptor(token, result, "Single");
      return result;
    }
    throw new Error(
      "Attempted to construct an undefined constructor. Could mean a circular dependency problem. Try using `delay` function."
    );
  };
  InternalDependencyContainer2.prototype.executePreResolutionInterceptor =
    function (token, resolutionType) {
      var e_1, _a2;
      if (this.interceptors.preResolution.has(token)) {
        var remainingInterceptors = [];
        try {
          for (
            var _b2 = __values$1(this.interceptors.preResolution.getAll(token)),
              _c2 = _b2.next();
            !_c2.done;
            _c2 = _b2.next()
          ) {
            var interceptor = _c2.value;
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, resolutionType);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (_c2 && !_c2.done && (_a2 = _b2.return)) _a2.call(_b2);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        this.interceptors.preResolution.setAll(token, remainingInterceptors);
      }
    };
  InternalDependencyContainer2.prototype.executePostResolutionInterceptor =
    function (token, result, resolutionType) {
      var e_2, _a2;
      if (this.interceptors.postResolution.has(token)) {
        var remainingInterceptors = [];
        try {
          for (
            var _b2 = __values$1(
                this.interceptors.postResolution.getAll(token)
              ),
              _c2 = _b2.next();
            !_c2.done;
            _c2 = _b2.next()
          ) {
            var interceptor = _c2.value;
            if (interceptor.options.frequency != "Once") {
              remainingInterceptors.push(interceptor);
            }
            interceptor.callback(token, result, resolutionType);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (_c2 && !_c2.done && (_a2 = _b2.return)) _a2.call(_b2);
          } finally {
            if (e_2) throw e_2.error;
          }
        }
        this.interceptors.postResolution.setAll(token, remainingInterceptors);
      }
    };
  InternalDependencyContainer2.prototype.resolveRegistration = function (
    registration,
    context
  ) {
    this.ensureNotDisposed();
    if (
      registration.options.lifecycle === Lifecycle$1.ResolutionScoped &&
      context.scopedResolutions.has(registration)
    ) {
      return context.scopedResolutions.get(registration);
    }
    var isSingleton = registration.options.lifecycle === Lifecycle$1.Singleton;
    var isContainerScoped =
      registration.options.lifecycle === Lifecycle$1.ContainerScoped;
    var returnInstance = isSingleton || isContainerScoped;
    var resolved;
    if (isValueProvider(registration.provider)) {
      resolved = registration.provider.useValue;
    } else if (isTokenProvider(registration.provider)) {
      resolved = returnInstance
        ? registration.instance ||
          (registration.instance = this.resolve(
            registration.provider.useToken,
            context
          ))
        : this.resolve(registration.provider.useToken, context);
    } else if (isClassProvider(registration.provider)) {
      resolved = returnInstance
        ? registration.instance ||
          (registration.instance = this.construct(
            registration.provider.useClass,
            context
          ))
        : this.construct(registration.provider.useClass, context);
    } else if (isFactoryProvider(registration.provider)) {
      resolved = registration.provider.useFactory(this);
    } else {
      resolved = this.construct(registration.provider, context);
    }
    if (registration.options.lifecycle === Lifecycle$1.ResolutionScoped) {
      context.scopedResolutions.set(registration, resolved);
    }
    return resolved;
  };
  InternalDependencyContainer2.prototype.resolveAll = function (
    token,
    context,
    isOptional
  ) {
    var _this = this;
    if (context === void 0) {
      context = new ResolutionContext();
    }
    if (isOptional === void 0) {
      isOptional = false;
    }
    this.ensureNotDisposed();
    var registrations = this.getAllRegistrations(token);
    if (!registrations && isNormalToken(token)) {
      if (isOptional) {
        return [];
      }
      throw new Error(
        'Attempted to resolve unregistered dependency token: "' +
          token.toString() +
          '"'
      );
    }
    this.executePreResolutionInterceptor(token, "All");
    if (registrations) {
      var result_1 = registrations.map(function (item) {
        return _this.resolveRegistration(item, context);
      });
      this.executePostResolutionInterceptor(token, result_1, "All");
      return result_1;
    }
    var result = [this.construct(token, context)];
    this.executePostResolutionInterceptor(token, result, "All");
    return result;
  };
  InternalDependencyContainer2.prototype.isRegistered = function (
    token,
    recursive
  ) {
    if (recursive === void 0) {
      recursive = false;
    }
    this.ensureNotDisposed();
    return (
      this._registry.has(token) ||
      (recursive &&
        (this.parent || false) &&
        this.parent.isRegistered(token, true))
    );
  };
  InternalDependencyContainer2.prototype.reset = function () {
    this.ensureNotDisposed();
    this._registry.clear();
    this.interceptors.preResolution.clear();
    this.interceptors.postResolution.clear();
  };
  InternalDependencyContainer2.prototype.clearInstances = function () {
    var e_3, _a2;
    this.ensureNotDisposed();
    try {
      for (
        var _b2 = __values$1(this._registry.entries()), _c2 = _b2.next();
        !_c2.done;
        _c2 = _b2.next()
      ) {
        var _d = __read(_c2.value, 2),
          token = _d[0],
          registrations = _d[1];
        this._registry.setAll(
          token,
          registrations
            .filter(function (registration) {
              return !isValueProvider(registration.provider);
            })
            .map(function (registration) {
              registration.instance = void 0;
              return registration;
            })
        );
      }
    } catch (e_3_1) {
      e_3 = { error: e_3_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b2.return)) _a2.call(_b2);
      } finally {
        if (e_3) throw e_3.error;
      }
    }
  };
  InternalDependencyContainer2.prototype.createChildContainer = function () {
    var e_4, _a2;
    this.ensureNotDisposed();
    var childContainer = new InternalDependencyContainer2(this);
    try {
      for (
        var _b2 = __values$1(this._registry.entries()), _c2 = _b2.next();
        !_c2.done;
        _c2 = _b2.next()
      ) {
        var _d = __read(_c2.value, 2),
          token = _d[0],
          registrations = _d[1];
        if (
          registrations.some(function (_a3) {
            var options = _a3.options;
            return options.lifecycle === Lifecycle$1.ContainerScoped;
          })
        ) {
          childContainer._registry.setAll(
            token,
            registrations.map(function (registration) {
              if (
                registration.options.lifecycle === Lifecycle$1.ContainerScoped
              ) {
                return {
                  provider: registration.provider,
                  options: registration.options,
                };
              }
              return registration;
            })
          );
        }
      }
    } catch (e_4_1) {
      e_4 = { error: e_4_1 };
    } finally {
      try {
        if (_c2 && !_c2.done && (_a2 = _b2.return)) _a2.call(_b2);
      } finally {
        if (e_4) throw e_4.error;
      }
    }
    return childContainer;
  };
  InternalDependencyContainer2.prototype.beforeResolution = function (
    token,
    callback,
    options
  ) {
    if (options === void 0) {
      options = { frequency: "Always" };
    }
    this.interceptors.preResolution.set(token, {
      callback,
      options,
    });
  };
  InternalDependencyContainer2.prototype.afterResolution = function (
    token,
    callback,
    options
  ) {
    if (options === void 0) {
      options = { frequency: "Always" };
    }
    this.interceptors.postResolution.set(token, {
      callback,
      options,
    });
  };
  InternalDependencyContainer2.prototype.dispose = function () {
    return __awaiter$1(this, void 0, void 0, function () {
      var promises;
      return __generator$1(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            this.disposed = true;
            promises = [];
            this.disposables.forEach(function (disposable) {
              var maybePromise = disposable.dispose();
              if (maybePromise) {
                promises.push(maybePromise);
              }
            });
            return [4, Promise.all(promises)];
          case 1:
            _a2.sent();
            return [2];
        }
      });
    });
  };
  InternalDependencyContainer2.prototype.getRegistration = function (token) {
    if (this.isRegistered(token)) {
      return this._registry.get(token);
    }
    if (this.parent) {
      return this.parent.getRegistration(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.getAllRegistrations = function (
    token
  ) {
    if (this.isRegistered(token)) {
      return this._registry.getAll(token);
    }
    if (this.parent) {
      return this.parent.getAllRegistrations(token);
    }
    return null;
  };
  InternalDependencyContainer2.prototype.construct = function (ctor, context) {
    var _this = this;
    if (ctor instanceof DelayedConstructor) {
      return ctor.createProxy(function (target) {
        return _this.resolve(target, context);
      });
    }
    var instance2 = (function () {
      var paramInfo = typeInfo.get(ctor);
      if (!paramInfo || paramInfo.length === 0) {
        if (ctor.length === 0) {
          return new ctor();
        } else {
          throw new Error('TypeInfo not known for "' + ctor.name + '"');
        }
      }
      var params = paramInfo.map(_this.resolveParams(context, ctor));
      return new (ctor.bind.apply(ctor, __spread([void 0], params)))();
    })();
    if (isDisposable(instance2)) {
      this.disposables.add(instance2);
    }
    return instance2;
  };
  InternalDependencyContainer2.prototype.resolveParams = function (
    context,
    ctor
  ) {
    var _this = this;
    return function (param, idx) {
      var _a2, _b2, _c2;
      try {
        if (isTokenDescriptor(param)) {
          if (isTransformDescriptor(param)) {
            return param.multiple
              ? (_a2 = _this.resolve(param.transform)).transform.apply(
                  _a2,
                  __spread(
                    [
                      _this.resolveAll(
                        param.token,
                        new ResolutionContext(),
                        param.isOptional
                      ),
                    ],
                    param.transformArgs
                  )
                )
              : (_b2 = _this.resolve(param.transform)).transform.apply(
                  _b2,
                  __spread(
                    [_this.resolve(param.token, context, param.isOptional)],
                    param.transformArgs
                  )
                );
          } else {
            return param.multiple
              ? _this.resolveAll(
                  param.token,
                  new ResolutionContext(),
                  param.isOptional
                )
              : _this.resolve(param.token, context, param.isOptional);
          }
        } else if (isTransformDescriptor(param)) {
          return (_c2 = _this.resolve(
            param.transform,
            context
          )).transform.apply(
            _c2,
            __spread([_this.resolve(param.token, context)], param.transformArgs)
          );
        }
        return _this.resolve(param, context);
      } catch (e) {
        throw new Error(formatErrorCtor(ctor, idx, e));
      }
    };
  };
  InternalDependencyContainer2.prototype.ensureNotDisposed = function () {
    if (this.disposed) {
      throw new Error(
        "This container has been disposed, you cannot interact with a disposed container"
      );
    }
  };
  return InternalDependencyContainer2;
})();
var instance = new InternalDependencyContainer();
function injectable(options) {
  return function (target) {
    typeInfo.set(target, getParamInfo(target));
  };
}
function singleton() {
  return function (target) {
    injectable()(target);
    instance.registerSingleton(target);
  };
}
if (typeof Reflect === "undefined" || !Reflect.getMetadata) {
  throw new Error(
    `tsyringe requires a reflect polyfill. Please add 'import "reflect-metadata"' to the top of your entry point.`
  );
}
var client = { exports: {} };
var bufferUtil = { exports: {} };
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const BINARY_TYPES = ["nodebuffer", "arraybuffer", "fragments"];
  const hasBlob = typeof Blob !== "undefined";
  if (hasBlob) BINARY_TYPES.push("blob");
  constants = {
    BINARY_TYPES,
    EMPTY_BUFFER: Buffer.alloc(0),
    GUID: "258EAFA5-E914-47DA-95CA-C5AB0DC85B11",
    hasBlob,
    kForOnEventAttribute: Symbol("kIsForOnEventAttribute"),
    kListener: Symbol("kListener"),
    kStatusCode: Symbol("status-code"),
    kWebSocket: Symbol("websocket"),
    NOOP: () => {},
  };
  return constants;
}
var hasRequiredBufferUtil;
function requireBufferUtil() {
  if (hasRequiredBufferUtil) return bufferUtil.exports;
  hasRequiredBufferUtil = 1;
  const { EMPTY_BUFFER } = requireConstants();
  const FastBuffer = Buffer[Symbol.species];
  function concat(list, totalLength) {
    if (list.length === 0) return EMPTY_BUFFER;
    if (list.length === 1) return list[0];
    const target = Buffer.allocUnsafe(totalLength);
    let offset = 0;
    for (let i = 0; i < list.length; i++) {
      const buf = list[i];
      target.set(buf, offset);
      offset += buf.length;
    }
    if (offset < totalLength) {
      return new FastBuffer(target.buffer, target.byteOffset, offset);
    }
    return target;
  }
  function _mask(source, mask, output, offset, length) {
    for (let i = 0; i < length; i++) {
      output[offset + i] = source[i] ^ mask[i & 3];
    }
  }
  function _unmask(buffer, mask) {
    for (let i = 0; i < buffer.length; i++) {
      buffer[i] ^= mask[i & 3];
    }
  }
  function toArrayBuffer(buf) {
    if (buf.length === buf.buffer.byteLength) {
      return buf.buffer;
    }
    return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.length);
  }
  function toBuffer(data) {
    toBuffer.readOnly = true;
    if (Buffer.isBuffer(data)) return data;
    let buf;
    if (data instanceof ArrayBuffer) {
      buf = new FastBuffer(data);
    } else if (ArrayBuffer.isView(data)) {
      buf = new FastBuffer(data.buffer, data.byteOffset, data.byteLength);
    } else {
      buf = Buffer.from(data);
      toBuffer.readOnly = false;
    }
    return buf;
  }
  bufferUtil.exports = {
    concat,
    mask: _mask,
    toArrayBuffer,
    toBuffer,
    unmask: _unmask,
  };
  if (!process.env.WS_NO_BUFFER_UTIL) {
    try {
      const bufferUtil$1 = require("bufferutil");
      bufferUtil.exports.mask = function (
        source,
        mask,
        output,
        offset,
        length
      ) {
        if (length < 48) _mask(source, mask, output, offset, length);
        else bufferUtil$1.mask(source, mask, output, offset, length);
      };
      bufferUtil.exports.unmask = function (buffer, mask) {
        if (buffer.length < 32) _unmask(buffer, mask);
        else bufferUtil$1.unmask(buffer, mask);
      };
    } catch (e) {}
  }
  return bufferUtil.exports;
}
var limiter;
var hasRequiredLimiter;
function requireLimiter() {
  if (hasRequiredLimiter) return limiter;
  hasRequiredLimiter = 1;
  const kDone = Symbol("kDone");
  const kRun = Symbol("kRun");
  class Limiter {
    /**
     * Creates a new `Limiter`.
     *
     * @param {Number} [concurrency=Infinity] The maximum number of jobs allowed
     *     to run concurrently
     */
    constructor(concurrency) {
      this[kDone] = () => {
        this.pending--;
        this[kRun]();
      };
      this.concurrency = concurrency || Infinity;
      this.jobs = [];
      this.pending = 0;
    }
    /**
     * Adds a job to the queue.
     *
     * @param {Function} job The job to run
     * @public
     */
    add(job) {
      this.jobs.push(job);
      this[kRun]();
    }
    /**
     * Removes a job from the queue and runs it if possible.
     *
     * @private
     */
    [kRun]() {
      if (this.pending === this.concurrency) return;
      if (this.jobs.length) {
        const job = this.jobs.shift();
        this.pending++;
        job(this[kDone]);
      }
    }
  }
  limiter = Limiter;
  return limiter;
}
var permessageDeflate;
var hasRequiredPermessageDeflate;
function requirePermessageDeflate() {
  if (hasRequiredPermessageDeflate) return permessageDeflate;
  hasRequiredPermessageDeflate = 1;
  const zlib$1 = zlib;
  const bufferUtil2 = requireBufferUtil();
  const Limiter = requireLimiter();
  const { kStatusCode } = requireConstants();
  const FastBuffer = Buffer[Symbol.species];
  const TRAILER = Buffer.from([0, 0, 255, 255]);
  const kPerMessageDeflate = Symbol("permessage-deflate");
  const kTotalLength = Symbol("total-length");
  const kCallback = Symbol("callback");
  const kBuffers = Symbol("buffers");
  const kError = Symbol("error");
  let zlibLimiter;
  class PerMessageDeflate {
    /**
     * Creates a PerMessageDeflate instance.
     *
     * @param {Object} [options] Configuration options
     * @param {(Boolean|Number)} [options.clientMaxWindowBits] Advertise support
     *     for, or request, a custom client window size
     * @param {Boolean} [options.clientNoContextTakeover=false] Advertise/
     *     acknowledge disabling of client context takeover
     * @param {Number} [options.concurrencyLimit=10] The number of concurrent
     *     calls to zlib
     * @param {(Boolean|Number)} [options.serverMaxWindowBits] Request/confirm the
     *     use of a custom server window size
     * @param {Boolean} [options.serverNoContextTakeover=false] Request/accept
     *     disabling of server context takeover
     * @param {Number} [options.threshold=1024] Size (in bytes) below which
     *     messages should not be compressed if context takeover is disabled
     * @param {Object} [options.zlibDeflateOptions] Options to pass to zlib on
     *     deflate
     * @param {Object} [options.zlibInflateOptions] Options to pass to zlib on
     *     inflate
     * @param {Boolean} [isServer=false] Create the instance in either server or
     *     client mode
     * @param {Number} [maxPayload=0] The maximum allowed message length
     */
    constructor(options, isServer, maxPayload) {
      this._maxPayload = maxPayload | 0;
      this._options = options || {};
      this._threshold =
        this._options.threshold !== void 0 ? this._options.threshold : 1024;
      this._isServer = !!isServer;
      this._deflate = null;
      this._inflate = null;
      this.params = null;
      if (!zlibLimiter) {
        const concurrency =
          this._options.concurrencyLimit !== void 0
            ? this._options.concurrencyLimit
            : 10;
        zlibLimiter = new Limiter(concurrency);
      }
    }
    /**
     * @type {String}
     */
    static get extensionName() {
      return "permessage-deflate";
    }
    /**
     * Create an extension negotiation offer.
     *
     * @return {Object} Extension parameters
     * @public
     */
    offer() {
      const params = {};
      if (this._options.serverNoContextTakeover) {
        params.server_no_context_takeover = true;
      }
      if (this._options.clientNoContextTakeover) {
        params.client_no_context_takeover = true;
      }
      if (this._options.serverMaxWindowBits) {
        params.server_max_window_bits = this._options.serverMaxWindowBits;
      }
      if (this._options.clientMaxWindowBits) {
        params.client_max_window_bits = this._options.clientMaxWindowBits;
      } else if (this._options.clientMaxWindowBits == null) {
        params.client_max_window_bits = true;
      }
      return params;
    }
    /**
     * Accept an extension negotiation offer/response.
     *
     * @param {Array} configurations The extension negotiation offers/reponse
     * @return {Object} Accepted configuration
     * @public
     */
    accept(configurations) {
      configurations = this.normalizeParams(configurations);
      this.params = this._isServer
        ? this.acceptAsServer(configurations)
        : this.acceptAsClient(configurations);
      return this.params;
    }
    /**
     * Releases all resources used by the extension.
     *
     * @public
     */
    cleanup() {
      if (this._inflate) {
        this._inflate.close();
        this._inflate = null;
      }
      if (this._deflate) {
        const callback = this._deflate[kCallback];
        this._deflate.close();
        this._deflate = null;
        if (callback) {
          callback(
            new Error(
              "The deflate stream was closed while data was being processed"
            )
          );
        }
      }
    }
    /**
     *  Accept an extension negotiation offer.
     *
     * @param {Array} offers The extension negotiation offers
     * @return {Object} Accepted configuration
     * @private
     */
    acceptAsServer(offers) {
      const opts = this._options;
      const accepted = offers.find((params) => {
        if (
          (opts.serverNoContextTakeover === false &&
            params.server_no_context_takeover) ||
          (params.server_max_window_bits &&
            (opts.serverMaxWindowBits === false ||
              (typeof opts.serverMaxWindowBits === "number" &&
                opts.serverMaxWindowBits > params.server_max_window_bits))) ||
          (typeof opts.clientMaxWindowBits === "number" &&
            !params.client_max_window_bits)
        ) {
          return false;
        }
        return true;
      });
      if (!accepted) {
        throw new Error("None of the extension offers can be accepted");
      }
      if (opts.serverNoContextTakeover) {
        accepted.server_no_context_takeover = true;
      }
      if (opts.clientNoContextTakeover) {
        accepted.client_no_context_takeover = true;
      }
      if (typeof opts.serverMaxWindowBits === "number") {
        accepted.server_max_window_bits = opts.serverMaxWindowBits;
      }
      if (typeof opts.clientMaxWindowBits === "number") {
        accepted.client_max_window_bits = opts.clientMaxWindowBits;
      } else if (
        accepted.client_max_window_bits === true ||
        opts.clientMaxWindowBits === false
      ) {
        delete accepted.client_max_window_bits;
      }
      return accepted;
    }
    /**
     * Accept the extension negotiation response.
     *
     * @param {Array} response The extension negotiation response
     * @return {Object} Accepted configuration
     * @private
     */
    acceptAsClient(response) {
      const params = response[0];
      if (
        this._options.clientNoContextTakeover === false &&
        params.client_no_context_takeover
      ) {
        throw new Error('Unexpected parameter "client_no_context_takeover"');
      }
      if (!params.client_max_window_bits) {
        if (typeof this._options.clientMaxWindowBits === "number") {
          params.client_max_window_bits = this._options.clientMaxWindowBits;
        }
      } else if (
        this._options.clientMaxWindowBits === false ||
        (typeof this._options.clientMaxWindowBits === "number" &&
          params.client_max_window_bits > this._options.clientMaxWindowBits)
      ) {
        throw new Error(
          'Unexpected or invalid parameter "client_max_window_bits"'
        );
      }
      return params;
    }
    /**
     * Normalize parameters.
     *
     * @param {Array} configurations The extension negotiation offers/reponse
     * @return {Array} The offers/response with normalized parameters
     * @private
     */
    normalizeParams(configurations) {
      configurations.forEach((params) => {
        Object.keys(params).forEach((key) => {
          let value = params[key];
          if (value.length > 1) {
            throw new Error(`Parameter "${key}" must have only a single value`);
          }
          value = value[0];
          if (key === "client_max_window_bits") {
            if (value !== true) {
              const num = +value;
              if (!Number.isInteger(num) || num < 8 || num > 15) {
                throw new TypeError(
                  `Invalid value for parameter "${key}": ${value}`
                );
              }
              value = num;
            } else if (!this._isServer) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
          } else if (key === "server_max_window_bits") {
            const num = +value;
            if (!Number.isInteger(num) || num < 8 || num > 15) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
            value = num;
          } else if (
            key === "client_no_context_takeover" ||
            key === "server_no_context_takeover"
          ) {
            if (value !== true) {
              throw new TypeError(
                `Invalid value for parameter "${key}": ${value}`
              );
            }
          } else {
            throw new Error(`Unknown parameter "${key}"`);
          }
          params[key] = value;
        });
      });
      return configurations;
    }
    /**
     * Decompress data. Concurrency limited.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */
    decompress(data, fin, callback) {
      zlibLimiter.add((done) => {
        this._decompress(data, fin, (err, result) => {
          done();
          callback(err, result);
        });
      });
    }
    /**
     * Compress data. Concurrency limited.
     *
     * @param {(Buffer|String)} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @public
     */
    compress(data, fin, callback) {
      zlibLimiter.add((done) => {
        this._compress(data, fin, (err, result) => {
          done();
          callback(err, result);
        });
      });
    }
    /**
     * Decompress data.
     *
     * @param {Buffer} data Compressed data
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */
    _decompress(data, fin, callback) {
      const endpoint = this._isServer ? "client" : "server";
      if (!this._inflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits =
          typeof this.params[key] !== "number"
            ? zlib$1.Z_DEFAULT_WINDOWBITS
            : this.params[key];
        this._inflate = zlib$1.createInflateRaw({
          ...this._options.zlibInflateOptions,
          windowBits,
        });
        this._inflate[kPerMessageDeflate] = this;
        this._inflate[kTotalLength] = 0;
        this._inflate[kBuffers] = [];
        this._inflate.on("error", inflateOnError);
        this._inflate.on("data", inflateOnData);
      }
      this._inflate[kCallback] = callback;
      this._inflate.write(data);
      if (fin) this._inflate.write(TRAILER);
      this._inflate.flush(() => {
        const err = this._inflate[kError];
        if (err) {
          this._inflate.close();
          this._inflate = null;
          callback(err);
          return;
        }
        const data2 = bufferUtil2.concat(
          this._inflate[kBuffers],
          this._inflate[kTotalLength]
        );
        if (this._inflate._readableState.endEmitted) {
          this._inflate.close();
          this._inflate = null;
        } else {
          this._inflate[kTotalLength] = 0;
          this._inflate[kBuffers] = [];
          if (fin && this.params[`${endpoint}_no_context_takeover`]) {
            this._inflate.reset();
          }
        }
        callback(null, data2);
      });
    }
    /**
     * Compress data.
     *
     * @param {(Buffer|String)} data Data to compress
     * @param {Boolean} fin Specifies whether or not this is the last fragment
     * @param {Function} callback Callback
     * @private
     */
    _compress(data, fin, callback) {
      const endpoint = this._isServer ? "server" : "client";
      if (!this._deflate) {
        const key = `${endpoint}_max_window_bits`;
        const windowBits =
          typeof this.params[key] !== "number"
            ? zlib$1.Z_DEFAULT_WINDOWBITS
            : this.params[key];
        this._deflate = zlib$1.createDeflateRaw({
          ...this._options.zlibDeflateOptions,
          windowBits,
        });
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        this._deflate.on("data", deflateOnData);
      }
      this._deflate[kCallback] = callback;
      this._deflate.write(data);
      this._deflate.flush(zlib$1.Z_SYNC_FLUSH, () => {
        if (!this._deflate) {
          return;
        }
        let data2 = bufferUtil2.concat(
          this._deflate[kBuffers],
          this._deflate[kTotalLength]
        );
        if (fin) {
          data2 = new FastBuffer(
            data2.buffer,
            data2.byteOffset,
            data2.length - 4
          );
        }
        this._deflate[kCallback] = null;
        this._deflate[kTotalLength] = 0;
        this._deflate[kBuffers] = [];
        if (fin && this.params[`${endpoint}_no_context_takeover`]) {
          this._deflate.reset();
        }
        callback(null, data2);
      });
    }
  }
  permessageDeflate = PerMessageDeflate;
  function deflateOnData(chunk) {
    this[kBuffers].push(chunk);
    this[kTotalLength] += chunk.length;
  }
  function inflateOnData(chunk) {
    this[kTotalLength] += chunk.length;
    if (
      this[kPerMessageDeflate]._maxPayload < 1 ||
      this[kTotalLength] <= this[kPerMessageDeflate]._maxPayload
    ) {
      this[kBuffers].push(chunk);
      return;
    }
    this[kError] = new RangeError("Max payload size exceeded");
    this[kError].code = "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH";
    this[kError][kStatusCode] = 1009;
    this.removeListener("data", inflateOnData);
    this.reset();
  }
  function inflateOnError(err) {
    this[kPerMessageDeflate]._inflate = null;
    if (this[kError]) {
      this[kCallback](this[kError]);
      return;
    }
    err[kStatusCode] = 1007;
    this[kCallback](err);
  }
  return permessageDeflate;
}
var validation = { exports: {} };
var hasRequiredValidation;
function requireValidation() {
  if (hasRequiredValidation) return validation.exports;
  hasRequiredValidation = 1;
  const { isUtf8 } = require$$0$2;
  const { hasBlob } = requireConstants();
  const tokenChars = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 0 - 15
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    // 16 - 31
    0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 0,
    // 32 - 47
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    // 48 - 63
    0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    // 64 - 79
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1,
    // 80 - 95
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    // 96 - 111
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0,
    // 112 - 127
  ];
  function isValidStatusCode(code) {
    return (
      (code >= 1e3 &&
        code <= 1014 &&
        code !== 1004 &&
        code !== 1005 &&
        code !== 1006) ||
      (code >= 3e3 && code <= 4999)
    );
  }
  function _isValidUTF8(buf) {
    const len = buf.length;
    let i = 0;
    while (i < len) {
      if ((buf[i] & 128) === 0) {
        i++;
      } else if ((buf[i] & 224) === 192) {
        if (
          i + 1 === len ||
          (buf[i + 1] & 192) !== 128 ||
          (buf[i] & 254) === 192
        ) {
          return false;
        }
        i += 2;
      } else if ((buf[i] & 240) === 224) {
        if (
          i + 2 >= len ||
          (buf[i + 1] & 192) !== 128 ||
          (buf[i + 2] & 192) !== 128 ||
          (buf[i] === 224 && (buf[i + 1] & 224) === 128) || // Overlong
          (buf[i] === 237 && (buf[i + 1] & 224) === 160)
        ) {
          return false;
        }
        i += 3;
      } else if ((buf[i] & 248) === 240) {
        if (
          i + 3 >= len ||
          (buf[i + 1] & 192) !== 128 ||
          (buf[i + 2] & 192) !== 128 ||
          (buf[i + 3] & 192) !== 128 ||
          (buf[i] === 240 && (buf[i + 1] & 240) === 128) || // Overlong
          (buf[i] === 244 && buf[i + 1] > 143) ||
          buf[i] > 244
        ) {
          return false;
        }
        i += 4;
      } else {
        return false;
      }
    }
    return true;
  }
  function isBlob2(value) {
    return (
      hasBlob &&
      typeof value === "object" &&
      typeof value.arrayBuffer === "function" &&
      typeof value.type === "string" &&
      typeof value.stream === "function" &&
      (value[Symbol.toStringTag] === "Blob" ||
        value[Symbol.toStringTag] === "File")
    );
  }
  validation.exports = {
    isBlob: isBlob2,
    isValidStatusCode,
    isValidUTF8: _isValidUTF8,
    tokenChars,
  };
  if (isUtf8) {
    validation.exports.isValidUTF8 = function (buf) {
      return buf.length < 24 ? _isValidUTF8(buf) : isUtf8(buf);
    };
  } else if (!process.env.WS_NO_UTF_8_VALIDATE) {
    try {
      const isValidUTF8 = require("utf-8-validate");
      validation.exports.isValidUTF8 = function (buf) {
        return buf.length < 32 ? _isValidUTF8(buf) : isValidUTF8(buf);
      };
    } catch (e) {}
  }
  return validation.exports;
}
var receiver;
var hasRequiredReceiver;
function requireReceiver() {
  if (hasRequiredReceiver) return receiver;
  hasRequiredReceiver = 1;
  const { Writable } = Stream;
  const PerMessageDeflate = requirePermessageDeflate();
  const { BINARY_TYPES, EMPTY_BUFFER, kStatusCode, kWebSocket } =
    requireConstants();
  const { concat, toArrayBuffer, unmask } = requireBufferUtil();
  const { isValidStatusCode, isValidUTF8 } = requireValidation();
  const FastBuffer = Buffer[Symbol.species];
  const GET_INFO = 0;
  const GET_PAYLOAD_LENGTH_16 = 1;
  const GET_PAYLOAD_LENGTH_64 = 2;
  const GET_MASK = 3;
  const GET_DATA = 4;
  const INFLATING = 5;
  const DEFER_EVENT = 6;
  class Receiver extends Writable {
    /**
     * Creates a Receiver instance.
     *
     * @param {Object} [options] Options object
     * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
     *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
     *     multiple times in the same tick
     * @param {String} [options.binaryType=nodebuffer] The type for binary data
     * @param {Object} [options.extensions] An object containing the negotiated
     *     extensions
     * @param {Boolean} [options.isServer=false] Specifies whether to operate in
     *     client or server mode
     * @param {Number} [options.maxPayload=0] The maximum allowed message length
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     */
    constructor(options = {}) {
      super();
      this._allowSynchronousEvents =
        options.allowSynchronousEvents !== void 0
          ? options.allowSynchronousEvents
          : true;
      this._binaryType = options.binaryType || BINARY_TYPES[0];
      this._extensions = options.extensions || {};
      this._isServer = !!options.isServer;
      this._maxPayload = options.maxPayload | 0;
      this._skipUTF8Validation = !!options.skipUTF8Validation;
      this[kWebSocket] = void 0;
      this._bufferedBytes = 0;
      this._buffers = [];
      this._compressed = false;
      this._payloadLength = 0;
      this._mask = void 0;
      this._fragmented = 0;
      this._masked = false;
      this._fin = false;
      this._opcode = 0;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragments = [];
      this._errored = false;
      this._loop = false;
      this._state = GET_INFO;
    }
    /**
     * Implements `Writable.prototype._write()`.
     *
     * @param {Buffer} chunk The chunk of data to write
     * @param {String} encoding The character encoding of `chunk`
     * @param {Function} cb Callback
     * @private
     */
    _write(chunk, encoding, cb) {
      if (this._opcode === 8 && this._state == GET_INFO) return cb();
      this._bufferedBytes += chunk.length;
      this._buffers.push(chunk);
      this.startLoop(cb);
    }
    /**
     * Consumes `n` bytes from the buffered data.
     *
     * @param {Number} n The number of bytes to consume
     * @return {Buffer} The consumed bytes
     * @private
     */
    consume(n) {
      this._bufferedBytes -= n;
      if (n === this._buffers[0].length) return this._buffers.shift();
      if (n < this._buffers[0].length) {
        const buf = this._buffers[0];
        this._buffers[0] = new FastBuffer(
          buf.buffer,
          buf.byteOffset + n,
          buf.length - n
        );
        return new FastBuffer(buf.buffer, buf.byteOffset, n);
      }
      const dst = Buffer.allocUnsafe(n);
      do {
        const buf = this._buffers[0];
        const offset = dst.length - n;
        if (n >= buf.length) {
          dst.set(this._buffers.shift(), offset);
        } else {
          dst.set(new Uint8Array(buf.buffer, buf.byteOffset, n), offset);
          this._buffers[0] = new FastBuffer(
            buf.buffer,
            buf.byteOffset + n,
            buf.length - n
          );
        }
        n -= buf.length;
      } while (n > 0);
      return dst;
    }
    /**
     * Starts the parsing loop.
     *
     * @param {Function} cb Callback
     * @private
     */
    startLoop(cb) {
      this._loop = true;
      do {
        switch (this._state) {
          case GET_INFO:
            this.getInfo(cb);
            break;
          case GET_PAYLOAD_LENGTH_16:
            this.getPayloadLength16(cb);
            break;
          case GET_PAYLOAD_LENGTH_64:
            this.getPayloadLength64(cb);
            break;
          case GET_MASK:
            this.getMask();
            break;
          case GET_DATA:
            this.getData(cb);
            break;
          case INFLATING:
          case DEFER_EVENT:
            this._loop = false;
            return;
        }
      } while (this._loop);
      if (!this._errored) cb();
    }
    /**
     * Reads the first two bytes of a frame.
     *
     * @param {Function} cb Callback
     * @private
     */
    getInfo(cb) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      const buf = this.consume(2);
      if ((buf[0] & 48) !== 0) {
        const error = this.createError(
          RangeError,
          "RSV2 and RSV3 must be clear",
          true,
          1002,
          "WS_ERR_UNEXPECTED_RSV_2_3"
        );
        cb(error);
        return;
      }
      const compressed = (buf[0] & 64) === 64;
      if (compressed && !this._extensions[PerMessageDeflate.extensionName]) {
        const error = this.createError(
          RangeError,
          "RSV1 must be clear",
          true,
          1002,
          "WS_ERR_UNEXPECTED_RSV_1"
        );
        cb(error);
        return;
      }
      this._fin = (buf[0] & 128) === 128;
      this._opcode = buf[0] & 15;
      this._payloadLength = buf[1] & 127;
      if (this._opcode === 0) {
        if (compressed) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        if (!this._fragmented) {
          const error = this.createError(
            RangeError,
            "invalid opcode 0",
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        this._opcode = this._fragmented;
      } else if (this._opcode === 1 || this._opcode === 2) {
        if (this._fragmented) {
          const error = this.createError(
            RangeError,
            `invalid opcode ${this._opcode}`,
            true,
            1002,
            "WS_ERR_INVALID_OPCODE"
          );
          cb(error);
          return;
        }
        this._compressed = compressed;
      } else if (this._opcode > 7 && this._opcode < 11) {
        if (!this._fin) {
          const error = this.createError(
            RangeError,
            "FIN must be set",
            true,
            1002,
            "WS_ERR_EXPECTED_FIN"
          );
          cb(error);
          return;
        }
        if (compressed) {
          const error = this.createError(
            RangeError,
            "RSV1 must be clear",
            true,
            1002,
            "WS_ERR_UNEXPECTED_RSV_1"
          );
          cb(error);
          return;
        }
        if (
          this._payloadLength > 125 ||
          (this._opcode === 8 && this._payloadLength === 1)
        ) {
          const error = this.createError(
            RangeError,
            `invalid payload length ${this._payloadLength}`,
            true,
            1002,
            "WS_ERR_INVALID_CONTROL_PAYLOAD_LENGTH"
          );
          cb(error);
          return;
        }
      } else {
        const error = this.createError(
          RangeError,
          `invalid opcode ${this._opcode}`,
          true,
          1002,
          "WS_ERR_INVALID_OPCODE"
        );
        cb(error);
        return;
      }
      if (!this._fin && !this._fragmented) this._fragmented = this._opcode;
      this._masked = (buf[1] & 128) === 128;
      if (this._isServer) {
        if (!this._masked) {
          const error = this.createError(
            RangeError,
            "MASK must be set",
            true,
            1002,
            "WS_ERR_EXPECTED_MASK"
          );
          cb(error);
          return;
        }
      } else if (this._masked) {
        const error = this.createError(
          RangeError,
          "MASK must be clear",
          true,
          1002,
          "WS_ERR_UNEXPECTED_MASK"
        );
        cb(error);
        return;
      }
      if (this._payloadLength === 126) this._state = GET_PAYLOAD_LENGTH_16;
      else if (this._payloadLength === 127) this._state = GET_PAYLOAD_LENGTH_64;
      else this.haveLength(cb);
    }
    /**
     * Gets extended payload length (7+16).
     *
     * @param {Function} cb Callback
     * @private
     */
    getPayloadLength16(cb) {
      if (this._bufferedBytes < 2) {
        this._loop = false;
        return;
      }
      this._payloadLength = this.consume(2).readUInt16BE(0);
      this.haveLength(cb);
    }
    /**
     * Gets extended payload length (7+64).
     *
     * @param {Function} cb Callback
     * @private
     */
    getPayloadLength64(cb) {
      if (this._bufferedBytes < 8) {
        this._loop = false;
        return;
      }
      const buf = this.consume(8);
      const num = buf.readUInt32BE(0);
      if (num > Math.pow(2, 53 - 32) - 1) {
        const error = this.createError(
          RangeError,
          "Unsupported WebSocket frame: payload length > 2^53 - 1",
          false,
          1009,
          "WS_ERR_UNSUPPORTED_DATA_PAYLOAD_LENGTH"
        );
        cb(error);
        return;
      }
      this._payloadLength = num * Math.pow(2, 32) + buf.readUInt32BE(4);
      this.haveLength(cb);
    }
    /**
     * Payload length has been read.
     *
     * @param {Function} cb Callback
     * @private
     */
    haveLength(cb) {
      if (this._payloadLength && this._opcode < 8) {
        this._totalPayloadLength += this._payloadLength;
        if (
          this._totalPayloadLength > this._maxPayload &&
          this._maxPayload > 0
        ) {
          const error = this.createError(
            RangeError,
            "Max payload size exceeded",
            false,
            1009,
            "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
          );
          cb(error);
          return;
        }
      }
      if (this._masked) this._state = GET_MASK;
      else this._state = GET_DATA;
    }
    /**
     * Reads mask bytes.
     *
     * @private
     */
    getMask() {
      if (this._bufferedBytes < 4) {
        this._loop = false;
        return;
      }
      this._mask = this.consume(4);
      this._state = GET_DATA;
    }
    /**
     * Reads data bytes.
     *
     * @param {Function} cb Callback
     * @private
     */
    getData(cb) {
      let data = EMPTY_BUFFER;
      if (this._payloadLength) {
        if (this._bufferedBytes < this._payloadLength) {
          this._loop = false;
          return;
        }
        data = this.consume(this._payloadLength);
        if (
          this._masked &&
          (this._mask[0] | this._mask[1] | this._mask[2] | this._mask[3]) !== 0
        ) {
          unmask(data, this._mask);
        }
      }
      if (this._opcode > 7) {
        this.controlMessage(data, cb);
        return;
      }
      if (this._compressed) {
        this._state = INFLATING;
        this.decompress(data, cb);
        return;
      }
      if (data.length) {
        this._messageLength = this._totalPayloadLength;
        this._fragments.push(data);
      }
      this.dataMessage(cb);
    }
    /**
     * Decompresses data.
     *
     * @param {Buffer} data Compressed data
     * @param {Function} cb Callback
     * @private
     */
    decompress(data, cb) {
      const perMessageDeflate =
        this._extensions[PerMessageDeflate.extensionName];
      perMessageDeflate.decompress(data, this._fin, (err, buf) => {
        if (err) return cb(err);
        if (buf.length) {
          this._messageLength += buf.length;
          if (this._messageLength > this._maxPayload && this._maxPayload > 0) {
            const error = this.createError(
              RangeError,
              "Max payload size exceeded",
              false,
              1009,
              "WS_ERR_UNSUPPORTED_MESSAGE_LENGTH"
            );
            cb(error);
            return;
          }
          this._fragments.push(buf);
        }
        this.dataMessage(cb);
        if (this._state === GET_INFO) this.startLoop(cb);
      });
    }
    /**
     * Handles a data message.
     *
     * @param {Function} cb Callback
     * @private
     */
    dataMessage(cb) {
      if (!this._fin) {
        this._state = GET_INFO;
        return;
      }
      const messageLength = this._messageLength;
      const fragments = this._fragments;
      this._totalPayloadLength = 0;
      this._messageLength = 0;
      this._fragmented = 0;
      this._fragments = [];
      if (this._opcode === 2) {
        let data;
        if (this._binaryType === "nodebuffer") {
          data = concat(fragments, messageLength);
        } else if (this._binaryType === "arraybuffer") {
          data = toArrayBuffer(concat(fragments, messageLength));
        } else if (this._binaryType === "blob") {
          data = new Blob(fragments);
        } else {
          data = fragments;
        }
        if (this._allowSynchronousEvents) {
          this.emit("message", data, true);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit("message", data, true);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      } else {
        const buf = concat(fragments, messageLength);
        if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
          const error = this.createError(
            Error,
            "invalid UTF-8 sequence",
            true,
            1007,
            "WS_ERR_INVALID_UTF8"
          );
          cb(error);
          return;
        }
        if (this._state === INFLATING || this._allowSynchronousEvents) {
          this.emit("message", buf, false);
          this._state = GET_INFO;
        } else {
          this._state = DEFER_EVENT;
          setImmediate(() => {
            this.emit("message", buf, false);
            this._state = GET_INFO;
            this.startLoop(cb);
          });
        }
      }
    }
    /**
     * Handles a control message.
     *
     * @param {Buffer} data Data to handle
     * @return {(Error|RangeError|undefined)} A possible error
     * @private
     */
    controlMessage(data, cb) {
      if (this._opcode === 8) {
        if (data.length === 0) {
          this._loop = false;
          this.emit("conclude", 1005, EMPTY_BUFFER);
          this.end();
        } else {
          const code = data.readUInt16BE(0);
          if (!isValidStatusCode(code)) {
            const error = this.createError(
              RangeError,
              `invalid status code ${code}`,
              true,
              1002,
              "WS_ERR_INVALID_CLOSE_CODE"
            );
            cb(error);
            return;
          }
          const buf = new FastBuffer(
            data.buffer,
            data.byteOffset + 2,
            data.length - 2
          );
          if (!this._skipUTF8Validation && !isValidUTF8(buf)) {
            const error = this.createError(
              Error,
              "invalid UTF-8 sequence",
              true,
              1007,
              "WS_ERR_INVALID_UTF8"
            );
            cb(error);
            return;
          }
          this._loop = false;
          this.emit("conclude", code, buf);
          this.end();
        }
        this._state = GET_INFO;
        return;
      }
      if (this._allowSynchronousEvents) {
        this.emit(this._opcode === 9 ? "ping" : "pong", data);
        this._state = GET_INFO;
      } else {
        this._state = DEFER_EVENT;
        setImmediate(() => {
          this.emit(this._opcode === 9 ? "ping" : "pong", data);
          this._state = GET_INFO;
          this.startLoop(cb);
        });
      }
    }
    /**
     * Builds an error object.
     *
     * @param {function(new:Error|RangeError)} ErrorCtor The error constructor
     * @param {String} message The error message
     * @param {Boolean} prefix Specifies whether or not to add a default prefix to
     *     `message`
     * @param {Number} statusCode The status code
     * @param {String} errorCode The exposed error code
     * @return {(Error|RangeError)} The error
     * @private
     */
    createError(ErrorCtor, message, prefix, statusCode, errorCode) {
      this._loop = false;
      this._errored = true;
      const err = new ErrorCtor(
        prefix ? `Invalid WebSocket frame: ${message}` : message
      );
      Error.captureStackTrace(err, this.createError);
      err.code = errorCode;
      err[kStatusCode] = statusCode;
      return err;
    }
  }
  receiver = Receiver;
  return receiver;
}
var sender;
var hasRequiredSender;
function requireSender() {
  if (hasRequiredSender) return sender;
  hasRequiredSender = 1;
  const { Duplex } = Stream;
  const { randomFillSync } = require$$1$4;
  const PerMessageDeflate = requirePermessageDeflate();
  const { EMPTY_BUFFER, kWebSocket, NOOP } = requireConstants();
  const { isBlob: isBlob2, isValidStatusCode } = requireValidation();
  const { mask: applyMask, toBuffer } = requireBufferUtil();
  const kByteLength = Symbol("kByteLength");
  const maskBuffer = Buffer.alloc(4);
  const RANDOM_POOL_SIZE = 8 * 1024;
  let randomPool;
  let randomPoolPointer = RANDOM_POOL_SIZE;
  const DEFAULT = 0;
  const DEFLATING = 1;
  const GET_BLOB_DATA = 2;
  class Sender {
    /**
     * Creates a Sender instance.
     *
     * @param {Duplex} socket The connection socket
     * @param {Object} [extensions] An object containing the negotiated extensions
     * @param {Function} [generateMask] The function used to generate the masking
     *     key
     */
    constructor(socket, extensions, generateMask) {
      this._extensions = extensions || {};
      if (generateMask) {
        this._generateMask = generateMask;
        this._maskBuffer = Buffer.alloc(4);
      }
      this._socket = socket;
      this._firstFragment = true;
      this._compress = false;
      this._bufferedBytes = 0;
      this._queue = [];
      this._state = DEFAULT;
      this.onerror = NOOP;
      this[kWebSocket] = void 0;
    }
    /**
     * Frames a piece of data according to the HyBi WebSocket protocol.
     *
     * @param {(Buffer|String)} data The data to frame
     * @param {Object} options Options object
     * @param {Boolean} [options.fin=false] Specifies whether or not to set the
     *     FIN bit
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
     *     key
     * @param {Number} options.opcode The opcode
     * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
     *     modified
     * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
     *     RSV1 bit
     * @return {(Buffer|String)[]} The framed data
     * @public
     */
    static frame(data, options) {
      let mask;
      let merge = false;
      let offset = 2;
      let skipMasking = false;
      if (options.mask) {
        mask = options.maskBuffer || maskBuffer;
        if (options.generateMask) {
          options.generateMask(mask);
        } else {
          if (randomPoolPointer === RANDOM_POOL_SIZE) {
            if (randomPool === void 0) {
              randomPool = Buffer.alloc(RANDOM_POOL_SIZE);
            }
            randomFillSync(randomPool, 0, RANDOM_POOL_SIZE);
            randomPoolPointer = 0;
          }
          mask[0] = randomPool[randomPoolPointer++];
          mask[1] = randomPool[randomPoolPointer++];
          mask[2] = randomPool[randomPoolPointer++];
          mask[3] = randomPool[randomPoolPointer++];
        }
        skipMasking = (mask[0] | mask[1] | mask[2] | mask[3]) === 0;
        offset = 6;
      }
      let dataLength;
      if (typeof data === "string") {
        if ((!options.mask || skipMasking) && options[kByteLength] !== void 0) {
          dataLength = options[kByteLength];
        } else {
          data = Buffer.from(data);
          dataLength = data.length;
        }
      } else {
        dataLength = data.length;
        merge = options.mask && options.readOnly && !skipMasking;
      }
      let payloadLength = dataLength;
      if (dataLength >= 65536) {
        offset += 8;
        payloadLength = 127;
      } else if (dataLength > 125) {
        offset += 2;
        payloadLength = 126;
      }
      const target = Buffer.allocUnsafe(merge ? dataLength + offset : offset);
      target[0] = options.fin ? options.opcode | 128 : options.opcode;
      if (options.rsv1) target[0] |= 64;
      target[1] = payloadLength;
      if (payloadLength === 126) {
        target.writeUInt16BE(dataLength, 2);
      } else if (payloadLength === 127) {
        target[2] = target[3] = 0;
        target.writeUIntBE(dataLength, 4, 6);
      }
      if (!options.mask) return [target, data];
      target[1] |= 128;
      target[offset - 4] = mask[0];
      target[offset - 3] = mask[1];
      target[offset - 2] = mask[2];
      target[offset - 1] = mask[3];
      if (skipMasking) return [target, data];
      if (merge) {
        applyMask(data, mask, target, offset, dataLength);
        return [target];
      }
      applyMask(data, mask, data, 0, dataLength);
      return [target, data];
    }
    /**
     * Sends a close message to the other peer.
     *
     * @param {Number} [code] The status code component of the body
     * @param {(String|Buffer)} [data] The message component of the body
     * @param {Boolean} [mask=false] Specifies whether or not to mask the message
     * @param {Function} [cb] Callback
     * @public
     */
    close(code, data, mask, cb) {
      let buf;
      if (code === void 0) {
        buf = EMPTY_BUFFER;
      } else if (typeof code !== "number" || !isValidStatusCode(code)) {
        throw new TypeError("First argument must be a valid error code number");
      } else if (data === void 0 || !data.length) {
        buf = Buffer.allocUnsafe(2);
        buf.writeUInt16BE(code, 0);
      } else {
        const length = Buffer.byteLength(data);
        if (length > 123) {
          throw new RangeError(
            "The message must not be greater than 123 bytes"
          );
        }
        buf = Buffer.allocUnsafe(2 + length);
        buf.writeUInt16BE(code, 0);
        if (typeof data === "string") {
          buf.write(data, 2);
        } else {
          buf.set(data, 2);
        }
      }
      const options = {
        [kByteLength]: buf.length,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 8,
        readOnly: false,
        rsv1: false,
      };
      if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, buf, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(buf, options), cb);
      }
    }
    /**
     * Sends a ping message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback
     * @public
     */
    ping(data, mask, cb) {
      let byteLength;
      let readOnly;
      if (typeof data === "string") {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else if (isBlob2(data)) {
        byteLength = data.size;
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }
      if (byteLength > 125) {
        throw new RangeError(
          "The data size must not be greater than 125 bytes"
        );
      }
      const options = {
        [kByteLength]: byteLength,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 9,
        readOnly,
        rsv1: false,
      };
      if (isBlob2(data)) {
        if (this._state !== DEFAULT) {
          this.enqueue([this.getBlobData, data, false, options, cb]);
        } else {
          this.getBlobData(data, false, options, cb);
        }
      } else if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    /**
     * Sends a pong message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Boolean} [mask=false] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback
     * @public
     */
    pong(data, mask, cb) {
      let byteLength;
      let readOnly;
      if (typeof data === "string") {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else if (isBlob2(data)) {
        byteLength = data.size;
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }
      if (byteLength > 125) {
        throw new RangeError(
          "The data size must not be greater than 125 bytes"
        );
      }
      const options = {
        [kByteLength]: byteLength,
        fin: true,
        generateMask: this._generateMask,
        mask,
        maskBuffer: this._maskBuffer,
        opcode: 10,
        readOnly,
        rsv1: false,
      };
      if (isBlob2(data)) {
        if (this._state !== DEFAULT) {
          this.enqueue([this.getBlobData, data, false, options, cb]);
        } else {
          this.getBlobData(data, false, options, cb);
        }
      } else if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, data, false, options, cb]);
      } else {
        this.sendFrame(Sender.frame(data, options), cb);
      }
    }
    /**
     * Sends a data message to the other peer.
     *
     * @param {*} data The message to send
     * @param {Object} options Options object
     * @param {Boolean} [options.binary=false] Specifies whether `data` is binary
     *     or text
     * @param {Boolean} [options.compress=false] Specifies whether or not to
     *     compress `data`
     * @param {Boolean} [options.fin=false] Specifies whether the fragment is the
     *     last one
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Function} [cb] Callback
     * @public
     */
    send(data, options, cb) {
      const perMessageDeflate =
        this._extensions[PerMessageDeflate.extensionName];
      let opcode = options.binary ? 2 : 1;
      let rsv1 = options.compress;
      let byteLength;
      let readOnly;
      if (typeof data === "string") {
        byteLength = Buffer.byteLength(data);
        readOnly = false;
      } else if (isBlob2(data)) {
        byteLength = data.size;
        readOnly = false;
      } else {
        data = toBuffer(data);
        byteLength = data.length;
        readOnly = toBuffer.readOnly;
      }
      if (this._firstFragment) {
        this._firstFragment = false;
        if (
          rsv1 &&
          perMessageDeflate &&
          perMessageDeflate.params[
            perMessageDeflate._isServer
              ? "server_no_context_takeover"
              : "client_no_context_takeover"
          ]
        ) {
          rsv1 = byteLength >= perMessageDeflate._threshold;
        }
        this._compress = rsv1;
      } else {
        rsv1 = false;
        opcode = 0;
      }
      if (options.fin) this._firstFragment = true;
      const opts = {
        [kByteLength]: byteLength,
        fin: options.fin,
        generateMask: this._generateMask,
        mask: options.mask,
        maskBuffer: this._maskBuffer,
        opcode,
        readOnly,
        rsv1,
      };
      if (isBlob2(data)) {
        if (this._state !== DEFAULT) {
          this.enqueue([this.getBlobData, data, this._compress, opts, cb]);
        } else {
          this.getBlobData(data, this._compress, opts, cb);
        }
      } else if (this._state !== DEFAULT) {
        this.enqueue([this.dispatch, data, this._compress, opts, cb]);
      } else {
        this.dispatch(data, this._compress, opts, cb);
      }
    }
    /**
     * Gets the contents of a blob as binary data.
     *
     * @param {Blob} blob The blob
     * @param {Boolean} [compress=false] Specifies whether or not to compress
     *     the data
     * @param {Object} options Options object
     * @param {Boolean} [options.fin=false] Specifies whether or not to set the
     *     FIN bit
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
     *     key
     * @param {Number} options.opcode The opcode
     * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
     *     modified
     * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
     *     RSV1 bit
     * @param {Function} [cb] Callback
     * @private
     */
    getBlobData(blob, compress, options, cb) {
      this._bufferedBytes += options[kByteLength];
      this._state = GET_BLOB_DATA;
      blob
        .arrayBuffer()
        .then((arrayBuffer) => {
          if (this._socket.destroyed) {
            const err = new Error(
              "The socket was closed while the blob was being read"
            );
            process.nextTick(callCallbacks, this, err, cb);
            return;
          }
          this._bufferedBytes -= options[kByteLength];
          const data = toBuffer(arrayBuffer);
          if (!compress) {
            this._state = DEFAULT;
            this.sendFrame(Sender.frame(data, options), cb);
            this.dequeue();
          } else {
            this.dispatch(data, compress, options, cb);
          }
        })
        .catch((err) => {
          process.nextTick(onError, this, err, cb);
        });
    }
    /**
     * Dispatches a message.
     *
     * @param {(Buffer|String)} data The message to send
     * @param {Boolean} [compress=false] Specifies whether or not to compress
     *     `data`
     * @param {Object} options Options object
     * @param {Boolean} [options.fin=false] Specifies whether or not to set the
     *     FIN bit
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Boolean} [options.mask=false] Specifies whether or not to mask
     *     `data`
     * @param {Buffer} [options.maskBuffer] The buffer used to store the masking
     *     key
     * @param {Number} options.opcode The opcode
     * @param {Boolean} [options.readOnly=false] Specifies whether `data` can be
     *     modified
     * @param {Boolean} [options.rsv1=false] Specifies whether or not to set the
     *     RSV1 bit
     * @param {Function} [cb] Callback
     * @private
     */
    dispatch(data, compress, options, cb) {
      if (!compress) {
        this.sendFrame(Sender.frame(data, options), cb);
        return;
      }
      const perMessageDeflate =
        this._extensions[PerMessageDeflate.extensionName];
      this._bufferedBytes += options[kByteLength];
      this._state = DEFLATING;
      perMessageDeflate.compress(data, options.fin, (_, buf) => {
        if (this._socket.destroyed) {
          const err = new Error(
            "The socket was closed while data was being compressed"
          );
          callCallbacks(this, err, cb);
          return;
        }
        this._bufferedBytes -= options[kByteLength];
        this._state = DEFAULT;
        options.readOnly = false;
        this.sendFrame(Sender.frame(buf, options), cb);
        this.dequeue();
      });
    }
    /**
     * Executes queued send operations.
     *
     * @private
     */
    dequeue() {
      while (this._state === DEFAULT && this._queue.length) {
        const params = this._queue.shift();
        this._bufferedBytes -= params[3][kByteLength];
        Reflect.apply(params[0], this, params.slice(1));
      }
    }
    /**
     * Enqueues a send operation.
     *
     * @param {Array} params Send operation parameters.
     * @private
     */
    enqueue(params) {
      this._bufferedBytes += params[3][kByteLength];
      this._queue.push(params);
    }
    /**
     * Sends a frame.
     *
     * @param {(Buffer | String)[]} list The frame to send
     * @param {Function} [cb] Callback
     * @private
     */
    sendFrame(list, cb) {
      if (list.length === 2) {
        this._socket.cork();
        this._socket.write(list[0]);
        this._socket.write(list[1], cb);
        this._socket.uncork();
      } else {
        this._socket.write(list[0], cb);
      }
    }
  }
  sender = Sender;
  function callCallbacks(sender2, err, cb) {
    if (typeof cb === "function") cb(err);
    for (let i = 0; i < sender2._queue.length; i++) {
      const params = sender2._queue[i];
      const callback = params[params.length - 1];
      if (typeof callback === "function") callback(err);
    }
  }
  function onError(sender2, err, cb) {
    callCallbacks(sender2, err, cb);
    sender2.onerror(err);
  }
  return sender;
}
var eventTarget;
var hasRequiredEventTarget;
function requireEventTarget() {
  if (hasRequiredEventTarget) return eventTarget;
  hasRequiredEventTarget = 1;
  const { kForOnEventAttribute, kListener } = requireConstants();
  const kCode = Symbol("kCode");
  const kData = Symbol("kData");
  const kError = Symbol("kError");
  const kMessage = Symbol("kMessage");
  const kReason = Symbol("kReason");
  const kTarget = Symbol("kTarget");
  const kType = Symbol("kType");
  const kWasClean = Symbol("kWasClean");
  class Event {
    /**
     * Create a new `Event`.
     *
     * @param {String} type The name of the event
     * @throws {TypeError} If the `type` argument is not specified
     */
    constructor(type) {
      this[kTarget] = null;
      this[kType] = type;
    }
    /**
     * @type {*}
     */
    get target() {
      return this[kTarget];
    }
    /**
     * @type {String}
     */
    get type() {
      return this[kType];
    }
  }
  Object.defineProperty(Event.prototype, "target", { enumerable: true });
  Object.defineProperty(Event.prototype, "type", { enumerable: true });
  class CloseEvent extends Event {
    /**
     * Create a new `CloseEvent`.
     *
     * @param {String} type The name of the event
     * @param {Object} [options] A dictionary object that allows for setting
     *     attributes via object members of the same name
     * @param {Number} [options.code=0] The status code explaining why the
     *     connection was closed
     * @param {String} [options.reason=''] A human-readable string explaining why
     *     the connection was closed
     * @param {Boolean} [options.wasClean=false] Indicates whether or not the
     *     connection was cleanly closed
     */
    constructor(type, options = {}) {
      super(type);
      this[kCode] = options.code === void 0 ? 0 : options.code;
      this[kReason] = options.reason === void 0 ? "" : options.reason;
      this[kWasClean] = options.wasClean === void 0 ? false : options.wasClean;
    }
    /**
     * @type {Number}
     */
    get code() {
      return this[kCode];
    }
    /**
     * @type {String}
     */
    get reason() {
      return this[kReason];
    }
    /**
     * @type {Boolean}
     */
    get wasClean() {
      return this[kWasClean];
    }
  }
  Object.defineProperty(CloseEvent.prototype, "code", { enumerable: true });
  Object.defineProperty(CloseEvent.prototype, "reason", { enumerable: true });
  Object.defineProperty(CloseEvent.prototype, "wasClean", { enumerable: true });
  class ErrorEvent extends Event {
    /**
     * Create a new `ErrorEvent`.
     *
     * @param {String} type The name of the event
     * @param {Object} [options] A dictionary object that allows for setting
     *     attributes via object members of the same name
     * @param {*} [options.error=null] The error that generated this event
     * @param {String} [options.message=''] The error message
     */
    constructor(type, options = {}) {
      super(type);
      this[kError] = options.error === void 0 ? null : options.error;
      this[kMessage] = options.message === void 0 ? "" : options.message;
    }
    /**
     * @type {*}
     */
    get error() {
      return this[kError];
    }
    /**
     * @type {String}
     */
    get message() {
      return this[kMessage];
    }
  }
  Object.defineProperty(ErrorEvent.prototype, "error", { enumerable: true });
  Object.defineProperty(ErrorEvent.prototype, "message", { enumerable: true });
  class MessageEvent extends Event {
    /**
     * Create a new `MessageEvent`.
     *
     * @param {String} type The name of the event
     * @param {Object} [options] A dictionary object that allows for setting
     *     attributes via object members of the same name
     * @param {*} [options.data=null] The message content
     */
    constructor(type, options = {}) {
      super(type);
      this[kData] = options.data === void 0 ? null : options.data;
    }
    /**
     * @type {*}
     */
    get data() {
      return this[kData];
    }
  }
  Object.defineProperty(MessageEvent.prototype, "data", { enumerable: true });
  const EventTarget = {
    /**
     * Register an event listener.
     *
     * @param {String} type A string representing the event type to listen for
     * @param {(Function|Object)} handler The listener to add
     * @param {Object} [options] An options object specifies characteristics about
     *     the event listener
     * @param {Boolean} [options.once=false] A `Boolean` indicating that the
     *     listener should be invoked at most once after being added. If `true`,
     *     the listener would be automatically removed when invoked.
     * @public
     */
    addEventListener(type, handler, options = {}) {
      for (const listener of this.listeners(type)) {
        if (
          !options[kForOnEventAttribute] &&
          listener[kListener] === handler &&
          !listener[kForOnEventAttribute]
        ) {
          return;
        }
      }
      let wrapper;
      if (type === "message") {
        wrapper = function onMessage(data, isBinary) {
          const event = new MessageEvent("message", {
            data: isBinary ? data : data.toString(),
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "close") {
        wrapper = function onClose(code, message) {
          const event = new CloseEvent("close", {
            code,
            reason: message.toString(),
            wasClean: this._closeFrameReceived && this._closeFrameSent,
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "error") {
        wrapper = function onError(error) {
          const event = new ErrorEvent("error", {
            error,
            message: error.message,
          });
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else if (type === "open") {
        wrapper = function onOpen() {
          const event = new Event("open");
          event[kTarget] = this;
          callListener(handler, this, event);
        };
      } else {
        return;
      }
      wrapper[kForOnEventAttribute] = !!options[kForOnEventAttribute];
      wrapper[kListener] = handler;
      if (options.once) {
        this.once(type, wrapper);
      } else {
        this.on(type, wrapper);
      }
    },
    /**
     * Remove an event listener.
     *
     * @param {String} type A string representing the event type to remove
     * @param {(Function|Object)} handler The listener to remove
     * @public
     */
    removeEventListener(type, handler) {
      for (const listener of this.listeners(type)) {
        if (
          listener[kListener] === handler &&
          !listener[kForOnEventAttribute]
        ) {
          this.removeListener(type, listener);
          break;
        }
      }
    },
  };
  eventTarget = {
    CloseEvent,
    ErrorEvent,
    Event,
    EventTarget,
    MessageEvent,
  };
  function callListener(listener, thisArg, event) {
    if (typeof listener === "object" && listener.handleEvent) {
      listener.handleEvent.call(listener, event);
    } else {
      listener.call(thisArg, event);
    }
  }
  return eventTarget;
}
var extension;
var hasRequiredExtension;
function requireExtension() {
  if (hasRequiredExtension) return extension;
  hasRequiredExtension = 1;
  const { tokenChars } = requireValidation();
  function push(dest, name, elem) {
    if (dest[name] === void 0) dest[name] = [elem];
    else dest[name].push(elem);
  }
  function parse(header) {
    const offers = /* @__PURE__ */ Object.create(null);
    let params = /* @__PURE__ */ Object.create(null);
    let mustUnescape = false;
    let isEscaping = false;
    let inQuotes = false;
    let extensionName;
    let paramName;
    let start = -1;
    let code = -1;
    let end = -1;
    let i = 0;
    for (; i < header.length; i++) {
      code = header.charCodeAt(i);
      if (extensionName === void 0) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (i !== 0 && (code === 32 || code === 9)) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          const name = header.slice(start, end);
          if (code === 44) {
            push(offers, name, params);
            params = /* @__PURE__ */ Object.create(null);
          } else {
            extensionName = name;
          }
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else if (paramName === void 0) {
        if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (code === 32 || code === 9) {
          if (end === -1 && start !== -1) end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          push(params, header.slice(start, end), true);
          if (code === 44) {
            push(offers, extensionName, params);
            params = /* @__PURE__ */ Object.create(null);
            extensionName = void 0;
          }
          start = end = -1;
        } else if (code === 61 && start !== -1 && end === -1) {
          paramName = header.slice(start, i);
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      } else {
        if (isEscaping) {
          if (tokenChars[code] !== 1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (start === -1) start = i;
          else if (!mustUnescape) mustUnescape = true;
          isEscaping = false;
        } else if (inQuotes) {
          if (tokenChars[code] === 1) {
            if (start === -1) start = i;
          } else if (code === 34 && start !== -1) {
            inQuotes = false;
            end = i;
          } else if (code === 92) {
            isEscaping = true;
          } else {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
        } else if (code === 34 && header.charCodeAt(i - 1) === 61) {
          inQuotes = true;
        } else if (end === -1 && tokenChars[code] === 1) {
          if (start === -1) start = i;
        } else if (start !== -1 && (code === 32 || code === 9)) {
          if (end === -1) end = i;
        } else if (code === 59 || code === 44) {
          if (start === -1) {
            throw new SyntaxError(`Unexpected character at index ${i}`);
          }
          if (end === -1) end = i;
          let value = header.slice(start, end);
          if (mustUnescape) {
            value = value.replace(/\\/g, "");
            mustUnescape = false;
          }
          push(params, paramName, value);
          if (code === 44) {
            push(offers, extensionName, params);
            params = /* @__PURE__ */ Object.create(null);
            extensionName = void 0;
          }
          paramName = void 0;
          start = end = -1;
        } else {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
      }
    }
    if (start === -1 || inQuotes || code === 32 || code === 9) {
      throw new SyntaxError("Unexpected end of input");
    }
    if (end === -1) end = i;
    const token = header.slice(start, end);
    if (extensionName === void 0) {
      push(offers, token, params);
    } else {
      if (paramName === void 0) {
        push(params, token, true);
      } else if (mustUnescape) {
        push(params, paramName, token.replace(/\\/g, ""));
      } else {
        push(params, paramName, token);
      }
      push(offers, extensionName, params);
    }
    return offers;
  }
  function format(extensions) {
    return Object.keys(extensions)
      .map((extension2) => {
        let configurations = extensions[extension2];
        if (!Array.isArray(configurations)) configurations = [configurations];
        return configurations
          .map((params) => {
            return [extension2]
              .concat(
                Object.keys(params).map((k) => {
                  let values = params[k];
                  if (!Array.isArray(values)) values = [values];
                  return values
                    .map((v) => (v === true ? k : `${k}=${v}`))
                    .join("; ");
                })
              )
              .join("; ");
          })
          .join(", ");
      })
      .join(", ");
  }
  extension = { format, parse };
  return extension;
}
var websocket;
var hasRequiredWebsocket;
function requireWebsocket() {
  if (hasRequiredWebsocket) return websocket;
  hasRequiredWebsocket = 1;
  const EventEmitter2 = require$$0$3;
  const https = require$$1$5;
  const http$1 = http;
  const net = require$$4;
  const tls = require$$4$1;
  const { randomBytes, createHash } = require$$1$4;
  const { Duplex, Readable: Readable2 } = Stream;
  const { URL: URL2 } = Url;
  const PerMessageDeflate = requirePermessageDeflate();
  const Receiver = requireReceiver();
  const Sender = requireSender();
  const { isBlob: isBlob2 } = requireValidation();
  const {
    BINARY_TYPES,
    EMPTY_BUFFER,
    GUID,
    kForOnEventAttribute,
    kListener,
    kStatusCode,
    kWebSocket,
    NOOP,
  } = requireConstants();
  const {
    EventTarget: { addEventListener, removeEventListener },
  } = requireEventTarget();
  const { format, parse } = requireExtension();
  const { toBuffer } = requireBufferUtil();
  const closeTimeout = 30 * 1e3;
  const kAborted = Symbol("kAborted");
  const protocolVersions = [8, 13];
  const readyStates = ["CONNECTING", "OPEN", "CLOSING", "CLOSED"];
  const subprotocolRegex = /^[!#$%&'*+\-.0-9A-Z^_`|a-z~]+$/;
  class WebSocket extends EventEmitter2 {
    /**
     * Create a new `WebSocket`.
     *
     * @param {(String|URL)} address The URL to which to connect
     * @param {(String|String[])} [protocols] The subprotocols
     * @param {Object} [options] Connection options
     */
    constructor(address, protocols, options) {
      super();
      this._binaryType = BINARY_TYPES[0];
      this._closeCode = 1006;
      this._closeFrameReceived = false;
      this._closeFrameSent = false;
      this._closeMessage = EMPTY_BUFFER;
      this._closeTimer = null;
      this._errorEmitted = false;
      this._extensions = {};
      this._paused = false;
      this._protocol = "";
      this._readyState = WebSocket.CONNECTING;
      this._receiver = null;
      this._sender = null;
      this._socket = null;
      if (address !== null) {
        this._bufferedAmount = 0;
        this._isServer = false;
        this._redirects = 0;
        if (protocols === void 0) {
          protocols = [];
        } else if (!Array.isArray(protocols)) {
          if (typeof protocols === "object" && protocols !== null) {
            options = protocols;
            protocols = [];
          } else {
            protocols = [protocols];
          }
        }
        initAsClient(this, address, protocols, options);
      } else {
        this._autoPong = options.autoPong;
        this._isServer = true;
      }
    }
    /**
     * For historical reasons, the custom "nodebuffer" type is used by the default
     * instead of "blob".
     *
     * @type {String}
     */
    get binaryType() {
      return this._binaryType;
    }
    set binaryType(type) {
      if (!BINARY_TYPES.includes(type)) return;
      this._binaryType = type;
      if (this._receiver) this._receiver._binaryType = type;
    }
    /**
     * @type {Number}
     */
    get bufferedAmount() {
      if (!this._socket) return this._bufferedAmount;
      return this._socket._writableState.length + this._sender._bufferedBytes;
    }
    /**
     * @type {String}
     */
    get extensions() {
      return Object.keys(this._extensions).join();
    }
    /**
     * @type {Boolean}
     */
    get isPaused() {
      return this._paused;
    }
    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onclose() {
      return null;
    }
    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onerror() {
      return null;
    }
    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onopen() {
      return null;
    }
    /**
     * @type {Function}
     */
    /* istanbul ignore next */
    get onmessage() {
      return null;
    }
    /**
     * @type {String}
     */
    get protocol() {
      return this._protocol;
    }
    /**
     * @type {Number}
     */
    get readyState() {
      return this._readyState;
    }
    /**
     * @type {String}
     */
    get url() {
      return this._url;
    }
    /**
     * Set up the socket and the internal resources.
     *
     * @param {Duplex} socket The network socket between the server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Object} options Options object
     * @param {Boolean} [options.allowSynchronousEvents=false] Specifies whether
     *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
     *     multiple times in the same tick
     * @param {Function} [options.generateMask] The function used to generate the
     *     masking key
     * @param {Number} [options.maxPayload=0] The maximum allowed message size
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     * @private
     */
    setSocket(socket, head, options) {
      const receiver2 = new Receiver({
        allowSynchronousEvents: options.allowSynchronousEvents,
        binaryType: this.binaryType,
        extensions: this._extensions,
        isServer: this._isServer,
        maxPayload: options.maxPayload,
        skipUTF8Validation: options.skipUTF8Validation,
      });
      const sender2 = new Sender(
        socket,
        this._extensions,
        options.generateMask
      );
      this._receiver = receiver2;
      this._sender = sender2;
      this._socket = socket;
      receiver2[kWebSocket] = this;
      sender2[kWebSocket] = this;
      socket[kWebSocket] = this;
      receiver2.on("conclude", receiverOnConclude);
      receiver2.on("drain", receiverOnDrain);
      receiver2.on("error", receiverOnError);
      receiver2.on("message", receiverOnMessage);
      receiver2.on("ping", receiverOnPing);
      receiver2.on("pong", receiverOnPong);
      sender2.onerror = senderOnError;
      if (socket.setTimeout) socket.setTimeout(0);
      if (socket.setNoDelay) socket.setNoDelay();
      if (head.length > 0) socket.unshift(head);
      socket.on("close", socketOnClose);
      socket.on("data", socketOnData);
      socket.on("end", socketOnEnd);
      socket.on("error", socketOnError);
      this._readyState = WebSocket.OPEN;
      this.emit("open");
    }
    /**
     * Emit the `'close'` event.
     *
     * @private
     */
    emitClose() {
      if (!this._socket) {
        this._readyState = WebSocket.CLOSED;
        this.emit("close", this._closeCode, this._closeMessage);
        return;
      }
      if (this._extensions[PerMessageDeflate.extensionName]) {
        this._extensions[PerMessageDeflate.extensionName].cleanup();
      }
      this._receiver.removeAllListeners();
      this._readyState = WebSocket.CLOSED;
      this.emit("close", this._closeCode, this._closeMessage);
    }
    /**
     * Start a closing handshake.
     *
     *          +----------+   +-----------+   +----------+
     *     - - -|ws.close()|-->|close frame|-->|ws.close()|- - -
     *    |     +----------+   +-----------+   +----------+     |
     *          +----------+   +-----------+         |
     * CLOSING  |ws.close()|<--|close frame|<--+-----+       CLOSING
     *          +----------+   +-----------+   |
     *    |           |                        |   +---+        |
     *                +------------------------+-->|fin| - - - -
     *    |         +---+                      |   +---+
     *     - - - - -|fin|<---------------------+
     *              +---+
     *
     * @param {Number} [code] Status code explaining why the connection is closing
     * @param {(String|Buffer)} [data] The reason why the connection is
     *     closing
     * @public
     */
    close(code, data) {
      if (this.readyState === WebSocket.CLOSED) return;
      if (this.readyState === WebSocket.CONNECTING) {
        const msg =
          "WebSocket was closed before the connection was established";
        abortHandshake(this, this._req, msg);
        return;
      }
      if (this.readyState === WebSocket.CLOSING) {
        if (
          this._closeFrameSent &&
          (this._closeFrameReceived ||
            this._receiver._writableState.errorEmitted)
        ) {
          this._socket.end();
        }
        return;
      }
      this._readyState = WebSocket.CLOSING;
      this._sender.close(code, data, !this._isServer, (err) => {
        if (err) return;
        this._closeFrameSent = true;
        if (
          this._closeFrameReceived ||
          this._receiver._writableState.errorEmitted
        ) {
          this._socket.end();
        }
      });
      setCloseTimer(this);
    }
    /**
     * Pause the socket.
     *
     * @public
     */
    pause() {
      if (
        this.readyState === WebSocket.CONNECTING ||
        this.readyState === WebSocket.CLOSED
      ) {
        return;
      }
      this._paused = true;
      this._socket.pause();
    }
    /**
     * Send a ping.
     *
     * @param {*} [data] The data to send
     * @param {Boolean} [mask] Indicates whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when the ping is sent
     * @public
     */
    ping(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof data === "function") {
        cb = data;
        data = mask = void 0;
      } else if (typeof mask === "function") {
        cb = mask;
        mask = void 0;
      }
      if (typeof data === "number") data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === void 0) mask = !this._isServer;
      this._sender.ping(data || EMPTY_BUFFER, mask, cb);
    }
    /**
     * Send a pong.
     *
     * @param {*} [data] The data to send
     * @param {Boolean} [mask] Indicates whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when the pong is sent
     * @public
     */
    pong(data, mask, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof data === "function") {
        cb = data;
        data = mask = void 0;
      } else if (typeof mask === "function") {
        cb = mask;
        mask = void 0;
      }
      if (typeof data === "number") data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      if (mask === void 0) mask = !this._isServer;
      this._sender.pong(data || EMPTY_BUFFER, mask, cb);
    }
    /**
     * Resume the socket.
     *
     * @public
     */
    resume() {
      if (
        this.readyState === WebSocket.CONNECTING ||
        this.readyState === WebSocket.CLOSED
      ) {
        return;
      }
      this._paused = false;
      if (!this._receiver._writableState.needDrain) this._socket.resume();
    }
    /**
     * Send a data message.
     *
     * @param {*} data The message to send
     * @param {Object} [options] Options object
     * @param {Boolean} [options.binary] Specifies whether `data` is binary or
     *     text
     * @param {Boolean} [options.compress] Specifies whether or not to compress
     *     `data`
     * @param {Boolean} [options.fin=true] Specifies whether the fragment is the
     *     last one
     * @param {Boolean} [options.mask] Specifies whether or not to mask `data`
     * @param {Function} [cb] Callback which is executed when data is written out
     * @public
     */
    send(data, options, cb) {
      if (this.readyState === WebSocket.CONNECTING) {
        throw new Error("WebSocket is not open: readyState 0 (CONNECTING)");
      }
      if (typeof options === "function") {
        cb = options;
        options = {};
      }
      if (typeof data === "number") data = data.toString();
      if (this.readyState !== WebSocket.OPEN) {
        sendAfterClose(this, data, cb);
        return;
      }
      const opts = {
        binary: typeof data !== "string",
        mask: !this._isServer,
        compress: true,
        fin: true,
        ...options,
      };
      if (!this._extensions[PerMessageDeflate.extensionName]) {
        opts.compress = false;
      }
      this._sender.send(data || EMPTY_BUFFER, opts, cb);
    }
    /**
     * Forcibly close the connection.
     *
     * @public
     */
    terminate() {
      if (this.readyState === WebSocket.CLOSED) return;
      if (this.readyState === WebSocket.CONNECTING) {
        const msg =
          "WebSocket was closed before the connection was established";
        abortHandshake(this, this._req, msg);
        return;
      }
      if (this._socket) {
        this._readyState = WebSocket.CLOSING;
        this._socket.destroy();
      }
    }
  }
  Object.defineProperty(WebSocket, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING"),
  });
  Object.defineProperty(WebSocket.prototype, "CONNECTING", {
    enumerable: true,
    value: readyStates.indexOf("CONNECTING"),
  });
  Object.defineProperty(WebSocket, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN"),
  });
  Object.defineProperty(WebSocket.prototype, "OPEN", {
    enumerable: true,
    value: readyStates.indexOf("OPEN"),
  });
  Object.defineProperty(WebSocket, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING"),
  });
  Object.defineProperty(WebSocket.prototype, "CLOSING", {
    enumerable: true,
    value: readyStates.indexOf("CLOSING"),
  });
  Object.defineProperty(WebSocket, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED"),
  });
  Object.defineProperty(WebSocket.prototype, "CLOSED", {
    enumerable: true,
    value: readyStates.indexOf("CLOSED"),
  });
  [
    "binaryType",
    "bufferedAmount",
    "extensions",
    "isPaused",
    "protocol",
    "readyState",
    "url",
  ].forEach((property) => {
    Object.defineProperty(WebSocket.prototype, property, { enumerable: true });
  });
  ["open", "error", "close", "message"].forEach((method) => {
    Object.defineProperty(WebSocket.prototype, `on${method}`, {
      enumerable: true,
      get() {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute]) return listener[kListener];
        }
        return null;
      },
      set(handler) {
        for (const listener of this.listeners(method)) {
          if (listener[kForOnEventAttribute]) {
            this.removeListener(method, listener);
            break;
          }
        }
        if (typeof handler !== "function") return;
        this.addEventListener(method, handler, {
          [kForOnEventAttribute]: true,
        });
      },
    });
  });
  WebSocket.prototype.addEventListener = addEventListener;
  WebSocket.prototype.removeEventListener = removeEventListener;
  websocket = WebSocket;
  function initAsClient(websocket2, address, protocols, options) {
    const opts = {
      allowSynchronousEvents: true,
      autoPong: true,
      protocolVersion: protocolVersions[1],
      maxPayload: 100 * 1024 * 1024,
      skipUTF8Validation: false,
      perMessageDeflate: true,
      followRedirects: false,
      maxRedirects: 10,
      ...options,
      socketPath: void 0,
      hostname: void 0,
      protocol: void 0,
      timeout: void 0,
      method: "GET",
      host: void 0,
      path: void 0,
      port: void 0,
    };
    websocket2._autoPong = opts.autoPong;
    if (!protocolVersions.includes(opts.protocolVersion)) {
      throw new RangeError(
        `Unsupported protocol version: ${opts.protocolVersion} (supported versions: ${protocolVersions.join(", ")})`
      );
    }
    let parsedUrl;
    if (address instanceof URL2) {
      parsedUrl = address;
    } else {
      try {
        parsedUrl = new URL2(address);
      } catch (e) {
        throw new SyntaxError(`Invalid URL: ${address}`);
      }
    }
    if (parsedUrl.protocol === "http:") {
      parsedUrl.protocol = "ws:";
    } else if (parsedUrl.protocol === "https:") {
      parsedUrl.protocol = "wss:";
    }
    websocket2._url = parsedUrl.href;
    const isSecure = parsedUrl.protocol === "wss:";
    const isIpcUrl = parsedUrl.protocol === "ws+unix:";
    let invalidUrlMessage;
    if (parsedUrl.protocol !== "ws:" && !isSecure && !isIpcUrl) {
      invalidUrlMessage = `The URL's protocol must be one of "ws:", "wss:", "http:", "https:", or "ws+unix:"`;
    } else if (isIpcUrl && !parsedUrl.pathname) {
      invalidUrlMessage = "The URL's pathname is empty";
    } else if (parsedUrl.hash) {
      invalidUrlMessage = "The URL contains a fragment identifier";
    }
    if (invalidUrlMessage) {
      const err = new SyntaxError(invalidUrlMessage);
      if (websocket2._redirects === 0) {
        throw err;
      } else {
        emitErrorAndClose(websocket2, err);
        return;
      }
    }
    const defaultPort = isSecure ? 443 : 80;
    const key = randomBytes(16).toString("base64");
    const request = isSecure ? https.request : http$1.request;
    const protocolSet = /* @__PURE__ */ new Set();
    let perMessageDeflate;
    opts.createConnection =
      opts.createConnection || (isSecure ? tlsConnect : netConnect);
    opts.defaultPort = opts.defaultPort || defaultPort;
    opts.port = parsedUrl.port || defaultPort;
    opts.host = parsedUrl.hostname.startsWith("[")
      ? parsedUrl.hostname.slice(1, -1)
      : parsedUrl.hostname;
    opts.headers = {
      ...opts.headers,
      "Sec-WebSocket-Version": opts.protocolVersion,
      "Sec-WebSocket-Key": key,
      Connection: "Upgrade",
      Upgrade: "websocket",
    };
    opts.path = parsedUrl.pathname + parsedUrl.search;
    opts.timeout = opts.handshakeTimeout;
    if (opts.perMessageDeflate) {
      perMessageDeflate = new PerMessageDeflate(
        opts.perMessageDeflate !== true ? opts.perMessageDeflate : {},
        false,
        opts.maxPayload
      );
      opts.headers["Sec-WebSocket-Extensions"] = format({
        [PerMessageDeflate.extensionName]: perMessageDeflate.offer(),
      });
    }
    if (protocols.length) {
      for (const protocol of protocols) {
        if (
          typeof protocol !== "string" ||
          !subprotocolRegex.test(protocol) ||
          protocolSet.has(protocol)
        ) {
          throw new SyntaxError(
            "An invalid or duplicated subprotocol was specified"
          );
        }
        protocolSet.add(protocol);
      }
      opts.headers["Sec-WebSocket-Protocol"] = protocols.join(",");
    }
    if (opts.origin) {
      if (opts.protocolVersion < 13) {
        opts.headers["Sec-WebSocket-Origin"] = opts.origin;
      } else {
        opts.headers.Origin = opts.origin;
      }
    }
    if (parsedUrl.username || parsedUrl.password) {
      opts.auth = `${parsedUrl.username}:${parsedUrl.password}`;
    }
    if (isIpcUrl) {
      const parts = opts.path.split(":");
      opts.socketPath = parts[0];
      opts.path = parts[1];
    }
    let req;
    if (opts.followRedirects) {
      if (websocket2._redirects === 0) {
        websocket2._originalIpc = isIpcUrl;
        websocket2._originalSecure = isSecure;
        websocket2._originalHostOrSocketPath = isIpcUrl
          ? opts.socketPath
          : parsedUrl.host;
        const headers = options && options.headers;
        options = { ...options, headers: {} };
        if (headers) {
          for (const [key2, value] of Object.entries(headers)) {
            options.headers[key2.toLowerCase()] = value;
          }
        }
      } else if (websocket2.listenerCount("redirect") === 0) {
        const isSameHost = isIpcUrl
          ? websocket2._originalIpc
            ? opts.socketPath === websocket2._originalHostOrSocketPath
            : false
          : websocket2._originalIpc
            ? false
            : parsedUrl.host === websocket2._originalHostOrSocketPath;
        if (!isSameHost || (websocket2._originalSecure && !isSecure)) {
          delete opts.headers.authorization;
          delete opts.headers.cookie;
          if (!isSameHost) delete opts.headers.host;
          opts.auth = void 0;
        }
      }
      if (opts.auth && !options.headers.authorization) {
        options.headers.authorization =
          "Basic " + Buffer.from(opts.auth).toString("base64");
      }
      req = websocket2._req = request(opts);
      if (websocket2._redirects) {
        websocket2.emit("redirect", websocket2.url, req);
      }
    } else {
      req = websocket2._req = request(opts);
    }
    if (opts.timeout) {
      req.on("timeout", () => {
        abortHandshake(websocket2, req, "Opening handshake has timed out");
      });
    }
    req.on("error", (err) => {
      if (req === null || req[kAborted]) return;
      req = websocket2._req = null;
      emitErrorAndClose(websocket2, err);
    });
    req.on("response", (res) => {
      const location = res.headers.location;
      const statusCode = res.statusCode;
      if (
        location &&
        opts.followRedirects &&
        statusCode >= 300 &&
        statusCode < 400
      ) {
        if (++websocket2._redirects > opts.maxRedirects) {
          abortHandshake(websocket2, req, "Maximum redirects exceeded");
          return;
        }
        req.abort();
        let addr;
        try {
          addr = new URL2(location, address);
        } catch (e) {
          const err = new SyntaxError(`Invalid URL: ${location}`);
          emitErrorAndClose(websocket2, err);
          return;
        }
        initAsClient(websocket2, addr, protocols, options);
      } else if (!websocket2.emit("unexpected-response", req, res)) {
        abortHandshake(
          websocket2,
          req,
          `Unexpected server response: ${res.statusCode}`
        );
      }
    });
    req.on("upgrade", (res, socket, head) => {
      websocket2.emit("upgrade", res);
      if (websocket2.readyState !== WebSocket.CONNECTING) return;
      req = websocket2._req = null;
      const upgrade = res.headers.upgrade;
      if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
        abortHandshake(websocket2, socket, "Invalid Upgrade header");
        return;
      }
      const digest = createHash("sha1")
        .update(key + GUID)
        .digest("base64");
      if (res.headers["sec-websocket-accept"] !== digest) {
        abortHandshake(
          websocket2,
          socket,
          "Invalid Sec-WebSocket-Accept header"
        );
        return;
      }
      const serverProt = res.headers["sec-websocket-protocol"];
      let protError;
      if (serverProt !== void 0) {
        if (!protocolSet.size) {
          protError = "Server sent a subprotocol but none was requested";
        } else if (!protocolSet.has(serverProt)) {
          protError = "Server sent an invalid subprotocol";
        }
      } else if (protocolSet.size) {
        protError = "Server sent no subprotocol";
      }
      if (protError) {
        abortHandshake(websocket2, socket, protError);
        return;
      }
      if (serverProt) websocket2._protocol = serverProt;
      const secWebSocketExtensions = res.headers["sec-websocket-extensions"];
      if (secWebSocketExtensions !== void 0) {
        if (!perMessageDeflate) {
          const message =
            "Server sent a Sec-WebSocket-Extensions header but no extension was requested";
          abortHandshake(websocket2, socket, message);
          return;
        }
        let extensions;
        try {
          extensions = parse(secWebSocketExtensions);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Extensions header";
          abortHandshake(websocket2, socket, message);
          return;
        }
        const extensionNames = Object.keys(extensions);
        if (
          extensionNames.length !== 1 ||
          extensionNames[0] !== PerMessageDeflate.extensionName
        ) {
          const message =
            "Server indicated an extension that was not requested";
          abortHandshake(websocket2, socket, message);
          return;
        }
        try {
          perMessageDeflate.accept(extensions[PerMessageDeflate.extensionName]);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Extensions header";
          abortHandshake(websocket2, socket, message);
          return;
        }
        websocket2._extensions[PerMessageDeflate.extensionName] =
          perMessageDeflate;
      }
      websocket2.setSocket(socket, head, {
        allowSynchronousEvents: opts.allowSynchronousEvents,
        generateMask: opts.generateMask,
        maxPayload: opts.maxPayload,
        skipUTF8Validation: opts.skipUTF8Validation,
      });
    });
    if (opts.finishRequest) {
      opts.finishRequest(req, websocket2);
    } else {
      req.end();
    }
  }
  function emitErrorAndClose(websocket2, err) {
    websocket2._readyState = WebSocket.CLOSING;
    websocket2._errorEmitted = true;
    websocket2.emit("error", err);
    websocket2.emitClose();
  }
  function netConnect(options) {
    options.path = options.socketPath;
    return net.connect(options);
  }
  function tlsConnect(options) {
    options.path = void 0;
    if (!options.servername && options.servername !== "") {
      options.servername = net.isIP(options.host) ? "" : options.host;
    }
    return tls.connect(options);
  }
  function abortHandshake(websocket2, stream2, message) {
    websocket2._readyState = WebSocket.CLOSING;
    const err = new Error(message);
    Error.captureStackTrace(err, abortHandshake);
    if (stream2.setHeader) {
      stream2[kAborted] = true;
      stream2.abort();
      if (stream2.socket && !stream2.socket.destroyed) {
        stream2.socket.destroy();
      }
      process.nextTick(emitErrorAndClose, websocket2, err);
    } else {
      stream2.destroy(err);
      stream2.once("error", websocket2.emit.bind(websocket2, "error"));
      stream2.once("close", websocket2.emitClose.bind(websocket2));
    }
  }
  function sendAfterClose(websocket2, data, cb) {
    if (data) {
      const length = isBlob2(data) ? data.size : toBuffer(data).length;
      if (websocket2._socket) websocket2._sender._bufferedBytes += length;
      else websocket2._bufferedAmount += length;
    }
    if (cb) {
      const err = new Error(
        `WebSocket is not open: readyState ${websocket2.readyState} (${readyStates[websocket2.readyState]})`
      );
      process.nextTick(cb, err);
    }
  }
  function receiverOnConclude(code, reason) {
    const websocket2 = this[kWebSocket];
    websocket2._closeFrameReceived = true;
    websocket2._closeMessage = reason;
    websocket2._closeCode = code;
    if (websocket2._socket[kWebSocket] === void 0) return;
    websocket2._socket.removeListener("data", socketOnData);
    process.nextTick(resume, websocket2._socket);
    if (code === 1005) websocket2.close();
    else websocket2.close(code, reason);
  }
  function receiverOnDrain() {
    const websocket2 = this[kWebSocket];
    if (!websocket2.isPaused) websocket2._socket.resume();
  }
  function receiverOnError(err) {
    const websocket2 = this[kWebSocket];
    if (websocket2._socket[kWebSocket] !== void 0) {
      websocket2._socket.removeListener("data", socketOnData);
      process.nextTick(resume, websocket2._socket);
      websocket2.close(err[kStatusCode]);
    }
    if (!websocket2._errorEmitted) {
      websocket2._errorEmitted = true;
      websocket2.emit("error", err);
    }
  }
  function receiverOnFinish() {
    this[kWebSocket].emitClose();
  }
  function receiverOnMessage(data, isBinary) {
    this[kWebSocket].emit("message", data, isBinary);
  }
  function receiverOnPing(data) {
    const websocket2 = this[kWebSocket];
    if (websocket2._autoPong) websocket2.pong(data, !this._isServer, NOOP);
    websocket2.emit("ping", data);
  }
  function receiverOnPong(data) {
    this[kWebSocket].emit("pong", data);
  }
  function resume(stream2) {
    stream2.resume();
  }
  function senderOnError(err) {
    const websocket2 = this[kWebSocket];
    if (websocket2.readyState === WebSocket.CLOSED) return;
    if (websocket2.readyState === WebSocket.OPEN) {
      websocket2._readyState = WebSocket.CLOSING;
      setCloseTimer(websocket2);
    }
    this._socket.end();
    if (!websocket2._errorEmitted) {
      websocket2._errorEmitted = true;
      websocket2.emit("error", err);
    }
  }
  function setCloseTimer(websocket2) {
    websocket2._closeTimer = setTimeout(
      websocket2._socket.destroy.bind(websocket2._socket),
      closeTimeout
    );
  }
  function socketOnClose() {
    const websocket2 = this[kWebSocket];
    this.removeListener("close", socketOnClose);
    this.removeListener("data", socketOnData);
    this.removeListener("end", socketOnEnd);
    websocket2._readyState = WebSocket.CLOSING;
    let chunk;
    if (
      !this._readableState.endEmitted &&
      !websocket2._closeFrameReceived &&
      !websocket2._receiver._writableState.errorEmitted &&
      (chunk = websocket2._socket.read()) !== null
    ) {
      websocket2._receiver.write(chunk);
    }
    websocket2._receiver.end();
    this[kWebSocket] = void 0;
    clearTimeout(websocket2._closeTimer);
    if (
      websocket2._receiver._writableState.finished ||
      websocket2._receiver._writableState.errorEmitted
    ) {
      websocket2.emitClose();
    } else {
      websocket2._receiver.on("error", receiverOnFinish);
      websocket2._receiver.on("finish", receiverOnFinish);
    }
  }
  function socketOnData(chunk) {
    if (!this[kWebSocket]._receiver.write(chunk)) {
      this.pause();
    }
  }
  function socketOnEnd() {
    const websocket2 = this[kWebSocket];
    websocket2._readyState = WebSocket.CLOSING;
    websocket2._receiver.end();
    this.end();
  }
  function socketOnError() {
    const websocket2 = this[kWebSocket];
    this.removeListener("error", socketOnError);
    this.on("error", NOOP);
    if (websocket2) {
      websocket2._readyState = WebSocket.CLOSING;
      this.destroy();
    }
  }
  return websocket;
}
var stream;
var hasRequiredStream;
function requireStream() {
  if (hasRequiredStream) return stream;
  hasRequiredStream = 1;
  requireWebsocket();
  const { Duplex } = Stream;
  function emitClose(stream2) {
    stream2.emit("close");
  }
  function duplexOnEnd() {
    if (!this.destroyed && this._writableState.finished) {
      this.destroy();
    }
  }
  function duplexOnError(err) {
    this.removeListener("error", duplexOnError);
    this.destroy();
    if (this.listenerCount("error") === 0) {
      this.emit("error", err);
    }
  }
  function createWebSocketStream(ws2, options) {
    let terminateOnDestroy = true;
    const duplex = new Duplex({
      ...options,
      autoDestroy: false,
      emitClose: false,
      objectMode: false,
      writableObjectMode: false,
    });
    ws2.on("message", function message(msg, isBinary) {
      const data =
        !isBinary && duplex._readableState.objectMode ? msg.toString() : msg;
      if (!duplex.push(data)) ws2.pause();
    });
    ws2.once("error", function error(err) {
      if (duplex.destroyed) return;
      terminateOnDestroy = false;
      duplex.destroy(err);
    });
    ws2.once("close", function close() {
      if (duplex.destroyed) return;
      duplex.push(null);
    });
    duplex._destroy = function (err, callback) {
      if (ws2.readyState === ws2.CLOSED) {
        callback(err);
        process.nextTick(emitClose, duplex);
        return;
      }
      let called = false;
      ws2.once("error", function error(err2) {
        called = true;
        callback(err2);
      });
      ws2.once("close", function close() {
        if (!called) callback(err);
        process.nextTick(emitClose, duplex);
      });
      if (terminateOnDestroy) ws2.terminate();
    };
    duplex._final = function (callback) {
      if (ws2.readyState === ws2.CONNECTING) {
        ws2.once("open", function open() {
          duplex._final(callback);
        });
        return;
      }
      if (ws2._socket === null) return;
      if (ws2._socket._writableState.finished) {
        callback();
        if (duplex._readableState.endEmitted) duplex.destroy();
      } else {
        ws2._socket.once("finish", function finish() {
          callback();
        });
        ws2.close();
      }
    };
    duplex._read = function () {
      if (ws2.isPaused) ws2.resume();
    };
    duplex._write = function (chunk, encoding, callback) {
      if (ws2.readyState === ws2.CONNECTING) {
        ws2.once("open", function open() {
          duplex._write(chunk, encoding, callback);
        });
        return;
      }
      ws2.send(chunk, callback);
    };
    duplex.on("end", duplexOnEnd);
    duplex.on("error", duplexOnError);
    return duplex;
  }
  stream = createWebSocketStream;
  return stream;
}
var subprotocol;
var hasRequiredSubprotocol;
function requireSubprotocol() {
  if (hasRequiredSubprotocol) return subprotocol;
  hasRequiredSubprotocol = 1;
  const { tokenChars } = requireValidation();
  function parse(header) {
    const protocols = /* @__PURE__ */ new Set();
    let start = -1;
    let end = -1;
    let i = 0;
    for (i; i < header.length; i++) {
      const code = header.charCodeAt(i);
      if (end === -1 && tokenChars[code] === 1) {
        if (start === -1) start = i;
      } else if (i !== 0 && (code === 32 || code === 9)) {
        if (end === -1 && start !== -1) end = i;
      } else if (code === 44) {
        if (start === -1) {
          throw new SyntaxError(`Unexpected character at index ${i}`);
        }
        if (end === -1) end = i;
        const protocol2 = header.slice(start, end);
        if (protocols.has(protocol2)) {
          throw new SyntaxError(`The "${protocol2}" subprotocol is duplicated`);
        }
        protocols.add(protocol2);
        start = end = -1;
      } else {
        throw new SyntaxError(`Unexpected character at index ${i}`);
      }
    }
    if (start === -1 || end !== -1) {
      throw new SyntaxError("Unexpected end of input");
    }
    const protocol = header.slice(start, i);
    if (protocols.has(protocol)) {
      throw new SyntaxError(`The "${protocol}" subprotocol is duplicated`);
    }
    protocols.add(protocol);
    return protocols;
  }
  subprotocol = { parse };
  return subprotocol;
}
var websocketServer;
var hasRequiredWebsocketServer;
function requireWebsocketServer() {
  if (hasRequiredWebsocketServer) return websocketServer;
  hasRequiredWebsocketServer = 1;
  const EventEmitter2 = require$$0$3;
  const http$1 = http;
  const { Duplex } = Stream;
  const { createHash } = require$$1$4;
  const extension2 = requireExtension();
  const PerMessageDeflate = requirePermessageDeflate();
  const subprotocol2 = requireSubprotocol();
  const WebSocket = requireWebsocket();
  const { GUID, kWebSocket } = requireConstants();
  const keyRegex = /^[+/0-9A-Za-z]{22}==$/;
  const RUNNING = 0;
  const CLOSING = 1;
  const CLOSED = 2;
  class WebSocketServer extends EventEmitter2 {
    /**
     * Create a `WebSocketServer` instance.
     *
     * @param {Object} options Configuration options
     * @param {Boolean} [options.allowSynchronousEvents=true] Specifies whether
     *     any of the `'message'`, `'ping'`, and `'pong'` events can be emitted
     *     multiple times in the same tick
     * @param {Boolean} [options.autoPong=true] Specifies whether or not to
     *     automatically send a pong in response to a ping
     * @param {Number} [options.backlog=511] The maximum length of the queue of
     *     pending connections
     * @param {Boolean} [options.clientTracking=true] Specifies whether or not to
     *     track clients
     * @param {Function} [options.handleProtocols] A hook to handle protocols
     * @param {String} [options.host] The hostname where to bind the server
     * @param {Number} [options.maxPayload=104857600] The maximum allowed message
     *     size
     * @param {Boolean} [options.noServer=false] Enable no server mode
     * @param {String} [options.path] Accept only connections matching this path
     * @param {(Boolean|Object)} [options.perMessageDeflate=false] Enable/disable
     *     permessage-deflate
     * @param {Number} [options.port] The port where to bind the server
     * @param {(http.Server|https.Server)} [options.server] A pre-created HTTP/S
     *     server to use
     * @param {Boolean} [options.skipUTF8Validation=false] Specifies whether or
     *     not to skip UTF-8 validation for text and close messages
     * @param {Function} [options.verifyClient] A hook to reject connections
     * @param {Function} [options.WebSocket=WebSocket] Specifies the `WebSocket`
     *     class to use. It must be the `WebSocket` class or class that extends it
     * @param {Function} [callback] A listener for the `listening` event
     */
    constructor(options, callback) {
      super();
      options = {
        allowSynchronousEvents: true,
        autoPong: true,
        maxPayload: 100 * 1024 * 1024,
        skipUTF8Validation: false,
        perMessageDeflate: false,
        handleProtocols: null,
        clientTracking: true,
        verifyClient: null,
        noServer: false,
        backlog: null,
        // use default (511 as implemented in net.js)
        server: null,
        host: null,
        path: null,
        port: null,
        WebSocket,
        ...options,
      };
      if (
        (options.port == null && !options.server && !options.noServer) ||
        (options.port != null && (options.server || options.noServer)) ||
        (options.server && options.noServer)
      ) {
        throw new TypeError(
          'One and only one of the "port", "server", or "noServer" options must be specified'
        );
      }
      if (options.port != null) {
        this._server = http$1.createServer((req, res) => {
          const body = http$1.STATUS_CODES[426];
          res.writeHead(426, {
            "Content-Length": body.length,
            "Content-Type": "text/plain",
          });
          res.end(body);
        });
        this._server.listen(
          options.port,
          options.host,
          options.backlog,
          callback
        );
      } else if (options.server) {
        this._server = options.server;
      }
      if (this._server) {
        const emitConnection = this.emit.bind(this, "connection");
        this._removeListeners = addListeners(this._server, {
          listening: this.emit.bind(this, "listening"),
          error: this.emit.bind(this, "error"),
          upgrade: (req, socket, head) => {
            this.handleUpgrade(req, socket, head, emitConnection);
          },
        });
      }
      if (options.perMessageDeflate === true) options.perMessageDeflate = {};
      if (options.clientTracking) {
        this.clients = /* @__PURE__ */ new Set();
        this._shouldEmitClose = false;
      }
      this.options = options;
      this._state = RUNNING;
    }
    /**
     * Returns the bound address, the address family name, and port of the server
     * as reported by the operating system if listening on an IP socket.
     * If the server is listening on a pipe or UNIX domain socket, the name is
     * returned as a string.
     *
     * @return {(Object|String|null)} The address of the server
     * @public
     */
    address() {
      if (this.options.noServer) {
        throw new Error('The server is operating in "noServer" mode');
      }
      if (!this._server) return null;
      return this._server.address();
    }
    /**
     * Stop the server from accepting new connections and emit the `'close'` event
     * when all existing connections are closed.
     *
     * @param {Function} [cb] A one-time listener for the `'close'` event
     * @public
     */
    close(cb) {
      if (this._state === CLOSED) {
        if (cb) {
          this.once("close", () => {
            cb(new Error("The server is not running"));
          });
        }
        process.nextTick(emitClose, this);
        return;
      }
      if (cb) this.once("close", cb);
      if (this._state === CLOSING) return;
      this._state = CLOSING;
      if (this.options.noServer || this.options.server) {
        if (this._server) {
          this._removeListeners();
          this._removeListeners = this._server = null;
        }
        if (this.clients) {
          if (!this.clients.size) {
            process.nextTick(emitClose, this);
          } else {
            this._shouldEmitClose = true;
          }
        } else {
          process.nextTick(emitClose, this);
        }
      } else {
        const server = this._server;
        this._removeListeners();
        this._removeListeners = this._server = null;
        server.close(() => {
          emitClose(this);
        });
      }
    }
    /**
     * See if a given request should be handled by this server instance.
     *
     * @param {http.IncomingMessage} req Request object to inspect
     * @return {Boolean} `true` if the request is valid, else `false`
     * @public
     */
    shouldHandle(req) {
      if (this.options.path) {
        const index = req.url.indexOf("?");
        const pathname = index !== -1 ? req.url.slice(0, index) : req.url;
        if (pathname !== this.options.path) return false;
      }
      return true;
    }
    /**
     * Handle a HTTP Upgrade request.
     *
     * @param {http.IncomingMessage} req The request object
     * @param {Duplex} socket The network socket between the server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Function} cb Callback
     * @public
     */
    handleUpgrade(req, socket, head, cb) {
      socket.on("error", socketOnError);
      const key = req.headers["sec-websocket-key"];
      const upgrade = req.headers.upgrade;
      const version = +req.headers["sec-websocket-version"];
      if (req.method !== "GET") {
        const message = "Invalid HTTP method";
        abortHandshakeOrEmitwsClientError(this, req, socket, 405, message);
        return;
      }
      if (upgrade === void 0 || upgrade.toLowerCase() !== "websocket") {
        const message = "Invalid Upgrade header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (key === void 0 || !keyRegex.test(key)) {
        const message = "Missing or invalid Sec-WebSocket-Key header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
        return;
      }
      if (version !== 13 && version !== 8) {
        const message = "Missing or invalid Sec-WebSocket-Version header";
        abortHandshakeOrEmitwsClientError(this, req, socket, 400, message, {
          "Sec-WebSocket-Version": "13, 8",
        });
        return;
      }
      if (!this.shouldHandle(req)) {
        abortHandshake(socket, 400);
        return;
      }
      const secWebSocketProtocol = req.headers["sec-websocket-protocol"];
      let protocols = /* @__PURE__ */ new Set();
      if (secWebSocketProtocol !== void 0) {
        try {
          protocols = subprotocol2.parse(secWebSocketProtocol);
        } catch (err) {
          const message = "Invalid Sec-WebSocket-Protocol header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      const secWebSocketExtensions = req.headers["sec-websocket-extensions"];
      const extensions = {};
      if (this.options.perMessageDeflate && secWebSocketExtensions !== void 0) {
        const perMessageDeflate = new PerMessageDeflate(
          this.options.perMessageDeflate,
          true,
          this.options.maxPayload
        );
        try {
          const offers = extension2.parse(secWebSocketExtensions);
          if (offers[PerMessageDeflate.extensionName]) {
            perMessageDeflate.accept(offers[PerMessageDeflate.extensionName]);
            extensions[PerMessageDeflate.extensionName] = perMessageDeflate;
          }
        } catch (err) {
          const message =
            "Invalid or unacceptable Sec-WebSocket-Extensions header";
          abortHandshakeOrEmitwsClientError(this, req, socket, 400, message);
          return;
        }
      }
      if (this.options.verifyClient) {
        const info = {
          origin:
            req.headers[`${version === 8 ? "sec-websocket-origin" : "origin"}`],
          secure: !!(req.socket.authorized || req.socket.encrypted),
          req,
        };
        if (this.options.verifyClient.length === 2) {
          this.options.verifyClient(
            info,
            (verified, code, message, headers) => {
              if (!verified) {
                return abortHandshake(socket, code || 401, message, headers);
              }
              this.completeUpgrade(
                extensions,
                key,
                protocols,
                req,
                socket,
                head,
                cb
              );
            }
          );
          return;
        }
        if (!this.options.verifyClient(info))
          return abortHandshake(socket, 401);
      }
      this.completeUpgrade(extensions, key, protocols, req, socket, head, cb);
    }
    /**
     * Upgrade the connection to WebSocket.
     *
     * @param {Object} extensions The accepted extensions
     * @param {String} key The value of the `Sec-WebSocket-Key` header
     * @param {Set} protocols The subprotocols
     * @param {http.IncomingMessage} req The request object
     * @param {Duplex} socket The network socket between the server and client
     * @param {Buffer} head The first packet of the upgraded stream
     * @param {Function} cb Callback
     * @throws {Error} If called more than once with the same socket
     * @private
     */
    completeUpgrade(extensions, key, protocols, req, socket, head, cb) {
      if (!socket.readable || !socket.writable) return socket.destroy();
      if (socket[kWebSocket]) {
        throw new Error(
          "server.handleUpgrade() was called more than once with the same socket, possibly due to a misconfiguration"
        );
      }
      if (this._state > RUNNING) return abortHandshake(socket, 503);
      const digest = createHash("sha1")
        .update(key + GUID)
        .digest("base64");
      const headers = [
        "HTTP/1.1 101 Switching Protocols",
        "Upgrade: websocket",
        "Connection: Upgrade",
        `Sec-WebSocket-Accept: ${digest}`,
      ];
      const ws2 = new this.options.WebSocket(null, void 0, this.options);
      if (protocols.size) {
        const protocol = this.options.handleProtocols
          ? this.options.handleProtocols(protocols, req)
          : protocols.values().next().value;
        if (protocol) {
          headers.push(`Sec-WebSocket-Protocol: ${protocol}`);
          ws2._protocol = protocol;
        }
      }
      if (extensions[PerMessageDeflate.extensionName]) {
        const params = extensions[PerMessageDeflate.extensionName].params;
        const value = extension2.format({
          [PerMessageDeflate.extensionName]: [params],
        });
        headers.push(`Sec-WebSocket-Extensions: ${value}`);
        ws2._extensions = extensions;
      }
      this.emit("headers", headers, req);
      socket.write(headers.concat("\r\n").join("\r\n"));
      socket.removeListener("error", socketOnError);
      ws2.setSocket(socket, head, {
        allowSynchronousEvents: this.options.allowSynchronousEvents,
        maxPayload: this.options.maxPayload,
        skipUTF8Validation: this.options.skipUTF8Validation,
      });
      if (this.clients) {
        this.clients.add(ws2);
        ws2.on("close", () => {
          this.clients.delete(ws2);
          if (this._shouldEmitClose && !this.clients.size) {
            process.nextTick(emitClose, this);
          }
        });
      }
      cb(ws2, req);
    }
  }
  websocketServer = WebSocketServer;
  function addListeners(server, map) {
    for (const event of Object.keys(map)) server.on(event, map[event]);
    return function removeListeners() {
      for (const event of Object.keys(map)) {
        server.removeListener(event, map[event]);
      }
    };
  }
  function emitClose(server) {
    server._state = CLOSED;
    server.emit("close");
  }
  function socketOnError() {
    this.destroy();
  }
  function abortHandshake(socket, code, message, headers) {
    message = message || http$1.STATUS_CODES[code];
    headers = {
      Connection: "close",
      "Content-Type": "text/html",
      "Content-Length": Buffer.byteLength(message),
      ...headers,
    };
    socket.once("finish", socket.destroy);
    socket.end(
      `HTTP/1.1 ${code} ${http$1.STATUS_CODES[code]}\r
` +
        Object.keys(headers)
          .map((h) => `${h}: ${headers[h]}`)
          .join("\r\n") +
        "\r\n\r\n" +
        message
    );
  }
  function abortHandshakeOrEmitwsClientError(
    server,
    req,
    socket,
    code,
    message,
    headers
  ) {
    if (server.listenerCount("wsClientError")) {
      const err = new Error(message);
      Error.captureStackTrace(err, abortHandshakeOrEmitwsClientError);
      server.emit("wsClientError", err, socket, req);
    } else {
      abortHandshake(socket, code, message, headers);
    }
  }
  return websocketServer;
}
var ws;
var hasRequiredWs;
function requireWs() {
  if (hasRequiredWs) return ws;
  hasRequiredWs = 1;
  const WebSocket = requireWebsocket();
  WebSocket.createWebSocketStream = requireStream();
  WebSocket.Server = requireWebsocketServer();
  WebSocket.Receiver = requireReceiver();
  WebSocket.Sender = requireSender();
  WebSocket.WebSocket = WebSocket;
  WebSocket.WebSocketServer = WebSocket.Server;
  ws = WebSocket;
  return ws;
}
var publicApi = {};
var URL$2 = { exports: {} };
var lib$1;
var hasRequiredLib;
function requireLib() {
  if (hasRequiredLib) return lib$1;
  hasRequiredLib = 1;
  var conversions = {};
  lib$1 = conversions;
  function sign(x) {
    return x < 0 ? -1 : 1;
  }
  function evenRound(x) {
    if (x % 1 === 0.5 && (x & 1) === 0) {
      return Math.floor(x);
    } else {
      return Math.round(x);
    }
  }
  function createNumberConversion(bitLength, typeOpts) {
    if (!typeOpts.unsigned) {
      --bitLength;
    }
    const lowerBound = typeOpts.unsigned ? 0 : -Math.pow(2, bitLength);
    const upperBound = Math.pow(2, bitLength) - 1;
    const moduloVal = typeOpts.moduloBitLength
      ? Math.pow(2, typeOpts.moduloBitLength)
      : Math.pow(2, bitLength);
    const moduloBound = typeOpts.moduloBitLength
      ? Math.pow(2, typeOpts.moduloBitLength - 1)
      : Math.pow(2, bitLength - 1);
    return function (V, opts) {
      if (!opts) opts = {};
      let x = +V;
      if (opts.enforceRange) {
        if (!Number.isFinite(x)) {
          throw new TypeError("Argument is not a finite number");
        }
        x = sign(x) * Math.floor(Math.abs(x));
        if (x < lowerBound || x > upperBound) {
          throw new TypeError("Argument is not in byte range");
        }
        return x;
      }
      if (!isNaN(x) && opts.clamp) {
        x = evenRound(x);
        if (x < lowerBound) x = lowerBound;
        if (x > upperBound) x = upperBound;
        return x;
      }
      if (!Number.isFinite(x) || x === 0) {
        return 0;
      }
      x = sign(x) * Math.floor(Math.abs(x));
      x = x % moduloVal;
      if (!typeOpts.unsigned && x >= moduloBound) {
        return x - moduloVal;
      } else if (typeOpts.unsigned) {
        if (x < 0) {
          x += moduloVal;
        } else if (x === -0) {
          return 0;
        }
      }
      return x;
    };
  }
  conversions["void"] = function () {
    return void 0;
  };
  conversions["boolean"] = function (val) {
    return !!val;
  };
  conversions["byte"] = createNumberConversion(8, { unsigned: false });
  conversions["octet"] = createNumberConversion(8, { unsigned: true });
  conversions["short"] = createNumberConversion(16, { unsigned: false });
  conversions["unsigned short"] = createNumberConversion(16, {
    unsigned: true,
  });
  conversions["long"] = createNumberConversion(32, { unsigned: false });
  conversions["unsigned long"] = createNumberConversion(32, { unsigned: true });
  conversions["long long"] = createNumberConversion(32, {
    unsigned: false,
    moduloBitLength: 64,
  });
  conversions["unsigned long long"] = createNumberConversion(32, {
    unsigned: true,
    moduloBitLength: 64,
  });
  conversions["double"] = function (V) {
    const x = +V;
    if (!Number.isFinite(x)) {
      throw new TypeError("Argument is not a finite floating-point value");
    }
    return x;
  };
  conversions["unrestricted double"] = function (V) {
    const x = +V;
    if (isNaN(x)) {
      throw new TypeError("Argument is NaN");
    }
    return x;
  };
  conversions["float"] = conversions["double"];
  conversions["unrestricted float"] = conversions["unrestricted double"];
  conversions["DOMString"] = function (V, opts) {
    if (!opts) opts = {};
    if (opts.treatNullAsEmptyString && V === null) {
      return "";
    }
    return String(V);
  };
  conversions["ByteString"] = function (V, opts) {
    const x = String(V);
    let c = void 0;
    for (let i = 0; (c = x.codePointAt(i)) !== void 0; ++i) {
      if (c > 255) {
        throw new TypeError("Argument is not a valid bytestring");
      }
    }
    return x;
  };
  conversions["USVString"] = function (V) {
    const S = String(V);
    const n = S.length;
    const U = [];
    for (let i = 0; i < n; ++i) {
      const c = S.charCodeAt(i);
      if (c < 55296 || c > 57343) {
        U.push(String.fromCodePoint(c));
      } else if (56320 <= c && c <= 57343) {
        U.push(String.fromCodePoint(65533));
      } else {
        if (i === n - 1) {
          U.push(String.fromCodePoint(65533));
        } else {
          const d = S.charCodeAt(i + 1);
          if (56320 <= d && d <= 57343) {
            const a = c & 1023;
            const b = d & 1023;
            U.push(String.fromCodePoint((2 << 15) + (2 << 9) * a + b));
            ++i;
          } else {
            U.push(String.fromCodePoint(65533));
          }
        }
      }
    }
    return U.join("");
  };
  conversions["Date"] = function (V, opts) {
    if (!(V instanceof Date)) {
      throw new TypeError("Argument is not a Date object");
    }
    if (isNaN(V)) {
      return void 0;
    }
    return V;
  };
  conversions["RegExp"] = function (V, opts) {
    if (!(V instanceof RegExp)) {
      V = new RegExp(V);
    }
    return V;
  };
  return lib$1;
}
var utils$1 = { exports: {} };
var hasRequiredUtils$1;
function requireUtils$1() {
  if (hasRequiredUtils$1) return utils$1.exports;
  hasRequiredUtils$1 = 1;
  (function (module2) {
    module2.exports.mixin = function mixin(target, source) {
      const keys = Object.getOwnPropertyNames(source);
      for (let i = 0; i < keys.length; ++i) {
        Object.defineProperty(
          target,
          keys[i],
          Object.getOwnPropertyDescriptor(source, keys[i])
        );
      }
    };
    module2.exports.wrapperSymbol = Symbol("wrapper");
    module2.exports.implSymbol = Symbol("impl");
    module2.exports.wrapperForImpl = function (impl) {
      return impl[module2.exports.wrapperSymbol];
    };
    module2.exports.implForWrapper = function (wrapper) {
      return wrapper[module2.exports.implSymbol];
    };
  })(utils$1);
  return utils$1.exports;
}
var URLImpl = {};
var urlStateMachine = { exports: {} };
var tr46 = {};
const require$$1$1 = /* @__PURE__ */ JSON.parse(
  '[[[0,44],"disallowed_STD3_valid"],[[45,46],"valid"],[[47,47],"disallowed_STD3_valid"],[[48,57],"valid"],[[58,64],"disallowed_STD3_valid"],[[65,65],"mapped",[97]],[[66,66],"mapped",[98]],[[67,67],"mapped",[99]],[[68,68],"mapped",[100]],[[69,69],"mapped",[101]],[[70,70],"mapped",[102]],[[71,71],"mapped",[103]],[[72,72],"mapped",[104]],[[73,73],"mapped",[105]],[[74,74],"mapped",[106]],[[75,75],"mapped",[107]],[[76,76],"mapped",[108]],[[77,77],"mapped",[109]],[[78,78],"mapped",[110]],[[79,79],"mapped",[111]],[[80,80],"mapped",[112]],[[81,81],"mapped",[113]],[[82,82],"mapped",[114]],[[83,83],"mapped",[115]],[[84,84],"mapped",[116]],[[85,85],"mapped",[117]],[[86,86],"mapped",[118]],[[87,87],"mapped",[119]],[[88,88],"mapped",[120]],[[89,89],"mapped",[121]],[[90,90],"mapped",[122]],[[91,96],"disallowed_STD3_valid"],[[97,122],"valid"],[[123,127],"disallowed_STD3_valid"],[[128,159],"disallowed"],[[160,160],"disallowed_STD3_mapped",[32]],[[161,167],"valid",[],"NV8"],[[168,168],"disallowed_STD3_mapped",[32,776]],[[169,169],"valid",[],"NV8"],[[170,170],"mapped",[97]],[[171,172],"valid",[],"NV8"],[[173,173],"ignored"],[[174,174],"valid",[],"NV8"],[[175,175],"disallowed_STD3_mapped",[32,772]],[[176,177],"valid",[],"NV8"],[[178,178],"mapped",[50]],[[179,179],"mapped",[51]],[[180,180],"disallowed_STD3_mapped",[32,769]],[[181,181],"mapped",[956]],[[182,182],"valid",[],"NV8"],[[183,183],"valid"],[[184,184],"disallowed_STD3_mapped",[32,807]],[[185,185],"mapped",[49]],[[186,186],"mapped",[111]],[[187,187],"valid",[],"NV8"],[[188,188],"mapped",[49,8260,52]],[[189,189],"mapped",[49,8260,50]],[[190,190],"mapped",[51,8260,52]],[[191,191],"valid",[],"NV8"],[[192,192],"mapped",[224]],[[193,193],"mapped",[225]],[[194,194],"mapped",[226]],[[195,195],"mapped",[227]],[[196,196],"mapped",[228]],[[197,197],"mapped",[229]],[[198,198],"mapped",[230]],[[199,199],"mapped",[231]],[[200,200],"mapped",[232]],[[201,201],"mapped",[233]],[[202,202],"mapped",[234]],[[203,203],"mapped",[235]],[[204,204],"mapped",[236]],[[205,205],"mapped",[237]],[[206,206],"mapped",[238]],[[207,207],"mapped",[239]],[[208,208],"mapped",[240]],[[209,209],"mapped",[241]],[[210,210],"mapped",[242]],[[211,211],"mapped",[243]],[[212,212],"mapped",[244]],[[213,213],"mapped",[245]],[[214,214],"mapped",[246]],[[215,215],"valid",[],"NV8"],[[216,216],"mapped",[248]],[[217,217],"mapped",[249]],[[218,218],"mapped",[250]],[[219,219],"mapped",[251]],[[220,220],"mapped",[252]],[[221,221],"mapped",[253]],[[222,222],"mapped",[254]],[[223,223],"deviation",[115,115]],[[224,246],"valid"],[[247,247],"valid",[],"NV8"],[[248,255],"valid"],[[256,256],"mapped",[257]],[[257,257],"valid"],[[258,258],"mapped",[259]],[[259,259],"valid"],[[260,260],"mapped",[261]],[[261,261],"valid"],[[262,262],"mapped",[263]],[[263,263],"valid"],[[264,264],"mapped",[265]],[[265,265],"valid"],[[266,266],"mapped",[267]],[[267,267],"valid"],[[268,268],"mapped",[269]],[[269,269],"valid"],[[270,270],"mapped",[271]],[[271,271],"valid"],[[272,272],"mapped",[273]],[[273,273],"valid"],[[274,274],"mapped",[275]],[[275,275],"valid"],[[276,276],"mapped",[277]],[[277,277],"valid"],[[278,278],"mapped",[279]],[[279,279],"valid"],[[280,280],"mapped",[281]],[[281,281],"valid"],[[282,282],"mapped",[283]],[[283,283],"valid"],[[284,284],"mapped",[285]],[[285,285],"valid"],[[286,286],"mapped",[287]],[[287,287],"valid"],[[288,288],"mapped",[289]],[[289,289],"valid"],[[290,290],"mapped",[291]],[[291,291],"valid"],[[292,292],"mapped",[293]],[[293,293],"valid"],[[294,294],"mapped",[295]],[[295,295],"valid"],[[296,296],"mapped",[297]],[[297,297],"valid"],[[298,298],"mapped",[299]],[[299,299],"valid"],[[300,300],"mapped",[301]],[[301,301],"valid"],[[302,302],"mapped",[303]],[[303,303],"valid"],[[304,304],"mapped",[105,775]],[[305,305],"valid"],[[306,307],"mapped",[105,106]],[[308,308],"mapped",[309]],[[309,309],"valid"],[[310,310],"mapped",[311]],[[311,312],"valid"],[[313,313],"mapped",[314]],[[314,314],"valid"],[[315,315],"mapped",[316]],[[316,316],"valid"],[[317,317],"mapped",[318]],[[318,318],"valid"],[[319,320],"mapped",[108,183]],[[321,321],"mapped",[322]],[[322,322],"valid"],[[323,323],"mapped",[324]],[[324,324],"valid"],[[325,325],"mapped",[326]],[[326,326],"valid"],[[327,327],"mapped",[328]],[[328,328],"valid"],[[329,329],"mapped",[700,110]],[[330,330],"mapped",[331]],[[331,331],"valid"],[[332,332],"mapped",[333]],[[333,333],"valid"],[[334,334],"mapped",[335]],[[335,335],"valid"],[[336,336],"mapped",[337]],[[337,337],"valid"],[[338,338],"mapped",[339]],[[339,339],"valid"],[[340,340],"mapped",[341]],[[341,341],"valid"],[[342,342],"mapped",[343]],[[343,343],"valid"],[[344,344],"mapped",[345]],[[345,345],"valid"],[[346,346],"mapped",[347]],[[347,347],"valid"],[[348,348],"mapped",[349]],[[349,349],"valid"],[[350,350],"mapped",[351]],[[351,351],"valid"],[[352,352],"mapped",[353]],[[353,353],"valid"],[[354,354],"mapped",[355]],[[355,355],"valid"],[[356,356],"mapped",[357]],[[357,357],"valid"],[[358,358],"mapped",[359]],[[359,359],"valid"],[[360,360],"mapped",[361]],[[361,361],"valid"],[[362,362],"mapped",[363]],[[363,363],"valid"],[[364,364],"mapped",[365]],[[365,365],"valid"],[[366,366],"mapped",[367]],[[367,367],"valid"],[[368,368],"mapped",[369]],[[369,369],"valid"],[[370,370],"mapped",[371]],[[371,371],"valid"],[[372,372],"mapped",[373]],[[373,373],"valid"],[[374,374],"mapped",[375]],[[375,375],"valid"],[[376,376],"mapped",[255]],[[377,377],"mapped",[378]],[[378,378],"valid"],[[379,379],"mapped",[380]],[[380,380],"valid"],[[381,381],"mapped",[382]],[[382,382],"valid"],[[383,383],"mapped",[115]],[[384,384],"valid"],[[385,385],"mapped",[595]],[[386,386],"mapped",[387]],[[387,387],"valid"],[[388,388],"mapped",[389]],[[389,389],"valid"],[[390,390],"mapped",[596]],[[391,391],"mapped",[392]],[[392,392],"valid"],[[393,393],"mapped",[598]],[[394,394],"mapped",[599]],[[395,395],"mapped",[396]],[[396,397],"valid"],[[398,398],"mapped",[477]],[[399,399],"mapped",[601]],[[400,400],"mapped",[603]],[[401,401],"mapped",[402]],[[402,402],"valid"],[[403,403],"mapped",[608]],[[404,404],"mapped",[611]],[[405,405],"valid"],[[406,406],"mapped",[617]],[[407,407],"mapped",[616]],[[408,408],"mapped",[409]],[[409,411],"valid"],[[412,412],"mapped",[623]],[[413,413],"mapped",[626]],[[414,414],"valid"],[[415,415],"mapped",[629]],[[416,416],"mapped",[417]],[[417,417],"valid"],[[418,418],"mapped",[419]],[[419,419],"valid"],[[420,420],"mapped",[421]],[[421,421],"valid"],[[422,422],"mapped",[640]],[[423,423],"mapped",[424]],[[424,424],"valid"],[[425,425],"mapped",[643]],[[426,427],"valid"],[[428,428],"mapped",[429]],[[429,429],"valid"],[[430,430],"mapped",[648]],[[431,431],"mapped",[432]],[[432,432],"valid"],[[433,433],"mapped",[650]],[[434,434],"mapped",[651]],[[435,435],"mapped",[436]],[[436,436],"valid"],[[437,437],"mapped",[438]],[[438,438],"valid"],[[439,439],"mapped",[658]],[[440,440],"mapped",[441]],[[441,443],"valid"],[[444,444],"mapped",[445]],[[445,451],"valid"],[[452,454],"mapped",[100,382]],[[455,457],"mapped",[108,106]],[[458,460],"mapped",[110,106]],[[461,461],"mapped",[462]],[[462,462],"valid"],[[463,463],"mapped",[464]],[[464,464],"valid"],[[465,465],"mapped",[466]],[[466,466],"valid"],[[467,467],"mapped",[468]],[[468,468],"valid"],[[469,469],"mapped",[470]],[[470,470],"valid"],[[471,471],"mapped",[472]],[[472,472],"valid"],[[473,473],"mapped",[474]],[[474,474],"valid"],[[475,475],"mapped",[476]],[[476,477],"valid"],[[478,478],"mapped",[479]],[[479,479],"valid"],[[480,480],"mapped",[481]],[[481,481],"valid"],[[482,482],"mapped",[483]],[[483,483],"valid"],[[484,484],"mapped",[485]],[[485,485],"valid"],[[486,486],"mapped",[487]],[[487,487],"valid"],[[488,488],"mapped",[489]],[[489,489],"valid"],[[490,490],"mapped",[491]],[[491,491],"valid"],[[492,492],"mapped",[493]],[[493,493],"valid"],[[494,494],"mapped",[495]],[[495,496],"valid"],[[497,499],"mapped",[100,122]],[[500,500],"mapped",[501]],[[501,501],"valid"],[[502,502],"mapped",[405]],[[503,503],"mapped",[447]],[[504,504],"mapped",[505]],[[505,505],"valid"],[[506,506],"mapped",[507]],[[507,507],"valid"],[[508,508],"mapped",[509]],[[509,509],"valid"],[[510,510],"mapped",[511]],[[511,511],"valid"],[[512,512],"mapped",[513]],[[513,513],"valid"],[[514,514],"mapped",[515]],[[515,515],"valid"],[[516,516],"mapped",[517]],[[517,517],"valid"],[[518,518],"mapped",[519]],[[519,519],"valid"],[[520,520],"mapped",[521]],[[521,521],"valid"],[[522,522],"mapped",[523]],[[523,523],"valid"],[[524,524],"mapped",[525]],[[525,525],"valid"],[[526,526],"mapped",[527]],[[527,527],"valid"],[[528,528],"mapped",[529]],[[529,529],"valid"],[[530,530],"mapped",[531]],[[531,531],"valid"],[[532,532],"mapped",[533]],[[533,533],"valid"],[[534,534],"mapped",[535]],[[535,535],"valid"],[[536,536],"mapped",[537]],[[537,537],"valid"],[[538,538],"mapped",[539]],[[539,539],"valid"],[[540,540],"mapped",[541]],[[541,541],"valid"],[[542,542],"mapped",[543]],[[543,543],"valid"],[[544,544],"mapped",[414]],[[545,545],"valid"],[[546,546],"mapped",[547]],[[547,547],"valid"],[[548,548],"mapped",[549]],[[549,549],"valid"],[[550,550],"mapped",[551]],[[551,551],"valid"],[[552,552],"mapped",[553]],[[553,553],"valid"],[[554,554],"mapped",[555]],[[555,555],"valid"],[[556,556],"mapped",[557]],[[557,557],"valid"],[[558,558],"mapped",[559]],[[559,559],"valid"],[[560,560],"mapped",[561]],[[561,561],"valid"],[[562,562],"mapped",[563]],[[563,563],"valid"],[[564,566],"valid"],[[567,569],"valid"],[[570,570],"mapped",[11365]],[[571,571],"mapped",[572]],[[572,572],"valid"],[[573,573],"mapped",[410]],[[574,574],"mapped",[11366]],[[575,576],"valid"],[[577,577],"mapped",[578]],[[578,578],"valid"],[[579,579],"mapped",[384]],[[580,580],"mapped",[649]],[[581,581],"mapped",[652]],[[582,582],"mapped",[583]],[[583,583],"valid"],[[584,584],"mapped",[585]],[[585,585],"valid"],[[586,586],"mapped",[587]],[[587,587],"valid"],[[588,588],"mapped",[589]],[[589,589],"valid"],[[590,590],"mapped",[591]],[[591,591],"valid"],[[592,680],"valid"],[[681,685],"valid"],[[686,687],"valid"],[[688,688],"mapped",[104]],[[689,689],"mapped",[614]],[[690,690],"mapped",[106]],[[691,691],"mapped",[114]],[[692,692],"mapped",[633]],[[693,693],"mapped",[635]],[[694,694],"mapped",[641]],[[695,695],"mapped",[119]],[[696,696],"mapped",[121]],[[697,705],"valid"],[[706,709],"valid",[],"NV8"],[[710,721],"valid"],[[722,727],"valid",[],"NV8"],[[728,728],"disallowed_STD3_mapped",[32,774]],[[729,729],"disallowed_STD3_mapped",[32,775]],[[730,730],"disallowed_STD3_mapped",[32,778]],[[731,731],"disallowed_STD3_mapped",[32,808]],[[732,732],"disallowed_STD3_mapped",[32,771]],[[733,733],"disallowed_STD3_mapped",[32,779]],[[734,734],"valid",[],"NV8"],[[735,735],"valid",[],"NV8"],[[736,736],"mapped",[611]],[[737,737],"mapped",[108]],[[738,738],"mapped",[115]],[[739,739],"mapped",[120]],[[740,740],"mapped",[661]],[[741,745],"valid",[],"NV8"],[[746,747],"valid",[],"NV8"],[[748,748],"valid"],[[749,749],"valid",[],"NV8"],[[750,750],"valid"],[[751,767],"valid",[],"NV8"],[[768,831],"valid"],[[832,832],"mapped",[768]],[[833,833],"mapped",[769]],[[834,834],"valid"],[[835,835],"mapped",[787]],[[836,836],"mapped",[776,769]],[[837,837],"mapped",[953]],[[838,846],"valid"],[[847,847],"ignored"],[[848,855],"valid"],[[856,860],"valid"],[[861,863],"valid"],[[864,865],"valid"],[[866,866],"valid"],[[867,879],"valid"],[[880,880],"mapped",[881]],[[881,881],"valid"],[[882,882],"mapped",[883]],[[883,883],"valid"],[[884,884],"mapped",[697]],[[885,885],"valid"],[[886,886],"mapped",[887]],[[887,887],"valid"],[[888,889],"disallowed"],[[890,890],"disallowed_STD3_mapped",[32,953]],[[891,893],"valid"],[[894,894],"disallowed_STD3_mapped",[59]],[[895,895],"mapped",[1011]],[[896,899],"disallowed"],[[900,900],"disallowed_STD3_mapped",[32,769]],[[901,901],"disallowed_STD3_mapped",[32,776,769]],[[902,902],"mapped",[940]],[[903,903],"mapped",[183]],[[904,904],"mapped",[941]],[[905,905],"mapped",[942]],[[906,906],"mapped",[943]],[[907,907],"disallowed"],[[908,908],"mapped",[972]],[[909,909],"disallowed"],[[910,910],"mapped",[973]],[[911,911],"mapped",[974]],[[912,912],"valid"],[[913,913],"mapped",[945]],[[914,914],"mapped",[946]],[[915,915],"mapped",[947]],[[916,916],"mapped",[948]],[[917,917],"mapped",[949]],[[918,918],"mapped",[950]],[[919,919],"mapped",[951]],[[920,920],"mapped",[952]],[[921,921],"mapped",[953]],[[922,922],"mapped",[954]],[[923,923],"mapped",[955]],[[924,924],"mapped",[956]],[[925,925],"mapped",[957]],[[926,926],"mapped",[958]],[[927,927],"mapped",[959]],[[928,928],"mapped",[960]],[[929,929],"mapped",[961]],[[930,930],"disallowed"],[[931,931],"mapped",[963]],[[932,932],"mapped",[964]],[[933,933],"mapped",[965]],[[934,934],"mapped",[966]],[[935,935],"mapped",[967]],[[936,936],"mapped",[968]],[[937,937],"mapped",[969]],[[938,938],"mapped",[970]],[[939,939],"mapped",[971]],[[940,961],"valid"],[[962,962],"deviation",[963]],[[963,974],"valid"],[[975,975],"mapped",[983]],[[976,976],"mapped",[946]],[[977,977],"mapped",[952]],[[978,978],"mapped",[965]],[[979,979],"mapped",[973]],[[980,980],"mapped",[971]],[[981,981],"mapped",[966]],[[982,982],"mapped",[960]],[[983,983],"valid"],[[984,984],"mapped",[985]],[[985,985],"valid"],[[986,986],"mapped",[987]],[[987,987],"valid"],[[988,988],"mapped",[989]],[[989,989],"valid"],[[990,990],"mapped",[991]],[[991,991],"valid"],[[992,992],"mapped",[993]],[[993,993],"valid"],[[994,994],"mapped",[995]],[[995,995],"valid"],[[996,996],"mapped",[997]],[[997,997],"valid"],[[998,998],"mapped",[999]],[[999,999],"valid"],[[1000,1000],"mapped",[1001]],[[1001,1001],"valid"],[[1002,1002],"mapped",[1003]],[[1003,1003],"valid"],[[1004,1004],"mapped",[1005]],[[1005,1005],"valid"],[[1006,1006],"mapped",[1007]],[[1007,1007],"valid"],[[1008,1008],"mapped",[954]],[[1009,1009],"mapped",[961]],[[1010,1010],"mapped",[963]],[[1011,1011],"valid"],[[1012,1012],"mapped",[952]],[[1013,1013],"mapped",[949]],[[1014,1014],"valid",[],"NV8"],[[1015,1015],"mapped",[1016]],[[1016,1016],"valid"],[[1017,1017],"mapped",[963]],[[1018,1018],"mapped",[1019]],[[1019,1019],"valid"],[[1020,1020],"valid"],[[1021,1021],"mapped",[891]],[[1022,1022],"mapped",[892]],[[1023,1023],"mapped",[893]],[[1024,1024],"mapped",[1104]],[[1025,1025],"mapped",[1105]],[[1026,1026],"mapped",[1106]],[[1027,1027],"mapped",[1107]],[[1028,1028],"mapped",[1108]],[[1029,1029],"mapped",[1109]],[[1030,1030],"mapped",[1110]],[[1031,1031],"mapped",[1111]],[[1032,1032],"mapped",[1112]],[[1033,1033],"mapped",[1113]],[[1034,1034],"mapped",[1114]],[[1035,1035],"mapped",[1115]],[[1036,1036],"mapped",[1116]],[[1037,1037],"mapped",[1117]],[[1038,1038],"mapped",[1118]],[[1039,1039],"mapped",[1119]],[[1040,1040],"mapped",[1072]],[[1041,1041],"mapped",[1073]],[[1042,1042],"mapped",[1074]],[[1043,1043],"mapped",[1075]],[[1044,1044],"mapped",[1076]],[[1045,1045],"mapped",[1077]],[[1046,1046],"mapped",[1078]],[[1047,1047],"mapped",[1079]],[[1048,1048],"mapped",[1080]],[[1049,1049],"mapped",[1081]],[[1050,1050],"mapped",[1082]],[[1051,1051],"mapped",[1083]],[[1052,1052],"mapped",[1084]],[[1053,1053],"mapped",[1085]],[[1054,1054],"mapped",[1086]],[[1055,1055],"mapped",[1087]],[[1056,1056],"mapped",[1088]],[[1057,1057],"mapped",[1089]],[[1058,1058],"mapped",[1090]],[[1059,1059],"mapped",[1091]],[[1060,1060],"mapped",[1092]],[[1061,1061],"mapped",[1093]],[[1062,1062],"mapped",[1094]],[[1063,1063],"mapped",[1095]],[[1064,1064],"mapped",[1096]],[[1065,1065],"mapped",[1097]],[[1066,1066],"mapped",[1098]],[[1067,1067],"mapped",[1099]],[[1068,1068],"mapped",[1100]],[[1069,1069],"mapped",[1101]],[[1070,1070],"mapped",[1102]],[[1071,1071],"mapped",[1103]],[[1072,1103],"valid"],[[1104,1104],"valid"],[[1105,1116],"valid"],[[1117,1117],"valid"],[[1118,1119],"valid"],[[1120,1120],"mapped",[1121]],[[1121,1121],"valid"],[[1122,1122],"mapped",[1123]],[[1123,1123],"valid"],[[1124,1124],"mapped",[1125]],[[1125,1125],"valid"],[[1126,1126],"mapped",[1127]],[[1127,1127],"valid"],[[1128,1128],"mapped",[1129]],[[1129,1129],"valid"],[[1130,1130],"mapped",[1131]],[[1131,1131],"valid"],[[1132,1132],"mapped",[1133]],[[1133,1133],"valid"],[[1134,1134],"mapped",[1135]],[[1135,1135],"valid"],[[1136,1136],"mapped",[1137]],[[1137,1137],"valid"],[[1138,1138],"mapped",[1139]],[[1139,1139],"valid"],[[1140,1140],"mapped",[1141]],[[1141,1141],"valid"],[[1142,1142],"mapped",[1143]],[[1143,1143],"valid"],[[1144,1144],"mapped",[1145]],[[1145,1145],"valid"],[[1146,1146],"mapped",[1147]],[[1147,1147],"valid"],[[1148,1148],"mapped",[1149]],[[1149,1149],"valid"],[[1150,1150],"mapped",[1151]],[[1151,1151],"valid"],[[1152,1152],"mapped",[1153]],[[1153,1153],"valid"],[[1154,1154],"valid",[],"NV8"],[[1155,1158],"valid"],[[1159,1159],"valid"],[[1160,1161],"valid",[],"NV8"],[[1162,1162],"mapped",[1163]],[[1163,1163],"valid"],[[1164,1164],"mapped",[1165]],[[1165,1165],"valid"],[[1166,1166],"mapped",[1167]],[[1167,1167],"valid"],[[1168,1168],"mapped",[1169]],[[1169,1169],"valid"],[[1170,1170],"mapped",[1171]],[[1171,1171],"valid"],[[1172,1172],"mapped",[1173]],[[1173,1173],"valid"],[[1174,1174],"mapped",[1175]],[[1175,1175],"valid"],[[1176,1176],"mapped",[1177]],[[1177,1177],"valid"],[[1178,1178],"mapped",[1179]],[[1179,1179],"valid"],[[1180,1180],"mapped",[1181]],[[1181,1181],"valid"],[[1182,1182],"mapped",[1183]],[[1183,1183],"valid"],[[1184,1184],"mapped",[1185]],[[1185,1185],"valid"],[[1186,1186],"mapped",[1187]],[[1187,1187],"valid"],[[1188,1188],"mapped",[1189]],[[1189,1189],"valid"],[[1190,1190],"mapped",[1191]],[[1191,1191],"valid"],[[1192,1192],"mapped",[1193]],[[1193,1193],"valid"],[[1194,1194],"mapped",[1195]],[[1195,1195],"valid"],[[1196,1196],"mapped",[1197]],[[1197,1197],"valid"],[[1198,1198],"mapped",[1199]],[[1199,1199],"valid"],[[1200,1200],"mapped",[1201]],[[1201,1201],"valid"],[[1202,1202],"mapped",[1203]],[[1203,1203],"valid"],[[1204,1204],"mapped",[1205]],[[1205,1205],"valid"],[[1206,1206],"mapped",[1207]],[[1207,1207],"valid"],[[1208,1208],"mapped",[1209]],[[1209,1209],"valid"],[[1210,1210],"mapped",[1211]],[[1211,1211],"valid"],[[1212,1212],"mapped",[1213]],[[1213,1213],"valid"],[[1214,1214],"mapped",[1215]],[[1215,1215],"valid"],[[1216,1216],"disallowed"],[[1217,1217],"mapped",[1218]],[[1218,1218],"valid"],[[1219,1219],"mapped",[1220]],[[1220,1220],"valid"],[[1221,1221],"mapped",[1222]],[[1222,1222],"valid"],[[1223,1223],"mapped",[1224]],[[1224,1224],"valid"],[[1225,1225],"mapped",[1226]],[[1226,1226],"valid"],[[1227,1227],"mapped",[1228]],[[1228,1228],"valid"],[[1229,1229],"mapped",[1230]],[[1230,1230],"valid"],[[1231,1231],"valid"],[[1232,1232],"mapped",[1233]],[[1233,1233],"valid"],[[1234,1234],"mapped",[1235]],[[1235,1235],"valid"],[[1236,1236],"mapped",[1237]],[[1237,1237],"valid"],[[1238,1238],"mapped",[1239]],[[1239,1239],"valid"],[[1240,1240],"mapped",[1241]],[[1241,1241],"valid"],[[1242,1242],"mapped",[1243]],[[1243,1243],"valid"],[[1244,1244],"mapped",[1245]],[[1245,1245],"valid"],[[1246,1246],"mapped",[1247]],[[1247,1247],"valid"],[[1248,1248],"mapped",[1249]],[[1249,1249],"valid"],[[1250,1250],"mapped",[1251]],[[1251,1251],"valid"],[[1252,1252],"mapped",[1253]],[[1253,1253],"valid"],[[1254,1254],"mapped",[1255]],[[1255,1255],"valid"],[[1256,1256],"mapped",[1257]],[[1257,1257],"valid"],[[1258,1258],"mapped",[1259]],[[1259,1259],"valid"],[[1260,1260],"mapped",[1261]],[[1261,1261],"valid"],[[1262,1262],"mapped",[1263]],[[1263,1263],"valid"],[[1264,1264],"mapped",[1265]],[[1265,1265],"valid"],[[1266,1266],"mapped",[1267]],[[1267,1267],"valid"],[[1268,1268],"mapped",[1269]],[[1269,1269],"valid"],[[1270,1270],"mapped",[1271]],[[1271,1271],"valid"],[[1272,1272],"mapped",[1273]],[[1273,1273],"valid"],[[1274,1274],"mapped",[1275]],[[1275,1275],"valid"],[[1276,1276],"mapped",[1277]],[[1277,1277],"valid"],[[1278,1278],"mapped",[1279]],[[1279,1279],"valid"],[[1280,1280],"mapped",[1281]],[[1281,1281],"valid"],[[1282,1282],"mapped",[1283]],[[1283,1283],"valid"],[[1284,1284],"mapped",[1285]],[[1285,1285],"valid"],[[1286,1286],"mapped",[1287]],[[1287,1287],"valid"],[[1288,1288],"mapped",[1289]],[[1289,1289],"valid"],[[1290,1290],"mapped",[1291]],[[1291,1291],"valid"],[[1292,1292],"mapped",[1293]],[[1293,1293],"valid"],[[1294,1294],"mapped",[1295]],[[1295,1295],"valid"],[[1296,1296],"mapped",[1297]],[[1297,1297],"valid"],[[1298,1298],"mapped",[1299]],[[1299,1299],"valid"],[[1300,1300],"mapped",[1301]],[[1301,1301],"valid"],[[1302,1302],"mapped",[1303]],[[1303,1303],"valid"],[[1304,1304],"mapped",[1305]],[[1305,1305],"valid"],[[1306,1306],"mapped",[1307]],[[1307,1307],"valid"],[[1308,1308],"mapped",[1309]],[[1309,1309],"valid"],[[1310,1310],"mapped",[1311]],[[1311,1311],"valid"],[[1312,1312],"mapped",[1313]],[[1313,1313],"valid"],[[1314,1314],"mapped",[1315]],[[1315,1315],"valid"],[[1316,1316],"mapped",[1317]],[[1317,1317],"valid"],[[1318,1318],"mapped",[1319]],[[1319,1319],"valid"],[[1320,1320],"mapped",[1321]],[[1321,1321],"valid"],[[1322,1322],"mapped",[1323]],[[1323,1323],"valid"],[[1324,1324],"mapped",[1325]],[[1325,1325],"valid"],[[1326,1326],"mapped",[1327]],[[1327,1327],"valid"],[[1328,1328],"disallowed"],[[1329,1329],"mapped",[1377]],[[1330,1330],"mapped",[1378]],[[1331,1331],"mapped",[1379]],[[1332,1332],"mapped",[1380]],[[1333,1333],"mapped",[1381]],[[1334,1334],"mapped",[1382]],[[1335,1335],"mapped",[1383]],[[1336,1336],"mapped",[1384]],[[1337,1337],"mapped",[1385]],[[1338,1338],"mapped",[1386]],[[1339,1339],"mapped",[1387]],[[1340,1340],"mapped",[1388]],[[1341,1341],"mapped",[1389]],[[1342,1342],"mapped",[1390]],[[1343,1343],"mapped",[1391]],[[1344,1344],"mapped",[1392]],[[1345,1345],"mapped",[1393]],[[1346,1346],"mapped",[1394]],[[1347,1347],"mapped",[1395]],[[1348,1348],"mapped",[1396]],[[1349,1349],"mapped",[1397]],[[1350,1350],"mapped",[1398]],[[1351,1351],"mapped",[1399]],[[1352,1352],"mapped",[1400]],[[1353,1353],"mapped",[1401]],[[1354,1354],"mapped",[1402]],[[1355,1355],"mapped",[1403]],[[1356,1356],"mapped",[1404]],[[1357,1357],"mapped",[1405]],[[1358,1358],"mapped",[1406]],[[1359,1359],"mapped",[1407]],[[1360,1360],"mapped",[1408]],[[1361,1361],"mapped",[1409]],[[1362,1362],"mapped",[1410]],[[1363,1363],"mapped",[1411]],[[1364,1364],"mapped",[1412]],[[1365,1365],"mapped",[1413]],[[1366,1366],"mapped",[1414]],[[1367,1368],"disallowed"],[[1369,1369],"valid"],[[1370,1375],"valid",[],"NV8"],[[1376,1376],"disallowed"],[[1377,1414],"valid"],[[1415,1415],"mapped",[1381,1410]],[[1416,1416],"disallowed"],[[1417,1417],"valid",[],"NV8"],[[1418,1418],"valid",[],"NV8"],[[1419,1420],"disallowed"],[[1421,1422],"valid",[],"NV8"],[[1423,1423],"valid",[],"NV8"],[[1424,1424],"disallowed"],[[1425,1441],"valid"],[[1442,1442],"valid"],[[1443,1455],"valid"],[[1456,1465],"valid"],[[1466,1466],"valid"],[[1467,1469],"valid"],[[1470,1470],"valid",[],"NV8"],[[1471,1471],"valid"],[[1472,1472],"valid",[],"NV8"],[[1473,1474],"valid"],[[1475,1475],"valid",[],"NV8"],[[1476,1476],"valid"],[[1477,1477],"valid"],[[1478,1478],"valid",[],"NV8"],[[1479,1479],"valid"],[[1480,1487],"disallowed"],[[1488,1514],"valid"],[[1515,1519],"disallowed"],[[1520,1524],"valid"],[[1525,1535],"disallowed"],[[1536,1539],"disallowed"],[[1540,1540],"disallowed"],[[1541,1541],"disallowed"],[[1542,1546],"valid",[],"NV8"],[[1547,1547],"valid",[],"NV8"],[[1548,1548],"valid",[],"NV8"],[[1549,1551],"valid",[],"NV8"],[[1552,1557],"valid"],[[1558,1562],"valid"],[[1563,1563],"valid",[],"NV8"],[[1564,1564],"disallowed"],[[1565,1565],"disallowed"],[[1566,1566],"valid",[],"NV8"],[[1567,1567],"valid",[],"NV8"],[[1568,1568],"valid"],[[1569,1594],"valid"],[[1595,1599],"valid"],[[1600,1600],"valid",[],"NV8"],[[1601,1618],"valid"],[[1619,1621],"valid"],[[1622,1624],"valid"],[[1625,1630],"valid"],[[1631,1631],"valid"],[[1632,1641],"valid"],[[1642,1645],"valid",[],"NV8"],[[1646,1647],"valid"],[[1648,1652],"valid"],[[1653,1653],"mapped",[1575,1652]],[[1654,1654],"mapped",[1608,1652]],[[1655,1655],"mapped",[1735,1652]],[[1656,1656],"mapped",[1610,1652]],[[1657,1719],"valid"],[[1720,1721],"valid"],[[1722,1726],"valid"],[[1727,1727],"valid"],[[1728,1742],"valid"],[[1743,1743],"valid"],[[1744,1747],"valid"],[[1748,1748],"valid",[],"NV8"],[[1749,1756],"valid"],[[1757,1757],"disallowed"],[[1758,1758],"valid",[],"NV8"],[[1759,1768],"valid"],[[1769,1769],"valid",[],"NV8"],[[1770,1773],"valid"],[[1774,1775],"valid"],[[1776,1785],"valid"],[[1786,1790],"valid"],[[1791,1791],"valid"],[[1792,1805],"valid",[],"NV8"],[[1806,1806],"disallowed"],[[1807,1807],"disallowed"],[[1808,1836],"valid"],[[1837,1839],"valid"],[[1840,1866],"valid"],[[1867,1868],"disallowed"],[[1869,1871],"valid"],[[1872,1901],"valid"],[[1902,1919],"valid"],[[1920,1968],"valid"],[[1969,1969],"valid"],[[1970,1983],"disallowed"],[[1984,2037],"valid"],[[2038,2042],"valid",[],"NV8"],[[2043,2047],"disallowed"],[[2048,2093],"valid"],[[2094,2095],"disallowed"],[[2096,2110],"valid",[],"NV8"],[[2111,2111],"disallowed"],[[2112,2139],"valid"],[[2140,2141],"disallowed"],[[2142,2142],"valid",[],"NV8"],[[2143,2207],"disallowed"],[[2208,2208],"valid"],[[2209,2209],"valid"],[[2210,2220],"valid"],[[2221,2226],"valid"],[[2227,2228],"valid"],[[2229,2274],"disallowed"],[[2275,2275],"valid"],[[2276,2302],"valid"],[[2303,2303],"valid"],[[2304,2304],"valid"],[[2305,2307],"valid"],[[2308,2308],"valid"],[[2309,2361],"valid"],[[2362,2363],"valid"],[[2364,2381],"valid"],[[2382,2382],"valid"],[[2383,2383],"valid"],[[2384,2388],"valid"],[[2389,2389],"valid"],[[2390,2391],"valid"],[[2392,2392],"mapped",[2325,2364]],[[2393,2393],"mapped",[2326,2364]],[[2394,2394],"mapped",[2327,2364]],[[2395,2395],"mapped",[2332,2364]],[[2396,2396],"mapped",[2337,2364]],[[2397,2397],"mapped",[2338,2364]],[[2398,2398],"mapped",[2347,2364]],[[2399,2399],"mapped",[2351,2364]],[[2400,2403],"valid"],[[2404,2405],"valid",[],"NV8"],[[2406,2415],"valid"],[[2416,2416],"valid",[],"NV8"],[[2417,2418],"valid"],[[2419,2423],"valid"],[[2424,2424],"valid"],[[2425,2426],"valid"],[[2427,2428],"valid"],[[2429,2429],"valid"],[[2430,2431],"valid"],[[2432,2432],"valid"],[[2433,2435],"valid"],[[2436,2436],"disallowed"],[[2437,2444],"valid"],[[2445,2446],"disallowed"],[[2447,2448],"valid"],[[2449,2450],"disallowed"],[[2451,2472],"valid"],[[2473,2473],"disallowed"],[[2474,2480],"valid"],[[2481,2481],"disallowed"],[[2482,2482],"valid"],[[2483,2485],"disallowed"],[[2486,2489],"valid"],[[2490,2491],"disallowed"],[[2492,2492],"valid"],[[2493,2493],"valid"],[[2494,2500],"valid"],[[2501,2502],"disallowed"],[[2503,2504],"valid"],[[2505,2506],"disallowed"],[[2507,2509],"valid"],[[2510,2510],"valid"],[[2511,2518],"disallowed"],[[2519,2519],"valid"],[[2520,2523],"disallowed"],[[2524,2524],"mapped",[2465,2492]],[[2525,2525],"mapped",[2466,2492]],[[2526,2526],"disallowed"],[[2527,2527],"mapped",[2479,2492]],[[2528,2531],"valid"],[[2532,2533],"disallowed"],[[2534,2545],"valid"],[[2546,2554],"valid",[],"NV8"],[[2555,2555],"valid",[],"NV8"],[[2556,2560],"disallowed"],[[2561,2561],"valid"],[[2562,2562],"valid"],[[2563,2563],"valid"],[[2564,2564],"disallowed"],[[2565,2570],"valid"],[[2571,2574],"disallowed"],[[2575,2576],"valid"],[[2577,2578],"disallowed"],[[2579,2600],"valid"],[[2601,2601],"disallowed"],[[2602,2608],"valid"],[[2609,2609],"disallowed"],[[2610,2610],"valid"],[[2611,2611],"mapped",[2610,2620]],[[2612,2612],"disallowed"],[[2613,2613],"valid"],[[2614,2614],"mapped",[2616,2620]],[[2615,2615],"disallowed"],[[2616,2617],"valid"],[[2618,2619],"disallowed"],[[2620,2620],"valid"],[[2621,2621],"disallowed"],[[2622,2626],"valid"],[[2627,2630],"disallowed"],[[2631,2632],"valid"],[[2633,2634],"disallowed"],[[2635,2637],"valid"],[[2638,2640],"disallowed"],[[2641,2641],"valid"],[[2642,2648],"disallowed"],[[2649,2649],"mapped",[2582,2620]],[[2650,2650],"mapped",[2583,2620]],[[2651,2651],"mapped",[2588,2620]],[[2652,2652],"valid"],[[2653,2653],"disallowed"],[[2654,2654],"mapped",[2603,2620]],[[2655,2661],"disallowed"],[[2662,2676],"valid"],[[2677,2677],"valid"],[[2678,2688],"disallowed"],[[2689,2691],"valid"],[[2692,2692],"disallowed"],[[2693,2699],"valid"],[[2700,2700],"valid"],[[2701,2701],"valid"],[[2702,2702],"disallowed"],[[2703,2705],"valid"],[[2706,2706],"disallowed"],[[2707,2728],"valid"],[[2729,2729],"disallowed"],[[2730,2736],"valid"],[[2737,2737],"disallowed"],[[2738,2739],"valid"],[[2740,2740],"disallowed"],[[2741,2745],"valid"],[[2746,2747],"disallowed"],[[2748,2757],"valid"],[[2758,2758],"disallowed"],[[2759,2761],"valid"],[[2762,2762],"disallowed"],[[2763,2765],"valid"],[[2766,2767],"disallowed"],[[2768,2768],"valid"],[[2769,2783],"disallowed"],[[2784,2784],"valid"],[[2785,2787],"valid"],[[2788,2789],"disallowed"],[[2790,2799],"valid"],[[2800,2800],"valid",[],"NV8"],[[2801,2801],"valid",[],"NV8"],[[2802,2808],"disallowed"],[[2809,2809],"valid"],[[2810,2816],"disallowed"],[[2817,2819],"valid"],[[2820,2820],"disallowed"],[[2821,2828],"valid"],[[2829,2830],"disallowed"],[[2831,2832],"valid"],[[2833,2834],"disallowed"],[[2835,2856],"valid"],[[2857,2857],"disallowed"],[[2858,2864],"valid"],[[2865,2865],"disallowed"],[[2866,2867],"valid"],[[2868,2868],"disallowed"],[[2869,2869],"valid"],[[2870,2873],"valid"],[[2874,2875],"disallowed"],[[2876,2883],"valid"],[[2884,2884],"valid"],[[2885,2886],"disallowed"],[[2887,2888],"valid"],[[2889,2890],"disallowed"],[[2891,2893],"valid"],[[2894,2901],"disallowed"],[[2902,2903],"valid"],[[2904,2907],"disallowed"],[[2908,2908],"mapped",[2849,2876]],[[2909,2909],"mapped",[2850,2876]],[[2910,2910],"disallowed"],[[2911,2913],"valid"],[[2914,2915],"valid"],[[2916,2917],"disallowed"],[[2918,2927],"valid"],[[2928,2928],"valid",[],"NV8"],[[2929,2929],"valid"],[[2930,2935],"valid",[],"NV8"],[[2936,2945],"disallowed"],[[2946,2947],"valid"],[[2948,2948],"disallowed"],[[2949,2954],"valid"],[[2955,2957],"disallowed"],[[2958,2960],"valid"],[[2961,2961],"disallowed"],[[2962,2965],"valid"],[[2966,2968],"disallowed"],[[2969,2970],"valid"],[[2971,2971],"disallowed"],[[2972,2972],"valid"],[[2973,2973],"disallowed"],[[2974,2975],"valid"],[[2976,2978],"disallowed"],[[2979,2980],"valid"],[[2981,2983],"disallowed"],[[2984,2986],"valid"],[[2987,2989],"disallowed"],[[2990,2997],"valid"],[[2998,2998],"valid"],[[2999,3001],"valid"],[[3002,3005],"disallowed"],[[3006,3010],"valid"],[[3011,3013],"disallowed"],[[3014,3016],"valid"],[[3017,3017],"disallowed"],[[3018,3021],"valid"],[[3022,3023],"disallowed"],[[3024,3024],"valid"],[[3025,3030],"disallowed"],[[3031,3031],"valid"],[[3032,3045],"disallowed"],[[3046,3046],"valid"],[[3047,3055],"valid"],[[3056,3058],"valid",[],"NV8"],[[3059,3066],"valid",[],"NV8"],[[3067,3071],"disallowed"],[[3072,3072],"valid"],[[3073,3075],"valid"],[[3076,3076],"disallowed"],[[3077,3084],"valid"],[[3085,3085],"disallowed"],[[3086,3088],"valid"],[[3089,3089],"disallowed"],[[3090,3112],"valid"],[[3113,3113],"disallowed"],[[3114,3123],"valid"],[[3124,3124],"valid"],[[3125,3129],"valid"],[[3130,3132],"disallowed"],[[3133,3133],"valid"],[[3134,3140],"valid"],[[3141,3141],"disallowed"],[[3142,3144],"valid"],[[3145,3145],"disallowed"],[[3146,3149],"valid"],[[3150,3156],"disallowed"],[[3157,3158],"valid"],[[3159,3159],"disallowed"],[[3160,3161],"valid"],[[3162,3162],"valid"],[[3163,3167],"disallowed"],[[3168,3169],"valid"],[[3170,3171],"valid"],[[3172,3173],"disallowed"],[[3174,3183],"valid"],[[3184,3191],"disallowed"],[[3192,3199],"valid",[],"NV8"],[[3200,3200],"disallowed"],[[3201,3201],"valid"],[[3202,3203],"valid"],[[3204,3204],"disallowed"],[[3205,3212],"valid"],[[3213,3213],"disallowed"],[[3214,3216],"valid"],[[3217,3217],"disallowed"],[[3218,3240],"valid"],[[3241,3241],"disallowed"],[[3242,3251],"valid"],[[3252,3252],"disallowed"],[[3253,3257],"valid"],[[3258,3259],"disallowed"],[[3260,3261],"valid"],[[3262,3268],"valid"],[[3269,3269],"disallowed"],[[3270,3272],"valid"],[[3273,3273],"disallowed"],[[3274,3277],"valid"],[[3278,3284],"disallowed"],[[3285,3286],"valid"],[[3287,3293],"disallowed"],[[3294,3294],"valid"],[[3295,3295],"disallowed"],[[3296,3297],"valid"],[[3298,3299],"valid"],[[3300,3301],"disallowed"],[[3302,3311],"valid"],[[3312,3312],"disallowed"],[[3313,3314],"valid"],[[3315,3328],"disallowed"],[[3329,3329],"valid"],[[3330,3331],"valid"],[[3332,3332],"disallowed"],[[3333,3340],"valid"],[[3341,3341],"disallowed"],[[3342,3344],"valid"],[[3345,3345],"disallowed"],[[3346,3368],"valid"],[[3369,3369],"valid"],[[3370,3385],"valid"],[[3386,3386],"valid"],[[3387,3388],"disallowed"],[[3389,3389],"valid"],[[3390,3395],"valid"],[[3396,3396],"valid"],[[3397,3397],"disallowed"],[[3398,3400],"valid"],[[3401,3401],"disallowed"],[[3402,3405],"valid"],[[3406,3406],"valid"],[[3407,3414],"disallowed"],[[3415,3415],"valid"],[[3416,3422],"disallowed"],[[3423,3423],"valid"],[[3424,3425],"valid"],[[3426,3427],"valid"],[[3428,3429],"disallowed"],[[3430,3439],"valid"],[[3440,3445],"valid",[],"NV8"],[[3446,3448],"disallowed"],[[3449,3449],"valid",[],"NV8"],[[3450,3455],"valid"],[[3456,3457],"disallowed"],[[3458,3459],"valid"],[[3460,3460],"disallowed"],[[3461,3478],"valid"],[[3479,3481],"disallowed"],[[3482,3505],"valid"],[[3506,3506],"disallowed"],[[3507,3515],"valid"],[[3516,3516],"disallowed"],[[3517,3517],"valid"],[[3518,3519],"disallowed"],[[3520,3526],"valid"],[[3527,3529],"disallowed"],[[3530,3530],"valid"],[[3531,3534],"disallowed"],[[3535,3540],"valid"],[[3541,3541],"disallowed"],[[3542,3542],"valid"],[[3543,3543],"disallowed"],[[3544,3551],"valid"],[[3552,3557],"disallowed"],[[3558,3567],"valid"],[[3568,3569],"disallowed"],[[3570,3571],"valid"],[[3572,3572],"valid",[],"NV8"],[[3573,3584],"disallowed"],[[3585,3634],"valid"],[[3635,3635],"mapped",[3661,3634]],[[3636,3642],"valid"],[[3643,3646],"disallowed"],[[3647,3647],"valid",[],"NV8"],[[3648,3662],"valid"],[[3663,3663],"valid",[],"NV8"],[[3664,3673],"valid"],[[3674,3675],"valid",[],"NV8"],[[3676,3712],"disallowed"],[[3713,3714],"valid"],[[3715,3715],"disallowed"],[[3716,3716],"valid"],[[3717,3718],"disallowed"],[[3719,3720],"valid"],[[3721,3721],"disallowed"],[[3722,3722],"valid"],[[3723,3724],"disallowed"],[[3725,3725],"valid"],[[3726,3731],"disallowed"],[[3732,3735],"valid"],[[3736,3736],"disallowed"],[[3737,3743],"valid"],[[3744,3744],"disallowed"],[[3745,3747],"valid"],[[3748,3748],"disallowed"],[[3749,3749],"valid"],[[3750,3750],"disallowed"],[[3751,3751],"valid"],[[3752,3753],"disallowed"],[[3754,3755],"valid"],[[3756,3756],"disallowed"],[[3757,3762],"valid"],[[3763,3763],"mapped",[3789,3762]],[[3764,3769],"valid"],[[3770,3770],"disallowed"],[[3771,3773],"valid"],[[3774,3775],"disallowed"],[[3776,3780],"valid"],[[3781,3781],"disallowed"],[[3782,3782],"valid"],[[3783,3783],"disallowed"],[[3784,3789],"valid"],[[3790,3791],"disallowed"],[[3792,3801],"valid"],[[3802,3803],"disallowed"],[[3804,3804],"mapped",[3755,3737]],[[3805,3805],"mapped",[3755,3745]],[[3806,3807],"valid"],[[3808,3839],"disallowed"],[[3840,3840],"valid"],[[3841,3850],"valid",[],"NV8"],[[3851,3851],"valid"],[[3852,3852],"mapped",[3851]],[[3853,3863],"valid",[],"NV8"],[[3864,3865],"valid"],[[3866,3871],"valid",[],"NV8"],[[3872,3881],"valid"],[[3882,3892],"valid",[],"NV8"],[[3893,3893],"valid"],[[3894,3894],"valid",[],"NV8"],[[3895,3895],"valid"],[[3896,3896],"valid",[],"NV8"],[[3897,3897],"valid"],[[3898,3901],"valid",[],"NV8"],[[3902,3906],"valid"],[[3907,3907],"mapped",[3906,4023]],[[3908,3911],"valid"],[[3912,3912],"disallowed"],[[3913,3916],"valid"],[[3917,3917],"mapped",[3916,4023]],[[3918,3921],"valid"],[[3922,3922],"mapped",[3921,4023]],[[3923,3926],"valid"],[[3927,3927],"mapped",[3926,4023]],[[3928,3931],"valid"],[[3932,3932],"mapped",[3931,4023]],[[3933,3944],"valid"],[[3945,3945],"mapped",[3904,4021]],[[3946,3946],"valid"],[[3947,3948],"valid"],[[3949,3952],"disallowed"],[[3953,3954],"valid"],[[3955,3955],"mapped",[3953,3954]],[[3956,3956],"valid"],[[3957,3957],"mapped",[3953,3956]],[[3958,3958],"mapped",[4018,3968]],[[3959,3959],"mapped",[4018,3953,3968]],[[3960,3960],"mapped",[4019,3968]],[[3961,3961],"mapped",[4019,3953,3968]],[[3962,3968],"valid"],[[3969,3969],"mapped",[3953,3968]],[[3970,3972],"valid"],[[3973,3973],"valid",[],"NV8"],[[3974,3979],"valid"],[[3980,3983],"valid"],[[3984,3986],"valid"],[[3987,3987],"mapped",[3986,4023]],[[3988,3989],"valid"],[[3990,3990],"valid"],[[3991,3991],"valid"],[[3992,3992],"disallowed"],[[3993,3996],"valid"],[[3997,3997],"mapped",[3996,4023]],[[3998,4001],"valid"],[[4002,4002],"mapped",[4001,4023]],[[4003,4006],"valid"],[[4007,4007],"mapped",[4006,4023]],[[4008,4011],"valid"],[[4012,4012],"mapped",[4011,4023]],[[4013,4013],"valid"],[[4014,4016],"valid"],[[4017,4023],"valid"],[[4024,4024],"valid"],[[4025,4025],"mapped",[3984,4021]],[[4026,4028],"valid"],[[4029,4029],"disallowed"],[[4030,4037],"valid",[],"NV8"],[[4038,4038],"valid"],[[4039,4044],"valid",[],"NV8"],[[4045,4045],"disallowed"],[[4046,4046],"valid",[],"NV8"],[[4047,4047],"valid",[],"NV8"],[[4048,4049],"valid",[],"NV8"],[[4050,4052],"valid",[],"NV8"],[[4053,4056],"valid",[],"NV8"],[[4057,4058],"valid",[],"NV8"],[[4059,4095],"disallowed"],[[4096,4129],"valid"],[[4130,4130],"valid"],[[4131,4135],"valid"],[[4136,4136],"valid"],[[4137,4138],"valid"],[[4139,4139],"valid"],[[4140,4146],"valid"],[[4147,4149],"valid"],[[4150,4153],"valid"],[[4154,4159],"valid"],[[4160,4169],"valid"],[[4170,4175],"valid",[],"NV8"],[[4176,4185],"valid"],[[4186,4249],"valid"],[[4250,4253],"valid"],[[4254,4255],"valid",[],"NV8"],[[4256,4293],"disallowed"],[[4294,4294],"disallowed"],[[4295,4295],"mapped",[11559]],[[4296,4300],"disallowed"],[[4301,4301],"mapped",[11565]],[[4302,4303],"disallowed"],[[4304,4342],"valid"],[[4343,4344],"valid"],[[4345,4346],"valid"],[[4347,4347],"valid",[],"NV8"],[[4348,4348],"mapped",[4316]],[[4349,4351],"valid"],[[4352,4441],"valid",[],"NV8"],[[4442,4446],"valid",[],"NV8"],[[4447,4448],"disallowed"],[[4449,4514],"valid",[],"NV8"],[[4515,4519],"valid",[],"NV8"],[[4520,4601],"valid",[],"NV8"],[[4602,4607],"valid",[],"NV8"],[[4608,4614],"valid"],[[4615,4615],"valid"],[[4616,4678],"valid"],[[4679,4679],"valid"],[[4680,4680],"valid"],[[4681,4681],"disallowed"],[[4682,4685],"valid"],[[4686,4687],"disallowed"],[[4688,4694],"valid"],[[4695,4695],"disallowed"],[[4696,4696],"valid"],[[4697,4697],"disallowed"],[[4698,4701],"valid"],[[4702,4703],"disallowed"],[[4704,4742],"valid"],[[4743,4743],"valid"],[[4744,4744],"valid"],[[4745,4745],"disallowed"],[[4746,4749],"valid"],[[4750,4751],"disallowed"],[[4752,4782],"valid"],[[4783,4783],"valid"],[[4784,4784],"valid"],[[4785,4785],"disallowed"],[[4786,4789],"valid"],[[4790,4791],"disallowed"],[[4792,4798],"valid"],[[4799,4799],"disallowed"],[[4800,4800],"valid"],[[4801,4801],"disallowed"],[[4802,4805],"valid"],[[4806,4807],"disallowed"],[[4808,4814],"valid"],[[4815,4815],"valid"],[[4816,4822],"valid"],[[4823,4823],"disallowed"],[[4824,4846],"valid"],[[4847,4847],"valid"],[[4848,4878],"valid"],[[4879,4879],"valid"],[[4880,4880],"valid"],[[4881,4881],"disallowed"],[[4882,4885],"valid"],[[4886,4887],"disallowed"],[[4888,4894],"valid"],[[4895,4895],"valid"],[[4896,4934],"valid"],[[4935,4935],"valid"],[[4936,4954],"valid"],[[4955,4956],"disallowed"],[[4957,4958],"valid"],[[4959,4959],"valid"],[[4960,4960],"valid",[],"NV8"],[[4961,4988],"valid",[],"NV8"],[[4989,4991],"disallowed"],[[4992,5007],"valid"],[[5008,5017],"valid",[],"NV8"],[[5018,5023],"disallowed"],[[5024,5108],"valid"],[[5109,5109],"valid"],[[5110,5111],"disallowed"],[[5112,5112],"mapped",[5104]],[[5113,5113],"mapped",[5105]],[[5114,5114],"mapped",[5106]],[[5115,5115],"mapped",[5107]],[[5116,5116],"mapped",[5108]],[[5117,5117],"mapped",[5109]],[[5118,5119],"disallowed"],[[5120,5120],"valid",[],"NV8"],[[5121,5740],"valid"],[[5741,5742],"valid",[],"NV8"],[[5743,5750],"valid"],[[5751,5759],"valid"],[[5760,5760],"disallowed"],[[5761,5786],"valid"],[[5787,5788],"valid",[],"NV8"],[[5789,5791],"disallowed"],[[5792,5866],"valid"],[[5867,5872],"valid",[],"NV8"],[[5873,5880],"valid"],[[5881,5887],"disallowed"],[[5888,5900],"valid"],[[5901,5901],"disallowed"],[[5902,5908],"valid"],[[5909,5919],"disallowed"],[[5920,5940],"valid"],[[5941,5942],"valid",[],"NV8"],[[5943,5951],"disallowed"],[[5952,5971],"valid"],[[5972,5983],"disallowed"],[[5984,5996],"valid"],[[5997,5997],"disallowed"],[[5998,6000],"valid"],[[6001,6001],"disallowed"],[[6002,6003],"valid"],[[6004,6015],"disallowed"],[[6016,6067],"valid"],[[6068,6069],"disallowed"],[[6070,6099],"valid"],[[6100,6102],"valid",[],"NV8"],[[6103,6103],"valid"],[[6104,6107],"valid",[],"NV8"],[[6108,6108],"valid"],[[6109,6109],"valid"],[[6110,6111],"disallowed"],[[6112,6121],"valid"],[[6122,6127],"disallowed"],[[6128,6137],"valid",[],"NV8"],[[6138,6143],"disallowed"],[[6144,6149],"valid",[],"NV8"],[[6150,6150],"disallowed"],[[6151,6154],"valid",[],"NV8"],[[6155,6157],"ignored"],[[6158,6158],"disallowed"],[[6159,6159],"disallowed"],[[6160,6169],"valid"],[[6170,6175],"disallowed"],[[6176,6263],"valid"],[[6264,6271],"disallowed"],[[6272,6313],"valid"],[[6314,6314],"valid"],[[6315,6319],"disallowed"],[[6320,6389],"valid"],[[6390,6399],"disallowed"],[[6400,6428],"valid"],[[6429,6430],"valid"],[[6431,6431],"disallowed"],[[6432,6443],"valid"],[[6444,6447],"disallowed"],[[6448,6459],"valid"],[[6460,6463],"disallowed"],[[6464,6464],"valid",[],"NV8"],[[6465,6467],"disallowed"],[[6468,6469],"valid",[],"NV8"],[[6470,6509],"valid"],[[6510,6511],"disallowed"],[[6512,6516],"valid"],[[6517,6527],"disallowed"],[[6528,6569],"valid"],[[6570,6571],"valid"],[[6572,6575],"disallowed"],[[6576,6601],"valid"],[[6602,6607],"disallowed"],[[6608,6617],"valid"],[[6618,6618],"valid",[],"XV8"],[[6619,6621],"disallowed"],[[6622,6623],"valid",[],"NV8"],[[6624,6655],"valid",[],"NV8"],[[6656,6683],"valid"],[[6684,6685],"disallowed"],[[6686,6687],"valid",[],"NV8"],[[6688,6750],"valid"],[[6751,6751],"disallowed"],[[6752,6780],"valid"],[[6781,6782],"disallowed"],[[6783,6793],"valid"],[[6794,6799],"disallowed"],[[6800,6809],"valid"],[[6810,6815],"disallowed"],[[6816,6822],"valid",[],"NV8"],[[6823,6823],"valid"],[[6824,6829],"valid",[],"NV8"],[[6830,6831],"disallowed"],[[6832,6845],"valid"],[[6846,6846],"valid",[],"NV8"],[[6847,6911],"disallowed"],[[6912,6987],"valid"],[[6988,6991],"disallowed"],[[6992,7001],"valid"],[[7002,7018],"valid",[],"NV8"],[[7019,7027],"valid"],[[7028,7036],"valid",[],"NV8"],[[7037,7039],"disallowed"],[[7040,7082],"valid"],[[7083,7085],"valid"],[[7086,7097],"valid"],[[7098,7103],"valid"],[[7104,7155],"valid"],[[7156,7163],"disallowed"],[[7164,7167],"valid",[],"NV8"],[[7168,7223],"valid"],[[7224,7226],"disallowed"],[[7227,7231],"valid",[],"NV8"],[[7232,7241],"valid"],[[7242,7244],"disallowed"],[[7245,7293],"valid"],[[7294,7295],"valid",[],"NV8"],[[7296,7359],"disallowed"],[[7360,7367],"valid",[],"NV8"],[[7368,7375],"disallowed"],[[7376,7378],"valid"],[[7379,7379],"valid",[],"NV8"],[[7380,7410],"valid"],[[7411,7414],"valid"],[[7415,7415],"disallowed"],[[7416,7417],"valid"],[[7418,7423],"disallowed"],[[7424,7467],"valid"],[[7468,7468],"mapped",[97]],[[7469,7469],"mapped",[230]],[[7470,7470],"mapped",[98]],[[7471,7471],"valid"],[[7472,7472],"mapped",[100]],[[7473,7473],"mapped",[101]],[[7474,7474],"mapped",[477]],[[7475,7475],"mapped",[103]],[[7476,7476],"mapped",[104]],[[7477,7477],"mapped",[105]],[[7478,7478],"mapped",[106]],[[7479,7479],"mapped",[107]],[[7480,7480],"mapped",[108]],[[7481,7481],"mapped",[109]],[[7482,7482],"mapped",[110]],[[7483,7483],"valid"],[[7484,7484],"mapped",[111]],[[7485,7485],"mapped",[547]],[[7486,7486],"mapped",[112]],[[7487,7487],"mapped",[114]],[[7488,7488],"mapped",[116]],[[7489,7489],"mapped",[117]],[[7490,7490],"mapped",[119]],[[7491,7491],"mapped",[97]],[[7492,7492],"mapped",[592]],[[7493,7493],"mapped",[593]],[[7494,7494],"mapped",[7426]],[[7495,7495],"mapped",[98]],[[7496,7496],"mapped",[100]],[[7497,7497],"mapped",[101]],[[7498,7498],"mapped",[601]],[[7499,7499],"mapped",[603]],[[7500,7500],"mapped",[604]],[[7501,7501],"mapped",[103]],[[7502,7502],"valid"],[[7503,7503],"mapped",[107]],[[7504,7504],"mapped",[109]],[[7505,7505],"mapped",[331]],[[7506,7506],"mapped",[111]],[[7507,7507],"mapped",[596]],[[7508,7508],"mapped",[7446]],[[7509,7509],"mapped",[7447]],[[7510,7510],"mapped",[112]],[[7511,7511],"mapped",[116]],[[7512,7512],"mapped",[117]],[[7513,7513],"mapped",[7453]],[[7514,7514],"mapped",[623]],[[7515,7515],"mapped",[118]],[[7516,7516],"mapped",[7461]],[[7517,7517],"mapped",[946]],[[7518,7518],"mapped",[947]],[[7519,7519],"mapped",[948]],[[7520,7520],"mapped",[966]],[[7521,7521],"mapped",[967]],[[7522,7522],"mapped",[105]],[[7523,7523],"mapped",[114]],[[7524,7524],"mapped",[117]],[[7525,7525],"mapped",[118]],[[7526,7526],"mapped",[946]],[[7527,7527],"mapped",[947]],[[7528,7528],"mapped",[961]],[[7529,7529],"mapped",[966]],[[7530,7530],"mapped",[967]],[[7531,7531],"valid"],[[7532,7543],"valid"],[[7544,7544],"mapped",[1085]],[[7545,7578],"valid"],[[7579,7579],"mapped",[594]],[[7580,7580],"mapped",[99]],[[7581,7581],"mapped",[597]],[[7582,7582],"mapped",[240]],[[7583,7583],"mapped",[604]],[[7584,7584],"mapped",[102]],[[7585,7585],"mapped",[607]],[[7586,7586],"mapped",[609]],[[7587,7587],"mapped",[613]],[[7588,7588],"mapped",[616]],[[7589,7589],"mapped",[617]],[[7590,7590],"mapped",[618]],[[7591,7591],"mapped",[7547]],[[7592,7592],"mapped",[669]],[[7593,7593],"mapped",[621]],[[7594,7594],"mapped",[7557]],[[7595,7595],"mapped",[671]],[[7596,7596],"mapped",[625]],[[7597,7597],"mapped",[624]],[[7598,7598],"mapped",[626]],[[7599,7599],"mapped",[627]],[[7600,7600],"mapped",[628]],[[7601,7601],"mapped",[629]],[[7602,7602],"mapped",[632]],[[7603,7603],"mapped",[642]],[[7604,7604],"mapped",[643]],[[7605,7605],"mapped",[427]],[[7606,7606],"mapped",[649]],[[7607,7607],"mapped",[650]],[[7608,7608],"mapped",[7452]],[[7609,7609],"mapped",[651]],[[7610,7610],"mapped",[652]],[[7611,7611],"mapped",[122]],[[7612,7612],"mapped",[656]],[[7613,7613],"mapped",[657]],[[7614,7614],"mapped",[658]],[[7615,7615],"mapped",[952]],[[7616,7619],"valid"],[[7620,7626],"valid"],[[7627,7654],"valid"],[[7655,7669],"valid"],[[7670,7675],"disallowed"],[[7676,7676],"valid"],[[7677,7677],"valid"],[[7678,7679],"valid"],[[7680,7680],"mapped",[7681]],[[7681,7681],"valid"],[[7682,7682],"mapped",[7683]],[[7683,7683],"valid"],[[7684,7684],"mapped",[7685]],[[7685,7685],"valid"],[[7686,7686],"mapped",[7687]],[[7687,7687],"valid"],[[7688,7688],"mapped",[7689]],[[7689,7689],"valid"],[[7690,7690],"mapped",[7691]],[[7691,7691],"valid"],[[7692,7692],"mapped",[7693]],[[7693,7693],"valid"],[[7694,7694],"mapped",[7695]],[[7695,7695],"valid"],[[7696,7696],"mapped",[7697]],[[7697,7697],"valid"],[[7698,7698],"mapped",[7699]],[[7699,7699],"valid"],[[7700,7700],"mapped",[7701]],[[7701,7701],"valid"],[[7702,7702],"mapped",[7703]],[[7703,7703],"valid"],[[7704,7704],"mapped",[7705]],[[7705,7705],"valid"],[[7706,7706],"mapped",[7707]],[[7707,7707],"valid"],[[7708,7708],"mapped",[7709]],[[7709,7709],"valid"],[[7710,7710],"mapped",[7711]],[[7711,7711],"valid"],[[7712,7712],"mapped",[7713]],[[7713,7713],"valid"],[[7714,7714],"mapped",[7715]],[[7715,7715],"valid"],[[7716,7716],"mapped",[7717]],[[7717,7717],"valid"],[[7718,7718],"mapped",[7719]],[[7719,7719],"valid"],[[7720,7720],"mapped",[7721]],[[7721,7721],"valid"],[[7722,7722],"mapped",[7723]],[[7723,7723],"valid"],[[7724,7724],"mapped",[7725]],[[7725,7725],"valid"],[[7726,7726],"mapped",[7727]],[[7727,7727],"valid"],[[7728,7728],"mapped",[7729]],[[7729,7729],"valid"],[[7730,7730],"mapped",[7731]],[[7731,7731],"valid"],[[7732,7732],"mapped",[7733]],[[7733,7733],"valid"],[[7734,7734],"mapped",[7735]],[[7735,7735],"valid"],[[7736,7736],"mapped",[7737]],[[7737,7737],"valid"],[[7738,7738],"mapped",[7739]],[[7739,7739],"valid"],[[7740,7740],"mapped",[7741]],[[7741,7741],"valid"],[[7742,7742],"mapped",[7743]],[[7743,7743],"valid"],[[7744,7744],"mapped",[7745]],[[7745,7745],"valid"],[[7746,7746],"mapped",[7747]],[[7747,7747],"valid"],[[7748,7748],"mapped",[7749]],[[7749,7749],"valid"],[[7750,7750],"mapped",[7751]],[[7751,7751],"valid"],[[7752,7752],"mapped",[7753]],[[7753,7753],"valid"],[[7754,7754],"mapped",[7755]],[[7755,7755],"valid"],[[7756,7756],"mapped",[7757]],[[7757,7757],"valid"],[[7758,7758],"mapped",[7759]],[[7759,7759],"valid"],[[7760,7760],"mapped",[7761]],[[7761,7761],"valid"],[[7762,7762],"mapped",[7763]],[[7763,7763],"valid"],[[7764,7764],"mapped",[7765]],[[7765,7765],"valid"],[[7766,7766],"mapped",[7767]],[[7767,7767],"valid"],[[7768,7768],"mapped",[7769]],[[7769,7769],"valid"],[[7770,7770],"mapped",[7771]],[[7771,7771],"valid"],[[7772,7772],"mapped",[7773]],[[7773,7773],"valid"],[[7774,7774],"mapped",[7775]],[[7775,7775],"valid"],[[7776,7776],"mapped",[7777]],[[7777,7777],"valid"],[[7778,7778],"mapped",[7779]],[[7779,7779],"valid"],[[7780,7780],"mapped",[7781]],[[7781,7781],"valid"],[[7782,7782],"mapped",[7783]],[[7783,7783],"valid"],[[7784,7784],"mapped",[7785]],[[7785,7785],"valid"],[[7786,7786],"mapped",[7787]],[[7787,7787],"valid"],[[7788,7788],"mapped",[7789]],[[7789,7789],"valid"],[[7790,7790],"mapped",[7791]],[[7791,7791],"valid"],[[7792,7792],"mapped",[7793]],[[7793,7793],"valid"],[[7794,7794],"mapped",[7795]],[[7795,7795],"valid"],[[7796,7796],"mapped",[7797]],[[7797,7797],"valid"],[[7798,7798],"mapped",[7799]],[[7799,7799],"valid"],[[7800,7800],"mapped",[7801]],[[7801,7801],"valid"],[[7802,7802],"mapped",[7803]],[[7803,7803],"valid"],[[7804,7804],"mapped",[7805]],[[7805,7805],"valid"],[[7806,7806],"mapped",[7807]],[[7807,7807],"valid"],[[7808,7808],"mapped",[7809]],[[7809,7809],"valid"],[[7810,7810],"mapped",[7811]],[[7811,7811],"valid"],[[7812,7812],"mapped",[7813]],[[7813,7813],"valid"],[[7814,7814],"mapped",[7815]],[[7815,7815],"valid"],[[7816,7816],"mapped",[7817]],[[7817,7817],"valid"],[[7818,7818],"mapped",[7819]],[[7819,7819],"valid"],[[7820,7820],"mapped",[7821]],[[7821,7821],"valid"],[[7822,7822],"mapped",[7823]],[[7823,7823],"valid"],[[7824,7824],"mapped",[7825]],[[7825,7825],"valid"],[[7826,7826],"mapped",[7827]],[[7827,7827],"valid"],[[7828,7828],"mapped",[7829]],[[7829,7833],"valid"],[[7834,7834],"mapped",[97,702]],[[7835,7835],"mapped",[7777]],[[7836,7837],"valid"],[[7838,7838],"mapped",[115,115]],[[7839,7839],"valid"],[[7840,7840],"mapped",[7841]],[[7841,7841],"valid"],[[7842,7842],"mapped",[7843]],[[7843,7843],"valid"],[[7844,7844],"mapped",[7845]],[[7845,7845],"valid"],[[7846,7846],"mapped",[7847]],[[7847,7847],"valid"],[[7848,7848],"mapped",[7849]],[[7849,7849],"valid"],[[7850,7850],"mapped",[7851]],[[7851,7851],"valid"],[[7852,7852],"mapped",[7853]],[[7853,7853],"valid"],[[7854,7854],"mapped",[7855]],[[7855,7855],"valid"],[[7856,7856],"mapped",[7857]],[[7857,7857],"valid"],[[7858,7858],"mapped",[7859]],[[7859,7859],"valid"],[[7860,7860],"mapped",[7861]],[[7861,7861],"valid"],[[7862,7862],"mapped",[7863]],[[7863,7863],"valid"],[[7864,7864],"mapped",[7865]],[[7865,7865],"valid"],[[7866,7866],"mapped",[7867]],[[7867,7867],"valid"],[[7868,7868],"mapped",[7869]],[[7869,7869],"valid"],[[7870,7870],"mapped",[7871]],[[7871,7871],"valid"],[[7872,7872],"mapped",[7873]],[[7873,7873],"valid"],[[7874,7874],"mapped",[7875]],[[7875,7875],"valid"],[[7876,7876],"mapped",[7877]],[[7877,7877],"valid"],[[7878,7878],"mapped",[7879]],[[7879,7879],"valid"],[[7880,7880],"mapped",[7881]],[[7881,7881],"valid"],[[7882,7882],"mapped",[7883]],[[7883,7883],"valid"],[[7884,7884],"mapped",[7885]],[[7885,7885],"valid"],[[7886,7886],"mapped",[7887]],[[7887,7887],"valid"],[[7888,7888],"mapped",[7889]],[[7889,7889],"valid"],[[7890,7890],"mapped",[7891]],[[7891,7891],"valid"],[[7892,7892],"mapped",[7893]],[[7893,7893],"valid"],[[7894,7894],"mapped",[7895]],[[7895,7895],"valid"],[[7896,7896],"mapped",[7897]],[[7897,7897],"valid"],[[7898,7898],"mapped",[7899]],[[7899,7899],"valid"],[[7900,7900],"mapped",[7901]],[[7901,7901],"valid"],[[7902,7902],"mapped",[7903]],[[7903,7903],"valid"],[[7904,7904],"mapped",[7905]],[[7905,7905],"valid"],[[7906,7906],"mapped",[7907]],[[7907,7907],"valid"],[[7908,7908],"mapped",[7909]],[[7909,7909],"valid"],[[7910,7910],"mapped",[7911]],[[7911,7911],"valid"],[[7912,7912],"mapped",[7913]],[[7913,7913],"valid"],[[7914,7914],"mapped",[7915]],[[7915,7915],"valid"],[[7916,7916],"mapped",[7917]],[[7917,7917],"valid"],[[7918,7918],"mapped",[7919]],[[7919,7919],"valid"],[[7920,7920],"mapped",[7921]],[[7921,7921],"valid"],[[7922,7922],"mapped",[7923]],[[7923,7923],"valid"],[[7924,7924],"mapped",[7925]],[[7925,7925],"valid"],[[7926,7926],"mapped",[7927]],[[7927,7927],"valid"],[[7928,7928],"mapped",[7929]],[[7929,7929],"valid"],[[7930,7930],"mapped",[7931]],[[7931,7931],"valid"],[[7932,7932],"mapped",[7933]],[[7933,7933],"valid"],[[7934,7934],"mapped",[7935]],[[7935,7935],"valid"],[[7936,7943],"valid"],[[7944,7944],"mapped",[7936]],[[7945,7945],"mapped",[7937]],[[7946,7946],"mapped",[7938]],[[7947,7947],"mapped",[7939]],[[7948,7948],"mapped",[7940]],[[7949,7949],"mapped",[7941]],[[7950,7950],"mapped",[7942]],[[7951,7951],"mapped",[7943]],[[7952,7957],"valid"],[[7958,7959],"disallowed"],[[7960,7960],"mapped",[7952]],[[7961,7961],"mapped",[7953]],[[7962,7962],"mapped",[7954]],[[7963,7963],"mapped",[7955]],[[7964,7964],"mapped",[7956]],[[7965,7965],"mapped",[7957]],[[7966,7967],"disallowed"],[[7968,7975],"valid"],[[7976,7976],"mapped",[7968]],[[7977,7977],"mapped",[7969]],[[7978,7978],"mapped",[7970]],[[7979,7979],"mapped",[7971]],[[7980,7980],"mapped",[7972]],[[7981,7981],"mapped",[7973]],[[7982,7982],"mapped",[7974]],[[7983,7983],"mapped",[7975]],[[7984,7991],"valid"],[[7992,7992],"mapped",[7984]],[[7993,7993],"mapped",[7985]],[[7994,7994],"mapped",[7986]],[[7995,7995],"mapped",[7987]],[[7996,7996],"mapped",[7988]],[[7997,7997],"mapped",[7989]],[[7998,7998],"mapped",[7990]],[[7999,7999],"mapped",[7991]],[[8000,8005],"valid"],[[8006,8007],"disallowed"],[[8008,8008],"mapped",[8000]],[[8009,8009],"mapped",[8001]],[[8010,8010],"mapped",[8002]],[[8011,8011],"mapped",[8003]],[[8012,8012],"mapped",[8004]],[[8013,8013],"mapped",[8005]],[[8014,8015],"disallowed"],[[8016,8023],"valid"],[[8024,8024],"disallowed"],[[8025,8025],"mapped",[8017]],[[8026,8026],"disallowed"],[[8027,8027],"mapped",[8019]],[[8028,8028],"disallowed"],[[8029,8029],"mapped",[8021]],[[8030,8030],"disallowed"],[[8031,8031],"mapped",[8023]],[[8032,8039],"valid"],[[8040,8040],"mapped",[8032]],[[8041,8041],"mapped",[8033]],[[8042,8042],"mapped",[8034]],[[8043,8043],"mapped",[8035]],[[8044,8044],"mapped",[8036]],[[8045,8045],"mapped",[8037]],[[8046,8046],"mapped",[8038]],[[8047,8047],"mapped",[8039]],[[8048,8048],"valid"],[[8049,8049],"mapped",[940]],[[8050,8050],"valid"],[[8051,8051],"mapped",[941]],[[8052,8052],"valid"],[[8053,8053],"mapped",[942]],[[8054,8054],"valid"],[[8055,8055],"mapped",[943]],[[8056,8056],"valid"],[[8057,8057],"mapped",[972]],[[8058,8058],"valid"],[[8059,8059],"mapped",[973]],[[8060,8060],"valid"],[[8061,8061],"mapped",[974]],[[8062,8063],"disallowed"],[[8064,8064],"mapped",[7936,953]],[[8065,8065],"mapped",[7937,953]],[[8066,8066],"mapped",[7938,953]],[[8067,8067],"mapped",[7939,953]],[[8068,8068],"mapped",[7940,953]],[[8069,8069],"mapped",[7941,953]],[[8070,8070],"mapped",[7942,953]],[[8071,8071],"mapped",[7943,953]],[[8072,8072],"mapped",[7936,953]],[[8073,8073],"mapped",[7937,953]],[[8074,8074],"mapped",[7938,953]],[[8075,8075],"mapped",[7939,953]],[[8076,8076],"mapped",[7940,953]],[[8077,8077],"mapped",[7941,953]],[[8078,8078],"mapped",[7942,953]],[[8079,8079],"mapped",[7943,953]],[[8080,8080],"mapped",[7968,953]],[[8081,8081],"mapped",[7969,953]],[[8082,8082],"mapped",[7970,953]],[[8083,8083],"mapped",[7971,953]],[[8084,8084],"mapped",[7972,953]],[[8085,8085],"mapped",[7973,953]],[[8086,8086],"mapped",[7974,953]],[[8087,8087],"mapped",[7975,953]],[[8088,8088],"mapped",[7968,953]],[[8089,8089],"mapped",[7969,953]],[[8090,8090],"mapped",[7970,953]],[[8091,8091],"mapped",[7971,953]],[[8092,8092],"mapped",[7972,953]],[[8093,8093],"mapped",[7973,953]],[[8094,8094],"mapped",[7974,953]],[[8095,8095],"mapped",[7975,953]],[[8096,8096],"mapped",[8032,953]],[[8097,8097],"mapped",[8033,953]],[[8098,8098],"mapped",[8034,953]],[[8099,8099],"mapped",[8035,953]],[[8100,8100],"mapped",[8036,953]],[[8101,8101],"mapped",[8037,953]],[[8102,8102],"mapped",[8038,953]],[[8103,8103],"mapped",[8039,953]],[[8104,8104],"mapped",[8032,953]],[[8105,8105],"mapped",[8033,953]],[[8106,8106],"mapped",[8034,953]],[[8107,8107],"mapped",[8035,953]],[[8108,8108],"mapped",[8036,953]],[[8109,8109],"mapped",[8037,953]],[[8110,8110],"mapped",[8038,953]],[[8111,8111],"mapped",[8039,953]],[[8112,8113],"valid"],[[8114,8114],"mapped",[8048,953]],[[8115,8115],"mapped",[945,953]],[[8116,8116],"mapped",[940,953]],[[8117,8117],"disallowed"],[[8118,8118],"valid"],[[8119,8119],"mapped",[8118,953]],[[8120,8120],"mapped",[8112]],[[8121,8121],"mapped",[8113]],[[8122,8122],"mapped",[8048]],[[8123,8123],"mapped",[940]],[[8124,8124],"mapped",[945,953]],[[8125,8125],"disallowed_STD3_mapped",[32,787]],[[8126,8126],"mapped",[953]],[[8127,8127],"disallowed_STD3_mapped",[32,787]],[[8128,8128],"disallowed_STD3_mapped",[32,834]],[[8129,8129],"disallowed_STD3_mapped",[32,776,834]],[[8130,8130],"mapped",[8052,953]],[[8131,8131],"mapped",[951,953]],[[8132,8132],"mapped",[942,953]],[[8133,8133],"disallowed"],[[8134,8134],"valid"],[[8135,8135],"mapped",[8134,953]],[[8136,8136],"mapped",[8050]],[[8137,8137],"mapped",[941]],[[8138,8138],"mapped",[8052]],[[8139,8139],"mapped",[942]],[[8140,8140],"mapped",[951,953]],[[8141,8141],"disallowed_STD3_mapped",[32,787,768]],[[8142,8142],"disallowed_STD3_mapped",[32,787,769]],[[8143,8143],"disallowed_STD3_mapped",[32,787,834]],[[8144,8146],"valid"],[[8147,8147],"mapped",[912]],[[8148,8149],"disallowed"],[[8150,8151],"valid"],[[8152,8152],"mapped",[8144]],[[8153,8153],"mapped",[8145]],[[8154,8154],"mapped",[8054]],[[8155,8155],"mapped",[943]],[[8156,8156],"disallowed"],[[8157,8157],"disallowed_STD3_mapped",[32,788,768]],[[8158,8158],"disallowed_STD3_mapped",[32,788,769]],[[8159,8159],"disallowed_STD3_mapped",[32,788,834]],[[8160,8162],"valid"],[[8163,8163],"mapped",[944]],[[8164,8167],"valid"],[[8168,8168],"mapped",[8160]],[[8169,8169],"mapped",[8161]],[[8170,8170],"mapped",[8058]],[[8171,8171],"mapped",[973]],[[8172,8172],"mapped",[8165]],[[8173,8173],"disallowed_STD3_mapped",[32,776,768]],[[8174,8174],"disallowed_STD3_mapped",[32,776,769]],[[8175,8175],"disallowed_STD3_mapped",[96]],[[8176,8177],"disallowed"],[[8178,8178],"mapped",[8060,953]],[[8179,8179],"mapped",[969,953]],[[8180,8180],"mapped",[974,953]],[[8181,8181],"disallowed"],[[8182,8182],"valid"],[[8183,8183],"mapped",[8182,953]],[[8184,8184],"mapped",[8056]],[[8185,8185],"mapped",[972]],[[8186,8186],"mapped",[8060]],[[8187,8187],"mapped",[974]],[[8188,8188],"mapped",[969,953]],[[8189,8189],"disallowed_STD3_mapped",[32,769]],[[8190,8190],"disallowed_STD3_mapped",[32,788]],[[8191,8191],"disallowed"],[[8192,8202],"disallowed_STD3_mapped",[32]],[[8203,8203],"ignored"],[[8204,8205],"deviation",[]],[[8206,8207],"disallowed"],[[8208,8208],"valid",[],"NV8"],[[8209,8209],"mapped",[8208]],[[8210,8214],"valid",[],"NV8"],[[8215,8215],"disallowed_STD3_mapped",[32,819]],[[8216,8227],"valid",[],"NV8"],[[8228,8230],"disallowed"],[[8231,8231],"valid",[],"NV8"],[[8232,8238],"disallowed"],[[8239,8239],"disallowed_STD3_mapped",[32]],[[8240,8242],"valid",[],"NV8"],[[8243,8243],"mapped",[8242,8242]],[[8244,8244],"mapped",[8242,8242,8242]],[[8245,8245],"valid",[],"NV8"],[[8246,8246],"mapped",[8245,8245]],[[8247,8247],"mapped",[8245,8245,8245]],[[8248,8251],"valid",[],"NV8"],[[8252,8252],"disallowed_STD3_mapped",[33,33]],[[8253,8253],"valid",[],"NV8"],[[8254,8254],"disallowed_STD3_mapped",[32,773]],[[8255,8262],"valid",[],"NV8"],[[8263,8263],"disallowed_STD3_mapped",[63,63]],[[8264,8264],"disallowed_STD3_mapped",[63,33]],[[8265,8265],"disallowed_STD3_mapped",[33,63]],[[8266,8269],"valid",[],"NV8"],[[8270,8274],"valid",[],"NV8"],[[8275,8276],"valid",[],"NV8"],[[8277,8278],"valid",[],"NV8"],[[8279,8279],"mapped",[8242,8242,8242,8242]],[[8280,8286],"valid",[],"NV8"],[[8287,8287],"disallowed_STD3_mapped",[32]],[[8288,8288],"ignored"],[[8289,8291],"disallowed"],[[8292,8292],"ignored"],[[8293,8293],"disallowed"],[[8294,8297],"disallowed"],[[8298,8303],"disallowed"],[[8304,8304],"mapped",[48]],[[8305,8305],"mapped",[105]],[[8306,8307],"disallowed"],[[8308,8308],"mapped",[52]],[[8309,8309],"mapped",[53]],[[8310,8310],"mapped",[54]],[[8311,8311],"mapped",[55]],[[8312,8312],"mapped",[56]],[[8313,8313],"mapped",[57]],[[8314,8314],"disallowed_STD3_mapped",[43]],[[8315,8315],"mapped",[8722]],[[8316,8316],"disallowed_STD3_mapped",[61]],[[8317,8317],"disallowed_STD3_mapped",[40]],[[8318,8318],"disallowed_STD3_mapped",[41]],[[8319,8319],"mapped",[110]],[[8320,8320],"mapped",[48]],[[8321,8321],"mapped",[49]],[[8322,8322],"mapped",[50]],[[8323,8323],"mapped",[51]],[[8324,8324],"mapped",[52]],[[8325,8325],"mapped",[53]],[[8326,8326],"mapped",[54]],[[8327,8327],"mapped",[55]],[[8328,8328],"mapped",[56]],[[8329,8329],"mapped",[57]],[[8330,8330],"disallowed_STD3_mapped",[43]],[[8331,8331],"mapped",[8722]],[[8332,8332],"disallowed_STD3_mapped",[61]],[[8333,8333],"disallowed_STD3_mapped",[40]],[[8334,8334],"disallowed_STD3_mapped",[41]],[[8335,8335],"disallowed"],[[8336,8336],"mapped",[97]],[[8337,8337],"mapped",[101]],[[8338,8338],"mapped",[111]],[[8339,8339],"mapped",[120]],[[8340,8340],"mapped",[601]],[[8341,8341],"mapped",[104]],[[8342,8342],"mapped",[107]],[[8343,8343],"mapped",[108]],[[8344,8344],"mapped",[109]],[[8345,8345],"mapped",[110]],[[8346,8346],"mapped",[112]],[[8347,8347],"mapped",[115]],[[8348,8348],"mapped",[116]],[[8349,8351],"disallowed"],[[8352,8359],"valid",[],"NV8"],[[8360,8360],"mapped",[114,115]],[[8361,8362],"valid",[],"NV8"],[[8363,8363],"valid",[],"NV8"],[[8364,8364],"valid",[],"NV8"],[[8365,8367],"valid",[],"NV8"],[[8368,8369],"valid",[],"NV8"],[[8370,8373],"valid",[],"NV8"],[[8374,8376],"valid",[],"NV8"],[[8377,8377],"valid",[],"NV8"],[[8378,8378],"valid",[],"NV8"],[[8379,8381],"valid",[],"NV8"],[[8382,8382],"valid",[],"NV8"],[[8383,8399],"disallowed"],[[8400,8417],"valid",[],"NV8"],[[8418,8419],"valid",[],"NV8"],[[8420,8426],"valid",[],"NV8"],[[8427,8427],"valid",[],"NV8"],[[8428,8431],"valid",[],"NV8"],[[8432,8432],"valid",[],"NV8"],[[8433,8447],"disallowed"],[[8448,8448],"disallowed_STD3_mapped",[97,47,99]],[[8449,8449],"disallowed_STD3_mapped",[97,47,115]],[[8450,8450],"mapped",[99]],[[8451,8451],"mapped",[176,99]],[[8452,8452],"valid",[],"NV8"],[[8453,8453],"disallowed_STD3_mapped",[99,47,111]],[[8454,8454],"disallowed_STD3_mapped",[99,47,117]],[[8455,8455],"mapped",[603]],[[8456,8456],"valid",[],"NV8"],[[8457,8457],"mapped",[176,102]],[[8458,8458],"mapped",[103]],[[8459,8462],"mapped",[104]],[[8463,8463],"mapped",[295]],[[8464,8465],"mapped",[105]],[[8466,8467],"mapped",[108]],[[8468,8468],"valid",[],"NV8"],[[8469,8469],"mapped",[110]],[[8470,8470],"mapped",[110,111]],[[8471,8472],"valid",[],"NV8"],[[8473,8473],"mapped",[112]],[[8474,8474],"mapped",[113]],[[8475,8477],"mapped",[114]],[[8478,8479],"valid",[],"NV8"],[[8480,8480],"mapped",[115,109]],[[8481,8481],"mapped",[116,101,108]],[[8482,8482],"mapped",[116,109]],[[8483,8483],"valid",[],"NV8"],[[8484,8484],"mapped",[122]],[[8485,8485],"valid",[],"NV8"],[[8486,8486],"mapped",[969]],[[8487,8487],"valid",[],"NV8"],[[8488,8488],"mapped",[122]],[[8489,8489],"valid",[],"NV8"],[[8490,8490],"mapped",[107]],[[8491,8491],"mapped",[229]],[[8492,8492],"mapped",[98]],[[8493,8493],"mapped",[99]],[[8494,8494],"valid",[],"NV8"],[[8495,8496],"mapped",[101]],[[8497,8497],"mapped",[102]],[[8498,8498],"disallowed"],[[8499,8499],"mapped",[109]],[[8500,8500],"mapped",[111]],[[8501,8501],"mapped",[1488]],[[8502,8502],"mapped",[1489]],[[8503,8503],"mapped",[1490]],[[8504,8504],"mapped",[1491]],[[8505,8505],"mapped",[105]],[[8506,8506],"valid",[],"NV8"],[[8507,8507],"mapped",[102,97,120]],[[8508,8508],"mapped",[960]],[[8509,8510],"mapped",[947]],[[8511,8511],"mapped",[960]],[[8512,8512],"mapped",[8721]],[[8513,8516],"valid",[],"NV8"],[[8517,8518],"mapped",[100]],[[8519,8519],"mapped",[101]],[[8520,8520],"mapped",[105]],[[8521,8521],"mapped",[106]],[[8522,8523],"valid",[],"NV8"],[[8524,8524],"valid",[],"NV8"],[[8525,8525],"valid",[],"NV8"],[[8526,8526],"valid"],[[8527,8527],"valid",[],"NV8"],[[8528,8528],"mapped",[49,8260,55]],[[8529,8529],"mapped",[49,8260,57]],[[8530,8530],"mapped",[49,8260,49,48]],[[8531,8531],"mapped",[49,8260,51]],[[8532,8532],"mapped",[50,8260,51]],[[8533,8533],"mapped",[49,8260,53]],[[8534,8534],"mapped",[50,8260,53]],[[8535,8535],"mapped",[51,8260,53]],[[8536,8536],"mapped",[52,8260,53]],[[8537,8537],"mapped",[49,8260,54]],[[8538,8538],"mapped",[53,8260,54]],[[8539,8539],"mapped",[49,8260,56]],[[8540,8540],"mapped",[51,8260,56]],[[8541,8541],"mapped",[53,8260,56]],[[8542,8542],"mapped",[55,8260,56]],[[8543,8543],"mapped",[49,8260]],[[8544,8544],"mapped",[105]],[[8545,8545],"mapped",[105,105]],[[8546,8546],"mapped",[105,105,105]],[[8547,8547],"mapped",[105,118]],[[8548,8548],"mapped",[118]],[[8549,8549],"mapped",[118,105]],[[8550,8550],"mapped",[118,105,105]],[[8551,8551],"mapped",[118,105,105,105]],[[8552,8552],"mapped",[105,120]],[[8553,8553],"mapped",[120]],[[8554,8554],"mapped",[120,105]],[[8555,8555],"mapped",[120,105,105]],[[8556,8556],"mapped",[108]],[[8557,8557],"mapped",[99]],[[8558,8558],"mapped",[100]],[[8559,8559],"mapped",[109]],[[8560,8560],"mapped",[105]],[[8561,8561],"mapped",[105,105]],[[8562,8562],"mapped",[105,105,105]],[[8563,8563],"mapped",[105,118]],[[8564,8564],"mapped",[118]],[[8565,8565],"mapped",[118,105]],[[8566,8566],"mapped",[118,105,105]],[[8567,8567],"mapped",[118,105,105,105]],[[8568,8568],"mapped",[105,120]],[[8569,8569],"mapped",[120]],[[8570,8570],"mapped",[120,105]],[[8571,8571],"mapped",[120,105,105]],[[8572,8572],"mapped",[108]],[[8573,8573],"mapped",[99]],[[8574,8574],"mapped",[100]],[[8575,8575],"mapped",[109]],[[8576,8578],"valid",[],"NV8"],[[8579,8579],"disallowed"],[[8580,8580],"valid"],[[8581,8584],"valid",[],"NV8"],[[8585,8585],"mapped",[48,8260,51]],[[8586,8587],"valid",[],"NV8"],[[8588,8591],"disallowed"],[[8592,8682],"valid",[],"NV8"],[[8683,8691],"valid",[],"NV8"],[[8692,8703],"valid",[],"NV8"],[[8704,8747],"valid",[],"NV8"],[[8748,8748],"mapped",[8747,8747]],[[8749,8749],"mapped",[8747,8747,8747]],[[8750,8750],"valid",[],"NV8"],[[8751,8751],"mapped",[8750,8750]],[[8752,8752],"mapped",[8750,8750,8750]],[[8753,8799],"valid",[],"NV8"],[[8800,8800],"disallowed_STD3_valid"],[[8801,8813],"valid",[],"NV8"],[[8814,8815],"disallowed_STD3_valid"],[[8816,8945],"valid",[],"NV8"],[[8946,8959],"valid",[],"NV8"],[[8960,8960],"valid",[],"NV8"],[[8961,8961],"valid",[],"NV8"],[[8962,9000],"valid",[],"NV8"],[[9001,9001],"mapped",[12296]],[[9002,9002],"mapped",[12297]],[[9003,9082],"valid",[],"NV8"],[[9083,9083],"valid",[],"NV8"],[[9084,9084],"valid",[],"NV8"],[[9085,9114],"valid",[],"NV8"],[[9115,9166],"valid",[],"NV8"],[[9167,9168],"valid",[],"NV8"],[[9169,9179],"valid",[],"NV8"],[[9180,9191],"valid",[],"NV8"],[[9192,9192],"valid",[],"NV8"],[[9193,9203],"valid",[],"NV8"],[[9204,9210],"valid",[],"NV8"],[[9211,9215],"disallowed"],[[9216,9252],"valid",[],"NV8"],[[9253,9254],"valid",[],"NV8"],[[9255,9279],"disallowed"],[[9280,9290],"valid",[],"NV8"],[[9291,9311],"disallowed"],[[9312,9312],"mapped",[49]],[[9313,9313],"mapped",[50]],[[9314,9314],"mapped",[51]],[[9315,9315],"mapped",[52]],[[9316,9316],"mapped",[53]],[[9317,9317],"mapped",[54]],[[9318,9318],"mapped",[55]],[[9319,9319],"mapped",[56]],[[9320,9320],"mapped",[57]],[[9321,9321],"mapped",[49,48]],[[9322,9322],"mapped",[49,49]],[[9323,9323],"mapped",[49,50]],[[9324,9324],"mapped",[49,51]],[[9325,9325],"mapped",[49,52]],[[9326,9326],"mapped",[49,53]],[[9327,9327],"mapped",[49,54]],[[9328,9328],"mapped",[49,55]],[[9329,9329],"mapped",[49,56]],[[9330,9330],"mapped",[49,57]],[[9331,9331],"mapped",[50,48]],[[9332,9332],"disallowed_STD3_mapped",[40,49,41]],[[9333,9333],"disallowed_STD3_mapped",[40,50,41]],[[9334,9334],"disallowed_STD3_mapped",[40,51,41]],[[9335,9335],"disallowed_STD3_mapped",[40,52,41]],[[9336,9336],"disallowed_STD3_mapped",[40,53,41]],[[9337,9337],"disallowed_STD3_mapped",[40,54,41]],[[9338,9338],"disallowed_STD3_mapped",[40,55,41]],[[9339,9339],"disallowed_STD3_mapped",[40,56,41]],[[9340,9340],"disallowed_STD3_mapped",[40,57,41]],[[9341,9341],"disallowed_STD3_mapped",[40,49,48,41]],[[9342,9342],"disallowed_STD3_mapped",[40,49,49,41]],[[9343,9343],"disallowed_STD3_mapped",[40,49,50,41]],[[9344,9344],"disallowed_STD3_mapped",[40,49,51,41]],[[9345,9345],"disallowed_STD3_mapped",[40,49,52,41]],[[9346,9346],"disallowed_STD3_mapped",[40,49,53,41]],[[9347,9347],"disallowed_STD3_mapped",[40,49,54,41]],[[9348,9348],"disallowed_STD3_mapped",[40,49,55,41]],[[9349,9349],"disallowed_STD3_mapped",[40,49,56,41]],[[9350,9350],"disallowed_STD3_mapped",[40,49,57,41]],[[9351,9351],"disallowed_STD3_mapped",[40,50,48,41]],[[9352,9371],"disallowed"],[[9372,9372],"disallowed_STD3_mapped",[40,97,41]],[[9373,9373],"disallowed_STD3_mapped",[40,98,41]],[[9374,9374],"disallowed_STD3_mapped",[40,99,41]],[[9375,9375],"disallowed_STD3_mapped",[40,100,41]],[[9376,9376],"disallowed_STD3_mapped",[40,101,41]],[[9377,9377],"disallowed_STD3_mapped",[40,102,41]],[[9378,9378],"disallowed_STD3_mapped",[40,103,41]],[[9379,9379],"disallowed_STD3_mapped",[40,104,41]],[[9380,9380],"disallowed_STD3_mapped",[40,105,41]],[[9381,9381],"disallowed_STD3_mapped",[40,106,41]],[[9382,9382],"disallowed_STD3_mapped",[40,107,41]],[[9383,9383],"disallowed_STD3_mapped",[40,108,41]],[[9384,9384],"disallowed_STD3_mapped",[40,109,41]],[[9385,9385],"disallowed_STD3_mapped",[40,110,41]],[[9386,9386],"disallowed_STD3_mapped",[40,111,41]],[[9387,9387],"disallowed_STD3_mapped",[40,112,41]],[[9388,9388],"disallowed_STD3_mapped",[40,113,41]],[[9389,9389],"disallowed_STD3_mapped",[40,114,41]],[[9390,9390],"disallowed_STD3_mapped",[40,115,41]],[[9391,9391],"disallowed_STD3_mapped",[40,116,41]],[[9392,9392],"disallowed_STD3_mapped",[40,117,41]],[[9393,9393],"disallowed_STD3_mapped",[40,118,41]],[[9394,9394],"disallowed_STD3_mapped",[40,119,41]],[[9395,9395],"disallowed_STD3_mapped",[40,120,41]],[[9396,9396],"disallowed_STD3_mapped",[40,121,41]],[[9397,9397],"disallowed_STD3_mapped",[40,122,41]],[[9398,9398],"mapped",[97]],[[9399,9399],"mapped",[98]],[[9400,9400],"mapped",[99]],[[9401,9401],"mapped",[100]],[[9402,9402],"mapped",[101]],[[9403,9403],"mapped",[102]],[[9404,9404],"mapped",[103]],[[9405,9405],"mapped",[104]],[[9406,9406],"mapped",[105]],[[9407,9407],"mapped",[106]],[[9408,9408],"mapped",[107]],[[9409,9409],"mapped",[108]],[[9410,9410],"mapped",[109]],[[9411,9411],"mapped",[110]],[[9412,9412],"mapped",[111]],[[9413,9413],"mapped",[112]],[[9414,9414],"mapped",[113]],[[9415,9415],"mapped",[114]],[[9416,9416],"mapped",[115]],[[9417,9417],"mapped",[116]],[[9418,9418],"mapped",[117]],[[9419,9419],"mapped",[118]],[[9420,9420],"mapped",[119]],[[9421,9421],"mapped",[120]],[[9422,9422],"mapped",[121]],[[9423,9423],"mapped",[122]],[[9424,9424],"mapped",[97]],[[9425,9425],"mapped",[98]],[[9426,9426],"mapped",[99]],[[9427,9427],"mapped",[100]],[[9428,9428],"mapped",[101]],[[9429,9429],"mapped",[102]],[[9430,9430],"mapped",[103]],[[9431,9431],"mapped",[104]],[[9432,9432],"mapped",[105]],[[9433,9433],"mapped",[106]],[[9434,9434],"mapped",[107]],[[9435,9435],"mapped",[108]],[[9436,9436],"mapped",[109]],[[9437,9437],"mapped",[110]],[[9438,9438],"mapped",[111]],[[9439,9439],"mapped",[112]],[[9440,9440],"mapped",[113]],[[9441,9441],"mapped",[114]],[[9442,9442],"mapped",[115]],[[9443,9443],"mapped",[116]],[[9444,9444],"mapped",[117]],[[9445,9445],"mapped",[118]],[[9446,9446],"mapped",[119]],[[9447,9447],"mapped",[120]],[[9448,9448],"mapped",[121]],[[9449,9449],"mapped",[122]],[[9450,9450],"mapped",[48]],[[9451,9470],"valid",[],"NV8"],[[9471,9471],"valid",[],"NV8"],[[9472,9621],"valid",[],"NV8"],[[9622,9631],"valid",[],"NV8"],[[9632,9711],"valid",[],"NV8"],[[9712,9719],"valid",[],"NV8"],[[9720,9727],"valid",[],"NV8"],[[9728,9747],"valid",[],"NV8"],[[9748,9749],"valid",[],"NV8"],[[9750,9751],"valid",[],"NV8"],[[9752,9752],"valid",[],"NV8"],[[9753,9753],"valid",[],"NV8"],[[9754,9839],"valid",[],"NV8"],[[9840,9841],"valid",[],"NV8"],[[9842,9853],"valid",[],"NV8"],[[9854,9855],"valid",[],"NV8"],[[9856,9865],"valid",[],"NV8"],[[9866,9873],"valid",[],"NV8"],[[9874,9884],"valid",[],"NV8"],[[9885,9885],"valid",[],"NV8"],[[9886,9887],"valid",[],"NV8"],[[9888,9889],"valid",[],"NV8"],[[9890,9905],"valid",[],"NV8"],[[9906,9906],"valid",[],"NV8"],[[9907,9916],"valid",[],"NV8"],[[9917,9919],"valid",[],"NV8"],[[9920,9923],"valid",[],"NV8"],[[9924,9933],"valid",[],"NV8"],[[9934,9934],"valid",[],"NV8"],[[9935,9953],"valid",[],"NV8"],[[9954,9954],"valid",[],"NV8"],[[9955,9955],"valid",[],"NV8"],[[9956,9959],"valid",[],"NV8"],[[9960,9983],"valid",[],"NV8"],[[9984,9984],"valid",[],"NV8"],[[9985,9988],"valid",[],"NV8"],[[9989,9989],"valid",[],"NV8"],[[9990,9993],"valid",[],"NV8"],[[9994,9995],"valid",[],"NV8"],[[9996,10023],"valid",[],"NV8"],[[10024,10024],"valid",[],"NV8"],[[10025,10059],"valid",[],"NV8"],[[10060,10060],"valid",[],"NV8"],[[10061,10061],"valid",[],"NV8"],[[10062,10062],"valid",[],"NV8"],[[10063,10066],"valid",[],"NV8"],[[10067,10069],"valid",[],"NV8"],[[10070,10070],"valid",[],"NV8"],[[10071,10071],"valid",[],"NV8"],[[10072,10078],"valid",[],"NV8"],[[10079,10080],"valid",[],"NV8"],[[10081,10087],"valid",[],"NV8"],[[10088,10101],"valid",[],"NV8"],[[10102,10132],"valid",[],"NV8"],[[10133,10135],"valid",[],"NV8"],[[10136,10159],"valid",[],"NV8"],[[10160,10160],"valid",[],"NV8"],[[10161,10174],"valid",[],"NV8"],[[10175,10175],"valid",[],"NV8"],[[10176,10182],"valid",[],"NV8"],[[10183,10186],"valid",[],"NV8"],[[10187,10187],"valid",[],"NV8"],[[10188,10188],"valid",[],"NV8"],[[10189,10189],"valid",[],"NV8"],[[10190,10191],"valid",[],"NV8"],[[10192,10219],"valid",[],"NV8"],[[10220,10223],"valid",[],"NV8"],[[10224,10239],"valid",[],"NV8"],[[10240,10495],"valid",[],"NV8"],[[10496,10763],"valid",[],"NV8"],[[10764,10764],"mapped",[8747,8747,8747,8747]],[[10765,10867],"valid",[],"NV8"],[[10868,10868],"disallowed_STD3_mapped",[58,58,61]],[[10869,10869],"disallowed_STD3_mapped",[61,61]],[[10870,10870],"disallowed_STD3_mapped",[61,61,61]],[[10871,10971],"valid",[],"NV8"],[[10972,10972],"mapped",[10973,824]],[[10973,11007],"valid",[],"NV8"],[[11008,11021],"valid",[],"NV8"],[[11022,11027],"valid",[],"NV8"],[[11028,11034],"valid",[],"NV8"],[[11035,11039],"valid",[],"NV8"],[[11040,11043],"valid",[],"NV8"],[[11044,11084],"valid",[],"NV8"],[[11085,11087],"valid",[],"NV8"],[[11088,11092],"valid",[],"NV8"],[[11093,11097],"valid",[],"NV8"],[[11098,11123],"valid",[],"NV8"],[[11124,11125],"disallowed"],[[11126,11157],"valid",[],"NV8"],[[11158,11159],"disallowed"],[[11160,11193],"valid",[],"NV8"],[[11194,11196],"disallowed"],[[11197,11208],"valid",[],"NV8"],[[11209,11209],"disallowed"],[[11210,11217],"valid",[],"NV8"],[[11218,11243],"disallowed"],[[11244,11247],"valid",[],"NV8"],[[11248,11263],"disallowed"],[[11264,11264],"mapped",[11312]],[[11265,11265],"mapped",[11313]],[[11266,11266],"mapped",[11314]],[[11267,11267],"mapped",[11315]],[[11268,11268],"mapped",[11316]],[[11269,11269],"mapped",[11317]],[[11270,11270],"mapped",[11318]],[[11271,11271],"mapped",[11319]],[[11272,11272],"mapped",[11320]],[[11273,11273],"mapped",[11321]],[[11274,11274],"mapped",[11322]],[[11275,11275],"mapped",[11323]],[[11276,11276],"mapped",[11324]],[[11277,11277],"mapped",[11325]],[[11278,11278],"mapped",[11326]],[[11279,11279],"mapped",[11327]],[[11280,11280],"mapped",[11328]],[[11281,11281],"mapped",[11329]],[[11282,11282],"mapped",[11330]],[[11283,11283],"mapped",[11331]],[[11284,11284],"mapped",[11332]],[[11285,11285],"mapped",[11333]],[[11286,11286],"mapped",[11334]],[[11287,11287],"mapped",[11335]],[[11288,11288],"mapped",[11336]],[[11289,11289],"mapped",[11337]],[[11290,11290],"mapped",[11338]],[[11291,11291],"mapped",[11339]],[[11292,11292],"mapped",[11340]],[[11293,11293],"mapped",[11341]],[[11294,11294],"mapped",[11342]],[[11295,11295],"mapped",[11343]],[[11296,11296],"mapped",[11344]],[[11297,11297],"mapped",[11345]],[[11298,11298],"mapped",[11346]],[[11299,11299],"mapped",[11347]],[[11300,11300],"mapped",[11348]],[[11301,11301],"mapped",[11349]],[[11302,11302],"mapped",[11350]],[[11303,11303],"mapped",[11351]],[[11304,11304],"mapped",[11352]],[[11305,11305],"mapped",[11353]],[[11306,11306],"mapped",[11354]],[[11307,11307],"mapped",[11355]],[[11308,11308],"mapped",[11356]],[[11309,11309],"mapped",[11357]],[[11310,11310],"mapped",[11358]],[[11311,11311],"disallowed"],[[11312,11358],"valid"],[[11359,11359],"disallowed"],[[11360,11360],"mapped",[11361]],[[11361,11361],"valid"],[[11362,11362],"mapped",[619]],[[11363,11363],"mapped",[7549]],[[11364,11364],"mapped",[637]],[[11365,11366],"valid"],[[11367,11367],"mapped",[11368]],[[11368,11368],"valid"],[[11369,11369],"mapped",[11370]],[[11370,11370],"valid"],[[11371,11371],"mapped",[11372]],[[11372,11372],"valid"],[[11373,11373],"mapped",[593]],[[11374,11374],"mapped",[625]],[[11375,11375],"mapped",[592]],[[11376,11376],"mapped",[594]],[[11377,11377],"valid"],[[11378,11378],"mapped",[11379]],[[11379,11379],"valid"],[[11380,11380],"valid"],[[11381,11381],"mapped",[11382]],[[11382,11383],"valid"],[[11384,11387],"valid"],[[11388,11388],"mapped",[106]],[[11389,11389],"mapped",[118]],[[11390,11390],"mapped",[575]],[[11391,11391],"mapped",[576]],[[11392,11392],"mapped",[11393]],[[11393,11393],"valid"],[[11394,11394],"mapped",[11395]],[[11395,11395],"valid"],[[11396,11396],"mapped",[11397]],[[11397,11397],"valid"],[[11398,11398],"mapped",[11399]],[[11399,11399],"valid"],[[11400,11400],"mapped",[11401]],[[11401,11401],"valid"],[[11402,11402],"mapped",[11403]],[[11403,11403],"valid"],[[11404,11404],"mapped",[11405]],[[11405,11405],"valid"],[[11406,11406],"mapped",[11407]],[[11407,11407],"valid"],[[11408,11408],"mapped",[11409]],[[11409,11409],"valid"],[[11410,11410],"mapped",[11411]],[[11411,11411],"valid"],[[11412,11412],"mapped",[11413]],[[11413,11413],"valid"],[[11414,11414],"mapped",[11415]],[[11415,11415],"valid"],[[11416,11416],"mapped",[11417]],[[11417,11417],"valid"],[[11418,11418],"mapped",[11419]],[[11419,11419],"valid"],[[11420,11420],"mapped",[11421]],[[11421,11421],"valid"],[[11422,11422],"mapped",[11423]],[[11423,11423],"valid"],[[11424,11424],"mapped",[11425]],[[11425,11425],"valid"],[[11426,11426],"mapped",[11427]],[[11427,11427],"valid"],[[11428,11428],"mapped",[11429]],[[11429,11429],"valid"],[[11430,11430],"mapped",[11431]],[[11431,11431],"valid"],[[11432,11432],"mapped",[11433]],[[11433,11433],"valid"],[[11434,11434],"mapped",[11435]],[[11435,11435],"valid"],[[11436,11436],"mapped",[11437]],[[11437,11437],"valid"],[[11438,11438],"mapped",[11439]],[[11439,11439],"valid"],[[11440,11440],"mapped",[11441]],[[11441,11441],"valid"],[[11442,11442],"mapped",[11443]],[[11443,11443],"valid"],[[11444,11444],"mapped",[11445]],[[11445,11445],"valid"],[[11446,11446],"mapped",[11447]],[[11447,11447],"valid"],[[11448,11448],"mapped",[11449]],[[11449,11449],"valid"],[[11450,11450],"mapped",[11451]],[[11451,11451],"valid"],[[11452,11452],"mapped",[11453]],[[11453,11453],"valid"],[[11454,11454],"mapped",[11455]],[[11455,11455],"valid"],[[11456,11456],"mapped",[11457]],[[11457,11457],"valid"],[[11458,11458],"mapped",[11459]],[[11459,11459],"valid"],[[11460,11460],"mapped",[11461]],[[11461,11461],"valid"],[[11462,11462],"mapped",[11463]],[[11463,11463],"valid"],[[11464,11464],"mapped",[11465]],[[11465,11465],"valid"],[[11466,11466],"mapped",[11467]],[[11467,11467],"valid"],[[11468,11468],"mapped",[11469]],[[11469,11469],"valid"],[[11470,11470],"mapped",[11471]],[[11471,11471],"valid"],[[11472,11472],"mapped",[11473]],[[11473,11473],"valid"],[[11474,11474],"mapped",[11475]],[[11475,11475],"valid"],[[11476,11476],"mapped",[11477]],[[11477,11477],"valid"],[[11478,11478],"mapped",[11479]],[[11479,11479],"valid"],[[11480,11480],"mapped",[11481]],[[11481,11481],"valid"],[[11482,11482],"mapped",[11483]],[[11483,11483],"valid"],[[11484,11484],"mapped",[11485]],[[11485,11485],"valid"],[[11486,11486],"mapped",[11487]],[[11487,11487],"valid"],[[11488,11488],"mapped",[11489]],[[11489,11489],"valid"],[[11490,11490],"mapped",[11491]],[[11491,11492],"valid"],[[11493,11498],"valid",[],"NV8"],[[11499,11499],"mapped",[11500]],[[11500,11500],"valid"],[[11501,11501],"mapped",[11502]],[[11502,11505],"valid"],[[11506,11506],"mapped",[11507]],[[11507,11507],"valid"],[[11508,11512],"disallowed"],[[11513,11519],"valid",[],"NV8"],[[11520,11557],"valid"],[[11558,11558],"disallowed"],[[11559,11559],"valid"],[[11560,11564],"disallowed"],[[11565,11565],"valid"],[[11566,11567],"disallowed"],[[11568,11621],"valid"],[[11622,11623],"valid"],[[11624,11630],"disallowed"],[[11631,11631],"mapped",[11617]],[[11632,11632],"valid",[],"NV8"],[[11633,11646],"disallowed"],[[11647,11647],"valid"],[[11648,11670],"valid"],[[11671,11679],"disallowed"],[[11680,11686],"valid"],[[11687,11687],"disallowed"],[[11688,11694],"valid"],[[11695,11695],"disallowed"],[[11696,11702],"valid"],[[11703,11703],"disallowed"],[[11704,11710],"valid"],[[11711,11711],"disallowed"],[[11712,11718],"valid"],[[11719,11719],"disallowed"],[[11720,11726],"valid"],[[11727,11727],"disallowed"],[[11728,11734],"valid"],[[11735,11735],"disallowed"],[[11736,11742],"valid"],[[11743,11743],"disallowed"],[[11744,11775],"valid"],[[11776,11799],"valid",[],"NV8"],[[11800,11803],"valid",[],"NV8"],[[11804,11805],"valid",[],"NV8"],[[11806,11822],"valid",[],"NV8"],[[11823,11823],"valid"],[[11824,11824],"valid",[],"NV8"],[[11825,11825],"valid",[],"NV8"],[[11826,11835],"valid",[],"NV8"],[[11836,11842],"valid",[],"NV8"],[[11843,11903],"disallowed"],[[11904,11929],"valid",[],"NV8"],[[11930,11930],"disallowed"],[[11931,11934],"valid",[],"NV8"],[[11935,11935],"mapped",[27597]],[[11936,12018],"valid",[],"NV8"],[[12019,12019],"mapped",[40863]],[[12020,12031],"disallowed"],[[12032,12032],"mapped",[19968]],[[12033,12033],"mapped",[20008]],[[12034,12034],"mapped",[20022]],[[12035,12035],"mapped",[20031]],[[12036,12036],"mapped",[20057]],[[12037,12037],"mapped",[20101]],[[12038,12038],"mapped",[20108]],[[12039,12039],"mapped",[20128]],[[12040,12040],"mapped",[20154]],[[12041,12041],"mapped",[20799]],[[12042,12042],"mapped",[20837]],[[12043,12043],"mapped",[20843]],[[12044,12044],"mapped",[20866]],[[12045,12045],"mapped",[20886]],[[12046,12046],"mapped",[20907]],[[12047,12047],"mapped",[20960]],[[12048,12048],"mapped",[20981]],[[12049,12049],"mapped",[20992]],[[12050,12050],"mapped",[21147]],[[12051,12051],"mapped",[21241]],[[12052,12052],"mapped",[21269]],[[12053,12053],"mapped",[21274]],[[12054,12054],"mapped",[21304]],[[12055,12055],"mapped",[21313]],[[12056,12056],"mapped",[21340]],[[12057,12057],"mapped",[21353]],[[12058,12058],"mapped",[21378]],[[12059,12059],"mapped",[21430]],[[12060,12060],"mapped",[21448]],[[12061,12061],"mapped",[21475]],[[12062,12062],"mapped",[22231]],[[12063,12063],"mapped",[22303]],[[12064,12064],"mapped",[22763]],[[12065,12065],"mapped",[22786]],[[12066,12066],"mapped",[22794]],[[12067,12067],"mapped",[22805]],[[12068,12068],"mapped",[22823]],[[12069,12069],"mapped",[22899]],[[12070,12070],"mapped",[23376]],[[12071,12071],"mapped",[23424]],[[12072,12072],"mapped",[23544]],[[12073,12073],"mapped",[23567]],[[12074,12074],"mapped",[23586]],[[12075,12075],"mapped",[23608]],[[12076,12076],"mapped",[23662]],[[12077,12077],"mapped",[23665]],[[12078,12078],"mapped",[24027]],[[12079,12079],"mapped",[24037]],[[12080,12080],"mapped",[24049]],[[12081,12081],"mapped",[24062]],[[12082,12082],"mapped",[24178]],[[12083,12083],"mapped",[24186]],[[12084,12084],"mapped",[24191]],[[12085,12085],"mapped",[24308]],[[12086,12086],"mapped",[24318]],[[12087,12087],"mapped",[24331]],[[12088,12088],"mapped",[24339]],[[12089,12089],"mapped",[24400]],[[12090,12090],"mapped",[24417]],[[12091,12091],"mapped",[24435]],[[12092,12092],"mapped",[24515]],[[12093,12093],"mapped",[25096]],[[12094,12094],"mapped",[25142]],[[12095,12095],"mapped",[25163]],[[12096,12096],"mapped",[25903]],[[12097,12097],"mapped",[25908]],[[12098,12098],"mapped",[25991]],[[12099,12099],"mapped",[26007]],[[12100,12100],"mapped",[26020]],[[12101,12101],"mapped",[26041]],[[12102,12102],"mapped",[26080]],[[12103,12103],"mapped",[26085]],[[12104,12104],"mapped",[26352]],[[12105,12105],"mapped",[26376]],[[12106,12106],"mapped",[26408]],[[12107,12107],"mapped",[27424]],[[12108,12108],"mapped",[27490]],[[12109,12109],"mapped",[27513]],[[12110,12110],"mapped",[27571]],[[12111,12111],"mapped",[27595]],[[12112,12112],"mapped",[27604]],[[12113,12113],"mapped",[27611]],[[12114,12114],"mapped",[27663]],[[12115,12115],"mapped",[27668]],[[12116,12116],"mapped",[27700]],[[12117,12117],"mapped",[28779]],[[12118,12118],"mapped",[29226]],[[12119,12119],"mapped",[29238]],[[12120,12120],"mapped",[29243]],[[12121,12121],"mapped",[29247]],[[12122,12122],"mapped",[29255]],[[12123,12123],"mapped",[29273]],[[12124,12124],"mapped",[29275]],[[12125,12125],"mapped",[29356]],[[12126,12126],"mapped",[29572]],[[12127,12127],"mapped",[29577]],[[12128,12128],"mapped",[29916]],[[12129,12129],"mapped",[29926]],[[12130,12130],"mapped",[29976]],[[12131,12131],"mapped",[29983]],[[12132,12132],"mapped",[29992]],[[12133,12133],"mapped",[30000]],[[12134,12134],"mapped",[30091]],[[12135,12135],"mapped",[30098]],[[12136,12136],"mapped",[30326]],[[12137,12137],"mapped",[30333]],[[12138,12138],"mapped",[30382]],[[12139,12139],"mapped",[30399]],[[12140,12140],"mapped",[30446]],[[12141,12141],"mapped",[30683]],[[12142,12142],"mapped",[30690]],[[12143,12143],"mapped",[30707]],[[12144,12144],"mapped",[31034]],[[12145,12145],"mapped",[31160]],[[12146,12146],"mapped",[31166]],[[12147,12147],"mapped",[31348]],[[12148,12148],"mapped",[31435]],[[12149,12149],"mapped",[31481]],[[12150,12150],"mapped",[31859]],[[12151,12151],"mapped",[31992]],[[12152,12152],"mapped",[32566]],[[12153,12153],"mapped",[32593]],[[12154,12154],"mapped",[32650]],[[12155,12155],"mapped",[32701]],[[12156,12156],"mapped",[32769]],[[12157,12157],"mapped",[32780]],[[12158,12158],"mapped",[32786]],[[12159,12159],"mapped",[32819]],[[12160,12160],"mapped",[32895]],[[12161,12161],"mapped",[32905]],[[12162,12162],"mapped",[33251]],[[12163,12163],"mapped",[33258]],[[12164,12164],"mapped",[33267]],[[12165,12165],"mapped",[33276]],[[12166,12166],"mapped",[33292]],[[12167,12167],"mapped",[33307]],[[12168,12168],"mapped",[33311]],[[12169,12169],"mapped",[33390]],[[12170,12170],"mapped",[33394]],[[12171,12171],"mapped",[33400]],[[12172,12172],"mapped",[34381]],[[12173,12173],"mapped",[34411]],[[12174,12174],"mapped",[34880]],[[12175,12175],"mapped",[34892]],[[12176,12176],"mapped",[34915]],[[12177,12177],"mapped",[35198]],[[12178,12178],"mapped",[35211]],[[12179,12179],"mapped",[35282]],[[12180,12180],"mapped",[35328]],[[12181,12181],"mapped",[35895]],[[12182,12182],"mapped",[35910]],[[12183,12183],"mapped",[35925]],[[12184,12184],"mapped",[35960]],[[12185,12185],"mapped",[35997]],[[12186,12186],"mapped",[36196]],[[12187,12187],"mapped",[36208]],[[12188,12188],"mapped",[36275]],[[12189,12189],"mapped",[36523]],[[12190,12190],"mapped",[36554]],[[12191,12191],"mapped",[36763]],[[12192,12192],"mapped",[36784]],[[12193,12193],"mapped",[36789]],[[12194,12194],"mapped",[37009]],[[12195,12195],"mapped",[37193]],[[12196,12196],"mapped",[37318]],[[12197,12197],"mapped",[37324]],[[12198,12198],"mapped",[37329]],[[12199,12199],"mapped",[38263]],[[12200,12200],"mapped",[38272]],[[12201,12201],"mapped",[38428]],[[12202,12202],"mapped",[38582]],[[12203,12203],"mapped",[38585]],[[12204,12204],"mapped",[38632]],[[12205,12205],"mapped",[38737]],[[12206,12206],"mapped",[38750]],[[12207,12207],"mapped",[38754]],[[12208,12208],"mapped",[38761]],[[12209,12209],"mapped",[38859]],[[12210,12210],"mapped",[38893]],[[12211,12211],"mapped",[38899]],[[12212,12212],"mapped",[38913]],[[12213,12213],"mapped",[39080]],[[12214,12214],"mapped",[39131]],[[12215,12215],"mapped",[39135]],[[12216,12216],"mapped",[39318]],[[12217,12217],"mapped",[39321]],[[12218,12218],"mapped",[39340]],[[12219,12219],"mapped",[39592]],[[12220,12220],"mapped",[39640]],[[12221,12221],"mapped",[39647]],[[12222,12222],"mapped",[39717]],[[12223,12223],"mapped",[39727]],[[12224,12224],"mapped",[39730]],[[12225,12225],"mapped",[39740]],[[12226,12226],"mapped",[39770]],[[12227,12227],"mapped",[40165]],[[12228,12228],"mapped",[40565]],[[12229,12229],"mapped",[40575]],[[12230,12230],"mapped",[40613]],[[12231,12231],"mapped",[40635]],[[12232,12232],"mapped",[40643]],[[12233,12233],"mapped",[40653]],[[12234,12234],"mapped",[40657]],[[12235,12235],"mapped",[40697]],[[12236,12236],"mapped",[40701]],[[12237,12237],"mapped",[40718]],[[12238,12238],"mapped",[40723]],[[12239,12239],"mapped",[40736]],[[12240,12240],"mapped",[40763]],[[12241,12241],"mapped",[40778]],[[12242,12242],"mapped",[40786]],[[12243,12243],"mapped",[40845]],[[12244,12244],"mapped",[40860]],[[12245,12245],"mapped",[40864]],[[12246,12271],"disallowed"],[[12272,12283],"disallowed"],[[12284,12287],"disallowed"],[[12288,12288],"disallowed_STD3_mapped",[32]],[[12289,12289],"valid",[],"NV8"],[[12290,12290],"mapped",[46]],[[12291,12292],"valid",[],"NV8"],[[12293,12295],"valid"],[[12296,12329],"valid",[],"NV8"],[[12330,12333],"valid"],[[12334,12341],"valid",[],"NV8"],[[12342,12342],"mapped",[12306]],[[12343,12343],"valid",[],"NV8"],[[12344,12344],"mapped",[21313]],[[12345,12345],"mapped",[21316]],[[12346,12346],"mapped",[21317]],[[12347,12347],"valid",[],"NV8"],[[12348,12348],"valid"],[[12349,12349],"valid",[],"NV8"],[[12350,12350],"valid",[],"NV8"],[[12351,12351],"valid",[],"NV8"],[[12352,12352],"disallowed"],[[12353,12436],"valid"],[[12437,12438],"valid"],[[12439,12440],"disallowed"],[[12441,12442],"valid"],[[12443,12443],"disallowed_STD3_mapped",[32,12441]],[[12444,12444],"disallowed_STD3_mapped",[32,12442]],[[12445,12446],"valid"],[[12447,12447],"mapped",[12424,12426]],[[12448,12448],"valid",[],"NV8"],[[12449,12542],"valid"],[[12543,12543],"mapped",[12467,12488]],[[12544,12548],"disallowed"],[[12549,12588],"valid"],[[12589,12589],"valid"],[[12590,12592],"disallowed"],[[12593,12593],"mapped",[4352]],[[12594,12594],"mapped",[4353]],[[12595,12595],"mapped",[4522]],[[12596,12596],"mapped",[4354]],[[12597,12597],"mapped",[4524]],[[12598,12598],"mapped",[4525]],[[12599,12599],"mapped",[4355]],[[12600,12600],"mapped",[4356]],[[12601,12601],"mapped",[4357]],[[12602,12602],"mapped",[4528]],[[12603,12603],"mapped",[4529]],[[12604,12604],"mapped",[4530]],[[12605,12605],"mapped",[4531]],[[12606,12606],"mapped",[4532]],[[12607,12607],"mapped",[4533]],[[12608,12608],"mapped",[4378]],[[12609,12609],"mapped",[4358]],[[12610,12610],"mapped",[4359]],[[12611,12611],"mapped",[4360]],[[12612,12612],"mapped",[4385]],[[12613,12613],"mapped",[4361]],[[12614,12614],"mapped",[4362]],[[12615,12615],"mapped",[4363]],[[12616,12616],"mapped",[4364]],[[12617,12617],"mapped",[4365]],[[12618,12618],"mapped",[4366]],[[12619,12619],"mapped",[4367]],[[12620,12620],"mapped",[4368]],[[12621,12621],"mapped",[4369]],[[12622,12622],"mapped",[4370]],[[12623,12623],"mapped",[4449]],[[12624,12624],"mapped",[4450]],[[12625,12625],"mapped",[4451]],[[12626,12626],"mapped",[4452]],[[12627,12627],"mapped",[4453]],[[12628,12628],"mapped",[4454]],[[12629,12629],"mapped",[4455]],[[12630,12630],"mapped",[4456]],[[12631,12631],"mapped",[4457]],[[12632,12632],"mapped",[4458]],[[12633,12633],"mapped",[4459]],[[12634,12634],"mapped",[4460]],[[12635,12635],"mapped",[4461]],[[12636,12636],"mapped",[4462]],[[12637,12637],"mapped",[4463]],[[12638,12638],"mapped",[4464]],[[12639,12639],"mapped",[4465]],[[12640,12640],"mapped",[4466]],[[12641,12641],"mapped",[4467]],[[12642,12642],"mapped",[4468]],[[12643,12643],"mapped",[4469]],[[12644,12644],"disallowed"],[[12645,12645],"mapped",[4372]],[[12646,12646],"mapped",[4373]],[[12647,12647],"mapped",[4551]],[[12648,12648],"mapped",[4552]],[[12649,12649],"mapped",[4556]],[[12650,12650],"mapped",[4558]],[[12651,12651],"mapped",[4563]],[[12652,12652],"mapped",[4567]],[[12653,12653],"mapped",[4569]],[[12654,12654],"mapped",[4380]],[[12655,12655],"mapped",[4573]],[[12656,12656],"mapped",[4575]],[[12657,12657],"mapped",[4381]],[[12658,12658],"mapped",[4382]],[[12659,12659],"mapped",[4384]],[[12660,12660],"mapped",[4386]],[[12661,12661],"mapped",[4387]],[[12662,12662],"mapped",[4391]],[[12663,12663],"mapped",[4393]],[[12664,12664],"mapped",[4395]],[[12665,12665],"mapped",[4396]],[[12666,12666],"mapped",[4397]],[[12667,12667],"mapped",[4398]],[[12668,12668],"mapped",[4399]],[[12669,12669],"mapped",[4402]],[[12670,12670],"mapped",[4406]],[[12671,12671],"mapped",[4416]],[[12672,12672],"mapped",[4423]],[[12673,12673],"mapped",[4428]],[[12674,12674],"mapped",[4593]],[[12675,12675],"mapped",[4594]],[[12676,12676],"mapped",[4439]],[[12677,12677],"mapped",[4440]],[[12678,12678],"mapped",[4441]],[[12679,12679],"mapped",[4484]],[[12680,12680],"mapped",[4485]],[[12681,12681],"mapped",[4488]],[[12682,12682],"mapped",[4497]],[[12683,12683],"mapped",[4498]],[[12684,12684],"mapped",[4500]],[[12685,12685],"mapped",[4510]],[[12686,12686],"mapped",[4513]],[[12687,12687],"disallowed"],[[12688,12689],"valid",[],"NV8"],[[12690,12690],"mapped",[19968]],[[12691,12691],"mapped",[20108]],[[12692,12692],"mapped",[19977]],[[12693,12693],"mapped",[22235]],[[12694,12694],"mapped",[19978]],[[12695,12695],"mapped",[20013]],[[12696,12696],"mapped",[19979]],[[12697,12697],"mapped",[30002]],[[12698,12698],"mapped",[20057]],[[12699,12699],"mapped",[19993]],[[12700,12700],"mapped",[19969]],[[12701,12701],"mapped",[22825]],[[12702,12702],"mapped",[22320]],[[12703,12703],"mapped",[20154]],[[12704,12727],"valid"],[[12728,12730],"valid"],[[12731,12735],"disallowed"],[[12736,12751],"valid",[],"NV8"],[[12752,12771],"valid",[],"NV8"],[[12772,12783],"disallowed"],[[12784,12799],"valid"],[[12800,12800],"disallowed_STD3_mapped",[40,4352,41]],[[12801,12801],"disallowed_STD3_mapped",[40,4354,41]],[[12802,12802],"disallowed_STD3_mapped",[40,4355,41]],[[12803,12803],"disallowed_STD3_mapped",[40,4357,41]],[[12804,12804],"disallowed_STD3_mapped",[40,4358,41]],[[12805,12805],"disallowed_STD3_mapped",[40,4359,41]],[[12806,12806],"disallowed_STD3_mapped",[40,4361,41]],[[12807,12807],"disallowed_STD3_mapped",[40,4363,41]],[[12808,12808],"disallowed_STD3_mapped",[40,4364,41]],[[12809,12809],"disallowed_STD3_mapped",[40,4366,41]],[[12810,12810],"disallowed_STD3_mapped",[40,4367,41]],[[12811,12811],"disallowed_STD3_mapped",[40,4368,41]],[[12812,12812],"disallowed_STD3_mapped",[40,4369,41]],[[12813,12813],"disallowed_STD3_mapped",[40,4370,41]],[[12814,12814],"disallowed_STD3_mapped",[40,44032,41]],[[12815,12815],"disallowed_STD3_mapped",[40,45208,41]],[[12816,12816],"disallowed_STD3_mapped",[40,45796,41]],[[12817,12817],"disallowed_STD3_mapped",[40,46972,41]],[[12818,12818],"disallowed_STD3_mapped",[40,47560,41]],[[12819,12819],"disallowed_STD3_mapped",[40,48148,41]],[[12820,12820],"disallowed_STD3_mapped",[40,49324,41]],[[12821,12821],"disallowed_STD3_mapped",[40,50500,41]],[[12822,12822],"disallowed_STD3_mapped",[40,51088,41]],[[12823,12823],"disallowed_STD3_mapped",[40,52264,41]],[[12824,12824],"disallowed_STD3_mapped",[40,52852,41]],[[12825,12825],"disallowed_STD3_mapped",[40,53440,41]],[[12826,12826],"disallowed_STD3_mapped",[40,54028,41]],[[12827,12827],"disallowed_STD3_mapped",[40,54616,41]],[[12828,12828],"disallowed_STD3_mapped",[40,51452,41]],[[12829,12829],"disallowed_STD3_mapped",[40,50724,51204,41]],[[12830,12830],"disallowed_STD3_mapped",[40,50724,54980,41]],[[12831,12831],"disallowed"],[[12832,12832],"disallowed_STD3_mapped",[40,19968,41]],[[12833,12833],"disallowed_STD3_mapped",[40,20108,41]],[[12834,12834],"disallowed_STD3_mapped",[40,19977,41]],[[12835,12835],"disallowed_STD3_mapped",[40,22235,41]],[[12836,12836],"disallowed_STD3_mapped",[40,20116,41]],[[12837,12837],"disallowed_STD3_mapped",[40,20845,41]],[[12838,12838],"disallowed_STD3_mapped",[40,19971,41]],[[12839,12839],"disallowed_STD3_mapped",[40,20843,41]],[[12840,12840],"disallowed_STD3_mapped",[40,20061,41]],[[12841,12841],"disallowed_STD3_mapped",[40,21313,41]],[[12842,12842],"disallowed_STD3_mapped",[40,26376,41]],[[12843,12843],"disallowed_STD3_mapped",[40,28779,41]],[[12844,12844],"disallowed_STD3_mapped",[40,27700,41]],[[12845,12845],"disallowed_STD3_mapped",[40,26408,41]],[[12846,12846],"disallowed_STD3_mapped",[40,37329,41]],[[12847,12847],"disallowed_STD3_mapped",[40,22303,41]],[[12848,12848],"disallowed_STD3_mapped",[40,26085,41]],[[12849,12849],"disallowed_STD3_mapped",[40,26666,41]],[[12850,12850],"disallowed_STD3_mapped",[40,26377,41]],[[12851,12851],"disallowed_STD3_mapped",[40,31038,41]],[[12852,12852],"disallowed_STD3_mapped",[40,21517,41]],[[12853,12853],"disallowed_STD3_mapped",[40,29305,41]],[[12854,12854],"disallowed_STD3_mapped",[40,36001,41]],[[12855,12855],"disallowed_STD3_mapped",[40,31069,41]],[[12856,12856],"disallowed_STD3_mapped",[40,21172,41]],[[12857,12857],"disallowed_STD3_mapped",[40,20195,41]],[[12858,12858],"disallowed_STD3_mapped",[40,21628,41]],[[12859,12859],"disallowed_STD3_mapped",[40,23398,41]],[[12860,12860],"disallowed_STD3_mapped",[40,30435,41]],[[12861,12861],"disallowed_STD3_mapped",[40,20225,41]],[[12862,12862],"disallowed_STD3_mapped",[40,36039,41]],[[12863,12863],"disallowed_STD3_mapped",[40,21332,41]],[[12864,12864],"disallowed_STD3_mapped",[40,31085,41]],[[12865,12865],"disallowed_STD3_mapped",[40,20241,41]],[[12866,12866],"disallowed_STD3_mapped",[40,33258,41]],[[12867,12867],"disallowed_STD3_mapped",[40,33267,41]],[[12868,12868],"mapped",[21839]],[[12869,12869],"mapped",[24188]],[[12870,12870],"mapped",[25991]],[[12871,12871],"mapped",[31631]],[[12872,12879],"valid",[],"NV8"],[[12880,12880],"mapped",[112,116,101]],[[12881,12881],"mapped",[50,49]],[[12882,12882],"mapped",[50,50]],[[12883,12883],"mapped",[50,51]],[[12884,12884],"mapped",[50,52]],[[12885,12885],"mapped",[50,53]],[[12886,12886],"mapped",[50,54]],[[12887,12887],"mapped",[50,55]],[[12888,12888],"mapped",[50,56]],[[12889,12889],"mapped",[50,57]],[[12890,12890],"mapped",[51,48]],[[12891,12891],"mapped",[51,49]],[[12892,12892],"mapped",[51,50]],[[12893,12893],"mapped",[51,51]],[[12894,12894],"mapped",[51,52]],[[12895,12895],"mapped",[51,53]],[[12896,12896],"mapped",[4352]],[[12897,12897],"mapped",[4354]],[[12898,12898],"mapped",[4355]],[[12899,12899],"mapped",[4357]],[[12900,12900],"mapped",[4358]],[[12901,12901],"mapped",[4359]],[[12902,12902],"mapped",[4361]],[[12903,12903],"mapped",[4363]],[[12904,12904],"mapped",[4364]],[[12905,12905],"mapped",[4366]],[[12906,12906],"mapped",[4367]],[[12907,12907],"mapped",[4368]],[[12908,12908],"mapped",[4369]],[[12909,12909],"mapped",[4370]],[[12910,12910],"mapped",[44032]],[[12911,12911],"mapped",[45208]],[[12912,12912],"mapped",[45796]],[[12913,12913],"mapped",[46972]],[[12914,12914],"mapped",[47560]],[[12915,12915],"mapped",[48148]],[[12916,12916],"mapped",[49324]],[[12917,12917],"mapped",[50500]],[[12918,12918],"mapped",[51088]],[[12919,12919],"mapped",[52264]],[[12920,12920],"mapped",[52852]],[[12921,12921],"mapped",[53440]],[[12922,12922],"mapped",[54028]],[[12923,12923],"mapped",[54616]],[[12924,12924],"mapped",[52280,44256]],[[12925,12925],"mapped",[51452,51032]],[[12926,12926],"mapped",[50864]],[[12927,12927],"valid",[],"NV8"],[[12928,12928],"mapped",[19968]],[[12929,12929],"mapped",[20108]],[[12930,12930],"mapped",[19977]],[[12931,12931],"mapped",[22235]],[[12932,12932],"mapped",[20116]],[[12933,12933],"mapped",[20845]],[[12934,12934],"mapped",[19971]],[[12935,12935],"mapped",[20843]],[[12936,12936],"mapped",[20061]],[[12937,12937],"mapped",[21313]],[[12938,12938],"mapped",[26376]],[[12939,12939],"mapped",[28779]],[[12940,12940],"mapped",[27700]],[[12941,12941],"mapped",[26408]],[[12942,12942],"mapped",[37329]],[[12943,12943],"mapped",[22303]],[[12944,12944],"mapped",[26085]],[[12945,12945],"mapped",[26666]],[[12946,12946],"mapped",[26377]],[[12947,12947],"mapped",[31038]],[[12948,12948],"mapped",[21517]],[[12949,12949],"mapped",[29305]],[[12950,12950],"mapped",[36001]],[[12951,12951],"mapped",[31069]],[[12952,12952],"mapped",[21172]],[[12953,12953],"mapped",[31192]],[[12954,12954],"mapped",[30007]],[[12955,12955],"mapped",[22899]],[[12956,12956],"mapped",[36969]],[[12957,12957],"mapped",[20778]],[[12958,12958],"mapped",[21360]],[[12959,12959],"mapped",[27880]],[[12960,12960],"mapped",[38917]],[[12961,12961],"mapped",[20241]],[[12962,12962],"mapped",[20889]],[[12963,12963],"mapped",[27491]],[[12964,12964],"mapped",[19978]],[[12965,12965],"mapped",[20013]],[[12966,12966],"mapped",[19979]],[[12967,12967],"mapped",[24038]],[[12968,12968],"mapped",[21491]],[[12969,12969],"mapped",[21307]],[[12970,12970],"mapped",[23447]],[[12971,12971],"mapped",[23398]],[[12972,12972],"mapped",[30435]],[[12973,12973],"mapped",[20225]],[[12974,12974],"mapped",[36039]],[[12975,12975],"mapped",[21332]],[[12976,12976],"mapped",[22812]],[[12977,12977],"mapped",[51,54]],[[12978,12978],"mapped",[51,55]],[[12979,12979],"mapped",[51,56]],[[12980,12980],"mapped",[51,57]],[[12981,12981],"mapped",[52,48]],[[12982,12982],"mapped",[52,49]],[[12983,12983],"mapped",[52,50]],[[12984,12984],"mapped",[52,51]],[[12985,12985],"mapped",[52,52]],[[12986,12986],"mapped",[52,53]],[[12987,12987],"mapped",[52,54]],[[12988,12988],"mapped",[52,55]],[[12989,12989],"mapped",[52,56]],[[12990,12990],"mapped",[52,57]],[[12991,12991],"mapped",[53,48]],[[12992,12992],"mapped",[49,26376]],[[12993,12993],"mapped",[50,26376]],[[12994,12994],"mapped",[51,26376]],[[12995,12995],"mapped",[52,26376]],[[12996,12996],"mapped",[53,26376]],[[12997,12997],"mapped",[54,26376]],[[12998,12998],"mapped",[55,26376]],[[12999,12999],"mapped",[56,26376]],[[13000,13000],"mapped",[57,26376]],[[13001,13001],"mapped",[49,48,26376]],[[13002,13002],"mapped",[49,49,26376]],[[13003,13003],"mapped",[49,50,26376]],[[13004,13004],"mapped",[104,103]],[[13005,13005],"mapped",[101,114,103]],[[13006,13006],"mapped",[101,118]],[[13007,13007],"mapped",[108,116,100]],[[13008,13008],"mapped",[12450]],[[13009,13009],"mapped",[12452]],[[13010,13010],"mapped",[12454]],[[13011,13011],"mapped",[12456]],[[13012,13012],"mapped",[12458]],[[13013,13013],"mapped",[12459]],[[13014,13014],"mapped",[12461]],[[13015,13015],"mapped",[12463]],[[13016,13016],"mapped",[12465]],[[13017,13017],"mapped",[12467]],[[13018,13018],"mapped",[12469]],[[13019,13019],"mapped",[12471]],[[13020,13020],"mapped",[12473]],[[13021,13021],"mapped",[12475]],[[13022,13022],"mapped",[12477]],[[13023,13023],"mapped",[12479]],[[13024,13024],"mapped",[12481]],[[13025,13025],"mapped",[12484]],[[13026,13026],"mapped",[12486]],[[13027,13027],"mapped",[12488]],[[13028,13028],"mapped",[12490]],[[13029,13029],"mapped",[12491]],[[13030,13030],"mapped",[12492]],[[13031,13031],"mapped",[12493]],[[13032,13032],"mapped",[12494]],[[13033,13033],"mapped",[12495]],[[13034,13034],"mapped",[12498]],[[13035,13035],"mapped",[12501]],[[13036,13036],"mapped",[12504]],[[13037,13037],"mapped",[12507]],[[13038,13038],"mapped",[12510]],[[13039,13039],"mapped",[12511]],[[13040,13040],"mapped",[12512]],[[13041,13041],"mapped",[12513]],[[13042,13042],"mapped",[12514]],[[13043,13043],"mapped",[12516]],[[13044,13044],"mapped",[12518]],[[13045,13045],"mapped",[12520]],[[13046,13046],"mapped",[12521]],[[13047,13047],"mapped",[12522]],[[13048,13048],"mapped",[12523]],[[13049,13049],"mapped",[12524]],[[13050,13050],"mapped",[12525]],[[13051,13051],"mapped",[12527]],[[13052,13052],"mapped",[12528]],[[13053,13053],"mapped",[12529]],[[13054,13054],"mapped",[12530]],[[13055,13055],"disallowed"],[[13056,13056],"mapped",[12450,12497,12540,12488]],[[13057,13057],"mapped",[12450,12523,12501,12449]],[[13058,13058],"mapped",[12450,12531,12506,12450]],[[13059,13059],"mapped",[12450,12540,12523]],[[13060,13060],"mapped",[12452,12491,12531,12464]],[[13061,13061],"mapped",[12452,12531,12481]],[[13062,13062],"mapped",[12454,12457,12531]],[[13063,13063],"mapped",[12456,12473,12463,12540,12489]],[[13064,13064],"mapped",[12456,12540,12459,12540]],[[13065,13065],"mapped",[12458,12531,12473]],[[13066,13066],"mapped",[12458,12540,12512]],[[13067,13067],"mapped",[12459,12452,12522]],[[13068,13068],"mapped",[12459,12521,12483,12488]],[[13069,13069],"mapped",[12459,12525,12522,12540]],[[13070,13070],"mapped",[12460,12525,12531]],[[13071,13071],"mapped",[12460,12531,12510]],[[13072,13072],"mapped",[12462,12460]],[[13073,13073],"mapped",[12462,12491,12540]],[[13074,13074],"mapped",[12461,12517,12522,12540]],[[13075,13075],"mapped",[12462,12523,12480,12540]],[[13076,13076],"mapped",[12461,12525]],[[13077,13077],"mapped",[12461,12525,12464,12521,12512]],[[13078,13078],"mapped",[12461,12525,12513,12540,12488,12523]],[[13079,13079],"mapped",[12461,12525,12527,12483,12488]],[[13080,13080],"mapped",[12464,12521,12512]],[[13081,13081],"mapped",[12464,12521,12512,12488,12531]],[[13082,13082],"mapped",[12463,12523,12476,12452,12525]],[[13083,13083],"mapped",[12463,12525,12540,12493]],[[13084,13084],"mapped",[12465,12540,12473]],[[13085,13085],"mapped",[12467,12523,12490]],[[13086,13086],"mapped",[12467,12540,12509]],[[13087,13087],"mapped",[12469,12452,12463,12523]],[[13088,13088],"mapped",[12469,12531,12481,12540,12512]],[[13089,13089],"mapped",[12471,12522,12531,12464]],[[13090,13090],"mapped",[12475,12531,12481]],[[13091,13091],"mapped",[12475,12531,12488]],[[13092,13092],"mapped",[12480,12540,12473]],[[13093,13093],"mapped",[12487,12471]],[[13094,13094],"mapped",[12489,12523]],[[13095,13095],"mapped",[12488,12531]],[[13096,13096],"mapped",[12490,12494]],[[13097,13097],"mapped",[12494,12483,12488]],[[13098,13098],"mapped",[12495,12452,12484]],[[13099,13099],"mapped",[12497,12540,12475,12531,12488]],[[13100,13100],"mapped",[12497,12540,12484]],[[13101,13101],"mapped",[12496,12540,12524,12523]],[[13102,13102],"mapped",[12500,12450,12473,12488,12523]],[[13103,13103],"mapped",[12500,12463,12523]],[[13104,13104],"mapped",[12500,12467]],[[13105,13105],"mapped",[12499,12523]],[[13106,13106],"mapped",[12501,12449,12521,12483,12489]],[[13107,13107],"mapped",[12501,12451,12540,12488]],[[13108,13108],"mapped",[12502,12483,12471,12455,12523]],[[13109,13109],"mapped",[12501,12521,12531]],[[13110,13110],"mapped",[12504,12463,12479,12540,12523]],[[13111,13111],"mapped",[12506,12477]],[[13112,13112],"mapped",[12506,12491,12498]],[[13113,13113],"mapped",[12504,12523,12484]],[[13114,13114],"mapped",[12506,12531,12473]],[[13115,13115],"mapped",[12506,12540,12472]],[[13116,13116],"mapped",[12505,12540,12479]],[[13117,13117],"mapped",[12509,12452,12531,12488]],[[13118,13118],"mapped",[12508,12523,12488]],[[13119,13119],"mapped",[12507,12531]],[[13120,13120],"mapped",[12509,12531,12489]],[[13121,13121],"mapped",[12507,12540,12523]],[[13122,13122],"mapped",[12507,12540,12531]],[[13123,13123],"mapped",[12510,12452,12463,12525]],[[13124,13124],"mapped",[12510,12452,12523]],[[13125,13125],"mapped",[12510,12483,12495]],[[13126,13126],"mapped",[12510,12523,12463]],[[13127,13127],"mapped",[12510,12531,12471,12519,12531]],[[13128,13128],"mapped",[12511,12463,12525,12531]],[[13129,13129],"mapped",[12511,12522]],[[13130,13130],"mapped",[12511,12522,12496,12540,12523]],[[13131,13131],"mapped",[12513,12460]],[[13132,13132],"mapped",[12513,12460,12488,12531]],[[13133,13133],"mapped",[12513,12540,12488,12523]],[[13134,13134],"mapped",[12516,12540,12489]],[[13135,13135],"mapped",[12516,12540,12523]],[[13136,13136],"mapped",[12518,12450,12531]],[[13137,13137],"mapped",[12522,12483,12488,12523]],[[13138,13138],"mapped",[12522,12521]],[[13139,13139],"mapped",[12523,12500,12540]],[[13140,13140],"mapped",[12523,12540,12502,12523]],[[13141,13141],"mapped",[12524,12512]],[[13142,13142],"mapped",[12524,12531,12488,12466,12531]],[[13143,13143],"mapped",[12527,12483,12488]],[[13144,13144],"mapped",[48,28857]],[[13145,13145],"mapped",[49,28857]],[[13146,13146],"mapped",[50,28857]],[[13147,13147],"mapped",[51,28857]],[[13148,13148],"mapped",[52,28857]],[[13149,13149],"mapped",[53,28857]],[[13150,13150],"mapped",[54,28857]],[[13151,13151],"mapped",[55,28857]],[[13152,13152],"mapped",[56,28857]],[[13153,13153],"mapped",[57,28857]],[[13154,13154],"mapped",[49,48,28857]],[[13155,13155],"mapped",[49,49,28857]],[[13156,13156],"mapped",[49,50,28857]],[[13157,13157],"mapped",[49,51,28857]],[[13158,13158],"mapped",[49,52,28857]],[[13159,13159],"mapped",[49,53,28857]],[[13160,13160],"mapped",[49,54,28857]],[[13161,13161],"mapped",[49,55,28857]],[[13162,13162],"mapped",[49,56,28857]],[[13163,13163],"mapped",[49,57,28857]],[[13164,13164],"mapped",[50,48,28857]],[[13165,13165],"mapped",[50,49,28857]],[[13166,13166],"mapped",[50,50,28857]],[[13167,13167],"mapped",[50,51,28857]],[[13168,13168],"mapped",[50,52,28857]],[[13169,13169],"mapped",[104,112,97]],[[13170,13170],"mapped",[100,97]],[[13171,13171],"mapped",[97,117]],[[13172,13172],"mapped",[98,97,114]],[[13173,13173],"mapped",[111,118]],[[13174,13174],"mapped",[112,99]],[[13175,13175],"mapped",[100,109]],[[13176,13176],"mapped",[100,109,50]],[[13177,13177],"mapped",[100,109,51]],[[13178,13178],"mapped",[105,117]],[[13179,13179],"mapped",[24179,25104]],[[13180,13180],"mapped",[26157,21644]],[[13181,13181],"mapped",[22823,27491]],[[13182,13182],"mapped",[26126,27835]],[[13183,13183],"mapped",[26666,24335,20250,31038]],[[13184,13184],"mapped",[112,97]],[[13185,13185],"mapped",[110,97]],[[13186,13186],"mapped",[956,97]],[[13187,13187],"mapped",[109,97]],[[13188,13188],"mapped",[107,97]],[[13189,13189],"mapped",[107,98]],[[13190,13190],"mapped",[109,98]],[[13191,13191],"mapped",[103,98]],[[13192,13192],"mapped",[99,97,108]],[[13193,13193],"mapped",[107,99,97,108]],[[13194,13194],"mapped",[112,102]],[[13195,13195],"mapped",[110,102]],[[13196,13196],"mapped",[956,102]],[[13197,13197],"mapped",[956,103]],[[13198,13198],"mapped",[109,103]],[[13199,13199],"mapped",[107,103]],[[13200,13200],"mapped",[104,122]],[[13201,13201],"mapped",[107,104,122]],[[13202,13202],"mapped",[109,104,122]],[[13203,13203],"mapped",[103,104,122]],[[13204,13204],"mapped",[116,104,122]],[[13205,13205],"mapped",[956,108]],[[13206,13206],"mapped",[109,108]],[[13207,13207],"mapped",[100,108]],[[13208,13208],"mapped",[107,108]],[[13209,13209],"mapped",[102,109]],[[13210,13210],"mapped",[110,109]],[[13211,13211],"mapped",[956,109]],[[13212,13212],"mapped",[109,109]],[[13213,13213],"mapped",[99,109]],[[13214,13214],"mapped",[107,109]],[[13215,13215],"mapped",[109,109,50]],[[13216,13216],"mapped",[99,109,50]],[[13217,13217],"mapped",[109,50]],[[13218,13218],"mapped",[107,109,50]],[[13219,13219],"mapped",[109,109,51]],[[13220,13220],"mapped",[99,109,51]],[[13221,13221],"mapped",[109,51]],[[13222,13222],"mapped",[107,109,51]],[[13223,13223],"mapped",[109,8725,115]],[[13224,13224],"mapped",[109,8725,115,50]],[[13225,13225],"mapped",[112,97]],[[13226,13226],"mapped",[107,112,97]],[[13227,13227],"mapped",[109,112,97]],[[13228,13228],"mapped",[103,112,97]],[[13229,13229],"mapped",[114,97,100]],[[13230,13230],"mapped",[114,97,100,8725,115]],[[13231,13231],"mapped",[114,97,100,8725,115,50]],[[13232,13232],"mapped",[112,115]],[[13233,13233],"mapped",[110,115]],[[13234,13234],"mapped",[956,115]],[[13235,13235],"mapped",[109,115]],[[13236,13236],"mapped",[112,118]],[[13237,13237],"mapped",[110,118]],[[13238,13238],"mapped",[956,118]],[[13239,13239],"mapped",[109,118]],[[13240,13240],"mapped",[107,118]],[[13241,13241],"mapped",[109,118]],[[13242,13242],"mapped",[112,119]],[[13243,13243],"mapped",[110,119]],[[13244,13244],"mapped",[956,119]],[[13245,13245],"mapped",[109,119]],[[13246,13246],"mapped",[107,119]],[[13247,13247],"mapped",[109,119]],[[13248,13248],"mapped",[107,969]],[[13249,13249],"mapped",[109,969]],[[13250,13250],"disallowed"],[[13251,13251],"mapped",[98,113]],[[13252,13252],"mapped",[99,99]],[[13253,13253],"mapped",[99,100]],[[13254,13254],"mapped",[99,8725,107,103]],[[13255,13255],"disallowed"],[[13256,13256],"mapped",[100,98]],[[13257,13257],"mapped",[103,121]],[[13258,13258],"mapped",[104,97]],[[13259,13259],"mapped",[104,112]],[[13260,13260],"mapped",[105,110]],[[13261,13261],"mapped",[107,107]],[[13262,13262],"mapped",[107,109]],[[13263,13263],"mapped",[107,116]],[[13264,13264],"mapped",[108,109]],[[13265,13265],"mapped",[108,110]],[[13266,13266],"mapped",[108,111,103]],[[13267,13267],"mapped",[108,120]],[[13268,13268],"mapped",[109,98]],[[13269,13269],"mapped",[109,105,108]],[[13270,13270],"mapped",[109,111,108]],[[13271,13271],"mapped",[112,104]],[[13272,13272],"disallowed"],[[13273,13273],"mapped",[112,112,109]],[[13274,13274],"mapped",[112,114]],[[13275,13275],"mapped",[115,114]],[[13276,13276],"mapped",[115,118]],[[13277,13277],"mapped",[119,98]],[[13278,13278],"mapped",[118,8725,109]],[[13279,13279],"mapped",[97,8725,109]],[[13280,13280],"mapped",[49,26085]],[[13281,13281],"mapped",[50,26085]],[[13282,13282],"mapped",[51,26085]],[[13283,13283],"mapped",[52,26085]],[[13284,13284],"mapped",[53,26085]],[[13285,13285],"mapped",[54,26085]],[[13286,13286],"mapped",[55,26085]],[[13287,13287],"mapped",[56,26085]],[[13288,13288],"mapped",[57,26085]],[[13289,13289],"mapped",[49,48,26085]],[[13290,13290],"mapped",[49,49,26085]],[[13291,13291],"mapped",[49,50,26085]],[[13292,13292],"mapped",[49,51,26085]],[[13293,13293],"mapped",[49,52,26085]],[[13294,13294],"mapped",[49,53,26085]],[[13295,13295],"mapped",[49,54,26085]],[[13296,13296],"mapped",[49,55,26085]],[[13297,13297],"mapped",[49,56,26085]],[[13298,13298],"mapped",[49,57,26085]],[[13299,13299],"mapped",[50,48,26085]],[[13300,13300],"mapped",[50,49,26085]],[[13301,13301],"mapped",[50,50,26085]],[[13302,13302],"mapped",[50,51,26085]],[[13303,13303],"mapped",[50,52,26085]],[[13304,13304],"mapped",[50,53,26085]],[[13305,13305],"mapped",[50,54,26085]],[[13306,13306],"mapped",[50,55,26085]],[[13307,13307],"mapped",[50,56,26085]],[[13308,13308],"mapped",[50,57,26085]],[[13309,13309],"mapped",[51,48,26085]],[[13310,13310],"mapped",[51,49,26085]],[[13311,13311],"mapped",[103,97,108]],[[13312,19893],"valid"],[[19894,19903],"disallowed"],[[19904,19967],"valid",[],"NV8"],[[19968,40869],"valid"],[[40870,40891],"valid"],[[40892,40899],"valid"],[[40900,40907],"valid"],[[40908,40908],"valid"],[[40909,40917],"valid"],[[40918,40959],"disallowed"],[[40960,42124],"valid"],[[42125,42127],"disallowed"],[[42128,42145],"valid",[],"NV8"],[[42146,42147],"valid",[],"NV8"],[[42148,42163],"valid",[],"NV8"],[[42164,42164],"valid",[],"NV8"],[[42165,42176],"valid",[],"NV8"],[[42177,42177],"valid",[],"NV8"],[[42178,42180],"valid",[],"NV8"],[[42181,42181],"valid",[],"NV8"],[[42182,42182],"valid",[],"NV8"],[[42183,42191],"disallowed"],[[42192,42237],"valid"],[[42238,42239],"valid",[],"NV8"],[[42240,42508],"valid"],[[42509,42511],"valid",[],"NV8"],[[42512,42539],"valid"],[[42540,42559],"disallowed"],[[42560,42560],"mapped",[42561]],[[42561,42561],"valid"],[[42562,42562],"mapped",[42563]],[[42563,42563],"valid"],[[42564,42564],"mapped",[42565]],[[42565,42565],"valid"],[[42566,42566],"mapped",[42567]],[[42567,42567],"valid"],[[42568,42568],"mapped",[42569]],[[42569,42569],"valid"],[[42570,42570],"mapped",[42571]],[[42571,42571],"valid"],[[42572,42572],"mapped",[42573]],[[42573,42573],"valid"],[[42574,42574],"mapped",[42575]],[[42575,42575],"valid"],[[42576,42576],"mapped",[42577]],[[42577,42577],"valid"],[[42578,42578],"mapped",[42579]],[[42579,42579],"valid"],[[42580,42580],"mapped",[42581]],[[42581,42581],"valid"],[[42582,42582],"mapped",[42583]],[[42583,42583],"valid"],[[42584,42584],"mapped",[42585]],[[42585,42585],"valid"],[[42586,42586],"mapped",[42587]],[[42587,42587],"valid"],[[42588,42588],"mapped",[42589]],[[42589,42589],"valid"],[[42590,42590],"mapped",[42591]],[[42591,42591],"valid"],[[42592,42592],"mapped",[42593]],[[42593,42593],"valid"],[[42594,42594],"mapped",[42595]],[[42595,42595],"valid"],[[42596,42596],"mapped",[42597]],[[42597,42597],"valid"],[[42598,42598],"mapped",[42599]],[[42599,42599],"valid"],[[42600,42600],"mapped",[42601]],[[42601,42601],"valid"],[[42602,42602],"mapped",[42603]],[[42603,42603],"valid"],[[42604,42604],"mapped",[42605]],[[42605,42607],"valid"],[[42608,42611],"valid",[],"NV8"],[[42612,42619],"valid"],[[42620,42621],"valid"],[[42622,42622],"valid",[],"NV8"],[[42623,42623],"valid"],[[42624,42624],"mapped",[42625]],[[42625,42625],"valid"],[[42626,42626],"mapped",[42627]],[[42627,42627],"valid"],[[42628,42628],"mapped",[42629]],[[42629,42629],"valid"],[[42630,42630],"mapped",[42631]],[[42631,42631],"valid"],[[42632,42632],"mapped",[42633]],[[42633,42633],"valid"],[[42634,42634],"mapped",[42635]],[[42635,42635],"valid"],[[42636,42636],"mapped",[42637]],[[42637,42637],"valid"],[[42638,42638],"mapped",[42639]],[[42639,42639],"valid"],[[42640,42640],"mapped",[42641]],[[42641,42641],"valid"],[[42642,42642],"mapped",[42643]],[[42643,42643],"valid"],[[42644,42644],"mapped",[42645]],[[42645,42645],"valid"],[[42646,42646],"mapped",[42647]],[[42647,42647],"valid"],[[42648,42648],"mapped",[42649]],[[42649,42649],"valid"],[[42650,42650],"mapped",[42651]],[[42651,42651],"valid"],[[42652,42652],"mapped",[1098]],[[42653,42653],"mapped",[1100]],[[42654,42654],"valid"],[[42655,42655],"valid"],[[42656,42725],"valid"],[[42726,42735],"valid",[],"NV8"],[[42736,42737],"valid"],[[42738,42743],"valid",[],"NV8"],[[42744,42751],"disallowed"],[[42752,42774],"valid",[],"NV8"],[[42775,42778],"valid"],[[42779,42783],"valid"],[[42784,42785],"valid",[],"NV8"],[[42786,42786],"mapped",[42787]],[[42787,42787],"valid"],[[42788,42788],"mapped",[42789]],[[42789,42789],"valid"],[[42790,42790],"mapped",[42791]],[[42791,42791],"valid"],[[42792,42792],"mapped",[42793]],[[42793,42793],"valid"],[[42794,42794],"mapped",[42795]],[[42795,42795],"valid"],[[42796,42796],"mapped",[42797]],[[42797,42797],"valid"],[[42798,42798],"mapped",[42799]],[[42799,42801],"valid"],[[42802,42802],"mapped",[42803]],[[42803,42803],"valid"],[[42804,42804],"mapped",[42805]],[[42805,42805],"valid"],[[42806,42806],"mapped",[42807]],[[42807,42807],"valid"],[[42808,42808],"mapped",[42809]],[[42809,42809],"valid"],[[42810,42810],"mapped",[42811]],[[42811,42811],"valid"],[[42812,42812],"mapped",[42813]],[[42813,42813],"valid"],[[42814,42814],"mapped",[42815]],[[42815,42815],"valid"],[[42816,42816],"mapped",[42817]],[[42817,42817],"valid"],[[42818,42818],"mapped",[42819]],[[42819,42819],"valid"],[[42820,42820],"mapped",[42821]],[[42821,42821],"valid"],[[42822,42822],"mapped",[42823]],[[42823,42823],"valid"],[[42824,42824],"mapped",[42825]],[[42825,42825],"valid"],[[42826,42826],"mapped",[42827]],[[42827,42827],"valid"],[[42828,42828],"mapped",[42829]],[[42829,42829],"valid"],[[42830,42830],"mapped",[42831]],[[42831,42831],"valid"],[[42832,42832],"mapped",[42833]],[[42833,42833],"valid"],[[42834,42834],"mapped",[42835]],[[42835,42835],"valid"],[[42836,42836],"mapped",[42837]],[[42837,42837],"valid"],[[42838,42838],"mapped",[42839]],[[42839,42839],"valid"],[[42840,42840],"mapped",[42841]],[[42841,42841],"valid"],[[42842,42842],"mapped",[42843]],[[42843,42843],"valid"],[[42844,42844],"mapped",[42845]],[[42845,42845],"valid"],[[42846,42846],"mapped",[42847]],[[42847,42847],"valid"],[[42848,42848],"mapped",[42849]],[[42849,42849],"valid"],[[42850,42850],"mapped",[42851]],[[42851,42851],"valid"],[[42852,42852],"mapped",[42853]],[[42853,42853],"valid"],[[42854,42854],"mapped",[42855]],[[42855,42855],"valid"],[[42856,42856],"mapped",[42857]],[[42857,42857],"valid"],[[42858,42858],"mapped",[42859]],[[42859,42859],"valid"],[[42860,42860],"mapped",[42861]],[[42861,42861],"valid"],[[42862,42862],"mapped",[42863]],[[42863,42863],"valid"],[[42864,42864],"mapped",[42863]],[[42865,42872],"valid"],[[42873,42873],"mapped",[42874]],[[42874,42874],"valid"],[[42875,42875],"mapped",[42876]],[[42876,42876],"valid"],[[42877,42877],"mapped",[7545]],[[42878,42878],"mapped",[42879]],[[42879,42879],"valid"],[[42880,42880],"mapped",[42881]],[[42881,42881],"valid"],[[42882,42882],"mapped",[42883]],[[42883,42883],"valid"],[[42884,42884],"mapped",[42885]],[[42885,42885],"valid"],[[42886,42886],"mapped",[42887]],[[42887,42888],"valid"],[[42889,42890],"valid",[],"NV8"],[[42891,42891],"mapped",[42892]],[[42892,42892],"valid"],[[42893,42893],"mapped",[613]],[[42894,42894],"valid"],[[42895,42895],"valid"],[[42896,42896],"mapped",[42897]],[[42897,42897],"valid"],[[42898,42898],"mapped",[42899]],[[42899,42899],"valid"],[[42900,42901],"valid"],[[42902,42902],"mapped",[42903]],[[42903,42903],"valid"],[[42904,42904],"mapped",[42905]],[[42905,42905],"valid"],[[42906,42906],"mapped",[42907]],[[42907,42907],"valid"],[[42908,42908],"mapped",[42909]],[[42909,42909],"valid"],[[42910,42910],"mapped",[42911]],[[42911,42911],"valid"],[[42912,42912],"mapped",[42913]],[[42913,42913],"valid"],[[42914,42914],"mapped",[42915]],[[42915,42915],"valid"],[[42916,42916],"mapped",[42917]],[[42917,42917],"valid"],[[42918,42918],"mapped",[42919]],[[42919,42919],"valid"],[[42920,42920],"mapped",[42921]],[[42921,42921],"valid"],[[42922,42922],"mapped",[614]],[[42923,42923],"mapped",[604]],[[42924,42924],"mapped",[609]],[[42925,42925],"mapped",[620]],[[42926,42927],"disallowed"],[[42928,42928],"mapped",[670]],[[42929,42929],"mapped",[647]],[[42930,42930],"mapped",[669]],[[42931,42931],"mapped",[43859]],[[42932,42932],"mapped",[42933]],[[42933,42933],"valid"],[[42934,42934],"mapped",[42935]],[[42935,42935],"valid"],[[42936,42998],"disallowed"],[[42999,42999],"valid"],[[43000,43000],"mapped",[295]],[[43001,43001],"mapped",[339]],[[43002,43002],"valid"],[[43003,43007],"valid"],[[43008,43047],"valid"],[[43048,43051],"valid",[],"NV8"],[[43052,43055],"disallowed"],[[43056,43065],"valid",[],"NV8"],[[43066,43071],"disallowed"],[[43072,43123],"valid"],[[43124,43127],"valid",[],"NV8"],[[43128,43135],"disallowed"],[[43136,43204],"valid"],[[43205,43213],"disallowed"],[[43214,43215],"valid",[],"NV8"],[[43216,43225],"valid"],[[43226,43231],"disallowed"],[[43232,43255],"valid"],[[43256,43258],"valid",[],"NV8"],[[43259,43259],"valid"],[[43260,43260],"valid",[],"NV8"],[[43261,43261],"valid"],[[43262,43263],"disallowed"],[[43264,43309],"valid"],[[43310,43311],"valid",[],"NV8"],[[43312,43347],"valid"],[[43348,43358],"disallowed"],[[43359,43359],"valid",[],"NV8"],[[43360,43388],"valid",[],"NV8"],[[43389,43391],"disallowed"],[[43392,43456],"valid"],[[43457,43469],"valid",[],"NV8"],[[43470,43470],"disallowed"],[[43471,43481],"valid"],[[43482,43485],"disallowed"],[[43486,43487],"valid",[],"NV8"],[[43488,43518],"valid"],[[43519,43519],"disallowed"],[[43520,43574],"valid"],[[43575,43583],"disallowed"],[[43584,43597],"valid"],[[43598,43599],"disallowed"],[[43600,43609],"valid"],[[43610,43611],"disallowed"],[[43612,43615],"valid",[],"NV8"],[[43616,43638],"valid"],[[43639,43641],"valid",[],"NV8"],[[43642,43643],"valid"],[[43644,43647],"valid"],[[43648,43714],"valid"],[[43715,43738],"disallowed"],[[43739,43741],"valid"],[[43742,43743],"valid",[],"NV8"],[[43744,43759],"valid"],[[43760,43761],"valid",[],"NV8"],[[43762,43766],"valid"],[[43767,43776],"disallowed"],[[43777,43782],"valid"],[[43783,43784],"disallowed"],[[43785,43790],"valid"],[[43791,43792],"disallowed"],[[43793,43798],"valid"],[[43799,43807],"disallowed"],[[43808,43814],"valid"],[[43815,43815],"disallowed"],[[43816,43822],"valid"],[[43823,43823],"disallowed"],[[43824,43866],"valid"],[[43867,43867],"valid",[],"NV8"],[[43868,43868],"mapped",[42791]],[[43869,43869],"mapped",[43831]],[[43870,43870],"mapped",[619]],[[43871,43871],"mapped",[43858]],[[43872,43875],"valid"],[[43876,43877],"valid"],[[43878,43887],"disallowed"],[[43888,43888],"mapped",[5024]],[[43889,43889],"mapped",[5025]],[[43890,43890],"mapped",[5026]],[[43891,43891],"mapped",[5027]],[[43892,43892],"mapped",[5028]],[[43893,43893],"mapped",[5029]],[[43894,43894],"mapped",[5030]],[[43895,43895],"mapped",[5031]],[[43896,43896],"mapped",[5032]],[[43897,43897],"mapped",[5033]],[[43898,43898],"mapped",[5034]],[[43899,43899],"mapped",[5035]],[[43900,43900],"mapped",[5036]],[[43901,43901],"mapped",[5037]],[[43902,43902],"mapped",[5038]],[[43903,43903],"mapped",[5039]],[[43904,43904],"mapped",[5040]],[[43905,43905],"mapped",[5041]],[[43906,43906],"mapped",[5042]],[[43907,43907],"mapped",[5043]],[[43908,43908],"mapped",[5044]],[[43909,43909],"mapped",[5045]],[[43910,43910],"mapped",[5046]],[[43911,43911],"mapped",[5047]],[[43912,43912],"mapped",[5048]],[[43913,43913],"mapped",[5049]],[[43914,43914],"mapped",[5050]],[[43915,43915],"mapped",[5051]],[[43916,43916],"mapped",[5052]],[[43917,43917],"mapped",[5053]],[[43918,43918],"mapped",[5054]],[[43919,43919],"mapped",[5055]],[[43920,43920],"mapped",[5056]],[[43921,43921],"mapped",[5057]],[[43922,43922],"mapped",[5058]],[[43923,43923],"mapped",[5059]],[[43924,43924],"mapped",[5060]],[[43925,43925],"mapped",[5061]],[[43926,43926],"mapped",[5062]],[[43927,43927],"mapped",[5063]],[[43928,43928],"mapped",[5064]],[[43929,43929],"mapped",[5065]],[[43930,43930],"mapped",[5066]],[[43931,43931],"mapped",[5067]],[[43932,43932],"mapped",[5068]],[[43933,43933],"mapped",[5069]],[[43934,43934],"mapped",[5070]],[[43935,43935],"mapped",[5071]],[[43936,43936],"mapped",[5072]],[[43937,43937],"mapped",[5073]],[[43938,43938],"mapped",[5074]],[[43939,43939],"mapped",[5075]],[[43940,43940],"mapped",[5076]],[[43941,43941],"mapped",[5077]],[[43942,43942],"mapped",[5078]],[[43943,43943],"mapped",[5079]],[[43944,43944],"mapped",[5080]],[[43945,43945],"mapped",[5081]],[[43946,43946],"mapped",[5082]],[[43947,43947],"mapped",[5083]],[[43948,43948],"mapped",[5084]],[[43949,43949],"mapped",[5085]],[[43950,43950],"mapped",[5086]],[[43951,43951],"mapped",[5087]],[[43952,43952],"mapped",[5088]],[[43953,43953],"mapped",[5089]],[[43954,43954],"mapped",[5090]],[[43955,43955],"mapped",[5091]],[[43956,43956],"mapped",[5092]],[[43957,43957],"mapped",[5093]],[[43958,43958],"mapped",[5094]],[[43959,43959],"mapped",[5095]],[[43960,43960],"mapped",[5096]],[[43961,43961],"mapped",[5097]],[[43962,43962],"mapped",[5098]],[[43963,43963],"mapped",[5099]],[[43964,43964],"mapped",[5100]],[[43965,43965],"mapped",[5101]],[[43966,43966],"mapped",[5102]],[[43967,43967],"mapped",[5103]],[[43968,44010],"valid"],[[44011,44011],"valid",[],"NV8"],[[44012,44013],"valid"],[[44014,44015],"disallowed"],[[44016,44025],"valid"],[[44026,44031],"disallowed"],[[44032,55203],"valid"],[[55204,55215],"disallowed"],[[55216,55238],"valid",[],"NV8"],[[55239,55242],"disallowed"],[[55243,55291],"valid",[],"NV8"],[[55292,55295],"disallowed"],[[55296,57343],"disallowed"],[[57344,63743],"disallowed"],[[63744,63744],"mapped",[35912]],[[63745,63745],"mapped",[26356]],[[63746,63746],"mapped",[36554]],[[63747,63747],"mapped",[36040]],[[63748,63748],"mapped",[28369]],[[63749,63749],"mapped",[20018]],[[63750,63750],"mapped",[21477]],[[63751,63752],"mapped",[40860]],[[63753,63753],"mapped",[22865]],[[63754,63754],"mapped",[37329]],[[63755,63755],"mapped",[21895]],[[63756,63756],"mapped",[22856]],[[63757,63757],"mapped",[25078]],[[63758,63758],"mapped",[30313]],[[63759,63759],"mapped",[32645]],[[63760,63760],"mapped",[34367]],[[63761,63761],"mapped",[34746]],[[63762,63762],"mapped",[35064]],[[63763,63763],"mapped",[37007]],[[63764,63764],"mapped",[27138]],[[63765,63765],"mapped",[27931]],[[63766,63766],"mapped",[28889]],[[63767,63767],"mapped",[29662]],[[63768,63768],"mapped",[33853]],[[63769,63769],"mapped",[37226]],[[63770,63770],"mapped",[39409]],[[63771,63771],"mapped",[20098]],[[63772,63772],"mapped",[21365]],[[63773,63773],"mapped",[27396]],[[63774,63774],"mapped",[29211]],[[63775,63775],"mapped",[34349]],[[63776,63776],"mapped",[40478]],[[63777,63777],"mapped",[23888]],[[63778,63778],"mapped",[28651]],[[63779,63779],"mapped",[34253]],[[63780,63780],"mapped",[35172]],[[63781,63781],"mapped",[25289]],[[63782,63782],"mapped",[33240]],[[63783,63783],"mapped",[34847]],[[63784,63784],"mapped",[24266]],[[63785,63785],"mapped",[26391]],[[63786,63786],"mapped",[28010]],[[63787,63787],"mapped",[29436]],[[63788,63788],"mapped",[37070]],[[63789,63789],"mapped",[20358]],[[63790,63790],"mapped",[20919]],[[63791,63791],"mapped",[21214]],[[63792,63792],"mapped",[25796]],[[63793,63793],"mapped",[27347]],[[63794,63794],"mapped",[29200]],[[63795,63795],"mapped",[30439]],[[63796,63796],"mapped",[32769]],[[63797,63797],"mapped",[34310]],[[63798,63798],"mapped",[34396]],[[63799,63799],"mapped",[36335]],[[63800,63800],"mapped",[38706]],[[63801,63801],"mapped",[39791]],[[63802,63802],"mapped",[40442]],[[63803,63803],"mapped",[30860]],[[63804,63804],"mapped",[31103]],[[63805,63805],"mapped",[32160]],[[63806,63806],"mapped",[33737]],[[63807,63807],"mapped",[37636]],[[63808,63808],"mapped",[40575]],[[63809,63809],"mapped",[35542]],[[63810,63810],"mapped",[22751]],[[63811,63811],"mapped",[24324]],[[63812,63812],"mapped",[31840]],[[63813,63813],"mapped",[32894]],[[63814,63814],"mapped",[29282]],[[63815,63815],"mapped",[30922]],[[63816,63816],"mapped",[36034]],[[63817,63817],"mapped",[38647]],[[63818,63818],"mapped",[22744]],[[63819,63819],"mapped",[23650]],[[63820,63820],"mapped",[27155]],[[63821,63821],"mapped",[28122]],[[63822,63822],"mapped",[28431]],[[63823,63823],"mapped",[32047]],[[63824,63824],"mapped",[32311]],[[63825,63825],"mapped",[38475]],[[63826,63826],"mapped",[21202]],[[63827,63827],"mapped",[32907]],[[63828,63828],"mapped",[20956]],[[63829,63829],"mapped",[20940]],[[63830,63830],"mapped",[31260]],[[63831,63831],"mapped",[32190]],[[63832,63832],"mapped",[33777]],[[63833,63833],"mapped",[38517]],[[63834,63834],"mapped",[35712]],[[63835,63835],"mapped",[25295]],[[63836,63836],"mapped",[27138]],[[63837,63837],"mapped",[35582]],[[63838,63838],"mapped",[20025]],[[63839,63839],"mapped",[23527]],[[63840,63840],"mapped",[24594]],[[63841,63841],"mapped",[29575]],[[63842,63842],"mapped",[30064]],[[63843,63843],"mapped",[21271]],[[63844,63844],"mapped",[30971]],[[63845,63845],"mapped",[20415]],[[63846,63846],"mapped",[24489]],[[63847,63847],"mapped",[19981]],[[63848,63848],"mapped",[27852]],[[63849,63849],"mapped",[25976]],[[63850,63850],"mapped",[32034]],[[63851,63851],"mapped",[21443]],[[63852,63852],"mapped",[22622]],[[63853,63853],"mapped",[30465]],[[63854,63854],"mapped",[33865]],[[63855,63855],"mapped",[35498]],[[63856,63856],"mapped",[27578]],[[63857,63857],"mapped",[36784]],[[63858,63858],"mapped",[27784]],[[63859,63859],"mapped",[25342]],[[63860,63860],"mapped",[33509]],[[63861,63861],"mapped",[25504]],[[63862,63862],"mapped",[30053]],[[63863,63863],"mapped",[20142]],[[63864,63864],"mapped",[20841]],[[63865,63865],"mapped",[20937]],[[63866,63866],"mapped",[26753]],[[63867,63867],"mapped",[31975]],[[63868,63868],"mapped",[33391]],[[63869,63869],"mapped",[35538]],[[63870,63870],"mapped",[37327]],[[63871,63871],"mapped",[21237]],[[63872,63872],"mapped",[21570]],[[63873,63873],"mapped",[22899]],[[63874,63874],"mapped",[24300]],[[63875,63875],"mapped",[26053]],[[63876,63876],"mapped",[28670]],[[63877,63877],"mapped",[31018]],[[63878,63878],"mapped",[38317]],[[63879,63879],"mapped",[39530]],[[63880,63880],"mapped",[40599]],[[63881,63881],"mapped",[40654]],[[63882,63882],"mapped",[21147]],[[63883,63883],"mapped",[26310]],[[63884,63884],"mapped",[27511]],[[63885,63885],"mapped",[36706]],[[63886,63886],"mapped",[24180]],[[63887,63887],"mapped",[24976]],[[63888,63888],"mapped",[25088]],[[63889,63889],"mapped",[25754]],[[63890,63890],"mapped",[28451]],[[63891,63891],"mapped",[29001]],[[63892,63892],"mapped",[29833]],[[63893,63893],"mapped",[31178]],[[63894,63894],"mapped",[32244]],[[63895,63895],"mapped",[32879]],[[63896,63896],"mapped",[36646]],[[63897,63897],"mapped",[34030]],[[63898,63898],"mapped",[36899]],[[63899,63899],"mapped",[37706]],[[63900,63900],"mapped",[21015]],[[63901,63901],"mapped",[21155]],[[63902,63902],"mapped",[21693]],[[63903,63903],"mapped",[28872]],[[63904,63904],"mapped",[35010]],[[63905,63905],"mapped",[35498]],[[63906,63906],"mapped",[24265]],[[63907,63907],"mapped",[24565]],[[63908,63908],"mapped",[25467]],[[63909,63909],"mapped",[27566]],[[63910,63910],"mapped",[31806]],[[63911,63911],"mapped",[29557]],[[63912,63912],"mapped",[20196]],[[63913,63913],"mapped",[22265]],[[63914,63914],"mapped",[23527]],[[63915,63915],"mapped",[23994]],[[63916,63916],"mapped",[24604]],[[63917,63917],"mapped",[29618]],[[63918,63918],"mapped",[29801]],[[63919,63919],"mapped",[32666]],[[63920,63920],"mapped",[32838]],[[63921,63921],"mapped",[37428]],[[63922,63922],"mapped",[38646]],[[63923,63923],"mapped",[38728]],[[63924,63924],"mapped",[38936]],[[63925,63925],"mapped",[20363]],[[63926,63926],"mapped",[31150]],[[63927,63927],"mapped",[37300]],[[63928,63928],"mapped",[38584]],[[63929,63929],"mapped",[24801]],[[63930,63930],"mapped",[20102]],[[63931,63931],"mapped",[20698]],[[63932,63932],"mapped",[23534]],[[63933,63933],"mapped",[23615]],[[63934,63934],"mapped",[26009]],[[63935,63935],"mapped",[27138]],[[63936,63936],"mapped",[29134]],[[63937,63937],"mapped",[30274]],[[63938,63938],"mapped",[34044]],[[63939,63939],"mapped",[36988]],[[63940,63940],"mapped",[40845]],[[63941,63941],"mapped",[26248]],[[63942,63942],"mapped",[38446]],[[63943,63943],"mapped",[21129]],[[63944,63944],"mapped",[26491]],[[63945,63945],"mapped",[26611]],[[63946,63946],"mapped",[27969]],[[63947,63947],"mapped",[28316]],[[63948,63948],"mapped",[29705]],[[63949,63949],"mapped",[30041]],[[63950,63950],"mapped",[30827]],[[63951,63951],"mapped",[32016]],[[63952,63952],"mapped",[39006]],[[63953,63953],"mapped",[20845]],[[63954,63954],"mapped",[25134]],[[63955,63955],"mapped",[38520]],[[63956,63956],"mapped",[20523]],[[63957,63957],"mapped",[23833]],[[63958,63958],"mapped",[28138]],[[63959,63959],"mapped",[36650]],[[63960,63960],"mapped",[24459]],[[63961,63961],"mapped",[24900]],[[63962,63962],"mapped",[26647]],[[63963,63963],"mapped",[29575]],[[63964,63964],"mapped",[38534]],[[63965,63965],"mapped",[21033]],[[63966,63966],"mapped",[21519]],[[63967,63967],"mapped",[23653]],[[63968,63968],"mapped",[26131]],[[63969,63969],"mapped",[26446]],[[63970,63970],"mapped",[26792]],[[63971,63971],"mapped",[27877]],[[63972,63972],"mapped",[29702]],[[63973,63973],"mapped",[30178]],[[63974,63974],"mapped",[32633]],[[63975,63975],"mapped",[35023]],[[63976,63976],"mapped",[35041]],[[63977,63977],"mapped",[37324]],[[63978,63978],"mapped",[38626]],[[63979,63979],"mapped",[21311]],[[63980,63980],"mapped",[28346]],[[63981,63981],"mapped",[21533]],[[63982,63982],"mapped",[29136]],[[63983,63983],"mapped",[29848]],[[63984,63984],"mapped",[34298]],[[63985,63985],"mapped",[38563]],[[63986,63986],"mapped",[40023]],[[63987,63987],"mapped",[40607]],[[63988,63988],"mapped",[26519]],[[63989,63989],"mapped",[28107]],[[63990,63990],"mapped",[33256]],[[63991,63991],"mapped",[31435]],[[63992,63992],"mapped",[31520]],[[63993,63993],"mapped",[31890]],[[63994,63994],"mapped",[29376]],[[63995,63995],"mapped",[28825]],[[63996,63996],"mapped",[35672]],[[63997,63997],"mapped",[20160]],[[63998,63998],"mapped",[33590]],[[63999,63999],"mapped",[21050]],[[64000,64000],"mapped",[20999]],[[64001,64001],"mapped",[24230]],[[64002,64002],"mapped",[25299]],[[64003,64003],"mapped",[31958]],[[64004,64004],"mapped",[23429]],[[64005,64005],"mapped",[27934]],[[64006,64006],"mapped",[26292]],[[64007,64007],"mapped",[36667]],[[64008,64008],"mapped",[34892]],[[64009,64009],"mapped",[38477]],[[64010,64010],"mapped",[35211]],[[64011,64011],"mapped",[24275]],[[64012,64012],"mapped",[20800]],[[64013,64013],"mapped",[21952]],[[64014,64015],"valid"],[[64016,64016],"mapped",[22618]],[[64017,64017],"valid"],[[64018,64018],"mapped",[26228]],[[64019,64020],"valid"],[[64021,64021],"mapped",[20958]],[[64022,64022],"mapped",[29482]],[[64023,64023],"mapped",[30410]],[[64024,64024],"mapped",[31036]],[[64025,64025],"mapped",[31070]],[[64026,64026],"mapped",[31077]],[[64027,64027],"mapped",[31119]],[[64028,64028],"mapped",[38742]],[[64029,64029],"mapped",[31934]],[[64030,64030],"mapped",[32701]],[[64031,64031],"valid"],[[64032,64032],"mapped",[34322]],[[64033,64033],"valid"],[[64034,64034],"mapped",[35576]],[[64035,64036],"valid"],[[64037,64037],"mapped",[36920]],[[64038,64038],"mapped",[37117]],[[64039,64041],"valid"],[[64042,64042],"mapped",[39151]],[[64043,64043],"mapped",[39164]],[[64044,64044],"mapped",[39208]],[[64045,64045],"mapped",[40372]],[[64046,64046],"mapped",[37086]],[[64047,64047],"mapped",[38583]],[[64048,64048],"mapped",[20398]],[[64049,64049],"mapped",[20711]],[[64050,64050],"mapped",[20813]],[[64051,64051],"mapped",[21193]],[[64052,64052],"mapped",[21220]],[[64053,64053],"mapped",[21329]],[[64054,64054],"mapped",[21917]],[[64055,64055],"mapped",[22022]],[[64056,64056],"mapped",[22120]],[[64057,64057],"mapped",[22592]],[[64058,64058],"mapped",[22696]],[[64059,64059],"mapped",[23652]],[[64060,64060],"mapped",[23662]],[[64061,64061],"mapped",[24724]],[[64062,64062],"mapped",[24936]],[[64063,64063],"mapped",[24974]],[[64064,64064],"mapped",[25074]],[[64065,64065],"mapped",[25935]],[[64066,64066],"mapped",[26082]],[[64067,64067],"mapped",[26257]],[[64068,64068],"mapped",[26757]],[[64069,64069],"mapped",[28023]],[[64070,64070],"mapped",[28186]],[[64071,64071],"mapped",[28450]],[[64072,64072],"mapped",[29038]],[[64073,64073],"mapped",[29227]],[[64074,64074],"mapped",[29730]],[[64075,64075],"mapped",[30865]],[[64076,64076],"mapped",[31038]],[[64077,64077],"mapped",[31049]],[[64078,64078],"mapped",[31048]],[[64079,64079],"mapped",[31056]],[[64080,64080],"mapped",[31062]],[[64081,64081],"mapped",[31069]],[[64082,64082],"mapped",[31117]],[[64083,64083],"mapped",[31118]],[[64084,64084],"mapped",[31296]],[[64085,64085],"mapped",[31361]],[[64086,64086],"mapped",[31680]],[[64087,64087],"mapped",[32244]],[[64088,64088],"mapped",[32265]],[[64089,64089],"mapped",[32321]],[[64090,64090],"mapped",[32626]],[[64091,64091],"mapped",[32773]],[[64092,64092],"mapped",[33261]],[[64093,64094],"mapped",[33401]],[[64095,64095],"mapped",[33879]],[[64096,64096],"mapped",[35088]],[[64097,64097],"mapped",[35222]],[[64098,64098],"mapped",[35585]],[[64099,64099],"mapped",[35641]],[[64100,64100],"mapped",[36051]],[[64101,64101],"mapped",[36104]],[[64102,64102],"mapped",[36790]],[[64103,64103],"mapped",[36920]],[[64104,64104],"mapped",[38627]],[[64105,64105],"mapped",[38911]],[[64106,64106],"mapped",[38971]],[[64107,64107],"mapped",[24693]],[[64108,64108],"mapped",[148206]],[[64109,64109],"mapped",[33304]],[[64110,64111],"disallowed"],[[64112,64112],"mapped",[20006]],[[64113,64113],"mapped",[20917]],[[64114,64114],"mapped",[20840]],[[64115,64115],"mapped",[20352]],[[64116,64116],"mapped",[20805]],[[64117,64117],"mapped",[20864]],[[64118,64118],"mapped",[21191]],[[64119,64119],"mapped",[21242]],[[64120,64120],"mapped",[21917]],[[64121,64121],"mapped",[21845]],[[64122,64122],"mapped",[21913]],[[64123,64123],"mapped",[21986]],[[64124,64124],"mapped",[22618]],[[64125,64125],"mapped",[22707]],[[64126,64126],"mapped",[22852]],[[64127,64127],"mapped",[22868]],[[64128,64128],"mapped",[23138]],[[64129,64129],"mapped",[23336]],[[64130,64130],"mapped",[24274]],[[64131,64131],"mapped",[24281]],[[64132,64132],"mapped",[24425]],[[64133,64133],"mapped",[24493]],[[64134,64134],"mapped",[24792]],[[64135,64135],"mapped",[24910]],[[64136,64136],"mapped",[24840]],[[64137,64137],"mapped",[24974]],[[64138,64138],"mapped",[24928]],[[64139,64139],"mapped",[25074]],[[64140,64140],"mapped",[25140]],[[64141,64141],"mapped",[25540]],[[64142,64142],"mapped",[25628]],[[64143,64143],"mapped",[25682]],[[64144,64144],"mapped",[25942]],[[64145,64145],"mapped",[26228]],[[64146,64146],"mapped",[26391]],[[64147,64147],"mapped",[26395]],[[64148,64148],"mapped",[26454]],[[64149,64149],"mapped",[27513]],[[64150,64150],"mapped",[27578]],[[64151,64151],"mapped",[27969]],[[64152,64152],"mapped",[28379]],[[64153,64153],"mapped",[28363]],[[64154,64154],"mapped",[28450]],[[64155,64155],"mapped",[28702]],[[64156,64156],"mapped",[29038]],[[64157,64157],"mapped",[30631]],[[64158,64158],"mapped",[29237]],[[64159,64159],"mapped",[29359]],[[64160,64160],"mapped",[29482]],[[64161,64161],"mapped",[29809]],[[64162,64162],"mapped",[29958]],[[64163,64163],"mapped",[30011]],[[64164,64164],"mapped",[30237]],[[64165,64165],"mapped",[30239]],[[64166,64166],"mapped",[30410]],[[64167,64167],"mapped",[30427]],[[64168,64168],"mapped",[30452]],[[64169,64169],"mapped",[30538]],[[64170,64170],"mapped",[30528]],[[64171,64171],"mapped",[30924]],[[64172,64172],"mapped",[31409]],[[64173,64173],"mapped",[31680]],[[64174,64174],"mapped",[31867]],[[64175,64175],"mapped",[32091]],[[64176,64176],"mapped",[32244]],[[64177,64177],"mapped",[32574]],[[64178,64178],"mapped",[32773]],[[64179,64179],"mapped",[33618]],[[64180,64180],"mapped",[33775]],[[64181,64181],"mapped",[34681]],[[64182,64182],"mapped",[35137]],[[64183,64183],"mapped",[35206]],[[64184,64184],"mapped",[35222]],[[64185,64185],"mapped",[35519]],[[64186,64186],"mapped",[35576]],[[64187,64187],"mapped",[35531]],[[64188,64188],"mapped",[35585]],[[64189,64189],"mapped",[35582]],[[64190,64190],"mapped",[35565]],[[64191,64191],"mapped",[35641]],[[64192,64192],"mapped",[35722]],[[64193,64193],"mapped",[36104]],[[64194,64194],"mapped",[36664]],[[64195,64195],"mapped",[36978]],[[64196,64196],"mapped",[37273]],[[64197,64197],"mapped",[37494]],[[64198,64198],"mapped",[38524]],[[64199,64199],"mapped",[38627]],[[64200,64200],"mapped",[38742]],[[64201,64201],"mapped",[38875]],[[64202,64202],"mapped",[38911]],[[64203,64203],"mapped",[38923]],[[64204,64204],"mapped",[38971]],[[64205,64205],"mapped",[39698]],[[64206,64206],"mapped",[40860]],[[64207,64207],"mapped",[141386]],[[64208,64208],"mapped",[141380]],[[64209,64209],"mapped",[144341]],[[64210,64210],"mapped",[15261]],[[64211,64211],"mapped",[16408]],[[64212,64212],"mapped",[16441]],[[64213,64213],"mapped",[152137]],[[64214,64214],"mapped",[154832]],[[64215,64215],"mapped",[163539]],[[64216,64216],"mapped",[40771]],[[64217,64217],"mapped",[40846]],[[64218,64255],"disallowed"],[[64256,64256],"mapped",[102,102]],[[64257,64257],"mapped",[102,105]],[[64258,64258],"mapped",[102,108]],[[64259,64259],"mapped",[102,102,105]],[[64260,64260],"mapped",[102,102,108]],[[64261,64262],"mapped",[115,116]],[[64263,64274],"disallowed"],[[64275,64275],"mapped",[1396,1398]],[[64276,64276],"mapped",[1396,1381]],[[64277,64277],"mapped",[1396,1387]],[[64278,64278],"mapped",[1406,1398]],[[64279,64279],"mapped",[1396,1389]],[[64280,64284],"disallowed"],[[64285,64285],"mapped",[1497,1460]],[[64286,64286],"valid"],[[64287,64287],"mapped",[1522,1463]],[[64288,64288],"mapped",[1506]],[[64289,64289],"mapped",[1488]],[[64290,64290],"mapped",[1491]],[[64291,64291],"mapped",[1492]],[[64292,64292],"mapped",[1499]],[[64293,64293],"mapped",[1500]],[[64294,64294],"mapped",[1501]],[[64295,64295],"mapped",[1512]],[[64296,64296],"mapped",[1514]],[[64297,64297],"disallowed_STD3_mapped",[43]],[[64298,64298],"mapped",[1513,1473]],[[64299,64299],"mapped",[1513,1474]],[[64300,64300],"mapped",[1513,1468,1473]],[[64301,64301],"mapped",[1513,1468,1474]],[[64302,64302],"mapped",[1488,1463]],[[64303,64303],"mapped",[1488,1464]],[[64304,64304],"mapped",[1488,1468]],[[64305,64305],"mapped",[1489,1468]],[[64306,64306],"mapped",[1490,1468]],[[64307,64307],"mapped",[1491,1468]],[[64308,64308],"mapped",[1492,1468]],[[64309,64309],"mapped",[1493,1468]],[[64310,64310],"mapped",[1494,1468]],[[64311,64311],"disallowed"],[[64312,64312],"mapped",[1496,1468]],[[64313,64313],"mapped",[1497,1468]],[[64314,64314],"mapped",[1498,1468]],[[64315,64315],"mapped",[1499,1468]],[[64316,64316],"mapped",[1500,1468]],[[64317,64317],"disallowed"],[[64318,64318],"mapped",[1502,1468]],[[64319,64319],"disallowed"],[[64320,64320],"mapped",[1504,1468]],[[64321,64321],"mapped",[1505,1468]],[[64322,64322],"disallowed"],[[64323,64323],"mapped",[1507,1468]],[[64324,64324],"mapped",[1508,1468]],[[64325,64325],"disallowed"],[[64326,64326],"mapped",[1510,1468]],[[64327,64327],"mapped",[1511,1468]],[[64328,64328],"mapped",[1512,1468]],[[64329,64329],"mapped",[1513,1468]],[[64330,64330],"mapped",[1514,1468]],[[64331,64331],"mapped",[1493,1465]],[[64332,64332],"mapped",[1489,1471]],[[64333,64333],"mapped",[1499,1471]],[[64334,64334],"mapped",[1508,1471]],[[64335,64335],"mapped",[1488,1500]],[[64336,64337],"mapped",[1649]],[[64338,64341],"mapped",[1659]],[[64342,64345],"mapped",[1662]],[[64346,64349],"mapped",[1664]],[[64350,64353],"mapped",[1658]],[[64354,64357],"mapped",[1663]],[[64358,64361],"mapped",[1657]],[[64362,64365],"mapped",[1700]],[[64366,64369],"mapped",[1702]],[[64370,64373],"mapped",[1668]],[[64374,64377],"mapped",[1667]],[[64378,64381],"mapped",[1670]],[[64382,64385],"mapped",[1671]],[[64386,64387],"mapped",[1677]],[[64388,64389],"mapped",[1676]],[[64390,64391],"mapped",[1678]],[[64392,64393],"mapped",[1672]],[[64394,64395],"mapped",[1688]],[[64396,64397],"mapped",[1681]],[[64398,64401],"mapped",[1705]],[[64402,64405],"mapped",[1711]],[[64406,64409],"mapped",[1715]],[[64410,64413],"mapped",[1713]],[[64414,64415],"mapped",[1722]],[[64416,64419],"mapped",[1723]],[[64420,64421],"mapped",[1728]],[[64422,64425],"mapped",[1729]],[[64426,64429],"mapped",[1726]],[[64430,64431],"mapped",[1746]],[[64432,64433],"mapped",[1747]],[[64434,64449],"valid",[],"NV8"],[[64450,64466],"disallowed"],[[64467,64470],"mapped",[1709]],[[64471,64472],"mapped",[1735]],[[64473,64474],"mapped",[1734]],[[64475,64476],"mapped",[1736]],[[64477,64477],"mapped",[1735,1652]],[[64478,64479],"mapped",[1739]],[[64480,64481],"mapped",[1733]],[[64482,64483],"mapped",[1737]],[[64484,64487],"mapped",[1744]],[[64488,64489],"mapped",[1609]],[[64490,64491],"mapped",[1574,1575]],[[64492,64493],"mapped",[1574,1749]],[[64494,64495],"mapped",[1574,1608]],[[64496,64497],"mapped",[1574,1735]],[[64498,64499],"mapped",[1574,1734]],[[64500,64501],"mapped",[1574,1736]],[[64502,64504],"mapped",[1574,1744]],[[64505,64507],"mapped",[1574,1609]],[[64508,64511],"mapped",[1740]],[[64512,64512],"mapped",[1574,1580]],[[64513,64513],"mapped",[1574,1581]],[[64514,64514],"mapped",[1574,1605]],[[64515,64515],"mapped",[1574,1609]],[[64516,64516],"mapped",[1574,1610]],[[64517,64517],"mapped",[1576,1580]],[[64518,64518],"mapped",[1576,1581]],[[64519,64519],"mapped",[1576,1582]],[[64520,64520],"mapped",[1576,1605]],[[64521,64521],"mapped",[1576,1609]],[[64522,64522],"mapped",[1576,1610]],[[64523,64523],"mapped",[1578,1580]],[[64524,64524],"mapped",[1578,1581]],[[64525,64525],"mapped",[1578,1582]],[[64526,64526],"mapped",[1578,1605]],[[64527,64527],"mapped",[1578,1609]],[[64528,64528],"mapped",[1578,1610]],[[64529,64529],"mapped",[1579,1580]],[[64530,64530],"mapped",[1579,1605]],[[64531,64531],"mapped",[1579,1609]],[[64532,64532],"mapped",[1579,1610]],[[64533,64533],"mapped",[1580,1581]],[[64534,64534],"mapped",[1580,1605]],[[64535,64535],"mapped",[1581,1580]],[[64536,64536],"mapped",[1581,1605]],[[64537,64537],"mapped",[1582,1580]],[[64538,64538],"mapped",[1582,1581]],[[64539,64539],"mapped",[1582,1605]],[[64540,64540],"mapped",[1587,1580]],[[64541,64541],"mapped",[1587,1581]],[[64542,64542],"mapped",[1587,1582]],[[64543,64543],"mapped",[1587,1605]],[[64544,64544],"mapped",[1589,1581]],[[64545,64545],"mapped",[1589,1605]],[[64546,64546],"mapped",[1590,1580]],[[64547,64547],"mapped",[1590,1581]],[[64548,64548],"mapped",[1590,1582]],[[64549,64549],"mapped",[1590,1605]],[[64550,64550],"mapped",[1591,1581]],[[64551,64551],"mapped",[1591,1605]],[[64552,64552],"mapped",[1592,1605]],[[64553,64553],"mapped",[1593,1580]],[[64554,64554],"mapped",[1593,1605]],[[64555,64555],"mapped",[1594,1580]],[[64556,64556],"mapped",[1594,1605]],[[64557,64557],"mapped",[1601,1580]],[[64558,64558],"mapped",[1601,1581]],[[64559,64559],"mapped",[1601,1582]],[[64560,64560],"mapped",[1601,1605]],[[64561,64561],"mapped",[1601,1609]],[[64562,64562],"mapped",[1601,1610]],[[64563,64563],"mapped",[1602,1581]],[[64564,64564],"mapped",[1602,1605]],[[64565,64565],"mapped",[1602,1609]],[[64566,64566],"mapped",[1602,1610]],[[64567,64567],"mapped",[1603,1575]],[[64568,64568],"mapped",[1603,1580]],[[64569,64569],"mapped",[1603,1581]],[[64570,64570],"mapped",[1603,1582]],[[64571,64571],"mapped",[1603,1604]],[[64572,64572],"mapped",[1603,1605]],[[64573,64573],"mapped",[1603,1609]],[[64574,64574],"mapped",[1603,1610]],[[64575,64575],"mapped",[1604,1580]],[[64576,64576],"mapped",[1604,1581]],[[64577,64577],"mapped",[1604,1582]],[[64578,64578],"mapped",[1604,1605]],[[64579,64579],"mapped",[1604,1609]],[[64580,64580],"mapped",[1604,1610]],[[64581,64581],"mapped",[1605,1580]],[[64582,64582],"mapped",[1605,1581]],[[64583,64583],"mapped",[1605,1582]],[[64584,64584],"mapped",[1605,1605]],[[64585,64585],"mapped",[1605,1609]],[[64586,64586],"mapped",[1605,1610]],[[64587,64587],"mapped",[1606,1580]],[[64588,64588],"mapped",[1606,1581]],[[64589,64589],"mapped",[1606,1582]],[[64590,64590],"mapped",[1606,1605]],[[64591,64591],"mapped",[1606,1609]],[[64592,64592],"mapped",[1606,1610]],[[64593,64593],"mapped",[1607,1580]],[[64594,64594],"mapped",[1607,1605]],[[64595,64595],"mapped",[1607,1609]],[[64596,64596],"mapped",[1607,1610]],[[64597,64597],"mapped",[1610,1580]],[[64598,64598],"mapped",[1610,1581]],[[64599,64599],"mapped",[1610,1582]],[[64600,64600],"mapped",[1610,1605]],[[64601,64601],"mapped",[1610,1609]],[[64602,64602],"mapped",[1610,1610]],[[64603,64603],"mapped",[1584,1648]],[[64604,64604],"mapped",[1585,1648]],[[64605,64605],"mapped",[1609,1648]],[[64606,64606],"disallowed_STD3_mapped",[32,1612,1617]],[[64607,64607],"disallowed_STD3_mapped",[32,1613,1617]],[[64608,64608],"disallowed_STD3_mapped",[32,1614,1617]],[[64609,64609],"disallowed_STD3_mapped",[32,1615,1617]],[[64610,64610],"disallowed_STD3_mapped",[32,1616,1617]],[[64611,64611],"disallowed_STD3_mapped",[32,1617,1648]],[[64612,64612],"mapped",[1574,1585]],[[64613,64613],"mapped",[1574,1586]],[[64614,64614],"mapped",[1574,1605]],[[64615,64615],"mapped",[1574,1606]],[[64616,64616],"mapped",[1574,1609]],[[64617,64617],"mapped",[1574,1610]],[[64618,64618],"mapped",[1576,1585]],[[64619,64619],"mapped",[1576,1586]],[[64620,64620],"mapped",[1576,1605]],[[64621,64621],"mapped",[1576,1606]],[[64622,64622],"mapped",[1576,1609]],[[64623,64623],"mapped",[1576,1610]],[[64624,64624],"mapped",[1578,1585]],[[64625,64625],"mapped",[1578,1586]],[[64626,64626],"mapped",[1578,1605]],[[64627,64627],"mapped",[1578,1606]],[[64628,64628],"mapped",[1578,1609]],[[64629,64629],"mapped",[1578,1610]],[[64630,64630],"mapped",[1579,1585]],[[64631,64631],"mapped",[1579,1586]],[[64632,64632],"mapped",[1579,1605]],[[64633,64633],"mapped",[1579,1606]],[[64634,64634],"mapped",[1579,1609]],[[64635,64635],"mapped",[1579,1610]],[[64636,64636],"mapped",[1601,1609]],[[64637,64637],"mapped",[1601,1610]],[[64638,64638],"mapped",[1602,1609]],[[64639,64639],"mapped",[1602,1610]],[[64640,64640],"mapped",[1603,1575]],[[64641,64641],"mapped",[1603,1604]],[[64642,64642],"mapped",[1603,1605]],[[64643,64643],"mapped",[1603,1609]],[[64644,64644],"mapped",[1603,1610]],[[64645,64645],"mapped",[1604,1605]],[[64646,64646],"mapped",[1604,1609]],[[64647,64647],"mapped",[1604,1610]],[[64648,64648],"mapped",[1605,1575]],[[64649,64649],"mapped",[1605,1605]],[[64650,64650],"mapped",[1606,1585]],[[64651,64651],"mapped",[1606,1586]],[[64652,64652],"mapped",[1606,1605]],[[64653,64653],"mapped",[1606,1606]],[[64654,64654],"mapped",[1606,1609]],[[64655,64655],"mapped",[1606,1610]],[[64656,64656],"mapped",[1609,1648]],[[64657,64657],"mapped",[1610,1585]],[[64658,64658],"mapped",[1610,1586]],[[64659,64659],"mapped",[1610,1605]],[[64660,64660],"mapped",[1610,1606]],[[64661,64661],"mapped",[1610,1609]],[[64662,64662],"mapped",[1610,1610]],[[64663,64663],"mapped",[1574,1580]],[[64664,64664],"mapped",[1574,1581]],[[64665,64665],"mapped",[1574,1582]],[[64666,64666],"mapped",[1574,1605]],[[64667,64667],"mapped",[1574,1607]],[[64668,64668],"mapped",[1576,1580]],[[64669,64669],"mapped",[1576,1581]],[[64670,64670],"mapped",[1576,1582]],[[64671,64671],"mapped",[1576,1605]],[[64672,64672],"mapped",[1576,1607]],[[64673,64673],"mapped",[1578,1580]],[[64674,64674],"mapped",[1578,1581]],[[64675,64675],"mapped",[1578,1582]],[[64676,64676],"mapped",[1578,1605]],[[64677,64677],"mapped",[1578,1607]],[[64678,64678],"mapped",[1579,1605]],[[64679,64679],"mapped",[1580,1581]],[[64680,64680],"mapped",[1580,1605]],[[64681,64681],"mapped",[1581,1580]],[[64682,64682],"mapped",[1581,1605]],[[64683,64683],"mapped",[1582,1580]],[[64684,64684],"mapped",[1582,1605]],[[64685,64685],"mapped",[1587,1580]],[[64686,64686],"mapped",[1587,1581]],[[64687,64687],"mapped",[1587,1582]],[[64688,64688],"mapped",[1587,1605]],[[64689,64689],"mapped",[1589,1581]],[[64690,64690],"mapped",[1589,1582]],[[64691,64691],"mapped",[1589,1605]],[[64692,64692],"mapped",[1590,1580]],[[64693,64693],"mapped",[1590,1581]],[[64694,64694],"mapped",[1590,1582]],[[64695,64695],"mapped",[1590,1605]],[[64696,64696],"mapped",[1591,1581]],[[64697,64697],"mapped",[1592,1605]],[[64698,64698],"mapped",[1593,1580]],[[64699,64699],"mapped",[1593,1605]],[[64700,64700],"mapped",[1594,1580]],[[64701,64701],"mapped",[1594,1605]],[[64702,64702],"mapped",[1601,1580]],[[64703,64703],"mapped",[1601,1581]],[[64704,64704],"mapped",[1601,1582]],[[64705,64705],"mapped",[1601,1605]],[[64706,64706],"mapped",[1602,1581]],[[64707,64707],"mapped",[1602,1605]],[[64708,64708],"mapped",[1603,1580]],[[64709,64709],"mapped",[1603,1581]],[[64710,64710],"mapped",[1603,1582]],[[64711,64711],"mapped",[1603,1604]],[[64712,64712],"mapped",[1603,1605]],[[64713,64713],"mapped",[1604,1580]],[[64714,64714],"mapped",[1604,1581]],[[64715,64715],"mapped",[1604,1582]],[[64716,64716],"mapped",[1604,1605]],[[64717,64717],"mapped",[1604,1607]],[[64718,64718],"mapped",[1605,1580]],[[64719,64719],"mapped",[1605,1581]],[[64720,64720],"mapped",[1605,1582]],[[64721,64721],"mapped",[1605,1605]],[[64722,64722],"mapped",[1606,1580]],[[64723,64723],"mapped",[1606,1581]],[[64724,64724],"mapped",[1606,1582]],[[64725,64725],"mapped",[1606,1605]],[[64726,64726],"mapped",[1606,1607]],[[64727,64727],"mapped",[1607,1580]],[[64728,64728],"mapped",[1607,1605]],[[64729,64729],"mapped",[1607,1648]],[[64730,64730],"mapped",[1610,1580]],[[64731,64731],"mapped",[1610,1581]],[[64732,64732],"mapped",[1610,1582]],[[64733,64733],"mapped",[1610,1605]],[[64734,64734],"mapped",[1610,1607]],[[64735,64735],"mapped",[1574,1605]],[[64736,64736],"mapped",[1574,1607]],[[64737,64737],"mapped",[1576,1605]],[[64738,64738],"mapped",[1576,1607]],[[64739,64739],"mapped",[1578,1605]],[[64740,64740],"mapped",[1578,1607]],[[64741,64741],"mapped",[1579,1605]],[[64742,64742],"mapped",[1579,1607]],[[64743,64743],"mapped",[1587,1605]],[[64744,64744],"mapped",[1587,1607]],[[64745,64745],"mapped",[1588,1605]],[[64746,64746],"mapped",[1588,1607]],[[64747,64747],"mapped",[1603,1604]],[[64748,64748],"mapped",[1603,1605]],[[64749,64749],"mapped",[1604,1605]],[[64750,64750],"mapped",[1606,1605]],[[64751,64751],"mapped",[1606,1607]],[[64752,64752],"mapped",[1610,1605]],[[64753,64753],"mapped",[1610,1607]],[[64754,64754],"mapped",[1600,1614,1617]],[[64755,64755],"mapped",[1600,1615,1617]],[[64756,64756],"mapped",[1600,1616,1617]],[[64757,64757],"mapped",[1591,1609]],[[64758,64758],"mapped",[1591,1610]],[[64759,64759],"mapped",[1593,1609]],[[64760,64760],"mapped",[1593,1610]],[[64761,64761],"mapped",[1594,1609]],[[64762,64762],"mapped",[1594,1610]],[[64763,64763],"mapped",[1587,1609]],[[64764,64764],"mapped",[1587,1610]],[[64765,64765],"mapped",[1588,1609]],[[64766,64766],"mapped",[1588,1610]],[[64767,64767],"mapped",[1581,1609]],[[64768,64768],"mapped",[1581,1610]],[[64769,64769],"mapped",[1580,1609]],[[64770,64770],"mapped",[1580,1610]],[[64771,64771],"mapped",[1582,1609]],[[64772,64772],"mapped",[1582,1610]],[[64773,64773],"mapped",[1589,1609]],[[64774,64774],"mapped",[1589,1610]],[[64775,64775],"mapped",[1590,1609]],[[64776,64776],"mapped",[1590,1610]],[[64777,64777],"mapped",[1588,1580]],[[64778,64778],"mapped",[1588,1581]],[[64779,64779],"mapped",[1588,1582]],[[64780,64780],"mapped",[1588,1605]],[[64781,64781],"mapped",[1588,1585]],[[64782,64782],"mapped",[1587,1585]],[[64783,64783],"mapped",[1589,1585]],[[64784,64784],"mapped",[1590,1585]],[[64785,64785],"mapped",[1591,1609]],[[64786,64786],"mapped",[1591,1610]],[[64787,64787],"mapped",[1593,1609]],[[64788,64788],"mapped",[1593,1610]],[[64789,64789],"mapped",[1594,1609]],[[64790,64790],"mapped",[1594,1610]],[[64791,64791],"mapped",[1587,1609]],[[64792,64792],"mapped",[1587,1610]],[[64793,64793],"mapped",[1588,1609]],[[64794,64794],"mapped",[1588,1610]],[[64795,64795],"mapped",[1581,1609]],[[64796,64796],"mapped",[1581,1610]],[[64797,64797],"mapped",[1580,1609]],[[64798,64798],"mapped",[1580,1610]],[[64799,64799],"mapped",[1582,1609]],[[64800,64800],"mapped",[1582,1610]],[[64801,64801],"mapped",[1589,1609]],[[64802,64802],"mapped",[1589,1610]],[[64803,64803],"mapped",[1590,1609]],[[64804,64804],"mapped",[1590,1610]],[[64805,64805],"mapped",[1588,1580]],[[64806,64806],"mapped",[1588,1581]],[[64807,64807],"mapped",[1588,1582]],[[64808,64808],"mapped",[1588,1605]],[[64809,64809],"mapped",[1588,1585]],[[64810,64810],"mapped",[1587,1585]],[[64811,64811],"mapped",[1589,1585]],[[64812,64812],"mapped",[1590,1585]],[[64813,64813],"mapped",[1588,1580]],[[64814,64814],"mapped",[1588,1581]],[[64815,64815],"mapped",[1588,1582]],[[64816,64816],"mapped",[1588,1605]],[[64817,64817],"mapped",[1587,1607]],[[64818,64818],"mapped",[1588,1607]],[[64819,64819],"mapped",[1591,1605]],[[64820,64820],"mapped",[1587,1580]],[[64821,64821],"mapped",[1587,1581]],[[64822,64822],"mapped",[1587,1582]],[[64823,64823],"mapped",[1588,1580]],[[64824,64824],"mapped",[1588,1581]],[[64825,64825],"mapped",[1588,1582]],[[64826,64826],"mapped",[1591,1605]],[[64827,64827],"mapped",[1592,1605]],[[64828,64829],"mapped",[1575,1611]],[[64830,64831],"valid",[],"NV8"],[[64832,64847],"disallowed"],[[64848,64848],"mapped",[1578,1580,1605]],[[64849,64850],"mapped",[1578,1581,1580]],[[64851,64851],"mapped",[1578,1581,1605]],[[64852,64852],"mapped",[1578,1582,1605]],[[64853,64853],"mapped",[1578,1605,1580]],[[64854,64854],"mapped",[1578,1605,1581]],[[64855,64855],"mapped",[1578,1605,1582]],[[64856,64857],"mapped",[1580,1605,1581]],[[64858,64858],"mapped",[1581,1605,1610]],[[64859,64859],"mapped",[1581,1605,1609]],[[64860,64860],"mapped",[1587,1581,1580]],[[64861,64861],"mapped",[1587,1580,1581]],[[64862,64862],"mapped",[1587,1580,1609]],[[64863,64864],"mapped",[1587,1605,1581]],[[64865,64865],"mapped",[1587,1605,1580]],[[64866,64867],"mapped",[1587,1605,1605]],[[64868,64869],"mapped",[1589,1581,1581]],[[64870,64870],"mapped",[1589,1605,1605]],[[64871,64872],"mapped",[1588,1581,1605]],[[64873,64873],"mapped",[1588,1580,1610]],[[64874,64875],"mapped",[1588,1605,1582]],[[64876,64877],"mapped",[1588,1605,1605]],[[64878,64878],"mapped",[1590,1581,1609]],[[64879,64880],"mapped",[1590,1582,1605]],[[64881,64882],"mapped",[1591,1605,1581]],[[64883,64883],"mapped",[1591,1605,1605]],[[64884,64884],"mapped",[1591,1605,1610]],[[64885,64885],"mapped",[1593,1580,1605]],[[64886,64887],"mapped",[1593,1605,1605]],[[64888,64888],"mapped",[1593,1605,1609]],[[64889,64889],"mapped",[1594,1605,1605]],[[64890,64890],"mapped",[1594,1605,1610]],[[64891,64891],"mapped",[1594,1605,1609]],[[64892,64893],"mapped",[1601,1582,1605]],[[64894,64894],"mapped",[1602,1605,1581]],[[64895,64895],"mapped",[1602,1605,1605]],[[64896,64896],"mapped",[1604,1581,1605]],[[64897,64897],"mapped",[1604,1581,1610]],[[64898,64898],"mapped",[1604,1581,1609]],[[64899,64900],"mapped",[1604,1580,1580]],[[64901,64902],"mapped",[1604,1582,1605]],[[64903,64904],"mapped",[1604,1605,1581]],[[64905,64905],"mapped",[1605,1581,1580]],[[64906,64906],"mapped",[1605,1581,1605]],[[64907,64907],"mapped",[1605,1581,1610]],[[64908,64908],"mapped",[1605,1580,1581]],[[64909,64909],"mapped",[1605,1580,1605]],[[64910,64910],"mapped",[1605,1582,1580]],[[64911,64911],"mapped",[1605,1582,1605]],[[64912,64913],"disallowed"],[[64914,64914],"mapped",[1605,1580,1582]],[[64915,64915],"mapped",[1607,1605,1580]],[[64916,64916],"mapped",[1607,1605,1605]],[[64917,64917],"mapped",[1606,1581,1605]],[[64918,64918],"mapped",[1606,1581,1609]],[[64919,64920],"mapped",[1606,1580,1605]],[[64921,64921],"mapped",[1606,1580,1609]],[[64922,64922],"mapped",[1606,1605,1610]],[[64923,64923],"mapped",[1606,1605,1609]],[[64924,64925],"mapped",[1610,1605,1605]],[[64926,64926],"mapped",[1576,1582,1610]],[[64927,64927],"mapped",[1578,1580,1610]],[[64928,64928],"mapped",[1578,1580,1609]],[[64929,64929],"mapped",[1578,1582,1610]],[[64930,64930],"mapped",[1578,1582,1609]],[[64931,64931],"mapped",[1578,1605,1610]],[[64932,64932],"mapped",[1578,1605,1609]],[[64933,64933],"mapped",[1580,1605,1610]],[[64934,64934],"mapped",[1580,1581,1609]],[[64935,64935],"mapped",[1580,1605,1609]],[[64936,64936],"mapped",[1587,1582,1609]],[[64937,64937],"mapped",[1589,1581,1610]],[[64938,64938],"mapped",[1588,1581,1610]],[[64939,64939],"mapped",[1590,1581,1610]],[[64940,64940],"mapped",[1604,1580,1610]],[[64941,64941],"mapped",[1604,1605,1610]],[[64942,64942],"mapped",[1610,1581,1610]],[[64943,64943],"mapped",[1610,1580,1610]],[[64944,64944],"mapped",[1610,1605,1610]],[[64945,64945],"mapped",[1605,1605,1610]],[[64946,64946],"mapped",[1602,1605,1610]],[[64947,64947],"mapped",[1606,1581,1610]],[[64948,64948],"mapped",[1602,1605,1581]],[[64949,64949],"mapped",[1604,1581,1605]],[[64950,64950],"mapped",[1593,1605,1610]],[[64951,64951],"mapped",[1603,1605,1610]],[[64952,64952],"mapped",[1606,1580,1581]],[[64953,64953],"mapped",[1605,1582,1610]],[[64954,64954],"mapped",[1604,1580,1605]],[[64955,64955],"mapped",[1603,1605,1605]],[[64956,64956],"mapped",[1604,1580,1605]],[[64957,64957],"mapped",[1606,1580,1581]],[[64958,64958],"mapped",[1580,1581,1610]],[[64959,64959],"mapped",[1581,1580,1610]],[[64960,64960],"mapped",[1605,1580,1610]],[[64961,64961],"mapped",[1601,1605,1610]],[[64962,64962],"mapped",[1576,1581,1610]],[[64963,64963],"mapped",[1603,1605,1605]],[[64964,64964],"mapped",[1593,1580,1605]],[[64965,64965],"mapped",[1589,1605,1605]],[[64966,64966],"mapped",[1587,1582,1610]],[[64967,64967],"mapped",[1606,1580,1610]],[[64968,64975],"disallowed"],[[64976,65007],"disallowed"],[[65008,65008],"mapped",[1589,1604,1746]],[[65009,65009],"mapped",[1602,1604,1746]],[[65010,65010],"mapped",[1575,1604,1604,1607]],[[65011,65011],"mapped",[1575,1603,1576,1585]],[[65012,65012],"mapped",[1605,1581,1605,1583]],[[65013,65013],"mapped",[1589,1604,1593,1605]],[[65014,65014],"mapped",[1585,1587,1608,1604]],[[65015,65015],"mapped",[1593,1604,1610,1607]],[[65016,65016],"mapped",[1608,1587,1604,1605]],[[65017,65017],"mapped",[1589,1604,1609]],[[65018,65018],"disallowed_STD3_mapped",[1589,1604,1609,32,1575,1604,1604,1607,32,1593,1604,1610,1607,32,1608,1587,1604,1605]],[[65019,65019],"disallowed_STD3_mapped",[1580,1604,32,1580,1604,1575,1604,1607]],[[65020,65020],"mapped",[1585,1740,1575,1604]],[[65021,65021],"valid",[],"NV8"],[[65022,65023],"disallowed"],[[65024,65039],"ignored"],[[65040,65040],"disallowed_STD3_mapped",[44]],[[65041,65041],"mapped",[12289]],[[65042,65042],"disallowed"],[[65043,65043],"disallowed_STD3_mapped",[58]],[[65044,65044],"disallowed_STD3_mapped",[59]],[[65045,65045],"disallowed_STD3_mapped",[33]],[[65046,65046],"disallowed_STD3_mapped",[63]],[[65047,65047],"mapped",[12310]],[[65048,65048],"mapped",[12311]],[[65049,65049],"disallowed"],[[65050,65055],"disallowed"],[[65056,65059],"valid"],[[65060,65062],"valid"],[[65063,65069],"valid"],[[65070,65071],"valid"],[[65072,65072],"disallowed"],[[65073,65073],"mapped",[8212]],[[65074,65074],"mapped",[8211]],[[65075,65076],"disallowed_STD3_mapped",[95]],[[65077,65077],"disallowed_STD3_mapped",[40]],[[65078,65078],"disallowed_STD3_mapped",[41]],[[65079,65079],"disallowed_STD3_mapped",[123]],[[65080,65080],"disallowed_STD3_mapped",[125]],[[65081,65081],"mapped",[12308]],[[65082,65082],"mapped",[12309]],[[65083,65083],"mapped",[12304]],[[65084,65084],"mapped",[12305]],[[65085,65085],"mapped",[12298]],[[65086,65086],"mapped",[12299]],[[65087,65087],"mapped",[12296]],[[65088,65088],"mapped",[12297]],[[65089,65089],"mapped",[12300]],[[65090,65090],"mapped",[12301]],[[65091,65091],"mapped",[12302]],[[65092,65092],"mapped",[12303]],[[65093,65094],"valid",[],"NV8"],[[65095,65095],"disallowed_STD3_mapped",[91]],[[65096,65096],"disallowed_STD3_mapped",[93]],[[65097,65100],"disallowed_STD3_mapped",[32,773]],[[65101,65103],"disallowed_STD3_mapped",[95]],[[65104,65104],"disallowed_STD3_mapped",[44]],[[65105,65105],"mapped",[12289]],[[65106,65106],"disallowed"],[[65107,65107],"disallowed"],[[65108,65108],"disallowed_STD3_mapped",[59]],[[65109,65109],"disallowed_STD3_mapped",[58]],[[65110,65110],"disallowed_STD3_mapped",[63]],[[65111,65111],"disallowed_STD3_mapped",[33]],[[65112,65112],"mapped",[8212]],[[65113,65113],"disallowed_STD3_mapped",[40]],[[65114,65114],"disallowed_STD3_mapped",[41]],[[65115,65115],"disallowed_STD3_mapped",[123]],[[65116,65116],"disallowed_STD3_mapped",[125]],[[65117,65117],"mapped",[12308]],[[65118,65118],"mapped",[12309]],[[65119,65119],"disallowed_STD3_mapped",[35]],[[65120,65120],"disallowed_STD3_mapped",[38]],[[65121,65121],"disallowed_STD3_mapped",[42]],[[65122,65122],"disallowed_STD3_mapped",[43]],[[65123,65123],"mapped",[45]],[[65124,65124],"disallowed_STD3_mapped",[60]],[[65125,65125],"disallowed_STD3_mapped",[62]],[[65126,65126],"disallowed_STD3_mapped",[61]],[[65127,65127],"disallowed"],[[65128,65128],"disallowed_STD3_mapped",[92]],[[65129,65129],"disallowed_STD3_mapped",[36]],[[65130,65130],"disallowed_STD3_mapped",[37]],[[65131,65131],"disallowed_STD3_mapped",[64]],[[65132,65135],"disallowed"],[[65136,65136],"disallowed_STD3_mapped",[32,1611]],[[65137,65137],"mapped",[1600,1611]],[[65138,65138],"disallowed_STD3_mapped",[32,1612]],[[65139,65139],"valid"],[[65140,65140],"disallowed_STD3_mapped",[32,1613]],[[65141,65141],"disallowed"],[[65142,65142],"disallowed_STD3_mapped",[32,1614]],[[65143,65143],"mapped",[1600,1614]],[[65144,65144],"disallowed_STD3_mapped",[32,1615]],[[65145,65145],"mapped",[1600,1615]],[[65146,65146],"disallowed_STD3_mapped",[32,1616]],[[65147,65147],"mapped",[1600,1616]],[[65148,65148],"disallowed_STD3_mapped",[32,1617]],[[65149,65149],"mapped",[1600,1617]],[[65150,65150],"disallowed_STD3_mapped",[32,1618]],[[65151,65151],"mapped",[1600,1618]],[[65152,65152],"mapped",[1569]],[[65153,65154],"mapped",[1570]],[[65155,65156],"mapped",[1571]],[[65157,65158],"mapped",[1572]],[[65159,65160],"mapped",[1573]],[[65161,65164],"mapped",[1574]],[[65165,65166],"mapped",[1575]],[[65167,65170],"mapped",[1576]],[[65171,65172],"mapped",[1577]],[[65173,65176],"mapped",[1578]],[[65177,65180],"mapped",[1579]],[[65181,65184],"mapped",[1580]],[[65185,65188],"mapped",[1581]],[[65189,65192],"mapped",[1582]],[[65193,65194],"mapped",[1583]],[[65195,65196],"mapped",[1584]],[[65197,65198],"mapped",[1585]],[[65199,65200],"mapped",[1586]],[[65201,65204],"mapped",[1587]],[[65205,65208],"mapped",[1588]],[[65209,65212],"mapped",[1589]],[[65213,65216],"mapped",[1590]],[[65217,65220],"mapped",[1591]],[[65221,65224],"mapped",[1592]],[[65225,65228],"mapped",[1593]],[[65229,65232],"mapped",[1594]],[[65233,65236],"mapped",[1601]],[[65237,65240],"mapped",[1602]],[[65241,65244],"mapped",[1603]],[[65245,65248],"mapped",[1604]],[[65249,65252],"mapped",[1605]],[[65253,65256],"mapped",[1606]],[[65257,65260],"mapped",[1607]],[[65261,65262],"mapped",[1608]],[[65263,65264],"mapped",[1609]],[[65265,65268],"mapped",[1610]],[[65269,65270],"mapped",[1604,1570]],[[65271,65272],"mapped",[1604,1571]],[[65273,65274],"mapped",[1604,1573]],[[65275,65276],"mapped",[1604,1575]],[[65277,65278],"disallowed"],[[65279,65279],"ignored"],[[65280,65280],"disallowed"],[[65281,65281],"disallowed_STD3_mapped",[33]],[[65282,65282],"disallowed_STD3_mapped",[34]],[[65283,65283],"disallowed_STD3_mapped",[35]],[[65284,65284],"disallowed_STD3_mapped",[36]],[[65285,65285],"disallowed_STD3_mapped",[37]],[[65286,65286],"disallowed_STD3_mapped",[38]],[[65287,65287],"disallowed_STD3_mapped",[39]],[[65288,65288],"disallowed_STD3_mapped",[40]],[[65289,65289],"disallowed_STD3_mapped",[41]],[[65290,65290],"disallowed_STD3_mapped",[42]],[[65291,65291],"disallowed_STD3_mapped",[43]],[[65292,65292],"disallowed_STD3_mapped",[44]],[[65293,65293],"mapped",[45]],[[65294,65294],"mapped",[46]],[[65295,65295],"disallowed_STD3_mapped",[47]],[[65296,65296],"mapped",[48]],[[65297,65297],"mapped",[49]],[[65298,65298],"mapped",[50]],[[65299,65299],"mapped",[51]],[[65300,65300],"mapped",[52]],[[65301,65301],"mapped",[53]],[[65302,65302],"mapped",[54]],[[65303,65303],"mapped",[55]],[[65304,65304],"mapped",[56]],[[65305,65305],"mapped",[57]],[[65306,65306],"disallowed_STD3_mapped",[58]],[[65307,65307],"disallowed_STD3_mapped",[59]],[[65308,65308],"disallowed_STD3_mapped",[60]],[[65309,65309],"disallowed_STD3_mapped",[61]],[[65310,65310],"disallowed_STD3_mapped",[62]],[[65311,65311],"disallowed_STD3_mapped",[63]],[[65312,65312],"disallowed_STD3_mapped",[64]],[[65313,65313],"mapped",[97]],[[65314,65314],"mapped",[98]],[[65315,65315],"mapped",[99]],[[65316,65316],"mapped",[100]],[[65317,65317],"mapped",[101]],[[65318,65318],"mapped",[102]],[[65319,65319],"mapped",[103]],[[65320,65320],"mapped",[104]],[[65321,65321],"mapped",[105]],[[65322,65322],"mapped",[106]],[[65323,65323],"mapped",[107]],[[65324,65324],"mapped",[108]],[[65325,65325],"mapped",[109]],[[65326,65326],"mapped",[110]],[[65327,65327],"mapped",[111]],[[65328,65328],"mapped",[112]],[[65329,65329],"mapped",[113]],[[65330,65330],"mapped",[114]],[[65331,65331],"mapped",[115]],[[65332,65332],"mapped",[116]],[[65333,65333],"mapped",[117]],[[65334,65334],"mapped",[118]],[[65335,65335],"mapped",[119]],[[65336,65336],"mapped",[120]],[[65337,65337],"mapped",[121]],[[65338,65338],"mapped",[122]],[[65339,65339],"disallowed_STD3_mapped",[91]],[[65340,65340],"disallowed_STD3_mapped",[92]],[[65341,65341],"disallowed_STD3_mapped",[93]],[[65342,65342],"disallowed_STD3_mapped",[94]],[[65343,65343],"disallowed_STD3_mapped",[95]],[[65344,65344],"disallowed_STD3_mapped",[96]],[[65345,65345],"mapped",[97]],[[65346,65346],"mapped",[98]],[[65347,65347],"mapped",[99]],[[65348,65348],"mapped",[100]],[[65349,65349],"mapped",[101]],[[65350,65350],"mapped",[102]],[[65351,65351],"mapped",[103]],[[65352,65352],"mapped",[104]],[[65353,65353],"mapped",[105]],[[65354,65354],"mapped",[106]],[[65355,65355],"mapped",[107]],[[65356,65356],"mapped",[108]],[[65357,65357],"mapped",[109]],[[65358,65358],"mapped",[110]],[[65359,65359],"mapped",[111]],[[65360,65360],"mapped",[112]],[[65361,65361],"mapped",[113]],[[65362,65362],"mapped",[114]],[[65363,65363],"mapped",[115]],[[65364,65364],"mapped",[116]],[[65365,65365],"mapped",[117]],[[65366,65366],"mapped",[118]],[[65367,65367],"mapped",[119]],[[65368,65368],"mapped",[120]],[[65369,65369],"mapped",[121]],[[65370,65370],"mapped",[122]],[[65371,65371],"disallowed_STD3_mapped",[123]],[[65372,65372],"disallowed_STD3_mapped",[124]],[[65373,65373],"disallowed_STD3_mapped",[125]],[[65374,65374],"disallowed_STD3_mapped",[126]],[[65375,65375],"mapped",[10629]],[[65376,65376],"mapped",[10630]],[[65377,65377],"mapped",[46]],[[65378,65378],"mapped",[12300]],[[65379,65379],"mapped",[12301]],[[65380,65380],"mapped",[12289]],[[65381,65381],"mapped",[12539]],[[65382,65382],"mapped",[12530]],[[65383,65383],"mapped",[12449]],[[65384,65384],"mapped",[12451]],[[65385,65385],"mapped",[12453]],[[65386,65386],"mapped",[12455]],[[65387,65387],"mapped",[12457]],[[65388,65388],"mapped",[12515]],[[65389,65389],"mapped",[12517]],[[65390,65390],"mapped",[12519]],[[65391,65391],"mapped",[12483]],[[65392,65392],"mapped",[12540]],[[65393,65393],"mapped",[12450]],[[65394,65394],"mapped",[12452]],[[65395,65395],"mapped",[12454]],[[65396,65396],"mapped",[12456]],[[65397,65397],"mapped",[12458]],[[65398,65398],"mapped",[12459]],[[65399,65399],"mapped",[12461]],[[65400,65400],"mapped",[12463]],[[65401,65401],"mapped",[12465]],[[65402,65402],"mapped",[12467]],[[65403,65403],"mapped",[12469]],[[65404,65404],"mapped",[12471]],[[65405,65405],"mapped",[12473]],[[65406,65406],"mapped",[12475]],[[65407,65407],"mapped",[12477]],[[65408,65408],"mapped",[12479]],[[65409,65409],"mapped",[12481]],[[65410,65410],"mapped",[12484]],[[65411,65411],"mapped",[12486]],[[65412,65412],"mapped",[12488]],[[65413,65413],"mapped",[12490]],[[65414,65414],"mapped",[12491]],[[65415,65415],"mapped",[12492]],[[65416,65416],"mapped",[12493]],[[65417,65417],"mapped",[12494]],[[65418,65418],"mapped",[12495]],[[65419,65419],"mapped",[12498]],[[65420,65420],"mapped",[12501]],[[65421,65421],"mapped",[12504]],[[65422,65422],"mapped",[12507]],[[65423,65423],"mapped",[12510]],[[65424,65424],"mapped",[12511]],[[65425,65425],"mapped",[12512]],[[65426,65426],"mapped",[12513]],[[65427,65427],"mapped",[12514]],[[65428,65428],"mapped",[12516]],[[65429,65429],"mapped",[12518]],[[65430,65430],"mapped",[12520]],[[65431,65431],"mapped",[12521]],[[65432,65432],"mapped",[12522]],[[65433,65433],"mapped",[12523]],[[65434,65434],"mapped",[12524]],[[65435,65435],"mapped",[12525]],[[65436,65436],"mapped",[12527]],[[65437,65437],"mapped",[12531]],[[65438,65438],"mapped",[12441]],[[65439,65439],"mapped",[12442]],[[65440,65440],"disallowed"],[[65441,65441],"mapped",[4352]],[[65442,65442],"mapped",[4353]],[[65443,65443],"mapped",[4522]],[[65444,65444],"mapped",[4354]],[[65445,65445],"mapped",[4524]],[[65446,65446],"mapped",[4525]],[[65447,65447],"mapped",[4355]],[[65448,65448],"mapped",[4356]],[[65449,65449],"mapped",[4357]],[[65450,65450],"mapped",[4528]],[[65451,65451],"mapped",[4529]],[[65452,65452],"mapped",[4530]],[[65453,65453],"mapped",[4531]],[[65454,65454],"mapped",[4532]],[[65455,65455],"mapped",[4533]],[[65456,65456],"mapped",[4378]],[[65457,65457],"mapped",[4358]],[[65458,65458],"mapped",[4359]],[[65459,65459],"mapped",[4360]],[[65460,65460],"mapped",[4385]],[[65461,65461],"mapped",[4361]],[[65462,65462],"mapped",[4362]],[[65463,65463],"mapped",[4363]],[[65464,65464],"mapped",[4364]],[[65465,65465],"mapped",[4365]],[[65466,65466],"mapped",[4366]],[[65467,65467],"mapped",[4367]],[[65468,65468],"mapped",[4368]],[[65469,65469],"mapped",[4369]],[[65470,65470],"mapped",[4370]],[[65471,65473],"disallowed"],[[65474,65474],"mapped",[4449]],[[65475,65475],"mapped",[4450]],[[65476,65476],"mapped",[4451]],[[65477,65477],"mapped",[4452]],[[65478,65478],"mapped",[4453]],[[65479,65479],"mapped",[4454]],[[65480,65481],"disallowed"],[[65482,65482],"mapped",[4455]],[[65483,65483],"mapped",[4456]],[[65484,65484],"mapped",[4457]],[[65485,65485],"mapped",[4458]],[[65486,65486],"mapped",[4459]],[[65487,65487],"mapped",[4460]],[[65488,65489],"disallowed"],[[65490,65490],"mapped",[4461]],[[65491,65491],"mapped",[4462]],[[65492,65492],"mapped",[4463]],[[65493,65493],"mapped",[4464]],[[65494,65494],"mapped",[4465]],[[65495,65495],"mapped",[4466]],[[65496,65497],"disallowed"],[[65498,65498],"mapped",[4467]],[[65499,65499],"mapped",[4468]],[[65500,65500],"mapped",[4469]],[[65501,65503],"disallowed"],[[65504,65504],"mapped",[162]],[[65505,65505],"mapped",[163]],[[65506,65506],"mapped",[172]],[[65507,65507],"disallowed_STD3_mapped",[32,772]],[[65508,65508],"mapped",[166]],[[65509,65509],"mapped",[165]],[[65510,65510],"mapped",[8361]],[[65511,65511],"disallowed"],[[65512,65512],"mapped",[9474]],[[65513,65513],"mapped",[8592]],[[65514,65514],"mapped",[8593]],[[65515,65515],"mapped",[8594]],[[65516,65516],"mapped",[8595]],[[65517,65517],"mapped",[9632]],[[65518,65518],"mapped",[9675]],[[65519,65528],"disallowed"],[[65529,65531],"disallowed"],[[65532,65532],"disallowed"],[[65533,65533],"disallowed"],[[65534,65535],"disallowed"],[[65536,65547],"valid"],[[65548,65548],"disallowed"],[[65549,65574],"valid"],[[65575,65575],"disallowed"],[[65576,65594],"valid"],[[65595,65595],"disallowed"],[[65596,65597],"valid"],[[65598,65598],"disallowed"],[[65599,65613],"valid"],[[65614,65615],"disallowed"],[[65616,65629],"valid"],[[65630,65663],"disallowed"],[[65664,65786],"valid"],[[65787,65791],"disallowed"],[[65792,65794],"valid",[],"NV8"],[[65795,65798],"disallowed"],[[65799,65843],"valid",[],"NV8"],[[65844,65846],"disallowed"],[[65847,65855],"valid",[],"NV8"],[[65856,65930],"valid",[],"NV8"],[[65931,65932],"valid",[],"NV8"],[[65933,65935],"disallowed"],[[65936,65947],"valid",[],"NV8"],[[65948,65951],"disallowed"],[[65952,65952],"valid",[],"NV8"],[[65953,65999],"disallowed"],[[66000,66044],"valid",[],"NV8"],[[66045,66045],"valid"],[[66046,66175],"disallowed"],[[66176,66204],"valid"],[[66205,66207],"disallowed"],[[66208,66256],"valid"],[[66257,66271],"disallowed"],[[66272,66272],"valid"],[[66273,66299],"valid",[],"NV8"],[[66300,66303],"disallowed"],[[66304,66334],"valid"],[[66335,66335],"valid"],[[66336,66339],"valid",[],"NV8"],[[66340,66351],"disallowed"],[[66352,66368],"valid"],[[66369,66369],"valid",[],"NV8"],[[66370,66377],"valid"],[[66378,66378],"valid",[],"NV8"],[[66379,66383],"disallowed"],[[66384,66426],"valid"],[[66427,66431],"disallowed"],[[66432,66461],"valid"],[[66462,66462],"disallowed"],[[66463,66463],"valid",[],"NV8"],[[66464,66499],"valid"],[[66500,66503],"disallowed"],[[66504,66511],"valid"],[[66512,66517],"valid",[],"NV8"],[[66518,66559],"disallowed"],[[66560,66560],"mapped",[66600]],[[66561,66561],"mapped",[66601]],[[66562,66562],"mapped",[66602]],[[66563,66563],"mapped",[66603]],[[66564,66564],"mapped",[66604]],[[66565,66565],"mapped",[66605]],[[66566,66566],"mapped",[66606]],[[66567,66567],"mapped",[66607]],[[66568,66568],"mapped",[66608]],[[66569,66569],"mapped",[66609]],[[66570,66570],"mapped",[66610]],[[66571,66571],"mapped",[66611]],[[66572,66572],"mapped",[66612]],[[66573,66573],"mapped",[66613]],[[66574,66574],"mapped",[66614]],[[66575,66575],"mapped",[66615]],[[66576,66576],"mapped",[66616]],[[66577,66577],"mapped",[66617]],[[66578,66578],"mapped",[66618]],[[66579,66579],"mapped",[66619]],[[66580,66580],"mapped",[66620]],[[66581,66581],"mapped",[66621]],[[66582,66582],"mapped",[66622]],[[66583,66583],"mapped",[66623]],[[66584,66584],"mapped",[66624]],[[66585,66585],"mapped",[66625]],[[66586,66586],"mapped",[66626]],[[66587,66587],"mapped",[66627]],[[66588,66588],"mapped",[66628]],[[66589,66589],"mapped",[66629]],[[66590,66590],"mapped",[66630]],[[66591,66591],"mapped",[66631]],[[66592,66592],"mapped",[66632]],[[66593,66593],"mapped",[66633]],[[66594,66594],"mapped",[66634]],[[66595,66595],"mapped",[66635]],[[66596,66596],"mapped",[66636]],[[66597,66597],"mapped",[66637]],[[66598,66598],"mapped",[66638]],[[66599,66599],"mapped",[66639]],[[66600,66637],"valid"],[[66638,66717],"valid"],[[66718,66719],"disallowed"],[[66720,66729],"valid"],[[66730,66815],"disallowed"],[[66816,66855],"valid"],[[66856,66863],"disallowed"],[[66864,66915],"valid"],[[66916,66926],"disallowed"],[[66927,66927],"valid",[],"NV8"],[[66928,67071],"disallowed"],[[67072,67382],"valid"],[[67383,67391],"disallowed"],[[67392,67413],"valid"],[[67414,67423],"disallowed"],[[67424,67431],"valid"],[[67432,67583],"disallowed"],[[67584,67589],"valid"],[[67590,67591],"disallowed"],[[67592,67592],"valid"],[[67593,67593],"disallowed"],[[67594,67637],"valid"],[[67638,67638],"disallowed"],[[67639,67640],"valid"],[[67641,67643],"disallowed"],[[67644,67644],"valid"],[[67645,67646],"disallowed"],[[67647,67647],"valid"],[[67648,67669],"valid"],[[67670,67670],"disallowed"],[[67671,67679],"valid",[],"NV8"],[[67680,67702],"valid"],[[67703,67711],"valid",[],"NV8"],[[67712,67742],"valid"],[[67743,67750],"disallowed"],[[67751,67759],"valid",[],"NV8"],[[67760,67807],"disallowed"],[[67808,67826],"valid"],[[67827,67827],"disallowed"],[[67828,67829],"valid"],[[67830,67834],"disallowed"],[[67835,67839],"valid",[],"NV8"],[[67840,67861],"valid"],[[67862,67865],"valid",[],"NV8"],[[67866,67867],"valid",[],"NV8"],[[67868,67870],"disallowed"],[[67871,67871],"valid",[],"NV8"],[[67872,67897],"valid"],[[67898,67902],"disallowed"],[[67903,67903],"valid",[],"NV8"],[[67904,67967],"disallowed"],[[67968,68023],"valid"],[[68024,68027],"disallowed"],[[68028,68029],"valid",[],"NV8"],[[68030,68031],"valid"],[[68032,68047],"valid",[],"NV8"],[[68048,68049],"disallowed"],[[68050,68095],"valid",[],"NV8"],[[68096,68099],"valid"],[[68100,68100],"disallowed"],[[68101,68102],"valid"],[[68103,68107],"disallowed"],[[68108,68115],"valid"],[[68116,68116],"disallowed"],[[68117,68119],"valid"],[[68120,68120],"disallowed"],[[68121,68147],"valid"],[[68148,68151],"disallowed"],[[68152,68154],"valid"],[[68155,68158],"disallowed"],[[68159,68159],"valid"],[[68160,68167],"valid",[],"NV8"],[[68168,68175],"disallowed"],[[68176,68184],"valid",[],"NV8"],[[68185,68191],"disallowed"],[[68192,68220],"valid"],[[68221,68223],"valid",[],"NV8"],[[68224,68252],"valid"],[[68253,68255],"valid",[],"NV8"],[[68256,68287],"disallowed"],[[68288,68295],"valid"],[[68296,68296],"valid",[],"NV8"],[[68297,68326],"valid"],[[68327,68330],"disallowed"],[[68331,68342],"valid",[],"NV8"],[[68343,68351],"disallowed"],[[68352,68405],"valid"],[[68406,68408],"disallowed"],[[68409,68415],"valid",[],"NV8"],[[68416,68437],"valid"],[[68438,68439],"disallowed"],[[68440,68447],"valid",[],"NV8"],[[68448,68466],"valid"],[[68467,68471],"disallowed"],[[68472,68479],"valid",[],"NV8"],[[68480,68497],"valid"],[[68498,68504],"disallowed"],[[68505,68508],"valid",[],"NV8"],[[68509,68520],"disallowed"],[[68521,68527],"valid",[],"NV8"],[[68528,68607],"disallowed"],[[68608,68680],"valid"],[[68681,68735],"disallowed"],[[68736,68736],"mapped",[68800]],[[68737,68737],"mapped",[68801]],[[68738,68738],"mapped",[68802]],[[68739,68739],"mapped",[68803]],[[68740,68740],"mapped",[68804]],[[68741,68741],"mapped",[68805]],[[68742,68742],"mapped",[68806]],[[68743,68743],"mapped",[68807]],[[68744,68744],"mapped",[68808]],[[68745,68745],"mapped",[68809]],[[68746,68746],"mapped",[68810]],[[68747,68747],"mapped",[68811]],[[68748,68748],"mapped",[68812]],[[68749,68749],"mapped",[68813]],[[68750,68750],"mapped",[68814]],[[68751,68751],"mapped",[68815]],[[68752,68752],"mapped",[68816]],[[68753,68753],"mapped",[68817]],[[68754,68754],"mapped",[68818]],[[68755,68755],"mapped",[68819]],[[68756,68756],"mapped",[68820]],[[68757,68757],"mapped",[68821]],[[68758,68758],"mapped",[68822]],[[68759,68759],"mapped",[68823]],[[68760,68760],"mapped",[68824]],[[68761,68761],"mapped",[68825]],[[68762,68762],"mapped",[68826]],[[68763,68763],"mapped",[68827]],[[68764,68764],"mapped",[68828]],[[68765,68765],"mapped",[68829]],[[68766,68766],"mapped",[68830]],[[68767,68767],"mapped",[68831]],[[68768,68768],"mapped",[68832]],[[68769,68769],"mapped",[68833]],[[68770,68770],"mapped",[68834]],[[68771,68771],"mapped",[68835]],[[68772,68772],"mapped",[68836]],[[68773,68773],"mapped",[68837]],[[68774,68774],"mapped",[68838]],[[68775,68775],"mapped",[68839]],[[68776,68776],"mapped",[68840]],[[68777,68777],"mapped",[68841]],[[68778,68778],"mapped",[68842]],[[68779,68779],"mapped",[68843]],[[68780,68780],"mapped",[68844]],[[68781,68781],"mapped",[68845]],[[68782,68782],"mapped",[68846]],[[68783,68783],"mapped",[68847]],[[68784,68784],"mapped",[68848]],[[68785,68785],"mapped",[68849]],[[68786,68786],"mapped",[68850]],[[68787,68799],"disallowed"],[[68800,68850],"valid"],[[68851,68857],"disallowed"],[[68858,68863],"valid",[],"NV8"],[[68864,69215],"disallowed"],[[69216,69246],"valid",[],"NV8"],[[69247,69631],"disallowed"],[[69632,69702],"valid"],[[69703,69709],"valid",[],"NV8"],[[69710,69713],"disallowed"],[[69714,69733],"valid",[],"NV8"],[[69734,69743],"valid"],[[69744,69758],"disallowed"],[[69759,69759],"valid"],[[69760,69818],"valid"],[[69819,69820],"valid",[],"NV8"],[[69821,69821],"disallowed"],[[69822,69825],"valid",[],"NV8"],[[69826,69839],"disallowed"],[[69840,69864],"valid"],[[69865,69871],"disallowed"],[[69872,69881],"valid"],[[69882,69887],"disallowed"],[[69888,69940],"valid"],[[69941,69941],"disallowed"],[[69942,69951],"valid"],[[69952,69955],"valid",[],"NV8"],[[69956,69967],"disallowed"],[[69968,70003],"valid"],[[70004,70005],"valid",[],"NV8"],[[70006,70006],"valid"],[[70007,70015],"disallowed"],[[70016,70084],"valid"],[[70085,70088],"valid",[],"NV8"],[[70089,70089],"valid",[],"NV8"],[[70090,70092],"valid"],[[70093,70093],"valid",[],"NV8"],[[70094,70095],"disallowed"],[[70096,70105],"valid"],[[70106,70106],"valid"],[[70107,70107],"valid",[],"NV8"],[[70108,70108],"valid"],[[70109,70111],"valid",[],"NV8"],[[70112,70112],"disallowed"],[[70113,70132],"valid",[],"NV8"],[[70133,70143],"disallowed"],[[70144,70161],"valid"],[[70162,70162],"disallowed"],[[70163,70199],"valid"],[[70200,70205],"valid",[],"NV8"],[[70206,70271],"disallowed"],[[70272,70278],"valid"],[[70279,70279],"disallowed"],[[70280,70280],"valid"],[[70281,70281],"disallowed"],[[70282,70285],"valid"],[[70286,70286],"disallowed"],[[70287,70301],"valid"],[[70302,70302],"disallowed"],[[70303,70312],"valid"],[[70313,70313],"valid",[],"NV8"],[[70314,70319],"disallowed"],[[70320,70378],"valid"],[[70379,70383],"disallowed"],[[70384,70393],"valid"],[[70394,70399],"disallowed"],[[70400,70400],"valid"],[[70401,70403],"valid"],[[70404,70404],"disallowed"],[[70405,70412],"valid"],[[70413,70414],"disallowed"],[[70415,70416],"valid"],[[70417,70418],"disallowed"],[[70419,70440],"valid"],[[70441,70441],"disallowed"],[[70442,70448],"valid"],[[70449,70449],"disallowed"],[[70450,70451],"valid"],[[70452,70452],"disallowed"],[[70453,70457],"valid"],[[70458,70459],"disallowed"],[[70460,70468],"valid"],[[70469,70470],"disallowed"],[[70471,70472],"valid"],[[70473,70474],"disallowed"],[[70475,70477],"valid"],[[70478,70479],"disallowed"],[[70480,70480],"valid"],[[70481,70486],"disallowed"],[[70487,70487],"valid"],[[70488,70492],"disallowed"],[[70493,70499],"valid"],[[70500,70501],"disallowed"],[[70502,70508],"valid"],[[70509,70511],"disallowed"],[[70512,70516],"valid"],[[70517,70783],"disallowed"],[[70784,70853],"valid"],[[70854,70854],"valid",[],"NV8"],[[70855,70855],"valid"],[[70856,70863],"disallowed"],[[70864,70873],"valid"],[[70874,71039],"disallowed"],[[71040,71093],"valid"],[[71094,71095],"disallowed"],[[71096,71104],"valid"],[[71105,71113],"valid",[],"NV8"],[[71114,71127],"valid",[],"NV8"],[[71128,71133],"valid"],[[71134,71167],"disallowed"],[[71168,71232],"valid"],[[71233,71235],"valid",[],"NV8"],[[71236,71236],"valid"],[[71237,71247],"disallowed"],[[71248,71257],"valid"],[[71258,71295],"disallowed"],[[71296,71351],"valid"],[[71352,71359],"disallowed"],[[71360,71369],"valid"],[[71370,71423],"disallowed"],[[71424,71449],"valid"],[[71450,71452],"disallowed"],[[71453,71467],"valid"],[[71468,71471],"disallowed"],[[71472,71481],"valid"],[[71482,71487],"valid",[],"NV8"],[[71488,71839],"disallowed"],[[71840,71840],"mapped",[71872]],[[71841,71841],"mapped",[71873]],[[71842,71842],"mapped",[71874]],[[71843,71843],"mapped",[71875]],[[71844,71844],"mapped",[71876]],[[71845,71845],"mapped",[71877]],[[71846,71846],"mapped",[71878]],[[71847,71847],"mapped",[71879]],[[71848,71848],"mapped",[71880]],[[71849,71849],"mapped",[71881]],[[71850,71850],"mapped",[71882]],[[71851,71851],"mapped",[71883]],[[71852,71852],"mapped",[71884]],[[71853,71853],"mapped",[71885]],[[71854,71854],"mapped",[71886]],[[71855,71855],"mapped",[71887]],[[71856,71856],"mapped",[71888]],[[71857,71857],"mapped",[71889]],[[71858,71858],"mapped",[71890]],[[71859,71859],"mapped",[71891]],[[71860,71860],"mapped",[71892]],[[71861,71861],"mapped",[71893]],[[71862,71862],"mapped",[71894]],[[71863,71863],"mapped",[71895]],[[71864,71864],"mapped",[71896]],[[71865,71865],"mapped",[71897]],[[71866,71866],"mapped",[71898]],[[71867,71867],"mapped",[71899]],[[71868,71868],"mapped",[71900]],[[71869,71869],"mapped",[71901]],[[71870,71870],"mapped",[71902]],[[71871,71871],"mapped",[71903]],[[71872,71913],"valid"],[[71914,71922],"valid",[],"NV8"],[[71923,71934],"disallowed"],[[71935,71935],"valid"],[[71936,72383],"disallowed"],[[72384,72440],"valid"],[[72441,73727],"disallowed"],[[73728,74606],"valid"],[[74607,74648],"valid"],[[74649,74649],"valid"],[[74650,74751],"disallowed"],[[74752,74850],"valid",[],"NV8"],[[74851,74862],"valid",[],"NV8"],[[74863,74863],"disallowed"],[[74864,74867],"valid",[],"NV8"],[[74868,74868],"valid",[],"NV8"],[[74869,74879],"disallowed"],[[74880,75075],"valid"],[[75076,77823],"disallowed"],[[77824,78894],"valid"],[[78895,82943],"disallowed"],[[82944,83526],"valid"],[[83527,92159],"disallowed"],[[92160,92728],"valid"],[[92729,92735],"disallowed"],[[92736,92766],"valid"],[[92767,92767],"disallowed"],[[92768,92777],"valid"],[[92778,92781],"disallowed"],[[92782,92783],"valid",[],"NV8"],[[92784,92879],"disallowed"],[[92880,92909],"valid"],[[92910,92911],"disallowed"],[[92912,92916],"valid"],[[92917,92917],"valid",[],"NV8"],[[92918,92927],"disallowed"],[[92928,92982],"valid"],[[92983,92991],"valid",[],"NV8"],[[92992,92995],"valid"],[[92996,92997],"valid",[],"NV8"],[[92998,93007],"disallowed"],[[93008,93017],"valid"],[[93018,93018],"disallowed"],[[93019,93025],"valid",[],"NV8"],[[93026,93026],"disallowed"],[[93027,93047],"valid"],[[93048,93052],"disallowed"],[[93053,93071],"valid"],[[93072,93951],"disallowed"],[[93952,94020],"valid"],[[94021,94031],"disallowed"],[[94032,94078],"valid"],[[94079,94094],"disallowed"],[[94095,94111],"valid"],[[94112,110591],"disallowed"],[[110592,110593],"valid"],[[110594,113663],"disallowed"],[[113664,113770],"valid"],[[113771,113775],"disallowed"],[[113776,113788],"valid"],[[113789,113791],"disallowed"],[[113792,113800],"valid"],[[113801,113807],"disallowed"],[[113808,113817],"valid"],[[113818,113819],"disallowed"],[[113820,113820],"valid",[],"NV8"],[[113821,113822],"valid"],[[113823,113823],"valid",[],"NV8"],[[113824,113827],"ignored"],[[113828,118783],"disallowed"],[[118784,119029],"valid",[],"NV8"],[[119030,119039],"disallowed"],[[119040,119078],"valid",[],"NV8"],[[119079,119080],"disallowed"],[[119081,119081],"valid",[],"NV8"],[[119082,119133],"valid",[],"NV8"],[[119134,119134],"mapped",[119127,119141]],[[119135,119135],"mapped",[119128,119141]],[[119136,119136],"mapped",[119128,119141,119150]],[[119137,119137],"mapped",[119128,119141,119151]],[[119138,119138],"mapped",[119128,119141,119152]],[[119139,119139],"mapped",[119128,119141,119153]],[[119140,119140],"mapped",[119128,119141,119154]],[[119141,119154],"valid",[],"NV8"],[[119155,119162],"disallowed"],[[119163,119226],"valid",[],"NV8"],[[119227,119227],"mapped",[119225,119141]],[[119228,119228],"mapped",[119226,119141]],[[119229,119229],"mapped",[119225,119141,119150]],[[119230,119230],"mapped",[119226,119141,119150]],[[119231,119231],"mapped",[119225,119141,119151]],[[119232,119232],"mapped",[119226,119141,119151]],[[119233,119261],"valid",[],"NV8"],[[119262,119272],"valid",[],"NV8"],[[119273,119295],"disallowed"],[[119296,119365],"valid",[],"NV8"],[[119366,119551],"disallowed"],[[119552,119638],"valid",[],"NV8"],[[119639,119647],"disallowed"],[[119648,119665],"valid",[],"NV8"],[[119666,119807],"disallowed"],[[119808,119808],"mapped",[97]],[[119809,119809],"mapped",[98]],[[119810,119810],"mapped",[99]],[[119811,119811],"mapped",[100]],[[119812,119812],"mapped",[101]],[[119813,119813],"mapped",[102]],[[119814,119814],"mapped",[103]],[[119815,119815],"mapped",[104]],[[119816,119816],"mapped",[105]],[[119817,119817],"mapped",[106]],[[119818,119818],"mapped",[107]],[[119819,119819],"mapped",[108]],[[119820,119820],"mapped",[109]],[[119821,119821],"mapped",[110]],[[119822,119822],"mapped",[111]],[[119823,119823],"mapped",[112]],[[119824,119824],"mapped",[113]],[[119825,119825],"mapped",[114]],[[119826,119826],"mapped",[115]],[[119827,119827],"mapped",[116]],[[119828,119828],"mapped",[117]],[[119829,119829],"mapped",[118]],[[119830,119830],"mapped",[119]],[[119831,119831],"mapped",[120]],[[119832,119832],"mapped",[121]],[[119833,119833],"mapped",[122]],[[119834,119834],"mapped",[97]],[[119835,119835],"mapped",[98]],[[119836,119836],"mapped",[99]],[[119837,119837],"mapped",[100]],[[119838,119838],"mapped",[101]],[[119839,119839],"mapped",[102]],[[119840,119840],"mapped",[103]],[[119841,119841],"mapped",[104]],[[119842,119842],"mapped",[105]],[[119843,119843],"mapped",[106]],[[119844,119844],"mapped",[107]],[[119845,119845],"mapped",[108]],[[119846,119846],"mapped",[109]],[[119847,119847],"mapped",[110]],[[119848,119848],"mapped",[111]],[[119849,119849],"mapped",[112]],[[119850,119850],"mapped",[113]],[[119851,119851],"mapped",[114]],[[119852,119852],"mapped",[115]],[[119853,119853],"mapped",[116]],[[119854,119854],"mapped",[117]],[[119855,119855],"mapped",[118]],[[119856,119856],"mapped",[119]],[[119857,119857],"mapped",[120]],[[119858,119858],"mapped",[121]],[[119859,119859],"mapped",[122]],[[119860,119860],"mapped",[97]],[[119861,119861],"mapped",[98]],[[119862,119862],"mapped",[99]],[[119863,119863],"mapped",[100]],[[119864,119864],"mapped",[101]],[[119865,119865],"mapped",[102]],[[119866,119866],"mapped",[103]],[[119867,119867],"mapped",[104]],[[119868,119868],"mapped",[105]],[[119869,119869],"mapped",[106]],[[119870,119870],"mapped",[107]],[[119871,119871],"mapped",[108]],[[119872,119872],"mapped",[109]],[[119873,119873],"mapped",[110]],[[119874,119874],"mapped",[111]],[[119875,119875],"mapped",[112]],[[119876,119876],"mapped",[113]],[[119877,119877],"mapped",[114]],[[119878,119878],"mapped",[115]],[[119879,119879],"mapped",[116]],[[119880,119880],"mapped",[117]],[[119881,119881],"mapped",[118]],[[119882,119882],"mapped",[119]],[[119883,119883],"mapped",[120]],[[119884,119884],"mapped",[121]],[[119885,119885],"mapped",[122]],[[119886,119886],"mapped",[97]],[[119887,119887],"mapped",[98]],[[119888,119888],"mapped",[99]],[[119889,119889],"mapped",[100]],[[119890,119890],"mapped",[101]],[[119891,119891],"mapped",[102]],[[119892,119892],"mapped",[103]],[[119893,119893],"disallowed"],[[119894,119894],"mapped",[105]],[[119895,119895],"mapped",[106]],[[119896,119896],"mapped",[107]],[[119897,119897],"mapped",[108]],[[119898,119898],"mapped",[109]],[[119899,119899],"mapped",[110]],[[119900,119900],"mapped",[111]],[[119901,119901],"mapped",[112]],[[119902,119902],"mapped",[113]],[[119903,119903],"mapped",[114]],[[119904,119904],"mapped",[115]],[[119905,119905],"mapped",[116]],[[119906,119906],"mapped",[117]],[[119907,119907],"mapped",[118]],[[119908,119908],"mapped",[119]],[[119909,119909],"mapped",[120]],[[119910,119910],"mapped",[121]],[[119911,119911],"mapped",[122]],[[119912,119912],"mapped",[97]],[[119913,119913],"mapped",[98]],[[119914,119914],"mapped",[99]],[[119915,119915],"mapped",[100]],[[119916,119916],"mapped",[101]],[[119917,119917],"mapped",[102]],[[119918,119918],"mapped",[103]],[[119919,119919],"mapped",[104]],[[119920,119920],"mapped",[105]],[[119921,119921],"mapped",[106]],[[119922,119922],"mapped",[107]],[[119923,119923],"mapped",[108]],[[119924,119924],"mapped",[109]],[[119925,119925],"mapped",[110]],[[119926,119926],"mapped",[111]],[[119927,119927],"mapped",[112]],[[119928,119928],"mapped",[113]],[[119929,119929],"mapped",[114]],[[119930,119930],"mapped",[115]],[[119931,119931],"mapped",[116]],[[119932,119932],"mapped",[117]],[[119933,119933],"mapped",[118]],[[119934,119934],"mapped",[119]],[[119935,119935],"mapped",[120]],[[119936,119936],"mapped",[121]],[[119937,119937],"mapped",[122]],[[119938,119938],"mapped",[97]],[[119939,119939],"mapped",[98]],[[119940,119940],"mapped",[99]],[[119941,119941],"mapped",[100]],[[119942,119942],"mapped",[101]],[[119943,119943],"mapped",[102]],[[119944,119944],"mapped",[103]],[[119945,119945],"mapped",[104]],[[119946,119946],"mapped",[105]],[[119947,119947],"mapped",[106]],[[119948,119948],"mapped",[107]],[[119949,119949],"mapped",[108]],[[119950,119950],"mapped",[109]],[[119951,119951],"mapped",[110]],[[119952,119952],"mapped",[111]],[[119953,119953],"mapped",[112]],[[119954,119954],"mapped",[113]],[[119955,119955],"mapped",[114]],[[119956,119956],"mapped",[115]],[[119957,119957],"mapped",[116]],[[119958,119958],"mapped",[117]],[[119959,119959],"mapped",[118]],[[119960,119960],"mapped",[119]],[[119961,119961],"mapped",[120]],[[119962,119962],"mapped",[121]],[[119963,119963],"mapped",[122]],[[119964,119964],"mapped",[97]],[[119965,119965],"disallowed"],[[119966,119966],"mapped",[99]],[[119967,119967],"mapped",[100]],[[119968,119969],"disallowed"],[[119970,119970],"mapped",[103]],[[119971,119972],"disallowed"],[[119973,119973],"mapped",[106]],[[119974,119974],"mapped",[107]],[[119975,119976],"disallowed"],[[119977,119977],"mapped",[110]],[[119978,119978],"mapped",[111]],[[119979,119979],"mapped",[112]],[[119980,119980],"mapped",[113]],[[119981,119981],"disallowed"],[[119982,119982],"mapped",[115]],[[119983,119983],"mapped",[116]],[[119984,119984],"mapped",[117]],[[119985,119985],"mapped",[118]],[[119986,119986],"mapped",[119]],[[119987,119987],"mapped",[120]],[[119988,119988],"mapped",[121]],[[119989,119989],"mapped",[122]],[[119990,119990],"mapped",[97]],[[119991,119991],"mapped",[98]],[[119992,119992],"mapped",[99]],[[119993,119993],"mapped",[100]],[[119994,119994],"disallowed"],[[119995,119995],"mapped",[102]],[[119996,119996],"disallowed"],[[119997,119997],"mapped",[104]],[[119998,119998],"mapped",[105]],[[119999,119999],"mapped",[106]],[[120000,120000],"mapped",[107]],[[120001,120001],"mapped",[108]],[[120002,120002],"mapped",[109]],[[120003,120003],"mapped",[110]],[[120004,120004],"disallowed"],[[120005,120005],"mapped",[112]],[[120006,120006],"mapped",[113]],[[120007,120007],"mapped",[114]],[[120008,120008],"mapped",[115]],[[120009,120009],"mapped",[116]],[[120010,120010],"mapped",[117]],[[120011,120011],"mapped",[118]],[[120012,120012],"mapped",[119]],[[120013,120013],"mapped",[120]],[[120014,120014],"mapped",[121]],[[120015,120015],"mapped",[122]],[[120016,120016],"mapped",[97]],[[120017,120017],"mapped",[98]],[[120018,120018],"mapped",[99]],[[120019,120019],"mapped",[100]],[[120020,120020],"mapped",[101]],[[120021,120021],"mapped",[102]],[[120022,120022],"mapped",[103]],[[120023,120023],"mapped",[104]],[[120024,120024],"mapped",[105]],[[120025,120025],"mapped",[106]],[[120026,120026],"mapped",[107]],[[120027,120027],"mapped",[108]],[[120028,120028],"mapped",[109]],[[120029,120029],"mapped",[110]],[[120030,120030],"mapped",[111]],[[120031,120031],"mapped",[112]],[[120032,120032],"mapped",[113]],[[120033,120033],"mapped",[114]],[[120034,120034],"mapped",[115]],[[120035,120035],"mapped",[116]],[[120036,120036],"mapped",[117]],[[120037,120037],"mapped",[118]],[[120038,120038],"mapped",[119]],[[120039,120039],"mapped",[120]],[[120040,120040],"mapped",[121]],[[120041,120041],"mapped",[122]],[[120042,120042],"mapped",[97]],[[120043,120043],"mapped",[98]],[[120044,120044],"mapped",[99]],[[120045,120045],"mapped",[100]],[[120046,120046],"mapped",[101]],[[120047,120047],"mapped",[102]],[[120048,120048],"mapped",[103]],[[120049,120049],"mapped",[104]],[[120050,120050],"mapped",[105]],[[120051,120051],"mapped",[106]],[[120052,120052],"mapped",[107]],[[120053,120053],"mapped",[108]],[[120054,120054],"mapped",[109]],[[120055,120055],"mapped",[110]],[[120056,120056],"mapped",[111]],[[120057,120057],"mapped",[112]],[[120058,120058],"mapped",[113]],[[120059,120059],"mapped",[114]],[[120060,120060],"mapped",[115]],[[120061,120061],"mapped",[116]],[[120062,120062],"mapped",[117]],[[120063,120063],"mapped",[118]],[[120064,120064],"mapped",[119]],[[120065,120065],"mapped",[120]],[[120066,120066],"mapped",[121]],[[120067,120067],"mapped",[122]],[[120068,120068],"mapped",[97]],[[120069,120069],"mapped",[98]],[[120070,120070],"disallowed"],[[120071,120071],"mapped",[100]],[[120072,120072],"mapped",[101]],[[120073,120073],"mapped",[102]],[[120074,120074],"mapped",[103]],[[120075,120076],"disallowed"],[[120077,120077],"mapped",[106]],[[120078,120078],"mapped",[107]],[[120079,120079],"mapped",[108]],[[120080,120080],"mapped",[109]],[[120081,120081],"mapped",[110]],[[120082,120082],"mapped",[111]],[[120083,120083],"mapped",[112]],[[120084,120084],"mapped",[113]],[[120085,120085],"disallowed"],[[120086,120086],"mapped",[115]],[[120087,120087],"mapped",[116]],[[120088,120088],"mapped",[117]],[[120089,120089],"mapped",[118]],[[120090,120090],"mapped",[119]],[[120091,120091],"mapped",[120]],[[120092,120092],"mapped",[121]],[[120093,120093],"disallowed"],[[120094,120094],"mapped",[97]],[[120095,120095],"mapped",[98]],[[120096,120096],"mapped",[99]],[[120097,120097],"mapped",[100]],[[120098,120098],"mapped",[101]],[[120099,120099],"mapped",[102]],[[120100,120100],"mapped",[103]],[[120101,120101],"mapped",[104]],[[120102,120102],"mapped",[105]],[[120103,120103],"mapped",[106]],[[120104,120104],"mapped",[107]],[[120105,120105],"mapped",[108]],[[120106,120106],"mapped",[109]],[[120107,120107],"mapped",[110]],[[120108,120108],"mapped",[111]],[[120109,120109],"mapped",[112]],[[120110,120110],"mapped",[113]],[[120111,120111],"mapped",[114]],[[120112,120112],"mapped",[115]],[[120113,120113],"mapped",[116]],[[120114,120114],"mapped",[117]],[[120115,120115],"mapped",[118]],[[120116,120116],"mapped",[119]],[[120117,120117],"mapped",[120]],[[120118,120118],"mapped",[121]],[[120119,120119],"mapped",[122]],[[120120,120120],"mapped",[97]],[[120121,120121],"mapped",[98]],[[120122,120122],"disallowed"],[[120123,120123],"mapped",[100]],[[120124,120124],"mapped",[101]],[[120125,120125],"mapped",[102]],[[120126,120126],"mapped",[103]],[[120127,120127],"disallowed"],[[120128,120128],"mapped",[105]],[[120129,120129],"mapped",[106]],[[120130,120130],"mapped",[107]],[[120131,120131],"mapped",[108]],[[120132,120132],"mapped",[109]],[[120133,120133],"disallowed"],[[120134,120134],"mapped",[111]],[[120135,120137],"disallowed"],[[120138,120138],"mapped",[115]],[[120139,120139],"mapped",[116]],[[120140,120140],"mapped",[117]],[[120141,120141],"mapped",[118]],[[120142,120142],"mapped",[119]],[[120143,120143],"mapped",[120]],[[120144,120144],"mapped",[121]],[[120145,120145],"disallowed"],[[120146,120146],"mapped",[97]],[[120147,120147],"mapped",[98]],[[120148,120148],"mapped",[99]],[[120149,120149],"mapped",[100]],[[120150,120150],"mapped",[101]],[[120151,120151],"mapped",[102]],[[120152,120152],"mapped",[103]],[[120153,120153],"mapped",[104]],[[120154,120154],"mapped",[105]],[[120155,120155],"mapped",[106]],[[120156,120156],"mapped",[107]],[[120157,120157],"mapped",[108]],[[120158,120158],"mapped",[109]],[[120159,120159],"mapped",[110]],[[120160,120160],"mapped",[111]],[[120161,120161],"mapped",[112]],[[120162,120162],"mapped",[113]],[[120163,120163],"mapped",[114]],[[120164,120164],"mapped",[115]],[[120165,120165],"mapped",[116]],[[120166,120166],"mapped",[117]],[[120167,120167],"mapped",[118]],[[120168,120168],"mapped",[119]],[[120169,120169],"mapped",[120]],[[120170,120170],"mapped",[121]],[[120171,120171],"mapped",[122]],[[120172,120172],"mapped",[97]],[[120173,120173],"mapped",[98]],[[120174,120174],"mapped",[99]],[[120175,120175],"mapped",[100]],[[120176,120176],"mapped",[101]],[[120177,120177],"mapped",[102]],[[120178,120178],"mapped",[103]],[[120179,120179],"mapped",[104]],[[120180,120180],"mapped",[105]],[[120181,120181],"mapped",[106]],[[120182,120182],"mapped",[107]],[[120183,120183],"mapped",[108]],[[120184,120184],"mapped",[109]],[[120185,120185],"mapped",[110]],[[120186,120186],"mapped",[111]],[[120187,120187],"mapped",[112]],[[120188,120188],"mapped",[113]],[[120189,120189],"mapped",[114]],[[120190,120190],"mapped",[115]],[[120191,120191],"mapped",[116]],[[120192,120192],"mapped",[117]],[[120193,120193],"mapped",[118]],[[120194,120194],"mapped",[119]],[[120195,120195],"mapped",[120]],[[120196,120196],"mapped",[121]],[[120197,120197],"mapped",[122]],[[120198,120198],"mapped",[97]],[[120199,120199],"mapped",[98]],[[120200,120200],"mapped",[99]],[[120201,120201],"mapped",[100]],[[120202,120202],"mapped",[101]],[[120203,120203],"mapped",[102]],[[120204,120204],"mapped",[103]],[[120205,120205],"mapped",[104]],[[120206,120206],"mapped",[105]],[[120207,120207],"mapped",[106]],[[120208,120208],"mapped",[107]],[[120209,120209],"mapped",[108]],[[120210,120210],"mapped",[109]],[[120211,120211],"mapped",[110]],[[120212,120212],"mapped",[111]],[[120213,120213],"mapped",[112]],[[120214,120214],"mapped",[113]],[[120215,120215],"mapped",[114]],[[120216,120216],"mapped",[115]],[[120217,120217],"mapped",[116]],[[120218,120218],"mapped",[117]],[[120219,120219],"mapped",[118]],[[120220,120220],"mapped",[119]],[[120221,120221],"mapped",[120]],[[120222,120222],"mapped",[121]],[[120223,120223],"mapped",[122]],[[120224,120224],"mapped",[97]],[[120225,120225],"mapped",[98]],[[120226,120226],"mapped",[99]],[[120227,120227],"mapped",[100]],[[120228,120228],"mapped",[101]],[[120229,120229],"mapped",[102]],[[120230,120230],"mapped",[103]],[[120231,120231],"mapped",[104]],[[120232,120232],"mapped",[105]],[[120233,120233],"mapped",[106]],[[120234,120234],"mapped",[107]],[[120235,120235],"mapped",[108]],[[120236,120236],"mapped",[109]],[[120237,120237],"mapped",[110]],[[120238,120238],"mapped",[111]],[[120239,120239],"mapped",[112]],[[120240,120240],"mapped",[113]],[[120241,120241],"mapped",[114]],[[120242,120242],"mapped",[115]],[[120243,120243],"mapped",[116]],[[120244,120244],"mapped",[117]],[[120245,120245],"mapped",[118]],[[120246,120246],"mapped",[119]],[[120247,120247],"mapped",[120]],[[120248,120248],"mapped",[121]],[[120249,120249],"mapped",[122]],[[120250,120250],"mapped",[97]],[[120251,120251],"mapped",[98]],[[120252,120252],"mapped",[99]],[[120253,120253],"mapped",[100]],[[120254,120254],"mapped",[101]],[[120255,120255],"mapped",[102]],[[120256,120256],"mapped",[103]],[[120257,120257],"mapped",[104]],[[120258,120258],"mapped",[105]],[[120259,120259],"mapped",[106]],[[120260,120260],"mapped",[107]],[[120261,120261],"mapped",[108]],[[120262,120262],"mapped",[109]],[[120263,120263],"mapped",[110]],[[120264,120264],"mapped",[111]],[[120265,120265],"mapped",[112]],[[120266,120266],"mapped",[113]],[[120267,120267],"mapped",[114]],[[120268,120268],"mapped",[115]],[[120269,120269],"mapped",[116]],[[120270,120270],"mapped",[117]],[[120271,120271],"mapped",[118]],[[120272,120272],"mapped",[119]],[[120273,120273],"mapped",[120]],[[120274,120274],"mapped",[121]],[[120275,120275],"mapped",[122]],[[120276,120276],"mapped",[97]],[[120277,120277],"mapped",[98]],[[120278,120278],"mapped",[99]],[[120279,120279],"mapped",[100]],[[120280,120280],"mapped",[101]],[[120281,120281],"mapped",[102]],[[120282,120282],"mapped",[103]],[[120283,120283],"mapped",[104]],[[120284,120284],"mapped",[105]],[[120285,120285],"mapped",[106]],[[120286,120286],"mapped",[107]],[[120287,120287],"mapped",[108]],[[120288,120288],"mapped",[109]],[[120289,120289],"mapped",[110]],[[120290,120290],"mapped",[111]],[[120291,120291],"mapped",[112]],[[120292,120292],"mapped",[113]],[[120293,120293],"mapped",[114]],[[120294,120294],"mapped",[115]],[[120295,120295],"mapped",[116]],[[120296,120296],"mapped",[117]],[[120297,120297],"mapped",[118]],[[120298,120298],"mapped",[119]],[[120299,120299],"mapped",[120]],[[120300,120300],"mapped",[121]],[[120301,120301],"mapped",[122]],[[120302,120302],"mapped",[97]],[[120303,120303],"mapped",[98]],[[120304,120304],"mapped",[99]],[[120305,120305],"mapped",[100]],[[120306,120306],"mapped",[101]],[[120307,120307],"mapped",[102]],[[120308,120308],"mapped",[103]],[[120309,120309],"mapped",[104]],[[120310,120310],"mapped",[105]],[[120311,120311],"mapped",[106]],[[120312,120312],"mapped",[107]],[[120313,120313],"mapped",[108]],[[120314,120314],"mapped",[109]],[[120315,120315],"mapped",[110]],[[120316,120316],"mapped",[111]],[[120317,120317],"mapped",[112]],[[120318,120318],"mapped",[113]],[[120319,120319],"mapped",[114]],[[120320,120320],"mapped",[115]],[[120321,120321],"mapped",[116]],[[120322,120322],"mapped",[117]],[[120323,120323],"mapped",[118]],[[120324,120324],"mapped",[119]],[[120325,120325],"mapped",[120]],[[120326,120326],"mapped",[121]],[[120327,120327],"mapped",[122]],[[120328,120328],"mapped",[97]],[[120329,120329],"mapped",[98]],[[120330,120330],"mapped",[99]],[[120331,120331],"mapped",[100]],[[120332,120332],"mapped",[101]],[[120333,120333],"mapped",[102]],[[120334,120334],"mapped",[103]],[[120335,120335],"mapped",[104]],[[120336,120336],"mapped",[105]],[[120337,120337],"mapped",[106]],[[120338,120338],"mapped",[107]],[[120339,120339],"mapped",[108]],[[120340,120340],"mapped",[109]],[[120341,120341],"mapped",[110]],[[120342,120342],"mapped",[111]],[[120343,120343],"mapped",[112]],[[120344,120344],"mapped",[113]],[[120345,120345],"mapped",[114]],[[120346,120346],"mapped",[115]],[[120347,120347],"mapped",[116]],[[120348,120348],"mapped",[117]],[[120349,120349],"mapped",[118]],[[120350,120350],"mapped",[119]],[[120351,120351],"mapped",[120]],[[120352,120352],"mapped",[121]],[[120353,120353],"mapped",[122]],[[120354,120354],"mapped",[97]],[[120355,120355],"mapped",[98]],[[120356,120356],"mapped",[99]],[[120357,120357],"mapped",[100]],[[120358,120358],"mapped",[101]],[[120359,120359],"mapped",[102]],[[120360,120360],"mapped",[103]],[[120361,120361],"mapped",[104]],[[120362,120362],"mapped",[105]],[[120363,120363],"mapped",[106]],[[120364,120364],"mapped",[107]],[[120365,120365],"mapped",[108]],[[120366,120366],"mapped",[109]],[[120367,120367],"mapped",[110]],[[120368,120368],"mapped",[111]],[[120369,120369],"mapped",[112]],[[120370,120370],"mapped",[113]],[[120371,120371],"mapped",[114]],[[120372,120372],"mapped",[115]],[[120373,120373],"mapped",[116]],[[120374,120374],"mapped",[117]],[[120375,120375],"mapped",[118]],[[120376,120376],"mapped",[119]],[[120377,120377],"mapped",[120]],[[120378,120378],"mapped",[121]],[[120379,120379],"mapped",[122]],[[120380,120380],"mapped",[97]],[[120381,120381],"mapped",[98]],[[120382,120382],"mapped",[99]],[[120383,120383],"mapped",[100]],[[120384,120384],"mapped",[101]],[[120385,120385],"mapped",[102]],[[120386,120386],"mapped",[103]],[[120387,120387],"mapped",[104]],[[120388,120388],"mapped",[105]],[[120389,120389],"mapped",[106]],[[120390,120390],"mapped",[107]],[[120391,120391],"mapped",[108]],[[120392,120392],"mapped",[109]],[[120393,120393],"mapped",[110]],[[120394,120394],"mapped",[111]],[[120395,120395],"mapped",[112]],[[120396,120396],"mapped",[113]],[[120397,120397],"mapped",[114]],[[120398,120398],"mapped",[115]],[[120399,120399],"mapped",[116]],[[120400,120400],"mapped",[117]],[[120401,120401],"mapped",[118]],[[120402,120402],"mapped",[119]],[[120403,120403],"mapped",[120]],[[120404,120404],"mapped",[121]],[[120405,120405],"mapped",[122]],[[120406,120406],"mapped",[97]],[[120407,120407],"mapped",[98]],[[120408,120408],"mapped",[99]],[[120409,120409],"mapped",[100]],[[120410,120410],"mapped",[101]],[[120411,120411],"mapped",[102]],[[120412,120412],"mapped",[103]],[[120413,120413],"mapped",[104]],[[120414,120414],"mapped",[105]],[[120415,120415],"mapped",[106]],[[120416,120416],"mapped",[107]],[[120417,120417],"mapped",[108]],[[120418,120418],"mapped",[109]],[[120419,120419],"mapped",[110]],[[120420,120420],"mapped",[111]],[[120421,120421],"mapped",[112]],[[120422,120422],"mapped",[113]],[[120423,120423],"mapped",[114]],[[120424,120424],"mapped",[115]],[[120425,120425],"mapped",[116]],[[120426,120426],"mapped",[117]],[[120427,120427],"mapped",[118]],[[120428,120428],"mapped",[119]],[[120429,120429],"mapped",[120]],[[120430,120430],"mapped",[121]],[[120431,120431],"mapped",[122]],[[120432,120432],"mapped",[97]],[[120433,120433],"mapped",[98]],[[120434,120434],"mapped",[99]],[[120435,120435],"mapped",[100]],[[120436,120436],"mapped",[101]],[[120437,120437],"mapped",[102]],[[120438,120438],"mapped",[103]],[[120439,120439],"mapped",[104]],[[120440,120440],"mapped",[105]],[[120441,120441],"mapped",[106]],[[120442,120442],"mapped",[107]],[[120443,120443],"mapped",[108]],[[120444,120444],"mapped",[109]],[[120445,120445],"mapped",[110]],[[120446,120446],"mapped",[111]],[[120447,120447],"mapped",[112]],[[120448,120448],"mapped",[113]],[[120449,120449],"mapped",[114]],[[120450,120450],"mapped",[115]],[[120451,120451],"mapped",[116]],[[120452,120452],"mapped",[117]],[[120453,120453],"mapped",[118]],[[120454,120454],"mapped",[119]],[[120455,120455],"mapped",[120]],[[120456,120456],"mapped",[121]],[[120457,120457],"mapped",[122]],[[120458,120458],"mapped",[97]],[[120459,120459],"mapped",[98]],[[120460,120460],"mapped",[99]],[[120461,120461],"mapped",[100]],[[120462,120462],"mapped",[101]],[[120463,120463],"mapped",[102]],[[120464,120464],"mapped",[103]],[[120465,120465],"mapped",[104]],[[120466,120466],"mapped",[105]],[[120467,120467],"mapped",[106]],[[120468,120468],"mapped",[107]],[[120469,120469],"mapped",[108]],[[120470,120470],"mapped",[109]],[[120471,120471],"mapped",[110]],[[120472,120472],"mapped",[111]],[[120473,120473],"mapped",[112]],[[120474,120474],"mapped",[113]],[[120475,120475],"mapped",[114]],[[120476,120476],"mapped",[115]],[[120477,120477],"mapped",[116]],[[120478,120478],"mapped",[117]],[[120479,120479],"mapped",[118]],[[120480,120480],"mapped",[119]],[[120481,120481],"mapped",[120]],[[120482,120482],"mapped",[121]],[[120483,120483],"mapped",[122]],[[120484,120484],"mapped",[305]],[[120485,120485],"mapped",[567]],[[120486,120487],"disallowed"],[[120488,120488],"mapped",[945]],[[120489,120489],"mapped",[946]],[[120490,120490],"mapped",[947]],[[120491,120491],"mapped",[948]],[[120492,120492],"mapped",[949]],[[120493,120493],"mapped",[950]],[[120494,120494],"mapped",[951]],[[120495,120495],"mapped",[952]],[[120496,120496],"mapped",[953]],[[120497,120497],"mapped",[954]],[[120498,120498],"mapped",[955]],[[120499,120499],"mapped",[956]],[[120500,120500],"mapped",[957]],[[120501,120501],"mapped",[958]],[[120502,120502],"mapped",[959]],[[120503,120503],"mapped",[960]],[[120504,120504],"mapped",[961]],[[120505,120505],"mapped",[952]],[[120506,120506],"mapped",[963]],[[120507,120507],"mapped",[964]],[[120508,120508],"mapped",[965]],[[120509,120509],"mapped",[966]],[[120510,120510],"mapped",[967]],[[120511,120511],"mapped",[968]],[[120512,120512],"mapped",[969]],[[120513,120513],"mapped",[8711]],[[120514,120514],"mapped",[945]],[[120515,120515],"mapped",[946]],[[120516,120516],"mapped",[947]],[[120517,120517],"mapped",[948]],[[120518,120518],"mapped",[949]],[[120519,120519],"mapped",[950]],[[120520,120520],"mapped",[951]],[[120521,120521],"mapped",[952]],[[120522,120522],"mapped",[953]],[[120523,120523],"mapped",[954]],[[120524,120524],"mapped",[955]],[[120525,120525],"mapped",[956]],[[120526,120526],"mapped",[957]],[[120527,120527],"mapped",[958]],[[120528,120528],"mapped",[959]],[[120529,120529],"mapped",[960]],[[120530,120530],"mapped",[961]],[[120531,120532],"mapped",[963]],[[120533,120533],"mapped",[964]],[[120534,120534],"mapped",[965]],[[120535,120535],"mapped",[966]],[[120536,120536],"mapped",[967]],[[120537,120537],"mapped",[968]],[[120538,120538],"mapped",[969]],[[120539,120539],"mapped",[8706]],[[120540,120540],"mapped",[949]],[[120541,120541],"mapped",[952]],[[120542,120542],"mapped",[954]],[[120543,120543],"mapped",[966]],[[120544,120544],"mapped",[961]],[[120545,120545],"mapped",[960]],[[120546,120546],"mapped",[945]],[[120547,120547],"mapped",[946]],[[120548,120548],"mapped",[947]],[[120549,120549],"mapped",[948]],[[120550,120550],"mapped",[949]],[[120551,120551],"mapped",[950]],[[120552,120552],"mapped",[951]],[[120553,120553],"mapped",[952]],[[120554,120554],"mapped",[953]],[[120555,120555],"mapped",[954]],[[120556,120556],"mapped",[955]],[[120557,120557],"mapped",[956]],[[120558,120558],"mapped",[957]],[[120559,120559],"mapped",[958]],[[120560,120560],"mapped",[959]],[[120561,120561],"mapped",[960]],[[120562,120562],"mapped",[961]],[[120563,120563],"mapped",[952]],[[120564,120564],"mapped",[963]],[[120565,120565],"mapped",[964]],[[120566,120566],"mapped",[965]],[[120567,120567],"mapped",[966]],[[120568,120568],"mapped",[967]],[[120569,120569],"mapped",[968]],[[120570,120570],"mapped",[969]],[[120571,120571],"mapped",[8711]],[[120572,120572],"mapped",[945]],[[120573,120573],"mapped",[946]],[[120574,120574],"mapped",[947]],[[120575,120575],"mapped",[948]],[[120576,120576],"mapped",[949]],[[120577,120577],"mapped",[950]],[[120578,120578],"mapped",[951]],[[120579,120579],"mapped",[952]],[[120580,120580],"mapped",[953]],[[120581,120581],"mapped",[954]],[[120582,120582],"mapped",[955]],[[120583,120583],"mapped",[956]],[[120584,120584],"mapped",[957]],[[120585,120585],"mapped",[958]],[[120586,120586],"mapped",[959]],[[120587,120587],"mapped",[960]],[[120588,120588],"mapped",[961]],[[120589,120590],"mapped",[963]],[[120591,120591],"mapped",[964]],[[120592,120592],"mapped",[965]],[[120593,120593],"mapped",[966]],[[120594,120594],"mapped",[967]],[[120595,120595],"mapped",[968]],[[120596,120596],"mapped",[969]],[[120597,120597],"mapped",[8706]],[[120598,120598],"mapped",[949]],[[120599,120599],"mapped",[952]],[[120600,120600],"mapped",[954]],[[120601,120601],"mapped",[966]],[[120602,120602],"mapped",[961]],[[120603,120603],"mapped",[960]],[[120604,120604],"mapped",[945]],[[120605,120605],"mapped",[946]],[[120606,120606],"mapped",[947]],[[120607,120607],"mapped",[948]],[[120608,120608],"mapped",[949]],[[120609,120609],"mapped",[950]],[[120610,120610],"mapped",[951]],[[120611,120611],"mapped",[952]],[[120612,120612],"mapped",[953]],[[120613,120613],"mapped",[954]],[[120614,120614],"mapped",[955]],[[120615,120615],"mapped",[956]],[[120616,120616],"mapped",[957]],[[120617,120617],"mapped",[958]],[[120618,120618],"mapped",[959]],[[120619,120619],"mapped",[960]],[[120620,120620],"mapped",[961]],[[120621,120621],"mapped",[952]],[[120622,120622],"mapped",[963]],[[120623,120623],"mapped",[964]],[[120624,120624],"mapped",[965]],[[120625,120625],"mapped",[966]],[[120626,120626],"mapped",[967]],[[120627,120627],"mapped",[968]],[[120628,120628],"mapped",[969]],[[120629,120629],"mapped",[8711]],[[120630,120630],"mapped",[945]],[[120631,120631],"mapped",[946]],[[120632,120632],"mapped",[947]],[[120633,120633],"mapped",[948]],[[120634,120634],"mapped",[949]],[[120635,120635],"mapped",[950]],[[120636,120636],"mapped",[951]],[[120637,120637],"mapped",[952]],[[120638,120638],"mapped",[953]],[[120639,120639],"mapped",[954]],[[120640,120640],"mapped",[955]],[[120641,120641],"mapped",[956]],[[120642,120642],"mapped",[957]],[[120643,120643],"mapped",[958]],[[120644,120644],"mapped",[959]],[[120645,120645],"mapped",[960]],[[120646,120646],"mapped",[961]],[[120647,120648],"mapped",[963]],[[120649,120649],"mapped",[964]],[[120650,120650],"mapped",[965]],[[120651,120651],"mapped",[966]],[[120652,120652],"mapped",[967]],[[120653,120653],"mapped",[968]],[[120654,120654],"mapped",[969]],[[120655,120655],"mapped",[8706]],[[120656,120656],"mapped",[949]],[[120657,120657],"mapped",[952]],[[120658,120658],"mapped",[954]],[[120659,120659],"mapped",[966]],[[120660,120660],"mapped",[961]],[[120661,120661],"mapped",[960]],[[120662,120662],"mapped",[945]],[[120663,120663],"mapped",[946]],[[120664,120664],"mapped",[947]],[[120665,120665],"mapped",[948]],[[120666,120666],"mapped",[949]],[[120667,120667],"mapped",[950]],[[120668,120668],"mapped",[951]],[[120669,120669],"mapped",[952]],[[120670,120670],"mapped",[953]],[[120671,120671],"mapped",[954]],[[120672,120672],"mapped",[955]],[[120673,120673],"mapped",[956]],[[120674,120674],"mapped",[957]],[[120675,120675],"mapped",[958]],[[120676,120676],"mapped",[959]],[[120677,120677],"mapped",[960]],[[120678,120678],"mapped",[961]],[[120679,120679],"mapped",[952]],[[120680,120680],"mapped",[963]],[[120681,120681],"mapped",[964]],[[120682,120682],"mapped",[965]],[[120683,120683],"mapped",[966]],[[120684,120684],"mapped",[967]],[[120685,120685],"mapped",[968]],[[120686,120686],"mapped",[969]],[[120687,120687],"mapped",[8711]],[[120688,120688],"mapped",[945]],[[120689,120689],"mapped",[946]],[[120690,120690],"mapped",[947]],[[120691,120691],"mapped",[948]],[[120692,120692],"mapped",[949]],[[120693,120693],"mapped",[950]],[[120694,120694],"mapped",[951]],[[120695,120695],"mapped",[952]],[[120696,120696],"mapped",[953]],[[120697,120697],"mapped",[954]],[[120698,120698],"mapped",[955]],[[120699,120699],"mapped",[956]],[[120700,120700],"mapped",[957]],[[120701,120701],"mapped",[958]],[[120702,120702],"mapped",[959]],[[120703,120703],"mapped",[960]],[[120704,120704],"mapped",[961]],[[120705,120706],"mapped",[963]],[[120707,120707],"mapped",[964]],[[120708,120708],"mapped",[965]],[[120709,120709],"mapped",[966]],[[120710,120710],"mapped",[967]],[[120711,120711],"mapped",[968]],[[120712,120712],"mapped",[969]],[[120713,120713],"mapped",[8706]],[[120714,120714],"mapped",[949]],[[120715,120715],"mapped",[952]],[[120716,120716],"mapped",[954]],[[120717,120717],"mapped",[966]],[[120718,120718],"mapped",[961]],[[120719,120719],"mapped",[960]],[[120720,120720],"mapped",[945]],[[120721,120721],"mapped",[946]],[[120722,120722],"mapped",[947]],[[120723,120723],"mapped",[948]],[[120724,120724],"mapped",[949]],[[120725,120725],"mapped",[950]],[[120726,120726],"mapped",[951]],[[120727,120727],"mapped",[952]],[[120728,120728],"mapped",[953]],[[120729,120729],"mapped",[954]],[[120730,120730],"mapped",[955]],[[120731,120731],"mapped",[956]],[[120732,120732],"mapped",[957]],[[120733,120733],"mapped",[958]],[[120734,120734],"mapped",[959]],[[120735,120735],"mapped",[960]],[[120736,120736],"mapped",[961]],[[120737,120737],"mapped",[952]],[[120738,120738],"mapped",[963]],[[120739,120739],"mapped",[964]],[[120740,120740],"mapped",[965]],[[120741,120741],"mapped",[966]],[[120742,120742],"mapped",[967]],[[120743,120743],"mapped",[968]],[[120744,120744],"mapped",[969]],[[120745,120745],"mapped",[8711]],[[120746,120746],"mapped",[945]],[[120747,120747],"mapped",[946]],[[120748,120748],"mapped",[947]],[[120749,120749],"mapped",[948]],[[120750,120750],"mapped",[949]],[[120751,120751],"mapped",[950]],[[120752,120752],"mapped",[951]],[[120753,120753],"mapped",[952]],[[120754,120754],"mapped",[953]],[[120755,120755],"mapped",[954]],[[120756,120756],"mapped",[955]],[[120757,120757],"mapped",[956]],[[120758,120758],"mapped",[957]],[[120759,120759],"mapped",[958]],[[120760,120760],"mapped",[959]],[[120761,120761],"mapped",[960]],[[120762,120762],"mapped",[961]],[[120763,120764],"mapped",[963]],[[120765,120765],"mapped",[964]],[[120766,120766],"mapped",[965]],[[120767,120767],"mapped",[966]],[[120768,120768],"mapped",[967]],[[120769,120769],"mapped",[968]],[[120770,120770],"mapped",[969]],[[120771,120771],"mapped",[8706]],[[120772,120772],"mapped",[949]],[[120773,120773],"mapped",[952]],[[120774,120774],"mapped",[954]],[[120775,120775],"mapped",[966]],[[120776,120776],"mapped",[961]],[[120777,120777],"mapped",[960]],[[120778,120779],"mapped",[989]],[[120780,120781],"disallowed"],[[120782,120782],"mapped",[48]],[[120783,120783],"mapped",[49]],[[120784,120784],"mapped",[50]],[[120785,120785],"mapped",[51]],[[120786,120786],"mapped",[52]],[[120787,120787],"mapped",[53]],[[120788,120788],"mapped",[54]],[[120789,120789],"mapped",[55]],[[120790,120790],"mapped",[56]],[[120791,120791],"mapped",[57]],[[120792,120792],"mapped",[48]],[[120793,120793],"mapped",[49]],[[120794,120794],"mapped",[50]],[[120795,120795],"mapped",[51]],[[120796,120796],"mapped",[52]],[[120797,120797],"mapped",[53]],[[120798,120798],"mapped",[54]],[[120799,120799],"mapped",[55]],[[120800,120800],"mapped",[56]],[[120801,120801],"mapped",[57]],[[120802,120802],"mapped",[48]],[[120803,120803],"mapped",[49]],[[120804,120804],"mapped",[50]],[[120805,120805],"mapped",[51]],[[120806,120806],"mapped",[52]],[[120807,120807],"mapped",[53]],[[120808,120808],"mapped",[54]],[[120809,120809],"mapped",[55]],[[120810,120810],"mapped",[56]],[[120811,120811],"mapped",[57]],[[120812,120812],"mapped",[48]],[[120813,120813],"mapped",[49]],[[120814,120814],"mapped",[50]],[[120815,120815],"mapped",[51]],[[120816,120816],"mapped",[52]],[[120817,120817],"mapped",[53]],[[120818,120818],"mapped",[54]],[[120819,120819],"mapped",[55]],[[120820,120820],"mapped",[56]],[[120821,120821],"mapped",[57]],[[120822,120822],"mapped",[48]],[[120823,120823],"mapped",[49]],[[120824,120824],"mapped",[50]],[[120825,120825],"mapped",[51]],[[120826,120826],"mapped",[52]],[[120827,120827],"mapped",[53]],[[120828,120828],"mapped",[54]],[[120829,120829],"mapped",[55]],[[120830,120830],"mapped",[56]],[[120831,120831],"mapped",[57]],[[120832,121343],"valid",[],"NV8"],[[121344,121398],"valid"],[[121399,121402],"valid",[],"NV8"],[[121403,121452],"valid"],[[121453,121460],"valid",[],"NV8"],[[121461,121461],"valid"],[[121462,121475],"valid",[],"NV8"],[[121476,121476],"valid"],[[121477,121483],"valid",[],"NV8"],[[121484,121498],"disallowed"],[[121499,121503],"valid"],[[121504,121504],"disallowed"],[[121505,121519],"valid"],[[121520,124927],"disallowed"],[[124928,125124],"valid"],[[125125,125126],"disallowed"],[[125127,125135],"valid",[],"NV8"],[[125136,125142],"valid"],[[125143,126463],"disallowed"],[[126464,126464],"mapped",[1575]],[[126465,126465],"mapped",[1576]],[[126466,126466],"mapped",[1580]],[[126467,126467],"mapped",[1583]],[[126468,126468],"disallowed"],[[126469,126469],"mapped",[1608]],[[126470,126470],"mapped",[1586]],[[126471,126471],"mapped",[1581]],[[126472,126472],"mapped",[1591]],[[126473,126473],"mapped",[1610]],[[126474,126474],"mapped",[1603]],[[126475,126475],"mapped",[1604]],[[126476,126476],"mapped",[1605]],[[126477,126477],"mapped",[1606]],[[126478,126478],"mapped",[1587]],[[126479,126479],"mapped",[1593]],[[126480,126480],"mapped",[1601]],[[126481,126481],"mapped",[1589]],[[126482,126482],"mapped",[1602]],[[126483,126483],"mapped",[1585]],[[126484,126484],"mapped",[1588]],[[126485,126485],"mapped",[1578]],[[126486,126486],"mapped",[1579]],[[126487,126487],"mapped",[1582]],[[126488,126488],"mapped",[1584]],[[126489,126489],"mapped",[1590]],[[126490,126490],"mapped",[1592]],[[126491,126491],"mapped",[1594]],[[126492,126492],"mapped",[1646]],[[126493,126493],"mapped",[1722]],[[126494,126494],"mapped",[1697]],[[126495,126495],"mapped",[1647]],[[126496,126496],"disallowed"],[[126497,126497],"mapped",[1576]],[[126498,126498],"mapped",[1580]],[[126499,126499],"disallowed"],[[126500,126500],"mapped",[1607]],[[126501,126502],"disallowed"],[[126503,126503],"mapped",[1581]],[[126504,126504],"disallowed"],[[126505,126505],"mapped",[1610]],[[126506,126506],"mapped",[1603]],[[126507,126507],"mapped",[1604]],[[126508,126508],"mapped",[1605]],[[126509,126509],"mapped",[1606]],[[126510,126510],"mapped",[1587]],[[126511,126511],"mapped",[1593]],[[126512,126512],"mapped",[1601]],[[126513,126513],"mapped",[1589]],[[126514,126514],"mapped",[1602]],[[126515,126515],"disallowed"],[[126516,126516],"mapped",[1588]],[[126517,126517],"mapped",[1578]],[[126518,126518],"mapped",[1579]],[[126519,126519],"mapped",[1582]],[[126520,126520],"disallowed"],[[126521,126521],"mapped",[1590]],[[126522,126522],"disallowed"],[[126523,126523],"mapped",[1594]],[[126524,126529],"disallowed"],[[126530,126530],"mapped",[1580]],[[126531,126534],"disallowed"],[[126535,126535],"mapped",[1581]],[[126536,126536],"disallowed"],[[126537,126537],"mapped",[1610]],[[126538,126538],"disallowed"],[[126539,126539],"mapped",[1604]],[[126540,126540],"disallowed"],[[126541,126541],"mapped",[1606]],[[126542,126542],"mapped",[1587]],[[126543,126543],"mapped",[1593]],[[126544,126544],"disallowed"],[[126545,126545],"mapped",[1589]],[[126546,126546],"mapped",[1602]],[[126547,126547],"disallowed"],[[126548,126548],"mapped",[1588]],[[126549,126550],"disallowed"],[[126551,126551],"mapped",[1582]],[[126552,126552],"disallowed"],[[126553,126553],"mapped",[1590]],[[126554,126554],"disallowed"],[[126555,126555],"mapped",[1594]],[[126556,126556],"disallowed"],[[126557,126557],"mapped",[1722]],[[126558,126558],"disallowed"],[[126559,126559],"mapped",[1647]],[[126560,126560],"disallowed"],[[126561,126561],"mapped",[1576]],[[126562,126562],"mapped",[1580]],[[126563,126563],"disallowed"],[[126564,126564],"mapped",[1607]],[[126565,126566],"disallowed"],[[126567,126567],"mapped",[1581]],[[126568,126568],"mapped",[1591]],[[126569,126569],"mapped",[1610]],[[126570,126570],"mapped",[1603]],[[126571,126571],"disallowed"],[[126572,126572],"mapped",[1605]],[[126573,126573],"mapped",[1606]],[[126574,126574],"mapped",[1587]],[[126575,126575],"mapped",[1593]],[[126576,126576],"mapped",[1601]],[[126577,126577],"mapped",[1589]],[[126578,126578],"mapped",[1602]],[[126579,126579],"disallowed"],[[126580,126580],"mapped",[1588]],[[126581,126581],"mapped",[1578]],[[126582,126582],"mapped",[1579]],[[126583,126583],"mapped",[1582]],[[126584,126584],"disallowed"],[[126585,126585],"mapped",[1590]],[[126586,126586],"mapped",[1592]],[[126587,126587],"mapped",[1594]],[[126588,126588],"mapped",[1646]],[[126589,126589],"disallowed"],[[126590,126590],"mapped",[1697]],[[126591,126591],"disallowed"],[[126592,126592],"mapped",[1575]],[[126593,126593],"mapped",[1576]],[[126594,126594],"mapped",[1580]],[[126595,126595],"mapped",[1583]],[[126596,126596],"mapped",[1607]],[[126597,126597],"mapped",[1608]],[[126598,126598],"mapped",[1586]],[[126599,126599],"mapped",[1581]],[[126600,126600],"mapped",[1591]],[[126601,126601],"mapped",[1610]],[[126602,126602],"disallowed"],[[126603,126603],"mapped",[1604]],[[126604,126604],"mapped",[1605]],[[126605,126605],"mapped",[1606]],[[126606,126606],"mapped",[1587]],[[126607,126607],"mapped",[1593]],[[126608,126608],"mapped",[1601]],[[126609,126609],"mapped",[1589]],[[126610,126610],"mapped",[1602]],[[126611,126611],"mapped",[1585]],[[126612,126612],"mapped",[1588]],[[126613,126613],"mapped",[1578]],[[126614,126614],"mapped",[1579]],[[126615,126615],"mapped",[1582]],[[126616,126616],"mapped",[1584]],[[126617,126617],"mapped",[1590]],[[126618,126618],"mapped",[1592]],[[126619,126619],"mapped",[1594]],[[126620,126624],"disallowed"],[[126625,126625],"mapped",[1576]],[[126626,126626],"mapped",[1580]],[[126627,126627],"mapped",[1583]],[[126628,126628],"disallowed"],[[126629,126629],"mapped",[1608]],[[126630,126630],"mapped",[1586]],[[126631,126631],"mapped",[1581]],[[126632,126632],"mapped",[1591]],[[126633,126633],"mapped",[1610]],[[126634,126634],"disallowed"],[[126635,126635],"mapped",[1604]],[[126636,126636],"mapped",[1605]],[[126637,126637],"mapped",[1606]],[[126638,126638],"mapped",[1587]],[[126639,126639],"mapped",[1593]],[[126640,126640],"mapped",[1601]],[[126641,126641],"mapped",[1589]],[[126642,126642],"mapped",[1602]],[[126643,126643],"mapped",[1585]],[[126644,126644],"mapped",[1588]],[[126645,126645],"mapped",[1578]],[[126646,126646],"mapped",[1579]],[[126647,126647],"mapped",[1582]],[[126648,126648],"mapped",[1584]],[[126649,126649],"mapped",[1590]],[[126650,126650],"mapped",[1592]],[[126651,126651],"mapped",[1594]],[[126652,126703],"disallowed"],[[126704,126705],"valid",[],"NV8"],[[126706,126975],"disallowed"],[[126976,127019],"valid",[],"NV8"],[[127020,127023],"disallowed"],[[127024,127123],"valid",[],"NV8"],[[127124,127135],"disallowed"],[[127136,127150],"valid",[],"NV8"],[[127151,127152],"disallowed"],[[127153,127166],"valid",[],"NV8"],[[127167,127167],"valid",[],"NV8"],[[127168,127168],"disallowed"],[[127169,127183],"valid",[],"NV8"],[[127184,127184],"disallowed"],[[127185,127199],"valid",[],"NV8"],[[127200,127221],"valid",[],"NV8"],[[127222,127231],"disallowed"],[[127232,127232],"disallowed"],[[127233,127233],"disallowed_STD3_mapped",[48,44]],[[127234,127234],"disallowed_STD3_mapped",[49,44]],[[127235,127235],"disallowed_STD3_mapped",[50,44]],[[127236,127236],"disallowed_STD3_mapped",[51,44]],[[127237,127237],"disallowed_STD3_mapped",[52,44]],[[127238,127238],"disallowed_STD3_mapped",[53,44]],[[127239,127239],"disallowed_STD3_mapped",[54,44]],[[127240,127240],"disallowed_STD3_mapped",[55,44]],[[127241,127241],"disallowed_STD3_mapped",[56,44]],[[127242,127242],"disallowed_STD3_mapped",[57,44]],[[127243,127244],"valid",[],"NV8"],[[127245,127247],"disallowed"],[[127248,127248],"disallowed_STD3_mapped",[40,97,41]],[[127249,127249],"disallowed_STD3_mapped",[40,98,41]],[[127250,127250],"disallowed_STD3_mapped",[40,99,41]],[[127251,127251],"disallowed_STD3_mapped",[40,100,41]],[[127252,127252],"disallowed_STD3_mapped",[40,101,41]],[[127253,127253],"disallowed_STD3_mapped",[40,102,41]],[[127254,127254],"disallowed_STD3_mapped",[40,103,41]],[[127255,127255],"disallowed_STD3_mapped",[40,104,41]],[[127256,127256],"disallowed_STD3_mapped",[40,105,41]],[[127257,127257],"disallowed_STD3_mapped",[40,106,41]],[[127258,127258],"disallowed_STD3_mapped",[40,107,41]],[[127259,127259],"disallowed_STD3_mapped",[40,108,41]],[[127260,127260],"disallowed_STD3_mapped",[40,109,41]],[[127261,127261],"disallowed_STD3_mapped",[40,110,41]],[[127262,127262],"disallowed_STD3_mapped",[40,111,41]],[[127263,127263],"disallowed_STD3_mapped",[40,112,41]],[[127264,127264],"disallowed_STD3_mapped",[40,113,41]],[[127265,127265],"disallowed_STD3_mapped",[40,114,41]],[[127266,127266],"disallowed_STD3_mapped",[40,115,41]],[[127267,127267],"disallowed_STD3_mapped",[40,116,41]],[[127268,127268],"disallowed_STD3_mapped",[40,117,41]],[[127269,127269],"disallowed_STD3_mapped",[40,118,41]],[[127270,127270],"disallowed_STD3_mapped",[40,119,41]],[[127271,127271],"disallowed_STD3_mapped",[40,120,41]],[[127272,127272],"disallowed_STD3_mapped",[40,121,41]],[[127273,127273],"disallowed_STD3_mapped",[40,122,41]],[[127274,127274],"mapped",[12308,115,12309]],[[127275,127275],"mapped",[99]],[[127276,127276],"mapped",[114]],[[127277,127277],"mapped",[99,100]],[[127278,127278],"mapped",[119,122]],[[127279,127279],"disallowed"],[[127280,127280],"mapped",[97]],[[127281,127281],"mapped",[98]],[[127282,127282],"mapped",[99]],[[127283,127283],"mapped",[100]],[[127284,127284],"mapped",[101]],[[127285,127285],"mapped",[102]],[[127286,127286],"mapped",[103]],[[127287,127287],"mapped",[104]],[[127288,127288],"mapped",[105]],[[127289,127289],"mapped",[106]],[[127290,127290],"mapped",[107]],[[127291,127291],"mapped",[108]],[[127292,127292],"mapped",[109]],[[127293,127293],"mapped",[110]],[[127294,127294],"mapped",[111]],[[127295,127295],"mapped",[112]],[[127296,127296],"mapped",[113]],[[127297,127297],"mapped",[114]],[[127298,127298],"mapped",[115]],[[127299,127299],"mapped",[116]],[[127300,127300],"mapped",[117]],[[127301,127301],"mapped",[118]],[[127302,127302],"mapped",[119]],[[127303,127303],"mapped",[120]],[[127304,127304],"mapped",[121]],[[127305,127305],"mapped",[122]],[[127306,127306],"mapped",[104,118]],[[127307,127307],"mapped",[109,118]],[[127308,127308],"mapped",[115,100]],[[127309,127309],"mapped",[115,115]],[[127310,127310],"mapped",[112,112,118]],[[127311,127311],"mapped",[119,99]],[[127312,127318],"valid",[],"NV8"],[[127319,127319],"valid",[],"NV8"],[[127320,127326],"valid",[],"NV8"],[[127327,127327],"valid",[],"NV8"],[[127328,127337],"valid",[],"NV8"],[[127338,127338],"mapped",[109,99]],[[127339,127339],"mapped",[109,100]],[[127340,127343],"disallowed"],[[127344,127352],"valid",[],"NV8"],[[127353,127353],"valid",[],"NV8"],[[127354,127354],"valid",[],"NV8"],[[127355,127356],"valid",[],"NV8"],[[127357,127358],"valid",[],"NV8"],[[127359,127359],"valid",[],"NV8"],[[127360,127369],"valid",[],"NV8"],[[127370,127373],"valid",[],"NV8"],[[127374,127375],"valid",[],"NV8"],[[127376,127376],"mapped",[100,106]],[[127377,127386],"valid",[],"NV8"],[[127387,127461],"disallowed"],[[127462,127487],"valid",[],"NV8"],[[127488,127488],"mapped",[12411,12363]],[[127489,127489],"mapped",[12467,12467]],[[127490,127490],"mapped",[12469]],[[127491,127503],"disallowed"],[[127504,127504],"mapped",[25163]],[[127505,127505],"mapped",[23383]],[[127506,127506],"mapped",[21452]],[[127507,127507],"mapped",[12487]],[[127508,127508],"mapped",[20108]],[[127509,127509],"mapped",[22810]],[[127510,127510],"mapped",[35299]],[[127511,127511],"mapped",[22825]],[[127512,127512],"mapped",[20132]],[[127513,127513],"mapped",[26144]],[[127514,127514],"mapped",[28961]],[[127515,127515],"mapped",[26009]],[[127516,127516],"mapped",[21069]],[[127517,127517],"mapped",[24460]],[[127518,127518],"mapped",[20877]],[[127519,127519],"mapped",[26032]],[[127520,127520],"mapped",[21021]],[[127521,127521],"mapped",[32066]],[[127522,127522],"mapped",[29983]],[[127523,127523],"mapped",[36009]],[[127524,127524],"mapped",[22768]],[[127525,127525],"mapped",[21561]],[[127526,127526],"mapped",[28436]],[[127527,127527],"mapped",[25237]],[[127528,127528],"mapped",[25429]],[[127529,127529],"mapped",[19968]],[[127530,127530],"mapped",[19977]],[[127531,127531],"mapped",[36938]],[[127532,127532],"mapped",[24038]],[[127533,127533],"mapped",[20013]],[[127534,127534],"mapped",[21491]],[[127535,127535],"mapped",[25351]],[[127536,127536],"mapped",[36208]],[[127537,127537],"mapped",[25171]],[[127538,127538],"mapped",[31105]],[[127539,127539],"mapped",[31354]],[[127540,127540],"mapped",[21512]],[[127541,127541],"mapped",[28288]],[[127542,127542],"mapped",[26377]],[[127543,127543],"mapped",[26376]],[[127544,127544],"mapped",[30003]],[[127545,127545],"mapped",[21106]],[[127546,127546],"mapped",[21942]],[[127547,127551],"disallowed"],[[127552,127552],"mapped",[12308,26412,12309]],[[127553,127553],"mapped",[12308,19977,12309]],[[127554,127554],"mapped",[12308,20108,12309]],[[127555,127555],"mapped",[12308,23433,12309]],[[127556,127556],"mapped",[12308,28857,12309]],[[127557,127557],"mapped",[12308,25171,12309]],[[127558,127558],"mapped",[12308,30423,12309]],[[127559,127559],"mapped",[12308,21213,12309]],[[127560,127560],"mapped",[12308,25943,12309]],[[127561,127567],"disallowed"],[[127568,127568],"mapped",[24471]],[[127569,127569],"mapped",[21487]],[[127570,127743],"disallowed"],[[127744,127776],"valid",[],"NV8"],[[127777,127788],"valid",[],"NV8"],[[127789,127791],"valid",[],"NV8"],[[127792,127797],"valid",[],"NV8"],[[127798,127798],"valid",[],"NV8"],[[127799,127868],"valid",[],"NV8"],[[127869,127869],"valid",[],"NV8"],[[127870,127871],"valid",[],"NV8"],[[127872,127891],"valid",[],"NV8"],[[127892,127903],"valid",[],"NV8"],[[127904,127940],"valid",[],"NV8"],[[127941,127941],"valid",[],"NV8"],[[127942,127946],"valid",[],"NV8"],[[127947,127950],"valid",[],"NV8"],[[127951,127955],"valid",[],"NV8"],[[127956,127967],"valid",[],"NV8"],[[127968,127984],"valid",[],"NV8"],[[127985,127991],"valid",[],"NV8"],[[127992,127999],"valid",[],"NV8"],[[128000,128062],"valid",[],"NV8"],[[128063,128063],"valid",[],"NV8"],[[128064,128064],"valid",[],"NV8"],[[128065,128065],"valid",[],"NV8"],[[128066,128247],"valid",[],"NV8"],[[128248,128248],"valid",[],"NV8"],[[128249,128252],"valid",[],"NV8"],[[128253,128254],"valid",[],"NV8"],[[128255,128255],"valid",[],"NV8"],[[128256,128317],"valid",[],"NV8"],[[128318,128319],"valid",[],"NV8"],[[128320,128323],"valid",[],"NV8"],[[128324,128330],"valid",[],"NV8"],[[128331,128335],"valid",[],"NV8"],[[128336,128359],"valid",[],"NV8"],[[128360,128377],"valid",[],"NV8"],[[128378,128378],"disallowed"],[[128379,128419],"valid",[],"NV8"],[[128420,128420],"disallowed"],[[128421,128506],"valid",[],"NV8"],[[128507,128511],"valid",[],"NV8"],[[128512,128512],"valid",[],"NV8"],[[128513,128528],"valid",[],"NV8"],[[128529,128529],"valid",[],"NV8"],[[128530,128532],"valid",[],"NV8"],[[128533,128533],"valid",[],"NV8"],[[128534,128534],"valid",[],"NV8"],[[128535,128535],"valid",[],"NV8"],[[128536,128536],"valid",[],"NV8"],[[128537,128537],"valid",[],"NV8"],[[128538,128538],"valid",[],"NV8"],[[128539,128539],"valid",[],"NV8"],[[128540,128542],"valid",[],"NV8"],[[128543,128543],"valid",[],"NV8"],[[128544,128549],"valid",[],"NV8"],[[128550,128551],"valid",[],"NV8"],[[128552,128555],"valid",[],"NV8"],[[128556,128556],"valid",[],"NV8"],[[128557,128557],"valid",[],"NV8"],[[128558,128559],"valid",[],"NV8"],[[128560,128563],"valid",[],"NV8"],[[128564,128564],"valid",[],"NV8"],[[128565,128576],"valid",[],"NV8"],[[128577,128578],"valid",[],"NV8"],[[128579,128580],"valid",[],"NV8"],[[128581,128591],"valid",[],"NV8"],[[128592,128639],"valid",[],"NV8"],[[128640,128709],"valid",[],"NV8"],[[128710,128719],"valid",[],"NV8"],[[128720,128720],"valid",[],"NV8"],[[128721,128735],"disallowed"],[[128736,128748],"valid",[],"NV8"],[[128749,128751],"disallowed"],[[128752,128755],"valid",[],"NV8"],[[128756,128767],"disallowed"],[[128768,128883],"valid",[],"NV8"],[[128884,128895],"disallowed"],[[128896,128980],"valid",[],"NV8"],[[128981,129023],"disallowed"],[[129024,129035],"valid",[],"NV8"],[[129036,129039],"disallowed"],[[129040,129095],"valid",[],"NV8"],[[129096,129103],"disallowed"],[[129104,129113],"valid",[],"NV8"],[[129114,129119],"disallowed"],[[129120,129159],"valid",[],"NV8"],[[129160,129167],"disallowed"],[[129168,129197],"valid",[],"NV8"],[[129198,129295],"disallowed"],[[129296,129304],"valid",[],"NV8"],[[129305,129407],"disallowed"],[[129408,129412],"valid",[],"NV8"],[[129413,129471],"disallowed"],[[129472,129472],"valid",[],"NV8"],[[129473,131069],"disallowed"],[[131070,131071],"disallowed"],[[131072,173782],"valid"],[[173783,173823],"disallowed"],[[173824,177972],"valid"],[[177973,177983],"disallowed"],[[177984,178205],"valid"],[[178206,178207],"disallowed"],[[178208,183969],"valid"],[[183970,194559],"disallowed"],[[194560,194560],"mapped",[20029]],[[194561,194561],"mapped",[20024]],[[194562,194562],"mapped",[20033]],[[194563,194563],"mapped",[131362]],[[194564,194564],"mapped",[20320]],[[194565,194565],"mapped",[20398]],[[194566,194566],"mapped",[20411]],[[194567,194567],"mapped",[20482]],[[194568,194568],"mapped",[20602]],[[194569,194569],"mapped",[20633]],[[194570,194570],"mapped",[20711]],[[194571,194571],"mapped",[20687]],[[194572,194572],"mapped",[13470]],[[194573,194573],"mapped",[132666]],[[194574,194574],"mapped",[20813]],[[194575,194575],"mapped",[20820]],[[194576,194576],"mapped",[20836]],[[194577,194577],"mapped",[20855]],[[194578,194578],"mapped",[132380]],[[194579,194579],"mapped",[13497]],[[194580,194580],"mapped",[20839]],[[194581,194581],"mapped",[20877]],[[194582,194582],"mapped",[132427]],[[194583,194583],"mapped",[20887]],[[194584,194584],"mapped",[20900]],[[194585,194585],"mapped",[20172]],[[194586,194586],"mapped",[20908]],[[194587,194587],"mapped",[20917]],[[194588,194588],"mapped",[168415]],[[194589,194589],"mapped",[20981]],[[194590,194590],"mapped",[20995]],[[194591,194591],"mapped",[13535]],[[194592,194592],"mapped",[21051]],[[194593,194593],"mapped",[21062]],[[194594,194594],"mapped",[21106]],[[194595,194595],"mapped",[21111]],[[194596,194596],"mapped",[13589]],[[194597,194597],"mapped",[21191]],[[194598,194598],"mapped",[21193]],[[194599,194599],"mapped",[21220]],[[194600,194600],"mapped",[21242]],[[194601,194601],"mapped",[21253]],[[194602,194602],"mapped",[21254]],[[194603,194603],"mapped",[21271]],[[194604,194604],"mapped",[21321]],[[194605,194605],"mapped",[21329]],[[194606,194606],"mapped",[21338]],[[194607,194607],"mapped",[21363]],[[194608,194608],"mapped",[21373]],[[194609,194611],"mapped",[21375]],[[194612,194612],"mapped",[133676]],[[194613,194613],"mapped",[28784]],[[194614,194614],"mapped",[21450]],[[194615,194615],"mapped",[21471]],[[194616,194616],"mapped",[133987]],[[194617,194617],"mapped",[21483]],[[194618,194618],"mapped",[21489]],[[194619,194619],"mapped",[21510]],[[194620,194620],"mapped",[21662]],[[194621,194621],"mapped",[21560]],[[194622,194622],"mapped",[21576]],[[194623,194623],"mapped",[21608]],[[194624,194624],"mapped",[21666]],[[194625,194625],"mapped",[21750]],[[194626,194626],"mapped",[21776]],[[194627,194627],"mapped",[21843]],[[194628,194628],"mapped",[21859]],[[194629,194630],"mapped",[21892]],[[194631,194631],"mapped",[21913]],[[194632,194632],"mapped",[21931]],[[194633,194633],"mapped",[21939]],[[194634,194634],"mapped",[21954]],[[194635,194635],"mapped",[22294]],[[194636,194636],"mapped",[22022]],[[194637,194637],"mapped",[22295]],[[194638,194638],"mapped",[22097]],[[194639,194639],"mapped",[22132]],[[194640,194640],"mapped",[20999]],[[194641,194641],"mapped",[22766]],[[194642,194642],"mapped",[22478]],[[194643,194643],"mapped",[22516]],[[194644,194644],"mapped",[22541]],[[194645,194645],"mapped",[22411]],[[194646,194646],"mapped",[22578]],[[194647,194647],"mapped",[22577]],[[194648,194648],"mapped",[22700]],[[194649,194649],"mapped",[136420]],[[194650,194650],"mapped",[22770]],[[194651,194651],"mapped",[22775]],[[194652,194652],"mapped",[22790]],[[194653,194653],"mapped",[22810]],[[194654,194654],"mapped",[22818]],[[194655,194655],"mapped",[22882]],[[194656,194656],"mapped",[136872]],[[194657,194657],"mapped",[136938]],[[194658,194658],"mapped",[23020]],[[194659,194659],"mapped",[23067]],[[194660,194660],"mapped",[23079]],[[194661,194661],"mapped",[23000]],[[194662,194662],"mapped",[23142]],[[194663,194663],"mapped",[14062]],[[194664,194664],"disallowed"],[[194665,194665],"mapped",[23304]],[[194666,194667],"mapped",[23358]],[[194668,194668],"mapped",[137672]],[[194669,194669],"mapped",[23491]],[[194670,194670],"mapped",[23512]],[[194671,194671],"mapped",[23527]],[[194672,194672],"mapped",[23539]],[[194673,194673],"mapped",[138008]],[[194674,194674],"mapped",[23551]],[[194675,194675],"mapped",[23558]],[[194676,194676],"disallowed"],[[194677,194677],"mapped",[23586]],[[194678,194678],"mapped",[14209]],[[194679,194679],"mapped",[23648]],[[194680,194680],"mapped",[23662]],[[194681,194681],"mapped",[23744]],[[194682,194682],"mapped",[23693]],[[194683,194683],"mapped",[138724]],[[194684,194684],"mapped",[23875]],[[194685,194685],"mapped",[138726]],[[194686,194686],"mapped",[23918]],[[194687,194687],"mapped",[23915]],[[194688,194688],"mapped",[23932]],[[194689,194689],"mapped",[24033]],[[194690,194690],"mapped",[24034]],[[194691,194691],"mapped",[14383]],[[194692,194692],"mapped",[24061]],[[194693,194693],"mapped",[24104]],[[194694,194694],"mapped",[24125]],[[194695,194695],"mapped",[24169]],[[194696,194696],"mapped",[14434]],[[194697,194697],"mapped",[139651]],[[194698,194698],"mapped",[14460]],[[194699,194699],"mapped",[24240]],[[194700,194700],"mapped",[24243]],[[194701,194701],"mapped",[24246]],[[194702,194702],"mapped",[24266]],[[194703,194703],"mapped",[172946]],[[194704,194704],"mapped",[24318]],[[194705,194706],"mapped",[140081]],[[194707,194707],"mapped",[33281]],[[194708,194709],"mapped",[24354]],[[194710,194710],"mapped",[14535]],[[194711,194711],"mapped",[144056]],[[194712,194712],"mapped",[156122]],[[194713,194713],"mapped",[24418]],[[194714,194714],"mapped",[24427]],[[194715,194715],"mapped",[14563]],[[194716,194716],"mapped",[24474]],[[194717,194717],"mapped",[24525]],[[194718,194718],"mapped",[24535]],[[194719,194719],"mapped",[24569]],[[194720,194720],"mapped",[24705]],[[194721,194721],"mapped",[14650]],[[194722,194722],"mapped",[14620]],[[194723,194723],"mapped",[24724]],[[194724,194724],"mapped",[141012]],[[194725,194725],"mapped",[24775]],[[194726,194726],"mapped",[24904]],[[194727,194727],"mapped",[24908]],[[194728,194728],"mapped",[24910]],[[194729,194729],"mapped",[24908]],[[194730,194730],"mapped",[24954]],[[194731,194731],"mapped",[24974]],[[194732,194732],"mapped",[25010]],[[194733,194733],"mapped",[24996]],[[194734,194734],"mapped",[25007]],[[194735,194735],"mapped",[25054]],[[194736,194736],"mapped",[25074]],[[194737,194737],"mapped",[25078]],[[194738,194738],"mapped",[25104]],[[194739,194739],"mapped",[25115]],[[194740,194740],"mapped",[25181]],[[194741,194741],"mapped",[25265]],[[194742,194742],"mapped",[25300]],[[194743,194743],"mapped",[25424]],[[194744,194744],"mapped",[142092]],[[194745,194745],"mapped",[25405]],[[194746,194746],"mapped",[25340]],[[194747,194747],"mapped",[25448]],[[194748,194748],"mapped",[25475]],[[194749,194749],"mapped",[25572]],[[194750,194750],"mapped",[142321]],[[194751,194751],"mapped",[25634]],[[194752,194752],"mapped",[25541]],[[194753,194753],"mapped",[25513]],[[194754,194754],"mapped",[14894]],[[194755,194755],"mapped",[25705]],[[194756,194756],"mapped",[25726]],[[194757,194757],"mapped",[25757]],[[194758,194758],"mapped",[25719]],[[194759,194759],"mapped",[14956]],[[194760,194760],"mapped",[25935]],[[194761,194761],"mapped",[25964]],[[194762,194762],"mapped",[143370]],[[194763,194763],"mapped",[26083]],[[194764,194764],"mapped",[26360]],[[194765,194765],"mapped",[26185]],[[194766,194766],"mapped",[15129]],[[194767,194767],"mapped",[26257]],[[194768,194768],"mapped",[15112]],[[194769,194769],"mapped",[15076]],[[194770,194770],"mapped",[20882]],[[194771,194771],"mapped",[20885]],[[194772,194772],"mapped",[26368]],[[194773,194773],"mapped",[26268]],[[194774,194774],"mapped",[32941]],[[194775,194775],"mapped",[17369]],[[194776,194776],"mapped",[26391]],[[194777,194777],"mapped",[26395]],[[194778,194778],"mapped",[26401]],[[194779,194779],"mapped",[26462]],[[194780,194780],"mapped",[26451]],[[194781,194781],"mapped",[144323]],[[194782,194782],"mapped",[15177]],[[194783,194783],"mapped",[26618]],[[194784,194784],"mapped",[26501]],[[194785,194785],"mapped",[26706]],[[194786,194786],"mapped",[26757]],[[194787,194787],"mapped",[144493]],[[194788,194788],"mapped",[26766]],[[194789,194789],"mapped",[26655]],[[194790,194790],"mapped",[26900]],[[194791,194791],"mapped",[15261]],[[194792,194792],"mapped",[26946]],[[194793,194793],"mapped",[27043]],[[194794,194794],"mapped",[27114]],[[194795,194795],"mapped",[27304]],[[194796,194796],"mapped",[145059]],[[194797,194797],"mapped",[27355]],[[194798,194798],"mapped",[15384]],[[194799,194799],"mapped",[27425]],[[194800,194800],"mapped",[145575]],[[194801,194801],"mapped",[27476]],[[194802,194802],"mapped",[15438]],[[194803,194803],"mapped",[27506]],[[194804,194804],"mapped",[27551]],[[194805,194805],"mapped",[27578]],[[194806,194806],"mapped",[27579]],[[194807,194807],"mapped",[146061]],[[194808,194808],"mapped",[138507]],[[194809,194809],"mapped",[146170]],[[194810,194810],"mapped",[27726]],[[194811,194811],"mapped",[146620]],[[194812,194812],"mapped",[27839]],[[194813,194813],"mapped",[27853]],[[194814,194814],"mapped",[27751]],[[194815,194815],"mapped",[27926]],[[194816,194816],"mapped",[27966]],[[194817,194817],"mapped",[28023]],[[194818,194818],"mapped",[27969]],[[194819,194819],"mapped",[28009]],[[194820,194820],"mapped",[28024]],[[194821,194821],"mapped",[28037]],[[194822,194822],"mapped",[146718]],[[194823,194823],"mapped",[27956]],[[194824,194824],"mapped",[28207]],[[194825,194825],"mapped",[28270]],[[194826,194826],"mapped",[15667]],[[194827,194827],"mapped",[28363]],[[194828,194828],"mapped",[28359]],[[194829,194829],"mapped",[147153]],[[194830,194830],"mapped",[28153]],[[194831,194831],"mapped",[28526]],[[194832,194832],"mapped",[147294]],[[194833,194833],"mapped",[147342]],[[194834,194834],"mapped",[28614]],[[194835,194835],"mapped",[28729]],[[194836,194836],"mapped",[28702]],[[194837,194837],"mapped",[28699]],[[194838,194838],"mapped",[15766]],[[194839,194839],"mapped",[28746]],[[194840,194840],"mapped",[28797]],[[194841,194841],"mapped",[28791]],[[194842,194842],"mapped",[28845]],[[194843,194843],"mapped",[132389]],[[194844,194844],"mapped",[28997]],[[194845,194845],"mapped",[148067]],[[194846,194846],"mapped",[29084]],[[194847,194847],"disallowed"],[[194848,194848],"mapped",[29224]],[[194849,194849],"mapped",[29237]],[[194850,194850],"mapped",[29264]],[[194851,194851],"mapped",[149000]],[[194852,194852],"mapped",[29312]],[[194853,194853],"mapped",[29333]],[[194854,194854],"mapped",[149301]],[[194855,194855],"mapped",[149524]],[[194856,194856],"mapped",[29562]],[[194857,194857],"mapped",[29579]],[[194858,194858],"mapped",[16044]],[[194859,194859],"mapped",[29605]],[[194860,194861],"mapped",[16056]],[[194862,194862],"mapped",[29767]],[[194863,194863],"mapped",[29788]],[[194864,194864],"mapped",[29809]],[[194865,194865],"mapped",[29829]],[[194866,194866],"mapped",[29898]],[[194867,194867],"mapped",[16155]],[[194868,194868],"mapped",[29988]],[[194869,194869],"mapped",[150582]],[[194870,194870],"mapped",[30014]],[[194871,194871],"mapped",[150674]],[[194872,194872],"mapped",[30064]],[[194873,194873],"mapped",[139679]],[[194874,194874],"mapped",[30224]],[[194875,194875],"mapped",[151457]],[[194876,194876],"mapped",[151480]],[[194877,194877],"mapped",[151620]],[[194878,194878],"mapped",[16380]],[[194879,194879],"mapped",[16392]],[[194880,194880],"mapped",[30452]],[[194881,194881],"mapped",[151795]],[[194882,194882],"mapped",[151794]],[[194883,194883],"mapped",[151833]],[[194884,194884],"mapped",[151859]],[[194885,194885],"mapped",[30494]],[[194886,194887],"mapped",[30495]],[[194888,194888],"mapped",[30538]],[[194889,194889],"mapped",[16441]],[[194890,194890],"mapped",[30603]],[[194891,194891],"mapped",[16454]],[[194892,194892],"mapped",[16534]],[[194893,194893],"mapped",[152605]],[[194894,194894],"mapped",[30798]],[[194895,194895],"mapped",[30860]],[[194896,194896],"mapped",[30924]],[[194897,194897],"mapped",[16611]],[[194898,194898],"mapped",[153126]],[[194899,194899],"mapped",[31062]],[[194900,194900],"mapped",[153242]],[[194901,194901],"mapped",[153285]],[[194902,194902],"mapped",[31119]],[[194903,194903],"mapped",[31211]],[[194904,194904],"mapped",[16687]],[[194905,194905],"mapped",[31296]],[[194906,194906],"mapped",[31306]],[[194907,194907],"mapped",[31311]],[[194908,194908],"mapped",[153980]],[[194909,194910],"mapped",[154279]],[[194911,194911],"disallowed"],[[194912,194912],"mapped",[16898]],[[194913,194913],"mapped",[154539]],[[194914,194914],"mapped",[31686]],[[194915,194915],"mapped",[31689]],[[194916,194916],"mapped",[16935]],[[194917,194917],"mapped",[154752]],[[194918,194918],"mapped",[31954]],[[194919,194919],"mapped",[17056]],[[194920,194920],"mapped",[31976]],[[194921,194921],"mapped",[31971]],[[194922,194922],"mapped",[32000]],[[194923,194923],"mapped",[155526]],[[194924,194924],"mapped",[32099]],[[194925,194925],"mapped",[17153]],[[194926,194926],"mapped",[32199]],[[194927,194927],"mapped",[32258]],[[194928,194928],"mapped",[32325]],[[194929,194929],"mapped",[17204]],[[194930,194930],"mapped",[156200]],[[194931,194931],"mapped",[156231]],[[194932,194932],"mapped",[17241]],[[194933,194933],"mapped",[156377]],[[194934,194934],"mapped",[32634]],[[194935,194935],"mapped",[156478]],[[194936,194936],"mapped",[32661]],[[194937,194937],"mapped",[32762]],[[194938,194938],"mapped",[32773]],[[194939,194939],"mapped",[156890]],[[194940,194940],"mapped",[156963]],[[194941,194941],"mapped",[32864]],[[194942,194942],"mapped",[157096]],[[194943,194943],"mapped",[32880]],[[194944,194944],"mapped",[144223]],[[194945,194945],"mapped",[17365]],[[194946,194946],"mapped",[32946]],[[194947,194947],"mapped",[33027]],[[194948,194948],"mapped",[17419]],[[194949,194949],"mapped",[33086]],[[194950,194950],"mapped",[23221]],[[194951,194951],"mapped",[157607]],[[194952,194952],"mapped",[157621]],[[194953,194953],"mapped",[144275]],[[194954,194954],"mapped",[144284]],[[194955,194955],"mapped",[33281]],[[194956,194956],"mapped",[33284]],[[194957,194957],"mapped",[36766]],[[194958,194958],"mapped",[17515]],[[194959,194959],"mapped",[33425]],[[194960,194960],"mapped",[33419]],[[194961,194961],"mapped",[33437]],[[194962,194962],"mapped",[21171]],[[194963,194963],"mapped",[33457]],[[194964,194964],"mapped",[33459]],[[194965,194965],"mapped",[33469]],[[194966,194966],"mapped",[33510]],[[194967,194967],"mapped",[158524]],[[194968,194968],"mapped",[33509]],[[194969,194969],"mapped",[33565]],[[194970,194970],"mapped",[33635]],[[194971,194971],"mapped",[33709]],[[194972,194972],"mapped",[33571]],[[194973,194973],"mapped",[33725]],[[194974,194974],"mapped",[33767]],[[194975,194975],"mapped",[33879]],[[194976,194976],"mapped",[33619]],[[194977,194977],"mapped",[33738]],[[194978,194978],"mapped",[33740]],[[194979,194979],"mapped",[33756]],[[194980,194980],"mapped",[158774]],[[194981,194981],"mapped",[159083]],[[194982,194982],"mapped",[158933]],[[194983,194983],"mapped",[17707]],[[194984,194984],"mapped",[34033]],[[194985,194985],"mapped",[34035]],[[194986,194986],"mapped",[34070]],[[194987,194987],"mapped",[160714]],[[194988,194988],"mapped",[34148]],[[194989,194989],"mapped",[159532]],[[194990,194990],"mapped",[17757]],[[194991,194991],"mapped",[17761]],[[194992,194992],"mapped",[159665]],[[194993,194993],"mapped",[159954]],[[194994,194994],"mapped",[17771]],[[194995,194995],"mapped",[34384]],[[194996,194996],"mapped",[34396]],[[194997,194997],"mapped",[34407]],[[194998,194998],"mapped",[34409]],[[194999,194999],"mapped",[34473]],[[195000,195000],"mapped",[34440]],[[195001,195001],"mapped",[34574]],[[195002,195002],"mapped",[34530]],[[195003,195003],"mapped",[34681]],[[195004,195004],"mapped",[34600]],[[195005,195005],"mapped",[34667]],[[195006,195006],"mapped",[34694]],[[195007,195007],"disallowed"],[[195008,195008],"mapped",[34785]],[[195009,195009],"mapped",[34817]],[[195010,195010],"mapped",[17913]],[[195011,195011],"mapped",[34912]],[[195012,195012],"mapped",[34915]],[[195013,195013],"mapped",[161383]],[[195014,195014],"mapped",[35031]],[[195015,195015],"mapped",[35038]],[[195016,195016],"mapped",[17973]],[[195017,195017],"mapped",[35066]],[[195018,195018],"mapped",[13499]],[[195019,195019],"mapped",[161966]],[[195020,195020],"mapped",[162150]],[[195021,195021],"mapped",[18110]],[[195022,195022],"mapped",[18119]],[[195023,195023],"mapped",[35488]],[[195024,195024],"mapped",[35565]],[[195025,195025],"mapped",[35722]],[[195026,195026],"mapped",[35925]],[[195027,195027],"mapped",[162984]],[[195028,195028],"mapped",[36011]],[[195029,195029],"mapped",[36033]],[[195030,195030],"mapped",[36123]],[[195031,195031],"mapped",[36215]],[[195032,195032],"mapped",[163631]],[[195033,195033],"mapped",[133124]],[[195034,195034],"mapped",[36299]],[[195035,195035],"mapped",[36284]],[[195036,195036],"mapped",[36336]],[[195037,195037],"mapped",[133342]],[[195038,195038],"mapped",[36564]],[[195039,195039],"mapped",[36664]],[[195040,195040],"mapped",[165330]],[[195041,195041],"mapped",[165357]],[[195042,195042],"mapped",[37012]],[[195043,195043],"mapped",[37105]],[[195044,195044],"mapped",[37137]],[[195045,195045],"mapped",[165678]],[[195046,195046],"mapped",[37147]],[[195047,195047],"mapped",[37432]],[[195048,195048],"mapped",[37591]],[[195049,195049],"mapped",[37592]],[[195050,195050],"mapped",[37500]],[[195051,195051],"mapped",[37881]],[[195052,195052],"mapped",[37909]],[[195053,195053],"mapped",[166906]],[[195054,195054],"mapped",[38283]],[[195055,195055],"mapped",[18837]],[[195056,195056],"mapped",[38327]],[[195057,195057],"mapped",[167287]],[[195058,195058],"mapped",[18918]],[[195059,195059],"mapped",[38595]],[[195060,195060],"mapped",[23986]],[[195061,195061],"mapped",[38691]],[[195062,195062],"mapped",[168261]],[[195063,195063],"mapped",[168474]],[[195064,195064],"mapped",[19054]],[[195065,195065],"mapped",[19062]],[[195066,195066],"mapped",[38880]],[[195067,195067],"mapped",[168970]],[[195068,195068],"mapped",[19122]],[[195069,195069],"mapped",[169110]],[[195070,195071],"mapped",[38923]],[[195072,195072],"mapped",[38953]],[[195073,195073],"mapped",[169398]],[[195074,195074],"mapped",[39138]],[[195075,195075],"mapped",[19251]],[[195076,195076],"mapped",[39209]],[[195077,195077],"mapped",[39335]],[[195078,195078],"mapped",[39362]],[[195079,195079],"mapped",[39422]],[[195080,195080],"mapped",[19406]],[[195081,195081],"mapped",[170800]],[[195082,195082],"mapped",[39698]],[[195083,195083],"mapped",[40000]],[[195084,195084],"mapped",[40189]],[[195085,195085],"mapped",[19662]],[[195086,195086],"mapped",[19693]],[[195087,195087],"mapped",[40295]],[[195088,195088],"mapped",[172238]],[[195089,195089],"mapped",[19704]],[[195090,195090],"mapped",[172293]],[[195091,195091],"mapped",[172558]],[[195092,195092],"mapped",[172689]],[[195093,195093],"mapped",[40635]],[[195094,195094],"mapped",[19798]],[[195095,195095],"mapped",[40697]],[[195096,195096],"mapped",[40702]],[[195097,195097],"mapped",[40709]],[[195098,195098],"mapped",[40719]],[[195099,195099],"mapped",[40726]],[[195100,195100],"mapped",[40763]],[[195101,195101],"mapped",[173568]],[[195102,196605],"disallowed"],[[196606,196607],"disallowed"],[[196608,262141],"disallowed"],[[262142,262143],"disallowed"],[[262144,327677],"disallowed"],[[327678,327679],"disallowed"],[[327680,393213],"disallowed"],[[393214,393215],"disallowed"],[[393216,458749],"disallowed"],[[458750,458751],"disallowed"],[[458752,524285],"disallowed"],[[524286,524287],"disallowed"],[[524288,589821],"disallowed"],[[589822,589823],"disallowed"],[[589824,655357],"disallowed"],[[655358,655359],"disallowed"],[[655360,720893],"disallowed"],[[720894,720895],"disallowed"],[[720896,786429],"disallowed"],[[786430,786431],"disallowed"],[[786432,851965],"disallowed"],[[851966,851967],"disallowed"],[[851968,917501],"disallowed"],[[917502,917503],"disallowed"],[[917504,917504],"disallowed"],[[917505,917505],"disallowed"],[[917506,917535],"disallowed"],[[917536,917631],"disallowed"],[[917632,917759],"disallowed"],[[917760,917999],"ignored"],[[918000,983037],"disallowed"],[[983038,983039],"disallowed"],[[983040,1048573],"disallowed"],[[1048574,1048575],"disallowed"],[[1048576,1114109],"disallowed"],[[1114110,1114111],"disallowed"]]'
);
var hasRequiredTr46;
function requireTr46() {
  if (hasRequiredTr46) return tr46;
  hasRequiredTr46 = 1;
  var punycode = require$$0$4;
  var mappingTable = require$$1$1;
  var PROCESSING_OPTIONS = {
    TRANSITIONAL: 0,
    NONTRANSITIONAL: 1,
  };
  function normalize(str) {
    return str
      .split("\0")
      .map(function (s) {
        return s.normalize("NFC");
      })
      .join("\0");
  }
  function findStatus(val) {
    var start = 0;
    var end = mappingTable.length - 1;
    while (start <= end) {
      var mid = Math.floor((start + end) / 2);
      var target = mappingTable[mid];
      if (target[0][0] <= val && target[0][1] >= val) {
        return target;
      } else if (target[0][0] > val) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return null;
  }
  var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  function countSymbols(string) {
    return string.replace(regexAstralSymbols, "_").length;
  }
  function mapChars(domain_name, useSTD3, processing_option) {
    var hasError = false;
    var processed = "";
    var len = countSymbols(domain_name);
    for (var i = 0; i < len; ++i) {
      var codePoint = domain_name.codePointAt(i);
      var status = findStatus(codePoint);
      switch (status[1]) {
        case "disallowed":
          hasError = true;
          processed += String.fromCodePoint(codePoint);
          break;
        case "ignored":
          break;
        case "mapped":
          processed += String.fromCodePoint.apply(String, status[2]);
          break;
        case "deviation":
          if (processing_option === PROCESSING_OPTIONS.TRANSITIONAL) {
            processed += String.fromCodePoint.apply(String, status[2]);
          } else {
            processed += String.fromCodePoint(codePoint);
          }
          break;
        case "valid":
          processed += String.fromCodePoint(codePoint);
          break;
        case "disallowed_STD3_mapped":
          if (useSTD3) {
            hasError = true;
            processed += String.fromCodePoint(codePoint);
          } else {
            processed += String.fromCodePoint.apply(String, status[2]);
          }
          break;
        case "disallowed_STD3_valid":
          if (useSTD3) {
            hasError = true;
          }
          processed += String.fromCodePoint(codePoint);
          break;
      }
    }
    return {
      string: processed,
      error: hasError,
    };
  }
  var combiningMarksRegex =
    /[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08E4-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u18A9\u1920-\u192B\u1930-\u193B\u19B0-\u19C0\u19C8\u19C9\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFC-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C4\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2D]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDE2C-\uDE37\uDEDF-\uDEEA\uDF01-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDE30-\uDE40\uDEAB-\uDEB7]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD83A[\uDCD0-\uDCD6]|\uDB40[\uDD00-\uDDEF]/;
  function validateLabel(label, processing_option) {
    if (label.substr(0, 4) === "xn--") {
      label = punycode.toUnicode(label);
      PROCESSING_OPTIONS.NONTRANSITIONAL;
    }
    var error = false;
    if (
      normalize(label) !== label ||
      (label[3] === "-" && label[4] === "-") ||
      label[0] === "-" ||
      label[label.length - 1] === "-" ||
      label.indexOf(".") !== -1 ||
      label.search(combiningMarksRegex) === 0
    ) {
      error = true;
    }
    var len = countSymbols(label);
    for (var i = 0; i < len; ++i) {
      var status = findStatus(label.codePointAt(i));
      if (
        (processing === PROCESSING_OPTIONS.TRANSITIONAL &&
          status[1] !== "valid") ||
        (processing === PROCESSING_OPTIONS.NONTRANSITIONAL &&
          status[1] !== "valid" &&
          status[1] !== "deviation")
      ) {
        error = true;
        break;
      }
    }
    return {
      label,
      error,
    };
  }
  function processing(domain_name, useSTD3, processing_option) {
    var result = mapChars(domain_name, useSTD3, processing_option);
    result.string = normalize(result.string);
    var labels = result.string.split(".");
    for (var i = 0; i < labels.length; ++i) {
      try {
        var validation2 = validateLabel(labels[i]);
        labels[i] = validation2.label;
        result.error = result.error || validation2.error;
      } catch (e) {
        result.error = true;
      }
    }
    return {
      string: labels.join("."),
      error: result.error,
    };
  }
  tr46.toASCII = function (
    domain_name,
    useSTD3,
    processing_option,
    verifyDnsLength
  ) {
    var result = processing(domain_name, useSTD3, processing_option);
    var labels = result.string.split(".");
    labels = labels.map(function (l) {
      try {
        return punycode.toASCII(l);
      } catch (e) {
        result.error = true;
        return l;
      }
    });
    if (verifyDnsLength) {
      var total = labels.slice(0, labels.length - 1).join(".").length;
      if (total.length > 253 || total.length === 0) {
        result.error = true;
      }
      for (var i = 0; i < labels.length; ++i) {
        if (labels.length > 63 || labels.length === 0) {
          result.error = true;
          break;
        }
      }
    }
    if (result.error) return null;
    return labels.join(".");
  };
  tr46.toUnicode = function (domain_name, useSTD3) {
    var result = processing(
      domain_name,
      useSTD3,
      PROCESSING_OPTIONS.NONTRANSITIONAL
    );
    return {
      domain: result.string,
      error: result.error,
    };
  };
  tr46.PROCESSING_OPTIONS = PROCESSING_OPTIONS;
  return tr46;
}
var hasRequiredUrlStateMachine;
function requireUrlStateMachine() {
  if (hasRequiredUrlStateMachine) return urlStateMachine.exports;
  hasRequiredUrlStateMachine = 1;
  (function (module2) {
    const punycode = require$$0$4;
    const tr462 = requireTr46();
    const specialSchemes = {
      ftp: 21,
      file: null,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443,
    };
    const failure = Symbol("failure");
    function countSymbols(str) {
      return punycode.ucs2.decode(str).length;
    }
    function at(input, idx) {
      const c = input[idx];
      return isNaN(c) ? void 0 : String.fromCodePoint(c);
    }
    function isASCIIDigit(c) {
      return c >= 48 && c <= 57;
    }
    function isASCIIAlpha(c) {
      return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
    }
    function isASCIIAlphanumeric(c) {
      return isASCIIAlpha(c) || isASCIIDigit(c);
    }
    function isASCIIHex(c) {
      return isASCIIDigit(c) || (c >= 65 && c <= 70) || (c >= 97 && c <= 102);
    }
    function isSingleDot(buffer) {
      return buffer === "." || buffer.toLowerCase() === "%2e";
    }
    function isDoubleDot(buffer) {
      buffer = buffer.toLowerCase();
      return (
        buffer === ".." ||
        buffer === "%2e." ||
        buffer === ".%2e" ||
        buffer === "%2e%2e"
      );
    }
    function isWindowsDriveLetterCodePoints(cp1, cp2) {
      return isASCIIAlpha(cp1) && (cp2 === 58 || cp2 === 124);
    }
    function isWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        (string[1] === ":" || string[1] === "|")
      );
    }
    function isNormalizedWindowsDriveLetterString(string) {
      return (
        string.length === 2 &&
        isASCIIAlpha(string.codePointAt(0)) &&
        string[1] === ":"
      );
    }
    function containsForbiddenHostCodePoint(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|%|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      );
    }
    function containsForbiddenHostCodePointExcludingPercent(string) {
      return (
        string.search(
          /\u0000|\u0009|\u000A|\u000D|\u0020|#|\/|:|\?|@|\[|\\|\]/
        ) !== -1
      );
    }
    function isSpecialScheme(scheme) {
      return specialSchemes[scheme] !== void 0;
    }
    function isSpecial(url) {
      return isSpecialScheme(url.scheme);
    }
    function defaultPort(scheme) {
      return specialSchemes[scheme];
    }
    function percentEncode(c) {
      let hex = c.toString(16).toUpperCase();
      if (hex.length === 1) {
        hex = "0" + hex;
      }
      return "%" + hex;
    }
    function utf8PercentEncode(c) {
      const buf = new Buffer(c);
      let str = "";
      for (let i = 0; i < buf.length; ++i) {
        str += percentEncode(buf[i]);
      }
      return str;
    }
    function utf8PercentDecode(str) {
      const input = new Buffer(str);
      const output = [];
      for (let i = 0; i < input.length; ++i) {
        if (input[i] !== 37) {
          output.push(input[i]);
        } else if (
          input[i] === 37 &&
          isASCIIHex(input[i + 1]) &&
          isASCIIHex(input[i + 2])
        ) {
          output.push(parseInt(input.slice(i + 1, i + 3).toString(), 16));
          i += 2;
        } else {
          output.push(input[i]);
        }
      }
      return new Buffer(output).toString();
    }
    function isC0ControlPercentEncode(c) {
      return c <= 31 || c > 126;
    }
    const extraPathPercentEncodeSet = /* @__PURE__ */ new Set([
      32, 34, 35, 60, 62, 63, 96, 123, 125,
    ]);
    function isPathPercentEncode(c) {
      return isC0ControlPercentEncode(c) || extraPathPercentEncodeSet.has(c);
    }
    const extraUserinfoPercentEncodeSet = /* @__PURE__ */ new Set([
      47, 58, 59, 61, 64, 91, 92, 93, 94, 124,
    ]);
    function isUserinfoPercentEncode(c) {
      return isPathPercentEncode(c) || extraUserinfoPercentEncodeSet.has(c);
    }
    function percentEncodeChar(c, encodeSetPredicate) {
      const cStr = String.fromCodePoint(c);
      if (encodeSetPredicate(c)) {
        return utf8PercentEncode(cStr);
      }
      return cStr;
    }
    function parseIPv4Number(input) {
      let R = 10;
      if (
        input.length >= 2 &&
        input.charAt(0) === "0" &&
        input.charAt(1).toLowerCase() === "x"
      ) {
        input = input.substring(2);
        R = 16;
      } else if (input.length >= 2 && input.charAt(0) === "0") {
        input = input.substring(1);
        R = 8;
      }
      if (input === "") {
        return 0;
      }
      const regex = R === 10 ? /[^0-9]/ : R === 16 ? /[^0-9A-Fa-f]/ : /[^0-7]/;
      if (regex.test(input)) {
        return failure;
      }
      return parseInt(input, R);
    }
    function parseIPv4(input) {
      const parts = input.split(".");
      if (parts[parts.length - 1] === "") {
        if (parts.length > 1) {
          parts.pop();
        }
      }
      if (parts.length > 4) {
        return input;
      }
      const numbers = [];
      for (const part of parts) {
        if (part === "") {
          return input;
        }
        const n = parseIPv4Number(part);
        if (n === failure) {
          return input;
        }
        numbers.push(n);
      }
      for (let i = 0; i < numbers.length - 1; ++i) {
        if (numbers[i] > 255) {
          return failure;
        }
      }
      if (numbers[numbers.length - 1] >= Math.pow(256, 5 - numbers.length)) {
        return failure;
      }
      let ipv4 = numbers.pop();
      let counter = 0;
      for (const n of numbers) {
        ipv4 += n * Math.pow(256, 3 - counter);
        ++counter;
      }
      return ipv4;
    }
    function serializeIPv4(address) {
      let output = "";
      let n = address;
      for (let i = 1; i <= 4; ++i) {
        output = String(n % 256) + output;
        if (i !== 4) {
          output = "." + output;
        }
        n = Math.floor(n / 256);
      }
      return output;
    }
    function parseIPv6(input) {
      const address = [0, 0, 0, 0, 0, 0, 0, 0];
      let pieceIndex = 0;
      let compress = null;
      let pointer = 0;
      input = punycode.ucs2.decode(input);
      if (input[pointer] === 58) {
        if (input[pointer + 1] !== 58) {
          return failure;
        }
        pointer += 2;
        ++pieceIndex;
        compress = pieceIndex;
      }
      while (pointer < input.length) {
        if (pieceIndex === 8) {
          return failure;
        }
        if (input[pointer] === 58) {
          if (compress !== null) {
            return failure;
          }
          ++pointer;
          ++pieceIndex;
          compress = pieceIndex;
          continue;
        }
        let value = 0;
        let length = 0;
        while (length < 4 && isASCIIHex(input[pointer])) {
          value = value * 16 + parseInt(at(input, pointer), 16);
          ++pointer;
          ++length;
        }
        if (input[pointer] === 46) {
          if (length === 0) {
            return failure;
          }
          pointer -= length;
          if (pieceIndex > 6) {
            return failure;
          }
          let numbersSeen = 0;
          while (input[pointer] !== void 0) {
            let ipv4Piece = null;
            if (numbersSeen > 0) {
              if (input[pointer] === 46 && numbersSeen < 4) {
                ++pointer;
              } else {
                return failure;
              }
            }
            if (!isASCIIDigit(input[pointer])) {
              return failure;
            }
            while (isASCIIDigit(input[pointer])) {
              const number = parseInt(at(input, pointer));
              if (ipv4Piece === null) {
                ipv4Piece = number;
              } else if (ipv4Piece === 0) {
                return failure;
              } else {
                ipv4Piece = ipv4Piece * 10 + number;
              }
              if (ipv4Piece > 255) {
                return failure;
              }
              ++pointer;
            }
            address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
            ++numbersSeen;
            if (numbersSeen === 2 || numbersSeen === 4) {
              ++pieceIndex;
            }
          }
          if (numbersSeen !== 4) {
            return failure;
          }
          break;
        } else if (input[pointer] === 58) {
          ++pointer;
          if (input[pointer] === void 0) {
            return failure;
          }
        } else if (input[pointer] !== void 0) {
          return failure;
        }
        address[pieceIndex] = value;
        ++pieceIndex;
      }
      if (compress !== null) {
        let swaps = pieceIndex - compress;
        pieceIndex = 7;
        while (pieceIndex !== 0 && swaps > 0) {
          const temp = address[compress + swaps - 1];
          address[compress + swaps - 1] = address[pieceIndex];
          address[pieceIndex] = temp;
          --pieceIndex;
          --swaps;
        }
      } else if (compress === null && pieceIndex !== 8) {
        return failure;
      }
      return address;
    }
    function serializeIPv6(address) {
      let output = "";
      const seqResult = findLongestZeroSequence(address);
      const compress = seqResult.idx;
      let ignore0 = false;
      for (let pieceIndex = 0; pieceIndex <= 7; ++pieceIndex) {
        if (ignore0 && address[pieceIndex] === 0) {
          continue;
        } else if (ignore0) {
          ignore0 = false;
        }
        if (compress === pieceIndex) {
          const separator = pieceIndex === 0 ? "::" : ":";
          output += separator;
          ignore0 = true;
          continue;
        }
        output += address[pieceIndex].toString(16);
        if (pieceIndex !== 7) {
          output += ":";
        }
      }
      return output;
    }
    function parseHost(input, isSpecialArg) {
      if (input[0] === "[") {
        if (input[input.length - 1] !== "]") {
          return failure;
        }
        return parseIPv6(input.substring(1, input.length - 1));
      }
      if (!isSpecialArg) {
        return parseOpaqueHost(input);
      }
      const domain = utf8PercentDecode(input);
      const asciiDomain = tr462.toASCII(
        domain,
        false,
        tr462.PROCESSING_OPTIONS.NONTRANSITIONAL,
        false
      );
      if (asciiDomain === null) {
        return failure;
      }
      if (containsForbiddenHostCodePoint(asciiDomain)) {
        return failure;
      }
      const ipv4Host = parseIPv4(asciiDomain);
      if (typeof ipv4Host === "number" || ipv4Host === failure) {
        return ipv4Host;
      }
      return asciiDomain;
    }
    function parseOpaqueHost(input) {
      if (containsForbiddenHostCodePointExcludingPercent(input)) {
        return failure;
      }
      let output = "";
      const decoded = punycode.ucs2.decode(input);
      for (let i = 0; i < decoded.length; ++i) {
        output += percentEncodeChar(decoded[i], isC0ControlPercentEncode);
      }
      return output;
    }
    function findLongestZeroSequence(arr) {
      let maxIdx = null;
      let maxLen = 1;
      let currStart = null;
      let currLen = 0;
      for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== 0) {
          if (currLen > maxLen) {
            maxIdx = currStart;
            maxLen = currLen;
          }
          currStart = null;
          currLen = 0;
        } else {
          if (currStart === null) {
            currStart = i;
          }
          ++currLen;
        }
      }
      if (currLen > maxLen) {
        maxIdx = currStart;
        maxLen = currLen;
      }
      return {
        idx: maxIdx,
        len: maxLen,
      };
    }
    function serializeHost(host) {
      if (typeof host === "number") {
        return serializeIPv4(host);
      }
      if (host instanceof Array) {
        return "[" + serializeIPv6(host) + "]";
      }
      return host;
    }
    function trimControlChars(url) {
      return url.replace(
        /^[\u0000-\u001F\u0020]+|[\u0000-\u001F\u0020]+$/g,
        ""
      );
    }
    function trimTabAndNewline(url) {
      return url.replace(/\u0009|\u000A|\u000D/g, "");
    }
    function shortenPath(url) {
      const path2 = url.path;
      if (path2.length === 0) {
        return;
      }
      if (
        url.scheme === "file" &&
        path2.length === 1 &&
        isNormalizedWindowsDriveLetter(path2[0])
      ) {
        return;
      }
      path2.pop();
    }
    function includesCredentials(url) {
      return url.username !== "" || url.password !== "";
    }
    function cannotHaveAUsernamePasswordPort(url) {
      return (
        url.host === null ||
        url.host === "" ||
        url.cannotBeABaseURL ||
        url.scheme === "file"
      );
    }
    function isNormalizedWindowsDriveLetter(string) {
      return /^[A-Za-z]:$/.test(string);
    }
    function URLStateMachine(
      input,
      base,
      encodingOverride,
      url,
      stateOverride
    ) {
      this.pointer = 0;
      this.input = input;
      this.base = base || null;
      this.encodingOverride = encodingOverride || "utf-8";
      this.stateOverride = stateOverride;
      this.url = url;
      this.failure = false;
      this.parseError = false;
      if (!this.url) {
        this.url = {
          scheme: "",
          username: "",
          password: "",
          host: null,
          port: null,
          path: [],
          query: null,
          fragment: null,
          cannotBeABaseURL: false,
        };
        const res2 = trimControlChars(this.input);
        if (res2 !== this.input) {
          this.parseError = true;
        }
        this.input = res2;
      }
      const res = trimTabAndNewline(this.input);
      if (res !== this.input) {
        this.parseError = true;
      }
      this.input = res;
      this.state = stateOverride || "scheme start";
      this.buffer = "";
      this.atFlag = false;
      this.arrFlag = false;
      this.passwordTokenSeenFlag = false;
      this.input = punycode.ucs2.decode(this.input);
      for (; this.pointer <= this.input.length; ++this.pointer) {
        const c = this.input[this.pointer];
        const cStr = isNaN(c) ? void 0 : String.fromCodePoint(c);
        const ret = this["parse " + this.state](c, cStr);
        if (!ret) {
          break;
        } else if (ret === failure) {
          this.failure = true;
          break;
        }
      }
    }
    URLStateMachine.prototype["parse scheme start"] = function parseSchemeStart(
      c,
      cStr
    ) {
      if (isASCIIAlpha(c)) {
        this.buffer += cStr.toLowerCase();
        this.state = "scheme";
      } else if (!this.stateOverride) {
        this.state = "no scheme";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse scheme"] = function parseScheme(c, cStr) {
      if (isASCIIAlphanumeric(c) || c === 43 || c === 45 || c === 46) {
        this.buffer += cStr.toLowerCase();
      } else if (c === 58) {
        if (this.stateOverride) {
          if (isSpecial(this.url) && !isSpecialScheme(this.buffer)) {
            return false;
          }
          if (!isSpecial(this.url) && isSpecialScheme(this.buffer)) {
            return false;
          }
          if (
            (includesCredentials(this.url) || this.url.port !== null) &&
            this.buffer === "file"
          ) {
            return false;
          }
          if (
            this.url.scheme === "file" &&
            (this.url.host === "" || this.url.host === null)
          ) {
            return false;
          }
        }
        this.url.scheme = this.buffer;
        this.buffer = "";
        if (this.stateOverride) {
          return false;
        }
        if (this.url.scheme === "file") {
          if (
            this.input[this.pointer + 1] !== 47 ||
            this.input[this.pointer + 2] !== 47
          ) {
            this.parseError = true;
          }
          this.state = "file";
        } else if (
          isSpecial(this.url) &&
          this.base !== null &&
          this.base.scheme === this.url.scheme
        ) {
          this.state = "special relative or authority";
        } else if (isSpecial(this.url)) {
          this.state = "special authority slashes";
        } else if (this.input[this.pointer + 1] === 47) {
          this.state = "path or authority";
          ++this.pointer;
        } else {
          this.url.cannotBeABaseURL = true;
          this.url.path.push("");
          this.state = "cannot-be-a-base-URL path";
        }
      } else if (!this.stateOverride) {
        this.buffer = "";
        this.state = "no scheme";
        this.pointer = -1;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    URLStateMachine.prototype["parse no scheme"] = function parseNoScheme(c) {
      if (this.base === null || (this.base.cannotBeABaseURL && c !== 35)) {
        return failure;
      } else if (this.base.cannotBeABaseURL && c === 35) {
        this.url.scheme = this.base.scheme;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.url.cannotBeABaseURL = true;
        this.state = "fragment";
      } else if (this.base.scheme === "file") {
        this.state = "file";
        --this.pointer;
      } else {
        this.state = "relative";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse special relative or authority"] =
      function parseSpecialRelativeOrAuthority(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = "special authority ignore slashes";
          ++this.pointer;
        } else {
          this.parseError = true;
          this.state = "relative";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse path or authority"] =
      function parsePathOrAuthority(c) {
        if (c === 47) {
          this.state = "authority";
        } else {
          this.state = "path";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse relative"] = function parseRelative(c) {
      this.url.scheme = this.base.scheme;
      if (isNaN(c)) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
      } else if (c === 47) {
        this.state = "relative slash";
      } else if (c === 63) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = "";
        this.state = "query";
      } else if (c === 35) {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice();
        this.url.query = this.base.query;
        this.url.fragment = "";
        this.state = "fragment";
      } else if (isSpecial(this.url) && c === 92) {
        this.parseError = true;
        this.state = "relative slash";
      } else {
        this.url.username = this.base.username;
        this.url.password = this.base.password;
        this.url.host = this.base.host;
        this.url.port = this.base.port;
        this.url.path = this.base.path.slice(0, this.base.path.length - 1);
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse relative slash"] =
      function parseRelativeSlash(c) {
        if (isSpecial(this.url) && (c === 47 || c === 92)) {
          if (c === 92) {
            this.parseError = true;
          }
          this.state = "special authority ignore slashes";
        } else if (c === 47) {
          this.state = "authority";
        } else {
          this.url.username = this.base.username;
          this.url.password = this.base.password;
          this.url.host = this.base.host;
          this.url.port = this.base.port;
          this.state = "path";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse special authority slashes"] =
      function parseSpecialAuthoritySlashes(c) {
        if (c === 47 && this.input[this.pointer + 1] === 47) {
          this.state = "special authority ignore slashes";
          ++this.pointer;
        } else {
          this.parseError = true;
          this.state = "special authority ignore slashes";
          --this.pointer;
        }
        return true;
      };
    URLStateMachine.prototype["parse special authority ignore slashes"] =
      function parseSpecialAuthorityIgnoreSlashes(c) {
        if (c !== 47 && c !== 92) {
          this.state = "authority";
          --this.pointer;
        } else {
          this.parseError = true;
        }
        return true;
      };
    URLStateMachine.prototype["parse authority"] = function parseAuthority(
      c,
      cStr
    ) {
      if (c === 64) {
        this.parseError = true;
        if (this.atFlag) {
          this.buffer = "%40" + this.buffer;
        }
        this.atFlag = true;
        const len = countSymbols(this.buffer);
        for (let pointer = 0; pointer < len; ++pointer) {
          const codePoint = this.buffer.codePointAt(pointer);
          if (codePoint === 58 && !this.passwordTokenSeenFlag) {
            this.passwordTokenSeenFlag = true;
            continue;
          }
          const encodedCodePoints = percentEncodeChar(
            codePoint,
            isUserinfoPercentEncode
          );
          if (this.passwordTokenSeenFlag) {
            this.url.password += encodedCodePoints;
          } else {
            this.url.username += encodedCodePoints;
          }
        }
        this.buffer = "";
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        if (this.atFlag && this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        this.pointer -= countSymbols(this.buffer) + 1;
        this.buffer = "";
        this.state = "host";
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse hostname"] = URLStateMachine.prototype[
      "parse host"
    ] = function parseHostName(c, cStr) {
      if (this.stateOverride && this.url.scheme === "file") {
        --this.pointer;
        this.state = "file host";
      } else if (c === 58 && !this.arrFlag) {
        if (this.buffer === "") {
          this.parseError = true;
          return failure;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "port";
        if (this.stateOverride === "hostname") {
          return false;
        }
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92)
      ) {
        --this.pointer;
        if (isSpecial(this.url) && this.buffer === "") {
          this.parseError = true;
          return failure;
        } else if (
          this.stateOverride &&
          this.buffer === "" &&
          (includesCredentials(this.url) || this.url.port !== null)
        ) {
          this.parseError = true;
          return false;
        }
        const host = parseHost(this.buffer, isSpecial(this.url));
        if (host === failure) {
          return failure;
        }
        this.url.host = host;
        this.buffer = "";
        this.state = "path start";
        if (this.stateOverride) {
          return false;
        }
      } else {
        if (c === 91) {
          this.arrFlag = true;
        } else if (c === 93) {
          this.arrFlag = false;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse port"] = function parsePort(c, cStr) {
      if (isASCIIDigit(c)) {
        this.buffer += cStr;
      } else if (
        isNaN(c) ||
        c === 47 ||
        c === 63 ||
        c === 35 ||
        (isSpecial(this.url) && c === 92) ||
        this.stateOverride
      ) {
        if (this.buffer !== "") {
          const port = parseInt(this.buffer);
          if (port > Math.pow(2, 16) - 1) {
            this.parseError = true;
            return failure;
          }
          this.url.port = port === defaultPort(this.url.scheme) ? null : port;
          this.buffer = "";
        }
        if (this.stateOverride) {
          return false;
        }
        this.state = "path start";
        --this.pointer;
      } else {
        this.parseError = true;
        return failure;
      }
      return true;
    };
    const fileOtherwiseCodePoints = /* @__PURE__ */ new Set([47, 92, 63, 35]);
    URLStateMachine.prototype["parse file"] = function parseFile(c) {
      this.url.scheme = "file";
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file slash";
      } else if (this.base !== null && this.base.scheme === "file") {
        if (isNaN(c)) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
        } else if (c === 63) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = "";
          this.state = "query";
        } else if (c === 35) {
          this.url.host = this.base.host;
          this.url.path = this.base.path.slice();
          this.url.query = this.base.query;
          this.url.fragment = "";
          this.state = "fragment";
        } else {
          if (
            this.input.length - this.pointer - 1 === 0 || // remaining consists of 0 code points
            !isWindowsDriveLetterCodePoints(c, this.input[this.pointer + 1]) ||
            (this.input.length - this.pointer - 1 >= 2 && // remaining has at least 2 code points
              !fileOtherwiseCodePoints.has(this.input[this.pointer + 2]))
          ) {
            this.url.host = this.base.host;
            this.url.path = this.base.path.slice();
            shortenPath(this.url);
          } else {
            this.parseError = true;
          }
          this.state = "path";
          --this.pointer;
        }
      } else {
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file slash"] = function parseFileSlash(c) {
      if (c === 47 || c === 92) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "file host";
      } else {
        if (this.base !== null && this.base.scheme === "file") {
          if (isNormalizedWindowsDriveLetterString(this.base.path[0])) {
            this.url.path.push(this.base.path[0]);
          } else {
            this.url.host = this.base.host;
          }
        }
        this.state = "path";
        --this.pointer;
      }
      return true;
    };
    URLStateMachine.prototype["parse file host"] = function parseFileHost(
      c,
      cStr
    ) {
      if (isNaN(c) || c === 47 || c === 92 || c === 63 || c === 35) {
        --this.pointer;
        if (!this.stateOverride && isWindowsDriveLetterString(this.buffer)) {
          this.parseError = true;
          this.state = "path";
        } else if (this.buffer === "") {
          this.url.host = "";
          if (this.stateOverride) {
            return false;
          }
          this.state = "path start";
        } else {
          let host = parseHost(this.buffer, isSpecial(this.url));
          if (host === failure) {
            return failure;
          }
          if (host === "localhost") {
            host = "";
          }
          this.url.host = host;
          if (this.stateOverride) {
            return false;
          }
          this.buffer = "";
          this.state = "path start";
        }
      } else {
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse path start"] = function parsePathStart(c) {
      if (isSpecial(this.url)) {
        if (c === 92) {
          this.parseError = true;
        }
        this.state = "path";
        if (c !== 47 && c !== 92) {
          --this.pointer;
        }
      } else if (!this.stateOverride && c === 63) {
        this.url.query = "";
        this.state = "query";
      } else if (!this.stateOverride && c === 35) {
        this.url.fragment = "";
        this.state = "fragment";
      } else if (c !== void 0) {
        this.state = "path";
        if (c !== 47) {
          --this.pointer;
        }
      }
      return true;
    };
    URLStateMachine.prototype["parse path"] = function parsePath(c) {
      if (
        isNaN(c) ||
        c === 47 ||
        (isSpecial(this.url) && c === 92) ||
        (!this.stateOverride && (c === 63 || c === 35))
      ) {
        if (isSpecial(this.url) && c === 92) {
          this.parseError = true;
        }
        if (isDoubleDot(this.buffer)) {
          shortenPath(this.url);
          if (c !== 47 && !(isSpecial(this.url) && c === 92)) {
            this.url.path.push("");
          }
        } else if (
          isSingleDot(this.buffer) &&
          c !== 47 &&
          !(isSpecial(this.url) && c === 92)
        ) {
          this.url.path.push("");
        } else if (!isSingleDot(this.buffer)) {
          if (
            this.url.scheme === "file" &&
            this.url.path.length === 0 &&
            isWindowsDriveLetterString(this.buffer)
          ) {
            if (this.url.host !== "" && this.url.host !== null) {
              this.parseError = true;
              this.url.host = "";
            }
            this.buffer = this.buffer[0] + ":";
          }
          this.url.path.push(this.buffer);
        }
        this.buffer = "";
        if (
          this.url.scheme === "file" &&
          (c === void 0 || c === 63 || c === 35)
        ) {
          while (this.url.path.length > 1 && this.url.path[0] === "") {
            this.parseError = true;
            this.url.path.shift();
          }
        }
        if (c === 63) {
          this.url.query = "";
          this.state = "query";
        }
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.buffer += percentEncodeChar(c, isPathPercentEncode);
      }
      return true;
    };
    URLStateMachine.prototype["parse cannot-be-a-base-URL path"] =
      function parseCannotBeABaseURLPath(c) {
        if (c === 63) {
          this.url.query = "";
          this.state = "query";
        } else if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        } else {
          if (!isNaN(c) && c !== 37) {
            this.parseError = true;
          }
          if (
            c === 37 &&
            (!isASCIIHex(this.input[this.pointer + 1]) ||
              !isASCIIHex(this.input[this.pointer + 2]))
          ) {
            this.parseError = true;
          }
          if (!isNaN(c)) {
            this.url.path[0] =
              this.url.path[0] + percentEncodeChar(c, isC0ControlPercentEncode);
          }
        }
        return true;
      };
    URLStateMachine.prototype["parse query"] = function parseQuery(c, cStr) {
      if (isNaN(c) || (!this.stateOverride && c === 35)) {
        if (
          !isSpecial(this.url) ||
          this.url.scheme === "ws" ||
          this.url.scheme === "wss"
        ) {
          this.encodingOverride = "utf-8";
        }
        const buffer = new Buffer(this.buffer);
        for (let i = 0; i < buffer.length; ++i) {
          if (
            buffer[i] < 33 ||
            buffer[i] > 126 ||
            buffer[i] === 34 ||
            buffer[i] === 35 ||
            buffer[i] === 60 ||
            buffer[i] === 62
          ) {
            this.url.query += percentEncode(buffer[i]);
          } else {
            this.url.query += String.fromCodePoint(buffer[i]);
          }
        }
        this.buffer = "";
        if (c === 35) {
          this.url.fragment = "";
          this.state = "fragment";
        }
      } else {
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.buffer += cStr;
      }
      return true;
    };
    URLStateMachine.prototype["parse fragment"] = function parseFragment(c) {
      if (isNaN(c));
      else if (c === 0) {
        this.parseError = true;
      } else {
        if (
          c === 37 &&
          (!isASCIIHex(this.input[this.pointer + 1]) ||
            !isASCIIHex(this.input[this.pointer + 2]))
        ) {
          this.parseError = true;
        }
        this.url.fragment += percentEncodeChar(c, isC0ControlPercentEncode);
      }
      return true;
    };
    function serializeURL(url, excludeFragment) {
      let output = url.scheme + ":";
      if (url.host !== null) {
        output += "//";
        if (url.username !== "" || url.password !== "") {
          output += url.username;
          if (url.password !== "") {
            output += ":" + url.password;
          }
          output += "@";
        }
        output += serializeHost(url.host);
        if (url.port !== null) {
          output += ":" + url.port;
        }
      } else if (url.host === null && url.scheme === "file") {
        output += "//";
      }
      if (url.cannotBeABaseURL) {
        output += url.path[0];
      } else {
        for (const string of url.path) {
          output += "/" + string;
        }
      }
      if (url.query !== null) {
        output += "?" + url.query;
      }
      if (!excludeFragment && url.fragment !== null) {
        output += "#" + url.fragment;
      }
      return output;
    }
    function serializeOrigin(tuple) {
      let result = tuple.scheme + "://";
      result += serializeHost(tuple.host);
      if (tuple.port !== null) {
        result += ":" + tuple.port;
      }
      return result;
    }
    module2.exports.serializeURL = serializeURL;
    module2.exports.serializeURLOrigin = function (url) {
      switch (url.scheme) {
        case "blob":
          try {
            return module2.exports.serializeURLOrigin(
              module2.exports.parseURL(url.path[0])
            );
          } catch (e) {
            return "null";
          }
        case "ftp":
        case "gopher":
        case "http":
        case "https":
        case "ws":
        case "wss":
          return serializeOrigin({
            scheme: url.scheme,
            host: url.host,
            port: url.port,
          });
        case "file":
          return "file://";
        default:
          return "null";
      }
    };
    module2.exports.basicURLParse = function (input, options) {
      if (options === void 0) {
        options = {};
      }
      const usm = new URLStateMachine(
        input,
        options.baseURL,
        options.encodingOverride,
        options.url,
        options.stateOverride
      );
      if (usm.failure) {
        return "failure";
      }
      return usm.url;
    };
    module2.exports.setTheUsername = function (url, username) {
      url.username = "";
      const decoded = punycode.ucs2.decode(username);
      for (let i = 0; i < decoded.length; ++i) {
        url.username += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
      }
    };
    module2.exports.setThePassword = function (url, password) {
      url.password = "";
      const decoded = punycode.ucs2.decode(password);
      for (let i = 0; i < decoded.length; ++i) {
        url.password += percentEncodeChar(decoded[i], isUserinfoPercentEncode);
      }
    };
    module2.exports.serializeHost = serializeHost;
    module2.exports.cannotHaveAUsernamePasswordPort =
      cannotHaveAUsernamePasswordPort;
    module2.exports.serializeInteger = function (integer) {
      return String(integer);
    };
    module2.exports.parseURL = function (input, options) {
      if (options === void 0) {
        options = {};
      }
      return module2.exports.basicURLParse(input, {
        baseURL: options.baseURL,
        encodingOverride: options.encodingOverride,
      });
    };
  })(urlStateMachine);
  return urlStateMachine.exports;
}
var hasRequiredURLImpl;
function requireURLImpl() {
  if (hasRequiredURLImpl) return URLImpl;
  hasRequiredURLImpl = 1;
  const usm = requireUrlStateMachine();
  URLImpl.implementation = class URLImpl {
    constructor(constructorArgs) {
      const url = constructorArgs[0];
      const base = constructorArgs[1];
      let parsedBase = null;
      if (base !== void 0) {
        parsedBase = usm.basicURLParse(base);
        if (parsedBase === "failure") {
          throw new TypeError("Invalid base URL");
        }
      }
      const parsedURL = usm.basicURLParse(url, { baseURL: parsedBase });
      if (parsedURL === "failure") {
        throw new TypeError("Invalid URL");
      }
      this._url = parsedURL;
    }
    get href() {
      return usm.serializeURL(this._url);
    }
    set href(v) {
      const parsedURL = usm.basicURLParse(v);
      if (parsedURL === "failure") {
        throw new TypeError("Invalid URL");
      }
      this._url = parsedURL;
    }
    get origin() {
      return usm.serializeURLOrigin(this._url);
    }
    get protocol() {
      return this._url.scheme + ":";
    }
    set protocol(v) {
      usm.basicURLParse(v + ":", {
        url: this._url,
        stateOverride: "scheme start",
      });
    }
    get username() {
      return this._url.username;
    }
    set username(v) {
      if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
        return;
      }
      usm.setTheUsername(this._url, v);
    }
    get password() {
      return this._url.password;
    }
    set password(v) {
      if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
        return;
      }
      usm.setThePassword(this._url, v);
    }
    get host() {
      const url = this._url;
      if (url.host === null) {
        return "";
      }
      if (url.port === null) {
        return usm.serializeHost(url.host);
      }
      return usm.serializeHost(url.host) + ":" + usm.serializeInteger(url.port);
    }
    set host(v) {
      if (this._url.cannotBeABaseURL) {
        return;
      }
      usm.basicURLParse(v, { url: this._url, stateOverride: "host" });
    }
    get hostname() {
      if (this._url.host === null) {
        return "";
      }
      return usm.serializeHost(this._url.host);
    }
    set hostname(v) {
      if (this._url.cannotBeABaseURL) {
        return;
      }
      usm.basicURLParse(v, { url: this._url, stateOverride: "hostname" });
    }
    get port() {
      if (this._url.port === null) {
        return "";
      }
      return usm.serializeInteger(this._url.port);
    }
    set port(v) {
      if (usm.cannotHaveAUsernamePasswordPort(this._url)) {
        return;
      }
      if (v === "") {
        this._url.port = null;
      } else {
        usm.basicURLParse(v, { url: this._url, stateOverride: "port" });
      }
    }
    get pathname() {
      if (this._url.cannotBeABaseURL) {
        return this._url.path[0];
      }
      if (this._url.path.length === 0) {
        return "";
      }
      return "/" + this._url.path.join("/");
    }
    set pathname(v) {
      if (this._url.cannotBeABaseURL) {
        return;
      }
      this._url.path = [];
      usm.basicURLParse(v, { url: this._url, stateOverride: "path start" });
    }
    get search() {
      if (this._url.query === null || this._url.query === "") {
        return "";
      }
      return "?" + this._url.query;
    }
    set search(v) {
      const url = this._url;
      if (v === "") {
        url.query = null;
        return;
      }
      const input = v[0] === "?" ? v.substring(1) : v;
      url.query = "";
      usm.basicURLParse(input, { url, stateOverride: "query" });
    }
    get hash() {
      if (this._url.fragment === null || this._url.fragment === "") {
        return "";
      }
      return "#" + this._url.fragment;
    }
    set hash(v) {
      if (v === "") {
        this._url.fragment = null;
        return;
      }
      const input = v[0] === "#" ? v.substring(1) : v;
      this._url.fragment = "";
      usm.basicURLParse(input, { url: this._url, stateOverride: "fragment" });
    }
    toJSON() {
      return this.href;
    }
  };
  return URLImpl;
}
var hasRequiredURL;
function requireURL() {
  if (hasRequiredURL) return URL$2.exports;
  hasRequiredURL = 1;
  (function (module2) {
    const conversions = requireLib();
    const utils2 = requireUtils$1();
    const Impl = requireURLImpl();
    const impl = utils2.implSymbol;
    function URL2(url) {
      if (!this || this[impl] || !(this instanceof URL2)) {
        throw new TypeError(
          "Failed to construct 'URL': Please use the 'new' operator, this DOM object constructor cannot be called as a function."
        );
      }
      if (arguments.length < 1) {
        throw new TypeError(
          "Failed to construct 'URL': 1 argument required, but only " +
            arguments.length +
            " present."
        );
      }
      const args = [];
      for (let i = 0; i < arguments.length && i < 2; ++i) {
        args[i] = arguments[i];
      }
      args[0] = conversions["USVString"](args[0]);
      if (args[1] !== void 0) {
        args[1] = conversions["USVString"](args[1]);
      }
      module2.exports.setup(this, args);
    }
    URL2.prototype.toJSON = function toJSON() {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      const args = [];
      for (let i = 0; i < arguments.length && i < 0; ++i) {
        args[i] = arguments[i];
      }
      return this[impl].toJSON.apply(this[impl], args);
    };
    Object.defineProperty(URL2.prototype, "href", {
      get() {
        return this[impl].href;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].href = V;
      },
      enumerable: true,
      configurable: true,
    });
    URL2.prototype.toString = function () {
      if (!this || !module2.exports.is(this)) {
        throw new TypeError("Illegal invocation");
      }
      return this.href;
    };
    Object.defineProperty(URL2.prototype, "origin", {
      get() {
        return this[impl].origin;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "protocol", {
      get() {
        return this[impl].protocol;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].protocol = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "username", {
      get() {
        return this[impl].username;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].username = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "password", {
      get() {
        return this[impl].password;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].password = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "host", {
      get() {
        return this[impl].host;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].host = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "hostname", {
      get() {
        return this[impl].hostname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hostname = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "port", {
      get() {
        return this[impl].port;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].port = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "pathname", {
      get() {
        return this[impl].pathname;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].pathname = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "search", {
      get() {
        return this[impl].search;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].search = V;
      },
      enumerable: true,
      configurable: true,
    });
    Object.defineProperty(URL2.prototype, "hash", {
      get() {
        return this[impl].hash;
      },
      set(V) {
        V = conversions["USVString"](V);
        this[impl].hash = V;
      },
      enumerable: true,
      configurable: true,
    });
    module2.exports = {
      is(obj) {
        return !!obj && obj[impl] instanceof Impl.implementation;
      },
      create(constructorArgs, privateData) {
        let obj = Object.create(URL2.prototype);
        this.setup(obj, constructorArgs, privateData);
        return obj;
      },
      setup(obj, constructorArgs, privateData) {
        if (!privateData) privateData = {};
        privateData.wrapper = obj;
        obj[impl] = new Impl.implementation(constructorArgs, privateData);
        obj[impl][utils2.wrapperSymbol] = obj;
      },
      interface: URL2,
      expose: {
        Window: { URL: URL2 },
        Worker: { URL: URL2 },
      },
    };
  })(URL$2);
  return URL$2.exports;
}
var hasRequiredPublicApi;
function requirePublicApi() {
  if (hasRequiredPublicApi) return publicApi;
  hasRequiredPublicApi = 1;
  publicApi.URL = requireURL().interface;
  publicApi.serializeURL = requireUrlStateMachine().serializeURL;
  publicApi.serializeURLOrigin = requireUrlStateMachine().serializeURLOrigin;
  publicApi.basicURLParse = requireUrlStateMachine().basicURLParse;
  publicApi.setTheUsername = requireUrlStateMachine().setTheUsername;
  publicApi.setThePassword = requireUrlStateMachine().setThePassword;
  publicApi.serializeHost = requireUrlStateMachine().serializeHost;
  publicApi.serializeInteger = requireUrlStateMachine().serializeInteger;
  publicApi.parseURL = requireUrlStateMachine().parseURL;
  return publicApi;
}
var publicApiExports = requirePublicApi();
const whatwgUrl = /* @__PURE__ */ getDefaultExportFromCjs(publicApiExports);
const Readable = Stream.Readable;
const BUFFER = Symbol("buffer");
const TYPE = Symbol("type");
let Blob$1 = class Blob2 {
  constructor() {
    this[TYPE] = "";
    const blobParts = arguments[0];
    const options = arguments[1];
    const buffers = [];
    let size = 0;
    if (blobParts) {
      const a = blobParts;
      const length = Number(a.length);
      for (let i = 0; i < length; i++) {
        const element = a[i];
        let buffer;
        if (element instanceof Buffer) {
          buffer = element;
        } else if (ArrayBuffer.isView(element)) {
          buffer = Buffer.from(
            element.buffer,
            element.byteOffset,
            element.byteLength
          );
        } else if (element instanceof ArrayBuffer) {
          buffer = Buffer.from(element);
        } else if (element instanceof Blob2) {
          buffer = element[BUFFER];
        } else {
          buffer = Buffer.from(
            typeof element === "string" ? element : String(element)
          );
        }
        size += buffer.length;
        buffers.push(buffer);
      }
    }
    this[BUFFER] = Buffer.concat(buffers);
    let type =
      options && options.type !== void 0 && String(options.type).toLowerCase();
    if (type && !/[^\u0020-\u007E]/.test(type)) {
      this[TYPE] = type;
    }
  }
  get size() {
    return this[BUFFER].length;
  }
  get type() {
    return this[TYPE];
  }
  text() {
    return Promise.resolve(this[BUFFER].toString());
  }
  arrayBuffer() {
    const buf = this[BUFFER];
    const ab = buf.buffer.slice(
      buf.byteOffset,
      buf.byteOffset + buf.byteLength
    );
    return Promise.resolve(ab);
  }
  stream() {
    const readable = new Readable();
    readable._read = function () {};
    readable.push(this[BUFFER]);
    readable.push(null);
    return readable;
  }
  toString() {
    return "[object Blob]";
  }
  slice() {
    const size = this.size;
    const start = arguments[0];
    const end = arguments[1];
    let relativeStart, relativeEnd;
    if (start === void 0) {
      relativeStart = 0;
    } else if (start < 0) {
      relativeStart = Math.max(size + start, 0);
    } else {
      relativeStart = Math.min(start, size);
    }
    if (end === void 0) {
      relativeEnd = size;
    } else if (end < 0) {
      relativeEnd = Math.max(size + end, 0);
    } else {
      relativeEnd = Math.min(end, size);
    }
    const span = Math.max(relativeEnd - relativeStart, 0);
    const buffer = this[BUFFER];
    const slicedBuffer = buffer.slice(relativeStart, relativeStart + span);
    const blob = new Blob2([], { type: arguments[2] });
    blob[BUFFER] = slicedBuffer;
    return blob;
  }
};
Object.defineProperties(Blob$1.prototype, {
  size: { enumerable: true },
  type: { enumerable: true },
  slice: { enumerable: true },
});
Object.defineProperty(Blob$1.prototype, Symbol.toStringTag, {
  value: "Blob",
  writable: false,
  enumerable: false,
  configurable: true,
});
function FetchError(message, type, systemError) {
  Error.call(this, message);
  this.message = message;
  this.type = type;
  if (systemError) {
    this.code = this.errno = systemError.code;
  }
  Error.captureStackTrace(this, this.constructor);
}
FetchError.prototype = Object.create(Error.prototype);
FetchError.prototype.constructor = FetchError;
FetchError.prototype.name = "FetchError";
let convert;
try {
  convert = require("encoding").convert;
} catch (e) {}
const INTERNALS = Symbol("Body internals");
const PassThrough = Stream.PassThrough;
function Body(body) {
  var _this = this;
  var _ref =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    _ref$size = _ref.size;
  let size = _ref$size === void 0 ? 0 : _ref$size;
  var _ref$timeout = _ref.timeout;
  let timeout = _ref$timeout === void 0 ? 0 : _ref$timeout;
  if (body == null) {
    body = null;
  } else if (isURLSearchParams(body)) {
    body = Buffer.from(body.toString());
  } else if (isBlob(body));
  else if (Buffer.isBuffer(body));
  else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
    body = Buffer.from(body);
  } else if (ArrayBuffer.isView(body)) {
    body = Buffer.from(body.buffer, body.byteOffset, body.byteLength);
  } else if (body instanceof Stream);
  else {
    body = Buffer.from(String(body));
  }
  this[INTERNALS] = {
    body,
    disturbed: false,
    error: null,
  };
  this.size = size;
  this.timeout = timeout;
  if (body instanceof Stream) {
    body.on("error", function (err) {
      const error =
        err.name === "AbortError"
          ? err
          : new FetchError(
              `Invalid response body while trying to fetch ${_this.url}: ${err.message}`,
              "system",
              err
            );
      _this[INTERNALS].error = error;
    });
  }
}
Body.prototype = {
  get body() {
    return this[INTERNALS].body;
  },
  get bodyUsed() {
    return this[INTERNALS].disturbed;
  },
  /**
   * Decode response as ArrayBuffer
   *
   * @return  Promise
   */
  arrayBuffer() {
    return consumeBody.call(this).then(function (buf) {
      return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
    });
  },
  /**
   * Return raw response as Blob
   *
   * @return Promise
   */
  blob() {
    let ct = (this.headers && this.headers.get("content-type")) || "";
    return consumeBody.call(this).then(function (buf) {
      return Object.assign(
        // Prevent copying
        new Blob$1([], {
          type: ct.toLowerCase(),
        }),
        {
          [BUFFER]: buf,
        }
      );
    });
  },
  /**
   * Decode response as json
   *
   * @return  Promise
   */
  json() {
    var _this2 = this;
    return consumeBody.call(this).then(function (buffer) {
      try {
        return JSON.parse(buffer.toString());
      } catch (err) {
        return Body.Promise.reject(
          new FetchError(
            `invalid json response body at ${_this2.url} reason: ${err.message}`,
            "invalid-json"
          )
        );
      }
    });
  },
  /**
   * Decode response as text
   *
   * @return  Promise
   */
  text() {
    return consumeBody.call(this).then(function (buffer) {
      return buffer.toString();
    });
  },
  /**
   * Decode response as buffer (non-spec api)
   *
   * @return  Promise
   */
  buffer() {
    return consumeBody.call(this);
  },
  /**
   * Decode response as text, while automatically detecting the encoding and
   * trying to decode to UTF-8 (non-spec api)
   *
   * @return  Promise
   */
  textConverted() {
    var _this3 = this;
    return consumeBody.call(this).then(function (buffer) {
      return convertBody(buffer, _this3.headers);
    });
  },
};
Object.defineProperties(Body.prototype, {
  body: { enumerable: true },
  bodyUsed: { enumerable: true },
  arrayBuffer: { enumerable: true },
  blob: { enumerable: true },
  json: { enumerable: true },
  text: { enumerable: true },
});
Body.mixIn = function (proto) {
  for (const name of Object.getOwnPropertyNames(Body.prototype)) {
    if (!(name in proto)) {
      const desc = Object.getOwnPropertyDescriptor(Body.prototype, name);
      Object.defineProperty(proto, name, desc);
    }
  }
};
function consumeBody() {
  var _this4 = this;
  if (this[INTERNALS].disturbed) {
    return Body.Promise.reject(
      new TypeError(`body used already for: ${this.url}`)
    );
  }
  this[INTERNALS].disturbed = true;
  if (this[INTERNALS].error) {
    return Body.Promise.reject(this[INTERNALS].error);
  }
  let body = this.body;
  if (body === null) {
    return Body.Promise.resolve(Buffer.alloc(0));
  }
  if (isBlob(body)) {
    body = body.stream();
  }
  if (Buffer.isBuffer(body)) {
    return Body.Promise.resolve(body);
  }
  if (!(body instanceof Stream)) {
    return Body.Promise.resolve(Buffer.alloc(0));
  }
  let accum = [];
  let accumBytes = 0;
  let abort = false;
  return new Body.Promise(function (resolve, reject) {
    let resTimeout;
    if (_this4.timeout) {
      resTimeout = setTimeout(function () {
        abort = true;
        reject(
          new FetchError(
            `Response timeout while trying to fetch ${_this4.url} (over ${_this4.timeout}ms)`,
            "body-timeout"
          )
        );
      }, _this4.timeout);
    }
    body.on("error", function (err) {
      if (err.name === "AbortError") {
        abort = true;
        reject(err);
      } else {
        reject(
          new FetchError(
            `Invalid response body while trying to fetch ${_this4.url}: ${err.message}`,
            "system",
            err
          )
        );
      }
    });
    body.on("data", function (chunk) {
      if (abort || chunk === null) {
        return;
      }
      if (_this4.size && accumBytes + chunk.length > _this4.size) {
        abort = true;
        reject(
          new FetchError(
            `content size at ${_this4.url} over limit: ${_this4.size}`,
            "max-size"
          )
        );
        return;
      }
      accumBytes += chunk.length;
      accum.push(chunk);
    });
    body.on("end", function () {
      if (abort) {
        return;
      }
      clearTimeout(resTimeout);
      try {
        resolve(Buffer.concat(accum, accumBytes));
      } catch (err) {
        reject(
          new FetchError(
            `Could not create Buffer from response body for ${_this4.url}: ${err.message}`,
            "system",
            err
          )
        );
      }
    });
  });
}
function convertBody(buffer, headers) {
  if (typeof convert !== "function") {
    throw new Error(
      "The package `encoding` must be installed to use the textConverted() function"
    );
  }
  const ct = headers.get("content-type");
  let charset = "utf-8";
  let res, str;
  if (ct) {
    res = /charset=([^;]*)/i.exec(ct);
  }
  str = buffer.slice(0, 1024).toString();
  if (!res && str) {
    res = /<meta.+?charset=(['"])(.+?)\1/i.exec(str);
  }
  if (!res && str) {
    res =
      /<meta[\s]+?http-equiv=(['"])content-type\1[\s]+?content=(['"])(.+?)\2/i.exec(
        str
      );
    if (!res) {
      res =
        /<meta[\s]+?content=(['"])(.+?)\1[\s]+?http-equiv=(['"])content-type\3/i.exec(
          str
        );
      if (res) {
        res.pop();
      }
    }
    if (res) {
      res = /charset=(.*)/i.exec(res.pop());
    }
  }
  if (!res && str) {
    res = /<\?xml.+?encoding=(['"])(.+?)\1/i.exec(str);
  }
  if (res) {
    charset = res.pop();
    if (charset === "gb2312" || charset === "gbk") {
      charset = "gb18030";
    }
  }
  return convert(buffer, "UTF-8", charset).toString();
}
function isURLSearchParams(obj) {
  if (
    typeof obj !== "object" ||
    typeof obj.append !== "function" ||
    typeof obj.delete !== "function" ||
    typeof obj.get !== "function" ||
    typeof obj.getAll !== "function" ||
    typeof obj.has !== "function" ||
    typeof obj.set !== "function"
  ) {
    return false;
  }
  return (
    obj.constructor.name === "URLSearchParams" ||
    Object.prototype.toString.call(obj) === "[object URLSearchParams]" ||
    typeof obj.sort === "function"
  );
}
function isBlob(obj) {
  return (
    typeof obj === "object" &&
    typeof obj.arrayBuffer === "function" &&
    typeof obj.type === "string" &&
    typeof obj.stream === "function" &&
    typeof obj.constructor === "function" &&
    typeof obj.constructor.name === "string" &&
    /^(Blob|File)$/.test(obj.constructor.name) &&
    /^(Blob|File)$/.test(obj[Symbol.toStringTag])
  );
}
function clone(instance2) {
  let p1, p2;
  let body = instance2.body;
  if (instance2.bodyUsed) {
    throw new Error("cannot clone body after it is used");
  }
  if (body instanceof Stream && typeof body.getBoundary !== "function") {
    p1 = new PassThrough();
    p2 = new PassThrough();
    body.pipe(p1);
    body.pipe(p2);
    instance2[INTERNALS].body = p1;
    body = p2;
  }
  return body;
}
function extractContentType(body) {
  if (body === null) {
    return null;
  } else if (typeof body === "string") {
    return "text/plain;charset=UTF-8";
  } else if (isURLSearchParams(body)) {
    return "application/x-www-form-urlencoded;charset=UTF-8";
  } else if (isBlob(body)) {
    return body.type || null;
  } else if (Buffer.isBuffer(body)) {
    return null;
  } else if (Object.prototype.toString.call(body) === "[object ArrayBuffer]") {
    return null;
  } else if (ArrayBuffer.isView(body)) {
    return null;
  } else if (typeof body.getBoundary === "function") {
    return `multipart/form-data;boundary=${body.getBoundary()}`;
  } else if (body instanceof Stream) {
    return null;
  } else {
    return "text/plain;charset=UTF-8";
  }
}
function getTotalBytes(instance2) {
  const body = instance2.body;
  if (body === null) {
    return 0;
  } else if (isBlob(body)) {
    return body.size;
  } else if (Buffer.isBuffer(body)) {
    return body.length;
  } else if (body && typeof body.getLengthSync === "function") {
    if (
      (body._lengthRetrievers && body._lengthRetrievers.length == 0) || // 1.x
      (body.hasKnownLength && body.hasKnownLength())
    ) {
      return body.getLengthSync();
    }
    return null;
  } else {
    return null;
  }
}
function writeToStream(dest, instance2) {
  const body = instance2.body;
  if (body === null) {
    dest.end();
  } else if (isBlob(body)) {
    body.stream().pipe(dest);
  } else if (Buffer.isBuffer(body)) {
    dest.write(body);
    dest.end();
  } else {
    body.pipe(dest);
  }
}
Body.Promise = global.Promise;
const invalidTokenRegex = /[^\^_`a-zA-Z\-0-9!#$%&'*+.|~]/;
const invalidHeaderCharRegex = /[^\t\x20-\x7e\x80-\xff]/;
function validateName(name) {
  name = `${name}`;
  if (invalidTokenRegex.test(name) || name === "") {
    throw new TypeError(`${name} is not a legal HTTP header name`);
  }
}
function validateValue(value) {
  value = `${value}`;
  if (invalidHeaderCharRegex.test(value)) {
    throw new TypeError(`${value} is not a legal HTTP header value`);
  }
}
function find(map, name) {
  name = name.toLowerCase();
  for (const key in map) {
    if (key.toLowerCase() === name) {
      return key;
    }
  }
  return void 0;
}
const MAP = Symbol("map");
class Headers {
  /**
   * Headers class
   *
   * @param   Object  headers  Response headers
   * @return  Void
   */
  constructor() {
    let init =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0;
    this[MAP] = /* @__PURE__ */ Object.create(null);
    if (init instanceof Headers) {
      const rawHeaders = init.raw();
      const headerNames = Object.keys(rawHeaders);
      for (const headerName of headerNames) {
        for (const value of rawHeaders[headerName]) {
          this.append(headerName, value);
        }
      }
      return;
    }
    if (init == null);
    else if (typeof init === "object") {
      const method = init[Symbol.iterator];
      if (method != null) {
        if (typeof method !== "function") {
          throw new TypeError("Header pairs must be iterable");
        }
        const pairs = [];
        for (const pair of init) {
          if (
            typeof pair !== "object" ||
            typeof pair[Symbol.iterator] !== "function"
          ) {
            throw new TypeError("Each header pair must be iterable");
          }
          pairs.push(Array.from(pair));
        }
        for (const pair of pairs) {
          if (pair.length !== 2) {
            throw new TypeError("Each header pair must be a name/value tuple");
          }
          this.append(pair[0], pair[1]);
        }
      } else {
        for (const key of Object.keys(init)) {
          const value = init[key];
          this.append(key, value);
        }
      }
    } else {
      throw new TypeError("Provided initializer must be an object");
    }
  }
  /**
   * Return combined header value given name
   *
   * @param   String  name  Header name
   * @return  Mixed
   */
  get(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);
    if (key === void 0) {
      return null;
    }
    return this[MAP][key].join(", ");
  }
  /**
   * Iterate over all headers
   *
   * @param   Function  callback  Executed for each item with parameters (value, name, thisArg)
   * @param   Boolean   thisArg   `this` context for callback function
   * @return  Void
   */
  forEach(callback) {
    let thisArg =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0;
    let pairs = getHeaders(this);
    let i = 0;
    while (i < pairs.length) {
      var _pairs$i = pairs[i];
      const name = _pairs$i[0],
        value = _pairs$i[1];
      callback.call(thisArg, value, name, this);
      pairs = getHeaders(this);
      i++;
    }
  }
  /**
   * Overwrite header values given name
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */
  set(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    this[MAP][key !== void 0 ? key : name] = [value];
  }
  /**
   * Append a value onto existing header
   *
   * @param   String  name   Header name
   * @param   String  value  Header value
   * @return  Void
   */
  append(name, value) {
    name = `${name}`;
    value = `${value}`;
    validateName(name);
    validateValue(value);
    const key = find(this[MAP], name);
    if (key !== void 0) {
      this[MAP][key].push(value);
    } else {
      this[MAP][name] = [value];
    }
  }
  /**
   * Check for header name existence
   *
   * @param   String   name  Header name
   * @return  Boolean
   */
  has(name) {
    name = `${name}`;
    validateName(name);
    return find(this[MAP], name) !== void 0;
  }
  /**
   * Delete all header values given name
   *
   * @param   String  name  Header name
   * @return  Void
   */
  delete(name) {
    name = `${name}`;
    validateName(name);
    const key = find(this[MAP], name);
    if (key !== void 0) {
      delete this[MAP][key];
    }
  }
  /**
   * Return raw headers (non-spec api)
   *
   * @return  Object
   */
  raw() {
    return this[MAP];
  }
  /**
   * Get an iterator on keys.
   *
   * @return  Iterator
   */
  keys() {
    return createHeadersIterator(this, "key");
  }
  /**
   * Get an iterator on values.
   *
   * @return  Iterator
   */
  values() {
    return createHeadersIterator(this, "value");
  }
  /**
   * Get an iterator on entries.
   *
   * This is the default iterator of the Headers object.
   *
   * @return  Iterator
   */
  [Symbol.iterator]() {
    return createHeadersIterator(this, "key+value");
  }
}
Headers.prototype.entries = Headers.prototype[Symbol.iterator];
Object.defineProperty(Headers.prototype, Symbol.toStringTag, {
  value: "Headers",
  writable: false,
  enumerable: false,
  configurable: true,
});
Object.defineProperties(Headers.prototype, {
  get: { enumerable: true },
  forEach: { enumerable: true },
  set: { enumerable: true },
  append: { enumerable: true },
  has: { enumerable: true },
  delete: { enumerable: true },
  keys: { enumerable: true },
  values: { enumerable: true },
  entries: { enumerable: true },
});
function getHeaders(headers) {
  let kind =
    arguments.length > 1 && arguments[1] !== void 0
      ? arguments[1]
      : "key+value";
  const keys = Object.keys(headers[MAP]).sort();
  return keys.map(
    kind === "key"
      ? function (k) {
          return k.toLowerCase();
        }
      : kind === "value"
        ? function (k) {
            return headers[MAP][k].join(", ");
          }
        : function (k) {
            return [k.toLowerCase(), headers[MAP][k].join(", ")];
          }
  );
}
const INTERNAL = Symbol("internal");
function createHeadersIterator(target, kind) {
  const iterator = Object.create(HeadersIteratorPrototype);
  iterator[INTERNAL] = {
    target,
    kind,
    index: 0,
  };
  return iterator;
}
const HeadersIteratorPrototype = Object.setPrototypeOf(
  {
    next() {
      if (!this || Object.getPrototypeOf(this) !== HeadersIteratorPrototype) {
        throw new TypeError("Value of `this` is not a HeadersIterator");
      }
      var _INTERNAL = this[INTERNAL];
      const target = _INTERNAL.target,
        kind = _INTERNAL.kind,
        index = _INTERNAL.index;
      const values = getHeaders(target, kind);
      const len = values.length;
      if (index >= len) {
        return {
          value: void 0,
          done: true,
        };
      }
      this[INTERNAL].index = index + 1;
      return {
        value: values[index],
        done: false,
      };
    },
  },
  Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()))
);
Object.defineProperty(HeadersIteratorPrototype, Symbol.toStringTag, {
  value: "HeadersIterator",
  writable: false,
  enumerable: false,
  configurable: true,
});
function exportNodeCompatibleHeaders(headers) {
  const obj = Object.assign({ __proto__: null }, headers[MAP]);
  const hostHeaderKey = find(headers[MAP], "Host");
  if (hostHeaderKey !== void 0) {
    obj[hostHeaderKey] = obj[hostHeaderKey][0];
  }
  return obj;
}
function createHeadersLenient(obj) {
  const headers = new Headers();
  for (const name of Object.keys(obj)) {
    if (invalidTokenRegex.test(name)) {
      continue;
    }
    if (Array.isArray(obj[name])) {
      for (const val of obj[name]) {
        if (invalidHeaderCharRegex.test(val)) {
          continue;
        }
        if (headers[MAP][name] === void 0) {
          headers[MAP][name] = [val];
        } else {
          headers[MAP][name].push(val);
        }
      }
    } else if (!invalidHeaderCharRegex.test(obj[name])) {
      headers[MAP][name] = [obj[name]];
    }
  }
  return headers;
}
const INTERNALS$1 = Symbol("Response internals");
const STATUS_CODES = http.STATUS_CODES;
class Response {
  constructor() {
    let body =
      arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    let opts =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    Body.call(this, body, opts);
    const status = opts.status || 200;
    const headers = new Headers(opts.headers);
    if (body != null && !headers.has("Content-Type")) {
      const contentType = extractContentType(body);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    this[INTERNALS$1] = {
      url: opts.url,
      status,
      statusText: opts.statusText || STATUS_CODES[status],
      headers,
      counter: opts.counter,
    };
  }
  get url() {
    return this[INTERNALS$1].url || "";
  }
  get status() {
    return this[INTERNALS$1].status;
  }
  /**
   * Convenience property representing if the request ended normally
   */
  get ok() {
    return this[INTERNALS$1].status >= 200 && this[INTERNALS$1].status < 300;
  }
  get redirected() {
    return this[INTERNALS$1].counter > 0;
  }
  get statusText() {
    return this[INTERNALS$1].statusText;
  }
  get headers() {
    return this[INTERNALS$1].headers;
  }
  /**
   * Clone this response
   *
   * @return  Response
   */
  clone() {
    return new Response(clone(this), {
      url: this.url,
      status: this.status,
      statusText: this.statusText,
      headers: this.headers,
      ok: this.ok,
      redirected: this.redirected,
    });
  }
}
Body.mixIn(Response.prototype);
Object.defineProperties(Response.prototype, {
  url: { enumerable: true },
  status: { enumerable: true },
  ok: { enumerable: true },
  redirected: { enumerable: true },
  statusText: { enumerable: true },
  headers: { enumerable: true },
  clone: { enumerable: true },
});
Object.defineProperty(Response.prototype, Symbol.toStringTag, {
  value: "Response",
  writable: false,
  enumerable: false,
  configurable: true,
});
const INTERNALS$2 = Symbol("Request internals");
const URL = Url.URL || whatwgUrl.URL;
const parse_url = Url.parse;
const format_url = Url.format;
function parseURL(urlStr) {
  if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.exec(urlStr)) {
    urlStr = new URL(urlStr).toString();
  }
  return parse_url(urlStr);
}
const streamDestructionSupported = "destroy" in Stream.Readable.prototype;
function isRequest(input) {
  return typeof input === "object" && typeof input[INTERNALS$2] === "object";
}
function isAbortSignal(signal) {
  const proto =
    signal && typeof signal === "object" && Object.getPrototypeOf(signal);
  return !!(proto && proto.constructor.name === "AbortSignal");
}
class Request {
  constructor(input) {
    let init =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let parsedURL;
    if (!isRequest(input)) {
      if (input && input.href) {
        parsedURL = parseURL(input.href);
      } else {
        parsedURL = parseURL(`${input}`);
      }
      input = {};
    } else {
      parsedURL = parseURL(input.url);
    }
    let method = init.method || input.method || "GET";
    method = method.toUpperCase();
    if (
      (init.body != null || (isRequest(input) && input.body !== null)) &&
      (method === "GET" || method === "HEAD")
    ) {
      throw new TypeError("Request with GET/HEAD method cannot have body");
    }
    let inputBody =
      init.body != null
        ? init.body
        : isRequest(input) && input.body !== null
          ? clone(input)
          : null;
    Body.call(this, inputBody, {
      timeout: init.timeout || input.timeout || 0,
      size: init.size || input.size || 0,
    });
    const headers = new Headers(init.headers || input.headers || {});
    if (inputBody != null && !headers.has("Content-Type")) {
      const contentType = extractContentType(inputBody);
      if (contentType) {
        headers.append("Content-Type", contentType);
      }
    }
    let signal = isRequest(input) ? input.signal : null;
    if ("signal" in init) signal = init.signal;
    if (signal != null && !isAbortSignal(signal)) {
      throw new TypeError("Expected signal to be an instanceof AbortSignal");
    }
    this[INTERNALS$2] = {
      method,
      redirect: init.redirect || input.redirect || "follow",
      headers,
      parsedURL,
      signal,
    };
    this.follow =
      init.follow !== void 0
        ? init.follow
        : input.follow !== void 0
          ? input.follow
          : 20;
    this.compress =
      init.compress !== void 0
        ? init.compress
        : input.compress !== void 0
          ? input.compress
          : true;
    this.counter = init.counter || input.counter || 0;
    this.agent = init.agent || input.agent;
  }
  get method() {
    return this[INTERNALS$2].method;
  }
  get url() {
    return format_url(this[INTERNALS$2].parsedURL);
  }
  get headers() {
    return this[INTERNALS$2].headers;
  }
  get redirect() {
    return this[INTERNALS$2].redirect;
  }
  get signal() {
    return this[INTERNALS$2].signal;
  }
  /**
   * Clone this request
   *
   * @return  Request
   */
  clone() {
    return new Request(this);
  }
}
Body.mixIn(Request.prototype);
Object.defineProperty(Request.prototype, Symbol.toStringTag, {
  value: "Request",
  writable: false,
  enumerable: false,
  configurable: true,
});
Object.defineProperties(Request.prototype, {
  method: { enumerable: true },
  url: { enumerable: true },
  headers: { enumerable: true },
  redirect: { enumerable: true },
  clone: { enumerable: true },
  signal: { enumerable: true },
});
function getNodeRequestOptions(request) {
  const parsedURL = request[INTERNALS$2].parsedURL;
  const headers = new Headers(request[INTERNALS$2].headers);
  if (!headers.has("Accept")) {
    headers.set("Accept", "*/*");
  }
  if (!parsedURL.protocol || !parsedURL.hostname) {
    throw new TypeError("Only absolute URLs are supported");
  }
  if (!/^https?:$/.test(parsedURL.protocol)) {
    throw new TypeError("Only HTTP(S) protocols are supported");
  }
  if (
    request.signal &&
    request.body instanceof Stream.Readable &&
    !streamDestructionSupported
  ) {
    throw new Error(
      "Cancellation of streamed requests with AbortSignal is not supported in node < 8"
    );
  }
  let contentLengthValue = null;
  if (request.body == null && /^(POST|PUT)$/i.test(request.method)) {
    contentLengthValue = "0";
  }
  if (request.body != null) {
    const totalBytes = getTotalBytes(request);
    if (typeof totalBytes === "number") {
      contentLengthValue = String(totalBytes);
    }
  }
  if (contentLengthValue) {
    headers.set("Content-Length", contentLengthValue);
  }
  if (!headers.has("User-Agent")) {
    headers.set(
      "User-Agent",
      "node-fetch/1.0 (+https://github.com/bitinn/node-fetch)"
    );
  }
  if (request.compress && !headers.has("Accept-Encoding")) {
    headers.set("Accept-Encoding", "gzip,deflate");
  }
  let agent = request.agent;
  if (typeof agent === "function") {
    agent = agent(parsedURL);
  }
  return Object.assign({}, parsedURL, {
    method: request.method,
    headers: exportNodeCompatibleHeaders(headers),
    agent,
  });
}
function AbortError(message) {
  Error.call(this, message);
  this.type = "aborted";
  this.message = message;
  Error.captureStackTrace(this, this.constructor);
}
AbortError.prototype = Object.create(Error.prototype);
AbortError.prototype.constructor = AbortError;
AbortError.prototype.name = "AbortError";
const URL$1 = Url.URL || whatwgUrl.URL;
const PassThrough$1 = Stream.PassThrough;
const isDomainOrSubdomain = function isDomainOrSubdomain2(
  destination,
  original
) {
  const orig = new URL$1(original).hostname;
  const dest = new URL$1(destination).hostname;
  return (
    orig === dest ||
    (orig[orig.length - dest.length - 1] === "." && orig.endsWith(dest))
  );
};
const isSameProtocol = function isSameProtocol2(destination, original) {
  const orig = new URL$1(original).protocol;
  const dest = new URL$1(destination).protocol;
  return orig === dest;
};
function fetch(url, opts) {
  if (!fetch.Promise) {
    throw new Error(
      "native promise missing, set fetch.Promise to your favorite alternative"
    );
  }
  Body.Promise = fetch.Promise;
  return new fetch.Promise(function (resolve, reject) {
    const request = new Request(url, opts);
    const options = getNodeRequestOptions(request);
    const send = (options.protocol === "https:" ? require$$1$5 : http).request;
    const signal = request.signal;
    let response = null;
    const abort = function abort2() {
      let error = new AbortError("The user aborted a request.");
      reject(error);
      if (request.body && request.body instanceof Stream.Readable) {
        destroyStream(request.body, error);
      }
      if (!response || !response.body) return;
      response.body.emit("error", error);
    };
    if (signal && signal.aborted) {
      abort();
      return;
    }
    const abortAndFinalize = function abortAndFinalize2() {
      abort();
      finalize();
    };
    const req = send(options);
    let reqTimeout;
    if (signal) {
      signal.addEventListener("abort", abortAndFinalize);
    }
    function finalize() {
      req.abort();
      if (signal) signal.removeEventListener("abort", abortAndFinalize);
      clearTimeout(reqTimeout);
    }
    if (request.timeout) {
      req.once("socket", function (socket) {
        reqTimeout = setTimeout(function () {
          reject(
            new FetchError(
              `network timeout at: ${request.url}`,
              "request-timeout"
            )
          );
          finalize();
        }, request.timeout);
      });
    }
    req.on("error", function (err) {
      reject(
        new FetchError(
          `request to ${request.url} failed, reason: ${err.message}`,
          "system",
          err
        )
      );
      if (response && response.body) {
        destroyStream(response.body, err);
      }
      finalize();
    });
    fixResponseChunkedTransferBadEnding(req, function (err) {
      if (signal && signal.aborted) {
        return;
      }
      if (response && response.body) {
        destroyStream(response.body, err);
      }
    });
    if (parseInt(process.version.substring(1)) < 14) {
      req.on("socket", function (s) {
        s.addListener("close", function (hadError) {
          const hasDataListener = s.listenerCount("data") > 0;
          if (
            response &&
            hasDataListener &&
            !hadError &&
            !(signal && signal.aborted)
          ) {
            const err = new Error("Premature close");
            err.code = "ERR_STREAM_PREMATURE_CLOSE";
            response.body.emit("error", err);
          }
        });
      });
    }
    req.on("response", function (res) {
      clearTimeout(reqTimeout);
      const headers = createHeadersLenient(res.headers);
      if (fetch.isRedirect(res.statusCode)) {
        const location = headers.get("Location");
        let locationURL = null;
        try {
          locationURL =
            location === null
              ? null
              : new URL$1(location, request.url).toString();
        } catch (err) {
          if (request.redirect !== "manual") {
            reject(
              new FetchError(
                `uri requested responds with an invalid redirect URL: ${location}`,
                "invalid-redirect"
              )
            );
            finalize();
            return;
          }
        }
        switch (request.redirect) {
          case "error":
            reject(
              new FetchError(
                `uri requested responds with a redirect, redirect mode is set to error: ${request.url}`,
                "no-redirect"
              )
            );
            finalize();
            return;
          case "manual":
            if (locationURL !== null) {
              try {
                headers.set("Location", locationURL);
              } catch (err) {
                reject(err);
              }
            }
            break;
          case "follow":
            if (locationURL === null) {
              break;
            }
            if (request.counter >= request.follow) {
              reject(
                new FetchError(
                  `maximum redirect reached at: ${request.url}`,
                  "max-redirect"
                )
              );
              finalize();
              return;
            }
            const requestOpts = {
              headers: new Headers(request.headers),
              follow: request.follow,
              counter: request.counter + 1,
              agent: request.agent,
              compress: request.compress,
              method: request.method,
              body: request.body,
              signal: request.signal,
              timeout: request.timeout,
              size: request.size,
            };
            if (
              !isDomainOrSubdomain(request.url, locationURL) ||
              !isSameProtocol(request.url, locationURL)
            ) {
              for (const name of [
                "authorization",
                "www-authenticate",
                "cookie",
                "cookie2",
              ]) {
                requestOpts.headers.delete(name);
              }
            }
            if (
              res.statusCode !== 303 &&
              request.body &&
              getTotalBytes(request) === null
            ) {
              reject(
                new FetchError(
                  "Cannot follow redirect with body being a readable stream",
                  "unsupported-redirect"
                )
              );
              finalize();
              return;
            }
            if (
              res.statusCode === 303 ||
              ((res.statusCode === 301 || res.statusCode === 302) &&
                request.method === "POST")
            ) {
              requestOpts.method = "GET";
              requestOpts.body = void 0;
              requestOpts.headers.delete("content-length");
            }
            resolve(fetch(new Request(locationURL, requestOpts)));
            finalize();
            return;
        }
      }
      res.once("end", function () {
        if (signal) signal.removeEventListener("abort", abortAndFinalize);
      });
      let body = res.pipe(new PassThrough$1());
      const response_options = {
        url: request.url,
        status: res.statusCode,
        statusText: res.statusMessage,
        headers,
        size: request.size,
        timeout: request.timeout,
        counter: request.counter,
      };
      const codings = headers.get("Content-Encoding");
      if (
        !request.compress ||
        request.method === "HEAD" ||
        codings === null ||
        res.statusCode === 204 ||
        res.statusCode === 304
      ) {
        response = new Response(body, response_options);
        resolve(response);
        return;
      }
      const zlibOptions = {
        flush: zlib.Z_SYNC_FLUSH,
        finishFlush: zlib.Z_SYNC_FLUSH,
      };
      if (codings == "gzip" || codings == "x-gzip") {
        body = body.pipe(zlib.createGunzip(zlibOptions));
        response = new Response(body, response_options);
        resolve(response);
        return;
      }
      if (codings == "deflate" || codings == "x-deflate") {
        const raw = res.pipe(new PassThrough$1());
        raw.once("data", function (chunk) {
          if ((chunk[0] & 15) === 8) {
            body = body.pipe(zlib.createInflate());
          } else {
            body = body.pipe(zlib.createInflateRaw());
          }
          response = new Response(body, response_options);
          resolve(response);
        });
        raw.on("end", function () {
          if (!response) {
            response = new Response(body, response_options);
            resolve(response);
          }
        });
        return;
      }
      if (
        codings == "br" &&
        typeof zlib.createBrotliDecompress === "function"
      ) {
        body = body.pipe(zlib.createBrotliDecompress());
        response = new Response(body, response_options);
        resolve(response);
        return;
      }
      response = new Response(body, response_options);
      resolve(response);
    });
    writeToStream(req, request);
  });
}
function fixResponseChunkedTransferBadEnding(request, errorCallback) {
  let socket;
  request.on("socket", function (s) {
    socket = s;
  });
  request.on("response", function (response) {
    const headers = response.headers;
    if (
      headers["transfer-encoding"] === "chunked" &&
      !headers["content-length"]
    ) {
      response.once("close", function (hadError) {
        const hasDataListener = socket && socket.listenerCount("data") > 0;
        if (hasDataListener && !hadError) {
          const err = new Error("Premature close");
          err.code = "ERR_STREAM_PREMATURE_CLOSE";
          errorCallback(err);
        }
      });
    }
  });
}
function destroyStream(stream2, err) {
  if (stream2.destroy) {
    stream2.destroy(err);
  } else {
    stream2.emit("error", err);
    stream2.end();
  }
}
fetch.isRedirect = function (code) {
  return (
    code === 301 || code === 302 || code === 303 || code === 307 || code === 308
  );
};
fetch.Promise = global.Promise;
const lib = /* @__PURE__ */ Object.freeze(
  /* @__PURE__ */ Object.defineProperty(
    {
      __proto__: null,
      AbortError,
      FetchError,
      Headers,
      Request,
      Response,
      default: fetch,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(lib);
var utils = { exports: {} };
var hasRequiredUtils;
function requireUtils() {
  if (hasRequiredUtils) return utils.exports;
  hasRequiredUtils = 1;
  const actionMessageRegex = /^\u0001ACTION ([^\u0001]+)\u0001$/;
  const justinFanRegex = /^(justinfan)(\d+$)/;
  const unescapeIRCRegex = /\\([sn:r\\])/g;
  const escapeIRCRegex = /([ \n;\r\\])/g;
  const ircEscapedChars = { s: " ", n: "", ":": ";", r: "" };
  const ircUnescapedChars = { " ": "s", "\n": "n", ";": ":", "\r": "r" };
  const urlRegex = new RegExp(
    "^(?:(?:https?|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?!(?:10|127)(?:\\.\\d{1,3}){3})(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))\\.?)(?::\\d{2,5})?(?:[/?#]\\S*)?$",
    "i"
  );
  const regexEmoteRegex = /[|\\^$*+?:#]/;
  const _ = (utils.exports = {
    // Return the second value if the first value is undefined..
    get: (a, b) => (typeof a === "undefined" ? b : a),
    // Indirectly use hasOwnProperty
    hasOwn: (obj, key) => ({}).hasOwnProperty.call(obj, key),
    // Race a promise against a delay..
    promiseDelay: (time) => new Promise((resolve) => setTimeout(resolve, time)),
    // Value is a finite number..
    isFinite: (int) => isFinite(int) && !isNaN(parseFloat(int)),
    // Parse string to number. Returns NaN if string can't be parsed to number..
    toNumber(num, precision) {
      if (num === null) {
        return 0;
      }
      const factor = Math.pow(10, _.isFinite(precision) ? precision : 0);
      return Math.round(num * factor) / factor;
    },
    // Value is an integer..
    isInteger: (int) => !isNaN(_.toNumber(int, 0)),
    // Value is a regex..
    isRegex: (str) => regexEmoteRegex.test(str),
    // Value is a valid url..
    isURL: (str) => urlRegex.test(str),
    // Return a random justinfan username..
    justinfan: () => `justinfan${Math.floor(Math.random() * 8e4 + 1e3)}`,
    // Username is a justinfan username..
    isJustinfan: (username) => justinFanRegex.test(username),
    // Return a valid channel name..
    channel(str) {
      const channel = (str ? str : "").toLowerCase();
      return channel[0] === "#" ? channel : "#" + channel;
    },
    // Return a valid username..
    username(str) {
      const username = (str ? str : "").toLowerCase();
      return username[0] === "#" ? username.slice(1) : username;
    },
    // Return a valid token..
    token: (str) => (str ? str.toLowerCase().replace("oauth:", "") : ""),
    // Return a valid password..
    password(str) {
      const token = _.token(str);
      return token ? `oauth:${token}` : "";
    },
    actionMessage: (msg) => msg.match(actionMessageRegex),
    // Replace all occurences of a string using an object..
    replaceAll(str, obj) {
      if (str === null || typeof str === "undefined") {
        return null;
      }
      for (const x in obj) {
        str = str.replace(new RegExp(x, "g"), obj[x]);
      }
      return str;
    },
    unescapeHtml: (safe) =>
      safe
        .replace(/\\&amp\\;/g, "&")
        .replace(/\\&lt\\;/g, "<")
        .replace(/\\&gt\\;/g, ">")
        .replace(/\\&quot\\;/g, '"')
        .replace(/\\&#039\\;/g, "'"),
    // Escaping values:
    // http://ircv3.net/specs/core/message-tags-3.2.html#escaping-values
    unescapeIRC(msg) {
      if (!msg || typeof msg !== "string" || !msg.includes("\\")) {
        return msg;
      }
      return msg.replace(unescapeIRCRegex, (m, p) =>
        p in ircEscapedChars ? ircEscapedChars[p] : p
      );
    },
    escapeIRC(msg) {
      if (!msg || typeof msg !== "string") {
        return msg;
      }
      return msg.replace(escapeIRCRegex, (m, p) =>
        p in ircUnescapedChars ? `\\${ircUnescapedChars[p]}` : p
      );
    },
    // Add word to a string..
    addWord: (line, word) => (line.length ? line + " " + word : line + word),
    // Split a line but try not to cut a word in half..
    splitLine(input, length) {
      let lastSpace = input.substring(0, length).lastIndexOf(" ");
      if (lastSpace === -1) {
        lastSpace = length - 1;
      }
      return [input.substring(0, lastSpace), input.substring(lastSpace + 1)];
    },
    // Extract a number from a string..
    extractNumber(str) {
      const parts = str.split(" ");
      for (let i = 0; i < parts.length; i++) {
        if (_.isInteger(parts[i])) {
          return ~~parts[i];
        }
      }
      return 0;
    },
    // Format the date..
    formatDate(date) {
      let hours = date.getHours();
      let mins = date.getMinutes();
      hours = (hours < 10 ? "0" : "") + hours;
      mins = (mins < 10 ? "0" : "") + mins;
      return `${hours}:${mins}`;
    },
    // Inherit the prototype methods from one constructor into another..
    inherits(ctor, superCtor) {
      ctor.super_ = superCtor;
      const TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    },
    // Return whether inside a Node application or not..
    isNode() {
      try {
        return (
          typeof process === "object" &&
          Object.prototype.toString.call(process) === "[object process]"
        );
      } catch (e) {}
      return false;
    },
  });
  return utils.exports;
}
var api;
var hasRequiredApi;
function requireApi() {
  if (hasRequiredApi) return api;
  hasRequiredApi = 1;
  const fetch2 = require$$1;
  const _ = requireUtils();
  api = function api2(options, callback) {
    let url = options.url !== void 0 ? options.url : options.uri;
    if (!_.isURL(url)) {
      url = `https://api.twitch.tv/kraken${url[0] === "/" ? url : `/${url}`}`;
    }
    if (_.isNode()) {
      const opts = Object.assign({ method: "GET", json: true }, options);
      if (opts.qs) {
        const qs = new URLSearchParams(opts.qs);
        url += `?${qs}`;
      }
      const fetchOptions = {};
      if ("fetchAgent" in this.opts.connection) {
        fetchOptions.agent = this.opts.connection.fetchAgent;
      }
      const fetchPromise = fetch2(url, {
        ...fetchOptions,
        method: opts.method,
        headers: opts.headers,
        body: opts.body,
      });
      let response = {};
      fetchPromise
        .then((res) => {
          response = { statusCode: res.status, headers: res.headers };
          return opts.json ? res.json() : res.text();
        })
        .then(
          (data) => callback(null, response, data),
          (err) => callback(err, response, null)
        );
    } else {
      const opts = Object.assign({ method: "GET", headers: {} }, options, {
        url,
      });
      const xhr = new XMLHttpRequest();
      xhr.open(opts.method, opts.url, true);
      for (const name in opts.headers) {
        xhr.setRequestHeader(name, opts.headers[name]);
      }
      xhr.responseType = "json";
      xhr.addEventListener("load", (_ev) => {
        if (xhr.readyState === 4) {
          if (xhr.status !== 200) {
            callback(xhr.status, null, null);
          } else {
            callback(null, null, xhr.response);
          }
        }
      });
      xhr.send();
    }
  };
  return api;
}
var commands;
var hasRequiredCommands;
function requireCommands() {
  if (hasRequiredCommands) return commands;
  hasRequiredCommands = 1;
  const _ = requireUtils();
  function followersonly(channel, minutes) {
    channel = _.channel(channel);
    minutes = _.get(minutes, 30);
    return this._sendCommand(
      null,
      channel,
      `/followers ${minutes}`,
      (resolve, reject) => {
        this.once("_promiseFollowers", (err) => {
          if (!err) {
            resolve([channel, ~~minutes]);
          } else {
            reject(err);
          }
        });
      }
    );
  }
  function followersonlyoff(channel) {
    channel = _.channel(channel);
    return this._sendCommand(
      null,
      channel,
      "/followersoff",
      (resolve, reject) => {
        this.once("_promiseFollowersoff", (err) => {
          if (!err) {
            resolve([channel]);
          } else {
            reject(err);
          }
        });
      }
    );
  }
  function part(channel) {
    channel = _.channel(channel);
    return this._sendCommand(
      null,
      null,
      `PART ${channel}`,
      (resolve, reject) => {
        this.once("_promisePart", (err) => {
          if (!err) {
            resolve([channel]);
          } else {
            reject(err);
          }
        });
      }
    );
  }
  function r9kbeta(channel) {
    channel = _.channel(channel);
    return this._sendCommand(null, channel, "/r9kbeta", (resolve, reject) => {
      this.once("_promiseR9kbeta", (err) => {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  }
  function r9kbetaoff(channel) {
    channel = _.channel(channel);
    return this._sendCommand(
      null,
      channel,
      "/r9kbetaoff",
      (resolve, reject) => {
        this.once("_promiseR9kbetaoff", (err) => {
          if (!err) {
            resolve([channel]);
          } else {
            reject(err);
          }
        });
      }
    );
  }
  function slow(channel, seconds) {
    channel = _.channel(channel);
    seconds = _.get(seconds, 300);
    return this._sendCommand(
      null,
      channel,
      `/slow ${seconds}`,
      (resolve, reject) => {
        this.once("_promiseSlow", (err) => {
          if (!err) {
            resolve([channel, ~~seconds]);
          } else {
            reject(err);
          }
        });
      }
    );
  }
  function slowoff(channel) {
    channel = _.channel(channel);
    return this._sendCommand(null, channel, "/slowoff", (resolve, reject) => {
      this.once("_promiseSlowoff", (err) => {
        if (!err) {
          resolve([channel]);
        } else {
          reject(err);
        }
      });
    });
  }
  commands = {
    // Send action message (/me <message>) on a channel..
    action(channel, message) {
      channel = _.channel(channel);
      message = `ACTION ${message}`;
      return this._sendMessage(
        this._getPromiseDelay(),
        channel,
        message,
        (resolve, _reject) => {
          resolve([channel, message]);
        }
      );
    },
    // Ban username on channel..
    ban(channel, username, reason) {
      channel = _.channel(channel);
      username = _.username(username);
      reason = _.get(reason, "");
      return this._sendCommand(
        null,
        channel,
        `/ban ${username} ${reason}`,
        (resolve, reject) => {
          this.once("_promiseBan", (err) => {
            if (!err) {
              resolve([channel, username, reason]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Clear all messages on a channel..
    clear(channel) {
      channel = _.channel(channel);
      return this._sendCommand(null, channel, "/clear", (resolve, reject) => {
        this.once("_promiseClear", (err) => {
          if (!err) {
            resolve([channel]);
          } else {
            reject(err);
          }
        });
      });
    },
    // Change the color of your username..
    color(channel, newColor) {
      newColor = _.get(newColor, channel);
      return this._sendCommand(
        null,
        "#tmijs",
        `/color ${newColor}`,
        (resolve, reject) => {
          this.once("_promiseColor", (err) => {
            if (!err) {
              resolve([newColor]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Run commercial on a channel for X seconds..
    commercial(channel, seconds) {
      channel = _.channel(channel);
      seconds = _.get(seconds, 30);
      return this._sendCommand(
        null,
        channel,
        `/commercial ${seconds}`,
        (resolve, reject) => {
          this.once("_promiseCommercial", (err) => {
            if (!err) {
              resolve([channel, ~~seconds]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Delete a specific message on a channel
    deletemessage(channel, messageUUID) {
      channel = _.channel(channel);
      return this._sendCommand(
        null,
        channel,
        `/delete ${messageUUID}`,
        (resolve, reject) => {
          this.once("_promiseDeletemessage", (err) => {
            if (!err) {
              resolve([channel]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Enable emote-only mode on a channel..
    emoteonly(channel) {
      channel = _.channel(channel);
      return this._sendCommand(
        null,
        channel,
        "/emoteonly",
        (resolve, reject) => {
          this.once("_promiseEmoteonly", (err) => {
            if (!err) {
              resolve([channel]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Disable emote-only mode on a channel..
    emoteonlyoff(channel) {
      channel = _.channel(channel);
      return this._sendCommand(
        null,
        channel,
        "/emoteonlyoff",
        (resolve, reject) => {
          this.once("_promiseEmoteonlyoff", (err) => {
            if (!err) {
              resolve([channel]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Enable followers-only mode on a channel..
    followersonly,
    // Alias for followersonly()..
    followersmode: followersonly,
    // Disable followers-only mode on a channel..
    followersonlyoff,
    // Alias for followersonlyoff()..
    followersmodeoff: followersonlyoff,
    // Host a channel..
    host(channel, target) {
      channel = _.channel(channel);
      target = _.username(target);
      return this._sendCommand(
        2e3,
        channel,
        `/host ${target}`,
        (resolve, reject) => {
          this.once("_promiseHost", (err, remaining) => {
            if (!err) {
              resolve([channel, target, ~~remaining]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Join a channel..
    join(channel) {
      channel = _.channel(channel);
      return this._sendCommand(
        void 0,
        null,
        `JOIN ${channel}`,
        (resolve, reject) => {
          const eventName = "_promiseJoin";
          let hasFulfilled = false;
          const listener = (err, joinedChannel) => {
            if (channel === _.channel(joinedChannel)) {
              this.removeListener(eventName, listener);
              hasFulfilled = true;
              if (!err) {
                resolve([channel]);
              } else {
                reject(err);
              }
            }
          };
          this.on(eventName, listener);
          const delay = this._getPromiseDelay();
          _.promiseDelay(delay).then(() => {
            if (!hasFulfilled) {
              this.emit(eventName, "No response from Twitch.", channel);
            }
          });
        }
      );
    },
    // Mod username on channel..
    mod(channel, username) {
      channel = _.channel(channel);
      username = _.username(username);
      return this._sendCommand(
        null,
        channel,
        `/mod ${username}`,
        (resolve, reject) => {
          this.once("_promiseMod", (err) => {
            if (!err) {
              resolve([channel, username]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Get list of mods on a channel..
    mods(channel) {
      channel = _.channel(channel);
      return this._sendCommand(null, channel, "/mods", (resolve, reject) => {
        this.once("_promiseMods", (err, mods) => {
          if (!err) {
            mods.forEach((username) => {
              if (!this.moderators[channel]) {
                this.moderators[channel] = [];
              }
              if (!this.moderators[channel].includes(username)) {
                this.moderators[channel].push(username);
              }
            });
            resolve(mods);
          } else {
            reject(err);
          }
        });
      });
    },
    // Leave a channel..
    part,
    // Alias for part()..
    leave: part,
    // Send a ping to the server..
    ping() {
      return this._sendCommand(null, null, "PING", (resolve, _reject) => {
        this.latency = /* @__PURE__ */ new Date();
        this.pingTimeout = setTimeout(
          () => {
            if (this.ws !== null) {
              this.wasCloseCalled = false;
              this.log.error("Ping timeout.");
              this.ws.close();
              clearInterval(this.pingLoop);
              clearTimeout(this.pingTimeout);
            }
          },
          _.get(this.opts.connection.timeout, 9999)
        );
        this.once("_promisePing", (latency) => resolve([parseFloat(latency)]));
      });
    },
    // Enable R9KBeta mode on a channel..
    r9kbeta,
    // Alias for r9kbeta()..
    r9kmode: r9kbeta,
    // Disable R9KBeta mode on a channel..
    r9kbetaoff,
    // Alias for r9kbetaoff()..
    r9kmodeoff: r9kbetaoff,
    // Send a raw message to the server..
    raw(message) {
      return this._sendCommand(null, null, message, (resolve, _reject) => {
        resolve([message]);
      });
    },
    // Send a message on a channel..
    say(channel, message) {
      channel = _.channel(channel);
      if (
        (message.startsWith(".") && !message.startsWith("..")) ||
        message.startsWith("/") ||
        message.startsWith("\\")
      ) {
        if (message.substr(1, 3) === "me ") {
          return this.action(channel, message.substr(4));
        } else {
          return this._sendCommand(
            null,
            channel,
            message,
            (resolve, _reject) => {
              resolve([channel, message]);
            }
          );
        }
      }
      return this._sendMessage(
        this._getPromiseDelay(),
        channel,
        message,
        (resolve, _reject) => {
          resolve([channel, message]);
        }
      );
    },
    // Enable slow mode on a channel..
    slow,
    // Alias for slow()..
    slowmode: slow,
    // Disable slow mode on a channel..
    slowoff,
    // Alias for slowoff()..
    slowmodeoff: slowoff,
    // Enable subscribers mode on a channel..
    subscribers(channel) {
      channel = _.channel(channel);
      return this._sendCommand(
        null,
        channel,
        "/subscribers",
        (resolve, reject) => {
          this.once("_promiseSubscribers", (err) => {
            if (!err) {
              resolve([channel]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Disable subscribers mode on a channel..
    subscribersoff(channel) {
      channel = _.channel(channel);
      return this._sendCommand(
        null,
        channel,
        "/subscribersoff",
        (resolve, reject) => {
          this.once("_promiseSubscribersoff", (err) => {
            if (!err) {
              resolve([channel]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Timeout username on channel for X seconds..
    timeout(channel, username, seconds, reason) {
      channel = _.channel(channel);
      username = _.username(username);
      if (seconds !== null && !_.isInteger(seconds)) {
        reason = seconds;
        seconds = 300;
      }
      seconds = _.get(seconds, 300);
      reason = _.get(reason, "");
      return this._sendCommand(
        null,
        channel,
        `/timeout ${username} ${seconds} ${reason}`,
        (resolve, reject) => {
          this.once("_promiseTimeout", (err) => {
            if (!err) {
              resolve([channel, username, ~~seconds, reason]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Unban username on channel..
    unban(channel, username) {
      channel = _.channel(channel);
      username = _.username(username);
      return this._sendCommand(
        null,
        channel,
        `/unban ${username}`,
        (resolve, reject) => {
          this.once("_promiseUnban", (err) => {
            if (!err) {
              resolve([channel, username]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // End the current hosting..
    unhost(channel) {
      channel = _.channel(channel);
      return this._sendCommand(2e3, channel, "/unhost", (resolve, reject) => {
        this.once("_promiseUnhost", (err) => {
          if (!err) {
            resolve([channel]);
          } else {
            reject(err);
          }
        });
      });
    },
    // Unmod username on channel..
    unmod(channel, username) {
      channel = _.channel(channel);
      username = _.username(username);
      return this._sendCommand(
        null,
        channel,
        `/unmod ${username}`,
        (resolve, reject) => {
          this.once("_promiseUnmod", (err) => {
            if (!err) {
              resolve([channel, username]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Unvip username on channel..
    unvip(channel, username) {
      channel = _.channel(channel);
      username = _.username(username);
      return this._sendCommand(
        null,
        channel,
        `/unvip ${username}`,
        (resolve, reject) => {
          this.once("_promiseUnvip", (err) => {
            if (!err) {
              resolve([channel, username]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Add username to VIP list on channel..
    vip(channel, username) {
      channel = _.channel(channel);
      username = _.username(username);
      return this._sendCommand(
        null,
        channel,
        `/vip ${username}`,
        (resolve, reject) => {
          this.once("_promiseVip", (err) => {
            if (!err) {
              resolve([channel, username]);
            } else {
              reject(err);
            }
          });
        }
      );
    },
    // Get list of VIPs on a channel..
    vips(channel) {
      channel = _.channel(channel);
      return this._sendCommand(null, channel, "/vips", (resolve, reject) => {
        this.once("_promiseVips", (err, vips) => {
          if (!err) {
            resolve(vips);
          } else {
            reject(err);
          }
        });
      });
    },
    // Send an whisper message to a user..
    whisper(username, message) {
      username = _.username(username);
      if (username === this.getUsername()) {
        return Promise.reject("Cannot send a whisper to the same account.");
      }
      return this._sendCommand(
        null,
        "#tmijs",
        `/w ${username} ${message}`,
        (_resolve, reject) => {
          this.once("_promiseWhisper", (err) => {
            if (err) {
              reject(err);
            }
          });
        }
      ).catch((err) => {
        if (
          err &&
          typeof err === "string" &&
          err.indexOf("No response from Twitch.") !== 0
        ) {
          throw err;
        }
        const from = _.channel(username);
        const userstate = Object.assign(
          {
            "message-type": "whisper",
            "message-id": null,
            "thread-id": null,
            username: this.getUsername(),
          },
          this.globaluserstate
        );
        this.emits(
          ["whisper", "message"],
          [
            [from, userstate, message, true],
            [from, userstate, message, true],
          ]
        );
        return [username, message];
      });
    },
  };
  return commands;
}
var events;
var hasRequiredEvents;
function requireEvents() {
  if (hasRequiredEvents) return events;
  hasRequiredEvents = 1;
  function EventEmitter2() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || void 0;
  }
  events = EventEmitter2;
  EventEmitter2.EventEmitter = EventEmitter2;
  EventEmitter2.prototype._events = void 0;
  EventEmitter2.prototype._maxListeners = void 0;
  EventEmitter2.defaultMaxListeners = 10;
  EventEmitter2.prototype.setMaxListeners = function (n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) {
      throw TypeError("n must be a positive number");
    }
    this._maxListeners = n;
    return this;
  };
  EventEmitter2.prototype.emit = function (type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) {
      this._events = {};
    }
    if (type === "error") {
      if (
        !this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)
      ) {
        er = arguments[1];
        if (er instanceof Error) {
          throw er;
        }
        throw TypeError('Uncaught, unspecified "error" event.');
      }
    }
    handler = this._events[type];
    if (isUndefined(handler)) {
      return false;
    }
    if (isFunction(handler)) {
      switch (arguments.length) {
        // fast cases
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        // slower
        default:
          args = Array.prototype.slice.call(arguments, 1);
          handler.apply(this, args);
      }
    } else if (isObject(handler)) {
      args = Array.prototype.slice.call(arguments, 1);
      listeners = handler.slice();
      len = listeners.length;
      for (i = 0; i < len; i++) {
        listeners[i].apply(this, args);
      }
    }
    return true;
  };
  EventEmitter2.prototype.addListener = function (type, listener) {
    var m;
    if (!isFunction(listener)) {
      throw TypeError("listener must be a function");
    }
    if (!this._events) {
      this._events = {};
    }
    if (this._events.newListener) {
      this.emit(
        "newListener",
        type,
        isFunction(listener.listener) ? listener.listener : listener
      );
    }
    if (!this._events[type]) {
      this._events[type] = listener;
    } else if (isObject(this._events[type])) {
      this._events[type].push(listener);
    } else {
      this._events[type] = [this._events[type], listener];
    }
    if (isObject(this._events[type]) && !this._events[type].warned) {
      if (!isUndefined(this._maxListeners)) {
        m = this._maxListeners;
      } else {
        m = EventEmitter2.defaultMaxListeners;
      }
      if (m && m > 0 && this._events[type].length > m) {
        this._events[type].warned = true;
        console.error(
          "(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",
          this._events[type].length
        );
        if (typeof console.trace === "function") {
          console.trace();
        }
      }
    }
    return this;
  };
  EventEmitter2.prototype.on = EventEmitter2.prototype.addListener;
  EventEmitter2.prototype.once = function (type, listener) {
    if (!isFunction(listener)) {
      throw TypeError("listener must be a function");
    }
    var fired = false;
    if (this._events.hasOwnProperty(type) && type.charAt(0) === "_") {
      var count = 1;
      var searchFor = type;
      for (var k in this._events) {
        if (this._events.hasOwnProperty(k) && k.startsWith(searchFor)) {
          count++;
        }
      }
      type = type + count;
    }
    function g() {
      if (type.charAt(0) === "_" && !isNaN(type.substr(type.length - 1))) {
        type = type.substring(0, type.length - 1);
      }
      this.removeListener(type, g);
      if (!fired) {
        fired = true;
        listener.apply(this, arguments);
      }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
  };
  EventEmitter2.prototype.removeListener = function (type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) {
      throw TypeError("listener must be a function");
    }
    if (!this._events || !this._events[type]) {
      return this;
    }
    list = this._events[type];
    length = list.length;
    position = -1;
    if (
      list === listener ||
      (isFunction(list.listener) && list.listener === listener)
    ) {
      delete this._events[type];
      if (this._events.hasOwnProperty(type + "2") && type.charAt(0) === "_") {
        var searchFor = type;
        for (var k in this._events) {
          if (this._events.hasOwnProperty(k) && k.startsWith(searchFor)) {
            if (!isNaN(parseInt(k.substr(k.length - 1)))) {
              this._events[type + parseInt(k.substr(k.length - 1) - 1)] =
                this._events[k];
              delete this._events[k];
            }
          }
        }
        this._events[type] = this._events[type + "1"];
        delete this._events[type + "1"];
      }
      if (this._events.removeListener) {
        this.emit("removeListener", type, listener);
      }
    } else if (isObject(list)) {
      for (i = length; i-- > 0; ) {
        if (
          list[i] === listener ||
          (list[i].listener && list[i].listener === listener)
        ) {
          position = i;
          break;
        }
      }
      if (position < 0) {
        return this;
      }
      if (list.length === 1) {
        list.length = 0;
        delete this._events[type];
      } else {
        list.splice(position, 1);
      }
      if (this._events.removeListener) {
        this.emit("removeListener", type, listener);
      }
    }
    return this;
  };
  EventEmitter2.prototype.removeAllListeners = function (type) {
    var key, listeners;
    if (!this._events) {
      return this;
    }
    if (!this._events.removeListener) {
      if (arguments.length === 0) {
        this._events = {};
      } else if (this._events[type]) {
        delete this._events[type];
      }
      return this;
    }
    if (arguments.length === 0) {
      for (key in this._events) {
        if (key === "removeListener") {
          continue;
        }
        this.removeAllListeners(key);
      }
      this.removeAllListeners("removeListener");
      this._events = {};
      return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) {
      this.removeListener(type, listeners);
    } else if (listeners) {
      while (listeners.length) {
        this.removeListener(type, listeners[listeners.length - 1]);
      }
    }
    delete this._events[type];
    return this;
  };
  EventEmitter2.prototype.listeners = function (type) {
    var ret;
    if (!this._events || !this._events[type]) {
      ret = [];
    } else if (isFunction(this._events[type])) {
      ret = [this._events[type]];
    } else {
      ret = this._events[type].slice();
    }
    return ret;
  };
  EventEmitter2.prototype.listenerCount = function (type) {
    if (this._events) {
      var evlistener = this._events[type];
      if (isFunction(evlistener)) {
        return 1;
      } else if (evlistener) {
        return evlistener.length;
      }
    }
    return 0;
  };
  EventEmitter2.listenerCount = function (emitter, type) {
    return emitter.listenerCount(type);
  };
  function isFunction(arg) {
    return typeof arg === "function";
  }
  function isNumber(arg) {
    return typeof arg === "number";
  }
  function isObject(arg) {
    return typeof arg === "object" && arg !== null;
  }
  function isUndefined(arg) {
    return arg === void 0;
  }
  return events;
}
var logger;
var hasRequiredLogger;
function requireLogger() {
  if (hasRequiredLogger) return logger;
  hasRequiredLogger = 1;
  const _ = requireUtils();
  let currentLevel = "info";
  const levels = { trace: 0, debug: 1, info: 2, warn: 3, error: 4, fatal: 5 };
  function log(level) {
    return function (message) {
      if (levels[level] >= levels[currentLevel]) {
        console.log(
          `[${_.formatDate(/* @__PURE__ */ new Date())}] ${level}: ${message}`
        );
      }
    };
  }
  logger = {
    // Change the current logging level..
    setLevel(level) {
      currentLevel = level;
    },
    trace: log("trace"),
    debug: log("debug"),
    info: log("info"),
    warn: log("warn"),
    error: log("error"),
    fatal: log("fatal"),
  };
  return logger;
}
var parser;
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser;
  hasRequiredParser = 1;
  const _ = requireUtils();
  const nonspaceRegex = /\S+/g;
  function parseComplexTag(tags, tagKey, splA = ",", splB = "/", splC) {
    const raw = tags[tagKey];
    if (raw === void 0) {
      return tags;
    }
    const tagIsString = typeof raw === "string";
    tags[tagKey + "-raw"] = tagIsString ? raw : null;
    if (raw === true) {
      tags[tagKey] = null;
      return tags;
    }
    tags[tagKey] = {};
    if (tagIsString) {
      const spl = raw.split(splA);
      for (let i = 0; i < spl.length; i++) {
        const parts = spl[i].split(splB);
        let val = parts[1];
        if (splC !== void 0 && val) {
          val = val.split(splC);
        }
        tags[tagKey][parts[0]] = val || null;
      }
    }
    return tags;
  }
  parser = {
    // Parse Twitch badges..
    badges: (tags) => parseComplexTag(tags, "badges"),
    // Parse Twitch badge-info..
    badgeInfo: (tags) => parseComplexTag(tags, "badge-info"),
    // Parse Twitch emotes..
    emotes: (tags) => parseComplexTag(tags, "emotes", "/", ":", ","),
    // Parse regex emotes..
    emoteRegex(msg, code, id, obj) {
      nonspaceRegex.lastIndex = 0;
      const regex = new RegExp(
        "(\\b|^|\\s)" + _.unescapeHtml(code) + "(\\b|$|\\s)"
      );
      let match;
      while ((match = nonspaceRegex.exec(msg)) !== null) {
        if (regex.test(match[0])) {
          obj[id] = obj[id] || [];
          obj[id].push([match.index, nonspaceRegex.lastIndex - 1]);
        }
      }
    },
    // Parse string emotes..
    emoteString(msg, code, id, obj) {
      nonspaceRegex.lastIndex = 0;
      let match;
      while ((match = nonspaceRegex.exec(msg)) !== null) {
        if (match[0] === _.unescapeHtml(code)) {
          obj[id] = obj[id] || [];
          obj[id].push([match.index, nonspaceRegex.lastIndex - 1]);
        }
      }
    },
    // Transform the emotes object to a string with the following format..
    // emote_id:first_index-last_index,another_first-another_last/another_emote_id:first_index-last_index
    transformEmotes(emotes) {
      let transformed = "";
      Object.keys(emotes).forEach((id) => {
        transformed = `${transformed + id}:`;
        emotes[id].forEach(
          (index) => (transformed = `${transformed + index.join("-")},`)
        );
        transformed = `${transformed.slice(0, -1)}/`;
      });
      return transformed.slice(0, -1);
    },
    formTags(tags) {
      const result = [];
      for (const key in tags) {
        const value = _.escapeIRC(tags[key]);
        result.push(`${key}=${value}`);
      }
      return `@${result.join(";")}`;
    },
    // Parse Twitch messages..
    msg(data) {
      const message = {
        raw: data,
        tags: {},
        prefix: null,
        command: null,
        params: [],
      };
      let position = 0;
      let nextspace = 0;
      if (data.charCodeAt(0) === 64) {
        nextspace = data.indexOf(" ");
        if (nextspace === -1) {
          return null;
        }
        const rawTags = data.slice(1, nextspace).split(";");
        for (let i = 0; i < rawTags.length; i++) {
          const tag = rawTags[i];
          const pair = tag.split("=");
          message.tags[pair[0]] = tag.substring(tag.indexOf("=") + 1) || true;
        }
        position = nextspace + 1;
      }
      while (data.charCodeAt(position) === 32) {
        position++;
      }
      if (data.charCodeAt(position) === 58) {
        nextspace = data.indexOf(" ", position);
        if (nextspace === -1) {
          return null;
        }
        message.prefix = data.slice(position + 1, nextspace);
        position = nextspace + 1;
        while (data.charCodeAt(position) === 32) {
          position++;
        }
      }
      nextspace = data.indexOf(" ", position);
      if (nextspace === -1) {
        if (data.length > position) {
          message.command = data.slice(position);
          return message;
        }
        return null;
      }
      message.command = data.slice(position, nextspace);
      position = nextspace + 1;
      while (data.charCodeAt(position) === 32) {
        position++;
      }
      while (position < data.length) {
        nextspace = data.indexOf(" ", position);
        if (data.charCodeAt(position) === 58) {
          message.params.push(data.slice(position + 1));
          break;
        }
        if (nextspace !== -1) {
          message.params.push(data.slice(position, nextspace));
          position = nextspace + 1;
          while (data.charCodeAt(position) === 32) {
            position++;
          }
          continue;
        }
        if (nextspace === -1) {
          message.params.push(data.slice(position));
          break;
        }
      }
      return message;
    },
  };
  return parser;
}
var timer;
var hasRequiredTimer;
function requireTimer() {
  if (hasRequiredTimer) return timer;
  hasRequiredTimer = 1;
  class Queue {
    constructor(defaultDelay) {
      this.queue = [];
      this.index = 0;
      this.defaultDelay = defaultDelay === void 0 ? 3e3 : defaultDelay;
    }
    // Add a new function to the queue..
    add(fn, delay) {
      this.queue.push({ fn, delay });
    }
    // Go to the next in queue..
    next() {
      const i = this.index++;
      const at = this.queue[i];
      if (!at) {
        return;
      }
      const next = this.queue[this.index];
      at.fn();
      if (next) {
        const delay = next.delay === void 0 ? this.defaultDelay : next.delay;
        setTimeout(() => this.next(), delay);
      }
    }
  }
  timer = Queue;
  return timer;
}
var hasRequiredClient;
function requireClient() {
  if (hasRequiredClient) return client.exports;
  hasRequiredClient = 1;
  (function (module2) {
    const _global =
      typeof commonjsGlobal !== "undefined"
        ? commonjsGlobal
        : typeof window !== "undefined"
          ? window
          : {};
    const _WebSocket = _global.WebSocket || requireWs();
    const _fetch = _global.fetch || require$$1;
    const api2 = requireApi();
    const commands2 = requireCommands();
    const EventEmitter2 = requireEvents().EventEmitter;
    const logger2 = requireLogger();
    const parse = requireParser();
    const Queue = requireTimer();
    const _ = requireUtils();
    let _apiWarned = false;
    const client2 = function client3(opts) {
      if (this instanceof client3 === false) {
        return new client3(opts);
      }
      this.opts = _.get(opts, {});
      this.opts.channels = this.opts.channels || [];
      this.opts.connection = this.opts.connection || {};
      this.opts.identity = this.opts.identity || {};
      this.opts.options = this.opts.options || {};
      this.clientId = _.get(this.opts.options.clientId, null);
      this._globalDefaultChannel = _.channel(
        _.get(this.opts.options.globalDefaultChannel, "#tmijs")
      );
      this._skipMembership = _.get(this.opts.options.skipMembership, false);
      this._skipUpdatingEmotesets = _.get(
        this.opts.options.skipUpdatingEmotesets,
        false
      );
      this._updateEmotesetsTimer = null;
      this._updateEmotesetsTimerDelay = _.get(
        this.opts.options.updateEmotesetsTimer,
        6e4
      );
      this.maxReconnectAttempts = _.get(
        this.opts.connection.maxReconnectAttempts,
        Infinity
      );
      this.maxReconnectInterval = _.get(
        this.opts.connection.maxReconnectInterval,
        3e4
      );
      this.reconnect = _.get(this.opts.connection.reconnect, true);
      this.reconnectDecay = _.get(this.opts.connection.reconnectDecay, 1.5);
      this.reconnectInterval = _.get(
        this.opts.connection.reconnectInterval,
        1e3
      );
      this.reconnecting = false;
      this.reconnections = 0;
      this.reconnectTimer = this.reconnectInterval;
      this.secure = _.get(
        this.opts.connection.secure,
        !this.opts.connection.server && !this.opts.connection.port
      );
      this.emotes = "";
      this.emotesets = {};
      this.channels = [];
      this.currentLatency = 0;
      this.globaluserstate = {};
      this.lastJoined = "";
      this.latency = /* @__PURE__ */ new Date();
      this.moderators = {};
      this.pingLoop = null;
      this.pingTimeout = null;
      this.reason = "";
      this.username = "";
      this.userstate = {};
      this.wasCloseCalled = false;
      this.ws = null;
      let level = "error";
      if (this.opts.options.debug) {
        level = "info";
      }
      this.log = this.opts.logger || logger2;
      try {
        logger2.setLevel(level);
      } catch (err) {}
      this.opts.channels.forEach(
        (part, index, theArray) => (theArray[index] = _.channel(part))
      );
      EventEmitter2.call(this);
      this.setMaxListeners(0);
    };
    _.inherits(client2, EventEmitter2);
    for (const methodName in commands2) {
      client2.prototype[methodName] = commands2[methodName];
    }
    client2.prototype.emits = function emits(types, values) {
      for (let i = 0; i < types.length; i++) {
        const val = i < values.length ? values[i] : values[values.length - 1];
        this.emit.apply(this, [types[i]].concat(val));
      }
    };
    client2.prototype.api = function (...args) {
      if (!_apiWarned) {
        this.log.warn(
          "Client.prototype.api is deprecated and will be removed for version 2.0.0"
        );
        _apiWarned = true;
      }
      api2(...args);
    };
    client2.prototype.handleMessage = function handleMessage(message) {
      if (!message) {
        return;
      }
      if (this.listenerCount("raw_message")) {
        this.emit("raw_message", JSON.parse(JSON.stringify(message)), message);
      }
      const channel = _.channel(_.get(message.params[0], null));
      let msg = _.get(message.params[1], null);
      const msgid = _.get(message.tags["msg-id"], null);
      const tags = (message.tags = parse.badges(
        parse.badgeInfo(parse.emotes(message.tags))
      ));
      for (const key in tags) {
        if (key === "emote-sets" || key === "ban-duration" || key === "bits") {
          continue;
        }
        let value = tags[key];
        if (typeof value === "boolean") {
          value = null;
        } else if (value === "1") {
          value = true;
        } else if (value === "0") {
          value = false;
        } else if (typeof value === "string") {
          value = _.unescapeIRC(value);
        }
        tags[key] = value;
      }
      if (message.prefix === null) {
        switch (message.command) {
          // Received PING from server..
          case "PING":
            this.emit("ping");
            if (this._isConnected()) {
              this.ws.send("PONG");
            }
            break;
          // Received PONG from server, return current latency..
          case "PONG": {
            const currDate = /* @__PURE__ */ new Date();
            this.currentLatency =
              (currDate.getTime() - this.latency.getTime()) / 1e3;
            this.emits(["pong", "_promisePing"], [[this.currentLatency]]);
            clearTimeout(this.pingTimeout);
            break;
          }
          default:
            this.log.warn(`Could not parse message with no prefix:
${JSON.stringify(message, null, 4)}`);
            break;
        }
      } else if (message.prefix === "tmi.twitch.tv") {
        switch (message.command) {
          case "002":
          case "003":
          case "004":
          case "372":
          case "375":
          case "CAP":
            break;
          // Retrieve username from server..
          case "001":
            this.username = message.params[0];
            break;
          // Connected to server..
          case "376": {
            this.log.info("Connected to server.");
            this.userstate[this._globalDefaultChannel] = {};
            this.emits(
              ["connected", "_promiseConnect"],
              [[this.server, this.port], [null]]
            );
            this.reconnections = 0;
            this.reconnectTimer = this.reconnectInterval;
            this.pingLoop = setInterval(() => {
              if (this._isConnected()) {
                this.ws.send("PING");
              }
              this.latency = /* @__PURE__ */ new Date();
              this.pingTimeout = setTimeout(
                () => {
                  if (this.ws !== null) {
                    this.wasCloseCalled = false;
                    this.log.error("Ping timeout.");
                    this.ws.close();
                    clearInterval(this.pingLoop);
                    clearTimeout(this.pingTimeout);
                    clearTimeout(this._updateEmotesetsTimer);
                  }
                },
                _.get(this.opts.connection.timeout, 9999)
              );
            }, 6e4);
            let joinInterval = _.get(this.opts.options.joinInterval, 2e3);
            if (joinInterval < 300) {
              joinInterval = 300;
            }
            const joinQueue = new Queue(joinInterval);
            const joinChannels = [
              .../* @__PURE__ */ new Set([
                ...this.opts.channels,
                ...this.channels,
              ]),
            ];
            this.channels = [];
            for (let i = 0; i < joinChannels.length; i++) {
              const channel2 = joinChannels[i];
              joinQueue.add(() => {
                if (this._isConnected()) {
                  this.join(channel2).catch((err) => this.log.error(err));
                }
              });
            }
            joinQueue.next();
            break;
          }
          // https://github.com/justintv/Twitch-API/blob/master/chat/capabilities.md#notice
          case "NOTICE": {
            const nullArr = [null];
            const noticeArr = [channel, msgid, msg];
            const msgidArr = [msgid];
            const channelTrueArr = [channel, true];
            const channelFalseArr = [channel, false];
            const noticeAndNull = [noticeArr, nullArr];
            const noticeAndMsgid = [noticeArr, msgidArr];
            const basicLog = `[${channel}] ${msg}`;
            switch (msgid) {
              // This room is now in subscribers-only mode.
              case "subs_on":
                this.log.info(
                  `[${channel}] This room is now in subscribers-only mode.`
                );
                this.emits(
                  ["subscriber", "subscribers", "_promiseSubscribers"],
                  [channelTrueArr, channelTrueArr, nullArr]
                );
                break;
              // This room is no longer in subscribers-only mode.
              case "subs_off":
                this.log.info(
                  `[${channel}] This room is no longer in subscribers-only mode.`
                );
                this.emits(
                  ["subscriber", "subscribers", "_promiseSubscribersoff"],
                  [channelFalseArr, channelFalseArr, nullArr]
                );
                break;
              // This room is now in emote-only mode.
              case "emote_only_on":
                this.log.info(
                  `[${channel}] This room is now in emote-only mode.`
                );
                this.emits(
                  ["emoteonly", "_promiseEmoteonly"],
                  [channelTrueArr, nullArr]
                );
                break;
              // This room is no longer in emote-only mode.
              case "emote_only_off":
                this.log.info(
                  `[${channel}] This room is no longer in emote-only mode.`
                );
                this.emits(
                  ["emoteonly", "_promiseEmoteonlyoff"],
                  [channelFalseArr, nullArr]
                );
                break;
              // Do not handle slow_on/off here, listen to the ROOMSTATE notice instead as it returns the delay.
              case "slow_on":
              case "slow_off":
                break;
              // Do not handle followers_on/off here, listen to the ROOMSTATE notice instead as it returns the delay.
              case "followers_on_zero":
              case "followers_on":
              case "followers_off":
                break;
              // This room is now in r9k mode.
              case "r9k_on":
                this.log.info(`[${channel}] This room is now in r9k mode.`);
                this.emits(
                  ["r9kmode", "r9kbeta", "_promiseR9kbeta"],
                  [channelTrueArr, channelTrueArr, nullArr]
                );
                break;
              // This room is no longer in r9k mode.
              case "r9k_off":
                this.log.info(
                  `[${channel}] This room is no longer in r9k mode.`
                );
                this.emits(
                  ["r9kmode", "r9kbeta", "_promiseR9kbetaoff"],
                  [channelFalseArr, channelFalseArr, nullArr]
                );
                break;
              // The moderators of this room are: [..., ...]
              case "room_mods": {
                const listSplit = msg.split(": ");
                const mods = (listSplit.length > 1 ? listSplit[1] : "")
                  .toLowerCase()
                  .split(", ")
                  .filter((n) => n);
                this.emits(
                  ["_promiseMods", "mods"],
                  [
                    [null, mods],
                    [channel, mods],
                  ]
                );
                break;
              }
              // There are no moderators for this room.
              case "no_mods":
                this.emits(
                  ["_promiseMods", "mods"],
                  [
                    [null, []],
                    [channel, []],
                  ]
                );
                break;
              // The VIPs of this channel are: [..., ...]
              case "vips_success": {
                if (msg.endsWith(".")) {
                  msg = msg.slice(0, -1);
                }
                const listSplit = msg.split(": ");
                const vips = (listSplit.length > 1 ? listSplit[1] : "")
                  .toLowerCase()
                  .split(", ")
                  .filter((n) => n);
                this.emits(
                  ["_promiseVips", "vips"],
                  [
                    [null, vips],
                    [channel, vips],
                  ]
                );
                break;
              }
              // There are no VIPs for this room.
              case "no_vips":
                this.emits(
                  ["_promiseVips", "vips"],
                  [
                    [null, []],
                    [channel, []],
                  ]
                );
                break;
              // Ban command failed..
              case "already_banned":
              case "bad_ban_admin":
              case "bad_ban_anon":
              case "bad_ban_broadcaster":
              case "bad_ban_global_mod":
              case "bad_ban_mod":
              case "bad_ban_self":
              case "bad_ban_staff":
              case "usage_ban":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseBan"], noticeAndMsgid);
                break;
              // Ban command success..
              case "ban_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseBan"], noticeAndNull);
                break;
              // Clear command failed..
              case "usage_clear":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseClear"], noticeAndMsgid);
                break;
              // Mods command failed..
              case "usage_mods":
                this.log.info(basicLog);
                this.emits(
                  ["notice", "_promiseMods"],
                  [noticeArr, [msgid, []]]
                );
                break;
              // Mod command success..
              case "mod_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseMod"], noticeAndNull);
                break;
              // VIPs command failed..
              case "usage_vips":
                this.log.info(basicLog);
                this.emits(
                  ["notice", "_promiseVips"],
                  [noticeArr, [msgid, []]]
                );
                break;
              // VIP command failed..
              case "usage_vip":
              case "bad_vip_grantee_banned":
              case "bad_vip_grantee_already_vip":
              case "bad_vip_max_vips_reached":
              case "bad_vip_achievement_incomplete":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseVip"], [noticeArr, [msgid, []]]);
                break;
              // VIP command success..
              case "vip_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseVip"], noticeAndNull);
                break;
              // Mod command failed..
              case "usage_mod":
              case "bad_mod_banned":
              case "bad_mod_mod":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseMod"], noticeAndMsgid);
                break;
              // Unmod command success..
              case "unmod_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnmod"], noticeAndNull);
                break;
              // Unvip command success...
              case "unvip_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnvip"], noticeAndNull);
                break;
              // Unmod command failed..
              case "usage_unmod":
              case "bad_unmod_mod":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnmod"], noticeAndMsgid);
                break;
              // Unvip command failed..
              case "usage_unvip":
              case "bad_unvip_grantee_not_vip":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnvip"], noticeAndMsgid);
                break;
              // Color command success..
              case "color_changed":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseColor"], noticeAndNull);
                break;
              // Color command failed..
              case "usage_color":
              case "turbo_only_color":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseColor"], noticeAndMsgid);
                break;
              // Commercial command success..
              case "commercial_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseCommercial"], noticeAndNull);
                break;
              // Commercial command failed..
              case "usage_commercial":
              case "bad_commercial_error":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseCommercial"], noticeAndMsgid);
                break;
              // Host command success..
              case "hosts_remaining": {
                this.log.info(basicLog);
                const remainingHost = !isNaN(msg[0]) ? parseInt(msg[0]) : 0;
                this.emits(
                  ["notice", "_promiseHost"],
                  [noticeArr, [null, ~~remainingHost]]
                );
                break;
              }
              // Host command failed..
              case "bad_host_hosting":
              case "bad_host_rate_exceeded":
              case "bad_host_error":
              case "usage_host":
                this.log.info(basicLog);
                this.emits(
                  ["notice", "_promiseHost"],
                  [noticeArr, [msgid, null]]
                );
                break;
              // r9kbeta command failed..
              case "already_r9k_on":
              case "usage_r9k_on":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseR9kbeta"], noticeAndMsgid);
                break;
              // r9kbetaoff command failed..
              case "already_r9k_off":
              case "usage_r9k_off":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseR9kbetaoff"], noticeAndMsgid);
                break;
              // Timeout command success..
              case "timeout_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseTimeout"], noticeAndNull);
                break;
              case "delete_message_success":
                this.log.info(`[${channel} ${msg}]`);
                this.emits(["notice", "_promiseDeletemessage"], noticeAndNull);
                break;
              // Subscribersoff command failed..
              case "already_subs_off":
              case "usage_subs_off":
                this.log.info(basicLog);
                this.emits(
                  ["notice", "_promiseSubscribersoff"],
                  noticeAndMsgid
                );
                break;
              // Subscribers command failed..
              case "already_subs_on":
              case "usage_subs_on":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseSubscribers"], noticeAndMsgid);
                break;
              // Emoteonlyoff command failed..
              case "already_emote_only_off":
              case "usage_emote_only_off":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseEmoteonlyoff"], noticeAndMsgid);
                break;
              // Emoteonly command failed..
              case "already_emote_only_on":
              case "usage_emote_only_on":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseEmoteonly"], noticeAndMsgid);
                break;
              // Slow command failed..
              case "usage_slow_on":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseSlow"], noticeAndMsgid);
                break;
              // Slowoff command failed..
              case "usage_slow_off":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseSlowoff"], noticeAndMsgid);
                break;
              // Timeout command failed..
              case "usage_timeout":
              case "bad_timeout_admin":
              case "bad_timeout_anon":
              case "bad_timeout_broadcaster":
              case "bad_timeout_duration":
              case "bad_timeout_global_mod":
              case "bad_timeout_mod":
              case "bad_timeout_self":
              case "bad_timeout_staff":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseTimeout"], noticeAndMsgid);
                break;
              // Unban command success..
              // Unban can also be used to cancel an active timeout.
              case "untimeout_success":
              case "unban_success":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnban"], noticeAndNull);
                break;
              // Unban command failed..
              case "usage_unban":
              case "bad_unban_no_ban":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnban"], noticeAndMsgid);
                break;
              // Delete command failed..
              case "usage_delete":
              case "bad_delete_message_error":
              case "bad_delete_message_broadcaster":
              case "bad_delete_message_mod":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseDeletemessage"], noticeAndMsgid);
                break;
              // Unhost command failed..
              case "usage_unhost":
              case "not_hosting":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseUnhost"], noticeAndMsgid);
                break;
              // Whisper command failed..
              case "whisper_invalid_login":
              case "whisper_invalid_self":
              case "whisper_limit_per_min":
              case "whisper_limit_per_sec":
              case "whisper_restricted":
              case "whisper_restricted_recipient":
                this.log.info(basicLog);
                this.emits(["notice", "_promiseWhisper"], noticeAndMsgid);
                break;
              // Permission error..
              case "no_permission":
              case "msg_banned":
              case "msg_room_not_found":
              case "msg_channel_suspended":
              case "tos_ban":
              case "invalid_user":
                this.log.info(basicLog);
                this.emits(
                  [
                    "notice",
                    "_promiseBan",
                    "_promiseClear",
                    "_promiseUnban",
                    "_promiseTimeout",
                    "_promiseDeletemessage",
                    "_promiseMods",
                    "_promiseMod",
                    "_promiseUnmod",
                    "_promiseVips",
                    "_promiseVip",
                    "_promiseUnvip",
                    "_promiseCommercial",
                    "_promiseHost",
                    "_promiseUnhost",
                    "_promiseJoin",
                    "_promisePart",
                    "_promiseR9kbeta",
                    "_promiseR9kbetaoff",
                    "_promiseSlow",
                    "_promiseSlowoff",
                    "_promiseFollowers",
                    "_promiseFollowersoff",
                    "_promiseSubscribers",
                    "_promiseSubscribersoff",
                    "_promiseEmoteonly",
                    "_promiseEmoteonlyoff",
                    "_promiseWhisper",
                  ],
                  [noticeArr, [msgid, channel]]
                );
                break;
              // Automod-related..
              case "msg_rejected":
              case "msg_rejected_mandatory":
                this.log.info(basicLog);
                this.emit("automod", channel, msgid, msg);
                break;
              // Unrecognized command..
              case "unrecognized_cmd":
                this.log.info(basicLog);
                this.emit("notice", channel, msgid, msg);
                break;
              // Send the following msg-ids to the notice event listener..
              case "cmds_available":
              case "host_target_went_offline":
              case "msg_censored_broadcaster":
              case "msg_duplicate":
              case "msg_emoteonly":
              case "msg_verified_email":
              case "msg_ratelimit":
              case "msg_subsonly":
              case "msg_timedout":
              case "msg_bad_characters":
              case "msg_channel_blocked":
              case "msg_facebook":
              case "msg_followersonly":
              case "msg_followersonly_followed":
              case "msg_followersonly_zero":
              case "msg_slowmode":
              case "msg_suspended":
              case "no_help":
              case "usage_disconnect":
              case "usage_help":
              case "usage_me":
              case "unavailable_command":
                this.log.info(basicLog);
                this.emit("notice", channel, msgid, msg);
                break;
              // Ignore this because we are already listening to HOSTTARGET..
              case "host_on":
              case "host_off":
                break;
              default:
                if (
                  msg.includes("Login unsuccessful") ||
                  msg.includes("Login authentication failed")
                ) {
                  this.wasCloseCalled = false;
                  this.reconnect = false;
                  this.reason = msg;
                  this.log.error(this.reason);
                  this.ws.close();
                } else if (
                  msg.includes("Error logging in") ||
                  msg.includes("Improperly formatted auth")
                ) {
                  this.wasCloseCalled = false;
                  this.reconnect = false;
                  this.reason = msg;
                  this.log.error(this.reason);
                  this.ws.close();
                } else if (msg.includes("Invalid NICK")) {
                  this.wasCloseCalled = false;
                  this.reconnect = false;
                  this.reason = "Invalid NICK.";
                  this.log.error(this.reason);
                  this.ws.close();
                } else {
                  this.log.warn(`Could not parse NOTICE from tmi.twitch.tv:
${JSON.stringify(message, null, 4)}`);
                  this.emit("notice", channel, msgid, msg);
                }
                break;
            }
            break;
          }
          // Handle subanniversary / resub..
          case "USERNOTICE": {
            const username = tags["display-name"] || tags["login"];
            const plan = tags["msg-param-sub-plan"] || "";
            const planName =
              _.unescapeIRC(_.get(tags["msg-param-sub-plan-name"], "")) || null;
            const prime = plan.includes("Prime");
            const methods = { prime, plan, planName };
            const streakMonths = ~~(tags["msg-param-streak-months"] || 0);
            const recipient =
              tags["msg-param-recipient-display-name"] ||
              tags["msg-param-recipient-user-name"];
            const giftSubCount = ~~tags["msg-param-mass-gift-count"];
            tags["message-type"] = msgid;
            switch (msgid) {
              // Handle resub
              case "resub":
                this.emits(
                  ["resub", "subanniversary"],
                  [[channel, username, streakMonths, msg, tags, methods]]
                );
                break;
              // Handle sub
              case "sub":
                this.emits(
                  ["subscription", "sub"],
                  [[channel, username, methods, msg, tags]]
                );
                break;
              // Handle gift sub
              case "subgift":
                this.emit(
                  "subgift",
                  channel,
                  username,
                  streakMonths,
                  recipient,
                  methods,
                  tags
                );
                break;
              // Handle anonymous gift sub
              // Need proof that this event occur
              case "anonsubgift":
                this.emit(
                  "anonsubgift",
                  channel,
                  streakMonths,
                  recipient,
                  methods,
                  tags
                );
                break;
              // Handle random gift subs
              case "submysterygift":
                this.emit(
                  "submysterygift",
                  channel,
                  username,
                  giftSubCount,
                  methods,
                  tags
                );
                break;
              // Handle anonymous random gift subs
              // Need proof that this event occur
              case "anonsubmysterygift":
                this.emit(
                  "anonsubmysterygift",
                  channel,
                  giftSubCount,
                  methods,
                  tags
                );
                break;
              // Handle user upgrading from Prime to a normal tier sub
              case "primepaidupgrade":
                this.emit("primepaidupgrade", channel, username, methods, tags);
                break;
              // Handle user upgrading from a gifted sub
              case "giftpaidupgrade": {
                const sender2 =
                  tags["msg-param-sender-name"] ||
                  tags["msg-param-sender-login"];
                this.emit("giftpaidupgrade", channel, username, sender2, tags);
                break;
              }
              // Handle user upgrading from an anonymous gifted sub
              case "anongiftpaidupgrade":
                this.emit("anongiftpaidupgrade", channel, username, tags);
                break;
              // Handle raid
              case "raid": {
                const username2 =
                  tags["msg-param-displayName"] || tags["msg-param-login"];
                const viewers = +tags["msg-param-viewerCount"];
                this.emit("raided", channel, username2, viewers, tags);
                break;
              }
              // Handle ritual
              case "ritual": {
                const ritualName = tags["msg-param-ritual-name"];
                switch (ritualName) {
                  // Handle new chatter ritual
                  case "new_chatter":
                    this.emit("newchatter", channel, username, tags, msg);
                    break;
                  // All unknown rituals should be passed through
                  default:
                    this.emit(
                      "ritual",
                      ritualName,
                      channel,
                      username,
                      tags,
                      msg
                    );
                    break;
                }
                break;
              }
              // All other msgid events should be emitted under a usernotice event
              // until it comes up and needs to be added..
              default:
                this.emit("usernotice", msgid, channel, tags, msg);
                break;
            }
            break;
          }
          // Channel is now hosting another channel or exited host mode..
          case "HOSTTARGET": {
            const msgSplit = msg.split(" ");
            const viewers = ~~msgSplit[1] || 0;
            if (msgSplit[0] === "-") {
              this.log.info(`[${channel}] Exited host mode.`);
              this.emits(
                ["unhost", "_promiseUnhost"],
                [[channel, viewers], [null]]
              );
            } else {
              this.log.info(
                `[${channel}] Now hosting ${msgSplit[0]} for ${viewers} viewer(s).`
              );
              this.emit("hosting", channel, msgSplit[0], viewers);
            }
            break;
          }
          // Someone has been timed out or chat has been cleared by a moderator..
          case "CLEARCHAT":
            if (message.params.length > 1) {
              const duration = _.get(message.tags["ban-duration"], null);
              if (duration === null) {
                this.log.info(`[${channel}] ${msg} has been banned.`);
                this.emit("ban", channel, msg, null, message.tags);
              } else {
                this.log.info(
                  `[${channel}] ${msg} has been timed out for ${duration} seconds.`
                );
                this.emit(
                  "timeout",
                  channel,
                  msg,
                  null,
                  ~~duration,
                  message.tags
                );
              }
            } else {
              this.log.info(`[${channel}] Chat was cleared by a moderator.`);
              this.emits(["clearchat", "_promiseClear"], [[channel], [null]]);
            }
            break;
          // Someone's message has been deleted
          case "CLEARMSG":
            if (message.params.length > 1) {
              const deletedMessage = msg;
              const username = tags["login"];
              tags["message-type"] = "messagedeleted";
              this.log.info(
                `[${channel}] ${username}'s message has been deleted.`
              );
              this.emit(
                "messagedeleted",
                channel,
                username,
                deletedMessage,
                tags
              );
            }
            break;
          // Received a reconnection request from the server..
          case "RECONNECT":
            this.log.info("Received RECONNECT request from Twitch..");
            this.log.info(
              `Disconnecting and reconnecting in ${Math.round(this.reconnectTimer / 1e3)} seconds..`
            );
            this.disconnect().catch((err) => this.log.error(err));
            setTimeout(
              () => this.connect().catch((err) => this.log.error(err)),
              this.reconnectTimer
            );
            break;
          // Received when joining a channel and every time you send a PRIVMSG to a channel.
          case "USERSTATE":
            message.tags.username = this.username;
            if (message.tags["user-type"] === "mod") {
              if (!this.moderators[channel]) {
                this.moderators[channel] = [];
              }
              if (!this.moderators[channel].includes(this.username)) {
                this.moderators[channel].push(this.username);
              }
            }
            if (
              !_.isJustinfan(this.getUsername()) &&
              !this.userstate[channel]
            ) {
              this.userstate[channel] = tags;
              this.lastJoined = channel;
              this.channels.push(channel);
              this.log.info(`Joined ${channel}`);
              this.emit("join", channel, _.username(this.getUsername()), true);
            }
            if (message.tags["emote-sets"] !== this.emotes) {
              this._updateEmoteset(message.tags["emote-sets"]);
            }
            this.userstate[channel] = tags;
            break;
          // Describe non-channel-specific state informations..
          case "GLOBALUSERSTATE":
            this.globaluserstate = tags;
            this.emit("globaluserstate", tags);
            if (typeof message.tags["emote-sets"] !== "undefined") {
              this._updateEmoteset(message.tags["emote-sets"]);
            }
            break;
          // Received when joining a channel and every time one of the chat room settings, like slow mode, change.
          // The message on join contains all room settings.
          case "ROOMSTATE":
            if (_.channel(this.lastJoined) === channel) {
              this.emit("_promiseJoin", null, channel);
            }
            message.tags.channel = channel;
            this.emit("roomstate", channel, message.tags);
            if (!_.hasOwn(message.tags, "subs-only")) {
              if (_.hasOwn(message.tags, "slow")) {
                if (
                  typeof message.tags.slow === "boolean" &&
                  !message.tags.slow
                ) {
                  const disabled = [channel, false, 0];
                  this.log.info(
                    `[${channel}] This room is no longer in slow mode.`
                  );
                  this.emits(
                    ["slow", "slowmode", "_promiseSlowoff"],
                    [disabled, disabled, [null]]
                  );
                } else {
                  const seconds = ~~message.tags.slow;
                  const enabled = [channel, true, seconds];
                  this.log.info(`[${channel}] This room is now in slow mode.`);
                  this.emits(
                    ["slow", "slowmode", "_promiseSlow"],
                    [enabled, enabled, [null]]
                  );
                }
              }
              if (_.hasOwn(message.tags, "followers-only")) {
                if (message.tags["followers-only"] === "-1") {
                  const disabled = [channel, false, 0];
                  this.log.info(
                    `[${channel}] This room is no longer in followers-only mode.`
                  );
                  this.emits(
                    ["followersonly", "followersmode", "_promiseFollowersoff"],
                    [disabled, disabled, [null]]
                  );
                } else {
                  const minutes = ~~message.tags["followers-only"];
                  const enabled = [channel, true, minutes];
                  this.log.info(
                    `[${channel}] This room is now in follower-only mode.`
                  );
                  this.emits(
                    ["followersonly", "followersmode", "_promiseFollowers"],
                    [enabled, enabled, [null]]
                  );
                }
              }
            }
            break;
          // Wrong cluster..
          case "SERVERCHANGE":
            break;
          default:
            this.log.warn(`Could not parse message from tmi.twitch.tv:
${JSON.stringify(message, null, 4)}`);
            break;
        }
      } else if (message.prefix === "jtv") {
        switch (message.command) {
          case "MODE":
            if (msg === "+o") {
              if (!this.moderators[channel]) {
                this.moderators[channel] = [];
              }
              if (!this.moderators[channel].includes(message.params[2])) {
                this.moderators[channel].push(message.params[2]);
              }
              this.emit("mod", channel, message.params[2]);
            } else if (msg === "-o") {
              if (!this.moderators[channel]) {
                this.moderators[channel] = [];
              }
              this.moderators[channel].filter(
                (value) => value !== message.params[2]
              );
              this.emit("unmod", channel, message.params[2]);
            }
            break;
          default:
            this.log.warn(`Could not parse message from jtv:
${JSON.stringify(message, null, 4)}`);
            break;
        }
      } else {
        switch (message.command) {
          case "353":
            this.emit("names", message.params[2], message.params[3].split(" "));
            break;
          case "366":
            break;
          // Someone has joined the channel..
          case "JOIN": {
            const nick = message.prefix.split("!")[0];
            if (_.isJustinfan(this.getUsername()) && this.username === nick) {
              this.lastJoined = channel;
              this.channels.push(channel);
              this.log.info(`Joined ${channel}`);
              this.emit("join", channel, nick, true);
            }
            if (this.username !== nick) {
              this.emit("join", channel, nick, false);
            }
            break;
          }
          // Someone has left the channel..
          case "PART": {
            let isSelf = false;
            const nick = message.prefix.split("!")[0];
            if (this.username === nick) {
              isSelf = true;
              if (this.userstate[channel]) {
                delete this.userstate[channel];
              }
              let index = this.channels.indexOf(channel);
              if (index !== -1) {
                this.channels.splice(index, 1);
              }
              index = this.opts.channels.indexOf(channel);
              if (index !== -1) {
                this.opts.channels.splice(index, 1);
              }
              this.log.info(`Left ${channel}`);
              this.emit("_promisePart", null);
            }
            this.emit("part", channel, nick, isSelf);
            break;
          }
          // Received a whisper..
          case "WHISPER": {
            const nick = message.prefix.split("!")[0];
            this.log.info(`[WHISPER] <${nick}>: ${msg}`);
            if (!_.hasOwn(message.tags, "username")) {
              message.tags.username = nick;
            }
            message.tags["message-type"] = "whisper";
            const from = _.channel(message.tags.username);
            this.emits(
              ["whisper", "message"],
              [[from, message.tags, msg, false]]
            );
            break;
          }
          case "PRIVMSG":
            message.tags.username = message.prefix.split("!")[0];
            if (message.tags.username === "jtv") {
              const name = _.username(msg.split(" ")[0]);
              const autohost = msg.includes("auto");
              if (msg.includes("hosting you for")) {
                const count = _.extractNumber(msg);
                this.emit("hosted", channel, name, count, autohost);
              } else if (msg.includes("hosting you")) {
                this.emit("hosted", channel, name, 0, autohost);
              }
            } else {
              const messagesLogLevel = _.get(
                this.opts.options.messagesLogLevel,
                "info"
              );
              const actionMessage = _.actionMessage(msg);
              message.tags["message-type"] = actionMessage ? "action" : "chat";
              msg = actionMessage ? actionMessage[1] : msg;
              if (_.hasOwn(message.tags, "bits")) {
                this.emit("cheer", channel, message.tags, msg);
              } else {
                if (_.hasOwn(message.tags, "msg-id")) {
                  if (message.tags["msg-id"] === "highlighted-message") {
                    const rewardtype = message.tags["msg-id"];
                    this.emit(
                      "redeem",
                      channel,
                      message.tags.username,
                      rewardtype,
                      message.tags,
                      msg
                    );
                  } else if (
                    message.tags["msg-id"] === "skip-subs-mode-message"
                  ) {
                    const rewardtype = message.tags["msg-id"];
                    this.emit(
                      "redeem",
                      channel,
                      message.tags.username,
                      rewardtype,
                      message.tags,
                      msg
                    );
                  }
                } else if (_.hasOwn(message.tags, "custom-reward-id")) {
                  const rewardtype = message.tags["custom-reward-id"];
                  this.emit(
                    "redeem",
                    channel,
                    message.tags.username,
                    rewardtype,
                    message.tags,
                    msg
                  );
                }
                if (actionMessage) {
                  this.log[messagesLogLevel](
                    `[${channel}] *<${message.tags.username}>: ${msg}`
                  );
                  this.emits(
                    ["action", "message"],
                    [[channel, message.tags, msg, false]]
                  );
                } else {
                  this.log[messagesLogLevel](
                    `[${channel}] <${message.tags.username}>: ${msg}`
                  );
                  this.emits(
                    ["chat", "message"],
                    [[channel, message.tags, msg, false]]
                  );
                }
              }
            }
            break;
          default:
            this.log.warn(`Could not parse message:
${JSON.stringify(message, null, 4)}`);
            break;
        }
      }
    };
    client2.prototype.connect = function connect() {
      return new Promise((resolve, reject) => {
        this.server = _.get(
          this.opts.connection.server,
          "irc-ws.chat.twitch.tv"
        );
        this.port = _.get(this.opts.connection.port, 80);
        if (this.secure) {
          this.port = 443;
        }
        if (this.port === 443) {
          this.secure = true;
        }
        this.reconnectTimer = this.reconnectTimer * this.reconnectDecay;
        if (this.reconnectTimer >= this.maxReconnectInterval) {
          this.reconnectTimer = this.maxReconnectInterval;
        }
        this._openConnection();
        this.once("_promiseConnect", (err) => {
          if (!err) {
            resolve([this.server, ~~this.port]);
          } else {
            reject(err);
          }
        });
      });
    };
    client2.prototype._openConnection = function _openConnection() {
      const url = `${this.secure ? "wss" : "ws"}://${this.server}:${this.port}/`;
      const connectionOptions = {};
      if ("agent" in this.opts.connection) {
        connectionOptions.agent = this.opts.connection.agent;
      }
      this.ws = new _WebSocket(url, "irc", connectionOptions);
      this.ws.onmessage = this._onMessage.bind(this);
      this.ws.onerror = this._onError.bind(this);
      this.ws.onclose = this._onClose.bind(this);
      this.ws.onopen = this._onOpen.bind(this);
    };
    client2.prototype._onOpen = function _onOpen() {
      if (!this._isConnected()) {
        return;
      }
      this.log.info(`Connecting to ${this.server} on port ${this.port}..`);
      this.emit("connecting", this.server, ~~this.port);
      this.username = _.get(this.opts.identity.username, _.justinfan());
      this._getToken()
        .then((token) => {
          const password = _.password(token);
          this.log.info("Sending authentication to server..");
          this.emit("logon");
          let caps = "twitch.tv/tags twitch.tv/commands";
          if (!this._skipMembership) {
            caps += " twitch.tv/membership";
          }
          this.ws.send("CAP REQ :" + caps);
          if (password) {
            this.ws.send(`PASS ${password}`);
          } else if (_.isJustinfan(this.username)) {
            this.ws.send("PASS SCHMOOPIIE");
          }
          this.ws.send(`NICK ${this.username}`);
        })
        .catch((err) => {
          this.emits(
            ["_promiseConnect", "disconnected"],
            [[err], ["Could not get a token."]]
          );
        });
    };
    client2.prototype._getToken = function _getToken() {
      const passwordOption = this.opts.identity.password;
      let password;
      if (typeof passwordOption === "function") {
        password = passwordOption();
        if (password instanceof Promise) {
          return password;
        }
        return Promise.resolve(password);
      }
      return Promise.resolve(passwordOption);
    };
    client2.prototype._onMessage = function _onMessage(event) {
      const parts = event.data.trim().split("\r\n");
      parts.forEach((str) => {
        const msg = parse.msg(str);
        if (msg) {
          this.handleMessage(msg);
        }
      });
    };
    client2.prototype._onError = function _onError() {
      this.moderators = {};
      this.userstate = {};
      this.globaluserstate = {};
      clearInterval(this.pingLoop);
      clearTimeout(this.pingTimeout);
      clearTimeout(this._updateEmotesetsTimer);
      this.reason =
        this.ws === null ? "Connection closed." : "Unable to connect.";
      this.emits(["_promiseConnect", "disconnected"], [[this.reason]]);
      if (this.reconnect && this.reconnections === this.maxReconnectAttempts) {
        this.emit("maxreconnect");
        this.log.error("Maximum reconnection attempts reached.");
      }
      if (
        this.reconnect &&
        !this.reconnecting &&
        this.reconnections <= this.maxReconnectAttempts - 1
      ) {
        this.reconnecting = true;
        this.reconnections = this.reconnections + 1;
        this.log.error(
          `Reconnecting in ${Math.round(this.reconnectTimer / 1e3)} seconds..`
        );
        this.emit("reconnect");
        setTimeout(() => {
          this.reconnecting = false;
          this.connect().catch((err) => this.log.error(err));
        }, this.reconnectTimer);
      }
      this.ws = null;
    };
    client2.prototype._onClose = function _onClose() {
      this.moderators = {};
      this.userstate = {};
      this.globaluserstate = {};
      clearInterval(this.pingLoop);
      clearTimeout(this.pingTimeout);
      clearTimeout(this._updateEmotesetsTimer);
      if (this.wasCloseCalled) {
        this.wasCloseCalled = false;
        this.reason = "Connection closed.";
        this.log.info(this.reason);
        this.emits(
          ["_promiseConnect", "_promiseDisconnect", "disconnected"],
          [[this.reason], [null], [this.reason]]
        );
      } else {
        this.emits(["_promiseConnect", "disconnected"], [[this.reason]]);
        if (
          this.reconnect &&
          this.reconnections === this.maxReconnectAttempts
        ) {
          this.emit("maxreconnect");
          this.log.error("Maximum reconnection attempts reached.");
        }
        if (
          this.reconnect &&
          !this.reconnecting &&
          this.reconnections <= this.maxReconnectAttempts - 1
        ) {
          this.reconnecting = true;
          this.reconnections = this.reconnections + 1;
          this.log.error(
            `Could not connect to server. Reconnecting in ${Math.round(this.reconnectTimer / 1e3)} seconds..`
          );
          this.emit("reconnect");
          setTimeout(() => {
            this.reconnecting = false;
            this.connect().catch((err) => this.log.error(err));
          }, this.reconnectTimer);
        }
      }
      this.ws = null;
    };
    client2.prototype._getPromiseDelay = function _getPromiseDelay() {
      if (this.currentLatency <= 600) {
        return 600;
      } else {
        return this.currentLatency + 100;
      }
    };
    client2.prototype._sendCommand = function _sendCommand(
      delay,
      channel,
      command,
      fn
    ) {
      return new Promise((resolve, reject) => {
        if (!this._isConnected()) {
          return reject("Not connected to server.");
        } else if (delay === null || typeof delay === "number") {
          if (delay === null) {
            delay = this._getPromiseDelay();
          }
          _.promiseDelay(delay).then(() => reject("No response from Twitch."));
        }
        if (channel !== null) {
          const chan = _.channel(channel);
          this.log.info(`[${chan}] Executing command: ${command}`);
          this.ws.send(`PRIVMSG ${chan} :${command}`);
        } else {
          this.log.info(`Executing command: ${command}`);
          this.ws.send(command);
        }
        if (typeof fn === "function") {
          fn(resolve, reject);
        } else {
          resolve();
        }
      });
    };
    client2.prototype._sendMessage = function _sendMessage(
      delay,
      channel,
      message,
      fn
    ) {
      return new Promise((resolve, reject) => {
        if (!this._isConnected()) {
          return reject("Not connected to server.");
        } else if (_.isJustinfan(this.getUsername())) {
          return reject("Cannot send anonymous messages.");
        }
        const chan = _.channel(channel);
        if (!this.userstate[chan]) {
          this.userstate[chan] = {};
        }
        if (message.length >= 500) {
          const msg = _.splitLine(message, 500);
          message = msg[0];
          setTimeout(() => {
            this._sendMessage(delay, channel, msg[1], () => {});
          }, 350);
        }
        this.ws.send(`PRIVMSG ${chan} :${message}`);
        const emotes = {};
        Object.keys(this.emotesets).forEach((id) =>
          this.emotesets[id].forEach((emote) => {
            const emoteFunc = _.isRegex(emote.code)
              ? parse.emoteRegex
              : parse.emoteString;
            return emoteFunc(message, emote.code, emote.id, emotes);
          })
        );
        const userstate = Object.assign(
          this.userstate[chan],
          parse.emotes({ emotes: parse.transformEmotes(emotes) || null })
        );
        const messagesLogLevel = _.get(
          this.opts.options.messagesLogLevel,
          "info"
        );
        const actionMessage = _.actionMessage(message);
        if (actionMessage) {
          userstate["message-type"] = "action";
          this.log[messagesLogLevel](
            `[${chan}] *<${this.getUsername()}>: ${actionMessage[1]}`
          );
          this.emits(
            ["action", "message"],
            [[chan, userstate, actionMessage[1], true]]
          );
        } else {
          userstate["message-type"] = "chat";
          this.log[messagesLogLevel](
            `[${chan}] <${this.getUsername()}>: ${message}`
          );
          this.emits(["chat", "message"], [[chan, userstate, message, true]]);
        }
        if (typeof fn === "function") {
          fn(resolve, reject);
        } else {
          resolve();
        }
      });
    };
    client2.prototype._updateEmoteset = function _updateEmoteset(sets) {
      let setsChanges = sets !== void 0;
      if (setsChanges) {
        if (sets === this.emotes) {
          setsChanges = false;
        } else {
          this.emotes = sets;
        }
      }
      if (this._skipUpdatingEmotesets) {
        if (setsChanges) {
          this.emit("emotesets", sets, {});
        }
        return;
      }
      const setEmotesetTimer = () => {
        if (this._updateEmotesetsTimerDelay > 0) {
          clearTimeout(this._updateEmotesetsTimer);
          this._updateEmotesetsTimer = setTimeout(
            () => this._updateEmoteset(sets),
            this._updateEmotesetsTimerDelay
          );
        }
      };
      this._getToken()
        .then((token) => {
          const url = `https://api.twitch.tv/kraken/chat/emoticon_images?emotesets=${sets}`;
          const fetchOptions = {};
          if ("fetchAgent" in this.opts.connection) {
            fetchOptions.agent = this.opts.connection.fetchAgent;
          }
          return _fetch(url, {
            ...fetchOptions,
            headers: {
              Accept: "application/vnd.twitchtv.v5+json",
              Authorization: `OAuth ${_.token(token)}`,
              "Client-ID": this.clientId,
            },
          });
        })
        .then((res) => res.json())
        .then((data) => {
          this.emotesets = data.emoticon_sets || {};
          this.emit("emotesets", sets, this.emotesets);
          setEmotesetTimer();
        })
        .catch(() => setEmotesetTimer());
    };
    client2.prototype.getUsername = function getUsername() {
      return this.username;
    };
    client2.prototype.getOptions = function getOptions() {
      return this.opts;
    };
    client2.prototype.getChannels = function getChannels() {
      return this.channels;
    };
    client2.prototype.isMod = function isMod(channel, username) {
      const chan = _.channel(channel);
      if (!this.moderators[chan]) {
        this.moderators[chan] = [];
      }
      return this.moderators[chan].includes(_.username(username));
    };
    client2.prototype.readyState = function readyState() {
      if (this.ws === null) {
        return "CLOSED";
      }
      return ["CONNECTING", "OPEN", "CLOSING", "CLOSED"][this.ws.readyState];
    };
    client2.prototype._isConnected = function _isConnected() {
      return this.ws !== null && this.ws.readyState === 1;
    };
    client2.prototype.disconnect = function disconnect() {
      return new Promise((resolve, reject) => {
        if (this.ws !== null && this.ws.readyState !== 3) {
          this.wasCloseCalled = true;
          this.log.info("Disconnecting from server..");
          this.ws.close();
          this.once("_promiseDisconnect", () =>
            resolve([this.server, ~~this.port])
          );
        } else {
          this.log.error(
            "Cannot disconnect from server. Socket is not opened or connection is already closing."
          );
          reject(
            "Cannot disconnect from server. Socket is not opened or connection is already closing."
          );
        }
      });
    };
    client2.prototype.off = client2.prototype.removeListener;
    if (module2.exports) {
      module2.exports = client2;
    }
    if (typeof window !== "undefined") {
      window.tmi = {
        client: client2,
        Client: client2,
      };
    }
  })(client);
  return client.exports;
}
var tmi_js;
var hasRequiredTmi_js;
function requireTmi_js() {
  if (hasRequiredTmi_js) return tmi_js;
  hasRequiredTmi_js = 1;
  const client2 = requireClient();
  tmi_js = {
    client: client2,
    Client: client2,
  };
  return tmi_js;
}
var tmi_jsExports = requireTmi_js();
class Publisher {
  observers = [];
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (obs) => obs.observer !== observer.observer
    );
  }
  notify(data) {
    this.observers.forEach((observer) => observer.update(data));
  }
}
_Log_decorators = [singleton()];
class Log {
  publisher = new Publisher();
  emit(message) {
    console.log(message);
    this.publisher.notify(message);
  }
  subscribe(observer) {
    this.publisher.subscribe(observer);
  }
  unSubscribe(observer) {
    this.publisher.unsubscribe(observer);
  }
}
_init = __decoratorStart(null);
Log = __decorateElement(_init, 0, "Log", _Log_decorators, Log);
__runInitializers(_init, 1, Log);
_FileSystem_decorators = [singleton()];
class FileSystem {
  path = () => require$$3$1.app.getPath("userData");
  read(file = "conf.json") {
    try {
      const userDataPath = require$$3$1.app.getPath("userData");
      const filePath = path.join(userDataPath, file);
      if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath, "utf-8");
        const obj = JSON.parse(data);
        return obj;
      }
      return null;
    } catch (error) {
      return null;
    }
  }
  write(data, file = "conf.json") {
    try {
      const userDataPath = require$$3$1.app.getPath("userData");
      const filePath = path.join(userDataPath, file);
      return new Promise((resolve, reject) => {
        const content = file.endsWith(".txt")
          ? String(data)
          : JSON.stringify(data);
        fs.writeFile(filePath, content, (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(filePath);
          }
        });
      });
    } catch (error) {}
  }
}
_init2 = __decoratorStart(null);
FileSystem = __decorateElement(
  _init2,
  0,
  "FileSystem",
  _FileSystem_decorators,
  FileSystem
);
__runInitializers(_init2, 1, FileSystem);
var src = { exports: {} };
var browser = { exports: {} };
var ms;
var hasRequiredMs;
function requireMs() {
  if (hasRequiredMs) return ms;
  hasRequiredMs = 1;
  var s = 1e3;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  ms = function (val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error(
      "val is not a non-empty string or a valid number. val=" +
        JSON.stringify(val)
    );
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match =
      /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return void 0;
    }
  }
  function fmtShort(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return Math.round(ms2 / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms2 / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms2 / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms2 / s) + "s";
    }
    return ms2 + "ms";
  }
  function fmtLong(ms2) {
    var msAbs = Math.abs(ms2);
    if (msAbs >= d) {
      return plural(ms2, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms2, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms2, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms2, msAbs, s, "second");
    }
    return ms2 + " ms";
  }
  function plural(ms2, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms2 / n) + " " + name + (isPlural ? "s" : "");
  }
  return ms;
}
var common;
var hasRequiredCommon;
function requireCommon() {
  if (hasRequiredCommon) return common;
  hasRequiredCommon = 1;
  function setup(env) {
    createDebug2.debug = createDebug2;
    createDebug2.default = createDebug2;
    createDebug2.coerce = coerce;
    createDebug2.disable = disable;
    createDebug2.enable = enable;
    createDebug2.enabled = enabled;
    createDebug2.humanize = requireMs();
    createDebug2.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug2[key] = env[key];
    });
    createDebug2.names = [];
    createDebug2.skips = [];
    createDebug2.formatters = {};
    function selectColor(namespace) {
      let hash = 0;
      for (let i = 0; i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return createDebug2.colors[Math.abs(hash) % createDebug2.colors.length];
    }
    createDebug2.selectColor = selectColor;
    function createDebug2(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug2(...args) {
        if (!debug2.enabled) {
          return;
        }
        const self2 = debug2;
        const curr = Number(/* @__PURE__ */ new Date());
        const ms2 = curr - (prevTime || curr);
        self2.diff = ms2;
        self2.prev = prevTime;
        self2.curr = curr;
        prevTime = curr;
        args[0] = createDebug2.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug2.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self2, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug2.formatArgs.call(self2, args);
        const logFn = self2.log || createDebug2.log;
        logFn.apply(self2, args);
      }
      debug2.namespace = namespace;
      debug2.useColors = createDebug2.useColors();
      debug2.color = createDebug2.selectColor(namespace);
      debug2.extend = extend;
      debug2.destroy = createDebug2.destroy;
      Object.defineProperty(debug2, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug2.namespaces) {
            namespacesCache = createDebug2.namespaces;
            enabledCache = createDebug2.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        },
      });
      if (typeof createDebug2.init === "function") {
        createDebug2.init(debug2);
      }
      return debug2;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug2(
        this.namespace +
          (typeof delimiter === "undefined" ? ":" : delimiter) +
          namespace
      );
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug2.save(namespaces);
      createDebug2.namespaces = namespaces;
      createDebug2.names = [];
      createDebug2.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "")
        .trim()
        .replace(/\s+/g, ",")
        .split(",")
        .filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug2.skips.push(ns.slice(1));
        } else {
          createDebug2.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (
          templateIndex < template.length &&
          (template[templateIndex] === search[searchIndex] ||
            template[templateIndex] === "*")
        ) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (
        templateIndex < template.length &&
        template[templateIndex] === "*"
      ) {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug2.names,
        ...createDebug2.skips.map((namespace) => "-" + namespace),
      ].join(",");
      createDebug2.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug2.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug2.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn(
        "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
      );
    }
    createDebug2.enable(createDebug2.load());
    return createDebug2;
  }
  common = setup;
  return common;
}
var hasRequiredBrowser;
function requireBrowser() {
  if (hasRequiredBrowser) return browser.exports;
  hasRequiredBrowser = 1;
  (function (module2, exports$1) {
    exports$1.formatArgs = formatArgs;
    exports$1.save = save;
    exports$1.load = load;
    exports$1.useColors = useColors;
    exports$1.storage = localstorage();
    exports$1.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn(
            "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
          );
        }
      };
    })();
    exports$1.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33",
    ];
    function useColors() {
      if (
        typeof window !== "undefined" &&
        window.process &&
        (window.process.type === "renderer" || window.process.__nwjs)
      ) {
        return true;
      }
      if (
        typeof navigator !== "undefined" &&
        navigator.userAgent &&
        navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)
      ) {
        return false;
      }
      let m;
      return (
        (typeof document !== "undefined" &&
          document.documentElement &&
          document.documentElement.style &&
          document.documentElement.style.WebkitAppearance) || // Is firebug? http://stackoverflow.com/a/398120/376773
        (typeof window !== "undefined" &&
          window.console &&
          (window.console.firebug ||
            (window.console.exception && window.console.table))) || // Is firefox >= v31?
        // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
        (typeof navigator !== "undefined" &&
          navigator.userAgent &&
          (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) &&
          parseInt(m[1], 10) >= 31) || // Double check webkit in userAgent just in case we are in a worker
        (typeof navigator !== "undefined" &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
      );
    }
    function formatArgs(args) {
      args[0] =
        (this.useColors ? "%c" : "") +
        this.namespace +
        (this.useColors ? " %c" : " ") +
        args[0] +
        (this.useColors ? "%c " : " ") +
        "+" +
        module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports$1.log = console.debug || console.log || (() => {});
    function save(namespaces) {
      try {
        if (namespaces) {
          exports$1.storage.setItem("debug", namespaces);
        } else {
          exports$1.storage.removeItem("debug");
        }
      } catch (error) {}
    }
    function load() {
      let r;
      try {
        r =
          exports$1.storage.getItem("debug") ||
          exports$1.storage.getItem("DEBUG");
      } catch (error) {}
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {}
    }
    module2.exports = requireCommon()(exports$1);
    const { formatters } = module2.exports;
    formatters.j = function (v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  })(browser, browser.exports);
  return browser.exports;
}
var node$1 = { exports: {} };
var hasFlag;
var hasRequiredHasFlag;
function requireHasFlag() {
  if (hasRequiredHasFlag) return hasFlag;
  hasRequiredHasFlag = 1;
  hasFlag = (flag, argv = process.argv) => {
    const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
    const position = argv.indexOf(prefix + flag);
    const terminatorPosition = argv.indexOf("--");
    return (
      position !== -1 &&
      (terminatorPosition === -1 || position < terminatorPosition)
    );
  };
  return hasFlag;
}
var supportsColor_1;
var hasRequiredSupportsColor;
function requireSupportsColor() {
  if (hasRequiredSupportsColor) return supportsColor_1;
  hasRequiredSupportsColor = 1;
  const os = require$$0$5;
  const tty = require$$0;
  const hasFlag2 = requireHasFlag();
  const { env } = process;
  let forceColor;
  if (
    hasFlag2("no-color") ||
    hasFlag2("no-colors") ||
    hasFlag2("color=false") ||
    hasFlag2("color=never")
  ) {
    forceColor = 0;
  } else if (
    hasFlag2("color") ||
    hasFlag2("colors") ||
    hasFlag2("color=true") ||
    hasFlag2("color=always")
  ) {
    forceColor = 1;
  }
  if ("FORCE_COLOR" in env) {
    if (env.FORCE_COLOR === "true") {
      forceColor = 1;
    } else if (env.FORCE_COLOR === "false") {
      forceColor = 0;
    } else {
      forceColor =
        env.FORCE_COLOR.length === 0
          ? 1
          : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    }
  }
  function translateLevel(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3,
    };
  }
  function supportsColor(haveStream, streamIsTTY) {
    if (forceColor === 0) {
      return 0;
    }
    if (
      hasFlag2("color=16m") ||
      hasFlag2("color=full") ||
      hasFlag2("color=truecolor")
    ) {
      return 3;
    }
    if (hasFlag2("color=256")) {
      return 2;
    }
    if (haveStream && !streamIsTTY && forceColor === void 0) {
      return 0;
    }
    const min = forceColor || 0;
    if (env.TERM === "dumb") {
      return min;
    }
    if (process.platform === "win32") {
      const osRelease = os.release().split(".");
      if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (
        [
          "TRAVIS",
          "CIRCLECI",
          "APPVEYOR",
          "GITLAB_CI",
          "GITHUB_ACTIONS",
          "BUILDKITE",
        ].some((sign) => sign in env) ||
        env.CI_NAME === "codeship"
      ) {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if (env.COLORTERM === "truecolor") {
      return 3;
    }
    if ("TERM_PROGRAM" in env) {
      const version = parseInt(
        (env.TERM_PROGRAM_VERSION || "").split(".")[0],
        10
      );
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (
      /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(
        env.TERM
      )
    ) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    return min;
  }
  function getSupportLevel(stream2) {
    const level = supportsColor(stream2, stream2 && stream2.isTTY);
    return translateLevel(level);
  }
  supportsColor_1 = {
    supportsColor: getSupportLevel,
    stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    stderr: translateLevel(supportsColor(true, tty.isatty(2))),
  };
  return supportsColor_1;
}
var hasRequiredNode$1;
function requireNode$1() {
  if (hasRequiredNode$1) return node$1.exports;
  hasRequiredNode$1 = 1;
  (function (module2, exports$1) {
    const tty = require$$0;
    const util = require$$1$2;
    exports$1.init = init;
    exports$1.log = log;
    exports$1.formatArgs = formatArgs;
    exports$1.save = save;
    exports$1.load = load;
    exports$1.useColors = useColors;
    exports$1.destroy = util.deprecate(
      () => {},
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports$1.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = requireSupportsColor();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports$1.colors = [
          20, 21, 26, 27, 32, 33, 38, 39, 40, 41, 42, 43, 44, 45, 56, 57, 62,
          63, 68, 69, 74, 75, 76, 77, 78, 79, 80, 81, 92, 93, 98, 99, 112, 113,
          128, 129, 134, 135, 148, 149, 160, 161, 162, 163, 164, 165, 166, 167,
          168, 169, 170, 171, 172, 173, 178, 179, 184, 185, 196, 197, 198, 199,
          200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 214, 215, 220, 221,
        ];
      }
    } catch (error) {}
    exports$1.inspectOpts = Object.keys(process.env)
      .filter((key) => {
        return /^debug_/i.test(key);
      })
      .reduce((obj, key) => {
        const prop = key
          .substring(6)
          .toLowerCase()
          .replace(/_([a-z])/g, (_, k) => {
            return k.toUpperCase();
          });
        let val = process.env[key];
        if (/^(yes|on|true|enabled)$/i.test(val)) {
          val = true;
        } else if (/^(no|off|false|disabled)$/i.test(val)) {
          val = false;
        } else if (val === "null") {
          val = null;
        } else {
          val = Number(val);
        }
        obj[prop] = val;
        return obj;
      }, {});
    function useColors() {
      return "colors" in exports$1.inspectOpts
        ? Boolean(exports$1.inspectOpts.colors)
        : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(
          colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m"
        );
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports$1.inspectOpts.hideDate) {
        return "";
      }
      return /* @__PURE__ */ new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(
        util.formatWithOptions(exports$1.inspectOpts, ...args) + "\n"
      );
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug2) {
      debug2.inspectOpts = {};
      const keys = Object.keys(exports$1.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug2.inspectOpts[keys[i]] = exports$1.inspectOpts[keys[i]];
      }
    }
    module2.exports = requireCommon()(exports$1);
    const { formatters } = module2.exports;
    formatters.o = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util
        .inspect(v, this.inspectOpts)
        .split("\n")
        .map((str) => str.trim())
        .join(" ");
    };
    formatters.O = function (v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  })(node$1, node$1.exports);
  return node$1.exports;
}
var hasRequiredSrc;
function requireSrc() {
  if (hasRequiredSrc) return src.exports;
  hasRequiredSrc = 1;
  if (
    typeof process === "undefined" ||
    process.type === "renderer" ||
    process.browser === true ||
    process.__nwjs
  ) {
    src.exports = requireBrowser();
  } else {
    src.exports = requireNode$1();
  }
  return src.exports;
}
var srcExports = requireSrc();
const createDebug = /* @__PURE__ */ getDefaultExportFromCjs(srcExports);
var eventemitter3 = { exports: {} };
var hasRequiredEventemitter3;
function requireEventemitter3() {
  if (hasRequiredEventemitter3) return eventemitter3.exports;
  hasRequiredEventemitter3 = 1;
  (function (module2) {
    var has = Object.prototype.hasOwnProperty,
      prefix = "~";
    function Events() {}
    if (Object.create) {
      Events.prototype = /* @__PURE__ */ Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }
    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }
    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once),
        evt = prefix ? prefix + event : event;
      if (!emitter._events[evt])
        ((emitter._events[evt] = listener), emitter._eventsCount++);
      else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
      else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }
    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();
      else delete emitter._events[evt];
    }
    function EventEmitter2() {
      this._events = new Events();
      this._eventsCount = 0;
    }
    EventEmitter2.prototype.eventNames = function eventNames() {
      var names = [],
        events2,
        name;
      if (this._eventsCount === 0) return names;
      for (name in (events2 = this._events)) {
        if (has.call(events2, name)) names.push(prefix ? name.slice(1) : name);
      }
      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events2));
      }
      return names;
    };
    EventEmitter2.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
        handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];
      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }
      return ee;
    };
    EventEmitter2.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
        listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };
    EventEmitter2.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt],
        len = arguments.length,
        args,
        i;
      if (listeners.fn) {
        if (listeners.once)
          this.removeListener(event, listeners.fn, void 0, true);
        switch (len) {
          case 1:
            return (listeners.fn.call(listeners.context), true);
          case 2:
            return (listeners.fn.call(listeners.context, a1), true);
          case 3:
            return (listeners.fn.call(listeners.context, a1, a2), true);
          case 4:
            return (listeners.fn.call(listeners.context, a1, a2, a3), true);
          case 5:
            return (listeners.fn.call(listeners.context, a1, a2, a3, a4), true);
          case 6:
            return (
              listeners.fn.call(listeners.context, a1, a2, a3, a4, a5),
              true
            );
        }
        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }
        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length,
          j;
        for (i = 0; i < length; i++) {
          if (listeners[i].once)
            this.removeListener(event, listeners[i].fn, void 0, true);
          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;
            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;
            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;
            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;
            default:
              if (!args)
                for (j = 1, args = new Array(len - 1); j < len; j++) {
                  args[j - 1] = arguments[j];
                }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }
      return true;
    };
    EventEmitter2.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };
    EventEmitter2.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };
    EventEmitter2.prototype.removeListener = function removeListener(
      event,
      fn,
      context,
      once
    ) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;
      if (!fn) {
        clearEvent(this, evt);
        return this;
      }
      var listeners = this._events[evt];
      if (listeners.fn) {
        if (
          listeners.fn === fn &&
          (!once || listeners.once) &&
          (!context || listeners.context === context)
        ) {
          clearEvent(this, evt);
        }
      } else {
        for (
          var i = 0, events2 = [], length = listeners.length;
          i < length;
          i++
        ) {
          if (
            listeners[i].fn !== fn ||
            (once && !listeners[i].once) ||
            (context && listeners[i].context !== context)
          ) {
            events2.push(listeners[i]);
          }
        }
        if (events2.length)
          this._events[evt] = events2.length === 1 ? events2[0] : events2;
        else clearEvent(this, evt);
      }
      return this;
    };
    EventEmitter2.prototype.removeAllListeners = function removeAllListeners(
      event
    ) {
      var evt;
      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }
      return this;
    };
    EventEmitter2.prototype.off = EventEmitter2.prototype.removeListener;
    EventEmitter2.prototype.addListener = EventEmitter2.prototype.on;
    EventEmitter2.prefixed = prefix;
    EventEmitter2.EventEmitter = EventEmitter2;
    {
      module2.exports = EventEmitter2;
    }
  })(eventemitter3);
  return eventemitter3.exports;
}
var eventemitter3Exports = requireEventemitter3();
const EventEmitter =
  /* @__PURE__ */ getDefaultExportFromCjs(eventemitter3Exports);
var node;
var hasRequiredNode;
function requireNode() {
  if (hasRequiredNode) return node;
  hasRequiredNode = 1;
  node = requireWs();
  return node;
}
var nodeExports = requireNode();
const WebSocketIpml = /* @__PURE__ */ getDefaultExportFromCjs(nodeExports);
var sha256$2 = { exports: {} };
function commonjsRequire(path2) {
  throw new Error(
    'Could not dynamically require "' +
      path2 +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var core$1 = { exports: {} };
var core = core$1.exports;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core$1.exports;
  hasRequiredCore = 1;
  (function (module2, exports$1) {
    (function (root, factory) {
      {
        module2.exports = factory();
      }
    })(core, function () {
      var CryptoJS =
        CryptoJS ||
        (function (Math2, undefined$1) {
          var crypto2;
          if (typeof window !== "undefined" && window.crypto) {
            crypto2 = window.crypto;
          }
          if (typeof self !== "undefined" && self.crypto) {
            crypto2 = self.crypto;
          }
          if (typeof globalThis !== "undefined" && globalThis.crypto) {
            crypto2 = globalThis.crypto;
          }
          if (!crypto2 && typeof window !== "undefined" && window.msCrypto) {
            crypto2 = window.msCrypto;
          }
          if (
            !crypto2 &&
            typeof commonjsGlobal !== "undefined" &&
            commonjsGlobal.crypto
          ) {
            crypto2 = commonjsGlobal.crypto;
          }
          if (!crypto2 && typeof commonjsRequire === "function") {
            try {
              crypto2 = require("crypto");
            } catch (err) {}
          }
          var cryptoSecureRandomInt = function () {
            if (crypto2) {
              if (typeof crypto2.getRandomValues === "function") {
                try {
                  return crypto2.getRandomValues(new Uint32Array(1))[0];
                } catch (err) {}
              }
              if (typeof crypto2.randomBytes === "function") {
                try {
                  return crypto2.randomBytes(4).readInt32LE();
                } catch (err) {}
              }
            }
            throw new Error(
              "Native crypto module could not be used to get secure random number."
            );
          };
          var create =
            Object.create ||
            /* @__PURE__ */ (function () {
              function F() {}
              return function (obj) {
                var subtype;
                F.prototype = obj;
                subtype = new F();
                F.prototype = null;
                return subtype;
              };
            })();
          var C = {};
          var C_lib = (C.lib = {});
          var Base = (C_lib.Base = /* @__PURE__ */ (function () {
            return {
              /**
               * Creates a new object that inherits from this object.
               *
               * @param {Object} overrides Properties to copy into the new object.
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         field: 'value',
               *
               *         method: function () {
               *         }
               *     });
               */
              extend: function (overrides) {
                var subtype = create(this);
                if (overrides) {
                  subtype.mixIn(overrides);
                }
                if (
                  !subtype.hasOwnProperty("init") ||
                  this.init === subtype.init
                ) {
                  subtype.init = function () {
                    subtype.$super.init.apply(this, arguments);
                  };
                }
                subtype.init.prototype = subtype;
                subtype.$super = this;
                return subtype;
              },
              /**
               * Extends this object and runs the init method.
               * Arguments to create() will be passed to init().
               *
               * @return {Object} The new object.
               *
               * @static
               *
               * @example
               *
               *     var instance = MyType.create();
               */
              create: function () {
                var instance2 = this.extend();
                instance2.init.apply(instance2, arguments);
                return instance2;
              },
              /**
               * Initializes a newly created object.
               * Override this method to add some logic when your objects are created.
               *
               * @example
               *
               *     var MyType = CryptoJS.lib.Base.extend({
               *         init: function () {
               *             // ...
               *         }
               *     });
               */
              init: function () {},
              /**
               * Copies properties into this object.
               *
               * @param {Object} properties The properties to mix in.
               *
               * @example
               *
               *     MyType.mixIn({
               *         field: 'value'
               *     });
               */
              mixIn: function (properties) {
                for (var propertyName in properties) {
                  if (properties.hasOwnProperty(propertyName)) {
                    this[propertyName] = properties[propertyName];
                  }
                }
                if (properties.hasOwnProperty("toString")) {
                  this.toString = properties.toString;
                }
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = instance.clone();
               */
              clone: function () {
                return this.init.prototype.extend(this);
              },
            };
          })());
          var WordArray = (C_lib.WordArray = Base.extend({
            /**
             * Initializes a newly created word array.
             *
             * @param {Array} words (Optional) An array of 32-bit words.
             * @param {number} sigBytes (Optional) The number of significant bytes in the words.
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.create();
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
             *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
             */
            init: function (words, sigBytes) {
              words = this.words = words || [];
              if (sigBytes != undefined$1) {
                this.sigBytes = sigBytes;
              } else {
                this.sigBytes = words.length * 4;
              }
            },
            /**
             * Converts this word array to a string.
             *
             * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
             *
             * @return {string} The stringified word array.
             *
             * @example
             *
             *     var string = wordArray + '';
             *     var string = wordArray.toString();
             *     var string = wordArray.toString(CryptoJS.enc.Utf8);
             */
            toString: function (encoder) {
              return (encoder || Hex).stringify(this);
            },
            /**
             * Concatenates a word array to this word array.
             *
             * @param {WordArray} wordArray The word array to append.
             *
             * @return {WordArray} This word array.
             *
             * @example
             *
             *     wordArray1.concat(wordArray2);
             */
            concat: function (wordArray) {
              var thisWords = this.words;
              var thatWords = wordArray.words;
              var thisSigBytes = this.sigBytes;
              var thatSigBytes = wordArray.sigBytes;
              this.clamp();
              if (thisSigBytes % 4) {
                for (var i = 0; i < thatSigBytes; i++) {
                  var thatByte =
                    (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                  thisWords[(thisSigBytes + i) >>> 2] |=
                    thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                }
              } else {
                for (var j = 0; j < thatSigBytes; j += 4) {
                  thisWords[(thisSigBytes + j) >>> 2] = thatWords[j >>> 2];
                }
              }
              this.sigBytes += thatSigBytes;
              return this;
            },
            /**
             * Removes insignificant bits.
             *
             * @example
             *
             *     wordArray.clamp();
             */
            clamp: function () {
              var words = this.words;
              var sigBytes = this.sigBytes;
              words[sigBytes >>> 2] &= 4294967295 << (32 - (sigBytes % 4) * 8);
              words.length = Math2.ceil(sigBytes / 4);
            },
            /**
             * Creates a copy of this word array.
             *
             * @return {WordArray} The clone.
             *
             * @example
             *
             *     var clone = wordArray.clone();
             */
            clone: function () {
              var clone2 = Base.clone.call(this);
              clone2.words = this.words.slice(0);
              return clone2;
            },
            /**
             * Creates a word array filled with random bytes.
             *
             * @param {number} nBytes The number of random bytes to generate.
             *
             * @return {WordArray} The random word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.lib.WordArray.random(16);
             */
            random: function (nBytes) {
              var words = [];
              for (var i = 0; i < nBytes; i += 4) {
                words.push(cryptoSecureRandomInt());
              }
              return new WordArray.init(words, nBytes);
            },
          }));
          var C_enc = (C.enc = {});
          var Hex = (C_enc.Hex = {
            /**
             * Converts a word array to a hex string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The hex string.
             *
             * @static
             *
             * @example
             *
             *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
             */
            stringify: function (wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var hexChars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 15).toString(16));
              }
              return hexChars.join("");
            },
            /**
             * Converts a hex string to a word array.
             *
             * @param {string} hexStr The hex string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
             */
            parse: function (hexStr) {
              var hexStrLength = hexStr.length;
              var words = [];
              for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |=
                  parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
              }
              return new WordArray.init(words, hexStrLength / 2);
            },
          });
          var Latin1 = (C_enc.Latin1 = {
            /**
             * Converts a word array to a Latin1 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The Latin1 string.
             *
             * @static
             *
             * @example
             *
             *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
             */
            stringify: function (wordArray) {
              var words = wordArray.words;
              var sigBytes = wordArray.sigBytes;
              var latin1Chars = [];
              for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
                latin1Chars.push(String.fromCharCode(bite));
              }
              return latin1Chars.join("");
            },
            /**
             * Converts a Latin1 string to a word array.
             *
             * @param {string} latin1Str The Latin1 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
             */
            parse: function (latin1Str) {
              var latin1StrLength = latin1Str.length;
              var words = [];
              for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |=
                  (latin1Str.charCodeAt(i) & 255) << (24 - (i % 4) * 8);
              }
              return new WordArray.init(words, latin1StrLength);
            },
          });
          var Utf8 = (C_enc.Utf8 = {
            /**
             * Converts a word array to a UTF-8 string.
             *
             * @param {WordArray} wordArray The word array.
             *
             * @return {string} The UTF-8 string.
             *
             * @static
             *
             * @example
             *
             *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
             */
            stringify: function (wordArray) {
              try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
              } catch (e) {
                throw new Error("Malformed UTF-8 data");
              }
            },
            /**
             * Converts a UTF-8 string to a word array.
             *
             * @param {string} utf8Str The UTF-8 string.
             *
             * @return {WordArray} The word array.
             *
             * @static
             *
             * @example
             *
             *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
             */
            parse: function (utf8Str) {
              return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
            },
          });
          var BufferedBlockAlgorithm = (C_lib.BufferedBlockAlgorithm =
            Base.extend({
              /**
               * Resets this block algorithm's data buffer to its initial state.
               *
               * @example
               *
               *     bufferedBlockAlgorithm.reset();
               */
              reset: function () {
                this._data = new WordArray.init();
                this._nDataBytes = 0;
              },
              /**
               * Adds new data to this block algorithm's buffer.
               *
               * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
               *
               * @example
               *
               *     bufferedBlockAlgorithm._append('data');
               *     bufferedBlockAlgorithm._append(wordArray);
               */
              _append: function (data) {
                if (typeof data == "string") {
                  data = Utf8.parse(data);
                }
                this._data.concat(data);
                this._nDataBytes += data.sigBytes;
              },
              /**
               * Processes available data blocks.
               *
               * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
               *
               * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
               *
               * @return {WordArray} The processed data.
               *
               * @example
               *
               *     var processedData = bufferedBlockAlgorithm._process();
               *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
               */
              _process: function (doFlush) {
                var processedWords;
                var data = this._data;
                var dataWords = data.words;
                var dataSigBytes = data.sigBytes;
                var blockSize = this.blockSize;
                var blockSizeBytes = blockSize * 4;
                var nBlocksReady = dataSigBytes / blockSizeBytes;
                if (doFlush) {
                  nBlocksReady = Math2.ceil(nBlocksReady);
                } else {
                  nBlocksReady = Math2.max(
                    (nBlocksReady | 0) - this._minBufferSize,
                    0
                  );
                }
                var nWordsReady = nBlocksReady * blockSize;
                var nBytesReady = Math2.min(nWordsReady * 4, dataSigBytes);
                if (nWordsReady) {
                  for (
                    var offset = 0;
                    offset < nWordsReady;
                    offset += blockSize
                  ) {
                    this._doProcessBlock(dataWords, offset);
                  }
                  processedWords = dataWords.splice(0, nWordsReady);
                  data.sigBytes -= nBytesReady;
                }
                return new WordArray.init(processedWords, nBytesReady);
              },
              /**
               * Creates a copy of this object.
               *
               * @return {Object} The clone.
               *
               * @example
               *
               *     var clone = bufferedBlockAlgorithm.clone();
               */
              clone: function () {
                var clone2 = Base.clone.call(this);
                clone2._data = this._data.clone();
                return clone2;
              },
              _minBufferSize: 0,
            }));
          C_lib.Hasher = BufferedBlockAlgorithm.extend({
            /**
             * Configuration options.
             */
            cfg: Base.extend(),
            /**
             * Initializes a newly created hasher.
             *
             * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
             *
             * @example
             *
             *     var hasher = CryptoJS.algo.SHA256.create();
             */
            init: function (cfg) {
              this.cfg = this.cfg.extend(cfg);
              this.reset();
            },
            /**
             * Resets this hasher to its initial state.
             *
             * @example
             *
             *     hasher.reset();
             */
            reset: function () {
              BufferedBlockAlgorithm.reset.call(this);
              this._doReset();
            },
            /**
             * Updates this hasher with a message.
             *
             * @param {WordArray|string} messageUpdate The message to append.
             *
             * @return {Hasher} This hasher.
             *
             * @example
             *
             *     hasher.update('message');
             *     hasher.update(wordArray);
             */
            update: function (messageUpdate) {
              this._append(messageUpdate);
              this._process();
              return this;
            },
            /**
             * Finalizes the hash computation.
             * Note that the finalize operation is effectively a destructive, read-once operation.
             *
             * @param {WordArray|string} messageUpdate (Optional) A final message update.
             *
             * @return {WordArray} The hash.
             *
             * @example
             *
             *     var hash = hasher.finalize();
             *     var hash = hasher.finalize('message');
             *     var hash = hasher.finalize(wordArray);
             */
            finalize: function (messageUpdate) {
              if (messageUpdate) {
                this._append(messageUpdate);
              }
              var hash = this._doFinalize();
              return hash;
            },
            blockSize: 512 / 32,
            /**
             * Creates a shortcut function to a hasher's object interface.
             *
             * @param {Hasher} hasher The hasher to create a helper for.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
             */
            _createHelper: function (hasher) {
              return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
              };
            },
            /**
             * Creates a shortcut function to the HMAC's object interface.
             *
             * @param {Hasher} hasher The hasher to use in this HMAC helper.
             *
             * @return {Function} The shortcut function.
             *
             * @static
             *
             * @example
             *
             *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
             */
            _createHmacHelper: function (hasher) {
              return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
              };
            },
          });
          var C_algo = (C.algo = {});
          return C;
        })(Math);
      return CryptoJS;
    });
  })(core$1);
  return core$1.exports;
}
var sha256$1 = sha256$2.exports;
var hasRequiredSha256;
function requireSha256() {
  if (hasRequiredSha256) return sha256$2.exports;
  hasRequiredSha256 = 1;
  (function (module2, exports$1) {
    (function (root, factory) {
      {
        module2.exports = factory(requireCore());
      }
    })(sha256$1, function (CryptoJS) {
      (function (Math2) {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var Hasher = C_lib.Hasher;
        var C_algo = C.algo;
        var H = [];
        var K = [];
        (function () {
          function isPrime(n2) {
            var sqrtN = Math2.sqrt(n2);
            for (var factor = 2; factor <= sqrtN; factor++) {
              if (!(n2 % factor)) {
                return false;
              }
            }
            return true;
          }
          function getFractionalBits(n2) {
            return ((n2 - (n2 | 0)) * 4294967296) | 0;
          }
          var n = 2;
          var nPrime = 0;
          while (nPrime < 64) {
            if (isPrime(n)) {
              if (nPrime < 8) {
                H[nPrime] = getFractionalBits(Math2.pow(n, 1 / 2));
              }
              K[nPrime] = getFractionalBits(Math2.pow(n, 1 / 3));
              nPrime++;
            }
            n++;
          }
        })();
        var W = [];
        var SHA256 = (C_algo.SHA256 = Hasher.extend({
          _doReset: function () {
            this._hash = new WordArray.init(H.slice(0));
          },
          _doProcessBlock: function (M, offset) {
            var H2 = this._hash.words;
            var a = H2[0];
            var b = H2[1];
            var c = H2[2];
            var d = H2[3];
            var e = H2[4];
            var f = H2[5];
            var g = H2[6];
            var h = H2[7];
            for (var i = 0; i < 64; i++) {
              if (i < 16) {
                W[i] = M[offset + i] | 0;
              } else {
                var gamma0x = W[i - 15];
                var gamma0 =
                  ((gamma0x << 25) | (gamma0x >>> 7)) ^
                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
                  (gamma0x >>> 3);
                var gamma1x = W[i - 2];
                var gamma1 =
                  ((gamma1x << 15) | (gamma1x >>> 17)) ^
                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
                  (gamma1x >>> 10);
                W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
              }
              var ch = (e & f) ^ (~e & g);
              var maj = (a & b) ^ (a & c) ^ (b & c);
              var sigma0 =
                ((a << 30) | (a >>> 2)) ^
                ((a << 19) | (a >>> 13)) ^
                ((a << 10) | (a >>> 22));
              var sigma1 =
                ((e << 26) | (e >>> 6)) ^
                ((e << 21) | (e >>> 11)) ^
                ((e << 7) | (e >>> 25));
              var t1 = h + sigma1 + ch + K[i] + W[i];
              var t2 = sigma0 + maj;
              h = g;
              g = f;
              f = e;
              e = (d + t1) | 0;
              d = c;
              c = b;
              b = a;
              a = (t1 + t2) | 0;
            }
            H2[0] = (H2[0] + a) | 0;
            H2[1] = (H2[1] + b) | 0;
            H2[2] = (H2[2] + c) | 0;
            H2[3] = (H2[3] + d) | 0;
            H2[4] = (H2[4] + e) | 0;
            H2[5] = (H2[5] + f) | 0;
            H2[6] = (H2[6] + g) | 0;
            H2[7] = (H2[7] + h) | 0;
          },
          _doFinalize: function () {
            var data = this._data;
            var dataWords = data.words;
            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;
            dataWords[nBitsLeft >>> 5] |= 128 << (24 - (nBitsLeft % 32));
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math2.floor(
              nBitsTotal / 4294967296
            );
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;
            this._process();
            return this._hash;
          },
          clone: function () {
            var clone2 = Hasher.clone.call(this);
            clone2._hash = this._hash.clone();
            return clone2;
          },
        }));
        C.SHA256 = Hasher._createHelper(SHA256);
        C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
      })(Math);
      return CryptoJS.SHA256;
    });
  })(sha256$2);
  return sha256$2.exports;
}
var sha256Exports = requireSha256();
const sha256 = /* @__PURE__ */ getDefaultExportFromCjs(sha256Exports);
var encBase64$1 = { exports: {} };
var encBase64 = encBase64$1.exports;
var hasRequiredEncBase64;
function requireEncBase64() {
  if (hasRequiredEncBase64) return encBase64$1.exports;
  hasRequiredEncBase64 = 1;
  (function (module2, exports$1) {
    (function (root, factory) {
      {
        module2.exports = factory(requireCore());
      }
    })(encBase64, function (CryptoJS) {
      (function () {
        var C = CryptoJS;
        var C_lib = C.lib;
        var WordArray = C_lib.WordArray;
        var C_enc = C.enc;
        C_enc.Base64 = {
          /**
           * Converts a word array to a Base64 string.
           *
           * @param {WordArray} wordArray The word array.
           *
           * @return {string} The Base64 string.
           *
           * @static
           *
           * @example
           *
           *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
           */
          stringify: function (wordArray) {
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;
            wordArray.clamp();
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
              var byte1 = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 255;
              var byte2 =
                (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 255;
              var byte3 =
                (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 255;
              var triplet = (byte1 << 16) | (byte2 << 8) | byte3;
              for (var j = 0; j < 4 && i + j * 0.75 < sigBytes; j++) {
                base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 63));
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              while (base64Chars.length % 4) {
                base64Chars.push(paddingChar);
              }
            }
            return base64Chars.join("");
          },
          /**
           * Converts a Base64 string to a word array.
           *
           * @param {string} base64Str The Base64 string.
           *
           * @return {WordArray} The word array.
           *
           * @static
           *
           * @example
           *
           *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
           */
          parse: function (base64Str) {
            var base64StrLength = base64Str.length;
            var map = this._map;
            var reverseMap = this._reverseMap;
            if (!reverseMap) {
              reverseMap = this._reverseMap = [];
              for (var j = 0; j < map.length; j++) {
                reverseMap[map.charCodeAt(j)] = j;
              }
            }
            var paddingChar = map.charAt(64);
            if (paddingChar) {
              var paddingIndex = base64Str.indexOf(paddingChar);
              if (paddingIndex !== -1) {
                base64StrLength = paddingIndex;
              }
            }
            return parseLoop(base64Str, base64StrLength, reverseMap);
          },
          _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        };
        function parseLoop(base64Str, base64StrLength, reverseMap) {
          var words = [];
          var nBytes = 0;
          for (var i = 0; i < base64StrLength; i++) {
            if (i % 4) {
              var bits1 =
                reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
              var bits2 =
                reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
              var bitsCombined = bits1 | bits2;
              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
              nBytes++;
            }
          }
          return WordArray.create(words, nBytes);
        }
      })();
      return CryptoJS.enc.Base64;
    });
  })(encBase64$1);
  return encBase64$1.exports;
}
var encBase64Exports = requireEncBase64();
const Base64 = /* @__PURE__ */ getDefaultExportFromCjs(encBase64Exports);
function authenticationHashing_default(salt, challenge, msg) {
  const hash = Base64.stringify(sha256(msg + salt));
  return Base64.stringify(sha256(hash + challenge));
}
var debug = createDebug("obs-websocket-js");
var OBSWebSocketError = class extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
};
var BaseOBSWebSocket = class _BaseOBSWebSocket extends EventEmitter {
  static requestCounter = 1;
  static generateMessageId() {
    return String(_BaseOBSWebSocket.requestCounter++);
  }
  _identified = false;
  internalListeners = new EventEmitter();
  socket;
  get identified() {
    return this._identified;
  }
  /**
   * Connect to an obs-websocket server
   * @param url Websocket server to connect to (including ws:// or wss:// protocol)
   * @param password Password
   * @param identificationParams Data for Identify event
   * @returns Hello & Identified messages data (combined)
   */
  async connect(
    url = "ws://127.0.0.1:4455",
    password,
    identificationParams = {}
  ) {
    if (this.socket) {
      await this.disconnect();
    }
    try {
      const connectionClosedPromise =
        this.internalEventPromise("ConnectionClosed");
      const connectionErrorPromise =
        this.internalEventPromise("ConnectionError");
      return await Promise.race([
        (async () => {
          const hello = await this.createConnection(url);
          this.emit("Hello", hello);
          return this.identify(hello, password, identificationParams);
        })(),
        // Choose the best promise for connection error/close
        // In browser connection close has close code + reason,
        // while in node error event has these
        new Promise((resolve, reject) => {
          void connectionErrorPromise.then((e) => {
            if (e.message) {
              reject(e);
            }
          });
          void connectionClosedPromise.then((e) => {
            reject(e);
          });
        }),
      ]);
    } catch (error) {
      await this.disconnect();
      throw error;
    }
  }
  /**
   * Disconnect from obs-websocket server
   */
  async disconnect() {
    if (!this.socket || this.socket.readyState === WebSocketIpml.CLOSED) {
      return;
    }
    const connectionClosedPromise =
      this.internalEventPromise("ConnectionClosed");
    this.socket.close();
    await connectionClosedPromise;
  }
  /**
   * Update session parameters
   * @param data Reidentify data
   * @returns Identified message data
   */
  async reidentify(data) {
    const identifiedPromise = this.internalEventPromise(`op:${2}`);
    await this.message(3, data);
    return identifiedPromise;
  }
  /**
   * Send a request to obs-websocket
   * @param requestType Request name
   * @param requestData Request data
   * @returns Request response
   */
  async call(requestType, requestData) {
    const requestId = _BaseOBSWebSocket.generateMessageId();
    const responsePromise = this.internalEventPromise(`res:${requestId}`);
    await this.message(6, {
      requestId,
      requestType,
      requestData,
    });
    const { requestStatus, responseData } = await responsePromise;
    if (!requestStatus.result) {
      throw new OBSWebSocketError(requestStatus.code, requestStatus.comment);
    }
    return responseData;
  }
  /**
   * Send a batch request to obs-websocket
   * @param requests Array of Request objects (type and data)
   * @param options A set of options for how the batch will be executed
   * @param options.executionType The mode of execution obs-websocket will run the batch in
   * @param options.haltOnFailure Whether obs-websocket should stop executing the batch if one request fails
   * @returns RequestBatch response
   */
  async callBatch(requests, options = {}) {
    const requestId = _BaseOBSWebSocket.generateMessageId();
    const responsePromise = this.internalEventPromise(`res:${requestId}`);
    await this.message(8, {
      requestId,
      requests,
      ...options,
    });
    const { results } = await responsePromise;
    return results;
  }
  /**
   * Cleanup from socket disconnection
   */
  cleanup() {
    if (!this.socket) {
      return;
    }
    this.socket.onopen = null;
    this.socket.onmessage = null;
    this.socket.onerror = null;
    this.socket.onclose = null;
    this.socket = void 0;
    this._identified = false;
    this.internalListeners.removeAllListeners();
  }
  /**
   * Create connection to specified obs-websocket server
   *
   * @private
   * @param url Websocket address
   * @returns Promise for hello data
   */
  async createConnection(url) {
    var _a2;
    const connectionOpenedPromise =
      this.internalEventPromise("ConnectionOpened");
    const helloPromise = this.internalEventPromise(`op:${0}`);
    this.socket = new WebSocketIpml(url, this.protocol);
    this.socket.onopen = this.onOpen.bind(this);
    this.socket.onmessage = this.onMessage.bind(this);
    this.socket.onerror = this.onError.bind(this);
    this.socket.onclose = this.onClose.bind(this);
    await connectionOpenedPromise;
    const protocol = (_a2 = this.socket) == null ? void 0 : _a2.protocol;
    if (!protocol) {
      throw new OBSWebSocketError(-1, "Server sent no subprotocol");
    }
    if (protocol !== this.protocol) {
      throw new OBSWebSocketError(-1, "Server sent an invalid subprotocol");
    }
    return helloPromise;
  }
  /**
   * Send identify message
   *
   * @private
   * @param hello Hello message data
   * @param password Password
   * @param identificationParams Identification params
   * @returns Hello & Identified messages data (combined)
   */
  async identify(
    { authentication, rpcVersion, ...helloRest },
    password,
    identificationParams = {}
  ) {
    const data = {
      rpcVersion,
      ...identificationParams,
    };
    if (authentication && password) {
      data.authentication = authenticationHashing_default(
        authentication.salt,
        authentication.challenge,
        password
      );
    }
    const identifiedPromise = this.internalEventPromise(`op:${2}`);
    await this.message(1, data);
    const identified = await identifiedPromise;
    this._identified = true;
    this.emit("Identified", identified);
    return {
      rpcVersion,
      ...helloRest,
      ...identified,
    };
  }
  /**
   * Send message to obs-websocket
   *
   * @private
   * @param op WebSocketOpCode
   * @param d Message data
   */
  async message(op, d) {
    if (!this.socket) {
      throw new Error("Not connected");
    }
    if (!this.identified && op !== 1) {
      throw new Error("Socket not identified");
    }
    const encoded = await this.encodeMessage({
      op,
      d,
    });
    this.socket.send(encoded);
  }
  /**
   * Create a promise to listen for an event on internal listener
   * (will be cleaned up on disconnect)
   *
   * @private
   * @param event Event to listen to
   * @returns Event data
   */
  async internalEventPromise(event) {
    return new Promise((resolve) => {
      this.internalListeners.once(event, resolve);
    });
  }
  /**
   * Websocket open event listener
   *
   * @private
   * @param e Event
   */
  onOpen(e) {
    debug("socket.open");
    this.emit("ConnectionOpened");
    this.internalListeners.emit("ConnectionOpened", e);
  }
  /**
   * Websocket message event listener
   *
   * @private
   * @param e Event
   */
  async onMessage(e) {
    try {
      const { op, d } = await this.decodeMessage(e.data);
      debug("socket.message: %d %j", op, d);
      if (op === void 0 || d === void 0) {
        return;
      }
      switch (op) {
        case 5: {
          const { eventType, eventData } = d;
          this.emit(eventType, eventData);
          return;
        }
        case 7:
        case 9: {
          const { requestId } = d;
          this.internalListeners.emit(`res:${requestId}`, d);
          return;
        }
        default:
          this.internalListeners.emit(`op:${op}`, d);
      }
    } catch (error) {
      debug("error handling message: %o", error);
    }
  }
  /**
   * Websocket error event listener
   *
   * @private
   * @param e ErrorEvent
   */
  onError(e) {
    debug("socket.error: %o", e);
    const error = new OBSWebSocketError(-1, e.message);
    this.emit("ConnectionError", error);
    this.internalListeners.emit("ConnectionError", error);
  }
  /**
   * Websocket close event listener
   *
   * @private
   * @param e Event
   */
  onClose(e) {
    debug("socket.close: %s (%d)", e.reason, e.code);
    const error = new OBSWebSocketError(e.code, e.reason);
    this.emit("ConnectionClosed", error);
    this.internalListeners.emit("ConnectionClosed", error);
    this.cleanup();
  }
};
if (typeof exports !== "undefined") {
  Object.defineProperty(exports, "__esModule", { value: true });
}
var UINT32_MAX = 4294967295;
function setUint64(view, offset, value) {
  var high = value / 4294967296;
  var low = value;
  view.setUint32(offset, high);
  view.setUint32(offset + 4, low);
}
function setInt64(view, offset, value) {
  var high = Math.floor(value / 4294967296);
  var low = value;
  view.setUint32(offset, high);
  view.setUint32(offset + 4, low);
}
function getInt64(view, offset) {
  var high = view.getInt32(offset);
  var low = view.getUint32(offset + 4);
  return high * 4294967296 + low;
}
function getUint64(view, offset) {
  var high = view.getUint32(offset);
  var low = view.getUint32(offset + 4);
  return high * 4294967296 + low;
}
var _a, _b, _c;
var TEXT_ENCODING_AVAILABLE =
  (typeof process === "undefined" ||
    ((_a = process === null || process === void 0 ? void 0 : process.env) ===
      null || _a === void 0
      ? void 0
      : _a["TEXT_ENCODING"]) !== "never") &&
  typeof TextEncoder !== "undefined" &&
  typeof TextDecoder !== "undefined";
function utf8Count(str) {
  var strLength = str.length;
  var byteLength = 0;
  var pos = 0;
  while (pos < strLength) {
    var value = str.charCodeAt(pos++);
    if ((value & 4294967168) === 0) {
      byteLength++;
      continue;
    } else if ((value & 4294965248) === 0) {
      byteLength += 2;
    } else {
      if (value >= 55296 && value <= 56319) {
        if (pos < strLength) {
          var extra = str.charCodeAt(pos);
          if ((extra & 64512) === 56320) {
            ++pos;
            value = ((value & 1023) << 10) + (extra & 1023) + 65536;
          }
        }
      }
      if ((value & 4294901760) === 0) {
        byteLength += 3;
      } else {
        byteLength += 4;
      }
    }
  }
  return byteLength;
}
function utf8EncodeJs(str, output, outputOffset) {
  var strLength = str.length;
  var offset = outputOffset;
  var pos = 0;
  while (pos < strLength) {
    var value = str.charCodeAt(pos++);
    if ((value & 4294967168) === 0) {
      output[offset++] = value;
      continue;
    } else if ((value & 4294965248) === 0) {
      output[offset++] = ((value >> 6) & 31) | 192;
    } else {
      if (value >= 55296 && value <= 56319) {
        if (pos < strLength) {
          var extra = str.charCodeAt(pos);
          if ((extra & 64512) === 56320) {
            ++pos;
            value = ((value & 1023) << 10) + (extra & 1023) + 65536;
          }
        }
      }
      if ((value & 4294901760) === 0) {
        output[offset++] = ((value >> 12) & 15) | 224;
        output[offset++] = ((value >> 6) & 63) | 128;
      } else {
        output[offset++] = ((value >> 18) & 7) | 240;
        output[offset++] = ((value >> 12) & 63) | 128;
        output[offset++] = ((value >> 6) & 63) | 128;
      }
    }
    output[offset++] = (value & 63) | 128;
  }
}
var sharedTextEncoder = TEXT_ENCODING_AVAILABLE ? new TextEncoder() : void 0;
var TEXT_ENCODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE
  ? UINT32_MAX
  : typeof process !== "undefined" &&
      ((_b = process === null || process === void 0 ? void 0 : process.env) ===
        null || _b === void 0
        ? void 0
        : _b["TEXT_ENCODING"]) !== "force"
    ? 200
    : 0;
function utf8EncodeTEencode(str, output, outputOffset) {
  output.set(sharedTextEncoder.encode(str), outputOffset);
}
function utf8EncodeTEencodeInto(str, output, outputOffset) {
  sharedTextEncoder.encodeInto(str, output.subarray(outputOffset));
}
var utf8EncodeTE = (
  sharedTextEncoder === null || sharedTextEncoder === void 0
    ? void 0
    : sharedTextEncoder.encodeInto
)
  ? utf8EncodeTEencodeInto
  : utf8EncodeTEencode;
var CHUNK_SIZE = 4096;
function utf8DecodeJs(bytes, inputOffset, byteLength) {
  var offset = inputOffset;
  var end = offset + byteLength;
  var units = [];
  var result = "";
  while (offset < end) {
    var byte1 = bytes[offset++];
    if ((byte1 & 128) === 0) {
      units.push(byte1);
    } else if ((byte1 & 224) === 192) {
      var byte2 = bytes[offset++] & 63;
      units.push(((byte1 & 31) << 6) | byte2);
    } else if ((byte1 & 240) === 224) {
      var byte2 = bytes[offset++] & 63;
      var byte3 = bytes[offset++] & 63;
      units.push(((byte1 & 31) << 12) | (byte2 << 6) | byte3);
    } else if ((byte1 & 248) === 240) {
      var byte2 = bytes[offset++] & 63;
      var byte3 = bytes[offset++] & 63;
      var byte4 = bytes[offset++] & 63;
      var unit = ((byte1 & 7) << 18) | (byte2 << 12) | (byte3 << 6) | byte4;
      if (unit > 65535) {
        unit -= 65536;
        units.push(((unit >>> 10) & 1023) | 55296);
        unit = 56320 | (unit & 1023);
      }
      units.push(unit);
    } else {
      units.push(byte1);
    }
    if (units.length >= CHUNK_SIZE) {
      result += String.fromCharCode.apply(String, units);
      units.length = 0;
    }
  }
  if (units.length > 0) {
    result += String.fromCharCode.apply(String, units);
  }
  return result;
}
var sharedTextDecoder = TEXT_ENCODING_AVAILABLE ? new TextDecoder() : null;
var TEXT_DECODER_THRESHOLD = !TEXT_ENCODING_AVAILABLE
  ? UINT32_MAX
  : typeof process !== "undefined" &&
      ((_c = process === null || process === void 0 ? void 0 : process.env) ===
        null || _c === void 0
        ? void 0
        : _c["TEXT_DECODER"]) !== "force"
    ? 200
    : 0;
function utf8DecodeTD(bytes, inputOffset, byteLength) {
  var stringBytes = bytes.subarray(inputOffset, inputOffset + byteLength);
  return sharedTextDecoder.decode(stringBytes);
}
var ExtData =
  /** @class */
  /* @__PURE__ */ (function () {
    function ExtData2(type, data) {
      this.type = type;
      this.data = data;
    }
    return ExtData2;
  })();
var __extends = /* @__PURE__ */ (function () {
  var extendStatics = function (d, b) {
    extendStatics =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (d2, b2) {
          d2.__proto__ = b2;
        }) ||
      function (d2, b2) {
        for (var p in b2)
          if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
    return extendStatics(d, b);
  };
  return function (d, b) {
    if (typeof b !== "function" && b !== null)
      throw new TypeError(
        "Class extends value " + String(b) + " is not a constructor or null"
      );
    extendStatics(d, b);
    function __() {
      this.constructor = d;
    }
    d.prototype =
      b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
  };
})();
var DecodeError =
  /** @class */
  (function (_super) {
    __extends(DecodeError2, _super);
    function DecodeError2(message) {
      var _this = _super.call(this, message) || this;
      var proto = Object.create(DecodeError2.prototype);
      Object.setPrototypeOf(_this, proto);
      Object.defineProperty(_this, "name", {
        configurable: true,
        enumerable: false,
        value: DecodeError2.name,
      });
      return _this;
    }
    return DecodeError2;
  })(Error);
var EXT_TIMESTAMP = -1;
var TIMESTAMP32_MAX_SEC = 4294967296 - 1;
var TIMESTAMP64_MAX_SEC = 17179869184 - 1;
function encodeTimeSpecToTimestamp(_a2) {
  var sec = _a2.sec,
    nsec = _a2.nsec;
  if (sec >= 0 && nsec >= 0 && sec <= TIMESTAMP64_MAX_SEC) {
    if (nsec === 0 && sec <= TIMESTAMP32_MAX_SEC) {
      var rv = new Uint8Array(4);
      var view = new DataView(rv.buffer);
      view.setUint32(0, sec);
      return rv;
    } else {
      var secHigh = sec / 4294967296;
      var secLow = sec & 4294967295;
      var rv = new Uint8Array(8);
      var view = new DataView(rv.buffer);
      view.setUint32(0, (nsec << 2) | (secHigh & 3));
      view.setUint32(4, secLow);
      return rv;
    }
  } else {
    var rv = new Uint8Array(12);
    var view = new DataView(rv.buffer);
    view.setUint32(0, nsec);
    setInt64(view, 4, sec);
    return rv;
  }
}
function encodeDateToTimeSpec(date) {
  var msec = date.getTime();
  var sec = Math.floor(msec / 1e3);
  var nsec = (msec - sec * 1e3) * 1e6;
  var nsecInSec = Math.floor(nsec / 1e9);
  return {
    sec: sec + nsecInSec,
    nsec: nsec - nsecInSec * 1e9,
  };
}
function encodeTimestampExtension(object) {
  if (object instanceof Date) {
    var timeSpec = encodeDateToTimeSpec(object);
    return encodeTimeSpecToTimestamp(timeSpec);
  } else {
    return null;
  }
}
function decodeTimestampToTimeSpec(data) {
  var view = new DataView(data.buffer, data.byteOffset, data.byteLength);
  switch (data.byteLength) {
    case 4: {
      var sec = view.getUint32(0);
      var nsec = 0;
      return { sec, nsec };
    }
    case 8: {
      var nsec30AndSecHigh2 = view.getUint32(0);
      var secLow32 = view.getUint32(4);
      var sec = (nsec30AndSecHigh2 & 3) * 4294967296 + secLow32;
      var nsec = nsec30AndSecHigh2 >>> 2;
      return { sec, nsec };
    }
    case 12: {
      var sec = getInt64(view, 4);
      var nsec = view.getUint32(0);
      return { sec, nsec };
    }
    default:
      throw new DecodeError(
        "Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(
          data.length
        )
      );
  }
}
function decodeTimestampExtension(data) {
  var timeSpec = decodeTimestampToTimeSpec(data);
  return new Date(timeSpec.sec * 1e3 + timeSpec.nsec / 1e6);
}
var timestampExtension = {
  type: EXT_TIMESTAMP,
  encode: encodeTimestampExtension,
  decode: decodeTimestampExtension,
};
var ExtensionCodec =
  /** @class */
  (function () {
    function ExtensionCodec2() {
      this.builtInEncoders = [];
      this.builtInDecoders = [];
      this.encoders = [];
      this.decoders = [];
      this.register(timestampExtension);
    }
    ExtensionCodec2.prototype.register = function (_a2) {
      var type = _a2.type,
        encode2 = _a2.encode,
        decode2 = _a2.decode;
      if (type >= 0) {
        this.encoders[type] = encode2;
        this.decoders[type] = decode2;
      } else {
        var index = 1 + type;
        this.builtInEncoders[index] = encode2;
        this.builtInDecoders[index] = decode2;
      }
    };
    ExtensionCodec2.prototype.tryToEncode = function (object, context) {
      for (var i = 0; i < this.builtInEncoders.length; i++) {
        var encodeExt = this.builtInEncoders[i];
        if (encodeExt != null) {
          var data = encodeExt(object, context);
          if (data != null) {
            var type = -1 - i;
            return new ExtData(type, data);
          }
        }
      }
      for (var i = 0; i < this.encoders.length; i++) {
        var encodeExt = this.encoders[i];
        if (encodeExt != null) {
          var data = encodeExt(object, context);
          if (data != null) {
            var type = i;
            return new ExtData(type, data);
          }
        }
      }
      if (object instanceof ExtData) {
        return object;
      }
      return null;
    };
    ExtensionCodec2.prototype.decode = function (data, type, context) {
      var decodeExt =
        type < 0 ? this.builtInDecoders[-1 - type] : this.decoders[type];
      if (decodeExt) {
        return decodeExt(data, type, context);
      } else {
        return new ExtData(type, data);
      }
    };
    ExtensionCodec2.defaultCodec = new ExtensionCodec2();
    return ExtensionCodec2;
  })();
function ensureUint8Array(buffer) {
  if (buffer instanceof Uint8Array) {
    return buffer;
  } else if (ArrayBuffer.isView(buffer)) {
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  } else if (buffer instanceof ArrayBuffer) {
    return new Uint8Array(buffer);
  } else {
    return Uint8Array.from(buffer);
  }
}
function createDataView(buffer) {
  if (buffer instanceof ArrayBuffer) {
    return new DataView(buffer);
  }
  var bufferView = ensureUint8Array(buffer);
  return new DataView(
    bufferView.buffer,
    bufferView.byteOffset,
    bufferView.byteLength
  );
}
var DEFAULT_MAX_DEPTH = 100;
var DEFAULT_INITIAL_BUFFER_SIZE = 2048;
var Encoder =
  /** @class */
  (function () {
    function Encoder2(
      extensionCodec,
      context,
      maxDepth,
      initialBufferSize,
      sortKeys,
      forceFloat32,
      ignoreUndefined,
      forceIntegerToFloat
    ) {
      if (extensionCodec === void 0) {
        extensionCodec = ExtensionCodec.defaultCodec;
      }
      if (context === void 0) {
        context = void 0;
      }
      if (maxDepth === void 0) {
        maxDepth = DEFAULT_MAX_DEPTH;
      }
      if (initialBufferSize === void 0) {
        initialBufferSize = DEFAULT_INITIAL_BUFFER_SIZE;
      }
      if (sortKeys === void 0) {
        sortKeys = false;
      }
      if (forceFloat32 === void 0) {
        forceFloat32 = false;
      }
      if (ignoreUndefined === void 0) {
        ignoreUndefined = false;
      }
      if (forceIntegerToFloat === void 0) {
        forceIntegerToFloat = false;
      }
      this.extensionCodec = extensionCodec;
      this.context = context;
      this.maxDepth = maxDepth;
      this.initialBufferSize = initialBufferSize;
      this.sortKeys = sortKeys;
      this.forceFloat32 = forceFloat32;
      this.ignoreUndefined = ignoreUndefined;
      this.forceIntegerToFloat = forceIntegerToFloat;
      this.pos = 0;
      this.view = new DataView(new ArrayBuffer(this.initialBufferSize));
      this.bytes = new Uint8Array(this.view.buffer);
    }
    Encoder2.prototype.reinitializeState = function () {
      this.pos = 0;
    };
    Encoder2.prototype.encodeSharedRef = function (object) {
      this.reinitializeState();
      this.doEncode(object, 1);
      return this.bytes.subarray(0, this.pos);
    };
    Encoder2.prototype.encode = function (object) {
      this.reinitializeState();
      this.doEncode(object, 1);
      return this.bytes.slice(0, this.pos);
    };
    Encoder2.prototype.doEncode = function (object, depth) {
      if (depth > this.maxDepth) {
        throw new Error("Too deep objects in depth ".concat(depth));
      }
      if (object == null) {
        this.encodeNil();
      } else if (typeof object === "boolean") {
        this.encodeBoolean(object);
      } else if (typeof object === "number") {
        this.encodeNumber(object);
      } else if (typeof object === "string") {
        this.encodeString(object);
      } else {
        this.encodeObject(object, depth);
      }
    };
    Encoder2.prototype.ensureBufferSizeToWrite = function (sizeToWrite) {
      var requiredSize = this.pos + sizeToWrite;
      if (this.view.byteLength < requiredSize) {
        this.resizeBuffer(requiredSize * 2);
      }
    };
    Encoder2.prototype.resizeBuffer = function (newSize) {
      var newBuffer = new ArrayBuffer(newSize);
      var newBytes = new Uint8Array(newBuffer);
      var newView = new DataView(newBuffer);
      newBytes.set(this.bytes);
      this.view = newView;
      this.bytes = newBytes;
    };
    Encoder2.prototype.encodeNil = function () {
      this.writeU8(192);
    };
    Encoder2.prototype.encodeBoolean = function (object) {
      if (object === false) {
        this.writeU8(194);
      } else {
        this.writeU8(195);
      }
    };
    Encoder2.prototype.encodeNumber = function (object) {
      if (Number.isSafeInteger(object) && !this.forceIntegerToFloat) {
        if (object >= 0) {
          if (object < 128) {
            this.writeU8(object);
          } else if (object < 256) {
            this.writeU8(204);
            this.writeU8(object);
          } else if (object < 65536) {
            this.writeU8(205);
            this.writeU16(object);
          } else if (object < 4294967296) {
            this.writeU8(206);
            this.writeU32(object);
          } else {
            this.writeU8(207);
            this.writeU64(object);
          }
        } else {
          if (object >= -32) {
            this.writeU8(224 | (object + 32));
          } else if (object >= -128) {
            this.writeU8(208);
            this.writeI8(object);
          } else if (object >= -32768) {
            this.writeU8(209);
            this.writeI16(object);
          } else if (object >= -2147483648) {
            this.writeU8(210);
            this.writeI32(object);
          } else {
            this.writeU8(211);
            this.writeI64(object);
          }
        }
      } else {
        if (this.forceFloat32) {
          this.writeU8(202);
          this.writeF32(object);
        } else {
          this.writeU8(203);
          this.writeF64(object);
        }
      }
    };
    Encoder2.prototype.writeStringHeader = function (byteLength) {
      if (byteLength < 32) {
        this.writeU8(160 + byteLength);
      } else if (byteLength < 256) {
        this.writeU8(217);
        this.writeU8(byteLength);
      } else if (byteLength < 65536) {
        this.writeU8(218);
        this.writeU16(byteLength);
      } else if (byteLength < 4294967296) {
        this.writeU8(219);
        this.writeU32(byteLength);
      } else {
        throw new Error(
          "Too long string: ".concat(byteLength, " bytes in UTF-8")
        );
      }
    };
    Encoder2.prototype.encodeString = function (object) {
      var maxHeaderSize = 1 + 4;
      var strLength = object.length;
      if (strLength > TEXT_ENCODER_THRESHOLD) {
        var byteLength = utf8Count(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
        this.writeStringHeader(byteLength);
        utf8EncodeTE(object, this.bytes, this.pos);
        this.pos += byteLength;
      } else {
        var byteLength = utf8Count(object);
        this.ensureBufferSizeToWrite(maxHeaderSize + byteLength);
        this.writeStringHeader(byteLength);
        utf8EncodeJs(object, this.bytes, this.pos);
        this.pos += byteLength;
      }
    };
    Encoder2.prototype.encodeObject = function (object, depth) {
      var ext = this.extensionCodec.tryToEncode(object, this.context);
      if (ext != null) {
        this.encodeExtension(ext);
      } else if (Array.isArray(object)) {
        this.encodeArray(object, depth);
      } else if (ArrayBuffer.isView(object)) {
        this.encodeBinary(object);
      } else if (typeof object === "object") {
        this.encodeMap(object, depth);
      } else {
        throw new Error(
          "Unrecognized object: ".concat(
            Object.prototype.toString.apply(object)
          )
        );
      }
    };
    Encoder2.prototype.encodeBinary = function (object) {
      var size = object.byteLength;
      if (size < 256) {
        this.writeU8(196);
        this.writeU8(size);
      } else if (size < 65536) {
        this.writeU8(197);
        this.writeU16(size);
      } else if (size < 4294967296) {
        this.writeU8(198);
        this.writeU32(size);
      } else {
        throw new Error("Too large binary: ".concat(size));
      }
      var bytes = ensureUint8Array(object);
      this.writeU8a(bytes);
    };
    Encoder2.prototype.encodeArray = function (object, depth) {
      var size = object.length;
      if (size < 16) {
        this.writeU8(144 + size);
      } else if (size < 65536) {
        this.writeU8(220);
        this.writeU16(size);
      } else if (size < 4294967296) {
        this.writeU8(221);
        this.writeU32(size);
      } else {
        throw new Error("Too large array: ".concat(size));
      }
      for (var _i = 0, object_1 = object; _i < object_1.length; _i++) {
        var item = object_1[_i];
        this.doEncode(item, depth + 1);
      }
    };
    Encoder2.prototype.countWithoutUndefined = function (object, keys) {
      var count = 0;
      for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (object[key] !== void 0) {
          count++;
        }
      }
      return count;
    };
    Encoder2.prototype.encodeMap = function (object, depth) {
      var keys = Object.keys(object);
      if (this.sortKeys) {
        keys.sort();
      }
      var size = this.ignoreUndefined
        ? this.countWithoutUndefined(object, keys)
        : keys.length;
      if (size < 16) {
        this.writeU8(128 + size);
      } else if (size < 65536) {
        this.writeU8(222);
        this.writeU16(size);
      } else if (size < 4294967296) {
        this.writeU8(223);
        this.writeU32(size);
      } else {
        throw new Error("Too large map object: ".concat(size));
      }
      for (var _i = 0, keys_2 = keys; _i < keys_2.length; _i++) {
        var key = keys_2[_i];
        var value = object[key];
        if (!(this.ignoreUndefined && value === void 0)) {
          this.encodeString(key);
          this.doEncode(value, depth + 1);
        }
      }
    };
    Encoder2.prototype.encodeExtension = function (ext) {
      var size = ext.data.length;
      if (size === 1) {
        this.writeU8(212);
      } else if (size === 2) {
        this.writeU8(213);
      } else if (size === 4) {
        this.writeU8(214);
      } else if (size === 8) {
        this.writeU8(215);
      } else if (size === 16) {
        this.writeU8(216);
      } else if (size < 256) {
        this.writeU8(199);
        this.writeU8(size);
      } else if (size < 65536) {
        this.writeU8(200);
        this.writeU16(size);
      } else if (size < 4294967296) {
        this.writeU8(201);
        this.writeU32(size);
      } else {
        throw new Error("Too large extension object: ".concat(size));
      }
      this.writeI8(ext.type);
      this.writeU8a(ext.data);
    };
    Encoder2.prototype.writeU8 = function (value) {
      this.ensureBufferSizeToWrite(1);
      this.view.setUint8(this.pos, value);
      this.pos++;
    };
    Encoder2.prototype.writeU8a = function (values) {
      var size = values.length;
      this.ensureBufferSizeToWrite(size);
      this.bytes.set(values, this.pos);
      this.pos += size;
    };
    Encoder2.prototype.writeI8 = function (value) {
      this.ensureBufferSizeToWrite(1);
      this.view.setInt8(this.pos, value);
      this.pos++;
    };
    Encoder2.prototype.writeU16 = function (value) {
      this.ensureBufferSizeToWrite(2);
      this.view.setUint16(this.pos, value);
      this.pos += 2;
    };
    Encoder2.prototype.writeI16 = function (value) {
      this.ensureBufferSizeToWrite(2);
      this.view.setInt16(this.pos, value);
      this.pos += 2;
    };
    Encoder2.prototype.writeU32 = function (value) {
      this.ensureBufferSizeToWrite(4);
      this.view.setUint32(this.pos, value);
      this.pos += 4;
    };
    Encoder2.prototype.writeI32 = function (value) {
      this.ensureBufferSizeToWrite(4);
      this.view.setInt32(this.pos, value);
      this.pos += 4;
    };
    Encoder2.prototype.writeF32 = function (value) {
      this.ensureBufferSizeToWrite(4);
      this.view.setFloat32(this.pos, value);
      this.pos += 4;
    };
    Encoder2.prototype.writeF64 = function (value) {
      this.ensureBufferSizeToWrite(8);
      this.view.setFloat64(this.pos, value);
      this.pos += 8;
    };
    Encoder2.prototype.writeU64 = function (value) {
      this.ensureBufferSizeToWrite(8);
      setUint64(this.view, this.pos, value);
      this.pos += 8;
    };
    Encoder2.prototype.writeI64 = function (value) {
      this.ensureBufferSizeToWrite(8);
      setInt64(this.view, this.pos, value);
      this.pos += 8;
    };
    return Encoder2;
  })();
var defaultEncodeOptions = {};
function encode(value, options) {
  if (options === void 0) {
    options = defaultEncodeOptions;
  }
  var encoder = new Encoder(
    options.extensionCodec,
    options.context,
    options.maxDepth,
    options.initialBufferSize,
    options.sortKeys,
    options.forceFloat32,
    options.ignoreUndefined,
    options.forceIntegerToFloat
  );
  return encoder.encodeSharedRef(value);
}
function prettyByte(byte) {
  return ""
    .concat(byte < 0 ? "-" : "", "0x")
    .concat(Math.abs(byte).toString(16).padStart(2, "0"));
}
var DEFAULT_MAX_KEY_LENGTH = 16;
var DEFAULT_MAX_LENGTH_PER_KEY = 16;
var CachedKeyDecoder =
  /** @class */
  (function () {
    function CachedKeyDecoder2(maxKeyLength, maxLengthPerKey) {
      if (maxKeyLength === void 0) {
        maxKeyLength = DEFAULT_MAX_KEY_LENGTH;
      }
      if (maxLengthPerKey === void 0) {
        maxLengthPerKey = DEFAULT_MAX_LENGTH_PER_KEY;
      }
      this.maxKeyLength = maxKeyLength;
      this.maxLengthPerKey = maxLengthPerKey;
      this.hit = 0;
      this.miss = 0;
      this.caches = [];
      for (var i = 0; i < this.maxKeyLength; i++) {
        this.caches.push([]);
      }
    }
    CachedKeyDecoder2.prototype.canBeCached = function (byteLength) {
      return byteLength > 0 && byteLength <= this.maxKeyLength;
    };
    CachedKeyDecoder2.prototype.find = function (
      bytes,
      inputOffset,
      byteLength
    ) {
      var records = this.caches[byteLength - 1];
      FIND_CHUNK: for (
        var _i = 0, records_1 = records;
        _i < records_1.length;
        _i++
      ) {
        var record = records_1[_i];
        var recordBytes = record.bytes;
        for (var j = 0; j < byteLength; j++) {
          if (recordBytes[j] !== bytes[inputOffset + j]) {
            continue FIND_CHUNK;
          }
        }
        return record.str;
      }
      return null;
    };
    CachedKeyDecoder2.prototype.store = function (bytes, value) {
      var records = this.caches[bytes.length - 1];
      var record = { bytes, str: value };
      if (records.length >= this.maxLengthPerKey) {
        records[(Math.random() * records.length) | 0] = record;
      } else {
        records.push(record);
      }
    };
    CachedKeyDecoder2.prototype.decode = function (
      bytes,
      inputOffset,
      byteLength
    ) {
      var cachedValue = this.find(bytes, inputOffset, byteLength);
      if (cachedValue != null) {
        this.hit++;
        return cachedValue;
      }
      this.miss++;
      var str = utf8DecodeJs(bytes, inputOffset, byteLength);
      var slicedCopyOfBytes = Uint8Array.prototype.slice.call(
        bytes,
        inputOffset,
        inputOffset + byteLength
      );
      this.store(slicedCopyOfBytes, str);
      return str;
    };
    return CachedKeyDecoder2;
  })();
var __awaiter = function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P
      ? value
      : new P(function (resolve) {
          resolve(value);
        });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done
        ? resolve(result.value)
        : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: [],
    },
    f,
    y,
    t,
    g;
  return (
    (g = { next: verb(0), throw: verb(1), return: verb(2) }),
    typeof Symbol === "function" &&
      (g[Symbol.iterator] = function () {
        return this;
      }),
    g
  );
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (_)
      try {
        if (
          ((f = 1),
          y &&
            (t =
              op[0] & 2
                ? y["return"]
                : op[0]
                  ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                  : y.next) &&
            !(t = t.call(y, op[1])).done)
        )
          return t;
        if (((y = 0), t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return { value: op[1], done: false };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (
              !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
              (op[0] === 6 || op[0] === 2)
            ) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
};
var __asyncValues = function (o) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator],
    i;
  return m
    ? m.call(o)
    : ((o =
        typeof __values === "function" ? __values(o) : o[Symbol.iterator]()),
      (i = {}),
      verb("next"),
      verb("throw"),
      verb("return"),
      (i[Symbol.asyncIterator] = function () {
        return this;
      }),
      i);
  function verb(n) {
    i[n] =
      o[n] &&
      function (v) {
        return new Promise(function (resolve, reject) {
          ((v = o[n](v)), settle(resolve, reject, v.done, v.value));
        });
      };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function (v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
};
var __await = function (v) {
  return this instanceof __await ? ((this.v = v), this) : new __await(v);
};
var __asyncGenerator = function (thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []),
    i,
    q = [];
  return (
    (i = {}),
    verb("next"),
    verb("throw"),
    verb("return"),
    (i[Symbol.asyncIterator] = function () {
      return this;
    }),
    i
  );
  function verb(n) {
    if (g[n])
      i[n] = function (v) {
        return new Promise(function (a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await
      ? Promise.resolve(r.value.v).then(fulfill, reject)
      : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if ((f(v), q.shift(), q.length)) resume(q[0][0], q[0][1]);
  }
};
var isValidMapKeyType = function (key) {
  var keyType = typeof key;
  return keyType === "string" || keyType === "number";
};
var HEAD_BYTE_REQUIRED = -1;
var EMPTY_VIEW = new DataView(new ArrayBuffer(0));
var EMPTY_BYTES = new Uint8Array(EMPTY_VIEW.buffer);
var DataViewIndexOutOfBoundsError = (function () {
  try {
    EMPTY_VIEW.getInt8(0);
  } catch (e) {
    return e.constructor;
  }
  throw new Error("never reached");
})();
var MORE_DATA = new DataViewIndexOutOfBoundsError("Insufficient data");
var sharedCachedKeyDecoder = new CachedKeyDecoder();
var Decoder =
  /** @class */
  (function () {
    function Decoder2(
      extensionCodec,
      context,
      maxStrLength,
      maxBinLength,
      maxArrayLength,
      maxMapLength,
      maxExtLength,
      keyDecoder
    ) {
      if (extensionCodec === void 0) {
        extensionCodec = ExtensionCodec.defaultCodec;
      }
      if (context === void 0) {
        context = void 0;
      }
      if (maxStrLength === void 0) {
        maxStrLength = UINT32_MAX;
      }
      if (maxBinLength === void 0) {
        maxBinLength = UINT32_MAX;
      }
      if (maxArrayLength === void 0) {
        maxArrayLength = UINT32_MAX;
      }
      if (maxMapLength === void 0) {
        maxMapLength = UINT32_MAX;
      }
      if (maxExtLength === void 0) {
        maxExtLength = UINT32_MAX;
      }
      if (keyDecoder === void 0) {
        keyDecoder = sharedCachedKeyDecoder;
      }
      this.extensionCodec = extensionCodec;
      this.context = context;
      this.maxStrLength = maxStrLength;
      this.maxBinLength = maxBinLength;
      this.maxArrayLength = maxArrayLength;
      this.maxMapLength = maxMapLength;
      this.maxExtLength = maxExtLength;
      this.keyDecoder = keyDecoder;
      this.totalPos = 0;
      this.pos = 0;
      this.view = EMPTY_VIEW;
      this.bytes = EMPTY_BYTES;
      this.headByte = HEAD_BYTE_REQUIRED;
      this.stack = [];
    }
    Decoder2.prototype.reinitializeState = function () {
      this.totalPos = 0;
      this.headByte = HEAD_BYTE_REQUIRED;
      this.stack.length = 0;
    };
    Decoder2.prototype.setBuffer = function (buffer) {
      this.bytes = ensureUint8Array(buffer);
      this.view = createDataView(this.bytes);
      this.pos = 0;
    };
    Decoder2.prototype.appendBuffer = function (buffer) {
      if (this.headByte === HEAD_BYTE_REQUIRED && !this.hasRemaining(1)) {
        this.setBuffer(buffer);
      } else {
        var remainingData = this.bytes.subarray(this.pos);
        var newData = ensureUint8Array(buffer);
        var newBuffer = new Uint8Array(remainingData.length + newData.length);
        newBuffer.set(remainingData);
        newBuffer.set(newData, remainingData.length);
        this.setBuffer(newBuffer);
      }
    };
    Decoder2.prototype.hasRemaining = function (size) {
      return this.view.byteLength - this.pos >= size;
    };
    Decoder2.prototype.createExtraByteError = function (posToShow) {
      var _a2 = this,
        view = _a2.view,
        pos = _a2.pos;
      return new RangeError(
        "Extra "
          .concat(view.byteLength - pos, " of ")
          .concat(view.byteLength, " byte(s) found at buffer[")
          .concat(posToShow, "]")
      );
    };
    Decoder2.prototype.decode = function (buffer) {
      this.reinitializeState();
      this.setBuffer(buffer);
      var object = this.doDecodeSync();
      if (this.hasRemaining(1)) {
        throw this.createExtraByteError(this.pos);
      }
      return object;
    };
    Decoder2.prototype.decodeMulti = function (buffer) {
      return __generator(this, function (_a2) {
        switch (_a2.label) {
          case 0:
            this.reinitializeState();
            this.setBuffer(buffer);
            _a2.label = 1;
          case 1:
            if (!this.hasRemaining(1)) return [3, 3];
            return [4, this.doDecodeSync()];
          case 2:
            _a2.sent();
            return [3, 1];
          case 3:
            return [
              2,
              /*return*/
            ];
        }
      });
    };
    Decoder2.prototype.decodeAsync = function (stream2) {
      var stream_1, stream_1_1;
      var e_1, _a2;
      return __awaiter(this, void 0, void 0, function () {
        var decoded, object, buffer, e_1_1, _b2, headByte, pos, totalPos;
        return __generator(this, function (_c2) {
          switch (_c2.label) {
            case 0:
              decoded = false;
              _c2.label = 1;
            case 1:
              _c2.trys.push([1, 6, 7, 12]);
              stream_1 = __asyncValues(stream2);
              _c2.label = 2;
            case 2:
              return [4, stream_1.next()];
            case 3:
              if (!((stream_1_1 = _c2.sent()), !stream_1_1.done)) return [3, 5];
              buffer = stream_1_1.value;
              if (decoded) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(buffer);
              try {
                object = this.doDecodeSync();
                decoded = true;
              } catch (e) {
                if (!(e instanceof DataViewIndexOutOfBoundsError)) {
                  throw e;
                }
              }
              this.totalPos += this.pos;
              _c2.label = 4;
            case 4:
              return [3, 2];
            case 5:
              return [3, 12];
            case 6:
              e_1_1 = _c2.sent();
              e_1 = { error: e_1_1 };
              return [3, 12];
            case 7:
              _c2.trys.push([7, , 10, 11]);
              if (!(stream_1_1 && !stream_1_1.done && (_a2 = stream_1.return)))
                return [3, 9];
              return [4, _a2.call(stream_1)];
            case 8:
              _c2.sent();
              _c2.label = 9;
            case 9:
              return [3, 11];
            case 10:
              if (e_1) throw e_1.error;
              return [
                7,
                /*endfinally*/
              ];
            case 11:
              return [
                7,
                /*endfinally*/
              ];
            case 12:
              if (decoded) {
                if (this.hasRemaining(1)) {
                  throw this.createExtraByteError(this.totalPos);
                }
                return [2, object];
              }
              ((_b2 = this),
                (headByte = _b2.headByte),
                (pos = _b2.pos),
                (totalPos = _b2.totalPos));
              throw new RangeError(
                "Insufficient data in parsing "
                  .concat(prettyByte(headByte), " at ")
                  .concat(totalPos, " (")
                  .concat(pos, " in the current buffer)")
              );
          }
        });
      });
    };
    Decoder2.prototype.decodeArrayStream = function (stream2) {
      return this.decodeMultiAsync(stream2, true);
    };
    Decoder2.prototype.decodeStream = function (stream2) {
      return this.decodeMultiAsync(stream2, false);
    };
    Decoder2.prototype.decodeMultiAsync = function (stream2, isArray) {
      return __asyncGenerator(this, arguments, function decodeMultiAsync_1() {
        var isArrayHeaderRequired,
          arrayItemsLeft,
          stream_2,
          stream_2_1,
          buffer,
          e_2,
          e_3_1;
        var e_3, _a2;
        return __generator(this, function (_b2) {
          switch (_b2.label) {
            case 0:
              isArrayHeaderRequired = isArray;
              arrayItemsLeft = -1;
              _b2.label = 1;
            case 1:
              _b2.trys.push([1, 13, 14, 19]);
              stream_2 = __asyncValues(stream2);
              _b2.label = 2;
            case 2:
              return [4, __await(stream_2.next())];
            case 3:
              if (!((stream_2_1 = _b2.sent()), !stream_2_1.done))
                return [3, 12];
              buffer = stream_2_1.value;
              if (isArray && arrayItemsLeft === 0) {
                throw this.createExtraByteError(this.totalPos);
              }
              this.appendBuffer(buffer);
              if (isArrayHeaderRequired) {
                arrayItemsLeft = this.readArraySize();
                isArrayHeaderRequired = false;
                this.complete();
              }
              _b2.label = 4;
            case 4:
              _b2.trys.push([4, 9, , 10]);
              _b2.label = 5;
            case 5:
              return [4, __await(this.doDecodeSync())];
            case 6:
              return [4, _b2.sent()];
            case 7:
              _b2.sent();
              if (--arrayItemsLeft === 0) {
                return [3, 8];
              }
              return [3, 5];
            case 8:
              return [3, 10];
            case 9:
              e_2 = _b2.sent();
              if (!(e_2 instanceof DataViewIndexOutOfBoundsError)) {
                throw e_2;
              }
              return [3, 10];
            case 10:
              this.totalPos += this.pos;
              _b2.label = 11;
            case 11:
              return [3, 2];
            case 12:
              return [3, 19];
            case 13:
              e_3_1 = _b2.sent();
              e_3 = { error: e_3_1 };
              return [3, 19];
            case 14:
              _b2.trys.push([14, , 17, 18]);
              if (!(stream_2_1 && !stream_2_1.done && (_a2 = stream_2.return)))
                return [3, 16];
              return [4, __await(_a2.call(stream_2))];
            case 15:
              _b2.sent();
              _b2.label = 16;
            case 16:
              return [3, 18];
            case 17:
              if (e_3) throw e_3.error;
              return [
                7,
                /*endfinally*/
              ];
            case 18:
              return [
                7,
                /*endfinally*/
              ];
            case 19:
              return [
                2,
                /*return*/
              ];
          }
        });
      });
    };
    Decoder2.prototype.doDecodeSync = function () {
      DECODE: while (true) {
        var headByte = this.readHeadByte();
        var object = void 0;
        if (headByte >= 224) {
          object = headByte - 256;
        } else if (headByte < 192) {
          if (headByte < 128) {
            object = headByte;
          } else if (headByte < 144) {
            var size = headByte - 128;
            if (size !== 0) {
              this.pushMapState(size);
              this.complete();
              continue DECODE;
            } else {
              object = {};
            }
          } else if (headByte < 160) {
            var size = headByte - 144;
            if (size !== 0) {
              this.pushArrayState(size);
              this.complete();
              continue DECODE;
            } else {
              object = [];
            }
          } else {
            var byteLength = headByte - 160;
            object = this.decodeUtf8String(byteLength, 0);
          }
        } else if (headByte === 192) {
          object = null;
        } else if (headByte === 194) {
          object = false;
        } else if (headByte === 195) {
          object = true;
        } else if (headByte === 202) {
          object = this.readF32();
        } else if (headByte === 203) {
          object = this.readF64();
        } else if (headByte === 204) {
          object = this.readU8();
        } else if (headByte === 205) {
          object = this.readU16();
        } else if (headByte === 206) {
          object = this.readU32();
        } else if (headByte === 207) {
          object = this.readU64();
        } else if (headByte === 208) {
          object = this.readI8();
        } else if (headByte === 209) {
          object = this.readI16();
        } else if (headByte === 210) {
          object = this.readI32();
        } else if (headByte === 211) {
          object = this.readI64();
        } else if (headByte === 217) {
          var byteLength = this.lookU8();
          object = this.decodeUtf8String(byteLength, 1);
        } else if (headByte === 218) {
          var byteLength = this.lookU16();
          object = this.decodeUtf8String(byteLength, 2);
        } else if (headByte === 219) {
          var byteLength = this.lookU32();
          object = this.decodeUtf8String(byteLength, 4);
        } else if (headByte === 220) {
          var size = this.readU16();
          if (size !== 0) {
            this.pushArrayState(size);
            this.complete();
            continue DECODE;
          } else {
            object = [];
          }
        } else if (headByte === 221) {
          var size = this.readU32();
          if (size !== 0) {
            this.pushArrayState(size);
            this.complete();
            continue DECODE;
          } else {
            object = [];
          }
        } else if (headByte === 222) {
          var size = this.readU16();
          if (size !== 0) {
            this.pushMapState(size);
            this.complete();
            continue DECODE;
          } else {
            object = {};
          }
        } else if (headByte === 223) {
          var size = this.readU32();
          if (size !== 0) {
            this.pushMapState(size);
            this.complete();
            continue DECODE;
          } else {
            object = {};
          }
        } else if (headByte === 196) {
          var size = this.lookU8();
          object = this.decodeBinary(size, 1);
        } else if (headByte === 197) {
          var size = this.lookU16();
          object = this.decodeBinary(size, 2);
        } else if (headByte === 198) {
          var size = this.lookU32();
          object = this.decodeBinary(size, 4);
        } else if (headByte === 212) {
          object = this.decodeExtension(1, 0);
        } else if (headByte === 213) {
          object = this.decodeExtension(2, 0);
        } else if (headByte === 214) {
          object = this.decodeExtension(4, 0);
        } else if (headByte === 215) {
          object = this.decodeExtension(8, 0);
        } else if (headByte === 216) {
          object = this.decodeExtension(16, 0);
        } else if (headByte === 199) {
          var size = this.lookU8();
          object = this.decodeExtension(size, 1);
        } else if (headByte === 200) {
          var size = this.lookU16();
          object = this.decodeExtension(size, 2);
        } else if (headByte === 201) {
          var size = this.lookU32();
          object = this.decodeExtension(size, 4);
        } else {
          throw new DecodeError(
            "Unrecognized type byte: ".concat(prettyByte(headByte))
          );
        }
        this.complete();
        var stack = this.stack;
        while (stack.length > 0) {
          var state = stack[stack.length - 1];
          if (state.type === 0) {
            state.array[state.position] = object;
            state.position++;
            if (state.position === state.size) {
              stack.pop();
              object = state.array;
            } else {
              continue DECODE;
            }
          } else if (state.type === 1) {
            if (!isValidMapKeyType(object)) {
              throw new DecodeError(
                "The type of key must be string or number but " + typeof object
              );
            }
            if (object === "__proto__") {
              throw new DecodeError("The key __proto__ is not allowed");
            }
            state.key = object;
            state.type = 2;
            continue DECODE;
          } else {
            state.map[state.key] = object;
            state.readCount++;
            if (state.readCount === state.size) {
              stack.pop();
              object = state.map;
            } else {
              state.key = null;
              state.type = 1;
              continue DECODE;
            }
          }
        }
        return object;
      }
    };
    Decoder2.prototype.readHeadByte = function () {
      if (this.headByte === HEAD_BYTE_REQUIRED) {
        this.headByte = this.readU8();
      }
      return this.headByte;
    };
    Decoder2.prototype.complete = function () {
      this.headByte = HEAD_BYTE_REQUIRED;
    };
    Decoder2.prototype.readArraySize = function () {
      var headByte = this.readHeadByte();
      switch (headByte) {
        case 220:
          return this.readU16();
        case 221:
          return this.readU32();
        default: {
          if (headByte < 160) {
            return headByte - 144;
          } else {
            throw new DecodeError(
              "Unrecognized array type byte: ".concat(prettyByte(headByte))
            );
          }
        }
      }
    };
    Decoder2.prototype.pushMapState = function (size) {
      if (size > this.maxMapLength) {
        throw new DecodeError(
          "Max length exceeded: map length ("
            .concat(size, ") > maxMapLengthLength (")
            .concat(this.maxMapLength, ")")
        );
      }
      this.stack.push({
        type: 1,
        size,
        key: null,
        readCount: 0,
        map: {},
      });
    };
    Decoder2.prototype.pushArrayState = function (size) {
      if (size > this.maxArrayLength) {
        throw new DecodeError(
          "Max length exceeded: array length ("
            .concat(size, ") > maxArrayLength (")
            .concat(this.maxArrayLength, ")")
        );
      }
      this.stack.push({
        type: 0,
        size,
        array: new Array(size),
        position: 0,
      });
    };
    Decoder2.prototype.decodeUtf8String = function (byteLength, headerOffset) {
      var _a2;
      if (byteLength > this.maxStrLength) {
        throw new DecodeError(
          "Max length exceeded: UTF-8 byte length ("
            .concat(byteLength, ") > maxStrLength (")
            .concat(this.maxStrLength, ")")
        );
      }
      if (this.bytes.byteLength < this.pos + headerOffset + byteLength) {
        throw MORE_DATA;
      }
      var offset = this.pos + headerOffset;
      var object;
      if (
        this.stateIsMapKey() &&
        ((_a2 = this.keyDecoder) === null || _a2 === void 0
          ? void 0
          : _a2.canBeCached(byteLength))
      ) {
        object = this.keyDecoder.decode(this.bytes, offset, byteLength);
      } else if (byteLength > TEXT_DECODER_THRESHOLD) {
        object = utf8DecodeTD(this.bytes, offset, byteLength);
      } else {
        object = utf8DecodeJs(this.bytes, offset, byteLength);
      }
      this.pos += headerOffset + byteLength;
      return object;
    };
    Decoder2.prototype.stateIsMapKey = function () {
      if (this.stack.length > 0) {
        var state = this.stack[this.stack.length - 1];
        return state.type === 1;
      }
      return false;
    };
    Decoder2.prototype.decodeBinary = function (byteLength, headOffset) {
      if (byteLength > this.maxBinLength) {
        throw new DecodeError(
          "Max length exceeded: bin length ("
            .concat(byteLength, ") > maxBinLength (")
            .concat(this.maxBinLength, ")")
        );
      }
      if (!this.hasRemaining(byteLength + headOffset)) {
        throw MORE_DATA;
      }
      var offset = this.pos + headOffset;
      var object = this.bytes.subarray(offset, offset + byteLength);
      this.pos += headOffset + byteLength;
      return object;
    };
    Decoder2.prototype.decodeExtension = function (size, headOffset) {
      if (size > this.maxExtLength) {
        throw new DecodeError(
          "Max length exceeded: ext length ("
            .concat(size, ") > maxExtLength (")
            .concat(this.maxExtLength, ")")
        );
      }
      var extType = this.view.getInt8(this.pos + headOffset);
      var data = this.decodeBinary(
        size,
        headOffset + 1
        /* extType */
      );
      return this.extensionCodec.decode(data, extType, this.context);
    };
    Decoder2.prototype.lookU8 = function () {
      return this.view.getUint8(this.pos);
    };
    Decoder2.prototype.lookU16 = function () {
      return this.view.getUint16(this.pos);
    };
    Decoder2.prototype.lookU32 = function () {
      return this.view.getUint32(this.pos);
    };
    Decoder2.prototype.readU8 = function () {
      var value = this.view.getUint8(this.pos);
      this.pos++;
      return value;
    };
    Decoder2.prototype.readI8 = function () {
      var value = this.view.getInt8(this.pos);
      this.pos++;
      return value;
    };
    Decoder2.prototype.readU16 = function () {
      var value = this.view.getUint16(this.pos);
      this.pos += 2;
      return value;
    };
    Decoder2.prototype.readI16 = function () {
      var value = this.view.getInt16(this.pos);
      this.pos += 2;
      return value;
    };
    Decoder2.prototype.readU32 = function () {
      var value = this.view.getUint32(this.pos);
      this.pos += 4;
      return value;
    };
    Decoder2.prototype.readI32 = function () {
      var value = this.view.getInt32(this.pos);
      this.pos += 4;
      return value;
    };
    Decoder2.prototype.readU64 = function () {
      var value = getUint64(this.view, this.pos);
      this.pos += 8;
      return value;
    };
    Decoder2.prototype.readI64 = function () {
      var value = getInt64(this.view, this.pos);
      this.pos += 8;
      return value;
    };
    Decoder2.prototype.readF32 = function () {
      var value = this.view.getFloat32(this.pos);
      this.pos += 4;
      return value;
    };
    Decoder2.prototype.readF64 = function () {
      var value = this.view.getFloat64(this.pos);
      this.pos += 8;
      return value;
    };
    return Decoder2;
  })();
var defaultDecodeOptions = {};
function decode(buffer, options) {
  if (options === void 0) {
    options = defaultDecodeOptions;
  }
  var decoder = new Decoder(
    options.extensionCodec,
    options.context,
    options.maxStrLength,
    options.maxBinLength,
    options.maxArrayLength,
    options.maxMapLength,
    options.maxExtLength
  );
  return decoder.decode(buffer);
}
var OBSWebSocket = class extends BaseOBSWebSocket {
  protocol = "obswebsocket.msgpack";
  async encodeMessage(data) {
    return encode(data);
  }
  async decodeMessage(data) {
    if (typeof Blob !== "undefined" && data instanceof Blob) {
      data = await data.arrayBuffer();
    }
    return decode(data);
  }
};
var msgpack_default = OBSWebSocket;
_OBS_decorators = [singleton()];
class OBS {
  client;
  isConnected = false;
  host = "ws://127.0.0.1:4455";
  inputMessageName = "TWITCH_GIFT_INPUT_MESSAGE_NAME";
  inputCooldownName = "TWITCH_GIFT_INPUT_COOLDOWN_NAME";
  sceneName = "TWITCH_GIFT_SCENE";
  password = "";
  constructor() {
    const configs = instance.resolve(Configs).obs;
    this.host = configs.host;
    this.password = configs.password;
    this.client = new msgpack_default();
  }
  async connect() {
    if (this.isConnected) return true;
    const configs = instance.resolve(Configs).obs;
    this.host = configs.host;
    this.password = configs.password;
    this.client = new msgpack_default();
    return this.client
      .connect(this.host, this.password)
      .then(async () => {
        this.isConnected = true;
        const sceneList = await this.client.call("GetSceneList");
        const sceneExists = sceneList.scenes.some(
          (scene) => scene.sceneName === this.sceneName
        );
        if (!sceneExists) {
          await this.client.call("CreateScene", { sceneName: this.sceneName });
        }
        const inputList = await this.client.call("GetInputList");
        const inputMessageNameExists = inputList.inputs.some(
          (input) => input.inputName === this.inputMessageName
        );
        if (!inputMessageNameExists) {
          await this.client.call("CreateInput", {
            sceneName: this.sceneName,
            inputName: this.inputMessageName,
            inputKind: "text_ft2_source_v2",
            inputSettings: {
              text: "",
              font: {
                face: "Helvetica",
                size: 30,
              },
            },
          });
        } else {
          this.writeText("");
        }
        const inputCooldownNameExists = inputList.inputs.some(
          (input) => input.inputName === this.inputCooldownName
        );
        if (!inputCooldownNameExists) {
          await this.createInputCooldown();
        } else {
          this.writeCooldown("");
        }
        return true;
      })
      .catch((error) => {
        if (error && error.stack) console.error(error.stack);
        if (error && /ECONNREFUSED/.test(error.message)) {
          instance
            .resolve(Log)
            .emit(
              "Verifica que tienes activado WebSocket Server en OBS. https://github.com/obsproject/obs-websocket/releases"
            );
          return false;
        }
        if (error && /Authentication\sfailed/.test(error.message)) {
          instance
            .resolve(Log)
            .emit("Contraseña incorrecta para OBS WebSocket");
          return false;
        }
        if (error instanceof OBSWebSocketError) {
          instance
            .resolve(Log)
            .emit(
              "Verifica que tengas OBS abierto y el WebSocket Server activado"
            );
          return false;
        }
        return false;
      });
  }
  async updateInputCooldownColors() {
    const configs = instance.resolve(Configs).obs;
    const [_, r1, r2, g1, g2, b1, b2] = [...configs.color1];
    const [__, r21, r22, g21, g22, b21, b22] = [...configs.color2];
    const colo1Hexa = `#${b1}${b2}${g1}${g2}${r1}${r2}`.replace("#", "0xff");
    const colo2Hexa = `#${b21}${b22}${g21}${g22}${r21}${r22}`.replace(
      "#",
      "0xff"
    );
    await this.client.call("SetInputSettings", {
      inputName: this.inputCooldownName,
      inputSettings: {
        color1: parseInt(colo1Hexa),
        color2: parseInt(colo2Hexa),
        outline: true,
      },
    });
  }
  async reconnect() {
    await this.disconnect();
    return await this.connect();
  }
  async createInputCooldown() {
    const configs = instance.resolve(Configs).obs;
    const [_, r1, r2, g1, g2, b1, b2] = [...configs.color1];
    const [__, r21, r22, g21, g22, b21, b22] = [...configs.color2];
    const colo1Hexa = `#${b1}${b2}${g1}${g2}${r1}${r2}`.replace("#", "0xff");
    const colo2Hexa = `#${b21}${b22}${g21}${g22}${r21}${r22}`.replace(
      "#",
      "0xff"
    );
    await this.client.call("CreateInput", {
      sceneName: this.sceneName,
      inputName: this.inputCooldownName,
      inputKind: "text_ft2_source_v2",
      inputSettings: {
        text: "",
        color1: parseInt(colo1Hexa),
        color2: parseInt(colo2Hexa),
        outline: true,
        // Activar borde para que color2 se vea
        font: {
          face: "Helvetica",
          size: 60,
          style: "Bold",
        },
      },
    });
    const sceneItemList = await this.client.call("GetSceneItemList", {
      sceneName: this.sceneName,
    });
    const sceneItemCooldown = sceneItemList.sceneItems.find(
      (item) => item.sourceName === this.inputCooldownName
    );
    if (sceneItemCooldown) {
      await this.client.call("SetSceneItemTransform", {
        sceneName: this.sceneName,
        sceneItemId: sceneItemCooldown.sceneItemId,
        sceneItemTransform: {
          positionX: 20,
          positionY: 930,
        },
      });
    }
    const sceneItemMessage = sceneItemList.sceneItems.find(
      (item) => item.sourceName === this.inputMessageName
    );
    if (sceneItemMessage) {
      await this.client.call("SetSceneItemTransform", {
        sceneName: this.sceneName,
        sceneItemId: sceneItemMessage.sceneItemId,
        sceneItemTransform: {
          positionX: 20,
          positionY: 1e3,
        },
      });
    }
  }
  async disconnect() {
    if (!this.isConnected) return;
    this.isConnected = false;
    const sceneList = await this.client.call("GetSceneList");
    const sceneExists = sceneList.scenes.some(
      (scene) => scene.name === this.sceneName
    );
    if (sceneExists) {
      await this.client.call("RemoveScene", { sceneName: this.sceneName });
    }
    const inputList = await this.client.call("GetInputList");
    const inputMessageNameExists = inputList.inputs.some(
      (input) => input.name === this.inputMessageName
    );
    if (inputMessageNameExists) {
      await this.client.call("RemoveInput", {
        inputName: this.inputMessageName,
      });
    }
    const inputCooldownNameExists = inputList.inputs.some(
      (input) => input.name === this.inputCooldownName
    );
    if (inputCooldownNameExists) {
      await this.client.call("RemoveInput", {
        inputName: this.inputCooldownName,
      });
    }
    await this.client.disconnect();
  }
  clearScene() {
    if (!this.isConnected) return;
    this.client.call("SetInputSettings", {
      inputName: this.inputCooldownName,
      inputSettings: {
        text: "",
      },
    });
    this.client.call("SetInputSettings", {
      inputName: this.inputMessageName,
      inputSettings: {
        text: "",
      },
    });
  }
  writeCooldown(text) {
    if (!this.isConnected) return;
    this.client.call("SetInputSettings", {
      inputName: this.inputCooldownName,
      inputSettings: {
        text,
      },
    });
  }
  writeText(text) {
    if (!this.isConnected) return;
    this.client.call("SetInputSettings", {
      inputName: this.inputMessageName,
      inputSettings: {
        text,
      },
    });
  }
}
_init3 = __decoratorStart(null);
OBS = __decorateElement(_init3, 0, "OBS", _OBS_decorators, OBS);
__runInitializers(_init3, 1, OBS);
_Configs_decorators = [singleton()];
class Configs {
  userDataPath = "";
  // twitch
  twitch = {
    username: "fanaes",
    oauth: "",
    channels: "baitybait",
  };
  obs = {
    host: "ws://127.0.0.1:4455",
    password: "ru8qNitRPP4Gw7BC",
    color1: "#ff0000",
    color2: "#ffbb00",
  };
  gameAwards = {
    categories: [
      {
        name: "Game of the Year",
        id: "game-of-the-year",
        voted: false,
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-1.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/donkey_kong_banaza-1.jpg",
            name: "Donkey Kong Bananza",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hollow_knight_silksong-2.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/kcd2.jpg",
            name: "Kingdom Come: Deliverance II",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "Best Game Direction",
        id: "best-game-direcction",
        voted: false,
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-2.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ghost_yotei-2.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/split_fiction-2.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best narrative",
        voted: false,
        id: "best-narrative",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33-3.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-4.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ghost_yotei-2.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/kcd2.jpg",
            name: "Kingdom Come: Deliverance II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/silent_hill_f.jpg",
            name: "Silent Hill f",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best art direction",
        voted: false,
        id: "best-art-direction",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/death_stranding_2.jpg",
            name: "Death Stranding 2: On The Beach",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_yotei.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hollow_knight_silksong-1.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best score and music",
        voted: false,
        id: "best-score-and-music",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hollow_knight_silksong.jpg",
            name: "Christopher Larkin",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2-4.jpg",
            name: "Darren Korb",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33-2.jpg",
            name: "Lorien Testard",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_yotei.jpg",
            name: "Toma Otowa",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/death_stranding_2.jpg",
            name: "Woodkid and Ludvig Forssell",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best audio design",
        voted: false,
        id: "best-audio-design",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/battlefield6.jpg",
            name: "Battlefield 6",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33-2.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-2.jpg",
            name: "Death Stranding 2: On the Beach",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_yotei.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/silent_hill_f.jpg",
            name: "Silent Hill f",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best performance",
        voted: false,
        id: "best-performance",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tga25_benstarr.png",
            name: "Ben Starr",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tga25_charliecox.png",
            name: "Charlie Cox",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/erika_ishii.jpg",
            name: "Erika Ishii",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tga25_jenniferenglish.png",
            name: "Jennifer English",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/konatsu_kato.jpg",
            name: "Konatsu Kato",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/troy_baker-1.jpg",
            name: "Troy Baker",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "innovation in accessibility",
        voted: false,
        id: "innovation-in-accessibility",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/assassins_creed_shadows.jpg",
            name: "Assassin’s Creed Shadows",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/atomfall.jpg",
            name: "Atomfall",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/doom_dark_ages-1.jpg",
            name: "Doom: The Dark Ages",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/eafc_26-1.jpg",
            name: "EA Sports FC 26",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/south_of_midnight-1.jpg",
            name: "South of Midnight",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "games for impact",
        voted: false,
        id: "games-for-impact",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/consume_me.jpg",
            name: "Consume Me",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/despelote-1.jpg",
            name: "Despelote",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/lost_records.jpg",
            name: "Lost Records: Bloom & Rage",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/south_of_midnight-1.jpg",
            name: "South of Midnight",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/wanderstop.jpg",
            name: "Wanderstop",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best ongoing",
        voted: false,
        id: "best-ongoing",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/final_fantasy_xiv-2.jpg",
            name: "Final Fantasy XIV",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/fortnite.jpg",
            name: "Fortnite",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/helldivers2-3.jpg",
            name: "Helldivers 2",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/marvel_rivals.jpg",
            name: "Marvel Rivals",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/nomanssky.jpg",
            name: "No Man’s Sky",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best community support",
        voted: false,
        id: "best-community-support",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/09/baldurs-gate-3.jpg",
            name: "Baldur’s Gate 3",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/final_fantasy_xiv-2.jpg",
            name: "Final Fantasy XIV",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/fortnite.jpg",
            name: "Fortnite",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/helldivers_2.jpg",
            name: "Helldivers 2",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/nomanssky-1.jpg",
            name: "No Man’s Sky",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best independent game",
        voted: false,
        id: "best-independent-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/absoolum.jpg",
            name: "Absolum",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ballxpit.jpg",
            name: "Ball x Pit",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/blue_prince-1.jpg",
            name: "Blue Prince",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hades_2.jpg",
            name: "Hades II",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hollow_knight_silksong.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best debut indie game",
        voted: false,
        id: "best-debut-indie-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/blue_prince.jpg",
            name: "Blue Prince",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/expedition33-3.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/despelote.jpg",
            name: "Despelote",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/dispatch.jpg",
            name: "Dispatch",
            votes: 0,
            option: "D",
          },
        ],
      },
      {
        name: "best mobile game",
        voted: false,
        id: "best-mobile-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/destiny_rising.jpg",
            name: "Destiny: Rising",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/persona5_phantomx.jpg",
            name: "Persona 5: The Phantom X",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sonic_rumble.jpg",
            name: "Sonic Rumble",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/umumusume.jpg",
            name: "Umamusume: Pretty Derby",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/wuthering_waves.jpg",
            name: "Wuthering Waves",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best vr ar",
        voted: false,
        id: "best-vr-ar",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/alien_rogue_incursion.jpg",
            name: "Alien: Rogue Incursion",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/arken_age.jpg",
            name: "Arken Age",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/ghost_town.jpg",
            name: "Ghost Town",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/deadpool_vr.jpg",
            name: "Marvel’s Deadpool VR",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/the_midnight_walk.jpg",
            name: "The Midnight Walk",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best action",
        voted: false,
        id: "best-action",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/battlefield6.jpg",
            name: "Battlefield 6",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/doom_dark_ages.jpg",
            name: "Doom: The Dark Ages",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/hades_2-4.jpg",
            name: "Hades II",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ninja_gaiden_4.jpg",
            name: "Ninja Gaiden 4",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/shinobi.jpg",
            name: "Shinobi: Art of Vengeance",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best action adventure",
        voted: false,
        id: "best-action-adventure",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/death_stranding_2-4.jpg",
            name: "Death Stranding 2: On the Beach",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/ghost_yotei-1.jpg",
            name: "Ghost of Yōtei",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/hollow_knight_silksong.jpg",
            name: "Hollow Knight: Silksong",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/indiana_jones.jpg",
            name: "Indiana Jones and the Great Circle",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/split_fiction.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best role playing",
        voted: false,
        id: "best-role-playing",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/avowed.jpg",
            name: "Avowed",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/expedition33-1.jpg",
            name: "Clair Obscur: Expedition 33",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/kcd2.jpg",
            name: "Kingdom Come: Deliverance II",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/monster_hunter_wilds-1.jpg",
            name: "Monster Hunter Wilds",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/outer_worlds_2.jpg",
            name: "The Outer Worlds 2",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best fighting",
        voted: false,
        id: "best-fighting",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/2xko.jpg",
            name: "2XKO",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/capcom_fighting.jpg",
            name: "Capcom Fighting Collection 2",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/fatal_fury.jpg",
            name: "Fatal Fury: City of the Wolves",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/mortal_kombat_legacy.jpg",
            name: "Mortal Kombat: Legacy Kollection",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/virtua_fighter_5.jpg",
            name: "Virtua Fighter 5 R.E.V.O. World Stage",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best family",
        voted: false,
        id: "best-family",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/donkey_kong_banaza-1.jpg",
            name: "Donkey Kong Bananza",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/lego_party.jpg",
            name: "LEGO Party!",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/lego_voyagers.jpg",
            name: "LEGO Voyagers",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/mario_kart_world.jpg",
            name: "Mario Kart World",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sonic_racing_crossworlds.jpg",
            name: "Sonic Racing: CrossWorlds",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/split_fiction.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best sim strategy",
        voted: false,
        id: "best-sim-strategy",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/final_fantasy_tactics.jpg",
            name: "FINAL FANTASY TACTICS – The Ivalice Chronicles",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/jurassic_world_evolution.jpg",
            name: "Jurassic World Evolution 3",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/civilization_7.jpg",
            name: "Sid Meier’s Civilization VII",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/tempest_rising.jpg",
            name: "Tempest Rising",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/the_alters.jpg",
            name: "The Alters",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2024/11/two_point_museum.jpg",
            name: "Two Point Museum",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best sports racing",
        voted: false,
        id: "best-sports-racing",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/eafc_26.jpg",
            name: "EA Sports FC 26",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/f1_25.jpg",
            name: "F1 25",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/mario_kart_world.jpg",
            name: "Mario Kart World",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/rematch.jpg",
            name: "Rematch",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sonic_racing_crossworlds.jpg",
            name: "Sonic Racing: CrossWorlds",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best multiplayer",
        voted: false,
        id: "best-multiplayer",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/arc_raiders.jpg",
            name: "Arc Raiders",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/battlefield6.jpg",
            name: "Battlefield 6",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/elden_ring_nightreign.jpg",
            name: "Elden Ring Nightreign",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/peak.jpg",
            name: "Peak",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/split_fiction.jpg",
            name: "Split Fiction",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best adaptation",
        voted: false,
        id: "best-adaptation",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/a_minecraft_movie.jpg",
            name: "A Minecraft Movie",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/devil_may_cry.jpg",
            name: "Devil May Cry",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/splinter_cell.jpg",
            name: "Splinter Cell: Deathwatch",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/tlou_season2.jpg",
            name: "The Last of Us: Season 2",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/until_dawn.jpg",
            name: "Until Dawn",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "most anticipated game",
        voted: false,
        id: "most-anticipated-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/007_first_light.jpg",
            name: "007 First Light",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/gta6.jpg",
            name: "Grand Theft Auto VI",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/wolverine.jpg",
            name: "Marvel’s Wolverine",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/resident_evil_requiem.jpg",
            name: "Resident Evil Requiem",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/witcher_4.jpg",
            name: "The Witcher IV",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "content creator of the year",
        voted: false,
        id: "content-creator-of-the-year",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/caedrel.jpg",
            name: "Caedrel",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/kaicenat.jpg",
            name: "Kai Cenat",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/moistcritical.jpg",
            name: "MoistCr1TiKaL",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/sakura_miko.jpg",
            name: "Sakura Miko",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/content-creator-of-the-year-the-burnt-peanut.jpg",
            name: "THE BURNT PEANUT",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best esports game",
        voted: false,
        id: "best-esports-game",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/counter_strike_2.jpg",
            name: "Counter-Strike 2",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/dota_2.jpg",
            name: "DOTA 2",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/league_of_legends.jpg",
            name: "League of Legends",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/mobile_legends.jpg",
            name: "Mobile Legends: Bang Bang",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/valorant.jpg",
            name: "Valorant",
            votes: 0,
            option: "E",
          },
        ],
      },
      {
        name: "best esports athlete",
        voted: false,
        id: "best-esports-athlete",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/brawk.jpg",
            name: "brawk – Brock Somerhalder",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/chovy.jpg",
            name: "Chovy – Jeong Ji-hoon",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/forsaken.jpg",
            name: "f0rsakeN – Jason Susanto",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/kakeru.jpg",
            name: "Kakeru – Kakeru Watanabe",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/menard.jpg",
            name: "MenaRD – Saul Leonardo",
            votes: 0,
            option: "E",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/zywoo.jpg",
            name: "Zyw0o – Mathieu Herbaut",
            votes: 0,
            option: "F",
          },
        ],
      },
      {
        name: "best esports team",
        voted: false,
        id: "best-esports-team",
        games: [
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/gen-g.jpg",
            name: "Gen.G",
            votes: 0,
            option: "A",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/nrg.jpg",
            name: "NRG",
            votes: 0,
            option: "B",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/falcons.jpg",
            name: "Team Falcons",
            votes: 0,
            option: "C",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/team_liquid_ph.jpg",
            name: "Team Liquid PH",
            votes: 0,
            option: "D",
          },
          {
            uri: "https://cdn.thegameawards.com/1/2025/11/teamvitalty.jpg",
            name: "Team Vitality",
            votes: 0,
            option: "E",
          },
        ],
      },
    ],
  };
  // auto-drops
  autoDrop = {
    dropInterval: 5 * 60 * 1e3,
  };
  init() {
    const data = instance.resolve(FileSystem).read("conf.json");
    const path2 = instance.resolve(FileSystem).path();
    if (!data) {
      instance.resolve(FileSystem).write(JSON.stringify(this), "conf.json");
      return;
    }
    this.userDataPath = path2;
    try {
      const parsed = JSON.parse(data);
      Object.assign(this, parsed);
    } catch (error) {
      instance
        .resolve(Log)
        .emit(
          `Hubo un problema a la hora de guardar la configuración: ${error.message}`
        );
    }
  }
  update(data) {
    Object.assign(this, data);
    instance.resolve(FileSystem).write(JSON.stringify(this), "conf.json");
    if (data.twitch) {
      instance.resolve(Twitch).reconnect();
    }
    if (data.obs?.host || data.obs?.password) {
      instance
        .resolve(OBS)
        .reconnect()
        .then(
          (valid) =>
            valid && instance.resolve(Log).emit("OBS se conectó con éxito!")
        );
    }
    if (data.obs?.color1 || data.obs?.color2) {
      instance.resolve(OBS).updateInputCooldownColors();
    }
  }
  toJSON() {
    return {
      twitch: this.twitch,
      obs: this.obs,
      autoDrop: this.autoDrop,
      gameAwards: this.gameAwards,
      userDataPath: this.userDataPath,
    };
  }
}
_init4 = __decoratorStart(null);
Configs = __decorateElement(_init4, 0, "Configs", _Configs_decorators, Configs);
__runInitializers(_init4, 1, Configs);
_Twitch_decorators = [singleton()];
class Twitch {
  isConnected = false;
  client;
  publisherForMessage = new Publisher();
  publisherForSubscription = new Publisher();
  constructor() {
    const configs = instance.resolve(Configs).twitch;
    this.client = new tmi_jsExports.Client({
      options: { debug: false },
      connection: {
        secure: true,
        reconnect: true,
      },
      identity: {
        username: configs.username,
        password: configs.oauth,
      },
      channels: [configs.channels],
    });
  }
  async reconnect() {
    await this.disconect();
    const configs = instance.resolve(Configs).twitch;
    this.client = new tmi_jsExports.Client({
      options: { debug: false },
      connection: {
        secure: true,
        reconnect: true,
      },
      identity: {
        username: configs.username,
        password: configs.oauth,
      },
      channels: [configs.channels],
    });
    await this.connect();
  }
  async disconect() {
    if (!this.isConnected) return;
    await this.client.disconnect();
    this.isConnected = false;
  }
  async connect() {
    if (this.isConnected) return;
    try {
      await this.client.connect();
      this.isConnected = true;
    } catch (error) {
      instance.resolve(Log).emit("Error conectando a Twitch: " + error.message);
      this.isConnected = false;
      return;
    }
    this.client.on("message", (_channel, tags, message) => {
      if (!tags.username) return;
      this.publisherForMessage.notify({
        username: tags.username,
        message,
      });
    });
    this.client.on("subscription", (_channel, username, method) => {
      this.publisherForSubscription.notify({
        username,
        method: method.prime ? "prime" : "sub",
        shares: 1,
      });
    });
    this.client.on(
      "resub",
      (_channel, username, _months, _message, _userstate, methods) => {
        this.publisherForSubscription.notify({
          username,
          method: methods.prime ? "prime" : "sub",
          shares: 1,
        });
      }
    );
    this.client.on(
      "subgift",
      (_channel, username, _recipient, _methods, _userstate, _lastGift) => {
        this.publisherForSubscription.notify({
          username,
          method: "gift",
          shares: 1,
        });
      }
    );
    this.client.on(
      "submysterygift",
      (_channel, username, numOfSubs, _methods, _userstate) => {
        this.publisherForSubscription.notify({
          username,
          method: "mystery",
          shares: numOfSubs,
        });
      }
    );
  }
  subscribeToMessage(observer) {
    this.publisherForMessage.subscribe(observer);
  }
  unSubscribeToMessage(observer) {
    this.publisherForMessage.unsubscribe(observer);
  }
  subscribeToSubscription(observer) {
    this.publisherForSubscription.subscribe(observer);
  }
  unSubscribeToSubscription(observer) {
    this.publisherForSubscription.unsubscribe(observer);
  }
}
_init5 = __decoratorStart(null);
Twitch = __decorateElement(_init5, 0, "Twitch", _Twitch_decorators, Twitch);
__runInitializers(_init5, 1, Twitch);
class Timer {
  static toDigitalClock(props) {
    const seconds = (props.seconds ?? 0) + (props.miliseconds ?? 0) / 1e3;
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (props.display === "hour") {
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    if (props.display === "minute") {
      return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
    }
    if (props.display === "second") {
      return `${secs.toString().padStart(2, "0")}`;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
}
_AutoDrop_decorators = [singleton()];
class AutoDrop {
  started = false;
  participants = /* @__PURE__ */ new Set();
  winners = /* @__PURE__ */ new Set();
  clearParticipantsbeforeDrop = false;
  publisherForDrop = new Publisher();
  // Interval for dropping keys
  // This can be adjusted based on your requirements
  dropInterval = 1e3 * 60 * 1;
  interval = null;
  intervalCooldown = null;
  dropCooldown = 0;
  // Cooldown in milliseconds before the next drop can occur
  constructor() {
    const conf = instance.resolve(Configs).autoDrop;
    this.dropInterval = conf.dropInterval;
  }
  stop() {
    this.started = false;
    instance.resolve(Twitch).unSubscribeToMessage(this.onMessage);
    if (this.interval) {
      clearInterval(this.interval);
      clearInterval(this.intervalCooldown);
      this.intervalCooldown = null;
      this.interval = null;
      instance.resolve(OBS).writeCooldown("");
      instance.resolve(OBS).writeText("");
    }
  }
  getDropInterval() {
    return this.dropInterval;
  }
  isEnabled() {
    return this.started;
  }
  setDropInterval(interval) {
    this.dropInterval = interval;
    const conf = instance.resolve(Configs);
    conf.update({
      autoDrop: { ...conf.autoDrop, dropInterval: interval },
    });
  }
  start() {
    if (this.started) return;
    this.started = true;
    instance.resolve(Twitch).subscribeToMessage(this.onMessage);
    instance.resolve(OBS).connect();
    instance.resolve(OBS).writeCooldown(
      Timer.toDigitalClock({
        miliseconds: this.dropInterval,
        display: "minute",
      })
    );
    this.dropCooldown = this.dropInterval;
    if (this.intervalCooldown) {
      clearTimeout(this.intervalCooldown);
      this.intervalCooldown = null;
    }
    this.intervalCooldown = setInterval(() => {
      this.dropCooldown = this.dropCooldown - 1e3;
      instance.resolve(OBS).writeCooldown(
        Timer.toDigitalClock({
          miliseconds: this.dropCooldown,
          display: "minute",
        })
      );
    }, 1e3);
    this.interval = setInterval(() => {
      this.dropKey();
    }, this.dropInterval);
  }
  reset() {
    this.dropCooldown = this.dropInterval;
    instance.resolve(OBS).writeCooldown(
      Timer.toDigitalClock({
        miliseconds: this.dropInterval,
        display: "minute",
      })
    );
    if (this.intervalCooldown) {
      clearTimeout(this.intervalCooldown);
      this.intervalCooldown = null;
    }
    this.intervalCooldown = setInterval(() => {
      this.dropCooldown = this.dropCooldown - 1e3;
      instance.resolve(OBS).writeCooldown(
        Timer.toDigitalClock({
          miliseconds: this.dropCooldown,
          display: "minute",
        })
      );
    }, 1e3);
    if (this.clearParticipantsbeforeDrop) this.participants.clear();
  }
  getParticipants() {
    return Array.from(this.participants);
  }
  getWinners() {
    return Array.from(this.winners);
  }
  dropKey() {
    if (!this.started) return;
    if (this.participants.size === 0) return;
    const participantsArray = Array.from(this.participants);
    const randomIndex = Math.floor(Math.random() * participantsArray.length);
    const winner = participantsArray[randomIndex];
    instance.resolve(OBS).writeText(winner);
    this.winners.add(winner);
    instance
      .resolve(FileSystem)
      .write([...this.winners].join("\n"), "auto-drop.txt");
    this.reset();
    this.publisherForDrop.notify({ username: winner });
    return winner;
  }
  onMessage = {
    observer: "AutoDrop",
    update: (data) => {
      if (!this.started) return;
      this.participants.add(data.username);
    },
  };
  subscribeToDrop(observer) {
    this.publisherForDrop.subscribe(observer);
  }
  unSubscribeToDrop(observer) {
    this.publisherForDrop.unsubscribe(observer);
  }
}
_init6 = __decoratorStart(null);
AutoDrop = __decorateElement(
  _init6,
  0,
  "AutoDrop",
  _AutoDrop_decorators,
  AutoDrop
);
__runInitializers(_init6, 1, AutoDrop);
_SubsDrop_decorators = [singleton()];
class SubsDrop {
  started = false;
  subscriptionsHistory = [];
  winners = [];
  publisherForDrop = new Publisher();
  publisherForNewParticipant = new Publisher();
  stop() {
    this.started = false;
    instance.resolve(Twitch).unSubscribeToSubscription(this.onSubscription);
  }
  start() {
    if (this.started) return;
    this.started = true;
    instance.resolve(Twitch).subscribeToSubscription(this.onSubscription);
  }
  dropKey() {
    if (this.subscriptionsHistory.length === 0) return;
    const participants = this.subscriptionsHistory
      .filter((sub) => !sub.winner)
      .map((sub) => new Array(sub.shares).fill(sub.username))
      .flat();
    if (participants.length === 0) return;
    const randomIndex = Math.floor(Math.random() * participants.length);
    const winner = participants[randomIndex];
    const substitutes = participants.filter((sub) => sub !== winner);
    const randomSubstituteIndex = Math.floor(
      Math.random() * substitutes.length
    );
    const substitute = substitutes[randomSubstituteIndex];
    this.winners.push({ winner, substitute });
    this.publisherForDrop.notify({ winner, substitute });
    this.subscriptionsHistory = this.subscriptionsHistory.map((sub) => {
      if (sub.username === winner || sub.username === substitute) {
        return { ...sub, winner: true };
      }
      return sub;
    });
  }
  isEnabled() {
    return this.started;
  }
  addParticipant({ username, method, shares }) {
    if (!this.started) return;
    const participant = {
      username,
      timestamp: Date.now(),
      winner: false,
      method,
      shares,
    };
    const isDuplicate = this.subscriptionsHistory.some(
      (sub) =>
        sub.username === participant.username &&
        sub.method === "mystery" &&
        sub.timestamp - participant.timestamp < 1500
    );
    if (isDuplicate) return;
    this.subscriptionsHistory.push(participant);
    this.publisherForNewParticipant.notify(participant);
  }
  getWinners() {
    return this.winners;
  }
  getSubscriptionsHistory() {
    return this.subscriptionsHistory;
  }
  onSubscription = {
    observer: "SubsDrop",
    update: ({ username, method, shares }) => {
      this.addParticipant({ username, method, shares });
    },
  };
  subscribeToDrop(observer) {
    this.publisherForDrop.subscribe(observer);
  }
  unSubscribeToDrop(observer) {
    this.publisherForDrop.unsubscribe(observer);
  }
  subscribeToNewParticipant(observer) {
    this.publisherForNewParticipant.subscribe(observer);
  }
  unSubscribeToNewParticipant(observer) {
    this.publisherForNewParticipant.unsubscribe(observer);
  }
}
_init7 = __decoratorStart(null);
SubsDrop = __decorateElement(
  _init7,
  0,
  "SubsDrop",
  _SubsDrop_decorators,
  SubsDrop
);
__runInitializers(_init7, 1, SubsDrop);
_GameAwardsApplication_decorators = [singleton()];
class GameAwardsApplication {
  started = false;
  participants = /* @__PURE__ */ new Set();
  categorySelected = null;
  categories = [];
  publisherForVotes = new Publisher();
  publisherForWin = new Publisher();
  start() {
    if (this.started) return;
    this.started = true;
    instance.resolve(Twitch).subscribeToMessage(this.onMessage);
  }
  isEnabled() {
    return this.started;
  }
  constructor() {
    this.categories = instance.resolve(Configs).gameAwards.categories;
  }
  onMessage = {
    observer: "GameAwards",
    update: (data) => {
      if (!this.started) return;
      if (this.participants.has(data.username)) return;
      this.participants.add(data.username);
      data.message = data.message.substring(0, 1);
      const vote = data.message.trim().toUpperCase();
      if (vote.length !== 1) return;
      for (const category of this.categories) {
        if (category.id !== this.categorySelected) continue;
        if (category.voted) return;
        for (const game of category.games) {
          if (game.option !== vote) continue;
          this.categories[0].updatedAt = Date.now();
          game.votes += 1;
          const maxVotes = Math.max(...category.games.map((g) => g.votes));
          for (const game2 of category.games) {
            game2.wins = game2.votes === maxVotes;
          }
          this.publisherForVotes.notify({
            categories: this.categories,
          });
        }
      }
    },
  };
  startVoting(category) {
    this.start();
    const cat = this.categories.find((c) => c.id === category);
    if (!cat) return;
    for (const game of cat.games) {
      game.votes = 0;
      game.wins = false;
    }
    cat.voted = false;
    this.categorySelected = category;
    this.participants.clear();
    this.started = true;
  }
  stopVoting() {
    this.started = false;
    const cat = this.categories.find((c) => c.id === this.categorySelected);
    if (!cat) return;
    cat.voted = true;
    this.participants.clear();
    this.started = true;
    this.categorySelected = null;
    instance
      .resolve(Configs)
      .update({ gameAwards: { categories: this.categories } });
    this.publisherForWin.notify({
      categories: this.categories,
    });
  }
  subscribeToVotes(observer) {
    this.publisherForVotes.subscribe(observer);
  }
  unSubscribeToVotes(observer) {
    this.publisherForVotes.unsubscribe(observer);
  }
  subscribeToWin(observer) {
    this.publisherForWin.subscribe(observer);
  }
  unSubscribeToWin(observer) {
    this.publisherForWin.unsubscribe(observer);
  }
}
_init8 = __decoratorStart(null);
GameAwardsApplication = __decorateElement(
  _init8,
  0,
  "GameAwardsApplication",
  _GameAwardsApplication_decorators,
  GameAwardsApplication
);
__runInitializers(_init8, 1, GameAwardsApplication);
require$$3$1.ipcMain.handle("ipc-autodrop-start", async (event, arg = 1) => {
  const app = instance.resolve(AutoDrop);
  app.setDropInterval(arg);
  app.start();
  app.unSubscribeToDrop({ observer: "AutoDropComponent", update() {} });
  const window2 = require$$3$1.BrowserWindow.getAllWindows()[0];
  if (!window2) return { reply: app.isEnabled() };
  app.subscribeToDrop({
    observer: "AutoDropComponent",
    update({ username }) {
      window2.webContents.send(
        "ipc-autodrop-subscribe-new-participant",
        username
      );
    },
  });
  return { reply: app.isEnabled() };
});
require$$3$1.ipcMain.handle("ipc-autodrop-stop", async (event, arg) => {
  const app = instance.resolve(AutoDrop);
  app.stop();
  return { reply: app.isEnabled() };
});
require$$3$1.ipcMain.handle("ipc-autodrop-is-enabled", async (event, arg) => {
  const app = instance.resolve(AutoDrop);
  return { reply: app.isEnabled() };
});
require$$3$1.ipcMain.handle("ipc-autodrop-get-interval", async (event, arg) => {
  const app = instance.resolve(AutoDrop);
  return { reply: app.getDropInterval() };
});
require$$3$1.ipcMain.handle(
  "ipc-autodrop-get-participants",
  async (event, arg) => {
    const app = instance.resolve(AutoDrop);
    return { reply: app.getParticipants() };
  }
);
require$$3$1.ipcMain.handle("ipc-autodrop-get-winners", async (event, arg) => {
  const app = instance.resolve(AutoDrop);
  return { reply: app.getWinners() };
});
require$$3$1.ipcMain.handle("ipc-subsdrop-start", async (event, arg) => {
  const app = instance.resolve(SubsDrop);
  app.start();
  app.unSubscribeToDrop({ observer: "SubsDropComponent", update() {} });
  app.unSubscribeToNewParticipant({
    observer: "SubsDropComponent",
    update() {},
  });
  const window2 = require$$3$1.BrowserWindow.getAllWindows()[0];
  if (!window2) return { reply: app.isEnabled() };
  app.subscribeToNewParticipant({
    observer: "SubsDropComponent",
    update(participant) {
      window2.webContents.send(
        "ipc-subsdrop-subscribe-new-participant",
        participant
      );
    },
  });
  app.subscribeToDrop({
    observer: "SubsDropComponent",
    update(data) {
      window2.webContents.send("ipc-subsdrop-subscribe-drop", data);
    },
  });
  return { reply: app.isEnabled() };
});
require$$3$1.ipcMain.handle("ipc-subsdrop-stop", async (event, arg) => {
  const app = instance.resolve(SubsDrop);
  app.stop();
  return { reply: app.isEnabled() };
});
require$$3$1.ipcMain.handle("ipc-subsdrop-is-enabled", async (event, arg) => {
  const app = instance.resolve(SubsDrop);
  return { reply: app.isEnabled() };
});
require$$3$1.ipcMain.handle(
  "ipc-subsdrop-get-participants",
  async (event, arg) => {
    const app = instance.resolve(SubsDrop);
    return { reply: app.getSubscriptionsHistory() };
  }
);
require$$3$1.ipcMain.handle("ipc-subsdrop-get-winners", async (event, arg) => {
  const app = instance.resolve(SubsDrop);
  return { reply: app.getWinners() };
});
require$$3$1.ipcMain.handle("ipc-subsdrop-drop-key", async (event, arg) => {
  const app = instance.resolve(SubsDrop);
  app.dropKey();
  return { reply: true };
});
require$$3$1.ipcMain.handle(
  "ipc-subsdrop-add-participant",
  async (event, arg) => {
    const app = instance.resolve(SubsDrop);
    app.addParticipant(arg);
    return { reply: true };
  }
);
require$$3$1.ipcMain.handle("ipc-conf-values", async (event, arg) => {
  const app = instance.resolve(Configs);
  return { reply: app.toJSON() };
});
require$$3$1.ipcMain.handle("ipc-conf-update", async (event, arg) => {
  const app = instance.resolve(Configs);
  app.update(arg);
  return { reply: true };
});
require$$3$1.ipcMain.handle("ipc-main", async (event, arg) => {
  const app = instance.resolve(Log);
  app.unSubscribe({ observer: "App", update() {} });
  const window2 = require$$3$1.BrowserWindow.getAllWindows()[0];
  if (!window2) return { reply: true };
  app.subscribe({
    observer: "App",
    update(message) {
      window2.webContents.send("ipc-conf-subscribe-log", {
        message,
      });
    },
  });
  return { reply: true };
});
require$$3$1.ipcMain.handle(
  "ipc-gameawards-get-categories",
  async (event, arg) => {
    const app = instance.resolve(GameAwardsApplication);
    return { reply: app.categories };
  }
);
require$$3$1.ipcMain.handle(
  "ipc-gameawards-subscribe-votes",
  async (event, arg) => {
    const app = instance.resolve(GameAwardsApplication);
    app.unSubscribeToVotes({ observer: "GameAwards", update() {} });
    const window2 = require$$3$1.BrowserWindow.getAllWindows()[0];
    if (!window2) return { reply: true };
    app.subscribeToVotes({
      observer: "GameAwards",
      update({ categories }) {
        window2.webContents.send("ipc-gameawards-subscribe-votes", {
          categories,
        });
      },
    });
    return { reply: true };
  }
);
require$$3$1.ipcMain.handle(
  "ipc-gameawards-unsubscribe-votes",
  async (event, arg) => {
    const app = instance.resolve(GameAwardsApplication);
    app.unSubscribeToVotes({ observer: "GameAwards", update() {} });
    return { reply: true };
  }
);
require$$3$1.ipcMain.handle("ipc-gameawards-start-vote", async (event, arg) => {
  const app = instance.resolve(GameAwardsApplication);
  app.unSubscribeToVotes({ observer: "GameAwards", update() {} });
  app.unSubscribeToWin({ observer: "GameAwards", update() {} });
  const window2 = require$$3$1.BrowserWindow.getAllWindows()[0];
  if (!window2) return { reply: true };
  app.subscribeToVotes({
    observer: "GameAwards",
    update({ categories }) {
      window2.webContents.send("ipc-gameawards-subscribe-votes", {
        categories,
      });
    },
  });
  app.subscribeToWin({
    observer: "GameAwards",
    update({ categories }) {
      window2.webContents.send("ipc-gameawards-subscribe-win", { categories });
    },
  });
  app.startVoting(arg);
  return { reply: true };
});
require$$3$1.ipcMain.handle("ipc-gameawards-end-vote", async (event, arg) => {
  const app = instance.resolve(GameAwardsApplication);
  app.stopVoting();
  return { reply: true };
});
require$$3$1.ipcMain.handle("ipc-gameawards-is-voting", async (event, arg) => {
  const app = instance.resolve(GameAwardsApplication);
  return { reply: app.categorySelected ?? null };
});
if (started) {
  require$$3$1.app.quit();
}
instance.resolve(Configs).init();
instance.resolve(Twitch).connect();
instance.resolve(OBS).connect();
const createWindow = () => {
  const mainWindow = new require$$3$1.BrowserWindow({
    icon: path.join(__dirname, "../../images/icon.png"),
    // Corrected path relative to .vite/build/main.js
    width: 800 + 300,
    // sumamos para la consola
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
    },
  });
  {
    mainWindow.loadURL("http://localhost:5173");
  }
  mainWindow.webContents.openDevTools();
};
require$$3$1.app.on("ready", createWindow);
require$$3$1.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    require$$3$1.app.quit();
  }
});
require$$3$1.app.on("activate", () => {
  if (require$$3$1.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
require$$3$1.ipcMain.handle("ipc-ping", async (event, arg) => {
  return { reply: `pong: ${arg}` };
});
require$$3$1.ipcMain.on("ipc-ping-async", (event, arg) => {
  event.sender.send("ipc-pong-async", `pong-async: ${arg}`);
});
