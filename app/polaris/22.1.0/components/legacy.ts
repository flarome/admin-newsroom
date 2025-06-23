

import React from 'react';



const gm = React.createContext(!1);

 

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

function tZ(e: any): string[] {
  return Object.values(e).flatMap((t: any) =>
    typeof t === "object" && t !== null ? Object.keys(t) : []
  );
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



var aJ = {
    Card: "Polaris-Card"
}
  , Ag = {
    listReset: "Polaris-Box--listReset",
    Box: "Polaris-Box",
    visuallyHidden: "Polaris-Box--visuallyHidden",
    printHidden: "Polaris-Box--printHidden"
};
const he = React.forwardRef<any, any>( ({as: e="div", background: t, borderColor: n, borderStyle: i, borderWidth: a, borderBlockStartWidth: r, borderBlockEndWidth: s, borderInlineStartWidth: l, borderInlineEndWidth: c, borderRadius: d, borderEndStartRadius: p, borderEndEndRadius: f, borderStartStartRadius: v, borderStartEndRadius: g, children: y, color: b, id: k, minHeight: C, minWidth: x, maxWidth: A, overflowX: _, overflowY: w, outlineColor: T, outlineStyle: P, outlineWidth: I, padding: L, paddingBlock: R, paddingBlockStart: D, paddingBlockEnd: M, paddingInline: O, paddingInlineStart: z, paddingInlineEnd: B, role: H, shadow: q, tabIndex: W, width: V, printHidden: $, visuallyHidden: Q, position: K, insetBlockStart: J, insetBlockEnd: X, insetInlineStart: se, insetInlineEnd: ne, zIndex: Y, opacity: ue, ...ge}, de) => {
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
        // @ts-ignore
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
        // @ts-ignore
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
    static get zero() {
        return new EB
    }
    constructor({top: t=0, left: n=0, width: i=0, height: a=0}={}) {
        // @ts-ignore
        this.top = t,
        // @ts-ignore
        this.left = n,
        // @ts-ignore
        this.width = i,
        // @ts-ignore
        this.height = a
    }
    get center() {
        return {
            // @ts-ignore
            x: this.left + this.width / 2,
            // @ts-ignore
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




    static createAndListen(t, n) {
        const i = new this(t,n);
        return i.listenIfClient(),
        i
    }
    constructor(t, n) {
         // @ts-ignore
        this._listeners = new Set,
         // @ts-ignore
        this._mqlUnsubscribers = [],
         // @ts-ignore
        this.notify = M0( () => {
             // @ts-ignore
            this._listeners.forEach(i => i())
        }
        // @ts-ignore
        , yb.DEBOUNCE_TIME, {
            trailing: !0
        }),
         // @ts-ignore
        this.stop = () => {
             // @ts-ignore
            this._mqlUnsubscribers.forEach(i => i()),
             // @ts-ignore
            this._mqlUnsubscribers = []
        }
        ,
         // @ts-ignore
        this.subscribe = i => (this._listeners.add(i),
        () => {
             // @ts-ignore
            this._listeners.delete(i)
        }
        ),
         // @ts-ignore
        this.useMediaQueryState = i => React.useSyncExternalStore(this.subscribe, () => this.state, () => this.getDefaults(i == null ? void 0 : i.defaults)),
         // @ts-ignore
        this.useMediaQueryStateSelector = i => React.useSyncExternalStore(this.subscribe, () => i(this.state), () => i(this.getDefaults())),
         // @ts-ignore
        this.queries = t,
         // @ts-ignore
        this.options = n,
         // @ts-ignore
        this._state = this.getDefaults()
    }
    get state() {
         // @ts-ignore
        return this._state
    }
    get listenerCount() {
         // @ts-ignore
        return this._listeners.size
    }
    listenIfClient() {
        if (!(Hoe || window.matchMedia === void 0))
             // @ts-ignore
            return this._mqlUnsubscribers = Object.entries(this.queries).map( ([t,n]) => {
                const i = r => {
                     // @ts-ignore
                    this._state = {
                        ...this.state,
                        [t]: r.matches
                    },
                     // @ts-ignore
                    this.notify()
                }
                 // @ts-ignore
                  , a = window.matchMedia(n);
                   // @ts-ignore
                return this._state = {
                    ...this.state,
                    [t]: a.matches
                },
                qoe(a, i)
            }
            ),
             // @ts-ignore
            this.stop
    }
    getDefaults(t) {
         // @ts-ignore
        return Woe(this.queries, n => {
            var i;
             // @ts-ignore
            return typeof t == "boolean" ? t : t && typeof t[n] == "boolean" ? t[n] : (i = this.options) != null && i.defaults && typeof this.options.defaults[n] == "boolean" ? this.options.defaults[n] : !1
        }
        )
    }
}
// @ts-ignore
yb.DEBOUNCE_TIME = 40;
const Goe = {
    navigationBarCollapsed: "(max-width: 767.95px)",
    stackedContent: "(max-width: 1039.95px)"
}
// @ts-ignore
  , Koe = yb.createAndListen(Goe);
function Qoe() {
    return Koe.state.stackedContent
}
const $g = 1e3 / 60;
class Zoe {


    constructor(t) {
         // @ts-ignore
        this.stickyItems = [],
         // @ts-ignore
        this.stuckItems = [],
         // @ts-ignore
        this.container = null,
         // @ts-ignore
        this.topBarOffset = 0,
         // @ts-ignore
        this.handleResize = M0( () => {
            this.manageStickyItems()
        }
        , $g, {
            leading: !0,
            trailing: !0,
            maxWait: $g
        }),
         // @ts-ignore
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
         // @ts-ignore
        this.stickyItems.push(t)
    }
    unregisterStickyItem(t) {
         // @ts-ignore
        const n = this.stickyItems.findIndex( ({stickyNode: i}) => t === i);
         // @ts-ignore
        this.stickyItems.splice(n, 1)
    }
    getStickyItem(t) {
         // @ts-ignore
        return this.stickyItems.find( ({stickyNode: n}) => t === n)
    }
    setContainer(t) {
         // @ts-ignore
        this.container = t,
        MB(t) && this.setTopBarOffset(t),
         // @ts-ignore
        this.container.addEventListener("scroll", this.handleScroll),
         // @ts-ignore
        window.addEventListener("resize", this.handleResize),
        this.manageStickyItems()
    }
    removeScrollListener() {
         // @ts-ignore
        this.container && (this.container.removeEventListener("scroll", this.handleScroll),
         // @ts-ignore
        window.removeEventListener("resize", this.handleResize))
    }
    manageStickyItems() {
         // @ts-ignore
        if (this.stickyItems.length <= 0)
            return;
         // @ts-ignore
        const t = this.container ? Yoe(this.container) : 0
         // @ts-ignore
          , n = Ug(this.container).top + this.topBarOffset;
           // @ts-ignore
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
         // @ts-ignore
        this.stuckItems.push(t)
    }
    removeStuckItem(t) {
        const {stickyNode: n} = t
         // @ts-ignore
          , i = this.stuckItems.findIndex( ({stickyNode: a}) => n === a);
           // @ts-ignore
        this.stuckItems.splice(i, 1)
    }
    getOffset(t) {
         // @ts-ignore
        if (this.stuckItems.length === 0)
            return 0;
        let n = 0
          , i = 0;
           // @ts-ignore
        const a = this.stuckItems.length
          , r = Ug(t);
        for (; i < a; ) {
             // @ts-ignore
            const s = this.stuckItems[i].stickyNode;
            if (s !== t) {
                const l = Ug(s);
                 // @ts-ignore
                Joe(r, l) || (n += Ug(s).height)
            } else
                break;
            i++
        }
        return n
    }
    isNodeStuck(t) {
         // @ts-ignore
        return this.stuckItems.findIndex( ({stickyNode: i}) => t === i) >= 0
    }
    setTopBarOffset(t) {
        const n = t.querySelector(`:not(${Uoe.selector}) ${$oe.selector}`);
         // @ts-ignore
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
    constructor(t) { 
        super(t),
         // @ts-ignore
        this.setBodyStyles = () => {
            document.body.style.backgroundColor = "var(--p-color-bg)",
            document.body.style.color = "var(--p-color-text)"
        }
        , // @ts-ignore
        this.setRootAttributes = () => {
             // @ts-ignore
            const i = this.getThemeName()
              , a = fm[i];
            rse.forEach(r => {
                document.documentElement.classList.toggle(Wx(r), a == null ? void 0 : a.includes(r))
            }
            )
        }
        ,
         // @ts-ignore
        this.getThemeName = () => this.props.theme ?? lu,
          // @ts-ignore
        this.stickyManager = new Zoe;
         // @ts-ignore
        const {linkComponent: n} = this.props;
        this.state = {
            link: n
        }
    }
    componentDidMount() {
        if (document != null) {
             // @ts-ignore
            this.stickyManager.setContainer(document),
             // @ts-ignore
            this.setBodyStyles(),
             // @ts-ignore
            this.setRootAttributes();
            const t = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome") && (navigator.userAgent.includes("Version/16.1") || navigator.userAgent.includes("Version/16.2") || navigator.userAgent.includes("Version/16.3"))
              , n = navigator.userAgent.includes("Shopify Mobile/iOS") && (navigator.userAgent.includes("OS 16_1") || navigator.userAgent.includes("OS 16_2") || navigator.userAgent.includes("OS 16_3"));
            (t || n) && document.documentElement.classList.add("Polaris-Safari-16-Font-Optical-Sizing-Patch")
        }
        ase()
    }
    componentDidUpdate({linkComponent: t}) {
         // @ts-ignore
        const {linkComponent: n} = this.props;
         // @ts-ignore
        this.setRootAttributes(),
        n !== t && this.setState({
            link: n
        })
    }
    render() {
         // @ts-ignore
        const {children: t, features: n={}} = this.props
         // @ts-ignore
          , i = this.getThemeName()
           // @ts-ignore
          , {link: a} = this.state;
        return React.createElement(FB.Provider, {
            value: i,
            children: React.createElement(LB.Provider, {
                value: qx(i),
                children: React.createElement(tse.Provider, {
                    value: n,
                    children: React.createElement(Xoe.Provider, {
                         // @ts-ignore
                        value: this.stickyManager,
                        children: React.createElement(ese.Provider, {
                            value: a,
                             // @ts-ignore
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
    return !u.isValidElement(e) && e !== void 0
}
function Rd(e) {
    return u.isValidElement(e) && e !== void 0
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


function at() {
    const e = React.useContext(ND);
    if (!e)
        throw new ib("No i18n was provided.");
    return e
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
    }) : Rd(l) && (w = React.createElement(o.Fragment, {
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


export {rs as Card, he as Box, ose as AppProvider, xB as Page}