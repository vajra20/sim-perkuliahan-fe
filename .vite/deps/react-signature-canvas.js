import {
  require_react
} from "./chunk-2PA4WPI3.js";
import {
  __commonJS,
  __esm,
  __export,
  __toCommonJS
} from "./chunk-ROME4SDB.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
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
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/signature_pad/dist/signature_pad.mjs
var signature_pad_exports = {};
__export(signature_pad_exports, {
  default: () => signature_pad_default
});
function Point(x, y, time) {
  this.x = x;
  this.y = y;
  this.time = time || (/* @__PURE__ */ new Date()).getTime();
}
function Bezier(startPoint, control1, control2, endPoint) {
  this.startPoint = startPoint;
  this.control1 = control1;
  this.control2 = control2;
  this.endPoint = endPoint;
}
function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options)
    options = {};
  var later = function later2() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout)
      context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false)
      previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout)
        context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
}
function SignaturePad(canvas, options) {
  var self = this;
  var opts = options || {};
  this.velocityFilterWeight = opts.velocityFilterWeight || 0.7;
  this.minWidth = opts.minWidth || 0.5;
  this.maxWidth = opts.maxWidth || 2.5;
  this.throttle = "throttle" in opts ? opts.throttle : 16;
  this.minDistance = "minDistance" in opts ? opts.minDistance : 5;
  if (this.throttle) {
    this._strokeMoveUpdate = throttle(SignaturePad.prototype._strokeUpdate, this.throttle);
  } else {
    this._strokeMoveUpdate = SignaturePad.prototype._strokeUpdate;
  }
  this.dotSize = opts.dotSize || function() {
    return (this.minWidth + this.maxWidth) / 2;
  };
  this.penColor = opts.penColor || "black";
  this.backgroundColor = opts.backgroundColor || "rgba(0,0,0,0)";
  this.onBegin = opts.onBegin;
  this.onEnd = opts.onEnd;
  this._canvas = canvas;
  this._ctx = canvas.getContext("2d");
  this.clear();
  this._handleMouseDown = function(event) {
    if (event.which === 1) {
      self._mouseButtonDown = true;
      self._strokeBegin(event);
    }
  };
  this._handleMouseMove = function(event) {
    if (self._mouseButtonDown) {
      self._strokeMoveUpdate(event);
    }
  };
  this._handleMouseUp = function(event) {
    if (event.which === 1 && self._mouseButtonDown) {
      self._mouseButtonDown = false;
      self._strokeEnd(event);
    }
  };
  this._handleTouchStart = function(event) {
    if (event.targetTouches.length === 1) {
      var touch = event.changedTouches[0];
      self._strokeBegin(touch);
    }
  };
  this._handleTouchMove = function(event) {
    event.preventDefault();
    var touch = event.targetTouches[0];
    self._strokeMoveUpdate(touch);
  };
  this._handleTouchEnd = function(event) {
    var wasCanvasTouched = event.target === self._canvas;
    if (wasCanvasTouched) {
      event.preventDefault();
      self._strokeEnd(event);
    }
  };
  this.on();
}
var signature_pad_default;
var init_signature_pad = __esm({
  "node_modules/signature_pad/dist/signature_pad.mjs"() {
    Point.prototype.velocityFrom = function(start) {
      return this.time !== start.time ? this.distanceTo(start) / (this.time - start.time) : 1;
    };
    Point.prototype.distanceTo = function(start) {
      return Math.sqrt(Math.pow(this.x - start.x, 2) + Math.pow(this.y - start.y, 2));
    };
    Point.prototype.equals = function(other) {
      return this.x === other.x && this.y === other.y && this.time === other.time;
    };
    Bezier.prototype.length = function() {
      var steps = 10;
      var length = 0;
      var px = void 0;
      var py = void 0;
      for (var i = 0; i <= steps; i += 1) {
        var t = i / steps;
        var cx = this._point(t, this.startPoint.x, this.control1.x, this.control2.x, this.endPoint.x);
        var cy = this._point(t, this.startPoint.y, this.control1.y, this.control2.y, this.endPoint.y);
        if (i > 0) {
          var xdiff = cx - px;
          var ydiff = cy - py;
          length += Math.sqrt(xdiff * xdiff + ydiff * ydiff);
        }
        px = cx;
        py = cy;
      }
      return length;
    };
    Bezier.prototype._point = function(t, start, c1, c2, end) {
      return start * (1 - t) * (1 - t) * (1 - t) + 3 * c1 * (1 - t) * (1 - t) * t + 3 * c2 * (1 - t) * t * t + end * t * t * t;
    };
    SignaturePad.prototype.clear = function() {
      var ctx = this._ctx;
      var canvas = this._canvas;
      ctx.fillStyle = this.backgroundColor;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      this._data = [];
      this._reset();
      this._isEmpty = true;
    };
    SignaturePad.prototype.fromDataURL = function(dataUrl) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
      var image = new Image();
      var ratio = options.ratio || window.devicePixelRatio || 1;
      var width = options.width || this._canvas.width / ratio;
      var height = options.height || this._canvas.height / ratio;
      this._reset();
      image.src = dataUrl;
      image.onload = function() {
        _this._ctx.drawImage(image, 0, 0, width, height);
      };
      this._isEmpty = false;
    };
    SignaturePad.prototype.toDataURL = function(type) {
      var _canvas;
      switch (type) {
        case "image/svg+xml":
          return this._toSVG();
        default:
          for (var _len = arguments.length, options = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            options[_key - 1] = arguments[_key];
          }
          return (_canvas = this._canvas).toDataURL.apply(_canvas, [type].concat(options));
      }
    };
    SignaturePad.prototype.on = function() {
      this._handleMouseEvents();
      this._handleTouchEvents();
    };
    SignaturePad.prototype.off = function() {
      this._canvas.removeEventListener("mousedown", this._handleMouseDown);
      this._canvas.removeEventListener("mousemove", this._handleMouseMove);
      document.removeEventListener("mouseup", this._handleMouseUp);
      this._canvas.removeEventListener("touchstart", this._handleTouchStart);
      this._canvas.removeEventListener("touchmove", this._handleTouchMove);
      this._canvas.removeEventListener("touchend", this._handleTouchEnd);
    };
    SignaturePad.prototype.isEmpty = function() {
      return this._isEmpty;
    };
    SignaturePad.prototype._strokeBegin = function(event) {
      this._data.push([]);
      this._reset();
      this._strokeUpdate(event);
      if (typeof this.onBegin === "function") {
        this.onBegin(event);
      }
    };
    SignaturePad.prototype._strokeUpdate = function(event) {
      var x = event.clientX;
      var y = event.clientY;
      var point = this._createPoint(x, y);
      var lastPointGroup = this._data[this._data.length - 1];
      var lastPoint = lastPointGroup && lastPointGroup[lastPointGroup.length - 1];
      var isLastPointTooClose = lastPoint && point.distanceTo(lastPoint) < this.minDistance;
      if (!(lastPoint && isLastPointTooClose)) {
        var _addPoint = this._addPoint(point), curve = _addPoint.curve, widths = _addPoint.widths;
        if (curve && widths) {
          this._drawCurve(curve, widths.start, widths.end);
        }
        this._data[this._data.length - 1].push({
          x: point.x,
          y: point.y,
          time: point.time,
          color: this.penColor
        });
      }
    };
    SignaturePad.prototype._strokeEnd = function(event) {
      var canDrawCurve = this.points.length > 2;
      var point = this.points[0];
      if (!canDrawCurve && point) {
        this._drawDot(point);
      }
      if (point) {
        var lastPointGroup = this._data[this._data.length - 1];
        var lastPoint = lastPointGroup[lastPointGroup.length - 1];
        if (!point.equals(lastPoint)) {
          lastPointGroup.push({
            x: point.x,
            y: point.y,
            time: point.time,
            color: this.penColor
          });
        }
      }
      if (typeof this.onEnd === "function") {
        this.onEnd(event);
      }
    };
    SignaturePad.prototype._handleMouseEvents = function() {
      this._mouseButtonDown = false;
      this._canvas.addEventListener("mousedown", this._handleMouseDown);
      this._canvas.addEventListener("mousemove", this._handleMouseMove);
      document.addEventListener("mouseup", this._handleMouseUp);
    };
    SignaturePad.prototype._handleTouchEvents = function() {
      this._canvas.style.msTouchAction = "none";
      this._canvas.style.touchAction = "none";
      this._canvas.addEventListener("touchstart", this._handleTouchStart);
      this._canvas.addEventListener("touchmove", this._handleTouchMove);
      this._canvas.addEventListener("touchend", this._handleTouchEnd);
    };
    SignaturePad.prototype._reset = function() {
      this.points = [];
      this._lastVelocity = 0;
      this._lastWidth = (this.minWidth + this.maxWidth) / 2;
      this._ctx.fillStyle = this.penColor;
    };
    SignaturePad.prototype._createPoint = function(x, y, time) {
      var rect = this._canvas.getBoundingClientRect();
      return new Point(x - rect.left, y - rect.top, time || (/* @__PURE__ */ new Date()).getTime());
    };
    SignaturePad.prototype._addPoint = function(point) {
      var points = this.points;
      var tmp = void 0;
      points.push(point);
      if (points.length > 2) {
        if (points.length === 3)
          points.unshift(points[0]);
        tmp = this._calculateCurveControlPoints(points[0], points[1], points[2]);
        var c2 = tmp.c2;
        tmp = this._calculateCurveControlPoints(points[1], points[2], points[3]);
        var c3 = tmp.c1;
        var curve = new Bezier(points[1], c2, c3, points[2]);
        var widths = this._calculateCurveWidths(curve);
        points.shift();
        return { curve, widths };
      }
      return {};
    };
    SignaturePad.prototype._calculateCurveControlPoints = function(s1, s2, s3) {
      var dx1 = s1.x - s2.x;
      var dy1 = s1.y - s2.y;
      var dx2 = s2.x - s3.x;
      var dy2 = s2.y - s3.y;
      var m1 = { x: (s1.x + s2.x) / 2, y: (s1.y + s2.y) / 2 };
      var m2 = { x: (s2.x + s3.x) / 2, y: (s2.y + s3.y) / 2 };
      var l1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      var l2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      var dxm = m1.x - m2.x;
      var dym = m1.y - m2.y;
      var k = l2 / (l1 + l2);
      var cm = { x: m2.x + dxm * k, y: m2.y + dym * k };
      var tx = s2.x - cm.x;
      var ty = s2.y - cm.y;
      return {
        c1: new Point(m1.x + tx, m1.y + ty),
        c2: new Point(m2.x + tx, m2.y + ty)
      };
    };
    SignaturePad.prototype._calculateCurveWidths = function(curve) {
      var startPoint = curve.startPoint;
      var endPoint = curve.endPoint;
      var widths = { start: null, end: null };
      var velocity = this.velocityFilterWeight * endPoint.velocityFrom(startPoint) + (1 - this.velocityFilterWeight) * this._lastVelocity;
      var newWidth = this._strokeWidth(velocity);
      widths.start = this._lastWidth;
      widths.end = newWidth;
      this._lastVelocity = velocity;
      this._lastWidth = newWidth;
      return widths;
    };
    SignaturePad.prototype._strokeWidth = function(velocity) {
      return Math.max(this.maxWidth / (velocity + 1), this.minWidth);
    };
    SignaturePad.prototype._drawPoint = function(x, y, size) {
      var ctx = this._ctx;
      ctx.moveTo(x, y);
      ctx.arc(x, y, size, 0, 2 * Math.PI, false);
      this._isEmpty = false;
    };
    SignaturePad.prototype._drawCurve = function(curve, startWidth, endWidth) {
      var ctx = this._ctx;
      var widthDelta = endWidth - startWidth;
      var drawSteps = Math.floor(curve.length());
      ctx.beginPath();
      for (var i = 0; i < drawSteps; i += 1) {
        var t = i / drawSteps;
        var tt = t * t;
        var ttt = tt * t;
        var u = 1 - t;
        var uu = u * u;
        var uuu = uu * u;
        var x = uuu * curve.startPoint.x;
        x += 3 * uu * t * curve.control1.x;
        x += 3 * u * tt * curve.control2.x;
        x += ttt * curve.endPoint.x;
        var y = uuu * curve.startPoint.y;
        y += 3 * uu * t * curve.control1.y;
        y += 3 * u * tt * curve.control2.y;
        y += ttt * curve.endPoint.y;
        var width = startWidth + ttt * widthDelta;
        this._drawPoint(x, y, width);
      }
      ctx.closePath();
      ctx.fill();
    };
    SignaturePad.prototype._drawDot = function(point) {
      var ctx = this._ctx;
      var width = typeof this.dotSize === "function" ? this.dotSize() : this.dotSize;
      ctx.beginPath();
      this._drawPoint(point.x, point.y, width);
      ctx.closePath();
      ctx.fill();
    };
    SignaturePad.prototype._fromData = function(pointGroups, drawCurve, drawDot) {
      for (var i = 0; i < pointGroups.length; i += 1) {
        var group = pointGroups[i];
        if (group.length > 1) {
          for (var j = 0; j < group.length; j += 1) {
            var rawPoint = group[j];
            var point = new Point(rawPoint.x, rawPoint.y, rawPoint.time);
            var color = rawPoint.color;
            if (j === 0) {
              this.penColor = color;
              this._reset();
              this._addPoint(point);
            } else if (j !== group.length - 1) {
              var _addPoint2 = this._addPoint(point), curve = _addPoint2.curve, widths = _addPoint2.widths;
              if (curve && widths) {
                drawCurve(curve, widths, color);
              }
            } else {
            }
          }
        } else {
          this._reset();
          var _rawPoint = group[0];
          drawDot(_rawPoint);
        }
      }
    };
    SignaturePad.prototype._toSVG = function() {
      var _this2 = this;
      var pointGroups = this._data;
      var canvas = this._canvas;
      var ratio = Math.max(window.devicePixelRatio || 1, 1);
      var minX = 0;
      var minY = 0;
      var maxX = canvas.width / ratio;
      var maxY = canvas.height / ratio;
      var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttributeNS(null, "width", canvas.width);
      svg.setAttributeNS(null, "height", canvas.height);
      this._fromData(pointGroups, function(curve, widths, color) {
        var path = document.createElement("path");
        if (!isNaN(curve.control1.x) && !isNaN(curve.control1.y) && !isNaN(curve.control2.x) && !isNaN(curve.control2.y)) {
          var attr = "M " + curve.startPoint.x.toFixed(3) + "," + curve.startPoint.y.toFixed(3) + " " + ("C " + curve.control1.x.toFixed(3) + "," + curve.control1.y.toFixed(3) + " ") + (curve.control2.x.toFixed(3) + "," + curve.control2.y.toFixed(3) + " ") + (curve.endPoint.x.toFixed(3) + "," + curve.endPoint.y.toFixed(3));
          path.setAttribute("d", attr);
          path.setAttribute("stroke-width", (widths.end * 2.25).toFixed(3));
          path.setAttribute("stroke", color);
          path.setAttribute("fill", "none");
          path.setAttribute("stroke-linecap", "round");
          svg.appendChild(path);
        }
      }, function(rawPoint) {
        var circle = document.createElement("circle");
        var dotSize = typeof _this2.dotSize === "function" ? _this2.dotSize() : _this2.dotSize;
        circle.setAttribute("r", dotSize);
        circle.setAttribute("cx", rawPoint.x);
        circle.setAttribute("cy", rawPoint.y);
        circle.setAttribute("fill", rawPoint.color);
        svg.appendChild(circle);
      });
      var prefix = "data:image/svg+xml;base64,";
      var header = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"' + (' viewBox="' + minX + " " + minY + " " + maxX + " " + maxY + '"') + (' width="' + maxX + '"') + (' height="' + maxY + '"') + ">";
      var body = svg.innerHTML;
      if (body === void 0) {
        var dummy = document.createElement("dummy");
        var nodes = svg.childNodes;
        dummy.innerHTML = "";
        for (var i = 0; i < nodes.length; i += 1) {
          dummy.appendChild(nodes[i].cloneNode(true));
        }
        body = dummy.innerHTML;
      }
      var footer = "</svg>";
      var data = header + body + footer;
      return prefix + btoa(data);
    };
    SignaturePad.prototype.fromData = function(pointGroups) {
      var _this3 = this;
      this.clear();
      this._fromData(pointGroups, function(curve, widths) {
        return _this3._drawCurve(curve, widths.start, widths.end);
      }, function(rawPoint) {
        return _this3._drawDot(rawPoint);
      });
      this._data = pointGroups;
    };
    SignaturePad.prototype.toData = function() {
      return this._data;
    };
    signature_pad_default = SignaturePad;
  }
});

