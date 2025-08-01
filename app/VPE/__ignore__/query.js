import {e as f, N as B, R as U, O as F} from "./DesignSystemProvider.js";
import {g as V} from "./PolarisPage.js";
import {c as H, A as K} from "./main.js";
function W() {
    const r = f.useRef(!0);
    return B( () => (r.current = !0,
    () => {
        r.current = !1
    }
    ), []),
    r
}
var j, A;
function X() {
    return A || (A = 1,
    j = function r(e, t) {
        if (e === t)
            return !0;
        if (e && t && typeof e == "object" && typeof t == "object") {
            if (e.constructor !== t.constructor)
                return !1;
            var n, u, i;
            if (Array.isArray(e)) {
                if (n = e.length,
                n != t.length)
                    return !1;
                for (u = n; u-- !== 0; )
                    if (!r(e[u], t[u]))
                        return !1;
                return !0
            }
            if (e.constructor === RegExp)
                return e.source === t.source && e.flags === t.flags;
            if (e.valueOf !== Object.prototype.valueOf)
                return e.valueOf() === t.valueOf();
            if (e.toString !== Object.prototype.toString)
                return e.toString() === t.toString();
            if (i = Object.keys(e),
            n = i.length,
            n !== Object.keys(t).length)
                return !1;
            for (u = n; u-- !== 0; )
                if (!Object.prototype.hasOwnProperty.call(t, i[u]))
                    return !1;
            for (u = n; u-- !== 0; ) {
                var l = i[u];
                if (!r(e[l], t[l]))
                    return !1
            }
            return !0
        }
        return e !== e && t !== t
    }
    ),
    j
}
var Y = X();
const Z = V(Y)
  , $ = U.createContext(null);
function _(r) {
    let {scripts: e, styles: t} = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const n = f.useContext($);
    F( () => {
        n && r && n.markAsUsed(r, {
            scripts: e,
            styles: t
        })
    }
    , n?.effect)
}
function O(r) {
    const [e,t] = f.useState( () => P(r) ? r : r.resolver.resolved)
      , n = W()
      , u = f.useCallback(async () => {
        if (!P(r))
            try {
                const i = await r.resolver.resolve();
                n.current && t(i)
            } catch {
                throw Error("error loading GraphQL document")
            }
    }
    , [r, n]);
    return f.useEffect( () => {
        e || u()
    }
    , [e, u]),
    _(P(r) ? void 0 : r.resolver.id),
    e
}
function P(r) {
    return !!(r && r.kind && r.kind === "Document")
}
const {prototype: {hasOwnProperty: q}} = Object;
function rt(r) {
    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
        t[n - 1] = arguments[n];
    const [u={}] = t
      , {skip: i=!1, fetchPolicy: l, errorPolicy: x, pollInterval: M, client: I, notifyOnNetworkStatusChange: Q, context: m, ssr: z=!0} = u
      , c = u.variables || {}
      , d = H(I);
    if (typeof window > "u") {
        if (i)
            return k(d, c);
        if (!z || l === "no-cache")
            return k(d, c, void 0, !0)
    }
    const S = O(r)
      , y = typeof window > "u" && (l === "network-only" || l === "cache-and-network") ? "cache-first" : l
      , L = c && JSON.stringify(c)
      , v = f.useMemo( () => S ? {
        query: S,
        context: m,
        variables: c,
        fetchPolicy: y,
        errorPolicy: x,
        pollInterval: M,
        notifyOnNetworkStatusChange: Q
    } : null, [S, m && JSON.stringify(m), L, y, x, M, Q])
      , s = f.useMemo( () => {
        if (!(i || !v))
            return d.watchQuery(v)
    }
    , [d, i, v]);
    F( () => s == null ? void 0 : s.getCurrentResult().loading ? s.result() : void 0);
    const R = f.useMemo( () => k(d, c, s), [s, d, L])
      , [G,J] = f.useState(0);
    f.useEffect( () => {
        if (i || !s)
            return;
        let o, p;
        const E = () => {
            J(a => a + 1)
        }
        ;
        function g(a) {
            const T = s?.last;
            N();
            try {
                s?.resetLastResults(),
                D()
            } finally {
                s.last = T
            }
            if (!q.call(a, "graphQLErrors"))
                throw a;
            (!p || !Z(a, p)) && E(),
            p = a
        }
        function D() {
            o = s.subscribe(a => {
                p = void 0,
                !(C.loading === a.loading && C.networkStatus === a.networkStatus && a.partial) && E()
            }
            , a => {
                g(a)
            }
            )
        }
        function N() {
            o && o.unsubscribe(),
            o = void 0
        }
        return D(),
        N
    }
    , [i, s]);
    const w = f.useRef(void 0)
      , C = f.useMemo( () => {
        if (i)
            return R;
        if (!s)
            return {
                ...R,
                loading: !0
            };
        const o = s.getCurrentResult()
          , {fetchPolicy: p} = s.options
          , E = o.errors && o.errors.length > 0;
        let g = o.data;
        return o.loading ? g = w.current || o && o.data ? {
            ...w.current || {},
            ...o && o.data || {}
        } : void 0 : E ? g = (s.getLastResult() || {}).data : p === "no-cache" && (!o.data || Object.keys(o.data).length === 0) ? g = w.current : w.current = o.data,
        {
            ...R,
            data: g,
            error: E ? new K({
                graphQLErrors: o.errors
            }) : o.error,
            networkStatus: o.networkStatus,
            loading: o.loading
        }
    }
    , [G, i, s, R, w]);
    return C
}
function k(r, e, t) {
    return {
        data: void 0,
        error: void 0,
        networkStatus: void 0,
        loading: arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
        called: !1,
        variables: t ? t.variables : e,
        refetch: t ? t.refetch.bind(t) : h,
        fetchMore: t ? t.fetchMore.bind(t) : h,
        updateQuery: t ? t.updateQuery.bind(t) : h,
        startPolling: t ? t.startPolling.bind(t) : h,
        stopPolling: t ? t.stopPolling.bind(t) : h,
        subscribeToMore: t ? t.subscribeToMore.bind(t) : h,
        client: r
    }
}
function h() {}
export {W as a, Z as i, rt as u};
//# sourceMappingURL=query-099b899aee0a640061cc9a8905064d9bdd640207.1.js.map
