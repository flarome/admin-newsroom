import {R as y, e as _, u as lt, o as De, p as H, B as ct, J as qt, T as Q, b0 as Zt, $ as Kt, bc as Ne, b6 as _e, b5 as Gt, v as $e, a2 as Jt, an as Xt, F as Ce, G as s, K as Se, ak as Yt, S as ut, k as en, _ as dt, aD as tn, aE as nn, m as We, x as fe, ax as Je, aH as rn, aT as He, aZ as on, aI as an, N as sn, au as ln} from "./DesignSystemProvider-5ffcac3922b57e708db37c9792b724629bac1046.1.js";
import {v as S, I as _t, z as U, ae as cn, af as un, ag as dn, ah as _n, ai as fn, aj as pn, _ as B, A as ft, ak as pt, D as mt, y as Qe, al as gt, am as mn, w as gn, an as pe, K as vn, J as Ve, ao as hn, ap as Fe, aq as bn} from "./main-5ffcac3922b57e708db37c9792b724629bac1046.1.js";
import {j as c} from "./PolarisPage.js";
import {I as En, M as vt} from "./hook.js";
import {u as yn} from "./query.js";
function Xo(e, t) {
    const n = y.useRef(e);
    _.useEffect( () => {
        const r = n.current;
        e !== n.current && (n.current = e,
        t(e, r))
    }
    , [e, t])
}
function Yo(e) {
    const [t,n] = _.useState(e);
    return {
        value: t,
        toggle: _.useCallback( () => n(r => !r), []),
        setTrue: _.useCallback( () => n(!0), []),
        setFalse: _.useCallback( () => n(!1), [])
    }
}
function ht(e) {
    var t = S.useContext(_t())
      , n = e || t.client;
    return U(!!n, 58),
    n
}
var Xe = !1
  , Pn = "useSyncExternalStore"
  , On = cn[Pn]
  , In = On || function(e, t, n) {
    var r = t();
    globalThis.__DEV__ !== !1 && !Xe && r !== t() && (Xe = !0,
    globalThis.__DEV__ !== !1 && U.error(68));
    var o = S.useState({
        inst: {
            value: r,
            getSnapshot: t
        }
    })
      , a = o[0].inst
      , l = o[1];
    return un ? S.useLayoutEffect(function() {
        Object.assign(a, {
            value: r,
            getSnapshot: t
        }),
        ze(a) && l({
            inst: a
        })
    }, [e, r, t]) : Object.assign(a, {
        value: r,
        getSnapshot: t
    }),
    S.useEffect(function() {
        return ze(a) && l({
            inst: a
        }),
        e(function() {
            ze(a) && l({
                inst: a
            })
        })
    }, [e]),
    r
}
;
function ze(e) {
    var t = e.value
      , n = e.getSnapshot;
    try {
        return t !== n()
    } catch {
        return !0
    }
}
var x;
(function(e) {
    e[e.Query = 0] = "Query",
    e[e.Mutation = 1] = "Mutation",
    e[e.Subscription = 2] = "Subscription"
}
)(x || (x = {}));
var W;
function Ye(e) {
    var t;
    switch (e) {
    case x.Query:
        t = "Query";
        break;
    case x.Mutation:
        t = "Mutation";
        break;
    case x.Subscription:
        t = "Subscription";
        break
    }
    return t
}
function bt(e) {
    W || (W = new dn(_n.parser || 1e3));
    var t = W.get(e);
    if (t)
        return t;
    var n, r, o;
    U(!!e && !!e.kind, 70, e);
    for (var a = [], l = [], i = [], u = [], m = 0, g = e.definitions; m < g.length; m++) {
        var f = g[m];
        if (f.kind === "FragmentDefinition") {
            a.push(f);
            continue
        }
        if (f.kind === "OperationDefinition")
            switch (f.operation) {
            case "query":
                l.push(f);
                break;
            case "mutation":
                i.push(f);
                break;
            case "subscription":
                u.push(f);
                break
            }
    }
    U(!a.length || l.length || i.length || u.length, 71),
    U(l.length + i.length + u.length <= 1, 72, e, l.length, u.length, i.length),
    r = l.length ? x.Query : x.Mutation,
    !l.length && !i.length && (r = x.Subscription);
    var p = l.length ? l : i.length ? i : u;
    U(p.length === 1, 73, e, p.length);
    var v = p[0];
    n = v.variableDefinitions || [],
    v.name && v.name.kind === "Name" ? o = v.name.value : o = "data";
    var h = {
        name: o,
        type: r,
        variables: n
    };
    return W.set(e, h),
    h
}
bt.resetCache = function() {
    W = void 0
}
;
globalThis.__DEV__ !== !1 && fn("parser", function() {
    return W ? W.size : 0
});
function kn(e, t) {
    var n = bt(e)
      , r = Ye(t)
      , o = Ye(n.type);
    U(n.type === t, 74, r, r, o)
}
var ea = pn ? S.useLayoutEffect : S.useEffect
  , Dn = Symbol.for("apollo.hook.wrappers");