// node_modules/trim-canvas/build/index.js
var require_build = __commonJS({
  "node_modules/trim-canvas/build/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.trimCanvas = t() : e.trimCanvas = t();
    }(exports, function() {
      return function(e) {
        function t(n) {
          if (r[n])
            return r[n].exports;
          var o = r[n] = { exports: {}, id: n, loaded: false };
          return e[n].call(o.exports, o, o.exports, t), o.loaded = true, o.exports;
        }
        var r = {};
        return t.m = e, t.c = r, t.p = "", t(0);
      }([function(e, t) {
        "use strict";
        function r(e2) {
          var t2 = e2.getContext("2d"), r2 = e2.width, n2 = e2.height, o2 = t2.getImageData(0, 0, r2, n2).data, f = a(true, r2, n2, o2), i = a(false, r2, n2, o2), c = u(true, r2, n2, o2), d = u(false, r2, n2, o2), p = d - c + 1, l = i - f + 1, s = t2.getImageData(c, f, p, l);
          return e2.width = p, e2.height = l, t2.clearRect(0, 0, p, l), t2.putImageData(s, 0, 0), e2;
        }
        function n(e2, t2, r2, n2) {
          return { red: n2[4 * (r2 * t2 + e2)], green: n2[4 * (r2 * t2 + e2) + 1], blue: n2[4 * (r2 * t2 + e2) + 2], alpha: n2[4 * (r2 * t2 + e2) + 3] };
        }
        function o(e2, t2, r2, o2) {
          return n(e2, t2, r2, o2).alpha;
        }
        function a(e2, t2, r2, n2) {
          for (var a2 = e2 ? 1 : -1, u2 = e2 ? 0 : r2 - 1, f = u2; e2 ? f < r2 : f > -1; f += a2)
            for (var i = 0; i < t2; i++)
              if (o(i, f, t2, n2))
                return f;
          return null;
        }
        function u(e2, t2, r2, n2) {
          for (var a2 = e2 ? 1 : -1, u2 = e2 ? 0 : t2 - 1, f = u2; e2 ? f < t2 : f > -1; f += a2)
            for (var i = 0; i < r2; i++)
              if (o(f, i, t2, n2))
                return f;
          return null;
        }
        Object.defineProperty(t, "__esModule", { value: true }), t.default = r;
      }]);
    });
  }
});

