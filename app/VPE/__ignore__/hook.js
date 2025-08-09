import {e as u, R as N, aI as ne, aJ as en, aK as Le, o as j, aL as nn, u as le, az as Z, p as re, J as ae, aM as tn, m as C, x as I, B as U, T as q, aN as rn, aO as an, Y as sn, X as on, aP as ln, Z as cn, aQ as Q, aR as dn, aq as un, aS as ve, aT as be, aU as fn, aV as pn, aW as hn, aX as gn, aY as xn, aD as ke, v as mn, ax as Me, w as vn, aZ as bn, a_ as Cn, S as En, a$ as kn} from "./DesignSystemProvider.js";
import {a6 as ye, a7 as yn} from "./main.js";
import {j as l, g as Sn} from "./PolarisPage.js";
function We(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    const [o,e] = u.useState(!1);
    return u.useImperativeHandle(t, () => ({
        onAction: () => {
            o || (e(!0),
            setTimeout( () => {
                e(!1)
            }
            , r))
        }
    })),
    o
}
function se() {
    return se = Object.assign ? Object.assign.bind() : function(t) {
        for (var r = 1; r < arguments.length; r++) {
            var o = arguments[r];
            for (var e in o)
                ({}).hasOwnProperty.call(o, e) && (t[e] = o[e])
        }
        return t
    }
    ,
    se.apply(null, arguments)
}
function Se(t, r) {
    if (t == null)
        return {};
    var o = {};
    for (var e in t)
        if ({}.hasOwnProperty.call(t, e)) {
            if (r.indexOf(e) !== -1)
                continue;
            o[e] = t[e]
        }
    return o
}
function Ce(t, r) {
    return Ce = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, e) {
        return o.__proto__ = e,
        o
    }
    ,
    Ce(t, r)
}
function je(t, r) {
    t.prototype = Object.create(r.prototype),
    t.prototype.constructor = t,
    Ce(t, r)
}
function jn(t, r) {
    return t.classList ? !!r && t.classList.contains(r) : (" " + (t.className.baseVal || t.className) + " ").indexOf(" " + r + " ") !== -1
}
function Bn(t, r) {
    t.classList ? t.classList.add(r) : jn(t, r) || (typeof t.className == "string" ? t.className = t.className + " " + r : t.setAttribute("class", (t.className && t.className.baseVal || "") + " " + r))
}
function Fe(t, r) {
    return t.replace(new RegExp("(^|\\s)" + r + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}
function wn(t, r) {
    t.classList ? t.classList.remove(r) : typeof t.className == "string" ? t.className = Fe(t.className, r) : t.setAttribute("class", Fe(t.className && t.className.baseVal || "", r))
}
const _e = {
    disabled: !1
}
  , oe = N.createContext(null);
var $e = function(r) {
    return r.scrollTop
}
  , J = "unmounted"
  , A = "exited"
  , R = "entering"
  , V = "entered"
  , Ee = "exiting"
  , M = function(t) {
    je(r, t);
    function r(e, i) {
        var n;
        n = t.call(this, e, i) || this;
        var a = i, s = a && !a.isMounting ? e.enter : e.appear, c;
        return n.appearStatus = null,
        e.in ? s ? (c = A,
        n.appearStatus = R) : c = V : e.unmountOnExit || e.mountOnEnter ? c = J : c = A,
        n.state = {
            status: c
        },
        n.nextCallback = null,
        n
    }
    r.getDerivedStateFromProps = function(i, n) {
        var a = i.in;
        return a && n.status === J ? {
            status: A
        } : null
    }
    ;
    var o = r.prototype;
    return o.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    o.componentDidUpdate = function(i) {
        var n = null;
        if (i !== this.props) {
            var a = this.state.status;
            this.props.in ? a !== R && a !== V && (n = R) : (a === R || a === V) && (n = Ee)
        }
        this.updateStatus(!1, n)
    }
    ,
    o.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    o.getTimeouts = function() {
        var i = this.props.timeout, n, a, s;
        return n = a = s = i,
        i != null && typeof i != "number" && (n = i.exit,
        a = i.enter,
        s = i.appear !== void 0 ? i.appear : a),
        {
            exit: n,
            enter: a,
            appear: s
        }
    }
    ,
    o.updateStatus = function(i, n) {
        if (i === void 0 && (i = !1),
        n !== null)
            if (this.cancelNextCallback(),
            n === R) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var a = this.props.nodeRef ? this.props.nodeRef.current : ne.findDOMNode(this);
                    a && $e(a)
                }
                this.performEnter(i)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === A && this.setState({
                status: J
            })
    }
    ,
    o.performEnter = function(i) {
        var n = this
          , a = this.props.enter
          , s = this.context ? this.context.isMounting : i
          , c = this.props.nodeRef ? [s] : [ne.findDOMNode(this), s]
          , d = c[0]
          , f = c[1]
          , p = this.getTimeouts()
          , h = s ? p.appear : p.enter;
        if (!i && !a || _e.disabled) {
            this.safeSetState({
                status: V
            }, function() {
                n.props.onEntered(d)
            });
            return
        }
        this.props.onEnter(d, f),
        this.safeSetState({
            status: R
        }, function() {
            n.props.onEntering(d, f),
            n.onTransitionEnd(h, function() {
                n.safeSetState({
                    status: V
                }, function() {
                    n.props.onEntered(d, f)
                })
            })
        })
    }
    ,
    o.performExit = function() {
        var i = this
          , n = this.props.exit
          , a = this.getTimeouts()
          , s = this.props.nodeRef ? void 0 : ne.findDOMNode(this);
        if (!n || _e.disabled) {
            this.safeSetState({
                status: A
            }, function() {
                i.props.onExited(s)
            });
            return
        }
        this.props.onExit(s),
        this.safeSetState({
            status: Ee
        }, function() {
            i.props.onExiting(s),
            i.onTransitionEnd(a.exit, function() {
                i.safeSetState({
                    status: A
                }, function() {
                    i.props.onExited(s)
                })
            })
        })
    }
    ,
    o.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    o.safeSetState = function(i, n) {
        n = this.setNextCallback(n),
        this.setState(i, n)
    }
    ,
    o.setNextCallback = function(i) {
        var n = this
          , a = !0;
        return this.nextCallback = function(s) {
            a && (a = !1,
            n.nextCallback = null,
            i(s))
        }
        ,
        this.nextCallback.cancel = function() {
            a = !1
        }
        ,
        this.nextCallback
    }
    ,
    o.onTransitionEnd = function(i, n) {
        this.setNextCallback(n);
        var a = this.props.nodeRef ? this.props.nodeRef.current : ne.findDOMNode(this)
          , s = i == null && !this.props.addEndListener;
        if (!a || s) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var c = this.props.nodeRef ? [this.nextCallback] : [a, this.nextCallback]
              , d = c[0]
              , f = c[1];
            this.props.addEndListener(d, f)
        }
        i != null && setTimeout(this.nextCallback, i)
    }
    ,
    o.render = function() {
        var i = this.state.status;
        if (i === J)
            return null;
        var n = this.props
          , a = n.children;
        n.in,
        n.mountOnEnter,
        n.unmountOnExit,
        n.appear,
        n.enter,
        n.exit,
        n.timeout,
        n.addEndListener,
        n.onEnter,
        n.onEntering,
        n.onEntered,
        n.onExit,
        n.onExiting,
        n.onExited,
        n.nodeRef;
        var s = Se(n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return N.createElement(oe.Provider, {
            value: null
        }, typeof a == "function" ? a(i, s) : N.cloneElement(N.Children.only(a), s))
    }
    ,
    r
}(N.Component);
M.contextType = oe;
M.propTypes = {};
function z() {}
M.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: z,
    onEntering: z,
    onEntered: z,
    onExit: z,
    onExiting: z,
    onExited: z
};
M.UNMOUNTED = J;
M.EXITED = A;
M.ENTERING = R;
M.ENTERED = V;
M.EXITING = Ee;
var Nn = function(r, o) {
    return r && o && o.split(" ").forEach(function(e) {
        return Bn(r, e)
    })
}
  , he = function(r, o) {
    return r && o && o.split(" ").forEach(function(e) {
        return wn(r, e)
    })
}
  , Be = function(t) {
    je(r, t);
    function r() {
        for (var e, i = arguments.length, n = new Array(i), a = 0; a < i; a++)
            n[a] = arguments[a];
        return e = t.call.apply(t, [this].concat(n)) || this,
        e.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
        },
        e.onEnter = function(s, c) {
            var d = e.resolveArguments(s, c)
              , f = d[0]
              , p = d[1];
            e.removeClasses(f, "exit"),
            e.addClass(f, p ? "appear" : "enter", "base"),
            e.props.onEnter && e.props.onEnter(s, c)
        }
        ,
        e.onEntering = function(s, c) {
            var d = e.resolveArguments(s, c)
              , f = d[0]
              , p = d[1]
              , h = p ? "appear" : "enter";
            e.addClass(f, h, "active"),
            e.props.onEntering && e.props.onEntering(s, c)
        }
        ,
        e.onEntered = function(s, c) {
            var d = e.resolveArguments(s, c)
              , f = d[0]
              , p = d[1]
              , h = p ? "appear" : "enter";
            e.removeClasses(f, h),
            e.addClass(f, h, "done"),
            e.props.onEntered && e.props.onEntered(s, c)
        }
        ,
        e.onExit = function(s) {
            var c = e.resolveArguments(s)
              , d = c[0];
            e.removeClasses(d, "appear"),
            e.removeClasses(d, "enter"),
            e.addClass(d, "exit", "base"),
            e.props.onExit && e.props.onExit(s)
        }
        ,
        e.onExiting = function(s) {
            var c = e.resolveArguments(s)
              , d = c[0];
            e.addClass(d, "exit", "active"),
            e.props.onExiting && e.props.onExiting(s)
        }
        ,
        e.onExited = function(s) {
            var c = e.resolveArguments(s)
              , d = c[0];
            e.removeClasses(d, "exit"),
            e.addClass(d, "exit", "done"),
            e.props.onExited && e.props.onExited(s)
        }
        ,
        e.resolveArguments = function(s, c) {
            return e.props.nodeRef ? [e.props.nodeRef.current, s] : [s, c]
        }
        ,
        e.getClassNames = function(s) {
            var c = e.props.classNames
              , d = typeof c == "string"
              , f = d && c ? c + "-" : ""
              , p = d ? "" + f + s : c[s]
              , h = d ? p + "-active" : c[s + "Active"]
              , g = d ? p + "-done" : c[s + "Done"];
            return {
                baseClassName: p,
                activeClassName: h,
                doneClassName: g
            }
        }
        ,
        e
    }
    var o = r.prototype;
    return o.addClass = function(i, n, a) {
        var s = this.getClassNames(n)[a + "ClassName"]
          , c = this.getClassNames("enter")
          , d = c.doneClassName;
        n === "appear" && a === "done" && d && (s += " " + d),
        a === "active" && i && $e(i),
        s && (this.appliedClasses[n][a] = s,
        Nn(i, s))
    }
    ,
    o.removeClasses = function(i, n) {
        var a = this.appliedClasses[n]
          , s = a.base
          , c = a.active
          , d = a.done;
        this.appliedClasses[n] = {},
        s && he(i, s),
        c && he(i, c),
        d && he(i, d)
    }
    ,
    o.render = function() {
        var i = this.props;
        i.classNames;
        var n = Se(i, ["classNames"]);
        return N.createElement(M, se({}, n, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        }))
    }
    ,
    r
}(N.Component);
Be.defaultProps = {
    classNames: ""
};
Be.propTypes = {};
function Pn(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function we(t, r) {
    var o = function(n) {
        return r && u.isValidElement(n) ? r(n) : n
    }
      , e = Object.create(null);
    return t && u.Children.map(t, function(i) {
        return i
    }).forEach(function(i) {
        e[i.key] = o(i)
    }),
    e
}
function In(t, r) {
    t = t || {},
    r = r || {};
    function o(f) {
        return f in r ? r[f] : t[f]
    }
    var e = Object.create(null)
      , i = [];
    for (var n in t)
        n in r ? i.length && (e[n] = i,
        i = []) : i.push(n);
    var a, s = {};
    for (var c in r) {
        if (e[c])
            for (a = 0; a < e[c].length; a++) {
                var d = e[c][a];
                s[e[c][a]] = o(d)
            }
        s[c] = o(c)
    }
    for (a = 0; a < i.length; a++)
        s[i[a]] = o(i[a]);
    return s
}
function H(t, r, o) {
    return o[r] != null ? o[r] : t.props[r]
}
function Mn(t, r) {
    return we(t.children, function(o) {
        return u.cloneElement(o, {
            onExited: r.bind(null, o),
            in: !0,
            appear: H(o, "appear", t),
            enter: H(o, "enter", t),
            exit: H(o, "exit", t)
        })
    })
}
function Fn(t, r, o) {
    var e = we(t.children)
      , i = In(r, e);
    return Object.keys(i).forEach(function(n) {
        var a = i[n];
        if (u.isValidElement(a)) {
            var s = n in r
              , c = n in e
              , d = r[n]
              , f = u.isValidElement(d) && !d.props.in;
            c && (!s || f) ? i[n] = u.cloneElement(a, {
                onExited: o.bind(null, a),
                in: !0,
                exit: H(a, "exit", t),
                enter: H(a, "enter", t)
            }) : !c && s && !f ? i[n] = u.cloneElement(a, {
                in: !1
            }) : c && s && u.isValidElement(d) && (i[n] = u.cloneElement(a, {
                onExited: o.bind(null, a),
                in: d.props.in,
                exit: H(a, "exit", t),
                enter: H(a, "enter", t)
            }))
        }
    }),
    i
}
var _n = Object.values || function(t) {
    return Object.keys(t).map(function(r) {
        return t[r]
    })
}
  , Dn = {
    component: "div",
    childFactory: function(r) {
        return r
    }
}
  , Ne = function(t) {
    je(r, t);
    function r(e, i) {
        var n;
        n = t.call(this, e, i) || this;
        var a = n.handleExited.bind(Pn(n));
        return n.state = {
            contextValue: {
                isMounting: !0
            },
            handleExited: a,
            firstRender: !0
        },
        n
    }
    var o = r.prototype;
    return o.componentDidMount = function() {
        this.mounted = !0,
        this.setState({
            contextValue: {
                isMounting: !1
            }
        })
    }
    ,
    o.componentWillUnmount = function() {
        this.mounted = !1
    }
    ,
    r.getDerivedStateFromProps = function(i, n) {
        var a = n.children
          , s = n.handleExited
          , c = n.firstRender;
        return {
            children: c ? Mn(i, s) : Fn(i, a, s),
            firstRender: !1
        }
    }
    ,
    o.handleExited = function(i, n) {
        var a = we(this.props.children);
        i.key in a || (i.props.onExited && i.props.onExited(n),
        this.mounted && this.setState(function(s) {
            var c = se({}, s.children);
            return delete c[i.key],
            {
                children: c
            }
        }))
    }
    ,
    o.render = function() {
        var i = this.props
          , n = i.component
          , a = i.childFactory
          , s = Se(i, ["component", "childFactory"])
          , c = this.state.contextValue
          , d = _n(this.state.children).map(a);
        return delete s.appear,
        delete s.enter,
        delete s.exit,
        n === null ? N.createElement(oe.Provider, {
            value: c
        }, d) : N.createElement(oe.Provider, {
            value: c
        }, N.createElement(n, s, d))
    }

    r
}(N.Component);
Ne.propTypes = {};
Ne.defaultProps = Dn;
var ge = {
    Backdrop: "Polaris-Backdrop",
    transparent: "Polaris-Backdrop--transparent",
    belowNavigation: "Polaris-Backdrop--belowNavigation"
};
function Tn() {
    const t = u.useContext(en);
    if (!t)
        throw new Le("No ScrollLockManager was provided.");
    return t
}
function On(t) {
    const r = Tn();
    return u.useEffect( () => (r.registerScrollLock(),
    () => {
        r.unregisterScrollLock()
    }
    ), [r]),
    null
}
function An(t) { // Backdrop
    const {onClick: r, onTouchStart: o, belowNavigation: e, transparent: i, setClosing: n} = t
      , a = j(ge.Backdrop, e && ge.belowNavigation, i && ge.transparent)
      , s = () => {
        n && n(!0)
    }
      , c = () => {
        n && n(!1),
        r && r()
    }
    ;
    return l.jsxs(l.Fragment, {
        children: [l.jsx(On, {}), l.jsx("div", {
            className: a,
            onClick: c,
            onTouchStart: o,
            onMouseDown: s
        })]
    })
}
var P = {
    Banner: "Polaris-Banner",
    keyFocused: "Polaris-Banner--keyFocused",
    InlineIconBannerWrapper: "Polaris-Banner__InlineIconBannerWrapper",
    info: "Polaris-Banner--info",
    success: "Polaris-Banner--success",
    warning: "Polaris-Banner--warning",
    critical: "Polaris-Banner--critical",
    withinContentContainer: "Polaris-Banner--withinContentContainer",
    withinPage: "Polaris-Banner--withinPage",
    DismissIconWrapper: "Polaris-Banner__DismissIconWrapper",
    DismissIcon: "Polaris-Banner__DismissIcon",
    BannerIcon: "Polaris-Banner__BannerIcon",
    "text-success-on-bg-fill": "Polaris-Banner--textSuccessOnBgFill",
    "text-success": "Polaris-Banner__text--success",
    "text-warning-on-bg-fill": "Polaris-Banner--textWarningOnBgFill",
    "text-warning": "Polaris-Banner__text--warning",
    "text-critical-on-bg-fill": "Polaris-Banner--textCriticalOnBgFill",
    "text-critical": "Polaris-Banner__text--critical",
    "text-info-on-bg-fill": "Polaris-Banner--textInfoOnBgFill",
    "text-info": "Polaris-Banner__text--info",
    "icon-secondary": "Polaris-Banner__icon--secondary"
};
const xe = {
    success: {
        withinPage: {
            background: "bg-fill-success",
            text: "text-success-on-bg-fill",
            icon: "text-success-on-bg-fill"
        },
        withinContentContainer: {
            background: "bg-surface-success",
            text: "text-success",
            icon: "text-success"
        },
        icon: "check-circle"
    },
    warning: {
        withinPage: {
            background: "bg-fill-warning",
            text: "text-warning-on-bg-fill",
            icon: "text-warning-on-bg-fill"
        },
        withinContentContainer: {
            background: "bg-surface-warning",
            text: "text-warning",
            icon: "text-warning"
        },
        icon: "alert-triangle"
    },
    critical: {
        withinPage: {
            background: "bg-fill-critical",
            text: "text-critical-on-bg-fill",
            icon: "text-critical-on-bg-fill"
        },
        withinContentContainer: {
            background: "bg-surface-critical",
            text: "text-critical",
            icon: "text-critical"
        },
        icon: "alert-circle"
    },
    info: {
        withinPage: {
            background: "bg-fill-info",
            text: "text-info-on-bg-fill",
            icon: "text-info-on-bg-fill"
        },
        withinContentContainer: {
            background: "bg-surface-info",
            text: "text-info",
            icon: "text-info"
        },
        icon: "info"
    }
};
function Rn(t) {
    const r = u.useRef(null)
      , [o,e] = u.useState(!1);
    return u.useImperativeHandle(t, () => ({
        focus: () => {
            r.current?.focus(),
            e(!0)
        }
    }), []),
    {
        wrapperRef: r,
        handleKeyUp: s => {
            s.target === r.current && e(!0)
        }
        ,
        handleBlur: () => e(!1),
        handleMouseUp: s => {
            s.currentTarget.blur(),
            e(!1)
        }
        ,
        shouldShowFocus: o
    }
}
const pt = u.forwardRef(function(r, o) {
    const {tone: e, stopAnnouncements: i} = r
      , n = u.useContext(ye)
      , {wrapperRef: a, handleKeyUp: s, handleBlur: c, handleMouseUp: d, shouldShowFocus: f} = Rn(o)
      , p = j(P.Banner, f && P.keyFocused, n ? P.withinContentContainer : P.withinPage);
    return l.jsx(nn.Provider, {
        value: !0,
        children: l.jsx("div", {
            className: p,
            tabIndex: 0,
            ref: a,
            role: e === "warning" || e === "critical" ? "alert" : "status",
            "aria-live": i ? "off" : "polite",
            onMouseUp: d,
            onKeyUp: s,
            onBlur: c,
            children: l.jsx(Hn, {
                ...r
            })
        })
    })
});
function Hn(t) {
    let {tone: r="info", icon: o, hideIcon: e, onDismiss: i, action: n, secondaryAction: a, title: s, children: c} = t;
    const d = le()
      , {smUp: f, mdUp: p} = Z()
      , h = u.useContext(ye)
      , g = !s && !h
      , E = Object.keys(xe).includes(r) ? r : "info"
      , m = xe[E][h ? "withinContentContainer" : "withinPage"]
      , k = f && g || !f && !h ? "icon-secondary" : m.icon;
    let v;
    o ? v = l.jsx(re, {
        type: o,
        tone: "legacy-inherit"
    }) : v = l.jsx(re, {
        type: xe[E].icon,
        tone: "legacy-inherit"
    });
    const x = {
        backgroundColor: m.background,
        textColor: m.text,
        bannerTitle: s ? l.jsx(q, {
            as: "h2",
            variant: p ? "headingSm" : "headingMd",
            breakWord: !0,
            children: s
        }) : null,
        bannerIcon: e ? null : l.jsx("span", {
            className: j(P.BannerIcon, P[m.icon]),
            children: v
        }),
        actionButtons: n || a ? l.jsxs(tn, {
            fullWidth: !f,
            gap: "tight",
            children: [n && l.jsx(ae, {
                onClick: n.onAction,
                ...n,
                children: n.content
            }), a && l.jsx(ae, {
                onClick: a.onAction,
                ...a,
                children: a.content
            })]
        }) : null,
        dismissButton: i ? l.jsx(ae, {
            variant: "tertiary",
            icon: l.jsx("span", {
                className: j(P.DismissIcon, P[k]),
                children: l.jsx(re, {
                    type: "x",
                    tone: "legacy-inherit"
                })
            }),
            onClick: i,
            accessibilityLabel: d.translate("Polaris.Banner.dismissButton")
        }) : null
    }
      , y = c ? l.jsx(q, {
        as: "span",
        variant: "bodyMd",
        children: c
    }) : null;
    return h ? l.jsx(Ln, {
        ...x,
        children: y
    }) : g ? l.jsx(ze, {
        ...x,
        tone: r,
        children: y
    }) : l.jsx(Un, {
        ...x,
        tone: r,
        children: y
    })
}
function Un(t) {
    let {backgroundColor: r, textColor: o, bannerTitle: e, bannerIcon: i, actionButtons: n, dismissButton: a, children: s, tone: c} = t;
    const {smUp: d} = Z()
      , f = s || n;
    return d ? l.jsx(C, {
        width: "100%",
        children: l.jsxs(U, {
            align: "space-between",
            children: [l.jsx(C, {
                background: r,
                color: o,
                borderStartStartRadius: d ? "300" : void 0,
                borderStartEndRadius: d ? "300" : void 0,
                borderEndStartRadius: !f && d ? "300" : void 0,
                borderEndEndRadius: !f && d ? "300" : void 0,
                padding: "300",
                children: l.jsxs(I, {
                    align: "space-between",
                    blockAlign: "center",
                    gap: "200",
                    wrap: !1,
                    children: [l.jsxs(I, {
                        gap: "100",
                        wrap: !1,
                        children: [i, e]
                    }), a]
                })
            }), f && l.jsx(C, {
                padding: {
                    xs: "300",
                    md: "400"
                },
                paddingBlockStart: "300",
                children: l.jsxs(U, {
                    gap: "200",
                    children: [l.jsx("div", {
                        children: s
                    }), n]
                })
            })]
        })
    }) : l.jsx(ze, {
        backgroundColor: r,
        mobileBannerTitle: e,
        bannerIcon: i,
        actionButtons: n,
        dismissButton: a,
        tone: c,
        children: s
    })
}
function ze(t) {
    let {backgroundColor: r, mobileBannerTitle: o, bannerIcon: e, actionButtons: i, dismissButton: n, children: a, tone: s} = t;
    const [c,d] = u.useState("center")
      , f = u.useRef(null)
      , p = u.useRef(null)
      , h = u.useRef(null)
      , {smUp: g} = Z();
    return rn( () => {
        if (!window.ResizeObserver)
            return;
        const E = () => {
            const k = h.current?.offsetHeight ?? 0
              , v = f.current?.offsetHeight || p.current?.offsetHeight;
            k && v && d(k > v ? "start" : "center")
        }
          , m = new ResizeObserver(E);
        return f.current && m.observe(f.current),
        p.current && m.observe(p.current),
        h.current && m.observe(h.current),
        () => m.disconnect()
    }
    , []),
    l.jsx("div", {
        className: j(P.InlineIconBannerWrapper, s ? P[s] : null),
        children: l.jsx(C, {
            width: "100%",
            padding: "300",
            borderRadius: g ? "300" : "0",
            children: l.jsxs(I, {
                align: "space-between",
                blockAlign: c,
                wrap: !1,
                children: [l.jsx(C, {
                    width: "100%",
                    children: l.jsxs(I, {
                        gap: "200",
                        wrap: !1,
                        blockAlign: c,
                        children: [e ? l.jsx("div", {
                            ref: f,
                            children: l.jsx(C, {
                                background: r,
                                borderRadius: "200",
                                padding: "100",
                                children: e
                            })
                        }) : null, l.jsx(C, {
                            ref: h,
                            width: "100%",
                            children: l.jsxs(U, {
                                gap: "200",
                                children: [o ? l.jsxs(U, {
                                    gap: "100",
                                    children: [l.jsx(C, {
                                        paddingBlockStart: {
                                            xs: "100",
                                            sm: "0"
                                        },
                                        paddingBlockEnd: a ? {
                                            xs: "0"
                                        } : {
                                            xs: "100",
                                            sm: "0"
                                        },
                                        children: o
                                    }), a]
                                }) : l.jsx("div", {
                                    children: a
                                }), i]
                            })
                        })]
                    })
                }), l.jsx("div", {
                    ref: p,
                    className: P.DismissIconWrapper,
                    children: n
                })]
            })
        })
    })
}
function Ln(t) {
    let {backgroundColor: r, textColor: o, bannerTitle: e, bannerIcon: i, actionButtons: n, dismissButton: a, children: s} = t;
    return l.jsx(C, {
        width: "100%",
        background: r,
        padding: "200",
        borderRadius: "200",
        color: o,
        children: l.jsxs(I, {
            align: "space-between",
            blockAlign: "start",
            wrap: !1,
            gap: "200",
            children: [l.jsxs(I, {
                gap: "150",
                wrap: !1,
                children: [i, l.jsx(C, {
                    width: "100%",
                    children: l.jsxs(U, {
                        gap: "200",
                        children: [l.jsxs(U, {
                            gap: "050",
                            children: [e, l.jsx("div", {
                                children: s
                            })]
                        }), n]
                    })
                })]
            }), a]
        })
    })
}
var G = {
    Collapsible: "Polaris-Collapsible",
    isFullyClosed: "Polaris-Collapsible--isFullyClosed",
    expandOnPrint: "Polaris-Collapsible--expandOnPrint",
    inline: "Polaris-Collapsible--inline",
    animateIn: "Polaris-Collapsible--animateIn",
    hidden: "Polaris-Collapsible--hidden"
};
function De(t) {
    let {id: r, expandOnPrint: o, open: e, variant: i="block", transition: n=!0, children: a, className: s, onAnimationEnd: c} = t;
    const [d,f] = u.useState(0)
      , [p,h] = u.useState(e)
      , g = u.useRef(null)
      , E = u.useRef(a)
      , [m,k] = u.useState(void 0)
      , v = typeof n == "object" && n.animateIn
      , [x,y] = u.useState(v ? "measuring" : "idle")
      , B = x === "idle" && e && p
      , F = x === "idle" && !e && !p
      , _ = o || !F ? a : null
      , S = i === "block"
      , w = i === "inline"
      , K = j(s, G.Collapsible, F && G.isFullyClosed, o && G.expandOnPrint, w && G.inline, w && x === "hidden" && G.hidden, v && G.animateIn)
      , D = $n(n)
      , L = {
        ...typeof n == "object" && {
            transitionDelay: an(`motion-duration-${n.delay ?? "0"}`),
            transitionDuration: n.duration,
            transitionTimingFunction: n.timingFunction
        },
        ...S ? {
            maxHeight: B ? "none" : `${d}px`,
            overflow: B ? "visible" : "hidden"
        } : {
            maxWidth: B || x === "hidden" ? "none" : `${d}px`,
            overflow: B || x === "hidden" ? "visible" : "hidden"
        }
    }
      , W = u.useCallback($ => {
        let {target: O} = $;
        O === g.current && (y("idle"),
        h(e),
        c && c())
    }
    , [c, e])
      , X = u.useCallback( () => {
        D ? (h(e),
        y("idle"),
        e && g.current ? f(S ? g.current.scrollHeight : m ?? g.current.scrollWidth) : f(0)) : y(w && e ? "hidden" : "measuring")
    }
    , [e, S, D]);
    return u.useEffect( () => {
        !e || !g.current || (f(S ? g.current.scrollHeight : g.current.scrollWidth),
        w && !m && k(g.current.scrollWidth))
    }
    , []),
    u.useEffect( () => {
        w && !B && E.current !== a && y("measuring")
    }
    , [a]),
    u.useEffect( () => {
        e !== p && X()
    }
    , [e, p]),
    u.useEffect( () => {
        if (g.current)
            switch (x) {
            case "idle":
                break;
            case "hidden":
                k(g.current.scrollWidth),
                y("measuring");
                break;
            case "measuring":
                f(S ? g.current.scrollHeight : g.current.scrollWidth),
                y("animating");
                break;
            case "animating":
                f(e ? S ? g.current.scrollHeight : m ?? g.current.scrollWidth : 0)
            }
    }
    , [x, S, e, p]),
    l.jsx("div", {
        id: r,
        style: L,
        ref: g,
        className: K,
        onTransitionEnd: W,
        "aria-hidden": !e,
        children: _
    })
}
const Wn = /^0(ms|s)$/;
function $n(t) {
    if (typeof t == "boolean")
        return !t;
    const {duration: r} = t;
    return !!(r && Wn.test(r.trim()))
}
var zn = {
    InlineGrid: "Polaris-InlineGrid"
};
function Gn(t) {
    let {children: r, columns: o, gap: e, alignItems: i, ...n} = t;
    const a = {
        ...on("inline-grid", "grid-template-columns", Vn(o)),
        ...sn("inline-grid", "gap", "space", e),
        "--pc-inline-grid-align-items": i
    }
      , s = ln(n);
    return l.jsx("div", {
        className: zn.InlineGrid,
        style: cn(a),
        ...s,
        children: r
    })
}
function Vn(t) {
    return typeof t == "object" && t !== null && !Array.isArray(t) ? Object.fromEntries(Object.entries(t).map(r => {
        let[o,e] = r;
        return [o, Te(e)]
    }
    )) : Te(t)
}
function Te(t) {
    if (t)
        return typeof t == "number" || !isNaN(Number(t)) ? `repeat(${Number(t)}, minmax(0, 1fr))` : typeof t == "string" ? t : t.map(r => {
            switch (r) {
            case "oneThird":
                return "minmax(0, 1fr)";
            case "oneHalf":
                return "minmax(0, 1fr)";
            case "twoThirds":
                return "minmax(0, 2fr)"
            }
        }
        ).join(" ")
}
const qn = u.createContext(void 0)
  , Kn = u.memo(function(r) {
    let {children: o, disabled: e, root: i} = r;
    return u.useEffect( () => {
        if (e || !i)
            return;
        const n = Xn(i) ? i.current : i;
        !n || n.querySelector("[autofocus]") || Q(n, !1)
    }
    , [e, i]),
    l.jsx(l.Fragment, {
        children: o
    })
});
function Xn(t) {
    return t.current !== void 0
}
function Yn(t) {
    let {trapping: r} = t;
    const o = u.useContext(dn)
      , e = u.useId();
    if (!o)
        throw new Le("No FocusManager was provided.");
    const {trapFocusList: i, add: n, remove: a} = o
      , s = i[0] === e
      , c = u.useMemo( () => ({
        canSafelyFocus: s
    }), [s]);
    return u.useEffect( () => {
        if (r)
            return n(e),
            () => {
                a(e)
            }
    }
    , [n, e, a, r]),
    c
}
function Jn(t) { // polaris TrapFocus
    let {trapping: r=!0, children: o} = t;
    const {canSafelyFocus: e} = Yn({
        trapping: r 
    })
      , i = u.useRef(null)
      , [n,a] = u.useState(!0);
    u.useEffect( () => {
        const d = e && !(i.current && i.current.contains(document.activeElement)) ? !r : !0;
        a(d)
    } 
    , [e, r]);
    const s = d => {
        const f = i.current && i.current.contains(document.activeElement);
        r === !1 || !i.current || f || d.target instanceof Element && d.target.matches(`${fn.selector} *`) || e && d.target instanceof HTMLElement && i.current !== d.target && !i.current.contains(d.target) && Q(i.current)
    }
      , c = d => {
        if (r === !1 || !i.current)
            return;
        const f = pn(i.current)
          , p = hn(i.current);
        d.target === p && !d.shiftKey && (d.preventDefault(),
        gn(i.current)),
        d.target === f && d.shiftKey && (d.preventDefault(),
        xn(i.current))
    }
    ;
    return l.jsx(Kn, {
        disabled: n,
        root: i.current,
        children: l.jsxs("div", {
            ref: i,
            children: [l.jsx(un, {
                event: "focusin",
                handler: s
            }), l.jsx(ve, {
                keyCode: be.Tab,
                keyEvent: "keydown",
                handler: c
            }), o]
        })
    })
}
function Zn(t, r) {
    const [o,e] = u.useState(t);
    return u.useEffect( () => {
        if (o && !t) {
            const i = setTimeout( () => {
                e(!1)
            }
            , r);
            return () => clearTimeout(i)
        }
        !o && t && e(!0)
    }
    , [r, t, o]),
    o
}
var te = {
    Body: "Polaris-Modal__Body",
    NoScrollBody: "Polaris-Modal__NoScrollBody",
    FixedBlockSize: "Polaris-Modal__FixedBlockSize",
    IFrame: "Polaris-Modal__IFrame"
}
  , Oe = {
    Section: "Polaris-Modal-Section",
    titleHidden: "Polaris-Modal-Section--titleHidden"
};
function Ge(t) {
    let {children: r, flush: o=!1, subdued: e=!1, titleHidden: i=!1} = t;
    const n = j(Oe.Section, i && Oe.titleHidden);
    return l.jsx("div", {
        className: n,
        children: l.jsx(C, {
            as: "section",
            padding: o ? "0" : "400",
            ...i && {
                paddingInlineEnd: "0"
            },
            ...e && {
                background: "bg-surface-tertiary"
            },
            children: r
        })
    })
}
var b = {
    Body: "Polaris-Modal-Dialog__Body",
    NoScrollBody: "Polaris-Modal-Dialog__NoScrollBody",
    FixedBlockSize: "Polaris-Modal-Dialog__FixedBlockSize",
    IFrame: "Polaris-Modal-Dialog__IFrame",
    Container: "Polaris-Modal-Dialog__Container",
    Idle: "Polaris-Modal-Dialog__Idle",
    Dialog: "Polaris-Modal-Dialog",
    Modal: "Polaris-Modal-Dialog__Modal",
    limitHeight: "Polaris-Modal-Dialog--limitHeight",
    sizeSmall: "Polaris-Modal-Dialog--sizeSmall",
    sizeLarge: "Polaris-Modal-Dialog--sizeLarge",
    sizeFullScreen: "Polaris-Modal-Dialog--sizeFullScreen",
    Shake: "Polaris-Modal-Dialog__Shake",
    animateFadeUp: "Polaris-Modal-Dialog--animateFadeUp",
    entering: "Polaris-Modal-Dialog--entering",
    exiting: "Polaris-Modal-Dialog--exiting",
    exited: "Polaris-Modal-Dialog--exited",
    entered: "Polaris-Modal-Dialog--entered",
    IdleOverlay: "Polaris-Modal-Dialog__IdleOverlay",
    shake: "Polaris-Modal-Dialog--shake"
};
const Ve = u.createContext(void 0)
  , Qn = u.forwardRef(function(r, o) {
    let {instant: e, labelledBy: i, children: n, limitHeight: a, size: s, onClose: c, preventOnClose: d, onExited: f, onEntered: p, setClosing: h, hasToasts: g, hasActivator: E, ...m} = r;
    const k = ke()
      , v = u.useRef(null)
      , x = u.useRef(null)
      , y = We(o, 1e3)
      , [B,F] = u.useState(0)
      , _ = u.useContext(qn)
      , S = u.useContext(Ve);
    let w;
    _ && (w = _.toastMessages);
    const K = j(b.Container, S?.idle && b.Idle)
      , D = j(b.Modal, s && b[mn("size", s)], a && b.limitHeight, y && b.Shake, S?.idle && b.Idle)
      , ee = e ? M : nt;
    u.useEffect( () => (v.current && !v.current.contains(document.activeElement) && (E || (x.current = document.activeElement),
    Q(v.current)),
    () => {
        !E && x.current && x.current.focus()
    }
    ), [E]);
    const L = () => {
        S?.idle || h && h(!0)
    }
      , W = () => {
        S?.idle || (h && h(!1),
        B < 1 && d ? (F(B + 1),
        d()) : (F(0),
        c()))
    }
      , X = l.jsx("div", {
        "aria-live": "assertive",
        children: w ? w.map(O => l.jsx(q, {
            visuallyHidden: !0,
            as: "p",
            children: O.content
        }, O.id)) : null
    })
      , $ = S?.idle && S?.transparentBackdrop ? l.jsx("div", {
        className: b.IdleOverlay
    }) : null;
    return l.jsx(ee, {
        ...m,
        nodeRef: v,
        timeout: parseInt(k.motion["motion-duration-150"], 10),
        onEntered: p,
        onExited: f,
        children: l.jsx("div", {
            className: K,
            "data-polaris-layer": !0,
            "data-polaris-overlay": !0,
            ref: v,
            children: l.jsx(Jn, {
                trapping: !S?.idle,
                children: l.jsxs("div", {
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-label": i,
                    "aria-labelledby": i,
                    tabIndex: -1,
                    className: b.Dialog,
                    children: [l.jsxs("div", {
                        className: D,
                        children: [l.jsx(ve, {
                            keyCode: be.Escape,
                            keyEvent: "keydown",
                            handler: L
                        }), l.jsx(ve, {
                            keyCode: be.Escape,
                            handler: W
                        }), n, $]
                    }), X]
                })
            })
        })
    })
})
  , et = {
    appear: j(b.animateFadeUp, b.entering),
    appearActive: j(b.animateFadeUp, b.entered),
    enter: j(b.animateFadeUp, b.entering),
    enterActive: j(b.animateFadeUp, b.entered),
    exit: j(b.animateFadeUp, b.exiting),
    exitActive: j(b.animateFadeUp, b.exited)
};
function nt(t) {
    let {children: r, ...o} = t;
    return l.jsx(Be, {
        ...o,
        classNames: et,
        children: r
    })
}
function Ae(t) {
    let {pressed: r, onClick: o} = t;
    const e = le();
    return l.jsx(ae, {
        variant: "tertiary",
        pressed: r,
        onClick: o,
        accessibilityLabel: e.translate("Polaris.Common.close"),
        icon: "x"
    })
}
function tt(t) {
    let {id: r, children: o, closing: e, titleHidden: i, onClose: n} = t;
    const a = "400"
      , s = "400";
    return i || !o ? l.jsx(C, {
        position: "absolute",
        insetInlineEnd: a,
        insetBlockStart: s,
        zIndex: "1",
        children: l.jsx(Ae, {
            onClick: n
        })
    }) : l.jsx(C, {
        paddingBlockStart: "400",
        paddingBlockEnd: "400",
        paddingInlineStart: a,
        paddingInlineEnd: a,
        borderBlockEndWidth: "025",
        borderColor: "border",
        background: "bg-surface-tertiary",
        children: l.jsxs(Gn, {
            columns: {
                xs: "1fr auto"
            },
            gap: "400",
            children: [l.jsx(I, {
                gap: "400",
                blockAlign: "center",
                children: l.jsx(q, {
                    id: r,
                    as: "h2",
                    variant: "headingMd",
                    breakWord: !0,
                    children: o
                })
            }), l.jsx(Ae, {
                pressed: e,
                onClick: n
            })]
        })
    })
}
var ie = {
    Footer: "Polaris-Modal-Footer",
    Shake: "Polaris-Modal-Footer__Shake",
    UnsavedChanges: "Polaris-Modal-Footer__UnsavedChanges",
    UnsavedChangesHidden: "Polaris-Modal-Footer__UnsavedChangesHidden"
};
const it = u.forwardRef(function(r, o) {
    let {primaryAction: e, secondaryActions: i, dirty: n, children: a} = r;
    const s = le()
      , {smDown: c} = Z()
      , d = ke()
      , f = u.useRef(null)
      , {isShaking: p, shakeDuration: h, showUnsavedChanges: g, bumpHeight: E} = rt(o, f, n)
      , m = e && Me(e, {
        variant: "primary",
        fullWidth: c
    }) || null
      , k = i && Me(i, {
        fullWidth: c
    }) || null
      , v = u.useMemo( () => c ? U : I, [c])
      , x = a || !c ? l.jsx(C, {
        children: a
    }) : null
      , y = l.jsxs("div", {
        className: j(g && ie.UnsavedChanges, !g && ie.UnsavedChangesHidden),
        children: [l.jsx(C, {
            paddingBlockEnd: c ? "300" : void 0,
            paddingInlineEnd: c ? void 0 : "400",
            children: l.jsxs(I, {
                wrap: !1,
                gap: "050",
                children: [l.jsx(re, {
                    tone: "legacy-inherit",
                    type: "alert-bubble"
                }), l.jsx(q, {
                    as: "span",
                    variant: "bodySm",
                    children: s.translate("Polaris.Modal.unsavedChanges")
                })]
            })
        }), l.jsx(q, {
            as: "span",
            visuallyHidden: !0,
            children: l.jsx("span", {
                "aria-live": "polite",
                children: p ? s.translate("Polaris.Modal.unsavedChanges") : null
            })
        })]
    })
      , B = m || k ? l.jsxs(v, {
        wrap: !1,
        children: [c ? l.jsx(De, {
            id: "unsaved-changes",
            open: !!(g && n),
            variant: "block",
            transition: {
                timingFunction: d.motion["motion-ease-in-out"],
                delay: h.scale,
                duration: h.token
            },
            children: y
        }) : y, l.jsx("div", {
            className: p && !c ? ie.Shake : void 0,
            ref: f,
            children: l.jsxs(v, {
                gap: "200",
                reverseOrder: c,
                wrap: !1,
                children: [k, m]
            })
        })]
    }) : null;
    return l.jsx("div", {
        className: ie.Footer,
        children: l.jsx(I, {
            gap: "400",
            blockAlign: "center",
            children: l.jsxs(C, {
                borderColor: "border",
                borderBlockStartWidth: "025",
                padding: "400",
                width: "100%",
                children: [l.jsxs(v, {
                    gap: "400",
                    blockAlign: "center",
                    align: "space-between",
                    wrap: !1,
                    children: [x, B]
                }), c ? l.jsx(De, {
                    id: "bump",
                    open: p,
                    variant: "block",
                    transition: {
                        duration: h.token,
                        timingFunction: d.motion["motion-ease-in-out"]
                    },
                    children: l.jsx(C, {
                        minHeight: E
                    })
                }) : null]
            })
        })
    })
});
function rt(t, r, o) {
    const {smDown: e} = Z()
      , i = ke()
      , n = e ? "200" : "300"
      , a = i.motion[`motion-duration-${n}`]
      , s = We(t, parseInt(a, 10))
      , [c,d] = u.useState(!1)
      , f = i.height["height-800"]
      , p = i.height["height-300"]
      , [h,g] = u.useState(f);
    return u.useEffect( () => {
        s && !c && (d(!0),
        setTimeout( () => g(p), parseInt(a, 10) * 2)),
        s && r?.current && Q(r.current)
    }
    , [p, c, s, a, r]),
    u.useEffect( () => {
        d(!1),
        g(f)
    }
    , [o, f]),
    {
        isShaking: s,
        shakeDuration: {
            token: a,
            scale: n
        },
        showUnsavedChanges: c,
        bumpHeight: h
    }
}
const Re = 200
  , at = 400
  , st = function(r) {
    let {children: o, title: e, titleHidden: i=!1, src: n, iFrameName: a, open: s, instant: c, sectioned: d, loading: f, size: p, fixedBlockSize: h, limitHeight: g, footer: E, primaryAction: m, secondaryActions: k, onScrolledToBottom: v, activator: x, activatorWrapper: y="div", onClose: B, onIFrameLoad: F, onTransitionEnd: _, noScroll: S, dirty: w} = r;
    const [K,D] = u.useState(Re)
      , [ee,L] = u.useState(!1)
      , W = u.useContext(Ve)
      , X = Zn(s, 150)
      , $ = u.useId()
      , O = u.useRef(null)
      , qe = le().translate("Polaris.Modal.iFrameTitle");
    let Pe, Ie;
    const ce = u.useRef(null)
      , de = u.useRef(null)
      , ue = u.useCallback( () => {
        w && (m || k || E) ? (ce.current && ce.current.onAction(),
        de.current && de.current.onAction()) : B && B()
    }
    , [w, E, B, m, k])
      , Ke = u.useCallback( () => {
        _ && _()
    }
    , [_])
      , Xe = u.useCallback( () => {
        D(Re);
        const T = x && He(x) ? x && x.current : O.current;
        T && requestAnimationFrame( () => Q(T))
    }
    , [x])
      , Ye = u.useCallback(T => {
        const Y = T.target;
        if (Y && Y.contentWindow)
            try {
                D(Y.contentWindow.document.body.scrollHeight)
            } catch {
                D(at)
            }
        F?.(T)
    }
    , [F]);
    if (s) {
        const T = !E && !m && !k ? null : l.jsx(it, {
            primaryAction: m,
            secondaryActions: k,
            dirty: w,
            ref: ce,
            children: E
        })
          , Y = d ? vn(o, Ge, {
            titleHidden: i
        }) : o
          , pe = f ? l.jsx(C, {
            padding: "400",
            children: l.jsx(I, {
                gap: "400",
                align: "center",
                blockAlign: "center",
                children: l.jsx(En, {})
            })
        }) : Y
          , Ze = S ? l.jsx("div", {
            className: te.NoScrollBody,
            children: l.jsx(C, {
                width: "100%",
                overflowX: "hidden",
                overflowY: "hidden",
                children: pe
            })
        }) : l.jsx(bn, {
            shadow: !0,
            className: j(te.Body, h && te.FixedBlockSize),
            onScrolledToBottom: v,
            children: pe
        })
          , Qe = n ? l.jsx("iframe", {
            name: a,
            title: qe,
            src: n,
            className: te.IFrame,
            onLoad: Ye,
            style: {
                height: `${K}px`
            }
        }) : Ze;
        Pe = l.jsxs(Qn, {
            instant: c,
            labelledBy: $,
            onClose: B,
            preventOnClose: ue,
            onEntered: Ke,
            onExited: Xe,
            size: p,
            limitHeight: g,
            setClosing: L,
            ref: de,
            hasActivator: !!x,
            children: [l.jsx(tt, {
                titleHidden: i,
                id: $,
                closing: ee && !w,
                onClose: ue,
                children: e
            }), Qe, T]
        })
    }
    X && (Ie = l.jsx(An, {
        setClosing: L,
        onClick: ue,
        transparent: W?.transparentBackdrop !== void 0 ? W?.transparentBackdrop : !s
    }));
    const fe = !c
      , Je = x && !He(x) ? l.jsx(C, {
        ref: O,
        as: y,
        children: x
    }) : null;
    return l.jsxs(ye.Provider, {
        value: !0,
        children: [Je, l.jsxs(Cn, {
            idPrefix: "modal",
            children: [l.jsx(Ne, {
                appear: fe,
                enter: fe,
                exit: fe,
                children: Pe
            }), Ie]
        })]
    })
};
function He(t) {
    return Object.prototype.hasOwnProperty.call(t, "current")
}
st.Section = Ge;
var me, Ue;
function ot() {
    if (Ue)
        return me;
    Ue = 1;
    var t = kn();
    function r(o, e) {
        return t(o, e)
    }
    return me = r,
    me
}
var lt = ot();
const ht = Sn(lt);
function gt() {
    return u.useContext(yn)
}
export {pt as B, De as C, qn as F, Gn as I, st as M, On as S, Jn as T, Se as _, M as a, Ne as b, Be as c, An as d, se as e, ht as i, gt as u};
//# sourceMappingURL=hook-099b899aee0a640061cc9a8905064d9bdd640207.1.js.map
