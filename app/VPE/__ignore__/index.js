import {g as oe, j as V} from "./polarisPage-aa79ae3b2aacef6bdd47fa238fbb0a6fca17feac.1.js";
import {d as te, v as ne, D as M, a as $, e as ce, f as le, h as fe, p as Q} from "./useShopPlan-aa79ae3b2aacef6bdd47fa238fbb0a6fca17feac.1.js";
import {t as h, x as N, _ as w, v as ve, A as O, y as A, O as de, z as F, D as U, E as H, F as X, G as pe} from "./main-aa79ae3b2aacef6bdd47fa238fbb0a6fca17feac.1.js";
import {k as he, e as be, Q as me} from "./production-aa79ae3b2aacef6bdd47fa238fbb0a6fca17feac.1.js";
function ye(r, e) {
    var n = h.useRef(void 0);
    return (!n.current || !N(n.current.deps, e)) && (n.current = {
        value: r(),
        deps: e
    }),
    n.current.value
}
function ge(r, e) {
    var n = te(e?.client);
    ne(r, M.Mutation);
    var t = h.useState({
        called: !1,
        loading: !1,
        client: n
    })
      , i = t[0]
      , v = t[1]
      , a = h.useRef({
        result: i,
        mutationId: 0,
        isMounted: !0,
        client: n,
        mutation: r,
        options: e
    });
    $(function() {
        Object.assign(a.current, {
            client: n,
            options: e,
            mutation: r
        })
    });
    var d = h.useCallback(function(c) {
        c === void 0 && (c = {});
        var b = a.current
          , m = b.options
          , p = b.mutation
          , y = w(w({}, m), {
            mutation: p
        })
          , l = c.client || a.current.client;
        !a.current.result.loading && !y.ignoreResults && a.current.isMounted && v(a.current.result = {
            loading: !0,
            error: void 0,
            data: void 0,
            called: !0,
            client: l
        });
        var D = ++a.current.mutationId
          , g = ve(y, c);
        return l.mutate(g).then(function(u) {
            var o, f, _ = u.data, S = u.errors, P = S && S.length > 0 ? new O({
                graphQLErrors: S
            }) : void 0, T = c.onError || ((o = a.current.options) === null || o === void 0 ? void 0 : o.onError);
            if (P && T && T(P, g),
            D === a.current.mutationId && !g.ignoreResults) {
                var E = {
                    called: !0,
                    loading: !1,
                    data: _,
                    error: P,
                    client: l
                };
                a.current.isMounted && !N(a.current.result, E) && v(a.current.result = E)
            }
            var j = c.onCompleted || ((f = a.current.options) === null || f === void 0 ? void 0 : f.onCompleted);
            return P || j?.(u.data, g),
            u
        }).catch(function(u) {
            var o;
            if (D === a.current.mutationId && a.current.isMounted) {
                var f = {
                    loading: !1,
                    error: u,
                    data: void 0,
                    called: !0,
                    client: l
                };
                N(a.current.result, f) || v(a.current.result = f)
            }
            var _ = c.onError || ((o = a.current.options) === null || o === void 0 ? void 0 : o.onError);
            if (_)
                return _(u, g),
                {
                    data: void 0,
                    errors: u
                };
            throw u
        })
    }, [])
      , R = h.useCallback(function() {
        if (a.current.isMounted) {
            var c = {
                called: !1,
                loading: !1,
                client: a.current.client
            };
            Object.assign(a.current, {
                mutationId: 0,
                result: c
            }),
            v(c)
        }
    }, []);
    return h.useEffect(function() {
        var c = a.current;
        return c.isMounted = !0,
        function() {
            c.isMounted = !1
        }
    }, []),
    [d, w({
        reset: R
    }, i)]
}
function Re(r, e) {
    e === void 0 && (e = Object.create(null));
    var n = h.useRef(!1)
      , t = te(e.client);
    ne(r, M.Subscription),
    n.current || (n.current = !0,
    e.onSubscriptionData && globalThis.__DEV__ !== !1 && A.warn(e.onData ? 61 : 62),
    e.onSubscriptionComplete && globalThis.__DEV__ !== !1 && A.warn(e.onComplete ? 63 : 64));
    var i = e.skip
      , v = e.fetchPolicy
      , a = e.errorPolicy
      , d = e.shouldResubscribe
      , R = e.context
      , c = e.extensions
      , b = e.ignoreResults
      , m = ye(function() {
        return e.variables
    }, [e.variables])
      , p = function() {
        return _e(t, r, m, v, a, R, c)
    }
      , y = h.useState(e.skip ? null : p)
      , l = y[0]
      , D = y[1]
      , g = h.useRef(p);
    $(function() {
        g.current = p
    }),
    i ? l && D(l = null) : (!l || (t !== l.__.client || r !== l.__.query || v !== l.__.fetchPolicy || a !== l.__.errorPolicy || !N(m, l.__.variables)) && (typeof d == "function" ? !!d(e) : d) !== !1) && D(l = p());
    var u = h.useRef(e);
    h.useEffect(function() {
        u.current = e
    });
    var o = !i && !b
      , f = h.useMemo(function() {
        return {
            loading: o,
            error: void 0,
            data: void 0,
            variables: m
        }
    }, [o, m])
      , _ = h.useRef(b);
    $(function() {
        _.current = b
    });
    var S = ce(h.useCallback(function(T) {
        if (!l)
            return function() {}
            ;
        var E = !1
          , j = l.__.variables
          , x = l.__.client
          , C = l.subscribe({
            next: function(k) {
                var q, I;
                if (!E) {
                    var L = {
                        loading: !1,
                        data: k.data,
                        error: le(k),
                        variables: j
                    };
                    l.__.setResult(L),
                    _.current || T(),
                    L.error ? (I = (q = u.current).onError) === null || I === void 0 || I.call(q, L.error) : u.current.onData ? u.current.onData({
                        client: x,
                        data: L
                    }) : u.current.onSubscriptionData && u.current.onSubscriptionData({
                        client: x,
                        subscriptionData: L
                    })
                }
            },
            error: function(k) {
                var q, I;
                k = k instanceof O ? k : new O({
                    protocolErrors: [k]
                }),
                E || (l.__.setResult({
                    loading: !1,
                    data: void 0,
                    error: k,
                    variables: j
                }),
                _.current || T(),
                (I = (q = u.current).onError) === null || I === void 0 || I.call(q, k))
            },
            complete: function() {
                E || (u.current.onComplete ? u.current.onComplete() : u.current.onSubscriptionComplete && u.current.onSubscriptionComplete())
            }
        });
        return function() {
            E = !0,
            setTimeout(function() {
                C.unsubscribe()
            })
        }
    }, [l]), function() {
        return l && !i && !b ? l.__.result : f
    }, function() {
        return f
    })
      , P = h.useCallback(function() {
        A(!u.current.skip, 65),
        D(g.current())
    }, [u, g]);
    return h.useMemo(function() {
        return w(w({}, S), {
            restart: P
        })
    }, [S, P])
}
function _e(r, e, n, t, i, v, a) {
    var d = {
        query: e,
        variables: n,
        fetchPolicy: t,
        errorPolicy: i,
        context: v,
        extensions: a
    }
      , R = w(w({}, d), {
        client: r,
        result: {
            loading: !0,
            data: void 0,
            error: void 0,
            variables: n
        },
        setResult: function(b) {
            R.result = b
        }
    })
      , c = null;
    return Object.assign(new de(function(b) {
        c || (c = r.subscribe(d));
        var m = c.subscribe(b);
        return function() {
            return m.unsubscribe()
        }
    }
    ), {
        __: R
    })
}
var W = {
    exports: {}
}, G, Z;
function Pe() {
    if (Z)
        return G;
    Z = 1;
    var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return G = r,
    G
}
var B, ee;
function Se() {
    if (ee)
        return B;
    ee = 1;
    var r = Pe();
    function e() {}
    function n() {}
    return n.resetWarningCache = e,
    B = function() {
        function t(a, d, R, c, b, m) {
            if (m !== r) {
                var p = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw p.name = "Invariant Violation",
                p
            }
        }
        t.isRequired = t;
        function i() {
            return t
        }
        var v = {
            array: t,
            bigint: t,
            bool: t,
            func: t,
            number: t,
            object: t,
            string: t,
            symbol: t,
            any: t,
            arrayOf: i,
            element: t,
            elementType: t,
            instanceOf: i,
            node: t,
            objectOf: i,
            oneOf: i,
            oneOfType: i,
            shape: i,
            exact: i,
            checkPropTypes: n,
            resetWarningCache: e
        };
        return v.PropTypes = v,
        v
    }
    ,
    B
}
var re;
function Te() {
    return re || (re = 1,
    W.exports = Se()()),
    W.exports
}
var s = Te();
const Ae = oe(s);
var Ee = {
    Divider: "Polaris-Divider"
};
const Ne = r => {
    let {borderColor: e="border-secondary", borderWidth: n="025"} = r;
    const t = e === "transparent" ? e : `var(--p-color-${e})`;
    return V.jsx("hr", {
        className: Ee.Divider,
        style: {
            borderBlockStart: `var(--p-border-width-${n}) solid ${t}`
        }
    })
}
;
function ae(r) {
    var e = r.children
      , n = r.query
      , t = F(r, ["children", "query"])
      , i = fe(n, t);
    return i ? e(i) : null
}
ae.propTypes = {
    client: s.object,
    children: s.func.isRequired,
    fetchPolicy: s.string,
    notifyOnNetworkStatusChange: s.bool,
    onCompleted: s.func,
    onError: s.func,
    pollInterval: s.number,
    query: s.object.isRequired,
    variables: s.object,
    ssr: s.bool,
    partialRefetch: s.bool,
    returnPartialData: s.bool
};
function ie(r) {
    var e = ge(r.mutation, r)
      , n = e[0]
      , t = e[1];
    return r.children ? r.children(n, t) : null
}
ie.propTypes = {
    mutation: s.object.isRequired,
    variables: s.object,
    optimisticResponse: s.oneOfType([s.object, s.func]),
    refetchQueries: s.oneOfType([s.arrayOf(s.oneOfType([s.string, s.object])), s.func]),
    awaitRefetchQueries: s.bool,
    update: s.func,
    children: s.func.isRequired,
    onCompleted: s.func,
    onError: s.func,
    fetchPolicy: s.string
};
function se(r) {
    var e = Re(r.subscription, r);
    return r.children && e ? r.children(e) : null
}
se.propTypes = {
    subscription: s.object.isRequired,
    variables: s.object,
    children: s.func,
    onSubscriptionData: s.func,
    onData: s.func,
    onSubscriptionComplete: s.func,
    onComplete: s.func,
    shouldResubscribe: s.oneOfType([s.func, s.bool])
};
var z = function() {
    return {}
}
  , ue = function() {
    return !1
};
function Y(r) {
    return r.displayName || r.name || "Component"
}
function J(r, e) {
    for (var n = {}, t = 0, i = r.variables; t < i.length; t++) {
        var v = i[t]
          , a = v.variable
          , d = v.type;
        if (!(!a.name || !a.name.value)) {
            var R = a.name.value
              , c = e[R];
            if (typeof c < "u") {
                n[R] = c;
                continue
            }
            d.kind !== "NonNullType" && (n[R] = void 0)
        }
    }
    return n
}
var K = function(r) {
    U(e, r);
    function e(n) {
        var t = r.call(this, n) || this;
        return t.withRef = !1,
        t.setWrappedInstance = t.setWrappedInstance.bind(t),
        t
    }
    return e.prototype.getWrappedInstance = function() {
        return A(this.withRef, 56),
        this.wrappedInstance
    }
    ,
    e.prototype.setWrappedInstance = function(n) {
        this.wrappedInstance = n
    }
    ,
    e
}(h.Component);
function we(r, e) {
    e === void 0 && (e = {});
    var n = Q(r)
      , t = e.options
      , i = t === void 0 ? z : t
      , v = e.skip
      , a = v === void 0 ? ue : v
      , d = e.alias
      , R = d === void 0 ? "Apollo" : d
      , c = i;
    typeof c != "function" && (c = function() {
        return i
    }
    );
    var b = a;
    typeof b != "function" && (b = function() {
        return a
    }
    );
    var m;
    return function(p) {
        var y = "".concat(R, "(").concat(Y(p), ")")
          , l = function(D) {
            U(g, D);
            function g() {
                return D !== null && D.apply(this, arguments) || this
            }
            return g.prototype.render = function() {
                var u = this
                  , o = this.props
                  , f = b(o)
                  , _ = f ? Object.create(null) : w({}, c(o));
                return !f && !_.variables && n.variables.length > 0 && (_.variables = J(n, o)),
                h.createElement(ae, w({}, _, {
                    displayName: y,
                    skip: f,
                    query: r
                }), function(S) {
                    var P, T;
                    S.client;
                    var E = S.data
                      , j = F(S, ["client", "data"]);
                    if (e.withRef && (u.withRef = !0,
                    o = Object.assign({}, o, {
                        ref: u.setWrappedInstance
                    })),
                    f)
                        return h.createElement(p, w({}, o, {}));
                    var x = Object.assign(j, E || {})
                      , C = e.name || "data"
                      , k = (P = {},
                    P[C] = x,
                    P);
                    if (e.props) {
                        var q = (T = {},
                        T[C] = x,
                        T.ownProps = o,
                        T);
                        m = e.props(q, m),
                        k = m
                    }
                    return h.createElement(p, w({}, o, k))
                })
            }
            ,
            g.displayName = y,
            g.WrappedComponent = p,
            g
        }(K);
        return H(l, p, {})
    }
}
function De(r, e) {
    e === void 0 && (e = {});
    var n = Q(r)
      , t = e.options
      , i = t === void 0 ? z : t
      , v = e.alias
      , a = v === void 0 ? "Apollo" : v
      , d = i;
    return typeof d != "function" && (d = function() {
        return i
    }
    ),
    function(R) {
        var c = "".concat(a, "(").concat(Y(R), ")")
          , b = function(m) {
            U(p, m);
            function p() {
                return m !== null && m.apply(this, arguments) || this
            }
            return p.prototype.render = function() {
                var y = this.props
                  , l = d(y);
                return e.withRef && (this.withRef = !0,
                y = Object.assign({}, y, {
                    ref: this.setWrappedInstance
                })),
                !l.variables && n.variables.length > 0 && (l.variables = J(n, y)),
                h.createElement(ie, w({
                    ignoreResults: !0
                }, l, {
                    mutation: r
                }), function(D, g) {
                    var u, o, f = g.data, _ = F(g, ["data"]), S = Object.assign(_, f || {}), P = e.name || "mutate", T = e.name ? "".concat(P, "Result") : "result", E = (u = {},
                    u[P] = D,
                    u[T] = S,
                    u);
                    if (e.props) {
                        var j = (o = {},
                        o[P] = D,
                        o[T] = S,
                        o.ownProps = y,
                        o);
                        E = e.props(j)
                    }
                    return h.createElement(R, w({}, y, E))
                })
            }
            ,
            p.displayName = c,
            p.WrappedComponent = R,
            p
        }(K);
        return H(b, R, {})
    }
}
function ke(r, e) {
    e === void 0 && (e = {});
    var n = Q(r)
      , t = e.options
      , i = t === void 0 ? z : t
      , v = e.skip
      , a = v === void 0 ? ue : v
      , d = e.alias
      , R = d === void 0 ? "Apollo" : d
      , c = e.shouldResubscribe
      , b = i;
    typeof b != "function" && (b = function() {
        return i
    }
    );
    var m = a;
    typeof m != "function" && (m = function() {
        return a
    }
    );
    var p;
    return function(y) {
        var l = "".concat(R, "(").concat(Y(y), ")")
          , D = function(g) {
            U(u, g);
            function u(o) {
                var f = g.call(this, o) || this;
                return f.state = {
                    resubscribe: !1
                },
                f
            }
            return u.prototype.updateResubscribe = function(o) {
                this.setState({
                    resubscribe: o
                })
            }
            ,
            u.prototype.componentDidUpdate = function(o) {
                var f = !!(c && c(o, this.props));
                this.state.resubscribe !== f && this.updateResubscribe(f)
            }
            ,
            u.prototype.render = function() {
                var o = this
                  , f = this.props
                  , _ = m(f)
                  , S = _ ? Object.create(null) : b(f);
                return !_ && !S.variables && n.variables.length > 0 && (S.variables = J(n, f)),
                h.createElement(se, w({}, S, {
                    displayName: l,
                    skip: _,
                    subscription: r,
                    shouldResubscribe: this.state.resubscribe
                }), function(P) {
                    var T, E, j = P.data, x = F(P, ["data"]);
                    if (e.withRef && (o.withRef = !0,
                    f = Object.assign({}, f, {
                        ref: o.setWrappedInstance
                    })),
                    _)
                        return h.createElement(y, w({}, f, {}));
                    var C = Object.assign(x, j || {})
                      , k = e.name || "data"
                      , q = (T = {},
                    T[k] = C,
                    T);
                    if (e.props) {
                        var I = (E = {},
                        E[k] = C,
                        E.ownProps = f,
                        E);
                        p = e.props(I, p),
                        q = p
                    }
                    return h.createElement(y, w({}, f, q))
                })
            }
            ,
            u.displayName = l,
            u.WrappedComponent = y,
            u
        }(K);
        return H(D, y, {})
    }
}
function je(r, e) {
    switch (e === void 0 && (e = {}),
    Q(r).type) {
    case M.Mutation:
        return De(r, e);
    case M.Subscription:
        return ke(r, e);
    case M.Query:
    default:
        return we(r, e)
    }
}
const Qe = je;
function Fe(r) {
    return !!r.error
}
function qe() {
    let {enabled: r} = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {
        enabled: !0
    };
    const {app: e} = he();
    return be.useMemo( () => {
        const n = r ? X.authenticatedFetch(e, fetch) : fetch;
        return async function(t) {
            let i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            const v = await n(t, i);
            if (v.status === 401) {
                const a = await X.getAuthorizationCodePayload(e)
                  , d = Ie(t);
                return d.searchParams.set(pe, JSON.stringify({
                    code: a.code,
                    hmac: a.hmac,
                    shop: a.shop,
                    timestamp: a.timestamp
                })),
                t instanceof URL ? n(d, i) : t instanceof Request ? n(new Request(d,t), i) : n(d.toString(), i)
            }
            return Promise.resolve(v)
        }
    }
    , [e, r])
}
function Ie(r) {
    return r instanceof URL ? r : r instanceof Request ? new URL(r.url,location.origin) : new URL(r,location.origin)
}
function Ue(r) {
    return function(n) {
        return function(i) {
            const v = qe(r);
            return V.jsx(n, {
                ...i,
                authenticatedFetch: v
            })
        }
    }
}
function We() {
    return function(e) {
        return function(t) {
            const i = me();
            return V.jsx(e, {
                ...t,
                shop: i
            })
        }
    }
}
function Ge(r) {
    let e = 1;
    return () => `${r}${e++}`
}
export {Ne as D, Ae as P, Ue as a, Ge as c, Fe as d, Qe as g, qe as u, We as w};
//# sourceMappingURL=index-aa79ae3b2aacef6bdd47fa238fbb0a6fca17feac.13.js.map
