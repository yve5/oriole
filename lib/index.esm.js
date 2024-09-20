var Yr = { exports: {} }, Xe = {}, Br = { exports: {} }, m = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yt;
function Yt() {
  if (yt) return m;
  yt = 1;
  var j = Symbol.for("react.element"), p = Symbol.for("react.portal"), le = Symbol.for("react.fragment"), J = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), U = Symbol.for("react.provider"), X = Symbol.for("react.context"), H = Symbol.for("react.forward_ref"), M = Symbol.for("react.suspense"), ne = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), Y = Symbol.iterator;
  function ae(n) {
    return n === null || typeof n != "object" ? null : (n = Y && n[Y] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var Z = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, fe = Object.assign, $e = {};
  function ie(n, u, g) {
    this.props = n, this.context = u, this.refs = $e, this.updater = g || Z;
  }
  ie.prototype.isReactComponent = {}, ie.prototype.setState = function(n, u) {
    if (typeof n != "object" && typeof n != "function" && n != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, u, "setState");
  }, ie.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ue() {
  }
  ue.prototype = ie.prototype;
  function D(n, u, g) {
    this.props = n, this.context = u, this.refs = $e, this.updater = g || Z;
  }
  var _e = D.prototype = new ue();
  _e.constructor = D, fe(_e, ie.prototype), _e.isPureReactComponent = !0;
  var se = Array.isArray, N = Object.prototype.hasOwnProperty, Q = { current: null }, de = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(n, u, g) {
    var b, R = {}, k = null, O = null;
    if (u != null) for (b in u.ref !== void 0 && (O = u.ref), u.key !== void 0 && (k = "" + u.key), u) N.call(u, b) && !de.hasOwnProperty(b) && (R[b] = u[b]);
    var T = arguments.length - 2;
    if (T === 1) R.children = g;
    else if (1 < T) {
      for (var C = Array(T), W = 0; W < T; W++) C[W] = arguments[W + 2];
      R.children = C;
    }
    if (n && n.defaultProps) for (b in T = n.defaultProps, T) R[b] === void 0 && (R[b] = T[b]);
    return { $$typeof: j, type: n, key: k, ref: O, props: R, _owner: Q.current };
  }
  function Se(n, u) {
    return { $$typeof: j, type: n.type, key: u, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Te(n) {
    return typeof n == "object" && n !== null && n.$$typeof === j;
  }
  function ze(n) {
    var u = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(g) {
      return u[g];
    });
  }
  var Oe = /\/+/g;
  function K(n, u) {
    return typeof n == "object" && n !== null && n.key != null ? ze("" + n.key) : u.toString(36);
  }
  function ee(n, u, g, b, R) {
    var k = typeof n;
    (k === "undefined" || k === "boolean") && (n = null);
    var O = !1;
    if (n === null) O = !0;
    else switch (k) {
      case "string":
      case "number":
        O = !0;
        break;
      case "object":
        switch (n.$$typeof) {
          case j:
          case p:
            O = !0;
        }
    }
    if (O) return O = n, R = R(O), n = b === "" ? "." + K(O, 0) : b, se(R) ? (g = "", n != null && (g = n.replace(Oe, "$&/") + "/"), ee(R, u, g, "", function(W) {
      return W;
    })) : R != null && (Te(R) && (R = Se(R, g + (!R.key || O && O.key === R.key ? "" : ("" + R.key).replace(Oe, "$&/") + "/") + n)), u.push(R)), 1;
    if (O = 0, b = b === "" ? "." : b + ":", se(n)) for (var T = 0; T < n.length; T++) {
      k = n[T];
      var C = b + K(k, T);
      O += ee(k, u, g, C, R);
    }
    else if (C = ae(n), typeof C == "function") for (n = C.call(n), T = 0; !(k = n.next()).done; ) k = k.value, C = b + K(k, T++), O += ee(k, u, g, C, R);
    else if (k === "object") throw u = String(n), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
    return O;
  }
  function B(n, u, g) {
    if (n == null) return n;
    var b = [], R = 0;
    return ee(n, b, "", "", function(k) {
      return u.call(g, k, R++);
    }), b;
  }
  function ce(n) {
    if (n._status === -1) {
      var u = n._result;
      u = u(), u.then(function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = g);
      }, function(g) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = g);
      }), n._status === -1 && (n._status = 0, n._result = u);
    }
    if (n._status === 1) return n._result.default;
    throw n._result;
  }
  var f = { current: null }, ve = { transition: null }, Pe = { ReactCurrentDispatcher: f, ReactCurrentBatchConfig: ve, ReactCurrentOwner: Q };
  function he() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return m.Children = { map: B, forEach: function(n, u, g) {
    B(n, function() {
      u.apply(this, arguments);
    }, g);
  }, count: function(n) {
    var u = 0;
    return B(n, function() {
      u++;
    }), u;
  }, toArray: function(n) {
    return B(n, function(u) {
      return u;
    }) || [];
  }, only: function(n) {
    if (!Te(n)) throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, m.Component = ie, m.Fragment = le, m.Profiler = te, m.PureComponent = D, m.StrictMode = J, m.Suspense = M, m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pe, m.act = he, m.cloneElement = function(n, u, g) {
    if (n == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var b = fe({}, n.props), R = n.key, k = n.ref, O = n._owner;
    if (u != null) {
      if (u.ref !== void 0 && (k = u.ref, O = Q.current), u.key !== void 0 && (R = "" + u.key), n.type && n.type.defaultProps) var T = n.type.defaultProps;
      for (C in u) N.call(u, C) && !de.hasOwnProperty(C) && (b[C] = u[C] === void 0 && T !== void 0 ? T[C] : u[C]);
    }
    var C = arguments.length - 2;
    if (C === 1) b.children = g;
    else if (1 < C) {
      T = Array(C);
      for (var W = 0; W < C; W++) T[W] = arguments[W + 2];
      b.children = T;
    }
    return { $$typeof: j, type: n.type, key: R, ref: k, props: b, _owner: O };
  }, m.createContext = function(n) {
    return n = { $$typeof: X, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: U, _context: n }, n.Consumer = n;
  }, m.createElement = ye, m.createFactory = function(n) {
    var u = ye.bind(null, n);
    return u.type = n, u;
  }, m.createRef = function() {
    return { current: null };
  }, m.forwardRef = function(n) {
    return { $$typeof: H, render: n };
  }, m.isValidElement = Te, m.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ce };
  }, m.memo = function(n, u) {
    return { $$typeof: ne, type: n, compare: u === void 0 ? null : u };
  }, m.startTransition = function(n) {
    var u = ve.transition;
    ve.transition = {};
    try {
      n();
    } finally {
      ve.transition = u;
    }
  }, m.unstable_act = he, m.useCallback = function(n, u) {
    return f.current.useCallback(n, u);
  }, m.useContext = function(n) {
    return f.current.useContext(n);
  }, m.useDebugValue = function() {
  }, m.useDeferredValue = function(n) {
    return f.current.useDeferredValue(n);
  }, m.useEffect = function(n, u) {
    return f.current.useEffect(n, u);
  }, m.useId = function() {
    return f.current.useId();
  }, m.useImperativeHandle = function(n, u, g) {
    return f.current.useImperativeHandle(n, u, g);
  }, m.useInsertionEffect = function(n, u) {
    return f.current.useInsertionEffect(n, u);
  }, m.useLayoutEffect = function(n, u) {
    return f.current.useLayoutEffect(n, u);
  }, m.useMemo = function(n, u) {
    return f.current.useMemo(n, u);
  }, m.useReducer = function(n, u, g) {
    return f.current.useReducer(n, u, g);
  }, m.useRef = function(n) {
    return f.current.useRef(n);
  }, m.useState = function(n) {
    return f.current.useState(n);
  }, m.useSyncExternalStore = function(n, u, g) {
    return f.current.useSyncExternalStore(n, u, g);
  }, m.useTransition = function() {
    return f.current.useTransition();
  }, m.version = "18.3.1", m;
}
var Ze = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ze.exports;
var ht;
function Bt() {
  return ht || (ht = 1, function(j, p) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var le = "18.3.1", J = Symbol.for("react.element"), te = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), M = Symbol.for("react.provider"), ne = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), Y = Symbol.for("react.suspense"), ae = Symbol.for("react.suspense_list"), Z = Symbol.for("react.memo"), fe = Symbol.for("react.lazy"), $e = Symbol.for("react.offscreen"), ie = Symbol.iterator, ue = "@@iterator";
      function D(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ie && e[ie] || e[ue];
        return typeof r == "function" ? r : null;
      }
      var _e = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, se = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, Q = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, de = {}, ye = null;
      function Se(e) {
        ye = e;
      }
      de.setExtraStackFrame = function(e) {
        ye = e;
      }, de.getCurrentStack = null, de.getStackAddendum = function() {
        var e = "";
        ye && (e += ye);
        var r = de.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Te = !1, ze = !1, Oe = !1, K = !1, ee = !1, B = {
        ReactCurrentDispatcher: _e,
        ReactCurrentBatchConfig: se,
        ReactCurrentOwner: Q
      };
      B.ReactDebugCurrentFrame = de, B.ReactCurrentActQueue = N;
      function ce(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("warn", e, a);
        }
      }
      function f(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          ve("error", e, a);
        }
      }
      function ve(e, r, a) {
        {
          var o = B.ReactDebugCurrentFrame, c = o.getStackAddendum();
          c !== "" && (r += "%s", a = a.concat([c]));
          var d = a.map(function(l) {
            return String(l);
          });
          d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
        }
      }
      var Pe = {};
      function he(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", c = o + "." + r;
          if (Pe[c])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Pe[c] = !0;
        }
      }
      var n = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          he(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          he(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          he(e, "setState");
        }
      }, u = Object.assign, g = {};
      Object.freeze(g);
      function b(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      b.prototype.isReactComponent = {}, b.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, b.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var R = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(b.prototype, e, {
            get: function() {
              ce("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var O in R)
          R.hasOwnProperty(O) && k(O, R[O]);
      }
      function T() {
      }
      T.prototype = b.prototype;
      function C(e, r, a) {
        this.props = e, this.context = r, this.refs = g, this.updater = a || n;
      }
      var W = C.prototype = new T();
      W.constructor = C, u(W, b.prototype), W.isPureReactComponent = !0;
      function br() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var er = Array.isArray;
      function Me(e) {
        return er(e);
      }
      function Er(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function Le(e) {
        try {
          return be(e), !1;
        } catch {
          return !0;
        }
      }
      function be(e) {
        return "" + e;
      }
      function ke(e) {
        if (Le(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Er(e)), be(e);
      }
      function rr(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var c = r.displayName || r.name || "";
        return c !== "" ? a + "(" + c + ")" : a;
      }
      function je(e) {
        return e.displayName || "Context";
      }
      function pe(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case U:
            return "Fragment";
          case te:
            return "Portal";
          case H:
            return "Profiler";
          case X:
            return "StrictMode";
          case Y:
            return "Suspense";
          case ae:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case ne:
              var r = e;
              return je(r) + ".Consumer";
            case M:
              var a = e;
              return je(a._context) + ".Provider";
            case L:
              return rr(e, e.render, "ForwardRef");
            case Z:
              var o = e.displayName || null;
              return o !== null ? o : pe(e.type) || "Memo";
            case fe: {
              var c = e, d = c._payload, l = c._init;
              try {
                return pe(l(d));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Ae = Object.prototype.hasOwnProperty, Ne = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, tr, nr, We;
      We = {};
      function qe(e) {
        if (Ae.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function Ee(e) {
        if (Ae.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function Rr(e, r) {
        var a = function() {
          tr || (tr = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function ar(e, r) {
        var a = function() {
          nr || (nr = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function or(e) {
        if (typeof e.ref == "string" && Q.current && e.__self && Q.current.stateNode !== e.__self) {
          var r = pe(Q.current.type);
          We[r] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), We[r] = !0);
        }
      }
      var xe = function(e, r, a, o, c, d, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: J,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: d
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: c
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function wr(e, r, a) {
        var o, c = {}, d = null, l = null, y = null, E = null;
        if (r != null) {
          qe(r) && (l = r.ref, or(r)), Ee(r) && (ke(r.key), d = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            Ae.call(r, o) && !Ne.hasOwnProperty(o) && (c[o] = r[o]);
        }
        var P = arguments.length - 2;
        if (P === 1)
          c.children = a;
        else if (P > 1) {
          for (var A = Array(P), x = 0; x < P; x++)
            A[x] = arguments[x + 2];
          Object.freeze && Object.freeze(A), c.children = A;
        }
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (o in F)
            c[o] === void 0 && (c[o] = F[o]);
        }
        if (d || l) {
          var V = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          d && Rr(c, V), l && ar(c, V);
        }
        return xe(e, d, l, y, E, Q.current, c);
      }
      function Cr(e, r) {
        var a = xe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function Sr(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, c = u({}, e.props), d = e.key, l = e.ref, y = e._self, E = e._source, P = e._owner;
        if (r != null) {
          qe(r) && (l = r.ref, P = Q.current), Ee(r) && (ke(r.key), d = "" + r.key);
          var A;
          e.type && e.type.defaultProps && (A = e.type.defaultProps);
          for (o in r)
            Ae.call(r, o) && !Ne.hasOwnProperty(o) && (r[o] === void 0 && A !== void 0 ? c[o] = A[o] : c[o] = r[o]);
        }
        var x = arguments.length - 2;
        if (x === 1)
          c.children = a;
        else if (x > 1) {
          for (var F = Array(x), V = 0; V < x; V++)
            F[V] = arguments[V + 2];
          c.children = F;
        }
        return xe(e.type, d, l, y, E, P, c);
      }
      function Re(e) {
        return typeof e == "object" && e !== null && e.$$typeof === J;
      }
      var ir = ".", Tr = ":";
      function Or(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(c) {
          return a[c];
        });
        return "$" + o;
      }
      var Ve = !1, ur = /\/+/g;
      function me(e) {
        return e.replace(ur, "$&/");
      }
      function De(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ke(e.key), Or("" + e.key)) : r.toString(36);
      }
      function we(e, r, a, o, c) {
        var d = typeof e;
        (d === "undefined" || d === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (d) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case J:
                case te:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = c(y), P = o === "" ? ir + De(y, 0) : o;
          if (Me(E)) {
            var A = "";
            P != null && (A = me(P) + "/"), we(E, r, A, "", function(Ut) {
              return Ut;
            });
          } else E != null && (Re(E) && (E.key && (!y || y.key !== E.key) && ke(E.key), E = Cr(
            E,
            // Keep both the (mapped) and old keys if they differ, just as
            // traverseAllChildren used to do for objects as children
            a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
            (E.key && (!y || y.key !== E.key) ? (
              // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              // eslint-disable-next-line react-internal/safe-string-coercion
              me("" + E.key) + "/"
            ) : "") + P
          )), r.push(E));
          return 1;
        }
        var x, F, V = 0, q = o === "" ? ir : o + Tr;
        if (Me(e))
          for (var _r = 0; _r < e.length; _r++)
            x = e[_r], F = q + De(x, _r), V += we(x, r, a, F, c);
        else {
          var Ur = D(e);
          if (typeof Ur == "function") {
            var dt = e;
            Ur === dt.entries && (Ve || ce("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ve = !0);
            for (var Wt = Ur.call(dt), vt, Vt = 0; !(vt = Wt.next()).done; )
              x = vt.value, F = q + De(x, Vt++), V += we(x, r, a, F, c);
          } else if (d === "object") {
            var pt = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (pt === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : pt) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return V;
      }
      function Ie(e, r, a) {
        if (e == null)
          return e;
        var o = [], c = 0;
        return we(e, o, "", "", function(d) {
          return r.call(a, d, c++);
        }), o;
      }
      function Pr(e) {
        var r = 0;
        return Ie(e, function() {
          r++;
        }), r;
      }
      function sr(e, r, a) {
        Ie(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function kr(e) {
        return Ie(e, function(r) {
          return r;
        }) || [];
      }
      function cr(e) {
        if (!Re(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function lr(e) {
        var r = {
          $$typeof: ne,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: M,
          _context: r
        };
        var a = !1, o = !1, c = !1;
        {
          var d = {
            $$typeof: ne,
            _context: r
          };
          Object.defineProperties(d, {
            Provider: {
              get: function() {
                return o || (o = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                c || (ce("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), c = !0);
              }
            }
          }), r.Consumer = d;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var Fe = -1, He = 0, Ke = 1, fr = 2;
      function jr(e) {
        if (e._status === Fe) {
          var r = e._result, a = r();
          if (a.then(function(d) {
            if (e._status === He || e._status === Fe) {
              var l = e;
              l._status = Ke, l._result = d;
            }
          }, function(d) {
            if (e._status === He || e._status === Fe) {
              var l = e;
              l._status = fr, l._result = d;
            }
          }), e._status === Fe) {
            var o = e;
            o._status = He, o._result = a;
          }
        }
        if (e._status === Ke) {
          var c = e._result;
          return c === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, c), "default" in c || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, c), c.default;
        } else
          throw e._result;
      }
      function Ar(e) {
        var r = {
          // We use these fields to store the result.
          _status: Fe,
          _result: e
        }, a = {
          $$typeof: fe,
          _payload: r,
          _init: jr
        };
        {
          var o, c;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(d) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = d, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return c;
              },
              set: function(d) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), c = d, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function xr(e) {
        e != null && e.$$typeof === Z ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var dr;
      dr = Symbol.for("react.module.reference");
      function t(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === U || e === H || ee || e === X || e === Y || e === ae || K || e === $e || Te || ze || Oe || typeof e == "object" && e !== null && (e.$$typeof === fe || e.$$typeof === Z || e.$$typeof === M || e.$$typeof === ne || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === dr || e.getModuleId !== void 0));
      }
      function i(e, r) {
        t(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: Z,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(c) {
              o = c, !e.name && !e.displayName && (e.displayName = c);
            }
          });
        }
        return a;
      }
      function s() {
        var e = _e.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function v(e) {
        var r = s();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function w(e) {
        var r = s();
        return r.useState(e);
      }
      function S(e, r, a) {
        var o = s();
        return o.useReducer(e, r, a);
      }
      function _(e) {
        var r = s();
        return r.useRef(e);
      }
      function h(e, r) {
        var a = s();
        return a.useEffect(e, r);
      }
      function z(e, r) {
        var a = s();
        return a.useInsertionEffect(e, r);
      }
      function I(e, r) {
        var a = s();
        return a.useLayoutEffect(e, r);
      }
      function $(e, r) {
        var a = s();
        return a.useCallback(e, r);
      }
      function re(e, r) {
        var a = s();
        return a.useMemo(e, r);
      }
      function Ce(e, r, a) {
        var o = s();
        return o.useImperativeHandle(e, r, a);
      }
      function ge(e, r) {
        {
          var a = s();
          return a.useDebugValue(e, r);
        }
      }
      function G() {
        var e = s();
        return e.useTransition();
      }
      function Ge(e) {
        var r = s();
        return r.useDeferredValue(e);
      }
      function Dr() {
        var e = s();
        return e.useId();
      }
      function Ir(e, r, a) {
        var o = s();
        return o.useSyncExternalStore(e, r, a);
      }
      var Je = 0, zr, qr, Hr, Kr, Gr, Jr, Xr;
      function Qr() {
      }
      Qr.__reactDisabledLog = !0;
      function Rt() {
        {
          if (Je === 0) {
            zr = console.log, qr = console.info, Hr = console.warn, Kr = console.error, Gr = console.group, Jr = console.groupCollapsed, Xr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Qr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          Je++;
        }
      }
      function wt() {
        {
          if (Je--, Je === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: zr
              }),
              info: u({}, e, {
                value: qr
              }),
              warn: u({}, e, {
                value: Hr
              }),
              error: u({}, e, {
                value: Kr
              }),
              group: u({}, e, {
                value: Gr
              }),
              groupCollapsed: u({}, e, {
                value: Jr
              }),
              groupEnd: u({}, e, {
                value: Xr
              })
            });
          }
          Je < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Fr = B.ReactCurrentDispatcher, $r;
      function vr(e, r, a) {
        {
          if ($r === void 0)
            try {
              throw Error();
            } catch (c) {
              var o = c.stack.trim().match(/\n( *(at )?)/);
              $r = o && o[1] || "";
            }
          return `
` + $r + e;
        }
      }
      var Mr = !1, pr;
      {
        var Ct = typeof WeakMap == "function" ? WeakMap : Map;
        pr = new Ct();
      }
      function Zr(e, r) {
        if (!e || Mr)
          return "";
        {
          var a = pr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Mr = !0;
        var c = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var d;
        d = Fr.current, Fr.current = null, Rt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (q) {
                o = q;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (q) {
                o = q;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (q) {
              o = q;
            }
            e();
          }
        } catch (q) {
          if (q && o && typeof q.stack == "string") {
            for (var y = q.stack.split(`
`), E = o.stack.split(`
`), P = y.length - 1, A = E.length - 1; P >= 1 && A >= 0 && y[P] !== E[A]; )
              A--;
            for (; P >= 1 && A >= 0; P--, A--)
              if (y[P] !== E[A]) {
                if (P !== 1 || A !== 1)
                  do
                    if (P--, A--, A < 0 || y[P] !== E[A]) {
                      var x = `
` + y[P].replace(" at new ", " at ");
                      return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && pr.set(e, x), x;
                    }
                  while (P >= 1 && A >= 0);
                break;
              }
          }
        } finally {
          Mr = !1, Fr.current = d, wt(), Error.prepareStackTrace = c;
        }
        var F = e ? e.displayName || e.name : "", V = F ? vr(F) : "";
        return typeof e == "function" && pr.set(e, V), V;
      }
      function St(e, r, a) {
        return Zr(e, !1);
      }
      function Tt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function yr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Zr(e, Tt(e));
        if (typeof e == "string")
          return vr(e);
        switch (e) {
          case Y:
            return vr("Suspense");
          case ae:
            return vr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return St(e.render);
            case Z:
              return yr(e.type, r, a);
            case fe: {
              var o = e, c = o._payload, d = o._init;
              try {
                return yr(d(c), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var et = {}, rt = B.ReactDebugCurrentFrame;
      function hr(e) {
        if (e) {
          var r = e._owner, a = yr(e.type, e._source, r ? r.type : null);
          rt.setExtraStackFrame(a);
        } else
          rt.setExtraStackFrame(null);
      }
      function Ot(e, r, a, o, c) {
        {
          var d = Function.call.bind(Ae);
          for (var l in e)
            if (d(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (P) {
                y = P;
              }
              y && !(y instanceof Error) && (hr(c), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), hr(null)), y instanceof Error && !(y.message in et) && (et[y.message] = !0, hr(c), f("Failed %s type: %s", a, y.message), hr(null));
            }
        }
      }
      function Ue(e) {
        if (e) {
          var r = e._owner, a = yr(e.type, e._source, r ? r.type : null);
          Se(a);
        } else
          Se(null);
      }
      var Lr;
      Lr = !1;
      function tt() {
        if (Q.current) {
          var e = pe(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function Pt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function kt(e) {
        return e != null ? Pt(e.__source) : "";
      }
      var nt = {};
      function jt(e) {
        var r = tt();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function at(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = jt(r);
          if (!nt[a]) {
            nt[a] = !0;
            var o = "";
            e && e._owner && e._owner !== Q.current && (o = " It was passed a child from " + pe(e._owner.type) + "."), Ue(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), Ue(null);
          }
        }
      }
      function ot(e, r) {
        if (typeof e == "object") {
          if (Me(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              Re(o) && at(o, r);
            }
          else if (Re(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var c = D(e);
            if (typeof c == "function" && c !== e.entries)
              for (var d = c.call(e), l; !(l = d.next()).done; )
                Re(l.value) && at(l.value, r);
          }
        }
      }
      function it(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === Z))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = pe(r);
            Ot(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !Lr) {
            Lr = !0;
            var c = pe(r);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function At(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              Ue(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), Ue(null);
              break;
            }
          }
          e.ref !== null && (Ue(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), Ue(null));
        }
      }
      function ut(e, r, a) {
        var o = t(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = kt(r);
          d ? c += d : c += tt();
          var l;
          e === null ? l = "null" : Me(e) ? l = "array" : e !== void 0 && e.$$typeof === J ? (l = "<" + (pe(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, c);
        }
        var y = wr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            ot(arguments[E], e);
        return e === U ? At(y) : it(y), y;
      }
      var st = !1;
      function xt(e) {
        var r = ut.bind(null, e);
        return r.type = e, st || (st = !0, ce("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ce("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Dt(e, r, a) {
        for (var o = Sr.apply(this, arguments), c = 2; c < arguments.length; c++)
          ot(arguments[c], o.type);
        return it(o), o;
      }
      function It(e, r) {
        var a = se.transition;
        se.transition = {};
        var o = se.transition;
        se.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (se.transition = a, a === null && o._updatedFibers) {
            var c = o._updatedFibers.size;
            c > 10 && ce("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var ct = !1, mr = null;
      function Ft(e) {
        if (mr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = j && j[r];
            mr = a.call(j, "timers").setImmediate;
          } catch {
            mr = function(c) {
              ct === !1 && (ct = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var d = new MessageChannel();
              d.port1.onmessage = c, d.port2.postMessage(void 0);
            };
          }
        return mr(e);
      }
      var Ye = 0, lt = !1;
      function ft(e) {
        {
          var r = Ye;
          Ye++, N.current === null && (N.current = []);
          var a = N.isBatchingLegacy, o;
          try {
            if (N.isBatchingLegacy = !0, o = e(), !a && N.didScheduleLegacyUpdate) {
              var c = N.current;
              c !== null && (N.didScheduleLegacyUpdate = !1, Vr(c));
            }
          } catch (F) {
            throw gr(r), F;
          } finally {
            N.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var d = o, l = !1, y = {
              then: function(F, V) {
                l = !0, d.then(function(q) {
                  gr(r), Ye === 0 ? Nr(q, F, V) : F(q);
                }, function(q) {
                  gr(r), V(q);
                });
              }
            };
            return !lt && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (lt = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (gr(r), Ye === 0) {
              var P = N.current;
              P !== null && (Vr(P), N.current = null);
              var A = {
                then: function(F, V) {
                  N.current === null ? (N.current = [], Nr(E, F, V)) : F(E);
                }
              };
              return A;
            } else {
              var x = {
                then: function(F, V) {
                  F(E);
                }
              };
              return x;
            }
          }
        }
      }
      function gr(e) {
        e !== Ye - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ye = e;
      }
      function Nr(e, r, a) {
        {
          var o = N.current;
          if (o !== null)
            try {
              Vr(o), Ft(function() {
                o.length === 0 ? (N.current = null, r(e)) : Nr(e, r, a);
              });
            } catch (c) {
              a(c);
            }
          else
            r(e);
        }
      }
      var Wr = !1;
      function Vr(e) {
        if (!Wr) {
          Wr = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Wr = !1;
          }
        }
      }
      var $t = ut, Mt = Dt, Lt = xt, Nt = {
        map: Ie,
        forEach: sr,
        count: Pr,
        toArray: kr,
        only: cr
      };
      p.Children = Nt, p.Component = b, p.Fragment = U, p.Profiler = H, p.PureComponent = C, p.StrictMode = X, p.Suspense = Y, p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, p.act = ft, p.cloneElement = Mt, p.createContext = lr, p.createElement = $t, p.createFactory = Lt, p.createRef = br, p.forwardRef = xr, p.isValidElement = Re, p.lazy = Ar, p.memo = i, p.startTransition = It, p.unstable_act = ft, p.useCallback = $, p.useContext = v, p.useDebugValue = ge, p.useDeferredValue = Ge, p.useEffect = h, p.useId = Dr, p.useImperativeHandle = Ce, p.useInsertionEffect = z, p.useLayoutEffect = I, p.useMemo = re, p.useReducer = S, p.useRef = _, p.useState = w, p.useSyncExternalStore = Ir, p.useTransition = G, p.version = le, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ze, Ze.exports)), Ze.exports;
}
process.env.NODE_ENV === "production" ? Br.exports = Yt() : Br.exports = Bt();
var Be = Br.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mt;
function zt() {
  if (mt) return Xe;
  mt = 1;
  var j = Be, p = Symbol.for("react.element"), le = Symbol.for("react.fragment"), J = Object.prototype.hasOwnProperty, te = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, U = { key: !0, ref: !0, __self: !0, __source: !0 };
  function X(H, M, ne) {
    var L, Y = {}, ae = null, Z = null;
    ne !== void 0 && (ae = "" + ne), M.key !== void 0 && (ae = "" + M.key), M.ref !== void 0 && (Z = M.ref);
    for (L in M) J.call(M, L) && !U.hasOwnProperty(L) && (Y[L] = M[L]);
    if (H && H.defaultProps) for (L in M = H.defaultProps, M) Y[L] === void 0 && (Y[L] = M[L]);
    return { $$typeof: p, type: H, key: ae, ref: Z, props: Y, _owner: te.current };
  }
  return Xe.Fragment = le, Xe.jsx = X, Xe.jsxs = X, Xe;
}
var Qe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gt;
function qt() {
  return gt || (gt = 1, process.env.NODE_ENV !== "production" && function() {
    var j = Be, p = Symbol.for("react.element"), le = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), U = Symbol.for("react.profiler"), X = Symbol.for("react.provider"), H = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), ne = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), Y = Symbol.for("react.memo"), ae = Symbol.for("react.lazy"), Z = Symbol.for("react.offscreen"), fe = Symbol.iterator, $e = "@@iterator";
    function ie(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = fe && t[fe] || t[$e];
      return typeof i == "function" ? i : null;
    }
    var ue = j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function D(t) {
      {
        for (var i = arguments.length, s = new Array(i > 1 ? i - 1 : 0), v = 1; v < i; v++)
          s[v - 1] = arguments[v];
        _e("error", t, s);
      }
    }
    function _e(t, i, s) {
      {
        var v = ue.ReactDebugCurrentFrame, w = v.getStackAddendum();
        w !== "" && (i += "%s", s = s.concat([w]));
        var S = s.map(function(_) {
          return String(_);
        });
        S.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var se = !1, N = !1, Q = !1, de = !1, ye = !1, Se;
    Se = Symbol.for("react.module.reference");
    function Te(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === J || t === U || ye || t === te || t === ne || t === L || de || t === Z || se || N || Q || typeof t == "object" && t !== null && (t.$$typeof === ae || t.$$typeof === Y || t.$$typeof === X || t.$$typeof === H || t.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Se || t.getModuleId !== void 0));
    }
    function ze(t, i, s) {
      var v = t.displayName;
      if (v)
        return v;
      var w = i.displayName || i.name || "";
      return w !== "" ? s + "(" + w + ")" : s;
    }
    function Oe(t) {
      return t.displayName || "Context";
    }
    function K(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && D("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case J:
          return "Fragment";
        case le:
          return "Portal";
        case U:
          return "Profiler";
        case te:
          return "StrictMode";
        case ne:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case H:
            var i = t;
            return Oe(i) + ".Consumer";
          case X:
            var s = t;
            return Oe(s._context) + ".Provider";
          case M:
            return ze(t, t.render, "ForwardRef");
          case Y:
            var v = t.displayName || null;
            return v !== null ? v : K(t.type) || "Memo";
          case ae: {
            var w = t, S = w._payload, _ = w._init;
            try {
              return K(_(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ee = Object.assign, B = 0, ce, f, ve, Pe, he, n, u;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function b() {
      {
        if (B === 0) {
          ce = console.log, f = console.info, ve = console.warn, Pe = console.error, he = console.group, n = console.groupCollapsed, u = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: g,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        B++;
      }
    }
    function R() {
      {
        if (B--, B === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ee({}, t, {
              value: ce
            }),
            info: ee({}, t, {
              value: f
            }),
            warn: ee({}, t, {
              value: ve
            }),
            error: ee({}, t, {
              value: Pe
            }),
            group: ee({}, t, {
              value: he
            }),
            groupCollapsed: ee({}, t, {
              value: n
            }),
            groupEnd: ee({}, t, {
              value: u
            })
          });
        }
        B < 0 && D("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = ue.ReactCurrentDispatcher, O;
    function T(t, i, s) {
      {
        if (O === void 0)
          try {
            throw Error();
          } catch (w) {
            var v = w.stack.trim().match(/\n( *(at )?)/);
            O = v && v[1] || "";
          }
        return `
` + O + t;
      }
    }
    var C = !1, W;
    {
      var br = typeof WeakMap == "function" ? WeakMap : Map;
      W = new br();
    }
    function er(t, i) {
      if (!t || C)
        return "";
      {
        var s = W.get(t);
        if (s !== void 0)
          return s;
      }
      var v;
      C = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, b();
      try {
        if (i) {
          var _ = function() {
            throw Error();
          };
          if (Object.defineProperty(_.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(_, []);
            } catch (G) {
              v = G;
            }
            Reflect.construct(t, [], _);
          } else {
            try {
              _.call();
            } catch (G) {
              v = G;
            }
            t.call(_.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            v = G;
          }
          t();
        }
      } catch (G) {
        if (G && v && typeof G.stack == "string") {
          for (var h = G.stack.split(`
`), z = v.stack.split(`
`), I = h.length - 1, $ = z.length - 1; I >= 1 && $ >= 0 && h[I] !== z[$]; )
            $--;
          for (; I >= 1 && $ >= 0; I--, $--)
            if (h[I] !== z[$]) {
              if (I !== 1 || $ !== 1)
                do
                  if (I--, $--, $ < 0 || h[I] !== z[$]) {
                    var re = `
` + h[I].replace(" at new ", " at ");
                    return t.displayName && re.includes("<anonymous>") && (re = re.replace("<anonymous>", t.displayName)), typeof t == "function" && W.set(t, re), re;
                  }
                while (I >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        C = !1, k.current = S, R(), Error.prepareStackTrace = w;
      }
      var Ce = t ? t.displayName || t.name : "", ge = Ce ? T(Ce) : "";
      return typeof t == "function" && W.set(t, ge), ge;
    }
    function Me(t, i, s) {
      return er(t, !1);
    }
    function Er(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function Le(t, i, s) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return er(t, Er(t));
      if (typeof t == "string")
        return T(t);
      switch (t) {
        case ne:
          return T("Suspense");
        case L:
          return T("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case M:
            return Me(t.render);
          case Y:
            return Le(t.type, i, s);
          case ae: {
            var v = t, w = v._payload, S = v._init;
            try {
              return Le(S(w), i, s);
            } catch {
            }
          }
        }
      return "";
    }
    var be = Object.prototype.hasOwnProperty, ke = {}, rr = ue.ReactDebugCurrentFrame;
    function je(t) {
      if (t) {
        var i = t._owner, s = Le(t.type, t._source, i ? i.type : null);
        rr.setExtraStackFrame(s);
      } else
        rr.setExtraStackFrame(null);
    }
    function pe(t, i, s, v, w) {
      {
        var S = Function.call.bind(be);
        for (var _ in t)
          if (S(t, _)) {
            var h = void 0;
            try {
              if (typeof t[_] != "function") {
                var z = Error((v || "React class") + ": " + s + " type `" + _ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[_] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw z.name = "Invariant Violation", z;
              }
              h = t[_](i, _, v, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              h = I;
            }
            h && !(h instanceof Error) && (je(w), D("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", v || "React class", s, _, typeof h), je(null)), h instanceof Error && !(h.message in ke) && (ke[h.message] = !0, je(w), D("Failed %s type: %s", s, h.message), je(null));
          }
      }
    }
    var Ae = Array.isArray;
    function Ne(t) {
      return Ae(t);
    }
    function tr(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, s = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return s;
      }
    }
    function nr(t) {
      try {
        return We(t), !1;
      } catch {
        return !0;
      }
    }
    function We(t) {
      return "" + t;
    }
    function qe(t) {
      if (nr(t))
        return D("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(t)), We(t);
    }
    var Ee = ue.ReactCurrentOwner, Rr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ar, or, xe;
    xe = {};
    function wr(t) {
      if (be.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Cr(t) {
      if (be.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Sr(t, i) {
      if (typeof t.ref == "string" && Ee.current && i && Ee.current.stateNode !== i) {
        var s = K(Ee.current.type);
        xe[s] || (D('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(Ee.current.type), t.ref), xe[s] = !0);
      }
    }
    function Re(t, i) {
      {
        var s = function() {
          ar || (ar = !0, D("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ir(t, i) {
      {
        var s = function() {
          or || (or = !0, D("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        s.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var Tr = function(t, i, s, v, w, S, _) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: p,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: s,
        props: _,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function Or(t, i, s, v, w) {
      {
        var S, _ = {}, h = null, z = null;
        s !== void 0 && (qe(s), h = "" + s), Cr(i) && (qe(i.key), h = "" + i.key), wr(i) && (z = i.ref, Sr(i, w));
        for (S in i)
          be.call(i, S) && !Rr.hasOwnProperty(S) && (_[S] = i[S]);
        if (t && t.defaultProps) {
          var I = t.defaultProps;
          for (S in I)
            _[S] === void 0 && (_[S] = I[S]);
        }
        if (h || z) {
          var $ = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          h && Re(_, $), z && ir(_, $);
        }
        return Tr(t, h, z, w, v, Ee.current, _);
      }
    }
    var Ve = ue.ReactCurrentOwner, ur = ue.ReactDebugCurrentFrame;
    function me(t) {
      if (t) {
        var i = t._owner, s = Le(t.type, t._source, i ? i.type : null);
        ur.setExtraStackFrame(s);
      } else
        ur.setExtraStackFrame(null);
    }
    var De;
    De = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === p;
    }
    function Ie() {
      {
        if (Ve.current) {
          var t = K(Ve.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Pr(t) {
      return "";
    }
    var sr = {};
    function kr(t) {
      {
        var i = Ie();
        if (!i) {
          var s = typeof t == "string" ? t : t.displayName || t.name;
          s && (i = `

Check the top-level render call using <` + s + ">.");
        }
        return i;
      }
    }
    function cr(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var s = kr(i);
        if (sr[s])
          return;
        sr[s] = !0;
        var v = "";
        t && t._owner && t._owner !== Ve.current && (v = " It was passed a child from " + K(t._owner.type) + "."), me(t), D('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, v), me(null);
      }
    }
    function lr(t, i) {
      {
        if (typeof t != "object")
          return;
        if (Ne(t))
          for (var s = 0; s < t.length; s++) {
            var v = t[s];
            we(v) && cr(v, i);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var w = ie(t);
          if (typeof w == "function" && w !== t.entries)
            for (var S = w.call(t), _; !(_ = S.next()).done; )
              we(_.value) && cr(_.value, i);
        }
      }
    }
    function Fe(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var s;
        if (typeof i == "function")
          s = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === Y))
          s = i.propTypes;
        else
          return;
        if (s) {
          var v = K(i);
          pe(s, t.props, "prop", v, t);
        } else if (i.PropTypes !== void 0 && !De) {
          De = !0;
          var w = K(i);
          D("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && D("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function He(t) {
      {
        for (var i = Object.keys(t.props), s = 0; s < i.length; s++) {
          var v = i[s];
          if (v !== "children" && v !== "key") {
            me(t), D("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", v), me(null);
            break;
          }
        }
        t.ref !== null && (me(t), D("Invalid attribute `ref` supplied to `React.Fragment`."), me(null));
      }
    }
    var Ke = {};
    function fr(t, i, s, v, w, S) {
      {
        var _ = Te(t);
        if (!_) {
          var h = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var z = Pr();
          z ? h += z : h += Ie();
          var I;
          t === null ? I = "null" : Ne(t) ? I = "array" : t !== void 0 && t.$$typeof === p ? (I = "<" + (K(t.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : I = typeof t, D("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, h);
        }
        var $ = Or(t, i, s, w, S);
        if ($ == null)
          return $;
        if (_) {
          var re = i.children;
          if (re !== void 0)
            if (v)
              if (Ne(re)) {
                for (var Ce = 0; Ce < re.length; Ce++)
                  lr(re[Ce], t);
                Object.freeze && Object.freeze(re);
              } else
                D("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr(re, t);
        }
        if (be.call(i, "key")) {
          var ge = K(t), G = Object.keys(i).filter(function(Ir) {
            return Ir !== "key";
          }), Ge = G.length > 0 ? "{key: someKey, " + G.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[ge + Ge]) {
            var Dr = G.length > 0 ? "{" + G.join(": ..., ") + ": ...}" : "{}";
            D(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ge, ge, Dr, ge), Ke[ge + Ge] = !0;
          }
        }
        return t === J ? He($) : Fe($), $;
      }
    }
    function jr(t, i, s) {
      return fr(t, i, s, !0);
    }
    function Ar(t, i, s) {
      return fr(t, i, s, !1);
    }
    var xr = Ar, dr = jr;
    Qe.Fragment = J, Qe.jsx = xr, Qe.jsxs = dr;
  }()), Qe;
}
process.env.NODE_ENV === "production" ? Yr.exports = zt() : Yr.exports = qt();
var oe = Yr.exports;
const Ht = () => /* @__PURE__ */ oe.jsx(
  "svg",
  {
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "bi bi-circle-half",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ oe.jsx("path", { d: "M8 15A7 7 0 1 0 8 1zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16" })
  }
), Kt = () => /* @__PURE__ */ oe.jsx(
  "svg",
  {
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "bi bi-moon",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ oe.jsx("path", { d: "M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" })
  }
), Gt = () => /* @__PURE__ */ oe.jsx(
  "svg",
  {
    width: "20",
    height: "20",
    fill: "currentColor",
    viewBox: "0 0 16 16",
    className: "bi bi-sun",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ oe.jsx("path", { d: "M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" })
  }
), _t = "theme", bt = ["light", "dark", "auto"], Et = "(prefers-color-scheme: dark)", Jt = () => {
  const [j, p] = Be.useState(0), [le, J] = Be.useState(0);
  Be.useEffect(() => {
    const U = Number(sessionStorage.getItem(_t));
    Number.isInteger(U) && p(U);
    const X = () => {
      J(window.matchMedia(Et).matches ? 1 : 0);
    };
    X();
    const H = window.matchMedia(Et);
    return H.addEventListener("change", X), () => {
      H.removeEventListener("change", X);
    };
  }, []), Be.useEffect(() => {
    document.documentElement.setAttribute(
      "data-bs-theme",
      bt[j === 2 ? le : j]
    );
  }, [j, le]);
  let te = /* @__PURE__ */ oe.jsx(Gt, {});
  return j === 1 ? te = /* @__PURE__ */ oe.jsx(Kt, {}) : j === 2 && (te = /* @__PURE__ */ oe.jsx(Ht, {})), /* @__PURE__ */ oe.jsx(
    "button",
    {
      type: "button",
      title: bt[j],
      "data-testid": "theme-button",
      className: "nav-link text-secondary text-white",
      onClick: () => {
        const U = (j + 1) % 3;
        sessionStorage.setItem(_t, U), p(U);
      },
      children: te
    }
  );
}, Xt = () => /* @__PURE__ */ oe.jsxs("div", { className: "alert alert-danger", children: [
  /* @__PURE__ */ oe.jsx("h1", { children: "Hello World" }),
  /* @__PURE__ */ oe.jsx("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto iste similique laborum error veniam, hic est sint debitis adipisci quas fuga, nobis vitae quaerat animi dignissimos consectetur eius quidem labore." })
] });
function Qt(j) {
  console.log(`Hello, ${j}!`);
}
function Zt(j) {
  console.log("Hello World!");
}
const en = () => console.log("Hello World!");
export {
  Xt as Hello,
  Jt as ThemeButton,
  Qt as greet,
  en as sayHello,
  Zt as sayHello2
};