// node_modules/react-signature-canvas/build/index.js
var require_build2 = __commonJS({
  "node_modules/react-signature-canvas/build/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t(require_prop_types(), require_react(), (init_signature_pad(), __toCommonJS(signature_pad_exports)), require_build()) : "function" == typeof define && define.amd ? define(["prop-types", "react", "signature_pad", "trim-canvas"], t) : "object" == typeof exports ? exports.SignatureCanvas = t(require_prop_types(), require_react(), (init_signature_pad(), __toCommonJS(signature_pad_exports)), require_build()) : e.SignatureCanvas = t(e["prop-types"], e.react, e.signature_pad, e["trim-canvas"]);
    }(exports, function(e, t, n, r) {
      return function(e2) {
        function t2(r2) {
          if (n2[r2])
            return n2[r2].exports;
          var a = n2[r2] = { exports: {}, id: r2, loaded: false };
          return e2[r2].call(a.exports, a, a.exports, t2), a.loaded = true, a.exports;
        }
        var n2 = {};
        return t2.m = e2, t2.c = n2, t2.p = "", t2(0);
      }([function(e2, t2, n2) {
        "use strict";
        function r2(e3) {
          return e3 && e3.__esModule ? e3 : { default: e3 };
        }
        function a(e3, t3) {
          var n3 = {};
          for (var r3 in e3)
            t3.indexOf(r3) >= 0 || Object.prototype.hasOwnProperty.call(e3, r3) && (n3[r3] = e3[r3]);
          return n3;
        }
        function o(e3, t3) {
          if (!(e3 instanceof t3))
            throw new TypeError("Cannot call a class as a function");
        }
        function i(e3, t3) {
          if (!e3)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !t3 || "object" != typeof t3 && "function" != typeof t3 ? e3 : t3;
        }
        function u(e3, t3) {
          if ("function" != typeof t3 && null !== t3)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t3);
          e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, enumerable: false, writable: true, configurable: true } }), t3 && (Object.setPrototypeOf ? Object.setPrototypeOf(e3, t3) : e3.__proto__ = t3);
        }
        Object.defineProperty(t2, "__esModule", { value: true });
        var s = Object.assign || function(e3) {
          for (var t3 = 1; t3 < arguments.length; t3++) {
            var n3 = arguments[t3];
            for (var r3 in n3)
              Object.prototype.hasOwnProperty.call(n3, r3) && (e3[r3] = n3[r3]);
          }
          return e3;
        }, c = function() {
          function e3(e4, t3) {
            for (var n3 = 0; n3 < t3.length; n3++) {
              var r3 = t3[n3];
              r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e4, r3.key, r3);
            }
          }
          return function(t3, n3, r3) {
            return n3 && e3(t3.prototype, n3), r3 && e3(t3, r3), t3;
          };
        }(), f = n2(1), p = r2(f), l = n2(2), d = r2(l), v = n2(3), h = r2(v), _ = n2(4), g = r2(_), m = function(e3) {
          function t3() {
            var e4, n3, r3, u2;
            o(this, t3);
            for (var s2 = arguments.length, c2 = Array(s2), f2 = 0; f2 < s2; f2++)
              c2[f2] = arguments[f2];
            return n3 = r3 = i(this, (e4 = t3.__proto__ || Object.getPrototypeOf(t3)).call.apply(e4, [this].concat(c2))), r3._sigPad = null, r3._excludeOurProps = function() {
              var e5 = r3.props, t4 = (e5.canvasProps, e5.clearOnResize, a(e5, ["canvasProps", "clearOnResize"]));
              return t4;
            }, r3.getCanvas = function() {
              return r3._canvas;
            }, r3.getTrimmedCanvas = function() {
              var e5 = document.createElement("canvas");
              return e5.width = r3._canvas.width, e5.height = r3._canvas.height, e5.getContext("2d").drawImage(r3._canvas, 0, 0), (0, g.default)(e5);
            }, r3.getSignaturePad = function() {
              return r3._sigPad;
            }, r3._checkClearOnResize = function() {
              r3.props.clearOnResize && r3._resizeCanvas();
            }, r3._resizeCanvas = function() {
              var e5 = r3.props.canvasProps || {}, t4 = e5.width, n4 = e5.height;
              if (!t4 || !n4) {
                var a2 = r3._canvas, o2 = Math.max(window.devicePixelRatio || 1, 1);
                t4 || (a2.width = a2.offsetWidth * o2), n4 || (a2.height = a2.offsetHeight * o2), a2.getContext("2d").scale(o2, o2), r3.clear();
              }
            }, r3.on = function() {
              return window.addEventListener("resize", r3._checkClearOnResize), r3._sigPad.on();
            }, r3.off = function() {
              return window.removeEventListener("resize", r3._checkClearOnResize), r3._sigPad.off();
            }, r3.clear = function() {
              return r3._sigPad.clear();
            }, r3.isEmpty = function() {
              return r3._sigPad.isEmpty();
            }, r3.fromDataURL = function(e5, t4) {
              return r3._sigPad.fromDataURL(e5, t4);
            }, r3.toDataURL = function(e5, t4) {
              return r3._sigPad.toDataURL(e5, t4);
            }, r3.fromData = function(e5) {
              return r3._sigPad.fromData(e5);
            }, r3.toData = function() {
              return r3._sigPad.toData();
            }, u2 = n3, i(r3, u2);
          }
          return u(t3, e3), c(t3, [{ key: "componentDidMount", value: function() {
            this._sigPad = new h.default(this._canvas, this._excludeOurProps()), this._resizeCanvas(), this.on();
          } }, { key: "componentWillUnmount", value: function() {
            this.off();
          } }, { key: "componentDidUpdate", value: function() {
            Object.assign(this._sigPad, this._excludeOurProps());
          } }, { key: "render", value: function() {
            var e4 = this, t4 = this.props.canvasProps;
            return d.default.createElement("canvas", s({ ref: function(t5) {
              e4._canvas = t5;
            } }, t4));
          } }]), t3;
        }(l.Component);
        m.propTypes = { velocityFilterWeight: p.default.number, minWidth: p.default.number, maxWidth: p.default.number, minDistance: p.default.number, dotSize: p.default.oneOfType([p.default.number, p.default.func]), penColor: p.default.string, throttle: p.default.number, onEnd: p.default.func, onBegin: p.default.func, canvasProps: p.default.object, clearOnResize: p.default.bool }, m.defaultProps = { clearOnResize: true }, t2.default = m;
      }, function(t2, n2) {
        t2.exports = e;
      }, function(e2, n2) {
        e2.exports = t;
      }, function(e2, t2) {
        e2.exports = n;
      }, function(e2, t2) {
        e2.exports = r;
      }]);
    });
  }
});
export default require_build2();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)

signature_pad/dist/signature_pad.mjs:
  (*!
   * Signature Pad v2.3.2
   * https://github.com/szimek/signature_pad
   *
   * Copyright 2017 Szymon Nowak
   * Released under the MIT license
   *
   * The main idea and some parts of the code (e.g. drawing variable width Bézier curve) are taken from:
   * http://corner.squareup.com/2012/07/smoother-signatures.html
   *
   * Implementation of interpolation using cubic Bézier curves is taken from:
   * http://benknowscode.wordpress.com/2012/09/14/path-interpolation-using-cubic-bezier-and-control-point-estimation-in-javascript
   *
   * Algorithm for approximated length of a Bézier curve is taken from:
   * http://www.lemoda.net/maths/bezier-length/index.html
   *
   *)
*/
//# sourceMappingURL=react-signature-canvas.js.map
