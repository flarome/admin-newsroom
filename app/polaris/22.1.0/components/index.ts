

import React from 'react';
import ReactDom from 'react-dom';
import classnames from 'classnames';
import {useRooterContext as kn, global as E, an as Gr,am as Ye} from '../../../_rooter';
import { useNavigation } from '@remix-run/react';
import { InternalIcon as Fe, hasIcon as So } from '../../../admin-ui-foundations';
 
var tU = Object.defineProperty;
var UT = e => {
    throw TypeError(e)
}
;
var nU = (e, t, n) => t in e ? tU(e, t, { 
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: n
}) : e[t] = n;
var te = (e, t, n) => nU(e, typeof t != "symbol" ? t + "" : t, n)
  , TS = (e, t, n) => t.has(e) || UT("Cannot " + n);
var rt = (e, t, n) => (TS(e, t, "read from private field"),
n ? n.call(e) : t.get(e))
  , vt = (e, t, n) => t.has(e) ? UT("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n)
  , yt = (e, t, n, i) => (TS(e, t, "write to private field"),
i ? i.call(e, n) : t.set(e, n),
n)
  , PS = (e, t, n) => (TS(e, t, "access private method"),
n);










var OS = {
    exports: {}
}
  , $a = {}
  ;






















let tn = function(e: any) {
    return e[e.Backspace = 8] = "Backspace",
    e[e.Tab = 9] = "Tab",
    e[e.Enter = 13] = "Enter",
    e[e.Shift = 16] = "Shift",
    e[e.Ctrl = 17] = "Ctrl",
    e[e.Alt = 18] = "Alt",
    e[e.Pause = 19] = "Pause",
    e[e.CapsLock = 20] = "CapsLock",
    e[e.Escape = 27] = "Escape",
    e[e.Space = 32] = "Space",
    e[e.PageUp = 33] = "PageUp",
    e[e.PageDown = 34] = "PageDown",
    e[e.End = 35] = "End",
    e[e.Home = 36] = "Home",
    e[e.LeftArrow = 37] = "LeftArrow",
    e[e.UpArrow = 38] = "UpArrow",
    e[e.RightArrow = 39] = "RightArrow",
    e[e.DownArrow = 40] = "DownArrow",
    e[e.Insert = 45] = "Insert",
    e[e.Delete = 46] = "Delete",
    e[e.Key0 = 48] = "Key0",
    e[e.Key1 = 49] = "Key1",
    e[e.Key2 = 50] = "Key2",
    e[e.Key3 = 51] = "Key3",
    e[e.Key4 = 52] = "Key4",
    e[e.Key5 = 53] = "Key5",
    e[e.Key6 = 54] = "Key6",
    e[e.Key7 = 55] = "Key7",
    e[e.Key8 = 56] = "Key8",
    e[e.Key9 = 57] = "Key9",
    e[e.KeyA = 65] = "KeyA",
    e[e.KeyB = 66] = "KeyB",
    e[e.KeyC = 67] = "KeyC",
    e[e.KeyD = 68] = "KeyD",
    e[e.KeyE = 69] = "KeyE",
    e[e.KeyF = 70] = "KeyF",
    e[e.KeyG = 71] = "KeyG",
    e[e.KeyH = 72] = "KeyH",
    e[e.KeyI = 73] = "KeyI",
    e[e.KeyJ = 74] = "KeyJ",
    e[e.KeyK = 75] = "KeyK",
    e[e.KeyL = 76] = "KeyL",
    e[e.KeyM = 77] = "KeyM",
    e[e.KeyN = 78] = "KeyN",
    e[e.KeyO = 79] = "KeyO",
    e[e.KeyP = 80] = "KeyP",
    e[e.KeyQ = 81] = "KeyQ",
    e[e.KeyR = 82] = "KeyR",
    e[e.KeyS = 83] = "KeyS",
    e[e.KeyT = 84] = "KeyT",
    e[e.KeyU = 85] = "KeyU",
    e[e.KeyV = 86] = "KeyV",
    e[e.KeyW = 87] = "KeyW",
    e[e.KeyX = 88] = "KeyX",
    e[e.KeyY = 89] = "KeyY",
    e[e.KeyZ = 90] = "KeyZ",
    e[e.LeftMeta = 91] = "LeftMeta",
    e[e.RightMeta = 92] = "RightMeta",
    e[e.Select = 93] = "Select",
    e[e.Numpad0 = 96] = "Numpad0",
    e[e.Numpad1 = 97] = "Numpad1",
    e[e.Numpad2 = 98] = "Numpad2",
    e[e.Numpad3 = 99] = "Numpad3",
    e[e.Numpad4 = 100] = "Numpad4",
    e[e.Numpad5 = 101] = "Numpad5",
    e[e.Numpad6 = 102] = "Numpad6",
    e[e.Numpad7 = 103] = "Numpad7",
    e[e.Numpad8 = 104] = "Numpad8",
    e[e.Numpad9 = 105] = "Numpad9",
    e[e.Multiply = 106] = "Multiply",
    e[e.Add = 107] = "Add",
    e[e.Subtract = 109] = "Subtract",
    e[e.Decimal = 110] = "Decimal",
    e[e.Divide = 111] = "Divide",
    e[e.F1 = 112] = "F1",
    e[e.F2 = 113] = "F2",
    e[e.F3 = 114] = "F3",
    e[e.F4 = 115] = "F4",
    e[e.F5 = 116] = "F5",
    e[e.F6 = 117] = "F6",
    e[e.F7 = 118] = "F7",
    e[e.F8 = 119] = "F8",
    e[e.F9 = 120] = "F9",
    e[e.F10 = 121] = "F10",
    e[e.F11 = 122] = "F11",
    e[e.F12 = 123] = "F12",
    e[e.NumLock = 144] = "NumLock",
    e[e.ScrollLock = 145] = "ScrollLock",
    e[e.Semicolon = 186] = "Semicolon",
    e[e.Equals = 187] = "Equals",
    e[e.Comma = 188] = "Comma",
    e[e.Dash = 189] = "Dash",
    e[e.Period = 190] = "Period",
    e[e.ForwardSlash = 191] = "ForwardSlash",
    e[e.GraveAccent = 192] = "GraveAccent",
    e[e.OpenBracket = 219] = "OpenBracket",
    e[e.BackSlash = 220] = "BackSlash",
    e[e.CloseBracket = 221] = "CloseBracket",
    e[e.SingleQuote = 222] = "SingleQuote",
    e
}({});


const Ky = {
    props: {
        "data-polaris-scrollable": !0
    },
    selector: "[data-polaris-scrollable]"
}
  , Ux = {
    props: {
        "data-polaris-overlay": !0
    },
    selector: "[data-polaris-overlay]"
}
  , Hd = {
    props: {
        "data-polaris-layer": !0
    },
    selector: "[data-polaris-layer]"
}
  , HP = {
    props: {
        "data-polaris-unstyled": !0
    }
}
  , $x = {
    props: {
        "data-polaris-top-bar": !0
    },
    selector: "[data-polaris-top-bar]"
}
  , o0 = {
    props: {
        "data-polaris-header-cell": !0
    },
    selector: "[data-polaris-header-cell]"
}
  , iD = {
    selector: "[data-portal-id]"
}
  , kGe = {
    overlay: Ux,
    layer: Hd
}
  , aD = ["xs", "sm", "md", "lg", "xl"]
  , ny = 16
  , of = "px"
  , Id = "em"
  , Ld = "rem"
  , JQ = new RegExp(String.raw`-?\d+(?:\.\d+|\d*)`)
  , XQ = new RegExp(`${of}|${Id}|${Ld}`);
function Hx(e="") {
    const t = e.match(new RegExp(`${JQ.source}(${XQ.source})`));
    return t && t[1]
}
function rD(e="") {
    const t = Hx(e);
    if (!t || t === of)
        return e;
    if (t === Id || t === Ld)
        return `${parseFloat(e) * ny}${of}`
}
function oD(e="", t=ny) {
    const n = Hx(e);
    if (!n || n === Id)
        return e;
    if (n === of)
        return `${parseFloat(e) / t}${Id}`;
    if (n === Ld)
        return `${parseFloat(e) * ny / t}${Id}`
}
function SGe(e="") {
    const t = Hx(e);
    if (!t || t === Ld)
        return e;
    if (t === Id)
        return `${parseFloat(e)}${Ld}`;
    if (t === of)
        return `${parseFloat(e) / ny}${Ld}`
}
function eZ(e) {
    return `--p-${e}`
}
function yd(e) {
    return `var(${eZ(e)})`
}
function tZ(e: any) {
    return Object.values(e).flatMap((t: any) => Object.keys(t))
}


function nZ(e) {
    const t = Object.entries(e)
      , n = t.length - 1;
    return Object.fromEntries(t.map( (i, a) => {
        var f;
        const [r,s] = i
          , l = (f = t[a + 1]) == null ? void 0 : f[1]
          , c = iZ(s)
          , d = WP(s)
          , p = a === n || !l ? c : `${c} and ${WP(l)}`;
        return [r, {
            up: c,
            down: d,
            only: p
        }]
    }
    ))
}
function iZ(e) {
    return `(min-width: ${oD(e)})`
}
function WP(e) {
    const t = parseFloat(rD(e) ?? "") - .04;
    return `(max-width: ${oD(`${t}px`)})`
}
const sD = "light"
  , lu = sD
  , lD = [sD, "dark-experimental", "light-mobile", "dark-mobile-experimental"]
  , fm = {
    "light-mobile": ["light", "mobile"],
    "dark-mobile-experimental": ["dark-experimental", "mobile"],
    light: ["light"],
    "dark-experimental": ["dark-experimental"]
};
function aZ(e, t) {
    const n = new Map;
    return function(a) {
        if (n.has(a))
            return n.get(a);
        const s = fm[a].map(c => t[c]);
        let l = e;
        return s.forEach(c => {
            l = cD(l, c)
        }
        ),
        n.set(a, l),
        l
    }
}
function Wx(e) {
    return e === lu ? oZ(lu) : rZ(e)
}
function rZ(e) {
    return `p-partial-theme-${e}`
}
function oZ(e) {
    return `p-theme-${e}`
}
function sZ(e) {
    const t = new Set(tZ(e));
    return n => t.has(n)
}
function cD(e, t) {
    if (typeof t != "object")
        return t;
    if (typeof e != "object")
        return e;
    const n = {};
    for (const i in e)
        i in t ? n[i] = e[i] == null ? t[i] : t[i] == null ? e[i] : cD(e[i], t[i]) : n[i] = e[i];
    for (const i in t)
        i in e || (n[i] = t[i]);
    return n
}
const Bf = {
    border: {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem"
    },
    breakpoints: {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem"
    },
    color: {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 212, 1)",
        "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
        "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
        "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
        "color-bg-surface-highlight": "rgba(240, 242, 255, 1)",
        "color-bg-surface-highlight-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-highlight-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-ai": "rgba(248, 247, 255, 1)",
        "color-bg-surface-ai-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-ai-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(4, 123, 93, 1)",
        "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
        "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
        "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
        "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
        "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
        "color-bg-fill-highlight": "rgba(0, 91, 211, 1)",
        "color-bg-fill-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-highlight-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-ai": "rgba(128, 81, 255, 1)",
        "color-bg-fill-ai-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-ai-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-ai-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(48, 48, 48, 1)",
        "color-text-secondary": "rgba(97, 97, 97, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(1, 75, 64, 1)",
        "color-text-success-hover": "rgba(7, 54, 48, 1)",
        "color-text-success-active": "rgba(2, 38, 34, 1)",
        "color-text-success-secondary": "rgba(4, 123, 93, 1)",
        "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 11, 33, 1)",
        "color-text-critical-hover": "rgba(95, 7, 22, 1)",
        "color-text-critical-active": "rgba(47, 4, 11, 1)",
        "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
        "color-text-highlight": "rgba(0, 91, 211, 1)",
        "color-text-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-text-highlight-active": "rgba(0, 46, 106, 1)",
        "color-text-highlight-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-highlight-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-highlight-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-ai": "rgba(87, 0, 209, 1)",
        "color-text-ai-secondary": "rgba(113, 38, 255, 1)",
        "color-text-ai-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(235, 235, 235, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 252, 172, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 193, 199, 1)",
        "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
        "color-border-highlight": "rgba(0, 91, 211, 1)",
        "color-border-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-border-highlight-active": "rgba(0, 46, 106, 1)",
        "color-border-ai": "rgba(228, 222, 255, 1)",
        "color-border-ai-secondary": "rgba(148, 116, 255, 1)",
        "color-border-ai-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(4, 123, 93, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(226, 44, 56, 1)",
        "color-icon-highlight": "rgba(0, 91, 211, 1)",
        "color-icon-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-icon-highlight-active": "rgba(0, 46, 106, 1)",
        "color-icon-ai": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
        "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
    },
    font: {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "600",
        "font-weight-bold": "650",
        "font-letter-spacing-densest": "-0.0291em",
        "font-letter-spacing-denser": "-0.0166em",
        "font-letter-spacing-dense": "-0.00833em",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem"
    },
    height: {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem"
    },
    motion: {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above": "{ from { transform: translateY(0.25rem); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below": "{ from { transform: translateY(calc(0.25rem * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    shadow: {
        "shadow-0": "none",
        "shadow-100": "0rem 0.3125rem 0.3125rem -0.15625rem rgba(0, 0, 0, 0.03), 0rem 0.1875rem 0.1875rem -0.09375rem rgba(0, 0, 0, 0.02), 0rem 0.125rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.02), 0rem 0.0625rem 0.0625rem -0.03125rem rgba(0, 0, 0, 0.03), 0rem 0.03125rem 0.03125rem 0rem rgba(0, 0, 0, 0.04), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-200": "0rem 0.5rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.08), 0rem 0.3125rem 0.3125rem -0.15625rem rgba(0, 0, 0, 0.03), 0rem 0.1875rem 0.1875rem -0.09375rem rgba(0, 0, 0, 0.02), 0rem 0.125rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.02), 0rem 0.0625rem 0.0625rem -0.03125rem rgba(0, 0, 0, 0.03), 0rem 0.03125rem 0.03125rem 0rem rgba(0, 0, 0, 0.04), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-300": "0rem 0.5rem 1.5rem -0.5rem rgba(0, 0, 0, 0.28), 0rem 0.5rem 1rem -0.25rem rgba(0, 0, 0, 0.05), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-400": "0rem 1.25rem 2rem -0.75rem rgba(0, 0, 0, 0.20), 0rem 0.625rem 1rem -0.375rem rgba(0, 0, 0, 0.08), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-500": "0rem 1.5rem 2.25rem -0.75rem rgba(0, 0, 0, 0.12), 0rem 1.5rem 1.5rem -0.75rem rgba(0, 0, 0, 0.08), 0rem 0.5rem 1rem -0.375rem rgba(0, 0, 0, 0.08), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-600": "0rem 1.5rem 3.5rem -0.75rem rgba(0, 0, 0, 0.24), 0rem 1.5rem 1.5rem -0.75rem rgba(0, 0, 0, 0.12), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.07)",
        "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
        "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 11, 33, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(163, 10, 36, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(247, 128, 134, 0.64) inset",
        "shadow-button-primary-critical-hover": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 11, 33, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(163, 10, 36, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(247, 128, 134, 0.44) inset",
        "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    space: {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-700": "1.75rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem"
    },
    width: {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem"
    },
    zIndex: {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520"
    }
};
sZ(Bf);
const lZ = {
    light: {},
    "dark-experimental": {
        color: {
            "color-scheme": "dark",
            "color-bg": "rgba(26, 26, 26, 1)",
            "color-bg-surface": "rgba(48, 48, 48, 1)",
            "color-bg-fill": "rgba(48, 48, 48, 1)",
            "color-icon": "rgba(227, 227, 227, 1)",
            "color-icon-secondary": "rgba(181, 181, 181, 1)",
            "color-icon-disabled": "rgba(74, 74, 74, 1)",
            "color-text": "rgba(227, 227, 227, 1)",
            "color-text-secondary": "rgba(181, 181, 181, 1)",
            "color-text-disabled": "rgba(97, 97, 97, 1)",
            "color-bg-surface-secondary-active": "rgba(255, 255, 255, 0.14)",
            "color-bg-surface-secondary-hover": "rgba(255, 255, 255, 0.06)",
            "color-bg-fill-transparent": "rgba(255, 255, 255, 0.11)",
            "color-bg-fill-brand": "rgba(255, 255, 255, 1)",
            "color-text-brand-on-bg-fill": "rgba(48, 48, 48, 1)",
            "color-bg-surface-hover": "rgba(74, 74, 74, 1)",
            "color-bg-fill-hover": "rgba(255, 255, 255, 0.05)",
            "color-bg-fill-transparent-hover": "rgba(255, 255, 255, 0.14)",
            "color-bg-fill-brand-hover": "rgba(243, 243, 243, 1)",
            "color-bg-surface-selected": "rgba(97, 97, 97, 1)",
            "color-bg-fill-selected": "rgba(97, 97, 97, 1)",
            "color-bg-fill-transparent-selected": "rgba(255, 255, 255, 0.22)",
            "color-bg-fill-brand-selected": "rgba(212, 212, 212, 1)",
            "color-bg-surface-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-active": "rgba(97, 97, 97, 1)",
            "color-bg-fill-transparent-active": "rgba(255, 255, 255, 0.17)",
            "color-bg-fill-brand-active": "rgba(247, 247, 247, 1)",
            "color-bg-fill-secondary": "rgba(255, 255, 255, 0.08)",
            "color-bg-fill-secondary-hover": "rgba(255, 255, 255, 0.11)",
            "color-bg-fill-secondary-selected": "rgba(255, 255, 255, 0.17)",
            "color-bg-surface-brand-selected": "rgba(74, 74, 74, 1)",
            "color-border-secondary": "rgba(74, 74, 74, 1)",
            "color-bg-surface-tertiary": "rgba(255, 255, 255, 0.08)",
            "color-icon-brand": "rgba(74, 74, 74, 1)",
            "color-bg-fill-disabled": "rgba(255, 255, 255, 0.05)",
            "color-text-brand-on-bg-fill-disabled": "rgba(138, 138, 138, 1)",
            "color-bg-fill-brand-disabled": "rgba(255, 255, 255, 0.22)",
            "color-bg-fill-tertiary": "rgba(48, 48, 48, 1)",
            "color-tooltip-tail-down-border": "rgba(60, 60, 60, 1)",
            "color-tooltip-tail-up-border": "rgba(71, 71, 71, 1)"
        },
        shadow: {
            "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, -0.0625rem 0rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem -0.0625rem 0rem 0rem rgba(204, 204, 204, 0.08) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.16) inset"
        }
    },
    mobile: {
        font: {
            "font-weight-regular": "400",
            "font-weight-medium": "500",
            "font-weight-semibold": "600",
            "font-weight-bold": "700",
            "font-letter-spacing-densest": "-0.03375rem",
            "font-letter-spacing-denser": "-0.01875rem",
            "font-letter-spacing-dense": "-0.0125rem"
        }
    }
}
  , cZ = {
    border: {
        "border-radius-0": "0rem",
        "border-radius-050": "0.125rem",
        "border-radius-100": "0.25rem",
        "border-radius-150": "0.375rem",
        "border-radius-200": "0.5rem",
        "border-radius-300": "0.75rem",
        "border-radius-400": "1rem",
        "border-radius-500": "1.25rem",
        "border-radius-750": "1.875rem",
        "border-radius-full": "624.9375rem",
        "border-width-0": "0rem",
        "border-width-0165": "0.04125rem",
        "border-width-025": "0.0625rem",
        "border-width-050": "0.125rem",
        "border-width-100": "0.25rem"
    },
    breakpoints: {
        "breakpoints-xs": "0rem",
        "breakpoints-sm": "30.625rem",
        "breakpoints-md": "48rem",
        "breakpoints-lg": "65rem",
        "breakpoints-xl": "90rem"
    },
    color: {
        "color-scheme": "light",
        "color-bg": "rgba(241, 241, 241, 1)",
        "color-bg-inverse": "rgba(26, 26, 26, 1)",
        "color-bg-surface": "rgba(255, 255, 255, 1)",
        "color-bg-surface-hover": "rgba(247, 247, 247, 1)",
        "color-bg-surface-active": "rgba(243, 243, 243, 1)",
        "color-bg-surface-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-surface-secondary": "rgba(247, 247, 247, 1)",
        "color-bg-surface-secondary-hover": "rgba(241, 241, 241, 1)",
        "color-bg-surface-secondary-active": "rgba(235, 235, 235, 1)",
        "color-bg-surface-secondary-selected": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary": "rgba(243, 243, 243, 1)",
        "color-bg-surface-tertiary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-tertiary-active": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand": "rgba(227, 227, 227, 1)",
        "color-bg-surface-brand-hover": "rgba(235, 235, 235, 1)",
        "color-bg-surface-brand-active": "rgba(241, 241, 241, 1)",
        "color-bg-surface-brand-selected": "rgba(241, 241, 241, 1)",
        "color-bg-surface-info": "rgba(234, 244, 255, 1)",
        "color-bg-surface-info-hover": "rgba(224, 240, 255, 1)",
        "color-bg-surface-info-active": "rgba(202, 230, 255, 1)",
        "color-bg-surface-success": "rgba(205, 254, 212, 1)",
        "color-bg-surface-success-hover": "rgba(175, 254, 191, 1)",
        "color-bg-surface-success-active": "rgba(146, 252, 172, 1)",
        "color-bg-surface-caution": "rgba(255, 248, 219, 1)",
        "color-bg-surface-caution-hover": "rgba(255, 244, 191, 1)",
        "color-bg-surface-caution-active": "rgba(255, 239, 157, 1)",
        "color-bg-surface-warning": "rgba(255, 241, 227, 1)",
        "color-bg-surface-warning-hover": "rgba(255, 235, 213, 1)",
        "color-bg-surface-warning-active": "rgba(255, 228, 198, 1)",
        "color-bg-surface-critical": "rgba(254, 232, 235, 1)",
        "color-bg-surface-critical-hover": "rgba(254, 225, 230, 1)",
        "color-bg-surface-critical-active": "rgba(254, 217, 223, 1)",
        "color-bg-surface-highlight": "rgba(240, 242, 255, 1)",
        "color-bg-surface-highlight-hover": "rgba(234, 237, 255, 1)",
        "color-bg-surface-highlight-active": "rgba(226, 231, 255, 1)",
        "color-bg-surface-ai": "rgba(248, 247, 255, 1)",
        "color-bg-surface-ai-hover": "rgba(243, 241, 255, 1)",
        "color-bg-surface-ai-active": "rgba(233, 229, 255, 1)",
        "color-bg-surface-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-surface-transparent": "rgba(0, 0, 0, 0)",
        "color-bg-fill": "rgba(255, 255, 255, 1)",
        "color-bg-fill-hover": "rgba(250, 250, 250, 1)",
        "color-bg-fill-active": "rgba(247, 247, 247, 1)",
        "color-bg-fill-selected": "rgba(204, 204, 204, 1)",
        "color-bg-fill-disabled": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-secondary": "rgba(241, 241, 241, 1)",
        "color-bg-fill-secondary-hover": "rgba(235, 235, 235, 1)",
        "color-bg-fill-secondary-active": "rgba(227, 227, 227, 1)",
        "color-bg-fill-secondary-selected": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary": "rgba(227, 227, 227, 1)",
        "color-bg-fill-tertiary-hover": "rgba(212, 212, 212, 1)",
        "color-bg-fill-tertiary-active": "rgba(204, 204, 204, 1)",
        "color-bg-fill-brand": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-hover": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-active": "rgba(26, 26, 26, 1)",
        "color-bg-fill-brand-selected": "rgba(48, 48, 48, 1)",
        "color-bg-fill-brand-disabled": "rgba(0, 0, 0, 0.17)",
        "color-bg-fill-info": "rgba(145, 208, 255, 1)",
        "color-bg-fill-info-hover": "rgba(81, 192, 255, 1)",
        "color-bg-fill-info-active": "rgba(0, 148, 213, 1)",
        "color-bg-fill-info-secondary": "rgba(213, 235, 255, 1)",
        "color-bg-fill-success": "rgba(4, 123, 93, 1)",
        "color-bg-fill-success-hover": "rgba(3, 94, 76, 1)",
        "color-bg-fill-success-active": "rgba(1, 75, 64, 1)",
        "color-bg-fill-success-secondary": "rgba(175, 254, 191, 1)",
        "color-bg-fill-warning": "rgba(255, 184, 0, 1)",
        "color-bg-fill-warning-hover": "rgba(229, 165, 0, 1)",
        "color-bg-fill-warning-active": "rgba(178, 132, 0, 1)",
        "color-bg-fill-warning-secondary": "rgba(255, 214, 164, 1)",
        "color-bg-fill-caution": "rgba(255, 230, 0, 1)",
        "color-bg-fill-caution-hover": "rgba(234, 211, 0, 1)",
        "color-bg-fill-caution-active": "rgba(225, 203, 0, 1)",
        "color-bg-fill-caution-secondary": "rgba(255, 235, 120, 1)",
        "color-bg-fill-critical": "rgba(199, 10, 36, 1)",
        "color-bg-fill-critical-hover": "rgba(163, 10, 36, 1)",
        "color-bg-fill-critical-active": "rgba(142, 11, 33, 1)",
        "color-bg-fill-critical-selected": "rgba(142, 11, 33, 1)",
        "color-bg-fill-critical-secondary": "rgba(254, 209, 215, 1)",
        "color-bg-fill-highlight": "rgba(0, 91, 211, 1)",
        "color-bg-fill-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-bg-fill-highlight-active": "rgba(0, 46, 106, 1)",
        "color-bg-fill-ai": "rgba(128, 81, 255, 1)",
        "color-bg-fill-ai-secondary": "rgba(233, 229, 255, 1)",
        "color-bg-fill-ai-secondary-hover": "rgba(228, 222, 255, 1)",
        "color-bg-fill-ai-secondary-active": "rgba(223, 217, 255, 1)",
        "color-bg-fill-inverse": "rgba(48, 48, 48, 1)",
        "color-bg-fill-inverse-hover": "rgba(74, 74, 74, 1)",
        "color-bg-fill-inverse-active": "rgba(97, 97, 97, 1)",
        "color-bg-fill-transparent": "rgba(0, 0, 0, 0.02)",
        "color-bg-fill-transparent-hover": "rgba(0, 0, 0, 0.05)",
        "color-bg-fill-transparent-active": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-selected": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary": "rgba(0, 0, 0, 0.06)",
        "color-bg-fill-transparent-secondary-hover": "rgba(0, 0, 0, 0.08)",
        "color-bg-fill-transparent-secondary-active": "rgba(0, 0, 0, 0.11)",
        "color-text": "rgba(48, 48, 48, 1)",
        "color-text-secondary": "rgba(97, 97, 97, 1)",
        "color-text-disabled": "rgba(181, 181, 181, 1)",
        "color-text-link": "rgba(0, 91, 211, 1)",
        "color-text-link-hover": "rgba(0, 66, 153, 1)",
        "color-text-link-active": "rgba(0, 46, 106, 1)",
        "color-text-brand": "rgba(74, 74, 74, 1)",
        "color-text-brand-hover": "rgba(48, 48, 48, 1)",
        "color-text-brand-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-text-brand-on-bg-fill-hover": "rgba(227, 227, 227, 1)",
        "color-text-brand-on-bg-fill-active": "rgba(204, 204, 204, 1)",
        "color-text-brand-on-bg-fill-disabled": "rgba(255, 255, 255, 1)",
        "color-text-info": "rgba(0, 58, 90, 1)",
        "color-text-info-hover": "rgba(0, 58, 90, 1)",
        "color-text-info-active": "rgba(0, 33, 51, 1)",
        "color-text-info-secondary": "rgba(0, 124, 180, 1)",
        "color-text-info-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-text-success": "rgba(1, 75, 64, 1)",
        "color-text-success-hover": "rgba(7, 54, 48, 1)",
        "color-text-success-active": "rgba(2, 38, 34, 1)",
        "color-text-success-secondary": "rgba(4, 123, 93, 1)",
        "color-text-success-on-bg-fill": "rgba(250, 255, 251, 1)",
        "color-text-caution": "rgba(79, 71, 0, 1)",
        "color-text-caution-hover": "rgba(51, 46, 0, 1)",
        "color-text-caution-active": "rgba(31, 28, 0, 1)",
        "color-text-caution-secondary": "rgba(130, 117, 0, 1)",
        "color-text-caution-on-bg-fill": "rgba(51, 46, 0, 1)",
        "color-text-warning": "rgba(94, 66, 0, 1)",
        "color-text-warning-hover": "rgba(65, 45, 0, 1)",
        "color-text-warning-active": "rgba(37, 26, 0, 1)",
        "color-text-warning-secondary": "rgba(149, 111, 0, 1)",
        "color-text-warning-on-bg-fill": "rgba(37, 26, 0, 1)",
        "color-text-critical": "rgba(142, 11, 33, 1)",
        "color-text-critical-hover": "rgba(95, 7, 22, 1)",
        "color-text-critical-active": "rgba(47, 4, 11, 1)",
        "color-text-critical-secondary": "rgba(199, 10, 36, 1)",
        "color-text-critical-on-bg-fill": "rgba(255, 250, 251, 1)",
        "color-text-highlight": "rgba(0, 91, 211, 1)",
        "color-text-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-text-highlight-active": "rgba(0, 46, 106, 1)",
        "color-text-highlight-on-bg-fill": "rgba(252, 253, 255, 1)",
        "color-text-highlight-on-bg-fill-hover": "rgba(226, 231, 255, 1)",
        "color-text-highlight-on-bg-fill-active": "rgba(213, 220, 255, 1)",
        "color-text-ai": "rgba(87, 0, 209, 1)",
        "color-text-ai-secondary": "rgba(113, 38, 255, 1)",
        "color-text-ai-on-bg-fill": "rgba(253, 253, 255, 1)",
        "color-text-inverse": "rgba(227, 227, 227, 1)",
        "color-text-inverse-secondary": "rgba(181, 181, 181, 1)",
        "color-text-link-inverse": "rgba(197, 208, 255, 1)",
        "color-border": "rgba(227, 227, 227, 1)",
        "color-border-hover": "rgba(204, 204, 204, 1)",
        "color-border-disabled": "rgba(235, 235, 235, 1)",
        "color-border-secondary": "rgba(235, 235, 235, 1)",
        "color-border-tertiary": "rgba(204, 204, 204, 1)",
        "color-border-focus": "rgba(0, 91, 211, 1)",
        "color-border-brand": "rgba(227, 227, 227, 1)",
        "color-border-info": "rgba(168, 216, 255, 1)",
        "color-border-success": "rgba(146, 252, 172, 1)",
        "color-border-caution": "rgba(255, 235, 120, 1)",
        "color-border-warning": "rgba(255, 200, 121, 1)",
        "color-border-critical": "rgba(254, 193, 199, 1)",
        "color-border-critical-secondary": "rgba(142, 11, 33, 1)",
        "color-border-highlight": "rgba(0, 91, 211, 1)",
        "color-border-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-border-highlight-active": "rgba(0, 46, 106, 1)",
        "color-border-ai": "rgba(228, 222, 255, 1)",
        "color-border-ai-secondary": "rgba(148, 116, 255, 1)",
        "color-border-ai-secondary-hover": "rgba(128, 81, 255, 1)",
        "color-border-inverse": "rgba(97, 97, 97, 1)",
        "color-border-inverse-hover": "rgba(204, 204, 204, 1)",
        "color-border-inverse-active": "rgba(227, 227, 227, 1)",
        "color-tooltip-tail-down-border": "rgba(212, 212, 212, 1)",
        "color-tooltip-tail-up-border": "rgba(227, 227, 227, 1)",
        "color-icon": "rgba(74, 74, 74, 1)",
        "color-icon-hover": "rgba(48, 48, 48, 1)",
        "color-icon-active": "rgba(26, 26, 26, 1)",
        "color-icon-disabled": "rgba(204, 204, 204, 1)",
        "color-icon-secondary": "rgba(138, 138, 138, 1)",
        "color-icon-secondary-hover": "rgba(97, 97, 97, 1)",
        "color-icon-secondary-active": "rgba(74, 74, 74, 1)",
        "color-icon-brand": "rgba(26, 26, 26, 1)",
        "color-icon-info": "rgba(0, 148, 213, 1)",
        "color-icon-success": "rgba(4, 123, 93, 1)",
        "color-icon-caution": "rgba(153, 138, 0, 1)",
        "color-icon-warning": "rgba(178, 132, 0, 1)",
        "color-icon-critical": "rgba(226, 44, 56, 1)",
        "color-icon-highlight": "rgba(0, 91, 211, 1)",
        "color-icon-highlight-hover": "rgba(0, 66, 153, 1)",
        "color-icon-highlight-active": "rgba(0, 46, 106, 1)",
        "color-icon-ai": "rgba(128, 81, 255, 1)",
        "color-icon-inverse": "rgba(227, 227, 227, 1)",
        "color-avatar-bg-fill": "rgba(181, 181, 181, 1)",
        "color-avatar-five-bg-fill": "rgba(253, 75, 146, 1)",
        "color-avatar-five-text-on-bg-fill": "rgba(255, 246, 248, 1)",
        "color-avatar-four-bg-fill": "rgba(81, 192, 255, 1)",
        "color-avatar-four-text-on-bg-fill": "rgba(0, 33, 51, 1)",
        "color-avatar-one-bg-fill": "rgba(197, 48, 197, 1)",
        "color-avatar-one-text-on-bg-fill": "rgba(253, 239, 253, 1)",
        "color-avatar-seven-bg-fill": "rgba(148, 116, 255, 1)",
        "color-avatar-seven-text-on-bg-fill": "rgba(248, 247, 255, 1)",
        "color-avatar-six-bg-fill": "rgba(37, 232, 43, 1)",
        "color-avatar-six-text-on-bg-fill": "rgba(3, 61, 5, 1)",
        "color-avatar-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-avatar-three-bg-fill": "rgba(44, 224, 212, 1)",
        "color-avatar-three-text-on-bg-fill": "rgba(3, 60, 57, 1)",
        "color-avatar-two-bg-fill": "rgba(82, 244, 144, 1)",
        "color-avatar-two-text-on-bg-fill": "rgba(1, 75, 64, 1)",
        "color-backdrop-bg": "rgba(0, 0, 0, 0.71)",
        "color-button-gradient-bg-fill": "linear-gradient(180deg, rgba(48, 48, 48, 0) 63.53%, rgba(255, 255, 255, 0.15) 100%)",
        "color-checkbox-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-checkbox-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-input-bg-surface": "rgba(253, 253, 253, 1)",
        "color-input-bg-surface-hover": "rgba(250, 250, 250, 1)",
        "color-input-bg-surface-active": "rgba(247, 247, 247, 1)",
        "color-input-border": "rgba(138, 138, 138, 1)",
        "color-input-border-hover": "rgba(97, 97, 97, 1)",
        "color-input-border-active": "rgba(26, 26, 26, 1)",
        "color-nav-bg": "rgba(235, 235, 235, 1)",
        "color-nav-bg-surface": "rgba(0, 0, 0, 0.02)",
        "color-nav-bg-surface-hover": "rgba(241, 241, 241, 1)",
        "color-nav-bg-surface-active": "rgba(250, 250, 250, 1)",
        "color-nav-bg-surface-selected": "rgba(250, 250, 250, 1)",
        "color-radio-button-bg-surface-disabled": "rgba(0, 0, 0, 0.08)",
        "color-radio-button-icon-disabled": "rgba(255, 255, 255, 1)",
        "color-video-thumbnail-play-button-bg-fill-hover": "rgba(0, 0, 0, 0.81)",
        "color-video-thumbnail-play-button-bg-fill": "rgba(0, 0, 0, 0.71)",
        "color-video-thumbnail-play-button-text-on-bg-fill": "rgba(255, 255, 255, 1)",
        "color-scrollbar-thumb-bg-hover": "rgba(138, 138, 138, 1)",
        "color-scrollbar-thumb-bg": "rgba(181, 181, 181, 1)"
    },
    font: {
        "font-family-sans": "'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
        "font-family-mono": "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
        "font-size-275": "0.6875rem",
        "font-size-300": "0.75rem",
        "font-size-325": "0.8125rem",
        "font-size-350": "0.875rem",
        "font-size-400": "1rem",
        "font-size-450": "1.125rem",
        "font-size-500": "1.25rem",
        "font-size-550": "1.375rem",
        "font-size-600": "1.5rem",
        "font-size-750": "1.875rem",
        "font-size-800": "2rem",
        "font-size-900": "2.25rem",
        "font-size-1000": "2.5rem",
        "font-weight-regular": "450",
        "font-weight-medium": "550",
        "font-weight-semibold": "600",
        "font-weight-bold": "650",
        "font-letter-spacing-densest": "-0.0291em",
        "font-letter-spacing-denser": "-0.0166em",
        "font-letter-spacing-dense": "-0.00833em",
        "font-letter-spacing-normal": "0rem",
        "font-line-height-300": "0.75rem",
        "font-line-height-400": "1rem",
        "font-line-height-500": "1.25rem",
        "font-line-height-600": "1.5rem",
        "font-line-height-700": "1.75rem",
        "font-line-height-800": "2rem",
        "font-line-height-1000": "2.5rem",
        "font-line-height-1200": "3rem"
    },
    height: {
        "height-0": "0rem",
        "height-025": "0.0625rem",
        "height-050": "0.125rem",
        "height-100": "0.25rem",
        "height-150": "0.375rem",
        "height-200": "0.5rem",
        "height-300": "0.75rem",
        "height-400": "1rem",
        "height-500": "1.25rem",
        "height-600": "1.5rem",
        "height-700": "1.75rem",
        "height-800": "2rem",
        "height-900": "2.25rem",
        "height-1000": "2.5rem",
        "height-1200": "3rem",
        "height-1600": "4rem",
        "height-2000": "5rem",
        "height-2400": "6rem",
        "height-2800": "7rem",
        "height-3200": "8rem"
    },
    motion: {
        "motion-duration-0": "0ms",
        "motion-duration-50": "50ms",
        "motion-duration-100": "100ms",
        "motion-duration-150": "150ms",
        "motion-duration-200": "200ms",
        "motion-duration-250": "250ms",
        "motion-duration-300": "300ms",
        "motion-duration-350": "350ms",
        "motion-duration-400": "400ms",
        "motion-duration-450": "450ms",
        "motion-duration-500": "500ms",
        "motion-duration-5000": "5000ms",
        "motion-ease": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "motion-ease-in": "cubic-bezier(0.42, 0, 1, 1)",
        "motion-ease-out": "cubic-bezier(0.19, 0.91, 0.38, 1)",
        "motion-ease-in-out": "cubic-bezier(0.42, 0, 0.58, 1)",
        "motion-linear": "cubic-bezier(0, 0, 1, 1)",
        "motion-keyframes-bounce": "{ from, 65%, 85% { transform: scale(1) } 75% { transform: scale(0.85) } 82.5% { transform: scale(1.05) } }",
        "motion-keyframes-fade-in": "{ to { opacity: 1 } }",
        "motion-keyframes-pulse": "{ from, 75% { transform: scale(0.85); opacity: 1; } to { transform: scale(2.5); opacity: 0; } }",
        "motion-keyframes-spin": "{ to { transform: rotate(1turn) } }",
        "motion-keyframes-appear-above": "{ from { transform: translateY(0.25rem); opacity: 0; } to { transform: none; opacity: 1; } }",
        "motion-keyframes-appear-below": "{ from { transform: translateY(calc(0.25rem * -1)); opacity: 0; } to { transform: none; opacity: 1; } }"
    },
    shadow: {
        "shadow-0": "none",
        "shadow-100": "0rem 0.3125rem 0.3125rem -0.15625rem rgba(0, 0, 0, 0.03), 0rem 0.1875rem 0.1875rem -0.09375rem rgba(0, 0, 0, 0.02), 0rem 0.125rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.02), 0rem 0.0625rem 0.0625rem -0.03125rem rgba(0, 0, 0, 0.03), 0rem 0.03125rem 0.03125rem 0rem rgba(0, 0, 0, 0.04), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-200": "0rem 0.5rem 0.625rem -0.3125rem rgba(0, 0, 0, 0.08), 0rem 0.3125rem 0.3125rem -0.15625rem rgba(0, 0, 0, 0.03), 0rem 0.1875rem 0.1875rem -0.09375rem rgba(0, 0, 0, 0.02), 0rem 0.125rem 0.125rem -0.0625rem rgba(0, 0, 0, 0.02), 0rem 0.0625rem 0.0625rem -0.03125rem rgba(0, 0, 0, 0.03), 0rem 0.03125rem 0.03125rem 0rem rgba(0, 0, 0, 0.04), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-300": "0rem 0.5rem 1.5rem -0.5rem rgba(0, 0, 0, 0.28), 0rem 0.5rem 1rem -0.25rem rgba(0, 0, 0, 0.05), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-400": "0rem 1.25rem 2rem -0.75rem rgba(0, 0, 0, 0.20), 0rem 0.625rem 1rem -0.375rem rgba(0, 0, 0, 0.08), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-500": "0rem 1.5rem 2.25rem -0.75rem rgba(0, 0, 0, 0.12), 0rem 1.5rem 1.5rem -0.75rem rgba(0, 0, 0, 0.08), 0rem 0.5rem 1rem -0.375rem rgba(0, 0, 0, 0.08), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.08), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.06)",
        "shadow-600": "0rem 1.5rem 3.5rem -0.75rem rgba(0, 0, 0, 0.24), 0rem 1.5rem 1.5rem -0.75rem rgba(0, 0, 0, 0.12), 0rem 0.1875rem 0.375rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.125rem 0.25rem 0rem rgba(0, 0, 0, 0.05), 0rem 0.0625rem 0.125rem 0rem rgba(0, 0, 0, 0.05), 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.07)",
        "shadow-bevel-100": "0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, -0.0625rem 0rem 0rem 0rem rgba(0, 0, 0, 0.13) inset, 0rem -0.0625rem 0rem 0rem rgba(0, 0, 0, 0.17) inset, 0rem 0.0625rem 0rem 0rem rgba(204, 204, 204, 0.5) inset",
        "shadow-inset-100": "0rem 0.0625rem 0.125rem 0rem rgba(26, 26, 26, 0.15) inset, 0rem 0.0625rem 0.0625rem 0rem rgba(26, 26, 26, 0.15) inset",
        "shadow-inset-200": "0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.20) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset, -0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.12) inset",
        "shadow-button": "0rem -0.0625rem 0rem 0rem #b5b5b5 inset, 0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.1) inset, 0rem 0.03125rem 0rem 0.09375rem #FFF inset",
        "shadow-button-hover": "0rem 0.0625rem 0rem 0rem #EBEBEB inset, -0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0.0625rem 0rem 0rem 0rem #EBEBEB inset, 0rem -0.0625rem 0rem 0rem #CCC inset",
        "shadow-button-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(26, 26, 26, 0.122) inset, 0rem 0.125rem 0.0625rem 0rem rgba(26, 26, 26, 0.2) inset",
        "shadow-button-primary": "0rem -0.0625rem 0rem 0.0625rem rgba(0, 0, 0, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(48, 48, 48, 1) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.25) inset;",
        "shadow-button-primary-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.24) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.0625rem 0rem 0rem #000 inset, 0rem -0.0625rem 0rem 0.0625rem #1A1A1A",
        "shadow-button-primary-inset": "0rem 0.1875rem 0rem 0rem rgb(0, 0, 0) inset",
        "shadow-button-primary-critical": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 11, 33, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(163, 10, 36, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(247, 128, 134, 0.64) inset",
        "shadow-button-primary-critical-hover": "0rem -0.0625rem 0rem 0.0625rem rgba(142, 11, 33, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(163, 10, 36, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(247, 128, 134, 0.44) inset",
        "shadow-button-primary-critical-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-button-primary-success": "0rem -0.0625rem 0rem 0.0625rem rgba(12, 81, 50, 0.8) inset, 0rem 0rem 0rem 0.0625rem rgba(19, 111, 69, 0.8) inset, 0rem 0.03125rem 0rem 0.09375rem rgba(255, 255, 255, 0.251) inset",
        "shadow-button-primary-success-hover": "0rem 0.0625rem 0rem 0rem rgba(255, 255, 255, 0.48) inset, 0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, -0.0625rem 0rem 0rem 0rem rgba(255, 255, 255, 0.20) inset, 0rem -0.09375rem 0rem 0rem rgba(0, 0, 0, 0.25) inset",
        "shadow-button-primary-success-inset": "-0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0.0625rem 0rem 0.0625rem 0rem rgba(0, 0, 0, 0.2) inset, 0rem 0.125rem 0rem 0rem rgba(0, 0, 0, 0.6) inset",
        "shadow-border-inset": "0rem 0rem 0rem 0.0625rem rgba(0, 0, 0, 0.08) inset"
    },
    space: {
        "space-0": "0rem",
        "space-025": "0.0625rem",
        "space-050": "0.125rem",
        "space-100": "0.25rem",
        "space-150": "0.375rem",
        "space-200": "0.5rem",
        "space-300": "0.75rem",
        "space-400": "1rem",
        "space-500": "1.25rem",
        "space-600": "1.5rem",
        "space-700": "1.75rem",
        "space-800": "2rem",
        "space-1000": "2.5rem",
        "space-1200": "3rem",
        "space-1600": "4rem",
        "space-2000": "5rem",
        "space-2400": "6rem",
        "space-2800": "7rem",
        "space-3200": "8rem",
        "space-button-group-gap": "0.5rem",
        "space-card-gap": "1rem",
        "space-card-padding": "1rem",
        "space-table-cell-padding": "0.375rem"
    },
    width: {
        "width-0": "0rem",
        "width-025": "0.0625rem",
        "width-050": "0.125rem",
        "width-100": "0.25rem",
        "width-150": "0.375rem",
        "width-200": "0.5rem",
        "width-300": "0.75rem",
        "width-400": "1rem",
        "width-500": "1.25rem",
        "width-600": "1.5rem",
        "width-700": "1.75rem",
        "width-800": "2rem",
        "width-900": "2.25rem",
        "width-1000": "2.5rem",
        "width-1200": "3rem",
        "width-1600": "4rem",
        "width-2000": "5rem",
        "width-2400": "6rem",
        "width-2800": "7rem",
        "width-3200": "8rem"
    },
    zIndex: {
        "z-index-0": "auto",
        "z-index-1": "100",
        "z-index-2": "400",
        "z-index-3": "510",
        "z-index-4": "512",
        "z-index-5": "513",
        "z-index-6": "514",
        "z-index-7": "515",
        "z-index-8": "516",
        "z-index-9": "517",
        "z-index-10": "518",
        "z-index-11": "519",
        "z-index-12": "520"
    }
}
  , qx = aZ(cZ, lZ)
  , Gx = React.createContext(null)
  , Kx = React.createContext(null);
function Xr() {
    const e = React.useContext(Gx);
    if (!e)
        throw new Error("No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function uZ() {
    const e = React.useContext(Kx);
    if (!e)
        throw new Error("No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function dZ(e) {
    const t = Xr();
    return e.children(t)
}
function Qx(e) {
    const t = typeof e;
    return e != null && (t === "object" || t === "function")
}
function G(...e) {
    return e.filter(Boolean).join(" ")
}
function $t(e, t) {
    return `${e}${t.charAt(0).toUpperCase()}${t.slice(1)}`
}
function hm(e) {
    const t = Object.entries(e).filter( ([n,i]) => i != null);
    return t.length ? Object.fromEntries(t) : void 0
}
function fa(e, t, n, i) {
    if (!i)
        return {};
    let a;
    return Qx(i) ? a = Object.fromEntries(Object.entries(i).map( ([r,s]) => [r, `var(--p-${n}-${s})`])) : a = {
        [aD[0]]: `var(--p-${n}-${i})`
    },
    Object.fromEntries(Object.entries(a).map( ([r,s]) => [`--pc-${e}-${t}-${r}`, s]))
}
function sf(e, t, n) {
    return n ? Qx(n) ? Object.fromEntries(Object.entries(n).map( ([i,a]) => [`--pc-${e}-${t}-${i}`, a])) : {
        [`--pc-${e}-${t}-${aD[0]}`]: n
    } : {}
}
var mZ = {
    themeContainer: "Polaris-ThemeProvider--themeContainer"
};
const pZ = ["light", "dark-experimental", "light-mobile", "dark-mobile-experimental"]
  , fZ = e => pZ.includes(e);
function uD(e) {
    const {as: t="div", children: n, className: i, theme: a=lu} = e
      , r = fm[a];
    return React.createElement(Kx.Provider, {
        value: a,
        children: React.createElement(Gx.Provider, {
            value: qx(a),
            children: React.createElement(t, {
                "data-portal-id": e["data-portal-id"],
                className: G(...r.map(Wx), mZ.themeContainer, i),
                children: n
            })
        })
    })
}
function ha(e, t, n) {
    return e < t ? t : e > n ? n : e
}
function $c(e, t) {
    const n = +`${e}e${t}`;
    return +`${Math.round(n)}e-${t}`
}
function dD({red: e, green: t, blue: n}) {
    return `#${HS(e)}${HS(t)}${HS(n)}`
}
function HS(e) {
    const t = e.toString(16);
    return t.length === 1 ? `0${t}` : t
}
function CGe(e) {
    return dD(Zx(e))
}
function mD(e, t) {
    const n = e / 60
      , i = 1 - Math.abs(n % 2 - 1)
      , a = t * i;
    let r = 0
      , s = 0
      , l = 0;
    return n >= 0 && n <= 1 && (r = t,
    s = a,
    l = 0),
    n >= 1 && n <= 2 && (r = a,
    s = t,
    l = 0),
    n >= 2 && n <= 3 && (r = 0,
    s = t,
    l = a),
    n >= 3 && n <= 4 && (r = 0,
    s = a,
    l = t),
    n >= 4 && n <= 5 && (r = a,
    s = 0,
    l = t),
    n >= 5 && n <= 6 && (r = t,
    s = 0,
    l = a),
    {
        red: r,
        green: s,
        blue: l
    }
}
function Zx(e) {
    const {hue: t, saturation: n, brightness: i, alpha: a=1} = e
      , r = i * n;
    let {red: s, green: l, blue: c} = mD(t, r);
    const d = i - r;
    return s += d,
    l += d,
    c += d,
    {
        red: Math.round(s * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: a
    }
}
function AGe(e) {
    const {hue: t, saturation: n, lightness: i, alpha: a=1} = e
      , r = (1 - Math.abs(2 * (i / 100) - 1)) * (n / 100);
    let {red: s, green: l, blue: c} = mD(t, r);
    const d = i / 100 - r / 2;
    return s += d,
    l += d,
    c += d,
    {
        red: Math.round(s * 255),
        green: Math.round(l * 255),
        blue: Math.round(c * 255),
        alpha: a
    }
}
function pD(e, t="b") {
    const {alpha: n=1} = e
      , i = e.red / 255
      , a = e.green / 255
      , r = e.blue / 255
      , s = Math.max(i, a, r)
      , l = Math.min(i, a, r)
      , c = s - l
      , d = (s + l) / 2;
    let p = 0;
    if (s === 0)
        p = 0;
    else if (t === "b")
        p = c / s;
    else if (t === "l") {
        const y = d > .5 ? c / (2 - s - l) : c / (s + l);
        p = isNaN(y) ? 0 : y
    }
    let f = 0;
    switch (s) {
    case i:
        f = (a - r) / c + (a < r ? 6 : 0);
        break;
    case a:
        f = (r - i) / c + 2;
        break;
    case r:
        f = (i - a) / c + 4
    }
    const v = f / 6 * 360
      , g = ha(v, 0, 360);
    return {
        hue: g ? $c(g, 2) : 0,
        saturation: $c(ha(p, 0, 1), 4),
        brightness: $c(ha(s, 0, 1), 4),
        lightness: $c(d, 4),
        alpha: $c(n, 4)
    }
}
function hZ(e) {
    const {hue: t, saturation: n, brightness: i, alpha: a=1} = pD(e, "b");
    return {
        hue: t,
        saturation: n,
        brightness: i,
        alpha: a
    }
}
function xGe(e) {
    const {hue: t, saturation: n, lightness: i, alpha: a=1} = pD(e, "l")
      , r = $c(n * 100, 2)
      , s = $c(i * 100, 2);
    return {
        hue: t,
        saturation: r,
        lightness: s,
        alpha: a
    }
}
function _Ge(e) {
    if (e.length === 4) {
        const a = (c, d) => e.slice(c, d).repeat(2)
          , r = parseInt(a(1, 2), 16)
          , s = parseInt(a(2, 3), 16)
          , l = parseInt(a(3, 4), 16);
        return {
            red: r,
            green: s,
            blue: l
        }
    }
    const t = parseInt(e.slice(1, 3), 16)
      , n = parseInt(e.slice(3, 5), 16)
      , i = parseInt(e.slice(5, 7), 16);
    return {
        red: t,
        green: n,
        blue: i
    }
}
const gm = React.createContext(!1);
function wGe(e={} as any) {
    const {defaultValue: t="", timeout: n=1500} = e
      , [i,a] = React.useState("inactive")
      , r = React.useCallback(s => {
        navigator.clipboard.writeText(typeof s == "string" ? s : t).then( () => a("copied"), () => a("failed")).catch(l => {
            throw l
        }
        )
    }
    , [t]);
    return React.useEffect( () => {
        if (i === "inactive")
            return;
        const s = setTimeout( () => a("inactive"), n);
        return () => clearTimeout(s)
    }
    , [i, n]),
    [r, i]
}
const Zl = typeof window > "u" || typeof document > "u"
  , Kr = Zl ? React.useEffect : React.useLayoutEffect;
function Si(e, t, n, i) {
    const a = React.useRef(t)
      , r = React.useRef(i);
    Kr( () => {
        a.current = t
    }
    , [t]),
    Kr( () => {
        r.current = i
    }
    , [i]),
    React.useEffect( () => {
        if (!(typeof e == "string" && n !== null))
            return;
        let s;
        if (typeof n > "u")
            s = window;
        else if ("current"in n) {
            if (n.current === null)
                return;
            s = n.current
        } else
            s = n;
        const l = r.current
          , c = d => a.current(d);
        return s.addEventListener(e, c, l),
        () => {
            s.removeEventListener(e, c, l)
        }
    }
    , [e, n])
}
function gZ(e) {
    const [t,n] = React.useState(!1)
      , i = React.useRef(null)
      , a = React.useCallback( () => {
        i.current && (clearTimeout(i.current),
        i.current = null),
        n(!0)
    }
    , [])
      , r = React.useCallback( () => {
        i.current = setTimeout( () => {
            n(!1)
        }
        , 0)
    }
    , []);
    return Si("focusin", a, e),
    Si("focusout", r, e),
    React.useEffect( () => () => {
        i.current && clearTimeout(i.current)
    }
    , []),
    t
}
function vZ(e) {
    const [t,n] = React.useState(!1)
      , i = React.useCallback( () => n(!0), [])
      , a = React.useCallback( () => n(!1), []);
    return Si("mouseenter", i, e),
    Si("mouseleave", a, e),
    t
}
const fD = {
    touch: "(hover: none) and (pointer: coarse)",
    stylus: "(hover: none) and (pointer: fine)",
    pointer: "(hover) and (pointer: coarse)",
    mouse: "(hover) and (pointer: fine)"
}
  , yZ = e => Object.prototype.hasOwnProperty.call(fD, e);
function hD(e, t={}) {
    const {defaultValue: n=!1, initializeWithValue: i=!1} = t
      , a = yZ(e) ? fD[e] : e
      , r = React.useCallback(c => Zl ? n : window.matchMedia(c).matches, [n])
      , [s,l] = React.useState( () => i ? r(a) : n);
    return Kr( () => {
        const c = window.matchMedia(a)
          , d = () => {
            l(r(a))
        }
        ;
        return d(),
        c.addListener ? c.addListener(d) : c.addEventListener("change", d),
        () => {
            c.removeListener ? c.removeListener(d) : c.removeEventListener("change", d)
        }
    }
    , [r, a]),
    s
}
function ji(e, t, n) {
    let i, a, r, s, l, c, d = 0, p = !1, f = !1, v = !0;
    const g = !t && t !== 0;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    const y = t || 0;
    typeof n == "object" && (p = !!n.leading,
    f = "maxWait"in n,
    r = f ? Math.max(Number(n.maxWait) || 0, y) : void 0,
    v = "trailing"in n ? !!n.trailing : v);
    function b(D) {
        const M = i
          , O = a;
        return i = void 0,
        a = void 0,
        d = D,
        s = e.apply(O, M),
        s
    }
    function k(D, M) {
        return g ? (cancelAnimationFrame(l),
        requestAnimationFrame(D)) : setTimeout(D, M)
    }
    function C(D) {
        if (g)
            return cancelAnimationFrame(D);
        clearTimeout(D)
    }
    function x(D) {
        return d = D,
        l = k(w, y),
        p ? b(D) : s
    }
    function A(D) {
        const M = D - c
          , O = D - d
          , z = y - M;
        return f && r ? Math.min(z, r - O) : z
    }
    function _(D) {
        const M = D - c
          , O = D - d;
        return c === void 0 || M >= y || M < 0 || f && r && O >= r
    }
    function w() {
        const D = Date.now();
        if (_(D))
            return T(D);
        l = k(w, A(D))
    }
    function T(D) {
        return l = void 0,
        v && i ? b(D) : (i = a = void 0,
        s)
    }
    function P() {
        l !== void 0 && C(l),
        d = 0,
        i = c = a = l = void 0
    }
    function I() {
        return l === void 0 ? s : T(Date.now())
    }
    function L() {
        return l !== void 0
    }
    function R(...D) {
        const M = Date.now()
          , O = _(M);
        if (i = D,
        a = this,
        c = M,
        O) {
            if (l === void 0)
                return x(c);
            if (f)
                return l = k(w, y),
                b(c)
        }
        return l === void 0 && (l = k(w, y)),
        s
    }
    return R.cancel = P,
    R.flush = I,
    R.pending = L,
    R
}
function bZ(e, t) {
    return Object.keys(e).reduce( (n, i) => (n[i] = t(i, e[i]),
    n), {})
}
function kZ(e, t) {
    return e.addListener ? (e.addListener(t),
    () => e.removeListener(t)) : (e.addEventListener("change", t),
    () => e.removeEventListener("change", t))
}
var eu;
let Yx = (eu = class {
    [k: string]: any;
    constructor(t, n) {
        te(this, "_listeners", new Set);
        te(this, "_mqlUnsubscribers", []);
        te(this, "notify", ji( () => {
            this._listeners.forEach(t => t())
        }
        , eu.DEBOUNCE_TIME, {
            trailing: !0
        }));
        te(this, "stop", () => {
            this._mqlUnsubscribers.forEach(t => t()),
            this._mqlUnsubscribers = []
        }
        );
        te(this, "subscribe", t => (this._listeners.add(t),
        () => {
            this._listeners.delete(t)
        }
        ));
        te(this, "useMediaQueryState", t => React.useSyncExternalStore(this.subscribe, () => this.state, () => this.getDefaults(t == null ? void 0 : t.defaults)));
        te(this, "useMediaQueryStateSelector", t => React.useSyncExternalStore(this.subscribe, () => t(this.state), () => t(this.getDefaults())));
        this.queries = t,
        this.options = n,
        this._state = this.getDefaults()
    }
    static createAndListen(t, n) {
        const i = new this(t,n);
        return i.listenIfClient(),
        i
    }
    get state() {
        return this._state
    }
    get listenerCount() {
        return this._listeners.size
    }
    listenIfClient() {
        if (!(Zl || window.matchMedia === void 0))
            return this._mqlUnsubscribers = Object.entries(this.queries).map( ([t,n]) => {
                const i = r => {
                    this._state = {
                        ...this.state,
                        [t]: r.matches
                    },
                    this.notify()
                }
                  , a = window.matchMedia(n);
                return this._state = {
                    ...this.state,
                    [t]: a.matches
                },
                kZ(a, i)
            }
            ),
            this.stop
    }
    getDefaults(t) {
        return bZ(this.queries, n => {
            var i;
            return typeof t == "boolean" ? t : t && typeof t[n] == "boolean" ? t[n] : (i = this.options) != null && i.defaults && typeof this.options.defaults[n] == "boolean" ? this.options.defaults[n] : !1
        }
        )
    }
}
,
te(eu, "DEBOUNCE_TIME", 40),
eu);
const SZ = {
    touch: "(hover: none) and (pointer: coarse)",
    stylus: "(hover: none) and (pointer: fine)",
    pointer: "(hover) and (pointer: coarse)",
    mouse: "(hover) and (pointer: fine)"
}
  , CZ = Yx.createAndListen(SZ, {
    defaults: {
        touch: !1,
        stylus: !1,
        pointer: !1,
        mouse: !0
    }
});
function Jx(e) {
    return CZ.useMediaQueryStateSelector(t => t[e])
}
let Qu = function(e) {
    return e.All = "all",
    e.Page = "page",
    e.Multi = "multi",
    e.Single = "single",
    e.Range = "range",
    e
}({});
function qP(e) {
    if ("id"in e)
        return e.id;
    throw new Error("Your resource does not directly contain an `id`. Pass a `resourceIDResolver` to `useIndexResourceState`")
}
function NGe(e, {selectedResources: t=[], allResourcesSelected: n=!1, resourceIDResolver: i=qP, resourceFilter: a=void 0}={
    selectedResources: [],
    allResourcesSelected: !1,
    resourceIDResolver: qP,
    resourceFilter: void 0
}) {
    const [r,s] = React.useState(t)
      , [l,c] = React.useState(n)
      , d = React.useCallback( (v, g, y, b) => {
        switch (v === Qu.All ? c(g) : l && c(!1),
        v) {
        case Qu.Single:
            s(k => g ? [...k, y] : k.filter(C => C !== y));
            break;
        case Qu.All:
        case Qu.Page:
            if (a) {
                const k = e.filter(a);
                s(g && r.length < k.length ? k.map(i) : [])
            } else
                s(g ? e.map(i) : []);
            break;
        case Qu.Multi:
            if (!y)
                break;
            s(k => {
                const C = []
                  , x = a ? e.filter(a) : e;
                for (let A = y[0]; A <= y[1]; A++)
                    if (x.includes(e[A])) {
                        const _ = i(e[A]);
                        (g && !k.includes(_) || !g && k.includes(_)) && C.push(_)
                    }
                return g ? [...k, ...C] : k.filter(A => !C.includes(A))
            }
            );
            break;
        case Qu.Range:
            if (!y)
                break;
            s(k => {
                const A = (a ? e.filter(a) : e).map(i).slice(Number(y[0]), Number(y[1]) + 1)
                  , _ = A.some(I => r.includes(I));
                return !A.every(I => r.includes(I)) && (g || _) ? [...new Set([...k, ...A]).values()] : k.filter(I => !A.includes(I))
            }
            );
            break
        }
    }
    , [l, a, r, e, i])
      , p = React.useCallback( () => {
        s([]),
        c(!1)
    }
    , [])
      , f = React.useCallback(v => {
        const y = [...r].filter(b => !v.includes(b));
        s(y),
        y.length === 0 && c(!1)
    }
    , [r]);
    return {
        selectedResources: r,
        allResourcesSelected: l,
        handleSelectionChange: d,
        clearSelection: p,
        removeSelectedResources: f
    }
}
const AZ = ["work c1cff", "work-list c8c4b", "wrench b0732", "wifi eafff", "wand 069dd", "watch 8b585", "wallet c4540", "viewport-wide 5f1fa", "viewport-tall 56db5", "viewport-narrow 82610", "viewport-short 57066", "upload da099", "unlock 60d99", "unknown-device e37fc", "undo edada", "transfer c266b", "transfer-out d0947", "transfer-internal 14b97", "transfer-in b4145", "transaction-fee-yen 44d1c", "transaction 55ae4", "transaction-fee-rupee 949ba", "transaction-fee-pound 5fd36", "transaction-fee-euro fe10b", "toggle-on 17080", "tip-jar 72231", "toggle-off bd65d", "transaction-fee-dollar 7fa1e", "thumbs-up d71b4", "thumbs-down c7fbb", "three-d-environment 27a9d", "theme-template d9b60", "theme 13d75", "theme-store 4c7ff", "theme-edit 510d4", "text a9542", "text-underline 92371", "text-with-image d110d", "text-title 39e39", "text-quote ce1d8", "text-italic 1b732", "text-grammar 2733f", "text-font a1ca4", "text-in-rows 3e5ce", "text-font-list ba8be", "text-color 9a713", "text-bold 68095", "text-block 209e5", "text-align-left 8f8f0", "text-align-right 388c2", "text-align-center 92a16", "team 07a8a", "tax 55e24", "target f0cd2", "tablet 592c6", "table 2e591", "table-masonry 8d51d", "sun 02a40", "store 235b5", "store-online 73d6a", "store-managed 7a370", "store-import 8ddc6", "stop-circle 15c03", "status a6837", "status-active 2cf16", "star-list ac478", "star-filled dcd43", "sports c4118", "sound 5629e", "sort-descending c37d8", "sort-ascending 3a8f7", "social-ad 539d3", "smiley-sad 64595", "smiley-neutral 705e0", "social-post dc0d3", "smiley-joy 7a677", "smiley-happy 9c9a9", "shopcodes 40692", "shipping-label 885e1", "slideshow 2ab5b", "shield-person a6f71", "shield-pending 39c7c", "shield-none 3ddb7", "shield-check-mark c71f4", "share a07a5", "settings ff7fd", "send 1c21b", "search 3af13", "search-resource a8c83", "search-list 50ada", "search-recent 273ff", "save bc9b5", "sandbox be59b", "rotate-right bb669", "rotate-left f3708", "reward b425a", "rocket a106f", "reset dab43", "return 62871", "replay cd081", "replace 8214d", "remove-background 06520", "refresh 791db", "referral-code dce7b", "receivables ca9bf", "redo 0cda2", "text-in-columns 1c0dc", "receipt 72ef4", "receipt-yen 384be", "receipt-rupee 50996", "receipt-refund e09c5", "receipt-paid 873a1", "receipt-euro 687b0", "receipt-pound b0df3", "receipt-dollar f2625", "question-circle 5341d", "question-circle-filled 8b992", "profile 6980e", "product-return 321ce", "product-remove 316c3", "product-reference 260ab", "product-list 767b3", "product-cost c5017", "product-unavailable 29e29", "product-add 3c61d", "print db5d9", "price-list 29ecb", "point-of-sale 5c581", "plus-circle-up b5778", "plus-circle-down 6adb0", "play 7701a", "play-circle 40967", "plan 36a68", "pin b8e8e", "profile-filled 37ed7", "phone-out e16c8", "phone-in c8749", "personalized-text 13bcb", "person-segment 0ffaf", "pin-remove 3ea0d", "person-remove 86ac4", "person-list c4b25", "person-lock 075e7", "person-exit e284a", "person-add e1356", "payout 4a8c7", "payout-yen cadf2", "payout-rupee ec14a", "payout-euro 29014", "payout-pound 8e41d", "payout-dollar 8dacd", "pause-circle bbdd7", "payment-capture bd5a6", "paste 9b115", "passkey d70c4", "paper-check c08e1", "paint-brush-flat dd443", "paint-brush-round 7c2c9", "pagination-end d2fcc", "pagination-start a843e", "page-report a32f6", "page-up 937e7", "page-remove c2fb0", "page-list 53d07", "page-heart 69c4b", "page-reference 21565", "page-down 1741c", "page-attachment 31682", "page-clock 8587e", "package f142a", "package-returned 56169", "page-add 3a3ad", "package-on-hold 02e3b", "package-fulfilled e0f70", "outgoing 82c0c", "outdent eec8d", "organization 2273f", "orders-status f37ec", "order-repeat d6dfd", "order-draft f4521", "order-first 412dc", "order-batches 8571a", "notification 3bea6", "note c4ee2", "nature 16422", "note-add 5e69d", "money a07db", "money-none b7d86", "moon cc833", "minimize 2facc", "metaobject c5037", "metaobject-list b8ec3", "metafields 5590a", "metaobject-reference caa84", "menu b417c", "menu-vertical f1d2d", "mention ab004", "menu-horizontal 54d27", "megaphone 9082c", "measurement-weight 63315", "media-receiver 59399", "measurement-weight-list b4360", "measurement-volume 6d27e", "measurement-volume-list efa86", "measurement-size-list 00438", "measurement-size ff808", "markets ea79c", "maximize 32bc0", "markets-yen e8fb4", "markets-rupee 7ce41", "markets-euro e36ec", "map 18d3d", "lock f321b", "list-numbered 4200f", "text-indent 2332b", "list-bulleted 1f5a9", "link bef77", "link-list 95daf", "location-none 42676", "layout-sidebar-right de0e7", "layout-sidebar-left 1c703", "layout-section 4276f", "layout-rows-2 bb9f3", "layout-popup 047e3", "layout-header 2133c", "layout-logo-block ae934", "layout-footer 15266", "layout-columns-3 12428", "layout-column-1 b466f", "layout-columns-2 f4e1d", "layout-buy-button d11ea", "layout-buy-button-vertical ff7b7", "layout-buy-button-horizontal 4996d", "layout-block eb414", "language-translate fa04b", "live a036a", "label-printer af3b2", "keyboard 69d39", "keyboard-hide 0d8e0", "key 4ae20", "inventory 1c853", "iq ae0a4", "inventory-updated d08c9", "incoming e57ee", "keyboard-filled c9f28", "images 6e771", "import ce9ad", "image-with-text-overlay 7ffca", "image e3468", "image-none 223bd", "image-magic cdf0f", "image-explore 7c893", "image-alt ecb5e", "identity-card e7d3d", "icons a19d1", "image-add 9f48e", "home 8b326", "hide-filled 0a7a7", "heart e78c4", "hashtag 38df4", "hashtag-list a521a", "hashtag-decimal 53a6f", "grid a38d5", "globe-lines 8d570", "globe-list 91bd2", "globe-europe 69ae3", "globe-asia cb6b2", "git-repository a3464", "git-commit bdc48", "gift-card 7a278", "git-branch f1120", "gauge afaa0", "forklift 4636d", "forms 5e731", "games b5787", "foreground 6ee39", "folder 22c6c", "folder-up a9681", "food 2b12c", "folder-remove 63f58", "folder-down 6bdb9", "folder-add 53820", "flower 2cf46", "flip-horizontal 21b5f", "flag a139a", "filter 98f35", "file-list 27b70", "file d5096", "favicon 82ba5", "eye-first e6033", "eyeglasses bf664", "eye-dropper 73b68", "eye-dropper-list 6c262", "flip-vertical 10ef5", "eye-check-mark cbc4f", "export edf30", "exchange 32b61", "exit 323d2", "envelope e7050", "eraser 07f62", "envelope-soft-pack 4a505", "enter d45b0", "email-newsletter c1e2c", "email-follow-up b3c73", "drag-handle 4abdb", "duplicate ff8f9", "drag-drop dce5c", "domain dafbd", "download ca9bf", "domain-redirect 8f6df", "domain-new 979f3", "domain-landing-page 5187b", "dock-side 04796", "dock-floating 28a7b", "dns-settings 2ff8e", "discount b288a", "discount-add 6e961", "desktop 87240", "discount-code f3dba", "delete d90e2", "database abba1", "database-connect 9d88f", "database-add 7e647", "data-table 297d2", "data-presentation b78a9", "cursor 4f297", "cursor-banner 46c96", "currency-convert 8853e", "cursor-option 0852f", "crop 297b1", "credit-card e3715", "credit-card-tap-chip 192e5", "credit-card-reader-tap 88557", "credit-card-secure 2e159", "credit-card-percent fb148", "credit-card-reader c6b1a", "credit-card-reader-chip e22f5", "credit-card-cancel cf804", "corner-square c0b19", "corner-round aac46", "corner-pill 55c9c", "contract 57a5d", "content 45fe9", "connect 35d76", "confetti afcb4", "compass 4a6c8", "compose bbf2f", "color a0c67", "color-none 62174", "collection-reference fb8b3", "code 1b83d", "collection-list f6a59", "code-add 2e3db", "collection-featured e8898", "clock-revert c79ee", "clipboard 9689e", "clipboard-check 14af3", "clipboard-checklist 46ca7", "circle 3f3dc", "circle-dashed d59e3", "chevron-right a2381", "chevron-right-circle dd560", "chevron-left ef785", "chevron-left-circle 8ffd9", "chevron-down-circle cce02", "chevron-up-circle 0f1d8", "checkbox 46332", "check-circle-filled b8c8a", "chat 86971", "chat-new 58e2a", "chat-referral 06cac", "chart-stacked cfa45", "chart-vertical d5b21", "chart-popular a5a1b", "chart-horizontal 11601", "chart-line abbdd", "chart-histogram-last a442b", "chart-histogram-growth dff8f", "chart-histogram-second-last 31093", "chart-histogram-full ef5a0", "chart-histogram-flat ee468", "chart-histogram-first 8f355", "chart-histogram-first-last e8091", "chart-funnel 8845e", "chart-cohort e9402", "channels dba03", "chart-donut 5ade3", "categories 62adc", "cash-yen eddac", "cash-pound eb192", "cash-rupee a5fe7", "cash-euro 824fd", "cash-dollar a9f47", "cart-up 40b76", "cart 823f1", "cart-sale ec8db", "cart-discount 44ae7", "catalog-product 3d1a1", "cart-down 0e838", "caret-up 4b7f5", "cart-abandoned 6111b", "caret-down 89f2a", "camera 0188e", "camera-flip b01f5", "calendar-time 73108", "calendar-list d066c", "calendar-compare c9762", "calculator 3f7a9", "button-press d5a5f", "button 90d45", "bullet 66362", "book d019e", "book-open f6656", "bug eed59", "bolt-filled 869a6", "blog cb268", "bolt 9373b", "bill 5721b", "barcode c4164", "bank 5eb9b", "bag 79c3e", "backspace ddde8", "arrows-out-horizontal acded", "arrows-in-horizontal ffc77", "automation 73ee8", "arrow-up c03df", "arrow-up-circle 24356", "arrow-right 806d4", "arrow-right-circle ad64d", "arrow-left 5e06a", "arrow-left-circle bd824", "arrow-down 2c043", "arrow-down-circle c453a", "app-extension e5930", "alert-octagon 29cc7", "alert-location cfd29", "alert-octagon-filled 73602", "alert-diamond 94e78", "airplane 655c9", "affiliate 24de4", "adjust 63782", "x-circle 042da", "x f359e", "variant c960c", "view 5d254", "star b093f", "sort b9331", "select 61998", "product 31265", "plus 662d6", "plus-circle db5e2", "phone 72e66", "person 59183", "payment 668f2", "page bcee2", "order 61df9", "order-fulfilled c884b", "order-unfulfilled 73550", "mobile 44638", "minus-circle 48429", "minus c3862", "microphone bf5c1", "merge 7593c", "location c7d02", "lightbulb 984bc", "language b844c", "incomplete 04bea", "info 099f6", "in-progress 4716e", "incentive 35365", "hide 10aef", "globe d7233", "external e00fd", "enabled 89dea", "email 2b70d", "edit 08726", "disabled b359e", "delivery 6331b", "collection b7a05", "clock 1be62", "chevron-up 7d8ec", "chevron-down 07fd7", "check 6c790", "check-circle 83b1c", "calendar 9b898", "calendar-check 076e5", "blank 85141", "attachment b28e5", "arrow-up-right 88125", "apps 88a3e", "archive 7fdad", "alert-triangle 43ba7", "alert-circle d6e61", "alert-bubble e92ba"]
  , gD = {};
for (let e of AZ) {
    const [t,n] = e.split(" ");
    gD[t] = "https://cdn.shopify.com/shopifycloud/admin-ui-foundations/icons/" + n + ".svg"
}
const xZ = ["work-filled ee18f", "wallet-filled 19796", "text-in-rows-filled 9d41f", "text-ai c0336", "tax-filled 1a595", "target-filled 772ff", "sidekick bd5fa", "store-filled 664fd", "shopify-ql 91bd0", "shopify-inbox 940a1", "shipping-label-filled feb25", "settings-filled d84d8", "receipt-yen-filled 1c750", "receipt-rupee-filled 35f32", "receipt-euro-filled 64bb1", "receipt-dollar-filled e229e", "receipt-pound-filled f6866", "product-filled 5d748", "price-list-filled fb65c", "pin-filled 46aa2", "plan-filled 23549", "person-lock-filled 8cac1", "person-filled 7a8f8", "payment-filled bb8c8", "passkey-filled 67d95", "page-clock-filled 88fda", "package-filled c96cd", "organization-filled a0336", "order-filled b7c04", "notification-filled ba801", "order-draft-filled bf9b5", "money-filled f076f", "metaobject-filled 8e2ac", "metafields-filled d6717", "megaphone-filled e6cc1", "markets-yen-filled 2b5e7", "markets-rupee-filled 594ec", "markets-filled a9dcf", "markets-euro-filled e0b3e", "logo-youtube 05c5a", "logo-x 745af", "logo-whatsapp 5af8f", "logo-weibo 5f21c", "logo-wechat 1d98f", "logo-vimeo 62ad8", "logo-twitch 129e3", "logo-tumblr fb02b", "logo-tiktok 18d95", "logo-threads cb34e", "logo-spotify bc249", "logo-snapchat b39a4", "logo-shop 343d6", "logo-reddit fff82", "logo-pinterest a243e", "logo-meta 388b0", "logo-linkedin f77d0", "logo-line baee0", "logo-instagram ed4fa", "logo-kakao-talk faaf0", "logo-hydrogen 19d91", "logo-google 9f296", "logo-flow ec79b", "logo-facebook 78cdf", "logo-discord 9dcbc", "logo-apple-tap-to-pay 8394e", "lock-filled 03f70", "location-filled 89257", "live-filled e412e", "legacy-external-small 2fcfd", "legacy-check-small 9880d", "list-bulleted-filled 3abc5", "layout-block-ai a0477", "legacy-x-small 6b09a", "language-filled 54e92", "inventory-filled b7730", "identity-card-filled 799d8", "home-filled 55574", "globe-filled 270d9", "icons-filled 7f7fd", "globe-europe-filled 77adc", "globe-asia-filled 1eafe", "gift-card-filled 09f34", "flower-filled 194be", "file-filled ba892", "domain-filled eeeb1", "discount-filled 7c8e2", "cursor-filled 62a6e", "delivery-filled 76a86", "content-filled 6938d", "contract-filled 0d001", "collection-filled c2e89", "clipboard-check-filled 6af70", "chart-vertical-filled 75904", "cash-dollar-filled 102f4", "cart-filled f2897", "cart-down-filled e8d71", "cart-abandoned-filled ec50b", "caret-right-small 093bd", "caret-left-small 7fc91", "blog-filled 98f1a", "blank-filled 1b7eb", "bill-filled 0198f", "bank-filled 6627f", "automation-filled 6a3c9", "attachment-filled ad275", "arrows-out-horizontal-filled 56cf3", "apps-filled 617c5", "magic 66af0"]
  , vD = {};
for (let e of xZ) {
    const [t,n] = e.split(" ");
    vD[t] = "https://cdn.shopify.com/shopifycloud/admin-ui-foundations/internal-only/" + n + ".svg"
}
const _Z = [...Object.keys(vD), ...Object.keys(gD)];






const yD = Yx.createAndListen(wZ(Bf.breakpoints))
  , Wn = yD.useMediaQueryState
  , TGe = yD.useMediaQueryStateSelector;
function wZ(e) {
    const t = Object.entries(nZ(e));
    return Object.fromEntries(t.flatMap( ([n,i]) => Object.entries(i).map( ([a,r]) => [`${n.split("-")[1]}${NZ(a)}`, r])))
}
function NZ(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
}
function bD(e, t=0) {
    const [n,i] = React.useState(!1);
    return React.useImperativeHandle(e, () => ({
        onAction: () => {
            n || (i(!0),
            setTimeout( () => {
                i(!1)
            }
            , t))
        }
    })),
    n
}
const kD = React.createContext(null);
function TZ({children: e}) {
    const t = React.useRef(null)
      , n = React.useCallback(r => {
        t.current = r
    }
    , [])
      , i = React.useCallback( () => {
        t.current = null
    }
    , [])
      , a = React.useMemo( () => ({
        setPopoverActivator: n,
        clearPopoverActivator: i,
        popoverActivatorRef: t
    }), [n, i, t]);
    return React.createElement(kD.Provider, {
        value: a,
        children: e
    })
}
function SD() {
    const e = React.useContext(kD);
    if (!e)
        throw new Error("useModalFocusManager must be used within a ModalFocusManagerProvider");
    return e
}
let lf = class CD {
    [k: string]: any;
    static get zero() {
        return new CD
    }
    constructor({top: t=0, left: n=0, width: i=0, height: a=0}={}) {
        this.top = t,
        this.left = n,
        this.width = i,
        this.height = a
    }
    get center() {
        return {
            x: this.left + this.width / 2,
            y: this.top + this.height / 2
        }
    }
}
;
function Yo(e) {
    if (!(e instanceof Element))
        return new lf({
            width: window.innerWidth,
            height: window.innerHeight
        });
    const t = e.getBoundingClientRect();
    return new lf({
        top: t.top,
        left: t.left,
        width: t.width,
        height: t.height
    })
}
const PZ = {
    navigationBarCollapsed: "(max-width: 767.95px)",
    stackedContent: "(max-width: 1039.95px)"
}
  , AD = Yx.createAndListen(PZ);
function IZ() {
    return AD.useMediaQueryStateSelector(e => e.navigationBarCollapsed)
}
function LZ() {
    return AD.state.stackedContent
}
const kg = 1e3 / 60;
let xD = class {
    [k: string]: any;
    constructor(t) {
        te(this, "stickyItems", []);
        te(this, "stuckItems", []);
        te(this, "container", null);
        te(this, "topBarOffset", 0);
        te(this, "handleResize", ji( () => {
            this.manageStickyItems()
        }
        , kg, {
            leading: !0,
            trailing: !0,
            maxWait: kg
        }));
        te(this, "handleScroll", ji( () => {
            this.manageStickyItems()
        }
        , kg, {
            leading: !0,
            trailing: !0,
            maxWait: kg
        }));
        t && this.setContainer(t)
    }
    registerStickyItem(t) {
        this.stickyItems.push(t)
    }
    unregisterStickyItem(t) {
        const n = this.stickyItems.findIndex( ({stickyNode: i}) => t === i);
        this.stickyItems.splice(n, 1)
    }
    getStickyItem(t) {
        return this.stickyItems.find( ({stickyNode: n}) => t === n)
    }
    setContainer(t) {
        this.container = t,
        _D(t) && this.setTopBarOffset(t),
        this.container.addEventListener("scroll", this.handleScroll),
        window.addEventListener("resize", this.handleResize),
        this.manageStickyItems()
    }
    removeScrollListener() {
        this.container && (this.container.removeEventListener("scroll", this.handleScroll),
        window.removeEventListener("resize", this.handleResize))
    }
    manageStickyItems() {
        if (this.stickyItems.length <= 0)
            return;
        const t = this.container ? FZ(this.container) : 0
          , n = Yo(this.container).top + this.topBarOffset;
        this.stickyItems.forEach(i => {
            const {handlePositioning: a} = i
              , {sticky: r, top: s, left: l, width: c} = this.evaluateStickyItem(i, t, n);
            this.updateStuckItems(i, r),
            a(r, s, l, c)
        }
        )
    }
    evaluateStickyItem(t, n, i) {
        var A;
        const {stickyNode: a, placeHolderNode: r, boundingElement: s, offset: l, disableWhenStacked: c} = t
          , d = r.getBoundingClientRect()
          , p = a.getBoundingClientRect()
          , f = c && LZ();
        if (d.width === 0 || p.width === 0 || p.height === 0 || f)
            return {
                sticky: !1,
                top: 0,
                left: 0,
                width: "auto"
            };
        const v = l ? this.getOffset(a) + parseInt(Bf.space["space-500"], 10) : this.getOffset(a)
          , g = n + v
          , y = r.getBoundingClientRect().top - i + n
          , b = i + v
          , k = r.getBoundingClientRect().width
          , C = r.getBoundingClientRect().left;
        let x;
        if (s == null)
            x = g >= y;
        else {
            const _ = a.getBoundingClientRect().height || ((A = a.firstElementChild) == null ? void 0 : A.getBoundingClientRect().height) || 0
              , w = s.getBoundingClientRect().bottom - _ + n - i;
            x = g >= y && g < w
        }
        return {
            sticky: x,
            top: b,
            left: C,
            width: k
        }
    }
    updateStuckItems(t, n) {
        const {stickyNode: i} = t;
        n && !this.isNodeStuck(i) ? this.addStuckItem(t) : !n && this.isNodeStuck(i) && this.removeStuckItem(t)
    }
    addStuckItem(t) {
        this.stuckItems.push(t)
    }
    removeStuckItem(t) {
        const {stickyNode: n} = t
          , i = this.stuckItems.findIndex( ({stickyNode: a}) => n === a);
        this.stuckItems.splice(i, 1)
    }
    getOffset(t) {
        if (this.stuckItems.length === 0)
            return 0;
        let n = 0
          , i = 0;
        const a = this.stuckItems.length
          , r = Yo(t);
        for (; i < a; ) {
            const s = this.stuckItems[i].stickyNode;
            if (s !== t) {
                const l = Yo(s);
                EZ(r, l) || (n += Yo(s).height)
            } else
                break;
            i++
        }
        return n
    }
    isNodeStuck(t) {
        return this.stuckItems.findIndex( ({stickyNode: i}) => t === i) >= 0
    }
    setTopBarOffset(t) {
        const n = t.querySelector(`:not(${Ky.selector}) ${$x.selector}`);
        this.topBarOffset = n ? n.clientHeight : 0
    }
}
;
function _D(e) {
    return e === document
}
function FZ(e) {
    return _D(e) ? document.body.scrollTop || document.documentElement.scrollTop : e.scrollTop
}
function EZ(e, t) {
    const n = e.left
      , i = e.left + e.width
      , a = t.left;
    return t.left + t.width < n || i < a
}
const GP = "data-lock-scrolling"
  , KP = "data-lock-scrolling-hidden"
  , QP = "data-lock-scrolling-wrapper";
let Sg = 0;
function MZ() {
    const {body: e} = document;
    return e.scrollHeight > e.clientHeight
}
class RZ {
    [k: string]: any;
    constructor() {
        te(this, "scrollLocks", 0);
        te(this, "locked", !1)
    }
    registerScrollLock() {
        this.scrollLocks += 1,
        this.handleScrollLocking()
    }
    unregisterScrollLock() {
        this.scrollLocks -= 1,
        this.handleScrollLocking()
    }
    handleScrollLocking() {
        if (Zl || !document || !(document != null && document.body))
            return;
        const {scrollLocks: t} = this
          , {body: n} = document
          , i = n.firstElementChild;
        t === 0 ? (n.removeAttribute(GP),
        n.removeAttribute(KP),
        i && i.removeAttribute(QP),
        window.scroll(0, Sg),
        this.locked = !1) : t > 0 && !this.locked && (Sg = window.pageYOffset,
        n.setAttribute(GP, ""),
        MZ() || n.setAttribute(KP, ""),
        i && (i.setAttribute(QP, ""),
        i.scrollTop = Sg),
        this.locked = !0)
    }
    resetScrollPosition() {
        Sg = 0
    }
}
const ZP = /\[(.*?)\]|(\w+)/g;
function YP(e, t, n) {
    if (e == null)
        return;
    const i = Array.isArray(t) ? t : jZ(t);
    let a = e;
    for (let r = 0; r < i.length; r++) {
        const s = a[i[r]];
        if (s === void 0)
            return n;
        a = s
    }
    return a
}
function jZ(e) {
    const t = [];
    let n;
    for (ZP.lastIndex = 0; n = ZP.exec(e); ) {
        const [,i,a] = n;
        t.push(i || a)
    }
    return t
}
function DZ(...e) {
    let t = {};
    for (const n of e)
        t = wD(t, n);
    return t
}
function wD(e, t) {
    const n = Array.isArray(e) ? [...e] : {
        ...e
    };
    for (const i in t)
        if (Object.prototype.hasOwnProperty.call(t, i))
            JP(t[i]) && JP(n[i]) ? n[i] = wD(n[i], t[i]) : n[i] = t[i];
        else
            continue;
    return n
}
function JP(e) {
    return e !== null && typeof e == "object"
}
const OZ = /{([^}]*)}/g;
let s0 = class {
    [k: string]: any;
    constructor(t) {
        te(this, "translation", {});
        this.translation = Array.isArray(t) ? DZ(...t.slice().reverse()) : t
    }
    translate(t, n) {
        const i = YP(this.translation, t, "");
        return i ? n ? i.replace(OZ, a => {
            const r = a.substring(1, a.length - 1);
            if (n[r] === void 0) {
                const s = JSON.stringify(n);
                throw new Error(`Error in translation for key '${t}'. No replacement found for key '${r}'. The following replacements were passed: '${s}'`)
            }
            return n[r]
        }
        ) : i : ""
    }
    translationKeyExists(t) {
        return !!YP(this.translation, t)
    }
}
;
const Xx = React.createContext(void 0)
  , ND = React.createContext(void 0)
  , e_ = React.createContext(void 0)
  , t_ = React.createContext(void 0)
  , TD = React.createContext(void 0)
  , PD = React.createContext(void 0)
  , BZ = function({children: t}) {
    const n = IZ()
      , i = React.useMemo( () => ({
        isNavigationCollapsed: n
    }), [n]);
    return React.createElement(PD.Provider, {
        value: i,
        children: t
    })
};
function vm() {
    const [e,t] = React.useState(!1);
    return React.useEffect( () => {
        t(!0)
    }
    , []),
    e
}
const n_ = React.createContext(void 0);
function zZ(e, t) {
    return React.createElement("div", {
        id: "PolarisPortalsContainer",
        ref: t
    })
}
const VZ = React.forwardRef(zZ);
function UZ({children: e, container: t}) {
    const n = vm()
      , i = React.useRef(null)
      , a = React.useMemo( () => t ? {
        container: t
    } : n ? {
        container: i.current
    } : {
        container: null
    }, [t, n]);
    return React.createElement(n_.Provider, {
        value: a,
        children: [e, t ? null : React.createElement(VZ, {
            ref: i
        })]
    })
}
const ID = React.createContext(void 0);
function $Z({children: e}) {
    const [t,n] = React.useState([])
      , i = React.useCallback(s => {
        n(l => [...l, s])
    }
    , [])
      , a = React.useCallback(s => {
        let l = !0;
        return n(c => {
            const d = [...c]
              , p = d.indexOf(s);
            return p === -1 ? l = !1 : d.splice(p, 1),
            d
        }
        ),
        l
    }
    , [])
      , r = React.useMemo( () => ({
        trapFocusList: t,
        add: i,
        remove: a
    }), [i, t, a]);
    return React.createElement(ID.Provider, {
        value: r,
        children: e
    })
}
const LD = React.createContext(void 0)
  , HZ = {
    tooltip: 0,
    hovercard: 0
};
function WZ({children: e}) {
    const [t,n] = React.useState(HZ)
      , i = React.useCallback(s => {
        n(l => ({
            ...l,
            [s]: l[s] + 1
        }))
    }
    , [])
      , a = React.useCallback(s => {
        n(l => ({
            ...l,
            [s]: l[s] - 1
        }))
    }
    , [])
      , r = React.useMemo( () => ({
        presenceList: Object.entries(t).reduce( (s, l) => {
            const [c,d] = l;
            return {
                ...s,
                [c]: d >= 1
            }
        }
        , {}),
        presenceCounter: t,
        addPresence: i,
        removePresence: a
    }), [i, a, t]);
    return React.createElement(LD.Provider, {
        value: r,
        children: e
    })
}
const FD = React.createContext(void 0);
function qZ({children: e}) {
    const [t,n] = React.useState(!1)
      , i = React.useMemo( () => ({
        scaledBack: t,
        setScaledBack: n
    }), [t, n]);
    return React.createElement(FD.Provider, {
        value: i,
        children: e
    })
}
const GZ = 20
  , Sv = 30
  , KZ = Sv + 10;
function QZ() {
    var a;
    const e = document.createElement("div");
    e.setAttribute("style", `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${Sv}px; height:${Sv}px;`);
    const t = document.createElement("div");
    t.setAttribute("style", `width:100%; height: ${KZ}; overflow:scroll; scrollbar-width: thin;`),
    e.appendChild(t),
    document.body.appendChild(e);
    const n = Sv - (((a = e.firstElementChild) == null ? void 0 : a.clientWidth) ?? 0)
      , i = Math.min(n, GZ);
    document.documentElement.style.setProperty("--pc-app-provider-scrollbar-width", `${i}px`),
    document.body.removeChild(e)
}
const ZZ = [...new Set(lD.flatMap(e => fm[e]))];
let Qy = class extends React.Component {
    [k: string]: any;
    constructor(n) {
        super(n);
        te(this, "setBodyStyles", () => {
            document.body.style.backgroundColor = "var(--p-color-bg)",
            document.body.style.color = "var(--p-color-text)"
        }
        );
        te(this, "setRootAttributes", () => {
            const n = this.getThemeName()
              , i = fm[n];
            ZZ.forEach(a => {
                document.documentElement.classList.toggle(Wx(a), i == null ? void 0 : i.includes(a))
            }
            )
        }
        );
        te(this, "getThemeName", () => this.props.theme ?? lu);
        this.stickyManager = new xD,
        this.scrollLockManager = new RZ;
        const {i18n: i, linkComponent: a} = this.props;
        this.state = {
            link: a,
            intl: new s0(i)
        }
    }
    componentDidMount() {
        if (document != null) {
            this.stickyManager.setContainer(document),
            this.setBodyStyles(),
            this.setRootAttributes();
            const n = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome") && (navigator.userAgent.includes("Version/16.1") || navigator.userAgent.includes("Version/16.2") || navigator.userAgent.includes("Version/16.3"))
              , i = navigator.userAgent.includes("Shopify Mobile/iOS") && (navigator.userAgent.includes("OS 16_1") || navigator.userAgent.includes("OS 16_2") || navigator.userAgent.includes("OS 16_3"));
            (n || i) && document.documentElement.classList.add("Polaris-Safari-16-Font-Optical-Sizing-Patch")
        }
        QZ()
    }
    componentDidUpdate({i18n: n, linkComponent: i}) {
        const {i18n: a, linkComponent: r} = this.props;
        this.setRootAttributes(),
        !(a === n && r === i) && this.setState({
            link: r,
            intl: new s0(a)
        })
    }
    render() {
        const {children: n, features: i={}} = this.props
          , a = this.getThemeName()
          , {intl: r, link: s} = this.state;
        return React.createElement(Kx.Provider, {
            value: a,
            children: React.createElement(Gx.Provider, {
                value: qx(a),
                children: React.createElement(Xx.Provider, {
                    value: i,
                    children: React.createElement(ND.Provider, {
                        value: r,
                        children: React.createElement(e_.Provider, {
                            value: this.scrollLockManager,
                            children: React.createElement(t_.Provider, {
                                value: this.stickyManager,
                                children: React.createElement(TD.Provider, {
                                    value: s,
                                    children: React.createElement(BZ, {
                                        children: React.createElement(UZ, {
                                            children: React.createElement($Z, {
                                                children: React.createElement(TZ, {
                                                    children: React.createElement(WZ, {
                                                        children: React.createElement(qZ, {
                                                            children: n
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
;
function YZ(e) {
    const {top: t, left: n, bottom: i, right: a} = e.getBoundingClientRect();
    return t >= 0 && a <= window.innerWidth && i <= window.innerHeight && n >= 0
}
const l0 = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not(h1, h2, h3, h4, h5, h6)'
  , iy = 'a,frame,iframe,input:not([type=hidden]):not(:disabled),select:not(:disabled),textarea:not(:disabled),button:not([aria-disabled="true"]):not([tabindex="-1"]):not(:disabled),*[tabindex]:not([tabindex="-1"])'
  , JZ = 'a[role="menuitem"],frame[role="menuitem"],iframe[role="menuitem"],input[role="menuitem"]:not([type=hidden]):not(:disabled),select[role="menuitem"]:not(:disabled),textarea[role="menuitem"]:not(:disabled),button[role="menuitem"]:not(:disabled),*[tabindex]:not([tabindex="-1"])'
  , cu = ({currentTarget: e}) => e.blur();
function XZ(e, t) {
    const n = [...document.querySelectorAll(l0)]
      , i = n.indexOf(e) + 1
      , a = n.slice(i);
    for (const r of a)
        if (YZ(r) && (!t || t && t(r)))
            return r;
    return null
}
function i_(e, t=!0) {
    return !t && Zy(e, l0) ? e : e.querySelector(l0)
}
function Ss(e) {
    const t = "a,button,frame,iframe,input:not([type=hidden]),select,textarea,*[tabindex]";
    return Zy(e, t) ? e : e.querySelector(t)
}
function ra(e, t=!0) {
    var n;
    (n = i_(e, t)) == null || n.focus()
}
function XP(e, t) {
    const n = XZ(e, t);
    return n && n instanceof HTMLElement ? (n.focus(),
    !0) : !1
}
function a_(e, t=!0) {
    return !t && Zy(e, iy) ? e : e.querySelector(iy)
}
function eY(e, t=!0) {
    const n = a_(e, t);
    return n ? (n.focus(),
    !0) : !1
}
function ED(e, t=!0) {
    if (!t && Zy(e, iy))
        return e;
    const n = e.querySelectorAll(iy);
    return n[n.length - 1]
}
function tY(e, t=!0) {
    const n = ED(e, t);
    return n ? (n.focus(),
    !0) : !1
}
function nY(e, t) {
    const n = MD(e)
      , i = RD(n, t);
    n.length !== 0 && (i === -1 ? n[0].focus() : n[(i - 1 + n.length) % n.length].focus())
}
function iY(e, t) {
    const n = MD(e)
      , i = RD(n, t);
    n.length !== 0 && (i === -1 ? n[0].focus() : n[(i + 1) % n.length].focus())
}
function MD(e) {
    return e.querySelectorAll(JZ)
}
function RD(e, t) {
    let n = 0;
    for (const i of e) {
        if (i === t)
            break;
        n++
    }
    return n === e.length ? -1 : n
}
function Zy(e, t) {
    if (e.matches)
        return e.matches(t);
    const n = (e.ownerDocument || document).querySelectorAll(t);
    let i = n.length;
    for (; --i >= 0 && n.item(i) !== e; )
        return i > -1
}
var _i = {
    Button: "Polaris-Button",
    disabled: "Polaris-Button--disabled",
    pressed: "Polaris-Button--pressed",
    variantPrimary: "Polaris-Button--variantPrimary",
    variantSecondary: "Polaris-Button--variantSecondary",
    variantTertiary: "Polaris-Button--variantTertiary",
    variantPlain: "Polaris-Button--variantPlain",
    removeUnderline: "Polaris-Button--removeUnderline",
    variantMonochromePlain: "Polaris-Button--variantMonochromePlain",
    toneSuccess: "Polaris-Button--toneSuccess",
    toneCritical: "Polaris-Button--toneCritical",
    toneAi: "Polaris-Button--toneAi",
    sizeMicro: "Polaris-Button--sizeMicro",
    sizeSlim: "Polaris-Button--sizeSlim",
    sizeMedium: "Polaris-Button--sizeMedium",
    sizeLarge: "Polaris-Button--sizeLarge",
    textAlignCenter: "Polaris-Button--textAlignCenter",
    textAlignStart: "Polaris-Button--textAlignStart",
    textAlignLeft: "Polaris-Button--textAlignLeft",
    textAlignEnd: "Polaris-Button--textAlignEnd",
    textAlignRight: "Polaris-Button--textAlignRight",
    fullWidth: "Polaris-Button--fullWidth",
    iconOnly: "Polaris-Button--iconOnly",
    iconWithText: "Polaris-Button--iconWithText",
    disclosure: "Polaris-Button--disclosure",
    loading: "Polaris-Button--loading",
    pressable: "Polaris-Button--pressable",
    hidden: "Polaris-Button--hidden",
    Icon: "Polaris-Button__Icon",
    DisclosureIcon: "Polaris-Button__DisclosureIcon",
    Spinner: "Polaris-Button__Spinner"
};
function jD(e, t, {slots: n=[]}={}) {
    const i = new Set(["ref", "children", ...n])
      , a = e.forwardRef( (r, s) => {
        const l = e.useRef({})
          , c = e.useRef();
        e.useLayoutEffect( () => {
            if (!c.current)
                return;
            const f = c.current
              , v = l.current;
            for (const [g,y] of Object.entries(r)) {
                if (i.has(g))
                    continue;
                const b = v[g];
                y !== b && tI(f, g, y, b)
            }
            for (const [g,y] of Object.entries(v))
                i.has(g) || Object.prototype.hasOwnProperty.call(r, g) || y !== void 0 && tI(f, g, null, y);
            l.current = r
        }
        , [r]);
        const d = e.useCallback(f => {
            c.current = f,
            s && (typeof s == "function" ? s(f) : s.current = f)
        }
        , [s])
          , p = [...n.map(f => r[f] ? e.createElement("div", {
            slot: rY(f),
            key: f.toString(),
            style: {
                display: "contents"
            }
        }, r[f]) : null), ...e.Children.toArray(r.children)];
        return e.createElement(t, {
            _reactWrapped: !0,
            ref: d
        }, p)
    }
    );
    return a.displayName = t.replace(/(?:^[a-z]+-|-)([a-z])/g, (r, s) => s.toUpperCase()),
    a
}
const eI = new WeakMap;
function tI(e, t, n, i) {
    const a = t.toLowerCase();
    if (t.startsWith("on")) {
        if (!aY(n))
            return;
        const r = a.slice(2);
        if (!i && n) {
            const s = l => {
                n(l)
            }
            ;
            eI.set(n, s),
            e.addEventListener(r, s)
        } else if (!n && i) {
            const s = eI.get(i);
            s && e.removeEventListener(r, s)
        }
    } else
        t in e ? e[t] = n : n == null ? e.removeAttribute(t) : e.setAttribute(t, n)
}
function aY(e) {
    return !!(e && typeof e == "function")
}
function rY(e) {
    return e.replace(/([a-z]|\d+)([A-Z]|\d+)/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase()
}
function Tt(e, t, n, i, a, r) {
    function s(C) {
        if (C !== void 0 && typeof C != "function")
            throw new TypeError("Function expected");
        return C
    }
    for (var l = i.kind, c = l === "getter" ? "get" : l === "setter" ? "set" : "value", d = !t && e ? i.static ? e : e.prototype : null, p = t || (d ? Object.getOwnPropertyDescriptor(d, i.name) : {}), f, v = !1, g = n.length - 1; g >= 0; g--) {
        var y = {};
        for (var b in i)
            y[b] = b === "access" ? {} : i[b];
        for (var b in i.access)
            y.access[b] = i.access[b];
        y.addInitializer = function(C) {
            if (v)
                throw new TypeError("Cannot add initializers after decoration has completed");
            r.push(s(C || null))
        }
        ;
        var k = (0,
        n[g])(l === "accessor" ? {
            get: p.get,
            set: p.set
        } : p[c], y);
        if (l === "accessor") {
            if (k === void 0)
                continue;
            if (k === null || typeof k != "object")
                throw new TypeError("Object expected");
            (f = s(k.get)) && (p.get = f),
            (f = s(k.set)) && (p.set = f),
            (f = s(k.init)) && a.unshift(f)
        } else
            (f = s(k)) && (l === "field" ? a.unshift(f) : p[c] = f)
    }
    d && Object.defineProperty(d, i.name, p),
    v = !0
}
function je(e, t, n) {
    for (var i = arguments.length > 2, a = 0; a < t.length; a++)
        n = i ? t[a].call(e, n) : t[a].call(e);
    return i ? n : void 0
}
var Yy, $n, DD, Hc, nI, OD, BD, zD, r_, c0, u0, cf = {}, VD = [], oY = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, Jy = Array.isArray;
function js(e, t) {
    for (var n in t)
        e[n] = t[n];
    return e
}
function o_(e) {
    e && e.parentNode && e.parentNode.removeChild(e)
}
function Kn(e, t, n) {
    var i, a, r, s = {};
    for (r in t)
        r == "key" ? i = t[r] : r == "ref" ? a = t[r] : s[r] = t[r];
    if (arguments.length > 2 && (s.children = arguments.length > 3 ? Yy.call(arguments, 2) : n),
    typeof e == "function" && e.defaultProps != null)
        for (r in e.defaultProps)
            s[r] == null && (s[r] = e.defaultProps[r]);
    return Cv(e, s, i, a, null)
}
function Cv(e, t, n, i, a) {
    var r = {
        type: e,
        props: t,
        key: n,
        ref: i,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __c: null,
        constructor: void 0,
        __v: a ?? ++DD,
        __i: -1,
        __u: 0
    };
    return a == null && $n.vnode != null && $n.vnode(r),
    r
}
function sc(e) {
    return e.children
}
function Av(e, t) {
    this.props = e,
    this.context = t
}
function Wd(e, t) {
    if (t == null)
        return e.__ ? Wd(e.__, e.__i + 1) : null;
    for (var n; t < e.__k.length; t++)
        if ((n = e.__k[t]) != null && n.__e != null)
            return n.__e;
    return typeof e.type == "function" ? Wd(e) : null
}
function UD(e) {
    var t, n;
    if ((e = e.__) != null && e.__c != null) {
        for (e.__e = e.__c.base = null,
        t = 0; t < e.__k.length; t++)
            if ((n = e.__k[t]) != null && n.__e != null) {
                e.__e = e.__c.base = n.__e;
                break
            }
        return UD(e)
    }
}
function iI(e) {
    (!e.__d && (e.__d = !0) && Hc.push(e) && !ay.__r++ || nI != $n.debounceRendering) && ((nI = $n.debounceRendering) || OD)(ay)
}
function ay() {
    for (var e, t, n, i, a, r, s, l = 1; Hc.length; )
        Hc.length > l && Hc.sort(BD),
        e = Hc.shift(),
        l = Hc.length,
        e.__d && (n = void 0,
        a = (i = (t = e).__v).__e,
        r = [],
        s = [],
        t.__P && ((n = js({}, i)).__v = i.__v + 1,
        $n.vnode && $n.vnode(n),
        s_(t.__P, n, i, t.__n, t.__P.namespaceURI, 32 & i.__u ? [a] : null, r, a ?? Wd(i), !!(32 & i.__u), s),
        n.__v = i.__v,
        n.__.__k[n.__i] = n,
        WD(r, n, s),
        n.__e != a && UD(n)));
    ay.__r = 0
}
function $D(e, t, n, i, a, r, s, l, c, d, p) {
    var f, v, g, y, b, k, C = i && i.__k || VD, x = t.length;
    for (c = sY(n, t, C, c, x),
    f = 0; f < x; f++)
        (g = n.__k[f]) != null && (v = g.__i == -1 ? cf : C[g.__i] || cf,
        g.__i = f,
        k = s_(e, g, v, a, r, s, l, c, d, p),
        y = g.__e,
        g.ref && v.ref != g.ref && (v.ref && l_(v.ref, null, g),
        p.push(g.ref, g.__c || y, g)),
        b == null && y != null && (b = y),
        4 & g.__u || v.__k === g.__k ? c = HD(g, c, e) : typeof g.type == "function" && k !== void 0 ? c = k : y && (c = y.nextSibling),
        g.__u &= -7);
    return n.__e = b,
    c
}
function sY(e, t, n, i, a) {
    var r, s, l, c, d, p = n.length, f = p, v = 0;
    for (e.__k = new Array(a),
    r = 0; r < a; r++)
        (s = t[r]) != null && typeof s != "boolean" && typeof s != "function" ? (c = r + v,
        (s = e.__k[r] = typeof s == "string" || typeof s == "number" || typeof s == "bigint" || s.constructor == String ? Cv(null, s, null, null, null) : Jy(s) ? Cv(sc, {
            children: s
        }, null, null, null) : s.constructor == null && s.__b > 0 ? Cv(s.type, s.props, s.key, s.ref ? s.ref : null, s.__v) : s).__ = e,
        s.__b = e.__b + 1,
        l = null,
        (d = s.__i = lY(s, n, c, f)) != -1 && (f--,
        (l = n[d]) && (l.__u |= 2)),
        l == null || l.__v == null ? (d == -1 && (a > p ? v-- : a < p && v++),
        typeof s.type != "function" && (s.__u |= 4)) : d != c && (d == c - 1 ? v-- : d == c + 1 ? v++ : (d > c ? v-- : v++,
        s.__u |= 4))) : e.__k[r] = null;
    if (f)
        for (r = 0; r < p; r++)
            (l = n[r]) != null && (2 & l.__u) == 0 && (l.__e == i && (i = Wd(l)),
            GD(l, l));
    return i
}
function HD(e, t, n) {
    var i, a;
    if (typeof e.type == "function") {
        for (i = e.__k,
        a = 0; i && a < i.length; a++)
            i[a] && (i[a].__ = e,
            t = HD(i[a], t, n));
        return t
    }
    e.__e != t && (t && e.type && !n.contains(t) && (t = Wd(e)),
    n.insertBefore(e.__e, t || null),
    t = e.__e);
    do
        t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t
}
function lY(e, t, n, i) {
    var a, r, s = e.key, l = e.type, c = t[n];
    if (c === null && e.key == null || c && s == c.key && l == c.type && (2 & c.__u) == 0)
        return n;
    if (i > (c != null && (2 & c.__u) == 0 ? 1 : 0))
        for (a = n - 1,
        r = n + 1; a >= 0 || r < t.length; ) {
            if (a >= 0) {
                if ((c = t[a]) && (2 & c.__u) == 0 && s == c.key && l == c.type)
                    return a;
                a--
            }
            if (r < t.length) {
                if ((c = t[r]) && (2 & c.__u) == 0 && s == c.key && l == c.type)
                    return r;
                r++
            }
        }
    return -1
}
function aI(e, t, n) {
    t[0] == "-" ? e.setProperty(t, n ?? "") : e[t] = n == null ? "" : typeof n != "number" || oY.test(t) ? n : n + "px"
}
function Cg(e, t, n, i, a) {
    var r;
    e: if (t == "style")
        if (typeof n == "string")
            e.style.cssText = n;
        else {
            if (typeof i == "string" && (e.style.cssText = i = ""),
            i)
                for (t in i)
                    n && t in n || aI(e.style, t, "");
            if (n)
                for (t in n)
                    i && n[t] == i[t] || aI(e.style, t, n[t])
        }
    else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(zD, "$1")),
        t = t.toLowerCase()in e || t == "onFocusOut" || t == "onFocusIn" ? t.toLowerCase().slice(2) : t.slice(2),
        e.l || (e.l = {}),
        e.l[t + r] = n,
        n ? i ? n.u = i.u : (n.u = r_,
        e.addEventListener(t, r ? u0 : c0, r)) : e.removeEventListener(t, r ? u0 : c0, r);
    else {
        if (a == "http://www.w3.org/2000/svg")
            t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
            try {
                e[t] = n ?? "";
                break e
            } catch {}
        typeof n == "function" || (n == null || n === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && n == 1 ? "" : n))
    }
}
function rI(e) {
    return function(t) {
        if (this.l) {
            var n = this.l[t.type + e];
            if (t.t == null)
                t.t = r_++;
            else if (t.t < n.u)
                return;
            return n($n.event ? $n.event(t) : t)
        }
    }
}
function s_(e, t, n, i, a, r, s, l, c, d) {
    var p, f, v, g, y, b, k, C, x, A, _, w, T, P, I, L, R, D = t.type;
    if (t.constructor != null)
        return null;
    128 & n.__u && (c = !!(32 & n.__u),
    r = [l = t.__e = n.__e]),
    (p = $n.__b) && p(t);
    e: if (typeof D == "function")
        try {
            if (C = t.props,
            x = "prototype"in D && D.prototype.render,
            A = (p = D.contextType) && i[p.__c],
            _ = p ? A ? A.props.value : p.__ : i,
            n.__c ? k = (f = t.__c = n.__c).__ = f.__E : (x ? t.__c = f = new D(C,_) : (t.__c = f = new Av(C,_),
            f.constructor = D,
            f.render = uY),
            A && A.sub(f),
            f.props = C,
            f.state || (f.state = {}),
            f.context = _,
            f.__n = i,
            v = f.__d = !0,
            f.__h = [],
            f._sb = []),
            x && f.__s == null && (f.__s = f.state),
            x && D.getDerivedStateFromProps != null && (f.__s == f.state && (f.__s = js({}, f.__s)),
            js(f.__s, D.getDerivedStateFromProps(C, f.__s))),
            g = f.props,
            y = f.state,
            f.__v = t,
            v)
                x && D.getDerivedStateFromProps == null && f.componentWillMount != null && f.componentWillMount(),
                x && f.componentDidMount != null && f.__h.push(f.componentDidMount);
            else {
                if (x && D.getDerivedStateFromProps == null && C !== g && f.componentWillReceiveProps != null && f.componentWillReceiveProps(C, _),
                !f.__e && f.shouldComponentUpdate != null && f.shouldComponentUpdate(C, f.__s, _) === !1 || t.__v == n.__v) {
                    for (t.__v != n.__v && (f.props = C,
                    f.state = f.__s,
                    f.__d = !1),
                    t.__e = n.__e,
                    t.__k = n.__k,
                    t.__k.some(function(M) {
                        M && (M.__ = t)
                    }),
                    w = 0; w < f._sb.length; w++)
                        f.__h.push(f._sb[w]);
                    f._sb = [],
                    f.__h.length && s.push(f);
                    break e
                }
                f.componentWillUpdate != null && f.componentWillUpdate(C, f.__s, _),
                x && f.componentDidUpdate != null && f.__h.push(function() {
                    f.componentDidUpdate(g, y, b)
                })
            }
            if (f.context = _,
            f.props = C,
            f.__P = e,
            f.__e = !1,
            T = $n.__r,
            P = 0,
            x) {
                for (f.state = f.__s,
                f.__d = !1,
                T && T(t),
                p = f.render(f.props, f.state, f.context),
                I = 0; I < f._sb.length; I++)
                    f.__h.push(f._sb[I]);
                f._sb = []
            } else
                do
                    f.__d = !1,
                    T && T(t),
                    p = f.render(f.props, f.state, f.context),
                    f.state = f.__s;
                while (f.__d && ++P < 25);
            f.state = f.__s,
            f.getChildContext != null && (i = js(js({}, i), f.getChildContext())),
            x && !v && f.getSnapshotBeforeUpdate != null && (b = f.getSnapshotBeforeUpdate(g, y)),
            L = p,
            p != null && p.type === sc && p.key == null && (L = qD(p.props.children)),
            l = $D(e, Jy(L) ? L : [L], t, n, i, a, r, s, l, c, d),
            f.base = t.__e,
            t.__u &= -161,
            f.__h.length && s.push(f),
            k && (f.__E = f.__ = null)
        } catch (M) {
            if (t.__v = null,
            c || r != null)
                if (M.then) {
                    for (t.__u |= c ? 160 : 128; l && l.nodeType == 8 && l.nextSibling; )
                        l = l.nextSibling;
                    r[r.indexOf(l)] = null,
                    t.__e = l
                } else
                    for (R = r.length; R--; )
                        o_(r[R]);
            else
                t.__e = n.__e,
                t.__k = n.__k;
            $n.__e(M, t, n)
        }
    else
        r == null && t.__v == n.__v ? (t.__k = n.__k,
        t.__e = n.__e) : l = t.__e = cY(n.__e, t, n, i, a, r, s, c, d);
    return (p = $n.diffed) && p(t),
    128 & t.__u ? void 0 : l
}
function WD(e, t, n) {
    for (var i = 0; i < n.length; i++)
        l_(n[i], n[++i], n[++i]);
    $n.__c && $n.__c(t, e),
    e.some(function(a) {
        try {
            e = a.__h,
            a.__h = [],
            e.some(function(r) {
                r.call(a)
            })
        } catch (r) {
            $n.__e(r, a.__v)
        }
    })
}
function qD(e) {
    return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : Jy(e) ? e.map(qD) : js({}, e)
}
function cY(e, t, n, i, a, r, s, l, c) {
    var d, p, f, v, g, y, b, k = n.props, C = t.props, x = t.type;
    if (x == "svg" ? a = "http://www.w3.org/2000/svg" : x == "math" ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"),
    r != null) {
        for (d = 0; d < r.length; d++)
            if ((g = r[d]) && "setAttribute"in g == !!x && (x ? g.localName == x : g.nodeType == 3)) {
                e = g,
                r[d] = null;
                break
            }
    }
    if (e == null) {
        if (x == null)
            return document.createTextNode(C);
        e = document.createElementNS(a, x, C.is && C),
        l && ($n.__m && $n.__m(t, r),
        l = !1),
        r = null
    }
    if (x == null)
        k === C || l && e.data == C || (e.data = C);
    else {
        if (r = r && Yy.call(e.childNodes),
        k = n.props || cf,
        !l && r != null)
            for (k = {},
            d = 0; d < e.attributes.length; d++)
                k[(g = e.attributes[d]).name] = g.value;
        for (d in k)
            if (g = k[d],
            d != "children") {
                if (d == "dangerouslySetInnerHTML")
                    f = g;
                else if (!(d in C)) {
                    if (d == "value" && "defaultValue"in C || d == "checked" && "defaultChecked"in C)
                        continue;
                    Cg(e, d, null, g, a)
                }
            }
        for (d in C)
            g = C[d],
            d == "children" ? v = g : d == "dangerouslySetInnerHTML" ? p = g : d == "value" ? y = g : d == "checked" ? b = g : l && typeof g != "function" || k[d] === g || Cg(e, d, g, k[d], a);
        if (p)
            l || f && (p.__html == f.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html),
            t.__k = [];
        else if (f && (e.innerHTML = ""),
        $D(t.type == "template" ? e.content : e, Jy(v) ? v : [v], t, n, i, x == "foreignObject" ? "http://www.w3.org/1999/xhtml" : a, r, s, r ? r[0] : n.__k && Wd(n, 0), l, c),
        r != null)
            for (d = r.length; d--; )
                o_(r[d]);
        l || (d = "value",
        x == "progress" && y == null ? e.removeAttribute("value") : y != null && (y !== e[d] || x == "progress" && !y || x == "option" && y != k[d]) && Cg(e, d, y, k[d], a),
        d = "checked",
        b != null && b != e[d] && Cg(e, d, b, k[d], a))
    }
    return e
}
function l_(e, t, n) {
    try {
        if (typeof e == "function") {
            var i = typeof e.__u == "function";
            i && e.__u(),
            i && t == null || (e.__u = e(t))
        } else
            e.current = t
    } catch (a) {
        $n.__e(a, n)
    }
}
function GD(e, t, n) {
    var i, a;
    if ($n.unmount && $n.unmount(e),
    (i = e.ref) && (i.current && i.current != e.__e || l_(i, null, t)),
    (i = e.__c) != null) {
        if (i.componentWillUnmount)
            try {
                i.componentWillUnmount()
            } catch (r) {
                $n.__e(r, t)
            }
        i.base = i.__P = null
    }
    if (i = e.__k)
        for (a = 0; a < i.length; a++)
            i[a] && GD(i[a], t, n || typeof e.type != "function");
    n || o_(e.__e),
    e.__c = e.__ = e.__e = void 0
}
function uY(e, t, n) {
    return this.constructor(e, n)
}
function dY(e, t, n) {
    var i, a, r, s;
    t == document && (t = document.documentElement),
    $n.__ && $n.__(e, t),
    a = (i = !1) ? null : t.__k,
    r = [],
    s = [],
    s_(t, e = t.__k = Kn(sc, null, [e]), a || cf, cf, t.namespaceURI, a ? null : t.firstChild ? Yy.call(t.childNodes) : null, r, a ? a.__e : t.firstChild, i, s),
    WD(r, e, s)
}
Yy = VD.slice,
$n = {
    __e: function(e, t, n, i) {
        for (var a, r, s; t = t.__; )
            if ((a = t.__c) && !a.__)
                try {
                    if ((r = a.constructor) && r.getDerivedStateFromError != null && (a.setState(r.getDerivedStateFromError(e)),
                    s = a.__d),
                    a.componentDidCatch != null && (a.componentDidCatch(e, i || {}),
                    s = a.__d),
                    s)
                        return a.__E = a
                } catch (l) {
                    e = l
                }
        throw e
    }
},
DD = 0,
Av.prototype.setState = function(e, t) {
    var n;
    n = this.__s != null && this.__s != this.state ? this.__s : this.__s = js({}, this.state),
    typeof e == "function" && (e = e(js({}, n), this.props)),
    e && js(n, e),
    e != null && this.__v && (t && this._sb.push(t),
    iI(this))
}
,
Av.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0,
    e && this.__h.push(e),
    iI(this))
}
,
Av.prototype.render = sc,
Hc = [],
OD = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout,
BD = function(e, t) {
    return e.__v.__b - t.__v.__b
}
,
ay.__r = 0,
zD = /(PointerCapture)$|Capture$/i,
r_ = 0,
c0 = rI(!1),
u0 = rI(!0);
var qd, ui, WS, oI, Gd = 0, KD = [], bi = $n, sI = bi.__b, lI = bi.__r, cI = bi.diffed, uI = bi.__c, dI = bi.unmount, mI = bi.__;
function Xy(e, t) {
    bi.__h && bi.__h(ui, e, Gd || t),
    Gd = 0;
    var n = ui.__H || (ui.__H = {
        __: [],
        __h: []
    });
    return e >= n.__.length && n.__.push({}),
    n.__[e]
}
function mY(e) {
    return Gd = 1,
    pY(QD, e)
}
function pY(e, t, n) {
    var i = Xy(qd++, 2);
    if (i.t = e,
    !i.__c && (i.__ = [QD(void 0, t), function(l) {
        var c = i.__N ? i.__N[0] : i.__[0]
          , d = i.t(c, l);
        c !== d && (i.__N = [d, i.__[1]],
        i.__c.setState({}))
    }
    ],
    i.__c = ui,
    !ui.__f)) {
        var a = function(l, c, d) {
            if (!i.__c.__H)
                return !0;
            var p = i.__c.__H.__.filter(function(v) {
                return !!v.__c
            });
            if (p.every(function(v) {
                return !v.__N
            }))
                return !r || r.call(this, l, c, d);
            var f = i.__c.props !== l;
            return p.forEach(function(v) {
                if (v.__N) {
                    var g = v.__[0];
                    v.__ = v.__N,
                    v.__N = void 0,
                    g !== v.__[0] && (f = !0)
                }
            }),
            r && r.call(this, l, c, d) || f
        };
        ui.__f = !0;
        var r = ui.shouldComponentUpdate
          , s = ui.componentWillUpdate;
        ui.componentWillUpdate = function(l, c, d) {
            if (this.__e) {
                var p = r;
                r = void 0,
                a(l, c, d),
                r = p
            }
            s && s.call(this, l, c, d)
        }
        ,
        ui.shouldComponentUpdate = a
    }
    return i.__N || i.__
}
function fY(e, t) {
    var n = Xy(qd++, 3);
    !bi.__s && c_(n.__H, t) && (n.__ = e,
    n.u = t,
    ui.__H.__h.push(n))
}
function eb(e, t) {
    var n = Xy(qd++, 4);
    !bi.__s && c_(n.__H, t) && (n.__ = e,
    n.u = t,
    ui.__h.push(n))
}
function ry(e) {
    return Gd = 5,
    zf(function() {
        return {
            current: e
        }
    }, [])
}
function FGe(e, t, n) {
    Gd = 6,
    eb(function() {
        if (typeof e == "function") {
            var i = e(t());
            return function() {
                e(null),
                i && typeof i == "function" && i()
            }
        }
        if (e)
            return e.current = t(),
            function() {
                return e.current = null
            }
    }, n)
}
function zf(e, t) {
    var n = Xy(qd++, 7);
    return c_(n.__H, t) && (n.__ = e(),
    n.__H = t,
    n.__h = e),
    n.__
}
function hY(e, t) {
    return Gd = 8,
    zf(function() {
        return e
    }, t)
}
function gY() {
    for (var e; e = KD.shift(); )
        if (e.__P && e.__H)
            try {
                e.__H.__h.forEach(xv),
                e.__H.__h.forEach(d0),
                e.__H.__h = []
            } catch (t) {
                e.__H.__h = [],
                bi.__e(t, e.__v)
            }
}
bi.__b = function(e) {
    ui = null,
    sI && sI(e)
}
,
bi.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m),
    mI && mI(e, t)
}
,
bi.__r = function(e) {
    lI && lI(e),
    qd = 0;
    var t = (ui = e.__c).__H;
    t && (WS === ui ? (t.__h = [],
    ui.__h = [],
    t.__.forEach(function(n) {
        n.__N && (n.__ = n.__N),
        n.u = n.__N = void 0
    })) : (t.__h.forEach(xv),
    t.__h.forEach(d0),
    t.__h = [],
    qd = 0)),
    WS = ui
}
,
bi.diffed = function(e) {
    cI && cI(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && (KD.push(t) !== 1 && oI === bi.requestAnimationFrame || ((oI = bi.requestAnimationFrame) || vY)(gY)),
    t.__H.__.forEach(function(n) {
        n.u && (n.__H = n.u),
        n.u = void 0
    })),
    WS = ui = null
}
,
bi.__c = function(e, t) {
    t.some(function(n) {
        try {
            n.__h.forEach(xv),
            n.__h = n.__h.filter(function(i) {
                return !i.__ || d0(i)
            })
        } catch (i) {
            t.some(function(a) {
                a.__h && (a.__h = [])
            }),
            t = [],
            bi.__e(i, n.__v)
        }
    }),
    uI && uI(e, t)
}
,
bi.unmount = function(e) {
    dI && dI(e);
    var t, n = e.__c;
    n && n.__H && (n.__H.__.forEach(function(i) {
        try {
            xv(i)
        } catch (a) {
            t = a
        }
    }),
    n.__H = void 0,
    t && bi.__e(t, n.__v))
}
;
var pI = typeof requestAnimationFrame == "function";
function vY(e) {
    var t, n = function() {
        clearTimeout(i),
        pI && cancelAnimationFrame(t),
        setTimeout(e)
    }, i = setTimeout(n, 100);
    pI && (t = requestAnimationFrame(n))
}
function xv(e) {
    var t = ui
      , n = e.__c;
    typeof n == "function" && (e.__c = void 0,
    n()),
    ui = t
}
function d0(e) {
    var t = ui;
    e.__c = e.__(),
    ui = t
}
function c_(e, t) {
    return !e || e.length !== t.length || t.some(function(n, i) {
        return n !== e[i]
    })
}
function QD(e, t) {
    return typeof t == "function" ? t(e) : t
}
function EGe(e) {
    return {
        defaultValue: e
    }
}
var tu;
class yY extends EventTarget {
    [k: string]: any;
    constructor(n) {
        super();
        vt(this, tu);
        yt(this, tu, n)
    }
    get value() {
        return rt(this, tu)
    }
    set value(n) {
        rt(this, tu) !== n && (yt(this, tu, n),
        this.dispatchEvent(new Event("change")))
    }
}
tu = new WeakMap;
const _v = new WeakMap;
function bY(e, t) {
    const n = new yY(e.defaultValue);
    return _v.has(t) || _v.set(t, new Map),
    _v.get(t).set(e, n),
    n
}
function ZD(e, t) {
    const n = _v.get(t);
    if (n) {
        const i = n.get(e);
        if (i)
            return i
    }
    return null
}
function fI(e, t) {
    let n = t;
    do {
        if (n instanceof ShadowRoot)
            n = n.host;
        else if (!(n instanceof Element))
            return null;
        const i = ZD(e, n);
        if (i)
            return i
    } while (n = n.parentNode);
    return null
}
function MGe(e, t) {
    const n = zf( () => fI(e, t), [e, t])
      , [i,a] = mY(n ? n.value : e.defaultValue);
    return eb( () => {
        let r = n;
        const s = t.connectedCallback
          , l = t.disconnectedCallback
          , c = () => {
            a(r ? r.value : e.defaultValue)
        }
          , d = () => r == null ? void 0 : r.removeEventListener("change", c);
        r == null || r.addEventListener("change", c);
        const p = () => {
            d(),
            r = fI(e, t),
            r == null || r.addEventListener("change", c),
            c()
        }
        ;
        return t.connectedCallback = function() {
            s == null || s.call(this),
            p()
        }
        ,
        t.disconnectedCallback = function() {
            l == null || l.call(this),
            p()
        }
        ,
        () => d()
    }
    , [e, t, n]),
    i
}
const hI = `:host{display:contents}:host,:host *,:host ::after,:host ::before{box-sizing:border-box}:host>*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;font-feature-settings:"calt"0;text-rendering:optimizeLegibility;font-size:var(--s-global-font-size-25041, 1rem);line-height:var(--s-global-line-height-25041, 1.5rem);letter-spacing:var(--s-global-letter-spacing-25041, -0.00833em);font-family:var(--s-global-font-family-25041, 'Inter', -apple-system, BlinkMacSystemFont, 'San Francisco', 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif);font-weight:var(--s-global-font-weight-25041, 450);color:var(--s-global-color-25041, rgba(48, 48, 48, 1))}@media (min-width:48rem),(pointer:fine){:host>*{font-size:var(--s-global-font-size-25041, 0.8125rem);line-height:var(--s-global-line-height-25041, 1.25rem);letter-spacing:var(--s-global-letter-spacing-25041,
      0rem
    )}}`;
function Pp(e, t, n=globalThis.CSSStyleSheet) {
    const i = !!(globalThis.CSSStyleSheet && "replaceSync"in CSSStyleSheet.prototype)
      , a = [];
    if (i) {
        const r = new n;
        r.replaceSync(t),
        a.push(r)
    } else if ("defaultView"in e) {
        const r = e.createElement("style");
        r.textContent = t,
        e.body.appendChild(r)
    } else {
        const r = e.ownerDocument.createElement("style");
        r.textContent = t,
        e.appendChild(r)
    }
    !i || !e.adoptedStyleSheets || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, ...a])
}
let Qa, Fd, $p, m0 = !1;
function kY(e, t) {
    if (m0 || (Qa || (YD(e),
    Qa && u_()),
    oy))
        return !1;
    if ($p === e)
        return !0;
    if (t && Qa) {
        const n = e[Qa];
        if (n)
            return t in n
    }
    return !1
}
function SY() {
    $p = null
}
function CY(e) {
    Hp(e, !0)
}
let oy;
function YD(e) {
    for (const t in e)
        if (t.startsWith("__reactFiber$"))
            return oy === void 0 && (oy = "refCleanup"in Reflect.get(e, t)),
            Qa = "__reactProps$" + t.slice(13),
            Fd = Qa + "_",
            Qa
}
const wv = new Set;
function u_() {
    if (wv.size)
        for (const e of wv)
            wv.delete(e),
            Hp(e)
}

function Hp(e, t) {
    if (oy || e.getRootNode() !== e.ownerDocument || Reflect.get(e, "_reactWrapped"))
        return;
    if (Qa || (YD(e),
    Qa && u_()),
    !Qa) {
        if (!t) {
            Promise.resolve(e).then(CY);
            return
        }
        wv.add(e);
        return
    }
    if (Fd in e)
        return;
    e[Fd] = {};
    const n = e[Qa];
    Object.defineProperty(e, Qa, xY),
    n && (e[Qa] = n)
}
const gI = {
    change: !0
}
  , xY = {
    configurable: !0,
    enumerable: !1,
    get() {
        return this[Fd]
    },
    set(e) {
        const t = this[Fd];
        this[Fd] = e;
        const n = $p;
        $p = null,
        m0 = !0;
        const i = this.ownerDocument;
        for (const a in e) {
            if (a === "children" || a === "ref")
                continue;
            const r = e[a]
              , s = t && t[a];
            if (r !== s)
                if (a.startsWith("on")) {
                    const l = a.toLowerCase()
                      , c = l in this ? l : a
                      , d = c.slice(2);
                    if (c in i && !(d in gI))
                        continue;
                    s ? r || this.removeEventListener(d, qS) : this.addEventListener(d, qS)
                } else
                    a in this ? this[a] = r : r == null || r === !1 ? this.removeAttribute(a) : this.setAttribute(a, String(r))
        }
        if (t) {
            for (const a in t)
                if (!(a === "children" || a === "ref" || a in e))
                    if (a.startsWith("on")) {
                        const r = a.toLowerCase()
                          , s = r in this ? r : a
                          , l = s.slice(2);
                        if (s in i && !(l in gI))
                            continue;
                        this.removeEventListener(l, qS)
                    } else
                        a in this ? this[a] = void 0 : this.removeAttribute(a)
        }
        n || Promise.resolve().then(SY),
        $p = this,
        m0 = !1
    }
};
function qS(e) {
    const t = this[Qa]
      , n = "on" + e.type;
    let i = t[n];
    if (!i) {
        for (const a in t)
            if (a.toLowerCase() === n) {
                i = t[a];
                break
            }
    }
    return i(e)
}
var JD;
Symbol.metadata ?? (Symbol.metadata = Symbol.for("Symbol.metadata"));
const _Y = globalThis.HTMLElement || Object;
var Ms, Go, Dd, Nf, p0;
class tb extends _Y {
    [k: string]: any;
    constructor({styles: n="", ShadowRoot: i, delegatesFocus: a=!1, ...r}) {
        super();
        vt(this, Nf);
        vt(this, Ms);
        vt(this, Go, null);
        vt(this, Dd);
        Hp(this),
        yt(this, Go, this.attachShadow({
            mode: "open",
            delegatesFocus: a,
            ...r
        })),
        yt(this, Dd, n),
        Pp(rt(this, Go), hI),
        Pp(rt(this, Go), rt(this, Dd));
        const s = this.constructor[Symbol.metadata].contextsToAdd;
        if (s)
            for (const d of s)
                bY(d, this);
        const l = () => i(this);
        let c = !1;
        yt(this, Ms, () => {
            c || (c = !0,
            queueMicrotask( () => {
                c = !1,
                dY(this.isConnected && Kn(l, null), rt(this, Go))
            }
            ))
        }
        ),
        rt(this, Ms).call(this)
    }
    static get observedAttributes() {
        var n;
        return ((n = this[Symbol.metadata]) == null ? void 0 : n.observedAttributes) || []
    }
    setAttribute(n, i) {
        if (n === "_reactWrapped") {
            Reflect.set(this, "_reactWrapped", !0);
            return
        }
        Hp(this),
        !kY(this, n) && super.setAttribute(n, i)
    }
    attributeChangedCallback(n) {
        if (!rt(this, Ms))
            return;
        const i = this.constructor[Symbol.metadata].reactiveAttributes
          , a = this.constructor[Symbol.metadata].attributeChangeCallbacks;
        a && a.has(n) && a.get(n)(this),
        i && i.has(n) && rt(this, Ms).call(this)
    }
    connectedCallback() {
        Hp(this),
        this.dispatchEvent(new Event("_PreactCustomElement:connected",{
            bubbles: !0
        })),
        this.queueRender()
    }
    disconnectedCallback() {
        PS(this, Nf, p0).call(this),
        this.queueRender()
    }
    adoptedCallback() {
        var i;
        if (PS(this, Nf, p0).call(this),
        !rt(this, Go))
            return;
        const n = (i = this.ownerDocument.defaultView) == null ? void 0 : i.CSSStyleSheet;
        Pp(rt(this, Go), hI, n),
        Pp(rt(this, Go), rt(this, Dd), n)
    }
    queueRender() {
        rt(this, Ms) && rt(this, Ms).call(this)
    }
    click({sourceEvent: n}={}) {
        if (!n) {
            super.click();
            return
        }
        const i = n.button === 1
          , a = new MouseEvent("click",{
            bubbles: !0,
            cancelable: !0,
            composed: !0,
            shiftKey: n.shiftKey,
            metaKey: n.metaKey || i,
            ctrlKey: n.ctrlKey || i,
            view: window
        });
        this.dispatchEvent(a)
    }
}
Ms = new WeakMap,
Go = new WeakMap,
Dd = new WeakMap,
Nf = new WeakSet,
p0 = function() {
    var n;
    if (!(this instanceof JD)) {
        const i = customElements.get(((n = this == null ? void 0 : this.tagName) == null ? void 0 : n.toLowerCase()) ?? "");
        i && Object.setPrototypeOf(this, i.prototype)
    }
}
;
JD = tb;
function d_(e) {
    return (t, n) => {
        "customElements"in globalThis && !customElements.get(e) && (Object.defineProperty(t, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n.metadata
        }),
        customElements.define(e, t))
    }
}
function Us(e, ...t) {
    const n = ["polaris: "];
    e && n.push(e, "-"),
    console.warn(...n, ...t)
}
function XD(e, t) {
    e.observedAttributes || (e.observedAttributes = []),
    e.observedAttributes.push(t)
}
function wY(e, t) {
    XD(e, t),
    e.reactiveAttributes || (e.reactiveAttributes = new Set),
    e.reactiveAttributes.add(t)
}
function vI(e, t, n) {
    e.attributeChangeCallbacks || (e.attributeChangeCallbacks = new Map),
    XD(e, t),
    e.attributeChangeCallbacks.set(t, n)
}
function NY(e, t) {
    e.contextsToAdd || (e.contextsToAdd = []),
    e.contextsToAdd.push(t)
}
function TY(e, {attribute: t, onChange: n, reactive: i, reflectToContext: a}={}) {
    return (r, s) => {
        const l = t ?? s.name.toLowerCase();
        let c;
        a && (NY(s.metadata, a),
        c = p => {
            const f = ZD(a, p);
            f.value = p[s.name]
        }
        ),
        l && (i && wY(s.metadata, l),
        n && vI(s.metadata, l, n),
        c && vI(s.metadata, l, c));
        const d = (p, f) => {
            if (!l) {
                if (s.access.get(p) === f)
                    return;
                r.set.call(p, f),
                n && n(p),
                c && c(p),
                i && p.queueRender();
                return
            }
            const v = e.toAttribute ? e.toAttribute(f) : f;
            if (v === null) {
                if (!p.hasAttribute(l))
                    return;
                p.removeAttribute(l),
                l || (n && n(p),
                c && c(p)),
                i && p.queueRender();
                return
            }
            const g = String(v);
            p.getAttribute(l) !== g && (p.setAttribute(l, g),
            l || (n && n(p),
            c && c(p)),
            i && p.queueRender())
        }
        ;
        return {
            get() {
                let p, f;
                if (l) {
                    const v = this.getAttribute(l);
                    v !== null && (e.parseAttribute ? p = e.parseAttribute(v) : p = v)
                } else
                    p = r.get.call(this);
                return f = e.get(p ?? null, this),
                f ?? (f = e.defaultValue),
                f
            },
            set(p) {
                e.set ? e.set(p, f => d(this, f)) : d(this, String(p))
            },
            init(p) {
                return p !== void 0 && Us("Property decorator", `Don't initialize properties - use the reflector to handle that. Spotted on ${this.constructor.name} - ${s.name}`),
                p
            }
        }
    }
}
function jt(e, t={}) {
    return TY(e, {
        ...t,
        reactive: !0
    })
}
function PY(e) {
    return typeof e == "string" && e.startsWith("@container")
}
function bn(e, {defaultValue: t, separator: n, canBeResponsive: i, trimWhitespace: a=!1}) {
    const r = new Set(e)
      , s = l => {
        if (i && PY(l))
            return !0;
        if (n)
            return String(l).split(n).every( (p, f) => {
                if (a)
                    if (f > 0 && p.startsWith(" ")) {
                        const v = p.slice(1);
                        return v !== v.trim() ? !1 : r.has(v)
                    } else
                        return r.has(p);
                else
                    return r.has(p)
            }
            );
        {
            const c = String(l);
            return r.has(a ? c.trim() : c)
        }
    }
    ;
    return {
        defaultValue: t,
        parseAttribute(l) {
            return s(l) ? l : null
        },
        get(l) {
            return s(l) ? l : t
        }
    }
}
const e2 = "s-internal-icon"
  , IY = {}
  , nb = e => {
    let t = "";
    for (const n in e)
        !!e[n] && (t += `${n} `);
    return t.trim()
}
  , LY = ["work-list c8c4b", "work c1cff", "watch 8b585", "wrench b0732", "wand 069dd", "wallet c4540", "wifi eafff", "viewport-wide 5f1fa", "viewport-tall 56db5", "viewport-short 57066", "viewport-narrow 82610", "unlock 60d99", "upload da099", "unknown-device e37fc", "undo edada", "transfer c266b", "transfer-out d0947", "transfer-internal 14b97", "transaction 55ae4", "transfer-in b4145", "transaction-fee-yen 44d1c", "transaction-fee-rupee 949ba", "transaction-fee-pound 5fd36", "transaction-fee-euro fe10b", "transaction-fee-dollar 7fa1e", "toggle-on 17080", "toggle-off bd65d", "tip-jar 72231", "thumbs-up d71b4", "thumbs-down c7fbb", "three-d-environment 27a9d", "theme 13d75", "theme-template d9b60", "theme-store 4c7ff", "theme-edit 510d4", "text a9542", "text-with-image d110d", "text-underline 92371", "text-title 39e39", "text-quote ce1d8", "text-italic 1b732", "text-grammar 2733f", "text-in-columns 1c0dc", "text-in-rows 3e5ce", "text-font a1ca4", "text-color 9a713", "text-bold 68095", "text-font-list ba8be", "text-block 209e5", "text-align-right 388c2", "text-align-left 8f8f0", "text-indent 2332b", "text-align-center 92a16", "tax 55e24", "team 07a8a", "tablet 592c6", "table 2e591", "table-masonry 8d51d", "sun 02a40", "target f0cd2", "store 235b5", "store-online 73d6a", "store-managed 7a370", "stop-circle 15c03", "store-import 8ddc6", "status a6837", "status-active 2cf16", "star-list ac478", "star-filled dcd43", "sports c4118", "sound 5629e", "sort-descending c37d8", "sort-ascending 3a8f7", "social-post dc0d3", "social-ad 539d3", "smiley-sad 64595", "smiley-neutral 705e0", "smiley-joy 7a677", "smiley-happy 9c9a9", "slideshow 2ab5b", "shopcodes 40692", "shield-person a6f71", "shipping-label 885e1", "shield-none 3ddb7", "shield-check-mark c71f4", "shield-pending 39c7c", "share a07a5", "settings ff7fd", "send 1c21b", "search 3af13", "search-recent 273ff", "search-list 50ada", "search-resource a8c83", "save bc9b5", "sandbox be59b", "rotate-right bb669", "rocket a106f", "rotate-left f3708", "reward b425a", "return 62871", "reset dab43", "replay cd081", "replace 8214d", "referral-code dce7b", "redo 0cda2", "receivables ca9bf", "receipt 72ef4", "receipt-yen 384be", "refresh 791db", "receipt-rupee 50996", "remove-background 06520", "receipt-refund e09c5", "receipt-paid 873a1", "question-circle 5341d", "receipt-dollar f2625", "question-circle-filled 8b992", "profile 6980e", "profile-filled 37ed7", "receipt-euro 687b0", "product-unavailable 29e29", "product-return 321ce", "product-remove 316c3", "receipt-pound b0df3", "product-reference 260ab", "product-list 767b3", "product-add 3c61d", "product-cost c5017", "print db5d9", "price-list 29ecb", "point-of-sale 5c581", "plus-circle-up b5778", "plus-circle-down 6adb0", "play-circle 40967", "play 7701a", "plan 36a68", "pin b8e8e", "pin-remove 3ea0d", "phone-out e16c8", "phone-in c8749", "personalized-text 13bcb", "person-segment 0ffaf", "person-remove 86ac4", "person-lock 075e7", "person-exit e284a", "person-list c4b25", "person-add e1356", "payout 4a8c7", "payout-rupee ec14a", "payout-yen cadf2", "payout-euro 29014", "payout-pound 8e41d", "payout-dollar 8dacd", "payment-capture bd5a6", "pause-circle bbdd7", "paste 9b115", "passkey d70c4", "paper-check c08e1", "paint-brush-round 7c2c9", "paint-brush-flat dd443", "pagination-start a843e", "pagination-end d2fcc", "page-up 937e7", "page-remove c2fb0", "page-report a32f6", "page-reference 21565", "page-list 53d07", "page-down 1741c", "page-heart 69c4b", "page-clock 8587e", "page-attachment 31682", "package f142a", "page-add 3a3ad", "package-returned 56169", "package-fulfilled e0f70", "outgoing 82c0c", "package-on-hold 02e3b", "outdent eec8d", "organization 2273f", "orders-status f37ec", "order-repeat d6dfd", "order-first 412dc", "order-draft f4521", "order-batches 8571a", "notification 3bea6", "note c4ee2", "note-add 5e69d", "nature 16422", "moon cc833", "money-none b7d86", "money a07db", "minimize 2facc", "metaobject c5037", "metaobject-list b8ec3", "metaobject-reference caa84", "metafields 5590a", "menu b417c", "menu-vertical f1d2d", "mention ab004", "megaphone 9082c", "menu-horizontal 54d27", "media-receiver 59399", "measurement-weight-list b4360", "measurement-volume 6d27e", "measurement-weight 63315", "measurement-volume-list efa86", "measurement-size-list 00438", "maximize 32bc0", "markets ea79c", "measurement-size ff808", "markets-yen e8fb4", "markets-rupee 7ce41", "markets-euro e36ec", "map 18d3d", "lock f321b", "live a036a", "list-numbered 4200f", "location-none 42676", "list-bulleted 1f5a9", "link bef77", "link-list 95daf", "layout-sidebar-right de0e7", "layout-section 4276f", "layout-sidebar-left 1c703", "layout-rows-2 bb9f3", "layout-popup 047e3", "layout-logo-block ae934", "layout-footer 15266", "layout-header 2133c", "layout-columns-3 12428", "layout-columns-2 f4e1d", "layout-column-1 b466f", "layout-buy-button d11ea", "layout-buy-button-vertical ff7b7", "layout-buy-button-horizontal 4996d", "layout-block eb414", "language-translate fa04b", "label-printer af3b2", "keyboard 69d39", "keyboard-filled c9f28", "keyboard-hide 0d8e0", "iq ae0a4", "key 4ae20", "inventory 1c853", "inventory-updated d08c9", "incoming e57ee", "import ce9ad", "images 6e771", "image e3468", "image-none 223bd", "image-with-text-overlay 7ffca", "image-magic cdf0f", "image-explore 7c893", "image-alt ecb5e", "image-add 9f48e", "identity-card e7d3d", "icons a19d1", "home 8b326", "heart e78c4", "hide-filled 0a7a7", "hashtag 38df4", "hashtag-decimal 53a6f", "hashtag-list a521a", "grid a38d5", "globe-list 91bd2", "globe-lines 8d570", "globe-europe 69ae3", "git-repository a3464", "globe-asia cb6b2", "git-commit bdc48", "git-branch f1120", "gift-card 7a278", "gauge afaa0", "games b5787", "forms 5e731", "forklift 4636d", "food 2b12c", "foreground 6ee39", "folder-up a9681", "folder 22c6c", "folder-remove 63f58", "folder-down 6bdb9", "folder-add 53820", "flower 2cf46", "flip-vertical 10ef5", "flip-horizontal 21b5f", "flag a139a", "filter 98f35", "file d5096", "file-list 27b70", "favicon 82ba5", "eyeglasses bf664", "eye-first e6033", "eye-dropper 73b68", "eye-dropper-list 6c262", "eye-check-mark cbc4f", "export edf30", "exit 323d2", "exchange 32b61", "eraser 07f62", "envelope-soft-pack 4a505", "envelope e7050", "enter d45b0", "email-newsletter c1e2c", "email-follow-up b3c73", "duplicate ff8f9", "drag-handle 4abdb", "drag-drop dce5c", "download ca9bf", "domain dafbd", "domain-redirect 8f6df", "domain-new 979f3", "domain-landing-page 5187b", "dock-side 04796", "dock-floating 28a7b", "discount b288a", "dns-settings 2ff8e", "discount-code f3dba", "discount-add 6e961", "desktop 87240", "delete d90e2", "database-connect 9d88f", "database abba1", "database-add 7e647", "data-table 297d2", "data-presentation b78a9", "cursor 4f297", "cursor-banner 46c96", "currency-convert 8853e", "cursor-option 0852f", "crop 297b1", "credit-card e3715", "credit-card-tap-chip 192e5", "credit-card-secure 2e159", "credit-card-reader c6b1a", "credit-card-reader-tap 88557", "credit-card-reader-chip e22f5", "credit-card-percent fb148", "credit-card-cancel cf804", "corner-pill 55c9c", "corner-round aac46", "contract 57a5d", "corner-square c0b19", "content 45fe9", "connect 35d76", "confetti afcb4", "compose bbf2f", "compass 4a6c8", "color a0c67", "color-none 62174", "collection-list f6a59", "code 1b83d", "code-add 2e3db", "clock-revert c79ee", "clipboard 9689e", "collection-reference fb8b3", "clipboard-checklist 46ca7", "clipboard-check 14af3", "circle 3f3dc", "circle-dashed d59e3", "collection-featured e8898", "chevron-up-circle 0f1d8", "chevron-right a2381", "chevron-right-circle dd560", "chevron-left ef785", "chevron-left-circle 8ffd9", "chevron-down-circle cce02", "checkbox 46332", "chat-referral 06cac", "check-circle-filled b8c8a", "chat 86971", "chat-new 58e2a", "chart-vertical d5b21", "chart-stacked cfa45", "chart-line abbdd", "chart-horizontal 11601", "chart-histogram-second-last 31093", "chart-popular a5a1b", "chart-histogram-last a442b", "chart-histogram-growth dff8f", "chart-histogram-full ef5a0", "chart-histogram-flat ee468", "chart-histogram-first 8f355", "chart-funnel 8845e", "chart-histogram-first-last e8091", "chart-donut 5ade3", "chart-cohort e9402", "channels dba03", "categories 62adc", "catalog-product 3d1a1", "cash-yen eddac", "cash-rupee a5fe7", "cash-pound eb192", "cash-euro 824fd", "cash-dollar a9f47", "cart-up 40b76", "cart-sale ec8db", "cart-down 0e838", "cart 823f1", "cart-discount 44ae7", "caret-up 4b7f5", "cart-abandoned 6111b", "caret-down 89f2a", "camera 0188e", "camera-flip b01f5", "calendar-time 73108", "calendar-list d066c", "calendar-compare c9762", "calculator 3f7a9", "button 90d45", "button-press d5a5f", "bullet 66362", "bug eed59", "book d019e", "book-open f6656", "blog cb268", "bill 5721b", "bolt 9373b", "barcode c4164", "bolt-filled 869a6", "bag 79c3e", "bank 5eb9b", "backspace ddde8", "automation 73ee8", "arrows-out-horizontal acded", "arrow-up c03df", "arrows-in-horizontal ffc77", "arrow-up-circle 24356", "arrow-right 806d4", "arrow-right-circle ad64d", "arrow-left 5e06a", "arrow-down 2c043", "arrow-down-circle c453a", "app-extension e5930", "arrow-left-circle bd824", "alert-octagon 29cc7", "alert-octagon-filled 73602", "alert-location cfd29", "alert-diamond 94e78", "airplane 655c9", "affiliate 24de4", "adjust 63782", "x-circle 042da", "x f359e", "view 5d254", "variant c960c", "star b093f", "sort b9331", "select 61998", "product 31265", "plus 662d6", "plus-circle db5e2", "phone 72e66", "person 59183", "payment 668f2", "page bcee2", "order 61df9", "order-unfulfilled 73550", "order-fulfilled c884b", "mobile 44638", "minus c3862", "minus-circle 48429", "microphone bf5c1", "merge 7593c", "location c7d02", "lightbulb 984bc", "language b844c", "info 099f6", "incomplete 04bea", "in-progress 4716e", "incentive 35365", "hide 10aef", "globe d7233", "external e00fd", "enabled 89dea", "email 2b70d", "edit 08726", "disabled b359e", "delivery 6331b", "collection b7a05", "chevron-up 7d8ec", "clock 1be62", "chevron-down 07fd7", "check-circle 83b1c", "check 6c790", "calendar 9b898", "calendar-check 076e5", "blank 85141", "attachment b28e5", "arrow-up-right 88125", "apps 88a3e", "archive 7fdad", "alert-triangle 43ba7", "alert-circle d6e61", "alert-bubble e92ba"]
  , m_ = {};
for (let e of LY) {
    const [t,n] = e.split(" ");
    m_[t] = "https://cdn.shopify.com/shopifycloud/admin-ui-foundations/icons/" + n + ".svg"
}
const FY = ["", "empty", ...Object.keys(m_)]
  , EY = ["base", "subdued"]
  , MY = ["auto", "neutral", "info", "success", "warning", "caution", "critical"]
  , RY = ["small", "base"]
  , jY = ["wallet-filled 19796", "text-in-rows-filled 9d41f", "work-filled ee18f", "text-ai c0336", "tax-filled 1a595", "target-filled 772ff", "store-filled 664fd", "sidekick bd5fa", "shopify-ql 91bd0", "shopify-inbox 940a1", "shipping-label-filled feb25", "settings-filled d84d8", "receipt-yen-filled 1c750", "receipt-rupee-filled 35f32", "receipt-pound-filled f6866", "receipt-euro-filled 64bb1", "receipt-dollar-filled e229e", "product-filled 5d748", "price-list-filled fb65c", "plan-filled 23549", "pin-filled 46aa2", "person-lock-filled 8cac1", "person-filled 7a8f8", "payment-filled bb8c8", "passkey-filled 67d95", "page-clock-filled 88fda", "package-filled c96cd", "organization-filled a0336", "order-filled b7c04", "order-draft-filled bf9b5", "notification-filled ba801", "money-filled f076f", "metaobject-filled 8e2ac", "metafields-filled d6717", "megaphone-filled e6cc1", "markets-yen-filled 2b5e7", "markets-rupee-filled 594ec", "markets-filled a9dcf", "markets-euro-filled e0b3e", "logo-youtube 05c5a", "logo-x 745af", "logo-whatsapp 5af8f", "logo-weibo 5f21c", "logo-wechat 1d98f", "logo-vimeo 62ad8", "logo-twitch 129e3", "logo-tumblr fb02b", "logo-tiktok 18d95", "logo-threads cb34e", "logo-spotify bc249", "logo-snapchat b39a4", "logo-shop 343d6", "logo-reddit fff82", "logo-pinterest a243e", "logo-meta 388b0", "logo-linkedin f77d0", "logo-line baee0", "logo-kakao-talk faaf0", "logo-instagram ed4fa", "logo-hydrogen 19d91", "logo-google 9f296", "logo-flow ec79b", "logo-facebook 78cdf", "logo-discord 9dcbc", "logo-apple-tap-to-pay 8394e", "lock-filled 03f70", "location-filled 89257", "live-filled e412e", "list-bulleted-filled 3abc5", "legacy-x-small 6b09a", "legacy-external-small 2fcfd", "legacy-check-small 9880d", "layout-block-ai a0477", "language-filled 54e92", "inventory-filled b7730", "identity-card-filled 799d8", "icons-filled 7f7fd", "home-filled 55574", "globe-filled 270d9", "globe-europe-filled 77adc", "globe-asia-filled 1eafe", "gift-card-filled 09f34", "flower-filled 194be", "file-filled ba892", "domain-filled eeeb1", "discount-filled 7c8e2", "delivery-filled 76a86", "cursor-filled 62a6e", "contract-filled 0d001", "content-filled 6938d", "collection-filled c2e89", "clipboard-check-filled 6af70", "chart-vertical-filled 75904", "cash-dollar-filled 102f4", "cart-filled f2897", "cart-down-filled e8d71", "cart-abandoned-filled ec50b", "caret-left-small 7fc91", "caret-right-small 093bd", "blog-filled 98f1a", "blank-filled 1b7eb", "bill-filled 0198f", "bank-filled 6627f", "automation-filled 6a3c9", "attachment-filled ad275", "arrows-out-horizontal-filled 56cf3", "apps-filled 617c5", "magic 66af0"]
  , p_ = {};
for (let e of jY) {
    const [t,n] = e.split(" ");
    p_[t] = "https://cdn.shopify.com/shopifycloud/admin-ui-foundations/internal-only/" + n + ".svg"
}
const Nv = {}
  , DY = "https://cdn.shopify.com/shopifycloud/admin-ui-foundations"
  , t2 = {
    ...p_,
    ...m_
}
  , n2 = /<svg[^>]*>[\s\S]*?<\/svg>/gi
  , OY = /(^on|src|href)/i
  , BY = /(animate.*|circle|clipPath|defs|desc|discard|ellipse|fe.*|filter|g|image|line|.*Gradient|marker|mask|mpath|path|pattern|polygon|polyline|rect|set|stop|style|svg|switch|symbol|text|textPath|title|tspan|use|view|g)/i
  , zY = (e, t) => {
    const n = e.match(n2) || [];
    let i = n[0] || e;
    return t === "small" && n[1] && (i = n[1]),
    i
}
;
async function VY(e) {
    var i;
    const t = t2[e];
    if (!t.startsWith(DY))
        throw new Error(`Invalid icon URL: ${t}`);
    const n = await fetch(t, {
        cache: "force-cache"
    });
    if (!n.ok)
        throw new Error(`Failed to fetch icon: ${n.statusText}`);
    if (!((i = n.headers.get("content-type")) != null && i.startsWith("image/svg+xml")))
        throw new Error("Invalid icon content type");
    return n.text().then(HY)
}
function UY(e) {
    const t = $Y(e);
    return Nv[t] || (Nv[t] = VY(t)),
    Nv[t]
}
function $Y(e) {
    if (!(e in t2))
        throw new Error("Invalid icon type");
    return e
}
function HY(e) {
    return (e.match(n2) || []).map(WY).join("")
}
function WY(e) {
    const t = new DOMParser().parseFromString(e, "image/svg+xml")
      , {firstChild: n} = t;
    if (!n || n.nodeName !== "svg")
        throw new Error("Invalid SVG");
    const i = t.createNodeIterator(n, NodeFilter.SHOW_ELEMENT);
    let a;
    for (; a = i.nextNode(); )
        qY(a);
    return new XMLSerializer().serializeToString(n)
}
function qY(e) {
    var n;
    if (!BY.test(e.nodeName)) {
        (n = e.parentNode) == null || n.removeChild(e);
        return
    }
    const t = e;
    t !== void 0 && Array.from(t.attributes).filter(i => OY.test(i.name)).forEach(i => t.removeAttribute(i.name))
}
function GY({element: e}) {
    const {color: t, tone: n, type: i, size: a} = e
      , r = ry(null)
      , s = ry(0);
    return eb( () => {
        if (r.current.firstElementChild === null && (s.current = performance.now()),
        i === "" || i === "empty") {
            i === "" && Us(e, "Icon component rendered with no type. Rendering an empty space instead."),
            r.current.innerHTML = "";
            return
        }
        let l = !1;
        const c = Nv[i] !== void 0;
        return UY(i).then(d => {
            if (l || !d)
                return;
            r.current.innerHTML = zY(d, a),
            performance.now() - s.current > 100 && !c && r.current.animate({
                opacity: [0, 1]
            }, {
                duration: 100,
                easing: "linear"
            })
        }
        ).catch(d => {
            l || (Us(e, "Icon Fetch Helper", `Failed to fetch icon with type "${i}"`, d),
            r.current.innerHTML = "")
        }
        ),
        () => {
            l = !0
        }
    }
    , [i, a, e]),
    Kn("span", {
        "aria-hidden": !0,
        ref: r,
        class: nb({
            icon: !0,
            [`color-${t}`]: !0,
            [`tone-${n}`]: !0,
            [`size-${a}`]: !0
        })
    })
}
const KY = ".icon{display:block;margin-inline:var(--s-icon-margin-inline-25041);color:var(--s-icon-color-25041, rgba(74, 74, 74, 1));block-size:1.25rem;inline-size:1.25rem;line-height:1}svg{fill:currentColor;overflow:visible}@media (min-width:48rem),(pointer:fine){svg{margin:.125rem}}.size-small{block-size:1rem;inline-size:1rem}.color-base.tone-info{color:#0094d5}.color-base.tone-success{color:#047b5d}.color-base.tone-caution{color:#998a00}.color-base.tone-warning{color:#b28400}.color-base.tone-critical{color:#e22c38}.color-subdued.tone-auto,.color-subdued.tone-neutral{color:#8a8a8a}.color-base.tone-ai{color:#8051ff}.color-base.tone-brand{color:#1a1a1a}.color-base.tone-highlight{color:#005bd3}.tone-legacy-inherit:is(.color-base,.color-subdued){color:inherit}";
function QY(e) {
    return Kn(GY, {
        element: e
    })
}
const ZY = {
    __proto__: null,
    ShadowRoot: QY,
    styles: KY
}
  , YY = [...Object.keys(p_), ...FY]
  , JY = [...MY, "ai", "brand", "highlight", "legacy-inherit"];
( () => {
    var C, x, A, _, w;
    let e = [d_(e2)], t, n = [], i, a = tb, r, s = [], l = [], c, d = [], p = [], f, v = [], g = [], y, b = [], k = [];
    return w = class extends a {
        [k: string]: any;
        constructor() {
            super(ZY);
            vt(this, C, je(this, s, void 0));
            vt(this, x, (je(this, l),
            je(this, d, void 0)));
            vt(this, A, (je(this, p),
            je(this, v, void 0)));
            vt(this, _, (je(this, g),
            je(this, b, void 0)));
            je(this, k)
        }
        get color() {
            return rt(this, C)
        }
        set color(I) {
            yt(this, C, I)
        }
        get tone() {
            return rt(this, x)
        }
        set tone(I) {
            yt(this, x, I)
        }
        get type() {
            return rt(this, A)
        }
        set type(I) {
            yt(this, A, I)
        }
        get size() {
            return rt(this, _)
        }
        set size(I) {
            yt(this, _, I)
        }
    }
    ,
    C = new WeakMap,
    x = new WeakMap,
    A = new WeakMap,
    _ = new WeakMap,
    i = w,
    ( () => {
        const I = typeof Symbol == "function" && Symbol.metadata ? Object.create(a[Symbol.metadata] ?? null) : void 0;
        r = [jt(bn(EY, {
            defaultValue: "base"
        }))],
        c = [jt(bn(JY, {
            defaultValue: "auto"
        }))],
        f = [jt(bn(YY, {
            defaultValue: ""
        }))],
        y = [jt(bn(RY, {
            defaultValue: "base"
        }))],
        Tt(w, null, r, {
            kind: "accessor",
            name: "color",
            static: !1,
            private: !1,
            access: {
                has: L => "color"in L,
                get: L => L.color,
                set: (L, R) => {
                    L.color = R
                }
            },
            metadata: I
        }, s, l),
        Tt(w, null, c, {
            kind: "accessor",
            name: "tone",
            static: !1,
            private: !1,
            access: {
                has: L => "tone"in L,
                get: L => L.tone,
                set: (L, R) => {
                    L.tone = R
                }
            },
            metadata: I
        }, d, p),
        Tt(w, null, f, {
            kind: "accessor",
            name: "type",
            static: !1,
            private: !1,
            access: {
                has: L => "type"in L,
                get: L => L.type,
                set: (L, R) => {
                    L.type = R
                }
            },
            metadata: I
        }, v, g),
        Tt(w, null, y, {
            kind: "accessor",
            name: "size",
            static: !1,
            private: !1,
            access: {
                has: L => "size"in L,
                get: L => L.size,
                set: (L, R) => {
                    L.size = R
                }
            },
            metadata: I
        }, b, k),
        Tt(null, t = {
            value: i
        }, e, {
            kind: "class",
            name: i.name,
            metadata: I
        }, null, n),
        i = t.value,
        I && Object.defineProperty(i, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: I
        }),
        je(i, n)
    }
    )(),
    i
}
)();






var yI = {
    Spinner: "Polaris-Spinner",
    sizeSmall: "Polaris-Spinner--sizeSmall",
    sizeLarge: "Polaris-Spinner--sizeLarge"
}
  , lr = {
    root: "Polaris-Text--root",
    block: "Polaris-Text--block",
    truncate: "Polaris-Text--truncate",
    lineClamp: "Polaris-Text--lineClamp",
    visuallyHidden: "Polaris-Text--visuallyHidden",
    start: "Polaris-Text--start",
    center: "Polaris-Text--center",
    end: "Polaris-Text--end",
    justify: "Polaris-Text--justify",
    base: "Polaris-Text--base",
    inherit: "Polaris-Text--inherit",
    disabled: "Polaris-Text--disabled",
    success: "Polaris-Text--success",
    critical: "Polaris-Text--critical",
    caution: "Polaris-Text--caution",
    warning: "Polaris-Text--warning",
    "warning-secondary": "Polaris-Text__warning--secondary",
    subdued: "Polaris-Text--subdued",
    magic: "Polaris-Text--magic",
    "magic-subdued": "Polaris-Text__magic--subdued",
    "text-inverse": "Polaris-Text__text--inverse",
    "text-inverse-secondary": "Polaris-Text--textInverseSecondary",
    headingXs: "Polaris-Text--headingXs",
    headingSm: "Polaris-Text--headingSm",
    headingMd: "Polaris-Text--headingMd",
    headingLg: "Polaris-Text--headingLg",
    headingXl: "Polaris-Text--headingXl",
    heading2xl: "Polaris-Text--heading2xl",
    heading3xl: "Polaris-Text--heading3xl",
    bodyXs: "Polaris-Text--bodyXs",
    bodySm: "Polaris-Text--bodySm",
    bodyMd: "Polaris-Text--bodyMd",
    bodyLg: "Polaris-Text--bodyLg",
    regular: "Polaris-Text--regular",
    medium: "Polaris-Text--medium",
    semibold: "Polaris-Text--semibold",
    bold: "Polaris-Text--bold",
    breakNever: "Polaris-Text--breakNever",
    breakAlways: "Polaris-Text--breakAlways",
    numeric: "Polaris-Text--numeric",
    "line-through": "Polaris-Text__line--through"
};
const bI = ["span", "strong"]
  , ee = ({alignment: e, as: t, breakWord: n, children: i, tone: a, fontWeight: r, id: s, numeric: l=!1, truncate: c=!1, variant: d, visuallyHidden: p=!1, textDecorationLine: f, lineClamp: v}) => {
    const g = t || (p ? "span" : "p")
      , y = c && !v
      , b = G(lr.root, d && lr[d], r && lr[r], (e || y) && lr.block, e && lr[e], n === !0 && lr.breakAlways, n === !1 && lr.breakNever, a && lr[a], l && lr.numeric, y && lr.truncate, p && lr.visuallyHidden, f && lr[f], v && !bI.includes(t) && lr.lineClamp)
      , k = new Set(["h1", "h2", "h3", "h4", "h5", "h6"])
      , C = React.useMemo( () => {
        if (v && !bI.includes(t))
            return {
                "--pc-text-line-clamp": v
            }
    }
    , [v, t]);
    return React.createElement(g, {
        className: b,
        tabIndex: k.has(t) ? -1 : void 0,
        style: C,
        ...s && {
            id: s
        },
        children: i
    })
}
;
function er({size: e="large", accessibilityLabel: t, hasFocusableParent: n}) {
    const i = vm()
      , a = G(yI.Spinner, e && yI[$t("size", e)])
      , r = e === "large" ? React.createElement("svg", {
        viewBox: "0 0 44 44",
        xmlns: "http://www.w3.org/2000/svg",
        children: React.createElement("path", {
            d: "M15.542 1.487A21.507 21.507 0 00.5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 00-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 10-.9-2.863z"
        })
    }) : React.createElement("svg", {
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: React.createElement("path", {
            d: "M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
        })
    })
      , s = {
        ...!n && {
            role: "status"
        }
    }
      , l = (i || !n) && React.createElement(ee, {
        as: "span",
        visuallyHidden: !0,
        children: t
    });
    return React.createElement(React.Fragment, {
        children: [React.createElement("span", {
            className: a,
            children: r
        }), React.createElement("span", {
            ...s,
            children: l
        })]
    })
}
function tJ(e, t) {
    const n = React.useCallback(i => {
        e && (i.preventDefault(),
        i.stopPropagation())
    }
    , [e]);
    return e ? n : t
}
function nJ() {
    return React.useContext(TD)
}
const Bi = React.memo(React.forwardRef(function(t, n) {
    const i = nJ();
    if (i)
        return React.createElement(i, {
            ...HP.props,
            ...t,
            ref: n
        });
    const {external: a, url: r, target: s, ...l} = t;
    let c;
    a ? c = "_blank" : c = s ?? void 0;
    const d = c === "_blank" ? "noopener noreferrer" : void 0;
    return React.createElement("a", {
        target: c,
        ...l,
        href: r,
        rel: d,
        ...HP.props,
        ref: n
    })
}));
function Pi({id: e, children: t, className: n, url: i, external: a, target: r, download: s, submit: l, disabled: c, loading: d, pressed: p, accessibilityLabel: f, role: v, ariaControls: g, ariaExpanded: y, ariaDescribedBy: b, ariaChecked: k, form: C, onClick: x, onFocus: A, onBlur: _, onKeyDown: w, onKeyPress: T, onKeyUp: P, onMouseEnter: I, onTouchStart: L, ...R}) {
    let D;
    const M = {
        id: e,
        className: n,
        "aria-label": f
    }
      , O = {
        ...M,
        role: v,
        onClick: x,
        onFocus: A,
        onBlur: _,
        onMouseUp: cu,
        onMouseEnter: I,
        onTouchStart: L
    }
      , z = tJ(c, x);
    return i ? D = c ? React.createElement("a", {
        ...M,
        role: v ?? "link",
        "aria-disabled": c,
        children: t
    }) : React.createElement(Bi, {
        ...O,
        url: i,
        external: a,
        target: r,
        download: s,
        ...R,
        children: t
    }) : D = React.createElement("button", {
        ...O,
        "aria-disabled": c,
        type: l ? "submit" : "button",
        "aria-busy": d ? !0 : void 0,
        "aria-controls": g,
        "aria-expanded": y,
        "aria-describedby": b,
        "aria-checked": k,
        "aria-pressed": p,
        form: C,
        onKeyDown: w,
        onKeyUp: P,
        onKeyPress: T,
        onClick: z,
        tabIndex: c ? -1 : void 0,
        ...R,
        children: t
    }),
    D
}
class ib extends Error {
    [k: string]: any;
    constructor(t="") {
        super(`${t && `${t} `}Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.`),
        this.name = "MissingAppProviderError"
    }
}
function at() {
    const e = React.useContext(ND);
    if (!e)
        throw new ib("No i18n was provided.");
    return e
}
function nt({id: e, children: t, url: n, disabled: i, external: a, download: r, target: s, submit: l, loading: c, pressed: d, accessibilityLabel: p, role: f, ariaControls: v, ariaExpanded: g, ariaDescribedBy: y, ariaChecked: b, form: k, onClick: C, onFocus: x, onBlur: A, onKeyDown: _, onKeyPress: w, onKeyUp: T, onMouseEnter: P, onTouchStart: I, onPointerDown: L, icon: R, disclosure: D, removeUnderline: M, size: O="medium", textAlign: z="center", fullWidth: B, dataPrimaryLink: H, tone: q, variant: W="secondary"}) {
    const V = at()
      , $ = i || c
      , Q = G(_i.Button, _i.pressable, _i[$t("variant", W)], _i[$t("size", O)], _i[$t("textAlign", z)], B && _i.fullWidth, D && _i.disclosure, R && t && _i.iconWithText, R && t == null && _i.iconOnly, $ && _i.disabled, c && _i.loading, d && !i && !n && _i.pressed, M && _i.removeUnderline, q && _i[$t("tone", q)])
      , K = D ? React.createElement("span", {
        className: G(_i.DisclosureIcon, c && _i.hidden, _i.Icon),
        children: React.createElement(Fe, {
            type: iJ(D, "chevron-up", "chevron-down"),
            tone: "legacy-inherit"
        })
    }) : null;
    let J;
    So(R) ? J = React.createElement(Fe, {
        type: R,
        tone: "legacy-inherit"
    }) : J = R;
    const X = J ? React.createElement("span", {
        className: G(c && _i.hidden, _i.Icon),
        children: J
    }) : null
      , se = ["plain", "monochromePlain"].includes(W);
    let ne = "medium";
    se ? ne = "regular" : W === "primary" && (ne = "semibold");
    let Y = "bodySm";
    (O === "large" || se && O !== "micro") && (Y = "bodyMd");
    const ue = t ? React.createElement(ee, {
        as: "span",
        variant: Y,
        fontWeight: ne,
        children: t
    }, i ? "text-disabled" : "text") : null
      , ge = c ? React.createElement("span", {
        className: _i.Spinner,
        children: React.createElement(er, {
            size: "small",
            accessibilityLabel: V.translate("Polaris.Button.spinnerAccessibilityLabel")
        })
    }) : null
      , de = {
        id: e,
        className: Q,
        accessibilityLabel: p,
        ariaDescribedBy: y,
        role: f,
        form: k,
        onClick: C,
        onFocus: x,
        onBlur: A,
        onMouseUp: cu,
        onMouseEnter: P,
        onTouchStart: I,
        "data-primary-link": H
    }
      , ve = {
        url: n,
        external: a,
        download: r,
        target: s
    }
      , Le = {
        submit: l,
        disabled: $,
        loading: c,
        ariaControls: v,
        ariaExpanded: g,
        ariaChecked: b,
        pressed: d,
        onKeyDown: _,
        onKeyUp: T,
        onKeyPress: w,
        onPointerDown: L
    };
    return React.createElement(Pi, {
        ...de,
        ...ve,
        ...Le,
        children: [ge, X, ue, K]
    })
}
function iJ(e, t, n) {
    return e === "select" ? "select" : e === "up" ? t : n
}
function as(e, t={}) {
    return Array.isArray(e) ? e.map( (n, i) => Qr(n, t, i)) : Qr(e, t)
}
function Qr({content: e, onAction: t, plain: n, destructive: i, ...a}, r, s) {
    const l = n ? "plain" : void 0
      , c = i ? "primary" : void 0
      , d = !(r != null && r.tone) && i ? "critical" : r == null ? void 0 : r.tone;
    return React.createElement(nt, {
        onClick: t,
        tone: d,
        variant: l || c,
        ...a,
        ...r,
        children: e
    }, s)
}
var aJ = {
    Card: "Polaris-Card"
}
  , Ag = {
    listReset: "Polaris-Box--listReset",
    Box: "Polaris-Box",
    visuallyHidden: "Polaris-Box--visuallyHidden",
    printHidden: "Polaris-Box--printHidden"
};
const he = React.forwardRef( ({as: e="div", background: t, borderColor: n, borderStyle: i, borderWidth: a, borderBlockStartWidth: r, borderBlockEndWidth: s, borderInlineStartWidth: l, borderInlineEndWidth: c, borderRadius: d, borderEndStartRadius: p, borderEndEndRadius: f, borderStartStartRadius: v, borderStartEndRadius: g, children: y, color: b, id: k, minHeight: C, minWidth: x, maxWidth: A, overflowX: _, overflowY: w, outlineColor: T, outlineStyle: P, outlineWidth: I, padding: L, paddingBlock: R, paddingBlockStart: D, paddingBlockEnd: M, paddingInline: O, paddingInlineStart: z, paddingInlineEnd: B, role: H, shadow: q, tabIndex: W, width: V, printHidden: $, visuallyHidden: Q, position: K, insetBlockStart: J, insetBlockEnd: X, insetInlineStart: se, insetInlineEnd: ne, zIndex: Y, opacity: ue, ...ge}, de) => {
    const ve = i || (n || a || r || s || l || c ? "solid" : void 0)
      , Le = P || (T || I ? "solid" : void 0)
      , Ce = {
        "--pc-box-color": b ? `var(--p-color-${b})` : void 0,
        "--pc-box-background": t ? `var(--p-color-${t})` : void 0,
        "--pc-box-border-color": n ? n === "transparent" ? "transparent" : `var(--p-color-${n})` : void 0,
        "--pc-box-border-style": ve,
        "--pc-box-border-radius": d ? `var(--p-border-radius-${d})` : void 0,
        "--pc-box-border-end-start-radius": p ? `var(--p-border-radius-${p})` : void 0,
        "--pc-box-border-end-end-radius": f ? `var(--p-border-radius-${f})` : void 0,
        "--pc-box-border-start-start-radius": v ? `var(--p-border-radius-${v})` : void 0,
        "--pc-box-border-start-end-radius": g ? `var(--p-border-radius-${g})` : void 0,
        "--pc-box-border-width": a ? `var(--p-border-width-${a})` : void 0,
        "--pc-box-border-block-start-width": r ? `var(--p-border-width-${r})` : void 0,
        "--pc-box-border-block-end-width": s ? `var(--p-border-width-${s})` : void 0,
        "--pc-box-border-inline-start-width": l ? `var(--p-border-width-${l})` : void 0,
        "--pc-box-border-inline-end-width": c ? `var(--p-border-width-${c})` : void 0,
        "--pc-box-min-height": C,
        "--pc-box-min-width": x,
        "--pc-box-max-width": A,
        "--pc-box-outline-color": T ? `var(--p-color-${T})` : void 0,
        "--pc-box-outline-style": Le,
        "--pc-box-outline-width": I ? `var(--p-border-width-${I})` : void 0,
        "--pc-box-overflow-x": _,
        "--pc-box-overflow-y": w,
        ...fa("box", "padding-block-start", "space", D || R || L),
        ...fa("box", "padding-block-end", "space", M || R || L),
        ...fa("box", "padding-inline-start", "space", z || O || L),
        ...fa("box", "padding-inline-end", "space", B || O || L),
        "--pc-box-shadow": q ? `var(--p-shadow-${q})` : void 0,
        "--pc-box-width": V,
        position: K,
        "--pc-box-inset-block-start": J ? `var(--p-space-${J})` : void 0,
        "--pc-box-inset-block-end": X ? `var(--p-space-${X})` : void 0,
        "--pc-box-inset-inline-start": se ? `var(--p-space-${se})` : void 0,
        "--pc-box-inset-inline-end": ne ? `var(--p-space-${ne})` : void 0,
        zIndex: Y,
        opacity: ue
    }
      , Ae = G(Ag.Box, Q && Ag.visuallyHidden, $ && Ag.printHidden, e === "ul" && Ag.listReset);
    return React.createElement(e, {
        className: Ae,
        id: k,
        ref: de,
        style: hm(Ce),
        role: H,
        tabIndex: W,
        ...ge
    }, y)
}
);
he.displayName = "Box";
const rs = ({children: e, background: t="bg-surface", padding: n={
    xs: "400"
}, roundedAbove: i="sm"}) => {
    const a = {
        [i]: !0
    };
    return React.createElement(gm.Provider, {
        value: !0,
        children: React.createElement("div", {
            className: aJ.Card,
            style: {
                "--pc-card-background": t ? `var(--p-color-${t})` : void 0,
                ...sf("card", "box-shadow", kI(a, r => r ? "var(--p-shadow-100)" : "none")),
                ...sf("card", "border-radius", kI(a, r => r ? "var(--p-border-radius-300)" : "var(--p-border-radius-0)"))
            },
            children: React.createElement(he, {
                background: t,
                padding: n,
                overflowX: "clip",
                overflowY: "clip",
                minHeight: "100%",
                children: e
            })
        })
    })
}
;
function kI(e, t) {
    return typeof e == "boolean" ? t(e) : Object.fromEntries(Object.entries(e).map( ([n,i]) => [n, t(i)]))
}
function f_(e) {
    if (Object.keys(e).length === 0)
        return;
    const t = {};
    for (const n in e)
        n.startsWith("aria-") && (t[n] = e[n]);
    return t
}
var rJ = {
    InlineStack: "Polaris-InlineStack"
};
const Te = function({as: t="div", align: n, direction: i="row", blockAlign: a, gap: r, wrap: s=!0, children: l, ...c}) {
    const d = {
        "--pc-inline-stack-align": n,
        "--pc-inline-stack-block-align": a,
        "--pc-inline-stack-wrap": s ? "wrap" : "nowrap",
        ...fa("inline-stack", "row-gap", "space", Array.isArray(r) ? r[0] : r),
        ...fa("inline-stack", "column-gap", "space", Array.isArray(r) ? r[1] : r),
        ...sf("inline-stack", "flex-direction", i)
    }
      , p = f_(c);
    return React.createElement(t, {
        className: rJ.InlineStack,
        style: d,
        ...p,
        children: l
    })
};
var GS = {
    BlockStack: "Polaris-BlockStack",
    listReset: "Polaris-BlockStack--listReset",
    fieldsetReset: "Polaris-BlockStack--fieldsetReset"
};
const ft = ({as: e="div", children: t, align: n, inlineAlign: i, gap: a, id: r, reverseOrder: s=!1, ...l}) => {
    const c = G(GS.BlockStack, (e === "ul" || e === "ol") && GS.listReset, e === "fieldset" && GS.fieldsetReset)
      , d = {
        "--pc-block-stack-align": n ? `${n}` : null,
        "--pc-block-stack-inline-align": i ? `${i}` : null,
        "--pc-block-stack-order": s ? "column-reverse" : "column",
        ...fa("block-stack", "gap", "space", a)
    };
    return React.createElement(e, {
        className: c,
        id: r,
        style: hm(d),
        ...l
    }, t)
}
;
var Bo = {
    Avatar: "Polaris-Avatar",
    imageHasLoaded: "Polaris-Avatar--imageHasLoaded",
    Text: "Polaris-Avatar__Text",
    long: "Polaris-Avatar--long",
    hidden: "Polaris-Avatar--hidden",
    sizeXs: "Polaris-Avatar--sizeXs",
    sizeSm: "Polaris-Avatar--sizeSm",
    sizeMd: "Polaris-Avatar--sizeMd",
    sizeLg: "Polaris-Avatar--sizeLg",
    sizeXl: "Polaris-Avatar--sizeXl",
    styleOne: "Polaris-Avatar--styleOne",
    styleTwo: "Polaris-Avatar--styleTwo",
    styleThree: "Polaris-Avatar--styleThree",
    styleFour: "Polaris-Avatar--styleFour",
    styleFive: "Polaris-Avatar--styleFive",
    styleSix: "Polaris-Avatar--styleSix",
    styleSeven: "Polaris-Avatar--styleSeven",
    Image: "Polaris-Avatar__Image",
    Initials: "Polaris-Avatar__Initials",
    Svg: "Polaris-Avatar__Svg"
};
const Tn = React.forwardRef( ({alt: e, sourceSet: t, source: n, crossOrigin: i, onLoad: a, className: r, ...s}, l) => {
    const c = t ? t.map( ({source: p, descriptor: f}) => `${p} ${f}`).join(",") : null
      , d = React.useCallback( () => {
        a && a()
    }
    , [a]);
    return React.createElement("img", {
        ref: l,
        alt: e,
        src: n,
        crossOrigin: i,
        className: r,
        onLoad: d,
        ...c ? {
            srcSet: c
        } : {},
        ...s
    })
}
);
Tn.displayName = "Image";
var Ps = function(e) {
    return e.Pending = "PENDING",
    e.Loaded = "LOADED",
    e.Errored = "ERRORED",
    e
}(Ps || {});
const KS = ["one", "two", "three", "four", "five", "six", "seven"]
  , SI = {
    xs: "3",
    sm: "2.5",
    md: "2.5",
    lg: "2.5",
    xl: "2"
};
function oJ(e) {
    let t = 0;
    for (const n of e)
        t ^= n.charCodeAt(0);
    return t
}
function sJ(e) {
    return e ? KS[oJ(e) % KS.length] : KS[0]
}
function ab({name: e, source: t, onError: n, initials: i, customer: a, size: r="md", accessibilityLabel: s}) {
    const l = at()
      , c = vm()
      , [d,p] = React.useState(Ps.Pending);
    React.useEffect( () => {
        p(Ps.Pending)
    }
    , [t]);
    const f = React.useCallback( () => {
        p(Ps.Errored),
        n && n()
    }
    , [n])
      , v = React.useCallback( () => {
        p(Ps.Loaded)
    }
    , [])
      , g = t && d !== Ps.Errored
      , y = e || i;
    let b;
    if (s)
        b = s;
    else if (e)
        b = e;
    else if (i) {
        const I = i.split("").join(" ");
        b = l.translate("Polaris.Avatar.labelWithInitials", {
            initials: I
        })
    }
    const k = G(Bo.Avatar, r && Bo[$t("size", r)], g && d === Ps.Loaded && Bo.imageHasLoaded, !a && !g && Bo[$t("style", sJ(y))])
      , C = G(Bo.Text, ((i == null ? void 0 : i.length) || 0) > 2 && Bo.long)
      , x = G(Bo.Image, d !== Ps.Loaded && Bo.hidden)
      , A = t && c && d !== Ps.Errored ? React.createElement(Tn, {
        className: x,
        source: t,
        alt: "",
        role: "presentation",
        onLoad: v,
        onError: f
    }) : null
      , _ = "0.35em"
      , w = React.createElement(React.Fragment, {
        children: [React.createElement("path", {
            fill: "none",
            d: "M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z",
            stroke: "currentColor",
            strokeWidth: SI[r]
        }), React.createElement("path", {
            fill: "none",
            d: "M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z",
            stroke: "currentColor",
            strokeWidth: SI[r],
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })]
    })
      , T = a || !i ? w : React.createElement("text", {
        className: C,
        x: "50%",
        y: "50%",
        dy: _,
        fill: "currentColor",
        textAnchor: "middle",
        children: i
    })
      , P = g ? null : React.createElement("span", {
        className: Bo.Initials,
        children: React.createElement("svg", {
            className: Bo.Svg,
            viewBox: "0 0 40 40",
            children: T
        })
    });
    return React.createElement("span", {
        "aria-label": b,
        role: b ? "img" : "presentation",
        className: k,
        children: [P, A]
    })
}
const i2 = React.createContext(!1);
function lJ({children: e, filterActions: t}) {
    return React.createElement(i2.Provider, {
        value: t,
        children: e
    })
}
var Ha = {
    Item: "Polaris-ActionList__Item",
    default: "Polaris-ActionList--default",
    Prefix: "Polaris-ActionList__Prefix",
    Suffix: "Polaris-ActionList__Suffix",
    ContentElement: "Polaris-ActionList__ContentElement",
    active: "Polaris-ActionList--active",
    destructive: "Polaris-ActionList--destructive",
    disabled: "Polaris-ActionList--disabled",
    indented: "Polaris-ActionList--indented",
    menu: "Polaris-ActionList--menu",
    Text: "Polaris-ActionList__Text"
};
const a2 = React.createContext(!1);
var Nc = {
    Badge: "Polaris-Badge",
    toneSuccess: "Polaris-Badge--toneSuccess",
    "toneSuccess-strong": "Polaris-Badge__toneSuccess--strong",
    toneInfo: "Polaris-Badge--toneInfo",
    "toneInfo-strong": "Polaris-Badge__toneInfo--strong",
    toneAttention: "Polaris-Badge--toneAttention",
    "toneAttention-strong": "Polaris-Badge__toneAttention--strong",
    toneWarning: "Polaris-Badge--toneWarning",
    "toneWarning-strong": "Polaris-Badge__toneWarning--strong",
    toneCritical: "Polaris-Badge--toneCritical",
    "toneCritical-strong": "Polaris-Badge__toneCritical--strong",
    toneNew: "Polaris-Badge--toneNew",
    toneMagic: "Polaris-Badge--toneMagic",
    "toneRead-only": "Polaris-Badge__toneRead--only",
    toneEnabled: "Polaris-Badge--toneEnabled",
    sizeLarge: "Polaris-Badge--sizeLarge",
    withinFilter: "Polaris-Badge--withinFilter",
    Icon: "Polaris-Badge__Icon"
};
let cr = function(e) {
    return e.Info = "info",
    e.Success = "success",
    e.Warning = "warning",
    e.Critical = "critical",
    e.Attention = "attention",
    e.New = "new",
    e.Magic = "magic",
    e.InfoStrong = "info-strong",
    e.SuccessStrong = "success-strong",
    e.WarningStrong = "warning-strong",
    e.CriticalStrong = "critical-strong",
    e.AttentionStrong = "attention-strong",
    e.ReadOnly = "read-only",
    e.Enabled = "enabled",
    e
}({})
  , QS = function(e) {
    return e.Incomplete = "incomplete",
    e.PartiallyComplete = "partiallyComplete",
    e.Complete = "complete",
    e
}({});
function r2(e, t, n) {
    let i = ""
      , a = "";
    if (!t && !n)
        return "";
    switch (t) {
    case QS.Incomplete:
        i = e.translate("Polaris.Badge.PROGRESS_LABELS.incomplete");
        break;
    case QS.PartiallyComplete:
        i = e.translate("Polaris.Badge.PROGRESS_LABELS.partiallyComplete");
        break;
    case QS.Complete:
        i = e.translate("Polaris.Badge.PROGRESS_LABELS.complete");
        break
    }
    switch (n) {
    case cr.Info:
    case cr.InfoStrong:
        a = e.translate("Polaris.Badge.TONE_LABELS.info");
        break;
    case cr.Success:
    case cr.SuccessStrong:
        a = e.translate("Polaris.Badge.TONE_LABELS.success");
        break;
    case cr.Warning:
    case cr.WarningStrong:
        a = e.translate("Polaris.Badge.TONE_LABELS.warning");
        break;
    case cr.Critical:
    case cr.CriticalStrong:
        a = e.translate("Polaris.Badge.TONE_LABELS.critical");
        break;
    case cr.Attention:
    case cr.AttentionStrong:
        a = e.translate("Polaris.Badge.TONE_LABELS.attention");
        break;
    case cr.New:
        a = e.translate("Polaris.Badge.TONE_LABELS.new");
        break;
    case cr.ReadOnly:
        a = e.translate("Polaris.Badge.TONE_LABELS.readOnly");
        break;
    case cr.Enabled:
        a = e.translate("Polaris.Badge.TONE_LABELS.enabled");
        break
    }
    return !n && t ? i : n && !t ? a : e.translate("Polaris.Badge.progressAndTone", {
        progressLabel: i,
        toneLabel: a
    })
}
var ZS = {
    Pip: "Polaris-Badge-Pip",
    toneInfo: "Polaris-Badge-Pip--toneInfo",
    toneSuccess: "Polaris-Badge-Pip--toneSuccess",
    toneNew: "Polaris-Badge-Pip--toneNew",
    toneAttention: "Polaris-Badge-Pip--toneAttention",
    toneWarning: "Polaris-Badge-Pip--toneWarning",
    toneCritical: "Polaris-Badge-Pip--toneCritical",
    progressIncomplete: "Polaris-Badge-Pip--progressIncomplete",
    progressPartiallyComplete: "Polaris-Badge-Pip--progressPartiallyComplete",
    progressComplete: "Polaris-Badge-Pip--progressComplete"
};
function cJ({tone: e, progress: t="complete", accessibilityLabelOverride: n}) {
    const i = at()
      , a = G(ZS.Pip, e && ZS[$t("tone", e)], t && ZS[$t("progress", t)])
      , r = n || r2(i, t, e);
    return React.createElement("span", {
        className: a,
        children: React.createElement(ee, {
            as: "span",
            visuallyHidden: !0,
            children: r
        })
    })
}
const CI = "medium";
function uJ({tone: e, size: t, progress: n}) {
    const i = {
        complete: "enabled",
        partiallyComplete: "in-progress",
        incomplete: "incomplete"
    }[n];
    return React.createElement(Fe, {
        type: i,
        size: t === "large" ? void 0 : "small",
        tone: e === "enabled" ? "success" : "legacy-inherit"
    })
}
function rn({children: e, tone: t, progress: n, icon: i, size: a=CI, toneAndProgressLabelOverride: r}) {
    const s = at()
      , l = React.useContext(a2)
      , c = i || n
      , d = G(Nc.Badge, t && Nc[$t("tone", t)], a && a !== CI && Nc[$t("size", a)], c && Nc.withPrefix, l && Nc.withinFilter)
      , p = r || r2(s, n, t);
    let f = !!p && React.createElement(ee, {
        as: "span",
        visuallyHidden: !0,
        children: p
    });
    n && !i && (f = React.createElement("span", {
        className: Nc.Icon,
        children: [React.createElement(ee, {
            as: "span",
            visuallyHidden: !0,
            children: p
        }), React.createElement("span", {
            "aria-hidden": !0,
            children: React.createElement(uJ, {
                tone: t,
                size: a,
                progress: n
            })
        })]
    }));
    const v = React.createElement(Fe, {
        type: i,
        size: a === "large" ? void 0 : "small",
        tone: t === "enabled" ? "success" : "legacy-inherit"
    });
    return React.createElement("span", {
        className: d,
        children: [f, i && React.createElement("span", {
            className: Nc.Icon,
            children: v
        }), e && React.createElement(ee, {
            as: "span",
            variant: a === "large" ? "bodyMd" : "bodySm",
            fontWeight: "medium",
            children: e
        })]
    })
}
rn.Pip = cJ;
function Di(e) {
    const [t,n] = React.useState(e);
    return {
        value: t,
        toggle: React.useCallback( () => n(i => !i), []),
        setTrue: React.useCallback( () => n(!0), []),
        setFalse: React.useCallback( () => n(!1), [])
    }
}
var AI = {
    TooltipContainer: "Polaris-Tooltip__TooltipContainer",
    HasUnderline: "Polaris-Tooltip__HasUnderline"
};
function dJ() {
    const e = React.useContext(LD);
    if (!e)
        throw new Error("No ephemeral presence manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function mJ() {
    const e = React.useContext(n_);
    if (!e)
        throw new Error("No portals manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function Sr({children: e, idPrefix: t="", onPortalCreated: n=pJ}) {
    const i = uZ()
      , {container: a} = mJ()
      , r = React.useId()
      , s = t !== "" ? `${t}-${r}` : r;
    return React.useEffect( () => {
        n()
    }
    , [n]),
    a ? es.createPortal(React.createElement(uD, {
        theme: fZ(i) ? i : lu,
        "data-portal-id": s,
        children: e
    }), a) : null
}
function pJ() {}
var Al = {
    TooltipOverlay: "Polaris-Tooltip-TooltipOverlay",
    Tail: "Polaris-Tooltip-TooltipOverlay__Tail",
    positionedAbove: "Polaris-Tooltip-TooltipOverlay--positionedAbove",
    measuring: "Polaris-Tooltip-TooltipOverlay--measuring",
    measured: "Polaris-Tooltip-TooltipOverlay--measured",
    instant: "Polaris-Tooltip-TooltipOverlay--instant",
    Content: "Polaris-Tooltip-TooltipOverlay__Content",
    default: "Polaris-Tooltip-TooltipOverlay--default",
    wide: "Polaris-Tooltip-TooltipOverlay--wide"
};
function fJ(e, t, n, i, a, r, s, l=0, c=!1) {
    const d = e.top
      , p = d + e.height
      , f = e.top - l
      , v = a.height - e.top - e.height
      , g = t.height
      , y = n.activator + n.container
      , b = n.container
      , k = e.top - Math.max(i.top, 0)
      , C = a.top + Math.min(a.height, i.top + i.height) - (e.top + e.height)
      , x = k >= b
      , A = C >= b
      , _ = c ? g : Math.min(f, g)
      , w = c ? g : Math.min(v, g)
      , T = Math.min(f + e.height, g)
      , P = Math.min(v + e.height, g)
      , I = s ? 0 : a.top
      , L = {
        height: _ - y,
        top: d + I - _,
        heightDiff: g - f,
        positioning: "above"
    }
      , R = {
        height: w - y,
        top: p + I,
        heightDiff: g - v,
        positioning: "below"
    }
      , D = {
        height: P - y,
        top: d + I,
        heightDiff: 0,
        positioning: "cover"
    }
      , M = {
        height: T - y,
        top: d + I - _ + e.height + y,
        heightDiff: 0,
        positioning: "cover"
    };
    return r === "above" ? (x || k >= C && !A) && (f > g || f > v) ? L : R : r === "below" ? (A || C >= k && !x) && (v > g || v > f) ? R : L : r === "cover" ? (A || C >= k && !x) && (v + e.height > g || v > f) ? D : M : x && A ? f > v ? L : R : k > b ? L : R
}
function hJ(e, t, n, i, a) {
    const r = n.width - t.width;
    if (a === "left")
        return Math.min(r, Math.max(0, e.left - i.horizontal));
    if (a === "right") {
        const s = n.width - (e.left + e.width);
        return Math.min(r, Math.max(0, s - i.horizontal))
    }
    return Math.min(r, Math.max(0, e.center.x - t.width / 2))
}
function gJ(e, t) {
    const {center: n} = e;
    return n.y < t.top || n.y > t.top + t.height
}
function vJ(e, t=o2()) {
    const n = Math.max(e.top, 0)
      , i = Math.max(e.left, 0)
      , a = Math.min(e.top + e.height, t.height)
      , r = Math.min(e.left + e.width, t.width);
    return new lf({
        top: n,
        left: i,
        height: a - n,
        width: r - i
    })
}
function o2(e) {
    var t, n;
    return new lf({
        top: window.scrollY,
        left: window.scrollX,
        height: e && ((t = window.visualViewport) != null && t.height) ? (n = window.visualViewport) == null ? void 0 : n.height : window.innerHeight,
        width: document.body.clientWidth
    })
}
var YS = {
    PositionedOverlay: "Polaris-PositionedOverlay",
    fixed: "Polaris-PositionedOverlay--fixed",
    preventInteraction: "Polaris-PositionedOverlay--preventInteraction"
};
const xI = Symbol("unique_identifier");
function s2(e) {
    const t = React.useRef(xI);
    return t.current === xI && (t.current = e()),
    t
}
function Vf(e) {
    const t = vm()
      , n = React.useRef(!1);
    if (t && !n.current)
        return n.current = !0,
        e()
}
const l2 = React.createContext(void 0);
var xl = {
    Scrollable: "Polaris-Scrollable",
    focusable: "Polaris-Scrollable--focusable",
    hasTopShadow: "Polaris-Scrollable--hasTopShadow",
    hasBottomShadow: "Polaris-Scrollable--hasBottomShadow",
    horizontal: "Polaris-Scrollable--horizontal",
    vertical: "Polaris-Scrollable--vertical",
    scrollbarWidthThin: "Polaris-Scrollable--scrollbarWidthThin",
    scrollbarWidthNone: "Polaris-Scrollable--scrollbarWidthNone",
    scrollbarWidthAuto: "Polaris-Scrollable--scrollbarWidthAuto",
    scrollbarGutterStable: "Polaris-Scrollable--scrollbarGutterStable",
    "scrollbarGutterStableboth-edges": "Polaris-Scrollable__scrollbarGutterStableboth--edges"
};
function yJ() {
    const e = React.useRef(null)
      , t = React.useContext(l2);
    React.useEffect( () => {
        !t || !e.current || t(e.current.offsetTop)
    }
    , [t]);
    const n = React.useId();
    return React.createElement("a", {
        id: n,
        ref: e
    })
}
const _I = 100
  , c2 = 2
  , u2 = React.forwardRef( ({children: e, className: t, horizontal: n=!0, vertical: i=!0, shadow: a, hint: r, focusable: s, scrollbarWidth: l="thin", scrollbarGutter: c, onScrolledToBottom: d, ...p}, f) => {
    const [v,g] = React.useState(!1)
      , [y,b] = React.useState(!1)
      , k = s2( () => new xD)
      , C = React.useRef(null)
      , x = React.useCallback( (T, P={}) => {
        var R;
        const I = P.behavior || "smooth"
          , L = d2() ? "auto" : I;
        (R = C.current) == null || R.scrollTo({
            top: T,
            behavior: L
        })
    }
    , [])
      , A = React.useRef();
    React.useImperativeHandle(f || A, () => ({
        get scrollTop() {
            return C.current.scrollTop
        },
        alphaScrollTo: (...T) => C.current.scrollTo(...T),
        addEventListener: (T, P, I) => C.current.addEventListener(T, P, I),
        removeEventListener: (T, P, I) => C.current.removeEventListener(T, P, I),
        scrollTo: x,
        element: C.current
    }), [x]);
    const _ = React.useCallback( () => {
        const T = C.current;
        T && requestAnimationFrame( () => {
            const {scrollTop: P, clientHeight: I, scrollHeight: L} = T
              , R = L > I
              , D = P > 0
              , M = P + I >= L - c2;
            g(D),
            b(!M),
            R && M && d && d()
        }
        )
    }
    , [d]);
    Vf( () => {
        _(),
        r && requestAnimationFrame( () => bJ(C.current))
    }
    ),
    React.useEffect( () => {
        var L;
        const T = C.current;
        if (!T || !window.ResizeObserver)
            return;
        const P = ji(_, 50, {
            trailing: !0
        })
          , I = new ResizeObserver(P);
        return (L = k.current) == null || L.setContainer(T),
        T.addEventListener("scroll", _),
        I.observe(T),
        () => {
            T.removeEventListener("scroll", _),
            I.disconnect()
        }
    }
    , [k, _]);
    const w = G(t, xl.Scrollable, i && xl.vertical, n && xl.horizontal, s && xl.focusable, a && v && xl.hasTopShadow, a && y && xl.hasBottomShadow, l && xl[$t("scrollbarWidth", l)], c && xl[$t("scrollbarGutter", c.replace(" ", ""))]);
    return React.createElement(l2.Provider, {
        value: x,
        children: React.createElement(t_.Provider, {
            value: k.current,
            children: React.createElement("div", {
                className: w,
                ...Ky.props,
                ...p,
                ref: C,
                tabIndex: s ? 0 : void 0,
                children: e
            })
        })
    })
}
);
u2.displayName = "Scrollable";
function d2() {
    try {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches
    } catch {
        return !1
    }
}
function bJ(e) {
    if (!e || d2())
        return;
    const t = e.scrollHeight - e.clientHeight
      , n = Math.min(_I, t) - c2
      , i = () => {
        requestAnimationFrame( () => {
            e.scrollTop >= n && (e.removeEventListener("scroll", i),
            e.scrollTo({
                top: 0,
                behavior: "smooth"
            }))
        }
        )
    }
    ;
    e.addEventListener("scroll", i),
    e.scrollTo({
        top: _I,
        behavior: "smooth"
    })
}
const kJ = e => {
    const t = e.closest(Ky.selector);
    return t instanceof HTMLElement ? t : document
}
  , La = u2 as any;
La.ScrollTo = yJ;
La.forNode = kJ;
let Ni = class extends React.PureComponent {
    [k: string]: any;
    componentDidMount() {
        this.attachListener()
    }
    componentDidUpdate({passive: t, ...n}) {
        this.detachListener(n),
        this.attachListener()
    }
    componentWillUnmount() {
        this.detachListener()
    }
    render() {
        return null
    }
    attachListener() {
        const {event: t, handler: n, capture: i, passive: a} = this.props as any;
        window.addEventListener(t, n, {
            capture: i,
            passive: a
        })
    }
    detachListener(t?) {
        const {event: n, handler: i, capture: a} = t || this.props;
        window.removeEventListener(n, i, a)
    }
}
;
const wI = {
    childList: !0,
    subtree: !0,
    characterData: !0,
    attributeFilter: ["style"]
};
let m2 = class extends React.PureComponent {
    [k: string]: any;
    constructor(n) {
        super(n);
        te(this as any, "state", {
            measuring: !0,
            activatorRect: Yo(this.props.activator),
            right: void 0,
            left: void 0,
            top: 0,
            height: 0,
            width: null,
            positioning: "below",
            zIndex: null,
            outsideScrollableContainer: !1,
            lockPosition: !1,
            chevronOffset: 0,
            scrollToFit: this.props.scrollToFit ?? !1,
            preferVisualViewportHeight: this.props.preferVisualViewportHeight ?? !1
        });
        te(this, "overlay", null);
        te(this, "scrollableContainers", []);
        te(this, "initialMeasurementDone", !1);
        te(this, "overlayDetails", () => {
            const {measuring: n, left: i, right: a, positioning: r, height: s, activatorRect: l, chevronOffset: c} = this.state;
            return {
                measuring: n,
                left: i,
                right: a,
                desiredHeight: s,
                positioning: r,
                activatorRect: l,
                chevronOffset: c
            }
        }
        );
        te(this, "setOverlay", n => {
            this.overlay = n
        }
        );
        te(this as any, "setScrollableContainers", () => {
            const n = [];
            let i = La.forNode(this.props.activator);
            if (i)
                for (n.push(i); i != null && i.parentElement; )
                    i = La.forNode(i.parentElement),
                    n.push(i);
            if (n.length === 1 && n.includes(document)) {
                const a = document.getElementById("AppFrameScrollable");
                a && n.push(a)
            }
            this.scrollableContainers = n
        }
        );
        te(this, "registerScrollHandlers", () => {
            this.scrollableContainers.forEach(n => {
                n.addEventListener("scroll", this.handleMeasurement)
            }
            )
        }
        );
        te(this, "unregisterScrollHandlers", () => {
            this.scrollableContainers.forEach(n => {
                n.removeEventListener("scroll", this.handleMeasurement)
            }
            )
        }
        );
        te(this, "handleMeasurement", () => {
            const {lockPosition: n, top: i, scrollToFit: a} = this.state;
            this.observer.disconnect(),
            this.setState( ({left: r, top: s, right: l}) => ({
                left: r,
                right: l,
                top: s,
                height: 0,
                positioning: "below",
                measuring: !0
            }), () => {
                if (this.overlay == null || this.firstScrollableContainer == null)
                    return;
                const {activator: r, preferredPosition: s="below", preferredAlignment: l="center", onScrollOut: c, fullWidth: d, fixed: p, preferInputActivator: f=!0} = this.props
                  , v = f && r.querySelector("input") || r
                  , g = Yo(v)
                  , y = Yo(this.overlay)
                  , b = AJ(this.firstScrollableContainer) ? document.body : this.firstScrollableContainer
                  , k = Yo(b)
                  , C = d || s === "cover" ? new lf({
                    ...y,
                    width: g.width
                }) : y;
                b === document.body && (k.height = document.body.scrollHeight);
                let x = 0;
                const A = document.querySelector(`${$x.selector}`);
                A && (x = A.clientHeight);
                const _ = this.overlay.firstElementChild && this.overlay.firstChild instanceof HTMLElement ? SJ(this.overlay.firstElementChild) : {
                    activator: 0,
                    container: 0,
                    horizontal: 0
                }
                  , w = o2(this.state.preferVisualViewportHeight || this.state.scrollToFit)
                  , T = CJ(r)
                  , P = T == null ? T : T + 1
                  , I = fJ(g, C, _, k, w, s, p, x, a);
                I.heightDiff > 0 && a && window.scrollTo({
                    top: I.positioning === "below" ? window.scrollY + I.heightDiff : window.scrollY - I.heightDiff
                });
                const L = hJ(g, C, w, _, l)
                  , R = g.center.x - L + _.horizontal * 2;
                this.setState({
                    measuring: !1,
                    activatorRect: Yo(r),
                    left: l !== "right" ? L : void 0,
                    right: l === "right" ? L : void 0,
                    top: n ? i : I.top,
                    lockPosition: !!p,
                    height: I.height || 0,
                    width: d || s === "cover" ? C.width : null,
                    positioning: I.positioning,
                    outsideScrollableContainer: c != null && gJ(g, vJ(k)),
                    zIndex: P,
                    chevronOffset: R
                }, () => {
                    this.overlay && (this.scheduleSecondMeasurement(),
                    this.observer.observe(this.overlay, wI),
                    this.observer.observe(r, wI))
                }
                )
            }
            )
        }
        );
        this.observer = new MutationObserver(this.handleMeasurement)
    }
    componentDidMount() {
        var n;
        this.setScrollableContainers(),
        this.scrollableContainers.length && !this.props.fixed && this.registerScrollHandlers(),
        (this.props.scrollToFit || this.props.preferVisualViewportHeight) && ((n = window.visualViewport) == null || n.addEventListener("resize", this.handleMeasurement)),
        this.handleMeasurement()
    }
    componentWillUnmount() {
        var n;
        this.observer.disconnect(),
        this.scrollableContainers.length && !this.props.fixed && this.unregisterScrollHandlers(),
        (this.props.scrollToFit || this.props.preferVisualViewportHeight) && ((n = window.visualViewport) == null || n.removeEventListener("resize", this.handleMeasurement))
    }
    componentDidUpdate() {
        const {outsideScrollableContainer: n, top: i} = this.state
          , {onScrollOut: a, active: r} = this.props;
        r && a != null && i !== 0 && n && a()
    }
    render() {
        const {left: n, right: i, top: a, zIndex: r, width: s} = this.state as any
          , {render: l, fixed: c, preventInteraction: d, classNames: p, zIndexOverride: f} = this.props as any
          , v = {
            top: a == null || isNaN(a) ? void 0 : a,
            left: n == null || isNaN(n) ? void 0 : n,
            right: i == null || isNaN(i) ? void 0 : i,
            width: s == null || isNaN(s) ? void 0 : s,
            zIndex: f || r || void 0
        }
          , g = G(YS.PositionedOverlay, c && YS.fixed, d && YS.preventInteraction, p);
        return React.createElement("div", {
            className: g,
            style: v,
            ref: this.setOverlay,
            children: [React.createElement(Ni, {
                event: "resize",
                handler: this.handleMeasurement
            }), l(this.overlayDetails())]
        })
    }
    get firstScrollableContainer() {
        return this.scrollableContainers[0] ?? null
    }
    forceUpdatePosition() {
        requestAnimationFrame(this.handleMeasurement)
    }
    scheduleSecondMeasurement() {
        this.initialMeasurementDone || (this.initialMeasurementDone = !0,
        requestAnimationFrame( () => {
            this.overlay != null && this.handleMeasurement()
        }
        ))
    }
}
;
function SJ(e) {
    const t = window.getComputedStyle(e);
    return {
        activator: parseFloat(t.marginTop || "0"),
        container: parseFloat(t.marginBottom || "0"),
        horizontal: parseFloat(t.marginLeft || "0")
    }
}
function CJ(e) {
    const t = e.closest(Hd.selector) || document.body
      , n = t === document.body ? "auto" : parseInt(window.getComputedStyle(t).zIndex || "0", 10);
    return n === "auto" || isNaN(n) ? null : n
}
function AJ(e) {
    return e === document
}
const xJ = React.createElement(React.Fragment, {
    children: [React.createElement("path", {
        d: "M18.829 8.171 11.862.921A3 3 0 0 0 7.619.838L0 8.171h1.442l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557h1.387Z",
        fill: "var(--p-color-tooltip-tail-up-border)"
    }), React.createElement("path", {
        d: "M17.442 10.171h-16v-2l6.87-6.612a2 2 0 0 1 2.83.055l6.3 6.557v2Z",
        fill: "var(--p-color-bg-surface)"
    })]
})
  , _J = React.createElement(React.Fragment, {
    children: [React.createElement("path", {
        d: "m0 2 6.967 7.25a3 3 0 0 0 4.243.083L18.829 2h-1.442l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2H0Z",
        fill: "var(--p-color-tooltip-tail-down-border)"
    }), React.createElement("path", {
        d: "M1.387 0h16v2l-6.87 6.612a2 2 0 0 1-2.83-.055L1.387 2V0Z",
        fill: "var(--p-color-bg-surface)"
    })]
});
function wJ({active: e, activator: t, preferredPosition: n="above", preventInteraction: i, id: a, children: r, accessibilityLabel: s, ariaHidden: l=!1, width: c, padding: d, borderRadius: p, zIndexOverride: f, instant: v}) {
    const g = at();
    return e ? React.createElement(m2, {
        active: e,
        activator: t,
        preferredPosition: n,
        preventInteraction: i,
        render: b,
        zIndexOverride: f
    }) : null;
    function b(k) {
        const {measuring: C, desiredHeight: x, positioning: A, chevronOffset: _} = k
          , w = G(Al.TooltipOverlay, C && Al.measuring, !C && Al.measured, v && Al.instant, A === "above" && Al.positionedAbove)
          , T = G(Al.Content, c && Al[c])
          , P = C ? void 0 : {
            minHeight: x
        }
          , I = {
            "--pc-tooltip-chevron-x-pos": `${_}px`,
            "--pc-tooltip-border-radius": p ? `var(--p-border-radius-${p})` : void 0,
            "--pc-tooltip-padding": d && d === "default" ? "var(--p-space-100) var(--p-space-200)" : `var(--p-space-${d})`
        };
        return React.createElement("div", {
            style: I,
            className: w,
            ...Hd.props,
            children: [React.createElement("svg", {
                className: Al.Tail,
                width: "19",
                height: "11",
                fill: "none",
                children: A === "above" ? _J : xJ
            }), React.createElement("div", {
                id: a,
                role: "tooltip",
                className: T,
                style: {
                    ...P,
                    ...I
                },
                "aria-label": s ? g.translate("Polaris.TooltipOverlay.accessibilityLabel", {
                    label: s
                }) : void 0,
                "aria-hidden": l,
                children: r
            })]
        })
    }
}
const NJ = 150;
function Qn({children: e, content: t, dismissOnMouseOut: n, active: i, hoverDelay: a, preferredPosition: r="above", activatorWrapper: s="span", accessibilityLabel: l, ariaHidden: c=!1, width: d="default", padding: p="default", borderRadius: f, zIndexOverride: v, hasUnderline: g, persistOnClick: y, onOpen: b, onClose: k}) {
    const C = f || "200"
      , x = s
      , {value: A, setTrue: _, setFalse: w} = Di(!!i)
      , {value: T, toggle: P} = Di(!!i && !!y)
      , [I,L] = React.useState(null)
      , {presenceList: R, addPresence: D, removePresence: M} = dJ() as any
      , O = React.useId()
      , z = React.useRef(null)
      , B = React.useRef(!1)
      , [H,q] = React.useState(!i)
      , W = React.useRef(null)
      , V = React.useRef(null)
      , $ = React.useCallback( () => {
        i !== !1 && _()
    }
    , [i, _]);
    React.useEffect( () => {
        const ve = (z.current ? i_(z.current) : null) || z.current;
        ve && (ve.tabIndex = 0,
        ve.setAttribute("aria-describedby", O),
        ve.setAttribute("data-polaris-tooltip-activator", "true"))
    }
    , [O, e]),
    React.useEffect( () => () => {
        W.current && clearTimeout(W.current),
        V.current && clearTimeout(V.current)
    }
    , []);
    const Q = React.useCallback( () => {
        q(!R.tooltip && !A),
        b == null || b(),
        D("tooltip")
    }
    , [D, R.tooltip, b, A])
      , K = React.useCallback( () => {
        k == null || k(),
        q(!1),
        A && (V.current = setTimeout( () => {
            M("tooltip")
        }
        , NJ))
    }
    , [M, k, A])
      , J = React.useCallback(de => {
        de.key === "Escape" && (K == null || K(),
        w(),
        y && P())
    }
    , [w, K, y, P]);
    React.useEffect( () => {
        i === !1 && A && (K(),
        w())
    }
    , [i, A, K, w]);
    const X = I ? React.createElement(Sr, {
        idPrefix: "tooltip",
        children: React.createElement(wJ, {
            id: O,
            preferredPosition: r,
            activator: I,
            active: A,
            accessibilityLabel: l,
            onClose: TJ,
            preventInteraction: n,
            width: d,
            padding: p,
            borderRadius: C,
            zIndexOverride: v,
            instant: !H,
            ariaHidden: c,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyMd",
                children: t
            })
        })
    }) : null
      , se = G(s === "div" && AI.TooltipContainer, g && AI.HasUnderline)
      , ne = React.useCallback(de => {
        const ve = z;
        if (de == null) {
            ve.current = null,
            L(null);
            return
        }
        de.firstElementChild instanceof HTMLElement && L(de.firstElementChild),
        ve.current = de
    }
    , []);
    return React.createElement(x, {
        onFocus: () => {
            Q(),
            $()
        }
        ,
        onBlur: () => {
            K(),
            w(),
            y && P()
        }
        ,
        onMouseLeave: ue,
        onMouseOver: ge,
        onMouseDown: y ? P : void 0,
        ref: ne,
        onKeyUp: J,
        className: se,
        children: [e, X]
    });
    function Y() {
        B.current = !0,
        a && !R.tooltip ? W.current = setTimeout( () => {
            Q(),
            $()
        }
        , a) : (Q(),
        $())
    }
    function ue() {
        W.current && (clearTimeout(W.current),
        W.current = null),
        B.current = !1,
        K(),
        T || w()
    }
    function ge() {
        !B.current && Y()
    }
}
function TJ() {}
function p2({id: e, badge: t, content: n, accessibilityLabel: i, helpText: a, url: r, onAction: s, onMouseEnter: l, icon: c, image: d, prefix: p, suffix: f, disabled: v, external: g, destructive: y, ellipsis: b, truncate: k, active: C, role: x, variant: A="default"}) {
    const _ = G(Ha.Item, v && Ha.disabled, y && Ha.destructive, C && Ha.active, A === "default" && Ha.default, A === "indented" && Ha.indented, A === "menu" && Ha.menu);
    let w = null;
    p ? w = React.createElement("span", {
        className: Ha.Prefix,
        children: p
    }) : c ? w = React.createElement("span", {
        className: Ha.Prefix,
        children: React.createElement(Fe, {
            type: c,
            tone: "legacy-inherit"
        })
    }) : d && (w = React.createElement("span", {
        role: "presentation",
        className: Ha.Prefix,
        style: {
            backgroundImage: `url(${d}`
        }
    }));
    let T = n || "";
    k && n ? T = React.createElement(PJ, {
        children: n
    }) : b && (T = `${n}…`);
    const P = a ? React.createElement(React.Fragment, {
        children: [React.createElement(he, {
            children: T
        }), React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            tone: C || v ? void 0 : "subdued",
            children: a
        })]
    }) : React.createElement(ee, {
        as: "span",
        variant: "bodyMd",
        fontWeight: C ? "semibold" : "regular",
        children: T
    })
      , I = t && React.createElement("span", {
        className: Ha.Suffix,
        children: React.createElement(rn, {
            tone: t.tone,
            children: t.content
        })
    })
      , L = f && React.createElement(he, {
        children: React.createElement("span", {
            className: Ha.Suffix,
            children: f
        })
    })
      , R = React.createElement("span", {
        className: Ha.Text,
        children: React.createElement(ee, {
            as: "span",
            variant: "bodyMd",
            fontWeight: C ? "semibold" : "regular",
            children: P
        })
    })
      , D = React.createElement("div", {
        className: Ha.ContentElement,
        children: React.createElement(Te, {
            blockAlign: "center",
            gap: {
                xs: "200",
                md: "150"
            },
            wrap: !1,
            children: [w, R, I, L]
        })
    })
      , M = React.createElement(he, {
        width: "100%",
        children: D
    })
      , O = C ? React.createElement(La.ScrollTo, {}) : null
      , z = r ? React.createElement(Bi, {
        id: e,
        url: v ? null : r,
        className: _,
        external: g,
        "aria-label": i,
        onClick: v ? null : s,
        role: x,
        children: M
    }) : React.createElement("button", {
        id: e,
        type: "button",
        className: _,
        disabled: v,
        "aria-label": i,
        onClick: s,
        onMouseUp: cu,
        role: x,
        onMouseEnter: l,
        children: M
    });
    return React.createElement(React.Fragment, {
        children: [O, z]
    })
}
const PJ = ({children: e}) => {
    const t = Xr()
      , n = React.useRef(null)
      , [i,a] = React.useState(!1);
    return Kr( () => {
        n.current && a(n.current.scrollWidth > n.current.offsetWidth)
    }
    , [e]),
    i ? React.createElement(Qn, {
        zIndexOverride: Number(t.zIndex["z-index-11"]),
        preferredPosition: "above",
        hoverDelay: 1e3,
        content: e,
        dismissOnMouseOut: !0,
        children: React.createElement(ee, {
            as: "span",
            truncate: !0,
            children: e
        })
    }) : React.createElement(ee, {
        as: "span",
        truncate: !0,
        children: React.createElement(he, {
            width: "100%",
            ref: n,
            children: e
        })
    })
}
;
function IJ({section: e, hasMultipleSections: t, isFirst: n, actionRole: i, onActionAnyItem: a}) {
    const r = p => () => {
        p && p(),
        a && a()
    }
      , s = e.items.map( ({content: p, helpText: f, onAction: v, ...g}, y) => {
        const b = React.createElement(p2, {
            content: p,
            helpText: f,
            role: i,
            onAction: r(v),
            ...g
        });
        return React.createElement(he, {
            as: "li",
            role: i === "menuitem" ? "presentation" : void 0,
            children: React.createElement(Te, {
                wrap: !1,
                children: b
            })
        }, `${p}-${y}`)
    }
    );
    let l = null;
    e.title && (l = typeof e.title == "string" ? React.createElement(he, {
        paddingBlockStart: "300",
        paddingBlockEnd: "100",
        paddingInlineStart: "300",
        paddingInlineEnd: "300",
        children: React.createElement(ee, {
            as: "p",
            variant: "headingSm",
            children: e.title
        })
    }) : React.createElement(he, {
        padding: {
            xs: "0",
            md: "200"
        },
        paddingInlineEnd: {
            xs: "0",
            md: "150"
        },
        children: e.title
    }));
    let c;
    switch (i) {
    case "option":
        c = "presentation";
        break;
    case "menuitem":
        c = t ? "presentation" : "menu";
        break;
    default:
        c = void 0;
        break
    }
    const d = React.createElement(React.Fragment, {
        children: [l, React.createElement(he, {
            as: "div",
            padding: {
                xs: "0",
                md: "150"
            },
            ...t && {
                paddingBlockStart: "0"
            },
            tabIndex: t ? void 0 : -1,
            children: React.createElement(ft, {
                gap: {
                    xs: "0",
                    md: "050"
                },
                as: "ul",
                ...c && {
                    role: c
                },
                children: s
            })
        })]
    });
    return t ? React.createElement(he, {
        as: "li",
        role: "presentation",
        borderColor: "border-secondary",
        ...!n && {
            borderBlockStartWidth: "025"
        },
        ...!e.title && {
            paddingBlockStart: {
                xs: "0",
                md: "150"
            }
        },
        children: d
    }) : d
}
function Ci({keyCode: e, handler: t, keyEvent: n="keyup", options: i, useCapture: a}) {
    const r = React.useRef({
        handler: t,
        keyCode: e
    });
    Kr( () => {
        r.current = {
            handler: t,
            keyCode: e
        }
    }
    , [t, e]);
    const s = React.useCallback(l => {
        const {handler: c, keyCode: d} = r.current;
        l.keyCode === d && c(l)
    }
    , []);
    return React.useEffect( () => (document.addEventListener(n, s, a || i),
    () => {
        document.removeEventListener(n, s, a || i)
    }
    ), [n, s, a, i]),
    null
}
function h_() {
    const {mdDown: e} = Wn();
    return !Jx("mouse") && e
}
var Et = {
    TextField: "Polaris-TextField",
    disabledStepperButton: "Polaris-TextField--disabledStepperButton",
    ClearButton: "Polaris-TextField__ClearButton",
    Loading: "Polaris-TextField__Loading",
    disabled: "Polaris-TextField--disabled",
    error: "Polaris-TextField--error",
    readOnly: "Polaris-TextField--readOnly",
    Input: "Polaris-TextField__Input",
    Backdrop: "Polaris-TextField__Backdrop",
    multiline: "Polaris-TextField--multiline",
    hasValue: "Polaris-TextField--hasValue",
    focus: "Polaris-TextField--focus",
    VerticalContent: "Polaris-TextField__VerticalContent",
    InputAndSuffixWrapper: "Polaris-TextField__InputAndSuffixWrapper",
    toneMagic: "Polaris-TextField--toneMagic",
    Segment: "Polaris-TextField__Segment",
    Prefix: "Polaris-TextField__Prefix",
    Suffix: "Polaris-TextField__Suffix",
    CharacterCount: "Polaris-TextField__CharacterCount",
    AutoSizeWrapper: "Polaris-TextField__AutoSizeWrapper",
    hasLgStepper: "Polaris-TextField--hasLgStepper",
    AutoSizeWrapperWithSuffix: "Polaris-TextField__AutoSizeWrapperWithSuffix",
    suggestion: "Polaris-TextField--suggestion",
    compact: "Polaris-TextField--compact",
    labelInsidePlaceholder: "Polaris-TextField--labelInsidePlaceholder",
    labelInside: "Polaris-TextField--labelInside",
    slim: "Polaris-TextField--slim",
    centeredSuffix: "Polaris-TextField--centeredSuffix",
    borderless: "Polaris-TextField--borderless",
    "Input-hasClearButton": "Polaris-TextField__Input--hasClearButton",
    "Input-suffixed": "Polaris-TextField__Input--suffixed",
    "Input-alignRight": "Polaris-TextField__Input--alignRight",
    "Input-alignLeft": "Polaris-TextField__Input--alignLeft",
    "Input-alignCenter": "Polaris-TextField__Input--alignCenter",
    "Input-autoSize": "Polaris-TextField__Input--autoSize",
    NonFocusableAffix: "Polaris-TextField__NonFocusableAffix",
    StepperSuffix: "Polaris-TextField__StepperSuffix",
    PrefixIcon: "Polaris-TextField__PrefixIcon",
    AlignFieldBottom: "Polaris-TextField__AlignFieldBottom",
    Stepper: "Polaris-TextField__Stepper",
    StepperWithLabelInside: "Polaris-TextField__StepperWithLabelInside",
    StepperIcon: "Polaris-TextField__StepperIcon",
    Resizer: "Polaris-TextField__Resizer",
    DummyInput: "Polaris-TextField__DummyInput",
    segmentWithLabelInside: "Polaris-TextField--segmentWithLabelInside",
    monospaced: "Polaris-TextField--monospaced"
}
  , Ip = {
    Connected: "Polaris-Connected",
    Item: "Polaris-Connected__Item",
    "Item-primary": "Polaris-Connected__Item--primary",
    "Item-focused": "Polaris-Connected__Item--focused"
};
function JS({children: e, position: t}) {
    const {value: n, setTrue: i, setFalse: a} = Di(!1)
      , r = G(Ip.Item, n && Ip["Item-focused"], t === "primary" ? Ip["Item-primary"] : Ip["Item-connection"]);
    return React.createElement("div", {
        onBlur: a,
        onFocus: i,
        className: r,
        children: e
    })
}
const g_ = React.createContext(!1);
function LJ({children: e, left: t, right: n}) {
    const i = t ? React.createElement(JS, {
        position: "left",
        children: t
    }) : null
      , a = n ? React.createElement(JS, {
        position: "right",
        children: n
    }) : null;
    return React.createElement(g_.Provider, {
        value: !0,
        children: React.createElement("div", {
            className: Ip.Connected,
            children: [i, React.createElement(JS, {
                position: "primary",
                children: e
            }), a]
        })
    })
}
var Lr = {
    hidden: "Polaris-Labelled--hidden",
    LabelWrapper: "Polaris-Labelled__LabelWrapper",
    disabled: "Polaris-Labelled--disabled",
    HelpText: "Polaris-Labelled__HelpText",
    readOnly: "Polaris-Labelled--readOnly",
    insideWrapper: "Polaris-Labelled--insideWrapper",
    insidePlaceholderWrapper: "Polaris-Labelled--insidePlaceholderWrapper",
    animated: "Polaris-Labelled--animated",
    inside: "Polaris-Labelled--inside",
    insidePlaceholder: "Polaris-Labelled--insidePlaceholder",
    hasAccessory: "Polaris-Labelled--hasAccessory",
    Error: "Polaris-Labelled__Error",
    Action: "Polaris-Labelled__Action"
}
  , xg = {
    Label: "Polaris-Label",
    hidden: "Polaris-Label--hidden",
    Text: "Polaris-Label__Text",
    RequiredIndicator: "Polaris-Label__RequiredIndicator"
};
function uf(e) {
    return `${e}Label`
}
function FJ({children: e, id: t, hidden: n, requiredIndicator: i, truncate: a, variant: r="bodyMd", tone: s}) {
    const l = G(xg.Label, n && xg.hidden);
    return React.createElement("div", {
        className: l,
        children: React.createElement("label", {
            id: uf(t),
            htmlFor: t,
            className: G(xg.Text, i && xg.RequiredIndicator),
            children: React.createElement(ee, {
                as: "span",
                variant: r,
                tone: s,
                truncate: a,
                children: e
            })
        })
    })
}
var NI = {
    InlineError: "Polaris-InlineError",
    Icon: "Polaris-InlineError__Icon"
};
function qs({message: e, fieldID: t}) {
    const {mdUp: n} = Wn();
    return e ? React.createElement("div", {
        id: v_(t),
        className: NI.InlineError,
        children: [React.createElement("div", {
            className: NI.Icon,
            children: React.createElement(Fe, {
                type: "alert-circle",
                tone: "legacy-inherit"
            })
        }), React.createElement(ee, {
            as: "p",
            variant: n ? "bodySm" : "bodyXs",
            children: e
        })]
    }) : null
}
function v_(e) {
    return `${e}Error`
}
function Uf({id: e, label: t, error: n, action: i, helpText: a, children: r, labelHidden: s, requiredIndicator: l, disabled: c, readOnly: d, labelPosition: p="outside", animated: f=!1, hasAccessory: v=!1, ...g}) {
    const y = G(p && Lr[p], s && Lr.hidden, c && Lr.disabled, d && Lr.readOnly)
      , b = i ? React.createElement("div", {
        className: Lr.Action,
        children: Qr(i, {
            variant: "plain"
        })
    }) : null
      , k = a ? React.createElement("div", {
        className: Lr.HelpText,
        id: rb(e),
        "aria-disabled": c,
        children: React.createElement(ee, {
            as: "p",
            tone: "subdued",
            variant: p !== "outside" ? "bodyXs" : "bodySm",
            breakWord: !0,
            children: a
        })
    }) : null
      , C = n && typeof n != "boolean" && React.createElement("div", {
        className: Lr.Error,
        children: React.createElement(qs, {
            message: n,
            fieldID: e
        })
    })
      , x = G(Lr.LabelWrapper, p === "inside" && Lr.insideWrapper, p === "insidePlaceholder" && Lr.insidePlaceholderWrapper, f ? Lr.animated : null, v && Lr.hasAccessory)
      , A = t ? React.createElement("div", {
        className: x,
        children: [React.createElement(FJ, {
            id: e,
            truncate: p !== "outside",
            requiredIndicator: l,
            ...g,
            hidden: !1,
            variant: p === "inside" ? "bodyXs" : "bodyMd",
            tone: ["inside", "insidePlaceholder"].includes(p) ? "subdued" : void 0,
            children: t
        }), b]
    }) : null;
    return React.createElement("div", {
        className: y,
        children: [A, r, C, k]
    })
}
function rb(e) {
    return `${e}HelpText`
}
const EJ = React.forwardRef(function({labelInside: t, canDecrement: n, canIncrement: i, onChange: a, onClick: r, onMouseDown: s, onMouseUp: l, onBlur: c}, d) {
    function p(C) {
        return () => a(C)
    }
    function f(C) {
        return x => {
            x.button === 0 && (s == null || s(C))
        }
    }
    const v = h_()
      , g = v ? "plus" : "chevron-up"
      , y = v ? "minus" : "chevron-down"
      , b = !i
      , k = !n;
    return React.createElement("div", {
        className: G(Et.Stepper, v && t && Et.StepperWithLabelInside),
        onClick: r,
        "aria-hidden": !0,
        ref: d,
        children: [React.createElement("div", {
            role: "button",
            className: G(Et.Segment, t && Et.segmentWithLabelInside, b && Et.disabledStepperButton),
            tabIndex: -1,
            onClick: p(1),
            onMouseDown: f(p(1)),
            onMouseUp: l,
            onBlur: c,
            children: React.createElement("div", {
                className: Et.StepperIcon,
                children: React.createElement(Fe, {
                    type: g,
                    tone: "legacy-inherit"
                })
            })
        }), React.createElement("div", {
            role: "button",
            className: G(Et.Segment, t && Et.segmentWithLabelInside, k && Et.disabledStepperButton),
            tabIndex: -1,
            onClick: p(-1),
            onMouseDown: f(p(-1)),
            onMouseUp: l,
            onBlur: c,
            children: React.createElement("div", {
                className: Et.StepperIcon,
                children: React.createElement(Fe, {
                    type: y,
                    tone: "legacy-inherit"
                })
            })
        })]
    })
});
function MJ({value: e, minValue: t, maxValue: n, disabled: i}) {
    const a = i === !0 || e === null
      , r = a ? !1 : e > (t ?? -1 / 0)
      , s = a ? !1 : e < (n ?? 1 / 0);
    return {
        canDecrement: r,
        canIncrement: s
    }
}
function RJ({contents: e, currentHeight: t=null, minimumLines: n, onHeightChange: i}) {
    const a = React.useRef(null)
      , r = React.useRef(null)
      , s = React.useRef()
      , l = React.useRef(t);
    t !== l.current && (l.current = t),
    React.useEffect( () => () => {
        s.current && cancelAnimationFrame(s.current)
    }
    , []);
    const c = n ? React.createElement("div", {
        ref: r,
        className: Et.DummyInput,
        dangerouslySetInnerHTML: {
            __html: OJ(n)
        }
    }) : null
      , d = React.useCallback( () => {
        s.current && cancelAnimationFrame(s.current),
        s.current = requestAnimationFrame( () => {
            if (!a.current || !r.current)
                return;
            const p = Math.max(a.current.offsetHeight, r.current.offsetHeight);
            p !== l.current && i(p)
        }
        )
    }
    , [i]);
    return Kr( () => {
        d()
    }
    ),
    React.createElement("div", {
        "aria-hidden": !0,
        className: Et.Resizer,
        children: [React.createElement(Ni, {
            event: "resize",
            handler: d
        }), React.createElement("div", {
            ref: a,
            className: Et.DummyInput,
            dangerouslySetInnerHTML: {
                __html: BJ(e)
            }
        }), c]
    })
}
const f2 = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\n": "<br>",
    "\r": ""
}
  , jJ = new RegExp(`[${Object.keys(f2).join()}]`,"g");
function DJ(e) {
    return f2[e]
}
function OJ(e) {
    let t = "";
    for (let n = 0; n < e; n++)
        t += "<br>";
    return t
}
function BJ(e) {
    return typeof e == "string" ? `${e.replace(jJ, DJ)}<br>` : "<br>"
}
function To({prefix: e, suffix: t, verticalContent: n, placeholder: i, value: a="", helpText: r, label: s, labelAction: l, labelHidden: c, disabled: d, clearButton: p, readOnly: f, autoFocus: v, focused: g, multiline: y, error: b, connectedRight: k, connectedLeft: C, type: x="text", name: A, id: _, role: w, step: T, largeStep: P, autoComplete: I, max: L, maxLength: R, maxHeight: D, min: M, minLength: O, pattern: z, inputMode: B, spellCheck: H, ariaOwns: q, ariaControls: W, ariaExpanded: V, ariaActiveDescendant: $, ariaAutocomplete: Q, showCharacterCount: K, align: J, requiredIndicator: X, monospaced: se, selectTextOnFocus: ne, suggestion: Y, variant: ue="inherit", size: ge="medium", onClearButtonClick: de, onChange: ve, onStepperChange: Le, onFocus: Ce, onBlur: Ae, tone: re, autoSize: le, loading: ye}) {
    const Ee = at()
      , [Qe,De] = React.useState(null)
      , [Ue,Ye] = React.useState(!!g)
      , [Mt,Xe] = React.useState(!1)
      , it = vm()
      , ke = h_()
      , $e = ke && !n
      , Se = React.useContext(g_)
      , Re = c || Se
      , Ze = $e && !(Re || l || C || k)
      , Ct = x === "currency" ? "text" : x
      , Nt = x === "number" || x === "integer"
      , Ut = React.isValidElement(e) && e.type === Fe
      , Ht = Nt && T !== 0 && !d && !f
      , vn = $e && Ht
      , cn = le || vn
      , Pt = React.useId()
      , Rt = _ ?? Pt
      , wn = React.useRef(null)
      , Jt = React.useRef(null)
      , Dt = React.useRef(null)
      , we = React.useRef(null)
      , ae = React.useRef(null)
      , Pe = React.useRef(null)
      , Ie = React.useRef(null)
      , Be = React.useRef()
      , dt = React.useRef(null)
      , _t = React.useCallback( () => y ? Dt.current : Jt.current, [y]);
    React.useEffect( () => {
        const ct = _t();
        !ct || g === void 0 || (g ? ct.focus() : ct.blur())
    }
    , [g, n, _t]),
    React.useEffect( () => {
        Ze && requestAnimationFrame( () => Xe(!0))
    }
    , [Ze]),
    React.useEffect( () => {
        const ct = Jt.current;
        !ct || !(x === "text" || x === "tel" || x === "search" || x === "url" || x === "password") || !Y || ct.setSelectionRange(a.length, Y.length)
    }
    , [Ue, a, x, Y]);
    const ht = Y || a
      , Wt = T ?? 1
      , It = L ?? 1 / 0
      , yn = M ?? -1 / 0
      , pn = e || t
      , On = t && !cn
      , {canDecrement: Cn, canIncrement: ri} = MJ({
        value: Nt ? Number(a) : null,
        minValue: M != null ? Number(M) : void 0,
        maxValue: L != null ? Number(L) : void 0,
        disabled: d
    })
      , Ai = !!ht || pn && Ht
      , oi = React.useCallback( (ct, Kt=Wt) => {
        if (ve == null && Le == null)
            return;
        const Xn = Lm => (Lm.toString().split(".")[1] || []).length
          , hi = a ? parseFloat(a) : 0;
        if (isNaN(hi))
            return;
        const ir = x === "integer" ? 0 : Math.max(Xn(hi), Xn(Kt))
          , nl = Math.min(Number(It), Math.max(hi + ct * Kt, Number(yn)));
        Le != null ? Le(String(nl.toFixed(ir)), Rt) : ve != null && ve(String(nl.toFixed(ir)), Rt)
    }
    , [Rt, It, yn, ve, Le, Wt, x, a])
      , Ui = React.useCallback( () => {
        clearTimeout(Be.current)
    }
    , [])
      , zt = React.useCallback(ct => {
        let hi = 200;
        const ir = () => {
            hi > 50 && (hi -= 10),
            ct(0),
            Be.current = window.setTimeout(ir, hi)
        }
        ;
        Be.current = window.setTimeout(ir, hi),
        document.addEventListener("mouseup", Ui, {
            once: !0
        })
    }
    , [Ui])
      , to = Ht ? React.createElement(EJ, {
        labelInside: Ze,
        canIncrement: ri,
        canDecrement: Cn,
        onClick: ds,
        onChange: oi,
        onMouseDown: zt,
        onMouseUp: Ui,
        ref: dt,
        onBlur: ms
    }) : null
      , Ma = Ze ? Ai || e || t || y || s && i ? "inside" : "insidePlaceholder" : "outside"
      , He = G(Et.TextField, Ma === "inside" && Et.labelInside, Ma === "insidePlaceholder" && Et.labelInsidePlaceholder, !!ht && Et.hasValue, On && Et.centeredSuffix, d && Et.disabled, f && Et.readOnly, b && Et.error, re && Et[$t("tone", re)], y && Et.multiline, Ue && !d && Et.focus, ue !== "inherit" && Et[ue], ge === "slim" && Et.slim, vn && Et.hasLgStepper)
      , pe = React.useMemo( () => Ma !== "outside" && Qe ? Qe - 28 : Qe, [Qe, Ma])
      , st = ct => ct.current ? i_(ct.current) : null
      , Fo = e ? React.createElement("div", {
        className: G(Et.Prefix, Ut && Et.PrefixIcon, !st(we) && Et.NonFocusableAffix),
        id: `${Rt}-Prefix`,
        ref: we,
        onBlur: ms,
        children: e
    }) : null
      , tt = t ? React.createElement("div", {
        className: G(Et.Suffix, vn && Et.StepperSuffix, !st(ae) && Et.NonFocusableAffix),
        id: `${Rt}-Suffix`,
        ref: ae,
        onBlur: ms,
        children: t
    }) : null
      , qt = ye ? React.createElement("div", {
        className: Et.Loading,
        id: `${Rt}-Loading`,
        ref: Pe,
        children: React.createElement(er, {
            size: "small"
        })
    }) : null;
    let En = null;
    if (K) {
        const ct = ht.length
          , Kt = R ? Ee.translate("Polaris.TextField.characterCountWithMaxLength", {
            count: ct,
            limit: R
        }) : Ee.translate("Polaris.TextField.characterCount", {
            count: ct
        })
          , Xn = G(Et.CharacterCount, y && Et.AlignFieldBottom)
          , hi = R ? `${ct}/${R}` : ct;
        En = React.createElement("div", {
            id: `${Rt}-CharacterCounter`,
            className: Xn,
            "aria-label": Kt,
            "aria-live": Ue ? "polite" : "off",
            "aria-atomic": "true",
            onClick: ds,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyMd",
                children: hi
            })
        })
    }
    const sa = p && ht !== "" ? React.createElement("button", {
        type: "button",
        className: Et.ClearButton,
        onClick: Jb,
        onBlur: ms,
        disabled: d,
        children: [React.createElement(ee, {
            as: "span",
            visuallyHidden: !0,
            children: Ee.translate("Polaris.Common.clear")
        }), React.createElement(Fe, {
            tone: "legacy-inherit",
            type: "x-circle"
        })]
    }) : null
      , Xi = y && Qe ? {
        height: pe,
        maxHeight: D
    } : null
      , nr = React.useCallback(ct => {
        De(ct)
    }
    , [])
      , pi = y && it ? React.createElement(RJ, {
        contents: ht || i,
        currentHeight: pe,
        minimumLines: typeof y == "number" ? y : 1,
        onHeightChange: nr
    }) : null
      , Ra = [];
    b && Ra.push(`${Rt}Error`),
    r && Ra.push(rb(Rt)),
    K && Ra.push(`${Rt}-CharacterCounter`);
    const ja = [];
    e && ja.push(`${Rt}-Prefix`),
    t && ja.push(`${Rt}-Suffix`),
    n && ja.push(`${Rt}-VerticalContent`),
    ja.unshift(uf(Rt));
    const xr = G(Et.Input, J && Et[$t("Input-align", J)], t && Et["Input-suffixed"], p && Et["Input-hasClearButton"], se && Et.monospaced, Y && Et.suggestion, cn && Et["Input-autoSize"], ge === "compact" && Et.compact)
      , qn = ct => {
        if (Ye(!0),
        ne && !Y) {
            const Kt = _t();
            Kt == null || Kt.select()
        }
        Ce && Ce(ct)
    }
    ;
    Si("wheel", no, Jt);
    function no(ct) {
        document.activeElement === ct.target && Nt && ct.stopPropagation()
    }
    const fi = React.createElement(y ? "textarea" : "input", {
        name: A,
        id: Rt,
        disabled: d,
        readOnly: f,
        role: w,
        autoFocus: v,
        value: ht,
        placeholder: Ze && !(s && i) ? void 0 : i,
        style: Xi,
        autoComplete: I,
        className: xr,
        ref: y ? Dt : Jt,
        min: M,
        max: L,
        step: T,
        minLength: O,
        maxLength: R,
        spellCheck: H,
        pattern: z,
        inputMode: B,
        type: Ct,
        rows: zJ(y),
        size: cn ? 1 : void 0,
        "aria-describedby": Ra.length ? Ra.join(" ") : void 0,
        "aria-labelledby": ja.join(" "),
        "aria-invalid": !!b,
        "aria-owns": q,
        "aria-activedescendant": $,
        "aria-autocomplete": Q,
        "aria-controls": W,
        "aria-expanded": V,
        "aria-required": X,
        ...VJ(y),
        onFocus: qn,
        onBlur: ms,
        onClick: ds,
        onKeyPress: Xb,
        onKeyDown: Im,
        onChange: Y ? void 0 : Eo,
        onInput: Y ? Eo : void 0,
        "data-1p-ignore": I === "off" || void 0,
        "data-lpignore": I === "off" || void 0,
        "data-form-type": I === "off" ? "other" : void 0
    })
      , xt = n ? React.createElement("div", {
        className: Et.VerticalContent,
        id: `${Rt}-VerticalContent`,
        ref: Ie,
        onClick: ds,
        onBlur: ms,
        children: [n, fi]
    }) : null
      , nn = n ? xt : fi
      , Bn = React.createElement("div", {
        className: G(Et.Backdrop, C && Et["Backdrop-connectedLeft"], k && Et["Backdrop-connectedRight"])
    })
      , Mn = cn ? React.createElement("div", {
        className: G(Et.InputAndSuffixWrapper),
        children: [React.createElement("div", {
            className: G(Et.AutoSizeWrapper, t && Et.AutoSizeWrapperWithSuffix),
            "data-auto-size-value": a || i,
            children: nn
        }), tt]
    }) : React.createElement(React.Fragment, {
        children: [nn, tt]
    });
    return React.createElement(Uf, {
        label: s,
        id: Rt,
        error: b,
        action: l,
        labelHidden: Re,
        labelPosition: Ma,
        helpText: r,
        requiredIndicator: X,
        disabled: d,
        readOnly: f,
        animated: Mt,
        hasAccessory: !!On,
        children: React.createElement(LJ, {
            left: C,
            right: k,
            children: React.createElement("div", {
                className: He,
                onClick: el,
                ref: wn,
                children: [Fo, Mn, En, qt, sa, to, Bn, pi]
            })
        })
    });
    function Eo(ct) {
        ve && ve(ct.currentTarget.value, Rt)
    }
    function el(ct) {
        var hi, ir, nl;
        const {target: Kt} = ct
          , Xn = (hi = Jt == null ? void 0 : Jt.current) == null ? void 0 : hi.getAttribute("role");
        if (Kt === Jt.current && Xn === "combobox") {
            (ir = Jt.current) == null || ir.focus(),
            qn(ct);
            return
        }
        tl(Kt) || fn(Kt) || xu(Kt) || hh(Kt) || _u(Kt) || Ue || (nl = _t()) == null || nl.focus()
    }
    function ds(ct) {
        var hi;
        const Kt = hh(ct.target)
          , Xn = xu(ct.target);
        !Kt && !Xn && ct.stopPropagation(),
        !(tl(ct.target) || fn(ct.target) || Xn || ke && Kt || _u(ct.target) || Ue) && (Ye(!0),
        (hi = _t()) == null || hi.focus())
    }
    function Jb() {
        de && de(Rt)
    }
    function Xb(ct) {
        const {key: Kt, which: Xn} = ct
          , hi = /[\d.,eE+-]$/
          , ir = /[\deE+-]$/;
        !Nt || Xn === tn.Enter || x === "number" && hi.test(Kt) || x === "integer" && ir.test(Kt) || ct.preventDefault()
    }
    function Im(ct) {
        if (!Nt)
            return;
        const {key: Kt, which: Xn} = ct;
        x === "integer" && (Kt === "ArrowUp" || Xn === tn.UpArrow) && (oi(1),
        ct.preventDefault()),
        x === "integer" && (Kt === "ArrowDown" || Xn === tn.DownArrow) && (oi(-1),
        ct.preventDefault()),
        (Xn === tn.Home || Kt === "Home") && M !== void 0 && (Le != null ? Le(String(M), Rt) : ve != null && ve(String(M), Rt)),
        (Xn === tn.End || Kt === "End") && L !== void 0 && (Le != null ? Le(String(L), Rt) : ve != null && ve(String(L), Rt)),
        (Xn === tn.PageUp || Kt === "PageUp") && P !== void 0 && oi(1, P),
        (Xn === tn.PageDown || Kt === "PageDown") && P !== void 0 && oi(-1, P)
    }
    function ms(ct) {
        var Kt;
        Ye(!1),
        !((Kt = wn.current) != null && Kt.contains(ct == null ? void 0 : ct.relatedTarget)) && Ae && Ae(ct)
    }
    function xu(ct) {
        const Kt = _t();
        return ct instanceof HTMLElement && Kt && (Kt.contains(ct) || Kt.contains(document.activeElement))
    }
    function tl(ct) {
        return ct instanceof Element && (we.current && we.current.contains(ct) || ae.current && ae.current.contains(ct))
    }
    function hh(ct) {
        return ct instanceof Element && dt.current && dt.current.contains(ct)
    }
    function _u(ct) {
        return ct instanceof Element && Pe.current && Pe.current.contains(ct)
    }
    function fn(ct) {
        return ct instanceof Element && Ie.current && (Ie.current.contains(ct) || Ie.current.contains(document.activeElement))
    }
}
function zJ(e) {
    if (e)
        return typeof e == "number" ? e : 1
}
function VJ(e) {
    if (e)
        return e || typeof e == "number" && e > 0 ? {
            "aria-multiline": !0
        } : void 0
}
const UJ = 8;
function ka({items: e, sections: t=[], actionRole: n, allowFiltering: i, onActionAnyItem: a, filterLabel: r}) {
    const s = at()
      , l = React.useContext(i2);
    let c = [];
    const d = React.useRef(null)
      , [p,f] = React.useState("");
    e ? c = [{
        items: e
    }, ...t] : t && (c = t);
    const v = c == null ? void 0 : c.some(I => I.items.some(L => typeof L.content == "string"))
      , g = c.length > 1
      , y = g && n === "menuitem" ? "menu" : void 0
      , b = g && n === "menuitem" ? -1 : void 0
      , k = c == null ? void 0 : c.map(I => ({
        ...I,
        items: I.items.filter( ({content: L}) => typeof L == "string" ? L == null ? void 0 : L.toLowerCase().includes(p.toLowerCase()) : L)
    }))
      , C = k.map( (I, L) => I.items.length > 0 ? React.createElement(IJ, {
        section: I,
        hasMultipleSections: g,
        actionRole: n,
        onActionAnyItem: a,
        isFirst: L === 0
    }, typeof I.title == "string" ? I.title : L) : null)
      , x = I => {
        I.preventDefault(),
        d.current && I.target && d.current.contains(I.target) && nY(d.current, I.target)
    }
      , A = I => {
        I.preventDefault(),
        d.current && I.target && d.current.contains(I.target) && iY(d.current, I.target)
    }
      , _ = n === "menuitem" ? React.createElement(React.Fragment, {
        children: [React.createElement(Ci, {
            keyEvent: "keydown",
            keyCode: tn.DownArrow,
            handler: A
        }), React.createElement(Ci, {
            keyEvent: "keydown",
            keyCode: tn.UpArrow,
            handler: x
        })]
    }) : null
      , w = React.useMemo( () => (k == null ? void 0 : k.reduce( (L, R) => L + R.items.length, 0)) || 0, [k])
      , P = ((c == null ? void 0 : c.reduce( (I, L) => I + L.items.length, 0)) || 0) >= UJ;
    return React.createElement(React.Fragment, {
        children: [(i || l) && P && v && React.createElement(he, {
            padding: "200",
            paddingBlockEnd: w > 0 ? "0" : "200",
            children: React.createElement(To, {
                clearButton: !0,
                labelHidden: !0,
                label: r || s.translate("Polaris.ActionList.SearchField.placeholder"),
                placeholder: r || s.translate("Polaris.ActionList.SearchField.placeholder"),
                autoComplete: "off",
                value: p,
                onChange: I => f(I),
                prefix: React.createElement(Fe, {
                    type: "search",
                    tone: "legacy-inherit"
                }),
                onClearButtonClick: () => f("")
            })
        }), React.createElement(he, {
            as: g ? "ul" : "div",
            ref: d,
            role: y,
            tabIndex: b,
            children: [_, C]
        })]
    })
}
ka.Item = p2;
var TI = {
    ActionMenu: "Polaris-ActionMenu"
}
  , $J = {
    RollupActivator: "Polaris-ActionMenu-RollupActions__RollupActivator"
};
function df(e) {
    const t = React.useRef();
    return React.useEffect( () => {
        t.current = e
    }
    , [e]),
    t.current
}
function HJ(e, {id: t, active: n=!1, ariaHaspopup: i, activatorDisabled: a=!1}) {
    a || (e.tabIndex = e.tabIndex || 0),
    e.tagName !== "INPUT" && (e.setAttribute("aria-controls", t),
    e.setAttribute("aria-owns", t),
    e.setAttribute("aria-expanded", String(n))),
    e.setAttribute("data-state", n ? "open" : "closed"),
    i != null && e.setAttribute("aria-haspopup", String(i))
}
function ym(e, t, n) {
    return e == null ? null : y_(e, t) ? e : React.createElement(t, {
        ...n,
        children: e
    })
}
const WJ = (e, t) => e === t;
function y_(e, t) {
    var s;
    if (e == null || !React.isValidElement(e) || typeof e.type == "string")
        return !1;
    const {type: n} = e
      , a = ((s = e.props) == null ? void 0 : s.__type__) || n;
    return (Array.isArray(t) ? t : [t]).some(l => typeof a != "string" && WJ(l, a))
}
function h2(e, t= () => !0) {
    return React.Children.toArray(e).filter(n => React.isValidElement(n) && t(n))
}
function qJ({condition: e, wrapper: t, children: n}) {
    return e ? t(n) : n
}
function XS({condition: e, children: t}) {
    return e ? t : null
}
var vi = {
    Popover: "Polaris-Popover",
    PopoverOverlay: "Polaris-Popover__PopoverOverlay",
    "PopoverOverlay-noAnimation": "Polaris-Popover__PopoverOverlay--noAnimation",
    "PopoverOverlay-entering": "Polaris-Popover__PopoverOverlay--entering",
    "PopoverOverlay-open": "Polaris-Popover__PopoverOverlay--open",
    measuring: "Polaris-Popover--measuring",
    "PopoverOverlay-exiting": "Polaris-Popover__PopoverOverlay--exiting",
    fullWidth: "Polaris-Popover--fullWidth",
    Content: "Polaris-Popover__Content",
    positionedAbove: "Polaris-Popover--positionedAbove",
    positionedCover: "Polaris-Popover--positionedCover",
    ContentContainer: "Polaris-Popover__ContentContainer",
    "Content-fullHeight": "Polaris-Popover__Content--fullHeight",
    "Content-fluidContent": "Polaris-Popover__Content--fluidContent",
    Pane: "Polaris-Popover__Pane",
    "Pane-fixed": "Polaris-Popover__Pane--fixed",
    "Pane-subdued": "Polaris-Popover__Pane--subdued",
    "Pane-captureOverscroll": "Polaris-Popover__Pane--captureOverscroll",
    Section: "Polaris-Popover__Section",
    FocusTracker: "Polaris-Popover__FocusTracker",
    "PopoverOverlay-hideOnPrint": "Polaris-Popover__PopoverOverlay--hideOnPrint"
};
function g2({children: e}) {
    return React.createElement("div", {
        className: vi.Section,
        children: React.createElement(he, {
            paddingInlineStart: "300",
            paddingInlineEnd: "300",
            paddingBlockStart: "200",
            paddingBlockEnd: "150",
            children: e
        })
    })
}
function f0({captureOverscroll: e=!1, fixed: t, sectioned: n, children: i, height: a, maxHeight: r, minHeight: s, subdued: l, onScrolledToBottom: c}) {
    const d = G(vi.Pane, t && vi["Pane-fixed"], l && vi["Pane-subdued"], e && vi["Pane-captureOverscroll"])
      , p = n ? ym(i, g2, {}) : i
      , f = {
        height: a,
        maxHeight: r,
        minHeight: s
    };
    return t ? React.createElement("div", {
        style: f,
        className: d,
        children: p
    }) : React.createElement(La, {
        shadow: !0,
        className: d,
        style: f,
        onScrolledToBottom: c,
        scrollbarWidth: "thin",
        children: p
    })
}
let yo = function(e) {
    return e[e.Click = 0] = "Click",
    e[e.EscapeKeypress = 1] = "EscapeKeypress",
    e[e.FocusOut = 2] = "FocusOut",
    e[e.ScrollOut = 3] = "ScrollOut",
    e
}({});
var Dr = function(e) {
    return e.Entering = "entering",
    e.Entered = "entered",
    e.Exiting = "exiting",
    e.Exited = "exited",
    e
}(Dr || {});
class v2 extends React.PureComponent {
    [k: string]: any;
    constructor(n) {
        super(n);
        te(this, "state", {
            transitionStatus: this.props.active ? Dr.Entering : Dr.Exited
        });
        te(this, "contentNode", React.createRef());
        te(this, "renderPopover", n => {
            const {measuring: i, desiredHeight: a, positioning: r} = n
              , {id: s, children: l, sectioned: c, fullWidth: d, fullHeight: p, fluidContent: f, hideOnPrint: v, autofocusTarget: g, captureOverscroll: y} = this.props
              , b = r === "cover"
              , k = G(vi.Popover, i && vi.measuring, (d || b) && vi.fullWidth, v && vi["PopoverOverlay-hideOnPrint"], r && vi[$t("positioned", r)])
              , C = i ? void 0 : {
                height: a
            }
              , x = G(vi.Content, p && vi["Content-fullHeight"], f && vi["Content-fluidContent"]);
            return React.createElement("div", {
                className: k,
                ...Ux.props,
                children: [React.createElement(Ni, {
                    event: "click",
                    handler: this.handleClick
                }), React.createElement(Ni, {
                    event: "touchstart",
                    handler: this.handleClick
                }), React.createElement(Ci, {
                    keyCode: tn.Escape,
                    handler: this.handleEscape
                }), React.createElement("div", {
                    className: vi.FocusTracker,
                    tabIndex: 0,
                    onFocus: this.handleFocusFirstItem
                }), React.createElement("div", {
                    className: vi.ContentContainer,
                    children: React.createElement("div", {
                        id: s,
                        tabIndex: g === "none" ? void 0 : -1,
                        className: x,
                        style: C,
                        ref: this.contentNode,
                        children: GJ(l, {
                            captureOverscroll: y,
                            sectioned: c
                        })
                    })
                }), React.createElement("div", {
                    className: vi.FocusTracker,
                    tabIndex: 0,
                    onFocus: this.handleFocusLastItem
                })]
            })
        }
        );
        te(this, "handleClick", n => {
            const i = n.target
              , {contentNode: a, props: {activator: r, onClose: s, preventCloseOnChildOverlayClick: l}} = this
              , c = n.composedPath()
              , d = l ? KJ(c, this.context.container) : II(c, a)
              , p = PI(r, i);
            d || p || this.state.transitionStatus !== Dr.Entered || s(yo.Click)
        }
        );
        te(this, "handleScrollOut", () => {
            this.props.onClose(yo.ScrollOut)
        }
        );
        te(this, "handleEscape", n => {
            const i = n.target
              , {contentNode: a, props: {activator: r}} = this
              , s = n.composedPath()
              , l = II(s, a)
              , c = PI(r, i);
            (l || c) && this.props.onClose(yo.EscapeKeypress)
        }
        );
        te(this, "handleFocusFirstItem", () => {
            this.props.onClose(yo.FocusOut)
        }
        );
        te(this, "handleFocusLastItem", () => {
            this.props.onClose(yo.FocusOut)
        }
        );
        this.overlayRef = React.createRef()
    }
    forceUpdatePosition() {
        var n;
        (n = this.overlayRef.current) == null || n.forceUpdatePosition()
    }
    changeTransitionStatus(n, i) {
        this.setState({
            transitionStatus: n
        }, i),
        this.contentNode.current && this.contentNode.current.getBoundingClientRect()
    }
    componentDidMount() {
        this.props.active && (this.focusContent(),
        this.changeTransitionStatus(Dr.Entered))
    }
    componentDidUpdate(n) {
        this.props.active && !n.active && (this.focusContent(),
        this.changeTransitionStatus(Dr.Entering, () => {
            this.clearTransitionTimeout(),
            this.enteringTimer = window.setTimeout( () => {
                this.setState({
                    transitionStatus: Dr.Entered
                })
            }
            , parseInt(Bf.motion["motion-duration-100"], 10))
        }
        )),
        !this.props.active && n.active && (this.clearTransitionTimeout(),
        this.setState({
            transitionStatus: Dr.Exited
        }))
    }
    componentWillUnmount() {
        this.clearTransitionTimeout()
    }
    render() {
        const {active: n, activator: i, fullWidth: a, preferredPosition: r="below", preferredAlignment: s="center", preferInputActivator: l=!0, fixed: c, zIndexOverride: d, scrollToFit: p, preferVisualViewportHeight: f} = this.props
          , {transitionStatus: v} = this.state;
        if (v === Dr.Exited && !n)
            return null;
        const g = G(vi.PopoverOverlay, v === Dr.Entering && vi["PopoverOverlay-entering"], v === Dr.Entered && vi["PopoverOverlay-open"], v === Dr.Exiting && vi["PopoverOverlay-exiting"], r === "cover" && vi["PopoverOverlay-noAnimation"]);
        return React.createElement(m2, {
            ref: this.overlayRef,
            fullWidth: a,
            active: n,
            activator: i,
            preferInputActivator: l,
            preferredPosition: r,
            preferredAlignment: s,
            render: this.renderPopover.bind(this),
            fixed: c,
            onScrollOut: this.handleScrollOut,
            classNames: g,
            zIndexOverride: d,
            scrollToFit: p,
            preferVisualViewportHeight: f
        })
    }
    clearTransitionTimeout() {
        this.enteringTimer && window.clearTimeout(this.enteringTimer)
    }
    focusContent() {
        const {autofocusTarget: n="container"} = this.props;
        n === "none" || this.contentNode == null || requestAnimationFrame( () => {
            if (this.contentNode.current == null)
                return;
            const i = a_(this.contentNode.current);
            i && n === "first-node" ? i.focus({
                preventScroll: !1
            }) : this.contentNode.current.focus({
                preventScroll: !1
            })
        }
        )
    }
}
te(v2, "contextType", n_);
function GJ(e, t) {
    const n = React.Children.toArray(e);
    return y_(n[0], f0) ? n : ym(n, f0, t)
}
function PI(e, t) {
    if (e === t)
        return !0;
    let n = t.parentNode;
    for (; n != null; ) {
        if (n === e)
            return !0;
        n = n.parentNode
    }
    return !1
}
function II(e, t) {
    return t.current != null && e.includes(t.current)
}
function KJ(e, t) {
    return e.some(n => n instanceof Node && (t == null ? void 0 : t.contains(n)))
}
const QJ = React.forwardRef(function({activatorWrapper: t="div", children: n, onClose: i, onOpen: a, activator: r, preventFocusOnClose: s, active: l, fixed: c, ariaHaspopup: d, preferInputActivator: p=!0, zIndexOverride: f, ...v}, g) {
    const [y,b] = React.useState()
      , k = React.useRef(null)
      , C = React.useRef(null)
      , x = React.useRef(!1)
      , A = df(l)
      , _ = React.useRef()
      , w = React.useRef(ZJ(r))
      , {smDown: T} = Wn()
      , P = t
      , I = React.useId();
    function L() {
        var H;
        (H = k.current) == null || H.forceUpdatePosition()
    }
    const {setPopoverActivator: R} = SD()
      , D = React.useCallback( () => {
        if (!y || !C.current)
            return;
        const H = Ss(y) || Ss(C.current) || C.current;
        R(H)
    }
    , [y, R])
      , M = React.useCallback( () => {
        if (!y || !C.current || s || w.current)
            return;
        const H = Ss(y) || Ss(C.current) || C.current;
        H && H.focus()
    }
    , [y, C, s, w]);
    React.useEffect( () => {
        l && !x.current && (_.current = void 0,
        D(),
        a && a()),
        !l && A && _.current == null && M(),
        x.current = l
    }
    , [l, a, D, _, M, A]);
    const O = H => {
        if (_.current = H,
        !(H === yo.ScrollOut && T) && (i(H),
        !(C.current == null || s))) {
            if (H === yo.FocusOut && y) {
                const q = Ss(y) || Ss(C.current) || C.current;
                XP(q, LI) || q.focus()
            } else if (H === yo.EscapeKeypress && y) {
                const q = Ss(y) || Ss(C.current) || C.current;
                q ? q.focus() : XP(q, LI)
            }
        }
    }
    ;
    React.useImperativeHandle(g, () => ({
        forceUpdatePosition: L,
        close: (H="activator") => {
            const q = H === "activator" ? yo.EscapeKeypress : yo.FocusOut;
            O(q)
        }
    }));
    const z = React.useCallback( () => {
        if (C.current == null)
            return;
        const q = Ss(C.current) || C.current
          , W = "disabled"in q && !!q.disabled;
        HJ(q, {
            id: I,
            active: l,
            ariaHaspopup: d,
            activatorDisabled: W
        })
    }
    , [I, l, d]);
    React.useEffect( () => {
        (!y && C.current || y && C.current && !C.current.contains(y)) && b(C.current.firstElementChild),
        z()
    }
    , [y, z]),
    React.useEffect( () => {
        y && C.current && b(C.current.firstElementChild),
        z()
    }
    , [y, z]);
    const B = y ? React.createElement(Sr, {
        idPrefix: "popover",
        children: React.createElement(v2, {
            ref: k,
            id: I,
            activator: y,
            preferInputActivator: p,
            onClose: O,
            active: l,
            fixed: c,
            zIndexOverride: f,
            ...v,
            children: n
        })
    }) : null;
    return React.createElement(P, {
        ref: C,
        children: [React.Children.only(r), B]
    })
});
function LI(e) {
    let t = e.parentElement;
    for (; t; ) {
        if (t.matches(iD.selector))
            return !1;
        t = t.parentElement
    }
    return !0
}
function ZJ(e) {
    if (!e.props)
        return !1;
    if (e.props.onFocus)
        return !0;
    if (!e.props.children)
        return !1;
    const t = n => React.Children.toArray(n).some(i => {
        if (!React.isValidElement(i))
            return !1;
        const a = i.props;
        return a ? a.onFocus ? !0 : a.children ? t(a.children) : !1 : !1
    }
    );
    return t(e.props.children)
}
const Fn = Object.assign(QJ, {
    Pane: f0,
    Section: g2
});
function YJ({accessibilityLabel: e, items: t=[], sections: n=[], icon: i}) {
    const a = at()
      , {value: r, toggle: s} = Di(!1);
    if (t.length === 0 && n.length === 0)
        return null;
    const l = React.createElement("div", {
        className: $J.RollupActivator,
        children: React.createElement(nt, {
            accessibilityLabel: e || a.translate("Polaris.ActionMenu.RollupActions.rollupButton"),
            onClick: s,
            icon: i || "menu-horizontal"
        })
    });
    return React.createElement(Fn, {
        active: r,
        activator: l,
        preferredAlignment: "right",
        onClose: s,
        hideOnPrint: !0,
        children: React.createElement(ka, {
            items: t,
            sections: n,
            onActionAnyItem: s
        })
    })
}
function mf(e, t, n=!1) {
    const i = React.useRef(e)
      , a = React.useRef(!0);
    React.useEffect( () => {
        const r = i.current
          , s = a.current;
        a.current = !1,
        e !== i.current ? (i.current = e,
        t(e, r)) : s && n && t(e, r)
    }
    , [e, t, n])
}
var Wp = {
    ActionsLayoutOuter: "Polaris-ActionMenu-Actions__ActionsLayoutOuter",
    ActionsLayout: "Polaris-ActionMenu-Actions__ActionsLayout",
    "ActionsLayout--measuring": "Polaris-ActionMenu-Actions--actionsLayoutMeasuring",
    ActionsLayoutMeasurer: "Polaris-ActionMenu-Actions__ActionsLayoutMeasurer"
};
function JJ(e=[], t=[], n, i, a) {
    const r = i.reduce( (v, g) => v + g, 0)
      , s = e.map( (v, g) => g)
      , l = t.map( (v, g) => g)
      , c = []
      , d = []
      , p = []
      , f = [];
    if (a > r)
        c.push(...s),
        p.push(...l);
    else {
        let v = 0;
        s.forEach(g => {
            const y = i[g];
            if (v + y >= a - n) {
                d.push(g);
                return
            }
            c.push(g),
            v += y
        }
        ),
        l.forEach(g => {
            const y = i[g + e.length];
            if (v + y >= a - n) {
                f.push(g);
                return
            }
            p.push(g),
            v += y
        }
        )
    }
    return {
        visibleActions: c,
        hiddenActions: d,
        visibleGroups: p,
        hiddenGroups: f
    }
}
var XJ = {
    Details: "Polaris-ActionMenu-MenuGroup__Details"
}
  , FI = {
    SecondaryAction: "Polaris-ActionMenu-SecondaryAction",
    critical: "Polaris-ActionMenu-SecondaryAction--critical"
};
function qp({children: e, tone: t, helpText: n, onAction: i, destructive: a, ...r}) {
    const s = React.createElement(nt, {
        onClick: i,
        tone: a ? "critical" : void 0,
        ...r,
        children: e
    })
      , l = n ? React.createElement(Qn, {
        preferredPosition: "below",
        content: n,
        children: s
    }) : s;
    return React.createElement("div", {
        className: G(FI.SecondaryAction, t === "critical" && FI.critical),
        children: l
    })
}
function EI({accessibilityLabel: e, active: t, actions: n, details: i, title: a, icon: r, disabled: s, onClick: l, onClose: c, onOpen: d, sections: p}) {
    const f = React.useCallback( () => {
        c(a)
    }
    , [c, a])
      , v = React.useCallback( () => {
        d(a)
    }
    , [d, a])
      , g = React.useCallback( () => {
        l ? l(v) : v()
    }
    , [l, v])
      , y = React.createElement(qp, {
        disclosure: !0,
        disabled: s,
        icon: r,
        accessibilityLabel: e,
        onClick: g,
        children: a
    });
    return React.createElement(Fn, {
        active: !!t,
        activator: y,
        preferredAlignment: "left",
        onClose: f,
        hideOnPrint: !0,
        children: [React.createElement(ka, {
            items: n,
            sections: p,
            onActionAnyItem: f
        }), i && React.createElement("div", {
            className: XJ.Details,
            children: i
        })]
    })
}
function y2({realNodeRef: e, measurerNodeRef: t, handleMeasurement: n, includesDisclosure: i}) {
    const a = React.useRef(n);
    a.current = n;
    const r = React.useRef(null);
    Kr( () => {
        const s = t.current
          , l = e.current;
        if (!s || !l)
            return;
        const c = () => {
            var A;
            const g = l.offsetWidth
              , y = s.children
              , b = Array.from(y)
              , k = parseInt(((A = getComputedStyle(l)) == null ? void 0 : A.gap) ?? "0px", 10)
              , C = b.map(_ => Math.ceil(_.getBoundingClientRect().width) + k)
              , x = i && C.pop() || 0;
            return a.current({
                containerWidth: g,
                disclosureWidth: x,
                hiddenActionsWidths: C
            })
        }
          , d = ji(c, 100, {
            leading: !0,
            trailing: !0,
            maxWait: 300
        })
          , p = () => {
            const g = l.scrollHeight
              , y = r.current;
            r.current = g,
            g !== y && y !== null ? es.flushSync( () => {
                c()
            }
            ) : d()
        }
        ;
        p();
        const f = new ResizeObserver(p);
        f.observe(s);
        const v = new MutationObserver(p);
        return v.observe(s, {
            childList: !0,
            subtree: !0
        }),
        () => {
            d.cancel(),
            f.disconnect(),
            v.disconnect()
        }
    }
    , [i, t, e])
}
function eX({actions: e=[], groups: t=[], handleMeasurement: n, realNodeRef: i}) {
    const a = at()
      , r = React.useRef(null)
      , s = {
        title: a.translate("Polaris.ActionMenu.Actions.moreActions")
    }
      , l = React.createElement(qp, {
        disclosure: !0,
        children: s.title
    });
    y2({
        measurerNodeRef: r,
        realNodeRef: i,
        includesDisclosure: !0,
        handleMeasurement: n
    });
    const c = e.map( (p, f) => {
        const {content: v, onAction: g, ...y} = p
          , b = `${v}-${y.id ? y.id : f}`;
        return React.createElement(qp, {
            onClick: g,
            ...y,
            children: v
        }, b)
    }
    )
      , d = t.map( (p, f) => {
        const {title: v, icon: g} = p;
        return React.createElement(qp, {
            disclosure: !0,
            icon: g,
            children: v
        }, `${v}-${f}`)
    }
    );
    return React.createElement("div", {
        className: G(Wp.ActionsLayoutMeasurer, Wp.ActionsLayout),
        ref: r,
        children: [c, d, l]
    })
}
function tX({actions: e, groups: t, onActionRollup: n}) {
    const i = at()
      , a = React.useRef(null)
      , [r,s] = React.useState(void 0)
      , [l,c] = React.useReducer( (M, O) => ({
        ...M,
        ...O
    }), {
        visibleActions: [],
        hiddenActions: [],
        visibleGroups: [],
        hiddenGroups: [],
        hasMeasured: !1
    })
      , {visibleActions: d, hiddenActions: p, visibleGroups: f, hiddenGroups: v, hasMeasured: g} = l
      , y = {
        title: i.translate("Polaris.ActionMenu.Actions.moreActions"),
        actions: []
    }
      , b = React.useCallback(M => s(r ? void 0 : M), [r])
      , k = React.useCallback( () => s(void 0), [])
      , C = React.useMemo( () => e ?? [], [e])
      , x = React.useMemo( () => t ?? [], [t])
      , A = C.filter( (M, O) => d.includes(O)).map( (M, O) => {
        const {content: z, onAction: B, ...H} = M
          , q = `${z}-${H.id ?? O}`;
        return React.createElement(qp, {
            onClick: B,
            ...H,
            children: z
        }, q)
    }
    )
      , w = (v.length > 0 || p.length > 0 ? [...x, y] : [...x]).filter( (M, O) => {
        const z = x.length === 0
          , B = f.includes(O)
          , H = M === y;
        return z ? p.length > 0 : H ? !0 : B
    }
    )
      , T = p.map(M => C[M]).filter(M => M != null)
      , P = v.map(M => x[M]).filter(M => M != null)
      , I = w.map( (M, O) => {
        const {title: z, actions: B, ...H} = M
          , q = M === y
          , W = [...T, ...P]
          , [V,$] = W.reduce( ([Q,K], J) => (nX(J) ? K.push({
            title: J.title,
            items: J.actions.map(X => ({
                ...X,
                disabled: J.disabled || X.disabled
            }))
        }) : Q.push(J),
        [Q, K]), [[], []]);
        return q ? React.createElement(EI, {
            title: z,
            active: z === r,
            actions: [...V, ...B],
            sections: $,
            ...H,
            onOpen: b,
            onClose: k
        }, `${z}-${O}`) : React.createElement(EI, {
            title: z,
            active: z === r,
            actions: B,
            ...H,
            onOpen: b,
            onClose: k
        }, `${z}-${O}`)
    }
    )
      , L = React.useCallback(M => {
        const {hiddenActionsWidths: O, containerWidth: z, disclosureWidth: B} = M
          , {visibleActions: H, hiddenActions: q, visibleGroups: W, hiddenGroups: V} = JJ(C, x, B, O, z);
        c({
            visibleActions: H,
            hiddenActions: q,
            visibleGroups: W,
            hiddenGroups: V,
            hasMeasured: !0
        })
    }
    , [C, x])
      , R = p.length > 0 || v.length > 0;
    mf(R, M => n == null ? void 0 : n(M), !0);
    const D = React.createElement(eX, {
        realNodeRef: a,
        actions: e,
        groups: t,
        handleMeasurement: L
    });
    return React.createElement("div", {
        className: Wp.ActionsLayoutOuter,
        children: [React.createElement("div", {
            ref: a,
            className: G(Wp.ActionsLayout, !g && Wp["ActionsLayout--measuring"]),
            children: [A, I]
        }), D]
    })
}
function nX(e) {
    return "title"in e
}
function iX({actions: e=[], groups: t=[], rollup: n, rollupActionsLabel: i, onActionRollup: a}) {
    if (e.length === 0 && t.length === 0)
        return null;
    const r = G(TI.ActionMenu, n && TI.rollup)
      , s = t.map(l => rX(l));
    return React.createElement("div", {
        className: r,
        children: n ? React.createElement(YJ, {
            accessibilityLabel: i,
            items: e,
            sections: s
        }) : React.createElement(tX, {
            actions: e,
            groups: t,
            onActionRollup: a
        })
    })
}
function aX(e=[]) {
    return e.length === 0 ? !1 : e.some(t => t.actions.length > 0)
}
function rX({title: e, actions: t, disabled: n}) {
    return {
        title: e,
        items: t.map(i => ({
            ...i,
            disabled: n || i.disabled
        }))
    }
}
var oX = {
    ChoiceChildren: "Polaris-ChoiceList__ChoiceChildren"
}
  , sX = {
    Bleed: "Polaris-Bleed"
};
const b_ = ({marginInline: e, marginBlock: t, marginBlockStart: n, marginBlockEnd: i, marginInlineStart: a, marginInlineEnd: r, children: s, ...l}) => {
    const c = b => {
        const k = ["marginInlineStart", "marginInlineEnd"]
          , C = ["marginBlockStart", "marginBlockEnd"]
          , x = {
            marginBlockStart: n,
            marginBlockEnd: i,
            marginInlineStart: a,
            marginInlineEnd: r,
            marginInline: e,
            marginBlock: t
        };
        if (x[b])
            return x[b];
        if (k.includes(b) && e)
            return x.marginInline;
        if (C.includes(b) && t)
            return x.marginBlock
    }
      , d = c("marginBlockStart")
      , p = c("marginBlockEnd")
      , f = c("marginInlineStart")
      , v = c("marginInlineEnd")
      , g = {
        ...fa("bleed", "margin-block-start", "space", d),
        ...fa("bleed", "margin-block-end", "space", p),
        ...fa("bleed", "margin-inline-start", "space", f),
        ...fa("bleed", "margin-inline-end", "space", v)
    }
      , y = f_(l);
    return React.createElement("div", {
        className: sX.Bleed,
        style: hm(g),
        ...y,
        children: s
    })
}
  , b2 = React.createContext(void 0)
  , k2 = React.createContext(!1)
  , k_ = React.createContext(!1);
var co = {
    Checkbox: "Polaris-Checkbox",
    ChoiceLabel: "Polaris-Checkbox__ChoiceLabel",
    Backdrop: "Polaris-Checkbox__Backdrop",
    Input: "Polaris-Checkbox__Input",
    "Input-indeterminate": "Polaris-Checkbox__Input--indeterminate",
    Icon: "Polaris-Checkbox__Icon",
    animated: "Polaris-Checkbox--animated",
    toneMagic: "Polaris-Checkbox--toneMagic",
    hover: "Polaris-Checkbox--hover",
    IconIndeterminate: "Polaris-Checkbox__IconIndeterminate",
    error: "Polaris-Checkbox--error",
    checked: "Polaris-Checkbox--checked",
    pathAnimation: "Polaris-Checkbox--pathAnimation"
}
  , uo = {
    Choice: "Polaris-Choice",
    LabelContent: "Polaris-Choice__LabelContent",
    labelHidden: "Polaris-Choice--labelHidden",
    Control: "Polaris-Choice__Control",
    disabled: "Polaris-Choice--disabled",
    Label: "Polaris-Choice__Label",
    toneMagic: "Polaris-Choice--toneMagic",
    Descriptions: "Polaris-Choice__Descriptions",
    HelpText: "Polaris-Choice__HelpText",
    LabelGroup: "Polaris-Choice__LabelGroup"
};
function S2({id: e, label: t, disabled: n, error: i, children: a, labelHidden: r, helpText: s, onClick: l, labelClassName: c, fill: d, bleed: p, bleedBlockStart: f, bleedBlockEnd: v, bleedInlineStart: g, bleedInlineEnd: y, tone: b}) {
    const k = G(uo.Choice, (r || !t) && uo.labelHidden, n && uo.disabled, b && uo[$t("tone", b)], c)
      , C = {
        ...fa("choice", "bleed-block-end", "space", v || p),
        ...fa("choice", "bleed-block-start", "space", f || p),
        ...fa("choice", "bleed-inline-start", "space", g || p),
        ...fa("choice", "bleed-inline-end", "space", y || p),
        ...Object.fromEntries(Object.entries(sf("choice", "fill", d)).map( ([T,P]) => [T, P ? "100%" : "auto"]))
    }
      , x = React.createElement("label", {
        className: k,
        htmlFor: e,
        onClick: l,
        style: hm(C),
        children: React.createElement("span", {
            className: uo.LabelContent,
            children: [React.createElement("span", {
                className: uo.Control,
                children: a
            }), React.createElement("span", {
                className: uo.Label,
                children: React.createElement(ee, {
                    as: "span",
                    variant: "bodyMd",
                    visuallyHidden: r,
                    children: t
                })
            })]
        })
    })
      , A = s ? React.createElement("div", {
        className: uo.HelpText,
        id: S_(e),
        children: React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            tone: n ? void 0 : "subdued",
            children: s
        })
    }) : null
      , _ = i && typeof i != "boolean" && React.createElement("div", {
        className: uo.Error,
        children: React.createElement(qs, {
            message: i,
            fieldID: e
        })
    })
      , w = A || _ ? React.createElement("div", {
        className: uo.Descriptions,
        children: [_, A]
    }) : null;
    return React.createElement("div", {
        className: uo.LabelGroup,
        children: [x, w]
    })
}
function S_(e) {
    return `${e}HelpText`
}
const ss = React.forwardRef(function({ariaControls: t, ariaDescribedBy: n, label: i, labelHidden: a, checked: r=!1, helpText: s, disabled: l, id: c, name: d, value: p, error: f, onChange: v, onFocus: g, onBlur: y, labelClassName: b, fill: k, bleed: C, bleedBlockStart: x, bleedBlockEnd: A, bleedInlineStart: _, bleedInlineEnd: w, tone: T}, P) {
    const I = React.useRef(null)
      , L = React.useId()
      , R = c ?? L
      , D = React.useContext(k2);
    React.useImperativeHandle(P, () => ({
        focus: () => {
            I.current && I.current.focus()
        }
    }));
    const M = () => {
        y && y()
    }
      , O = () => {
        v == null || I.current == null || l || (v(I.current.checked, R),
        I.current.focus())
    }
      , z = [];
    f && typeof f != "boolean" && z.push(v_(R)),
    s && z.push(S_(R)),
    n && z.push(n);
    const B = z.length ? z.join(" ") : void 0
      , H = G(co.Checkbox, f && co.error)
      , q = r === "indeterminate"
      , W = !q && !!r
      , V = React.createElement("svg", {
        viewBox: "0 0 16 16",
        shapeRendering: "geometricPrecision",
        textRendering: "geometricPrecision",
        children: React.createElement("path", {
            className: G(r && co.checked),
            d: "M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5",
            transform: "translate(2 2.980376)",
            opacity: "0",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            pathLength: "1"
        })
    })
      , $ = G(co.Input, q && co["Input-indeterminate"], T && co[$t("tone", T)])
      , Q = {
        helpText: s,
        error: f,
        bleed: C,
        bleedBlockStart: x,
        bleedBlockEnd: A,
        bleedInlineStart: _,
        bleedInlineEnd: w
    };
    return React.createElement(S2, {
        id: R,
        label: i,
        labelHidden: a,
        disabled: l,
        labelClassName: G(co.ChoiceLabel, b),
        fill: k,
        tone: T,
        ...Q,
        children: React.createElement("span", {
            className: H,
            children: [React.createElement("input", {
                ref: I,
                id: R,
                name: d,
                value: p,
                type: "checkbox",
                checked: W,
                disabled: l,
                className: $,
                onBlur: M,
                onChange: lX,
                onClick: O,
                onFocus: g,
                "aria-invalid": f != null,
                "aria-controls": t,
                "aria-describedby": B,
                role: D ? "presentation" : "checkbox",
                ...q && {
                    indeterminate: "true"
                }
            }), React.createElement("span", {
                className: co.Backdrop,
                onClick: MI,
                onKeyUp: MI
            }), React.createElement("span", {
                className: G(co.Icon, !q && co.animated, q && co.IconIndeterminate),
                children: q ? React.createElement(Fe, {
                    type: "minus",
                    tone: "legacy-inherit"
                }) : V
            })]
        })
    })
});
function lX() {}
function MI(e) {
    e.stopPropagation()
}
var up = {
    RadioButton: "Polaris-RadioButton",
    Input: "Polaris-RadioButton__Input",
    Backdrop: "Polaris-RadioButton__Backdrop",
    ChoiceLabel: "Polaris-RadioButton__ChoiceLabel",
    toneMagic: "Polaris-RadioButton--toneMagic"
};
function cX({ariaDescribedBy: e, label: t, labelHidden: n, helpText: i, checked: a, disabled: r, onChange: s, onFocus: l, onBlur: c, id: d, name: p, value: f, fill: v, bleed: g, bleedBlockStart: y, bleedBlockEnd: b, bleedInlineStart: k, bleedInlineEnd: C, tone: x}) {
    const A = React.useId()
      , _ = d ?? A
      , w = p || _
      , T = React.useRef(null)
      , P = () => {
        c && c()
    }
    ;
    function I({currentTarget: O}) {
        s && s(O.checked, _)
    }
    const L = [];
    i && L.push(S_(_)),
    e && L.push(e);
    const R = L.length ? L.join(" ") : void 0
      , D = G(up.Input, x && up[$t("tone", x)])
      , M = {
        helpText: i,
        bleed: g,
        bleedBlockStart: y,
        bleedBlockEnd: b,
        bleedInlineStart: k,
        bleedInlineEnd: C
    };
    return React.createElement(S2, {
        label: t,
        labelHidden: n,
        disabled: r,
        id: _,
        labelClassName: up.ChoiceLabel,
        fill: v,
        ...M,
        ...a ? {
            tone: x
        } : {},
        children: React.createElement("span", {
            className: up.RadioButton,
            children: [React.createElement("input", {
                id: _,
                name: w,
                value: f,
                type: "radio",
                checked: a,
                disabled: r,
                className: D,
                onChange: I,
                onFocus: l,
                onBlur: P,
                "aria-describedby": R,
                ref: T
            }), React.createElement("span", {
                className: up.Backdrop
            })]
        })
    })
}
function uX({title: e, titleHidden: t, allowMultiple: n, choices: i, selected: a, onChange: r=dX, error: s, disabled: l=!1, name: c, tone: d}) {
    const p = n ? ss : cX
      , f = React.useId()
      , v = c ?? f
      , g = n ? `${v}[]` : v
      , y = e ? React.createElement(he, {
        as: "legend",
        paddingBlockEnd: {
            xs: "0",
            md: "100"
        },
        children: React.createElement(ee, {
            as: "span",
            variant: "bodyMd",
            visuallyHidden: t,
            children: e
        })
    }) : null
      , b = i.map(C => {
        const {value: x, id: A, label: _, helpText: w, disabled: T, describedByError: P} = C;
        function I(M) {
            r(mX(C, M, a, n), v)
        }
        const L = RI(C, a)
          , R = C.renderChildren ? C.renderChildren(L) : null
          , D = R ? React.createElement("div", {
            className: oX.ChoiceChildren,
            children: R
        }) : null;
        return React.createElement("li", {
            children: React.createElement(b_, {
                marginBlockEnd: w ? {
                    xs: "100",
                    md: "0"
                } : {
                    xs: "0"
                },
                children: [React.createElement(p, {
                    name: g,
                    value: x,
                    id: A,
                    label: _,
                    disabled: T || l,
                    fill: {
                        xs: !0,
                        sm: !1
                    },
                    checked: RI(C, a),
                    helpText: w,
                    onChange: I,
                    ariaDescribedBy: s && P ? v_(g) : null,
                    tone: d
                }), D]
            })
        }, x)
    }
    )
      , k = s && React.createElement(he, {
        paddingBlockStart: {
            xs: "0",
            md: "100"
        },
        paddingBlockEnd: "200",
        children: React.createElement(qs, {
            message: s,
            fieldID: g
        })
    });
    return React.createElement(ft, {
        as: "fieldset",
        gap: {
            xs: "400",
            md: "0"
        },
        "aria-invalid": s != null,
        id: g,
        children: [y, React.createElement(ft, {
            as: "ul",
            children: b
        }), k]
    })
}
function dX() {}
function RI({value: e}, t) {
    return t && t.includes(e)
}
function mX({value: e}, t, n, i=!1) {
    return t ? n && i ? [...n, e] : [e] : n ? n.filter(a => a !== e) : []
}
var jI = {
    DirectionButton: "Polaris-SortPopover-DirectionButton",
    "DirectionButton-active": "Polaris-SortPopover-DirectionButton__DirectionButton--active"
};
function DI({onClick: e, active: t, children: n, direction: i, value: a}) {
    const r = G(jI.DirectionButton, t && jI["DirectionButton-active"]);
    function s() {
        e([a])
    }
    return React.createElement(Pi, {
        className: r,
        onClick: s,
        children: [React.createElement(Fe, {
            type: i === "asc" ? "arrow-up" : "arrow-down",
            tone: "neutral"
        }), React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            fontWeight: "medium",
            children: n
        })]
    })
}
let OI = function(e) {
    return e.Asc = "asc",
    e.Desc = "desc",
    e
}({});
function C2({choices: e, selected: t, disabled: n, disclosureZIndexOverride: i, onChange: a, onChangeKey: r, onChangeDirection: s}) {
    var A, _, w, T;
    const l = at()
      , [c,d] = React.useState(!1)
      , [p,f] = t[0].split(" ");
    function v() {
        d(P => !P)
    }
    function g() {
        d(!1)
    }
    function y(P) {
        if (r) {
            const [I] = P[0].split(" ");
            r(I)
        } else
            a == null || a(P)
    }
    function b(P) {
        if (s) {
            const [,I] = P[0].split(" ");
            s(I)
        } else
            a == null || a(P)
    }
    const k = React.useMemo( () => e.reduce( (I, L) => {
        const R = I.some(O => O.label === L.label)
          , [,D] = L.value.split(" ")
          , M = D === f;
        return R ? M ? I.map(O => O.label === L.label ? L : O) : I : [...I, L]
    }
    , []), [e, f])
      , C = e.filter(P => {
        const [I] = P.value.split(" ");
        return I === p
    }
    )
      , x = React.createElement(Qn, {
        content: l.translate("Polaris.SortPopover.tooltip"),
        preferredPosition: "above",
        hoverDelay: 400,
        zIndexOverride: i,
        children: React.createElement(nt, {
            size: "slim",
            onClick: v,
            disabled: n,
            accessibilityLabel: l.translate("Polaris.SortPopover.ariaLabel"),
            icon: "sort"
        })
    });
    return React.createElement(Fn, {
        fluidContent: !0,
        active: c && !n,
        activator: x,
        autofocusTarget: "first-node",
        onClose: g,
        preferredAlignment: "right",
        zIndexOverride: i,
        children: [React.createElement(he, {
            minWidth: "148px",
            paddingInlineStart: "300",
            paddingInlineEnd: "300",
            paddingBlockStart: "200",
            paddingBlockEnd: "200",
            borderBlockEndWidth: "025",
            borderColor: "border-secondary",
            children: React.createElement(uX, {
                title: l.translate("Polaris.SortPopover.title"),
                choices: k,
                selected: t,
                onChange: y
            })
        }), React.createElement(he, {
            paddingInlineStart: "150",
            paddingInlineEnd: "150",
            paddingBlockStart: "200",
            paddingBlockEnd: "200",
            children: [React.createElement(DI, {
                direction: "asc",
                active: f === OI.Asc,
                onClick: b,
                value: (A = C == null ? void 0 : C[0]) == null ? void 0 : A.value,
                children: (_ = C == null ? void 0 : C[0]) == null ? void 0 : _.directionLabel
            }), React.createElement(DI, {
                direction: "desc",
                active: f === OI.Desc,
                onClick: b,
                value: (w = C == null ? void 0 : C[1]) == null ? void 0 : w.value,
                children: (T = C == null ? void 0 : C[1]) == null ? void 0 : T.directionLabel
            })]
        })]
    })
}
function pX(e, t=400) {
    const [n,i] = React.useState(!1);
    return React.useEffect( () => {
        if (e) {
            const a = setTimeout( () => {
                i(!0)
            }
            , t);
            return () => clearTimeout(a)
        } else
            i(!1)
    }
    , [e, t]),
    n
}
var bd = {
    TableWrapper: "Polaris-AlphaTable__TableWrapper",
    TableScrollable: "Polaris-AlphaTable__TableScrollable",
    Table: "Polaris-AlphaTable__Table",
    RowGroupToggleWrap: "Polaris-AlphaTable__RowGroupToggleWrap",
    TableStickyFooter: "Polaris-AlphaTable__TableStickyFooter"
}
  , Ia = {
    SharedTableWrapper: "Polaris-AlphaTableShared__SharedTableWrapper",
    SharedDisableStickyColumns: "Polaris-AlphaTableShared__SharedDisableStickyColumns",
    SharedStickyCell: "Polaris-AlphaTableShared__SharedStickyCell",
    SharedReverseZIndex: "Polaris-AlphaTableShared__SharedReverseZIndex",
    SharedStickyInlineStartCell: "Polaris-AlphaTableShared__SharedStickyInlineStartCell",
    SharedLoading: "Polaris-AlphaTableShared__SharedLoading",
    SharedNoStickyInlineStart: "Polaris-AlphaTableShared__SharedNoStickyInlineStart",
    SharedStickyIndicatorStart: "Polaris-AlphaTableShared__SharedStickyIndicatorStart",
    SharedNoStickyInlineEnd: "Polaris-AlphaTableShared__SharedNoStickyInlineEnd",
    SharedStickyIndicatorEnd: "Polaris-AlphaTableShared__SharedStickyIndicatorEnd"
};
function fX() {
    const [e,t] = React.useState([])
      , n = React.useRef(new Map)
      , i = React.useCallback( ({id: l, props: c, columnCells: d, visibleHeadings: p}) => {
        const f = n.current.get(l);
        if (f) {
            const v = Array.from(f.columnCells.keys()).sort()
              , g = Array.from(d.keys()).sort();
            if (v.length === g.length && v.every( (y, b) => y === g[b]))
                return
        }
        n.current.set(l, {
            id: l,
            props: c,
            columnCells: d,
            visibleHeadings: p
        }),
        t(v => v.includes(l) ? v : [...v, l])
    }
    , [])
      , a = React.useCallback(l => {
        t(c => c.filter(d => d !== l)),
        n.current.delete(l)
    }
    , [])
      , r = React.useCallback( () => {
        t([]),
        n.current.clear()
    }
    , [])
      , s = React.useCallback( () => n.current, []);
    return {
        rowIds: e,
        storeRow: i,
        removeRow: a,
        clear: r,
        getRowData: s
    }
}
const sy = "__polaris_table_";
const hX = ({variant: e}) => {
    const {smDown: t} = Wn()
      , n = Jx("mouse");
    return React.useMemo( () => {
        switch (e) {
        case "list":
        case "table":
            return e;
        case "auto":
            return t && !n ? "list" : "table";
        default:
            return e
        }
    }
    , [e, n, t])
}
  , gX = ({headings: e}) => {
    const t = React.useRef(null)
      , [n,i] = React.useState([])
      , {inlineStartStickyOffsets: a, inlineEndStickyOffsets: r} = React.useMemo( () => {
        if (e.length !== n.length)
            return {
                inlineStartStickyOffsets: [],
                inlineEndStickyOffsets: []
            };
        const {inlineStartStickyColumnIndices: s, inlineEndStickyColumnIndices: l} = e.reduce( (p, f, v) => {
            if (f.sticky) {
                let g = null;
                f.sticky === "inline-start" ? g = p.inlineStartStickyColumnIndices : f.sticky === "inline-end" && (g = p.inlineEndStickyColumnIndices),
                g && g.push(v)
            }
            return p
        }
        , {
            inlineStartStickyColumnIndices: [],
            inlineEndStickyColumnIndices: []
        })
          , c = s.map( (p, f) => {
            const g = s.slice(0, f).reduce( (b, k) => b + n[k], 0)
              , y = n.slice(0, p).reduce( (b, k) => b + k, 0);
            return {
                columnIndex: p,
                columnBecomesSticky: y - g,
                offset: Math.floor(g),
                borderXPosition: Math.floor(g) + n[p]
            }
        }
        )
          , d = l.map( (p, f) => {
            const g = l.slice(f + 1).reduce( (b, k) => b + n[k], 0)
              , y = n.slice(p + 1).reduce( (b, k) => b + k, 0);
            return {
                columnIndex: p,
                columnBecomesSticky: y - g,
                offset: g,
                borderXPosition: Math.floor(g) + n[p]
            }
        }
        );
        return {
            inlineStartStickyOffsets: c,
            inlineEndStickyOffsets: d
        }
    }
    , [e, n]);
    return React.useMemo( () => ({
        scrollableAreaRef: t,
        columnWidths: n,
        setColumnWidths: i,
        inlineStartStickyOffsets: a,
        inlineEndStickyOffsets: r
    }), [t, n, i, a, r])
}
  , vX = e => {
    if (e.selectedAll)
        return "all";
    const t = Array.from(e.currentPageValues).filter(i => !e.currentPageDisabledValues.has(i));
    return t.length > 0 && t.every(i => e.selectedValues.has(i)) ? "page" : e.selectedValues.size > 0 ? "some" : "none"
}
  , yX = () => ({
    selectedValues: new Set,
    allValues: new Set,
    currentPageValues: new Set,
    currentPageDisabledValues: new Set,
    selectedAll: !1,
    status: "none",
    canResetState: !1,
    with(e) {
        const t = {
            ...this,
            ...e
        };
        return {
            ...t,
            status: vX(t)
        }
    }
})
  , bX = (e, t, n) => {
    const {lastToggledValue: i} = e;
    if (!i)
        return new Set(e.selectedValues).add(t);
    const a = Array.from(e.currentPageValues)
      , [r,s] = [t, i].map(c => a.indexOf(c)).sort( (c, d) => c - d)
      , l = new Set(e.selectedValues);
    for (let c = r; c <= s; c++)
        n ? l.add(a[c]) : l.delete(a[c]);
    return l
}
  , kX = (e, t, n=-1) => {
    switch (t.type) {
    case "REGISTER_ROW":
        {
            const i = new Set([...e.allValues, t.value])
              , a = new Set([...e.currentPageValues, t.value]);
            return e.with({
                allValues: i,
                currentPageValues: a
            })
        }
    case "UNREGISTER_ROW":
        if (e.canResetState) {
            const i = new Set([...e.allValues]);
            i.delete(t.value);
            const a = new Set([...e.currentPageValues]);
            a.delete(t.value);
            const r = new Set([...e.selectedValues]);
            return e.with({
                allValues: i,
                currentPageValues: a,
                selectedValues: r,
                selectedAll: !1
            })
        } else {
            const i = new Set([...e.currentPageValues]);
            return i.delete(t.value),
            e.with({
                currentPageValues: i
            })
        }
    case "REGISTER_DISABLED_ROW":
        {
            const i = new Set([...e.currentPageDisabledValues, t.value]);
            return e.with({
                currentPageDisabledValues: i
            })
        }
    case "UNREGISTER_DISABLED_ROW":
        {
            const i = new Set([...e.currentPageDisabledValues]);
            return i.delete(t.value),
            e.with({
                currentPageDisabledValues: i
            })
        }
    case "NAVIGATE_PAGE":
        return e.with({
            canResetState: !1,
            currentPageValues: new Set
        });
    case "SELECT_ALL":
        return e.with({
            selectedValues: new Set(Array.from(e.allValues).filter(i => !e.currentPageDisabledValues.has(i))),
            selectedAll: !0
        });
    case "UNSELECT_ALL":
        return e.with({
            selectedValues: new Set,
            selectedAll: !1
        });
    case "UNDO_SELECT_ALL":
        return e.with({
            selectedValues: new Set(t.values),
            selectedAll: !1
        });
    case "SELECT_PAGE":
        {
            const i = Array.from(e.currentPageValues).filter(r => !e.currentPageDisabledValues.has(r));
            return e.with({
                selectedValues: new Set([...e.selectedValues, ...i])
            })
        }
    case "UNSELECT_PAGE":
        return e.with({
            selectedValues: new Set([...Array.from(e.selectedValues).filter(i => !e.currentPageValues.has(i))])
        });
    case "TOGGLE_ROW":
        {
            if (n === 1 && t.selected)
                return e.with({
                    selectedValues: new Set([t.value])
                });
            let i;
            return e.selectedAll === !0 && !t.selected ? i = new Set([...e.currentPageValues].filter(a => a !== t.value)) : t.shift ? i = bX(e, t.value, t.selected) : t.selected ? i = new Set([...e.selectedValues, t.value]) : i = new Set([...e.selectedValues].filter(a => a !== t.value)),
            e.with({
                selectedValues: i,
                lastToggledValue: t.value,
                selectedAll: i.size >= e.selectedValues.size && e.selectedAll
            })
        }
    case "TOGGLE_ROWS":
        {
            let i;
            return t.selected ? i = new Set([...e.selectedValues, ...t.values]) : i = new Set([...e.selectedValues].filter(a => !t.values.has(a))),
            e.with({
                selectedValues: i,
                selectedAll: i.size >= e.selectedValues.size && e.selectedAll
            })
        }
    default:
        return e
    }
}
;
function SX({showSelectedPageSize: e=50}={}) {
    const [t,n] = React.useState(!1)
      , [i,a] = React.useState(0)
      , r = React.useCallback(s => {
        n(s),
        a(0)
    }
    , []);
    return {
        isFilteringToSelectedOnly: t,
        showSelectedPageIndex: i,
        showSelectedPageSize: e,
        setShowOnlySelected: r,
        setShowSelectedPageIndex: a
    }
}
const A2 = React.createContext({
    selectedValues: new Set,
    allValues: new Set,
    currentPageValues: new Set,
    currentPageDisabledValues: new Set
})
  , x2 = React.createContext({
    selectedState: "none",
    maxSelectable: -1,
    rowSelectionEnabled: !1,
    selectionSettings: void 0,
    isFilteringToSelectedOnly: !1,
    setShowOnlySelected: () => {}
    ,
    showSelectedPageIndex: 0,
    setShowSelectedPageIndex: () => {}
    ,
    showSelectedPageSize: 50
})
  , _2 = React.createContext({
    setSelected: () => {}
    ,
    setSelectedMultiple: () => {}
    ,
    registerRow: () => {}
    ,
    unregisterRow: () => {}
    ,
    registerDisabledRow: () => {}
    ,
    unregisterDisabledRow: () => {}
    ,
    registerRowProps: () => {}
    ,
    unregisterRowProps: () => {}
    ,
    getStoredRowData: () => new Map,
    selectAll: () => {}
    ,
    unselectAll: () => {}
    ,
    selectAllInPage: () => {}
    ,
    unselectPage: () => {}
    ,
    navigatePage: () => {}
    ,
    undoSelectAll: () => {}
})
  , w2 = React.createContext({
    renderedVariant: "table"
})
  , N2 = React.createContext({
    columnsWithActivator: new Map,
    incrementActivatorCount: () => {}
    ,
    decrementActivatorCount: () => {}
})
  , T2 = React.createContext({
    containsRowActions: !1,
    setContainsRowActions: () => {}
})
  , P2 = React.createContext({
    isRowActionsStuck: !1,
    setIsRowActionsStuck: () => {}
})
  , I2 = React.createContext({
    toggleableRowGroups: new Map,
    setToggleableRowGroups: () => {}
})
  , L2 = React.createContext({
    headings: [],
    getHeading: () => {}
})
  , F2 = React.createContext({
    registerColSpan: () => {}
    ,
    cellIndex: 0
})
  , E2 = React.createContext({
    loading: !1,
    showLoadingState: !1
})
  , M2 = React.createContext({
    current: !1
})
  , CX = () => React.useContext(F2)
  , zi = () => React.useContext(w2)
  , R2 = () => React.useContext(N2)
  , j2 = () => React.useContext(T2)
  , gu = () => React.useContext(L2)
  , lc = () => React.useContext(A2)
  , eo = () => React.useContext(x2)
  , vu = () => React.useContext(_2)
  , Gs = () => React.useContext(I2)
  , bm = () => React.useContext(E2)
  , D2 = () => React.useContext(M2)
  , O2 = () => React.useContext(P2)
  , B2 = React.createContext({
    scrollableAreaRef: {
        current: null
    },
    columnWidths: [],
    setColumnWidths: () => {}
    ,
    inlineStartStickyOffsets: [],
    inlineEndStickyOffsets: []
})
  , cc = () => React.useContext(B2)
  , AX = ({children: e}) => {
    const [t,n] = React.useState(!1)
      , i = React.useMemo( () => ({
        isRowActionsStuck: t,
        setIsRowActionsStuck: n
    }), [t, n]);
    return React.createElement(P2.Provider, {
        value: i,
        children: e
    })
}
  , xX = ({children: e, variant: t="auto"}) => {
    const {headings: n} = gu()
      , i = hX({
        variant: t
    })
      , {scrollableAreaRef: a, columnWidths: r, setColumnWidths: s, inlineStartStickyOffsets: l, inlineEndStickyOffsets: c} = gX({
        headings: n
    })
      , d = React.useMemo( () => ({
        renderedVariant: i
    }), [i])
      , p = React.useMemo( () => ({
        scrollableAreaRef: a,
        columnWidths: r,
        setColumnWidths: s,
        inlineStartStickyOffsets: l,
        inlineEndStickyOffsets: c
    }), [a, r, s, l, c]);
    return React.createElement(w2.Provider, {
        value: d,
        children: React.createElement(B2.Provider, {
            value: p,
            children: e
        })
    })
}
  , _X = ({children: e}) => {
    const t = React.useRef(!1);
    return React.createElement(M2.Provider, {
        value: t,
        children: e
    })
}
  , wX = React.forwardRef(function({children: t, rowSelectionEnabled: n=!1, maxSelectable: i=-1, onSelectionChange: a, selectionSettings: r, showSelectedPageSize: s=50}, l) {
    const {isFilteringToSelectedOnly: c, showSelectedPageIndex: d, showSelectedPageSize: p, setShowOnlySelected: f, setShowSelectedPageIndex: v} = SX({
        showSelectedPageSize: s
    })
      , {storeRow: g, removeRow: y, clear: b, getRowData: k} = fX();
    React.useImperativeHandle(l, () => ({
        setSelectedAll: L,
        setSelectedNone: R,
        setSelectedIds: I
    }));
    const [C,x] = React.useReducer( (K, J) => kX(K, J, i), yX())
      , A = React.useCallback(K => {
        x({
            type: "REGISTER_ROW",
            value: K
        })
    }
    , [])
      , _ = React.useCallback(K => {
        x({
            type: "UNREGISTER_ROW",
            value: K
        })
    }
    , [])
      , w = React.useCallback(K => {
        x({
            type: "REGISTER_DISABLED_ROW",
            value: K
        })
    }
    , [])
      , T = React.useCallback(K => {
        x({
            type: "UNREGISTER_DISABLED_ROW",
            value: K
        })
    }
    , [])
      , P = React.useCallback( (K, J) => {
        var X;
        x({
            type: "TOGGLE_ROW",
            value: K,
            selected: J,
            shift: ((X = window == null ? void 0 : window.event) == null ? void 0 : X.shiftKey) ?? !1
        })
    }
    , [])
      , I = React.useCallback( (K, J) => {
        x({
            type: "TOGGLE_ROWS",
            values: K,
            selected: J
        })
    }
    , [])
      , L = React.useCallback( () => {
        x({
            type: "SELECT_ALL"
        })
    }
    , [])
      , R = React.useCallback( () => {
        x({
            type: "UNSELECT_ALL"
        }),
        b()
    }
    , [b])
      , D = React.useCallback(K => {
        x({
            type: "UNDO_SELECT_ALL",
            values: K
        })
    }
    , [])
      , M = React.useCallback( () => {
        x({
            type: "SELECT_PAGE"
        })
    }
    , [])
      , O = React.useCallback( () => {
        x({
            type: "UNSELECT_PAGE"
        })
    }
    , [])
      , z = React.useCallback( () => {
        x({
            type: "NAVIGATE_PAGE"
        })
    }
    , [])
      , B = React.useCallback( (K, J, X) => {
        if (J.children && X) {
            const se = React.Children.toArray(J.children)
              , ne = new Map;
            let Y = 0;
            X.forEach(ue => {
                var ve;
                if ((ve = ue.id) == null ? void 0 : ve.startsWith(sy))
                    return;
                const de = ue.title;
                se[Y] && (ne.set(de, se[Y]),
                Y++)
            }
            ),
            g({
                id: K,
                props: J,
                columnCells: ne,
                visibleHeadings: X
            })
        }
    }
    , [g])
      , H = React.useCallback(K => {
        y(K)
    }
    , [y])
      , q = React.useCallback( () => k(), [k]);
    React.useEffect( () => {
        a == null || a(C.selectedValues, C.status)
    }
    , [C.selectedValues, C.status, a]);
    const W = React.useMemo( () => Array.from(C.selectedValues), [C.selectedValues]);
    React.useEffect( () => {
        r == null || r.onChange(C.status, W)
    }
    , [C.status, W, r]),
    React.useEffect( () => () => {
        b()
    }
    , [b]);
    const V = React.useMemo( () => ({
        selectedValues: C.selectedValues,
        allValues: C.allValues,
        currentPageValues: C.currentPageValues,
        currentPageDisabledValues: C.currentPageDisabledValues
    }), [C.selectedValues, C.allValues, C.currentPageValues, C.currentPageDisabledValues])
      , $ = React.useMemo( () => ({
        selectedState: C.status,
        rowSelectionEnabled: n,
        maxSelectable: i,
        selectionSettings: r,
        isFilteringToSelectedOnly: c,
        setShowOnlySelected: f,
        showSelectedPageIndex: d,
        setShowSelectedPageIndex: v,
        showSelectedPageSize: p
    }), [C.status, n, i, r, c, f, d, v, p])
      , Q = React.useMemo( () => ({
        setSelected: P,
        setSelectedMultiple: I,
        registerRow: A,
        unregisterRow: _,
        registerDisabledRow: w,
        unregisterDisabledRow: T,
        registerRowProps: B,
        unregisterRowProps: H,
        getStoredRowData: q,
        selectAll: L,
        unselectAll: R,
        undoSelectAll: D,
        selectAllInPage: M,
        unselectPage: O,
        navigatePage: z
    }), [P, I, A, _, w, T, B, H, q, L, R, D, M, O, z]);
    return React.createElement(A2.Provider, {
        value: V,
        children: React.createElement(x2.Provider, {
            value: $,
            children: React.createElement(_2.Provider, {
                value: Q,
                children: t
            })
        })
    })
})
  , NX = ({children: e}) => {
    const [t,n] = React.useState(new Map)
      , i = React.useMemo( () => ({
        toggleableRowGroups: t,
        setToggleableRowGroups: n
    }), [t, n]);
    return React.createElement(I2.Provider, {
        value: i,
        children: e
    })
}
  , TX = ({children: e}) => {
    const [t,n] = React.useState(new Map)
      , i = React.useCallback(s => {
        n(l => {
            const c = new Map(l);
            return c.set(s, (c.get(s) || 0) + 1),
            c
        }
        )
    }
    , [])
      , a = React.useCallback(s => {
        n(l => {
            const c = new Map(l)
              , d = c.get(s) || 0;
            return d <= 1 ? c.delete(s) : c.set(s, d - 1),
            c
        }
        )
    }
    , [])
      , r = React.useMemo( () => ({
        columnsWithActivator: t,
        incrementActivatorCount: i,
        decrementActivatorCount: a
    }), [t, i, a]);
    return React.createElement(N2.Provider, {
        value: r,
        children: e
    })
}
  , PX = ({children: e, headings: t, stickyRowActions: n}) => {
    const i = at()
      , {containsRowActions: a} = j2()
      , {toggleableRowGroups: r} = Gs()
      , s = r.size > 0
      , l = React.useMemo( () => {
        const p = a && t.length > 0;
        if (!p && !s)
            return t;
        const f = {
            title: i.translate("Polaris.AlphaTable.TableRowGroups.heading"),
            id: `${sy}row_groups_column`,
            content: React.createElement(IX, {}),
            sticky: "inline-end",
            width: "max-content"
        }
          , v = {
            title: i.translate("Polaris.AlphaTable.TableRowActions.heading"),
            id: `${sy}row_actions_column`,
            hideLabel: !0,
            sticky: n ? "inline-end" : void 0,
            width: "max-content",
            alignment: "end"
        }
          , g = [];
        return p && g.push(v),
        s && g.push(f),
        [...t, ...g]
    }
    , [t, a, i, n, s])
      , c = React.useCallback(p => l[p], [l])
      , d = React.useMemo( () => ({
        getHeading: c,
        headings: l
    }), [c, l]);
    return React.createElement(L2.Provider, {
        value: d,
        children: e
    })
}
;
function IX() {
    const {toggleableRowGroups: e, setToggleableRowGroups: t} = Gs()
      , n = at()
      , i = Array.from(e.values()).every(r => r);
    function a(r) {
        t(s => {
            const l = new Map(s);
            return l.forEach( (c, d) => {
                l.set(d, r)
            }
            ),
            l
        }
        )
    }
    return React.createElement("div", {
        className: bd.RowGroupToggleWrap,
        children: React.createElement(nt, {
            icon: React.createElement(Fe, {
                type: i ? "chevron-up" : "chevron-down"
            }),
            onClick: () => a(!i),
            accessibilityLabel: n.translate("Polaris.AlphaTable.TableRowGroups.heading"),
            size: "micro",
            variant: "tertiary"
        })
    })
}
function LX() {
    const e = React.useRef(null)
      , {scrollableAreaRef: t} = cc();
    React.useEffect( () => {
        if (n(),
        !t.current)
            return;
        const i = ji( () => {
            n()
        }
        , 100)
          , a = new ResizeObserver( () => {
            i()
        }
        );
        return a.observe(t.current),
        () => {
            i.cancel(),
            a.disconnect()
        }
    }
    , []);
    function n() {
        if (!t.current)
            return;
        const i = t.current.scrollLeft;
        requestAnimationFrame( () => {
            e.current && (e.current.scrollLeft = i)
        }
        )
    }
    return {
        stickyScrollableAreaRef: e,
        scrollableAreaRef: t,
        handleTableScroll: n
    }
}
const z2 = () => {
    const {scrollableAreaRef: e, inlineEndStickyOffsets: t, inlineStartStickyOffsets: n} = cc()
      , [i,a] = React.useState(!1)
      , r = React.useRef(i)
      , s = React.useMemo( () => [...n].reverse(), [n]);
    return React.useEffect( () => {
        const l = e.current;
        if (!l)
            return;
        function c(v) {
            if (!v)
                return !1;
            const g = t[0]
              , y = (g == null ? void 0 : g.columnBecomesSticky) + (g == null ? void 0 : g.borderXPosition)
              , b = v.scrollLeft
              , k = Math.floor(v.scrollWidth - b - v.clientWidth)
              , C = s.find(A => b > A.columnBecomesSticky)
              , x = (C == null ? void 0 : C.borderXPosition) || 0;
            return v.clientWidth - x - y + k < 0
        }
        let d = !1;
        const p = () => {
            d || (window.requestAnimationFrame( () => {
                const v = c(l);
                v !== r.current && (r.current = v,
                a(v)),
                d = !1
            }
            ),
            d = !0)
        }
          , f = c(l);
        return f !== r.current && (a(f),
        r.current = f),
        l.addEventListener("scroll", p, {
            passive: !0
        }),
        () => {
            l.removeEventListener("scroll", p)
        }
    }
    , [e, t, n, s]),
    i
}
;
function V2() {
    const {inlineStartStickyOffsets: e, inlineEndStickyOffsets: t, scrollableAreaRef: n} = cc()
      , [i,a] = React.useState(!1);
    return React.useEffect( () => {
        const r = n.current;
        if (!r)
            return;
        const s = new ResizeObserver( ([l]) => {
            const c = e.length ? e[e.length - 1].borderXPosition : 0
              , d = t.length ? t[0].borderXPosition : 0;
            a(l.target.clientWidth < c + d)
        }
        );
        return s.observe(r),
        () => {
            s.disconnect()
        }
    }
    , [e, t, n]),
    i
}
function FX(e) {
    const {renderedVariant: t} = zi()
      , {setColumnWidths: n} = cc();
    React.useEffect( () => {
        function i(s) {
            const l = Array.from((s == null ? void 0 : s.querySelectorAll('div[role="columnheader"]')) ?? []).map(c => c.getBoundingClientRect().width);
            n(l)
        }
        if (!e.current)
            return;
        const a = new ResizeObserver( ([s]) => {
            i(s.target)
        }
        );
        a.observe(e.current);
        const r = new MutationObserver( () => {
            e.current && i(e.current)
        }
        );
        return r.observe(e.current, {
            childList: !0,
            subtree: !0
        }),
        () => {
            a.disconnect(),
            r.disconnect()
        }
    }
    , [n, t, e])
}
function EX({selectedValues: e, selectedState: t, isFilteringToSelectedOnly: n, setShowOnlySelected: i}) {
    const {toggleableRowGroups: a} = Gs()
      , {renderedVariant: r} = zi()
      , s = a.size > 0
      , l = r === "list"
      , c = e.size > 0 && t !== "all" && !s && !l;
    React.useEffect( () => {
        (e.size === 0 || s || l) && n && i(!1)
    }
    , [e.size, n, i, s, l]);
    const d = React.useCallback(p => {
        i(p)
    }
    , [i]);
    return {
        shouldShowToggle: c,
        handleSwitchChange: d
    }
}
var _l = {
    TableActions: "Polaris-AlphaTable-TableActions",
    TableActionsContainer: "Polaris-AlphaTable-TableActions__TableActionsContainer",
    isList: "Polaris-AlphaTable-TableActions--isList",
    TableActionsActivator: "Polaris-AlphaTable-TableActions__TableActionsActivator",
    TableActionsWrapper: "Polaris-AlphaTable-TableActions__TableActionsWrapper",
    SomeSelectedLabel: "Polaris-AlphaTable-TableActions__SomeSelectedLabel",
    ShowSelectedToggle: "Polaris-AlphaTable-TableActions__ShowSelectedToggle"
};
function BI() {
    return (e, t) => {
        const n = t.name;
        if (n !== n.toLowerCase())
            throw new Error(`Event listener property names must be lowercase. "${n}" is not lowercase.`);
        if (!n.startsWith("on"))
            throw new Error(`Event listener property names must start with "on". "${n}" does not start with "on".`);
        const i = n.slice(2);
        return {
            set(a) {
                const r = e.get.call(this);
                return r && this.removeEventListener(i, r),
                a && this.addEventListener(i, a),
                e.set.call(this, a)
            },
            get() {
                return e.get.call(this)
            }
        }
    }
}
function h0() {
    return {
        defaultValue: !1,
        parseAttribute(e) {
            return typeof e == "string"
        },
        set(e, t) {
            t(e ? String(e) : "")
        },
        get(e) {
            return e ? typeof e == "string" ? !0 : e : !1
        },
        toAttribute(e) {
            return e ? "" : null
        }
    }
}
function Ds(e={}) {
    const {defaultValue: t} = e
      , n = t ?? "";
    return {
        defaultValue: n,
        get(i) {
            return i || n
        },
        toAttribute(i) {
            return i === n ? null : i
        }
    }
}
let eC = !1;
const _g = new Set;
function U2(e, t) {
    eb( () => {
        let n;
        const i = () => {
            n = e()
        }
        ;
        return _g.add(i),
        eC || (eC = !0,
        requestAnimationFrame( () => {
            eC = !1;
            for (const a of _g)
                try {
                    a()
                } catch (r) {
                    Us("useBeforeNextPaint", "Error running callback", r)
                }
            _g.clear()
        }
        )),
        () => {
            _g.delete(i),
            n == null || n()
        }
    }
    , t)
}
function $2(e) {
    var i;
    const t = ry(null)
      , n = (i = t.current) == null ? void 0 : i.ownerDocument;
    return U2( () => {
        var r;
        if (!t.current)
            return;
        const a = t.current.getRootNode();
        "window"in a && !("styleSheets"in a) || Pp(a, e, (r = t.current.ownerDocument.defaultView) == null ? void 0 : r.CSSStyleSheet)
    }
    , [n]),
    t
}
const Ed = Symbol("internals");
let MX = ( () => {
    var k, C, x, A, _, w, T, P, I;
    let e = tb, t, n = [], i = [], a, r = [], s = [], l, c = [], d = [], p, f = [], v = [], g, y = [], b = [];
    return x = class extends (C = e,
    k = Ed,
    C) {
        [k: string]: any;
        constructor(D) {
            super(D);
            te(this, k);
            vt(this, A);
            vt(this, _, je(this, n, null));
            vt(this, w, (je(this, i),
            je(this, r, null)));
            vt(this, T, (je(this, s),
            je(this, c, void 0)));
            vt(this, P, (je(this, d),
            je(this, f, void 0)));
            vt(this, I, (je(this, v),
            je(this, y, void 0)));
            je(this, b),
            this[Ed] = this.attachInternals()
        }
        get onchange() {
            return rt(this, _)
        }
        set onchange(D) {
            yt(this, _, D)
        }
        get oninput() {
            return rt(this, w)
        }
        set oninput(D) {
            yt(this, w, D)
        }
        get disabled() {
            return rt(this, T)
        }
        set disabled(D) {
            yt(this, T, D)
        }
        get id() {
            return rt(this, P)
        }
        set id(D) {
            yt(this, P, D)
        }
        get name() {
            return rt(this, I)
        }
        set name(D) {
            yt(this, I, D)
        }
        get value() {
            return rt(this, A) ?? this.defaultValue ?? ""
        }
        set value(D) {
            D !== rt(this, A) && (yt(this, A, D),
            this[Ed].setFormValue(D),
            this.queueRender()),
            this.dispatchEvent(new Event("valuemodified",{
                bubbles: !0
            }))
        }
    }
    ,
    A = new WeakMap,
    _ = new WeakMap,
    w = new WeakMap,
    T = new WeakMap,
    P = new WeakMap,
    I = new WeakMap,
    ( () => {
        const D = typeof Symbol == "function" && Symbol.metadata ? Object.create(e[Symbol.metadata] ?? null) : void 0;
        t = [BI()],
        a = [BI()],
        l = [jt(h0())],
        p = [jt(Ds())],
        g = [jt(Ds())],
        Tt(x, null, t, {
            kind: "accessor",
            name: "onchange",
            static: !1,
            private: !1,
            access: {
                has: M => "onchange"in M,
                get: M => M.onchange,
                set: (M, O) => {
                    M.onchange = O
                }
            },
            metadata: D
        }, n, i),
        Tt(x, null, a, {
            kind: "accessor",
            name: "oninput",
            static: !1,
            private: !1,
            access: {
                has: M => "oninput"in M,
                get: M => M.oninput,
                set: (M, O) => {
                    M.oninput = O
                }
            },
            metadata: D
        }, r, s),
        Tt(x, null, l, {
            kind: "accessor",
            name: "disabled",
            static: !1,
            private: !1,
            access: {
                has: M => "disabled"in M,
                get: M => M.disabled,
                set: (M, O) => {
                    M.disabled = O
                }
            },
            metadata: D
        }, c, d),
        Tt(x, null, p, {
            kind: "accessor",
            name: "id",
            static: !1,
            private: !1,
            access: {
                has: M => "id"in M,
                get: M => M.id,
                set: (M, O) => {
                    M.id = O
                }
            },
            metadata: D
        }, f, v),
        Tt(x, null, g, {
            kind: "accessor",
            name: "name",
            static: !1,
            private: !1,
            access: {
                has: M => "name"in M,
                get: M => M.name,
                set: (M, O) => {
                    M.name = O
                }
            },
            metadata: D
        }, y, b),
        D && Object.defineProperty(x, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: D
        })
    }
    )(),
    te(x, "formAssociated", !0),
    x
}
)();
const RX = ".field-details{display:flex;gap:.25rem;font-size:.75rem;line-height:1rem;color:#616161}@media (min-width:48rem),(pointer:fine){.field-details{letter-spacing:0}}.field-details.field-details-error{--s-icon-color-25041:rgba(142, 11, 33, 1);color:#8e0b21}.field-details.field-details-disabled{--s-icon-color-25041:rgba(204, 204, 204, 1);color:#b5b5b5}"
  , jX = ({id: e, disabled: t, error: n, details: i}) => {
    const a = $2(RX);
    return !n && !i ? null : Kn("div", {
        id: e,
        ref: a,
        ...n && {
            "aria-live": "polite"
        },
        class: nb({
            "field-details": !0,
            "field-details-disabled": t,
            "field-details-error": !!n
        })
    }, n ? Kn(sc, null, Kn("s-icon", {
        type: "alert-circle",
        size: "small",
        tone: "auto"
    }), n) : i)
}
;
let DX = ( () => {
    var A, _, w, T, P, I, L, R, D, M;
    let e = MX, t, n = [], i = [], a, r = [], s = [], l, c = [], d = [], p, f = [], v = [], g, y = [], b = [], k, C = [], x = [];
    return M = class extends e {
        [k: string]: any;
        constructor(B) {
            super(B);
            vt(this, A);
            vt(this, _);
            vt(this, w, !1);
            vt(this, T, je(this, n, void 0));
            vt(this, P, (je(this, i),
            je(this, r, void 0)));
            vt(this, I, (je(this, s),
            je(this, c, void 0)));
            vt(this, L, (je(this, d),
            je(this, f, void 0)));
            vt(this, R, (je(this, v),
            je(this, y, void 0)));
            vt(this, D, (je(this, b),
            je(this, C, void 0)));
            je(this, x)
        }
        get checked() {
            return rt(this, A) ?? this.defaultChecked
        }
        set checked(B) {
            yt(this, A, B);
            const H = B ? this.value : null;
            this[Ed].setFormValue(H),
            this.queueRender()
        }
        get value() {
            return rt(this, _) || "on"
        }
        set value(B) {
            yt(this, _, B),
            this.queueRender()
        }
        get defaultChecked() {
            return rt(this, T)
        }
        set defaultChecked(B) {
            yt(this, T, B)
        }
        get accessibilityLabel() {
            return rt(this, P)
        }
        set accessibilityLabel(B) {
            yt(this, P, B)
        }
        get details() {
            return rt(this, I)
        }
        set details(B) {
            yt(this, I, B)
        }
        get error() {
            return rt(this, L)
        }
        set error(B) {
            yt(this, L, B)
        }
        get label() {
            return rt(this, R)
        }
        set label(B) {
            yt(this, R, B)
        }
        get required() {
            return rt(this, D)
        }
        set required(B) {
            yt(this, D, B)
        }
        formResetCallback() {
            this.checked = !!this.defaultChecked;
            const B = this.defaultChecked ? this.value : null;
            this[Ed].setFormValue(B)
        }
    }
    ,
    A = new WeakMap,
    _ = new WeakMap,
    w = new WeakMap,
    T = new WeakMap,
    P = new WeakMap,
    I = new WeakMap,
    L = new WeakMap,
    R = new WeakMap,
    D = new WeakMap,
    ( () => {
        const B = typeof Symbol == "function" && Symbol.metadata ? Object.create(e[Symbol.metadata] ?? null) : void 0;
        t = [jt(h0(), {
            attribute: "checked",
            onChange: H => {
                if (!rt(H, w)) {
                    const q = H.defaultChecked ? H.value : null;
                    H[Ed].setFormValue(q),
                    yt(H, w, !0)
                }
            }
        })],
        a = [jt(Ds())],
        l = [jt(Ds())],
        p = [jt(Ds())],
        g = [jt(Ds())],
        k = [jt(h0())],
        Tt(M, null, t, {
            kind: "accessor",
            name: "defaultChecked",
            static: !1,
            private: !1,
            access: {
                has: H => "defaultChecked"in H,
                get: H => H.defaultChecked,
                set: (H, q) => {
                    H.defaultChecked = q
                }
            },
            metadata: B
        }, n, i),
        Tt(M, null, a, {
            kind: "accessor",
            name: "accessibilityLabel",
            static: !1,
            private: !1,
            access: {
                has: H => "accessibilityLabel"in H,
                get: H => H.accessibilityLabel,
                set: (H, q) => {
                    H.accessibilityLabel = q
                }
            },
            metadata: B
        }, r, s),
        Tt(M, null, l, {
            kind: "accessor",
            name: "details",
            static: !1,
            private: !1,
            access: {
                has: H => "details"in H,
                get: H => H.details,
                set: (H, q) => {
                    H.details = q
                }
            },
            metadata: B
        }, c, d),
        Tt(M, null, p, {
            kind: "accessor",
            name: "error",
            static: !1,
            private: !1,
            access: {
                has: H => "error"in H,
                get: H => H.error,
                set: (H, q) => {
                    H.error = q
                }
            },
            metadata: B
        }, f, v),
        Tt(M, null, g, {
            kind: "accessor",
            name: "label",
            static: !1,
            private: !1,
            access: {
                has: H => "label"in H,
                get: H => H.label,
                set: (H, q) => {
                    H.label = q
                }
            },
            metadata: B
        }, y, b),
        Tt(M, null, k, {
            kind: "accessor",
            name: "required",
            static: !1,
            private: !1,
            access: {
                has: H => "required"in H,
                get: H => H.required,
                set: (H, q) => {
                    H.required = q
                }
            },
            metadata: B
        }, C, x),
        B && Object.defineProperty(M, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: B
        })
    }
    )(),
    M
}
)();
const H2 = "s-switch"
  , OX = {}
  , BX = ".visually-hidden{inline-size:1px;block-size:1px;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;position:absolute;white-space:nowrap}"
  , W2 = ({children: e}) => {
    const t = $2(BX);
    return Kn("span", {
        ref: t,
        class: "visually-hidden"
    }, e)
}
;
function zX(e, t) {
    fY( () => {
        const n = i => {
            i instanceof MouseEvent && !i.isTrusted && i.target === e && queueMicrotask( () => {
                if (i.defaultPrevented)
                    return;
                const r = t.current;
                if (!r)
                    return;
                const s = new MouseEvent("click",{
                    bubbles: !0,
                    cancelable: !0,
                    shiftKey: i.shiftKey,
                    metaKey: i.metaKey,
                    ctrlKey: i.ctrlKey,
                    view: window
                });
                if (r instanceof HTMLAnchorElement && (s.metaKey || s.ctrlKey || s.shiftKey)) {
                    const c = r.target;
                    r.target = "_blank",
                    r.dispatchEvent(s),
                    r.target = c
                } else
                    r.dispatchEvent(s)
            }
            )
        }
        ;
        return e.addEventListener("click", n),
        () => e.removeEventListener("click", n)
    }
    , [e, t])
}
const VX = "s-grid"
  , DGe = {};
let ec = ""
  , g0 = []
  , Hr = 0
  , Qo = 0
  , Kc = []
  , tC = !1;
class Kd extends Error {
    [k: string]: any;
}
function UX(e) {
    if (tC)
        throw Error("Cannot tokenize recursively");
    for (tC = !0,
    ec = e,
    g0 = [],
    Hr = 0,
    Qo = 0,
    Kc = []; !C_(); )
        Qo = Hr,
        HX();
    if (Qo = Hr,
    ho("EOF"),
    tC = !1,
    Kc.length)
        throw new Kd(Kc.join(`
`));
    return g0
}
function C_() {
    return Hr >= ec.length
}
function Tc() {
    return ec[Hr++]
}
function ho(e) {
    const t = ec.substring(Qo, Hr).trim();
    g0.push({
        type: e,
        text: t
    })
}
function zI(e) {
    !C_() && ec[Hr] === e && Hr++
}
function $X(e) {
    const t = e.charCodeAt(0);
    return t >= 48 && t <= 57 || t >= 97 && t <= 122 || t >= 65 && t <= 90
}
function dp() {
    return C_() ? Y2 : ec[Hr]
}
function HX() {
    const e = Tc();
    switch (e) {
    case v0:
        break;
    case q2:
        {
            ho("LEFT_PAREN");
            break
        }
    case G2:
        {
            ho("RIGHT_PAREN");
            break
        }
    case "@":
        {
            for (; !VI.has(dp()); )
                Tc();
            const t = ec.substring(Qo, Hr);
            t === "@media" || t === "@container" ? ho("MEDIA_TYPE") : Kc.push(`Invalid media type "${t}" starting at position ${Qo}.`);
            break
        }
    case K2:
        {
            ho("COMMA");
            break
        }
    case Z2:
        {
            zI("="),
            ho("COMPARATOR");
            break
        }
    case Q2:
        {
            zI("="),
            ho("COMPARATOR");
            break
        }
    case WX:
    case qX:
        {
            for (Qo++; dp() !== e; )
                Tc();
            ho("IDENTIFIER"),
            Tc();
            break
        }
    default:
        {
            if ($X(e)) {
                for (; !VI.has(dp()); )
                    Tc();
                const t = ec.substring(Qo, Hr)
                  , n = t.toLowerCase();
                if (n === "and" || n === "or")
                    t !== n ? Kc.push(`Keyword "${t}" is not case sensitive at position ${Qo}.`) : ho("OPERATOR");
                else if (n === "inline-size" || n === "block-size")
                    t !== n ? Kc.push(`Property "${t}" is not case sensitive at position ${Qo}.`) : ho("PROPERTY");
                else {
                    if (dp() === v0)
                        for (Tc(); !J2.has(dp()); )
                            Tc();
                    ho("IDENTIFIER")
                }
            } else
                Kc.push(`Unexpected character "${e}" at position ${Hr}.`);
            break
        }
    }
}
const q2 = "("
  , G2 = ")"
  , K2 = ","
  , Q2 = "<"
  , Z2 = ">"
  , Y2 = "\0"
  , v0 = " "
  , WX = "'"
  , qX = '"'
  , J2 = new Set([Y2, q2, G2, K2, Q2, Z2])
  , VI = new Set([...J2, v0]);
let ob = []
  , $f = 0;
function GX(e) {
    return ob = e,
    $f = 0,
    ZX()
}
function KX(e) {
    for (const t of e)
        if (A_(t))
            return ly(),
            !0;
    return !1
}
function A_(e) {
    return X2() ? !1 : Array.isArray(e) ? e.includes(Zo().type) : Zo().type === e
}
function ly() {
    return X2() || $f++,
    x_()
}
function Yl(e, t) {
    if (A_(e))
        return ly();
    throw new Kd(`${t}
Instead we found this word/character: "${Zo().text}"`)
}
function X2() {
    return ob[$f].type === "EOF"
}
function Zo() {
    return ob[$f]
}
function x_() {
    return ob[$f - 1]
}
const QX = "s-default";
function ZX() {
    let e;
    if (Zo().type === "MEDIA_TYPE" ? e = {
        responsiveType: ly().text,
        conditionalValues: [],
        fallbackValue: ""
    } : e = {
        responsiveType: "@container",
        conditionalValues: [],
        fallbackValue: "",
        name: ""
    },
    e.responsiveType === "@container") {
        const n = Zo().type === "IDENTIFIER" ? ly().text : QX;
        e.name = n
    }
    for (e.conditionalValues.push(UI()); KX(["COMMA"]) && Zo().type === "LEFT_PAREN"; )
        e.conditionalValues.push(UI());
    if (x_().type !== "COMMA")
        throw new Kd(`Expected a comma before the fallback value of "${Zo().text}"`);
    if (e.fallbackValue = Yl("IDENTIFIER", "Expected a final fallback value to be defined").text,
    Zo().type !== "EOF")
        throw new Kd(`Expected the query to end, instead found "${Zo().text}"`);
    return e
}
function UI() {
    return {
        condition: eO(),
        value: Yl("IDENTIFIER", "Expected an identifier").text
    }
}
function eO() {
    Yl("LEFT_PAREN", 'Expected a condition to start with a left parenthesis "("');
    const e = $I();
    let t = null;
    A_("COMPARATOR") && (t = $I(e.operator)),
    Yl("RIGHT_PAREN", 'Expected a condition to end with a right parenthesis ")"');
    let n = e;
    if (t && (n = {
        type: "compound-condition",
        left: e,
        right: t,
        operator: "and"
    }),
    Zo().type === "OPERATOR") {
        const i = Yl("OPERATOR", "Expected an operator")
          , a = eO();
        return {
            type: "compound-condition",
            left: n,
            right: a,
            operator: i.text
        }
    }
    return n
}
function $I(e) {
    const t = e ? x_() : Yl(["IDENTIFIER", "PROPERTY"], "Expected an identifier or property")
      , n = Yl("COMPARATOR", 'Expected a comparison operator (like "<" or ">")');
    if (e && e[0] === n.text[0])
        throw new Kd("Cannot have two different comparison operators (a less-than and a greater-than) in the same condition.");
    const i = Yl(t.type === "IDENTIFIER" ? "PROPERTY" : "IDENTIFIER", `Expected a ${t.type === "IDENTIFIER" ? 'property (like "inline-size")' : 'identifier (like "500px")'} to compare against.`);
    let a = n.text;
    return t.type === "IDENTIFIER" && (a === "<" ? a = ">" : a === "<=" ? a = ">=" : a === ">" ? a = "<" : a = "<="),
    {
        type: "condition",
        property: t.type === "PROPERTY" ? t.text : i.text,
        operator: a,
        value: t.type === "PROPERTY" ? i.text : t.text
    }
}
function YX(e) {
    return tO[e ?? "generic"]
}
function JX(e) {
    if (eee(e))
        return __[e]
}
const __ = {
    "list-item-separator": "separator",
    separator: "separator",
    alert: "alert",
    status: "status",
    presentation: "presentation",
    none: "none"
}
  , tO = {
    main: "main",
    header: "header",
    footer: "footer",
    section: "section",
    navigation: "nav",
    "ordered-list": "ol",
    "unordered-list": "ul",
    "list-item": "li",
    "list-item-separator": "li",
    separator: "div",
    alert: "div",
    generic: "div",
    aside: "aside",
    status: "div",
    presentation: "div",
    none: "div"
}
  , XX = [...Object.keys(__), ...Object.keys(tO)];
function eee(e) {
    return e != null && e in __
}
function w_(e, t) {
    const n = new Set
      , i = Object.keys(e);
    for (const a of t) {
        let r = [a];
        for (const s of i) {
            const l = e[s] ?? []
              , c = [];
            for (; r.length > 0; ) {
                const d = r.shift();
                for (const p of l) {
                    const f = d.replace(new RegExp(`{${s}}`,"g"), p);
                    c.push(f)
                }
            }
            r = c
        }
        r.forEach(s => n.add(s))
    }
    return Array.from(n)
}
const tee = ["visible", "hidden"]
  , nee = XX
  , Gp = ["none", "small-500", "small-400", "small-300", "small-200", "small-100", "small", "base", "large", "large-100", "large-200", "large-300", "large-400", "large-500"]
  , Zu = [...Gp, ""]
  , iee = ["auto", "none"]
  , aee = ["visible", "hidden", "exclusive"]
  , nO = ["", "none", "small-100", "small", "base", "large", "large-100"]
  , iO = ["", "none", "solid", "dashed", "auto"]
  , aO = ["", "subdued", "base", "strong"]
  , ree = w_({
    Size: nO,
    Style: iO,
    Color: aO
}, ["none", "{Size}", "{Size} {Color}", "{Size} {Color} {Style}"])
  , oee = ["none", "small-200", "small-100", "small", "base", "large", "large-100", "large-200"]
  , see = ["transparent", "base", "subdued", "strong"]
  , HI = "0rem"
  , lee = "0.125rem"
  , cee = "0.25rem"
  , uee = "0.375rem"
  , dee = "0.5rem"
  , WI = "0.75rem"
  , mee = "1rem"
  , qI = "1.25rem"
  , pee = "1.5rem"
  , fee = "2rem"
  , hee = "2.5rem"
  , gee = "3rem"
  , vee = "0rem"
  , yee = "0.25rem"
  , GI = "0.375rem"
  , bee = "0.5rem"
  , KI = "0.75rem"
  , kee = "1rem"
  , See = "0rem"
  , QI = "0.04125rem"
  , Cee = "0.0625rem"
  , ZI = "0.125rem"
  , Aee = "rgba(255, 255, 255, 1)"
  , xee = "rgba(247, 247, 247, 1)"
  , _ee = "rgba(243, 243, 243, 1)"
  , wee = "rgba(0, 0, 0, 0)"
  , Nee = "rgba(227, 227, 227, 1)"
  , Tee = "rgba(235, 235, 235, 1)"
  , Pee = "rgba(204, 204, 204, 1)"
  , Wo = {
    auto: HI,
    none: HI,
    "small-500": lee,
    "small-400": cee,
    "small-300": uee,
    "small-200": dee,
    "small-100": WI,
    small: WI,
    base: mee,
    large: qI,
    "large-100": qI,
    "large-200": pee,
    "large-300": fee,
    "large-400": hee,
    "large-500": gee
}
  , Iee = {
    none: vee,
    "small-200": yee,
    "small-100": GI,
    small: GI,
    base: bee,
    large: KI,
    "large-100": KI,
    "large-200": kee
}
  , rO = {
    none: "none",
    solid: "solid",
    dashed: "dashed",
    auto: "solid",
    "": ""
}
  , Lee = {
    transparent: wee,
    base: Aee,
    subdued: xee,
    strong: _ee
}
  , oO = {
    subdued: Tee,
    base: Nee,
    strong: Pee,
    "": ""
}
  , sO = {
    none: See,
    "small-100": QI,
    small: QI,
    base: Cee,
    large: ZI,
    "large-100": ZI
};
function Fee(e) {
    return GX(UX(e))
}
function Eee(e) {
    if (!lO(e.responsiveString))
        return null;
    try {
        const t = Fee(e.responsiveString)
          , {cssClassNameSelector: n, scaleToValueMap: i, cssPropertyName: a, canBeShorthand: r} = e;
        let s = y0({
            cssClassNameSelector: n,
            scaleToValueMap: i,
            scaleValue: t.fallbackValue,
            cssPropertyName: a,
            canBeShorthand: r
        });
        if (!s)
            return null;
        for (const l of t.conditionalValues)
            s += `${t.responsiveType}${t.responsiveType === "@container" ? `${t.name ? ` ${t.name} ` : ""}` : ""}${b0(l.condition)}{${y0({
                cssClassNameSelector: n,
                scaleToValueMap: i,
                scaleValue: l.value,
                cssPropertyName: a,
                canBeShorthand: r
            })}}`;
        return s
    } catch (t) {
        throw t instanceof Kd ? Error("Invalid responsive string. See error cause for details.", {
            cause: t
        }) : Error("Could not convert responsive string to CSS. See error cause for details.", {
            cause: t
        })
    }
}
function lO(e) {
    return typeof e == "string" && e.startsWith("@container")
}
function y0({cssClassNameSelector: e, scaleToValueMap: t, cssPropertyName: n, canBeShorthand: i, scaleValue: a}) {
    return t.anyValue && !CSS.supports(n, String(a)) ? (Us("responsive value builder", `CSS property ${n} with value ${String(a)} is not supported by the browser or is not a valid CSS value.`),
    null) : `.${e}{${Mee({
        scaleToValueMap: t,
        scaleValue: a,
        cssPropertyName: n,
        canBeShorthand: i
    })}}`
}
function Mee({scaleToValueMap: e, scaleValue: t, cssPropertyName: n, canBeShorthand: i}) {
    if (i) {
        const r = t.split(" ")
          , s = r.map(l => e[l]).join(" ");
        return n === "padding" && r.length > 0 && r.length <= 4 ? Ree(r, s, e) : `${n}:${s};`
    }
    const a = e[t];
    return !i && !a && e.anyValue ? `${n}:${t};` : `${n}:${a};`
}
function b0(e) {
    if (e.type === "compound-condition") {
        const t = b0(e.left)
          , n = b0(e.right);
        return t === "block-size" || n === "block-size" ? (Us("responsive value builder", "CSS property block-size is not supported."),
        "") : `${t} ${e.operator} ${n}`
    }
    return e.property === "block-size" ? (Us("responsive value builder", "CSS property block-size is not supported."),
    "") : `(${e.property} ${e.operator} ${e.value})`
}
function Ree(e, t, n) {
    if (e.length === 1)
        return `padding-block:${t};padding-inline:${t};`;
    if (e.length === 2) {
        const [i,a] = e;
        if (i !== void 0 && a !== void 0)
            return `padding-block:${n[i]};padding-inline:${n[a]};`
    }
    if (e.length === 3) {
        const [i,a,r] = e;
        if (i !== void 0 && a !== void 0 && r !== void 0)
            return `padding-block-start:${n[i]};padding-inline:${n[a]};padding-block-end:${n[r]};`
    }
    if (e.length === 4) {
        const [i,a,r,s] = e;
        if (i !== void 0 && a !== void 0 && r !== void 0 && s !== void 0)
            return `padding-block-start:${n[i]};padding-inline-end:${n[a]};padding-block-end:${n[r]};padding-inline-start:${n[s]};`
    }
    return ""
}
function jee(e) {
    const {responsiveString: t, cssClassNameSelector: n, scaleToValueMap: i, canBeShorthand: a, cssPropertyName: r} = e;
    return zf( () => {
        if (!lO(t))
            return null;
        try {
            const l = Eee({
                responsiveString: t,
                cssClassNameSelector: n,
                scaleToValueMap: i,
                canBeShorthand: a,
                cssPropertyName: r
            });
            return l ? Kn("style", null, l) : null
        } catch (l) {
            return Us("useResponsiveValue", `Error generating responsive value for "${r}" with value "${t}"`, l),
            null
        }
    }
    , [t, n, i, a, r])
}
function Yi({value: e, scaleToValueMap: t, canBeShorthand: n, cssClassNameSelector: i, cssPropertyName: a}) {
    const r = jee({
        responsiveString: e,
        cssClassNameSelector: i,
        scaleToValueMap: t,
        canBeShorthand: n,
        cssPropertyName: a
    });
    return zf( () => {
        if (e === "")
            return null;
        if (r)
            return r;
        const l = y0({
            cssClassNameSelector: i,
            scaleToValueMap: t,
            scaleValue: e,
            cssPropertyName: a,
            canBeShorthand: n
        });
        return l ? Kn("style", null, l) : null
    }
    , [e, r, t, n, i, a])
}
function cO({cssSelector: e, cssProperties: t}) {
    const n = t.filter( ({value: i}) => i).map( ({property: i, value: a}) => `${i}:${a};`).join("");
    return n ? Kn("style", null, `.${e} {${n}}`) : null
}
const Dee = e => {
    const [t="none",n="base",i="auto"] = e.split(" ");
    return `${sO[t]} ${oO[n]} ${rO[i]}`
}
;
function Yu({defaultValue: e, type: t}) {
    return {
        defaultValue: e,
        get(n) {
            return Oee(n, t) ? n : e
        }
    }
}
function Oee(e, t) {
    return typeof e != "string" ? !1 : e === "0" || t === "auto" && e === "auto" || t === "none" && e === "none" ? !0 : !(!e.endsWith("px") && !e.endsWith("%"))
}
let Bee = ( () => {
    var cn, Pt, Rt, wn, Jt, Dt, we, ae, Pe, Ie, Be, dt, _t, ht, Wt, It, yn, pn, On, Cn, ri, Ai, oi, Ui, zt;
    let e = tb, t, n = [], i = [], a, r = [], s = [], l, c = [], d = [], p, f = [], v = [], g, y = [], b = [], k, C = [], x = [], A, _ = [], w = [], T, P = [], I = [], L, R = [], D = [], M, O = [], z = [], B, H = [], q = [], W, V = [], $ = [], Q, K = [], J = [], X, se = [], ne = [], Y, ue = [], ge = [], de, ve = [], Le = [], Ce, Ae = [], re = [], le, ye = [], Ee = [], Qe, De = [], Ue = [], Ye, Mt = [], Xe = [], it, ke = [], $e = [], Se, Re = [], Me = [], Ze, Ct = [], Nt = [], Ut, Ht = [], vn = [];
    return zt = class extends e {
        [k: string]: any;
        constructor(He) {
            super(He);
            vt(this, cn, je(this, n, void 0));
            vt(this, Pt, (je(this, i),
            je(this, r, void 0)));
            vt(this, Rt, (je(this, s),
            je(this, c, void 0)));
            vt(this, wn, (je(this, d),
            je(this, f, void 0)));
            vt(this, Jt, (je(this, v),
            je(this, y, void 0)));
            vt(this, Dt, (je(this, b),
            je(this, C, void 0)));
            vt(this, we, (je(this, x),
            je(this, _, void 0)));
            vt(this, ae, (je(this, w),
            je(this, P, void 0)));
            vt(this, Pe, (je(this, I),
            je(this, R, void 0)));
            vt(this, Ie, (je(this, D),
            je(this, O, void 0)));
            vt(this, Be, (je(this, z),
            je(this, H, void 0)));
            vt(this, dt, (je(this, q),
            je(this, V, void 0)));
            vt(this, _t, (je(this, $),
            je(this, K, void 0)));
            vt(this, ht, (je(this, J),
            je(this, se, void 0)));
            vt(this, Wt, (je(this, ne),
            je(this, ue, void 0)));
            vt(this, It, (je(this, ge),
            je(this, ve, void 0)));
            vt(this, yn, (je(this, Le),
            je(this, Ae, void 0)));
            vt(this, pn, (je(this, re),
            je(this, ye, void 0)));
            vt(this, On, (je(this, Ee),
            je(this, De, void 0)));
            vt(this, Cn, (je(this, Ue),
            je(this, Mt, void 0)));
            vt(this, ri, (je(this, Xe),
            je(this, ke, void 0)));
            vt(this, Ai, (je(this, $e),
            je(this, Re, void 0)));
            vt(this, oi, (je(this, Me),
            je(this, Ct, void 0)));
            vt(this, Ui, (je(this, Nt),
            je(this, Ht, void 0)));
            je(this, vn)
        }
        get accessibilityRole() {
            return rt(this, cn)
        }
        set accessibilityRole(He) {
            yt(this, cn, He)
        }
        get background() {
            return rt(this, Pt)
        }
        set background(He) {
            yt(this, Pt, He)
        }
        get blockSize() {
            return rt(this, Rt)
        }
        set blockSize(He) {
            yt(this, Rt, He)
        }
        get minBlockSize() {
            return rt(this, wn)
        }
        set minBlockSize(He) {
            yt(this, wn, He)
        }
        get maxBlockSize() {
            return rt(this, Jt)
        }
        set maxBlockSize(He) {
            yt(this, Jt, He)
        }
        get inlineSize() {
            return rt(this, Dt)
        }
        set inlineSize(He) {
            yt(this, Dt, He)
        }
        get minInlineSize() {
            return rt(this, we)
        }
        set minInlineSize(He) {
            yt(this, we, He)
        }
        get maxInlineSize() {
            return rt(this, ae)
        }
        set maxInlineSize(He) {
            yt(this, ae, He)
        }
        get overflow() {
            return rt(this, Pe)
        }
        set overflow(He) {
            yt(this, Pe, He)
        }
        get padding() {
            return rt(this, Ie)
        }
        set padding(He) {
            yt(this, Ie, He)
        }
        get paddingBlock() {
            return rt(this, Be)
        }
        set paddingBlock(He) {
            yt(this, Be, He)
        }
        get paddingBlockStart() {
            return rt(this, dt)
        }
        set paddingBlockStart(He) {
            yt(this, dt, He)
        }
        get paddingBlockEnd() {
            return rt(this, _t)
        }
        set paddingBlockEnd(He) {
            yt(this, _t, He)
        }
        get paddingInline() {
            return rt(this, ht)
        }
        set paddingInline(He) {
            yt(this, ht, He)
        }
        get paddingInlineStart() {
            return rt(this, Wt)
        }
        set paddingInlineStart(He) {
            yt(this, Wt, He)
        }
        get paddingInlineEnd() {
            return rt(this, It)
        }
        set paddingInlineEnd(He) {
            yt(this, It, He)
        }
        get border() {
            return rt(this, yn)
        }
        set border(He) {
            yt(this, yn, He)
        }
        get borderWidth() {
            return rt(this, pn)
        }
        set borderWidth(He) {
            yt(this, pn, He)
        }
        get borderStyle() {
            return rt(this, On)
        }
        set borderStyle(He) {
            yt(this, On, He)
        }
        get borderColor() {
            return rt(this, Cn)
        }
        set borderColor(He) {
            yt(this, Cn, He)
        }
        get borderRadius() {
            return rt(this, ri)
        }
        set borderRadius(He) {
            yt(this, ri, He)
        }
        get accessibilityLabel() {
            return rt(this, Ai)
        }
        set accessibilityLabel(He) {
            yt(this, Ai, He)
        }
        get accessibilityVisibility() {
            return rt(this, oi)
        }
        set accessibilityVisibility(He) {
            yt(this, oi, He)
        }
        get display() {
            return rt(this, Ui)
        }
        set display(He) {
            yt(this, Ui, He)
        }
    }
    ,
    cn = new WeakMap,
    Pt = new WeakMap,
    Rt = new WeakMap,
    wn = new WeakMap,
    Jt = new WeakMap,
    Dt = new WeakMap,
    we = new WeakMap,
    ae = new WeakMap,
    Pe = new WeakMap,
    Ie = new WeakMap,
    Be = new WeakMap,
    dt = new WeakMap,
    _t = new WeakMap,
    ht = new WeakMap,
    Wt = new WeakMap,
    It = new WeakMap,
    yn = new WeakMap,
    pn = new WeakMap,
    On = new WeakMap,
    Cn = new WeakMap,
    ri = new WeakMap,
    Ai = new WeakMap,
    oi = new WeakMap,
    Ui = new WeakMap,
    ( () => {
        const He = typeof Symbol == "function" && Symbol.metadata ? Object.create(e[Symbol.metadata] ?? null) : void 0;
        t = [jt(bn(nee, {
            defaultValue: "generic"
        }))],
        a = [jt(bn(see, {
            defaultValue: "transparent"
        }))],
        l = [jt(Yu({
            defaultValue: "auto",
            type: "auto"
        }))],
        p = [jt(Yu({
            defaultValue: "0",
            type: "size"
        }))],
        g = [jt(Yu({
            defaultValue: "none",
            type: "none"
        }))],
        k = [jt(Yu({
            defaultValue: "auto",
            type: "auto"
        }))],
        A = [jt(Yu({
            defaultValue: "0",
            type: "size"
        }))],
        T = [jt(Yu({
            defaultValue: "none",
            type: "none"
        }))],
        L = [jt(bn(tee, {
            defaultValue: "visible"
        }))],
        M = [jt(bn(Gp, {
            defaultValue: "none",
            separator: " ",
            canBeResponsive: !0
        }))],
        B = [jt(bn(Zu, {
            defaultValue: "",
            separator: " ",
            canBeResponsive: !0
        }))],
        W = [jt(bn(Zu, {
            defaultValue: "",
            canBeResponsive: !0
        }))],
        Q = [jt(bn(Zu, {
            defaultValue: "",
            canBeResponsive: !0
        }))],
        X = [jt(bn(Zu, {
            defaultValue: "",
            separator: " ",
            canBeResponsive: !0
        }))],
        Y = [jt(bn(Zu, {
            defaultValue: "",
            canBeResponsive: !0
        }))],
        de = [jt(bn(Zu, {
            defaultValue: "",
            canBeResponsive: !0
        }))],
        Ce = [jt(bn(ree, {
            defaultValue: "none"
        }))],
        le = [jt(bn(nO, {
            defaultValue: "",
            separator: " "
        }))],
        Qe = [jt(bn(iO, {
            defaultValue: "",
            separator: " "
        }))],
        Ye = [jt(bn(aO, {
            defaultValue: "",
            separator: " "
        }))],
        it = [jt(bn(oee, {
            defaultValue: "none",
            separator: " "
        }))],
        Se = [jt(Ds())],
        Ze = [jt(bn(aee, {
            defaultValue: "visible"
        }))],
        Ut = [jt(bn(iee, {
            defaultValue: "auto",
            canBeResponsive: !0
        }))],
        Tt(zt, null, t, {
            kind: "accessor",
            name: "accessibilityRole",
            static: !1,
            private: !1,
            access: {
                has: pe => "accessibilityRole"in pe,
                get: pe => pe.accessibilityRole,
                set: (pe, st) => {
                    pe.accessibilityRole = st
                }
            },
            metadata: He
        }, n, i),
        Tt(zt, null, a, {
            kind: "accessor",
            name: "background",
            static: !1,
            private: !1,
            access: {
                has: pe => "background"in pe,
                get: pe => pe.background,
                set: (pe, st) => {
                    pe.background = st
                }
            },
            metadata: He
        }, r, s),
        Tt(zt, null, l, {
            kind: "accessor",
            name: "blockSize",
            static: !1,
            private: !1,
            access: {
                has: pe => "blockSize"in pe,
                get: pe => pe.blockSize,
                set: (pe, st) => {
                    pe.blockSize = st
                }
            },
            metadata: He
        }, c, d),
        Tt(zt, null, p, {
            kind: "accessor",
            name: "minBlockSize",
            static: !1,
            private: !1,
            access: {
                has: pe => "minBlockSize"in pe,
                get: pe => pe.minBlockSize,
                set: (pe, st) => {
                    pe.minBlockSize = st
                }
            },
            metadata: He
        }, f, v),
        Tt(zt, null, g, {
            kind: "accessor",
            name: "maxBlockSize",
            static: !1,
            private: !1,
            access: {
                has: pe => "maxBlockSize"in pe,
                get: pe => pe.maxBlockSize,
                set: (pe, st) => {
                    pe.maxBlockSize = st
                }
            },
            metadata: He
        }, y, b),
        Tt(zt, null, k, {
            kind: "accessor",
            name: "inlineSize",
            static: !1,
            private: !1,
            access: {
                has: pe => "inlineSize"in pe,
                get: pe => pe.inlineSize,
                set: (pe, st) => {
                    pe.inlineSize = st
                }
            },
            metadata: He
        }, C, x),
        Tt(zt, null, A, {
            kind: "accessor",
            name: "minInlineSize",
            static: !1,
            private: !1,
            access: {
                has: pe => "minInlineSize"in pe,
                get: pe => pe.minInlineSize,
                set: (pe, st) => {
                    pe.minInlineSize = st
                }
            },
            metadata: He
        }, _, w),
        Tt(zt, null, T, {
            kind: "accessor",
            name: "maxInlineSize",
            static: !1,
            private: !1,
            access: {
                has: pe => "maxInlineSize"in pe,
                get: pe => pe.maxInlineSize,
                set: (pe, st) => {
                    pe.maxInlineSize = st
                }
            },
            metadata: He
        }, P, I),
        Tt(zt, null, L, {
            kind: "accessor",
            name: "overflow",
            static: !1,
            private: !1,
            access: {
                has: pe => "overflow"in pe,
                get: pe => pe.overflow,
                set: (pe, st) => {
                    pe.overflow = st
                }
            },
            metadata: He
        }, R, D),
        Tt(zt, null, M, {
            kind: "accessor",
            name: "padding",
            static: !1,
            private: !1,
            access: {
                has: pe => "padding"in pe,
                get: pe => pe.padding,
                set: (pe, st) => {
                    pe.padding = st
                }
            },
            metadata: He
        }, O, z),
        Tt(zt, null, B, {
            kind: "accessor",
            name: "paddingBlock",
            static: !1,
            private: !1,
            access: {
                has: pe => "paddingBlock"in pe,
                get: pe => pe.paddingBlock,
                set: (pe, st) => {
                    pe.paddingBlock = st
                }
            },
            metadata: He
        }, H, q),
        Tt(zt, null, W, {
            kind: "accessor",
            name: "paddingBlockStart",
            static: !1,
            private: !1,
            access: {
                has: pe => "paddingBlockStart"in pe,
                get: pe => pe.paddingBlockStart,
                set: (pe, st) => {
                    pe.paddingBlockStart = st
                }
            },
            metadata: He
        }, V, $),
        Tt(zt, null, Q, {
            kind: "accessor",
            name: "paddingBlockEnd",
            static: !1,
            private: !1,
            access: {
                has: pe => "paddingBlockEnd"in pe,
                get: pe => pe.paddingBlockEnd,
                set: (pe, st) => {
                    pe.paddingBlockEnd = st
                }
            },
            metadata: He
        }, K, J),
        Tt(zt, null, X, {
            kind: "accessor",
            name: "paddingInline",
            static: !1,
            private: !1,
            access: {
                has: pe => "paddingInline"in pe,
                get: pe => pe.paddingInline,
                set: (pe, st) => {
                    pe.paddingInline = st
                }
            },
            metadata: He
        }, se, ne),
        Tt(zt, null, Y, {
            kind: "accessor",
            name: "paddingInlineStart",
            static: !1,
            private: !1,
            access: {
                has: pe => "paddingInlineStart"in pe,
                get: pe => pe.paddingInlineStart,
                set: (pe, st) => {
                    pe.paddingInlineStart = st
                }
            },
            metadata: He
        }, ue, ge),
        Tt(zt, null, de, {
            kind: "accessor",
            name: "paddingInlineEnd",
            static: !1,
            private: !1,
            access: {
                has: pe => "paddingInlineEnd"in pe,
                get: pe => pe.paddingInlineEnd,
                set: (pe, st) => {
                    pe.paddingInlineEnd = st
                }
            },
            metadata: He
        }, ve, Le),
        Tt(zt, null, Ce, {
            kind: "accessor",
            name: "border",
            static: !1,
            private: !1,
            access: {
                has: pe => "border"in pe,
                get: pe => pe.border,
                set: (pe, st) => {
                    pe.border = st
                }
            },
            metadata: He
        }, Ae, re),
        Tt(zt, null, le, {
            kind: "accessor",
            name: "borderWidth",
            static: !1,
            private: !1,
            access: {
                has: pe => "borderWidth"in pe,
                get: pe => pe.borderWidth,
                set: (pe, st) => {
                    pe.borderWidth = st
                }
            },
            metadata: He
        }, ye, Ee),
        Tt(zt, null, Qe, {
            kind: "accessor",
            name: "borderStyle",
            static: !1,
            private: !1,
            access: {
                has: pe => "borderStyle"in pe,
                get: pe => pe.borderStyle,
                set: (pe, st) => {
                    pe.borderStyle = st
                }
            },
            metadata: He
        }, De, Ue),
        Tt(zt, null, Ye, {
            kind: "accessor",
            name: "borderColor",
            static: !1,
            private: !1,
            access: {
                has: pe => "borderColor"in pe,
                get: pe => pe.borderColor,
                set: (pe, st) => {
                    pe.borderColor = st
                }
            },
            metadata: He
        }, Mt, Xe),
        Tt(zt, null, it, {
            kind: "accessor",
            name: "borderRadius",
            static: !1,
            private: !1,
            access: {
                has: pe => "borderRadius"in pe,
                get: pe => pe.borderRadius,
                set: (pe, st) => {
                    pe.borderRadius = st
                }
            },
            metadata: He
        }, ke, $e),
        Tt(zt, null, Se, {
            kind: "accessor",
            name: "accessibilityLabel",
            static: !1,
            private: !1,
            access: {
                has: pe => "accessibilityLabel"in pe,
                get: pe => pe.accessibilityLabel,
                set: (pe, st) => {
                    pe.accessibilityLabel = st
                }
            },
            metadata: He
        }, Re, Me),
        Tt(zt, null, Ze, {
            kind: "accessor",
            name: "accessibilityVisibility",
            static: !1,
            private: !1,
            access: {
                has: pe => "accessibilityVisibility"in pe,
                get: pe => pe.accessibilityVisibility,
                set: (pe, st) => {
                    pe.accessibilityVisibility = st
                }
            },
            metadata: He
        }, Ct, Nt),
        Tt(zt, null, Ut, {
            kind: "accessor",
            name: "display",
            static: !1,
            private: !1,
            access: {
                has: pe => "display"in pe,
                get: pe => pe.display,
                set: (pe, st) => {
                    pe.display = st
                }
            },
            metadata: He
        }, Ht, vn),
        He && Object.defineProperty(zt, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: He
        })
    }
    )(),
    zt
}
)();
function zee(e, t) {
    const {paddingBlock: n="", paddingBlockStart: i="", paddingBlockEnd: a="", paddingInline: r="", paddingInlineStart: s="", paddingInlineEnd: l="", padding: c=""} = e
      , d = Yi({
        value: n,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding-block",
        canBeShorthand: !0
    })
      , p = Yi({
        value: i,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding-block-start",
        canBeShorthand: !1
    })
      , f = Yi({
        value: a,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding-block-end",
        canBeShorthand: !1
    })
      , v = Yi({
        value: s,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding-inline-start",
        canBeShorthand: !1
    })
      , g = Yi({
        value: l,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding-inline-end",
        canBeShorthand: !1
    })
      , y = Yi({
        value: r,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding-inline",
        canBeShorthand: !0
    })
      , b = Yi({
        value: c,
        scaleToValueMap: Wo,
        cssClassNameSelector: t,
        cssPropertyName: "padding",
        canBeShorthand: !0
    });
    return Kn(sc, null, b, d, p, f, y, v, g)
}
function Vee({class: e="", cssSelector: t="box", element: n, styles: i}) {
    const a = YX(n.accessibilityRole)
      , r = JX(n.accessibilityRole)
      , s = Dee(n.border)
      , l = cO({
        cssSelector: t,
        cssProperties: [{
            property: "border",
            value: s
        }, {
            property: "block-size",
            value: n.blockSize
        }, {
            property: "max-block-size",
            value: n.maxBlockSize
        }, {
            property: "min-block-size",
            value: n.minBlockSize
        }, {
            property: "inline-size",
            value: n.inlineSize
        }, {
            property: "max-inline-size",
            value: n.maxInlineSize
        }, {
            property: "min-inline-size",
            value: n.minInlineSize
        }, {
            property: "overflow",
            value: n.overflow
        }]
    })
      , c = Yi({
        value: n.background,
        scaleToValueMap: Lee,
        cssClassNameSelector: t,
        cssPropertyName: "background"
    })
      , d = Yi({
        value: n.borderColor,
        scaleToValueMap: oO,
        cssClassNameSelector: t,
        cssPropertyName: "border-color",
        canBeShorthand: !0
    })
      , p = Yi({
        value: n.borderStyle,
        scaleToValueMap: rO,
        cssClassNameSelector: t,
        cssPropertyName: "border-style",
        canBeShorthand: !0
    })
      , f = Yi({
        value: n.borderWidth,
        scaleToValueMap: sO,
        cssClassNameSelector: t,
        cssPropertyName: "border-width",
        canBeShorthand: !0
    })
      , v = Yi({
        value: n.borderRadius,
        scaleToValueMap: Iee,
        cssClassNameSelector: t,
        cssPropertyName: "border-radius",
        canBeShorthand: !0
    })
      , g = zee(n, t);
    return Kn(sc, null, l, c, d, v, p, f, g, i ? i.map(y => y) : null, Kn(a, {
        role: r,
        class: nb({
            [e]: !0,
            [t]: !0
        }),
        "aria-label": n.accessibilityLabel || void 0,
        "aria-hidden": n.accessibilityVisibility === "hidden" ? !0 : void 0
    }, n.accessibilityVisibility === "exclusive" ? Kn(W2, null, Kn("slot", null)) : Kn("slot", null)))
}
const Uee = ".display-none{display:none}";
function $ee(e) {
    const {gap: t, rowGap: n, columnGap: i, gridTemplateColumns: a, gridTemplateRows: r} = e
      , s = cO({
        cssSelector: Pc,
        cssProperties: [{
            property: "place-items",
            value: e.placeItems
        }, {
            property: "align-items",
            value: e.alignItems
        }, {
            property: "justify-items",
            value: e.justifyItems
        }, {
            property: "place-content",
            value: e.placeContent
        }, {
            property: "align-content",
            value: e.alignContent
        }, {
            property: "justify-content",
            value: e.justifyContent
        }]
    })
      , l = Yi({
        value: t,
        scaleToValueMap: Wo,
        cssClassNameSelector: Pc,
        cssPropertyName: "gap",
        canBeShorthand: !0
    })
      , c = Yi({
        value: n,
        scaleToValueMap: Wo,
        cssClassNameSelector: Pc,
        cssPropertyName: "row-gap"
    })
      , d = Yi({
        value: i,
        scaleToValueMap: Wo,
        cssClassNameSelector: Pc,
        cssPropertyName: "column-gap"
    })
      , p = Yi({
        value: a,
        scaleToValueMap: {
            anyValue: "auto"
        },
        cssClassNameSelector: Pc,
        cssPropertyName: "grid-template-columns"
    })
      , f = Yi({
        value: r,
        scaleToValueMap: {
            anyValue: "auto"
        },
        cssClassNameSelector: Pc,
        cssPropertyName: "grid-template-rows"
    })
      , v = Yi({
        value: e.display,
        scaleToValueMap: Hee,
        cssClassNameSelector: "grid",
        cssPropertyName: "display"
    });
    return Kn(Vee, {
        cssSelector: Pc,
        element: e,
        styles: [s, l, c, d, f, p, v]
    })
}
const Pc = "grid"
  , Hee = {
    auto: "grid",
    none: "none"
}
  , Wee = {
    __proto__: null,
    ShadowRoot: $ee,
    styles: Uee
}
  , N_ = ["baseline", "first baseline", "last baseline"]
  , uO = ["space-between", "space-around", "space-evenly", "stretch"]
  , sb = ["center", "start", "end"]
  , lb = ["unsafe center", "unsafe start", "unsafe end", "safe center", "safe start", "safe end"]
  , dO = ["normal", "stretch", ...N_, ...lb, ...sb]
  , mO = ["normal", "stretch", ...N_, ...lb, ...sb]
  , qee = w_({
    AlignItems: dO,
    JustifyItems: mO
}, ["{AlignItems} {JustifyItems}", "{AlignItems}"])
  , pO = ["normal", ...N_, ...uO, ...lb, ...sb]
  , fO = ["normal", ...uO, ...lb, ...sb]
  , Gee = w_({
    AlignContent: pO,
    JustifyContent: fO
}, ["{AlignContent} {JustifyContent}", "{AlignContent}"]);
( () => {
    var K, J, X, se, ne, Y, ue, ge, de, ve, Le, Ce;
    let e = [d_(VX)], t, n = [], i, a = Bee, r, s = [], l = [], c, d = [], p = [], f, v = [], g = [], y, b = [], k = [], C, x = [], A = [], _, w = [], T = [], P, I = [], L = [], R, D = [], M = [], O, z = [], B = [], H, q = [], W = [], V, $ = [], Q = [];
    return Ce = class extends a {
        [k: string]: any;
        constructor() {
            super(Wee);
            vt(this, K, je(this, s, void 0));
            vt(this, J, (je(this, l),
            je(this, d, void 0)));
            vt(this, X, (je(this, p),
            je(this, v, void 0)));
            vt(this, se, (je(this, g),
            je(this, b, void 0)));
            vt(this, ne, (je(this, k),
            je(this, x, void 0)));
            vt(this, Y, (je(this, A),
            je(this, w, void 0)));
            vt(this, ue, (je(this, T),
            je(this, I, void 0)));
            vt(this, ge, (je(this, L),
            je(this, D, void 0)));
            vt(this, de, (je(this, M),
            je(this, z, void 0)));
            vt(this, ve, (je(this, B),
            je(this, q, void 0)));
            vt(this, Le, (je(this, W),
            je(this, $, void 0)));
            je(this, Q)
        }
        get gridTemplateColumns() {
            return rt(this, K)
        }
        set gridTemplateColumns(le) {
            yt(this, K, le)
        }
        get gridTemplateRows() {
            return rt(this, J)
        }
        set gridTemplateRows(le) {
            yt(this, J, le)
        }
        get justifyItems() {
            return rt(this, X)
        }
        set justifyItems(le) {
            yt(this, X, le)
        }
        get alignItems() {
            return rt(this, se)
        }
        set alignItems(le) {
            yt(this, se, le)
        }
        get placeItems() {
            return rt(this, ne)
        }
        set placeItems(le) {
            yt(this, ne, le)
        }
        get justifyContent() {
            return rt(this, Y)
        }
        set justifyContent(le) {
            yt(this, Y, le)
        }
        get alignContent() {
            return rt(this, ue)
        }
        set alignContent(le) {
            yt(this, ue, le)
        }
        get placeContent() {
            return rt(this, ge)
        }
        set placeContent(le) {
            yt(this, ge, le)
        }
        get gap() {
            return rt(this, de)
        }
        set gap(le) {
            yt(this, de, le)
        }
        get rowGap() {
            return rt(this, ve)
        }
        set rowGap(le) {
            yt(this, ve, le)
        }
        get columnGap() {
            return rt(this, Le)
        }
        set columnGap(le) {
            yt(this, Le, le)
        }
    }
    ,
    K = new WeakMap,
    J = new WeakMap,
    X = new WeakMap,
    se = new WeakMap,
    ne = new WeakMap,
    Y = new WeakMap,
    ue = new WeakMap,
    ge = new WeakMap,
    de = new WeakMap,
    ve = new WeakMap,
    Le = new WeakMap,
    i = Ce,
    ( () => {
        const le = typeof Symbol == "function" && Symbol.metadata ? Object.create(a[Symbol.metadata] ?? null) : void 0;
        r = [jt(Ds())],
        c = [jt(Ds())],
        f = [jt(bn(mO, {
            defaultValue: ""
        }))],
        y = [jt(bn(dO, {
            defaultValue: ""
        }))],
        C = [jt(bn(qee, {
            defaultValue: "normal normal"
        }))],
        _ = [jt(bn(fO, {
            defaultValue: ""
        }))],
        P = [jt(bn(pO, {
            defaultValue: ""
        }))],
        R = [jt(bn(Gee, {
            defaultValue: "normal normal"
        }))],
        O = [jt(bn(Gp, {
            defaultValue: "none",
            separator: " ",
            canBeResponsive: !0
        }))],
        H = [jt(bn(Gp, {
            defaultValue: "",
            canBeResponsive: !0
        }))],
        V = [jt(bn(Gp, {
            defaultValue: "",
            canBeResponsive: !0
        }))],
        Tt(Ce, null, r, {
            kind: "accessor",
            name: "gridTemplateColumns",
            static: !1,
            private: !1,
            access: {
                has: ye => "gridTemplateColumns"in ye,
                get: ye => ye.gridTemplateColumns,
                set: (ye, Ee) => {
                    ye.gridTemplateColumns = Ee
                }
            },
            metadata: le
        }, s, l),
        Tt(Ce, null, c, {
            kind: "accessor",
            name: "gridTemplateRows",
            static: !1,
            private: !1,
            access: {
                has: ye => "gridTemplateRows"in ye,
                get: ye => ye.gridTemplateRows,
                set: (ye, Ee) => {
                    ye.gridTemplateRows = Ee
                }
            },
            metadata: le
        }, d, p),
        Tt(Ce, null, f, {
            kind: "accessor",
            name: "justifyItems",
            static: !1,
            private: !1,
            access: {
                has: ye => "justifyItems"in ye,
                get: ye => ye.justifyItems,
                set: (ye, Ee) => {
                    ye.justifyItems = Ee
                }
            },
            metadata: le
        }, v, g),
        Tt(Ce, null, y, {
            kind: "accessor",
            name: "alignItems",
            static: !1,
            private: !1,
            access: {
                has: ye => "alignItems"in ye,
                get: ye => ye.alignItems,
                set: (ye, Ee) => {
                    ye.alignItems = Ee
                }
            },
            metadata: le
        }, b, k),
        Tt(Ce, null, C, {
            kind: "accessor",
            name: "placeItems",
            static: !1,
            private: !1,
            access: {
                has: ye => "placeItems"in ye,
                get: ye => ye.placeItems,
                set: (ye, Ee) => {
                    ye.placeItems = Ee
                }
            },
            metadata: le
        }, x, A),
        Tt(Ce, null, _, {
            kind: "accessor",
            name: "justifyContent",
            static: !1,
            private: !1,
            access: {
                has: ye => "justifyContent"in ye,
                get: ye => ye.justifyContent,
                set: (ye, Ee) => {
                    ye.justifyContent = Ee
                }
            },
            metadata: le
        }, w, T),
        Tt(Ce, null, P, {
            kind: "accessor",
            name: "alignContent",
            static: !1,
            private: !1,
            access: {
                has: ye => "alignContent"in ye,
                get: ye => ye.alignContent,
                set: (ye, Ee) => {
                    ye.alignContent = Ee
                }
            },
            metadata: le
        }, I, L),
        Tt(Ce, null, R, {
            kind: "accessor",
            name: "placeContent",
            static: !1,
            private: !1,
            access: {
                has: ye => "placeContent"in ye,
                get: ye => ye.placeContent,
                set: (ye, Ee) => {
                    ye.placeContent = Ee
                }
            },
            metadata: le
        }, D, M),
        Tt(Ce, null, O, {
            kind: "accessor",
            name: "gap",
            static: !1,
            private: !1,
            access: {
                has: ye => "gap"in ye,
                get: ye => ye.gap,
                set: (ye, Ee) => {
                    ye.gap = Ee
                }
            },
            metadata: le
        }, z, B),
        Tt(Ce, null, H, {
            kind: "accessor",
            name: "rowGap",
            static: !1,
            private: !1,
            access: {
                has: ye => "rowGap"in ye,
                get: ye => ye.rowGap,
                set: (ye, Ee) => {
                    ye.rowGap = Ee
                }
            },
            metadata: le
        }, q, W),
        Tt(Ce, null, V, {
            kind: "accessor",
            name: "columnGap",
            static: !1,
            private: !1,
            access: {
                has: ye => "columnGap"in ye,
                get: ye => ye.columnGap,
                set: (ye, Ee) => {
                    ye.columnGap = Ee
                }
            },
            metadata: le
        }, $, Q),
        Tt(null, t = {
            value: i
        }, e, {
            kind: "class",
            name: i.name,
            metadata: le
        }, null, n),
        i = t.value,
        le && Object.defineProperty(i, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: le
        }),
        je(i, n)
    }
    )(),
    i
}
)();
const Kee = ["visible", "exclusive"]
  , Qee = 'label{cursor:pointer;display:inline-flex;align-items:center;gap:.5rem;inline-size:max-content;padding-block:.75rem}@media (min-width:48rem),(pointer:fine){label{padding-block:.25rem}}.has-details{padding-block-end:.25rem}input{cursor:inherit;appearance:none;position:relative;inline-size:calc(2rem + .25rem);block-size:1.25rem;border-radius:1rem;border:.04125rem solid #8a8a8a;background-color:#fdfdfd;margin:0;transition:background-color 100ms cubic-bezier(.42,0,.58,1),border-color 100ms cubic-bezier(.42,0,.58,1)}@media (min-width:48rem),(pointer:fine){input{inline-size:2rem;block-size:1rem}}input::before{content:"";position:absolute;inset-inline-start:.25rem;inset-block-start:calc(.25rem - .04125rem);inline-size:.75rem;block-size:.75rem;border-radius:624.9375rem;background-color:#8a8a8a;transition:background-color 50ms cubic-bezier(.42,0,.58,1),transform 200ms cubic-bezier(.42,0,.58,1);transform:translateX(0)}@media (min-width:48rem),(pointer:fine){input::before{inline-size:.5rem;block-size:.5rem}}input:checked{background-color:#303030;border-color:transparent}input:focus-visible{border-color:#616161;background-color:#fafafa;outline:.125rem solid #005bd3;outline-offset:.0625rem}input:focus-visible::before{background-color:#616161}input:checked:focus-visible{background-color:#1a1a1a}.disabled input:checked::before,input:checked::before{background-color:#fff;transform:translateX(1rem)}.error input::before{background-color:#c70a24}.disabled{cursor:default;color:#b5b5b5}.disabled input{border:transparent;background-color:rgba(0,0,0,.05)}.disabled input::before{inset-block-start:.25rem;background-color:rgba(0,0,0,.05)}.error{color:#8e0b21}.error input{border-color:#fec1c7;background-color:#fee8eb}.error input:checked{background-color:#c70a24;border-color:transparent}.error input:checked::before{background-color:#fffafb;transform:translateX(1rem)}label:hover:not(.disabled,.error) input{border-color:#616161;background-color:#fafafa}label:hover:not(.disabled,.error) input:checked{border-color:transparent;background-color:#1a1a1a}label:hover:not(.disabled,.error) input::before{background-color:#616161}label:hover:not(.disabled,.error) input:checked::before{background-color:#fff}.field-details{margin-inline-start:calc(2.5rem + .25rem)}@media (min-width:48rem),(pointer:fine){.field-details{margin-inline-start:2.5rem}}';
function Zee(e) {
    const t = "describedBy"
      , n = ry(null);
    !e.label && !e.accessibilityLabel && Us(e, "Switch requires a label or accessibilityLabel prop"),
    zX(e, n),
    U2( () => {
        n.current && (n.current.defaultChecked = e.defaultChecked)
    }
    , [e.defaultChecked]);
    const i = hY(r => {
        const s = r.target;
        e.checked = s.checked,
        r.composed || e.dispatchEvent(new Event(r.type))
    }
    , [e])
      , a = Kn(sc, null, e.label, e.required && " (required)");
    return Kn("s-grid", null, Kn("label", {
        class: nb({
            disabled: !!e.disabled,
            error: !!e.error,
            "has-details": !!e.details || !!e.error
        })
    }, Kn("input", {
        type: "checkbox",
        name: e.name,
        onInput: i,
        onChange: i,
        disabled: e.disabled,
        required: e.required,
        value: e.value,
        checked: e.checked,
        "aria-label": e.accessibilityLabel || void 0,
        "aria-describedby": e.details || e.error ? t : void 0,
        ref: n
    }), e.label ? e.labelAccessibilityVisibility === "exclusive" ? Kn(W2, null, a) : a : null), Kn(jX, {
        id: t,
        disabled: e.disabled,
        error: e.error,
        details: e.details
    }))
}
const Yee = {
    __proto__: null,
    ShadowRoot: Zee,
    styles: Qee
};
( () => {
    var c, d;
    let e = [d_(H2)], t, n = [], i, a = DX, r, s = [], l = [];
    return d = class extends a {
        [k: string]: any;
        constructor() {
            super(Yee);
            vt(this, c, je(this, s, void 0));
            je(this, l)
        }
        get labelAccessibilityVisibility() {
            return rt(this, c)
        }
        set labelAccessibilityVisibility(v) {
            yt(this, c, v)
        }
    }
    ,
    c = new WeakMap,
    i = d,
    ( () => {
        const v = typeof Symbol == "function" && Symbol.metadata ? Object.create(a[Symbol.metadata] ?? null) : void 0;
        r = [jt(bn(Kee, {
            defaultValue: "visible"
        }))],
        Tt(d, null, r, {
            kind: "accessor",
            name: "labelAccessibilityVisibility",
            static: !1,
            private: !1,
            access: {
                has: g => "labelAccessibilityVisibility"in g,
                get: g => g.labelAccessibilityVisibility,
                set: (g, y) => {
                    g.labelAccessibilityVisibility = y
                }
            },
            metadata: v
        }, s, l),
        Tt(null, t = {
            value: i
        }, e, {
            kind: "class",
            name: i.name,
            metadata: v
        }, null, n),
        i = t.value,
        v && Object.defineProperty(i, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: v
        }),
        je(i, n)
    }
    )(),
    i
}
)();

function yu(e, t) {
    return function(i) {
        const a = t(i);
        return React.useMemo( () => React.createElement(e, {
            ...i,
            ...a
        }), [i, a])
    }
}
function ete({selectedValues: e, isFilteringToSelectedOnly: t, showSelectedPageIndex: n, showSelectedPageSize: i, setSelectedMultiple: a}) {
    const r = t && e.size > 0
      , s = React.useMemo( () => {
        const f = new Set;
        if (!r || e.size === 0)
            return f;
        const v = n * i
          , g = v + i;
        if (v >= e.size)
            return f;
        let y = 0;
        for (const b of e) {
            if (y >= g)
                break;
            y >= v && f.add(b),
            y++
        }
        return f
    }
    , [r, e, n, i])
      , l = React.useMemo( () => {
        if (!r || s.size === 0)
            return {
                checked: !1,
                indeterminate: !1
            };
        const f = e.size
          , v = s.size;
        return f > v ? {
            checked: !1,
            indeterminate: !0
        } : {
            checked: !0,
            indeterminate: !1
        }
    }
    , [r, e.size, s.size])
      , {checked: c, indeterminate: d} = l
      , p = React.useCallback( () => {
        r && s.size > 0 && a(s, !1)
    }
    , [r, s, a]);
    return {
        checked: c,
        indeterminate: d,
        visibleSelectedItems: s,
        toggleSelection: p,
        isActive: r
    }
}
var tte = {
    CheckboxWrap: "Polaris-AlphaTable-TableHeadingCheckbox__CheckboxWrap"
};
function nte({checked: e, indeterminate: t, isMultiSelectable: n, toggleSelection: i, currentPageValues: a}) {
    const r = at()
      , {loading: s, showLoadingState: l} = bm();
    return n ? React.createElement("div", {
        className: G(tte.CheckboxWrap, l && Ia.SharedLoading),
        inert: a.size === 0 || s ? "" : void 0,
        children: React.createElement(ss, {
            checked: t ? "indeterminate" : e,
            onChange: i,
            disabled: a.size === 0,
            label: r.translate("Polaris.AlphaTable.Selection.selectPage", {
                count: a.size
            }),
            labelHidden: !0
        })
    }) : r.translate("Polaris.AlphaTable.Selection.selectionHeader")
}
const ite = () => {
    const {currentPageValues: e, selectedValues: t} = lc()
      , {selectedState: n, maxSelectable: i, isFilteringToSelectedOnly: a, showSelectedPageSize: r, showSelectedPageIndex: s} = eo()
      , {selectAllInPage: l, unselectAll: c, unselectPage: d, setSelectedMultiple: p} = vu()
      , f = i !== 1
      , v = ete({
        selectedValues: t,
        isFilteringToSelectedOnly: a,
        showSelectedPageIndex: s,
        showSelectedPageSize: r,
        setSelectedMultiple: p
    })
      , g = React.useCallback( () => {
        v.isActive ? v.toggleSelection() : n === "all" ? c() : n === "page" ? d() : l()
    }
    , [v, n, c, d, l])
      , {checked: y, indeterminate: b} = React.useMemo( () => v.isActive ? {
        checked: v.checked,
        indeterminate: v.indeterminate
    } : {
        checked: ["all", "page"].includes(n),
        indeterminate: n === "some"
    }, [v, n]);
    return React.useMemo( () => ({
        checked: y,
        indeterminate: b,
        isMultiSelectable: f,
        toggleSelection: g,
        currentPageValues: e
    }), [y, b, f, g, e])
}
  , hO = yu(nte, ite);
function gO({children: e, selectAllActionLabel: t, allSelectedLabel: n, totalRows: i, hideSelectAllInStore: a=!1}) {
    const {renderedVariant: r} = zi()
      , {showLoadingState: s} = bm()
      , {selectedState: l, rowSelectionEnabled: c, maxSelectable: d, isFilteringToSelectedOnly: p, setShowOnlySelected: f} = eo()
      , {selectedValues: v, currentPageValues: g, currentPageDisabledValues: y} = lc()
      , {selectAll: b, unselectAll: k, selectAllInPage: C, unselectPage: x, undoSelectAll: A} = vu()
      , _ = D2()
      , [w,T] = React.useState(!1)
      , P = at()
      , I = r === "list"
      , L = React.useRef(null)
      , R = React.useRef(null)
      , D = React.useRef(new Set)
      , M = React.useRef(v.size)
      , {shouldShowToggle: O, handleSwitchChange: z} = EX({
        selectedValues: v,
        selectedState: l,
        isFilteringToSelectedOnly: p,
        setShowOnlySelected: f
    })
      , B = React.useMemo( () => {
        if (d > 1)
            return React.createElement(ee, {
                variant: "bodyMd",
                fontWeight: "semibold",
                as: "span",
                children: P.translate("Polaris.AlphaTable.Selection.selectedSome", {
                    count: v.size,
                    total: d
                })
            })
    }
    , [d, v.size, P])
      , H = React.useCallback( () => T(Ce => !Ce), [])
      , q = React.useMemo( () => {
        const Ce = v.size > 0 ? v.size : M.current;
        if (p)
            return P.translate("Polaris.AlphaTable.Selection.showingOnlySelected", {
                count: Ce
            });
        switch (l) {
        case "all":
            return n || (i ? P.translate("Polaris.AlphaTable.Selection.selectedAllWithTotal", {
                total: i
            }) : P.translate("Polaris.AlphaTable.Selection.selectedAll"));
        case "page":
            return P.translate("Polaris.AlphaTable.Selection.selectedPage", {
                count: Ce
            });
        case "some":
        default:
            return v.size > 0 ? P.translate("Polaris.AlphaTable.Selection.selectedPage", {
                count: v.size
            }) : P.translate("Polaris.AlphaTable.Selection.selectedPage", {
                count: M.current
            })
        }
    }
    , [l, n, i, P, v.size, M, p])
      , W = React.useMemo( () => g.size > 0 ? Array.from(g).filter(Ce => !y.has(Ce)) : Array.from(g), [g, y])
      , V = React.useMemo( () => {
        if (t)
            return t;
        i && i < y.size && console.warn("Table > Total rows is less than the number of disabled rows. This is likely a mistake.");
        const Ce = i ? i - y.size : W.length;
        return i ? P.translate("Polaris.AlphaTable.Selection.selectAllWithTotal", {
            total: Ce
        }) : P.translate("Polaris.AlphaTable.Selection.selectAll")
    }
    , [t, i, y.size, W.length, P])
      , $ = c ? React.createElement("div", {
        className: _l.TableActionsActivator,
        children: React.createElement(nt, {
            onClick: H,
            disclosure: !0,
            variant: I ? "secondary" : "tertiary",
            size: "micro",
            children: q
        })
    }) : null
      , Q = React.useMemo( () => typeof e == "function" ? e({
        selectedValues: v,
        selectedState: l
    }) : e, [e, v, l])
      , K = P.translate("Polaris.AlphaTable.Selection.unselectAll")
      , J = P.translate("Polaris.AlphaTable.Selection.selectPage", {
        count: W.length
    })
      , X = React.useMemo( () => i ? P.translate("Polaris.AlphaTable.Selection.undoSelectAllWithTotal", {
        total: i
    }) : P.translate("Polaris.AlphaTable.Selection.undoSelectAll"), [i, P])
      , se = l !== "all" && _.current && !a && !p
      , ne = !["all", "page"].includes(l) && !p && W.length > 0
      , Y = v.size > 0
      , ue = l === "all" && _.current && !a && !p
      , ge = [ne ? {
        content: J,
        onAction: () => {
            C(),
            H()
        }
    } : {}, se ? {
        content: V,
        onAction: () => {
            D.current = v,
            p && es.flushSync( () => {
                f(!1)
            }
            ),
            b(),
            H()
        }
    } : {}, ue ? {
        content: X,
        onAction: () => {
            A(D.current),
            H()
        }
    } : {}, Y ? {
        content: K,
        onAction: () => {
            p && f(!1),
            x(),
            k(),
            H()
        }
    } : {}];
    React.useEffect( () => {
        R.current = document.activeElement
    }
    , []),
    React.useEffect( () => {
        v.size > 0 && (M.current = v.size)
    }
    , [v.size]),
    React.useEffect( () => {
        var Ce;
        if (l === "none") {
            (Ce = R.current) == null || Ce.focus();
            return
        }
        !L.current || !["page", "all"].includes(l) || ra(L.current)
    }
    , [l]);
    const de = d === -1 && $ && (I || v.size > 0 || M.current > 0)
      , ve = d > 1;
    if (I && v.size === 0)
        return null;
    const Le = O ? React.createElement("div", {
        className: _l.ShowSelectedToggle,
        children: React.createElement(he, {
            paddingInlineEnd: "200",
            children: React.createElement(Xee, {
                label: P.translate("Polaris.AlphaTable.Selection.showSelectedToggle"),
                checked: p,
                onChange: Ce => z(Ce.target.checked)
            })
        })
    }) : null;
    return React.createElement("div", {
        className: G(_l.TableActionsWrapper, I && _l.isList, s && Ia.SharedLoading),
        ref: L,
        children: React.createElement("div", {
            className: G(_l.TableActions, I && _l.isList),
            children: [I ? null : React.createElement(hO, {}), de && React.createElement(Fn, {
                active: w,
                activator: $,
                autofocusTarget: "first-node",
                onClose: H,
                preferredAlignment: I ? "left" : void 0,
                children: React.createElement(ka, {
                    actionRole: "menuitem",
                    items: ge
                })
            }), ve && React.createElement("span", {
                className: _l.SomeSelectedLabel,
                children: B
            }), Q && React.createElement("div", {
                className: _l.TableActionsContainer,
                children: Q
            }), Le]
        })
    })
}
function ate({content: e, ...t}) {
    const {renderedVariant: n} = zi();
    return n === "list" ? React.createElement(React.Fragment, {
        children: [React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            visuallyHidden: !0,
            children: e
        }), React.createElement(Fe, {
            ...t
        })]
    }) : React.createElement(Qn, {
        content: e,
        children: React.createElement(Fe, {
            ...t
        })
    })
}
var rte = {
    Measuring: "Polaris-AlphaTable-BulkActions__Measuring"
};
const ote = 16
  , ste = 44;
function lte(e, t, n, i) {
    var d;
    const a = e.offsetWidth - ote
      , r = Array.from(e.children)
      , s = []
      , l = [];
    let c = ste;
    for (const p of t) {
        if (!("content"in p) && !("title"in p))
            continue;
        const f = Math.ceil(((d = r[s.length + 1]) == null ? void 0 : d.getBoundingClientRect().width) + i) || 0;
        c + f <= a ? s.push(p) : l.push(p),
        c += f
    }
    return {
        visibleActions: s,
        rolledUpActions: [...l, ...n]
    }
}
function nC({action: e, disabled: t, onAction: n, isList: i}) {
    if ("content"in e)
        return React.createElement(nt, {
            icon: i ? void 0 : e.icon,
            "aria-label": e.content,
            role: "menuitem",
            tone: e.destructive ? "critical" : void 0,
            disabled: t,
            onClick: n ? e.onAction : void 0,
            url: e.url,
            size: "micro",
            children: e.content
        });
    if ("title"in e && typeof e.title == "string")
        return React.createElement(nt, {
            disclosure: !0,
            "aria-label": e.title,
            tone: "destructive"in e && e.destructive ? "critical" : void 0,
            disabled: t,
            onClick: n ? () => n(e) : void 0,
            size: "micro",
            children: e.title
        })
}
const cte = {
    popoverActive: !1,
    visibleActions: [],
    rolledUpActions: [],
    groupPopovers: {},
    hasMeasured: !1
}
  , YI = (e, t) => e.length === t.length && e.every( (n, i) => n === t[i]);
function ute(e, t) {
    switch (t.type) {
    case "TOGGLE_POPOVER":
        return {
            ...e,
            popoverActive: !e.popoverActive
        };
    case "TOGGLE_GROUP_POPOVER":
        return {
            ...e,
            groupPopovers: {
                ...e.groupPopovers,
                [t.groupTitle]: !e.groupPopovers[t.groupTitle]
            }
        };
    case "MEASUREMENTS_CHANGED":
        {
            const n = YI(e.visibleActions, t.visible)
              , i = YI(e.rolledUpActions, t.rolledUp);
            return !n || !i ? {
                ...e,
                visibleActions: t.visible,
                rolledUpActions: t.rolledUp,
                hasMeasured: !0
            } : e
        }
    case "SET_MEASURED":
        return {
            ...e,
            hasMeasured: !0
        };
    default:
        return e
    }
}
function dte({promotedActions: e=[], actions: t=[], disabled: n}) {
    const [i,a] = React.useReducer(ute, cte)
      , {renderedVariant: r} = zi()
      , s = React.useMemo( () => r === "list", [r])
      , l = React.useRef(null)
      , c = at()
      , d = React.useMemo( () => {
        if (e.length + t.length !== 1)
            return null;
        const A = e.length === 1 ? e[0] : t[0];
        return "content"in A ? A : null
    }
    , [e, t])
      , p = !!d
      , f = React.useCallback( () => {
        a({
            type: "TOGGLE_POPOVER"
        })
    }
    , [])
      , v = React.useCallback(A => {
        a({
            type: "TOGGLE_GROUP_POPOVER",
            groupTitle: A
        })
    }
    , [])
      , g = React.useCallback( (A, _) => {
        if (!l.current)
            return;
        const w = Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--p-space-100"))
          , {visibleActions: T, rolledUpActions: P} = lte(l.current, A, _, w);
        a({
            type: "MEASUREMENTS_CHANGED",
            visible: T,
            rolledUp: P
        })
    }
    , []);
    React.useEffect( () => {
        if (!l.current)
            return;
        const A = new ResizeObserver( () => {
            g(e, t)
        }
        );
        return A.observe(l.current),
        g(e, t),
        () => A.disconnect()
    }
    , [g, e, t]);
    const y = [...e, ...t]
      , b = React.useMemo( () => i.visibleActions.map( (A, _) => "title"in A && "actions"in A ? React.createElement(Fn, {
        active: i.groupPopovers[A.title] || !1,
        activator: React.createElement(nC, {
            action: A,
            disabled: n,
            onAction: () => v(A.title),
            isList: s
        }),
        onClose: () => v(A.title),
        children: React.createElement(ka, {
            items: A.actions,
            onActionAnyItem: () => v(A.title)
        })
    }, _) : React.createElement(nC, {
        action: A,
        disabled: n,
        onAction: () => {
            var w;
            return (w = A.onAction) == null ? void 0 : w.call(A)
        }
        ,
        isList: s
    }, _)), [i.visibleActions, n, v, i.groupPopovers, s])
      , k = c.translate("Polaris.AlphaTable.BulkActions.activatorLabel")
      , C = React.useMemo( () => i.rolledUpActions.length > 0 && React.createElement(Fn, {
        active: i.popoverActive,
        activator: React.createElement("div", {
            style: {
                display: "flex"
            },
            children: React.createElement(nt, {
                onClick: f,
                disabled: n,
                icon: s && i.visibleActions.length === 0 ? void 0 : "menu-horizontal",
                size: "micro",
                variant: s ? "secondary" : void 0,
                fullWidth: s && i.visibleActions.length === 0,
                accessibilityLabel: s && i.visibleActions.length === 0 ? void 0 : k,
                children: s && i.visibleActions.length === 0 ? k : void 0
            })
        }),
        onClose: f,
        preferredAlignment: s ? "right" : void 0,
        children: React.createElement(ka, {
            sections: i.rolledUpActions.map(A => "actions"in A ? {
                title: A.title,
                items: A.actions
            } : {
                items: [A]
            }).filter(A => A.items.length > 0),
            onActionAnyItem: f
        })
    }), [i.rolledUpActions, n, f, i.popoverActive, s, k, i.visibleActions.length]);
    if (s && p && d)
        return React.createElement(nt, {
            size: "micro",
            tone: d.destructive ? "critical" : void 0,
            disabled: n,
            onClick: d.onAction,
            icon: d.icon,
            url: d.url,
            children: d.content
        });
    const x = React.createElement(Te, {
        gap: s ? "400" : "100",
        blockAlign: "center",
        children: [b, C]
    });
    return React.createElement(React.Fragment, {
        children: [x, React.createElement("div", {
            className: rte.Measuring,
            ref: l,
            children: [React.createElement(nt, {
                icon: "menu-horizontal",
                size: "micro",
                disabled: !0
            }), y.map( (A, _) => React.createElement(nC, {
                action: A,
                isList: s,
                disabled: !0
            }, _))]
        })]
    })
}
var wg = {
    Thumbnail: "Polaris-Thumbnail",
    sizeExtraSmall: "Polaris-Thumbnail--sizeExtraSmall",
    sizeSmall: "Polaris-Thumbnail--sizeSmall",
    sizeMedium: "Polaris-Thumbnail--sizeMedium",
    sizeLarge: "Polaris-Thumbnail--sizeLarge",
    transparent: "Polaris-Thumbnail--transparent",
    IconWrapper: "Polaris-Thumbnail__IconWrapper"
};
function mte({source: e, alt: t, size: n="medium", transparent: i}) {
    const a = G(wg.Thumbnail, n && wg[$t("size", n)], i && wg.transparent)
      , r = So(e) ? React.createElement("div", {
        className: wg.IconWrapper,
        children: [React.createElement(ee, {
            visuallyHidden: !0,
            as: "span",
            children: t
        }), React.createElement(Fe, {
            type: e,
            tone: "legacy-inherit"
        })]
    }) : React.createElement(Tn, {
        alt: t,
        source: e
    });
    return React.createElement("span", {
        className: a,
        children: r
    })
}
const pte = ({source: e, alt: t}) => {
    const {renderedVariant: n} = zi()
      , i = n === "list" ? "medium" : "small";
    return React.createElement(mte, {
        source: e,
        alt: t,
        size: i
    })
}
;
function fte({selectedValues: e, isFilteringToSelectedOnly: t, showSelectedPageIndex: n, showSelectedPageSize: i, setShowSelectedPageIndex: a, i18n: r}) {
    const s = t && e.size > 0
      , l = React.useMemo( () => {
        const y = e.size;
        if (y === 0)
            return {
                totalSelectedItems: 0,
                totalPages: 0,
                hasMultiplePages: !1
            };
        const b = Math.ceil(y / i)
          , k = b > 1;
        return {
            totalSelectedItems: y,
            totalPages: b,
            hasMultiplePages: k
        }
    }
    , [e.size, i])
      , {totalSelectedItems: c, totalPages: d, hasMultiplePages: p} = l
      , f = React.useCallback( () => {
        a(n + 1)
    }
    , [a, n])
      , v = React.useCallback( () => {
        a(n - 1)
    }
    , [a, n]);
    return {
        showSelectedPagination: React.useMemo( () => {
            if (!s || !p)
                return null;
            const y = n * i
              , b = Math.min(y + i, c)
              , k = r.translate("Polaris.AlphaTable.Selection.paginationLabel", {
                start: y + 1,
                end: b,
                total: c
            });
            return {
                hasNext: n < d - 1,
                hasPrevious: n > 0,
                onNext: f,
                onPrevious: v,
                label: k
            }
        }
        , [s, p, n, i, c, d, f, v, r]),
        hasMultiplePages: p,
        totalSelectedItems: c,
        totalPages: d,
        isActive: s
    }
}
var hte = {
    TableFooter: "Polaris-AlphaTable-TableFooter"
}
  , Lp = function(e) {
    return e.Input = "INPUT",
    e.Textarea = "TEXTAREA",
    e.Select = "SELECT",
    e.ContentEditable = "contenteditable",
    e
}(Lp || {});
function gte() {
    if (document == null || document.activeElement == null)
        return !1;
    const {tagName: e} = document.activeElement;
    return e === Lp.Input || e === Lp.Textarea || e === Lp.Select || document.activeElement.hasAttribute(Lp.ContentEditable)
}
var iC = {
    Pagination: "Polaris-Pagination",
    table: "Polaris-Pagination--table"
}
  , $l = {
    ButtonGroup: "Polaris-ButtonGroup",
    Item: "Polaris-ButtonGroup__Item",
    "Item-plain": "Polaris-ButtonGroup__Item--plain",
    variantSegmented: "Polaris-ButtonGroup--variantSegmented",
    "Item-focused": "Polaris-ButtonGroup__Item--focused",
    fullWidth: "Polaris-ButtonGroup--fullWidth",
    extraTight: "Polaris-ButtonGroup--extraTight",
    tight: "Polaris-ButtonGroup--tight",
    loose: "Polaris-ButtonGroup--loose",
    noWrap: "Polaris-ButtonGroup--noWrap"
};
function vte({button: e}) {
    const {value: t, setTrue: n, setFalse: i} = Di(!1)
      , a = G($l.Item, t && $l["Item-focused"], e.props.variant === "plain" && $l["Item-plain"]);
    return React.createElement("div", {
        className: a,
        onFocus: n,
        onBlur: i,
        children: e
    })
}
function gr({children: e, gap: t, variant: n, fullWidth: i, connectedTop: a, noWrap: r}) {
    const s = G($l.ButtonGroup, t && $l[t], n && $l[$t("variant", n)], i && $l.fullWidth, r && $l.noWrap)
      , l = h2(e).map( (c, d) => React.createElement(vte, {
        button: c
    }, d));
    return React.createElement("div", {
        className: s,
        "data-buttongroup-variant": n,
        "data-buttongroup-connected-top": a,
        "data-buttongroup-full-width": i,
        "data-buttongroup-no-wrap": r,
        children: l
    })
}
function Qd({hasNext: e, hasPrevious: t, nextURL: n, previousURL: i, onNext: a, onPrevious: r, nextTooltip: s, previousTooltip: l, nextKeys: c, previousKeys: d, accessibilityLabel: p, accessibilityLabels: f, label: v, type: g="page", align: y="start"}) {
    const b = at()
      , k = React.createRef()
      , C = p || b.translate("Polaris.Pagination.pagination")
      , x = (f == null ? void 0 : f.previous) || b.translate("Polaris.Pagination.previous")
      , A = (f == null ? void 0 : f.next) || b.translate("Polaris.Pagination.next")
      , _ = React.createElement(nt, {
        accessibilityLabel: x,
        url: i,
        onClick: r,
        disabled: !t,
        id: "previousURL",
        icon: g === "pageUpDown" ? "chevron-up" : "chevron-left"
    })
      , w = l && t ? React.createElement(Qn, {
        activatorWrapper: "span",
        content: l,
        preferredPosition: "below",
        children: _
    }) : _
      , T = React.createElement(nt, {
        accessibilityLabel: A,
        url: n,
        onClick: a,
        disabled: !e,
        id: "nextURL",
        icon: g === "pageUpDown" ? "chevron-down" : "chevron-right"
    })
      , P = s && e ? React.createElement(Qn, {
        activatorWrapper: "span",
        content: s,
        preferredPosition: "below",
        children: T
    }) : T
      , I = r || XI
      , L = d && (i || r) && t && d.map(z => React.createElement(Ci, {
        keyCode: z,
        handler: Ng(i ? JI("previousURL", k) : I)
    }, z))
      , R = a || XI
      , D = c && (n || a) && e && c.map(z => React.createElement(Ci, {
        keyCode: z,
        handler: Ng(n ? JI("nextURL", k) : R)
    }, z));
    if (g === "table") {
        const z = React.createElement(gr, {
            variant: "segmented",
            children: [w, P]
        })
          , B = v ? React.createElement(he, {
            paddingInline: "300",
            children: React.createElement(ee, {
                as: "span",
                variant: "bodySm",
                fontWeight: "medium",
                children: v
            })
        }) : null;
        return z || B ? React.createElement("nav", {
            "aria-label": C,
            ref: k,
            className: G(iC.Pagination, iC.table),
            children: [L, D, React.createElement(he, {
                background: "bg-surface-secondary",
                padding: "200",
                children: React.createElement(Te, {
                    align: y,
                    blockAlign: "center",
                    children: [z, B]
                })
            })]
        }) : null
    }
    const M = e && t ? React.createElement("span", {
        children: v
    }) : React.createElement(ee, {
        tone: "subdued",
        as: "span",
        children: v
    })
      , O = v ? React.createElement(he, {
        padding: "300",
        paddingBlockStart: "0",
        paddingBlockEnd: "0",
        children: React.createElement("div", {
            "aria-live": "polite",
            children: M
        })
    }) : null;
    return React.createElement("nav", {
        "aria-label": C,
        ref: k,
        className: iC.Pagination,
        children: [L, D, React.createElement(gr, {
            variant: g === "pageUpDown" ? void 0 : "segmented",
            gap: g === "pageUpDown" ? "extraTight" : void 0,
            noWrap: g === "pageUpDown",
            children: [w, O, P]
        })]
    })
}
function JI(e, t) {
    return () => {
        if (t.current == null)
            return;
        const n = t.current.querySelector(`#${e}`);
        n && n.click()
    }
}
function Ng(e) {
    return () => {
        gte() || e()
    }
}
function XI() {}
function yte({pagination: e, children: t}) {
    const {navigatePage: n} = vu()
      , {loading: i, showLoadingState: a} = bm()
      , r = D2()
      , {isFilteringToSelectedOnly: s, showSelectedPageIndex: l, setShowSelectedPageIndex: c, showSelectedPageSize: d} = eo()
      , {selectedValues: p} = lc()
      , f = at()
      , v = React.useMemo( () => {
        if (!(!e || !e.hasNext && !e.hasPrevious))
            return {
                ...e,
                label: void 0,
                onNext: () => {
                    var k;
                    n(),
                    (k = e.onNext) == null || k.call(e)
                }
                ,
                onPrevious: () => {
                    var k;
                    n(),
                    (k = e.onPrevious) == null || k.call(e)
                }
            }
    }
    , [e, n])
      , {showSelectedPagination: g} = fte({
        selectedValues: p,
        isFilteringToSelectedOnly: s,
        showSelectedPageIndex: l,
        showSelectedPageSize: d,
        setShowSelectedPageIndex: c,
        i18n: f
    })
      , y = React.useMemo( () => g ? React.createElement(Qd, {
        ...g
    }) : React.createElement(React.Fragment, {
        children: [v && React.createElement(Qd, {
            ...v
        }), (e == null ? void 0 : e.label) && React.createElement(ee, {
            variant: "bodySm",
            as: "span",
            fontWeight: "medium",
            tone: "subdued",
            children: e.label
        })]
    }), [v, e, g])
      , b = React.useMemo( () => s ? g !== null || t : e && (e.hasNext || e.hasPrevious) || t, [s, g, e, t]);
    return React.useEffect( () => {
        if (!e) {
            r.current = !1;
            return
        }
        e.hasNext || e.hasPrevious ? r.current = !0 : r.current = !1
    }
    , [e, r]),
    b ? React.createElement("div", {
        className: G(hte.TableFooter, a && Ia.SharedLoading),
        inert: i ? "" : void 0,
        children: React.createElement(Te, {
            gap: "200",
            blockAlign: "center",
            children: [y, t]
        })
    }) : null
}
var Tg = {
    EmptyState: "Polaris-AlphaTable-TableEmptyState__EmptyState",
    Title: "Polaris-AlphaTable-TableEmptyState__Title",
    Subtitle: "Polaris-AlphaTable-TableEmptyState__Subtitle",
    EmptyStateWithSelection: "Polaris-AlphaTable-TableEmptyState__EmptyStateWithSelection"
};
function bte({primaryAction: e, secondaryAction: t, heading: n, subheading: i, iconType: a}) {
    const {showLoadingState: r} = bm()
      , {rowSelectionEnabled: s} = eo()
      , {selectedValues: l} = lc()
      , {renderedVariant: c} = zi()
      , p = s && c === "table" && l.size > 0;
    return React.createElement("div", {
        className: G(Tg.EmptyState, r && Ia.SharedLoading, p && Tg.EmptyStateWithSelection),
        children: React.createElement(ft, {
            gap: "200",
            inlineAlign: "center",
            align: "center",
            children: [React.createElement(ft, {
                gap: "200",
                inlineAlign: "center",
                align: "center",
                children: [React.createElement(Fe, {
                    type: a
                }), React.createElement("div", {
                    className: Tg.Title,
                    children: n
                }), i ? React.createElement("div", {
                    className: Tg.Subtitle,
                    children: i
                }) : null]
            }), e || t ? React.createElement(Te, {
                wrap: !0,
                gap: "200",
                align: "center",
                blockAlign: "center",
                children: [t ? React.createElement(nt, {
                    ...t,
                    variant: "secondary",
                    size: "medium"
                }) : null, e ? React.createElement(nt, {
                    ...e,
                    variant: "primary",
                    size: "medium"
                }) : null]
            }) : null]
        })
    })
}
const vO = React.createContext([0, ""])
  , yO = React.createContext(void 0)
  , T_ = () => React.useContext(vO)
  , bO = () => React.useContext(yO)
  , kO = React.createContext({
    current: new Map
})
  , P_ = () => React.useContext(kO)
  , SO = React.createContext(new Set)
  , km = () => React.useContext(SO)
  , CO = React.createContext({
    showTrack: !0,
    toggleable: !0
})
  , Zd = () => React.useContext(CO);
var ql = {
    NestedListRow: "Polaris-AlphaTable-TableRowGroup__NestedListRow",
    NestedRow: "Polaris-AlphaTable-TableRowGroup__NestedRow",
    NoTrack: "Polaris-AlphaTable-TableRowGroup__NoTrack",
    LastNestedRow: "Polaris-AlphaTable-TableRowGroup__LastNestedRow",
    RowPassThrough: "Polaris-AlphaTable-TableRowGroup__RowPassThrough",
    RowsWrappingRow: "Polaris-AlphaTable-TableRowGroup__RowsWrappingRow"
};
const cy = 20;
function AO({sticky: e, cellIndex: t}) {
    const {inlineStartStickyOffsets: n, inlineEndStickyOffsets: i} = cc();
    return React.useMemo( () => {
        var r, s;
        if (!(!e || t == null)) {
            if (e === "inline-start")
                return (r = n.find(l => l.columnIndex === t)) == null ? void 0 : r.offset;
            if (e === "inline-end")
                return (s = i.find(l => l.columnIndex === t)) == null ? void 0 : s.offset
        }
    }
    , [e, t, n, i])
}
var ia = {
    TableCell: "Polaris-AlphaTable-TableCell",
    Wrap: "Polaris-AlphaTable-TableCell__Wrap",
    LineClampCell: "Polaris-AlphaTable-TableCell__LineClampCell",
    TableCellContent: "Polaris-AlphaTable-TableCell__TableCellContent",
    LineClamp: "Polaris-AlphaTable-TableCell__LineClamp",
    StopClickEventPropagationPassThrough: "Polaris-AlphaTable-TableCell__StopClickEventPropagationPassThrough",
    "sticky-inline-start": "Polaris-AlphaTable-TableCell--stickyInlineStart",
    "sticky-inline-end": "Polaris-AlphaTable-TableCell--stickyInlineEnd",
    DialogWrapper: "Polaris-AlphaTable-TableCell__DialogWrapper",
    alignEnd: "Polaris-AlphaTable-TableCell--alignEnd",
    formattingNumeric: "Polaris-AlphaTable-TableCell--formattingNumeric",
    activatorOffset: "Polaris-AlphaTable-TableCell--activatorOffset",
    sortableOffset: "Polaris-AlphaTable-TableCell--sortableOffset",
    DialogActivator: "Polaris-AlphaTable-TableCell__DialogActivator",
    DialogActivatorIcon: "Polaris-AlphaTable-TableCell__DialogActivatorIcon",
    InertCell: "Polaris-AlphaTable-TableCell__InertCell"
};
const kte = React.forwardRef(function({renderDialog: t}, n) {
    const [i,a] = React.useState(!1)
      , r = React.useCallback( () => {
        var v;
        i || (v = t.onOpen) == null || v.call(t),
        a(!i)
    }
    , [i, t])
      , s = React.useCallback( () => {
        a(!1)
    }
    , []);
    React.useImperativeHandle(n, () => ({
        toggleDialog: r
    }), [r]);
    const {accessibilityLabel: l, render: c} = t
      , d = React.createElement(Pi, {
        accessibilityLabel: l,
        className: ia.DialogActivator,
        "data-activator-button": !0,
        "aria-expanded": i
    })
      , p = c({
        activator: d,
        active: i,
        onClose: s
    })
      , f = v => {
        v.target.closest("[data-activator-button]") !== null || v.stopPropagation()
    }
    ;
    return React.createElement("div", {
        onClick: f,
        children: p
    })
})
  , xO = React.memo( ({stopClickEventPropagation: e, lineClamp: t, children: n, style: i, plain: a, sticky: r, stickyOffset: s, renderedVariant: l, formatting: c, colSpan: d, cellIndex: p, renderDialog: f, columnHasActivator: v, sortable: g, alignment: y="start", wrap: b=!1, cellHidden: k, inert: C}) => {
    const x = React.useRef(null)
      , A = at()
      , _ = l === "list" ? void 0 : "cell"
      , w = l === "table" && f
      , T = typeof n == "function" ? n({
        variant: l
    }) : n
      , P = l === "list" && a ? a : T
      , I = React.useMemo( () => d == null || l === "list" ? null : Array.from({
        length: d - 1
    }, (H, q) => React.createElement("div", {
        className: ia.TableCell,
        role: _,
        "aria-hidden": "true"
    }, q)), [d, _, l])
      , L = w ? React.createElement(kte, {
        renderDialog: f,
        ref: x
    }) : null
      , R = React.useCallback( () => {
        x.current && x.current.toggleDialog()
    }
    , [])
      , D = l === "table" && v && !w && y === "end"
      , M = l === "table" && g && !w && y === "end"
      , O = G(l === "table" && ia.TableCell, l === "list" && ia.ListCell, !!t && ia.LineClampCell, b && ia.Wrap, l === "table" && r && ia[`sticky-${r}`], l === "table" && r && Ia.SharedStickyCell, l === "table" && r === "inline-start" && Ia.SharedStickyInlineStartCell, c === "numeric" && ia.formattingNumeric, D && ia.activatorOffset, M && ia.sortableOffset, C && ia.InertCell)
      , z = React.useMemo( () => ({
        ...i,
        "--pc-table-cell-sticky-offset": r ? `${s}px` : void 0,
        "--pc-table-cell-line-clamp": t
    }), [i, r, s, t])
      , B = e || w || t ? React.createElement("div", {
        className: G(t && ia.LineClamp, w && ia.DialogWrapper, e && !w && !t && ia.StopClickEventPropagationPassThrough),
        onClick: H => {
            e && H.stopPropagation()
        }
        ,
        style: z,
        children: [P, w && React.createElement("span", {
            className: ia.DialogActivatorIcon,
            children: React.createElement(Fe, {
                type: "caret-down"
            })
        })]
    }) : P;
    return l === "list" && !T || k ? null : l === "list" ? React.createElement(React.Fragment, {
        children: B
    }) : React.createElement(React.Fragment, {
        children: [React.createElement("div", {
            className: O,
            role: _,
            style: z,
            "aria-colspan": l === "table" ? d : void 0,
            "aria-colindex": l === "table" && p != null ? p + 1 : void 0,
            onClick: L ? R : void 0,
            ...L && {
                "data-activator-button": !0
            },
            children: React.createElement("div", {
                className: G(ia.TableCellContent, y === "end" && ia.alignEnd),
                ...C && {
                    inert: ""
                },
                children: [d && d > 1 && l === "table" ? React.createElement(ee, {
                    as: "span",
                    visuallyHidden: !0,
                    children: A.translate("AlphaTable.TableCell.spansColumns", {
                        count: d
                    })
                }) : null, L, B]
            })
        }), I]
    })
}
);
xO.displayName = "TableCellBase";
const Ste = e => {
    const {getHeading: t} = gu();
    return React.useMemo( () => e != null ? t(e) : void 0, [t, e])
}
  , Cte = ({cellIndex: e, hasActivator: t}) => {
    const {renderedVariant: n} = zi()
      , i = Ste(e)
      , {columnsWithActivator: a, incrementActivatorCount: r, decrementActivatorCount: s} = R2();
    Kr( () => (t && e != null && r(e),
    () => {
        e != null && t && s(e)
    }
    ), [t, e, r, s]);
    const l = React.useMemo( () => {
        if (i != null)
            return i.sticky
    }
    , [i])
      , c = AO({
        sticky: l,
        cellIndex: e
    })
      , d = !t && a && e != null && a.has(e)
      , {formatting: p, lineClamp: f, sortable: v, alignment: g, wrap: y} = i ?? {};
    return React.useMemo( () => ({
        sticky: l,
        stickyOffset: c,
        renderedVariant: n,
        formatting: p,
        lineClamp: f,
        cellIndex: e,
        columnHasActivator: d,
        sortable: v,
        alignment: g,
        wrap: y,
        cellHidden: (i == null ? void 0 : i.listSlot) === "hidden" && n === "list"
    }), [l, c, n, p, f, e, d, v, g, y, i])
}
  , Yd = ({colSpan: e=1, ...t}) => {
    const {registerColSpan: n, cellIndex: i, inert: a} = CX();
    React.useEffect( () => {
        n(e)
    }
    , [e, n]);
    const r = Cte({
        cellIndex: i,
        hasActivator: !!t.renderDialog
    });
    return React.useMemo( () => React.createElement(xO, {
        ...r,
        ...t,
        colSpan: e,
        inert: a
    }), [r, t, e, a])
}
;
function _O({value: e}) {
    const {renderedVariant: t} = zi()
      , [n,i] = T_()
      , a = bO()
      , {showTrack: r} = Zd()
      , {toggleable: s} = Zd()
      , l = React.useMemo( () => ({
        "--pc-table-row-nested-level-offset": `${n * cy}px`,
        "--pc-table-row-nested-level-box-shadow": i,
        "--pc-table-row-nested-offset-factor": `${cy}px`
    }), [i, n])
      , c = React.useMemo( () => ({
        ...n && n > 0 && {
            "--pc-table-cell-border-width": "0px"
        }
    }), [n])
      , d = React.useMemo( () => s ? React.createElement(Yd, {
        style: c
    }) : void 0, [s, c]);
    return React.useMemo( () => ({
        value: e,
        style: l,
        className: G(a && ql.LastNestedRow, n && ql.NestedRow, t === "list" && n && ql.NestedListRow, !r && ql.NoTrack),
        rowGroupCell: d
    }), [l, a, n, e, r, t, d])
}
var Qt = {
    TableRow: "Polaris-AlphaTable-TableRow",
    Selectable: "Polaris-AlphaTable-TableRow__Selectable",
    Disabled: "Polaris-AlphaTable-TableRow__Disabled",
    CheckboxHitState: "Polaris-AlphaTable-TableRow__CheckboxHitState",
    ListItem: "Polaris-AlphaTable-TableRow__ListItem",
    WithinSectionContainer: "Polaris-AlphaTable-TableRow__WithinSectionContainer",
    Summary: "Polaris-AlphaTable-TableRow__Summary",
    ListItemHeader: "Polaris-AlphaTable-TableRow__ListItemHeader",
    ListItemWithSelectionEnabled: "Polaris-AlphaTable-TableRow__ListItemWithSelectionEnabled",
    ListItemContent: "Polaris-AlphaTable-TableRow__ListItemContent",
    ShowSelectedMode: "Polaris-AlphaTable-TableRow__ShowSelectedMode",
    "Row-warning": "Polaris-AlphaTable-TableRow__Row--warning",
    Selected: "Polaris-AlphaTable-TableRow__Selected",
    "Row-critical": "Polaris-AlphaTable-TableRow__Row--critical",
    "Row-subdued": "Polaris-AlphaTable-TableRow__Row--subdued",
    "Row-success": "Polaris-AlphaTable-TableRow__Row--success",
    ListItemCheckbox: "Polaris-AlphaTable-TableRow__ListItemCheckbox",
    TableRowSummaryRowOpen: "Polaris-AlphaTable-TableRow__TableRowSummaryRowOpen",
    ListItemMain: "Polaris-AlphaTable-TableRow__ListItemMain",
    ListItemMainContent: "Polaris-AlphaTable-TableRow__ListItemMainContent",
    ListItemThumbnail: "Polaris-AlphaTable-TableRow__ListItemThumbnail",
    ListItemRowGroupToggle: "Polaris-AlphaTable-TableRow__ListItemRowGroupToggle",
    Dotted: "Polaris-AlphaTable-TableRow__Dotted",
    DottedElement: "Polaris-AlphaTable-TableRow__DottedElement",
    Kicker: "Polaris-AlphaTable-TableRow__Kicker",
    Primary: "Polaris-AlphaTable-TableRow__Primary",
    Secondary: "Polaris-AlphaTable-TableRow__Secondary",
    PrimarySecondary: "Polaris-AlphaTable-TableRow__PrimarySecondary",
    Body: "Polaris-AlphaTable-TableRow__Body",
    Labeled: "Polaris-AlphaTable-TableRow__Labeled",
    LabeledContent: "Polaris-AlphaTable-TableRow__LabeledContent",
    Numeric: "Polaris-AlphaTable-TableRow__Numeric",
    Label: "Polaris-AlphaTable-TableRow__Label",
    LabeledCell: "Polaris-AlphaTable-TableRow__LabeledCell",
    Inline: "Polaris-AlphaTable-TableRow__Inline",
    RowActions: "Polaris-AlphaTable-TableRow__RowActions",
    RowActionsStuck: "Polaris-AlphaTable-TableRow__RowActionsStuck",
    CheckIcon: "Polaris-AlphaTable-TableRow__CheckIcon",
    FakeRadio: "Polaris-AlphaTable-TableRow__FakeRadio",
    IconWrap: "Polaris-AlphaTable-TableRow__IconWrap",
    NestedRow: "Polaris-AlphaTable-TableRow__NestedRow",
    TableRowToggle: "Polaris-AlphaTable-TableRow__TableRowToggle"
};
function Ate() {
    const e = {
        thumbnail: null,
        kicker: null,
        primary: null,
        secondary: null,
        checkbox: null,
        rowGroupToggle: null
    }
      , t = {
        inline: [],
        labeled: [],
        body: [],
        dotted: [],
        slotsOrder: new Map
    }
      , n = [];
    return {
        slots: e,
        hiddenSlots: n,
        sortableSlots: t,
        addToSingleUseSlot(i, a) {
            e[i] = a
        },
        hideSlot(i) {
            n.push(i)
        },
        addSortableSlot(i, a, r, s) {
            t[i].push(a),
            t.slotsOrder.set(a, {
                index: r,
                slotOrder: s
            })
        },
        sortSlot(i) {
            return [...i].sort( (a, r) => {
                const s = t.slotsOrder.get(a)
                  , l = t.slotsOrder.get(r);
                return !s || !l ? 0 : s.slotOrder && l.slotOrder ? s.slotOrder - l.slotOrder : s.slotOrder ? -1 : l.slotOrder ? 1 : s.index - l.index
            }
            )
        }
    }
}
var Ri = {
    LegacyCard: "Polaris-LegacyCard",
    Section: "Polaris-LegacyCard__Section",
    subdued: "Polaris-LegacyCard--subdued",
    "Section-hideOnPrint": "Polaris-LegacyCard__Section--hideOnPrint",
    hideOnPrint: "Polaris-LegacyCard--hideOnPrint",
    Header: "Polaris-LegacyCard__Header",
    "Section-fullWidth": "Polaris-LegacyCard__Section--fullWidth",
    "Section-flush": "Polaris-LegacyCard__Section--flush",
    "Section-subdued": "Polaris-LegacyCard__Section--subdued",
    SectionHeader: "Polaris-LegacyCard__SectionHeader",
    Subsection: "Polaris-LegacyCard__Subsection",
    Footer: "Polaris-LegacyCard__Footer",
    LeftJustified: "Polaris-LegacyCard__LeftJustified",
    FirstSectionPadding: "Polaris-LegacyCard__FirstSectionPadding",
    LastSectionPadding: "Polaris-LegacyCard__LastSectionPadding"
}
  , zl = {
    LegacyStack: "Polaris-LegacyStack",
    Item: "Polaris-LegacyStack__Item",
    noWrap: "Polaris-LegacyStack--noWrap",
    spacingNone: "Polaris-LegacyStack--spacingNone",
    spacingExtraTight: "Polaris-LegacyStack--spacingExtraTight",
    spacingTight: "Polaris-LegacyStack--spacingTight",
    spacingBaseTight: "Polaris-LegacyStack--spacingBaseTight",
    spacingLoose: "Polaris-LegacyStack--spacingLoose",
    spacingExtraLoose: "Polaris-LegacyStack--spacingExtraLoose",
    distributionLeading: "Polaris-LegacyStack--distributionLeading",
    distributionTrailing: "Polaris-LegacyStack--distributionTrailing",
    distributionCenter: "Polaris-LegacyStack--distributionCenter",
    distributionEqualSpacing: "Polaris-LegacyStack--distributionEqualSpacing",
    distributionFill: "Polaris-LegacyStack--distributionFill",
    distributionFillEvenly: "Polaris-LegacyStack--distributionFillEvenly",
    alignmentLeading: "Polaris-LegacyStack--alignmentLeading",
    alignmentTrailing: "Polaris-LegacyStack--alignmentTrailing",
    alignmentCenter: "Polaris-LegacyStack--alignmentCenter",
    alignmentFill: "Polaris-LegacyStack--alignmentFill",
    alignmentBaseline: "Polaris-LegacyStack--alignmentBaseline",
    vertical: "Polaris-LegacyStack--vertical",
    "Item-fill": "Polaris-LegacyStack__Item--fill"
};
function wO({children: e, fill: t}) {
    const n = G(zl.Item, t && zl["Item-fill"]);
    return React.createElement("div", {
        className: n,
        children: e
    })
}
const Zr = React.memo(function({children: t, vertical: n, spacing: i, distribution: a, alignment: r, wrap: s}) {
    const l = G(zl.LegacyStack, n && zl.vertical, i && zl[$t("spacing", i)], a && zl[$t("distribution", a)], r && zl[$t("alignment", r)], s === !1 && zl.noWrap)
      , c = h2(t).map( (d, p) => ym(d, wO, {
        key: p
    }));
    return React.createElement("div", {
        className: l,
        children: c
    })
});
Zr.Item = wO;
const NO = React.createContext(!1);
function TO({children: e, title: t, subdued: n, flush: i, fullWidth: a, actions: r, hideOnPrint: s}) {
    const l = G(Ri.Section, i && Ri["Section-flush"], n && Ri["Section-subdued"], a && Ri["Section-fullWidth"], s && Ri["Section-hideOnPrint"])
      , c = r ? React.createElement(gr, {
        children: as(r, {
            variant: "plain"
        })
    }) : null
      , d = typeof t == "string" ? React.createElement(ee, {
        variant: "headingSm",
        as: "h3",
        fontWeight: "medium",
        children: t
    }) : t
      , p = d || c ? React.createElement("div", {
        className: Ri.SectionHeader,
        children: c ? React.createElement(Zr, {
            alignment: "baseline",
            children: [React.createElement(Zr.Item, {
                fill: !0,
                children: d
            }), c]
        }) : d
    }) : null;
    return React.createElement(NO.Provider, {
        value: !0,
        children: React.createElement("div", {
            className: l,
            children: [p, e]
        })
    })
}
var xte = {
    TooltipWrapper: "Polaris-AlphaTable-TableRowAction__TooltipWrapper"
};
function _te({icon: e, destructive: t, content: n, onAction: i, url: a, disabled: r, showContentAsTooltip: s=!1, ...l}) {
    const {renderedVariant: c} = zi()
      , d = React.createElement(nt, {
        ...l,
        icon: c === "table" ? e : void 0,
        tone: t ? "critical" : void 0,
        accessibilityLabel: c === "table" ? n : void 0,
        variant: c === "table" ? "tertiary" : "secondary",
        onClick: i,
        disabled: r,
        size: c === "list" ? "micro" : "slim",
        fullWidth: c === "list",
        url: a,
        children: c === "list" ? n : void 0
    });
    return c === "table" && s ? React.createElement("span", {
        className: xte.TooltipWrapper,
        children: React.createElement(Qn, {
            content: n,
            dismissOnMouseOut: !0,
            children: d
        })
    }) : d
}
function PO({actions: e}) {
    const [t,n] = React.useState(!1)
      , i = at()
      , {renderedVariant: a} = zi()
      , r = a === "table" ? 3 : 1;
    if (e.length > r) {
        const l = a === "table" ? React.createElement(nt, {
            size: "slim",
            variant: "tertiary",
            icon: "menu-horizontal",
            accessibilityLabel: i.translate("Polaris.AlphaTable.TableRowActions.activatorAccessibilityLabel"),
            onClick: () => {
                n(c => !c)
            }
        }) : React.createElement(nt, {
            size: "micro",
            variant: "secondary",
            onClick: () => {
                n(c => !c)
            }
            ,
            fullWidth: !0,
            children: i.translate("Polaris.AlphaTable.TableRowActions.activatorLabel")
        });
        return React.createElement(Fn, {
            active: t,
            activator: l,
            onClose: c => {
                c === yo.Click && window.addEventListener("click", d => {
                    d.stopPropagation()
                }
                , {
                    capture: !0,
                    once: !0
                }),
                n(!1)
            }
            ,
            preferredAlignment: a === "table" ? "right" : "center",
            fullWidth: a === "list",
            children: React.createElement(ka, {
                items: e,
                actionRole: "menuitem"
            })
        })
    }
    return React.createElement(Te, {
        gap: "200",
        wrap: !1,
        children: e.map(l => React.createElement(_te, {
            ...l,
            key: l.content
        }))
    })
}
const wte = React.forwardRef(function({children: t, tableRowActions: n, onClick: i, className: a, style: r}, s) {
    const {getHeading: l} = gu()
      , {toggleableRowGroups: c} = Gs()
      , {rowSelectionEnabled: d} = eo()
      , p = React.useContext(NO)
      , f = React.useMemo( () => {
        const {slots: g, sortableSlots: y, hiddenSlots: b, addToSingleUseSlot: k, addSortableSlot: C, hideSlot: x, sortSlot: A} = Ate()
          , _ = React.Children.toArray(t);
        return _.forEach( (w, T) => {
            const P = React.isValidElement(w) && w.props.value ? l(w.props.value.cellIndex) : l(T);
            if (!P)
                return;
            if (d && T === 0) {
                g.checkbox = w;
                return
            }
            if (c.size > 0 && T === _.length - 1) {
                g.rowGroupToggle = w;
                return
            }
            const {listSlot: I, orderInSlot: L} = P;
            switch (I) {
            case "thumbnail":
            case "kicker":
            case "primary":
            case "secondary":
                k(I, w);
                break;
            case "inline":
                C(I, w, T, L);
                break;
            case "dotted":
            case "body":
                {
                    const R = React.createElement("div", {
                        className: I === "dotted" ? Qt.DottedElement : void 0,
                        children: w
                    }, `${I}-${T}`);
                    C(I, R, T, L);
                    break
                }
            case "labeled":
                {
                    const R = React.createElement("div", {
                        className: G(Qt.LabeledContent, P.formatting === "numeric" && Qt.Numeric),
                        children: [React.createElement("div", {
                            className: Qt.Label,
                            children: P.title
                        }), React.createElement("div", {
                            className: Qt.LabeledCell,
                            children: w
                        })]
                    }, `labeled-slot-${T}`);
                    C(I, R, T, L);
                    break
                }
            case "hidden":
                x(w);
                break;
            default:
                {
                    const R = React.createElement("div", {
                        children: w
                    }, `body-${T}`);
                    C("body", R, T);
                    break
                }
            }
        }
        ),
        {
            ...g,
            inline: A(y.inline),
            labeled: A(y.labeled),
            body: A(y.body),
            dotted: A(y.dotted),
            hidden: b
        }
    }
    , [t, l, c, d])
      , v = n ? React.createElement("div", {
        onClick: g => g.stopPropagation(),
        children: React.createElement(PO, {
            actions: n
        })
    }) : null;
    return React.createElement("li", {
        className: G(Qt.ListItem, d && Qt.ListItemWithSelectionEnabled, p && Qt.WithinSectionContainer, a),
        style: r,
        onClick: i,
        ref: s,
        children: [f.checkbox ? React.createElement("div", {
            className: Qt.ListItemCheckbox,
            children: f.checkbox
        }) : null, React.createElement("div", {
            className: Qt.ListItemMainContent,
            children: [React.createElement("div", {
                className: Qt.ListItemMain,
                children: [f.thumbnail ? React.createElement("div", {
                    className: Qt.ListItemThumbnail,
                    children: f.thumbnail
                }) : null, React.createElement("div", {
                    className: Qt.ListItemContent,
                    children: [React.createElement("div", {
                        className: Qt.ListItemHeader,
                        children: [f.kicker && React.createElement("div", {
                            className: Qt.Kicker,
                            children: f.kicker
                        }), React.createElement("div", {
                            className: Qt.PrimarySecondary,
                            children: [React.createElement("div", {
                                className: Qt.Primary,
                                children: f.primary
                            }), React.createElement("div", {
                                className: Qt.Secondary,
                                children: f.secondary
                            })]
                        })]
                    }), React.createElement("div", {
                        className: Qt.Inline,
                        children: f.inline
                    }), React.createElement("div", {
                        className: Qt.Dotted,
                        children: f.dotted
                    }), React.createElement("div", {
                        className: Qt.Body,
                        children: f.body
                    }), f.labeled.length > 0 && React.createElement("div", {
                        className: Qt.Labeled,
                        children: React.createElement(ft, {
                            gap: "150",
                            children: f.labeled
                        })
                    })]
                })]
            }), v && React.createElement("div", {
                className: Qt.ListRowActions,
                children: v
            })]
        }), f.rowGroupToggle ? React.createElement("div", {
            className: Qt.ListItemRowGroupToggle,
            children: f.rowGroupToggle
        }) : null, f.hidden]
    })
});
function Nte({children: e}) {
    const [t,n] = React.useState(!1)
      , i = React.useMemo( () => React.Children.toArray(e).length, [e])
      , a = React.useRef([])
      , r = React.useRef(React.Children.toArray(e).length);
    React.useEffect( () => {
        r.current = i
    }
    , [i]);
    const s = React.useCallback( (c, d) => {
        a.current[c] = d,
        r.current--,
        r.current === 0 && n(!0)
    }
    , [])
      , l = React.useMemo( () => {
        const c = [];
        let d = 0;
        return a.current.forEach( (p, f) => {
            c[f] = d,
            d += p || 1
        }
        ),
        c
    }
    , [t, i]);
    return {
        allColspansRegistered: t,
        registerColSpan: s,
        cellIndexContext: l
    }
}
function Tte({id: e, value: t, children: n, tableRowActions: i, selected: a, disabled: r, isMultiSelectable: s, rowSelectionEnabled: l, setSelected: c, containsRowActions: d, onToggleSelected: p, setContainsRowActions: f, renderedVariant: v, className: g, style: y, summary: b, status: k, rowGroupCell: C, rowActionsStuck: x, isFilteringToSelectedOnly: A}) {
    const _ = at()
      , w = React.useRef(null)
      , T = React.useRef(null)
      , P = React.useRef(null)
      , I = React.useCallback(K => {
        T.current = K;
        const J = K == null ? void 0 : K.querySelector("[data-primary-link]");
        J && (w.current = J)
    }
    , [])
      , L = React.useCallback(K => {
        P.current = K;
        const J = K == null ? void 0 : K.querySelector("[data-primary-link]");
        J && (w.current = J)
    }
    , []);
    Kr( () => {
        i != null && i.length && f(!0)
    }
    , [i, f]);
    const R = React.useCallback( () => {
        if (!r && t && !(!s && a)) {
            if (p) {
                p();
                return
            }
            c(t, !a)
        }
    }
    , [r, t, s, a, c, p])
      , D = React.useCallback(K => {
        K.shiftKey && K.preventDefault()
    }
    , [])
      , M = React.useCallback(K => {
        var ne, Y, ue;
        const {target: J} = K;
        if (r)
            return;
        const X = J;
        if (A) {
            K.preventDefault(),
            K.stopPropagation(),
            R();
            return
        }
        if ((ne = X == null ? void 0 : X.closest) != null && ne.call(X, "[data-activator-button]") || (Y = X == null ? void 0 : X.closest) != null && Y.call(X, "[data-polaris-overlay]") && ((ue = T.current) == null ? void 0 : ue.querySelector('[data-activator-button][aria-expanded="true"]')))
            return;
        if (l && !w.current) {
            R();
            return
        }
        J === w.current || X.closest("[data-primary-link]") || !w.current || w.current.dispatchEvent(new MouseEvent(K.type,K.nativeEvent))
    }
    , [l, R, r, A])
      , O = React.useCallback(K => {
        K.target.tagName !== "INPUT" && R()
    }
    , [R])
      , z = React.useMemo( () => {
        const K = s ? React.createElement(ss, {
            checked: a,
            onChange: R,
            label: _.translate("Polaris.AlphaTable.Selection.select", {
                id: t ?? ""
            }),
            labelHidden: !0,
            disabled: r
        }) : React.createElement("div", {
            className: G(Qt.CheckIcon, a && s && Qt.Selected),
            children: [React.createElement("input", {
                type: "radio",
                className: Qt.FakeRadio,
                "aria-label": _.translate("Polaris.AlphaTable.Selection.select", {
                    id: t ?? ""
                }),
                onChange: R,
                checked: !!a,
                disabled: r
            }), a ? React.createElement("div", {
                className: Qt.IconWrap,
                children: React.createElement(Fe, {
                    type: "check"
                })
            }) : null]
        });
        return React.createElement("div", {
            className: Qt.CheckboxHitState,
            onClick: O,
            children: K
        })
    }
    , [s, a, R, _, t, r, O])
      , B = React.useMemo( () => {
        const K = l ? React.createElement(Yd, {
            stopClickEventPropagation: !0,
            children: z
        }) : null
          , J = d && v === "table" ? React.createElement(Yd, {
            stopClickEventPropagation: !0,
            children: i && !A ? React.createElement("div", {
                className: G(Qt.RowActions, x && Qt.RowActionsStuck),
                children: React.createElement(PO, {
                    actions: i
                })
            }) : null
        }) : null;
        return React.Children.toArray([K, n, J, C])
    }
    , [z, n, l, d, i, v, C, x, A])
      , {allColspansRegistered: H, cellIndexContext: q, registerColSpan: W} = Nte({
        children: B
    })
      , V = React.useCallback(K => ({
        registerColSpan: J => W(K, J),
        cellIndex: H && q[K] != null ? q[K] : K,
        inert: A && v === "table" && K > 0
    }), [H, q, W, A, v])
      , $ = React.useMemo( () => B.map( (K, J) => React.createElement(F2.Provider, {
        value: V(J),
        children: K
    }, J)), [B, V])
      , Q = G(l && !r && !A && Qt.Selectable, a && Qt.Selected, r && Qt.Disabled, b && Qt.Summary, k && Qt[`Row-${k}`], A && Qt.ShowSelectedMode, g);
    return v === "list" ? React.createElement(wte, {
        tableRowActions: i,
        onClick: M,
        className: Q,
        style: y,
        ref: L,
        children: $
    }) : React.createElement("div", {
        role: "row",
        onClick: M,
        onMouseDown: D,
        className: G(Qt.TableRow, Q),
        style: y,
        ref: I,
        "aria-disabled": r,
        tabIndex: -1,
        id: e,
        children: $
    })
}
const Pte = e => {
    const {value: t, selected: n, defaultSelected: i, disabled: a} = e
      , {maxSelectable: r, rowSelectionEnabled: s, selectedState: l, isFilteringToSelectedOnly: c} = eo()
      , {setSelected: d, registerRow: p, unregisterRow: f, registerDisabledRow: v, unregisterDisabledRow: g, registerRowProps: y, unregisterRowProps: b} = vu()
      , {selectedValues: k} = lc()
      , {renderedVariant: C} = zi()
      , {containsRowActions: x, setContainsRowActions: A} = j2()
      , w = km().size > 0
      , {isRowActionsStuck: T} = O2()
      , {headings: P} = gu()
      , I = React.useMemo( () => a ? !1 : n || !!(l === "all" || t && k.has(t)), [n, t, k, l, a])
      , L = s && r !== 1
      , R = r !== -1 && k.size >= r
      , D = a || !!(L && !I && R)
      , M = React.useRef(t);
    React.useEffect( () => {
        if (!(!t || w))
            return M.current && t !== M.current && f(M.current),
            p(t),
            M.current = t,
            () => {
                f(t)
            }
    }
    , [t, p, w, f]),
    React.useEffect( () => {
        if (t)
            return M.current && t !== M.current && g(M.current),
            D ? v(t) : g(t),
            () => {
                D && g(t)
            }
    }
    , [D, t, v, g]),
    React.useEffect( () => {
        i && t && d(t, i)
    }
    , []);
    const O = React.useRef(e);
    O.current = e;
    const z = React.useRef(P);
    z.current = P;
    const B = React.useRef({
        ...e,
        containsRowActions: x,
        rowSelectionEnabled: s,
        renderedVariant: C
    });
    return B.current = {
        ...e,
        containsRowActions: x,
        rowSelectionEnabled: s,
        renderedVariant: C
    },
    React.useEffect( () => {
        t && (I ? y(t, B.current, z.current) : b(t))
    }
    , [t, I, y, b]),
    React.useMemo( () => ({
        disabled: D,
        isMultiSelectable: L,
        rowSelectionEnabled: s,
        setSelected: d,
        selected: I,
        renderedVariant: C,
        containsRowActions: x,
        setContainsRowActions: A,
        rowActionsStuck: T,
        isFilteringToSelectedOnly: c
    }), [D, L, s, d, I, C, x, A, T, c])
}
  , cb = yu(Tte, Pte);
function Ite({value: e, children: t, tableRowActions: n, selected: i, disabled: a, rowVisible: r}) {
    return r ? React.createElement(Fte, {
        value: e,
        selected: i,
        disabled: a,
        tableRowActions: n,
        children: t
    }) : null
}
const Lte = ({value: e}) => {
    const {toggleableRowGroups: t} = Gs()
      , n = km()
      , i = P_()
      , {registerRow: a} = vu()
      , {toggleable: r} = Zd()
      , s = React.useMemo( () => {
        if (!r)
            return !0;
        const l = [...n].pop();
        return l ? t.get(l) ?? !1 : !0
    }
    , [t, n, r]);
    return React.useEffect( () => {
        n.forEach(l => {
            if (i.current && e) {
                const c = i.current.get(l);
                c ? c.add(e) : i.current.set(l, new Set([e]))
            }
        }
        ),
        e && a(e)
    }
    , [e, i, a, n]),
    React.useMemo( () => ({
        rowVisible: s,
        toggleable: r
    }), [s, r])
}
  , Fte = yu(cb, _O)
  , Ete = yu(Ite, Lte);
function Mte({value: e, children: t, tableRowActions: n, selected: i, disabled: a, rowVisible: r, onToggleSelected: s}) {
    return r ? React.createElement(Dte, {
        value: e,
        selected: i,
        disabled: a,
        tableRowActions: n,
        onToggleSelected: s,
        children: t
    }) : null
}
const Rte = ({value: e}) => {
    const {toggleableRowGroups: t} = Gs()
      , n = km()
      , i = P_()
      , {selectedValues: a} = lc()
      , {setSelectedMultiple: r} = vu()
      , {toggleable: s} = Zd()
      , [l,c] = React.useMemo( () => {
        const v = [...n];
        return [v.pop(), v.pop()]
    }
    , [n])
      , d = React.useMemo( () => !s || !c ? !0 : t.get(c) ?? !1, [t, c, s])
      , p = React.useMemo( () => {
        const v = i.current
          , g = v == null ? void 0 : v.get(l);
        if (!g)
            return !1;
        const y = Array.from(g).filter(b => a.has(b));
        return y.length === 0 ? !1 : y.length === g.size ? !0 : "indeterminate"
    }
    , [a, i, l])
      , f = React.useCallback( () => {
        const v = i.current;
        if (!v)
            return;
        const g = [...n].pop()
          , y = v.get(g);
        if (!y)
            return;
        r(y, p !== !0)
    }
    , [i, r, p, n]);
    return React.useMemo( () => ({
        rowVisible: d,
        selected: p,
        onToggleSelected: f,
        value: e
    }), [d, p, f, e])
}
  , jte = ({value: e}) => {
    const t = at()
      , {style: n, className: i} = _O({
        value: e
    })
      , [a] = T_()
      , r = km()
      , {toggleableRowGroups: s, setToggleableRowGroups: l} = Gs()
      , {toggleable: c} = Zd()
      , d = React.useMemo( () => Array.from(r).pop(), [r])
      , p = React.useMemo( () => {
        const b = d ? s.get(d) : !1;
        return G(i, b && Qt.TableRowSummaryRowOpen)
    }
    , [i, s, d])
      , f = React.useMemo( () => d ? s.get(d) ?? !1 : !0, [s, d])
      , v = React.useMemo( () => ({
        ...a && a > 0 && {
            "--pc-table-cell-border-width": "0px"
        }
    }), [a])
      , g = React.useCallback( () => {
        d && l(b => {
            const k = new Map(b);
            return k.set(d, !f),
            k
        }
        )
    }
    , [f, l, d])
      , y = React.useMemo( () => c ? React.createElement(Yd, {
        stopClickEventPropagation: !0,
        style: v,
        children: React.createElement("div", {
            className: Qt.TableRowToggle,
            children: React.createElement(nt, {
                variant: "tertiary",
                icon: React.createElement(Fe, {
                    type: f ? "chevron-up" : "chevron-down"
                }),
                onClick: g,
                accessibilityLabel: t.translate("Polaris.AlphaTable.TableRowGroups.toggle"),
                ariaExpanded: !!f
            })
        })
    }) : void 0, [c, f, g, t, v]);
    return React.useMemo( () => ({
        value: e,
        style: n,
        className: p,
        id: d,
        rowGroupCell: y
    }), [e, n, p, d, y])
}
  , Dte = yu(cb, jte)
  , Ote = yu(Mte, Rte);
function Bte({children: e, nestedLevelContextValue: t, colspan: n, rowGroupId: i, childrenVisible: a, renderedVariant: r}) {
    const s = React.useMemo( () => {
        const l = React.Children.toArray(e)
          , c = l.map( (d, p) => {
            const f = p === l.length - 1;
            return React.createElement(yO.Provider, {
                value: f,
                children: d
            }, p)
        }
        );
        return r === "table" ? React.createElement("div", {
            role: "row",
            "aria-disabled": a ? "false" : "true",
            className: ql.RowsWrappingRow,
            children: React.createElement("div", {
                role: "cell",
                "aria-colspan": n,
                className: ql.RowPassThrough,
                children: React.createElement("div", {
                    role: "table",
                    "aria-labelledby": i,
                    className: ql.RowPassThrough,
                    children: React.createElement("div", {
                        role: "rowgroup",
                        className: ql.RowPassThrough,
                        children: c
                    })
                })
            })
        }) : c
    }
    , [e, r, n, i, a]);
    return React.createElement(vO.Provider, {
        value: t,
        children: s
    })
}
const zte = () => {
    const [e,t] = T_()
      , n = bO()
      , {showTrack: i} = Zd()
      , {headings: a} = gu()
      , r = km()
      , {toggleableRowGroups: s} = Gs()
      , {renderedVariant: l} = zi()
      , c = Array.from(r).pop()
      , d = c ? s.get(c) ?? !1 : !1
      , p = l === "list" ? 1.25 : 1
      , f = React.useMemo( () => {
        if (!i)
            return "";
        if (n || e === 0)
            return t;
        const b = `${cy * p + cy * (e - 1)}px 0 0 var(--p-color-border)`;
        return t ? `${t}, ${b}` : b
    }
    , [n, t, e, i, p])
      , v = e == null ? 1 : e + 1
      , g = React.useMemo( () => [v, f], [v, f]);
    return React.useMemo( () => ({
        nestedLevelContextValue: g,
        colspan: a.length,
        rowGroupId: c,
        childrenVisible: d,
        renderedVariant: l
    }), [g, a.length, c, d, l])
}
  , Vte = e => {
    const t = zte();
    return React.useMemo( () => React.createElement(Bte, {
        ...t,
        ...e
    }), [t, e])
}
;
function ub({id: e, initialOpen: t, children: n, showTrack: i=!0, toggleable: a=!0}) {
    const r = km()
      , {toggleableRowGroups: s, setToggleableRowGroups: l} = Gs()
      , c = P_()
      , d = r.size > 0 ? c.current : new Map
      , p = React.useRef(d);
    React.useEffect( () => {
        s.has(e) || !a || l(y => {
            const b = new Map(y);
            return b.set(e, !!t),
            b
        }
        )
    }
    , [e, s, l, t, a]),
    React.useEffect( () => {
        p.current && !p.current.has(e) && p.current.set(e, new Set)
    }
    , [e, t]),
    React.useEffect( () => {
        if (!a)
            return;
        const b = [...r].pop();
        if (!b)
            return;
        const k = s.get(b)
          , C = s.get(e);
        !k && C && l(x => {
            const A = new Map(x);
            return A.set(e, !1),
            A
        }
        )
    }
    , [r, l, s, e, a]);
    const f = React.useMemo( () => new Set([...r, e]), [r, e])
      , v = React.useMemo( () => ({
        showTrack: !!i,
        toggleable: !!a
    }), [i, a])
      , g = React.useMemo( () => s.size > 0 || !a ? n : null, [s, a, n]);
    return React.createElement(SO.Provider, {
        value: f,
        children: React.createElement(kO.Provider, {
            value: p,
            children: React.createElement(CO.Provider, {
                value: v,
                children: g
            })
        })
    })
}
ub.Row = Ete;
ub.Summary = Ote;
ub.Rows = Vte;
function uy() {
    return uy = Object.assign ? Object.assign.bind() : function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
                ({}).hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
    }
    ,
    uy.apply(null, arguments)
}
function I_(e, t) {
    if (e == null)
        return {};
    var n = {};
    for (var i in e)
        if ({}.hasOwnProperty.call(e, i)) {
            if (t.indexOf(i) !== -1)
                continue;
            n[i] = e[i]
        }
    return n
}
function k0(e, t) {
    return k0 = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
        return n.__proto__ = i,
        n
    }
    ,
    k0(e, t)
}
function db(e, t) {
    e.prototype = Object.create(t.prototype),
    e.prototype.constructor = e,
    k0(e, t)
}
var aC = {
    exports: {}
}, rC, eL;
function Ute() {
    if (eL)
        return rC;
    eL = 1;
    var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    return rC = e,
    rC
}
var oC, tL;
function $te() {
    if (tL)
        return oC;
    tL = 1;
    var e = Ute();
    function t() {}
    function n() {}
    return n.resetWarningCache = t,
    oC = function() {
        function i(s, l, c, d, p, f) {
            if (f !== e) {
                var v = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw v.name = "Invariant Violation",
                v
            }
        }
        i.isRequired = i;
        function a() {
            return i
        }
        var r = {
            array: i,
            bigint: i,
            bool: i,
            func: i,
            number: i,
            object: i,
            string: i,
            symbol: i,
            any: i,
            arrayOf: a,
            element: i,
            elementType: i,
            instanceOf: a,
            node: i,
            objectOf: a,
            oneOf: a,
            oneOfType: a,
            shape: a,
            exact: a,
            checkPropTypes: n,
            resetWarningCache: t
        };
        return r.PropTypes = r,
        r
    }
    ,
    oC
}
var nL;
function Hte() {
    return nL || (nL = 1,
    aC.exports = $te()()),
    aC.exports
}
var Zt = Hte();

function Wte(e, t) {
    return e.classList ? !!t && e.classList.contains(t) : (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ") !== -1
}
function qte(e, t) {
    e.classList ? e.classList.add(t) : Wte(e, t) || (typeof e.className == "string" ? e.className = e.className + " " + t : e.setAttribute("class", (e.className && e.className.baseVal || "") + " " + t))
}
function iL(e, t) {
    return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)","g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
}
function Gte(e, t) {
    e.classList ? e.classList.remove(t) : typeof e.className == "string" ? e.className = iL(e.className, t) : e.setAttribute("class", iL(e.className && e.className.baseVal || "", t))
}
const aL = {
    disabled: !1
}
  , pf = React.createContext(null);
var IO = function(t) {
    return t.scrollTop
}
  , Fp = "unmounted"
  , zc = "exited"
  , Vr = "entering"
  , Jo = "entered"
  , ff = "exiting"
  , vr = function(e) {
    db(t, e);
    function t(i, a) {
        var r;
        r = e.call(this, i, a) || this;
        var s = a, l = s && !s.isMounting ? i.enter : i.appear, c;
        return r.appearStatus = null,
        i.in ? l ? (c = zc,
        r.appearStatus = Vr) : c = Jo : i.unmountOnExit || i.mountOnEnter ? c = Fp : c = zc,
        r.state = {
            status: c
        },
        r.nextCallback = null,
        r
    }
    t.getDerivedStateFromProps = function(a, r) {
        var s = a.in;
        return s && r.status === Fp ? {
            status: zc
        } : null
    }
    ;
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.updateStatus(!0, this.appearStatus)
    }
    ,
    n.componentDidUpdate = function(a) {
        var r = null;
        if (a !== this.props) {
            var s = this.state.status;
            this.props.in ? s !== Vr && s !== Jo && (r = Vr) : (s === Vr || s === Jo) && (r = ff)
        }
        this.updateStatus(!1, r)
    }
    ,
    n.componentWillUnmount = function() {
        this.cancelNextCallback()
    }
    ,
    n.getTimeouts = function() {
        var a = this.props.timeout, r, s, l;
        return r = s = l = a,
        a != null && typeof a != "number" && (r = a.exit,
        s = a.enter,
        l = a.appear !== void 0 ? a.appear : s),
        {
            exit: r,
            enter: s,
            appear: l
        }
    }
    ,
    n.updateStatus = function(a, r) {
        if (a === void 0 && (a = !1),
        r !== null)
            if (this.cancelNextCallback(),
            r === Vr) {
                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var s = this.props.nodeRef ? this.props.nodeRef.current : Tp.findDOMNode(this);
                    s && IO(s)
                }
                this.performEnter(a)
            } else
                this.performExit();
        else
            this.props.unmountOnExit && this.state.status === zc && this.setState({
                status: Fp
            })
    }
    ,
    n.performEnter = function(a) {
        var r = this
          , s = this.props.enter
          , l = this.context ? this.context.isMounting : a
          , c = this.props.nodeRef ? [l] : [Tp.findDOMNode(this), l]
          , d = c[0]
          , p = c[1]
          , f = this.getTimeouts()
          , v = l ? f.appear : f.enter;
        if (!a && !s || aL.disabled) {
            this.safeSetState({
                status: Jo
            }, function() {
                r.props.onEntered(d)
            });
            return
        }
        this.props.onEnter(d, p),
        this.safeSetState({
            status: Vr
        }, function() {
            r.props.onEntering(d, p),
            r.onTransitionEnd(v, function() {
                r.safeSetState({
                    status: Jo
                }, function() {
                    r.props.onEntered(d, p)
                })
            })
        })
    }
    ,
    n.performExit = function() {
        var a = this
          , r = this.props.exit
          , s = this.getTimeouts()
          , l = this.props.nodeRef ? void 0 : Tp.findDOMNode(this);
        if (!r || aL.disabled) {
            this.safeSetState({
                status: zc
            }, function() {
                a.props.onExited(l)
            });
            return
        }
        this.props.onExit(l),
        this.safeSetState({
            status: ff
        }, function() {
            a.props.onExiting(l),
            a.onTransitionEnd(s.exit, function() {
                a.safeSetState({
                    status: zc
                }, function() {
                    a.props.onExited(l)
                })
            })
        })
    }
    ,
    n.cancelNextCallback = function() {
        this.nextCallback !== null && (this.nextCallback.cancel(),
        this.nextCallback = null)
    }
    ,
    n.safeSetState = function(a, r) {
        r = this.setNextCallback(r),
        this.setState(a, r)
    }
    ,
    n.setNextCallback = function(a) {
        var r = this
          , s = !0;
        return this.nextCallback = function(l) {
            s && (s = !1,
            r.nextCallback = null,
            a(l))
        }
        ,
        this.nextCallback.cancel = function() {
            s = !1
        }
        ,
        this.nextCallback
    }
    ,
    n.onTransitionEnd = function(a, r) {
        this.setNextCallback(r);
        var s = this.props.nodeRef ? this.props.nodeRef.current : Tp.findDOMNode(this)
          , l = a == null && !this.props.addEndListener;
        if (!s || l) {
            setTimeout(this.nextCallback, 0);
            return
        }
        if (this.props.addEndListener) {
            var c = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback]
              , d = c[0]
              , p = c[1];
            this.props.addEndListener(d, p)
        }
        a != null && setTimeout(this.nextCallback, a)
    }
    ,
    n.render = function() {
        var a = this.state.status;
        if (a === Fp)
            return null;
        var r = this.props
          , s = r.children;
        r.in,
        r.mountOnEnter,
        r.unmountOnExit,
        r.appear,
        r.enter,
        r.exit,
        r.timeout,
        r.addEndListener,
        r.onEnter,
        r.onEntering,
        r.onEntered,
        r.onExit,
        r.onExiting,
        r.onExited,
        r.nodeRef;
        var l = I_(r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
        return React.createElement(pf.Provider, {
            value: null
        }, typeof s == "function" ? s(a, l) : React.cloneElement(React.Children.only(s), l))
    }
    ,
    t
}(React.Component);
vr.contextType = pf;
vr.propTypes = {};
function Ju() {}
vr.defaultProps = {
    in: !1,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    enter: !0,
    exit: !0,
    onEnter: Ju,
    onEntering: Ju,
    onEntered: Ju,
    onExit: Ju,
    onExiting: Ju,
    onExited: Ju
};
vr.UNMOUNTED = Fp;
vr.EXITED = zc;
vr.ENTERING = Vr;
vr.ENTERED = Jo;
vr.EXITING = ff;
var Kte = function(t, n) {
    return t && n && n.split(" ").forEach(function(i) {
        return qte(t, i)
    })
}
  , sC = function(t, n) {
    return t && n && n.split(" ").forEach(function(i) {
        return Gte(t, i)
    })
}
  , Cr = function(e) {
    db(t, e);
    function t() {
        for (var i, a = arguments.length, r = new Array(a), s = 0; s < a; s++)
            r[s] = arguments[s];
        return i = e.call.apply(e, [this].concat(r)) || this,
        i.appliedClasses = {
            appear: {},
            enter: {},
            exit: {}
        },
        i.onEnter = function(l, c) {
            var d = i.resolveArguments(l, c)
              , p = d[0]
              , f = d[1];
            i.removeClasses(p, "exit"),
            i.addClass(p, f ? "appear" : "enter", "base"),
            i.props.onEnter && i.props.onEnter(l, c)
        }
        ,
        i.onEntering = function(l, c) {
            var d = i.resolveArguments(l, c)
              , p = d[0]
              , f = d[1]
              , v = f ? "appear" : "enter";
            i.addClass(p, v, "active"),
            i.props.onEntering && i.props.onEntering(l, c)
        }
        ,
        i.onEntered = function(l, c) {
            var d = i.resolveArguments(l, c)
              , p = d[0]
              , f = d[1]
              , v = f ? "appear" : "enter";
            i.removeClasses(p, v),
            i.addClass(p, v, "done"),
            i.props.onEntered && i.props.onEntered(l, c)
        }
        ,
        i.onExit = function(l) {
            var c = i.resolveArguments(l)
              , d = c[0];
            i.removeClasses(d, "appear"),
            i.removeClasses(d, "enter"),
            i.addClass(d, "exit", "base"),
            i.props.onExit && i.props.onExit(l)
        }
        ,
        i.onExiting = function(l) {
            var c = i.resolveArguments(l)
              , d = c[0];
            i.addClass(d, "exit", "active"),
            i.props.onExiting && i.props.onExiting(l)
        }
        ,
        i.onExited = function(l) {
            var c = i.resolveArguments(l)
              , d = c[0];
            i.removeClasses(d, "exit"),
            i.addClass(d, "exit", "done"),
            i.props.onExited && i.props.onExited(l)
        }
        ,
        i.resolveArguments = function(l, c) {
            return i.props.nodeRef ? [i.props.nodeRef.current, l] : [l, c]
        }
        ,
        i.getClassNames = function(l) {
            var c = i.props.classNames
              , d = typeof c == "string"
              , p = d && c ? c + "-" : ""
              , f = d ? "" + p + l : c[l]
              , v = d ? f + "-active" : c[l + "Active"]
              , g = d ? f + "-done" : c[l + "Done"];
            return {
                baseClassName: f,
                activeClassName: v,
                doneClassName: g
            }
        }
        ,
        i
    }
    var n = t.prototype;
    return n.addClass = function(a, r, s) {
        var l = this.getClassNames(r)[s + "ClassName"]
          , c = this.getClassNames("enter")
          , d = c.doneClassName;
        r === "appear" && s === "done" && d && (l += " " + d),
        s === "active" && a && IO(a),
        l && (this.appliedClasses[r][s] = l,
        Kte(a, l))
    }
    ,
    n.removeClasses = function(a, r) {
        var s = this.appliedClasses[r]
          , l = s.base
          , c = s.active
          , d = s.done;
        this.appliedClasses[r] = {},
        l && sC(a, l),
        c && sC(a, c),
        d && sC(a, d)
    }
    ,
    n.render = function() {
        var a = this.props;
        a.classNames;
        var r = I_(a, ["classNames"]);
        return React.createElement(vr, uy({}, r, {
            onEnter: this.onEnter,
            onEntered: this.onEntered,
            onEntering: this.onEntering,
            onExit: this.onExit,
            onExiting: this.onExiting,
            onExited: this.onExited
        }))
    }
    ,
    t
}(React.Component);
Cr.defaultProps = {
    classNames: ""
};
Cr.propTypes = {};
function Qte(e) {
    if (e === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e
}
function L_(e, t) {
    var n = function(r) {
        return t && React.isValidElement(r) ? t(r) : r
    }
      , i = Object.create(null);
    return e && React.Children.map(e, function(a) {
        return a
    }).forEach(function(a) {
        i[a.key] = n(a)
    }),
    i
}
function Zte(e, t) {
    e = e || {},
    t = t || {};
    function n(p) {
        return p in t ? t[p] : e[p]
    }
    var i = Object.create(null)
      , a = [];
    for (var r in e)
        r in t ? a.length && (i[r] = a,
        a = []) : a.push(r);
    var s, l = {};
    for (var c in t) {
        if (i[c])
            for (s = 0; s < i[c].length; s++) {
                var d = i[c][s];
                l[i[c][s]] = n(d)
            }
        l[c] = n(c)
    }
    for (s = 0; s < a.length; s++)
        l[a[s]] = n(a[s]);
    return l
}
function Qc(e, t, n) {
    return n[t] != null ? n[t] : e.props[t]
}
function Yte(e, t) {
    return L_(e.children, function(n) {
        return React.cloneElement(n, {
            onExited: t.bind(null, n),
            in: !0,
            appear: Qc(n, "appear", e),
            enter: Qc(n, "enter", e),
            exit: Qc(n, "exit", e)
        })
    })
}
function Jte(e, t, n) {
    var i = L_(e.children)
      , a = Zte(t, i);
    return Object.keys(a).forEach(function(r) {
        var s = a[r];
        if (React.isValidElement(s)) {
            var l = r in t
              , c = r in i
              , d = t[r]
              , p = React.isValidElement(d) && !d.props.in;
            c && (!l || p) ? a[r] = React.cloneElement(s, {
                onExited: n.bind(null, s),
                in: !0,
                exit: Qc(s, "exit", e),
                enter: Qc(s, "enter", e)
            }) : !c && l && !p ? a[r] = React.cloneElement(s, {
                in: !1
            }) : c && l && React.isValidElement(d) && (a[r] = React.cloneElement(s, {
                onExited: n.bind(null, s),
                in: d.props.in,
                exit: Qc(s, "exit", e),
                enter: Qc(s, "enter", e)
            }))
        }
    }),
    a
}
var Xte = Object.values || function(e) {
    return Object.keys(e).map(function(t) {
        return e[t]
    })
}
  , ene = {
    component: "div",
    childFactory: function(t) {
        return t
    }
}
  , mb = function(e) {
    db(t, e);
    function t(i, a) {
        var r;
        r = e.call(this, i, a) || this;
        var s = r.handleExited.bind(Qte(r));
        return r.state = {
            contextValue: {
                isMounting: !0
            },
            handleExited: s,
            firstRender: !0
        },
        r
    }
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.mounted = !0,
        this.setState({
            contextValue: {
                isMounting: !1
            }
        })
    }
    ,
    n.componentWillUnmount = function() {
        this.mounted = !1
    }
    ,
    t.getDerivedStateFromProps = function(a, r) {
        var s = r.children
          , l = r.handleExited
          , c = r.firstRender;
        return {
            children: c ? Yte(a, l) : Jte(a, s, l),
            firstRender: !1
        }
    }
    ,
    n.handleExited = function(a, r) {
        var s = L_(this.props.children);
        a.key in s || (a.props.onExited && a.props.onExited(r),
        this.mounted && this.setState(function(l) {
            var c = uy({}, l.children);
            return delete c[a.key],
            {
                children: c
            }
        }))
    }
    ,
    n.render = function() {
        var a = this.props
          , r = a.component
          , s = a.childFactory
          , l = I_(a, ["component", "childFactory"])
          , c = this.state.contextValue
          , d = Xte(this.state.children).map(s);
        return delete l.appear,
        delete l.enter,
        delete l.exit,
        r === null ? React.createElement(pf.Provider, {
            value: c
        }, d) : React.createElement(pf.Provider, {
            value: c
        }, React.createElement(r, l, d))
    }
    ,
    t
}(React.Component);
mb.propTypes = {};
mb.defaultProps = ene;
var Pg, Ig;
function tne(e, t) {
    return !(e === t || React.isValidElement(e) && React.isValidElement(t) && e.key != null && e.key === t.key)
}
var Jd = {
    out: "out-in",
    in: "in-out"
}
  , dy = function(t, n, i) {
    return function() {
        var a;
        t.props[n] && (a = t.props)[n].apply(a, arguments),
        i()
    }
}
  , nne = (Pg = {},
Pg[Jd.out] = function(e) {
    var t = e.current
      , n = e.changeState;
    return React.cloneElement(t, {
        in: !1,
        onExited: dy(t, "onExited", function() {
            n(Vr, null)
        })
    })
}
,
Pg[Jd.in] = function(e) {
    var t = e.current
      , n = e.changeState
      , i = e.children;
    return [t, React.cloneElement(i, {
        in: !0,
        onEntered: dy(i, "onEntered", function() {
            n(Vr)
        })
    })]
}
,
Pg)
  , ine = (Ig = {},
Ig[Jd.out] = function(e) {
    var t = e.children
      , n = e.changeState;
    return React.cloneElement(t, {
        in: !0,
        onEntered: dy(t, "onEntered", function() {
            n(Jo, React.cloneElement(t, {
                in: !0
            }))
        })
    })
}
,
Ig[Jd.in] = function(e) {
    var t = e.current
      , n = e.children
      , i = e.changeState;
    return [React.cloneElement(t, {
        in: !1,
        onExited: dy(t, "onExited", function() {
            i(Jo, React.cloneElement(n, {
                in: !0
            }))
        })
    }), React.cloneElement(n, {
        in: !0
    })]
}
,
Ig)
  , F_ = function(e) {
    db(t, e);
    function t() {
        for (var i, a = arguments.length, r = new Array(a), s = 0; s < a; s++)
            r[s] = arguments[s];
        return i = e.call.apply(e, [this].concat(r)) || this,
        i.state = {
            status: Jo,
            current: null
        },
        i.appeared = !1,
        i.changeState = function(l, c) {
            c === void 0 && (c = i.state.current),
            i.setState({
                status: l,
                current: c
            })
        }
        ,
        i
    }
    var n = t.prototype;
    return n.componentDidMount = function() {
        this.appeared = !0
    }
    ,
    t.getDerivedStateFromProps = function(a, r) {
        return a.children == null ? {
            current: null
        } : r.status === Vr && a.mode === Jd.in ? {
            status: Vr
        } : r.current && tne(r.current, a.children) ? {
            status: ff
        } : {
            current: React.cloneElement(a.children, {
                in: !0
            })
        }
    }
    ,
    n.render = function() {
        var a = this.props, r = a.children, s = a.mode, l = this.state, c = l.status, d = l.current, p = {
            children: r,
            current: d,
            changeState: this.changeState,
            status: c
        }, f;
        switch (c) {
        case Vr:
            f = ine[s](p);
            break;
        case ff:
            f = nne[s](p);
            break;
        case Jo:
            f = d
        }
        return React.createElement(pf.Provider, {
            value: {
                isMounting: !this.appeared
            }
        }, f)
    }
    ,
    t
}(React.Component);
F_.propTypes = {};
F_.defaultProps = {
    mode: Jd.out
};
var Fr = {
    TableStickyArea: "Polaris-AlphaTable-TableStickyArea",
    TableStickyAreaWrapper: "Polaris-AlphaTable-TableStickyArea__TableStickyAreaWrapper",
    StickyWrapper: "Polaris-AlphaTable-TableStickyArea__StickyWrapper",
    IsSticky: "Polaris-AlphaTable-TableStickyArea__IsSticky",
    StickyBulkActions: "Polaris-AlphaTable-TableStickyArea__StickyBulkActions",
    StickyBulkActionsInner: "Polaris-AlphaTable-TableStickyArea__StickyBulkActionsInner",
    "StickyBulkActions-enter": "Polaris-AlphaTable-TableStickyArea__StickyBulkActions--enter",
    "StickyBulkActions-enter-active": "Polaris-AlphaTable-TableStickyArea--stickyBulkActionsEnterActive",
    "StickyBulkActions-exit": "Polaris-AlphaTable-TableStickyArea__StickyBulkActions--exit",
    "StickyBulkActions-exit-active": "Polaris-AlphaTable-TableStickyArea--stickyBulkActionsExitActive"
};
function ane() {
    const e = React.useContext(t_);
    if (!e)
        throw new ib("No StickyManager was provided.");
    return e
}
class rne extends React.Component {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            isSticky: !1,
            style: {},
            stickyNodeHeight: null
        });
        te(this, "placeHolderNode", null);
        te(this, "stickyNode", null);
        te(this, "setPlaceHolderNode", n => {
            this.placeHolderNode = n
        }
        );
        te(this, "setStickyNode", n => {
            this.stickyNode = n
        }
        );
        te(this, "handlePositioning", (n, i=0, a=0, r=0) => {
            const {isSticky: s} = this.state;
            if (r === 0)
                return null;
            (n && !s || !n && s) && this.setState({
                isSticky: !s
            }, () => {
                if (this.props.onStickyChange == null || (this.props.onStickyChange(!s),
                this.props.boundingElement == null))
                    return null;
                this.props.boundingElement.toggleAttribute("data-sticky-active")
            }
            );
            const l = n ? {
                position: "fixed",
                top: i,
                left: a,
                width: r
            } : {};
            this.setState({
                style: l,
                stickyNodeHeight: this.getStickyNodeHeight(n)
            })
        }
        );
        te(this, "getStickyNodeHeight", n => this.placeHolderNode && this.stickyNode && n ? Yo(this.stickyNode).height : null)
    }
    componentDidMount() {
        const {boundingElement: n, offset: i=!1, disableWhenStacked: a=!1, stickyManager: r} = this.props;
        !this.stickyNode || !this.placeHolderNode || r.registerStickyItem({
            stickyNode: this.stickyNode,
            placeHolderNode: this.placeHolderNode,
            handlePositioning: this.handlePositioning,
            offset: i,
            boundingElement: n,
            disableWhenStacked: a
        })
    }
    componentDidUpdate() {
        const {boundingElement: n, offset: i=!1, disableWhenStacked: a=!1, stickyManager: r} = this.props;
        if (!this.stickyNode || !this.placeHolderNode)
            return;
        const s = r.getStickyItem(this.stickyNode);
        (!s || n !== s.boundingElement || i !== s.offset || a !== s.disableWhenStacked) && (r.unregisterStickyItem(this.stickyNode),
        r.registerStickyItem({
            stickyNode: this.stickyNode,
            placeHolderNode: this.placeHolderNode,
            handlePositioning: this.handlePositioning,
            offset: i,
            boundingElement: n,
            disableWhenStacked: a
        }))
    }
    componentWillUnmount() {
        const {stickyManager: n} = this.props;
        this.stickyNode && n.unregisterStickyItem(this.stickyNode)
    }
    render() {
        const {style: n, isSticky: i, stickyNodeHeight: a} = this.state
          , {children: r} = this.props
          , s = one(r) ? r(i) : r;
        return React.createElement("div", {
            children: [React.createElement("div", {
                ref: this.setPlaceHolderNode,
                style: a ? {
                    paddingBottom: a
                } : void 0
            }), React.createElement("div", {
                ref: this.setStickyNode,
                style: n,
                children: s
            })]
        })
    }
}
function one(e) {
    return typeof e == "function"
}
function pb(e) {
    const t = ane();
    return React.createElement(rne, {
        ...e,
        stickyManager: t
    })
}
var sne = {
    TableHead: "Polaris-AlphaTable-TableHead"
}
  , rL = {
    TableHeadingRow: "Polaris-AlphaTable-TableHeadingRow",
    TableHeadingRowInSelectionState: "Polaris-AlphaTable-TableHeadingRow__TableHeadingRowInSelectionState"
};
function lne({children: e}) {
    const {selectedState: t} = eo();
    return React.createElement("div", {
        role: "row",
        className: G(rL.TableHeadingRow, t !== "none" && rL.TableHeadingRowInSelectionState),
        children: e
    })
}
var Cs = {
    TableHeadingCell: "Polaris-AlphaTable-TableHeadingCell",
    "sticky-inline-start": "Polaris-AlphaTable-TableHeadingCell--stickyInlineStart",
    "sticky-inline-end": "Polaris-AlphaTable-TableHeadingCell--stickyInlineEnd",
    formattingNumeric: "Polaris-AlphaTable-TableHeadingCell--formattingNumeric",
    alignEnd: "Polaris-AlphaTable-TableHeadingCell--alignEnd",
    SortableHeadingCell: "Polaris-AlphaTable-TableHeadingCell__SortableHeadingCell",
    activatorOffset: "Polaris-AlphaTable-TableHeadingCell--activatorOffset",
    SortIcon: "Polaris-AlphaTable-TableHeadingCell__SortIcon",
    SortIconVisible: "Polaris-AlphaTable-TableHeadingCell__SortIconVisible",
    SortableHeadingButton: "Polaris-AlphaTable-TableHeadingCell__SortableHeadingButton"
};
function cne({children: e, width: t, sticky: n, hideLabel: i, id: a, sortable: r, onSort: s, currentSortDirection: l, formatting: c="text", alignment: d="start", activatorOffset: p, stickyOffset: f, accessibilityLabel: v}) {
    const g = at();
    function y() {
        !a || !s || s(a, l === "asc" ? "desc" : "asc")
    }
    let b = i ? React.createElement(ee, {
        as: "span",
        visuallyHidden: !0,
        children: e
    }) : e;
    const k = React.useMemo( () => r ? l === "desc" ? React.createElement(Fe, {
        type: "arrow-down",
        size: "small"
    }) : React.createElement(Fe, {
        type: "arrow-up",
        size: "small"
    }) : null, [l, r]);
    if (r && a) {
        const x = l === "asc" ? g.translate("Polaris.AlphaTable.Sorting.sortDescending", {
            heading: a
        }) : g.translate("Polaris.AlphaTable.Sorting.sortAscending", {
            heading: a
        });
        b = React.createElement(Pi, {
            className: Cs.SortableHeadingButton,
            onClick: y,
            accessibilityLabel: x,
            children: [b, React.createElement("div", {
                className: G(Cs.SortIcon, l && Cs.SortIconVisible),
                "aria-hidden": "true",
                children: k
            })]
        })
    }
    const C = React.useMemo( () => ({
        width: t,
        "--pc-table-cell-sticky-offset": n ? `${f}px` : void 0
    }), [t, n, f]);
    return React.createElement("div", {
        role: "columnheader",
        "aria-label": v,
        className: G(Cs.TableHeadingCell, c === "numeric" && Cs.formattingNumeric, d === "end" && Cs.alignEnd, r && Cs.SortableHeadingCell, n && Ia.SharedStickyCell, n && Cs[`sticky-${n}`], n === "inline-start" && Ia.SharedStickyInlineStartCell, p && Cs.activatorOffset),
        style: C,
        children: b
    })
}
const une = ({cellIndex: e, alignment: t, sticky: n}) => {
    const {columnsWithActivator: i} = R2()
      , r = i && e != null && i.has(e) && t === "end"
      , s = AO({
        sticky: n,
        cellIndex: e
    });
    return React.useMemo( () => ({
        activatorOffset: r,
        stickyOffset: s
    }), [r, s])
}
  , dne = yu(cne, une);
var Xu = {
    TableStickyIndicator: "Polaris-AlphaTable-TableStickyIndicators__TableStickyIndicator",
    TableStickyIndicatorVisible: "Polaris-AlphaTable-TableStickyIndicators__TableStickyIndicatorVisible",
    TableStickyIndicatorStart: "Polaris-AlphaTable-TableStickyIndicators__TableStickyIndicatorStart",
    TableStickyIndicatorEnd: "Polaris-AlphaTable-TableStickyIndicators__TableStickyIndicatorEnd"
};
function LO() {
    const {inlineStartStickyOffsets: e, inlineEndStickyOffsets: t, scrollableAreaRef: n} = cc()
      , {renderedVariant: i} = zi()
      , [a,r] = React.useState(0)
      , [s,l] = React.useState(0)
      , c = z2()
      , d = V2()
      , {setIsRowActionsStuck: p} = O2()
      , f = React.useMemo( () => [...e].reverse(), [e]);
    return React.useEffect( () => {
        const v = n.current;
        if (!v)
            return;
        const g = () => {
            if (!v)
                return;
            const b = v.scrollLeft
              , k = Math.floor(v.scrollWidth - b - v.clientWidth)
              , C = f.find(T => b > T.columnBecomesSticky)
              , x = t.find(T => k > T.columnBecomesSticky)
              , A = (C == null ? void 0 : C.borderXPosition) || 0
              , _ = (x == null ? void 0 : x.borderXPosition) || 0
              , w = A >= v.clientWidth - _;
            !A || w && !c ? r(0) : A !== a && r(A),
            !_ || w && c ? l(0) : _ !== s && l(_)
        }
          , y = new ResizeObserver( () => {
            g()
        }
        );
        return v && y.observe(v),
        v.addEventListener("scroll", g),
        () => {
            v && (y.unobserve(v),
            y.disconnect()),
            v.removeEventListener("scroll", g)
        }
    }
    , [n, f, t, a, s, c]),
    React.useEffect( () => {
        s > 0 ? p(!0) : p(!1)
    }
    , [s, p]),
    i === "list" || d ? null : React.createElement(React.Fragment, {
        children: [React.createElement("div", {
            "aria-hidden": "true",
            className: G(Xu.TableStickyIndicator, Xu.TableStickyIndicatorStart, Ia.SharedStickyIndicatorStart, a > 0 && Xu.TableStickyIndicatorVisible),
            style: {
                transform: `translateX(${a}px)`
            }
        }), React.createElement("div", {
            "aria-hidden": "true",
            className: G(Xu.TableStickyIndicator, Xu.TableStickyIndicatorEnd, Ia.SharedStickyIndicatorEnd, s > 0 && Xu.TableStickyIndicatorVisible),
            style: {
                transform: `translateX(${s * -1}px)`
            }
        })]
    })
}
function FO({headings: e}) {
    const {renderedVariant: t} = zi();
    return t === "list" ? null : React.createElement("div", {
        className: sne.TableHead,
        role: "rowgroup",
        children: [React.createElement(lne, {
            children: e.map( ({width: n, ...i}, a) => React.createElement(dne, {
                ...i,
                cellIndex: a,
                accessibilityLabel: i.content ? i.title : void 0,
                children: i.content ?? i.title
            }, `table-heading-cell-${a}`))
        }), React.createElement(LO, {})]
    })
}
const mne = React.forwardRef(function({headings: t, boundingElement: n, actions: i}, a) {
    const {renderedVariant: r} = zi()
      , {selectedState: s} = eo()
      , {columnWidths: l, scrollableAreaRef: c, inlineStartStickyOffsets: d, inlineEndStickyOffsets: p} = cc()
      , [f,v] = React.useState(0)
      , g = React.useRef(null)
      , y = React.useMemo( () => l.reduce( (C, x) => C + x, 0), [l]);
    React.useEffect( () => {
        const C = c.current;
        if (!C)
            return;
        const x = new ResizeObserver( ([A]) => {
            v(A.target.clientWidth ?? 0)
        }
        );
        return x.observe(C),
        () => {
            x.disconnect()
        }
    }
    , [d, p, c]);
    const b = React.useMemo( () => ({
        width: y,
        "--pc-table-column-sizes": l.map(C => `${C.toString()}px`).join(" ")
    }), [l, y])
      , k = React.useMemo( () => ({
        width: f
    }), [f]);
    return r === "list" ? null : React.createElement("div", {
        className: Fr.StickyWrapper,
        children: React.createElement(pb, {
            boundingElement: n,
            children: C => React.createElement("div", {
                className: G(Fr.TableStickyAreaWrapper, C && Fr.IsSticky),
                style: k,
                ref: a,
                children: [React.createElement("div", {
                    role: "table",
                    className: Fr.TableStickyArea,
                    "aria-hidden": !0,
                    style: b,
                    children: React.createElement(FO, {
                        headings: t
                    })
                }), i && React.createElement(Cr, {
                    in: s !== "none",
                    timeout: 150,
                    mountOnEnter: !0,
                    unmountOnExit: !0,
                    nodeRef: g,
                    appear: !0,
                    classNames: {
                        appear: Fr["StickyBulkActions-enter"],
                        appearActive: Fr["StickyBulkActions-enter-active"],
                        enter: Fr["StickyBulkActions-enter"],
                        enterActive: Fr["StickyBulkActions-enter-active"],
                        exit: Fr["StickyBulkActions-exit"],
                        exitActive: Fr["StickyBulkActions-exit-active"]
                    },
                    children: React.createElement("div", {
                        ref: g,
                        className: Fr.StickyBulkActions,
                        children: React.createElement("div", {
                            className: Fr.StickyBulkActionsInner,
                            children: i
                        })
                    })
                })]
            })
        })
    })
})
  , oL = "__polaris_table_"
  , sL = () => React.createElement(Yd);
function pne(e, t, n) {
    return e.map(i => {
        const a = t.get(i);
        if (!a) {
            const s = [];
            return n.forEach(l => {
                var d;
                ((d = l.id) == null ? void 0 : d.startsWith(oL)) || s.push(sL())
            }
            ),
            {
                id: i,
                cells: s
            }
        }
        const r = [];
        return n.forEach(s => {
            var p;
            if ((p = s.id) == null ? void 0 : p.startsWith(oL))
                return;
            const c = s.title
              , d = a.columnCells.get(c);
            r.push(d || sL())
        }
        ),
        {
            id: i,
            cells: r
        }
    }
    )
}
function fne({children: e, selectedValues: t, isFilteringToSelectedOnly: n, showSelectedPageIndex: i, showSelectedPageSize: a}) {
    const {getStoredRowData: r} = vu()
      , {setShowSelectedPageIndex: s} = eo()
      , {headings: l} = gu()
      , c = React.useMemo( () => React.Children.toArray(e), [e])
      , d = n && t.size > 0
      , p = React.useMemo( () => {
        const v = new Map;
        return c.forEach(g => {
            var y;
            if (g && typeof g == "object" && "props"in g) {
                const b = (y = g.props) == null ? void 0 : y.value;
                b && v.set(b, g)
            }
        }
        ),
        v
    }
    , [c])
      , f = React.useMemo( () => {
        if (!d)
            return c;
        const v = r()
          , g = Array.from(t)
          , y = pne(g, v, l)
          , b = new Map;
        y.forEach( ({id: A, cells: _}) => {
            b.set(A, _)
        }
        );
        const k = [];
        for (const A of t) {
            const _ = p.get(A)
              , w = v.get(A)
              , T = w == null ? void 0 : w.props
              , P = b.get(A);
            _ ? P ? k.push(React.createElement(_.type, {
                ..._.props,
                key: _.key || A
            }, P)) : k.push(_) : T && k.push(React.createElement(cb, {
                ...T,
                key: A
            }, P || T.children))
        }
        const C = i * a
          , x = C + a;
        return k.slice(C, x)
    }
    , [d, p, t, i, a, r, c, l]);
    return React.useEffect( () => {
        if (d && i > 0 && f.length === 0 && t.size > 0) {
            const v = Math.ceil(t.size / a)
              , g = Math.max(0, v - 1);
            s(g)
        }
    }
    , [d, i, f.length, t.size, a, s]),
    {
        filteredChildren: f,
        isActive: d
    }
}
var lC = {
    TableBody: "Polaris-AlphaTable-TableBody",
    Loading: "Polaris-AlphaTable-TableBody__Loading",
    List: "Polaris-AlphaTable-TableBody__List"
};
function hne({children: e}) {
    const {renderedVariant: t} = zi()
      , {showLoadingState: n} = bm()
      , {selectedValues: i} = lc()
      , {isFilteringToSelectedOnly: a, showSelectedPageIndex: r, showSelectedPageSize: s, setShowOnlySelected: l} = eo()
      , c = t === "list" ? "ol" : "div"
      , d = t === "table" ? "rowgroup" : void 0
      , p = React.useMemo( () => {
        const b = new Set
          , k = []
          , C = x => {
            if (React.isValidElement(x) && x.key != null) {
                const A = String(x.key);
                b.add(A),
                k.push(A)
            }
        }
        ;
        return React.Children.forEach(e, C),
        {
            keys: b,
            keyOrder: k
        }
    }
    , [e])
      , f = React.useRef(p)
      , v = React.useRef(i);
    React.useEffect( () => {
        const b = f.current
          , k = v.current
          , C = b.keys.size !== p.keys.size || ![...b.keys].every(_ => p.keys.has(_))
          , x = !C && b.keyOrder.length === p.keyOrder.length && !b.keyOrder.every( (_, w) => p.keyOrder[w] === _);
        a && (C || x) && k.size === i.size && l(!1),
        f.current = p,
        v.current = i
    }
    , [p, i, a, l]);
    const {filteredChildren: g} = fne({
        children: e,
        selectedValues: i,
        isFilteringToSelectedOnly: a,
        showSelectedPageIndex: r,
        showSelectedPageSize: s
    })
      , y = React.useMemo( () => g.map( (k, C) => React.cloneElement(k, {
        key: `${C}-${k.key}`
    })), [g]);
    return React.createElement(c, {
        role: d,
        className: G(t === "table" && lC.TableBody, t === "list" && lC.List, n && lC.Loading),
        children: y
    })
}
var cC = {
    TableScrollBarContainer: "Polaris-AlphaTable-TableScrollBar__TableScrollBarContainer",
    TableScrollBar: "Polaris-AlphaTable-TableScrollBar",
    TableScrollBarInner: "Polaris-AlphaTable-TableScrollBar__TableScrollBarInner"
};
function gne({scrollableAreaRef: e}) {
    var v, g;
    const {renderedVariant: t} = zi()
      , n = React.useRef(null)
      , i = React.useRef(!1)
      , a = React.useRef(!1)
      , {rowSelectionEnabled: r} = eo()
      , s = df(r);
    React.useEffect( () => {
        const y = e.current;
        !y || s == null || s === r || y.scrollTo({
            left: 0
        })
    }
    , [r, e, s]);
    const l = ((v = e.current) == null ? void 0 : v.scrollWidth) ?? 0
      , c = ((g = e.current) == null ? void 0 : g.clientWidth) ?? 0
      , d = l - 8
      , p = l > c;
    function f(y) {
        e.current && !a.current && (i.current = !0,
        e.current.scrollLeft = y.currentTarget.scrollLeft),
        a.current = !1
    }
    return React.useEffect( () => {
        const y = e.current;
        function b() {
            n.current && !i.current && (a.current = !0,
            n.current.scrollLeft = (y == null ? void 0 : y.scrollLeft) ?? 0),
            i.current = !1
        }
        return y == null || y.addEventListener("scroll", b),
        () => {
            y == null || y.removeEventListener("scroll", b)
        }
    }
    , [e]),
    !p || t === "list" ? null : React.createElement("div", {
        className: cC.TableScrollBarContainer,
        children: React.createElement("div", {
            className: cC.TableScrollBar,
            ref: n,
            onScroll: f,
            children: React.createElement("div", {
                className: cC.TableScrollBarInner,
                style: {
                    width: `${d}px`
                }
            })
        })
    })
}
const vne = ({children: e, emptyState: t, footer: n, actions: i}) => {
    const {headings: a} = gu()
      , {renderedVariant: r} = zi()
      , {scrollableAreaRef: s} = cc()
      , l = React.useRef(null)
      , c = React.useRef(null)
      , {loading: d} = bm()
      , {isFilteringToSelectedOnly: p} = eo()
      , {selectedValues: f} = lc();
    FX(c);
    const v = z2()
      , g = V2()
      , {handleTableScroll: y, stickyScrollableAreaRef: b} = LX();
    function k() {
        y()
    }
    const C = r === "table" ? "table" : void 0
      , x = !!e && (!Array.isArray(e) || e.length > 0)
      , A = React.useMemo( () => ({
        "--pc-table-column-sizes": a.map(I => I.width ?? "auto").join(" ")
    }), [a])
      , _ = p && f.size > 0
      , w = t && !x && !_
      , T = a.every(I => I.sticky !== "inline-start")
      , P = a.every(I => I.sticky !== "inline-end");
    return React.createElement("div", {
        className: G(bd.TableWrapper, r === "list" && bd.ListVariant, Ia.SharedTableWrapper, v && Ia.SharedReverseZIndex, g && Ia.SharedDisableStickyColumns, T && Ia.SharedNoStickyInlineStart, P && Ia.SharedNoStickyInlineEnd),
        ref: l,
        inert: d ? "" : void 0,
        children: [r === "table" ? React.createElement(mne, {
            headings: a,
            boundingElement: c.current,
            ref: b,
            actions: i
        }) : null, React.createElement("div", {
            className: bd.TableScrollable,
            onScroll: k,
            ref: s,
            children: [React.createElement("div", {
                role: C,
                className: G(r === "table" && bd.Table),
                ref: c,
                style: A,
                "aria-colcount": r === "table" ? a.length : void 0,
                children: [w ? null : React.createElement(FO, {
                    headings: a
                }), React.createElement(hne, {
                    children: e
                }), React.createElement(LO, {})]
            }), w ? t : null]
        }), React.createElement("div", {
            className: bd.TableStickyFooter,
            children: [React.createElement(gne, {
                scrollableAreaRef: s
            }), r === "list" ? i : null, n]
        })]
    })
}
  , yne = React.forwardRef(function({variant: t, headings: n, children: i, loading: a, emptyState: r, maxSelectable: s=-1, onSelectionChange: l, rowSelectionEnabled: c, stickyRowActions: d=!1, footer: p, actions: f, showSelectedPageSize: v=50}, g) {
    const [y,b] = React.useState(!1)
      , k = at()
      , C = React.useMemo( () => ({
        containsRowActions: y,
        setContainsRowActions: b
    }), [y, b])
      , x = React.useMemo( () => {
        if (!c || n.length === 0)
            return n;
        const [T,...P] = n;
        return [{
            title: k.translate("Polaris.AlphaTable.Selection.selectionHeader"),
            id: `${sy}checkbox_column`,
            content: React.createElement(hO, {}),
            sticky: "inline-start",
            hideLabel: s !== -1,
            width: "max-content"
        }, {
            ...T,
            sticky: "inline-start"
        }, ...P]
    }
    , [n, c, s, k])
      , A = React.useMemo( () => f || (c ? React.createElement(gO, {}) : null), [f, c])
      , _ = pX(a ?? !1)
      , w = React.useMemo( () => ({
        loading: a ?? !1,
        showLoadingState: _
    }), [a, _]);
    return React.createElement(T2.Provider, {
        value: C,
        children: React.createElement(TX, {
            children: React.createElement(NX, {
                children: React.createElement(PX, {
                    headings: x,
                    stickyRowActions: d,
                    children: React.createElement(xX, {
                        variant: t,
                        children: React.createElement(AX, {
                            children: React.createElement(wX, {
                                ref: g,
                                maxSelectable: s,
                                onSelectionChange: l,
                                rowSelectionEnabled: c,
                                showSelectedPageSize: v,
                                children: React.createElement(E2.Provider, {
                                    value: w,
                                    children: React.createElement(_X, {
                                        children: React.createElement(vne, {
                                            emptyState: r,
                                            footer: p,
                                            actions: A,
                                            children: i
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})
  , BGe = Object.assign(yne, {
    Row: cb,
    Cell: Yd,
    RowGroup: ub,
    EmptyState: bte,
    Footer: yte,
    Thumbnail: pte,
    BulkActions: dte,
    Icon: ate,
    Actions: gO
});
function S0(e) {
    return typeof e[0] == "object" && Object.prototype.hasOwnProperty.call(e[0], "options")
}
var bne = {
    SectionWrapper: "Polaris-Autocomplete__SectionWrapper"
}
  , Lg = {
    Content: "Polaris-Autocomplete-MappedOption__Content",
    Media: "Polaris-Autocomplete-MappedOption__Media",
    singleSelectionMedia: "Polaris-Autocomplete-MappedOption--singleSelectionMedia",
    disabledMedia: "Polaris-Autocomplete-MappedOption--disabledMedia"
}
  , kne = {
    Listbox: "Polaris-Listbox"
};
const EO = React.createContext(void 0)
  , MO = React.createContext({})
  , RO = React.createContext({});
function Sne() {
    const e = React.useContext(EO);
    if (!e)
        throw new Error("No Combobox was provided. Your component must be wrapped in a <Combobox> component.");
    return e
}
function Cne() {
    return React.useContext(MO)
}
function Ane(e, t) {
    const n = t.scrollTop
      , i = n + t.clientHeight
      , {offsetHeight: a} = e
      , {offsetTop: r} = e
      , s = r + a;
    if (!(r > n && s < i)) {
        let c = 0;
        s > i ? c = s + a * .85 - i : r < n && (c = r - a * .15 - n),
        requestAnimationFrame( () => {
            t.scrollBy({
                top: c,
                behavior: "auto"
            })
        }
        )
    }
}
var Ic = {
    TextOption: "Polaris-Listbox-TextOption",
    allowMultiple: "Polaris-Listbox-TextOption--allowMultiple",
    isAction: "Polaris-Listbox-TextOption--isAction",
    disabled: "Polaris-Listbox-TextOption--disabled",
    selected: "Polaris-Listbox-TextOption--selected",
    Content: "Polaris-Listbox-TextOption__Content",
    Checkbox: "Polaris-Listbox-TextOption__Checkbox"
};
const E_ = React.memo(function({children: t, selected: n, disabled: i}) {
    const {allowMultiple: a} = React.useContext(RO)
      , r = React.useContext(k_)
      , s = G(Ic.TextOption, n && !a && Ic.selected, i && Ic.disabled, a && Ic.allowMultiple, r && Ic.isAction)
      , l = n ? React.createElement(he, {
        width: "100%",
        children: React.createElement(Te, {
            wrap: !1,
            align: "space-between",
            gap: "200",
            children: [t, React.createElement(Te, {
                align: "end",
                children: React.createElement(Fe, {
                    type: "check",
                    tone: "legacy-inherit"
                })
            })]
        })
    }) : React.createElement(React.Fragment, {
        children: t
    });
    return React.createElement("div", {
        className: s,
        children: React.createElement("div", {
            className: Ic.Content,
            children: a && !r ? React.createElement("div", {
                className: Ic.Checkbox,
                children: React.createElement(ss, {
                    disabled: i,
                    checked: n,
                    label: t
                })
            }) : l
        })
    })
});
var lL = {
    ListItem: "Polaris-Listbox-Loading__ListItem",
    Loading: "Polaris-Listbox-Loading"
};
function jO() {
    const e = React.useContext(b2);
    if (!e)
        throw new Error("No Listbox was provided. Listbox components must be wrapped in a Listbox");
    return e
}
const xne = React.memo(function({children: t, accessibilityLabel: n}) {
    const {setLoading: i} = jO();
    return React.useEffect( () => (i(n),
    () => {
        i(void 0)
    }
    ), [n, i]),
    React.createElement("li", {
        className: lL.ListItem,
        role: "presentation",
        children: t || React.createElement("div", {
            className: lL.Loading,
            children: React.createElement(er, {
                size: "small",
                accessibilityLabel: n
            })
        })
    })
})
  , _ne = {
    props: {
        "data-polaris-listbox-section-item": !0
    }
}
  , wne = {
    attribute: "data-polaris-listbox-within-section-item"
}
  , DO = React.createContext(null);
var cL = {
    SectionGroup: "Polaris-Listbox-Section__SectionGroup",
    noDivider: "Polaris-Listbox-Section--noDivider"
};
function Nne({children: e, divider: t=!0, title: n}) {
    const i = React.useId();
    return React.createElement(DO.Provider, {
        value: i,
        children: React.createElement("li", {
            role: "presentation",
            ..._ne.props,
            children: [n, React.createElement("ul", {
                role: "group",
                "aria-labelledby": i,
                className: G(cL.SectionGroup, !t && cL.noDivider),
                children: e
            })]
        })
    })
}
function OO() {
    return React.useContext(DO)
}
function Tne({children: e}) {
    const t = OO() || ""
      , n = typeof e == "string" ? React.createElement(he, {
        paddingBlockStart: "200",
        paddingInlineStart: "400",
        paddingBlockEnd: "200",
        paddingInlineEnd: "400",
        children: React.createElement(ee, {
            as: "span",
            variant: "headingSm",
            tone: "subdued",
            children: e
        })
    }) : e;
    return React.createElement("div", {
        "aria-hidden": !0,
        id: t,
        children: n
    })
}
var uC = {
    Action: "Polaris-Listbox-Action",
    ActionDivider: "Polaris-Listbox-Action__ActionDivider",
    Icon: "Polaris-Listbox-Action__Icon"
}
  , uL = {
    Option: "Polaris-Listbox-Option",
    divider: "Polaris-Listbox-Option--divider"
};
const BO = React.createContext({})
  , zO = React.memo(function({value: t, children: n, selected: i, disabled: a=!1, accessibilityLabel: r, divider: s}) {
    const {onOptionSelect: l} = jO()
      , c = React.useContext(k_)
      , {role: d, url: p, external: f, onAction: v, destructive: g} = React.useContext(BO)
      , y = React.useRef(null)
      , b = React.useId()
      , C = !!OO()
      , x = React.useCallback(I => {
        I.preventDefault(),
        I.stopPropagation(),
        v && v(),
        y.current && !v && l({
            domId: b,
            value: t,
            element: y.current,
            disabled: a
        })
    }
    , [b, l, t, a, v])
      , A = I => {
        I.preventDefault()
    }
      , _ = typeof n == "string" ? React.createElement(E_, {
        selected: i,
        disabled: a,
        children: n
    }) : n
      , w = {
        [wne.attribute]: C
    }
      , T = d || "option"
      , P = p ? React.createElement(Bi, {
        url: p,
        external: f,
        children: _
    }) : _;
    return React.createElement("li", {
        ...w,
        "data-listbox-option": !0,
        "data-listbox-option-action": c,
        "data-listbox-option-value": t,
        "data-listbox-option-destructive": g,
        "data-within-section": C,
        className: G(uL.Option, s && uL.divider),
        id: b,
        ref: y,
        tabIndex: -1,
        role: T,
        "aria-label": r,
        "aria-selected": i,
        "aria-disabled": a,
        onClick: a ? void 0 : x,
        onKeyDown: a ? void 0 : x,
        onMouseDown: A,
        children: P
    })
});
function Pne(e) {
    const {selected: t, disabled: n, children: i, icon: a, divider: r} = e
      , s = a && React.createElement("div", {
        className: uC.Icon,
        children: React.createElement(Fe, {
            tone: "neutral",
            color: "subdued",
            type: a
        })
    })
      , l = G(uC.Action, r && uC.ActionDivider);
    return React.createElement(k_.Provider, {
        value: !0,
        children: React.createElement(zO, {
            ...e,
            children: React.createElement("div", {
                className: l,
                children: React.createElement(E_, {
                    selected: t,
                    disabled: n,
                    children: [s, i]
                })
            })
        })
    })
}
let Zc = function(e) {
    return e.FirstSelected = "FIRST_SELECTED",
    e.First = "FIRST",
    e.None = "NONE",
    e
}({});
const Ine = "[data-listbox-option]"
  , dC = "data-listbox-option-value"
  , Lne = "data-listbox-option-action"
  , dL = "data-focused";
function Yt({children: e, autoSelection: t=Zc.FirstSelected, enableKeyboardControl: n, accessibilityLabel: i, customListId: a, onSelect: r, onActiveOptionChange: s}) {
    const [l,c] = React.useState()
      , [d,p] = React.useState()
      , [f,v] = React.useState(!1)
      , [g,y] = React.useState([])
      , {value: b, setTrue: k, setFalse: C} = Di(!!n)
      , x = React.useId()
      , A = a || x
      , _ = React.useRef(null)
      , w = React.useRef(null)
      , {listboxId: T, textFieldLabelId: P, textFieldFocused: I, willLoadMoreOptions: L, setActiveOptionId: R, setListboxId: D, onOptionSelected: M, onKeyToBottom: O} = Cne()
      , z = !!R;
    React.useEffect( () => {
        D && !T && D(A)
    }
    , [D, T, A]);
    const B = React.useCallback( () => w.current ? [...new Set(w.current.querySelectorAll(Ine))] : [], [])
      , H = React.useCallback(re => {
        const le = re.some(Qe => Qe.getAttribute("aria-selected") === "true");
        let ye = 0;
        const Ee = re.find( (Qe, De) => {
            const Ue = Qe.getAttribute("aria-disabled") !== "true";
            let Ye;
            return le && t === Zc.FirstSelected ? Ye = Qe.getAttribute("aria-selected") === "true" && Ue : Ye = Ue,
            Ye && (ye = De),
            Ye
        }
        );
        if (Ee)
            return {
                element: Ee,
                index: ye
            }
    }
    , [t])
      , q = React.useCallback(re => {
        const {current: le} = _;
        le && Ane(re.element, le)
    }
    , [])
      , W = ji(q, 50)
      , V = React.useCallback( () => {
        if (O)
            return v(!0),
            Promise.resolve(O())
    }
    , [O])
      , $ = React.useCallback(re => {
        if (!re)
            return p(void 0);
        d == null || d.element.removeAttribute(dL),
        re.element.setAttribute(dL, "true"),
        W(re),
        p(re),
        R == null || R(re.domId),
        s == null || s(re.value, re.domId)
    }
    , [d, R, s, W])
      , Q = React.useCallback( (re, le) => ({
        element: re,
        index: le,
        domId: re.id,
        value: re.getAttribute(dC) || "",
        disabled: re.getAttribute("aria-disabled") === "true",
        isAction: re.getAttribute(Lne) === "true"
    }), [])
      , K = React.useCallback( () => {
        let re;
        const le = B()
          , ye = H(le);
        if (le.length === 0 && g.length > 0) {
            y(le),
            $();
            return
        }
        if (ye) {
            const {element: Xe, index: it} = ye;
            re = Q(Xe, it)
        }
        const Ee = d !== void 0 && (re == null ? void 0 : re.domId) === (d == null ? void 0 : d.domId)
          , Qe = (d == null ? void 0 : d.isAction) && (re == null ? void 0 : re.isAction) && (re == null ? void 0 : re.value) !== (d == null ? void 0 : d.value)
          , De = g.map(Xe => Xe.getAttribute(dC))
          , Ue = le.map(Xe => Xe.getAttribute(dC))
          , Ye = Ue.length === De.length && Ue.every( (Xe, it) => De[it] === Xe)
          , Mt = De.length !== 0 && Ue.length > De.length && De.every( (Xe, it) => Ue[it] === Xe);
        if (Ye) {
            Ee && Qe && (y(le),
            $(re));
            return
        }
        if (Mt) {
            y(le);
            return
        }
        if (y(le),
        f) {
            v(!1);
            return
        }
        $(re)
    }
    , [f, g, d, H, B, Q, $]);
    React.useEffect( () => {
        t !== Zc.None && !l && e && React.Children.count(e) > 0 && K()
    }
    , [e, t, d, l, K]),
    React.useEffect( () => {
        w.current && (_.current = w.current.closest(Ky.selector))
    }
    , []);
    const J = df(n);
    React.useEffect( () => {
        n && !b && k(),
        J && !n && b && C()
    }
    , [n, b, J, k, C]);
    const X = React.useCallback(re => {
        $(re),
        M && M(),
        r && r(re.value)
    }
    , [$, r, M])
      , se = React.useCallback( (re, le, ye) => {
        let Ee;
        return ye === "down" ? re === le ? Ee = L ? re + 1 : 0 : Ee = re + 1 : Ee = re === 0 ? le : re - 1,
        Ee
    }
    , [L])
      , ne = React.useCallback(async re => {
        const le = g.length - 1;
        let ye = (d == null ? void 0 : d.index) || 0
          , Ee = 0
          , Qe = d == null ? void 0 : d.element
          , De = -1;
        if (!d && t === Zc.None) {
            const Ue = B()
              , Ye = H(Ue);
            return y(Ue),
            {
                element: Ye == null ? void 0 : Ye.element,
                nextIndex: (Ye == null ? void 0 : Ye.index) || 0
            }
        }
        for (; De++ < le; ) {
            Ee = se(ye, le, re),
            Qe = g[Ee];
            const Ue = Ee >= le
              , Ye = (Qe == null ? void 0 : Qe.getAttribute("aria-disabled")) === "true";
            if (Ue && L && await V(),
            Ye) {
                ye = Ee,
                Qe = void 0;
                continue
            }
            break
        }
        return {
            element: Qe,
            nextIndex: Ee
        }
    }
    , [t, g, d, L, se, V, H, B])
      , Y = React.useCallback(async (re, le) => {
        le.preventDefault();
        const {element: ye, nextIndex: Ee} = await ne(re);
        if (!ye)
            return;
        const Qe = Q(ye, Ee);
        $(Qe)
    }
    , [Q, ne, $])
      , ue = React.useCallback(re => {
        Y("down", re)
    }
    , [Y])
      , ge = React.useCallback(re => {
        Y("up", re)
    }
    , [Y])
      , de = React.useCallback(re => {
        re.preventDefault(),
        re.stopPropagation(),
        d && X(d)
    }
    , [d, X])
      , ve = React.useCallback( () => {
        n || k()
    }
    , [n, k])
      , Le = React.useCallback(re => {
        if (re.stopPropagation(),
        b) {
            const le = H(g);
            if (le) {
                const {element: ye, index: Ee} = le
                  , Qe = Q(ye, Ee);
                $(Qe)
            }
        }
        n || C()
    }
    , [n, g, b, C, H, Q, $])
      , Ce = b || I ? React.createElement(React.Fragment, {
        children: [React.createElement(Ci, {
            keyEvent: "keydown",
            keyCode: tn.DownArrow,
            handler: ue
        }), React.createElement(Ci, {
            keyEvent: "keydown",
            keyCode: tn.UpArrow,
            handler: ge
        }), React.createElement(Ci, {
            keyEvent: "keydown",
            keyCode: tn.Enter,
            handler: de
        })]
    }) : null
      , Ae = React.useMemo( () => ({
        onOptionSelect: X,
        setLoading: c
    }), [X]);
    return React.createElement(React.Fragment, {
        children: [Ce, React.createElement(ee, {
            as: "span",
            visuallyHidden: !0,
            children: React.createElement("div", {
                "aria-live": "polite",
                children: l || null
            })
        }), React.createElement(b2.Provider, {
            value: Ae,
            children: React.createElement(k2.Provider, {
                value: !0,
                children: e ? React.createElement("ul", {
                    tabIndex: 0,
                    role: "listbox",
                    className: kne.Listbox,
                    "aria-label": z ? void 0 : i,
                    "aria-labelledby": P,
                    "aria-busy": !!l,
                    "aria-activedescendant": d && d.domId,
                    id: A,
                    onFocus: z ? void 0 : ve,
                    onBlur: z ? void 0 : Le,
                    ref: w,
                    children: e
                }) : null
            })
        })]
    })
}
Yt.Option = zO;
Yt.TextOption = E_;
Yt.Loading = xne;
Yt.Section = Nne;
Yt.Header = Tne;
Yt.Action = Pne;
const Fne = React.memo(function({label: t, value: n, disabled: i, media: a, selected: r, singleSelection: s}) {
    const l = G(Lg.Media, i && Lg.disabledMedia, s && Lg.singleSelectionMedia)
      , c = a ? React.createElement("div", {
        className: l,
        children: a
    }) : null
      , d = typeof t == "string" ? t : void 0;
    return React.createElement(Yt.Option, {
        accessibilityLabel: d,
        selected: r,
        value: n,
        disabled: i,
        children: React.createElement(Yt.TextOption, {
            selected: r,
            disabled: i,
            children: React.createElement("div", {
                className: Lg.Content,
                children: [c, t]
            })
        })
    }, n)
});
var Er = {
    ActionContainer: "Polaris-Autocomplete-MappedAction__ActionContainer",
    Action: "Polaris-Autocomplete-MappedAction__Action",
    destructive: "Polaris-Autocomplete-MappedAction--destructive",
    selected: "Polaris-Autocomplete-MappedAction--selected",
    Prefix: "Polaris-Autocomplete-MappedAction__Prefix",
    disabled: "Polaris-Autocomplete-MappedAction--disabled",
    Suffix: "Polaris-Autocomplete-MappedAction__Suffix",
    Content: "Polaris-Autocomplete-MappedAction__Content",
    Text: "Polaris-Autocomplete-MappedAction__Text"
};
function Ene({active: e, content: t, disabled: n, icon: i, image: a, prefix: r, suffix: s, ellipsis: l, role: c, url: d, external: p, onAction: f, destructive: v, badge: g, helpText: y, wrapOverflow: b=!1}) {
    const k = at();
    let C = null;
    r ? C = React.createElement("div", {
        className: Er.Prefix,
        children: r
    }) : i ? C = React.createElement("div", {
        className: Er.Prefix,
        children: React.createElement(Fe, {
            type: i,
            tone: "legacy-inherit"
        })
    }) : a && (C = React.createElement("div", {
        role: "presentation",
        className: Er.Prefix,
        style: {
            backgroundImage: `url(${a}`
        }
    }));
    const x = g && React.createElement("span", {
        className: Er.Suffix,
        children: React.createElement(rn, {
            tone: g.tone,
            children: g.content
        })
    })
      , A = s && React.createElement("span", {
        className: Er.Suffix,
        children: s
    })
      , _ = l && t ? k.translate("Polaris.Autocomplete.ellipsis", {
        content: t
    }) : t
      , w = React.createElement("div", {
        className: Er.Text,
        children: [React.createElement(ee, {
            as: "p",
            variant: "bodyMd",
            breakWord: b,
            children: _
        }), y ? React.createElement(ee, {
            as: "p",
            variant: "bodySm",
            tone: "subdued",
            children: y
        }) : null]
    })
      , T = React.useMemo( () => ({
        role: c,
        url: d,
        external: p,
        onAction: f,
        destructive: v
    }), [c, d, p, f, v])
      , P = G(Er.Action, n && Er.disabled, v && Er.destructive, e && Er.selected);
    return React.createElement(BO.Provider, {
        value: T,
        children: React.createElement("div", {
            className: Er.ActionContainer,
            children: React.createElement(Yt.Action, {
                selected: e,
                disabled: n,
                value: t || "",
                children: React.createElement("div", {
                    className: P,
                    children: React.createElement("div", {
                        className: Er.Content,
                        children: [C, w, x, A]
                    })
                })
            })
        })
    })
}
var Mne = {
    Listbox: "Polaris-Combobox__Listbox"
};
function Rne({value: e, id: t, type: n="text", ariaAutocomplete: i="list", onFocus: a, onBlur: r, onChange: s, ...l}) {
    const c = Sne()
      , {activeOptionId: d, listboxId: p, expanded: f, setTextFieldFocused: v, setTextFieldLabelId: g, onTextFieldFocus: y, onTextFieldChange: b, onTextFieldBlur: k} = c
      , C = React.useId()
      , x = React.useMemo( () => t || C, [C, t])
      , A = React.useMemo( () => uf(t || C), [C, t]);
    React.useEffect( () => {
        g && g(A)
    }
    , [A, g]);
    const _ = React.useCallback(P => {
        a && a(P),
        y && y(),
        v && v(!0)
    }
    , [a, y, v])
      , w = React.useCallback(P => {
        r && r(P),
        k && k(),
        v && v(!1)
    }
    , [r, k, v])
      , T = React.useCallback( (P, I) => {
        s && s(P, I),
        b && b(P)
    }
    , [s, b]);
    return React.createElement(To, {
        ...l,
        value: e,
        id: x,
        type: n,
        ariaAutocomplete: i,
        "aria-haspopup": "listbox",
        ariaActiveDescendant: d,
        ariaControls: p,
        role: "combobox",
        ariaExpanded: f,
        onFocus: _,
        onBlur: w,
        onChange: T
    })
}
function M_({activator: e, allowMultiple: t, children: n, preferredPosition: i="below", willLoadMoreOptions: a, height: r, maxHeight: s, minHeight: l, onScrolledToBottom: c, onClose: d}) {
    const [p,f] = React.useState(!1)
      , [v,g] = React.useState()
      , [y,b] = React.useState()
      , [k,C] = React.useState()
      , [x,A] = React.useState(!1)
      , _ = !p
      , w = p && React.Children.count(n) > 0
      , T = React.useRef(null)
      , P = React.useCallback( () => {
        f(!1),
        d == null || d(),
        g(void 0)
    }
    , [d])
      , I = React.useCallback( () => {
        f(!0),
        g(void 0)
    }
    , [])
      , L = React.useCallback( () => {
        var q;
        if (!t) {
            P(),
            g(void 0);
            return
        }
        (q = T.current) == null || q.forceUpdatePosition()
    }
    , [t, P])
      , R = React.useCallback( () => {
        _ && I()
    }
    , [_, I])
      , D = React.useCallback( () => {
        _ && I()
    }
    , [_, I])
      , M = React.useCallback( () => {
        p && P()
    }
    , [p, P])
      , O = React.useMemo( () => ({
        activeOptionId: v,
        expanded: p,
        listboxId: k,
        setTextFieldFocused: A,
        setTextFieldLabelId: b,
        onTextFieldFocus: R,
        onTextFieldChange: D,
        onTextFieldBlur: M
    }), [v, p, k, A, b, R, D, M])
      , z = React.useMemo( () => ({
        allowMultiple: t
    }), [t])
      , B = React.useMemo( () => ({
        listboxId: k,
        textFieldLabelId: y,
        textFieldFocused: x,
        willLoadMoreOptions: a,
        onOptionSelected: L,
        setActiveOptionId: g,
        setListboxId: C,
        onKeyToBottom: c
    }), [k, y, x, a, L, g, C, c])
      , {smDown: H} = Wn();
    return React.createElement(Fn, {
        ref: T,
        active: w,
        activator: React.createElement(EO.Provider, {
            value: O,
            children: e
        }),
        autofocusTarget: "none",
        preventFocusOnClose: !0,
        fullWidth: !0,
        preferInputActivator: !1,
        preferredPosition: i,
        onClose: P,
        preferVisualViewportHeight: H,
        children: React.Children.count(n) > 0 ? React.createElement(Fn.Pane, {
            onScrolledToBottom: c,
            height: r,
            maxHeight: s,
            minHeight: l,
            children: React.createElement(MO.Provider, {
                value: B,
                children: React.createElement(RO.Provider, {
                    value: z,
                    children: React.createElement("div", {
                        className: Mne.Listbox,
                        children: n
                    })
                })
            })
        }) : null
    })
}
M_.TextField = Rne;
const jne = function({options: t, selected: n, textField: i, preferredPosition: a, listTitle: r, allowMultiple: s, loading: l, actionBefore: c, willLoadMoreResults: d, emptyState: p, onSelect: f, onLoadMoreResults: v}) {
    const g = at()
      , y = React.useCallback(w => w.map(T => React.createElement(Fne, {
        ...T,
        selected: n.includes(T.value),
        singleSelection: !s
    }, T.id || T.value)), [n, s])
      , b = React.useMemo( () => {
        const w = l && !d ? [] : t;
        if (S0(w)) {
            if (w.every( ({options: L}) => L.length === 0))
                return null;
            const I = w.map( ({options: L, title: R}) => {
                if (L.length === 0)
                    return null;
                const D = y(L);
                return React.createElement(Yt.Section, {
                    divider: !1,
                    title: React.createElement(Yt.Header, {
                        children: R
                    }),
                    children: D
                }, R)
            }
            );
            return React.createElement("div", {
                className: bne.SectionWrapper,
                children: I
            })
        }
        const T = w.length > 0 ? y(w) : null;
        return r ? React.createElement(Yt.Section, {
            divider: !1,
            title: React.createElement(Yt.Header, {
                children: r
            }),
            children: T
        }) : T
    }
    , [r, l, t, d, y])
      , k = l ? React.createElement(Yt.Loading, {
        accessibilityLabel: g.translate("Polaris.Autocomplete.spinnerAccessibilityLabel")
    }) : null
      , C = React.useCallback(w => {
        if (c && w === c.content) {
            c.onAction && c.onAction();
            return
        }
        s ? n.includes(w) ? f(n.filter(T => T !== w)) : f([...n, w]) : f([w])
    }
    , [s, f, n, c])
      , x = c && React.createElement(Ene, {
        ...c
    })
      , A = p && t.length < 1 && !l && React.createElement("div", {
        role: "status",
        children: p
    })
      , _ = c ? Zc.First : void 0;
    return React.createElement(M_, {
        activator: i,
        allowMultiple: s,
        onScrolledToBottom: v,
        preferredPosition: a,
        willLoadMoreOptions: d,
        children: x || b || k || A ? React.createElement(Yt, {
            autoSelection: _,
            onSelect: C,
            children: [x, b && (!l || d) ? b : null, k, A]
        }) : null
    })
};
jne.TextField = M_.TextField;
var mC = {
    Backdrop: "Polaris-Backdrop",
    transparent: "Polaris-Backdrop--transparent",
    belowNavigation: "Polaris-Backdrop--belowNavigation"
};
function Dne() {
    const e = React.useContext(e_);
    if (!e)
        throw new ib("No ScrollLockManager was provided.");
    return e
}
function Hf(e) {
    const t = Dne();
    return React.useEffect( () => (t.registerScrollLock(),
    () => {
        t.unregisterScrollLock()
    }
    ), [t]),
    null
}
function Wf(e) {
    const {onClick: t, onTouchStart: n, belowNavigation: i, transparent: a, setClosing: r} = e
      , s = G(mC.Backdrop, i && mC.belowNavigation, a && mC.transparent)
      , l = () => {
        r && r(!0)
    }
      , c = () => {
        r && r(!1),
        t && t()
    }
    ;
    return React.createElement(React.Fragment, {
        children: [React.createElement(Hf, {}), React.createElement("div", {
            className: s,
            onClick: c,
            onTouchStart: n,
            onMouseDown: l
        })]
    })
}
const VO = React.createContext(!1);
var Ur = {
    Banner: "Polaris-Banner",
    keyFocused: "Polaris-Banner--keyFocused",
    InlineIconBannerWrapper: "Polaris-Banner__InlineIconBannerWrapper",
    info: "Polaris-Banner--info",
    success: "Polaris-Banner--success",
    warning: "Polaris-Banner--warning",
    critical: "Polaris-Banner--critical",
    withinContentContainer: "Polaris-Banner--withinContentContainer",
    noTitle: "Polaris-Banner--noTitle",
    BannerIcon: "Polaris-Banner__BannerIcon",
    withinPage: "Polaris-Banner--withinPage",
    DismissIconWrapper: "Polaris-Banner__DismissIconWrapper",
    DismissIcon: "Polaris-Banner__DismissIcon",
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
const pC = {
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
function One(e) {
    const t = React.useRef(null)
      , [n,i] = React.useState(!1);
    return React.useImperativeHandle(e, () => ({
        focus: () => {
            var l;
            (l = t.current) == null || l.focus(),
            i(!0)
        }
    }), []),
    {
        wrapperRef: t,
        handleKeyUp: l => {
            l.target === t.current && i(!0)
        }
        ,
        handleBlur: () => i(!1),
        handleMouseUp: l => {
            l.currentTarget.blur(),
            i(!1)
        }
        ,
        shouldShowFocus: n
    }
}
const qf = React.forwardRef(function(t, n) {
    const {tone: i, stopAnnouncements: a} = t
      , r = React.useContext(gm)
      , {wrapperRef: s, handleKeyUp: l, handleBlur: c, handleMouseUp: d, shouldShowFocus: p} = One(n)
      , f = G(Ur.Banner, p && Ur.keyFocused, r ? Ur.withinContentContainer : Ur.withinPage, !t.title && Ur.noTitle);
    return React.createElement(VO.Provider, {
        value: !0,
        children: React.createElement("div", {
            className: f,
            tabIndex: 0,
            ref: s,
            role: i === "warning" || i === "critical" ? "alert" : "status",
            "aria-live": a ? "off" : "polite",
            onMouseUp: d,
            onKeyUp: l,
            onBlur: c,
            children: React.createElement(Bne, {
                ...t
            })
        })
    })
});
function Bne({tone: e="info", icon: t, hideIcon: n, onDismiss: i, action: a, secondaryAction: r, title: s, children: l}) {
    const c = at()
      , {smUp: d, mdUp: p} = Wn()
      , f = React.useContext(gm)
      , v = !s && !f
      , g = Object.keys(pC).includes(e) ? e : "info"
      , y = pC[g][f ? "withinContentContainer" : "withinPage"]
      , b = d && v || !d && !f ? "icon-secondary" : y.icon;
    let k;
    t ? k = React.createElement(Fe, {
        type: t,
        tone: "legacy-inherit"
    }) : k = React.createElement(Fe, {
        type: pC[g].icon,
        tone: "legacy-inherit"
    });
    const C = {
        backgroundColor: y.background,
        textColor: y.text,
        bannerTitle: s ? React.createElement(ee, {
            as: "h2",
            variant: p ? "headingSm" : "headingMd",
            breakWord: !0,
            children: s
        }) : null,
        bannerIcon: n ? null : React.createElement("span", {
            className: G(Ur.BannerIcon, Ur[y.icon]),
            children: k
        }),
        actionButtons: a || r ? React.createElement(gr, {
            fullWidth: !d,
            gap: "tight",
            children: [a && React.createElement(nt, {
                onClick: a.onAction,
                ...a,
                children: a.content
            }), r && React.createElement(nt, {
                onClick: r.onAction,
                ...r,
                children: r.content
            })]
        }) : null,
        dismissButton: i ? React.createElement(nt, {
            variant: "tertiary",
            icon: React.createElement("span", {
                className: G(Ur.DismissIcon, Ur[b]),
                children: React.createElement(Fe, {
                    type: "x",
                    tone: "legacy-inherit"
                })
            }),
            onClick: i,
            accessibilityLabel: c.translate("Polaris.Banner.dismissButton")
        }) : null
    }
      , x = l ? React.createElement(ee, {
        as: "span",
        variant: "bodyMd",
        children: l
    }) : null;
    return f ? React.createElement(Vne, {
        ...C,
        children: x
    }) : v ? React.createElement(UO, {
        ...C,
        tone: e,
        children: x
    }) : React.createElement(zne, {
        ...C,
        tone: e,
        children: x
    })
}
function zne({backgroundColor: e, textColor: t, bannerTitle: n, bannerIcon: i, actionButtons: a, dismissButton: r, children: s, tone: l}) {
    const {smUp: c} = Wn()
      , d = s || a;
    return c ? React.createElement(he, {
        width: "100%",
        children: React.createElement(ft, {
            align: "space-between",
            children: [React.createElement(he, {
                background: e,
                color: t,
                borderStartStartRadius: c ? "300" : void 0,
                borderStartEndRadius: c ? "300" : void 0,
                borderEndStartRadius: !d && c ? "300" : void 0,
                borderEndEndRadius: !d && c ? "300" : void 0,
                padding: "300",
                children: React.createElement(Te, {
                    align: "space-between",
                    blockAlign: "center",
                    gap: "200",
                    wrap: !1,
                    children: [React.createElement(Te, {
                        gap: "100",
                        wrap: !1,
                        children: [i, n]
                    }), r]
                })
            }), d && React.createElement(he, {
                padding: {
                    xs: "300",
                    md: "400"
                },
                paddingBlockStart: "300",
                children: React.createElement(ft, {
                    gap: "200",
                    children: [React.createElement("div", {
                        children: s
                    }), a]
                })
            })]
        })
    }) : React.createElement(UO, {
        backgroundColor: e,
        mobileBannerTitle: n,
        bannerIcon: i,
        actionButtons: a,
        dismissButton: r,
        tone: l,
        children: s
    })
}
function UO({backgroundColor: e, mobileBannerTitle: t, bannerIcon: n, actionButtons: i, dismissButton: a, children: r, tone: s}) {
    const [l,c] = React.useState("center")
      , d = React.useRef(null)
      , p = React.useRef(null)
      , f = React.useRef(null)
      , {smUp: v} = Wn();
    return Kr( () => {
        if (!window.ResizeObserver)
            return;
        const g = () => {
            var C, x, A;
            const b = ((C = f.current) == null ? void 0 : C.offsetHeight) ?? 0
              , k = ((x = d.current) == null ? void 0 : x.offsetHeight) || ((A = p.current) == null ? void 0 : A.offsetHeight);
            b && k && c(b > k ? "start" : "center")
        }
          , y = new ResizeObserver(g);
        return d.current && y.observe(d.current),
        p.current && y.observe(p.current),
        f.current && y.observe(f.current),
        () => y.disconnect()
    }
    , []),
    React.createElement("div", {
        className: G(Ur.InlineIconBannerWrapper, s ? Ur[s] : null),
        children: React.createElement(he, {
            width: "100%",
            padding: "300",
            borderRadius: v ? "300" : "0",
            children: React.createElement(Te, {
                align: "space-between",
                blockAlign: l,
                wrap: !1,
                children: [React.createElement(he, {
                    width: "100%",
                    children: React.createElement(Te, {
                        gap: "200",
                        wrap: !1,
                        blockAlign: l,
                        children: [n ? React.createElement("div", {
                            ref: d,
                            children: React.createElement(he, {
                                background: e,
                                borderRadius: "200",
                                padding: "100",
                                children: n
                            })
                        }) : null, React.createElement(he, {
                            ref: f,
                            width: "100%",
                            children: React.createElement(ft, {
                                gap: "200",
                                children: [t ? React.createElement(ft, {
                                    gap: "100",
                                    children: [React.createElement(he, {
                                        paddingBlockStart: {
                                            xs: "100",
                                            sm: "0"
                                        },
                                        paddingBlockEnd: r ? {
                                            xs: "0"
                                        } : {
                                            xs: "100",
                                            sm: "0"
                                        },
                                        children: t
                                    }), r]
                                }) : React.createElement("div", {
                                    children: r
                                }), i]
                            })
                        })]
                    })
                }), React.createElement("div", {
                    ref: p,
                    className: Ur.DismissIconWrapper,
                    children: a
                })]
            })
        })
    })
}
function Vne({backgroundColor: e, textColor: t, bannerTitle: n, bannerIcon: i, actionButtons: a, dismissButton: r, children: s}) {
    return React.createElement(he, {
        width: "100%",
        background: e,
        padding: "200",
        borderRadius: "200",
        color: t,
        children: React.createElement(Te, {
            align: "space-between",
            blockAlign: "start",
            wrap: !1,
            gap: "200",
            children: [React.createElement(Te, {
                gap: "150",
                wrap: !1,
                children: [i, React.createElement(he, {
                    width: "100%",
                    children: React.createElement(ft, {
                        gap: "200",
                        children: [React.createElement(ft, {
                            gap: "050",
                            children: [n, React.createElement("div", {
                                children: s
                            })]
                        }), a]
                    })
                })]
            }), r]
        })
    })
}
function R_() {
    const [e,t] = React.useState(!1)
      , n = React.useCallback( () => t(!0), []);
    return Si("touchstart", n),
    e
}
var pr = {
    BreadcrumbsStack: "Polaris-Breadcrumbs__BreadcrumbsStack",
    BreadcrumbsMobileRollup: "Polaris-Breadcrumbs__BreadcrumbsMobileRollup",
    PageTitle: "Polaris-Breadcrumbs__PageTitle",
    IconWithTitle: "Polaris-Breadcrumbs__IconWithTitle",
    BreadcrumbImageWrapper: "Polaris-Breadcrumbs__BreadcrumbImageWrapper",
    IconWrapper: "Polaris-Breadcrumbs__IconWrapper",
    IconWrapperLink: "Polaris-Breadcrumbs__IconWrapperLink",
    BreadcrumbItem: "Polaris-Breadcrumbs__BreadcrumbItem",
    BreadcrumbItemOverflow: "Polaris-Breadcrumbs__BreadcrumbItemOverflow"
};

function Une({firstBreadcrumb: e, breadcrumbsLength: t, icon: n}) {
    if (!t || !e)
        return null;
    const i = t === 1
      , a = t === 2
      , r = React.createElement($O, {
        tone: t === 1 ? "brand" : "neutral",
        icon: n
    })
      , s = G(pr.IconWrapper, !i && ((e == null ? void 0 : e.href) || (e == null ? void 0 : e.onClick)) && pr.IconWrapperLink, a && pr.IconWrapperNoTextResize, !So(n) && pr.BreadcrumbImageWrapper);
    return i ? React.createElement("div", {
        className: s,
        children: r
    }) : e != null && e.href ? React.createElement(Bi, {
        className: s,
        url: e == null ? void 0 : e.href,
        "aria-label": e == null ? void 0 : e.title,
        "data-tracking": "monorail:admin_page_breadcrumbs_click/1.0",
        children: r
    }) : e != null && e.onClick ? React.createElement("button", {
        type: "button",
        className: s,
        onClick: e == null ? void 0 : e.onClick,
        "aria-label": e == null ? void 0 : e.title,
        children: r
    }) : React.createElement("div", {
        className: s,
        children: r
    })
}
function $ne({items: e=[], icon: t}) {
    var s, l;
    const n = at()
      , {value: i, toggle: a} = Di(!1);
    if (e.length === 0)
        return null;
    const r = (s = e[0]) != null && s.content ? n.translate("Polaris.ActionMenu.RollupActions.rollupButtonBreadcrumbs", {
        sectionName: (l = e[0]) == null ? void 0 : l.content
    }) : n.translate("Polaris.ActionMenu.RollupActions.rollupButton");
    return React.createElement(Fn, {
        active: i,
        activator: React.createElement("button", {
            type: "button",
            className: G(pr.IconWrapper, !So(t) && pr.BreadcrumbImageWrapper),
            onClick: a,
            "aria-label": r,
            children: React.createElement($O, {
                tone: "neutral",
                icon: t
            })
        }),
        preferredAlignment: "right",
        onClose: a,
        hideOnPrint: !0,
        children: React.createElement(ka, {
            items: e,
            onActionAnyItem: a
        })
    })
}
function $O({tone: e, icon: t}) {
    return So(t) ? React.createElement(Fe, {
        type: t,
        tone: e
    }) : React.createElement(Tn, {
        source: t,
        alt: "",
        width: 20,
        height: 20,
        style: {
            borderRadius: "var(--p-border-radius-100)"
        }
    })
}
function Hne({breadcrumb: e, isLast: t}) {
    const {title: n, href: i, onClick: a} = e
      , r = React.createElement(ee, {
        as: "span",
        variant: "bodyLg",
        fontWeight: "regular",
        tone: "subdued",
        children: n
    }, n)
      , s = G(pr.BreadcrumbItem, n.length > 12 && pr.BreadcrumbItemOverflow)
      , l = {
        "--pc-breadcrumb-length": n.length
    }
      , c = i ? React.createElement(Bi, {
        className: s,
        style: l,
        url: i,
        "data-tracking": "monorail:admin_page_breadcrumbs_click/1.0",
        children: r
    }) : React.createElement("button", {
        type: "button",
        onClick: a,
        className: s,
        style: l,
        children: r
    });
    return React.createElement(React.Fragment, {
        children: [c, t ? null : React.createElement(Ep, {})]
    })
}
function Ep() {
    return React.createElement("svg", {
        width: "10",
        height: "20",
        viewBox: "0 0 10 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        style: {
            flexShrink: 0
        },
        "aria-hidden": "true",
        children: React.createElement("path", {
            d: "M4 8L6.5 11L4 14",
            stroke: "#8A8A8A",
            strokeWidth: "1.25",
            strokeLinecap: "round",
            strokeLinejoin: "round"
        })
    })
}
function Wne({breadcrumbs: e, isMobile: t}) {
    var p, f;
    if (!e.length)
        return null;
    const n = e.length === 1
      , i = e.length === 2
      , a = e[e.length - 1]
      , r = (p = e == null ? void 0 : e.find(v => !!v.icon)) == null ? void 0 : p.icon
      , s = React.createElement("div", {
        className: pr.PageTitle,
        id: "page-title",
        children: React.createElement(ee, {
            as: "h1",
            variant: "headingLg",
            fontWeight: "semibold",
            tone: "base",
            children: a.title
        }, a.title)
    }, a.title)
      , l = React.createElement(Une, {
        firstBreadcrumb: e.at(0),
        breadcrumbsLength: e.length,
        icon: r
    }, `${(f = e.at(0)) == null ? void 0 : f.id}-icon`);
    if (n)
        return React.createElement("div", {
            className: pr.IconWithTitle,
            children: [l, s]
        });
    if (!t) {
        if (i)
            return React.createElement("div", {
                className: pr.IconWithTitle,
                children: [l, React.createElement(Ep, {}), s]
            });
        const v = e.slice(1, -1)
          , g = v.reduce( (y, b) => y + (b.id ?? b.title), "");
        return [l, React.createElement(Ep, {}, `${g}-divider-front`), React.createElement(React.Fragment, {
            children: [v.map( (y, b) => React.createElement(Hne, {
                breadcrumb: y,
                isLast: b === v.length - 1
            }, y.id ?? y.title)), React.createElement(Ep, {}, `${g}-divider-back`)]
        }, g), s]
    }
    const c = e.slice(0, -1).map( ({title: v, href: g, id: y}) => ({
        content: v,
        url: g,
        id: y
    }))
      , d = c.reduce( (v, g) => v + (g.id ?? g.content), "");
    return [React.createElement("div", {
        className: pr.BreadcrumbsMobileRollup,
        children: i ? l : React.createElement($ne, {
            items: c,
            icon: r
        })
    }, d), React.createElement(Ep, {}, `${d}-divider`), s]
}
function HO(e) {
    var s, l;
    const t = at()
      , n = R_()
      , {mdUp: i} = Wn()
      , a = n || !i;
    if (!e.breadcrumbs.length)
        return null;
    const r = (s = e.breadcrumbs[0]) != null && s.title ? t.translate("Polaris.ActionMenu.RollupActions.rollupNavigationName", {
        sectionName: (l = e.breadcrumbs[0]) == null ? void 0 : l.title
    }) : t.translate("Polaris.ActionMenu.RollupActions.defaultRollupName");
    return React.createElement("div", {
        role: a ? void 0 : "navigation",
        "aria-label": a ? void 0 : r,
        className: pr.BreadcrumbsStack,
        children: React.createElement(Wne, {
            ...e,
            isMobile: a
        })
    })
}
function qne(e=[], t, n) {
    const i = t.reduce( (l, c) => l + c, 0)
      , a = e.map( (l, c) => c)
      , r = []
      , s = [];
    if (n > i)
        r.push(...a);
    else {
        let l = 0
          , c = !1;
        a.forEach(d => {
            const p = t[d];
            if (l + p >= n || c) {
                s.push(d),
                c = !0;
                return
            }
            r.push(d),
            l += p
        }
        )
    }
    return {
        visiblePromotedActions: r,
        hiddenPromotedActions: s
    }
}
function Gne(e) {
    const t = e.filter(n => n.items);
    return e.length === t.length
}
function Kne(e) {
    const t = e.filter(n => !n.items);
    return e.length === t.length
}
function C0(e) {
    return "title"in e && "actions"in e
}
function Qne(e) {
    return "items"in e
}
function Zne(e) {
    if (!(!e || e.length === 0)) {
        if (Gne(e))
            return e;
        if (Kne(e))
            return [{
                items: e
            }]
    }
}
function mL(e) {
    var t;
    if (!e)
        return !1;
    for (const n of e)
        for (const i of n.items)
            if (((t = i.badge) == null ? void 0 : t.tone) === "new")
                return !0;
    return !1
}
var qo = {
    BulkActionsOuterLayout: "Polaris-BulkActions__BulkActionsOuterLayout",
    BulkActionsSelectAllWrapper: "Polaris-BulkActions__BulkActionsSelectAllWrapper",
    BulkActionsPromotedActionsWrapper: "Polaris-BulkActions__BulkActionsPromotedActionsWrapper",
    BulkActionsLayout: "Polaris-BulkActions__BulkActionsLayout",
    "BulkActionsLayout--measuring": "Polaris-BulkActions--bulkActionsLayoutMeasuring",
    BulkActionsMeasurerLayout: "Polaris-BulkActions__BulkActionsMeasurerLayout",
    BulkActionButton: "Polaris-BulkActions__BulkActionButton",
    AllAction: "Polaris-BulkActions__AllAction"
}
  , pL = {
    Indicator: "Polaris-Indicator",
    pulseIndicator: "Polaris-Indicator--pulseIndicator"
};
function WO({pulse: e=!0}) {
    const t = G(pL.Indicator, e && pL.pulseIndicator);
    return React.createElement("span", {
        className: t
    })
}
function hf({handleMeasurement: e, url: t, external: n, onAction: i, content: a, disclosure: r, accessibilityLabel: s, disabled: l, destructive: c, indicator: d, showContentInButton: p, size: f}) {
    const v = React.useRef(null);
    Vf( () => {
        if (e && v.current) {
            const k = v.current.getBoundingClientRect().width;
            e(k)
        }
    }
    );
    const g = r && !p
      , y = g ? void 0 : a
      , b = React.createElement(nt, {
        external: n,
        url: t,
        accessibilityLabel: g ? a : s,
        tone: c ? "critical" : void 0,
        disclosure: r && p,
        onClick: i,
        disabled: l,
        size: f,
        icon: g ? React.createElement(Fe, {
            tone: "neutral",
            type: "menu-horizontal"
        }) : void 0,
        children: y
    });
    return React.createElement("div", {
        className: qo.BulkActionButton,
        ref: v,
        children: [g ? React.createElement(Qn, {
            content: a,
            preferredPosition: "below",
            children: b
        }) : b, d && React.createElement(WO, {})]
    })
}
function Yne({title: e, actions: t, isNewBadgeInBadgeActions: n, size: i}) {
    const {value: a, toggle: r} = Di(!1);
    return React.createElement(React.Fragment, {
        children: React.createElement(Fn, {
            active: a,
            activator: React.createElement(hf, {
                disclosure: !0,
                showContentInButton: !0,
                onAction: r,
                content: e,
                indicator: n,
                size: i
            }),
            onClose: r,
            preferInputActivator: !0,
            children: React.createElement(ka, {
                items: t,
                onActionAnyItem: r
            })
        })
    })
}
var fC = {
    CheckableButton: "Polaris-CheckableButton",
    Checkbox: "Polaris-CheckableButton__Checkbox",
    Label: "Polaris-CheckableButton__Label"
};
const qO = React.forwardRef(function({accessibilityLabel: t, label: n="", onToggleAll: i, selected: a, disabled: r, ariaLive: s}, l) {
    const c = React.useRef(null);
    function d() {
        var p;
        (p = c == null ? void 0 : c.current) == null || p.focus()
    }
    return React.useImperativeHandle(l, () => ({
        focus: d
    })),
    React.createElement("div", {
        className: fC.CheckableButton,
        onClick: i,
        children: [React.createElement("div", {
            className: fC.Checkbox,
            children: React.createElement(ss, {
                label: t,
                labelHidden: !0,
                checked: a,
                disabled: r,
                onChange: i,
                ref: c
            })
        }), n ? React.createElement("span", {
            className: fC.Label,
            "aria-live": s,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodySm",
                fontWeight: "medium",
                children: n
            })
        }) : null]
    })
});
function Jne({realNodeRef: e, promotedActions: t=[], disabled: n, buttonSize: i, handleMeasurement: a}) {
    const r = React.useRef(null);
    y2({
        measurerNodeRef: r,
        realNodeRef: e,
        includesDisclosure: !1,
        handleMeasurement: a
    });
    const s = t.map( (l, c) => C0(l) ? React.createElement(hf, {
        disclosure: !0,
        showContentInButton: !0,
        content: l.title,
        size: i
    }, c) : React.createElement(hf, {
        disabled: n,
        ...l,
        size: i
    }, c));
    return React.createElement("div", {
        className: G(qo.BulkActionsLayout, qo.BulkActionsMeasurerLayout),
        ref: r,
        children: s
    })
}
const GO = React.forwardRef(function({promotedActions: t, actions: n, disabled: i, buttonSize: a, paginatedSelectAllAction: r, paginatedSelectAllText: s, label: l, accessibilityLabel: c, selected: d, onToggleAll: p, onMoreActionPopoverToggle: f, width: v, selectMode: g}, y) {
    const b = at()
      , [k,C] = React.useState(!1)
      , x = React.useRef(null)
      , [A,_] = React.useReducer( (X, se) => ({
        ...X,
        ...se
    }), {
        visiblePromotedActions: [],
        hiddenPromotedActions: [],
        hasMeasured: !1
    })
      , {visiblePromotedActions: w, hiddenPromotedActions: T, hasMeasured: P} = A
      , I = !t || t && w.length === 0 ? b.translate("Polaris.ResourceList.BulkActions.actionsActivatorLabel") : b.translate("Polaris.ResourceList.BulkActions.moreActionsActivatorLabel")
      , L = r ? React.createElement(Pi, {
        className: qo.AllAction,
        onClick: r.onAction,
        size: "slim",
        disabled: i,
        children: React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            fontWeight: "medium",
            children: r.content
        })
    }) : null
      , R = s && r
      , M = {
        accessibilityLabel: c,
        label: R ? s : l,
        selected: d,
        onToggleAll: p,
        disabled: i,
        ariaLive: R ? "polite" : void 0,
        ref: y
    }
      , O = React.useCallback( () => {
        f == null || f(k),
        C(X => !X)
    }
    , [f, k])
      , z = React.useCallback(X => {
        const {hiddenActionsWidths: se, containerWidth: ne} = X;
        if (!t || t.length === 0)
            return;
        const {visiblePromotedActions: Y, hiddenPromotedActions: ue} = qne(t, se, ne);
        _({
            visiblePromotedActions: Y,
            hiddenPromotedActions: ue,
            hasMeasured: !0
        })
    }
    , [t])
      , B = Zne(n)
      , H = t ? t.filter( (X, se) => w.includes(se)).map( (X, se) => C0(X) ? React.createElement(Yne, {
        ...X,
        isNewBadgeInBadgeActions: mL(B),
        size: a
    }, `${X.title}-${se}`) : React.createElement(hf, {
        disabled: i,
        ...X,
        size: a
    }, `${X.id ?? X.content ?? "action"}-${se}`)) : null
      , V = {
        items: T.map(X => t == null ? void 0 : t[X]).reduce( (X, se) => se ? C0(se) ? X.concat(se.actions) : X.concat(se) : X, [])
    }
      , $ = React.useMemo( () => {
        if (B)
            return B;
        if (!n)
            return [];
        let X = !0;
        return n.filter(se => se).reduce( (se, ne) => Qne(ne) ? (X = !1,
        se.concat(ne)) : X ? se.length === 0 ? [{
            items: [ne]
        }] : se : (X = !0,
        se.concat({
            items: [ne]
        })), [])
    }
    , [n, B])
      , Q = React.createElement(hf, {
        disclosure: !0,
        showContentInButton: !H,
        onAction: O,
        content: I,
        disabled: i,
        indicator: mL(B),
        size: a
    })
      , K = $.length > 0 ? React.createElement(Fn, {
        active: k,
        activator: Q,
        preferredAlignment: "right",
        onClose: O,
        children: React.createElement(ka, {
            sections: V.items.length > 0 ? [V, ...$] : $,
            onActionAnyItem: O
        })
    }) : null
      , J = React.createElement(Jne, {
        promotedActions: t,
        disabled: i,
        buttonSize: a,
        handleMeasurement: z,
        realNodeRef: x
    });
    return React.createElement("div", {
        className: qo.BulkActions,
        style: v ? {
            width: v
        } : void 0,
        children: React.createElement(Te, {
            gap: "400",
            blockAlign: "center",
            wrap: !1,
            children: [React.createElement("div", {
                className: qo.BulkActionsSelectAllWrapper,
                children: [React.createElement(qO, {
                    ...M
                }), L]
            }), g ? React.createElement("div", {
                className: qo.BulkActionsPromotedActionsWrapper,
                children: [React.createElement(Te, {
                    gap: "100",
                    blockAlign: "center",
                    wrap: !1,
                    children: [React.createElement("div", {
                        className: qo.BulkActionsOuterLayout,
                        children: React.createElement("div", {
                            className: G(qo.BulkActionsLayout, !P && qo["BulkActionsLayout--measuring"]),
                            ref: x,
                            children: H
                        })
                    }), K]
                }), J]
            }) : null]
        })
    })
});
var As = {
    CalloutCard: "Polaris-CalloutCard",
    Image: "Polaris-CalloutCard__Image",
    DismissImage: "Polaris-CalloutCard__DismissImage",
    Content: "Polaris-CalloutCard__Content",
    Title: "Polaris-CalloutCard__Title",
    Buttons: "Polaris-CalloutCard__Buttons",
    Container: "Polaris-CalloutCard__Container",
    Dismiss: "Polaris-CalloutCard__Dismiss",
    hasDismiss: "Polaris-CalloutCard--hasDismiss"
};
function KO({children: e, title: t, actions: n}) {
    const i = n ? React.createElement(gr, {
        children: as(n, {
            variant: "plain"
        })
    }) : null
      , a = React.isValidElement(t) ? t : React.createElement(ee, {
        variant: "headingSm",
        fontWeight: "semibold",
        as: "h2",
        children: t
    })
      , r = i || e ? React.createElement(Te, {
        wrap: !1,
        gap: "200",
        align: "space-between",
        blockAlign: "center",
        children: [a, React.createElement(Te, {
            wrap: !1,
            gap: "400",
            blockAlign: "center",
            children: [i, e]
        })]
    }) : a;
    return React.createElement("div", {
        className: Ri.Header,
        children: r
    })
}
function Xne({children: e}) {
    return React.createElement("div", {
        className: Ri.Subsection,
        children: e
    })
}
const Co = function({children: t, hideOnPrint: n, title: i, subdued: a, sectioned: r, actions: s, primaryFooterAction: l, secondaryFooterActions: c, secondaryFooterActionsDisclosureText: d, footerActionAlignment: p="right"}) {
    const f = at()
      , {value: v, toggle: g} = Di(!1)
      , y = eie()
      , b = G(Ri.LegacyCard, a && Ri.subdued, n && Ri.hideOnPrint)
      , k = i || s ? React.createElement(KO, {
        actions: s,
        title: i
    }) : null
      , C = r ? React.createElement(TO, {
        children: t
    }) : t
      , x = l ? Qr(l, {
        variant: "primary"
    }) : null;
    let A = null;
    c && c.length && (c.length === 1 ? A = Qr(c[0]) : A = React.createElement(React.Fragment, {
        children: React.createElement(Fn, {
            active: v,
            activator: React.createElement(nt, {
                disclosure: !0,
                onClick: g,
                children: d || f.translate("Polaris.Common.more")
            }),
            onClose: g,
            children: React.createElement(ka, {
                items: c
            })
        })
    }));
    const _ = x || A ? React.createElement("div", {
        className: G(Ri.Footer, p === "left" && Ri.LeftJustified),
        children: p === "right" ? React.createElement(gr, {
            children: [A, x]
        }) : React.createElement(gr, {
            children: [x, A]
        })
    }) : null;
    return React.createElement(gm.Provider, {
        value: !0,
        children: React.createElement("div", {
            className: b,
            ref: y,
            children: [k, C, _]
        })
    })
};
Co.Header = KO;
Co.Section = TO;
Co.Subsection = Xne;
function eie() {
    const e = React.useRef(null);
    return React.useEffect( () => {
        const t = e.current;
        let n, i;
        if (t) {
            const a = () => {
                var d, p;
                ed(n, "top", !1),
                ed(i, "bottom", !1);
                const s = t.querySelectorAll(`.${Ri.Section}, .${Ri.Header}, .${Ri.Footer}`);
                if (!(s != null && s.length))
                    return;
                const l = s[0]
                  , c = tie(s);
                (d = t.firstChild) != null && d.contains(l) && (n = l,
                ed(n, "top", !0)),
                (p = t.lastChild) != null && p.contains(c) && (i = c,
                ed(i, "bottom", !0))
            }
            ;
            a();
            const r = new MutationObserver(a);
            return r.observe(t, {
                childList: !0,
                subtree: !0
            }),
            () => {
                ed(n, "top", !1),
                ed(i, "bottom", !1),
                r.disconnect()
            }
        }
    }
    , []),
    e
}
function ed(e, t, n) {
    if (!(!e || e.className.includes(Ri["Section-flush"])))
        switch (t) {
        case "top":
            e.classList.toggle(Ri.FirstSectionPadding, n);
            return;
        case "bottom":
            e.classList.toggle(Ri.LastSectionPadding, n)
        }
}
function tie(e) {
    let t = e[0];
    return e.forEach(n => {
        t.contains(n) || (t = n)
    }
    ),
    t
}
function zGe({title: e, children: t, illustration: n, primaryAction: i, secondaryAction: a, onDismiss: r}) {
    const s = at()
      , l = Qr(i)
      , c = a ? Qr(a, {
        variant: a.variant ?? "tertiary"
    }) : null
      , d = c ? React.createElement(gr, {
        children: [l, c]
    }) : l
      , p = r ? React.createElement("div", {
        className: As.Dismiss,
        children: React.createElement(nt, {
            variant: "tertiary",
            onClick: r,
            accessibilityLabel: s.translate("Polaris.Banner.dismissButton"),
            icon: "x"
        })
    }) : null
      , f = G(As.Image, r && As.DismissImage)
      , v = G(As.Container, r && As.hasDismiss);
    return React.createElement(Co, {
        children: React.createElement("div", {
            className: v,
            children: [p, React.createElement(Co.Section, {
                children: React.createElement("div", {
                    className: As.CalloutCard,
                    children: [React.createElement("div", {
                        className: As.Content,
                        children: [React.createElement("div", {
                            className: As.Title,
                            children: React.createElement(ee, {
                                variant: "headingSm",
                                as: "h2",
                                children: e
                            })
                        }), React.createElement(ee, {
                            as: "span",
                            variant: "bodyMd",
                            children: React.createElement(ft, {
                                children: t
                            })
                        }), React.createElement("div", {
                            className: As.Buttons,
                            children: d
                        })]
                    }), React.createElement(Tn, {
                        alt: "",
                        className: f,
                        source: n
                    })]
                })
            })]
        })
    })
}
var td = {
    Collapsible: "Polaris-Collapsible",
    isFullyClosed: "Polaris-Collapsible--isFullyClosed",
    expandOnPrint: "Polaris-Collapsible--expandOnPrint",
    inline: "Polaris-Collapsible--inline",
    animateIn: "Polaris-Collapsible--animateIn",
    hidden: "Polaris-Collapsible--hidden"
};
function Xd({id: e, expandOnPrint: t, open: n, variant: i="block", transition: a=!0, children: r, className: s, onAnimationEnd: l}) {
    const [c,d] = React.useState(0)
      , [p,f] = React.useState(n)
      , v = React.useRef(null)
      , g = React.useRef(r)
      , [y,b] = React.useState(void 0)
      , k = typeof a == "object" && a.animateIn
      , [C,x] = React.useState(k ? "measuring" : "idle")
      , A = C === "idle" && n && p
      , _ = C === "idle" && !n && !p
      , w = t || !_ ? r : null
      , T = i === "block"
      , P = i === "inline"
      , I = G(s, td.Collapsible, _ && td.isFullyClosed, t && td.expandOnPrint, P && td.inline, P && C === "hidden" && td.hidden, k && td.animateIn)
      , L = iie(a)
      , D = {
        ...typeof a == "object" && {
            transitionDelay: yd(`motion-duration-${a.delay ?? "0"}`),
            transitionDuration: a.duration,
            transitionTimingFunction: a.timingFunction
        },
        ...T ? {
            maxHeight: A ? "none" : `${c}px`,
            overflow: A ? "visible" : "hidden"
        } : {
            maxWidth: A || C === "hidden" ? "none" : `${c}px`,
            overflow: A || C === "hidden" ? "visible" : "hidden"
        }
    }
      , M = React.useCallback( ({target: z}) => {
        z === v.current && (x("idle"),
        f(n),
        l && l())
    }
    , [l, n])
      , O = React.useCallback( () => {
        L ? (f(n),
        x("idle"),
        n && v.current ? d(T ? v.current.scrollHeight : y ?? v.current.scrollWidth) : d(0)) : x(P && n ? "hidden" : "measuring")
    }
    , [n, T, L]);
    return React.useEffect( () => {
        !n || !v.current || (d(T ? v.current.scrollHeight : v.current.scrollWidth),
        P && !y && b(v.current.scrollWidth))
    }
    , []),
    React.useEffect( () => {
        P && !A && g.current !== r && x("measuring")
    }
    , [r]),
    React.useEffect( () => {
        n !== p && O()
    }
    , [n, p]),
    React.useEffect( () => {
        if (v.current)
            switch (C) {
            case "idle":
                break;
            case "hidden":
                b(v.current.scrollWidth),
                x("measuring");
                break;
            case "measuring":
                d(T ? v.current.scrollHeight : v.current.scrollWidth),
                x("animating");
                break;
            case "animating":
                d(n ? T ? v.current.scrollHeight : y ?? v.current.scrollWidth : 0)
            }
    }
    , [C, T, n, p]),
    React.createElement("div", {
        id: e,
        style: D,
        ref: v,
        className: I,
        onTransitionEnd: M,
        "aria-hidden": !n,
        children: w
    })
}
const nie = /^0(ms|s)$/;
function iie(e) {
    if (typeof e == "boolean")
        return !e;
    const {duration: t} = e;
    return !!(t && nie.test(t.trim()))
}
var Os = {
    ColorPicker: "Polaris-ColorPicker",
    MainColor: "Polaris-ColorPicker__MainColor",
    fullWidth: "Polaris-ColorPicker--fullWidth",
    Dragger: "Polaris-ColorPicker__Dragger",
    ColorLayer: "Polaris-ColorPicker__ColorLayer",
    HuePicker: "Polaris-ColorPicker__HuePicker",
    AlphaPicker: "Polaris-ColorPicker__AlphaPicker",
    Slidable: "Polaris-ColorPicker__Slidable"
};
const my = 13;
function aie(e, t, n) {
    const i = sie(e, t, n);
    return ha(i, 0, t)
}
function rie(e, t) {
    const n = ha(e, 0, t);
    return oie(n, t)
}
function oie(e, t) {
    const n = e - my
      , i = t - my * 2;
    return ha(1 - n / i, 0, 1)
}
function sie(e, t, n) {
    const i = t - (n + my);
    return ha((1 - e) * i + my, 0, t - n)
}
let A0 = !1;
Zl || window.addEventListener("touchmove", e => {
    A0 && e.preventDefault()
}
, {
    passive: !1
});
class j_ extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            dragging: !1
        });
        te(this, "node", null);
        te(this, "draggerNode", null);
        te(this, "setDraggerNode", n => {
            this.draggerNode = n
        }
        );
        te(this, "setNode", n => {
            this.node = n
        }
        );
        te(this, "startDrag", n => {
            cie(n) && this.handleDraggerMove(n.clientX, n.clientY),
            A0 = !0,
            this.setState({
                dragging: !0
            })
        }
        );
        te(this, "handleDragEnd", () => {
            A0 = !1,
            this.setState({
                dragging: !1
            })
        }
        );
        te(this, "handleMove", n => {
            if (n.stopImmediatePropagation(),
            n.stopPropagation(),
            n.cancelable && n.preventDefault(),
            lie(n)) {
                this.handleDraggerMove(n.clientX, n.clientY);
                return
            }
            this.handleDraggerMove(n.touches[0].clientX, n.touches[0].clientY)
        }
        );
        te(this, "handleDraggerMove", (n, i) => {
            if (this.node == null)
                return;
            const {onChange: a} = this.props
              , r = this.node.getBoundingClientRect()
              , s = n - r.left
              , l = i - r.top;
            a({
                x: s,
                y: l
            })
        }
        )
    }
    componentDidMount() {
        const {onDraggerHeight: n} = this.props;
        if (n == null)
            return;
        const {draggerNode: i} = this;
        i != null && n(i.clientWidth)
    }
    render() {
        const {dragging: n} = this.state
          , {draggerX: i=0, draggerY: a=0} = this.props
          , r = {
            transform: `translate3d(${i}px, ${a}px, 0)`
        }
          , s = n ? React.createElement(Ni, {
            event: "mousemove",
            handler: this.handleMove,
            passive: !1
        }) : null
          , l = n ? React.createElement(Ni, {
            event: "touchmove",
            handler: this.handleMove,
            passive: !1
        }) : null
          , c = n ? React.createElement(Ni, {
            event: "mouseup",
            handler: this.handleDragEnd
        }) : null
          , d = n ? React.createElement(Ni, {
            event: "touchend",
            handler: this.handleDragEnd
        }) : null
          , p = n ? React.createElement(Ni, {
            event: "touchcancel",
            handler: this.handleDragEnd
        }) : null;
        return React.createElement("div", {
            ref: this.setNode,
            className: Os.Slidable,
            onMouseDown: this.startDrag,
            onTouchStart: this.startDrag,
            children: [c, s, l, d, p, React.createElement("div", {
                style: r,
                className: Os.Dragger,
                ref: this.setDraggerNode
            })]
        })
    }
}
function lie(e) {
    return e.type === "mousemove"
}
function cie(e) {
    return e.type === "mousedown"
}
class uie extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            sliderHeight: 0,
            draggerHeight: 0
        });
        te(this, "setSliderHeight", n => {
            n != null && this.setState({
                sliderHeight: n.clientHeight
            })
        }
        );
        te(this, "setDraggerHeight", n => {
            this.setState({
                draggerHeight: n
            })
        }
        );
        te(this, "handleChange", ({y: n}) => {
            const {onChange: i} = this.props
              , {sliderHeight: a} = this.state
              , r = rie(n, a);
            i(r)
        }
        )
    }
    render() {
        const {color: n, alpha: i} = this.props
          , {sliderHeight: a, draggerHeight: r} = this.state
          , s = aie(i, a, r)
          , l = die(n);
        return React.createElement("div", {
            className: Os.AlphaPicker,
            ref: this.setSliderHeight,
            children: [React.createElement("div", {
                className: Os.ColorLayer,
                style: {
                    background: l
                }
            }), React.createElement(j_, {
                draggerY: s,
                draggerX: 0,
                onChange: this.handleChange,
                onDraggerHeight: this.setDraggerHeight
            })]
        })
    }
}
function die(e) {
    const {red: t, green: n, blue: i} = Zx(e)
      , a = `${t}, ${n}, ${i}`;
    return `linear-gradient(to top, rgba(${a}, 0) 18px, rgba(${a}, 1) calc(100% - 18px))`
}
const py = 13;
function mie(e, t, n) {
    const i = hie(e, t, n);
    return ha(i, 0, t)
}
function pie(e, t) {
    const n = ha(e, 0, t);
    return fie(n, t)
}
function fie(e, t) {
    const n = e - py
      , i = t - py * 2;
    return ha(n / i * 360, 0, 360)
}
function hie(e, t, n) {
    const i = t - (n + py);
    return ha(e / 360 * i + py, 0, t - n)
}
class gie extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            sliderHeight: 0,
            draggerHeight: 0
        });
        te(this, "setSliderHeight", n => {
            n != null && this.setState({
                sliderHeight: n.clientHeight
            })
        }
        );
        te(this, "setDraggerHeight", n => {
            this.setState({
                draggerHeight: n
            })
        }
        );
        te(this, "handleChange", ({y: n}) => {
            const {onChange: i} = this.props
              , {sliderHeight: a} = this.state
              , r = pie(n, a);
            i(r)
        }
        )
    }
    render() {
        const {hue: n} = this.props
          , {sliderHeight: i, draggerHeight: a} = this.state
          , r = mie(n, i, a);
        return React.createElement("div", {
            className: Os.HuePicker,
            ref: this.setSliderHeight,
            children: React.createElement(j_, {
                draggerY: r,
                draggerX: 0,
                onChange: this.handleChange,
                onDraggerHeight: this.setDraggerHeight
            })
        })
    }
}
const fL = 200;
class VGe extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            pickerSize: {
                width: 0,
                height: 0
            }
        });
        te(this, "colorNode", null);
        te(this, "handleResize", ji( () => {
            const {colorNode: n} = this;
            n != null && this.setState({
                pickerSize: {
                    width: n.clientWidth,
                    height: n.clientHeight
                }
            })
        }
        , fL, {
            leading: !0,
            trailing: !0,
            maxWait: fL
        }));
        te(this, "setColorNode", n => {
            this.colorNode = n
        }
        );
        te(this, "handleHueChange", n => {
            const {color: {brightness: i, saturation: a, alpha: r=1}, onChange: s} = this.props;
            s({
                hue: n,
                brightness: i,
                saturation: a,
                alpha: r
            })
        }
        );
        te(this, "handleAlphaChange", n => {
            const {color: {hue: i, brightness: a, saturation: r}, onChange: s} = this.props;
            s({
                hue: i,
                brightness: a,
                saturation: r,
                alpha: n
            })
        }
        );
        te(this, "handleDraggerMove", ({x: n, y: i}) => {
            const {pickerSize: a} = this.state
              , {color: {hue: r, alpha: s=1}, onChange: l} = this.props
              , c = ha(n / a.width, 0, 1)
              , d = ha(1 - i / a.height, 0, 1);
            l({
                hue: r,
                saturation: c,
                brightness: d,
                alpha: s
            })
        }
        );
        te(this, "handlePickerDrag", n => {
            n.preventDefault()
        }
        )
    }
    componentDidMount() {
        const {colorNode: n} = this;
        n != null && this.setState({
            pickerSize: {
                width: n.clientWidth,
                height: n.clientHeight
            }
        })
    }
    render() {
        const {id: n, color: i, allowAlpha: a, fullWidth: r} = this.props
          , {hue: s, saturation: l, brightness: c, alpha: d} = i
          , {pickerSize: p} = this.state
          , f = d != null && a ? d : 1
          , {red: v, green: g, blue: y} = Zx({
            hue: s,
            saturation: 1,
            brightness: 1
        })
          , b = `rgba(${v}, ${g}, ${y}, ${f})`
          , k = ha(l * p.width, 0, p.width)
          , C = ha(p.height - c * p.height, 0, p.height)
          , x = a ? React.createElement(uie, {
            alpha: f,
            color: i,
            onChange: this.handleAlphaChange
        }) : null
          , A = G(Os.ColorPicker, r && Os.fullWidth);
        return React.createElement("div", {
            className: A,
            id: n,
            onMouseDown: this.handlePickerDrag,
            children: [React.createElement("div", {
                ref: this.setColorNode,
                className: Os.MainColor,
                children: [React.createElement("div", {
                    className: Os.ColorLayer,
                    style: {
                        backgroundColor: b
                    }
                }), React.createElement(j_, {
                    onChange: this.handleDraggerMove,
                    draggerX: k,
                    draggerY: C
                })]
            }), React.createElement(gie, {
                hue: s,
                onChange: this.handleHueChange
            }), x, React.createElement(Ni, {
                event: "resize",
                handler: this.handleResize
            })]
        })
    }
}
var vie = {
    InlineGrid: "Polaris-InlineGrid"
};
function $s({children: e, columns: t, gap: n, alignItems: i, ...a}) {
    const r = {
        ...sf("inline-grid", "grid-template-columns", yie(t)),
        ...fa("inline-grid", "gap", "space", n),
        "--pc-inline-grid-align-items": i
    }
      , s = f_(a);
    return React.createElement("div", {
        className: vie.InlineGrid,
        style: hm(r),
        ...s,
        children: e
    })
}
function yie(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e) ? Object.fromEntries(Object.entries(e).map( ([t,n]) => [t, hL(n)])) : hL(e)
}
function hL(e) {
    if (e)
        return typeof e == "number" || !isNaN(Number(e)) ? `repeat(${Number(e)}, minmax(0, 1fr))` : typeof e == "string" ? e : e.map(t => {
            switch (t) {
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
const fb = React.createContext(void 0);
function tr() {
    const e = React.useContext(fb);
    if (!e)
        throw new Error("No Frame context was provided. Your component must be wrapped in a <Frame> component. See https://polaris.shopify.com/components/internal-only/frame for implementation instructions.");
    return e
}
const QO = React.memo(function({message: t, saveAction: n, saveAsAction: i, discardAction: a, alignContentFlush: r, fullWidth: s, contextControl: l, secondaryMenu: c}) {
    const {setContextualSaveBar: d, removeContextualSaveBar: p} = tr();
    return React.useEffect( () => {
        d({
            message: t,
            saveAction: n,
            saveAsAction: i,
            discardAction: a,
            alignContentFlush: r,
            fullWidth: s,
            contextControl: l,
            secondaryMenu: c
        })
    }
    , [t, n, i, a, r, d, s, l, c]),
    React.useEffect( () => p, [p]),
    null
});
function bie(e) {
    return function(t, n) {
        const {firstVisibleColumnIndex: i, tableLeftVisibleEdge: a, tableRightVisibleEdge: r} = e
          , s = t.offsetLeft
          , l = s + t.offsetWidth
          , c = gL(s, a, r, "left")
          , d = gL(l, a, r, "right")
          , p = c || d
          , f = t.offsetWidth;
        return p && (e.firstVisibleColumnIndex = Math.min(i, n)),
        {
            leftEdge: s,
            rightEdge: l,
            isVisible: p,
            width: f,
            index: n
        }
    }
}
function gL(e, t, n, i) {
    return e >= t + (i === "left" ? 0 : 30) && e <= n - 30
}
function kie(e, t) {
    const {firstVisibleColumnIndex: n} = e
      , i = Math.max(n - 1, 0)
      , a = t[i]
      , r = t[n];
    return {
        previousColumn: a,
        currentColumn: r
    }
}
var Vt = {
    DataTable: "Polaris-DataTable",
    condensed: "Polaris-DataTable--condensed",
    Navigation: "Polaris-DataTable__Navigation",
    Pip: "Polaris-DataTable__Pip",
    "Pip-visible": "Polaris-DataTable__Pip--visible",
    ScrollContainer: "Polaris-DataTable__ScrollContainer",
    Table: "Polaris-DataTable__Table",
    TableRow: "Polaris-DataTable__TableRow",
    Cell: "Polaris-DataTable__Cell",
    IncreasedTableDensity: "Polaris-DataTable__IncreasedTableDensity",
    ZebraStripingOnData: "Polaris-DataTable__ZebraStripingOnData",
    RowCountIsEven: "Polaris-DataTable__RowCountIsEven",
    ShowTotalsInFooter: "Polaris-DataTable__ShowTotalsInFooter",
    "Cell-separate": "Polaris-DataTable__Cell--separate",
    "Cell-firstColumn": "Polaris-DataTable__Cell--firstColumn",
    "Cell-numeric": "Polaris-DataTable__Cell--numeric",
    "Cell-truncated": "Polaris-DataTable__Cell--truncated",
    "Cell-header": "Polaris-DataTable__Cell--header",
    "Cell-sortable": "Polaris-DataTable__Cell--sortable",
    "Heading-left": "Polaris-DataTable__Heading--left",
    "Cell-verticalAlignTop": "Polaris-DataTable__Cell--verticalAlignTop",
    "Cell-verticalAlignBottom": "Polaris-DataTable__Cell--verticalAlignBottom",
    "Cell-verticalAlignMiddle": "Polaris-DataTable__Cell--verticalAlignMiddle",
    "Cell-verticalAlignBaseline": "Polaris-DataTable__Cell--verticalAlignBaseline",
    hoverable: "Polaris-DataTable--hoverable",
    "Cell-hovered": "Polaris-DataTable__Cell--hovered",
    Icon: "Polaris-DataTable__Icon",
    Heading: "Polaris-DataTable__Heading",
    StickyHeaderEnabled: "Polaris-DataTable__StickyHeaderEnabled",
    StickyHeaderWrapper: "Polaris-DataTable__StickyHeaderWrapper",
    "Cell-sorted": "Polaris-DataTable__Cell--sorted",
    "Cell-total": "Polaris-DataTable__Cell--total",
    ShowTotals: "Polaris-DataTable__ShowTotals",
    "Cell-total-footer": "Polaris-DataTable--cellTotalFooter",
    Footer: "Polaris-DataTable__Footer",
    StickyHeaderInner: "Polaris-DataTable__StickyHeaderInner",
    "StickyHeaderInner-isSticky": "Polaris-DataTable__StickyHeaderInner--isSticky",
    StickyHeaderTable: "Polaris-DataTable__StickyHeaderTable",
    FixedFirstColumn: "Polaris-DataTable__FixedFirstColumn",
    StickyTableHeadingsRow: "Polaris-DataTable__StickyTableHeadingsRow",
    TooltipContent: "Polaris-DataTable__TooltipContent"
};
function ZO({children: e, onMount: t, fallback: n=null}) {
    const i = vm()
      , a = i ? e : n;
    return React.useEffect( () => {
        i && t && t()
    }
    , [i, t]),
    React.createElement(React.Fragment, {
        children: a
    })
}
function mp({content: e, contentType: t, nthColumn: n, firstColumn: i, truncate: a, header: r, total: s, totalInFooter: l, sorted: c, sortable: d, sortDirection: p, inFixedNthColumn: f, verticalAlign: v="top", defaultSortDirection: g="ascending", onSort: y, colSpan: b, setRef: k= () => {}
, stickyHeadingCell: C=!1, stickyCellWidth: x, hovered: A=!1, handleFocus: _= () => {}
, hasFixedNthColumn: w=!1, fixedCellVisible: T=!1, firstColumnMinWidth: P, style: I, lastFixedFirstColumn: L}) {
    const R = at()
      , D = t === "numeric"
      , M = G(Vt.Cell, Vt[`Cell-${$t("verticalAlign", v)}`], i && Vt["Cell-firstColumn"], a && Vt["Cell-truncated"], r && Vt["Cell-header"], s && Vt["Cell-total"], l && Vt["Cell-total-footer"], D && Vt["Cell-numeric"], d && Vt["Cell-sortable"], c && Vt["Cell-sorted"], C && Vt.StickyHeaderCell, A && Vt["Cell-hovered"], L && f && T && Vt["Cell-separate"], n && f && C && Vt.FixedFirstColumn)
      , O = G(r && Vt.Heading, r && t === "text" && Vt["Heading-left"])
      , z = G(d && Vt.Icon)
      , B = c && p ? p : g
      , H = B === "descending" ? "sort-descending" : "sort-ascending"
      , q = p === "ascending" ? "descending" : "ascending"
      , W = R.translate("Polaris.DataTable.sortAccessibilityLabel", {
        direction: c ? q : B
    })
      , V = React.createElement("span", {
        className: z,
        children: [React.createElement(ee, {
            as: "span",
            visuallyHidden: !0,
            children: W
        }), React.createElement(Fe, {
            type: H,
            tone: "legacy-inherit"
        })]
    })
      , $ = !(C && w && n && !f)
      , K = d ? React.createElement("button", {
        className: O,
        onClick: y,
        onFocus: _,
        tabIndex: $ ? 0 : -1,
        children: [V, e]
    }) : e
      , J = b && b > 1 ? {
        colSpan: b
    } : {}
      , X = n && P ? {
        minWidth: P
    } : {
        minWidth: x
    }
      , se = React.createElement("th", {
        ref: k,
        ...o0.props,
        ...J,
        className: M,
        "aria-sort": p,
        style: {
            ...I,
            ...X
        },
        "data-index-table-sticky-heading": !0,
        children: K
    })
      , ne = r ? React.createElement("th", {
        ...o0.props,
        "aria-sort": p,
        ...J,
        ref: k,
        className: M,
        scope: "col",
        style: {
            ...X
        },
        children: K
    }) : React.createElement("th", {
        ...J,
        ref: k,
        className: M,
        scope: "row",
        style: {
            ...X
        },
        children: a ? React.createElement(Sie, {
            className: Vt.TooltipContent,
            children: e
        }) : e
    })
      , Y = r || i || n ? ne : React.createElement("td", {
        className: M,
        ...J,
        children: e
    });
    return C ? se : Y
}
const Sie = ({children: e, className: t=""}) => {
    const n = React.useRef(null)
      , {current: i} = n
      , a = React.createElement("span", {
        ref: n,
        className: t,
        children: e
    });
    return (i == null ? void 0 : i.scrollWidth) > (i == null ? void 0 : i.offsetWidth) ? React.createElement(Qn, {
        content: n.current.innerText,
        children: a
    }) : a
}
;
function Cie({columnVisibilityData: e, isScrolledFarthestLeft: t, isScrolledFarthestRight: n, navigateTableLeft: i, navigateTableRight: a, fixedFirstColumns: r, setRef: s= () => {}
}) {
    const l = at()
      , c = e.map( (f, v) => {
        if (v < r)
            return;
        const g = G(Vt.Pip, f.isVisible && Vt["Pip-visible"]);
        return React.createElement("div", {
            className: g
        }, `pip-${v}`)
    }
    )
      , d = l.translate("Polaris.DataTable.navAccessibilityLabel", {
        direction: "left"
    })
      , p = l.translate("Polaris.DataTable.navAccessibilityLabel", {
        direction: "right"
    });
    return React.createElement("div", {
        className: Vt.Navigation,
        ref: s,
        children: [React.createElement(nt, {
            variant: "tertiary",
            disabled: t,
            accessibilityLabel: d,
            onClick: i,
            icon: "chevron-left"
        }), c, React.createElement(nt, {
            variant: "tertiary",
            disabled: n,
            accessibilityLabel: p,
            onClick: a,
            icon: "chevron-right"
        })]
    })
}
const vL = e => {
    const t = [];
    return e && e.forEach(n => {
        t.push(n.clientHeight)
    }
    ),
    t
}
;
class Aie extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            condensed: !1,
            columnVisibilityData: [],
            isScrolledFarthestLeft: !0,
            isScrolledFarthestRight: !1,
            rowHovered: void 0
        });
        te(this, "dataTable", React.createRef());
        te(this, "scrollContainer", React.createRef());
        te(this, "table", React.createRef());
        te(this, "stickyTable", React.createRef());
        te(this, "stickyNav", null);
        te(this, "headerNav", null);
        te(this, "tableHeadings", []);
        te(this, "stickyHeadings", []);
        te(this, "tableHeadingWidths", []);
        te(this, "stickyHeaderActive", !1);
        te(this, "scrollStopTimer", null);
        te(this, "handleResize", ji( () => {
            const {table: {current: n}, scrollContainer: {current: i}} = this;
            let a = !1;
            n && i && (a = n.scrollWidth > i.clientWidth + 1),
            this.setState({
                condensed: a,
                ...this.calculateColumnVisibilityData(a)
            })
        }
        ));
        te(this, "setCellRef", ({ref: n, index: i, inStickyHeader: a}) => {
            if (n != null)
                if (a) {
                    this.stickyHeadings[i] = n;
                    const r = n.querySelector("button");
                    if (r == null)
                        return;
                    r.addEventListener("focus", this.handleHeaderButtonFocus)
                } else
                    this.tableHeadings[i] = n,
                    this.tableHeadingWidths[i] = n.clientWidth
        }
        );
        te(this, "changeHeadingFocus", () => {
            const {tableHeadings: n, stickyHeadings: i, stickyNav: a, headerNav: r} = this
              , s = i.findIndex(g => {
                var y;
                return g === ((y = document.activeElement) == null ? void 0 : y.parentElement)
            }
            )
              , l = n.findIndex(g => {
                var y;
                return g === ((y = document.activeElement) == null ? void 0 : y.parentElement)
            }
            )
              , c = a == null ? void 0 : a.querySelectorAll("button")
              , d = r == null ? void 0 : r.querySelectorAll("button");
            let p = -1;
            c == null || c.forEach( (g, y) => {
                g === document.activeElement && (p = y)
            }
            );
            let f = -1;
            if (d == null || d.forEach( (g, y) => {
                g === document.activeElement && (f = y)
            }
            ),
            s < 0 && l < 0 && p < 0 && f < 0)
                return null;
            let v;
            if (s >= 0 ? v = n[s].querySelector("button") : l >= 0 && (v = i[l].querySelector("button")),
            p >= 0 ? v = d == null ? void 0 : d[p] : f >= 0 && (v = c == null ? void 0 : c[f]),
            v == null)
                return null;
            v.style.visibility = "visible",
            v.focus(),
            v.style.removeProperty("visibility")
        }
        );
        te(this, "calculateColumnVisibilityData", n => {
            const i = this.fixedFirstColumns()
              , {table: {current: a}, scrollContainer: {current: r}, dataTable: {current: s}} = this
              , {stickyHeader: l} = this.props;
            if ((l || n) && a && r && s) {
                const c = a.querySelectorAll(o0.selector)
                  , d = c[i - 1]
                  , p = i ? d.offsetLeft + d.offsetWidth : 0;
                if (c.length > 0) {
                    const f = c.length - 1
                      , v = r.scrollLeft + p
                      , g = r.scrollLeft + s.offsetWidth
                      , y = {
                        firstVisibleColumnIndex: f,
                        tableLeftVisibleEdge: v,
                        tableRightVisibleEdge: g
                    }
                      , b = [...c].map(bie(y))
                      , k = b[b.length - 1]
                      , C = i ? v === p : v === 0;
                    return {
                        columnVisibilityData: b,
                        ...kie(y, b),
                        isScrolledFarthestLeft: C,
                        isScrolledFarthestRight: k.rightEdge <= g
                    }
                }
            }
            return {
                columnVisibilityData: [],
                previousColumn: void 0,
                currentColumn: void 0
            }
        }
        );
        te(this, "handleHeaderButtonFocus", n => {
            var v;
            const i = this.fixedFirstColumns();
            if (this.scrollContainer.current == null || n.target == null || this.state.columnVisibilityData.length === 0)
                return;
            const r = n.target.parentNode
              , s = this.scrollContainer.current.scrollLeft
              , l = this.scrollContainer.current.offsetWidth
              , c = s + l
              , d = this.state.columnVisibilityData.length > 0 ? (v = this.state.columnVisibilityData[i]) == null ? void 0 : v.rightEdge : 0
              , p = r.offsetLeft
              , f = r.offsetLeft + r.offsetWidth;
            s > p - d && (this.scrollContainer.current.scrollLeft = p - d),
            f > c && (this.scrollContainer.current.scrollLeft = f - l)
        }
        );
        te(this, "stickyHeaderScrolling", () => {
            const {current: n} = this.stickyTable
              , {current: i} = this.scrollContainer;
            n == null || i == null || (n.scrollLeft = i.scrollLeft)
        }
        );
        te(this, "scrollListener", () => {
            var n;
            this.scrollStopTimer && clearTimeout(this.scrollStopTimer),
            this.scrollStopTimer = setTimeout( () => {
                this.setState(i => ({
                    ...this.calculateColumnVisibilityData(i.condensed)
                }))
            }
            , 100),
            this.setState({
                isScrolledFarthestLeft: ((n = this.scrollContainer.current) == null ? void 0 : n.scrollLeft) === 0
            }),
            this.props.stickyHeader && this.stickyHeaderActive && this.stickyHeaderScrolling()
        }
        );
        te(this, "handleHover", n => () => {
            this.setState({
                rowHovered: n
            })
        }
        );
        te(this, "handleFocus", n => {
            var d;
            const i = this.fixedFirstColumns();
            if (this.scrollContainer.current == null || n.target == null)
                return;
            const a = n.target.parentNode
              , s = this.props ? (d = this.state.columnVisibilityData[i]) == null ? void 0 : d.rightEdge : 0
              , c = a.offsetLeft - s;
            this.scrollContainer.current.scrollLeft > c && (this.scrollContainer.current.scrollLeft = c)
        }
        );
        te(this, "navigateTable", n => {
            var p;
            const i = this.fixedFirstColumns()
              , {currentColumn: a, previousColumn: r} = this.state
              , s = (p = this.state.columnVisibilityData[i - 1]) == null ? void 0 : p.rightEdge;
            if (!a || !r)
                return;
            let l = 0;
            for (let f = 0; f < a.index; f++)
                l += this.state.columnVisibilityData[f].width;
            const {current: c} = this.scrollContainer;
            return () => {
                let f = 0;
                i ? f = n === "right" ? l - s + a.width : l - r.width - s : f = n === "right" ? a.rightEdge : r.leftEdge,
                c && (c.scrollLeft = f,
                requestAnimationFrame( () => {
                    this.setState(v => ({
                        ...this.calculateColumnVisibilityData(v.condensed)
                    }))
                }
                ))
            }
        }
        );
        te(this, "renderHeading", ({heading: n, headingIndex: i, inFixedNthColumn: a, inStickyHeader: r}) => {
            var I;
            const {sortable: s, truncate: l=!1, columnContentTypes: c, defaultSortDirection: d, initialSortColumnIndex: p=0, verticalAlign: f, firstColumnMinWidth: v} = this.props
              , g = this.fixedFirstColumns()
              , {sortDirection: y=d, sortedColumnIndex: b=p, isScrolledFarthestLeft: k} = this.state;
            let C;
            const x = `heading-cell-${i}`
              , A = `stickyheader-${i}`
              , _ = r ? A : x;
            if (s) {
                const L = s[i]
                  , R = L && b === i;
                C = {
                    defaultSortDirection: d,
                    sorted: R,
                    sortable: L,
                    sortDirection: R ? y : "none",
                    onSort: this.defaultOnSort(i),
                    fixedNthColumn: g,
                    inFixedNthColumn: g
                }
            }
            const w = r ? this.tableHeadingWidths[i] : void 0
              , T = !k
              , P = {
                header: !0,
                stickyHeadingCell: r,
                content: n,
                contentType: c[i],
                nthColumn: i < g,
                fixedFirstColumns: g,
                truncate: l,
                headingIndex: i,
                ...C,
                verticalAlign: f,
                handleFocus: this.handleFocus,
                stickyCellWidth: w,
                fixedCellVisible: T,
                firstColumnMinWidth: v
            };
            return a && r ? [React.createElement(mp, {
                ...P,
                setRef: L => {
                    this.setCellRef({
                        ref: L,
                        index: i,
                        inStickyHeader: r
                    })
                }
                ,
                inFixedNthColumn: !1
            }, _), React.createElement(mp, {
                ...P,
                setRef: L => {
                    this.setCellRef({
                        ref: L,
                        index: i,
                        inStickyHeader: r
                    })
                }
                ,
                inFixedNthColumn: !!g,
                lastFixedFirstColumn: i === g - 1,
                style: {
                    left: (I = this.state.columnVisibilityData[i]) == null ? void 0 : I.leftEdge
                }
            }, `${_}-sticky`)] : React.createElement(mp, {
                ...P,
                setRef: L => {
                    this.setCellRef({
                        ref: L,
                        index: i,
                        inStickyHeader: r
                    })
                }
                ,
                lastFixedFirstColumn: i === g - 1,
                inFixedNthColumn: a
            }, _)
        }
        );
        te(this, "totalsRowHeading", () => {
            const {i18n: n, totals: i, totalsName: a} = this.props
              , r = a || {
                singular: n.translate("Polaris.DataTable.totalRowHeading"),
                plural: n.translate("Polaris.DataTable.totalsRowHeading")
            };
            return i && i.filter(s => s !== "").length > 1 ? r.plural : r.singular
        }
        );
        te(this, "renderTotals", ({total: n, index: i}) => {
            const a = this.fixedFirstColumns()
              , r = `totals-cell-${i}`
              , {truncate: s=!1, verticalAlign: l, columnContentTypes: c} = this.props;
            let d, p;
            i === 0 && (d = this.totalsRowHeading()),
            n !== "" && i > 0 && (p = c[i],
            d = n);
            const f = this.props.showTotalsInFooter;
            return React.createElement(mp, {
                total: !0,
                totalInFooter: f,
                nthColumn: i <= a - 1,
                firstColumn: i === 0,
                content: d,
                contentType: p,
                truncate: s,
                verticalAlign: l
            }, r)
        }
        );
        te(this, "getColSpan", (n, i, a, r) => {
            if (this.fixedFirstColumns())
                return 1;
            const l = n || 1
              , c = i || a
              , d = Math.floor(c / l)
              , p = c % l;
            return r === 0 ? d + p : d
        }
        );
        te(this, "defaultRenderRow", ({row: n, index: i, inFixedNthColumn: a, rowHeights: r}) => {
            const {columnContentTypes: s, truncate: l=!1, verticalAlign: c, hoverable: d=!0, headings: p} = this.props
              , {condensed: f} = this.state
              , v = this.fixedFirstColumns()
              , g = G(Vt.TableRow, d && Vt.hoverable);
            return React.createElement("tr", {
                className: g,
                onMouseEnter: this.handleHover(i),
                onMouseLeave: this.handleHover(),
                children: n.map( (y, b) => {
                    const k = i === this.state.rowHovered
                      , C = `cell-${b}-row-${i}`
                      , x = this.getColSpan(n.length, p.length, s.length, b);
                    return React.createElement(mp, {
                        content: y,
                        contentType: s[b],
                        nthColumn: b <= v - 1,
                        firstColumn: b === 0,
                        truncate: l,
                        verticalAlign: c,
                        colSpan: x,
                        hovered: k,
                        style: r ? {
                            height: `${r[i]}px`
                        } : {},
                        inFixedNthColumn: f && a
                    }, C)
                }
                )
            }, `row-${i}`)
        }
        );
        te(this, "defaultOnSort", n => {
            const {onSort: i, defaultSortDirection: a="ascending", initialSortColumnIndex: r} = this.props
              , {sortDirection: s=a, sortedColumnIndex: l=r} = this.state;
            let c = a;
            return l === n && (c = s === "ascending" ? "descending" : "ascending"),
            () => {
                this.setState({
                    sortDirection: c,
                    sortedColumnIndex: n
                }, () => {
                    i && i(n, c)
                }
                )
            }
        }
        )
    }
    componentDidMount() {
        this.handleResize()
    }
    componentDidUpdate(n) {
        Bs(n, this.props) || this.handleResize()
    }
    componentWillUnmount() {
        this.handleResize.cancel()
    }
    render() {
        var K, J, X;
        const {headings: n, totals: i, showTotalsInFooter: a, rows: r, footerContent: s, hideScrollIndicator: l=!1, increasedTableDensity: c=!1, hasZebraStripingOnData: d=!1, stickyHeader: p=!1, hasFixedFirstColumn: f=!1, pagination: v} = this.props
          , {condensed: g, columnVisibilityData: y, isScrolledFarthestLeft: b, isScrolledFarthestRight: k} = this.state
          , C = this.fixedFirstColumns()
          , x = r.length % 2 === 0
          , A = G(Vt.DataTable, g && Vt.condensed, i && Vt.ShowTotals, a && Vt.ShowTotalsInFooter, d && Vt.ZebraStripingOnData, d && x && Vt.RowCountIsEven)
          , _ = G(Vt.TableWrapper, g && Vt.condensed, c && Vt.IncreasedTableDensity, p && Vt.StickyHeaderEnabled)
          , w = React.createElement("tr", {
            children: n.map( (se, ne) => this.renderHeading({
                heading: se,
                headingIndex: ne,
                inFixedNthColumn: !1,
                inStickyHeader: !1
            }))
        })
          , T = i ? React.createElement("tr", {
            children: i.map( (se, ne) => this.renderTotals({
                total: se,
                index: ne
            }))
        }) : null
          , P = r.map(se => se.slice(0, C))
          , I = n.slice(0, C)
          , L = i == null ? void 0 : i.slice(0, C)
          , R = (K = this.table.current) == null ? void 0 : K.children[0].childNodes
          , D = (J = this.table.current) == null ? void 0 : J.children[1].childNodes
          , M = vL(R)
          , O = vL(D)
          , z = g && C !== 0 && React.createElement("table", {
            className: G(Vt.FixedFirstColumn, !b && Vt.separate),
            style: {
                width: `${(X = y[C - 1]) == null ? void 0 : X.rightEdge}px`
            },
            children: [React.createElement("thead", {
                children: [React.createElement("tr", {
                    style: {
                        height: `${M[0]}px`
                    },
                    children: I.map( (se, ne) => this.renderHeading({
                        heading: se,
                        headingIndex: ne,
                        inFixedNthColumn: !0,
                        inStickyHeader: !1
                    }))
                }), i && !a && React.createElement("tr", {
                    style: {
                        height: `${M[1]}px`
                    },
                    children: L == null ? void 0 : L.map( (se, ne) => this.renderTotals({
                        total: se,
                        index: ne
                    }))
                })]
            }), React.createElement("tbody", {
                children: P.map( (se, ne) => this.defaultRenderRow({
                    row: se,
                    index: ne,
                    inFixedNthColumn: !0,
                    rowHeights: O
                }))
            }), i && a && React.createElement("tfoot", {
                children: React.createElement("tr", {
                    children: L == null ? void 0 : L.map( (se, ne) => this.renderTotals({
                        total: se,
                        index: ne
                    }))
                })
            })]
        })
          , B = r.map( (se, ne) => this.defaultRenderRow({
            row: se,
            index: ne,
            inFixedNthColumn: !1
        }))
          , H = s ? React.createElement("div", {
            className: Vt.Footer,
            children: s
        }) : null
          , q = v ? React.createElement(Qd, {
            type: "table",
            ...v
        }) : null
          , W = a ? null : T
          , V = a ? React.createElement("tfoot", {
            children: T
        }) : null
          , $ = se => l ? null : React.createElement(Cie, {
            columnVisibilityData: y,
            isScrolledFarthestLeft: b,
            isScrolledFarthestRight: k,
            navigateTableLeft: this.navigateTable("left"),
            navigateTableRight: this.navigateTable("right"),
            fixedFirstColumns: C,
            setRef: ne => {
                se === "header" ? this.headerNav = ne : se === "sticky" && (this.stickyNav = ne)
            }
        })
          , Q = p ? React.createElement(ZO, {
            children: React.createElement("div", {
                className: Vt.StickyHeaderWrapper,
                role: "presentation",
                children: React.createElement(pb, {
                    boundingElement: this.dataTable.current,
                    onStickyChange: se => {
                        this.changeHeadingFocus(),
                        this.stickyHeaderActive = se
                    }
                    ,
                    children: se => {
                        const ne = G(Vt.StickyHeaderInner, se && Vt["StickyHeaderInner-isSticky"])
                          , Y = G(Vt.StickyHeaderTable, !b && Vt.separate);
                        return React.createElement("div", {
                            className: ne,
                            children: [React.createElement("div", {
                                children: $("sticky")
                            }), React.createElement("table", {
                                className: Y,
                                ref: this.stickyTable,
                                children: React.createElement("thead", {
                                    children: React.createElement("tr", {
                                        className: Vt.StickyTableHeadingsRow,
                                        children: n.map( (ue, ge) => this.renderHeading({
                                            heading: ue,
                                            headingIndex: ge,
                                            inFixedNthColumn: !!(ge <= C - 1 && C),
                                            inStickyHeader: !0
                                        }))
                                    })
                                })
                            })]
                        })
                    }
                })
            })
        }) : null;
        return React.createElement("div", {
            className: _,
            ref: this.dataTable,
            children: [Q, $("header"), React.createElement("div", {
                className: A,
                children: [React.createElement("div", {
                    className: Vt.ScrollContainer,
                    ref: this.scrollContainer,
                    children: [React.createElement(Ni, {
                        event: "resize",
                        handler: this.handleResize
                    }), React.createElement(Ni, {
                        capture: !0,
                        passive: !0,
                        event: "scroll",
                        handler: this.scrollListener
                    }), z, React.createElement("table", {
                        className: Vt.Table,
                        ref: this.table,
                        children: [React.createElement("thead", {
                            children: [w, W]
                        }), React.createElement("tbody", {
                            children: B
                        }), V]
                    })]
                }), q, H]
            })]
        })
    }
    fixedFirstColumns() {
        const {hasFixedFirstColumn: n, fixedFirstColumns: i=0, headings: a} = this.props
          , r = n && !i ? 1 : i;
        return r >= a.length ? 0 : r
    }
}
function UGe(e) {
    const t = at();
    return React.createElement(Aie, {
        ...e,
        i18n: t
    })
}
const xie = 7;
function _ie(e, t, n=0) {
    const i = new Date(t,e,1)
      , a = i.getDay()
      , r = [[]];
    let s = r[0]
      , l = i;
    const c = YO(n);
    for (let d = 0; d < c.indexOf(a); d++)
        s.push(null);
    for (; l.getMonth() === e; )
        s.length === xie && (s = [],
        r.push(s)),
        s.push(l),
        l = new Date(t,e,l.getDate() + 1);
    for (; s.length < 7; )
        s.push(null);
    return r
}
function wie(e, t) {
    if (e == null)
        return !1;
    const {start: n, end: i} = t;
    return !!(n && e > n && i && e < i)
}
function Nie(e, t) {
    if (e == null)
        return !1;
    const {start: n, end: i} = t;
    return !!(n && bo(n, e) || i && bo(i, e))
}
function bo(e, t) {
    return e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear()
}
function Tie(e, t) {
    if (e == null)
        return {
            start: t,
            end: t
        };
    const {start: n, end: i} = e;
    return i && (gf(n, i) || iu(n, i)) ? {
        start: t,
        end: t
    } : n ? iu(t, n) ? {
        start: t,
        end: t
    } : {
        start: n,
        end: t
    } : i ? iu(t, i) ? {
        start: t,
        end: i
    } : {
        start: n || i,
        end: t
    } : {
        start: t,
        end: t
    }
}
function yL(e) {
    return e === 11 ? 0 : e + 1
}
function bL(e, t) {
    return e === 11 ? t + 1 : t
}
function Pie(e) {
    return e === 0 ? 11 : e - 1
}
function Iie(e, t) {
    return e === 0 ? t - 1 : t
}
function gf(e, t) {
    return e.getTime() > t.getTime()
}
function iu(e, t) {
    return e.getTime() < t.getTime()
}
function Mp(e, t) {
    return t.some(n => e.getTime() === n.getTime())
}
const Lie = [0, 1, 2, 3, 4, 5, 6];
function YO(e) {
    const t = [...Lie];
    return [...t.splice(e), ...t]
}
function Kp(e) {
    switch (e) {
    case 0:
        return "january";
    case 1:
        return "february";
    case 2:
        return "march";
    case 3:
        return "april";
    case 4:
        return "may";
    case 5:
        return "june";
    case 6:
        return "july";
    case 7:
        return "august";
    case 8:
        return "september";
    case 9:
        return "october";
    case 10:
        return "november";
    case 11:
        return "december"
    }
}
function kL(e) {
    switch (e) {
    case 0:
        return "sunday";
    case 1:
        return "monday";
    case 2:
        return "tuesday";
    case 3:
        return "wednesday";
    case 4:
        return "thursday";
    case 5:
        return "friday";
    case 6:
        return "saturday"
    }
}
var Un = {
    DatePicker: "Polaris-DatePicker",
    MonthLayout: "Polaris-DatePicker__MonthLayout",
    MonthContainer: "Polaris-DatePicker__MonthContainer",
    Month: "Polaris-DatePicker__Month",
    DayCell: "Polaris-DatePicker__DayCell",
    "DayCell-inRange": "Polaris-DatePicker__DayCell--inRange",
    Day: "Polaris-DatePicker__Day",
    "Day-inRange": "Polaris-DatePicker__Day--inRange",
    "Day-selected": "Polaris-DatePicker__Day--selected",
    "Day-disabled": "Polaris-DatePicker__Day--disabled",
    EmptyDayCell: "Polaris-DatePicker__EmptyDayCell",
    Weekday: "Polaris-DatePicker__Weekday",
    Header: "Polaris-DatePicker__Header",
    Title: "Polaris-DatePicker__Title",
    "Day-firstInRange": "Polaris-DatePicker__Day--firstInRange",
    "Day-hasRange": "Polaris-DatePicker__Day--hasRange",
    "Day-hoverRight": "Polaris-DatePicker__Day--hoverRight",
    "Day-lastInRange": "Polaris-DatePicker__Day--lastInRange",
    Week: "Polaris-DatePicker__Week"
};
const Fie = React.memo(function({label: t, title: n, current: i}) {
    return React.createElement("th", {
        "aria-label": t,
        scope: "col",
        className: Un.Weekday,
        children: React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            alignment: "center",
            fontWeight: i ? "bold" : "regular",
            breakWord: !1,
            tone: i ? void 0 : "subdued",
            children: n
        })
    })
})
  , SL = React.memo(function({day: t, focused: n, onClick: i, onHover: a=hC, onFocus: r=hC, selected: s, inRange: l, inHoveringRange: c, disabled: d, lastDayOfMonth: p, isLastSelectedDay: f, isFirstSelectedDay: v, isHoveringRight: g, rangeIsDifferent: y, weekday: b, selectedAccessibilityLabelPrefix: k}) {
    const C = at()
      , x = React.useRef(null)
      , A = p || t;
    if (React.useEffect( () => {
        n && x.current && x.current.focus()
    }
    , [n]),
    !t)
        return React.createElement("td", {
            className: Un.EmptyDayCell,
            onMouseOver: () => a(A)
        });
    const _ = i && !d ? i.bind(null, t) : hC
      , w = bo(new Date, t)
      , T = G(Un.DayCell, s && Un["DayCell-selected"], (l || c) && !d && Un["DayCell-inRange"], f && Un["DayCell-lastInRange"], v && Un["DayCell-firstInRange"], g && Un["DayCell-hoverRight"], y && Un["DayCell-hasRange"])
      , P = G(Un.Day, s && Un["Day-selected"], d && Un["Day-disabled"], (l || c) && !d && Un["Day-inRange"], f && Un["Day-lastInRange"], v && Un["Day-firstInRange"], g && Un["Day-hoverRight"], y && Un["Day-hasRange"])
      , I = t.getDate()
      , L = (n || s || w || I === 1) && !d ? 0 : -1
      , R = [s && k ? `${k} ` : "", `${w ? C.translate("Polaris.DatePicker.today") : ""}`, `${b || ""} `, `${C.translate(`Polaris.DatePicker.months.${Kp(t.getMonth())}`)} `, `${I} `, `${t.getFullYear()}`].join("");
    return React.createElement("td", {
        className: T,
        children: React.createElement("button", {
            onFocus: () => r(t),
            type: "button",
            ref: x,
            tabIndex: L,
            className: P,
            onMouseOver: () => a(A),
            onClick: _,
            "aria-label": R,
            "aria-disabled": d,
            "aria-pressed": s,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodySm",
                alignment: "center",
                breakWord: !1,
                fontWeight: w ? "bold" : "regular",
                children: I
            })
        })
    })
});
function hC() {}
function CL({focusedDate: e, selected: t, hoverDate: n, disableDatesBefore: i, disableDatesAfter: a, disableSpecificDates: r, allowRange: s, onChange: l=gC, onHover: c=gC, onFocus: d=gC, month: p, year: f, weekStartsOn: v, accessibilityLabelPrefixes: g}) {
    const y = at()
      , b = s ? Eie : () => !1
      , k = new Date
      , C = k.getMonth() === p && k.getFullYear() === f
      , x = React.useMemo( () => _ie(p, f, v), [p, v, f])
      , A = YO(v).map(L => React.createElement(Fie, {
        title: y.translate(`Polaris.DatePicker.daysAbbreviated.${kL(L)}`),
        label: I(L),
        current: C && new Date().getDay() === L
    }, L))
      , _ = React.useCallback(L => {
        l(Tie(s ? t : void 0, L))
    }
    , [s, l, t])
      , w = React.useMemo( () => new Date(f,p + 1,0), [p, f]);
    function T(L, R) {
        if (L == null)
            return React.createElement(SL, {
                onHover: c,
                lastDayOfMonth: w
            }, R);
        const D = i && iu(L, i) || a && gf(L, a) || r && Mp(L, r)
          , M = s && t && Rie(L, t)
          , O = s && t && (!bo(t.start, t.end) && Mie(L, t) || n && bo(t.start, t.end) && gf(n, t.start) && bo(L, n) && !M)
          , z = !(t && bo(t.start, t.end))
          , B = n && iu(L, n)
          , [H,q] = g;
        let W;
        return s && M || !s && H ? W = H : s && O && (W = q),
        React.createElement(SL, {
            selectedAccessibilityLabelPrefix: W,
            weekday: I(R),
            focused: e != null && bo(L, e),
            day: L,
            onFocus: d,
            onClick: _,
            onHover: c,
            selected: t != null && Nie(L, t),
            inRange: t != null && wie(L, t),
            disabled: D,
            inHoveringRange: t != null && n != null && b(L, t, n),
            isLastSelectedDay: O,
            isFirstSelectedDay: M,
            isHoveringRight: B,
            rangeIsDifferent: z
        }, R)
    }
    const P = x.map( (L, R) => React.createElement("tr", {
        className: Un.Week,
        children: L.map(T)
    }, R));
    return React.createElement("div", {
        className: Un.MonthContainer,
        children: React.createElement("table", {
            role: "grid",
            className: Un.Month,
            children: [React.createElement("caption", {
                className: Un.Title,
                children: React.createElement(ee, {
                    as: "span",
                    variant: "bodyMd",
                    alignment: "center",
                    fontWeight: C ? "bold" : "medium",
                    children: [y.translate(`Polaris.DatePicker.months.${Kp(p)}`), " ", f]
                })
            }), React.createElement("thead", {
                children: React.createElement("tr", {
                    className: Un.WeekHeadings,
                    children: A
                })
            }), React.createElement("tbody", {
                children: P
            })]
        })
    });
    function I(L) {
        return y.translate(`Polaris.DatePicker.days.${kL(L)}`)
    }
}
function gC() {}
function Eie(e, t, n) {
    if (e == null)
        return !1;
    const {start: i, end: a} = t;
    return !!(bo(i, a) && e > i && e <= n)
}
function Mie(e, t) {
    if (e == null)
        return !1;
    const {end: n} = t;
    return !!(n && bo(n, e))
}
function Rie(e, t) {
    if (e == null)
        return !1;
    const {start: n} = t;
    return !!(n && bo(n, e))
}
function $Ge({id: e, selected: t, month: n, year: i, allowRange: a, multiMonth: r, disableDatesBefore: s, disableDatesAfter: l, disableSpecificDates: c, weekStartsOn: d=0, dayAccessibilityLabelPrefix: p, onMonthChange: f, onChange: v=jie}) {
    const g = at()
      , [y,b] = React.useState(void 0)
      , [k,C] = React.useState(void 0);
    React.useEffect( () => {
        C(void 0)
    }
    , [t]);
    const x = React.useCallback(J => {
        C(J)
    }
    , [])
      , A = React.useCallback(J => {
        f && f(J.getMonth(), J.getFullYear()),
        b(J),
        C(J)
    }
    , [f])
      , _ = React.useCallback(J => {
        const {end: X} = J;
        b(X),
        C(new Date(X)),
        v(J)
    }
    , [v])
      , w = React.useCallback( (J, X) => {
        f && (C(void 0),
        f(J, X))
    }
    , [f])
      , T = React.useCallback(J => {
        b(J)
    }
    , [])
      , P = React.useCallback(J => {
        const {key: X} = J
          , se = vC(t)
          , ne = k || se && se.start;
        if (ne != null) {
            if (X === "ArrowUp") {
                const Y = new Date(ne);
                Y.setDate(ne.getDate() - 7),
                s && iu(Y, s) || c && Mp(Y, c) || A(Y)
            }
            if (X === "ArrowDown") {
                const Y = new Date(ne);
                Y.setDate(ne.getDate() + 7),
                l && gf(Y, l) || c && Mp(Y, c) || A(Y)
            }
            if (X === "ArrowRight") {
                const Y = new Date(ne);
                Y.setDate(ne.getDate() + 1),
                l && gf(Y, l) || c && Mp(Y, c) || A(Y)
            }
            if (X === "ArrowLeft") {
                const Y = new Date(ne);
                Y.setDate(ne.getDate() - 1),
                s && iu(Y, s) || c && Mp(Y, c) || A(Y)
            }
        }
    }
    , [l, s, c, k, t, A])
      , I = bL(n, i)
      , L = yL(n)
      , R = bL(L, I)
      , D = yL(L)
      , M = Iie(n, i)
      , O = Pie(n)
      , z = g.translate(`Polaris.DatePicker.months.${Kp(O)}`)
      , B = r ? g.translate(`Polaris.DatePicker.months.${Kp(D)}`) : g.translate(`Polaris.DatePicker.months.${Kp(L)}`)
      , H = r ? R : I
      , q = React.useMemo( () => vC(t), [t])
      , W = a ? g.translate("Polaris.DatePicker.start") : p
      , V = g.translate("Polaris.DatePicker.end")
      , $ = [W, V]
      , Q = r ? React.createElement(CL, {
        onFocus: x,
        focusedDate: k,
        month: L,
        year: I,
        selected: q,
        hoverDate: y,
        onChange: _,
        onHover: T,
        disableDatesBefore: s,
        disableDatesAfter: l,
        disableSpecificDates: c,
        allowRange: a,
        weekStartsOn: d,
        accessibilityLabelPrefixes: $
    }) : null
      , K = G(Un.DatePicker);
    return React.createElement("div", {
        id: e,
        className: K,
        onKeyDown: Die,
        onKeyUp: P,
        children: [React.createElement("div", {
            className: Un.Header,
            children: [React.createElement(nt, {
                variant: "tertiary",
                accessibilityLabel: g.translate("Polaris.DatePicker.previousMonth", {
                    previousMonthName: z,
                    showPreviousYear: M
                }),
                onClick: () => w(O, M),
                icon: "arrow-left"
            }), React.createElement(nt, {
                variant: "tertiary",
                accessibilityLabel: g.translate("Polaris.DatePicker.nextMonth", {
                    nextMonth: B,
                    nextYear: H
                }),
                onClick: () => w(L, I),
                icon: "arrow-right"
            })]
        }), React.createElement("div", {
            className: Un.MonthLayout,
            children: [React.createElement(CL, {
                onFocus: x,
                focusedDate: k,
                month: n,
                year: i,
                selected: vC(t),
                hoverDate: y,
                onChange: _,
                onHover: T,
                disableDatesBefore: s,
                disableDatesAfter: l,
                disableSpecificDates: c,
                allowRange: a,
                weekStartsOn: d,
                accessibilityLabelPrefixes: $
            }), Q]
        })]
    })
}
function jie() {}
function Die(e) {
    const {key: t} = e;
    (t === "ArrowUp" || t === "ArrowDown" || t === "ArrowLeft" || t === "ArrowRight") && (e.preventDefault(),
    e.stopPropagation())
}
function vC(e) {
    return e instanceof Date ? {
        start: e,
        end: e
    } : e
}
var Fg = {
    DescriptionList: "Polaris-DescriptionList",
    Term: "Polaris-DescriptionList__Term",
    spacingTight: "Polaris-DescriptionList--spacingTight",
    Description: "Polaris-DescriptionList__Description"
};
function HGe({items: e, gap: t="loose"}) {
    const n = e.reduce( (a, {term: r, description: s}, l) => [...a, React.createElement("dt", {
        className: Fg.Term,
        children: React.createElement(ee, {
            as: "span",
            variant: "headingSm",
            children: r
        })
    }, `dt${l}`), React.createElement("dd", {
        className: Fg.Description,
        children: s
    }, `dd${l}`)], [])
      , i = G(Fg.DescriptionList, t === "tight" && Fg.spacingTight);
    return React.createElement("dl", {
        className: i,
        children: n
    })
}
var Oie = {
    Divider: "Polaris-Divider"
};
const Bie = ({borderColor: e="border-secondary", borderWidth: t="025"}) => {
    const n = e === "transparent" ? e : `var(--p-color-${e})`;
    return React.createElement("hr", {
        className: Oie.Divider,
        style: {
            borderBlockStart: `var(--p-border-width-${t}) solid ${n}`
        }
    })
}
;
function JO(e="") {
    const t = e.toLowerCase();
    return t.charAt(0).toUpperCase() + t.slice(1)
}
const zie = ["dragover", "dragenter", "drop"];
function Vie(e, t) {
    return e.type === "application/x-moz-file" || $ie(e, t)
}
function Uie(e) {
    if (Hie(e) && e.dataTransfer) {
        const t = e.dataTransfer;
        if (t.files && t.files.length)
            return Array.from(t.files);
        if (t.items && t.items.length)
            return Array.from(t.items)
    } else if (Wie(e) && e.target.files)
        return Array.from(e.target.files);
    return []
}
function $ie(e, t) {
    if (e && t) {
        const n = e.name || ""
          , i = e.type || ""
          , a = i.replace(/\/.*$/, "");
        return (Array.isArray(t) ? t : t.split(",")).some(s => {
            const l = s.trim();
            return l.startsWith(".") ? n.toLowerCase().endsWith(l.toLowerCase()) : l.endsWith("/*") ? a === l.replace(/\/.*$/, "") : i === l
        }
        )
    }
    return !0
}
function Hie(e) {
    return zie.indexOf(e.type) > 0
}
function Wie(e) {
    return Object.prototype.hasOwnProperty.call(e, "target")
}
const XO = !0;
function eB(e) {
    return e ? "allowMultiple" : "single"
}
const tB = React.createContext({
    disabled: !1,
    focused: !1,
    size: "extraLarge",
    type: "file",
    measuring: !1,
    allowMultiple: XO
});
var mo = {
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
  , nd = {
    FileUpload: "Polaris-DropZone-FileUpload",
    large: "Polaris-DropZone-FileUpload--large",
    small: "Polaris-DropZone-FileUpload--small",
    UploadIcon: "Polaris-DropZone-FileUpload__UploadIcon",
    disabled: "Polaris-DropZone-FileUpload--disabled"
};
function qie(e) {
    const t = at()
      , {size: n, measuring: i, type: a, disabled: r, allowMultiple: s} = React.useContext(tB)
      , l = JO(a)
      , c = eB(s)
      , {actionTitle: d=t.translate(`Polaris.DropZone.${c}.actionTitle${l}`), actionHint: p} = e
      , f = React.createElement(nt, {
        disabled: r,
        icon: React.createElement(Fe, {
            type: "plus"
        }),
        children: d
    })
      , v = G(nd.FileUpload, i && nd.measuring, n === "large" && nd.large, n === "small" && nd.small)
      , g = p && React.createElement(ee, {
        variant: "bodySm",
        as: "p",
        tone: "subdued",
        children: p
    });
    let y;
    switch (n) {
    case "large":
    case "medium":
        y = React.createElement(ft, {
            inlineAlign: "center",
            gap: "200",
            children: [f, g]
        });
        break;
    case "small":
        y = React.createElement("div", {
            className: G(nd.UploadIcon, r && nd.disabled),
            children: React.createElement(Fe, {
                type: "upload",
                tone: "legacy-inherit"
            })
        });
        break
    }
    return React.createElement("div", {
        className: v,
        children: y
    })
}
const Gie = function({dropOnPage: t, label: n, labelAction: i, labelHidden: a, children: r, disabled: s=!1, outline: l=!0, accept: c, active: d, overlay: p=!0, allowMultiple: f=XO, overlayText: v, errorOverlayText: g, id: y, type: b="file", onClick: k, error: C, openFileDialog: x, variableHeight: A, onFileDialogClose: _, customValidator: w, onDrop: T, onDropAccepted: P, onDropRejected: I, onDragEnter: L, onDragOver: R, onDragLeave: D}) {
    const M = React.useRef(null)
      , O = React.useRef(null)
      , z = React.useRef([])
      , B = React.useCallback(ji( () => {
        if (!M.current)
            return;
        if (A) {
            ne(!1);
            return
        }
        let Me = "large";
        const Ze = M.current.getBoundingClientRect().width;
        Ze < 100 ? Me = "small" : Ze < 160 && (Me = "medium"),
        X(Me),
        se && ne(!1)
    }
    , 20, {
        trailing: !0
    }), [])
      , [H,q] = React.useState(!1)
      , [W,V] = React.useState(!1)
      , {value: $, setTrue: Q, setFalse: K} = Di(!1)
      , [J,X] = React.useState("large")
      , [se,ne] = React.useState(!0)
      , Y = at()
      , ue = React.useCallback(Me => {
        const Ze = Uie(Me)
          , Ct = []
          , Nt = [];
        return Me.type !== "drop" && (c != null && c.includes(".")) ? Ct.push(...Ze) : Array.from(Ze).forEach(Ut => {
            Me.type !== "dragenter" && !Ut.name || !Vie(Ut, c) || w && !w(Ut) ? Nt.push(Ut) : Ct.push(Ut)
        }
        ),
        f || (Ct.splice(1, Ct.length),
        Nt.push(...Ct.slice(1))),
        {
            files: Ze,
            acceptedFiles: Ct,
            rejectedFiles: Nt
        }
    }
    , [c, f, w])
      , ge = React.useCallback(Me => {
        if (Eg(Me),
        s)
            return;
        const {files: Ze, acceptedFiles: Ct, rejectedFiles: Nt} = ue(Me);
        z.current = [],
        q(!1),
        V(Nt.length > 0),
        T && T(Ze, Ct, Nt),
        P && Ct.length && P(Ct),
        I && Nt.length && I(Nt),
        Me.target && "value"in Me.target && (Me.target.value = "")
    }
    , [s, ue, T, P, I])
      , de = React.useCallback(Me => {
        if (Eg(Me),
        s || (Me.target && !z.current.includes(Me.target) && z.current.push(Me.target),
        H))
            return;
        const {rejectedFiles: Ze} = ue(Me);
        q(!0),
        V(Ze.length > 0),
        L && L()
    }
    , [s, H, ue, L])
      , ve = React.useCallback(Me => {
        Eg(Me),
        !s && R && R()
    }
    , [s, R])
      , Le = React.useCallback(Me => {
        Me.preventDefault(),
        !s && (z.current = z.current.filter(Ze => {
            const Ct = t && !Zl ? document : M.current;
            return Ze !== Me.target && Ct && Ct.contains(Ze)
        }
        ),
        !(z.current.length > 0) && (q(!1),
        V(!1),
        D && D()))
    }
    , [t, s, D])
      , Ce = t && !Zl ? document : M.current;
    Si("drop", ge, Ce),
    Si("dragover", ve, Ce),
    Si("dragenter", de, Ce),
    Si("dragleave", Le, Ce),
    Si("resize", B, Zl ? null : window),
    Vf( () => {
        B()
    }
    );
    const Ae = React.useId()
      , re = y ?? Ae
      , le = JO(b)
      , ye = eB(f)
      , Ee = v === void 0 ? Y.translate(`Polaris.DropZone.${ye}.overlayText${le}`) : v
      , Qe = g === void 0 ? Y.translate(`Polaris.DropZone.errorOverlayText${le}`) : g
      , De = n || Y.translate(`Polaris.DropZone.${ye}.label${le}`)
      , Ue = n ? a : !0
      , Ye = G(mo.DropZone, l && mo.hasOutline, !l && mo.noOutline, $ && mo.focused, (d || H) && mo.isDragging, s && mo.isDisabled, (W || C) && mo.hasError, !A && mo[$t("size", J)], se && mo.measuring)
      , Mt = (d || H) && !W && !C && p && Se("upload", Ee)
      , Xe = H && (W || C) && Se("alert-circle", Qe, "critical")
      , it = React.useMemo( () => ({
        disabled: s,
        focused: $,
        size: J,
        type: b || "file",
        measuring: se,
        allowMultiple: f
    }), [s, $, se, J, b, f])
      , ke = React.useCallback( () => {
        O.current && O.current.click()
    }
    , [O])
      , $e = React.useCallback( () => {
        ke(),
        _ == null || _()
    }
    , [ke, _]);
    function Se(Me, Ze, Ct) {
        return React.createElement("div", {
            className: mo.Overlay,
            children: React.createElement(ft, {
                gap: "200",
                inlineAlign: "center",
                children: [J === "small" && React.createElement(Fe, {
                    type: Me,
                    tone: Ct
                }), (J === "medium" || J === "large") && React.createElement(ee, {
                    variant: "bodySm",
                    as: "p",
                    fontWeight: "bold",
                    children: Ze
                })]
            })
        })
    }
    function Re(Me) {
        if (!s)
            return k ? k(Me) : ke()
    }
    return React.useEffect( () => {
        x && $e()
    }
    , [x, $e]),
    React.createElement(tB.Provider, {
        value: it,
        children: React.createElement(Uf, {
            id: re,
            label: De,
            action: i,
            labelHidden: Ue,
            children: React.createElement("div", {
                ref: M,
                className: Ye,
                "aria-disabled": s,
                onClick: Re,
                onDragStart: Eg,
                children: [Mt, Xe, React.createElement(ee, {
                    variant: "bodySm",
                    as: "span",
                    visuallyHidden: !0,
                    children: React.createElement("input", {
                        id: re,
                        accept: c,
                        disabled: s,
                        multiple: f,
                        onChange: ge,
                        onFocus: Q,
                        onBlur: K,
                        type: "file",
                        ref: O,
                        autoComplete: "off"
                    })
                }), React.createElement("div", {
                    className: mo.Container,
                    children: r
                })]
            })
        })
    })
};
function Eg(e) {
    e.preventDefault(),
    e.stopPropagation()
}
Gie.FileUpload = qie;
var Kie = "data:image/svg+xml,%3csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3e%3cpath fill-rule='evenodd' d='M41.87 24a17.87 17.87 0 11-35.74 0 17.87 17.87 0 0135.74 0zm-3.15 18.96a24 24 0 114.24-4.24L59.04 54.8a3 3 0 11-4.24 4.24L38.72 42.96z' fill='%238C9196'/%3e%3c/svg%3e";
function D_({title: e, description: t, withIllustration: n}) {
    const a = at().translate("Polaris.EmptySearchResult.altText")
      , r = t ? React.createElement("p", {
        children: t
    }) : null
      , s = n ? React.createElement(Tn, {
        alt: a,
        source: Kie,
        draggable: !1
    }) : null;
    return React.createElement(Zr, {
        alignment: "center",
        vertical: !0,
        children: [s, React.createElement(ee, {
            variant: "headingLg",
            as: "p",
            children: e
        }), React.createElement(ee, {
            tone: "subdued",
            as: "span",
            children: r
        })]
    })
}
var Lc = {
    ImageContainer: "Polaris-EmptyState__ImageContainer",
    Image: "Polaris-EmptyState__Image",
    loaded: "Polaris-EmptyState--loaded",
    imageContained: "Polaris-EmptyState--imageContained",
    SkeletonImageContainer: "Polaris-EmptyState__SkeletonImageContainer",
    SkeletonImage: "Polaris-EmptyState__SkeletonImage"
};
function Ks({children: e, heading: t, image: n, largeImage: i, imageContained: a, fullWidth: r=!1, action: s, secondaryAction: l, footerContent: c}) {
    const [d,p] = React.useState(!1)
      , f = React.useRef(null);
    React.useEffect( () => {
        var R;
        (R = f.current) != null && R.complete && p(!0)
    }
    , []);
    const v = G(Lc.Image, d && Lc.loaded, a && Lc.imageContained)
      , g = i ? React.createElement(Tn, {
        alt: "",
        role: "presentation",
        ref: f,
        source: i,
        className: v,
        sourceSet: [{
            source: n,
            descriptor: "568w"
        }, {
            source: i,
            descriptor: "1136w"
        }],
        sizes: "(max-width: 568px) 60vw",
        onLoad: () => p(!0)
    }) : React.createElement(Tn, {
        alt: "",
        role: "presentation",
        ref: f,
        className: v,
        source: n,
        onLoad: () => p(!0)
    })
      , y = G(Lc.SkeletonImage, d && Lc.loaded)
      , b = G(Lc.ImageContainer, !d && Lc.SkeletonImageContainer)
      , k = React.createElement("div", {
        className: b,
        children: [g, React.createElement("div", {
            className: y
        })]
    })
      , C = l ? Qr(l, {}) : null
      , x = c ? React.createElement(he, {
        paddingBlockStart: "400",
        children: React.createElement(ee, {
            as: "span",
            alignment: "center",
            variant: "bodySm",
            children: c
        })
    }) : null
      , A = s ? Qr(s, {
        variant: "primary",
        size: "medium"
    }) : null
      , _ = t ? React.createElement(ee, {
        variant: "headingMd",
        as: "p",
        alignment: "center",
        children: t
    }) : null
      , w = e ? React.createElement(ee, {
        as: "span",
        alignment: "center",
        variant: "bodySm",
        children: e
    }) : null
      , T = t && e ? React.createElement(he, {
        paddingBlockEnd: "150",
        children: _
    }) : null
      , P = _ || e ? React.createElement(he, {
        paddingBlockEnd: "400",
        children: [T || _, w]
    }) : null
      , I = A || C ? React.createElement(Te, {
        align: "center",
        gap: "200",
        children: [C, A]
    }) : null
      , L = P || I || x ? React.createElement(he, {
        maxWidth: r ? "100%" : "400px",
        children: React.createElement(ft, {
            inlineAlign: "center",
            children: [P, I, x]
        })
    }) : null;
    return React.createElement(he, {
        paddingInlineStart: "0",
        paddingInlineEnd: "0",
        paddingBlockStart: "500",
        paddingBlockEnd: "1600",
        children: React.createElement(ft, {
            inlineAlign: "center",
            children: [k, L]
        })
    })
}
var Fc = {
    ExceptionList: "Polaris-ExceptionList",
    Item: "Polaris-ExceptionList__Item",
    Icon: "Polaris-ExceptionList__Icon",
    statusBase: "Polaris-ExceptionList--statusBase",
    statusSubdued: "Polaris-ExceptionList--statusSubdued",
    statusWarning: "Polaris-ExceptionList--statusWarning",
    statusCritical: "Polaris-ExceptionList--statusCritical",
    Bullet: "Polaris-ExceptionList__Bullet",
    Title: "Polaris-ExceptionList__Title",
    Description: "Polaris-ExceptionList__Description"
}
  , Qie = {
    Truncate: "Polaris-Truncate"
};
function nB({children: e}) {
    return React.createElement("span", {
        className: Qie.Truncate,
        children: e
    })
}
function WGe({items: e, variant: t="base"}) {
    const n = e.map( (i, a) => {
        const {status: r="subdued", icon: s, title: l, description: c, truncate: d=!1} = i
          , p = G(Fc.Item, r && Fc[$t("status", r)])
          , f = s ? React.createElement(Fe, {
            type: s,
            tone: "legacy-inherit"
        }) : React.createElement("span", {
            className: Fc.Bullet
        })
          , v = l && React.createElement("span", {
            className: Fc.Title,
            children: l
        })
          , g = c && React.createElement("span", {
            className: Fc.Description,
            children: c
        })
          , y = d ? nB : React.Fragment
          , b = React.createElement(y, {
            children: [v, g]
        });
        return React.createElement("li", {
            className: p,
            children: [React.createElement("span", {
                className: Fc.Icon,
                children: f
            }), t === "small" ? React.createElement(ee, {
                variant: "bodySm",
                as: "span",
                children: b
            }) : b]
        }, a)
    }
    );
    return React.createElement("ul", {
        className: Fc.ExceptionList,
        children: n
    })
}
var qa = {
    Container: "Polaris-Filters__Container",
    SortWrapper: "Polaris-Filters__SortWrapper",
    SearchField: "Polaris-Filters__SearchField",
    FiltersWrapper: "Polaris-Filters__FiltersWrapper",
    hideQueryField: "Polaris-Filters--hideQueryField",
    FiltersInner: "Polaris-Filters__FiltersInner",
    AddFilter: "Polaris-Filters__AddFilter",
    FiltersWrapperWithAddButton: "Polaris-Filters__FiltersWrapperWithAddButton",
    AddFilterActivatorMultiple: "Polaris-Filters__AddFilterActivatorMultiple",
    FiltersStickyArea: "Polaris-Filters__FiltersStickyArea",
    ClearAll: "Polaris-Filters__ClearAll",
    MultiplePinnedFilterClearAll: "Polaris-Filters__MultiplePinnedFilterClearAll"
};
function Zie({onChange: e, onClear: t, onFocus: n, onBlur: i, focused: a, value: r, placeholder: s, disabled: l, borderlessQueryField: c, loading: d}) {
    const p = React.useId()
      , {mdUp: f} = Wn();
    function v(y) {
        e(y ?? r)
    }
    function g() {
        t ? t() : e("")
    }
    return React.createElement(To, {
        id: p,
        value: r,
        onChange: v,
        onFocus: n,
        onBlur: i,
        onClearButtonClick: g,
        autoComplete: "off",
        placeholder: s,
        disabled: l,
        variant: c ? "borderless" : "inherit",
        size: f ? "slim" : "medium",
        prefix: f ? React.createElement(Fe, {
            type: "search",
            tone: "legacy-inherit"
        }) : void 0,
        focused: a,
        label: s,
        labelHidden: !0,
        clearButton: !0,
        loading: d
    })
}
var Mr = {
    FilterButton: "Polaris-Filters-FilterPill__FilterButton",
    focusedFilterButton: "Polaris-Filters-FilterPill--focusedFilterButton",
    ActiveFilterButton: "Polaris-Filters-FilterPill__ActiveFilterButton",
    PlainButton: "Polaris-Filters-FilterPill__PlainButton",
    ToggleButton: "Polaris-Filters-FilterPill__ToggleButton",
    clearButton: "Polaris-Filters-FilterPill--clearButton",
    IconWrapper: "Polaris-Filters-FilterPill__IconWrapper",
    PopoverWrapper: "Polaris-Filters-FilterPill__PopoverWrapper",
    ClearButtonWrapper: "Polaris-Filters-FilterPill__ClearButtonWrapper"
};
function Yie({unsavedChanges: e=!1, filterKey: t, label: n, filter: i, disabled: a, hideClearButton: r, selected: s, initialActive: l, disclosureZIndexOverride: c, closeOnChildOverlayClick: d, onRemove: p, onClick: f}) {
    const v = at()
      , g = React.useRef(null)
      , {value: y, setTrue: b, setFalse: k} = Di(!1)
      , [C,x] = React.useState(l);
    React.useEffect( () => {
        var q, W;
        const B = g.current;
        if (!B || !C)
            return;
        const H = (q = B.parentElement) == null ? void 0 : q.parentElement;
        H && ((W = H.scroll) == null || W.call(H, {
            left: B.offsetLeft
        }))
    }
    , [g, C]);
    const A = React.useCallback( () => {
        i && x(B => !B),
        f && f(t)
    }
    , [i, t, f])
      , _ = React.useCallback( () => {
        A(),
        s || p == null || p(t)
    }
    , [p, s, t, A])
      , w = () => {
        p && p(t),
        x(!1)
    }
      , T = G(Mr.FilterButton, s && Mr.ActiveFilterButton, C && Mr.FocusFilterButton, y && Mr.focusedFilterButton)
      , P = G(Mr.PlainButton, Mr.clearButton)
      , I = G(Mr.PlainButton, Mr.ToggleButton)
      , L = s ? null : React.createElement("div", {
        className: Mr.IconWrapper,
        children: React.createElement(Fe, {
            tone: "neutral",
            type: "chevron-down"
        })
    })
      , R = React.createElement(he, {
        paddingInlineStart: e ? "0" : "050",
        children: React.createElement(Te, {
            children: React.createElement(ee, {
                variant: "bodySm",
                as: "span",
                children: n
            })
        })
    })
      , D = e ? React.createElement(he, {
        paddingInlineEnd: "150",
        children: React.createElement(he, {
            background: "bg-fill-highlight",
            borderRadius: "050",
            width: "6px",
            minHeight: "6px"
        })
    }) : null
      , M = s ? React.createElement(Pi, {
        onClick: w,
        className: P,
        type: "button",
        "aria-label": v.translate("Polaris.FilterPill.clear"),
        children: React.createElement("div", {
            className: Mr.IconWrapper,
            children: React.createElement(Fe, {
                type: "x",
                size: "small",
                tone: "neutral"
            })
        })
    }) : null
      , O = React.createElement("div", {
        className: T,
        children: React.createElement(Te, {
            gap: "0",
            wrap: !1,
            children: [React.createElement(Pi, {
                onFocus: b,
                onBlur: k,
                onClick: A,
                className: I,
                type: "button",
                accessibilityLabel: e ? v.translate("Polaris.FilterPill.unsavedChanges", {
                    label: n
                }) : n,
                children: React.createElement(Te, {
                    wrap: !1,
                    align: "center",
                    blockAlign: "center",
                    gap: "0",
                    children: [D, R, L]
                })
            }), M]
        })
    })
      , z = !r && React.createElement("div", {
        className: Mr.ClearButtonWrapper,
        children: React.createElement(nt, {
            onClick: w,
            variant: "plain",
            disabled: !s,
            textAlign: "left",
            children: v.translate("Polaris.FilterPill.clear")
        })
    });
    return a ? null : React.createElement("div", {
        ref: g,
        children: React.createElement(Fn, {
            active: C,
            activator: O,
            onClose: _,
            preferredAlignment: "left",
            zIndexOverride: c,
            preventCloseOnChildOverlayClick: !d,
            autofocusTarget: "first-node",
            children: React.createElement("div", {
                className: Mr.PopoverWrapper,
                children: React.createElement(Fn.Section, {
                    children: React.createElement(ft, {
                        gap: "100",
                        children: [i, z]
                    })
                })
            })
        }, t)
    })
}
function Jie({filters: e, allowFiltering: t, appliedFilters: n, onClearAll: i, disabled: a, hideQueryField: r, disableFilters: s, mountedStateStyles: l, onAddFilterClick: c, closeOnChildOverlayClick: d, children: p}) {
    const f = at()
      , [v,g] = React.useState(!1)
      , y = React.useRef(!1);
    React.useEffect( () => {
        y.current = !0
    }
    );
    const b = () => g($ => !$)
      , k = () => {
        c == null || c(),
        b()
    }
      , C = n == null ? void 0 : n.map( ({key: $}) => $)
      , x = e.filter( ({pinned: $}) => $).map( ({key: $}) => $)
      , A = e.filter( ({pinned: $, key: Q}) => !!$ || (C == null ? void 0 : C.includes(Q)))
      , [_,w] = React.useState(A.map( ({key: $}) => $));
    mf(e.length, () => {
        w(A.map( ({key: $}) => $))
    }
    );
    const T = _.map($ => e.find(Q => Q.key === $)).reduce( ($, Q) => Q ? [...$, Q] : $, [])
      , P = ({key: $, onAction: Q}) => () => {
        setTimeout( () => {
            w(K => [...new Set([...K, $])]),
            Q == null || Q(),
            b()
        }
        , 0)
    }
      , I = $ => ({
        ...$,
        content: $.label,
        onAction: P($)
    })
      , L = e.filter($ => !T.some( ({key: Q}) => Q === $.key))
      , R = L.filter($ => !$.section && !$.hidden).map(I)
      , D = L.filter($ => $.section).reduce( ($, Q) => {
        const K = I(Q)
          , J = $.findIndex(X => X.title === Q.section);
        return J === -1 ? $.push({
            title: Q.section,
            items: [K]
        }) : $[J].items.push(K),
        $
    }
    , [])
      , M = T.length >= 1
      , O = () => React.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        children: React.createElement("path", {
            d: "M10.75 5.75c0-.414-.336-.75-.75-.75s-.75.336-.75.75v3.5h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5Z"
        })
    })
      , z = React.createElement("div", {
        children: React.createElement(Pi, {
            type: "button",
            className: qa.AddFilter,
            onClick: k,
            "aria-label": f.translate("Polaris.Filters.addFilter"),
            disabled: a || R.length === 0 && D.length === 0 || s,
            children: [React.createElement(ee, {
                as: "span",
                variant: "bodySm",
                tone: a ? "disabled" : "base",
                children: [f.translate("Polaris.Filters.addFilter"), " "]
            }), React.createElement(O, {})]
        })
    })
      , B = () => {
        w(x),
        i == null || i()
    }
      , H = e.some($ => !$.pinned) || e.length !== _.length
      , q = T.map( ({key: $, ...Q}) => {
        const K = n == null ? void 0 : n.find( ({key: X}) => X === $)
          , J = () => {
            w(X => X.filter(se => {
                const ne = se === $
                  , Y = x.includes(se);
                return !ne || Y
            }
            )),
            K == null || K.onRemove($)
        }
        ;
        return React.createElement(Yie, {
            ...Q,
            initialActive: y.current && !Q.pinned && !K,
            unsavedChanges: K == null ? void 0 : K.unsavedChanges,
            label: (K == null ? void 0 : K.label) || Q.label,
            filterKey: $,
            selected: C == null ? void 0 : C.includes($),
            onRemove: J,
            disabled: Q.disabled || s,
            closeOnChildOverlayClick: d
        }, $)
    }
    )
      , W = H ? React.createElement("div", {
        className: G(qa.AddFilterActivator, M && qa.AddFilterActivatorMultiple),
        children: React.createElement(Fn, {
            active: v && !a,
            activator: z,
            onClose: b,
            autofocusTarget: "first-node",
            children: React.createElement(ka, {
                actionRole: "menuitem",
                allowFiltering: t,
                filterLabel: f.translate("Polaris.ActionList.SearchField.search"),
                items: R,
                sections: D
            })
        })
    }) : null
      , V = n != null && n.length ? React.createElement("div", {
        className: G(qa.ClearAll, M && H && qa.MultiplePinnedFilterClearAll),
        children: React.createElement(nt, {
            size: "micro",
            onClick: B,
            variant: "monochromePlain",
            children: f.translate("Polaris.Filters.clearFilters")
        })
    }) : null;
    return React.createElement("div", {
        className: G(qa.FiltersWrapper, H && M && qa.FiltersWrapperWithAddButton),
        "aria-live": "polite",
        style: l,
        children: [React.createElement("div", {
            className: G(qa.FiltersInner),
            children: React.createElement("div", {
                className: G(qa.FiltersStickyArea),
                children: [q, W, V]
            })
        }), r ? React.createElement(he, {
            paddingInlineEnd: "300",
            paddingBlockStart: "200",
            paddingBlockEnd: "200",
            children: React.createElement(Te, {
                align: "start",
                blockAlign: "center",
                gap: {
                    xs: "400",
                    md: "300"
                },
                children: p
            })
        }) : null]
    })
}
const x0 = "var(--p-motion-duration-150)"
  , Tv = "-36px"
  , Xie = {
    transition: `opacity ${x0} var(--p-motion-ease)`,
    opacity: 0
}
  , eae = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    },
    exiting: {
        opacity: 0
    },
    exited: {
        opacity: 0
    },
    unmounted: {
        opacity: 0
    }
}
  , tae = {
    transition: `opacity ${x0} var(--p-motion-ease), margin ${x0} var(--p-motion-ease)`,
    opacity: 0,
    marginTop: Tv
}
  , nae = {
    entering: {
        opacity: 1,
        marginTop: 0
    },
    entered: {
        opacity: 1,
        marginTop: 0
    },
    exiting: {
        opacity: 0,
        marginTop: Tv
    },
    exited: {
        opacity: 0,
        marginTop: Tv
    },
    unmounted: {
        opacity: 0,
        marginTop: Tv
    }
};
function iae({queryValue: e, queryPlaceholder: t, focused: n, allowFilterSearch: i, filters: a, appliedFilters: r, onQueryChange: s, onQueryClear: l, onQueryBlur: c, onQueryFocus: d, onClearAll: p, children: f, disabled: v, hideFilters: g, hideQueryField: y, disableQueryField: b, borderlessQueryField: k, loading: C, disableFilters: x, mountedState: A, onAddFilterClick: _, closeOnChildOverlayClick: w, disclosureZIndexOverride: T, sortOptions: P, sortSelected: I, onSort: L, onSortKeyChange: R, onSortDirectionChange: D}) {
    const M = React.useMemo( () => P != null && P.length ? React.createElement("div", {
        className: qa.SortWrapper,
        children: React.createElement(C2, {
            choices: P,
            selected: I,
            onChange: L,
            onChangeKey: R,
            onChangeDirection: D,
            disabled: v,
            disclosureZIndexOverride: T
        })
    }) : null, [L, D, R, P, I, v, T])
      , O = g || a.length === 0
      , z = y ? null : React.createElement("div", {
        className: qa.Container,
        children: React.createElement(he, {
            padding: "200",
            children: React.createElement(Te, {
                align: "start",
                blockAlign: "center",
                gap: {
                    xs: "400",
                    md: "300"
                },
                children: [React.createElement("div", {
                    className: qa.SearchField,
                    style: A ? {
                        ...Xie,
                        ...eae[A]
                    } : void 0,
                    children: React.createElement(Zie, {
                        onChange: s,
                        onFocus: d,
                        onBlur: c,
                        onClear: l,
                        value: e,
                        placeholder: t,
                        focused: n,
                        disabled: v || b,
                        borderlessQueryField: k,
                        loading: C
                    })
                }), f || M ? React.createElement(Te, {
                    gap: "200",
                    children: [f, M]
                }) : null]
            })
        })
    })
      , B = A && !y ? {
        ...tae,
        ...nae[A]
    } : void 0
      , H = O ? null : React.createElement(Jie, {
        allowFiltering: i,
        filters: a,
        appliedFilters: r,
        onClearAll: p,
        disabled: v,
        hideQueryField: y,
        disableFilters: x,
        onAddFilterClick: _,
        closeOnChildOverlayClick: w,
        mountedStateStyles: B,
        children: f
    });
    return React.createElement("div", {
        className: G(qa.Filters, y && qa.hideQueryField),
        children: [z, H]
    })
}
const iB = React.memo(function({children: t, disabled: n, root: i}) {
    return React.useEffect( () => {
        if (n || !i)
            return;
        const a = aae(i) ? i.current : i;
        !a || a.querySelector("[autofocus]") || ra(a, !1)
    }
    , [n, i]),
    React.createElement(React.Fragment, {
        children: t
    })
});
function aae(e) {
    return e.current !== void 0
}
var rae = {
    FooterHelp: "Polaris-FooterHelp"
};
function qGe({children: e, align: t="center"}) {
    const n = {
        "--pc-footer-help-align": t
    };
    return React.createElement("div", {
        className: rae.FooterHelp,
        style: n,
        children: React.createElement(ee, {
            as: "p",
            variant: "bodySm",
            children: e
        })
    })
}
function uc({acceptCharset: e, action: t, autoComplete: n, children: i, encType: a, implicitSubmit: r=!0, method: s="post", name: l, noValidate: c, preventDefault: d=!0, target: p, onSubmit: f}) {
    const v = at()
      , g = React.useCallback(k => {
        d && (k.preventDefault(),
        f(k))
    }
    , [f, d])
      , y = oae(n)
      , b = r ? React.createElement(ee, {
        as: "span",
        visuallyHidden: !0,
        children: React.createElement("button", {
            type: "submit",
            "aria-hidden": "true",
            tabIndex: -1,
            children: v.translate("Polaris.Common.submit")
        })
    }) : null;
    return React.createElement("form", {
        acceptCharset: e,
        action: t,
        autoComplete: y,
        encType: a,
        method: s,
        name: l,
        noValidate: c,
        target: p,
        onSubmit: g,
        children: [b, i]
    })
}
function oae(e) {
    return e == null ? e : e ? "on" : "off"
}
var yC = {
    Item: "Polaris-FormLayout__Item",
    grouped: "Polaris-FormLayout--grouped",
    condensed: "Polaris-FormLayout--condensed"
};
function aB({children: e, condensed: t=!1}) {
    const n = G(yC.Item, t ? yC.condensed : yC.grouped);
    return e ? React.createElement("div", {
        className: n,
        children: e
    }) : null
}
function rB({children: e, condensed: t, title: n, helpText: i}) {
    const a = React.useId();
    let r = null, s, l = null, c;
    i && (s = `${a}HelpText`,
    r = React.createElement(he, {
        id: s,
        children: React.createElement(ee, {
            as: "p",
            variant: "bodySm",
            tone: "subdued",
            children: i
        })
    })),
    n && (c = `${a}Title`,
    l = React.createElement(ee, {
        id: c,
        as: "p",
        children: n
    }));
    const d = React.Children.map(e, p => ym(p, aB, {
        condensed: t
    }));
    return React.createElement(ft, {
        role: "group",
        gap: "200",
        "aria-labelledby": c,
        "aria-describedby": s,
        children: [l, React.createElement(Te, {
            gap: "300",
            children: d
        }), r]
    })
}
const Qs = React.memo(function({children: t}) {
    return React.createElement(ft, {
        gap: "400",
        children: React.Children.map(t, sae)
    })
});
Qs.Group = rB;
function sae(e, t) {
    return y_(e, rB) ? e : ym(e, aB, {
        key: t
    })
}
function Pv(e, t, n) {
    if (!document)
        return;
    document.documentElement.style.setProperty(e, t)
}
function lae(e, t) {
    if (!document)
        return;
    document.documentElement.style.removeProperty(e)
}
var Sn = {
    Frame: "Polaris-Frame",
    notFullScreen: "Polaris-Frame--notFullScreen",
    ScrollbarAlwaysVisible: "Polaris-Frame__ScrollbarAlwaysVisible",
    Navigation: "Polaris-Frame__Navigation",
    hasTopBar: "Polaris-Frame--hasTopBar",
    isScaledBack: "Polaris-Frame--isScaledBack",
    "Navigation-enter": "Polaris-Frame__Navigation--enter",
    "Navigation-enterActive": "Polaris-Frame__Navigation--enterActive",
    "Navigation-exit": "Polaris-Frame__Navigation--exit",
    "Navigation-exitActive": "Polaris-Frame__Navigation--exitActive",
    NavigationDismiss: "Polaris-Frame__NavigationDismiss",
    "Navigation-visible": "Polaris-Frame__Navigation--visible",
    TopBar: "Polaris-Frame__TopBar",
    Main: "Polaris-Frame__Main",
    hasNav: "Polaris-Frame--hasNav",
    hasSystemAlertBanner: "Polaris-Frame--hasSystemAlertBanner",
    hasSidebar: "Polaris-Frame--hasSidebar",
    NoScrollbarGutterLine: "Polaris-Frame__NoScrollbarGutterLine",
    Content: "Polaris-Frame__Content",
    ScrollbarSafeArea: "Polaris-Frame__ScrollbarSafeArea",
    ScrollbarSafeAreaFullscreen: "Polaris-Frame__ScrollbarSafeAreaFullscreen",
    GlobalRibbonContainer: "Polaris-Frame__GlobalRibbonContainer",
    LoadingBar: "Polaris-Frame__LoadingBar",
    Skip: "Polaris-Frame__Skip",
    DarkOverlay: "Polaris-Frame__DarkOverlay",
    NoDarkOverlay: "Polaris-Frame__NoDarkOverlay",
    Scrollable: "Polaris-Frame__Scrollable",
    SidebarBackground: "Polaris-Frame__SidebarBackground"
};
function dc() {
    const e = React.useContext(PD);
    if (!e)
        throw new Error("No mediaQuery was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function oB() {
    const e = React.useContext(FD);
    if (!e)
        throw new Error("No scaled back manager was provided. Your application must be wrapped in an <AppProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
var Mg = {
    SystemAlertBanner: "Polaris-Frame-SystemAlertBanner",
    hasTopBar: "Polaris-Frame-SystemAlertBanner--hasTopBar",
    base: "Polaris-Frame-SystemAlertBanner--base",
    critical: "Polaris-Frame-SystemAlertBanner--critical",
    warning: "Polaris-Frame-SystemAlertBanner--warning"
};
const cae = React.forwardRef(function({hasTopBar: t, hasSideBar: n, tone: i="base", children: a}, r) {
    const s = ( () => {
        switch (i) {
        case "warning":
            return "alert-triangle";
        case "critical":
            return "alert-diamond"
        }
    }
    )();
    return React.createElement("div", {
        ref: r,
        className: G(Mg.SystemAlertBanner, Mg[i], t && Mg.hasTopBar, n && Mg.hasSideBar),
        children: React.createElement(Te, {
            gap: "200",
            wrap: !1,
            blockAlign: "center",
            children: [s ? React.createElement(he, {
                as: "span",
                children: React.createElement(Fe, {
                    type: s,
                    tone: "legacy-inherit"
                })
            }) : null, a]
        })
    })
});
function sB(e, t=Bs) {
    const n = React.useRef(e);
    return t(n.current, e) || (n.current = e),
    n.current
}
function O_(e, t, n) {
    React.useEffect(e, sB(t, n))
}
function uae(e, t, n) {
    return React.useCallback(e, sB(t, n))
}
var Vc = {
    ToastManager: "Polaris-Frame-ToastManager",
    ToastWrapper: "Polaris-Frame-ToastManager__ToastWrapper",
    "ToastWrapper-enter": "Polaris-Frame-ToastManager__ToastWrapper--enter",
    "ToastWrapper-exit": "Polaris-Frame-ToastManager__ToastWrapper--exit",
    "ToastWrapper-enter-done": "Polaris-Frame-ToastManager--toastWrapperEnterDone"
}
  , wl = {
    Toast: "Polaris-Frame-Toast",
    Action: "Polaris-Frame-Toast__Action",
    error: "Polaris-Frame-Toast--error",
    CloseButton: "Polaris-Frame-Toast__CloseButton",
    LeadingIcon: "Polaris-Frame-Toast__LeadingIcon",
    toneMagic: "Polaris-Frame-Toast--toneMagic",
    WithActionOnComponent: "Polaris-Frame-Toast__WithActionOnComponent"
};
const lB = 5e3
  , _0 = 1e4;
function dae({content: e, onDismiss: t, duration: n, error: i, action: a, tone: r, onClick: s, icon: l, isHovered: c}) {
    const d = at()
      , f = a && !n ? _0 : n || lB
      , v = React.useRef(f)
      , g = React.useRef(null)
      , y = React.useRef(null);
    React.useEffect( () => {
        function A() {
            g.current = Date.now(),
            y.current = setTimeout( () => {
                t()
            }
            , v.current)
        }
        function _() {
            g.current && (v.current -= Date.now() - g.current),
            y.current && clearTimeout(y.current),
            y.current = null
        }
        return c ? _() : A(),
        () => {
            y.current && clearTimeout(y.current)
        }
    }
    , [c, t]),
    React.useEffect( () => {
        a && n && n < _0 && console.log("Toast with action should persist for at least 10,000 milliseconds to give the merchant enough time to act on it.")
    }
    , [a, n]);
    const b = React.createElement("button", {
        type: "button",
        className: wl.CloseButton,
        onClick: t,
        "aria-label": d.translate("Polaris.Common.close"),
        children: React.createElement("div", {
            "aria-hidden": !0,
            children: React.createElement(Fe, {
                type: "x",
                size: "small",
                tone: "legacy-inherit"
            })
        })
    })
      , k = a ? React.createElement("div", {
        className: wl.Action,
        children: React.createElement(nt, {
            variant: "monochromePlain",
            removeUnderline: !0,
            size: "slim",
            onClick: a.onAction,
            children: a.content
        })
    }) : null;
    let C = null;
    i ? C = React.createElement("div", {
        className: wl.LeadingIcon,
        children: React.createElement(Fe, {
            tone: "legacy-inherit",
            type: "alert-circle"
        })
    }) : l && (C = React.createElement("div", {
        className: wl.LeadingIcon,
        children: React.createElement(Fe, {
            type: l,
            tone: "legacy-inherit"
        })
    }));
    const x = G(wl.Toast, i && wl.error, r && wl[$t("tone", r)]);
    return !a && s ? React.createElement("button", {
        "aria-live": "assertive",
        className: G(x, wl.WithActionOnComponent),
        type: "button",
        onClick: s,
        children: [React.createElement(Ci, {
            keyCode: tn.Escape,
            handler: t
        }), C, React.createElement(Te, {
            gap: "400",
            blockAlign: "center",
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyMd",
                fontWeight: "medium",
                ...r === "magic" && {
                    tone: "magic"
                },
                children: e
            })
        })]
    }) : React.createElement("div", {
        className: x,
        "aria-live": "assertive",
        children: [React.createElement(Ci, {
            keyCode: tn.Escape,
            handler: t
        }), C, React.createElement(Te, {
            gap: "400",
            blockAlign: "center",
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyMd",
                fontWeight: "medium",
                ...r === "magic" && {
                    tone: "magic"
                },
                children: e
            })
        }), k, b]
    })
}
const mae = 10
  , AL = 30;
function pae(e) {
    const t = n => (n - 1) * n / 2;
    return e * mae - t(e)
}
const fae = React.memo(function({toastMessages: t}) {
    const n = []
      , [i,a] = React.useState(!1)
      , r = React.useRef(!1)
      , s = React.useRef(null)
      , l = React.useRef(null)
      , c = uae( () => {
        const p = t.length - 1;
        t.forEach( (f, v) => {
            const g = p - v
              , y = n[v];
            if (!y.current)
                return;
            const b = y.current.clientHeight
              , k = i ? 1 : .9 ** g
              , C = pae(g)
              , x = i ? b + (b - 8) * g : b + C;
            y.current.style.setProperty("--pc-toast-manager-translate-y-in", `-${x}px`),
            y.current.style.setProperty("--pc-toast-manager-scale-in", `${k}`),
            y.current.style.setProperty("--pc-toast-manager-blur-in", i ? "0" : `${g * .5}px`),
            y.current.style.setProperty("--pc-toast-manager-transition-delay-in", `${i ? g * AL : 0}ms`),
            y.current.style.setProperty("--pc-toast-manager-scale-out", `${g === 0 ? .85 : k ** 2}`),
            y.current.style.setProperty("--pc-toast-manager-translate-y-out", `${-x}px`)
        }
        )
    }
    , [t, n, i]);
    O_( () => {
        c(),
        t.length === 0 && a(!1),
        i ? s.current = setTimeout( () => {
            r.current = !0
        }
        , t.length * AL + 400) : s.current && (clearTimeout(s.current),
        r.current = !1)
    }
    , [t, i]);
    const d = t.map( (p, f) => {
        const v = t.length - f - 1
          , g = React.createRef();
        n[f] = g;
        function y() {
            a(!0)
        }
        function b() {
            r.current && a(!1)
        }
        return React.createElement(Cr, {
            nodeRef: n[f],
            timeout: {
                enter: 0,
                exit: 200
            },
            classNames: hae,
            children: React.createElement("div", {
                ref: g,
                onMouseEnter: v > 0 ? y : b,
                children: React.createElement("div", {
                    ref: k => v === 0 ? l.current = k : null,
                    children: React.createElement(dae, {
                        ...p,
                        isHovered: i
                    })
                })
            })
        }, p.id)
    }
    );
    return React.createElement(Sr, {
        idPrefix: "toast",
        children: [React.createElement(Ni, {
            event: "resize",
            handler: c
        }), React.createElement("div", {
            className: Vc.ToastManager,
            "aria-live": "assertive",
            onMouseEnter: function(p) {
                var g;
                const f = p.target
                  , v = (g = l.current) == null ? void 0 : g.contains(f);
                a(!v)
            },
            onMouseLeave: function() {
                a(!1)
            },
            children: React.createElement(mb, {
                component: null,
                children: d
            })
        })]
    })
})
  , hae = {
    enter: G(Vc.ToastWrapper, Vc["ToastWrapper-enter"]),
    enterDone: G(Vc.ToastWrapper, Vc["ToastWrapper-enter-done"]),
    exit: G(Vc.ToastWrapper, Vc["ToastWrapper-exit"])
};
function gae({trapping: e}) {
    const t = React.useContext(ID)
      , n = React.useId();
    if (!t)
        throw new ib("No FocusManager was provided.");
    const {trapFocusList: i, add: a, remove: r} = t
      , s = i[0] === n
      , l = React.useMemo( () => ({
        canSafelyFocus: s
    }), [s]);
    return React.useEffect( () => {
        if (e)
            return a(n),
            () => {
                r(n)
            }
    }
    , [a, n, r, e]),
    l
}
function hb({trapping: e=!0, children: t}) {
    const {canSafelyFocus: n} = gae({
        trapping: e
    })
      , i = React.useRef(null)
      , [a,r] = React.useState(!0);
    React.useEffect( () => {
        const c = n && !(i.current && i.current.contains(document.activeElement)) ? !e : !0;
        r(c)
    }
    , [n, e]);
    const s = c => {
        const d = i.current && i.current.contains(document.activeElement);
        e === !1 || !i.current || d || c.target instanceof Element && c.target.matches(`${iD.selector} *`) || n && c.target instanceof HTMLElement && i.current !== c.target && !i.current.contains(c.target) && ra(i.current)
    }
      , l = c => {
        if (e === !1 || !i.current)
            return;
        const d = a_(i.current)
          , p = ED(i.current);
        c.target === p && !c.shiftKey && (c.preventDefault(),
        eY(i.current)),
        c.target === d && c.shiftKey && (c.preventDefault(),
        tY(i.current))
    }
    ;
    return React.createElement(iB, {
        disabled: a,
        root: i.current,
        children: React.createElement("div", {
            ref: i,
            children: [React.createElement(Ni, {
                event: "focusin",
                handler: s
            }), React.createElement(Ci, {
                keyCode: tn.Tab,
                keyEvent: "keydown",
                handler: l
            }), t]
        })
    })
}
function vae() {
    const e = React.useRef(!1);
    return React.useEffect( () => (e.current = !0,
    () => {
        e.current = !1
    }
    ), []),
    e
}
var xL = {
    Loading: "Polaris-Frame-Loading",
    Level: "Polaris-Frame-Loading__Level"
};
const _L = 99;
function yae() {
    const e = at()
      , t = vae()
      , [n,i] = React.useState(0)
      , [a,r] = React.useState(!1);
    React.useEffect( () => {
        n >= _L || a || requestAnimationFrame( () => {
            if (!t.current)
                return;
            const l = Math.max((_L - n) / 10, 1);
            r(!0),
            i(n + l)
        }
        )
    }
    , [n, a, t]);
    const s = {
        transform: `scaleX(${Math.floor(n) / 100})`
    };
    return React.createElement("div", {
        className: xL.Loading,
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        role: "progressbar",
        "aria-label": e.translate("Polaris.Loading.label"),
        children: React.createElement("div", {
            className: xL.Level,
            style: s,
            onTransitionEnd: () => r(!1)
        })
    })
}
const wL = "AppFrameMain"
  , bae = "AppFrameScrollable"
  , kae = "AppFrameBevel"
  , Sae = "AppFrameNav"
  , Cae = "AppFrameTopBar"
  , Aae = "AppFrameLoadingBar";
class xae extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            skipFocused: !1,
            globalRibbonHeight: 0,
            loadingStack: 0,
            toastMessages: [],
            showContextualSaveBar: !1,
            scrollbarAlwaysVisible: !1,
            contextualSaveBarLeaveConfirmation: () => {}
            ,
            contextualSaveBarProps: null
        });
        te(this, "globalRibbonContainer", null);
        te(this, "scrollableRef", React.createRef());
        te(this, "navigationNode", React.createRef());
        te(this, "systemAlertBannerRef", React.createRef());
        te(this, "saveOnActionRef", React.createRef());
        te(this, "saveAsOnActionRef", React.createRef());
        te(this, "discardOnActionRef", React.createRef());
        te(this, "setGlobalRibbonHeight", () => {
            const {globalRibbonContainer: n} = this;
            n && this.setState({
                globalRibbonHeight: n.offsetHeight
            }, this.setGlobalRibbonRootProperty)
        }
        );
        te(this, "setContextualSaveBarRefs", n => {
            var i, a, r;
            this.saveOnActionRef.current = (i = n == null ? void 0 : n.saveAction) == null ? void 0 : i.onAction,
            this.saveAsOnActionRef.current = (a = n == null ? void 0 : n.saveAsAction) == null ? void 0 : a.onAction,
            this.discardOnActionRef.current = (r = n == null ? void 0 : n.discardAction) == null ? void 0 : r.onAction
        }
        );
        te(this, "setOffset", () => {
            const {offset: n="0px"} = this.props;
            Pv("--pc-frame-offset", n)
        }
        );
        te(this, "setScrollbarAlwaysVisible", () => {
            const n = parseInt(document.documentElement.style.getPropertyValue("--pc-app-provider-scrollbar-width"), 10);
            this.setState({
                scrollbarAlwaysVisible: n > 0
            })
        }
        );
        te(this, "setGlobalRibbonRootProperty", () => {
            const {globalRibbonHeight: n} = this.state;
            Pv("--pc-frame-global-ribbon-height", `${n}px`)
        }
        );
        te(this, "setBodyStyles", () => {
            !document || !(document != null && document.body) || !this.props.topBar || (document.body.style.overflow = "hidden")
        }
        );
        te(this, "showToast", n => {
            this.setState( ({toastMessages: i}) => ({
                toastMessages: i.find( ({id: r}) => r === n.id) != null ? i : [...i, n]
            }))
        }
        );
        te(this, "hideToast", ({id: n}) => {
            this.setState( ({toastMessages: i}) => ({
                toastMessages: i.filter( ({id: a}) => n !== a)
            }))
        }
        );
        te(this, "saveOnAction", () => {
            var n, i;
            (i = (n = this.saveOnActionRef).current) == null || i.call(n)
        }
        );
        te(this, "saveAsOnAction", () => {
            var n, i;
            (i = (n = this.saveAsOnActionRef).current) == null || i.call(n)
        }
        );
        te(this, "discardOnAction", () => {
            var n, i;
            (i = (n = this.discardOnActionRef).current) == null || i.call(n)
        }
        );
        te(this, "setContextualSaveBar", n => {
            this.setContextualSaveBarRefs(n);
            const {showContextualSaveBar: i} = this.state
              , {saveAction: a, saveAsAction: r, discardAction: s} = n
              , l = {
                ...n,
                saveAction: a ? {
                    ...a,
                    onAction: this.saveOnAction
                } : void 0,
                saveAsAction: r ? {
                    ...r,
                    onAction: this.saveAsOnAction
                } : void 0,
                discardAction: s ? {
                    ...s,
                    onAction: this.discardOnAction
                } : void 0
            };
            Bs(this.state.contextualSaveBarProps, l) || this.setState({
                contextualSaveBarProps: l
            }),
            i !== !0 && this.setState({
                showContextualSaveBar: !0
            })
        }
        );
        te(this, "removeContextualSaveBar", () => {
            this.setState({
                showContextualSaveBar: !1
            })
        }
        );
        te(this, "setContextualSaveBarLeaveConfirmation", n => {
            this.setState({
                contextualSaveBarLeaveConfirmation: n
            })
        }
        );
        te(this, "startLoading", () => {
            this.setState( ({loadingStack: n}) => ({
                loadingStack: n + 1
            }))
        }
        );
        te(this, "stopLoading", () => {
            this.setState( ({loadingStack: n}) => ({
                loadingStack: Math.max(0, n - 1)
            }))
        }
        );
        te(this, "handleResize", () => {
            this.props.globalRibbon && this.setGlobalRibbonHeight()
        }
        );
        te(this, "handleFocus", () => {
            this.setState({
                skipFocused: !0
            })
        }
        );
        te(this, "handleBlur", () => {
            this.setState({
                skipFocused: !1
            })
        }
        );
        te(this, "handleClick", n => {
            const {skipToContentTarget: i} = this.props;
            i && i.current && (i.current.focus(),
            n == null || n.preventDefault())
        }
        );
        te(this, "handleNavigationDismiss", () => {
            const {onNavigationDismiss: n} = this.props;
            n != null && n()
        }
        );
        te(this, "setGlobalRibbonContainer", n => {
            this.globalRibbonContainer = n
        }
        );
        te(this, "handleNavKeydown", n => {
            const {key: i} = n
              , {mediaQuery: {isNavigationCollapsed: a}, showMobileNavigation: r} = this.props;
            a && r && i === "Escape" && this.handleNavigationDismiss()
        }
        );
        te(this, "observeSystemAlertBannerHeight", () => {
            var n;
            this.systemAlertBannerRef.current && ((n = this.props.systemAlertBanner) != null && n.showBanner) && window.ResizeObserver ? new ResizeObserver(a => {
                for (const r of a)
                    if (r.target === this.systemAlertBannerRef.current) {
                        const s = r.target
                          , l = getComputedStyle(s)
                          , c = parseFloat(l.paddingTop)
                          , d = parseFloat(l.paddingBottom)
                          , p = r.contentRect.height + c + d;
                        Pv("--pg-system-alert-banner-height", `${p}px`)
                    }
            }
            ).observe(this.systemAlertBannerRef.current) : lae("--pg-system-alert-banner-height")
        }
        )
    }
    componentDidMount() {
        this.handleResize(),
        !this.props.globalRibbon && (this.setGlobalRibbonRootProperty(),
        this.setOffset(),
        this.setBodyStyles(),
        this.setScrollbarAlwaysVisible(),
        this.observeSystemAlertBannerHeight())
    }
    componentDidUpdate(n) {
        this.props.globalRibbon !== n.globalRibbon && this.setGlobalRibbonHeight(),
        this.setOffset(),
        this.setBodyStyles(),
        this.observeSystemAlertBannerHeight()
    }
    render() {
        const {skipFocused: n, loadingStack: i, toastMessages: a} = this.state
          , {logo: r, children: s, navigation: l, topBar: c, globalRibbon: d, showMobileNavigation: p=!1, skipToContentTarget: f, i18n: v, sidebar: g, mediaQuery: {isNavigationCollapsed: y}, systemAlertBanner: b, frameRef: k} = this.props
          , C = G(Sn.Navigation, p && Sn["Navigation-visible"])
          , x = y && !p
          , A = y && p
          , _ = A ? 0 : -1
          , w = {
            ...A && {
                "aria-modal": !0,
                role: "dialog"
            }
        }
          , T = l ? React.createElement(dZ, {
            children: W => React.createElement(hb, {
                trapping: A,
                children: React.createElement(Cr, {
                    nodeRef: this.navigationNode,
                    appear: y,
                    exit: y,
                    in: p,
                    timeout: parseInt(W.motion["motion-duration-300"], 10),
                    classNames: _ae,
                    children: React.createElement("div", {
                        ...w,
                        "aria-label": v.translate("Polaris.Frame.navigationLabel"),
                        ref: this.navigationNode,
                        className: C,
                        onKeyDown: this.handleNavKeydown,
                        id: Sae,
                        hidden: x,
                        style: b != null && b.showBanner && !y ? {
                            marginTop: "var(--pg-system-alert-banner-height)"
                        } : void 0,
                        children: [l, React.createElement("button", {
                            type: "button",
                            className: Sn.NavigationDismiss,
                            onClick: this.handleNavigationDismiss,
                            "aria-hidden": x || !y && !p,
                            "aria-label": v.translate("Polaris.Frame.Navigation.closeMobileNavigationLabel"),
                            tabIndex: _,
                            children: React.createElement(Fe, {
                                type: "x",
                                tone: "legacy-inherit"
                            })
                        })]
                    }, "NavContent")
                })
            })
        }) : null
          , P = i > 0 ? React.createElement("div", {
            className: Sn.LoadingBar,
            id: Aae,
            children: React.createElement(yae, {})
        }) : null
          , I = c ? React.createElement("div", {
            className: Sn.TopBar,
            ...Hd.props,
            ...$x.props,
            id: Cae,
            children: c
        }) : null
          , L = d ? React.createElement("div", {
            className: Sn.GlobalRibbonContainer,
            ref: this.setGlobalRibbonContainer,
            children: d
        }) : null
          , R = G(Sn.Skip, n && Sn.focused)
          , D = f != null && f.current ? f.current.id : wL
          , M = React.createElement("a", {
            className: R,
            href: `#${D}`,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onClick: this.handleClick,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyLg",
                fontWeight: "medium",
                children: v.translate("Polaris.Frame.skipToContent")
            })
        })
          , O = l ? {
            "data-has-navigation": !0
        } : {}
          , z = () => {
            const W = !!c;
            return G(Sn.Frame, g && W && Sn.hasSidebar, W && Sn.notFullScreen, l && Sn.hasNav, c && Sn.hasTopBar, this.props.scaledBack && Sn.isScaledBack, this.state.scrollbarAlwaysVisible && Sn.ScrollbarAlwaysVisible, (b == null ? void 0 : b.showBanner) && Sn.hasSystemAlertBanner)
        }
          , B = p && y ? React.createElement(Wf, {
            belowNavigation: !0,
            onClick: this.handleNavigationDismiss,
            onTouchStart: this.handleNavigationDismiss
        }) : null
          , H = {
            logo: r,
            showToast: this.showToast,
            hideToast: this.hideToast,
            toastMessages: a,
            startLoading: this.startLoading,
            stopLoading: this.stopLoading,
            setContextualSaveBar: this.setContextualSaveBar,
            removeContextualSaveBar: this.removeContextualSaveBar,
            contextualSaveBarVisible: this.state.showContextualSaveBar,
            contextualSaveBarProps: this.state.contextualSaveBarProps,
            contextualSaveBarLeaveConfirmation: this.state.contextualSaveBarLeaveConfirmation,
            setContextualSaveBarLeaveConfirmation: this.setContextualSaveBarLeaveConfirmation,
            scrollableRef: this.scrollableRef
        }
          , q = b != null && b.showBanner ? React.createElement(cae, {
            ref: this.systemAlertBannerRef,
            hasTopBar: !!c,
            hasSideBar: g && !!c,
            ...b
        }) : null;
        return React.createElement(fb.Provider, {
            value: H,
            children: React.createElement("div", {
                className: z(),
                ...Hd.props,
                ...O,
                ref: k,
                children: [M, I, P, React.createElement("div", {
                    className: G(c ? Sn.DarkOverlay : Sn.NoDarkOverlay),
                    id: kae,
                    children: [q, T, B, React.createElement("main", {
                        className: G(Sn.Main, Sn.NoScrollbarGutterLine),
                        id: wL,
                        "data-has-global-ribbon": !!d,
                        tabIndex: -1,
                        children: React.createElement(La, {
                            ref: this.scrollableRef,
                            scrollbarWidth: "thin",
                            horizontal: !1,
                            className: Sn.Scrollable,
                            id: bae,
                            children: React.createElement("div", {
                                className: Sn.Content,
                                children: React.createElement("div", {
                                    className: G(c ? Sn.ScrollbarSafeArea : Sn.ScrollbarSafeAreaFullscreen),
                                    children: s
                                })
                            })
                        })
                    })]
                }), React.createElement("div", {
                    className: Sn.SidebarBackground,
                    "aria-hidden": "true"
                }), React.createElement(fae, {
                    toastMessages: a
                }), L, React.createElement(Ni, {
                    event: "resize",
                    handler: this.handleResize
                })]
            })
        })
    }
}
const _ae = {
    enter: G(Sn["Navigation-enter"]),
    enterActive: G(Sn["Navigation-enterActive"]),
    enterDone: G(Sn["Navigation-enterActive"]),
    exit: G(Sn["Navigation-exit"]),
    exitActive: G(Sn["Navigation-exitActive"])
};
function B_(e) {
    const t = at()
      , n = dc()
      , {scaledBack: i} = oB();
    return React.createElement(xae, {
        ...e,
        i18n: t,
        mediaQuery: n,
        scaledBack: i
    })
}
var NL = {
    FullscreenBar: "Polaris-FullscreenBar",
    BackAction: "Polaris-FullscreenBar__BackAction"
};
function GGe({onAction: e, children: t}) {
    const n = at()
      , i = React.createElement(ee, {
        as: "span",
        variant: "bodyLg",
        children: n.translate("Polaris.FullscreenBar.back")
    });
    return React.createElement("div", {
        className: NL.FullscreenBar,
        children: [React.createElement("button", {
            className: NL.BackAction,
            onClick: e,
            "aria-label": n.translate("Polaris.FullscreenBar.accessibilityLabel"),
            children: [React.createElement(Fe, {
                type: "exit",
                tone: "legacy-inherit"
            }), i]
        }), t]
    })
}
var wae = {
    Grid: "Polaris-Grid"
}
  , id = {
    Cell: "Polaris-Grid-Cell",
    "Cell-1-column-xs": "Polaris-Grid-Cell--cell_1ColumnXs",
    "Cell-2-column-xs": "Polaris-Grid-Cell--cell_2ColumnXs",
    "Cell-3-column-xs": "Polaris-Grid-Cell--cell_3ColumnXs",
    "Cell-4-column-xs": "Polaris-Grid-Cell--cell_4ColumnXs",
    "Cell-5-column-xs": "Polaris-Grid-Cell--cell_5ColumnXs",
    "Cell-6-column-xs": "Polaris-Grid-Cell--cell_6ColumnXs",
    "Cell-1-column-sm": "Polaris-Grid-Cell--cell_1ColumnSm",
    "Cell-2-column-sm": "Polaris-Grid-Cell--cell_2ColumnSm",
    "Cell-3-column-sm": "Polaris-Grid-Cell--cell_3ColumnSm",
    "Cell-4-column-sm": "Polaris-Grid-Cell--cell_4ColumnSm",
    "Cell-5-column-sm": "Polaris-Grid-Cell--cell_5ColumnSm",
    "Cell-6-column-sm": "Polaris-Grid-Cell--cell_6ColumnSm",
    "Cell-1-column-md": "Polaris-Grid-Cell--cell_1ColumnMd",
    "Cell-2-column-md": "Polaris-Grid-Cell--cell_2ColumnMd",
    "Cell-3-column-md": "Polaris-Grid-Cell--cell_3ColumnMd",
    "Cell-4-column-md": "Polaris-Grid-Cell--cell_4ColumnMd",
    "Cell-5-column-md": "Polaris-Grid-Cell--cell_5ColumnMd",
    "Cell-6-column-md": "Polaris-Grid-Cell--cell_6ColumnMd",
    "Cell-1-column-lg": "Polaris-Grid-Cell--cell_1ColumnLg",
    "Cell-2-column-lg": "Polaris-Grid-Cell--cell_2ColumnLg",
    "Cell-3-column-lg": "Polaris-Grid-Cell--cell_3ColumnLg",
    "Cell-4-column-lg": "Polaris-Grid-Cell--cell_4ColumnLg",
    "Cell-5-column-lg": "Polaris-Grid-Cell--cell_5ColumnLg",
    "Cell-6-column-lg": "Polaris-Grid-Cell--cell_6ColumnLg",
    "Cell-7-column-lg": "Polaris-Grid-Cell--cell_7ColumnLg",
    "Cell-8-column-lg": "Polaris-Grid-Cell--cell_8ColumnLg",
    "Cell-9-column-lg": "Polaris-Grid-Cell--cell_9ColumnLg",
    "Cell-10-column-lg": "Polaris-Grid-Cell--cell_10ColumnLg",
    "Cell-11-column-lg": "Polaris-Grid-Cell--cell_11ColumnLg",
    "Cell-12-column-lg": "Polaris-Grid-Cell--cell_12ColumnLg",
    "Cell-1-column-xl": "Polaris-Grid-Cell--cell_1ColumnXl",
    "Cell-2-column-xl": "Polaris-Grid-Cell--cell_2ColumnXl",
    "Cell-3-column-xl": "Polaris-Grid-Cell--cell_3ColumnXl",
    "Cell-4-column-xl": "Polaris-Grid-Cell--cell_4ColumnXl",
    "Cell-5-column-xl": "Polaris-Grid-Cell--cell_5ColumnXl",
    "Cell-6-column-xl": "Polaris-Grid-Cell--cell_6ColumnXl",
    "Cell-7-column-xl": "Polaris-Grid-Cell--cell_7ColumnXl",
    "Cell-8-column-xl": "Polaris-Grid-Cell--cell_8ColumnXl",
    "Cell-9-column-xl": "Polaris-Grid-Cell--cell_9ColumnXl",
    "Cell-10-column-xl": "Polaris-Grid-Cell--cell_10ColumnXl",
    "Cell-11-column-xl": "Polaris-Grid-Cell--cell_11ColumnXl",
    "Cell-12-column-xl": "Polaris-Grid-Cell--cell_12ColumnXl"
};
function Nae({area: e, column: t, columnSpan: n, row: i, children: a}) {
    const r = G(id.Cell, (n == null ? void 0 : n.xs) && id[`Cell-${n.xs}-column-xs`], (n == null ? void 0 : n.sm) && id[`Cell-${n.sm}-column-sm`], (n == null ? void 0 : n.md) && id[`Cell-${n.md}-column-md`], (n == null ? void 0 : n.lg) && id[`Cell-${n.lg}-column-lg`], (n == null ? void 0 : n.xl) && id[`Cell-${n.xl}-column-xl`])
      , s = {
        gridArea: e,
        "--pc-column-xs": t == null ? void 0 : t.xs,
        "--pc-column-sm": t == null ? void 0 : t.sm,
        "--pc-column-md": t == null ? void 0 : t.md,
        "--pc-column-lg": t == null ? void 0 : t.lg,
        "--pc-column-xl": t == null ? void 0 : t.xl,
        "--pc-row-xs": i == null ? void 0 : i.xs,
        "--pc-row-sm": i == null ? void 0 : i.sm,
        "--pc-row-md": i == null ? void 0 : i.md,
        "--pc-row-lg": i == null ? void 0 : i.lg,
        "--pc-row-xl": i == null ? void 0 : i.xl
    };
    return React.createElement("div", {
        className: r,
        style: s,
        children: a
    })
}
const Tae = function({gap: t, areas: n, children: i, columns: a}) {
    const r = {
        "--pc-grid-gap-xs": t == null ? void 0 : t.xs,
        "--pc-grid-gap-sm": t == null ? void 0 : t.sm,
        "--pc-grid-gap-md": t == null ? void 0 : t.md,
        "--pc-grid-gap-lg": t == null ? void 0 : t.lg,
        "--pc-grid-gap-xl": t == null ? void 0 : t.xl,
        "--pc-grid-columns-xs": a == null ? void 0 : a.xs,
        "--pc-grid-columns-sm": a == null ? void 0 : a.sm,
        "--pc-grid-columns-md": a == null ? void 0 : a.md,
        "--pc-grid-columns-lg": a == null ? void 0 : a.lg,
        "--pc-grid-columns-xl": a == null ? void 0 : a.xl,
        "--pc-grid-areas-xs": pp(n == null ? void 0 : n.xs),
        "--pc-grid-areas-sm": pp(n == null ? void 0 : n.sm),
        "--pc-grid-areas-md": pp(n == null ? void 0 : n.md),
        "--pc-grid-areas-lg": pp(n == null ? void 0 : n.lg),
        "--pc-grid-areas-xl": pp(n == null ? void 0 : n.xl)
    };
    return React.createElement("div", {
        className: wae.Grid,
        style: r,
        children: i
    })
};
function pp(e) {
    if (e)
        return `'${e == null ? void 0 : e.join("' '")}'`
}
Tae.Cell = Nae;
let Ei = function(e) {
    return e.Default = "DEFAULT",
    e.Filtering = "FILTERING",
    e.EditingColumns = "EDITING_COLUMNS",
    e
}({});
var Rr = {
    IndexFiltersWrapper: "Polaris-IndexFilters__IndexFiltersWrapper",
    IndexFilters: "Polaris-IndexFilters",
    IndexFiltersSticky: "Polaris-IndexFilters__IndexFiltersSticky",
    IndexFiltersStickyFlush: "Polaris-IndexFilters__IndexFiltersStickyFlush",
    TabsWrapper: "Polaris-IndexFilters__TabsWrapper",
    SmallScreenTabsWrapper: "Polaris-IndexFilters__SmallScreenTabsWrapper",
    TabsWrapperLoading: "Polaris-IndexFilters__TabsWrapperLoading",
    DesktopLoading: "Polaris-IndexFilters__DesktopLoading",
    TabsLoading: "Polaris-IndexFilters__TabsLoading",
    ActionWrap: "Polaris-IndexFilters__ActionWrap",
    ButtonWrap: "Polaris-IndexFilters__ButtonWrap"
};
const Pae = 250;
function Iae(e, t, n) {
    const i = typeof window < "u" && !!window.IntersectionObserver
      , a = {
        root: null,
        rootMargin: `${n ? "0px" : "-56px"} 0px 0px 0px`,
        threshold: 0
    }
      , [r,s] = React.useState(0)
      , [l,c] = React.useState(!1)
      , d = React.useRef(null)
      , p = React.useRef(null)
      , f = g => {
        g.forEach(y => {
            c(!y.isIntersecting)
        }
        )
    }
      , v = React.useRef(i ? new IntersectionObserver(f,a) : null);
    return React.useEffect( () => {
        function g() {
            const b = d.current;
            if (!b)
                return {
                    height: 0
                };
            const C = b.getBoundingClientRect().height;
            s(C)
        }
        g();
        const y = ji(g, Pae, {
            trailing: !0
        });
        return window.addEventListener("resize", y),
        () => window.removeEventListener("resize", y)
    }
    , [d, e]),
    React.useEffect( () => {
        const g = v.current;
        if (!g)
            return;
        const y = p.current;
        return y && g.observe(y),
        () => {
            g == null || g.disconnect()
        }
    }
    , [p]),
    {
        intersectionRef: p,
        measurerRef: d,
        isSticky: l && !t,
        indexFilteringHeight: r
    }
}
function Lae(e, t) {
    const [n,i] = React.useState(e);
    return React.useEffect( () => {
        if (n && !e) {
            const a = setTimeout( () => {
                i(!1)
            }
            , t);
            return () => clearTimeout(a)
        }
        !n && e && i(!0)
    }
    , [t, e, n]),
    n
}
var Rg = {
    Body: "Polaris-Modal__Body",
    NoScrollBody: "Polaris-Modal__NoScrollBody",
    FixedBlockSize: "Polaris-Modal__FixedBlockSize",
    IFrame: "Polaris-Modal__IFrame"
}
  , TL = {
    Section: "Polaris-Modal-Section",
    titleHidden: "Polaris-Modal-Section--titleHidden"
};
function cB({children: e, flush: t=!1, subdued: n=!1, titleHidden: i=!1}) {
    const a = G(TL.Section, i && TL.titleHidden);
    return React.createElement("div", {
        className: a,
        children: React.createElement(he, {
            as: "section",
            padding: t ? "0" : "400",
            ...i && {
                paddingInlineEnd: "0"
            },
            ...n && {
                background: "bg-surface-tertiary"
            },
            children: e
        })
    })
}
var yi = {
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
const uB = React.createContext(void 0)
  , Fae = React.forwardRef(function({instant: t, labelledBy: n, children: i, limitHeight: a, size: r, onClose: s, preventOnClose: l, onExited: c, onEntered: d, setClosing: p, hasToasts: f, hasActivator: v, ...g}, y) {
    const b = Xr()
      , k = React.useRef(null)
      , C = React.useRef(null)
      , x = bD(y, 1e3)
      , [A,_] = React.useState(0)
      , w = React.useContext(fb)
      , T = React.useContext(uB)
      , {clearPopoverActivator: P, popoverActivatorRef: I} = SD();
    let L;
    w && (L = w.toastMessages);
    const R = G(yi.Container, (T == null ? void 0 : T.idle) && yi.Idle)
      , D = G(yi.Modal, r && yi[$t("size", r)], a && yi.limitHeight, x && yi.Shake, (T == null ? void 0 : T.idle) && yi.Idle)
      , M = t ? vr : Mae;
    React.useEffect( () => {
        const q = I.current;
        return k.current && !k.current.contains(document.activeElement) && (v || (C.current = document.activeElement),
        ra(k.current)),
        () => {
            !v && C.current && (document.body.contains(C.current) ? C.current.focus() : q && (q.focus(),
            P()))
        }
    }
    , [v, P, I]);
    const O = () => {
        T != null && T.idle || p && p(!0)
    }
      , z = () => {
        T != null && T.idle || (p && p(!1),
        A < 1 && l ? (_(A + 1),
        l()) : (_(0),
        s()))
    }
      , B = React.createElement("div", {
        "aria-live": "assertive",
        children: L ? L.map(q => React.createElement(ee, {
            visuallyHidden: !0,
            as: "p",
            children: q.content
        }, q.id)) : null
    })
      , H = T != null && T.idle && (T != null && T.transparentBackdrop) ? React.createElement("div", {
        className: yi.IdleOverlay
    }) : null;
    return React.createElement(M, {
        ...g,
        nodeRef: k,
        timeout: parseInt(b.motion["motion-duration-150"], 10),
        onEntered: d,
        onExited: c,
        children: React.createElement("div", {
            className: R,
            "data-polaris-layer": !0,
            "data-polaris-overlay": !0,
            ref: k,
            children: React.createElement(hb, {
                trapping: !(T != null && T.idle),
                children: React.createElement("div", {
                    role: "dialog",
                    "aria-modal": !0,
                    "aria-label": n,
                    "aria-labelledby": n,
                    tabIndex: -1,
                    className: yi.Dialog,
                    children: [React.createElement("div", {
                        className: D,
                        children: [React.createElement(Ci, {
                            keyCode: tn.Escape,
                            keyEvent: "keydown",
                            handler: O
                        }), React.createElement(Ci, {
                            keyCode: tn.Escape,
                            handler: z
                        }), i, H]
                    }), B]
                })
            })
        })
    })
})
  , Eae = {
    appear: G(yi.animateFadeUp, yi.entering),
    appearActive: G(yi.animateFadeUp, yi.entered),
    enter: G(yi.animateFadeUp, yi.entering),
    enterActive: G(yi.animateFadeUp, yi.entered),
    exit: G(yi.animateFadeUp, yi.exiting),
    exitActive: G(yi.animateFadeUp, yi.exited)
};
function Mae({children: e, ...t}) {
    return React.createElement(Cr, {
        ...t,
        classNames: Eae,
        children: e
    })
}
function PL({pressed: e, onClick: t}) {
    const n = at();
    return React.createElement(nt, {
        variant: "tertiary",
        pressed: e,
        onClick: t,
        accessibilityLabel: n.translate("Polaris.Common.close"),
        icon: "x"
    })
}
function Rae({id: e, children: t, closing: n, titleHidden: i, onClose: a}) {
    const r = "400"
      , s = "400";
    return i || !t ? React.createElement(he, {
        position: "absolute",
        insetInlineEnd: r,
        insetBlockStart: s,
        zIndex: "1",
        children: React.createElement(PL, {
            onClick: a
        })
    }) : React.createElement(he, {
        paddingBlockStart: "400",
        paddingBlockEnd: "400",
        paddingInlineStart: r,
        paddingInlineEnd: r,
        borderBlockEndWidth: "025",
        borderColor: "border",
        background: "bg-surface-tertiary",
        children: React.createElement($s, {
            columns: {
                xs: "1fr auto"
            },
            gap: "400",
            children: [React.createElement(Te, {
                gap: "400",
                blockAlign: "center",
                children: React.createElement(ee, {
                    id: e,
                    as: "h2",
                    variant: "headingMd",
                    breakWord: !0,
                    children: t
                })
            }), React.createElement(PL, {
                pressed: n,
                onClick: a
            })]
        })
    })
}
var jg = {
    Footer: "Polaris-Modal-Footer",
    Shake: "Polaris-Modal-Footer__Shake",
    UnsavedChanges: "Polaris-Modal-Footer__UnsavedChanges",
    UnsavedChangesHidden: "Polaris-Modal-Footer__UnsavedChangesHidden"
};
const jae = React.forwardRef(function({primaryAction: t, secondaryActions: n, dirty: i, children: a}, r) {
    const s = at()
      , {smDown: l} = Wn()
      , c = Xr()
      , d = React.useRef(null)
      , {isShaking: p, shakeDuration: f, showUnsavedChanges: v, bumpHeight: g} = Dae(r, d, i)
      , y = t && as(t, {
        variant: "primary",
        fullWidth: l
    }) || null
      , b = n && as(n, {
        fullWidth: l
    }) || null
      , k = React.useMemo( () => l ? ft : Te, [l])
      , C = a || !l ? React.createElement(he, {
        children: a
    }) : null
      , x = React.createElement("div", {
        className: G(v && jg.UnsavedChanges, !v && jg.UnsavedChangesHidden),
        children: [React.createElement(he, {
            paddingBlockEnd: l ? "300" : void 0,
            paddingInlineEnd: l ? void 0 : "400",
            children: React.createElement(Te, {
                wrap: !1,
                gap: "050",
                children: [React.createElement(Fe, {
                    tone: "legacy-inherit",
                    type: "alert-bubble"
                }), React.createElement(ee, {
                    as: "span",
                    variant: "bodySm",
                    children: s.translate("Polaris.Modal.unsavedChanges")
                })]
            })
        }), React.createElement(ee, {
            as: "span",
            visuallyHidden: !0,
            children: React.createElement("span", {
                "aria-live": "polite",
                children: p ? s.translate("Polaris.Modal.unsavedChanges") : null
            })
        })]
    })
      , A = y || b ? React.createElement(k, {
        wrap: !1,
        children: [l ? React.createElement(Xd, {
            id: "unsaved-changes",
            open: !!(v && i),
            variant: "block",
            transition: {
                timingFunction: c.motion["motion-ease-in-out"],
                delay: f.scale,
                duration: f.token
            },
            children: x
        }) : x, React.createElement("div", {
            className: p && !l ? jg.Shake : void 0,
            ref: d,
            children: React.createElement(k, {
                gap: "200",
                reverseOrder: l,
                wrap: !1,
                children: [b, y]
            })
        })]
    }) : null;
    return React.createElement("div", {
        className: jg.Footer,
        children: React.createElement(Te, {
            gap: "400",
            blockAlign: "center",
            children: React.createElement(he, {
                borderColor: "border",
                borderBlockStartWidth: "025",
                padding: "400",
                width: "100%",
                children: [React.createElement(k, {
                    gap: "400",
                    blockAlign: "center",
                    align: "space-between",
                    wrap: !1,
                    children: [C, A]
                }), l ? React.createElement(Xd, {
                    id: "bump",
                    open: p,
                    variant: "block",
                    transition: {
                        duration: f.token,
                        timingFunction: c.motion["motion-ease-in-out"]
                    },
                    children: React.createElement(he, {
                        minHeight: g
                    })
                }) : null]
            })
        })
    })
});
function Dae(e, t, n) {
    const {smDown: i} = Wn()
      , a = Xr()
      , r = i ? "200" : "300"
      , s = a.motion[`motion-duration-${r}`]
      , l = bD(e, parseInt(s, 10))
      , [c,d] = React.useState(!1)
      , p = a.height["height-800"]
      , f = a.height["height-300"]
      , [v,g] = React.useState(p);
    return React.useEffect( () => {
        l && !c && (d(!0),
        setTimeout( () => g(f), parseInt(s, 10) * 2)),
        l && (t != null && t.current) && ra(t.current)
    }
    , [f, c, l, s, t]),
    React.useEffect( () => {
        d(!1),
        g(p)
    }
    , [n, p]),
    {
        isShaking: l,
        shakeDuration: {
            token: s,
            scale: r
        },
        showUnsavedChanges: c,
        bumpHeight: v
    }
}
const IL = 200
  , Oae = 400
  , Sa = function({children: t, title: n, titleHidden: i=!1, src: a, iFrameName: r, open: s, instant: l, sectioned: c, loading: d, size: p, fixedBlockSize: f, limitHeight: v, footer: g, primaryAction: y, secondaryActions: b, onScrolledToBottom: k, activator: C, activatorWrapper: x="div", onClose: A, onIFrameLoad: _, onTransitionEnd: w, noScroll: T, dirty: P}) {
    const [I,L] = React.useState(IL)
      , [R,D] = React.useState(!1)
      , M = React.useContext(uB)
      , O = Lae(s, 150)
      , z = React.useId()
      , B = React.useRef(null)
      , q = at().translate("Polaris.Modal.iFrameTitle");
    let W, V;
    const $ = React.useRef(null)
      , Q = React.useRef(null)
      , K = React.useCallback( () => {
        P && (y || b || g) ? ($.current && $.current.onAction(),
        Q.current && Q.current.onAction()) : A && A()
    }
    , [P, g, A, y, b])
      , J = React.useCallback( () => {
        w && w()
    }
    , [w])
      , X = React.useCallback( () => {
        L(IL);
        const ue = C && LL(C) ? C && C.current : B.current;
        ue && requestAnimationFrame( () => ra(ue))
    }
    , [C])
      , se = React.useCallback(ue => {
        const ge = ue.target;
        if (ge && ge.contentWindow)
            try {
                L(ge.contentWindow.document.body.scrollHeight)
            } catch {
                L(Oae)
            }
        _ != null && _(ue)
    }
    , [_]);
    if (s) {
        const ue = !g && !y && !b ? null : React.createElement(jae, {
            primaryAction: y,
            secondaryActions: b,
            dirty: P,
            ref: $,
            children: g
        })
          , ge = c ? ym(t, cB, {
            titleHidden: i
        }) : t
          , de = d ? React.createElement(he, {
            padding: "400",
            children: React.createElement(Te, {
                gap: "400",
                align: "center",
                blockAlign: "center",
                children: React.createElement(er, {})
            })
        }) : ge
          , ve = T ? React.createElement("div", {
            className: Rg.NoScrollBody,
            children: React.createElement(he, {
                width: "100%",
                overflowX: "hidden",
                overflowY: "hidden",
                children: de
            })
        }) : React.createElement(La, {
            shadow: !0,
            className: G(Rg.Body, f && Rg.FixedBlockSize),
            onScrolledToBottom: k,
            children: de
        })
          , Le = a ? React.createElement("iframe", {
            name: r,
            title: q,
            src: a,
            className: Rg.IFrame,
            onLoad: se,
            style: {
                height: `${I}px`
            }
        }) : ve;
        W = React.createElement(Fae, {
            instant: l,
            labelledBy: z,
            onClose: A,
            preventOnClose: K,
            onEntered: J,
            onExited: X,
            size: p,
            limitHeight: v,
            setClosing: D,
            ref: Q,
            hasActivator: !!C,
            children: [React.createElement(Rae, {
                titleHidden: i,
                id: z,
                closing: R && !P,
                onClose: K,
                children: n
            }), Le, ue]
        })
    }
    O && (V = React.createElement(Wf, {
        setClosing: D,
        onClick: K,
        transparent: (M == null ? void 0 : M.transparentBackdrop) !== void 0 ? M == null ? void 0 : M.transparentBackdrop : !s
    }));
    const ne = !l
      , Y = C && !LL(C) ? React.createElement(he, {
        ref: B,
        as: x,
        children: C
    }) : null;
    return React.createElement(gm.Provider, {
        value: !0,
        children: [Y, React.createElement(Sr, {
            idPrefix: "modal",
            children: [React.createElement(mb, {
                appear: ne,
                enter: ne,
                exit: ne,
                children: W
            }), V]
        })]
    })
};
function LL(e) {
    return Object.prototype.hasOwnProperty.call(e, "current")
}
Sa.Section = cB;
const FL = 40;
function Bae({primaryAction: e, cancelAction: t, viewNames: n, disabled: i}) {
    const a = at()
      , [r,s] = React.useState("")
      , [l,c] = React.useState(!1)
      , d = React.useRef(null)
      , p = R_();
    React.useEffect( () => {
        !d.current || p || l && ra(d.current)
    }
    , [l, p]);
    async function f() {
        (e == null ? void 0 : e.type) === "save-as" ? v() : await (e == null ? void 0 : e.onAction(""))
    }
    function v() {
        c(!0)
    }
    function g() {
        c(!1)
    }
    function y(w) {
        s(w)
    }
    async function b() {
        A || (await (e == null ? void 0 : e.onAction(r)),
        g())
    }
    const k = React.useMemo( () => {
        switch (e == null ? void 0 : e.type) {
        case "save":
            return a.translate("Polaris.IndexFilters.UpdateButtons.save");
        case "save-as":
        default:
            return a.translate("Polaris.IndexFilters.UpdateButtons.saveAs")
        }
    }
    , [e == null ? void 0 : e.type, a])
      , C = React.createElement(nt, {
        size: "micro",
        onClick: f,
        disabled: (e == null ? void 0 : e.disabled) || i,
        children: k
    })
      , x = n.some(w => w.trim().toLowerCase() === r.trim().toLowerCase())
      , A = x || !r || (e == null ? void 0 : e.loading) || r.length > FL
      , _ = t ? React.createElement(nt, {
        variant: "tertiary",
        size: "micro",
        onClick: t.onAction,
        disabled: i,
        children: a.translate("Polaris.IndexFilters.UpdateButtons.cancel")
    }) : null;
    return e ? React.createElement(Te, {
        align: "start",
        blockAlign: "center",
        gap: "100",
        children: [_, e.type === "save-as" ? React.createElement(Sa, {
            activator: React.createElement(Te, {
                children: C
            }),
            open: l,
            title: a.translate("Polaris.IndexFilters.UpdateButtons.modal.title"),
            onClose: g,
            primaryAction: {
                onAction: b,
                content: a.translate("Polaris.IndexFilters.UpdateButtons.modal.save"),
                disabled: A
            },
            secondaryActions: [{
                onAction: g,
                content: a.translate("Polaris.IndexFilters.UpdateButtons.modal.cancel")
            }],
            children: React.createElement(Sa.Section, {
                children: React.createElement(uc, {
                    onSubmit: b,
                    children: React.createElement(Qs, {
                        children: React.createElement("div", {
                            ref: d,
                            children: React.createElement(To, {
                                label: a.translate("Polaris.IndexFilters.UpdateButtons.modal.label"),
                                value: r,
                                onChange: y,
                                autoComplete: "off",
                                maxLength: FL,
                                showCharacterCount: !0,
                                error: x ? a.translate("Polaris.IndexFilters.UpdateButtons.modal.sameName", {
                                    name: r
                                }) : void 0
                            })
                        })
                    })
                })
            })
        }) : C]
    }) : _
}
var zae = {
    Container: "Polaris-IndexFilters-Container"
};
const Vae = ({children: e}) => React.createElement("div", {
    className: zae.Container,
    children: e
});
function Uae(e, t, n, i, a) {
    const r = i.reduce( (d, p) => d + p, 0)
      , s = e.map( (d, p) => p)
      , l = []
      , c = [];
    if (a > r)
        l.push(...s);
    else {
        l.push(t);
        let d = i[t];
        s.forEach(p => {
            if (p !== t) {
                const f = i[p];
                if (d + f >= a - n) {
                    c.push(p);
                    return
                }
                l.push(p),
                d += f
            }
        }
        )
    }
    return {
        visibleTabs: l,
        hiddenTabs: c
    }
}
var ln = {
    Outer: "Polaris-Tabs__Outer",
    Wrapper: "Polaris-Tabs__Wrapper",
    WrapperWithNewButton: "Polaris-Tabs__WrapperWithNewButton",
    ButtonWrapper: "Polaris-Tabs__ButtonWrapper",
    Tabs: "Polaris-Tabs",
    Tab: "Polaris-Tabs__Tab",
    "Tab-active": "Polaris-Tabs__Tab--active",
    "Tab-hasActions": "Polaris-Tabs__Tab--hasActions",
    "Tab-iconOnly": "Polaris-Tabs__Tab--iconOnly",
    fillSpace: "Polaris-Tabs--fillSpace",
    TabContainer: "Polaris-Tabs__TabContainer",
    fitted: "Polaris-Tabs--fitted",
    List: "Polaris-Tabs__List",
    Item: "Polaris-Tabs__Item",
    DisclosureTab: "Polaris-Tabs__DisclosureTab",
    "DisclosureTab-visible": "Polaris-Tabs__DisclosureTab--visible",
    DisclosureActivator: "Polaris-Tabs__DisclosureActivator",
    TabsMeasurer: "Polaris-Tabs__TabsMeasurer",
    NewTab: "Polaris-Tabs__NewTab",
    ActionListWrap: "Polaris-Tabs__ActionListWrap",
    Panel: "Polaris-Tabs__Panel",
    "Panel-hidden": "Polaris-Tabs__Panel--hidden",
    DisclosureIcon: "Polaris-Tabs__DisclosureIcon"
};
const bC = 40;
function $ae({open: e, isModalLoading: t, name: n, onClose: i, onClickPrimaryAction: a, onClickSecondaryAction: r, helpText: s, viewNames: l}) {
    const c = at()
      , [d,p] = React.useState(n)
      , f = React.useRef(null)
      , v = l == null ? void 0 : l.some(C => C.trim().toLowerCase() === d.trim().toLowerCase())
      , g = t || v || !d || d.length > bC;
    React.useEffect( () => {
        f.current && e && ra(f.current)
    }
    , [e]),
    React.useEffect( () => {
        e && p(n.slice(0, bC))
    }
    , [n, e]);
    const y = React.useCallback(C => {
        p(C)
    }
    , []);
    async function b() {
        g || (await a(d),
        p(""),
        i())
    }
    function k() {
        r == null || r(),
        p(n),
        i()
    }
    return React.createElement(Sa, {
        open: e,
        onClose: i,
        title: c.translate("Polaris.Tabs.DuplicateModal.title"),
        primaryAction: {
            content: c.translate("Polaris.Tabs.DuplicateModal.create"),
            onAction: b,
            disabled: g
        },
        secondaryActions: [{
            content: c.translate("Polaris.Tabs.DuplicateModal.cancel"),
            onAction: k
        }],
        instant: !0,
        children: React.createElement(Sa.Section, {
            children: React.createElement(uc, {
                onSubmit: b,
                children: React.createElement(Qs, {
                    children: React.createElement("div", {
                        ref: f,
                        children: React.createElement(To, {
                            label: c.translate("Polaris.Tabs.DuplicateModal.label"),
                            value: d,
                            onChange: y,
                            autoComplete: "off",
                            helpText: s,
                            maxLength: bC,
                            showCharacterCount: !0,
                            error: v ? c.translate("Polaris.Tabs.DuplicateModal.errors.sameName", {
                                name: d
                            }) : void 0
                        })
                    })
                })
            })
        })
    })
}
function Hae({open: e, isModalLoading: t, name: n, onClose: i, onClickPrimaryAction: a, onClickSecondaryAction: r, helpText: s, viewNames: l}) {
    const c = at()
      , [d,p] = React.useState(n)
      , f = React.useRef(null)
      , v = l == null ? void 0 : l.filter(C => C !== n).some(C => C.trim().toLowerCase() === d.trim().toLowerCase())
      , g = t || v || d === n || !d;
    React.useEffect( () => {
        f.current && e && ra(f.current)
    }
    , [e]),
    React.useEffect( () => {
        e && p(n)
    }
    , [n, e]);
    const y = React.useCallback(C => {
        p(C)
    }
    , []);
    async function b() {
        g || (await a(d),
        p(""),
        i())
    }
    function k() {
        r == null || r(),
        p(n),
        i()
    }
    return React.createElement(Sa, {
        open: e,
        onClose: i,
        title: c.translate("Polaris.Tabs.RenameModal.title"),
        primaryAction: {
            content: c.translate("Polaris.Tabs.RenameModal.create"),
            onAction: b,
            disabled: g
        },
        secondaryActions: [{
            content: c.translate("Polaris.Tabs.RenameModal.cancel"),
            onAction: k
        }],
        instant: !0,
        children: React.createElement(Sa.Section, {
            children: React.createElement(uc, {
                onSubmit: b,
                children: React.createElement(Qs, {
                    children: React.createElement("div", {
                        ref: f,
                        children: React.createElement(To, {
                            label: c.translate("Polaris.Tabs.RenameModal.label"),
                            value: d,
                            onChange: y,
                            autoComplete: "off",
                            helpText: s,
                            maxLength: 40,
                            showCharacterCount: !0,
                            error: v ? c.translate("Polaris.Tabs.RenameModal.errors.sameName", {
                                name: d
                            }) : void 0
                        })
                    })
                })
            })
        })
    })
}
const fy = React.forwardRef( ({content: e, accessibilityLabel: t, badge: n, id: i, panelID: a, url: r, onAction: s, actions: l, disabled: c, isModalLoading: d, icon: p, siblingTabHasFocus: f, measuring: v, focused: g, selected: y, onToggleModal: b, onTogglePopover: k, viewNames: C, tabIndexOverride: x, disclosureZIndexOverride: A, onFocus: _}, w) => {
    const T = at()
      , [P,I] = React.useState(!1)
      , [L,R] = React.useState(null)
      , D = React.useRef(y)
      , M = React.useRef(!1)
      , O = React.useRef(null);
    React.useEffect( () => {
        k(P)
    }
    , [P, k]),
    React.useEffect( () => {
        b(!!L)
    }
    , [L, b]),
    React.useEffect( () => () => {
        b(!1),
        k(!1)
    }
    , [b, k]),
    React.useEffect( () => {
        if (v)
            return;
        (g || document.activeElement && document.activeElement.id === i) && y && a != null && !M.current && (EL(a),
        M.current = !0),
        y && !D.current && a != null ? EL(a) : g && O.current != null && L == null && !c && ra(O.current),
        D.current = y
    }
    , [g, i, e, v, a, y, L, c]);
    let z;
    y && !f && !v || g && !v ? z = 0 : z = -1,
    x != null && (z = x);
    const B = l == null ? void 0 : l.find(De => De.type === "rename")
      , H = l == null ? void 0 : l.find(De => De.type === "duplicate")
      , q = l == null ? void 0 : l.find(De => De.type === "delete")
      , W = React.useCallback( () => {
        l != null && l.length && I(De => !De)
    }
    , [l])
      , V = React.useCallback( () => {
        c || (y ? W() : s == null || s())
    }
    , [y, s, W, c])
      , $ = De => {
        R(De)
    }
      , Q = () => {
        R(null)
    }
      , K = React.useCallback(async De => {
        var Ue;
        await ((Ue = B == null ? void 0 : B.onPrimaryAction) == null ? void 0 : Ue.call(B, De)),
        setTimeout( () => {
            O.current && ra(O.current)
        }
        , 250)
    }
    , [B])
      , J = React.useCallback(async () => {
        var De;
        await ((De = q == null ? void 0 : q.onPrimaryAction) == null ? void 0 : De.call(q, e)),
        Q()
    }
    , [q, e])
      , X = React.useCallback(async De => {
        var Ue;
        await ((Ue = H == null ? void 0 : H.onPrimaryAction) == null ? void 0 : Ue.call(H, De))
    }
    , [H])
      , se = {
        rename: {
            icon: "info",
            content: T.translate("Polaris.Tabs.Tab.rename")
        },
        duplicate: {
            icon: "duplicate",
            content: T.translate("Polaris.Tabs.Tab.duplicate")
        },
        edit: {
            icon: "edit",
            content: T.translate("Polaris.Tabs.Tab.edit")
        },
        "edit-columns": {
            icon: "layout-columns-3",
            content: T.translate("Polaris.Tabs.Tab.editColumns")
        },
        delete: {
            icon: "delete",
            content: T.translate("Polaris.Tabs.Tab.delete"),
            destructive: !0
        }
    }
      , ne = l == null ? void 0 : l.map( ({type: De, onAction: Ue, onPrimaryAction: Ye, ...Mt}) => {
        const Xe = !De.includes("edit");
        return {
            ...se[De],
            ...Mt,
            onAction: () => {
                Ue == null || Ue(e),
                W(),
                Xe && $(De)
            }
        }
    }
    )
      , Y = React.useCallback(De => {
        De.key === " " && (De.preventDefault(),
        V())
    }
    , [V])
      , ue = G(ln.TabContainer, y && ln.Underline)
      , ge = c || y ? void 0 : r
      , de = ge ? Bi : Pi
      , ve = G(ln.Tab, p && ln["Tab-iconOnly"], P && ln["Tab-popoverActive"], y && ln["Tab-active"], y && (l == null ? void 0 : l.length) && ln["Tab-hasActions"])
      , Le = n ? React.createElement(rn, {
        tone: y ? void 0 : "new",
        children: n
    }) : null
      , Ce = y && (l != null && l.length) ? React.createElement("div", {
        className: G(ln.IconWrap),
        children: React.createElement(Fe, {
            type: "chevron-down",
            tone: "legacy-inherit"
        })
    }) : null
      , Ae = React.createElement(de, {
        id: i,
        className: ve,
        tabIndex: z,
        "aria-selected": y,
        "aria-controls": a,
        "aria-label": t,
        role: x == null ? "tab" : void 0,
        disabled: c,
        url: ge,
        onFocus: _,
        onMouseUp: cu,
        onClick: V,
        onKeyDown: Y,
        children: [React.createElement(Te, {
            gap: "200",
            align: "center",
            blockAlign: "center",
            wrap: !1,
            children: [p ?? React.createElement(ee, {
                as: "span",
                variant: "bodySm",
                fontWeight: "medium",
                children: e
            }), Le]
        }), Ce]
    })
      , re = !y || !(l != null && l.length)
      , le = B ? React.createElement(Hae, {
        name: e,
        open: L === "rename",
        onClose: Q,
        onClickPrimaryAction: K,
        isModalLoading: d,
        viewNames: C
    }) : null
      , ye = H ? React.createElement($ae, {
        open: L === "duplicate",
        name: T.translate("Polaris.Tabs.Tab.copy", {
            name: e
        }),
        onClose: Q,
        onClickPrimaryAction: X,
        isModalLoading: d,
        viewNames: C || []
    }) : null
      , Ee = q ? React.createElement(Sa, {
        open: L === "delete",
        onClose: Q,
        primaryAction: {
            content: T.translate("Polaris.Tabs.Tab.deleteModal.delete"),
            onAction: J,
            destructive: !0,
            disabled: d
        },
        secondaryActions: [{
            content: T.translate("Polaris.Tabs.Tab.deleteModal.cancel"),
            onAction: Q
        }],
        title: T.translate("Polaris.Tabs.Tab.deleteModal.title"),
        instant: !0,
        children: React.createElement(Sa.Section, {
            children: T.translate("Polaris.Tabs.Tab.deleteModal.description", {
                viewName: e
            })
        })
    }) : null
      , Qe = re || c ? Ae : React.createElement(React.Fragment, {
        children: [React.createElement(Fn, {
            active: P,
            activator: Ae,
            autofocusTarget: "first-node",
            onClose: W,
            zIndexOverride: A,
            children: React.createElement("div", {
                className: ln.ActionListWrap,
                children: React.createElement(ka, {
                    actionRole: "menuitem",
                    items: ne
                })
            })
        }), le, ye, Ee]
    });
    return p ? Qe : React.createElement("li", {
        className: ue,
        ref: Wae([O, w]),
        role: "presentation",
        children: Qe
    })
}
);
fy.displayName = "Tab";
function EL(e) {
    const t = document.getElementById(e);
    t && t.focus({
        preventScroll: !0
    })
}
function Wae(e) {
    return t => {
        for (const n of e)
            n != null && (n.current = t)
    }
}
function ML({hidden: e, id: t, tabID: n, children: i}) {
    const a = G(ln.Panel, e && ln["Panel-hidden"]);
    return React.createElement("div", {
        className: a,
        id: t,
        role: "tabpanel",
        "aria-labelledby": n,
        tabIndex: -1,
        children: i
    })
}
const qae = React.memo(function({id: t, focused: n, children: i, url: a, accessibilityLabel: r, onClick: s=Gae}) {
    const l = React.useRef(null);
    React.useEffect( () => {
        const f = l.current;
        f && f instanceof HTMLElement && n && requestAnimationFrame( () => {
            f.focus()
        }
        )
    }
    , [l, n]);
    const c = G(ln.Item)
      , d = {
        id: t,
        ref: l,
        onClick: s,
        className: c,
        "aria-selected": !1,
        "aria-label": r
    }
      , p = a ? React.createElement(Bi, {
        ...d,
        url: a,
        children: i
    }) : React.createElement("button", {
        ...d,
        ref: l,
        type: "button",
        children: i
    });
    return React.createElement("li", {
        children: p
    })
});
function Gae() {}
function Kae({focusIndex: e, disclosureTabs: t, onClick: n=RL, onKeyPress: i=RL}) {
    const a = t.map( ({id: r, content: s, ...l}, c) => React.createElement(qae, {
        ...l,
        id: r,
        focused: c === e,
        onClick: n.bind(null, r),
        children: s
    }, r));
    return React.createElement("ul", {
        className: ln.List,
        onKeyDown: Qae,
        onKeyUp: i,
        children: a
    })
}
function RL() {}
function Qae(e) {
    const {key: t} = e;
    (t === "ArrowLeft" || t === "ArrowRight") && (e.preventDefault(),
    e.stopPropagation())
}
const jL = 40;
function Zae({activator: e, open: t, onClose: n, onClickPrimaryAction: i, onClickSecondaryAction: a, viewNames: r}) {
    const s = at()
      , [l,c] = React.useState("")
      , [d,p] = React.useState(!1)
      , f = React.useRef(null)
      , v = R_()
      , g = r.some(x => x.trim().toLowerCase() === l.trim().toLowerCase())
      , y = !l || g || d || l.length > jL;
    React.useEffect( () => {
        if (!(!f.current || v) && t) {
            ra(f.current);
            const x = setTimeout( () => {
                f.current && ra(f.current)
            }
            , 50);
            return () => clearTimeout(x)
        }
    }
    , [t, v]);
    const b = React.useCallback(x => {
        c(x)
    }
    , []);
    async function k() {
        g || y || (p(!0),
        await i(l),
        p(!1),
        c(""),
        n())
    }
    function C() {
        a == null || a(),
        c(""),
        n()
    }
    return React.createElement(Sa, {
        activator: e,
        open: t,
        onClose: n,
        title: s.translate("Polaris.Tabs.CreateViewModal.title"),
        primaryAction: {
            content: s.translate("Polaris.Tabs.CreateViewModal.create"),
            onAction: k,
            disabled: y
        },
        secondaryActions: [{
            content: s.translate("Polaris.Tabs.CreateViewModal.cancel"),
            onAction: C
        }],
        children: React.createElement(Sa.Section, {
            children: React.createElement(uc, {
                onSubmit: k,
                children: React.createElement(Qs, {
                    children: React.createElement("div", {
                        ref: f,
                        children: React.createElement(To, {
                            label: s.translate("Polaris.Tabs.CreateViewModal.label"),
                            value: l,
                            onChange: b,
                            autoComplete: "off",
                            maxLength: jL,
                            showCharacterCount: !0,
                            error: g ? s.translate("Polaris.Tabs.CreateViewModal.errors.sameName", {
                                name: l
                            }) : void 0
                        })
                    })
                })
            })
        })
    })
}
const Yae = React.memo(function({selected: t, tabs: n, activator: i, tabToFocus: a, siblingTabHasFocus: r, handleMeasurement: s}) {
    const l = React.useRef(null)
      , c = React.useRef(null)
      , d = React.useCallback( () => {
        c.current && cancelAnimationFrame(c.current),
        c.current = requestAnimationFrame( () => {
            if (!l.current)
                return;
            const v = l.current.offsetWidth - 20 - 28
              , g = l.current.children
              , b = Array.from(g).map(C => Math.ceil(C.getBoundingClientRect().width) + 4)
              , k = b.pop() || 0;
            s({
                containerWidth: v,
                disclosureWidth: k,
                hiddenTabWidths: b
            })
        }
        )
    }
    , [s]);
    React.useEffect( () => {
        d()
    }
    , [d, n]),
    Vf( () => {}
    );
    const p = n.map( (v, g) => React.createElement(fy, {
        measuring: !0,
        id: `${v.id}Measurer`,
        siblingTabHasFocus: r,
        focused: g === a,
        selected: g === t,
        url: v.url,
        content: v.content,
        badge: v.badge,
        onTogglePopover: DL,
        onToggleModal: DL
    }, `$${v.id}Hidden`))
      , f = G(ln.Tabs, ln.TabsMeasurer);
    return Si("resize", d),
    React.createElement("div", {
        className: f,
        ref: l,
        children: [p, i]
    })
});
function DL() {}
const Jae = "create-new-view"
  , Xae = ({tabs: e, children: t, selected: n, newViewAccessibilityLabel: i, canCreateNewView: a, disabled: r, onCreateNewView: s, onSelect: l, fitted: c, disclosureText: d, disclosureZIndexOverride: p}) => {
    const f = at()
      , {mdDown: v} = Wn()
      , g = React.useRef(null)
      , y = React.useRef(null)
      , b = React.useRef(null)
      , [k,C] = React.useReducer( (Se, Re) => ({
        ...Se,
        ...Re
    }), {
        disclosureWidth: 0,
        containerWidth: 1 / 0,
        tabWidths: [],
        showDisclosure: !1,
        tabToFocus: -1,
        isNewViewModalActive: !1,
        modalSubmitted: !1,
        isTabsFocused: !1,
        isTabPopoverOpen: !1,
        isTabModalOpen: !1
    })
      , {tabToFocus: x, showDisclosure: A, isNewViewModalActive: _, modalSubmitted: w, disclosureWidth: T, tabWidths: P, containerWidth: I, isTabsFocused: L, isTabModalOpen: R, isTabPopoverOpen: D} = k
      , M = df(R)
      , O = df(D)
      , {visibleTabs: z, hiddenTabs: B} = React.useMemo( () => Uae(e, n, T, P, I), [e, n, T, P, I]);
    React.useEffect( () => {
        M && !R ? C({
            isTabsFocused: !0,
            tabToFocus: n
        }) : O && !D && !R && C({
            isTabsFocused: !0,
            tabToFocus: n
        })
    }
    , [O, D, M, R, n, x]);
    const H = React.useCallback(Se => C({
        isTabPopoverOpen: Se
    }), [])
      , q = React.useCallback(Se => C({
        isTabModalOpen: Se
    }), [])
      , W = () => {
        C({
            isNewViewModalActive: !1
        })
    }
      , V = async Se => {
        if (!s)
            return !1;
        const Re = await (s == null ? void 0 : s(Se));
        return Re && C({
            modalSubmitted: !0
        }),
        Re
    }
      , $ = () => {
        C({
            isNewViewModalActive: !0
        })
    }
      , Q = React.useCallback(Se => {
        const Re = e.find(Ze => Ze.id === Se);
        if (Re == null)
            return null;
        const Me = e.indexOf(Re);
        l == null || l(Me)
    }
    , [e, l])
      , K = React.useCallback( (Se, Re) => {
        const Me = () => {
            var Nt;
            Q(Se.id),
            (Nt = Se.onAction) == null || Nt.call(Se)
        }
          , Ze = e.map( ({content: Nt}) => Nt)
          , Ct = Se.panelID || `${Se.id}-panel`;
        return React.createElement(fy, {
            ...Se,
            key: `${Re}-${Se.id}`,
            id: Se.id,
            panelID: t ? Ct : void 0,
            disabled: r || Se.disabled,
            siblingTabHasFocus: x > -1,
            focused: Re === x,
            selected: Re === n,
            onAction: Me,
            accessibilityLabel: Se.accessibilityLabel,
            url: Se.url,
            content: Se.content,
            onToggleModal: q,
            onTogglePopover: H,
            viewNames: Ze,
            disclosureZIndexOverride: p,
            ref: Re === n ? b : null
        })
    }
    , [r, e, t, n, x, p, Q, q, H])
      , J = React.useCallback(Se => {
        const Re = Se.target
          , Me = Re.classList.contains(ln.Item)
          , Ze = Re.closest("[data-tabs-focus-catchment]") || Me;
        Re.classList.contains(ln.DisclosureActivator) || !Ze || C({
            isTabsFocused: !0
        })
    }
    , [])
      , X = React.useCallback(Se => {
        var Ut, Ht, vn;
        const Re = Se.target
          , Me = Se.relatedTarget
          , Ze = (Ut = Me == null ? void 0 : Me.closest) == null ? void 0 : Ut.call(Me, `.${ln.Tabs}`)
          , Ct = (vn = (Ht = Re == null ? void 0 : Re.classList) == null ? void 0 : Ht.contains) == null ? void 0 : vn.call(Ht, ln.Tab)
          , Nt = Me == null ? void 0 : Me.classList.contains(ln.Item);
        if (!Me && !R && !Ct && !Nt) {
            C({
                tabToFocus: -1
            });
            return
        }
        if (!Ze && !R && !Ct && !Nt) {
            C({
                tabToFocus: -1
            });
            return
        }
        C({
            isTabsFocused: !1
        })
    }
    , [R])
      , se = Se => {
        if (D || R || _)
            return;
        const {key: Re} = Se;
        (Re === "ArrowLeft" || Re === "ArrowRight") && (Se.preventDefault(),
        Se.stopPropagation())
    }
      , ne = React.useCallback( () => {
        var Re;
        const Se = (Re = b.current) == null ? void 0 : Re.querySelector(`.${ln["Tab-active"]}`);
        Se && Le(Se.offsetLeft)
    }
    , []);
    React.useEffect( () => {
        v && ne()
    }
    , [ne, n, v]),
    React.useEffect( () => {
        L && !A && C({
            tabToFocus: n
        })
    }
    , [L, n, C, A]);
    const Y = Se => {
        const {showDisclosure: Re, tabToFocus: Me, isNewViewModalActive: Ze} = k;
        if (R || D || Ze)
            return;
        const Ct = Se.key
          , Nt = Re || v ? z.concat(B) : [...z];
        let Ut = Nt.indexOf(Me);
        Ct === "ArrowRight" && (Ut += 1,
        Ut === Nt.length && (Ut = 0)),
        Ct === "ArrowLeft" && (Ut === -1 || Ut === 0 ? Ut = Nt.length - 1 : Ut -= 1);
        const Ht = Nt[Ut];
        Ht != null && C({
            tabToFocus: Ht
        })
    }
      , ue = () => {
        C({
            showDisclosure: !A,
            tabToFocus: B[0]
        })
    }
      , ge = () => {
        C({
            showDisclosure: !1
        })
    }
      , de = React.useCallback(Se => {
        const {hiddenTabWidths: Re, containerWidth: Me, disclosureWidth: Ze} = Se;
        C({
            disclosureWidth: Ze,
            containerWidth: Me,
            tabWidths: Re
        })
    }
    , [C])
      , ve = Se => {
        Q(Se),
        ge(),
        C({
            isTabsFocused: !0
        })
    }
      , Le = Se => {
        setTimeout( () => {
            var Re, Me;
            if (g.current && typeof g.current.scroll == "function") {
                const Ze = ((Re = y == null ? void 0 : y.current) == null ? void 0 : Re.offsetLeft) || 0;
                (Me = g == null ? void 0 : g.current) == null || Me.scroll({
                    left: Se - Ze
                })
            }
        }
        , 0)
    }
      , Ce = i || f.translate("Polaris.Tabs.newViewAccessibilityLabel")
      , Ae = v ? [...z, ...B] : z
      , re = Ae.sort( (Se, Re) => Se - Re).filter(Se => e[Se]).map(Se => K(e[Se], Se))
      , le = z.length < e.length && !v
      , ye = G(ln.Tabs, c && ln.fitted, le && ln.fillSpace)
      , Ee = G(ln.Wrapper, a && ln.WrapperWithNewButton)
      , Qe = G(ln.DisclosureTab, le && ln["DisclosureTab-visible"])
      , De = G(ln.DisclosureActivator)
      , Ue = React.createElement(React.Fragment, {
        children: [React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            fontWeight: "medium",
            children: d ?? f.translate("Polaris.Tabs.toggleTabsLabel")
        }), React.createElement("div", {
            className: G(ln.DisclosureIcon, le && A && ln["IconWrap-open"]),
            children: React.createElement(Fe, {
                type: "chevron-down",
                tone: "legacy-inherit"
            })
        })]
    })
      , Ye = React.createElement(Pi, {
        type: "button",
        className: De,
        onClick: ue,
        "aria-label": d ?? f.translate("Polaris.Tabs.toggleTabsLabel"),
        disabled: r,
        children: Ue
    })
      , Mt = React.useMemo( () => B.map(Se => e[Se]), [B, e])
      , Xe = e.map( ({content: Se}) => Se)
      , it = React.createElement(Yae, {
        tabToFocus: x,
        activator: Ye,
        selected: n,
        tabs: e,
        siblingTabHasFocus: x > -1,
        handleMeasurement: de
    })
      , ke = React.createElement(fy, {
        id: Jae,
        content: Ce,
        actions: [],
        onAction: $,
        onFocus: () => {
            w && C({
                tabToFocus: n,
                modalSubmitted: !1
            })
        }
        ,
        icon: React.createElement(React.Fragment, {
            children: [React.createElement(ee, {
                as: "span",
                visuallyHidden: !0,
                children: Ce
            }), React.createElement(Fe, {
                type: "plus",
                tone: "legacy-inherit"
            })]
        }),
        disabled: r,
        onTogglePopover: H,
        onToggleModal: q,
        tabIndexOverride: 0
    })
      , $e = t ? e.map( (Se, Re) => n === Re ? React.createElement(ML, {
        id: e[Re].panelID || `${e[Re].id}-panel`,
        tabID: e[Re].id,
        children: t
    }, e[Re].id) : React.createElement(ML, {
        id: e[Re].panelID || `${e[Re].id}-panel`,
        tabID: e[Re].id,
        hidden: !0
    }, e[Re].id)) : null;
    return React.createElement("div", {
        className: ln.Outer,
        children: [React.createElement(he, {
            padding: {
                md: "200"
            },
            children: [it, React.createElement("div", {
                className: Ee,
                ref: g,
                children: React.createElement("div", {
                    className: ln.ButtonWrapper,
                    ref: y,
                    children: [React.createElement("ul", {
                        role: re.length > 0 ? "tablist" : void 0,
                        className: ye,
                        onFocus: J,
                        onBlur: X,
                        onKeyDown: se,
                        onKeyUp: Y,
                        "data-tabs-focus-catchment": !0,
                        children: [re, v || Ae.length === 0 ? null : React.createElement("li", {
                            className: Qe,
                            role: "presentation",
                            children: React.createElement(Fn, {
                                preferredPosition: "below",
                                preferredAlignment: "left",
                                activator: Ye,
                                active: le && A,
                                onClose: ge,
                                autofocusTarget: "first-node",
                                zIndexOverride: p,
                                children: React.createElement(Kae, {
                                    focusIndex: B.indexOf(x),
                                    disclosureTabs: Mt,
                                    onClick: ve,
                                    onKeyPress: Y
                                })
                            })
                        })]
                    }), a && Ae.length > 0 ? React.createElement("div", {
                        className: ln.NewTab,
                        children: React.createElement(Zae, {
                            open: _,
                            onClose: W,
                            onClickPrimaryAction: V,
                            viewNames: Xe,
                            activator: r ? ke : React.createElement("div", {
                                children: React.createElement(Qn, {
                                    content: f.translate("Polaris.Tabs.newViewTooltip"),
                                    preferredPosition: "above",
                                    hoverDelay: 400,
                                    zIndexOverride: p,
                                    children: ke
                                })
                            })
                        })
                    }) : null]
                })
            })]
        }), $e]
    })
}
;
function ere({onClick: e, label: t, disabled: n, tooltipContent: i, disclosureZIndexOverride: a, style: r, hideFilters: s, hideQueryField: l}) {
    const c = React.createElement(Te, {
        gap: "0",
        children: [l ? null : React.createElement(Fe, {
            tone: "legacy-inherit",
            type: "search"
        }), s ? null : React.createElement(Fe, {
            tone: "legacy-inherit",
            type: "filter"
        })]
    })
      , d = React.createElement("div", {
        style: r,
        children: React.createElement(nt, {
            size: "slim",
            onClick: e,
            disabled: n,
            icon: c,
            accessibilityLabel: t
        })
    })
      , p = React.createElement(ee, {
        as: "span",
        variant: "bodyMd",
        alignment: "center",
        children: i
    });
    return React.createElement(Qn, {
        content: p,
        preferredPosition: "above",
        hoverDelay: 400,
        zIndexOverride: a,
        children: d
    })
}
function tre({onClick: e, disabled: t}) {
    const n = at()
      , i = React.createElement(ee, {
        as: "span",
        variant: "bodyMd",
        alignment: "center",
        children: n.translate("Polaris.IndexFilters.EditColumnsButton.tooltip")
    });
    return React.createElement(Qn, {
        content: i,
        preferredPosition: "above",
        hoverDelay: 400,
        children: React.createElement(nt, {
            size: "slim",
            onClick: e,
            disabled: t,
            accessibilityLabel: n.translate("Polaris.IndexFilters.EditColumnsButton.accessibilityLabel"),
            icon: "layout-columns-3"
        })
    })
}
const nre = ["INPUT", "SELECT", "TEXTAREA"]
  , w0 = 150
  , kC = {
    transition: `opacity ${w0}ms var(--p-motion-ease)`,
    opacity: 0
}
  , SC = {
    entering: {
        opacity: 1
    },
    entered: {
        opacity: 1
    },
    exiting: {
        opacity: 0
    },
    exited: {
        opacity: 0
    },
    unmounted: {
        opacity: 0
    }
};
function KGe({allowFilterSearch: e, tabs: t, selected: n, onSelect: i, onSort: a, onSortKeyChange: r, onSortDirectionChange: s, onAddFilterClick: l, sortOptions: c, sortSelected: d, queryValue: p="", queryPlaceholder: f, primaryAction: v, cancelAction: g, filters: y, appliedFilters: b, onClearAll: k, onQueryChange: C, onQueryFocus: x, onQueryClear: A, onEditStart: _, disabled: w, disableQueryField: T, hideFilters: P, loading: I, mode: L, setMode: R, disclosureZIndexOverride: D, disableStickyMode: M, isFlushWhenSticky: O=!1, canCreateNewView: z=!0, onCreateNewView: B, filteringAccessibilityLabel: H, filteringAccessibilityTooltip: q, hideQueryField: W, closeOnChildOverlayClick: V, disableKeyboardShortcuts: $, showEditColumnsButton: Q, autoFocusSearchField: K=!0}) {
    const J = at()
      , {mdDown: X} = Wn()
      , se = React.useRef(null)
      , ne = React.useRef(null)
      , {value: Y, setFalse: ue, setTrue: ge} = Di(L === Ei.Filtering && K);
    mf(L, Pt => {
        Pt === Ei.Filtering && K ? ge() : ue()
    }
    ),
    Si("keydown", Pt => {
        var Dt;
        if ($ || W && P)
            return;
        const {key: wn} = Pt
          , Jt = (Dt = document == null ? void 0 : document.activeElement) == null ? void 0 : Dt.tagName;
        if (L !== Ei.Default && Pt.key === "Escape" && Nt(),
        wn === "f" && L === Ei.Default) {
            if (Jt && nre.includes(Jt))
                return;
            cn(),
            Pt.preventDefault()
        }
    }
    );
    const {intersectionRef: ve, measurerRef: Le, indexFilteringHeight: Ce, isSticky: Ae} = Iae(L, !!M, O)
      , re = t.map( ({content: Pt}) => Pt)
      , le = React.useCallback(Pt => {
        C(Pt)
    }
    , [C])
      , Ee = ( (Pt, Rt) => React.useCallback(async wn => {
        await (Pt == null ? void 0 : Pt(wn)) && R(Ei.Default)
    }
    , [Pt, Rt]))(v == null ? void 0 : v.onAction)
      , Qe = React.useCallback( () => {
        var Pt;
        (Pt = g == null ? void 0 : g.onAction) == null || Pt.call(g),
        R(Ei.Default)
    }
    , [g, R])
      , De = React.useMemo( () => v ? {
        ...v,
        onAction: Ee
    } : void 0, [Ee, v])
      , Ue = React.useMemo( () => g ? {
        ...g,
        onAction: Qe
    } : void 0, [g, Qe])
      , Ye = React.useCallback(Pt => {
        R(Pt),
        _ == null || _(Pt)
    }
    , [_, R])
      , Mt = React.useMemo( () => Ue || De ? React.createElement(Bae, {
        primaryAction: De,
        cancelAction: Ue,
        viewNames: re,
        disabled: w
    }) : null, [De, Ue, w, re])
      , Xe = React.useMemo( () => c != null && c.length ? React.createElement(C2, {
        choices: c,
        selected: d,
        onChange: a,
        onChangeKey: r,
        onChangeDirection: s,
        disabled: w,
        disclosureZIndexOverride: D
    }) : null, [a, s, r, c, d, w, D]);
    function it() {
        Ye(Ei.EditingColumns)
    }
    const ke = Q ? React.createElement(tre, {
        onClick: it,
        disabled: w
    }) : null
      , $e = (v == null ? void 0 : v.loading) || (g == null ? void 0 : g.loading);
    function Se() {
        Ye(Ei.Filtering)
    }
    const Re = $ ? "Polaris.IndexFilters.searchFilterTooltip" : "Polaris.IndexFilters.searchFilterTooltipWithShortcut"
      , Me = q || J.translate(Re)
      , Ze = H || J.translate("Polaris.IndexFilters.searchFilterAccessibilityLabel")
      , Ct = I || $e;
    function Nt() {
        g == null || g.onAction(),
        R(Ei.Default)
    }
    function Ut() {
        A == null || A()
    }
    function Ht() {
        ue()
    }
    function vn() {
        ge(),
        x == null || x()
    }
    function cn() {
        L === Ei.Default && Ye(Ei.Filtering)
    }
    return React.createElement("div", {
        className: Rr.IndexFiltersWrapper,
        style: {
            height: Ce
        },
        children: [React.createElement("div", {
            ref: ve
        }), React.createElement("div", {
            className: G(Rr.IndexFilters, Ae && Rr.IndexFiltersSticky, Ae && O && Rr.IndexFiltersStickyFlush),
            ref: Le,
            children: [React.createElement(vr, {
                nodeRef: se,
                in: L !== Ei.Filtering,
                timeout: w0,
                children: Pt => React.createElement("div", {
                    ref: se,
                    children: L !== Ei.Filtering ? React.createElement(Vae, {
                        children: React.createElement(Te, {
                            align: "start",
                            blockAlign: "center",
                            gap: {
                                xs: "0",
                                md: "200"
                            },
                            wrap: !1,
                            children: [React.createElement("div", {
                                className: G(Rr.TabsWrapper, X && Rr.SmallScreenTabsWrapper, Ct && Rr.TabsWrapperLoading),
                                children: [React.createElement("div", {
                                    className: Rr.TabsInner,
                                    style: {
                                        ...kC,
                                        ...SC[Pt]
                                    },
                                    children: React.createElement(Xae, {
                                        tabs: t,
                                        selected: n,
                                        onSelect: i,
                                        disabled: !!(L !== Ei.Default || w),
                                        disclosureZIndexOverride: D,
                                        canCreateNewView: z,
                                        onCreateNewView: B
                                    })
                                }), Ct && X && React.createElement("div", {
                                    className: Rr.TabsLoading,
                                    children: React.createElement(er, {
                                        size: "small"
                                    })
                                })]
                            }), React.createElement("div", {
                                className: Rr.ActionWrap,
                                children: [Ct && !X && React.createElement("div", {
                                    className: Rr.DesktopLoading,
                                    children: Ct ? React.createElement(er, {
                                        size: "small"
                                    }) : null
                                }), L === Ei.Default ? React.createElement(React.Fragment, {
                                    children: [P && W ? null : React.createElement(ere, {
                                        onClick: Se,
                                        label: Ze,
                                        tooltipContent: Me,
                                        disabled: w,
                                        hideFilters: P,
                                        hideQueryField: W,
                                        style: {
                                            ...kC,
                                            ...SC[Pt]
                                        },
                                        disclosureZIndexOverride: D
                                    }), ke, Xe]
                                }) : null, L === Ei.EditingColumns ? Mt : null]
                            })]
                        })
                    }) : null
                })
            }), React.createElement(vr, {
                nodeRef: ne,
                in: L === Ei.Filtering,
                timeout: w0,
                children: Pt => React.createElement("div", {
                    ref: ne,
                    children: L === Ei.Filtering ? React.createElement(iae, {
                        allowFilterSearch: e,
                        queryValue: p,
                        queryPlaceholder: f,
                        onQueryChange: le,
                        onQueryClear: Ut,
                        onQueryFocus: vn,
                        onQueryBlur: Ht,
                        onAddFilterClick: l,
                        filters: y,
                        appliedFilters: b,
                        onClearAll: k,
                        disableFilters: w,
                        hideFilters: P,
                        hideQueryField: W,
                        disableQueryField: w || T,
                        loading: I || $e,
                        focused: Y,
                        mountedState: X ? void 0 : Pt,
                        borderlessQueryField: !0,
                        closeOnChildOverlayClick: V,
                        sortOptions: c,
                        sortSelected: d,
                        onSort: a,
                        disclosureZIndexOverride: D,
                        onSortDirectionChange: s,
                        onSortKeyChange: r,
                        children: React.createElement("div", {
                            className: Rr.ButtonWrap,
                            children: React.createElement(Te, {
                                gap: "200",
                                align: "start",
                                blockAlign: "center",
                                children: React.createElement("div", {
                                    style: {
                                        ...kC,
                                        ...SC[Pt]
                                    },
                                    children: Mt
                                })
                            })
                        })
                    }) : null
                })
            })]
        })]
    })
}
function QGe(e=Ei.Default) {
    const [t,n] = React.useState(e);
    return {
        mode: t,
        setMode: n
    }
}
var Je = {
    IndexTable: "Polaris-IndexTable",
    IndexTableWrapper: "Polaris-IndexTable__IndexTableWrapper",
    "IndexTableWrapper-scrollBarHidden": "Polaris-IndexTable__IndexTableWrapper--scrollBarHidden",
    IndexTableWrapperWithSelectAllActions: "Polaris-IndexTable__IndexTableWrapperWithSelectAllActions",
    LoadingPanel: "Polaris-IndexTable__LoadingPanel",
    LoadingPanelEntered: "Polaris-IndexTable__LoadingPanelEntered",
    LoadingPanelRow: "Polaris-IndexTable__LoadingPanelRow",
    LoadingPanelText: "Polaris-IndexTable__LoadingPanelText",
    Table: "Polaris-IndexTable__Table",
    "Table-scrolling": "Polaris-IndexTable__Table--scrolling",
    "StickyTable-scrolling": "Polaris-IndexTable__StickyTable--scrolling",
    "TableCell-first": "Polaris-IndexTable__TableCell--first",
    TableCell: "Polaris-IndexTable__TableCell",
    "TableHeading-first": "Polaris-IndexTable__TableHeading--first",
    "TableHeading-second": "Polaris-IndexTable__TableHeading--second",
    "Table-sticky": "Polaris-IndexTable__Table--sticky",
    StickyTable: "Polaris-IndexTable__StickyTable",
    "Table-unselectable": "Polaris-IndexTable__Table--unselectable",
    TableRow: "Polaris-IndexTable__TableRow",
    "TableRow-unclickable": "Polaris-IndexTable__TableRow--unclickable",
    toneSuccess: "Polaris-IndexTable--toneSuccess",
    "TableRow-child": "Polaris-IndexTable__TableRow--child",
    toneWarning: "Polaris-IndexTable--toneWarning",
    toneCritical: "Polaris-IndexTable--toneCritical",
    toneSubdued: "Polaris-IndexTable--toneSubdued",
    "TableRow-subheader": "Polaris-IndexTable__TableRow--subheader",
    "TableRow-selected": "Polaris-IndexTable__TableRow--selected",
    "TableRow-hovered": "Polaris-IndexTable__TableRow--hovered",
    "TableRow-disabled": "Polaris-IndexTable__TableRow--disabled",
    ZebraStriping: "Polaris-IndexTable__ZebraStriping",
    TableHeading: "Polaris-IndexTable__TableHeading",
    "TableHeading-flush": "Polaris-IndexTable__TableHeading--flush",
    "TableHeading-align-center": "Polaris-IndexTable--tableHeadingAlignCenter",
    "TableHeading-align-end": "Polaris-IndexTable--tableHeadingAlignEnd",
    "TableHeading-extra-padding-right": "Polaris-IndexTable--tableHeadingExtraPaddingRight",
    "TableHeading-sortable": "Polaris-IndexTable__TableHeading--sortable",
    TableHeadingSortButton: "Polaris-IndexTable__TableHeadingSortButton",
    TableHeadingSortIcon: "Polaris-IndexTable__TableHeadingSortIcon",
    "TableHeadingSortButton-heading-align-end": "Polaris-IndexTable--tableHeadingSortButtonHeadingAlignEnd",
    "TableHeadingSortButton-heading-align-end-currently-sorted": "Polaris-IndexTable--tableHeadingSortButtonHeadingAlignEndCurrentlySorted",
    "TableHeadingSortIcon-heading-align-end": "Polaris-IndexTable--tableHeadingSortIconHeadingAlignEnd",
    "TableHeadingSortButton-heading-align-end-previously-sorted": "Polaris-IndexTable--tableHeadingSortButtonHeadingAlignEndPreviouslySorted",
    "right-aligned-sort-button-slide-out": "Polaris-IndexTable--rightAlignedSortButtonSlideOut",
    "reveal-right-aligned-sort-button-icon": "Polaris-IndexTable--revealRightAlignedSortButtonIcon",
    TableHeadingUnderline: "Polaris-IndexTable__TableHeadingUnderline",
    TableHeadingTooltipUnderlinePlaceholder: "Polaris-IndexTable__TableHeadingTooltipUnderlinePlaceholder",
    "TableHeadingSortIcon-visible": "Polaris-IndexTable__TableHeadingSortIcon--visible",
    TableHeadingSortSvg: "Polaris-IndexTable__TableHeadingSortSvg",
    SortableTableHeadingWithCustomMarkup: "Polaris-IndexTable__SortableTableHeadingWithCustomMarkup",
    SortableTableHeaderWrapper: "Polaris-IndexTable__SortableTableHeaderWrapper",
    ColumnHeaderCheckboxWrapper: "Polaris-IndexTable__ColumnHeaderCheckboxWrapper",
    FirstStickyHeaderElement: "Polaris-IndexTable__FirstStickyHeaderElement",
    "TableHeading-unselectable": "Polaris-IndexTable__TableHeading--unselectable",
    "TableCell-flush": "Polaris-IndexTable__TableCell--flush",
    "Table-sticky-scrolling": "Polaris-IndexTable--tableStickyScrolling",
    "StickyTableHeader-sticky-scrolling": "Polaris-IndexTable--stickyTableHeaderStickyScrolling",
    "TableHeading-last": "Polaris-IndexTable__TableHeading--last",
    "Table-sticky-last": "Polaris-IndexTable--tableStickyLast",
    "StickyTableHeader-sticky-last": "Polaris-IndexTable--stickyTableHeaderStickyLast",
    "Table-sortable": "Polaris-IndexTable__Table--sortable",
    StickyTableHeader: "Polaris-IndexTable__StickyTableHeader",
    "StickyTableHeader-isSticky": "Polaris-IndexTable__StickyTableHeader--isSticky",
    StickyTableHeadings: "Polaris-IndexTable__StickyTableHeadings",
    "StickyTableHeading-second": "Polaris-IndexTable__StickyTableHeading--second",
    unselectable: "Polaris-IndexTable--unselectable",
    "StickyTableHeading-second-scrolling": "Polaris-IndexTable--stickyTableHeadingSecondScrolling",
    ScrollLeft: "Polaris-IndexTable__ScrollLeft",
    ScrollRight: "Polaris-IndexTable__ScrollRight",
    "ScrollRight-onboarding": "Polaris-IndexTable__ScrollRight--onboarding",
    SelectAllActionsWrapper: "Polaris-IndexTable__SelectAllActionsWrapper",
    SelectAllActionsWrapperWithPagination: "Polaris-IndexTable__SelectAllActionsWrapperWithPagination",
    SelectAllActionsWrapperSticky: "Polaris-IndexTable__SelectAllActionsWrapperSticky",
    SelectAllActionsWrapperAtEnd: "Polaris-IndexTable__SelectAllActionsWrapperAtEnd",
    SelectAllActionsWrapperAtEndAppear: "Polaris-IndexTable__SelectAllActionsWrapperAtEndAppear",
    BulkActionsWrapper: "Polaris-IndexTable__BulkActionsWrapper",
    BulkActionsWrapperVisible: "Polaris-IndexTable__BulkActionsWrapperVisible",
    PaginationWrapper: "Polaris-IndexTable__PaginationWrapper",
    PaginationWrapperScrolledPastTop: "Polaris-IndexTable__PaginationWrapperScrolledPastTop",
    ScrollBarContainer: "Polaris-IndexTable__ScrollBarContainer",
    ScrollBarContainerWithPagination: "Polaris-IndexTable__ScrollBarContainerWithPagination",
    ScrollBarContainerScrolledPastTop: "Polaris-IndexTable__ScrollBarContainerScrolledPastTop",
    ScrollBarContainerWithSelectAllActions: "Polaris-IndexTable__ScrollBarContainerWithSelectAllActions",
    ScrollBarContainerSelectAllActionsSticky: "Polaris-IndexTable__ScrollBarContainerSelectAllActionsSticky",
    scrollBarContainerCondensed: "Polaris-IndexTable--scrollBarContainerCondensed",
    scrollBarContainerHidden: "Polaris-IndexTable--scrollBarContainerHidden",
    ScrollBar: "Polaris-IndexTable__ScrollBar",
    disableTextSelection: "Polaris-IndexTable--disableTextSelection",
    EmptySearchResultWrapper: "Polaris-IndexTable__EmptySearchResultWrapper",
    condensedRow: "Polaris-IndexTable--condensedRow",
    CondensedList: "Polaris-IndexTable__CondensedList",
    HeaderWrapper: "Polaris-IndexTable__HeaderWrapper",
    "StickyTable-condensed": "Polaris-IndexTable__StickyTable--condensed",
    "StickyTableHeader-condensed": "Polaris-IndexTable__StickyTableHeader--condensed",
    ScrollBarContent: "Polaris-IndexTable__ScrollBarContent"
};
const OL = e => React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    ...e,
    children: [React.createElement("path", {
        fillRule: "evenodd",
        d: "M9.116 4.323a1.25 1.25 0 0 1 1.768 0l2.646 2.647a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.646-2.647Z"
    }), React.createElement("path", {
        fillOpacity: ".33",
        fillRule: "evenodd",
        d: "M9.116 15.677a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l2.646 2.647Z"
    })]
})
  , BL = e => React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    ...e,
    children: [React.createElement("path", {
        fillOpacity: ".33",
        fillRule: "evenodd",
        d: "M9.116 4.823a1.25 1.25 0 0 1 1.768 0l2.646 2.647a.75.75 0 0 1-1.06 1.06l-2.47-2.47-2.47 2.47a.75.75 0 1 1-1.06-1.06l2.646-2.647Z"
    }), React.createElement("path", {
        fillRule: "evenodd",
        d: "M9.116 15.177a1.25 1.25 0 0 0 1.768 0l2.646-2.647a.75.75 0 0 0-1.06-1.06l-2.47 2.47-2.47-2.47a.75.75 0 0 0-1.06 1.06l2.646 2.647Z"
    })]
})
  , Hl = "All";
let aa = function(e) {
    return e.All = "all",
    e.Page = "page",
    e.Multi = "multi",
    e.Single = "single",
    e.Range = "range",
    e
}({});
const dB = React.createContext(void 0)
  , mB = React.createContext(void 0)
  , pB = React.createContext(void 0);
function fB() {
    const e = React.useContext(mB);
    if (!e)
        throw new Error("Missing IndexProvider context");
    return e
}
function ire() {
    const e = React.useContext(pB);
    if (!e)
        throw new Error("Missing IndexProvider context");
    return e
}
function hB() {
    const e = React.useContext(dB);
    if (!e)
        throw new Error("Missing IndexProvider context");
    return e
}
function are({selectedItemsCount: e, itemCount: t, hasMoreItems: n, resourceName: i, defaultPaginatedSelectAllText: a}) {
    const r = at()
      , s = !!e
      , l = e === "All" || e > 0
      , c = {
        singular: r.translate("Polaris.IndexProvider.defaultItemSingular"),
        plural: r.translate("Polaris.IndexProvider.defaultItemPlural")
    }
      , d = i || c
      , p = y()
      , f = b()
      , v = k();
    let g = "indeterminate";
    return !e || e === 0 ? g = void 0 : (e === Hl || e === t) && (g = !0),
    {
        paginatedSelectAllText: p,
        bulkActionsLabel: f,
        bulkActionsAccessibilityLabel: v,
        resourceName: d,
        selectMode: l,
        bulkSelectState: g,
        selectable: s
    };
    function y() {
        if (!(!s || !n) && e === Hl)
            return a || r.translate("Polaris.IndexProvider.allItemsSelected", {
                itemsLength: t,
                resourceNamePlural: d.plural.toLocaleLowerCase()
            })
    }
    function b() {
        const C = e === Hl ? `${t}+` : e;
        return r.translate("Polaris.IndexProvider.selected", {
            selectedItemsCount: C
        })
    }
    function k() {
        const C = t
          , x = e === C;
        return C === 1 && x ? r.translate("Polaris.IndexProvider.a11yCheckboxDeselectAllSingle", {
            resourceNameSingular: d.singular
        }) : C === 1 ? r.translate("Polaris.IndexProvider.a11yCheckboxSelectAllSingle", {
            resourceNameSingular: d.singular
        }) : x ? r.translate("Polaris.IndexProvider.a11yCheckboxDeselectAllMultiple", {
            itemsLength: t,
            resourceNamePlural: d.plural
        }) : r.translate("Polaris.IndexProvider.a11yCheckboxSelectAllMultiple", {
            itemsLength: t,
            resourceNamePlural: d.plural
        })
    }
}
function rre({onSelectionChange: e= () => {}
}) {
    const t = React.useRef(null);
    return React.useCallback( (i, a, r, s) => {
        const l = t.current;
        if (aa.Multi && typeof s == "number" && (t.current = s),
        i === aa.Single || i === aa.Multi && (typeof l != "number" || typeof s != "number"))
            e(aa.Single, a, r);
        else if (i === aa.Multi) {
            const c = Math.min(l, s)
              , d = Math.max(l, s);
            e(i, a, [c, d])
        } else
            i === aa.Page || i === aa.All ? e(i, a) : i === aa.Range && e(aa.Range, a, r)
    }
    , [e])
}
function ore({children: e, resourceName: t, loading: n, onSelectionChange: i, selectedItemsCount: a=0, itemCount: r, hasMoreItems: s, condensed: l, selectable: c=!0, paginatedSelectAllText: d}) {
    const {paginatedSelectAllText: p, bulkActionsLabel: f, bulkActionsAccessibilityLabel: v, resourceName: g, selectMode: y, bulkSelectState: b} = are({
        selectedItemsCount: a,
        itemCount: r,
        hasMoreItems: s,
        resourceName: t,
        defaultPaginatedSelectAllText: d
    })
      , k = rre({
        onSelectionChange: i
    })
      , C = React.useMemo( () => ({
        itemCount: r,
        selectMode: y && c,
        selectable: c,
        resourceName: g,
        loading: n,
        paginatedSelectAllText: p,
        hasMoreItems: s,
        bulkActionsLabel: f,
        bulkActionsAccessibilityLabel: v,
        bulkSelectState: b,
        selectedItemsCount: a,
        condensed: l
    }), [r, y, c, g, n, p, s, f, v, b, a, l])
      , x = React.useMemo( () => ({
        selectable: c,
        selectMode: y && c,
        condensed: l
    }), [l, y, c]);
    return React.createElement(dB.Provider, {
        value: C,
        children: React.createElement(pB.Provider, {
            value: x,
            children: React.createElement(mB.Provider, {
                value: k,
                children: e
            })
        })
    })
}
function zL(e, t) {
    return e ? Array.from(e.querySelectorAll(t)) : []
}
var sre = {
    ScrollContainer: "Polaris-IndexTable-ScrollContainer"
};
const gb = React.createContext({})
  , gB = React.createContext(void 0)
  , vB = {
    scrollableContainer: null,
    canScrollLeft: !1,
    canScrollRight: !1
}
  , lre = React.createContext(vB);
function cre({children: e, scrollableContainerRef: t, onScroll: n}) {
    React.useEffect( () => {
        t.current && t.current.dispatchEvent(new Event("scroll"))
    }
    , [t]);
    const [i,a] = React.useState(vB)
      , r = React.useCallback(ji( () => {
        if (!t.current)
            return;
        const s = t.current.scrollWidth - t.current.offsetWidth
          , l = t.current.scrollLeft > 0
          , c = t.current.scrollLeft < s;
        n(l, c),
        a({
            scrollableContainer: t.current,
            canScrollLeft: l,
            canScrollRight: c
        })
    }
    , 40, {
        trailing: !0,
        leading: !0,
        maxWait: 40
    }), [n, t]);
    return React.createElement(lre.Provider, {
        value: i,
        children: React.createElement("div", {
            className: sre.ScrollContainer,
            ref: t,
            onScroll: r,
            children: e
        })
    })
}
const yB = React.memo(function({children: t, className: n, flush: i, colSpan: a, headers: r, scope: s, as: l="td", id: c}) {
    const d = G(n, Je.TableCell, i && Je["TableCell-flush"]);
    return React.createElement(l, {
        id: c,
        colSpan: a,
        headers: r,
        scope: s,
        className: d
    }, t)
});
var ure = {
    Wrapper: "Polaris-IndexTable-Checkbox__Wrapper"
};
const dre = React.memo(function({accessibilityLabel: t}) {
    const n = at()
      , {resourceName: i} = hB()
      , {itemId: a, selected: r, disabled: s, onInteraction: l} = React.useContext(gb)
      , c = t || n.translate("Polaris.IndexTable.selectItem", {
        resourceName: i.singular
    });
    return React.createElement(mre, {
        children: React.createElement("div", {
            className: ure.Wrapper,
            onClick: l,
            onKeyUp: pre,
            children: React.createElement(ss, {
                id: `Select-${a}`,
                label: c,
                labelHidden: !0,
                checked: r,
                disabled: s
            })
        })
    })
});
function mre({children: e}) {
    const {position: t} = React.useContext(gb)
      , n = React.useRef(null)
      , i = React.useCallback(ji( () => {
        if (t !== 0 || !n.current)
            return;
        const {width: r} = n.current.getBoundingClientRect();
        Pv("--pc-checkbox-offset", `${r}px`)
    }
    ), [t]);
    React.useEffect( () => {
        i()
    }
    , [i]),
    React.useEffect( () => {
        if (n.current)
            return window.addEventListener("resize", i),
            () => {
                window.removeEventListener("resize", i)
            }
    }
    , [i]);
    const a = G(Je.TableCell, Je["TableCell-first"]);
    return React.createElement("td", {
        className: a,
        ref: n,
        children: e
    })
}
function pre() {}
const fre = React.memo(function({children: t, hideSelectable: n, selected: i, id: a, position: r, tone: s, disabled: l, selectionRange: c, rowType: d="data", accessibilityLabel: p, onNavigation: f, onClick: v}) {
    const {selectable: g, selectMode: y, condensed: b} = ire()
      , k = g && !n
      , C = fB()
      , {value: x, setTrue: A, setFalse: _} = Di(!1)
      , w = React.useCallback(B => {
        B.stopPropagation();
        let H = aa.Single;
        if (l || !k || "key"in B && B.key !== " " || !C)
            return;
        B.nativeEvent.shiftKey ? H = aa.Multi : c && (H = aa.Range),
        C(H, !i, c ?? a, r)
    }
    , [a, C, i, c, r, l, k])
      , T = React.useMemo( () => ({
        itemId: a,
        selected: i,
        position: r,
        onInteraction: w,
        disabled: l
    }), [a, i, l, r, w])
      , P = React.useRef(null)
      , I = React.useRef(!1)
      , L = React.useRef(null)
      , R = React.useCallback(B => {
        L.current = B;
        const H = B == null ? void 0 : B.querySelector("[data-primary-link]");
        H && (P.current = H)
    }
    , [])
      , D = G(Je.TableRow, d === "subheader" && Je["TableRow-subheader"], d === "child" && Je["TableRow-child"], k && b && Je.condensedRow, i && Je["TableRow-selected"], x && !b && Je["TableRow-hovered"], l && Je["TableRow-disabled"], s && Je[$t("tone", s)], (!k && !v && !P.current || l) && Je["TableRow-unclickable"]);
    let M;
    (!l && k || v || P.current) && (M = B => {
        if (d !== "subheader" && !(!L.current || I.current)) {
            if (B.stopPropagation(),
            B.preventDefault(),
            v) {
                v();
                return
            }
            if (P.current && !y) {
                I.current = !0;
                const {ctrlKey: H, metaKey: q} = B.nativeEvent;
                if (f && f(a),
                (H || q) && P.current instanceof HTMLAnchorElement) {
                    I.current = !1,
                    window.open(P.current.href, "_blank");
                    return
                }
                P.current.dispatchEvent(new MouseEvent(B.type,B.nativeEvent))
            } else
                I.current = !1,
                w(B)
        }
    }
    );
    const O = b ? "li" : "tr"
      , z = n ? React.createElement(yB, {}) : React.createElement(dre, {
        accessibilityLabel: p
    });
    return React.createElement(gb.Provider, {
        value: T,
        children: React.createElement(gB.Provider, {
            value: x,
            children: React.createElement(O, {
                id: a,
                className: D,
                onMouseEnter: A,
                onMouseLeave: _,
                onClick: M,
                ref: R,
                children: [g ? z : null, t]
            }, a)
        })
    })
})
  , hre = 16
  , CC = 100
  , gre = 10;
function vre({headings: e, bulkActions: t=[], promotedBulkActions: n=[], children: i, emptyState: a, sort: r, paginatedSelectAllActionText: s, lastColumnSticky: l=!1, sortable: c, sortDirection: d, defaultSortDirection: p="descending", sortColumnIndex: f, onSort: v, sortToggleLabels: g, hasZebraStriping: y, pagination: b, ...k}) {
    const {loading: C, bulkSelectState: x, resourceName: A, bulkActionsAccessibilityLabel: _, selectMode: w, selectable: T=k.selectable, paginatedSelectAllText: P, itemCount: I, hasMoreItems: L, selectedItemsCount: R, condensed: D} = hB()
      , M = fB()
      , O = at()
      , {value: z, toggle: B} = Di(!1)
      , H = React.useRef({
        top: 0,
        left: 0
    })
      , q = React.useRef([])
      , W = React.useRef(null)
      , V = React.useRef(null)
      , $ = React.useRef(null)
      , Q = React.useRef(null)
      , [K,J] = React.useState(!1)
      , [X,se] = React.useState(null)
      , [ne,Y] = React.useState(!0)
      , ue = React.useRef([])
      , ge = React.useRef([])
      , de = React.useRef(null)
      , ve = React.useRef(null)
      , Le = React.useRef(null)
      , Ce = React.useRef(null)
      , Ae = React.useRef(null)
      , re = React.useRef(!1)
      , le = React.useRef(!1)
      , ye = React.useRef(f)
      , Ee = React.useRef(!1)
      , Qe = React.useRef(0)
      , De = React.useRef(!1);
    R !== Qe.current && (Ee.current = !0,
    Qe.current = R),
    !De.current && R !== 0 && (De.current = !0);
    const Ue = React.useCallback(tt => {
        tt !== null && !K && J(!0),
        $.current = tt
    }
    , [K])
      , Ye = React.useCallback( () => {
        M(R === Hl ? aa.Page : aa.All, !0)
    }
    , [M, R])
      , Mt = React.useMemo( () => ji( () => {
        var qt, En;
        if (!V.current || !W.current)
            return;
        const tt = W.current.getBoundingClientRect();
        H.current = {
            top: tt.top,
            left: tt.left
        },
        q.current = ue.current.map(Gt => ({
            offsetWidth: Gt.offsetWidth || 0,
            offsetLeft: Gt.offsetLeft || 0
        })),
        ue.current.length !== 0 && (T && ue.current.length > 1 && (ue.current[1].style.left = `${q.current[0].offsetWidth}px`,
        (qt = ge.current) != null && qt.length && (ge.current[1].style.left = `${q.current[0].offsetWidth}px`)),
        (En = ge.current) != null && En.length && ge.current.forEach( (Gt, sa) => {
            var Xi;
            Gt.style.minWidth = `${((Xi = q.current[sa]) == null ? void 0 : Xi.offsetWidth) || 0}px`
        }
        ))
    }
    ), [T])
      , Xe = React.useCallback( () => {
        var tt, qt;
        Ce.current && V.current && K && (Ce.current.style.setProperty("--pc-index-table-scroll-bar-content-width", `${V.current.offsetWidth - hre}px`),
        Y(((tt = Ae.current) == null ? void 0 : tt.offsetWidth) === ((qt = V.current) == null ? void 0 : qt.offsetWidth)))
    }
    , [K])
      , it = React.useCallback(ji(Xe, CC, {
        trailing: !0
    }), [Xe])
      , [ke,$e] = React.useState(!0)
      , Se = React.useCallback(ji( () => {
        if (!l || !V.current || !W.current)
            return;
        const tt = V.current.getBoundingClientRect()
          , qt = W.current.getBoundingClientRect();
        $e(tt.width > qt.width)
    }
    ), [l]);
    React.useEffect( () => {
        Se()
    }
    , [Se]);
    const [Re,Me] = React.useState(!0)
      , Ze = React.useCallback( () => {
        if (!W.current || !ue.current.length)
            return;
        const tt = W.current.getBoundingClientRect()
          , qt = T ? ue.current[0].getBoundingClientRect().width : 0
          , En = ue.current[T ? 1 : 0].getBoundingClientRect().width
          , Gt = T ? ue.current.length > 2 : 1
          , sa = l && Gt ? ue.current[ue.current.length - 1].getBoundingClientRect().width : 0;
        Me(tt.width > En + qt + sa + 100)
    }
    , [l, T]);
    React.useEffect( () => {
        K && Ze()
    }
    , [Ze, K]);
    const Ct = React.useCallback( () => {
        var tt;
        (tt = Ce.current) == null || tt.style.setProperty("--pc-index-table-scroll-bar-content-width", "0px"),
        Mt(),
        it(),
        Se(),
        Ze()
    }
    , [Mt, it, Se, Ze]);
    React.useEffect( () => {
        if (!X || !window.ResizeObserver)
            return;
        const tt = new ResizeObserver(ji(Ct, CC, {
            maxWait: CC
        }));
        return tt.observe(X),
        () => {
            tt.disconnect()
        }
    }
    , [Ct, X]);
    const Nt = React.useCallback( (tt, qt) => {
        !W.current || !Ce.current || (re.current || (le.current = !0,
        Ce.current.scrollLeft = W.current.scrollLeft),
        re.current = !1,
        Le.current && (Le.current.scrollLeft = W.current.scrollLeft),
        (tt && !z || !tt && z) && B(),
        $e(qt))
    }
    , [z, B])
      , Ut = React.useCallback( () => {
        !W.current || !Ce.current || (le.current || (re.current = !0,
        W.current.scrollLeft = Ce.current.scrollLeft),
        le.current = !1)
    }
    , []);
    Kr( () => {
        ue.current = zL(V.current, "[data-index-table-heading]"),
        ge.current = zL(de.current, "[data-index-table-sticky-heading]"),
        Mt()
    }
    , [e, Mt, ve, K]),
    React.useEffect( () => {
        Xe(),
        se(D ? Q.current : V.current)
    }
    , [K, Xe, D]);
    const Ht = e.map( (tt, qt) => zt(tt, qt, "th", {
        "data-index-table-heading": !0
    }, tt.id))
      , vn = e.map( (tt, qt) => zt(tt, qt, "div", {
        "data-index-table-sticky-heading": !0
    }))
      , [cn,Pt] = React.useState(R === Hl ? `${I}+` : R);
    React.useEffect( () => {
        (R === Hl || R > 0) && Pt(R === Hl ? `${I}+` : R)
    }
    , [R, I]);
    const Rt = O.translate("Polaris.IndexTable.selected", {
        selectedItemsCount: cn
    })
      , wn = React.useCallback( () => {
        M(aa.Page, !x || x === "indeterminate")
    }
    , [x, M])
      , Jt = st()
      , Dt = React.createElement("div", {
        className: G(Je.LoadingPanel, C && Je.LoadingPanelEntered),
        children: React.createElement("div", {
            className: Je.LoadingPanelRow,
            children: [React.createElement(er, {
                size: "small"
            }), React.createElement("span", {
                className: Je.LoadingPanelText,
                children: O.translate("Polaris.IndexTable.resourceLoadingAccessibilityLabel", {
                    resourceNamePlural: A.plural.toLocaleLowerCase()
                })
            })]
        })
    })
      , we = G(Je.StickyTable, z && Je["StickyTable-scrolling"], D && Je["StickyTable-condensed"])
      , ae = !D || R
      , Pe = ae ? n : []
      , Ie = ae ? t : []
      , Be = React.createElement("div", {
        className: we,
        role: "presentation",
        children: React.createElement(pb, {
            boundingElement: X,
            children: tt => {
                const qt = G(Je.StickyTableHeader, tt && Je["StickyTableHeader-isSticky"], Re && Je["StickyTableHeader-sticky"], z && Je["StickyTableHeader-scrolling"], Re && l && Je["StickyTableHeader-sticky-last"], Re && l && ke && Je["StickyTableHeader-sticky-scrolling"])
                  , En = G(Je.BulkActionsWrapper, w && Je.BulkActionsWrapperVisible, D && Je["StickyTableHeader-condensed"], tt && Je["StickyTableHeader-isSticky"])
                  , Gt = ae && !D ? React.createElement("div", {
                    className: En,
                    children: React.createElement(GO, {
                        selectMode: w,
                        onToggleAll: wn,
                        paginatedSelectAllText: P,
                        paginatedSelectAllAction: Jt,
                        accessibilityLabel: _,
                        selected: x,
                        promotedActions: Pe,
                        actions: Ie,
                        onSelectModeToggle: D ? Fo : void 0,
                        label: Rt,
                        buttonSize: "micro"
                    })
                }) : null
                  , sa = D ? React.createElement("div", {
                    className: G(Je.HeaderWrapper, (!T || D) && Je.unselectable),
                    children: [Dt, r]
                }) : React.createElement("div", {
                    className: qt,
                    ref: de,
                    children: [Dt, React.createElement("div", {
                        className: Je.StickyTableHeadings,
                        ref: Le,
                        children: vn
                    })]
                });
                return React.createElement(React.Fragment, {
                    children: [sa, Gt]
                })
            }
        })
    })
      , dt = G(Je.ScrollBarContainer, b && Je.ScrollBarContainerWithPagination, D && Je.scrollBarContainerCondensed, ne && Je.scrollBarContainerHidden)
      , _t = G(V.current && K && Je.ScrollBarContent)
      , ht = I > 0 ? React.createElement(ZO, {
        onMount: Xe,
        children: React.createElement("div", {
            className: dt,
            ref: Ae,
            children: React.createElement("div", {
                onScroll: Ut,
                className: Je.ScrollBar,
                ref: Ce,
                children: React.createElement("div", {
                    className: _t
                })
            })
        })
    }) : null
      , Wt = c == null ? void 0 : c.some(tt => tt)
      , It = G(Je.Table, z && Je["Table-scrolling"], w && Je.disableTextSelection, !T && Je["Table-unselectable"], Re && Je["Table-sticky"], Wt && Je["Table-sortable"], Re && l && Je["Table-sticky-last"], Re && l && ke && Je["Table-sticky-scrolling"], y && Je.ZebraStriping)
      , yn = a || React.createElement(D_, {
        title: O.translate("Polaris.IndexTable.emptySearchTitle", {
            resourceNamePlural: A.plural
        }),
        description: O.translate("Polaris.IndexTable.emptySearchDescription"),
        withIllustration: !0
    })
      , pn = G(Je.CondensedList, y && Je.ZebraStriping)
      , On = D ? React.createElement(React.Fragment, {
        children: [Be, React.createElement("ul", {
            "data-selectmode": !!w,
            className: pn,
            ref: Q,
            children: i
        })]
    }) : React.createElement(React.Fragment, {
        children: [Be, React.createElement(cre, {
            scrollableContainerRef: W,
            onScroll: Nt,
            children: React.createElement("table", {
                ref: V,
                className: It,
                children: [React.createElement("thead", {
                    children: React.createElement("tr", {
                        className: Je.HeadingRow,
                        children: Ht
                    })
                }), React.createElement("tbody", {
                    ref: Ue,
                    children: i
                })]
            })
        })]
    })
      , Cn = I > 0 ? On : React.createElement("div", {
        className: Je.EmptySearchResultWrapper,
        children: yn
    })
      , ri = (b == null ? void 0 : b.hasPrevious) || (b == null ? void 0 : b.hasNext)
      , Ai = I >= gre
      , Ui = b && (!b.label || ri || Ai) ? React.createElement("div", {
        className: Je.PaginationWrapper,
        children: React.createElement(Qd, {
            type: "table",
            ...b
        })
    }) : null;
    return React.createElement(React.Fragment, {
        children: React.createElement("div", {
            className: Je.IndexTable,
            children: React.createElement("div", {
                className: Je.IndexTableWrapper,
                children: [!D && Dt, Cn, ht, Ui]
            })
        })
    });
    function zt(tt, qt, En, Gt, sa) {
        const Xi = qt === 0
          , nr = qt === e.length - 1
          , pi = c == null ? void 0 : c.some(xt => xt === !0)
          , Ra = tt.alignment || "start"
          , ja = G(Je.TableHeading, Ra === "center" && Je["TableHeading-align-center"], Ra === "end" && Je["TableHeading-align-end"], pi && Je["TableHeading-sortable"], Xi && Je["TableHeading-second"], nr && !tt.hidden && Je["TableHeading-last"], !T && Je["TableHeading-unselectable"], tt.flush && Je["TableHeading-flush"])
          , xr = T !== !1 && Xi && q.current && q.current.length > 0 ? {
            left: q.current[0].offsetWidth
        } : void 0
          , qn = React.createElement(En, {
            id: sa,
            className: ja,
            style: xr,
            ...Gt,
            children: He(tt, qt)
        }, yre(tt));
        if (qt !== 0 || !T)
            return qn;
        const no = G(Je.TableHeading, pi && Je["TableHeading-sortable"], qt === 0 && Je["TableHeading-first"]);
        return [React.createElement(En, {
            className: no,
            ...Gt,
            children: to()
        }, `${tt}-${qt}`), qn]
    }
    function to() {
        return React.createElement("div", {
            className: Je.ColumnHeaderCheckboxWrapper,
            children: React.createElement(ss, {
                label: O.translate("Polaris.IndexTable.selectAllLabel", {
                    resourceNamePlural: A.plural
                }),
                labelHidden: !0,
                onChange: pe,
                checked: x
            })
        })
    }
    function Ma(tt, qt) {
        Ee.current = !1,
        De.current = !1,
        ye.current = f,
        v == null || v(tt, qt)
    }
    function He(tt, qt) {
        let En;
        const Gt = {
            width: tt.tooltipWidth ?? "default",
            activatorWrapper: "div",
            dismissOnMouseOut: !0,
            persistOnClick: tt.tooltipPersistsOnClick
        }
          , sa = {
            ...Gt,
            padding: "400",
            borderRadius: "200",
            content: tt.tooltipContent,
            preferredPosition: "above"
        }
          , Xi = React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            fontWeight: "medium",
            visuallyHidden: tt.hidden,
            children: tt.title
        });
        tt.new ? En = React.createElement(Zr, {
            wrap: !1,
            alignment: "center",
            children: [Xi, React.createElement(rn, {
                tone: "new",
                children: O.translate("Polaris.IndexTable.onboardingBadgeText")
            })]
        }) : En = Xi;
        const nr = {
            "--pc-index-table-heading-extra-padding-right": tt.paddingBlockEnd ? `var(--p-space-${tt.paddingBlockEnd})` : "0"
        };
        if (c != null && c[qt]) {
            const pi = qt === f
              , Ra = !pi && qt === ye.current
              , ja = Ee.current || !De.current && R !== 0
              , xr = d === "ascending";
            let qn = tt.defaultSortDirection ?? p
              , no = qn === "ascending" ? OL : BL;
            pi && (qn = xr ? "descending" : "ascending",
            no = d === "ascending" ? OL : BL);
            const fi = React.createElement("span", {
                className: G(Je.TableHeadingSortIcon, (tt == null ? void 0 : tt.alignment) === "end" && Je["TableHeadingSortIcon-heading-align-end"], pi && Je["TableHeadingSortIcon-visible"]),
                children: React.createElement(no, {
                    focusable: "false",
                    "aria-hidden": "true",
                    className: Je.TableHeadingSortSvg
                })
            })
              , xt = {
                onClick: () => Ma(qt, qn),
                className: G(Je.TableHeadingSortButton, !pi && (tt == null ? void 0 : tt.alignment) === "end" && Je["TableHeadingSortButton-heading-align-end"], pi && (tt == null ? void 0 : tt.alignment) === "end" && Je["TableHeadingSortButton-heading-align-end-currently-sorted"], Ra && !ja && (tt == null ? void 0 : tt.alignment) === "end" && Je["TableHeadingSortButton-heading-align-end-previously-sorted"]),
                tabIndex: w ? -1 : 0
            }
              , nn = React.createElement(Pi, {
                ...xt,
                children: [fi, React.createElement("span", {
                    className: G(g && w && tt.tooltipContent && Je.TableHeadingTooltipUnderlinePlaceholder),
                    children: En
                })]
            });
            if (!g || w)
                return React.createElement("div", {
                    className: Je.SortableTableHeadingWithCustomMarkup,
                    children: nn
                });
            const Bn = pi ? d : qn
              , Mn = g[qt][Bn];
            if (!tt.tooltipContent)
                return React.createElement("div", {
                    style: nr,
                    className: G(tt.paddingBlockEnd && Je["TableHeading-extra-padding-right"]),
                    children: React.createElement(Qn, {
                        ...Gt,
                        content: Mn,
                        preferredPosition: "above",
                        children: nn
                    })
                });
            if (tt.tooltipContent)
                return React.createElement("div", {
                    className: G(Je.SortableTableHeadingWithCustomMarkup, tt.paddingBlockEnd && Je["TableHeading-extra-padding-right"]),
                    style: nr,
                    children: React.createElement(Pi, {
                        ...xt,
                        children: [React.createElement(Qn, {
                            ...sa,
                            children: React.createElement("span", {
                                className: Je.TableHeadingUnderline,
                                children: En
                            })
                        }), React.createElement(Qn, {
                            ...Gt,
                            content: Mn,
                            preferredPosition: "above",
                            children: fi
                        })]
                    })
                })
        }
        return tt.tooltipContent ? React.createElement("div", {
            style: nr,
            className: G(tt.paddingBlockEnd && Je["TableHeading-extra-padding-right"]),
            children: React.createElement(Qn, {
                ...sa,
                activatorWrapper: "span",
                children: React.createElement("span", {
                    className: G(Je.TableHeadingUnderline, Je.SortableTableHeaderWrapper),
                    children: En
                })
            })
        }) : React.createElement("div", {
            style: nr,
            className: G(tt.paddingBlockEnd && Je["TableHeading-extra-padding-right"]),
            children: En
        })
    }
    function pe(tt) {
        M(aa.Page, tt)
    }
    function st() {
        if (!T || !L)
            return;
        const tt = s ?? O.translate("Polaris.IndexTable.selectAllItems", {
            itemsLength: I,
            resourceNamePlural: A.plural.toLocaleLowerCase()
        });
        return {
            content: R === Hl ? O.translate("Polaris.IndexTable.undo") : tt,
            onAction: Ye
        }
    }
    function Fo() {
        M(aa.All, !1)
    }
}
function yre(e) {
    return e.id ? e.id : typeof e.title == "string" ? e.title : ""
}
function bB({children: e, selectable: t=!0, itemCount: n, selectedItemsCount: i=0, resourceName: a, loading: r, hasMoreItems: s, condensed: l, onSelectionChange: c, paginatedSelectAllText: d, ...p}) {
    return React.createElement(React.Fragment, {
        children: React.createElement(ore, {
            selectable: t && !l,
            itemCount: n,
            selectedItemsCount: i,
            resourceName: a,
            loading: r,
            hasMoreItems: s,
            condensed: l,
            onSelectionChange: c,
            paginatedSelectAllText: d,
            children: React.createElement(vre, {
                ...p,
                children: e
            })
        })
    })
}
bB.Cell = yB;
bB.Row = fre;
var bre = {
    Code: "Polaris-InlineCode__Code"
};
const ZGe = ({children: e}) => React.createElement("code", {
    className: bre.Code,
    children: e
});
var VL = {
    KeyboardKey: "Polaris-KeyboardKey",
    small: "Polaris-KeyboardKey--small",
    extraSmall: "Polaris-KeyboardKey--extraSmall"
};
function N0({children: e="", size: t}) {
    const n = !t && e.length > 1 ? e.toLowerCase() : e.toUpperCase()
      , i = G(VL.KeyboardKey, t && VL[t]);
    return React.createElement("kbd", {
        className: i,
        children: n
    })
}
var Yc = {
    Layout: "Polaris-Layout",
    Section: "Polaris-Layout__Section",
    "Section-fullWidth": "Polaris-Layout__Section--fullWidth",
    "Section-oneHalf": "Polaris-Layout__Section--oneHalf",
    "Section-oneThird": "Polaris-Layout__Section--oneThird",
    AnnotatedSection: "Polaris-Layout__AnnotatedSection",
    AnnotationWrapper: "Polaris-Layout__AnnotationWrapper",
    AnnotationContent: "Polaris-Layout__AnnotationContent",
    Annotation: "Polaris-Layout__Annotation"
};
function kB({children: e, variant: t}) {
    const n = G(Yc.Section, Yc[`Section-${t}`]);
    return React.createElement("div", {
        className: n,
        children: e
    })
}
var UL = {
    TextContainer: "Polaris-TextContainer",
    spacingTight: "Polaris-TextContainer--spacingTight",
    spacingLoose: "Polaris-TextContainer--spacingLoose"
};
function em({spacing: e, children: t}) {
    const n = G(UL.TextContainer, e && UL[$t("spacing", e)]);
    return React.createElement("div", {
        className: n,
        children: t
    })
}
function kre({children: e, title: t, description: n, id: i}) {
    const a = typeof n == "string" ? React.createElement(ee, {
        as: "p",
        variant: "bodyMd",
        children: n
    }) : n;
    return React.createElement("div", {
        className: Yc.AnnotatedSection,
        children: React.createElement("div", {
            className: Yc.AnnotationWrapper,
            children: [React.createElement("div", {
                className: Yc.Annotation,
                children: React.createElement(em, {
                    spacing: "tight",
                    children: [React.createElement(ee, {
                        id: i,
                        variant: "headingMd",
                        as: "h2",
                        children: t
                    }), a && React.createElement(he, {
                        color: "text-secondary",
                        children: a
                    })]
                })
            }), React.createElement("div", {
                className: Yc.AnnotationContent,
                children: e
            })]
        })
    })
}
const is = function({sectioned: t, children: n}) {
    const i = t ? React.createElement(kB, {
        children: n
    }) : n;
    return React.createElement("div", {
        className: Yc.Layout,
        children: i
    })
};
is.AnnotatedSection = kre;
is.Section = kB;
var li = {
    LegacyFilters: "Polaris-LegacyFilters",
    LegacyFiltersContainer: "Polaris-LegacyFilters__LegacyFiltersContainer",
    LegacyFiltersContainerHeader: "Polaris-LegacyFilters__LegacyFiltersContainerHeader",
    LegacyFiltersDesktopContainerContent: "Polaris-LegacyFilters__LegacyFiltersDesktopContainerContent",
    LegacyFiltersMobileContainerContent: "Polaris-LegacyFilters__LegacyFiltersMobileContainerContent",
    LegacyFiltersContainerFooter: "Polaris-LegacyFilters__LegacyFiltersContainerFooter",
    LegacyFiltersMobileContainerFooter: "Polaris-LegacyFilters__LegacyFiltersMobileContainerFooter",
    EmptyFooterState: "Polaris-LegacyFilters__EmptyFooterState",
    FilterTriggerContainer: "Polaris-LegacyFilters__FilterTriggerContainer",
    FilterTrigger: "Polaris-LegacyFilters__FilterTrigger",
    FilterTriggerTitle: "Polaris-LegacyFilters__FilterTriggerTitle",
    AppliedFilterBadgeContainer: "Polaris-LegacyFilters__AppliedFilterBadgeContainer",
    open: "Polaris-LegacyFilters--open",
    FilterTriggerLabelContainer: "Polaris-LegacyFilters__FilterTriggerLabelContainer",
    first: "Polaris-LegacyFilters--first",
    last: "Polaris-LegacyFilters--last",
    FilterNodeContainer: "Polaris-LegacyFilters__FilterNodeContainer",
    SearchIcon: "Polaris-LegacyFilters__SearchIcon",
    Backdrop: "Polaris-LegacyFilters__Backdrop",
    HelpText: "Polaris-LegacyFilters__HelpText",
    TagsContainer: "Polaris-LegacyFilters__TagsContainer"
};
const z_ = React.createContext({});
var dr = {
    ConnectedFilterControl: "Polaris-LegacyFilters-ConnectedFilterControl",
    CenterContainer: "Polaris-LegacyFilters-ConnectedFilterControl__CenterContainer",
    right: "Polaris-LegacyFilters-ConnectedFilterControl--right",
    Item: "Polaris-LegacyFilters-ConnectedFilterControl__Item",
    "Item-focused": "Polaris-LegacyFilters-ConnectedFilterControl__Item--focused",
    ProxyButtonContainer: "Polaris-LegacyFilters-ConnectedFilterControl__ProxyButtonContainer",
    RightContainer: "Polaris-LegacyFilters-ConnectedFilterControl__RightContainer",
    MoreFiltersButtonContainer: "Polaris-LegacyFilters-ConnectedFilterControl__MoreFiltersButtonContainer",
    queryFieldHidden: "Polaris-LegacyFilters-ConnectedFilterControl--queryFieldHidden",
    RightContainerWithoutMoreFilters: "Polaris-LegacyFilters-ConnectedFilterControl__RightContainerWithoutMoreFilters",
    onlyButtonVisible: "Polaris-LegacyFilters-ConnectedFilterControl--onlyButtonVisible",
    Wrapper: "Polaris-LegacyFilters-ConnectedFilterControl__Wrapper",
    AuxiliaryContainer: "Polaris-LegacyFilters-ConnectedFilterControl__AuxiliaryContainer"
};
function AC({children: e}) {
    const {value: t, setTrue: n, setFalse: i} = Di(!1)
      , a = G(dr.Item, t && dr["Item-focused"]);
    return React.createElement("div", {
        onBlur: i,
        onFocus: n,
        className: a,
        children: e
    })
}
const Sre = 150;
class Cre extends React.Component {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            availableWidth: 0,
            proxyButtonsWidth: {}
        });
        te(this, "container", React.createRef());
        te(this, "proxyButtonContainer", React.createRef());
        te(this, "moreFiltersButtonContainer", React.createRef());
        te(this, "handleResize", ji( () => {
            this.measureProxyButtons(),
            this.measureAvailableWidth()
        }
        , 40, {
            leading: !0,
            trailing: !0,
            maxWait: 40
        }))
    }
    componentDidMount() {
        this.handleResize()
    }
    render() {
        const {children: n, rightPopoverableActions: i, rightAction: a, auxiliary: r, forceShowMorefiltersButton: s=!0, queryFieldHidden: l} = this.props
          , c = i != null ? this.getActionsToRender(i) : []
          , d = G(dr.ConnectedFilterControl, i && dr.right)
          , p = s || i && i.length !== c.length
          , f = G(dr.RightContainer, !p && dr.RightContainerWithoutMoreFilters, l && dr.queryFieldHidden)
          , v = c.length > 0 ? React.createElement("div", {
            className: f,
            children: this.popoverFrom(c)
        }) : null
          , g = G(dr.MoreFiltersButtonContainer, c.length === 0 && dr.onlyButtonVisible)
          , y = a ? React.createElement("div", {
            ref: this.moreFiltersButtonContainer,
            className: g,
            children: p && React.createElement(AC, {
                children: a
            })
        }) : null
          , b = i ? React.createElement("div", {
            className: dr.ProxyButtonContainer,
            ref: this.proxyButtonContainer,
            "aria-hidden": !0,
            children: i.map(C => React.createElement("div", {
                "data-key": C.key,
                children: this.activatorButtonFrom(C, {
                    proxy: !0
                })
            }, C.key))
        }) : null
          , k = r ? React.createElement("div", {
            className: dr.AuxiliaryContainer,
            children: r
        }) : null;
        return React.createElement(React.Fragment, {
            children: [b, React.createElement("div", {
                className: dr.Wrapper,
                children: [React.createElement("div", {
                    className: d,
                    ref: this.container,
                    children: [n ? React.createElement("div", {
                        className: dr.CenterContainer,
                        children: React.createElement(AC, {
                            children: n
                        })
                    }) : null, v, y, React.createElement(Ni, {
                        event: "resize",
                        handler: this.handleResize
                    })]
                }), k]
            })]
        })
    }
    measureProxyButtons() {
        if (this.proxyButtonContainer.current) {
            const n = {};
            this.proxyButtonContainer.current && Array.from(this.proxyButtonContainer.current.children).forEach(a => {
                const r = a.getBoundingClientRect().width + 78
                  , s = a instanceof HTMLElement && a.dataset.key;
                s && (n[s] = r)
            }
            ),
            this.setState({
                proxyButtonsWidth: n
            })
        }
    }
    measureAvailableWidth() {
        if (this.container.current && this.moreFiltersButtonContainer.current) {
            const n = this.container.current.getBoundingClientRect().width
              , i = this.moreFiltersButtonContainer.current.getBoundingClientRect().width
              , a = 0
              , r = this.props.queryFieldHidden ? 0 : Sre
              , s = n - r - i - a;
            this.setState({
                availableWidth: s
            })
        }
    }
    getActionsToRender(n) {
        let i = this.state.availableWidth;
        const a = [];
        for (let r = 0; i > 0 && r < n.length; r++) {
            const s = n[r]
              , l = this.state.proxyButtonsWidth[s.key];
            if (l <= i)
                a.push(s),
                i -= l;
            else
                break
        }
        return a
    }
    activatorButtonFrom(n, i) {
        const a = i != null && i.proxy ? void 0 : `Activator-${n.key}`;
        return React.createElement(nt, {
            onClick: n.onAction,
            disclosure: !0,
            disabled: this.props.disabled || n.disabled,
            id: a,
            size: "large",
            children: n.content
        })
    }
    popoverFrom(n) {
        return n.map(i => React.createElement(AC, {
            children: React.createElement(Fn, {
                active: i.popoverOpen,
                activator: this.activatorButtonFrom(i),
                onClose: i.onAction,
                preferredAlignment: "left",
                sectioned: !0,
                children: i.popoverContent
            })
        }, i.key))
    }
}
function Are({children: e, hidden: t}) {
    return t ? React.createElement(ee, {
        as: "span",
        visuallyHidden: !0,
        children: e
    }) : React.createElement(React.Fragment, {
        children: e
    })
}
var wa = {
    Tag: "Polaris-Tag",
    disabled: "Polaris-Tag--disabled",
    clickable: "Polaris-Tag--clickable",
    linkable: "Polaris-Tag--linkable",
    removable: "Polaris-Tag--removable",
    Button: "Polaris-Tag__Button",
    Icon: "Polaris-Tag__Icon",
    Link: "Polaris-Tag__Link",
    segmented: "Polaris-Tag--segmented",
    Text: "Polaris-Tag__Text",
    sizeLarge: "Polaris-Tag--sizeLarge",
    overlay: "Polaris-Tag--overlay",
    variantSecondary: "Polaris-Tag--variantSecondary"
};
function T0({children: e, disabled: t=!1, onClick: n, onRemove: i, accessibilityLabel: a, url: r, size: s, variant: l}) {
    const c = at()
      , d = i && r
      , p = G(wa.Tag, t && wa.disabled, n && wa.clickable, i && wa.removable, r && !t && wa.linkable, d && wa.segmented, s && wa[$t("size", s)], l && wa[$t("variant", l)]);
    let f = a;
    f || (f = typeof e == "string" ? e : void 0);
    const v = React.createElement(ee, {
        as: "span",
        variant: "bodySm",
        truncate: !0,
        children: React.createElement("span", {
            title: f,
            className: wa.Text,
            children: e
        })
    });
    if (n)
        return React.createElement("button", {
            type: "button",
            disabled: t,
            className: p,
            onClick: n,
            children: v
        });
    const g = c.translate("Polaris.Tag.ariaLabel", {
        children: f || ""
    })
      , y = i ? React.createElement("button", {
        type: "button",
        "aria-label": g,
        className: G(wa.Button, wa.Icon, d && wa.segmented),
        onClick: i,
        onMouseUp: cu,
        disabled: t,
        children: React.createElement(Fe, {
            tone: "legacy-inherit",
            type: "x",
            size: "small"
        })
    }) : null
      , b = r && !t ? React.createElement("a", {
        className: G(wa.Link, d && wa.segmented),
        href: r,
        children: v
    }) : v;
    return React.createElement("span", {
        className: p,
        "aria-disabled": t,
        children: [b, s === "large" && React.createElement("span", {
            className: wa.overlay
        }), y]
    })
}
var Ki = {
    Sheet: "Polaris-Sheet",
    Container: "Polaris-Sheet__Container",
    Bottom: "Polaris-Sheet__Bottom",
    enterBottom: "Polaris-Sheet--enterBottom",
    enterBottomActive: "Polaris-Sheet--enterBottomActive",
    exitBottom: "Polaris-Sheet--exitBottom",
    exitBottomActive: "Polaris-Sheet--exitBottomActive",
    Right: "Polaris-Sheet__Right",
    enterRight: "Polaris-Sheet--enterRight",
    enterRightActive: "Polaris-Sheet--enterRightActive",
    exitRight: "Polaris-Sheet--exitRight",
    exitRightActive: "Polaris-Sheet--exitRightActive"
};
const xre = {
    enter: G(Ki.Bottom, Ki.enterBottom),
    enterActive: G(Ki.Bottom, Ki.enterBottomActive),
    exit: G(Ki.Bottom, Ki.exitBottom),
    exitActive: G(Ki.Bottom, Ki.exitBottomActive)
}
  , _re = {
    enter: G(Ki.Right, Ki.enterRight),
    enterActive: G(Ki.Right, Ki.enterRightActive),
    exit: G(Ki.Right, Ki.exitRight),
    exitActive: G(Ki.Right, Ki.exitRightActive)
};
function $L({children: e, open: t, onClose: n, onEntered: i, onExit: a, accessibilityLabel: r, activator: s}) {
    const l = Xr()
      , {isNavigationCollapsed: c} = dc()
      , d = React.useRef(null)
      , p = React.useRef(null)
      , f = React.useCallback( () => {
        n();
        const g = s && HL(s) ? s && s.current : p.current;
        g && requestAnimationFrame( () => ra(g))
    }
    , [s, n]);
    React.useEffect( () => {}
    , []);
    const v = s && !HL(s) ? React.createElement("div", {
        ref: p,
        children: s
    }) : null;
    return React.createElement(React.Fragment, {
        children: [v, React.createElement(Sr, {
            idPrefix: "sheet",
            children: [React.createElement(Cr, {
                nodeRef: d,
                classNames: c ? xre : _re,
                timeout: parseInt(l.motion["motion-duration-300"], 10),
                in: t,
                mountOnEnter: !0,
                unmountOnExit: !0,
                onEntered: i,
                onExit: a,
                children: React.createElement("div", {
                    className: Ki.Container,
                    ...Hd.props,
                    ...Ux.props,
                    ref: d,
                    children: React.createElement(hb, {
                        trapping: t,
                        children: React.createElement("div", {
                            role: "dialog",
                            "aria-modal": !0,
                            tabIndex: -1,
                            className: Ki.Sheet,
                            "aria-label": r,
                            children: e
                        })
                    })
                })
            }), React.createElement(Ci, {
                keyCode: tn.Escape,
                handler: f
            }), t && React.createElement(Wf, {
                transparent: !0,
                onClick: f
            })]
        })]
    })
}
function HL(e) {
    return Object.prototype.hasOwnProperty.call(e, "current")
}
var Is = function(e) {
    return e.Filter = "Filter",
    e.Shortcut = "Shortcut",
    e
}(Is || {});
class SB extends React.Component {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            open: !1,
            readyForFocus: !1
        });
        te(this, "moreFiltersButtonContainer", React.createRef());
        te(this, "moreFiltersDoneButtonContainer", React.createRef());
        te(this, "focusNode", React.createRef());
        te(this, "closeFilters", () => {
            this.setState({
                open: !1
            }, () => {
                this.moreFiltersButtonContainer.current && ra(this.moreFiltersButtonContainer.current, !1)
            }
            )
        }
        );
        te(this, "toggleFilters", () => {
            this.state.open === !0 ? this.closeFilters() : this.openFilters()
        }
        );
        te(this, "setReadyForFocus", n => () => {
            this.setState({
                readyForFocus: n
            })
        }
        );
        te(this, "handleClearAll", () => {
            this.props.onClearAll(),
            this.moreFiltersDoneButtonContainer.current && ra(this.moreFiltersDoneButtonContainer.current, !1)
        }
        )
    }
    render() {
        const {filters: n, queryValue: i, onQueryBlur: a, onQueryChange: r, onQueryFocus: s, focused: l, onClearAll: c, appliedFilters: d, onQueryClear: p, queryPlaceholder: f, children: v, disabled: g=!1, helpText: y, hideTags: b, hideQueryField: k, disableQueryField: C=!1, i18n: x, mediaQuery: {isNavigationCollapsed: A}} = this.props
          , {resourceName: _} = this.context
          , {open: w, readyForFocus: T} = this.state
          , P = w ? React.createElement(React.Fragment, {
            children: [React.createElement(Hf, {}), React.createElement("div", {
                className: li.Backdrop,
                onClick: this.closeFilters
            })]
        }) : null
          , I = n.map( (Y, ue) => {
            const ge = this.state[`${Y.key}${Is.Filter}`] === !0
              , de = ge ? "chevron-up" : "chevron-down"
              , ve = G(li.FilterTriggerContainer, ge && li.open, ue === 0 && li.first, n.length !== 1 && ue === n.length - 1 && li.last)
              , Le = this.getAppliedFilterContent(Y.key)
              , Ce = Le ? React.createElement("div", {
                className: li.AppliedFilterBadgeContainer,
                children: React.createElement(rn, {
                    tone: "new",
                    children: Le
                })
            }) : null
              , Ae = `${Y.key}Collapsible`
              , re = G(li.FilterTrigger);
            return React.createElement("div", {
                className: ve,
                children: [React.createElement("button", {
                    onClick: () => this.toggleFilter(Y.key),
                    className: re,
                    id: `${Y.key}ToggleButton`,
                    type: "button",
                    "aria-controls": Ae,
                    "aria-expanded": ge,
                    children: [React.createElement("div", {
                        className: li.FilterTriggerLabelContainer,
                        children: [React.createElement("h3", {
                            className: li.FilterTriggerTitle,
                            children: React.createElement(ee, {
                                as: "span",
                                tone: this.props.disabled || Y.disabled ? "subdued" : void 0,
                                children: Y.label
                            })
                        }), React.createElement("span", {
                            className: li.FilterTriggerIcon,
                            children: React.createElement(Fe, {
                                type: de,
                                tone: "neutral"
                            })
                        })]
                    }), Ce]
                }), React.createElement(Xd, {
                    id: Ae,
                    open: ge,
                    onAnimationEnd: this.setReadyForFocus(!0),
                    children: React.createElement("div", {
                        className: li.FilterNodeContainer,
                        children: React.createElement(iB, {
                            disabled: !ge || !T || !w,
                            root: this.focusNode,
                            children: this.generateFilterMarkup(Y)
                        })
                    })
                })]
            }, Y.key)
        }
        )
          , L = d ? d.length : 0
          , R = b && L > 0 ? x.translate("Polaris.Filters.moreFiltersWithCount", {
            count: L
        }) : x.translate("Polaris.Filters.moreFilters")
          , D = n.length ? React.createElement("div", {
            ref: this.moreFiltersButtonContainer,
            children: React.createElement(nt, {
                onClick: this.toggleFilters,
                disabled: g,
                size: "large",
                children: R
            })
        }) : null
          , M = _ || {
            singular: x.translate("Polaris.ResourceList.defaultItemSingular"),
            plural: x.translate("Polaris.ResourceList.defaultItemPlural")
        }
          , O = this.transformFilters(n)
          , z = React.createElement(Cre, {
            rightPopoverableActions: O,
            rightAction: D,
            auxiliary: v,
            disabled: g,
            forceShowMorefiltersButton: n.length > O.length,
            queryFieldHidden: k,
            children: k ? null : React.createElement(To, {
                placeholder: f || x.translate("Polaris.Filters.filter", {
                    resourceName: M.plural
                }),
                onChange: r,
                onBlur: a,
                onFocus: s,
                value: i,
                focused: l,
                label: f || x.translate("Polaris.Filters.filter", {
                    resourceName: M.plural
                }),
                labelHidden: !0,
                prefix: React.createElement("span", {
                    className: li.SearchIcon,
                    children: React.createElement(Fe, {
                        type: "search",
                        tone: "legacy-inherit"
                    })
                }),
                clearButton: !0,
                onClearButtonClick: p,
                disabled: g || C,
                autoComplete: "off"
            })
        })
          , B = G(li.LegacyFiltersContainerHeader)
          , H = React.createElement("div", {
            className: B,
            children: [React.createElement(ee, {
                variant: "headingLg",
                as: "h3",
                children: R
            }), React.createElement(nt, {
                variant: "plain",
                accessibilityLabel: x.translate("Polaris.Filters.cancel"),
                onClick: this.closeFilters,
                icon: "x"
            })]
        })
          , q = React.createElement("div", {
            className: B,
            children: [React.createElement(nt, {
                variant: "plain",
                accessibilityLabel: x.translate("Polaris.Filters.cancel"),
                onClick: this.closeFilters,
                icon: "x"
            }), React.createElement(ee, {
                variant: "headingLg",
                as: "h3",
                children: R
            }), React.createElement(nt, {
                onClick: this.closeFilters,
                variant: "primary",
                children: x.translate("Polaris.Filters.done")
            })]
        })
          , W = G(li.LegacyFiltersContainerFooter)
          , V = React.createElement("div", {
            className: W,
            children: [React.createElement(nt, {
                onClick: this.handleClearAll,
                disabled: !this.hasAppliedFilters(),
                children: x.translate("Polaris.Filters.clearAllFilters")
            }), React.createElement("div", {
                ref: this.moreFiltersDoneButtonContainer,
                children: React.createElement(nt, {
                    onClick: this.closeFilters,
                    variant: "primary",
                    children: x.translate("Polaris.Filters.done")
                })
            })]
        })
          , $ = React.createElement("div", {
            className: li.LegacyFiltersMobileContainerFooter,
            children: this.hasAppliedFilters() ? React.createElement(nt, {
                onClick: c,
                fullWidth: !0,
                children: x.translate("Polaris.Filters.clearAllFilters")
            }) : React.createElement("div", {
                className: li.EmptyFooterState,
                children: React.createElement(ee, {
                    tone: "subdued",
                    as: "span",
                    children: React.createElement("p", {
                        children: x.translate("Polaris.Filters.noFiltersApplied")
                    })
                })
            })
        })
          , Q = !d || d.length < 1
          , K = b ? null : React.createElement(Are, {
            hidden: Q,
            children: React.createElement("div", {
                className: li.TagsContainer,
                "aria-live": "polite",
                children: (d || []).map(Y => React.createElement(T0, {
                    onRemove: () => {
                        Y.onRemove(Y.key)
                    }
                    ,
                    disabled: g,
                    children: Y.label
                }, Y.key))
            })
        })
          , J = G(li.LegacyFiltersMobileContainerContent)
          , X = G(li.LegacyFiltersDesktopContainerContent)
          , se = A ? React.createElement($L, {
            accessibilityLabel: R,
            open: w,
            onClose: this.closeFilters,
            onEntered: this.setReadyForFocus(!0),
            onExit: this.setReadyForFocus(!1),
            children: [q, React.createElement(La, {
                className: J,
                shadow: !0,
                children: [I, $]
            })]
        }) : React.createElement($L, {
            accessibilityLabel: R,
            open: w,
            onClose: this.closeFilters,
            onEntered: this.setReadyForFocus(!0),
            onExit: this.setReadyForFocus(!1),
            children: React.createElement("div", {
                className: li.LegacyFiltersContainer,
                children: [H, React.createElement(La, {
                    className: X,
                    shadow: !0,
                    children: I
                }), V]
            })
        })
          , ne = y ? React.createElement("div", {
            id: "FiltersHelpText",
            className: li.HelpText,
            children: React.createElement(ee, {
                tone: "subdued",
                as: "span",
                variant: "bodySm",
                children: y
            })
        }) : null;
        return React.createElement(a2.Provider, {
            value: !0,
            children: React.createElement("div", {
                className: li.LegacyFilters,
                children: [z, se, K, ne, P, React.createElement(Ci, {
                    keyCode: tn.Escape,
                    handler: this.closeFilters
                })]
            })
        })
    }
    hasAppliedFilters() {
        const {appliedFilters: n, queryValue: i} = this.props;
        return !!(n && n.length > 0) || !!(i && i !== "")
    }
    getAppliedFilterContent(n) {
        const {appliedFilters: i} = this.props;
        if (!i)
            return;
        const a = i.find(r => r.key === n);
        return a == null ? void 0 : a.label
    }
    getAppliedFilterRemoveHandler(n) {
        const {appliedFilters: i} = this.props;
        if (!i)
            return;
        const a = i.find(r => r.key === n);
        return a == null ? void 0 : a.onRemove
    }
    openFilters() {
        this.setState({
            open: !0
        })
    }
    toggleFilter(n) {
        this.state[`${n}${Is.Filter}`] === !0 ? this.setState({
            readyForFocus: !1,
            [`${n}${Is.Filter}`]: !1
        }) : this.setState({
            readyForFocus: !1,
            [`${n}${Is.Filter}`]: !0
        })
    }
    openFilterShortcut(n) {
        this.setState({
            [`${n}${Is.Shortcut}`]: !0
        })
    }
    closeFilterShortcut(n) {
        this.setState({
            [`${n}${Is.Shortcut}`]: !1
        })
    }
    toggleFilterShortcut(n) {
        this.state[`${n}${Is.Shortcut}`] === !0 ? this.closeFilterShortcut(n) : this.openFilterShortcut(n)
    }
    transformFilters(n) {
        const i = [];
        return wre(n).forEach(a => {
            const {key: r, label: s, disabled: l} = a;
            i.push({
                popoverContent: this.generateFilterMarkup(a),
                popoverOpen: !!this.state[`${r}${Is.Shortcut}`],
                key: r,
                content: s,
                disabled: l,
                onAction: () => this.toggleFilterShortcut(r)
            })
        }
        ),
        i
    }
    generateFilterMarkup(n) {
        const i = this.props.i18n
          , a = this.getAppliedFilterRemoveHandler(n.key)
          , r = a == null ? void 0 : () => {
            a(n.key)
        }
          , s = !n.hideClearButton && React.createElement(nt, {
            variant: "plain",
            disabled: r == null,
            onClick: r,
            accessibilityLabel: i.translate("Polaris.Filters.clearLabel", {
                filterName: n.label
            }),
            children: i.translate("Polaris.Filters.clear")
        });
        return React.createElement("div", {
            ref: this.focusNode,
            children: React.createElement(Zr, {
                vertical: !0,
                spacing: "tight",
                children: [n.filter, s]
            })
        })
    }
}
te(SB, "contextType", z_);
function wre(e) {
    return e.filter(t => t.shortcut === !0)
}
function YGe(e) {
    const t = at()
      , n = dc();
    return React.createElement(SB, {
        ...e,
        i18n: t,
        mediaQuery: n
    })
}
function WL(e, t, n, i, a) {
    const r = i.reduce( (d, p) => d + p, 0)
      , s = e.map( (d, p) => p)
      , l = []
      , c = [];
    if (a > r)
        l.push(...s);
    else {
        l.push(t);
        let d = i[t];
        s.forEach(p => {
            if (p !== t) {
                const f = i[p];
                if (d + f >= a - n) {
                    c.push(p);
                    return
                }
                l.push(p),
                d += f
            }
        }
        )
    }
    return {
        visibleTabs: l,
        hiddenTabs: c
    }
}
var xn = {
    LegacyTabs: "Polaris-LegacyTabs",
    fitted: "Polaris-LegacyTabs--fitted",
    TabContainer: "Polaris-LegacyTabs__TabContainer",
    Title: "Polaris-LegacyTabs__Title",
    fillSpace: "Polaris-LegacyTabs--fillSpace",
    Tab: "Polaris-LegacyTabs__Tab",
    "Tab-selected": "Polaris-LegacyTabs__Tab--selected",
    titleWithIcon: "Polaris-LegacyTabs--titleWithIcon",
    Panel: "Polaris-LegacyTabs__Panel",
    "Panel-hidden": "Polaris-LegacyTabs__Panel--hidden",
    Item: "Polaris-LegacyTabs__Item",
    DisclosureTab: "Polaris-LegacyTabs__DisclosureTab",
    "DisclosureTab-visible": "Polaris-LegacyTabs__DisclosureTab--visible",
    DisclosureActivator: "Polaris-LegacyTabs__DisclosureActivator",
    TabMeasurer: "Polaris-LegacyTabs__TabMeasurer"
};
function qL({hidden: e, id: t, tabID: n, children: i}) {
    const a = G(xn.Panel, e && xn["Panel-hidden"]);
    return React.createElement("div", {
        className: a,
        id: t,
        role: "tabpanel",
        "aria-labelledby": n,
        tabIndex: -1,
        children: i
    })
}
function CB({id: e, focused: t, siblingTabHasFocus: n, children: i, onClick: a, selected: r, url: s, panelID: l, measuring: c, accessibilityLabel: d}) {
    const p = React.useRef(r)
      , f = React.useRef(!1)
      , v = React.useRef(null);
    React.useEffect( () => {
        if (c)
            return;
        (t || document.activeElement && document.activeElement.id === e) && r && l != null && !f.current && (GL(l),
        f.current = !0),
        r && !p.current && l != null ? GL(l) : t && v.current != null && ra(v.current),
        p.current = r
    }
    , [t, e, c, l, r]);
    const g = a && a.bind(null, e)
      , y = G(xn.Tab, r && xn["Tab-selected"]);
    let b;
    r && !n && !c || t && !c ? b = 0 : b = -1;
    const k = G(xn.TabContainer, r && xn.Underline)
      , C = s ? React.createElement(Bi, {
        id: e,
        url: s,
        role: "tab",
        tabIndex: b,
        onClick: g,
        className: y,
        "aria-selected": r,
        "aria-controls": l,
        "aria-label": d,
        onMouseUp: cu,
        children: React.createElement("span", {
            className: xn.Title,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyMd",
                fontWeight: "semibold",
                children: i
            })
        })
    }) : React.createElement("button", {
        id: e,
        role: "tab",
        type: "button",
        tabIndex: b,
        className: y,
        onClick: g,
        "aria-selected": r,
        "aria-controls": l,
        "aria-label": d,
        onMouseUp: cu,
        children: React.createElement("span", {
            className: xn.Title,
            children: React.createElement(ee, {
                as: "span",
                variant: "bodyMd",
                fontWeight: "semibold",
                children: i
            })
        })
    });
    return React.createElement("li", {
        className: k,
        ref: v,
        role: "presentation",
        children: C
    })
}
function GL(e) {
    const t = document.getElementById(e);
    t && t.focus({
        preventScroll: !0
    })
}
const Nre = React.memo(function({selected: t, tabs: n, activator: i, tabToFocus: a, siblingTabHasFocus: r, handleMeasurement: s}) {
    const l = React.useRef(null)
      , c = React.useRef(null)
      , d = React.useCallback( () => {
        c.current && cancelAnimationFrame(c.current),
        c.current = requestAnimationFrame( () => {
            if (!l.current)
                return;
            const v = l.current.offsetWidth
              , g = l.current.children
              , b = Array.from(g).map(C => Math.ceil(C.getBoundingClientRect().width))
              , k = b.pop() || 0;
            s({
                containerWidth: v,
                disclosureWidth: k,
                hiddenTabWidths: b
            })
        }
        )
    }
    , [s]);
    React.useEffect( () => {
        d()
    }
    , [d, n]),
    Vf( () => {}
    );
    const p = n.map( (v, g) => React.createElement(CB, {
        measuring: !0,
        id: `${v.id}Measurer`,
        siblingTabHasFocus: r,
        focused: g === a,
        selected: g === t,
        onClick: Tre,
        url: v.url,
        children: v.content
    }, `${g}${v.id}Hidden`))
      , f = G(xn.LegacyTabs, xn.TabMeasurer);
    return React.createElement("div", {
        className: f,
        ref: l,
        children: [React.createElement(Ni, {
            event: "resize",
            handler: d
        }), p, i]
    })
});
function Tre() {}
var VA;
let Pre = (VA = class extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "focusedNode", null);
        te(this, "setFocusedNode", n => {
            this.focusedNode = n
        }
        )
    }
    componentDidMount() {
        const {focusedNode: n} = this
          , {focused: i} = this.props;
        n && n instanceof HTMLElement && i && n.focus()
    }
    componentDidUpdate() {
        const {focusedNode: n} = this
          , {focused: i} = this.props;
        n && n instanceof HTMLElement && i && n.focus()
    }
    render() {
        const {id: n, panelID: i, children: a, url: r, accessibilityLabel: s, onClick: l=Ire} = this.props
          , c = G(xn.Item)
          , d = {
            id: n,
            ref: this.setFocusedNode,
            onClick: l,
            className: c,
            "aria-controls": i,
            "aria-selected": !1,
            "aria-label": s
        }
          , p = r ? React.createElement(Bi, {
            ...d,
            url: r,
            children: a
        }) : React.createElement("button", {
            ...d,
            type: "button",
            children: a
        });
        return React.createElement("li", {
            children: p
        })
    }
}
,
te(VA, "contextType", Xx),
VA);
function Ire() {}
function Lre({focusIndex: e, disclosureTabs: t, onClick: n=KL, onKeyPress: i=KL}) {
    const a = t.map( ({id: r, content: s, ...l}, c) => React.createElement(Pre, {
        ...l,
        id: r,
        focused: c === e,
        onClick: n.bind(null, r),
        children: s
    }, r));
    return React.createElement("div", {
        onKeyDown: Fre,
        onKeyUp: i,
        children: React.createElement(he, {
            as: "ul",
            padding: "200",
            children: a
        })
    })
}
function KL() {}
function Fre(e) {
    const {key: t} = e;
    (t === "ArrowLeft" || t === "ArrowRight") && (e.preventDefault(),
    e.stopPropagation())
}
class Ere extends React.PureComponent {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            disclosureWidth: 0,
            containerWidth: 1 / 0,
            tabWidths: [],
            visibleTabs: [],
            hiddenTabs: [],
            showDisclosure: !1,
            tabToFocus: -1
        });
        te(this, "handleKeyPress", n => {
            const {tabToFocus: i, visibleTabs: a, hiddenTabs: r, showDisclosure: s} = this.state
              , l = n.key
              , c = s ? a.concat(r) : [...a];
            let d = c.indexOf(i);
            l === "ArrowRight" && (d += 1,
            d === c.length && (d = 0)),
            l === "ArrowLeft" && (d === -1 || d === 0 ? d = c.length - 1 : d -= 1),
            this.setState({
                tabToFocus: c[d]
            })
        }
        );
        te(this, "renderTabMarkup", (n, i) => {
            const {selected: a, children: r} = this.props
              , {tabToFocus: s} = this.state
              , l = n.panelID || `${n.id}-panel`;
            return React.createElement(CB, {
                id: n.id,
                siblingTabHasFocus: s > -1,
                focused: i === s,
                selected: i === a,
                onClick: this.handleTabClick,
                panelID: r ? l : void 0,
                accessibilityLabel: n.accessibilityLabel,
                url: n.url,
                children: n.content
            }, `${i}-${n.id}`)
        }
        );
        te(this, "handleFocus", n => {
            const {selected: i, tabs: a} = this.props
              , r = n.target;
            if (r.classList.contains(xn.Tab) || r.classList.contains(xn.Item)) {
                let l = -1;
                a.every( (c, d) => c.id === r.id ? (l = d,
                !1) : !0),
                this.setState({
                    tabToFocus: l
                });
                return
            }
            if (r.classList.contains(xn.DisclosureActivator))
                return;
            if (!n.relatedTarget) {
                this.setState({
                    tabToFocus: i
                });
                return
            }
            const s = n.relatedTarget;
            s instanceof HTMLElement && !s.classList.contains(xn.Tab) && !s.classList.contains(xn.Item) && !s.classList.contains(xn.DisclosureActivator) && this.setState({
                tabToFocus: i
            })
        }
        );
        te(this, "handleBlur", n => {
            if (n.relatedTarget == null) {
                this.setState({
                    tabToFocus: -1
                });
                return
            }
            const i = n.relatedTarget;
            i instanceof HTMLElement && !i.classList.contains(xn.Tab) && !i.classList.contains(xn.Item) && this.setState({
                tabToFocus: -1
            })
        }
        );
        te(this, "handleDisclosureActivatorClick", () => {
            this.setState( ({showDisclosure: n}) => ({
                showDisclosure: !n
            }))
        }
        );
        te(this, "handleClose", () => {
            this.setState({
                showDisclosure: !1
            })
        }
        );
        te(this, "handleMeasurement", n => {
            const {tabs: i, selected: a} = this.props
              , {tabToFocus: r} = this.state
              , {hiddenTabWidths: s, containerWidth: l, disclosureWidth: c} = n
              , {visibleTabs: d, hiddenTabs: p} = WL(i, a, c, s, l);
            this.setState({
                tabToFocus: r === -1 ? -1 : a,
                visibleTabs: d,
                hiddenTabs: p,
                disclosureWidth: c,
                containerWidth: l,
                tabWidths: s
            })
        }
        );
        te(this, "handleTabClick", n => {
            const {tabs: i, onSelect: a=Mre} = this.props
              , r = i.find(l => l.id === n);
            if (r == null)
                return;
            const s = i.indexOf(r);
            a(s)
        }
        )
    }
    static getDerivedStateFromProps(n, i) {
        const {disclosureWidth: a, tabWidths: r, containerWidth: s} = i
          , {visibleTabs: l, hiddenTabs: c} = WL(n.tabs, n.selected, a, r, s);
        return {
            visibleTabs: l,
            hiddenTabs: c,
            selected: n.selected
        }
    }
    render() {
        const {tabs: n, selected: i, fitted: a, children: r, i18n: s, disclosureText: l} = this.props
          , {tabToFocus: c, visibleTabs: d, hiddenTabs: p, showDisclosure: f} = this.state
          , v = p.map(I => n[I])
          , g = r ? n.map( (I, L) => i === L ? React.createElement(qL, {
            id: n[L].panelID || `${n[L].id}-panel`,
            tabID: n[L].id,
            children: r
        }, n[L].id) : React.createElement(qL, {
            id: n[L].panelID || `${n[L].id}-panel`,
            tabID: n[L].id,
            hidden: !0
        }, n[L].id)) : null
          , y = d.sort( (I, L) => I - L).map(I => this.renderTabMarkup(n[I], I))
          , b = d.length < n.length
          , k = !!l
          , C = G(xn.LegacyTabs, a && xn.fitted, b && xn.fillSpace)
          , x = G(xn.DisclosureTab, b && xn["DisclosureTab-visible"])
          , A = G(xn.DisclosureActivator, k && xn.Tab)
          , _ = G(xn.Title, k && xn.titleWithIcon)
          , w = k ? React.createElement(React.Fragment, {
            children: [l, React.createElement(Fe, {
                tone: "neutral",
                color: "subdued",
                type: "chevron-down"
            })]
        }) : React.createElement(Fe, {
            tone: "neutral",
            color: "subdued",
            type: "menu-horizontal"
        })
          , T = React.createElement("button", {
            type: "button",
            className: A,
            onClick: this.handleDisclosureActivatorClick,
            "aria-label": s.translate("Polaris.Tabs.toggleTabsLabel"),
            children: React.createElement("span", {
                className: _,
                children: w
            })
        })
          , P = l ? React.createElement("div", {
            className: xn.TabContainer,
            children: T
        }) : T;
        return React.createElement("div", {
            children: [React.createElement(he, {
                borderBlockEndWidth: "025",
                borderColor: "border-secondary",
                paddingInlineStart: "200",
                paddingInlineEnd: "200",
                children: [React.createElement(Nre, {
                    tabToFocus: c,
                    activator: P,
                    selected: i,
                    tabs: n,
                    siblingTabHasFocus: c > -1,
                    handleMeasurement: this.handleMeasurement
                }), React.createElement("ul", {
                    role: "tablist",
                    className: C,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onKeyDown: Rre,
                    onKeyUp: this.handleKeyPress,
                    children: [y, React.createElement("li", {
                        className: x,
                        role: "presentation",
                        children: React.createElement(Fn, {
                            preferredPosition: "below",
                            activator: P,
                            active: b && f,
                            onClose: this.handleClose,
                            autofocusTarget: "first-node",
                            children: React.createElement(Lre, {
                                focusIndex: p.indexOf(c),
                                disclosureTabs: v,
                                onClick: this.handleTabClick,
                                onKeyPress: this.handleKeyPress
                            })
                        })
                    })]
                })]
            }), g]
        })
    }
}
function Mre() {}
function Rre(e) {
    const {key: t} = e;
    (t === "ArrowLeft" || t === "ArrowRight") && (e.preventDefault(),
    e.stopPropagation())
}
function XGe(e) {
    const t = at();
    return React.createElement(Ere, {
        ...e,
        i18n: t
    })
}
var xC = {
    Link: "Polaris-Link",
    monochrome: "Polaris-Link--monochrome",
    removeUnderline: "Polaris-Link--removeUnderline"
};
function ga({url: e, children: t, onClick: n, external: i, target: a, id: r, monochrome: s, removeUnderline: l, accessibilityLabel: c, dataPrimaryLink: d}) {
    return React.createElement(VO.Consumer, {
        children: p => {
            const f = s || p
              , v = G(xC.Link, f && xC.monochrome, l && xC.removeUnderline);
            return e ? React.createElement(Bi, {
                onClick: n,
                className: v,
                url: e,
                external: i,
                target: a,
                id: r,
                "aria-label": c,
                "data-primary-link": d,
                children: t
            }) : React.createElement("button", {
                type: "button",
                onClick: n,
                className: v,
                id: r,
                "aria-label": c,
                "data-primary-link": d,
                children: t
            })
        }
    })
}
var Iv = {
    List: "Polaris-List",
    typeNumber: "Polaris-List--typeNumber",
    Item: "Polaris-List__Item",
    spacingLoose: "Polaris-List--spacingLoose"
};
function jre({children: e}) {
    return React.createElement("li", {
        className: Iv.Item,
        children: e
    })
}
const P0 = function({children: t, gap: n="loose", type: i="bullet"}) {
    const a = G(Iv.List, n && Iv[$t("spacing", n)], i && Iv[$t("type", i)])
      , r = i === "bullet" ? "ul" : "ol";
    return React.createElement(r, {
        className: a,
        children: t
    })
};
P0.Item = jre;
const V_ = React.memo(function() {
    const {startLoading: t, stopLoading: n} = tr();
    return React.useEffect( () => (t(),
    () => {
        n()
    }
    ), [t, n]),
    null
});
var zo = {
    MediaCard: "Polaris-MediaCard",
    portrait: "Polaris-MediaCard--portrait",
    MediaContainer: "Polaris-MediaCard__MediaContainer",
    sizeSmall: "Polaris-MediaCard--sizeSmall",
    InfoContainer: "Polaris-MediaCard__InfoContainer",
    ActionContainer: "Polaris-MediaCard__ActionContainer"
};
function eKe({title: e, children: t, primaryAction: n, secondaryAction: i, description: a, popoverActions: r=[], portrait: s=!1, size: l="medium", onDismiss: c}) {
    const d = at()
      , {value: p, toggle: f} = Di(!1);
    let v = null;
    if (e) {
        const I = typeof e == "string" ? React.createElement(ee, {
            variant: "headingSm",
            as: "h2",
            children: e
        }) : e;
        v = React.createElement("div", {
            children: I
        })
    }
    const g = c ? React.createElement(nt, {
        onClick: c,
        size: "slim",
        accessibilityLabel: d.translate("Polaris.MediaCard.dismissButton"),
        variant: "tertiary",
        icon: "x"
    }) : null
      , y = React.createElement(Te, {
        blockAlign: "center",
        children: React.createElement(nt, {
            onClick: f,
            size: "slim",
            accessibilityLabel: d.translate("Polaris.MediaCard.popoverButton"),
            variant: "tertiary",
            icon: "menu-horizontal"
        })
    })
      , b = r.length > 0 ? React.createElement(Fn, {
        active: p,
        activator: y,
        onClose: f,
        preferredAlignment: "left",
        preferredPosition: "below",
        children: React.createElement(ka, {
            items: r,
            onActionAnyItem: f
        })
    }) : null
      , k = n ? React.createElement("div", {
        children: Qr(n)
    }) : null
      , C = i ? React.createElement("div", {
        children: Qr(i)
    }) : null
      , x = G(zo.ActionContainer, s && zo.portrait)
      , A = k || C ? React.createElement("div", {
        className: x,
        children: React.createElement(gr, {
            children: [k, C]
        })
    }) : null
      , _ = G(zo.MediaCard, s && zo.portrait)
      , w = G(zo.MediaContainer, s && zo.portrait, l === "small" && zo.sizeSmall)
      , T = G(zo.InfoContainer, s && zo.portrait, l === "small" && zo.sizeSmall)
      , P = b || g ? React.createElement(he, {
        position: "absolute",
        insetInlineEnd: "500",
        zIndex: "var(--p-z-index-2)",
        children: React.createElement(Te, {
            gap: "100",
            wrap: !1,
            children: [b, g]
        })
    }) : null;
    return React.createElement(Co, {
        children: React.createElement("div", {
            className: _,
            children: [React.createElement("div", {
                className: w,
                children: t
            }), React.createElement("div", {
                className: T,
                children: React.createElement(he, {
                    padding: "500",
                    children: React.createElement(ft, {
                        gap: "200",
                        children: [React.createElement(Te, {
                            wrap: !1,
                            align: "space-between",
                            gap: "200",
                            children: [v, P]
                        }), React.createElement(ee, {
                            as: "p",
                            variant: "bodySm",
                            children: a
                        }), A]
                    })
                })
            })]
        })
    })
}
function AB(e, t) {
    if (!e)
        return null;
    const n = Object.keys(e);
    for (const i of n) {
        if (i === t)
            return e[t];
        if (Qx(e[i])) {
            const a = AB(e[i], t);
            if (a)
                return a
        }
    }
    return null
}
function Dre(e={}, t=0, n="width") {
    const i = typeof e == "number" ? e : AB(e, n);
    return i ? `${i}px` : `${t}px`
}
const U_ = React.createContext({
    location: ""
});
var kt = {
    Navigation: "Polaris-Navigation",
    hasSystemAlertBanner: "Polaris-Navigation--hasSystemAlertBanner",
    ContextControl: "Polaris-Navigation__ContextControl",
    PrimaryNavigation: "Polaris-Navigation__PrimaryNavigation",
    LogoContainer: "Polaris-Navigation__LogoContainer",
    hasLogoSuffix: "Polaris-Navigation--hasLogoSuffix",
    Logo: "Polaris-Navigation__Logo",
    LogoLink: "Polaris-Navigation__LogoLink",
    Item: "Polaris-Navigation__Item",
    "Icon-resized": "Polaris-Navigation__Icon--resized",
    Badge: "Polaris-Navigation__Badge",
    ItemInnerWrapper: "Polaris-Navigation__ItemInnerWrapper",
    ItemWrapper: "Polaris-Navigation__ItemWrapper",
    ItemInnerDisabled: "Polaris-Navigation__ItemInnerDisabled",
    "ItemInnerWrapper-display-actions-on-hover": "Polaris-Navigation--itemInnerWrapperDisplayActionsOnHover",
    SecondaryActions: "Polaris-Navigation__SecondaryActions",
    "ItemInnerWrapper-selected": "Polaris-Navigation__ItemInnerWrapper--selected",
    Text: "Polaris-Navigation__Text",
    "ItemInnerWrapper-open": "Polaris-Navigation__ItemInnerWrapper--open",
    "Item-selected": "Polaris-Navigation__Item--selected",
    "Item-child-active": "Polaris-Navigation--itemChildActive",
    "Item-disabled": "Polaris-Navigation__Item--disabled",
    Icon: "Polaris-Navigation__Icon",
    "ListItem-hasAction": "Polaris-Navigation__ListItem--hasAction",
    ExternalIcon: "Polaris-Navigation__ExternalIcon",
    subNavigationActive: "Polaris-Navigation--subNavigationActive",
    ListItem: "Polaris-Navigation__ListItem",
    RollupSection: "Polaris-Navigation__RollupSection",
    SecondaryNavigation: "Polaris-Navigation__SecondaryNavigation",
    "Text-truncated": "Polaris-Navigation__Text--truncated",
    ItemWithFloatingActions: "Polaris-Navigation__ItemWithFloatingActions",
    SecondaryAction: "Polaris-Navigation__SecondaryAction",
    List: "Polaris-Navigation__List",
    "Item-line": "Polaris-Navigation__Item--line",
    "Item-line-pointer": "Polaris-Navigation--itemLinePointer",
    "Item-hover-pointer": "Polaris-Navigation--itemHoverPointer",
    "SecondaryNavigation-noIcon": "Polaris-Navigation__SecondaryNavigation--noIcon",
    Section: "Polaris-Navigation__Section",
    "Section-fill": "Polaris-Navigation__Section--fill",
    "Section-withSeparator": "Polaris-Navigation__Section--withSeparator",
    SectionHeading: "Polaris-Navigation__SectionHeading",
    Action: "Polaris-Navigation__Action",
    RollupToggle: "Polaris-Navigation__RollupToggle",
    Indicator: "Polaris-Navigation__Indicator",
    SecondaryNavigationOpen: "Polaris-Navigation__SecondaryNavigationOpen"
};
let Ji = function(e) {
    return e[e.MatchForced = 0] = "MatchForced",
    e[e.MatchUrl = 1] = "MatchUrl",
    e[e.MatchPaths = 2] = "MatchPaths",
    e[e.Excluded = 3] = "Excluded",
    e[e.NoMatch = 4] = "NoMatch",
    e
}({});
function Ore({ItemComponent: e, icon: t, longestMatch: n, subNavigationItems: i, showExpanded: a, truncateText: r, secondaryNavigationId: s}) {
    const l = React.useId()
      , {onNavigationDismiss: c} = React.useContext(U_)
      , [d,p] = React.useState()
      , f = i.findIndex(g => Bs(g, n))
      , v = i.findIndex(g => Bs(g, d));
    return React.createElement("div", {
        className: G(kt.SecondaryNavigation, a && kt.SecondaryNavigationOpen, !t && kt["SecondaryNavigation-noIcon"]),
        children: React.createElement(Xd, {
            id: s || l,
            open: a,
            transition: !1,
            children: React.createElement("ul", {
                className: kt.List,
                children: i.map( (g, y) => {
                    const {label: b, ...k} = g
                      , C = A => {
                        c == null || c(),
                        g.onClick && g.onClick !== c && g.onClick(A)
                    }
                      , x = y < f;
                    return React.createElement(e, {
                        ...k,
                        label: b,
                        showVerticalLine: x,
                        showVerticalHoverPointer: y === v,
                        level: 1,
                        onMouseEnter: g.disabled ? void 0 : () => p(g),
                        onMouseLeave: g.disabled ? void 0 : () => p(void 0),
                        matches: Bs(g, n),
                        onClick: C,
                        truncateText: r
                    }, b)
                }
                )
            })
        })
    })
}
const QL = 2
  , Bre = 1e3;
function $_({url: e, icon: t, matchedItemIcon: n, label: i, subNavigationItems: a=[], secondaryAction: r, secondaryActions: s, displayActionsOnHover: l, disabled: c, onClick: d, accessibilityLabel: p, selected: f, badge: v, new: g, matches: y, exactMatch: b, matchPaths: k, excludePaths: C, external: x, onToggleExpandedState: A, expanded: _, shouldResizeIcon: w, truncateText: T, showVerticalLine: P, showVerticalHoverPointer: I, level: L=0, onMouseEnter: R, onMouseLeave: D}) {
    const M = at()
      , {isNavigationCollapsed: O} = dc()
      , z = React.useId()
      , {location: B, onNavigationDismiss: H} = React.useContext(U_)
      , q = React.useRef(null)
      , [W,V] = React.useState(!1);
    React.useEffect( () => {
        !O && _ && (A == null || A())
    }
    , [_, O, A]),
    Kr( () => {
        const Xe = q.current;
        T && Xe && V(Xe.scrollHeight > Xe.clientHeight)
    }
    , [T]);
    const $ = c ? -1 : 0
      , K = a.filter(Xe => Xe.new).length > 0 ? React.createElement("span", {
        className: kt.Indicator,
        children: React.createElement(WO, {
            pulse: !0
        })
    }) : null
      , J = gy({
        url: e,
        matches: y,
        exactMatch: b,
        matchPaths: k,
        excludePaths: C
    }, B)
      , X = a.filter(Xe => {
        const it = gy(Xe, B);
        return it === Ji.MatchForced || it === Ji.MatchUrl || it === Ji.MatchPaths
    }
    )
      , se = X.length > 0
      , ne = f ?? (J === Ji.MatchForced || J === Ji.MatchUrl || J === Ji.MatchPaths)
      , Y = ne || se ? n ?? t : t
      , ue = Y ? React.createElement("div", {
        className: G(kt.Icon, !So(Y) && kt.ExternalIcon, w && kt["Icon-resized"]),
        children: So(Y) ? React.createElement(Fe, {
            type: Y,
            tone: "legacy-inherit"
        }) : React.createElement(Tn, {
            source: Y,
            alt: "",
            "aria-hidden": !0
        })
    }) : null;
    let ge = null;
    g ? ge = React.createElement(rn, {
        tone: "new",
        children: M.translate("Polaris.Badge.TONE_LABELS.new")
    }) : typeof v == "string" ? ge = React.createElement(rn, {
        tone: "new",
        children: v
    }) : ge = v;
    const de = ge == null ? null : React.createElement("div", {
        className: kt.Badge,
        children: ge
    })
      , ve = !I && !y && L !== 0 ? "subdued" : void 0;
    let Le = "regular";
    (y || ne) && !se ? Le = "semibold" : L === 0 && (Le = "medium");
    const Ce = React.createElement("span", {
        className: G(kt.Text, T && kt["Text-truncated"]),
        ref: q,
        children: [React.createElement(ee, {
            as: "span",
            variant: "bodyMd",
            tone: ve,
            fontWeight: Le,
            children: i
        }), K]
    });
    if (e == null) {
        const Xe = G(kt.Item, c && kt["Item-disabled"], f && kt["Item-selected"]);
        return React.createElement("li", {
            className: kt.ListItem,
            children: React.createElement("div", {
                className: kt.ItemWrapper,
                children: React.createElement("div", {
                    className: G(kt.ItemInnerWrapper, c && kt.ItemInnerDisabled, f && kt["ItemInnerWrapper-selected"]),
                    children: React.createElement("button", {
                        type: "button",
                        className: Xe,
                        disabled: c,
                        "aria-disabled": c,
                        "aria-label": p,
                        onClick: Mt(d),
                        children: [ue, Ce, de]
                    })
                })
            })
        })
    }
    const Ae = s || r && [r];
    Ae && Ae.length > QL && (Ae.length = QL);
    const re = Ae != null && Ae.length ? React.createElement("span", {
        className: kt.SecondaryActions,
        children: Ae.map(Xe => React.createElement(zre, {
            ...Xe,
            tabIndex: $,
            disabled: c
        }, Xe.accessibilityLabel))
    }) : null
      , le = React.createElement(React.Fragment, {
        children: [ue, Ce, re ? null : de]
    })
      , ye = React.createElement(React.Fragment, {
        children: re ? de : null
    })
      , Ee = ne || _ || se
      , Qe = G(kt.Item, c && kt["Item-disabled"], (ne || se) && kt["Item-selected"], Ee && kt.subNavigationActive, se && kt["Item-child-active"], P && kt["Item-line"], y && kt["Item-line-pointer"], I && kt["Item-hover-pointer"]);
    let De = null;
    if (a.length > 0) {
        const Xe = X.sort( ({url: it}, {url: ke}) => ke.length - it.length)[0];
        De = React.createElement(Ore, {
            ItemComponent: $_,
            icon: Y,
            longestMatch: Xe,
            subNavigationItems: a,
            showExpanded: Ee,
            truncateText: T,
            secondaryNavigationId: z
        })
    }
    const Ue = G(kt.ListItem, !!(Ae && Ae.length) && kt["ListItem-hasAction"])
      , Ye = () => {
        const Xe = React.createElement(Bi, {
            url: e,
            className: Qe,
            external: x,
            tabIndex: $,
            "aria-disabled": c,
            "aria-label": p,
            onClick: Mt(d),
            ...Ure(z, a.length > 0, Ee),
            children: le
        });
        return W ? React.createElement(Qn, {
            hoverDelay: Bre,
            content: i,
            preferredPosition: "above",
            children: Xe
        }) : Xe
    }
    ;
    return React.createElement("li", {
        className: Ue,
        onMouseEnter: () => {
            R == null || R(i)
        }
        ,
        onMouseLeave: D,
        children: [React.createElement("div", {
            className: kt.ItemWrapper,
            children: React.createElement("div", {
                className: G(kt.ItemInnerWrapper, ne && se && kt["ItemInnerWrapper-open"] || ne && !se && kt["ItemInnerWrapper-selected"], l && kt["ItemInnerWrapper-display-actions-on-hover"], c && kt.ItemInnerDisabled),
                children: [l && re && de ? React.createElement("span", {
                    className: kt.ItemWithFloatingActions,
                    children: [Ye(), re]
                }) : React.createElement(React.Fragment, {
                    children: [Ye(), re]
                }), ye]
            })
        }), De]
    });
    function Mt(Xe) {
        return it => {
            const {currentTarget: ke} = it;
            if (ke.getAttribute("href") === B && it.preventDefault(),
            a && a.length > 0 && O)
                it.preventDefault(),
                A == null || A();
            else if (H) {
                H(),
                Xe && Xe !== H && Xe(it);
                return
            }
            Xe && Xe(it)
        }
    }
}
function zre({url: e, icon: t, accessibilityLabel: n, tooltip: i, onClick: a, disabled: r, tabIndex: s}) {
    const l = So(t) ? React.createElement(Fe, {
        type: t,
        tone: "legacy-inherit"
    }) : React.createElement(Tn, {
        source: t,
        alt: "",
        "aria-hidden": !0
    })
      , c = e ? React.createElement(Bi, {
        external: !0,
        url: e,
        className: kt.SecondaryAction,
        tabIndex: s,
        "aria-disabled": r,
        "aria-label": n,
        onClick: a,
        children: l
    }) : React.createElement(Pi, {
        className: kt.SecondaryAction,
        tabIndex: s,
        disabled: r,
        accessibilityLabel: n,
        onClick: a,
        children: l
    });
    return i ? React.createElement(Qn, {
        ...i,
        children: [" ", c, " "]
    }) : c
}
function tm(e, t) {
    const n = gy(e, t)
      , i = e.subNavigationItems && e.subNavigationItems.filter(s => {
        const l = gy(s, t);
        return l === Ji.MatchForced || l === Ji.MatchUrl || l === Ji.MatchPaths
    }
    )
      , a = i && i.length > 0;
    return n === Ji.MatchForced || n === Ji.MatchUrl || n === Ji.MatchPaths || a
}
function hy(e) {
    const t = e.split("?")[0].split("#")[0];
    return t.endsWith("/") ? t : `${t}/`
}
function Vre(e, t) {
    return hy(e) === hy(t)
}
function _C(e, t) {
    return hy(e).startsWith(hy(t))
}
function gy({url: e, matches: t, exactMatch: n, matchPaths: i, excludePaths: a}, r) {
    return e == null ? Ji.NoMatch : t ? Ji.MatchForced : t === !1 || a && a.some(l => _C(r, l)) ? Ji.Excluded : i && i.some(l => _C(r, l)) ? Ji.MatchPaths : (n ? Vre(r, e) : _C(r, e)) ? Ji.MatchUrl : Ji.NoMatch
}
function Ure(e, t, n) {
    return t ? {
        "aria-expanded": n,
        "aria-controls": e
    } : void 0
}
function $re({title: e, fill: t, action: n, items: i, rollup: a, separator: r}) {
    const {value: s, toggle: l, setFalse: c} = Di(!1)
      , d = React.useRef(null)
      , {isNavigationCollapsed: p} = dc()
      , [f,v] = React.useState()
      , g = (M, O) => z => {
        M && M(z),
        d.current && cancelAnimationFrame(d.current),
        (!O || !p) && (d.current = requestAnimationFrame(c))
    }
    ;
    React.useEffect( () => () => {
        d.current && cancelAnimationFrame(d.current)
    }
    );
    const y = G(kt.Section, r && kt["Section-withSeparator"], t && kt["Section-fill"])
      , b = n && (So(n.icon) ? React.createElement(Fe, {
        type: n.icon,
        size: "small",
        tone: "legacy-inherit"
    }) : React.createElement(Tn, {
        source: n.icon,
        alt: "",
        "aria-hidden": !0
    }))
      , k = n && React.createElement("button", {
        type: "button",
        className: kt.Action,
        "aria-label": n.accessibilityLabel,
        onClick: n.onClick,
        children: b
    })
      , C = n && (n.tooltip ? React.createElement(Qn, {
        ...n.tooltip,
        children: k
    }) : k)
      , x = e && React.createElement("li", {
        className: kt.SectionHeading,
        children: [React.createElement(ee, {
            as: "span",
            variant: "bodySm",
            fontWeight: "medium",
            tone: "subdued",
            children: e
        }), C]
    })
      , A = i.map( (M, O) => {
        const {onClick: z, label: B, subNavigationItems: H, ...q} = M
          , W = H != null && H.length > 0
          , V = () => {
            v(f === O ? -1 : O)
        }
        ;
        return React.createElement($_, {
            ...q,
            label: B,
            subNavigationItems: H,
            onClick: g(z, W),
            onToggleExpandedState: V,
            expanded: f === O
        }, B)
    }
    )
      , _ = G(kt.Item, kt.RollupToggle)
      , w = a && (s ? a.hide : a.view)
      , T = a && i.length > a.after && React.createElement("div", {
        className: kt.ListItem,
        children: React.createElement("div", {
            className: kt.ItemWrapper,
            children: React.createElement("div", {
                className: kt.ItemInnerWrapper,
                children: React.createElement("button", {
                    type: "button",
                    className: _,
                    onClick: l,
                    "aria-label": w,
                    children: React.createElement("span", {
                        className: kt.Icon,
                        children: React.createElement(Fe, {
                            type: "menu-horizontal",
                            tone: "legacy-inherit"
                        })
                    })
                })
            })
        })
    }, "List Item")
      , P = i.findIndex(M => a ? a.activePath === M.url || M.url && a.activePath.startsWith(M.url) || (M.subNavigationItems ? M.subNavigationItems.some( ({url: O}) => a.activePath.startsWith(O)) : !1) : !1)
      , I = a ? A.slice(0, a.after) : A
      , L = a ? A.slice(a.after) : [];
    a && P !== -1 && P > a.after - 1 && I.push(...L.splice(P - a.after, 1));
    const R = React.useId()
      , D = a && L.length > 0 && React.createElement("li", {
        className: kt.RollupSection,
        children: [React.createElement(Xd, {
            id: R,
            open: s,
            children: React.createElement("ul", {
                className: kt.List,
                children: L
            })
        }), T]
    });
    return React.createElement("ul", {
        className: y,
        children: [x, I, D]
    })
}
const Wr = function({children: t, contextControl: n, location: i, onDismiss: a, ariaLabelledBy: r, logoSuffix: s, hasSystemAlertBanner: l}) {
    const {logo: c} = tr()
      , d = Dre(c, 104)
      , {mdUp: p} = Wn()
      , f = c ? React.createElement("div", {
        className: G(kt.LogoContainer, s && kt.hasLogoSuffix),
        children: [React.createElement(Bi, {
            url: c.url || "",
            className: kt.LogoLink,
            style: {
                width: d
            },
            children: React.createElement(Tn, {
                source: c.topBarSource || "",
                alt: c.accessibilityLabel || "",
                className: kt.Logo,
                style: {
                    width: d
                }
            })
        }), s]
    }) : null
      , v = n ? React.createElement("div", {
        className: kt.ContextControl,
        children: n
    }) : f
      , g = React.useMemo( () => ({
        location: i,
        onNavigationDismiss: a
    }), [i, a]);
    return React.createElement(U_.Provider, {
        value: g,
        children: React.createElement(gm.Provider, {
            value: !0,
            children: React.createElement("nav", {
                className: G(kt.Navigation, l && kt.hasSystemAlertBanner),
                "aria-labelledby": r,
                children: [p ? v : null, React.createElement(La, {
                    className: kt.PrimaryNavigation,
                    children: t
                })]
            })
        })
    })
};
Wr.Item = $_;
Wr.Section = $re;
function I0(e, t, n) {
    return e.length !== t.length ? !1 : e.every( (i, a) => {
        const r = t[a];
        return n != null ? n(i, r) : i === r
    }
    )
}
var na = {
    Option: "Polaris-OptionList-Option",
    SingleSelectOption: "Polaris-OptionList-Option__SingleSelectOption",
    focused: "Polaris-OptionList-Option--focused",
    active: "Polaris-OptionList-Option--active",
    disabled: "Polaris-OptionList-Option--disabled",
    select: "Polaris-OptionList-Option--select",
    Media: "Polaris-OptionList-Option__Media",
    Label: "Polaris-OptionList-Option__Label",
    MultiSelectOption: "Polaris-OptionList-Option__MultiSelectOption",
    CheckboxLabel: "Polaris-OptionList-Option__CheckboxLabel",
    verticalAlignTop: "Polaris-OptionList-Option--verticalAlignTop",
    verticalAlignCenter: "Polaris-OptionList-Option--verticalAlignCenter",
    verticalAlignBottom: "Polaris-OptionList-Option--verticalAlignBottom",
    Icon: "Polaris-OptionList-Option__Icon",
    Checkbox: "Polaris-OptionList-Option__Checkbox"
};
function Hre({label: e, value: t, id: n, select: i, active: a, allowMultiple: r, disabled: s, media: l, onClick: c, section: d, index: p, verticalAlign: f, onPointerEnter: v, onFocus: g}) {
    const {value: y, toggle: b} = Di(!1)
      , k = React.useCallback( () => {
        s || c(d, p)
    }
    , [s, p, c, d])
      , C = React.useCallback( () => {
        s || v(d, p)
    }
    , [s, v, d, p])
      , x = React.useCallback( () => {
        b(),
        g(d, p)
    }
    , [b, g, d, p])
      , A = l ? React.createElement("div", {
        className: na.Media,
        children: l
    }) : null
      , _ = G(na.SingleSelectOption, y && na.focused, s && na.disabled, i && na.select, a && na.active, f && na[$t("verticalAlign", f)])
      , w = G(na.Label, s && na.disabled, a && na.active, i && na.select, f && na[$t("verticalAlign", f)], r && na.CheckboxLabel, r && na.MultiSelectOption)
      , T = r ? React.createElement("label", {
        htmlFor: n,
        className: w,
        children: [React.createElement("div", {
            className: na.Checkbox,
            children: React.createElement(ss, {
                id: n,
                label: "",
                ariaDescribedBy: `${n}-label`,
                value: t,
                checked: i,
                disabled: s,
                onChange: k
            })
        }), A, React.createElement("span", {
            id: `${n}-label`,
            children: e
        })]
    }) : React.createElement("button", {
        id: n,
        type: "button",
        className: _,
        onClick: k,
        disabled: s,
        onFocus: x,
        onBlur: b,
        "aria-pressed": a || i,
        children: React.createElement(React.Fragment, {
            children: [React.createElement(Te, {
                wrap: !1,
                blockAlign: Wre(f),
                children: [A, e]
            }), (i || a) && React.createElement("span", {
                className: na.Icon,
                children: React.createElement(Fe, {
                    type: "check",
                    tone: "legacy-inherit"
                })
            })]
        })
    })
      , P = a ? React.createElement(La.ScrollTo, {}) : null;
    return React.createElement("li", {
        className: na.Option,
        tabIndex: -1,
        onPointerEnter: C,
        children: [P, T]
    }, n)
}
function Wre(e) {
    switch (e) {
    case "top":
        return "start";
    case "center":
        return "center";
    case "bottom":
        return "end";
    default:
        return "start"
    }
}
function tKe({options: e, sections: t, title: n, selected: i, allowMultiple: a, role: r, verticalAlign: s, onChange: l, id: c, onPointerEnterOption: d, onFocusOption: p}) {
    const [f,v] = React.useState(ZL(e, t, n))
      , g = React.useId()
      , y = c ?? g;
    O_( () => {
        v(ZL(e || [], t || [], n))
    }
    , [e, t, n], qre);
    const b = React.useCallback( (_, w) => {
        const T = f[_].options[w].value
          , P = i.indexOf(T);
        if (a) {
            const I = P === -1 ? [T, ...i] : [...i.slice(0, P), ...i.slice(P + 1, i.length)];
            l(I);
            return
        }
        l([T])
    }
    , [f, i, a, l])
      , k = React.useCallback( (_, w) => {
        if (!d)
            return;
        const T = f[_].options[w].value;
        d(T)
    }
    , [f, d])
      , C = React.useCallback( (_, w) => {
        if (!p)
            return;
        const T = f[_].options[w].value;
        p(T)
    }
    , [f, p])
      , A = f.length > 0 ? f.map( ({title: _, options: w}, T) => {
        const P = T === 0
          , I = P ? "h2" : "h3"
          , L = _ ? React.createElement(he, {
            paddingBlockStart: P ? "050" : "300",
            paddingInlineStart: "150",
            paddingBlockEnd: "100",
            paddingInlineEnd: "150",
            borderColor: "border-secondary",
            children: React.createElement(ee, {
                as: I,
                variant: "headingSm",
                children: _
            })
        }) : null
          , R = w && w.map( (O, z) => {
            const B = i.includes(O.value)
              , H = O.id || `${y}-${T}-${z}`;
            return React.createElement(Hre, {
                ...O,
                id: H,
                section: T,
                index: z,
                onClick: b,
                select: B,
                allowMultiple: a,
                verticalAlign: s,
                onPointerEnter: k,
                onFocus: C
            }, H)
        }
        )
          , D = React.createElement(he, {
            as: "ul",
            id: `${y}-${T}`,
            role: r,
            children: R
        })
          , M = P ? _ ? "100" : "0" : _ ? "050" : "0";
        return React.createElement(he, {
            as: "li",
            paddingBlockStart: M,
            children: React.createElement(ft, {
                gap: P && t ? void 0 : "0",
                children: [L, D]
            })
        }, _ || `noTitle-${T}`)
    }
    ) : null;
    return React.createElement(he, {
        as: "ul",
        role: r,
        padding: "150",
        children: A
    })
}
function ZL(e, t, n) {
    if (e == null) {
        const i = {
            options: [],
            title: n
        };
        return t == null ? [] : [i, ...t]
    }
    return t == null ? [{
        title: n,
        options: e
    }] : [{
        title: n,
        options: e
    }, ...t]
}
function qre(e, t) {
    return S0(e) && S0(t) ? I0(e, t, Gre) : I0(e, t)
}
function Gre(e, t) {
    const {options: n} = e
      , {options: i} = t
      , a = I0(n, i)
      , r = e.title === t.title;
    return a && r
}
function Md(e) {
    return !React.isValidElement(e) && e !== void 0
}
function Rd(e) {
    return React.isValidElement(e) && e !== void 0
}
var Dg = {
    Page: "Polaris-Page",
    fullWidth: "Polaris-Page--fullWidth",
    narrowWidth: "Polaris-Page--narrowWidth",
    Content: "Polaris-Page__Content"
}
  , Na = {
    TitleWrapper: "Polaris-Page-Header__TitleWrapper",
    TitleWrapperExpand: "Polaris-Page-Header__TitleWrapperExpand",
    PaginationWrapper: "Polaris-Page-Header__PaginationWrapper",
    PrimaryActionWrapper: "Polaris-Page-Header__PrimaryActionWrapper",
    Row: "Polaris-Page-Header__Row",
    mobileView: "Polaris-Page-Header--mobileView",
    RightAlign: "Polaris-Page-Header__RightAlign",
    AdditionalMetaData: "Polaris-Page-Header__AdditionalMetaData",
    Actions: "Polaris-Page-Header__Actions",
    isSingleRow: "Polaris-Page-Header--isSingleRow",
    SubTitle: "Polaris-Page-Header__SubTitle",
    SubtitleMaxWidth: "Polaris-Page-Header__SubtitleMaxWidth"
}
  , YL = {
    TitleAndMetadata: "Polaris-Header-Title__TitleAndMetadata",
    TitleMetadata: "Polaris-Header-Title__TitleMetadata"
};
function Kre({titleMetadata: e, breadcrumbs: t}) {
    const n = e ? React.createElement("div", {
        className: YL.TitleMetadata,
        children: e
    }) : null
      , i = t != null && t.length ? React.createElement(React.Fragment, {
        children: React.createElement("div", {
            className: YL.TitleAndMetadata,
            children: [React.createElement(HO, {
                breadcrumbs: t
            }), n]
        })
    }) : null;
    return React.createElement(React.Fragment, {
        children: i
    })
}
const Qre = 20
  , Zre = 8;
function xB({subtitle: e, pageReadyAccessibilityLabel: t, titleMetadata: n, additionalMetadata: i, primaryAction: a, pagination: r, filterActions: s, secondaryActions: l=[], actionGroups: c=[], onActionRollup: d, breadcrumbs: p}) {
    var H;
    const f = at()
      , {isNavigationCollapsed: v} = dc()
      , g = (H = p == null ? void 0 : p[p.length - 1]) == null ? void 0 : H.title
      , y = !a && !r && (Md(l) && !l.length || Rd(l)) && !c.length
      , b = c.length > 0 || Md(l) && l.length > 0 || Rd(l)
      , k = r && !v ? React.createElement("div", {
        className: Na.PaginationWrapper,
        children: React.createElement(he, {
            printHidden: !0,
            children: React.createElement(Qd, {
                ...r,
                hasPrevious: r.hasPrevious,
                hasNext: r.hasNext,
                type: "pageUpDown"
            })
        })
    }) : null
      , C = React.createElement("div", {
        className: G(Na.TitleWrapper, !b && Na.TitleWrapperExpand),
        children: React.createElement(Kre, {
            breadcrumbs: p,
            titleMetadata: n
        })
    })
      , x = t || g
      , A = x ? React.createElement("div", {
        role: "status",
        children: React.createElement(ee, {
            visuallyHidden: !0,
            as: "p",
            children: f.translate("Polaris.Page.Header.pageReadyAccessibilityLabel", {
                title: x
            })
        })
    }) : void 0
      , _ = a ? React.createElement(Yre, {
        primaryAction: a
    }) : null;
    let w = null;
    Md(l) && (l.length > 0 || aX(c)) ? w = React.createElement(iX, {
        actions: l,
        groups: c,
        rollup: v,
        rollupActionsLabel: g ? f.translate("Polaris.Page.Header.rollupActionsLabel", {
            title: g
        }) : void 0,
        onActionRollup: d
    }) : Rd(l) && (w = React.createElement(React.Fragment, {
        children: l
    }));
    const T = k ? React.createElement(he, {
        printHidden: !0,
        paddingBlockEnd: "100",
        paddingInlineEnd: w && v ? "1000" : void 0,
        children: React.createElement(Te, {
            gap: "400",
            align: "space-between",
            blockAlign: "center",
            children: k
        })
    }) : null
      , P = e ? React.createElement("div", {
        className: G(Na.SubTitle, b && Na.SubtitleMaxWidth),
        children: React.createElement(ee, {
            as: "p",
            variant: "bodyXs",
            tone: "subdued",
            children: e
        })
    }) : null
      , I = i || e ? React.createElement("div", {
        children: [P, React.createElement("div", {
            className: Na.AdditionalMetaData,
            children: React.createElement(ee, {
                tone: "subdued",
                as: "span",
                variant: "bodyXs",
                children: i
            })
        })]
    }) : null
      , L = G(y && Na.isSingleRow, T && Na.hasNavigation, w && Na.hasActionMenu, v && Na.mobileView)
      , {slot1: R, slot2: D, slot3: M, slot4: O, slot5: z} = Xre({
        actionMenuMarkup: w,
        additionalMetadataMarkup: I,
        isNavigationCollapsed: v,
        pageTitleMarkup: C,
        paginationMarkup: k,
        primaryActionMarkup: _,
        title: g
    })
      , B = {
        paddingBlockEnd: "300",
        paddingBlockStart: "400",
        paddingInline: {
            xs: "400",
            sm: "0"
        }
    };
    return React.createElement(he, {
        position: "relative",
        ...B,
        children: [A, React.createElement("div", {
            className: L,
            children: React.createElement(lJ, {
                filterActions: !!s,
                children: [React.createElement(XS, {
                    condition: [R, D, M, O].some(Og),
                    children: React.createElement("div", {
                        className: Na.Row,
                        children: [R, D, React.createElement(XS, {
                            condition: [M, O].some(Og),
                            children: React.createElement("div", {
                                className: Na.RightAlign,
                                children: React.createElement(qJ, {
                                    condition: [M, O].every(Og),
                                    wrapper: q => React.createElement("div", {
                                        className: Na.Actions,
                                        children: q
                                    }),
                                    children: [M, O]
                                })
                            })
                        })]
                    })
                }), React.createElement(XS, {
                    condition: [z].some(Og),
                    children: React.createElement("div", {
                        className: Na.Row,
                        children: React.createElement(Te, {
                            gap: "400",
                            children: z
                        })
                    })
                })]
            })
        })]
    })
}
function Yre({primaryAction: e}) {
    const {isNavigationCollapsed: t} = dc();
    let n;
    if (Md(e)) {
        const {primary: i, helpText: a} = e
          , r = i === void 0 ? !0 : i
          , s = Qr(Jre(t, e), {
            variant: r ? "primary" : void 0
        });
        n = a ? React.createElement(Qn, {
            content: a,
            children: s
        }) : s
    } else
        n = e;
    return React.createElement("div", {
        className: Na.PrimaryActionWrapper,
        children: React.createElement(he, {
            printHidden: !0,
            children: n
        })
    })
}
function Jre(e, t) {
    let {content: n, accessibilityLabel: i} = t;
    const {icon: a} = t;
    return a == null ? {
        ...t,
        icon: void 0
    } : (e && (i = i || n,
    n = void 0),
    {
        ...t,
        content: n,
        accessibilityLabel: i,
        icon: a
    })
}
function Og(e) {
    return e != null
}
function Xre({actionMenuMarkup: e, additionalMetadataMarkup: t, isNavigationCollapsed: n, pageTitleMarkup: i, paginationMarkup: a, primaryActionMarkup: r, title: s}) {
    const l = {
        mobileCompact: {
            slots: {
                slot1: null,
                slot2: i,
                slot3: e,
                slot4: r,
                slot5: t
            },
            condition: n && s != null && s.length <= Zre
        },
        mobileDefault: {
            slots: {
                slot1: null,
                slot2: i,
                slot3: e,
                slot4: r,
                slot5: t
            },
            condition: n
        },
        desktopCompact: {
            slots: {
                slot1: null,
                slot2: i,
                slot3: e,
                slot4: r,
                slot5: t
            },
            condition: !n && a == null && e == null && s != null && s.length <= Qre
        },
        desktopDefault: {
            slots: {
                slot1: null,
                slot2: i,
                slot3: React.createElement(React.Fragment, {
                    children: [e, r]
                }),
                slot4: a,
                slot5: t
            }, 
            condition: !n
        }
    };
    return (Object.values(l).find(d => d.condition) || l.desktopDefault).slots
}
function _B({children: e, fullWidth: t, narrowWidth: n, ...i}) {
    var c;
    const a = G(Dg.Page, t && Dg.fullWidth, n && Dg.narrowWidth)
      , r = i.subtitle != null && i.subtitle !== "" || i.primaryAction != null || i.secondaryActions != null && (Md(i.secondaryActions) && i.secondaryActions.length > 0 || Rd(i.secondaryActions)) || i.actionGroups != null && i.actionGroups.length > 0 || ((c = i.breadcrumbs) == null ? void 0 : c.length)
      , s = G(!r && Dg.Content)
      , l = r ? React.createElement(xB, {
        filterActions: !0,
        ...i
    }) : null;
    return React.createElement("div", {
        className: a,
        children: [l, React.createElement("div", {
            className: s,
            children: e
        })]
    })
}
var eoe = {
    PageActions: "Polaris-PageActions"
};
function wB({primaryAction: e, secondaryActions: t}) {
    let n = null;
    Rd(e) ? n = React.createElement(React.Fragment, {
        children: e
    }) : e && (n = as(e, {
        variant: "primary"
    }));
    let i = null;
    Md(t) && t.length > 0 ? i = React.createElement(React.Fragment, {
        children: as(t)
    }) : Rd(t) && (i = React.createElement(React.Fragment, {
        children: t
    }));
    const {smDown: a} = Wn()
      , r = React.createElement(React.Fragment, {
        children: [i, n]
    });
    return React.createElement("div", {
        className: eoe.PageActions,
        children: a ? React.createElement(ft, {
            gap: "300",
            reverseOrder: !0,
            children: r
        }) : React.createElement(Te, {
            align: "end",
            gap: "200",
            children: r
        })
    })
}
var Nl = {
    ProgressBar: "Polaris-ProgressBar",
    sizeSmall: "Polaris-ProgressBar--sizeSmall",
    sizeMedium: "Polaris-ProgressBar--sizeMedium",
    sizeLarge: "Polaris-ProgressBar--sizeLarge",
    toneHighlight: "Polaris-ProgressBar--toneHighlight",
    tonePrimary: "Polaris-ProgressBar--tonePrimary",
    toneSuccess: "Polaris-ProgressBar--toneSuccess",
    toneCritical: "Polaris-ProgressBar--toneCritical",
    Indicator: "Polaris-ProgressBar__Indicator",
    IndicatorAppearActive: "Polaris-ProgressBar__IndicatorAppearActive",
    IndicatorAppearDone: "Polaris-ProgressBar__IndicatorAppearDone",
    Progress: "Polaris-ProgressBar__Progress",
    Label: "Polaris-ProgressBar__Label"
};
function nKe({progress: e=0, size: t="medium", tone: n="highlight", animated: i=!0, ariaLabelledBy: a}) {
    const r = Xr()
      , s = at()
      , l = React.useRef(null)
      , c = G(Nl.ProgressBar, t && Nl[$t("size", t)], n && Nl[$t("tone", n)]);
    s.translate(e < 0 ? "Polaris.ProgressBar.negativeWarningMessage" : "Polaris.ProgressBar.exceedWarningMessage", {
        progress: e
    });
    const d = toe(e)
      , p = i ? r.motion["motion-duration-500"] : r.motion["motion-duration-0"];
    return React.createElement("div", {
        className: c,
        children: [React.createElement("progress", {
            "aria-labelledby": a,
            className: Nl.Progress,
            value: d,
            max: "100"
        }), React.createElement(Cr, {
            in: !0,
            appear: !0,
            timeout: parseInt(p, 10),
            nodeRef: l,
            classNames: {
                appearActive: Nl.IndicatorAppearActive,
                appearDone: Nl.IndicatorAppearDone
            },
            children: React.createElement("div", {
                ref: l,
                className: Nl.Indicator,
                style: {
                    "--pc-progress-bar-duration": p,
                    "--pc-progress-bar-percent": d / 100
                },
                children: React.createElement("span", {
                    className: Nl.Label,
                    children: [d, "%"]
                })
            })
        })]
    })
}
function toe(e, t) {
    let n;
    return e < 0 ? n = 0 : e > 100 ? n = 100 : n = e,
    n
}
var vy = {
    RangeSlider: "Polaris-RangeSlider",
    "Track--dashed-after": "Polaris-RangeSlider--trackDashedAfter",
    "Track--dashed": "Polaris-RangeSlider--trackDashed"
}
  , Fi = {
    DualThumb: "Polaris-RangeSlider-DualThumb",
    TrackWrapper: "Polaris-RangeSlider-DualThumb__TrackWrapper",
    disabled: "Polaris-RangeSlider-DualThumb--disabled",
    Track: "Polaris-RangeSlider-DualThumb__Track",
    error: "Polaris-RangeSlider-DualThumb--error",
    Thumbs: "Polaris-RangeSlider-DualThumb__Thumbs",
    Prefix: "Polaris-RangeSlider-DualThumb__Prefix",
    Suffix: "Polaris-RangeSlider-DualThumb__Suffix",
    Output: "Polaris-RangeSlider-DualThumb__Output",
    OutputBubble: "Polaris-RangeSlider-DualThumb__OutputBubble"
}
  , ma = function(e) {
    return e[e.Lower = 0] = "Lower",
    e[e.Upper = 1] = "Upper",
    e
}(ma || {});
class NB extends React.Component {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            value: wC(this.props.value, this.props.min, this.props.max, this.props.step),
            trackWidth: 0,
            trackLeft: 0
        });
        te(this, "track", React.createRef());
        te(this, "trackWrapper", React.createRef());
        te(this, "thumbLower", React.createRef());
        te(this, "thumbUpper", React.createRef());
        te(this, "setTrackPosition", ji( () => {
            if (this.track.current) {
                const {width: i, left: a} = this.track.current.getBoundingClientRect()
                  , r = i - 16
                  , s = a + 16 / 2
                  , l = this.props.max - this.props.min
                  , c = this.props.min / l * r;
                this.setState({
                    trackWidth: r,
                    trackLeft: s - c
                })
            }
        }
        , 40, {
            leading: !0,
            trailing: !0,
            maxWait: 40
        }));
        te(this, "handleMouseDownThumbLower", n => {
            n.button !== 0 || this.props.disabled || (Bg(this.handleMouseMoveThumbLower),
            n.stopPropagation())
        }
        );
        te(this, "handleMouseMoveThumbLower", n => {
            const i = this.state.value[1];
            this.setValue([this.actualXPosition(n.clientX), i], ma.Upper)
        }
        );
        te(this, "handleTouchStartThumbLower", n => {
            this.props.disabled || (zg(this.handleTouchMoveThumbLower),
            n.stopPropagation())
        }
        );
        te(this, "handleTouchMoveThumbLower", n => {
            n.preventDefault();
            const i = this.state.value[1];
            this.setValue([this.actualXPosition(n.touches[0].clientX), i], ma.Upper)
        }
        );
        te(this, "handleMouseDownThumbUpper", n => {
            n.button !== 0 || this.props.disabled || (Bg(this.handleMouseMoveThumbUpper),
            n.stopPropagation())
        }
        );
        te(this, "handleMouseMoveThumbUpper", n => {
            const i = this.state.value[0];
            this.setValue([i, this.actualXPosition(n.clientX)], ma.Lower)
        }
        );
        te(this, "handleTouchStartThumbUpper", n => {
            this.props.disabled || (zg(this.handleTouchMoveThumbUpper),
            n.stopPropagation())
        }
        );
        te(this, "handleTouchMoveThumbUpper", n => {
            n.preventDefault();
            const i = this.state.value[0];
            this.setValue([i, this.actualXPosition(n.touches[0].clientX)], ma.Lower)
        }
        );
        te(this, "handleKeypressLower", n => {
            if (this.props.disabled)
                return;
            const {incrementValueLower: i, decrementValueLower: a} = this
              , s = {
                [tn.UpArrow]: i,
                [tn.RightArrow]: i,
                [tn.DownArrow]: a,
                [tn.LeftArrow]: a
            }[n.keyCode];
            s != null && (n.preventDefault(),
            n.stopPropagation(),
            s())
        }
        );
        te(this, "handleKeypressUpper", n => {
            if (this.props.disabled)
                return;
            const {incrementValueUpper: i, decrementValueUpper: a} = this
              , s = {
                [tn.UpArrow]: i,
                [tn.RightArrow]: i,
                [tn.DownArrow]: a,
                [tn.LeftArrow]: a
            }[n.keyCode];
            s != null && (n.preventDefault(),
            n.stopPropagation(),
            s())
        }
        );
        te(this, "incrementValueLower", () => {
            this.setValue([this.state.value[0] + this.props.step, this.state.value[1]], ma.Upper)
        }
        );
        te(this, "decrementValueLower", () => {
            this.setValue([this.state.value[0] - this.props.step, this.state.value[1]], ma.Upper)
        }
        );
        te(this, "incrementValueUpper", () => {
            this.setValue([this.state.value[0], this.state.value[1] + this.props.step], ma.Lower)
        }
        );
        te(this, "decrementValueUpper", () => {
            this.setValue([this.state.value[0], this.state.value[1] - this.props.step], ma.Lower)
        }
        );
        te(this, "dispatchValue", () => {
            const {onChange: n, id: i} = this.props
              , {value: a} = this.state;
            n(a, i)
        }
        );
        te(this, "setValue", (n, i) => {
            const {props: {min: a, max: r, step: s}, state: {value: l}} = this
              , c = wC(n, a, r, s, i);
            NC(c, l) === !1 && this.setState({
                value: c
            }, this.dispatchValue)
        }
        );
        te(this, "handleMouseDownTrack", n => {
            if (n.button !== 0 || this.props.disabled)
                return;
            n.preventDefault();
            const i = this.actualXPosition(n.clientX)
              , {value: a} = this.state
              , r = Math.abs(a[0] - i)
              , s = Math.abs(a[1] - i);
            r <= s ? (this.setValue([i, a[1]], ma.Upper),
            Bg(this.handleMouseMoveThumbLower),
            this.thumbLower.current != null && this.thumbLower.current.focus()) : (this.setValue([a[0], i], ma.Lower),
            Bg(this.handleMouseMoveThumbUpper),
            this.thumbUpper.current != null && this.thumbUpper.current.focus())
        }
        );
        te(this, "handleTouchStartTrack", n => {
            if (this.props.disabled)
                return;
            n.preventDefault();
            const i = this.actualXPosition(n.touches[0].clientX)
              , {value: a} = this.state
              , r = Math.abs(a[0] - i)
              , s = Math.abs(a[1] - i);
            r <= s ? (this.setValue([i, a[1]], ma.Upper),
            zg(this.handleTouchMoveThumbLower),
            this.thumbLower.current != null && this.thumbLower.current.focus()) : (this.setValue([a[0], i], ma.Lower),
            zg(this.handleTouchMoveThumbUpper),
            this.thumbUpper.current != null && this.thumbUpper.current.focus())
        }
        );
        te(this, "actualXPosition", n => {
            if (this.track.current) {
                const {min: i, max: a} = this.props
                  , {trackLeft: r, trackWidth: s} = this.state;
                return (n - r) / s * (a - i)
            } else
                return 0
        }
        )
    }
    static getDerivedStateFromProps(n, i) {
        const {min: a, step: r, max: s, value: l, onChange: c, id: d} = n
          , {prevValue: p} = i;
        if (NC(p, l))
            return null;
        const f = wC(l, a, s, r);
        return NC(l, f) || c(f, d),
        {
            prevValue: l,
            value: f
        }
    }
    componentDidMount() {
        this.setTrackPosition(),
        this.trackWrapper.current != null && this.trackWrapper.current.addEventListener("touchstart", this.handleTouchStartTrack, {
            passive: !1
        })
    }
    componentWillUnmount() {
        this.trackWrapper.current != null && this.trackWrapper.current.removeEventListener("touchstart", this.handleTouchStartTrack)
    }
    render() {
        const {id: n, min: i, max: a, prefix: r, suffix: s, disabled: l, output: c, error: d, onFocus: p, onBlur: f, label: v, labelAction: g, labelHidden: y, helpText: b} = this.props
          , {value: k} = this.state
          , C = n
          , x = `${n}Upper`
          , A = [];
        d && A.push(`${n}Error`);
        const _ = A.length ? A.join(" ") : void 0
          , w = G(Fi.TrackWrapper, d && Fi.error, l && Fi.disabled)
          , T = G(Fi.Thumbs, Fi.ThumbLower, l && Fi.disabled)
          , P = G(Fi.Thumbs, Fi.ThumbUpper, l && Fi.disabled)
          , I = this.state.trackWidth
          , L = a - i
          , R = i / L * I
          , D = k[0] / L * I - R
          , M = k[1] / L * I - R
          , O = G(Fi.Output, Fi.OutputLower)
          , z = !l && c ? React.createElement("output", {
            htmlFor: C,
            className: O,
            style: {
                left: `${D}px`
            },
            children: React.createElement("div", {
                className: Fi.OutputBubble,
                children: React.createElement(ee, {
                    as: "span",
                    variant: "headingSm",
                    alignment: "center",
                    children: k[0]
                })
            })
        }) : null
          , B = G(Fi.Output, Fi.OutputUpper)
          , H = !l && c ? React.createElement("output", {
            htmlFor: x,
            className: B,
            style: {
                left: `${M}px`
            },
            children: React.createElement("div", {
                className: Fi.OutputBubble,
                children: React.createElement(ee, {
                    as: "span",
                    variant: "headingSm",
                    alignment: "center",
                    children: k[1]
                })
            })
        }) : null
          , q = {
            "--pc-range-slider-progress-lower": `${D}px`,
            "--pc-range-slider-progress-upper": `${M}px`
        }
          , W = r && React.createElement("div", {
            className: Fi.Prefix,
            children: r
        })
          , V = s && React.createElement("div", {
            className: Fi.Suffix,
            children: s
        });
        return React.createElement(React.Fragment, {
            children: [React.createElement(Uf, {
                id: n,
                label: v,
                error: d,
                action: g,
                labelHidden: y,
                helpText: b,
                children: React.createElement("div", {
                    className: G(Fi.DualThumb, vy.RangeSlider),
                    children: [W, React.createElement("div", {
                        className: w,
                        onMouseDown: this.handleMouseDownTrack,
                        ref: this.trackWrapper,
                        children: [React.createElement("div", {
                            className: Fi.Track,
                            style: q,
                            ref: this.track
                        }), React.createElement("div", {
                            className: vy["Track--dashed"]
                        }), React.createElement("div", {
                            id: C,
                            className: T,
                            style: {
                                left: `${D}px`
                            },
                            role: "slider",
                            "aria-disabled": l,
                            "aria-valuemin": i,
                            "aria-valuemax": a,
                            "aria-valuenow": k[0],
                            "aria-invalid": !!d,
                            "aria-describedby": _,
                            "aria-labelledby": uf(n),
                            onFocus: p,
                            onBlur: f,
                            tabIndex: 0,
                            onKeyDown: this.handleKeypressLower,
                            onMouseDown: this.handleMouseDownThumbLower,
                            onTouchStart: this.handleTouchStartThumbLower,
                            ref: this.thumbLower
                        }), z, React.createElement("div", {
                            id: x,
                            className: P,
                            style: {
                                left: `${M}px`
                            },
                            role: "slider",
                            "aria-disabled": l,
                            "aria-valuemin": i,
                            "aria-valuemax": a,
                            "aria-valuenow": k[1],
                            "aria-invalid": !!d,
                            "aria-describedby": _,
                            "aria-labelledby": uf(n),
                            onFocus: p,
                            onBlur: f,
                            tabIndex: 0,
                            onKeyDown: this.handleKeypressUpper,
                            onMouseDown: this.handleMouseDownThumbUpper,
                            onTouchStart: this.handleTouchStartThumbUpper,
                            ref: this.thumbUpper
                        }), H]
                    }), V]
                })
            }), React.createElement(Ni, {
                event: "resize",
                handler: this.setTrackPosition
            })]
        })
    }
}
te(NB, "contextType", Xx);
function Bg(e) {
    document.addEventListener("mousemove", e),
    document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", e)
    }
    , {
        once: !0
    })
}
function zg(e) {
    const t = () => {
        document.removeEventListener("touchmove", e),
        document.removeEventListener("touchend", t),
        document.removeEventListener("touchcancel", t)
    }
    ;
    document.addEventListener("touchmove", e, {
        passive: !1
    }),
    document.addEventListener("touchend", t, {
        once: !0
    }),
    document.addEventListener("touchcancel", t, {
        once: !0
    })
}
function wC(e, t, n, i, a=ma.Upper) {
    let r = d(f(e[1]))
      , s = p(f(e[0]));
    const l = r - i
      , c = s + i;
    return a === ma.Upper && s > l ? s = l : a === ma.Lower && r < c && (r = c),
    [s, r];
    function d(v) {
        const g = t + i;
        return v < g ? g : v > n ? n : v
    }
    function p(v) {
        const g = n - i;
        return v < t ? t : v > g ? g : v
    }
    function f(v) {
        return Math.round(v / i) * i
    }
}
function NC(e, t) {
    return e == null || t == null ? !1 : e[0] === t[0] && e[1] === t[1]
}
var xs = {
    SingleThumb: "Polaris-RangeSlider-SingleThumb",
    disabled: "Polaris-RangeSlider-SingleThumb--disabled",
    InputWrapper: "Polaris-RangeSlider-SingleThumb__InputWrapper",
    Prefix: "Polaris-RangeSlider-SingleThumb__Prefix",
    Suffix: "Polaris-RangeSlider-SingleThumb__Suffix",
    Input: "Polaris-RangeSlider-SingleThumb__Input",
    error: "Polaris-RangeSlider-SingleThumb--error",
    Output: "Polaris-RangeSlider-SingleThumb__Output",
    OutputBubble: "Polaris-RangeSlider-SingleThumb__OutputBubble"
};
function noe(e) {
    return Math.sign(e) === 1 ? -Math.abs(e) : Math.sign(e) === -1 ? Math.abs(e) : 0
}
function ioe(e) {
    const {id: t, error: n, helpText: i, value: a, min: r, max: s, disabled: l, output: c, prefix: d, suffix: p, label: f, labelAction: v, labelHidden: g, step: y, onBlur: b, onFocus: k} = e
      , C = ha(a, r, s)
      , x = [];
    n && x.push(`${t}Error`),
    i && x.push(rb(t));
    const A = x.length ? x.join(" ") : void 0
      , _ = (C - r) * 100 / (s - r)
      , w = noe((_ - 50) / 100)
      , T = {
        "--pc-range-slider-min": r,
        "--pc-range-slider-max": s,
        "--pc-range-slider-current": C,
        "--pc-range-slider-progress": `${_}%`,
        "--pc-range-slider-output-factor": `${w}`
    }
      , P = !l && c && React.createElement("output", {
        htmlFor: t,
        className: xs.Output,
        children: React.createElement("div", {
            className: xs.OutputBubble,
            children: React.createElement(ee, {
                as: "span",
                variant: "headingSm",
                alignment: "center",
                children: C
            })
        })
    })
      , I = d && React.createElement("div", {
        className: xs.Prefix,
        children: d
    })
      , L = p && React.createElement("div", {
        className: xs.Suffix,
        children: p
    })
      , R = G(xs.SingleThumb, vy.RangeSlider, n && xs.error, l && xs.disabled);
    return React.createElement(Uf, {
        id: t,
        label: f,
        error: n,
        action: v,
        labelHidden: g,
        helpText: i,
        children: React.createElement("div", {
            className: R,
            style: T,
            children: [I, React.createElement("div", {
                className: G(xs.InputWrapper, vy["Track--dashed-after"]),
                children: [React.createElement("input", {
                    type: "range",
                    className: xs.Input,
                    id: t,
                    name: t,
                    min: r,
                    max: s,
                    step: y,
                    value: C,
                    disabled: l,
                    onChange: D,
                    onFocus: k,
                    onBlur: b,
                    "aria-valuemin": r,
                    "aria-valuemax": s,
                    "aria-valuenow": C,
                    "aria-invalid": !!n,
                    "aria-describedby": A
                }), P]
            }), L]
        })
    });
    function D(M) {
        const {onChange: O} = e;
        O && O(parseFloat(M.currentTarget.value), t)
    }
}
function iKe({min: e=0, max: t=100, step: n=1, value: i, ...a}) {
    const s = {
        id: React.useId(),
        min: e,
        max: t,
        step: n,
        ...a
    };
    return aoe(i) ? React.createElement(NB, {
        value: i,
        ...s
    }) : React.createElement(ioe, {
        value: i,
        ...s
    })
}
function aoe(e) {
    return Array.isArray(e)
}
var wi = {
    ResourceItem: "Polaris-ResourceItem",
    Actions: "Polaris-ResourceItem__Actions",
    ItemWrapper: "Polaris-ResourceItem__ItemWrapper",
    CheckboxWrapper: "Polaris-ResourceItem__CheckboxWrapper",
    focusedInner: "Polaris-ResourceItem--focusedInner",
    focused: "Polaris-ResourceItem--focused",
    selected: "Polaris-ResourceItem--selected",
    Link: "Polaris-ResourceItem__Link",
    Button: "Polaris-ResourceItem__Button",
    selectable: "Polaris-ResourceItem--selectable",
    disabled: "Polaris-ResourceItem--disabled",
    ListItem: "Polaris-ResourceItem__ListItem",
    hasBulkActions: "Polaris-ResourceItem--hasBulkActions"
};
const Ho = "All";
class roe extends React.Component {
    [k: string]: any;
    constructor() {
        super(...arguments);
        te(this, "state", {
            actionsMenuVisible: !1,
            focused: !1,
            focusedInner: !1,
            selected: JL(this.props.id, this.props.context.selectedItems)
        });
        te(this, "node", null);
        te(this, "overlayRef", React.createRef());
        te(this, "buttonOverlay", React.createRef());
        te(this, "setNode", n => {
            this.node = n
        }
        );
        te(this, "handleFocus", n => {
            n.target === this.buttonOverlay.current || this.node && n.target === this.overlayRef.current ? this.setState({
                focused: !0,
                focusedInner: !1
            }) : this.node && this.node.contains(n.target) && this.setState({
                focused: !0,
                focusedInner: !0
            })
        }
        );
        te(this, "handleBlur", ({relatedTarget: n}) => {
            this.node && n instanceof Element && this.node.contains(n) || this.setState({
                focused: !1,
                focusedInner: !1
            })
        }
        );
        te(this, "handleMouseOut", () => {
            this.state.focused && this.setState({
                focused: !1,
                focusedInner: !1
            }),
            this.props.onMouseOut && this.props.onMouseOut()
        }
        );
        te(this, "handleLargerSelectionArea", n => {
            ad(n),
            this.handleSelection(!this.state.selected, n.nativeEvent.shiftKey)
        }
        );
        te(this, "handleSelection", (n, i) => {
            const {id: a, sortOrder: r, context: {onSelectionChange: s}} = this.props;
            a == null || s == null || (this.setState({
                focused: n,
                focusedInner: n
            }),
            s(n, a, r, i))
        }
        );
        te(this, "handleClick", n => {
            ad(n);
            const {id: i, onClick: a, url: r, context: {selectMode: s}} = this.props
              , {ctrlKey: l, metaKey: c} = n.nativeEvent
              , d = this.node && this.node.querySelector("a");
            if (s) {
                this.handleLargerSelectionArea(n);
                return
            }
            if (d !== n.target) {
                if (a && a(i),
                r && (l || c)) {
                    window.open(r, "_blank");
                    return
                }
                r && d && d.click()
            }
        }
        );
        te(this, "handleKeyUp", n => {
            const {disabled: i, onClick: a=ooe, context: {selectMode: r}} = this.props
              , {key: s} = n;
            s === "Enter" && this.props.url && !r && !i && a()
        }
        );
        te(this, "handleActionsClick", () => {
            this.setState( ({actionsMenuVisible: n}) => ({
                actionsMenuVisible: !n
            }))
        }
        );
        te(this, "handleCloseRequest", () => {
            this.setState({
                actionsMenuVisible: !1
            })
        }
        )
    }
    static getDerivedStateFromProps(n, i) {
        const a = JL(n.id, n.context.selectedItems);
        return i.selected === a ? null : {
            selected: a
        }
    }
    shouldComponentUpdate(n, i) {
        const {children: a, context: {selectedItems: r, ...s}, ...l} = n
          , {children: c, context: {selectedItems: d, ...p}, ...f} = this.props
          , v = n.context.selectMode;
        return !Bs(this.state, i) || this.props.context.selectMode !== v || !n.context.selectMode && (!Bs(f, l) || !Bs(p, s))
    }
    render() {
        const {children: n, url: i, external: a, media: r, shortcutActions: s, ariaControls: l, ariaExpanded: c, ariaDescribedBy: d, persistActions: p=!1, accessibilityLabel: f, name: v, context: {selectable: g, selectMode: y, hasBulkActions: b, loading: k, resourceName: C}, i18n: x, verticalAlignment: A, dataHref: _, breakpoints: w, onMouseOver: T, disabled: P} = this.props
          , {actionsMenuVisible: I, focused: L, focusedInner: R, selected: D} = this.state;
        let M = null
          , O = null;
        if (g) {
            const J = v || f || x.translate("Polaris.Common.checkbox");
            O = React.createElement("div", {
                className: wi.CheckboxWrapper,
                onClick: ad,
                onChange: this.handleLargerSelectionArea,
                children: React.createElement(eF, {
                    children: X => React.createElement(ss, {
                        id: X,
                        label: J,
                        labelHidden: !0,
                        checked: D,
                        disabled: k || P,
                        bleedInlineStart: "300",
                        bleedInlineEnd: "300",
                        bleedBlockStart: "300",
                        bleedBlockEnd: "300",
                        fill: !0,
                        labelClassName: wi.CheckboxLabel
                    })
                })
            })
        }
        (r || g) && (M = React.createElement(Te, {
            gap: "300",
            blockAlign: r && g ? "center" : XL(A),
            children: [O, r]
        }));
        const z = G(wi.ResourceItem, L && wi.focused, g && wi.selectable, D && wi.selected, y && wi.selectMode, p && wi.persistActions, R && wi.focusedInner, P && wi.disabled)
          , B = G(wi.ListItem, L && !R && wi.focused, b && wi.hasBulkActions, D && wi.selected, g && wi.selectable);
        let H = null
          , q = null;
        if (s && !k)
            if (p) {
                H = w != null && w.lgUp ? React.createElement("div", {
                    className: wi.Actions,
                    onClick: ad,
                    children: React.createElement(gr, {
                        children: as(s, {
                            variant: "tertiary"
                        })
                    })
                }) : null;
                const J = v ? x.translate("Polaris.ResourceList.Item.actionsDropdownLabel", {
                    accessibilityLabel: v
                }) : x.translate("Polaris.ResourceList.Item.actionsDropdown");
                q = !y && (w != null && w.lgDown) ? React.createElement("div", {
                    onClick: ad,
                    children: React.createElement(Fn, {
                        activator: React.createElement(nt, {
                            accessibilityLabel: J,
                            onClick: this.handleActionsClick,
                            variant: "tertiary",
                            icon: "menu-horizontal"
                        }),
                        onClose: this.handleCloseRequest,
                        active: I,
                        children: React.createElement(ka, {
                            items: s
                        })
                    })
                }) : null
            } else
                w != null && w.lgUp && (H = React.createElement("div", {
                    className: wi.Actions,
                    onClick: ad,
                    children: React.createElement(he, {
                        position: "absolute",
                        insetBlockStart: "400",
                        insetInlineEnd: "500",
                        children: React.createElement(gr, {
                            variant: "segmented",
                            children: as(s, {
                                size: "slim"
                            })
                        })
                    })
                }));
        const W = React.createElement(he, {
            id: this.props.id,
            position: "relative",
            paddingInlineStart: "300",
            paddingInlineEnd: "300",
            paddingBlockStart: "300",
            paddingBlockEnd: "300",
            zIndex: "var(--pc-resource-item-content-stacking-order)",
            children: React.createElement($s, {
                columns: {
                    xs: "1fr auto"
                },
                children: [React.createElement($s, {
                    columns: {
                        xs: r || g ? "auto 1fr" : "1fr"
                    },
                    gap: "300",
                    children: [M, React.createElement(Te, {
                        blockAlign: XL(A),
                        children: React.createElement(he, {
                            width: "100%",
                            padding: "0",
                            children: n
                        })
                    })]
                }), H, q]
            })
        })
          , V = k ? -1 : 0
          , $ = f || x.translate("Polaris.ResourceList.Item.viewItem", {
            itemName: v || C && C.singular || ""
        })
          , Q = d === void 0 ? this.props.id : d
          , K = i ? React.createElement(eF, {
            children: J => React.createElement(Bi, {
                "aria-describedby": Q,
                "aria-label": $,
                className: wi.Link,
                url: i,
                external: a,
                tabIndex: V,
                id: J,
                ref: this.overlayRef
            })
        }) : React.createElement("button", {
            className: wi.Button,
            "aria-label": $,
            "aria-controls": l,
            "aria-expanded": c,
            onClick: this.handleClick,
            tabIndex: V,
            ref: this.buttonOverlay
        });
        return React.createElement("li", {
            className: B,
            "data-href": _,
            children: React.createElement("div", {
                className: wi.ItemWrapper,
                children: React.createElement("div", {
                    ref: this.setNode,
                    className: z,
                    onClick: P ? () => {}
                    : this.handleClick,
                    onFocus: this.handleFocus,
                    onBlur: this.handleBlur,
                    onKeyUp: this.handleKeyUp,
                    onMouseOver: T,
                    onMouseOut: this.handleMouseOut,
                    "data-href": i,
                    children: [P ? null : K, W]
                })
            })
        })
    }
}
function ooe() {}
function ad(e) {
    e.stopPropagation()
}
function JL(e, t) {
    return !!(t && (Array.isArray(t) && t.includes(e) || t === Ho))
}
function soe(e) {
    const t = Wn();
    return React.createElement(roe, {
        ...e,
        breakpoints: t,
        context: React.useContext(z_),
        i18n: at()
    })
}
function XL(e) {
    switch (e) {
    case "leading":
        return "start";
    case "trailing":
        return "end";
    case "center":
        return "center";
    case "fill":
        return "stretch";
    case "baseline":
        return "baseline";
    default:
        return "start"
    }
}
function eF(e) {
    const t = React.useId();
    return e.children(t)
}
var Pn = {
    FiltersWrapper: "Polaris-ResourceList__FiltersWrapper",
    ResourceListWrapper: "Polaris-ResourceList__ResourceListWrapper",
    ResourceList: "Polaris-ResourceList",
    HeaderOuterWrapper: "Polaris-ResourceList__HeaderOuterWrapper",
    BulkActionsWrapper: "Polaris-ResourceList__BulkActionsWrapper",
    "HeaderWrapper-disabled": "Polaris-ResourceList__HeaderWrapper--disabled",
    "HeaderWrapper-overlay": "Polaris-ResourceList__HeaderWrapper--overlay",
    HeaderWrapper: "Polaris-ResourceList__HeaderWrapper",
    "HeaderWrapper-isSticky": "Polaris-ResourceList__HeaderWrapper--isSticky",
    HeaderContentWrapper: "Polaris-ResourceList__HeaderContentWrapper",
    "HeaderWrapper-inSelectMode": "Polaris-ResourceList__HeaderWrapper--inSelectMode",
    SortWrapper: "Polaris-ResourceList__SortWrapper",
    AlternateToolWrapper: "Polaris-ResourceList__AlternateToolWrapper",
    "HeaderWrapper-hasSelect": "Polaris-ResourceList__HeaderWrapper--hasSelect",
    "HeaderWrapper-hasAlternateTool": "Polaris-ResourceList__HeaderWrapper--hasAlternateTool",
    "HeaderWrapper-hasSort": "Polaris-ResourceList__HeaderWrapper--hasSort",
    HeaderTitleWrapper: "Polaris-ResourceList__HeaderTitleWrapper",
    BulkActionsWrapperVisible: "Polaris-ResourceList__BulkActionsWrapperVisible",
    PaginationWrapper: "Polaris-ResourceList__PaginationWrapper",
    CheckableButtonWrapper: "Polaris-ResourceList__CheckableButtonWrapper",
    EmptySearchResultWrapper: "Polaris-ResourceList__EmptySearchResultWrapper",
    ItemWrapper: "Polaris-ResourceList__ItemWrapper",
    "ItemWrapper-isLoading": "Polaris-ResourceList__ItemWrapper--isLoading",
    SpinnerContainer: "Polaris-ResourceList__SpinnerContainer",
    LoadingOverlay: "Polaris-ResourceList__LoadingOverlay",
    disableTextSelection: "Polaris-ResourceList--disableTextSelection"
}
  , Wa = {
    Select: "Polaris-Select",
    disabled: "Polaris-Select--disabled",
    error: "Polaris-Select--error",
    Backdrop: "Polaris-Select__Backdrop",
    Input: "Polaris-Select__Input",
    Content: "Polaris-Select__Content",
    InlineLabel: "Polaris-Select__InlineLabel",
    Icon: "Polaris-Select__Icon",
    notLabelInside: "Polaris-Select--notLabelInside",
    compactContent: "Polaris-Select--compactContent",
    SelectedOption: "Polaris-Select__SelectedOption",
    labelInside: "Polaris-Select--labelInside",
    Prefix: "Polaris-Select__Prefix",
    compactInput: "Polaris-Select--compactInput",
    hover: "Polaris-Select--hover",
    toneMagic: "Polaris-Select--toneMagic"
};
const tF = "";
function loe({options: e, label: t, labelAction: n, labelHidden: i, labelInline: a, disabled: r, helpText: s, placeholder: l, id: c, name: d, value: p=tF, error: f, onChange: v, onFocus: g, onBlur: y, requiredIndicator: b, tone: k, size: C="base"}) {
    const {value: x, toggle: A} = Di(!1)
      , _ = h_()
      , w = React.useId()
      , T = c ?? w
      , P = React.useContext(g_)
      , I = a || P ? !0 : i
      , R = _ && !(I || n || a)
      , D = G(Wa.Select, R && Wa.labelInside, f && Wa.error, k && Wa[$t("tone", k)], r && Wa.disabled)
      , M = React.useCallback(X => {
        A(),
        g == null || g(X)
    }
    , [g, A])
      , O = React.useCallback(X => {
        A(),
        y == null || y(X)
    }
    , [y, A])
      , z = v ? X => v(X.currentTarget.value, T) : void 0
      , B = [];
    s && B.push(rb(T)),
    f && B.push(`${T}Error`);
    let q = (e || []).map(coe);
    l && (q = [{
        label: l,
        value: tF,
        disabled: !0
    }, ...q]);
    const W = a && React.createElement(he, {
        paddingInlineEnd: "100",
        children: React.createElement(ee, {
            as: "span",
            variant: C === "compact" ? "bodySm" : "bodyMd",
            tone: k && k === "magic" && !x ? "magic-subdued" : "subdued",
            truncate: !0,
            children: t
        })
    })
      , V = uoe(q, p)
      , $ = V.prefix && React.createElement("div", {
        className: Wa.Prefix,
        children: V.prefix
    })
      , Q = React.createElement("div", {
        className: G(Wa.Content, !R && Wa.notLabelInside, C === "compact" && Wa.compactContent),
        "aria-hidden": !0,
        "aria-disabled": r,
        children: [W, $, React.createElement("span", {
            className: Wa.SelectedOption,
            children: V.label
        }), React.createElement("span", {
            className: Wa.Icon,
            children: React.createElement(Fe, {
                type: "select",
                tone: "legacy-inherit"
            })
        })]
    })
      , K = q.map(moe)
      , J = G(Wa.Input, C === "compact" && Wa.compactInput);
    return React.createElement(Uf, {
        id: T,
        label: t,
        error: f,
        action: n,
        labelHidden: I,
        labelPosition: R ? "inside" : void 0,
        helpText: s,
        requiredIndicator: b,
        disabled: r,
        children: React.createElement("div", {
            className: D,
            children: [React.createElement("select", {
                id: T,
                name: d,
                value: p,
                className: J,
                disabled: r,
                onFocus: M,
                onBlur: O,
                onChange: z,
                "aria-invalid": !!f,
                "aria-describedby": B.length ? B.join(" ") : void 0,
                "aria-required": b,
                children: K
            }), Q, React.createElement("div", {
                className: Wa.Backdrop
            })]
        })
    })
}
function nF(e) {
    return typeof e == "string"
}
function H_(e) {
    return typeof e == "object" && "options"in e && e.options != null
}
function iF(e) {
    return {
        label: e,
        value: e
    }
}
function coe(e) {
    if (nF(e))
        return iF(e);
    if (H_(e)) {
        const {title: t, options: n} = e;
        return {
            title: t,
            options: n.map(i => nF(i) ? iF(i) : i)
        }
    }
    return e
}
function uoe(e, t) {
    const n = doe(e);
    let i = n.find(a => t === a.value);
    return i === void 0 && (i = n.find(a => !a.hidden)),
    i || {
        value: "",
        label: ""
    }
}
function doe(e) {
    let t = [];
    return e.forEach(n => {
        H_(n) ? t = t.concat(n.options) : t.push(n)
    }
    ),
    t
}
function aF(e) {
    const {value: t, label: n, prefix: i, key: a, ...r} = e;
    return React.createElement("option", {
        value: t,
        ...r,
        children: n
    }, a ?? t)
}
function moe(e) {
    if (H_(e)) {
        const {title: t, options: n} = e;
        return React.createElement("optgroup", {
            label: t,
            children: n.map(aF)
        }, t)
    }
    return aF(e)
}
const poe = 28
  , foe = 45;
function rF(e, t) {
    return e.map( (n, i) => t(n, i))
}
function hoe(e, t) {
    return Object.prototype.hasOwnProperty.call(e, "id") ? e.id : t.toString()
}
function goe(e, t, n, i) {
    const a = Math.min(e, t)
      , r = Math.max(e, t);
    return i.slice(a, r + 1).map(n)
}
const oF = [];
function voe({items: e, filterControl: t, flushFilters: n, emptyState: i, emptySearchState: a, resourceName: r, promotedBulkActions: s, bulkActions: l, selectedItems: c=[], isFiltered: d, selectable: p, hasMoreItems: f, loading: v, headerContent: g, showHeader: y, totalItemsCount: b, sortValue: k, sortOptions: C, alternateTool: x, onSortChange: A, onSelectionChange: _, renderItem: w, idForItem: T=hoe, resolveItemId: P, pagination: I}) {
    const L = at()
      , [R,D] = React.useState(0)
      , [M,O] = React.useState()
      , {smDown: z} = Wn()
      , B = React.useRef(null)
      , H = s2( () => ({
        singular: L.translate("Polaris.ResourceList.defaultItemSingular"),
        plural: L.translate("Polaris.ResourceList.defaultItemPlural")
    }))
      , [q,W] = React.useState(null)
      , V = React.useRef(null)
      , $ = !z && (c === Ho || c.length > 0)
      , Q = !!(s && s.length > 0 || l && l.length > 0 || p) && !z
      , K = React.useMemo( () => c === Ho ? !0 : c.length === 0 ? !1 : c.length === e.length ? !0 : "indeterminate", [e.length, c])
      , J = r || H.current
      , X = React.useMemo( () => {
        const we = e.length
          , ae = !v && (!b && we === 1 || b === 1) ? J.singular : J.plural;
        return v ? L.translate("Polaris.ResourceList.loading", {
            resource: ae
        }) : b ? L.translate("Polaris.ResourceList.showingTotalCount", {
            itemsCount: we,
            totalItemsCount: b,
            resource: ae
        }) : g || L.translate("Polaris.ResourceList.showing", {
            itemsCount: we,
            resource: ae
        })
    }
    , [g, L, e.length, v, J.plural, J.singular, b])
      , se = React.useMemo( () => {
        const we = c.length
          , ae = e.length
          , Pe = we === ae;
        return ae === 1 && Pe ? L.translate("Polaris.ResourceList.a11yCheckboxDeselectAllSingle", {
            resourceNameSingular: J.singular
        }) : ae === 1 ? L.translate("Polaris.ResourceList.a11yCheckboxSelectAllSingle", {
            resourceNameSingular: J.singular
        }) : Pe ? L.translate("Polaris.ResourceList.a11yCheckboxDeselectAllMultiple", {
            itemsLength: e.length,
            resourceNamePlural: J.plural
        }) : L.translate("Polaris.ResourceList.a11yCheckboxSelectAllMultiple", {
            itemsLength: e.length,
            resourceNamePlural: J.plural
        })
    }
    , [L, e.length, J.singular, J.plural, c.length])
      , ne = React.useMemo( () => {
        if (!(!Q || !f) && c === Ho)
            return L.translate(d ? "Polaris.ResourceList.allFilteredItemsSelected" : "Polaris.ResourceList.allItemsSelected", {
                itemsLength: e.length,
                resourceNamePlural: J.plural
            })
    }
    , [f, L, d, Q, e, J.plural, c])
      , Y = React.useCallback( () => {
        const we = c === Ho ? rF(e, T) : Ho;
        _ == null || _(we)
    }
    , [T, e, _, c])
      , ue = React.useMemo( () => !Q || !f ? void 0 : {
        content: c === Ho ? L.translate("Polaris.Common.undo") : L.translate(d ? "Polaris.ResourceList.selectAllFilteredItems" : "Polaris.ResourceList.selectAllItems", {
            itemsLength: e.length,
            resourceNamePlural: J.plural
        }),
        onAction: Y
    }, [Y, f, L, d, Q, e.length, J.plural, c])
      , ge = React.useCallback( () => {
        if (q === null || typeof window > "u")
            return;
        const we = q.getBoundingClientRect()
          , ae = Math.max(document.documentElement ? document.documentElement.clientHeight : 0, window.innerHeight || 0)
          , Pe = ae - we.height
          , Ie = e.length === 1 ? poe : foe
          , Be = Pe > 0 ? (we.height - Ie) / 2 : (ae - we.top - Ie) / 2;
        D(Be)
    }
    , [q, e.length]);
    mf(c, we => {
        we !== oF && (V.current = null)
    }
    ),
    mf(z, we => {
        we ? (_ == null || _(oF),
        V.current = c) : V.current && (_ == null || _(V.current),
        V.current = null)
    }
    ),
    React.useEffect( () => {
        v && ge()
    }
    , [v, ge]);
    const de = (we, ae) => {
        const Pe = T(we, ae);
        return w(we, Pe, ae)
    }
      , ve = React.useCallback( (we, ae, Pe, Ie) => {
        let Be = c === Ho ? rF(e, T) : [...c];
        Pe !== void 0 && O(Pe);
        const dt = M;
        let _t = [ae];
        if (Ie && dt !== void 0 && Pe !== void 0 && P && (_t = goe(dt, Pe, P, e)),
        Be = [...new Set([...Be, ..._t])],
        !we)
            for (const ht of _t)
                Be.splice(Be.indexOf(ht), 1);
        _ == null || _(Be)
    }
    , [T, e, M, _, P, c])
      , Le = React.useCallback( () => {
        let we;
        c === Ho || c.length === e.length ? we = [] : we = e.map( (ae, Pe) => T(ae, Pe)),
        _ == null || _(we),
        setTimeout( () => {
            var ae;
            (ae = B == null ? void 0 : B.current) == null || ae.focus()
        }
        , 0)
    }
    , [T, e, _, c])
      , Ce = G(Pn.BulkActionsWrapper, $ && Pn.BulkActionsWrapperVisible)
      , Ae = c === Ho ? `${e.length}+` : c.length
      , re = c.length > 0 ? L.translate("Polaris.ResourceList.selected", {
        selectedItemsCount: Ae
    }) : void 0
      , le = Q ? React.createElement("div", {
        className: Ce,
        children: React.createElement(GO, {
            selectMode: $,
            label: re,
            paginatedSelectAllAction: ue,
            paginatedSelectAllText: ne,
            promotedActions: s,
            actions: l,
            disabled: v,
            accessibilityLabel: se,
            selected: K,
            onToggleAll: Le,
            ref: B,
            buttonSize: "medium"
        })
    }) : null
      , ye = t ? React.createElement("div", {
        className: G(!n && Pn.FiltersWrapper),
        children: t
    }) : null
      , Ee = C && C.length > 0 && !x ? React.createElement("div", {
        className: Pn.SortWrapper,
        children: React.createElement(loe, {
            label: L.translate("Polaris.ResourceList.sortingLabel"),
            labelInline: !z,
            labelHidden: z,
            options: C,
            onChange: A,
            value: k,
            disabled: $
        })
    }) : null
      , Qe = x && !Ee ? React.createElement("div", {
        className: Pn.AlternateToolWrapper,
        children: x
    }) : null
      , De = React.createElement("div", {
        className: Pn.HeaderTitleWrapper,
        children: React.createElement(ee, {
            as: "span",
            variant: "bodyMd",
            children: X
        })
    })
      , Ue = Q ? React.createElement("div", {
        className: Pn.CheckableButtonWrapper,
        children: React.createElement(qO, {
            accessibilityLabel: se,
            label: X,
            onToggleAll: Le,
            disabled: v,
            ref: B,
            selected: K
        })
    }) : null
      , Ye = Q || C && C.length > 0 || x
      , Mt = v ? React.createElement("div", {
        className: Pn["HeaderWrapper-overlay"]
    }) : null
      , Xe = e.length > 0
      , it = i && !Xe && !v
      , ke = !it && t && !Xe && !v
      , $e = !it && y !== !1 && !ke && (y || Ye) && React.createElement("div", {
        className: Pn.HeaderOuterWrapper,
        children: React.createElement(pb, {
            boundingElement: q,
            children: we => {
                const ae = G(Pn.HeaderWrapper, C && C.length > 0 && !x && Pn["HeaderWrapper-hasSort"], x && Pn["HeaderWrapper-hasAlternateTool"], Q && Pn["HeaderWrapper-hasSelect"], v && Pn["HeaderWrapper-disabled"], Q && $ && le && Pn["HeaderWrapper-inSelectMode"], we && Pn["HeaderWrapper-isSticky"]);
                return React.createElement("div", {
                    className: ae,
                    children: [Mt, React.createElement("div", {
                        className: Pn.HeaderContentWrapper,
                        children: [De, Ue, Qe, Ee]
                    }), le]
                })
            }
        })
    })
      , Se = L.translate("Polaris.ResourceList.emptySearchResultTitle", {
        resourceNamePlural: J.plural
    })
      , Re = L.translate("Polaris.ResourceList.emptySearchResultDescription")
      , Me = ke ? a || React.createElement("div", {
        className: Pn.EmptySearchResultWrapper,
        children: React.createElement(D_, {
            title: Se,
            description: Re,
            withIllustration: !0
        })
    }) : null
      , Ze = it ? i : null
      , Ut = {
        paddingTop: `${R > 0 ? R : 8}px`
    }
      , Ht = e.length < 2 ? "small" : "large"
      , vn = v ? React.createElement(React.Fragment, {
        children: [React.createElement("li", {
            className: Pn.SpinnerContainer,
            style: Ut,
            children: React.createElement(er, {
                size: Ht,
                accessibilityLabel: "Items are loading"
            })
        }), React.createElement("li", {
            className: Pn.LoadingOverlay
        })]
    }) : null
      , cn = G(Pn.ItemWrapper, v && Pn["ItemWrapper-isLoading"])
      , Pt = v && !Xe ? React.createElement("div", {
        className: cn,
        tabIndex: -1,
        children: vn
    }) : null
      , Rt = G(Pn.ResourceList, v && Pn.disabledPointerEvents, $ && Pn.disableTextSelection)
      , wn = Xe ? React.createElement("ul", {
        className: Rt,
        ref: W,
        "aria-live": "polite",
        "aria-busy": v,
        children: [vn, React.Children.toArray(e.map(de))]
    }) : null
      , Jt = I ? React.createElement("div", {
        className: Pn.PaginationWrapper,
        children: React.createElement(Qd, {
            type: "table",
            ...I
        })
    }) : null
      , Dt = React.useMemo( () => ({
        selectable: Q,
        selectedItems: c,
        selectMode: $,
        hasBulkActions: !!l,
        resourceName: J,
        loading: v,
        onSelectionChange: ve
    }), [l, ve, Q, v, J, $, c]);
    return React.createElement(z_.Provider, {
        value: Dt,
        children: [ye, React.createElement("div", {
            className: Pn.ResourceListWrapper,
            children: [$e, wn, Me, Ze, Pt, Jt]
        })]
    })
}
voe.Item = soe;
var sF = {
    SkeletonBodyTextContainer: "Polaris-SkeletonBodyText__SkeletonBodyTextContainer",
    SkeletonBodyText: "Polaris-SkeletonBodyText"
};
function lF({lines: e=3}) {
    const t = [];
    for (let n = 0; n < e; n++)
        t.push(React.createElement("div", {
            className: sF.SkeletonBodyText
        }, n));
    return React.createElement("div", {
        className: sF.SkeletonBodyTextContainer,
        children: t
    })
}
var cF = {
    DisplayText: "Polaris-SkeletonDisplayText__DisplayText",
    sizeSmall: "Polaris-SkeletonDisplayText--sizeSmall",
    sizeMedium: "Polaris-SkeletonDisplayText--sizeMedium",
    sizeLarge: "Polaris-SkeletonDisplayText--sizeLarge",
    sizeExtraLarge: "Polaris-SkeletonDisplayText--sizeExtraLarge"
};
function L0({size: e="medium", maxWidth: t}) {
    const n = G(cF.DisplayText, e && cF[$t("size", e)])
      , i = {
        "--pc-skeleton-display-text-max-width": t ?? void 0
    };
    return React.createElement("div", {
        className: n,
        style: hm(i)
    })
}
function aKe({children: e, fullWidth: t, narrowWidth: n}) {
    const i = at();
    return React.createElement(React.Fragment, {
        children: [React.createElement(xB, {}), React.createElement(ft, {
            gap: "400",
            inlineAlign: "center",
            children: React.createElement(he, {
                width: "100%",
                padding: "0",
                paddingInlineStart: "400",
                paddingInlineEnd: "300",
                maxWidth: "998px",
                "aria-label": i.translate("Polaris.SkeletonPage.loadingLabel"),
                role: "status",
                ...n && {
                    maxWidth: "662px"
                },
                ...t && {
                    maxWidth: "none"
                },
                children: React.createElement(ft, {
                    children: React.createElement(he, {
                        paddingBlockEnd: "200",
                        width: "100%",
                        children: e
                    })
                })
            })
        })]
    })
}
var Vg = {
    Tabs: "Polaris-SkeletonTabs__Tabs",
    Tab: "Polaris-SkeletonTabs__Tab",
    TabText: "Polaris-SkeletonTabs__TabText",
    fitted: "Polaris-SkeletonTabs--fitted"
};
function rKe({count: e=2, fitted: t=!1}) {
    return React.createElement("div", {
        className: G(Vg.Tabs, t && Vg.fitted),
        children: [...Array(e).keys()].map(n => React.createElement("div", {
            className: G(Vg.Tab),
            children: React.createElement("div", {
                className: Vg.TabText
            })
        }, n))
    })
}
var uF = {
    SkeletonThumbnail: "Polaris-SkeletonThumbnail",
    sizeExtraSmall: "Polaris-SkeletonThumbnail--sizeExtraSmall",
    sizeSmall: "Polaris-SkeletonThumbnail--sizeSmall",
    sizeMedium: "Polaris-SkeletonThumbnail--sizeMedium",
    sizeLarge: "Polaris-SkeletonThumbnail--sizeLarge"
};
function oKe({size: e="medium"}) {
    const t = G(uF.SkeletonThumbnail, e && uF[$t("size", e)]);
    return React.createElement("div", {
        className: t
    })
}
const TB = React.memo(function(t) {
    const n = React.useId()
      , {showToast: i, hideToast: a} = tr();
    return O_( () => (i({
        id: n,
        ...t
    }),
    () => {
        a({
            id: n
        })
    }
    ), [t]),
    null
})
  , F0 = 60
  , E0 = F0 * 60;
function dF(e) {
    return e > 9 ? String(e) : `0${e}`
}
function W_(e) {
    return {
        hours: Math.floor(e / E0),
        minutes: Math.floor(e % E0 / F0),
        seconds: e % F0
    }
}
function yoe(e) {
    const {hours: t, minutes: n, seconds: i} = W_(e)
      , a = e > E0
      , r = a ? `${t}:` : ""
      , s = `${a ? dF(n) : n}:`
      , l = `${dF(i)}`;
    return `${r}${s}${l}`
}
function boe(e) {
    const {hours: t, minutes: n, seconds: i} = W_(e);
    let a = "Polaris.VideoThumbnail.playButtonA11yLabel.duration";
    return t ? (a += `.hours.${t > 1 ? "other" : "one"}`,
    i ? n > 1 ? a += `${i > 1 ? ".minutesAndSeconds" : ".minutesAndSecond"}` : n === 1 ? a += `${i > 1 ? ".minuteAndSeconds" : ".minuteAndSecond"}` : a += `${i > 1 ? ".andSeconds" : ".andSecond"}` : n ? a += `${n > 1 ? ".andMinutes" : ".andMinute"}` : a += ".only") : n ? (a += `.minutes.${n > 1 ? "other" : "one"}`,
    i ? a += `${i > 1 ? ".andSeconds" : ".andSecond"}` : a += ".only") : i && (a += i > 1 ? ".seconds.other" : ".seconds.one"),
    a
}
var _s = {
    Thumbnail: "Polaris-VideoThumbnail__Thumbnail",
    ThumbnailContainer: "Polaris-VideoThumbnail__ThumbnailContainer",
    PlayButton: "Polaris-VideoThumbnail__PlayButton",
    Timestamp: "Polaris-VideoThumbnail__Timestamp",
    PlayIcon: "Polaris-VideoThumbnail__PlayIcon",
    Progress: "Polaris-VideoThumbnail__Progress",
    Indicator: "Polaris-VideoThumbnail__Indicator",
    ProgressBar: "Polaris-VideoThumbnail__ProgressBar",
    Label: "Polaris-VideoThumbnail__Label"
};
function sKe({thumbnailUrl: e, videoLength: t=0, videoProgress: n=0, showVideoProgress: i=!1, accessibilityLabel: a, onClick: r, onBeforeStartPlaying: s}) {
    const l = at()
      , {isNavigationCollapsed: c} = dc();
    let d;
    if (a)
        d = a;
    else if (t) {
        const {hours: v, minutes: g, seconds: y} = W_(t);
        d = l.translate("Polaris.VideoThumbnail.playButtonA11yLabel.defaultWithDuration", {
            duration: l.translate(boe(t), {
                hourCount: v,
                minuteCount: g,
                secondCount: y
            })
        })
    } else
        d = l.translate("Polaris.VideoThumbnail.playButtonA11yLabel.default");
    const p = t ? React.createElement("div", {
        className: _s.Timestamp,
        children: React.createElement(Zr, {
            alignment: "center",
            spacing: "extraTight",
            children: [React.createElement("span", {
                className: _s.PlayIcon,
                children: React.createElement(Fe, {
                    type: "play",
                    tone: "legacy-inherit"
                })
            }), React.createElement(ee, {
                variant: c ? "bodyLg" : "bodyMd",
                as: "p",
                fontWeight: "semibold",
                children: yoe(t)
            })]
        })
    }) : null;
    let f = null;
    if (i) {
        const v = koe(t, n)
          , g = Math.round(v * 100);
        f = React.createElement("div", {
            className: _s.Progress,
            children: [React.createElement("progress", {
                className: _s.ProgressBar,
                value: g,
                max: "100"
            }), React.createElement("div", {
                className: _s.Indicator,
                style: {
                    transform: `scaleX(${v})`
                },
                children: React.createElement("span", {
                    className: _s.Label,
                    children: [g, "%"]
                })
            })]
        })
    }
    return React.createElement("div", {
        className: _s.ThumbnailContainer,
        children: [React.createElement("div", {
            className: _s.Thumbnail,
            style: {
                backgroundImage: `url(${e})`
            }
        }), React.createElement("button", {
            type: "button",
            className: _s.PlayButton,
            "aria-label": d,
            onClick: r,
            onMouseEnter: s,
            onFocus: s,
            onTouchStart: s,
            children: p
        }), f]
    })
}
function koe(e, t) {
    if (t > 0 && e > 0) {
        const n = parseFloat((t / e).toFixed(2));
        return n > 1 ? 1 : n
    }
    return 0
}
function lKe() {
    return React.useContext(gB)
}
function cKe() {
    const {selected: e} = React.useContext(gb);
    return e
}
function PB(e) {
    const t = e.split(/\s*\n\s*/g);
    let n = "";
    for (let i = 0, a = t.length; i < a; i++)
        t[i].length && (n += `${n.length ? `
` : ""}${t[i]}`);
    return n
}
var TC = {
    exports: {}
};
/*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
*/
var mF;
function Soe() {
    return mF || (mF = 1,
    function(e) {
        (function() {
            var t = {}.hasOwnProperty;
            function n() {
                for (var i = [], a = 0; a < arguments.length; a++) {
                    var r = arguments[a];
                    if (r) {
                        var s = typeof r;
                        if (s === "string" || s === "number")
                            i.push(r);
                        else if (Array.isArray(r)) {
                            if (r.length) {
                                var l = n.apply(null, r);
                                l && i.push(l)
                            }
                        } else if (s === "object") {
                            if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                i.push(r.toString());
                                continue
                            }
                            for (var c in r)
                                t.call(r, c) && r[c] && i.push(c)
                        }
                    }
                }
                return i.join(" ")
            }
            e.exports ? (n.default = n,
            e.exports = n) : window.classNames = n
        }
        )()
    }(TC)),
    TC.exports
}
var Coe = Soe();



const Moe = React.createContext(void 0)
  , Roe = {
    tooltip: 0,
    hovercard: 0
};
function joe({children: e}) {
    const [t,n] = React.useState(Roe)
      , i = React.useCallback(s => {
        n(l => ({
            ...l,
            [s]: l[s] + 1
        }))
    }
    , [])
      , a = React.useCallback(s => {
        n(l => ({
            ...l,
            [s]: l[s] - 1
        }))
    }
    , [])
      , r = React.useMemo( () => ({
        presenceList: Object.entries(t).reduce( (s, l) => {
            const [c,d] = l;
            return {
                ...s,
                [c]: d >= 1
            }
        }
        , {}),
        presenceCounter: t,
        addPresence: i,
        removePresence: a
    }), [i, a, t]);
    return React.createElement(Moe.Provider, {
        value: r,
        children: e
    })
}
const Doe = React.createContext(void 0);
function Ooe() {
    const [e,t] = React.useState(!1);
    return React.useEffect( () => {
        t(!0)
    }
    , []),
    e
}
function Boe(e, t) {
    return React.createElement("div", {
        id: "PolarisPortalsContainer",
        ref: t
    })
}
const zoe = React.forwardRef(Boe);
function Voe({children: e, container: t}) {
    const n = Ooe()
      , i = React.useRef(null)
      , a = React.useMemo( () => t ? {
        container: t
    } : n ? {
        container: i.current
    } : {
        container: null
    }, [t, n]);
    return React.createElement(Doe.Provider, {
        value: a,
        children: [e, t ? null : React.createElement(zoe, {
            ref: i
        })]
    })
}
const LB = React.createContext(null)
  , FB = React.createContext(null);
function uKe() {
    const e = React.useContext(LB);
    if (!e)
        throw new Error("No theme was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function dKe() {
    const e = React.useContext(FB);
    if (!e)
        throw new Error("No themeName was provided. Your application must be wrapped in an <AppProvider> or <ThemeProvider> component. See https://polaris.shopify.com/components/app-provider for implementation instructions.");
    return e
}
function M0(e, t, n) {
    let i, a, r, s, l, c, d = 0, p = !1, f = !1, v = !0;
    const g = !t && t !== 0;
    if (typeof e != "function")
        throw new TypeError("Expected a function");
    const y = t || 0;
    typeof n == "object" && (p = !!n.leading,
    f = "maxWait"in n,
    r = f ? Math.max(Number(n.maxWait) || 0, y) : void 0,
    v = "trailing"in n ? !!n.trailing : v);
    function b(D) {
        const M = i
          , O = a;
        return i = void 0,
        a = void 0,
        d = D,
        s = e.apply(O, M),
        s
    }
    function k(D, M) {
        return g ? (cancelAnimationFrame(l),
        requestAnimationFrame(D)) : setTimeout(D, M)
    }
    function C(D) {
        if (g)
            return cancelAnimationFrame(D);
        clearTimeout(D)
    }
    function x(D) {
        return d = D,
        l = k(w, y),
        p ? b(D) : s
    }
    function A(D) {
        const M = D - c
          , O = D - d
          , z = y - M;
        return f && r ? Math.min(z, r - O) : z
    }
    function _(D) {
        const M = D - c
          , O = D - d;
        return c === void 0 || M >= y || M < 0 || f && r && O >= r
    }
    function w() {
        const D = Date.now();
        if (_(D))
            return T(D);
        l = k(w, A(D))
    }
    function T(D) {
        return l = void 0,
        v && i ? b(D) : (i = a = void 0,
        s)
    }
    function P() {
        l !== void 0 && C(l),
        d = 0,
        i = c = a = l = void 0
    }
    function I() {
        return l === void 0 ? s : T(Date.now())
    }
    function L() {
        return l !== void 0
    }
    function R(...D) {
        const M = Date.now()
          , O = _(M);
        if (i = D,
        a = this,
        c = M,
        O) {
            if (l === void 0)
                return x(c);
            if (f)
                return l = k(w, y),
                b(c)
        }
        return l === void 0 && (l = k(w, y)),
        s
    }
    return R.cancel = P,
    R.flush = I,
    R.pending = L,
    R
}
const Uoe = {
    props: {
        "data-polaris-scrollable": !0
    },
    selector: "[data-polaris-scrollable]"
}
  , mKe = {
    props: {
        "data-polaris-overlay": !0
    }
}
  , pKe = {
    props: {
        "data-polaris-layer": !0
    },
    selector: "[data-polaris-layer]"
}
  , fKe = {
    props: {
        "data-polaris-unstyled": !0
    }
}
  , $oe = {
    selector: "[data-polaris-top-bar]"
}
  , hKe = {
    props: {
        "data-polaris-header-cell": !0
    },
    selector: "[data-polaris-header-cell]"
}
  , gKe = {
    selector: "[data-portal-id]"
};
let pF = class EB {
    [k: string]: any;
    static get zero() {
        return new EB
    }
    constructor({top: t=0, left: n=0, width: i=0, height: a=0}={}) {
        this.top = t,
        this.left = n,
        this.width = i,
        this.height = a
    }
    get center() {
        return {
            x: this.left + this.width / 2,
            y: this.top + this.height / 2
        }
    }
}
;
function Ug(e) {
    if (!(e instanceof Element))
        return new pF({
            width: window.innerWidth,
            height: window.innerHeight
        });
    const t = e.getBoundingClientRect();
    return new pF({
        top: t.top,
        left: t.left,
        width: t.width,
        height: t.height
    })
}
const Hoe = typeof window > "u" || typeof document > "u";
function Woe(e, t) {
    return Object.keys(e).reduce( (n, i) => (n[i] = t(i, e[i]),
    n), {})
}
function qoe(e, t) {
    return e.addListener ? (e.addListener(t),
    () => e.removeListener(t)) : (e.addEventListener("change", t),
    () => e.removeEventListener("change", t))
}
class yb {
    [k: string]: any;
    static createAndListen(t, n) {
        const i = new this(t,n);
        return i.listenIfClient(),
        i
    }
    constructor(t, n) {
        this._listeners = new Set,
        this._mqlUnsubscribers = [],
        this.notify = M0( () => {
            this._listeners.forEach(i => i())
        }
        , yb.DEBOUNCE_TIME, {
            trailing: !0
        }),
        this.stop = () => {
            this._mqlUnsubscribers.forEach(i => i()),
            this._mqlUnsubscribers = []
        }
        ,
        this.subscribe = i => (this._listeners.add(i),
        () => {
            this._listeners.delete(i)
        }
        ),
        this.useMediaQueryState = i => React.useSyncExternalStore(this.subscribe, () => this.state, () => this.getDefaults(i == null ? void 0 : i.defaults)),
        this.useMediaQueryStateSelector = i => React.useSyncExternalStore(this.subscribe, () => i(this.state), () => i(this.getDefaults())),
        this.queries = t,
        this.options = n,
        this._state = this.getDefaults()
    }
    get state() {
        return this._state
    }
    get listenerCount() {
        return this._listeners.size
    }
    listenIfClient() {
        if (!(Hoe || window.matchMedia === void 0))
            return this._mqlUnsubscribers = Object.entries(this.queries).map( ([t,n]) => {
                const i = r => {
                    this._state = {
                        ...this.state,
                        [t]: r.matches
                    },
                    this.notify()
                }
                  , a = window.matchMedia(n);
                return this._state = {
                    ...this.state,
                    [t]: a.matches
                },
                qoe(a, i)
            }
            ),
            this.stop
    }
    getDefaults(t) {
        return Woe(this.queries, n => {
            var i;
            return typeof t == "boolean" ? t : t && typeof t[n] == "boolean" ? t[n] : (i = this.options) != null && i.defaults && typeof this.options.defaults[n] == "boolean" ? this.options.defaults[n] : !1
        }
        )
    }
}
yb.DEBOUNCE_TIME = 40;
const Goe = {
    navigationBarCollapsed: "(max-width: 767.95px)",
    stackedContent: "(max-width: 1039.95px)"
}
  , Koe = yb.createAndListen(Goe);
function Qoe() {
    return Koe.state.stackedContent
}
const $g = 1e3 / 60;
class Zoe {
    [k: string]: any;
    constructor(t) {
        this.stickyItems = [],
        this.stuckItems = [],
        this.container = null,
        this.topBarOffset = 0,
        this.handleResize = M0( () => {
            this.manageStickyItems()
        }
        , $g, {
            leading: !0,
            trailing: !0,
            maxWait: $g
        }),
        this.handleScroll = M0( () => {
            this.manageStickyItems()
        }
        , $g, {
            leading: !0,
            trailing: !0,
            maxWait: $g
        }),
        t && this.setContainer(t)
    }
    registerStickyItem(t) {
        this.stickyItems.push(t)
    }
    unregisterStickyItem(t) {
        const n = this.stickyItems.findIndex( ({stickyNode: i}) => t === i);
        this.stickyItems.splice(n, 1)
    }
    getStickyItem(t) {
        return this.stickyItems.find( ({stickyNode: n}) => t === n)
    }
    setContainer(t) {
        this.container = t,
        MB(t) && this.setTopBarOffset(t),
        this.container.addEventListener("scroll", this.handleScroll),
        window.addEventListener("resize", this.handleResize),
        this.manageStickyItems()
    }
    removeScrollListener() {
        this.container && (this.container.removeEventListener("scroll", this.handleScroll),
        window.removeEventListener("resize", this.handleResize))
    }
    manageStickyItems() {
        if (this.stickyItems.length <= 0)
            return;
        const t = this.container ? Yoe(this.container) : 0
          , n = Ug(this.container).top + this.topBarOffset;
        this.stickyItems.forEach(i => {
            const {handlePositioning: a} = i
              , {sticky: r, top: s, left: l, width: c} = this.evaluateStickyItem(i, t, n);
            this.updateStuckItems(i, r),
            a(r, s, l, c)
        }
        )
    }
    evaluateStickyItem(t, n, i) {
        var A;
        const {stickyNode: a, placeHolderNode: r, boundingElement: s, offset: l, disableWhenStacked: c} = t
          , d = r.getBoundingClientRect()
          , p = a.getBoundingClientRect()
          , f = c && Qoe();
        if (d.width === 0 || p.width === 0 || p.height === 0 || f)
            return {
                sticky: !1,
                top: 0,
                left: 0,
                width: "auto"
            };
        const v = l ? this.getOffset(a) + parseInt(Bf.space["space-500"], 10) : this.getOffset(a)
          , g = n + v
          , y = r.getBoundingClientRect().top - i + n
          , b = i + v
          , k = r.getBoundingClientRect().width
          , C = r.getBoundingClientRect().left;
        let x;
        if (s == null)
            x = g >= y;
        else {
            const _ = a.getBoundingClientRect().height || ((A = a.firstElementChild) == null ? void 0 : A.getBoundingClientRect().height) || 0
              , w = s.getBoundingClientRect().bottom - _ + n - i;
            x = g >= y && g < w
        }
        return {
            sticky: x,
            top: b,
            left: C,
            width: k
        }
    }
    updateStuckItems(t, n) {
        const {stickyNode: i} = t;
        n && !this.isNodeStuck(i) ? this.addStuckItem(t) : !n && this.isNodeStuck(i) && this.removeStuckItem(t)
    }
    addStuckItem(t) {
        this.stuckItems.push(t)
    }
    removeStuckItem(t) {
        const {stickyNode: n} = t
          , i = this.stuckItems.findIndex( ({stickyNode: a}) => n === a);
        this.stuckItems.splice(i, 1)
    }
    getOffset(t) {
        if (this.stuckItems.length === 0)
            return 0;
        let n = 0
          , i = 0;
        const a = this.stuckItems.length
          , r = Ug(t);
        for (; i < a; ) {
            const s = this.stuckItems[i].stickyNode;
            if (s !== t) {
                const l = Ug(s);
                Joe(r, l) || (n += Ug(s).height)
            } else
                break;
            i++
        }
        return n
    }
    isNodeStuck(t) {
        return this.stuckItems.findIndex( ({stickyNode: i}) => t === i) >= 0
    }
    setTopBarOffset(t) {
        const n = t.querySelector(`:not(${Uoe.selector}) ${$oe.selector}`);
        this.topBarOffset = n ? n.clientHeight : 0
    }
}
function MB(e) {
    return e === document
}
function Yoe(e) {
    return MB(e) ? document.body.scrollTop || document.documentElement.scrollTop : e.scrollTop
}
function Joe(e, t) {
    const n = e.left
      , i = e.left + e.width
      , a = t.left;
    return t.left + t.width < n || i < a
}
const Xoe = React.createContext(void 0)
  , ese = React.createContext(void 0)
  , tse = React.createContext(void 0)
  , nse = 20
  , Lv = 30
  , ise = Lv + 10;
function ase() {
    var a;
    const e = document.createElement("div");
    e.setAttribute("style", `position: absolute; opacity: 0; transform: translate3d(-9999px, -9999px, 0); pointer-events: none; width:${Lv}px; height:${Lv}px;`);
    const t = document.createElement("div");
    t.setAttribute("style", `width:100%; height: ${ise}; overflow:scroll; scrollbar-width: thin;`),
    e.appendChild(t),
    document.body.appendChild(e);
    const n = Lv - (((a = e.firstElementChild) == null ? void 0 : a.clientWidth) ?? 0)
      , i = Math.min(n, nse);
    document.documentElement.style.setProperty("--pc-app-provider-scrollbar-width", `${i}px`),
    document.body.removeChild(e)
}
const rse = [...new Set(lD.flatMap(e => fm[e]))];
class ose extends React.Component {
    [k: string]: any;
    constructor(t) { 
        super(t),
        this.setBodyStyles = () => {
            document.body.style.backgroundColor = "var(--p-color-bg)",
            document.body.style.color = "var(--p-color-text)"
        }
        ,
        this.setRootAttributes = () => {
            const i = this.getThemeName()
              , a = fm[i];
            rse.forEach(r => {
                document.documentElement.classList.toggle(Wx(r), a == null ? void 0 : a.includes(r))
            }
            )
        }
        ,
        this.getThemeName = () => this.props.theme ?? lu,
        this.stickyManager = new Zoe;
        const {linkComponent: n} = this.props;
        this.state = {
            link: n
        }
    }
    componentDidMount() {
        if (document != null) {
            this.stickyManager.setContainer(document),
            this.setBodyStyles(),
            this.setRootAttributes();
            const t = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome") && (navigator.userAgent.includes("Version/16.1") || navigator.userAgent.includes("Version/16.2") || navigator.userAgent.includes("Version/16.3"))
              , n = navigator.userAgent.includes("Shopify Mobile/iOS") && (navigator.userAgent.includes("OS 16_1") || navigator.userAgent.includes("OS 16_2") || navigator.userAgent.includes("OS 16_3"));
            (t || n) && document.documentElement.classList.add("Polaris-Safari-16-Font-Optical-Sizing-Patch")
        }
        ase()
    }
    componentDidUpdate({linkComponent: t}) {
        const {linkComponent: n} = this.props;
        this.setRootAttributes(),
        n !== t && this.setState({
            link: n
        })
    }
    render() {
        const {children: t, features: n={}} = this.props
          , i = this.getThemeName()
          , {link: a} = this.state;
        return React.createElement(FB.Provider, {
            value: i,
            children: React.createElement(LB.Provider, {
                value: qx(i),
                children: React.createElement(tse.Provider, {
                    value: n,
                    children: React.createElement(Xoe.Provider, {
                        value: this.stickyManager,
                        children: React.createElement(ese.Provider, {
                            value: a,
                            children: React.createElement(Voe, {
                                children: React.createElement(joe, {
                                    children: t
                                })
                            })
                        })
                    })
                })
            })
        })
    }
}
function RB(e) {
    const t = kn()
      , {isNativeApp: n, isMobile: i} = t;
    if (n || i)
        switch (e) {
        case "light":
            return "light-mobile";
        case "dark-experimental":
            return "dark-mobile-experimental";
        case void 0:
            return "light-mobile";
        default:
            return e
        }
    return e ?? lu
}
function sse({theme: e, children: t, ...n}) {
    // var i = E(1);
    try {
       // var a = E(1);
        try {
            const r = RB(e);
            return React.createElement(ose, {
                theme: r,
                ...n,
                children: React.createElement(Qy, {
                    theme: r,
                    ...n,
                    children: t
                })
            })
        } finally {
          //  a.f()
        }
    } finally {
       // i.f()
    }
}
function lse(e) {
    try {
        return new URL(e).href
    } catch {
        return e 
    }
}




















function Vv(e) {
    if (typeof e == "object") {
        if (e == null)
            return e;
        if (Array.isArray(e))
            return e.map(t => Vv(t));
        if (om(e))
            return Object.keys(e).reduce( (t, n) => ({
                ...t,
                [n]: Vv(e[n])
            }), {})
    }
    return typeof e == "function" && F8(e) ? (...n) => ($l(n),
    e(...Vv(n))) : e
}
const ove = "You attempted to call a function that was already revoked.";
function J0(e) {
    if (typeof e == "object") {
        if (e == null)
            return e;
        if (Array.isArray(e))
            return e.map(t => J0(t));
        if (om(e))
            return Object.keys(e).reduce( (t, n) => ({
                ...t,
                [n]: J0(e[n])
            }), {})
    }
    return typeof e == "function" ? async (...n) => {
        try {
            return await e(...n)
        } catch (i) {
            if (i.toString().includes(ove))
                return;
            throw i
        }
    }
    : e
}
function fGe(e, t) {
    const n = Yf(e, i => t == null ? void 0 : t(i));
    return By(n)
}
function lve(e) {
    var a, r;
    if (!e)
        return !1;
    const {adminMobileBridge: t} = ((r = (a = e.host) == null ? void 0 : a.pluginApi) == null ? void 0 : r.mobileBridge) || {};
    if (!t || !t.isSupported || !t.supportsVersion(1.9) || !t.api.value)
        return !1;
    const n = t.api.value;
    return !!(n == null ? void 0 : n.mobileBridgeExtensibility)
}
const cve = 56
  , cd = new Map
  , uve = {
    scrollAnchorRefMap: cd,
    addScrollAnchor: (e, t) => {
        cd.has(e) || cd.set(e, t)
    }
    ,
    removeScrollAnchor: e => {
        cd.delete(e)
    }
    ,
    scrollToAnchor: (e, t={}) => {
        if (cd.has(e)) {
            const n = cd.get(e);
            n != null && n.current && mve(e, {
                anchor: n.current,
                ...t
            })
        }
    }
};
function CE(e) {
    return e instanceof HTMLElement
}
function N3(e) {
    return "alphaScrollTo"in e && typeof e.alphaScrollTo == "function"
}
function dve(e) {
    return (e && "element"in e ? e.element : e) || null
}
function mve(e, t) {
    const {anchor: n, negateTopBar: i=!1, topBarHeight: a=cve, addToUrl: r=!1, containerRef: o=null, containerFinalTop: l, calculateOffsetAbsolutely: c=!1, focusAfterScroll: d=!1, onScrollEnd: p} = t;
    function h() {
        var A, _;
        if (o != null && o.current)
            return o.current;
        if (Gr() && !(((_ = (A = window.navigator) == null ? void 0 : A.userAgent) == null ? void 0 : _.includes("Android")) ?? !1))
            return window;
        const x = document.getElementById("AppFrameScrollable");
        return x || window
    }
    const g = h()
      , y = (CE(g) || N3(g) ? g.scrollTop : window.scrollY || document.documentElement.scrollTop) + n.getBoundingClientRect().top
      , k = c ? y : n.offsetTop;
    let S = i ? k - a : k;
    if (o != null && o.current && typeof l == "number") {
        const _ = ("element"in (o == null ? void 0 : o.current) ? o.current.element : o.current).getBoundingClientRect().top - l;
        S -= _
    }
    r && (window.location.hash = e);
    const C = dve(g);
    if (C != null && C.scrollTo ? C.scrollTo({
        top: S,
        left: 0,
        behavior: "smooth"
    }) : CE(g) ? g.scrollTop = S : window.scrollTo(0, S),
    d || p) {
        const x = setTimeout( () => A.disconnect(), 1e3)
          , A = new IntersectionObserver( (_, w) => {
            var T;
            for (const {isIntersecting: P} of _)
                P && (p == null || p(),
                (d || p) && ((T = m5(n)) == null || T.focus({
                    preventScroll: !0
                })),
                w.disconnect(),
                x && clearTimeout(x))
        }
        ,{
            threshold: 1
        });
        A.observe(n)
    }
}
const hGe = React.createContext(uve);
function AE(e) {
    var a;
    const {router: t} = Ye()
      , n = e ? t.getRouteId(e) : null
      , i = n ? t.getRoute(n) : null;
    return !!((a = i == null ? void 0 : i.handle) != null && a.modal)
}
function pve({children: e, nodeRef: t}) {
    var a;
    var n = E(1);
    try {
        var i = E(1);
        try {
            const r = Xa()
              , {pathname: o} = Ct()
              , {router: l} = Ye()
              , c = AE(o)
              , d = AE((a = l == null ? void 0 : l.previousRoute) == null ? void 0 : a.pathname);
            return React.useEffect( () => {
                var h;
                if (c || d || !l.previousRoute)
                    return;
                const p = t == null ? void 0 : t.current;
                p && N3(p) ? p.alphaScrollTo(0, 0) : p ? p.scrollTo(0, 0) : (h = r.scrollableRef.current) == null || h.alphaScrollTo(0, 0)
            }
            , [o, t, r.scrollableRef, c, d, l]),
            React.createElement(s.Fragment, {
                children: e
            })
        } finally {
            i.f()
        }
    } finally {
        n.f()
    }
}
const T3 = React.createContext(void 0);
function fve({children: e, intent: t}) {
    var n = E(1);
    try {
        var i = E(1);
        try {
            const {router: a} = Ye();
            return React.useEffect( () => {
                var o, l, c;
                if ((c = (l = (o = t.instance.pluginApi) == null ? void 0 : o.title) == null ? void 0 : l.breadcrumbs) != null && c.length)
                    return;
                const r = t.instance.runtime;
                a.getBreadcrumbs(r.router).then(d => {
                    var p, h, g;
                    (g = t.instance.pluginApi.title) == null || g.set({
                        breadcrumbs: d,
                        icon: (p = d[0]) == null ? void 0 : p.icon,
                        title: (h = d == null ? void 0 : d[d.length - 1]) == null ? void 0 : h.title
                    })
                }
                ).catch( () => {
                    var d;
                    (d = t.instance.pluginApi.title) == null || d.set({
                        title: r.title
                    })
                }
                )
            }
            ),
            React.useEffect( () => {
                t.telemetry.track("rendered", {
                    eventData: "dialog"
                })
            }
            , []),
            React.createElement(T3.Provider, {
                value: {
                    intent: t
                },
                children: e
            })
        } finally {
            i.f()
        }
    } finally {
        n.f()
    }
}
function P3() {
    const e = React.useContext(T3);
    if (e)
        return e.intent
}
const hve = "Close overlay"
  , gve = {
    close: hve
}
  , vve = "Fermer la superposition"
  , yve = {
    close: vve
}
  , bve = {
    [Symbol.for("i18n-id")]: "Page_18b3cq",
    en: gve,
    fr: yve
};
function kve() {
    const e = React.useRef(null);
    return React.useEffect( () => {
        const t = e.current;
        if (!t)
            return;
        const n = r => (r.preventDefault(),
        r.stopPropagation(),
        !1)
          , i = ["click", "keydown", "focus"];
        return i.forEach(r => t.addEventListener(r, n, {
            capture: !0
        })),
        t.querySelectorAll("a").forEach(r => {
            r.removeAttribute("href")
        }
        ),
        () => {
            i.forEach(r => t.removeEventListener(r, n, {
                capture: !0
            }))
        }
    }
    , []),
    e
}
const Sve = "_NonInteractive_1o46w_1"
  , Cve = {
    NonInteractive: Sve
};
function Ave({children: e}) {
    var t = E(1);
    try {
        var n = E(1);
        try {
            const i = kve();
            return React.createElement("div", {
                ref: i,
                className: Cve.NonInteractive,
                "aria-hidden": "true",
                children: e
            })
        } finally {
            n.f()
        }
    } finally {
        t.f()
    }
}
const xve = "_IntentPageWrapper_pbm61_1"
  , _ve = "_Scrollable_pbm61_6"
  , wve = "_IntentPageContent_pbm61_11"
  , rA = {
    IntentPageWrapper: xve,
    Scrollable: _ve,
    IntentPageContent: wve
};




function Nve(e) {
    var i, a, r, o;
    var t = E(1);
    try {
        var n = E(1);
        try {
            const l = P3()
              , [c] = ce(bve);
            Vy( () => {
                l && (l.page.value = e)
            }
            , [l, e]);
            const d = React.useCallback( () => {
                l && (l.telemetry.track("closed", {
                    eventData: "button"
                }),
                l.resolve({
                    force: !0,
                    code: Oy.CLOSED
                }))
            }
            , [l]);
            if (!l)
                return null;
            const p = (a = (i = l.instance.pluginApi) == null ? void 0 : i.title) == null ? void 0 : a.breadcrumbs;
            return React.createElement("div", {
                className: rA.IntentPageWrapper,
                children: [React.createElement(ve, {
                    padding: "400",
                    borderBlockEndWidth: "0165",
                    borderColor: "border",
                    children: React.createElement(Ee, {
                        align: "space-between",
                        blockAlign: "center",
                        children: [p && p.length > 0 ? React.createElement(Ave, {
                            children: React.createElement(VB, {
                                breadcrumbs: p
                            })
                        }) : React.createElement(te, {
                            as: "h1",
                            variant: "headingMd",
                            fontWeight: "bold",
                            children: (o = (r = l.instance.pluginApi) == null ? void 0 : r.title) == null ? void 0 : o.title
                        }), React.createElement(nt, {
                            id: "activity-dialog-close-button",
                            variant: "tertiary",
                            onClick: d,
                            accessibilityLabel: c.translate("close"),
                            icon: "x"
                        })]
                    })
                }), React.createElement(La, {
                    horizontal: !1,
                    shadow: !0,
                    className: rA.Scrollable,
                    children: React.createElement("div", {
                        className: rA.IntentPageContent,
                        children: e.children
                    })
                })]
            })
        } finally {
            n.f()
        }
    } finally {
        t.f()
    }
}
function L3() {
    const e = Bi()
      , t = Ye().router
      , n = st();
    return {
        navigateToUrl(i, a) {
            if (i)
                if (a)
                    window.open(i, "_blank");
                else if (n.isExternal(i))
                    window.location.assign(i);
                else {
                    const r = t.toRoute(i) ?? i;
                    e(gx(r))
                }
        }
    }
}
function I3() {
    const {navigateToUrl: e} = L3();
    return React.useMemo( () => ({
        mapTitleBarAction: t => {
            const {content: n, disabled: i, onAction: a, url: r, external: o, icon: l, image: c, destructive: d, showLabel: p, loading: h} = t;
            return {
                label: n,
                icon: l,
                imageUrl: c,
                disabled: i,
                destructive: d,
                showLabel: p,
                loading: h,
                onAction: () => {
                    a == null || a(),
                    e(r, o)
                }
            }
        }
    }), [e])
}
const Tve = "_MobileBridgePageChildrenWrapper_1dzu6_1"
  , Pve = "_noPadding_1dzu6_5"
  , xE = {
    MobileBridgePageChildrenWrapper: Tve,
    noPadding: Pve
};

function Lve() {
    return React.useRef(Gr()).current ? React.useContext(I5) : null
}
function _l2(e) {
    return React.isValidElement(e)
}
const Ive = Gr() ? Fve : e => e;
function Fve(e) {
    var P, L, I, R;
    const t = no()
      , n = Ct()
      , i = React.useRef(n);
    i.current = n;
    const {mapTitleBarAction: a} = I3()
      , r = Lve()
      , {pathname: o} = Ct()
      , l = !!(e.additionalMetadata || e.titleMetadata || _l2(e.primaryAction) || _l2(e.secondaryActions))
      , [c,d] = React.useState(l);
    if (React.useLayoutEffect( () => {
        if (r)
            return r.pageShown(o),
            () => {
                r.pageHidden(o)
            }
    }
    , []),
    !t)
        return {
            ...e
        };
    const p = (L = (P = e.breadcrumbs) == null ? void 0 : P[e.breadcrumbs.length - 1]) == null ? void 0 : L.title
      , h = e.subtitle && typeof e.subtitle != "string" ? void 0 : e.subtitle
      , g = h ? React.createElement(te, {
        variant: "bodySm",
        as: "span",
        tone: "subdued",
        children: h
    }) : void 0
      , v = e.additionalMetadata ? React.createElement(te, {
        variant: "bodyXs",
        as: "span",
        tone: "subdued",
        children: e.additionalMetadata
    }) : void 0
      , y = e.titleMetadata ? React.createElement(Ee, {
        children: e.titleMetadata
    }) : void 0
      , k = _l2(e.primaryAction) ? e.primaryAction : void 0
      , S = _l2(e.secondaryActions) ? e.secondaryActions : void 0
      , C = v || y || _l2(e.primaryAction) || _l2(e.secondaryActions) ? React.createElement(ve, {
        paddingBlockEnd: {
            sm: "400"
        },
        children: React.createElement(Xs, {
            children: React.createElement(iw, {
                threshold: .5,
                onIntersectionChange: j => {
                    d(j.isIntersecting)
                }
                ,
                children: React.createElement(Ee, {
                    gap: "100",
                    align: "space-between",
                    blockAlign: "end",
                    children: [React.createElement(pt, {
                        gap: "100",
                        children: [React.createElement(Ee, {
                            gap: "200",
                            blockAlign: "center",
                            align: "start",
                            children: [React.createElement(te, {
                                as: "span",
                                variant: "heading2xl",
                                children: p
                            }), y]
                        }), g ?? h, v]
                    }), React.createElement(pt, {
                        gap: "100",
                        children: [k, S]
                    })]
                })
            })
        })
    }) : void 0
      , x = React.createElement(s.Fragment, {
        children: [C, e.children]
    })
      , A = ( () => {
        const {primaryAction: j} = e;
        if (!_l2(e.primaryAction) && j && typeof j == "object" && "content"in j)
            return a(j)
    }
    )()
      , _ = !e.secondaryActions || _l2(e.secondaryActions) || (I = e.secondaryActions) == null ? void 0 : I.map(a)
      , w = (R = e.actionGroups) == null ? void 0 : R.map( ({title: j, actions: M}) => ({
        title: j,
        actions: M.map(a)
    }));
    n.pathname === window.location.pathname && (async () => await t.setTitleBar({
        title: c ? "" : p ?? "",
        subtitle: c ? void 0 : h,
        primaryAction: A,
        secondaryActions: _,
        actionGroups: w
    }, {
        pathname: n.pathname
    }))();
    const T = e.children ? React.createElement("div", {
        className: classnames(xE.MobileBridgePageChildrenWrapper, e.noMobileBridgePadding && xE.noPadding),
        children: x
    }) : x;
    return {
        ...e,
        title: p,
        children: T,
        primaryAction: A || k ? void 0 : e.primaryAction,
        secondaryActions: _ || S ? void 0 : e.secondaryActions,
        actionGroups: w ? void 0 : e.actionGroups,
        breadcrumbs: void 0
    }
}
const Eve = 50;




const Gy = React.createContext({
    isTransitioning: !1
})



function F3() {
    const {router: e = {}} = Ye()
      , [t,n] = React.useState(e == null ? void 0 : e.currentBreadcrumbs)
      , i = React.useContext(Gy)
      , a = useNavigation(); 
    return React.useEffect( () => {
        let r;
        return a.state === "idle" ? n(e.currentBreadcrumbs) : (i.isTransitioning || !("startViewTransition"in document)) && (r = setTimeout( () => {
            n(e.currentBreadcrumbs)
        }
        , Eve)),
        () => {
            r && clearTimeout(r)
        }
    }
    , [e.currentBreadcrumbs, i.isTransitioning, a.state]),
    t
}

const nm = e => {
    var t = E(1);
    try {
        var n = E(1);
        try {
            const i = P3();
            return Gr() ? React.createElement(E3, {
                ...e
            }) : i ? React.createElement(Nve, {
                ...e
            }) : React.createElement(Mve, {
                ...e
            })
        } finally {
            n.f()
        }
    } finally {
        t.f()
    }
}
;

function E3(e) {
    var i;
    var t = E(1);
    try {
        var n = E(1);
        try {
            const a = F3()
              , r = Ive({
                ...e,
                breadcrumbs: (i = a == null ? void 0 : a[a.length - 1]) != null && i.title ? a : e.breadcrumbs
            });
            return React.createElement(_B, {
                ...r
            })
        } finally {
            n.f()
        }
    } finally {
        t.f()
    }
}
function Mve(e) {
    var t = E(1);
    try {
        const n = F3();
        return React.createElement(_B, {
            breadcrumbs: n,
            ...e
        })
    } finally {
        t.f()
    }
}

const gGe = Object.freeze(Object.defineProperty({
    __proto__: null,
    MobileBridgePage: E3,
    Page: nm,
    default: nm
}, Symbol.toStringTag, {
    value: "Module"
}));












export {rs as Card, he as Box, ose as AppProvider, xB as Page, ee as Text, sse as AppWrapper, gGe as PageGroup};