function Sn(e, t, n) {
    var r = n.queryManager
      , o = r && r[Dn]
      , a = o && o[e];
    return a ? a(t) : t
}
var jn = Object.prototype.hasOwnProperty;
function et() {}
var Ie = Symbol();
function ta(e, t) {
    return t === void 0 && (t = Object.create(null)),
    Sn("useQuery", Ln, ht(t && t.client))(e, t)
}
function Ln(e, t) {
    var n = Cn(e, t)
      , r = n.result
      , o = n.obsQueryFields;
    return S.useMemo(function() {
        return B(B({}, r), o)
    }, [r, o])
}
function An(e, t, n, r, o) {
    function a(f) {
        var p;
        kn(t, x.Query);
        var v = {
            client: e,
            query: t,
            observable: r && r.getSSRObservable(o()) || e.watchQuery(Et(void 0, e, n, o())),
            resultData: {
                previousData: (p = f?.resultData.current) === null || p === void 0 ? void 0 : p.data
            }
        };
        return v
    }
    var l = S.useState(a)
      , i = l[0]
      , u = l[1];
    function m(f) {
        var p, v;
        Object.assign(i.observable, (p = {},
        p[Ie] = f,
        p));
        var h = i.resultData;
        u(B(B({}, i), {
            query: f.query,
            resultData: Object.assign(h, {
                previousData: ((v = h.current) === null || v === void 0 ? void 0 : v.data) || h.previousData,
                current: void 0
            })
        }))
    }
    if (e !== i.client || t !== i.query) {
        var g = a(i);
        return u(g),
        [g, m]
    }
    return [i, m]
}
function Cn(e, t) {
    var n = ht(t.client)
      , r = S.useContext(_t()).renderPromises
      , o = !!r
      , a = n.disableNetworkFetches
      , l = t.ssr !== !1 && !t.skip
      , i = t.partialRefetch
      , u = Rn(n, e, t, o)
      , m = An(n, e, t, r, u)
      , g = m[0]
      , f = g.observable
      , p = g.resultData
      , v = m[1]
      , h = u(f);
    wn(p, f, n, t, h);
    var I = S.useMemo(function() {
        return Nn(f)
    }, [f]);
    xn(f, r, l);
    var O = Tn(p, f, n, t, h, a, i, o, {
        onCompleted: t.onCompleted || et,
        onError: t.onError || et
    });
    return {
        result: O,
        obsQueryFields: I,
        observable: f,
        resultData: p,
        client: n,
        onQueryExecuted: v
    }
}
function Tn(e, t, n, r, o, a, l, i, u) {
    var m = S.useRef(u);
    S.useEffect(function() {
        m.current = u
    });
    var g = (i || a) && r.ssr === !1 && !r.skip ? Pt : r.skip || o.fetchPolicy === "standby" ? Ot : void 0
      , f = e.previousData
      , p = S.useMemo(function() {
        return g && yt(g, f, t, n)
    }, [n, t, g, f]);
    return In(S.useCallback(function(v) {
        if (i)
            return function() {}
            ;
        var h = function() {
            var P = e.current
              , E = t.getCurrentResult();
            P && P.loading === E.loading && P.networkStatus === E.networkStatus && Qe(P.data, E.data) || qe(E, e, t, n, l, v, m.current)
        }
          , I = function(P) {
            if (O.current.unsubscribe(),
            O.current = t.resubscribeAfterError(h, I),
            !jn.call(P, "graphQLErrors"))
                throw P;
            var E = e.current;
            (!E || E && E.loading || !Qe(P, E.error)) && qe({
                data: E && E.data,
                error: P,
                loading: !1,
                networkStatus: pe.error
            }, e, t, n, l, v, m.current)
        }
          , O = {
            current: t.subscribe(h, I)
        };
        return function() {
            setTimeout(function() {
                return O.current.unsubscribe()
            })
        }
    }, [a, i, t, e, l, n]), function() {
        return p || tt(e, t, m.current, l, n)
    }, function() {
        return p || tt(e, t, m.current, l, n)
    })
}
function xn(e, t, n) {
    t && n && (t.registerSSRObservable(e),
    e.getCurrentResult().loading && t.addObservableQueryPromise(e))
}
function wn(e, t, n, r, o) {
    var a;
    t[Ie] && !Qe(t[Ie], o) && (t.reobserve(Et(t, n, r, o)),
    e.previousData = ((a = e.current) === null || a === void 0 ? void 0 : a.data) || e.previousData,
    e.current = void 0),
    t[Ie] = o
}
function Rn(e, t, n, r) {
    n === void 0 && (n = {});
    var o = n.skip;
    n.ssr,
    n.onCompleted,
    n.onError;
    var a = n.defaultOptions
      , l = mt(n, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
    return function(i) {
        var u = Object.assign(l, {
            query: t
        });
        return r && (u.fetchPolicy === "network-only" || u.fetchPolicy === "cache-and-network") && (u.fetchPolicy = "cache-first"),
        u.variables || (u.variables = {}),
        o ? (u.initialFetchPolicy = u.initialFetchPolicy || u.fetchPolicy || nt(a, e.defaultOptions),
        u.fetchPolicy = "standby") : u.fetchPolicy || (u.fetchPolicy = i?.options.initialFetchPolicy || nt(a, e.defaultOptions)),
        u
    }
}
function Et(e, t, n, r) {
    var o = []
      , a = t.defaultOptions.watchQuery;
    return a && o.push(a),
    n.defaultOptions && o.push(n.defaultOptions),
    o.push(mn(e && e.options, r)),
    o.reduce(gn)
}
function qe(e, t, n, r, o, a, l) {
    var i = t.current;
    i && i.data && (t.previousData = i.data),
    !e.error && pt(e.errors) && (e.error = new ft({
        graphQLErrors: e.errors
    })),
    t.current = yt(Mn(e, n, o), t.previousData, n, r),
    a(),
    Un(e, i?.networkStatus, l)
}
function Un(e, t, n) {
    if (!e.loading) {
        var r = Bn(e);
        Promise.resolve().then(function() {
            r ? n.onError(r) : e.data && t !== e.networkStatus && e.networkStatus === pe.ready && n.onCompleted(e.data)
        }).catch(function(o) {
            globalThis.__DEV__ !== !1 && U.warn(o)
        })
    }
}
function tt(e, t, n, r, o) {
    return e.current || qe(t.getCurrentResult(), e, t, o, r, function() {}, n),
    e.current
}
function nt(e, t) {
    var n;
    return e?.fetchPolicy || ((n = t?.watchQuery) === null || n === void 0 ? void 0 : n.fetchPolicy) || "cache-first"
}
function Bn(e) {
    return pt(e.errors) ? new ft({
        graphQLErrors: e.errors
    }) : e.error
}
function yt(e, t, n, r) {
    var o = e.data;
    e.partial;
    var a = mt(e, ["data", "partial"])
      , l = B(B({
        data: o
    }, a), {
        client: r,
        observable: n,
        variables: n.variables,
        called: e !== Pt && e !== Ot,
        previousData: t
    });
    return l
}
function Mn(e, t, n) {
    return e.partial && n && !e.loading && (!e.data || Object.keys(e.data).length === 0) && t.options.fetchPolicy !== "cache-only" ? (t.refetch(),
    B(B({}, e), {
        loading: !0,
        networkStatus: pe.refetch
    })) : e
}
var Pt = gt({
    loading: !0,
    data: void 0,
    error: void 0,
    networkStatus: pe.loading
})
  , Ot = gt({
    loading: !1,
    data: void 0,
    error: void 0,
    networkStatus: pe.ready
});
function Nn(e) {
    return {
        refetch: e.refetch.bind(e),
        reobserve: e.reobserve.bind(e),
        fetchMore: e.fetchMore.bind(e),
        updateQuery: e.updateQuery.bind(e),
        startPolling: e.startPolling.bind(e),
        stopPolling: e.stopPolling.bind(e),
        subscribeToMore: e.subscribeToMore.bind(e)
    }
}
function It() {
    const t = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "").toLowerCase();
    return t.charAt(0).toUpperCase() + t.slice(1)
}
const Vn = ["dragover", "dragenter", "drop"];
function Fn(e, t) {
    return e.type === "application/x-moz-file" || $n(e, t)
}
function zn(e) {
    if (Wn(e) && e.dataTransfer) {
        const t = e.dataTransfer;
        if (t.files && t.files.length)
            return Array.from(t.files);
        if (t.items && t.items.length)
            return Array.from(t.items)
    } else if (Hn(e) && e.target.files)
        return Array.from(e.target.files);
    return []
}
function $n(e, t) {
    if (e && t) {
        const n = e.name || ""
          , r = e.type || ""
          , o = r.replace(/\/.*$/, "");
        return (Array.isArray(t) ? t : t.split(",")).some(l => {
            const i = l.trim();
            return i.startsWith(".") ? n.toLowerCase().endsWith(i.toLowerCase()) : i.endsWith("/*") ? o === i.replace(/\/.*$/, "") : r === i
        }
        )
    }
    return !0
}
function Wn(e) {
    return Vn.indexOf(e.type) > 0
}
function Hn(e) {
    return Object.prototype.hasOwnProperty.call(e, "target")
}
const kt = !0;
function Dt(e) {
    return e ? "allowMultiple" : "single"
}
const St = _.createContext({
    disabled: !1,
    focused: !1,
    size: "extraLarge",
    type: "file",
    measuring: !1,
    allowMultiple: kt
});
var j = {
    DropZone: "Polaris-DropZone",
    focused: "Polaris-DropZone--focused",
    noOutline: "Polaris-DropZone--noOutline",
    hasOutline: "Polaris-DropZone--hasOutline",
    isDisabled: "Polaris-DropZone--isDisabled",
    isDragging: "Polaris-DropZone--isDragging",
    sizeLarge: "Polaris-DropZone--sizeLarge",
    sizeMedium: "Polaris-DropZone--sizeMedium",
    sizeSmall: "Polaris-DropZone--sizeSmall",
    measuring: "Polaris-DropZone--measuring",
    Container: "Polaris-DropZone__Container",
    Overlay: "Polaris-DropZone__Overlay",
    hasError: "Polaris-DropZone--hasError"
}
  , ne = {
    FileUpload: "Polaris-DropZone-FileUpload",
    large: "Polaris-DropZone-FileUpload--large",
    small: "Polaris-DropZone-FileUpload--small",
    UploadIcon: "Polaris-DropZone-FileUpload__UploadIcon",
    disabled: "Polaris-DropZone-FileUpload--disabled"
};
function Qn(e) {
    const t = lt()
      , {size: n, measuring: r, type: o, disabled: a, allowMultiple: l} = _.useContext(St)
      , i = It(o)
      , u = Dt(l)
      , {actionTitle: m=t.translate(`Polaris.DropZone.${u}.actionTitle${i}`), actionHint: g} = e
      , f = c.jsx(qt, {
        disabled: a,
        children: m
    })
      , p = De(ne.FileUpload, r && ne.measuring, n === "large" && ne.large, n === "small" && ne.small)
      , v = g && c.jsx(Q, {
        variant: "bodySm",
        as: "p",
        tone: "subdued",
        children: g
    });
    let h;
    switch (n) {
    case "large":
    case "medium":
        h = c.jsxs(ct, {
            inlineAlign: "center",
            gap: "200",
            children: [f, v]
        });
        break;
    case "small":
        h = c.jsx("div", {
            className: De(ne.UploadIcon, a && ne.disabled),
            children: c.jsx(H, {
                type: "upload",
                tone: "legacy-inherit"
            })
        });
        break
    }
    return c.jsx("div", {
        className: p,
        children: h
    })
}
const qn = function(t) {
    let {dropOnPage: n, label: r, labelAction: o, labelHidden: a, children: l, disabled: i=!1, outline: u=!0, accept: m, active: g, overlay: f=!0, allowMultiple: p=kt, overlayText: v, errorOverlayText: h, id: I, type: O="file", onClick: P, error: E, openFileDialog: L, variableHeight: q, onFileDialogClose: M, customValidator: Z, onDrop: re, onDropAccepted: K, onDropRejected: N, onDragEnter: oe, onDragOver: V, onDragLeave: ae} = t;
    const A = _.useRef(null)
      , F = _.useRef(null)
      , C = _.useRef([])
      , me = _.useCallback(Zt( () => {
        if (!A.current)
            return;
        if (q) {
            le(!1);
            return
        }
        let b = "large";
        const k = A.current.getBoundingClientRect().width;
        k < 100 ? b = "small" : k < 160 && (b = "medium"),
        $(b),
        Y && le(!1)
    }
    , 20, {
        trailing: !0
    }), [])
      , [z,ie] = _.useState(!1)
      , [G,se] = _.useState(!1)
      , {value: J, setTrue: X, setFalse: Te} = Kt(!1)
      , [w,$] = _.useState("large")
      , [Y,le] = _.useState(!0)
      , ce = lt()
      , ee = _.useCallback(b => {
        const k = zn(b)
          , D = []
          , R = [];
        return b.type !== "drop" && m?.includes(".") ? D.push(...k) : Array.from(k).forEach(de => {
            b.type !== "dragenter" && !de.name || !Fn(de, m) || Z && !Z(de) ? R.push(de) : D.push(de)
        }
        ),
        p || (D.splice(1, D.length),
        R.push(...D.slice(1))),
        {
            files: k,
            acceptedFiles: D,
            rejectedFiles: R
        }
    }
    , [m, p, Z])
      , ge = _.useCallback(b => {
        if (Oe(b),
        i)
            return;
        const {files: k, acceptedFiles: D, rejectedFiles: R} = ee(b);
        C.current = [],
        ie(!1),
        se(R.length > 0),
        re && re(k, D, R),
        K && D.length && K(D),
        N && R.length && N(R),
        b.target && "value"in b.target && (b.target.value = "")
    }
    , [i, ee, re, K, N])
      , xe = _.useCallback(b => {
        if (Oe(b),
        i || (b.target && !C.current.includes(b.target) && C.current.push(b.target),
        z))
            return;
        const {rejectedFiles: k} = ee(b);
        ie(!0),
        se(k.length > 0),
        oe && oe()
    }
    , [i, z, ee, oe])
      , we = _.useCallback(b => {
        Oe(b),
        !i && V && V()
    }
    , [i, V])
      , ve = _.useCallback(b => {
        b.preventDefault(),
        !i && (C.current = C.current.filter(k => {
            const D = n && !Ne ? document : A.current;
            return k !== b.target && D && D.contains(k)
        }
        ),
        !(C.current.length > 0) && (ie(!1),
        se(!1),
        ae && ae()))
    }
    , [n, i, ae])
      , te = n && !Ne ? document : A.current;
    _e("drop", ge, te),
    _e("dragover", we, te),
    _e("dragenter", xe, te),
    _e("dragleave", ve, te),
    _e("resize", me, Ne ? null : window),
    Gt( () => {
        me()
    }
    );
    const he = _.useId()
      , be = I ?? he
      , ue = It(O)
      , Ee = Dt(p)
      , Re = v === void 0 ? ce.translate(`Polaris.DropZone.${Ee}.overlayText${ue}`) : v
      , Ue = h === void 0 ? ce.translate(`Polaris.DropZone.errorOverlayText${ue}`) : h
      , Be = r || ce.translate(`Polaris.DropZone.${Ee}.label${ue}`)
      , ye = r ? a : !0
      , Pe = De(j.DropZone, u && j.hasOutline, !u && j.noOutline, J && j.focused, (g || z) && j.isDragging, i && j.isDisabled, (G || E) && j.hasError, !q && j[$e("size", w)], Y && j.measuring)
      , $t = (g || z) && !G && !E && f && Ge("upload", Re)
      , Wt = z && (G || E) && Ge("alert-circle", Ue, "critical")
      , Ht = _.useMemo( () => ({
        disabled: i,
        focused: J,
        size: w,
        type: O || "file",
        measuring: Y,
        allowMultiple: p
    }), [i, J, Y, w, O, p])
      , Me = _.useCallback( () => {
        F.current && F.current.click()
    }
    , [F])
      , Ke = _.useCallback( () => {
        Me(),
        M?.()
    }
    , [Me, M]);
    function Ge(b, k, D) {
        return c.jsx("div", {
            className: j.Overlay,
            children: c.jsxs(ct, {
                gap: "200",
                inlineAlign: "center",
                children: [w === "small" && c.jsx(H, {
                    type: b,
                    tone: D
                }), (w === "medium" || w === "large") && c.jsx(Q, {
                    variant: "bodySm",
                    as: "p",
                    fontWeight: "bold",
                    children: k
                })]
            })
        })
    }
    function Qt(b) {
        if (!i)
            return P ? P(b) : Me()
    }
    return _.useEffect( () => {
        L && Ke()
    }
    , [L, Ke]),
    c.jsx(St.Provider, {
        value: Ht,
        children: c.jsx(Jt, {
            id: be,
            label: Be,
            action: o,
            labelHidden: ye,
            children: c.jsxs("div", {
                ref: A,
                className: Pe,
                "aria-disabled": i,
                onClick: Qt,
                onDragStart: Oe,
                children: [$t, Wt, c.jsx(Q, {
                    variant: "bodySm",
                    as: "span",
                    visuallyHidden: !0,
                    children: c.jsx("input", {
                        id: be,
                        accept: m,
                        disabled: i,
                        multiple: p,
                        onChange: ge,
                        onFocus: X,
                        onBlur: Te,
                        type: "file",
                        ref: F,
                        autoComplete: "off"
                    })
                }), c.jsx("div", {
                    className: j.Container,
                    children: l
                })]
            })
        })
    })
};
function Oe(e) {
    e.preventDefault(),
    e.stopPropagation()
}
qn.FileUpload = Qn;
var ke = {
    List: "Polaris-List",
    typeNumber: "Polaris-List--typeNumber",
    Item: "Polaris-List__Item",
    spacingLoose: "Polaris-List--spacingLoose"
};
function Zn(e) {
    let {children: t} = e;
    return c.jsx("li", {
        className: ke.Item,
        children: t
    })
}
const Kn = function(t) {
    let {children: n, gap: r="loose", type: o="bullet"} = t;
    const a = De(ke.List, r && ke[$e("spacing", r)], o && ke[$e("type", o)])
      , l = o === "bullet" ? "ul" : "ol";
    return c.jsx(l, {
        className: a,
        children: n
    })
};
Kn.Item = Zn;
var jt = (e => (e.Dialog = "dialog",
e.Group = "group",
e.Link = "link",
e.List = "list",
e.MenuBar = "menubar",
e.MenuItem = "menuitem",
e.MenuItemRadio = "menuitemradio",
e.Presentation = "presentation",
e.Tab = "tab",
e.TabList = "tablist",
e.TabPanel = "tabpanel",
e))(jt || {})
  , Gn = (e => (e.Default = "div",
e.Button = "button",
e.Label = "label",
e.Link = "a",
e.Paragraph = "p",
e))(Gn || {})
  , Jn = (e => (e.Default = "auto",
e.Yes = "yes",
e.No = "no",
e))(Jn || {})
  , Lt = (e => (e.Magic = "magic",
e.Info = "info",
e))(Lt || {});
const At = (e, t, n) => {
    const r = e[t];
    return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise( (o, a) => {
        (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t + (t.split("/").length !== n ? ". Note that variables only represent file names one level deep." : ""))))
    }
    )
}
  , Ct = {
    newWindowAccessibilityHint: "(opens a new window)"
}
  , Tt = {
    PlainAction: Ct
}
  , Xn = Object.freeze(Object.defineProperty({
    __proto__: null,
    PlainAction: Ct,
    default: Tt
}, Symbol.toStringTag, {
    value: "Module"
}));
function Yn(e) {
    return typeof e == "object" && e.body || typeof e == "function"
}
function er(e) {
    let {source: t, tone: n="legacy-inherit", color: r, size: o, LegacyIconOSUITone: a="inherit"} = e;
    return Xt(t) ? y.createElement(H, {
        type: t,
        tone: n,
        color: r,
        size: o
    }) : Yn(t) ? y.createElement(vn, {
        source: t,
        tone: a
    }) : null
}
var T = (e => (e.Down = "down",
e.Up = "up",
e.Select = "select",
e.ChevronDown = "chevronDown",
e.ChevronUp = "chevronUp",
e.CaretDown = "caretDown",
e.CaretUp = "caretUp",
e.ChevronDownTiny = "chevronDownTiny",
e))(T || {});
const tr = "Online-Store-UI-PlainAction_1jhib"
  , nr = "Online-Store-UI-PlainAction--hyperlink_baw6d"
  , rr = "Online-Store-UI-PlainAction--subtitle_1ijt1"
  , or = "Online-Store-UI-PlainAction--looseLineHeight_1gkfs"
  , ar = "Online-Store-UI-PlainAction--extraLooseLineHeight_1dtgh"
  , ir = "Online-Store-UI-PlainAction--fontSizeBodyMd_fa29c"
  , sr = "Online-Store-UI-PlainAction--small_geqok"
  , lr = "Online-Store-UI-PlainAction--fontSizeBodyLg_qzizg"
  , cr = "Online-Store-UI-PlainAction--fontSizeBodyXl_nwihz"
  , ur = "Online-Store-UI-PlainAction--noPadding_4dn71"
  , dr = "Online-Store-UI-PlainAction--hasContent_5372i"
  , _r = "Online-Store-UI-PlainAction--slim_1buo4"
  , fr = "Online-Store-UI-PlainAction--iconOnly_vgqbv"
  , pr = "Online-Store-UI-PlainAction--disclosure_1d0sg"
  , mr = "Online-Store-UI-PlainAction--extraPadding_yq567"
  , gr = "Online-Store-UI-PlainAction--paddingLoose_1e6jv"
  , vr = "Online-Store-UI-PlainAction--backgroundSubdued_w48to"
  , hr = "Online-Store-UI-PlainAction--withSurfaceSubduedBackground_1c0vh"
  , br = "Online-Store-UI-PlainAction--backgroundDark_glaz7"
  , Er = "Online-Store-UI-PlainAction--backgroundGrey_1j6sp"
  , yr = "Online-Store-UI-PlainAction--interactive_1ef4b"
  , Pr = "Online-Store-UI-PlainAction--disabled_11cdm"
  , Or = "Online-Store-UI-PlainAction--pressed_htthh"
  , Ir = "Online-Store-UI-PlainAction--destructive_123ij"
  , kr = "Online-Store-UI-PlainAction--darkInverse_hkusf"
  , Dr = "Online-Store-UI-PlainAction--dark_1buma"
  , Sr = "Online-Store-UI-PlainAction__Subtitle_1ijt1"
  , jr = "Online-Store-UI-PlainAction--unstyled_10tjw"
  , Lr = "Online-Store-UI-PlainAction--alignLeft_22txm"
  , Ar = "Online-Store-UI-PlainAction--fullWidth_133qr"
  , Cr = "Online-Store-UI-PlainAction--fillContainer_qu7am"
  , Tr = "Online-Store-UI-PlainAction--loading_flcmt"
  , xr = "Online-Store-UI-PlainAction--outline_17u2e"
  , wr = "Online-Store-UI-PlainAction--vertical_kpg8x"
  , Rr = "Online-Store-UI-PlainAction__Interior_9sack"
  , Ur = "Online-Store-UI-PlainAction__Prefix_vg8vc"
  , Br = "Online-Store-UI-PlainAction__WrappedContent_qd2on"
  , Mr = "Online-Store-UI-PlainAction__Disclosure_1d0sg"
  , Nr = "Online-Store-UI-PlainAction__SubtitleWrapperContent_1tdea"
  , Vr = "Online-Store-UI-PlainAction__ExternalIcon_ivydx"
  , Fr = "Online-Store-UI-PlainAction__PrefixItem_bid0h"
  , zr = "Online-Store-UI-PlainAction__PrefixDark_12xpi"
  , $r = "Online-Store-UI-PlainAction--truncate_1aegu"
  , Wr = "Online-Store-UI-PlainAction--multilineTruncate_vmngw"
  , Hr = "Online-Store-UI-PlainAction__Content_11f9f"
  , Qr = "Online-Store-UI-PlainAction--removeUnderline_14wmj"
  , qr = "Online-Store-UI-PlainAction__IconWrapper_1suin"
  , Zr = "Online-Store-UI-PlainAction__LoadingIndicator_twftt"
  , Kr = "Online-Store-UI-PlainAction--toneMagic_1nsy4"
  , d = {
    PlainAction: tr,
    hyperlink: nr,
    subtitle: rr,
    looseLineHeight: or,
    extraLooseLineHeight: ar,
    fontSizeBodyMd: ir,
    small: sr,
    fontSizeBodyLg: lr,
    fontSizeBodyXl: cr,
    noPadding: ur,
    hasContent: dr,
    slim: _r,
    iconOnly: fr,
    disclosure: pr,
    extraPadding: mr,
    paddingLoose: gr,
    backgroundSubdued: vr,
    withSurfaceSubduedBackground: hr,
    backgroundDark: br,
    backgroundGrey: Er,
    interactive: yr,
    disabled: Pr,
    pressed: Or,
    destructive: Ir,
    darkInverse: kr,
    dark: Dr,
    Subtitle: Sr,
    unstyled: jr,
    alignLeft: Lr,
    fullWidth: Ar,
    fillContainer: Cr,
    loading: Tr,
    outline: xr,
    vertical: wr,
    Interior: Rr,
    Prefix: Ur,
    WrappedContent: Br,
    Disclosure: Mr,
    SubtitleWrapperContent: Nr,
    ExternalIcon: Vr,
    PrefixItem: Fr,
    PrefixDark: zr,
    truncate: $r,
    multilineTruncate: Wr,
    Content: Hr,
    removeUnderline: Qr,
    IconWrapper: qr,
    LoadingIndicator: Zr,
    toneMagic: Kr
}
  , Gr = e => _.createElement("svg", {
    width: 12,
    height: 12,
    viewBox: "0 0 12 12",
    fill: "currentcolor",
    xmlns: "http://www.w3.org/2000/svg",
    ...e
}, _.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.99956 8.4001C5.84596 8.4001 5.69236 8.3413 5.57536 8.2243L2.57536 5.2243C2.34076 4.9897 2.34076 4.6105 2.57536 4.3759C2.80996 4.1413 3.18916 4.1413 3.42376 4.3759L5.99956 6.9517L8.57536 4.3759C8.80996 4.1413 9.18916 4.1413 9.42376 4.3759C9.65836 4.6105 9.65836 4.9897 9.42376 5.2243L6.42376 8.2243C6.30676 8.3413 6.15316 8.4001 5.99956 8.4001"
}))
  , xt = {
    Back: {
        content: "Back",
        accessibilityLabel: "Go back to the previous view"
    },
    Cancel: {
        content: "Cancel",
        accessibilityLabel: "Cancel and discard all changes"
    },
    Close: {
        content: "Close",
        accessibilityLabel: "Close this view and return to the previous view"
    },
    Select: {
        content: "Select",
        accessibilityLabel: "Confirm this selection"
    },
    Loading: {
        content: "Loading",
        accessibilityLabel: "This action is disabled while loading"
    },
    Edit: {
        content: "Edit",
        accessibilityLabel: "Edit this content"
    },
    Done: {
        content: "Done",
        accessibilityLabel: "Confirm this action"
    }
}
  , wt = {
    CommonAction: xt
}
  , Jr = Object.freeze(Object.defineProperty({
    __proto__: null,
    CommonAction: xt,
    default: wt
}, Symbol.toStringTag, {
    value: "Module"
}));
var je = (e => (e.Back = "Back",
e.Cancel = "Cancel",
e.Close = "Close",
e.Select = "Select",
e.Loading = "Loading",
e.Edit = "Edit",
e.Done = "Done",
e))(je || {});
function Xr(e) {
    let {type: t, content: n, accessibilityLabel: r, disabled: o, url: a, onAction: l} = e;
    const [i] = Ce({
        id: "useCommonAction_13i1kqx",
        fallback: wt,
        translations(p) {
            if (!(["cs", "da", "de", "es", "fi", "fr", "it", "ja", "ko", "nb", "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"].indexOf(p) < 0))
                return At(Object.assign({
                    "./translations/cs.json": () => s( () => import("./cs.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/da.json": () => s( () => import("./da.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/de.json": () => s( () => import("./de.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/en.json": () => s( () => Promise.resolve().then( () => Jr), void 0),
                    "./translations/es.json": () => s( () => import("./es.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/fi.json": () => s( () => import("./fi.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/fr.json": () => s( () => import("./fr.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/it.json": () => s( () => import("./it.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/ja.json": () => s( () => import("./ja.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/ko.json": () => s( () => import("./ko.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/nb.json": () => s( () => import("./nb.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/nl.json": () => s( () => import("./nl.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/pl.json": () => s( () => import("./pl.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/pt-BR.json": () => s( () => import("./pt-BR.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/pt-PT.json": () => s( () => import("./pt-PT.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/sv.json": () => s( () => import("./sv.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/th.json": () => s( () => import("./th.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/tr.json": () => s( () => import("./tr.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/zh-CN.json": () => s( () => import("./zh-CN.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), []),
                    "./translations/zh-TW.json": () => s( () => import("./zh-TW.json-5ffcac3922b57e708db37c9792b724629bac1046.13.js"), [])
                }), `./translations/${p}.json`, 3).then(v => v && v.default)
        }
    })
      , u = t ? i.translate(`CommonAction.${je[t]}.content`) : void 0
      , m = t ? i.translate(`CommonAction.${je[t]}.accessibilityLabel`) : void 0
      , g = n || u
      , f = r || m;
    return {
        ...g && {
            content: g
        },
        ...f && {
            accessibilityLabel: f
        },
        ...o && {
            disabled: o
        },
        ...a && {
            url: a
        },
        ...l && {
            onAction: l
        }
    }
}
function Yr() {
    const {content: e, accessibilityLabel: t} = Xr({
        type: je.Loading
    });
    return y.createElement("span", {
        className: d.LoadingIndicator
    }, y.createElement(Q, {
        variant: "bodySm",
        as: "span",
        visuallyHidden: !0
    }, e), y.createElement(ut, {
        size: "small",
        accessibilityLabel: t
    }))
}
const rt = {
    multilineTruncate: "--osui_plain-action-multiline-truncate",
    fontWeight: "--osui_plain-action-font-weight"
};
function eo(e) {
    let {content: t, icon: n, disclosure: r=!1, loading: o=!1, id: a, accessibilityLabel: l, ariaControls: i, ariaExpanded: u, ariaDescribedBy: m, ariaLabelledBy: g, pressed: f, disabled: p=!1, skipFocus: v=!1, slim: h=!1, noPadding: I=!1, outline: O=!1, unstyled: P=!1, vertical: E=!1, alignLeft: L=!1, fullWidth: q=!1, fillContainer: M=!1, lineHeight: Z="base", fontWeight: re="regular", truncate: K=!1, colorScheme: N="light", destructive: oe=!1, multilineTruncate: V, removeUnderline: ae=!1, url: A, external: F=!1, renderActionAsUrl: C=!1, download: me=!1, submit: z=!1, extraPadding: ie=!1, padding: G, withSurfaceSubduedBackground: se=!1, background: J, onAction: X, role: Te=ao({
        onAction: X,
        renderActionAsUrl: C
    }), prefix: w, subtitle: $, interactive: Y=!1, fontSize: le="bodyMd", small: ce=!1, tone: ee, ...ge} = e;
    const [xe] = Ce({
        id: "PlainAction_lfoich",
        fallback: Tt,
        translations(ye) {
            if (!(["cs", "da", "de", "es", "fi", "fr", "it", "ja", "ko", "nb", "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"].indexOf(ye) < 0))
                return At(Object.assign({
                    "./translations/cs.json": () => s( () => import("./cs.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/da.json": () => s( () => import("./da.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/de.json": () => s( () => import("./de.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/en.json": () => s( () => Promise.resolve().then( () => Xn), void 0),
                    "./translations/es.json": () => s( () => import("./es.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/fi.json": () => s( () => import("./fi.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/fr.json": () => s( () => import("./fr.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/it.json": () => s( () => import("./it.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/ja.json": () => s( () => import("./ja.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/ko.json": () => s( () => import("./ko.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/nb.json": () => s( () => import("./nb.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/nl.json": () => s( () => import("./nl.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/pl.json": () => s( () => import("./pl.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/pt-BR.json": () => s( () => import("./pt-BR.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/pt-PT.json": () => s( () => import("./pt-PT.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/sv.json": () => s( () => import("./sv.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/th.json": () => s( () => import("./th.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/tr.json": () => s( () => import("./tr.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/zh-CN.json": () => s( () => import("./zh-CN.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), []),
                    "./translations/zh-TW.json": () => s( () => import("./zh-TW.json-5ffcac3922b57e708db37c9792b724629bac1046.1.js"), [])
                }), `./translations/${ye}.json`, 3).then(Pe => Pe && Pe.default)
        }
    })
      , we = xe.translate("PlainAction.newWindowAccessibilityHint")
      , ve = no({
        content: t,
        icon: n,
        disclosure: r,
        loading: o,
        prefix: w,
        subtitle: $,
        externalLabel: ro({
            content: t,
            url: A,
            renderActionAsUrl: C,
            external: F,
            onAction: X
        }) ? we : void 0,
        pressed: f,
        colorScheme: N,
        disabled: p
    });
    if (ve == null)
        return null;
    const te = (n || r) && !t
      , he = p || o
      , be = J ? d[Ve("background", J)] : null
      , ue = G ? d[Ve("padding", G)] : null
      , Ee = le ? d[Ve("fontSize", le)] : null
      , Re = Se(d.PlainAction, be, Ee, ue, {
        [d.destructive]: oe,
        [d.dark]: N === "dark",
        [d.darkInverse]: N === "darkInverse",
        [d.disclosure]: r,
        [d.hasContent]: !!(t || $),
        [d.loading]: o,
        [d.disabled]: he,
        [d.pressed]: f,
        [d.slim]: h,
        [d.noPadding]: I,
        [d.iconOnly]: te,
        [d.outline]: O,
        [d.alignLeft]: L,
        [d.fullWidth]: q,
        [d.fillContainer]: M,
        [d.truncate]: K,
        [d.multilineTruncate]: !!(!K && V),
        [d.unstyled]: P,
        [d.hyperlink]: Rt({
            url: A,
            onAction: X,
            renderActionAsUrl: C
        }),
        [d.removeUnderline]: ae,
        [d.vertical]: oo({
            content: t,
            icon: n,
            vertical: E,
            subtitle: $
        }),
        [d.looseLineHeight]: Z === "loose",
        [d.extraLooseLineHeight]: Z === "extraLoose",
        [d.extraPadding]: ie,
        [d.withSurfaceSubduedBackground]: se,
        [d.subtitle]: !!$,
        [d.interactive]: Y,
        [d.small]: ce,
        [d.subtitleAndContent]: !!($ && t),
        [d.toneMagic]: ee === Lt.Magic
    })
      , Ue = V ? {
        [rt.multilineTruncate]: Math.max(1, Math.floor(V))
    } : void 0
      , Be = {
        [rt.fontWeight]: `var(--p-font-weight-${re})`,
        ...Ue
    };
    return y.createElement(Yt, {
        className: Re,
        tabIndex: v || p ? -1 : void 0,
        id: a,
        role: Te,
        accessibilityLabel: l,
        ariaControls: i,
        ariaExpanded: u,
        ariaDescribedBy: m,
        "aria-labelledby": g,
        disabled: he,
        pressed: f,
        loading: o,
        url: A,
        external: !!(A && F),
        download: me,
        submit: z,
        onClick: X,
        style: Be,
        ...ge
    }, ve)
}
function to(e) {
    switch (e) {
    case T.Select:
        return "select";
    case T.Up:
        return "chevron-up";
    case T.CaretDown:
        return "caret-down";
    case T.CaretUp:
        return "caret-up";
    case T.ChevronDown:
        return "chevron-down";
    case T.ChevronUp:
        return "chevron-up";
    case T.Down:
    default:
        return "chevron-down"
    }
}
function no(e) {
    let {content: t, icon: n, disclosure: r, loading: o, externalLabel: a, prefix: l, subtitle: i, pressed: u, colorScheme: m, disabled: g} = e;
    const f = i && i.trim().length > 0 ? y.createElement("div", {
        className: d.Subtitle
    }, i) : null
      , p = n || l ? y.createElement("div", {
        className: Se(d.Prefix, {
            [d.PrefixDark]: m === "dark"
        })
    }, io({
        icon: n,
        prefix: l,
        colorScheme: m,
        disabled: g
    })) : null
      , v = t && t.trim().length > 0 ? y.createElement("div", {
        className: d.Content
    }, t) : null
      , h = a ? y.createElement("div", {
        className: d.ExternalIcon
    }, y.createElement("div", {
        className: d.IconWrapper
    }, y.createElement(H, {
        type: "legacy-external-small",
        tone: "legacy-inherit"
    }), y.createElement(Q, {
        as: "span",
        visuallyHidden: !0
    }, a))) : null
      , I = v || h ? y.createElement("div", {
        className: d.WrappedContent
    }, v, h) : null
      , O = f ? y.createElement("div", {
        className: d.SubtitleWrapperContent
    }, f, I) : I
      , P = r ? y.createElement("div", {
        className: d.Disclosure
    }, y.createElement("div", {
        className: d.IconWrapper
    }, r === T.ChevronDownTiny ? y.createElement(Gr, null) : y.createElement(H, {
        type: to(r),
        tone: u || g ? "legacy-inherit" : "neutral",
        color: u || g ? void 0 : "subdued"
    }))) : null
      , E = o ? y.createElement(Yr, null) : null
      , L = p || O || P ? y.createElement("div", {
        className: Se(d.Interior, {
            [d.InteriorWithSubtitle]: f
        })
    }, p, O, P) : null;
    return L || E ? y.createElement(y.Fragment, null, L, E) : null
}
function ro(e) {
    let {content: t, url: n, renderActionAsUrl: r, external: o, onAction: a} = e;
    return Rt({
        url: n,
        onAction: a,
        renderActionAsUrl: r
    }) && !!(t && o)
}
function oo(e) {
    let {content: t, icon: n, vertical: r, subtitle: o} = e;
    return !!(!!(t || o) && n && r)
}
function Rt(e) {
    let {renderActionAsUrl: t, url: n, onAction: r} = e;
    return !!(n || t && r)
}
function ao(e) {
    let {onAction: t, renderActionAsUrl: n} = e;
    if (t && n)
        return jt.Link
}
function io(e) {
    let {icon: t, prefix: n, colorScheme: r, disabled: o} = e;
    return n ? y.createElement("span", {
        className: d.PrefixItem
    }, n) : t ? er({
        source: t,
        tone: r === "dark" && o ? "neutral" : "legacy-inherit",
        color: r === "dark" && o ? "subdued" : void 0,
        LegacyIconOSUITone: "inherit"
    }) : null
}
const Le = "a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not(:disabled),*[tabindex]";
function Ze(e) {
    return !(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) && Bt(e, Le) ? e : e.querySelector(Le)
}
function ot(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const n = Ze(e, t);
    n && n.focus()
}
function Ut(e) {
    if (!(arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0) && Bt(e, Le))
        return e;
    const n = e.querySelectorAll(Le);
    return n[n.length - 1]
}
function so(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const n = Ut(e, t);
    n && n.focus()
}
function na(e, t, n) {
    const r = n !== void 0
      , o = t === 1;
    let a = "";
    try {
        a = document.activeElement ? document.activeElement.tagName.toLowerCase() : ""
    } catch {}
    const l = ["input", "textarea"].includes(a);
    return r && !e && o && !l
}
function ra(e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
    const n = document.getElementById(e);
    if (n == null)
        return;
    const r = Ze(n, t);
    r?.focus()
}
function Bt(e, t) {
    if (e.matches)
        return e.matches(t);
    const n = (e.ownerDocument || document).querySelectorAll(t);
    let r = n.length;
    for (; --r >= 0 && n.item(r) !== e; )
        return r > -1
}
function lo(e) {
    let {height: t, title: n, large: r, size: o, onClose: a} = e;
    const {app: l} = en()
      , [i] = _.useState( () => hn(l, {
        height: t,
        title: n,
        large: r,
        size: o
    }));
    return _.useEffect( () => (i.dispatch(Fe.OPEN),
    () => {
        i.dispatch(Fe.CLOSE)
    }
    ), [i]),
    _.useEffect( () => {
        i.set({
            height: t
        })
    }
    , [i, t]),
    _.useEffect( () => i.subscribe(Fe.CLOSE, a), [i, a]),
    null
}
function co(e, t, n) {
    return e == null ? null : _o(e, t) ? e : c.jsx(t, {
        ...n,
        children: e
    })
}
const uo = (e, t) => e === t;
function _o(e, t) {
    if (e == null || !_.isValidElement(e) || typeof e.type == "string")
        return !1;
    const {type: n} = e;
    return (Array.isArray(t) ? t : [t]).some(o => typeof n != "string" && uo(o, n))
}
function Mt(e) {
    let {footer: t, primaryAction: n, secondaryActions: r} = e;
    return !!(n ?? r ?? t)
}
function fo(e) {
    return e.offsetHeight
}
const Nt = {
    close: "Close"
}
  , Vt = {
    CloseButton: Nt
}
  , po = Object.freeze(Object.defineProperty({
    __proto__: null,
    CloseButton: Nt,
    default: Vt
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mo = "_CloseButton_1d5lm_13"
  , go = {
    CloseButton: mo
};
function vo(e) {
    let {onClick: t} = e;
    const [n] = Ce({
        id: "CloseButton_1q3v1mr",
        fallback: Vt,
        translations(r) {
            if (!(["cs", "da", "de", "es", "fi", "fr", "it", "ja", "ko", "nb", "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"].indexOf(r) < 0))
                return dt(Object.assign({
                    "./translations/cs.json": () => s( () => import("./cs-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/da.json": () => s( () => import("./da-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/de.json": () => s( () => import("./de-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/en.json": () => s( () => Promise.resolve().then( () => po), void 0),
                    "./translations/es.json": () => s( () => import("./es-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/fi.json": () => s( () => import("./fi-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/fr.json": () => s( () => import("./fr-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/it.json": () => s( () => import("./it-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/ja.json": () => s( () => import("./ja-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/ko.json": () => s( () => import("./ko-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/nb.json": () => s( () => import("./nb-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/nl.json": () => s( () => import("./nl-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/pl.json": () => s( () => import("./pl-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/pt-BR.json": () => s( () => import("./pt-BR-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/pt-PT.json": () => s( () => import("./pt-PT-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/sv.json": () => s( () => import("./sv-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/th.json": () => s( () => import("./th-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/tr.json": () => s( () => import("./tr-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/zh-CN.json": () => s( () => import("./zh-CN-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), []),
                    "./translations/zh-TW.json": () => s( () => import("./zh-TW-5ffcac3922b57e708db37c9792b724629bac1046.123.js"), [])
                }), `./translations/${r}.json`, 3).then(o => o && o.default)
        }
    });
    return c.jsx("button", {
        type: "button",
        onClick: t,
        className: Se(go.CloseButton),
        "aria-label": n.translate("CloseButton.close"),
        children: c.jsx(H, {
            tone: "neutral",
            type: "x"
        })
    })
}
const Ft = {
    back: "Back"
}
  , zt = {
    BackButton: Ft
}
  , ho = Object.freeze(Object.defineProperty({
    __proto__: null,
    BackButton: Ft,
    default: zt
}, Symbol.toStringTag, {
    value: "Module"
}));
function bo(e) {
    let {onClick: t} = e;
    const [n] = Ce({
        id: "BackButton_bxpvr7",
        fallback: zt,
        translations(r) {
            if (!(["cs", "da", "de", "es", "fi", "fr", "it", "ja", "ko", "nb", "nl", "pl", "pt-BR", "pt-PT", "sv", "th", "tr", "zh-CN", "zh-TW"].indexOf(r) < 0))
                return dt(Object.assign({
                    "./translations/cs.json": () => s( () => import("./cs-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/da.json": () => s( () => import("./da-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/de.json": () => s( () => import("./de-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/en.json": () => s( () => Promise.resolve().then( () => ho), void 0),
                    "./translations/es.json": () => s( () => import("./es-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/fi.json": () => s( () => import("./fi-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/fr.json": () => s( () => import("./fr-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/it.json": () => s( () => import("./it-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/ja.json": () => s( () => import("./ja-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/ko.json": () => s( () => import("./ko-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/nb.json": () => s( () => import("./nb-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/nl.json": () => s( () => import("./nl-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/pl.json": () => s( () => import("./pl-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/pt-BR.json": () => s( () => import("./pt-BR-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/pt-PT.json": () => s( () => import("./pt-PT-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/sv.json": () => s( () => import("./sv-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/th.json": () => s( () => import("./th-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/tr.json": () => s( () => import("./tr-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/zh-CN.json": () => s( () => import("./zh-CN-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), []),
                    "./translations/zh-TW.json": () => s( () => import("./zh-TW-5ffcac3922b57e708db37c9792b724629bac1046.124.js"), [])
                }), `./translations/${r}.json`, 3).then(o => o && o.default)
        }
    });
    return c.jsx(eo, {
        accessibilityLabel: n.translate("BackButton.back"),
        onAction: t,
        icon: "arrow-left"
    })
}
const Eo = "_info_sk6pp_1"
  , yo = "_warning_sk6pp_5"
  , Po = {
    info: Eo,
    warning: yo
};
function at(e) {
    let {tone: t, ...n} = e;
    return c.jsx("div", {
        className: Po[t],
        children: c.jsx(H, {
            tone: "legacy-inherit",
            ...n
        })
    })
}
const Oo = "_info_llmum_1"
  , Io = {
    info: Oo
};
function ko(e) {
    let {tone: t, ...n} = e;
    return t === "info" ? c.jsx("div", {
        className: Io.info,
        children: c.jsx(Q, {
            ...n
        })
    }) : c.jsx(Q, {
        tone: t,
        ...n
    })
}
function Do(e) {
    let {id: t, children: n, tone: r, onClose: o, onBack: a} = e;
    const l = tn()
      , i = nn(`(max-width: ${l.breakpoints["breakpoints-md"]})`);
    function u() {
        if (r == null)
            return "bg-surface-secondary";
        if (r === "warning")
            return i ? "bg-surface-warning" : "bg-fill-warning";
        if (r === "info")
            return i ? "bg-surface-info" : "bg-fill-info"
    }
    function m() {
        if (r == null)
            return null;
        if (r === "warning")
            return c.jsx(at, {
                type: "alert-triangle",
                tone: "warning"
            });
        if (r === "info")
            return c.jsx(at, {
                type: "info",
                tone: "info"
            })
    }
    return c.jsx(We, {
        paddingBlockStart: "400",
        paddingBlockEnd: "400",
        paddingInlineStart: "400",
        paddingInlineEnd: "400",
        borderBlockEndWidth: "025",
        borderColor: "border",
        background: u(),
        children: c.jsxs(En, {
            columns: {
                xs: "1fr auto"
            },
            gap: "400",
            children: [c.jsxs(fe, {
                gap: "400",
                blockAlign: "center",
                children: [a ? c.jsx(bo, {
                    onClick: a
                }) : null, c.jsxs(fe, {
                    gap: "100",
                    blockAlign: "center",
                    children: [m(), c.jsx(ko, {
                        id: t,
                        tone: r,
                        variant: "headingMd",
                        as: "h2",
                        breakWord: !0,
                        children: n
                    })]
                })]
            }), c.jsx(vo, {
                onClick: o
            })]
        })
    })
}
function So(e) {
    let {primaryAction: t, secondaryActions: n, children: r} = e;
    const o = t && Je(t, {
        variant: "primary"
    }) || null
      , a = n && Je(n) || null
      , l = o || a ? c.jsxs(fe, {
        gap: "200",
        children: [a, o]
    }) : null;
    return c.jsx(fe, {
        gap: "400",
        blockAlign: "center",
        children: c.jsx(We, {
            borderColor: "border",
            borderBlockStartWidth: "025",
            minHeight: "var(--p-space-1600)",
            padding: "400",
            paddingInlineStart: "500",
            paddingInlineEnd: "500",
            width: "100%",
            children: c.jsxs(fe, {
                gap: "400",
                blockAlign: "center",
                align: "space-between",
                children: [c.jsx(We, {
                    children: r
                }), l]
            })
        })
    })
}
var jo = Object.defineProperty
  , Lo = Object.getOwnPropertyDescriptor
  , Ao = (e, t, n, r) => {
    for (var o = Lo(t, n), a = e.length - 1, l; a >= 0; a--)
        (l = e[a]) && (o = l(t, n, o) || o);
    return o && jo(t, n, o),
    o
}
;
class Ae extends _.Component {
    componentDidMount() {
        this.document.addEventListener(this.props.keyEvent ?? "keyup", this.handleKeyEvent, {
            capture: this.props.useCapture ?? !1
        })
    }
    componentWillUnmount() {
        this.document.removeEventListener(this.props.keyEvent ?? "keyup", this.handleKeyEvent, this.props.useCapture ?? !1)
    }
    render() {
        return null
    }
    get document() {
        const {document: t=window.document} = this.props;
        return t
    }
    handleKeyEvent(t) {
        const {keyCode: n, handler: r} = this.props
          , o = t;
        o.keyCode === n && r(o)
    }
}
Ao([rn], Ae.prototype, "handleKeyEvent");
function Co(e) {
    let {target: t, children: n} = e;
    const r = _.useCallback(o => {
        const a = Ze(t)
          , l = Ut(t);
        o.target === l && !o.shiftKey && (o.preventDefault(),
        ot(t)),
        o.target === a && o.shiftKey && (o.preventDefault(),
        so(t))
    }
    , [t]);
    return _.useEffect( () => {
        ot(t)
    }
    , [t]),
    c.jsxs(c.Fragment, {
        children: [c.jsx(Ae, {
            document: t.ownerDocument,
            keyCode: He.Tab,
            handler: r,
            keyEvent: "keydown"
        }), n]
    })
}
const To = "_Loading_1ev6c_1"
  , xo = {
    Loading: To
};
function wo() {
    return c.jsx("div", {
        className: xo.Loading,
        children: c.jsx(ut, {})
    })
}
const Ro = "_Content_6nt0h_1"
  , Uo = "_Scrollable_6nt0h_7"
  , it = {
    Content: Ro,
    Scrollable: Uo
}
  , Bo = "modal-header";
function Mo(e) {
    const {sectioned: t, children: n, footer: r, loading: o, primaryAction: a, secondaryActions: l, scrollable: i=!0, title: u, tone: m, onClose: g, renderChildren: f, onBack: p} = e
      , v = t ? co(n, vt.Section, {}) : n
      , [h,I] = _.useState(null)
      , O = o ? c.jsx(wo, {}) : v
      , P = u ? c.jsx(Do, {
        id: Bo,
        onClose: g,
        onBack: p,
        tone: m,
        children: u
    }) : null
      , E = Mt(e) ? c.jsx(So, {
        primaryAction: a,
        secondaryActions: l,
        children: r
    }) : null
      , L = f(O)
      , q = i ? c.jsx(on, {
        shadow: !1,
        className: it.Scrollable,
        vertical: !0,
        children: L
    }) : L
      , M = c.jsxs("div", {
        className: it.Content,
        ref: I,
        children: [P, q, E]
    });
    return h ? c.jsx(Co, {
        target: h,
        children: M
    }) : M
}
function No(e) {
    let {onClose: t, remoteDocument: n} = e;
    return c.jsxs(c.Fragment, {
        children: [c.jsx(Ae, {
            keyCode: He.Escape,
            handler: t
        }), c.jsx(Ae, {
            document: n,
            keyCode: He.Escape,
            handler: t
        })]
    })
}
const Vo = "_Wrapper_1j4qp_2"
  , Fo = "_Iframe_1j4qp_6"
  , st = {
    Wrapper: Vo,
    Iframe: Fo
};
function zo(e) {
    let {children: t, onResize: n} = e;
    const r = _.useRef(null)
      , o = _.useRef(null)
      , a = _.useRef(n)
      , l = _.useCallback( () => {
        an.unstable_batchedUpdates( () => {
            r.current && a.current(r.current)
        }
        )
    }
    , [])
      , i = _.useCallback( () => {
        l(),
        o.current?.contentWindow?.addEventListener("resize", l)
    }
    , [l]);
    return sn( () => {
        a.current = n
    }
    , [n]),
    _.useEffect( () => {
        requestAnimationFrame(l)
    }
    , [l]),
    c.jsxs("div", {
        className: st.Wrapper,
        ref: r,
        children: [t, c.jsx("iframe", {
            srcDoc: "",
            className: st.Iframe,
            ref: o,
            onLoad: i,
            tabIndex: -1,
            "aria-hidden": !0
        })]
    })
}
const $o = 69
  , Wo = 69;
function Ho(e) {
    const {height: t, large: n, size: r, open: o=!0, onClose: a, title: l} = e
      , i = _.useContext(bn)
      , [u,m] = _.useState(null)
      , g = i.getContainer()
      , f = g?.ownerDocument
      , p = l ? $o : 0
      , v = Mt(e) ? Wo : 0
      , h = u ? u + p + v : null
      , I = t ?? h
      , O = _.useCallback(E => {
        m(fo(E))
    }
    , []);
    return _.useEffect( () => {
        o || m(null)
    }
    , [o]),
    c.jsxs(c.Fragment, {
        children: [o && g ? ln.createPortal(c.jsx(Mo, {
            ...e,
            renderChildren: P
        }), g) : null, o && I != null ? c.jsx(lo, {
            title: typeof l == "string" ? l : "",
            height: I,
            onClose: a,
            large: n,
            size: r
        }) : null, o && f ? c.jsx(No, {
            onClose: a,
            remoteDocument: f
        }) : null]
    });
    function P(E) {
        return t == null ? c.jsx(zo, {
            onResize: O,
            children: E
        }) : E
    }
}
Ho.Section = vt.Section;
const Qo = {
    kind: "Document",
    definitions: [{
        kind: "OperationDefinition",
        operation: "query",
        name: {
            kind: "Name",
            value: "ShopPlan"
        },
        variableDefinitions: [],
        directives: [],
        selectionSet: {
            kind: "SelectionSet",
            selections: [{
                kind: "Field",
                name: {
                    kind: "Name",
                    value: "shop"
                },
                arguments: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "id"
                        },
                        arguments: [],
                        directives: []
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "plan"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "shopifyPlus"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "partnerDevelopment"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "trial"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "__typename"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }, {
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "__typename"
                        },
                        arguments: [],
                        directives: []
                    }]
                }
            }]
        }
    }],
    loc: {
        start: 0,
        end: 93,
        source: {
            body: "query ShopPlan{shop{id plan{name shopifyPlus partnerDevelopment trial __typename}__typename}}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        }
    },
    id: "4aed5312b2d386ace71ca41f7d12d4dde892e00d6ca22dde180f325252d84b6f"
}
  , oa = () => {
    const {data: e, loading: t, refetch: n} = yn(Qo, {
        fetchPolicy: "cache-first"
    });
    return {
        plan: e?.shop.plan,
        loading: t,
        refetch: n
    }
}
;
export {jt as A, je as C, x as D, Gn as H, Jn as I, Ae as K, Kn as L, Ho as M, eo as P, Lt as T, At as _, ea as a, Et as b, Rn as c, ht as d, In as e, Bn as f, nt as g, ta as h, Yn as i, Yo as j, qn as k, ot as l, Xo as m, oa as n, Xr as o, bt as p, ra as q, er as r, na as s, yt as t, Cn as u, kn as v, Ze as w};
//# sourceMappingURL=useShopPlan-5ffcac3922b57e708db37c9792b724629bac1046.1.js.map
