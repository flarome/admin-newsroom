

import React from 'react';

import { LocInfo as  bs, O as vt} from '../_common';

  const jp = React.createContext(new bs({
    userAgent: ""
}));


function $p() {
    return React.useContext(jp)
} 







var fa = [], Ym = Symbol.for("react.element"), hn = function() {}, ve, or = Symbol.dispose || Symbol.for("Symbol.dispose");
function jt(t, i) {
    var a = i.effect.S();
    return ve = i,
    Xm.bind(i, t, a)
}
function Xm(t, i) {
    i(),
    ve = t
}
var yn, $t;
(yn = {
    u: 0,
    effect: {
        s: void 0,
        c: function() {},
        S: function() {
            return hn
        },
        d: function() {}
    },
    subscribe: function() {
        return hn
    },
    getSnapshot: function() {
        return 0
    },
    S: function() {},
    f: function() {}
})[or] = function() {}
;
var Qm = Promise.prototype.then.bind(Promise.resolve());
function Jm() {
    $t || ($t = Qm(function() {
        var t;
        $t = void 0,
        (t = ve) == null || t.f()
    }))
}

function rr(t) {
    t === void 0 && (t = 0),
    Jm();
    var i = React.useRef();
    i.current == null && (i.current = function(n) {
        var o, r, s, c, l = 0, u = vt(function() {
            r = this
        });
        return r.c = function() {
            l = l + 1 | 0,
            c && c()
        }
        ,
        (o = {
            u: n,
            effect: r,
            subscribe: function(d) {
                return c = d,
                function() {
                    l = l + 1 | 0,
                    c = void 0,
                    u()
                }
            },
            getSnapshot: function() {
                return l
            },
            S: function() {
                if (ve != null) {
                    var d = ve.u
                      , m = this.u;
                    d == 0 && m == 0 || d == 0 && m == 1 ? (ve.f(),
                    s = jt(void 0, this)) : d == 1 && m == 0 || d == 2 && m == 0 || (s = jt(ve, this))
                } else
                    s = jt(void 0, this)
            },
            f: function() {
                s == null || s(),
                s = void 0
            }
        })[or] = function() {
            this.f()
        }
        ,
        o
    }(t));
    var a = i.current;
    return React.useSyncExternalStore(a.subscribe, a.getSnapshot, a.getSnapshot),
    a.S(),
    a
}

function fe(t) {
    return rr(t)
}




function Tf() {
    var t, i;
    return typeof window < "u" && ((i = (t = window.navigator) == null ? void 0 : t.userAgent) == null ? void 0 : i.includes("MobileBridge"))
}



const sr = React.createContext({});

function cr(t) {
    const i = React.useContext(sr);
    return t && i.ensureSync(t),
    i
}








export {$p as useRooterContext, fe as global, Tf as an, cr as am};