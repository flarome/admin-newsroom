var me = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Qn(r) {
    return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r
}
function Zn(r) {
    if (Object.prototype.hasOwnProperty.call(r, "__esModule"))
        return r;
    var e = r.default;
    if (typeof e == "function") {
        var n = function a() {
            return this instanceof a ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(r).forEach(function(a) {
        var o = Object.getOwnPropertyDescriptor(r, a);
        Object.defineProperty(n, a, o.get ? o : {
            enumerable: !0,
            get: function() {
                return r[a]
            }
        })
    }),
    n
}
var Y = {
    exports: {}
}, $ = {}, J = {
    exports: {}
}, ge = {}, k, Se;
function F() {
    if (Se)
        return k;
    Se = 1;
    var r = function(e) {
        return e && e.Math === Math && e
    };
    return k = r(typeof globalThis == "object" && globalThis) || r(typeof window == "object" && window) || r(typeof self == "object" && self) || r(typeof me == "object" && me) || r(typeof k == "object" && k) || function() {
        return this
    }() || Function("return this")(),
    k
}
var X = {}, Q, Re;
function N() {
    return Re || (Re = 1,
    Q = function(r) {
        try {
            return !!r()
        } catch {
            return !0
        }
    }
    ),
    Q
}
var Z, qe;
function M() {
    if (qe)
        return Z;
    qe = 1;
    var r = N();
    return Z = !r(function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1] !== 7
    }),
    Z
}
var rr, Ee;
function $t() {
    if (Ee)
        return rr;
    Ee = 1;
    var r = N();
    return rr = !r(function() {
        var e = function() {}
        .bind();
        return typeof e != "function" || e.hasOwnProperty("prototype")
    }),
    rr
}
var er, Ie;
function fe() {
    if (Ie)
        return er;
    Ie = 1;
    var r = $t()
      , e = Function.prototype.call;
    return er = r ? e.bind(e) : function() {
        return e.apply(e, arguments)
    }
    ,
    er
}
var tr = {}, Pe;
function ln() {
    if (Pe)
        return tr;
    Pe = 1;
    var r = {}.propertyIsEnumerable
      , e = Object.getOwnPropertyDescriptor
      , n = e && !r.call({
        1: 2
    }, 1);
    return tr.f = n ? function(o) {
        var u = e(this, o);
        return !!u && u.enumerable
    }
    : r,
    tr
}
var nr, we;
function kt() {
    return we || (we = 1,
    nr = function(r, e) {
        return {
            enumerable: !(r & 1),
            configurable: !(r & 2),
            writable: !(r & 4),
            value: e
        }
    }
    ),
    nr
}
var ar, _e;
function A() {
    if (_e)
        return ar;
    _e = 1;
    var r = $t()
      , e = Function.prototype
      , n = e.call
      , a = r && e.bind.bind(n, n);
    return ar = r ? a : function(o) {
        return function() {
            return n.apply(o, arguments)
        }
    }
    ,
    ar
}
var or, je;
function Gt() {
    if (je)
        return or;
    je = 1;
    var r = A()
      , e = r({}.toString)
      , n = r("".slice);
    return or = function(a) {
        return n(e(a), 8, -1)
    }
    ,
    or
}
var ur, Te;
function vn() {
    if (Te)
        return ur;
    Te = 1;
    var r = A()
      , e = N()
      , n = Gt()
      , a = Object
      , o = r("".split);
    return ur = e(function() {
        return !a("z").propertyIsEnumerable(0)
    }) ? function(u) {
        return n(u) === "String" ? o(u, "") : a(u)
    }
    : a,
    ur
}
var ir, Ce;
function Ut() {
    return Ce || (Ce = 1,
    ir = function(r) {
        return r == null
    }
    ),
    ir
}
var cr, De;
function Kt() {
    if (De)
        return cr;
    De = 1;
    var r = Ut()
      , e = TypeError;
    return cr = function(n) {
        if (r(n))
            throw new e("Can't call method on " + n);
        return n
    }
    ,
    cr
}
var sr, Fe;
function le() {
    if (Fe)
        return sr;
    Fe = 1;
    var r = vn()
      , e = Kt();
    return sr = function(n) {
        return r(e(n))
    }
    ,
    sr
}
var fr, xe;
function x() {
    if (xe)
        return fr;
    xe = 1;
    var r = typeof document == "object" && document.all;
    return fr = typeof r > "u" && r !== void 0 ? function(e) {
        return typeof e == "function" || e === r
    }
    : function(e) {
        return typeof e == "function"
    }
    ,
    fr
}
var lr, Ne;
function G() {
    if (Ne)
        return lr;
    Ne = 1;
    var r = x();
    return lr = function(e) {
        return typeof e == "object" ? e !== null : r(e)
    }
    ,
    lr
}
var vr, Ae;
function Vt() {
    if (Ae)
        return vr;
    Ae = 1;
    var r = F()
      , e = x()
      , n = function(a) {
        return e(a) ? a : void 0
    };
    return vr = function(a, o) {
        return arguments.length < 2 ? n(r[a]) : r[a] && r[a][o]
    }
    ,
    vr
}
var yr, Me;
function yn() {
    if (Me)
        return yr;
    Me = 1;
    var r = A();
    return yr = r({}.isPrototypeOf),
    yr
}
var pr, Le;
function pn() {
    if (Le)
        return pr;
    Le = 1;
    var r = F()
      , e = r.navigator
      , n = e && e.userAgent;
    return pr = n ? String(n) : "",
    pr
}
var dr, Be;
function dn() {
    if (Be)
        return dr;
    Be = 1;
    var r = F(), e = pn(), n = r.process, a = r.Deno, o = n && n.versions || a && a.version, u = o && o.v8, c, s;
    return u && (c = u.split("."),
    s = c[0] > 0 && c[0] < 4 ? 1 : +(c[0] + c[1])),
    !s && e && (c = e.match(/Edge\/(\d+)/),
    (!c || c[1] >= 74) && (c = e.match(/Chrome\/(\d+)/),
    c && (s = +c[1]))),
    dr = s,
    dr
}
var hr, $e;
function Wt() {
    if ($e)
        return hr;
    $e = 1;
    var r = dn()
      , e = N()
      , n = F()
      , a = n.String;
    return hr = !!Object.getOwnPropertySymbols && !e(function() {
        var o = Symbol("symbol detection");
        return !a(o) || !(Object(o)instanceof Symbol) || !Symbol.sham && r && r < 41
    }),
    hr
}
var br, ke;
function Ht() {
    if (ke)
        return br;
    ke = 1;
    var r = Wt();
    return br = r && !Symbol.sham && typeof Symbol.iterator == "symbol",
    br
}
var Or, Ge;
function zt() {
    if (Ge)
        return Or;
    Ge = 1;
    var r = Vt()
      , e = x()
      , n = yn()
      , a = Ht()
      , o = Object;
    return Or = a ? function(u) {
        return typeof u == "symbol"
    }
    : function(u) {
        var c = r("Symbol");
        return e(c) && n(c.prototype, o(u))
    }
    ,
    Or
}
var mr, Ue;
function hn() {
    if (Ue)
        return mr;
    Ue = 1;
    var r = String;
    return mr = function(e) {
        try {
            return r(e)
        } catch {
            return "Object"
        }
    }
    ,
    mr
}
var gr, Ke;
function bn() {
    if (Ke)
        return gr;
    Ke = 1;
    var r = x()
      , e = hn()
      , n = TypeError;
    return gr = function(a) {
        if (r(a))
            return a;
        throw new n(e(a) + " is not a function")
    }
    ,
    gr
}
var Sr, Ve;
function On() {
    if (Ve)
        return Sr;
    Ve = 1;
    var r = bn()
      , e = Ut();
    return Sr = function(n, a) {
        var o = n[a];
        return e(o) ? void 0 : r(o)
    }
    ,
    Sr
}
var Rr, We;
function mn() {
    if (We)
        return Rr;
    We = 1;
    var r = fe()
      , e = x()
      , n = G()
      , a = TypeError;
    return Rr = function(o, u) {
        var c, s;
        if (u === "string" && e(c = o.toString) && !n(s = r(c, o)) || e(c = o.valueOf) && !n(s = r(c, o)) || u !== "string" && e(c = o.toString) && !n(s = r(c, o)))
            return s;
        throw new a("Can't convert object to primitive value")
    }
    ,
    Rr
}
var qr = {
    exports: {}
}, Er, He;
function gn() {
    return He || (He = 1,
    Er = !1),
    Er
}
var Ir, ze;
function ve() {
    if (ze)
        return Ir;
    ze = 1;
    var r = F()
      , e = Object.defineProperty;
    return Ir = function(n, a) {
        try {
            e(r, n, {
                value: a,
                configurable: !0,
                writable: !0
            })
        } catch {
            r[n] = a
        }
        return a
    }
    ,
    Ir
}
var Ye;
function ye() {
    if (Ye)
        return qr.exports;
    Ye = 1;
    var r = gn()
      , e = F()
      , n = ve()
      , a = "__core-js_shared__"
      , o = qr.exports = e[a] || n(a, {});
    return (o.versions || (o.versions = [])).push({
        version: "3.40.0",
        mode: r ? "pure" : "global",
        copyright: "© 2014-2025 Denis Pushkarev (zloirock.ru)",
        license: "https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",
        source: "https://github.com/zloirock/core-js"
    }),
    qr.exports
}
var Pr, Je;
function Yt() {
    if (Je)
        return Pr;
    Je = 1;
    var r = ye();
    return Pr = function(e, n) {
        return r[e] || (r[e] = n || {})
    }
    ,
    Pr
}
var wr, Xe;
function Jt() {
    if (Xe)
        return wr;
    Xe = 1;
    var r = Kt()
      , e = Object;
    return wr = function(n) {
        return e(r(n))
    }
    ,
    wr
}
var _r, Qe;
function L() {
    if (Qe)
        return _r;
    Qe = 1;
    var r = A()
      , e = Jt()
      , n = r({}.hasOwnProperty);
    return _r = Object.hasOwn || function(o, u) {
        return n(e(o), u)
    }
    ,
    _r
}
var jr, Ze;
function Xt() {
    if (Ze)
        return jr;
    Ze = 1;
    var r = A()
      , e = 0
      , n = Math.random()
      , a = r(1.toString);
    return jr = function(o) {
        return "Symbol(" + (o === void 0 ? "" : o) + ")_" + a(++e + n, 36)
    }
    ,
    jr
}
var Tr, rt;
function Sn() {
    if (rt)
        return Tr;
    rt = 1;
    var r = F()
      , e = Yt()
      , n = L()
      , a = Xt()
      , o = Wt()
      , u = Ht()
      , c = r.Symbol
      , s = e("wks")
      , f = u ? c.for || c : c && c.withoutSetter || a;
    return Tr = function(l) {
        return n(s, l) || (s[l] = o && n(c, l) ? c[l] : f("Symbol." + l)),
        s[l]
    }
    ,
    Tr
}
var Cr, et;
function Rn() {
    if (et)
        return Cr;
    et = 1;
    var r = fe()
      , e = G()
      , n = zt()
      , a = On()
      , o = mn()
      , u = Sn()
      , c = TypeError
      , s = u("toPrimitive");
    return Cr = function(f, l) {
        if (!e(f) || n(f))
            return f;
        var v = a(f, s), y;
        if (v) {
            if (l === void 0 && (l = "default"),
            y = r(v, f, l),
            !e(y) || n(y))
                return y;
            throw new c("Can't convert object to primitive value")
        }
        return l === void 0 && (l = "number"),
        o(f, l)
    }
    ,
    Cr
}
var Dr, tt;
function Qt() {
    if (tt)
        return Dr;
    tt = 1;
    var r = Rn()
      , e = zt();
    return Dr = function(n) {
        var a = r(n, "string");
        return e(a) ? a : a + ""
    }
    ,
    Dr
}
var Fr, nt;
function qn() {
    if (nt)
        return Fr;
    nt = 1;
    var r = F()
      , e = G()
      , n = r.document
      , a = e(n) && e(n.createElement);
    return Fr = function(o) {
        return a ? n.createElement(o) : {}
    }
    ,
    Fr
}
var xr, at;
function Zt() {
    if (at)
        return xr;
    at = 1;
    var r = M()
      , e = N()
      , n = qn();
    return xr = !r && !e(function() {
        return Object.defineProperty(n("div"), "a", {
            get: function() {
                return 7
            }
        }).a !== 7
    }),
    xr
}
var ot;
function rn() {
    if (ot)
        return X;
    ot = 1;
    var r = M()
      , e = fe()
      , n = ln()
      , a = kt()
      , o = le()
      , u = Qt()
      , c = L()
      , s = Zt()
      , f = Object.getOwnPropertyDescriptor;
    return X.f = r ? f : function(v, y) {
        if (v = o(v),
        y = u(y),
        s)
            try {
                return f(v, y)
            } catch {}
        if (c(v, y))
            return a(!e(n.f, v, y), v[y])
    }
    ,
    X
}
var Nr = {}, Ar, ut;
function En() {
    if (ut)
        return Ar;
    ut = 1;
    var r = M()
      , e = N();
    return Ar = r && e(function() {
        return Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype !== 42
    }),
    Ar
}
var Mr, it;
function en() {
    if (it)
        return Mr;
    it = 1;
    var r = G()
      , e = String
      , n = TypeError;
    return Mr = function(a) {
        if (r(a))
            return a;
        throw new n(e(a) + " is not an object")
    }
    ,
    Mr
}
var ct;
function pe() {
    if (ct)
        return Nr;
    ct = 1;
    var r = M()
      , e = Zt()
      , n = En()
      , a = en()
      , o = Qt()
      , u = TypeError
      , c = Object.defineProperty
      , s = Object.getOwnPropertyDescriptor
      , f = "enumerable"
      , l = "configurable"
      , v = "writable";
    return Nr.f = r ? n ? function(O, b, h) {
        if (a(O),
        b = o(b),
        a(h),
        typeof O == "function" && b === "prototype" && "value"in h && v in h && !h[v]) {
            var I = s(O, b);
            I && I[v] && (O[b] = h.value,
            h = {
                configurable: l in h ? h[l] : I[l],
                enumerable: f in h ? h[f] : I[f],
                writable: !1
            })
        }
        return c(O, b, h)
    }
    : c : function(O, b, h) {
        if (a(O),
        b = o(b),
        a(h),
        e)
            try {
                return c(O, b, h)
            } catch {}
        if ("get"in h || "set"in h)
            throw new u("Accessors not supported");
        return "value"in h && (O[b] = h.value),
        O
    }
    ,
    Nr
}
var Lr, st;
function tn() {
    if (st)
        return Lr;
    st = 1;
    var r = M()
      , e = pe()
      , n = kt();
    return Lr = r ? function(a, o, u) {
        return e.f(a, o, n(1, u))
    }
    : function(a, o, u) {
        return a[o] = u,
        a
    }
    ,
    Lr
}
var Br = {
    exports: {}
}, $r, ft;
function In() {
    if (ft)
        return $r;
    ft = 1;
    var r = M()
      , e = L()
      , n = Function.prototype
      , a = r && Object.getOwnPropertyDescriptor
      , o = e(n, "name")
      , u = o && function() {}
    .name === "something"
      , c = o && (!r || r && a(n, "name").configurable);
    return $r = {
        EXISTS: o,
        PROPER: u,
        CONFIGURABLE: c
    },
    $r
}
var kr, lt;
function Pn() {
    if (lt)
        return kr;
    lt = 1;
    var r = A()
      , e = x()
      , n = ye()
      , a = r(Function.toString);
    return e(n.inspectSource) || (n.inspectSource = function(o) {
        return a(o)
    }
    ),
    kr = n.inspectSource,
    kr
}
var Gr, vt;
function wn() {
    if (vt)
        return Gr;
    vt = 1;
    var r = F()
      , e = x()
      , n = r.WeakMap;
    return Gr = e(n) && /native code/.test(String(n)),
    Gr
}
var Ur, yt;
function _n() {
    if (yt)
        return Ur;
    yt = 1;
    var r = Yt()
      , e = Xt()
      , n = r("keys");
    return Ur = function(a) {
        return n[a] || (n[a] = e(a))
    }
    ,
    Ur
}
var Kr, pt;
function nn() {
    return pt || (pt = 1,
    Kr = {}),
    Kr
}
var Vr, dt;
function jn() {
    if (dt)
        return Vr;
    dt = 1;
    var r = wn(), e = F(), n = G(), a = tn(), o = L(), u = ye(), c = _n(), s = nn(), f = "Object already initialized", l = e.TypeError, v = e.WeakMap, y, O, b, h = function(p) {
        return b(p) ? O(p) : y(p, {})
    }, I = function(p) {
        return function(g) {
            var j;
            if (!n(g) || (j = O(g)).type !== p)
                throw new l("Incompatible receiver, " + p + " required");
            return j
        }
    };
    if (r || u.state) {
        var R = u.state || (u.state = new v);
        R.get = R.get,
        R.has = R.has,
        R.set = R.set,
        y = function(p, g) {
            if (R.has(p))
                throw new l(f);
            return g.facade = p,
            R.set(p, g),
            g
        }
        ,
        O = function(p) {
            return R.get(p) || {}
        }
        ,
        b = function(p) {
            return R.has(p)
        }
    } else {
        var T = c("state");
        s[T] = !0,
        y = function(p, g) {
            if (o(p, T))
                throw new l(f);
            return g.facade = p,
            a(p, T, g),
            g
        }
        ,
        O = function(p) {
            return o(p, T) ? p[T] : {}
        }
        ,
        b = function(p) {
            return o(p, T)
        }
    }
    return Vr = {
        set: y,
        get: O,
        has: b,
        enforce: h,
        getterFor: I
    },
    Vr
}
var ht;
function Tn() {
    if (ht)
        return Br.exports;
    ht = 1;
    var r = A()
      , e = N()
      , n = x()
      , a = L()
      , o = M()
      , u = In().CONFIGURABLE
      , c = Pn()
      , s = jn()
      , f = s.enforce
      , l = s.get
      , v = String
      , y = Object.defineProperty
      , O = r("".slice)
      , b = r("".replace)
      , h = r([].join)
      , I = o && !e(function() {
        return y(function() {}, "length", {
            value: 8
        }).length !== 8
    })
      , R = String(String).split("String")
      , T = Br.exports = function(p, g, j) {
        O(v(g), 0, 7) === "Symbol(" && (g = "[" + b(v(g), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
        j && j.getter && (g = "get " + g),
        j && j.setter && (g = "set " + g),
        (!a(p, "name") || u && p.name !== g) && (o ? y(p, "name", {
            value: g,
            configurable: !0
        }) : p.name = g),
        I && j && a(j, "arity") && p.length !== j.arity && y(p, "length", {
            value: j.arity
        });
        try {
            j && a(j, "constructor") && j.constructor ? o && y(p, "prototype", {
                writable: !1
            }) : p.prototype && (p.prototype = void 0)
        } catch {}
        var B = f(p);
        return a(B, "source") || (B.source = h(R, typeof g == "string" ? g : "")),
        p
    }
    ;
    return Function.prototype.toString = T(function() {
        return n(this) && l(this).source || c(this)
    }, "toString"),
    Br.exports
}
var Wr, bt;
function Cn() {
    if (bt)
        return Wr;
    bt = 1;
    var r = x()
      , e = pe()
      , n = Tn()
      , a = ve();
    return Wr = function(o, u, c, s) {
        s || (s = {});
        var f = s.enumerable
          , l = s.name !== void 0 ? s.name : u;
        if (r(c) && n(c, l, s),
        s.global)
            f ? o[u] = c : a(u, c);
        else {
            try {
                s.unsafe ? o[u] && (f = !0) : delete o[u]
            } catch {}
            f ? o[u] = c : e.f(o, u, {
                value: c,
                enumerable: !1,
                configurable: !s.nonConfigurable,
                writable: !s.nonWritable
            })
        }
        return o
    }
    ,
    Wr
}
var Hr = {}, zr, Ot;
function Dn() {
    if (Ot)
        return zr;
    Ot = 1;
    var r = Math.ceil
      , e = Math.floor;
    return zr = Math.trunc || function(a) {
        var o = +a;
        return (o > 0 ? e : r)(o)
    }
    ,
    zr
}
var Yr, mt;
function an() {
    if (mt)
        return Yr;
    mt = 1;
    var r = Dn();
    return Yr = function(e) {
        var n = +e;
        return n !== n || n === 0 ? 0 : r(n)
    }
    ,
    Yr
}
var Jr, gt;
function Fn() {
    if (gt)
        return Jr;
    gt = 1;
    var r = an()
      , e = Math.max
      , n = Math.min;
    return Jr = function(a, o) {
        var u = r(a);
        return u < 0 ? e(u + o, 0) : n(u, o)
    }
    ,
    Jr
}
var Xr, St;
function xn() {
    if (St)
        return Xr;
    St = 1;
    var r = an()
      , e = Math.min;
    return Xr = function(n) {
        var a = r(n);
        return a > 0 ? e(a, 9007199254740991) : 0
    }
    ,
    Xr
}
var Qr, Rt;
function on() {
    if (Rt)
        return Qr;
    Rt = 1;
    var r = xn();
    return Qr = function(e) {
        return r(e.length)
    }
    ,
    Qr
}
var Zr, qt;
function Nn() {
    if (qt)
        return Zr;
    qt = 1;
    var r = le()
      , e = Fn()
      , n = on()
      , a = function(o) {
        return function(u, c, s) {
            var f = r(u)
              , l = n(f);
            if (l === 0)
                return !o && -1;
            var v = e(s, l), y;
            if (o && c !== c) {
                for (; l > v; )
                    if (y = f[v++],
                    y !== y)
                        return !0
            } else
                for (; l > v; v++)
                    if ((o || v in f) && f[v] === c)
                        return o || v || 0;
            return !o && -1
        }
    };
    return Zr = {
        includes: a(!0),
        indexOf: a(!1)
    },
    Zr
}
var re, Et;
function An() {
    if (Et)
        return re;
    Et = 1;
    var r = A()
      , e = L()
      , n = le()
      , a = Nn().indexOf
      , o = nn()
      , u = r([].push);
    return re = function(c, s) {
        var f = n(c), l = 0, v = [], y;
        for (y in f)
            !e(o, y) && e(f, y) && u(v, y);
        for (; s.length > l; )
            e(f, y = s[l++]) && (~a(v, y) || u(v, y));
        return v
    }
    ,
    re
}
var ee, It;
function Mn() {
    return It || (It = 1,
    ee = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]),
    ee
}
var Pt;
function Ln() {
    if (Pt)
        return Hr;
    Pt = 1;
    var r = An()
      , e = Mn()
      , n = e.concat("length", "prototype");
    return Hr.f = Object.getOwnPropertyNames || function(o) {
        return r(o, n)
    }
    ,
    Hr
}
var te = {}, wt;
function Bn() {
    return wt || (wt = 1,
    te.f = Object.getOwnPropertySymbols),
    te
}
var ne, _t;
function $n() {
    if (_t)
        return ne;
    _t = 1;
    var r = Vt()
      , e = A()
      , n = Ln()
      , a = Bn()
      , o = en()
      , u = e([].concat);
    return ne = r("Reflect", "ownKeys") || function(s) {
        var f = n.f(o(s))
          , l = a.f;
        return l ? u(f, l(s)) : f
    }
    ,
    ne
}
var ae, jt;
function kn() {
    if (jt)
        return ae;
    jt = 1;
    var r = L()
      , e = $n()
      , n = rn()
      , a = pe();
    return ae = function(o, u, c) {
        for (var s = e(u), f = a.f, l = n.f, v = 0; v < s.length; v++) {
            var y = s[v];
            !r(o, y) && !(c && r(c, y)) && f(o, y, l(u, y))
        }
    }
    ,
    ae
}
var oe, Tt;
function Gn() {
    if (Tt)
        return oe;
    Tt = 1;
    var r = N()
      , e = x()
      , n = /#|\.prototype\./
      , a = function(f, l) {
        var v = u[o(f)];
        return v === s ? !0 : v === c ? !1 : e(l) ? r(l) : !!l
    }
      , o = a.normalize = function(f) {
        return String(f).replace(n, ".").toLowerCase()
    }
      , u = a.data = {}
      , c = a.NATIVE = "N"
      , s = a.POLYFILL = "P";
    return oe = a,
    oe
}
var ue, Ct;
function Un() {
    if (Ct)
        return ue;
    Ct = 1;
    var r = F()
      , e = rn().f
      , n = tn()
      , a = Cn()
      , o = ve()
      , u = kn()
      , c = Gn();
    return ue = function(s, f) {
        var l = s.target, v = s.global, y = s.stat, O, b, h, I, R, T;
        if (v ? b = r : y ? b = r[l] || o(l, {}) : b = r[l] && r[l].prototype,
        b)
            for (h in f) {
                if (R = f[h],
                s.dontCallGetSet ? (T = e(b, h),
                I = T && T.value) : I = b[h],
                O = c(v ? h : l + (y ? "." : "#") + h, s.forced),
                !O && I !== void 0) {
                    if (typeof R == typeof I)
                        continue;
                    u(R, I)
                }
                (s.sham || I && I.sham) && n(R, "sham", !0),
                a(b, h, R, s)
            }
    }
    ,
    ue
}
var ie, Dt;
function Kn() {
    if (Dt)
        return ie;
    Dt = 1;
    var r = Gt();
    return ie = Array.isArray || function(n) {
        return r(n) === "Array"
    }
    ,
    ie
}
var ce, Ft;
function Vn() {
    if (Ft)
        return ce;
    Ft = 1;
    var r = M()
      , e = Kn()
      , n = TypeError
      , a = Object.getOwnPropertyDescriptor
      , o = r && !function() {
        if (this !== void 0)
            return !0;
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).length = 1
        } catch (u) {
            return u instanceof TypeError
        }
    }();
    return ce = o ? function(u, c) {
        if (e(u) && !a(u, "length").writable)
            throw new n("Cannot set read only .length");
        return u.length = c
    }
    : function(u, c) {
        return u.length = c
    }
    ,
    ce
}
var se, xt;
function Wn() {
    if (xt)
        return se;
    xt = 1;
    var r = TypeError
      , e = 9007199254740991;
    return se = function(n) {
        if (n > e)
            throw r("Maximum allowed index exceeded");
        return n
    }
    ,
    se
}
var Nt;
function Hn() {
    if (Nt)
        return ge;
    Nt = 1;
    var r = Un()
      , e = Jt()
      , n = on()
      , a = Vn()
      , o = Wn()
      , u = N()
      , c = u(function() {
        return [].push.call({
            length: 4294967296
        }, 1) !== 4294967297
    })
      , s = function() {
        try {
            Object.defineProperty([], "length", {
                writable: !1
            }).push()
        } catch (l) {
            return l instanceof TypeError
        }
    }
      , f = c || !s();
    return r({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: f
    }, {
        push: function(v) {
            var y = e(this)
              , O = n(y)
              , b = arguments.length;
            o(O + b);
            for (var h = 0; h < b; h++)
                y[O] = arguments[h],
                O++;
            return a(y, O),
            O
        }
    }),
    ge
}
Hn();
var d = {}, At;
function zn() {
    if (At)
        return d;
    At = 1;
    var r = Symbol.for("react.element")
      , e = Symbol.for("react.portal")
      , n = Symbol.for("react.fragment")
      , a = Symbol.for("react.strict_mode")
      , o = Symbol.for("react.profiler")
      , u = Symbol.for("react.provider")
      , c = Symbol.for("react.context")
      , s = Symbol.for("react.forward_ref")
      , f = Symbol.for("react.suspense")
      , l = Symbol.for("react.memo")
      , v = Symbol.for("react.lazy")
      , y = Symbol.iterator;
    function O(t) {
        return t === null || typeof t != "object" ? null : (t = y && t[y] || t["@@iterator"],
        typeof t == "function" ? t : null)
    }
    var b = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    }
      , h = Object.assign
      , I = {};
    function R(t, i, m) {
        this.props = t,
        this.context = i,
        this.refs = I,
        this.updater = m || b
    }
    R.prototype.isReactComponent = {},
    R.prototype.setState = function(t, i) {
        if (typeof t != "object" && typeof t != "function" && t != null)
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, t, i, "setState")
    }
    ,
    R.prototype.forceUpdate = function(t) {
        this.updater.enqueueForceUpdate(this, t, "forceUpdate")
    }
    ;
    function T() {}
    T.prototype = R.prototype;
    function p(t, i, m) {
        this.props = t,
        this.context = i,
        this.refs = I,
        this.updater = m || b
    }
    var g = p.prototype = new T;
    g.constructor = p,
    h(g, R.prototype),
    g.isPureReactComponent = !0;
    var j = Array.isArray
      , B = Object.prototype.hasOwnProperty
      , U = {
        current: null
    }
      , de = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function he(t, i, m) {
        var q, S = {}, P = null, _ = null;
        if (i != null)
            for (q in i.ref !== void 0 && (_ = i.ref),
            i.key !== void 0 && (P = "" + i.key),
            i)
                B.call(i, q) && !de.hasOwnProperty(q) && (S[q] = i[q]);
        var w = arguments.length - 2;
        if (w === 1)
            S.children = m;
        else if (1 < w) {
            for (var E = Array(w), D = 0; D < w; D++)
                E[D] = arguments[D + 2];
            S.children = E
        }
        if (t && t.defaultProps)
            for (q in w = t.defaultProps,
            w)
                S[q] === void 0 && (S[q] = w[q]);
        return {
            $$typeof: r,
            type: t,
            key: P,
            ref: _,
            props: S,
            _owner: U.current
        }
    }
    function un(t, i) {
        return {
            $$typeof: r,
            type: t.type,
            key: i,
            ref: t.ref,
            props: t.props,
            _owner: t._owner
        }
    }
    function H(t) {
        return typeof t == "object" && t !== null && t.$$typeof === r
    }
    function cn(t) {
        var i = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + t.replace(/[=:]/g, function(m) {
            return i[m]
        })
    }
    var be = /\/+/g;
    function z(t, i) {
        return typeof t == "object" && t !== null && t.key != null ? cn("" + t.key) : i.toString(36)
    }
    function K(t, i, m, q, S) {
        var P = typeof t;
        (P === "undefined" || P === "boolean") && (t = null);
        var _ = !1;
        if (t === null)
            _ = !0;
        else
            switch (P) {
            case "string":
            case "number":
                _ = !0;
                break;
            case "object":
                switch (t.$$typeof) {
                case r:
                case e:
                    _ = !0
                }
            }
        if (_)
            return _ = t,
            S = S(_),
            t = q === "" ? "." + z(_, 0) : q,
            j(S) ? (m = "",
            t != null && (m = t.replace(be, "$&/") + "/"),
            K(S, i, m, "", function(D) {
                return D
            })) : S != null && (H(S) && (S = un(S, m + (!S.key || _ && _.key === S.key ? "" : ("" + S.key).replace(be, "$&/") + "/") + t)),
            i.push(S)),
            1;
        if (_ = 0,
        q = q === "" ? "." : q + ":",
        j(t))
            for (var w = 0; w < t.length; w++) {
                P = t[w];
                var E = q + z(P, w);
                _ += K(P, i, m, E, S)
            }
        else if (E = O(t),
        typeof E == "function")
            for (t = E.call(t),
            w = 0; !(P = t.next()).done; )
                P = P.value,
                E = q + z(P, w++),
                _ += K(P, i, m, E, S);
        else if (P === "object")
            throw i = String(t),
            Error("Objects are not valid as a React child (found: " + (i === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : i) + "). If you meant to render a collection of children, use an array instead.");
        return _
    }
    function V(t, i, m) {
        if (t == null)
            return t;
        var q = []
          , S = 0;
        return K(t, q, "", "", function(P) {
            return i.call(m, P, S++)
        }),
        q
    }
    function sn(t) {
        if (t._status === -1) {
            var i = t._result;
            i = i(),
            i.then(function(m) {
                (t._status === 0 || t._status === -1) && (t._status = 1,
                t._result = m)
            }, function(m) {
                (t._status === 0 || t._status === -1) && (t._status = 2,
                t._result = m)
            }),
            t._status === -1 && (t._status = 0,
            t._result = i)
        }
        if (t._status === 1)
            return t._result.default;
        throw t._result
    }
    var C = {
        current: null
    }
      , W = {
        transition: null
    }
      , fn = {
        ReactCurrentDispatcher: C,
        ReactCurrentBatchConfig: W,
        ReactCurrentOwner: U
    };
    function Oe() {
        throw Error("act(...) is not supported in production builds of React.")
    }
    return d.Children = {
        map: V,
        forEach: function(t, i, m) {
            V(t, function() {
                i.apply(this, arguments)
            }, m)
        },
        count: function(t) {
            var i = 0;
            return V(t, function() {
                i++
            }),
            i
        },
        toArray: function(t) {
            return V(t, function(i) {
                return i
            }) || []
        },
        only: function(t) {
            if (!H(t))
                throw Error("React.Children.only expected to receive a single React element child.");
            return t
        }
    },
    d.Component = R,
    d.Fragment = n,
    d.Profiler = o,
    d.PureComponent = p,
    d.StrictMode = a,
    d.Suspense = f,
    d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fn,
    d.act = Oe,
    d.cloneElement = function(t, i, m) {
        if (t == null)
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
        var q = h({}, t.props)
          , S = t.key
          , P = t.ref
          , _ = t._owner;
        if (i != null) {
            if (i.ref !== void 0 && (P = i.ref,
            _ = U.current),
            i.key !== void 0 && (S = "" + i.key),
            t.type && t.type.defaultProps)
                var w = t.type.defaultProps;
            for (E in i)
                B.call(i, E) && !de.hasOwnProperty(E) && (q[E] = i[E] === void 0 && w !== void 0 ? w[E] : i[E])
        }
        var E = arguments.length - 2;
        if (E === 1)
            q.children = m;
        else if (1 < E) {
            w = Array(E);
            for (var D = 0; D < E; D++)
                w[D] = arguments[D + 2];
            q.children = w
        }
        return {
            $$typeof: r,
            type: t.type,
            key: S,
            ref: P,
            props: q,
            _owner: _
        }
    }
    ,
    d.createContext = function(t) {
        return t = {
            $$typeof: c,
            _currentValue: t,
            _currentValue2: t,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null
        },
        t.Provider = {
            $$typeof: u,
            _context: t
        },
        t.Consumer = t
    }
    ,
    d.createElement = he,
    d.createFactory = function(t) {
        var i = he.bind(null, t);
        return i.type = t,
        i
    }
    ,
    d.createRef = function() {
        return {
            current: null
        }
    }
    ,
    d.forwardRef = function(t) {
        return {
            $$typeof: s,
            render: t
        }
    }
    ,
    d.isValidElement = H,
    d.lazy = function(t) {
        return {
            $$typeof: v,
            _payload: {
                _status: -1,
                _result: t
            },
            _init: sn
        }
    }
    ,
    d.memo = function(t, i) {
        return {
            $$typeof: l,
            type: t,
            compare: i === void 0 ? null : i
        }
    }
    ,
    d.startTransition = function(t) {
        var i = W.transition;
        W.transition = {};
        try {
            t()
        } finally {
            W.transition = i
        }
    }
    ,
    d.unstable_act = Oe,
    d.useCallback = function(t, i) {
        return C.current.useCallback(t, i)
    }
    ,
    d.useContext = function(t) {
        return C.current.useContext(t)
    }
    ,
    d.useDebugValue = function() {}
    ,
    d.useDeferredValue = function(t) {
        return C.current.useDeferredValue(t)
    }
    ,
    d.useEffect = function(t, i) {
        return C.current.useEffect(t, i)
    }
    ,
    d.useId = function() {
        return C.current.useId()
    }
    ,
    d.useImperativeHandle = function(t, i, m) {
        return C.current.useImperativeHandle(t, i, m)
    }
    ,
    d.useInsertionEffect = function(t, i) {
        return C.current.useInsertionEffect(t, i)
    }
    ,
    d.useLayoutEffect = function(t, i) {
        return C.current.useLayoutEffect(t, i)
    }
    ,
    d.useMemo = function(t, i) {
        return C.current.useMemo(t, i)
    }
    ,
    d.useReducer = function(t, i, m) {
        return C.current.useReducer(t, i, m)
    }
    ,
    d.useRef = function(t) {
        return C.current.useRef(t)
    }
    ,
    d.useState = function(t) {
        return C.current.useState(t)
    }
    ,
    d.useSyncExternalStore = function(t, i, m) {
        return C.current.useSyncExternalStore(t, i, m)
    }
    ,
    d.useTransition = function() {
        return C.current.useTransition()
    }
    ,
    d.version = "18.3.1",
    d
}
var Mt;
function Yn() {
    return Mt || (Mt = 1,
    J.exports = zn()),
    J.exports
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Lt;
function Jn() {
    if (Lt)
        return $;
    Lt = 1;
    var r = Yn()
      , e = Symbol.for("react.element")
      , n = Symbol.for("react.fragment")
      , a = Object.prototype.hasOwnProperty
      , o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
      , u = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };
    function c(s, f, l) {
        var v, y = {}, O = null, b = null;
        l !== void 0 && (O = "" + l),
        f.key !== void 0 && (O = "" + f.key),
        f.ref !== void 0 && (b = f.ref);
        for (v in f)
            a.call(f, v) && !u.hasOwnProperty(v) && (y[v] = f[v]);
        if (s && s.defaultProps)
            for (v in f = s.defaultProps,
            f)
                y[v] === void 0 && (y[v] = f[v]);
        return {
            $$typeof: e,
            type: s,
            key: O,
            ref: b,
            props: y,
            _owner: o.current
        }
    }
    return $.Fragment = n,
    $.jsx = c,
    $.jsxs = c,
    $
}
var Bt;
function Xn() {
    return Bt || (Bt = 1,
    Y.exports = Jn()),
    Y.exports
}
var ra = Xn();
export {Wt as $, L as A, Jt as B, On as C, Ut as D, fe as E, hn as F, on as G, yn as H, Un as I, an as J, kt as K, vn as L, Cn as M, gn as N, F as O, pn as P, Vn as Q, Wn as R, xn as S, tn as T, Xt as U, jn as V, dn as W, Rn as X, Ln as Y, Pn as Z, Kn as _, Zn as a, Qt as a0, Bn as a1, rn as a2, ln as a3, Yt as a4, zt as a5, kn as a6, Fn as a7, Nn as a8, In as a9, mn as aa, Gn as ab, Dn as ac, $n as ad, wn as ae, Hn as af, Sn as b, me as c, x as d, Gt as e, An as f, Qn as g, Mn as h, M as i, ra as j, En as k, pe as l, en as m, le as n, Vt as o, nn as p, qn as q, Yn as r, _n as s, A as t, Tn as u, bn as v, $t as w, G as x, Kt as y, N as z};
//# sourceMappingURL=polarisPage-5ffcac3922b57e708db37c9792b724629bac1046.1.js.map
